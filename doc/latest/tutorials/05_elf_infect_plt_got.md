---
documentID: "de604cc070551f92e9c54a9b226bb9617b773b0ea0a47073ee6e15e9dbd1c812"
docname: "tutorials/05_elf_infect_plt_got"
title: "05 - Infecting the PLT/GOT - LIEF Documentation"
description: "05 - Infecting the PLT/GOT. The objective of this tutorial is to hook an imported function in an ELF binary."
canonical: "https://lief.re/doc/latest/tutorials/05_elf_infect_plt_got.html"
markdownURL: "https://lief.re/doc/latest/tutorials/05_elf_infect_plt_got.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "3b7456c0e04033747d9fc47adec504489b9de583b3b2c27de5d252fbdbaefed9"
---

# [05 - Infecting the PLT/GOT](<https://lief.re/doc/latest/tutorials/05_elf_infect_plt_got.html#infecting-the-plt-got>)

The objective of this tutorial is to hook an imported function in an ELF binary.

---

Hooking imported functions by infecting the `.got` section is a well-known technique [[1]](<https://lief.re/doc/latest/tutorials/05_elf_infect_plt_got.html#f1>) [[2]](<https://lief.re/doc/latest/tutorials/05_elf_infect_plt_got.html#f2>), and this tutorial focuses on its implementation using LIEF.

These figures illustrate the PLT/GOT mechanism:![../_images/pltgot.png](https://lief.re/doc/latest/_images/pltgot.png)

With lazy binding, the first time the function is called, the `got` entry redirects to the PLT instruction.

![../_images/pltgot3.png](https://lief.re/doc/latest/_images/pltgot3.png)

The second time, the `got` entry holds the address in the shared library.

Basically, the infection is done in two steps:

> - First, we inject our hook.
> - Second, we redirect the targeted function to our hook by patching the `got`.

This can be summarized by the following figure:![../_images/pltgot2.png](https://lief.re/doc/latest/_images/pltgot2.png)

As an example, we will use a basic *crackme* that performs a *memcmp(3)* on the flag and user input.

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Damn_YoU_Got_The_Flag
char password[] = "\x18\x3d\x31\x32\x03\x05\x33\x09\x03\x1b\x33\x28\x03\x08\x34\x39\x03\x1a\x30\x3d\x3b";

inline int check(char* input);

int check(char* input) {
  for (int i = 0; i < sizeof(password) - 1; ++i) {
    password[i] ^= 0x5c;
  }
  return memcmp(password, input, sizeof(password) - 1);
}

int main(int argc, char **argv) {
  if (argc != 2) {
    printf("Usage: %s <password>\n", argv[0]);
    return EXIT_FAILURE;
  }

  if (strlen(argv[1]) == (sizeof(password) - 1) && check(argv[1]) == 0) {
    puts("You got it !!");
    return EXIT_SUCCESS;
  }

  puts("Wrong");
  return EXIT_FAILURE;

}
```

The flag is XORed with `0x5C`. To validate the *crackme*, the user must enter `Damn_YoU_Got_The_Flag`:

```console
$ crackme.bin foo
Wrong
$ crackme.bin Damn_YoU_Got_The_Flag
You got it !!
```

The hook will consist of printing the arguments of `memcmp` and returning `0`:

```cpp
#include "arch/x86_64/syscall.c"
#define stdout 1

int my_memcmp(const void* lhs, const void* rhs, int n) {
  const char msg[] = "Hook memcmp\n";
  _write(stdout, msg, sizeof(msg));
  _write(stdout, (const char*)lhs, n);
  _write(stdout, "\n", 2);
  _write(stdout, (const char*)rhs, n);
  _write(stdout, "\n", 2);
  return 0;
}
```

Since the hook will be injected into the crackme, it must meet the following requirements:

- Assembly code must be *position-independent* (compiled with `-fPIC` or `-pie/-fPIE` flags).
- It must not use external libraries such as `libc.so` (`-nostdlib -nodefaultlibs` flags).

Due to these requirements, the hook is compiled with: `gcc -nostdlib -nodefaultlibs -fPIC -Wl,-shared hook.c -o hook`.

## [Injecting the hook](<https://lief.re/doc/latest/tutorials/05_elf_infect_plt_got.html#injecting-the-hook>)

The first step is to inject the hook into the binary. To do so, we will add a [`Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment"):

```python
import lief

crackme = lief.parse("crackme.bin")
assert isinstance(crackme, lief.ELF.Binary)

hook = lief.parse("hook")
assert isinstance(hook, lief.ELF.Binary)

segment_added = crackme.add(hook.segments[0])
```

All assembly code for the hook is contained in the first [`LOAD`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.LOAD> "lief.ELF.Segment.TYPE.LOAD") segment of `hook`.

Once the hook is added, its virtual address will be the [`virtual_address`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.virtual_address> "lief.ELF.Segment.virtual_address") of `segment_added`, and we can proceed with the `got` patching.

## [Patching the got](<https://lief.re/doc/latest/tutorials/05_elf_infect_plt_got.html#patching-the-got>)

LIEF provides a function to easily patch the `got` entry associated with a [`Symbol`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol"):

**Binary.patch\_pltgot(*self*, *symbol\_name: str*, *address: int*) → None

**Binary.patch\_pltgot(*self*, *symbol: [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol")*, *address: int*) → None****

Overloaded function.

1. `patch_pltgot(self, symbol_name: str, address: int) -> None`

Patch the imported symbol’s name with the `address`

2. `patch_pltgot(self, symbol: lief._lief.ELF.Symbol, address: int) -> None`

Patch the imported [`Symbol`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol") with the `address`

The offset of the `memcmp` function is stored in the [`value`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.value> "lief.ELF.Symbol.value") attribute of the associated dynamic symbol. Thus, its virtual address will be:

- `my_memcmp`: [`value`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.value> "lief.ELF.Symbol.value") + `segment_added.virtual_address`

```python
hook: lief.ELF.Binary
segment_added: lief.ELF.Segment

my_memcmp = hook.get_symbol("my_memcmp")
assert my_memcmp is not None

my_memcmp_addr = segment_added.virtual_address + my_memcmp.value
```

Finally, we can patch `memcmp` from the crackme with this value:

```python
crackme.patch_pltgot("memcmp", my_memcmp_addr)
```

And rebuild it:

```python
crackme.write("crackme.hooked")
```

## [Run](<https://lief.re/doc/latest/tutorials/05_elf_infect_plt_got.html#run>)

Since a check on the input size is performed before checking the flag value, we must provide an input with the correct length (regardless of its content):

```console
$ crackme.hooked XXXXXXXXXXXXXXXXXXXXX
Hook memcmp
Damn_YoU_Got_The_Flag
XXXXXXXXXXXXXXXXXXXXX
You got it !!
```

References[[1](<https://lief.re/doc/latest/tutorials/05_elf_infect_plt_got.html#id1>)]

hxxp://vxheaven.org/lib/vrn00.html

[[2](<https://lief.re/doc/latest/tutorials/05_elf_infect_plt_got.html#id2>)]

[http://phrack.org/issues/56/7.html](<http://phrack.org/issues/56/7.html>)
