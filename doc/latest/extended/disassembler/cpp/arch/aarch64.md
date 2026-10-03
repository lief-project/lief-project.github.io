---
documentID: "03505adf58bbae96640ed2364838a7da4718662c60d2b39210435d8c1e06290f"
docname: "extended/disassembler/cpp/arch/aarch64"
title: "AArch64 - C++ Disassembler - LIEF Documentation"
description: "AArch64 C++ Disassembler. See LIEF::assembly::aarch64::OPCODE in include/asm/aarch64/opcodes.hpp"
canonical: "https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html"
markdownURL: "https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "377848812c9ca6c7f3e03fb82fd9bcb5dfa25def201bea5fc6c79d45c7b21ca0"
---

# [AArch64](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#aarch64>)

## [Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#instruction>)

### [` Instruction `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch6411InstructionE>)

class Instruction : public LIEF::assembly::[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction")

This class represents an AArch64 instruction.

Public Types

#### [` operands_it `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch6411Instruction11operands_itE>)

using operands\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE> "LIEF::assembly::aarch64::Operand")::[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratorE> "LIEF::assembly::aarch64::Operand::Iterator")&gt;

Public Functions

#### [` opcode `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4NK4LIEF8assembly7aarch6411Instruction6opcodeEv>)

OPCODE opcode() const

The instruction opcode as defined in LLVM.

#### [` operands `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4NK4LIEF8assembly7aarch6411Instruction8operandsEv>)

[operands\_it](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch6411Instruction11operands_itE> "LIEF::assembly::aarch64::Instruction::operands_it") operands() const

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction_1_1Iterator>) over the operands of the current instruction.

#### [` ~Instruction `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch6411InstructionD0Ev>)

virtual ~Instruction() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch6411Instruction7classofEPKN8assembly11InstructionE>)

static bool classof(const assembly::[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction") \*inst)

True if `inst` is an **effective** instance of [aarch64::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#classLIEF_1_1assembly_1_1aarch64_1_1Instruction>).

## [Opcodes](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#opcodes>)

See `LIEF::assembly::aarch64::OPCODE` in `include/asm/aarch64/opcodes.hpp`

## [Operands](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#operands>)

### [` Operand `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE>)

class Operand

This class represents an operand for an AArch64 instruction.

Subclassed by [LIEF::assembly::aarch64::operands::Immediate](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#classLIEF_1_1assembly_1_1aarch64_1_1operands_1_1Immediate>), [LIEF::assembly::aarch64::operands::Memory](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#classLIEF_1_1assembly_1_1aarch64_1_1operands_1_1Memory>), [LIEF::assembly::aarch64::operands::PCRelative](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#classLIEF_1_1assembly_1_1aarch64_1_1operands_1_1PCRelative>), [LIEF::assembly::aarch64::operands::Register](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#classLIEF_1_1assembly_1_1aarch64_1_1operands_1_1Register>)

Public Functions

#### [` to_string `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4NK4LIEF8assembly7aarch647Operand9to_stringEv>)

std::string to\_string() const

Pretty representation of the operand.

#### [` Tas `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4I0ENK4LIEF8assembly7aarch647Operand2asEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4I0ENK4LIEF8assembly7aarch647Operand2asEPK1Tv> "LIEF::assembly::aarch64::Operand::as::T") \*as() const

This function can be used to **down cast** an [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#classLIEF_1_1assembly_1_1aarch64_1_1Operand>) instance:

```cpp
std::unique_ptr<assembly::aarch64::Operand> op = ...;
if (const auto* imm = inst->as<assembly::aarch64::operands::Immediate>()) {
  const int64_t value = imm->value();
}
```

#### [` ~Operand `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandD0Ev>)

virtual ~Operand()

Friends

#### [` operator<< `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandlsERNSt7ostreamERK7Operand>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE> "LIEF::assembly::aarch64::Operand") &amp;op)

#### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratorE> "LIEF::assembly::aarch64::Operand::Iterator"), std::forward\_iterator\_tag, [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE> "LIEF::assembly::aarch64::Operand"), std::ptrdiff\_t, const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE> "LIEF::assembly::aarch64::Operand")\*, const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE> "LIEF::assembly::aarch64::Operand")&amp;&gt;

**Forward** iterator that lazily disassembles aarch64 [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#classLIEF_1_1assembly_1_1aarch64_1_1Operand>).

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8Iterator14implementationE>)

using implementation = details::OperandIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8Iterator8IteratorENSt10unique_ptrIN7details9OperandItEEE>)

Iterator(std::unique\_ptr&lt;details::OperandIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8Iterator8IteratorERK8Iterator> "LIEF::assembly::aarch64::Operand::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratorE> "LIEF::assembly::aarch64::Operand::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratorE> "LIEF::assembly::aarch64::Operand::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8Iterator8IteratorERR8Iterator> "LIEF::assembly::aarch64::Operand::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratorE> "LIEF::assembly::aarch64::Operand::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratorE> "LIEF::assembly::aarch64::Operand::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratorE> "LIEF::assembly::aarch64::Operand::Iterator") &amp;operator++()

##### [` operator* `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4NK4LIEF8assembly7aarch647Operand8IteratormlEv>)

const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE> "LIEF::assembly::aarch64::Operand") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4NK4LIEF8assembly7aarch647Operand8IteratorptEv>)

const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE> "LIEF::assembly::aarch64::Operand") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8Iterator5yieldEv>)

