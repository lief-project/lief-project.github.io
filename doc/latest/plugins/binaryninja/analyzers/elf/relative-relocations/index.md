---
documentID: "615ea66dc1631ddef98442ced26f038145f7e2b575ac26778fbf9c2d9e9aa068"
docname: "plugins/binaryninja/analyzers/elf/relative-relocations/index"
title: "Relative Relocations - ELF Analyzers - LIEF Documentation"
description: "Relative Relocations in ELF Analyzers. This analyzer enhances the type definition of relative relocation data (DT_RELR)"
canonical: "https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/relative-relocations/index.html"
markdownURL: "https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/relative-relocations/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "d3001badfef6396d558b876dfb3cd283eb93c502d52154763c9b7545af523d53"
---

# [Relative Relocations](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/relative-relocations/index.html#relative-relocations>)

This analyzer enhances the type definition of relative relocation data (`DT_RELR`)

.relr.dyn section started  {0x40a9b8-0x40aa88}0040a9b8                          00 00 04 00 00 00 00 00          ........0040a9c0  55 55 55 55 55 55 55 55 ab aa fe ff ff ff df c8  UUUUUUUU........0040a9d0  11 11 19 00 98 aa aa aa 55 55 55 55 55 55 55 55  ........UUUUUUUU0040a9e0  ab aa aa aa aa aa aa aa 55 55 55 55 55 55 55 55  ........UUUUUUUU0040a9f0  ab aa aa aa aa aa aa aa 55 55 55 55 55 55 55 55  ........UUUUUUUU0040aa00  ab aa aa aa aa aa aa aa 55 55 55 55 55 55 55 55  ........UUUUUUUU0040aa10  ab aa aa aa aa aa aa aa 55 55 55 55 55 55 55 55  ........UUUUUUUU0040aa20  ab aa aa aa aa aa aa ea 55 55 55 ad 8a 00 54 55  ........UUU...TU0040aa30  ab aa aa aa aa aa aa aa 55 55 d5 ff ff ff 00 00  ........UU......0040aa40  60 40 04 00 00 00 00 00 f1 42 10 80 90 18 01 00  `@.......B......0040aa50  11 21 00 50 b4 10 42 20 ff 70 fe 8c 38 00 a1 02  .!.P..B .p..8...0040aa60  01 00 00 00 00 00 00 f1 37 00 71 00 42 95 7b 0f  ........7.q.B.{.0040aa70  01 00 00 a0 77 00 1f 20 1d 00 50 c9 ff 01 00 00  ....w.. ..P.....0040aa80  3d 00 00 00 00 00 00 00                          =........relr.dyn section ended  {0x40a9b8-0x40aa88}

.relr.dyn section started  {0x40a9b8-0x40aa88}0040a9b8  uintptr\_t r\_relr[0x1a] =0040a9b8  {0040a9b8      [0x00] =  0x00000000000400000040a9c0      [0x01] =  0x55555555555555550040a9c8      [0x02] =  0xc8dffffffffeaaab0040a9d0      [0x03] =  0xaaaaaa98001911110040a9d8      [0x04] =  0x55555555555555550040a9e0      [0x05] =  0xaaaaaaaaaaaaaaab0040a9e8      [0x06] =  0x55555555555555550040a9f0      [0x07] =  0xaaaaaaaaaaaaaaab0040a9f8      [0x08] =  0x55555555555555550040aa00      [0x09] =  0xaaaaaaaaaaaaaaab0040aa08      [0x0a] =  0x55555555555555550040aa10      .....relr.dyn section ended  {0x40a9b8-0x40aa88}

> **Relocation**
> 
> Please note that the **processing** of these relocations is part of the [Relocations](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/relocations/index.html#plugins-binaryninja-analyzers-relocations>) analyzer.
