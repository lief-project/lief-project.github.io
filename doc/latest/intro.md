---
documentID: "f5fbe9a681bb8fdf775af0ba1e8def08abe388d58037dfad7b9f3296f792c800"
docname: "intro"
title: "Introduction - LIEF Documentation"
description: "Introduction. The purpose of this project is to provide a cross-platform library to parse, modify, and abstract the ELF, PE, and Mach-O formats."
canonical: "https://lief.re/doc/latest/intro.html"
markdownURL: "https://lief.re/doc/latest/intro.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "2ea1280e1eec00a7e974500872b42b848ff6d9fbfce1fae1fbc7a7910d383d94"
---

# [Introduction](<https://lief.re/doc/latest/intro.html#introduction>)

The purpose of this project is to provide a cross-platform library to parse, modify, and abstract the [ELF](<https://lief.re/doc/latest/formats/elf/index.html#format-elf>), [PE](<https://lief.re/doc/latest/formats/pe/index.html#format-pe>), and [Mach-O](<https://lief.re/doc/latest/formats/macho/index.html#format-macho>) formats.

From a technical standpoint, the library is written in C++ with a C++17 public interface and exposes bindings for Python and Rust.

As a result, you can use LIEF through an idiomatic API in these languages:

**Python**

```python
import lief

elf: lief.ELF.Binary | None = lief.ELF.parse("libc.so")
assert elf is not None

for symbol in elf.symbols:
    print(symbol.address, symbol.name)

print(elf.header)

for entry in elf.dynamic_entries:
    if isinstance(entry, lief.ELF.DynamicEntryLibrary):
        entry.name = "libhello.so"

elf.write("modified.elf")
```

**C++**

```cpp
#include <LIEF/LIEF.hpp>
std::unique_ptr<LIEF::MachO::FatBinary> fat =
    LIEF::MachO::Parser::parse("libobjc.dylib");

for (const LIEF::MachO::Binary& macho : *fat) {
  for (const LIEF::MachO::BindingInfo& binding : macho.bindings()) {
    std::cout << binding.address() << ' ' << binding.symbol()->name() << '\n';
  }

  if (macho.is_ios()) {
    if (const LIEF::MachO::EncryptionInfo* info = macho.encryption_info()) {
      std::cout << info->crypt_id() << '\n';
    }
  }
}
```

**Rust**

```rust
let mut file = std::fs::File::open(path).expect("Can't open the file");

if let Some(lief::Binary::PE(pe)) = lief::Binary::from(&mut file) {
    let rich_header = pe.rich_header().unwrap_or_else(|| {
        println!("Rich header not found!");
        process::exit(0);
    });

    println!("Rich header key: 0x{:x}", rich_header.key());
    for entry in rich_header.entries() {
        println!(
            "id: 0x{:04x} build_id: 0x{:04x} count: #{}",
            entry.id(),
            entry.build_id(),
            entry.count()
        );
    }

    let result = pe.verify_signature(lief::pe::signature::VerificationChecks::DEFAULT);
    if result == lief::pe::signature::VerificationFlags::OK {
        println!("Valid signature!");
    } else {
        println!("Signature not valid: {:?}", result);
    }
}
```

The project is also dedicated to providing comprehensive documentation and maintaining strong development standards, including:

- A test suite with code coverage and non-regression testing
- Address Sanitizer checks ([ASAN](<https://clang.llvm.org/docs/AddressSanitizer.html>))
- Continuous Integration for testing and releasing packages
- Dockerization of various CI steps
- A comprehensive [changelog](<https://lief.re/doc/latest/changelog.html#changelog-ref>)
- Nightly builds

![LIEF Architecture](https://lief.re/doc/latest/_images/elements.webp)

To get started with LIEF’s features, you can check the documentation for specific formats: [ELF](<https://lief.re/doc/latest/formats/elf/index.html#format-elf>), [PE](<https://lief.re/doc/latest/formats/pe/index.html#format-pe>), or [Mach-O](<https://lief.re/doc/latest/formats/macho/index.html#format-macho>). Integrating LIEF into your project is also straightforward:

**Python**

**With pip**

```console
$ pip install lief
```

**Using a requirements.txt file**

```text
lief==1.0.0
```

**C++**

**Compiler command line**

```console
$ clang++ -lLIEF -I<LIEF_INSTALL>/include/ ...
```

**CMake**

```cmake
find_package(LIEF)

target_link_libraries(my-project LIEF::LIEF)
```

**Rust**

**Nightly version**

```toml
# For nightly build
[dependencies]
lief = { git = "https://github.com/lief-project/LIEF", branch = "main" }
```

**Released version**

```toml
# For a tagged release
[dependencies]
lief = "1.0.0"
```

You can find additional content, including release notes, on the [LIEF blog](<https://lief.re/blog/>):

- [LIEF 1.0.0 release info](<https://lief.re/blog/2026-07-13-lief-1-0-0/>)
- [LIEF 0.17.0 release info](<https://lief.re/blog/2025-09-14-lief-0-17-0/>)
- [LIEF 0.16.0 release info](<https://lief.re/blog/2024-12-10-lief-0-16-0/>)
- [LIEF 0.15.0 release info](<https://lief.re/blog/2024-07-21-lief-0.15-0/>)
- [LIEF 0.14.0 release info](<https://lief.re/blog/2024-01-20-lief-0-14-0/>)
- [LIEF 0.13.0 release info](<https://lief.re/blog/2023-04-09-lief-0-13-0/>)
- [LIEF 0.12.0 release info](<https://lief.re/blog/2022-03-27-lief-v0-12-0/>)
- [LIEF 0.11.1 release info](<https://lief.re/blog/2021-02-22-lief-0-11-1/>)
- [LIEF 0.11.0 release info](<https://lief.re/blog/2021-01-19-lief-0-11-0/>)
- [LIEF 0.9.0 release info](<https://lief.re/blog/2018-06-11-lief-0-9-0/>)

Additional practical examples are available in the [examples/](<https://github.com/lief-project/LIEF/tree/main/examples>) directory.

## [Extended Version](<https://lief.re/doc/latest/intro.html#extended-version>)

[LIEF Extended](<https://lief.re/doc/latest/extended/intro.html#extended-intro>) adds [PDB](<https://lief.re/doc/latest/extended/pdb/index.html#extended-pdb>) and [DWARF](<https://lief.re/doc/latest/extended/dwarf/index.html#extended-dwarf>) analysis, [Objective-C metadata](<https://lief.re/doc/latest/extended/objc/index.html#extended-objc>), [Dyld shared caches](<https://lief.re/doc/latest/extended/dsc/index.html#extended-dsc>), and [assembly](<https://lief.re/doc/latest/extended/assembler/index.html#extended-assembler>)/[disassembly](<https://lief.re/doc/latest/extended/disassembler/index.html#extended-disassembler>).

## [Runtime](<https://lief.re/doc/latest/intro.html#runtime>)

The optional [runtime API](<https://lief.re/doc/latest/runtime/intro.html#runtime-intro>) inspects the process running LIEF: its host, loaded modules, and memory. Start with the

## [Additional Documentation](<https://lief.re/doc/latest/intro.html#additional-documentation>)

- [Doxygen](<https://lief.re/doc/latest/doxygen/>)
- Rust documentation:

  - Stable: [https://lief.re/doc/stable/rust/lief](<https://lief.re/doc/stable/rust/lief>)
  - Nightly: [https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/index.html](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/index.html>)
