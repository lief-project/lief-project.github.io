---
documentID: "8d62d614620115bc4ecb1efefd78a8dd8d2129f2840272382827ad1f0c213220"
docname: "extended/disassembler/cpp/arch/ebpf"
title: "eBPF - C++ Disassembler - LIEF Documentation"
description: "eBPF C++ Disassembler. See LIEF::assembly::ebpf::OPCODE in include/asm/ebpf/opcodes.hpp"
canonical: "https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html"
markdownURL: "https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "98c4eefa87aff1cef09e7731500234a6b3d111d160e1f5e3242ed1867208ed9b"
---

# [eBPF](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#ebpf>)

## [Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#instruction>)

### [` Instruction `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf11InstructionE>)

class Instruction : public LIEF::assembly::[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction")

This class represents an eBPF instruction.

Public Types

#### [` operands_it `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf11Instruction11operands_itE>)

using operands\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE> "LIEF::assembly::ebpf::Operand")::[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratorE> "LIEF::assembly::ebpf::Operand::Iterator")&gt;

Public Functions

#### [` opcode `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4NK4LIEF8assembly4ebpf11Instruction6opcodeEv>)

OPCODE opcode() const

The instruction opcode as defined in LLVM.

#### [` operands `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4NK4LIEF8assembly4ebpf11Instruction8operandsEv>)

[operands\_it](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf11Instruction11operands_itE> "LIEF::assembly::ebpf::Instruction::operands_it") operands() const

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction_1_1Iterator>) over the operands of the current instruction.

#### [` ~Instruction `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf11InstructionD0Ev>)

virtual ~Instruction() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf11Instruction7classofEPKN8assembly11InstructionE>)

static bool classof(const assembly::[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction") \*inst)

True if `inst` is an **effective** instance of [ebpf::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#classLIEF_1_1assembly_1_1ebpf_1_1Instruction>).

## [Opcodes](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#opcodes>)

See `LIEF::assembly::ebpf::OPCODE` in `include/asm/ebpf/opcodes.hpp`

## [Operands](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#operands>)

### [` Operand `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE>)

class Operand

This class represents an operand for an eBPF instruction.

Subclassed by [LIEF::assembly::ebpf::operands::Immediate](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#classLIEF_1_1assembly_1_1ebpf_1_1operands_1_1Immediate>), [LIEF::assembly::ebpf::operands::Memory](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#classLIEF_1_1assembly_1_1ebpf_1_1operands_1_1Memory>), [LIEF::assembly::ebpf::operands::PCRelative](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#classLIEF_1_1assembly_1_1ebpf_1_1operands_1_1PCRelative>), [LIEF::assembly::ebpf::operands::Register](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#classLIEF_1_1assembly_1_1ebpf_1_1operands_1_1Register>)

Public Functions

#### [` to_string `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4NK4LIEF8assembly4ebpf7Operand9to_stringEv>)

std::string to\_string() const

Pretty representation of the operand.

#### [` Tas `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4I0ENK4LIEF8assembly4ebpf7Operand2asEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4I0ENK4LIEF8assembly4ebpf7Operand2asEPK1Tv> "LIEF::assembly::ebpf::Operand::as::T") \*as() const

This function can be used to **down cast** an [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#classLIEF_1_1assembly_1_1ebpf_1_1Operand>) instance:

```cpp
std::unique_ptr<assembly::ebpf::Operand> op = ...;
if (const auto* imm = inst->as<assembly::ebpf::operands::Immediate>()) {
  const int64_t value = imm->value();
}
```

#### [` ~Operand `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandD0Ev>)

virtual ~Operand()

Friends

#### [` operator<< `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandlsERNSt7ostreamERK7Operand>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE> "LIEF::assembly::ebpf::Operand") &amp;op)

#### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratorE> "LIEF::assembly::ebpf::Operand::Iterator"), std::forward\_iterator\_tag, [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE> "LIEF::assembly::ebpf::Operand"), std::ptrdiff\_t, const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE> "LIEF::assembly::ebpf::Operand")\*, const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE> "LIEF::assembly::ebpf::Operand")&amp;&gt;

**Forward** iterator that lazily disassembles ebpf [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#classLIEF_1_1assembly_1_1ebpf_1_1Operand>).

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8Iterator14implementationE>)

using implementation = details::OperandIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8Iterator8IteratorENSt10unique_ptrIN7details9OperandItEEE>)

Iterator(std::unique\_ptr&lt;details::OperandIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8Iterator8IteratorERK8Iterator> "LIEF::assembly::ebpf::Operand::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratorE> "LIEF::assembly::ebpf::Operand::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratorE> "LIEF::assembly::ebpf::Operand::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8Iterator8IteratorERR8Iterator> "LIEF::assembly::ebpf::Operand::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratorE> "LIEF::assembly::ebpf::Operand::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratorE> "LIEF::assembly::ebpf::Operand::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratorE> "LIEF::assembly::ebpf::Operand::Iterator") &amp;operator++()

##### [` operator* `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4NK4LIEF8assembly4ebpf7Operand8IteratormlEv>)

const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE> "LIEF::assembly::ebpf::Operand") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4NK4LIEF8assembly4ebpf7Operand8IteratorptEv>)

const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE> "LIEF::assembly::ebpf::Operand") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8Iterator5yieldEv>)

