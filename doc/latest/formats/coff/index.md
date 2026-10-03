---
documentID: "81188adcf5169a4cfb22825c82f8c2767f17a43f79506a601158d257417bd56b"
docname: "formats/coff/index"
title: "COFF - LIEF Documentation"
description: "COFF object files can be parsed using lief.COFF.parse() or the generic lief.parse() function:"
canonical: "https://lief.re/doc/latest/formats/coff/index.html"
markdownURL: "https://lief.re/doc/latest/formats/coff/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "0f56fe4e0bda30344f2c5a1d1bc790a28258f13c9178756de5e1714de77c7636"
---

# [COFF](<https://lief.re/doc/latest/formats/coff/index.html#coff>)

API

- [C++](<https://lief.re/doc/latest/formats/coff/cpp.html>)
- [Python](<https://lief.re/doc/latest/formats/coff/python.html>)
- [Rust](<https://lief.re/doc/latest/formats/coff/rust.html>)

## [Introduction](<https://lief.re/doc/latest/formats/coff/index.html#introduction>)

COFF object files can be parsed using  `lief.COFF.parse()` ( [`lief::coff::Binary::parse`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/coff/struct.Binary.html#method.parse>) ;  [`lief.COFF.parse()`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.parse>) ;  [`LIEF::COFF::Parser::parse()`](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Parser5parseENSt10unique_ptrI12BinaryStreamEERK12ParserConfig>) ) or the generic  `lief.parse()` ( [`lief::Binary::parse`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/enum.Binary.html#method.parse>) ;  [`lief::Binary::from`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/enum.Binary.html#method.from>) ;  [`lief.parse()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.parse>) ) function:

**Python**

```python
import lief

# Using a filepath as a string
coff: lief.COFF.Binary | None = lief.COFF.parse("hello.obj")

# Using a Path from pathlib
coff: lief.COFF.Binary | None = lief.COFF.parse(
    pathlib.Path(r"C:\Users\romain\test.obj")
)

# Using an io object
with open("/tmp/test.ob", "rb") as f:
    coff: lief.COFF.Binary | None = lief.COFF.parse(f)
```

**C++**

```cpp
#include <LIEF/COFF.hpp>

// Using a file path as a std::string
std::unique_ptr<LIEF::COFF::Binary> coff = LIEF::COFF::Parser::parse("test.obj");
```

**Rust**

```rust
let coff: lief::coff::Binary = lief::coff::Binary::parse("test.obj").unwrap();
```

These functions return a  `lief.COFF.Binary` ( [`lief::coff::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/coff/struct.Binary.html>) ;  [`lief.COFF.Binary`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary>) ;  [`LIEF::COFF::Binary`](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6BinaryE>) ) instance that exposes the main API for processing and accessing COFF information:

**Python**

```python
coff: lief.COFF.Binary

for section in coff.sections:
    print(section.name)
```

**C++**

```cpp
std::unique_ptr<LIEF::COFF::Binary> coff;

for (const LIEF::COFF::Section& section : coff->sections()) {
  std::cout << section.name() << '\n';
}
```

**Rust**

```rust
let coff: &lief::coff::Binary = some_coff;

for section in coff.sections() {
    println!("{section:?} {section}");
}
```

## [Disassembler](<https://lief.re/doc/latest/formats/coff/index.html#disassembler>)

The  `lief.COFF.Binary` ( [`lief::coff::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/coff/struct.Binary.html>) ;  [`lief.COFF.Binary`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary>) ;  [`LIEF::COFF::Binary`](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6BinaryE>) ) object exposes a disassembler API for iterating over the instructions of a COFF binary. One can disassemble a function using  `lief.COFF.Binary.disassemble()` ( [`lief::coff::Binary::disassemble_slice`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/coff/struct.Binary.html#method.disassemble_slice>) ;  [`lief::coff::Binary::disassemble_function`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/coff/struct.Binary.html#method.disassemble_function>) ;  [`lief::coff::Binary::disassemble_symbol`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/coff/struct.Binary.html#method.disassemble_symbol>) ;  [`lief.COFF.Binary.disassemble()`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.disassemble>) ;  [`lief.COFF.Binary.disassemble_from_bytes()`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.disassemble_from_bytes>) ;  [`LIEF::COFF::Binary::disassemble()`](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary11disassembleERK6Symbol>) ):

**Python**

```python
coff: lief.COFF.Binary

for inst in coff.disassemble("?foo@@YAHHH@Z"):
    print(inst)

# Using demangled representation
for inst in coff.disassemble("int __cdecl bar(int, int)"):
    print(inst)
```

**C++**

```cpp
std::unique_ptr<LIEF::COFF::Binary> coff;

for (const auto& inst : coff->disassemble("?foo@@YAHHH@Z")) {
  std::cout << inst.to_string() << '\n';
}

// Using demangled representation
for (const auto& inst : coff->disassemble("int __cdecl bar(int, int)")) {
  std::cout << inst.to_string() << '\n';
}
```

**Rust**

```rust
let coff: &lief::coff::Binary = some_coff;

for inst in coff.disassemble_function("?foo@@YAHHH@Z") {
    println!("{}", inst);
}

// Using demangled representation
for inst in coff.disassemble_function("int __cdecl bar(int, int)") {
    println!("{}", inst);
}
```

For more details about the disassembler and the  `lief.assembly.Instruction` ( [`lief::assembly::Instructions`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/enum.Instructions.html>) ;  [`LIEF::assembly::Instruction`](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE>) ;  [`lief.assembly.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction>) ) API, please refer to the [Disassembler section](<https://lief.re/doc/latest/extended/disassembler/index.html#extended-disassembler>).
