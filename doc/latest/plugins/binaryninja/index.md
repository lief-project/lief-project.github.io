---
documentID: "02e012ddee20b983d9d3d3779ae581c90babb9a5411955dff17b8be9cb68f390"
docname: "plugins/binaryninja/index"
title: "BinaryNinja - LIEF Documentation"
description: "Similar to the Ghidra plugin, LIEF can be used as a BinaryNinja plugin."
canonical: "https://lief.re/doc/latest/plugins/binaryninja/index.html"
markdownURL: "https://lief.re/doc/latest/plugins/binaryninja/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "8669496fcf4a0a0273012fca500b8901398512d7685cb3d894b61accf4d8c8ce"
---

# [BinaryNinja](<https://lief.re/doc/latest/plugins/binaryninja/index.html#binaryninja>)

---

![LIEF integrated with Binary Ninja](https://lief.re/doc/latest/_static/lief_with_bn.webp)

Similar to the [Ghidra plugin](<https://lief.re/doc/latest/plugins/ghidra/index.html#plugins-ghidra>), LIEF can be used as a BinaryNinja plugin.

Features

- [BinaryNinja - DWARF Plugin](<https://lief.re/doc/latest/plugins/binaryninja/dwarf/index.html>)
  - [Export as DWARF](<https://lief.re/doc/latest/plugins/binaryninja/dwarf/index.html#export-as-dwarf>)
- [ELF Analyzers](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/index.html>)
  - [Android Packed Relocations](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/android-packed-relocations/index.html>)
  - [Relative Relocations](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/relative-relocations/index.html>)
  - [Relocations](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/relocations/index.html>)
  - [Android JNI](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/android-jni/index.html>)
- [PE Analyzers](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/pe/index.html>)
  - [LoadConfiguration](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/pe/loadconfig-analyzer/index.html>)
  - [Exceptions](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/pe/exceptions-analyzer/index.html>)

Downloads

- [lief-binaryninja-plugins-5.0.7290.zip](<https://lief.s3.fr-par.scw.cloud/latest/plugins/lief-binaryninja-plugins-5.0.7290.zip>)
- [lief-binaryninja-plugins-5.0.7486.zip](<https://lief.s3.fr-par.scw.cloud/latest/plugins/lief-binaryninja-plugins-5.0.7486.zip>)
- [lief-binaryninja-plugins-5.1.8005.zip](<https://lief.s3.fr-par.scw.cloud/latest/plugins/lief-binaryninja-plugins-5.1.8005.zip>)
- [lief-binaryninja-plugins-5.1.8104.zip](<https://lief.s3.fr-par.scw.cloud/latest/plugins/lief-binaryninja-plugins-5.1.8104.zip>)
- [lief-binaryninja-plugins-5.2.8614.zip](<https://lief.s3.fr-par.scw.cloud/latest/plugins/lief-binaryninja-plugins-5.2.8614.zip>)
- [lief-binaryninja-plugins-5.2.8722.zip](<https://lief.s3.fr-par.scw.cloud/latest/plugins/lief-binaryninja-plugins-5.2.8722.zip>)
- [lief-binaryninja-plugins-5.3.9434.zip](<https://lief.s3.fr-par.scw.cloud/latest/plugins/lief-binaryninja-plugins-5.3.9434.zip>)
- [lief-binaryninja-plugins-6.0.10601.zip](<https://lief.s3.fr-par.scw.cloud/latest/plugins/lief-binaryninja-plugins-6.0.10601.zip>)
- [lief-binaryninja-plugins-dev.zip](<https://lief.s3.fr-par.scw.cloud/latest/plugins/lief-binaryninja-plugins-dev.zip>)

First, download the LIEF plugin package from [https://lief.s3.fr-par.scw.cloud/latest/plugins/index.html](<https://lief.s3.fr-par.scw.cloud/latest/plugins/index.html>) or from the packages listed above. Then, follow the official procedure to install plugins: [https://docs.binary.ninja/guide/plugins.html](<https://docs.binary.ninja/guide/plugins.html>)

For instance, if you install the [DWARF Plugin](<https://lief.re/doc/latest/plugins/binaryninja/dwarf/index.html#plugins-binaryninja-dwarf>), you should have this file installed:

- **Linux:** `~/.binaryninja/plugins/lief-dwarf-plugin-linux-x86_64.so`
- **Windows:** `C:\Users\romain\AppData\Roaming\Binary Ninja\plugins\lief-dwarf-plugin-windows-x86_64.dll`
- **macOS:** `~/Library/Application Support/Binary Ninja/plugins/lief-dwarf-plugin-darwin-arm64.dylib`

> **Shared Library**
> 
> In addition to the previously installed library, the plugins require the installation of `LIEF.dll`, `libLIEF.dylib`, or `libLIEF.so` next to the plugin directory. You can download this library from the following list:
> 
> SDK
> 
> - [LIEF-1.0.0-Darwin-arm64.tar.gz](<https://lief.s3.fr-par.scw.cloud/latest/sdk/LIEF-1.0.0-Darwin-arm64.tar.gz>)
> - [LIEF-1.0.0-Darwin-x86\_64.tar.gz](<https://lief.s3.fr-par.scw.cloud/latest/sdk/LIEF-1.0.0-Darwin-x86_64.tar.gz>)
> - [LIEF-1.0.0-Linux-x86\_64.tar.gz](<https://lief.s3.fr-par.scw.cloud/latest/sdk/LIEF-1.0.0-Linux-x86_64.tar.gz>)
> - [LIEF-1.0.0-win64.zip](<https://lief.s3.fr-par.scw.cloud/latest/sdk/LIEF-1.0.0-win64.zip>)
> - [LIEF-2.0.0-Darwin-arm64.tar.gz](<https://lief.s3.fr-par.scw.cloud/latest/sdk/LIEF-2.0.0-Darwin-arm64.tar.gz>)
> - [LIEF-2.0.0-Darwin-x86\_64.tar.gz](<https://lief.s3.fr-par.scw.cloud/latest/sdk/LIEF-2.0.0-Darwin-x86_64.tar.gz>)
> - [LIEF-2.0.0-Linux-x86\_64.tar.gz](<https://lief.s3.fr-par.scw.cloud/latest/sdk/LIEF-2.0.0-Linux-x86_64.tar.gz>)
> - [LIEF-2.0.0-win64.zip](<https://lief.s3.fr-par.scw.cloud/latest/sdk/LIEF-2.0.0-win64.zip>)
> 
> or from here: [https://lief.s3.fr-par.scw.cloud/latest/sdk/index.html](<https://lief.s3.fr-par.scw.cloud/latest/sdk/index.html>). Some plugins (like the [DWARF Plugin](<https://lief.re/doc/latest/plugins/binaryninja/dwarf/index.html#plugins-binaryninja-dwarf>)) require the extended version, which can be downloaded from [https://extended.lief.re/](<https://extended.lief.re/>).
> 
> Given this shared library, you must copy it into the plugin directory (or its parent for Linux and macOS).
> 
> - **macOS**:
> 
>   - `~/Library/Application Support/Binary Ninja/plugins/libLIEF.dylib`
>   - `~/Library/Application Support/Binary Ninja/libLIEF.dylib`
> - **Linux**:
> 
>   - `~/.binaryninja/plugins/libLIEF.so`
>   - `~/.binaryninja/libLIEF.so`
> - **Windows**:
> 
>   - `C:\Users\romain\AppData\Roaming\Binary Ninja\plugins\LIEF.dll`
>   - `%APPDATA%\Binary Ninja\plugins\LIEF.dll`

## [Troubleshooting](<https://lief.re/doc/latest/plugins/binaryninja/index.html#troubleshooting>)

**Plugin module failed to load**

```text
[:0 Default] Plugin module '~/.binaryninja/plugins/lief-dwarf-plugin-linux-x86_64.so' failed to load
[:0 Default] dlerror() reports: libLIEF.so: cannot open shared object file: No such file or directory
```

This means that `libLIEF.so`, `libLIEF.dylib`, or `LIEF.dll` is not correctly installed in the `plugins/` directory. Make sure that the LIEF shared library is next to the plugin that failed to load.

**This feature requires LIEF extended**

This error means that you need to install the extended version of the shared library. See the [extended section](<https://lief.re/doc/latest/extended/intro.html#extended-intro>) for more information.

**libLIEF.dylib can’t be opened because Apple cannot check it for malicious software**

`libLIEF.dylib` is self-signed and does not use an Apple certificate; therefore, it is considered as coming from an *unknown developer*.

You can address this issue in different ways:

1. You can compile `libLIEF.dylib` yourself and sign the compiled library with your certificate.
2. You can add a security exception as described here: [https://support.apple.com/guide/mac-help/apple-cant-check-app-for-malicious-software-mchleab3a043/mac](<https://support.apple.com/guide/mac-help/apple-cant-check-app-for-malicious-software-mchleab3a043/mac>)

![macOS library loading issue](https://lief.re/doc/latest/_static/macos-dylib-issue.png)
