---
documentID: "dd20c0d10e2c8801b8f9496039ba559719eafdefc0e4e58238824986442b7370"
docname: "formats/coff/python"
title: "COFF Python API - LIEF Documentation"
description: "COFF Python API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/formats/coff/python.html"
markdownURL: "https://lief.re/doc/latest/formats/coff/python.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "1d756c263eb24b1189c344cb8c44c7cdce05aabe9e71c1bb544a30b725e595fe"
---

# [Python](<https://lief.re/doc/latest/formats/coff/python.html#python>)

## [Parser](<https://lief.re/doc/latest/formats/coff/python.html#parser>)

### [` lief.COFF.parse `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.parse>)

lief.COFF.parse(*obj: str | io.IOBase | os.PathLike | bytes | list[int]*, *config: [lief.COFF.ParserConfig](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.ParserConfig> "lief.COFF.ParserConfig")*) → [lief.COFF.Binary](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary> "lief.COFF.Binary") | None

Parse the COFF binary specified in the first parameter and return a [`lief.COFF.Binary`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary> "lief.COFF.Binary") object

The second argument is an optional configuration that can be used to define which part(s) of the COFF should be parsed or skipped.

### [` lief.COFF.ParserConfig `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.ParserConfig>)

class lief.COFF.ParserConfig(*self*)

Bases: `object`

#### [` all `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.ParserConfig.all>)

all = &lt;lief.\_lief.COFF.ParserConfig object&gt;

#### [` default_conf `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.ParserConfig.default_conf>)

default\_conf = &lt;lief.\_lief.COFF.ParserConfig object&gt;

## [Binary](<https://lief.re/doc/latest/formats/coff/python.html#binary>)

### [` lief.COFF.Binary `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary>)

class lief.COFF.Binary

Bases: `object`

Class that represents a COFF Binary

#### [` disassembledisassemble `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.disassemble>)

