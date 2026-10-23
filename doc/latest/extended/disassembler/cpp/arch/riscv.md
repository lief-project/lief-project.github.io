---
documentID: "c47f722d47efba5f635ff0ff517f9b452bc679bb3b0c426d3b61285a3d7bb05e"
docname: "extended/disassembler/cpp/arch/riscv"
title: "RISC-V - C++ Disassembler - LIEF Documentation"
description: "RISC-V C++ Disassembler. See LIEF::assembly::riscv::OPCODE in include/asm/riscv/opcodes.hpp"
canonical: "https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html"
markdownURL: "https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "e7768ad4d5236895b6e5023b81a2641d16e7f6b89286ed37ca2148c58def4a9a"
---

# [RISC-V](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#risc-v>)

## [Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#instruction>)

### [` Instruction `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv11InstructionE>)

class Instruction : public LIEF::assembly::[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction")

This class represents a RISC-V (32 or 64 bit) instruction.

Public Types

#### [` operands_it `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv11Instruction11operands_itE>)

using operands\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE> "LIEF::assembly::riscv::Operand")::[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratorE> "LIEF::assembly::riscv::Operand::Iterator")&gt;

Public Functions

#### [` opcode `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4NK4LIEF8assembly5riscv11Instruction6opcodeEv>)

OPCODE opcode() const

The instruction opcode as defined in LLVM.

#### [` operands `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4NK4LIEF8assembly5riscv11Instruction8operandsEv>)

[operands\_it](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv11Instruction11operands_itE> "LIEF::assembly::riscv::Instruction::operands_it") operands() const

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction_1_1Iterator>) over the operands of the current instruction.

#### [` ~Instruction `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv11InstructionD0Ev>)

virtual ~Instruction() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv11Instruction7classofEPKN8assembly11InstructionE>)

static bool classof(const assembly::[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction") \*inst)

True if `inst` is an **effective** instance of [riscv::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#classLIEF_1_1assembly_1_1riscv_1_1Instruction>).

## [Opcodes](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#opcodes>)

See `LIEF::assembly::riscv::OPCODE` in `include/asm/riscv/opcodes.hpp`

## [Operands](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#operands>)

### [` Operand `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE>)

class Operand

This class represents an operand for a RISC-V instruction.

Subclassed by [LIEF::assembly::riscv::operands::Immediate](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#classLIEF_1_1assembly_1_1riscv_1_1operands_1_1Immediate>), [LIEF::assembly::riscv::operands::Memory](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#classLIEF_1_1assembly_1_1riscv_1_1operands_1_1Memory>), [LIEF::assembly::riscv::operands::PCRelative](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#classLIEF_1_1assembly_1_1riscv_1_1operands_1_1PCRelative>), [LIEF::assembly::riscv::operands::Register](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#classLIEF_1_1assembly_1_1riscv_1_1operands_1_1Register>)

Public Functions

#### [` to_string `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4NK4LIEF8assembly5riscv7Operand9to_stringEv>)

std::string to\_string() const

Pretty representation of the operand.

#### [` Tas `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4I0ENK4LIEF8assembly5riscv7Operand2asEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4I0ENK4LIEF8assembly5riscv7Operand2asEPK1Tv> "LIEF::assembly::riscv::Operand::as::T") \*as() const

This function can be used to **down cast** an [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#classLIEF_1_1assembly_1_1riscv_1_1Operand>) instance:

```cpp
std::unique_ptr<assembly::riscv::Operand> op = ...;
if (const auto* imm = inst->as<assembly::riscv::operands::Immediate>()) {
  const int64_t value = imm->value();
}
```

#### [` ~Operand `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandD0Ev>)

virtual ~Operand()

Friends

#### [` operator<< `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandlsERNSt7ostreamERK7Operand>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE> "LIEF::assembly::riscv::Operand") &amp;op)

#### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratorE> "LIEF::assembly::riscv::Operand::Iterator"), std::forward\_iterator\_tag, [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE> "LIEF::assembly::riscv::Operand"), std::ptrdiff\_t, const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE> "LIEF::assembly::riscv::Operand")\*, const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE> "LIEF::assembly::riscv::Operand")&amp;&gt;

**Forward** iterator that lazily disassembles riscv [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#classLIEF_1_1assembly_1_1riscv_1_1Operand>).

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8Iterator14implementationE>)

using implementation = details::OperandIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8Iterator8IteratorENSt10unique_ptrIN7details9OperandItEEE>)

Iterator(std::unique\_ptr&lt;details::OperandIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8Iterator8IteratorERK8Iterator> "LIEF::assembly::riscv::Operand::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratorE> "LIEF::assembly::riscv::Operand::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratorE> "LIEF::assembly::riscv::Operand::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8Iterator8IteratorERR8Iterator> "LIEF::assembly::riscv::Operand::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratorE> "LIEF::assembly::riscv::Operand::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratorE> "LIEF::assembly::riscv::Operand::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratorE> "LIEF::assembly::riscv::Operand::Iterator") &amp;operator++()

##### [` operator* `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4NK4LIEF8assembly5riscv7Operand8IteratormlEv>)

const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE> "LIEF::assembly::riscv::Operand") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4NK4LIEF8assembly5riscv7Operand8IteratorptEv>)

const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE> "LIEF::assembly::riscv::Operand") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8Iterator5yieldEv>)

std::unique\_ptr&lt;[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE> "LIEF::assembly::riscv::Operand")&gt; yield()

Transfer ownership of the operand at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratorppEi>)

