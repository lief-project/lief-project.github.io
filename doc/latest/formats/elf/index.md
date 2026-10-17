---
documentID: "b9cfec9b8fbd73cb490900a3da4fdbe3735d0443354fe1eb32b4e0a18ae34a0d"
docname: "formats/elf/index"
title: "ELF - LIEF Documentation"
description: "ELF binaries can be parsed with LIEF using the lief.ELF.parse() function:"
canonical: "https://lief.re/doc/latest/formats/elf/index.html"
markdownURL: "https://lief.re/doc/latest/formats/elf/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "fe8428c3627ebcf7950235e2e4c7afb2b6fd7ac64c5aa890692175d92af537f5"
---

# [ELF](<https://lief.re/doc/latest/formats/elf/index.html#elf>)

API

- [C++](<https://lief.re/doc/latest/formats/elf/cpp.html>)
- [Python](<https://lief.re/doc/latest/formats/elf/python.html>)
- [Rust](<https://lief.re/doc/latest/formats/elf/rust.html>)

## [Introduction](<https://lief.re/doc/latest/formats/elf/index.html#introduction>)

ELF binaries can be parsed with LIEF using the  `lief.ELF.parse()` ( [`lief::elf::Binary::parse`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.parse>) ;  [`lief.ELF.parse()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.parse>) ;  [`LIEF::ELF::Parser::parse()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser5parseENSt11string_viewERK12ParserConfig>) ) function:

**Python**

```python
import lief

# Using filepath
elf: lief.ELF.Binary | None = lief.ELF.parse("/bin/ls")

# Using a Path from pathlib
elf: lief.ELF.Binary | None = lief.ELF.parse(pathlib.Path(r"C:\Users\test.elf"))

# Using an io object
with open("/bin/ssh", "rb") as f:
    elf: lief.ELF.Binary | None = lief.ELF.parse(f)
```

**C++**

```cpp
#include <LIEF/ELF.hpp>

// Using a file path as a std::string
std::unique_ptr<LIEF::ELF::Binary> elf = LIEF::ELF::Parser::parse("/bin/ls");

// Using a vector
std::vector<uint8_t> my_raw_elf;
elf = LIEF::ELF::Parser::parse(my_raw_elf);
```

**Rust**

```rust
let elf: lief::elf::Binary = lief::elf::Binary::parse("/bin/ls").unwrap();
```

> **Note**
> 
> In Python, you can also use [`lief.parse()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.parse> "lief.parse"), which returns a [`lief.ELF.Binary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief.ELF.Binary") object.

With the parsed ELF binary, you can use the  `lief.ELF.Binary` ( [`lief::elf::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html>) ;  [`lief.ELF.Binary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary>) ;  [`LIEF::ELF::Binary`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE>) ) API to inspect or modify the binary itself.

**Python**

```python
elf: lief.ELF.Binary

print(elf.header.entrypoint)

for section in elf.sections:
    print(section.name, len(section.content))
```

**C++**

```cpp
std::unique_ptr<LIEF::ELF::Binary> elf;

std::cout << elf->header().entrypoint();

for (const LIEF::ELF::Section& section : elf->sections()) {
  std::cout << section.name() << section.content().size() << '\n';
}
```

**Rust**

```rust
let elf: &lief::elf::Binary = some_elf;

println!("{}", elf.header().entrypoint());

for section in elf.sections() {
    println!("{} {}", section.name(), section.content().len());
}
```

After modifying a  `lief.ELF.Binary` ( [`lief::elf::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html>) ;  [`lief.ELF.Binary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary>) ;  [`LIEF::ELF::Binary`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE>) ) object, you can use the  `lief.ELF.Binary.write()` ( [`lief::elf::Binary::write`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.write>) ;  [`lief::elf::Binary::write_with_config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.write_with_config>) ;  [`lief.ELF.Binary.write()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.write>) ;  [`LIEF::ELF::Binary::write()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary5writeERKNSt6stringE>) ) method to write it back to a raw ELF file.

**Python**

```python
elf: lief.ELF.Binary

elf.add_library("libdemo.so")
elf.write("new.elf")
```

**C++**

```cpp
std::unique_ptr<LIEF::ELF::Binary> elf;

elf->add_library("libdemo.so");
elf->write("new.elf");
```

**Rust**

```rust
let elf: &mut lief::elf::Binary = some_elf;

elf.add_library("libdemo.so");
elf.write("new.elf");
```

> **See also**
> 
> [Binary Abstraction](<https://lief.re/doc/latest/api/binary_abstraction/index.html#binary-abstraction>)

You can also use  `lief.ELF.Binary.write_to_bytes()` ( [`lief::elf::Binary::write_to_bytes`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.write_to_bytes>) ;  [`lief::elf::Binary::write_to_bytes_with_config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.write_to_bytes_with_config>) ;  [`lief.ELF.Binary.write_to_bytes()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.write_to_bytes>) ;  [`std::unique_ptr<Builder> LIEF::ELF::Binary::write(std::ostream &)`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary5writeERNSt7ostreamE>) ;  [`std::unique_ptr<Builder> LIEF::ELF::Binary::write(std::ostream &, const Builder::config_t &)`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary5writeERNSt7ostreamERKN7Builder8config_tE>) ) to get the new ELF binary as a buffer of bytes:

> **Note**
> 
> This API can also take an extra  `lief.ELF.Builder.config_t` ( [`lief.ELF.Builder.config_t`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t>) ;  [`LIEF::ELF::Builder::config_t`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_tE>) ) parameter.

**Python**

```python
elf: lief.ELF.Binary

new_elf: bytes = elf.write_to_bytes()
```

**C++**

```cpp
std::unique_ptr<LIEF::ELF::Binary> elf;

std::ostringstream os;
elf->write(os);
std::string buffer = os.str();

const auto* start = reinterpret_cast<const uint8_t*>(buffer.data());
size_t size = buffer.size();
```

**Rust**

```rust
let elf: &mut lief::elf::Binary = some_elf;

let bytes: Vec<u8> = elf.write_to_bytes();
```

## [Adding a Section/Segment](<https://lief.re/doc/latest/formats/elf/index.html#adding-a-section-segment>)

The ELF format uses two tables to represent different slices of the binary:

1. The sections table
2. The segments table

While the sections table offers a detailed view of the binary, it is primarily used by the **compiler** and the **linker**. In particular, this table is not required for **loading** and **executing** an ELF file. While the Android loader enforces the presence of a sections table and requires specific sections, this table is not used during the actual loading process.

To modify an ELF file to load additional content into memory (e.g., code or data), adding a  `lief.ELF.Segment` ( [`lief::elf::Segment`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Segment.html>) ;  [`lief.ELF.Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment>) ;  [`LIEF::ELF::Segment`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE>) ) is recommended over adding a section:

**Python**

```python
elf: lief.ELF.Binary

segment = lief.ELF.Segment()
segment.type = lief.ELF.Segment.TYPES.LOAD
segment.content = list(b"Hello World")

new_segment = elf.add(segment)

elf.write("new.elf")
```

**C++**

```cpp
std::unique_ptr<LIEF::ELF::Binary> elf;

LIEF::ELF::Segment segment;
segment.type(LIEF::ELF::Segment::TYPE::LOAD);
segment.content({1, 2, 3});

LIEF::ELF::Segment* new_segment = elf->add(segment);
elf->write("new.elf");
```

**Rust**

```rust
let elf: &mut lief::elf::Binary = some_elf;

let mut segment = lief::elf::Segment::new();
segment.set_type(lief::elf::segment::Type::LOAD);
segment.set_content(&[1, 2, 3]);

elf.add_segment(&segment);
elf.write("new.elf");
```

Alternatively, you can create a  `lief.ELF.Section` ( [`lief::elf::Section`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Section.html>) ;  [`lief.ELF.Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section>) ;  [`LIEF::ELF::Section`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE>) ), which will **implicitly** create an associated `PT_LOAD` segment:

**Python**

```python
elf: lief.ELF.Binary

section = lief.ELF.Section(".lief_demo")
section.content = list(b"Hello World")

new_section = elf.add(section, loaded=True)

elf.write("new.elf")
```

**C++**

```cpp
std::unique_ptr<LIEF::ELF::Binary> elf;

LIEF::ELF::Section section(".lief_demo");
section.content({1, 2, 3});

LIEF::ELF::Section* new_section = elf->add(section, /*loaded=*/true);
elf->write("new.elf");
```

**Rust**

```rust
let elf: &mut lief::elf::Binary = some_elf;

let section = lief::elf::Section::new_with_content(".lief_demo", &[1, 2, 3]);

elf.add_section(
    &section,
    /* loaded= */ true,
    lief::elf::binary::SecInsertPos::AUTO,
);
elf.write("new.elf");
```

As mentioned above, the segments table is more critical than the sections table from a loading perspective. Therefore, it is more appropriate to explicitly add a new segment rather than adding a section that implicitly adds a segment.

On the other hand, for debugging purposes or specialized tools, you might want to add a **non-loaded** section. In this case, the section data is inserted at the end of the binary, immediately after the data wrapped by the segments:

**Python**

```python
elf: lief.ELF.Binary

section = lief.ELF.Section(".metadata")
section.content = list(b"version: 1.2.3")

# /!\ Note that loaded is set to False here
# ------------------------------------------
new_section = elf.add(section, loaded=False)

elf.write("new.elf")
```

**C++**

```cpp
std::unique_ptr<LIEF::ELF::Binary> elf;

LIEF::ELF::Section section(".metadata");
section.content({1, 2, 3});

LIEF::ELF::Section* new_section = elf->add(section, /*loaded=*/false);
elf->write("new.elf");
```

**Rust**

```rust
let elf: &mut lief::elf::Binary = some_elf;

let section = lief::elf::Section::new_with_content(".metadata", b"version: 1.2.3");

// /!\ Note that loaded is set to false here
// -----------------------------------------
elf.add_section(
    &section,
    /* loaded= */ false,
    lief::elf::binary::SecInsertPos::AUTO,
);
elf.write("new.elf");
```

See:  `lief.ELF.Binary.add()` ( [`lief::elf::Binary::add_section`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.add_section>) ;  [`lief::elf::Binary::add_segment`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.add_segment>) ;  [`lief.ELF.Binary.add()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.add>) ;  [`LIEF::ELF::Binary::add()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary3addERK12DynamicEntry>) ) for detailed API information.

## [Dump Analysis](<https://lief.re/doc/latest/formats/elf/index.html#dump-analysis>)

LIEF has the support to process ELF memory dump with  `lief.ELF.parse_from_dump()` ( [`lief::elf::Binary::parse_from_dump`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.parse_from_dump>) ;  [`lief.ELF.parse_from_dump()`](<https://lief.re/doc/latest/formats/elf/index.html>) ;  [`LIEF::ELF::Parser::parse_from_dump()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser15parse_from_dumpENSt11string_viewE8uint64_tRK12ParserConfig>) ). This function translates the file offsets referenced by the ELF structures into their location inside the dump, using the base address passed as the second parameter:

**Python**

```python
# 0x7f9b98e00000 is the (absolute) address at which the dump was mapped
elf = lief.ELF.parse_from_dump("module.dump", 0x7F9B98E00000)
assert elf is not None

for segment in elf.segments:
    print(segment.type, hex(segment.virtual_address))
```

**C++**

```cpp
auto elf = LIEF::ELF::Parser::parse_from_dump("module.dump", 0x7f9b98e00000);

for (const LIEF::ELF::Segment& segment : elf->segments()) {
  std::cout << to_string(segment.type()) << '\n';
}
```

**Rust**

```rust
let elf = lief::elf::Binary::parse_from_dump("module.dump", 0x7f9b_98e0_0000).unwrap();

for segment in elf.segments() {
    println!("{:?} {:#x}", segment.p_type(), segment.virtual_address());
}
```

> **Note**
> 
> The second parameter **must** be the (absolute) virtual address at which the dump was mapped. It is used to convert the virtual addresses found in the ELF structures back into an offset within the dump.

> **Warning**
> 
> Parsing an ELF from a dump is subject to the same limitations as parsing it from memory: the segments (`PT_LOAD`) and the program headers are reliable, but the **section header table is generally not mapped** and the content of the dynamic table (dynamic entries, dynamic symbols and relocations) reflects its *runtime* state and may not be recoverable. Prefer working with the segments when analyzing a dump.

### [Producing a dump with the runtime API](<https://lief.re/doc/latest/formats/elf/index.html#producing-a-dump-with-the-runtime-api>)

Such a dump can be produced from a live process thanks to the LIEF [runtime](<https://lief.re/doc/latest/runtime/intro.html#runtime-intro>) and, more precisely, the [Module API](<https://lief.re/doc/latest/runtime/components/modules.html#runtime-modules>).  `lief.runtime.Module.dump()` ( [`lief::runtime::module::Module::dump`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/module/trait.Module.html#method.dump>) ;  [`lief.runtime.Module.dump()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module.dump>) ;  [`LIEF::runtime::Module::dump()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module4dumpEv>) ) captures the memory of a loaded module (from its imagebase over its virtual size):

**Python**

```python
# Find the module to dump in the current process
mod = lief.runtime.module_from_name("libc.so.6")
assert mod is not None

# Dump the module's memory into a file (the raw bytes are also returned)
data: bytes = mod.dump("module.dump")

# and parse it back using the same imagebase:
elf = lief.ELF.parse_from_dump(data, mod.imagebase)
```

**C++**

```cpp
// Find the module to dump in the current process
auto mod = LIEF::runtime::module_from_name("libc.so.6");

// Dump the module's memory into a file (the raw bytes are also returned)
std::vector<uint8_t> data = mod->dump("module.dump");

auto elf = LIEF::ELF::Parser::parse_from_dump("module.dump", mod->imagebase());
```

**Rust**

```rust
use lief::runtime::Module;

let module = lief::runtime::module_from_name("libc.so.6").unwrap();

// Dump the module's memory into a file (the raw bytes are also returned)
let data = module.dump_to_file("module.dump");

let elf = lief::elf::Binary::parse_from_dump("module.dump", module.imagebase()).unwrap();
```

## [Advanced Parsing/Writing](<https://lief.re/doc/latest/formats/elf/index.html#advanced-parsing-writing>)

`lief.ELF.parse()` ( [`lief::elf::Binary::parse`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.parse>) ;  [`lief.ELF.parse()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.parse>) ;  [`LIEF::ELF::Parser::parse()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser5parseENSt11string_viewERK12ParserConfig>) ) can take an extra  `lief.ELF.ParserConfig` ( [`lief.ELF.ParserConfig`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig>) ;  [`LIEF::ELF::ParserConfig`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE>) ) parameter to specify parts of the ELF format to skip during parsing.

> **Warning**
> 
> Generally,  `lief.ELF.Binary.write()` ( [`lief::elf::Binary::write`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.write>) ;  [`lief::elf::Binary::write_with_config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.write_with_config>) ;  [`lief.ELF.Binary.write()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.write>) ;  [`LIEF::ELF::Binary::write()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary5writeERKNSt6stringE>) ) requires a **complete** initial parsing of the ELF file.

Similarly,  `lief.ELF.Binary.write()` ( [`lief::elf::Binary::write`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.write>) ;  [`lief::elf::Binary::write_with_config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.write_with_config>) ;  [`lief.ELF.Binary.write()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.write>) ;  [`LIEF::ELF::Binary::write()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary5writeERKNSt6stringE>) ) can also take an extra  `lief.ELF.Builder.config_t` ( [`lief.ELF.Builder.config_t`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t>) ;  [`LIEF::ELF::Builder::config_t`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_tE>) ) to specify which parts of the ELF should be rebuilt.

**Python**

```python
parser_config = lief.ELF.ParserConfig()
parser_config.parse_overlay = False

elf = lief.ELF.parse("my.elf", parser_config)
assert isinstance(elf, lief.ELF.Binary)

builder_config = lief.ELF.Builder.config_t()
builder_config.gnu_hash = False

elf.write("new.elf", builder_config)
```

**C++**

```cpp
LIEF::ELF::ParserConfig parser_config;
parser_config.parse_overlay = false;

auto elf = LIEF::ELF::Parser::parse("my.elf", parser_config);

LIEF::ELF::Builder::config_t builder_config;
builder_config.gnu_hash = false;

elf->write("new.elf", builder_config);
```

**Rust**

```rust
let mut parser_config = lief::elf::ParserConfig::default();
parser_config.parse_overlay = false;

let mut elf = lief::elf::parse_with_config("my.elf", &parser_config).unwrap();

let mut builder_config = lief::elf::builder::Config::default();
builder_config.gnu_hash = false;

elf.write_with_config("new.elf", builder_config);
```

## [DWARF Support](<https://lief.re/doc/latest/formats/elf/index.html#dwarf-support>)

If the binary embeds DWARF debug information, you can use  `lief.Binary.debug_info()` ( [`lief::elf::Binary::debug_info`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.debug_info>) ;  [`lief.Binary.debug_info`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.debug_info>) ;  [`LIEF::Binary::debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary10debug_infoEv>) ) to access the underlying  `lief.dwarf.DebugInfo` ( [`lief::dwarf::DebugInfo`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.DebugInfo.html>) ;  [`lief.dwarf.DebugInfo`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.DebugInfo>) ;  [`LIEF::dwarf::DebugInfo`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9DebugInfoE>) ) object.

Note that this support is only available in the [Extended](<https://lief.re/doc/latest/extended/intro.html#extended-intro>) version of LIEF.

## [R\[UN\]PATH Modification](<https://lief.re/doc/latest/formats/elf/index.html#r-un-path-modification>)

LIEF provides comprehensive facilities for manipulating a binary’s RPATH/RUNPATH.

> **DT\_RPATH vs DT\_RUNPATH**
> 
> `DT_RPATH` and `DT_RUNPATH` are both dynamic tags used to specify runtime library search paths.
> 
> `DT_RPATH` is now considered legacy because it does not respect the precedence of the `LD_LIBRARY_PATH` environment variable. This means that if `LD_LIBRARY_PATH` is set to a valid directory where the library can be found, it will be ignored in favor of the `DT_RPATH` value. Therefore, the `DT_RUNPATH` tag should be preferred over `DT_RPATH`.
> 
> Note that if both tags are present, the loader will use the `DT_RUNPATH` entry over the legacy `DT_RPATH`.

The `DT_RPATH` tag is represented by the  `lief.ELF.DynamicEntryRpath` ( [`lief::elf::dynamic::Rpath`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/dynamic/struct.Rpath.html>) ;  [`lief.ELF.DynamicEntryRpath`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRpath>) ;  [`LIEF::ELF::DynamicEntryRpath`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpathE>) ) interface, and the `DT_RUNPATH` tag by  `lief.ELF.DynamicEntryRunPath` ( [`lief::elf::dynamic::RunPath`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/dynamic/struct.RunPath.html>) ;  [`lief.ELF.DynamicEntryRunPath`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRunPath>) ;  [`LIEF::ELF::DynamicEntryRunPath`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPathE>) ).

The RPATH/RUNPATH modifications supported by LIEF include:

**Adding a new entry**

**Python**

```python
elf: lief.ELF.Binary

runpath = lief.ELF.DynamicEntryRunPath("$ORIGIN:/opt/lib64")

elf.add(runpath)

other_runpath = lief.ELF.DynamicEntryRunPath(["$ORIGIN", "/opt/lib64"])

elf.add(other_runpath)

elf.write("updated.elf")
```

**C++**

```cpp
std::unique_ptr<LIEF::ELF::Binary> elf;

LIEF::ELF::DynamicEntryRunPath runpath("$ORIGIN:/opt/lib64");

elf->add(runpath);

LIEF::ELF::DynamicEntryRunPath other_runpath(
    std::vector<std::string>{"$ORIGIN", "/opt/lib64"}
);

elf->add(other_runpath);

elf->write("updated.elf");
```

**Rust**

```rust
let elf: &mut lief::elf::Binary = some_elf;

let runpath = lief::elf::dynamic::RunPath::new("$ORIGIN:/opt/lib64");

elf.add_dynamic_entry(&runpath);

let other_runpath = lief::elf::dynamic::RunPath::with_paths(&["$ORIGIN", "/opt/lib64"]);

elf.add_dynamic_entry(&other_runpath);

let output = PathBuf::from("updated.elf");

elf.write(output.as_path());
```

**Changing an entry**

**Python**

```python
elf: lief.ELF.Binary

runpath = elf.get(lief.ELF.DynamicEntry.TAG.RUNPATH)
assert runpath is not None

runpath.runpath = "$ORIGIN:/opt/lib64"
runpath.append("lib-x86_64-gnu")

elf.write("updated.elf")
```

**C++**

```cpp
std::unique_ptr<LIEF::ELF::Binary> elf;

auto* runpath = elf->get(LIEF::ELF::DynamicEntry::TAG::RUNPATH)
                    ->cast<LIEF::ELF::DynamicEntryRunPath>();

assert(runpath != nullptr);

runpath->runpath("$ORIGIN:/opt/lib64");
runpath->append("lib-x86_64-gnu");

elf->write("updated.elf");
```

**Rust**

```rust
let elf: &mut lief::elf::Binary = some_elf;

if let Some(dynamic::Entries::RunPath(mut runpath)) =
    elf.dynamic_entry_by_tag(dynamic::Tag::RUNPATH)
{
    runpath.set_runpath("$ORIGIN:/opt/lib64");
    runpath.append("lib-x86_64-gnu");
}

let output = PathBuf::from("updated.elf");

elf.write(output.as_path());
```

**Removing entries**

**Python**

```python
elf: lief.ELF.Binary

# Remove **all** DT_RUNPATH entries
elf.remove(lief.ELF.DynamicEntry.TAG.RUNPATH)

# Remove all entries that contain '$ORIGIN'
to_remove: list[lief.ELF.DynamicEntryRunPath] = []
for dt_entry in elf.dynamic_entries:
    if not isinstance(dt_entry, lief.ELF.DynamicEntryRunPath):
        continue

    if "$ORIGIN" in dt_entry.runpath:
        to_remove.append(dt_entry)

for entry in to_remove:
    elf.remove(entry)

elf.write("updated.elf")
```

**C++**

```cpp
std::unique_ptr<LIEF::ELF::Binary> elf;

// Remove **all** DT_RUNPATH entries
elf->remove(LIEF::ELF::DynamicEntry::TAG::RUNPATH);

// Remove all entries that contain '$ORIGIN'
std::vector<LIEF::ELF::DynamicEntryRunPath*> to_remove;
for (DynamicEntry& entry : elf->dynamic_entries()) {
  if (auto* dt_entry = entry.cast<LIEF::ELF::DynamicEntryRunPath>()) {
    if (dt_entry->runpath().find("$ORIGIN") != std::string::npos) {
      to_remove.push_back(dt_entry);
    }
  }
}

for (LIEF::ELF::DynamicEntryRunPath* entry : to_remove) {
  elf->remove(*entry);
}

elf->write("updated.elf");
```

**Rust**

```rust
let elf: &mut lief::elf::Binary = some_elf;

// Remove **all** DT_RUNPATH entries
elf.remove_dynamic_entries_by_tag(dynamic::Tag::RUNPATH);

// Remove all entries that contain '$ORIGIN'
elf.remove_dynamic_entry_if(|e| {
    if let dynamic::Entries::RunPath(runpath) = e {
        return runpath.runpath().contains("$ORIGIN");
    }
    false
});

let output = PathBuf::from("updated.elf");
elf.write(output.as_path());
```

You can also check the [lief-patchelf](<https://lief.re/doc/latest/tools/lief-patchelf/index.html#tools-lief-patchelf>) section for a command-line interface.

## [Symbol Versions](<https://lief.re/doc/latest/formats/elf/index.html#symbol-versions>)

The ELF format supports symbol versioning, allowing multiple versions of the same function or variable to coexist within a single shared object.

GNU symbol-version entries can also carry the `VERSYM_HIDDEN` bit. It marks a non-default version that is only available through an explicit versioned reference. Use |lief-elf-symbol-version-is\_hidden| to inspect this bit and |lief-elf-symbol-version-set\_hidden| to update it without changing the version index.

During compilation, the linker selects the appropriate symbols and versions based on the libraries provided as input. For example, if a program uses the `printf` function and is linked with a version of `libc.so` that exposes `printf@@GLIBC_2.40`, the compiled executable will require at least that version of the `libc` to run.

These versioning requirements can be problematic when creating executables or libraries intended for a wide range of Linux distributions.

The **best way** to ensure maximum compatibility is to target the minimum supported version of glibc. For instance, if you aim to support Linux distributions with at least glibc version `2.28` (released in 2018), you should specifically provide that version of `libc.so` during linking:

```console
$ ld --sysroot=/sysroot/glibc-2.28/ my_program.o -o my_program.elf
$ ld -L /sysroot/glibc-2.28/lib64/ my_program.o -o my_program.elf -lc
```

In situations where you lack control over the link step, you may want to change the versioning **post-compilation**. LIEF can be used in these situations to perform the following modifications on symbol versions.

**Remove the version for a specific symbol**

In this example, we remove the version attached to the `printf` symbol by setting the versioning as global (the default setting for imported functions).

**Python**

```python
elf: lief.ELF.Binary

sym = elf.get_dynamic_symbol("printf")
assert sym is not None and sym.symbol_version is not None

sym.symbol_version.as_global()

elf.write("updated.elf")
```

**C++**

```cpp
std::unique_ptr<LIEF::ELF::Binary> elf;

LIEF::ELF::Symbol* sym = elf->get_dynamic_symbol("printf");

assert(sym != nullptr);

sym->symbol_version()->as_global();

elf->write("updated.elf");
```

**Rust**

```rust
let elf: &mut lief::elf::Binary = some_elf;

if let Some(sym) = elf.dynamic_symbol_by_name("printf")
    && let Some(mut symver) = sym.symbol_version()
{
    symver.as_global();
}

let output = PathBuf::from("updated.elf");
elf.write(output.as_path());
```

**Remove all the versions for a specific library**

In this example, we remove all the symbol versions associated with an imported library (`libm.so.6`):

**Python**

```python
elf: lief.ELF.Binary

elf.remove_version_requirement("libm.so.6")

elf.write("updated.elf")
```

**C++**

```cpp
std::unique_ptr<LIEF::ELF::Binary> elf;

elf->remove_version_requirement("libm.so.6");

elf->write("updated.elf");
```

**Rust**

```rust
let elf: &mut lief::elf::Binary = some_elf;

elf.remove_version_requirement("libm.so.6");

let output = PathBuf::from("updated.elf");
elf.write(output.as_path());
```

**Before**

```console
$ readelf -V input.elf

Version symbols section '.gnu.version' contains 48 entries:
 Addr: 00000000000009bc  Offset: 0x0009bc  Link: 6 (.dynsym)
  000:   0 (*local*)       2 (GLIBC_2.2.5)   3 (GLIBC_2.2.5)   2 (GLIBC_2.2.5)
  004:   2 (GLIBC_2.2.5)   0 (*local*)       4 (GLIBC_2.17)    3 (GLIBC_2.2.5)
  008:   2 (GLIBC_2.2.5)   5 (GLIBC_2.27)    2 (GLIBC_2.2.5)   3 (GLIBC_2.2.5)
  00c:   3 (GLIBC_2.2.5)   2 (GLIBC_2.2.5)   6 (GLIBC_2.4)     2 (GLIBC_2.2.5)
  010:   3 (GLIBC_2.2.5)   2 (GLIBC_2.2.5)   3 (GLIBC_2.2.5)   3 (GLIBC_2.2.5)
  014:   2 (GLIBC_2.2.5)   3 (GLIBC_2.2.5)   3 (GLIBC_2.2.5)   0 (*local*)
  018:   3 (GLIBC_2.2.5)   3 (GLIBC_2.2.5)   2 (GLIBC_2.2.5)   3 (GLIBC_2.2.5)
  01c:   3 (GLIBC_2.2.5)   3 (GLIBC_2.2.5)   2 (GLIBC_2.2.5)   2 (GLIBC_2.2.5)
  020:   2 (GLIBC_2.2.5)   3 (GLIBC_2.2.5)   2 (GLIBC_2.2.5)   2 (GLIBC_2.2.5)
  024:   3 (GLIBC_2.2.5)   3 (GLIBC_2.2.5)   2 (GLIBC_2.2.5)   3 (GLIBC_2.2.5)
  028:   3 (GLIBC_2.2.5)   0 (*local*)       3 (GLIBC_2.2.5)   3 (GLIBC_2.2.5)
  02c:   3 (GLIBC_2.2.5)   7 (GLIBC_2.29)    2 (GLIBC_2.2.5)   2 (GLIBC_2.2.5)

Version needs section '.gnu.version_r' contains 2 entries:
 Addr: 0000000000000a20  Offset: 0x000a20  Link: 7 (.dynstr)
  0x0000: Version: 1  File: libm.so.6  Cnt: 3
  0x0010:   Name: GLIBC_2.29  Flags: none  Version: 7
  0x0020:   Name: GLIBC_2.27  Flags: none  Version: 5
  0x0030:   Name: GLIBC_2.2.5  Flags: none  Version: 3
  0x0040: Version: 1  File: libc.so.6  Cnt: 3
  0x0050:   Name: GLIBC_2.4  Flags: none  Version: 6
  0x0060:   Name: GLIBC_2.17  Flags: none  Version: 4
  0x0070:   Name: GLIBC_2.2.5  Flags: none  Version: 2
```

**After**

```console
$ readelf -V updated.elf

Version symbols section '.gnu.version' contains 48 entries:
 Addr: 00000000000009bc  Offset: 0x0009bc  Link: 6 (.dynsym)
  000:   0 (*local*)       1 (*global*)      1 (*global*)      1 (*global*)
  004:   1 (*global*)      0 (*local*)       4 (GLIBC_2.17)    1 (*global*)
  008:   1 (*global*)      1 (*global*)      1 (*global*)      1 (*global*)
  00c:   1 (*global*)      1 (*global*)      6 (GLIBC_2.4)     1 (*global*)
  010:   1 (*global*)      1 (*global*)      1 (*global*)      1 (*global*)
  014:   1 (*global*)      1 (*global*)      1 (*global*)      0 (*local*)
  018:   1 (*global*)      1 (*global*)      1 (*global*)      1 (*global*)
  01c:   1 (*global*)      1 (*global*)      1 (*global*)      1 (*global*)
  020:   1 (*global*)      1 (*global*)      1 (*global*)      1 (*global*)
  024:   1 (*global*)      1 (*global*)      1 (*global*)      1 (*global*)
  028:   1 (*global*)      0 (*local*)       1 (*global*)      1 (*global*)
  02c:   1 (*global*)      1 (*global*)      1 (*global*)      1 (*global*)

Version needs section '.gnu.version_r' contains 1 entries:
 Addr: 0000000000000a20  Offset: 0x000a20  Link: 7 (.dynstr)
  0x0000: Version: 1  File: libc.so.6  Cnt: 3
  0x0010:   Name: GLIBC_2.4  Flags: none  Version: 6
  0x0020:   Name: GLIBC_2.17  Flags: none  Version: 4
  0x0030:   Name: GLIBC_2.2.5  Flags: none  Version: 2
```
