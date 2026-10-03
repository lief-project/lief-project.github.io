---
documentID: "b2bdbcdf4d3e225feb7736c9f519912601c61438f3419a6affa874db012cd09d"
docname: "extended/intro"
title: "What is LIEF Extended? - LIEF Documentation"
description: "LIEF Extended features, install Python wheels or C++ and Rust SDKs, verify your build, and find guides for debug information, assembly, Apple metadata, and…"
canonical: "https://lief.re/doc/latest/extended/intro.html"
markdownURL: "https://lief.re/doc/latest/extended/intro.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "8f6aa4ffd2bd1c78a1954623ef68629bf6b08d3e64f73c10dc18d3828eb082ca"
---

# [What is LIEF Extended?](<https://lief.re/doc/latest/extended/intro.html#what-is-lief-extended>)

## [Introduction](<https://lief.re/doc/latest/extended/intro.html#introduction>)

*LIEF Extended* is an enhanced version of LIEF, providing additional features such as support for the Dyld shared cache, Objective-C metadata, PDB, and DWARF.

While the main version of LIEF focuses on providing support for ELF, PE, and Mach-O, LIEF Extended aims to provide functionality that was not originally intended for integration into the core LIEF project.

You can find the differences between the two versions in this table:

| Module | Regular Version | Extended Version | Note |
| --- | --- | --- | --- |
| [ELF](<https://lief.re/doc/latest/formats/elf/index.html#format-elf>) |  |  |  |
| [PE](<https://lief.re/doc/latest/formats/pe/index.html#format-pe>) |  |  |  |
| [Mach-O](<https://lief.re/doc/latest/formats/macho/index.html#format-macho>) |  |  |  |
| [COFF](<https://lief.re/doc/latest/formats/coff/index.html#format-coff>) |  |  |  |
| [DEX](<https://lief.re/doc/latest/formats/android/dex/index.html#format-dex>) |  |  |  |
| [OAT](<https://lief.re/doc/latest/formats/android/oat/index.html#format-oat>) |  |  |  |
| [VDEX](<https://lief.re/doc/latest/formats/android/vdex/index.html#format-vdex>) |  |  |  |
| [ART](<https://lief.re/doc/latest/formats/android/art/index.html#format-art>) |  |  |  |
| [Runtime](<https://lief.re/doc/latest/runtime/intro.html#runtime-intro>) |  |  | Only enabled in LIEF extended wheels |
| [PDB](<https://lief.re/doc/latest/extended/pdb/index.html#extended-pdb>) |  |  | Support based on LLVM [[1]](<https://lief.re/doc/latest/extended/intro.html#extended-llvm>) |
| [DWARF](<https://lief.re/doc/latest/extended/dwarf/index.html#extended-dwarf>) |  |  | Support based on LLVM [[1]](<https://lief.re/doc/latest/extended/intro.html#extended-llvm>) |
| [ObjC](<https://lief.re/doc/latest/extended/objc/index.html#extended-objc>) |  |  | Support based on [romainthomas/iCDump](<https://github.com/romainthomas/iCDump>) |
| [Dyld Shared Cache](<https://lief.re/doc/latest/extended/dsc/index.html#extended-dsc>) |  |  |  |
| [Disassembler](<https://lief.re/doc/latest/extended/disassembler/index.html#extended-disassembler>) |  |  | Support based on LLVM [[1]](<https://lief.re/doc/latest/extended/intro.html#extended-llvm>) |
| [Assembler](<https://lief.re/doc/latest/extended/assembler/index.html#extended-assembler>) |  |  | Support based on LLVM [[1]](<https://lief.re/doc/latest/extended/intro.html#extended-llvm>) |

### [Get Access](<https://lief.re/doc/latest/extended/intro.html>)

To access the extended version, you must **oauth-login** with **GitHub** here:

[LIEF Extended](<https://extended.lief.re/>)

  

To access the extended version, you must **oauth-login** with **GitHub** here: [https://extended.lief.re/](<https://extended.lief.re/>).

Once logged in, you can download the package of your choice (e.g., LIEF Extended - Python 3.10 for macOS arm64).

> **Email**
> 
> If you don’t receive the download email, you can download the package directly from your **History** section.

## [Versioning](<https://lief.re/doc/latest/extended/intro.html#versioning>)

LIEF Extended uses a slightly different versioning scheme than regular LIEF packages.

First, **every extended package** is based on the current `main` branch of LIEF. If you need an (extended) build for a specific commit or tag, please contact extended@lief.re.

In Python, you can check the commit of LIEF being used in the extended version with:

```bash
# Make sure it's the extended version
$ python -c "import lief;print(lief.__extended__)"

# Print LIEF's main commit
$ python -c "import lief;print(lief.__LIEF_MAIN_COMMIT__)"
```

With the C++/Rust SDK, you can call  `lief.extended_version_info()` ( [`lief::extended_version_info`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/fn.extended_version_info.html>) ;  [`LIEF::extended_version_info()`](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF21extended_version_infoEv>) ) to get details about the current version.

Additional features exposed by LIEF Extended are not always represented in a public commit while still being git-versioned. An incremental build number is used to represent internal changes not associated with a public commit.

For example, version `0.16.0.2380` includes 10 more commits than version `0.16.0.2370`.

## [Python Wheels](<https://lief.re/doc/latest/extended/intro.html#python-wheels>)

Python packages are delivered as a wheel for the required platform/version (e.g., `lief_extended-0.16.0.post2370-cp312-cp312-win_amd64.whl`).

You can install this wheel using pip in one of the following ways:

```console
$ venv\Scripts\python.exe -m pip install C:\Users\tmp\lief_extended-0.16.0.post2370-cp312-cp312-win_amd64.whl
```

Or

```console
$ venv\Scripts\python.exe -m pip install --find-links C:\Users\tmp\ lief_extended
```

You can verify that LIEF Extended is correctly installed with:

```console
$ python -c "import lief;print(lief.__extended__)"
True
```

## [C++ SDK](<https://lief.re/doc/latest/extended/intro.html#c-sdk>)

The C++ SDK is delivered as a `.zip/.tar.gz` archive containing:

- A compiled shared library (`libLIEF.so`, `LIEF.dll`, `libLIEF.dylib`)
- Header files
- CMake helper files

Compared to the regular version, this SDK **does not** ship a static version of LIEF, and the shared library is compiled with all extended features.

Here is the layout for the macOS arm64 SDK, for example:

```text
LIEF-extended-sdk-0.16.0.2378-Darwin-arm64/
  lib/libLIEF.dylib
  lib/cmake/LIEF/lief-extended-config-version.cmake
  include/[...]
```

## [Rust SDK](<https://lief.re/doc/latest/extended/intro.html#rust-sdk>)

The Rust SDK is also delivered as a `.zip/.tar.gz` archive containing all the files needed for use with the `LIEF_RUST_PRECOMPILED` environment variable, as described in the [Rust](<https://lief.re/doc/latest/api/rust/index.html#lief-rust-bindings>) section.

Once the archive is extracted, you just have to set the `LIEF_RUST_PRECOMPILED` environment variable to the extracted path:

```console
$ tar xzvf LIEF-extended-rust-0.16.0.2378-Linux-x86_64.tar.gz
  LIEF-extended-rust-0.16.0.2378-Linux-x86_64/lib/
  LIEF-extended-rust-0.16.0.2378-Linux-x86_64/lib/libLIEF.so
  LIEF-extended-rust-0.16.0.2378-Linux-x86_64/lib/liblief-sys.a

$ export LIEF_RUST_PRECOMPILED=$(pwd)/LIEF-extended-rust-0.16.0.2378-Linux-x86_64
```

You can then use all the extended features in Rust:

```console
$ cargo build my-lief-extended-project
```

## [LIEF Extended &amp; LLVM](<https://lief.re/doc/latest/extended/intro.html#lief-extended-llvm>)

LIEF Extended relies on LLVM for certain features, such as the [disassembler](<https://lief.re/doc/latest/extended/disassembler/index.html#extended-disassembler>) and [DWARF](<https://lief.re/doc/latest/extended/dwarf/index.html#extended-dwarf>)/[PDB](<https://lief.re/doc/latest/extended/pdb/index.html#extended-pdb>) support.

The LLVM version used by LIEF is based on the upstream version and integrated into LIEF Extended so that users do not have to handle LLVM compilation or integration.

> **Note**
> 
> LIEF is currently using LLVM 22.x.

Whenever possible and appropriate, bug fixes and enhancements have been submitted as PRs to the LLVM project:

- [llvm/llvm-project#119057](<https://github.com/llvm/llvm-project/pull/119057>)
- [llvm/llvm-project#119056](<https://github.com/llvm/llvm-project/pull/119056>)
- [llvm/llvm-project#116480](<https://github.com/llvm/llvm-project/pull/116480>)
- [llvm/llvm-project#116479](<https://github.com/llvm/llvm-project/pull/116479>)
- [llvm/llvm-project#97954](<https://github.com/llvm/llvm-project/pull/97954>)
