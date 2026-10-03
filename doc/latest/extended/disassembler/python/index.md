---
documentID: "8191668a8a6dfa2b2fb6f4967c98282ea3d810ec6c8b16a343d44f54f2c78ff9"
docname: "extended/disassembler/python/index"
title: "Disassembler Python API - LIEF Documentation"
description: "Disassembler Python API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/extended/disassembler/python/index.html"
markdownURL: "https://lief.re/doc/latest/extended/disassembler/python/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "69c671d0a75824cfae62d58a520d84f481a6c68ed58efbd825e9a42a76050a95"
---

# [Python](<https://lief.re/doc/latest/extended/disassembler/python/index.html#python>)

## [Architectures](<https://lief.re/doc/latest/extended/disassembler/python/index.html#architectures>)

Architectures

- [x86/x86-64](<https://lief.re/doc/latest/extended/disassembler/python/arch/x86.html>)
- [AArch64](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html>)
- [ARM](<https://lief.re/doc/latest/extended/disassembler/python/arch/arm.html>)
- [eBPF](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html>)
- [RISC-V](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html>)
- [Mips](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html>)
- [PowerPC](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html>)

## [Engine](<https://lief.re/doc/latest/extended/disassembler/python/index.html#engine>)

### [` lief.assembly.Engine `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Engine>)

class lief.assembly.Engine

Bases: `object`

This class interfaces the assembler/disassembler support

## [Instruction](<https://lief.re/doc/latest/extended/disassembler/python/index.html#instruction>)

![Inheritance diagram of lief._lief.assembly.mips.Instruction, lief._lief.assembly.Instruction, lief._lief.assembly.powerpc.Instruction, lief._lief.assembly.riscv.Instruction, lief._lief.assembly.arm.Instruction, lief._lief.assembly.x86.Instruction, lief._lief.assembly.aarch64.Instruction, lief._lief.assembly.ebpf.Instruction](https://lief.re/doc/latest/_images/inheritance-60d3df8e7435025e255455b160784475561c5b63.png)

### [` lief.assembly.Instruction `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction>)

class lief.assembly.Instruction

Bases: `object`

This class represents an assembly instruction

#### [` MemoryAccess `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.MemoryAccess>)

class MemoryAccess(*\*values*)

Bases: `Flag`

##### [` NONE `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.MemoryAccess.NONE>)

NONE = 0

##### [` READ `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.MemoryAccess.READ>)

READ = 1

##### [` WRITE `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.MemoryAccess.WRITE>)

WRITE = 2

##### [` from_value `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.MemoryAccess.from_value>)

from\_value(*arg: int*) → [lief.assembly.Instruction.MemoryAccess](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.MemoryAccess> "lief.assembly.Instruction.MemoryAccess") = &lt;nanobind.nb\_func object&gt;

#### [` address `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.address>)

property address → int

Address of the instruction

#### [` branch_target `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.branch_target>)

property branch\_target → int | [lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief.lief_errors")

Given a [`is_branch`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_branch> "lief.assembly.Instruction.is_branch") instruction, try to evaluate the address of the destination.

#### [` is_add `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_add>)

property is\_add → bool

True if the instruction performs an arithmetic addition.

#### [` is_barrier `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_barrier>)

property is\_barrier → bool

True if the instruction prevents executing the instruction that immediately follows the current. This includes return or unconditional branch instructions

#### [` is_bitcast `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_bitcast>)

property is\_bitcast → bool

True if the instruction is doing a bitcast

#### [` is_branch `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_branch>)

property is\_branch → bool

True if the instruction is a branch

#### [` is_call `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_call>)

property is\_call → bool

True if the instruction is a call

#### [` is_compare `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_compare>)

property is\_compare → bool

True if the instruction is a comparison

#### [` is_conditional_branch `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_conditional_branch>)

property is\_conditional\_branch → bool

True if the instruction is **conditionally** jumping to the next instruction **or** an instruction into some other basic block.

#### [` is_indirect_branch `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_indirect_branch>)

property is\_indirect\_branch → bool

True if the instruction is an indirect branch.

This includes instructions that branch through a register (e.g. `jmp rax`, `br x1`).

#### [` is_memory_access `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_memory_access>)

property is\_memory\_access → bool

True if the instruction performs a memory access

#### [` is_move_immediate `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_move_immediate>)

property is\_move\_immediate → bool

True if the instruction is moving an immediate

#### [` is_move_reg `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_move_reg>)

property is\_move\_reg → bool

True if the instruction is a register to register move.

#### [` is_return `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_return>)

property is\_return → bool

True if the instruction is a return

#### [` is_syscall `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_syscall>)

property is\_syscall → bool

True if the instruction is a syscall

#### [` is_terminator `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_terminator>)

property is\_terminator → bool

True if the instruction marks the end of a basic block

#### [` is_trap `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_trap>)

property is\_trap → bool

True if the instruction is a trap.

- On `x86/x86-64` this includes the `ud1/ud2` instructions
- On `AArch64` this includes the `brk/udf` instructions

#### [` is_unconditional_branch `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.is_unconditional_branch>)

property is\_unconditional\_branch → bool

True if the instruction is jumping (**unconditionally**) to some other basic block.

#### [` memory_access `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.memory_access>)

property memory\_access → [lief.assembly.Instruction.MemoryAccess](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.MemoryAccess> "lief.assembly.Instruction.MemoryAccess")

Memory access flags

#### [` mnemonic `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.mnemonic>)

property mnemonic → str

Instruction mnemonic (e.g. `br`)

#### [` raw `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.raw>)

property raw → bytes

Raw bytes of the current instruction

#### [` size `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.size>)

property size → int

Size of the instruction in bytes

#### [` to_string `](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction.to_string>)

to\_string(*self*, *with\_address: bool = True*) → str

Representation of the current instruction in a pretty assembly way
