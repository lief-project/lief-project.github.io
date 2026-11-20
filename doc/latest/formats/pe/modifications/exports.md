---
documentID: "392bb02258cc448fdd80b5a65eb2e71c884109303322044ccc28967cb59bac81"
docname: "formats/pe/modifications/exports"
title: "Exports Modification - PE - LIEF Documentation"
description: "Exports Modification in PE. LIEF provides extensive support for modifying the PE export table, enabling you to add, remove, or modify export entries, or…"
canonical: "https://lief.re/doc/latest/formats/pe/modifications/exports.html"
markdownURL: "https://lief.re/doc/latest/formats/pe/modifications/exports.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "7431a17d5b683e099977e49f16dd66c990f2e1c7f7230a316641fdbfdb5696b6"
---

# [Exports Modification](<https://lief.re/doc/latest/formats/pe/modifications/exports.html#exports-modification>)

[![PE Resources Overview](https://lief.re/doc/latest/_images/overview1.webp)](<https://lief.re/doc/latest/_images/overview1.webp>) 

LIEF provides extensive support for modifying the PE export table, enabling you to add, remove, or modify export entries, or create an entire export table for a PE binary.

This functionality requires enabling  `lief.PE.Builder.config_t.exports` ( [`lief::pe::builder::Config::exports`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/builder/struct.Config.html#structfield.exports>) ;  [`lief.PE.Builder.config_t.exports`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.exports>) ;  [`LIEF::PE::Builder::config_t::exports`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE7Builder8config_t7exportsE>) ), as the modified export table is **relocated** to a **new** section. The section name can be controlled with  `lief.PE.Builder.config_t.export_section` ( [`lief::pe::builder::Config::export_section`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/builder/struct.Config.html#structfield.export_section>) ;  [`lief.PE.Builder.config_t.export_section`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.export_section>) ;  [`LIEF::PE::Builder::config_t::export_section`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE7Builder8config_t14export_sectionE>) ).

## [Creating Export Entries](<https://lief.re/doc/latest/formats/pe/modifications/exports.html#creating-export-entries>)

Creating a  `lief.PE.ExportEntry` ( [`lief::pe::export::Entry`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/export/struct.Entry.html>) ;  [`lief.PE.ExportEntry`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry>) ;  [`LIEF::PE::ExportEntry`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE11ExportEntryE>) ) is useful for exposing a “hidden” function by its address, allowing it to be used like a standard linker-generated export.

This could be used for code lifting or fuzzing.

**Python**

```python
pe: lief.PE.Binary

exp = pe.get_export()
assert isinstance(exp, lief.PE.Export)

# Remove an entry
exp.remove_entry("my_exported_name")

# Add a new export
exp.add_entry("fuzz_me", 0x10010)

config = lief.PE.Builder.config_t()
config.exports = True
config.export_section = ".myedata"  # optional

pe.write("out.dll", config)
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> pe;

LIEF::PE::Export* exp = pe->get_export();

// Remove an entry
exp->remove_entry("my_exported_name");

// Add a new export
exp->add_entry("fuzz_me", 0x10010);

LIEF::PE::Builder::config_t config;
config.exports = true;
config.export_section = ".myedata";

pe->write("out.dll", config);
```

**Rust**

```rust
let pe: &mut lief::pe::Binary = some_pe;

let mut exp: lief::pe::Export = pe.export().unwrap();

// Remove an entry
exp.remove_entry_by_name("my_exported_name");

// Add a new export
exp.add_entry_by_name("fuzz_me", 0x10010);

let mut config = lief::pe::builder::Config::default();
config.exports = true;
config.export_section = ".myedata".to_string();

pe.write_with_config("out.dll", config);
```

## [Creating an Export Table](<https://lief.re/doc/latest/formats/pe/modifications/exports.html#creating-an-export-table>)

This section introduces the API for creating an export table. We’ll explore a scenario where we want to convert a PE executable into a DLL.

> **Note**
> 
> The process of converting an executable to a library is also detailed for ELF binaries in the tutorial: [08 - Transforming an ELF executable into a library](<https://lief.re/doc/latest/tutorials/08_elf_bin2lib.html#tuto-elf-bin2lib>).

First, we must update the PE headers to ensure they are compliant with the DLL format:

**Python**

```python
pe: lief.PE.Binary

pe.header.add_characteristic(lief.PE.Header.CHARACTERISTICS.DLL)
pe.optional_header.addressof_entrypoint = 0
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> pe;

pe->header().add_characteristic(LIEF::PE::Header::CHARACTERISTICS::DLL);
pe->optional_header().addressof_entrypoint(0);
```

**Rust**

```rust
let pe: &mut lief::pe::Binary = some_pe;

pe.header()
    .add_characteristic(lief::pe::headers::Characteristics::DLL);
pe.optional_header().set_addressof_entrypoint(0);
```

Then, we can start creating and populating a new export table:

**Python**

```python
pe: lief.PE.Binary

exp = lief.PE.Export(
    "lib_exe2dll.dll",
    [
        lief.PE.ExportEntry("cbk1", 0x0001000),
        lief.PE.ExportEntry("cbk2", 0x0001010),
    ],
)

pe.set_export(exp)

config = lief.PE.Builder.config_t()
config.exports = True

pe.write("lib_exe2dll.dll")
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> pe;

LIEF::PE::Export exp("lib_exe2dll.dll",
                     {
                         LIEF::PE::ExportEntry("cbk1", 0x0001000),
                         LIEF::PE::ExportEntry("cbk2", 0x0001010),
                     });

pe->set_export(exp);

LIEF::PE::Builder::config_t config;
config.exports = true;

pe->write("lib_exe2dll.dll", config);
```

**Rust**

```rust
let pe: &mut lief::pe::Binary = some_pe;

let mut exp = lief::pe::Export::new();

exp.set_name("lib_exe2dll.dll");
exp.add_entry_by_name("cbk1", 0x0001000);
exp.add_entry_by_name("cbk2", 0x0001010);

pe.set_export(&exp);

let mut config = lief::pe::builder::Config::default();
config.exports = true;

pe.write_with_config("lib_exe2dll.dll", config);
```

> **Limitations**
> 
> This binary-to-library example assumes that the original executable was compiled to be position-independent, meaning it contains relocations.

Within a Python environment, we can verify that `lib_exe2dll.dll` can be loaded as a DLL and that we can call `cbk1` and `cbk2`:

```python
import ctypes

lib = ctypes.windll.LoadLibrary("lib_exe2dll.dll")

assert lib.cbk1() >= 0
assert lib.cbk2() >= 0
```
