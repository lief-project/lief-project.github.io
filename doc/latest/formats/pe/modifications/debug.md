---
documentID: "63b14fb0ad0a376b396c25b8679576269df77f4b1a2a886e6249816a0936667e"
docname: "formats/pe/modifications/debug"
title: "Debug Modification - PE - LIEF Documentation"
description: "Debug Modification in PE. LIEF can create, modify, or delete PE debug information entries."
canonical: "https://lief.re/doc/latest/formats/pe/modifications/debug.html"
markdownURL: "https://lief.re/doc/latest/formats/pe/modifications/debug.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "79870878b1ccf01b6b455bf36266ee14a4d4df3a39c6bdee9d1ccd4c337cf708"
---

# [Debug Modification](<https://lief.re/doc/latest/formats/pe/modifications/debug.html#debug-modification>)

LIEF can create, modify, or delete PE debug information entries.[![PE Debug Overview](https://lief.re/doc/latest/_images/overview.webp)](<https://lief.re/doc/latest/_images/overview.webp>)

This debug information is located in the `IMAGE_DIRECTORY_ENTRY_DEBUG` and is represented in LIEF through the  `lief.PE.Debug` ( [`lief::pe::debug::Entries`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/debug/enum.Entries.html>) ;  [`lief.PE.Debug`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug>) ;  [`LIEF::PE::Debug`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE5DebugE>) ) class.

These entries can be modified using the API exposed by these structures. For example, the PDB path referenced in a  `lief.PE.CodeViewPDB` ( [`lief::pe::debug::CodeViewPDB`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/debug/struct.CodeViewPDB.html>) ;  [`lief.PE.CodeViewPDB`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeViewPDB>) ;  [`LIEF::PE::CodeViewPDB`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE11CodeViewPDBE>) ) entry can be changed as follows:

**Python**

```python
pe: lief.PE.Binary

assert isinstance(pe.codeview_pdb, lief.PE.CodeViewPDB)
pe.codeview_pdb.filename = r"C:\A\B\C\path.pdb"

pe.write("out.dll")
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> pe;

pe->codeview_pdb()->filename(R"(C:\A\B\C\path.pdb)");

pe->write("out.dll");
```

**Rust**

```rust
let pe: &mut lief::pe::Binary = some_pe;

pe.codeview_pdb()
    .unwrap()
    .set_filename(r#"C:\A\B\C\path.pdb"#);

pe.write("out.exe");
```

The  `lief.PE.Binary.remove_debug` ( [`lief::pe::Binary::remove_debug`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.remove_debug>) ;  [`lief.PE.Binary.remove_debug()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.remove_debug>) ;  [`LIEF::PE::Binary::remove_debug()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Binary12remove_debugERK5Debug>) ) function can be used to remove a specific entry, whereas the  `lief.PE.Binary.clear_debug` ( [`lief::pe::Binary::clear_debug`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.clear_debug>) ;  [`lief.PE.Binary.clear_debug()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.clear_debug>) ;  [`LIEF::PE::Binary::clear_debug()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Binary11clear_debugEv>) ) function removes **all** debug entries:

**Python**

```python
# Remove a single CodeViewPDB entry
assert pe.codeview_pdb is not None
pe.remove_debug(pe.codeview_pdb)

# Remove all entries
pe.clear_debug()

pe.write("out.dll")
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> pe;

// Remove a single CodeViewPDB entry
pe->remove_debug(*pe->codeview_pdb());

// Remove all entries
pe->clear_debug();

pe->write("out.dll");
```

**Rust**

```rust
let pe: &mut lief::pe::Binary = some_pe;

// Remove a single CodeViewPDB entry
if let Some(cv_pdb) = pe.codeview_pdb() {
    todo!("Not Implemented yet");
    //pe.remove_debug(cv_pdb);
}

// Remove all entries
pe.clear_debug();

pe.write("out.exe");
```

Finally,  `lief.PE.Binary.add_debug_info` ( [`lief::pe::Binary::add_debug_info`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.add_debug_info>) ;  [`lief.PE.Binary.add_debug_info()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.add_debug_info>) ;  [`LIEF::PE::Binary::add_debug_info()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Binary14add_debug_infoERK5Debug>) ) can be used to add a crafted debug entry to an existing PE.

For example, a custom  `lief.PE.CodeViewPDB` ( [`lief::pe::debug::CodeViewPDB`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/debug/struct.CodeViewPDB.html>) ;  [`lief.PE.CodeViewPDB`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeViewPDB>) ;  [`LIEF::PE::CodeViewPDB`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE11CodeViewPDBE>) ) can be created as follows:

**Python**

```python
cv = lief.PE.CodeViewPDB("MyCustom.pdb")

pe.add_debug_info(cv)

pe.write("out.dll")
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> pe;

LIEF::PE::CodeViewPDB cv("MyCustom.pdb");
pe->add_debug_info(cv);

pe->write("out.dll");
```

**Rust**

```rust
let pe: &mut lief::pe::Binary = some_pe;

let cv = lief::pe::debug::CodeViewPDB::with_filename("MyCustom.pdb");

pe.add_debug_info(&cv);

pe.write("out.exe");
```