std::unique\_ptr&lt;[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE> "LIEF::assembly::aarch64::Operand")&gt; yield()

Transfer ownership of the operand at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratorppEi>)

inline DerivedT operator++(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratorE> "LIEF::assembly::aarch64::Operand::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratorE> "LIEF::assembly::aarch64::Operand::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratorE> "LIEF::assembly::aarch64::Operand::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647Operand8IteratorE> "LIEF::assembly::aarch64::Operand::Iterator") &amp;RHS)

### [Immediate](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#immediate>)

#### [` Immediate `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands9ImmediateE>)

class Immediate : public LIEF::assembly::aarch64::[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE> "LIEF::assembly::aarch64::Operand")

This class represents an immediate operand (i.e. a constant).

For instance:

```text
mov x0, #8;
         |
         +---> Immediate(8)
```

Public Functions

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4NK4LIEF8assembly7aarch648operands9Immediate5valueEv>)

int64\_t value() const

The constant value wrapped by this operand.

##### [` ~Immediate `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands9ImmediateD0Ev>)

~Immediate() override = default

Public Static Functions

##### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands9Immediate7classofEPK7Operand>)

static bool classof(const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE> "LIEF::assembly::aarch64::Operand") \*op)

### [Register](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#register>)

#### [` Register `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8RegisterE>)

class Register : public LIEF::assembly::aarch64::[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE> "LIEF::assembly::aarch64::Operand")

This class represents a register operand.

```text
mrs     x0, TPIDR_EL0
        |   |
 +------+   +-------+
 |                  |
 v                  v
 REG              SYSREG
```

Public Functions

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4NK4LIEF8assembly7aarch648operands8Register5valueEv>)

[reg\_t](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8Register5reg_tE> "LIEF::assembly::aarch64::operands::Register::reg_t") value() const

The effective register as either: a REG or a SYSREG.

##### [` ~Register `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8RegisterD0Ev>)

~Register() override = default

Public Static Functions

##### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8Register7classofEPK7Operand>)

static bool classof(const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE> "LIEF::assembly::aarch64::Operand") \*op)

##### [` reg_t `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8Register5reg_tE>)

struct reg\_t

Public Types

###### [` TYPE `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8Register5reg_t4TYPEE>)

enum class TYPE

Enum type used to discriminate the anonymous union.

*Values:*

###### [` NONE `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8Register5reg_t4TYPE4NONEE>)

enumerator NONE = 0

###### [` SYSREG `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8Register5reg_t4TYPE6SYSREGE>)

enumerator SYSREG

The union holds a sysreg attribute.

###### [` REG `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8Register5reg_t4TYPE3REGE>)

enumerator REG

The union holds the reg attribute.

Public Members

###### [` [anonymous] `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8Register5reg_tUt48_020037050041336027014354222310224251155266342371E>)

union LIEF::assembly::aarch64::operands::[Register](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8RegisterE> "LIEF::assembly::aarch64::operands::Register")::[reg\_t](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8Register5reg_tE> "LIEF::assembly::aarch64::operands::Register::reg_t")::[anonymous] [anonymous]

###### [` type `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8Register5reg_t4typeE>)

[TYPE](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8Register5reg_t4TYPEE> "LIEF::assembly::aarch64::operands::Register::reg_t::TYPE") type = [TYPE](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8Register5reg_t4TYPEE> "LIEF::assembly::aarch64::operands::Register::reg_t::TYPE")::[NONE](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8Register5reg_t4TYPE4NONEE> "LIEF::assembly::aarch64::operands::Register::reg_t::TYPE::NONE")

###### [` [anonymous] `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8Register5reg_tUt8_unnamed0E>)

union [anonymous]

Public Members

###### [` reg `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8Register5reg_tUt8_unnamed03regE>)

REG reg

###### [` sysreg `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands8Register5reg_tUt8_unnamed06sysregE>)

SYSREG sysreg

### [Memory](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#memory>)

#### [` Memory `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6MemoryE>)

class Memory : public LIEF::assembly::aarch64::[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE> "LIEF::assembly::aarch64::Operand")

This class represents a memory operand.

```text
ldr     x0, [x1, x2, lsl #3]
             |   |    |
+------------+   |    +--------+
|                |             |
v                v             v
Base            Reg Offset    Shift
```

Public Types

##### [` SHIFT `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory5SHIFTE>)

enum class SHIFT : int32\_t

*Values:*

###### [` UNKNOWN `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory5SHIFT7UNKNOWNE>)

enumerator UNKNOWN = 0

###### [` LSL `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory5SHIFT3LSLE>)

enumerator LSL

###### [` UXTX `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory5SHIFT4UXTXE>)

enumerator UXTX

###### [` UXTW `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory5SHIFT4UXTWE>)

enumerator UXTW

###### [` SXTX `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory5SHIFT4SXTXE>)

