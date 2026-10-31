---
documentID: "480297733823647889e4623a5505326a975fc97b11fd3e8be42a75d63e4b65ed"
docname: "formats/macho/index"
title: "Mach-O - LIEF Documentation"
description: "Mach-O binaries can be parsed using the lief.MachO.parse() function."
canonical: "https://lief.re/doc/latest/formats/macho/index.html"
markdownURL: "https://lief.re/doc/latest/formats/macho/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "43ace54784265dbc8a28b8f9338638faf8c98c004ee3552c1b1e966bfea13850"
---

# [Mach-O](<https://lief.re/doc/latest/formats/macho/index.html#mach-o>)

API

- [C++](<https://lief.re/doc/latest/formats/macho/cpp.html>)
- [Python](<https://lief.re/doc/latest/formats/macho/python.html>)
- [Rust](<https://lief.re/doc/latest/formats/macho/rust.html>)

## [Introduction](<https://lief.re/doc/latest/formats/macho/index.html#introduction>)

Mach-O binaries can be parsed using the  `lief.MachO.parse()` ( [`lief::macho::FatBinary::parse`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.FatBinary.html#method.parse>) ;  [`lief.MachO.parse()`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.parse>) ;  [`LIEF::MachO::Parser::parse()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Parser5parseENSt11string_viewERK12ParserConfig>) ) function.

> **Note**
> 
> The Mach-O format defines FAT binaries, which can embed different architectures into a single file.  `lief.MachO.parse()` ( [`lief::macho::FatBinary::parse`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.FatBinary.html#method.parse>) ;  [`lief.MachO.parse()`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.parse>) ;  [`LIEF::MachO::Parser::parse()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Parser5parseENSt11string_viewERK12ParserConfig>) ) always returns a  `lief.MachO.FatBinary` ( [`lief::macho::FatBinary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.FatBinary.html>) ;  [`lief.MachO.FatBinary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary>) ;  [`LIEF::MachO::FatBinary`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE>) ), assuming that a non-FAT Mach-O can be represented as a  `lief.MachO.FatBinary` ( [`lief::macho::FatBinary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.FatBinary.html>) ;  [`lief.MachO.FatBinary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary>) ;  [`LIEF::MachO::FatBinary`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE>) ) containing a single architecture.

**Python**

```python
import lief

# Using filepath
macho: lief.MachO.FatBinary | None = lief.MachO.parse("/bin/ls")

# Using a Path from pathlib
macho: lief.MachO.FatBinary | None = lief.MachO.parse(
    pathlib.Path(r"C:\Users\test.macho")
)

# Using an io object
with open("/bin/ssh", "rb") as f:
    macho: lief.MachO.FatBinary | None = lief.MachO.parse(f)
```

**C++**

```cpp
#include <LIEF/MachO.hpp>

// Using a file path as a std::string
std::unique_ptr<LIEF::MachO::FatBinary> macho =
    LIEF::MachO::Parser::parse("/bin/ls");

// Using a vector
std::vector<uint8_t> my_raw_macho;
macho = LIEF::MachO::Parser::parse(my_raw_macho);
```

**Rust**

```rust
let macho: lief::macho::FatBinary = lief::macho::FatBinary::parse("/bin/ls").unwrap();
```

This  `lief.MachO.FatBinary` ( [`lief::macho::FatBinary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.FatBinary.html>) ;  [`lief.MachO.FatBinary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary>) ;  [`LIEF::MachO::FatBinary`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE>) ) object exposes facilities to either iterate over the different  `lief.MachO.Binary` ( [`lief::macho::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html>) ;  [`lief.MachO.Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary>) ;  [`LIEF::MachO::Binary`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE>) ) or pick/take a specific one:

**Python**

```python
fat: lief.MachO.FatBinary

# Iterate
for macho in fat:
    print(macho.entrypoint)
    print(len(macho.commands))

# Pick one at the specified index
macho = fat.at(0)

# Pick one based on the architecture
macho = fat.take(lief.MachO.Header.CPU_TYPE.ARM64)
```

**C++**

```cpp
std::unique_ptr<LIEF::MachO::FatBinary> fat;

// Iterate
for (const LIEF::MachO::Binary& macho : *fat) {
  std::cout << macho.entrypoint() << '\n';
  std::cout << macho.commands().size() << '\n';
}

// Pick one at the specified index (without taking ownership)
const LIEF::MachO::Binary* macho = fat->at(0);

// Pick one at the specified index and taking ownership
std::unique_ptr<LIEF::MachO::Binary> owned = fat->take(0);

// Pick one with the given arch and taking ownership
std::unique_ptr<LIEF::MachO::Binary> arm64 =
    fat->take(LIEF::MachO::Header::CPU_TYPE::ARM64);
```

**Rust**

```rust
let fat: &lief::macho::FatBinary = some_fat;

// Iterate
for macho in fat.iter() {
    println!("{}", macho.entrypoint());
}

// Pick one with the given arch
let arm64 = fat
    .with_cpu(lief::macho::header::CpuType::ARM64)
    .expect("Missing ARM64");
```

After modifying a  `lief.MachO.Binary` ( [`lief::macho::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html>) ;  [`lief.MachO.Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary>) ;  [`LIEF::MachO::Binary`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE>) ) or  `lief.MachO.FatBinary` ( [`lief::macho::FatBinary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.FatBinary.html>) ;  [`lief.MachO.FatBinary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary>) ;  [`LIEF::MachO::FatBinary`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE>) ) object, you can use either  `lief.MachO.Binary.write()` ( [`lief::macho::Binary::write`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.write>) ;  [`lief::macho::Binary::write_with_config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.write_with_config>) ;  [`lief.MachO.Binary.write()`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.write>) ;  [`LIEF::MachO::Binary::write()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary5writeERKNSt6stringE>) ) or  `lief.MachO.FatBinary.write()` ( [`lief.FatBinary.Binary.write()`](<https://lief.re/doc/latest/formats/macho/index.html>) ;  [`LIEF::FatBinary::Binary::write()`](<https://lief.re/doc/latest/formats/macho/index.html>) ) to write it back to a raw Mach-O file.

**Python**

```python
macho: lief.MachO.FatBinary

macho.at(0).write("fit.macho")
macho.write("fat.macho")  # write-back the whole FAT binary
```

**C++**

```cpp
std::unique_ptr<LIEF::MachO::FatBinary> macho;

macho->take(LIEF::MachO::Header::CPU_TYPE::ARM64)->write("fit.macho");
macho->write("fat.macho");
```

**Rust**

```rust
let fat: &mut lief::macho::FatBinary = some_fat;
fat.with_cpu(lief::macho::header::CpuType::ARM64)
    .unwrap()
    .write("fit.macho");
```

You can also use  `lief.MachO.Binary.write_to_bytes()` ( [`lief::macho::Binary::write_to_bytes`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.write_to_bytes>) ;  [`lief::macho::Binary::write_to_bytes_with_config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.write_to_bytes_with_config>) ;  [`lief.MachO.Binary.write_to_bytes()`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.write_to_bytes>) ;  [`std::unique_ptr<Builder> LIEF::MachO::Binary::write(std::ostream &)`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary5writeERNSt7ostreamE>) ;  [`std::unique_ptr<Builder> LIEF::MachO::Binary::write(std::ostream &, const Builder::config_t &)()`](<https://lief.re/doc/latest/formats/macho/index.html>) ) to get the new Mach-O binary as a buffer of bytes:

> **Note**
> 
> This API can also take an extra  `lief.MachO.Builder.config_t` ( [`lief::pe::builder::Config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/builder/struct.Config.html>) ;  [`lief.MachO.Builder.config_t`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Builder.config_t>) ;  [`LIEF::MachO::Builder::config_t`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder8config_tE>) ) parameter.

**Python**

```python
macho: lief.MachO.Binary

new_macho: bytes = macho.write_to_bytes()
```

**C++**

```cpp
std::unique_ptr<LIEF::MachO::Binary> macho;

std::ostringstream os;
macho->write(os);
std::string buffer = os.str();

const auto* start = reinterpret_cast<const uint8_t*>(buffer.data());
size_t size = buffer.size();
```

**Rust**

```rust
let macho: &mut lief::macho::Binary = some_macho;

let bytes: Vec<u8> = macho.write_to_bytes();
```

## [Advanced Parsing/Writing](<https://lief.re/doc/latest/formats/macho/index.html#advanced-parsing-writing>)

`lief.MachO.parse()` ( [`lief::macho::FatBinary::parse`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.FatBinary.html#method.parse>) ;  [`lief.MachO.parse()`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.parse>) ;  [`LIEF::MachO::Parser::parse()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Parser5parseENSt11string_viewERK12ParserConfig>) ) can take an extra  `lief.MachO.ParserConfig` ( [`lief.MachO.ParserConfig`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ParserConfig>) ;  [`LIEF::MachO::ParserConfig`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE>) ) parameter to specify parts of the Mach-O format to skip during parsing.

> **Warning**
> 
> Generally,  `lief.MachO.Binary.write()` ( [`lief::macho::Binary::write`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.write>) ;  [`lief::macho::Binary::write_with_config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.write_with_config>) ;  [`lief.MachO.Binary.write()`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.write>) ;  [`LIEF::MachO::Binary::write()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary5writeERKNSt6stringE>) ) and  `lief.MachO.FatBinary.write()` ( [`lief.FatBinary.Binary.write()`](<https://lief.re/doc/latest/formats/macho/index.html>) ;  [`LIEF::FatBinary::Binary::write()`](<https://lief.re/doc/latest/formats/macho/index.html>) ) require a **complete** initial parsing of the Mach-O file.

Similarly,  `lief.MachO.Binary.write()` ( [`lief::macho::Binary::write`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.write>) ;  [`lief::macho::Binary::write_with_config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.write_with_config>) ;  [`lief.MachO.Binary.write()`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.write>) ;  [`LIEF::MachO::Binary::write()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary5writeERKNSt6stringE>) ) can also take an extra  `lief.MachO.Builder.config_t` ( [`lief::pe::builder::Config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/builder/struct.Config.html>) ;  [`lief.MachO.Builder.config_t`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Builder.config_t>) ;  [`LIEF::MachO::Builder::config_t`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder8config_tE>) ) to specify which parts of the Mach-O should be rebuilt.

**Python**

```python
parser_config = lief.MachO.ParserConfig()
parser_config.parse_dyld_bindings = False

fat = lief.MachO.parse("my.macho", parser_config)
assert isinstance(fat, lief.MachO.FatBinary)

macho = fat.at(0)
assert isinstance(fat, lief.MachO.Binary)

builder_config = lief.MachO.Builder.config_t()
builder_config.linkedit = False

macho.write("new.macho", builder_config)
```

**C++**

```cpp
LIEF::MachO::ParserConfig parser_config;
parser_config.parse_dyld_bindings = false;

std::unique_ptr<LIEF::MachO::FatBinary> fat =
    LIEF::MachO::Parser::parse("my.macho", parser_config);

LIEF::MachO::Binary* macho = fat->at(0);

LIEF::MachO::Builder::config_t builder_config;
builder_config.linkedit = false;

macho->write("new.macho", builder_config);
```

**Rust**

```rust
let mut parser_config = lief::macho::ParserConfig::default();
parser_config.parse_dyld_bindings = false;

let mut fat = lief::macho::parse_with_config("my.macho", &parser_config).unwrap();

let mut macho = fat.iter().next().unwrap();

let mut builder_config = lief::macho::builder::Config::default();
builder_config.linkedit = false;

macho.write_with_config("new.macho", builder_config);
```

> **See also**
> 
> [Binary Abstraction](<https://lief.re/doc/latest/api/binary_abstraction/index.html#binary-abstraction>)

## [Dump Analysis](<https://lief.re/doc/latest/formats/macho/index.html#dump-analysis>)

LIEF has the support to process Mach-O memory dump with  `lief.MachO.parse_from_dump()` ( [`lief::macho::FatBinary::parse_from_dump`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.FatBinary.html#method.parse_from_dump>) ;  [`lief.MachO.parse_from_dump()`](<https://lief.re/doc/latest/formats/macho/index.html>) ;  [`LIEF::MachO::Parser::parse_from_dump()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Parser15parse_from_dumpENSt11string_viewE8uint64_tRK12ParserConfig>) ). This function translates the file offsets referenced by the Mach-O structures into their location inside the dump, using the base address passed as the second parameter. As for the regular parser, it returns a  `lief.MachO.FatBinary` ( [`lief::macho::FatBinary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.FatBinary.html>) ;  [`lief.MachO.FatBinary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary>) ;  [`LIEF::MachO::FatBinary`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE>) ):

**Python**

```python
# 0x11e32c000 is the (absolute) address at which the dump was mapped
fat = lief.MachO.parse_from_dump("module.dump", 0x11E32C000)
assert isinstance(fat, lief.MachO.FatBinary)

macho = fat.at(0)
assert isinstance(fat, lief.MachO.Binary)

for segment in macho.segments:
    print(segment.name, hex(segment.virtual_address))
```

**C++**

```cpp
auto fat = LIEF::MachO::Parser::parse_from_dump("module.dump", 0x11e32c000);
const LIEF::MachO::Binary* macho = fat->at(0);

for (const LIEF::MachO::SegmentCommand& segment : macho->segments()) {
  std::cout << segment.name() << '\n';
}
```

**Rust**

```rust
let fat = lief::macho::FatBinary::parse_from_dump("module.dump", 0x1_1e32_c000).unwrap();
let macho = fat.iter().next().unwrap();

for segment in macho.segments() {
    println!("{} {:#x}", segment.name(), segment.virtual_address());
}
```

> **Note**
> 
> The second parameter **must** be the (absolute) virtual address at which the dump was mapped. It is used to convert the virtual addresses found in the Mach-O structures back into an offset within the dump.

### [Producing a dump with the runtime API](<https://lief.re/doc/latest/formats/macho/index.html#producing-a-dump-with-the-runtime-api>)

Such a dump can be produced from a live process thanks to the LIEF [runtime](<https://lief.re/doc/latest/runtime/intro.html#runtime-intro>) and, more precisely, the [Module API](<https://lief.re/doc/latest/runtime/components/modules.html#runtime-modules>).  `lief.runtime.Module.dump()` ( [`lief::runtime::module::Module::dump`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/module/trait.Module.html#method.dump>) ;  [`lief.runtime.Module.dump()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module.dump>) ;  [`LIEF::runtime::Module::dump()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module4dumpEv>) ) captures the memory of a loaded module (from its imagebase over its virtual size):

**Python**

```python
# Find the module to dump in the current process
mod = lief.runtime.module_from_name("libsystem_c.dylib")
assert isinstance(mod, lief.runtime.osx.Module)

# Dump the module's memory into a file (the raw bytes are also returned) ...
data: bytes = mod.dump("module.dump")

# ... and parse it back using the same imagebase:
macho = lief.MachO.parse_from_dump(data, mod.imagebase)
```

**C++**

```cpp
// Find the module to dump in the current process
auto mod = LIEF::runtime::module_from_name("libsystem_c.dylib");

// Dump the module's memory into a file (the raw bytes are also returned)
std::vector<uint8_t> data = mod->dump("module.dump");

auto fat = LIEF::MachO::Parser::parse_from_dump("module.dump", mod->imagebase());
```

**Rust**

```rust
use lief::runtime::Module;

let module = lief::runtime::module_from_name("libsystem_c.dylib").unwrap();

// Dump the module's memory into a file (the raw bytes are also returned)
let data = module.dump_to_file("module.dump");

let fat = lief::macho::FatBinary::parse_from_dump("module.dump", module.imagebase()).unwrap();
```

## [RPath and Library Path Modification](<https://lief.re/doc/latest/formats/macho/index.html#rpath-and-library-path-modification>)

Sometimes, we need to modify the Mach-O RPath commands or the (absolute) path of a linked library in an executable. When recompiling or linking the executable is not possible, LIEF can be used for these modifications.

For example, let’s consider a binary with the following dependencies:

```bash
$ otool -L hello.bin
hello:
      /Users/romain/dev/libmylib.dylib (compatibility version 0.0.0, current version 0.0.0)
      /usr/lib/libc++.1.dylib (compatibility version 1.0.0, current version 1700.255.0)
      /usr/lib/libSystem.B.dylib (compatibility version 1.0.0, current version 1345.100.2)
```

One can change the directory of `libmylib.dylib` with the following code:

**Python**

```python
fat = lief.MachO.parse("hello.bin")
assert isinstance(fat, lief.MachO.FatBinary)

macho = fat.at(0)
assert isinstance(fat, lief.MachO.Binary)

lib = macho.find_library("libmylib.dylib")
assert isinstance(lib, lief.MachO.DylibCommand)

lib.name = "/opt/homebrew/my_package/libmylib.dylib"

macho.write("hello_fixed.bin")
```

**C++**

```cpp
std::unique_ptr<LIEF::MachO::Binary> macho =
    LIEF::MachO::Parser::parse("hello.bin")->take(0);

LIEF::MachO::DylibCommand* lib = macho->find_library("libmylib.dylib");
lib->name("/opt/homebrew/my_package/libmylib.dylib");

macho->write("hello_fixed.bin");
```

**Rust**

```rust
let fat = lief::macho::FatBinary::parse("hello.bin").unwrap();
let mut binary = fat.iter().next().unwrap();

let mut lib = binary.find_library("libmylib.dylib").unwrap();
lib.set_name("/opt/homebrew/my_package/libmylib.dylib");

binary.write("hello_fixed.bin");
```

> **Note**
> 
> It is worth mentioning that LIEF doesn’t impose restrictions on the length of modified library paths. LIEF manages all internal modifications to support both longer and shorter library paths.

This type of modification can be used in conjunction with the `@rpath` feature of Mach-O binaries:

1. We can add an extra `LC_RPATH` ( `lief.MachO.RPathCommand` ( [`lief::macho::commands::RPath`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/commands/struct.RPath.html>) ;  [`lief.MachO.RPathCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RPathCommand>) ;  [`LIEF::MachO::RPathCommand`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommandE>) )) command to `hello.bin`:

**Python**

```python
fat = lief.MachO.parse("hello.bin")
assert isinstance(fat, lief.MachO.FatBinary)

macho = fat.at(0)
assert isinstance(fat, lief.MachO.Binary)

rpath = lief.MachO.RPathCommand.create("/opt/homebrew/my_package")
assert isinstance(rpath, lief.MachO.RPathCommand)

macho.add(rpath)
```

**C++**

```cpp
std::unique_ptr<LIEF::MachO::Binary> macho =
    LIEF::MachO::Parser::parse("hello.bin")->take(0);

auto rpath = LIEF::MachO::RPathCommand::create("/opt/homebrew/my_package");
macho->add(*rpath);
```

**Rust**

```rust
let fat = lief::macho::FatBinary::parse("hello.bin").unwrap();
let mut binary = fat.iter().next().unwrap();

let rpath = RPath::new("/opt/homebrew/my_package");
binary.add_command(rpath);
```

2. Then, we can change the library path of `libmylib.dylib` to include the RPath prefix:

**Python**

```python
macho: lief.MachO.Binary

lib = macho.find_library("libmylib.dylib")
assert isinstance(lib, lief.MachO.DylibCommand)

lib.name = "@rpath/libmylib.dylib"

macho.write("hello_fixed.bin")
```

**C++**

```cpp
std::unique_ptr<LIEF::MachO::Binary> macho;

LIEF::MachO::DylibCommand* lib = macho->find_library("libmylib.dylib");
lib->name("@rpath/libmylib.dylib");

macho->write("hello_fixed.bin");
```

**Rust**

```rust
let binary: &mut lief::macho::Binary = some_binary;

let mut lib = binary.find_library("libmylib.dylib").unwrap();
lib.set_name("@rpath/libmylib.dylib");

binary.write("hello_fixed.bin");
```

## [Objective-C Support](<https://lief.re/doc/latest/formats/macho/index.html#objective-c-support>)

If a Mach-O binary is compiled from Objective-C sources, it may contain metadata represented by the  `lief.ObjC.Metadata` ( [`lief::objc::Metadata`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/objc/struct.Metadata.html>) ;  [`lief.objc.Metadata`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Metadata>) ;  [`LIEF::objc::Metadata`](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8MetadataE>) ) object.

This metadata can help understand the underlying structures of the binary, and [LIEF Extended](<https://lief.re/doc/latest/extended/intro.html#extended-intro>) provides support for accessing this information through  `lief.MachO.Binary.objc_metadata` ( [`lief::macho::Binary::objc_metadata`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.objc_metadata>) ;  [`lief.MachO.Binary.objc_metadata`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.objc_metadata>) ;  [`LIEF::MachO::Binary::objc_metadata()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary13objc_metadataEv>) ).

For more details, you can check the [Obj-C section](<https://lief.re/doc/latest/extended/objc/index.html#extended-objc>).
