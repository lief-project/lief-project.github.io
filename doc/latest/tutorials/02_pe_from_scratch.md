---
documentID: "187b83be6545a1c1d470544442537f6e2d318348b6f7c9fed50ab6982e940da0"
docname: "tutorials/02_pe_from_scratch"
title: "02 - Create a PE from scratch (Deprecated) - LIEF Documentation"
description: "02 - Create a PE from scratch (Deprecated). In this tutorial, we introduce the LIEF API for creating a simple PE executable from scratch."
canonical: "https://lief.re/doc/latest/tutorials/02_pe_from_scratch.html"
markdownURL: "https://lief.re/doc/latest/tutorials/02_pe_from_scratch.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "624399baaec0ba136041a8e88f5ad845f523eccbafa18de7f477da1f12272bc4"
---

# [02 - Create a PE from scratch (Deprecated)](<https://lief.re/doc/latest/tutorials/02_pe_from_scratch.html#create-a-pe-from-scratch-deprecated>)

> **Warning**
> 
> This tutorial is no longer functional or accurate for LIEF version &gt;= `0.17.0`.

In this tutorial, we introduce the LIEF API for creating a simple PE executable from scratch.

---

LIEF enables the creation of a simple PE from scratch. The aim of this tutorial is to create an executable that shows a “Hello World” `MessageBoxA`.

First, we must create a [`Binary`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary"):

```python
from lief import PE

binary32 = PE.Binary("pe_from_scratch", PE.PE_TYPE.PE32)
```

The first parameter is the binary name, and the second is the binary type: `PE32` or `PE32_PLUS` (see [`PE_TYPE`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PE_TYPE> "lief.PE.PE_TYPE")). The [`Binary`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary") constructor automatically creates [`DosHeader`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader> "lief.PE.DosHeader"), [`Header`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header> "lief.PE.Header"), [`OptionalHeader`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader> "lief.PE.OptionalHeader"), and an empty [`DataDirectory`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory").

Now that we have a minimal binary, we must add sections. We will have a first section holding assembly code (`.text`) and a second one containing strings (`.data`):

```python
section_text                 = PE.Section(".text")
section_text.content         = code
section_text.virtual_address = 0x1000

section_data                 = PE.Section(".data")
section_data.content         = data
section_data.virtual_address = 0x2000
```

A `MessageBoxA` is composed of a title and a message. These two strings can be stored in the `.data` section as follows:

```python
title   = "LIEF is awesome\0"
message = "Hello World\0"

data =  list(map(ord, title))
data += list(map(ord, message))
```

The **pseudo** assembly code of the `.text` section is provided in the following listing:

```nasm
push 0x00              ; uType
push "LIEF is awesome" ; Title
push "Hello World"     ; Message
push 0                 ; hWnd
call MessageBoxA       ;
push 0                 ; uExitCode
call ExitProcess       ;
```

Instead of pushing strings, we must push the **virtual addresses** of these strings. In the PE format, a section’s virtual address is actually a **relative** virtual address (relative to [`OptionalHeader.imagebase`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.imagebase> "lief.PE.OptionalHeader.imagebase") when ASLR is not enabled). By default, the [`Binary`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary") constructor sets the [`imagebase`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.imagebase> "lief.PE.OptionalHeader.imagebase") to `0x400000`.

As a result, the virtual addresses of the strings are:

> - **title**: [`imagebase`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.imagebase> "lief.PE.OptionalHeader.imagebase") + `virtual_address` + 0 = `0x402000`
> - **message**: [`imagebase`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.imagebase> "lief.PE.OptionalHeader.imagebase") + `virtual_address` + `len(title)` = `0x402010`

```nasm
push 0x00              ; uType
push 0x402000          ; Title
push 0x402010          ; Message
push 0                 ; hWnd
call MessageBoxA       ;
push 0                 ; uExitCode
call ExitProcess       ;
```

As the code uses `MessageBoxA`, we need to import `user32.dll` into the binary’s [`Import`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import> "lief.PE.Import") entries and add the `MessageBoxA` [`ImportEntry`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry> "lief.PE.ImportEntry"). To do so, we can use the `add_library()` method combined with [`add_entry()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import.add_entry> "lief.PE.Import.add_entry"):

```python
user32 = binary32.add_library("user32.dll")
user32.add_entry("MessageBoxA")
```

The same applies to `ExitProcess` (`kernel32.dll`):

```python
kernel32 = binary32.add_library("kernel32.dll")
kernel32.add_entry("ExitProcess")
```

Once the necessary libraries and functions have been added to the binary, we must determine their addresses (**I**mport **A**ddress **T**able).

To do so, we can use the `lief.PE.Binary.predict_function_rva` method, which returns the `IAT` address set by the [`Builder`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder> "lief.PE.Builder"):

```python
ExitProcess_addr = binary32.predict_function_rva("kernel32.dll", "ExitProcess")
MessageBoxA_addr = binary32.predict_function_rva("user32.dll", "MessageBoxA")
print("Address of 'ExitProcess': 0x{:06x} ".format(ExitProcess_addr))
print("Address of 'MessageBoxA': 0x{:06x} ".format(MessageBoxA_addr))
```

```console
Address of 'ExitProcess': 0x00306a
Address of 'MessageBoxA': 0x00305c
```

Thus, the **absolute** virtual addresses of `MessageBoxA` and `ExitProcess` are:

> - `MessageBoxA`: [`imagebase`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.imagebase> "lief.PE.OptionalHeader.imagebase") + `0x306a` = `0x40306a`
> - `ExitProcess`: [`imagebase`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.imagebase> "lief.PE.OptionalHeader.imagebase") + `0x305c` = `0x40305c`

And the associated assembly code:

```nasm
push 0x00              ; uType
push 0x402000          ; Title
push 0x402010          ; Message
push 0                 ; hWnd
call 0x40306a          ;
push 0                 ; uExitCode
call 0x40305c          ;
```

The transformation of the [`Binary`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary") into an executable is performed by the [`Builder`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder> "lief.PE.Builder") class.

By default, the import table is not rebuilt, so we must configure the builder to rebuild it:

```python
builder = lief.PE.Builder(binary32)
builder.build_imports(True)
builder.build()
builder.write("pe_from_scratch.exe")
```

You can now use the newly created binary.
