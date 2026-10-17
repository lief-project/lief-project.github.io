---
documentID: "d2dc67f9f86c5bb7c87fd836dc62abba63943066801fe3a19ccdbfcf55739c93"
docname: "extended/dwarf/index"
title: "DWARF - LIEF Documentation"
description: "Read DWARF functions, types, and variables, attach external debug files, generate declarations, and create new DWARF files with LIEF Extended."
canonical: "https://lief.re/doc/latest/extended/dwarf/index.html"
markdownURL: "https://lief.re/doc/latest/extended/dwarf/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "30acf67d912501c9d927a0224c6ac9d9e255cd7243a6fdee7f529c5eb9e0fcd8"
---

# [DWARF](<https://lief.re/doc/latest/extended/dwarf/index.html#dwarf>)

API

- [C++](<https://lief.re/doc/latest/extended/dwarf/cpp.html>)
- [Python](<https://lief.re/doc/latest/extended/dwarf/python.html>)
- [Rust](<https://lief.re/doc/latest/extended/dwarf/rust.html>)

## [Introduction](<https://lief.re/doc/latest/extended/dwarf/index.html#introduction>)

LIEF Extended can read DWARF functions, variables, types, and source locations, generate C/C++ declarations, and create new debug files.

DWARF debug information can be embedded in a binary or stored in a separate file. To inspect compiler-generated DWARF, build with debug information and preserve it when stripping the binary. Debug files can also be generated from analysis results with the [DWARF editor](<https://lief.re/doc/latest/extended/dwarf/index.html#extended-dwarf-editor>). For an overview of loading and associating debug files, see  [Debug Information](<https://lief.re/doc/latest/extended/debug_info/index.html#debug-info>).

## [Load and inspect DWARF](<https://lief.re/doc/latest/extended/dwarf/index.html#load-and-inspect-dwarf>)

When DWARF debug information is embedded within the binary, you can access it using the  `lief.Binary.debug_info()` ( [`lief::elf::Binary::debug_info`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.debug_info>) ;  [`lief.Binary.debug_info`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.debug_info>) ;  [`LIEF::Binary::debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary10debug_infoEv>) ) attribute. This attribute returns a  `lief.dwarf.DebugInfo` ( [`lief::dwarf::DebugInfo`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.DebugInfo.html>) ;  [`lief.dwarf.DebugInfo`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.DebugInfo>) ;  [`LIEF::dwarf::DebugInfo`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9DebugInfoE>) ) object:

**Python**

```python
import lief

elf = lief.ELF.parse("/bin/with_debug")
if debug_info := elf.debug_info:
    assert isinstance(debug_info, lief.dwarf.DebugInfo)
    print(f"DWARF Debug handler: {debug_info}")
```

**C++**

```cpp
auto elf = LIEF::ELF::Parser::parse("/bin/with_debug");
if (const LIEF::DebugInfo* info = elf->debug_info()) {
  assert(LIEF::dwarf::DebugInfo::classof(info) && "Wrong debug type");

  const auto& dwarf_dbg = static_cast<const LIEF::dwarf::DebugInfo&>(*info);
}
```

**Rust**

```rust
let elf = lief::elf::Binary::parse("/bin/ls").unwrap();
if let Some(lief::DebugInfo::Dwarf(dwarf)) = elf.debug_info() {
    // DWARF debug info
}
```

Additionally, the  `lief.dwarf.load()` ( [`lief::dwarf::load`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/fn.load.html>) ;  [`lief.dwarf.load()`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.load>) ;  [`LIEF::dwarf::load()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4loadENSt11string_viewE>) ) function can be used to load a DWARF file, whether it is embedded or standalone:

**Python**

```python
import lief

dbg: lief.dwarf.DebugInfo | None = lief.dwarf.load("/bin/with_debug")
dbg: lief.dwarf.DebugInfo | None = lief.dwarf.load("external_dwarf")
dbg: lief.dwarf.DebugInfo | None = lief.dwarf.load("debug.dwo")
```

**C++**

```cpp
auto dbg = LIEF::dwarf::load("/bin/with_debug");
dbg = LIEF::dwarf::load("external_dwarf");
dbg = LIEF::dwarf::load("debug.dwo");
```

**Rust**

```rust
let dbg = lief::dwarf::load("/bin/with_debug");
let dbg = lief::dwarf::load("external_dwarf");
let dbg = lief::dwarf::load("debug.dwo");
```

For a macOS `.dSYM` bundle, pass the path to the DWARF object inside `Contents/Resources/DWARF/`. Check the loader’s return value before accessing compilation units or searching for a function or type.

Once loaded, you can use the  `lief.dwarf.DebugInfo` ( [`lief::dwarf::DebugInfo`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.DebugInfo.html>) ;  [`lief.dwarf.DebugInfo`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.DebugInfo>) ;  [`LIEF::dwarf::DebugInfo`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9DebugInfoE>) ) API to interact with the debug information:

**Python**

```python
dbg: lief.dwarf.DebugInfo

for compilation_unit in dbg.compilation_units:
    print(compilation_unit.producer)
    for func in compilation_unit.functions:
        print(func.name, func.linkage_name, func.address)

    for var in compilation_unit.variables:
        print(var.name, var.address)

    for ty in compilation_unit.types:
        print(ty.name, ty.size)

dbg.find_function("_ZNSi4peekEv")
dbg.find_function("std::basic_istream<char, std::char_traits<char> >::peek()")
dbg.find_function(0x137A70)

dbg.find_variable("_ZNSt12out_of_rangeC1EPKc")
dbg.find_variable("std::out_of_range::out_of_range(char const*)")
dbg.find_variable(0x2773A0)

dbg.find_type("my_type_t")
```

**C++**

```cpp
std::unique_ptr<LIEF::dwarf::DebugInfo> dbg;

for (const LIEF::dwarf::CompilationUnit& CU : dbg->compilation_units()) {
  log(Level::Info, "Producer: {}", CU.producer());
  for (const LIEF::dwarf::Function& func : CU.functions()) {
    log(Level::Info, "name={}, linkage={}, address={}", func.name(),
        func.linkage_name(), std::to_string(func.address().value_or(0)));
  }

  for (const LIEF::dwarf::Variable& var : CU.variables()) {
    log(Level::Info, "name={}, address={}", var.name(),
        std::to_string(var.address().value_or(0)));
  }

  for (const LIEF::dwarf::Type& ty : CU.types()) {
    log(Level::Info, "name={}, size={}", ty.name().value_or(""),
        std::to_string(ty.size().value_or(0)));
  }
}

dbg->find_function("_ZNSi4peekEv");
dbg->find_function("std::basic_istream<char, std::char_traits<char> >::peek()");
dbg->find_function(0x137a70);

dbg->find_variable("_ZNSt12out_of_rangeC1EPKc");
dbg->find_variable("std::out_of_range::out_of_range(char const*)");
dbg->find_variable(0x2773a0);
```

**Rust**

```rust
let path: &Path = some_path;

let dbg = lief::dwarf::load(path).unwrap_or_else(|| {
    process::exit(1);
});

for cu in dbg.compilation_units() {
    println!("Producer: {}", cu.producer());
    for func in cu.functions() {
        println!(
            "name={}, linkage={}, address={}",
            func.name(),
            func.linkage_name(),
            func.address().unwrap_or(0)
        );
    }

    for var in cu.variables() {
        println!(
            "name={}, address={}",
            var.name(),
            var.address().unwrap_or(0)
        );
    }

    for ty in cu.types() {
        println!(
            "name={}, size={}",
            ty.name().unwrap_or("".to_string()),
            ty.size().unwrap_or(0)
        );
    }
}

dbg.function_by_name("_ZNSi4peekEv");
dbg.function_by_name("std::basic_istream<char, std::char_traits<char> >::peek()");
dbg.function_by_addr(0x137a70);

dbg.variable_by_name("_ZNSt12out_of_rangeC1EPKc");
dbg.variable_by_name("std::out_of_range::out_of_range(char const*)");
dbg.variable_by_addr(0x137a70);
```

## [Attach an external debug file](<https://lief.re/doc/latest/extended/dwarf/index.html#attach-an-external-debug-file>)

In the case of an external DWARF file, you can bind this debug file to a  `lief.abstract.Binary` ( [`lief::generic::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html>) ;  [`lief.Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary>) ;  [`LIEF::Binary`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE>) ) using the  `lief.abstract.Binary.load_debug_info()` ( [`lief::generic::Binary::load_debug_info`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.load_debug_info>) ;  [`lief.Binary.load_debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.load_debug_info>) ;  [`LIEF::Binary::load_debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary15load_debug_infoERKNSt6stringE>) ) function.

Here’s an example:

**Python**

```python
binary: lief.Binary

dbg = binary.load_debug_info("/home/romain/dev/LIEF/some.dwo")
```

**C++**

```cpp
std::unique_ptr<LIEF::Binary> binary;

binary->load_debug_info("/home/romain/dev/LIEF/some.dwo");
```

**Rust**

```rust
let bin: &mut dyn lief::generic::Binary = some_bin;

let path = PathBuf::from("/home/romain/dev/LIEF/some.dwo");

bin.load_debug_info(&path);
```

Use a debug file produced by the same build as the binary. Attaching it updates LIEF’s analysis object. It does not insert DWARF sections into the executable. The  `lief.Binary.disassemble()` ( [`lief::generic::Binary::disassemble`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble>) ;  [`lief::generic::Binary::disassemble_symbol`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble_symbol>) ;  [`lief::generic::Binary::disassemble_address`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble_address>) ;  [`lief::generic::Binary::disassemble_slice`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble_slice>) ;  [`LIEF::Binary::disassemble()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary11disassembleE8uint64_t6size_t>) ;  [`lief.Binary.disassemble()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.disassemble>) ;  [`lief.Binary.disassemble_from_bytes()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.disassemble_from_bytes>) ) function can then resolve functions defined by that debug file while reading their machine code from the binary:

**Python**

```python
binary: lief.Binary

binary.load_debug_info("/home/romain/dev/LIEF/some.dwo")

# The location (address/size) of `my_function` is defined in some.dwo
for inst in binary.disassemble("my_function"):
    print(inst)
```

**C++**

```cpp
std::unique_ptr<LIEF::Binary> binary;

binary->load_debug_info("/home/romain/dev/LIEF/some.dwo");

// The location (address/size) of `my_function` is defined in some.dwo
for (const LIEF::assembly::Instruction& inst :
     binary->disassemble("my_function"))
{
  std::cout << inst << '\n';
}
```

**Rust**

```rust
let bin: &mut dyn lief::generic::Binary = some_bin;

let path = PathBuf::from("/home/romain/dev/LIEF/some.dwo");

bin.load_debug_info(&path);

// The location (address/size) of `my_function` is defined in some.dwo
for inst in bin.disassemble_symbol("my_function") {
    println!("{inst}");
}
```

Additionally, you may also want to explore the [BinaryNinja](<https://lief.re/doc/latest/plugins/binaryninja/dwarf/index.html#plugins-binaryninja-dwarf>) and [Ghidra](<https://lief.re/doc/latest/plugins/ghidra/dwarf/index.html#plugins-ghidra-dwarf>) DWARF export plugins, which generate debug information based on the analysis performed by these frameworks.

## [Generating C/C++ Definitions](<https://lief.re/doc/latest/extended/dwarf/index.html#generating-c-c-definitions>)

DWARF functions, variables, types, and compilation units can be rendered as C/C++ declarations using:

- `lief.dwarf.Function.to_decl()` ( [`lief::dwarf::Function::to_decl`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Function.html#method.to_decl>) ;  [`lief::dwarf::Function::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Function.html#method.to_decl_with_opt>) ;  [`lief.dwarf.Function.to_decl()`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.to_decl>) ;  [`LIEF::dwarf::Function::to_decl()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function7to_declERK7DeclOpt>) )
- `lief.dwarf.Variable.to_decl()` ( [`lief::dwarf::Variable::to_decl`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Variable.html#method.to_decl>) ;  [`lief::dwarf::Variable::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Variable.html#method.to_decl_with_opt>) ;  [`lief.dwarf.Variable.to_decl()`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.to_decl>) ;  [`LIEF::dwarf::Variable::to_decl()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable7to_declERK7DeclOpt>) )
- `lief.dwarf.Type.to_decl()` ( [`lief::dwarf::Type::to_decl`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/enum.Type.html#method.to_decl>) ;  [`lief::dwarf::Type::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/enum.Type.html#method.to_decl_with_opt>) ;  [`lief.dwarf.Type.to_decl()`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.to_decl>) ;  [`LIEF::dwarf::Type::to_decl()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf4Type7to_declERK7DeclOpt>) )
- `lief.dwarf.CompilationUnit.to_decl()` ( [`lief::dwarf::CompilationUnit::to_decl`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.CompilationUnit.html#method.to_decl>) ;  [`lief::dwarf::CompilationUnit::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.CompilationUnit.html#method.to_decl_with_opt>) ;  [`lief.dwarf.CompilationUnit.to_decl()`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.to_decl>) ;  [`LIEF::dwarf::CompilationUnit::to_decl()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit7to_declERK7DeclOpt>) )

The generated output can be configured with a  `lief.DeclOpt` ( [`lief::DeclOpt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/struct.DeclOpt.html>) ;  [`lief.DeclOpt`](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt>) ;  [`LIEF::DeclOpt`](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE>) ) structure (e.g. to prefer C++ syntax or change the indentation):

**Python**

```python
dbg = lief.dwarf.load("/bin/with_debug")

func = dbg.find_function("main")
print(func.to_decl())

opt = lief.DeclOpt()
opt.is_cpp = True
opt.indentation = 4

for cu in dbg.compilation_units:
    # Emit the definition of the functions of the compilation unit
    print(cu.to_decl(opt))
```

**C++**

```cpp
auto dbg = LIEF::dwarf::load("/bin/with_debug");

std::unique_ptr<LIEF::dwarf::Function> func = dbg->find_function("main");
std::cout << func->to_decl() << '\n';

LIEF::DeclOpt opt;
opt.is_cpp(true).indentation(4);

for (const LIEF::dwarf::CompilationUnit& CU : dbg->compilation_units()) {
  std::cout << CU.to_decl(opt) << '\n';
}
```

**Rust**

```rust
let dbg = lief::dwarf::load("/bin/with_debug").unwrap();

if let Some(func) = dbg.function_by_name("main") {
    println!("{}", func.to_decl());
}

let opt = lief::DeclOpt {
    is_cpp: true,
    indentation: 4,
    ..Default::default()
};
for cu in dbg.compilation_units() {
    println!("{}", cu.to_decl_with_opt(&opt));
}
```

## [DWARF Editor](<https://lief.re/doc/latest/extended/dwarf/index.html#dwarf-editor>)

> **Editing Existing DWARF**
> 
> LIEF does not currently support modifying an **existing** DWARF file.

LIEF provides a comprehensive high-level API for programmatically creating DWARF files. This works by using the  `lief.dwarf.Editor` ( [`lief::dwarf::Editor`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Editor.html>) ;  [`lief.dwarf.Editor`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor>) ;  [`LIEF::dwarf::Editor`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6EditorE>) ) interface, which can be instantiated using  `lief.dwarf.Editor.from_binary()` ( [`lief::dwarf::Editor::from_binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Editor.html#method.from_binary>) ;  [`LIEF::dwarf::Editor::from_binary()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor11from_binaryERN4LIEF6BinaryE>) ;  [`lief.dwarf.Editor.from_binary()`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.from_binary>) ):

**Python**

```python
pe = lief.PE.parse("demo.exe")
assert isinstance(pe, lief.PE.Binary)

editor = lief.dwarf.Editor.from_binary(pe)
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> pe = LIEF::PE::Parser::parse("demo.exe");

std::unique_ptr<LIEF::dwarf::Editor> editor =
    LIEF::dwarf::Editor::from_binary(*pe);
```

**Rust**

```rust
let path: &Path = some_path;

let mut bin = lief::pe::Binary::parse(path).unwrap();
let editor = lief::dwarf::Editor::from_binary(&mut bin);
```

Given this  `lief.dwarf.Editor` ( [`lief::dwarf::Editor`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/struct.Editor.html>) ;  [`lief.dwarf.Editor`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor>) ;  [`LIEF::dwarf::Editor`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6EditorE>) ), you can create one or more  `lief.dwarf.editor.CompilationUnit` ( [`lief::dwarf::editor::CompilationUnit`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/editor/struct.CompilationUnit.html>) ;  [`lief.dwarf.editor.CompilationUnit`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit>) ;  [`LIEF::dwarf::editor::CompilationUnit`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnitE>) ) entries, which own various  `lief.dwarf.editor.Function` ( [`lief::dwarf::editor::Function`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/editor/struct.Function.html>) ;  [`lief.dwarf.editor.Function`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function>) ;  [`LIEF::dwarf::editor::Function`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8FunctionE>) ),  `lief.dwarf.editor.Variable` ( [`lief::dwarf::editor::Variable`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/editor/struct.Variable.html>) ;  [`lief.dwarf.editor.Variable`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable>) ;  [`LIEF::dwarf::editor::Variable`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8VariableE>) ), and  `lief.dwarf.editor.Type` ( [`lief::dwarf::editor::Type`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/editor/enum.Type.html>) ;  [`lief.dwarf.editor.Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type>) ;  [`LIEF::dwarf::editor::Type`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE>) ) objects.

**Python**

```python
editor: lief.dwarf.Editor

unit = editor.create_compilation_unit()
unit.set_producer("LIEF")

func = unit.create_function("hello")
func.set_address(0x123)

struct_ptr = unit.create_structure("my_struct_t").pointer_to()
assert isinstance(struct_ptr, lief.dwarf.editor.PointerType)

func.set_return_type(struct_ptr)

var = func.create_stack_variable("local_var")
var.set_stack_offset(8)

editor.write("/tmp/out.debug")
```

**C++**

```cpp
std::unique_ptr<LIEF::dwarf::Editor> editor;

std::unique_ptr<LIEF::dwarf::editor::CompilationUnit> unit =
    editor->create_compilation_unit();

unit->set_producer("LIEF");

std::unique_ptr<LIEF::dwarf::editor::Function> func =
    unit->create_function("hello");

func->set_address(0x123);

func->set_return_type(*unit->create_structure("my_struct_t")->pointer_to());

std::unique_ptr<LIEF::dwarf::editor::Variable> var =
    func->create_stack_variable("local_var");

var->set_stack_offset(8);
editor->write("/tmp/out.debug");
```

**Rust**

```rust
let editor: &mut lief::dwarf::Editor = some_editor;

let mut unit = editor.create_compile_unit().unwrap();
unit.set_producer("LIEF");

let mut func = unit.create_function("hello").unwrap();
func.set_address(0x123);
func.set_return_type(&unit.create_structure("my_struct_t").pointer_to());

let mut var = func.create_stack_variable("local_var");
var.set_stack_offset(8);

editor.write("/tmp/out.debug");
```

> **BinaryNinja &amp; Ghidra**
> 
> This feature is provided as a plugin for [BinaryNinja](<https://lief.re/doc/latest/plugins/binaryninja/dwarf/index.html#plugins-binaryninja-dwarf>) and [Ghidra](<https://lief.re/doc/latest/plugins/ghidra/dwarf/index.html#plugins-ghidra-dwarf>).

---

## [API](<https://lief.re/doc/latest/extended/dwarf/index.html#api>)

You can find the documentation of the API for the different languages here:

[Python API](<https://lief.re/doc/latest/extended/dwarf/python.html>)

[C++ API](<https://lief.re/doc/latest/extended/dwarf/cpp.html>)

Rust API: [`lief::dwarf`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/index.html>)
