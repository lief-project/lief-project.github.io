---
documentID: "eed632b369270a2ddd5a79c4c2c3c0d8219b00a8f249614e9bf89f5316126282"
docname: "changelog"
title: "Changelog - LIEF Documentation"
description: "Changelog. This release contains several security fixes:"
canonical: "https://lief.re/doc/latest/changelog.html"
markdownURL: "https://lief.re/doc/latest/changelog.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "c5217ce1eff3873e8e2030aa33bf074e7416d6976b98817c3a2ac2f2033de0f1"
---

# [Changelog](<https://lief.re/doc/latest/changelog.html#changelog>)

## [2.0.0 - Not Released Yet](<https://lief.re/doc/latest/changelog.html#not-released-yet>)

> **Breaking Changes**
> 
> - **C++17 Migration**: LIEF public headers, public API, and STL have been bumped from C++11 to **C++17**.
> - **C API Removal**: The legacy C API has been completely removed.
> - **Logging Level Renaming**:  `lief.logging.Level` ( [`lief::logging::Level`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/logging/enum.Level.html>) ;  [`lief.logging.Level`](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.Level>) ;  [`LIEF::logging::Level`](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5LevelE>) ) and its enumerators are now written in `CamelCase`

**Assembly:**

- Add API to inspect and rewrite the `LOCK` prefix of x86 instructions:

  - `lief.assembly.x86.Instruction.has_lock_prefix()` ( [`lief::assembly::x86::Instruction::has_lock_prefix`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/x86/struct.Instruction.html#method.has_lock_prefix>) ;  [`lief.assembly.x86.Instruction.has_lock_prefix`](<https://lief.re/doc/latest/extended/disassembler/python/arch/x86.html#lief.assembly.x86.Instruction.has_lock_prefix>) ;  [`LIEF::assembly::x86::Instruction::has_lock_prefix()`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/x86.html#_CPPv4NK4LIEF8assembly3x8611Instruction15has_lock_prefixEv>) )
  - `lief.assembly.x86.Instruction.is_lockable()` ( [`lief::assembly::x86::Instruction::is_lockable`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/x86/struct.Instruction.html#method.is_lockable>) ;  [`lief.assembly.x86.Instruction.is_lockable`](<https://lief.re/doc/latest/extended/disassembler/python/arch/x86.html#lief.assembly.x86.Instruction.is_lockable>) ;  [`LIEF::assembly::x86::Instruction::is_lockable()`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/x86.html#_CPPv4NK4LIEF8assembly3x8611Instruction11is_lockableEv>) )
  - `lief.assembly.x86.Instruction.is_atomic()` ( [`lief::assembly::x86::Instruction::is_atomic`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/x86/struct.Instruction.html#method.is_atomic>) ;  [`lief.assembly.x86.Instruction.is_atomic`](<https://lief.re/doc/latest/extended/disassembler/python/arch/x86.html#lief.assembly.x86.Instruction.is_atomic>) ;  [`LIEF::assembly::x86::Instruction::is_atomic()`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/x86.html#_CPPv4NK4LIEF8assembly3x8611Instruction9is_atomicEv>) )
  - `lief.assembly.x86.Instruction.lock()` ( [`lief::assembly::x86::Instruction::lock`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/x86/struct.Instruction.html#method.lock>) ;  [`lief.assembly.x86.Instruction.lock()`](<https://lief.re/doc/latest/extended/disassembler/python/arch/x86.html#lief.assembly.x86.Instruction.lock>) ;  [`LIEF::assembly::x86::Instruction::lock()`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/x86.html#_CPPv4NK4LIEF8assembly3x8611Instruction4lockEv>) )
  - `lief.assembly.x86.Instruction.unlock()` ( [`lief::assembly::x86::Instruction::unlock`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/x86/struct.Instruction.html#method.unlock>) ;  [`lief.assembly.x86.Instruction.unlock()`](<https://lief.re/doc/latest/extended/disassembler/python/arch/x86.html#lief.assembly.x86.Instruction.unlock>) ;  [`LIEF::assembly::x86::Instruction::unlock()`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/x86.html#_CPPv4NK4LIEF8assembly3x8611Instruction6unlockEv>) )

**ELF:**

- Enhance the symbol-version API with the masked version index ( `lief.ELF.SymbolVersion.version` ( [`lief::elf::SymbolVersion::version`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.SymbolVersion.html#method.version>) ;  [`lief.ELF.SymbolVersion.version`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.version>) ;  [`LIEF::ELF::SymbolVersion::version()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF13SymbolVersion7versionEv>) )), local/global classification ( `lief.ELF.SymbolVersion.is_local` ( [`lief::elf::SymbolVersion::is_local`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.SymbolVersion.html#method.is_local>) ;  [`lief.ELF.SymbolVersion.is_local`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.is_local>) ;  [`LIEF::ELF::SymbolVersion::is_local()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF13SymbolVersion8is_localEv>) ) /  `lief.ELF.SymbolVersion.is_global` ( [`lief::elf::SymbolVersion::is_global`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.SymbolVersion.html#method.is_global>) ;  [`lief.ELF.SymbolVersion.is_global`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.is_global>) ;  [`LIEF::ELF::SymbolVersion::is_global()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF13SymbolVersion9is_globalEv>) )), and support for inspecting the GNU `VERSYM_HIDDEN` bit ( `lief.ELF.SymbolVersion.is_hidden` ( [`lief::elf::SymbolVersion::is_hidden`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.SymbolVersion.html#method.is_hidden>) ;  [`lief.ELF.SymbolVersion.is_hidden`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.is_hidden>) ;  [`LIEF::ELF::SymbolVersion::is_hidden()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF13SymbolVersion9is_hiddenEv>) ) /  `lief.ELF.SymbolVersion.set_hidden()` ( [`lief::elf::SymbolVersion::set_hidden`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.SymbolVersion.html#method.set_hidden>) ;  [`lief.ELF.SymbolVersion.is_hidden`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.is_hidden>) ;  [`LIEF::ELF::SymbolVersion::set_hidden()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion10set_hiddenEb>) )).
- Fix the layout of the segments added by LIEF for the architectures that can use pages larger than 4K ([#1366](<https://github.com/lief-project/LIEF/issues/1366>))
- Fix the modification of binaries that have already been modified by LIEF. The segment table was relocated a second time which, for the non-PIE binaries, shifted the sections without shifting the segments nor the dynamic entries. It resulted in a `DT_STRTAB` that was no longer pointing to `.dynstr` (i.e. garbage `DT_NEEDED`/`DT_RUNPATH` names) and in a `PT_PHDR` that was not wrapped by a `PT_LOAD` segment ([#1366](<https://github.com/lief-project/LIEF/issues/1366>)).
- `lief.ELF.check_layout()` ( [`lief.ELF.check_layout()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.check_layout>) ;  [`LIEF::ELF::check_layout()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12check_layoutERK6BinaryPNSt6stringE>) ;  [`lief::elf::check_layout`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/fn.check_layout.html>) ) now reports the `PT_LOAD` segments that can’t be mapped independently because they share the same page. It also report mismatch between `.dynstr` virtual address and `DT_STRTAB`.
- Add support for the MIPS n64 relocation encoding ([#1367](<https://github.com/lief-project/LIEF/pull/1367>) by [plusls](<https://github.com/plusls>)).
- Add  `lief.ELF.Header.is_mips_n64` ( [`lief::elf::Header::is_mips_n64`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Header.html#method.is_mips_n64>) ;  [`lief.ELF.Header.is_mips_n64`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.is_mips_n64>) ;  [`LIEF::ELF::Header::is_mips_n64()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header11is_mips_n64Ev>) ) to check whether a binary uses this encoding.
- `lief.ELF.Relocation.resolve()` ( [`lief::elf::Relocation::resolve`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Relocation.html#method.resolve>) ;  [`lief::elf::Relocation::resolve_with_base_address`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Relocation.html#method.resolve_with_base_address>) ;  [`lief.ELF.Relocation.resolve()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.resolve>) ;  [`LIEF::ELF::Relocation::resolve()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation7resolveE8uint64_t>) ) now supports `R_MIPS_REL32`.

**COFF:**

- Add  `lief.COFF.Binary.get_section()` ( [`lief::coff::Binary::section_by_name`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/coff/struct.Binary.html#method.section_by_name>) ;  [`lief.COFF.Binary.get_section()`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.get_section>) ;  [`LIEF::COFF::Binary::get_section()`](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary11get_sectionENSt11string_viewE>) ) to look up a section by its name. Names that are stored in the COFF string table (i.e. longer than 8 bytes) can be resolved either from their regular value or from their `/<offset>` placeholder:

  ```python
  import lief

  coff = lief.COFF.parse("dwarf.obj")

  section = coff.get_section(".debug_rnglists")
  section.name               # '/18'
  section.coff_string.string # '.debug_rnglists'
  ```

**Runtime:**

- Add  `lief.runtime.Memory.mmap_hint()` ( [`lief::runtime::Memory::mmap_hint`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/struct.Memory.html#method.mmap_hint>) ;  [`lief.runtime.Memory.mmap_hint()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.mmap_hint>) ;  [`LIEF::runtime::Memory::mmap_hint()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory9mmap_hintE8uint64_t6size_t8uint32_t8uint32_t>) ) to allocate memory close to a given address.
- Add  `lief.runtime.MemoryLayout` ( [`lief.runtime.MemoryLayout`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.MemoryLayout>) ;  [`LIEF::runtime::MemoryLayout`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayoutE>) ) to inspect the memory layout of the current process on Linux, Android, macOS, and Windows.  `lief.runtime.memory_layout()` ( [`lief::runtime::memory_layout`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/fn.memory_layout.html>) ;  [`lief.runtime.memory_layout()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.memory_layout>) ;  [`LIEF::runtime::memory_layout()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime13memory_layoutEv>) ) iterates over the mapped  `lief.runtime.MemoryLayout.Region` ( [`lief::runtime::Region`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/struct.Region.html>) ;  [`lief.runtime.MemoryLayout.Region`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.MemoryLayout.Region>) ;  [`LIEF::runtime::MemoryLayout::Region`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionE>) ) ([documentation](<https://lief.re/doc/latest/runtime/components/memory_layout.html#runtime-memory-layout>)):

  ```python
  import lief

  for region in lief.runtime.memory_layout():
      print(f"{region.addr:#014x}-{region.end_addr:#014x} {region.name}")
  ```

**C++:**

- The parsers now take the file path as a `std::string_view` and they also accept a `std::filesystem::path`:

  ```cpp
  #include <filesystem>
  #include <LIEF/ELF.hpp>

  std::filesystem::path path = "/bin/ls";
  std::unique_ptr<LIEF::ELF::Binary> elf = LIEF::ELF::Parser::parse(path);
  ```

**Dependencies:**

- Update nanobind to version `3.0.1`
- Update frozen to commit `1a6065f`
- Update mbedtls to version `4.2.0`

**Python:**

- Python 3.9 is no longer supported. nanobind 3 requires Python 3.10 or newer.

## [1.0.0 - July 12th, 2026](<https://lief.re/doc/latest/changelog.html#july-12th-2026>)

> **Runtime**
> 
> LIEF now provides runtime features as described here: [Runtime](<https://lief.re/doc/latest/runtime/intro.html#runtime-intro>)

**BinaryNinja:**

- Add [Android JNI Analyzer](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/android-jni/index.html#plugins-binaryninja-analyzers-android-jni>)
- The DWARF import plugin now supports comments

**Ghidra:**

- Add support for generating DWARF from firmware or binaries without a precise format or architecture ([#1249](<https://github.com/lief-project/LIEF/issues/1249>))

**DWARF:**

- Add support for accessing the bit size of bit-field declarations ([#1265](<https://github.com/lief-project/LIEF/issues/1265>))
- Add support for accessing Enum entries:  `lief.dwarf.types.Enum.entries()` ( [`lief::dwarf::types::Enum::entries`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/types/struct.Enum.html#method.entries>) ;  [`LIEF::dwarf::types::Enum::entries()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types4Enum7entriesEv>) ;  [`lief.dwarf.types.Enum.entries`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Enum.entries>) )
- Add support for reading from or assigning a register to a function parameter
- Add support for reading from or assigning a description (`DW_AT_description`) to a  `lief.dwarf.Function` ( [`lief::dwarf::Function`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Function.html>) ;  [`lief.dwarf.Function`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function>) ;  [`LIEF::dwarf::Function`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8FunctionE>) ),  `lief.dwarf.Variable` ( [`lief::dwarf::Variable`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Variable.html>) ;  [`lief.dwarf.Variable`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable>) ;  [`LIEF::dwarf::Variable`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8VariableE>) ), or  `lief.dwarf.LexicalBlock` ( [`lief::dwarf::LexicalBlock`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.LexicalBlock.html>) ;  [`lief.dwarf.LexicalBlock`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LexicalBlock>) ;  [`LIEF::dwarf::LexicalBlock`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlockE>) ):

  - `lief.dwarf.Function.description()` ( [`lief::dwarf::Function::description`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Function.html#method.description>) ;  [`LIEF::dwarf::Function::description()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function11descriptionEv>) ;  [`lief.dwarf.Function.description`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.description>) )
  - `lief.dwarf.Variable.description()` ( [`lief::dwarf::Variable::description`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Variable.html#method.description>) ;  [`LIEF::dwarf::Variable::description()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable11descriptionEv>) ;  [`lief.dwarf.Variable.description`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.description>) )
  - `lief.dwarf.LexicalBlock.description()` ( [`lief::dwarf::LexicalBlock::description`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.LexicalBlock.html#method.description>) ;  [`LIEF::dwarf::LexicalBlock::description()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf12LexicalBlock11descriptionEv>) ;  [`lief.dwarf.LexicalBlock.description`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LexicalBlock.description>) )
- Enable the creation of nested  `lief.dwarf.editor.Function.LexicalBlock` ( [`lief::dwarf::editor::function::LexicalBlock`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/editor/function/struct.LexicalBlock.html>) ;  [`lief.dwarf.editor.Function.LexicalBlock`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.LexicalBlock>) ;  [`LIEF::dwarf::editor::Function::LexicalBlock`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function12LexicalBlockE>) )
- Add support for generating a C/C++ definition for a whole  `lief.dwarf.CompilationUnit` ( [`lief::dwarf::CompilationUnit`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.CompilationUnit.html>) ;  [`lief.dwarf.CompilationUnit`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit>) ;  [`LIEF::dwarf::CompilationUnit`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnitE>) ) ( `lief.dwarf.CompilationUnit.to_decl()` ( [`lief::dwarf::CompilationUnit::to_decl`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.CompilationUnit.html#method.to_decl>) ;  [`lief::dwarf::CompilationUnit::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.CompilationUnit.html#method.to_decl_with_opt>) ;  [`lief.dwarf.CompilationUnit.to_decl()`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.to_decl>) ;  [`LIEF::dwarf::CompilationUnit::to_decl()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit7to_declERK7DeclOpt>) )). The output of the following `to_decl()` functions can now be configured through the new  `lief.DeclOpt` ( [`lief::DeclOpt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/struct.DeclOpt.html>) ;  [`lief.DeclOpt`](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt>) ;  [`LIEF::DeclOpt`](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE>) ) structure:

  - `lief.dwarf.Function.to_decl()` ( [`lief::dwarf::Function::to_decl`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Function.html#method.to_decl>) ;  [`lief::dwarf::Function::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Function.html#method.to_decl_with_opt>) ;  [`lief.dwarf.Function.to_decl()`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.to_decl>) ;  [`LIEF::dwarf::Function::to_decl()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function7to_declERK7DeclOpt>) )
  - `lief.dwarf.Variable.to_decl()` ( [`lief::dwarf::Variable::to_decl`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Variable.html#method.to_decl>) ;  [`lief::dwarf::Variable::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Variable.html#method.to_decl_with_opt>) ;  [`lief.dwarf.Variable.to_decl()`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.to_decl>) ;  [`LIEF::dwarf::Variable::to_decl()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable7to_declERK7DeclOpt>) )
  - `lief.dwarf.Type.to_decl()` ( [`lief::dwarf::Type::to_decl`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/enum.Type.html#method.to_decl>) ;  [`lief::dwarf::Type::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/enum.Type.html#method.to_decl_with_opt>) ;  [`lief.dwarf.Type.to_decl()`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.to_decl>) ;  [`LIEF::dwarf::Type::to_decl()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf4Type7to_declERK7DeclOpt>) )
  - `lief.dwarf.CompilationUnit.to_decl()` ( [`lief::dwarf::CompilationUnit::to_decl`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.CompilationUnit.html#method.to_decl>) ;  [`lief::dwarf::CompilationUnit::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.CompilationUnit.html#method.to_decl_with_opt>) ;  [`lief.dwarf.CompilationUnit.to_decl()`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.to_decl>) ;  [`LIEF::dwarf::CompilationUnit::to_decl()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit7to_declERK7DeclOpt>) )

  ```python
  import lief

  dbg = lief.dwarf.load("/bin/with_debug")

  opt = lief.DeclOpt()
  opt.is_cpp = True
  opt.indentation = 4

  for cu in dbg.compilation_units:
      print(cu.to_decl(opt))
  ```

**PDB:**

- Improve support and the API for `LF_ENUM`:  `lief.pdb.types.Enum` ( [`lief::pdb::types::Enum`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/types/struct.Enum.html>) ;  [`lief.pdb.types.Enum`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Enum>) ;  [`LIEF::pdb::types::Enum`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types4EnumE>) )
- Improve support and the API for `LF_PROCEDURE`:  `lief.pdb.types.Function` ( [`lief::pdb::types::Function`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/types/struct.Function.html>) ;  [`lief.pdb.types.Function`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Function>) ;  [`LIEF::pdb::types::Function`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types8FunctionE>) )
- Improve support and the API for `LF_ARRAY`:  `lief.pdb.types.Array` ( [`lief::pdb::types::Array`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/types/struct.Array.html>) ;  [`lief.pdb.types.Array`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Array>) ;  [`LIEF::pdb::types::Array`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types5ArrayE>) )
- Improve support and the API for *simple* types:  `lief.pdb.types.Simple` ( [`lief::pdb::types::Simple`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/types/struct.Simple.html>) ;  [`lief.pdb.types.Simple`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple>) ;  [`LIEF::pdb::types::Simple`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6SimpleE>) )
- Improve support and the API for `LF_ONEMETHOD`:  `lief.pdb.types.Method` ( [`lief::pdb::types::Method`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/types/struct.Method.html>) ;  [`lief.pdb.types.Method`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method>) ;  [`LIEF::pdb::types::Method`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6MethodE>) )
- Add support for generating a C/C++ definition for a  `lief.pdb.Function` ( [`lief::pdb::Function`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/struct.Function.html>) ;  [`lief.pdb.Function`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Function>) ;  [`LIEF::pdb::Function`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8FunctionE>) ) ( `lief.pdb.Function.to_decl()` ( [`lief::pdb::Function::to_decl`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/struct.Function.html#method.to_decl>) ;  [`lief::pdb::Function::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/struct.Function.html#method.to_decl_with_opt>) ;  [`lief.pdb.Function.to_decl()`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Function.to_decl>) ;  [`LIEF::pdb::Function::to_decl()`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb8Function7to_declERK7DeclOpt>) )) and a  `lief.pdb.CompilationUnit` ( [`lief::pdb::CompilationUnit`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/struct.CompilationUnit.html>) ;  [`lief.pdb.CompilationUnit`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.CompilationUnit>) ;  [`LIEF::pdb::CompilationUnit`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnitE>) ) ( `lief.pdb.CompilationUnit.to_decl()` ( [`lief::pdb::CompilationUnit::to_decl`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/struct.CompilationUnit.html#method.to_decl>) ;  [`lief::pdb::CompilationUnit::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/struct.CompilationUnit.html#method.to_decl_with_opt>) ;  [`lief.pdb.CompilationUnit.to_decl()`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.CompilationUnit.to_decl>) ;  [`LIEF::pdb::CompilationUnit::to_decl()`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb15CompilationUnit7to_declERK7DeclOpt>) )), configurable with the new  `lief.DeclOpt` ( [`lief::DeclOpt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/struct.DeclOpt.html>) ;  [`lief.DeclOpt`](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt>) ;  [`LIEF::DeclOpt`](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE>) ) structure.

**ELF:**

- Add support for `DT_AUXILIARY` tag:  `lief.ELF.DynamicEntryAuxiliary` ( [`lief.ELF.DynamicEntryAuxiliary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryAuxiliary>) ;  [`LIEF::ELF::DynamicEntryAuxiliary`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliaryE>) ;  [`lief::elf::dynamic::Auxiliary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/dynamic/struct.Auxiliary.html>) ) ([#1159](<https://github.com/lief-project/LIEF/issues/1159>)).
- Add support for `DT_FILTER` tag:  `lief.ELF.DynamicEntryFilter` ( [`lief.ELF.DynamicEntryFilter`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFilter>) ;  [`LIEF::ELF::DynamicEntryFilter`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilterE>) ;  [`lief::elf::dynamic::Filter`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/dynamic/struct.Filter.html>) )
- Add  `lief.ELF.parse_from_dump()` ( [`lief::elf::Binary::parse_from_dump`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.parse_from_dump>) ;  [`lief.ELF.parse_from_dump()`](<https://lief.re/doc/latest/changelog.html>) ;  [`LIEF::ELF::Parser::parse_from_dump()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser15parse_from_dumpENSt11string_viewE8uint64_tRK12ParserConfig>) ) to parse an ELF binary from a memory dump

**COFF:**

- Add  `lief.COFF.Section.coff_string` ( [`lief::coff::Section::coff_string`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/coff/struct.Section.html#method.coff_string>) ;  [`lief.COFF.Section.coff_string`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.coff_string>) ;  [`LIEF::COFF::Section::coff_string()`](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section11coff_stringEv>) ) for accessing the full section name when this name does not fit in 8 bytes.

**Mach-O:**

- Add support for writing big-endian Mach-O binaries ([#1236](<https://github.com/lief-project/LIEF/issues/1236>))
- Introduce an API for selecting a specific Mach-O binary by architecture from a FAT binary ([#1283](<https://github.com/lief-project/LIEF/pull/1283>))
- Add  `lief.MachO.FatBinary.create()` ( [`lief.MachO.FatBinary.create()`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary.create>) ;  [`LIEF::MachO::FatBinary::create()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary6createE10binaries_t>) ) to create a FAT binary from a list of  `lief.MachO.Binary` ( [`lief::macho::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html>) ;  [`lief.MachO.Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary>) ;  [`LIEF::MachO::Binary`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE>) ) objects targeting different architectures
- Add support for  `lief.MachO.ThreadLocalVariables` ( [`lief::macho::ThreadLocalVariables`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.ThreadLocalVariables.html>) ;  [`lief.MachO.ThreadLocalVariables`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables>) ;  [`LIEF::MachO::ThreadLocalVariables`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariablesE>) )
- Fix an extra byte being written after the thread state of an `LC_UNIXTHREAD`/`LC_THREAD` command, which shifted the following load commands by one byte ([#1344](<https://github.com/lief-project/LIEF/issues/1344>))
- Add support for editing the runtime tables of the `LC_FUNCTION_VARIANTS` command and committing the changes on write:  `lief.MachO.FunctionVariants` ( [`lief::macho::commands::FunctionVariants`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/commands/struct.FunctionVariants.html>) ;  [`lief.MachO.FunctionVariants`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants>) ;  [`LIEF::MachO::FunctionVariants`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariantsE>) )
- Add a structured parser, editing API and writer for the `LC_FUNCTION_VARIANT_FIXUPS` command:  `lief.MachO.FunctionVariantFixups` ( [`lief::macho::commands::FunctionVariantFixups`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/commands/struct.FunctionVariantFixups.html>) ;  [`lief.MachO.FunctionVariantFixups`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups>) ;  [`LIEF::MachO::FunctionVariantFixups`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixupsE>) )
- Add support for the `LC_LAZY_LOAD_DYLIB_INFO` command:  `lief.MachO.LazyLoadDylibInfo` ( [`lief::macho::commands::LazyLoadDylibInfo`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/commands/struct.LazyLoadDylibInfo.html>) ;  [`lief.MachO.LazyLoadDylibInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo>) ;  [`LIEF::MachO::LazyLoadDylibInfo`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfoE>) )
- Add  `lief.MachO.parse_from_dump()` ( [`lief::macho::FatBinary::parse_from_dump`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.FatBinary.html#method.parse_from_dump>) ;  [`lief.MachO.parse_from_dump()`](<https://lief.re/doc/latest/changelog.html>) ;  [`LIEF::MachO::Parser::parse_from_dump()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Parser15parse_from_dumpENSt11string_viewE8uint64_tRK12ParserConfig>) ) to parse a Mach-O binary from a memory dump

**PE:**

- Add setters for  `lief.PE.ImportEntry.iat_value` ( [`lief::pe::import::ImportEntry::iat_value`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/import/struct.ImportEntry.html#method.iat_value>) ;  [`lief.PE.ImportEntry.iat_value`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.iat_value>) ;  [`LIEF::PE::ImportEntry::iat_value()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4NK4LIEF2PE11ImportEntry9iat_valueEv>) ) and  `lief.PE.ImportEntry.ilt_value` ( [`lief::pe::import::ImportEntry::ilt_value`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/import/struct.ImportEntry.html#method.ilt_value>) ;  [`lief.PE.ImportEntry.ilt_value`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.ilt_value>) ;  [`LIEF::PE::ImportEntry::ilt_value()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4NK4LIEF2PE11ImportEntry9ilt_valueEv>) )
- Add  `lief.PE.Binary.offset_to_rva()` ( [`lief::pe::Binary::offset_to_rva`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.offset_to_rva>) ;  [`lief.PE.Binary.offset_to_rva()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.offset_to_rva>) ;  [`LIEF::PE::Binary::offset_to_rva()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4NK4LIEF2PE6Binary13offset_to_rvaE8uint64_t>) ) to convert a raw offset into a RVA
- Add  `lief.PE.parse_from_dump()` ( [`lief::pe::Binary::parse_from_dump`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.parse_from_dump>) ;  [`lief.PE.parse_from_dump()`](<https://lief.re/doc/latest/changelog.html>) ;  [`LIEF::PE::Parser::parse_from_dump()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Parser15parse_from_dumpENSt11string_viewE8uint64_tRK12ParserConfig>) ) to parse a PE binary from a memory dump
- Update  `lief.Binary.offset_to_virtual_address()` ( [`lief::generic::Binary::offset_to_virtual_address`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.offset_to_virtual_address>) ;  [`lief.Binary.offset_to_virtual_address()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.offset_to_virtual_address>) ;  [`LIEF::Binary::offset_to_virtual_address()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary25offset_to_virtual_addressE8uint64_t8uint64_t>) ) for PE binaries to return an **absolute** virtual address instead of a RVA ([#1318](<https://github.com/lief-project/LIEF/issues/1318>))
- Add support for adding an  `lief.PE.Import` ( [`lief::pe::import::Import`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/import/struct.Import.html>) ;  [`lief.PE.Import`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import>) ;  [`LIEF::PE::Import`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6ImportE>) ) at a specific position:  `lief.PE.Binary.add_import()` ( [`lief::pe::Binary::add_import`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.add_import>) ;  [`lief::pe::Binary::add_import_at_pos`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.add_import_at_pos>) ;  [`lief.PE.Binary.add_import()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.add_import>) ;  [`LIEF::PE::Binary::add_import()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Binary10add_importERKNSt6stringE7int32_t>) ) ([#1298](<https://github.com/lief-project/LIEF/pull/1298>))
- Improve support for EFI binaries, such as `bzImage` ([#1293](<https://github.com/lief-project/LIEF/pull/1293>))

**ObjC:**

- Add support for Objective-C categories ([#1353](<https://github.com/lief-project/LIEF/issues/1353>)):  `lief.ObjC.Category` ( [`lief::objc::Category`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/objc/struct.Category.html>) ;  [`lief.objc.Category`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Category>) ;  [`LIEF::objc::Category`](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8CategoryE>) ), accessible through  `lief.ObjC.Metadata.categories` ( [`lief::objc::Metadata::categories`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/objc/struct.Metadata.html#method.categories>) ;  [`lief.objc.Metadata.categories`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Metadata.categories>) ;  [`LIEF::objc::Metadata::categories()`](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Metadata10categoriesEv>) )

**Assembly:**

- Add support for iterating over the operands of MIPS, PowerPC, eBPF and RISC-V instructions (`Register`, `Immediate`, `Memory` and `PCRelative`):

  - `lief.assembly.mips.Instruction.operands()` ( [`lief::assembly::mips::Instruction::operands`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/mips/struct.Instruction.html#method.operands>) ;  [`lief.assembly.mips.Instruction.operands`](<https://lief.re/doc/latest/extended/disassembler/python/arch/mips.html#lief.assembly.mips.Instruction.operands>) ;  [`LIEF::assembly::mips::Instruction::operands()`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/mips.html#_CPPv4NK4LIEF8assembly4mips11Instruction8operandsEv>) )
  - `lief.assembly.powerpc.Instruction.operands()` ( [`lief::assembly::powerpc::Instruction::operands`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/powerpc/struct.Instruction.html#method.operands>) ;  [`lief.assembly.powerpc.Instruction.operands`](<https://lief.re/doc/latest/extended/disassembler/python/arch/powerpc.html#lief.assembly.powerpc.Instruction.operands>) ;  [`LIEF::assembly::powerpc::Instruction::operands()`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/powerpc.html#_CPPv4NK4LIEF8assembly7powerpc11Instruction8operandsEv>) )
  - `lief.assembly.ebpf.Instruction.operands()` ( [`lief::assembly::ebpf::Instruction::operands`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/ebpf/struct.Instruction.html#method.operands>) ;  [`lief.assembly.ebpf.Instruction.operands`](<https://lief.re/doc/latest/extended/disassembler/python/arch/ebpf.html#lief.assembly.ebpf.Instruction.operands>) ;  [`LIEF::assembly::ebpf::Instruction::operands()`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/ebpf.html#_CPPv4NK4LIEF8assembly4ebpf11Instruction8operandsEv>) )
  - `lief.assembly.riscv.Instruction.operands()` ( [`lief::assembly::riscv::Instruction::operands`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/assembly/riscv/struct.Instruction.html#method.operands>) ;  [`lief.assembly.riscv.Instruction.operands`](<https://lief.re/doc/latest/extended/disassembler/python/arch/riscv.html#lief.assembly.riscv.Instruction.operands>) ;  [`LIEF::assembly::riscv::Instruction::operands()`](<https://lief.re/doc/latest/extended/disassembler/cpp/arch/riscv.html#_CPPv4NK4LIEF8assembly5riscv11Instruction8operandsEv>) )

**Rust:**

> **Warning**
> 
> The Minimum Supported Rust Version (MSRV) is now `1.85.0` (previously `1.74.0`).

- The Rust FFI no longer relies on `autocxx` and `bindgen`. It is now built on top of plain `cxx`, which simplifies the bindings and reduces the iteration time
- The Rust bindings directory has been renamed from `api/rust/cargo/` to `api/rust/crates/`
- Add support for the `aarch64-linux-android` and `x86_64-linux-android` targets

**C++:**

- Add `LIEF_LIFETIMEBOUND` annotations wrapping `[[clang::lifetimebound]]` to leverage Clang’s [lifetime analysis](<https://clang.llvm.org/docs/LifetimeSafety.html>). This helps detect dangling references at compile time for methods that return references or iterators tied to an object’s lifetime:

  ```cpp
  // Clang can now warn about this dangling reference:
  auto& hdr = LIEF::ELF::Parser::parse("a.out")->header();
  LIEF_INFO("{}", hdr.header_size());
  // /src/src/ELF/Binary.cpp:63:15: error: object whose reference is captured
  // does not live long enough [-Werror,-Wlifetime-safety-use-after-scope]
  //    63 |   auto& hdr = LIEF::ELF::Parser::parse("a.out")->header();
  //       |               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // /src/src/ELF/Binary.cpp:63:47: note: destroyed here
  //    63 |   auto& hdr = LIEF::ELF::Parser::parse("a.out")->header();
  //       |                                               ^
  // /src/src/ELF/Binary.cpp:64:19: note: later used here
  //    64 |   LIEF_INFO("{}", hdr.header_size());
  ```

**Dependencies:**

- Update nanobind to version `v2.13.x`
- Update tl-expected to version `1.3.1`
- Update utfcpp to version `4.0.9`
- Update frozen to commit `61dce5a`
- Update spdlog to version `1.17.0`
- Update mbedtls to version `4.0.0`

**Extended:**

- Use LLVM `22.x`
- Add support to directly download a package from the **History**:

[![_images/lief-extended-history-link.webp](https://lief.re/doc/latest/_images/lief-extended-history-link.webp)](<https://lief.re/doc/latest/_images/lief-extended-history-link.webp>)

**Python:**

- Python 3.8 is no longer supported
- Add support for the free-threaded Python builds. The C++ core is now thread-safe with respect to its few static variables, and can be used when the GIL is disabled ([#1255](<https://github.com/lief-project/LIEF/issues/1255>)):

  ```python
  from concurrent.futures import ThreadPoolExecutor
  import lief

  def strip(path: str) -> None:
      binary = lief.ELF.parse(path)
      binary.strip()
      binary.write(f"{path}.stripped")

  with ThreadPoolExecutor() as pool:
      pool.map(strip, ["/bin/ls", "/bin/cat", "/bin/echo"])
  ```

## [0.17.6 - March 18th, 2026](<https://lief.re/doc/latest/changelog.html#march-18th-2026>)

**ELF:**

- Fix alignment for `PHDR/SHDR` and improve `TLS/RELR` handling ([#1315](<https://github.com/lief-project/LIEF/issues/1315>))
- Skip `NOBITS` sections in layout calculations and improve index retrieval (related to [#1315](<https://github.com/lief-project/LIEF/issues/1315>))

**PE:**

- Fix IAT parsing issue by [itamarga](<https://github.com/itamarga>) in PR [#1314](<https://github.com/lief-project/LIEF/pull/1314>))

## [0.17.5 - March 8th, 2026](<https://lief.re/doc/latest/changelog.html#march-8th-2026>)

**ELF:**

- Add missing segments in X86\_64 coredump parser ([#1278](<https://github.com/lief-project/LIEF/issues/1278>))
- Add TLSDESC\_PLT and TLSDESC\_GOT to ELF dynamic tags ([#1311](<https://github.com/lief-project/LIEF/issues/1311>))
- Fix dynamic entry shifting for Android relocations ([#1309](<https://github.com/lief-project/LIEF/issues/1309>))

**MachO:**

- Fix `DyldInfo::show_bindings` integer overflow ([#1313](<https://github.com/lief-project/LIEF/issues/1313>))

## [0.17.4 - February 21st, 2026](<https://lief.re/doc/latest/changelog.html#february-21st-2026>)

**PE:**

- Fixed the address type in the TLS builder (by [Immortalety](<https://github.com/Immortalety>) in PR [#1296](<https://github.com/lief-project/LIEF/pull/1296>))

**MachO:**

- Fixed  `lief.MachO.Binary.virtual_address_to_offset()` ( [`lief::macho::Binary::virtual_address_to_offset`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.virtual_address_to_offset>) ;  [`lief.MachO.Binary.virtual_address_to_offset()`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.virtual_address_to_offset>) ;  [`LIEF::MachO::Binary::virtual_address_to_offset()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary25virtual_address_to_offsetE8uint64_t>) ) to properly handle non-file-backed segments, such as `__DATA` segments containing only `ZEROFILL` sections like `__bss` (by [jalopezg-git](<https://github.com/jalopezg-git>) in PR [#1301](<https://github.com/lief-project/LIEF/pull/1301>), fixing [#1299](<https://github.com/lief-project/LIEF/issues/1299>)).
- Fixed `patch_relocation()` to correctly process tagged pointers (by [jalopezg-git](<https://github.com/jalopezg-git>) in PR [#1302](<https://github.com/lief-project/LIEF/pull/1302>), fixing [#1300](<https://github.com/lief-project/LIEF/issues/1300>)).

**COFF:**

- Resolved a compilation conflict with the Windows `minwindef.h` macro `#define max`.

**CMake:**

- Fixed compiler flag issues on Windows when compiling with `clang-cl` (by [sigewinnefish](<https://github.com/sigewinnefish>) in PR [#1306](<https://github.com/lief-project/LIEF/pull/1306>)).

**Python:**

- Bumped various Python backend build dependencies in `api/python/build-requirements.txt` to support Python `3.14` when compiling from sources ([#1304](<https://github.com/lief-project/LIEF/issues/1304>)).

## [0.17.3 - January 24th, 2026](<https://lief.re/doc/latest/changelog.html#january-24th-2026>)

**PE:**

- Fixed bug with resources ([#1281](<https://github.com/lief-project/LIEF/issues/1281>)).
- Fixed VA/RVA confusion in the PE builder ([#1284](<https://github.com/lief-project/LIEF/issues/1284>)).

## [0.17.2 - January 3rd, 2026](<https://lief.re/doc/latest/changelog.html#january-3rd-2026>)

**Mach-O:**

- Differentiate Mach-O FAT magic bytes and Java classes (by [wangmot](<https://github.com/wangmot>), [#1215](<https://github.com/lief-project/LIEF/issues/1215>)).

**Compilation:**

- Fixed MinGW compilation for some configurations (by [TheBrokenRail](<https://github.com/TheBrokenRail>), [dabbb72](<https://github.com/lief-project/LIEF/commit/dabbb72>)).

**PE:**

- Fixed alignment issue when rebuilding PE relocations ([#1261](<https://github.com/lief-project/LIEF/issues/1261>)).
- Fixed infinite loop when processing v2 dynamic relocations (by [chengyongru](<https://github.com/chengyongru>), fixing [#1273](<https://github.com/lief-project/LIEF/issues/1273>)).

**ELF:**

- Ensure that added DYN ELF sections are properly aligned (by [schmchrt](<https://github.com/schmchrt>), fixing [#1261](<https://github.com/lief-project/LIEF/issues/1261>)).
- Fixed GnuHash null dereference ([#1277](<https://github.com/lief-project/LIEF/issues/1277>)).

**Mach-O:**

- Fixed major performance issue when parsing certain Mach-O files (by [trevor-e](<https://github.com/trevor-e>), fixing [#1262](<https://github.com/lief-project/LIEF/issues/1262>)).

## [0.17.1 - October 25th, 2025](<https://lief.re/doc/latest/changelog.html#october-25th-2025>)

**ELF:**

- Fixed [#1251](<https://github.com/lief-project/LIEF/issues/1251>).

**Compilation:**

- Fixed missing visibility ([#1254](<https://github.com/lief-project/LIEF/pull/1254>)).
- Fixed incorrect paging computations that occurred when only a subset of formats was enabled.
- Fixed include issue with the COFF format.

## [0.17.0 - September 14th, 2025](<https://lief.re/doc/latest/changelog.html#september-14th-2025>)

> **BinaryNinja &amp; Ghidra Plugins**
> 
> LIEF-based plugins for Binary Ninja and Ghidra have been bootstrapped here:
> 
> - [Ghidra plugin](<https://lief.re/doc/latest/plugins/ghidra/index.html#plugins-ghidra>)
> - [BinaryNinja plugin](<https://lief.re/doc/latest/plugins/binaryninja/index.html#plugins-binaryninja>)

> **LIEF Tools**
> 
> I initiated a `Tools` section which aims at providing utilities based on LIEF (mostly CLI):
> 
> - [lief-patchelf](<https://lief.re/doc/latest/tools/lief-patchelf/index.html#tools-lief-patchelf>)

**Assembler:**

- Add support for [Contextual Assembly Patching](<https://lief.re/doc/latest/extended/assembler/index.html#extended-assembler-contextual-patching>)

**DSC:**

- Add enum for the latest dyld shared cache version introducing changes in the header layout (`dyld-1284.13 - 2025-04-25`)

  ```diff
     uint64_t    dynamicDataOffset;
     uint64_t    dynamicDataMaxSize;
     uint32_t    tproMappingsOffset;
     uint32_t    tproMappingsCount;
  +  uint64_t    functionVariantInfoAddr;
  +  uint64_t    functionVariantInfoSize;
  +  uint64_t    prewarmingDataOffset;
  +  uint64_t    prewarmingDataSize;
  };
  ```
- Add enum for the latest dyld shared cache version introducing changes in the header layout (`dyld-1231.3 - 2024-09-24`)

  ```diff
     uint64_t    dynamicDataOffset;
     uint64_t    dynamicDataMaxSize;
  +  uint32_t    tproMappingsOffset;
  +  uint32_t    tproMappingsCount;
  };
  ```
- Fix symbol resolution issue: [#1127](<https://github.com/lief-project/LIEF/issues/1127>)

**PE:**

- Please check [LIEF 0.17.0 - PE changelog](<https://lief.re/doc/latest/changelog/pe-0-17-0.html#pe-0170-changelog>)
- [luadebug](<https://github.com/luadebug>) added support for pretty printing OID value and non-roman characters in X509 certificates (see: [#1226](<https://github.com/lief-project/LIEF/pull/1226>), [#1219](<https://github.com/lief-project/LIEF/issues/1219>))

**COFF:**

- Initial support for the COFF format: see the [COFF section](<https://lief.re/doc/latest/formats/coff/index.html#format-coff>)

**Mach-O:**

- Initial support for  `lief.MachO.FunctionVariants` ( [`lief::macho::commands::FunctionVariants`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/commands/struct.FunctionVariants.html>) ;  [`lief.MachO.FunctionVariants`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants>) ;  [`LIEF::MachO::FunctionVariants`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariantsE>) ) and  `lief.MachO.FunctionVariantFixups` ( [`lief::macho::commands::FunctionVariantFixups`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/commands/struct.FunctionVariantFixups.html>) ;  [`lief.MachO.FunctionVariantFixups`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups>) ;  [`LIEF::MachO::FunctionVariantFixups`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixupsE>) ) commands (`LC_FUNCTION_VARIANTS, LC_FUNCTION_VARIANT_FIXUPS`)
- Add support for  `lief.MachO.Note` ( [`lief::macho::commands::Note`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/commands/struct.Note.html>) ;  [`lief.MachO.NoteCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.NoteCommand>) ;  [`LIEF::MachO::NoteCommand`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11NoteCommandE>) ) command (`LC_NOTE`)
- Add support for  `lief.MachO.AtomInfo` ( [`lief::macho::commands::AtomInfo`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/commands/struct.AtomInfo.html>) ;  [`lief.MachO.AtomInfo`](<https://lief.re/doc/latest/changelog.html>) ;  [`LIEF::MachO::AtomInfo`](<https://lief.re/doc/latest/changelog.html>) ) command (`LC_ATOM_INFO`)
- Add support for modifying Mach-O commands that embed variable-length data ([#1204](<https://github.com/lief-project/LIEF/issues/1204>), [#1125](<https://github.com/lief-project/LIEF/issues/1125>)). See: [RPath and Library Path Modification](<https://lief.re/doc/latest/formats/macho/index.html#format-macho-rpath>).

  ```python
  # Change library name
  for lib in macho.libraries:
      lib.name += "/some/path/lib.dylib"

  # Change rpath
  for rpath in macho.rpaths:
      rpath.path += '/a/very/long/path/that/needs/expansion'
  ```
- Add  `lief.MachO.Binary.find_library()` ( [`lief::macho::Binary::find_library`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.find_library>) ;  [`lief.MachO.Binary.find_library()`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.find_library>) ;  [`LIEF::MachO::Binary::find_library()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary12find_libraryERKNSt6stringE>) )
- To void `#define` conflicts with Apple SDK, the following enums have been renamed:

  **Python**

  ```diff
  - lief.MachO.FAT_MAGIC
  + lief.MachO.MAGIC_FAT

  - lief.MachO.FAT_CIGAM
  + lief.MachO.CIGAM_FAT

  - lief.MachO.Symbol.ORIGIN.LC_SYMTAB
  + lief.MachO.Symbol.ORIGIN.SYMTAB

  - lief.MachO.Section.TYPE.S_4BYTE_LITERALS
  + lief.MachO.Section.TYPE.IS_4BYTE_LITERALS

  - lief.MachO.Section.TYPE.S_8BYTE_LITERALS
  + lief.MachO.Section.TYPE.IS_8BYTE_LITERALS

  - lief.MachO.Section.TYPE.S_16BYTE_LITERALS
  + lief.MachO.Section.TYPE.IS_16BYTE_LITERALS
  ```

  **C++**

  ```diff
  - MACHO_TYPES::MH_MAGIC
  - MACHO_TYPES::MH_CIGAM
  - MACHO_TYPES::MH_MAGIC_64
  - MACHO_TYPES::MH_CIGAM_64
  - MACHO_TYPES::FAT_MAGIC
  - MACHO_TYPES::FAT_CIGAM

  + MACHO_TYPES::MAGIC
  + MACHO_TYPES::CIGAM
  + MACHO_TYPES::MAGIC_64
  + MACHO_TYPES::CIGAM_64
  + MACHO_TYPES::MAGIC_FAT
  + MACHO_TYPES::CIGAM_FAT

  - Section::TYPE::S_16BYTE_LITERALS
  + Section::TYPE::IS_16BYTE_LITERALS

  - Section::TYPE::S_4BYTE_LITERALS
  + Section::TYPE::IS_4BYTE_LITERALS

  - Section::TYPE::S_8BYTE_LITERALS
  + Section::TYPE::IS_8BYTE_LITERALS

  - Symbol::ORIGIN::LC_SYMTAB
  + Symbol::ORIGIN::SYMTAB
  ```

**ELF:**

- LIEF newly-inserted sections are now compatible with a `strip` after the modification of the binary (see: [Adding a section/segment](<https://lief.re/doc/latest/formats/elf/index.html#format-elf-section-segment>))
- Enhance support for IA64 architecture.
- Introduce [`lief.ELF.Segment.raw_flags`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.raw_flags> "lief.ELF.Segment.raw_flags") to access the raw (integer) value of the flag
- If an ELF binary uses a custom page size, its value can be defined in the parser configuration:  `lief.ELF.ParserConfig.page_size` ( [`lief::elf::ParserConfig::page_size`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.ParserConfig.html#structfield.page_size>) ;  [`lief.ELF.ParserConfig.page_size`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.page_size>) ;  [`LIEF::ELF::ParserConfig::page_size`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig9page_sizeE>) ).
- Add support for SH4
- Add suport for x32/ILP32 ELF binaries ([#1225](<https://github.com/lief-project/LIEF/issues/1225>))
- Add support for S390x
- Better endianess support when writing back a binary.
- Enhance support for removing segments ([#1233](<https://github.com/lief-project/LIEF/issues/1233>)):  `lief.ELF.Binary.remove_segment()` ( [`lief::elf::Binary::remove_segment`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.remove_segment>) ;  [`lief::elf::Binary::remove_segments_by_type`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.remove_segments_by_type>) ;  [`lief.ELF.Binary.remove()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.remove>) ;  [`void LIEF::ELF::Binary::remove(const Segment &, bool)`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary6removeERK7Segmentb>) ;  [`void LIEF::ELF::Binary::remove(Segment::TYPE, bool)`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary6removeEN7Segment4TYPEEb>) )
- Enhance support for removing or modifying symbol versions (related to the [lief-patchelf](<https://lief.re/doc/latest/tools/lief-patchelf/index.html#tools-lief-patchelf>) initiative)
- New doc section: [Symbol Versions](<https://lief.re/doc/latest/formats/elf/index.html#format-elf-symbols-version>)
- New doc section: [R[UN]PATH Modification](<https://lief.re/doc/latest/formats/elf/index.html#format-elf-rpath-modification>)

**DWARF:**

- LIEF extended can now process DWARF debug info in PE binaries
- Add support for creating DWARF: [DWARF Editor](<https://lief.re/doc/latest/extended/dwarf/index.html#extended-dwarf-editor>) (require extended version `>= 0.17.0.2623`)

**PDB:**

- Add  `lief.pdb.is_pdb` ( [`lief::pdb::is_pdb`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/fn.is_pdb.html>) ;  [`lief.is_pdb()`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.is_pdb>) ;  [`bool LIEF::pdb::is_pdb(std::string_view)`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb6is_pdbENSt11string_viewE>) )
- Add support for CodeView symbols: `S_COMPILE3, S_COMPILE2, S_BUILDINFO, S_ENVBLOCK`. These symbols are exposed through the interface  `lief.pdb.BuildMetadata` ( [`lief::pdb::BuildMetadata`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/struct.BuildMetadata.html>) ;  [`lief.pdb.BuildMetadata`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata>) ;  [`LIEF::pdb::BuildMetadata`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadataE>) ), which can be accessed using  `lief.pdb.CompilationUnit.build_metadata()` ( [`lief::pdb::CompilationUnit::build_metadata`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/struct.CompilationUnit.html#method.build_metadata>) ;  [`lief.pdb.CompilationUnit.build_metadata`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.CompilationUnit.build_metadata>) ;  [`LIEF::pdb::CompilationUnit::build_metadata()`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb15CompilationUnit14build_metadataEv>) ). This metadata provides build time information such as:

  ```text
  Module Name : * Linker *
  Build Metadata:
    Frontend Version: 0.0.0.0
    Backend Version : 14.37.32825.0
    Tool Version    : Microsoft (R) LINK
    Language        : LINK
    Target          : X64
    Environment:
      cwd: C:\Users\romai\dev\rust\ast-grep
      exe: C:\Program Files\Microsoft Visual Studio\2022\Community\[...]
      pdb: C:\Users\romai\dev\rust\ast-grep\target\debug\deps\ast_grep.pdb
      cmd:  /NOLOGO /LIBPATH:C:\Users\romai\dev\rust\ast-grep\target\[...]


  Module Name : std-4ee9ee8805e6ac55.std.ddad90bab7781587-cgu.0.rcgu.o
  Object      : C:\Users\romai\scoop\persist\rustup\.rustup\toolchains\[...]
  Build Metadata:
    Frontend Version: 1.74.0.0
    Backend Version : 17004.0.0.0
    Tool Version    : clang LLVM (rustc version 1.74.0 (79e9716c9 2023-11-13))
    Language        : RUST
    Target          : X64
    Build Info:
      Current directory: /rustc/79e9716c980570bfd1f666e3b16ac583f0168962
      Build tool       : C:\a\rust\rust\build\x86_64-pc-windows-msvc\stage1\bin\rustc.exe
      Source file      : library\std\src\lib.rs\@\std.ddad90bab7781587-cgu.0
      Command line     : "-cc1" "--crate-name" "std" "--edition=2021" [...]
  ```

**OAT:**

- Parsing Android OAT files requires to **explicitly** use [`lief.OAT.parse()`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.parse> "lief.OAT.parse")

```python
import lief

# Before LIEF 0.17.0 this function returned a lief.OAT.Binary object
lief.parse("CallDeviceId.oat")

# Since LIEF 0.17.0 this function returns a lief.ELF.Binary object
lief.parse("CallDeviceId.oat")

# Return a lief.OAT.Binary object
lief.OAT.parse("CallDeviceId.oat")
```

**Abstraction:**

- Expose  `lief.abstract.Binary.page_size()` ( [`lief::generic::Binary::page_size`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.page_size>) ;  [`lief.Binary.page_size`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.page_size>) ;  [`LIEF::Binary::page_size()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary9page_sizeEv>) )
- Add  `lief.abstract.Binary.load_debug_info()` ( [`lief::generic::Binary::load_debug_info`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.load_debug_info>) ;  [`lief.Binary.load_debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.load_debug_info>) ;  [`LIEF::Binary::load_debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary15load_debug_infoERKNSt6stringE>) ) to attach an external debug file to a  `lief.abstract.Binary` ( [`lief::generic::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html>) ;  [`lief.Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary>) ;  [`LIEF::Binary`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE>) ). See these sections for more details: [DWARF: Loading an external debug file](<https://lief.re/doc/latest/extended/dwarf/index.html#extended-dwarf-load-ext>)[PDB: Loading an external debug file](<https://lief.re/doc/latest/extended/pdb/index.html#extended-pdb-load-ext>)
- Add  `lief.DebugInfo.find_function_address()` ( [`lief::generic::DebugInfo::find_function_address`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.DebugInfo.html#method.find_function_address>) ;  [`lief.DebugInfo.find_function_address()`](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DebugInfo.find_function_address>) ;  [`LIEF::DebugInfo::find_function_address()`](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4NK4LIEF9DebugInfo21find_function_addressENSt11string_viewE>) )

**Extended:**

- Fix issue in the Python bindings while trying to access `lief.__LIEF_MAIN_COMMIT__`
- Fix CMake issue with `find_package(lief-extended)`
- Use LLVM `21.1.x`

**Build System:**

- LIEF is now available in [vcpkg](<https://github.com/microsoft/vcpkg/tree/master/ports/lief>). Many thanks to [luadebug](<https://github.com/luadebug>) for this support.

**Dependencies:**

- Move to tl-expected `1.2.0`
- Move to utfcpp `4.0.6`
- Move to mbedtls `3.6.4`
- Move to spdlog `1.15.3`
- Move to `nlohmann/json` `3.12.0`
- Upgrade nanobind to version `v2.8.x`

**Utilities:**

- Add  `LIEF.dump()` ( [`lief::dump`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/fn.dump.html>) ;  [`lief::dump_with_limit`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/fn.dump_with_limit.html>) ;  [`lief.dump()`](<https://lief.re/doc/latest/api/utilities/index.html#lief.dump>) ;  [`LIEF::dump()`](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF4dumpERKNSt6vectorI7uint8_tEERKNSt6stringERKNSt6stringE6size_t>) )

## [0.16.7 - October 5th, 2025](<https://lief.re/doc/latest/changelog.html#october-5th-2025>)

**Python:**

- Add wheels for Python 3.14

**Mach-O:**

- Fix `has_nx` ([#1218](<https://github.com/lief-project/LIEF/pull/1218>))
- Fix [#1228](<https://github.com/lief-project/LIEF/issues/1228>)

**ELF:**

- Fix [#1241](<https://github.com/lief-project/LIEF/issues/1241>)

**Other:**

- [#1220](<https://github.com/lief-project/LIEF/pull/1220>)

## [0.16.6 - May 29th, 2025](<https://lief.re/doc/latest/changelog.html#may-29th-2025>)

**Compilation:**

- Fix missing header ([#1192](<https://github.com/lief-project/LIEF/issues/1192>))
- Fix GCC 15 issue ([#1203](<https://github.com/lief-project/LIEF/issues/1203>))
- Fix [#1210](<https://github.com/lief-project/LIEF/issues/1210>)

**Mach-O:**

- Fix use-after-move ([#1212](<https://github.com/lief-project/LIEF/issues/1212>))
- Fix [#1206](<https://github.com/lief-project/LIEF/issues/1206>)

**Python:**

- Fix Python logger warning

**Other:**

- [#1217](<https://github.com/lief-project/LIEF/issues/1217>)
- [#1216](<https://github.com/lief-project/LIEF/pull/1216>)

## [0.16.5 - April 19th, 2025](<https://lief.re/doc/latest/changelog.html#april-19th-2025>)

**ELF:**

- Relax the condition over the `DT_SYMENT` entry ([#1177](<https://github.com/lief-project/LIEF/issues/1177>))

**Mach-O:**

- Modifications on  `lief.MachO.EncryptionInfo` ( [`lief::macho::commands::EncryptionInfo`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/commands/struct.EncryptionInfo.html>) ;  [`lief.MachO.EncryptionInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.EncryptionInfo>) ;  [`LIEF::MachO::EncryptionInfo`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14EncryptionInfoE>) ) are now committed when doing a `write()`. See: [#1173](<https://github.com/lief-project/LIEF/issues/1173>)

**Compilation:**

- Fix compilation issue when targeting Linux i386/i686 ([#1189](<https://github.com/lief-project/LIEF/issues/1189>))
- Better support for external `fmt` library
- Fix `fmt` unicode issue
- Fix missing `cstdio` ([#1184](<https://github.com/lief-project/LIEF/issues/1184>))

**Packages:**

- Add Python, Rust, SDK packages for Windows ARM64 (`aarch64-pc-windows-msvc`)
- Add Python, Rust, SDK packages for Linux Musl ARM64 (`aarch64-unknown-linux-musl`)
- Add Python, Rust, SDK packages for Linux Musl i686 (`i686-unknown-linux-musl`)

## [0.16.4 - February 23rd, 2025](<https://lief.re/doc/latest/changelog.html#february-23rd-2025>)

**Python:**

- Relax checks on the enum verification. As described in [#1170](<https://github.com/lief-project/LIEF/issues/1170>) and [#1172](<https://github.com/lief-project/LIEF/issues/1172>), an invalid enum led to an unrecoverable error. The new behavior now returns the raw `int` value if it can’t be converted into the given enum.
- Upgrade nanobind to version `v2.5.0`

**PE:**

- Fix export forwarding issue ([#1168](<https://github.com/lief-project/LIEF/issues/1168>))

**MachO:**

- Fix truncated `nlist_t.n_type` when rewriting a Mach-O binary

## [0.16.3 - February 1st, 2025](<https://lief.re/doc/latest/changelog.html#february-1st-2025>)

**ELF:**

- Fix issue when parsing the dynamic table with an invalid offset (bug found by [lebr0nli](<https://github.com/lebr0nli>))
- Fix endianness issue with `IA64` binaries ([#1164](<https://github.com/lief-project/LIEF/issues/1164>))

**PE:**

- Fix missing original forwarded function name ([#1166](<https://github.com/lief-project/LIEF/issues/1166>))

**Misc:**

- Add support for spdlog compiled with `SPDLOG_WCHAR_FILENAMES` ([#1147](<https://github.com/lief-project/LIEF/issues/1147>))

## [0.16.2 - January 1st, 2025](<https://lief.re/doc/latest/changelog.html#january-1st-2025>)

**Compilation:**

- Fix broken `aarch64` Python wheel which is related to a toolchain issue ([#1146](<https://github.com/lief-project/LIEF/issues/1146>))

## [0.16.1 - December 26th, 2024](<https://lief.re/doc/latest/changelog.html#december-26th-2024>)

**MachO:**

- Various fixes from [DzenIsRich](<https://github.com/DzenIsRich>) &amp; [peledins-zimperium](<https://github.com/peledins-zimperium>) Thanks to them, Mach-O modification is more reliable.
- Fix issue when building with `-DLIEF_MACHO=ON` (see: [#1138](<https://github.com/lief-project/LIEF/issues/1138>))

**Rust:**

- Fix min-rustc version issue (see: [75a27f0](<https://github.com/lief-project/LIEF/commit/75a27f0e>))

**Compilation:**

- Fix missing `LIEF_API` visibility ([e01f92a](<https://github.com/lief-project/LIEF/commit/e01f92a0>), [#1140](<https://github.com/lief-project/LIEF/pull/1140>))

## [0.16.0 - December 10th, 2024](<https://lief.re/doc/latest/changelog.html#december-10th-2024>)

**Abstraction:**

- Add  `LIEF.get_int_from_virtual_address()` ( [`lief::elf::Binary::get_int_from_virtual_address`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.get_int_from_virtual_address>) ;  [`lief.Binary.get_int_from_virtual_address()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.get_int_from_virtual_address>) ;  [`LIEF::Binary::get_int_from_virtual_address()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4I0ENK4LIEF6Binary28get_int_from_virtual_addressEN4LIEF6resultI1TEE8uint64_t8VA_TYPES>) ) to read an **integer** value at a specific virtual address

  **C++**

  ```cpp
  LIEF::Binary& bin;

  uint16_t short_value = bin.get_int_from_virtual_address<uint16_>(0x140002CC8);
  ```

  **Python**

  ```python
  some_bin: lief.Binary = ...
  long_value = some_bin.get_int_from_virtual_address(0x140002CC8, 4)
  # or
  long_value = some_bin.get_int_from_virtual_address(0x140002CC8, ctypes.sizeof(ctypes.c_uint32))
  ```

  **Rust**

  ```rust
  elf: &lief::elf::Binary
  let value: i16 = elf.get_int_from_virtual_address::<i16>(0x401126).unwrap();
  ```
- Global code cleaning (especially,  `lief.Header.ARCHITECTURES` ( [`lief.Header.ARCHITECTURES`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES>) ;  [`LIEF::Header::ARCHITECTURES`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURESE>) ) and  `lief.Header.MODES` ( [`lief.Header.MODES`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.MODES>) ;  [`LIEF::Header::MODES`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header5MODESE>) ) is now more meaningful)
- Re-scope `lief.ARCHITECTURES` into  `lief.Header.ARCHITECTURES` ( [`lief.Header.ARCHITECTURES`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES>) ;  [`LIEF::Header::ARCHITECTURES`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURESE>) )
- Re-scope `lief.MODES` into  `lief.Header.MODES` ( [`lief.Header.MODES`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.MODES>) ;  [`LIEF::Header::MODES`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header5MODESE>) )
- Re-scope `lief.OBJECT_TYPES` into  `lief.Header.OBJECT_TYPES` ( [`lief.Header.OBJECT_TYPES`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.OBJECT_TYPES>) ;  [`LIEF::Header::OBJECT_TYPES`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header12OBJECT_TYPESE>) )
- Re-scope `lief.ENDIANNESS` into  `lief.Header.ENDIANNESS` ( [`lief.Header.ENDIANNESS`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ENDIANNESS>) ;  [`LIEF::Header::ENDIANNESS`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header10ENDIANNESSE>) )

**MachO:**

- Fix endianness support ([#1110](<https://github.com/lief-project/LIEF/issues/1110>))
- Add helpers to determine the platform targeted by a Mach-O binary:

  - `lief.MachO.Binary.is_ios()` ( [`lief::macho::Binary::is_ios`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.is_ios>) ;  [`lief.MachO.Binary.is_ios`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.is_ios>) ;  [`LIEF::MachO::Binary::is_ios()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary6is_iosEv>) )
  - `lief.MachO.Binary.is_macos()` ( [`lief::macho::Binary::is_macos`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.is_macos>) ;  [`lief.MachO.Binary.is_macos`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.is_macos>) ;  [`LIEF::MachO::Binary::is_macos()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary8is_macosEv>) )
  - `lief.MachO.Binary.platform()` ( [`lief::macho::Binary::platform`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.platform>) ;  [`lief.MachO.Binary.platform`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.platform>) ;  [`LIEF::MachO::Binary::platform()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary8platformEv>) )
- Expose an iterator over the stub entries located in `__stubs,__auth_stubs,__symbol_stub,__picsymbolstub4`:

  `lief.MachO.Binary.symbol_stubs()` ( [`lief::macho::Binary::symbol_stubs`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.symbol_stubs>) ;  [`lief.MachO.Binary.symbol_stubs`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.symbol_stubs>) ;  [`LIEF::MachO::Binary::symbol_stubs()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary12symbol_stubsEv>) ) -  `lief.MachO.Stub` ( [`lief::macho::Stub`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Stub.html>) ;  [`lief.MachO.Stub`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Stub>) ;  [`LIEF::MachO::Stub`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4StubE>) )
- Add support for the `LC_SUBCLIENT` command:  `lief.MachO.SubClient` ( [`lief::macho::commands::SubClient`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/commands/struct.SubClient.html>) ;  [`lief.MachO.SubClient`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SubClient>) ;  [`LIEF::MachO::SubClient`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9SubClientE>) )
- Add support for the `LC_ROUTINE/LC_ROUTINE64` command:  `lief.MachO.Routine` ( [`lief::macho::commands::Routine`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/commands/struct.Routine.html>) ;  [`lief.MachO.Routine`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Routine>) ;  [`LIEF::MachO::Routine`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7RoutineE>) )
- Expose an iterator for the indirect symbols in  `lief.MachO.DynamicSymbolCommand` ( [`lief::macho::commands::DynamicSymbolCommand`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/commands/struct.DynamicSymbolCommand.html>) ;  [`lief.MachO.DynamicSymbolCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand>) ;  [`LIEF::MachO::DynamicSymbolCommand`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommandE>) )
- Add  `lief.MachO.Binary.bindings()` ( [`lief::macho::Binary::bindings`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.bindings>) ;  [`lief.MachO.Binary.bindings`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.bindings>) ;  [`LIEF::MachO::Binary::bindings()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary8bindingsEv>) ) to iterate over the bindings info located in  `lief.MachO.DyldInfo` ( [`lief::macho::commands::DyldInfo`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/commands/struct.DyldInfo.html>) ;  [`lief.MachO.DyldInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo>) ;  [`LIEF::MachO::DyldInfo`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfoE>) ) or  `lief.MachO.ChainedBindingInfo` ( [`lief::macho::binding_info::Chained`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/binding_info/struct.Chained.html>) ;  [`lief.MachO.ChainedBindingInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ChainedBindingInfo>) ;  [`LIEF::MachO::ChainedBindingInfo`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfoE>) )
- Add  `lief.MachO.IndirectBindingInfo` ( [`lief::macho::binding_info::Indirect`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/binding_info/struct.Indirect.html>) ;  [`lief.MachO.IndirectBindingInfo`](<https://lief.re/doc/latest/changelog.html>) ;  [`LIEF::MachO::IndirectBindingInfo`](<https://lief.re/doc/latest/changelog.html>) ) to represent a binding operation inferred from the indirect symbol table.

  This can be handy if a Mach-O does not have the commands  `lief.MachO.DyldInfo` ( [`lief::macho::commands::DyldInfo`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/commands/struct.DyldInfo.html>) ;  [`lief.MachO.DyldInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo>) ;  [`LIEF::MachO::DyldInfo`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfoE>) ) or  `lief.MachO.ChainedBindingInfo` ( [`lief::macho::binding_info::Chained`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/binding_info/struct.Chained.html>) ;  [`lief.MachO.ChainedBindingInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ChainedBindingInfo>) ;  [`LIEF::MachO::ChainedBindingInfo`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfoE>) ) (e.g. extracted shared cache library)

**PE:**

- Fix authenticode error while reading RSA PKCS#1 1.5 padding

**ELF:**

- Fix issue when multiple empty strings are present in the `.symtab` section ([#1124](<https://github.com/lief-project/LIEF/pull/1124>))
- Add  `lief.ELF.Relocation.resolve()` ( [`lief::elf::Relocation::resolve`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Relocation.html#method.resolve>) ;  [`lief::elf::Relocation::resolve_with_base_address`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Relocation.html#method.resolve_with_base_address>) ;  [`lief.ELF.Relocation.resolve()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.resolve>) ;  [`LIEF::ELF::Relocation::resolve()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation7resolveE8uint64_t>) ) to resolve the value of relocations
- Add support for eBPF relocations.
- Add support for `GNU_PROPERTY_AARCH64_FEATURE_PAUTH` GNU property note:  `lief.ELF.AArch64PAuth` ( [`lief.ELF.AArch64PAuth`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64PAuth>) ;  [`LIEF::ELF::AArch64PAuth`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AArch64PAuthE>) ).
- Add  `lief.ELF.Binary.is_targeting_android` ( [`lief::elf::Binary::is_targeting_android`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.is_targeting_android>) ;  [`lief.ELF.Binary.is_targeting_android`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.is_targeting_android>) ;  [`LIEF::ELF::Binary::is_targeting_android()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary20is_targeting_androidEv>) ) to check if an ELF targets Android
- Fix a critical error when rewriting ELF file with `DT_RELR` relocations. This error leads to a crash of the modified binary.
- Fix error while (re)generating ELF’s RELR relocations ([#1097](<https://github.com/lief-project/LIEF/issues/1097>))
- Add support for RISC-V architecture
- Fix bug when trying to remove a dynamic symbol that is associated with multiple relocations ([#1089](<https://github.com/lief-project/LIEF/issues/1089>))

**Rust:**

- Mutable API are progressively introduced:

  - ELF:

    - [`lief::elf::Binary::write`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.write>)
    - [`lief::elf::Binary::write_with_config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.write_with_config>)
    - [`lief::elf::Binary::add_library`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.add_library>)
  - PE:

    - [`lief::pe::Binary::write`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.write>)
  - MachO:

    - [`lief::macho::Binary::write`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.write>)
    - [`lief::macho::Binary::write_with_config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.write_with_config>)
    - [`lief::macho::Binary::add_library`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.add_library>)
- Thanks to [Huntragon](<https://github.com/Huntragon>) Rust bindings can be used without openssl (see: [#1105](<https://github.com/lief-project/LIEF/pull/1105>))
- Rust precompiled Linux packages are now supported for Debian 10 &amp; Ubuntu 19.10. Before, they require at least Debian 11 &amp; Ubuntu 20.04
- Add support for the `x86_64-unknown-linux-musl` target which allows to generate full static executable.
- Add [`lief::elf::header::Arch`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/header/enum.Arch.html>)
- Add [`lief::elf::dynamic::Flags`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/dynamic/struct.Flags.html>)

**ObjC:**

- The header-like generation ( `lief.ObjC.Metadata.to_decl()` ( [`lief::objc::Metadata::to_decl`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/objc/struct.Metadata.html#method.to_decl>) ;  [`lief.objc.Metadata.to_decl()`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Metadata.to_decl>) ;  [`LIEF::objc::Metadata::to_decl()`](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Metadata7to_declERK7DeclOpt>) )) is now including method’s address as a comment:

  **Before**

  ```objc
  @interface GCKUIImageHints<NSCopying,NSSecureCoding> {
      long long _imageType;
      NSObject<NSSecureCoding> * _customData;
      struct CGSize _imageSize;
  }
  + (bool)supportsSecureCoding:(GCKUIImageHints *)self :(SEL)id;
  - (bool)isEqual:(GCKUIImageHints *)self :(SEL)id :(NSObject *)arg2;
  ```

  **After**

  ```objc
  @interface GCKUIImageHints<NSCopying,NSSecureCoding> {
      long long _imageType;
      NSObject<NSSecureCoding> * _customData;
      struct CGSize _imageSize;
  }
  // Address: 0x00001aa448
  + (bool)supportsSecureCoding:(GCKUIImageHints *)self :(SEL)id;
  // Address: 0x00001aa5ec
  - (bool)isEqual:(GCKUIImageHints *)self :(SEL)id :(NSObject *)arg2;
  ```
- Fix  `lief.ObjC.Method.address()` ( [`lief::objc::Method::address`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/objc/struct.Method.html#method.address>) ;  [`lief.objc.Method.address`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Method.address>) ;  [`LIEF::objc::Method::address()`](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc6Method7addressEv>) ) for *small* methods.
- The output of  `lief.ObjC.Metadata.to_decl()` ( [`lief::objc::Metadata::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/objc/struct.Metadata.html#method.to_decl_with_opt>) ;  [`lief.objc.Metadata.to_decl()`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Metadata.to_decl>) ;  [`LIEF::objc::Metadata::to_decl()`](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Metadata7to_declERK7DeclOpt>) ) can now be configured with  `lief.ObjC.DeclOpt` ( [`lief::objc::DeclOpt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/objc/struct.DeclOpt.html>) ;  [`lief.objc.DeclOpt`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.DeclOpt>) ;  [`LIEF::objc::DeclOpt`](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc7DeclOptE>) ).

**DWARF:**

- Add  `lief.dwarf.Function.is_external()` ( [`lief::dwarf::Function::is_external`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Function.html#method.is_external>) ;  [`lief.dwarf.Function.is_external`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.is_external>) ;  [`LIEF::dwarf::Function::is_external()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function11is_externalEv>) )
- Add  `lief.dwarf.CompilationUnit.imported_functions()` ( [`lief::dwarf::CompilationUnit::imported_functions`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.CompilationUnit.html#method.imported_functions>) ;  [`lief.dwarf.CompilationUnit.imported_functions`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.imported_functions>) ;  [`LIEF::dwarf::CompilationUnit::imported_functions()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit18imported_functionsEv>) )
- Add `DW_TAG_typedef` support

**Extended:**

> **Note**
> 
> - [LIEF extended](<https://extended.lief.re>) is now open to everyone
> - C++ SDK is now available
> - Rust package is now available

- Initial assembler support: [Assembler](<https://lief.re/doc/latest/extended/assembler/index.html#extended-assembler>)
- Initial disassembler support: [Disassembler](<https://lief.re/doc/latest/extended/disassembler/index.html#extended-disassembler>)
- Linux Python wheels are now `manylinux_2_27` compliants. In other words, they are working with a glibc from at least 2018.
- Support for [Dyld shared cache](<https://lief.re/doc/latest/extended/dsc/index.html#extended-dsc>)
- `lief.ELF.Symbol.demangled_name()` ( [`lief::elf::Symbol::demangled_name`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Symbol.html#method.demangled_name>) ;  [`lief.ELF.Symbol.demangled_name`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.demangled_name>) ;  [`LIEF::ELF::Symbol::demangled_name()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol14demangled_nameEv>) ) is working on **all** platforms (not only unix-based builds)
- `lief.MachO.Symbol.demangled_name()` ( [`lief::macho::Symbol::demangled_name`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Symbol.html#method.demangled_name>) ;  [`lief.MachO.Symbol.demangled_name`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.demangled_name>) ;  [`LIEF::MachO::Symbol::demangled_name()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Symbol14demangled_nameEv>) ) is working on **all** platforms (not only unix-based builds)
- `lief.PE.DelayImportEntry.demangled_name()` ( [`lief::pe::delay_import::DelayImportEntry::demangled_name`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/delay_import/struct.DelayImportEntry.html#method.demangled_name>) ;  [`lief.PE.DelayImportEntry.demangled_name`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImportEntry.demangled_name>) ;  [`LIEF::PE::DelayImportEntry::demangled_name()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4NK4LIEF2PE16DelayImportEntry14demangled_nameEv>) )
- `lief.PE.ImportEntry.demangled_name()` ( [`lief::pe::import::ImportEntry::demangled_name`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/import/struct.ImportEntry.html#method.demangled_name>) ;  [`lief.PE.ImportEntry.demangled_name`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.demangled_name>) ;  [`LIEF::PE::ImportEntry::demangled_name()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4NK4LIEF2PE11ImportEntry14demangled_nameEv>) )
- `lief.PE.ExportEntry.demangled_name()` ( [`lief::pe::export::Entry::demangled_name`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/export/struct.Entry.html#method.demangled_name>) ;  [`lief.PE.ExportEntry.demangled_name`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry.demangled_name>) ;  [`LIEF::PE::ExportEntry::demangled_name()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4NK4LIEF2PE11ExportEntry14demangled_nameEv>) )

  ```python
  pe = lief.PE.parse("some.exe")

  if exp := pe.get_export():
      for entry in exp.entries:
          # e.g.void __cdecl Platform::Details::EventSourceUninitialize(void **)
          print(entry.demangled_name)

  for imp in pe.imports:
      for entry in imp.entries:
          # e.g. void __cdecl std::_Xlength_error(char const *)
          print(entry.demangled_name)
  ```
- Add  `LIEF.demangle()` ( [`lief::demangle`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/fn.demangle.html>) ;  [`lief.demangle()`](<https://lief.re/doc/latest/api/utilities/index.html#lief.demangle>) ;  [`LIEF::demangle()`](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF8demangleENSt11string_viewE>) ) to demangle symbols (c.f. [#1054](<https://github.com/lief-project/LIEF/issues/1054>))
- The extended version is now using a versioning matching LIEF regular version

**Python Bindings:**

- Upgrade nanobind from `1.8.0` to `2.4.0`
- `*.pyi` stubs are now generated by nanobind (replacing mypy’s stugen)

**Dependencies:**

- Upgrade MbedTLS from `3.2.1` to `3.6.1`

**doc:**

- Global restructuring of the documentation
- Add Sphinx cross-reference support for Rust. For instance, this link: [`lief::elf::Binary::debug_info`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.debug_info>) references the documentation of `debug_info` in the Rust documentation page.
- Add cross-api menu directive. For instance, this *link*:  `lief.dwarf.DebugInfo` ( [`lief::dwarf::DebugInfo`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.DebugInfo.html>) ;  [`lief.dwarf.DebugInfo`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.DebugInfo>) ;  [`LIEF::dwarf::DebugInfo`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9DebugInfoE>) ) toggles a menu to access the documentation of DWARF’s debug info for Rust, Python &amp; C++.

## [0.15.1 - July 23th, 2024](<https://lief.re/doc/latest/changelog.html#july-23th-2024>)

**MachO:**

- Fix missing commit for `.hwx` support

## [0.15.0 - July 21th, 2024](<https://lief.re/doc/latest/changelog.html#july-21th-2024>)

**Extended:**

> **Note**
> 
> See: [https://extended.lief.re](<https://extended.lief.re>) and  [What is LIEF Extended?](<https://lief.re/doc/latest/extended/intro.html#extended-intro>)

- Add support for DWARF:  [DWARF](<https://lief.re/doc/latest/extended/dwarf/index.html#extended-dwarf>)
- Add support for PDB:  [PDB](<https://lief.re/doc/latest/extended/pdb/index.html#extended-pdb>)
- Add support for Objective-C:  [Objective-C](<https://lief.re/doc/latest/extended/objc/index.html#extended-objc>)

**Repo:**

- `master` branch has been renamed `main`

**Rust:**

- First (beta) release of the bindings (c.f.  [Rust](<https://lief.re/doc/latest/api/rust/index.html#lief-rust-bindings>))

**ELF:**

- Add support to create custom notes ([#1026](<https://github.com/lief-project/LIEF/issues/1026>)):

  ```python
  elf: lief.ELF.Binary = ...

  elf += lief.ELF.Note.create(
      name="my-custom-note",
      original_type=lief.ELF.Note.TYPE.UNKNOWN,
      description=list(b"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"),
      section_name=".lief.note.custom"
  )

  config = lief.ELF.Builder.config_t()
  config.notes = True
  elf.write("/tmp/new-binary.elf", config)
  ```
- Add [`lief.ELF.Binary.get_relocated_dynamic_array()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.get_relocated_dynamic_array> "lief.ELF.Binary.get_relocated_dynamic_array") which allows to get a **relocated** view of the of init/fini entries. This function can handy ELF init array/fini array functions are defined through relocations. See: [#1058](<https://github.com/lief-project/LIEF/issues/1058>), [#626](<https://github.com/lief-project/LIEF/issues/626>)
- Add support for QNX Stack note ([#1065](<https://github.com/lief-project/LIEF/issues/1065>))
- The `static_symbols` API functions has been renamed in `symtab_symbols`.

  LIEF was naming symbols located in the `.symtab` sections as **static symbols** in opposition to the `.dynsym` symbols. This naming can be confusing since the concept of **static symbol** in a program is well defined (i.e. `static bool my_var`) and not applicable in this case.

  **Therefore, the ``xxx\_static\_symbols`` API is has been renamed ``xxx\_symtab\_symbol``.**
- Re-scope `DYNAMIC_TAGS` into [`lief.ELF.DynamicEntry.TAG`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG> "lief.ELF.DynamicEntry.TAG")
- Re-scope `E_TYPE` into [`lief.ELF.Header.FILE_TYPE`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.FILE_TYPE> "lief.ELF.Header.FILE_TYPE")
- Re-scope `VERSION` into [`lief.ELF.Header.VERSION`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.VERSION> "lief.ELF.Header.VERSION")
- Re-scope `ELF_CLASS` into [`lief.ELF.Header.CLASS`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.CLASS> "lief.ELF.Header.CLASS")
- Re-scope `ELF_DATA` into [`lief.ELF.Header.ELF_DATA`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.ELF_DATA> "lief.ELF.Header.ELF_DATA")
- Re-scope `OS_ABI` into [`lief.ELF.Header.OS_ABI`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI> "lief.ELF.Header.OS_ABI")
- Re-scope `ELF_SECTION_TYPES` into [`lief.ELF.Section.TYPE`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE> "lief.ELF.Section.TYPE")
- Re-scope `ELF_SECTION_FLAGS` into [`lief.ELF.Section.FLAGS`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS> "lief.ELF.Section.FLAGS")
- Re-scope `SYMBOL_BINDINGS` into [`lief.ELF.Symbol.BINDING`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.BINDING> "lief.ELF.Symbol.BINDING")
- Re-scope `ELF_SYMBOL_TYPES` into [`lief.ELF.Symbol.TYPE`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.TYPE> "lief.ELF.Symbol.TYPE")
- Re-scope `ELF_SYMBOL_VISIBILITY` into [`lief.ELF.Symbol.VISIBILITY`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.VISIBILITY> "lief.ELF.Symbol.VISIBILITY")
- Re-scope `SEGMENT_TYPES` into [`lief.ELF.Segment.TYPE`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE> "lief.ELF.Segment.TYPE")
- Re-scope `ELF_SEGMENT_FLAGS` into `lief.ELF.Segment.FLAG`
- Re-scope `DYNAMIC_FLAGS_1` into [`lief.ELF.DynamicEntryFlags.FLAG`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG> "lief.ELF.DynamicEntryFlags.FLAG")
- Re-scope `DYNAMIC_FLAGS` into [`lief.ELF.DynamicEntryFlags.FLAG`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG> "lief.ELF.DynamicEntryFlags.FLAG")
- Re-scope `DYNSYM_COUNT_METHODS` into [`lief.ELF.ParserConfig.DYNSYM_COUNT`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.DYNSYM_COUNT> "lief.ELF.ParserConfig.DYNSYM_COUNT")
- Re-scope `RELOCATION_PURPOSES` into [`lief.ELF.Relocation.PURPOSE`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.PURPOSE> "lief.ELF.Relocation.PURPOSE")
- `RELOC_x86_64`, `RELOC_i386`, … have been re-scoped **and merged** into [`lief.ELF.Relocation.TYPE`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE> "lief.ELF.Relocation.TYPE")
- Add support for Android packed relocation format (`DT_ANDROID_REL{A}`)
- Add support for relative relocation format (`DT_RELR`)

**PE:**

- Authenticode: Add partial support for the following PKCS #7 attributes:

  > - `1.3.6.1.4.1.311.3.3.1 - Ms-CounterSign` ([`lief.PE.MsCounterSign`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.MsCounterSign> "lief.PE.MsCounterSign"))
  > - `1.3.6.1.4.1.311.10.3.28 - Ms-ManifestBinaryID` ([`lief.PE.MsManifestBinaryID`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.MsManifestBinaryID> "lief.PE.MsManifestBinaryID"))
  > - `1.3.6.1.4.1.311.2.6.1 - SPC_RELAXED_PE_MARKER_CHECK_OBJID` ([`lief.PE.SpcRelaxedPeMarkerCheck`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SpcRelaxedPeMarkerCheck> "lief.PE.SpcRelaxedPeMarkerCheck"))
  > - `1.2.840.113549.1.9.16.2.47 - SIGNING_CERTIFICATE_V2` ([`lief.PE.SigningCertificateV2`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SigningCertificateV2> "lief.PE.SigningCertificateV2"))

  - `1.2.840.113549.1.9.16.1.4 - PKCS#9 TSTInfo` ([`lief.PE.PKCS9TSTInfo`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PKCS9TSTInfo> "lief.PE.PKCS9TSTInfo"))
- Add [`lief.PE.CodeViewPDB.guid`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeViewPDB.guid> "lief.PE.CodeViewPDB.guid") attribute ([#480](<https://github.com/lief-project/LIEF/issues/480>))
- Move `lief.PE.OptionalHeader.computed_checksum` to [`lief.PE.Binary.compute_checksum()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.compute_checksum> "lief.PE.Binary.compute_checksum")

  In previous versions of LIEF, [`lief.PE.OptionalHeader.checksum`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.checksum> "lief.PE.OptionalHeader.checksum") was re-computed (on purpose) in the parsing phase. On large binaries, this re-computation can have a **strong impact** on the performances. Thus, this computation has been deferred to a dedicated method [`lief.PE.Binary.compute_checksum()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.compute_checksum> "lief.PE.Binary.compute_checksum")

  ```python
  pe = lief.PE.parse("...")
  # Before:
  computed = pe.optional_header.computed_checksum
  # Now:
  computed = pe.compute_checksum()
  ```

**MachO:**

- Add support to modify Mach-O rpath (see: [#1074](<https://github.com/lief-project/LIEF/issues/1074>))
- Add helper [`lief.MachO.Binary.support_arm64_ptr_auth`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.support_arm64_ptr_auth> "lief.MachO.Binary.support_arm64_ptr_auth") to check if a Mach-O binary is supporting ARM64 pointer authentication (arm64e)
- Fix **major performance issue when processing Mach-O binaries on Windows &amp; macOS**
- Add generic [`lief.MachO.UnknownCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.UnknownCommand> "lief.MachO.UnknownCommand") to support Apple private Load commands not officially supported by LIEF.
- Re-scope `LOAD_COMMAND_TYPES` into [`lief.MachO.LoadCommand.TYPE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE> "lief.MachO.LoadCommand.TYPE")
- Re-scope `FILE_TYPES` into [`lief.MachO.Header.FILE_TYPE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE> "lief.MachO.Header.FILE_TYPE")
- Re-scope `HEADER_FLAGS` into [`lief.MachO.Header.FLAGS`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS> "lief.MachO.Header.FLAGS")
- Re-scope `MACHO_SEGMENTS_FLAGS` into [`lief.MachO.SegmentCommand.FLAGS`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.FLAGS> "lief.MachO.SegmentCommand.FLAGS")
- Re-scope `MACHO_SECTION_TYPES` into [`lief.MachO.Section.TYPE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE> "lief.MachO.Section.TYPE")
- Re-scope `MACHO_SECTION_FLAGS` into [`lief.MachO.Section.FLAGS`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS> "lief.MachO.Section.FLAGS")
- Re-scope `REBASE_TYPES` into [`lief.MachO.DyldInfo.REBASE_TYPE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_TYPE> "lief.MachO.DyldInfo.REBASE_TYPE")
- Re-scope `REBASE_OPCODES` into [`lief.MachO.DyldInfo.REBASE_OPCODES`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_OPCODES> "lief.MachO.DyldInfo.REBASE_OPCODES")
- Re-scope `BIND_OPCODES` into [`lief.MachO.DyldInfo.BIND_OPCODES`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES> "lief.MachO.DyldInfo.BIND_OPCODES")
- Re-scope `BINDING_CLASS` into [`lief.MachO.DyldBindingInfo.CLASS`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.CLASS> "lief.MachO.DyldBindingInfo.CLASS")
- Re-scope `BIND_TYPES` into [`lief.MachO.DyldBindingInfo.TYPE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.TYPE> "lief.MachO.DyldBindingInfo.TYPE")
- Re-scope `EXPORT_SYMBOL_FLAGS` into [`lief.MachO.ExportInfo.FLAGS`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.FLAGS> "lief.MachO.ExportInfo.FLAGS")
- Re-scope `EXPORT_SYMBOL_KINDS` into [`lief.MachO.ExportInfo.KIND`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.KIND> "lief.MachO.ExportInfo.KIND")
- Re-scope `RELOCATION_ORIGINS` into [`lief.MachO.Relocation.ORIGIN`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.ORIGIN> "lief.MachO.Relocation.ORIGIN")
- Re-scope `SYMBOL_ORIGINS` into [`lief.MachO.Symbol.ORIGIN`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.ORIGIN> "lief.MachO.Symbol.ORIGIN")
- Re-scope `VM_PROTECTIONS` into [`lief.MachO.SegmentCommand.VM_PROTECTIONS`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.VM_PROTECTIONS> "lief.MachO.SegmentCommand.VM_PROTECTIONS")
- Re-scope `CPU_TYPES` into [`lief.MachO.Header.CPU_TYPE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE> "lief.MachO.Header.CPU_TYPE")

**CMake:**

- `LIEFConfig.cmake` is now installed in `<prefix>/lib/cmake/LIEF/` instead of `<prefix>/share/LIEF/cmake/`

**Python Bindings:**

- Add [`lief.disable_leak_warning()`](<https://lief.re/doc/latest/api/utilities/index.html#lief.disable_leak_warning> "lief.disable_leak_warning") to disable Nanobind warning about “leaks”.

> **Warning**
> 
> These warnings does not necessarily mean that LIEF leak objects. These warnings might happen in [Cyclic garbage collection](<https://nanobind.readthedocs.io/en/latest/typeslots.html#cyclic-garbage-collection>).

**Documentation:**

- Add icons
- Include inheritance diagram for Python API (e.g. [`lief.ELF.Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief.ELF.Note"))

## [0.14.1 - February 11th, 2024](<https://lief.re/doc/latest/changelog.html#february-11th-2024>)

**ELF:**

- Fix regression in Symbol Version Definition processing ([#1014](<https://github.com/lief-project/LIEF/issues/1014>))

**PE:**

- Address [#1016](<https://github.com/lief-project/LIEF/issues/1016>) by creating aliases:

  - [`lief.PE.ContentInfo.digest`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.digest> "lief.PE.ContentInfo.digest") to [`lief.PE.SpcIndirectData.digest`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SpcIndirectData.digest> "lief.PE.SpcIndirectData.digest")
  - [`lief.PE.ContentInfo.digest_algorithm`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.digest_algorithm> "lief.PE.ContentInfo.digest_algorithm") to [`lief.PE.SpcIndirectData.digest_algorithm`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SpcIndirectData.digest_algorithm> "lief.PE.SpcIndirectData.digest_algorithm")

**Python:**

- Fix regression in iterator’s performances

## [0.14.0 - January 20, 2024](<https://lief.re/doc/latest/changelog.html#january-20-2024>)

**ELF:**

- Add support for the GNU note properies ([#975](<https://github.com/lief-project/LIEF/issues/975>)).

  **Example:**

  ```python
  elf = lief.ELF.parse("...")
  note = elf.get(lief.ELF.Note.TYPE.GNU_PROPERTY_TYPE_0)
  aarch64_feat: lief.ELF.AArch64Feature = note.find(lief.ELF.NoteGnuProperty.Property.TYPE.AARCH64_FEATURES)
  if lief.ELF.AArch64Feature.FEATURE.BTI in aarch64_feat.features:
      print("BTI supported")
  ```

  See:

  - [`lief.ELF.NoteGnuProperty`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty> "lief.ELF.NoteGnuProperty")
  - [`lief.ELF.AArch64Feature`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64Feature> "lief.ELF.AArch64Feature")
  - [`lief.ELF.NoteNoCopyOnProtected`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteNoCopyOnProtected> "lief.ELF.NoteNoCopyOnProtected")
  - [`lief.ELF.StackSize`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.StackSize> "lief.ELF.StackSize")
  - [`lief.ELF.X86Features`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features> "lief.ELF.X86Features")
  - [`lief.ELF.X86ISA`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA> "lief.ELF.X86ISA")
- Refactoring of the ELF note processing
- Fix relocation issue when using `-Wl,--emit-relocs` (c.f. [#897](<https://github.com/lief-project/LIEF/issues/897>) / [#898](<https://github.com/lief-project/LIEF/pull/898>) by [adamjseitz](<https://github.com/adamjseitz>))
- Improve the computation of the dynamic symbols thanks to [adamjseitz](<https://github.com/adamjseitz>) (c.f. [#922](<https://github.com/lief-project/LIEF/issues/922>))
- Add support for the LoongArch architecture thanks to [loongson-zn](<https://github.com/loongson-zn>) (c.f. [#921](<https://github.com/lief-project/LIEF/pull/921>))
- Add a [`lief.ELF.ParserConfig`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig> "lief.ELF.ParserConfig") interface that can be used to tweak which parts of the ELF format should be parsed.

  **Example:**

  ```python
  config = lief.ELF.ParserConfig()

  # Skip parsing static and dynamic symbols
  config.parse_static_symbols = False
  config.parse_dyn_symbols = False

  elf = lief.ELF.parse("target.elf", config)
  ```

**MachO:**

- The *fileset name* is now stored in [`lief.MachO.Binary.fileset_name`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.fileset_name> "lief.MachO.Binary.fileset_name") (instead of lief.MachO.Binary.name)

**PE:**

- `RESOURCE_SUBLANGS` has been removed
- `RESOURCE_LANGS` is now defined in a dedicated header: `LIEF/PE/resources/langs.hpp`
- `RESOURCE_TYPES` is now scoped in `ResourcesManager::TYPE`
- `GUARD_CF_FLAGS` is now scoped as `IMAGE_GUARD` in `lief.PE.LoadConfigurationV1`
- `SECTION_CHARACTERISTICS` is now scoped within the [`Section`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief.PE.Section") class instead of being globally defined:

  ```python
  # Before
  lief.PE.SECTION_CHARACTERISTICS.CNT_CODE
  # Now:
  lief.PE.Section.CHARACTERISTICS.CNT_CODE
  ```
- `DATA_DIRECTORY` is now scoped within the [`DataDirectory`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") class instead of being globally defined:

  ```python
  # Before
  lief.PE.DATA_DIRECTORY.IAT
  # Now:
  lief.PE.DataDirectory.TYPES.IAT
  ```
- `MACHINE_TYPES` and `HEADER_CHARACTERISTICS` are now scoped within the [`Header`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header> "lief.PE.Header") class instead of being globally defined:

  ```python
  # Before
  lief.PE.MACHINE_TYPES.AMD64
  # Now:
  lief.PE.Header.MACHINE_TYPES.AMD64
  ```
- [`lief.PE.Header.characteristics`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.characteristics> "lief.PE.Header.characteristics") now returns a list/std::vector instead of a `set`.
- [`lief.PE.OptionalHeader.dll_characteristics_lists`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.dll_characteristics_lists> "lief.PE.OptionalHeader.dll_characteristics_lists") now returns a `list`/`std::vector` instead of a `set`.
- `SUBSYSTEM` and `DLL_CHARACTERISTICS` are now scoped within the [`OptionalHeader`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader> "lief.PE.OptionalHeader") class instead of being globally defined:

  ```python
  # Before
  lief.PE.SUBSYSTEM.NATIVE
  # Now:
  lief.PE.OptionalHeader.SUBSYSTEM.NATIVE
  ```
- `lief.PE.DosHeader.used_bytes_in_the_last_page` has been renamed in [`lief.PE.DosHeader.used_bytes_in_last_page`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.used_bytes_in_last_page> "lief.PE.DosHeader.used_bytes_in_last_page")
- Refactoring of the Debug directory processing: [`lief.PE.Debug`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug> "lief.PE.Debug") is now the root class of: [`lief.PE.CodeView`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView> "lief.PE.CodeView") / [`lief.PE.CodeView`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView> "lief.PE.CodeView"), [`lief.PE.Pogo`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Pogo> "lief.PE.Pogo"), [`lief.PE.Repro`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Repro> "lief.PE.Repro").

  The parsing logic has been cleaned and the tests updated.
- Add a [`lief.PE.ParserConfig`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig> "lief.PE.ParserConfig") interface that can be used to tweak which parts of the PE format should be parsed ([#839](<https://github.com/lief-project/LIEF/issues/839>)).

  **Example:**

  ```python
  config = lief.PE.ParserConfig()

  # Skip parsing PE authenticode
  config.parse_signature = False

  pe = lief.PE.parse("pe.exe", config)
  ```

**Abstraction:**

- `LIEF::EXE_FORMATS` is now scoped in `LIEF::Binary::FORMATS`
- All the Binary classes now implement classof:

  ```cpp
  std::unique_ptr<LIEF::Binary> bin = LIEF::Parser::parse("...");
  if (LIEF::PE::Binary::classof(bin.get())) {
    auto& pe_file = static_cast<LIEF::PE::Binary&>(*bin);
  }
  ```

**General Design:**

- Python parser functions (like: [`lief.PE.parse()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.parse> "lief.PE.parse")) now accept os.PathLike arguments like pathlib.Path ([#974](<https://github.com/lief-project/LIEF/issues/974>)).
- Remove the lief.Binary.name attribute
- LIEF is now compiled with C++17 (the API remains C++11 compliant)
- Switch to [nanobind](<https://nanobind.readthedocs.io/en/latest/>) for the Python bindings.
- CI are now more efficient.
- The Python documentation for properties now contains the type of the property.

## [0.13.2 - June 17, 2023](<https://lief.re/doc/latest/changelog.html#june-17-2023>)

**PE:**

Fix authenticode inconsitency ([#932](<https://github.com/lief-project/LIEF/issues/932>))

**ELF:**

Fix missing undef ([#929](<https://github.com/lief-project/LIEF/issues/929>))

## [0.13.1 - May 28, 2023](<https://lief.re/doc/latest/changelog.html#may-28-2023>)

**PE:**

- Fix PE authenticode verification issue in the case of special characters ([#912](<https://github.com/lief-project/LIEF/issues/912>))

**Misc:**

- Fix mypy stubs ([#909](<https://github.com/lief-project/LIEF/issues/909>))
- Fix missing include ([#918](<https://github.com/lief-project/LIEF/issues/918>))
- Fix C99 comments ([#916](<https://github.com/lief-project/LIEF/issues/916>))
- Fix AArch64 docker image ([#904](<https://github.com/lief-project/LIEF/issues/904>))

## [0.13.0 - April 9, 2023](<https://lief.re/doc/latest/changelog.html#april-9-2023>)

**ELF:**

- Fix overflow issue in segments (c.f. [#845](<https://github.com/lief-project/LIEF/issues/845>) found by [liyansong2018](<https://github.com/liyansong2018>))
- Fix missing relationship between symbols and sections (c.f. [#841](<https://github.com/lief-project/LIEF/issues/841>))
- Fix coredump parsing issue (c.f. [#830](<https://github.com/lief-project/LIEF/issues/830>) found by [Lan1keA](<https://github.com/Lan1keA>))
- Fix and (re)enable removing dynamic symbols (c.f. [#828](<https://github.com/lief-project/LIEF/issues/828>))
- Add support for NT\_GNU\_BUILD\_ATTRIBUTE\_OPEN and NT\_GNU\_BUILD\_ATTRIBUTE\_FUNC (c.f. [#816](<https://github.com/lief-project/LIEF/issues/816>))
- [CVE-2022-38497] Fix ELF core parsing issue ([#766](<https://github.com/lief-project/LIEF/issues/766>) found by [CCWANG19](<https://github.com/CCWANG19>))
- [CVE-2022-38306] Fix a heap overflow found by [CCWANG19](<https://github.com/CCWANG19>) ([#763](<https://github.com/lief-project/LIEF/issues/763>))
- [aeflores](<https://github.com/aeflores>) fixed an issue when there are multiple versions associated with a symbol (see: [#749](<https://github.com/lief-project/LIEF/issues/749>) for the details).
- Handle binaries compiled with the -static-pie flag correctly (see: [#747](<https://github.com/lief-project/LIEF/issues/747>))
- Add support for modifying section-less binaries. The ELF [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") objects gain the [`lief.ELF.Section.as_frame()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.as_frame> "lief.ELF.Section.as_frame") method which defines the section as a *framed* section.

  A framed section is a section that concretely does not wraps data and can be corrupted.

  **Example:**

  ```python
  elf = lief.parse("/bin/ssh")
  text = elf.get_section(".text").as_frame()

  # We can now corrupt all the fields of the section
  text.offset  = 0xdeadc0de
  text.size    = 0xffffff
  text.address = 0x123

  elf.write("/tmp/out")
  ```
- Add API to precisely define how the segments table should be relocated. One might want to enforce a certain ELF layout while adding sections/ segments. It is now possible to call the method: [`relocate_phdr_table()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.relocate_phdr_table> "lief.ELF.Binary.relocate_phdr_table") to define how the segments table should be relocated for welcoming the new sections/segments:

  ```python
  elf = lief.parse("...")
  # Enforce a specific relocation type:
  # The new segments table will be shift at the end
  # of the file
  elf.relocate_phdr_table(Binary.PHDR_RELOC.FILE_END)

  # Add sections/segments
  # [...]
  elf.write("out.elf")
  ```

  See:

  > - [`lief.ELF.Binary.relocate_phdr_table()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.relocate_phdr_table> "lief.ELF.Binary.relocate_phdr_table")
  > - [`lief.ELF.Binary.PHDR_RELOC`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.PHDR_RELOC> "lief.ELF.Binary.PHDR_RELOC")

**MachO:**

- Add [`rpaths`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.rpaths> "lief.MachO.Binary.rpaths") iterator ([#291](<https://github.com/lief-project/LIEF/issues/291>))
- Add support for parsing Mach-O in memory
- Fix a memory issue (found by [bladchan](<https://github.com/bladchan>) via [#806](<https://github.com/lief-project/LIEF/issues/806>))
- [CVE-2022-40923] Fix parsing issue ([#784](<https://github.com/lief-project/LIEF/issues/784>) found by [bladchan](<https://github.com/bladchan>))
- [CVE-2022-40922] Fix parsing issue ([#781](<https://github.com/lief-project/LIEF/issues/781>) found by [bladchan](<https://github.com/bladchan>))
- [CVE-2022-38307] Fix a segfault when the Mach-O binary does not have segments (found by [CCWANG19](<https://github.com/CCWANG19>) via [#764](<https://github.com/lief-project/LIEF/issues/764>))
- Enable to create exports
- Fix the layout of the binaries modified by LIEF such as they can be (re)signed.
- Add support for LC\_DYLD\_CHAINED\_FIXUPS and LC\_DYLD\_EXPORTS\_TRIE
- Global enhancement when modifying the \_\_LINKEDIT content
- Add API to get a [`Section`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief.MachO.Section") from a specified segment’s name and section’s name.

**Example:**

```python
sec = bin.get_section("__DATA", "__objc_metadata")
```

- Add API to remove a [`Section`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief.MachO.Section") from a specified segment’s name and section’s name.

**Example:**

```python
sec = bin.remove_section("__DATA", "__objc_metadata")
```

- Add `lief.MachO.Binary.page_size`

**PE:**

- The Python API now returns bytes objects instead of List[int]
- Remove `lief.PE.ResourceNode.sort_by_id()`
- Fix the ordering of children of [`ResourceNode`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief.PE.ResourceNode")
- Remove deprecated functions related to PE hooking.
- Add support for new PE LoadConfiguration structures.

**DEX:**

- Fix multiple parsing issues raised by [bladchan](<https://github.com/bladchan>)

**Other:**

- [CVE-2022-38497]: [#765](<https://github.com/lief-project/LIEF/issues/765>) found by [CCWANG19](<https://github.com/CCWANG19>)
- [CVE-2022-38495]: [#767](<https://github.com/lief-project/LIEF/issues/767>) found by [CCWANG19](<https://github.com/CCWANG19>)

**General Design:**

- [ZehMatt](<https://github.com/ZehMatt>) added the support to write LIEF binaries object through a std::ostream interface ([9d55f53](<https://github.com/lief-project/LIEF/commit/9d55f538602989c69454639565910884c5c5ac7c>))
- Remove the exceptions
- The library contains less static initializers which should improve the loading time.

**Python Bindings:**

- Move to a build system compliant with `pyproject.toml`
- Provide typing stubs: [#650](<https://github.com/lief-project/LIEF/issues/650>)
- PyPI releases no longer provide source distribution (sdist)

**Dependencies:**

- Move to spdlog 1.11.0
- Move to [Pybind11 - 2.10.1](<https://pybind11.readthedocs.io/en/stable/changelog.html#version-2-10-1-oct-31-2022>)
- Move to nlohmann/json 3.11.2
- Move to MbedTLS 3.2.1
- Move to utfcpp 3.2.1

## [0.12.3 - November 1, 2022](<https://lief.re/doc/latest/changelog.html#november-1-2022>)

This release contains several security fixes:

> - [CVE-2022-38497] Fix ELF core parsing issue ([#766](<https://github.com/lief-project/LIEF/issues/766>) found by [CCWANG19](<https://github.com/CCWANG19>))
> - [CVE-2022-38306] Fix a heap overflow found by [CCWANG19](<https://github.com/CCWANG19>) ([#763](<https://github.com/lief-project/LIEF/issues/763>))
> - Fix a memory issue (found by [bladchan](<https://github.com/bladchan>) via [#806](<https://github.com/lief-project/LIEF/issues/806>))
> - [CVE-2022-40923] Fix parsing issue ([#784](<https://github.com/lief-project/LIEF/issues/784>) found by [bladchan](<https://github.com/bladchan>))
> - [CVE-2022-40922] Fix parsing issue ([#781](<https://github.com/lief-project/LIEF/issues/781>) found by [bladchan](<https://github.com/bladchan>))
> - [CVE-2022-38307] Fix a segfault when the Mach-O binary does not have segments (found by [CCWANG19](<https://github.com/CCWANG19>) via [#764](<https://github.com/lief-project/LIEF/issues/764>))

## [0.12.1 - April 08, 2022](<https://lief.re/doc/latest/changelog.html#april-08-2022>)

**ELF:**

- Fix section inclusion calculations ([#692](<https://github.com/lief-project/LIEF/pull/692>))

**PE:**

- Fix parsing regressions ([#689](<https://github.com/lief-project/LIEF/issues/689>), [#687](<https://github.com/lief-project/LIEF/issues/687>), [#686](<https://github.com/lief-project/LIEF/issues/686>), [#685](<https://github.com/lief-project/LIEF/issues/685>), [#691](<https://github.com/lief-project/LIEF/issues/691>), [#693](<https://github.com/lief-project/LIEF/issues/693>))

**Compilation:**

- Nightly builds are now upload to Saleway’s S3 server:

  - [https://lief.s3-website.fr-par.scw.cloud/latest/lief](<https://lief.s3-website.fr-par.scw.cloud/latest/lief>)
  - [https://lief.s3-website.fr-par.scw.cloud/latest/sdk](<https://lief.s3-website.fr-par.scw.cloud/latest/sdk>)
- Fix GLIBCXX\_USE\_CXX11\_ABI=1 ABI issue (see: [#683](<https://github.com/lief-project/LIEF/issues/683>))

## [0.12.0 - March 25, 2022](<https://lief.re/doc/latest/changelog.html#march-25-2022>)

**ELF:**

- [ahaensler](<https://github.com/ahaensler>) added the support to insert and assign a [`lief.ELF.SymbolVersionAuxRequirement`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAuxRequirement> "lief.ELF.SymbolVersionAuxRequirement") (see: [#670](<https://github.com/lief-project/LIEF/pull/670>))
- Enhance the ELF parser to support corner cases described by [netspooky](<https://n0.lol/>) in :

  - [https://tmpout.sh/2/14.html](<https://tmpout.sh/2/14.html>) (*84 byte aarch64 ELF*)
  - [https://tmpout.sh/2/3.html](<https://tmpout.sh/2/3.html>) (*Some ELF Parser Bugs*)
- New ELF Builder which is more efficient in terms of speed and in terms of number of segments added when modifying binaries (see: [https://lief-project.github.io/blog/2022-01-23-new-elf-builder/](<https://lief-project.github.io/blog/2022-01-23-new-elf-builder/>))
- [Clcanny](<https://github.com/Clcanny>) improved (see [#507](<https://github.com/lief-project/LIEF/pull/507>) and [#509](<https://github.com/lief-project/LIEF/pull/509>)) the reconstruction of the dynamic symbol table by sorting local symbols and non-exported symbols. It fixes the following warning when parsing a modified binary with `readelf`

  ```text
  Warning: local symbol 29 found at index >= .dynsym's sh_info value of 1
  ```

**MachO:**

- Change the layout of the binaries generated by LIEF such as they are compliant with `codesign` checks
- The API to configure the MachO parser has been redesigned to provide a better granularity

  ```python
  config = lief.MachO.ParserConfig()
  config.parse_dyld_bindings = False
  config.parse_dyld_exports  = True
  config.parse_dyld_rebases  = False

  lief.MachO.parse("/tmp/big.macho", config)
  ```
- [LucaMoroSyn](<https://github.com/LucaMoroSyn>) added the support for the `LC_FILESET_ENTRY`. This command is usually found in kernel cache files
- `LIEF::MachO::Binary::get_symbol` now returns a pointer (instead of a reference). If the symbol can’t be found, it returns a nullptr.
- Add API to select a [`Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief.MachO.Binary") from a [`FatBinary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary> "lief.MachO.FatBinary") by its architecture. See: [`lief.MachO.FatBinary.take()`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary.take> "lief.MachO.FatBinary.take").

  ```python
  fat = lief.MachO.parse("/bin/ls")
  fit = fat.take(lief.MachO.CPU_TYPES.x86_64)
  ```
- Handle the 0x0D binding opcode (see: [#524](<https://github.com/lief-project/LIEF/issues/524>))
- [xhochy](<https://github.com/xhochy>) fixed performances issues in the Mach-O parser (see [#579](<https://github.com/lief-project/LIEF/pull/579>))

**PE:**

- Adding `lief.PE.OptionalHeader.computed_checksum` that re-computes the [`lief.PE.OptionalHeader.checksum`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.checksum> "lief.PE.OptionalHeader.checksum") (c.f. issue [#660](<https://github.com/lief-project/LIEF/issues/660>))
- Enable to recompute the [`RichHeader`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichHeader> "lief.PE.RichHeader") (issue: [#587](<https://github.com/lief-project/LIEF/issues/587>))

  - [`raw()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichHeader.raw> "lief.PE.RichHeader.raw")
  - [`hash()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichHeader.hash> "lief.PE.RichHeader.hash")
- Add support for PE’s delayed imports. see:

  - [`DelayImport`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport> "lief.PE.DelayImport") / [`DelayImportEntry`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImportEntry> "lief.PE.DelayImportEntry")
  - [`delay_imports`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.delay_imports> "lief.PE.Binary.delay_imports")
- [`lief.PE.LoadConfiguration.reserved1`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.reserved1> "lief.PE.LoadConfiguration.reserved1") has been aliased to [`lief.PE.LoadConfiguration.dependent_load_flags`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.dependent_load_flags> "lief.PE.LoadConfiguration.dependent_load_flags")
- [`lief.PE.LoadConfiguration.characteristics`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.characteristics> "lief.PE.LoadConfiguration.characteristics") has been aliased to [`lief.PE.LoadConfiguration.size`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.size> "lief.PE.LoadConfiguration.size")
- Thanks to [gdesmar](<https://github.com/gdesmar>), we updated the PE checks to support PE files that have a corrupted [`lief.PE.OptionalHeader.magic`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.magic> "lief.PE.OptionalHeader.magic") (cf. [#644](<https://github.com/lief-project/LIEF/issues/644>))

**DEX:**

- [DanielFi](<https://github.com/DanielFi>) added support for DEX’s fields (see: [#547](<https://github.com/lief-project/LIEF/pull/547>))

**Abstraction:**

- Abstract binary imagebase for PE, ELF and Mach-O ([`lief.Binary.imagebase`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.imagebase> "lief.Binary.imagebase"))
- Add [`lief.Binary.offset_to_virtual_address()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.offset_to_virtual_address> "lief.Binary.offset_to_virtual_address")
- Add PE imports/exports as *abstracted* symbols

**Compilation &amp; Integration:**

- [ekilmer](<https://github.com/ekilmer>) updated and modernized the CMake integration files through the PR: [#674](<https://github.com/lief-project/LIEF/pull/674>)
- Enable to use a pre-compiled version of spdlog. This feature aims at improving compilation time when developing on LIEF.

  One can provide path to spdlog install through:

  ```console
  $ python ./setup.py --spdlog-dir=path/to/lib/cmake/spdlog [...]
  # or
  $ cmake -DLIEF_EXTERNAL_SPDLOG=ON -Dspdlog_DIR=path/to/lib/cmake/spdlog ...
  ```
- Enable to feed LIEF’s dependencies externally (c.f. [Third Party](<https://lief.re/doc/latest/compilation.html#lief-third-party>))
- Replace the keywords `and`, `or`, `not` with `&&`, `||` and `!`.

**Dependencies:**

- Upgrade to MbedTLS 3.1.0
- Upgrade Catch2 to 2.13.8
- The different dependencies can be *linked* externally (cf. above and [Third Party](<https://lief.re/doc/latest/compilation.html#lief-third-party>))

**Documentation:**

- New section about the errors handling ( [Error Handling](<https://lief.re/doc/latest/api/error_handling/index.html#err-handling>)) and the upcoming deprecation of the exceptions.
- New section about how to compile LIEF for debugging/developing. See: [Debugging](<https://lief.re/doc/latest/compilation.html#lief-debug>)

**General Design:**

**span:**

LIEF now exposes Section/Segment’s data through a span interface. As std::span is available in the STL from C++20 and the LIEF public API aims at being C++11 compliant, we expose this span thanks to [tcbrindle/span](<https://github.com/tcbrindle/span>). This new interface enables to avoid copies of `std::vector<uint8_t>` which can be costly. With this new interface, the original `std::vector<uint8_t>` can be retrieved as follows:

```cpp
auto bin = LIEF::ELF::Parser::parse("/bin/ls");

if (const auto* section = bin->get_section(".text")) {
  LIEF::span<const uint8_t> text_ref =  section->content();
  std::vector<uint8_t> copy = {std::begin(text_ref), std::end(text_ref)};
}
```

In Python, span are wrapped by a **read-only** [memory view](<https://docs.python.org/3/c-api/memoryview.html>). The original *list of bytes* can be retrieved as follows:

```python
bin = lief.parse("/bin/ls")
section = bin.get_section(".text")

if section is not None:
  memory_view = section.content
  list_of_bytes = list(memory_view)
```

**Exceptions:**

> **Warning**
> 
> We started to refactor the API and the internal design to remove C++ exceptions. These changes are described a the dedicated blog ([LIEF RTTI &amp; Exceptions](<https://lief-project.github.io/blog/2022-02-13-lief-rtti-exceptions/>))
> 
> To highlighting the content of the blog for the end users, functions that returned a **reference and which threw an exception** in the case of a failure are now returning a **pointer that is set to nullptr** in the case of a failure.
> 
> If we consider this original code:
> 
> ```cpp
> LIEF::MachO::Binary& bin = ...;
> 
> try {
>   LIEF::MachO::UUIDCommand& cmd = bin.uuid();
>   std::cout << cmd << "\n";
> } catch (const LIEF::not_found&) {
>   // ... dedicated processing
> }
> 
> // Other option with has_uuid()
> if (bin.has_uuid()) {
>   LIEF::MachO::UUIDCommand& cmd = bin.uuid();
>   std::cout << cmd << "\n";
> }
> ```
> 
> It can now be written as:
> 
> ```cpp
> LIEF::MachO::Binary& bin = ...;
> 
> if (LIEF::MachO::UUIDCommand* cmd = bin.uuid();) {
>   std::cout << *cmd << "\n";
> } else {
>   // ... dedicated processing as it is a nullptr
> }
> 
> // Other option with has_uuid()
> if (bin.has_uuid()) { // It ensures that it is not a nullptr
>   LIEF::MachO::UUIDCommand& cmd = *bin.uuid();
>   std::cout << cmd << "\n";
> }
> ```

> **See also**
> 
> - [Error Handling section](<https://lief.re/doc/latest/api/error_handling/index.html#err-handling>)
> - [List of the functions that changed](<https://gist.github.com/romainthomas/37da45b043c5f8b8db6be2767611f625>)

## [0.11.X - Patch Releases](<https://lief.re/doc/latest/changelog.html#x-patch-releases>)

### [0.11.5 - May 22, 2021](<https://lief.re/doc/latest/changelog.html#may-22-2021>)

- Remove usage of `not` in public headers ([b8e825b](<https://github.com/lief-project/LIEF/commit/b8e825b464418de385146bb3f89ef6126f4de5d4>))

**ELF:**

- [pdreiter](<https://github.com/pdreiter>) fixed the issue [#418](<https://github.com/lief-project/LIEF/issues/418>)

**PE:**

- Fix issue when computing [`lief.PE.Binary.sizeof_headers`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.sizeof_headers> "lief.PE.Binary.sizeof_headers") ([ab3f073](<https://github.com/lief-project/LIEF/commit/ab3f073ac0c60d8453070f83dd4dc04fe60aa0a5>))

**MachO:**

- Fix error on property [`lief.MachO.BuildVersion.sdk`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.sdk> "lief.MachO.BuildVersion.sdk") (see [#533](<https://github.com/lief-project/LIEF/issues/533>))

### [0.11.4 - March 09, 2021](<https://lief.re/doc/latest/changelog.html#march-09-2021>)

**PE:**

- Fix missing bound check when computing the authentihash

### [0.11.3 - March 03, 2021](<https://lief.re/doc/latest/changelog.html#march-03-2021>)

**PE:**

- Add sanity check on the signature’s length that could lead to a `std::bad_alloc` exception

### [0.11.2 - February 24, 2021](<https://lief.re/doc/latest/changelog.html#february-24-2021>)

**PE:**

- Fix regression in the behavior of the PE section’s name. One can now access the full section’s name (with trailing bytes) through `lief.PE.Section.fullname` (see: [#551](<https://github.com/lief-project/LIEF/issues/551>))

### [0.11.1 - February 22, 2021](<https://lief.re/doc/latest/changelog.html#february-22-2021>)

**PE:**

- [`lief.PE.x509.is_trusted_by()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.is_trusted_by> "lief.PE.x509.is_trusted_by") and [`lief.PE.x509.verify()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.verify> "lief.PE.x509.verify") now return a better [`lief.PE.x509.VERIFICATION_FLAGS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS> "lief.PE.x509.VERIFICATION_FLAGS") instead of just [`lief.PE.x509.VERIFICATION_FLAGS.BADCERT_NOT_TRUSTED`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCERT_NOT_TRUSTED> "lief.PE.x509.VERIFICATION_FLAGS.BADCERT_NOT_TRUSTED") (see: [#532](<https://github.com/lief-project/LIEF/issues/532>))
- Fix errors in the computation of the Authentihash

## [0.11.0 - January 19, 2021](<https://lief.re/doc/latest/changelog.html#january-19-2021>)

**ELF:**

- [mkomet](<https://github.com/mkomet>) updated enums related to Android (see: [9dd641d](<https://github.com/lief-project/LIEF/commit/9dd641d380a5defd0a71a9f42dde2fe9c9cb1dbd>))
- [aeflores](<https://github.com/aeflores>) added MIPS relocations support in the ELF parser
- Fix [`extend()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.extend> "lief.ELF.Binary.extend") on a ELF section (cf. issue [#477](<https://github.com/lief-project/LIEF/issues/477>))
- Fix issue when exporting symbols on empty-gnu-hash ELF binary ([1381f9a](<https://github.com/lief-project/LIEF/commit/1381f9a115e6e312ac0ab3deb46a78e481b81796>))
- Fix reconstruction issue when the binary is prelinked (cf. issue [#466](<https://github.com/lief-project/LIEF/issues/466>))
- Add `DF_1_PIE` flag
- Fix parsing issue of the `.eh_frame` section when the base address is not 0.
- [JanuszL](<https://github.com/JanuszL>) enhanced the algorithm that computes the string table. It moves from a `N^2` algorithm to a `Nlog(N)` ([1e0c4e8](<https://github.com/lief-project/LIEF/commit/1e0c4e81d4a3fd7282713f111193e42f198f8967>)).
- Fix `.eh_frame` parsing issue ([b57f323](<https://github.com/lief-project/LIEF/commit/b57f32333a85d0f172206bc5d20aabe2d7942738>))
- [aeflores](<https://github.com/aeflores>) fixed parsing issue in ELF relocations ([6c53646](<https://github.com/lief-project/LIEF/commit/6c53646bb790acf28f2999527eafad30db7d6b69>))
- Add `PT_GNU_PROPERTY` enum
- Bug fix in the symbols table reconstruction (ELF)

**PE:**

- Enhance PE Authenticode. See [PE Authenticode](<https://lief.quarkslab.com/doc/latest/tutorials/13_pe_authenticode.html>)
- [`get_imphash()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.get_imphash> "lief.PE.get_imphash") can now generate the same value as pefile and Virus Total ([#299](<https://github.com/lief-project/LIEF/issues/299>))

  ```python
  pe = lief.parse("example.exe")
  vt_imphash = lief.PE.get_imphash(pe, lief.PE.IMPHASH_MODE.PEFILE)
  lief_imphash = lief.PE.get_imphash(pe, lief.PE.IMPHASH_MODE.DEFAULT)
  ```

  > **See also**
  > 
  > [`lief.PE.IMPHASH_MODE`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.IMPHASH_MODE> "lief.PE.IMPHASH_MODE") and [`lief.PE.get_imphash()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.get_imphash> "lief.PE.get_imphash")
- Remove the padding entry (0) from the rich header
- `lief.PE.LangCodeItem.items` now returns a dictionary for which the values are **bytes** (instead of `str` object). This change is related to `utf-16` support.
- [kohnakagawa](<https://github.com/kohnakagawa>) fixed wrong enums values: [c031250](<https://github.com/lief-project/LIEF/commit/c03125045e32a9cd65c613585eb4d0385350c6d2>), [6ee808a](<https://github.com/lief-project/LIEF/commit/6ee808a1e4611d09c6cf0aea82a612be69584db9>), [cd05f34](<https://github.com/lief-project/LIEF/commit/cd05f34bae681fc8af4b5e7cc28eaef816802b6f>)
- [kohnakagawa](<https://github.com/kohnakagawa>) fixed a bug in the PE resources parser ([a7254d1](<https://github.com/lief-project/LIEF/commit/a7254d1ba935783f16effbc7faddf993c57e82f7>))
- Handle PE forwarded exports (issue [#307](<https://github.com/lief-project/LIEF/issues/307>))

**Mach-O:**

- Add API to access either `LC_CODE_SIGNATURE` or `DYLIB_CODE_SIGN_DRS` (issue [#476](<https://github.com/lief-project/LIEF/issues/476>))
- Fix issue when parsing twice a Mach-O file (issue [#479](<https://github.com/lief-project/LIEF/issues/479>))

**Dependencies:**

- Replace `easyloggingpp` with [spdlog 1.8.1](<https://github.com/gabime/spdlog>)
- Upgrade `frozen` to 1.0.0
- Upgrade `json` to 3.7.3
- Upgrade `pybind11` to 2.6.0
- Upgrade `mbedtls` to 2.16.6

**Documentation:**

- [aguinet](<https://github.com/aguinet>) updated the [bin2lib tutorial](<https://lief.re/doc/latest/tutorials/08_elf_bin2lib.html>) with the support of the new glibc versions ([7884e57](<https://github.com/lief-project/LIEF/commit/7884e57aa1d103f3bd37682e47f412bfe7a3aa34>))
- Global update and enable to build the documentation out-of-tree
- Changing the theme

**Misc:**

- Add Python 3.9 support
- `FindLIEF.cmake` deprecates `LIEF_ROOT`. You should use `LIEF_DIR` instead.

**Logging:**

We changed the logging interface. The following log levels have been removed:

- LOG\_GLOBAL
- LOG\_FATAL
- LOG\_VERBOSE
- LOG\_UNKNOWN

We also moved from an class-interface based to functions.

Example:

```python
lief.logging.disable()
lief.logging.enable()
lief.logging.set_level(lief.logging.LEVEL.INFO)
```

See: [`lief.logging.set_level()`](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.set_level> "lief.logging.set_level")

> **Note**
> 
> The log functions now output on `stderr` instead of `stdout`

## [0.10.1 - November 29, 2019](<https://lief.re/doc/latest/changelog.html#november-29-2019>)

- Fix regression in parsing Python `bytes`
- Add Python API to demangle strings: `lief.demangle`

## [0.10.0 - November 24, 2019](<https://lief.re/doc/latest/changelog.html#november-24-2019>)

**ELF:**

- Add build support for ELF notes
- Add coredump support ([9fc3a8a](<https://github.com/lief-project/LIEF/commit/9fc3a8a43358f608cf18ddbe341e1d94b13cb9e0>))
- Enable to bind a relocation with a symbol ([a9f3cb8](<https://github.com/lief-project/LIEF/commit/a9f3cb8f9b4a1f2cdaa95eee4568ff0b162f77cd>))

  **Example:**

  ```python
  relocation = "..."

  symbol = lief.ELF.Symbol()
  symbol.name = "printf123"
  relocation.symbol = symbol
  ```
- Add constructors ([67d924a](<https://github.com/lief-project/LIEF/commit/67d924a2206c36cb9979d8b1b194b03b2d592e71>))
- Expose ELF destructors ([957384c](<https://github.com/lief-project/LIEF/commit/957384cd361c4a485470f877658af2bf052dbe0a>))
- Add `remove_static_symbol` ([c677970](<https://github.com/lief-project/LIEF/commit/c6779702b1fec3c67b0c19a36576830fe18bd9d9>))
- Add support for static relocation writing ([d1b98d6](<https://github.com/lief-project/LIEF/commit/d1b98d69ade662e2471ce2905bf3fb247dfc3143>))
- Expose function to get strings located in the `.rodata` section ([02f4851](<https://github.com/lief-project/LIEF/commit/02f4851c9f0c2bfa6fb4f51dab393a1db83b4851>))
- Export ELF ABI version ([8d7ec26](<https://github.com/lief-project/LIEF/commit/8d7ec26a93800b0729c2c05be8c55c8318ba3b20>))

**PE:**

- Improve PE Authenticode parsing ([535623d](<https://github.com/lief-project/LIEF/commit/535623de3aa4f8ddc34536331b802e2cbdc44faf>))
- Fix alignment issue when removing a PE section ([04dddd3](<https://github.com/lief-project/LIEF/commit/04dddd371080d731fab965b127cb15a91c57d53c>))
- Parse PE debug data directory as a list of debug entries (by [1orenz0](<https://github.com/1orenz0>) - [fcc75dd](<https://github.com/lief-project/LIEF/commit/fcc75dd87982e52d77a1c7ee7e674741a199e41b>))
- Add support to parse POGO debug entries (by [1orenz0](<https://github.com/1orenz0>) - [3537440](<https://github.com/lief-project/LIEF/commit/3537440b8d0da6c9c3d00c25f7da8a04f29154d2>))

**Mach-O:**

- Enhance Mach-O modifications by exposing an API to:

  - Add load commands
  - Add sections
  - Add segments

  See: [406115c](<https://github.com/lief-project/LIEF/commit/406115c8d097da0b61f00b2bb7b2442322ffc5d1>)
- Enable `write()` on FAT Mach-O ([1659531](<https://github.com/lief-project/LIEF/commit/16595316fd588619ea39b942817d6527e0601fbd>))
- Introduce Mach-O Build Version command ([6f96723](<https://github.com/lief-project/LIEF/commit/6f967238fcd369210839605ab08c30d647a09a65>))
- Enable to remove Mach-O symbols ([616d739](<https://github.com/lief-project/LIEF/commit/616d739da513092e9ab7446654414b0929d5d5cf>))
- Add support for adding `LC_UNIXTHREAD` commands in a MachO (by [nezetic](<https://github.com/nezetic>) - [64d2597](<https://github.com/lief-project/LIEF/commit/64d2597284149441fc734b251648ca917cd816e3>))

**Abstract Layer:**

- Expose `remove_section()` in the abstract layer ([918438c](<https://github.com/lief-project/LIEF/commit/918438c6bee52c8421d809bc3b42974165e5fa0b>))
- Expose `write()` in the abstract layer ([af4d48e](<https://github.com/lief-project/LIEF/commit/af4d48ed2e1f1b96687644f2fc4661fcbdb979a6>))
- Expose API to list functions found in a binary ([b5a0846](<https://github.com/lief-project/LIEF/commit/b5a08463ad63811e9e9432812406aadd74ab8c09>))

**Android:**

- Add partial support for Android 9 ([bce9ebe](<https://github.com/lief-project/LIEF/commit/bce9ebe17064b1ca16b00dc14eebb5d5dd440184>))

**Misc:**

- [lkollar](<https://github.com/lkollar>) added support for Python 3.8 in CI (Linux &amp; OSX only)
- Update Pybind11 dependency to `v2.4.3`
- Enhance Python install
- Thanks to [lkollar](<https://github.com/lkollar>), Linux CI now produces **manylinux1-compliant wheels**

Many thanks to the contributors: [recvfrom](<https://github.com/recvfrom>), [pbrunet](<https://github.com/pbrunet>), [mackncheesiest](<https://github.com/mackncheesiest>), [wisk](<https://github.com/wisk>), [nezetic](<https://github.com/nezetic>), [lkollar](<https://github.com/lkollar>), [jbremer](<https://github.com/jbremer>), [DaLynX](<https://github.com/DaLynX>), [1orenz0](<https://github.com/1orenz0>), [breadchris](<https://github.com/breadchris>), [0xbf00](<https://github.com/0xbf00>), [unratito](<https://github.com/unratito>), [strazzere](<https://github.com/strazzere>), [aguinetqb](<https://github.com/aguinetqb>), [mingwandroid](<https://github.com/mingwandroid>), [serge-sans-paille-qb](<https://github.com/serge-sans-paille-qb>), [yrp604](<https://github.com/yrp604>), [majin42](<https://github.com/majin42>), [KOLANICH](<https://github.com/KOLANICH>)

## [0.9.0 - June 11, 2018](<https://lief.re/doc/latest/changelog.html#june-11-2018>)

LIEF 0.9 comes with new formats related to Android: OAT, DEX, VDEX and ART. It also fixes bugs and thanks to [yd0b0N](<https://github.com/yd0b0N>), ELF parser now supports big and little endian binaries. We also completed the JSON serialization of LIEF objects.

### [Features](<https://lief.re/doc/latest/changelog.html#features>)

**MachO:**

- Enable to configure the Mach-O parser for quick parsing: [880b99a](<https://github.com/lief-project/LIEF/commit/880b99aeef825786dd65aed286d7c4d23b62f564>)
- Add [`lief.MachO.EncryptionInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.EncryptionInfo> "lief.MachO.EncryptionInfo") command: [f4e2d81](<https://github.com/lief-project/LIEF/commit/f4e2d81bfe84238d463bdb65297c296635e783b1>)
- Add [`lief.MachO.RPathCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RPathCommand> "lief.MachO.RPathCommand") command: [196994d](<https://github.com/lief-project/LIEF/commit/196994dc089885ff2f1268e51f5514f7fcbc5cff>)
- Add [`lief.MachO.DataInCode`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataInCode> "lief.MachO.DataInCode") command: [a16e1c4](<https://github.com/lief-project/LIEF/commit/a16e1c4d13c7071fabe6a5a46b6d6c0fd9565b72>)
- Add [`lief.MachO.SubFramework`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SubFramework> "lief.MachO.SubFramework") command: [9e3b5b4](<https://github.com/lief-project/LIEF/commit/9e3b5b45f78cc075f2192c245247af00b88b5e3c>)
- Add [`lief.MachO.SegmentSplitInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentSplitInfo> "lief.MachO.SegmentSplitInfo") command: [9e3b5b4](<https://github.com/lief-project/LIEF/commit/9e3b5b45f78cc075f2192c245247af00b88b5e3c>)
- Add [`lief.MachO.DyldEnvironment`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldEnvironment> "lief.MachO.DyldEnvironment") command: [9e3b5b4](<https://github.com/lief-project/LIEF/commit/9e3b5b45f78cc075f2192c245247af00b88b5e3c>)
- API to show export-trie, rebase and binding opcodes: [5d56141](<https://github.com/lief-project/LIEF/commit/5d56141061bfc27e3c971e9e474dc86fdaf0c6a9>)

**PE:**

- Add PE Code View: [eab4a76](<https://github.com/lief-project/LIEF/commit/eab4a7614fdf6e9a180b1c638903310da0b83118>)

**ELF:**

- Add support for `.note.android.ident` section: [d13db18](<https://github.com/lief-project/LIEF/commit/d13db18214006ce654b723a882f70c3d7eabd20d>)
- Enable to add unlimited number of dynamic entries: [a40da3e](<https://github.com/lief-project/LIEF/commit/a40da3e3b4b985b18a6e6026d594f524b7bae963>)
- Add support for PPC relocations: [08b5141](<https://github.com/lief-project/LIEF/commit/08b514191f661eeabbdf8ecacd1d7dd35a67ca54>)
- Endianness support: [e794ac1](<https://github.com/lief-project/LIEF/commit/e794ac1502ee7636755bd441923368f88525a7d0>)

### [API](<https://lief.re/doc/latest/changelog.html#api>)

> - `lief.breakp()` and `lief.shell()`
> - [`lief.parse()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.parse> "lief.parse") now support `io` streams as input
> - Parser now returns a `std::unique_ptr` instead of a raw pointer: [cd1cc45](<https://github.com/lief-project/LIEF/commit/cd1cc457cf3d63cfc5faa945657887200cedb8b3>)

### [Misc](<https://lief.re/doc/latest/changelog.html#misc>)

- Use [frozen](<https://github.com/serge-sans-paille/frozen>) for some internal `std::map` (If C++14 is supported by the compiler)

### [Acknowledgments](<https://lief.re/doc/latest/changelog.html#acknowledgments>)

- [yd0b0N](<https://github.com/yd0b0N>) for [#162](<https://github.com/lief-project/LIEF/pull/162>) and [#166](<https://github.com/lief-project/LIEF/pull/166>) (Endianness support and PPC relocations)
- [0xbf00](<https://github.com/0xbf00>) for [#128](<https://github.com/lief-project/LIEF/pull/128>) (`LC_RPATH` command)
- [illera88](<https://github.com/illera88>) for [#118](<https://github.com/lief-project/LIEF/pull/118>)

## [0.8.3](<https://lief.re/doc/latest/changelog.html#id1>)

- [Mach-O] Fix typo on comparison operator - [abbc264](<https://github.com/lief-project/LIEF/commit/abbc264833894973f601f700b3abcc109904f722>)

## [0.8.2](<https://lief.re/doc/latest/changelog.html#id2>)

- [ELF] Increase the upper limit of relocation number - [077bc32](<https://github.com/lief-project/LIEF/commit/077bc329bdcc249cb8ed0b8bcb9630e1c9eede94>)

## [0.8.1 - October 18, 2017](<https://lief.re/doc/latest/changelog.html#october-18-2017>)

- Fix an alignment issue in the ELF builder. See [8db199c](<https://github.com/lief-project/LIEF/commit/8db199c04e9e6bcdbda165ab5c42d88218a0beb6>)
- Add assertion on the setuptools version: [62e5825](<https://github.com/lief-project/LIEF/commit/62e5825e27bb637c2f42f4d05690a100213beb03>)

## [0.8.0 - October 16, 2017](<https://lief.re/doc/latest/changelog.html#october-16-2017>)

LIEF 0.8.0 mainly improves the MachO parser and the ELF builder. It comes with [Dockerfiles](<https://github.com/lief-project/Dockerlief>) for [CentOS](<https://github.com/lief-project/Dockerlief/blob/v0.1.0/dockerlief/dockerfiles/centos.docker>) and [Android](<https://github.com/lief-project/Dockerlief/blob/v0.1.0/dockerlief/dockerfiles/android.docker>).

[LibFuzzer](<https://llvm.org/docs/LibFuzzer.html>) has also been integrated in the project to enhance the parsers

### [Features](<https://lief.re/doc/latest/changelog.html#id3>)

**Abstract Layer:**

- [`Relocation`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Relocation> "lief.Relocation") are now abstracted from the 3 formats - [9503f2f](<https://github.com/lief-project/LIEF/commit/9503f2fc7b6c14bebd4c220bda4a243d87f14bd1>)
- `PIE` and `NX` are abstracted through the [`is_pie`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.is_pie> "lief.Binary.is_pie") and [`has_nx`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.has_nx> "lief.Binary.has_nx") properties
- Add the [`lief.Section.search()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section.search> "lief.Section.search") and [`lief.Section.search_all()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section.search_all> "lief.Section.search_all") methods to look for patterns in the section’s content.

**ELF:**

- `DT_FLAGS` and `DT_FLAGS_1` are now parsed into [`DynamicEntryFlags`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags> "lief.ELF.DynamicEntryFlags") - [754b8af](<https://github.com/lief-project/LIEF/commit/754b8afa2b41993e6c37d2d9003cebdccc641d23>)
- Handle relocations of object files (`.o`) - [483b8dc](<https://github.com/lief-project/LIEF/commit/483b8dc2eabee3da29ce5e5ff2e25c2a3c9ca297>)
- Global enhancement of the ELF builder:

  One can now add **multiple** [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") or [`Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment") into an ELF:

  ```python
  elf = lief.parse("/bin/cat")

  for i in range(3):
    segment = Segment()
    segment.type = SEGMENT_TYPES.LOAD
    segment.content = [i & 0xFF] * 0x1000
    elf += segment


  for i in range(3):
    section = Section("lief_{:02d}".format(i))
    section.content = [i & 0xFF] * 0x1000
    elf += section

  elf.write("foo")
  ```

  ```console
  $ readelf -l ./foo
  PHDR           0x0000000000000040 0x0000000000000040 0x0000000000000040
                 0x00000000000061f8 0x00000000000061f8  R E    0x8
  INTERP         0x0000000000006238 0x0000000000006238 0x0000000000006238
                 0x000000000000001c 0x000000000000001c  R      0x1
      [Requesting program interpreter: /lib64/ld-linux-x86-64.so.2]
  LOAD           0x0000000000000000 0x0000000000000000 0x0000000000000000
                 0x000000000000d6d4 0x000000000000d6d4  R E    0x200000
  LOAD           0x000000000000da90 0x000000000020da90 0x000000000020da90
                 0x0000000000000630 0x00000000000007d0  RW     0x200000
  LOAD           0x000000000000f000 0x000000000040f000 0x000000000040f000
                 0x0000000000001000 0x0000000000001000         0x1000
  LOAD           0x0000000000010000 0x0000000000810000 0x0000000000810000
                 0x0000000000001000 0x0000000000001000         0x1000
  LOAD           0x0000000000011000 0x0000000001011000 0x0000000001011000
                 0x0000000000001000 0x0000000000001000         0x1000
  ....

  $ readelf -S ./foo
  ...
  [27] lief_00           PROGBITS         0000000002012000  00012000
       0000000000001000  0000000000000000           0     0     4096
  [28] lief_01           PROGBITS         0000000004013000  00013000
       0000000000001000  0000000000000000           0     0     4096
  [29] lief_02           PROGBITS         0000000008014000  00014000
       0000000000001000  0000000000000000           0     0     4096
  ```

  > **Warning**
  > 
  > There are issues with executables statically linked with libraries that use `TLS`
  > 
  > See: [#98](<https://github.com/lief-project/LIEF/issues/98>)

  One can now add **multiple** entries in the dynamic table:

  ```python
  elf = lief.parse("/bin/cat")

  elf.add_library("libfoo.so")
  elf.add(DynamicEntryRunPath("$ORIGIN"))
  elf.add(DynamicEntry(DYNAMIC_TAGS.INIT, 123))
  elf.add(DynamicSharedObject("libbar.so"))

  elf.write("foo")
  ```

  ```console
  $ readelf -d foo
    0x0000000000000001 (NEEDED)  Shared library: [libfoo.so]
    0x0000000000000001 (NEEDED)  Shared library: [libc.so.6]
    0x000000000000000c (INIT)    0x7b
    0x000000000000000c (INIT)    0x3600
    ...
    0x000000000000001d (RUNPATH) Bibliothèque runpath:[$ORIGIN]
    0x000000000000000e (SONAME)  Bibliothèque soname: [libbar.so]
  ```

  See [b94900c](<https://github.com/lief-project/LIEF/commit/b94900ca7f500912bfe249cd534055942e28e34b>), [1e410e6](<https://github.com/lief-project/LIEF/commit/1e410e6c950c391f0d1a3f12cb6f8e4c9fb16539>) for details.
- [b2d3694](<https://github.com/lief-project/LIEF/commit/b2d36940f60eacfa602c115cb542e11c70b6841c>) enables modification of the ELF interpreter without **length restriction**

  ```python
  elf = lief.parse("/bin/cat")
  elf.interpreter = "/a/very/long/path/to/another/interpreter"
  elf.write("foo")
  ```

  ```console
  $ readelf -l foo
  Program Headers:
  Type           Offset             VirtAddr           PhysAddr
                 FileSiz            MemSiz              Flags  Align
  PHDR           0x0000000000000040 0x0000000000000040 0x0000000000000040
                 0x00000000000011f8 0x00000000000011f8  R E    0x8
  INTERP         0x000000000000a000 0x000000000040a000 0x000000000040a000
                 0x0000000000001000 0x0000000000001000  R      0x1
      [Requesting program interpreter: /a/very/long/path/to/another/interpreter]
  ....
  ```
- Enhancement of the dynamic symbols counting - [985d124](<https://github.com/lief-project/LIEF/commit/985d1249b72494a0e62f34042b3c9cbfa0706e90>)
- Enable editing ELF’s notes:

  ```python
  elf = lief.parse("/bin/ls")
  build_id = elf[NOTE_TYPES.BUILD_ID]
  build_id.description = [0xFF] * 20
  elf.write("foo")
  ```

  ```console
  $ readelf -n foo
  Displaying notes found in: .note.gnu.build-id
  Owner                 Data size Description
  GNU                  0x00000014 NT_GNU_BUILD_ID (unique build ID bitstring)
    Build ID: ffffffffffffffffffffffffffffffffffffffff
  ```

  See commit [3be9dd0](<https://github.com/lief-project/LIEF/commit/3be9dd0ff58ec68cb8813e01d6798c16b42dac22>) for more details

**PE:**

- Add [`get_imphash()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.get_imphash> "lief.PE.get_imphash") and [`resolve_ordinals()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.resolve_ordinals> "lief.PE.resolve_ordinals") functions - [a89bc6d](<https://github.com/lief-project/LIEF/commit/a89bc6df4f242d7641292acdb184927449d14fff>), [dfa8e98](<https://github.com/lief-project/LIEF/commit/dfa8e985c0561427a20088750693a004de587b1c>)
- Parse the *Load Config Table* into [`LoadConfiguration`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration> "lief.PE.LoadConfiguration") (up to Windows 10 SDK 15002 with *hotpatch\_table\_offset*)

  ```python
  from lief import to_json
  import json
  pe = lief.parse("some.exe")
  loadconfig = to_json(pe.load_configuration)) # Using the lief.to_json function
  pprint(json.loads(to_json(loadconfig)))
  ```

  ```javascript
  {'characteristics': 248,
   'code_integrity': {'catalog': 0,
                      'catalog_offset': 0,
                      'flags': 0,
                      'reserved': 0},
   'critical_section_default_timeout': 0,
   'csd_version': 0,
   'editlist': 0,
   ...
   'guard_cf_check_function_pointer': 5368782848,
   'guard_cf_dispatch_function_pointer': 5368782864,
   'guard_cf_function_count': 15,
   'guard_cf_function_table': 5368778752,
   'guard_flags': 66816,
   'guard_long_jump_target_count': 0,
   'guard_long_jump_target_table': 0,
   'guard_rf_failure_routine': 5368713280,
   'guard_rf_failure_routine_function_pointer': 5368782880,
   ...
  ```

  For details, see commit: [0234e3b](<https://github.com/lief-project/LIEF/commit/0234e3b8bbb6f6f3490392f8c295fde284a99334>)

**MachO:**

- The `dyld` structure is parsed (deeply) into [`DyldInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo> "lief.MachO.DyldInfo"). It includes:

  - Binding opcodes
  - Rebases opcodes
  - Export trie

  See: [e2b81e0](<https://github.com/lief-project/LIEF/commit/e2b81e0a8e187cae5f0f115241243a84ee7696b6>), [0e972d6](<https://github.com/lief-project/LIEF/commit/0e972d69ce35731867d82c047eef7eb9ea58e3ec>), [f7cc518](<https://github.com/lief-project/LIEF/commit/f7cc518dcfbb0557fd8d396144bf99a222d96705>), [782295b](<https://github.com/lief-project/LIEF/commit/782295bfb86d2a12584c5b16a37a26d56d1ee235>), [#67](<https://github.com/lief-project/LIEF/issues/67>)
- Section relocations are now parsed into [`lief.MachO.Section.relocations`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.relocations> "lief.MachO.Section.relocations") - [29c8157](<https://github.com/lief-project/LIEF/commit/29c8157ecc3b308bd521cb1daee3c2e3a2cffb28>)
- `LC_FUNCTION_STARTS` is parsed into [`FunctionStarts`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionStarts> "lief.MachO.FunctionStarts") ([18d8919](<https://github.com/lief-project/LIEF/commit/18d89198a0cc63ff291ae9110f465354c3b8f1e6>))
- `LC_SOURCE_VERSION`, `LC_VERSION_MIN_MACOSX` and `LC_VERSION_MIN_IPHONEOS` are parsed into [`SourceVersion`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SourceVersion> "lief.MachO.SourceVersion") and [`VersionMin`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.VersionMin> "lief.MachO.VersionMin") ([c359778](<https://github.com/lief-project/LIEF/commit/c359778194db874669884aaccb52a4b05546bc07>), [0b4bb7d](<https://github.com/lief-project/LIEF/commit/0b4bb7d56520cd0ea08bbcb9530e5e0c96ac14ae>), [5b99311](<https://github.com/lief-project/LIEF/commit/5b993117ed391db18ba775cabefa5f3981b2f1cc>), [#45](<https://github.com/lief-project/LIEF/issues/45>))
- `LC_THREAD` and `LC_UNIXTHREAD` are now parsed into [`ThreadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadCommand> "lief.MachO.ThreadCommand") - [2325783](<https://github.com/lief-project/LIEF/commit/23257830b291c40a3aed92360040f2b0b11ffa72>)

### [Fixes](<https://lief.re/doc/latest/changelog.html#fixes>)

Fix enums conflicts([#32](<https://github.com/lief-project/LIEF/issues/32>)) - [66b4cd4](<https://github.com/lief-project/LIEF/commit/66b4cd4550ecf6cf3adb4900e6ad7ac33f1f7f32>)

Fix most of the memory leaks: [88dafa8](<https://github.com/lief-project/LIEF/commit/88dafa8db6e752393f69d73f68d295e91963b8da>), [d9b1436](<https://github.com/lief-project/LIEF/commit/d9b1436730b5d33a753e7dfa4301697a0c676066>), [554fa15](<https://github.com/lief-project/LIEF/commit/554fa153af943b97a16fc4a52ab8459a3d0a9bc7>), [3602643](<https://github.com/lief-project/LIEF/commit/3602643f5d02a1c78c4de609cc47f193f3a8840f>)

**ELF:**

- Bug Fix when counting dynamic symbols from the GnuHash Table - [9036a24](<https://github.com/lief-project/LIEF/commit/9036a2405dc44726f40cb77cab1bcbf371ab7a70>)

**PE:**

- Fix nullptr dereference in resources - [e90fe1b](<https://github.com/lief-project/LIEF/commit/e90fe1b6c6f6a605390bcd1026435ce7503e7e6a>)
- Handle encoding issues in the Python API - [8c7ceaf](<https://github.com/lief-project/LIEF/commit/8c7ceafa823bda508259bf3c7cdc05b865f13d5c>)
- Sanitize DLL names

**MachO:**

- Fix [#87](<https://github.com/lief-project/LIEF/issues/87>), [#92](<https://github.com/lief-project/LIEF/issues/92>)
- Fix memory leaks and *some* performance issues: [#94](<https://github.com/lief-project/LIEF/issues/94>)

### [API](<https://lief.re/doc/latest/changelog.html#id4>)

In the C++ API `get_XXX()` getters have been renamed into `XXX()` (e.g. `get_header()` becomes `header()`) - [a4c69f7](<https://github.com/lief-project/LIEF/commit/a4c69f7868da1de5d09aa26e977dedb720e36cbd>), [e805669](<https://github.com/lief-project/LIEF/commit/e805669865b130057413f456958a471d8f0ac0b1>)

**Abstract:**

- [`lief.Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary> "lief.Binary") gains the [`format`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.format> "lief.Binary.format") property - [9391238](<https://github.com/lief-project/LIEF/commit/9391238f114fe963890777c2d8b90f2caaa5510c>)
- [`lief.parse()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.parse> "lief.parse") can now takes a list of integers - [f330fa8](<https://github.com/lief-project/LIEF/commit/f330fa887d14d47f0683144430ac9695d3136561>)
- Add [`has_symbol()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.has_symbol> "lief.Binary.has_symbol") and [`get_symbol()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.get_symbol> "lief.Binary.get_symbol") to [`lief.Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary> "lief.Binary") - [f121af5](<https://github.com/lief-project/LIEF/commit/f121af5ca61a22fd83acc5c7094b50ed1cda8226>)
- [Python API] Enhance the access to the abstract layer through the [`abstract`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.abstract> "lief.Binary.abstract") attribute - [0713854](<https://github.com/lief-project/LIEF/commit/07138549a46db87c7b924fd072356030b1d5c6bc>)

  One can now do:

  ```python
  elf = lief.ELF.parse("/bin/ls") # Could be lief.MachO / lief.PE
  abstract = elf.abstract # Return the lief.Binary object
  ```

**ELF:**

- Relocation gains the [`purpose`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.purpose> "lief.ELF.Relocation.purpose") property - [b7b0bde](<https://github.com/lief-project/LIEF/commit/b7b0bde4d51c54d8d226e5320b1b0d2cc48137c4>)
- Add [`lief.ELF.Binary.symbols`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.symbols> "lief.ELF.Binary.symbols") which return an iterator over **all** symbols (static and dynamic) - [af6ab65](<https://github.com/lief-project/LIEF/commit/af6ab65dc91169627f4fbb87cda92093eb699a1e>)
- `Header.sizeof_section_header` has been renamed into [`section_header_size`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.section_header_size> "lief.ELF.Header.section_header_size") - [d96971b](<https://github.com/lief-project/LIEF/commit/d96971b0c3f8ff50add349957f571b8daa00708a>)
- `Segment.flag` has been renamed into [`flags`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.flags> "lief.ELF.Segment.flags") - [20a5f66](<https://github.com/lief-project/LIEF/commit/20a5f666deb89b06b79a1c4418ac938497fb658c>)
- Add:

  - `arm_flags_list`,
  - `mips_flags_list`
  - `ppc64_flags_list`
  - `hexagon_flags_list`

  to [`Header`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header> "lief.ELF.Header") - [730d045](<https://github.com/lief-project/LIEF/commit/730d045e05dca7ef3cd6a51d1175f280be356c70>)

  To check if a given flag is set, one can do:

  ```python
  >>> if lief.ELF.ARM_EFLAGS.EABI_VER5 in lief.ELF.Header "yes" else "no"
  ```
- [Python] Segment flags: `PF_X`, `PF_W`, `PF_X` has been renamed into `X`, `W`, `X` - [d70ef9e](<https://github.com/lief-project/LIEF/commit/d70ef9ec2c42619434352dbd7b74a835ebad7569>)
- Add [`lief.ELF.Section.flags_list`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.flags_list> "lief.ELF.Section.flags_list") - [4937b71](<https://github.com/lief-project/LIEF/commit/4937b7193a5760df85d0ac1567afc011a22cdb98>)
- Enhancement for [`DynamicEntryRpath`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRpath> "lief.ELF.DynamicEntryRpath") and [`DynamicEntryRunPath`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRunPath> "lief.ELF.DynamicEntryRunPath"): [c375a47](<https://github.com/lief-project/LIEF/commit/c375a47da7c4c524e886f9238f8dd51a44501087>)
- Enhancement for [`DynamicEntryArray`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryArray> "lief.ELF.DynamicEntryArray"): [81440ce](<https://github.com/lief-project/LIEF/commit/81440ce00cdfc793161a0dc394ada345307dc24b>)
- Add some *operators* [3b200b3](<https://github.com/lief-project/LIEF/commit/3b200b30503847be4779447c76f5207d18daf77f>), [43bd06f](<https://github.com/lief-project/LIEF/commit/43bd06f8f32196454ee2305201f4e27b3a3c8a1e>)

**PE:**

- Add some *operators* [5666351](<https://github.com/lief-project/LIEF/commit/5666351e07b7bf4a9624033f670d02b8806d2663>)

**MachO:**

- [`lief.MachO.parse()`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.parse> "lief.MachO.parse") can now takes a list of integers - [f330fa8](<https://github.com/lief-project/LIEF/commit/f330fa887d14d47f0683144430ac9695d3136561>)
- [`lief.MachO.parse()`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.parse> "lief.MachO.parse") now returns a [`FatBinary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary> "lief.MachO.FatBinary") instead of a `list` of [`Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief.MachO.Binary"). [`FatBinary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary> "lief.MachO.FatBinary") has a similar API as a list - [3602643](<https://github.com/lief-project/LIEF/commit/3602643f5d02a1c78c4de609cc47f193f3a8840f>)
- Add some *operators*: [cbe8354](<https://github.com/lief-project/LIEF/commit/cbe835484751396daffe7f8d238cbb85d66470ab>)

**Logging:**

Add an API to configure the logger - [4600c2b](<https://github.com/lief-project/LIEF/commit/4600c2ba8d7d17b5965c2b74faeb7e4d2128de17>)

Example:

```python
from lief import Logger
Logger.disable()
Logger.enable()
Logger.set_level(lief.LEVEL.INFO)
```

See: `lief.Logger`

### [Build system](<https://lief.re/doc/latest/changelog.html#build-system>)

- Add [`FindLIEF.cmake`](<https://github.com/lief-project/LIEF/blob/e8ac976c994f6612e8dcca994032403c2d6f580f/scripts/FindLIEF.cmake>) - [6dd8b10](<https://github.com/lief-project/LIEF/commit/6dd8b10325e832a7520bf5ae3a588b9e022d0345>)
- Add ASAN, TSAN, USAN, LSAN - [7f6aeb0](<https://github.com/lief-project/LIEF/commit/7f6aeb0d0d74eae886f4b312e12e8f71e1d5da6a>)
- Add LibFuzzer - [7a0dc28](<https://github.com/lief-project/LIEF/commit/7a0dc28ea29a30209e944ebcde27f7c0ab234651>)

### [Documentation](<https://lief.re/doc/latest/changelog.html#documentation>)

**References:**

- recomposer, bearparser, IAT\_patcher, PEframe, Manalyze, MachOView, elf-dissector

### [Acknowledgments](<https://lief.re/doc/latest/changelog.html#id5>)

- [alvarofe](<https://github.com/alvarofe>) for [#47](<https://github.com/lief-project/LIEF/pull/47>)
- [aguinet](<https://github.com/aguinet>) for [#55](<https://github.com/lief-project/LIEF/pull/55>), [#61](<https://github.com/lief-project/LIEF/pull/61>), [#65](<https://github.com/lief-project/LIEF/pull/65>), [#77](<https://github.com/lief-project/LIEF/pull/77>)
- [jevinskie](<https://github.com/jevinskie>) for [#75](<https://github.com/lief-project/LIEF/pull/75>)
- [liumuqing](<https://github.com/liumuqing>) for [#80](<https://github.com/lief-project/LIEF/pull/80>)
- [Manouchehri](<https://github.com/Manouchehri>) for [#106](<https://github.com/lief-project/LIEF/pull/106>)

## [0.7.0 - July 3, 2017](<https://lief.re/doc/latest/changelog.html#july-3-2017>)

### [Features](<https://lief.re/doc/latest/changelog.html#id6>)

**Abstract Layer:**

- Add bitness (32bits / 64bits) - [78d1adb](<https://github.com/lief-project/LIEF/commit/78d1adb41e8b0d21a6f6fe94014753ce68e0ffa1>)
- Add object type (Library, executable etc) - [78d1adb](<https://github.com/lief-project/LIEF/commit/78d1adb41e8b0d21a6f6fe94014753ce68e0ffa1>)
- Add *mode* Thumbs, 16bits etc - [78d1adb](<https://github.com/lief-project/LIEF/commit/78d1adb41e8b0d21a6f6fe94014753ce68e0ffa1>)
- Add endianness - [7ea08f7](<https://github.com/lief-project/LIEF/commit/7ea08f72c43212f2e3f401b5c2c2614bc9aab8de>), [#29](<https://github.com/lief-project/LIEF/issues/29>)

**ELF:**

- Enable dynamic symbols permutation - [2dea7cb](<https://github.com/lief-project/LIEF/commit/2dea7cb6d631b69995567e056a97e526f588b8ff>)
- Fully handle section-less binaries - [de40c06](<https://github.com/lief-project/LIEF/commit/de40c068316b3334e4c8d81ecb3efc177ab24c3b>)
- Parse ELF notes - [241aac7](<https://github.com/lief-project/LIEF/commit/241aac7bedaf18ab5e3f0c9775a8a51cb0b40a3e>)
- Parse SYSV hash table - [afa74ce](<https://github.com/lief-project/LIEF/commit/afa74cee88f730acef84fe6d9c984455a28463e7>), [#36](<https://github.com/lief-project/LIEF/issues/36>)
- Add relocation size - [f1766f2](<https://github.com/lief-project/LIEF/commit/f1766f2c297caed636c7f32730cd10b62bfcc757>)

**PE:**

- Parse PE Overlay - [e0634c1](<https://github.com/lief-project/LIEF/commit/e0634c1cf6d12fbdc5bcc1745059005e46e5d805>)
- Enable PE Hooking - [24f6b72](<https://github.com/lief-project/LIEF/commit/24f6b7213647469e269ead9441d78204162d08ec>)
- Parse and rebuilt dos stub - [3f06397](<https://github.com/lief-project/LIEF/commit/3f0639712617007e2e0431cb5eeb9be204c5d74b>)
- Add a *resources manager* to provide an enhanced API over the resources - [8473c8e](<https://github.com/lief-project/LIEF/commit/8473c8e126f2a8f14728ad3f8ebb59c45ac55d2d>)
- Serialize PE objects into JSON - [673f5a3](<https://github.com/lief-project/LIEF/commit/673f5a36f0d339ad9390427292fa6e725b8fd907>), [#18](<https://github.com/lief-project/LIEF/issues/18>)
- Parse Rich Header - [0893bd9](<https://github.com/lief-project/LIEF/commit/0893bd9b08f2248ae8f656ccd81b1be12e8ae57e>), [#15](<https://github.com/lief-project/LIEF/issues/15>)

### [Bug Fixes](<https://lief.re/doc/latest/changelog.html#bug-fixes>)

**ELF:**

- Bug fix when a GNU hash has empty buckets - [21a6c30](<https://github.com/lief-project/LIEF/commit/21a6c3064bceead897392999ad66f14e03e5d530>)

**PE:**

- Bug fix in the signature parser: [#30](<https://github.com/lief-project/LIEF/issues/30>), [4af0256](<https://github.com/lief-project/LIEF/commit/4af0256ce7c5577e0b1010c6f9b566634f0a3993>)
- Bug fix in the resources parser: Infinite loop - [a569cc1](<https://github.com/lief-project/LIEF/commit/a569cc13d99354ff96932460f5b1fd859378f252>)
- Add more *out-of-bounds* checks on relocations and exports - [9364f64](<https://github.com/lief-project/LIEF/commit/9364f644e937a6a5d69c64c2ef4eaa1fbdd2cfad>)
- Use `min(SizeOfRawData, VirtualSize)` for the section’s size and truncate the size to the file size - [61bf14b](<https://github.com/lief-project/LIEF/commit/61bf14ba1182fe458453599ff014de5d71d25680>)

**MachO:**

- Bug fix when a binary hasn’t a `LC_MAIN` command - [957501f](<https://github.com/lief-project/LIEF/commit/957501fe76596e0396c66d08540884876cea049c>)

### [API](<https://lief.re/doc/latest/changelog.html#id7>)

**Abstract Layer:**

- [`lief.Header.is_32`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.is_32> "lief.Header.is_32") and [`lief.Header.is_64`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.is_64> "lief.Header.is_64")
- [`lief.Header.object_type`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.object_type> "lief.Header.object_type")
- [`lief.Header.modes`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.modes> "lief.Header.modes")
- [`lief.Header.endianness`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.endianness> "lief.Header.endianness")

**ELF:**

- [`lief.ELF.Binary.permute_dynamic_symbols()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.permute_dynamic_symbols> "lief.ELF.Binary.permute_dynamic_symbols")
- `lief.ELF.Segment.data` has been renamed to [`lief.ELF.Segment.content`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.content> "lief.ELF.Segment.content")
- [`lief.ELF.parse()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.parse> "lief.ELF.parse") takes an optional parameters: symbol counting - `lief.ELF.DYNSYM_COUNT_METHODS`
- `lief.ELF.Relocation.size`

**Notes:**

- [`lief.ELF.Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief.ELF.Note")
- [`lief.ELF.Binary.has_notes`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.has_notes> "lief.ELF.Binary.has_notes")
- [`lief.ELF.Binary.notes`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.notes> "lief.ELF.Binary.notes")

**Hash Tables:**

- [`lief.ELF.SysvHash`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SysvHash> "lief.ELF.SysvHash")
- [`lief.ELF.Binary.use_gnu_hash`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.use_gnu_hash> "lief.ELF.Binary.use_gnu_hash")
- [`lief.ELF.Binary.use_sysv_hash`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.use_sysv_hash> "lief.ELF.Binary.use_sysv_hash")
- [`lief.ELF.Binary.sysv_hash`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.sysv_hash> "lief.ELF.Binary.sysv_hash")

**PE:**

- `lief.PE.Symbol.has_section`
- `lief.PE.Binary.hook_function()`
- `lief.PE.Binary.get_content_from_virtual_address()` takes either an **Absolute** virtual address or a **Relative** virtual address
- `lief.PE.Binary.section_from_virtual_address` has been renamed to [`lief.PE.Binary.section_from_rva()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.section_from_rva> "lief.PE.Binary.section_from_rva").
- `lief.PE.parse_from_raw` has been removed. One can use [`lief.PE.parse()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.parse> "lief.PE.parse").
- `lief.PE.Section.data` has been **removed**. Please use `lief.PE.Section.content`

**Dos Stub:**

- [`lief.PE.Binary.dos_stub`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.dos_stub> "lief.PE.Binary.dos_stub")
- `lief.PE.Builder.build_dos_stub`

**Rich Header:**

- [`lief.PE.Binary.rich_header`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.rich_header> "lief.PE.Binary.rich_header")
- [`lief.PE.Binary.has_rich_header`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.has_rich_header> "lief.PE.Binary.has_rich_header")
- [`lief.PE.RichHeader`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichHeader> "lief.PE.RichHeader")
- [`lief.PE.RichEntry`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry> "lief.PE.RichEntry")

**Overlay:**

- [`lief.PE.Binary.overlay`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.overlay> "lief.PE.Binary.overlay")
- `lief.PE.Builder.build_overlay`

**Imports:**

- [`lief.PE.Binary.has_import`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.has_import> "lief.PE.Binary.has_import")
- [`lief.PE.Binary.get_import()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.get_import> "lief.PE.Binary.get_import")

**Resources:**

- [`lief.PE.Binary.resources`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.resources> "lief.PE.Binary.resources")
- [`lief.PE.ResourceData`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceData> "lief.PE.ResourceData")
- [`lief.PE.ResourceDirectory`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDirectory> "lief.PE.ResourceDirectory")
- [`lief.PE.ResourceNode`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief.PE.ResourceNode")
- `lief.PE.LangCodeItem`
- [`lief.PE.ResourceDialog`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog> "lief.PE.ResourceDialog")
- `lief.PE.ResourceDialogItem`
- `lief.PE.ResourceFixedFileInfo`
- [`lief.PE.ResourceIcon`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon> "lief.PE.ResourceIcon")
- [`lief.PE.ResourceStringFileInfo`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceStringFileInfo> "lief.PE.ResourceStringFileInfo")
- [`lief.PE.ResourceVarFileInfo`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVarFileInfo> "lief.PE.ResourceVarFileInfo")
- [`lief.PE.ResourceVersion`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion> "lief.PE.ResourceVersion")

**MachO:**

- [`lief.MachO.Binary.has_entrypoint`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_entrypoint> "lief.MachO.Binary.has_entrypoint")
- [`lief.MachO.Symbol.demangled_name`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.demangled_name> "lief.MachO.Symbol.demangled_name")

**UUID:**

- [`lief.MachO.Binary.has_uuid`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_uuid> "lief.MachO.Binary.has_uuid")
- [`lief.MachO.Binary.uuid`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.uuid> "lief.MachO.Binary.uuid")
- [`lief.MachO.UUIDCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.UUIDCommand> "lief.MachO.UUIDCommand")

**Main Command:**

- [`lief.MachO.Binary.has_main_command`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_main_command> "lief.MachO.Binary.has_main_command")
- [`lief.MachO.Binary.main_command`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.main_command> "lief.MachO.Binary.main_command")
- [`lief.MachO.MainCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MainCommand> "lief.MachO.MainCommand")

**Dylinker:**

- [`lief.MachO.Binary.has_dylinker`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_dylinker> "lief.MachO.Binary.has_dylinker")
- [`lief.MachO.Binary.dylinker`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.dylinker> "lief.MachO.Binary.dylinker")
- [`lief.MachO.DylinkerCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylinkerCommand> "lief.MachO.DylinkerCommand")

### [Documentation](<https://lief.re/doc/latest/changelog.html#id8>)

**References:**

- elfsteem, pelook, PortEx, elfsharp, metasm, amoco, Goblin

**Tutorials:**

- [PE Hooking](<https://lief.re/doc/latest/tutorials/06_pe_hooking.html>), [Resources Manipulation](<https://lief.re/doc/latest/tutorials/07_pe_resource.html>)

**Integration:**

- [XCode](<https://lief.re/doc/latest/installation.html#xcode-integration>), [CMake](<https://lief.re/doc/latest/installation.html#cmake-integration>)

### [Acknowledgments](<https://lief.re/doc/latest/changelog.html#id9>)

- [ek0](<https://github.com/ek0>): [#24](<https://github.com/lief-project/LIEF/pull/24>)
- [ACSC-CyberLab](<https://github.com/ACSC-CyberLab>): [#33](<https://github.com/lief-project/LIEF/pull/33>), [#34](<https://github.com/lief-project/LIEF/pull/34>), [#37](<https://github.com/lief-project/LIEF/pull/37>), [#39](<https://github.com/lief-project/LIEF/pull/39>)
- Hyrum Anderson who pointed bugs in the PE parser
- My colleagues for the feedback and suggestions (Adrien, SebK, Pierrick)

## [0.6.1 - April 6, 2017](<https://lief.re/doc/latest/changelog.html#april-6-2017>)

### [Bug Fixes](<https://lief.re/doc/latest/changelog.html#id10>)

**ELF:**

- Don’t rely on [`lief.ELF.Section.entry_size`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.entry_size> "lief.ELF.Section.entry_size") to count symbols - [004c676](<https://github.com/lief-project/LIEF/commit/004c6769bec37e303bbe7aaceb49f4b05c8eec84>)

### [API](<https://lief.re/doc/latest/changelog.html#id11>)

**PE:**

- [`lief.PE.TLS.has_section`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.has_section> "lief.PE.TLS.has_section")
- [`lief.PE.TLS.has_data_directory`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.has_data_directory> "lief.PE.TLS.has_data_directory")

### [Documentation](<https://lief.re/doc/latest/changelog.html#id12>)

**Integration:**

- [Visual Studio](<https://lief.re/doc/latest/installation.html#visual-studio-integration>)

### [Acknowledgments](<https://lief.re/doc/latest/changelog.html#id13>)

- [Philippe](<https://github.com/doegox>) for the proofreading.

## [0.6.0 - March 30, 2017](<https://lief.re/doc/latest/changelog.html#march-30-2017>)

First public release
