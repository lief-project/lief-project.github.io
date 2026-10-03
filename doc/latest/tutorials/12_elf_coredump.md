---
documentID: "c0a1d1ed22afa1356d76b86193d0ef29b5627784077415da26e29e8041bb9cde"
docname: "tutorials/12_elf_coredump"
title: "12 - ELF Coredump - LIEF Documentation"
description: "12 - ELF Coredump. This tutorial introduces the API for analyzing and manipulating ELF coredumps."
canonical: "https://lief.re/doc/latest/tutorials/12_elf_coredump.html"
markdownURL: "https://lief.re/doc/latest/tutorials/12_elf_coredump.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "cb0ff603b82e0fed353f15e0d13a2884971a26325d89ef7999dae9ac0484a445"
---

# [12 - ELF Coredump](<https://lief.re/doc/latest/tutorials/12_elf_coredump.html#elf-coredump>)

This tutorial introduces the API for analyzing and manipulating ELF coredumps.

---

## [Introduction](<https://lief.re/doc/latest/tutorials/12_elf_coredump.html#introduction>)

ELF core [[1]](<https://lief.re/doc/latest/tutorials/12_elf_coredump.html#footnote-1>) files provide information about the CPU state and memory state of a program at the time the coredump was generated. The memory state includes a *snapshot* of all segments mapped into the process’s memory space. The CPU state contains register values from when the core dump was generated.

Coredump files use a subset of ELF structures to store this information. **Segments** are used for the memory state of the process, while ELF notes ([`lief.ELF.Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief.ELF.Note")) are used for process metadata (PID, signal, etc.). Notably, the CPU state is stored in a note with a specific type.

Here is an overview of the coredump layout:![../_images/elf_notes.png](https://lief.re/doc/latest/_images/elf_notes.png)

For more details about coredump internal structures, refer to the following blog post: [Anatomy of an ELF core file](<https://www.gabriel.urdhr.fr/2015/05/29/core-file/>).

## [Coredump Analysis](<https://lief.re/doc/latest/tutorials/12_elf_coredump.html#coredump-analysis>)

Since core files are effectively ELF files, they can be opened using the  `lief.abstract.parse` ( [`lief.parse()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.parse>) ;  [`LIEF::Parser::parse()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Parser5parseENSt11string_viewE>) ) function:

```python
import lief

core = lief.parse("ELF64_AArch64_core_hello.core")
```

We can iterate over the [`Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment") objects to inspect the memory state of the program:

```python
core: lief.ELF.Binary

segments = core.segments
print(f"Number of segments {len(segments)}")

for segment in segments:
    print(hex(segment.virtual_address))
```

To resolve the relationship between libraries and segments, we can examine the special note [`lief.ELF.CoreFile`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile> "lief.ELF.CoreFile"):

```python
core: lief.ELF.Binary

nt_core_file = core.get(lief.ELF.Note.TYPE.CORE_FILE)
```

ELF notes are represented via the main [`lief.ELF.Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief.ELF.Note") interface. Some notes, such as [`lief.ELF.CoreFile`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile> "lief.ELF.CoreFile"), expose additional APIs by extending the original [`lief.ELF.Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief.ELF.Note").

![Inheritance diagram of lief._lief.ELF.AndroidIdent, lief._lief.ELF.CorePrPsInfo, lief._lief.ELF.CoreFile, lief._lief.ELF.NoteAbi, lief._lief.ELF.CorePrStatus, lief._lief.ELF.NoteGnuProperty, lief._lief.ELF.CoreSigInfo, lief._lief.ELF.CoreAuxv, lief._lief.ELF.QNXStack, lief._lief.ELF.Note](https://lief.re/doc/latest/_images/inheritance-e05b982b89466791b6a9b4725363e61f533e18d5.png)

> **Note**
> 
> All note details inherit from the base class [`lief.ELF.Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief.ELF.Note") (or [`LIEF::ELF::Note`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")).
> 
> Specifically, in C++, we must downcast using the classof function:
> 
> ```cpp
> for (const Note& note : binary->notes()) {
>   if (CoreFile::classof(&note)) {
>     const auto& nt_core_file = static_cast<const CoreFile&>(note);
>   }
> }
> ```
> 
> This is roughly equivalent in Python to:
> 
> ```python
> binary: lief.ELF.Binary
> 
> for note in binary.notes:
>     if isinstance(note, lief.ELF.CoreFile):
>         print("This is a CoreFile note")
> ```

We can use the [`lief.ELF.CoreFile.files`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.files> "lief.ELF.CoreFile.files") attribute or iterate directly over the [`lief.ELF.CoreFile`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile> "lief.ELF.CoreFile") object. Both provide access to `lief.ELF.CoreFileEntry` objects:

```python
nt_core_file: lief.ELF.CoreFile

for file_entry in nt_core_file:
    print(file_entry)
```

```text
/data/local/tmp/hello-exe: [0x5580b86000, 0x5580b88000]@0
/data/local/tmp/hello-exe: [0x5580b97000, 0x5580b98000]@0x1000
/data/local/tmp/hello-exe: [0x5580b98000, 0x5580b99000]@0x2000
/system/lib64/libcutils.so: [0x7fb7593000, 0x7fb7595000]@0xf000
/system/lib64/libcutils.so: [0x7fb7595000, 0x7fb7596000]@0x11000
/system/lib64/libnetd_client.so: [0x7fb75fb000, 0x7fb75fc000]@0x2000
/system/lib64/libnetd_client.so: [0x7fb75fc000, 0x7fb75fd000]@0x3000
/system/lib64/libdl.so: [0x7fb7a2e000, 0x7fb7a2f000]@0x1000
/system/lib64/libdl.so: [0x7fb7a2f000, 0x7fb7a30000]@0x2000
/data/local/tmp/liblibhello.so: [0x7fb7b22000, 0x7fb7b2a000]@0xcb000
/data/local/tmp/liblibhello.so: [0x7fb7b2a000, 0x7fb7b2b000]@0xd3000
/system/lib64/libc.so: [0x7fb7c0e000, 0x7fb7c14000]@0xc5000
/system/lib64/libc.so: [0x7fb7c14000, 0x7fb7c16000]@0xcb000
/system/lib64/liblog.so: [0x7fb7c6c000, 0x7fb7c6d000]@0x16000
/system/lib64/liblog.so: [0x7fb7c6d000, 0x7fb7c6e000]@0x17000
/system/lib64/libc++.so: [0x7fb7d6f000, 0x7fb7d77000]@0xe2000
/system/lib64/libc++.so: [0x7fb7d77000, 0x7fb7d78000]@0xea000
/system/lib64/libm.so: [0x7fb7db8000, 0x7fb7db9000]@0x36000
/system/lib64/libm.so: [0x7fb7db9000, 0x7fb7dba000]@0x37000
/system/bin/linker64: [0x7fb7e93000, 0x7fb7f87000]@0
/system/bin/linker64: [0x7fb7f88000, 0x7fb7f8c000]@0xf4000
/system/bin/linker64: [0x7fb7f8c000, 0x7fb7f8d000]@0xf8000
```

From this output, we can see that the [`Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment") entries of the main executable (`/data/local/tmp/hello-exe`) are mapped from address `0x5580b86000` to `0x5580b99000`.

The register state can also be accessed by looking for the [`lief.ELF.CorePrStatus`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus> "lief.ELF.CorePrStatus") note:

```python
core: lief.ELF.Binary

for note in core.notes:
    if not isinstance(note, lief.ELF.CorePrStatus):
        continue

    # Both are equivalent
    print(note.pc)
    reg_values = note.register_values
    print(reg_values[lief.ELF.CorePrStatus.Registers.AARCH64.PC.value])
```

```text
0x5580b86f50
0x5580b86f50
```

## [Coredump Manipulation](<https://lief.re/doc/latest/tutorials/12_elf_coredump.html#coredump-manipulation>)

To a certain extent, LIEF enables the modification of coredumps. For instance, we can update register values as follows:

```python
core: lief.ELF.Binary

prstatus = core.get(lief.ELF.Note.TYPE.CORE_PRSTATUS)
assert isinstance(prstatus, lief.ELF.CorePrStatus)

prstatus.set(lief.ELF.CorePrStatus.Registers.AARCH64.PC, 0xDEADC0DE)

core.write("/tmp/new.core")
```

When opening `/tmp/new.core` in GDB, we can observe the modification:![../_images/gdb.png](https://lief.re/doc/latest/_images/gdb.png)

## [Final word](<https://lief.re/doc/latest/tutorials/12_elf_coredump.html#final-word>)

One advantage of a coredump over a raw binary is that **relocations** and **dependencies** are already resolved within the coredump.

This API can be used in conjunction with other tools. For example, we could use the [Triton](<https://triton.quarkslab.com/>) API:

- [AArch64Cpu::setConcreteRegisterValue()](<https://github.com/JonathanSalwan/Triton/blob/a61651ce331ac53ec09e1d8fef5eab744e98c9de/src/libtriton/arch/architecture.cpp#L343>)
- [AArch64Cpu::setConcreteMemoryAreaValue()](<https://github.com/JonathanSalwan/Triton/blob/a61651ce331ac53ec09e1d8fef5eab744e98c9de/src/libtriton/arch/architecture.cpp#L329-L340>)

to map the coredump into Triton and then use its engines for taint analysis and symbolic execution.

References[[1](<https://lief.re/doc/latest/tutorials/12_elf_coredump.html#id1>)]

[https://www.gabriel.urdhr.fr/2015/05/29/core-file/](<https://www.gabriel.urdhr.fr/2015/05/29/core-file/>)

API

- [`lief.parse()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.parse> "lief.parse")
- [`lief.ELF.Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief.ELF.Note")
- [`lief.ELF.CorePrPsInfo`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo> "lief.ELF.CorePrPsInfo")
- [`lief.ELF.CorePrStatus`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus> "lief.ELF.CorePrStatus")
- [`lief.ELF.CoreFile`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile> "lief.ELF.CoreFile")
- `lief.ELF.CoreFileEntry`
- [`lief.ELF.CoreSigInfo`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreSigInfo> "lief.ELF.CoreSigInfo")
- [`lief.ELF.CoreAuxv`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv> "lief.ELF.CoreAuxv")
