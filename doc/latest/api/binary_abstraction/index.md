---
documentID: "eaec95ccf9c76f730f93fe5ccf7b39f3dfcf28d2c79721cd6a73a2f4d6450915"
docname: "api/binary_abstraction/index"
title: "Binary Abstraction - LIEF Documentation"
description: "Binary Abstraction. ELF, PE, Mach-O binaries share similar characteristics, such as an entry point, imported/exported functions, etc."
canonical: "https://lief.re/doc/latest/api/binary_abstraction/index.html"
markdownURL: "https://lief.re/doc/latest/api/binary_abstraction/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "d447feee82bd78a238a2aecb490e9440b5c0d7971efee5e2ee18f039b3ab96c9"
---

# [Binary Abstraction](<https://lief.re/doc/latest/api/binary_abstraction/index.html#binary-abstraction>)

API

- [C++](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html>)
- [Python](<https://lief.re/doc/latest/api/binary_abstraction/python.html>)
- [Rust](<https://lief.re/doc/latest/api/binary_abstraction/rust.html>)

## [Introduction](<https://lief.re/doc/latest/api/binary_abstraction/index.html#introduction>)

[ELF](<https://lief.re/doc/latest/formats/elf/index.html#format-elf>), [PE](<https://lief.re/doc/latest/formats/pe/index.html#format-pe>), [Mach-O](<https://lief.re/doc/latest/formats/macho/index.html#format-macho>) binaries share similar characteristics, such as an entry point, imported/exported functions, etc.

These shared characteristics are represented in an *abstract* layer, which is defined by an inheritance relationship in C++/Python and by a trait in Rust.

Specifically,  `lief.ELF.Binary` ( [`lief::elf::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html>) ;  [`lief.ELF.Binary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary>) ;  [`LIEF::ELF::Binary`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE>) ),  `lief.PE.Binary` ( [`lief::pe::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html>) ;  [`lief.PE.Binary`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary>) ;  [`LIEF::PE::Binary`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6BinaryE>) ), and  `lief.MachO.Binary` ( [`lief::macho::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html>) ;  [`lief.MachO.Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary>) ;  [`LIEF::MachO::Binary`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE>) ) either inherit or implement the trait:  `lief.abstract.Binary` ( [`lief::generic::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html>) ;  [`lief.Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary>) ;  [`LIEF::Binary`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE>) ).

In Python/C++, one can access an *abstract* binary object by using the generic  `lief.abstract.parse` ( [`lief.parse()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.parse>) ;  [`LIEF::Parser::parse()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Parser5parseENSt11string_viewE>) ) function:

**Python**

```python
target = lief.parse("/tmp/some.elf")

target = lief.parse("/Users/demo/some.macho")

target = lief.parse(r"C:\some.pe.exe")
```

**C++**

```cpp
std::unique_ptr<LIEF::Binary> target = LIEF::Parser::parse("some.elf");

target = LIEF::Parser::parse("some.macho");

target = LIEF::Parser::parse("some.exe");
```

Due to Python’s dynamic polymorphism, the return value of [`lief.parse()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.parse> "lief.parse") is automatically cast into either: [`lief.ELF.Binary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief.ELF.Binary"), [`lief.PE.Binary`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary"), or [`lief.MachO.Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief.MachO.Binary"). To **upcast** this object into a [`lief.Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary> "lief.Binary") object, one can use the [`lief.Binary.abstract`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.abstract> "lief.Binary.abstract") attribute, which returns a [`lief.Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary> "lief.Binary") instance:

```python
target = lief.parse("some.elf")
assert type(target) is lief.ELF.Binary

abstract = target.abstract
assert type(abstract) is lief.Binary
```

In C++, a [`LIEF::Binary`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary") instance can be **downcast** to its underlying type using the `classof` idiom:

```cpp
std::unique_ptr<LIEF::Binary> target = LIEF::Parser::parse("some.elf");

if (LIEF::ELF::Binary::classof(target.get())) {
  auto& elf = static_cast<LIEF::ELF::Binary&>(*target);
}
```

> **See also**
> 
> - [`LIEF::ELF::Binary::classof()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary7classofEPKN4LIEF6BinaryE> "LIEF::ELF::Binary::classof")
> - [`LIEF::PE::Binary::classof()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Binary7classofEPKN4LIEF6BinaryE> "LIEF::PE::Binary::classof")
> - [`LIEF::MachO::Binary::classof()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary7classofEPKN4LIEF6BinaryE> "LIEF::MachO::Binary::classof")