disassemble(*self*, *function: [lief.\_lief.COFF.Symbol](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol> "lief._lief.COFF.Symbol")*) → Iterator[[lief.\_lief.assembly.Instruction](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief._lief.assembly.Instruction") | None]

**disassemble(*self*, *function\_name: str*) → Iterator[[lief.\_lief.assembly.Instruction](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief._lief.assembly.Instruction") | None]**

Overloaded function.

1. `disassemble(self, function: lief._lief.COFF.Symbol) -> Iterator[Optional[lief._lief.assembly.Instruction]]`

   > Disassemble code for the given symbol
   >
   > ```python
   > func = binary.find_demangled_function("int __cdecl my_function(int, int)");
   > insts = binary.disassemble("main");
   > for inst in insts:
   >     print(inst)
   > ```
   >
   > > **See also**
   > > 
   > > [`lief.assembly.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief.assembly.Instruction")
2. `disassemble(self, function_name: str) -> Iterator[Optional[lief._lief.assembly.Instruction]]`

   > Disassemble code for the given symbol name
   >
   > ```python
   > insts = binary.disassemble("main");
   > for inst in insts:
   >     print(inst)
   > ```
   >
   > > **See also**
   > > 
   > > [`lief.assembly.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief.assembly.Instruction")

#### [` disassemble_from_bytes `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.disassemble_from_bytes>)

disassemble\_from\_bytes(*self*, *buffer: bytes*, *address: int = 0*) → Iterator[[lief.\_lief.assembly.Instruction](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief._lief.assembly.Instruction") | None]

Disassemble code from the provided bytes

```python
raw = bytes(binary.get_section(".text").content)
insts = binary.disassemble_from_bytes(raw);
for inst in insts:
    print(inst)
```

> **See also**
> 
> [`lief.assembly.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief.assembly.Instruction")

#### [` find_demangled_function `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.find_demangled_function>)

find\_demangled\_function(*self*, *name: str*) → [lief.\_lief.COFF.Symbol](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol> "lief._lief.COFF.Symbol") | None

Try to find the function (symbol) with the given **demangled** name

#### [` find_function `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.find_function>)

find\_function(*self*, *name: str*) → [lief.\_lief.COFF.Symbol](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol> "lief._lief.COFF.Symbol") | None

Try to find the function (symbol) with the given name

#### [` find_string `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.find_string>)

find\_string(*self*, *offset: int*) → [lief.\_lief.COFF.String](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.String> "lief._lief.COFF.String") | None

Try to find the COFF string at the given offset in the COFF string table.

> **Warning**
> 
> This offset must include the first 4 bytes holding the size of the table. Hence, the first string starts a the offset 4.

#### [` functions `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.functions>)

property functions → lief.COFF.Binary.it\_functions

Iterator over the functions implemented in this COFF

#### [` get_section `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.get_section>)

get\_section(*self*, *name: str*) → [lief.\_lief.COFF.Section](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section> "lief._lief.COFF.Section") | None

Return the [`Section`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section> "lief.COFF.Section") matching the given name.

Section names that do not fit in the 8 bytes allocated by the COFF format are stored in the COFF string table while the section itself only holds a `/<offset>` placeholder. This function transparently resolves both forms, so a long name can be looked up with its **regular** value:

```python
sec = binary.get_section(".debug_rnglists")
sec.name               # '/18'
sec.coff_string.string # '.debug_rnglists'
```

#### [` header `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.header>)

property header → [lief.COFF.Header](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header> "lief.COFF.Header")

The COFF header

#### [` relocations `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.relocations>)

property relocations → lief.COFF.Binary.it\_relocations

Iterator over **all** the relocations used by this COFF binary

#### [` sections `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.sections>)

property sections → lief.COFF.Binary.it\_section

Iterator over the different sections located in this COFF binary

#### [` string_table `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.string_table>)

property string\_table → lief.PE.Binary.it\_strings\_table

Iterator over the COFF’s strings

#### [` symbols `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary.symbols>)

property symbols → lief.PE.Binary.it\_symbols

Iterator over the COFF’s symbols

---

## [Header](<https://lief.re/doc/latest/formats/coff/python.html#header>)

![Inheritance diagram of lief._lief.COFF.BigObjHeader, lief._lief.COFF.RegularHeader, lief._lief.COFF.Header](https://lief.re/doc/latest/_images/inheritance-cf7a9ca9dd1f8d89b654cbf9031e52d3d1e64525.png)

### [` lief.COFF.Header `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header>)

class lief.COFF.Header

Bases: `object`

Class that represents the COFF header. It is subclassed by [`RegularHeader`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.RegularHeader> "lief.COFF.RegularHeader") and [`BigObjHeader`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.BigObjHeader> "lief.COFF.BigObjHeader") for normal vs `/bigobj` files

#### [` KIND `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header.KIND>)

class KIND(*\*values*)

Bases: `Enum`

##### [` BIGOBJ `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header.KIND.BIGOBJ>)

BIGOBJ = 2

##### [` REGULAR `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header.KIND.REGULAR>)

REGULAR = 1

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header.KIND.UNKNOWN>)

UNKNOWN = 0

#### [` copy `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header.copy>)

copy(*self*) → [lief.\_lief.COFF.Header](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header> "lief._lief.COFF.Header") | None

Duplicate the current instance of this object

#### [` kind `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header.kind>)

property kind → [lief.COFF.Header.KIND](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header.KIND> "lief.COFF.Header.KIND")

The type of this header: whether it is regular or using the `/bigobj` format

#### [` machine `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header.machine>)

property machine → [lief.PE.Header.MACHINE\_TYPES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES> "lief.PE.Header.MACHINE_TYPES")

The machine type targeted by this COFF

#### [` nb_sections `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header.nb_sections>)

property nb\_sections → int

The number of sections

#### [` nb_symbols `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header.nb_symbols>)

property nb\_symbols → int

Number of symbols (including auxiliary symbols)

#### [` pointerto_symbol_table `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header.pointerto_symbol_table>)

property pointerto\_symbol\_table → int

Offset of the symbols table

#### [` timedatestamp `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header.timedatestamp>)

property timedatestamp → int

Timestamp when the COFF has been generated

---

## [RegularHeader](<https://lief.re/doc/latest/formats/coff/python.html#regularheader>)

![Inheritance diagram of lief._lief.COFF.RegularHeader](https://lief.re/doc/latest/_images/inheritance-efbbeab203b9492525f3a5698a1ab46c30433e4e.png)

### [` lief.COFF.RegularHeader `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.RegularHeader>)

class lief.COFF.RegularHeader

Bases: [`Header`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header> "lief._lief.COFF.Header")

This class represents the COFF header for non-bigobj

#### [` characteristics `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.RegularHeader.characteristics>)

property characteristics → int

Characteristics

#### [` sizeof_optionalheader `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.RegularHeader.sizeof_optionalheader>)

property sizeof\_optionalheader → int

The size of the optional header that follows this header (should be 0)

---

## [BigObjHeader](<https://lief.re/doc/latest/formats/coff/python.html#bigobjheader>)

![Inheritance diagram of lief._lief.COFF.BigObjHeader](https://lief.re/doc/latest/_images/inheritance-9504af83e30cea430ca4ca7378a35e6ad7910fc0.png)

### [` lief.COFF.BigObjHeader `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.BigObjHeader>)

class lief.COFF.BigObjHeader

Bases: [`Header`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Header> "lief._lief.COFF.Header")

This class represents the header for a COFF object compiled with `/bigobj` support (i.e. the number of sections can exceed 65536).

The raw definition of the bigobj header is located in `winnt.h` and named `ANON_OBJECT_HEADER_BIGOBJ`

#### [` flags `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.BigObjHeader.flags>)

property flags → int

1 means that it contains metadata

#### [` metadata_offset `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.BigObjHeader.metadata_offset>)

property metadata\_offset → int

Offset of CLR metadata

#### [` metadata_size `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.BigObjHeader.metadata_size>)

property metadata\_size → int

Size of CLR metadata

#### [` sizeof_data `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.BigObjHeader.sizeof_data>)

property sizeof\_data → int

Size of data that follows the header

#### [` uuid `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.BigObjHeader.uuid>)

property uuid → memoryview

Originally named `ClassID`, this uuid should match: `{D1BAA1C7-BAEE-4ba9-AF20-FAF66AA4DCB8}`.

#### [` version `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.BigObjHeader.version>)

property version → int

The version of this header which must be &gt;= 2

---

## [Section](<https://lief.re/doc/latest/formats/coff/python.html#section>)

### [` lief.COFF.Section `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section>)

class lief.COFF.Section

Bases: [`Section`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section> "lief._lief.Section")

This class represents a COFF section

#### [` ComdatInfo `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.ComdatInfo>)

class ComdatInfo

Bases: `object`

This class wraps comdat information which is composed of the symbol associated with the comdat section and its selection flag

##### [` kind `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.ComdatInfo.kind>)

property kind → [lief.COFF.AuxiliarySectionDefinition.COMDAT\_SELECTION](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.COMDAT_SELECTION> "lief.COFF.AuxiliarySectionDefinition.COMDAT_SELECTION")

##### [` symbol `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.ComdatInfo.symbol>)

property symbol → [lief.COFF.Symbol](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol> "lief.COFF.Symbol")

#### [` characteristics `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.characteristics>)

property characteristics → int

The characteristics that describe the purpose of the section

#### [` characteristics_lists `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.characteristics_lists>)

property characteristics\_lists → list[[lief.PE.Section.CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS> "lief.PE.Section.CHARACTERISTICS")]

characteristics as a `list`

#### [` coff_string `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.coff_string>)

property coff\_string → [lief.COFF.String](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.String> "lief.COFF.String") | None

Return the COFF string associated with the section’s name (or None)

This coff string is usually present for long section names whose length does not fit in the 8 bytes allocated by the COFF format.

#### [` comdat_info `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.comdat_info>)

property comdat\_info → [lief.COFF.Section.ComdatInfo](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.ComdatInfo> "lief.COFF.Section.ComdatInfo") | None

Return comdat information (only if the section has the [`lief.PE.Section.CHARACTERISTICS.LNK_COMDAT`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.LNK_COMDAT> "lief.PE.Section.CHARACTERISTICS.LNK_COMDAT") characteristic)

#### [` has_characteristic `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.has_characteristic>)

has\_characteristic(*self*, *characteristic: [lief.\_lief.PE.Section.CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS> "lief._lief.PE.Section.CHARACTERISTICS")*) → bool

`True` if the section has the given characteristic

#### [` has_extended_relocations `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.has_extended_relocations>)

property has\_extended\_relocations → bool

Whether there is a large number of relocations whose number need to be stored in the virtual address attribute

#### [` is_discardable `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.is_discardable>)

property is\_discardable → bool

True if the section can be discarded as needed.

This is typically the case for debug-related sections.

#### [` numberof_line_numbers `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.numberof_line_numbers>)

property numberof\_line\_numbers → int

The number of line-number entries for the section. This value should be zero for an image because COFF debugging information is deprecated.

See: [`pointerto_line_numbers`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.pointerto_line_numbers> "lief.COFF.Section.pointerto_line_numbers")

#### [` numberof_relocations `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.numberof_relocations>)

property numberof\_relocations → int

Number of relocations.

> **Warning**
> 
> If the number of relocations is greater than 0xFFFF (maximum value for 16-bits integer), then the number of relocations is stored in the virtual address attribute.

#### [` pointerto_line_numbers `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.pointerto_line_numbers>)

property pointerto\_line\_numbers → int

The file pointer to the beginning of line-number entries for the section. This is set to zero if there are no COFF line numbers. This value should be zero for an image because COFF debugging information is deprecated and modern debug information relies on the PDB files.

#### [` pointerto_raw_data `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.pointerto_raw_data>)

property pointerto\_raw\_data → int

Offset to the section’s content

#### [` pointerto_relocation `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.pointerto_relocation>)

property pointerto\_relocation → int

Offset to the relocation table

#### [` relocations `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.relocations>)

property relocations → lief.COFF.Section.it\_relocations

Iterator over the relocations performed in this section

#### [` sizeof_raw_data `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.sizeof_raw_data>)

property sizeof\_raw\_data → int

Return the size of the data in the section.

#### [` symbols `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.symbols>)

property symbols → lief.COFF.Section.it\_symbols

Iterator over the symbols associated with this section

#### [` virtual_size `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.virtual_size>)

property virtual\_size → int

Virtual size of the section (should be 0)

---

## [Relocation](<https://lief.re/doc/latest/formats/coff/python.html#relocation>)

### [` lief.COFF.Relocation `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation>)

class lief.COFF.Relocation

Bases: [`Relocation`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Relocation> "lief._lief.Relocation")

#### [` TYPE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

##### [` AMD64_ABSOLUTE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_ABSOLUTE>)

AMD64\_ABSOLUTE = 262144

##### [` AMD64_ADDR32 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_ADDR32>)

AMD64\_ADDR32 = 262146

##### [` AMD64_ADDR32NB `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_ADDR32NB>)

AMD64\_ADDR32NB = 262147

##### [` AMD64_ADDR64 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_ADDR64>)

AMD64\_ADDR64 = 262145

##### [` AMD64_PAIR `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_PAIR>)

AMD64\_PAIR = 262159

##### [` AMD64_REL32 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_REL32>)

AMD64\_REL32 = 262148

##### [` AMD64_REL32_1 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_REL32_1>)

AMD64\_REL32\_1 = 262149

##### [` AMD64_REL32_2 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_REL32_2>)

AMD64\_REL32\_2 = 262150

##### [` AMD64_REL32_3 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_REL32_3>)

AMD64\_REL32\_3 = 262151

##### [` AMD64_REL32_4 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_REL32_4>)

AMD64\_REL32\_4 = 262152

##### [` AMD64_REL32_5 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_REL32_5>)

AMD64\_REL32\_5 = 262153

##### [` AMD64_SECREL `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_SECREL>)

AMD64\_SECREL = 262155

##### [` AMD64_SECREL7 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_SECREL7>)

AMD64\_SECREL7 = 262156

##### [` AMD64_SECTION `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_SECTION>)

AMD64\_SECTION = 262154

##### [` AMD64_SREL32 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_SREL32>)

AMD64\_SREL32 = 262158

##### [` AMD64_SSPAN32 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_SSPAN32>)

AMD64\_SSPAN32 = 262160

##### [` AMD64_TOKEN `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.AMD64_TOKEN>)

AMD64\_TOKEN = 262157

##### [` ARM64_ABSOLUTE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_ABSOLUTE>)

ARM64\_ABSOLUTE = 1048576

##### [` ARM64_ADDR32 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_ADDR32>)

ARM64\_ADDR32 = 1048577

##### [` ARM64_ADDR32NB `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_ADDR32NB>)

ARM64\_ADDR32NB = 1048578

##### [` ARM64_ADDR64 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_ADDR64>)

ARM64\_ADDR64 = 1048590

##### [` ARM64_BRANCH14 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_BRANCH14>)

ARM64\_BRANCH14 = 1048592

##### [` ARM64_BRANCH19 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_BRANCH19>)

ARM64\_BRANCH19 = 1048591

##### [` ARM64_BRANCH26 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_BRANCH26>)

ARM64\_BRANCH26 = 1048579

##### [` ARM64_PAGEBASE_REL21 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_PAGEBASE_REL21>)

ARM64\_PAGEBASE\_REL21 = 1048580

##### [` ARM64_PAGEOFFSET_12A `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_PAGEOFFSET_12A>)

ARM64\_PAGEOFFSET\_12A = 1048582

##### [` ARM64_PAGEOFFSET_12L `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_PAGEOFFSET_12L>)

ARM64\_PAGEOFFSET\_12L = 1048583

##### [` ARM64_REL21 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_REL21>)

ARM64\_REL21 = 1048581

##### [` ARM64_REL32 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_REL32>)

ARM64\_REL32 = 1048593

##### [` ARM64_SECREL `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_SECREL>)

ARM64\_SECREL = 1048584

##### [` ARM64_SECREL_HIGH12A `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_SECREL_HIGH12A>)

ARM64\_SECREL\_HIGH12A = 1048586

##### [` ARM64_SECREL_LOW12A `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_SECREL_LOW12A>)

ARM64\_SECREL\_LOW12A = 1048585

##### [` ARM64_SECREL_LOW12L `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_SECREL_LOW12L>)

ARM64\_SECREL\_LOW12L = 1048587

##### [` ARM64_SECTION `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_SECTION>)

ARM64\_SECTION = 1048589

##### [` ARM64_TOKEN `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM64_TOKEN>)

ARM64\_TOKEN = 1048588

##### [` ARM_ABSOLUTE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_ABSOLUTE>)

ARM\_ABSOLUTE = 524288

##### [` ARM_ADDR32 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_ADDR32>)

ARM\_ADDR32 = 524289

##### [` ARM_ADDR32NB `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_ADDR32NB>)

ARM\_ADDR32NB = 524290

##### [` ARM_BLX11 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_BLX11>)

ARM\_BLX11 = 524297

##### [` ARM_BLX23T `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_BLX23T>)

ARM\_BLX23T = 524309

##### [` ARM_BLX24 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_BLX24>)

ARM\_BLX24 = 524296

##### [` ARM_BRANCH11 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_BRANCH11>)

ARM\_BRANCH11 = 524292

##### [` ARM_BRANCH20T `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_BRANCH20T>)

ARM\_BRANCH20T = 524306

##### [` ARM_BRANCH24 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_BRANCH24>)

ARM\_BRANCH24 = 524291

##### [` ARM_BRANCH24T `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_BRANCH24T>)

ARM\_BRANCH24T = 524308

##### [` ARM_MOV32A `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_MOV32A>)

ARM\_MOV32A = 524304

##### [` ARM_MOV32T `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_MOV32T>)

ARM\_MOV32T = 524305

##### [` ARM_PAIR `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_PAIR>)

ARM\_PAIR = 524310

##### [` ARM_REL32 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_REL32>)

ARM\_REL32 = 524298

##### [` ARM_SECREL `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_SECREL>)

ARM\_SECREL = 524303

##### [` ARM_SECTION `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_SECTION>)

ARM\_SECTION = 524302

##### [` ARM_TOKEN `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.ARM_TOKEN>)

ARM\_TOKEN = 524293

##### [` I386_ABSOLUTE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.I386_ABSOLUTE>)

I386\_ABSOLUTE = 131072

##### [` I386_DIR16 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.I386_DIR16>)

I386\_DIR16 = 131073

##### [` I386_DIR32 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.I386_DIR32>)

I386\_DIR32 = 131078

##### [` I386_DIR32NB `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.I386_DIR32NB>)

I386\_DIR32NB = 131079

##### [` I386_REL16 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.I386_REL16>)

I386\_REL16 = 131074

##### [` I386_REL32 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.I386_REL32>)

I386\_REL32 = 131092

##### [` I386_SECREL `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.I386_SECREL>)

I386\_SECREL = 131083

##### [` I386_SECREL7 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.I386_SECREL7>)

I386\_SECREL7 = 131085

##### [` I386_SECTION `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.I386_SECTION>)

I386\_SECTION = 131082

##### [` I386_SEG12 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.I386_SEG12>)

I386\_SEG12 = 131081

##### [` I386_TOKEN `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.I386_TOKEN>)

I386\_TOKEN = 131084

##### [` MIPS_ABSOLUTE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.MIPS_ABSOLUTE>)

MIPS\_ABSOLUTE = 2097152

##### [` MIPS_GPREL `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.MIPS_GPREL>)

MIPS\_GPREL = 2097158

##### [` MIPS_JMPADDR `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.MIPS_JMPADDR>)

MIPS\_JMPADDR = 2097155

##### [` MIPS_JMPADDR16 `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.MIPS_JMPADDR16>)

MIPS\_JMPADDR16 = 2097168

##### [` MIPS_LITERAL `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.MIPS_LITERAL>)

MIPS\_LITERAL = 2097159

##### [` MIPS_PAIR `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.MIPS_PAIR>)

MIPS\_PAIR = 2097189

##### [` MIPS_REFHALF `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.MIPS_REFHALF>)

MIPS\_REFHALF = 2097153

##### [` MIPS_REFHI `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.MIPS_REFHI>)

MIPS\_REFHI = 2097156

##### [` MIPS_REFLO `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.MIPS_REFLO>)

MIPS\_REFLO = 2097157

##### [` MIPS_REFWORD `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.MIPS_REFWORD>)

MIPS\_REFWORD = 2097154

##### [` MIPS_REFWORDNB `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.MIPS_REFWORDNB>)

MIPS\_REFWORDNB = 2097186

##### [` MIPS_SECREL `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.MIPS_SECREL>)

MIPS\_SECREL = 2097163

##### [` MIPS_SECRELHI `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.MIPS_SECRELHI>)

MIPS\_SECRELHI = 2097165

##### [` MIPS_SECRELLO `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.MIPS_SECRELLO>)

MIPS\_SECRELLO = 2097164

##### [` MIPS_SECTION `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.MIPS_SECTION>)

MIPS\_SECTION = 2097162

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.UNKNOWN>)

UNKNOWN = 4294967295

##### [` from_value `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE.from_value>)

from\_value(*arg: int*) → [lief.COFF.Relocation.TYPE](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE> "lief.COFF.Relocation.TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` section `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.section>)

property section → [lief.COFF.Section](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section> "lief.COFF.Section") | None

Section in which the relocation takes place

#### [` symbol `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.symbol>)

property symbol → [lief.COFF.Symbol](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol> "lief.COFF.Symbol") | None

Symbol associated with the relocation (if any)

#### [` symbol_idx `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.symbol_idx>)

property symbol\_idx → int

Symbol index associated with this relocation

#### [` type `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.type>)

property type → [lief.COFF.Relocation.TYPE](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Relocation.TYPE> "lief.COFF.Relocation.TYPE")

Type of the relocation

---

## [String](<https://lief.re/doc/latest/formats/coff/python.html#string>)

### [` lief.COFF.String `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.String>)

class lief.COFF.String

Bases: `object`

This class represents a string located in the COFF string table.

Some of these strings can be used for section’s name where its length is greater than 8 bytes. See: [`coff_string`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section.coff_string> "lief.COFF.Section.coff_string").

Reference: [https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#coff-string-table](<https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#coff-string-table>)

#### [` offset `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.String.offset>)

property offset → int

The offset of this string the in the COFF string table. This offset includes the first 4-bytes that holds the table size

#### [` string `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.String.string>)

property string → str

The actual string

---

## [Symbol](<https://lief.re/doc/latest/formats/coff/python.html#symbol>)

![Inheritance diagram of lief._lief.COFF.Symbol](https://lief.re/doc/latest/_images/inheritance-9d6e46f60b50057c5307ec849919b9ff37e737a8.png)

### [` lief.COFF.Symbol `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol>)

class lief.COFF.Symbol

Bases: [`Symbol`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol> "lief._lief.Symbol")

Class that represents a COFF symbol.

> **Warning**
> 
> The [`lief.Symbol.value`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol.value> "lief.Symbol.value") should be interpreted in perspective of the [`storage_class`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.storage_class> "lief.COFF.Symbol.storage_class")

Reference: [https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#coff-symbol-table](<https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#coff-symbol-table>)

#### [` BASE_TYPE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE>)

class BASE\_TYPE(*\*values*)

Bases: `Enum`

##### [` BYTE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.BYTE>)

BYTE = 12

##### [` CHAR `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.CHAR>)

CHAR = 2

##### [` DOUBLE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.DOUBLE>)

DOUBLE = 7

##### [` DWORD `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.DWORD>)

DWORD = 15

##### [` ENUM `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.ENUM>)

ENUM = 10

##### [` FLOAT `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.FLOAT>)

FLOAT = 6

##### [` INT `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.INT>)

INT = 4

##### [` LONG `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.LONG>)

LONG = 5

##### [` MOE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.MOE>)

MOE = 11

##### [` NULL `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.NULL>)

NULL = 0

##### [` SHORT `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.SHORT>)

SHORT = 3

##### [` STRUCT `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.STRUCT>)

STRUCT = 8

##### [` UINT `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.UINT>)

UINT = 14

##### [` UNION `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.UNION>)

UNION = 9

##### [` VOID `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.VOID>)

VOID = 1

##### [` WORD `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.WORD>)

WORD = 13

##### [` from_value `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE.from_value>)

from\_value(*arg: int*) → [lief.COFF.Symbol.BASE\_TYPE](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE> "lief.COFF.Symbol.BASE_TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` COMPLEX_TYPE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.COMPLEX_TYPE>)

class COMPLEX\_TYPE(*\*values*)

Bases: `Enum`

##### [` ARRAY `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.COMPLEX_TYPE.ARRAY>)

ARRAY = 3

##### [` FUNCTION `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.COMPLEX_TYPE.FUNCTION>)

FUNCTION = 2

##### [` NULL `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.COMPLEX_TYPE.NULL>)

NULL = 0

##### [` POINTER `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.COMPLEX_TYPE.POINTER>)

POINTER = 1

##### [` from_value `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.COMPLEX_TYPE.from_value>)

from\_value(*arg: int*) → [lief.COFF.Symbol.COMPLEX\_TYPE](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.COMPLEX_TYPE> "lief.COFF.Symbol.COMPLEX_TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` STORAGE_CLASS `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS>)

class STORAGE\_CLASS(*\*values*)

Bases: `Enum`

Reference: [https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#storage-class](<https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#storage-class>)

##### [` ARGUMENT `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.ARGUMENT>)

ARGUMENT = 9

##### [` AUTOMATIC `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.AUTOMATIC>)

AUTOMATIC = 1

##### [` BIT_FIELD `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.BIT_FIELD>)

BIT\_FIELD = 18

##### [` BLOCK `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.BLOCK>)

BLOCK = 100

##### [` CLR_TOKEN `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.CLR_TOKEN>)

CLR\_TOKEN = 107

##### [` END_OF_FUNCTION `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.END_OF_FUNCTION>)

END\_OF\_FUNCTION = -1

##### [` END_OF_STRUCT `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.END_OF_STRUCT>)

END\_OF\_STRUCT = 102

##### [` ENUM_TAG `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.ENUM_TAG>)

ENUM\_TAG = 15

##### [` EXTERNAL `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.EXTERNAL>)

EXTERNAL = 2

##### [` EXTERNAL_DEF `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.EXTERNAL_DEF>)

EXTERNAL\_DEF = 5

##### [` FILE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.FILE>)

FILE = 103

##### [` FUNCTION `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.FUNCTION>)

FUNCTION = 101

##### [` LABEL `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.LABEL>)

LABEL = 6

##### [` MEMBER_OF_ENUM `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.MEMBER_OF_ENUM>)

MEMBER\_OF\_ENUM = 16

##### [` MEMBER_OF_STRUCT `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.MEMBER_OF_STRUCT>)

MEMBER\_OF\_STRUCT = 8

##### [` MEMBER_OF_UNION `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.MEMBER_OF_UNION>)

MEMBER\_OF\_UNION = 11

##### [` NONE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.NONE>)

NONE = 0

##### [` REGISTER `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.REGISTER>)

REGISTER = 4

##### [` REGISTER_PARAM `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.REGISTER_PARAM>)

REGISTER\_PARAM = 17

##### [` SECTION `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.SECTION>)

SECTION = 104

##### [` STATIC `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.STATIC>)

STATIC = 3

##### [` STRUCT_TAG `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.STRUCT_TAG>)

STRUCT\_TAG = 10

##### [` TYPE_DEFINITION `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.TYPE_DEFINITION>)

TYPE\_DEFINITION = 13

##### [` UNDEFINED_LABEL `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.UNDEFINED_LABEL>)

UNDEFINED\_LABEL = 7

##### [` UNDEFINED_STATIC `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.UNDEFINED_STATIC>)

UNDEFINED\_STATIC = 14

##### [` UNION_TAG `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.UNION_TAG>)

UNION\_TAG = 12

##### [` WEAK_EXTERNAL `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.WEAK_EXTERNAL>)

WEAK\_EXTERNAL = 105

##### [` from_value `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS.from_value>)

from\_value(*arg: int*) → [lief.COFF.Symbol.STORAGE\_CLASS](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS> "lief.COFF.Symbol.STORAGE_CLASS") = &lt;nanobind.nb\_func object&gt;

#### [` auxiliary_symbols `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.auxiliary_symbols>)

property auxiliary\_symbols → lief.COFF.Symbol.it\_auxiliary\_symbols\_t

Auxiliary symbols associated with this symbol.

#### [` base_type `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.base_type>)

property base\_type → [lief.COFF.Symbol.BASE\_TYPE](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.BASE_TYPE> "lief.COFF.Symbol.BASE_TYPE")

The simple (base) data type

#### [` coff_name `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.coff_name>)

property coff\_name → [lief.COFF.String](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.String> "lief.COFF.String") | None

COFF string used to represents the (long) symbol name

#### [` complex_type `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.complex_type>)

property complex\_type → [lief.COFF.Symbol.COMPLEX\_TYPE](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.COMPLEX_TYPE> "lief.COFF.Symbol.COMPLEX_TYPE")

The complex type (if any)

#### [` demangled_name `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.demangled_name>)

property demangled\_name → str

Demangled representation of the symbol or an empty string if it can’t be demangled

#### [` is_absolute `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.is_absolute>)

property is\_absolute → bool

#### [` is_external `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.is_external>)

property is\_external → bool

#### [` is_file_record `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.is_file_record>)

property is\_file\_record → bool

#### [` is_function `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.is_function>)

property is\_function → bool

#### [` is_function_line_info `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.is_function_line_info>)

property is\_function\_line\_info → bool

#### [` is_undefined `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.is_undefined>)

property is\_undefined → bool

#### [` is_weak_external `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.is_weak_external>)

property is\_weak\_external → bool

#### [` section `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.section>)

property section → [lief.COFF.Section](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Section> "lief.COFF.Section") | None

Section associated with this symbol (if any)

#### [` section_idx `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.section_idx>)

property section\_idx → int

The signed integer that identifies the section, using a one-based index into the section table. Some values have special meaning:

- **0: The symbol record is not yet assigned a section. A value of zero**

  indicates that a reference to an external symbol is defined elsewhere. A value of non-zero is a common symbol with a size that is specified by the value.
- **-1: The symbol has an absolute (non-relocatable) value and is not an**

  address.
- **-2: The symbol provides general type or debugging information but does**

  not correspond to a section. Microsoft tools use this setting along with `.file` records

#### [` storage_class `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.storage_class>)

property storage\_class → [lief.COFF.Symbol.STORAGE\_CLASS](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.STORAGE_CLASS> "lief.COFF.Symbol.STORAGE_CLASS")

Storage class of the symbol which indicates what kind of definition a symbol represents.

#### [` type `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.type>)

property type → int

The symbol type. The first byte represents the base type (see: [`base_type`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.base_type> "lief.COFF.Symbol.base_type")) while the upper byte represents the complex type, if any (see: [`complex_type`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol.complex_type> "lief.COFF.Symbol.complex_type")).

---

## [AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/python.html#auxiliarysymbol>)

![Inheritance diagram of lief._lief.COFF.AuxiliarybfAndefSymbol, lief._lief.COFF.AuxiliarySectionDefinition, lief._lief.COFF.AuxiliarySymbol, lief._lief.COFF.AuxiliaryCLRToken, lief._lief.COFF.AuxiliaryFunctionDefinition, lief._lief.COFF.AuxiliaryWeakExternal, lief._lief.COFF.AuxiliaryFile](https://lief.re/doc/latest/_images/inheritance-98e72f61ce11428b1118896c9dae81971bc77ff0.png)

### [` lief.COFF.AuxiliarySymbol `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol>)

class lief.COFF.AuxiliarySymbol

Bases: `object`

Class that represents an auxiliary symbol.

An auxiliary symbol has the same size as a regular `lief.PE.Symbol` (18 bytes) but its content depends on the parent symbol.

#### [` TYPE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

Type discriminator for the subclasses

##### [` BF_AND_EF `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol.TYPE.BF_AND_EF>)

BF\_AND\_EF = 3

##### [` CLR_TOKEN `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol.TYPE.CLR_TOKEN>)

CLR\_TOKEN = 1

##### [` FILE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol.TYPE.FILE>)

FILE = 5

##### [` FUNC_DEF `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol.TYPE.FUNC_DEF>)

FUNC\_DEF = 2

##### [` SEC_DEF `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol.TYPE.SEC_DEF>)

SEC\_DEF = 6

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol.TYPE.UNKNOWN>)

UNKNOWN = 0

##### [` WEAK_EXTERNAL `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol.TYPE.WEAK_EXTERNAL>)

WEAK\_EXTERNAL = 4

##### [` from_value `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol.TYPE.from_value>)

from\_value(*arg: int*) → [lief.COFF.AuxiliarySymbol.TYPE](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol.TYPE> "lief.COFF.AuxiliarySymbol.TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` copy `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol.copy>)

copy(*self*) → [lief.\_lief.COFF.AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol> "lief._lief.COFF.AuxiliarySymbol") | None

Duplicate the current instance of this object

#### [` payload `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol.payload>)

property payload → memoryview

For unknown type **only**, return the raw representation of this symbol

#### [` type `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol.type>)

property type → [lief.COFF.AuxiliarySymbol.TYPE](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol.TYPE> "lief.COFF.AuxiliarySymbol.TYPE")

---

## [AuxiliaryCLRToken](<https://lief.re/doc/latest/formats/coff/python.html#auxiliaryclrtoken>)

![Inheritance diagram of lief._lief.COFF.AuxiliaryCLRToken](https://lief.re/doc/latest/_images/inheritance-79a9cfc9c89e3e02ed132fc4fe0455073bba85e6.png)

### [` lief.COFF.AuxiliaryCLRToken `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryCLRToken>)

class lief.COFF.AuxiliaryCLRToken

Bases: [`AuxiliarySymbol`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol> "lief._lief.COFF.AuxiliarySymbol")

Auxiliary symbol associated with the `CLR_TOKEN` storage class

#### [` aux_type `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryCLRToken.aux_type>)

property aux\_type → int

`IMAGE_AUX_SYMBOL_TYPE` which should be `IMAGE_AUX_SYMBOL_TYPE_TOKEN_DEF` (1)

#### [` reserved `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryCLRToken.reserved>)

property reserved → int

Reserved value (should be 0)

#### [` rgb_reserved `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryCLRToken.rgb_reserved>)

property rgb\_reserved → memoryview

Reserved (padding) values. Should be 0

#### [` symbol `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryCLRToken.symbol>)

property symbol → [lief.COFF.Symbol](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Symbol> "lief.COFF.Symbol") | None

Symbol referenced by [`symbol_idx`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryCLRToken.symbol_idx> "lief.COFF.AuxiliaryCLRToken.symbol_idx") (if resolved)

#### [` symbol_idx `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryCLRToken.symbol_idx>)

property symbol\_idx → int

Index in the symbol table

---

## [AuxiliaryFunctionDefinition](<https://lief.re/doc/latest/formats/coff/python.html#auxiliaryfunctiondefinition>)

![Inheritance diagram of lief._lief.COFF.AuxiliaryFunctionDefinition](https://lief.re/doc/latest/_images/inheritance-4f13b18f2f4088db5189525dd98410c14c698e70.png)

### [` lief.COFF.AuxiliaryFunctionDefinition `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryFunctionDefinition>)

class lief.COFF.AuxiliaryFunctionDefinition

Bases: [`AuxiliarySymbol`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol> "lief._lief.COFF.AuxiliarySymbol")

This auxiliary symbol marks the beginning of a function definition.

Reference: [https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#auxiliary-format-1-function-definitions](<https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#auxiliary-format-1-function-definitions>)

#### [` padding `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryFunctionDefinition.padding>)

property padding → int

Padding value (should be 0)

#### [` ptr_to_line_number `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryFunctionDefinition.ptr_to_line_number>)

property ptr\_to\_line\_number → int

The file offset of the first COFF line-number entry for the function, or zero if none exists (deprecated)

#### [` ptr_to_next_func `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryFunctionDefinition.ptr_to_next_func>)

property ptr\_to\_next\_func → int

The symbol-table index of the record for the next function. If the function is the last in the symbol table, this field is set to zero

#### [` tag_index `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryFunctionDefinition.tag_index>)

property tag\_index → int

The symbol-table index of the corresponding `.bf` (begin function) symbol record.

#### [` total_size `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryFunctionDefinition.total_size>)

property total\_size → int

The size of the executable code for the function itself.

If the function is in its own section, the `SizeOfRawData` in the section header is greater or equal to this field, depending on alignment considerations

---

## [AuxiliaryWeakExternal](<https://lief.re/doc/latest/formats/coff/python.html#auxiliaryweakexternal>)

![Inheritance diagram of lief._lief.COFF.AuxiliaryWeakExternal](https://lief.re/doc/latest/_images/inheritance-1e262467ebc197517ae14329cfad93486ed89018.png)

### [` lief.COFF.AuxiliaryWeakExternal `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryWeakExternal>)

class lief.COFF.AuxiliaryWeakExternal

Bases: [`AuxiliarySymbol`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol> "lief._lief.COFF.AuxiliarySymbol")

“Weak externals” are a mechanism for object files that allows flexibility at link time. A module can contain an unresolved external symbol (`sym1`), but it can also include an auxiliary record that indicates that if `sym1` is not present at link time, another external symbol (`sym2`) is used to resolve references instead.

If a definition of `sym1` is linked, then an external reference to the symbol is resolved normally. If a definition of `sym1` is not linked, then all references to the weak external for `sym1` refer to `sym2` instead. The external symbol, `sym2`, must always be linked; typically, it is defined in the module that contains the weak reference to `sym1`.

Reference: [https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#auxiliary-format-3-weak-externals](<https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#auxiliary-format-3-weak-externals>)

#### [` CHARACTERISTICS `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryWeakExternal.CHARACTERISTICS>)

class CHARACTERISTICS(*\*values*)

Bases: `Enum`

##### [` ANTI_DEPENDENCY `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryWeakExternal.CHARACTERISTICS.ANTI_DEPENDENCY>)

ANTI\_DEPENDENCY = 4

##### [` SEARCH_ALIAS `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryWeakExternal.CHARACTERISTICS.SEARCH_ALIAS>)

SEARCH\_ALIAS = 3

##### [` SEARCH_LIBRARY `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryWeakExternal.CHARACTERISTICS.SEARCH_LIBRARY>)

SEARCH\_LIBRARY = 2

##### [` SEARCH_NOLIBRARY `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryWeakExternal.CHARACTERISTICS.SEARCH_NOLIBRARY>)

SEARCH\_NOLIBRARY = 1

#### [` characteristics `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryWeakExternal.characteristics>)

property characteristics → [lief.COFF.AuxiliaryWeakExternal.CHARACTERISTICS](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryWeakExternal.CHARACTERISTICS> "lief.COFF.AuxiliaryWeakExternal.CHARACTERISTICS")

#### [` padding `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryWeakExternal.padding>)

property padding → memoryview

#### [` sym_idx `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryWeakExternal.sym_idx>)

property sym\_idx → int

The symbol-table index of sym2, the symbol to be linked if `sym1` is not found.

---

## [AuxiliarybfAndefSymbol](<https://lief.re/doc/latest/formats/coff/python.html#auxiliarybfandefsymbol>)

![Inheritance diagram of lief._lief.COFF.AuxiliarybfAndefSymbol](https://lief.re/doc/latest/_images/inheritance-02d299e259eec33163ad7d484ccd5b4974128ebd.png)

### [` lief.COFF.AuxiliarybfAndefSymbol `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarybfAndefSymbol>)

class lief.COFF.AuxiliarybfAndefSymbol

Bases: [`AuxiliarySymbol`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol> "lief._lief.COFF.AuxiliarySymbol")

---

## [AuxiliarySectionDefinition](<https://lief.re/doc/latest/formats/coff/python.html#auxiliarysectiondefinition>)

![Inheritance diagram of lief._lief.COFF.AuxiliarySectionDefinition](https://lief.re/doc/latest/_images/inheritance-d628fe9cece3a9e4d30978150d56af8fc6bb8d58.png)

### [` lief.COFF.AuxiliarySectionDefinition `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition>)

class lief.COFF.AuxiliarySectionDefinition

Bases: [`AuxiliarySymbol`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol> "lief._lief.COFF.AuxiliarySymbol")

This auxiliary symbol exposes information about the associated section.

It **duplicates** some information that are provided in the section header

#### [` COMDAT_SELECTION `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.COMDAT_SELECTION>)

class COMDAT\_SELECTION(*\*values*)

Bases: `Enum`

Values for the AuxiliarySectionDefinition::selection attribute

See: [https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#comdat-sections-object-only](<https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#comdat-sections-object-only>)

##### [` ANY `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.COMDAT_SELECTION.ANY>)

ANY = 2

##### [` ASSOCIATIVE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.COMDAT_SELECTION.ASSOCIATIVE>)

ASSOCIATIVE = 5

##### [` EXACT_MATCH `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.COMDAT_SELECTION.EXACT_MATCH>)

EXACT\_MATCH = 4

##### [` LARGEST `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.COMDAT_SELECTION.LARGEST>)

LARGEST = 6

##### [` NODUPLICATES `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.COMDAT_SELECTION.NODUPLICATES>)

NODUPLICATES = 1

##### [` NONE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.COMDAT_SELECTION.NONE>)

NONE = 0

##### [` SAME_SIZE `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.COMDAT_SELECTION.SAME_SIZE>)

SAME\_SIZE = 3

#### [` checksum `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.checksum>)

property checksum → int

The checksum for communal data. It is applicable if the `IMAGE_SCN_LNK_COMDAT` flag is set in the section header.

#### [` length `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.length>)

property length → int

The size of section data. The same as `SizeOfRawData` in the section header.

#### [` nb_line_numbers `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.nb_line_numbers>)

property nb\_line\_numbers → int

The number of line-number entries for the section.

#### [` nb_relocs `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.nb_relocs>)

property nb\_relocs → int

The number of relocation entries for the section.

#### [` reserved `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.reserved>)

property reserved → int

Reserved value (should be 0)

#### [` section_idx `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.section_idx>)

property section\_idx → int

One-based index into the section table for the associated section. This is used when the COMDAT selection setting is 5.

#### [` selection `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.selection>)

property selection → [lief.COFF.AuxiliarySectionDefinition.COMDAT\_SELECTION](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySectionDefinition.COMDAT_SELECTION> "lief.COFF.AuxiliarySectionDefinition.COMDAT_SELECTION")

The COMDAT selection number. This is applicable if the section is a COMDAT section.

---

## [AuxiliaryFile](<https://lief.re/doc/latest/formats/coff/python.html#auxiliaryfile>)

![Inheritance diagram of lief._lief.COFF.AuxiliaryFile](https://lief.re/doc/latest/_images/inheritance-b0e9cc4ccf4c91f256bb4605d707ac99bd9e14d6.png)

### [` lief.COFF.AuxiliaryFile `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryFile>)

class lief.COFF.AuxiliaryFile

Bases: [`AuxiliarySymbol`](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliarySymbol> "lief._lief.COFF.AuxiliarySymbol")

This auxiliary symbol represents a filename (auxiliary format 4)

The [`lief.Symbol.name`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol.name> "lief.Symbol.name") itself should start with `.file`, and this auxiliary record gives the name of a source-code file.

Reference: [https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#auxiliary-format-4-files](<https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#auxiliary-format-4-files>)

#### [` filename `](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.AuxiliaryFile.filename>)

property filename → str

The associated filename

## [Utilities](<https://lief.re/doc/latest/formats/coff/python.html#utilities>)

### [` lief.is_coff `](<https://lief.re/doc/latest/formats/coff/python.html#lief.is_coff>)

lief.is\_coff(*file: str | os.PathLike*) → bool

Check if the given file is a COFF
