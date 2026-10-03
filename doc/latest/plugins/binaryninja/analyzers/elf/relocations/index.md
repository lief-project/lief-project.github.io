---
documentID: "e929c54aa22e4b2da49f0ba82466edb21fdaab095753ac0b94b6dc5a2e6895e0"
docname: "plugins/binaryninja/analyzers/elf/relocations/index"
title: "Relocations - ELF Analyzers - LIEF Documentation"
description: "Relocations in ELF Analyzers. This analyzer enhances support for binaries that use recent relocation formats not recognized by BinaryNinja (e.g.…"
canonical: "https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/relocations/index.html"
markdownURL: "https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/relocations/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "78a4ad0cdb3dc2ef77ca4e0aa9893e1cbdfc7c1118acd7685766ea528acbd909"
---

# [Relocations](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/relocations/index.html#relocations>)

This analyzer enhances support for binaries that use recent relocation formats not recognized by BinaryNinja (e.g., `DT_ANDROID_RELA`, `DT_RELR`).

For instance, here is LIEF-based processing of `DT_ANDROID_RELA` relocations:

.fini\_array section started  {0x441e40-0x441e98}00441e40  void (\* fini\_array[0xb])() =00441e40  {00441e40      [0x0] = 0x1c02000441e48      [0x1] = 0x1c00000441e50      [0x2] = 0x2bd8000441e58      [0x3] = 0x2c78000441e60      [0x4] = 0x2ef5000441e68      [0x5] = 0x3269000441e70      [0x6] = 0x3441000441e78      [0x7] = 0x3862000441e80      [0x8] = 0x3a60000441e88      [0x9] = 0x3d43000441e90      [0xa] = 0x3d53000441e98  }.fini\_array section ended  {0x441e40-0x441e98}.init\_array section started  {0x441e98-0x441f08}00441e98  void (\* init\_array[0xe])() =00441e98  {00441e98      [0x0] = 0x1c30c00441ea0      [0x1] = 0x1c65000441ea8      [0x2] = 0x246f000441eb0      [0x3] = 0x284c000441eb8      [0x4] = 0x2981000441ec0      [0x5] = 0x2bd7000441ec8      [0x6] = 0x2c77000441ed0      [0x7] = 0x2ef4000441ed8      [0x8] = 0x3268000441ee0      [0x9] = 0x3440000441ee8      [0xa] = 0x3861000441ef0      [0xb] = 0x3a5f000441ef8      [0xc] = 0x3d3a000441f00      [0xd] = 0x3d4a000441f08  }.init\_array section ended  {0x441e98-0x441f08}

.fini\_array section started  {0x441e40-0x441e98}00441e40  void (\* fini\_array[0xb])() =00441e40  {00441e40      void (\* fini\_array)() = \_\_on\_dlclose\_late00441e48      void (\* data\_441e48)() = \_\_on\_dlclose00441e50      void (\* data\_441e50)() = fib\_lookup\_exit00441e58      void (\* data\_441e58)() = ctrl\_exit00441e60      void (\* data\_441e60)() = addr\_exit00441e68      void (\* data\_441e68)() = link\_exit00441e70      void (\* data\_441e70)() = macsec\_exit00441e78      void (\* data\_441e78)() = vlan\_exit00441e80      void (\* data\_441e80)() = route\_exit00441e88      void (\* data\_441e88)() = release\_routing\_table\_names00441e90      void (\* data\_441e90)() = release\_proto\_names00441e98  }.fini\_array section ended  {0x441e40-0x441e98}.init\_array section started  {0x441e98-0x441f08}00441e98  void (\* init\_array[0xe])() =00441e98  {00441e98      void (\* init\_array)() = init\_have\_lse\_atomics00441ea0      void (\* data\_441ea0)() = \_\_init\_cpu\_features00441ea8      void (\* data\_441ea8)() = init\_msg\_size00441eb0      void (\* data\_441eb0)() = init\_default\_cb00441eb8      void (\* data\_441eb8)() = nl\_debug\_init00441ec0      void (\* data\_441ec0)() = fib\_lookup\_init00441ec8      void (\* data\_441ec8)() = ctrl\_init00441ed0      void (\* data\_441ed0)() = addr\_init00441ed8      void (\* data\_441ed8)() = link\_init00441ee0      void (\* data\_441ee0)() = macsec\_init00441ee8      void (\* data\_441ee8)() = vlan\_init00441ef0      void (\* data\_441ef0)() = route\_init00441ef8      void (\* data\_441ef8)() = init\_routing\_table\_names00441f00      void (\* data\_441f00)() = init\_proto\_names00441f08  }.init\_array section ended  {0x441e98-0x441f08}

Here is one for `DT_RELR` relocations:

.data.rel.ro (PROGBITS) section started  {0x421010-0x422310}00421020  00 00 00 00 00 00 00 00 6c 2c 01 00 00 00 00 00  ........l,......00421030  98 2c 01 00 00 00 00 00 00 00 00 00 00 00 00 00  .,..............00421040  d4 28 01 00 00 00 00 00 fc 2a 01 00 00 00 00 00  .(.......\*......00421050  fc 2a 01 00 00 00 00 00 00 2b 01 00 00 00 00 00  .\*.......+......00421060  60 00 00 00 00 00 00 00 d8 ff ff ff ff ff ff ff  `...............00421070  00 00 00 00 00 00 00 00 cc 2c 01 00 00 00 00 00  .........,......00421080  fc 2c 01 00 00 00 00 00 78 2b 01 00 00 00 00 00  .,......x+......00421090  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  .................data.rel.ro (PROGBITS) section ended  {0x421010-0x422310}

.data.rel.ro (PROGBITS) section started  {0x421010-0x422310}00421020  void\* data\_421038 = 0x000421028  void\* data\_421028 = android::Choreographer::~Choreographer()00421030  void\* data\_421030 = android::Choreographer::~Choreographer()00421038  void\* data\_421038 = 0x000421040  void\* data\_421040 = android::Choreographer::dispatchVsync(int64\_t, uint64\_t, uint32\_t)00421048  void\* data\_421048 = android::Choreographer::dispatchHotplug(int64\_t, uint64\_t, bool)00421050  void\* data\_421050 = android::Choreographer::dispatchHotplug(int64\_t, uint64\_t, bool)00421058  void\* data\_421058 = android::Choreographer::handleMessage(android::Message const&amp;).data.rel.ro (PROGBITS) section ended  {0x421010-0x422310}

See also

- [Android Packed Relocations](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/android-packed-relocations/index.html>)
- [Relative Relocations](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/relative-relocations/index.html>)
