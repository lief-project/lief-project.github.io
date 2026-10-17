---
documentID: "e1ad0509ee4ca2b145a1b828aeb8a68a6a879459a56983f88fceb7aa17a26740"
docname: "formats/android/dex/python"
title: "DEX Python API - LIEF Documentation"
description: "DEX Python API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/formats/android/dex/python.html"
markdownURL: "https://lief.re/doc/latest/formats/android/dex/python.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "809c8d7d3356323ef7225e8dd5e7bc460cf983fc2e084e9506b9be9e62a38e6d"
---

# [Python](<https://lief.re/doc/latest/formats/android/dex/python.html#python>)

## [Utilities](<https://lief.re/doc/latest/formats/android/dex/python.html#utilities>)

### [` lief.is_dexlief.is_dex `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.is_dex>)

lief.is\_dex(*\*args*) → bool

**lief.is\_dex(*raw: collections.abc.Sequence[int]*) → bool**

Overloaded function.

1. `is_dex(path: str) -> bool`

Check if the **file** given in parameter is a DEX

2. `is_dex(raw: collections.abc.Sequence[int]) -> bool`

Check if the **raw data** given in parameter is a DEX

### [` lief.DEX.versionlief.DEX.version `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.version>)

lief.DEX.version(*\*args*) → int

**lief.DEX.version(*raw: collections.abc.Sequence[int]*) → int**

Overloaded function.

1. `version(file: str) -> int`

Return the DEX version of the **file** given in parameter

2. `version(raw: collections.abc.Sequence[int]) -> int`

Return the DEX version of the **raw data** given in parameter

---

## [Parser](<https://lief.re/doc/latest/formats/android/dex/python.html#parser>)

### [` lief.DEX.parselief.DEX.parselief.DEX.parse `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.parse>)

lief.DEX.parse(*\*args*) → [lief.DEX.File](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File> "lief.DEX.File") | None

**lief.DEX.parse(*raw: collections.abc.Sequence[int]*, *name: str = ''*) → [lief.\_lief.DEX.File](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File> "lief._lief.DEX.File") | None

**lief.DEX.parse(*obj: str | io.IOBase | os.PathLike | bytes | list[int]*, *name: str = ''*) → [lief.\_lief.DEX.File](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File> "lief._lief.DEX.File") | None****

Overloaded function.

1. `parse(filename: str) -> Optional[lief._lief.DEX.File]`

Parse the given filename and return a [`File`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File> "lief.DEX.File") object

2. `parse(raw: collections.abc.Sequence[int], name: str = '') -> Optional[lief._lief.DEX.File]`

Parse the given raw data and return a [`File`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File> "lief.DEX.File") object

3. `parse(obj: Union[str | io.IOBase | os.PathLike | bytes | list[int]], name: str = '') -> Optional[lief._lief.DEX.File]`

---

## [File](<https://lief.re/doc/latest/formats/android/dex/python.html#file>)

### [` lief.DEX.File `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File>)

class lief.DEX.File

Bases: `Object`

DEX File representation

#### [` classes `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.classes>)

property classes → lief.DEX.File.it\_classes

Iterator over Dex [`Class`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class> "lief.DEX.Class")

#### [` dex2dex_json_info `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.dex2dex_json_info>)

property dex2dex\_json\_info → str

#### [` fields `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.fields>)

property fields → lief.DEX.File.it\_fields

Iterator over Dex [`Field`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Field> "lief.DEX.Field")

#### [` get_classget_class `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.get_class>)

get\_class(*self*, *classname: str*) → [lief.\_lief.DEX.Class](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class> "lief._lief.DEX.Class") | None

**get\_class(*self*, *classname: int*) → [lief.\_lief.DEX.Class](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class> "lief._lief.DEX.Class") | None**

#### [` has_class `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.has_class>)

has\_class(*self*, *classname: str*) → bool

Check if a class with a name given in parameter exists

#### [` header `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.header>)

property header → [lief.DEX.Header](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header> "lief.DEX.Header")