enumerator SXTX

###### [` SXTW `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory5SHIFT4SXTWE>)

enumerator SXTW

Public Functions

##### [` base `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4NK4LIEF8assembly7aarch648operands6Memory4baseEv>)

REG base() const

The base register.

For `str x3, [x8, #8]` it would return `x8`.

##### [` offset `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4NK4LIEF8assembly7aarch648operands6Memory6offsetEv>)

[offset\_t](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory8offset_tE> "LIEF::assembly::aarch64::operands::Memory::offset_t") offset() const

The addressing offset.

It can be either:

- A register (e.g. `ldr x0, [x1, x3]`)
- An offset (e.g. `ldr x0, [x1, #8]`)

##### [` shift `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4NK4LIEF8assembly7aarch648operands6Memory5shiftEv>)

[shift\_info\_t](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory12shift_info_tE> "LIEF::assembly::aarch64::operands::Memory::shift_info_t") shift() const

Shift information.

For instance, for `ldr x1, [x2, x3, lsl #3]` it would return a [SHIFT::LSL](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#classLIEF_1_1assembly_1_1aarch64_1_1operands_1_1Memory_1ae7c29d14250e6eb4e2858faf286ce35da3005b8eab96f81df142d787d501d0537>) with a [shift\_info\_t::value](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#structLIEF_1_1assembly_1_1aarch64_1_1operands_1_1Memory_1_1shift__info__t_1a9471383ec734539185a509d4ec7eb832>) set to `3`.

##### [` ~Memory `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6MemoryD0Ev>)

~Memory() override = default

Public Static Functions

##### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory7classofEPK7Operand>)

static bool classof(const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE> "LIEF::assembly::aarch64::Operand") \*op)

##### [` shift_info_t `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory12shift_info_tE>)

struct shift\_info\_t

This structure holds shift info (type + value).

Public Members

###### [` type `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory12shift_info_t4typeE>)

[SHIFT](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory5SHIFTE> "LIEF::assembly::aarch64::operands::Memory::SHIFT") type = [SHIFT](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory5SHIFTE> "LIEF::assembly::aarch64::operands::Memory::SHIFT")::[UNKNOWN](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory5SHIFT7UNKNOWNE> "LIEF::assembly::aarch64::operands::Memory::SHIFT::UNKNOWN")

###### [` value `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory12shift_info_t5valueE>)

int8\_t value = -1

##### [` offset_t `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory8offset_tE>)

struct offset\_t

Wraps a memory offset as an integer offset or as a register offset.

Public Types

###### [` TYPE `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory8offset_t4TYPEE>)

enum class TYPE

Enum type used to discriminate the anonymous union.

*Values:*

###### [` NONE `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory8offset_t4TYPE4NONEE>)

enumerator NONE = 0

###### [` REG `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory8offset_t4TYPE3REGE>)

enumerator REG

The *union* holds the REG attribute.

###### [` DISP `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory8offset_t4TYPE4DISPE>)

enumerator DISP

The *union* holds the `displacement` attribute (`int64_t`).

Public Members

###### [` [anonymous] `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory8offset_tUt48_301270104340033110211070255126251274271052375107E>)

union LIEF::assembly::aarch64::operands::[Memory](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6MemoryE> "LIEF::assembly::aarch64::operands::Memory")::[offset\_t](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory8offset_tE> "LIEF::assembly::aarch64::operands::Memory::offset_t")::[anonymous] [anonymous]

###### [` type `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory8offset_t4typeE>)

[TYPE](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory8offset_t4TYPEE> "LIEF::assembly::aarch64::operands::Memory::offset_t::TYPE") type = [TYPE](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory8offset_t4TYPEE> "LIEF::assembly::aarch64::operands::Memory::offset_t::TYPE")::[NONE](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory8offset_t4TYPE4NONEE> "LIEF::assembly::aarch64::operands::Memory::offset_t::TYPE::NONE")

###### [` [anonymous] `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory8offset_tUt8_unnamed0E>)

union [anonymous]

Public Members

###### [` reg `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory8offset_tUt8_unnamed03regE>)

REG reg

[Register](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#classLIEF_1_1assembly_1_1aarch64_1_1operands_1_1Register>) offset.

###### [` displacement `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands6Memory8offset_tUt8_unnamed012displacementE>)

int64\_t displacement

Integer offset.

### [PCRelative](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#pcrelative>)

#### [` PCRelative `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands10PCRelativeE>)

class PCRelative : public LIEF::assembly::aarch64::[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE> "LIEF::assembly::aarch64::Operand")

This class represents a PC-relative operand.

```text
ldr x0, #8
        |
        v
 PC Relative operand
```

Public Functions

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4NK4LIEF8assembly7aarch648operands10PCRelative5valueEv>)

int64\_t value() const

The effective value that is relative to the current `pc` register.

##### [` ~PCRelative `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands10PCRelativeD0Ev>)

~PCRelative() override = default

Public Static Functions

##### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch648operands10PCRelative7classofEPK7Operand>)

static bool classof(const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch647OperandE> "LIEF::assembly::aarch64::Operand") \*op)
