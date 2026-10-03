---
documentID: "1d1dcc92425a51af98aae586c37f79195e5f3a1b67743df467796115fc7d922a"
docname: "extended/disassembler/python/arch/ebpf"
title: "eBPF - Python Disassembler - LIEF Documentation"
description: "eBPF Python Disassembler. See: lief.assembly.ebpf.OPCODE"
canonical: "https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html"
markdownURL: "https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "0b583ba01277e42cbe841b40707f1482c688f8ffada8a212319cc0d61c159a07"
---

# [eBPF](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#ebpf>)

## [Instruction](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#instruction>)

![Inheritance diagram of lief._lief.assembly.ebpf.Instruction](https://lief.re/doc/latest/_images/inheritance-34fd3565e342c5a7e2d57a67163739c82f74319b.png)

### [` lief.assembly.ebpf.Instruction `](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.Instruction>)

class lief.assembly.ebpf.Instruction

Bases: [`Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief._lief.assembly.Instruction")

This class represents an eBPF instruction

#### [` opcode `](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.Instruction.opcode>)

property opcode → lief.assembly.ebpf.OPCODE

The instruction opcode as defined in LLVM

#### [` operands `](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.Instruction.operands>)

property operands → Iterator[[lief.assembly.ebpf.Operand](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.Operand> "lief.assembly.ebpf.Operand") | None]

Iterator over the operands of the current instruction

## [Opcodes](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#opcodes>)

See: `lief.assembly.ebpf.OPCODE`

## [Operands](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#operands>)

![Inheritance diagram of lief._lief.assembly.ebpf.operands.Register, lief._lief.assembly.ebpf.operands.PCRelative, lief._lief.assembly.ebpf.Operand, lief._lief.assembly.ebpf.operands.Immediate, lief._lief.assembly.ebpf.operands.Memory](https://lief.re/doc/latest/_images/inheritance-2925c38856ccb17acb0d01c840d73f8a467a35da.png)

### [` lief.assembly.ebpf.Operand `](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.Operand>)

class lief.assembly.ebpf.Operand

Bases: `object`

This class represents an operand for an eBPF instruction

#### [` to_string `](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.Operand.to_string>)

property to\_string → str

Pretty representation of the operand

### [Immediate](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#immediate>)

![Inheritance diagram of lief._lief.assembly.ebpf.operands.Immediate](https://lief.re/doc/latest/_images/inheritance-175b46a0202adda78dcfc164d859a48964e16b16.png)

#### [` lief.assembly.ebpf.operands.Immediate `](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.operands.Immediate>)

class lief.assembly.ebpf.operands.Immediate

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.Operand> "lief._lief.assembly.ebpf.Operand")

This class represents an immediate operand (i.e. a constant)

For instance:

```text
r1 = 8
     |
     +---> Immediate(8)
```

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.operands.Immediate.value>)

property value → int

The constant value wrapped by this operand

### [Register](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#register>)

![Inheritance diagram of lief._lief.assembly.ebpf.operands.Register](https://lief.re/doc/latest/_images/inheritance-d1ba855c0bdd3c4146c4487e3733dc84748e8669.png)

#### [` lief.assembly.ebpf.operands.Register `](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.operands.Register>)

class lief.assembly.ebpf.operands.Register

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.Operand> "lief._lief.assembly.ebpf.Operand")

This class represents a register operand.

For instance:

```text
r0 = r1
 |    |
 |    +---------> Register(r1)
 |
 +--------------> Register(r0)
```

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.operands.Register.value>)

property value → lief.assembly.ebpf.REG

The effective `lief.assembly.ebpf.REG` wrapped by this operand

### [Memory](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#memory>)

![Inheritance diagram of lief._lief.assembly.ebpf.operands.Memory](https://lief.re/doc/latest/_images/inheritance-a009623e42357879d774dc11e03709bd268d6aa7.png)

#### [` lief.assembly.ebpf.operands.Memory `](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.operands.Memory>)

class lief.assembly.ebpf.operands.Memory

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.Operand> "lief._lief.assembly.ebpf.Operand")

This class represents a memory operand.

```text
*(u64 *)(r1 + 8) = r2
          |    |
          |    +-----> Displacement: 8
          |
          +----------> Base: r1
```

##### [` base `](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.operands.Memory.base>)

property base → lief.assembly.ebpf.REG

The base register.

For `*(u64 *)(r1 + 8)` it would return `r1`.

##### [` displacement `](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.operands.Memory.displacement>)

property displacement → int

The displacement value.

For `*(u64 *)(r1 + 8)` it would return `8`.

### [PCRelative](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#pcrelative>)

![Inheritance diagram of lief._lief.assembly.ebpf.operands.PCRelative](https://lief.re/doc/latest/_images/inheritance-fd7c79e49682d34d7940392b25c91ad0fff7fccd.png)

#### [` lief.assembly.ebpf.operands.PCRelative `](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.operands.PCRelative>)

class lief.assembly.ebpf.operands.PCRelative

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.Operand> "lief._lief.assembly.ebpf.Operand")

This class represents a PC-relative operand.

```text
if r1 == 0 goto +5
                |
                v
        PC Relative operand
```

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.operands.PCRelative.value>)

property value → int

The effective value that is relative to the current `pc` register
