---
documentID: "349548b961a1ec298a7a64f8f93fb90e02c7306ba2c6923e054d2d69a6ee7b85"
docname: "plugins/ghidra/index"
title: "Ghidra - LIEF Documentation"
description: "Similar to the BinaryNinja plugin, LIEF can be used as a Ghidra plugin."
canonical: "https://lief.re/doc/latest/plugins/ghidra/index.html"
markdownURL: "https://lief.re/doc/latest/plugins/ghidra/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "c9172ae37226989126ebac5ea0ba4ecce9baf29b194618c96092f74c55059115"
---

# [Ghidra](<https://lief.re/doc/latest/plugins/ghidra/index.html#ghidra>)

---

![Ghidra with LIEF](https://lief.re/doc/latest/_static/lief_with_ghidra.webp)

Similar to the [BinaryNinja plugin](<https://lief.re/doc/latest/plugins/binaryninja/index.html#plugins-binaryninja>), LIEF can be used as a Ghidra plugin.

Features

- [Ghidra - DWARF Plugin](<https://lief.re/doc/latest/plugins/ghidra/dwarf/index.html>)
- [Ghidra - Analyzers - `IMAGE_LOAD_CONFIG_DIRECTORY`](<https://lief.re/doc/latest/plugins/ghidra/analyzers/loadconfig-analyzer/index.html>)
- [Ghidra - Analyzers - Exceptions](<https://lief.re/doc/latest/plugins/ghidra/analyzers/exceptions-analyzer/index.html>)

Downloads

- [ghidra\_11.3.2\_PUBLIC\_LIEF.zip](<https://lief.s3.fr-par.scw.cloud/latest/plugins/ghidra_11.3.2_PUBLIC_LIEF.zip>)
- [ghidra\_11.4.2\_PUBLIC\_LIEF.zip](<https://lief.s3.fr-par.scw.cloud/latest/plugins/ghidra_11.4.2_PUBLIC_LIEF.zip>)
- [ghidra\_11.4\_PUBLIC\_LIEF.zip](<https://lief.s3.fr-par.scw.cloud/latest/plugins/ghidra_11.4_PUBLIC_LIEF.zip>)
- [ghidra\_12.0\_PUBLIC\_LIEF.zip](<https://lief.s3.fr-par.scw.cloud/latest/plugins/ghidra_12.0_PUBLIC_LIEF.zip>)

## [Installation](<https://lief.re/doc/latest/plugins/ghidra/index.html#installation>)

First, download the LIEF plugin package from [https://lief.s3.fr-par.scw.cloud/latest/plugins/index.html](<https://lief.s3.fr-par.scw.cloud/latest/plugins/index.html>) or from the packages listed above. Then, follow the official procedure to install extensions: [GhidraDocs/GettingStarted.md](<https://github.com/NationalSecurityAgency/ghidra/blob/175cf9488722df3f8a718236c9e2c0ebfcd8cdb7/GhidraDocs/GettingStarted.md#extensions>)

> **Shared Library**
> 
> In addition to the previously installed package, the plugins require the installation of `LIEF.dll`, `libLIEF.dylib`, or `libLIEF.so` next to the extension directory. You can download this library from the following list:
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
> or from here: [https://lief.s3.fr-par.scw.cloud/latest/sdk/index.html](<https://lief.s3.fr-par.scw.cloud/latest/sdk/index.html>). Some plugins (like the [DWARF Plugin](<https://lief.re/doc/latest/plugins/ghidra/dwarf/index.html#plugins-ghidra-dwarf>)) require the extended version, which can be downloaded from [https://extended.lief.re/](<https://extended.lief.re/>).
> 
> Given this shared library, you must copy it into the Ghidra settings directory. For instance:
> 
> - macOS: `~/Library/ghidra/ghidra_11.3.2_PUBLIC/Extensions/libLIEF.dylib`
> - Linux: `~/.config/ghidra/ghidra_11.3.2_PUBLIC/Extensions/libLIEF.so`
> - Windows: `C:\Users\romain\AppData\Roaming\ghidra\ghidra_11.3.2_PUBLIC\Extensions\LIEF.dll`
> - Windows: `%APPDATA%\ghidra\ghidra_11.3.2_PUBLIC\Extensions\LIEF.dll`

You can verify that the plugin is correctly installed by opening the `CodeBrowser` tool on a binary and ensuring that you can see the LIEF configuration in `File > Configure` (**from the CodeBrowser, not the projects window**).

Alternatively, you can try running the headless script: `LiefVersionInfoScript.java`, which should output information about the installed version.

## [Troubleshooting](<https://lief.re/doc/latest/plugins/ghidra/index.html#troubleshooting>)

**Couldn’t find the native library**

This means that `libLIEF.so`, `libLIEF.dylib`, or `LIEF.dll` is not correctly installed in the `Extensions/` directory. The details of the error provide the expected path(s).

![Ghidra native library issue](https://lief.re/doc/latest/_static/cant-find-lib.png)  
  

**This feature requires LIEF extended**

This error means that you need to install the extended version of the shared library. See the [extended section](<https://lief.re/doc/latest/extended/intro.html#extended-intro>) for more information.

**libLIEF.dylib can’t be opened because Apple cannot check it for malicious software**

`libLIEF.dylib` is self-signed and does not use an Apple certificate. Therefore, it is considered as coming from an *unknown developer*.

You can address this issue in different ways:

1. You can compile `libLIEF.dylib` yourself and sign the compiled library with your certificate.
2. You can add a security exception as described here: [https://support.apple.com/guide/mac-help/apple-cant-check-app-for-malicious-software-mchleab3a043/mac](<https://support.apple.com/guide/mac-help/apple-cant-check-app-for-malicious-software-mchleab3a043/mac>)

![macOS library loading issue](https://lief.re/doc/latest/_static/macos-dylib-issue.png)
