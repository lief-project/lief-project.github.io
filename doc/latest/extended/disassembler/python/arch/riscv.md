---
documentID: "46b9dc425d6956638c07ced520f8d8946c1a4433775a52f8b1d1d69d5cf42137"
docname: "extended/disassembler/python/arch/riscv"
title: "RISC-V - Python Disassembler - LIEF Documentation"
description: "RISC-V Python Disassembler. See: lief.assembly.riscv.OPCODE"
canonical: "https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html"
markdownURL: "https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "8fbd73700f7a6142d08945833a3a96667d35c63662c67e65ce1402773583681e"
---

# [RISC-V](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#risc-v>)

## [Instruction](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#instruction>)

![Inheritance diagram of lief._lief.assembly.riscv.Instruction](https://lief.re/doc/latest/_images/inheritance-57287a1f2d9c1f7cf0b8c596c93edf974afb9096.png)

### [` lief.assembly.riscv.Instruction `](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.Instruction>)

class lief.assembly.riscv.Instruction

Bases: [`Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief._lief.assembly.Instruction")

This class represents a RISC-V (32 or 64 bit) instruction

#### [` opcode `](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.Instruction.opcode>)

property opcode → lief.assembly.riscv.OPCODE

The instruction opcode as defined in LLVM

#### [` operands `](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.Instruction.operands>)

property operands → Iterator[[lief.assembly.riscv.Operand](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.Operand> "lief.assembly.riscv.Operand") | None]

Iterator over the operands of the current instruction

## [Opcodes](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#opcodes>)

See: `lief.assembly.riscv.OPCODE`

## [Operands](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#operands>)

![Inheritance diagram of lief._lief.assembly.riscv.operands.Register, lief._lief.assembly.riscv.operands.Memory, lief._lief.assembly.riscv.operands.Immediate, lief._lief.assembly.riscv.Operand, lief._lief.assembly.riscv.operands.PCRelative](https://lief.re/doc/latest/_images/inheritance-0ef078aee49a0dde359ac48bb2532b1ec04ba2f1.png)

### [` lief.assembly.riscv.Operand `](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.Operand>)

class lief.assembly.riscv.Operand

Bases: `object`

This class represents an operand for a RISC-V instruction

#### [` to_string `](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.Operand.to_string>)

property to\_string → str

Pretty representation of the operand

### [Immediate](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#immediate>)

![Inheritance diagram of lief._lief.assembly.riscv.operands.Immediate](https://lief.re/doc/latest/_images/inheritance-399762e71ac5227317119948b03747aee76931c0.png)

#### [` lief.assembly.riscv.operands.Immediate `](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.operands.Immediate>)

class lief.assembly.riscv.operands.Immediate

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.Operand> "lief._lief.assembly.riscv.Operand")

This class represents an immediate operand (i.e. a constant)

For instance:

```text
addi a0, a1, 8
             |
             +---> Immediate(8)
```

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.operands.Immediate.value>)

property value → int

The constant value wrapped by this operand

### [Register](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#register>)

![Inheritance diagram of lief._lief.assembly.riscv.operands.Register](https://lief.re/doc/latest/_images/inheritance-c43b70c31bd97734b7c05913a86be66470d0426d.png)

#### [` lief.assembly.riscv.operands.Register `](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.operands.Register>)

class lief.assembly.riscv.operands.Register

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.Operand> "lief._lief.assembly.riscv.Operand")

This class represents a register operand.

```text
csrr    a0, mstatus
        |   |
 +------+   +-------+
 |                  |
 v                  v
 REG              SYSREG
```

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.operands.Register.value>)

property value → lief.assembly.riscv.REG | lief.assembly.riscv.SYSREG | None

The effective register as either: a `lief.assembly.riscv.REG` or a `lief.assembly.riscv.SYSREG`.

### [Memory](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#memory>)

![Inheritance diagram of lief._lief.assembly.riscv.operands.Memory](https://lief.re/doc/latest/_images/inheritance-fd18558f2548db91e12d3f0a40f5066cd77065b4.png)

#### [` lief.assembly.riscv.operands.Memory `](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.operands.Memory>)

class lief.assembly.riscv.operands.Memory

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.Operand> "lief._lief.assembly.riscv.Operand")

This class represents a memory operand.

```text
lw   a0, 8(sp)
         |  |
         |  +----> Base: sp
         |
         +-------> Displacement: 8
```

##### [` base `](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.operands.Memory.base>)

property base → lief.assembly.riscv.REG

The base register.

For `lw a0, 8(sp)` it would return `sp`.

##### [` displacement `](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.operands.Memory.displacement>)

property displacement → int

The displacement value.

For `lw a0, 8(sp)` it would return `8`.

### [PCRelative](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#pcrelative>)

![Inheritance diagram of lief._lief.assembly.riscv.operands.PCRelative](https://lief.re/doc/latest/_images/inheritance-268a02d8a8e9db451a4e6f9182ea1f9b98d61f2d.png)

#### [` lief.assembly.riscv.operands.PCRelative `](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.operands.PCRelative>)

class lief.assembly.riscv.operands.PCRelative

Bases: [`Operand`](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.Operand> "lief._lief.assembly.riscv.Operand")

This class represents a PC-relative operand.

```text
auipc a0, 0x1
          |
          v
       PC Relative operand
```

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.operands.PCRelative.value>)

property value → int

The effective value that is relative to the current `pc` register