inline DerivedT operator++(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratorE> "LIEF::assembly::riscv::Operand::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratorE> "LIEF::assembly::riscv::Operand::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratorE> "LIEF::assembly::riscv::Operand::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7Operand8IteratorE> "LIEF::assembly::riscv::Operand::Iterator") &amp;RHS)

### [Immediate](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#immediate>)

#### [` Immediate `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands9ImmediateE>)

class Immediate : public LIEF::assembly::riscv::[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE> "LIEF::assembly::riscv::Operand")

This class represents an immediate operand (i.e. a constant).

For instance:

```text
addi a0, a1, 8
             |
             +---> Immediate(8)
```

Public Functions

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4NK4LIEF8assembly5riscv8operands9Immediate5valueEv>)

int64\_t value() const

The constant value wrapped by this operand.

##### [` ~Immediate `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands9ImmediateD0Ev>)

~Immediate() override = default

Public Static Functions

##### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands9Immediate7classofEPK7Operand>)

static bool classof(const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE> "LIEF::assembly::riscv::Operand") \*op)

### [Register](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#register>)

#### [` Register `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8RegisterE>)

class Register : public LIEF::assembly::riscv::[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE> "LIEF::assembly::riscv::Operand")

This class represents a register operand.

RISC-V exposes two kinds of registers: regular registers (GPR, FPR, vector, …) and control and status registers (CSR / system registers).

```text
csrr    a0, mstatus
        |   |
 +------+   +-------+
 |                  |
 v                  v
 REG              SYSREG
```

Public Functions

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4NK4LIEF8assembly5riscv8operands8Register5valueEv>)

[reg\_t](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8Register5reg_tE> "LIEF::assembly::riscv::operands::Register::reg_t") value() const

The effective register as either: a REG or a SYSREG.

##### [` ~Register `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8RegisterD0Ev>)

~Register() override = default

Public Static Functions

##### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8Register7classofEPK7Operand>)

static bool classof(const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE> "LIEF::assembly::riscv::Operand") \*op)

##### [` reg_t `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8Register5reg_tE>)

struct reg\_t

Public Types

###### [` TYPE `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8Register5reg_t4TYPEE>)

enum class TYPE

Enum type used to discriminate the anonymous union.

*Values:*

###### [` NONE `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8Register5reg_t4TYPE4NONEE>)

enumerator NONE = 0

###### [` SYSREG `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8Register5reg_t4TYPE6SYSREGE>)

enumerator SYSREG

The union holds a sysreg attribute.

###### [` REG `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8Register5reg_t4TYPE3REGE>)

enumerator REG

The union holds the reg attribute.

Public Members

###### [` [anonymous] `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8Register5reg_tUt48_071227227016117242362225201172125003256360303342E>)

union LIEF::assembly::riscv::operands::[Register](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8RegisterE> "LIEF::assembly::riscv::operands::Register")::[reg\_t](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8Register5reg_tE> "LIEF::assembly::riscv::operands::Register::reg_t")::[anonymous] [anonymous]

###### [` type `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8Register5reg_t4typeE>)

[TYPE](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8Register5reg_t4TYPEE> "LIEF::assembly::riscv::operands::Register::reg_t::TYPE") type = [TYPE](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8Register5reg_t4TYPEE> "LIEF::assembly::riscv::operands::Register::reg_t::TYPE")::[NONE](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8Register5reg_t4TYPE4NONEE> "LIEF::assembly::riscv::operands::Register::reg_t::TYPE::NONE")

###### [` [anonymous] `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8Register5reg_tUt8_unnamed0E>)

union [anonymous]

Public Members

###### [` reg `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8Register5reg_tUt8_unnamed03regE>)

REG reg

###### [` sysreg `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands8Register5reg_tUt8_unnamed06sysregE>)

SYSREG sysreg

### [Memory](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#memory>)

#### [` Memory `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands6MemoryE>)

class Memory : public LIEF::assembly::riscv::[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE> "LIEF::assembly::riscv::Operand")

This class represents a memory operand.

```text
lw   a0, 8(sp)
         |  |
         |  +----> Base: sp
         |
         +-------> Displacement: 8
```

Public Functions

##### [` base `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4NK4LIEF8assembly5riscv8operands6Memory4baseEv>)

REG base() const

The base register.

For `lw a0, 8(sp)` it would return `sp`.

##### [` displacement `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4NK4LIEF8assembly5riscv8operands6Memory12displacementEv>)

int64\_t displacement() const

The displacement value.

For `lw a0, 8(sp)` it would return `8`.

##### [` ~Memory `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands6MemoryD0Ev>)

~Memory() override = default

Public Static Functions

##### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands6Memory7classofEPK7Operand>)

static bool classof(const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE> "LIEF::assembly::riscv::Operand") \*op)

### [PCRelative](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#pcrelative>)

#### [` PCRelative `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands10PCRelativeE>)

class PCRelative : public LIEF::assembly::riscv::[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE> "LIEF::assembly::riscv::Operand")

This class represents a PC-relative operand.

```text
auipc a0, 0x1
          |
          v
       PC Relative operand
```

Public Functions

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4NK4LIEF8assembly5riscv8operands10PCRelative5valueEv>)

int64\_t value() const

The effective value that is relative to the current `pc` register.

##### [` ~PCRelative `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands10PCRelativeD0Ev>)

~PCRelative() override = default

Public Static Functions

##### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv8operands10PCRelative7classofEPK7Operand>)

static bool classof(const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv7OperandE> "LIEF::assembly::riscv::Operand") \*op)