Dex File [`Header`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header> "lief.DEX.Header")

#### [` location `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.location>)

property location → str

Original location of the dex file

#### [` map `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.map>)

property map → [lief.DEX.MapList](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapList> "lief.DEX.MapList")

Dex [`MapList`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapList> "lief.DEX.MapList")

#### [` methods `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.methods>)

property methods → lief.DEX.File.it\_methods

Iterator over Dex [`Method`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method> "lief.DEX.Method")

#### [` name `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.name>)

property name → str

Name of the dex file

#### [` prototypes `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.prototypes>)

property prototypes → lief.DEX.File.it\_prototypes

Iterator over Dex [`Prototype`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Prototype> "lief.DEX.Prototype")

#### [` raw `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.raw>)

raw(*self*, *deoptimize: bool = True*) → list[int]

Original raw file

#### [` save `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.save>)

save(*self*, *output: str = ''*, *deoptimize: bool = True*) → str

Save the **original** file into the file given in first parameter

#### [` strings `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.strings>)

property strings → lief.DEX.File.it\_strings

Iterator over Dex strings

#### [` types `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.types>)

property types → lief.DEX.File.it\_types

Iterator over Dex [`Type`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type> "lief.DEX.Type")

#### [` version `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.version>)

property version → int

Dex version

---

## [Header](<https://lief.re/doc/latest/formats/android/dex/python.html#header>)

### [` lief.DEX.Header `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header>)

class lief.DEX.Header

Bases: `Object`

DEX Header

#### [` checksum `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.checksum>)

property checksum → int

Checksum value of the rest of the file (without [`magic`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.magic> "lief.DEX.Header.magic"))

#### [` classes `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.classes>)

property classes → tuple[int, int]

Classes identifiers

#### [` data `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.data>)

property data → tuple[int, int]

Raw data. Should be align on 32-bits

#### [` endian_tag `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.endian_tag>)

property endian\_tag → int

Endianness tag. Should be `ENDIAN_CONSTANT`

#### [` fields `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.fields>)

property fields → tuple[int, int]

Fields identifiers

#### [` file_size `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.file_size>)

property file\_size → int

Size of the current DEX file

#### [` header_size `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.header_size>)

property header\_size → int

Size of this header. Should be `0x70`

#### [` link `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.link>)

property link → tuple[int, int]

Link (raw data)

#### [` magic `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.magic>)

property magic → list[int]

Magic value

#### [` map_offset `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.map_offset>)

property map\_offset → int

Offset from the start of the file to the map item

#### [` methods `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.methods>)

property methods → tuple[int, int]

Methods identifiers

#### [` nb_classes `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.nb_classes>)

property nb\_classes → int

Number of classes in the current DEX

#### [` nb_methods `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.nb_methods>)

property nb\_methods → int

Number of methods in the current DEX

#### [` prototypes `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.prototypes>)

property prototypes → tuple[int, int]

Prototypes identifiers

#### [` signature `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.signature>)

property signature → list[int]

SHA-1 signature of the rest of the file (without [`magic`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.magic> "lief.DEX.Header.magic") and [`checksum`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.checksum> "lief.DEX.Header.checksum")).

#### [` strings `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.strings>)

property strings → tuple[int, int]

String identifiers

#### [` types `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Header.types>)

property types → tuple[int, int]

Type identifiers

---

## [Method](<https://lief.re/doc/latest/formats/android/dex/python.html#method>)

### [` lief.DEX.Method `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method>)

class lief.DEX.Method

Bases: `Object`

DEX Method representation

#### [` access_flags `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method.access_flags>)

property access\_flags → list[[lief.DEX.ACCESS\_FLAGS](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS> "lief.DEX.ACCESS_FLAGS")]

List of [`ACCESS_FLAGS`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS> "lief.DEX.ACCESS_FLAGS")

#### [` bytecode `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method.bytecode>)

property bytecode → list[int]

Dalvik Bytecode as a list of bytes

