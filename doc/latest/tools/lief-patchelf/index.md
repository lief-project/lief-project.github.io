---
documentID: "0a88d4c55f99c080210e0aa33a2c913e577dd4598335e39156d6a09286708555"
docname: "tools/lief-patchelf/index"
title: "lief-patchelf - LIEF Documentation"
description: "lief-patchelf is an implementation of the original patchelf created by NixOS (NixOS/patchelf), based on LIEF."
canonical: "https://lief.re/doc/latest/tools/lief-patchelf/index.html"
markdownURL: "https://lief.re/doc/latest/tools/lief-patchelf/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "56e9b9986beee85ebbcc8ab749a19314780efe7da83b7d87cf5380d1a63a5f8e"
---

# [lief-patchelf](<https://lief.re/doc/latest/tools/lief-patchelf/index.html#lief-patchelf>)

`lief-patchelf` is an implementation of the original patchelf created by NixOS ([NixOS/patchelf](<https://github.com/NixOS/patchelf>)), based on LIEF.

This LIEF-based version is written in Rust, offering a more robust, modern, and maintainable implementation compared to the original project.

> **CLI**
> 
> It is worth mentioning that `lief-patchelf` maintains the same command-line interface as the original NixOS implementation, allowing for a seamless transition between the two versions.

## [Compilation](<https://lief.re/doc/latest/tools/lief-patchelf/index.html#compilation>)

You can build `lief-patchelf` using `cargo` from the `tools/lief-patchelf` directory with the following commands:

```bash
$ cargo build [--release]
$ ./target/{release,debug}/lief-patchelf --version
```

Since LIEF is a cross-platform library that supports various platforms and architectures, you can compile (or cross-compile) this tool for other platforms. For example, you can generate a Windows ARM64 executable as follows:

```powershell
rustup.exe target add $RUST_TARGET (optional)
$env:RUSTFLAGS="-Ctarget-feature=+crt-static"
cargo build --target=aarch64-pc-windows-msvc
./target/{release,debug}/lief-patchelf.exe --version
```

For more information about the supported platforms, please refer to the [Rust Bindings](<https://lief.re/doc/latest/api/rust/index.html#lief-rust-bindings>) section.

## [Man Page](<https://lief.re/doc/latest/tools/lief-patchelf/index.html#man-page>)

Given the `lief-patchelf` binary, you can generate a man page using the following command:

```bash
$ lief-patchelf --generate-manpage ./lief-patchelf.1
```

This functionality is provided by the [clap\_mangen](<https://crates.io/crates/clap_mangen>) crate.

## [Shell Completion](<https://lief.re/doc/latest/tools/lief-patchelf/index.html#shell-completion>)

Thanks to [clap](<https://github.com/clap-rs/clap>) and its `clap_complete` extension, which generates auto-completion for various shells, you can generate completion stubs for `lief-patchelf` with:

```bash
$ ./lief-patchelf --generate {bash, elvish, fish, powershell, zsh}
```
