---
title: "LIEF - Release 0.9.0"
description: "Major changes in LIEF 0.9, plus work-in-progress features planned for future releases."
canonical_url: "https://lief.re/blog/2018-06-11-lief-0-9-0/"
markdown_url: "https://lief.re/blog/2018-06-11-lief-0-9-0/index.md"
authors: ["Romain Thomas"]
date_published: "2018-06-11T00:00:00Z"
date_modified: "2018-06-11T00:00:00Z"
language: "en-US"
section: "blog"
tags: ["release","Android","JSON"]
categories: []
---

# LIEF - Release 0.9.0

> Major changes in LIEF 0.9, plus work-in-progress features planned for future releases.

## Installation

Release packages are available on the [GitHub page](https://github.com/lief-project/LIEF/releases/tag/0.9.0) and Python package can be installed with:

```bash
$ pip install [--user] lief==0.9.0
```

## Release highlight

### Android Formats

This new version of LIEF comes with support for Android formats related to the ART runtime: OAT, VDEX, DEX and ART.
As the OAT format is a derivation of ELF, it made sense to add it in LIEF. Basically, this format
is used by Android to wrap native code being the result of Dalvik bytecode optimization.

Regarding VDEX, DEX, and ART, these formats have somehow a relation with OAT and therefore we also choose to add them. For more information about these Android formats and how to use them,
a tutorial is available in the LIEF documentation: [Android Formats](https://lief.quarkslab.com/doc/stable/tutorials/10_android_formats.html).

We can currently only parse these formats, but support for modification will be added incrementally. Some attacks rely on modifying the OAT format, as Collin Mulliner explains in "*Inside Android’s SafetyNetAttestation: Attack and Defense*" [^1].
Tencent’s Xuanwu Lab also discusses them in "*How Samsung Secures Your Wallet & How To Break It*" [^2]. In a future version, we plan to provide an API for adding native code to OAT.


### JSON serialization

As one purpose of this project is to provide an API that can be easily integrated in other projects, we are glad to announce that JSON serialization is now available for **all** LIEF objects.
It means that one can now access to
format information through a JSON interface.
Previous versions had a JSON support for ELF and PE formats, the v0.9 now supports all formats and all objects.

Objects can be serialized with the ``lief.to_json`` function:

```python
import lief

gcc = lief.parse("/usr/bin/gcc")
lief.to_json(gcc.header)

{
 'entrypoint': 4209824,
 'file_type': 'EXECUTABLE',
 'header_size': 64,
 'identity_class': 'CLASS64',
 'identity_data': 'LSB'
}

libSystem = lief.parse("/usr/lib/libSystem.dylib")
lief.to_json(libSystem.commands[1])

{
 'command': 'SEGMENT',
 'command_offset': 492,
 'command_size': 464,
 'content_hash': 18446744072658165641,
 'data_hash': 1841536728,
 'file_offset': 8192,
 'file_size': 4096,
 'flags': 0,
 'init_protection': 3,
 'max_protection': 7,
 'name': '__DATA',
 'numberof_sections': 6,
 'sections': ['__nl_symbol_ptr',
              '__la_symbol_ptr',
              '__mod_init_func',
              '__const',
              '__data',
              '__common'],
 'virtual_address': 8192,
 'virtual_size': 4096
}
```


One can also disable the JSON module using a CMake configuration flag:

```bash
$ cmake -DLIEF_ENABLE_JSON=off ...
```


## What's next

LIEF v0.9 still has a poor support for Mach-O modification and only supports modifications on header and some Load commands.

One of the primitives to do more general modification on Mach-O format is the ability to add arbitrary Load commands. Some tools [^3] [^4] exist to add commands, but they usually use padding between the load command table and the raw content or
they remove / replace existing one. The main limitation with this technique is that the number of load command which
can be added depends on the size of the padding. In LIEF, we took advantage of the fact that Mach-O are PIE
to *shift* the content that follow the load command table. This enable us to inject more than one or two commands.
To keep a consistent state of format (relocations, segment's virtual address, ...), the Mach-O builder of
LIEF rebuilds the export-trie, regenerates binding opcode, rebase opcodes, ...

In our tests, we succeeded in adding arbitrary number of ``LC_DYLIB`` command in clang as well as adding 10
new sections in the ``__TEXT`` segment. We are currently working on stabilization of the instrumentation process,
but it should be merged soon in then master branch. Stay tuned!

We will be also be presenting about file formats instrumentation at [Recon Montréal](https://recon.cx/2018/montreal/)
and [Pass The Salt](https://2018.pass-the-salt.org/programme/#instrumentation) for a talk about file formats instrumentation.
In this talk we will present techniques to perform code injection, hooking by using formats.


[^1]: Slide 58 of [Inside SafetyNet Attestation Attacks and Defense](https://www.mulliner.org/collin/publications/inside_safetynet_attestation_attacks_and_defense_mulliner2017_ekoparty.pdf).

[^2]: Slide 89 of [How Samsung Secures Your Wallet And How To Break It](https://www.blackhat.com/docs/eu-17/materials/eu-17-Ma-How-Samsung-Secures-Your-Wallet-And-How-To-Break-It.pdf).

[^3]: [insert_dylib](https://github.com/Tyilo/insert_dylib).

[^4]: [optool](https://github.com/alexzielenski/optool)