#### [` cls `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method.cls>)

property cls → [lief.DEX.Class](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class> "lief.DEX.Class") | None

[`Class`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class> "lief.DEX.Class") associated with this method

#### [` code_info `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method.code_info>)

property code\_info → [lief.DEX.CodeInfo](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.CodeInfo> "lief.DEX.CodeInfo")

[`CodeInfo`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.CodeInfo> "lief.DEX.CodeInfo") associated with this method

#### [` code_offset `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method.code_offset>)

property code\_offset → int

Offset to the Dalvik Bytecode

#### [` has `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method.has>)

has(*self*, *flag: [lief.\_lief.DEX.ACCESS\_FLAGS](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS> "lief._lief.DEX.ACCESS_FLAGS")*) → bool

Check if the given [`ACCESS_FLAGS`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS> "lief.DEX.ACCESS_FLAGS") is present

#### [` has_class `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method.has_class>)

property has\_class → bool

True if a class is associated with this method

#### [` index `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method.index>)

property index → int

Original DEX file index of the method

#### [` insert_dex2dex_info `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method.insert_dex2dex_info>)

insert\_dex2dex\_info(*self*, *pc: int*, *index: int*) → None

Insert de-optimization information

#### [` is_virtual `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method.is_virtual>)

property is\_virtual → bool

True if the method is a virtual (not **private**, **static**, **final**, **constructor**)

#### [` name `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method.name>)

property name → str

Method’s name

#### [` prototype `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method.prototype>)

property prototype → [lief.DEX.Prototype](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Prototype> "lief.DEX.Prototype") | None

[`Prototype`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Prototype> "lief.DEX.Prototype") of this method

---

## [Field](<https://lief.re/doc/latest/formats/android/dex/python.html#field>)

### [` lief.DEX.Field `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Field>)

class lief.DEX.Field

Bases: `Object`

DEX Field representation

#### [` access_flags `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Field.access_flags>)

property access\_flags → list[[lief.DEX.ACCESS\_FLAGS](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS> "lief.DEX.ACCESS_FLAGS")]

List of [`ACCESS_FLAGS`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS> "lief.DEX.ACCESS_FLAGS")

#### [` cls `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Field.cls>)

property cls → [lief.DEX.Class](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class> "lief.DEX.Class") | None

[`Class`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class> "lief.DEX.Class") associated with this field

#### [` has `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Field.has>)

has(*self*, *flag: [lief.\_lief.DEX.ACCESS\_FLAGS](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS> "lief._lief.DEX.ACCESS_FLAGS")*) → bool

Check if the given [`ACCESS_FLAGS`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS> "lief.DEX.ACCESS_FLAGS") is present

#### [` has_class `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Field.has_class>)

property has\_class → bool

True if a class is associated with this field

#### [` index `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Field.index>)

property index → int

Original DEX file index of the field

#### [` is_static `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Field.is_static>)

property is\_static → bool

True if the field is static

#### [` name `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Field.name>)

property name → str

Field’s name

#### [` type `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Field.type>)

property type → [lief.DEX.Type](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type> "lief.DEX.Type") | None

[`Type`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type> "lief.DEX.Type") of this field

---

## [Class](<https://lief.re/doc/latest/formats/android/dex/python.html#class>)

### [` lief.DEX.Class `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class>)

class lief.DEX.Class

Bases: `Object`

DEX Class representation

#### [` access_flags `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class.access_flags>)

property access\_flags → list[[lief.DEX.ACCESS\_FLAGS](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS> "lief.DEX.ACCESS_FLAGS")]

List of [`ACCESS_FLAGS`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS> "lief.DEX.ACCESS_FLAGS")

#### [` dex2dex_info `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class.dex2dex_info>)

property dex2dex\_info → dict[[lief.DEX.Method](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method> "lief.DEX.Method"), dict[int, int]]

De-optimize information

#### [` fields `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class.fields>)

property fields → lief.DEX.Class.it\_fields

