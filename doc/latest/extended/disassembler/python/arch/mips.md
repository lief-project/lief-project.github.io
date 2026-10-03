---
documentID: "cb6c5798255800b24f516705a8fe59ff38b3f5989d7a1f855d5cabca41152488"
docname: "extended/disassembler/python/arch/mips"
title: "Mips - Python Disassembler - LIEF Documentation"
description: "Mips Python Disassembler. See: lief.assembly.mips.OPCODE"
canonical: "https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html"
markdownURL: "https://lief.re/doc/latest/extended/disassembler/python/arch/mips.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "e74e9a57f9b08560a1d2d12ad3f6c55244fb0427de1ba86058b431ffe6ec52d6"
---

# [Mips](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#mips>)

## [Instruction](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#instruction>)

![Inheritance diagram of lief._lief.assembly.mips.Instruction](https://lief.re/doc/latest/_images/inheritance-e78ec6ad94eec7bece0fd4d676cf2b5c941bd33d.png)

### [` lief.assembly.mips.Instruction `](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.Instruction>)

class lief.assembly.mips.Instruction

Bases: [`Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief._lief.assembly.Instruction")

This class represents a Mips instruction (including mips64, mips32)

#### [` opcode `](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.Instruction.opcode>)

property opcode → lief.assembly.mips.OPCODE

The instruction opcode as defined in LLVM

#### [` operands `](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.Instruction.operands>)

property operands → Iterator[[lief.assembly.mips.Operand](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.Operand> "lief.assembly.mips.Operand") | None]

Iterator over the operands of the current instruction

## [Opcodes](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#opcodes>)

See: `lief.assembly.mips.OPCODE`

## [Operands](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#operands>)

![Inheritance diagram of lief._lief.assembly.mips.operands.Register, lief._lief.assembly.mips.Operand, lief._lief.assembly.mips.operands.Memory, lief._lief.assembly.mips.operands.Immediate, lief._lief.assembly.mips.operands.PCRelative](https://lief.re/doc/latest/_images/inheritance-eeaf75e9c505dcec9aa3ba6ade7153ea63bfb0c5.png)

### [` lief.assembly.mips.Operand `](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.Operand>)

class lief.assembly.mips.Operand

Bases: `object`

This class represents an operand for a Mips instruction

#### [` to_string `](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.Operand.to_string>)

property to\_string → str

Pretty representation of the operand

### [Immediate](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#immediate>)

![Inheritance diagram of lief._lief.assembly.mips.operands.Immediate](https://lief.re/doc/latest/_images/inheritance-37e9043c5783d6e86c6294e15cdcd976a0f7a0c6.png)

#### [` lief.assembly.mips.operands.Immediate `](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.operands.Immediate>)

class lief.assembly.mips.operands.Immediate

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.Operand> "lief._lief.assembly.mips.Operand")

This class represents an immediate operand (i.e. a constant)

For instance:

```text
addiu $4, $5, 8
              |
              +---> Immediate(8)
```

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.operands.Immediate.value>)

property value → int

The constant value wrapped by this operand

### [Register](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#register>)

![Inheritance diagram of lief._lief.assembly.mips.operands.Register](https://lief.re/doc/latest/_images/inheritance-30b1a484589a9681e1c14f4f9f29e10cb2174bef.png)

#### [` lief.assembly.mips.operands.Register `](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.operands.Register>)

class lief.assembly.mips.operands.Register

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.Operand> "lief._lief.assembly.mips.Operand")

This class represents a register operand.

For instance:

```text
move $4, $5
      |   |
      |   +---------> Register($5)
      |
      +-------------> Register($4)
```

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.operands.Register.value>)

property value → lief.assembly.mips.REG

The effective `lief.assembly.mips.REG` wrapped by this operand

### [Memory](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#memory>)

![Inheritance diagram of lief._lief.assembly.mips.operands.Memory](https://lief.re/doc/latest/_images/inheritance-5c81c5be92129966bb7a29ca710b5dd2e936a41c.png)

#### [` lief.assembly.mips.operands.Memory `](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.operands.Memory>)

class lief.assembly.mips.operands.Memory

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.Operand> "lief._lief.assembly.mips.Operand")

This class represents a memory operand.

```text
lw    $4, 8($5)            ldxc1  $f2, $4($7)
       |  | |                      |   |  |
+------+  | +---+          +-------+   |  +-----+
|         |     |          |           |        |
v         v     v          v           v        v
Reg      Disp  Base       Reg         Index    Base
```

##### [` base `](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.operands.Memory.base>)

property base → lief.assembly.mips.REG

The base register.

For `lw $4, 8($5)` it would return `$5`.

##### [` offset `](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.operands.Memory.offset>)

property offset → lief.assembly.mips.REG | int | None

The addressing offset.

It can be either:

- A register (e.g. `ldxc1 $f2, $4($7)`)
- A displacement (e.g. `lw $4, 8($5)`)

### [PCRelative](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#pcrelative>)

![Inheritance diagram of lief._lief.assembly.mips.operands.PCRelative](https://lief.re/doc/latest/_images/inheritance-5534e42d172cf61f28a7bc279d12a5fe5bde5bda.png)

#### [` lief.assembly.mips.operands.PCRelative `](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.operands.PCRelative>)

class lief.assembly.mips.operands.PCRelative

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.Operand> "lief._lief.assembly.mips.Operand")

This class represents a PC-relative operand.

```text
bal 0x100
    |
    v
 PC Relative operand
```

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.operands.PCRelative.value>)

property value → int

The effective value that is relative to the current `pc` register