std::unique\_ptr&lt;[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE> "LIEF::assembly::ebpf::Operand")&gt; yield()

Transfer ownership of the operand at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratorppEi>)

inline DerivedT operator++(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratorE> "LIEF::assembly::ebpf::Operand::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratorE> "LIEF::assembly::ebpf::Operand::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratorE> "LIEF::assembly::ebpf::Operand::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7Operand8IteratorE> "LIEF::assembly::ebpf::Operand::Iterator") &amp;RHS)

### [Immediate](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#immediate>)

#### [` Immediate `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf8operands9ImmediateE>)

class Immediate : public LIEF::assembly::ebpf::[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE> "LIEF::assembly::ebpf::Operand")

This class represents an immediate operand (i.e. a constant).

For instance:

```text
r1 = 8
     |
     +---> Immediate(8)
```

Public Functions

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4NK4LIEF8assembly4ebpf8operands9Immediate5valueEv>)

int64\_t value() const

The constant value wrapped by this operand.

##### [` ~Immediate `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf8operands9ImmediateD0Ev>)

~Immediate() override = default

Public Static Functions

##### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf8operands9Immediate7classofEPK7Operand>)

static bool classof(const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE> "LIEF::assembly::ebpf::Operand") \*op)

### [Register](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#register>)

#### [` Register `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf8operands8RegisterE>)

class Register : public LIEF::assembly::ebpf::[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE> "LIEF::assembly::ebpf::Operand")

This class represents a register operand.

For instance:

```text
r0 = r1
 |    |
 |    +---------> Register(r1)
 |
 +--------------> Register(r0)
```

Public Functions

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4NK4LIEF8assembly4ebpf8operands8Register5valueEv>)

REG value() const

The effective REG wrapped by this operand.

##### [` ~Register `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf8operands8RegisterD0Ev>)

~Register() override = default

Public Static Functions

##### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf8operands8Register7classofEPK7Operand>)

static bool classof(const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE> "LIEF::assembly::ebpf::Operand") \*op)

### [Memory](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#memory>)

#### [` Memory `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf8operands6MemoryE>)

class Memory : public LIEF::assembly::ebpf::[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE> "LIEF::assembly::ebpf::Operand")

This class represents a memory operand.

```text
*(u64 *)(r1 + 8) = r2
          |    |
          |    +-----> Displacement: 8
          |
          +----------> Base: r1
```

Public Functions

##### [` base `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4NK4LIEF8assembly4ebpf8operands6Memory4baseEv>)

REG base() const

The base register.

For `*(u64 *)(r1 + 8)` it would return `r1`.

##### [` displacement `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4NK4LIEF8assembly4ebpf8operands6Memory12displacementEv>)

int64\_t displacement() const

The displacement value.

For `*(u64 *)(r1 + 8)` it would return `8`.

##### [` ~Memory `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf8operands6MemoryD0Ev>)

~Memory() override = default

Public Static Functions

##### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf8operands6Memory7classofEPK7Operand>)

static bool classof(const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE> "LIEF::assembly::ebpf::Operand") \*op)

### [PCRelative](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#pcrelative>)

#### [` PCRelative `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf8operands10PCRelativeE>)

class PCRelative : public LIEF::assembly::ebpf::[Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE> "LIEF::assembly::ebpf::Operand")

This class represents a PC-relative operand.

```text
if r1 == 0 goto +5
                |
                v
        PC Relative operand
```

Public Functions

##### [` value `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4NK4LIEF8assembly4ebpf8operands10PCRelative5valueEv>)

int64\_t value() const

The effective value that is relative to the current `pc` register.

##### [` ~PCRelative `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf8operands10PCRelativeD0Ev>)

~PCRelative() override = default

Public Static Functions

##### [` classof `](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf8operands10PCRelative7classofEPK7Operand>)

static bool classof(const [Operand](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf7OperandE> "LIEF::assembly::ebpf::Operand") \*op)
