---
documentID: "58d5fd6e1134d2e86c817f3d11f8b88f41ff38774180629490d702ac48628f78"
docname: "extended/disassembler/index"
title: "Disassembler - LIEF Documentation"
description: "Disassemble executable code with LIEF Extended, inspect architecture-specific instructions and operands, and use debug information or live memory."
canonical: "https://lief.re/doc/latest/extended/disassembler/index.html"
markdownURL: "https://lief.re/doc/latest/extended/disassembler/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "cc344f87759e569f51eb17bc87542aa1280db04c53f5ac73e9b26b2502bade62"
---

# [Disassembler](<https://lief.re/doc/latest/extended/disassembler/index.html#disassembler>)

API

- [C++](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html>)
- [Python](<https://lief.re/doc/latest/extended/disassembler/python/index.html>)
- [Rust](<https://lief.re/doc/latest/extended/disassembler/rust.html>)

## [Introduction](<https://lief.re/doc/latest/extended/disassembler/index.html#introduction>)

LIEF Extended provides a user-friendly API for disassembling code within various parts of executable formats for the following architectures: x86/x86-64, ARM, AArch64, RISC-V, MIPS, PowerPC, and eBPF.

## [Disassemble a binary](<https://lief.re/doc/latest/extended/disassembler/index.html#disassemble-a-binary>)

You can begin disassembling code within a binary using the  `lief.Binary.disassemble()` ( [`lief::generic::Binary::disassemble`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble>) ;  [`lief::generic::Binary::disassemble_symbol`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble_symbol>) ;  [`lief::generic::Binary::disassemble_address`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble_address>) ;  [`lief::generic::Binary::disassemble_slice`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble_slice>) ;  [`LIEF::Binary::disassemble()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary11disassembleE8uint64_t6size_t>) ;  [`lief.Binary.disassemble()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.disassemble>) ;  [`lief.Binary.disassemble_from_bytes()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.disassemble_from_bytes>) ) function, which is exposed in the abstraction layer:

**Python**

```python
elf: lief.ELF.Binary

for inst in elf.disassemble(0x400120):
    print(inst)
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> pe;

for (const auto& inst : pe->disassemble("_WinRT")) {
  std::cout << inst.to_string() << '\n';
}
```

**Rust**

```rust
let elf: &lief::elf::Binary = some_elf;

for inst in elf.disassemble_address(0x400) {
    println!("{}", inst);
}
```

From a design perspective, the disassembler returns a *lazy* iterator, yielding a  `lief.assembly.Instruction` ( [`lief::assembly::Instructions`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/enum.Instructions.html>) ;  [`LIEF::assembly::Instruction`](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE>) ;  [`lief.assembly.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction>) ) instance as it evaluates the instruction at each address.

Consequently, when calling `elf.disassemble_address(0x400)`, no disassembly occurs until the iterator is advanced.

## [Inspect instructions and operands](<https://lief.re/doc/latest/extended/disassembler/index.html#inspect-instructions-and-operands>)

Instructions are represented by the  `lief.assembly.Instruction` ( [`lief::assembly::Instructions`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/enum.Instructions.html>) ;  [`LIEF::assembly::Instruction`](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE>) ;  [`lief.assembly.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction>) ) object, which is extended by architecture-specific objects:

- `lief.assembly.x86.Instruction` ( [`lief::assembly::x86::Instruction`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/x86/struct.Instruction.html>) ;  [`LIEF::assembly::x86::Instruction`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/x86.html#_CPPv4N4LIEF8assembly3x8611InstructionE>) ;  [`lief.assembly.x86.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/arch/x86.html#lief.assembly.x86.Instruction>) )
- `lief.assembly.arm.Instruction` ( [`lief::assembly::arm::Instruction`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/arm/struct.Instruction.html>) ;  [`LIEF::assembly::arm::Instruction`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/arm.html#_CPPv4N4LIEF8assembly3arm11InstructionE>) ;  [`lief.assembly.arm.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/arch/arm.html#lief.assembly.arm.Instruction>) )
- `lief.assembly.aarch64.Instruction` ( [`lief::assembly::aarch64::Instruction`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/aarch64/struct.Instruction.html>) ;  [`LIEF::assembly::aarch64::Instruction`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/aarch64.html#_CPPv4N4LIEF8assembly7aarch6411InstructionE>) ;  [`lief.assembly.aarch64.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/arch/aarch64.html#lief.assembly.aarch64.Instruction>) )
- `lief.assembly.powerpc.Instruction` ( [`lief::assembly::powerpc::Instruction`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/powerpc/struct.Instruction.html>) ;  [`LIEF::assembly::powerpc::Instruction`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/powerpc.html#_CPPv4N4LIEF8assembly7powerpc11InstructionE>) ;  [`lief.assembly.powerpc.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.Instruction>) )
- `lief.assembly.mips.Instruction` ( [`lief::assembly::mips::Instruction`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/mips/struct.Instruction.html>) ;  [`LIEF::assembly::mips::Instruction`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4N4LIEF8assembly4mips11InstructionE>) ;  [`lief.assembly.mips.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.Instruction>) )
- `lief.assembly.riscv.Instruction` ( [`lief::assembly::riscv::Instruction`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/riscv/struct.Instruction.html>) ;  [`LIEF::assembly::riscv::Instruction`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4N4LIEF8assembly5riscv11InstructionE>) ;  [`lief.assembly.riscv.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.Instruction>) )
- `lief.assembly.ebpf.Instruction` ( [`lief::assembly::ebpf::Instruction`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/ebpf/struct.Instruction.html>) ;  [`LIEF::assembly::ebpf::Instruction`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4N4LIEF8assembly4ebpf11InstructionE>) ;  [`lief.assembly.ebpf.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.Instruction>) )

In Python, use pattern matching or `isinstance(...)` to select an architecture-specific  `lief.assembly.Instruction` ( [`lief::assembly::Instructions`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/enum.Instructions.html>) ;  [`LIEF::assembly::Instruction`](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE>) ;  [`lief.assembly.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction>) ):

```python
inst: lief.assembly.Instruction

match inst:
    case lief.assembly.riscv.Instruction():
        opcode: lief.assembly.riscv.OPCODE = inst.opcode
```

In C++, use  `LIEF::assembly::Instruction::as()` ( [`LIEF::assembly::Instruction::as()`](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4I0ENK4LIEF8assembly11Instruction2asEPK1Tv>) ) to access the architecture-specific instruction:

```cpp
std::unique_ptr<LIEF::assembly::Instruction> inst;

if (const auto* riscv_inst = inst->as<LIEF::assembly::riscv::Instruction>()) {
  LIEF::assembly::riscv::OPCODE opcode = riscv_inst->opcode();
}
```

In Rust, match the architecture variant of  `lief.assembly.Instruction` ( [`lief::assembly::Instructions`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/enum.Instructions.html>) ;  [`LIEF::assembly::Instruction`](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE>) ;  [`lief.assembly.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction>) ):

```rust
pub fn check_opcode(some_inst: &lief::assembly::Instructions) {
    let inst: &lief::assembly::Instructions = some_inst;

    if let lief::assembly::Instructions::RiscV(riscv) = inst {
        println!("{:?}", riscv.opcode());
    }
}
```

> **Note**
> 
> You can also check the assembler documentation here: [Assembler](<https://lief.re/doc/latest/extended/assembler/index.html#extended-assembler>)

For the `x86/x86-64` and `AArch64` architectures, you can also iterate over an instruction’s operands:

**AArch64**

```python
import lief
macho: lief.MachO.Binary

for inst in macho.disassemble(0x400120):
    print(inst)
    # Check inst properties
    if inst.is_branch:
        print(f"Resolved: {inst.branch_target}")

    for idx, operand in enumerate(inst.operands):
        match operand:
            case lief.assembly.aarch64.operands.Register():
                print(f"op[{idx}]: REG - {operand.value}")
            case lief.assembly.aarch64.operands.Memory():
                print(f"op[{idx}]: MEM - {operand.base}")
            case lief.assembly.aarch64.operands.PCRelative():
                print(f"op[{idx}]: PCR - {operand.value}")
            case lief.assembly.aarch64.operands.Immediate():
                print(f"op[{idx}]: IMM - {operand.value}")
```

**x86/x86-64**

```python
import lief
elf: lief.ELF.Binary

for inst in elf.disassemble(0x1000200):
    print(inst)
    # Check inst properties
    if inst.is_branch:
        print(f"Resolved: {inst.branch_target}")

    for idx, operand in enumerate(inst.operands):
        match operand:
            case lief.assembly.x86.operands.Register():
                print(f"op[{idx}]: REG - {operand.value}")
            case lief.assembly.x86.operands.Memory():
                print(f"op[{idx}]: MEM - {operand.base}")
            case lief.assembly.x86.operands.PCRelative():
                print(f"op[{idx}]: PCR - {operand.value}")
            case lief.assembly.x86.operands.Immediate():
                print(f"op[{idx}]: IMM - {operand.value}")
```

See the architecture-specific [Python](<https://lief.re/doc/latest/extended/disassembler/python/index.html>) and [C++](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html>) references for operand types and instruction properties. To write a patch using assembly text, continue with the [assembler guide](<https://lief.re/doc/latest/extended/assembler/index.html#extended-assembler>).

## [x86/x86-64](<https://lief.re/doc/latest/extended/disassembler/index.html#x86-x86-64>)

On x86/x86-64,  `lief.assembly.x86.Instruction` ( [`lief::assembly::x86::Instruction`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/x86/struct.Instruction.html>) ;  [`LIEF::assembly::x86::Instruction`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/x86.html#_CPPv4N4LIEF8assembly3x8611InstructionE>) ;  [`lief.assembly.x86.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/arch/x86.html#lief.assembly.x86.Instruction>) ) also exposes an API to inspect and rewrite the `LOCK` prefix of an instruction:

- `lief.assembly.x86.Instruction.has_lock_prefix()` ( [`lief::assembly::x86::Instruction::has_lock_prefix`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/x86/struct.Instruction.html#method.has_lock_prefix>) ;  [`lief.assembly.x86.Instruction.has_lock_prefix`](<https://lief.re/doc/latest/extended/disassembler/python/arch/x86.html#lief.assembly.x86.Instruction.has_lock_prefix>) ;  [`LIEF::assembly::x86::Instruction::has_lock_prefix()`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/x86.html#_CPPv4NK4LIEF8assembly3x8611Instruction15has_lock_prefixEv>) )
- `lief.assembly.x86.Instruction.is_lockable()` ( [`lief::assembly::x86::Instruction::is_lockable`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/x86/struct.Instruction.html#method.is_lockable>) ;  [`lief.assembly.x86.Instruction.is_lockable`](<https://lief.re/doc/latest/extended/disassembler/python/arch/x86.html#lief.assembly.x86.Instruction.is_lockable>) ;  [`LIEF::assembly::x86::Instruction::is_lockable()`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/x86.html#_CPPv4NK4LIEF8assembly3x8611Instruction11is_lockableEv>) )
- `lief.assembly.x86.Instruction.is_atomic()` ( [`lief::assembly::x86::Instruction::is_atomic`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/x86/struct.Instruction.html#method.is_atomic>) ;  [`lief.assembly.x86.Instruction.is_atomic`](<https://lief.re/doc/latest/extended/disassembler/python/arch/x86.html#lief.assembly.x86.Instruction.is_atomic>) ;  [`LIEF::assembly::x86::Instruction::is_atomic()`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/x86.html#_CPPv4NK4LIEF8assembly3x8611Instruction9is_atomicEv>) )
- `lief.assembly.x86.Instruction.lock()` ( [`lief::assembly::x86::Instruction::lock`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/x86/struct.Instruction.html#method.lock>) ;  [`lief.assembly.x86.Instruction.lock()`](<https://lief.re/doc/latest/extended/disassembler/python/arch/x86.html#lief.assembly.x86.Instruction.lock>) ;  [`LIEF::assembly::x86::Instruction::lock()`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/x86.html#_CPPv4NK4LIEF8assembly3x8611Instruction4lockEv>) )
- `lief.assembly.x86.Instruction.unlock()` ( [`lief::assembly::x86::Instruction::unlock`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/x86/struct.Instruction.html#method.unlock>) ;  [`lief.assembly.x86.Instruction.unlock()`](<https://lief.re/doc/latest/extended/disassembler/python/arch/x86.html#lief.assembly.x86.Instruction.unlock>) ;  [`LIEF::assembly::x86::Instruction::unlock()`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/x86.html#_CPPv4NK4LIEF8assembly3x8611Instruction6unlockEv>) )

**Python**

```python
import lief
inst: lief.assembly.x86.Instruction

if inst.has_lock_prefix or inst.is_atomic:
    print(f"{inst} is atomic")
elif inst.is_lockable and (locked := inst.lock()) is not None:
    print(f"atomic version of {inst}: {locked}")
```

**C++**

```cpp
std::unique_ptr<LIEF::assembly::x86::Instruction> inst;

if (inst->has_lock_prefix() || inst->is_atomic()) {
  std::cout << inst->to_string() << " is atomic\n";
} else if (inst->is_lockable()) {
  if (auto locked = inst->lock()) {
    std::cout << "atomic version: " << locked->to_string() << '\n';
  }
}
```

**Rust**

```rust
let inst: &lief::assembly::x86::Instruction = some_inst;

if inst.has_lock_prefix() || inst.is_atomic() {
    println!("{} is atomic", inst);
} else if inst.is_lockable()
    && let Some(locked) = inst.lock()
{
    println!("atomic version: {}", locked);
}
```

## [Use Cases](<https://lief.re/doc/latest/extended/disassembler/index.html#use-cases>)

### [DWARF Function](<https://lief.re/doc/latest/extended/disassembler/index.html#dwarf-function>)

In addition to the regular  `lief.Binary.disassemble()` ( [`lief::generic::Binary::disassemble`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble>) ;  [`lief::generic::Binary::disassemble_symbol`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble_symbol>) ;  [`lief::generic::Binary::disassemble_address`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble_address>) ;  [`lief::generic::Binary::disassemble_slice`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble_slice>) ;  [`LIEF::Binary::disassemble()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary11disassembleE8uint64_t6size_t>) ;  [`lief.Binary.disassemble()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.disassemble>) ;  [`lief.Binary.disassemble_from_bytes()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.disassemble_from_bytes>) ) API, you can use  `lief.dwarf.Function.instructions()` ( [`lief::dwarf::Function::instructions`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Function.html#method.instructions>) ;  [`LIEF::dwarf::Function::instructions()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function12instructionsEv>) ;  [`lief.dwarf.Function.instructions`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.instructions>) ) to disassemble a [DWARF](<https://lief.re/doc/latest/extended/dwarf/index.html#extended-dwarf>) function.

> **Warning**
> 
> `lief.dwarf.Function.instructions()` ( [`lief::dwarf::Function::instructions`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Function.html#method.instructions>) ;  [`LIEF::dwarf::Function::instructions()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function12instructionsEv>) ;  [`lief.dwarf.Function.instructions`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.instructions>) ) only works if the DWARF debug info is **embedded** in the binary. This is the default behavior for [ELF](<https://lief.re/doc/latest/formats/elf/index.html#format-elf>) binaries, but this is not the case for Mach-O `.dSYM` files.

**Python**

```python
import lief
elf = lief.ELF.parse("/bin/hello")

main = elf.debug_info.find_function("main")

for inst in main.instructions:
    print(inst)
```

**C++**

```cpp
auto elf = LIEF::ELF::Parser::parse("/bin/hello");

if (const auto* dwarf = elf->debug_info()->as<LIEF::dwarf::DebugInfo>()) {
  std::unique_ptr<LIEF::dwarf::Function> _main = dwarf->find_function("main");
  for (const auto& inst : _main->instructions()) {
    std::cout << inst.to_string() << '\n';
  }
}
```

**Rust**

```rust
let elf = lief::elf::Binary::parse("/bin/ls").unwrap();
if let Some(lief::DebugInfo::Dwarf(dwarf)) = elf.debug_info()
    && let Some(func) = dwarf.function_by_name("main")
{
    for inst in func.instructions() {
        println!("{}", inst);
    }
}
```

### [Dyld Shared Cache](<https://lief.re/doc/latest/extended/disassembler/index.html#dyld-shared-cache>)

A disassembly API is also provided for the  `lief.dsc.DyldSharedCache` ( [`lief::dsc::DyldSharedCache`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/struct.DyldSharedCache.html>) ;  [`lief.dsc.DyldSharedCache`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache>) ;  [`LIEF::dsc::DyldSharedCache`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCacheE>) ) object via  `lief.dsc.DyldSharedCache.disassemble()` ( [`lief::dsc::DyldSharedCache::disassemble`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/struct.DyldSharedCache.html#method.disassemble>) ;  [`lief.dsc.DyldSharedCache.disassemble()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.disassemble>) ;  [`LIEF::dsc::DyldSharedCache::disassemble()`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache11disassembleE8uint64_t>) ):

**Python**

```python
dyld_cache: lief.dsc.DyldSharedCache

for inst in dyld_cache.disassemble(0x1886F4A44):
    print(inst)
```

**C++**

```cpp
std::unique_ptr<LIEF::dsc::DyldSharedCache> dyld_cache;

for (const auto& inst : dyld_cache->disassemble(0x1886f4a44)) {
  std::cout << inst.to_string() << '\n';
}
```

**Rust**

```rust
let dyld_cache: &lief::dsc::DyldSharedCache = some_dyld_cache;

for inst in dyld_cache.disassemble(0x1886f4a44) {
    println!("{}", inst);
}
```

### [COFF Support](<https://lief.re/doc/latest/extended/disassembler/index.html#coff-support>)

The  `lief.COFF.Binary` ( [`lief::coff::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/coff/struct.Binary.html>) ;  [`lief.COFF.Binary`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary>) ;  [`LIEF::COFF::Binary`](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6BinaryE>) ) interface does not inherit from the generic  `lief.abstract.Binary` ( [`lief::generic::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html>) ;  [`lief.Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary>) ;  [`LIEF::Binary`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE>) ), but it also exposes an API to disassemble code in COFF object files:  `lief.COFF.Binary.disassemble()` ( [`lief::coff::Binary::disassemble_slice`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/coff/struct.Binary.html#method.disassemble_slice>) ;  [`lief::coff::Binary::disassemble_function`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/coff/struct.Binary.html#method.disassemble_function>) ;  [`lief::coff::Binary::disassemble_symbol`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/coff/struct.Binary.html#method.disassemble_symbol>) ;  [`lief.COFF.Binary.disassemble()`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.disassemble>) ;  [`lief.COFF.Binary.disassemble_from_bytes()`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.disassemble_from_bytes>) ;  [`LIEF::COFF::Binary::disassemble()`](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary11disassembleERK6Symbol>) ).

For more details, please check the [COFF Disassembler](<https://lief.re/doc/latest/formats/coff/index.html#format-coff-disassembler>) section

### [In-Memory Disassembler](<https://lief.re/doc/latest/extended/disassembler/index.html#in-memory-disassembler>)

The disassembler is also available for analyzing code directly in the memory of the running process. This functionality is exposed through the runtime API  `lief.runtime.disassemble()` ( [`lief::runtime::disassemble`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/fn.disassemble.html>) ;  [`lief.runtime.disassemble()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.disassemble>) ;  [`LIEF::runtime::disassemble()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime11disassembleE9uintptr_t>) ), as detailed in the [Runtime Memory](<https://lief.re/doc/latest/runtime/components/memory.html#runtime-memory>) documentation.

## [Technical Details](<https://lief.re/doc/latest/extended/disassembler/index.html#technical-details>)

The disassembler is based on LLVM’s MC layer, which is known to be efficient and accurate for disassembling code. This LLVM MC layer is already used by other projects like [capstone](<https://www.capstone-engine.org/>) or, more recently, [Nyxstone](<https://github.com/emproof-com/nyxstone>).

Compared to Capstone, LIEF uses a mainstream LLVM version with limited modifications to the MC layer. On the other hand, it does not expose a C API, supports fewer architectures than Capstone, and does not expose a standalone API.

> **Note**
> 
> The current LLVM version is 22.x.

Unlike Nyxstone’s disassembler, LIEF hides LLVM from the public API, meaning that LLVM does not need to be installed on the system. On the other hand, it does not expose a standalone API.

The major difference between LIEF’s disassembler and other projects is that it **does not expose a standalone API** for disassembling arbitrary code. The disassembler is bound to the object from which the API is exposed ( `lief.abstract.Binary` ( [`lief::generic::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html>) ;  [`lief.Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary>) ;  [`LIEF::Binary`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE>) ),  `lief.dwarf.Function` ( [`lief::dwarf::Function`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Function.html>) ;  [`lief.dwarf.Function`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function>) ;  [`LIEF::dwarf::Function`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8FunctionE>) ),  `lief.dsc.DyldSharedCache.disassemble()` ( [`lief::dsc::DyldSharedCache::disassemble`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/struct.DyldSharedCache.html#method.disassemble>) ;  [`lief.dsc.DyldSharedCache.disassemble()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.disassemble>) ;  [`LIEF::dsc::DyldSharedCache::disassemble()`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache11disassembleE8uint64_t>) ), etc.).

## [API](<https://lief.re/doc/latest/extended/disassembler/index.html#api>)

[Python API](<https://lief.re/doc/latest/extended/disassembler/python/index.html>)

[C++ API](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html>)

Rust API: [`lief::assembly`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/index.html>)
