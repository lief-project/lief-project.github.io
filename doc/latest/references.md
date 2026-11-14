---
documentID: "2a820abed77a29731856683ed7295df4bb2470c90a40b8a1873cb5529a286191"
docname: "references"
title: "References - LIEF Documentation"
description: "References reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/references.html"
markdownURL: "https://lief.re/doc/latest/references.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "b9eb8d06b0924e9e15b6bbb6115403c233241ba2356c3de7efa8faab2297d7dd"
---

# [References](<https://lief.re/doc/latest/references.html#references>)

## [Blog Posts &amp; White Papers](<https://lief.re/doc/latest/references.html#blog-posts-white-papers>)

- 2021-06-03: [QBDL: Quarkslab Dynamic Loader](<https://www.sstic.org/2021/presentation/qbdl_quarkslab_dynamic_loader/>)
- 2021-04-27: [An Empirical Evaluation of Automated Machine Learning Techniques for Malware Detection - IWSPA 21](<https://dl.acm.org/doi/pdf/10.1145/3445970.3451155>)
- 2021-01-25: [Static PE antimalware evasion - Francisco Javier Gomez Galvez](<http://openaccess.uoc.edu/webapps/o2/bitstream/10609/127010/7/fgomezgalvezTFM0121memoria.pdf>)
- 2020-10-23: [[Write-up] Using a PIE binary as a Shared Library: HCSC-2020 CTF Writeup](<https://medium.com/bugbountywriteup/using-a-pie-binary-as-a-shared-library-hcsc-2020-ctf-writeup-390a8a437f31>) by [István Tóth](<https://twitter.com/an0n_r0>)
- 2020-02-04: [x0rro: A PE/ELF/MachO Crypter for x86 and x86\_64 Based on Radare2 by phra](<https://iwantmore.pizza/posts/x0rro.html>)
- 2019-11-01: [Isolating the logic of an encrypted protocol with LIEF and kaitai](<https://x-c3ll.github.io/posts/blackbox-lief-kaitai/>) by [@TheXC3LL](<https://twitter.com/THEXC3LL>)
- 2018-10-26: [[Write-up] HITCON 2018 - Unexecutable](<https://github.com/pwning/public-writeup/tree/21b31d1aa916f07a16423a1c2944c498a29271fb/hitcon2018/unexecutable/>) by [Andrew Wesie](<https://github.com/awesie>)
- 2018-10-06: [[Write-up] Flare-on Challenge (Level 3)](<https://bruce30262.github.io/flare-on-challenge-2018-write-up/>)
- 2018-09-30: [Write-up] DragonCTF-Teaser-Brutal Oldskull by z3r0s
- 2018-09-07: [Using a non-system glibc](<https://www.ayrx.me/using-a-non-system-libc>) by [Ayrx](<https://www.ayrx.me/>)
- 2018-07-02: [PWN problem patch method commonly used in competition](<http://p4nda.top/2018/07/02/patch-in-pwn/>)
- 2018-05-03: [When SideChannelMarvels meet LIEF](<https://blog.quarkslab.com/when-sidechannelmarvels-meet-lief.html>)
- 2018-03-11: [Fuzzing Arbitrary Functions in ELF Binaries](<https://blahcat.github.io/posts/2018/03/11/fuzzing-arbitrary-functions-in-elf-binaries.html/>)
- 2018-02-01: [Dissecting Mobile Native Code Packers Case Study](<https://blog.zimperium.com/dissecting-mobile-native-code-packers-case-study/>)
- 2017-11-02: [Have Fun With LIEF and Executable Formats](<https://blog.quarkslab.com/have-fun-with-lief-and-executable-formats.html>)
- 2017-04-04: [LIEF Library to Instrument Executable Formats](<https://blog.quarkslab.com/lief-library-to-instrument-executable-formats.html>)

## [Projects using LIEF](<https://lief.re/doc/latest/references.html#projects-using-lief>)

| Name | Language | Link | Topic | Summary |
| --- | --- | --- | --- | --- |
| shrinkwrap | Python | [https://github.com/fzakaria/shrinkwrap](<https://github.com/fzakaria/shrinkwrap>) | ELF | A tool that embeds required dependencies into top-level executables |
| sqlelf | Python | [https://github.com/fzakaria/sqlelf](<https://github.com/fzakaria/sqlelf>) | ELF Analysis | Explore ELF objects through the power of SQL |
| Maat | Python/C++ | [https://maat.re/](<https://maat.re/>) | Symbolic Execution | Symbolic Execution Framework based on Ghidra’s sleigh |
| QBDL | Python/C++ | [https://github.com/quarkslab/QBDL](<https://github.com/quarkslab/QBDL>) | Binary Loader | QBDI aims to provide a modular and portable way to dynamically load and link binaries. |
| BLint | Python | [https://git.sr.ht/~prabhu/blint](<https://git.sr.ht/~prabhu/blint>) | Static Analysis | A binary linter for checking security properties and capabilities in executables |
| Datalog Disassembly | C++ | [https://github.com/GrammaTech/ddisasm](<https://github.com/GrammaTech/ddisasm>) | Binary Analysis | DDisasm is a fast disassembler which is accurate enough for the resulting assembly code to be reassembled. DDisasm is implemented using the datalog (souffle) declarative logic programming language to compile disassembly rules and heuristics |
| Mobile-Security-Framework-MobSF | Python | [https://github.com/MobSF/Mobile-Security-Framework-MobSF](<https://github.com/MobSF/Mobile-Security-Framework-MobSF>) | Mobile Analysis | Mobile Security Framework (MobSF) is an automated, all-in-one mobile application (Android/iOS/Windows) pen-testing, malware analysis and security assessment framework capable of performing static and dynamic analysis. |
| checksec.py | Python | [https://github.com/Wenzel/checksec.py](<https://github.com/Wenzel/checksec.py>) | Static Analysis | A simple tool to verify the security properties of your binaries. These properties can be enabled by your compiler to enforce the security of your executables, and mitigate exploitation |
| youarespecial | Python | [https://github.com/endgameinc/youarespecial](<https://github.com/endgameinc/youarespecial>) | Machine Learning | Machine learning models on malware |
| gym-malware | Python | [https://github.com/endgameinc/gym-malware](<https://github.com/endgameinc/gym-malware>) | Machine Learning | Learn how to bypass AV through machine learning. |
| MISP | Python | [https://github.com/MISP/MISP](<https://github.com/MISP/MISP>) | Malware | Malware Information Sharing Platform and Threat Sharing |
| Virus Disinfector KIT | Python | [https://github.com/Fare9/Virus\_Disinfector\_KIT](<https://github.com/Fare9/Virus_Disinfector_KIT>) | Malware | A tool for disinfecting PE files |
| lief-sys | Rust | [https://github.com/tathanhdinh/lief-sys](<https://github.com/tathanhdinh/lief-sys>) | Binding | Rust binding for LIEF |
| Ledger-Donjon/rainbow | Python | [https://github.com/Ledger-Donjon/rainbow](<https://github.com/Ledger-Donjon/rainbow>) | Dynamic Analysis | Trace generator based on Unicorn and LIEF as loader. |
| smda | Python | [https://github.com/danielplohmann/smda](<https://github.com/danielplohmann/smda>) | Static Analysis | Recursive disassembler using LIEF as ELF and PE loader |
| conan-io/hooks | Python | [binary-linter.py](<https://github.com/conan-io/hooks/blob/7f2882299cbdb545c397a0f37dc9394a7bbc0902/hooks/binary-linter.py>) | Static Analysis | Binary linter |
| Wiggle | Python | [https://github.com/ChiChou/wiggle](<https://github.com/ChiChou/wiggle>) | Binary search engine | An executable binary metadata search engine. |
| ANBU | C++ | [https://github.com/Fare9/ANBU](<https://github.com/Fare9/ANBU>) | Unpacking | Automatic New Binary Unpacker with PIN DBI Framework |

## [Similar Projects](<https://lief.re/doc/latest/references.html#similar-projects>)

| Name | Language | Link |
| --- | --- | --- |
| filebytes | Python | [https://github.com/sashs/filebytes](<https://github.com/sashs/filebytes>) |
| angr/cle | Python | [https://github.com/angr/cle](<https://github.com/angr/cle>) |
| pypeelf | Python | [https://github.com/crackinglandia/pypeelf](<https://github.com/crackinglandia/pypeelf>) |
| object | Rust | [https://github.com/gimli-rs/object](<https://github.com/gimli-rs/object>) |
| Goblin | Rust | [https://github.com/m4b/goblin](<https://github.com/m4b/goblin>) |

## [Parsers/Modifiers](<https://lief.re/doc/latest/references.html#parsers-modifiers>)

### [ELF](<https://lief.re/doc/latest/references.html#elf>)

| Name | Language | Link |
| --- | --- | --- |
| pyelftools | Python | [https://github.com/eliben/pyelftools](<https://github.com/eliben/pyelftools>) |
| pylibelf | Python | [https://github.com/crackinglandia/pylibelf](<https://github.com/crackinglandia/pylibelf>) |
| pydevtools | Python | [https://github.com/arowser/pydevtools](<https://github.com/arowser/pydevtools>) |
| elfparser | C++ ? | [http://elfparser.com/index.html](<http://elfparser.com/index.html>) |
| libelf | C | hxxp://www.mr511.de/software/ |
| elfio | C++ | [http://elfio.sourceforge.net/](<http://elfio.sourceforge.net/>) |
| radare2 | C/Python | [https://github.com/radare/radare2/tree/master/libr/bin/format/elf](<https://github.com/radare/radare2/tree/master/libr/bin/format/elf>) |
| node-elf | node.js | [https://github.com/sifteo/node-elf](<https://github.com/sifteo/node-elf>) |
| readelf | C | [https://github.com/bminor/binutils-gdb/blob/master/binutils/readelf.c](<https://github.com/bminor/binutils-gdb/blob/master/binutils/readelf.c>) |
| elfesteem | Python | [https://github.com/LRGH/elfesteem](<https://github.com/LRGH/elfesteem>) |
| elfsharp | C# | hxxp://elfsharp.hellsgate.pl/index.shtml |
| metasm | Ruby | [https://github.com/jjyg/metasm](<https://github.com/jjyg/metasm>) |
| amoco | Python | [https://github.com/bdcht/amoco](<https://github.com/bdcht/amoco>) |
| Goblin | Rust | [https://github.com/m4b/goblin](<https://github.com/m4b/goblin>) |
| Mithril | Ruby | [https://github.com/jbangert/mithril](<https://github.com/jbangert/mithril>) |
| ELFkickers | C | [http://www.muppetlabs.com/~breadbox/software/elfkickers.html](<http://www.muppetlabs.com/~breadbox/software/elfkickers.html>) |
| libelfmaster | C | [https://github.com/elfmaster/libelfmaster](<https://github.com/elfmaster/libelfmaster>) |
| libelf.js | JS | [https://github.com/AlexAltea/libelf.js](<https://github.com/AlexAltea/libelf.js>) |
| elfy.io | JS ? | [https://elfy.io/](<https://elfy.io/>) |
| elfhash | C | [https://github.com/cjacker/elfhash](<https://github.com/cjacker/elfhash>) |

### [PE](<https://lief.re/doc/latest/references.html#pe>)

| Name | Language | Link |
| --- | --- | --- |
| pefiles | Python | [https://github.com/erocarrera/pefile](<https://github.com/erocarrera/pefile>) |
| radare2 | C | [https://github.com/radare/radare2/tree/master/libr/bin/format/pe](<https://github.com/radare/radare2/tree/master/libr/bin/format/pe>) |
| PE.Explorer | C++/C# ? | [http://www.pe-explorer.com/](<http://www.pe-explorer.com/>) |
| CFF Explorer | C++/C# ? | [http://www.ntcore.com/exsuite.php](<http://www.ntcore.com/exsuite.php>) |
| PE Browser 64 | C++/C# ? | http://www.smidgeonsoft.prohosting.com/pebrowse-pro-file-viewer.html |
| PE View | C++/C# ? | [http://wjradburn.com/software/](<http://wjradburn.com/software/>) |
| FileAlyzer | C++/C# ? | [https://www.safer-networking.org/products/filealyzer/](<https://www.safer-networking.org/products/filealyzer/>) |
| PE Studio | C++/C# ? | [https://www.winitor.com/](<https://www.winitor.com/>) |
| PEDumper | C | [https://github.com/maldevel/PEdumper](<https://github.com/maldevel/PEdumper>) |
| PE Parse | C++/Python | [https://github.com/trailofbits/pe-parse](<https://github.com/trailofbits/pe-parse>) |
| PEParse | C# | [https://github.com/DKorablin/PEReader](<https://github.com/DKorablin/PEReader>) |
| PE Bliss | C++ | [https://github.com/BackupGGCode/portable-executable-library](<https://github.com/BackupGGCode/portable-executable-library>) |
| PE Net | .NET | [https://github.com/secana/PeNet](<https://github.com/secana/PeNet>) |
| libpe | C++ | [https://github.com/evilsocket/libpe/tree/master/libpe](<https://github.com/evilsocket/libpe/tree/master/libpe>) |
| elfesteem | Python | [https://github.com/LRGH/elfesteem](<https://github.com/LRGH/elfesteem>) |
| pelook | C ? | [http://bytepointer.com/tools/index.htm#pelook](<http://bytepointer.com/tools/index.htm#pelook>) |
| PortEx | Java | [https://github.com/struppigel/PortEx](<https://github.com/struppigel/PortEx>) |
| metasm | Ruby | [https://github.com/jjyg/metasm](<https://github.com/jjyg/metasm>) |
| amoco | Python | [https://github.com/bdcht/amoco](<https://github.com/bdcht/amoco>) |
| Goblin | Rust | [https://github.com/m4b/goblin](<https://github.com/m4b/goblin>) |

### [Mach-O](<https://lief.re/doc/latest/references.html#mach-o>)

| Name | Language | Link |
| --- | --- | --- |
| radare2 | C | [https://github.com/radare/radare2/tree/master/libr/bin/format/mach0](<https://github.com/radare/radare2/tree/master/libr/bin/format/mach0>) |
| MachO-Kit | C/ObjC | [https://github.com/DeVaukz/MachO-Kit](<https://github.com/DeVaukz/MachO-Kit>) |
| optool | ObjC | [https://github.com/alexzielenski/optool](<https://github.com/alexzielenski/optool>) |
| macho\_edit | C++ | [https://github.com/Tyilo/macho\_edit](<https://github.com/Tyilo/macho_edit>) |
| macholib | Python | [https://pypi.org/project/macholib/](<https://pypi.org/project/macholib/>) |
| elfsharp | C# | http://elfsharp.hellsgate.pl/index.shtml |
| elfesteem | Python | [https://github.com/LRGH/elfesteem](<https://github.com/LRGH/elfesteem>) |
| metasm | Ruby | [https://github.com/jjyg/metasm](<https://github.com/jjyg/metasm>) |
| Goblin | Rust | [https://github.com/m4b/goblin](<https://github.com/m4b/goblin>) |
| MachOView | ObjC | [https://github.com/gdbinit/MachOView](<https://github.com/gdbinit/MachOView>) |
| XMachOViewer | C++ | [https://github.com/horsicq/XMachOViewer](<https://github.com/horsicq/XMachOViewer>) |

## [Tools](<https://lief.re/doc/latest/references.html#tools>)

| Name | Language | Link | Format | Summary |
| --- | --- | --- | --- | --- |
| Dress | Python | [https://github.com/docileninja/dress](<https://github.com/docileninja/dress>) | ELF | Adds static symbols |
| objconv | C++ | [https://www.agner.org/optimize/#objconv](<https://www.agner.org/optimize/#objconv>) | ELF/PE/MachO | Format converter |
| PEDetour | C++ | [https://github.com/chen-charles/PEDetour](<https://github.com/chen-charles/PEDetour>) | PE | Hook exported functions |
| python-elf | Python | [https://github.com/tbursztyka/python-elf](<https://github.com/tbursztyka/python-elf>) | ELF | ELF binary format manipulation tool |
| PEDetour | C++ | [https://github.com/chen-charles/PEDetour](<https://github.com/chen-charles/PEDetour>) | PE | Hook exported functions |
| libmaelf | C | [https://github.com/tiago4orion/libmalelf](<https://github.com/tiago4orion/libmalelf>) | ELF | A library for dissecting and infecting ELF binaries. |
| peinjector | C | [https://github.com/JonDoNym/peinjector](<https://github.com/JonDoNym/peinjector>) | PE | MITM PE file infector |
| backdoor factory | C++ | [https://github.com/secretsquirrel/the-backdoor-factory](<https://github.com/secretsquirrel/the-backdoor-factory>) | ELF/PE/MachO | Patch PE, ELF, Mach-O binaries with shellcode |
| RePEconstruct | C | [https://github.com/DavidKorczynski/RePEconstruct](<https://github.com/DavidKorczynski/RePEconstruct>) | PE | PE Unpacker |
| patchkit | Python | [https://github.com/lunixbochs/patchkit](<https://github.com/lunixbochs/patchkit>) | ELF | Patch binary |
| unstrip | Python | [https://github.com/pzread/unstrip](<https://github.com/pzread/unstrip>) | ELF | Unstrip static binary |
| sym2elf | Python | [https://github.com/danigargu/syms2elf](<https://github.com/danigargu/syms2elf>) | ELF | Exports IDA symbols to the original binary |
| elfhash | C | [https://github.com/cjacker/elfhash](<https://github.com/cjacker/elfhash>) | ELF | Manipulate ELF’s hash |
| recomposer | Python | [https://github.com/secretsquirrel/recomposer](<https://github.com/secretsquirrel/recomposer>) | PE | Modifies parts of a PE file to bypass antivirus software |
| bearparser | C++ | [https://github.com/hasherezade/bearparser](<https://github.com/hasherezade/bearparser>) | PE | Portable Executable parsing library with a GUI |
| IAT patcher | C++ | [http://hasherezade.github.io/IAT\_patcher](<http://hasherezade.github.io/IAT_patcher>) | PE | IAT hooking application |
| PEframe | Python | [https://github.com/guelfoweb/peframe](<https://github.com/guelfoweb/peframe>) | PE | PE Static analyzer |
| Manalyze | C++ | [https://github.com/JusticeRage/Manalyze](<https://github.com/JusticeRage/Manalyze>) | PE | PE Static analyzer |
| elf-dissector | C++ | [https://github.com/KDE/elf-dissector](<https://github.com/KDE/elf-dissector>) | ELF | Tool to inspect ELF files |
| InfectPE | C++ | [https://github.com/secrary/InfectPE](<https://github.com/secrary/InfectPE>) | PE | Inject code into PE file |
| termux-elf-cleaner | C++ | [https://github.com/termux/termux-elf-cleaner](<https://github.com/termux/termux-elf-cleaner>) | ELF | Utility to remove unused ELF sections causing warnings. |
| vdexExtractor | C | [https://github.com/anestisb/vdexExtractor](<https://github.com/anestisb/vdexExtractor>) | VDEX | Extract DEX from VDEX |
| insert\_dylib | C | [https://github.com/Tyilo/insert\_dylib](<https://github.com/Tyilo/insert_dylib>) | Mach-O | Insert a dylib load command |
| optool | Obj-C | [https://github.com/alexzielenski/optool](<https://github.com/alexzielenski/optool>) | Mach-O | Modify Mach-O commands: Resign, insert commands, … |
| reflective- polymorphism | C | [https://github.com/zeroSteiner/reflective-polymorphism](<https://github.com/zeroSteiner/reflective-polymorphism>) | PE | Transform PE files between EXE and DLL |
| XELFViewer | C++/Qt | [https://github.com/horsicq/XELFViewer](<https://github.com/horsicq/XELFViewer>) | ELF | ELF file viewer/editor for Windows, Linux and macOS. |
| strongarm | Python | [https://github.com/datatheorem/strongarm](<https://github.com/datatheorem/strongarm>) | Mach-O | Cross-platform ARM64 Mach-O analysis library |
