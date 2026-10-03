---
documentID: "931a8e3a90f715f97d3dd6f6afc9c0bd5e7d4a678bda9cd08123b0d129fc8cb7"
docname: "formats/macho/python"
title: "Mach-O Python API - LIEF Documentation"
description: "Mach-O Python API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/formats/macho/python.html"
markdownURL: "https://lief.re/doc/latest/formats/macho/python.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "9159d13c23b05b86a5da29734a4a542f313c41286c350e7793a8e0cc6568fd38"
---

# [Python](<https://lief.re/doc/latest/formats/macho/python.html#python>)

## [Parser](<https://lief.re/doc/latest/formats/macho/python.html#parser>)

### [` lief.MachO.parse `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.parse>)

lief.MachO.parse(*obj: str | io.IOBase | os.PathLike | bytes | list[int]*, *config: [lief.MachO.ParserConfig](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ParserConfig> "lief.MachO.ParserConfig")*) → [lief.MachO.FatBinary](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary> "lief.MachO.FatBinary") | None

Parse the given binary from the given input and return a [`FatBinary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary> "lief.MachO.FatBinary") object

One can configure the parser with the `config` parameter. See [`ParserConfig`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ParserConfig> "lief.MachO.ParserConfig")

### [` lief.MachO.ParserConfig `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ParserConfig>)

class lief.MachO.ParserConfig(*self*)

Bases: `object`

This class is used to tweak the MachO Parser (`Parser`)

#### [` deep `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ParserConfig.deep>)

deep = &lt;lief.\_lief.MachO.ParserConfig object&gt;

#### [` fix_from_memory `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ParserConfig.fix_from_memory>)

property fix\_from\_memory → bool

When parsing Mach-O from memory, this option can be used to *undo* relocations and symbols bindings.

When activated, this option requires parse\_dyld\_bindings and parse\_dyld\_rebases to be enabled.

#### [` from_dyld_shared_cache `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ParserConfig.from_dyld_shared_cache>)

property from\_dyld\_shared\_cache → bool

Whether the binary is coming/extracted from Dyld shared cache

#### [` full_dyldinfo `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ParserConfig.full_dyldinfo>)

full\_dyldinfo(*self*, *flag: bool*) → [lief.\_lief.MachO.ParserConfig](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ParserConfig> "lief._lief.MachO.ParserConfig")

If `flag` is set to `true`, Exports, Bindings and Rebases opcodes are parsed.

> **Warning**
> 
> Enabling this flag can slow down the parsing

#### [` parse_dyld_bindings `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ParserConfig.parse_dyld_bindings>)

property parse\_dyld\_bindings → bool

Parse the Dyld binding opcodes

#### [` parse_dyld_exports `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ParserConfig.parse_dyld_exports>)

property parse\_dyld\_exports → bool

Parse the Dyld export trie

#### [` parse_dyld_rebases `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ParserConfig.parse_dyld_rebases>)

property parse\_dyld\_rebases → bool

Parse the Dyld rebase opcodes

#### [` quick `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ParserConfig.quick>)

quick = &lt;lief.\_lief.MachO.ParserConfig object&gt;

```python
fatbinary_1 = lief.MachO.parse("/usr/bin/ls", config=lief.MachO.ParserConfig.deep)
# or
fatbinary_2 = lief.MachO.parse("/usr/bin/ls", config=lief.MachO.ParserConfig.quick)
```

---

## [FatBinary](<https://lief.re/doc/latest/formats/macho/python.html#fatbinary>)

### [` lief.MachO.FatBinary `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary>)

class lief.MachO.FatBinary

Bases: `object`

Class which represents a Mach-O (fat) binary This object is also used for representing Mach-O binaries that are **NOT FAT**

#### [` at `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary.at>)

at(*self*, *index: int*) → [lief.\_lief.MachO.Binary](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief._lief.MachO.Binary") | None

Return the [`Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief.MachO.Binary") at the given index or None if it is not present

#### [` create `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary.create>)

create(*binaries: collections.abc.Sequence[[lief.MachO.Binary](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief.MachO.Binary") | None]*) → [lief.MachO.FatBinary](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary> "lief.MachO.FatBinary") | None = &lt;nanobind.nb\_func object&gt;

#### [` get `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary.get>)

get(*self*, *arg: [lief.\_lief.MachO.Header.CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE> "lief._lief.MachO.Header.CPU_TYPE")*, */*) → [lief.\_lief.MachO.Binary](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief._lief.MachO.Binary") | None

Gets the [`Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief.MachO.Binary") that matches the given architecture

#### [` raw `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary.raw>)

raw(*self*) → list[int]

Build a Mach-O universal binary and return its bytes

#### [` size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary.size>)

property size → int

Number of [`Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief.MachO.Binary") registered

#### [` take `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary.take>)

take(*self*, *cpu: [lief.\_lief.MachO.Header.CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE> "lief._lief.MachO.Header.CPU_TYPE")*) → [lief.\_lief.MachO.Binary](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief._lief.MachO.Binary") | None

Return the [`Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief.MachO.Binary") that matches the given [`CPU_TYPE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE> "lief.MachO.Header.CPU_TYPE")

#### [` write `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary.write>)

write(*self*, *filename: str | os.PathLike*) → None

Build a Mach-O universal binary

---

## [Binary](<https://lief.re/doc/latest/formats/macho/python.html#binary>)

### [` lief.MachO.Binary `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary>)

class lief.MachO.Binary

Bases: [`Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary> "lief._lief.Binary")

Class which represents a MachO binary

#### [` addaddaddadd `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.add>)

add(*self*, *dylib\_command: [lief.\_lief.MachO.DylibCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief._lief.MachO.DylibCommand")*) → [lief.\_lief.MachO.LoadCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand") | None

**add(*self*, *segment: [lief.\_lief.MachO.SegmentCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief._lief.MachO.SegmentCommand")*) → [lief.\_lief.MachO.LoadCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand") | None

**add(*self*, *load\_command: [lief.\_lief.MachO.LoadCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")*) → [lief.\_lief.MachO.LoadCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand") | None

**add(*self*, *load\_command: [lief.\_lief.MachO.LoadCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")*, *index: int*) → [lief.\_lief.MachO.LoadCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand") | None******

Overloaded function.

1. `add(self, dylib_command: lief._lief.MachO.DylibCommand) -> lief._lief.MachO.LoadCommand | None`

Add a new [`DylibCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief.MachO.DylibCommand")

2. `add(self, segment: lief._lief.MachO.SegmentCommand) -> lief._lief.MachO.LoadCommand | None`

Add a new [`SegmentCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand")

3. `add(self, load_command: lief._lief.MachO.LoadCommand) -> lief._lief.MachO.LoadCommand | None`

Add a new [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief.MachO.LoadCommand")

4. `add(self, load_command: lief._lief.MachO.LoadCommand, index: int) -> lief._lief.MachO.LoadCommand | None`

Add a new [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief.MachO.LoadCommand") at `index`

#### [` add_exported_function `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.add_exported_function>)

add\_exported\_function(*self*, *address: int*, *name: str*) → [lief.\_lief.MachO.ExportInfo](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo> "lief._lief.MachO.ExportInfo") | None

Add a new export in the binary

#### [` add_library `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.add_library>)

add\_library(*self*, *library\_name: str*) → [lief.\_lief.MachO.LoadCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand") | None

Add a new library dependency

#### [` add_local_symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.add_local_symbol>)

add\_local\_symbol(*self*, *address: int*, *name: str*) → [lief.\_lief.MachO.Symbol](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief._lief.MachO.Symbol") | None

Add a new symbol in the LC\_SYMTAB

#### [` add_sectionadd_section `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.add_section>)

add\_section(*self*, *segment: [lief.\_lief.MachO.SegmentCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief._lief.MachO.SegmentCommand")*, *section: [lief.\_lief.MachO.Section](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief._lief.MachO.Section")*) → [lief.\_lief.MachO.Section](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief._lief.MachO.Section") | None

**add\_section(*self*, *section: [lief.\_lief.MachO.Section](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief._lief.MachO.Section")*) → [lief.\_lief.MachO.Section](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief._lief.MachO.Section") | None**

Overloaded function.

1. `add_section(self, segment: lief._lief.MachO.SegmentCommand, section: lief._lief.MachO.Section) -> lief._lief.MachO.Section | None`

Add a new [`Section`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief.MachO.Section") in the given [`SegmentCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand")

2. `add_section(self, section: lief._lief.MachO.Section) -> lief._lief.MachO.Section | None`

Add a new [`Section`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief.MachO.Section") within the `__TEXT` segment

#### [` atom_info `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.atom_info>)

property atom\_info → lief.MachO.AtomInfo | None

Return the binary’s `AtomInfo` if any, or None

#### [` available_command_space `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.available_command_space>)

property available\_command\_space → int

#### [` bindings `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.bindings>)

property bindings → Iterator[[lief.MachO.BindingInfo](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo> "lief.MachO.BindingInfo")]

Return an iterator over the binding info which can come from either [`DyldInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo> "lief.MachO.DyldInfo") or [`DyldChainedFixups`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups> "lief.MachO.DyldChainedFixups") commands.

#### [` build_version `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.build_version>)

property build\_version → [lief.MachO.BuildVersion](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion> "lief.MachO.BuildVersion") | None

Return the binary’s [`BuildVersion`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion> "lief.MachO.BuildVersion") if any, or None

#### [` can_remove `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.can_remove>)

can\_remove(*self*, *symbol: [lief.\_lief.MachO.Symbol](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief._lief.MachO.Symbol")*) → bool

Check if the given symbol can be safely removed.

#### [` can_remove_symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.can_remove_symbol>)

can\_remove\_symbol(*self*, *symbol\_name: str*) → bool

Check if the given symbol name can be safely removed.

#### [` code_signature `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.code_signature>)

property code\_signature → [lief.MachO.CodeSignature](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.CodeSignature> "lief.MachO.CodeSignature") | None

Return the binary’s [`CodeSignature`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.CodeSignature> "lief.MachO.CodeSignature") if any, or None

#### [` code_signature_dir `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.code_signature_dir>)

property code\_signature\_dir → [lief.MachO.CodeSignatureDir](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.CodeSignatureDir> "lief.MachO.CodeSignatureDir") | None

Return the binary’s [`CodeSignatureDir`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.CodeSignatureDir> "lief.MachO.CodeSignatureDir") if any, or None

#### [` commands `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.commands>)

property commands → lief.MachO.Binary.it\_commands

Return an iterator over the binary’s `Command`

#### [` data_in_code `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.data_in_code>)

property data\_in\_code → [lief.MachO.DataInCode](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataInCode> "lief.MachO.DataInCode") | None

Return the binary’s [`DataInCode`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataInCode> "lief.MachO.DataInCode") if any, or None

#### [` dyld_chained_fixups `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.dyld_chained_fixups>)

property dyld\_chained\_fixups → [lief.MachO.DyldChainedFixups](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups> "lief.MachO.DyldChainedFixups") | None

Return the binary’s [`DyldChainedFixups`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups> "lief.MachO.DyldChainedFixups") if any, or None

#### [` dyld_environment `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.dyld_environment>)

property dyld\_environment → [lief.MachO.DyldEnvironment](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldEnvironment> "lief.MachO.DyldEnvironment") | None

Return the binary’s [`DyldEnvironment`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldEnvironment> "lief.MachO.DyldEnvironment") if any, or None

#### [` dyld_exports_trie `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.dyld_exports_trie>)

property dyld\_exports\_trie → [lief.MachO.DyldExportsTrie](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldExportsTrie> "lief.MachO.DyldExportsTrie") | None

Return the binary’s [`DyldExportsTrie`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldExportsTrie> "lief.MachO.DyldExportsTrie") if any, or None

#### [` dyld_info `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.dyld_info>)

property dyld\_info → [lief.MachO.DyldInfo](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo> "lief.MachO.DyldInfo") | None

Return the binary’s [`DyldInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo> "lief.MachO.DyldInfo") if any, or None

#### [` dylinker `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.dylinker>)

property dylinker → [lief.MachO.DylinkerCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylinkerCommand> "lief.MachO.DylinkerCommand") | None

Return the binary’s [`DylinkerCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylinkerCommand> "lief.MachO.DylinkerCommand") if any, or None

#### [` dynamic_symbol_command `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.dynamic_symbol_command>)

property dynamic\_symbol\_command → [lief.MachO.DynamicSymbolCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand> "lief.MachO.DynamicSymbolCommand") | None

Return the binary’s [`DynamicSymbolCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand> "lief.MachO.DynamicSymbolCommand") if any, or None

#### [` encryption_info `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.encryption_info>)

property encryption\_info → [lief.MachO.EncryptionInfo](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.EncryptionInfo> "lief.MachO.EncryptionInfo") | None

Return the binary’s [`EncryptionInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.EncryptionInfo> "lief.MachO.EncryptionInfo") if any, or None

#### [` exported_symbols `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.exported_symbols>)

property exported\_symbols → lief.MachO.Binary.it\_filter\_symbols

Return the binary’s [`Symbol`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol") which are exported

#### [` extend `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.extend>)

extend(*self*, *load\_command: [lief.\_lief.MachO.LoadCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")*, *size: int*) → bool

Extend a [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief.MachO.LoadCommand") by `size`

#### [` extend_section `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.extend_section>)

extend\_section(*self*, *section: [lief.\_lief.MachO.Section](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief._lief.MachO.Section")*, *size: int*) → bool

Extend the **content** of the given [`Section`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief.MachO.Section") by `size`

#### [` extend_segment `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.extend_segment>)

extend\_segment(*self*, *segment\_command: [lief.\_lief.MachO.SegmentCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief._lief.MachO.SegmentCommand")*, *size: int*) → bool

Extend the **content** of the given [`SegmentCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") by `size`

#### [` fat_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.fat_offset>)

property fat\_offset → int

Return binary’s *fat offset*. `0` if not relevant.

#### [` fileset_addr `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.fileset_addr>)

property fileset\_addr → int

Original address associated with the `LC_FILESET_ENTRY` for this MachO.

#### [` fileset_name `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.fileset_name>)

property fileset\_name → str

Name associated with the `LC_FILESET_ENTRY` for this MachO. For instance: `com.apple.kec.corecrypto`

#### [` filesets `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.filesets>)

property filesets → lief.MachO.FatBinary.it\_binaries

Return binary’s `Filesets`

#### [` find_library `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.find_library>)

find\_library(*self*, *name: str*) → [lief.\_lief.MachO.DylibCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief._lief.MachO.DylibCommand") | None

Try to find the library with the given library name.

This function tries to match the fullpath of the [`DylibCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief.MachO.DylibCommand") or the library name suffix.

#### [` function_starts `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.function_starts>)

property function\_starts → [lief.MachO.FunctionStarts](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionStarts> "lief.MachO.FunctionStarts") | None

Return the binary’s [`FunctionStarts`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionStarts> "lief.MachO.FunctionStarts") if any, or None

#### [` function_variant_fixups `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.function_variant_fixups>)

property function\_variant\_fixups → [lief.MachO.FunctionVariantFixups](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups> "lief.MachO.FunctionVariantFixups") | None

Return `LC_FUNCTION_VARIANT_FIXUPS` command

#### [` function_variants `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.function_variants>)

property function\_variants → [lief.MachO.FunctionVariants](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants> "lief.MachO.FunctionVariants") | None

Return `LC_FUNCTION_VARIANTS` command

#### [` functions `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.functions>)

property functions → list[[lief.Function](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function> "lief.Function")]

Return list of **all** [`Function`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function> "lief.Function") found

#### [` get `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.get>)

get(*self*, *type: [lief.\_lief.MachO.LoadCommand.TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE> "lief._lief.MachO.LoadCommand.TYPE")*) → [lief.\_lief.MachO.LoadCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand") | None

Return the **first** [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief.MachO.LoadCommand") with the given [`TYPE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE> "lief.MachO.LoadCommand.TYPE") or None if it is not present.

#### [` get_sectionget_section `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.get_section>)

get\_section(*self*, *name: str*) → [lief.\_lief.MachO.Section](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief._lief.MachO.Section") | None

**get\_section(*self*, *segname: str*, *secname: str*) → [lief.\_lief.MachO.Section](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief._lief.MachO.Section") | None**

Overloaded function.

1. `get_section(self, name: str) -> lief._lief.MachO.Section | None`

Return the section from the given name or None if the section does not exist

2. `get_section(self, segname: str, secname: str) -> lief._lief.MachO.Section | None`

   > Return the section from the segment with the name given in the first parameter and with the section’s name provided in the second parameter. If the section cannot be found, it returns a nullptr

#### [` get_segment `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.get_segment>)

get\_segment(*self*, *name: str*) → [lief.\_lief.MachO.SegmentCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief._lief.MachO.SegmentCommand") | None

Return the [`SegmentCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") from the given name

#### [` get_symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.get_symbol>)

get\_symbol(*self*, *name: str*) → [lief.\_lief.MachO.Symbol](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief._lief.MachO.Symbol") | None

Return the [`Symbol`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol") from the given name

#### [` has `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has>)

has(*self*, *type: [lief.\_lief.MachO.LoadCommand.TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE> "lief._lief.MachO.LoadCommand.TYPE")*) → bool

Check if the current binary has a [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief.MachO.LoadCommand") with the given [`TYPE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE> "lief.MachO.LoadCommand.TYPE")

#### [` has_atom_info `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_atom_info>)

property has\_atom\_info → bool

`True` if the binary embeds the `LC_ATOM_INFO` command (`AtomInfo`)

#### [` has_build_version `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_build_version>)

property has\_build\_version → bool

`True` if the binary has a [`BuildVersion`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion> "lief.MachO.BuildVersion") command

#### [` has_code_signature `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_code_signature>)

property has\_code\_signature → bool

`True` if the binary is signed (i.e. has a [`CodeSignature`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.CodeSignature> "lief.MachO.CodeSignature") command)

#### [` has_code_signature_dir `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_code_signature_dir>)

property has\_code\_signature\_dir → bool

`True` if the binary is signed (i.e. has a [`CodeSignatureDir`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.CodeSignatureDir> "lief.MachO.CodeSignatureDir") command) with the command LC\_DYLIB\_CODE\_SIGN\_DRS

#### [` has_data_in_code `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_data_in_code>)

property has\_data\_in\_code → bool

`True` if the binary has a [`DataInCode`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataInCode> "lief.MachO.DataInCode") command

#### [` has_dyld_chained_fixups `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_dyld_chained_fixups>)

property has\_dyld\_chained\_fixups → bool

`True` if the binary has a [`DyldChainedFixups`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups> "lief.MachO.DyldChainedFixups") command

#### [` has_dyld_environment `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_dyld_environment>)

property has\_dyld\_environment → bool

`True` if the binary has a [`DyldEnvironment`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldEnvironment> "lief.MachO.DyldEnvironment") command

#### [` has_dyld_exports_trie `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_dyld_exports_trie>)

property has\_dyld\_exports\_trie → bool

`True` if the binary has a [`DyldExportsTrie`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldExportsTrie> "lief.MachO.DyldExportsTrie") command

#### [` has_dyld_info `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_dyld_info>)

property has\_dyld\_info → bool

`True` if the binary has a [`DyldInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo> "lief.MachO.DyldInfo") command.

#### [` has_dylinker `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_dylinker>)

property has\_dylinker → bool

`True` if the binary has a [`DylinkerCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylinkerCommand> "lief.MachO.DylinkerCommand") command.

#### [` has_dynamic_symbol_command `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_dynamic_symbol_command>)

property has\_dynamic\_symbol\_command → bool

`True` if the binary has a [`DynamicSymbolCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand> "lief.MachO.DynamicSymbolCommand") command.

#### [` has_encryption_info `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_encryption_info>)

property has\_encryption\_info → bool

`True` if the binary has a [`EncryptionInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.EncryptionInfo> "lief.MachO.EncryptionInfo") command

#### [` has_entrypoint `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_entrypoint>)

property has\_entrypoint → bool

`True` if the binary has an entrypoint.

Basically for libraries it will return `false`

#### [` has_filesets `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_filesets>)

property has\_filesets → bool

Return `True` if the binary has filesets

#### [` has_function_starts `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_function_starts>)

property has\_function\_starts → bool

`True` if the binary has a [`FunctionStarts`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionStarts> "lief.MachO.FunctionStarts") command.

#### [` has_function_variant_fixups `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_function_variant_fixups>)

property has\_function\_variant\_fixups → bool

`True` if the binary has a `LC_FUNCTION_VARIANT_FIXUPS` command

#### [` has_function_variants `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_function_variants>)

property has\_function\_variants → bool

`True` if the binary has a `LC_FUNCTION_VARIANTS` command

#### [` has_linker_opt_hint `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_linker_opt_hint>)

property has\_linker\_opt\_hint → bool

`True` if the binary embeds the Linker optimization hint command ([`LinkerOptHint`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LinkerOptHint> "lief.MachO.LinkerOptHint"))

#### [` has_main_command `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_main_command>)

property has\_main\_command → bool

`True` if the binary has a [`MainCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MainCommand> "lief.MachO.MainCommand") command.

#### [` has_notes `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_notes>)

property has\_notes → bool

True if the binary contains `LC_NOTE` command(s)

#### [` has_nx_heap `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_nx_heap>)

property has\_nx\_heap → bool

Return True if the **heap** is flagged as non-executable. False otherwise.

#### [` has_nx_stack `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_nx_stack>)

property has\_nx\_stack → bool

Return True if the **stack** is flagged as non-executable. False otherwise.

#### [` has_routine_command `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_routine_command>)

property has\_routine\_command → bool

`True` if the binary has a [`Routine`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Routine> "lief.MachO.Routine") command.

#### [` has_rpath `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_rpath>)

property has\_rpath → bool

`True` if the binary has a [`RPathCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RPathCommand> "lief.MachO.RPathCommand") command.

#### [` has_section `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_section>)

has\_section(*self*, *name: str*) → bool

Check if a section with the given name exists

#### [` has_segment `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_segment>)

has\_segment(*self*, *name: str*) → bool

Check if a [`SegmentCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") with the given name exists

#### [` has_segment_split_info `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_segment_split_info>)

property has\_segment\_split\_info → bool

`True` if the binary has a [`SegmentSplitInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentSplitInfo> "lief.MachO.SegmentSplitInfo") command

#### [` has_source_version `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_source_version>)

property has\_source\_version → bool

`True` if the binary has a [`SourceVersion`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SourceVersion> "lief.MachO.SourceVersion") command.

#### [` has_sub_framework `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_sub_framework>)

property has\_sub\_framework → bool

`True` if the binary has a [`SubFramework`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SubFramework> "lief.MachO.SubFramework") command

#### [` has_subclients `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_subclients>)

property has\_subclients → bool

`True` if the binary has a [`SubClient`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SubClient> "lief.MachO.SubClient") command

#### [` has_symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_symbol>)

has\_symbol(*self*, *name: str*) → bool

Check if a [`Symbol`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol") with the given name exists

#### [` has_symbol_command `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_symbol_command>)

property has\_symbol\_command → bool

`True` if the binary has a [`SymbolCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SymbolCommand> "lief.MachO.SymbolCommand") command.

#### [` has_thread_command `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_thread_command>)

property has\_thread\_command → bool

`True` if the binary has a [`ThreadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadCommand> "lief.MachO.ThreadCommand") command.

#### [` has_two_level_hints `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_two_level_hints>)

property has\_two\_level\_hints → bool

`True` if the binary embeds the Two Level Hint command ([`TwoLevelHints`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.TwoLevelHints> "lief.MachO.TwoLevelHints"))

#### [` has_uuid `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_uuid>)

property has\_uuid → bool

`True` if the binary has a [`UUIDCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.UUIDCommand> "lief.MachO.UUIDCommand") command.

#### [` has_version_min `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.has_version_min>)

property has\_version\_min → bool

`True` if the binary has a [`VersionMin`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.VersionMin> "lief.MachO.VersionMin") command.

#### [` header `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.header>)

property header → [lief.MachO.Header](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header> "lief.MachO.Header")

Return binary’s [`Header`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header> "lief.MachO.Header")

#### [` imagebase `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.imagebase>)

property imagebase → int

Return the binary’s `imagebase` which is the base address where segments are mapped (without the ASLR). `0` if not relevant.

#### [` imported_symbols `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.imported_symbols>)

property imported\_symbols → lief.MachO.Binary.it\_filter\_symbols

Return the binary’s [`Symbol`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol") which are imported

#### [` is_ios `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.is_ios>)

property is\_ios → bool

True if this binary targets iOS

#### [` is_macos `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.is_macos>)

property is\_macos → bool

True if this binary targets macOS

#### [` is_valid_addr `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.is_valid_addr>)

is\_valid\_addr(*self*, *address: int*) → bool

Check if the given address is encompassed between the range of virtual addresses.

See: [`va_ranges`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.va_ranges> "lief.MachO.Binary.va_ranges")

#### [` lazy_load_dylib_infos `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.lazy_load_dylib_infos>)

property lazy\_load\_dylib\_infos → lief.MachO.Binary.it\_lazy\_load\_dylib\_info

Return an iterator over the binary’s [`LazyLoadDylibInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo> "lief.MachO.LazyLoadDylibInfo")

#### [` libraries `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.libraries>)

property libraries → lief.MachO.Binary.it\_libraries

Return an iterator over the binary’s [`DylibCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief.MachO.DylibCommand")

#### [` linker_opt_hint `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.linker_opt_hint>)

property linker\_opt\_hint → [lief.MachO.LinkerOptHint](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LinkerOptHint> "lief.MachO.LinkerOptHint") | None

Return the binary’s [`LinkerOptHint`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LinkerOptHint> "lief.MachO.LinkerOptHint") if any, or None

#### [` main_command `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.main_command>)

property main\_command → [lief.MachO.MainCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MainCommand> "lief.MachO.MainCommand") | None

Return the binary’s [`MainCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MainCommand> "lief.MachO.MainCommand") if any, or None

#### [` notes `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.notes>)

property notes → lief.MachO.Binary.it\_notes

Iterator over the different `LC_NOTE` commands

#### [` objc_metadata `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.objc_metadata>)

property objc\_metadata → [lief.objc.Metadata](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Metadata> "lief.objc.Metadata") | None

Return Objective-C metadata info if present

> **Warning**
> 
> This is only available with the extended version of LIEF.

#### [` off_ranges `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.off_ranges>)

property off\_ranges → [lief.MachO.Binary.range\_t](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.range_t> "lief.MachO.Binary.range_t")

Return the range of offsets as a tuple `(off_start, off_end)`

#### [` overlay `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.overlay>)

property overlay → memoryview

#### [` platform `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.platform>)

property platform → [lief.MachO.BuildVersion.PLATFORMS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS> "lief.MachO.BuildVersion.PLATFORMS")

Return the platform for which this Mach-O has been compiled

#### [` range_t `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.range_t>)

class range\_t

Bases: `object`

##### [` end `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.range_t.end>)

property end → int

##### [` start `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.range_t.start>)

property start → int

#### [` relocations `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.relocations>)

property relocations → lief.MachO.Binary.it\_relocations

Return an iterator over binary’s [`Relocation`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation> "lief.MachO.Relocation")

#### [` removeremoveremove `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.remove>)

remove(*self*, *load\_command: [lief.\_lief.MachO.LoadCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")*) → bool

**remove(*self*, *type: [lief.\_lief.MachO.LoadCommand.TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE> "lief._lief.MachO.LoadCommand.TYPE")*) → bool

**remove(*self*, *symbol: [lief.\_lief.MachO.Symbol](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief._lief.MachO.Symbol")*) → bool****

Overloaded function.

1. `remove(self, load_command: lief._lief.MachO.LoadCommand) -> bool`

Remove a [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief.MachO.LoadCommand")

2. `remove(self, type: lief._lief.MachO.LoadCommand.TYPE) -> bool`

Remove **all** the [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief.MachO.LoadCommand") with the given [`TYPE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE> "lief.MachO.LoadCommand.TYPE")

3. `remove(self, symbol: lief._lief.MachO.Symbol) -> bool`

Remove the given [`Symbol`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol")

#### [` remove_command `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.remove_command>)

remove\_command(*self*, *index: int*) → bool

Remove the [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief.MachO.LoadCommand") at the given `index`

#### [` remove_sectionremove_section `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.remove_section>)

remove\_section(*self*, *name: str*, *clear: bool = False*) → None

**remove\_section(*self*, *segname: str*, *secname: str*, *clear: bool = False*) → None**

Overloaded function.

1. `remove_section(self, name: str, clear: bool = False) -> None`

Remove the section with the given name

2. `remove_section(self, segname: str, secname: str, clear: bool = False) -> None`

   > Remove the section from the segment with the name given in the first parameter and with the section’s name provided in the second parameter.

#### [` remove_signature `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.remove_signature>)

remove\_signature(*self*) → bool

Remove the [`CodeSignature`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.CodeSignature> "lief.MachO.CodeSignature") (if any)

#### [` remove_symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.remove_symbol>)

remove\_symbol(*self*, *name: str*) → bool

Remove all symbol(s) with the given name

#### [` routine_command `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.routine_command>)

property routine\_command → [lief.MachO.Routine](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Routine> "lief.MachO.Routine") | None

Return the binary’s [`Routine`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Routine> "lief.MachO.Routine") if any, or None

#### [` rpath `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.rpath>)

property rpath → [lief.MachO.RPathCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RPathCommand> "lief.MachO.RPathCommand") | None

Return the binary’s [`RPathCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RPathCommand> "lief.MachO.RPathCommand") if any, or None

#### [` rpaths `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.rpaths>)

property rpaths → lief.MachO.Binary.it\_rpaths

Return an iterator over the binary’s [`RPathCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RPathCommand> "lief.MachO.RPathCommand")

#### [` section_from_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.section_from_offset>)

section\_from\_offset(*self*, *arg: int*, */*) → [lief.\_lief.MachO.Section](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief._lief.MachO.Section") | None

Return the [`Section`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief.MachO.Section") which encompasses the offset

#### [` section_from_virtual_address `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.section_from_virtual_address>)

section\_from\_virtual\_address(*self*, *arg: int*, */*) → [lief.\_lief.MachO.Section](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief._lief.MachO.Section") | None

Return the [`Section`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief.MachO.Section") which encompasses the virtual address

#### [` sections `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.sections>)

property sections → lief.MachO.Binary.it\_sections

Return an iterator over the binary’s [`Section`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief.MachO.Section")

#### [` segment_from_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.segment_from_offset>)

segment\_from\_offset(*self*, *arg: int*, */*) → [lief.\_lief.MachO.SegmentCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief._lief.MachO.SegmentCommand") | None

Return the [`SegmentCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") which encompasses the offset

#### [` segment_from_virtual_address `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.segment_from_virtual_address>)

segment\_from\_virtual\_address(*self*, *arg: int*, */*) → [lief.\_lief.MachO.SegmentCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief._lief.MachO.SegmentCommand") | None

Return the [`SegmentCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") which encompasses the virtual address

#### [` segment_split_info `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.segment_split_info>)

property segment\_split\_info → [lief.MachO.SegmentSplitInfo](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentSplitInfo> "lief.MachO.SegmentSplitInfo") | None

Return the binary’s [`SegmentSplitInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentSplitInfo> "lief.MachO.SegmentSplitInfo") if any, or None

#### [` segments `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.segments>)

property segments → lief.MachO.Binary.it\_segments

Return an iterator over the binary’s [`SegmentCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand")

#### [` shift `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.shift>)

shift(*self*, *value: int*) → [lief.\_lief.ok\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_t> "lief._lief.ok_t") | [lief.\_lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief._lief.lief_errors")

Shift the content located right after the Load commands table. This operation can be used to add a new command

#### [` shift_linkedit `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.shift_linkedit>)

shift\_linkedit(*self*, *value: int*) → [lief.\_lief.ok\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_t> "lief._lief.ok_t") | [lief.\_lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief._lief.lief_errors")

Shift the position on the \_\_LINKEDIT data by width

#### [` source_version `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.source_version>)

property source\_version → [lief.MachO.SourceVersion](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SourceVersion> "lief.MachO.SourceVersion") | None

Return the binary’s [`SourceVersion`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SourceVersion> "lief.MachO.SourceVersion") if any, or None

#### [` sub_framework `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.sub_framework>)

property sub\_framework → [lief.MachO.SubFramework](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SubFramework> "lief.MachO.SubFramework") | None

Return the binary’s [`SubFramework`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SubFramework> "lief.MachO.SubFramework") if any, or None

#### [` subclients `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.subclients>)

property subclients → lief.MachO.Binary.it\_sub\_clients

Return an iterator over the binary’s [`SubClient`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SubClient> "lief.MachO.SubClient")

#### [` support_arm64_ptr_auth `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.support_arm64_ptr_auth>)

property support\_arm64\_ptr\_auth → bool

Check if the binary is supporting ARM64 pointer authentication (arm64e)

#### [` symbol_command `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.symbol_command>)

property symbol\_command → [lief.MachO.SymbolCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SymbolCommand> "lief.MachO.SymbolCommand") | None

Return the binary’s [`SymbolCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SymbolCommand> "lief.MachO.SymbolCommand") if any, or None

#### [` symbol_stubs `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.symbol_stubs>)

property symbol\_stubs → collections.abc.Sequence[[lief.MachO.Stub](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Stub> "lief.MachO.Stub")]

Return an iterator over the symbol stubs.

These stubs are involved when calling an **imported** function and are similar to the ELF’s plt/got mechanism.

There are located in sections like: `__stubs,__auth_stubs,__symbol_stub,__picsymbolstub4`

#### [` symbols `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.symbols>)

property symbols → lief.MachO.Binary.it\_symbols

Return an iterator over the binary’s [`Symbol`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol")

#### [` thread_command `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.thread_command>)

property thread\_command → [lief.MachO.ThreadCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadCommand> "lief.MachO.ThreadCommand") | None

Return the binary’s [`ThreadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadCommand> "lief.MachO.ThreadCommand") if any, or None

#### [` tlv_initial_content_range `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.tlv_initial_content_range>)

property tlv\_initial\_content\_range → [lief.MachO.Binary.range\_t](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.range_t> "lief.MachO.Binary.range_t")

Return the TLV initial content range

#### [` two_level_hints `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.two_level_hints>)

property two\_level\_hints → [lief.MachO.TwoLevelHints](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.TwoLevelHints> "lief.MachO.TwoLevelHints") | None

Return the binary’s [`TwoLevelHints`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.TwoLevelHints> "lief.MachO.TwoLevelHints") if any, or None

#### [` unexportunexport `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.unexport>)

unexport(*self*, *name: str*) → bool

**unexport(*self*, *symbol: [lief.\_lief.MachO.Symbol](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief._lief.MachO.Symbol")*) → bool**

Remove the symbol from the export table

#### [` unwind_functions `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.unwind_functions>)

property unwind\_functions → list[[lief.Function](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function> "lief.Function")]

Return list of [`Function`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function> "lief.Function") found in the `__unwind_info` section

#### [` uuid `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.uuid>)

property uuid → [lief.MachO.UUIDCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.UUIDCommand> "lief.MachO.UUIDCommand") | None

Return the binary’s [`UUIDCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.UUIDCommand> "lief.MachO.UUIDCommand") if any, or None

#### [` va_ranges `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.va_ranges>)

property va\_ranges → [lief.MachO.Binary.range\_t](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.range_t> "lief.MachO.Binary.range_t")

Return the range of virtual addresses as a tuple `(va_start, va_end)`

#### [` version_min `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.version_min>)

property version\_min → [lief.MachO.VersionMin](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.VersionMin> "lief.MachO.VersionMin") | None

Return the binary’s [`VersionMin`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.VersionMin> "lief.MachO.VersionMin") if any, or None

#### [` virtual_address_to_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.virtual_address_to_offset>)

virtual\_address\_to\_offset(*self*, *virtual\_address: int*) → int | [lief.\_lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief._lief.lief_errors")

Convert the virtual address to an offset in the binary

#### [` virtual_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.virtual_size>)

property virtual\_size → int

Binary’s memory size when mapped

#### [` writewrite `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.write>)

write(*self*, *output: str | os.PathLike*) → None

**write(*self*, *output: str | os.PathLike*, *config: [lief.\_lief.MachO.Builder.config\_t](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Builder.config_t> "lief._lief.MachO.Builder.config_t")*) → None**

Overloaded function.

1. `write(self, output: Union[str | os.PathLike]) -> None`

Rebuild the binary and write its content in the file given in the first parameter

2. `write(self, output: Union[str | os.PathLike], config: lief._lief.MachO.Builder.config_t) -> None`

   > Rebuild the binary and write its content in the file given in the first parameter. The `config` parameter can be used to tweak the building process.

#### [` write_to_byteswrite_to_bytes `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.write_to_bytes>)

write\_to\_bytes(*self*, *config: [lief.\_lief.MachO.Builder.config\_t](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Builder.config_t> "lief._lief.MachO.Builder.config_t")*) → bytes

**write\_to\_bytes(*self*) → bytes**

---

## [Header](<https://lief.re/doc/latest/formats/macho/python.html#header>)

### [` lief.MachO.Header `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header>)

class lief.MachO.Header(*self*)

Bases: `Object`

Class that represents the Mach-O header

#### [` CPU_TYPE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE>)

class CPU\_TYPE(*\*values*)

Bases: `Enum`

##### [` AIR64 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.AIR64>)

AIR64 = 16777239

##### [` ALPHA `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.ALPHA>)

ALPHA = 16

##### [` AMD_GPU `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.AMD_GPU>)

AMD\_GPU = 16777236

##### [` ANY `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.ANY>)

ANY = -1

##### [` APPLE_GPU `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.APPLE_GPU>)

APPLE\_GPU = 16777235

##### [` ARM `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.ARM>)

ARM = 12

##### [` ARM64 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.ARM64>)

ARM64 = 16777228

##### [` HPPA `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.HPPA>)

HPPA = 11

##### [` I860 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.I860>)

I860 = 15

##### [` INTEL_GPU `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.INTEL_GPU>)

INTEL\_GPU = 16777237

##### [` MC88000 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.MC88000>)

MC88000 = 13

##### [` MC98000 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.MC98000>)

MC98000 = 10

##### [` MIPS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.MIPS>)

MIPS = 8

##### [` POWERPC `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.POWERPC>)

POWERPC = 18

##### [` POWERPC64 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.POWERPC64>)

POWERPC64 = 16777234

##### [` SPARC `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.SPARC>)

SPARC = 14

##### [` X86 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.X86>)

X86 = 7

##### [` X86_64 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.X86_64>)

X86\_64 = 16777223

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE.from_value>)

from\_value(*arg: int*) → [lief.MachO.Header.CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE> "lief.MachO.Header.CPU_TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` FILE_TYPE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE>)

class FILE\_TYPE(*\*values*)

Bases: `Enum`

##### [` BUNDLE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.BUNDLE>)

BUNDLE = 8

##### [` CORE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.CORE>)

CORE = 4

##### [` DSYM `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.DSYM>)

DSYM = 10

##### [` DYLIB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.DYLIB>)

DYLIB = 6

##### [` DYLIB_STUB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.DYLIB_STUB>)

DYLIB\_STUB = 9

##### [` DYLINKER `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.DYLINKER>)

DYLINKER = 7

##### [` EXECUTE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.EXECUTE>)

EXECUTE = 2

##### [` FILESET `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.FILESET>)

FILESET = 12

##### [` FVMLIB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.FVMLIB>)

FVMLIB = 3

##### [` GPU_DYLIB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.GPU_DYLIB>)

GPU\_DYLIB = 14

##### [` GPU_EXECUTE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.GPU_EXECUTE>)

GPU\_EXECUTE = 13

##### [` KEXT_BUNDLE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.KEXT_BUNDLE>)

KEXT\_BUNDLE = 11

##### [` OBJECT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.OBJECT>)

OBJECT = 1

##### [` PRELOAD `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.PRELOAD>)

PRELOAD = 5

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.UNKNOWN>)

UNKNOWN = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.from_value>)

from\_value(*arg: int*) → [lief.MachO.Header.FILE\_TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE> "lief.MachO.Header.FILE_TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` FLAGS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS>)

class FLAGS(*\*values*)

Bases: `Flag`

##### [` ALLMODSBOUND `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.ALLMODSBOUND>)

ALLMODSBOUND = 4096

##### [` ALLOW_STACK_EXECUTION `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.ALLOW_STACK_EXECUTION>)

ALLOW\_STACK\_EXECUTION = 131072

##### [` APP_EXTENSION_SAFE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.APP_EXTENSION_SAFE>)

APP\_EXTENSION\_SAFE = 33554432

##### [` BINDATLOAD `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.BINDATLOAD>)

BINDATLOAD = 8

##### [` BINDS_TO_WEAK `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.BINDS_TO_WEAK>)

BINDS\_TO\_WEAK = 65536

##### [` CANONICAL `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.CANONICAL>)

CANONICAL = 16384

##### [` DEAD_STRIPPABLE_DYLIB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.DEAD_STRIPPABLE_DYLIB>)

DEAD\_STRIPPABLE\_DYLIB = 4194304

##### [` DYLDLINK `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.DYLDLINK>)

DYLDLINK = 4

##### [` DYLIB_IN_CACHE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.DYLIB_IN_CACHE>)

DYLIB\_IN\_CACHE = 2147483648

##### [` FORCE_FLAT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.FORCE_FLAT>)

FORCE\_FLAT = 256

##### [` HAS_TLV_DESCRIPTORS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.HAS_TLV_DESCRIPTORS>)

HAS\_TLV\_DESCRIPTORS = 8388608

##### [` IMPLICIT_PAGEZERO `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.IMPLICIT_PAGEZERO>)

IMPLICIT\_PAGEZERO = 268435456

##### [` INCRLINK `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.INCRLINK>)

INCRLINK = 2

##### [` LAZY_INIT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.LAZY_INIT>)

LAZY\_INIT = 64

##### [` NLIST_OUTOFSYNC_WITH_DYLDINFO `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.NLIST_OUTOFSYNC_WITH_DYLDINFO>)

NLIST\_OUTOFSYNC\_WITH\_DYLDINFO = 67108864

##### [` NOFIXPREBINDING `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.NOFIXPREBINDING>)

NOFIXPREBINDING = 1024

##### [` NOMULTIDEFS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.NOMULTIDEFS>)

NOMULTIDEFS = 512

##### [` NOUNDEFS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.NOUNDEFS>)

NOUNDEFS = 1

##### [` NO_HEAP_EXECUTION `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.NO_HEAP_EXECUTION>)

NO\_HEAP\_EXECUTION = 16777216

##### [` NO_REEXPORTED_DYLIBS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.NO_REEXPORTED_DYLIBS>)

NO\_REEXPORTED\_DYLIBS = 1048576

##### [` PIE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.PIE>)

PIE = 2097152

##### [` PREBINDABLE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.PREBINDABLE>)

PREBINDABLE = 2048

##### [` PREBOUND `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.PREBOUND>)

PREBOUND = 16

##### [` ROOT_SAFE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.ROOT_SAFE>)

ROOT\_SAFE = 262144

##### [` SETUID_SAFE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.SETUID_SAFE>)

SETUID\_SAFE = 524288

##### [` SIM_SUPPORT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.SIM_SUPPORT>)

SIM\_SUPPORT = 134217728

##### [` SPLIT_SEGS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.SPLIT_SEGS>)

SPLIT\_SEGS = 32

##### [` SUBSECTIONS_VIA_SYMBOLS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.SUBSECTIONS_VIA_SYMBOLS>)

SUBSECTIONS\_VIA\_SYMBOLS = 8192

##### [` TWOLEVEL `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.TWOLEVEL>)

TWOLEVEL = 128

##### [` WEAK_DEFINES `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.WEAK_DEFINES>)

WEAK\_DEFINES = 32768

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS.from_value>)

from\_value(*arg: int*) → [lief.MachO.Header.FLAGS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS> "lief.MachO.Header.FLAGS") = &lt;nanobind.nb\_func object&gt;

#### [` add `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.add>)

add(*self*, *flag: [lief.\_lief.MachO.Header.FLAGS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS> "lief._lief.MachO.Header.FLAGS")*) → None

Add the given [`FLAGS`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS> "lief.MachO.Header.FLAGS")

#### [` cpu_subtype `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.cpu_subtype>)

property cpu\_subtype → int

Return the CPU subtype supported by the Mach-O binary. For ARM architectures, this value could represent the minimum version for which the Mach-O binary has been compiled for.

#### [` cpu_type `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.cpu_type>)

property cpu\_type → [lief.MachO.Header.CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE> "lief.MachO.Header.CPU_TYPE")

Target CPU

#### [` file_type `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.file_type>)

property file\_type → [lief.MachO.Header.FILE\_TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE> "lief.MachO.Header.FILE_TYPE")

Binary’s type

#### [` flags `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.flags>)

property flags → int

Binary’s flags

#### [` flags_list `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.flags_list>)

property flags\_list → list[[lief.MachO.Header.FLAGS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS> "lief.MachO.Header.FLAGS")]

[`FLAGS`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS> "lief.MachO.Header.FLAGS") as a list

#### [` has `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.has>)

has(*self*, *flag: [lief.\_lief.MachO.Header.FLAGS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS> "lief._lief.MachO.Header.FLAGS")*) → bool

`True` if the given [`FLAGS`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS> "lief.MachO.Header.FLAGS") is in the [`flags`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.flags> "lief.MachO.Header.flags")

#### [` is_32bit `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.is_32bit>)

property is\_32bit → bool

True if the binary is 32-bits

#### [` is_64bit `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.is_64bit>)

property is\_64bit → bool

True if the binary is 64-bits

#### [` magic `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.magic>)

property magic → [lief.MachO.MACHO\_TYPES](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MACHO_TYPES> "lief.MachO.MACHO_TYPES")

The Mach-O magic bytes. These bytes determine whether it is a 32 bits Mach-O, a 64 bits Mach-O files etc.

#### [` nb_cmds `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.nb_cmds>)

property nb\_cmds → int

Number of [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief.MachO.LoadCommand")

#### [` remove `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.remove>)

remove(*self*, *flag: [lief.\_lief.MachO.Header.FLAGS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS> "lief._lief.MachO.Header.FLAGS")*) → None

Remove the given [`FLAGS`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FLAGS> "lief.MachO.Header.FLAGS")

#### [` reserved `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.reserved>)

property reserved → int

According to the official documentation, a reserved value

#### [` sizeof_cmds `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.sizeof_cmds>)

property sizeof\_cmds → int

Size of all [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief.MachO.LoadCommand")

---

## [Section](<https://lief.re/doc/latest/formats/macho/python.html#section>)

![Inheritance diagram of lief._lief.MachO.ThreadLocalVariables, lief._lief.MachO.Section](https://lief.re/doc/latest/_images/inheritance-74aa96439a6e7634f60f360d45f05ffe5d552566.png)

### [` lief.MachO.Section `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section>)

class lief.MachO.Section

Bases: [`Section`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section> "lief._lief.Section")

Class that represents a Mach-O section

#### [` FLAGS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS>)

class FLAGS(*\*values*)

Bases: `Flag`

##### [` DEBUG_INFO `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS.DEBUG_INFO>)

DEBUG\_INFO = 33554432

##### [` EXT_RELOC `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS.EXT_RELOC>)

EXT\_RELOC = 512

##### [` LIVE_SUPPORT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS.LIVE_SUPPORT>)

LIVE\_SUPPORT = 134217728

##### [` LOC_RELOC `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS.LOC_RELOC>)

LOC\_RELOC = 256

##### [` NO_DEAD_STRIP `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS.NO_DEAD_STRIP>)

NO\_DEAD\_STRIP = 268435456

##### [` NO_TOC `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS.NO_TOC>)

NO\_TOC = 1073741824

##### [` PURE_INSTRUCTIONS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS.PURE_INSTRUCTIONS>)

PURE\_INSTRUCTIONS = 2147483648

##### [` SELF_MODIFYING_CODE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS.SELF_MODIFYING_CODE>)

SELF\_MODIFYING\_CODE = 67108864

##### [` SOME_INSTRUCTIONS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS.SOME_INSTRUCTIONS>)

SOME\_INSTRUCTIONS = 1024

##### [` STRIP_STATIC_SYMS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS.STRIP_STATIC_SYMS>)

STRIP\_STATIC\_SYMS = 536870912

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS.from_value>)

from\_value(*arg: int*) → [lief.MachO.Section.FLAGS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS> "lief.MachO.Section.FLAGS") = &lt;nanobind.nb\_func object&gt;

#### [` TYPE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

##### [` COALESCED `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.COALESCED>)

COALESCED = 11

##### [` CSTRING_LITERALS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.CSTRING_LITERALS>)

CSTRING\_LITERALS = 2

##### [` DTRACE_DOF `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.DTRACE_DOF>)

DTRACE\_DOF = 15

##### [` GB_ZEROFILL `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.GB_ZEROFILL>)

GB\_ZEROFILL = 12

##### [` INIT_FUNC_OFFSETS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.INIT_FUNC_OFFSETS>)

INIT\_FUNC\_OFFSETS = 22

##### [` INTERPOSING `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.INTERPOSING>)

INTERPOSING = 13

##### [` IS_16BYTE_LITERALS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.IS_16BYTE_LITERALS>)

IS\_16BYTE\_LITERALS = 14

##### [` IS_4BYTE_LITERALS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.IS_4BYTE_LITERALS>)

IS\_4BYTE\_LITERALS = 3

##### [` IS_8BYTE_LITERALS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.IS_8BYTE_LITERALS>)

IS\_8BYTE\_LITERALS = 4

##### [` LAZY_DYLIB_SYMBOL_POINTERS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.LAZY_DYLIB_SYMBOL_POINTERS>)

LAZY\_DYLIB\_SYMBOL\_POINTERS = 16

##### [` LAZY_SYMBOL_POINTERS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.LAZY_SYMBOL_POINTERS>)

LAZY\_SYMBOL\_POINTERS = 7

##### [` LITERAL_POINTERS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.LITERAL_POINTERS>)

LITERAL\_POINTERS = 5

##### [` MOD_INIT_FUNC_POINTERS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.MOD_INIT_FUNC_POINTERS>)

MOD\_INIT\_FUNC\_POINTERS = 9

##### [` MOD_TERM_FUNC_POINTERS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.MOD_TERM_FUNC_POINTERS>)

MOD\_TERM\_FUNC\_POINTERS = 10

##### [` NON_LAZY_SYMBOL_POINTERS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.NON_LAZY_SYMBOL_POINTERS>)

NON\_LAZY\_SYMBOL\_POINTERS = 6

##### [` REGULAR `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.REGULAR>)

REGULAR = 0

##### [` SYMBOL_STUBS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.SYMBOL_STUBS>)

SYMBOL\_STUBS = 8

##### [` THREAD_LOCAL_INIT_FUNCTION_POINTERS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.THREAD_LOCAL_INIT_FUNCTION_POINTERS>)

THREAD\_LOCAL\_INIT\_FUNCTION\_POINTERS = 21

##### [` THREAD_LOCAL_REGULAR `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.THREAD_LOCAL_REGULAR>)

THREAD\_LOCAL\_REGULAR = 17

##### [` THREAD_LOCAL_VARIABLES `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.THREAD_LOCAL_VARIABLES>)

THREAD\_LOCAL\_VARIABLES = 19

##### [` THREAD_LOCAL_VARIABLE_POINTERS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.THREAD_LOCAL_VARIABLE_POINTERS>)

THREAD\_LOCAL\_VARIABLE\_POINTERS = 20

##### [` THREAD_LOCAL_ZEROFILL `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.THREAD_LOCAL_ZEROFILL>)

THREAD\_LOCAL\_ZEROFILL = 18

##### [` ZEROFILL `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.ZEROFILL>)

ZEROFILL = 1

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.from_value>)

from\_value(*arg: int*) → [lief.MachO.Section.TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE> "lief.MachO.Section.TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` add `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.add>)

add(*self*, *flag: [lief.\_lief.MachO.Section.FLAGS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS> "lief._lief.MachO.Section.FLAGS")*) → None

Add the given `SECTION_FLAGS`

#### [` alignment `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.alignment>)

property alignment → int

Section’s alignment as a power of 2

#### [` create `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.create>)

create(*\*args*) → [lief.MachO.Section](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief.MachO.Section") | None = &lt;nanobind.nb\_func object&gt;

#### [` flags `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.flags>)

property flags → [lief.MachO.Section.FLAGS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS> "lief.MachO.Section.FLAGS")

Section’s flags masked with SECTION\_FLAGS\_MASK (see: [`FLAGS`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS> "lief.MachO.Section.FLAGS"))

#### [` flags_list `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.flags_list>)

property flags\_list → list[[lief.MachO.Section.FLAGS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS> "lief.MachO.Section.FLAGS")]

#### [` has `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.has>)

has(*self*, *flag: [lief.\_lief.MachO.Section.FLAGS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS> "lief._lief.MachO.Section.FLAGS")*) → bool

Check if the section has the given `SECTION_FLAGS`

#### [` has_segment `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.has_segment>)

property has\_segment → bool

True if the current section has a segment associated with

#### [` numberof_relocations `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.numberof_relocations>)

property numberof\_relocations → int

Number of relocations associated with this section

#### [` relocation_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.relocation_offset>)

property relocation\_offset → int

Offset of the relocation table. This value should be 0 for executable and libraries as the relocations are managed by the [`lief.MachO.DyldInfo.rebase`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.rebase> "lief.MachO.DyldInfo.rebase")

On the other hand, for object files (`.o`) this value should not be 0

#### [` relocations `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.relocations>)

property relocations → lief.MachO.SegmentCommand.it\_relocations

Iterator over the [`Relocation`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation> "lief.MachO.Relocation") (if any)

#### [` remove `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.remove>)

remove(*self*, *flag: [lief.\_lief.MachO.Section.FLAGS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.FLAGS> "lief._lief.MachO.Section.FLAGS")*) → None

Remove the given `SECTION_FLAGS`

#### [` reserved1 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.reserved1>)

property reserved1 → int

According to the official `loader.h` file, this value is reserved for *offset* or *index*

#### [` reserved2 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.reserved2>)

property reserved2 → int

According to the official `loader.h` file, this value is reserved for *offset* or *index*

#### [` reserved3 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.reserved3>)

property reserved3 → int

According to the official `loader.h` file, this value is reserved for *offset* or *index*

#### [` segment `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.segment>)

property segment → [lief.MachO.SegmentCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") | None

[`SegmentCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") associated with the section or None if not present

#### [` segment_name `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.segment_name>)

property segment\_name → str

The segment name associated with the section

#### [` type `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.type>)

property type → [lief.MachO.Section.TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE> "lief.MachO.Section.TYPE")

Type of the section. This value can help to determine the purpose of the section (c.f. [`TYPE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE> "lief.MachO.Section.TYPE"))

---

## [ThreadLocalVariables](<https://lief.re/doc/latest/formats/macho/python.html#threadlocalvariables>)

![Inheritance diagram of lief._lief.MachO.ThreadLocalVariables](https://lief.re/doc/latest/_images/inheritance-ed5df4b965c40206128df2871db06e5fa4b2aa28.png)

### [` lief.MachO.ThreadLocalVariables `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables>)

class lief.MachO.ThreadLocalVariables

Bases: [`Section`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief._lief.MachO.Section")

This class represents a MachO section whose type is [`THREAD_LOCAL_VARIABLES`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section.TYPE.THREAD_LOCAL_VARIABLES> "lief.MachO.Section.TYPE.THREAD_LOCAL_VARIABLES").

It contains an array of thread-local variable descriptors ([`Thunk`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables.Thunk> "lief.MachO.ThreadLocalVariables.Thunk")) used by dyld to lazily initialize thread-local storage on first access.

#### [` ThunkThunk `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables.Thunk>)

class Thunk(*self*)

**class Thunk(*self*, *func: int*, *key: int*, *offset: int*)**

Bases: `object`

Descriptor for a single thread-local variable.

The layout mirrors the `tlv_descriptor` structure from `<mach-o/loader.h>`.

##### [` func `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables.Thunk.func>)

property func → int

Address of the initializer function (`tlv_thunk`)

##### [` key `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables.Thunk.key>)

property key → int

`pthread_key_t` key used by the runtime

##### [` offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables.Thunk.offset>)

property offset → int

Offset of the variable in the TLS block

#### [` get `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables.get>)

get(*self*, *idx: int*) → [lief.\_lief.MachO.ThreadLocalVariables.Thunk](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables.Thunk> "lief._lief.MachO.ThreadLocalVariables.Thunk") | None

Return the [`Thunk`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables.Thunk> "lief.MachO.ThreadLocalVariables.Thunk") at the given index, or None if the index is out of range.

#### [` nb_thunks `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables.nb_thunks>)

property nb\_thunks → int

Number of [`Thunk`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables.Thunk> "lief.MachO.ThreadLocalVariables.Thunk") descriptors

#### [` set `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables.set>)

set(*self*, *idx: int*, *thunk: [lief.\_lief.MachO.ThreadLocalVariables.Thunk](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables.Thunk> "lief._lief.MachO.ThreadLocalVariables.Thunk")*) → None

Change the [`Thunk`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables.Thunk> "lief.MachO.ThreadLocalVariables.Thunk") at the given index.

#### [` thunks `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables.thunks>)

property thunks → collections.abc.Sequence[[lief.MachO.ThreadLocalVariables.Thunk](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables.Thunk> "lief.MachO.ThreadLocalVariables.Thunk")]

Return an iterator over the [`Thunk`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadLocalVariables.Thunk> "lief.MachO.ThreadLocalVariables.Thunk") descriptors stored in this section.

---

## [SegmentCommand](<https://lief.re/doc/latest/formats/macho/python.html#segmentcommand>)

![Inheritance diagram of lief._lief.MachO.SegmentCommand, lief._lief.MachO.LinkEdit](https://lief.re/doc/latest/_images/inheritance-9c44cefe82a758034166bf525eb6cd242cfe46fe.png)

### [` lief.MachO.SegmentCommandlief.MachO.SegmentCommandlief.MachO.SegmentCommand `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand>)

class lief.MachO.SegmentCommand(*self*)

**class lief.MachO.SegmentCommand(*self*, *arg: str*, */*)

**class lief.MachO.SegmentCommand(*self*, *arg0: str*, *arg1: collections.abc.Sequence[int]*, */*)****

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class which represents a [`SEGMENT`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.SEGMENT> "lief.MachO.LoadCommand.TYPE.SEGMENT") / [`SEGMENT_64`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.SEGMENT_64> "lief.MachO.LoadCommand.TYPE.SEGMENT_64") command

#### [` FLAGS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.FLAGS>)

class FLAGS(*\*values*)

Bases: `Enum`

##### [` FVMLIB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.FLAGS.FVMLIB>)

FVMLIB = 2

##### [` HIGHVM `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.FLAGS.HIGHVM>)

HIGHVM = 1

##### [` NORELOC `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.FLAGS.NORELOC>)

NORELOC = 4

##### [` PROTECTED_VERSION_1 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.FLAGS.PROTECTED_VERSION_1>)

PROTECTED\_VERSION\_1 = 8

##### [` READ_ONLY `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.FLAGS.READ_ONLY>)

READ\_ONLY = 16

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.FLAGS.from_value>)

from\_value(*arg: int*) → [lief.MachO.SegmentCommand.FLAGS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.FLAGS> "lief.MachO.SegmentCommand.FLAGS") = &lt;nanobind.nb\_func object&gt;

#### [` VM_PROTECTIONS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.VM_PROTECTIONS>)

class VM\_PROTECTIONS(*\*values*)

Bases: `Enum`

##### [` R `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.VM_PROTECTIONS.R>)

R = 1

##### [` W `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.VM_PROTECTIONS.W>)

W = 2

##### [` X `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.VM_PROTECTIONS.X>)

X = 4

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.VM_PROTECTIONS.from_value>)

from\_value(*arg: int*) → [lief.MachO.SegmentCommand.VM\_PROTECTIONS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.VM_PROTECTIONS> "lief.MachO.SegmentCommand.VM_PROTECTIONS") = &lt;nanobind.nb\_func object&gt;

#### [` add_section `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.add_section>)

add\_section(*self*, *section: [lief.\_lief.MachO.Section](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief._lief.MachO.Section")*) → [lief.\_lief.MachO.Section](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief._lief.MachO.Section")

#### [` content `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.content>)

property content → memoryview

Segment’s content

#### [` file_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.file_offset>)

property file\_offset → int

Segment’s file offset

#### [` file_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.file_size>)

property file\_size → int

Segment’s file size

#### [` flags `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.flags>)

property flags → int

Segment’s flags

#### [` get_section `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.get_section>)

get\_section(*self*, *name: str*) → [lief.\_lief.MachO.Section](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief._lief.MachO.Section") | None

Get the [`Section`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief.MachO.Section") with the given name

#### [` has `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.has>)

has(*self*, *section: [lief.\_lief.MachO.Section](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief._lief.MachO.Section")*) → bool

Check if the given [`Section`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief.MachO.Section") belongs to the current segment

#### [` has_section `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.has_section>)

has\_section(*self*, *section\_name: str*) → bool

Check if the given section name belongs to the current segment

#### [` index `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.index>)

property index → int

Relative index of the segment in the segment table

#### [` init_protection `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.init_protection>)

property init\_protection → int

Segment’s initial protection

#### [` max_protection `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.max_protection>)

property max\_protection → int

Segment’s max protection

#### [` name `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.name>)

property name → str | bytes

Segment’s name

#### [` numberof_sections `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.numberof_sections>)

property numberof\_sections → int

Number of sections in this segment

#### [` relocations `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.relocations>)

property relocations → lief.MachO.SegmentCommand.it\_relocations

Segment’s relocations

#### [` sections `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.sections>)

property sections → lief.MachO.SegmentCommand.it\_sections

Segment’s sections

#### [` virtual_address `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.virtual_address>)

property virtual\_address → int

Segment’s virtual address

#### [` virtual_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.virtual_size>)

property virtual\_size → int

Segment’s virtual size

---

## [LoadCommand](<https://lief.re/doc/latest/formats/macho/python.html#loadcommand>)

![Inheritance diagram of lief._lief.MachO.FunctionStarts, lief._lief.MachO.RPathCommand, lief._lief.MachO.DyldChainedFixups, lief._lief.MachO.SegmentSplitInfo, lief._lief.MachO.BuildVersion, lief._lief.MachO.FilesetCommand, lief._lief.MachO.DyldExportsTrie, lief._lief.MachO.SourceVersion, lief._lief.MachO.DylibCommand, lief._lief.MachO.LazyLoadDylibInfo, lief._lief.MachO.DataInCode, lief._lief.MachO.NoteCommand, lief._lief.MachO.LinkerOptHint, lief._lief.MachO.DynamicSymbolCommand, lief._lief.MachO.SubFramework, lief._lief.MachO.SubClient, lief._lief.MachO.VersionMin, lief._lief.MachO.MainCommand, lief._lief.MachO.FunctionVariantFixups, lief._lief.MachO.SegmentCommand, lief._lief.MachO.DyldInfo, lief._lief.MachO.Routine, lief._lief.MachO.LoadCommand, lief._lief.MachO.DylinkerCommand, lief._lief.MachO.SymbolCommand, lief._lief.MachO.UnknownCommand, lief._lief.MachO.CodeSignatureDir, lief._lief.MachO.AtomInfo, lief._lief.MachO.LinkEdit, lief._lief.MachO.TwoLevelHints, lief._lief.MachO.FunctionVariants, lief._lief.MachO.CodeSignature, lief._lief.MachO.ThreadCommand, lief._lief.MachO.UUIDCommand, lief._lief.MachO.DyldEnvironment, lief._lief.MachO.EncryptionInfo](https://lief.re/doc/latest/_images/inheritance-0accfc0bdfaef8ab74a45968517e704e7a472fbf.png)

### [` lief.MachO.LoadCommand `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand>)

class lief.MachO.LoadCommand(*self*)

Bases: `Object`

Base class for the Mach-O load commands

#### [` TYPE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

##### [` ATOM_INFO `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.ATOM_INFO>)

ATOM\_INFO = 54

##### [` BUILD_VERSION `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.BUILD_VERSION>)

BUILD\_VERSION = 50

##### [` CODE_SIGNATURE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.CODE_SIGNATURE>)

CODE\_SIGNATURE = 29

##### [` DATA_IN_CODE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.DATA_IN_CODE>)

DATA\_IN\_CODE = 41

##### [` DYLD_CHAINED_FIXUPS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.DYLD_CHAINED_FIXUPS>)

DYLD\_CHAINED\_FIXUPS = 2147483700

##### [` DYLD_ENVIRONMENT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.DYLD_ENVIRONMENT>)

DYLD\_ENVIRONMENT = 39

##### [` DYLD_EXPORTS_TRIE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.DYLD_EXPORTS_TRIE>)

DYLD\_EXPORTS\_TRIE = 2147483699

##### [` DYLD_INFO `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.DYLD_INFO>)

DYLD\_INFO = 34

##### [` DYLD_INFO_ONLY `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.DYLD_INFO_ONLY>)

DYLD\_INFO\_ONLY = 2147483682

##### [` DYLIB_CODE_SIGN_DRS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.DYLIB_CODE_SIGN_DRS>)

DYLIB\_CODE\_SIGN\_DRS = 43

##### [` DYSYMTAB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.DYSYMTAB>)

DYSYMTAB = 11

##### [` ENCRYPTION_INFO `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.ENCRYPTION_INFO>)

ENCRYPTION\_INFO = 33

##### [` ENCRYPTION_INFO_64 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.ENCRYPTION_INFO_64>)

ENCRYPTION\_INFO\_64 = 44

##### [` FILESET_ENTRY `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.FILESET_ENTRY>)

FILESET\_ENTRY = 2147483701

##### [` FUNCTION_STARTS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.FUNCTION_STARTS>)

FUNCTION\_STARTS = 38

##### [` FUNCTION_VARIANTS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.FUNCTION_VARIANTS>)

FUNCTION\_VARIANTS = 55

##### [` FUNCTION_VARIANT_FIXUPS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.FUNCTION_VARIANT_FIXUPS>)

FUNCTION\_VARIANT\_FIXUPS = 56

##### [` FVMFILE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.FVMFILE>)

FVMFILE = 9

##### [` IDENT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.IDENT>)

IDENT = 8

##### [` IDFVMLIB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.IDFVMLIB>)

IDFVMLIB = 7

##### [` ID_DYLIB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.ID_DYLIB>)

ID\_DYLIB = 13

##### [` ID_DYLINKER `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.ID_DYLINKER>)

ID\_DYLINKER = 15

##### [` LAZY_LOAD_DYLIB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.LAZY_LOAD_DYLIB>)

LAZY\_LOAD\_DYLIB = 32

##### [` LAZY_LOAD_DYLIB_INFO `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.LAZY_LOAD_DYLIB_INFO>)

LAZY\_LOAD\_DYLIB\_INFO = 58

##### [` LIEF_UNKNOWN `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.LIEF_UNKNOWN>)

LIEF\_UNKNOWN = 4293787649

##### [` LINKER_OPTIMIZATION_HINT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.LINKER_OPTIMIZATION_HINT>)

LINKER\_OPTIMIZATION\_HINT = 46

##### [` LINKER_OPTION `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.LINKER_OPTION>)

LINKER\_OPTION = 45

##### [` LOADFVMLIB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.LOADFVMLIB>)

LOADFVMLIB = 6

##### [` LOAD_DYLIB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.LOAD_DYLIB>)

LOAD\_DYLIB = 12

##### [` LOAD_DYLINKER `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.LOAD_DYLINKER>)

LOAD\_DYLINKER = 14

##### [` LOAD_UPWARD_DYLIB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.LOAD_UPWARD_DYLIB>)

LOAD\_UPWARD\_DYLIB = 2147483683

##### [` LOAD_WEAK_DYLIB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.LOAD_WEAK_DYLIB>)

LOAD\_WEAK\_DYLIB = 2147483672

##### [` MAIN `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.MAIN>)

MAIN = 2147483688

##### [` NOTE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.NOTE>)

NOTE = 49

##### [` PREBIND_CKSUM `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.PREBIND_CKSUM>)

PREBIND\_CKSUM = 23

##### [` PREBOUND_DYLIB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.PREBOUND_DYLIB>)

PREBOUND\_DYLIB = 16

##### [` PREPAGE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.PREPAGE>)

PREPAGE = 10

##### [` REEXPORT_DYLIB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.REEXPORT_DYLIB>)

REEXPORT\_DYLIB = 2147483679

##### [` ROUTINES `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.ROUTINES>)

ROUTINES = 17

##### [` ROUTINES_64 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.ROUTINES_64>)

ROUTINES\_64 = 26

##### [` RPATH `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.RPATH>)

RPATH = 2147483676

##### [` SEGMENT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.SEGMENT>)

SEGMENT = 1

##### [` SEGMENT_64 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.SEGMENT_64>)

SEGMENT\_64 = 25

##### [` SEGMENT_SPLIT_INFO `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.SEGMENT_SPLIT_INFO>)

SEGMENT\_SPLIT\_INFO = 30

##### [` SOURCE_VERSION `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.SOURCE_VERSION>)

SOURCE\_VERSION = 42

##### [` SUB_CLIENT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.SUB_CLIENT>)

SUB\_CLIENT = 20

##### [` SUB_FRAMEWORK `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.SUB_FRAMEWORK>)

SUB\_FRAMEWORK = 18

##### [` SUB_LIBRARY `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.SUB_LIBRARY>)

SUB\_LIBRARY = 21

##### [` SUB_UMBRELLA `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.SUB_UMBRELLA>)

SUB\_UMBRELLA = 19

##### [` SYMSEG `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.SYMSEG>)

SYMSEG = 3

##### [` SYMTAB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.SYMTAB>)

SYMTAB = 2

##### [` TARGET_TRIPLE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.TARGET_TRIPLE>)

TARGET\_TRIPLE = 57

##### [` THREAD `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.THREAD>)

THREAD = 4

##### [` TWOLEVEL_HINTS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.TWOLEVEL_HINTS>)

TWOLEVEL\_HINTS = 22

##### [` UNIXTHREAD `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.UNIXTHREAD>)

UNIXTHREAD = 5

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.UNKNOWN>)

UNKNOWN = 0

##### [` UUID `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.UUID>)

UUID = 27

##### [` VERSION_MIN_IPHONEOS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.VERSION_MIN_IPHONEOS>)

VERSION\_MIN\_IPHONEOS = 37

##### [` VERSION_MIN_MACOSX `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.VERSION_MIN_MACOSX>)

VERSION\_MIN\_MACOSX = 36

##### [` VERSION_MIN_TVOS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.VERSION_MIN_TVOS>)

VERSION\_MIN\_TVOS = 47

##### [` VERSION_MIN_WATCHOS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.VERSION_MIN_WATCHOS>)

VERSION\_MIN\_WATCHOS = 48

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.from_value>)

from\_value(*arg: int*) → [lief.MachO.LoadCommand.TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE> "lief.MachO.LoadCommand.TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` command `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.command>)

property command → [lief.MachO.LoadCommand.TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE> "lief.MachO.LoadCommand.TYPE")

Command type

#### [` command_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.command_offset>)

property command\_offset → int

Offset of the command within the *Load Command Table*

#### [` data `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.data>)

property data → memoryview

Command’s data

#### [` size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.size>)

property size → int

Size of the command (should be greater than `sizeof(load_command)`)

---

## [DylibCommand](<https://lief.re/doc/latest/formats/macho/python.html#dylibcommand>)

![Inheritance diagram of lief._lief.MachO.DylibCommand](https://lief.re/doc/latest/_images/inheritance-36c46371e2d72022cd92817ae70e7bd46d3c4b3e.png)

### [` lief.MachO.DylibCommand `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand>)

class lief.MachO.DylibCommand

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class which represents a library dependency

#### [` compatibility_version `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand.compatibility_version>)

property compatibility\_version → list[int]

Library’s compatibility version

#### [` current_version `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand.current_version>)

property current\_version → list[int]

Library’s current version

#### [` id_dylib `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand.id_dylib>)

id\_dylib(*name: str*, *timestamp: int*, *current\_version: int*, *compat\_version: int*) → [lief.MachO.DylibCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief.MachO.DylibCommand") = &lt;nanobind.nb\_func object&gt;

#### [` lazy_load_dylib `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand.lazy_load_dylib>)

lazy\_load\_dylib(*name: str*, *timestamp: int*, *current\_version: int*, *compat\_version: int*) → [lief.MachO.DylibCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief.MachO.DylibCommand") = &lt;nanobind.nb\_func object&gt;

#### [` load_dylib `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand.load_dylib>)

load\_dylib(*name: str*, *timestamp: int*, *current\_version: int*, *compat\_version: int*) → [lief.MachO.DylibCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief.MachO.DylibCommand") = &lt;nanobind.nb\_func object&gt;

#### [` load_upward_dylib `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand.load_upward_dylib>)

load\_upward\_dylib(*name: str*, *timestamp: int*, *current\_version: int*, *compat\_version: int*) → [lief.MachO.DylibCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief.MachO.DylibCommand") = &lt;nanobind.nb\_func object&gt;

#### [` name `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand.name>)

property name → str

Library’s name

#### [` name_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand.name_offset>)

property name\_offset → int

Original string offset of the name

#### [` reexport_dylib `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand.reexport_dylib>)

reexport\_dylib(*name: str*, *timestamp: int*, *current\_version: int*, *compat\_version: int*) → [lief.MachO.DylibCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief.MachO.DylibCommand") = &lt;nanobind.nb\_func object&gt;

#### [` timestamp `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand.timestamp>)

property timestamp → int

Library’s timestamp

#### [` weak_lib `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand.weak_lib>)

weak\_lib(*name: str*, *timestamp: int*, *current\_version: int*, *compat\_version: int*) → [lief.MachO.DylibCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief.MachO.DylibCommand") = &lt;nanobind.nb\_func object&gt;

---

## [DylinkerCommand](<https://lief.re/doc/latest/formats/macho/python.html#dylinkercommand>)

![Inheritance diagram of lief._lief.MachO.DylinkerCommand](https://lief.re/doc/latest/_images/inheritance-fed860fdbbc5ae77feb0bae4801e9aae9b22ec8b.png)

### [` lief.MachO.DylinkerCommand `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylinkerCommand>)

class lief.MachO.DylinkerCommand(*self*, *arg: str*, */*)

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represents the Mach-O linker, also named loader Most of the time, [`name`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylinkerCommand.name> "lief.MachO.DylinkerCommand.name") returns `/usr/lib/dyld`

#### [` name `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylinkerCommand.name>)

property name → str

Path to the loader/linker

---

## [UUIDCommand](<https://lief.re/doc/latest/formats/macho/python.html#uuidcommand>)

![Inheritance diagram of lief._lief.MachO.UUIDCommand](https://lief.re/doc/latest/_images/inheritance-6dd221b9b4b0898786814fd1a4367ebd8b64a8f9.png)

### [` lief.MachO.UUIDCommand `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.UUIDCommand>)

class lief.MachO.UUIDCommand

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represents the UUID command

#### [` uuid `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.UUIDCommand.uuid>)

property uuid → list[int]

UUID as a list

---

## [MainCommand](<https://lief.re/doc/latest/formats/macho/python.html#maincommand>)

![Inheritance diagram of lief._lief.MachO.MainCommand](https://lief.re/doc/latest/_images/inheritance-fc6235ab5a77d68721e604881ea66637ba44ce2b.png)

### [` lief.MachO.MainCommand `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MainCommand>)

class lief.MachO.MainCommand(*self*, *arg0: int*, *arg1: int*, */*)

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represents the LC\_MAIN command. This kind of command can be used to determine the entrypoint of an executable

#### [` entrypoint `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MainCommand.entrypoint>)

property entrypoint → int

Offset of the *main* function relative to the `__TEXT` segment

#### [` stack_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MainCommand.stack_size>)

property stack\_size → int

The initial stack size (if not 0)

---

## [NoteCommand](<https://lief.re/doc/latest/formats/macho/python.html#notecommand>)

![Inheritance diagram of lief._lief.MachO.NoteCommand](https://lief.re/doc/latest/_images/inheritance-91d1d4358c63695f15f42bc33b72e9bfbf14752b.png)

### [` lief.MachO.NoteCommand `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.NoteCommand>)

class lief.MachO.NoteCommand

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represent the `LC_NOTE` command.

This command is used to include arbitrary notes or metadata within a binary.

#### [` note_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.NoteCommand.note_offset>)

property note\_offset → int

Offset of the data associated with this note

#### [` note_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.NoteCommand.note_size>)

property note\_size → int

Size of the data referenced by the [`note_offset`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.NoteCommand.note_offset> "lief.MachO.NoteCommand.note_offset")

#### [` owner `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.NoteCommand.owner>)

property owner → memoryview

Owner of the note (e.g. `AIR_METALLIB`)

#### [` owner_str `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.NoteCommand.owner_str>)

property owner\_str → str

Owner as a zero-terminated string

---

## [Symbol](<https://lief.re/doc/latest/formats/macho/python.html#symbol>)

![Inheritance diagram of lief._lief.MachO.Symbol](https://lief.re/doc/latest/_images/inheritance-fdf6e58ad2f02c53643d7fc079038f37e40671b2.png)

### [` lief.MachO.Symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol>)

class lief.MachO.Symbol(*self*)

Bases: [`Symbol`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol> "lief._lief.Symbol")

Class that represents a Symbol in a Mach-O file.

A Mach-O symbol can come from:

1. The symbols command (LC\_SYMTAB / SymbolCommand)
2. The Dyld Export trie
3. The Dyld Symbol bindings

#### [` CATEGORY `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.CATEGORY>)

class CATEGORY(*\*values*)

Bases: `Enum`

##### [` EXTERNAL `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.CATEGORY.EXTERNAL>)

EXTERNAL = 2

##### [` INDIRECT_ABS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.CATEGORY.INDIRECT_ABS>)

INDIRECT\_ABS = 4

##### [` INDIRECT_ABS_LOCAL `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.CATEGORY.INDIRECT_ABS_LOCAL>)

INDIRECT\_ABS\_LOCAL = 6

##### [` INDIRECT_LOCAL `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.CATEGORY.INDIRECT_LOCAL>)

INDIRECT\_LOCAL = 5

##### [` LOCAL `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.CATEGORY.LOCAL>)

LOCAL = 1

##### [` NONE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.CATEGORY.NONE>)

NONE = 0

##### [` UNDEFINED `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.CATEGORY.UNDEFINED>)

UNDEFINED = 3

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.CATEGORY.from_value>)

from\_value(*arg: int*) → [lief.MachO.Symbol.CATEGORY](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.CATEGORY> "lief.MachO.Symbol.CATEGORY") = &lt;nanobind.nb\_func object&gt;

#### [` ORIGIN `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.ORIGIN>)

class ORIGIN(*\*values*)

Bases: `Enum`

##### [` DYLD_BIND `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.ORIGIN.DYLD_BIND>)

DYLD\_BIND = 2

##### [` DYLD_EXPORT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.ORIGIN.DYLD_EXPORT>)

DYLD\_EXPORT = 1

##### [` SYMTAB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.ORIGIN.SYMTAB>)

SYMTAB = 3

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.ORIGIN.UNKNOWN>)

UNKNOWN = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.ORIGIN.from_value>)

from\_value(*arg: int*) → [lief.MachO.Symbol.ORIGIN](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.ORIGIN> "lief.MachO.Symbol.ORIGIN") = &lt;nanobind.nb\_func object&gt;

#### [` TYPE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

##### [` ABSOLUTE_SYM `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.TYPE.ABSOLUTE_SYM>)

ABSOLUTE\_SYM = 2

##### [` INDIRECT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.TYPE.INDIRECT>)

INDIRECT = 10

##### [` PREBOUND `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.TYPE.PREBOUND>)

PREBOUND = 12

##### [` SECTION `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.TYPE.SECTION>)

SECTION = 14

##### [` UNDEFINED `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.TYPE.UNDEFINED>)

UNDEFINED = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.TYPE.from_value>)

from\_value(*arg: int*) → [lief.MachO.Symbol.TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.TYPE> "lief.MachO.Symbol.TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` binding_info `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.binding_info>)

property binding\_info → [lief.MachO.BindingInfo](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo> "lief.MachO.BindingInfo") | None

[`BindingInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo> "lief.MachO.BindingInfo") associated with the symbol if any, or None

#### [` category `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.category>)

property category → [lief.MachO.Symbol.CATEGORY](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.CATEGORY> "lief.MachO.Symbol.CATEGORY")

Category of the symbol according to the LC\_DYSYMTAB command

#### [` demangled_name `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.demangled_name>)

property demangled\_name → str

Symbol’s unmangled name

#### [` description `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.description>)

property description → int

Return information about the symbol

#### [` export_info `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.export_info>)

property export\_info → [lief.MachO.ExportInfo](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo> "lief.MachO.ExportInfo") | None

[`ExportInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo> "lief.MachO.ExportInfo") associated with the symbol if any, or None

#### [` has_binding_info `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.has_binding_info>)

property has\_binding\_info → bool

`True` if the symbol has an [`BindingInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo> "lief.MachO.BindingInfo") associated with

#### [` has_export_info `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.has_export_info>)

property has\_export\_info → bool

`True` if the symbol has an [`ExportInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo> "lief.MachO.ExportInfo") associated with

#### [` is_external `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.is_external>)

property is\_external → bool

True if the symbol is defined as an external symbol.

#### [` library `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.library>)

property library → [lief.MachO.DylibCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief.MachO.DylibCommand") | None

[`DylibCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief.MachO.DylibCommand") the library where the symbol is exposed

#### [` library_ordinal `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.library_ordinal>)

property library\_ordinal → int

Library ordinal + 1 (0 means self)

#### [` numberof_sections `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.numberof_sections>)

property numberof\_sections → int

It returns the number of sections in which this symbol can be found. If the symbol can’t be found in any section, it returns 0 (NO\_SECT)

#### [` origin `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.origin>)

property origin → [lief.MachO.Symbol.ORIGIN](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.ORIGIN> "lief.MachO.Symbol.ORIGIN")

Return the [`ORIGIN`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.ORIGIN> "lief.MachO.Symbol.ORIGIN") of this symbol

#### [` raw_type `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.raw_type>)

property raw\_type → int

Raw value of `nlist_xx.n_type`

#### [` type `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.type>)

property type → [lief.MachO.Symbol.TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol.TYPE> "lief.MachO.Symbol.TYPE")

Type as defined by `nlist_xx.n_type & N_TYPE`

---

## [Symbol Command](<https://lief.re/doc/latest/formats/macho/python.html#symbol-command>)

![Inheritance diagram of lief._lief.MachO.DylinkerCommand](https://lief.re/doc/latest/_images/inheritance-fed860fdbbc5ae77feb0bae4801e9aae9b22ec8b.png)

### [` lief.MachO.SymbolCommand `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SymbolCommand>)

class lief.MachO.SymbolCommand(*self*)

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represents the LC\_SYMTAB command

#### [` numberof_symbols `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SymbolCommand.numberof_symbols>)

property numberof\_symbols → int

Number of symbols registered

#### [` strings_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SymbolCommand.strings_offset>)

property strings\_offset → int

Offset from the start of the file to the string table

#### [` strings_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SymbolCommand.strings_size>)

property strings\_size → int

Size of the string table

#### [` symbol_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SymbolCommand.symbol_offset>)

property symbol\_offset → int

Offset from the start of the file to the n\_list associated with the command

---

## [Dynamic Symbol Command](<https://lief.re/doc/latest/formats/macho/python.html#dynamic-symbol-command>)

![Inheritance diagram of lief._lief.MachO.DynamicSymbolCommand](https://lief.re/doc/latest/_images/inheritance-f19a648feacaafadfa1d909de9c01689d198022a.png)

### [` lief.MachO.DynamicSymbolCommand `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand>)

class lief.MachO.DynamicSymbolCommand

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represents the LC\_DYSYMTAB command. This command completes the LC\_SYMTAB (SymbolCommand) to provide a better granularity over the symbols layout.

#### [` external_reference_symbol_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.external_reference_symbol_offset>)

property external\_reference\_symbol\_offset → int

Byte offset from the start of the file to the external reference table data. This field seems unused by recent Mach-O loader and should be set to 0

#### [` external_relocation_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.external_relocation_offset>)

property external\_relocation\_offset → int

Byte offset from the start of the file to the module table data. This field seems unused by recent Mach-O loader and should be set to 0

#### [` idx_external_define_symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.idx_external_define_symbol>)

property idx\_external\_define\_symbol → int

Index of the first symbol in the group of defined external symbols.

#### [` idx_local_symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.idx_local_symbol>)

property idx\_local\_symbol → int

Index of the first symbol in the group of local symbols.

#### [` idx_undefined_symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.idx_undefined_symbol>)

property idx\_undefined\_symbol → int

Index of the first symbol in the group of undefined external symbols.

#### [` indirect_symbol_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.indirect_symbol_offset>)

property indirect\_symbol\_offset → int

Byte offset from the start of the file to the indirect symbol table data.

Indirect symbol table is used by the loader to speed-up symbol resolution during the *lazy binding* process

References:

> - `dyld-519.2.1/src/ImageLoaderMachOCompressed.cpp`
> - `dyld-519.2.1/src/ImageLoaderMachOClassic.cpp`

#### [` indirect_symbols `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.indirect_symbols>)

property indirect\_symbols → lief.MachO.DynamicSymbolCommand.it\_indirect\_symbols

Iterator over the indirect symbols indexed by this command

#### [` local_relocation_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.local_relocation_offset>)

property local\_relocation\_offset → int

Byte offset from the start of the file to the local relocation table data. This field seems unused by recent Mach-O loader and should be set to 0

#### [` module_table_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.module_table_offset>)

property module\_table\_offset → int

Byte offset from the start of the file to the module table data. This field seems unused by recent Mach-O loader and should be set to 0

#### [` nb_external_define_symbols `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.nb_external_define_symbols>)

property nb\_external\_define\_symbols → int

Number of symbols in the group of defined external symbols.

#### [` nb_external_reference_symbols `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.nb_external_reference_symbols>)

property nb\_external\_reference\_symbols → int

Number of entries in the external reference table. This field seems unused by recent Mach-O loader and should be set to 0.

#### [` nb_external_relocations `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.nb_external_relocations>)

property nb\_external\_relocations → int

Number of entries in the external relocation table. This field seems unused by recent Mach-O loader and should be set to 0

#### [` nb_indirect_symbols `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.nb_indirect_symbols>)

property nb\_indirect\_symbols → int

Number of entries in the indirect symbol table.

#### [` nb_local_relocations `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.nb_local_relocations>)

property nb\_local\_relocations → int

Number of entries in the local relocation table. This field seems unused by recent Mach-O loader and should be set to 0

#### [` nb_local_symbols `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.nb_local_symbols>)

property nb\_local\_symbols → int

Number of symbols in the group of local symbols.

#### [` nb_module_table `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.nb_module_table>)

property nb\_module\_table → int

Number of entries in the module table. This field seems unused by recent Mach-O loader and should be set to 0.

#### [` nb_toc `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.nb_toc>)

property nb\_toc → int

Number of entries in the table of contents Should be set to 0 on recent Mach-O

#### [` nb_undefined_symbols `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.nb_undefined_symbols>)

property nb\_undefined\_symbols → int

Number of symbols in the group of undefined external symbols.

#### [` toc_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DynamicSymbolCommand.toc_offset>)

property toc\_offset → int

Byte offset from the start of the file to the table of contents data. Table of content is used by legacy Mach-O loader and this field should be set to 0

---

## [Dyld Info](<https://lief.re/doc/latest/formats/macho/python.html#dyld-info>)

![Inheritance diagram of lief._lief.MachO.DyldInfo](https://lief.re/doc/latest/_images/inheritance-da796279986c7456e09ff8cf6b20be02f2261ec8.png)

### [` lief.MachO.DyldInfo `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo>)

class lief.MachO.DyldInfo

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represents the LC\_DYLD\_INFO and LC\_DYLD\_INFO\_ONLY commands

#### [` BIND_OPCODES `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES>)

class BIND\_OPCODES(*\*values*)

Bases: `Enum`

##### [` ADD_ADDR_ULEB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES.ADD_ADDR_ULEB>)

ADD\_ADDR\_ULEB = 128

##### [` DONE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES.DONE>)

DONE = 0

##### [` DO_BIND `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES.DO_BIND>)

DO\_BIND = 144

##### [` DO_BIND_ADD_ADDR_IMM_SCALED `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES.DO_BIND_ADD_ADDR_IMM_SCALED>)

DO\_BIND\_ADD\_ADDR\_IMM\_SCALED = 176

##### [` DO_BIND_ADD_ADDR_ULEB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES.DO_BIND_ADD_ADDR_ULEB>)

DO\_BIND\_ADD\_ADDR\_ULEB = 160

##### [` DO_BIND_ULEB_TIMES_SKIPPING_ULEB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES.DO_BIND_ULEB_TIMES_SKIPPING_ULEB>)

DO\_BIND\_ULEB\_TIMES\_SKIPPING\_ULEB = 192

##### [` SET_ADDEND_SLEB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES.SET_ADDEND_SLEB>)

SET\_ADDEND\_SLEB = 96

##### [` SET_DYLIB_ORDINAL_IMM `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES.SET_DYLIB_ORDINAL_IMM>)

SET\_DYLIB\_ORDINAL\_IMM = 16

##### [` SET_DYLIB_ORDINAL_ULEB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES.SET_DYLIB_ORDINAL_ULEB>)

SET\_DYLIB\_ORDINAL\_ULEB = 32

##### [` SET_DYLIB_SPECIAL_IMM `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES.SET_DYLIB_SPECIAL_IMM>)

SET\_DYLIB\_SPECIAL\_IMM = 48

##### [` SET_SEGMENT_AND_OFFSET_ULEB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES.SET_SEGMENT_AND_OFFSET_ULEB>)

SET\_SEGMENT\_AND\_OFFSET\_ULEB = 112

##### [` SET_SYMBOL_TRAILING_FLAGS_IMM `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES.SET_SYMBOL_TRAILING_FLAGS_IMM>)

SET\_SYMBOL\_TRAILING\_FLAGS\_IMM = 64

##### [` SET_TYPE_IMM `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES.SET_TYPE_IMM>)

SET\_TYPE\_IMM = 80

##### [` THREADED `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES.THREADED>)

THREADED = 208

##### [` THREADED_APPLY `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES.THREADED_APPLY>)

THREADED\_APPLY = 209

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES.from_value>)

from\_value(*arg: int*) → [lief.MachO.DyldInfo.BIND\_OPCODES](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.BIND_OPCODES> "lief.MachO.DyldInfo.BIND_OPCODES") = &lt;nanobind.nb\_func object&gt;

#### [` REBASE_OPCODES `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_OPCODES>)

class REBASE\_OPCODES(*\*values*)

Bases: `Enum`

##### [` ADD_ADDR_IMM_SCALED `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_OPCODES.ADD_ADDR_IMM_SCALED>)

ADD\_ADDR\_IMM\_SCALED = 64

##### [` ADD_ADDR_ULEB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_OPCODES.ADD_ADDR_ULEB>)

ADD\_ADDR\_ULEB = 48

##### [` DONE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_OPCODES.DONE>)

DONE = 0

##### [` DO_REBASE_ADD_ADDR_ULEB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_OPCODES.DO_REBASE_ADD_ADDR_ULEB>)

DO\_REBASE\_ADD\_ADDR\_ULEB = 112

##### [` DO_REBASE_IMM_TIMES `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_OPCODES.DO_REBASE_IMM_TIMES>)

DO\_REBASE\_IMM\_TIMES = 80

##### [` DO_REBASE_ULEB_TIMES `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_OPCODES.DO_REBASE_ULEB_TIMES>)

DO\_REBASE\_ULEB\_TIMES = 96

##### [` DO_REBASE_ULEB_TIMES_SKIPPING_ULEB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_OPCODES.DO_REBASE_ULEB_TIMES_SKIPPING_ULEB>)

DO\_REBASE\_ULEB\_TIMES\_SKIPPING\_ULEB = 128

##### [` SET_SEGMENT_AND_OFFSET_ULEB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_OPCODES.SET_SEGMENT_AND_OFFSET_ULEB>)

SET\_SEGMENT\_AND\_OFFSET\_ULEB = 32

##### [` SET_TYPE_IMM `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_OPCODES.SET_TYPE_IMM>)

SET\_TYPE\_IMM = 16

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_OPCODES.from_value>)

from\_value(*arg: int*) → [lief.MachO.DyldInfo.REBASE\_OPCODES](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_OPCODES> "lief.MachO.DyldInfo.REBASE_OPCODES") = &lt;nanobind.nb\_func object&gt;

#### [` REBASE_TYPE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_TYPE>)

class REBASE\_TYPE(*\*values*)

Bases: `Enum`

##### [` POINTER `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_TYPE.POINTER>)

POINTER = 1

##### [` TEXT_ABSOLUTE32 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_TYPE.TEXT_ABSOLUTE32>)

TEXT\_ABSOLUTE32 = 2

##### [` TEXT_PCREL32 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_TYPE.TEXT_PCREL32>)

TEXT\_PCREL32 = 3

##### [` THREADED `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_TYPE.THREADED>)

THREADED = 102

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_TYPE.from_value>)

from\_value(*arg: int*) → [lief.MachO.DyldInfo.REBASE\_TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_TYPE> "lief.MachO.DyldInfo.REBASE_TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` bind `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.bind>)

property bind → tuple[int, int]

*Bind* information as a tuple `(offset, size)`

Dyld binds an image during the loading process, if the image requires any pointers to be initialized to symbols in other images. The rebase information is a stream of byte sized opcodes for which symbolic names start with `BIND_OPCODE_`.

Conceptually the bind information is a table of tuples: `(seg-index, seg-offset, type, symbol-library-ordinal, symbol-name, addend)` The opcodes are a compressed way to encode the table by only encoding when a column changes. In addition simple patterns like for runs of pointers initialized to the same value can be encoded in a few bytes.

> **See also**
> 
> `/usr/include/mach-o/loader.h`

#### [` bind_opcodes `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.bind_opcodes>)

property bind\_opcodes → memoryview

Return the binding’s opcodes as `list` of bytes

#### [` bindings `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.bindings>)

property bindings → lief.MachO.DyldInfo.it\_binding\_info

Return an iterator over Dyld’s [`BindingInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo> "lief.MachO.BindingInfo")

#### [` export_info `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.export_info>)

property export\_info → tuple[int, int]

*Export* information as a tuple `(offset, size)`

The symbols exported by a dylib are encoded in a trie. This is a compact representation that factors out common prefixes.

It also reduces `LINKEDIT` pages in RAM because it encodes all information (name, address, flags) in one small, contiguous range. The export area is a stream of nodes. The first node sequentially is the start node for the trie.

Nodes for a symbol start with a byte that is the length of the exported symbol information for the string so far. If there is no exported symbol, the byte is zero. If there is exported info, it follows the length byte. The exported info normally consists of a flags and offset both encoded in [uleb128](<https://en.wikipedia.org/wiki/LEB128>). The offset is location of the content named by the symbol. It is the offset from the mach\_header for the image.

After the initial byte and optional exported symbol information is a byte of how many edges (0-255) that this node has leaving it, followed by each edge. Each edge is a zero terminated cstring of the addition chars in the symbol, followed by a uleb128 offset for the node that edge points to.

> **See also**
> 
> `/usr/include/mach-o/loader.h`

#### [` export_trie `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.export_trie>)

property export\_trie → memoryview

Return Export’s trie as `list` of bytes

#### [` exports `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.exports>)

property exports → lief.MachO.DyldExportsTrie.it\_export\_info

Return an iterator over Dyld’s [`ExportInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo> "lief.MachO.ExportInfo")

#### [` lazy_bind `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.lazy_bind>)

property lazy\_bind → tuple[int, int]

*Lazy Bind* information as a tuple `(offset, size)`

Some uses of external symbols do not need to be bound immediately. Instead they can be lazily bound on first use. The lazy\_bind contains a stream of BIND opcodes to bind all lazy symbols. Normal use is that dyld ignores the lazy\_bind section when loading an image. Instead the static linker arranged for the lazy pointer to initially point to a helper function which pushes the offset into the lazy\_bind area for the symbol needing to be bound, then jumps to dyld which simply adds the offset to lazy\_bind\_off to get the information on what to bind.

> **See also**
> 
> `/usr/include/mach-o/loader.h`

#### [` lazy_bind_opcodes `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.lazy_bind_opcodes>)

property lazy\_bind\_opcodes → memoryview

Return **lazy** binding’s opcodes as `list` of bytes

#### [` rebase `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.rebase>)

property rebase → tuple[int, int]

*Rebase* information as a tuple `(offset, size)`

Dyld rebases an image whenever dyld loads it at an address different from its preferred address. The rebase information is a stream of byte sized opcodes for which symbolic names start with `REBASE_OPCODE_`.

Conceptually the rebase information is a table of tuples: `(seg-index, seg-offset, type)`

The opcodes are a compressed way to encode the table by only encoding when a column changes. In addition simple patterns like “every n’th offset for m times” can be encoded in a few bytes

> **See also**
> 
> `/usr/include/mach-o/loader.h`

#### [` rebase_opcodes `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.rebase_opcodes>)

property rebase\_opcodes → memoryview

Return the rebase’s opcodes as `list` of bytes

#### [` set_bind_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.set_bind_offset>)

set\_bind\_offset(*self*, *offset: int*) → None

#### [` set_bind_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.set_bind_size>)

set\_bind\_size(*self*, *size: int*) → None

#### [` set_export_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.set_export_offset>)

set\_export\_offset(*self*, *offset: int*) → None

#### [` set_export_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.set_export_size>)

set\_export\_size(*self*, *size: int*) → None

#### [` set_lazy_bind_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.set_lazy_bind_offset>)

set\_lazy\_bind\_offset(*self*, *offset: int*) → None

#### [` set_lazy_bind_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.set_lazy_bind_size>)

set\_lazy\_bind\_size(*self*, *size: int*) → None

#### [` set_rebase_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.set_rebase_offset>)

set\_rebase\_offset(*self*, *offset: int*) → None

#### [` set_rebase_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.set_rebase_size>)

set\_rebase\_size(*self*, *size: int*) → None

#### [` set_weak_bind_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.set_weak_bind_offset>)

set\_weak\_bind\_offset(*self*, *offset: int*) → None

#### [` set_weak_bind_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.set_weak_bind_size>)

set\_weak\_bind\_size(*self*, *size: int*) → None

#### [` show_bind_opcodes `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.show_bind_opcodes>)

property show\_bind\_opcodes → str

Return the bind opcodes in a human-readable way

#### [` show_export_trie `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.show_export_trie>)

property show\_export\_trie → str

Return the export trie in a human-readable way

#### [` show_lazy_bind_opcodes `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.show_lazy_bind_opcodes>)

property show\_lazy\_bind\_opcodes → str

Return the lazy bind opcodes in a human-readable way

#### [` show_rebases_opcodes `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.show_rebases_opcodes>)

property show\_rebases\_opcodes → str

Return the rebase opcodes in a human-readable way

#### [` show_weak_bind_opcodes `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.show_weak_bind_opcodes>)

property show\_weak\_bind\_opcodes → str

Return the weak bind opcodes in a human-readable way

#### [` weak_bind `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.weak_bind>)

property weak\_bind → tuple[int, int]

*Weak Bind* information as a tuple `(offset, size)`

Some C++ programs require dyld to unique symbols so that all images in the process use the same copy of some code/data.

This step is done after binding. The content of the weak\_bind info is an opcode stream like the bind\_info. But it is sorted alphabetically by symbol name. This enables dyld to walk all images with weak binding information in order and look for collisions. If there are no collisions, dyld does no updating. That means that some fixups are also encoded in the bind\_info. For instance, all calls to `operator new` are first bound to `libstdc++.dylib` using the information in bind\_info. Then if some image overrides operator new that is detected when the weak\_bind information is processed and the call to operator new is then rebound.

> **See also**
> 
> `/usr/include/mach-o/loader.h`

#### [` weak_bind_opcodes `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.weak_bind_opcodes>)

property weak\_bind\_opcodes → memoryview

Return **Weak** binding’s opcodes as `list` of bytes

---

## [Function starts](<https://lief.re/doc/latest/formats/macho/python.html#function-starts>)

![Inheritance diagram of lief._lief.MachO.FunctionStarts](https://lief.re/doc/latest/_images/inheritance-870d037035f54f1aadc038c78426529f20a4ccde.png)

### [` lief.MachO.FunctionStarts `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionStarts>)

class lief.MachO.FunctionStarts

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class which represents the LC\_FUNCTION\_STARTS command

This command is an array of ULEB128 encoded values

#### [` add_function `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionStarts.add_function>)

add\_function(*self*, *address: int*) → None

Add a new function

#### [` content `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionStarts.content>)

property content → memoryview

The original content as a bytes stream

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionStarts.data_offset>)

property data\_offset → int

Offset in the binary where *start functions* are located

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionStarts.data_size>)

property data\_size → int

Size of the functions list in the binary

#### [` functions `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionStarts.functions>)

property functions → list[int]

Addresses of every function entry point in the executable

This allows functions to exist for which there are no entries in the symbol table.

> **Warning**
> 
> The address is relative to the `__TEXT` segment

---

## [Function Variants](<https://lief.re/doc/latest/formats/macho/python.html#function-variants>)

![Inheritance diagram of lief._lief.MachO.FunctionVariants](https://lief.re/doc/latest/_images/inheritance-790d0a10f8fdeca018d6c075c6735779cff30c1b.png)

### [` lief.MachO.FunctionVariants `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants>)

class lief.MachO.FunctionVariants

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class representing the `LC_FUNCTION_VARIANTS` load command.

Introduced publicly in `dyld-1284.13` (April 2025), this command supports **function multiversioning**, the ability to associate multiple implementations of the same function, each optimized for a specific platform, architecture, or runtime context.

At runtime, the system dispatches the most appropriate variant based on hardware capabilities or execution environment.

For example:

```cpp
FUNCTION_VARIANT_TABLE(my_function,
  { (void*)my_function$Rosetta,  "rosetta" }, // Rosetta translation
  { (void*)my_function$Haswell,  "haswell" }, // Haswell-optimized
  { (void*)my_function$Base,     "default" }  // Default fallback
);
```

#### [` RuntimeTable `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTable>)

class RuntimeTable

Bases: `object`

Represents a runtime table of function variants sharing a common namespace (referred to internally as `FunctionVariantsRuntimeTable` in `dyld`).

Each table holds multiple [`RuntimeTableEntry`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry> "lief.MachO.FunctionVariants.RuntimeTableEntry") instances that map to function implementations optimized for a given [`KIND`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTable.KIND> "lief.MachO.FunctionVariants.RuntimeTable.KIND").

##### [` KIND `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTable.KIND>)

class KIND(*\*values*)

Bases: `Enum`

Enumeration describing the namespace or category of a function variant.

Each [`RuntimeTable`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTable> "lief.MachO.FunctionVariants.RuntimeTable") is associated with one [`KIND`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTable.KIND> "lief.MachO.FunctionVariants.RuntimeTable.KIND"), which indicates the domain or context under which its variant entries should be considered valid or applicable.

These categories map to the runtime dispatch logic used by `dyld` when selecting the optimal function variant.

###### [` ARM64 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTable.KIND.ARM64>)

ARM64 = 3

###### [` PER_PROCESS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTable.KIND.PER_PROCESS>)

PER\_PROCESS = 1

###### [` SYSTEM_WIDE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTable.KIND.SYSTEM_WIDE>)

SYSTEM\_WIDE = 2

###### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTable.KIND.UNKNOWN>)

UNKNOWN = 0

###### [` X86_64 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTable.KIND.X86_64>)

X86\_64 = 4

##### [` entries `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTable.entries>)

property entries → lief.MachO.FunctionVariants.RuntimeTable.it\_entries

Iterator over the different [`RuntimeTableEntry`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry> "lief.MachO.FunctionVariants.RuntimeTableEntry") entries

##### [` kind `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTable.kind>)

property kind → [lief.MachO.FunctionVariants.RuntimeTable.KIND](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTable.KIND> "lief.MachO.FunctionVariants.RuntimeTable.KIND")

Kind of the runtime table

##### [` offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTable.offset>)

property offset → int

Original offset in the payload

#### [` RuntimeTableEntry `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry>)

class RuntimeTableEntry

Bases: `object`

This class exposes information about a given implementation.

##### [` FLAGS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS>)

class FLAGS(*\*values*)

Bases: `Enum`

###### [` ARM64_ADVSIMD `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_ADVSIMD>)

ARM64\_ADVSIMD = 3145782

###### [` ARM64_ADVSIMDHPFP `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_ADVSIMDHPFP>)

ARM64\_ADVSIMDHPFP = 3145783

###### [` ARM64_AES `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_AES>)

ARM64\_AES = 3145739

###### [` ARM64_AFP `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_AFP>)

ARM64\_AFP = 3145758

###### [` ARM64_BF16 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_BF16>)

ARM64\_BF16 = 3145753

###### [` ARM64_BTI `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_BTI>)

ARM64\_BTI = 3145765

###### [` ARM64_CRC32 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_CRC32>)

ARM64\_CRC32 = 3145784

###### [` ARM64_CSV2 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_CSV2>)

ARM64\_CSV2 = 3145760

###### [` ARM64_CVS3 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_CVS3>)

ARM64\_CVS3 = 3145761

###### [` ARM64_DEFAULT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_DEFAULT>)

ARM64\_DEFAULT = 3145728

###### [` ARM64_DIT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_DIT>)

ARM64\_DIT = 3145762

###### [` ARM64_DOTPROD `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_DOTPROD>)

ARM64\_DOTPROD = 3145732

###### [` ARM64_DPB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_DPB>)

ARM64\_DPB = 3145751

###### [` ARM64_DPB2 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_DPB2>)

ARM64\_DPB2 = 3145752

###### [` ARM64_ECV `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_ECV>)

ARM64\_ECV = 3145757

###### [` ARM64_FCMA `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_FCMA>)

ARM64\_FCMA = 3145746

###### [` ARM64_FHM `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_FHM>)

ARM64\_FHM = 3145731

###### [` ARM64_FLAGM `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_FLAGM>)

ARM64\_FLAGM = 3145729

###### [` ARM64_FLAGM2 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_FLAGM2>)

ARM64\_FLAGM2 = 3145730

###### [` ARM64_FP16 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_FP16>)

ARM64\_FP16 = 3145763

###### [` ARM64_FPAC `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_FPAC>)

ARM64\_FPAC = 3145750

###### [` ARM64_FRINTTS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_FRINTTS>)

ARM64\_FRINTTS = 3145743

###### [` ARM64_I8MM `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_I8MM>)

ARM64\_I8MM = 3145754

###### [` ARM64_JSCVT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_JSCVT>)

ARM64\_JSCVT = 3145747

###### [` ARM64_LRCPC `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_LRCPC>)

ARM64\_LRCPC = 3145744

###### [` ARM64_LRCPC2 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_LRCPC2>)

ARM64\_LRCPC2 = 3145745

###### [` ARM64_LSE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_LSE>)

ARM64\_LSE = 3145735

###### [` ARM64_LSE2 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_LSE2>)

ARM64\_LSE2 = 3145759

###### [` ARM64_PAUTH `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_PAUTH>)

ARM64\_PAUTH = 3145748

###### [` ARM64_PAUTH2 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_PAUTH2>)

ARM64\_PAUTH2 = 3145749

###### [` ARM64_PMULL `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_PMULL>)

ARM64\_PMULL = 3145740

###### [` ARM64_RDM `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_RDM>)

ARM64\_RDM = 3145734

###### [` ARM64_RPRES `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_RPRES>)

ARM64\_RPRES = 3145756

###### [` ARM64_SB `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SB>)

ARM64\_SB = 3145742

###### [` ARM64_SHA1 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SHA1>)

ARM64\_SHA1 = 3145738

###### [` ARM64_SHA256 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SHA256>)

ARM64\_SHA256 = 3145736

###### [` ARM64_SHA3 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SHA3>)

ARM64\_SHA3 = 3145733

###### [` ARM64_SHA512 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SHA512>)

ARM64\_SHA512 = 3145737

###### [` ARM64_SME `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SME>)

ARM64\_SME = 3145772

###### [` ARM64_SME2 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SME2>)

ARM64\_SME2 = 3145773

###### [` ARM64_SMEB16F32 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SMEB16F32>)

ARM64\_SMEB16F32 = 3145778

###### [` ARM64_SMEBI32I32 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SMEBI32I32>)

ARM64\_SMEBI32I32 = 3145777

###### [` ARM64_SMEF16F32 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SMEF16F32>)

ARM64\_SMEF16F32 = 3145779

###### [` ARM64_SMEF32F32 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SMEF32F32>)

ARM64\_SMEF32F32 = 3145776

###### [` ARM64_SMEF64F64 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SMEF64F64>)

ARM64\_SMEF64F64 = 3145774

###### [` ARM64_SMEI16I32 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SMEI16I32>)

ARM64\_SMEI16I32 = 3145781

###### [` ARM64_SMEI16I64 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SMEI16I64>)

ARM64\_SMEI16I64 = 3145775

###### [` ARM64_SMEI8I32 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SMEI8I32>)

ARM64\_SMEI8I32 = 3145780

###### [` ARM64_SPECRES `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SPECRES>)

ARM64\_SPECRES = 3145741

###### [` ARM64_SSBS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_SSBS>)

ARM64\_SSBS = 3145764

###### [` ARM64_WFXT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.ARM64_WFXT>)

ARM64\_WFXT = 3145755

###### [` PER_PROCESS_DEFAULT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.PER_PROCESS_DEFAULT>)

PER\_PROCESS\_DEFAULT = 1048576

###### [` PER_PROCESS_MTE_ENABLED `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.PER_PROCESS_MTE_ENABLED>)

PER\_PROCESS\_MTE\_ENABLED = 1048578

###### [` PER_PROCESS_NO_OVERREAD `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.PER_PROCESS_NO_OVERREAD>)

PER\_PROCESS\_NO\_OVERREAD = 1048579

###### [` PER_PROCESS_TRANSLATED `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.PER_PROCESS_TRANSLATED>)

PER\_PROCESS\_TRANSLATED = 1048577

###### [` SYSTEM_WIDE_CUSTOMER_INSTALL `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.SYSTEM_WIDE_CUSTOMER_INSTALL>)

SYSTEM\_WIDE\_CUSTOMER\_INSTALL = 2097154

###### [` SYSTEM_WIDE_DEFAULT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.SYSTEM_WIDE_DEFAULT>)

SYSTEM\_WIDE\_DEFAULT = 2097152

###### [` SYSTEM_WIDE_INTERNAL_INSTALL `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.SYSTEM_WIDE_INTERNAL_INSTALL>)

SYSTEM\_WIDE\_INTERNAL\_INSTALL = 2097153

###### [` SYSTEM_WIDE_LOCKDOWN `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.SYSTEM_WIDE_LOCKDOWN>)

SYSTEM\_WIDE\_LOCKDOWN = 2097155

###### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.UNKNOWN>)

UNKNOWN = 0

###### [` X86_64_AVX `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.X86_64_AVX>)

X86\_64\_AVX = 4194307

###### [` X86_64_AVX2 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.X86_64_AVX2>)

X86\_64\_AVX2 = 4194308

###### [` X86_64_AVX512BW `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.X86_64_AVX512BW>)

X86\_64\_AVX512BW = 4194310

###### [` X86_64_AVX512F `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.X86_64_AVX512F>)

X86\_64\_AVX512F = 4194309

###### [` X86_64_BMI1 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.X86_64_BMI1>)

X86\_64\_BMI1 = 4194311

###### [` X86_64_DEFAULT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.X86_64_DEFAULT>)

X86\_64\_DEFAULT = 4194304

###### [` X86_64_FMA `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.X86_64_FMA>)

X86\_64\_FMA = 4194306

###### [` X86_64_HASWELL `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.X86_64_HASWELL>)

X86\_64\_HASWELL = 4194313

###### [` X86_64_IVYBRIDGE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.X86_64_IVYBRIDGE>)

X86\_64\_IVYBRIDGE = 4194314

###### [` X86_64_NEHALEM `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.X86_64_NEHALEM>)

X86\_64\_NEHALEM = 4194315

###### [` X86_64_ROSETTA `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.X86_64_ROSETTA>)

X86\_64\_ROSETTA = 4194312

###### [` X86_64_SSE41 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS.X86_64_SSE41>)

X86\_64\_SSE41 = 4194305

##### [` another_table `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.another_table>)

property another\_table → bool

Indicates whether [`impl`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.impl> "lief.MachO.FunctionVariants.RuntimeTableEntry.impl") refers to an entry in another runtime table, rather than a direct function implementation address.

##### [` flag_bit_nums `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.flag_bit_nums>)

property flag\_bit\_nums → memoryview

The `flagBitNums` value as a slice of bytes

##### [` flags `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.flags>)

property flags → list[[lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS> "lief.MachO.FunctionVariants.RuntimeTableEntry.FLAGS")]

Return the **interpreted** [`flag_bit_nums`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.flag_bit_nums> "lief.MachO.FunctionVariants.RuntimeTableEntry.flag_bit_nums")

##### [` impl `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.impl>)

property impl → int

The relative address of the implementation or an index if [`another_table`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTableEntry.another_table> "lief.MachO.FunctionVariants.RuntimeTableEntry.another_table") is set.

#### [` content `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.content>)

property content → memoryview

Payload content

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.data_offset>)

property data\_offset → int

Offset in the binary where the payload starts

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.data_size>)

property data\_size → int

Size of the payload

#### [` runtime_table `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.runtime_table>)

property runtime\_table → lief.MachO.FunctionVariants.it\_runtime\_table

Iterator over the different [`RuntimeTable`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants.RuntimeTable> "lief.MachO.FunctionVariants.RuntimeTable") entries located in the content of this `__LINKEDIT` command

---

## [Function Variant Fixups](<https://lief.re/doc/latest/formats/macho/python.html#function-variant-fixups>)

![Inheritance diagram of lief._lief.MachO.FunctionVariantFixups](https://lief.re/doc/latest/_images/inheritance-3bd631e721eeb92f9a246aebda43748777847b53.png)

### [` lief.MachO.FunctionVariantFixups `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups>)

class lief.MachO.FunctionVariantFixups

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class which represents the `LC_FUNCTION_VARIANT_FIXUPS` command.

This command contains the relocations that must be applied to the GOT-like slots associated with a [`FunctionVariants`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariants> "lief.MachO.FunctionVariants") table. At runtime, `dyld` resolves each slot to the best implementation and (re-)signs it according to the pointer-authentication information.

#### [` FixupFixup `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.Fixup>)

class Fixup(*self*)

**class Fixup(*self*, *seg\_offset: int*, *seg\_index: int*, *variant\_index: int*, *pac\_auth: bool*, *pac\_address: bool*, *pac\_key: int*, *pac\_diversity: int*)**

Bases: `object`

A single relocation associated with a function-variant. It mirrors the `FunctionVariantFixups::InternalFixup` structure used by `dyld` and describes a slot that must be fixed up to point to the variant referenced by [`variant_index`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.Fixup.variant_index> "lief.MachO.FunctionVariantFixups.Fixup.variant_index").

##### [` pac_address `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.Fixup.pac_address>)

property pac\_address → bool

Whether the PAC signature mixes the storage address (address diversity)

##### [` pac_auth `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.Fixup.pac_auth>)

property pac\_auth → bool

Whether the slot is signed with pointer authentication (arm64e)

##### [` pac_diversity `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.Fixup.pac_diversity>)

property pac\_diversity → int

PAC diversity (discriminator) of the slot

##### [` pac_key `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.Fixup.pac_key>)

property pac\_key → int

PAC key used to sign the slot

##### [` seg_index `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.Fixup.seg_index>)

property seg\_index → int

Index of the segment that owns the slot to fix up

##### [` seg_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.Fixup.seg_offset>)

property seg\_offset → int

Offset of the slot to fix up, relative to [`seg_index`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.Fixup.seg_index> "lief.MachO.FunctionVariantFixups.Fixup.seg_index")

##### [` segment `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.Fixup.segment>)

property segment → [lief.MachO.SegmentCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") | None

[`SegmentCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") referenced by [`seg_index`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.Fixup.seg_index> "lief.MachO.FunctionVariantFixups.Fixup.seg_index") if it could be resolved, or None

##### [` variant_index `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.Fixup.variant_index>)

property variant\_index → int

Index of the FunctionVariants runtime table used to resolve the slot

#### [` add `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.add>)

add(*self*, *fixup: [lief.\_lief.MachO.FunctionVariantFixups.Fixup](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.Fixup> "lief._lief.MachO.FunctionVariantFixups.Fixup")*) → [lief.\_lief.MachO.FunctionVariantFixups](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups> "lief._lief.MachO.FunctionVariantFixups")

Append a new [`Fixup`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.Fixup> "lief.MachO.FunctionVariantFixups.Fixup")

#### [` content `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.content>)

property content → memoryview

Payload content

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.data_offset>)

property data\_offset → int

Offset in the binary where the payload starts

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.data_size>)

property data\_size → int

Size of the payload

#### [` fixups `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.fixups>)

property fixups → lief.MachO.FunctionVariantFixups.it\_fixups

Iterator over the different [`Fixup`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FunctionVariantFixups.Fixup> "lief.MachO.FunctionVariantFixups.Fixup") entries

---

## [Lazy Load Dylib Info](<https://lief.re/doc/latest/formats/macho/python.html#lazy-load-dylib-info>)

![Inheritance diagram of lief._lief.MachO.LazyLoadDylibInfo](https://lief.re/doc/latest/_images/inheritance-383dd58abda8757b618a2dc7062dfd93e8c26133.png)

### [` lief.MachO.LazyLoadDylibInfo `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo>)

class lief.MachO.LazyLoadDylibInfo

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class representing the `LC_LAZY_LOAD_DYLIB_INFO` load command.

This command describes how to **lazily load a dylib**: instead of binding the library and its symbols at launch time, `dyld` keeps the information required to resolve the dylib on the first use of one of its symbols.

#### [` Fixup `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.Fixup>)

class Fixup

Bases: `object`

A single lazy-binding fixup decoded from the chain referenced by [`chain_start_image_offset`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.chain_start_image_offset> "lief.MachO.LazyLoadDylibInfo.chain_start_image_offset") and decoded according to [`pointer_format`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.pointer_format> "lief.MachO.LazyLoadDylibInfo.pointer_format").

##### [` address `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.Fixup.address>)

property address → int

Virtual address of the slot bound by this fixup

##### [` is_auth `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.Fixup.is_auth>)

property is\_auth → bool

Whether the bound pointer is authenticated (`arm64e` PAC)

##### [` ordinal `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.Fixup.ordinal>)

property ordinal → int

Index of the bound symbol in [`symbols`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.symbols> "lief.MachO.LazyLoadDylibInfo.symbols")

##### [` symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.Fixup.symbol>)

property symbol → str

Name of the bound symbol (resolved from [`ordinal`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.Fixup.ordinal> "lief.MachO.LazyLoadDylibInfo.Fixup.ordinal"))

#### [` add_symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.add_symbol>)

add\_symbol(*self*, *symbol: str*) → [lief.\_lief.MachO.LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo> "lief._lief.MachO.LazyLoadDylibInfo")

Append a symbol name to the list of symbols to bind lazily

#### [` chain_start_image_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.chain_start_image_offset>)

property chain\_start\_image\_offset → int

Image offset of the fixup chain start used to bind the dylib’s symbols

#### [` clear_symbols `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.clear_symbols>)

clear\_symbols(*self*) → [lief.\_lief.MachO.LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo> "lief._lief.MachO.LazyLoadDylibInfo")

Remove all the symbol names to bind lazily

#### [` content `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.content>)

property content → memoryview

The original content of this payload

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.data_offset>)

property data\_offset → int

Offset in the `__LINKEDIT` segment where the payload starts

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.data_size>)

property data\_size → int

Size of the payload

#### [` fixups `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.fixups>)

property fixups → lief.MachO.LazyLoadDylibInfo.it\_fixups

Iterator over the lazy-binding [`Fixup`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.Fixup> "lief.MachO.LazyLoadDylibInfo.Fixup") entries decoded from the chain

#### [` flag_image_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.flag_image_offset>)

property flag\_image\_offset → int

Image offset of the global flag that is set once the dylib has been loaded by dyld

#### [` flags `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.flags>)

property flags → int

Raw flags associated with this command (see [`may_be_missing`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.may_be_missing> "lief.MachO.LazyLoadDylibInfo.may_be_missing"))

#### [` load_path `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.load_path>)

property load\_path → str

Load path of the dylib to bind lazily

#### [` may_be_missing `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.may_be_missing>)

property may\_be\_missing → bool

Whether the dylib is allowed to be missing at runtime (weak linked)

#### [` pointer_format `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.pointer_format>)

property pointer\_format → int

Chained-fixups pointer format used by the binding chain

#### [` symbols `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LazyLoadDylibInfo.symbols>)

property symbols → list[str]

List of the symbol names to bind lazily for this dylib

---

## [Source Version](<https://lief.re/doc/latest/formats/macho/python.html#source-version>)

![Inheritance diagram of lief._lief.MachO.SourceVersion](https://lief.re/doc/latest/_images/inheritance-63c39de470bc440c1564324931abb7fc6127cf6f.png)

### [` lief.MachO.SourceVersion `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SourceVersion>)

class lief.MachO.SourceVersion

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represents the MachO [`SOURCE_VERSION`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.SOURCE_VERSION> "lief.MachO.LoadCommand.TYPE.SOURCE_VERSION") This command is used to provide the *version* of the sources used to build the binary

#### [` version `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SourceVersion.version>)

property version → list[int]

Version as a tuple of **5** integers

---

## [Version Min](<https://lief.re/doc/latest/formats/macho/python.html#version-min>)

![Inheritance diagram of lief._lief.MachO.VersionMin](https://lief.re/doc/latest/_images/inheritance-e0d888ece5d47b9e22fdbb6f26862d5da988eed3.png)

### [` lief.MachO.VersionMin `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.VersionMin>)

class lief.MachO.VersionMin

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that wraps the LC\_VERSION\_MIN\_MACOSX, LC\_VERSION\_MIN\_IPHONEOS, … commands

#### [` sdk `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.VersionMin.sdk>)

property sdk → list[int]

SDK as a tuple of **3** integers

#### [` version `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.VersionMin.version>)

property version → list[int]

Version as a tuple of **3** integers

---

## [Routine](<https://lief.re/doc/latest/formats/macho/python.html#routine>)

![Inheritance diagram of lief._lief.MachO.Routine](https://lief.re/doc/latest/_images/inheritance-135c62a49b5b90e87ca388ba0be9ecfd048a6ad5.png)

### [` lief.MachO.Routine `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Routine>)

class lief.MachO.Routine

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represents the `LC_ROUTINE/LC_ROUTINE64` commands. According to the Mach-O `loader.h` documentation:

The routines command contains the address of the dynamic shared library initialization routine and an index into the module table for the module that defines the routine. Before any modules are used from the library the dynamic linker fully binds the module that defines the initialization routine and then calls it. This gets called before any module initialization routines (used for C++ static constructors) in the library.

#### [` init_address `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Routine.init_address>)

property init\_address → int

Address of initialization routine

#### [` init_module `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Routine.init_module>)

property init\_module → int

Index into the module table that the init routine is defined in

#### [` reserved1 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Routine.reserved1>)

property reserved1 → int

#### [` reserved2 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Routine.reserved2>)

property reserved2 → int

#### [` reserved3 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Routine.reserved3>)

property reserved3 → int

#### [` reserved4 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Routine.reserved4>)

property reserved4 → int

#### [` reserved5 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Routine.reserved5>)

property reserved5 → int

#### [` reserved6 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Routine.reserved6>)

property reserved6 → int

---

## [Relocation](<https://lief.re/doc/latest/formats/macho/python.html#relocation>)

![Inheritance diagram of lief._lief.MachO.RelocationFixup, lief._lief.MachO.Relocation, lief._lief.MachO.RelocationObject, lief._lief.MachO.RelocationDyld](https://lief.re/doc/latest/_images/inheritance-199d245d3887548ba7080d4629e68c016b9e8852.png)

### [` lief.MachO.Relocation `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation>)

class lief.MachO.Relocation

Bases: [`Relocation`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Relocation> "lief._lief.Relocation")

It extends the LIEF [`lief.Relocation`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Relocation> "lief.Relocation") abstract class and it is sub-classed by

1. [`RelocationObject`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RelocationObject> "lief.MachO.RelocationObject")
2. [`RelocationDyld`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RelocationDyld> "lief.MachO.RelocationDyld")

#### [` ORIGIN `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.ORIGIN>)

class ORIGIN(*\*values*)

Bases: `Enum`

##### [` CHAINED_FIXUPS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.ORIGIN.CHAINED_FIXUPS>)

CHAINED\_FIXUPS = 3

##### [` DYLDINFO `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.ORIGIN.DYLDINFO>)

DYLDINFO = 1

##### [` RELOC_TABLE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.ORIGIN.RELOC_TABLE>)

RELOC\_TABLE = 2

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.ORIGIN.UNKNOWN>)

UNKNOWN = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.ORIGIN.from_value>)

from\_value(*arg: int*) → [lief.MachO.Relocation.ORIGIN](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.ORIGIN> "lief.MachO.Relocation.ORIGIN") = &lt;nanobind.nb\_func object&gt;

#### [` address `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.address>)

property address → int

For `OBJECT` or ([`origin`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.origin> "lief.MachO.Relocation.origin") is [`RELOC_TABLE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.ORIGIN.RELOC_TABLE> "lief.MachO.Relocation.ORIGIN.RELOC_TABLE")) this is an offset from the start of the [`Section`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief.MachO.Section") to the item containing the address requiring relocation.

For [`EXECUTE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.EXECUTE> "lief.MachO.Header.FILE_TYPE.EXECUTE") / [`DYLIB`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.DYLIB> "lief.MachO.Header.FILE_TYPE.DYLIB") or ([`origin`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.origin> "lief.MachO.Relocation.origin") is [`DYLDINFO`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.ORIGIN.DYLDINFO> "lief.MachO.Relocation.ORIGIN.DYLDINFO")) this is a [`virtual_address`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.virtual_address> "lief.MachO.SegmentCommand.virtual_address").

#### [` architecture `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.architecture>)

property architecture → [lief.MachO.Header.CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE> "lief.MachO.Header.CPU_TYPE")

[`CPU_TYPE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE> "lief.MachO.Header.CPU_TYPE") of the relocation

#### [` has_section `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.has_section>)

property has\_section → bool

`True` if the relocation has a [`Section`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief.MachO.Section") associated with

#### [` has_segment `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.has_segment>)

property has\_segment → bool

`True` if the relocation has a [`SegmentCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") associated with

#### [` has_symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.has_symbol>)

property has\_symbol → bool

`True` if the relocation has a [`Symbol`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol") associated with

#### [` origin `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.origin>)

property origin → [lief.MachO.Relocation.ORIGIN](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.ORIGIN> "lief.MachO.Relocation.ORIGIN")

[`ORIGIN`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.ORIGIN> "lief.MachO.Relocation.ORIGIN") of the relocation

- For [`OBJECT`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.OBJECT> "lief.MachO.Header.FILE_TYPE.OBJECT") file it should be [`RELOC_TABLE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.ORIGIN.RELOC_TABLE> "lief.MachO.Relocation.ORIGIN.RELOC_TABLE")
- For [`EXECUTE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.FILE_TYPE.EXECUTE> "lief.MachO.Header.FILE_TYPE.EXECUTE") or `DYLIB` it should be [`DYLDINFO`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.ORIGIN.DYLDINFO> "lief.MachO.Relocation.ORIGIN.DYLDINFO")”)

#### [` pc_relative `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.pc_relative>)

property pc\_relative → bool

Indicates whether the item containing the address to be relocated is part of a CPU instruction that uses PC-relative addressing.

For addresses contained in PC-relative instructions, the CPU adds the address of the instruction to the address contained in the instruction.

#### [` section `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.section>)

property section → [lief.MachO.Section](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief.MachO.Section") | None

[`Section`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief.MachO.Section") associated with the relocation if any, or None

#### [` segment `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.segment>)

property segment → [lief.MachO.SegmentCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") | None

[`SegmentCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") associated with the relocation if any, or None

#### [` symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.symbol>)

property symbol → [lief.MachO.Symbol](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol") | None

[`Symbol`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol") associated with the relocation if any, or None

#### [` type `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.type>)

property type → [lief.MachO.X86\_RELOCATION](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_RELOCATION> "lief.MachO.X86_RELOCATION") | [lief.MachO.X86\_64\_RELOCATION](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_64_RELOCATION> "lief.MachO.X86_64_RELOCATION") | [lief.MachO.PPC\_RELOCATION](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION> "lief.MachO.PPC_RELOCATION") | [lief.MachO.ARM\_RELOCATION](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM_RELOCATION> "lief.MachO.ARM_RELOCATION") | [lief.MachO.ARM64\_RELOCATION](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM64_RELOCATION> "lief.MachO.ARM64_RELOCATION") | [lief.MachO.DyldInfo.REBASE\_TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_TYPE> "lief.MachO.DyldInfo.REBASE_TYPE")

Type of the relocation according to the [`architecture`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.architecture> "lief.MachO.Relocation.architecture") and/or [`origin`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.origin> "lief.MachO.Relocation.origin")

If [`origin`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.origin> "lief.MachO.Relocation.origin") is [`RELOC_TABLE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.ORIGIN.RELOC_TABLE> "lief.MachO.Relocation.ORIGIN.RELOC_TABLE"):

See:

> - [`lief.MachO.X86_RELOCATION`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_RELOCATION> "lief.MachO.X86_RELOCATION")
> - [`lief.MachO.X86_64_RELOCATION`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_64_RELOCATION> "lief.MachO.X86_64_RELOCATION")
> - [`lief.MachO.PPC_RELOCATION`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION> "lief.MachO.PPC_RELOCATION")
> - [`lief.MachO.ARM_RELOCATION`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM_RELOCATION> "lief.MachO.ARM_RELOCATION")
> - [`lief.MachO.ARM64_RELOCATION`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM64_RELOCATION> "lief.MachO.ARM64_RELOCATION")

If [`origin`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.origin> "lief.MachO.Relocation.origin") is [`DYLDINFO`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation.ORIGIN.DYLDINFO> "lief.MachO.Relocation.ORIGIN.DYLDINFO"), the value is associated with [`REBASE_TYPE`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.REBASE_TYPE> "lief.MachO.DyldInfo.REBASE_TYPE").

---

## [Relocation Object](<https://lief.re/doc/latest/formats/macho/python.html#relocation-object>)

![Inheritance diagram of lief._lief.MachO.RelocationObject](https://lief.re/doc/latest/_images/inheritance-655bbfa0687afc98c09dd480a71bf97e63308b9b.png)

### [` lief.MachO.RelocationObject `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RelocationObject>)

class lief.MachO.RelocationObject

Bases: [`Relocation`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation> "lief._lief.MachO.Relocation")

Class that represents a relocation present in the MachO object file (`.o`). Usually, this kind of relocation is found in the [`lief.MachO.Section`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Section> "lief.MachO.Section").

#### [` is_scattered `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RelocationObject.is_scattered>)

property is\_scattered → bool

`True` if the relocation is a scattered one

#### [` value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RelocationObject.value>)

property value → int

For **scattered** relocations, the address of the relocatable expression for the item in the file that needs to be updated if the address is changed.

For relocatable expressions with the difference of two section addresses, the address from which to subtract (in mathematical terms, the minuend) is contained in the first relocation entry and the address to subtract (the subtrahend) is contained in the second relocation entry.”,

---

## [Relocation Dyld](<https://lief.re/doc/latest/formats/macho/python.html#relocation-dyld>)

![Inheritance diagram of lief._lief.MachO.RelocationDyld](https://lief.re/doc/latest/_images/inheritance-d151a86d63cc6ff1436a989e36f773c128b94920.png)

### [` lief.MachO.RelocationDyld `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RelocationDyld>)

class lief.MachO.RelocationDyld

Bases: [`Relocation`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation> "lief._lief.MachO.Relocation")

Class that represents a relocation found in the [`DyldInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo> "lief.MachO.DyldInfo") structure.

While this class does not have an associated structure in the Mach-O format specification, it provides a convenient interface for the [`lief.MachO.DyldInfo.rebase`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo.rebase> "lief.MachO.DyldInfo.rebase") values

See also: [`RelocationObject`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RelocationObject> "lief.MachO.RelocationObject")

---

## [Relocation Fixup](<https://lief.re/doc/latest/formats/macho/python.html#relocation-fixup>)

![Inheritance diagram of lief._lief.MachO.RelocationFixup](https://lief.re/doc/latest/_images/inheritance-b2407301e633e8b2aecd674b76d15b8cf98dc15f.png)

### [` lief.MachO.RelocationFixup `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RelocationFixup>)

class lief.MachO.RelocationFixup

Bases: [`Relocation`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation> "lief._lief.MachO.Relocation")

Class that represents a rebase relocation found in the LC\_DYLD\_CHAINED\_FIXUPS command.

This class extends [`lief.Relocation`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Relocation> "lief.Relocation") (and [`lief.MachO.Relocation`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Relocation> "lief.MachO.Relocation")) in which [`address`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Relocation.address> "lief.Relocation.address") is set to the absolute virtual address where the relocation must take place (e.g. `0x10000d270`).

On the other hand, [`target`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RelocationFixup.target> "lief.MachO.RelocationFixup.target") contains the value that should be set at [`address`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Relocation.address> "lief.Relocation.address") if the imagebase is [`imagebase`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.imagebase> "lief.Binary.imagebase") (e.g. `0x1000073a8`).

If the Mach-O loader chooses another base address (like `0x7ff100000`), it must set `0x10000d270` to `0x7ff1073a8`.

#### [` next `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RelocationFixup.next>)

property next → int

(unscaled) next offset in the chain

#### [` target `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RelocationFixup.target>)

property target → int

---

## [Binding Info](<https://lief.re/doc/latest/formats/macho/python.html#binding-info>)

![Inheritance diagram of lief._lief.MachO.ChainedBindingInfo, lief._lief.MachO.BindingInfo, lief._lief.MachO.DyldBindingInfo, lief._lief.MachO.IndirectBindingInfo](https://lief.re/doc/latest/_images/inheritance-53697f801140357a3bfcc5b43cdfe14106e33d14.png)

### [` lief.MachO.BindingInfo `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo>)

class lief.MachO.BindingInfo

Bases: `Object`

Class that provides an interface over an entry in DyldInfo structure

This class does not represent a structure that exists in the Mach-O format specifications but it provides a *view* of a binding operation that is performed by the Dyld binding bytecode (`LC_DYLD_INFO`) or the Dyld chained fixups (`DYLD_CHAINED_FIXUPS`)

See: [`ChainedBindingInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ChainedBindingInfo> "lief.MachO.ChainedBindingInfo"), [`DyldBindingInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo> "lief.MachO.DyldBindingInfo")

#### [` addend `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo.addend>)

property addend → int

Value added to the segment’s virtual address when binding

#### [` address `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo.address>)

property address → int

Binding’s address

#### [` has_library `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo.has_library>)

property has\_library → bool

`True` if the binding info has a [`DylibCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief.MachO.DylibCommand") associated with

#### [` has_segment `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo.has_segment>)

property has\_segment → bool

`True` if the binding info has a [`SegmentCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") associated with

#### [` has_symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo.has_symbol>)

property has\_symbol → bool

`True` if the binding info has a [`Symbol`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol") associated with

#### [` library `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo.library>)

property library → [lief.MachO.DylibCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief.MachO.DylibCommand") | None

[`DylibCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief.MachO.DylibCommand") associated with the binding if any, or None

#### [` library_ordinal `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo.library_ordinal>)

property library\_ordinal → int

#### [` segment `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo.segment>)

property segment → [lief.MachO.SegmentCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") | None

[`SegmentCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") associated with the binding if any, or None

#### [` symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo.symbol>)

property symbol → [lief.MachO.Symbol](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol") | None

[`Symbol`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol") associated with the binding if any, or None

#### [` weak_import `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo.weak_import>)

property weak\_import → bool

---

## [Dyld Binding Info](<https://lief.re/doc/latest/formats/macho/python.html#dyld-binding-info>)

![Inheritance diagram of lief._lief.MachO.DyldBindingInfo](https://lief.re/doc/latest/_images/inheritance-245f1a31aeeff0fd8681855a0d940eda42bf366b.png)

### [` lief.MachO.DyldBindingInfo `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo>)

class lief.MachO.DyldBindingInfo

Bases: [`BindingInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo> "lief._lief.MachO.BindingInfo")

This class represents a symbol binding operation associated with the LC\_DYLD\_INFO bytecode.

This class does not represent a structure that exists in the Mach-O format specifications but it provides a *view* on an entry of the Dyld binding opcodes.

See also: [`BindingInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo> "lief.MachO.BindingInfo")

#### [` CLASS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.CLASS>)

class CLASS(*\*values*)

Bases: `Enum`

##### [` LAZY `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.CLASS.LAZY>)

LAZY = 2

##### [` STANDARD `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.CLASS.STANDARD>)

STANDARD = 3

##### [` THREADED `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.CLASS.THREADED>)

THREADED = 100

##### [` WEAK `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.CLASS.WEAK>)

WEAK = 1

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.CLASS.from_value>)

from\_value(*arg: int*) → [lief.MachO.DyldBindingInfo.CLASS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.CLASS> "lief.MachO.DyldBindingInfo.CLASS") = &lt;nanobind.nb\_func object&gt;

#### [` TYPE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

##### [` POINTER `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.TYPE.POINTER>)

POINTER = 1

##### [` TEXT_ABSOLUTE32 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.TYPE.TEXT_ABSOLUTE32>)

TEXT\_ABSOLUTE32 = 2

##### [` TEXT_PCREL32 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.TYPE.TEXT_PCREL32>)

TEXT\_PCREL32 = 3

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.TYPE.from_value>)

from\_value(*arg: int*) → [lief.MachO.DyldBindingInfo.TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.TYPE> "lief.MachO.DyldBindingInfo.TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` binding_class `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.binding_class>)

property binding\_class → [lief.MachO.DyldBindingInfo.CLASS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.CLASS> "lief.MachO.DyldBindingInfo.CLASS")

`BINDING_CLASS` of the binding

#### [` binding_type `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.binding_type>)

property binding\_type → [lief.MachO.DyldBindingInfo.TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.TYPE> "lief.MachO.DyldBindingInfo.TYPE")

`BIND_TYPES` of the binding.

Usually, it is `POINTER`.

#### [` original_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldBindingInfo.original_offset>)

property original\_offset → int

Original relative offset of the binding opcodes

---

## [Chained Binding Info](<https://lief.re/doc/latest/formats/macho/python.html#chained-binding-info>)

![Inheritance diagram of lief._lief.MachO.ChainedBindingInfo](https://lief.re/doc/latest/_images/inheritance-79a9d2d311fd4b93cb4e02ceb60b83d8a50f21ea.png)

### [` lief.MachO.ChainedBindingInfo `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ChainedBindingInfo>)

class lief.MachO.ChainedBindingInfo

Bases: [`BindingInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo> "lief._lief.MachO.BindingInfo")

This class represents a symbol binding operation associated with the LC\_DYLD\_CHAINED\_FIXUPS command.

This class does not represent a structure that exists in the Mach-O format specifications but it provides a *view* on an entry.

See also: [`BindingInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BindingInfo> "lief.MachO.BindingInfo")

#### [` format `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ChainedBindingInfo.format>)

property format → [lief.MachO.DYLD\_CHAINED\_FORMAT](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_FORMAT> "lief.MachO.DYLD_CHAINED_FORMAT")

[`DYLD_CHAINED_FORMAT`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_FORMAT> "lief.MachO.DYLD_CHAINED_FORMAT") of the import

#### [` offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ChainedBindingInfo.offset>)

property offset → int

Offset of the entry in the chained fixups

#### [` ptr_format `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ChainedBindingInfo.ptr_format>)

property ptr\_format → [lief.MachO.DYLD\_CHAINED\_PTR\_FORMAT](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT> "lief.MachO.DYLD_CHAINED_PTR_FORMAT")

[`DYLD_CHAINED_PTR_FORMAT`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT> "lief.MachO.DYLD_CHAINED_PTR_FORMAT") of the import

#### [` sign_extended_addend `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ChainedBindingInfo.sign_extended_addend>)

property sign\_extended\_addend → int

---

## [Export Info](<https://lief.re/doc/latest/formats/macho/python.html#export-info>)

### [` lief.MachO.ExportInfo `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo>)

class lief.MachO.ExportInfo

Bases: `Object`

Class that provides an interface over the Dyld export info

This class does not represent a structure that exists in the Mach-O format specification but provides a *view* on an entry of the Dyld export trie.

#### [` FLAGS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.FLAGS>)

class FLAGS(*\*values*)

Bases: `Flag`

##### [` REEXPORT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.FLAGS.REEXPORT>)

REEXPORT = 8

##### [` STATIC_RESOLVER `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.FLAGS.STATIC_RESOLVER>)

STATIC\_RESOLVER = 32

##### [` STUB_AND_RESOLVER `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.FLAGS.STUB_AND_RESOLVER>)

STUB\_AND\_RESOLVER = 16

##### [` WEAK_DEFINITION `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.FLAGS.WEAK_DEFINITION>)

WEAK\_DEFINITION = 4

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.FLAGS.from_value>)

from\_value(*arg: int*) → [lief.MachO.ExportInfo.FLAGS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.FLAGS> "lief.MachO.ExportInfo.FLAGS") = &lt;nanobind.nb\_func object&gt;

#### [` KIND `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.KIND>)

class KIND(*\*values*)

Bases: `Enum`

##### [` ABSOLUTE_KIND `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.KIND.ABSOLUTE_KIND>)

ABSOLUTE\_KIND = 2

##### [` REGULAR `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.KIND.REGULAR>)

REGULAR = 0

##### [` THREAD_LOCAL_KIND `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.KIND.THREAD_LOCAL_KIND>)

THREAD\_LOCAL\_KIND = 1

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.KIND.from_value>)

from\_value(*arg: int*) → [lief.MachO.ExportInfo.KIND](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.KIND> "lief.MachO.ExportInfo.KIND") = &lt;nanobind.nb\_func object&gt;

#### [` address `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.address>)

property address → int

The address of the export

#### [` alias `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.alias>)

property alias → [lief.MachO.Symbol](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol") | None

[`Symbol`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol") alias if the current symbol is re-exported

#### [` alias_library `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.alias_library>)

property alias\_library → [lief.MachO.DylibCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief.MachO.DylibCommand") | None

If the current symbol has an alias, it returns the [`DylibCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DylibCommand> "lief.MachO.DylibCommand") command associated with

#### [` flags `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.flags>)

property flags → int

Some information ([`FLAGS`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.FLAGS> "lief.MachO.ExportInfo.FLAGS")) about the export (like weak export, reexport, …)

#### [` flags_list `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.flags_list>)

property flags\_list → list[[lief.MachO.ExportInfo.FLAGS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.FLAGS> "lief.MachO.ExportInfo.FLAGS")]

Return flags as a list of [`FLAGS`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.FLAGS> "lief.MachO.ExportInfo.FLAGS")

#### [` has `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.has>)

has(*self*, *flag: [lief.\_lief.MachO.ExportInfo.FLAGS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.FLAGS> "lief._lief.MachO.ExportInfo.FLAGS")*) → bool

Check if the flag [`FLAGS`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.FLAGS> "lief.MachO.ExportInfo.FLAGS") given in first parameter is present

#### [` has_symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.has_symbol>)

property has\_symbol → bool

`True` if the export info has a [`Symbol`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol") associated with

#### [` kind `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.kind>)

property kind → [lief.MachO.ExportInfo.KIND](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.KIND> "lief.MachO.ExportInfo.KIND")

The export’s kind: regular, thread local, absolute, … ([`KIND`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.KIND> "lief.MachO.ExportInfo.KIND"))

#### [` node_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.node_offset>)

property node\_offset → int

Original offset in the export Trie

#### [` symbol `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo.symbol>)

property symbol → [lief.MachO.Symbol](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol") | None

[`Symbol`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Symbol> "lief.MachO.Symbol") associated with the export if any, or None

---

## [Thread Command](<https://lief.re/doc/latest/formats/macho/python.html#thread-command>)

![Inheritance diagram of lief._lief.MachO.ThreadCommand](https://lief.re/doc/latest/_images/inheritance-b4b6e2358c34744fec0c0dfbde874736e8fafaa0.png)

### [` lief.MachO.ThreadCommand `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadCommand>)

class lief.MachO.ThreadCommand(*self*, *arg0: int*, *arg1: int*, *arg2: [lief.\_lief.MachO.Header.CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE> "lief._lief.MachO.Header.CPU_TYPE")*, */*)

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represents the LC\_THREAD / LC\_UNIXTHREAD commands and that can be used to get the binary entrypoint when the LC\_MAIN (MainCommand) is not present

Generally speaking, this command aims at defining the original state of the main thread which includes the registers’ values

#### [` architecture `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadCommand.architecture>)

property architecture → [lief.MachO.Header.CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE> "lief.MachO.Header.CPU_TYPE")

The CPU architecture that is targeted by this ThreadCommand

#### [` count `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadCommand.count>)

property count → int

Size of the thread state data with 32-bits alignment.

This value should match len([`state`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadCommand.state> "lief.MachO.ThreadCommand.state"))

#### [` flavor `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadCommand.flavor>)

property flavor → int

Integer that defines a special *flavor* for the thread.

The meaning of this value depends on the [`architecture`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadCommand.architecture> "lief.MachO.ThreadCommand.architecture"). The list of the values can be found in the XNU kernel files:

- xnu/osfmk/mach/arm/thread\_status.h for the ARM/AArch64 architectures
- xnu/osfmk/mach/i386/thread\_status.h for the x86/x86-64 architectures

#### [` pc `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadCommand.pc>)

property pc → int

Return the initial Program Counter regardless of the underlying architecture. This value, when non null, can be used to determine the binary’s entrypoint.

Underneath, it works by looking for the PC register value in the [`state`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadCommand.state> "lief.MachO.ThreadCommand.state") data

#### [` state `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ThreadCommand.state>)

property state → memoryview

The actual thread state as a vector of bytes. Depending on the architecture(), these data can be casted into x86\_thread\_state\_t, x86\_thread\_state64\_t, …

---

## [RPath Command](<https://lief.re/doc/latest/formats/macho/python.html#rpath-command>)

![Inheritance diagram of lief._lief.MachO.RPathCommand](https://lief.re/doc/latest/_images/inheritance-bcfc1cab0a12b70ca77ded5dfaca455bcd6f903a.png)

### [` lief.MachO.RPathCommand `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RPathCommand>)

class lief.MachO.RPathCommand

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

#### [` create `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RPathCommand.create>)

create(*path: str*) → [lief.MachO.RPathCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RPathCommand> "lief.MachO.RPathCommand") | None = &lt;nanobind.nb\_func object&gt;

#### [` path `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RPathCommand.path>)

property path → str

@rpath path

#### [` path_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.RPathCommand.path_offset>)

property path\_offset → int

Original string offset of the path

---

## [Code Signature](<https://lief.re/doc/latest/formats/macho/python.html#code-signature>)

![Inheritance diagram of lief._lief.MachO.CodeSignature](https://lief.re/doc/latest/_images/inheritance-740a49152473d00511d001b725c44090db6313ac.png)

### [` lief.MachO.CodeSignature `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.CodeSignature>)

class lief.MachO.CodeSignature

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

#### [` content `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.CodeSignature.content>)

property content → memoryview

The raw signature as a bytes stream

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.CodeSignature.data_offset>)

property data\_offset → int

Offset in the binary where the signature starts

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.CodeSignature.data_size>)

property data\_size → int

Size of the raw signature

---

## [Data In Code](<https://lief.re/doc/latest/formats/macho/python.html#data-in-code>)

![Inheritance diagram of lief._lief.MachO.DataInCode](https://lief.re/doc/latest/_images/inheritance-8ed484b8bbeb457c50364202ab5a7fdd19e91788.png)

### [` lief.MachO.DataInCode `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataInCode>)

class lief.MachO.DataInCode

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Interface of the LC\_DATA\_IN\_CODE command

This command is used to list slices of code sections that contain data. The *slices* information are stored as an array of [`DataCodeEntry`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry> "lief.MachO.DataCodeEntry")

#### [` add `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataInCode.add>)

add(*self*, *entry: [lief.\_lief.MachO.DataCodeEntry](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry> "lief._lief.MachO.DataCodeEntry")*) → [lief.\_lief.MachO.DataInCode](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataInCode> "lief._lief.MachO.DataInCode")

Add a new [`DataCodeEntry`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry> "lief.MachO.DataCodeEntry")

#### [` content `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataInCode.content>)

property content → memoryview

The original content as a bytes stream

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataInCode.data_offset>)

property data\_offset → int

Start of the array of the DataCodeEntry entries

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataInCode.data_size>)

property data\_size → int

Whole size of the array (`size = sizeof(DataCodeEntry) * nb_elements`)

#### [` entries `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataInCode.entries>)

property entries → lief.MachO.it\_data\_in\_code\_entries

Iterator over [`DataCodeEntry`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry> "lief.MachO.DataCodeEntry")

---

## [Data Code Entry](<https://lief.re/doc/latest/formats/macho/python.html#data-code-entry>)

### [` lief.MachO.DataCodeEntry `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry>)

class lief.MachO.DataCodeEntry

Bases: `Object`

Interface over an entry in the [`DataInCode`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataInCode> "lief.MachO.DataInCode") command

#### [` TYPES `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry.TYPES>)

class TYPES(*\*values*)

Bases: `Enum`

##### [` ABS_JUMP_TABLE_32 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry.TYPES.ABS_JUMP_TABLE_32>)

ABS\_JUMP\_TABLE\_32 = 5

##### [` DATA `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry.TYPES.DATA>)

DATA = 1

##### [` JUMP_TABLE_16 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry.TYPES.JUMP_TABLE_16>)

JUMP\_TABLE\_16 = 3

##### [` JUMP_TABLE_32 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry.TYPES.JUMP_TABLE_32>)

JUMP\_TABLE\_32 = 4

##### [` JUMP_TABLE_8 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry.TYPES.JUMP_TABLE_8>)

JUMP\_TABLE\_8 = 2

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry.TYPES.UNKNOWN>)

UNKNOWN = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry.TYPES.from_value>)

from\_value(*arg: int*) → [lief.MachO.DataCodeEntry.TYPES](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry.TYPES> "lief.MachO.DataCodeEntry.TYPES") = &lt;nanobind.nb\_func object&gt;

#### [` length `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry.length>)

property length → int

Length of the data

#### [` offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry.offset>)

property offset → int

Offset of the data

#### [` type `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry.type>)

property type → [lief.MachO.DataCodeEntry.TYPES](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry.TYPES> "lief.MachO.DataCodeEntry.TYPES")

Type of the data ([`TYPES`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DataCodeEntry.TYPES> "lief.MachO.DataCodeEntry.TYPES")

---

## [Segment Split Info](<https://lief.re/doc/latest/formats/macho/python.html#segment-split-info>)

![Inheritance diagram of lief._lief.MachO.SegmentSplitInfo](https://lief.re/doc/latest/_images/inheritance-574a4897deb41281f14a6e36c11fdc8a350fe9ff.png)

### [` lief.MachO.SegmentSplitInfo `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentSplitInfo>)

class lief.MachO.SegmentSplitInfo

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represents the [`SEGMENT_SPLIT_INFO`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand.TYPE.SEGMENT_SPLIT_INFO> "lief.MachO.LoadCommand.TYPE.SEGMENT_SPLIT_INFO") command

#### [` content `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentSplitInfo.content>)

property content → memoryview

The original content as a bytes stream

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentSplitInfo.data_offset>)

property data\_offset → int

Offset in the binary where the data start

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentSplitInfo.data_size>)

property data\_size → int

Size of the raw data

---

## [Sub Framework](<https://lief.re/doc/latest/formats/macho/python.html#sub-framework>)

![Inheritance diagram of lief._lief.MachO.SubFramework](https://lief.re/doc/latest/_images/inheritance-9c6b04330a81d56f97ff7c80615bea9f905c57be.png)

### [` lief.MachO.SubFramework `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SubFramework>)

class lief.MachO.SubFramework

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represents the SubFramework command. According to the Mach-O `loader.h` documentation:

&gt; A dynamically linked shared library may be a subframework of an umbrella &gt; framework. If so it will be linked with “-umbrella umbrella\_name” where &gt; Where “umbrella\_name” is the name of the umbrella framework. A subframework &gt; can only be linked against by its umbrella framework or other subframeworks &gt; that are part of the same umbrella framework. Otherwise the static link &gt; editor produces an error and states to link against the umbrella framework. &gt; The name of the umbrella framework for subframeworks is recorded in the &gt; following structure.

#### [` umbrella `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SubFramework.umbrella>)

property umbrella → str

Name of the umbrella framework

---

## [Sub Client](<https://lief.re/doc/latest/formats/macho/python.html#sub-client>)

![Inheritance diagram of lief._lief.MachO.SubClient](https://lief.re/doc/latest/_images/inheritance-3ec2d5d691b46666c7182a687a3c0446d72880dc.png)

### [` lief.MachO.SubClient `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SubClient>)

class lief.MachO.SubClient

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represents the SubClient command. According to the Mach-O `loader.h` documentation:

&gt; For dynamically linked shared libraries that are subframework of an umbrella &gt; framework they can allow clients other than the umbrella framework or other &gt; subframeworks in the same umbrella framework. To do this the subframework &gt; is built with “-allowable\_client client\_name” and an LC\_SUB\_CLIENT load &gt; command is created for each -allowable\_client flag. The client\_name is &gt; usually a framework name. It can also be a name used for bundles clients &gt; where the bundle is built with “-client\_name client\_name”.

#### [` client `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SubClient.client>)

property client → str

Name of the sub client

---

## [Dyld Environment](<https://lief.re/doc/latest/formats/macho/python.html#dyld-environment>)

![Inheritance diagram of lief._lief.MachO.DyldEnvironment](https://lief.re/doc/latest/_images/inheritance-eba12509a0be0b825bca4866e37669c2e25451b1.png)

### [` lief.MachO.DyldEnvironment `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldEnvironment>)

class lief.MachO.DyldEnvironment

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represents a LC\_DYLD\_ENVIRONMENT which is used by the Mach-O linker/loader to initialize an environment variable

#### [` value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldEnvironment.value>)

property value → str

Environment variable as a string

---

## [Encryption Info](<https://lief.re/doc/latest/formats/macho/python.html#encryption-info>)

![Inheritance diagram of lief._lief.MachO.EncryptionInfo](https://lief.re/doc/latest/_images/inheritance-0e20e37f438e647f796c219f12f4eb1e2db57a25.png)

### [` lief.MachO.EncryptionInfo `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.EncryptionInfo>)

class lief.MachO.EncryptionInfo

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represents the LC\_ENCRYPTION\_INFO / LC\_ENCRYPTION\_INFO\_64 commands

The encryption info is usually present in Mach-O executables that target iOS to encrypt some sections of the binary

#### [` crypt_id `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.EncryptionInfo.crypt_id>)

property crypt\_id → int

The encryption system. 0 means not encrypted

#### [` crypt_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.EncryptionInfo.crypt_offset>)

property crypt\_offset → int

File offset of encrypted range

#### [` crypt_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.EncryptionInfo.crypt_size>)

property crypt\_size → int

File size of encrypted range

---

## [Build Version](<https://lief.re/doc/latest/formats/macho/python.html#build-version>)

![Inheritance diagram of lief._lief.MachO.BuildVersion](https://lief.re/doc/latest/_images/inheritance-f85d6b788d5f88d82e4a7bcf41e8131cb18ed205.png)

### [` lief.MachO.BuildVersion `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion>)

class lief.MachO.BuildVersion

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

#### [` PLATFORMS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS>)

class PLATFORMS(*\*values*)

Bases: `Enum`

##### [` ANY `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.ANY>)

ANY = 4294967295

##### [` BRIDGEOS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.BRIDGEOS>)

BRIDGEOS = 5

##### [` DRIVERKIT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.DRIVERKIT>)

DRIVERKIT = 10

##### [` FIRMWARE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.FIRMWARE>)

FIRMWARE = 13

##### [` IOS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.IOS>)

IOS = 2

##### [` IOS_EXCLAVE_CORE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.IOS_EXCLAVE_CORE>)

IOS\_EXCLAVE\_CORE = 17

##### [` IOS_EXCLAVE_KIT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.IOS_EXCLAVE_KIT>)

IOS\_EXCLAVE\_KIT = 18

##### [` IOS_SIMULATOR `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.IOS_SIMULATOR>)

IOS\_SIMULATOR = 7

##### [` MACOS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.MACOS>)

MACOS = 1

##### [` MACOS_EXCLAVE_CORE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.MACOS_EXCLAVE_CORE>)

MACOS\_EXCLAVE\_CORE = 15

##### [` MACOS_EXCLAVE_KIT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.MACOS_EXCLAVE_KIT>)

MACOS\_EXCLAVE\_KIT = 16

##### [` MAC_CATALYST `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.MAC_CATALYST>)

MAC\_CATALYST = 6

##### [` SEPOS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.SEPOS>)

SEPOS = 14

##### [` TVOS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.TVOS>)

TVOS = 3

##### [` TVOS_EXCLAVE_CORE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.TVOS_EXCLAVE_CORE>)

TVOS\_EXCLAVE\_CORE = 19

##### [` TVOS_EXCLAVE_KIT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.TVOS_EXCLAVE_KIT>)

TVOS\_EXCLAVE\_KIT = 20

##### [` TVOS_SIMULATOR `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.TVOS_SIMULATOR>)

TVOS\_SIMULATOR = 8

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.UNKNOWN>)

UNKNOWN = 0

##### [` VISIONOS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.VISIONOS>)

VISIONOS = 11

##### [` VISIONOS_EXCLAVE_CORE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.VISIONOS_EXCLAVE_CORE>)

VISIONOS\_EXCLAVE\_CORE = 23

##### [` VISIONOS_EXCLAVE_KIT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.VISIONOS_EXCLAVE_KIT>)

VISIONOS\_EXCLAVE\_KIT = 24

##### [` VISIONOS_SIMULATOR `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.VISIONOS_SIMULATOR>)

VISIONOS\_SIMULATOR = 12

##### [` WATCHOS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.WATCHOS>)

WATCHOS = 4

##### [` WATCHOS_EXCLAVE_CORE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.WATCHOS_EXCLAVE_CORE>)

WATCHOS\_EXCLAVE\_CORE = 21

##### [` WATCHOS_EXCLAVE_KIT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.WATCHOS_EXCLAVE_KIT>)

WATCHOS\_EXCLAVE\_KIT = 22

##### [` WATCHOS_SIMULATOR `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.WATCHOS_SIMULATOR>)

WATCHOS\_SIMULATOR = 9

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS.from_value>)

from\_value(*arg: int*) → [lief.MachO.BuildVersion.PLATFORMS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS> "lief.MachO.BuildVersion.PLATFORMS") = &lt;nanobind.nb\_func object&gt;

#### [` minos `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.minos>)

property minos → list[int]

Minimal OS version on which this binary was built to run

#### [` platform `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.platform>)

property platform → [lief.MachO.BuildVersion.PLATFORMS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS> "lief.MachO.BuildVersion.PLATFORMS")

Target [`PLATFORMS`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.PLATFORMS> "lief.MachO.BuildVersion.PLATFORMS")

#### [` sdk `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.sdk>)

property sdk → list[int]

SDK Version

#### [` tools `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildVersion.tools>)

property tools → list[[lief.MachO.BuildToolVersion](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion> "lief.MachO.BuildToolVersion")]

List of [`BuildToolVersion`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion> "lief.MachO.BuildToolVersion") used while building this binary

---

## [Build Tool Version](<https://lief.re/doc/latest/formats/macho/python.html#build-tool-version>)

![Inheritance diagram of lief._lief.MachO.BuildToolVersion](https://lief.re/doc/latest/_images/inheritance-72d9da5e63e9eed6e77e061e5803cc02bc85a84e.png)

### [` lief.MachO.BuildToolVersion `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion>)

class lief.MachO.BuildToolVersion

Bases: `Object`

Class that represents a tool’s version that was involved in the build of the binary

#### [` TOOLS `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.TOOLS>)

class TOOLS(*\*values*)

Bases: `Enum`

##### [` AIRLLD `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.TOOLS.AIRLLD>)

AIRLLD = 1025

##### [` AIRNT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.TOOLS.AIRNT>)

AIRNT = 1026

##### [` AIRNT_PLUGIN `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.TOOLS.AIRNT_PLUGIN>)

AIRNT\_PLUGIN = 1027

##### [` AIRPACK `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.TOOLS.AIRPACK>)

AIRPACK = 1028

##### [` CLANG `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.TOOLS.CLANG>)

CLANG = 1

##### [` GPUARCHIVER `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.TOOLS.GPUARCHIVER>)

GPUARCHIVER = 1031

##### [` LD `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.TOOLS.LD>)

LD = 3

##### [` LLD `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.TOOLS.LLD>)

LLD = 4

##### [` METAL `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.TOOLS.METAL>)

METAL = 1024

##### [` METAL_FRAMEWORK `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.TOOLS.METAL_FRAMEWORK>)

METAL\_FRAMEWORK = 1032

##### [` SWIFT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.TOOLS.SWIFT>)

SWIFT = 2

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.TOOLS.UNKNOWN>)

UNKNOWN = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.TOOLS.from_value>)

from\_value(*arg: int*) → [lief.MachO.BuildToolVersion.TOOLS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.TOOLS> "lief.MachO.BuildToolVersion.TOOLS") = &lt;nanobind.nb\_func object&gt;

#### [` tool `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.tool>)

property tool → [lief.MachO.BuildToolVersion.TOOLS](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.TOOLS> "lief.MachO.BuildToolVersion.TOOLS")

`TOOLS` type

#### [` version `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.BuildToolVersion.version>)

property version → list[int]

Version of the tool

---

## [Fileset Command](<https://lief.re/doc/latest/formats/macho/python.html#fileset-command>)

![Inheritance diagram of lief._lief.MachO.FilesetCommand](https://lief.re/doc/latest/_images/inheritance-e852680add21235c95751c8c8849f395740ce527.png)

### [` lief.MachO.FilesetCommand `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FilesetCommand>)

class lief.MachO.FilesetCommand

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class associated with the LC\_FILESET\_ENTRY commands

#### [` binary `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FilesetCommand.binary>)

property binary → [lief.MachO.Binary](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief.MachO.Binary") | None

Return the [`Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief.MachO.Binary") object associated with the entry

#### [` file_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FilesetCommand.file_offset>)

property file\_offset → int

Original offset in the kernel cache

#### [` name `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FilesetCommand.name>)

property name → str

Name of the underlying MachO binary

#### [` virtual_address `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FilesetCommand.virtual_address>)

property virtual\_address → int

Memory address where the MachO file should be mapped

---

## [DyldChainedFixups Command](<https://lief.re/doc/latest/formats/macho/python.html#dyldchainedfixups-command>)

![Inheritance diagram of lief._lief.MachO.DyldChainedFixups](https://lief.re/doc/latest/_images/inheritance-0a2ba2fd368cc33abfe41c1b2dbd604b8fbd48f6.png)

### [` lief.MachO.DyldChainedFixups `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups>)

class lief.MachO.DyldChainedFixups

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represents the LC\_DYLD\_CHAINED\_FIXUPS command

This command aims at providing rebase and binding information like the [`DyldInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo> "lief.MachO.DyldInfo") ‘s bytecode. Compared to the [`DyldInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldInfo> "lief.MachO.DyldInfo") bytecode, these chained fixups are taking less space.

#### [` bindings `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.bindings>)

property bindings → lief.MachO.DyldChainedFixups.it\_binding\_info

Iterator over the bindings [`ChainedBindingInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ChainedBindingInfo> "lief.MachO.ChainedBindingInfo") associated with this command

#### [` chained_starts_in_segment `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.chained_starts_in_segment>)

class chained\_starts\_in\_segment

Bases: `object`

Structure that mirrors the raw dyld\_chained\_starts\_in\_segment which aims at providing information about the chained rebase/bind fixups

The relocations provided by this structure can be accessed through [`relocations`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.relocations> "lief.MachO.SegmentCommand.relocations")

##### [` max_valid_pointer `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.chained_starts_in_segment.max_valid_pointer>)

property max\_valid\_pointer → int

for 32-bit OS, any value beyond this is not a pointer

##### [` offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.chained_starts_in_segment.offset>)

property offset → int

Original offset of the structure, relative to [`starts_offset`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.starts_offset> "lief.MachO.DyldChainedFixups.starts_offset")

##### [` page_count `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.chained_starts_in_segment.page_count>)

property page\_count → int

How many pages are in the `page_start` array

##### [` page_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.chained_starts_in_segment.page_size>)

property page\_size → int

Likely 0x1000 for x86/x86\_64 architectures and 0x4000 for ARM64 architecture

##### [` page_start `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.chained_starts_in_segment.page_start>)

property page\_start → list[int]

Offset in the [`SegmentCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") of the first element of the chain.

##### [` pointer_format `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.chained_starts_in_segment.pointer_format>)

property pointer\_format → [lief.MachO.DYLD\_CHAINED\_PTR\_FORMAT](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT> "lief.MachO.DYLD_CHAINED_PTR_FORMAT")

How pointers are encoded

##### [` segment `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.chained_starts_in_segment.segment>)

property segment → [lief.MachO.SegmentCommand](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") | None

[`SegmentCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand> "lief.MachO.SegmentCommand") in which the rebase/bind fixups take place

##### [` segment_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.chained_starts_in_segment.segment_offset>)

property segment\_offset → int

Offset of the segment’s data from the beginning of the file. (it should match [`file_offset`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.SegmentCommand.file_offset> "lief.MachO.SegmentCommand.file_offset"))

##### [` size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.chained_starts_in_segment.size>)

property size → int

`sizeof(size) + sizeof(page_size) + ... + sizeof(pointer_format)`

#### [` chained_starts_in_segments `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.chained_starts_in_segments>)

property chained\_starts\_in\_segments → lief.MachO.DyldChainedFixups.it\_chained\_starts\_in\_segments\_t

Iterator over the chained fixup metadata, [`chained_starts_in_segment`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.chained_starts_in_segment> "lief.MachO.DyldChainedFixups.chained_starts_in_segment")

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.data_offset>)

property data\_offset → int

Offset of the LC\_DYLD\_CHAINED\_FIXUPS chained payload. This offset should point in the `__LINKEDIT` segment

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.data_size>)

property data\_size → int

Size of the LC\_DYLD\_CHAINED\_FIXUPS payload

#### [` fixups_version `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.fixups_version>)

property fixups\_version → int

Chained fixups version. The loader (as of dyld v852.2) checks that this value is set to 0.

#### [` imports_count `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.imports_count>)

property imports\_count → int

Number of imported symbol names

#### [` imports_format `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.imports_format>)

property imports\_format → [lief.MachO.DYLD\_CHAINED\_FORMAT](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_FORMAT> "lief.MachO.DYLD_CHAINED_FORMAT")

The format of the imports ([`ChainedBindingInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ChainedBindingInfo> "lief.MachO.ChainedBindingInfo"))

#### [` imports_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.imports_offset>)

property imports\_offset → int

Offset of imports table in chain data

#### [` payload `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.payload>)

property payload → memoryview

Return the raw content of the command

#### [` starts_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.starts_offset>)

property starts\_offset → int

offset of dyld\_chained\_starts\_in\_image in chain\_data

#### [` symbols_format `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.symbols_format>)

property symbols\_format → int

The compression algorithm (if any) used to store the symbols 0 means uncompressed while 1 means zlib compressed.

As of the version v852.2 of dyld loader, it only supports **uncompressed** format

#### [` symbols_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldChainedFixups.symbols_offset>)

property symbols\_offset → int

Offset of symbol strings in chain data

---

## [DyldExportsTrie Command](<https://lief.re/doc/latest/formats/macho/python.html#dyldexportstrie-command>)

![Inheritance diagram of lief._lief.MachO.DyldExportsTrie](https://lief.re/doc/latest/_images/inheritance-a60d87c9075f7614206af79a252a390ec3fe75a8.png)

### [` lief.MachO.DyldExportsTrie `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldExportsTrie>)

class lief.MachO.DyldExportsTrie

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class that represents the LC\_DYLD\_EXPORTS\_TRIE command

In recent Mach-O binaries, this command replace the DyldInfo export trie buffer

#### [` content `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldExportsTrie.content>)

property content → memoryview

The raw export trie

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldExportsTrie.data_offset>)

property data\_offset → int

Offset of the trie in the binary. This offset should point in the \_\_LINKEDIT

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldExportsTrie.data_size>)

property data\_size → int

Raw size of the trie

#### [` exports `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldExportsTrie.exports>)

property exports → lief.MachO.DyldExportsTrie.it\_export\_info

Iterator over the [`ExportInfo`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ExportInfo> "lief.MachO.ExportInfo") associated with this trie.

#### [` show_export_trie `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DyldExportsTrie.show_export_trie>)

show\_export\_trie(*self*) → str

Show the trie in a human-readable way

---

## [Code Signature Dir Command](<https://lief.re/doc/latest/formats/macho/python.html#code-signature-dir-command>)

![Inheritance diagram of lief._lief.MachO.CodeSignatureDir](https://lief.re/doc/latest/_images/inheritance-af26e08a02024dc8771a8a8086797fa3c5453a0e.png)

### [` lief.MachO.CodeSignatureDir `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.CodeSignatureDir>)

class lief.MachO.CodeSignatureDir

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

#### [` content `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.CodeSignatureDir.content>)

property content → memoryview

The raw signature as a bytes stream

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.CodeSignatureDir.data_offset>)

property data\_offset → int

Offset in the binary where the signature starts

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.CodeSignatureDir.data_size>)

property data\_size → int

Size of the raw signature

---

## [Two Level Hints](<https://lief.re/doc/latest/formats/macho/python.html#two-level-hints>)

![Inheritance diagram of lief._lief.MachO.TwoLevelHints](https://lief.re/doc/latest/_images/inheritance-9cd2c089731909ae639ac649ac29410d7ba973f5.png)

### [` lief.MachO.TwoLevelHints `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.TwoLevelHints>)

class lief.MachO.TwoLevelHints

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class which represents the LC\_TWOLEVEL\_HINTS command

#### [` content `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.TwoLevelHints.content>)

property content → memoryview

The original content as a bytes stream

#### [` hints `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.TwoLevelHints.hints>)

property hints → lief.MachO.TwoLevelHints.it\_hints\_t

---

## [Linker Optimization Hint](<https://lief.re/doc/latest/formats/macho/python.html#linker-optimization-hint>)

![Inheritance diagram of lief._lief.MachO.LinkerOptHint](https://lief.re/doc/latest/_images/inheritance-c0b0ca7939674c9f5655997433175d9b3e40ced3.png)

### [` lief.MachO.LinkerOptHint `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LinkerOptHint>)

class lief.MachO.LinkerOptHint

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Class which represents the LC\_LINKER\_OPTIMIZATION\_HINT command

#### [` content `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LinkerOptHint.content>)

property content → memoryview

The raw payload

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LinkerOptHint.data_offset>)

property data\_offset → int

Offset in the binary where the payload starts

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LinkerOptHint.data_size>)

property data\_size → int

Size of the raw payload

---

## [UnknownCommand](<https://lief.re/doc/latest/formats/macho/python.html#unknowncommand>)

![Inheritance diagram of lief._lief.MachO.UnknownCommand](https://lief.re/doc/latest/_images/inheritance-02b12d853e1dbabf3240463b555358fda26f7983.png)

### [` lief.MachO.UnknownCommand `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.UnknownCommand>)

class lief.MachO.UnknownCommand

Bases: [`LoadCommand`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.LoadCommand> "lief._lief.MachO.LoadCommand")

Generic class when the command is not recognized by LIEF

#### [` original_command `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.UnknownCommand.original_command>)

property original\_command → int

---

## [Stub](<https://lief.re/doc/latest/formats/macho/python.html#stub>)

### [` lief.MachO.Stub `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Stub>)

class lief.MachO.Stub(*self*, *target\_info: [lief.\_lief.MachO.Stub.target\_info\_t](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Stub.target_info_t> "lief._lief.MachO.Stub.target_info_t")*, *address: int*, *raw\_stub: collections.abc.Sequence[int]*)

Bases: `object`

This class represents a stub entry in sections like `__stubs,__auth_stubs`.

It wraps assembly instructions which are used to access the *got* where the address of the symbol is resolved.

Example:

```text
0000000236a3c1bc: ___memcpy_chk
  adrp            x17, #0x241513aa8
  add             x17, x17, #0x241513aa8
  ldr             x16, [x17]
  braa            x16, x17
```

#### [` address `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Stub.address>)

property address → int

The virtual address where the stub is located

#### [` raw `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Stub.raw>)

property raw → memoryview

The (raw) instructions of this entry as a memory view of bytes

#### [` target `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Stub.target>)

property target → int | [lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief.lief_errors")

The address resolved by this stub.

For instance, given this stub:

```default
0x3eec: adrp    x16, #4096
0x3ef0: ldr     x16, [x16, #24]
0x3ef4: br      x16
```

The function returns: `0x4018`.

> **Warning**
> 
> This function is only available with LIEF’s extended version

#### [` target_info_ttarget_info_t `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Stub.target_info_t>)

class target\_info\_t(*self*)

**class target\_info\_t(*self*, *arg0: [lief.\_lief.MachO.Header.CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE> "lief._lief.MachO.Header.CPU_TYPE")*, *arg1: int*, */*)**

Bases: `object`

##### [` arch `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Stub.target_info_t.arch>)

property arch → [lief.MachO.Header.CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Header.CPU_TYPE> "lief.MachO.Header.CPU_TYPE")

##### [` subtype `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Stub.target_info_t.subtype>)

property subtype → int

---

## [Builder](<https://lief.re/doc/latest/formats/macho/python.html#builder>)

### [` lief.MachO.Builder `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Builder>)

class lief.MachO.Builder

Bases: `object`

Class used to reconstruct a Mach-O binary from its object representation

#### [` config_t `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Builder.config_t>)

class config\_t(*self*)

Bases: `object`

Interface to tweak the [`Builder`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Builder> "lief.MachO.Builder")

##### [` linkedit `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Builder.config_t.linkedit>)

property linkedit → bool

#### [` write `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Builder.write>)

write(*\*args*) → [lief.ok\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_t> "lief.ok_t") | [lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief.lief_errors") = &lt;nanobind.nb\_func object at 0x85b3bd0&gt;

---

## [Utilities](<https://lief.re/doc/latest/formats/macho/python.html#utilities>)

### [` lief.MachO.check_layoutlief.MachO.check_layout `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.check_layout>)

lief.MachO.check\_layout(*\*args*) → tuple[bool, str]

**lief.MachO.check\_layout(*file: [lief.\_lief.MachO.FatBinary](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.FatBinary> "lief._lief.MachO.FatBinary")*) → tuple[bool, str]**

Overloaded function.

1. `check_layout(file: lief._lief.MachO.Binary) -> tuple[bool, str]`

Check the layout of the given Mach-O binary. It checks if it can be signed according to `cctools-921/libstuff/checkout.c`

2. `check_layout(file: lief._lief.MachO.FatBinary) -> tuple[bool, str]`

   > Check the layout of the given FAT Mach-O by checking individually the layout of the binaries embedded in the FAT.

---

## [Enums](<https://lief.re/doc/latest/formats/macho/python.html#enums>)

### [MACHO\_TYPES](<https://lief.re/doc/latest/formats/macho/python.html#macho-types>)

#### [` lief.MachO.MACHO_TYPES `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MACHO_TYPES>)

class lief.MachO.MACHO\_TYPES(*\*values*)

Bases: `Enum`

##### [` CIGAM `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MACHO_TYPES.CIGAM>)

CIGAM = 3472551422

##### [` CIGAM_64 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MACHO_TYPES.CIGAM_64>)

CIGAM\_64 = 3489328638

##### [` CIGAM_FAT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MACHO_TYPES.CIGAM_FAT>)

CIGAM\_FAT = 3199925962

##### [` MAGIC `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MACHO_TYPES.MAGIC>)

MAGIC = 4277009102

##### [` MAGIC_64 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MACHO_TYPES.MAGIC_64>)

MAGIC\_64 = 4277009103

##### [` MAGIC_FAT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MACHO_TYPES.MAGIC_FAT>)

MAGIC\_FAT = 3405691582

##### [` NEURAL_MODEL `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MACHO_TYPES.NEURAL_MODEL>)

NEURAL\_MODEL = 3203398350

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MACHO_TYPES.from_value>)

from\_value(*arg: int*) → [lief.MachO.MACHO\_TYPES](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.MACHO_TYPES> "lief.MachO.MACHO_TYPES") = &lt;nanobind.nb\_func object&gt;

---

### [X86\_RELOCATION](<https://lief.re/doc/latest/formats/macho/python.html#x86-relocation>)

#### [` lief.MachO.X86_RELOCATION `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_RELOCATION>)

class lief.MachO.X86\_RELOCATION(*\*values*)

Bases: `Enum`

##### [` LOCAL_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_RELOCATION.LOCAL_SECTDIFF>)

LOCAL\_SECTDIFF = 4

##### [` PAIR `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_RELOCATION.PAIR>)

PAIR = 1

##### [` PB_LA_PTR `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_RELOCATION.PB_LA_PTR>)

PB\_LA\_PTR = 3

##### [` SECTDIFF `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_RELOCATION.SECTDIFF>)

SECTDIFF = 2

##### [` TLV `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_RELOCATION.TLV>)

TLV = 5

##### [` VANILLA `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_RELOCATION.VANILLA>)

VANILLA = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_RELOCATION.from_value>)

from\_value(*arg: int*) → [lief.MachO.X86\_RELOCATION](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_RELOCATION> "lief.MachO.X86_RELOCATION") = &lt;nanobind.nb\_func object&gt;

---

### [X86\_64\_RELOCATION](<https://lief.re/doc/latest/formats/macho/python.html#x86-64-relocation>)

#### [` lief.MachO.X86_64_RELOCATION `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_64_RELOCATION>)

class lief.MachO.X86\_64\_RELOCATION(*\*values*)

Bases: `Enum`

##### [` BRANCH `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_64_RELOCATION.BRANCH>)

BRANCH = 2

##### [` GOT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_64_RELOCATION.GOT>)

GOT = 4

##### [` GOT_LOAD `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_64_RELOCATION.GOT_LOAD>)

GOT\_LOAD = 3

##### [` SIGNED `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_64_RELOCATION.SIGNED>)

SIGNED = 1

##### [` SIGNED_1 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_64_RELOCATION.SIGNED_1>)

SIGNED\_1 = 6

##### [` SIGNED_2 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_64_RELOCATION.SIGNED_2>)

SIGNED\_2 = 7

##### [` SIGNED_4 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_64_RELOCATION.SIGNED_4>)

SIGNED\_4 = 8

##### [` SUBTRACTOR `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_64_RELOCATION.SUBTRACTOR>)

SUBTRACTOR = 5

##### [` TLV `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_64_RELOCATION.TLV>)

TLV = 9

##### [` UNSIGNED `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_64_RELOCATION.UNSIGNED>)

UNSIGNED = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_64_RELOCATION.from_value>)

from\_value(*arg: int*) → [lief.MachO.X86\_64\_RELOCATION](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.X86_64_RELOCATION> "lief.MachO.X86_64_RELOCATION") = &lt;nanobind.nb\_func object&gt;

---

### [PPC\_RELOCATION](<https://lief.re/doc/latest/formats/macho/python.html#ppc-relocation>)

#### [` lief.MachO.PPC_RELOCATION `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION>)

class lief.MachO.PPC\_RELOCATION(*\*values*)

Bases: `Enum`

##### [` BR14 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.BR14>)

BR14 = 2

##### [` BR24 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.BR24>)

BR24 = 3

##### [` HA16 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.HA16>)

HA16 = 6

##### [` HA16_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.HA16_SECTDIFF>)

HA16\_SECTDIFF = 12

##### [` HI16 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.HI16>)

HI16 = 4

##### [` HI16_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.HI16_SECTDIFF>)

HI16\_SECTDIFF = 10

##### [` JBSR `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.JBSR>)

JBSR = 13

##### [` LO14 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.LO14>)

LO14 = 7

##### [` LO14_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.LO14_SECTDIFF>)

LO14\_SECTDIFF = 14

##### [` LO16 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.LO16>)

LO16 = 5

##### [` LO16_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.LO16_SECTDIFF>)

LO16\_SECTDIFF = 11

##### [` LOCAL_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.LOCAL_SECTDIFF>)

LOCAL\_SECTDIFF = 15

##### [` PAIR `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.PAIR>)

PAIR = 1

##### [` PB_LA_PTR `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.PB_LA_PTR>)

PB\_LA\_PTR = 9

##### [` SECTDIFF `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.SECTDIFF>)

SECTDIFF = 8

##### [` VANILLA `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.VANILLA>)

VANILLA = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION.from_value>)

from\_value(*arg: int*) → [lief.MachO.PPC\_RELOCATION](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.PPC_RELOCATION> "lief.MachO.PPC_RELOCATION") = &lt;nanobind.nb\_func object&gt;

---

### [ARM\_RELOCATION](<https://lief.re/doc/latest/formats/macho/python.html#arm-relocation>)

#### [` lief.MachO.ARM_RELOCATION `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM_RELOCATION>)

class lief.MachO.ARM\_RELOCATION(*\*values*)

Bases: `Enum`

##### [` BR24 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM_RELOCATION.BR24>)

BR24 = 5

##### [` HALF `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM_RELOCATION.HALF>)

HALF = 8

##### [` HALF_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM_RELOCATION.HALF_SECTDIFF>)

HALF\_SECTDIFF = 9

##### [` LOCAL_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM_RELOCATION.LOCAL_SECTDIFF>)

LOCAL\_SECTDIFF = 3

##### [` PAIR `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM_RELOCATION.PAIR>)

PAIR = 1

##### [` PB_LA_PTR `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM_RELOCATION.PB_LA_PTR>)

PB\_LA\_PTR = 4

##### [` SECTDIFF `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM_RELOCATION.SECTDIFF>)

SECTDIFF = 2

##### [` THUMB_32BIT_BRANCH `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM_RELOCATION.THUMB_32BIT_BRANCH>)

THUMB\_32BIT\_BRANCH = 7

##### [` THUMB_RELOC_BR22 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM_RELOCATION.THUMB_RELOC_BR22>)

THUMB\_RELOC\_BR22 = 6

##### [` VANILLA `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM_RELOCATION.VANILLA>)

VANILLA = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM_RELOCATION.from_value>)

from\_value(*arg: int*) → [lief.MachO.ARM\_RELOCATION](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM_RELOCATION> "lief.MachO.ARM_RELOCATION") = &lt;nanobind.nb\_func object&gt;

---

### [ARM64\_RELOCATION](<https://lief.re/doc/latest/formats/macho/python.html#arm64-relocation>)

#### [` lief.MachO.ARM64_RELOCATION `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM64_RELOCATION>)

class lief.MachO.ARM64\_RELOCATION(*\*values*)

Bases: `Enum`

##### [` ADDEND `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM64_RELOCATION.ADDEND>)

ADDEND = 10

##### [` BRANCH26 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM64_RELOCATION.BRANCH26>)

BRANCH26 = 2

##### [` GOT_LOAD_PAGE21 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM64_RELOCATION.GOT_LOAD_PAGE21>)

GOT\_LOAD\_PAGE21 = 5

##### [` GOT_LOAD_PAGEOFF12 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM64_RELOCATION.GOT_LOAD_PAGEOFF12>)

GOT\_LOAD\_PAGEOFF12 = 6

##### [` PAGE21 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM64_RELOCATION.PAGE21>)

PAGE21 = 3

##### [` PAGEOFF12 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM64_RELOCATION.PAGEOFF12>)

PAGEOFF12 = 4

##### [` POINTER_TO_GOT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM64_RELOCATION.POINTER_TO_GOT>)

POINTER\_TO\_GOT = 7

##### [` SUBTRACTOR `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM64_RELOCATION.SUBTRACTOR>)

SUBTRACTOR = 1

##### [` TLVP_LOAD_PAGE21 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM64_RELOCATION.TLVP_LOAD_PAGE21>)

TLVP\_LOAD\_PAGE21 = 8

##### [` TLVP_LOAD_PAGEOFF12 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM64_RELOCATION.TLVP_LOAD_PAGEOFF12>)

TLVP\_LOAD\_PAGEOFF12 = 9

##### [` UNSIGNED `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM64_RELOCATION.UNSIGNED>)

UNSIGNED = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM64_RELOCATION.from_value>)

from\_value(*arg: int*) → [lief.MachO.ARM64\_RELOCATION](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ARM64_RELOCATION> "lief.MachO.ARM64_RELOCATION") = &lt;nanobind.nb\_func object&gt;

### [DYLD\_CHAINED\_FORMAT](<https://lief.re/doc/latest/formats/macho/python.html#dyld-chained-format>)

#### [` lief.MachO.DYLD_CHAINED_FORMAT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_FORMAT>)

class lief.MachO.DYLD\_CHAINED\_FORMAT(*\*values*)

Bases: `Enum`

##### [` IMPORT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_FORMAT.IMPORT>)

IMPORT = 1

##### [` IMPORT_ADDEND `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_FORMAT.IMPORT_ADDEND>)

IMPORT\_ADDEND = 2

##### [` IMPORT_ADDEND64 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_FORMAT.IMPORT_ADDEND64>)

IMPORT\_ADDEND64 = 3

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_FORMAT.from_value>)

from\_value(*arg: int*) → [lief.MachO.DYLD\_CHAINED\_FORMAT](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_FORMAT> "lief.MachO.DYLD_CHAINED_FORMAT") = &lt;nanobind.nb\_func object&gt;

### [DYLD\_CHAINED\_PTR\_FORMAT](<https://lief.re/doc/latest/formats/macho/python.html#dyld-chained-ptr-format>)

#### [` lief.MachO.DYLD_CHAINED_PTR_FORMAT `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT>)

class lief.MachO.DYLD\_CHAINED\_PTR\_FORMAT(*\*values*)

Bases: `Enum`

##### [` NONE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT.NONE>)

NONE = 0

##### [` PTR_32 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT.PTR_32>)

PTR\_32 = 3

##### [` PTR_32_CACHE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT.PTR_32_CACHE>)

PTR\_32\_CACHE = 4

##### [` PTR_32_FIRMWARE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT.PTR_32_FIRMWARE>)

PTR\_32\_FIRMWARE = 5

##### [` PTR_64 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT.PTR_64>)

PTR\_64 = 2

##### [` PTR_64_KERNEL_CACHE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT.PTR_64_KERNEL_CACHE>)

PTR\_64\_KERNEL\_CACHE = 8

##### [` PTR_64_OFFSET `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT.PTR_64_OFFSET>)

PTR\_64\_OFFSET = 6

##### [` PTR_ARM64E `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT.PTR_ARM64E>)

PTR\_ARM64E = 1

##### [` PTR_ARM64E_FIRMWARE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT.PTR_ARM64E_FIRMWARE>)

PTR\_ARM64E\_FIRMWARE = 10

##### [` PTR_ARM64E_KERNEL `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT.PTR_ARM64E_KERNEL>)

PTR\_ARM64E\_KERNEL = 7

##### [` PTR_ARM64E_SEGMENTED `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT.PTR_ARM64E_SEGMENTED>)

PTR\_ARM64E\_SEGMENTED = 14

##### [` PTR_ARM64E_SHARED_CACHE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT.PTR_ARM64E_SHARED_CACHE>)

PTR\_ARM64E\_SHARED\_CACHE = 13

##### [` PTR_ARM64E_USERLAND `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT.PTR_ARM64E_USERLAND>)

PTR\_ARM64E\_USERLAND = 9

##### [` PTR_ARM64E_USERLAND24 `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT.PTR_ARM64E_USERLAND24>)

PTR\_ARM64E\_USERLAND24 = 12

##### [` PTR_X86_64_KERNEL_CACHE `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT.PTR_X86_64_KERNEL_CACHE>)

PTR\_X86\_64\_KERNEL\_CACHE = 11

##### [` from_value `](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT.from_value>)

from\_value(*arg: int*) → [lief.MachO.DYLD\_CHAINED\_PTR\_FORMAT](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.DYLD_CHAINED_PTR_FORMAT> "lief.MachO.DYLD_CHAINED_PTR_FORMAT") = &lt;nanobind.nb\_func object&gt;
