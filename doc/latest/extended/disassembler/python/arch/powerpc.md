---
documentID: "bbad85ae06f6c21d37813c61721b1878411ef700c318098ec4e9f4274f859d94"
docname: "extended/disassembler/python/arch/powerpc"
title: "PowerPC - Python Disassembler - LIEF Documentation"
description: "PowerPC Python Disassembler. See: lief.assembly.powerpc.OPCODE"
canonical: "https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html"
markdownURL: "https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "628966581e165c5624cca7601577d4122b875cf2a325d6b4ef6ba430c5b6f166"
---

# [PowerPC](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#powerpc>)

## [Instruction](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#instruction>)

![Inheritance diagram of lief._lief.assembly.powerpc.Instruction](https://lief.re/doc/latest/_images/inheritance-1cf67e8078addc75f1332b7c877f100b3902b09c.png)

### [` lief.assembly.powerpc.Instruction `](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.Instruction>)

class lief.assembly.powerpc.Instruction

Bases: [`Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief._lief.assembly.Instruction")

This class represents a PowerPC (ppc64/ppc32) instruction

#### [` opcode `](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.Instruction.opcode>)

property opcode → lief.assembly.powerpc.OPCODE

The instruction opcode as defined in LLVM

#### [` operands `](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.Instruction.operands>)

property operands → Iterator[[lief.assembly.powerpc.Operand](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.Operand> "lief.assembly.powerpc.Operand") | None]

Iterator over the operands of the current instruction

## [Opcodes](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#opcodes>)

See: `lief.assembly.powerpc.OPCODE`

## [Operands](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#operands>)

![Inheritance diagram of lief._lief.assembly.powerpc.Operand, lief._lief.assembly.powerpc.operands.Memory, lief._lief.assembly.powerpc.operands.Immediate, lief._lief.assembly.powerpc.operands.PCRelative, lief._lief.assembly.powerpc.operands.Register](https://lief.re/doc/latest/_images/inheritance-3eb5e96ae703af8b237e0a1626e44f1c2b2e3e8f.png)

### [` lief.assembly.powerpc.Operand `](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.Operand>)

class lief.assembly.powerpc.Operand

Bases: `object`

This class represents an operand for a PowerPC instruction

#### [` to_string `](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.Operand.to_string>)

property to\_string → str

Pretty representation of the operand

### [Immediate](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#immediate>)

![Inheritance diagram of lief._lief.assembly.powerpc.operands.Immediate](https://lief.re/doc/latest/_images/inheritance-9006ef1f47a270d20517f90edbbc1ab88cf7a4ca.png)

#### [` lief.assembly.powerpc.operands.Immediate `](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.operands.Immediate>)

class lief.assembly.powerpc.operands.Immediate

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.Operand> "lief._lief.assembly.powerpc.Operand")

This class represents an immediate operand (i.e. a constant)

For instance:

```text
li 3, 8
      |
      +---> Immediate(8)
```

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.operands.Immediate.value>)

property value → int

The constant value wrapped by this operand

### [Register](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#register>)

![Inheritance diagram of lief._lief.assembly.powerpc.operands.Register](https://lief.re/doc/latest/_images/inheritance-9c98ab6c4332b2d62d6334eeffeb68503505ed47.png)

#### [` lief.assembly.powerpc.operands.Register `](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.operands.Register>)

class lief.assembly.powerpc.operands.Register

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.Operand> "lief._lief.assembly.powerpc.Operand")

This class represents a register operand.

For instance:

```text
add 3, 4, 5
     |  |  |
     |  |  +---------> Register(5)
     |  +------------> Register(4)
     +---------------> Register(3)
```

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.operands.Register.value>)

property value → lief.assembly.powerpc.REG

The effective `lief.assembly.powerpc.REG` wrapped by this operand

### [Memory](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#memory>)

![Inheritance diagram of lief._lief.assembly.powerpc.operands.Memory](https://lief.re/doc/latest/_images/inheritance-01cc9e5dc1eba927ff9c3ec2d9691186a1300a95.png)

#### [` lief.assembly.powerpc.operands.Memory `](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.operands.Memory>)

class lief.assembly.powerpc.operands.Memory

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.Operand> "lief._lief.assembly.powerpc.Operand")

This class represents a memory operand.

```text
lwz   3, 8(4)              lwzx   3, 4, 5
       |  |                       |  |  |
+------+  +---+            +------+   |  +---+
|             |           |          |      |
v             v           v          v      v
Disp         Base        Reg        Base   Index
```

##### [` base `](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.operands.Memory.base>)

property base → lief.assembly.powerpc.REG

The base register.

For `lwz 3, 8(4)` it would return `4`.

##### [` offset `](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.operands.Memory.offset>)

property offset → lief.assembly.powerpc.REG | int | None

The addressing offset.

It can be either:

- An index register (e.g. `lwzx 3, 4, 5`)
- A displacement (e.g. `lwz 3, 8(4)`)

### [PCRelative](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#pcrelative>)

![Inheritance diagram of lief._lief.assembly.powerpc.operands.PCRelative](https://lief.re/doc/latest/_images/inheritance-6ecd9d1483155c2c08def9ccd9e64eceab0e6688.png)

#### [` lief.assembly.powerpc.operands.PCRelative `](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.operands.PCRelative>)

class lief.assembly.powerpc.operands.PCRelative

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.Operand> "lief._lief.assembly.powerpc.Operand")

This class represents a PC-relative operand.

```text
bl 0x100
   |
   v
 PC Relative operand
```

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.operands.PCRelative.value>)

property value → int

The effective value that is relative to the current `pc` register