Iterator over [`Field`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Field> "lief.DEX.Field") in this class

#### [` fullname `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class.fullname>)

property fullname → str

Mangled class name (e.g. `Lcom/example/android/MyActivity;`)

#### [` get_field `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class.get_field>)

get\_field(*self*, *name: str*) → lief.\_lief.DEX.Class.it\_named\_fields

Iterator over [`Field`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Field> "lief.DEX.Field") (s) having the given name

#### [` get_method `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class.get_method>)

get\_method(*self*, *name: str*) → lief.\_lief.DEX.Class.it\_named\_methods

Iterator over [`Method`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method> "lief.DEX.Method") (s) having the given name

#### [` has `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class.has>)

has(*self*, *flag: [lief.\_lief.DEX.ACCESS\_FLAGS](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS> "lief._lief.DEX.ACCESS_FLAGS")*) → bool

Check if the given [`ACCESS_FLAGS`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS> "lief.DEX.ACCESS_FLAGS") is present

#### [` has_parent `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class.has_parent>)

property has\_parent → bool

True if the current class extends another one

#### [` index `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class.index>)

property index → int

Original index in the DEX class pool

#### [` methods `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class.methods>)

property methods → lief.DEX.Class.it\_methods

Iterator over [`Method`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method> "lief.DEX.Method") implemented in this class

#### [` name `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class.name>)

property name → str

Class name (e.g. `MyActivity`)

#### [` package_name `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class.package_name>)

property package\_name → str

Package Name (e.g. `com.example.android`)

#### [` parent `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class.parent>)

property parent → [lief.DEX.Class](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class> "lief.DEX.Class") | None

[`Class`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class> "lief.DEX.Class") parent class

#### [` pretty_name `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class.pretty_name>)

property pretty\_name → str

Demangled class name (e.g. `com.example.android.MyActivity`)

#### [` source_filename `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class.source_filename>)

property source\_filename → str

Original filename

---

## [Code Info](<https://lief.re/doc/latest/formats/android/dex/python.html#code-info>)

### [` lief.DEX.CodeInfo `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.CodeInfo>)

class lief.DEX.CodeInfo

Bases: `Object`

DEX CodeInfo representation

#### [` nb_registers `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.CodeInfo.nb_registers>)

property nb\_registers → int

Number of registers used by the method

---

## [Prototype](<https://lief.re/doc/latest/formats/android/dex/python.html#prototype>)

### [` lief.DEX.Prototype `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Prototype>)

class lief.DEX.Prototype

Bases: `Object`

DEX Prototype representation

#### [` parameters_type `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Prototype.parameters_type>)

property parameters\_type → lief.DEX.Prototype.it\_params

Iterator over parameters [`Type`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type> "lief.DEX.Type")

#### [` return_type `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Prototype.return_type>)

property return\_type → [lief.DEX.Type](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type> "lief.DEX.Type") | None

[`Type`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type> "lief.DEX.Type") returned

---

## [Type](<https://lief.re/doc/latest/formats/android/dex/python.html#type>)

### [` lief.DEX.Type `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type>)

class lief.DEX.Type

Bases: `Object`

DEX Type representation

#### [` PRIMITIVES `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.PRIMITIVES>)

class PRIMITIVES(*\*values*)

Bases: `Enum`

##### [` BOOLEAN `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.PRIMITIVES.BOOLEAN>)

BOOLEAN = 2

##### [` BYTE `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.PRIMITIVES.BYTE>)

BYTE = 3

##### [` CHAR `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.PRIMITIVES.CHAR>)

CHAR = 5

##### [` DOUBLE `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.PRIMITIVES.DOUBLE>)

DOUBLE = 9

##### [` FLOAT `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.PRIMITIVES.FLOAT>)

FLOAT = 8

##### [` INT `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.PRIMITIVES.INT>)

INT = 6

##### [` LONG `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.PRIMITIVES.LONG>)

LONG = 7

##### [` SHORT `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.PRIMITIVES.SHORT>)

