---
documentID: "51dae1e1c8f06af3d99df3dc330b381c451df9209525fb03ee5331f3ada1583e"
docname: "plugins/binaryninja/dwarf/index"
title: "BinaryNinja - DWARF Plugin - LIEF Documentation"
description: "BinaryNinja - DWARF Plugin. To export DWARF information from a BinaryNinja BinaryView representation, use the menu: Plugins > LIEF > Export as DWARF"
canonical: "https://lief.re/doc/latest/plugins/binaryninja/dwarf/index.html"
markdownURL: "https://lief.re/doc/latest/plugins/binaryninja/dwarf/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "a3f312d0d1ce58b9932f4baec40b9d46e786fe3cc4664fb817afb4ee57e87d32"
---

# [BinaryNinja - DWARF Plugin](<https://lief.re/doc/latest/plugins/binaryninja/dwarf/index.html#plugins-binaryninja-dwarf>)

## [Export as DWARF](<https://lief.re/doc/latest/plugins/binaryninja/dwarf/index.html#export-as-dwarf>)

> **BinaryNinja builtin plugin**
> 
> Binary Ninja already embeds a DWARF export plugin that exposes most of the functionality provided by this plugin. However, this plugin exports additional information, such as stack variables and basic blocks.

To export DWARF information from a BinaryNinja `BinaryView` representation, use the menu: `Plugins > LIEF > Export as DWARF`

![BinaryNinja DWARF exporter](https://lief.re/doc/latest/_static/binaryninja/trigger-dwarf-plugin.webp)  
  

### [Command-line export](<https://lief.re/doc/latest/plugins/binaryninja/dwarf/index.html#command-line-export>)

The standalone `lief-tool-dwarf-export-<system>-<architecture>` tool exports the saved analysis from a Binary Ninja database into a DWARF file.

For example, on Linux x86-64:

```console
$ lief-tool-dwarf-export-linux-x86_64 input.bndb --output out.dwarf
$ lief-tool-dwarf-export-linux-x86_64 /path/to/input.bndb
```

The second command writes `/path/to/input.dwarf` next to the database.

### [Support &amp; Limitations](<https://lief.re/doc/latest/plugins/binaryninja/dwarf/index.html#support-limitations>)

This extension tries to convert most of the information registered in a BinaryView into DWARF structures, but this support is not exhaustive; here is an overview of what is and is not exported.

**BinaryNinja::BinaryView**

- Function
- Data Variables
- Types
- Comments

**BinaryNinja::Function**

- Name
- Address range
- Parameters
- Type of parameters
- Return type
- Stack variables
- Types of stack variables
- Basic Blocks
- Comments

**BinaryNinja::DataVariable**

- Name
- Type
- Address
- Comments

**BinaryNinja::Type**

- `BNTypeClass::VoidTypeClass`
- `BNTypeClass::BoolTypeClass`
- `BNTypeClass::IntegerTypeClass`
- `BNTypeClass::FloatTypeClass`
- `BNTypeClass::PointerTypeClass`
- `BNTypeClass::PointerTypeClass`
- `BNTypeClass::StructureTypeClass`

  - `BNTypeClass::ClassStructureType`
  - `BNTypeClass::UnionStructureType`
  - `BNTypeClass::StructStructureType`
- `BNTypeClass::EnumerationTypeClass`
- `BNTypeClass::NamedTypeReferenceClass`
- `BNTypeClass::ArrayTypeClass`
- `BNTypeClass::WideCharTypeClass`
- `BNTypeClass::FunctionTypeClass`
- `BNTypeClass::VarArgsTypeClass`
- `BNTypeClass::ValueTypeClass`

Any types not mentioned here are not supported.
