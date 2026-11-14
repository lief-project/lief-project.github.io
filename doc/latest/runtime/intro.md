---
documentID: "95d19b36095de51590ca6f781d05ba08be951212840a3881ee2a21fe6a13ae20"
docname: "runtime/intro"
title: "Runtime - LIEF Documentation"
description: "Enable LIEF's runtime API and inspect the current process, loaded modules, host information, and memory in Python, C++, and Rust."
canonical: "https://lief.re/doc/latest/runtime/intro.html"
markdownURL: "https://lief.re/doc/latest/runtime/intro.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "34c7a81fad53c9cb9915e8bf0db6a4c35ba99b29ee8acadb3f425cf0d118e9c7"
---

# [Runtime](<https://lief.re/doc/latest/runtime/intro.html#runtime>)

Components

- [Host](<https://lief.re/doc/latest/runtime/components/host.html>)
- [Process](<https://lief.re/doc/latest/runtime/components/process.html>)
- [Memory](<https://lief.re/doc/latest/runtime/components/memory.html>)
- [Memory Layout](<https://lief.re/doc/latest/runtime/components/memory_layout.html>)
- [Modules](<https://lief.re/doc/latest/runtime/components/modules.html>)

API

- [C++](<https://lief.re/doc/latest/runtime/cpp.html>)
- [Python](<https://lief.re/doc/latest/runtime/python.html>)
- [Rust](<https://lief.re/doc/latest/runtime/rust.html>)

## [Introduction](<https://lief.re/doc/latest/runtime/intro.html#introduction>)

LIEF’s runtime module provides facilities to inspect and interact with the current process in which the API is used. You can, for instance, list modules loaded in memory or read the content at a specific memory address.

These runtime features are **not** enabled by default and must be explicitly turned on when compiling LIEF.

When using CMake, you must enable the `LIEF_RUNTIME` option (`-DLIEF_RUNTIME=ON`) followed by the target platform and the architecture for which you want to use the runtime API:

```console
$ cmake [...]                     \
  -DLIEF_RUNTIME=ON               \
  -DLIEF_RUNTIME_PLATFORM=windows \
  -DLIEF_RUNTIME_ARCH=arm64
```

> **Note**
> 
> Only `arm64`, `x86_64` and `riscv64` are currently supported for `LIEF_RUNTIME_ARCH`. The supported values for `LIEF_RUNTIME_PLATFORM` are `linux`, `windows`, `android` and `osx`.

To compile the Python bindings with the runtime features, you must enable the `lief.features.runtime` option and specify the target platform and architecture within the `[lief.runtime]` block:

```toml
[lief.build]
type          = "Release"
cache         = true
ninja         = true
parallel-jobs = 0

[lief.formats]
elf     = true
pe      = true
macho   = true
android = true
art     = true
vdex    = true
oat     = true
dex     = true

[lief.features]
json    = true
frozen  = true
runtime = true

[lief.runtime]
platform = 'linux'
architecture = 'x86_64'
```

The runtime features are split in the following components:

Components

- [Host](<https://lief.re/doc/latest/runtime/components/host.html>)
- [Process](<https://lief.re/doc/latest/runtime/components/process.html>)
- [Memory](<https://lief.re/doc/latest/runtime/components/memory.html>)
- [Memory Layout](<https://lief.re/doc/latest/runtime/components/memory_layout.html>)
- [Modules](<https://lief.re/doc/latest/runtime/components/modules.html>)

## [API reference](<https://lief.re/doc/latest/runtime/intro.html#api-reference>)

- [C++](<https://lief.re/doc/latest/runtime/cpp.html>)
- [Python](<https://lief.re/doc/latest/runtime/python.html>)
- [Rust](<https://lief.re/doc/latest/runtime/rust.html>)