SHORT = 4

##### [` VOID_T `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.PRIMITIVES.VOID_T>)

VOID\_T = 1

#### [` TYPES `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.TYPES>)

class TYPES(*\*values*)

Bases: `Enum`

##### [` ARRAY `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.TYPES.ARRAY>)

ARRAY = 3

##### [` CLASS `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.TYPES.CLASS>)

CLASS = 2

##### [` PRIMITIVE `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.TYPES.PRIMITIVE>)

PRIMITIVE = 1

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.TYPES.UNKNOWN>)

UNKNOWN = 0

#### [` dim `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.dim>)

property dim → int

If the current type is an array, return its dimension otherwise 0

#### [` pretty_name `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.pretty_name>)

pretty\_name(*primitive: [lief.DEX.Type.PRIMITIVES](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.PRIMITIVES> "lief.DEX.Type.PRIMITIVES")*) → str = &lt;nanobind.nb\_func object&gt;

#### [` type `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.type>)

property type → [lief.DEX.Type.TYPES](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.TYPES> "lief.DEX.Type.TYPES")

[`TYPES`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.TYPES> "lief.DEX.Type.TYPES") of this object

#### [` underlying_array_type `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.underlying_array_type>)

property underlying\_array\_type → [lief.DEX.Type](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type> "lief.DEX.Type")

Underlying type of the array

#### [` value `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.value>)

property value → object

Depending on the [`TYPES`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.TYPES> "lief.DEX.Type.TYPES"), return [`Class`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class> "lief.DEX.Class") or [`PRIMITIVES`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Type.PRIMITIVES> "lief.DEX.Type.PRIMITIVES") or array

---

## [MapList](<https://lief.re/doc/latest/formats/android/dex/python.html#maplist>)

### [` lief.DEX.MapList `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapList>)

class lief.DEX.MapList

Bases: `Object`

DEX MapList representation

#### [` get `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapList.get>)

get(*self*, *type: [lief.\_lief.DEX.MapItem.TYPES](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES> "lief._lief.DEX.MapItem.TYPES")*) → [lief.\_lief.DEX.MapItem](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem> "lief._lief.DEX.MapItem")

Return the [`MapItem`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem> "lief.DEX.MapItem") from the given [`TYPES`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES> "lief.DEX.MapItem.TYPES")

#### [` has `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapList.has>)

has(*self*, *type: [lief.\_lief.DEX.MapItem.TYPES](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES> "lief._lief.DEX.MapItem.TYPES")*) → bool

Check if the given [`TYPES`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES> "lief.DEX.MapItem.TYPES") is present

#### [` items `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapList.items>)

property items → lief.DEX.MapList.it\_items\_t

Iterator over [`MapItem`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem> "lief.DEX.MapItem")

---

## [MapItem](<https://lief.re/doc/latest/formats/android/dex/python.html#mapitem>)

### [` lief.DEX.MapItem `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem>)

class lief.DEX.MapItem

Bases: `Object`

DEX MapItem representation

#### [` TYPES `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES>)

class TYPES(*\*values*)

Bases: `Enum`

##### [` ANNOTATION `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.ANNOTATION>)

ANNOTATION = 8196

##### [` ANNOTATIONS_DIRECTORY `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.ANNOTATIONS_DIRECTORY>)

ANNOTATIONS\_DIRECTORY = 8198

##### [` ANNOTATION_SET `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.ANNOTATION_SET>)

ANNOTATION\_SET = 4099

##### [` ANNOTATION_SET_REF_LIST `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.ANNOTATION_SET_REF_LIST>)

ANNOTATION\_SET\_REF\_LIST = 4098

##### [` CALL_SITE_ID `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.CALL_SITE_ID>)

CALL\_SITE\_ID = 7

##### [` CLASS_DATA `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.CLASS_DATA>)

CLASS\_DATA = 8192

##### [` CLASS_DEF `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.CLASS_DEF>)

CLASS\_DEF = 6

