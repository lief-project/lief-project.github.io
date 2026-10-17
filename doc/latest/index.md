---
documentID: "7665567d92c0fa54e62a140e760be87689b8323be197404993d0e0842b189fb0"
docname: "index"
title: "LIEF Documentation - ELF, PE, Mach-O and Binary Analysis"
description: "LIEF documentation for parsing, inspecting, modifying, and writing ELF, PE, Mach-O, COFF, Android, and other executable formats in C++, Python, and Rust."
canonical: "https://lief.re/doc/latest/index.html"
markdownURL: "https://lief.re/doc/latest/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "0eb28b0d21bcf5a5d9a98b3bab63d9208bf45f9d5ddec27292b87c646c35771e"
---

# [LIEF Documentation](<https://lief.re/doc/latest/index.html#lief-documentation>)

LIEF is a cross-platform library for parsing, inspecting, modifying, and writing executable formats. Explore guides, tutorials, and API references for ELF, PE, Mach-O, COFF, Android formats, and more in C++, Python, and Rust.

- [Introduction](<https://lief.re/doc/latest/intro.html>)
  - [Extended Version](<https://lief.re/doc/latest/intro.html#extended-version>)
  - [Runtime](<https://lief.re/doc/latest/intro.html#runtime>)
  - [Additional Documentation](<https://lief.re/doc/latest/intro.html#additional-documentation>)
- [Installation and Integration](<https://lief.re/doc/latest/installation.html>)
  - [SDK](<https://lief.re/doc/latest/installation.html#sdk>)
  - [Python](<https://lief.re/doc/latest/installation.html#python>)
  - [Rust](<https://lief.re/doc/latest/installation.html#rust>)
  - [CMake Integration](<https://lief.re/doc/latest/installation.html#cmake-integration>)
  - [Visual Studio Integration](<https://lief.re/doc/latest/installation.html#visual-studio-integration>)
  - [Xcode Integration](<https://lief.re/doc/latest/installation.html#xcode-integration>)
- [Compilation](<https://lief.re/doc/latest/compilation.html>)
  - [Libraries only (SDK)](<https://lief.re/doc/latest/compilation.html#libraries-only-sdk>)
  - [Python bindings](<https://lief.re/doc/latest/compilation.html#python-bindings>)
  - [Runtime features](<https://lief.re/doc/latest/compilation.html#runtime-features>)
  - [Debugging](<https://lief.re/doc/latest/compilation.html#debugging>)
  - [Third Party](<https://lief.re/doc/latest/compilation.html#third-party>)
  - [Continuous Integration](<https://lief.re/doc/latest/compilation.html#continuous-integration>)
  - [CMake Options](<https://lief.re/doc/latest/compilation.html#cmake-options>)
  - [Docker](<https://lief.re/doc/latest/compilation.html#docker>)

Formats

- [ELF](<https://lief.re/doc/latest/formats/elf/index.html>)
  - [C++](<https://lief.re/doc/latest/formats/elf/cpp.html>)
  - [Python](<https://lief.re/doc/latest/formats/elf/python.html>)
  - [Rust](<https://lief.re/doc/latest/formats/elf/rust.html>)
  - [Introduction](<https://lief.re/doc/latest/formats/elf/index.html#introduction>)
  - [Adding a Section/Segment](<https://lief.re/doc/latest/formats/elf/index.html#adding-a-section-segment>)
  - [Dump Analysis](<https://lief.re/doc/latest/formats/elf/index.html#dump-analysis>)
  - [Advanced Parsing/Writing](<https://lief.re/doc/latest/formats/elf/index.html#advanced-parsing-writing>)
  - [DWARF Support](<https://lief.re/doc/latest/formats/elf/index.html#dwarf-support>)
  - [R[UN]PATH Modification](<https://lief.re/doc/latest/formats/elf/index.html#r-un-path-modification>)
  - [Symbol Versions](<https://lief.re/doc/latest/formats/elf/index.html#symbol-versions>)
- [Mach-O](<https://lief.re/doc/latest/formats/macho/index.html>)
  - [C++](<https://lief.re/doc/latest/formats/macho/cpp.html>)
  - [Python](<https://lief.re/doc/latest/formats/macho/python.html>)
  - [Rust](<https://lief.re/doc/latest/formats/macho/rust.html>)
  - [Introduction](<https://lief.re/doc/latest/formats/macho/index.html#introduction>)
  - [Advanced Parsing/Writing](<https://lief.re/doc/latest/formats/macho/index.html#advanced-parsing-writing>)
  - [Dump Analysis](<https://lief.re/doc/latest/formats/macho/index.html#dump-analysis>)
  - [RPath and Library Path Modification](<https://lief.re/doc/latest/formats/macho/index.html#rpath-and-library-path-modification>)
  - [Objective-C Support](<https://lief.re/doc/latest/formats/macho/index.html#objective-c-support>)
- [PE](<https://lief.re/doc/latest/formats/pe/index.html>)
  - [C++](<https://lief.re/doc/latest/formats/pe/cpp.html>)
  - [Python](<https://lief.re/doc/latest/formats/pe/python.html>)
  - [Rust](<https://lief.re/doc/latest/formats/pe/rust.html>)
  - [Imports Modification](<https://lief.re/doc/latest/formats/pe/modifications/imports.html>)
  - [Resources Modification](<https://lief.re/doc/latest/formats/pe/modifications/resources.html>)
  - [TLS Modification](<https://lief.re/doc/latest/formats/pe/modifications/tls.html>)
  - [Debug Modification](<https://lief.re/doc/latest/formats/pe/modifications/debug.html>)
  - [Exports Modification](<https://lief.re/doc/latest/formats/pe/modifications/exports.html>)
  - [Introduction](<https://lief.re/doc/latest/formats/pe/index.html#introduction>)
  - [Dump Analysis](<https://lief.re/doc/latest/formats/pe/index.html#dump-analysis>)
  - [Advanced Parsing/Writing](<https://lief.re/doc/latest/formats/pe/index.html#advanced-parsing-writing>)
  - [PDB Support](<https://lief.re/doc/latest/formats/pe/index.html#pdb-support>)
  - [Authenticode](<https://lief.re/doc/latest/formats/pe/index.html#authenticode>)
- [COFF](<https://lief.re/doc/latest/formats/coff/index.html>)
  - [C++](<https://lief.re/doc/latest/formats/coff/cpp.html>)
  - [Python](<https://lief.re/doc/latest/formats/coff/python.html>)
  - [Rust](<https://lief.re/doc/latest/formats/coff/rust.html>)
  - [Introduction](<https://lief.re/doc/latest/formats/coff/index.html#introduction>)
  - [Disassembler](<https://lief.re/doc/latest/formats/coff/index.html#disassembler>)
- [Android](<https://lief.re/doc/latest/formats/android/index.html>)
  - [OAT](<https://lief.re/doc/latest/formats/android/oat/index.html>)
  - [DEX](<https://lief.re/doc/latest/formats/android/dex/index.html>)
  - [VDEX](<https://lief.re/doc/latest/formats/android/vdex/index.html>)
  - [ART](<https://lief.re/doc/latest/formats/android/art/index.html>)

API

- [Binary Abstraction](<https://lief.re/doc/latest/api/binary_abstraction/index.html>)
- [Utilities](<https://lief.re/doc/latest/api/utilities/index.html>)
- [Error Handling](<https://lief.re/doc/latest/api/error_handling/index.html>)
- [Logging](<https://lief.re/doc/latest/api/logging/index.html>)
- [C++](<https://lief.re/doc/latest/api/cpp/index.html>)
- [Rust](<https://lief.re/doc/latest/api/rust/index.html>)
- [Runtime](<https://lief.re/doc/latest/runtime/intro.html>)

LIEF Extended

- [What is LIEF Extended?](<https://lief.re/doc/latest/extended/intro.html>)
- [Debug Information](<https://lief.re/doc/latest/extended/debug_info/index.html>)
- [DWARF](<https://lief.re/doc/latest/extended/dwarf/index.html>)
- [PDB](<https://lief.re/doc/latest/extended/pdb/index.html>)
- [Objective-C](<https://lief.re/doc/latest/extended/objc/index.html>)
- [Dyld Shared Cache](<https://lief.re/doc/latest/extended/dsc/index.html>)
- [Disassembler](<https://lief.re/doc/latest/extended/disassembler/index.html>)
- [Assembler](<https://lief.re/doc/latest/extended/assembler/index.html>)

Plugins

- [Ghidra](<https://lief.re/doc/latest/plugins/ghidra/index.html>)
- [BinaryNinja](<https://lief.re/doc/latest/plugins/binaryninja/index.html>)

Tools

- [lief-dwarfdump](<https://lief.re/doc/latest/tools/lief-dwarfdump/index.html>)
- [lief-patchelf](<https://lief.re/doc/latest/tools/lief-patchelf/index.html>)

Tutorials

- [01 - Parse and manipulate formats](<https://lief.re/doc/latest/tutorials/01_play_with_formats.html>)
- [02 - Create a PE from scratch (Deprecated)](<https://lief.re/doc/latest/tutorials/02_pe_from_scratch.html>)
- [03 - Play with ELF symbols](<https://lief.re/doc/latest/tutorials/03_elf_change_symbols.html>)
- [04 - ELF Hooking](<https://lief.re/doc/latest/tutorials/04_elf_hooking.html>)
- [05 - Infecting the PLT/GOT](<https://lief.re/doc/latest/tutorials/05_elf_infect_plt_got.html>)
- [06 - PE Hooking (Deprecated)](<https://lief.re/doc/latest/tutorials/06_pe_hooking.html>)
- [07 - PE Resources](<https://lief.re/doc/latest/tutorials/07_pe_resource.html>)
- [08 - Transforming an ELF executable into a library](<https://lief.re/doc/latest/tutorials/08_elf_bin2lib.html>)
- [09 - How to use Frida on a non-rooted device](<https://lief.re/doc/latest/tutorials/09_frida_lief.html>)
- [10 - Android formats](<https://lief.re/doc/latest/tutorials/10_android_formats.html>)
- [11 - Mach-O Modification](<https://lief.re/doc/latest/tutorials/11_macho_modification.html>)
- [12 - ELF Coredump](<https://lief.re/doc/latest/tutorials/12_elf_coredump.html>)
- [13 - PE Authenticode](<https://lief.re/doc/latest/tutorials/13_pe_authenticode.html>)

Extra Information

- [References](<https://lief.re/doc/latest/references.html>)
- [Changelog](<https://lief.re/doc/latest/changelog.html>)
