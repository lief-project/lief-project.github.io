---
title: "Latest News"
description: "Release notes, executable-format research, reverse-engineering tutorials, and engineering updates from the LIEF maintainers."
canonical_url: "https://lief.re/blog/"
markdown_url: "https://lief.re/blog/index.md"
authors: ["Romain Thomas"]
date_modified: "2026-08-30T17:13:45+02:00"
language: "en-US"
section: "blog"
tags: []
categories: []
---

# Latest News

> Release notes, executable-format research, reverse-engineering tutorials, and engineering updates from the LIEF maintainers.

Full-text RSS feed of the most recent articles: https://lief.re/blog/index.xml

- [LIEF v1.0.0](https://lief.re/blog/2026-07-13-lief-1-0-0/index.md): 2026-07-13 — LIEF 1.0.0: a new cross-platform Runtime API, faster Rust bindings, stable-ABI and free-threaded Python wheels
- [LIEF v0.17.0](https://lief.re/blog/2025-09-14-lief-0-17-0/index.md): 2025-09-14 — LIEF 0.17.0: Binary Ninja and Ghidra plugins, contextual assembly patching, a refactored PE module with TLS, import, and export editing, lief-patchelf, and COFF support.
- [LIEF patchelf](https://lief.re/blog/2025-07-13-patchelf/index.md): 2025-07-13 — lief-patchelf: a LIEF-based reimplementation of NixOS patchelf to change the interpreter, add dependencies, and edit RPATH/RUNPATH, with prebuilt binaries.
- [DWARF as a Shared Reverse Engineering Format](https://lief.re/blog/2025-05-27-dwarf-editor/index.md): 2025-05-27 — Create DWARF debug information with the LIEF Extended DWARF editor and share reverse-engineered types and functions between Binary Ninja and Ghidra plugins.
- [PE Support Enhancements](https://lief.re/blog/2025-02-16-arm64ec-pe-support/index.md): 2025-02-16 — PE improvements in LIEF: ARM64EC and WoW64 CHPE metadata parsing, a rebuilt PE builder for imports, resources, and TLS, and LIEF-backed ARM64EC support in Binary Ninja.
- [LIEF v0.16.0](https://lief.re/blog/2024-12-10-lief-0-16-0/index.md): 2024-12-10 — LIEF 0.16.0: rebuilt documentation, an assembler/disassembler in LIEF Extended, dyld shared cache extraction, first mutable Rust APIs, and nanobind 2.4 bindings.
- [LIEF v0.15.0](https://lief.re/blog/2024-07-21-lief-0.15-0/index.md): 2024-07-21 — LIEF 0.15.0 introduces official Rust bindings and LIEF Extended, with Objective-C, DWARF, PDB, parser performance, and Python wheel updates.
- [LIEF Rust bindings updates](https://lief.re/blog/2024-06-16-rust-update/index.md): 2024-06-16 — LIEF Rust bindings ahead of 0.15.0: new documentation, more supported architectures, Rust tier 1 and tier 2 coverage, and use cases such as Authenticode checks.
- [Rust bindings for LIEF](https://lief.re/blog/2024-04-28-rust/index.md): 2024-04-28 — An introduction to LIEF's Rust bindings, their idiomatic API design, memory-safety model, cross-compilation support, and engineering tradeoffs.
- [LIEF v0.14.0](https://lief.re/blog/2024-01-20-lief-0-14-0/index.md): 2024-01-21 — LIEF 0.14.0 release highlights: faster Python bindings, updates to ELF and PE, and ongoing work on Rust, DWARF, and PDB support.
- [LIEF v0.13.0](https://lief.re/blog/2023-04-09-lief-0-13-0/index.md): 2023-04-09 — LIEF 0.13.0: in-memory Mach-O parsing, framed ELF sections, an exception-free and RTTI-free core, PEP 621 Python packaging, and generated .pyi type stubs.
- [Mach-O Support Enhancements](https://lief.re/blog/2022-05-08-macho/index.md): 2022-05-08 — Mach-O rewriting in LIEF: __LINKEDIT fixes, chained fixups and exports trie support, converting a binary into a dylib, adding exported symbols, and code injection.
- [LIEF v0.12.0](https://lief.re/blog/2022-03-27-lief-v0-12-0/index.md): 2022-03-27 — LIEF 0.12.0: PE rich header and checksum recomputation, span-based section content with memoryview in Python, and the start of the exception-free refactoring.
- [LIEF RTTI & Exceptions](https://lief.re/blog/2022-02-13-lief-rtti-exceptions/index.md): 2022-02-13 — Why LIEF is removing C++ exceptions and RTTI: error-handling costs, the has_/get_ pattern, and the move to result-based APIs and LLVM-style RTTI.
- [New ELF Builder](https://lief.re/blog/2022-01-23-new-elf-builder/index.md): 2022-01-23 — After spending months on refactoring the ELF builder, here are the improvements.
- [Profiling C++ code with Frida (2nd part)](https://lief.re/blog/2021-04-08-profiling-cpp-code-with-frida-part2/index.md): 2021-04-08 — A practical follow-up on profiling C++ with Frida, including static-library hooks and the limitations introduced by different C++ ABIs.
- [Profiling C++ code with Frida](https://lief.re/blog/2021-03-10-profiling-cpp-code-with-frida/index.md): 2021-03-10 — Profile C/C++ code with Frida: hook functions through the frida-gum C API and use LIEF to enumerate the functions to instrument, without recompiling the target.
- [LIEF - Release 0.11.1](https://lief.re/blog/2021-02-22-lief-0-11-1/index.md): 2021-02-22 — LIEF 0.11.1 fixes PE Authentihash computation: section name handling, data directory coverage, and the return value of verify_signature().
- [LIEF - Release 0.11.0](https://lief.re/blog/2021-01-19-lief-0-11-0/index.md): 2021-01-19 — LIEF 0.11.0: refactored PE Authenticode parsing with signature verification, pefile-compatible imphash, a faster ELF builder, and Ninja-based Windows CI.
- [LIEF - Release 0.9.0](https://lief.re/blog/2018-06-11-lief-0-9-0/index.md): 2018-06-11 — Major changes in LIEF 0.9, plus work-in-progress features planned for future releases.
- [Have fun with LIEF and Executable Formats!](https://lief.re/blog/2017-10-30-lief-0-8-3/index.md): 2017-10-30 — LIEF 0.8.3: libFuzzer integration, Dockerlief, ELF symbol renaming and hiding, DT_RUNPATH injection, PE load configuration, and Mach-O dyld info parsing.
- [LIEF - Library to Instrument Executable Formats](https://lief.re/blog/2017-04-18-lief/index.md): 2017-04-18 — How LIEF was open-sourced to provide a cross-platform API for parsing, inspecting, and modifying ELF, PE, and Mach-O executable formats.
