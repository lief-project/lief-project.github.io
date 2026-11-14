---
documentID: "b4a6b91e04613ef19bf10bbd51ed0c91820c881bc21c65e215e734deb729716c"
docname: "tutorials/06_pe_hooking"
title: "06 - PE Hooking (Deprecated) - LIEF Documentation"
description: "06 - PE Hooking (Deprecated). The objective of this tutorial is to show how to hook imported functions."
canonical: "https://lief.re/doc/latest/tutorials/06_pe_hooking.html"
markdownURL: "https://lief.re/doc/latest/tutorials/06_pe_hooking.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "e01415c0cd8cb98491ce78241faacff1b789e6544716d919acca30f50b85f384"
---

# [06 - PE Hooking (Deprecated)](<https://lief.re/doc/latest/tutorials/06_pe_hooking.html#pe-hooking-deprecated>)

> **Warning**
> 
> This tutorial is no longer functional as the PE hooking functions have been removed from LIEF.

The objective of this tutorial is to show how to hook imported functions.

---

The targeted binary is a simple `PE64` *HelloWorld* that prints the first argument to the console:

```cpp
#include "stdafx.h"
#include <stdio.h>

int main(int argc, char** argv) {
  printf("Hello: %s\n", argv[1]);
  return 0;
}
```

```console
$ PE64_x86-64_binary_HelloWorld.exe World
$ Hello: World
```

Using LIEF, we will replace the function that prints the message to the console with a `MessageBox`.

By disassembling the binary, we can see that the *print* occurs in the function `sub_140001030`, which uses two external functions: `__acrt_iob_func` and `__stdio_common_vfprintf`.[![../_images/06_hooking_1.png](https://lief.re/doc/latest/_images/06_hooking_1.png)](<https://lief.re/doc/latest/_images/06_hooking_1.png>) [![../_images/06_hooking_2.png](https://lief.re/doc/latest/_images/06_hooking_2.png)](<https://lief.re/doc/latest/_images/06_hooking_2.png>)

According to the Microsoft x64 calling convention, the format string is located in the `rcx` register, and the input message is in the `rdx` register.

Basically, the [hooking code](<https://lief.re/doc/latest/tutorials/06_pe_hooking.html#hooking-code>) replaces the `__acrt_iob_func` function and displays a `MessageBox` with the `rdx` message.

hooking code

```nasm
add rsp, 0x48         ; Stack unwind
xor rcx, rcx          ; hWnd
mov rdx, rdx          ; Message
mov r8,  0x0140009000 ; Title
xor r9, r9            ; MB_OK
mov rax, 0x014000A3E4 ; MessageBoxA address
call [rax]            ; MessageBoxA(hWnd, Message, Title, MB_OK)
xor rcx, rcx          ; exit value
mov rax, 0x014000A3d4 ; ExitProcess address
call [rax]            ; ExitProcess(0)
ret                   ; Never reached
```

> **Note**
> 
> As in tutorial [02 - Create a PE from scratch (Deprecated)](<https://lief.re/doc/latest/tutorials/02_pe_from_scratch.html#pe-from-scratch>), the addresses of `MessageBoxA` and `ExitProcess` can be found using the function:

First, we create the `.htext` section, which will hold the hooking code:

```python
section_text                 = lief.PE.Section(".htext")
section_text.content         = code
section_text.virtual_address = 0x7000
section_text.characteristics = lief.PE.Section.CHARACTERISTICS.CNT_CODE | lief.PE.Section.CHARACTERISTICS.MEM_READ | lief.PE.Section.CHARACTERISTICS.MEM_EXECUTE

section_text = pe.add_section(section_text)
```

Next, we create the `.hdata` section for the `MessageBox` title:

```python
title   = "LIEF is awesome\0"
data =  list(map(ord, title))

section_data                 = lief.PE.Section(".hdata")
section_data.content         = data
section_data.virtual_address = 0x8000
section_data.characteristics = lief.PE.Section.CHARACTERISTICS.CNT_INITIALIZED_DATA | lief.PE.Section.CHARACTERISTICS.MEM_READ

section_data = pe.add_section(section_data)
```

Since ASLR is enabled, we will disable it to avoid dealing with relocations:

```python
binary: lief.PE.Binary

binary.optional_header.dll_characteristics &= (
    ~lief.PE.OptionalHeader.DLL_CHARACTERISTICS.DYNAMIC_BASE
)
```

We will also disable `NX` protection:

```python
binary: lief.PE.Binary

binary.optional_header.dll_characteristics &= (
    ~lief.PE.OptionalHeader.DLL_CHARACTERISTICS.NX_COMPAT
)
```

As `ExitProcess` is not imported in `KERNEL32.dll`, we need to add it:

```python
binary: lief.PE.Binary

kernel32 = binary.get_import("KERNEL32.dll")
kernel32.add_entry("ExitProcess")
```

The `MessageBoxA` function is located in `user32.dll`, so we must add it:

```python
user32 = binary.add_library("user32.dll")
user32.add_entry("MessageBoxA")
```

Then, we proceed to hook the `__acrt_iob_func` function:

```python
pe.hook_function("__acrt_iob_func", binary.optional_header.imagebase + section_text.virtual_address)
```

Finally, we configure the [`Builder`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder> "lief.PE.Builder") to create a new import table and patch the original one with trampolines.

```python
builder = lief.PE.Builder(binary)

builder.build_imports(True).patch_imports(True)

builder.build()

builder.write("lief_pe_hooking.exe")
```

Now we can run the final executable:

```console
$ lief_pe_hooking.exe "Hooking World"
```

[![../_images/06_hooking_3.png](https://lief.re/doc/latest/_images/06_hooking_3.png)](<https://lief.re/doc/latest/_images/06_hooking_3.png>)