##### [` CODE `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.CODE>)

CODE = 8193

##### [` DEBUG_INFO `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.DEBUG_INFO>)

DEBUG\_INFO = 8195

##### [` ENCODED_ARRAY `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.ENCODED_ARRAY>)

ENCODED\_ARRAY = 8197

##### [` FIELD_ID `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.FIELD_ID>)

FIELD\_ID = 4

##### [` HEADER `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.HEADER>)

HEADER = 0

##### [` MAP_LIST `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.MAP_LIST>)

MAP\_LIST = 4096

##### [` METHOD_HANDLE `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.METHOD_HANDLE>)

METHOD\_HANDLE = 8

##### [` METHOD_ID `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.METHOD_ID>)

METHOD\_ID = 5

##### [` PROTO_ID `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.PROTO_ID>)

PROTO\_ID = 3

##### [` STRING_DATA `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.STRING_DATA>)

STRING\_DATA = 8194

##### [` STRING_ID `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.STRING_ID>)

STRING\_ID = 1

##### [` TYPE_ID `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.TYPE_ID>)

TYPE\_ID = 2

##### [` TYPE_LIST `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.TYPE_LIST>)

TYPE\_LIST = 4097

##### [` from_value `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES.from_value>)

from\_value(*arg: int*) → [lief.DEX.MapItem.TYPES](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES> "lief.DEX.MapItem.TYPES") = &lt;nanobind.nb\_func object&gt;

#### [` offset `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.offset>)

property offset → int

Offset from the start of the file to the items in question

#### [` size `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.size>)

property size → int

Count of the number of items to be found at the indicated offset

#### [` type `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.type>)

property type → [lief.DEX.MapItem.TYPES](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES> "lief.DEX.MapItem.TYPES")

[`TYPES`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.MapItem.TYPES> "lief.DEX.MapItem.TYPES") of the item

---

## [Enums](<https://lief.re/doc/latest/formats/android/dex/python.html#enums>)

### [Access Flags](<https://lief.re/doc/latest/formats/android/dex/python.html#access-flags>)

#### [` lief.DEX.ACCESS_FLAGS `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS>)

class lief.DEX.ACCESS\_FLAGS(*\*values*)

Bases: `Enum`

##### [` ABSTRACT `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.ABSTRACT>)

ABSTRACT = 1024

##### [` ANNOTATION `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.ANNOTATION>)

ANNOTATION = 8192

##### [` BRIDGE `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.BRIDGE>)

BRIDGE = 64

##### [` CONSTRUCTOR `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.CONSTRUCTOR>)

CONSTRUCTOR = 65536

##### [` DECLARED_SYNCHRONIZED `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.DECLARED_SYNCHRONIZED>)

DECLARED\_SYNCHRONIZED = 131072

##### [` ENUM `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.ENUM>)

ENUM = 16384

##### [` FINAL `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.FINAL>)

FINAL = 16

##### [` INTERFACE `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.INTERFACE>)

INTERFACE = 512

##### [` NATIVE `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.NATIVE>)

NATIVE = 256

##### [` PRIVATE `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.PRIVATE>)

PRIVATE = 2

##### [` PROTECTED `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.PROTECTED>)

PROTECTED = 4

##### [` PUBLIC `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.PUBLIC>)

PUBLIC = 1

##### [` STATIC `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.STATIC>)

STATIC = 8

##### [` STRICT `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.STRICT>)

STRICT = 2048

##### [` SYNCHRONIZED `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.SYNCHRONIZED>)

SYNCHRONIZED = 32

##### [` SYNTHETIC `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.SYNTHETIC>)

SYNTHETIC = 4096

##### [` TRANSIENT `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.TRANSIENT>)

TRANSIENT = 128

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.UNKNOWN>)

UNKNOWN = 0

##### [` VARARGS `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.VARARGS>)

VARARGS = 128

##### [` VOLATILE `](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.ACCESS_FLAGS.VOLATILE>)

VOLATILE = 64
