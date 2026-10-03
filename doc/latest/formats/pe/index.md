---
documentID: "85b1a75d1f46fecf3727285bb326e2e96bdb0244f38375f18118f73bebd1de51"
docname: "formats/pe/index"
title: "PE - LIEF Documentation"
description: "PE binaries can be parsed using the lief.PE.parse() function."
canonical: "https://lief.re/doc/latest/formats/pe/index.html"
markdownURL: "https://lief.re/doc/latest/formats/pe/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "69210fc49b148d62c568557b381776ff684310af1572a25f5b78c4cb10b00163"
---

# [PE](<https://lief.re/doc/latest/formats/pe/index.html#pe>)

API

- [C++](<https://lief.re/doc/latest/formats/pe/cpp.html>)
- [Python](<https://lief.re/doc/latest/formats/pe/python.html>)
- [Rust](<https://lief.re/doc/latest/formats/pe/rust.html>)

Modifications

- [Imports Modification](<https://lief.re/doc/latest/formats/pe/modifications/imports.html>)
- [Resources Modification](<https://lief.re/doc/latest/formats/pe/modifications/resources.html>)
- [TLS Modification](<https://lief.re/doc/latest/formats/pe/modifications/tls.html>)
- [Debug Modification](<https://lief.re/doc/latest/formats/pe/modifications/debug.html>)
- [Exports Modification](<https://lief.re/doc/latest/formats/pe/modifications/exports.html>)

## [Introduction](<https://lief.re/doc/latest/formats/pe/index.html#introduction>)

PE binaries can be parsed using the  `lief.PE.parse()` ( [`lief::pe::Binary::parse`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.parse>) ;  [`lief.PE.parse()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.parse>) ;  [`LIEF::PE::Parser::parse()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Parser5parseENSt11string_viewERK12ParserConfig>) ) function.

**Python**

```python
import lief

# Using filepath
pe: lief.PE.Binary | None = lief.PE.parse(r"C:\Users\test.exe")

# Using a Path from pathlib
pe: lief.PE.Binary | None = lief.PE.parse(pathlib.Path(r"C:\Users\test.exe"))

# Using an io object
with open(r"C:\Users\test.exe", "rb") as f:
    pe: lief.PE.Binary | None = lief.PE.parse(f)
```

**C++**

```cpp
#include <LIEF/PE.hpp>

// Using a file path as a std::string
std::unique_ptr<LIEF::PE::Binary> pe = LIEF::PE::Parser::parse("some.exe");

// Using a vector
std::vector<uint8_t> my_raw_pe;
pe = LIEF::PE::Parser::parse(my_raw_pe);
```

**Rust**

```rust
let pe: lief::pe::Binary = lief::pe::Binary::parse("/bin/ls").unwrap();
```

> **Note**
> 
> In Python, you can also use the generic [`lief.parse()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.parse> "lief.parse"), which returns a [`lief.PE.Binary`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary") object.

With the parsed PE binary, you can use the  `lief.PE.Binary` ( [`lief::pe::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html>) ;  [`lief.PE.Binary`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary>) ;  [`LIEF::PE::Binary`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6BinaryE>) ) API to inspect or modify the binary itself.

**Python**

```python
pe: lief.PE.Binary

print(pe.rich_header)
print(pe.authentihash_md5.hex(":"))

for section in pe.sections:
    print(section.name, len(section.content))
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> pe;

if (const LIEF::PE::RichHeader* rich = pe->rich_header()) {
  std::cout << *rich << '\n';
}

for (const LIEF::PE::Section& section : pe->sections()) {
  std::cout << section.name() << section.content().size() << '\n';
}
```

**Rust**

```rust
let pe: &lief::pe::Binary = some_pe;

println!("{:?}", pe.rich_header().expect("Missing Rich header"));

for section in pe.sections() {
    println!("{} {}", section.name(), section.content().len());
}
```

After modifying a  `lief.PE.Binary` ( [`lief::pe::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html>) ;  [`lief.PE.Binary`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary>) ;  [`LIEF::PE::Binary`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6BinaryE>) ) object, you can use  `lief.PE.Binary.write()` ( [`lief::pe::Binary::write`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.write>) ;  [`lief.PE.Binary.write()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.write>) ;  [`LIEF::PE::Binary::write()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Binary5writeERKNSt6stringE>) ) to write the changes back to a raw PE file.

**Python**

```python
pe: lief.PE.Binary

section = lief.PE.Section(".hello")
section.content = [0xCC] * 0x100
pe.add_section(section)

pe.write("new.exe")
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> pe;

LIEF::PE::Section section(".hello");
section.content(std::vector<uint8_t>(0x100, 0xCC));
pe->add_section(section);

pe->write("new.exe");
```

**Rust**

```rust
let mut pe = lief::pe::Binary::parse("some.exe").unwrap();

let mut section = lief::pe::Section::new_with_name(".hello");
section.set_content(&[0xCC; 0x100]);
pe.add_section(section);

pe.write("new.exe");
```

> **See also**
> 
> [Binary Abstraction](<https://lief.re/doc/latest/api/binary_abstraction/index.html#binary-abstraction>)

## [Dump Analysis](<https://lief.re/doc/latest/formats/pe/index.html#dump-analysis>)

LIEF has the support to process PE memory dump with  `lief.PE.parse_from_dump()` ( [`lief::pe::Binary::parse_from_dump`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.parse_from_dump>) ;  [`lief.PE.parse_from_dump()`](<https://lief.re/doc/latest/formats/pe/index.html>) ;  [`LIEF::PE::Parser::parse_from_dump()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Parser15parse_from_dumpENSt11string_viewE8uint64_tRK12ParserConfig>) ). This function translates the file offsets referenced by the PE structures into their location inside the dump, using the base address passed as the second parameter:

**Python**

```python
# 0x7ffd21b80000 is the (absolute) address at which the dump was mapped
pe = lief.PE.parse_from_dump("module.dump", 0x7FFD21B80000)
assert isinstance(pe, lief.PE.Binary)

for imp in pe.imports:
    print(imp.name)
```

**C++**

```cpp
auto pe = LIEF::PE::Parser::parse_from_dump("module.dump", 0x7ffd21b80000);

for (const LIEF::PE::Import& imp : pe->imports()) {
  std::cout << imp.name() << '\n';
}
```

**Rust**

```rust
let pe = lief::pe::Binary::parse_from_dump("module.dump", 0x7ffd_21b8_0000).unwrap();

for imp in pe.imports() {
    println!("{}", imp.name());
}
```

> **Note**
> 
> The second parameter **must** be the (absolute) virtual address at which the dump was mapped. It is used to convert the RVAs found in the PE structures back into an offset within the dump.

### [Producing a dump with the runtime API](<https://lief.re/doc/latest/formats/pe/index.html#producing-a-dump-with-the-runtime-api>)

Such a dump can be produced from a live process thanks to the LIEF [runtime](<https://lief.re/doc/latest/runtime/intro.html#runtime-intro>) and, more precisely, the [Module API](<https://lief.re/doc/latest/runtime/components/modules.html#runtime-modules>).  `lief.runtime.Module.dump()` ( [`lief::runtime::module::Module::dump`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/module/trait.Module.html#method.dump>) ;  [`lief.runtime.Module.dump()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module.dump>) ;  [`LIEF::runtime::Module::dump()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module4dumpEv>) ) captures the memory of a loaded module (from its imagebase over its virtual size):

**Python**

```python
# Find the module to dump in the current process
mod = lief.runtime.module_from_name("target.dll")
assert isinstance(mod, lief.runtime.windows.Module)

# Dump the module's memory into a file (the raw bytes are also returned) ...
data: bytes = mod.dump("module.dump")

# ... and parse it back using the same imagebase:
pe = lief.PE.parse_from_dump(data, mod.imagebase)
```

**C++**

```cpp
// Find the module to dump in the current process
auto mod = LIEF::runtime::module_from_name("target.dll");

// Dump the module's memory into a file (the raw bytes are also returned)
std::vector<uint8_t> data = mod->dump("module.dump");

auto pe = LIEF::PE::Parser::parse_from_dump("module.dump", mod->imagebase());
```

**Rust**

```rust
use lief::runtime::Module;

let module = lief::runtime::module_from_name("target.dll").unwrap();

// Dump the module's memory into a file (the raw bytes are also returned)
let data = module.dump_to_file("module.dump");

let pe = lief::pe::Binary::parse_from_dump("module.dump", module.imagebase()).unwrap();
```

## [Advanced Parsing/Writing](<https://lief.re/doc/latest/formats/pe/index.html#advanced-parsing-writing>)

Modifications

- [Imports Modification](<https://lief.re/doc/latest/formats/pe/modifications/imports.html>)
- [Resources Modification](<https://lief.re/doc/latest/formats/pe/modifications/resources.html>)
- [TLS Modification](<https://lief.re/doc/latest/formats/pe/modifications/tls.html>)

`lief.PE.parse()` ( [`lief::pe::Binary::parse`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.parse>) ;  [`lief.PE.parse()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.parse>) ;  [`LIEF::PE::Parser::parse()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Parser5parseENSt11string_viewERK12ParserConfig>) ) can take an extra  `lief.PE.ParserConfig` ( [`lief::pe::ParserConfig`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.ParserConfig.html>) ;  [`lief.PE.ParserConfig`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig>) ;  [`LIEF::PE::ParserConfig`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE12ParserConfigE>) ) parameter to specify parts of the PE format to ignore during parsing.

> **Warning**
> 
> Generally,  `lief.PE.Binary.write()` ( [`lief::pe::Binary::write`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.write>) ;  [`lief.PE.Binary.write()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.write>) ;  [`LIEF::PE::Binary::write()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Binary5writeERKNSt6stringE>) ) requires a **complete** initial parsing of the PE file.

Similarly,  `lief.PE.Binary.write()` ( [`lief::pe::Binary::write`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.write>) ;  [`lief.PE.Binary.write()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.write>) ;  [`LIEF::PE::Binary::write()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Binary5writeERKNSt6stringE>) ) can take an extra  `lief.PE.Builder.config_t` ( [`lief::pe::::builder::Config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe//builder/struct.Config.html>) ;  [`lief.PE.Builder.config_t`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t>) ;  [`LIEF::PE::Builder::config_t`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE7Builder8config_tE>) ) parameter to include or ignore parts of the PE binary during the build process.

**Python**

```python
parser_config = lief.PE.ParserConfig()
parser_config.parse_signature = False

pe = lief.PE.parse("some.exe", parser_config)
assert isinstance(pe, lief.PE.Binary)

builder_config = lief.PE.Builder.config_t()
builder_config.imports = True

pe.write("new.exe", builder_config)
```

**C++**

```cpp
LIEF::PE::ParserConfig parser_config;
parser_config.parse_signature = false;

auto pe = LIEF::PE::Parser::parse("some.exe", parser_config);

LIEF::PE::Builder::config_t builder_config;
builder_config.imports = true;

pe->write("new.exe", builder_config);
```

**Rust**

```rust
let mut parser_config = lief::pe::parser_config::Config::default();
parser_config.parse_signature = false;

let mut pe = lief::pe::parse_with_config("some.exe", &parser_config).unwrap();

let mut config = lief::pe::builder::Config::default();
config.imports = true;

pe.write_with_config("new.exe", config);
```

You can also use  `lief.PE.Binary.write_to_bytes()` ( [`lief::pe::Binary::write_to_bytes`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.write_to_bytes>) ;  [`lief::pe::Binary::write_to_bytes_with_config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.write_to_bytes_with_config>) ;  [`lief.PE.Binary.write_to_bytes()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.write_to_bytes>) ;  [`std::unique_ptr<Builder> LIEF::PE::Binary::write(std::ostream &)`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Binary5writeERNSt7ostreamE>) ;  [`std::unique_ptr<Builder> LIEF::PE::Binary::write(std::ostream &, const Builder::config_t &)`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Binary5writeERNSt7ostreamERKN7Builder8config_tE>) ) to get the new PE binary as a buffer of bytes:

> **Note**
> 
> This API can also take an extra  `lief.PE.Builder.config_t` ( [`lief::pe::::builder::Config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe//builder/struct.Config.html>) ;  [`lief.PE.Builder.config_t`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t>) ;  [`LIEF::PE::Builder::config_t`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE7Builder8config_tE>) ) parameter.

**Python**

```python
pe: lief.PE.Binary

new_pe: bytes = pe.write_to_bytes()
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> pe;

std::ostringstream os;
pe->write(os);
std::string buffer = os.str();

const auto* start = reinterpret_cast<const uint8_t*>(buffer.data());
size_t size = buffer.size();
```

**Rust**

```rust
let pe: &mut lief::pe::Binary = some_pe;

let bytes: Vec<u8> = pe.write_to_bytes();
```

## [PDB Support](<https://lief.re/doc/latest/formats/pe/index.html#pdb-support>)

Using [LIEF Extended](<https://lief.re/doc/latest/extended/intro.html#extended-intro>), you can access PDB debug information ( `lief.pdb.DebugInfo` ( [`lief::pdb::DebugInfo`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/struct.DebugInfo.html>) ;  [`lief.pdb.DebugInfo`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo>) ;  [`LIEF::pdb::DebugInfo`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfoE>) )) using the  `lief.Binary.debug_info()` ( [`lief::pe::Binary::debug_info`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.debug_info>) ;  [`lief.Binary.debug_info`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.debug_info>) ;  [`LIEF::Binary::debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary10debug_infoEv>) ) function.

For more details regarding PDB support, please refer to the [PDB section](<https://lief.re/doc/latest/extended/pdb/index.html#extended-pdb>).

## [Authenticode](<https://lief.re/doc/latest/formats/pe/index.html#authenticode>)

LIEF supports PE Authenticode by providing an API for inspecting and **verifying** PE executable signatures.

PE Authenticode signatures can be accessed by iterating over  `lief.PE.Binary.signatures()` ( [`lief::pe::Binary::signatures`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.signatures>) ;  [`lief.PE.Binary.signatures`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.signatures>) ;  [`LIEF::PE::Binary::signatures()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4NK4LIEF2PE6Binary10signaturesEv>) ). The  `lief.PE.Binary.verify_signature()` ( [`lief::pe::Binary::verify_signature`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.verify_signature>) ;  [`lief.PE.Binary.verify_signature()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.verify_signature>) ;  [`LIEF::PE::Binary::verify_signature()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4NK4LIEF2PE6Binary16verify_signatureEN9Signature19VERIFICATION_CHECKSE>) ) function can be used to verify that a PE binary is correctly signed.

> **Note**
> 
> Typically, a signed PE executable contains a single signature, but the format allows for multiple signatures. Consequently,  `lief.PE.Binary.signatures()` ( [`lief::pe::Binary::signatures`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.signatures>) ;  [`lief.PE.Binary.signatures`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.signatures>) ;  [`LIEF::PE::Binary::signatures()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4NK4LIEF2PE6Binary10signaturesEv>) ) returns an iterator rather than a single signature object.

**Python**

```python
pe = lief.PE.parse("signed.exe")
assert isinstance(pe, lief.PE.Binary)

for signature in pe.signatures:
    for crt in signature.certificates:
        print(crt)

assert pe.verify_signature() == lief.PE.Signature.VERIFICATION_FLAGS.OK
```

**C++**

```cpp
auto pe = LIEF::PE::Parser::parse("signed.exe");

for (const LIEF::PE::Signature& sig : pe->signatures()) {
  for (const LIEF::PE::x509& crt : sig.certificates()) {
    std::cout << crt << '\n';
  }
}

std::cout << (pe->verify_signature() ==
              LIEF::PE::Signature::VERIFICATION_FLAGS::OK)
          << '\n';
```

**Rust**

```rust
if let Some(lief::Binary::PE(pe)) = lief::Binary::parse("signed.exe") {
    for sig in pe.signatures() {
        for crt in sig.certificates() {
            println!("{:?}", crt);
        }
    }

    assert!(
        pe.verify_signature(lief::pe::signature::VerificationChecks::DEFAULT)
            == lief::pe::signature::VerificationFlags::OK
    );
}
```

You can find additional details about Authenticode support in this tutorial: [PE Authenticode](<https://lief.re/doc/latest/tutorials/13_pe_authenticode.html#pe-authenticode>)
