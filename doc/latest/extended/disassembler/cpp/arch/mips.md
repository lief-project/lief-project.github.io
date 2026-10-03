---
documentID: "d91f8bcf149c799357bf8cc1485239911af3900df958b68df10820c6f771916d"
docname: "extended/disassembler/cpp/arch/mips"
title: "Mips - C++ Disassembler - LIEF Documentation"
description: "Mips C++ Disassembler. See LIEF::assembly::mips::OPCODE in include/asm/mips/opcodes.hpp"
canonical: "https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html"
markdownURL: "https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "30990b39fdf9ef3638d911e633727cbb1e31e157f084f1b369e9bb6f7e89f97e"
---

# [Mips](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#mips>)

## [Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#instruction>)

### [` Instruction `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips11InstructionE>)

class Instruction : public LIEF::assembly::[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction")

This class represents a Mips instruction (including mips64, mips32).

Public Types

#### [` operands_it `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips11Instruction11operands_itE>)

using operands\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE> "LIEF::assembly::mips::Operand")::[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratorE> "LIEF::assembly::mips::Operand::Iterator")&gt;

Public Functions

#### [` opcode `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4NK4LIEF8assembly4mips11Instruction6opcodeEv>)

OPCODE opcode() const

The instruction opcode as defined in LLVM.

#### [` operands `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4NK4LIEF8assembly4mips11Instruction8operandsEv>)

[operands\_it](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips11Instruction11operands_itE> "LIEF::assembly::mips::Instruction::operands_it") operands() const

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction_1_1Iterator>) over the operands of the current instruction.

#### [` ~Instruction `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips11InstructionD0Ev>)

virtual ~Instruction() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips11Instruction7classofEPKN8assembly11InstructionE>)

static bool classof(const assembly::[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction") \*inst)

True if `inst` is an **effective** instance of [mips::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#classLIEF_1_1assembly_1_1mips_1_1Instruction>).

## [Opcodes](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#opcodes>)

See `LIEF::assembly::mips::OPCODE` in `include/asm/mips/opcodes.hpp`

## [Operands](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#operands>)

### [` Operand `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE>)

class Operand

This class represents an operand for a Mips instruction.

Subclassed by [LIEF::assembly::mips::operands::Immediate](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#classLIEF_1_1assembly_1_1mips_1_1operands_1_1Immediate>), [LIEF::assembly::mips::operands::Memory](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#classLIEF_1_1assembly_1_1mips_1_1operands_1_1Memory>), [LIEF::assembly::mips::operands::PCRelative](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#classLIEF_1_1assembly_1_1mips_1_1operands_1_1PCRelative>), [LIEF::assembly::mips::operands::Register](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#classLIEF_1_1assembly_1_1mips_1_1operands_1_1Register>)

Public Functions

#### [` to_string `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4NK4LIEF8assembly4mips7Operand9to_stringEv>)

std::string to\_string() const

Pretty representation of the operand.

#### [` Tas `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4I0ENK4LIEF8assembly4mips7Operand2asEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4I0ENK4LIEF8assembly4mips7Operand2asEPK1Tv> "LIEF::assembly::mips::Operand::as::T") \*as() const

This function can be used to **down cast** an [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#classLIEF_1_1assembly_1_1mips_1_1Operand>) instance:

```cpp
std::unique_ptr<assembly::mips::Operand> op = ...;
if (const auto* imm = inst->as<assembly::mips::operands::Immediate>()) {
  const int64_t value = imm->value();
}
```

#### [` ~Operand `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandD0Ev>)

virtual ~Operand()

Friends

#### [` operator<< `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandlsERNSt7ostreamERK7Operand>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE> "LIEF::assembly::mips::Operand") &amp;op)

#### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratorE> "LIEF::assembly::mips::Operand::Iterator"), std::forward\_iterator\_tag, [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE> "LIEF::assembly::mips::Operand"), std::ptrdiff\_t, const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE> "LIEF::assembly::mips::Operand")\*, const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE> "LIEF::assembly::mips::Operand")&amp;&gt;

**Forward** iterator that lazily disassembles mips [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#classLIEF_1_1assembly_1_1mips_1_1Operand>).

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8Iterator14implementationE>)

using implementation = details::OperandIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8Iterator8IteratorENSt10unique_ptrIN7details9OperandItEEE>)

Iterator(std::unique\_ptr&lt;details::OperandIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8Iterator8IteratorERK8Iterator> "LIEF::assembly::mips::Operand::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratorE> "LIEF::assembly::mips::Operand::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratorE> "LIEF::assembly::mips::Operand::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8Iterator8IteratorERR8Iterator> "LIEF::assembly::mips::Operand::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratorE> "LIEF::assembly::mips::Operand::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratorE> "LIEF::assembly::mips::Operand::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratorE> "LIEF::assembly::mips::Operand::Iterator") &amp;operator++()

##### [` operator* `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4NK4LIEF8assembly4mips7Operand8IteratormlEv>)

const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE> "LIEF::assembly::mips::Operand") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4NK4LIEF8assembly4mips7Operand8IteratorptEv>)

const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE> "LIEF::assembly::mips::Operand") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8Iterator5yieldEv>)

std::unique\_ptr&lt;[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE> "LIEF::assembly::mips::Operand")&gt; yield()

Transfer ownership of the operand at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratorppEi>)

