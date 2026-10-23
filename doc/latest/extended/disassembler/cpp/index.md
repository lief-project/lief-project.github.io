---
documentID: "516146c596309920f673ad4ce0f0ee2f1faa47bc05ab40f2521a6dadf7e05176"
docname: "extended/disassembler/cpp/index"
title: "Disassembler C++ API - LIEF Documentation"
description: "Disassembler C++ API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/extended/disassembler/cpp/index.html"
markdownURL: "https://lief.re/doc/latest/extended/disassembler/cpp/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "d9a55701c293ebfd455bc10850b8ebcf167b3ed72e99b3692c43d804db6d43e4"
---

# [C++](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#c>)

## [Architectures](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#architectures>)

Architectures

- [X86/x86-64](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/x86.html>)
- [AArch64](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html>)
- [RISC-V](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html>)
- [ARM](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/arm.html>)
- [eBPF](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html>)
- [Mips](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html>)
- [PowerPC](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/powerpc.html>)

## [Engine](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#engine>)

### [` Engine `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6EngineE>)

class Engine

This class interfaces the assembler/disassembler support.

Public Types

#### [` instructions_it `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6Engine15instructions_itE>)

using instructions\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction")::[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorE> "LIEF::assembly::Instruction::Iterator")&gt;

Disassembly instruction iterator.

Public Functions

#### [` Engine `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6Engine6EngineEv>)

Engine() = delete

#### [` Engine `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6Engine6EngineENSt10unique_ptrIN7details6EngineEEE>)

Engine(std::unique\_ptr&lt;details::Engine&gt; impl)

#### [` Engine `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6Engine6EngineERK6Engine>)

Engine(const [Engine](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6Engine6EngineERK6Engine> "LIEF::assembly::Engine::Engine")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6EngineaSERK6Engine>)

[Engine](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6EngineE> "LIEF::assembly::Engine") &amp;operator=(const [Engine](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6EngineE> "LIEF::assembly::Engine")&amp;) = delete

#### [` Engine `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6Engine6EngineERR6Engine>)

Engine([Engine](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6Engine6EngineERR6Engine> "LIEF::assembly::Engine::Engine")&amp;&amp;) noexcept

#### [` operator= `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6EngineaSERR6Engine>)

[Engine](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6EngineE> "LIEF::assembly::Engine") &amp;operator=([Engine](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6EngineE> "LIEF::assembly::Engine")&amp;&amp;) noexcept

#### [` disassemble `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6Engine11disassembleEPK7uint8_t6size_t8uint64_t>)

[instructions\_it](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6Engine15instructions_itE> "LIEF::assembly::Engine::instructions_it") disassemble(const uint8\_t \*buffer, size\_t size, uint64\_t addr)

Disassemble the provided buffer with the address specified in the second parameter. The engine and the buffer must outlive the returned iterator.

#### [` disassemble `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6Engine11disassembleERKNSt6vectorI7uint8_tEE8uint64_t>)

inline [instructions\_it](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6Engine15instructions_itE> "LIEF::assembly::Engine::instructions_it") disassemble(const std::vector&lt;uint8\_t&gt; &amp;bytes, uint64\_t addr)

Disassemble the given vector of bytes with the address specified in the second parameter.

#### [` assemble `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6Engine8assembleE8uint64_tNSt11string_viewER15AssemblerConfig>)

std::vector&lt;uint8\_t&gt; assemble(uint64\_t address, std::string\_view Asm, [AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigE> "LIEF::assembly::AssemblerConfig") &amp;config = [AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigE> "LIEF::assembly::AssemblerConfig")::[default\_config](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig14default_configEv> "LIEF::assembly::AssemblerConfig::default_config")())

#### [` assemble `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6Engine8assembleE8uint64_tNSt11string_viewERN4LIEF6BinaryER15AssemblerConfig>)

