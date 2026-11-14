---
documentID: "3c525601b912f19deaf722c137d2cd1decf635e3a1f38b74199950a61ed333b9"
docname: "extended/disassembler/cpp/arch/arm"
title: "ARM - C++ Disassembler - LIEF Documentation"
description: "ARM C++ Disassembler. See LIEF::assembly::arm::OPCODE in include/asm/arm/opcodes.hpp"
canonical: "https://lief.re/doc/latest/extended/disassembler/cpp/arch/arm.html"
markdownURL: "https://lief.re/doc/latest/extended/disassembler/cpp/arch/arm.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "d1bf21eab8063f94553a25ce8530d8e8c42e32f00ab8dec798f460a8e8a0ba7e"
---

# [ARM](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/arm.html#arm>)

## [Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/arm.html#instruction>)

### [` Instruction `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/arm.html#_CPPv4N4LIEF8assembly3arm11InstructionE>)

class Instruction : public LIEF::assembly::[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction")

This class represents an ARM/Thumb instruction.

Public Functions

#### [` opcode `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/arm.html#_CPPv4NK4LIEF8assembly3arm11Instruction6opcodeEv>)

OPCODE opcode() const

The instruction opcode as defined in LLVM.

#### [` ~Instruction `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/arm.html#_CPPv4N4LIEF8assembly3arm11InstructionD0Ev>)

virtual ~Instruction() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/arm.html#_CPPv4N4LIEF8assembly3arm11Instruction7classofEPKN8assembly11InstructionE>)

static bool classof(const assembly::[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction") \*inst)

True if `inst` is an **effective** instance of [arm::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/arm.html#classLIEF_1_1assembly_1_1arm_1_1Instruction>).

## [Opcodes](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/arm.html#opcodes>)

See `LIEF::assembly::arm::OPCODE` in `include/asm/arm/opcodes.hpp`
