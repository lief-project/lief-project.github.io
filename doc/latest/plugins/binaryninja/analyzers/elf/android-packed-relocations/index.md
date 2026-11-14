---
documentID: "d2111340022e03750bfd6aee4f262162f500a7e73f34d4acda035f0e243c1e8b"
docname: "plugins/binaryninja/analyzers/elf/android-packed-relocations/index"
title: "Android Packed Relocations - ELF Analyzers - LIEF Documentation"
description: "Android Packed Relocations in ELF Analyzers. This analyzer enhances the type definition of Android-specific relocation data (DT_ANDROID_RELA)"
canonical: "https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/android-packed-relocations/index.html"
markdownURL: "https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/android-packed-relocations/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "cb7bff37e494f66975247908a6f19c218f40c5fd4236ebe3015c95a53334a480"
---

# [Android Packed Relocations](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/android-packed-relocations/index.html#android-packed-relocations>)

This analyzer enhances the type definition of Android-specific relocation data (`DT_ANDROID_RELA`)

.rela.dyn section started  {0x40a950-0x40a9b6}0040a950  41 50 53 32 0b 00 0b 08 88 b5 10 81 82 80 80 e0  APS2............0040a960  2f 00 e0 0c 81 88 80 80 a0 02 00 08 81 88 80 80  /...............0040a970  c0 03 00 08 81 88 80 80 e0 3b 00 08 81 88 80 80  .........;......0040a980  80 3b 00 08 81 88 80 80 b0 31 00 08 81 88 80 80  .;.......1......0040a990  e0 2f 00 08 81 88 80 80 b0 15 00 08 81 88 80 80  ./..............0040a9a0  c0 08 00 80 c4 00 81 82 80 80 80 3b 00 88 13 81  ...........;....0040a9b0  82 80 80 b0 15 00                                .......rela.dyn section ended  {0x40a950-0x40a9b6}

.rela.dyn section started  {0x40a950-0x40a9b6}0040a950  char format[0x4] = "APS2"0040a954  sleb128 nb\_relocs = 0xb0040a955  sleb128 reloc\_offset = 0x00040a956  sleb128 group\_size = 0xb0040a957  sleb128 group\_flags = 0x80040a958  sleb128 reloc\_offset\_0 = ...0040a95b  ....rela.dyn section ended  {0x40a950-0x40a9b6}

> **Relocation**
> 
> Please note that the **processing** of these relocations is part of the [Relocations](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/relocations/index.html#plugins-binaryninja-analyzers-relocations>) analyzer.
