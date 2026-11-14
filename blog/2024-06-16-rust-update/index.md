---
title: "LIEF Rust bindings updates"
description: "LIEF Rust bindings ahead of 0.15.0: new documentation, more supported architectures, Rust tier 1 and tier 2 coverage, and use cases such as Authenticode checks."
canonical_url: "https://lief.re/blog/2024-06-16-rust-update/"
markdown_url: "https://lief.re/blog/2024-06-16-rust-update/index.md"
authors: ["Romain Thomas"]
date_published: "2024-06-16T00:00:00Z"
date_modified: "2024-06-16T00:00:00Z"
language: "en-US"
section: "blog"
tags: ["Rust","bindings"]
categories: []
---

# LIEF Rust bindings updates

> LIEF Rust bindings ahead of 0.15.0: new documentation, more supported architectures, Rust tier 1 and tier 2 coverage, and use cases such as Authenticode checks.

The rust bindings for LIEF are getting more and more production-ready for the next
official release of LIEF (`v0.15.0`). This blog post exposes the recent updates on
these bindings and some use cases.

## Documentation

The Rust documentation for the current bindings is now almost complete such as most
of the functions and structures are documented:

[![LIEF Rust Documentation](https://lief.re/blog/2024-06-16-rust-update/doc.png)](https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Signature.html#method.check)

One can access the nightly doc at this address:
https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/index.html

## New Architectures Supported

As mentioned in the [previous blog post](https://lief.re/blog/2024-04-28-rust/),
the Rust bindings work with a "pre-compilation" step. Since the previous blog post,
I added the support of iOS (i.e. `aarch64-apple-ios`) and for Linux ARM64 (i.e. `aarch64-unknown-linux-gnu`)
which gives us this support in LIEF compared to the [Rust Platform Support](https://doc.rust-lang.org/nightly/rustc/platform-support.html#platform-support)

### Rust Tier 1 Support

| Triplet                     | Support            | Comment                      |
|-----------------------------|--------------------|------------------------------|
| `aarch64-unknown-linux-gnu` | :white_check_mark: |                              |
| `i686-pc-windows-gnu`       | :x:                |                              |
| `i686-pc-windows-msvc`      | :shrug:            | Could be supported if needed |
| `i686-unknown-linux-gnu`    | :shrug:            | Could be supported if needed |
| `x86_64-apple-darwin`       | :white_check_mark: |                              |
| `x86_64-pc-windows-gnu`     | :x:                |                              |
| `x86_64-pc-windows-msvc`    | :white_check_mark: |                              |
| `x86_64-unknown-linux-gnu`  | :white_check_mark: |                              |

### Rust Tier 2 Support

| Triplet                     | Support            | Comment                      |
|-----------------------------|--------------------|------------------------------|
| `aarch64-apple-ios`         | :white_check_mark: |                              |
| `aarch64-apple-ios-sim`     | :shrug:            | Could be supported if needed |
| `aarch64-linux-android`     | :stopwatch:        | Planned                      |
| `aarch64-apple-darwin`      | :white_check_mark: |                              |
| `x86_64-unknown-linux-musl` | :stopwatch:        | Planned                      |


The support for some triplets like `i686-pc-windows-msvc` will be done on an as-needed
basis so feel free to reach out or to open an issue/discussion on GitHub if you need this
support.

## Uses Cases

```rust
// This code checks the PE Authenticode

let path = std::env::args().last().unwrap();
let mut file = std::fs::File::open(path).expect("Can't open the file");

if let Some(lief::Binary::PE(pe)) = lief::Binary::from(&mut file) {
    let result = pe.verify_signature(pe::signature::VerificationChecks::DEFAULT);
    if result.is_ok() {
        println!("Valid signature!");
    } else {
        println!("Signature not valid: {}", result);
    }
    return ExitCode::SUCCESS;
}
ExitCode::FAILURE
```

---

```rust
// This code list all the libraries needed by an ELF binary as well as
// the versioning of the symbols.
// Example of output:
// Dependencies:
//   - libclang-cpp.so.17
//   - libLLVM-17.so
//   - libstdc++.so.6
//   - libc.so.6
// Versions:
//   From libc.so.6
//     - GLIBC_ABI_DT_RELR
//     - GLIBC_2.14
//     - GLIBC_2.34
//     - GLIBC_2.32
//   From libstdc++.so.6
//     - GLIBCXX_3.4.29
//     - GLIBCXX_3.4.30
//   From libLLVM-17.so
//     - LLVM_17

let mut args = std::env::args();
if args.len() != 2 {
    println!("Usage: {} <binary>", args.next().unwrap());
    return ExitCode::FAILURE;
}

let path = std::env::args().last().unwrap();
let mut file = std::fs::File::open(&path).expect("Can't open the file");
if let Some(lief::Binary::ELF(elf)) = lief::Binary::from(&mut file) {
    println!("Dependencies:");
    for entry in elf.dynamic_entries() {
        if let dynamic::Entries::Library(lib) = entry {
            println!("  - {}", lib.name());
        }
    }
    println!("Versions:");
    for version in elf.symbols_version_requirement() {
        println!("  From {}", version.name());
        for aux in version.auxiliary_symbols() {
            println!("    - {}", aux.name());
        }
    }

    return ExitCode::SUCCESS;
}
println!("Can't process {}", path);
ExitCode::FAILURE
```

---

```rust
// Inspecting the PE rich header

let path = std::env::args().last().unwrap();
let mut file = std::fs::File::open(&path).expect("Can't open the file");

if let Some(lief::Binary::PE(pe)) = lief::Binary::from(&mut file) {
    let rich_header = pe.rich_header().unwrap_or_else(|| {
        println!("Rich header not found!");
        process::exit(0);
    });

    println!("Rich header key: 0x{:x}", rich_header.key());
    for entry in rich_header.entries() {
        println!("id: 0x{:04x} build_id: 0x{:04x} count: #{}",
                 entry.id(), entry.build_id(), entry.count());
    }

    return ExitCode::SUCCESS;
}
println!("Can't process {}", path);
ExitCode::FAILURE
```

---

```rust
// Dumping which section of an iOS app is encrypted

let path = std::env::args().last().unwrap();
let mut file = std::fs::File::open(&path).expect("Can't open the file");

if let Some(lief::Binary::MachO(fat)) = lief::Binary::from(&mut file) {
    for macho in fat.iter() {
        for cmd in macho.commands() {
            if let lief::macho::Commands::EncryptionInfo(info) = cmd {
                println!("Encrypted area: 0x{:08x} - 0x{:08x} (id: {})",
                    info.crypt_offset(), info.crypt_offset() + info.crypt_size(),
                    info.crypt_id()
                )
            }
        }
    }
    return ExitCode::SUCCESS;
}
```
