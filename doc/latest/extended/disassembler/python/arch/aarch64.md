---
documentID: "cc7a3c7c1e2b129e669f94b62ca4fb25fe6a1aa68e86734d8ce38d052d4bf113"
docname: "extended/disassembler/python/arch/aarch64"
title: "AArch64 - Python Disassembler - LIEF Documentation"
description: "AArch64 Python Disassembler. See: lief.assembly.aarch64.OPCODE"
canonical: "https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html"
markdownURL: "https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "0c2b3398b27b610fbcbc929e162b8196cb6ffaa99f61441afaf0fd99581a9430"
---

# [AArch64](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#aarch64>)

## [Instruction](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#instruction>)

![Inheritance diagram of lief._lief.assembly.aarch64.Instruction](https://lief.re/doc/latest/_images/inheritance-caf7ab0549f0f0eeda0ad1eac984b1f5d17d8106.png)

### [` lief.assembly.aarch64.Instruction `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.Instruction>)

class lief.assembly.aarch64.Instruction

Bases: [`Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief._lief.assembly.Instruction")

This class represents an AArch64 instruction

#### [` opcode `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.Instruction.opcode>)

property opcode → lief.assembly.aarch64.OPCODE

The instruction opcode as defined in LLVM

#### [` operands `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.Instruction.operands>)

property operands → Iterator[[lief.assembly.aarch64.Operand](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.Operand> "lief.assembly.aarch64.Operand") | None]

Iterator over the operands of the current instruction

## [Opcodes](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#opcodes>)

See: `lief.assembly.aarch64.OPCODE`

## [Operands](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#operands>)

![Inheritance diagram of lief._lief.assembly.aarch64.operands.Memory, lief._lief.assembly.aarch64.Operand, lief._lief.assembly.aarch64.operands.Register, lief._lief.assembly.aarch64.operands.PCRelative, lief._lief.assembly.aarch64.operands.Immediate](https://lief.re/doc/latest/_images/inheritance-ed672031de7ba2c25c50af32d1ef657759cae834.png)

### [` lief.assembly.aarch64.Operand `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.Operand>)

class lief.assembly.aarch64.Operand

Bases: `object`

This class represents an operand for an AArch64 instruction

#### [` to_string `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.Operand.to_string>)

property to\_string → str

Pretty representation of the operand

### [Immediate](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#immediate>)

![Inheritance diagram of lief._lief.assembly.aarch64.operands.Immediate](https://lief.re/doc/latest/_images/inheritance-830e4da462faa621cf984e14cc9341e728c271d5.png)

#### [` lief.assembly.aarch64.operands.Immediate `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Immediate>)

class lief.assembly.aarch64.operands.Immediate

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.Operand> "lief._lief.assembly.aarch64.Operand")

This class represents an immediate operand (i.e. a constant) For instance:

```text
mov x0, #8;
         |
         +---> Immediate(8)
```

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Immediate.value>)

property value → int

The constant value wrapped by this operand

### [Register](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#register>)

![Inheritance diagram of lief._lief.assembly.aarch64.operands.Register](https://lief.re/doc/latest/_images/inheritance-a34f6bbb80153e6510b17851ca56925cc9330090.png)

#### [` lief.assembly.aarch64.operands.Register `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Register>)

class lief.assembly.aarch64.operands.Register

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.Operand> "lief._lief.assembly.aarch64.Operand")

This class represents a register operand.

```text
mrs     x0, TPIDR_EL0
        |   |
 +------+   +-------+
 |                  |
 v                  v
 REG              SYSREG
```

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Register.value>)

property value → lief.assembly.aarch64.REG | lief.assembly.aarch64.SYSREG | None

The effective register as either: a `lief.assembly.aarch64.REG` or a `lief.assembly.aarch64.SYSREG`.

### [Memory](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#memory>)

![Inheritance diagram of lief._lief.assembly.aarch64.operands.Memory](https://lief.re/doc/latest/_images/inheritance-71f7277aed1eb2081476f0d0caeb7896e7807d3b.png)

#### [` lief.assembly.aarch64.operands.Memory `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory>)

class lief.assembly.aarch64.operands.Memory

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.Operand> "lief._lief.assembly.aarch64.Operand")

This class represents a memory operand.

```text
ldr     x0, [x1, x2, lsl #3]
             |   |    |
+------------+   |    +--------+
|                |             |
v                v             v
Base            Reg Offset    Shift
```

##### [` SHIFT `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.SHIFT>)

class SHIFT(*\*values*)

Bases: `Enum`

###### [` LSL `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.SHIFT.LSL>)

LSL = 1

###### [` SXTW `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.SHIFT.SXTW>)

SXTW = 5

###### [` SXTX `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.SHIFT.SXTX>)

SXTX = 4

###### [` UNKNOWN `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.SHIFT.UNKNOWN>)

UNKNOWN = 0

###### [` UXTW `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.SHIFT.UXTW>)

UXTW = 3

###### [` UXTX `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.SHIFT.UXTX>)

UXTX = 2

##### [` base `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.base>)

property base → lief.assembly.aarch64.REG

The base register.

For `str x3, [x8, #8]` it would return `x8`.

##### [` offset `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.offset>)

property offset → lief.assembly.aarch64.REG | int | None

The addressing offset.

It can be either:

- A register (e.g. `ldr x0, [x1, x3]`)
- An offset (e.g. `ldr x0, [x1, #8]`)

##### [` shift `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.shift>)

property shift → [lief.assembly.aarch64.operands.Memory.shift\_info\_t](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.shift_info_t> "lief.assembly.aarch64.operands.Memory.shift_info_t")

Shift information.

For instance, for `ldr x1, [x2, x3, lsl #3]` it would return a [`LSL`](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.SHIFT.LSL> "lief.assembly.aarch64.operands.Memory.SHIFT.LSL") with a [`value`](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.shift_info_t.value> "lief.assembly.aarch64.operands.Memory.shift_info_t.value") set to `3`.

##### [` shift_info_t `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.shift_info_t>)

class shift\_info\_t

Bases: `object`

This structure holds shift info (type + value)

###### [` type `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.shift_info_t.type>)

property type → [lief.assembly.aarch64.operands.Memory.SHIFT](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.SHIFT> "lief.assembly.aarch64.operands.Memory.SHIFT")

###### [` value `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.Memory.shift_info_t.value>)

property value → int

### [PCRelative](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#pcrelative>)

![Inheritance diagram of lief._lief.assembly.aarch64.operands.PCRelative](https://lief.re/doc/latest/_images/inheritance-ceeee5807cd77cba3ffa4fb62a497f1147047f4c.png)

#### [` lief.assembly.aarch64.operands.PCRelative `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.PCRelative>)

class lief.assembly.aarch64.operands.PCRelative

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.Operand> "lief._lief.assembly.aarch64.Operand")

This class represents a PC-relative operand.

```text
ldr x0, #8
        |
        v
 PC Relative operand
```

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.operands.PCRelative.value>)

property value → int

The effective value that is relative to the current `pc` register
