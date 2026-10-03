---
documentID: "287ebd41de445d5debb713a6e2e1b79005802c3b5e9e74b251bcf63a8791463b"
docname: "formats/elf/python"
title: "ELF Python API - LIEF Documentation"
description: "ELF Python API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/formats/elf/python.html"
markdownURL: "https://lief.re/doc/latest/formats/elf/python.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "6e691e88b3fc5adbf57c1e5f1aaabb40838f93602e657210b1ee62dd83fcdb97"
---

# [Python](<https://lief.re/doc/latest/formats/elf/python.html#python>)

## [Parser](<https://lief.re/doc/latest/formats/elf/python.html#parser>)

### [` lief.ELF.parse `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.parse>)

lief.ELF.parse(*obj: str | io.IOBase | os.PathLike | bytes | list[int]*, *config: [lief.ELF.ParserConfig](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig> "lief.ELF.ParserConfig")*) → [lief.ELF.Binary](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief.ELF.Binary") | None

Parse the ELF binary from the given Python object and return a [`lief.ELF.Binary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief.ELF.Binary") object

The second argument is an optional configuration ([`ParserConfig`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig> "lief.ELF.ParserConfig")) that can be used to define which part(s) of the ELF should be parsed or skipped.

### [` lief.ELF.ParserConfig `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig>)

class lief.ELF.ParserConfig(*self*)

Bases: `object`

This class is used to tweak the ELF Parser

#### [` DYNSYM_COUNT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.DYNSYM_COUNT>)

class DYNSYM\_COUNT(*\*values*)

Bases: `Enum`

##### [` AUTO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.DYNSYM_COUNT.AUTO>)

AUTO = 0

##### [` HASH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.DYNSYM_COUNT.HASH>)

HASH = 2

##### [` RELOCATIONS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.DYNSYM_COUNT.RELOCATIONS>)

RELOCATIONS = 3

##### [` SECTION `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.DYNSYM_COUNT.SECTION>)

SECTION = 1

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.DYNSYM_COUNT.from_value>)

from\_value(*arg: int*) → [lief.ELF.ParserConfig.DYNSYM\_COUNT](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.DYNSYM_COUNT> "lief.ELF.ParserConfig.DYNSYM_COUNT") = &lt;nanobind.nb\_func object&gt;

#### [` all `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.all>)

all = &lt;lief.\_lief.ELF.ParserConfig object&gt;

#### [` count_mtd `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.count_mtd>)

property count\_mtd → [lief.ELF.ParserConfig.DYNSYM\_COUNT](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.DYNSYM_COUNT> "lief.ELF.ParserConfig.DYNSYM_COUNT")

The `DYNSYM_COUNT_METHODS` to use for counting the dynamic symbols

For *weird* binaries (e.g sectionless) you can choose the method for counting dynamic symbols (`lief.ELF.DYNSYM_COUNT_METHODS`). By default, the value is set to `lief.ELF.DYNSYM_COUNT_METHODS.COUNT_AUTO`

#### [` page_size `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.page_size>)

property page\_size → int

Memory page size if the binary uses a non-standard value.

For instance, SPARCV9 binary can use a page size from 0x2000 to 0x100000.

#### [` parse_dyn_symbols `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.parse_dyn_symbols>)

property parse\_dyn\_symbols → bool

Whether dynamic symbols (those from .dynsym) should be parsed

#### [` parse_notes `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.parse_notes>)

property parse\_notes → bool

Whether ELF notes information should be parsed

#### [` parse_overlay `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.parse_overlay>)

property parse\_overlay → bool

Whether the overlay data should be parsed

#### [` parse_relocations `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.parse_relocations>)

property parse\_relocations → bool

Whether relocations (including plt-like relocations) should be parsed.

#### [` parse_symbol_versions `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.parse_symbol_versions>)

property parse\_symbol\_versions → bool

Whether versioning symbols should be parsed

#### [` parse_symtab_symbols `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig.parse_symtab_symbols>)

property parse\_symtab\_symbols → bool

Whether debug symbols (those from .symtab) should be parsed

---

## [Binary](<https://lief.re/doc/latest/formats/elf/python.html#binary>)

### [` lief.ELF.Binary `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary>)

class lief.ELF.Binary

Bases: [`Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary> "lief._lief.Binary")

Class which represents an ELF binary

#### [` PHDR_RELOC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.PHDR_RELOC>)

class PHDR\_RELOC(*\*values*)

Bases: `Enum`

This enum describes the different ways to relocate the segments table.

##### [` AUTO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.PHDR_RELOC.AUTO>)

AUTO = 0

##### [` BSS_END `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.PHDR_RELOC.BSS_END>)

BSS\_END = 2

##### [` FILE_END `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.PHDR_RELOC.FILE_END>)

FILE\_END = 3

##### [` PIE_SHIFT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.PHDR_RELOC.PIE_SHIFT>)

PIE\_SHIFT = 1

##### [` SEGMENT_GAP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.PHDR_RELOC.SEGMENT_GAP>)

SEGMENT\_GAP = 4

#### [` SEC_INSERT_POS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.SEC_INSERT_POS>)

class SEC\_INSERT\_POS(*\*values*)

Bases: `Enum`

This enum defines where the content of a newly added section should be inserted.

##### [` AUTO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.SEC_INSERT_POS.AUTO>)

AUTO = 0

##### [` POST_SECTION `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.SEC_INSERT_POS.POST_SECTION>)

POST\_SECTION = 2

##### [` POST_SEGMENT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.SEC_INSERT_POS.POST_SEGMENT>)

POST\_SEGMENT = 1

#### [` addaddaddadd `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.add>)

add(*self*, *arg: [lief.\_lief.ELF.DynamicEntry](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief._lief.ELF.DynamicEntry")*, */*) → [lief.\_lief.ELF.DynamicEntry](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief._lief.ELF.DynamicEntry")

**add(*self*, *section: [lief.\_lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief._lief.ELF.Section")*, *loaded: bool = True*, *pos: [lief.\_lief.ELF.Binary.SEC\_INSERT\_POS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.SEC_INSERT_POS> "lief._lief.ELF.Binary.SEC_INSERT_POS") = SEC\_INSERT\_POS.AUTO*) → [lief.\_lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief._lief.ELF.Section") | None

**add(*self*, *segment: [lief.\_lief.ELF.Segment](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief._lief.ELF.Segment")*, *base: int = 0*) → [lief.\_lief.ELF.Segment](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief._lief.ELF.Segment") | None

**add(*self*, *note: [lief.\_lief.ELF.Note](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief._lief.ELF.Note")*) → [lief.\_lief.ELF.Note](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief._lief.ELF.Note")******

Overloaded function.

1. `add(self, arg: lief._lief.ELF.DynamicEntry, /) -> lief._lief.ELF.DynamicEntry`

dynamic\_entry

2. `add(self, section: lief._lief.ELF.Section, loaded: bool = True, pos: lief._lief.ELF.Binary.SEC_INSERT_POS = SEC_INSERT_POS.AUTO) -> lief._lief.ELF.Section | None`

   > Add the given [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") to the binary.
   >
   > If the section does not aim at being loaded in memory, the `loaded` parameter has to be set to `False` (default: `True`)
3. `add(self, segment: lief._lief.ELF.Segment, base: int = 0) -> lief._lief.ELF.Segment | None`

Add a new [`Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment") in the binary

4. `add(self, note: lief._lief.ELF.Note) -> lief._lief.ELF.Note`

Add a new [`Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief.ELF.Note") in the binary

#### [` add_dynamic_relocation `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.add_dynamic_relocation>)

add\_dynamic\_relocation(*self*, *relocation: [lief.\_lief.ELF.Relocation](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation> "lief._lief.ELF.Relocation")*) → [lief.\_lief.ELF.Relocation](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation> "lief._lief.ELF.Relocation")

Add a new *dynamic* relocation.

We consider a dynamic relocation as a relocation which is not plt-related.

See: [`lief.ELF.Binary.add_pltgot_relocation()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.add_pltgot_relocation> "lief.ELF.Binary.add_pltgot_relocation")

#### [` add_dynamic_symbol `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.add_dynamic_symbol>)

add\_dynamic\_symbol(*self*, *symbol: [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol")*, *symbol\_version: [lief.\_lief.ELF.SymbolVersion](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion> "lief._lief.ELF.SymbolVersion") | None = None*) → [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol")

Add a **dynamic** [`Symbol`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol") to the binary

The function also takes an optional [`lief.ELF.SymbolVersion`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion> "lief.ELF.SymbolVersion")

#### [` add_exported_function `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.add_exported_function>)

add\_exported\_function(*self*, *address: int*, *name: str = ''*) → [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol")

Create a symbol for the function at the given `address` and create an export

#### [` add_library `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.add_library>)

add\_library(*self*, *library\_name: str*) → [lief.\_lief.ELF.DynamicEntryLibrary](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryLibrary> "lief._lief.ELF.DynamicEntryLibrary")

Add a library with the given name as dependency

#### [` add_object_relocation `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.add_object_relocation>)

add\_object\_relocation(*self*, *relocation: [lief.\_lief.ELF.Relocation](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation> "lief._lief.ELF.Relocation")*, *section: [lief.\_lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief._lief.ELF.Section")*) → [lief.\_lief.ELF.Relocation](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation> "lief._lief.ELF.Relocation") | None

Add relocation for object file (.o)

The first parameter is the relocation to add while the second parameter is the [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") associated with the relocation.

If there is an error, this function returns a nullptr. Otherwise, it returns the relocation added.

#### [` add_pltgot_relocation `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.add_pltgot_relocation>)

add\_pltgot\_relocation(*self*, *relocation: [lief.\_lief.ELF.Relocation](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation> "lief._lief.ELF.Relocation")*) → [lief.\_lief.ELF.Relocation](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation> "lief._lief.ELF.Relocation")

Add a .plt.got relocation. This kind of relocation is usually associated with a PLT stub that aims at resolving the underlying symbol.

See: [`lief.ELF.Binary.add_dynamic_relocation()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.add_dynamic_relocation> "lief.ELF.Binary.add_dynamic_relocation")

#### [` add_symtab_symbol `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.add_symtab_symbol>)

add\_symtab\_symbol(*self*, *symbol: [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol")*) → [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol")

Add a **static** [`Symbol`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol") to the binary

#### [` dtor_functions `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.dtor_functions>)

property dtor\_functions → list[[lief.Function](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function> "lief.Function")]

List of the binary destructors (typically, the functions located in the `.fini_array`)

#### [` dynamic_entries `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.dynamic_entries>)

property dynamic\_entries → lief.ELF.Binary.it\_dynamic\_entries

Return an iterator to [`DynamicEntry`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief.ELF.DynamicEntry") entries

#### [` dynamic_relocations `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.dynamic_relocations>)

property dynamic\_relocations → lief.ELF.Binary.it\_filter\_relocation

Return an iterator over dynamic [`Relocation`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation> "lief.ELF.Relocation")

#### [` dynamic_symbols `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.dynamic_symbols>)

property dynamic\_symbols → lief.ELF.Binary.it\_symbols

Return an iterator to dynamic [`Symbol`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol")

#### [` dynsym_idxdynsym_idx `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.dynsym_idx>)

dynsym\_idx(*self*, *name: str*) → int

**dynsym\_idx(*self*, *symbol: [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol")*) → int**

Overloaded function.

1. `dynsym_idx(self, name: str) -> int`

   > Get the symbol index in the **dynamic** symbol from the given name or return -1 if the symbol does not exist.
2. `dynsym_idx(self, symbol: lief._lief.ELF.Symbol) -> int`

   > Get the symbol index in the **dynamic** symbol table for the given symbol or return -1 if the symbol does not exist

#### [` eof_offset `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.eof_offset>)

property eof\_offset → int

Return the last offset used by the ELF binary according to both, the sections table and the segments table.

#### [` export_symbolexport_symbol `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.export_symbol>)

export\_symbol(*self*, *symbol: [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol")*) → [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol")

**export\_symbol(*self*, *symbol\_name: str*, *value: int = 0*) → [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol")**

Overloaded function.

1. `export_symbol(self, symbol: lief._lief.ELF.Symbol) -> lief._lief.ELF.Symbol`

Export the given symbol and create an entry if it doesn’t exist

2. `export_symbol(self, symbol_name: str, value: int = 0) -> lief._lief.ELF.Symbol`

Export the symbol with the given name and create an entry if it doesn’t exist

#### [` exported_symbols `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.exported_symbols>)

property exported\_symbols → lief.ELF.Binary.it\_filter\_symbols

Return dynamic [`Symbol`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol") which are exported

#### [` extendextend `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.extend>)

extend(*self*, *segment: [lief.\_lief.ELF.Segment](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief._lief.ELF.Segment")*, *size: int*) → [lief.\_lief.ELF.Segment](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief._lief.ELF.Segment") | None

**extend(*self*, *segment: [lief.\_lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief._lief.ELF.Section")*, *size: int*) → [lief.\_lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief._lief.ELF.Section") | None**

Overloaded function.

1. `extend(self, segment: lief._lief.ELF.Segment, size: int) -> lief._lief.ELF.Segment | None`

Extend the given [`Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment") by the given size

2. `extend(self, segment: lief._lief.ELF.Section, size: int) -> lief._lief.ELF.Section | None`

Extend the given [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") by the given size

#### [` find_version_requirement `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.find_version_requirement>)

find\_version\_requirement(*self*, *libname: str*) → [lief.\_lief.ELF.SymbolVersionRequirement](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionRequirement> "lief._lief.ELF.SymbolVersionRequirement") | None

Try to find the [`SymbolVersionRequirement`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionRequirement> "lief.ELF.SymbolVersionRequirement") associated with the given library name (e.g. `libc.so.6`)

#### [` functions `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.functions>)

property functions → list[[lief.Function](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function> "lief.Function")]

List of the functions found in the binary

#### [` getgetgetget `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.get>)

get(*self*, *tag: [lief.\_lief.ELF.DynamicEntry.TAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG> "lief._lief.ELF.DynamicEntry.TAG")*) → [lief.\_lief.ELF.DynamicEntry](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief._lief.ELF.DynamicEntry") | None

**get(*self*, *type: [lief.\_lief.ELF.Segment.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE> "lief._lief.ELF.Segment.TYPE")*) → [lief.\_lief.ELF.Segment](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief._lief.ELF.Segment") | None

**get(*self*, *type: [lief.\_lief.ELF.Note.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE> "lief._lief.ELF.Note.TYPE")*) → [lief.\_lief.ELF.Note](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief._lief.ELF.Note") | None

**get(*self*, *type: [lief.\_lief.ELF.Section.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE> "lief._lief.ELF.Section.TYPE")*) → [lief.\_lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief._lief.ELF.Section") | None******

Overloaded function.

1. `get(self, tag: lief._lief.ELF.DynamicEntry.TAG) -> lief._lief.ELF.DynamicEntry | None`

   > Return the first binary’s [`DynamicEntry`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief.ELF.DynamicEntry") from the given [`TAG`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG> "lief.ELF.DynamicEntry.TAG").
   >
   > It returns None if the dynamic entry can’t be found.
2. `get(self, type: lief._lief.ELF.Segment.TYPE) -> lief._lief.ELF.Segment | None`

   > Return the first binary’s [`Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment") from the given `SEGMENT_TYPES`
   >
   > It returns None if the segment can’t be found.
3. `get(self, type: lief._lief.ELF.Note.TYPE) -> lief._lief.ELF.Note | None`

   > Return the first binary’s [`Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief.ELF.Note") from the given [`TYPE`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE> "lief.ELF.Note.TYPE").
   >
   > It returns None if the note can’t be found.
4. `get(self, type: lief._lief.ELF.Section.TYPE) -> lief._lief.ELF.Section | None`

   > Return the first binary’s [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") from the given `ELF_SECTION_TYPES`
   >
   > It returns None if the section can’t be found.

#### [` get_dynamic_symbol `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.get_dynamic_symbol>)

get\_dynamic\_symbol(*self*, *symbol\_name: str*) → [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol") | None

Get the dynamic symbol from the given name.

It returns None if it can’t be found.

#### [` get_library `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.get_library>)

get\_library(*self*, *library\_name: str*) → [lief.\_lief.ELF.DynamicEntryLibrary](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryLibrary> "lief._lief.ELF.DynamicEntryLibrary") | None

Return the [`DynamicEntryLibrary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryLibrary> "lief.ELF.DynamicEntryLibrary") with the given `name`

It returns None if the library can’t be found.

#### [` get_relocated_dynamic_array `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.get_relocated_dynamic_array>)

get\_relocated\_dynamic\_array(*self*, *array\_tag: [lief.\_lief.ELF.DynamicEntry.TAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG> "lief._lief.ELF.DynamicEntry.TAG")*) → list[int]

Return the array defined by the given tag (e.g. [`INIT_ARRAY`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.INIT_ARRAY> "lief.ELF.DynamicEntry.TAG.INIT_ARRAY")) with relocations applied (if any)

#### [` get_relocationget_relocationget_relocation `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.get_relocation>)

get\_relocation(*self*, *symbol\_name: str*) → [lief.\_lief.ELF.Relocation](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation> "lief._lief.ELF.Relocation") | None

**get\_relocation(*self*, *symbol: [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol")*) → [lief.\_lief.ELF.Relocation](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation> "lief._lief.ELF.Relocation") | None

**get\_relocation(*self*, *address: int*) → [lief.\_lief.ELF.Relocation](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation> "lief._lief.ELF.Relocation") | None****

Overloaded function.

1. `get_relocation(self, symbol_name: str) -> lief._lief.ELF.Relocation | None`

Return the [`Relocation`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation> "lief.ELF.Relocation") associated with the given symbol name

2. `get_relocation(self, symbol: lief._lief.ELF.Symbol) -> lief._lief.ELF.Relocation | None`

Return the [`Relocation`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation> "lief.ELF.Relocation") associated with the given [`Symbol`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol")

3. `get_relocation(self, address: int) -> lief._lief.ELF.Relocation | None`

Return the [`Relocation`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation> "lief.ELF.Relocation") associated with the given address

#### [` get_section `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.get_section>)

get\_section(*self*, *section\_name: str*) → [lief.\_lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief._lief.ELF.Section") | None

Return the [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") with the given `name`

It returns None if the section can’t be found.

#### [` get_section_idxget_section_idx `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.get_section_idx>)

get\_section\_idx(*self*, *arg: [lief.\_lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief._lief.ELF.Section")*, */*) → int | [lief.\_lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief._lief.lief_errors")

**get\_section\_idx(*self*, *arg: str*, */*) → int | [lief.\_lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief._lief.lief_errors")**

Overloaded function.

1. `get_section_idx(self, arg: lief._lief.ELF.Section, /) -> Union[int, lief._lief.lief_errors]`

Find the index of the section given in the first parameter

2. `get_section_idx(self, arg: str, /) -> Union[int, lief._lief.lief_errors]`

Find the index of the section with the name given in the first parameter

#### [` get_strings `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.get_strings>)

get\_strings(*self*, *min\_size: int = 5*) → list[str]

Return list of strings used in the current ELF file with a minimal size given in first parameter (Default: 5) It looks for strings in the `.rodata` section

#### [` get_symtab_symbol `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.get_symtab_symbol>)

get\_symtab\_symbol(*self*, *symbol\_name: str*) → [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol") | None

Get the **static** symbol from the given `name`.

It returns None if it can’t be found.

#### [` gnu_hash `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.gnu_hash>)

property gnu\_hash → [lief.ELF.GnuHash](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.GnuHash> "lief.ELF.GnuHash") | None

Return the [`GnuHash`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.GnuHash> "lief.ELF.GnuHash") object

Hashes are used by the loader to speed up symbol resolution (GNU Version)

#### [` hashashashas `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.has>)

has(*self*, *tag: [lief.\_lief.ELF.DynamicEntry.TAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG> "lief._lief.ELF.DynamicEntry.TAG")*) → bool

**has(*self*, *type: [lief.\_lief.ELF.Segment.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE> "lief._lief.ELF.Segment.TYPE")*) → bool

**has(*self*, *type: [lief.\_lief.ELF.Note.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE> "lief._lief.ELF.Note.TYPE")*) → bool

**has(*self*, *type: [lief.\_lief.ELF.Section.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE> "lief._lief.ELF.Section.TYPE")*) → bool******

Overloaded function.

1. `has(self, tag: lief._lief.ELF.DynamicEntry.TAG) -> bool`

   > Check if there exists a [`DynamicEntry`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief.ELF.DynamicEntry") with the given [`TAG`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG> "lief.ELF.DynamicEntry.TAG")
2. `has(self, type: lief._lief.ELF.Segment.TYPE) -> bool`

Check if a [`Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment") of *type* (`SEGMENT_TYPES`) exists

3. `has(self, type: lief._lief.ELF.Note.TYPE) -> bool`

Check if a [`Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief.ELF.Note") of *type* ([`TYPE`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE> "lief.ELF.Note.TYPE")) exists

4. `has(self, type: lief._lief.ELF.Section.TYPE) -> bool`

Check if a [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") of *type* (`SECTION_TYPES`) exists

#### [` has_dynamic_symbol `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.has_dynamic_symbol>)

has\_dynamic\_symbol(*self*, *symbol\_name: str*) → bool

Check if the symbol with the given `name` exists in the **dynamic** symbol table

#### [` has_interpreter `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.has_interpreter>)

property has\_interpreter → bool

Check if the binary uses a loader (also named linker or interpreter)

#### [` has_library `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.has_library>)

has\_library(*self*, *library\_name: str*) → bool

Check if the given library name exists in the current binary

#### [` has_notes `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.has_notes>)

property has\_notes → bool

`True` if the binary contains notes

#### [` has_overlay `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.has_overlay>)

property has\_overlay → bool

True if data are appended to the end of the binary

#### [` has_section `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.has_section>)

has\_section(*self*, *section\_name: str*) → bool

Check if a [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") with the given name exists in the binary

#### [` has_section_with_offset `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.has_section_with_offset>)

has\_section\_with\_offset(*self*, *offset: int*) → bool

Check if a [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") that encompasses the given offset exists

#### [` has_section_with_va `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.has_section_with_va>)

has\_section\_with\_va(*self*, *virtual\_address: int*) → bool

Check if a [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") that encompasses the given virtual address exists

#### [` has_symtab_symbol `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.has_symtab_symbol>)

has\_symtab\_symbol(*self*, *symbol\_name: str*) → bool

Check if the symbol with the given `name` exists in the **static** symbol table

#### [` header `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.header>)

property header → [lief.ELF.Header](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header> "lief.ELF.Header")

Return [`Header`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header> "lief.ELF.Header") object

#### [` imagebase `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.imagebase>)

property imagebase → int

Return the program image base. (e.g. `0x400000`)

#### [` imported_symbols `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.imported_symbols>)

property imported\_symbols → lief.ELF.Binary.it\_filter\_symbols

Return dynamic [`Symbol`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol") which are imported

#### [` interpreter `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.interpreter>)

property interpreter → str

ELF interpreter (loader) if any. (e.g. `/lib64/ld-linux-x86-64.so.2`)

#### [` is_pie `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.is_pie>)

property is\_pie → bool

Check if the binary has been compiled with -fpie -pie flags

To do so we check if there is a PT\_INTERP segment and if the binary type is ET\_DYN (Shared object)

#### [` is_targeting_android `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.is_targeting_android>)

property is\_targeting\_android → bool

True if the current binary is targeting Android

#### [` last_offset_section `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.last_offset_section>)

property last\_offset\_section → int

Return the last offset used in binary according to **sections table**

#### [` last_offset_segment `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.last_offset_segment>)

property last\_offset\_segment → int

Return the last offset used in binary according to **segments table**

#### [` next_virtual_address `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.next_virtual_address>)

property next\_virtual\_address → int

Return the next virtual address available

#### [` notes `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.notes>)

property notes → lief.ELF.Binary.it\_notes

Return an iterator over the [`Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief.ELF.Note") entries

#### [` object_relocations `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.object_relocations>)

property object\_relocations → lief.ELF.Binary.it\_filter\_relocation

Return an iterator over object [`Relocation`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation> "lief.ELF.Relocation")

#### [` overlay `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.overlay>)

property overlay → memoryview

Overlay data that is not part of the ELF format

#### [` patch_pltgotpatch_pltgot `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.patch_pltgot>)

patch\_pltgot(*self*, *symbol\_name: str*, *address: int*) → None

**patch\_pltgot(*self*, *symbol: [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol")*, *address: int*) → None**

Overloaded function.

1. `patch_pltgot(self, symbol_name: str, address: int) -> None`

Patch the imported symbol’s name with the `address`

2. `patch_pltgot(self, symbol: lief._lief.ELF.Symbol, address: int) -> None`

Patch the imported [`Symbol`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol") with the `address`

#### [` permute_dynamic_symbols `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.permute_dynamic_symbols>)

permute\_dynamic\_symbols(*self*, *permutation: collections.abc.Sequence[int]*) → None

Apply the given permutation on the dynamic symbols table

#### [` pltgot_relocations `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.pltgot_relocations>)

property pltgot\_relocations → lief.ELF.Binary.it\_filter\_relocation

Return an iterator over PLT/GOT [`Relocation`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation> "lief.ELF.Relocation")

#### [` relocate_phdr_table `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.relocate_phdr_table>)

relocate\_phdr\_table(*self*, *type: [lief.\_lief.ELF.Binary.PHDR\_RELOC](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.PHDR_RELOC> "lief._lief.ELF.Binary.PHDR_RELOC") = PHDR\_RELOC.AUTO*) → int

Force relocating the segments table in a specific way (see: [`PHDR_RELOC`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.PHDR_RELOC> "lief.ELF.Binary.PHDR_RELOC")).

This function can be used to enforce a specific relocation of the segments table. Upon successful relocation, the function returns the offset of the relocated segments table. Otherwise, if the function fails, it returns 0

#### [` relocations `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.relocations>)

property relocations → lief.ELF.Binary.it\_relocations

Return an iterator over **all** [`Relocation`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation> "lief.ELF.Relocation")

#### [` removeremoveremoveremoveremoveremoveremove `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.remove>)

remove(*self*, *dynamic\_entry: [lief.\_lief.ELF.DynamicEntry](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief._lief.ELF.DynamicEntry")*) → None

**remove(*self*, *tag: [lief.\_lief.ELF.DynamicEntry.TAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG> "lief._lief.ELF.DynamicEntry.TAG")*) → None

**remove(*self*, *section: [lief.\_lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief._lief.ELF.Section")*, *clear: bool = False*) → None

**remove(*self*, *segment: [lief.\_lief.ELF.Segment](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief._lief.ELF.Segment")*, *clear: bool = False*) → None

**remove(*self*, *type: [lief.\_lief.ELF.Segment.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE> "lief._lief.ELF.Segment.TYPE")*, *clear: bool = False*) → None

**remove(*self*, *note: [lief.\_lief.ELF.Note](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief._lief.ELF.Note")*) → None

**remove(*self*, *type: [lief.\_lief.ELF.Note.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE> "lief._lief.ELF.Note.TYPE")*) → None************

Overloaded function.

1. `remove(self, dynamic_entry: lief._lief.ELF.DynamicEntry) -> None`

Remove the given [`DynamicEntry`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief.ELF.DynamicEntry") from the dynamic table

2. `remove(self, tag: lief._lief.ELF.DynamicEntry.TAG) -> None`

Remove **all** the [`DynamicEntry`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief.ELF.DynamicEntry") with the given [`TAG`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG> "lief.ELF.DynamicEntry.TAG")

3. `remove(self, section: lief._lief.ELF.Section, clear: bool = False) -> None`

Remove the given [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section"). The `clear` parameter specifies whether or not we must fill its content with `0` before removing

4. `remove(self, segment: lief._lief.ELF.Segment, clear: bool = False) -> None`

   > Remove the segment provided in parameter. If `clear` is set, the original content of the segment will be filled with zeros before removal.
5. `remove(self, type: lief._lief.ELF.Segment.TYPE, clear: bool = False) -> None`

   > Remove **all** segments with the given type. If `clear` is set, the original content of the segment will be filled with zeros before removal.
6. `remove(self, note: lief._lief.ELF.Note) -> None`

Remove the given [`Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief.ELF.Note")

7. `remove(self, type: lief._lief.ELF.Note.TYPE) -> None`

Remove **all** the [`Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief.ELF.Note") with the given [`TYPE`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE> "lief.ELF.Note.TYPE")

#### [` remove_dynamic_symbolremove_dynamic_symbol `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.remove_dynamic_symbol>)

remove\_dynamic\_symbol(*self*, *arg: [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol")*, */*) → None

**remove\_dynamic\_symbol(*self*, *arg: str*, */*) → None**

Overloaded function.

1. `remove_dynamic_symbol(self, arg: lief._lief.ELF.Symbol, /) -> None`

Remove the given [`Symbol`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol") from the `.dynsym` section

2. `remove_dynamic_symbol(self, arg: str, /) -> None`

Remove the [`Symbol`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol") with the name given in parameter from the `.dynsym` section

#### [` remove_library `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.remove_library>)

remove\_library(*self*, *library\_name: str*) → None

Remove the given library

#### [` remove_symtab_symbol `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.remove_symtab_symbol>)

remove\_symtab\_symbol(*self*, *arg: [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol")*, */*) → None

Remove the given [`Symbol`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol") from the `.symtab` section

#### [` remove_version_requirement `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.remove_version_requirement>)

remove\_version\_requirement(*self*, *libname: str*) → bool

Deletes all required symbol versions linked to the specified library name. The function returns true if the operation succeeds, false otherwise.

> **Warning**
> 
> To maintain consistency, this function also removes versions associated with dynamic symbols that are linked to the specified library name.

#### [` replace `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.replace>)

replace(*self*, *new\_segment: [lief.\_lief.ELF.Segment](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief._lief.ELF.Segment")*, *original\_segment: [lief.\_lief.ELF.Segment](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief._lief.ELF.Segment")*, *base: int = 0*) → [lief.\_lief.ELF.Segment](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief._lief.ELF.Segment") | None

Replace the [`Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment") given in 2nd parameter with the [`Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment") given in the first parameter and return the updated segment.

> **Warning**
> 
> The `original_segment` is no longer valid after this function

#### [` section_from_offset `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.section_from_offset>)

section\_from\_offset(*self*, *offset: int*, *skip\_nobits: bool = True*) → [lief.\_lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief._lief.ELF.Section") | None

Return the [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") which encompasses the given offset. It returns None if a section can’t be found.

If `skip_nobits` is set (which is the case by default), this function won’t consider sections for which the type is `SHT_NOBITS` (like `.bss, .tbss, ...`)

#### [` section_from_virtual_address `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.section_from_virtual_address>)

section\_from\_virtual\_address(*self*, *address: int*, *skip\_nobits: bool = True*) → [lief.\_lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief._lief.ELF.Section") | None

Return the [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") which encompasses the given virtual address. It returns None if a section can’t be found.

If `skip_nobits` is set (which is the case by default), this function won’t consider sections for which the type is `SHT_NOBITS` (like `.bss, .tbss, ...`)

#### [` sections `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.sections>)

property sections → lief.ELF.Binary.it\_sections

Return an iterator over binary’s [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section")

#### [` segment_from_offset `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.segment_from_offset>)

segment\_from\_offset(*self*, *offset: int*) → [lief.\_lief.ELF.Segment](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief._lief.ELF.Segment") | None

Return the [`Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment") which encompasses the given offset. It returns None if a segment can’t be found.

#### [` segment_from_virtual_address `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.segment_from_virtual_address>)

segment\_from\_virtual\_address(*self*, *address: int*) → [lief.\_lief.ELF.Segment](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief._lief.ELF.Segment") | None

Return the [`Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment") which encompasses the given virtual address. It returns None if a segment can’t be found.

#### [` segments `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.segments>)

property segments → lief.ELF.Binary.it\_segments

Return an iterator to binary’s [`Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment")

#### [` strings `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.strings>)

property strings → list[str | bytes]

Return list of strings used in the current ELF file. Basically this function looks for strings in the `.rodata` section

#### [` strip `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.strip>)

strip(*self*) → None

Strip the binary

#### [` symbols `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.symbols>)

property symbols → lief.ELF.Binary.it\_dyn\_symtab\_symbols

Return an iterator over both **static** and **dynamic** [`Symbol`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol")

#### [` symbols_version `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.symbols_version>)

property symbols\_version → lief.ELF.Binary.it\_symbols\_version

Return an iterator over [`SymbolVersion`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion> "lief.ELF.SymbolVersion")

#### [` symbols_version_definition `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.symbols_version_definition>)

property symbols\_version\_definition → lief.ELF.Binary.it\_symbols\_version\_definition

Return an iterator to [`SymbolVersionDefinition`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionDefinition> "lief.ELF.SymbolVersionDefinition")

#### [` symbols_version_requirement `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.symbols_version_requirement>)

property symbols\_version\_requirement → lief.ELF.Binary.it\_symbols\_version\_requirement

Return an iterator to [`SymbolVersionRequirement`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionRequirement> "lief.ELF.SymbolVersionRequirement")

#### [` symtab_idxsymtab_idx `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.symtab_idx>)

symtab\_idx(*self*, *name: str*) → int

**symtab\_idx(*self*, *symbol: [lief.\_lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief._lief.ELF.Symbol")*) → int**

Overloaded function.

1. `symtab_idx(self, name: str) -> int`

   > Get the symbol index in the `.symtab` section from the given name or return -1 if the symbol does not exist.
2. `symtab_idx(self, symbol: lief._lief.ELF.Symbol) -> int`

   > Get the symbol index in the `.symtab` section or return -1 if the symbol does not exist

#### [` symtab_symbols `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.symtab_symbols>)

property symtab\_symbols → lief.ELF.Binary.it\_symbols

Return an iterator to static [`Symbol`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol")

#### [` sysv_hash `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.sysv_hash>)

property sysv\_hash → [lief.ELF.SysvHash](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SysvHash> "lief.ELF.SysvHash") | None

Return the [`SysvHash`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SysvHash> "lief.ELF.SysvHash") object

Hashes are used by the loader to speed up symbol resolution (SYSV version)

#### [` type `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.type>)

property type → [lief.ELF.Header.CLASS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.CLASS> "lief.ELF.Header.CLASS")

Return the binary’s `ELF_CLASS`

#### [` use_gnu_hash `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.use_gnu_hash>)

property use\_gnu\_hash → bool

`True` if GNU hash is used

#### [` use_sysv_hash `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.use_sysv_hash>)

property use\_sysv\_hash → bool

`True` if SYSV hash is used

#### [` virtual_address_to_offset `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.virtual_address_to_offset>)

virtual\_address\_to\_offset(*self*, *virtual\_address: int*) → int | [lief.\_lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief._lief.lief_errors")

Convert the virtual address to a file offset

#### [` virtual_size `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.virtual_size>)

property virtual\_size → int

Return the size of the mapped binary

#### [` writewrite `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.write>)

write(*self*, *output: str | os.PathLike*) → None

**write(*self*, *output: str | os.PathLike*, *config: [lief.\_lief.ELF.Builder.config\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t> "lief._lief.ELF.Builder.config_t")*) → None**

Overloaded function.

1. `write(self, output: Union[str | os.PathLike]) -> None`

Rebuild the binary and write it in a file

2. `write(self, output: Union[str | os.PathLike], config: lief._lief.ELF.Builder.config_t) -> None`

Rebuild the binary with the given configuration and write it in a file

#### [` write_to_byteswrite_to_bytes `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary.write_to_bytes>)

write\_to\_bytes(*self*, *config: [lief.\_lief.ELF.Builder.config\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t> "lief._lief.ELF.Builder.config_t")*) → bytes

**write\_to\_bytes(*self*) → bytes**

---

## [Header](<https://lief.re/doc/latest/formats/elf/python.html#header>)

### [` lief.ELF.Header `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header>)

class lief.ELF.Header(*self*)

Bases: `Object`

Class which represents the ELF’s header. This class mirrors the raw ELF `Elfxx_Ehdr` structure.

#### [` CLASS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.CLASS>)

class CLASS(*\*values*)

Bases: `Enum`

Matches the result of `Elfxx_Ehdr.e_ident[EI_CLASS]`

##### [` ELF32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.CLASS.ELF32>)

ELF32 = 1

##### [` ELF64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.CLASS.ELF64>)

ELF64 = 2

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.CLASS.NONE>)

NONE = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.CLASS.from_value>)

from\_value(*arg: int*) → [lief.ELF.Header.CLASS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.CLASS> "lief.ELF.Header.CLASS") = &lt;nanobind.nb\_func object&gt;

#### [` ELF_DATA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.ELF_DATA>)

class ELF\_DATA(*\*values*)

Bases: `Enum`

Matches the result of `Elfxx_Ehdr.e_ident[EI_DATA]`

##### [` LSB `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.ELF_DATA.LSB>)

LSB = 1

##### [` MSB `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.ELF_DATA.MSB>)

MSB = 2

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.ELF_DATA.NONE>)

NONE = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.ELF_DATA.from_value>)

from\_value(*arg: int*) → [lief.ELF.Header.ELF\_DATA](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.ELF_DATA> "lief.ELF.Header.ELF_DATA") = &lt;nanobind.nb\_func object&gt;

#### [` FILE_TYPE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.FILE_TYPE>)

class FILE\_TYPE(*\*values*)

Bases: `Enum`

The type of the underlying ELF file. This enum matches the semantic of `ET_NONE`, `ET_REL`, …

##### [` CORE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.FILE_TYPE.CORE>)

CORE = 4

##### [` DYN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.FILE_TYPE.DYN>)

DYN = 3

##### [` EXEC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.FILE_TYPE.EXEC>)

EXEC = 2

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.FILE_TYPE.NONE>)

NONE = 0

##### [` REL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.FILE_TYPE.REL>)

REL = 1

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.FILE_TYPE.from_value>)

from\_value(*arg: int*) → [lief.ELF.Header.FILE\_TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.FILE_TYPE> "lief.ELF.Header.FILE_TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` OS_ABI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI>)

class OS\_ABI(*\*values*)

Bases: `Enum`

##### [` AIX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.AIX>)

AIX = 7

##### [` AMDGPU_HSA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.AMDGPU_HSA>)

AMDGPU\_HSA = 64

##### [` ARM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.ARM>)

ARM = 97

##### [` AROS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.AROS>)

AROS = 15

##### [` C6000_LINUX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.C6000_LINUX>)

C6000\_LINUX = 65

##### [` CLOUDABI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.CLOUDABI>)

CLOUDABI = 17

##### [` FENIXOS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.FENIXOS>)

FENIXOS = 16

##### [` FREEBSD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.FREEBSD>)

FREEBSD = 9

##### [` HPUX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.HPUX>)

HPUX = 1

##### [` HURD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.HURD>)

HURD = 4

##### [` IRIX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.IRIX>)

IRIX = 8

##### [` LINUX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.LINUX>)

LINUX = 3

##### [` MODESTO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.MODESTO>)

MODESTO = 11

##### [` NETBSD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.NETBSD>)

NETBSD = 2

##### [` NSK `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.NSK>)

NSK = 14

##### [` OPENBSD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.OPENBSD>)

OPENBSD = 12

##### [` OPENVMS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.OPENVMS>)

OPENVMS = 13

##### [` SOLARIS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.SOLARIS>)

SOLARIS = 6

##### [` STANDALONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.STANDALONE>)

STANDALONE = 255

##### [` SYSTEMV `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.SYSTEMV>)

SYSTEMV = 0

##### [` TRU64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.TRU64>)

TRU64 = 10

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI.from_value>)

from\_value(*arg: int*) → [lief.ELF.Header.OS\_ABI](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI> "lief.ELF.Header.OS_ABI") = &lt;nanobind.nb\_func object&gt;

#### [` VERSION `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.VERSION>)

class VERSION(*\*values*)

Bases: `Enum`

Matches the result of `Elfxx_Ehdr.e_version`

##### [` CURRENT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.VERSION.CURRENT>)

CURRENT = 1

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.VERSION.NONE>)

NONE = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.VERSION.from_value>)

from\_value(*arg: int*) → [lief.ELF.Header.VERSION](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.VERSION> "lief.ELF.Header.VERSION") = &lt;nanobind.nb\_func object&gt;

#### [` entrypoint `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.entrypoint>)

property entrypoint → int

Return the binary entry point

#### [` file_type `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.file_type>)

property file\_type → [lief.ELF.Header.FILE\_TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.FILE_TYPE> "lief.ELF.Header.FILE_TYPE")

Return binary’s type. This field determines if the binary is an executable, a library…

#### [` flags_list `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.flags_list>)

property flags\_list → list[[lief.ELF.PROCESSOR\_FLAGS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS> "lief.ELF.PROCESSOR_FLAGS")]

Processor flags as a list

#### [` has `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.has>)

has(*self*, *arg: [lief.\_lief.ELF.PROCESSOR\_FLAGS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS> "lief._lief.ELF.PROCESSOR_FLAGS")*, */*) → bool

Check if the given processor flag is present

#### [` header_size `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.header_size>)

property header\_size → int

Return the size of the ELF header This size should be 64 for an `ELF64` binary and 52 for an `ELF32`.

#### [` identity `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.identity>)

property identity → list[int]

Header’s identity.

#### [` identity_abi_version `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.identity_abi_version>)

property identity\_abi\_version → int

Return the ABI version (integer).

#### [` identity_class `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.identity_class>)

property identity\_class → [lief.ELF.Header.CLASS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.CLASS> "lief.ELF.Header.CLASS")

Header’s class.

#### [` identity_data `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.identity_data>)

property identity\_data → [lief.ELF.Header.ELF\_DATA](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.ELF_DATA> "lief.ELF.Header.ELF_DATA")

Specify the data encoding

#### [` identity_os_abi `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.identity_os_abi>)

property identity\_os\_abi → [lief.ELF.Header.OS\_ABI](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.OS_ABI> "lief.ELF.Header.OS_ABI")

Identifies the version of the ABI for which the object is prepared.

#### [` identity_version `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.identity_version>)

property identity\_version → [lief.ELF.Header.VERSION](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.VERSION> "lief.ELF.Header.VERSION")

#### [` is_mips_n64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.is_mips_n64>)

property is\_mips\_n64 → bool

Whether this header uses the MIPS n64 ELF encoding

#### [` machine_type `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.machine_type>)

property machine\_type → [lief.ELF.ARCH](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH> "lief.ELF.ARCH")

Return the target architecture

#### [` numberof_sections `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.numberof_sections>)

property numberof\_sections → int

Return the number of sections

#### [` numberof_segments `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.numberof_segments>)

property numberof\_segments → int

Return the number of program headers (segments)

#### [` object_file_version `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.object_file_version>)

property object\_file\_version → [lief.ELF.Header.VERSION](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.VERSION> "lief.ELF.Header.VERSION")

Return the version

#### [` processor_flag `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.processor_flag>)

property processor\_flag → int

Processor-specific flags

#### [` program_header_offset `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.program_header_offset>)

property program\_header\_offset → int

Offset of program table (also known as segments table)

#### [` program_header_size `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.program_header_size>)

property program\_header\_size → int

Return the size of the raw `Elfxx_Phdr` structure (see [`lief.ELF.Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment")) This size should be 56 for an `ELF64` binary and 32 for an `ELF32`.

#### [` section_header_offset `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.section_header_offset>)

property section\_header\_offset → int

Offset of section table

#### [` section_header_size `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.section_header_size>)

property section\_header\_size → int

Return the size of the raw `Elfxx_Shdr` ([`lief.ELF.Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section"))

This size should be 64 for an `ELF64` binary and 40 for an `ELF32`.

#### [` section_name_table_idx `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.section_name_table_idx>)

property section\_name\_table\_idx → int

Return the section index which contains sections’ names

---

## [Section](<https://lief.re/doc/latest/formats/elf/python.html#section>)

![Inheritance diagram of lief._lief.ELF.Section](https://lief.re/doc/latest/_images/inheritance-6fafd2b22f5754171cd64a3e425543272ae6ff11.png)

### [` lief.ELF.Sectionlief.ELF.Section `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section>)

class lief.ELF.Section(*self*)

**class lief.ELF.Section(*self*, *name: str*, *type: [lief.\_lief.ELF.Section.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE> "lief._lief.ELF.Section.TYPE") = TYPE.PROGBITS*)**

Bases: [`Section`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section> "lief._lief.Section")

Class which represents an ELF section.

Overloaded function.

1. `__init__(self) -> None`

Default constructor

2. `__init__(self, name: str, type: lief._lief.ELF.Section.TYPE = TYPE.PROGBITS) -> None`

Constructor from a name and a section type

#### [` FLAGS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS>)

class FLAGS(*\*values*)

Bases: `Flag`

##### [` AARCH64_PURECODE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.AARCH64_PURECODE>)

AARCH64\_PURECODE = 26306674688

##### [` ALLOC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.ALLOC>)

ALLOC = 2

##### [` ARM_PURECODE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.ARM_PURECODE>)

ARM\_PURECODE = 22011707392

##### [` COMPRESSED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.COMPRESSED>)

COMPRESSED = 2048

##### [` EXCLUDE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.EXCLUDE>)

EXCLUDE = 2147483648

##### [` EXECINSTR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.EXECINSTR>)

EXECINSTR = 4

##### [` GNU_RETAIN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.GNU_RETAIN>)

GNU\_RETAIN = 2097152

##### [` GROUP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.GROUP>)

GROUP = 512

##### [` HEX_GPREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.HEX_GPREL>)

HEX\_GPREL = 13153337344

##### [` INFO_LINK `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.INFO_LINK>)

INFO\_LINK = 64

##### [` LINK_ORDER `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.LINK_ORDER>)

LINK\_ORDER = 128

##### [` MERGE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.MERGE>)

MERGE = 16

##### [` MIPS_ADDR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.MIPS_ADDR>)

MIPS\_ADDR = 18253611008

##### [` MIPS_GPREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.MIPS_GPREL>)

MIPS\_GPREL = 17448304640

##### [` MIPS_LOCAL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.MIPS_LOCAL>)

MIPS\_LOCAL = 17246978048

##### [` MIPS_MERGE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.MIPS_MERGE>)

MIPS\_MERGE = 17716740096

##### [` MIPS_NAMES `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.MIPS_NAMES>)

MIPS\_NAMES = 17213423616

##### [` MIPS_NODUPES `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.MIPS_NODUPES>)

MIPS\_NODUPES = 17196646400

##### [` MIPS_NOSTRIP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.MIPS_NOSTRIP>)

MIPS\_NOSTRIP = 17314086912

##### [` MIPS_STRING `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.MIPS_STRING>)

MIPS\_STRING = 19327352832

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.NONE>)

NONE = 0

##### [` OS_NONCONFORMING `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.OS_NONCONFORMING>)

OS\_NONCONFORMING = 256

##### [` STRINGS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.STRINGS>)

STRINGS = 32

##### [` TLS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.TLS>)

TLS = 1024

##### [` WRITE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.WRITE>)

WRITE = 1

##### [` X86_64_LARGE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.X86_64_LARGE>)

X86\_64\_LARGE = 8858370048

##### [` XCORE_SHF_CP_SECTION `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.XCORE_SHF_CP_SECTION>)

XCORE\_SHF\_CP\_SECTION = 4831838208

##### [` XCORE_SHF_DP_SECTION `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.XCORE_SHF_DP_SECTION>)

XCORE\_SHF\_DP\_SECTION = 4563402752

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS.from_value>)

from\_value(*arg: int*) → [lief.ELF.Section.FLAGS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS> "lief.ELF.Section.FLAGS") = &lt;nanobind.nb\_func object&gt;

#### [` TYPE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

##### [` AARCH64_ATTRIBUTES `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.AARCH64_ATTRIBUTES>)

AARCH64\_ATTRIBUTES = 23353884675

##### [` AARCH64_AUTH_RELR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.AARCH64_AUTH_RELR>)

AARCH64\_AUTH\_RELR = 23353884676

##### [` AARCH64_MEMTAG_GLOBALS_DYNAMIC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.AARCH64_MEMTAG_GLOBALS_DYNAMIC>)

AARCH64\_MEMTAG\_GLOBALS\_DYNAMIC = 23353884680

##### [` AARCH64_MEMTAG_GLOBALS_STATIC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.AARCH64_MEMTAG_GLOBALS_STATIC>)

AARCH64\_MEMTAG\_GLOBALS\_STATIC = 23353884679

##### [` ANDROID_REL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.ANDROID_REL>)

ANDROID\_REL = 1610612737

##### [` ANDROID_RELA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.ANDROID_RELA>)

ANDROID\_RELA = 1610612738

##### [` ANDROID_RELR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.ANDROID_RELR>)

ANDROID\_RELR = 1879047936

##### [` ARM_ATTRIBUTES `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.ARM_ATTRIBUTES>)

ARM\_ATTRIBUTES = 6174015491

##### [` ARM_DEBUGOVERLAY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.ARM_DEBUGOVERLAY>)

ARM\_DEBUGOVERLAY = 6174015492

##### [` ARM_EXIDX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.ARM_EXIDX>)

ARM\_EXIDX = 6174015489

##### [` ARM_OVERLAYSECTION `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.ARM_OVERLAYSECTION>)

ARM\_OVERLAYSECTION = 6174015493

##### [` ARM_PREEMPTMAP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.ARM_PREEMPTMAP>)

ARM\_PREEMPTMAP = 6174015490

##### [` DYNAMIC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.DYNAMIC>)

DYNAMIC = 6

##### [` DYNSYM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.DYNSYM>)

DYNSYM = 11

##### [` FINI_ARRAY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.FINI_ARRAY>)

FINI\_ARRAY = 15

##### [` GNU_ATTRIBUTES `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.GNU_ATTRIBUTES>)

GNU\_ATTRIBUTES = 1879048181

##### [` GNU_HASH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.GNU_HASH>)

GNU\_HASH = 1879048182

##### [` GNU_VERDEF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.GNU_VERDEF>)

GNU\_VERDEF = 1879048189

##### [` GNU_VERNEED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.GNU_VERNEED>)

GNU\_VERNEED = 1879048190

##### [` GNU_VERSYM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.GNU_VERSYM>)

GNU\_VERSYM = 1879048191

##### [` GROUP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.GROUP>)

GROUP = 17

##### [` HASH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.HASH>)

HASH = 5

##### [` HEX_ORDERED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.HEX_ORDERED>)

HEX\_ORDERED = 10468982784

##### [` INIT_ARRAY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.INIT_ARRAY>)

INIT\_ARRAY = 14

##### [` LLVM_ADDRSIG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.LLVM_ADDRSIG>)

LLVM\_ADDRSIG = 1879002115

##### [` MIPS_ABIFLAGS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_ABIFLAGS>)

MIPS\_ABIFLAGS = 14763950122

##### [` MIPS_AUXSYM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_AUXSYM>)

MIPS\_AUXSYM = 14763950102

##### [` MIPS_CONFLICT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_CONFLICT>)

MIPS\_CONFLICT = 14763950082

##### [` MIPS_CONTENT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_CONTENT>)

MIPS\_CONTENT = 14763950092

##### [` MIPS_DEBUG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_DEBUG>)

MIPS\_DEBUG = 14763950085

##### [` MIPS_DELTACLASS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_DELTACLASS>)

MIPS\_DELTACLASS = 14763950109

##### [` MIPS_DELTADECL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_DELTADECL>)

MIPS\_DELTADECL = 14763950111

##### [` MIPS_DELTAINST `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_DELTAINST>)

MIPS\_DELTAINST = 14763950108

##### [` MIPS_DELTASYM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_DELTASYM>)

MIPS\_DELTASYM = 14763950107

##### [` MIPS_DENSE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_DENSE>)

MIPS\_DENSE = 14763950099

##### [` MIPS_DWARF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_DWARF>)

MIPS\_DWARF = 14763950110

##### [` MIPS_EH_REGION `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_EH_REGION>)

MIPS\_EH\_REGION = 14763950119

##### [` MIPS_EVENTS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_EVENTS>)

MIPS\_EVENTS = 14763950113

##### [` MIPS_EXTSYM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_EXTSYM>)

MIPS\_EXTSYM = 14763950098

##### [` MIPS_FDESC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_FDESC>)

MIPS\_FDESC = 14763950097

##### [` MIPS_GPTAB `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_GPTAB>)

MIPS\_GPTAB = 14763950083

##### [` MIPS_IFACE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_IFACE>)

MIPS\_IFACE = 14763950091

##### [` MIPS_LIBLIST `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_LIBLIST>)

MIPS\_LIBLIST = 14763950080

##### [` MIPS_LINE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_LINE>)

MIPS\_LINE = 14763950105

##### [` MIPS_LOCSTR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_LOCSTR>)

MIPS\_LOCSTR = 14763950104

##### [` MIPS_LOCSYM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_LOCSYM>)

MIPS\_LOCSYM = 14763950101

##### [` MIPS_MSYM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_MSYM>)

MIPS\_MSYM = 14763950081

##### [` MIPS_OPTIONS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_OPTIONS>)

MIPS\_OPTIONS = 14763950093

##### [` MIPS_OPTSYM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_OPTSYM>)

MIPS\_OPTSYM = 14763950103

##### [` MIPS_PACKAGE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_PACKAGE>)

MIPS\_PACKAGE = 14763950087

##### [` MIPS_PACKSYM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_PACKSYM>)

MIPS\_PACKSYM = 14763950088

##### [` MIPS_PDESC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_PDESC>)

MIPS\_PDESC = 14763950100

##### [` MIPS_PDR_EXCEPTION `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_PDR_EXCEPTION>)

MIPS\_PDR\_EXCEPTION = 14763950121

##### [` MIPS_PIXIE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_PIXIE>)

MIPS\_PIXIE = 14763950115

##### [` MIPS_REGINFO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_REGINFO>)

MIPS\_REGINFO = 14763950086

##### [` MIPS_RELD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_RELD>)

MIPS\_RELD = 14763950089

##### [` MIPS_RFDESC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_RFDESC>)

MIPS\_RFDESC = 14763950106

##### [` MIPS_SHDR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_SHDR>)

MIPS\_SHDR = 14763950096

##### [` MIPS_SYMBOL_LIB `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_SYMBOL_LIB>)

MIPS\_SYMBOL\_LIB = 14763950112

##### [` MIPS_TRANSLATE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_TRANSLATE>)

MIPS\_TRANSLATE = 14763950114

##### [` MIPS_UCODE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_UCODE>)

MIPS\_UCODE = 14763950084

##### [` MIPS_WHIRL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_WHIRL>)

MIPS\_WHIRL = 14763950118

##### [` MIPS_XHASH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_XHASH>)

MIPS\_XHASH = 14763950123

##### [` MIPS_XLATE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_XLATE>)

MIPS\_XLATE = 14763950116

##### [` MIPS_XLATE_DEBUG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_XLATE_DEBUG>)

MIPS\_XLATE\_DEBUG = 14763950117

##### [` MIPS_XLATE_OLD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.MIPS_XLATE_OLD>)

MIPS\_XLATE\_OLD = 14763950120

##### [` NOBITS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.NOBITS>)

NOBITS = 8

##### [` NOTE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.NOTE>)

NOTE = 7

##### [` PREINIT_ARRAY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.PREINIT_ARRAY>)

PREINIT\_ARRAY = 16

##### [` PROGBITS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.PROGBITS>)

PROGBITS = 1

##### [` REL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.REL>)

REL = 9

##### [` RELA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.RELA>)

RELA = 4

##### [` RELR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.RELR>)

RELR = 19

##### [` RISCV_ATTRIBUTES `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.RISCV_ATTRIBUTES>)

RISCV\_ATTRIBUTES = 19058917379

##### [` SHLIB `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.SHLIB>)

SHLIB = 10

##### [` SHT_NULL_ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.SHT_NULL_>)

SHT\_NULL\_ = 0

##### [` STRTAB `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.STRTAB>)

STRTAB = 3

##### [` SYMTAB `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.SYMTAB>)

SYMTAB = 2

##### [` SYMTAB_SHNDX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.SYMTAB_SHNDX>)

SYMTAB\_SHNDX = 18

##### [` X86_64_UNWIND `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.X86_64_UNWIND>)

X86\_64\_UNWIND = 10468982785

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE.from_value>)

from\_value(*arg: int*) → [lief.ELF.Section.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE> "lief.ELF.Section.TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` add `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.add>)

add(*self*, *flag: [lief.\_lief.ELF.Section.FLAGS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS> "lief._lief.ELF.Section.FLAGS")*) → None

Add the given flag to the list of [`flags`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.flags> "lief.ELF.Section.flags")

#### [` alignment `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.alignment>)

property alignment → int

Section alignment

#### [` as_frame `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.as_frame>)

as\_frame(*self*) → [lief.\_lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief._lief.ELF.Section")

#### [` clear `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.clear>)

clear(*self*, *value: int = 0*) → [lief.\_lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief._lief.ELF.Section")

Clear the content of the section with the given `value`

#### [` entry_size `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.entry_size>)

property entry\_size → int

This property returns the size of an element in the case of a section that contains an array.

**Example:**

The .dynamic section contains an array of [`DynamicEntry`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief.ELF.DynamicEntry"). As the size of the raw C structure of this entry is 0x10 (`sizeof(Elf64_Dyn)`) in a ELF64, the [`entry_size`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.entry_size> "lief.ELF.Section.entry_size"), is set to this value.

#### [` file_offset `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.file_offset>)

property file\_offset → int

Offset of the section’s content

#### [` flags `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.flags>)

property flags → int

Return the section’s flags as an integer

#### [` flags_list `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.flags_list>)

property flags\_list → list[[lief.ELF.Section.FLAGS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS> "lief.ELF.Section.FLAGS")]

Return section’s flags as a list

#### [` hashas `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.has>)

has(*self*, *flag: [lief.\_lief.ELF.Section.FLAGS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS> "lief._lief.ELF.Section.FLAGS")*) → bool

**has(*self*, *segment: [lief.\_lief.ELF.Segment](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief._lief.ELF.Segment")*) → bool**

Overloaded function.

1. `has(self, flag: lief._lief.ELF.Section.FLAGS) -> bool`

Check if the given flag is present

2. `has(self, segment: lief._lief.ELF.Segment) -> bool`

Check if the given [`Segment`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment") is present in [`segments`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.segments> "lief.ELF.Section.segments")

#### [` information `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.information>)

property information → int

Section information (this value depends on the section)

#### [` is_frame `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.is_frame>)

property is\_frame → bool

#### [` link `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.link>)

property link → int

Index to another section

#### [` original_size `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.original_size>)

property original\_size → int

Original size of the section’s data.

This value is used by the [`Builder`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder> "lief.ELF.Builder") to determine if it needs to be relocated to avoid an overwrite of the data

#### [` remove `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.remove>)

remove(*self*, *flag: [lief.\_lief.ELF.Section.FLAGS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.FLAGS> "lief._lief.ELF.Section.FLAGS")*) → None

Remove the given flag from the list of [`flags`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.flags> "lief.ELF.Section.flags")

#### [` segments `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.segments>)

property segments → lief.ELF.Section.it\_segments

Return segment(s) associated with the given section

#### [` type `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.type>)

property type → [lief.ELF.Section.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section.TYPE> "lief.ELF.Section.TYPE")

Return the type of the section

---

## [Segment](<https://lief.re/doc/latest/formats/elf/python.html#segment>)

### [` lief.ELF.Segment `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment>)

class lief.ELF.Segment(*self*)

Bases: `Object`

Class which represents the ELF segments

#### [` FLAGS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.FLAGS>)

class FLAGS(*\*values*)

Bases: `Flag`

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.FLAGS.NONE>)

NONE = 0

##### [` R `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.FLAGS.R>)

R = 4

##### [` W `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.FLAGS.W>)

W = 2

##### [` X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.FLAGS.X>)

X = 1

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.FLAGS.from_value>)

from\_value(*arg: int*) → [lief.ELF.Segment.FLAGS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.FLAGS> "lief.ELF.Segment.FLAGS") = &lt;nanobind.nb\_func object&gt;

#### [` TYPE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

##### [` AARCH64_MEMTAG_MTE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.AARCH64_MEMTAG_MTE>)

AARCH64\_MEMTAG\_MTE = 19058917378

##### [` ARM_ARCHEXT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.ARM_ARCHEXT>)

ARM\_ARCHEXT = 10468982784

##### [` ARM_EXIDX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.ARM_EXIDX>)

ARM\_EXIDX = 10468982785

##### [` DYNAMIC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.DYNAMIC>)

DYNAMIC = 2

##### [` GNU_EH_FRAME `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.GNU_EH_FRAME>)

GNU\_EH\_FRAME = 1685382480

##### [` GNU_PROPERTY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.GNU_PROPERTY>)

GNU\_PROPERTY = 1685382483

##### [` GNU_RELRO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.GNU_RELRO>)

GNU\_RELRO = 1685382482

##### [` GNU_STACK `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.GNU_STACK>)

GNU\_STACK = 1685382481

##### [` HP_CORE_COMM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.HP_CORE_COMM>)

HP\_CORE\_COMM = 9007200865353732

##### [` HP_CORE_KERNEL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.HP_CORE_KERNEL>)

HP\_CORE\_KERNEL = 9007200865353731

##### [` HP_CORE_LOADABLE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.HP_CORE_LOADABLE>)

HP\_CORE\_LOADABLE = 9007200865353734

##### [` HP_CORE_MMF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.HP_CORE_MMF>)

HP\_CORE\_MMF = 9007200865353737

##### [` HP_CORE_NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.HP_CORE_NONE>)

HP\_CORE\_NONE = 9007200865353729

##### [` HP_CORE_PROC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.HP_CORE_PROC>)

HP\_CORE\_PROC = 9007200865353733

##### [` HP_CORE_SHM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.HP_CORE_SHM>)

HP\_CORE\_SHM = 9007200865353736

##### [` HP_CORE_STACK `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.HP_CORE_STACK>)

HP\_CORE\_STACK = 9007200865353735

##### [` HP_CORE_UTSNAME `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.HP_CORE_UTSNAME>)

HP\_CORE\_UTSNAME = 9007200865353749

##### [` HP_CORE_VERSION `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.HP_CORE_VERSION>)

HP\_CORE\_VERSION = 9007200865353730

##### [` HP_FASTBIND `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.HP_FASTBIND>)

HP\_FASTBIND = 9007200865353745

##### [` HP_HSL_ANNOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.HP_HSL_ANNOT>)

HP\_HSL\_ANNOT = 9007200865353747

##### [` HP_OPT_ANNOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.HP_OPT_ANNOT>)

HP\_OPT\_ANNOT = 9007200865353746

##### [` HP_PARALLEL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.HP_PARALLEL>)

HP\_PARALLEL = 9007200865353744

##### [` HP_STACK `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.HP_STACK>)

HP\_STACK = 9007200865353748

##### [` HP_TLS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.HP_TLS>)

HP\_TLS = 9007200865353728

##### [` IA_64_EXT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.IA_64_EXT>)

IA\_64\_EXT = 44828721152

##### [` IA_64_UNWIND `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.IA_64_UNWIND>)

IA\_64\_UNWIND = 44828721153

##### [` INTERP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.INTERP>)

INTERP = 3

##### [` LOAD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.LOAD>)

LOAD = 1

##### [` MIPS_ABIFLAGS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.MIPS_ABIFLAGS>)

MIPS\_ABIFLAGS = 27648851971

##### [` MIPS_OPTIONS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.MIPS_OPTIONS>)

MIPS\_OPTIONS = 27648851970

##### [` MIPS_REGINFO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.MIPS_REGINFO>)

MIPS\_REGINFO = 27648851968

##### [` MIPS_RTPROC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.MIPS_RTPROC>)

MIPS\_RTPROC = 27648851969

##### [` NOTE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.NOTE>)

NOTE = 4

##### [` PAX_FLAGS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.PAX_FLAGS>)

PAX\_FLAGS = 1694766464

##### [` PHDR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.PHDR>)

PHDR = 6

##### [` PT_NULL_ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.PT_NULL_>)

PT\_NULL\_ = 0

##### [` RISCV_ATTRIBUTES `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.RISCV_ATTRIBUTES>)

RISCV\_ATTRIBUTES = 36238786563

##### [` SHLIB `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.SHLIB>)

SHLIB = 5

##### [` TLS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.TLS>)

TLS = 7

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE.from_value>)

from\_value(*arg: int*) → [lief.ELF.Segment.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE> "lief.ELF.Segment.TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` add `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.add>)

add(*self*, *flag: [lief.\_lief.ELF.Segment.FLAGS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.FLAGS> "lief._lief.ELF.Segment.FLAGS")*) → None

Add the given flag to the list of [`flags`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.flags> "lief.ELF.Segment.flags")

#### [` alignment `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.alignment>)

property alignment → int

The offset alignment of the segment

#### [` clear `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.clear>)

clear(*self*) → None

Clear the content of this segment

#### [` content `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.content>)

property content → memoryview

The raw data associated with this segment.

#### [` file_offset `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.file_offset>)

property file\_offset → int

The file offset of the data associated with this segment

#### [` fill `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.fill>)

fill(*self*, *value: str*) → None

Fill the content of this segment with the value provided in parameter

#### [` flags `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.flags>)

property flags → [lief.ELF.Segment.FLAGS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.FLAGS> "lief.ELF.Segment.FLAGS")

The flag permissions associated with this segment

#### [` from_raw `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.from_raw>)

from\_raw(*arg: bytes*) → [lief.ELF.Segment](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment> "lief.ELF.Segment") | [lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief.lief_errors") = &lt;nanobind.nb\_func object&gt;

#### [` hashashas `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.has>)

has(*self*, *flag: [lief.\_lief.ELF.Segment.FLAGS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.FLAGS> "lief._lief.ELF.Segment.FLAGS")*) → bool

**has(*self*, *section: [lief.\_lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief._lief.ELF.Section")*) → bool

**has(*self*, *section\_name: str*) → bool****

Overloaded function.

1. `has(self, flag: lief._lief.ELF.Segment.FLAGS) -> bool`

Check if the given flag is present

2. `has(self, section: lief._lief.ELF.Section) -> bool`

Check if the given [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") is present in [`sections`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.sections> "lief.ELF.Segment.sections")

3. `has(self, section_name: str) -> bool`

Check if the given [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") ‘s name is present in [`sections`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.sections> "lief.ELF.Segment.sections")

#### [` physical_address `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.physical_address>)

property physical\_address → int

The physical address of the segment. This value is not really relevant on systems like Linux or Android. On the other hand, Qualcomm trustlets might use this value.

Usually this value matches [`virtual_address`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.virtual_address> "lief.ELF.Segment.virtual_address")

#### [` physical_size `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.physical_size>)

property physical\_size → int

The **file** size of the data associated with this segment

#### [` raw_flags `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.raw_flags>)

property raw\_flags → int

The flag permissions as an integer

#### [` remove `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.remove>)

remove(*self*, *flag: [lief.\_lief.ELF.Segment.FLAGS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.FLAGS> "lief._lief.ELF.Segment.FLAGS")*) → None

Remove the given flag from the list of [`flags`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.flags> "lief.ELF.Segment.flags")

#### [` sections `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.sections>)

property sections → lief.ELF.Segment.it\_sections

Iterator over the [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") wrapped by this segment

#### [` type `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.type>)

property type → [lief.ELF.Segment.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.TYPE> "lief.ELF.Segment.TYPE")

Segment’s type

#### [` virtual_address `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.virtual_address>)

property virtual\_address → int

The virtual address of the segment.

> **Warning**
> 
> The ELF format specifications require the following relationship:
> 
> \[\text{virtual address} \equiv \text{file offset} \pmod{\text{page size}} \text{virtual address} \equiv \text{file offset} \pmod{\text{alignment}}\]

#### [` virtual_size `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Segment.virtual_size>)

property virtual\_size → int

The in-memory size of this segment.

Usually, if the `.bss` segment is wrapped by this segment then, virtual\_size is larger than physical\_size

---

## [Dynamic Entry](<https://lief.re/doc/latest/formats/elf/python.html#dynamic-entry>)

![Inheritance diagram of lief._lief.ELF.DynamicEntryFlags, lief._lief.ELF.DynamicSharedObject, lief._lief.ELF.DynamicEntryFilter, lief._lief.ELF.DynamicEntryLibrary, lief._lief.ELF.DynamicEntryRpath, lief._lief.ELF.DynamicEntryAuxiliary, lief._lief.ELF.DynamicEntryArray, lief._lief.ELF.DynamicEntry, lief._lief.ELF.DynamicEntryRunPath](https://lief.re/doc/latest/_images/inheritance-392efec28de006cfce7374c08ddec52d12d2d7de.png)

### [` lief.ELF.DynamicEntrylief.ELF.DynamicEntry `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry>)

class lief.ELF.DynamicEntry(*self*)

**class lief.ELF.DynamicEntry(*self*, *tag: [lief.\_lief.ELF.DynamicEntry.TAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG> "lief._lief.ELF.DynamicEntry.TAG")*, *value: int*)**

Bases: `Object`

Class which represents an entry in the dynamic table These entries are located in the `.dynamic` section or the `PT_DYNAMIC` segment

Overloaded function.

1. `__init__(self) -> None`

Default constructor

2. `__init__(self, tag: lief._lief.ELF.DynamicEntry.TAG, value: int) -> None`

Constructor from a [`TAG`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG> "lief.ELF.DynamicEntry.TAG") and value

#### [` TAG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG>)

class TAG(*\*values*)

Bases: `Enum`

##### [` AARCH64_BTI_PLT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.AARCH64_BTI_PLT>)

AARCH64\_BTI\_PLT = 10468982785

##### [` AARCH64_MEMTAG_GLOBALS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.AARCH64_MEMTAG_GLOBALS>)

AARCH64\_MEMTAG\_GLOBALS = 10468982797

##### [` AARCH64_MEMTAG_GLOBALSSZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.AARCH64_MEMTAG_GLOBALSSZ>)

AARCH64\_MEMTAG\_GLOBALSSZ = 10468982799

##### [` AARCH64_MEMTAG_HEAP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.AARCH64_MEMTAG_HEAP>)

AARCH64\_MEMTAG\_HEAP = 10468982795

##### [` AARCH64_MEMTAG_MODE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.AARCH64_MEMTAG_MODE>)

AARCH64\_MEMTAG\_MODE = 10468982793

##### [` AARCH64_MEMTAG_STACK `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.AARCH64_MEMTAG_STACK>)

AARCH64\_MEMTAG\_STACK = 10468982796

##### [` AARCH64_PAC_PLT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.AARCH64_PAC_PLT>)

AARCH64\_PAC\_PLT = 10468982787

##### [` AARCH64_VARIANT_PCS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.AARCH64_VARIANT_PCS>)

AARCH64\_VARIANT\_PCS = 10468982789

##### [` ANDROID_REL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.ANDROID_REL>)

ANDROID\_REL = 1610612751

##### [` ANDROID_RELA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.ANDROID_RELA>)

ANDROID\_RELA = 1610612753

##### [` ANDROID_RELASZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.ANDROID_RELASZ>)

ANDROID\_RELASZ = 1610612754

##### [` ANDROID_RELR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.ANDROID_RELR>)

ANDROID\_RELR = 1879040000

##### [` ANDROID_RELRCOUNT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.ANDROID_RELRCOUNT>)

ANDROID\_RELRCOUNT = 1879040005

##### [` ANDROID_RELRENT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.ANDROID_RELRENT>)

ANDROID\_RELRENT = 1879040003

##### [` ANDROID_RELRSZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.ANDROID_RELRSZ>)

ANDROID\_RELRSZ = 1879040001

##### [` ANDROID_RELSZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.ANDROID_RELSZ>)

ANDROID\_RELSZ = 1610612752

##### [` ANDROID_REL_OFFSET `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.ANDROID_REL_OFFSET>)

ANDROID\_REL\_OFFSET = 1610612749

##### [` ANDROID_REL_SIZE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.ANDROID_REL_SIZE>)

ANDROID\_REL\_SIZE = 1610612750

##### [` AUXILIARY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.AUXILIARY>)

AUXILIARY = 2147483645

##### [` BIND_NOW `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.BIND_NOW>)

BIND\_NOW = 24

##### [` DEBUG_TAG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.DEBUG_TAG>)

DEBUG\_TAG = 21

##### [` FILTER `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.FILTER>)

FILTER = 2147483647

##### [` FINI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.FINI>)

FINI = 13

##### [` FINI_ARRAY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.FINI_ARRAY>)

FINI\_ARRAY = 26

##### [` FINI_ARRAYSZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.FINI_ARRAYSZ>)

FINI\_ARRAYSZ = 28

##### [` FLAGS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.FLAGS>)

FLAGS = 30

##### [` FLAGS_1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.FLAGS_1>)

FLAGS\_1 = 1879048187

##### [` GNU_HASH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.GNU_HASH>)

GNU\_HASH = 1879047925

##### [` HASH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.HASH>)

HASH = 4

##### [` HEXAGON_PLT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.HEXAGON_PLT>)

HEXAGON\_PLT = 14763950082

##### [` HEXAGON_SYMSZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.HEXAGON_SYMSZ>)

HEXAGON\_SYMSZ = 14763950080

##### [` HEXAGON_VER `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.HEXAGON_VER>)

HEXAGON\_VER = 14763950081

##### [` IA_64_PLT_RESERVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_PLT_RESERVE>)

IA\_64\_PLT\_RESERVE = 36238786560

##### [` IA_64_VMS_FIXUP_NEEDED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_FIXUP_NEEDED>)

IA\_64\_VMS\_FIXUP\_NEEDED = 35970351128

##### [` IA_64_VMS_FIXUP_RELA_CNT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_FIXUP_RELA_CNT>)

IA\_64\_VMS\_FIXUP\_RELA\_CNT = 35970351126

##### [` IA_64_VMS_FIXUP_RELA_OFF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_FIXUP_RELA_OFF>)

IA\_64\_VMS\_FIXUP\_RELA\_OFF = 35970351164

##### [` IA_64_VMS_FPMODE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_FPMODE>)

IA\_64\_VMS\_FPMODE = 35970351170

##### [` IA_64_VMS_IDENT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_IDENT>)

IA\_64\_VMS\_IDENT = 35970351116

##### [` IA_64_VMS_IMGIOCNT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_IMGIOCNT>)

IA\_64\_VMS\_IMGIOCNT = 35970351106

##### [` IA_64_VMS_IMG_RELA_CNT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_IMG_RELA_CNT>)

IA\_64\_VMS\_IMG\_RELA\_CNT = 35970351122

##### [` IA_64_VMS_IMG_RELA_OFF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_IMG_RELA_OFF>)

IA\_64\_VMS\_IMG\_RELA\_OFF = 35970351160

##### [` IA_64_VMS_LINKTIME `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_LINKTIME>)

IA\_64\_VMS\_LINKTIME = 35970351144

##### [` IA_64_VMS_LNKFLAGS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_LNKFLAGS>)

IA\_64\_VMS\_LNKFLAGS = 35970351112

##### [` IA_64_VMS_NEEDED_IDENT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_NEEDED_IDENT>)

IA\_64\_VMS\_NEEDED\_IDENT = 35970351120

##### [` IA_64_VMS_PLTGOT_OFFSET `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_PLTGOT_OFFSET>)

IA\_64\_VMS\_PLTGOT\_OFFSET = 35970351166

##### [` IA_64_VMS_PLTGOT_SEG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_PLTGOT_SEG>)

IA\_64\_VMS\_PLTGOT\_SEG = 35970351168

##### [` IA_64_VMS_SEG_NO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_SEG_NO>)

IA\_64\_VMS\_SEG\_NO = 35970351146

##### [` IA_64_VMS_SEG_RELA_CNT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_SEG_RELA_CNT>)

IA\_64\_VMS\_SEG\_RELA\_CNT = 35970351124

##### [` IA_64_VMS_SEG_RELA_OFF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_SEG_RELA_OFF>)

IA\_64\_VMS\_SEG\_RELA\_OFF = 35970351162

##### [` IA_64_VMS_STACKSIZE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_STACKSIZE>)

IA\_64\_VMS\_STACKSIZE = 35970351136

##### [` IA_64_VMS_STRTAB_OFFSET `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_STRTAB_OFFSET>)

IA\_64\_VMS\_STRTAB\_OFFSET = 35970351156

##### [` IA_64_VMS_SUBTYPE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_SUBTYPE>)

IA\_64\_VMS\_SUBTYPE = 35970351104

##### [` IA_64_VMS_SYMVEC_CNT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_SYMVEC_CNT>)

IA\_64\_VMS\_SYMVEC\_CNT = 35970351130

##### [` IA_64_VMS_SYMVEC_OFFSET `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_SYMVEC_OFFSET>)

IA\_64\_VMS\_SYMVEC\_OFFSET = 35970351148

##### [` IA_64_VMS_SYMVEC_SEG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_SYMVEC_SEG>)

IA\_64\_VMS\_SYMVEC\_SEG = 35970351150

##### [` IA_64_VMS_SYSVER_OFFSET `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_SYSVER_OFFSET>)

IA\_64\_VMS\_SYSVER\_OFFSET = 35970351158

##### [` IA_64_VMS_UNWINDSZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_UNWINDSZ>)

IA\_64\_VMS\_UNWINDSZ = 35970351138

##### [` IA_64_VMS_UNWIND_CODSEG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_UNWIND_CODSEG>)

IA\_64\_VMS\_UNWIND\_CODSEG = 35970351140

##### [` IA_64_VMS_UNWIND_INFOSEG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_UNWIND_INFOSEG>)

IA\_64\_VMS\_UNWIND\_INFOSEG = 35970351142

##### [` IA_64_VMS_UNWIND_OFFSET `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_UNWIND_OFFSET>)

IA\_64\_VMS\_UNWIND\_OFFSET = 35970351152

##### [` IA_64_VMS_UNWIND_SEG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_UNWIND_SEG>)

IA\_64\_VMS\_UNWIND\_SEG = 35970351154

##### [` IA_64_VMS_VIR_MEM_BLK_SIZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_VIR_MEM_BLK_SIZ>)

IA\_64\_VMS\_VIR\_MEM\_BLK\_SIZ = 35970351114

##### [` IA_64_VMS_XLATED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.IA_64_VMS_XLATED>)

IA\_64\_VMS\_XLATED = 35970351134

##### [` INIT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.INIT>)

INIT = 12

##### [` INIT_ARRAY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.INIT_ARRAY>)

INIT\_ARRAY = 25

##### [` INIT_ARRAYSZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.INIT_ARRAYSZ>)

INIT\_ARRAYSZ = 27

##### [` JMPREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.JMPREL>)

JMPREL = 23

##### [` MIPS_AUX_DYNAMIC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_AUX_DYNAMIC>)

MIPS\_AUX\_DYNAMIC = 6174015537

##### [` MIPS_BASE_ADDRESS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_BASE_ADDRESS>)

MIPS\_BASE\_ADDRESS = 6174015494

##### [` MIPS_COMPACT_SIZE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_COMPACT_SIZE>)

MIPS\_COMPACT\_SIZE = 6174015535

##### [` MIPS_CONFLICT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_CONFLICT>)

MIPS\_CONFLICT = 6174015496

##### [` MIPS_CONFLICTNO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_CONFLICTNO>)

MIPS\_CONFLICTNO = 6174015499

##### [` MIPS_CXX_FLAGS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_CXX_FLAGS>)

MIPS\_CXX\_FLAGS = 6174015522

##### [` MIPS_DELTA_CLASS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_DELTA_CLASS>)

MIPS\_DELTA\_CLASS = 6174015511

##### [` MIPS_DELTA_CLASSSYM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_DELTA_CLASSSYM>)

MIPS\_DELTA\_CLASSSYM = 6174015520

##### [` MIPS_DELTA_CLASSSYM_NO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_DELTA_CLASSSYM_NO>)

MIPS\_DELTA\_CLASSSYM\_NO = 6174015521

##### [` MIPS_DELTA_CLASS_NO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_DELTA_CLASS_NO>)

MIPS\_DELTA\_CLASS\_NO = 6174015512

##### [` MIPS_DELTA_INSTANCE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_DELTA_INSTANCE>)

MIPS\_DELTA\_INSTANCE = 6174015513

##### [` MIPS_DELTA_INSTANCE_NO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_DELTA_INSTANCE_NO>)

MIPS\_DELTA\_INSTANCE\_NO = 6174015514

##### [` MIPS_DELTA_RELOC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_DELTA_RELOC>)

MIPS\_DELTA\_RELOC = 6174015515

##### [` MIPS_DELTA_RELOC_NO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_DELTA_RELOC_NO>)

MIPS\_DELTA\_RELOC\_NO = 6174015516

##### [` MIPS_DELTA_SYM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_DELTA_SYM>)

MIPS\_DELTA\_SYM = 6174015517

##### [` MIPS_DELTA_SYM_NO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_DELTA_SYM_NO>)

MIPS\_DELTA\_SYM\_NO = 6174015518

##### [` MIPS_DYNSTR_ALIGN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_DYNSTR_ALIGN>)

MIPS\_DYNSTR\_ALIGN = 6174015531

##### [` MIPS_FLAGS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_FLAGS>)

MIPS\_FLAGS = 6174015493

##### [` MIPS_GOTSYM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_GOTSYM>)

MIPS\_GOTSYM = 6174015507

##### [` MIPS_GP_VALUE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_GP_VALUE>)

MIPS\_GP\_VALUE = 6174015536

##### [` MIPS_HIDDEN_GOTIDX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_HIDDEN_GOTIDX>)

MIPS\_HIDDEN\_GOTIDX = 6174015527

##### [` MIPS_HIPAGENO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_HIPAGENO>)

MIPS\_HIPAGENO = 6174015508

##### [` MIPS_ICHECKSUM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_ICHECKSUM>)

MIPS\_ICHECKSUM = 6174015491

##### [` MIPS_INTERFACE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_INTERFACE>)

MIPS\_INTERFACE = 6174015530

##### [` MIPS_INTERFACE_SIZE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_INTERFACE_SIZE>)

MIPS\_INTERFACE\_SIZE = 6174015532

##### [` MIPS_IVERSION `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_IVERSION>)

MIPS\_IVERSION = 6174015492

##### [` MIPS_LIBLIST `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_LIBLIST>)

MIPS\_LIBLIST = 6174015497

##### [` MIPS_LIBLISTNO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_LIBLISTNO>)

MIPS\_LIBLISTNO = 6174015504

##### [` MIPS_LOCALPAGE_GOTIDX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_LOCALPAGE_GOTIDX>)

MIPS\_LOCALPAGE\_GOTIDX = 6174015525

##### [` MIPS_LOCAL_GOTIDX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_LOCAL_GOTIDX>)

MIPS\_LOCAL\_GOTIDX = 6174015526

##### [` MIPS_LOCAL_GOTNO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_LOCAL_GOTNO>)

MIPS\_LOCAL\_GOTNO = 6174015498

##### [` MIPS_MSYM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_MSYM>)

MIPS\_MSYM = 6174015495

##### [` MIPS_OPTIONS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_OPTIONS>)

MIPS\_OPTIONS = 6174015529

##### [` MIPS_PERF_SUFFIX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_PERF_SUFFIX>)

MIPS\_PERF\_SUFFIX = 6174015534

##### [` MIPS_PIXIE_INIT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_PIXIE_INIT>)

MIPS\_PIXIE\_INIT = 6174015523

##### [` MIPS_PLTGOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_PLTGOT>)

MIPS\_PLTGOT = 6174015538

##### [` MIPS_PROTECTED_GOTIDX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_PROTECTED_GOTIDX>)

MIPS\_PROTECTED\_GOTIDX = 6174015528

##### [` MIPS_RLD_MAP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_RLD_MAP>)

MIPS\_RLD\_MAP = 6174015510

##### [` MIPS_RLD_MAP_REL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_RLD_MAP_REL>)

MIPS\_RLD\_MAP\_REL = 6174015541

##### [` MIPS_RLD_TEXT_RESOLVE_ADDR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_RLD_TEXT_RESOLVE_ADDR>)

MIPS\_RLD\_TEXT\_RESOLVE\_ADDR = 6174015533

##### [` MIPS_RLD_VERSION `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_RLD_VERSION>)

MIPS\_RLD\_VERSION = 6174015489

##### [` MIPS_RWPLT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_RWPLT>)

MIPS\_RWPLT = 6174015540

##### [` MIPS_SYMBOL_LIB `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_SYMBOL_LIB>)

MIPS\_SYMBOL\_LIB = 6174015524

##### [` MIPS_SYMTABNO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_SYMTABNO>)

MIPS\_SYMTABNO = 6174015505

##### [` MIPS_TIME_STAMP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_TIME_STAMP>)

MIPS\_TIME\_STAMP = 6174015490

##### [` MIPS_UNREFEXTNO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_UNREFEXTNO>)

MIPS\_UNREFEXTNO = 6174015506

##### [` MIPS_XHASH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.MIPS_XHASH>)

MIPS\_XHASH = 6174015542

##### [` NEEDED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.NEEDED>)

NEEDED = 1

##### [` NULL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.NULL>)

NULL = 0

##### [` PLTGOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.PLTGOT>)

PLTGOT = 3

##### [` PLTREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.PLTREL>)

PLTREL = 20

##### [` PLTRELSZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.PLTRELSZ>)

PLTRELSZ = 2

##### [` PPC64_GLINK `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.PPC64_GLINK>)

PPC64\_GLINK = 23353884672

##### [` PPC64_OPT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.PPC64_OPT>)

PPC64\_OPT = 23353884675

##### [` PPC_GOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.PPC_GOT>)

PPC\_GOT = 19058917376

##### [` PPC_OPT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.PPC_OPT>)

PPC\_OPT = 19058917377

##### [` PREINIT_ARRAY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.PREINIT_ARRAY>)

PREINIT\_ARRAY = 32

##### [` PREINIT_ARRAYSZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.PREINIT_ARRAYSZ>)

PREINIT\_ARRAYSZ = 33

##### [` REL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.REL>)

REL = 17

##### [` RELA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.RELA>)

RELA = 7

##### [` RELACOUNT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.RELACOUNT>)

RELACOUNT = 1879048185

##### [` RELAENT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.RELAENT>)

RELAENT = 9

##### [` RELASZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.RELASZ>)

RELASZ = 8

##### [` RELCOUNT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.RELCOUNT>)

RELCOUNT = 1879048186

##### [` RELENT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.RELENT>)

RELENT = 19

##### [` RELR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.RELR>)

RELR = 36

##### [` RELRENT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.RELRENT>)

RELRENT = 37

##### [` RELRSZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.RELRSZ>)

RELRSZ = 35

##### [` RELSZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.RELSZ>)

RELSZ = 18

##### [` RISCV_VARIANT_CC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.RISCV_VARIANT_CC>)

RISCV\_VARIANT\_CC = 27648851971

##### [` RPATH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.RPATH>)

RPATH = 15

##### [` RUNPATH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.RUNPATH>)

RUNPATH = 29

##### [` SONAME `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.SONAME>)

SONAME = 14

##### [` STRSZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.STRSZ>)

STRSZ = 10

##### [` STRTAB `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.STRTAB>)

STRTAB = 5

##### [` SYMBOLIC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.SYMBOLIC>)

SYMBOLIC = 16

##### [` SYMENT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.SYMENT>)

SYMENT = 11

##### [` SYMTAB `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.SYMTAB>)

SYMTAB = 6

##### [` SYMTAB_SHNDX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.SYMTAB_SHNDX>)

SYMTAB\_SHNDX = 34

##### [` TEXTREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.TEXTREL>)

TEXTREL = 22

##### [` TLSDESC_GOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.TLSDESC_GOT>)

TLSDESC\_GOT = 1879047927

##### [` TLSDESC_PLT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.TLSDESC_PLT>)

TLSDESC\_PLT = 1879047926

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.UNKNOWN>)

UNKNOWN = 18446744073709551615

##### [` VERDEF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.VERDEF>)

VERDEF = 1879048188

##### [` VERDEFNUM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.VERDEFNUM>)

VERDEFNUM = 1879048189

##### [` VERNEED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.VERNEED>)

VERNEED = 1879048190

##### [` VERNEEDNUM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.VERNEEDNUM>)

VERNEEDNUM = 1879048191

##### [` VERSYM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.VERSYM>)

VERSYM = 1879048176

##### [` X86_64_PLT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.X86_64_PLT>)

X86\_64\_PLT = 31943819264

##### [` X86_64_PLTENT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.X86_64_PLTENT>)

X86\_64\_PLTENT = 31943819267

##### [` X86_64_PLTSZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.X86_64_PLTSZ>)

X86\_64\_PLTSZ = 31943819265

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.from_value>)

from\_value(*arg: int*) → [lief.ELF.DynamicEntry.TAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG> "lief.ELF.DynamicEntry.TAG") = &lt;nanobind.nb\_func object&gt;

#### [` tag `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.tag>)

property tag → [lief.ELF.DynamicEntry.TAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG> "lief.ELF.DynamicEntry.TAG")

Return the entry’s [`TAG`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG> "lief.ELF.DynamicEntry.TAG") which represent the entry type

#### [` value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.value>)

property value → int

Return the entry’s value

The meaning of the value strongly depends on the tag. It can be an offset, an index, a flag, …

---

## [Dynamic Entry Library](<https://lief.re/doc/latest/formats/elf/python.html#dynamic-entry-library>)

![Inheritance diagram of lief._lief.ELF.DynamicEntryLibrary](https://lief.re/doc/latest/_images/inheritance-1bd0604041d79e8ea23112a9f4b8c82b9ad1278c.png)

### [` lief.ELF.DynamicEntryLibrary `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryLibrary>)

class lief.ELF.DynamicEntryLibrary(*self*, *library\_name: str*)

Bases: [`DynamicEntry`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief._lief.ELF.DynamicEntry")

Class which represents a `DT_NEEDED` entry in the dynamic table.

This kind of entry is usually used to create library dependency.

Constructor from a library name

#### [` name `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryLibrary.name>)

property name → str | bytes

Library associated with this entry (e.g. `libc.so.6`)

---

## [Dynamic Shared Object](<https://lief.re/doc/latest/formats/elf/python.html#dynamic-shared-object>)

![Inheritance diagram of lief._lief.ELF.DynamicSharedObject](https://lief.re/doc/latest/_images/inheritance-2b0107d2aadabec9fc248e4084062be88be369ce.png)

### [` lief.ELF.DynamicSharedObject `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicSharedObject>)

class lief.ELF.DynamicSharedObject(*self*, *library\_name: str*)

Bases: [`DynamicEntry`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief._lief.ELF.DynamicEntry")

Class which represents a `DT_SONAME` entry in the dynamic table This kind of entry is usually used to name the original library.

This entry is not present for executables.

Constructor from library name

#### [` name `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicSharedObject.name>)

property name → str | bytes

Return the library name

---

## [Dynamic Entry Run Path](<https://lief.re/doc/latest/formats/elf/python.html#dynamic-entry-run-path>)

![Inheritance diagram of lief._lief.ELF.DynamicEntryRunPath](https://lief.re/doc/latest/_images/inheritance-597d7e1d797216811ecccf22f20289066df3b15e.png)

### [` lief.ELF.DynamicEntryRunPathlief.ELF.DynamicEntryRunPath `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRunPath>)

class lief.ELF.DynamicEntryRunPath(*self*, *path: str = ''*)

**class lief.ELF.DynamicEntryRunPath(*self*, *paths: collections.abc.Sequence[str]*)**

Bases: [`DynamicEntry`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief._lief.ELF.DynamicEntry")

Class that represents a `DT_RUNPATH` which is used by the loader to resolve libraries ([`DynamicEntryLibrary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryLibrary> "lief.ELF.DynamicEntryLibrary")).

Overloaded function.

1. `__init__(self, path: str = '') -> None`

Constructor from a (run)path

2. `__init__(self, paths: collections.abc.Sequence[str]) -> None`

Constructor from a list of paths

#### [` append `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRunPath.append>)

append(*self*, *path: str*) → [lief.\_lief.ELF.DynamicEntryRunPath](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRunPath> "lief._lief.ELF.DynamicEntryRunPath")

Append the given `path`

#### [` insert `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRunPath.insert>)

insert(*self*, *position: int*, *path: str*) → [lief.\_lief.ELF.DynamicEntryRunPath](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRunPath> "lief._lief.ELF.DynamicEntryRunPath")

Insert a `path` at the given `position`

#### [` paths `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRunPath.paths>)

property paths → list[str]

Paths as a list

#### [` remove `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRunPath.remove>)

remove(*self*, *path: str*) → [lief.\_lief.ELF.DynamicEntryRunPath](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRunPath> "lief._lief.ELF.DynamicEntryRunPath")

Remove the given `path`

#### [` runpath `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRunPath.runpath>)

property runpath → str | bytes

Runpath raw value

---

## [Dynamic Entry RPath](<https://lief.re/doc/latest/formats/elf/python.html#dynamic-entry-rpath>)

![Inheritance diagram of lief._lief.ELF.DynamicEntryRpath](https://lief.re/doc/latest/_images/inheritance-a2f66ba2721a87ecdfe99a39990b91953cbc0cdb.png)

### [` lief.ELF.DynamicEntryRpathlief.ELF.DynamicEntryRpath `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRpath>)

class lief.ELF.DynamicEntryRpath(*self*, *path: str = ''*)

**class lief.ELF.DynamicEntryRpath(*self*, *paths: collections.abc.Sequence[str]*)**

Bases: [`DynamicEntry`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief._lief.ELF.DynamicEntry")

Class which represents a `DT_RPATH` entry. This attribute is deprecated (cf. `man ld`) in favour of `DT_RUNPATH` (See [`DynamicEntryRunPath`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRunPath> "lief.ELF.DynamicEntryRunPath"))

Overloaded function.

1. `__init__(self, path: str = '') -> None`

Constructor from (r)path

2. `__init__(self, paths: collections.abc.Sequence[str]) -> None`

Constructor from a list of paths

#### [` append `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRpath.append>)

append(*self*, *path: str*) → [lief.\_lief.ELF.DynamicEntryRpath](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRpath> "lief._lief.ELF.DynamicEntryRpath")

Append the given `path`

#### [` insert `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRpath.insert>)

insert(*self*, *position: int*, *path: str*) → [lief.\_lief.ELF.DynamicEntryRpath](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRpath> "lief._lief.ELF.DynamicEntryRpath")

Insert a `path` at the given `position`

#### [` paths `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRpath.paths>)

property paths → list[str]

Paths as a list

#### [` remove `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRpath.remove>)

remove(*self*, *path: str*) → [lief.\_lief.ELF.DynamicEntryRpath](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRpath> "lief._lief.ELF.DynamicEntryRpath")

Remove the given `path`

#### [` rpath `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryRpath.rpath>)

property rpath → str | bytes

The actual rpath as a string

---

## [Dynamic Entry Array](<https://lief.re/doc/latest/formats/elf/python.html#dynamic-entry-array>)

![Inheritance diagram of lief._lief.ELF.DynamicEntryArray](https://lief.re/doc/latest/_images/inheritance-611e7a8dd68b0fc158a61f101c5f76fa04c4eb72.png)

### [` lief.ELF.DynamicEntryArray `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryArray>)

class lief.ELF.DynamicEntryArray(*self*, *tag: [lief.\_lief.ELF.DynamicEntry.TAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG> "lief._lief.ELF.DynamicEntry.TAG")*, *array: collections.abc.Sequence[int]*)

Bases: [`DynamicEntry`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief._lief.ELF.DynamicEntry")

Class that represents an array in the dynamic table. This entry is associated with constructors: - `DT_PREINIT_ARRAY` - `DT_INIT_ARRAY` - `DT_FINI_ARRAY`

The underlying values are 64-bits integers to cover both: ELF32 and ELF64 binaries.

#### [` append `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryArray.append>)

append(*self*, *function: int*) → [lief.\_lief.ELF.DynamicEntryArray](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryArray> "lief._lief.ELF.DynamicEntryArray")

Append the given `function`

#### [` array `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryArray.array>)

property array → list[int]

Return the array as a list of integers

#### [` insert `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryArray.insert>)

insert(*self*, *pos: int*, *function: int*) → [lief.\_lief.ELF.DynamicEntryArray](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryArray> "lief._lief.ELF.DynamicEntryArray")

Insert the given `function` at `pos`

#### [` remove `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryArray.remove>)

remove(*self*, *function: int*) → [lief.\_lief.ELF.DynamicEntryArray](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryArray> "lief._lief.ELF.DynamicEntryArray")

Remove the given `function`

---

## [Dynamic Entry Flags](<https://lief.re/doc/latest/formats/elf/python.html#dynamic-entry-flags>)

![Inheritance diagram of lief._lief.ELF.DynamicEntryFlags](https://lief.re/doc/latest/_images/inheritance-526be50f6f6f926f78b3819456615e24dccd4d49.png)

### [` lief.ELF.DynamicEntryFlags `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags>)

class lief.ELF.DynamicEntryFlags

Bases: [`DynamicEntry`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief._lief.ELF.DynamicEntry")

#### [` FLAG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG>)

class FLAG(*\*values*)

Bases: `Enum`

##### [` BIND_NOW `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.BIND_NOW>)

BIND\_NOW = 8

##### [` CONFALT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.CONFALT>)

CONFALT = 4294975488

##### [` DIRECT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.DIRECT>)

DIRECT = 4294967552

##### [` DISPRELDNE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.DISPRELDNE>)

DISPRELDNE = 4295000064

##### [` DISPRELPND `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.DISPRELPND>)

DISPRELPND = 4295032832

##### [` EDITED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.EDITED>)

EDITED = 4297064448

##### [` ENDFILTEE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.ENDFILTEE>)

ENDFILTEE = 4294983680

##### [` GLOBAL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.GLOBAL>)

GLOBAL = 4294967298

##### [` GLOBAUDIT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.GLOBAUDIT>)

GLOBAUDIT = 4311744512

##### [` GROUP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.GROUP>)

GROUP = 4294967300

##### [` HANDLE_ORIGIN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.HANDLE_ORIGIN>)

HANDLE\_ORIGIN = 4294967424

##### [` IGNMULDEF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.IGNMULDEF>)

IGNMULDEF = 4295229440

##### [` INITFIRST `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.INITFIRST>)

INITFIRST = 4294967328

##### [` INTERPOSE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.INTERPOSE>)

INTERPOSE = 4294968320

##### [` KMOD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.KMOD>)

KMOD = 4563402752

##### [` LOADFLTR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.LOADFLTR>)

LOADFLTR = 4294967312

##### [` NOCOMMON `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.NOCOMMON>)

NOCOMMON = 5368709120

##### [` NODEFLIB `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.NODEFLIB>)

NODEFLIB = 4294969344

##### [` NODELETE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.NODELETE>)

NODELETE = 4294967304

##### [` NODIRECT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.NODIRECT>)

NODIRECT = 4295098368

##### [` NODUMP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.NODUMP>)

NODUMP = 4294971392

##### [` NOHDR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.NOHDR>)

NOHDR = 4296015872

##### [` NOKSYMS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.NOKSYMS>)

NOKSYMS = 4295491584

##### [` NOOPEN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.NOOPEN>)

NOOPEN = 4294967360

##### [` NORELOC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.NORELOC>)

NORELOC = 4299161600

##### [` NOW `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.NOW>)

NOW = 4294967297

##### [` ORIGIN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.ORIGIN>)

ORIGIN = 1

##### [` PIE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.PIE>)

PIE = 4429185024

##### [` SINGLETON `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.SINGLETON>)

SINGLETON = 4328521728

##### [` STATIC_TLS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.STATIC_TLS>)

STATIC\_TLS = 16

##### [` SYMBOLIC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.SYMBOLIC>)

SYMBOLIC = 2

##### [` SYMINTPOSE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.SYMINTPOSE>)

SYMINTPOSE = 4303355904

##### [` TEXTREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.TEXTREL>)

TEXTREL = 4

##### [` TRANS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.TRANS>)

TRANS = 4294967808

##### [` WEAKFILTER `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.WEAKFILTER>)

WEAKFILTER = 4831838208

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG.from_value>)

from\_value(*arg: int*) → [lief.ELF.DynamicEntryFlags.FLAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG> "lief.ELF.DynamicEntryFlags.FLAG") = &lt;nanobind.nb\_func object&gt;

#### [` add `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.add>)

add(*self*, *flag: [lief.\_lief.ELF.DynamicEntryFlags.FLAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG> "lief._lief.ELF.DynamicEntryFlags.FLAG")*) → None

Add the given [`FLAG`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG> "lief.ELF.DynamicEntryFlags.FLAG")

#### [` flags `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.flags>)

property flags → list[[lief.ELF.DynamicEntryFlags.FLAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG> "lief.ELF.DynamicEntryFlags.FLAG")]

Return list of [`FLAG`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG> "lief.ELF.DynamicEntryFlags.FLAG")

#### [` has `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.has>)

has(*self*, *flag: [lief.\_lief.ELF.DynamicEntryFlags.FLAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG> "lief._lief.ELF.DynamicEntryFlags.FLAG")*) → bool

Check if this entry contains the given [`FLAG`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG> "lief.ELF.DynamicEntryFlags.FLAG")

#### [` remove `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.remove>)

remove(*self*, *flag: [lief.\_lief.ELF.DynamicEntryFlags.FLAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG> "lief._lief.ELF.DynamicEntryFlags.FLAG")*) → None

Remove the given [`FLAG`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFlags.FLAG> "lief.ELF.DynamicEntryFlags.FLAG")

---

## [Dynamic Entry Auxiliary](<https://lief.re/doc/latest/formats/elf/python.html#dynamic-entry-auxiliary>)

![Inheritance diagram of lief._lief.ELF.DynamicEntryAuxiliary](https://lief.re/doc/latest/_images/inheritance-d61812c05c4a7befcde071368abd9c8324139dfa.png)

### [` lief.ELF.DynamicEntryAuxiliary `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryAuxiliary>)

class lief.ELF.DynamicEntryAuxiliary(*self*, *library\_name: str*)

Bases: [`DynamicEntry`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief._lief.ELF.DynamicEntry")

Class which represents a `DT_AUXILIARY` entry in the dynamic table. This kind of entry is used to specify a shared object that should be loaded before the current one.

Constructor from library name

#### [` name `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryAuxiliary.name>)

property name → str | bytes

Return the library name

---

## [Dynamic Entry Filter](<https://lief.re/doc/latest/formats/elf/python.html#dynamic-entry-filter>)

![Inheritance diagram of lief._lief.ELF.DynamicEntryFilter](https://lief.re/doc/latest/_images/inheritance-fdf9e1aa570f4dd50642309209f67acfb2d6599d.png)

### [` lief.ELF.DynamicEntryFilter `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFilter>)

class lief.ELF.DynamicEntryFilter(*self*, *library\_name: str*)

Bases: [`DynamicEntry`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry> "lief._lief.ELF.DynamicEntry")

Class which represents a `DT_FILTER` entry in the dynamic table. This kind of entry is used to specify a shared object for which the current one is a filter.

Constructor from library name

#### [` name `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntryFilter.name>)

property name → str | bytes

Return the library name

---

## [Relocations](<https://lief.re/doc/latest/formats/elf/python.html#relocations>)

### [` lief.ELF.Relocationlief.ELF.Relocationlief.ELF.Relocation `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation>)

class lief.ELF.Relocation(*self*)

**class lief.ELF.Relocation(*self*, *arch: [lief.\_lief.ELF.ARCH](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH> "lief._lief.ELF.ARCH")*)

**class lief.ELF.Relocation(*self*, *address: int*, *type: [lief.\_lief.ELF.Relocation.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE> "lief._lief.ELF.Relocation.TYPE")*, *encoding: [lief.\_lief.ELF.Relocation.ENCODING](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.ENCODING> "lief._lief.ELF.Relocation.ENCODING")*)****

Bases: [`Relocation`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Relocation> "lief._lief.Relocation")

Class that represents an ELF relocation.

#### [` ENCODING `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.ENCODING>)

class ENCODING(*\*values*)

Bases: `Enum`

##### [` ANDROID_SLEB `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.ENCODING.ANDROID_SLEB>)

ANDROID\_SLEB = 4

##### [` REL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.ENCODING.REL>)

REL = 1

##### [` RELA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.ENCODING.RELA>)

RELA = 2

##### [` RELR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.ENCODING.RELR>)

RELR = 3

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.ENCODING.UNKNOWN>)

UNKNOWN = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.ENCODING.from_value>)

from\_value(*arg: int*) → [lief.ELF.Relocation.ENCODING](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.ENCODING> "lief.ELF.Relocation.ENCODING") = &lt;nanobind.nb\_func object&gt;

#### [` PURPOSE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.PURPOSE>)

class PURPOSE(*\*values*)

Bases: `Enum`

##### [` DYNAMIC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.PURPOSE.DYNAMIC>)

DYNAMIC = 2

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.PURPOSE.NONE>)

NONE = 0

##### [` OBJECT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.PURPOSE.OBJECT>)

OBJECT = 3

##### [` PLTGOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.PURPOSE.PLTGOT>)

PLTGOT = 1

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.PURPOSE.from_value>)

from\_value(*arg: int*) → [lief.ELF.Relocation.PURPOSE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.PURPOSE> "lief.ELF.Relocation.PURPOSE") = &lt;nanobind.nb\_func object&gt;

#### [` TYPE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

##### [` AARCH64_ABS16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_ABS16>)

AARCH64\_ABS16 = 268435715

##### [` AARCH64_ABS32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_ABS32>)

AARCH64\_ABS32 = 268435714

##### [` AARCH64_ABS64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_ABS64>)

AARCH64\_ABS64 = 268435713

##### [` AARCH64_ADD_ABS_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_ADD_ABS_LO12_NC>)

AARCH64\_ADD\_ABS\_LO12\_NC = 268435733

##### [` AARCH64_ADR_GOT_PAGE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_ADR_GOT_PAGE>)

AARCH64\_ADR\_GOT\_PAGE = 268435767

##### [` AARCH64_ADR_PREL_LO21 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_ADR_PREL_LO21>)

AARCH64\_ADR\_PREL\_LO21 = 268435730

##### [` AARCH64_ADR_PREL_PG_HI21 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_ADR_PREL_PG_HI21>)

AARCH64\_ADR\_PREL\_PG\_HI21 = 268435731

##### [` AARCH64_ADR_PREL_PG_HI21_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_ADR_PREL_PG_HI21_NC>)

AARCH64\_ADR\_PREL\_PG\_HI21\_NC = 268435732

##### [` AARCH64_CALL26 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_CALL26>)

AARCH64\_CALL26 = 268435739

##### [` AARCH64_CONDBR19 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_CONDBR19>)

AARCH64\_CONDBR19 = 268435736

##### [` AARCH64_COPY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_COPY>)

AARCH64\_COPY = 268436480

##### [` AARCH64_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_GLOB_DAT>)

AARCH64\_GLOB\_DAT = 268436481

##### [` AARCH64_GOTREL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_GOTREL32>)

AARCH64\_GOTREL32 = 268435764

##### [` AARCH64_GOTREL64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_GOTREL64>)

AARCH64\_GOTREL64 = 268435763

##### [` AARCH64_GOT_LD_PREL19 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_GOT_LD_PREL19>)

AARCH64\_GOT\_LD\_PREL19 = 268435765

##### [` AARCH64_IRELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_IRELATIVE>)

AARCH64\_IRELATIVE = 268436488

##### [` AARCH64_JUMP26 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_JUMP26>)

AARCH64\_JUMP26 = 268435738

##### [` AARCH64_JUMP_SLOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_JUMP_SLOT>)

AARCH64\_JUMP\_SLOT = 268436482

##### [` AARCH64_LD64_GOTOFF_LO15 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_LD64_GOTOFF_LO15>)

AARCH64\_LD64\_GOTOFF\_LO15 = 268435766

##### [` AARCH64_LD64_GOTPAGE_LO15 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_LD64_GOTPAGE_LO15>)

AARCH64\_LD64\_GOTPAGE\_LO15 = 268435769

##### [` AARCH64_LD64_GOT_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_LD64_GOT_LO12_NC>)

AARCH64\_LD64\_GOT\_LO12\_NC = 268435768

##### [` AARCH64_LDST128_ABS_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_LDST128_ABS_LO12_NC>)

AARCH64\_LDST128\_ABS\_LO12\_NC = 268435755

##### [` AARCH64_LDST16_ABS_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_LDST16_ABS_LO12_NC>)

AARCH64\_LDST16\_ABS\_LO12\_NC = 268435740

##### [` AARCH64_LDST32_ABS_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_LDST32_ABS_LO12_NC>)

AARCH64\_LDST32\_ABS\_LO12\_NC = 268435741

##### [` AARCH64_LDST64_ABS_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_LDST64_ABS_LO12_NC>)

AARCH64\_LDST64\_ABS\_LO12\_NC = 268435742

##### [` AARCH64_LDST8_ABS_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_LDST8_ABS_LO12_NC>)

AARCH64\_LDST8\_ABS\_LO12\_NC = 268435734

##### [` AARCH64_LD_PREL_LO19 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_LD_PREL_LO19>)

AARCH64\_LD\_PREL\_LO19 = 268435729

##### [` AARCH64_MOVW_GOTOFF_G0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_GOTOFF_G0>)

AARCH64\_MOVW\_GOTOFF\_G0 = 268435756

##### [` AARCH64_MOVW_GOTOFF_G0_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_GOTOFF_G0_NC>)

AARCH64\_MOVW\_GOTOFF\_G0\_NC = 268435757

##### [` AARCH64_MOVW_GOTOFF_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_GOTOFF_G1>)

AARCH64\_MOVW\_GOTOFF\_G1 = 268435758

##### [` AARCH64_MOVW_GOTOFF_G1_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_GOTOFF_G1_NC>)

AARCH64\_MOVW\_GOTOFF\_G1\_NC = 268435759

##### [` AARCH64_MOVW_GOTOFF_G2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_GOTOFF_G2>)

AARCH64\_MOVW\_GOTOFF\_G2 = 268435760

##### [` AARCH64_MOVW_GOTOFF_G2_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_GOTOFF_G2_NC>)

AARCH64\_MOVW\_GOTOFF\_G2\_NC = 268435761

##### [` AARCH64_MOVW_GOTOFF_G3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_GOTOFF_G3>)

AARCH64\_MOVW\_GOTOFF\_G3 = 268435762

##### [` AARCH64_MOVW_PREL_G0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_PREL_G0>)

AARCH64\_MOVW\_PREL\_G0 = 268435743

##### [` AARCH64_MOVW_PREL_G0_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_PREL_G0_NC>)

AARCH64\_MOVW\_PREL\_G0\_NC = 268435744

##### [` AARCH64_MOVW_PREL_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_PREL_G1>)

AARCH64\_MOVW\_PREL\_G1 = 268435745

##### [` AARCH64_MOVW_PREL_G1_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_PREL_G1_NC>)

AARCH64\_MOVW\_PREL\_G1\_NC = 268435746

##### [` AARCH64_MOVW_PREL_G2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_PREL_G2>)

AARCH64\_MOVW\_PREL\_G2 = 268435747

##### [` AARCH64_MOVW_PREL_G2_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_PREL_G2_NC>)

AARCH64\_MOVW\_PREL\_G2\_NC = 268435748

##### [` AARCH64_MOVW_PREL_G3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_PREL_G3>)

AARCH64\_MOVW\_PREL\_G3 = 268435749

##### [` AARCH64_MOVW_SABS_G0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_SABS_G0>)

AARCH64\_MOVW\_SABS\_G0 = 268435726

##### [` AARCH64_MOVW_SABS_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_SABS_G1>)

AARCH64\_MOVW\_SABS\_G1 = 268435727

##### [` AARCH64_MOVW_SABS_G2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_SABS_G2>)

AARCH64\_MOVW\_SABS\_G2 = 268435728

##### [` AARCH64_MOVW_UABS_G0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_UABS_G0>)

AARCH64\_MOVW\_UABS\_G0 = 268435719

##### [` AARCH64_MOVW_UABS_G0_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_UABS_G0_NC>)

AARCH64\_MOVW\_UABS\_G0\_NC = 268435720

##### [` AARCH64_MOVW_UABS_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_UABS_G1>)

AARCH64\_MOVW\_UABS\_G1 = 268435721

##### [` AARCH64_MOVW_UABS_G1_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_UABS_G1_NC>)

AARCH64\_MOVW\_UABS\_G1\_NC = 268435722

##### [` AARCH64_MOVW_UABS_G2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_UABS_G2>)

AARCH64\_MOVW\_UABS\_G2 = 268435723

##### [` AARCH64_MOVW_UABS_G2_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_UABS_G2_NC>)

AARCH64\_MOVW\_UABS\_G2\_NC = 268435724

##### [` AARCH64_MOVW_UABS_G3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_MOVW_UABS_G3>)

AARCH64\_MOVW\_UABS\_G3 = 268435725

##### [` AARCH64_NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_NONE>)

AARCH64\_NONE = 268435456

##### [` AARCH64_PREL16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_PREL16>)

AARCH64\_PREL16 = 268435718

##### [` AARCH64_PREL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_PREL32>)

AARCH64\_PREL32 = 268435717

##### [` AARCH64_PREL64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_PREL64>)

AARCH64\_PREL64 = 268435716

##### [` AARCH64_RELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_RELATIVE>)

AARCH64\_RELATIVE = 268436483

##### [` AARCH64_TLSDESC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSDESC>)

AARCH64\_TLSDESC = 268436487

##### [` AARCH64_TLSDESC_ADD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSDESC_ADD>)

AARCH64\_TLSDESC\_ADD = 268436024

##### [` AARCH64_TLSDESC_ADD_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSDESC_ADD_LO12_NC>)

AARCH64\_TLSDESC\_ADD\_LO12\_NC = 268436020

##### [` AARCH64_TLSDESC_ADR_PAGE21 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSDESC_ADR_PAGE21>)

AARCH64\_TLSDESC\_ADR\_PAGE21 = 268436018

##### [` AARCH64_TLSDESC_ADR_PREL21 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSDESC_ADR_PREL21>)

AARCH64\_TLSDESC\_ADR\_PREL21 = 268436017

##### [` AARCH64_TLSDESC_CALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSDESC_CALL>)

AARCH64\_TLSDESC\_CALL = 268436025

##### [` AARCH64_TLSDESC_LD64_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSDESC_LD64_LO12_NC>)

AARCH64\_TLSDESC\_LD64\_LO12\_NC = 268436019

##### [` AARCH64_TLSDESC_LDR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSDESC_LDR>)

AARCH64\_TLSDESC\_LDR = 268436023

##### [` AARCH64_TLSDESC_LD_PREL19 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSDESC_LD_PREL19>)

AARCH64\_TLSDESC\_LD\_PREL19 = 268436016

##### [` AARCH64_TLSDESC_OFF_G0_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSDESC_OFF_G0_NC>)

AARCH64\_TLSDESC\_OFF\_G0\_NC = 268436022

##### [` AARCH64_TLSDESC_OFF_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSDESC_OFF_G1>)

AARCH64\_TLSDESC\_OFF\_G1 = 268436021

##### [` AARCH64_TLSGD_ADD_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSGD_ADD_LO12_NC>)

AARCH64\_TLSGD\_ADD\_LO12\_NC = 268435970

##### [` AARCH64_TLSGD_ADR_PAGE21 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSGD_ADR_PAGE21>)

AARCH64\_TLSGD\_ADR\_PAGE21 = 268435969

##### [` AARCH64_TLSGD_ADR_PREL21 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSGD_ADR_PREL21>)

AARCH64\_TLSGD\_ADR\_PREL21 = 268435968

##### [` AARCH64_TLSGD_MOVW_G0_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSGD_MOVW_G0_NC>)

AARCH64\_TLSGD\_MOVW\_G0\_NC = 268435972

##### [` AARCH64_TLSGD_MOVW_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSGD_MOVW_G1>)

AARCH64\_TLSGD\_MOVW\_G1 = 268435971

##### [` AARCH64_TLSIE_ADR_GOTTPREL_PAGE21 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSIE_ADR_GOTTPREL_PAGE21>)

AARCH64\_TLSIE\_ADR\_GOTTPREL\_PAGE21 = 268435997

##### [` AARCH64_TLSIE_LD64_GOTTPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSIE_LD64_GOTTPREL_LO12_NC>)

AARCH64\_TLSIE\_LD64\_GOTTPREL\_LO12\_NC = 268435998

##### [` AARCH64_TLSIE_LD_GOTTPREL_PREL19 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSIE_LD_GOTTPREL_PREL19>)

AARCH64\_TLSIE\_LD\_GOTTPREL\_PREL19 = 268435999

##### [` AARCH64_TLSIE_MOVW_GOTTPREL_G0_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSIE_MOVW_GOTTPREL_G0_NC>)

AARCH64\_TLSIE\_MOVW\_GOTTPREL\_G0\_NC = 268435996

##### [` AARCH64_TLSIE_MOVW_GOTTPREL_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSIE_MOVW_GOTTPREL_G1>)

AARCH64\_TLSIE\_MOVW\_GOTTPREL\_G1 = 268435995

##### [` AARCH64_TLSLD_ADD_DTPREL_HI12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_ADD_DTPREL_HI12>)

AARCH64\_TLSLD\_ADD\_DTPREL\_HI12 = 268435984

##### [` AARCH64_TLSLD_ADD_DTPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_ADD_DTPREL_LO12>)

AARCH64\_TLSLD\_ADD\_DTPREL\_LO12 = 268435985

##### [` AARCH64_TLSLD_ADD_DTPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_ADD_DTPREL_LO12_NC>)

AARCH64\_TLSLD\_ADD\_DTPREL\_LO12\_NC = 268435986

##### [` AARCH64_TLSLD_ADD_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_ADD_LO12_NC>)

AARCH64\_TLSLD\_ADD\_LO12\_NC = 268435975

##### [` AARCH64_TLSLD_ADR_PAGE21 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_ADR_PAGE21>)

AARCH64\_TLSLD\_ADR\_PAGE21 = 268435974

##### [` AARCH64_TLSLD_ADR_PREL21 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_ADR_PREL21>)

AARCH64\_TLSLD\_ADR\_PREL21 = 268435973

##### [` AARCH64_TLSLD_LDST128_DTPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_LDST128_DTPREL_LO12>)

AARCH64\_TLSLD\_LDST128\_DTPREL\_LO12 = 268436028

##### [` AARCH64_TLSLD_LDST128_DTPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_LDST128_DTPREL_LO12_NC>)

AARCH64\_TLSLD\_LDST128\_DTPREL\_LO12\_NC = 268436029

##### [` AARCH64_TLSLD_LDST16_DTPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_LDST16_DTPREL_LO12>)

AARCH64\_TLSLD\_LDST16\_DTPREL\_LO12 = 268435989

##### [` AARCH64_TLSLD_LDST16_DTPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_LDST16_DTPREL_LO12_NC>)

AARCH64\_TLSLD\_LDST16\_DTPREL\_LO12\_NC = 268435990

##### [` AARCH64_TLSLD_LDST32_DTPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_LDST32_DTPREL_LO12>)

AARCH64\_TLSLD\_LDST32\_DTPREL\_LO12 = 268435991

##### [` AARCH64_TLSLD_LDST32_DTPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_LDST32_DTPREL_LO12_NC>)

AARCH64\_TLSLD\_LDST32\_DTPREL\_LO12\_NC = 268435992

##### [` AARCH64_TLSLD_LDST64_DTPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_LDST64_DTPREL_LO12>)

AARCH64\_TLSLD\_LDST64\_DTPREL\_LO12 = 268435993

##### [` AARCH64_TLSLD_LDST64_DTPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_LDST64_DTPREL_LO12_NC>)

AARCH64\_TLSLD\_LDST64\_DTPREL\_LO12\_NC = 268435994

##### [` AARCH64_TLSLD_LDST8_DTPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_LDST8_DTPREL_LO12>)

AARCH64\_TLSLD\_LDST8\_DTPREL\_LO12 = 268435987

##### [` AARCH64_TLSLD_LDST8_DTPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_LDST8_DTPREL_LO12_NC>)

AARCH64\_TLSLD\_LDST8\_DTPREL\_LO12\_NC = 268435988

##### [` AARCH64_TLSLD_LD_PREL19 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_LD_PREL19>)

AARCH64\_TLSLD\_LD\_PREL19 = 268435978

##### [` AARCH64_TLSLD_MOVW_DTPREL_G0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_MOVW_DTPREL_G0>)

AARCH64\_TLSLD\_MOVW\_DTPREL\_G0 = 268435982

##### [` AARCH64_TLSLD_MOVW_DTPREL_G0_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_MOVW_DTPREL_G0_NC>)

AARCH64\_TLSLD\_MOVW\_DTPREL\_G0\_NC = 268435983

##### [` AARCH64_TLSLD_MOVW_DTPREL_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_MOVW_DTPREL_G1>)

AARCH64\_TLSLD\_MOVW\_DTPREL\_G1 = 268435980

##### [` AARCH64_TLSLD_MOVW_DTPREL_G1_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_MOVW_DTPREL_G1_NC>)

AARCH64\_TLSLD\_MOVW\_DTPREL\_G1\_NC = 268435981

##### [` AARCH64_TLSLD_MOVW_DTPREL_G2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_MOVW_DTPREL_G2>)

AARCH64\_TLSLD\_MOVW\_DTPREL\_G2 = 268435979

##### [` AARCH64_TLSLD_MOVW_G0_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_MOVW_G0_NC>)

AARCH64\_TLSLD\_MOVW\_G0\_NC = 268435977

##### [` AARCH64_TLSLD_MOVW_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLD_MOVW_G1>)

AARCH64\_TLSLD\_MOVW\_G1 = 268435976

##### [` AARCH64_TLSLE_ADD_TPREL_HI12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_ADD_TPREL_HI12>)

AARCH64\_TLSLE\_ADD\_TPREL\_HI12 = 268436005

##### [` AARCH64_TLSLE_ADD_TPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_ADD_TPREL_LO12>)

AARCH64\_TLSLE\_ADD\_TPREL\_LO12 = 268436006

##### [` AARCH64_TLSLE_ADD_TPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_ADD_TPREL_LO12_NC>)

AARCH64\_TLSLE\_ADD\_TPREL\_LO12\_NC = 268436007

##### [` AARCH64_TLSLE_LDST128_TPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_LDST128_TPREL_LO12>)

AARCH64\_TLSLE\_LDST128\_TPREL\_LO12 = 268436026

##### [` AARCH64_TLSLE_LDST128_TPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_LDST128_TPREL_LO12_NC>)

AARCH64\_TLSLE\_LDST128\_TPREL\_LO12\_NC = 268436027

##### [` AARCH64_TLSLE_LDST16_TPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_LDST16_TPREL_LO12>)

AARCH64\_TLSLE\_LDST16\_TPREL\_LO12 = 268436010

##### [` AARCH64_TLSLE_LDST16_TPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_LDST16_TPREL_LO12_NC>)

AARCH64\_TLSLE\_LDST16\_TPREL\_LO12\_NC = 268436011

##### [` AARCH64_TLSLE_LDST32_TPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_LDST32_TPREL_LO12>)

AARCH64\_TLSLE\_LDST32\_TPREL\_LO12 = 268436012

##### [` AARCH64_TLSLE_LDST32_TPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_LDST32_TPREL_LO12_NC>)

AARCH64\_TLSLE\_LDST32\_TPREL\_LO12\_NC = 268436013

##### [` AARCH64_TLSLE_LDST64_TPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_LDST64_TPREL_LO12>)

AARCH64\_TLSLE\_LDST64\_TPREL\_LO12 = 268436014

##### [` AARCH64_TLSLE_LDST64_TPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_LDST64_TPREL_LO12_NC>)

AARCH64\_TLSLE\_LDST64\_TPREL\_LO12\_NC = 268436015

##### [` AARCH64_TLSLE_LDST8_TPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_LDST8_TPREL_LO12>)

AARCH64\_TLSLE\_LDST8\_TPREL\_LO12 = 268436008

##### [` AARCH64_TLSLE_LDST8_TPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_LDST8_TPREL_LO12_NC>)

AARCH64\_TLSLE\_LDST8\_TPREL\_LO12\_NC = 268436009

##### [` AARCH64_TLSLE_MOVW_TPREL_G0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_MOVW_TPREL_G0>)

AARCH64\_TLSLE\_MOVW\_TPREL\_G0 = 268436003

##### [` AARCH64_TLSLE_MOVW_TPREL_G0_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_MOVW_TPREL_G0_NC>)

AARCH64\_TLSLE\_MOVW\_TPREL\_G0\_NC = 268436004

##### [` AARCH64_TLSLE_MOVW_TPREL_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_MOVW_TPREL_G1>)

AARCH64\_TLSLE\_MOVW\_TPREL\_G1 = 268436001

##### [` AARCH64_TLSLE_MOVW_TPREL_G1_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_MOVW_TPREL_G1_NC>)

AARCH64\_TLSLE\_MOVW\_TPREL\_G1\_NC = 268436002

##### [` AARCH64_TLSLE_MOVW_TPREL_G2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLSLE_MOVW_TPREL_G2>)

AARCH64\_TLSLE\_MOVW\_TPREL\_G2 = 268436000

##### [` AARCH64_TLS_DTPMOD64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLS_DTPMOD64>)

AARCH64\_TLS\_DTPMOD64 = 268436485

##### [` AARCH64_TLS_DTPREL64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLS_DTPREL64>)

AARCH64\_TLS\_DTPREL64 = 268436484

##### [` AARCH64_TLS_TPREL64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TLS_TPREL64>)

AARCH64\_TLS\_TPREL64 = 268436486

##### [` AARCH64_TSTBR14 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.AARCH64_TSTBR14>)

AARCH64\_TSTBR14 = 268435735

##### [` ARM_ABS12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ABS12>)

ARM\_ABS12 = 402653190

##### [` ARM_ABS16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ABS16>)

ARM\_ABS16 = 402653189

##### [` ARM_ABS32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ABS32>)

ARM\_ABS32 = 402653186

##### [` ARM_ABS32_NOI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ABS32_NOI>)

ARM\_ABS32\_NOI = 402653239

##### [` ARM_ABS8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ABS8>)

ARM\_ABS8 = 402653192

##### [` ARM_ALU_PCREL_15_8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ALU_PCREL_15_8>)

ARM\_ALU\_PCREL\_15\_8 = 402653217

##### [` ARM_ALU_PCREL_23_15 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ALU_PCREL_23_15>)

ARM\_ALU\_PCREL\_23\_15 = 402653218

##### [` ARM_ALU_PCREL_7_0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ALU_PCREL_7_0>)

ARM\_ALU\_PCREL\_7\_0 = 402653216

##### [` ARM_ALU_PC_G0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ALU_PC_G0>)

ARM\_ALU\_PC\_G0 = 402653242

##### [` ARM_ALU_PC_G0_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ALU_PC_G0_NC>)

ARM\_ALU\_PC\_G0\_NC = 402653241

##### [` ARM_ALU_PC_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ALU_PC_G1>)

ARM\_ALU\_PC\_G1 = 402653244

##### [` ARM_ALU_PC_G1_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ALU_PC_G1_NC>)

ARM\_ALU\_PC\_G1\_NC = 402653243

##### [` ARM_ALU_PC_G2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ALU_PC_G2>)

ARM\_ALU\_PC\_G2 = 402653245

##### [` ARM_ALU_SBREL_19_12_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ALU_SBREL_19_12_NC>)

ARM\_ALU\_SBREL\_19\_12\_NC = 402653220

##### [` ARM_ALU_SBREL_27_20_CK `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ALU_SBREL_27_20_CK>)

ARM\_ALU\_SBREL\_27\_20\_CK = 402653221

##### [` ARM_ALU_SB_G0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ALU_SB_G0>)

ARM\_ALU\_SB\_G0 = 402653255

##### [` ARM_ALU_SB_G0_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ALU_SB_G0_NC>)

ARM\_ALU\_SB\_G0\_NC = 402653254

##### [` ARM_ALU_SB_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ALU_SB_G1>)

ARM\_ALU\_SB\_G1 = 402653257

##### [` ARM_ALU_SB_G1_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ALU_SB_G1_NC>)

ARM\_ALU\_SB\_G1\_NC = 402653256

##### [` ARM_ALU_SB_G2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ALU_SB_G2>)

ARM\_ALU\_SB\_G2 = 402653258

##### [` ARM_BASE_ABS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_BASE_ABS>)

ARM\_BASE\_ABS = 402653215

##### [` ARM_BASE_PREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_BASE_PREL>)

ARM\_BASE\_PREL = 402653209

##### [` ARM_BREL_ADJ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_BREL_ADJ>)

ARM\_BREL\_ADJ = 402653196

##### [` ARM_CALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_CALL>)

ARM\_CALL = 402653212

##### [` ARM_COPY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_COPY>)

ARM\_COPY = 402653204

##### [` ARM_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_GLOB_DAT>)

ARM\_GLOB\_DAT = 402653205

##### [` ARM_GNU_VTENTRY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_GNU_VTENTRY>)

ARM\_GNU\_VTENTRY = 402653284

##### [` ARM_GNU_VTINHERIT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_GNU_VTINHERIT>)

ARM\_GNU\_VTINHERIT = 402653285

##### [` ARM_GOTOFF12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_GOTOFF12>)

ARM\_GOTOFF12 = 402653282

##### [` ARM_GOTOFF32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_GOTOFF32>)

ARM\_GOTOFF32 = 402653208

##### [` ARM_GOTRELAX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_GOTRELAX>)

ARM\_GOTRELAX = 402653283

##### [` ARM_GOT_ABS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_GOT_ABS>)

ARM\_GOT\_ABS = 402653279

##### [` ARM_GOT_BREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_GOT_BREL>)

ARM\_GOT\_BREL = 402653210

##### [` ARM_GOT_BREL12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_GOT_BREL12>)

ARM\_GOT\_BREL12 = 402653281

##### [` ARM_GOT_PREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_GOT_PREL>)

ARM\_GOT\_PREL = 402653280

##### [` ARM_IRELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_IRELATIVE>)

ARM\_IRELATIVE = 402653344

##### [` ARM_JUMP24 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_JUMP24>)

ARM\_JUMP24 = 402653213

##### [` ARM_JUMP_SLOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_JUMP_SLOT>)

ARM\_JUMP\_SLOT = 402653206

##### [` ARM_LDC_PC_G0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDC_PC_G0>)

ARM\_LDC\_PC\_G0 = 402653251

##### [` ARM_LDC_PC_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDC_PC_G1>)

ARM\_LDC\_PC\_G1 = 402653252

##### [` ARM_LDC_PC_G2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDC_PC_G2>)

ARM\_LDC\_PC\_G2 = 402653253

##### [` ARM_LDC_SB_G0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDC_SB_G0>)

ARM\_LDC\_SB\_G0 = 402653265

##### [` ARM_LDC_SB_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDC_SB_G1>)

ARM\_LDC\_SB\_G1 = 402653266

##### [` ARM_LDC_SB_G2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDC_SB_G2>)

ARM\_LDC\_SB\_G2 = 402653267

##### [` ARM_LDRS_PC_G0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDRS_PC_G0>)

ARM\_LDRS\_PC\_G0 = 402653248

##### [` ARM_LDRS_PC_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDRS_PC_G1>)

ARM\_LDRS\_PC\_G1 = 402653249

##### [` ARM_LDRS_PC_G2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDRS_PC_G2>)

ARM\_LDRS\_PC\_G2 = 402653250

##### [` ARM_LDRS_SB_G0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDRS_SB_G0>)

ARM\_LDRS\_SB\_G0 = 402653262

##### [` ARM_LDRS_SB_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDRS_SB_G1>)

ARM\_LDRS\_SB\_G1 = 402653263

##### [` ARM_LDRS_SB_G2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDRS_SB_G2>)

ARM\_LDRS\_SB\_G2 = 402653264

##### [` ARM_LDR_PC_G0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDR_PC_G0>)

ARM\_LDR\_PC\_G0 = 402653188

##### [` ARM_LDR_PC_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDR_PC_G1>)

ARM\_LDR\_PC\_G1 = 402653246

##### [` ARM_LDR_PC_G2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDR_PC_G2>)

ARM\_LDR\_PC\_G2 = 402653247

##### [` ARM_LDR_SBREL_11_0_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDR_SBREL_11_0_NC>)

ARM\_LDR\_SBREL\_11\_0\_NC = 402653219

##### [` ARM_LDR_SB_G0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDR_SB_G0>)

ARM\_LDR\_SB\_G0 = 402653259

##### [` ARM_LDR_SB_G1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDR_SB_G1>)

ARM\_LDR\_SB\_G1 = 402653260

##### [` ARM_LDR_SB_G2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_LDR_SB_G2>)

ARM\_LDR\_SB\_G2 = 402653261

##### [` ARM_ME_TOO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_ME_TOO>)

ARM\_ME\_TOO = 402653312

##### [` ARM_MOVT_ABS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_MOVT_ABS>)

ARM\_MOVT\_ABS = 402653228

##### [` ARM_MOVT_BREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_MOVT_BREL>)

ARM\_MOVT\_BREL = 402653269

##### [` ARM_MOVT_PREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_MOVT_PREL>)

ARM\_MOVT\_PREL = 402653230

##### [` ARM_MOVW_ABS_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_MOVW_ABS_NC>)

ARM\_MOVW\_ABS\_NC = 402653227

##### [` ARM_MOVW_BREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_MOVW_BREL>)

ARM\_MOVW\_BREL = 402653270

##### [` ARM_MOVW_BREL_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_MOVW_BREL_NC>)

ARM\_MOVW\_BREL\_NC = 402653268

##### [` ARM_MOVW_PREL_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_MOVW_PREL_NC>)

ARM\_MOVW\_PREL\_NC = 402653229

##### [` ARM_NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_NONE>)

ARM\_NONE = 402653184

##### [` ARM_PC24 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PC24>)

ARM\_PC24 = 402653185

##### [` ARM_PLT32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PLT32>)

ARM\_PLT32 = 402653211

##### [` ARM_PLT32_ABS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PLT32_ABS>)

ARM\_PLT32\_ABS = 402653278

##### [` ARM_PREL31 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PREL31>)

ARM\_PREL31 = 402653226

##### [` ARM_PRIVATE_0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PRIVATE_0>)

ARM\_PRIVATE\_0 = 402653296

##### [` ARM_PRIVATE_1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PRIVATE_1>)

ARM\_PRIVATE\_1 = 402653297

##### [` ARM_PRIVATE_10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PRIVATE_10>)

ARM\_PRIVATE\_10 = 402653306

##### [` ARM_PRIVATE_11 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PRIVATE_11>)

ARM\_PRIVATE\_11 = 402653307

##### [` ARM_PRIVATE_12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PRIVATE_12>)

ARM\_PRIVATE\_12 = 402653308

##### [` ARM_PRIVATE_13 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PRIVATE_13>)

ARM\_PRIVATE\_13 = 402653309

##### [` ARM_PRIVATE_14 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PRIVATE_14>)

ARM\_PRIVATE\_14 = 402653310

##### [` ARM_PRIVATE_15 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PRIVATE_15>)

ARM\_PRIVATE\_15 = 402653311

##### [` ARM_PRIVATE_2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PRIVATE_2>)

ARM\_PRIVATE\_2 = 402653298

##### [` ARM_PRIVATE_3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PRIVATE_3>)

ARM\_PRIVATE\_3 = 402653299

##### [` ARM_PRIVATE_4 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PRIVATE_4>)

ARM\_PRIVATE\_4 = 402653300

##### [` ARM_PRIVATE_5 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PRIVATE_5>)

ARM\_PRIVATE\_5 = 402653301

##### [` ARM_PRIVATE_6 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PRIVATE_6>)

ARM\_PRIVATE\_6 = 402653302

##### [` ARM_PRIVATE_7 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PRIVATE_7>)

ARM\_PRIVATE\_7 = 402653303

##### [` ARM_PRIVATE_8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PRIVATE_8>)

ARM\_PRIVATE\_8 = 402653304

##### [` ARM_PRIVATE_9 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_PRIVATE_9>)

ARM\_PRIVATE\_9 = 402653305

##### [` ARM_RBASE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_RBASE>)

ARM\_RBASE = 402653438

##### [` ARM_REL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_REL32>)

ARM\_REL32 = 402653187

##### [` ARM_REL32_NOI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_REL32_NOI>)

ARM\_REL32\_NOI = 402653240

##### [` ARM_RELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_RELATIVE>)

ARM\_RELATIVE = 402653207

##### [` ARM_RPC24 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_RPC24>)

ARM\_RPC24 = 402653437

##### [` ARM_RREL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_RREL32>)

ARM\_RREL32 = 402653436

##### [` ARM_RSBREL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_RSBREL32>)

ARM\_RSBREL32 = 402653434

##### [` ARM_RXPC25 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_RXPC25>)

ARM\_RXPC25 = 402653433

##### [` ARM_SBREL31 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_SBREL31>)

ARM\_SBREL31 = 402653223

##### [` ARM_SBREL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_SBREL32>)

ARM\_SBREL32 = 402653193

##### [` ARM_TARGET1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TARGET1>)

ARM\_TARGET1 = 402653222

##### [` ARM_TARGET2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TARGET2>)

ARM\_TARGET2 = 402653225

##### [` ARM_THM_ABS5 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_ABS5>)

ARM\_THM\_ABS5 = 402653191

##### [` ARM_THM_ALU_PREL_11_0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_ALU_PREL_11_0>)

ARM\_THM\_ALU\_PREL\_11\_0 = 402653237

##### [` ARM_THM_CALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_CALL>)

ARM\_THM\_CALL = 402653194

##### [` ARM_THM_JUMP11 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_JUMP11>)

ARM\_THM\_JUMP11 = 402653286

##### [` ARM_THM_JUMP19 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_JUMP19>)

ARM\_THM\_JUMP19 = 402653235

##### [` ARM_THM_JUMP24 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_JUMP24>)

ARM\_THM\_JUMP24 = 402653214

##### [` ARM_THM_JUMP6 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_JUMP6>)

ARM\_THM\_JUMP6 = 402653236

##### [` ARM_THM_JUMP8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_JUMP8>)

ARM\_THM\_JUMP8 = 402653287

##### [` ARM_THM_MOVT_ABS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_MOVT_ABS>)

ARM\_THM\_MOVT\_ABS = 402653232

##### [` ARM_THM_MOVT_BREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_MOVT_BREL>)

ARM\_THM\_MOVT\_BREL = 402653272

##### [` ARM_THM_MOVT_PREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_MOVT_PREL>)

ARM\_THM\_MOVT\_PREL = 402653234

##### [` ARM_THM_MOVW_ABS_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_MOVW_ABS_NC>)

ARM\_THM\_MOVW\_ABS\_NC = 402653231

##### [` ARM_THM_MOVW_BREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_MOVW_BREL>)

ARM\_THM\_MOVW\_BREL = 402653273

##### [` ARM_THM_MOVW_BREL_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_MOVW_BREL_NC>)

ARM\_THM\_MOVW\_BREL\_NC = 402653271

##### [` ARM_THM_MOVW_PREL_NC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_MOVW_PREL_NC>)

ARM\_THM\_MOVW\_PREL\_NC = 402653233

##### [` ARM_THM_PC12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_PC12>)

ARM\_THM\_PC12 = 402653238

##### [` ARM_THM_PC8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_PC8>)

ARM\_THM\_PC8 = 402653195

##### [` ARM_THM_RPC22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_RPC22>)

ARM\_THM\_RPC22 = 402653435

##### [` ARM_THM_SWI8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_SWI8>)

ARM\_THM\_SWI8 = 402653198

##### [` ARM_THM_TLS_CALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_TLS_CALL>)

ARM\_THM\_TLS\_CALL = 402653277

##### [` ARM_THM_TLS_DESCSEQ16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_TLS_DESCSEQ16>)

ARM\_THM\_TLS\_DESCSEQ16 = 402653313

##### [` ARM_THM_TLS_DESCSEQ32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_TLS_DESCSEQ32>)

ARM\_THM\_TLS\_DESCSEQ32 = 402653314

##### [` ARM_THM_XPC22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_THM_XPC22>)

ARM\_THM\_XPC22 = 402653200

##### [` ARM_TLS_CALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TLS_CALL>)

ARM\_TLS\_CALL = 402653275

##### [` ARM_TLS_DESC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TLS_DESC>)

ARM\_TLS\_DESC = 402653197

##### [` ARM_TLS_DESCSEQ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TLS_DESCSEQ>)

ARM\_TLS\_DESCSEQ = 402653276

##### [` ARM_TLS_DTPMOD32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TLS_DTPMOD32>)

ARM\_TLS\_DTPMOD32 = 402653201

##### [` ARM_TLS_DTPOFF32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TLS_DTPOFF32>)

ARM\_TLS\_DTPOFF32 = 402653202

##### [` ARM_TLS_GD32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TLS_GD32>)

ARM\_TLS\_GD32 = 402653288

##### [` ARM_TLS_GOTDESC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TLS_GOTDESC>)

ARM\_TLS\_GOTDESC = 402653274

##### [` ARM_TLS_IE12GP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TLS_IE12GP>)

ARM\_TLS\_IE12GP = 402653295

##### [` ARM_TLS_IE32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TLS_IE32>)

ARM\_TLS\_IE32 = 402653291

##### [` ARM_TLS_LDM32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TLS_LDM32>)

ARM\_TLS\_LDM32 = 402653289

##### [` ARM_TLS_LDO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TLS_LDO12>)

ARM\_TLS\_LDO12 = 402653293

##### [` ARM_TLS_LDO32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TLS_LDO32>)

ARM\_TLS\_LDO32 = 402653290

##### [` ARM_TLS_LE12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TLS_LE12>)

ARM\_TLS\_LE12 = 402653294

##### [` ARM_TLS_LE32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TLS_LE32>)

ARM\_TLS\_LE32 = 402653292

##### [` ARM_TLS_TPOFF32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_TLS_TPOFF32>)

ARM\_TLS\_TPOFF32 = 402653203

##### [` ARM_V4BX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_V4BX>)

ARM\_V4BX = 402653224

##### [` ARM_XPC25 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.ARM_XPC25>)

ARM\_XPC25 = 402653199

##### [` BPF_64_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.BPF_64_32>)

BPF\_64\_32 = 1744830474

##### [` BPF_64_64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.BPF_64_64>)

BPF\_64\_64 = 1744830465

##### [` BPF_64_ABS32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.BPF_64_ABS32>)

BPF\_64\_ABS32 = 1744830467

##### [` BPF_64_ABS64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.BPF_64_ABS64>)

BPF\_64\_ABS64 = 1744830466

##### [` BPF_64_NODYLD32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.BPF_64_NODYLD32>)

BPF\_64\_NODYLD32 = 1744830468

##### [` BPF_NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.BPF_NONE>)

BPF\_NONE = 1744830464

##### [` HEX_10_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_10_X>)

HEX\_10\_X = 536870938

##### [` HEX_11_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_11_X>)

HEX\_11\_X = 536870937

##### [` HEX_12_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_12_X>)

HEX\_12\_X = 536870936

##### [` HEX_16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_16>)

HEX\_16 = 536870919

##### [` HEX_16_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_16_X>)

HEX\_16\_X = 536870935

##### [` HEX_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_32>)

HEX\_32 = 536870918

##### [` HEX_32_6_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_32_6_X>)

HEX\_32\_6\_X = 536870929

##### [` HEX_32_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_32_PCREL>)

HEX\_32\_PCREL = 536870943

##### [` HEX_6_PCREL_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_6_PCREL_X>)

HEX\_6\_PCREL\_X = 536870977

##### [` HEX_6_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_6_X>)

HEX\_6\_X = 536870942

##### [` HEX_7_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_7_X>)

HEX\_7\_X = 536870941

##### [` HEX_8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_8>)

HEX\_8 = 536870920

##### [` HEX_8_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_8_X>)

HEX\_8\_X = 536870940

##### [` HEX_9_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_9_X>)

HEX\_9\_X = 536870939

##### [` HEX_B13_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_B13_PCREL>)

HEX\_B13\_PCREL = 536870926

##### [` HEX_B13_PCREL_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_B13_PCREL_X>)

HEX\_B13\_PCREL\_X = 536870932

##### [` HEX_B15_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_B15_PCREL>)

HEX\_B15\_PCREL = 536870914

##### [` HEX_B15_PCREL_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_B15_PCREL_X>)

HEX\_B15\_PCREL\_X = 536870931

##### [` HEX_B22_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_B22_PCREL>)

HEX\_B22\_PCREL = 536870913

##### [` HEX_B22_PCREL_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_B22_PCREL_X>)

HEX\_B22\_PCREL\_X = 536870930

##### [` HEX_B32_PCREL_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_B32_PCREL_X>)

HEX\_B32\_PCREL\_X = 536870928

##### [` HEX_B7_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_B7_PCREL>)

HEX\_B7\_PCREL = 536870915

##### [` HEX_B7_PCREL_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_B7_PCREL_X>)

HEX\_B7\_PCREL\_X = 536870934

##### [` HEX_B9_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_B9_PCREL>)

HEX\_B9\_PCREL = 536870927

##### [` HEX_B9_PCREL_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_B9_PCREL_X>)

HEX\_B9\_PCREL\_X = 536870933

##### [` HEX_COPY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_COPY>)

HEX\_COPY = 536870944

##### [` HEX_DTPMOD_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_DTPMOD_32>)

HEX\_DTPMOD\_32 = 536870956

##### [` HEX_DTPREL_11_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_DTPREL_11_X>)

HEX\_DTPREL\_11\_X = 536870986

##### [` HEX_DTPREL_16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_DTPREL_16>)

HEX\_DTPREL\_16 = 536870960

##### [` HEX_DTPREL_16_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_DTPREL_16_X>)

HEX\_DTPREL\_16\_X = 536870985

##### [` HEX_DTPREL_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_DTPREL_32>)

HEX\_DTPREL\_32 = 536870959

##### [` HEX_DTPREL_32_6_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_DTPREL_32_6_X>)

HEX\_DTPREL\_32\_6\_X = 536870984

##### [` HEX_DTPREL_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_DTPREL_HI16>)

HEX\_DTPREL\_HI16 = 536870958

##### [` HEX_DTPREL_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_DTPREL_LO16>)

HEX\_DTPREL\_LO16 = 536870957

##### [` HEX_GD_GOT_11_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GD_GOT_11_X>)

HEX\_GD\_GOT\_11\_X = 536870989

##### [` HEX_GD_GOT_16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GD_GOT_16>)

HEX\_GD\_GOT\_16 = 536870965

##### [` HEX_GD_GOT_16_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GD_GOT_16_X>)

HEX\_GD\_GOT\_16\_X = 536870988

##### [` HEX_GD_GOT_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GD_GOT_32>)

HEX\_GD\_GOT\_32 = 536870964

##### [` HEX_GD_GOT_32_6_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GD_GOT_32_6_X>)

HEX\_GD\_GOT\_32\_6\_X = 536870987

##### [` HEX_GD_GOT_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GD_GOT_HI16>)

HEX\_GD\_GOT\_HI16 = 536870963

##### [` HEX_GD_GOT_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GD_GOT_LO16>)

HEX\_GD\_GOT\_LO16 = 536870962

##### [` HEX_GD_PLT_B22_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GD_PLT_B22_PCREL>)

HEX\_GD\_PLT\_B22\_PCREL = 536870961

##### [` HEX_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GLOB_DAT>)

HEX\_GLOB\_DAT = 536870945

##### [` HEX_GOTREL_11_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GOTREL_11_X>)

HEX\_GOTREL\_11\_X = 536870980

##### [` HEX_GOTREL_16_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GOTREL_16_X>)

HEX\_GOTREL\_16\_X = 536870979

##### [` HEX_GOTREL_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GOTREL_32>)

HEX\_GOTREL\_32 = 536870951

##### [` HEX_GOTREL_32_6_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GOTREL_32_6_X>)

HEX\_GOTREL\_32\_6\_X = 536870978

##### [` HEX_GOTREL_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GOTREL_HI16>)

HEX\_GOTREL\_HI16 = 536870950

##### [` HEX_GOTREL_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GOTREL_LO16>)

HEX\_GOTREL\_LO16 = 536870949

##### [` HEX_GOT_11_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GOT_11_X>)

HEX\_GOT\_11\_X = 536870983

##### [` HEX_GOT_16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GOT_16>)

HEX\_GOT\_16 = 536870955

##### [` HEX_GOT_16_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GOT_16_X>)

HEX\_GOT\_16\_X = 536870982

##### [` HEX_GOT_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GOT_32>)

HEX\_GOT\_32 = 536870954

##### [` HEX_GOT_32_6_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GOT_32_6_X>)

HEX\_GOT\_32\_6\_X = 536870981

##### [` HEX_GOT_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GOT_HI16>)

HEX\_GOT\_HI16 = 536870953

##### [` HEX_GOT_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GOT_LO16>)

HEX\_GOT\_LO16 = 536870952

##### [` HEX_GPREL16_0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GPREL16_0>)

HEX\_GPREL16\_0 = 536870921

##### [` HEX_GPREL16_1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GPREL16_1>)

HEX\_GPREL16\_1 = 536870922

##### [` HEX_GPREL16_2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GPREL16_2>)

HEX\_GPREL16\_2 = 536870923

##### [` HEX_GPREL16_3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_GPREL16_3>)

HEX\_GPREL16\_3 = 536870924

##### [` HEX_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_HI16>)

HEX\_HI16 = 536870917

##### [` HEX_HL16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_HL16>)

HEX\_HL16 = 536870925

##### [` HEX_IE_16_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_IE_16_X>)

HEX\_IE\_16\_X = 536870991

##### [` HEX_IE_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_IE_32>)

HEX\_IE\_32 = 536870968

##### [` HEX_IE_32_6_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_IE_32_6_X>)

HEX\_IE\_32\_6\_X = 536870990

##### [` HEX_IE_GOT_11_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_IE_GOT_11_X>)

HEX\_IE\_GOT\_11\_X = 536870994

##### [` HEX_IE_GOT_16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_IE_GOT_16>)

HEX\_IE\_GOT\_16 = 536870972

##### [` HEX_IE_GOT_16_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_IE_GOT_16_X>)

HEX\_IE\_GOT\_16\_X = 536870993

##### [` HEX_IE_GOT_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_IE_GOT_32>)

HEX\_IE\_GOT\_32 = 536870971

##### [` HEX_IE_GOT_32_6_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_IE_GOT_32_6_X>)

HEX\_IE\_GOT\_32\_6\_X = 536870992

##### [` HEX_IE_GOT_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_IE_GOT_HI16>)

HEX\_IE\_GOT\_HI16 = 536870970

##### [` HEX_IE_GOT_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_IE_GOT_LO16>)

HEX\_IE\_GOT\_LO16 = 536870969

##### [` HEX_IE_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_IE_HI16>)

HEX\_IE\_HI16 = 536870967

##### [` HEX_IE_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_IE_LO16>)

HEX\_IE\_LO16 = 536870966

##### [` HEX_JMP_SLOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_JMP_SLOT>)

HEX\_JMP\_SLOT = 536870946

##### [` HEX_LD_GOT_11_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_LD_GOT_11_X>)

HEX\_LD\_GOT\_11\_X = 536871005

##### [` HEX_LD_GOT_16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_LD_GOT_16>)

HEX\_LD\_GOT\_16 = 536871002

##### [` HEX_LD_GOT_16_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_LD_GOT_16_X>)

HEX\_LD\_GOT\_16\_X = 536871004

##### [` HEX_LD_GOT_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_LD_GOT_32>)

HEX\_LD\_GOT\_32 = 536871001

##### [` HEX_LD_GOT_32_6_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_LD_GOT_32_6_X>)

HEX\_LD\_GOT\_32\_6\_X = 536871003

##### [` HEX_LD_GOT_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_LD_GOT_HI16>)

HEX\_LD\_GOT\_HI16 = 536871000

##### [` HEX_LD_GOT_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_LD_GOT_LO16>)

HEX\_LD\_GOT\_LO16 = 536870999

##### [` HEX_LD_PLT_B22_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_LD_PLT_B22_PCREL>)

HEX\_LD\_PLT\_B22\_PCREL = 536870998

##### [` HEX_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_LO16>)

HEX\_LO16 = 536870916

##### [` HEX_NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_NONE>)

HEX\_NONE = 536870912

##### [` HEX_PLT_B22_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_PLT_B22_PCREL>)

HEX\_PLT\_B22\_PCREL = 536870948

##### [` HEX_RELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_RELATIVE>)

HEX\_RELATIVE = 536870947

##### [` HEX_TPREL_11_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_TPREL_11_X>)

HEX\_TPREL\_11\_X = 536870997

##### [` HEX_TPREL_16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_TPREL_16>)

HEX\_TPREL\_16 = 536870976

##### [` HEX_TPREL_16_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_TPREL_16_X>)

HEX\_TPREL\_16\_X = 536870996

##### [` HEX_TPREL_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_TPREL_32>)

HEX\_TPREL\_32 = 536870975

##### [` HEX_TPREL_32_6_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_TPREL_32_6_X>)

HEX\_TPREL\_32\_6\_X = 536870995

##### [` HEX_TPREL_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_TPREL_HI16>)

HEX\_TPREL\_HI16 = 536870974

##### [` HEX_TPREL_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.HEX_TPREL_LO16>)

HEX\_TPREL\_LO16 = 536870973

##### [` LARCH_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_32>)

LARCH\_32 = 805306369

##### [` LARCH_32_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_32_PCREL>)

LARCH\_32\_PCREL = 805306467

##### [` LARCH_64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_64>)

LARCH\_64 = 805306370

##### [` LARCH_64_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_64_PCREL>)

LARCH\_64\_PCREL = 805306477

##### [` LARCH_ABS64_HI12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_ABS64_HI12>)

LARCH\_ABS64\_HI12 = 805306438

##### [` LARCH_ABS64_LO20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_ABS64_LO20>)

LARCH\_ABS64\_LO20 = 805306437

##### [` LARCH_ABS_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_ABS_HI20>)

LARCH\_ABS\_HI20 = 805306435

##### [` LARCH_ABS_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_ABS_LO12>)

LARCH\_ABS\_LO12 = 805306436

##### [` LARCH_ADD16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_ADD16>)

LARCH\_ADD16 = 805306416

##### [` LARCH_ADD24 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_ADD24>)

LARCH\_ADD24 = 805306417

##### [` LARCH_ADD32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_ADD32>)

LARCH\_ADD32 = 805306418

##### [` LARCH_ADD6 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_ADD6>)

LARCH\_ADD6 = 805306473

##### [` LARCH_ADD64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_ADD64>)

LARCH\_ADD64 = 805306419

##### [` LARCH_ADD8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_ADD8>)

LARCH\_ADD8 = 805306415

##### [` LARCH_ADD_ULEB128 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_ADD_ULEB128>)

LARCH\_ADD\_ULEB128 = 805306475

##### [` LARCH_ALIGN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_ALIGN>)

LARCH\_ALIGN = 805306470

##### [` LARCH_B16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_B16>)

LARCH\_B16 = 805306432

##### [` LARCH_B21 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_B21>)

LARCH\_B21 = 805306433

##### [` LARCH_B26 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_B26>)

LARCH\_B26 = 805306434

##### [` LARCH_CALL36 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_CALL36>)

LARCH\_CALL36 = 805306478

##### [` LARCH_COPY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_COPY>)

LARCH\_COPY = 805306372

##### [` LARCH_GNU_VTENTRY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_GNU_VTENTRY>)

LARCH\_GNU\_VTENTRY = 805306426

##### [` LARCH_GNU_VTINHERIT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_GNU_VTINHERIT>)

LARCH\_GNU\_VTINHERIT = 805306425

##### [` LARCH_GOT64_HI12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_GOT64_HI12>)

LARCH\_GOT64\_HI12 = 805306450

##### [` LARCH_GOT64_LO20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_GOT64_LO20>)

LARCH\_GOT64\_LO20 = 805306449

##### [` LARCH_GOT64_PC_HI12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_GOT64_PC_HI12>)

LARCH\_GOT64\_PC\_HI12 = 805306446

##### [` LARCH_GOT64_PC_LO20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_GOT64_PC_LO20>)

LARCH\_GOT64\_PC\_LO20 = 805306445

##### [` LARCH_GOT_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_GOT_HI20>)

LARCH\_GOT\_HI20 = 805306447

##### [` LARCH_GOT_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_GOT_LO12>)

LARCH\_GOT\_LO12 = 805306448

##### [` LARCH_GOT_PC_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_GOT_PC_HI20>)

LARCH\_GOT\_PC\_HI20 = 805306443

##### [` LARCH_GOT_PC_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_GOT_PC_LO12>)

LARCH\_GOT\_PC\_LO12 = 805306444

##### [` LARCH_IRELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_IRELATIVE>)

LARCH\_IRELATIVE = 805306380

##### [` LARCH_JUMP_SLOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_JUMP_SLOT>)

LARCH\_JUMP\_SLOT = 805306373

##### [` LARCH_MARK_LA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_MARK_LA>)

LARCH\_MARK\_LA = 805306388

##### [` LARCH_MARK_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_MARK_PCREL>)

LARCH\_MARK\_PCREL = 805306389

##### [` LARCH_NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_NONE>)

LARCH\_NONE = 805306368

##### [` LARCH_PCALA64_HI12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_PCALA64_HI12>)

LARCH\_PCALA64\_HI12 = 805306442

##### [` LARCH_PCALA64_LO20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_PCALA64_LO20>)

LARCH\_PCALA64\_LO20 = 805306441

##### [` LARCH_PCALA_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_PCALA_HI20>)

LARCH\_PCALA\_HI20 = 805306439

##### [` LARCH_PCALA_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_PCALA_LO12>)

LARCH\_PCALA\_LO12 = 805306440

##### [` LARCH_PCREL20_S2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_PCREL20_S2>)

LARCH\_PCREL20\_S2 = 805306471

##### [` LARCH_RELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_RELATIVE>)

LARCH\_RELATIVE = 805306371

##### [` LARCH_RELAX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_RELAX>)

LARCH\_RELAX = 805306468

##### [` LARCH_SOP_ADD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_ADD>)

LARCH\_SOP\_ADD = 805306403

##### [` LARCH_SOP_AND `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_AND>)

LARCH\_SOP\_AND = 805306404

##### [` LARCH_SOP_ASSERT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_ASSERT>)

LARCH\_SOP\_ASSERT = 805306398

##### [` LARCH_SOP_IF_ELSE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_IF_ELSE>)

LARCH\_SOP\_IF\_ELSE = 805306405

##### [` LARCH_SOP_NOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_NOT>)

LARCH\_SOP\_NOT = 805306399

##### [` LARCH_SOP_POP_32_S_0_10_10_16_S2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_POP_32_S_0_10_10_16_S2>)

LARCH\_SOP\_POP\_32\_S\_0\_10\_10\_16\_S2 = 805306413

##### [` LARCH_SOP_POP_32_S_0_5_10_16_S2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_POP_32_S_0_5_10_16_S2>)

LARCH\_SOP\_POP\_32\_S\_0\_5\_10\_16\_S2 = 805306412

##### [` LARCH_SOP_POP_32_S_10_12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_POP_32_S_10_12>)

LARCH\_SOP\_POP\_32\_S\_10\_12 = 805306408

##### [` LARCH_SOP_POP_32_S_10_16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_POP_32_S_10_16>)

LARCH\_SOP\_POP\_32\_S\_10\_16 = 805306409

##### [` LARCH_SOP_POP_32_S_10_16_S2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_POP_32_S_10_16_S2>)

LARCH\_SOP\_POP\_32\_S\_10\_16\_S2 = 805306410

##### [` LARCH_SOP_POP_32_S_10_5 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_POP_32_S_10_5>)

LARCH\_SOP\_POP\_32\_S\_10\_5 = 805306406

##### [` LARCH_SOP_POP_32_S_5_20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_POP_32_S_5_20>)

LARCH\_SOP\_POP\_32\_S\_5\_20 = 805306411

##### [` LARCH_SOP_POP_32_U `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_POP_32_U>)

LARCH\_SOP\_POP\_32\_U = 805306414

##### [` LARCH_SOP_POP_32_U_10_12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_POP_32_U_10_12>)

LARCH\_SOP\_POP\_32\_U\_10\_12 = 805306407

##### [` LARCH_SOP_PUSH_ABSOLUTE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_PUSH_ABSOLUTE>)

LARCH\_SOP\_PUSH\_ABSOLUTE = 805306391

##### [` LARCH_SOP_PUSH_DUP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_PUSH_DUP>)

LARCH\_SOP\_PUSH\_DUP = 805306392

##### [` LARCH_SOP_PUSH_GPREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_PUSH_GPREL>)

LARCH\_SOP\_PUSH\_GPREL = 805306393

##### [` LARCH_SOP_PUSH_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_PUSH_PCREL>)

LARCH\_SOP\_PUSH\_PCREL = 805306390

##### [` LARCH_SOP_PUSH_PLT_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_PUSH_PLT_PCREL>)

LARCH\_SOP\_PUSH\_PLT\_PCREL = 805306397

##### [` LARCH_SOP_PUSH_TLS_GD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_PUSH_TLS_GD>)

LARCH\_SOP\_PUSH\_TLS\_GD = 805306396

##### [` LARCH_SOP_PUSH_TLS_GOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_PUSH_TLS_GOT>)

LARCH\_SOP\_PUSH\_TLS\_GOT = 805306395

##### [` LARCH_SOP_PUSH_TLS_TPREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_PUSH_TLS_TPREL>)

LARCH\_SOP\_PUSH\_TLS\_TPREL = 805306394

##### [` LARCH_SOP_SL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_SL>)

LARCH\_SOP\_SL = 805306401

##### [` LARCH_SOP_SR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_SR>)

LARCH\_SOP\_SR = 805306402

##### [` LARCH_SOP_SUB `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SOP_SUB>)

LARCH\_SOP\_SUB = 805306400

##### [` LARCH_SUB16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SUB16>)

LARCH\_SUB16 = 805306421

##### [` LARCH_SUB24 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SUB24>)

LARCH\_SUB24 = 805306422

##### [` LARCH_SUB32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SUB32>)

LARCH\_SUB32 = 805306423

##### [` LARCH_SUB6 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SUB6>)

LARCH\_SUB6 = 805306474

##### [` LARCH_SUB64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SUB64>)

LARCH\_SUB64 = 805306424

##### [` LARCH_SUB8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SUB8>)

LARCH\_SUB8 = 805306420

##### [` LARCH_SUB_ULEB128 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_SUB_ULEB128>)

LARCH\_SUB\_ULEB128 = 805306476

##### [` LARCH_TLS_DESC32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DESC32>)

LARCH\_TLS\_DESC32 = 805306381

##### [` LARCH_TLS_DESC64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DESC64>)

LARCH\_TLS\_DESC64 = 805306382

##### [` LARCH_TLS_DESC64_HI12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DESC64_HI12>)

LARCH\_TLS\_DESC64\_HI12 = 805306486

##### [` LARCH_TLS_DESC64_LO20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DESC64_LO20>)

LARCH\_TLS\_DESC64\_LO20 = 805306485

##### [` LARCH_TLS_DESC64_PC_HI12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DESC64_PC_HI12>)

LARCH\_TLS\_DESC64\_PC\_HI12 = 805306482

##### [` LARCH_TLS_DESC64_PC_LO20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DESC64_PC_LO20>)

LARCH\_TLS\_DESC64\_PC\_LO20 = 805306481

##### [` LARCH_TLS_DESC_CALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DESC_CALL>)

LARCH\_TLS\_DESC\_CALL = 805306488

##### [` LARCH_TLS_DESC_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DESC_HI20>)

LARCH\_TLS\_DESC\_HI20 = 805306483

##### [` LARCH_TLS_DESC_LD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DESC_LD>)

LARCH\_TLS\_DESC\_LD = 805306487

##### [` LARCH_TLS_DESC_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DESC_LO12>)

LARCH\_TLS\_DESC\_LO12 = 805306484

##### [` LARCH_TLS_DESC_PCREL20_S2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DESC_PCREL20_S2>)

LARCH\_TLS\_DESC\_PCREL20\_S2 = 805306494

##### [` LARCH_TLS_DESC_PC_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DESC_PC_HI20>)

LARCH\_TLS\_DESC\_PC\_HI20 = 805306479

##### [` LARCH_TLS_DESC_PC_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DESC_PC_LO12>)

LARCH\_TLS\_DESC\_PC\_LO12 = 805306480

##### [` LARCH_TLS_DTPMOD32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DTPMOD32>)

LARCH\_TLS\_DTPMOD32 = 805306374

##### [` LARCH_TLS_DTPMOD64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DTPMOD64>)

LARCH\_TLS\_DTPMOD64 = 805306375

##### [` LARCH_TLS_DTPREL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DTPREL32>)

LARCH\_TLS\_DTPREL32 = 805306376

##### [` LARCH_TLS_DTPREL64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_DTPREL64>)

LARCH\_TLS\_DTPREL64 = 805306377

##### [` LARCH_TLS_GD_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_GD_HI20>)

LARCH\_TLS\_GD\_HI20 = 805306466

##### [` LARCH_TLS_GD_PCREL20_S2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_GD_PCREL20_S2>)

LARCH\_TLS\_GD\_PCREL20\_S2 = 805306493

##### [` LARCH_TLS_GD_PC_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_GD_PC_HI20>)

LARCH\_TLS\_GD\_PC\_HI20 = 805306465

##### [` LARCH_TLS_IE64_HI12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_IE64_HI12>)

LARCH\_TLS\_IE64\_HI12 = 805306462

##### [` LARCH_TLS_IE64_LO20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_IE64_LO20>)

LARCH\_TLS\_IE64\_LO20 = 805306461

##### [` LARCH_TLS_IE64_PC_HI12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_IE64_PC_HI12>)

LARCH\_TLS\_IE64\_PC\_HI12 = 805306458

##### [` LARCH_TLS_IE64_PC_LO20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_IE64_PC_LO20>)

LARCH\_TLS\_IE64\_PC\_LO20 = 805306457

##### [` LARCH_TLS_IE_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_IE_HI20>)

LARCH\_TLS\_IE\_HI20 = 805306459

##### [` LARCH_TLS_IE_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_IE_LO12>)

LARCH\_TLS\_IE\_LO12 = 805306460

##### [` LARCH_TLS_IE_PC_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_IE_PC_HI20>)

LARCH\_TLS\_IE\_PC\_HI20 = 805306455

##### [` LARCH_TLS_IE_PC_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_IE_PC_LO12>)

LARCH\_TLS\_IE\_PC\_LO12 = 805306456

##### [` LARCH_TLS_LD_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_LD_HI20>)

LARCH\_TLS\_LD\_HI20 = 805306464

##### [` LARCH_TLS_LD_PCREL20_S2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_LD_PCREL20_S2>)

LARCH\_TLS\_LD\_PCREL20\_S2 = 805306492

##### [` LARCH_TLS_LD_PC_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_LD_PC_HI20>)

LARCH\_TLS\_LD\_PC\_HI20 = 805306463

##### [` LARCH_TLS_LE64_HI12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_LE64_HI12>)

LARCH\_TLS\_LE64\_HI12 = 805306454

##### [` LARCH_TLS_LE64_LO20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_LE64_LO20>)

LARCH\_TLS\_LE64\_LO20 = 805306453

##### [` LARCH_TLS_LE_ADD_R `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_LE_ADD_R>)

LARCH\_TLS\_LE\_ADD\_R = 805306490

##### [` LARCH_TLS_LE_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_LE_HI20>)

LARCH\_TLS\_LE\_HI20 = 805306451

##### [` LARCH_TLS_LE_HI20_R `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_LE_HI20_R>)

LARCH\_TLS\_LE\_HI20\_R = 805306489

##### [` LARCH_TLS_LE_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_LE_LO12>)

LARCH\_TLS\_LE\_LO12 = 805306452

##### [` LARCH_TLS_LE_LO12_R `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_LE_LO12_R>)

LARCH\_TLS\_LE\_LO12\_R = 805306491

##### [` LARCH_TLS_TPREL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_TPREL32>)

LARCH\_TLS\_TPREL32 = 805306378

##### [` LARCH_TLS_TPREL64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.LARCH_TLS_TPREL64>)

LARCH\_TLS\_TPREL64 = 805306379

##### [` MICROMIPS_26_S1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_26_S1>)

MICROMIPS\_26\_S1 = 939524229

##### [` MICROMIPS_CALL16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_CALL16>)

MICROMIPS\_CALL16 = 939524238

##### [` MICROMIPS_CALL_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_CALL_HI16>)

MICROMIPS\_CALL\_HI16 = 939524249

##### [` MICROMIPS_CALL_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_CALL_LO16>)

MICROMIPS\_CALL\_LO16 = 939524250

##### [` MICROMIPS_GOT16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_GOT16>)

MICROMIPS\_GOT16 = 939524234

##### [` MICROMIPS_GOT_DISP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_GOT_DISP>)

MICROMIPS\_GOT\_DISP = 939524241

##### [` MICROMIPS_GOT_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_GOT_HI16>)

MICROMIPS\_GOT\_HI16 = 939524244

##### [` MICROMIPS_GOT_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_GOT_LO16>)

MICROMIPS\_GOT\_LO16 = 939524245

##### [` MICROMIPS_GOT_OFST `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_GOT_OFST>)

MICROMIPS\_GOT\_OFST = 939524243

##### [` MICROMIPS_GOT_PAGE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_GOT_PAGE>)

MICROMIPS\_GOT\_PAGE = 939524242

##### [` MICROMIPS_GPREL16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_GPREL16>)

MICROMIPS\_GPREL16 = 939524232

##### [` MICROMIPS_GPREL7_S2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_GPREL7_S2>)

MICROMIPS\_GPREL7\_S2 = 939524268

##### [` MICROMIPS_HI0_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_HI0_LO16>)

MICROMIPS\_HI0\_LO16 = 939524253

##### [` MICROMIPS_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_HI16>)

MICROMIPS\_HI16 = 939524230

##### [` MICROMIPS_HIGHER `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_HIGHER>)

MICROMIPS\_HIGHER = 939524247

##### [` MICROMIPS_HIGHEST `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_HIGHEST>)

MICROMIPS\_HIGHEST = 939524248

##### [` MICROMIPS_JALR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_JALR>)

MICROMIPS\_JALR = 939524252

##### [` MICROMIPS_LITERAL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_LITERAL>)

MICROMIPS\_LITERAL = 939524233

##### [` MICROMIPS_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_LO16>)

MICROMIPS\_LO16 = 939524231

##### [` MICROMIPS_PC10_S1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_PC10_S1>)

MICROMIPS\_PC10\_S1 = 939524236

##### [` MICROMIPS_PC16_S1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_PC16_S1>)

MICROMIPS\_PC16\_S1 = 939524237

##### [` MICROMIPS_PC18_S3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_PC18_S3>)

MICROMIPS\_PC18\_S3 = 939524272

##### [` MICROMIPS_PC19_S2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_PC19_S2>)

MICROMIPS\_PC19\_S2 = 939524273

##### [` MICROMIPS_PC21_S2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_PC21_S2>)

MICROMIPS\_PC21\_S2 = 939524270

##### [` MICROMIPS_PC23_S2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_PC23_S2>)

MICROMIPS\_PC23\_S2 = 939524269

##### [` MICROMIPS_PC26_S2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_PC26_S2>)

MICROMIPS\_PC26\_S2 = 939524271

##### [` MICROMIPS_PC7_S1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_PC7_S1>)

MICROMIPS\_PC7\_S1 = 939524235

##### [` MICROMIPS_SCN_DISP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_SCN_DISP>)

MICROMIPS\_SCN\_DISP = 939524251

##### [` MICROMIPS_SUB `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_SUB>)

MICROMIPS\_SUB = 939524246

##### [` MICROMIPS_TLS_DTPREL_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_TLS_DTPREL_HI16>)

MICROMIPS\_TLS\_DTPREL\_HI16 = 939524260

##### [` MICROMIPS_TLS_DTPREL_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_TLS_DTPREL_LO16>)

MICROMIPS\_TLS\_DTPREL\_LO16 = 939524261

##### [` MICROMIPS_TLS_GD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_TLS_GD>)

MICROMIPS\_TLS\_GD = 939524258

##### [` MICROMIPS_TLS_GOTTPREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_TLS_GOTTPREL>)

MICROMIPS\_TLS\_GOTTPREL = 939524262

##### [` MICROMIPS_TLS_LDM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_TLS_LDM>)

MICROMIPS\_TLS\_LDM = 939524259

##### [` MICROMIPS_TLS_TPREL_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_TLS_TPREL_HI16>)

MICROMIPS\_TLS\_TPREL\_HI16 = 939524265

##### [` MICROMIPS_TLS_TPREL_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MICROMIPS_TLS_TPREL_LO16>)

MICROMIPS\_TLS\_TPREL\_LO16 = 939524266

##### [` MIPS16_26 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS16_26>)

MIPS16\_26 = 939524196

##### [` MIPS16_CALL16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS16_CALL16>)

MIPS16\_CALL16 = 939524199

##### [` MIPS16_GOT16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS16_GOT16>)

MIPS16\_GOT16 = 939524198

##### [` MIPS16_GPREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS16_GPREL>)

MIPS16\_GPREL = 939524197

##### [` MIPS16_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS16_HI16>)

MIPS16\_HI16 = 939524200

##### [` MIPS16_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS16_LO16>)

MIPS16\_LO16 = 939524201

##### [` MIPS16_TLS_DTPREL_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS16_TLS_DTPREL_HI16>)

MIPS16\_TLS\_DTPREL\_HI16 = 939524204

##### [` MIPS16_TLS_DTPREL_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS16_TLS_DTPREL_LO16>)

MIPS16\_TLS\_DTPREL\_LO16 = 939524205

##### [` MIPS16_TLS_GD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS16_TLS_GD>)

MIPS16\_TLS\_GD = 939524202

##### [` MIPS16_TLS_GOTTPREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS16_TLS_GOTTPREL>)

MIPS16\_TLS\_GOTTPREL = 939524206

##### [` MIPS16_TLS_LDM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS16_TLS_LDM>)

MIPS16\_TLS\_LDM = 939524203

##### [` MIPS16_TLS_TPREL_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS16_TLS_TPREL_HI16>)

MIPS16\_TLS\_TPREL\_HI16 = 939524207

##### [` MIPS16_TLS_TPREL_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS16_TLS_TPREL_LO16>)

MIPS16\_TLS\_TPREL\_LO16 = 939524208

##### [` MIPS_16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_16>)

MIPS\_16 = 939524097

##### [` MIPS_26 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_26>)

MIPS\_26 = 939524100

##### [` MIPS_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_32>)

MIPS\_32 = 939524098

##### [` MIPS_64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_64>)

MIPS\_64 = 939524114

##### [` MIPS_ADD_IMMEDIATE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_ADD_IMMEDIATE>)

MIPS\_ADD\_IMMEDIATE = 939524130

##### [` MIPS_CALL16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_CALL16>)

MIPS\_CALL16 = 939524107

##### [` MIPS_CALL_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_CALL_HI16>)

MIPS\_CALL\_HI16 = 939524126

##### [` MIPS_CALL_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_CALL_LO16>)

MIPS\_CALL\_LO16 = 939524127

##### [` MIPS_COPY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_COPY>)

MIPS\_COPY = 939524222

##### [` MIPS_DELETE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_DELETE>)

MIPS\_DELETE = 939524123

##### [` MIPS_EH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_EH>)

MIPS\_EH = 939524345

##### [` MIPS_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_GLOB_DAT>)

MIPS\_GLOB\_DAT = 939524147

##### [` MIPS_GOT16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_GOT16>)

MIPS\_GOT16 = 939524105

##### [` MIPS_GOT_DISP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_GOT_DISP>)

MIPS\_GOT\_DISP = 939524115

##### [` MIPS_GOT_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_GOT_HI16>)

MIPS\_GOT\_HI16 = 939524118

##### [` MIPS_GOT_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_GOT_LO16>)

MIPS\_GOT\_LO16 = 939524119

##### [` MIPS_GOT_OFST `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_GOT_OFST>)

MIPS\_GOT\_OFST = 939524117

##### [` MIPS_GOT_PAGE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_GOT_PAGE>)

MIPS\_GOT\_PAGE = 939524116

##### [` MIPS_GPREL16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_GPREL16>)

MIPS\_GPREL16 = 939524103

##### [` MIPS_GPREL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_GPREL32>)

MIPS\_GPREL32 = 939524108

##### [` MIPS_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_HI16>)

MIPS\_HI16 = 939524101

##### [` MIPS_HIGHER `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_HIGHER>)

MIPS\_HIGHER = 939524124

##### [` MIPS_HIGHEST `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_HIGHEST>)

MIPS\_HIGHEST = 939524125

##### [` MIPS_INSERT_A `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_INSERT_A>)

MIPS\_INSERT\_A = 939524121

##### [` MIPS_INSERT_B `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_INSERT_B>)

MIPS\_INSERT\_B = 939524122

##### [` MIPS_JALR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_JALR>)

MIPS\_JALR = 939524133

##### [` MIPS_JUMP_SLOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_JUMP_SLOT>)

MIPS\_JUMP\_SLOT = 939524223

##### [` MIPS_LITERAL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_LITERAL>)

MIPS\_LITERAL = 939524104

##### [` MIPS_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_LO16>)

MIPS\_LO16 = 939524102

##### [` MIPS_NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_NONE>)

MIPS\_NONE = 939524096

##### [` MIPS_NUM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_NUM>)

MIPS\_NUM = 939524314

##### [` MIPS_PC16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_PC16>)

MIPS\_PC16 = 939524106

##### [` MIPS_PC18_S3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_PC18_S3>)

MIPS\_PC18\_S3 = 939524158

##### [` MIPS_PC19_S2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_PC19_S2>)

MIPS\_PC19\_S2 = 939524159

##### [` MIPS_PC21_S2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_PC21_S2>)

MIPS\_PC21\_S2 = 939524156

##### [` MIPS_PC26_S2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_PC26_S2>)

MIPS\_PC26\_S2 = 939524157

##### [` MIPS_PC32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_PC32>)

MIPS\_PC32 = 939524344

##### [` MIPS_PCHI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_PCHI16>)

MIPS\_PCHI16 = 939524160

##### [` MIPS_PCLO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_PCLO16>)

MIPS\_PCLO16 = 939524161

##### [` MIPS_PJUMP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_PJUMP>)

MIPS\_PJUMP = 939524131

##### [` MIPS_REL16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_REL16>)

MIPS\_REL16 = 939524129

##### [` MIPS_REL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_REL32>)

MIPS\_REL32 = 939524099

##### [` MIPS_RELGOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_RELGOT>)

MIPS\_RELGOT = 939524132

##### [` MIPS_SCN_DISP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_SCN_DISP>)

MIPS\_SCN\_DISP = 939524128

##### [` MIPS_SHIFT5 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_SHIFT5>)

MIPS\_SHIFT5 = 939524112

##### [` MIPS_SHIFT6 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_SHIFT6>)

MIPS\_SHIFT6 = 939524113

##### [` MIPS_SUB `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_SUB>)

MIPS\_SUB = 939524120

##### [` MIPS_TLS_DTPMOD32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_TLS_DTPMOD32>)

MIPS\_TLS\_DTPMOD32 = 939524134

##### [` MIPS_TLS_DTPMOD64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_TLS_DTPMOD64>)

MIPS\_TLS\_DTPMOD64 = 939524136

##### [` MIPS_TLS_DTPREL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_TLS_DTPREL32>)

MIPS\_TLS\_DTPREL32 = 939524135

##### [` MIPS_TLS_DTPREL64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_TLS_DTPREL64>)

MIPS\_TLS\_DTPREL64 = 939524137

##### [` MIPS_TLS_DTPREL_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_TLS_DTPREL_HI16>)

MIPS\_TLS\_DTPREL\_HI16 = 939524140

##### [` MIPS_TLS_DTPREL_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_TLS_DTPREL_LO16>)

MIPS\_TLS\_DTPREL\_LO16 = 939524141

##### [` MIPS_TLS_GD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_TLS_GD>)

MIPS\_TLS\_GD = 939524138

##### [` MIPS_TLS_GOTTPREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_TLS_GOTTPREL>)

MIPS\_TLS\_GOTTPREL = 939524142

##### [` MIPS_TLS_LDM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_TLS_LDM>)

MIPS\_TLS\_LDM = 939524139

##### [` MIPS_TLS_TPREL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_TLS_TPREL32>)

MIPS\_TLS\_TPREL32 = 939524143

##### [` MIPS_TLS_TPREL64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_TLS_TPREL64>)

MIPS\_TLS\_TPREL64 = 939524144

##### [` MIPS_TLS_TPREL_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_TLS_TPREL_HI16>)

MIPS\_TLS\_TPREL\_HI16 = 939524145

##### [` MIPS_TLS_TPREL_LO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_TLS_TPREL_LO16>)

MIPS\_TLS\_TPREL\_LO16 = 939524146

##### [` MIPS_UNUSED1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_UNUSED1>)

MIPS\_UNUSED1 = 939524109

##### [` MIPS_UNUSED2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_UNUSED2>)

MIPS\_UNUSED2 = 939524110

##### [` MIPS_UNUSED3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.MIPS_UNUSED3>)

MIPS\_UNUSED3 = 939524111

##### [` PPC64_ADDR14 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_ADDR14>)

PPC64\_ADDR14 = 1207959559

##### [` PPC64_ADDR14_BRNTAKEN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_ADDR14_BRNTAKEN>)

PPC64\_ADDR14\_BRNTAKEN = 1207959561

##### [` PPC64_ADDR14_BRTAKEN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_ADDR14_BRTAKEN>)

PPC64\_ADDR14\_BRTAKEN = 1207959560

##### [` PPC64_ADDR16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_ADDR16>)

PPC64\_ADDR16 = 1207959555

##### [` PPC64_ADDR16_DS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_ADDR16_DS>)

PPC64\_ADDR16\_DS = 1207959608

##### [` PPC64_ADDR16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_ADDR16_HA>)

PPC64\_ADDR16\_HA = 1207959558

##### [` PPC64_ADDR16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_ADDR16_HI>)

PPC64\_ADDR16\_HI = 1207959557

##### [` PPC64_ADDR16_HIGHER `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_ADDR16_HIGHER>)

PPC64\_ADDR16\_HIGHER = 1207959591

##### [` PPC64_ADDR16_HIGHERA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_ADDR16_HIGHERA>)

PPC64\_ADDR16\_HIGHERA = 1207959592

##### [` PPC64_ADDR16_HIGHEST `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_ADDR16_HIGHEST>)

PPC64\_ADDR16\_HIGHEST = 1207959593

##### [` PPC64_ADDR16_HIGHESTA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_ADDR16_HIGHESTA>)

PPC64\_ADDR16\_HIGHESTA = 1207959594

##### [` PPC64_ADDR16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_ADDR16_LO>)

PPC64\_ADDR16\_LO = 1207959556

##### [` PPC64_ADDR16_LO_DS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_ADDR16_LO_DS>)

PPC64\_ADDR16\_LO\_DS = 1207959609

##### [` PPC64_ADDR24 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_ADDR24>)

PPC64\_ADDR24 = 1207959554

##### [` PPC64_ADDR32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_ADDR32>)

PPC64\_ADDR32 = 1207959553

##### [` PPC64_ADDR64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_ADDR64>)

PPC64\_ADDR64 = 1207959590

##### [` PPC64_DTPMOD64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_DTPMOD64>)

PPC64\_DTPMOD64 = 1207959620

##### [` PPC64_DTPREL16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_DTPREL16>)

PPC64\_DTPREL16 = 1207959626

##### [` PPC64_DTPREL16_DS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_DTPREL16_DS>)

PPC64\_DTPREL16\_DS = 1207959653

##### [` PPC64_DTPREL16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_DTPREL16_HA>)

PPC64\_DTPREL16\_HA = 1207959629

##### [` PPC64_DTPREL16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_DTPREL16_HI>)

PPC64\_DTPREL16\_HI = 1207959628

##### [` PPC64_DTPREL16_HIGHER `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_DTPREL16_HIGHER>)

PPC64\_DTPREL16\_HIGHER = 1207959655

##### [` PPC64_DTPREL16_HIGHERA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_DTPREL16_HIGHERA>)

PPC64\_DTPREL16\_HIGHERA = 1207959656

##### [` PPC64_DTPREL16_HIGHEST `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_DTPREL16_HIGHEST>)

PPC64\_DTPREL16\_HIGHEST = 1207959657

##### [` PPC64_DTPREL16_HIGHESTA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_DTPREL16_HIGHESTA>)

PPC64\_DTPREL16\_HIGHESTA = 1207959658

##### [` PPC64_DTPREL16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_DTPREL16_LO>)

PPC64\_DTPREL16\_LO = 1207959627

##### [` PPC64_DTPREL16_LO_DS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_DTPREL16_LO_DS>)

PPC64\_DTPREL16\_LO\_DS = 1207959654

##### [` PPC64_DTPREL64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_DTPREL64>)

PPC64\_DTPREL64 = 1207959630

##### [` PPC64_GOT16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT16>)

PPC64\_GOT16 = 1207959566

##### [` PPC64_GOT16_DS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT16_DS>)

PPC64\_GOT16\_DS = 1207959610

##### [` PPC64_GOT16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT16_HA>)

PPC64\_GOT16\_HA = 1207959569

##### [` PPC64_GOT16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT16_HI>)

PPC64\_GOT16\_HI = 1207959568

##### [` PPC64_GOT16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT16_LO>)

PPC64\_GOT16\_LO = 1207959567

##### [` PPC64_GOT16_LO_DS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT16_LO_DS>)

PPC64\_GOT16\_LO\_DS = 1207959611

##### [` PPC64_GOT_DTPREL16_DS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT_DTPREL16_DS>)

PPC64\_GOT\_DTPREL16\_DS = 1207959643

##### [` PPC64_GOT_DTPREL16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT_DTPREL16_HA>)

PPC64\_GOT\_DTPREL16\_HA = 1207959646

##### [` PPC64_GOT_DTPREL16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT_DTPREL16_HI>)

PPC64\_GOT\_DTPREL16\_HI = 1207959645

##### [` PPC64_GOT_DTPREL16_LO_DS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT_DTPREL16_LO_DS>)

PPC64\_GOT\_DTPREL16\_LO\_DS = 1207959644

##### [` PPC64_GOT_TLSGD16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT_TLSGD16>)

PPC64\_GOT\_TLSGD16 = 1207959631

##### [` PPC64_GOT_TLSGD16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT_TLSGD16_HA>)

PPC64\_GOT\_TLSGD16\_HA = 1207959634

##### [` PPC64_GOT_TLSGD16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT_TLSGD16_HI>)

PPC64\_GOT\_TLSGD16\_HI = 1207959633

##### [` PPC64_GOT_TLSGD16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT_TLSGD16_LO>)

PPC64\_GOT\_TLSGD16\_LO = 1207959632

##### [` PPC64_GOT_TLSLD16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT_TLSLD16>)

PPC64\_GOT\_TLSLD16 = 1207959635

##### [` PPC64_GOT_TLSLD16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT_TLSLD16_HA>)

PPC64\_GOT\_TLSLD16\_HA = 1207959638

##### [` PPC64_GOT_TLSLD16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT_TLSLD16_HI>)

PPC64\_GOT\_TLSLD16\_HI = 1207959637

##### [` PPC64_GOT_TLSLD16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT_TLSLD16_LO>)

PPC64\_GOT\_TLSLD16\_LO = 1207959636

##### [` PPC64_GOT_TPREL16_DS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT_TPREL16_DS>)

PPC64\_GOT\_TPREL16\_DS = 1207959639

##### [` PPC64_GOT_TPREL16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT_TPREL16_HA>)

PPC64\_GOT\_TPREL16\_HA = 1207959642

##### [` PPC64_GOT_TPREL16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT_TPREL16_HI>)

PPC64\_GOT\_TPREL16\_HI = 1207959641

##### [` PPC64_GOT_TPREL16_LO_DS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_GOT_TPREL16_LO_DS>)

PPC64\_GOT\_TPREL16\_LO\_DS = 1207959640

##### [` PPC64_JMP_SLOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_JMP_SLOT>)

PPC64\_JMP\_SLOT = 1207959573

##### [` PPC64_NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_NONE>)

PPC64\_NONE = 1207959552

##### [` PPC64_REL14 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_REL14>)

PPC64\_REL14 = 1207959563

##### [` PPC64_REL14_BRNTAKEN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_REL14_BRNTAKEN>)

PPC64\_REL14\_BRNTAKEN = 1207959565

##### [` PPC64_REL14_BRTAKEN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_REL14_BRTAKEN>)

PPC64\_REL14\_BRTAKEN = 1207959564

##### [` PPC64_REL16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_REL16>)

PPC64\_REL16 = 1207959801

##### [` PPC64_REL16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_REL16_HA>)

PPC64\_REL16\_HA = 1207959804

##### [` PPC64_REL16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_REL16_HI>)

PPC64\_REL16\_HI = 1207959803

##### [` PPC64_REL16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_REL16_LO>)

PPC64\_REL16\_LO = 1207959802

##### [` PPC64_REL24 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_REL24>)

PPC64\_REL24 = 1207959562

##### [` PPC64_REL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_REL32>)

PPC64\_REL32 = 1207959578

##### [` PPC64_REL64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_REL64>)

PPC64\_REL64 = 1207959596

##### [` PPC64_RELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_RELATIVE>)

PPC64\_RELATIVE = 1207959574

##### [` PPC64_TLS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TLS>)

PPC64\_TLS = 1207959619

##### [` PPC64_TLSGD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TLSGD>)

PPC64\_TLSGD = 1207959659

##### [` PPC64_TLSLD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TLSLD>)

PPC64\_TLSLD = 1207959660

##### [` PPC64_TOC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TOC>)

PPC64\_TOC = 1207959603

##### [` PPC64_TOC16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TOC16>)

PPC64\_TOC16 = 1207959599

##### [` PPC64_TOC16_DS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TOC16_DS>)

PPC64\_TOC16\_DS = 1207959615

##### [` PPC64_TOC16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TOC16_HA>)

PPC64\_TOC16\_HA = 1207959602

##### [` PPC64_TOC16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TOC16_HI>)

PPC64\_TOC16\_HI = 1207959601

##### [` PPC64_TOC16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TOC16_LO>)

PPC64\_TOC16\_LO = 1207959600

##### [` PPC64_TOC16_LO_DS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TOC16_LO_DS>)

PPC64\_TOC16\_LO\_DS = 1207959616

##### [` PPC64_TPREL16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TPREL16>)

PPC64\_TPREL16 = 1207959621

##### [` PPC64_TPREL16_DS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TPREL16_DS>)

PPC64\_TPREL16\_DS = 1207959647

##### [` PPC64_TPREL16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TPREL16_HA>)

PPC64\_TPREL16\_HA = 1207959624

##### [` PPC64_TPREL16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TPREL16_HI>)

PPC64\_TPREL16\_HI = 1207959623

##### [` PPC64_TPREL16_HIGHER `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TPREL16_HIGHER>)

PPC64\_TPREL16\_HIGHER = 1207959649

##### [` PPC64_TPREL16_HIGHERA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TPREL16_HIGHERA>)

PPC64\_TPREL16\_HIGHERA = 1207959650

##### [` PPC64_TPREL16_HIGHEST `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TPREL16_HIGHEST>)

PPC64\_TPREL16\_HIGHEST = 1207959651

##### [` PPC64_TPREL16_HIGHESTA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TPREL16_HIGHESTA>)

PPC64\_TPREL16\_HIGHESTA = 1207959652

##### [` PPC64_TPREL16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TPREL16_LO>)

PPC64\_TPREL16\_LO = 1207959622

##### [` PPC64_TPREL16_LO_DS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TPREL16_LO_DS>)

PPC64\_TPREL16\_LO\_DS = 1207959648

##### [` PPC64_TPREL64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC64_TPREL64>)

PPC64\_TPREL64 = 1207959625

##### [` PPC_ADDR14 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_ADDR14>)

PPC\_ADDR14 = 1073741831

##### [` PPC_ADDR14_BRNTAKEN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_ADDR14_BRNTAKEN>)

PPC\_ADDR14\_BRNTAKEN = 1073741833

##### [` PPC_ADDR14_BRTAKEN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_ADDR14_BRTAKEN>)

PPC\_ADDR14\_BRTAKEN = 1073741832

##### [` PPC_ADDR16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_ADDR16>)

PPC\_ADDR16 = 1073741827

##### [` PPC_ADDR16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_ADDR16_HA>)

PPC\_ADDR16\_HA = 1073741830

##### [` PPC_ADDR16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_ADDR16_HI>)

PPC\_ADDR16\_HI = 1073741829

##### [` PPC_ADDR16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_ADDR16_LO>)

PPC\_ADDR16\_LO = 1073741828

##### [` PPC_ADDR24 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_ADDR24>)

PPC\_ADDR24 = 1073741826

##### [` PPC_ADDR32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_ADDR32>)

PPC\_ADDR32 = 1073741825

##### [` PPC_DTPMOD32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_DTPMOD32>)

PPC\_DTPMOD32 = 1073741892

##### [` PPC_DTPREL16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_DTPREL16>)

PPC\_DTPREL16 = 1073741898

##### [` PPC_DTPREL16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_DTPREL16_HA>)

PPC\_DTPREL16\_HA = 1073741901

##### [` PPC_DTPREL16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_DTPREL16_HI>)

PPC\_DTPREL16\_HI = 1073741900

##### [` PPC_DTPREL16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_DTPREL16_LO>)

PPC\_DTPREL16\_LO = 1073741899

##### [` PPC_DTPREL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_DTPREL32>)

PPC\_DTPREL32 = 1073741902

##### [` PPC_GOT16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT16>)

PPC\_GOT16 = 1073741838

##### [` PPC_GOT16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT16_HA>)

PPC\_GOT16\_HA = 1073741841

##### [` PPC_GOT16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT16_HI>)

PPC\_GOT16\_HI = 1073741840

##### [` PPC_GOT16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT16_LO>)

PPC\_GOT16\_LO = 1073741839

##### [` PPC_GOT_DTPREL16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT_DTPREL16>)

PPC\_GOT\_DTPREL16 = 1073741915

##### [` PPC_GOT_DTPREL16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT_DTPREL16_HA>)

PPC\_GOT\_DTPREL16\_HA = 1073741918

##### [` PPC_GOT_DTPREL16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT_DTPREL16_HI>)

PPC\_GOT\_DTPREL16\_HI = 1073741917

##### [` PPC_GOT_DTPREL16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT_DTPREL16_LO>)

PPC\_GOT\_DTPREL16\_LO = 1073741916

##### [` PPC_GOT_TLSGD16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT_TLSGD16>)

PPC\_GOT\_TLSGD16 = 1073741903

##### [` PPC_GOT_TLSGD16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT_TLSGD16_HA>)

PPC\_GOT\_TLSGD16\_HA = 1073741906

##### [` PPC_GOT_TLSGD16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT_TLSGD16_HI>)

PPC\_GOT\_TLSGD16\_HI = 1073741905

##### [` PPC_GOT_TLSGD16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT_TLSGD16_LO>)

PPC\_GOT\_TLSGD16\_LO = 1073741904

##### [` PPC_GOT_TLSLD16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT_TLSLD16>)

PPC\_GOT\_TLSLD16 = 1073741907

##### [` PPC_GOT_TLSLD16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT_TLSLD16_HA>)

PPC\_GOT\_TLSLD16\_HA = 1073741910

##### [` PPC_GOT_TLSLD16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT_TLSLD16_HI>)

PPC\_GOT\_TLSLD16\_HI = 1073741909

##### [` PPC_GOT_TLSLD16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT_TLSLD16_LO>)

PPC\_GOT\_TLSLD16\_LO = 1073741908

##### [` PPC_GOT_TPREL16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT_TPREL16>)

PPC\_GOT\_TPREL16 = 1073741911

##### [` PPC_GOT_TPREL16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT_TPREL16_HA>)

PPC\_GOT\_TPREL16\_HA = 1073741914

##### [` PPC_GOT_TPREL16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT_TPREL16_HI>)

PPC\_GOT\_TPREL16\_HI = 1073741913

##### [` PPC_GOT_TPREL16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_GOT_TPREL16_LO>)

PPC\_GOT\_TPREL16\_LO = 1073741912

##### [` PPC_JMP_SLOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_JMP_SLOT>)

PPC\_JMP\_SLOT = 1073741845

##### [` PPC_LOCAL24PC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_LOCAL24PC>)

PPC\_LOCAL24PC = 1073741847

##### [` PPC_NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_NONE>)

PPC\_NONE = 1073741824

##### [` PPC_PLTREL24 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_PLTREL24>)

PPC\_PLTREL24 = 1073741842

##### [` PPC_REL14 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_REL14>)

PPC\_REL14 = 1073741835

##### [` PPC_REL14_BRNTAKEN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_REL14_BRNTAKEN>)

PPC\_REL14\_BRNTAKEN = 1073741837

##### [` PPC_REL14_BRTAKEN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_REL14_BRTAKEN>)

PPC\_REL14\_BRTAKEN = 1073741836

##### [` PPC_REL16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_REL16>)

PPC\_REL16 = 1073742073

##### [` PPC_REL16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_REL16_HA>)

PPC\_REL16\_HA = 1073742076

##### [` PPC_REL16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_REL16_HI>)

PPC\_REL16\_HI = 1073742075

##### [` PPC_REL16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_REL16_LO>)

PPC\_REL16\_LO = 1073742074

##### [` PPC_REL24 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_REL24>)

PPC\_REL24 = 1073741834

##### [` PPC_REL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_REL32>)

PPC\_REL32 = 1073741850

##### [` PPC_RELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_RELATIVE>)

PPC\_RELATIVE = 1073741846

##### [` PPC_TLS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_TLS>)

PPC\_TLS = 1073741891

##### [` PPC_TLSGD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_TLSGD>)

PPC\_TLSGD = 1073741919

##### [` PPC_TLSLD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_TLSLD>)

PPC\_TLSLD = 1073741920

##### [` PPC_TPREL16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_TPREL16>)

PPC\_TPREL16 = 1073741893

##### [` PPC_TPREL16_HA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_TPREL16_HA>)

PPC\_TPREL16\_HA = 1073741896

##### [` PPC_TPREL16_HI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_TPREL16_HI>)

PPC\_TPREL16\_HI = 1073741895

##### [` PPC_TPREL16_LO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_TPREL16_LO>)

PPC\_TPREL16\_LO = 1073741894

##### [` PPC_TPREL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.PPC_TPREL32>)

PPC\_TPREL32 = 1073741897

##### [` RISCV_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_32>)

RISCV\_32 = 1610612737

##### [` RISCV_32_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_32_PCREL>)

RISCV\_32\_PCREL = 1610612793

##### [` RISCV_64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_64>)

RISCV\_64 = 1610612738

##### [` RISCV_ADD16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_ADD16>)

RISCV\_ADD16 = 1610612770

##### [` RISCV_ADD32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_ADD32>)

RISCV\_ADD32 = 1610612771

##### [` RISCV_ADD64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_ADD64>)

RISCV\_ADD64 = 1610612772

##### [` RISCV_ADD8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_ADD8>)

RISCV\_ADD8 = 1610612769

##### [` RISCV_ALIGN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_ALIGN>)

RISCV\_ALIGN = 1610612779

##### [` RISCV_BRANCH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_BRANCH>)

RISCV\_BRANCH = 1610612752

##### [` RISCV_CALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_CALL>)

RISCV\_CALL = 1610612754

##### [` RISCV_CALL_PLT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_CALL_PLT>)

RISCV\_CALL\_PLT = 1610612755

##### [` RISCV_COPY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_COPY>)

RISCV\_COPY = 1610612740

##### [` RISCV_GOT32_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_GOT32_PCREL>)

RISCV\_GOT32\_PCREL = 1610612777

##### [` RISCV_GOT_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_GOT_HI20>)

RISCV\_GOT\_HI20 = 1610612756

##### [` RISCV_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_HI20>)

RISCV\_HI20 = 1610612762

##### [` RISCV_IRELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_IRELATIVE>)

RISCV\_IRELATIVE = 1610612794

##### [` RISCV_JAL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_JAL>)

RISCV\_JAL = 1610612753

##### [` RISCV_JUMP_SLOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_JUMP_SLOT>)

RISCV\_JUMP\_SLOT = 1610612741

##### [` RISCV_LO12_I `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_LO12_I>)

RISCV\_LO12\_I = 1610612763

##### [` RISCV_LO12_S `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_LO12_S>)

RISCV\_LO12\_S = 1610612764

##### [` RISCV_NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_NONE>)

RISCV\_NONE = 1610612736

##### [` RISCV_PCREL_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_PCREL_HI20>)

RISCV\_PCREL\_HI20 = 1610612759

##### [` RISCV_PCREL_LO12_I `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_PCREL_LO12_I>)

RISCV\_PCREL\_LO12\_I = 1610612760

##### [` RISCV_PCREL_LO12_S `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_PCREL_LO12_S>)

RISCV\_PCREL\_LO12\_S = 1610612761

##### [` RISCV_PLT32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_PLT32>)

RISCV\_PLT32 = 1610612795

##### [` RISCV_RELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_RELATIVE>)

RISCV\_RELATIVE = 1610612739

##### [` RISCV_RELAX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_RELAX>)

RISCV\_RELAX = 1610612787

##### [` RISCV_RVC_BRANCH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_RVC_BRANCH>)

RISCV\_RVC\_BRANCH = 1610612780

##### [` RISCV_RVC_JUMP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_RVC_JUMP>)

RISCV\_RVC\_JUMP = 1610612781

##### [` RISCV_RVC_LUI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_RVC_LUI>)

RISCV\_RVC\_LUI = 1610612782

##### [` RISCV_SET16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_SET16>)

RISCV\_SET16 = 1610612791

##### [` RISCV_SET32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_SET32>)

RISCV\_SET32 = 1610612792

##### [` RISCV_SET6 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_SET6>)

RISCV\_SET6 = 1610612789

##### [` RISCV_SET8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_SET8>)

RISCV\_SET8 = 1610612790

##### [` RISCV_SET_ULEB128 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_SET_ULEB128>)

RISCV\_SET\_ULEB128 = 1610612796

##### [` RISCV_SUB16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_SUB16>)

RISCV\_SUB16 = 1610612774

##### [` RISCV_SUB32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_SUB32>)

RISCV\_SUB32 = 1610612775

##### [` RISCV_SUB6 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_SUB6>)

RISCV\_SUB6 = 1610612788

##### [` RISCV_SUB64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_SUB64>)

RISCV\_SUB64 = 1610612776

##### [` RISCV_SUB8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_SUB8>)

RISCV\_SUB8 = 1610612773

##### [` RISCV_SUB_ULEB128 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_SUB_ULEB128>)

RISCV\_SUB\_ULEB128 = 1610612797

##### [` RISCV_TLSDESC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TLSDESC>)

RISCV\_TLSDESC = 1610612748

##### [` RISCV_TLSDESC_ADD_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TLSDESC_ADD_LO12>)

RISCV\_TLSDESC\_ADD\_LO12 = 1610612800

##### [` RISCV_TLSDESC_CALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TLSDESC_CALL>)

RISCV\_TLSDESC\_CALL = 1610612801

##### [` RISCV_TLSDESC_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TLSDESC_HI20>)

RISCV\_TLSDESC\_HI20 = 1610612798

##### [` RISCV_TLSDESC_LOAD_LO12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TLSDESC_LOAD_LO12>)

RISCV\_TLSDESC\_LOAD\_LO12 = 1610612799

##### [` RISCV_TLS_DTPMOD32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TLS_DTPMOD32>)

RISCV\_TLS\_DTPMOD32 = 1610612742

##### [` RISCV_TLS_DTPMOD64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TLS_DTPMOD64>)

RISCV\_TLS\_DTPMOD64 = 1610612743

##### [` RISCV_TLS_DTPREL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TLS_DTPREL32>)

RISCV\_TLS\_DTPREL32 = 1610612744

##### [` RISCV_TLS_DTPREL64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TLS_DTPREL64>)

RISCV\_TLS\_DTPREL64 = 1610612745

##### [` RISCV_TLS_GD_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TLS_GD_HI20>)

RISCV\_TLS\_GD\_HI20 = 1610612758

##### [` RISCV_TLS_GOT_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TLS_GOT_HI20>)

RISCV\_TLS\_GOT\_HI20 = 1610612757

##### [` RISCV_TLS_TPREL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TLS_TPREL32>)

RISCV\_TLS\_TPREL32 = 1610612746

##### [` RISCV_TLS_TPREL64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TLS_TPREL64>)

RISCV\_TLS\_TPREL64 = 1610612747

##### [` RISCV_TPREL_ADD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TPREL_ADD>)

RISCV\_TPREL\_ADD = 1610612768

##### [` RISCV_TPREL_HI20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TPREL_HI20>)

RISCV\_TPREL\_HI20 = 1610612765

##### [` RISCV_TPREL_LO12_I `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TPREL_LO12_I>)

RISCV\_TPREL\_LO12\_I = 1610612766

##### [` RISCV_TPREL_LO12_S `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.RISCV_TPREL_LO12_S>)

RISCV\_TPREL\_LO12\_S = 1610612767

##### [` SH_64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_64>)

SH\_64 = 1879048446

##### [` SH_64_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_64_PCREL>)

SH\_64\_PCREL = 1879048447

##### [` SH_ALIGN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_ALIGN>)

SH\_ALIGN = 1879048221

##### [` SH_CODE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_CODE>)

SH\_CODE = 1879048222

##### [` SH_COPY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_COPY>)

SH\_COPY = 1879048354

##### [` SH_COPY64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_COPY64>)

SH\_COPY64 = 1879048385

##### [` SH_COUNT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_COUNT>)

SH\_COUNT = 1879048220

##### [` SH_DATA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DATA>)

SH\_DATA = 1879048223

##### [` SH_DIR10S `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR10S>)

SH\_DIR10S = 1879048240

##### [` SH_DIR10SL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR10SL>)

SH\_DIR10SL = 1879048242

##### [` SH_DIR10SQ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR10SQ>)

SH\_DIR10SQ = 1879048243

##### [` SH_DIR10SW `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR10SW>)

SH\_DIR10SW = 1879048241

##### [` SH_DIR16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR16>)

SH\_DIR16 = 1879048225

##### [` SH_DIR16S `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR16S>)

SH\_DIR16S = 1879048245

##### [` SH_DIR32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR32>)

SH\_DIR32 = 1879048193

##### [` SH_DIR4U `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR4U>)

SH\_DIR4U = 1879048234

##### [` SH_DIR4UL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR4UL>)

SH\_DIR4UL = 1879048232

##### [` SH_DIR4UW `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR4UW>)

SH\_DIR4UW = 1879048233

##### [` SH_DIR5U `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR5U>)

SH\_DIR5U = 1879048237

##### [` SH_DIR6S `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR6S>)

SH\_DIR6S = 1879048239

##### [` SH_DIR6U `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR6U>)

SH\_DIR6U = 1879048238

##### [` SH_DIR8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR8>)

SH\_DIR8 = 1879048226

##### [` SH_DIR8BP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR8BP>)

SH\_DIR8BP = 1879048199

##### [` SH_DIR8L `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR8L>)

SH\_DIR8L = 1879048201

##### [` SH_DIR8S `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR8S>)

SH\_DIR8S = 1879048231

##### [` SH_DIR8SW `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR8SW>)

SH\_DIR8SW = 1879048230

##### [` SH_DIR8U `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR8U>)

SH\_DIR8U = 1879048229

##### [` SH_DIR8UL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR8UL>)

SH\_DIR8UL = 1879048227

##### [` SH_DIR8UW `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR8UW>)

SH\_DIR8UW = 1879048228

##### [` SH_DIR8W `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR8W>)

SH\_DIR8W = 1879048200

##### [` SH_DIR8WPL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR8WPL>)

SH\_DIR8WPL = 1879048197

##### [` SH_DIR8WPN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR8WPN>)

SH\_DIR8WPN = 1879048195

##### [` SH_DIR8WPZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_DIR8WPZ>)

SH\_DIR8WPZ = 1879048198

##### [` SH_FUNCDESC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_FUNCDESC>)

SH\_FUNCDESC = 1879048399

##### [` SH_FUNCDESC_VALUE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_FUNCDESC_VALUE>)

SH\_FUNCDESC\_VALUE = 1879048400

##### [` SH_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GLOB_DAT>)

SH\_GLOB\_DAT = 1879048355

##### [` SH_GLOB_DAT64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GLOB_DAT64>)

SH\_GLOB\_DAT64 = 1879048386

##### [` SH_GNU_VTENTRY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GNU_VTENTRY>)

SH\_GNU\_VTENTRY = 1879048215

##### [` SH_GNU_VTINHERIT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GNU_VTINHERIT>)

SH\_GNU\_VTINHERIT = 1879048214

##### [` SH_GOT10BY4 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOT10BY4>)

SH\_GOT10BY4 = 1879048381

##### [` SH_GOT10BY8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOT10BY8>)

SH\_GOT10BY8 = 1879048383

##### [` SH_GOT20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOT20>)

SH\_GOT20 = 1879048393

##### [` SH_GOT32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOT32>)

SH\_GOT32 = 1879048352

##### [` SH_GOTFUNCDESC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTFUNCDESC>)

SH\_GOTFUNCDESC = 1879048395

##### [` SH_GOTFUNCDESC20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTFUNCDESC20>)

SH\_GOTFUNCDESC20 = 1879048396

##### [` SH_GOTOFF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTOFF>)

SH\_GOTOFF = 1879048358

##### [` SH_GOTOFF20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTOFF20>)

SH\_GOTOFF20 = 1879048394

##### [` SH_GOTOFFFUNCDESC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTOFFFUNCDESC>)

SH\_GOTOFFFUNCDESC = 1879048397

##### [` SH_GOTOFFFUNCDESC20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTOFFFUNCDESC20>)

SH\_GOTOFFFUNCDESC20 = 1879048398

##### [` SH_GOTOFF_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTOFF_HI16>)

SH\_GOTOFF\_HI16 = 1879048376

##### [` SH_GOTOFF_LOW16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTOFF_LOW16>)

SH\_GOTOFF\_LOW16 = 1879048373

##### [` SH_GOTOFF_MEDHI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTOFF_MEDHI16>)

SH\_GOTOFF\_MEDHI16 = 1879048375

##### [` SH_GOTOFF_MEDLOW16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTOFF_MEDLOW16>)

SH\_GOTOFF\_MEDLOW16 = 1879048374

##### [` SH_GOTPC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTPC>)

SH\_GOTPC = 1879048359

##### [` SH_GOTPC_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTPC_HI16>)

SH\_GOTPC\_HI16 = 1879048380

##### [` SH_GOTPC_LOW16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTPC_LOW16>)

SH\_GOTPC\_LOW16 = 1879048377

##### [` SH_GOTPC_MEDHI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTPC_MEDHI16>)

SH\_GOTPC\_MEDHI16 = 1879048379

##### [` SH_GOTPC_MEDLOW16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTPC_MEDLOW16>)

SH\_GOTPC\_MEDLOW16 = 1879048378

##### [` SH_GOTPLT10BY4 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTPLT10BY4>)

SH\_GOTPLT10BY4 = 1879048382

##### [` SH_GOTPLT10BY8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTPLT10BY8>)

SH\_GOTPLT10BY8 = 1879048384

##### [` SH_GOTPLT32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTPLT32>)

SH\_GOTPLT32 = 1879048360

##### [` SH_GOTPLT_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTPLT_HI16>)

SH\_GOTPLT\_HI16 = 1879048368

##### [` SH_GOTPLT_LOW16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTPLT_LOW16>)

SH\_GOTPLT\_LOW16 = 1879048365

##### [` SH_GOTPLT_MEDHI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTPLT_MEDHI16>)

SH\_GOTPLT\_MEDHI16 = 1879048367

##### [` SH_GOTPLT_MEDLOW16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOTPLT_MEDLOW16>)

SH\_GOTPLT\_MEDLOW16 = 1879048366

##### [` SH_GOT_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOT_HI16>)

SH\_GOT\_HI16 = 1879048364

##### [` SH_GOT_LOW16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOT_LOW16>)

SH\_GOT\_LOW16 = 1879048361

##### [` SH_GOT_MEDHI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOT_MEDHI16>)

SH\_GOT\_MEDHI16 = 1879048363

##### [` SH_GOT_MEDLOW16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_GOT_MEDLOW16>)

SH\_GOT\_MEDLOW16 = 1879048362

##### [` SH_IMMS16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_IMMS16>)

SH\_IMMS16 = 1879048436

##### [` SH_IMMU16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_IMMU16>)

SH\_IMMU16 = 1879048437

##### [` SH_IMM_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_IMM_HI16>)

SH\_IMM\_HI16 = 1879048444

##### [` SH_IMM_HI16_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_IMM_HI16_PCREL>)

SH\_IMM\_HI16\_PCREL = 1879048445

##### [` SH_IMM_LOW16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_IMM_LOW16>)

SH\_IMM\_LOW16 = 1879048438

##### [` SH_IMM_LOW16_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_IMM_LOW16_PCREL>)

SH\_IMM\_LOW16\_PCREL = 1879048439

##### [` SH_IMM_MEDHI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_IMM_MEDHI16>)

SH\_IMM\_MEDHI16 = 1879048442

##### [` SH_IMM_MEDHI16_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_IMM_MEDHI16_PCREL>)

SH\_IMM\_MEDHI16\_PCREL = 1879048443

##### [` SH_IMM_MEDLOW16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_IMM_MEDLOW16>)

SH\_IMM\_MEDLOW16 = 1879048440

##### [` SH_IMM_MEDLOW16_PCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_IMM_MEDLOW16_PCREL>)

SH\_IMM\_MEDLOW16\_PCREL = 1879048441

##### [` SH_IND12W `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_IND12W>)

SH\_IND12W = 1879048196

##### [` SH_JMP_SLOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_JMP_SLOT>)

SH\_JMP\_SLOT = 1879048356

##### [` SH_JMP_SLOT64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_JMP_SLOT64>)

SH\_JMP\_SLOT64 = 1879048387

##### [` SH_LABEL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_LABEL>)

SH\_LABEL = 1879048224

##### [` SH_LOOP_END `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_LOOP_END>)

SH\_LOOP\_END = 1879048203

##### [` SH_LOOP_START `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_LOOP_START>)

SH\_LOOP\_START = 1879048202

##### [` SH_NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_NONE>)

SH\_NONE = 1879048192

##### [` SH_PLT32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_PLT32>)

SH\_PLT32 = 1879048353

##### [` SH_PLT_HI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_PLT_HI16>)

SH\_PLT\_HI16 = 1879048372

##### [` SH_PLT_LOW16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_PLT_LOW16>)

SH\_PLT\_LOW16 = 1879048369

##### [` SH_PLT_MEDHI16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_PLT_MEDHI16>)

SH\_PLT\_MEDHI16 = 1879048371

##### [` SH_PLT_MEDLOW16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_PLT_MEDLOW16>)

SH\_PLT\_MEDLOW16 = 1879048370

##### [` SH_PSHA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_PSHA>)

SH\_PSHA = 1879048235

##### [` SH_PSHL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_PSHL>)

SH\_PSHL = 1879048236

##### [` SH_PT_16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_PT_16>)

SH\_PT\_16 = 1879048435

##### [` SH_REL32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_REL32>)

SH\_REL32 = 1879048194

##### [` SH_RELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_RELATIVE>)

SH\_RELATIVE = 1879048357

##### [` SH_RELATIVE64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_RELATIVE64>)

SH\_RELATIVE64 = 1879048388

##### [` SH_SHMEDIA_CODE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_SHMEDIA_CODE>)

SH\_SHMEDIA\_CODE = 1879048434

##### [` SH_SWITCH16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_SWITCH16>)

SH\_SWITCH16 = 1879048217

##### [` SH_SWITCH32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_SWITCH32>)

SH\_SWITCH32 = 1879048218

##### [` SH_SWITCH8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_SWITCH8>)

SH\_SWITCH8 = 1879048216

##### [` SH_TLS_DTPMOD32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_TLS_DTPMOD32>)

SH\_TLS\_DTPMOD32 = 1879048341

##### [` SH_TLS_DTPOFF32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_TLS_DTPOFF32>)

SH\_TLS\_DTPOFF32 = 1879048342

##### [` SH_TLS_GD_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_TLS_GD_32>)

SH\_TLS\_GD\_32 = 1879048336

##### [` SH_TLS_IE_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_TLS_IE_32>)

SH\_TLS\_IE\_32 = 1879048339

##### [` SH_TLS_LDO_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_TLS_LDO_32>)

SH\_TLS\_LDO\_32 = 1879048338

##### [` SH_TLS_LD_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_TLS_LD_32>)

SH\_TLS\_LD\_32 = 1879048337

##### [` SH_TLS_LE_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_TLS_LE_32>)

SH\_TLS\_LE\_32 = 1879048340

##### [` SH_TLS_TPOFF32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_TLS_TPOFF32>)

SH\_TLS\_TPOFF32 = 1879048343

##### [` SH_USES `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SH_USES>)

SH\_USES = 1879048219

##### [` SPARC_10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_10>)

SPARC\_10 = 1342177310

##### [` SPARC_11 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_11>)

SPARC\_11 = 1342177311

##### [` SPARC_13 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_13>)

SPARC\_13 = 1342177291

##### [` SPARC_16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_16>)

SPARC\_16 = 1342177282

##### [` SPARC_22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_22>)

SPARC\_22 = 1342177290

##### [` SPARC_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_32>)

SPARC\_32 = 1342177283

##### [` SPARC_5 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_5>)

SPARC\_5 = 1342177324

##### [` SPARC_6 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_6>)

SPARC\_6 = 1342177325

##### [` SPARC_64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_64>)

SPARC\_64 = 1342177312

##### [` SPARC_7 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_7>)

SPARC\_7 = 1342177323

##### [` SPARC_8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_8>)

SPARC\_8 = 1342177281

##### [` SPARC_COPY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_COPY>)

SPARC\_COPY = 1342177299

##### [` SPARC_DISP16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_DISP16>)

SPARC\_DISP16 = 1342177285

##### [` SPARC_DISP32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_DISP32>)

SPARC\_DISP32 = 1342177286

##### [` SPARC_DISP64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_DISP64>)

SPARC\_DISP64 = 1342177326

##### [` SPARC_DISP8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_DISP8>)

SPARC\_DISP8 = 1342177284

##### [` SPARC_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_GLOB_DAT>)

SPARC\_GLOB\_DAT = 1342177300

##### [` SPARC_GOT10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_GOT10>)

SPARC\_GOT10 = 1342177293

##### [` SPARC_GOT13 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_GOT13>)

SPARC\_GOT13 = 1342177294

##### [` SPARC_GOT22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_GOT22>)

SPARC\_GOT22 = 1342177295

##### [` SPARC_GOTDATA_HIX22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_GOTDATA_HIX22>)

SPARC\_GOTDATA\_HIX22 = 1342177360

##### [` SPARC_GOTDATA_LOX10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_GOTDATA_LOX10>)

SPARC\_GOTDATA\_LOX10 = 1342177361

##### [` SPARC_GOTDATA_OP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_GOTDATA_OP>)

SPARC\_GOTDATA\_OP = 1342177364

##### [` SPARC_GOTDATA_OP_HIX22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_GOTDATA_OP_HIX22>)

SPARC\_GOTDATA\_OP\_HIX22 = 1342177362

##### [` SPARC_GOTDATA_OP_LOX10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_GOTDATA_OP_LOX10>)

SPARC\_GOTDATA\_OP\_LOX10 = 1342177363

##### [` SPARC_H44 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_H44>)

SPARC\_H44 = 1342177330

##### [` SPARC_HH22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_HH22>)

SPARC\_HH22 = 1342177314

##### [` SPARC_HI22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_HI22>)

SPARC\_HI22 = 1342177289

##### [` SPARC_HIPLT22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_HIPLT22>)

SPARC\_HIPLT22 = 1342177305

##### [` SPARC_HIX22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_HIX22>)

SPARC\_HIX22 = 1342177328

##### [` SPARC_HM10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_HM10>)

SPARC\_HM10 = 1342177315

##### [` SPARC_JMP_SLOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_JMP_SLOT>)

SPARC\_JMP\_SLOT = 1342177301

##### [` SPARC_L44 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_L44>)

SPARC\_L44 = 1342177332

##### [` SPARC_LM22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_LM22>)

SPARC\_LM22 = 1342177316

##### [` SPARC_LO10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_LO10>)

SPARC\_LO10 = 1342177292

##### [` SPARC_LOPLT10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_LOPLT10>)

SPARC\_LOPLT10 = 1342177306

##### [` SPARC_LOX10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_LOX10>)

SPARC\_LOX10 = 1342177329

##### [` SPARC_M44 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_M44>)

SPARC\_M44 = 1342177331

##### [` SPARC_NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_NONE>)

SPARC\_NONE = 1342177280

##### [` SPARC_OLO10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_OLO10>)

SPARC\_OLO10 = 1342177313

##### [` SPARC_PC10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_PC10>)

SPARC\_PC10 = 1342177296

##### [` SPARC_PC22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_PC22>)

SPARC\_PC22 = 1342177297

##### [` SPARC_PCPLT10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_PCPLT10>)

SPARC\_PCPLT10 = 1342177309

##### [` SPARC_PCPLT22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_PCPLT22>)

SPARC\_PCPLT22 = 1342177308

##### [` SPARC_PCPLT32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_PCPLT32>)

SPARC\_PCPLT32 = 1342177307

##### [` SPARC_PC_HH22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_PC_HH22>)

SPARC\_PC\_HH22 = 1342177317

##### [` SPARC_PC_HM10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_PC_HM10>)

SPARC\_PC\_HM10 = 1342177318

##### [` SPARC_PC_LM22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_PC_LM22>)

SPARC\_PC\_LM22 = 1342177319

##### [` SPARC_PLT32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_PLT32>)

SPARC\_PLT32 = 1342177304

##### [` SPARC_PLT64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_PLT64>)

SPARC\_PLT64 = 1342177327

##### [` SPARC_REGISTER `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_REGISTER>)

SPARC\_REGISTER = 1342177333

##### [` SPARC_RELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_RELATIVE>)

SPARC\_RELATIVE = 1342177302

##### [` SPARC_TLS_DTPMOD32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_DTPMOD32>)

SPARC\_TLS\_DTPMOD32 = 1342177354

##### [` SPARC_TLS_DTPMOD64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_DTPMOD64>)

SPARC\_TLS\_DTPMOD64 = 1342177355

##### [` SPARC_TLS_DTPOFF32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_DTPOFF32>)

SPARC\_TLS\_DTPOFF32 = 1342177356

##### [` SPARC_TLS_DTPOFF64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_DTPOFF64>)

SPARC\_TLS\_DTPOFF64 = 1342177357

##### [` SPARC_TLS_GD_ADD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_GD_ADD>)

SPARC\_TLS\_GD\_ADD = 1342177338

##### [` SPARC_TLS_GD_CALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_GD_CALL>)

SPARC\_TLS\_GD\_CALL = 1342177339

##### [` SPARC_TLS_GD_HI22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_GD_HI22>)

SPARC\_TLS\_GD\_HI22 = 1342177336

##### [` SPARC_TLS_GD_LO10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_GD_LO10>)

SPARC\_TLS\_GD\_LO10 = 1342177337

##### [` SPARC_TLS_IE_ADD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_IE_ADD>)

SPARC\_TLS\_IE\_ADD = 1342177351

##### [` SPARC_TLS_IE_HI22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_IE_HI22>)

SPARC\_TLS\_IE\_HI22 = 1342177347

##### [` SPARC_TLS_IE_LD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_IE_LD>)

SPARC\_TLS\_IE\_LD = 1342177349

##### [` SPARC_TLS_IE_LDX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_IE_LDX>)

SPARC\_TLS\_IE\_LDX = 1342177350

##### [` SPARC_TLS_IE_LO10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_IE_LO10>)

SPARC\_TLS\_IE\_LO10 = 1342177348

##### [` SPARC_TLS_LDM_ADD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_LDM_ADD>)

SPARC\_TLS\_LDM\_ADD = 1342177342

##### [` SPARC_TLS_LDM_CALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_LDM_CALL>)

SPARC\_TLS\_LDM\_CALL = 1342177343

##### [` SPARC_TLS_LDM_HI22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_LDM_HI22>)

SPARC\_TLS\_LDM\_HI22 = 1342177340

##### [` SPARC_TLS_LDM_LO10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_LDM_LO10>)

SPARC\_TLS\_LDM\_LO10 = 1342177341

##### [` SPARC_TLS_LDO_ADD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_LDO_ADD>)

SPARC\_TLS\_LDO\_ADD = 1342177346

##### [` SPARC_TLS_LDO_HIX22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_LDO_HIX22>)

SPARC\_TLS\_LDO\_HIX22 = 1342177344

##### [` SPARC_TLS_LDO_LOX10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_LDO_LOX10>)

SPARC\_TLS\_LDO\_LOX10 = 1342177345

##### [` SPARC_TLS_LE_HIX22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_LE_HIX22>)

SPARC\_TLS\_LE\_HIX22 = 1342177352

##### [` SPARC_TLS_LE_LOX10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_LE_LOX10>)

SPARC\_TLS\_LE\_LOX10 = 1342177353

##### [` SPARC_TLS_TPOFF32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_TPOFF32>)

SPARC\_TLS\_TPOFF32 = 1342177358

##### [` SPARC_TLS_TPOFF64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_TLS_TPOFF64>)

SPARC\_TLS\_TPOFF64 = 1342177359

##### [` SPARC_UA16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_UA16>)

SPARC\_UA16 = 1342177335

##### [` SPARC_UA32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_UA32>)

SPARC\_UA32 = 1342177303

##### [` SPARC_UA64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_UA64>)

SPARC\_UA64 = 1342177334

##### [` SPARC_WDISP16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_WDISP16>)

SPARC\_WDISP16 = 1342177320

##### [` SPARC_WDISP19 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_WDISP19>)

SPARC\_WDISP19 = 1342177321

##### [` SPARC_WDISP22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_WDISP22>)

SPARC\_WDISP22 = 1342177288

##### [` SPARC_WDISP30 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_WDISP30>)

SPARC\_WDISP30 = 1342177287

##### [` SPARC_WPLT30 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SPARC_WPLT30>)

SPARC\_WPLT30 = 1342177298

##### [` SYSZ_12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_12>)

SYSZ\_12 = 1476395010

##### [` SYSZ_16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_16>)

SYSZ\_16 = 1476395011

##### [` SYSZ_20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_20>)

SYSZ\_20 = 1476395065

##### [` SYSZ_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_32>)

SYSZ\_32 = 1476395012

##### [` SYSZ_64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_64>)

SYSZ\_64 = 1476395030

##### [` SYSZ_8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_8>)

SYSZ\_8 = 1476395009

##### [` SYSZ_COPY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_COPY>)

SYSZ\_COPY = 1476395017

##### [` SYSZ_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GLOB_DAT>)

SYSZ\_GLOB\_DAT = 1476395018

##### [` SYSZ_GOT12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOT12>)

SYSZ\_GOT12 = 1476395014

##### [` SYSZ_GOT16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOT16>)

SYSZ\_GOT16 = 1476395023

##### [` SYSZ_GOT20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOT20>)

SYSZ\_GOT20 = 1476395066

##### [` SYSZ_GOT32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOT32>)

SYSZ\_GOT32 = 1476395015

##### [` SYSZ_GOT64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOT64>)

SYSZ\_GOT64 = 1476395032

##### [` SYSZ_GOTENT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOTENT>)

SYSZ\_GOTENT = 1476395034

##### [` SYSZ_GOTOFF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOTOFF>)

SYSZ\_GOTOFF = 1476395021

##### [` SYSZ_GOTOFF16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOTOFF16>)

SYSZ\_GOTOFF16 = 1476395035

##### [` SYSZ_GOTOFF64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOTOFF64>)

SYSZ\_GOTOFF64 = 1476395036

##### [` SYSZ_GOTPC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOTPC>)

SYSZ\_GOTPC = 1476395022

##### [` SYSZ_GOTPCDBL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOTPCDBL>)

SYSZ\_GOTPCDBL = 1476395029

##### [` SYSZ_GOTPLT12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOTPLT12>)

SYSZ\_GOTPLT12 = 1476395037

##### [` SYSZ_GOTPLT16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOTPLT16>)

SYSZ\_GOTPLT16 = 1476395038

##### [` SYSZ_GOTPLT20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOTPLT20>)

SYSZ\_GOTPLT20 = 1476395067

##### [` SYSZ_GOTPLT32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOTPLT32>)

SYSZ\_GOTPLT32 = 1476395039

##### [` SYSZ_GOTPLT64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOTPLT64>)

SYSZ\_GOTPLT64 = 1476395040

##### [` SYSZ_GOTPLTENT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_GOTPLTENT>)

SYSZ\_GOTPLTENT = 1476395041

##### [` SYSZ_IRELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_IRELATIVE>)

SYSZ\_IRELATIVE = 1476395069

##### [` SYSZ_JMP_SLOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_JMP_SLOT>)

SYSZ\_JMP\_SLOT = 1476395019

##### [` SYSZ_NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_NONE>)

SYSZ\_NONE = 1476395008

##### [` SYSZ_PC12DBL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_PC12DBL>)

SYSZ\_PC12DBL = 1476395070

##### [` SYSZ_PC16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_PC16>)

SYSZ\_PC16 = 1476395024

##### [` SYSZ_PC16DBL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_PC16DBL>)

SYSZ\_PC16DBL = 1476395025

##### [` SYSZ_PC24DBL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_PC24DBL>)

SYSZ\_PC24DBL = 1476395072

##### [` SYSZ_PC32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_PC32>)

SYSZ\_PC32 = 1476395013

##### [` SYSZ_PC32DBL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_PC32DBL>)

SYSZ\_PC32DBL = 1476395027

##### [` SYSZ_PC64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_PC64>)

SYSZ\_PC64 = 1476395031

##### [` SYSZ_PLT12DBL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_PLT12DBL>)

SYSZ\_PLT12DBL = 1476395071

##### [` SYSZ_PLT16DBL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_PLT16DBL>)

SYSZ\_PLT16DBL = 1476395026

##### [` SYSZ_PLT24DBL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_PLT24DBL>)

SYSZ\_PLT24DBL = 1476395073

##### [` SYSZ_PLT32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_PLT32>)

SYSZ\_PLT32 = 1476395016

##### [` SYSZ_PLT32DBL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_PLT32DBL>)

SYSZ\_PLT32DBL = 1476395028

##### [` SYSZ_PLT64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_PLT64>)

SYSZ\_PLT64 = 1476395033

##### [` SYSZ_PLTOFF16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_PLTOFF16>)

SYSZ\_PLTOFF16 = 1476395042

##### [` SYSZ_PLTOFF32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_PLTOFF32>)

SYSZ\_PLTOFF32 = 1476395043

##### [` SYSZ_PLTOFF64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_PLTOFF64>)

SYSZ\_PLTOFF64 = 1476395044

##### [` SYSZ_RELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_RELATIVE>)

SYSZ\_RELATIVE = 1476395020

##### [` SYSZ_TLS_DTPMOD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_DTPMOD>)

SYSZ\_TLS\_DTPMOD = 1476395062

##### [` SYSZ_TLS_DTPOFF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_DTPOFF>)

SYSZ\_TLS\_DTPOFF = 1476395063

##### [` SYSZ_TLS_GD32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_GD32>)

SYSZ\_TLS\_GD32 = 1476395048

##### [` SYSZ_TLS_GD64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_GD64>)

SYSZ\_TLS\_GD64 = 1476395049

##### [` SYSZ_TLS_GDCALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_GDCALL>)

SYSZ\_TLS\_GDCALL = 1476395046

##### [` SYSZ_TLS_GOTIE12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_GOTIE12>)

SYSZ\_TLS\_GOTIE12 = 1476395050

##### [` SYSZ_TLS_GOTIE20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_GOTIE20>)

SYSZ\_TLS\_GOTIE20 = 1476395068

##### [` SYSZ_TLS_GOTIE32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_GOTIE32>)

SYSZ\_TLS\_GOTIE32 = 1476395051

##### [` SYSZ_TLS_GOTIE64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_GOTIE64>)

SYSZ\_TLS\_GOTIE64 = 1476395052

##### [` SYSZ_TLS_IE32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_IE32>)

SYSZ\_TLS\_IE32 = 1476395055

##### [` SYSZ_TLS_IE64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_IE64>)

SYSZ\_TLS\_IE64 = 1476395056

##### [` SYSZ_TLS_IEENT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_IEENT>)

SYSZ\_TLS\_IEENT = 1476395057

##### [` SYSZ_TLS_LDCALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_LDCALL>)

SYSZ\_TLS\_LDCALL = 1476395047

##### [` SYSZ_TLS_LDM32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_LDM32>)

SYSZ\_TLS\_LDM32 = 1476395053

##### [` SYSZ_TLS_LDM64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_LDM64>)

SYSZ\_TLS\_LDM64 = 1476395054

##### [` SYSZ_TLS_LDO32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_LDO32>)

SYSZ\_TLS\_LDO32 = 1476395060

##### [` SYSZ_TLS_LDO64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_LDO64>)

SYSZ\_TLS\_LDO64 = 1476395061

##### [` SYSZ_TLS_LE32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_LE32>)

SYSZ\_TLS\_LE32 = 1476395058

##### [` SYSZ_TLS_LE64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_LE64>)

SYSZ\_TLS\_LE64 = 1476395059

##### [` SYSZ_TLS_LOAD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_LOAD>)

SYSZ\_TLS\_LOAD = 1476395045

##### [` SYSZ_TLS_TPOFF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.SYSZ_TLS_TPOFF>)

SYSZ\_TLS\_TPOFF = 1476395064

##### [` X86_16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_16>)

X86\_16 = 671088660

##### [` X86_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_32>)

X86\_32 = 671088641

##### [` X86_32PLT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_32PLT>)

X86\_32PLT = 671088651

##### [` X86_64_16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_16>)

X86\_64\_16 = 134217740

##### [` X86_64_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_32>)

X86\_64\_32 = 134217738

##### [` X86_64_32S `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_32S>)

X86\_64\_32S = 134217739

##### [` X86_64_64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_64>)

X86\_64\_64 = 134217729

##### [` X86_64_8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_8>)

X86\_64\_8 = 134217742

##### [` X86_64_COPY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_COPY>)

X86\_64\_COPY = 134217733

##### [` X86_64_DTPMOD64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_DTPMOD64>)

X86\_64\_DTPMOD64 = 134217744

##### [` X86_64_DTPOFF32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_DTPOFF32>)

X86\_64\_DTPOFF32 = 134217749

##### [` X86_64_DTPOFF64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_DTPOFF64>)

X86\_64\_DTPOFF64 = 134217745

##### [` X86_64_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_GLOB_DAT>)

X86\_64\_GLOB\_DAT = 134217734

##### [` X86_64_GOT32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_GOT32>)

X86\_64\_GOT32 = 134217731

##### [` X86_64_GOT64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_GOT64>)

X86\_64\_GOT64 = 134217755

##### [` X86_64_GOTOFF64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_GOTOFF64>)

X86\_64\_GOTOFF64 = 134217753

##### [` X86_64_GOTPC32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_GOTPC32>)

X86\_64\_GOTPC32 = 134217754

##### [` X86_64_GOTPC32_TLSDESC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_GOTPC32_TLSDESC>)

X86\_64\_GOTPC32\_TLSDESC = 134217762

##### [` X86_64_GOTPC64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_GOTPC64>)

X86\_64\_GOTPC64 = 134217757

##### [` X86_64_GOTPCREL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_GOTPCREL>)

X86\_64\_GOTPCREL = 134217737

##### [` X86_64_GOTPCREL64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_GOTPCREL64>)

X86\_64\_GOTPCREL64 = 134217756

##### [` X86_64_GOTPCRELX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_GOTPCRELX>)

X86\_64\_GOTPCRELX = 134217769

##### [` X86_64_GOTPLT64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_GOTPLT64>)

X86\_64\_GOTPLT64 = 134217758

##### [` X86_64_GOTTPOFF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_GOTTPOFF>)

X86\_64\_GOTTPOFF = 134217750

##### [` X86_64_IRELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_IRELATIVE>)

X86\_64\_IRELATIVE = 134217765

##### [` X86_64_JUMP_SLOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_JUMP_SLOT>)

X86\_64\_JUMP\_SLOT = 134217735

##### [` X86_64_NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_NONE>)

X86\_64\_NONE = 134217728

##### [` X86_64_PC16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_PC16>)

X86\_64\_PC16 = 134217741

##### [` X86_64_PC32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_PC32>)

X86\_64\_PC32 = 134217730

##### [` X86_64_PC32_BND `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_PC32_BND>)

X86\_64\_PC32\_BND = 134217767

##### [` X86_64_PC64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_PC64>)

X86\_64\_PC64 = 134217752

##### [` X86_64_PC8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_PC8>)

X86\_64\_PC8 = 134217743

##### [` X86_64_PLT32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_PLT32>)

X86\_64\_PLT32 = 134217732

##### [` X86_64_PLT32_BND `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_PLT32_BND>)

X86\_64\_PLT32\_BND = 134217768

##### [` X86_64_PLTOFF64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_PLTOFF64>)

X86\_64\_PLTOFF64 = 134217759

##### [` X86_64_RELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_RELATIVE>)

X86\_64\_RELATIVE = 134217736

##### [` X86_64_RELATIVE64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_RELATIVE64>)

X86\_64\_RELATIVE64 = 134217766

##### [` X86_64_REX_GOTPCRELX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_REX_GOTPCRELX>)

X86\_64\_REX\_GOTPCRELX = 134217770

##### [` X86_64_SIZE32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_SIZE32>)

X86\_64\_SIZE32 = 134217760

##### [` X86_64_SIZE64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_SIZE64>)

X86\_64\_SIZE64 = 134217761

##### [` X86_64_TLSDESC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_TLSDESC>)

X86\_64\_TLSDESC = 134217764

##### [` X86_64_TLSDESC_CALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_TLSDESC_CALL>)

X86\_64\_TLSDESC\_CALL = 134217763

##### [` X86_64_TLSGD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_TLSGD>)

X86\_64\_TLSGD = 134217747

##### [` X86_64_TLSLD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_TLSLD>)

X86\_64\_TLSLD = 134217748

##### [` X86_64_TPOFF32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_TPOFF32>)

X86\_64\_TPOFF32 = 134217751

##### [` X86_64_TPOFF64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_64_TPOFF64>)

X86\_64\_TPOFF64 = 134217746

##### [` X86_8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_8>)

X86\_8 = 671088662

##### [` X86_COPY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_COPY>)

X86\_COPY = 671088645

##### [` X86_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_GLOB_DAT>)

X86\_GLOB\_DAT = 671088646

##### [` X86_GOT32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_GOT32>)

X86\_GOT32 = 671088643

##### [` X86_GOTOFF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_GOTOFF>)

X86\_GOTOFF = 671088649

##### [` X86_GOTPC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_GOTPC>)

X86\_GOTPC = 671088650

##### [` X86_IRELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_IRELATIVE>)

X86\_IRELATIVE = 671088682

##### [` X86_JUMP_SLOT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_JUMP_SLOT>)

X86\_JUMP\_SLOT = 671088647

##### [` X86_NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_NONE>)

X86\_NONE = 671088640

##### [` X86_PC16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_PC16>)

X86\_PC16 = 671088661

##### [` X86_PC32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_PC32>)

X86\_PC32 = 671088642

##### [` X86_PC8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_PC8>)

X86\_PC8 = 671088663

##### [` X86_PLT32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_PLT32>)

X86\_PLT32 = 671088644

##### [` X86_RELATIVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_RELATIVE>)

X86\_RELATIVE = 671088648

##### [` X86_TLS_DESC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_DESC>)

X86\_TLS\_DESC = 671088681

##### [` X86_TLS_DESC_CALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_DESC_CALL>)

X86\_TLS\_DESC\_CALL = 671088680

##### [` X86_TLS_DTPMOD32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_DTPMOD32>)

X86\_TLS\_DTPMOD32 = 671088675

##### [` X86_TLS_DTPOFF32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_DTPOFF32>)

X86\_TLS\_DTPOFF32 = 671088676

##### [` X86_TLS_GD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_GD>)

X86\_TLS\_GD = 671088658

##### [` X86_TLS_GD_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_GD_32>)

X86\_TLS\_GD\_32 = 671088664

##### [` X86_TLS_GD_CALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_GD_CALL>)

X86\_TLS\_GD\_CALL = 671088666

##### [` X86_TLS_GD_POP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_GD_POP>)

X86\_TLS\_GD\_POP = 671088667

##### [` X86_TLS_GD_PUSH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_GD_PUSH>)

X86\_TLS\_GD\_PUSH = 671088665

##### [` X86_TLS_GOTDESC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_GOTDESC>)

X86\_TLS\_GOTDESC = 671088679

##### [` X86_TLS_GOTIE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_GOTIE>)

X86\_TLS\_GOTIE = 671088656

##### [` X86_TLS_IE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_IE>)

X86\_TLS\_IE = 671088655

##### [` X86_TLS_IE_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_IE_32>)

X86\_TLS\_IE\_32 = 671088673

##### [` X86_TLS_LDM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_LDM>)

X86\_TLS\_LDM = 671088659

##### [` X86_TLS_LDM_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_LDM_32>)

X86\_TLS\_LDM\_32 = 671088668

##### [` X86_TLS_LDM_CALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_LDM_CALL>)

X86\_TLS\_LDM\_CALL = 671088670

##### [` X86_TLS_LDM_POP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_LDM_POP>)

X86\_TLS\_LDM\_POP = 671088671

##### [` X86_TLS_LDM_PUSH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_LDM_PUSH>)

X86\_TLS\_LDM\_PUSH = 671088669

##### [` X86_TLS_LDO_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_LDO_32>)

X86\_TLS\_LDO\_32 = 671088672

##### [` X86_TLS_LE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_LE>)

X86\_TLS\_LE = 671088657

##### [` X86_TLS_LE_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_LE_32>)

X86\_TLS\_LE\_32 = 671088674

##### [` X86_TLS_TPOFF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_TPOFF>)

X86\_TLS\_TPOFF = 671088654

##### [` X86_TLS_TPOFF32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.X86_TLS_TPOFF32>)

X86\_TLS\_TPOFF32 = 671088677

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE.from_value>)

from\_value(*arg: int*) → [lief.ELF.Relocation.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE> "lief.ELF.Relocation.TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` addend `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.addend>)

property addend → int

Additional value

#### [` encoding `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.encoding>)

property encoding → [lief.ELF.Relocation.ENCODING](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.ENCODING> "lief.ELF.Relocation.ENCODING")

The encoding of the relocation

#### [` has_section `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.has_section>)

property has\_section → bool

`True` if this relocation has a [`lief.ELF.Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") associated with.

This is usually the case for object files (`.o`)

#### [` has_symbol `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.has_symbol>)

property has\_symbol → bool

`True` if a [`Symbol`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol") is associated with the relocation

#### [` info `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.info>)

property info → int

Extra information like the symbol index

#### [` is_android_packed `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.is_android_packed>)

property is\_android\_packed → bool

True if the relocation is using the Android packed relocation format

#### [` is_rel `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.is_rel>)

property is\_rel → bool

Check if the relocation uses the implicit addend (i.e. not present in the ELF structure)

#### [` is_rela `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.is_rela>)

property is\_rela → bool

`True` if the relocation **uses** the [`addend`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.addend> "lief.ELF.Relocation.addend") property

#### [` is_relatively_encoded `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.is_relatively_encoded>)

property is\_relatively\_encoded → bool

True if the relocation is using the relative encoding

#### [` purpose `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.purpose>)

property purpose → [lief.ELF.Relocation.PURPOSE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.PURPOSE> "lief.ELF.Relocation.PURPOSE")

Purpose of the relocation. This value provides the information about how the relocation is used (PLT/GOT resolution, `.o` file, …)

#### [` r_infor_info `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.r_info>)

r\_info(*self*, *clazz: [lief.\_lief.ELF.Header.CLASS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.CLASS> "lief._lief.ELF.Header.CLASS")*, *data: [lief.\_lief.ELF.Header.ELF\_DATA](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header.ELF_DATA> "lief._lief.ELF.Header.ELF_DATA")*) → int

**r\_info(*self*, *header: [lief.\_lief.ELF.Header](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Header> "lief._lief.ELF.Header")*) → int**

Overloaded function.

1. `r_info(self, clazz: lief._lief.ELF.Header.CLASS, data: lief._lief.ELF.Header.ELF_DATA) -> int`

   > (re)Compute the raw `r_info` attribute based on the given ELF class and endianness
2. `r_info(self, header: lief._lief.ELF.Header) -> int`

   > (re)Compute the raw `r_info` attribute based on the ELF Header

#### [` resolve `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.resolve>)

resolve(*self*, *base\_address: int = 0*) → int | [lief.\_lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief._lief.lief_errors")

Try to resolve the value of the relocation such as `*address() = resolve()`

#### [` section `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.section>)

property section → [lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") | None

[`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") in which the relocation is applied or None if not relevant

#### [` symbol `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.symbol>)

property symbol → [lief.ELF.Symbol](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol") | None

[`Symbol`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol> "lief.ELF.Symbol") associated with the relocation or None if no symbol is associated with this relocation.

#### [` symbol_table `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.symbol_table>)

property symbol\_table → [lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") | None

The symbol table [`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") which the relocation references

#### [` type `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.type>)

property type → [lief.ELF.Relocation.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Relocation.TYPE> "lief.ELF.Relocation.TYPE")

Relocation type.

---

## [Symbol](<https://lief.re/doc/latest/formats/elf/python.html#symbol>)

### [` lief.ELF.Symbol `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol>)

class lief.ELF.Symbol(*self*)

Bases: [`Symbol`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol> "lief._lief.Symbol")

Class which represents an ELF symbol

#### [` BINDING `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.BINDING>)

class BINDING(*\*values*)

Bases: `Enum`

##### [` GLOBAL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.BINDING.GLOBAL>)

GLOBAL = 1

##### [` GNU_UNIQUE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.BINDING.GNU_UNIQUE>)

GNU\_UNIQUE = 10

##### [` LOCAL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.BINDING.LOCAL>)

LOCAL = 0

##### [` WEAK `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.BINDING.WEAK>)

WEAK = 2

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.BINDING.from_value>)

from\_value(*arg: int*) → [lief.ELF.Symbol.BINDING](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.BINDING> "lief.ELF.Symbol.BINDING") = &lt;nanobind.nb\_func object&gt;

#### [` TYPE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

##### [` COMMON `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.TYPE.COMMON>)

COMMON = 5

##### [` FILE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.TYPE.FILE>)

FILE = 4

##### [` FUNC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.TYPE.FUNC>)

FUNC = 2

##### [` GNU_IFUNC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.TYPE.GNU_IFUNC>)

GNU\_IFUNC = 10

##### [` NOTYPE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.TYPE.NOTYPE>)

NOTYPE = 0

##### [` OBJECT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.TYPE.OBJECT>)

OBJECT = 1

##### [` SECTION `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.TYPE.SECTION>)

SECTION = 3

##### [` TLS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.TYPE.TLS>)

TLS = 6

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.TYPE.from_value>)

from\_value(*arg: int*) → [lief.ELF.Symbol.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.TYPE> "lief.ELF.Symbol.TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` VISIBILITY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.VISIBILITY>)

class VISIBILITY(*\*values*)

Bases: `Enum`

##### [` DEFAULT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.VISIBILITY.DEFAULT>)

DEFAULT = 0

##### [` HIDDEN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.VISIBILITY.HIDDEN>)

HIDDEN = 2

##### [` INTERNAL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.VISIBILITY.INTERNAL>)

INTERNAL = 1

##### [` PROTECTED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.VISIBILITY.PROTECTED>)

PROTECTED = 3

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.VISIBILITY.from_value>)

from\_value(*arg: int*) → [lief.ELF.Symbol.VISIBILITY](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.VISIBILITY> "lief.ELF.Symbol.VISIBILITY") = &lt;nanobind.nb\_func object&gt;

#### [` binding `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.binding>)

property binding → [lief.ELF.Symbol.BINDING](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.BINDING> "lief.ELF.Symbol.BINDING")

A symbol’s binding determines the linkage visibility and behavior.

#### [` demangled_name `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.demangled_name>)

property demangled\_name → str

Symbol’s name demangled or an empty string if the demangling is not possible/failed

#### [` exported `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.exported>)

property exported → bool

Whether the symbol is **exported**

#### [` has_version `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.has_version>)

property has\_version → bool

Check if this symbols has a [`SymbolVersion`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion> "lief.ELF.SymbolVersion")

#### [` imported `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.imported>)

property imported → bool

Whether the symbol is **imported**

#### [` information `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.information>)

property information → int

This property specifies the symbol’s type and binding attributes

#### [` is_function `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.is_function>)

property is\_function → bool

True if the symbol is a function

#### [` is_static `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.is_static>)

property is\_static → bool

True if the symbol has static visibility

#### [` is_variable `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.is_variable>)

property is\_variable → bool

True if the symbol is a variable

#### [` other `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.other>)

property other → int

Alias for [`visibility`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.visibility> "lief.ELF.Symbol.visibility")

#### [` section `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.section>)

property section → [lief.ELF.Section](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section") | None

Return the section ([`Section`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Section> "lief.ELF.Section")) associated with this symbol if any. Otherwise, return None.

#### [` shndx `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.shndx>)

property shndx → int

Section index associated with the symbol

#### [` size `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.size>)

property size → int

Many symbols have associated sizes. For example, a data object’s size is the number of bytes contained in the object. This member holds 0 if the symbol has no size or an unknown size.

#### [` symbol_version `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.symbol_version>)

property symbol\_version → [lief.ELF.SymbolVersion](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion> "lief.ELF.SymbolVersion") | None

Return the [`SymbolVersion`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion> "lief.ELF.SymbolVersion") associated with this symbol

It returns None if no version is tied to this symbol.

#### [` type `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.type>)

property type → [lief.ELF.Symbol.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.TYPE> "lief.ELF.Symbol.TYPE")

The symbol’s type provides a general classification for the associated entity.

#### [` value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.value>)

property value → int

This member has different meaning depending on the symbol’s type and the type of the ELF file (library, object, …)

- In relocatable files, this property contains the alignment constraints of the symbol for which the section index is SHN\_COMMON.
- In relocatable files, can also contain a section’s offset for a defined symbol. That is, value is an offset from the beginning of the section associated with this symbol.
- In executable and libraries, this property contains a virtual address.

#### [` visibility `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.visibility>)

property visibility → [lief.ELF.Symbol.VISIBILITY](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.VISIBILITY> "lief.ELF.Symbol.VISIBILITY")

Symbol visibility. It’s basically an alias on [`other`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Symbol.other> "lief.ELF.Symbol.other")

---

## [Symbol Version](<https://lief.re/doc/latest/formats/elf/python.html#symbol-version>)

### [` lief.ELF.SymbolVersionlief.ELF.SymbolVersion `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion>)

class lief.ELF.SymbolVersion(*self*)

**class lief.ELF.SymbolVersion(*self*, *arg: int*, */*)**

Bases: `Object`

Overloaded function.

1. `__init__(self) -> None`

Default constructor

2. `__init__(self, arg: int, /) -> None`

Constructor from `value`

#### [` as_global `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.as_global>)

as\_global(*self*) → None

Redefine this version as global by dropping its auxiliary version

#### [` as_local `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.as_local>)

as\_local(*self*) → None

Redefine this version as local by dropping its auxiliary version

#### [` drop_version `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.drop_version>)

drop\_version(*self*, *value: int*) → None

Drop the versioning requirement and replace the value (local/global)

#### [` global_ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.global_>)

global\_ = &lt;lief.\_lief.ELF.SymbolVersion object&gt;

#### [` has_auxiliary_version `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.has_auxiliary_version>)

property has\_auxiliary\_version → bool

Check if this symbols has a [`SymbolVersionAux`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAux> "lief.ELF.SymbolVersionAux")

#### [` is_global `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.is_global>)

property is\_global → bool

Whether this symbol version is global or the base version

#### [` is_hidden `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.is_hidden>)

property is\_hidden → bool

Whether the GNU `VERSYM_HIDDEN` bit is set.

A hidden version is only available when explicitly referenced by its version name.

#### [` is_local `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.is_local>)

property is\_local → bool

Whether this symbol version is local

#### [` local `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.local>)

local = &lt;lief.\_lief.ELF.SymbolVersion object&gt;

#### [` symbol_version_auxiliary `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.symbol_version_auxiliary>)

property symbol\_version\_auxiliary → [lief.ELF.SymbolVersionAux](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAux> "lief.ELF.SymbolVersionAux") | None

Return the [`SymbolVersionAux`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAux> "lief.ELF.SymbolVersionAux") associated with this version or None if not present.

The value can be changed by assigning a [`SymbolVersionAuxRequirement`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAuxRequirement> "lief.ELF.SymbolVersionAuxRequirement") which must already exist in the [`SymbolVersionRequirement`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionRequirement> "lief.ELF.SymbolVersionRequirement"). One can use `add_aux_requirement()` to add a new [`SymbolVersionAuxRequirement`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAuxRequirement> "lief.ELF.SymbolVersionAuxRequirement").

#### [` value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.value>)

property value → int

Value associated with the symbol.

If the given SymbolVersion has no auxiliary version:

- 0 : The symbol is local
- 1 : The symbol is global

All other values are used for versions in the own object or in any of the dependencies. This is the version the symbol is tied to.

#### [` version `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion.version>)

property version → int

Version index without the GNU `VERSYM_HIDDEN` bit

---

## [Symbol Version Auxiliary](<https://lief.re/doc/latest/formats/elf/python.html#symbol-version-auxiliary>)

![Inheritance diagram of lief._lief.ELF.SymbolVersionAux, lief._lief.ELF.SymbolVersionAuxRequirement](https://lief.re/doc/latest/_images/inheritance-96220983250d142a31842db3c0ad367f968c549d.png)

### [` lief.ELF.SymbolVersionAux `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAux>)

class lief.ELF.SymbolVersionAux

Bases: `Object`

Class which represents an Auxiliary Symbol version

#### [` name `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAux.name>)

property name → str | bytes

Symbol’s name (e.g. `GLIBC_2.2.5`)

---

## [Symbol Version Definition](<https://lief.re/doc/latest/formats/elf/python.html#symbol-version-definition>)

### [` lief.ELF.SymbolVersionDefinition `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionDefinition>)

class lief.ELF.SymbolVersionDefinition

Bases: `Object`

Class which represents an entry defined in `DT_VERDEF` or `.gnu.version_d`

#### [` auxiliary_symbols `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionDefinition.auxiliary_symbols>)

property auxiliary\_symbols → lief.ELF.SymbolVersionDefinition.it\_version\_aux

#### [` flags `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionDefinition.flags>)

property flags → int

Version information

#### [` hash `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionDefinition.hash>)

property hash → int

Hash value of the symbol’s name (using ELF hash function)

#### [` ndx `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionDefinition.ndx>)

property ndx → int

Numeric value used as an index in the [`SymbolVersion`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion> "lief.ELF.SymbolVersion") table

#### [` version `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionDefinition.version>)

property version → int

Version revision. Should be 1

This field should always have the value `1`. It will be changed if the versioning implementation has to be changed in an incompatible way.

---

## [Symbol Version Requirement](<https://lief.re/doc/latest/formats/elf/python.html#symbol-version-requirement>)

### [` lief.ELF.SymbolVersionRequirement `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionRequirement>)

class lief.ELF.SymbolVersionRequirement

Bases: `Object`

Class which represents an entry in the `DT_VERNEED` or `.gnu.version_r` table

#### [` add_auxiliary_requirement `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionRequirement.add_auxiliary_requirement>)

add\_auxiliary\_requirement(*self*, *arg: [lief.\_lief.ELF.SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAuxRequirement> "lief._lief.ELF.SymbolVersionAuxRequirement")*, */*) → [lief.\_lief.ELF.SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAuxRequirement> "lief._lief.ELF.SymbolVersionAuxRequirement")

Add an auxiliary version requirement to the existing entries

#### [` find_aux `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionRequirement.find_aux>)

find\_aux(*self*, *name: str*) → [lief.\_lief.ELF.SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAuxRequirement> "lief._lief.ELF.SymbolVersionAuxRequirement") | None

Try to find the [`SymbolVersionAuxRequirement`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAuxRequirement> "lief.ELF.SymbolVersionAuxRequirement") with the given name (e.g. `GLIBC_2.27`)

#### [` get_auxiliary_symbols `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionRequirement.get_auxiliary_symbols>)

get\_auxiliary\_symbols(*self*) → lief.\_lief.ELF.SymbolVersionRequirement.it\_aux\_requirement

Auxiliary entries (iterator over [`SymbolVersionAuxRequirement`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAuxRequirement> "lief.ELF.SymbolVersionAuxRequirement"))

#### [` name `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionRequirement.name>)

property name → str

Library’s name associated with this requirement (e.g. `libc.so.6`)

#### [` remove_aux_requirementremove_aux_requirement `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionRequirement.remove_aux_requirement>)

remove\_aux\_requirement(*self*, *name: str*) → bool

**remove\_aux\_requirement(*self*, *aux: [lief.\_lief.ELF.SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAuxRequirement> "lief._lief.ELF.SymbolVersionAuxRequirement")*) → bool**

Overloaded function.

1. `remove_aux_requirement(self, name: str) -> bool`

   > Try to remove the auxiliary requirement symbol with the given name. The function returns true if the operation succeeds, false otherwise.
   >
   > > **Warning**
   > > 
   > > This function invalidates all the references (pointers) of [`SymbolVersionAuxRequirement`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAuxRequirement> "lief.ELF.SymbolVersionAuxRequirement"). Therefore, the user is responsible to ensure that the auxiliary requirement is no longer used in the ELF binary (e.g. in [`SymbolVersion`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion> "lief.ELF.SymbolVersion"))
2. `remove_aux_requirement(self, aux: lief._lief.ELF.SymbolVersionAuxRequirement) -> bool`

   > Try to remove the given auxiliary requirement symbol. The function returns true if the operation succeeds, false otherwise.
   >
   > > **Warning**
   > > 
   > > This function invalidates all the references (pointers) of [`SymbolVersionAuxRequirement`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAuxRequirement> "lief.ELF.SymbolVersionAuxRequirement"). Therefore, the user is responsible to ensure that the auxiliary requirement is no longer used in the ELF binary (e.g. in [`SymbolVersion`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersion> "lief.ELF.SymbolVersion"))

#### [` version `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionRequirement.version>)

property version → int

Version revision. Should be 1

---

## [Symbol Version Auxiliary Requirement](<https://lief.re/doc/latest/formats/elf/python.html#symbol-version-auxiliary-requirement>)

### [` lief.ELF.SymbolVersionAuxRequirement `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAuxRequirement>)

class lief.ELF.SymbolVersionAuxRequirement(*self*)

Bases: [`SymbolVersionAux`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAux> "lief._lief.ELF.SymbolVersionAux")

Default constructor

#### [` flags `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAuxRequirement.flags>)

property flags → int

Bitmask of flags

#### [` hash `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAuxRequirement.hash>)

property hash → int

Hash value of the dependency name (use ELF hashing function)

#### [` other `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SymbolVersionAuxRequirement.other>)

property other → int

It returns the unique version index for the file which is used in the version symbol table. If the highest bit (bit 15) is set this is a hidden symbol which cannot be referenced from outside the object.

---

## [GNU Hash table](<https://lief.re/doc/latest/formats/elf/python.html#gnu-hash-table>)

### [` lief.ELF.GnuHash `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.GnuHash>)

class lief.ELF.GnuHash(*self*)

Bases: `Object`

Class which provides a view over the GNU Hash implementation. Most of the fields are read-only since the values are re-computed by the [`lief.ELF.Builder`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder> "lief.ELF.Builder").

#### [` bloom_filters `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.GnuHash.bloom_filters>)

property bloom\_filters → list[int]

Bloom filters

#### [` buckets `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.GnuHash.buckets>)

property buckets → list[int]

hash buckets

#### [` checkcheck `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.GnuHash.check>)

check(*self*, *symbol\_name: str*) → bool

**check(*self*, *hash\_value: int*) → bool**

Overloaded function.

1. `check(self, symbol_name: str) -> bool`

Check if the symbol *probably* exists. If the returned value is `false` you can assume at `100%` that the symbol with the given name doesn’t exist. If `true` you can’t do any assumption

2. `check(self, hash_value: int) -> bool`

Check if the symbol associated with the given hash *probably* exists. If the returned value is `false` you can assume at `100%` that the symbol doesn’t exist. If `true` you can’t do any assumption

#### [` check_bloom_filter `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.GnuHash.check_bloom_filter>)

check\_bloom\_filter(*self*, *hash: int*) → bool

Check if the given hash passes the bloom filter

#### [` check_bucket `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.GnuHash.check_bucket>)

check\_bucket(*self*, *hash: int*) → bool

Check if the given hash passes the bucket filter

#### [` hash_values `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.GnuHash.hash_values>)

property hash\_values → list[int]

Hash values

#### [` nb_buckets `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.GnuHash.nb_buckets>)

property nb\_buckets → int

Return the number of buckets

#### [` shift2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.GnuHash.shift2>)

property shift2 → int

Shift count used in the bloom filter

#### [` symbol_index `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.GnuHash.symbol_index>)

property symbol\_index → int

Index of the first symbol in the dynamic symbols table which is accessible with the hash table

---

## [SYSV Hash table](<https://lief.re/doc/latest/formats/elf/python.html#sysv-hash-table>)

### [` lief.ELF.SysvHash `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SysvHash>)

class lief.ELF.SysvHash(*self*)

Bases: `Object`

Class which represents the SYSV hash for the symbols resolution

References:

> - [http://www.linker-aliens.org/blogs/ali/entry/gnu\_hash\_elf\_sections/](<http://www.linker-aliens.org/blogs/ali/entry/gnu_hash_elf_sections/>)
> - [https://docs.oracle.com/cd/E23824\_01/html/819-0690/chapter6-48031.html](<https://docs.oracle.com/cd/E23824_01/html/819-0690/chapter6-48031.html>)

#### [` buckets `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SysvHash.buckets>)

property buckets → list[int]

Buckets values

#### [` chains `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SysvHash.chains>)

property chains → list[int]

Chains values

#### [` nbucket `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SysvHash.nbucket>)

property nbucket → int

Return the number of buckets

#### [` nchain `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.SysvHash.nchain>)

property nchain → int

Return the number of *chains* (symbol table index)

---

## [Note](<https://lief.re/doc/latest/formats/elf/python.html#note>)

![Inheritance diagram of lief._lief.ELF.AndroidIdent, lief._lief.ELF.CorePrPsInfo, lief._lief.ELF.CoreFile, lief._lief.ELF.NoteAbi, lief._lief.ELF.CorePrStatus, lief._lief.ELF.NoteGnuProperty, lief._lief.ELF.CoreSigInfo, lief._lief.ELF.CoreAuxv, lief._lief.ELF.QNXStack, lief._lief.ELF.Note](https://lief.re/doc/latest/_images/inheritance-fcae58e4945d0454fa7fc1e9a28b2cbf88d5b8fa.png)

### [` lief.ELF.Note `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note>)

class lief.ELF.Note

Bases: `Object`

Class which represents an ELF note.

#### [` TYPE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

LIEF representation of the ELF NT\_ values.

##### [` ANDROID_IDENT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.ANDROID_IDENT>)

ANDROID\_IDENT = 38

##### [` ANDROID_KUSER `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.ANDROID_KUSER>)

ANDROID\_KUSER = 40

##### [` ANDROID_MEMTAG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.ANDROID_MEMTAG>)

ANDROID\_MEMTAG = 39

##### [` CORE_ARM_HW_BREAK `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_ARM_HW_BREAK>)

CORE\_ARM\_HW\_BREAK = 25

##### [` CORE_ARM_HW_WATCH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_ARM_HW_WATCH>)

CORE\_ARM\_HW\_WATCH = 26

##### [` CORE_ARM_PACA_KEYS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_ARM_PACA_KEYS>)

CORE\_ARM\_PACA\_KEYS = 30

##### [` CORE_ARM_PACG_KEYS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_ARM_PACG_KEYS>)

CORE\_ARM\_PACG\_KEYS = 31

##### [` CORE_ARM_PAC_MASK `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_ARM_PAC_MASK>)

CORE\_ARM\_PAC\_MASK = 29

##### [` CORE_ARM_SVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_ARM_SVE>)

CORE\_ARM\_SVE = 28

##### [` CORE_ARM_SYSTEM_CALL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_ARM_SYSTEM_CALL>)

CORE\_ARM\_SYSTEM\_CALL = 27

##### [` CORE_ARM_TLS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_ARM_TLS>)

CORE\_ARM\_TLS = 24

##### [` CORE_ARM_VFP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_ARM_VFP>)

CORE\_ARM\_VFP = 23

##### [` CORE_AUXV `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_AUXV>)

CORE\_AUXV = 13

##### [` CORE_FILE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_FILE>)

CORE\_FILE = 20

##### [` CORE_FPREGS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_FPREGS>)

CORE\_FPREGS = 15

##### [` CORE_FPREGSET `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_FPREGSET>)

CORE\_FPREGSET = 10

##### [` CORE_LWPSINFO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_LWPSINFO>)

CORE\_LWPSINFO = 18

##### [` CORE_LWPSTATUS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_LWPSTATUS>)

CORE\_LWPSTATUS = 17

##### [` CORE_PAC_ENABLED_KEYS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_PAC_ENABLED_KEYS>)

CORE\_PAC\_ENABLED\_KEYS = 33

##### [` CORE_PRPSINFO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_PRPSINFO>)

CORE\_PRPSINFO = 11

##### [` CORE_PRSTATUS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_PRSTATUS>)

CORE\_PRSTATUS = 9

##### [` CORE_PRXFPREG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_PRXFPREG>)

CORE\_PRXFPREG = 21

##### [` CORE_PSINFO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_PSINFO>)

CORE\_PSINFO = 16

##### [` CORE_PSTATUS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_PSTATUS>)

CORE\_PSTATUS = 14

##### [` CORE_SIGINFO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_SIGINFO>)

CORE\_SIGINFO = 22

##### [` CORE_TAGGED_ADDR_CTRL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_TAGGED_ADDR_CTRL>)

CORE\_TAGGED\_ADDR\_CTRL = 32

##### [` CORE_TASKSTRUCT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_TASKSTRUCT>)

CORE\_TASKSTRUCT = 12

##### [` CORE_WIN32PSTATUS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_WIN32PSTATUS>)

CORE\_WIN32PSTATUS = 19

##### [` CORE_X86_CET `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_X86_CET>)

CORE\_X86\_CET = 37

##### [` CORE_X86_IOPERM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_X86_IOPERM>)

CORE\_X86\_IOPERM = 35

##### [` CORE_X86_TLS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_X86_TLS>)

CORE\_X86\_TLS = 34

##### [` CORE_X86_XSTATE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CORE_X86_XSTATE>)

CORE\_X86\_XSTATE = 36

##### [` CRASHPAD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.CRASHPAD>)

CRASHPAD = 8

##### [` GNU_ABI_TAG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.GNU_ABI_TAG>)

GNU\_ABI\_TAG = 1

##### [` GNU_BUILD_ATTRIBUTE_FUNC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.GNU_BUILD_ATTRIBUTE_FUNC>)

GNU\_BUILD\_ATTRIBUTE\_FUNC = 7

##### [` GNU_BUILD_ATTRIBUTE_OPEN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.GNU_BUILD_ATTRIBUTE_OPEN>)

GNU\_BUILD\_ATTRIBUTE\_OPEN = 6

##### [` GNU_BUILD_ID `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.GNU_BUILD_ID>)

GNU\_BUILD\_ID = 3

##### [` GNU_GOLD_VERSION `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.GNU_GOLD_VERSION>)

GNU\_GOLD\_VERSION = 4

##### [` GNU_HWCAP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.GNU_HWCAP>)

GNU\_HWCAP = 2

##### [` GNU_PROPERTY_TYPE_0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.GNU_PROPERTY_TYPE_0>)

GNU\_PROPERTY\_TYPE\_0 = 5

##### [` GO_BUILDID `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.GO_BUILDID>)

GO\_BUILDID = 41

##### [` QNX_STACK `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.QNX_STACK>)

QNX\_STACK = 43

##### [` STAPSDT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.STAPSDT>)

STAPSDT = 42

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.UNKNOWN>)

UNKNOWN = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE.from_value>)

from\_value(*arg: int*) → [lief.ELF.Note.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE> "lief.ELF.Note.TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` copy `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.copy>)

copy(*self*) → [lief.\_lief.ELF.Note](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief._lief.ELF.Note") | None

Duplicate the current instance of this object

#### [` create `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.create>)

create(*\*args*) → [lief.ELF.Note](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief.ELF.Note") | None = &lt;nanobind.nb\_func object&gt;

#### [` description `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.description>)

property description → memoryview

Return the description associated with the note

#### [` name `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.name>)

property name → str

Return the *name* of the note also known as the owner.

#### [` original_type `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.original_type>)

property original\_type → int

Return the original NT\_ value of the note.

This value should be interpreted according the [`name`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.name> "lief.ELF.Note.name") of the note.

#### [` size `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.size>)

property size → int

Size of the **raw** note

#### [` type `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.type>)

property type → [lief.ELF.Note.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note.TYPE> "lief.ELF.Note.TYPE")

Return the LIEF type representation of the note.

---

## [Core PrPsInfo](<https://lief.re/doc/latest/formats/elf/python.html#core-prpsinfo>)

![Inheritance diagram of lief._lief.ELF.CorePrPsInfo](https://lief.re/doc/latest/_images/inheritance-99a7b257188512d60a075a08dc134ef1411ceb87.png)

### [` lief.ELF.CorePrPsInfo `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo>)

class lief.ELF.CorePrPsInfo

Bases: [`Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief._lief.ELF.Note")

#### [` info `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info>)

property info → [lief.ELF.CorePrPsInfo.info\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t> "lief.ELF.CorePrPsInfo.info_t") | None

#### [` info_t `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t>)

class info\_t

Bases: `object`

##### [` args `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t.args>)

property args → str

##### [` args_stripped `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t.args_stripped>)

property args\_stripped → str

##### [` filename `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t.filename>)

property filename → str

##### [` filename_stripped `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t.filename_stripped>)

property filename\_stripped → str

##### [` flag `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t.flag>)

property flag → int

##### [` gid `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t.gid>)

property gid → int

##### [` nice `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t.nice>)

property nice → int

##### [` pgrp `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t.pgrp>)

property pgrp → int

##### [` pid `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t.pid>)

property pid → int

##### [` ppid `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t.ppid>)

property ppid → int

##### [` sid `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t.sid>)

property sid → int

##### [` sname `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t.sname>)

property sname → str

##### [` state `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t.state>)

property state → int

##### [` uid `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t.uid>)

property uid → int

##### [` zombie `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrPsInfo.info_t.zombie>)

property zombie → bool

---

## [Core PrStatus](<https://lief.re/doc/latest/formats/elf/python.html#core-prstatus>)

![Inheritance diagram of lief._lief.ELF.CorePrStatus](https://lief.re/doc/latest/_images/inheritance-c465363f40592632de3933ff0933a27cd3807cd1.png)

### [` lief.ELF.CorePrStatus `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus>)

class lief.ELF.CorePrStatus

Bases: [`Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief._lief.ELF.Note")

#### [` Registers `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers>)

class Registers

Bases: `object`

##### [` AARCH64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64>)

class AARCH64(*\*values*)

Bases: `Enum`

Registers for the AARCH64 architecture ([`AARCH64`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.AARCH64> "lief.ELF.ARCH.AARCH64"))

###### [` PC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.PC>)

PC = 32

###### [` PSTATE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.PSTATE>)

PSTATE = 33

###### [` X0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X0>)

X0 = 0

###### [` X1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X1>)

X1 = 1

###### [` X10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X10>)

X10 = 10

###### [` X11 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X11>)

X11 = 11

###### [` X12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X12>)

X12 = 12

###### [` X13 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X13>)

X13 = 13

###### [` X14 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X14>)

X14 = 14

###### [` X15 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X15>)

X15 = 15

###### [` X16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X16>)

X16 = 16

###### [` X17 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X17>)

X17 = 17

###### [` X18 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X18>)

X18 = 18

###### [` X19 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X19>)

X19 = 19

###### [` X2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X2>)

X2 = 2

###### [` X20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X20>)

X20 = 20

###### [` X21 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X21>)

X21 = 21

###### [` X22 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X22>)

X22 = 22

###### [` X23 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X23>)

X23 = 23

###### [` X24 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X24>)

X24 = 24

###### [` X25 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X25>)

X25 = 25

###### [` X26 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X26>)

X26 = 26

###### [` X27 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X27>)

X27 = 27

###### [` X28 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X28>)

X28 = 28

###### [` X29 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X29>)

X29 = 29

###### [` X3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X3>)

X3 = 3

###### [` X30 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X30>)

X30 = 30

###### [` X31 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X31>)

X31 = 31

###### [` X4 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X4>)

X4 = 4

###### [` X5 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X5>)

X5 = 5

###### [` X6 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X6>)

X6 = 6

###### [` X7 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X7>)

X7 = 7

###### [` X8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X8>)

X8 = 8

###### [` X9 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.X9>)

X9 = 9

###### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64.from_value>)

from\_value(*arg: int*) → [lief.ELF.CorePrStatus.Registers.AARCH64](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64> "lief.ELF.CorePrStatus.Registers.AARCH64") = &lt;nanobind.nb\_func object&gt;

##### [` ARM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM>)

class ARM(*\*values*)

Bases: `Enum`

Registers for the ARM architecture ([`ARM`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ARM> "lief.ELF.ARCH.ARM"))

###### [` CPSR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.CPSR>)

CPSR = 16

###### [` R0 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.R0>)

R0 = 0

###### [` R1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.R1>)

R1 = 1

###### [` R10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.R10>)

R10 = 10

###### [` R11 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.R11>)

R11 = 11

###### [` R12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.R12>)

R12 = 12

###### [` R13 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.R13>)

R13 = 13

###### [` R14 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.R14>)

R14 = 14

###### [` R15 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.R15>)

R15 = 15

###### [` R2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.R2>)

R2 = 2

###### [` R3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.R3>)

R3 = 3

###### [` R4 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.R4>)

R4 = 4

###### [` R5 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.R5>)

R5 = 5

###### [` R6 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.R6>)

R6 = 6

###### [` R7 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.R7>)

R7 = 7

###### [` R8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.R8>)

R8 = 8

###### [` R9 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.R9>)

R9 = 9

###### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM.from_value>)

from\_value(*arg: int*) → [lief.ELF.CorePrStatus.Registers.ARM](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM> "lief.ELF.CorePrStatus.Registers.ARM") = &lt;nanobind.nb\_func object&gt;

##### [` X86 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86>)

class X86(*\*values*)

Bases: `Enum`

Registers for the x86 architecture (`i386`)

###### [` CS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.CS>)

CS = 13

###### [` DS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.DS>)

DS = 7

###### [` EAX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.EAX>)

EAX = 6

###### [` EBP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.EBP>)

EBP = 5

###### [` EBX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.EBX>)

EBX = 0

###### [` ECX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.ECX>)

ECX = 1

###### [` EDI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.EDI>)

EDI = 4

###### [` EDX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.EDX>)

EDX = 2

###### [` EFLAGS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.EFLAGS>)

EFLAGS = 14

###### [` EIP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.EIP>)

EIP = 12

###### [` ES `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.ES>)

ES = 8

###### [` ESI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.ESI>)

ESI = 3

###### [` ESP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.ESP>)

ESP = 15

###### [` FS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.FS>)

FS = 9

###### [` GS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.GS>)

GS = 10

###### [` ORIG_EAX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.ORIG_EAX>)

ORIG\_EAX = 11

###### [` SS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.SS>)

SS = 16

###### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86.from_value>)

from\_value(*arg: int*) → [lief.ELF.CorePrStatus.Registers.X86](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86> "lief.ELF.CorePrStatus.Registers.X86") = &lt;nanobind.nb\_func object&gt;

##### [` X86_64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64>)

class X86\_64(*\*values*)

Bases: `Enum`

Registers for the x86-64 architecture (`x86_64`)

###### [` CS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.CS>)

CS = 17

###### [` DS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.DS>)

DS = 23

###### [` EFLAGS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.EFLAGS>)

EFLAGS = 18

###### [` ES `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.ES>)

ES = 24

###### [` FS_BASE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.FS_BASE>)

FS\_BASE = 21

###### [` GS_BASE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.GS_BASE>)

GS\_BASE = 22

###### [` ORIG_RAX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.ORIG_RAX>)

ORIG\_RAX = 15

###### [` R10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.R10>)

R10 = 7

###### [` R11 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.R11>)

R11 = 6

###### [` R12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.R12>)

R12 = 3

###### [` R13 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.R13>)

R13 = 2

###### [` R14 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.R14>)

R14 = 1

###### [` R15 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.R15>)

R15 = 0

###### [` R8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.R8>)

R8 = 9

###### [` R9 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.R9>)

R9 = 8

###### [` RAX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.RAX>)

RAX = 10

###### [` RBP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.RBP>)

RBP = 4

###### [` RBX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.RBX>)

RBX = 5

###### [` RCX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.RCX>)

RCX = 11

###### [` RDI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.RDI>)

RDI = 14

###### [` RDX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.RDX>)

RDX = 12

###### [` RIP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.RIP>)

RIP = 16

###### [` RSI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.RSI>)

RSI = 13

###### [` RSP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.RSP>)

RSP = 19

###### [` SS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.SS>)

SS = 20

###### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64.from_value>)

from\_value(*arg: int*) → [lief.ELF.CorePrStatus.Registers.X86\_64](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64> "lief.ELF.CorePrStatus.Registers.X86_64") = &lt;nanobind.nb\_func object&gt;

#### [` architecture `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.architecture>)

property architecture → [lief.ELF.ARCH](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH> "lief.ELF.ARCH")

Original target architecture.

#### [` getgetgetget `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.get>)

get(*self*, *reg: [lief.\_lief.ELF.CorePrStatus.Registers.X86](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86> "lief._lief.ELF.CorePrStatus.Registers.X86")*) → int | None

**get(*self*, *reg: [lief.\_lief.ELF.CorePrStatus.Registers.X86\_64](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64> "lief._lief.ELF.CorePrStatus.Registers.X86_64")*) → int | None

**get(*self*, *reg: [lief.\_lief.ELF.CorePrStatus.Registers.ARM](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM> "lief._lief.ELF.CorePrStatus.Registers.ARM")*) → int | None

**get(*self*, *reg: [lief.\_lief.ELF.CorePrStatus.Registers.AARCH64](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64> "lief._lief.ELF.CorePrStatus.Registers.AARCH64")*) → int | None******

Get the register value or non if it is not present

#### [` pc `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.pc>)

property pc → int | None

Return the program counter value (rip, pc, eip etc)

#### [` pr_status_t `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.pr_status_t>)

class pr\_status\_t

Bases: `object`

##### [` cstime `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.pr_status_t.cstime>)

property cstime → [lief.ELF.CorePrStatus.timeval\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.timeval_t> "lief.ELF.CorePrStatus.timeval_t")

##### [` cursig `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.pr_status_t.cursig>)

property cursig → int

##### [` cutime `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.pr_status_t.cutime>)

property cutime → [lief.ELF.CorePrStatus.timeval\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.timeval_t> "lief.ELF.CorePrStatus.timeval_t")

##### [` info `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.pr_status_t.info>)

property info → [lief.ELF.CorePrStatus.siginfo\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.siginfo_t> "lief.ELF.CorePrStatus.siginfo_t")

##### [` pgrp `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.pr_status_t.pgrp>)

property pgrp → int

##### [` pid `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.pr_status_t.pid>)

property pid → int

##### [` ppid `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.pr_status_t.ppid>)

property ppid → int

##### [` reserved `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.pr_status_t.reserved>)

property reserved → int

##### [` sid `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.pr_status_t.sid>)

property sid → int

##### [` sighold `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.pr_status_t.sighold>)

property sighold → int

##### [` sigpend `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.pr_status_t.sigpend>)

property sigpend → int

##### [` stime `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.pr_status_t.stime>)

property stime → [lief.ELF.CorePrStatus.timeval\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.timeval_t> "lief.ELF.CorePrStatus.timeval_t")

##### [` utime `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.pr_status_t.utime>)

property utime → [lief.ELF.CorePrStatus.timeval\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.timeval_t> "lief.ELF.CorePrStatus.timeval_t")

#### [` register_values `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.register_values>)

property register\_values → list[int]

List of the register values. This list is **guaranteed** to be as long as the number of registers defined in the [`Registers`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers> "lief.ELF.CorePrStatus.Registers") or empty if it can’t be resolved.

Thus, one can access a specific register through:

```python
reg_vals: list[int] = note.register_values()
x20 = reg_vals[CorePrStatus.Registers.AARCH64.X20.value]
```

#### [` return_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.return_value>)

property return\_value → int | None

The value of the register that holds the return value according to the calling convention.

#### [` setsetsetset `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.set>)

set(*self*, *reg: [lief.\_lief.ELF.CorePrStatus.Registers.X86](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86> "lief._lief.ELF.CorePrStatus.Registers.X86")*, *value: int*) → [lief.\_lief.ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t> "lief._lief.ok_error_t")

**set(*self*, *reg: [lief.\_lief.ELF.CorePrStatus.Registers.X86\_64](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.X86_64> "lief._lief.ELF.CorePrStatus.Registers.X86_64")*, *value: int*) → [lief.\_lief.ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t> "lief._lief.ok_error_t")

**set(*self*, *reg: [lief.\_lief.ELF.CorePrStatus.Registers.ARM](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.ARM> "lief._lief.ELF.CorePrStatus.Registers.ARM")*, *value: int*) → [lief.\_lief.ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t> "lief._lief.ok_error_t")

**set(*self*, *reg: [lief.\_lief.ELF.CorePrStatus.Registers.AARCH64](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.Registers.AARCH64> "lief._lief.ELF.CorePrStatus.Registers.AARCH64")*, *value: int*) → [lief.\_lief.ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t> "lief._lief.ok_error_t")******

Change the register value

#### [` siginfo_t `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.siginfo_t>)

class siginfo\_t

Bases: `object`

##### [` errno `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.siginfo_t.errno>)

property errno → int

##### [` sicode `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.siginfo_t.sicode>)

property sicode → int

##### [` signo `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.siginfo_t.signo>)

property signo → int

#### [` sp `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.sp>)

property sp → int | None

Return the stack pointer value

#### [` status `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.status>)

property status → [lief.ELF.CorePrStatus.pr\_status\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.pr_status_t> "lief.ELF.CorePrStatus.pr_status_t")

Status information from a core dump

This structure mirrors the kernel’s `prstatus` data embedded in `NT_PRSTATUS` core-dump notes and exposes signal state, process identifiers, and CPU-time accounting.

#### [` timeval_t `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.timeval_t>)

class timeval\_t

Bases: `object`

##### [` sec `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.timeval_t.sec>)

property sec → int

##### [` usec `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CorePrStatus.timeval_t.usec>)

property usec → int

---

## [Core File](<https://lief.re/doc/latest/formats/elf/python.html#core-file>)

![Inheritance diagram of lief._lief.ELF.CoreFile](https://lief.re/doc/latest/_images/inheritance-91254947d10646a724ec8f290a70220fc6216fbe.png)

### [` lief.ELF.CoreFile `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile>)

class lief.ELF.CoreFile

Bases: [`Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief._lief.ELF.Note")

#### [` entry_t `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.entry_t>)

class entry\_t

Bases: `object`

##### [` end `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.entry_t.end>)

property end → int

End address of mapped file

##### [` file_ofs `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.entry_t.file_ofs>)

property file\_ofs → int

Offset (in core) of mapped file

##### [` path `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.entry_t.path>)

property path → str

Path of mapped file

##### [` start `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.entry_t.start>)

property start → int

Start address of mapped file

#### [` files `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.files>)

property files → [lief.ELF.CoreFile.files\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.files_t> "lief.ELF.CoreFile.files_t")

List of files mapped in core. (list of `CoreFileEntry`)

#### [` files_tfiles_tfiles_t `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.files_t>)

class files\_t(*self*)

**class files\_t(*self*, *arg: [lief.\_lief.ELF.CoreFile.files\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.files_t> "lief._lief.ELF.CoreFile.files_t")*, */*)

**class files\_t(*self*, *arg: collections.abc.Iterable[[lief.\_lief.ELF.CoreFile.entry\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.entry_t> "lief._lief.ELF.CoreFile.entry_t")]*, */*)****

Bases: `object`

Overloaded function.

1. `__init__(self) -> None`

Default constructor

2. `__init__(self, arg: lief._lief.ELF.CoreFile.files_t, /) -> None`

Copy constructor

3. `__init__(self, arg: collections.abc.Iterable[lief._lief.ELF.CoreFile.entry_t], /) -> None`

Construct from an iterable object

##### [` append `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.files_t.append>)

append(*self*, *arg: [lief.\_lief.ELF.CoreFile.entry\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.entry_t> "lief._lief.ELF.CoreFile.entry_t")*, */*) → None

Append `arg` to the end of the list.

##### [` clear `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.files_t.clear>)

clear(*self*) → None

Remove all items from list.

##### [` extend `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.files_t.extend>)

extend(*self*, *arg: [lief.\_lief.ELF.CoreFile.files\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.files_t> "lief._lief.ELF.CoreFile.files_t")*, */*) → None

Extend `self` by appending elements from `arg`.

##### [` insert `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.files_t.insert>)

insert(*self*, *arg0: int*, *arg1: [lief.\_lief.ELF.CoreFile.entry\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.entry_t> "lief._lief.ELF.CoreFile.entry_t")*, */*) → None

Insert object `arg1` before index `arg0`.

##### [` pop `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.files_t.pop>)

pop(*self*, *index: int = -1*) → [lief.\_lief.ELF.CoreFile.entry\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreFile.entry_t> "lief._lief.ELF.CoreFile.entry_t")

Remove and return item at `index` (default last).

---

## [Core Siginfo](<https://lief.re/doc/latest/formats/elf/python.html#core-siginfo>)

![Inheritance diagram of lief._lief.ELF.CoreSigInfo](https://lief.re/doc/latest/_images/inheritance-990ce32c9bb08f734383f8b0501424fa23a2599f.png)

### [` lief.ELF.CoreSigInfo `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreSigInfo>)

class lief.ELF.CoreSigInfo

Bases: [`Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief._lief.ELF.Note")

#### [` sigcode `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreSigInfo.sigcode>)

property sigcode → int | None

Signal code

#### [` sigerrno `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreSigInfo.sigerrno>)

property sigerrno → int | None

If non-zero, an errno value associated with this signal

#### [` signo `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreSigInfo.signo>)

property signo → int | None

Signal number

---

## [Core Auxiliary Vector](<https://lief.re/doc/latest/formats/elf/python.html#core-auxiliary-vector>)

![Inheritance diagram of lief._lief.ELF.CoreAuxv](https://lief.re/doc/latest/_images/inheritance-30fa7f18ac6e7a56ba42fd63d4f557891ea800e0.png)

### [` lief.ELF.CoreAuxv `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv>)

class lief.ELF.CoreAuxv

Bases: [`Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief._lief.ELF.Note")

#### [` TYPE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

##### [` BASE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.BASE>)

BASE = 7

##### [` BASE_PLATFORM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.BASE_PLATFORM>)

BASE\_PLATFORM = 24

##### [` CLKTCK `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.CLKTCK>)

CLKTCK = 17

##### [` DCACHEBSIZE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.DCACHEBSIZE>)

DCACHEBSIZE = 19

##### [` EGID `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.EGID>)

EGID = 14

##### [` END `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.END>)

END = 0

##### [` ENTRY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.ENTRY>)

ENTRY = 9

##### [` EUID `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.EUID>)

EUID = 12

##### [` EXECFD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.EXECFD>)

EXECFD = 2

##### [` EXECFN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.EXECFN>)

EXECFN = 31

##### [` FLAGS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.FLAGS>)

FLAGS = 8

##### [` FPUCW `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.FPUCW>)

FPUCW = 18

##### [` GID `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.GID>)

GID = 13

##### [` HWCAP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.HWCAP>)

HWCAP = 16

##### [` HWCAP2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.HWCAP2>)

HWCAP2 = 26

##### [` ICACHEBSIZE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.ICACHEBSIZE>)

ICACHEBSIZE = 20

##### [` IGNOREPPC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.IGNOREPPC>)

IGNOREPPC = 22

##### [` IGNORE_TY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.IGNORE_TY>)

IGNORE\_TY = 1

##### [` NOTELF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.NOTELF>)

NOTELF = 10

##### [` PAGESZ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.PAGESZ>)

PAGESZ = 6

##### [` PHDR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.PHDR>)

PHDR = 3

##### [` PHENT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.PHENT>)

PHENT = 4

##### [` PHNUM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.PHNUM>)

PHNUM = 5

##### [` RANDOM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.RANDOM>)

RANDOM = 25

##### [` SECURE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.SECURE>)

SECURE = 23

##### [` SYSINFO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.SYSINFO>)

SYSINFO = 32

##### [` SYSINFO_EHDR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.SYSINFO_EHDR>)

SYSINFO\_EHDR = 33

##### [` TGT_PLATFORM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.TGT_PLATFORM>)

TGT\_PLATFORM = 15

##### [` UCACHEBSIZE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.UCACHEBSIZE>)

UCACHEBSIZE = 21

##### [` UID `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.UID>)

UID = 11

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE.from_value>)

from\_value(*arg: int*) → [lief.ELF.CoreAuxv.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE> "lief.ELF.CoreAuxv.TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` get `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.get>)

get(*self*, *type: [lief.\_lief.ELF.CoreAuxv.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE> "lief._lief.ELF.CoreAuxv.TYPE")*) → int | None

Get the auxv value from the provided type. Return None if it is not present.

#### [` setset `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.set>)

set(*self*, *type: [lief.\_lief.ELF.CoreAuxv.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE> "lief._lief.ELF.CoreAuxv.TYPE")*, *value: int*) → bool

**set(*self*, *arg: collections.abc.Mapping[[lief.\_lief.ELF.CoreAuxv.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE> "lief._lief.ELF.CoreAuxv.TYPE"), int]*, */*) → bool**

Overloaded function.

1. `set(self, type: lief._lief.ELF.CoreAuxv.TYPE, value: int) -> bool`

   > Change the value for the given type.
2. `set(self, arg: collections.abc.Mapping[lief._lief.ELF.CoreAuxv.TYPE, int], /) -> bool`

   > Replace **all** the values by the given dictionary.

#### [` values `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.values>)

property values → dict[[lief.ELF.CoreAuxv.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE> "lief.ELF.CoreAuxv.TYPE"), int]

Return the auxiliary vector as a dictionary of [`TYPE`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.CoreAuxv.TYPE> "lief.ELF.CoreAuxv.TYPE") / int

---

## [Android Ident](<https://lief.re/doc/latest/formats/elf/python.html#android-ident>)

![Inheritance diagram of lief._lief.ELF.AndroidIdent](https://lief.re/doc/latest/_images/inheritance-1c6b7873a95a617ca09efa7f71d24e98e39cd9cd.png)

### [` lief.ELF.AndroidIdent `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AndroidIdent>)

class lief.ELF.AndroidIdent

Bases: [`Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief._lief.ELF.Note")

#### [` ndk_build_number `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AndroidIdent.ndk_build_number>)

property ndk\_build\_number → str

Android NDK build number

#### [` ndk_version `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AndroidIdent.ndk_version>)

property ndk\_version → str

Android NDK version used to build the current binary

#### [` sdk_version `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AndroidIdent.sdk_version>)

property sdk\_version → int

Target SDK platform

---

## [QNX Stack](<https://lief.re/doc/latest/formats/elf/python.html#qnx-stack>)

![Inheritance diagram of lief._lief.ELF.QNXStack](https://lief.re/doc/latest/_images/inheritance-cf49135148eebaffd6763b45d5ff7f3a3ed7c737.png)

### [` lief.ELF.QNXStack `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.QNXStack>)

class lief.ELF.QNXStack

Bases: [`Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief._lief.ELF.Note")

#### [` is_executable `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.QNXStack.is_executable>)

property is\_executable → bool

Whether the stack is executable

#### [` stack_allocated `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.QNXStack.stack_allocated>)

property stack\_allocated → int

Size of the stack pre-allocated (upfront)

#### [` stack_size `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.QNXStack.stack_size>)

property stack\_size → int

Size of the stack

---

## [Note ABI](<https://lief.re/doc/latest/formats/elf/python.html#note-abi>)

![Inheritance diagram of lief._lief.ELF.NoteAbi](https://lief.re/doc/latest/_images/inheritance-4a88dcff8d1b450371553cc79b6a36810fd79c50.png)

### [` lief.ELF.NoteAbi `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteAbi>)

class lief.ELF.NoteAbi

Bases: [`Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief._lief.ELF.Note")

Class that wraps the NT\_GNU\_ABI\_TAG note

#### [` ABI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteAbi.ABI>)

class ABI(*\*values*)

Bases: `Enum`

ABI recognized by this note

##### [` FREEBSD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteAbi.ABI.FREEBSD>)

FREEBSD = 3

##### [` GNU `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteAbi.ABI.GNU>)

GNU = 1

##### [` LINUX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteAbi.ABI.LINUX>)

LINUX = 0

##### [` NACL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteAbi.ABI.NACL>)

NACL = 6

##### [` NETBSD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteAbi.ABI.NETBSD>)

NETBSD = 4

##### [` SOLARIS2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteAbi.ABI.SOLARIS2>)

SOLARIS2 = 2

##### [` SYLLABLE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteAbi.ABI.SYLLABLE>)

SYLLABLE = 5

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteAbi.ABI.from_value>)

from\_value(*arg: int*) → [lief.ELF.NoteAbi.ABI](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteAbi.ABI> "lief.ELF.NoteAbi.ABI") = &lt;nanobind.nb\_func object&gt;

#### [` abi `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteAbi.abi>)

property abi → [lief.ELF.NoteAbi.ABI](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteAbi.ABI> "lief.ELF.NoteAbi.ABI") | None

Return the target [`ABI`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteAbi.ABI> "lief.ELF.NoteAbi.ABI")

#### [` version `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteAbi.version>)

property version → list[int] | None

Return the target version as `(Major, Minor, Patch)`

---

## [Note Gnu Property](<https://lief.re/doc/latest/formats/elf/python.html#note-gnu-property>)

![Inheritance diagram of lief._lief.ELF.NoteGnuProperty](https://lief.re/doc/latest/_images/inheritance-139dd895fd72aa278c07185ebc39d005fca759c4.png)

![Inheritance diagram of lief._lief.ELF.Generic, lief._lief.ELF.X86Features, lief._lief.ELF.Needed, lief._lief.ELF.StackSize, lief._lief.ELF.AArch64Feature, lief._lief.ELF.NoteNoCopyOnProtected, lief._lief.ELF.X86ISA, lief._lief.ELF.AArch64PAuth](https://lief.re/doc/latest/_images/inheritance-ce0ff375f7300c25d8baa739700d640155ac2ff0.png)

### [` lief.ELF.NoteGnuProperty `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty>)

class lief.ELF.NoteGnuProperty

Bases: [`Note`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Note> "lief._lief.ELF.Note")

This object represents the NT\_GNU\_PROPERTY\_TYPE\_0 note.

#### [` Property `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property>)

class Property

Bases: `object`

This class wraps the different properties that can be used in a NT\_GNU\_PROPERTY\_TYPE\_0 note

##### [` TYPE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

LIEF’s mirror types of the original GNU\_PROPERTY\_ values

###### [` AARCH64_FEATURES `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property.TYPE.AARCH64_FEATURES>)

AARCH64\_FEATURES = 2

###### [` AARCH64_PAUTH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property.TYPE.AARCH64_PAUTH>)

AARCH64\_PAUTH = 3

###### [` GENERIC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property.TYPE.GENERIC>)

GENERIC = 1

###### [` NEEDED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property.TYPE.NEEDED>)

NEEDED = 8

###### [` NO_COPY_ON_PROTECTED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property.TYPE.NO_COPY_ON_PROTECTED>)

NO\_COPY\_ON\_PROTECTED = 5

###### [` STACK_SIZE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property.TYPE.STACK_SIZE>)

STACK\_SIZE = 4

###### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property.TYPE.UNKNOWN>)

UNKNOWN = 0

###### [` X86_FEATURE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property.TYPE.X86_FEATURE>)

X86\_FEATURE = 7

###### [` X86_ISA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property.TYPE.X86_ISA>)

X86\_ISA = 6

###### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property.TYPE.from_value>)

from\_value(*arg: int*) → [lief.ELF.NoteGnuProperty.Property.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property.TYPE> "lief.ELF.NoteGnuProperty.Property.TYPE") = &lt;nanobind.nb\_func object&gt;

##### [` type `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property.type>)

property type → [lief.ELF.NoteGnuProperty.Property.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property.TYPE> "lief.ELF.NoteGnuProperty.Property.TYPE")

#### [` find `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.find>)

find(*self*, *arg: [lief.\_lief.ELF.NoteGnuProperty.Property.TYPE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property.TYPE> "lief._lief.ELF.NoteGnuProperty.Property.TYPE")*, */*) → [lief.\_lief.ELF.NoteGnuProperty.Property](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property> "lief._lief.ELF.NoteGnuProperty.Property") | None

Find the property with the given type or return None

#### [` properties `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.properties>)

property properties → list[[lief.ELF.NoteGnuProperty.Property](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property> "lief.ELF.NoteGnuProperty.Property") | None]

Return the properties as a list of Property

---

## [Generic](<https://lief.re/doc/latest/formats/elf/python.html#generic>)

![Inheritance diagram of lief._lief.ELF.Generic](https://lief.re/doc/latest/_images/inheritance-7ce1c240e8cc05bebd4f47c40020aa47f3b8aed0.png)

### [` lief.ELF.Generic `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Generic>)

class lief.ELF.Generic

Bases: [`Property`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property> "lief._lief.ELF.NoteGnuProperty.Property")

This class represents a property which doesn’t have a concrete LIEF implementation.

#### [` raw_type `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Generic.raw_type>)

property raw\_type → int

The original raw type as an integer. This value might depend on the architecture and/or the file type.

---

## [AArch64 Feature](<https://lief.re/doc/latest/formats/elf/python.html#aarch64-feature>)

![Inheritance diagram of lief._lief.ELF.AArch64Feature](https://lief.re/doc/latest/_images/inheritance-86edb50aebb41ea6293e15debc675ba458a2d2bb.png)

### [` lief.ELF.AArch64Feature `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64Feature>)

class lief.ELF.AArch64Feature

Bases: [`Property`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property> "lief._lief.ELF.NoteGnuProperty.Property")

This class represents the `GNU_PROPERTY_AARCH64_FEATURE_1_AND` note.

#### [` FEATURE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64Feature.FEATURE>)

class FEATURE(*\*values*)

Bases: `Enum`

##### [` BTI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64Feature.FEATURE.BTI>)

BTI = 1

##### [` GCS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64Feature.FEATURE.GCS>)

GCS = 3

##### [` PAC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64Feature.FEATURE.PAC>)

PAC = 2

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64Feature.FEATURE.UNKNOWN>)

UNKNOWN = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64Feature.FEATURE.from_value>)

from\_value(*arg: int*) → [lief.ELF.AArch64Feature.FEATURE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64Feature.FEATURE> "lief.ELF.AArch64Feature.FEATURE") = &lt;nanobind.nb\_func object&gt;

#### [` features `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64Feature.features>)

property features → list[[lief.ELF.AArch64Feature.FEATURE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64Feature.FEATURE> "lief.ELF.AArch64Feature.FEATURE")]

Return the list of the supported features.

---

## [AArch64 PAuth](<https://lief.re/doc/latest/formats/elf/python.html#aarch64-pauth>)

![Inheritance diagram of lief._lief.ELF.AArch64PAuth](https://lief.re/doc/latest/_images/inheritance-2996f24a94abf7d7c40a6ae8c0ae4c484d35c693.png)

### [` lief.ELF.AArch64PAuth `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64PAuth>)

class lief.ELF.AArch64PAuth

Bases: [`Property`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property> "lief._lief.ELF.NoteGnuProperty.Property")

This class represents the `GNU_PROPERTY_AARCH64_FEATURE_PAUTH` note.

> **Note**
> 
> If both: [`AArch64PAuth.platform`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64PAuth.platform> "lief.ELF.AArch64PAuth.platform") and [`AArch64PAuth.version`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64PAuth.version> "lief.ELF.AArch64PAuth.version") are set to 0, this means that the binary is incompatible with PAuth ABI extension.

#### [` platform `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64PAuth.platform>)

property platform → int

64-bit value that specifies the platform vendor.

A `0` value is associated with an *invalid* platform while the value `1` is associated with a baremetal platform.

#### [` version `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.AArch64PAuth.version>)

property version → int

64-bit value that identifies the signing schema used by the ELF file.

---

## [Needed](<https://lief.re/doc/latest/formats/elf/python.html#needed>)

![Inheritance diagram of lief._lief.ELF.Needed](https://lief.re/doc/latest/_images/inheritance-b12946921fde9a32bdf792e7b80f07a92f2af86a.png)

### [` lief.ELF.Needed `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Needed>)

class lief.ELF.Needed

Bases: [`Property`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property> "lief._lief.ELF.NoteGnuProperty.Property")

This class represents the `GNU_PROPERTY_1_NEEDED` note property which provides information about additional features the object file needs at runtime.

#### [` NEED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Needed.NEED>)

class NEED(*\*values*)

Bases: `Enum`

##### [` INDIRECT_EXTERN_ACCESS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Needed.NEED.INDIRECT_EXTERN_ACCESS>)

INDIRECT\_EXTERN\_ACCESS = 1

##### [` NEED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Needed.NEED.NEED>)

NEED = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Needed.NEED.from_value>)

from\_value(*arg: int*) → [lief.ELF.Needed.NEED](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Needed.NEED> "lief.ELF.Needed.NEED") = &lt;nanobind.nb\_func object&gt;

#### [` needs `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Needed.needs>)

property needs → list[[lief.ELF.Needed.NEED](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Needed.NEED> "lief.ELF.Needed.NEED")]

Return the list of the needed features.

---

## [No Copy on Protected](<https://lief.re/doc/latest/formats/elf/python.html#no-copy-on-protected>)

![Inheritance diagram of lief._lief.ELF.NoteNoCopyOnProtected](https://lief.re/doc/latest/_images/inheritance-8c54ce878d82ef046faba6a15aca1da42d4da6eb.png)

### [` lief.ELF.NoteNoCopyOnProtected `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteNoCopyOnProtected>)

class lief.ELF.NoteNoCopyOnProtected

Bases: [`Property`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property> "lief._lief.ELF.NoteGnuProperty.Property")

This class provides an interface over the `GNU_PROPERTY_NO_COPY_ON_PROTECTED` property. This property indicates that the linker shouldn’t copy relocations against protected symbols.

---

## [Stack Size](<https://lief.re/doc/latest/formats/elf/python.html#stack-size>)

![Inheritance diagram of lief._lief.ELF.StackSize](https://lief.re/doc/latest/_images/inheritance-3b48490567df24ad744b2f66ded30d0f6fe03edb.png)

### [` lief.ELF.StackSize `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.StackSize>)

class lief.ELF.StackSize

Bases: [`Property`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property> "lief._lief.ELF.NoteGnuProperty.Property")

This class provides an interface over the `GNU_PROPERTY_STACK_SIZE` property This property can be used by the loader to raise the stack limit.

#### [` stack_size `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.StackSize.stack_size>)

property stack\_size → int

---

## [X86 Feature](<https://lief.re/doc/latest/formats/elf/python.html#x86-feature>)

![Inheritance diagram of lief._lief.ELF.X86Features](https://lief.re/doc/latest/_images/inheritance-92f5f2cbd8694eb209cab9f7973cd744cc4cfb2f.png)

### [` lief.ELF.X86Features `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features>)

class lief.ELF.X86Features

Bases: [`Property`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property> "lief._lief.ELF.NoteGnuProperty.Property")

This class interfaces the different `GNU_PROPERTY_X86_FEATURE_*` properties which includes:

- `GNU_PROPERTY_X86_FEATURE_1_AND`
- `GNU_PROPERTY_X86_FEATURE_2_USED`
- `GNU_PROPERTY_X86_FEATURE_2_NEEDED`

#### [` FEATURE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE>)

class FEATURE(*\*values*)

Bases: `Enum`

Features provided by these different properties

##### [` FXSR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.FXSR>)

FXSR = 11

##### [` IBT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.IBT>)

IBT = 1

##### [` LAM_U48 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.LAM_U48>)

LAM\_U48 = 3

##### [` LAM_U57 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.LAM_U57>)

LAM\_U57 = 4

##### [` MASK `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.MASK>)

MASK = 16

##### [` MMX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.MMX>)

MMX = 7

##### [` SHSTK `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.SHSTK>)

SHSTK = 2

##### [` TMM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.TMM>)

TMM = 15

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.UNKNOWN>)

UNKNOWN = 0

##### [` X86 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.X86>)

X86 = 5

##### [` X87 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.X87>)

X87 = 6

##### [` XMM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.XMM>)

XMM = 8

##### [` XSAVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.XSAVE>)

XSAVE = 12

##### [` XSAVEC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.XSAVEC>)

XSAVEC = 14

##### [` XSAVEOPT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.XSAVEOPT>)

XSAVEOPT = 13

##### [` YMM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.YMM>)

YMM = 9

##### [` ZMM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.ZMM>)

ZMM = 10

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE.from_value>)

from\_value(*arg: int*) → [lief.ELF.X86Features.FEATURE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE> "lief.ELF.X86Features.FEATURE") = &lt;nanobind.nb\_func object&gt;

#### [` FLAG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FLAG>)

class FLAG(*\*values*)

Bases: `Enum`

Flag according to the `_AND`, `_USED` or `_NEEDED` suffixes

##### [` NEEDED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FLAG.NEEDED>)

NEEDED = 2

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FLAG.NONE>)

NONE = 0

##### [` USED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FLAG.USED>)

USED = 1

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FLAG.from_value>)

from\_value(*arg: int*) → [lief.ELF.X86Features.FLAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FLAG> "lief.ELF.X86Features.FLAG") = &lt;nanobind.nb\_func object&gt;

#### [` features `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.features>)

property features → list[tuple[[lief.ELF.X86Features.FLAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FLAG> "lief.ELF.X86Features.FLAG"), [lief.ELF.X86Features.FEATURE](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE> "lief.ELF.X86Features.FEATURE")]]

List of the features as a pair of ([`FLAG`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FLAG> "lief.ELF.X86Features.FLAG"), [`FEATURE`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86Features.FEATURE> "lief.ELF.X86Features.FEATURE")).

---

## [X86 ISA](<https://lief.re/doc/latest/formats/elf/python.html#x86-isa>)

![Inheritance diagram of lief._lief.ELF.X86ISA](https://lief.re/doc/latest/_images/inheritance-a59888900c7c2953dfad9d578813f250a8cd4834.png)

### [` lief.ELF.X86ISA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA>)

class lief.ELF.X86ISA

Bases: [`Property`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.NoteGnuProperty.Property> "lief._lief.ELF.NoteGnuProperty.Property")

This class interfaces the different `GNU_PROPERTY_X86_ISA_*` properties which includes:

- `GNU_PROPERTY_X86_ISA_1_USED`
- `GNU_PROPERTY_X86_ISA_1_NEEDED`
- `GNU_PROPERTY_X86_COMPAT_ISA_1_USED`
- `GNU_PROPERTY_X86_COMPAT_ISA_1_NEEDED`
- `GNU_PROPERTY_X86_COMPAT_2_ISA_1_USED`
- `GNU_PROPERTY_X86_COMPAT_2_ISA_1_NEEDED`

#### [` FLAG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.FLAG>)

class FLAG(*\*values*)

Bases: `Enum`

##### [` NEEDED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.FLAG.NEEDED>)

NEEDED = 2

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.FLAG.NONE>)

NONE = 0

##### [` USED `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.FLAG.USED>)

USED = 1

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.FLAG.from_value>)

from\_value(*arg: int*) → [lief.ELF.X86ISA.FLAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.FLAG> "lief.ELF.X86ISA.FLAG") = &lt;nanobind.nb\_func object&gt;

#### [` ISA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA>)

class ISA(*\*values*)

Bases: `Enum`

##### [` AVX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX>)

AVX = 16

##### [` AVX2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX2>)

AVX2 = 17

##### [` AVX512BW `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX512BW>)

AVX512BW = 24

##### [` AVX512CD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX512CD>)

AVX512CD = 19

##### [` AVX512DQ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX512DQ>)

AVX512DQ = 23

##### [` AVX512ER `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX512ER>)

AVX512ER = 20

##### [` AVX512F `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX512F>)

AVX512F = 18

##### [` AVX512PF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX512PF>)

AVX512PF = 21

##### [` AVX512VL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX512VL>)

AVX512VL = 22

##### [` AVX512_4FMAPS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX512_4FMAPS>)

AVX512\_4FMAPS = 25

##### [` AVX512_4VNNIW `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX512_4VNNIW>)

AVX512\_4VNNIW = 26

##### [` AVX512_BF16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX512_BF16>)

AVX512\_BF16 = 32

##### [` AVX512_BITALG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX512_BITALG>)

AVX512\_BITALG = 27

##### [` AVX512_IFMA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX512_IFMA>)

AVX512\_IFMA = 28

##### [` AVX512_VBMI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX512_VBMI>)

AVX512\_VBMI = 29

##### [` AVX512_VBMI2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX512_VBMI2>)

AVX512\_VBMI2 = 30

##### [` AVX512_VNNI `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.AVX512_VNNI>)

AVX512\_VNNI = 31

##### [` BASELINE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.BASELINE>)

BASELINE = 1

##### [` CMOV `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.CMOV>)

CMOV = 5

##### [` FMA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.FMA>)

FMA = 6

##### [` I486 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.I486>)

I486 = 7

##### [` I586 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.I586>)

I586 = 8

##### [` I686 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.I686>)

I686 = 9

##### [` SSE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.SSE>)

SSE = 10

##### [` SSE2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.SSE2>)

SSE2 = 11

##### [` SSE3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.SSE3>)

SSE3 = 12

##### [` SSE4_1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.SSE4_1>)

SSE4\_1 = 14

##### [` SSE4_2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.SSE4_2>)

SSE4\_2 = 15

##### [` SSSE3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.SSSE3>)

SSSE3 = 13

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.UNKNOWN>)

UNKNOWN = 0

##### [` V2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.V2>)

V2 = 2

##### [` V3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.V3>)

V3 = 3

##### [` V4 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.V4>)

V4 = 4

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA.from_value>)

from\_value(*arg: int*) → [lief.ELF.X86ISA.ISA](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA> "lief.ELF.X86ISA.ISA") = &lt;nanobind.nb\_func object&gt;

#### [` values `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.values>)

property values → list[tuple[[lief.ELF.X86ISA.FLAG](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.FLAG> "lief.ELF.X86ISA.FLAG"), [lief.ELF.X86ISA.ISA](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.X86ISA.ISA> "lief.ELF.X86ISA.ISA")]]

List of the ISA values in this property

---

## [Builder](<https://lief.re/doc/latest/formats/elf/python.html#builder>)

### [` lief.ELF.Builderlief.ELF.Builder `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder>)

class lief.ELF.Builder(*self*, *elf: [lief.\_lief.ELF.Binary](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief._lief.ELF.Binary")*)

**class lief.ELF.Builder(*self*, *elf: [lief.\_lief.ELF.Binary](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief._lief.ELF.Binary")*, *config: [lief.\_lief.ELF.Builder.config\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t> "lief._lief.ELF.Builder.config_t")*)**

Bases: `object`

Class which takes an [`lief.ELF.Binary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief.ELF.Binary") object and reconstructs a valid binary

#### [` build `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.build>)

build(*self*) → None

Perform the build of the provided ELF binary

#### [` config `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config>)

property config → [lief.ELF.Builder.config\_t](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t> "lief.ELF.Builder.config_t")

Configuration of the builder

#### [` config_t `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t>)

class config\_t(*self*)

Bases: `object`

Interface to tweak the [`Builder`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder> "lief.ELF.Builder")

##### [` android_rela `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.android_rela>)

property android\_rela → bool

Rebuild [`ANDROID_RELA`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.ANDROID_RELA> "lief.ELF.DynamicEntry.TAG.ANDROID_RELA")

##### [` coredump_notes `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.coredump_notes>)

property coredump\_notes → bool

Rebuild the Coredump notes

##### [` dt_hash `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.dt_hash>)

property dt\_hash → bool

Rebuild [`HASH`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.HASH> "lief.ELF.DynamicEntry.TAG.HASH")

##### [` dyn_str `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.dyn_str>)

property dyn\_str → bool

Rebuild [`STRTAB`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.STRTAB> "lief.ELF.DynamicEntry.TAG.STRTAB")

##### [` dynamic_section `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.dynamic_section>)

property dynamic\_section → bool

Rebuild the PT\_DYNAMIC segment

##### [` fini_array `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.fini_array>)

property fini\_array → bool

Rebuild [`FINI_ARRAY`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.FINI_ARRAY> "lief.ELF.DynamicEntry.TAG.FINI_ARRAY")

##### [` force_relocate `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.force_relocate>)

property force\_relocate → bool

Force to relocate all the ELF structures that can be relocated (mostly for testing)

##### [` init_array `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.init_array>)

property init\_array → bool

Rebuild [`INIT_ARRAY`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.INIT_ARRAY> "lief.ELF.DynamicEntry.TAG.INIT_ARRAY")

##### [` interpreter `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.interpreter>)

property interpreter → bool

Rebuild the PT\_INTERP segment

##### [` jmprel `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.jmprel>)

property jmprel → bool

Rebuild [`JMPREL`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.JMPREL> "lief.ELF.DynamicEntry.TAG.JMPREL")

##### [` keep_empty_version_requirement `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.keep_empty_version_requirement>)

property keep\_empty\_version\_requirement → bool

Remove entries in `.gnu.version_r` if they are not associated with at least one version

##### [` notes `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.notes>)

property notes → bool

Rebuild PT\_NOTES segment(s)

##### [` preinit_array `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.preinit_array>)

property preinit\_array → bool

Rebuild [`PREINIT_ARRAY`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.PREINIT_ARRAY> "lief.ELF.DynamicEntry.TAG.PREINIT_ARRAY")

##### [` rela `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.rela>)

property rela → bool

Rebuild [`RELA`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.RELA> "lief.ELF.DynamicEntry.TAG.RELA")

##### [` relr `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.relr>)

property relr → bool

Rebuild [`RELR`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.RELR> "lief.ELF.DynamicEntry.TAG.RELR")

##### [` skip_dynamic `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.skip_dynamic>)

property skip\_dynamic → bool

Skip relocating the PT\_DYNAMIC segment (only relevant if [`force_relocate`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.force_relocate> "lief.ELF.Builder.config_t.force_relocate") is set)

##### [` static_symtab `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.static_symtab>)

property static\_symtab → bool

Rebuild .symtab section

##### [` sym_verdef `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.sym_verdef>)

property sym\_verdef → bool

Rebuild [`VERDEF`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.VERDEF> "lief.ELF.DynamicEntry.TAG.VERDEF")

##### [` sym_verneed `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.sym_verneed>)

property sym\_verneed → bool

Rebuild [`VERNEED`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.VERNEED> "lief.ELF.DynamicEntry.TAG.VERNEED")

##### [` sym_versym `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.sym_versym>)

property sym\_versym → bool

Rebuild [`VERSYM`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.VERSYM> "lief.ELF.DynamicEntry.TAG.VERSYM")

##### [` symtab `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.config_t.symtab>)

property symtab → bool

Rebuild [`SYMTAB`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.DynamicEntry.TAG.SYMTAB> "lief.ELF.DynamicEntry.TAG.SYMTAB")

#### [` get_build `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.get_build>)

get\_build(*self*) → list[int]

Return the build result as a `list` of bytes

#### [` write `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Builder.write>)

write(*self*, *output: str*) → None

Write the build result into the `output` file

## [Enums](<https://lief.re/doc/latest/formats/elf/python.html#enums>)

### [Architectures](<https://lief.re/doc/latest/formats/elf/python.html#architectures>)

#### [` lief.ELF.ARCH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH>)

class lief.ELF.ARCH(*\*values*)

Bases: `Enum`

##### [` AARCH64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.AARCH64>)

AARCH64 = 183

##### [` ALPHA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ALPHA>)

ALPHA = 41

##### [` ALPHA_ALT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ALPHA_ALT>)

ALPHA\_ALT = 36902

##### [` ALTERA_NIOS2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ALTERA_NIOS2>)

ALTERA\_NIOS2 = 113

##### [` AMDGPU `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.AMDGPU>)

AMDGPU = 224

##### [` ARC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ARC>)

ARC = 45

##### [` ARCA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ARCA>)

ARCA = 109

##### [` ARC_COMPACT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ARC_COMPACT>)

ARC\_COMPACT = 93

##### [` ARC_COMPACT2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ARC_COMPACT2>)

ARC\_COMPACT2 = 195

##### [` ARM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ARM>)

ARM = 40

##### [` AVR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.AVR>)

AVR = 83

##### [` AVR32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.AVR32>)

AVR32 = 185

##### [` BA1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.BA1>)

BA1 = 201

##### [` BA2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.BA2>)

BA2 = 202

##### [` BLACKFIN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.BLACKFIN>)

BLACKFIN = 106

##### [` BPF `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.BPF>)

BPF = 247

##### [` C166 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.C166>)

C166 = 116

##### [` CDP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.CDP>)

CDP = 215

##### [` CE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.CE>)

CE = 119

##### [` CLOUDSHIELD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.CLOUDSHIELD>)

CLOUDSHIELD = 192

##### [` COGE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.COGE>)

COGE = 216

##### [` COLDFIRE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.COLDFIRE>)

COLDFIRE = 52

##### [` COOL `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.COOL>)

COOL = 217

##### [` COREA_1ST `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.COREA_1ST>)

COREA\_1ST = 193

##### [` COREA_2ND `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.COREA_2ND>)

COREA\_2ND = 194

##### [` CR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.CR>)

CR = 103

##### [` CR16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.CR16>)

CR16 = 177

##### [` CRAYNV2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.CRAYNV2>)

CRAYNV2 = 172

##### [` CRIS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.CRIS>)

CRIS = 76

##### [` CRX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.CRX>)

CRX = 114

##### [` CSKY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.CSKY>)

CSKY = 252

##### [` CSR_KALIMBA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.CSR_KALIMBA>)

CSR\_KALIMBA = 219

##### [` CUDA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.CUDA>)

CUDA = 190

##### [` CYPRESS_M8C `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.CYPRESS_M8C>)

CYPRESS\_M8C = 161

##### [` D10V `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.D10V>)

D10V = 85

##### [` D30V `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.D30V>)

D30V = 86

##### [` DSP24 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.DSP24>)

DSP24 = 136

##### [` DSPIC30F `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.DSPIC30F>)

DSPIC30F = 118

##### [` DXP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.DXP>)

DXP = 112

##### [` ECOG16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ECOG16>)

ECOG16 = 176

##### [` ECOG1X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ECOG1X>)

ECOG1X = 168

##### [` ECOG2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ECOG2>)

ECOG2 = 134

##### [` ETPU `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ETPU>)

ETPU = 178

##### [` EXCESS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.EXCESS>)

EXCESS = 111

##### [` F2MC16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.F2MC16>)

F2MC16 = 104

##### [` FIREPATH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.FIREPATH>)

FIREPATH = 78

##### [` FR20 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.FR20>)

FR20 = 37

##### [` FR30 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.FR30>)

FR30 = 84

##### [` FX66 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.FX66>)

FX66 = 66

##### [` H8S `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.H8S>)

H8S = 48

##### [` H8_300 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.H8_300>)

H8\_300 = 46

##### [` H8_300H `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.H8_300H>)

H8\_300H = 47

##### [` H8_500 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.H8_500>)

H8\_500 = 49

##### [` HEXAGON `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.HEXAGON>)

HEXAGON = 164

##### [` HUANY `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.HUANY>)

HUANY = 81

##### [` I386 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.I386>)

I386 = 3

##### [` I60 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.I60>)

I60 = 19

##### [` I860 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.I860>)

I860 = 7

##### [` IAMCU `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.IAMCU>)

IAMCU = 6

##### [` IA_64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.IA_64>)

IA\_64 = 50

##### [` INTEL205 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.INTEL205>)

INTEL205 = 205

##### [` INTEL206 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.INTEL206>)

INTEL206 = 206

##### [` INTEL207 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.INTEL207>)

INTEL207 = 207

##### [` INTEL208 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.INTEL208>)

INTEL208 = 208

##### [` INTEL209 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.INTEL209>)

INTEL209 = 209

##### [` IP2K `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.IP2K>)

IP2K = 101

##### [` JAVELIN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.JAVELIN>)

JAVELIN = 77

##### [` K10M `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.K10M>)

K10M = 181

##### [` KM32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.KM32>)

KM32 = 210

##### [` KMX16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.KMX16>)

KMX16 = 212

##### [` KMX32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.KMX32>)

KMX32 = 211

##### [` KMX8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.KMX8>)

KMX8 = 213

##### [` KVARC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.KVARC>)

KVARC = 214

##### [` L10M `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.L10M>)

L10M = 180

##### [` LATTICEMICO32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.LATTICEMICO32>)

LATTICEMICO32 = 138

##### [` LOONGARCH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.LOONGARCH>)

LOONGARCH = 258

##### [` M16C `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.M16C>)

M16C = 117

##### [` M32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.M32>)

M32 = 1

##### [` M32C `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.M32C>)

M32C = 120

##### [` M32R `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.M32R>)

M32R = 88

##### [` M56800EX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.M56800EX>)

M56800EX = 200

##### [` M68HC05 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.M68HC05>)

M68HC05 = 72

##### [` M68HC08 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.M68HC08>)

M68HC08 = 71

##### [` M68HC11 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.M68HC11>)

M68HC11 = 70

##### [` M68HC12 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.M68HC12>)

M68HC12 = 53

##### [` M68HC16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.M68HC16>)

M68HC16 = 69

##### [` M68K `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.M68K>)

M68K = 4

##### [` M78KOR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.M78KOR>)

M78KOR = 199

##### [` M8051 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.M8051>)

M8051 = 165

##### [` M88K `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.M88K>)

M88K = 5

##### [` MANIK `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.MANIK>)

MANIK = 171

##### [` MAX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.MAX>)

MAX = 102

##### [` MAXQ30 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.MAXQ30>)

MAXQ30 = 169

##### [` MCHP_PIC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.MCHP_PIC>)

MCHP\_PIC = 204

##### [` MCST_ELBRUS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.MCST_ELBRUS>)

MCST\_ELBRUS = 175

##### [` ME16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ME16>)

ME16 = 59

##### [` METAG `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.METAG>)

METAG = 174

##### [` MIPS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.MIPS>)

MIPS = 8

##### [` MIPS_RS3_LE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.MIPS_RS3_LE>)

MIPS\_RS3\_LE = 10

##### [` MIPS_X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.MIPS_X>)

MIPS\_X = 51

##### [` MMA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.MMA>)

MMA = 54

##### [` MMDSP_PLUS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.MMDSP_PLUS>)

MMDSP\_PLUS = 160

##### [` MMIX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.MMIX>)

MMIX = 80

##### [` MN10200 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.MN10200>)

MN10200 = 90

##### [` MN10300 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.MN10300>)

MN10300 = 89

##### [` MSP430 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.MSP430>)

MSP430 = 105

##### [` NCPU `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.NCPU>)

NCPU = 56

##### [` NDR1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.NDR1>)

NDR1 = 57

##### [` NDS32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.NDS32>)

NDS32 = 167

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.NONE>)

NONE = 0

##### [` NORC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.NORC>)

NORC = 218

##### [` NS32K `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.NS32K>)

NS32K = 97

##### [` OPEN8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.OPEN8>)

OPEN8 = 196

##### [` OPENRISC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.OPENRISC>)

OPENRISC = 92

##### [` PARISC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.PARISC>)

PARISC = 15

##### [` PCP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.PCP>)

PCP = 55

##### [` PDP10 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.PDP10>)

PDP10 = 64

##### [` PDP11 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.PDP11>)

PDP11 = 65

##### [` PDSP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.PDSP>)

PDSP = 63

##### [` PJ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.PJ>)

PJ = 91

##### [` PPC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.PPC>)

PPC = 20

##### [` PPC64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.PPC64>)

PPC64 = 21

##### [` PRISM `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.PRISM>)

PRISM = 82

##### [` R32C `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.R32C>)

R32C = 162

##### [` RCE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.RCE>)

RCE = 39

##### [` RH32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.RH32>)

RH32 = 38

##### [` RISCV `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.RISCV>)

RISCV = 243

##### [` RL78 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.RL78>)

RL78 = 197

##### [` RS08 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.RS08>)

RS08 = 132

##### [` RX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.RX>)

RX = 173

##### [` S370 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.S370>)

S370 = 9

##### [` S390 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.S390>)

S390 = 22

##### [` SCORE7 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.SCORE7>)

SCORE7 = 135

##### [` SEP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.SEP>)

SEP = 108

##### [` SE_C17 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.SE_C17>)

SE\_C17 = 139

##### [` SE_C33 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.SE_C33>)

SE\_C33 = 107

##### [` SH `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.SH>)

SH = 42

##### [` SHARC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.SHARC>)

SHARC = 133

##### [` SLE9X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.SLE9X>)

SLE9X = 179

##### [` SNP1K `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.SNP1K>)

SNP1K = 99

##### [` SPARC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.SPARC>)

SPARC = 2

##### [` SPARC32PLUS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.SPARC32PLUS>)

SPARC32PLUS = 18

##### [` SPARCV9 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.SPARCV9>)

SPARCV9 = 43

##### [` SPU `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.SPU>)

SPU = 23

##### [` ST100 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ST100>)

ST100 = 60

##### [` ST19 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ST19>)

ST19 = 74

##### [` ST200 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ST200>)

ST200 = 100

##### [` ST7 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ST7>)

ST7 = 68

##### [` ST9PLUS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ST9PLUS>)

ST9PLUS = 67

##### [` STARCORE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.STARCORE>)

STARCORE = 58

##### [` STM8 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.STM8>)

STM8 = 186

##### [` STXP7X `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.STXP7X>)

STXP7X = 166

##### [` SVX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.SVX>)

SVX = 73

##### [` TILE64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.TILE64>)

TILE64 = 187

##### [` TILEGX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.TILEGX>)

TILEGX = 191

##### [` TILEPRO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.TILEPRO>)

TILEPRO = 188

##### [` TINYJ `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.TINYJ>)

TINYJ = 61

##### [` TI_C2000 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.TI_C2000>)

TI\_C2000 = 141

##### [` TI_C5500 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.TI_C5500>)

TI\_C5500 = 142

##### [` TI_C6000 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.TI_C6000>)

TI\_C6000 = 140

##### [` TMM_GPP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.TMM_GPP>)

TMM\_GPP = 96

##### [` TPC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.TPC>)

TPC = 98

##### [` TRICORE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.TRICORE>)

TRICORE = 44

##### [` TRIMEDIA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.TRIMEDIA>)

TRIMEDIA = 163

##### [` TSK3000 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.TSK3000>)

TSK3000 = 131

##### [` UNICORE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.UNICORE>)

UNICORE = 110

##### [` V800 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.V800>)

V800 = 36

##### [` V850 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.V850>)

V850 = 87

##### [` VAX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.VAX>)

VAX = 75

##### [` VIDEOCORE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.VIDEOCORE>)

VIDEOCORE = 95

##### [` VIDEOCORE3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.VIDEOCORE3>)

VIDEOCORE3 = 137

##### [` VIDEOCORE5 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.VIDEOCORE5>)

VIDEOCORE5 = 198

##### [` VPP500 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.VPP500>)

VPP500 = 17

##### [` X86_64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.X86_64>)

X86\_64 = 62

##### [` XCORE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.XCORE>)

XCORE = 203

##### [` XGATE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.XGATE>)

XGATE = 115

##### [` XIMO16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.XIMO16>)

XIMO16 = 170

##### [` XTENSA `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.XTENSA>)

XTENSA = 94

##### [` ZSP `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.ZSP>)

ZSP = 79

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH.from_value>)

from\_value(*arg: int*) → [lief.ELF.ARCH](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ARCH> "lief.ELF.ARCH") = &lt;nanobind.nb\_func object&gt;

### [Processor Flags](<https://lief.re/doc/latest/formats/elf/python.html#processor-flags>)

#### [` lief.ELF.PROCESSOR_FLAGS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS>)

class lief.ELF.PROCESSOR\_FLAGS(*\*values*)

Bases: `Enum`

##### [` ARM_EABI_UNKNOWN `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.ARM_EABI_UNKNOWN>)

ARM\_EABI\_UNKNOWN = 8796093022208

##### [` ARM_EABI_VER1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.ARM_EABI_VER1>)

ARM\_EABI\_VER1 = 8796109799424

##### [` ARM_EABI_VER2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.ARM_EABI_VER2>)

ARM\_EABI\_VER2 = 8796126576640

##### [` ARM_EABI_VER3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.ARM_EABI_VER3>)

ARM\_EABI\_VER3 = 8796143353856

##### [` ARM_EABI_VER4 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.ARM_EABI_VER4>)

ARM\_EABI\_VER4 = 8796160131072

##### [` ARM_EABI_VER5 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.ARM_EABI_VER5>)

ARM\_EABI\_VER5 = 8796176908288

##### [` ARM_SOFT_FLOAT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.ARM_SOFT_FLOAT>)

ARM\_SOFT\_FLOAT = 8796093022720

##### [` ARM_VFP_FLOAT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.ARM_VFP_FLOAT>)

ARM\_VFP\_FLOAT = 8796093023232

##### [` HEXAGON_ISA_V2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.HEXAGON_ISA_V2>)

HEXAGON\_ISA\_V2 = 17592186044432

##### [` HEXAGON_ISA_V3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.HEXAGON_ISA_V3>)

HEXAGON\_ISA\_V3 = 17592186044448

##### [` HEXAGON_ISA_V4 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.HEXAGON_ISA_V4>)

HEXAGON\_ISA\_V4 = 17592186044464

##### [` HEXAGON_ISA_V5 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.HEXAGON_ISA_V5>)

HEXAGON\_ISA\_V5 = 17592186044480

##### [` HEXAGON_MACH_V2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.HEXAGON_MACH_V2>)

HEXAGON\_MACH\_V2 = 17592186044417

##### [` HEXAGON_MACH_V3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.HEXAGON_MACH_V3>)

HEXAGON\_MACH\_V3 = 17592186044418

##### [` HEXAGON_MACH_V4 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.HEXAGON_MACH_V4>)

HEXAGON\_MACH\_V4 = 17592186044419

##### [` HEXAGON_MACH_V5 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.HEXAGON_MACH_V5>)

HEXAGON\_MACH\_V5 = 17592186044420

##### [` LOONGARCH_ABI_DOUBLE_FLOAT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.LOONGARCH_ABI_DOUBLE_FLOAT>)

LOONGARCH\_ABI\_DOUBLE\_FLOAT = 26388279066627

##### [` LOONGARCH_ABI_SINGLE_FLOAT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.LOONGARCH_ABI_SINGLE_FLOAT>)

LOONGARCH\_ABI\_SINGLE\_FLOAT = 26388279066626

##### [` LOONGARCH_ABI_SOFT_FLOAT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.LOONGARCH_ABI_SOFT_FLOAT>)

LOONGARCH\_ABI\_SOFT\_FLOAT = 26388279066625

##### [` MIPS_32BITMODE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_32BITMODE>)

MIPS\_32BITMODE = 35184372089088

##### [` MIPS_ABI2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ABI2>)

MIPS\_ABI2 = 35184372088864

##### [` MIPS_ABI_EABI32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ABI_EABI32>)

MIPS\_ABI\_EABI32 = 35184372101120

##### [` MIPS_ABI_EABI64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ABI_EABI64>)

MIPS\_ABI\_EABI64 = 35184372105216

##### [` MIPS_ABI_O32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ABI_O32>)

MIPS\_ABI\_O32 = 35184372092928

##### [` MIPS_ABI_O64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ABI_O64>)

MIPS\_ABI\_O64 = 35184372097024

##### [` MIPS_ARCH_1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ARCH_1>)

MIPS\_ARCH\_1 = 35184372088832

##### [` MIPS_ARCH_2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ARCH_2>)

MIPS\_ARCH\_2 = 35184640524288

##### [` MIPS_ARCH_3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ARCH_3>)

MIPS\_ARCH\_3 = 35184908959744

##### [` MIPS_ARCH_32 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ARCH_32>)

MIPS\_ARCH\_32 = 35185714266112

##### [` MIPS_ARCH_32R2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ARCH_32R2>)

MIPS\_ARCH\_32R2 = 35186251137024

##### [` MIPS_ARCH_32R6 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ARCH_32R6>)

MIPS\_ARCH\_32R6 = 35186788007936

##### [` MIPS_ARCH_4 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ARCH_4>)

MIPS\_ARCH\_4 = 35185177395200

##### [` MIPS_ARCH_5 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ARCH_5>)

MIPS\_ARCH\_5 = 35185445830656

##### [` MIPS_ARCH_64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ARCH_64>)

MIPS\_ARCH\_64 = 35185982701568

##### [` MIPS_ARCH_64R2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ARCH_64R2>)

MIPS\_ARCH\_64R2 = 35186519572480

##### [` MIPS_ARCH_64R6 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ARCH_64R6>)

MIPS\_ARCH\_64R6 = 35187056443392

##### [` MIPS_ARCH_ASE_M16 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ARCH_ASE_M16>)

MIPS\_ARCH\_ASE\_M16 = 35184439197696

##### [` MIPS_ARCH_ASE_MDMX `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_ARCH_ASE_MDMX>)

MIPS\_ARCH\_ASE\_MDMX = 35184506306560

##### [` MIPS_CPIC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_CPIC>)

MIPS\_CPIC = 35184372088836

##### [` MIPS_FP64 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_FP64>)

MIPS\_FP64 = 35184372089344

##### [` MIPS_MACH_3900 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_3900>)

MIPS\_MACH\_3900 = 35184380542976

##### [` MIPS_MACH_4010 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_4010>)

MIPS\_MACH\_4010 = 35184380608512

##### [` MIPS_MACH_4100 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_4100>)

MIPS\_MACH\_4100 = 35184380674048

##### [` MIPS_MACH_4111 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_4111>)

MIPS\_MACH\_4111 = 35184381001728

##### [` MIPS_MACH_4120 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_4120>)

MIPS\_MACH\_4120 = 35184380936192

##### [` MIPS_MACH_4650 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_4650>)

MIPS\_MACH\_4650 = 35184380805120

##### [` MIPS_MACH_5400 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_5400>)

MIPS\_MACH\_5400 = 35184381591552

##### [` MIPS_MACH_5500 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_5500>)

MIPS\_MACH\_5500 = 35184382050304

##### [` MIPS_MACH_5900 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_5900>)

MIPS\_MACH\_5900 = 35184381657088

##### [` MIPS_MACH_9000 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_9000>)

MIPS\_MACH\_9000 = 35184382115840

##### [` MIPS_MACH_LS2E `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_LS2E>)

MIPS\_MACH\_LS2E = 35184382574592

##### [` MIPS_MACH_LS2F `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_LS2F>)

MIPS\_MACH\_LS2F = 35184382640128

##### [` MIPS_MACH_LS3A `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_LS3A>)

MIPS\_MACH\_LS3A = 35184382705664

##### [` MIPS_MACH_OCTEON `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_OCTEON>)

MIPS\_MACH\_OCTEON = 35184381198336

##### [` MIPS_MACH_OCTEON2 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_OCTEON2>)

MIPS\_MACH\_OCTEON2 = 35184381329408

##### [` MIPS_MACH_OCTEON3 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_OCTEON3>)

MIPS\_MACH\_OCTEON3 = 35184381394944

##### [` MIPS_MACH_SB1 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_SB1>)

MIPS\_MACH\_SB1 = 35184381132800

##### [` MIPS_MACH_XLR `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MACH_XLR>)

MIPS\_MACH\_XLR = 35184381263872

##### [` MIPS_MICROMIPS `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_MICROMIPS>)

MIPS\_MICROMIPS = 35184405643264

##### [` MIPS_NAN2008 `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_NAN2008>)

MIPS\_NAN2008 = 35184372089856

##### [` MIPS_NOREORDER `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_NOREORDER>)

MIPS\_NOREORDER = 35184372088833

##### [` MIPS_PIC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.MIPS_PIC>)

MIPS\_PIC = 35184372088834

##### [` RISCV_FLOAT_ABI_DOUBLE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.RISCV_FLOAT_ABI_DOUBLE>)

RISCV\_FLOAT\_ABI\_DOUBLE = 43980465111044

##### [` RISCV_FLOAT_ABI_QUAD `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.RISCV_FLOAT_ABI_QUAD>)

RISCV\_FLOAT\_ABI\_QUAD = 43980465111046

##### [` RISCV_FLOAT_ABI_RVE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.RISCV_FLOAT_ABI_RVE>)

RISCV\_FLOAT\_ABI\_RVE = 43980465111048

##### [` RISCV_FLOAT_ABI_SINGLE `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.RISCV_FLOAT_ABI_SINGLE>)

RISCV\_FLOAT\_ABI\_SINGLE = 43980465111042

##### [` RISCV_FLOAT_ABI_SOFT `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.RISCV_FLOAT_ABI_SOFT>)

RISCV\_FLOAT\_ABI\_SOFT = 43980465111040

##### [` RISCV_FLOAT_ABI_TSO `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.RISCV_FLOAT_ABI_TSO>)

RISCV\_FLOAT\_ABI\_TSO = 43980465111056

##### [` RISCV_RVC `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.RISCV_RVC>)

RISCV\_RVC = 43980465111041

##### [` from_value `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS.from_value>)

from\_value(*arg: int*) → [lief.ELF.PROCESSOR\_FLAGS](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.PROCESSOR_FLAGS> "lief.ELF.PROCESSOR_FLAGS") = &lt;nanobind.nb\_func object&gt;

## [Utilities](<https://lief.re/doc/latest/formats/elf/python.html#utilities>)

### [` lief.ELF.check_layout `](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.check_layout>)

lief.ELF.check\_layout(*binary: [lief.ELF.Binary](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief.ELF.Binary")*) → tuple[bool, str]

Check that the layout of the given binary is correct.

### [` lief.is_elflief.is_elf `](<https://lief.re/doc/latest/formats/elf/python.html#lief.is_elf>)

lief.is\_elf(*\*args*) → bool

**lief.is\_elf(*raw: collections.abc.Sequence[int]*) → bool**

Overloaded function.

1. `is_elf(filename: Union[str | os.PathLike]) -> bool`

Check if the given file is an `ELF`

2. `is_elf(raw: collections.abc.Sequence[int]) -> bool`

Check if the given raw data is an `ELF`
