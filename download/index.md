---
title: "Download"
description: "Download LIEF SDKs and packages for Linux, Windows, macOS, Android, and iOS, or install the Python and Rust bindings."
canonical_url: "https://lief.re/download/"
markdown_url: "https://lief.re/download/index.md"
authors: ["Romain Thomas"]
date_modified: "2026-08-02T11:53:40+02:00"
language: "en-US"
section: "download"
tags: []
categories: []
---

# Download

> Download LIEF SDKs and packages for Linux, Windows, macOS, Android, and iOS, or install the Python and Rust bindings.

Install LIEF from a package manager, download a prebuilt SDK archive, or build it from source. The current release is LIEF 1.0.0 (2026-07-12); release notes: https://github.com/lief-project/LIEF/releases/tag/1.0.0

## Quick install

- Python: `pip install lief` — stable-ABI wheels on PyPI (https://pypi.org/project/lief/), including free-threaded variants where supported.
- Rust: `cargo add lief` — the `lief` crate on crates.io (https://crates.io/crates/lief).
- From source: clone https://github.com/lief-project/LIEF and follow the compilation guide at https://lief.re/doc/latest/compilation.html.

## Prebuilt packages

Official SDK archives and language packages for supported systems and architectures.

| Platform | Version | Package | URL |
| --- | --- | --- | --- |
| Linux | 1.0.0 | SDK x86-64 | https://github.com/lief-project/LIEF/releases/download/1.0.0/LIEF-1.0.0-Linux-x86_64.tar.gz |
| Linux | 1.0.0 | SDK x86-64 (Musl) | https://github.com/lief-project/LIEF/releases/download/1.0.0/LIEF-1.0.0-Linux-musl-x86_64.tar.gz |
| Linux | 1.0.0 | SDK AArch64 | https://github.com/lief-project/LIEF/releases/download/1.0.0/LIEF-1.0.0-Linux-aarch64.tar.gz |
| Linux | 1.0.0 | SDK RISC-V 64-bit | https://github.com/lief-project/LIEF/releases/download/1.0.0/LIEF-1.0.0-Linux-riscv64.tar.gz |
| Linux | 1.0.0 | SDK i686 (Musl) | https://github.com/lief-project/LIEF/releases/download/1.0.0/LIEF-1.0.0-Linux-musl-i686.tar.gz |
| Linux | 1.0.0 | SDK AArch64 (Musl) | https://github.com/lief-project/LIEF/releases/download/1.0.0/LIEF-1.0.0-Linux-musl-aarch64.tar.gz |
| Linux | 1.0.0 | SDK RISC-V 64-bit (Musl) | https://github.com/lief-project/LIEF/releases/download/1.0.0/LIEF-1.0.0-Linux-musl-riscv64.tar.gz |
| Linux | 1.0.0 | Python Packages | https://pypi.org/project/lief/ |
| Android | 1.0.0 | SDK ARM | https://github.com/lief-project/LIEF/releases/download/1.0.0/LIEF-1.0.0-Android-armv7-a.tar.gz |
| Android | 1.0.0 | SDK AArch64 | https://github.com/lief-project/LIEF/releases/download/1.0.0/LIEF-1.0.0-Android-aarch64.tar.gz |
| Android | 1.0.0 | SDK x86-64 | https://github.com/lief-project/LIEF/releases/download/1.0.0/LIEF-1.0.0-Android-x86_64.tar.gz |
| macOS | 1.0.0 | SDK x86-64 | https://github.com/lief-project/LIEF/releases/download/1.0.0/LIEF-1.0.0-Darwin-x86_64.tar.gz |
| macOS | 1.0.0 | SDK AArch64 | https://github.com/lief-project/LIEF/releases/download/1.0.0/LIEF-1.0.0-Darwin-arm64.tar.gz |
| macOS | 1.0.0 | Python Packages | https://pypi.org/project/lief/ |
| iOS | 1.0.0 | SDK AArch64 | https://github.com/lief-project/LIEF/releases/download/1.0.0/LIEF-1.0.0-iOS-arm64.tar.gz |
| Windows | 1.0.0 | SDK x86-64 | https://github.com/lief-project/LIEF/releases/download/1.0.0/LIEF-1.0.0-win64.zip |
| Windows | 1.0.0 | SDK x86 | https://github.com/lief-project/LIEF/releases/download/1.0.0/LIEF-1.0.0-win32.zip |
| Windows | 1.0.0 | SDK ARM64 | https://github.com/lief-project/LIEF/releases/download/1.0.0/LIEF-1.0.0-windows-arm64.zip |
| Windows | 1.0.0 | Python packages | https://pypi.org/project/lief/ |
| Nightly | main | SDK | https://lief.s3-website.fr-par.scw.cloud/latest/sdk/index.html |
| Nightly | main | Python Packages | https://lief.s3-website.fr-par.scw.cloud/latest/lief/index.html |

## Package channels

- GitHub releases (SDK archives and release notes): https://github.com/lief-project/LIEF/releases
- PyPI (Python wheels): https://pypi.org/project/lief/
- crates.io (Rust crate): https://crates.io/crates/lief
- LIEF Extended (assembler, disassembler, DWARF, PDB): https://extended.lief.re/
