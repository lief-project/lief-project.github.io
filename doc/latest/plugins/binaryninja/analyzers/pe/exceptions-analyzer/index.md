---
documentID: "9a5961c219e908b88fbf05faa2d23cb2c1ac87b64094180c92789cdc362656a3"
docname: "plugins/binaryninja/analyzers/pe/exceptions-analyzer/index"
title: "Exceptions - PE Analyzers - LIEF Documentation"
description: "Exceptions in PE Analyzers. This analyzer improves the representation and underlying data of PE exceptions metadata, primarily for ARM64 and ARM64EC binaries."
canonical: "https://lief.re/doc/latest/plugins/binaryninja/analyzers/pe/exceptions-analyzer/index.html"
markdownURL: "https://lief.re/doc/latest/plugins/binaryninja/analyzers/pe/exceptions-analyzer/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "c7e10df783f93738e065476ceca55828f9fce887d220163dcdcb59c98ec1b80b"
---

# [Exceptions](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/pe/exceptions-analyzer/index.html#exceptions>)

This analyzer improves the representation and underlying data of PE exceptions metadata, primarily for ARM64 and ARM64EC binaries.

.pdata section started  {0x140017000-0x140017d50}140017000  00 10 00 00 40 27 01 00 20 10 00 00 4c 27 01 00  ....@'.. ...L'..140017010  60 10 00 00 5c 27 01 00 80 10 00 00 6c 27 01 00  `...\'......l'..140017020  e0 10 00 00 18 29 01 00 00 11 00 00 c0 2a 01 00  .....).......\*..140017030  18 11 00 00 cc 2a 01 00 50 11 00 00 e4 2c 01 00  .....\*..P....,..140017040  80 11 00 00 ec 2c 01 00 00 12 00 00 f4 2c 01 00  .....,.......,..140017050  80 12 00 00 fc 2c 01 00 00 13 00 00 04 2d 01 00  .....,.......-..140017060  80 13 00 00 0c 2d 01 00 f0 13 00 00 14 2d 01 00  .....-.......-..140017070  60 14 00 00 1c 2d 01 00 d0 14 00 00 24 2d 01 00  `....-......$-..140017080  40 15 00 00 2c 2d 01 00 b0 15 00 00 34 2d 01 00  @...,-......4-..140017090  20 16 00 00 3c 2d 01 00 90 16 00 00 44 2d 01 00   ...&lt;-......D-..1400170a0  00 17 00 00 4c 2d 01 00 50 17 00 00 54 2d 01 00  ....L-..P...T-..1400170b0  a0 17 00 00 5c 2d 01 00 f0 17 00 00 64 2d 01 00  ....\-......d-..1400170c0  40 18 00 00 6c 2d 01 00 b0 18 00 00 74 2d 01 00  @...l-......t-..1400170d0  20 19 00 00 7c 2d 01 00 90 19 00 00 84 2d 01 00   ...|-.......-..1400170e0  00 1a 00 00 8c 2d 01 00 70 1a 00 00 94 2d 01 00  .....-..p....-..1400170f0  e0 1a 00 00 9c 2d 01 00 50 1b 00 00 a4 2d 01 00  .....-..P....-..140017100  c0 1b 00 00 ac 2d 01 00 30 1c 00 00 b4 2d 01 00  .....-..0....-..140017110  a0 1c 00 00 bc 2d 01 00 10 1d 00 00 c4 2d 01 00  .....-.......-..140017120  80 1d 00 00 cc 2d 01 00 d0 1d 00 00 d4 2d 01 00  .....-.......-..140017130  20 1e 00 00 dc 2d 01 00 70 1e 00 00 e4 2d 01 00   ....-..p....-..

.pdata section started  {0x140017000-0x140017d50}140017000  struct \_LIEF\_IMAGE\_ARM64\_RUNTIME\_FUNCTION\_ENTRY \_\_arm64\_runtime\_function\_entry =140017000  {140017000      uint32\_t BeginAddress = 0x1000140017004      uint32\_t UnwindData = 0x12740140017008  }140017008  struct \_LIEF\_IMAGE\_ARM64\_RUNTIME\_FUNCTION\_ENTRY \_\_arm64\_runtime\_function\_entry =140017008  {140017008      uint32\_t BeginAddress = 0x102014001700c      uint32\_t UnwindData = 0x1274c140017010  }140017010  struct \_LIEF\_IMAGE\_ARM64\_RUNTIME\_FUNCTION\_ENTRY \_\_arm64\_runtime\_function\_entry =140017010  {140017010      uint32\_t BeginAddress = 0x1060140017014      uint32\_t UnwindData = 0x1275c140017018  }140017018  struct \_LIEF\_IMAGE\_ARM64\_RUNTIME\_FUNCTION\_ENTRY \_\_arm64\_runtime\_function\_entry =140017018  {140017018      uint32\_t BeginAddress = 0x108014001701c      uint32\_t UnwindData = 0x1276c140017020  }140017020  struct \_LIEF\_IMAGE\_ARM64\_RUNTIME\_FUNCTION\_ENTRY \_\_arm64\_runtime\_function\_entry =

  

.rdata section started  {0x140010000-0x1400152d8}140012710  0b 00 20 08 81 e4 e3 e3 14 00 40 40 0a 00 c0 02  .. .......@@....140012720  e1 81 e6 e6 e6 e6 e7 66 89 fc e4 81 e7 4e 88 e7  .......f.....N..140012730  4c 86 e7 4a 84 e7 48 82 e7 66 89 fc e3 e3 e4 e3  L..J..H..f......140012740  06 00 40 08 05 00 80 00 01 e4 e4 00 0b 00 40 10  ..@...........@.

.rdata section started  {0x140010000-0x1400152d8}140012710  struct LIEF\_IMAGE\_ARM64\_RUNTIME\_FUNCTION\_ENTRY\_XDATA \_\_arm64\_runtime\_function\_entry\_xdata =140012710  {140012710      uint32\_t HeaderData = 0x820000b140012714  }140012714  uint8\_t \_\_arm64\_unwind\_code[0x4] =140012714  {140012714      [0x0] =  0x81140012715      [0x1] =  0xe4140012716      [0x2] =  0xe3140012717      [0x3] =  0xe3140012718  }140012718  struct LIEF\_IMAGE\_ARM64\_RUNTIME\_FUNCTION\_ENTRY\_XDATA \_\_arm64\_runtime\_function\_entry\_xdata =140012718  {140012718      uint32\_t HeaderData = 0x4040001414001271c  }14001271c  uint32\_t \_\_arm64\_epilog\_scopes[0x1] =14001271c  {14001271c      [0x0] =  0x02c0000a140012720  }140012720  uint8\_t \_\_arm64\_unwind\_code[0x20] =140012720  {140012720      [0x00] =  0xe1140012721      [0x01] =  0x81140012722      [0x02] =  0xe6140012723      [0x03] =  0xe6140012724      [0x04] =  0xe6140012725      [0x05] =  0xe6               [....]140012740  }

Additionally, it defines functions automatically based on the metadata of exceptions. This results in a more accurate representation of the binary, as illustrated in this feature map:

> **See also**
> 
> See also this blog post: [https://lief.re/blog/2025-02-16-arm64ec-pe-support/#binaryninja-arm64ec-support](<https://lief.re/blog/2025-02-16-arm64ec-pe-support/#binaryninja-arm64ec-support>)
