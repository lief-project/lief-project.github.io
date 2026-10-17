---
documentID: "08a137e7afa75ba28d26f104d7eaa53231f09351b4996f6c3f55719ddf0220d4"
docname: "tutorials/01_play_with_formats"
title: "01 - Parse and manipulate formats - LIEF Documentation"
description: "01 - Parse and manipulate formats. The objective of this tutorial is to provide an overview of LIEF’s API for parsing and manipulating formats."
canonical: "https://lief.re/doc/latest/tutorials/01_play_with_formats.html"
markdownURL: "https://lief.re/doc/latest/tutorials/01_play_with_formats.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "2330f4f08d5092518796b2e2a61662dfc8667d204873faf0d065ee66e4a723cf"
---

# [01 - Parse and manipulate formats](<https://lief.re/doc/latest/tutorials/01_play_with_formats.html#parse-and-manipulate-formats>)

The objective of this tutorial is to provide an overview of LIEF’s API for parsing and manipulating formats.

---

## [ELF](<https://lief.re/doc/latest/tutorials/01_play_with_formats.html#elf>)

We’ll start with the `ELF` format. To create an [`ELF.Binary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief.ELF.Binary") from a file, simply pass its path to the  `lief.abstract.parse` ( [`lief.parse()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.parse>) ;  [`LIEF::Parser::parse()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Parser5parseENSt11string_viewE>) ) or  `lief.ELF.parse()` ( [`lief::elf::Binary::parse`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.parse>) ;  [`lief.ELF.parse()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.parse>) ;  [`LIEF::ELF::Parser::parse()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser5parseENSt11string_viewERK12ParserConfig>) ) functions.

> **Note**
> 
> With the Python API, these functions exhibit the same behavior, but in C++,  `lief.abstract.parse` ( [`lief.parse()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.parse>) ;  [`LIEF::Parser::parse()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Parser5parseENSt11string_viewE>) ) will return a pointer to a  `lief.abstract.Binary` ( [`lief::generic::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html>) ;  [`lief.Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary>) ;  [`LIEF::Binary`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE>) ) object, whereas  `lief.ELF.parse()` ( [`lief::elf::Binary::parse`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.parse>) ;  [`lief.ELF.parse()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.parse>) ;  [`LIEF::ELF::Parser::parse()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser5parseENSt11string_viewERK12ParserConfig>) ) will return a  `lief.ELF.Binary` ( [`lief::elf::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html>) ;  [`lief.ELF.Binary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary>) ;  [`LIEF::ELF::Binary`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE>) ) object.

```python
import lief
binary = lief.parse("/bin/ls")
```

Once the ELF file has been parsed, we can access its [`Header`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header> "lief.ELF.Header"):

```python
binary: lief.ELF.Binary

header = binary.header
```

To change the entry point and the target architecture ([`ARCH`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH> "lief.ELF.ARCH")):

```python
header: lief.ELF.Header

header.entrypoint = 0x123
header.machine_type = lief.ELF.ARCH.AARCH64
```

Then, write these changes to a new ELF binary:

```python
binary: lief.ELF.Binary

binary.write("ls.modified")
```

We can also iterate over the [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") entries as follows:

```python
binary: lief.ELF.Binary

for section in binary.sections:
    print(section.name)  # section name
    print(section.size)  # section size
    print(len(section.content))  # Should match the previous print
```

To modify the content of the `.text` section:

```python
binary: lief.ELF.Binary

text = binary.get_section(".text")
assert text is not None
text.content = bytes([0x33] * text.size)
```

## [PE](<https://lief.re/doc/latest/tutorials/01_play_with_formats.html#pe>)

As with the `ELF` section, you can use the  `lief.abstract.parse` ( [`lief.parse()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.parse>) ;  [`LIEF::Parser::parse()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Parser5parseENSt11string_viewE>) ) or  `lief.PE.parse()` ( [`lief::pe::Binary::parse`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.parse>) ;  [`lief.PE.parse()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.parse>) ;  [`LIEF::PE::Parser::parse()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Parser5parseENSt11string_viewERK12ParserConfig>) ) functions to create a [`PE.Binary`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary")

```python
import lief
binary = lief.parse("C:\\Windows\\explorer.exe")
```

To access the various PE headers ([`DosHeader`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader> "lief.PE.DosHeader"), [`Header`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header> "lief.PE.Header"), and [`OptionalHeader`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader> "lief.PE.OptionalHeader")):

```python
binary: lief.PE.Binary

print(binary.dos_header)
print(binary.header)
print(binary.optional_header)
```

You can also access imported functions in two ways:

1. Using the *abstract* layer
2. Using the PE definition

```python
# Using the abstract layer
binary: lief.PE.Binary

for func in binary.imported_functions:
    print(func)

# Using the PE definition
for func in binary.imports:
    print(func)
```

For finer granularity regarding the location of imported functions in libraries, or to access other fields of the PE imports, we can process the imports as follows:

```python
binary: lief.PE.Binary

for imported_library in binary.imports:
    print("Library name: " + imported_library.name)
    for func in imported_library.entries:
        if not func.is_ordinal:
            print(func.name)
        print(func.iat_address)
```
