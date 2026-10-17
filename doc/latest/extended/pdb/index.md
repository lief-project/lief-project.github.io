---
documentID: "8fde65b34ef071cf986043126072ebc822d99a8148416f7a669512d67f88be6c"
docname: "extended/pdb/index"
title: "PDB - LIEF Documentation"
description: "Locate and load PDB debug information, associate it with a PE binary, inspect symbols and types, and generate C++ declarations with LIEF Extended."
canonical: "https://lief.re/doc/latest/extended/pdb/index.html"
markdownURL: "https://lief.re/doc/latest/extended/pdb/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "8f6dea929fad2329ae3a62bebe59767743a0c23d78334ee915a79147495241ca"
---

# [PDB](<https://lief.re/doc/latest/extended/pdb/index.html#pdb>)

API

- [C++](<https://lief.re/doc/latest/extended/pdb/cpp.html>)
- [Python](<https://lief.re/doc/latest/extended/pdb/python.html>)
- [Rust](<https://lief.re/doc/latest/extended/pdb/rust.html>)

## [Introduction](<https://lief.re/doc/latest/extended/pdb/index.html#introduction>)

Unlike DWARF debug information, PDB debug information is always stored externally from the original binary. Nevertheless, the original binary keeps the path of the PDB file in the  `lief.PE.CodeViewPDB.filename()` ( [`lief::pe::debug::CodeViewPDB::filename`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/debug/struct.CodeViewPDB.html#method.filename>) ;  [`lief.PE.CodeViewPDB.filename`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeViewPDB.filename>) ;  [`LIEF::PE::CodeViewPDB::filename()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4NK4LIEF2PE11CodeViewPDB8filenameEv>) ) attribute.

Based on this fact,  `lief.Binary.debug_info()` ( [`lief::pe::Binary::debug_info`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.debug_info>) ;  [`lief.Binary.debug_info`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.debug_info>) ;  [`LIEF::Binary::debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary10debug_infoEv>) ) tries to instantiate a  `lief.pdb.DebugInfo` ( [`lief::pdb::DebugInfo`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/struct.DebugInfo.html>) ;  [`lief.pdb.DebugInfo`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo>) ;  [`LIEF::pdb::DebugInfo`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfoE>) ) object using this file path. If it fails, it returns `nullptr` or `None`.

You can also instantiate a  `lief.pdb.DebugInfo` ( [`lief::pdb::DebugInfo`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/struct.DebugInfo.html>) ;  [`lief.pdb.DebugInfo`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo>) ;  [`LIEF::pdb::DebugInfo`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfoE>) ) object using  `lief.pdb.load()` ( [`lief::pdb::load`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/fn.load.html>) ;  [`lief.pdb.load()`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.load>) ;  [`LIEF::pdb::load()`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4loadENSt11string_viewE>) ):

**Python**

```python
pe: lief.PE.Binary

if (debug_info := pe.debug_info) is not None:
    assert isinstance(debug_info, lief.pdb.DebugInfo)
    print(f"PDB Debug handler: {debug_info}")

# Or you can load the PDB directly:
pdb = lief.pdb.load("some.pdb")
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> pe;

if (const LIEF::DebugInfo* info = pe->debug_info()) {
  assert(LIEF::pdb::DebugInfo::classof(info) && "Wrong DebugInfo type");
  const auto& pdb = static_cast<const LIEF::pdb::DebugInfo&>(*info);
}

// Or loading directly the pdb file
std::unique_ptr<LIEF::pdb::DebugInfo> pdb = LIEF::pdb::load("some.pdb");
```

**Rust**

```rust
let pe: &lief::pe::Binary = some_pe;
if let Some(lief::DebugInfo::Pdb(pdb)) = pe.debug_info() {
    // PDB debug info
}

let pdb = lief::pdb::load("some.pdb");
```

At this point, the PDB instance ( `lief.pdb.DebugInfo` ( [`lief::pdb::DebugInfo`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/struct.DebugInfo.html>) ;  [`lief.pdb.DebugInfo`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo>) ;  [`LIEF::pdb::DebugInfo`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfoE>) )) can be used to explore the PDB debug information:

**Python**

```python
pdb: lief.pdb.DebugInfo

print(f"arg={pdb.age}, guid={pdb.guid}")

for sym in pdb.public_symbols:
    print(f"name={sym.name}, section={sym.section_name}, RVA={sym.RVA}")

for ty in pdb.types:
    if isinstance(ty, lief.pdb.types.Class):
        print(f"Class[name]={ty.name}")

for cu in pdb.compilation_units:
    print(f"module={cu.module_name}")
    for src in cu.sources:
        print(f"  - {src}")

    for func in cu.functions:
        print(
            f"name={func.name}, section={func.section_name}, RVA={func.RVA}, code_size={func.code_size}"
        )
```

**C++**

```cpp
std::unique_ptr<LIEF::pdb::DebugInfo> pdb;
log(Level::Info, "age={}, guid={}", std::to_string(pdb->age()), pdb->guid());

for (const LIEF::pdb::PublicSymbol& symbol : pdb->public_symbols()) {
  log(Level::Info, "name={}, section={}, RVA={}", symbol.name(),
      symbol.section_name(), std::to_string(symbol.RVA()));
}

for (const LIEF::pdb::Type& ty : pdb->types()) {
  if (LIEF::pdb::types::Class::classof(&ty)) {
    const auto* clazz = ty.as<LIEF::pdb::types::Class>();
    log(Level::Info, "Class[name]={}", clazz->name().value_or(""));
  }
}

for (const LIEF::pdb::CompilationUnit& CU : pdb->compilation_units()) {
  log(Level::Info, "module={}", CU.module_name());
  for (const std::string& src : CU.sources()) {
    log(Level::Info, "  - {}", src);
  }

  for (const LIEF::pdb::Function& func : CU.functions()) {
    log(Level::Info, "name={}, section={}, RVA={}, code size={}", func.name(),
        func.section_name(), std::to_string(func.RVA()),
        std::to_string(func.code_size()));
  }
}
```

**Rust**

```rust
let pdb = lief::pdb::load(path).unwrap_or_else(|| {
    process::exit(1);
});

println!("age={}, guid={}", pdb.age(), pdb.guid());

for symbol in pdb.public_symbols() {
    println!(
        "name={}, section={}, RVA={}",
        symbol.name(),
        symbol.section_name().unwrap_or("".to_string()),
        symbol.rva()
    );
}

for ty in pdb.types() {
    if let lief::pdb::Type::Class(clazz) = ty {
        println!("Class[name]={}", clazz.name().unwrap_or_default());
    }
}

for cu in pdb.compilation_units() {
    println!("module={}", cu.module_name());
    for src in cu.sources() {
        println!("  - {}", src);
    }

    for func in cu.functions() {
        println!(
            "name={}, section={}, RVA={}, code_size={}",
            func.name(),
            func.section_name(),
            func.rva(),
            func.code_size()
        );
    }
}
```

## [Attach a PDB to a binary](<https://lief.re/doc/latest/extended/pdb/index.html#attach-a-pdb-to-a-binary>)

You can also use the  `lief.abstract.Binary.load_debug_info()` ( [`lief::generic::Binary::load_debug_info`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.load_debug_info>) ;  [`lief.Binary.load_debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.load_debug_info>) ;  [`LIEF::Binary::load_debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary15load_debug_infoERKNSt6stringE>) ) function to bind a PDB file to an existing  `lief.abstract.Binary` ( [`lief::generic::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html>) ;  [`lief.Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary>) ;  [`LIEF::Binary`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE>) ):

**Python**

```python
binary: lief.Binary

dbg = binary.load_debug_info(r"C:\Users\romain\LIEF.pdb")
```

**C++**

```cpp
std::unique_ptr<LIEF::Binary> binary;

binary->load_debug_info(R"(C:\Users\romain\LIEF.pdb)");
```

**Rust**

```rust
let bin: &mut dyn lief::generic::Binary = some_bin;

let path = PathBuf::from("C:\\Users\\romain\\LIEF.pdb");

bin.load_debug_info(&path);
```

Note that  `lief.abstract.Binary.load_debug_info()` ( [`lief::generic::Binary::load_debug_info`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.load_debug_info>) ;  [`lief.Binary.load_debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.load_debug_info>) ;  [`LIEF::Binary::load_debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary15load_debug_infoERKNSt6stringE>) ) can also attach an external DWARF file to a PE binary, even though this is not a typical use case. For instance, the [BinaryNinja](<https://lief.re/doc/latest/plugins/binaryninja/dwarf/index.html#plugins-binaryninja-dwarf>) and [Ghidra](<https://lief.re/doc/latest/plugins/ghidra/dwarf/index.html#plugins-ghidra-dwarf>) DWARF export plugins can generate a DWARF file for a PE binary based on analysis performed by these frameworks.

This external loading API is useful for adding debug information that might not already be present in the binary. For instance, the  `lief.Binary.disassemble()` ( [`lief::generic::Binary::disassemble`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble>) ;  [`lief::generic::Binary::disassemble_symbol`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble_symbol>) ;  [`lief::generic::Binary::disassemble_address`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble_address>) ;  [`lief::generic::Binary::disassemble_slice`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble_slice>) ;  [`LIEF::Binary::disassemble()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary11disassembleE8uint64_t6size_t>) ;  [`lief.Binary.disassemble()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.disassemble>) ;  [`lief.Binary.disassemble_from_bytes()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.disassemble_from_bytes>) ) function can leverage this additional debug information to disassemble functions defined in the debug file previously loaded:

**Python**

```python
binary: lief.Binary

dbg = binary.load_debug_info(r"C:\Users\romain\LIEF.pdb")

# The location (address/size) of `my_function` is defined in LIEF.pdb
for inst in binary.disassemble("my_function"):
    print(inst)
```

**C++**

```cpp
std::unique_ptr<LIEF::Binary> binary;

binary->load_debug_info(R"(C:\Users\romain\LIEF.pdb)");

// The location (address/size) of `my_function` is defined in LIEF.pdb
for (const LIEF::assembly::Instruction& inst :
     binary->disassemble("my_function"))
{
  std::cout << inst << '\n';
}
```

**Rust**

```rust
let bin: &mut dyn lief::generic::Binary = some_bin;

let path = PathBuf::from("C:\\Users\\romain\\LIEF.pdb");

bin.load_debug_info(&path);

// The location (address/size) of `my_function` is defined in LIEF.pdb
for inst in bin.disassemble_symbol("my_function") {
    println!("{inst}");
}
```

## [Generating C/C++ Definitions](<https://lief.re/doc/latest/extended/pdb/index.html#generating-c-c-definitions>)

PDB types, functions and compilation units can be turned into C/C++ definitions using the `to_decl()` function:

- `lief.pdb.Type.to_decl()` ( [`lief::pdb::Type::to_decl`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/enum.Type.html#method.to_decl>) ;  [`lief::pdb::Type::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/enum.Type.html#method.to_decl_with_opt>) ;  [`lief.pdb.Type.to_decl()`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.to_decl>) ;  [`LIEF::pdb::Type::to_decl()`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb4Type7to_declERK7DeclOpt>) )
- `lief.pdb.Function.to_decl()` ( [`lief::pdb::Function::to_decl`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/struct.Function.html#method.to_decl>) ;  [`lief::pdb::Function::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/struct.Function.html#method.to_decl_with_opt>) ;  [`lief.pdb.Function.to_decl()`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Function.to_decl>) ;  [`LIEF::pdb::Function::to_decl()`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb8Function7to_declERK7DeclOpt>) )
- `lief.pdb.CompilationUnit.to_decl()` ( [`lief::pdb::CompilationUnit::to_decl`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/struct.CompilationUnit.html#method.to_decl>) ;  [`lief::pdb::CompilationUnit::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/struct.CompilationUnit.html#method.to_decl_with_opt>) ;  [`lief.pdb.CompilationUnit.to_decl()`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.CompilationUnit.to_decl>) ;  [`LIEF::pdb::CompilationUnit::to_decl()`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb15CompilationUnit7to_declERK7DeclOpt>) )

The generated output can be configured with a  `lief.DeclOpt` ( [`lief::DeclOpt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/struct.DeclOpt.html>) ;  [`lief.DeclOpt`](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt>) ;  [`LIEF::DeclOpt`](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE>) ) structure:

**Python**

```python
pdb: lief.pdb.DebugInfo

opt = lief.DeclOpt()
opt.is_cpp = True

for ty in pdb.types:
    print(ty.to_decl(opt))

for cu in pdb.compilation_units:
    # Emit the definition of the functions of the compilation unit
    print(cu.to_decl(opt))

    for func in cu.functions:
        print(func.to_decl(opt))
```

**C++**

```cpp
std::unique_ptr<LIEF::pdb::DebugInfo> pdb;

LIEF::DeclOpt opt;
opt.is_cpp(true);

for (const LIEF::pdb::Type& ty : pdb->types()) {
  std::cout << ty.to_decl(opt) << '\n';
}

for (const LIEF::pdb::CompilationUnit& CU : pdb->compilation_units()) {
  std::cout << CU.to_decl(opt) << '\n';
  for (const LIEF::pdb::Function& func : CU.functions()) {
    std::cout << func.to_decl(opt) << '\n';
  }
}
```

**Rust**

```rust
let pdb: &lief::pdb::DebugInfo = some_pdb;

let opt = lief::DeclOpt {
    is_cpp: true,
    ..Default::default()
};

for ty in pdb.types() {
    println!("{}", ty.to_decl_with_opt(&opt));
}

for cu in pdb.compilation_units() {
    println!("{}", cu.to_decl_with_opt(&opt));
    for func in cu.functions() {
        println!("{}", func.to_decl_with_opt(&opt));
    }
}
```

---

## [API](<https://lief.re/doc/latest/extended/pdb/index.html#api>)

You can find the documentation of the API for the different languages here:

[Python API](<https://lief.re/doc/latest/extended/pdb/python.html>)

[C++ API](<https://lief.re/doc/latest/extended/pdb/cpp.html>)

Rust API: [`lief::pdb`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/index.html>)