std::vector&lt;uint8\_t&gt; assemble(uint64\_t address, std::string\_view Asm, LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary") &amp;bin, [AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigE> "LIEF::assembly::AssemblerConfig") &amp;config = [AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigE> "LIEF::assembly::AssemblerConfig")::[default\_config](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig14default_configEv> "LIEF::assembly::AssemblerConfig::default_config")())

#### [` assemble `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6Engine8assembleERKN4llvm6MCInstE>)

std::vector&lt;uint8\_t&gt; assemble(const llvm::MCInst &amp;inst)

#### [` assemble `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6Engine8assembleERKNSt6vectorIN4llvm6MCInstEEE>)

std::vector&lt;uint8\_t&gt; assemble(const std::vector&lt;llvm::MCInst&gt; &amp;inst)

#### [` ~Engine `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6EngineD0Ev>)

~Engine()

## [Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#instruction>)

### [` Instruction `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE>)

class Instruction

This class represents an assembly instruction.

Subclassed by [LIEF::assembly::aarch64::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#classLIEF_1_1assembly_1_1aarch64_1_1Instruction>), [LIEF::assembly::arm::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/arm.html#classLIEF_1_1assembly_1_1arm_1_1Instruction>), [LIEF::assembly::ebpf::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#classLIEF_1_1assembly_1_1ebpf_1_1Instruction>), [LIEF::assembly::mips::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#classLIEF_1_1assembly_1_1mips_1_1Instruction>), [LIEF::assembly::powerpc::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/powerpc.html#classLIEF_1_1assembly_1_1powerpc_1_1Instruction>), [LIEF::assembly::riscv::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#classLIEF_1_1assembly_1_1riscv_1_1Instruction>), [LIEF::assembly::x86::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/x86.html#classLIEF_1_1assembly_1_1x86_1_1Instruction>)

Public Types

#### [` MemoryAccess `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction12MemoryAccessE>)

enum class MemoryAccess : uint8\_t

Memory operation flags.

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction12MemoryAccess4NONEE>)

enumerator NONE = 0

##### [` READ `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction12MemoryAccess4READE>)

enumerator READ = 1 &lt;&lt; 0

##### [` WRITE `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction12MemoryAccess5WRITEE>)

enumerator WRITE = 1 &lt;&lt; 1

##### [` READ_WRITE `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction12MemoryAccess10READ_WRITEE>)

enumerator READ\_WRITE = [READ](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction12MemoryAccess4READE> "LIEF::assembly::Instruction::MemoryAccess::READ") | [WRITE](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction12MemoryAccess5WRITEE> "LIEF::assembly::Instruction::MemoryAccess::WRITE")

Public Functions

#### [` address `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction7addressEv>)

uint64\_t address() const

Address of the instruction.

#### [` size `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction4sizeEv>)

size\_t size() const

Size of the instruction in bytes.

#### [` raw `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction3rawEv>)

const std::vector&lt;uint8\_t&gt; &amp;raw() const

Raw bytes of the current instruction.

#### [` mnemonic `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction8mnemonicEv>)

std::string\_view mnemonic() const

[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction>) mnemonic (e.g. `br`).

#### [` to_string `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction9to_stringEb>)

std::string to\_string(bool with\_address = true) const

Representation of the current instruction in a pretty assembly way.

#### [` is_call `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction7is_callEv>)

bool is\_call() const

True if the instruction is a call.

#### [` is_terminator `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction13is_terminatorEv>)

bool is\_terminator() const

True if the instruction marks the end of a basic block.

#### [` is_branch `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction9is_branchEv>)

bool is\_branch() const

True if the instruction is a branch.

#### [` is_syscall `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction10is_syscallEv>)

bool is\_syscall() const

True if the instruction is a syscall.

#### [` is_memory_access `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction16is_memory_accessEv>)

bool is\_memory\_access() const

True if the instruction performs a memory access.

#### [` is_move_reg `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction11is_move_regEv>)

bool is\_move\_reg() const

True if the instruction is a register to register move.

#### [` is_add `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction6is_addEv>)

bool is\_add() const

True if the instruction performs an arithmetic addition.

#### [` is_trap `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction7is_trapEv>)

bool is\_trap() const

True if the instruction is a trap.

- On `x86/x86-64` this includes the `ud1/ud2` instructions
- On `AArch64` this includes the `brk/udf` instructions

#### [` is_barrier `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction10is_barrierEv>)

bool is\_barrier() const

True if the instruction prevents executing the instruction that immediately follows the current. This includes return or unconditional branch instructions.

#### [` is_return `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction9is_returnEv>)

bool is\_return() const

True if the instruction is a return.

#### [` is_indirect_branch `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction18is_indirect_branchEv>)

bool is\_indirect\_branch() const

True if the instruction is an indirect branch.

This includes instructions that branch through a register (e.g. `jmp rax`, `br x1`).

#### [` is_conditional_branch `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction21is_conditional_branchEv>)

bool is\_conditional\_branch() const

True if the instruction is **conditionally** jumping to the next instruction **or** an instruction into some other basic block.

#### [` is_unconditional_branch `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction23is_unconditional_branchEv>)

bool is\_unconditional\_branch() const

True if the instruction is jumping (**unconditionally**) to some other basic block.

#### [` is_compare `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction10is_compareEv>)

bool is\_compare() const

True if the instruction is a comparison.

#### [` is_move_immediate `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction17is_move_immediateEv>)

bool is\_move\_immediate() const

True if the instruction is moving an immediate.

#### [` is_bitcast `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction10is_bitcastEv>)

bool is\_bitcast() const

True if the instruction is doing a bitcast.

#### [` memory_access `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction13memory_accessEv>)

[MemoryAccess](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction12MemoryAccessE> "LIEF::assembly::Instruction::MemoryAccess") memory\_access() const

Memory access flags.

#### [` branch_target `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction13branch_targetEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; branch\_target() const

Given a [is\_branch()](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction_1a627fcac52cdecfc4e8fef93f0d27ec41>) instruction, try to evaluate the address of the destination.

#### [` mcinst `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction6mcinstEv>)

const llvm::MCInst &amp;mcinst() const

Return the underlying llvm::MCInst implementation.

> **Warning**
> 
> Because of ABI compatibility, this MCInst can **only be used** with the **same** version of LLVM used by LIEF (see documentation)

#### [` Tas `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4I0ENK4LIEF8assembly11Instruction2asEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4I0ENK4LIEF8assembly11Instruction2asEPK1Tv> "LIEF::assembly::Instruction::as::T") \*as() const

This function can be used to **down cast** an [Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction>) instance:

```cpp
std::unique_ptr<assembly::Instruction> inst = get_inst();
if (const auto* arm = inst->as<assembly::arm::Instruction>()) {
  const arm::OPCODE op = arm->opcode();
}
```

#### [` ~Instruction `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionD0Ev>)

virtual ~Instruction()

Friends

#### [` operator<< `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionlsERNSt7ostreamERK11Instruction>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction") &amp;inst)

#### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorE> "LIEF::assembly::Instruction::Iterator"), std::forward\_iterator\_tag, [Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction"), std::ptrdiff\_t, const [Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction")\*, const [Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction")&amp;&gt;

**Lazy-forward** iterator that disassembles instructions on demand.

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8Iterator14implementationE>)

using implementation = details::InstructionIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8Iterator8IteratorENSt10unique_ptrIN7details13InstructionItEEE>)

Iterator(std::unique\_ptr&lt;details::InstructionIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8Iterator8IteratorERK8Iterator> "LIEF::assembly::Instruction::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorE> "LIEF::assembly::Instruction::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorE> "LIEF::assembly::Instruction::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8Iterator8IteratorERR8Iterator> "LIEF::assembly::Instruction::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorE> "LIEF::assembly::Instruction::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorE> "LIEF::assembly::Instruction::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorE> "LIEF::assembly::Instruction::Iterator") &amp;operator++()

##### [` operator* `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction8IteratormlEv>)

const [Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4NK4LIEF8assembly11Instruction8IteratorptEv>)

const [Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8Iterator5yieldEv>)

std::unique\_ptr&lt;[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction")&gt; yield()

Transfer ownership of the instruction at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorppEi>)

inline DerivedT operator++(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorE> "LIEF::assembly::Instruction::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorE> "LIEF::assembly::Instruction::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorE> "LIEF::assembly::Instruction::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorE> "LIEF::assembly::Instruction::Iterator") &amp;RHS)
