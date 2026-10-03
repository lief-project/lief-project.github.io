---
documentID: "2ae40ca2da2738c29f0d4267ec9b59b051672abfd8b2216fa6d934761496068c"
docname: "tutorials/04_elf_hooking"
title: "04 - ELF Hooking - LIEF Documentation"
description: "04 - ELF Hooking. The objective of this tutorial is to hook a library function."
canonical: "https://lief.re/doc/latest/tutorials/04_elf_hooking.html"
markdownURL: "https://lief.re/doc/latest/tutorials/04_elf_hooking.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "cbb83f8adce49e1d43af860a0ac1b216fea6b02252aeed048ece4e657690dd24"
---

# [04 - ELF Hooking](<https://lief.re/doc/latest/tutorials/04_elf_hooking.html#elf-hooking>)

The objective of this tutorial is to hook a library function.

---

In the previous tutorial, we saw how to swap symbol names in a shared library. We will now see the mechanism for hooking a function in a shared library.

The targeted library is the standard math library (`libm.so`), and we will insert a hook on the `exp` function so that \(\exp(x) = x + 1\). The source code of the sample that uses this function is provided in the following listing:

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main(int argc, char **argv) {
  if (argc != 2) {
    printf("Usage: %s <a> \n", argv[0]);
    exit(-1);
  }

  int a = atoi(argv[1]);
  printf("exp(%d) = %f\n", a, exp(a));
  return 0;
}
```

The hook function is as follows:

```cpp
double hook(double x) {
  return x + 1;
}
```

Compiled with `gcc -Os -nostdlib -nodefaultlibs -fPIC -Wl,-shared hook.c -o hook`.

To inject this hook into the library, we use the [`add()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.add> "lief.ELF.Binary.add") (segment) method:

**Binary.add(*self*, *arg: [lief.\_lief.ELF.DynamicEntry](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief._lief.ELF.DynamicEntry")*, */*) → [lief.\_lief.ELF.DynamicEntry](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief._lief.ELF.DynamicEntry")

**Binary.add(*self*, *section: [lief.\_lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief._lief.ELF.Section")*, *loaded: bool = True*, *pos: [lief.\_lief.ELF.Binary.SEC\_INSERT\_POS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.SEC_INSERT_POS> "lief._lief.ELF.Binary.SEC_INSERT_POS") = SEC\_INSERT\_POS.AUTO*) → [lief.\_lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief._lief.ELF.Section") | None

**Binary.add(*self*, *segment: [lief.\_lief.ELF.Segment](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief._lief.ELF.Segment")*, *base: int = 0*) → [lief.\_lief.ELF.Segment](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief._lief.ELF.Segment") | None

**Binary.add(*self*, *note: [lief.\_lief.ELF.Note](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief._lief.ELF.Note")*) → [lief.\_lief.ELF.Note](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief._lief.ELF.Note")********

Overloaded function.

1. `add(self, arg: lief._lief.ELF.DynamicEntry, /) -> lief._lief.ELF.DynamicEntry`

dynamic\_entry

2. `add(self, section: lief._lief.ELF.Section, loaded: bool = True, pos: lief._lief.ELF.Binary.SEC_INSERT_POS = SEC_INSERT_POS.AUTO) -> lief._lief.ELF.Section | None`

   > Add the given [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") to the binary.
   >
   > If the section does not aim at being loaded in memory, the `loaded` parameter has to be set to `False` (default: `True`)
3. `add(self, segment: lief._lief.ELF.Segment, base: int = 0) -> lief._lief.ELF.Segment | None`

Add a new [`Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment") in the binary

4. `add(self, note: lief._lief.ELF.Note) -> lief._lief.ELF.Note`

Add a new [`Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief.ELF.Note") in the binary

First, we find the code for our hook function and add it to the library:

```python
libm: lief.ELF.Binary
hook: lief.ELF.Binary

exp_symbol = libm.get_symbol("exp")
hook_symbol = hook.get_symbol("hook")
assert hook_symbol is not None

code_segment = hook.segment_from_virtual_address(hook_symbol.value)
assert code_segment is not None

segment_added = libm.add(code_segment)
```

Once the stub is injected, we must calculate the new address for the `exp` symbol and update it:

```python
new_address = (
    segment_added.virtual_address + hook_symbol.value - code_segment.virtual_address
)
exp_symbol.value = new_address
exp_symbol.type = lief.ELF.Symbol.TYPE.FUNC  # it might have been GNU_IFUNC
```

Note that we must update the symbol type to a regular FUNC because, on many distributions, libm.so is built with automatic hardware detection and exposes symbols as [GNU\_IFUNC](<https://sourceware.org/glibc/wiki/GNU_IFUNC>), which uses a different dynamic binding protocol compared to regular functions.

Finally, we write the patched library to a file in the current directory:

```python
libm.write("libm.so.6")
```

To test the patched library:

```console
$ ./do_math.bin 1
exp(1) = 2.718282
$ LD_LIBRARY_PATH=. ./do_math.bin 1
exp(1) = 2.000000
```
