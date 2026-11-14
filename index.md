---
title: "LIEF: Library to Instrument Executable Formats"
description: "LIEF is a cross-platform C++, Python, and Rust library to parse, analyze, modify, assemble, disassemble, and rewrite ELF, PE, Mach-O, and other executable formats."
canonical_url: "https://lief.re/"
markdown_url: "https://lief.re/index.md"
authors: ["Romain Thomas"]
date_modified: "2026-08-02T11:53:40+02:00"
language: "en-US"
section: ""
tags: []
categories: []
---

# LIEF: Library to Instrument Executable Formats

> LIEF is a cross-platform C++, Python, and Rust library to parse, analyze, modify, assemble, disassemble, and rewrite ELF, PE, Mach-O, and other executable formats.

LIEF (Library to Instrument Executable Formats) is an Apache-2.0-licensed, cross-platform library to parse, inspect, modify, and build ELF, PE, Mach-O, and more through one consistent C++, Python, or Rust API. A subset of the API is also exposed in C.

## Key facts

- Latest release: LIEF 1.0.0 (2026-07-12) — https://github.com/lief-project/LIEF/releases/tag/1.0.0
- Executable formats: ELF, PE, Mach-O, COFF, and more (see the documentation for the full list); debug formats: DWARF and PDB
- LIEF Extended adds an assembler, a disassembler, a DWARF editor, and PDB support on the same object model
- Languages: C++ core with Python, Rust, and C APIs
- Platforms: Linux, Windows, macOS, Android, and iOS
- License: Apache-2.0
- API documentation: https://lief.re/doc/latest/
- Downloads: https://lief.re/download/
- Source code: https://github.com/lief-project/LIEF
- Python package: https://pypi.org/project/lief/
- Rust crate: https://crates.io/crates/lief
- LIEF Extended: https://extended.lief.re/

## Documentation for AI assistants

Read the AI documentation guide at https://lief.re/doc/latest/ai.md and start with the discovery map at https://lief.re/doc/latest/llms.txt to find guides and API references.

In the latest documentation, replace `.html` with `.md` to read resolved Markdown with code examples, every language tab, API signatures, and absolute citation links.

- Documentation content index: https://lief.re/doc/latest/index.json
- Section and API symbol retrieval: https://lief.re/doc/latest/index.chunks.json
- Complete documentation corpus for local indexing: https://lief.re/doc/latest/llms-full.txt (large API references may exceed an assistant's context window).

The `latest` channel tracks development; `stable` documents the latest release at https://lief.re/doc/stable/. Match API usage to the installed LIEF version, platform, architecture, and enabled features.

## One library, every layer

Move from raw executable file formats to a high-level representation, make precise changes, then write a valid binary back to disk.

### Unified abstraction

Work with symbols, sections, relocations, and entry points through shared concepts across executable formats.

### Parse and inspect

Open binaries from files or memory and explore their structure without booting a heavyweight reverse-engineering stack.

### Modify and rebuild

Add sections, change symbols, patch metadata, and serialize the result with format-aware builders.

## Example: binary insight in a few lines

The same concepts stay recognizable whether you work in Python, C++, or Rust.

```python
import lief

# Parse ELF, PE, or Mach-O with one entry point
binary = lief.parse("/usr/bin/ssh")

print(binary.format)
print(hex(binary.entrypoint))

for section in binary.sections:
    print(section.name, section.size)

# Modify and write a new binary
binary.header.entrypoint = 0x401000
binary.write("ssh.patched")
```

## LIEF Extended

Advanced assembly, disassembly, DWARF, and PDB tooling build on the same LIEF model for deeper binary reverse-engineering workflows.

- Assembler: assemble x86-64, ARM64, and RISC-V instructions directly from the API.
- Disassembler: decode machine code and connect instructions to executable metadata.
- DWARF editor: inspect and transform rich debug information with structured APIs.
- PDB support: work with Microsoft program databases alongside the binary they describe.

Learn more: https://extended.lief.re/ and https://lief.re/doc/latest/extended/intro.html

## Latest articles

- [LIEF v1.0.0](https://lief.re/blog/2026-07-13-lief-1-0-0/index.md): 2026-07-13 — LIEF 1.0.0: a new cross-platform Runtime API, faster Rust bindings, stable-ABI and free-threaded Python wheels
- [LIEF v0.17.0](https://lief.re/blog/2025-09-14-lief-0-17-0/index.md): 2025-09-14 — LIEF 0.17.0: Binary Ninja and Ghidra plugins, contextual assembly patching, a refactored PE module with TLS, import, and export editing, lief-patchelf, and COFF support.
- [LIEF patchelf](https://lief.re/blog/2025-07-13-patchelf/index.md): 2025-07-13 — lief-patchelf: a LIEF-based reimplementation of NixOS patchelf to change the interpreter, add dependencies, and edit RPATH/RUNPATH, with prebuilt binaries.

All articles: https://lief.re/blog/

## Support the project

Sponsorship gives LIEF maintainers the time to improve format coverage, respond to ecosystem changes, and build features the community can rely on.

- Sponsor LIEF: https://github.com/sponsors/lief-project/
- Discuss a feature: contact@lief.re
- Community chat: https://discord.gg/jGQtyAYChJ
