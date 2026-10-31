---
documentID: "bfd73052ed524448859f36b751ba1ce18589cfc8e3657b722c9a5bdbbdb7b1ee"
docname: "extended/assembler/python"
title: "Assembler Python API - LIEF Documentation"
description: "Assembler Python API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/extended/assembler/python.html"
markdownURL: "https://lief.re/doc/latest/extended/assembler/python.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "424117067121d041f79defa4ccda0047f8e5ef38933bbe42c4a6e9a473809e45"
---

# [Python](<https://lief.re/doc/latest/extended/assembler/python.html#python>)

- [`lief.Binary.assemble()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.assemble> "lief.Binary.assemble")
- [`lief.assembly.Engine`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Engine> "lief.assembly.Engine")

## [AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/python.html#assemblerconfig>)

### [` lief.assembly.AssemblerConfig `](<https://lief.re/doc/latest/extended/assembler/python.html#lief.assembly.AssemblerConfig>)

class lief.assembly.AssemblerConfig(*self*)

Bases: `object`

This class exposes the different elements that can be configured to assemble code.

#### [` DIALECT `](<https://lief.re/doc/latest/extended/assembler/python.html#lief.assembly.AssemblerConfig.DIALECT>)

class DIALECT(*\*values*)

Bases: `Enum`

The different supported dialects

##### [` DEFAULT_DIALECT `](<https://lief.re/doc/latest/extended/assembler/python.html#lief.assembly.AssemblerConfig.DIALECT.DEFAULT_DIALECT>)

DEFAULT\_DIALECT = 0

##### [` X86_ATT `](<https://lief.re/doc/latest/extended/assembler/python.html#lief.assembly.AssemblerConfig.DIALECT.X86_ATT>)

X86\_ATT = 2

##### [` X86_INTEL `](<https://lief.re/doc/latest/extended/assembler/python.html#lief.assembly.AssemblerConfig.DIALECT.X86_INTEL>)

X86\_INTEL = 1

#### [` default_config `](<https://lief.re/doc/latest/extended/assembler/python.html#lief.assembly.AssemblerConfig.default_config>)

default\_config → [lief.assembly.AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/python.html#lief.assembly.AssemblerConfig> "lief.assembly.AssemblerConfig") = &lt;nanobind.nb\_func object&gt;

#### [` dialect `](<https://lief.re/doc/latest/extended/assembler/python.html#lief.assembly.AssemblerConfig.dialect>)

property dialect → [lief.assembly.AssemblerConfig.DIALECT](<https://lief.re/doc/latest/extended/assembler/python.html#lief.assembly.AssemblerConfig.DIALECT> "lief.assembly.AssemblerConfig.DIALECT")

The dialect of the input assembly code

#### [` resolve_symbol `](<https://lief.re/doc/latest/extended/assembler/python.html#lief.assembly.AssemblerConfig.resolve_symbol>)

resolve\_symbol(*self*, *name: str*) → int | None

This function aims to be overloaded in order to resolve symbols used in the assembly listing.

For instance, given this assembly code:

```text
0x1000: mov rdi, rbx
0x1003: call _my_function
```

The function `_my_function` will remain undefined unless we return its address in [`resolve_symbol()`](<https://lief.re/doc/latest/extended/assembler/python.html#lief.assembly.AssemblerConfig.resolve_symbol> "lief.assembly.AssemblerConfig.resolve_symbol"):

```python
class MyConfig(lief.assembly.AssemblerConfig):
    def __init__(self):
        super().__init__() # This is important

    @override
    def resolve_symbol(self, name: str) -> int | None:
        if name == '_my_function':
            return 0x4000
        return None # Or super().resolve_symbol(name)
```