inline DerivedT operator++(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratorE> "LIEF::assembly::mips::Operand::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratorE> "LIEF::assembly::mips::Operand::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratorE> "LIEF::assembly::mips::Operand::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7Operand8IteratorE> "LIEF::assembly::mips::Operand::Iterator") &amp;RHS)

### [Immediate](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#immediate>)

#### [` Immediate `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands9ImmediateE>)

class Immediate : public LIEF::assembly::mips::[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE> "LIEF::assembly::mips::Operand")

This class represents an immediate operand (i.e. a constant).

For instance:

```text
addiu $4, $5, 8
              |
              +---> Immediate(8)
```

Public Functions

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4NK4LIEF8assembly4mips8operands9Immediate5valueEv>)

int64\_t value() const

The constant value wrapped by this operand.

##### [` ~Immediate `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands9ImmediateD0Ev>)

~Immediate() override = default

Public Static Functions

##### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands9Immediate7classofEPK7Operand>)

static bool classof(const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE> "LIEF::assembly::mips::Operand") \*op)

### [Register](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#register>)

#### [` Register `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands8RegisterE>)

class Register : public LIEF::assembly::mips::[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE> "LIEF::assembly::mips::Operand")

This class represents a register operand.

For instance:

```text
move $4, $5
      |   |
      |   +---------> Register($5)
      |
      +-------------> Register($4)
```

Public Functions

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4NK4LIEF8assembly4mips8operands8Register5valueEv>)

REG value() const

The effective REG wrapped by this operand.

##### [` ~Register `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands8RegisterD0Ev>)

~Register() override = default

Public Static Functions

##### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands8Register7classofEPK7Operand>)

static bool classof(const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE> "LIEF::assembly::mips::Operand") \*op)

### [Memory](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#memory>)

#### [` Memory `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6MemoryE>)

class Memory : public LIEF::assembly::mips::[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE> "LIEF::assembly::mips::Operand")

This class represents a memory operand.

MIPS has two addressing forms:

```text
lw    $4, 8($5)            ldxc1  $f2, $4($7)
       |  | |                      |   |  |
+------+  | +---+          +-------+   |  +-----+
|         |     |          |           |        |
v         v     v          v           v        v
Reg      Disp  Base       Reg         Index    Base
```

Public Functions

##### [` base `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4NK4LIEF8assembly4mips8operands6Memory4baseEv>)

REG base() const

The base register.

For `lw $4, 8($5)` it would return `$5`.

##### [` offset `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4NK4LIEF8assembly4mips8operands6Memory6offsetEv>)

[offset\_t](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6Memory8offset_tE> "LIEF::assembly::mips::operands::Memory::offset_t") offset() const

The addressing offset.

It can be either:

- A register (e.g. `ldxc1 $f2, $4($7)`)
- A displacement (e.g. `lw $4, 8($5)`)

##### [` ~Memory `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6MemoryD0Ev>)

~Memory() override = default

Public Static Functions

##### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6Memory7classofEPK7Operand>)

static bool classof(const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE> "LIEF::assembly::mips::Operand") \*op)

##### [` offset_t `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6Memory8offset_tE>)

struct offset\_t

Wraps the memory offset as either an integer displacement or an index register.

Public Types

###### [` TYPE `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6Memory8offset_t4TYPEE>)

enum class TYPE

Enum type used to discriminate the anonymous union.

*Values:*

###### [` NONE `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6Memory8offset_t4TYPE4NONEE>)

enumerator NONE = 0

###### [` REG `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6Memory8offset_t4TYPE3REGE>)

enumerator REG

The *union* holds the REG attribute.

###### [` DISP `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6Memory8offset_t4TYPE4DISPE>)

enumerator DISP

The *union* holds the `displacement` attribute (`int64_t`).

Public Members

###### [` [anonymous] `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6Memory8offset_tUt48_205005252052333307372362375302211064144314160221E>)

union LIEF::assembly::mips::operands::[Memory](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6MemoryE> "LIEF::assembly::mips::operands::Memory")::[offset\_t](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6Memory8offset_tE> "LIEF::assembly::mips::operands::Memory::offset_t")::[anonymous] [anonymous]

###### [` type `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6Memory8offset_t4typeE>)

[TYPE](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6Memory8offset_t4TYPEE> "LIEF::assembly::mips::operands::Memory::offset_t::TYPE") type = [TYPE](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6Memory8offset_t4TYPEE> "LIEF::assembly::mips::operands::Memory::offset_t::TYPE")::[NONE](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6Memory8offset_t4TYPE4NONEE> "LIEF::assembly::mips::operands::Memory::offset_t::TYPE::NONE")

###### [` [anonymous] `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6Memory8offset_tUt8_unnamed0E>)

union [anonymous]

Public Members

###### [` reg `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6Memory8offset_tUt8_unnamed03regE>)

REG reg

[Register](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#classLIEF_1_1assembly_1_1mips_1_1operands_1_1Register>) offset (index register).

###### [` displacement `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands6Memory8offset_tUt8_unnamed012displacementE>)

int64\_t displacement

Integer offset.

### [PCRelative](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#pcrelative>)

#### [` PCRelative `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands10PCRelativeE>)

class PCRelative : public LIEF::assembly::mips::[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE> "LIEF::assembly::mips::Operand")

This class represents a PC-relative operand.

```text
bal 0x100
    |
    v
 PC Relative operand
```

Public Functions

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4NK4LIEF8assembly4mips8operands10PCRelative5valueEv>)

int64\_t value() const

The effective value that is relative to the current `pc` register.

##### [` ~PCRelative `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands10PCRelativeD0Ev>)

~PCRelative() override = default

Public Static Functions

##### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips8operands10PCRelative7classofEPK7Operand>)

static bool classof(const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips7OperandE> "LIEF::assembly::mips::Operand") \*op)
