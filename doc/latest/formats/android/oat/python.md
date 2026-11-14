---
documentID: "d517a05bb56f618f6d904bfd3eaa720986cb60ae327907dc70a117c97788098e"
docname: "formats/android/oat/python"
title: "OAT Python API - LIEF Documentation"
description: "OAT Python API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/formats/android/oat/python.html"
markdownURL: "https://lief.re/doc/latest/formats/android/oat/python.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "99e3d7554395d63dc8051c0ed3e24606345970b2c21b8a1fd251a547aeaf2174"
---

# [Python](<https://lief.re/doc/latest/formats/android/oat/python.html#python>)

## [Utilities](<https://lief.re/doc/latest/formats/android/oat/python.html#utilities>)

### [` lief.is_oatlief.is_oatlief.is_oat `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.is_oat>)

lief.is\_oat(*\*args*) → bool

**lief.is\_oat(*path: str*) → bool

**lief.is\_oat(*raw: collections.abc.Sequence[int]*) → bool****

Overloaded function.

1. `is_oat(binary: lief._lief.ELF.Binary) -> bool`

Check if the [`Binary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief.ELF.Binary") given in parameter is an OAT

2. `is_oat(path: str) -> bool`

Check if the **file** given in parameter is an OAT

3. `is_oat(raw: collections.abc.Sequence[int]) -> bool`

Check if the **raw data** given in parameter is an OAT

### [` lief.OAT.versionlief.OAT.versionlief.OAT.version `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.version>)

lief.OAT.version(*\*args*) → int

**lief.OAT.version(*file: str*) → int

**lief.OAT.version(*raw: collections.abc.Sequence[int]*) → int****

Overloaded function.

1. `version(binary: lief._lief.ELF.Binary) -> int`

Return the OAT version of the [`Binary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief.ELF.Binary") given in parameter

2. `version(file: str) -> int`

Return the OAT version of the **file** given in parameter

3. `version(raw: collections.abc.Sequence[int]) -> int`

Return the OAT version of the **raw data** given in parameter

### [` lief.OAT.android_version `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.android_version>)

lief.OAT.android\_version(*arg: int*) → [lief.Android.ANDROID\_VERSIONS](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS> "lief.Android.ANDROID_VERSIONS")

Return the [`ANDROID_VERSIONS`](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS> "lief.Android.ANDROID_VERSIONS") associated with the given OAT version

---

## [Parser](<https://lief.re/doc/latest/formats/android/oat/python.html#parser>)

### [` lief.OAT.parselief.OAT.parselief.OAT.parselief.OAT.parse `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.parse>)

lief.OAT.parse(*\*args*) → [lief.OAT.Binary](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary> "lief.OAT.Binary") | None

**lief.OAT.parse(*oat\_file: str*, *vdex\_file: str*) → [lief.\_lief.OAT.Binary](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary> "lief._lief.OAT.Binary") | None

**lief.OAT.parse(*raw: collections.abc.Sequence[int]*) → [lief.\_lief.OAT.Binary](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary> "lief._lief.OAT.Binary") | None

**lief.OAT.parse(*obj: str | io.IOBase | os.PathLike | bytes | list[int]*) → [lief.\_lief.OAT.Binary](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary> "lief._lief.OAT.Binary") | None******

Overloaded function.

1. `parse(oat_file: str) -> Optional[lief._lief.OAT.Binary]`

Parse the given OAT file and return a [`Binary`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary> "lief.OAT.Binary") object

2. `parse(oat_file: str, vdex_file: str) -> Optional[lief._lief.OAT.Binary]`

Parse the given OAT with its VDEX file and return a [`Binary`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary> "lief.OAT.Binary") object

3. `parse(raw: collections.abc.Sequence[int]) -> Optional[lief._lief.OAT.Binary]`

Parse the given raw data and return a [`Binary`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary> "lief.OAT.Binary") object

4. `parse(obj: Union[str | io.IOBase | os.PathLike | bytes | list[int]]) -> Optional[lief._lief.OAT.Binary]`

---

## [Binary](<https://lief.re/doc/latest/formats/android/oat/python.html#binary>)

### [` lief.OAT.Binary `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary>)

class lief.OAT.Binary

Bases: [`Binary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief._lief.ELF.Binary")

OAT binary representation

#### [` classes `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary.classes>)

property classes → lief.OAT.Binary.it\_classes

Return an iterator over [`Class`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class> "lief.OAT.Class")

#### [` dex2dex_json_info `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary.dex2dex_json_info>)

property dex2dex\_json\_info → str

#### [` dex_files `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary.dex_files>)

property dex\_files → lief.OAT.Binary.it\_dex\_files

Return an iterator over [`File`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File> "lief.DEX.File")

#### [` get_classget_class `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary.get_class>)

get\_class(*self*, *class\_name: str*) → [lief.\_lief.OAT.Class](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class> "lief._lief.OAT.Class") | None

**get\_class(*self*, *class\_index: int*) → [lief.\_lief.OAT.Class](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class> "lief._lief.OAT.Class") | None**

Overloaded function.

1. `get_class(self, class_name: str) -> lief._lief.OAT.Class | None`

Return the [`Class`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class> "lief.OAT.Class") from its name

2. `get_class(self, class_index: int) -> lief._lief.OAT.Class | None`

Return the [`Class`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class> "lief.OAT.Class") from its **index**

#### [` has_class `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary.has_class>)

has\_class(*self*, *arg: str*, */*) → bool

Check if the class with the given name is present in the current OAT binary

#### [` header `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary.header>)

property header → [lief.OAT.Header](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header> "lief.OAT.Header")

Return the OAT [`Header`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header> "lief.OAT.Header")

#### [` methods `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary.methods>)

property methods → lief.OAT.Binary.it\_methods

Return an iterator over [`Method`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Method> "lief.OAT.Method")

#### [` oat_dex_files `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary.oat_dex_files>)

property oat\_dex\_files → lief.OAT.Binary.it\_oat\_dex\_files

Return an iterator over [`DexFile`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.DexFile> "lief.OAT.DexFile")

---

## [Header](<https://lief.re/doc/latest/formats/android/oat/python.html#header>)

### [` lief.OAT.Header `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header>)

class lief.OAT.Header(*self*)

Bases: `Object`

OAT Header representation

#### [` checksum `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.checksum>)

property checksum → int

Checksum of the OAT file

#### [` element_t `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.element_t>)

class element\_t

Bases: `object`

##### [` key `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.element_t.key>)

property key → [lief.OAT.HEADER\_KEYS](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS> "lief.OAT.HEADER_KEYS")

##### [` value `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.element_t.value>)

property value → str

#### [` executable_offset `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.executable_offset>)

property executable\_offset → int

#### [` get `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.get>)

get(*self*, *key: [lief.\_lief.OAT.HEADER\_KEYS](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS> "lief._lief.OAT.HEADER_KEYS")*) → str

#### [` i2c_code_bridge_offset `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.i2c_code_bridge_offset>)

property i2c\_code\_bridge\_offset → int

#### [` i2i_bridge_offset `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.i2i_bridge_offset>)

property i2i\_bridge\_offset → int

#### [` image_file_location_oat_checksum `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.image_file_location_oat_checksum>)

property image\_file\_location\_oat\_checksum → int

#### [` image_file_location_oat_data_begin `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.image_file_location_oat_data_begin>)

property image\_file\_location\_oat\_data\_begin → int

#### [` image_patch_delta `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.image_patch_delta>)

property image\_patch\_delta → int

#### [` instruction_set `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.instruction_set>)

property instruction\_set → [lief.OAT.INSTRUCTION\_SETS](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.INSTRUCTION_SETS> "lief.OAT.INSTRUCTION_SETS")

List of [`INSTRUCTION_SETS`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.INSTRUCTION_SETS> "lief.OAT.INSTRUCTION_SETS")

#### [` jni_dlsym_lookup_offset `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.jni_dlsym_lookup_offset>)

property jni\_dlsym\_lookup\_offset → int

#### [` key_value_size `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.key_value_size>)

property key\_value\_size → int

#### [` key_values `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.key_values>)

property key\_values → lief.OAT.Header.it\_key\_values\_t

Configuration used for the `dex2oat` transformation

#### [` keys `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.keys>)

property keys → list[[lief.OAT.HEADER\_KEYS](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS> "lief.OAT.HEADER_KEYS")]

List of [`HEADER_KEYS`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS> "lief.OAT.HEADER_KEYS") present

#### [` magic `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.magic>)

property magic → list[int]

Magic number which shoud be `oat\x0A`

#### [` nb_dex_files `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.nb_dex_files>)

property nb\_dex\_files → int

Number of [`lief.DEX.File`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File> "lief.DEX.File") registered in the current OAT

#### [` oat_dex_files_offset `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.oat_dex_files_offset>)

property oat\_dex\_files\_offset → int

Offset to the raw `lief.OAT.Dexfile`

> **Warning**
> 
> This attribute is only relevant for OAT for which the version is above 131

#### [` quick_generic_jni_trampoline_offset `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.quick_generic_jni_trampoline_offset>)

property quick\_generic\_jni\_trampoline\_offset → int

#### [` quick_imt_conflict_trampoline_offset `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.quick_imt_conflict_trampoline_offset>)

property quick\_imt\_conflict\_trampoline\_offset → int

#### [` quick_resolution_trampoline_offset `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.quick_resolution_trampoline_offset>)

property quick\_resolution\_trampoline\_offset → int

#### [` quick_to_interpreter_bridge_offset `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.quick_to_interpreter_bridge_offset>)

property quick\_to\_interpreter\_bridge\_offset → int

#### [` set `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.set>)

set(*self*, *key: [lief.\_lief.OAT.HEADER\_KEYS](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS> "lief._lief.OAT.HEADER_KEYS")*, *value: str*) → [lief.\_lief.OAT.Header](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header> "lief._lief.OAT.Header")

#### [` values `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.values>)

property values → list[str]

List of values associated with [`keys`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.keys> "lief.OAT.Header.keys")

#### [` version `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Header.version>)

property version → int

Underlying version of the OAT file

---

## [DexFile](<https://lief.re/doc/latest/formats/android/oat/python.html#dexfile>)

### [` lief.OAT.DexFile `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.DexFile>)

class lief.OAT.DexFile(*self*)

Bases: `Object`

OAT DexFile representation

#### [` checksum `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.DexFile.checksum>)

property checksum → int

Checksum of the underlying DEX file

#### [` dex_file `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.DexFile.dex_file>)

property dex\_file → [lief.DEX.File](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File> "lief.DEX.File") | None

Associated [`lief.DEX.File`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File> "lief.DEX.File")

#### [` dex_offset `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.DexFile.dex_offset>)

property dex\_offset → int

Offset to the raw [`lief.DEX.File`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File> "lief.DEX.File")

#### [` has_dex_file `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.DexFile.has_dex_file>)

property has\_dex\_file → bool

Check if the [`lief.DEX.File`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File> "lief.DEX.File") is present

#### [` location `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.DexFile.location>)

property location → str

Original location of the DEX file

---

## [Class](<https://lief.re/doc/latest/formats/android/oat/python.html#class>)

### [` lief.OAT.Class `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class>)

class lief.OAT.Class(*self*)

Bases: `Object`

OAT Class representation

#### [` bitmap `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class.bitmap>)

property bitmap → list[int]

Bitmap information used to quickly find which methods are optimized

#### [` fullname `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class.fullname>)

property fullname → str

Class mangled name (e.g. `Lcom/android/MyActivity;`)

#### [` has_dex_class `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class.has_dex_class>)

has\_dex\_class(*self*) → bool

True if a [`lief.DEX.Class`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Class> "lief.DEX.Class") object is associated with this **OAT** Class

#### [` index `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class.index>)

property index → int

Index the **DEX** classes pool ([`lief.DEX.File.classes`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File.classes> "lief.DEX.File.classes"))

#### [` is_quickenedis_quickened `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class.is_quickened>)

is\_quickened(*self*, *dex\_method: [lief.\_lief.DEX.Method](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method> "lief._lief.DEX.Method")*) → bool

**is\_quickened(*self*, *method\_index: int*) → bool**

Overloaded function.

1. `is_quickened(self, dex_method: lief._lief.DEX.Method) -> bool`

Check if the given [`lief.DEX.Method`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method> "lief.DEX.Method") is compiled into native code

2. `is_quickened(self, method_index: int) -> bool`

Check if the Method at the given index is compiled into native code

#### [` method_offsets_indexmethod_offsets_index `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class.method_offsets_index>)

method\_offsets\_index(*self*, *arg: [lief.\_lief.DEX.Method](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method> "lief._lief.DEX.Method")*, */*) → int

**method\_offsets\_index(*self*, *arg: int*, */*) → int**

#### [` methods `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class.methods>)

property methods → lief.OAT.Class.it\_methods

Iterator over [`lief.OAT.Method`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Method> "lief.OAT.Method")

#### [` status `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class.status>)

property status → [lief.OAT.OAT\_CLASS\_STATUS](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_STATUS> "lief.OAT.OAT_CLASS_STATUS")

Class [`OAT_CLASS_STATUS`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_STATUS> "lief.OAT.OAT_CLASS_STATUS")

#### [` type `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class.type>)

property type → [lief.OAT.OAT\_CLASS\_TYPES](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_TYPES> "lief.OAT.OAT_CLASS_TYPES")

Information ([`OAT_CLASS_TYPES`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_TYPES> "lief.OAT.OAT_CLASS_TYPES")) about how methods are optimized

---

## [Method](<https://lief.re/doc/latest/formats/android/oat/python.html#method>)

### [` lief.OAT.Method `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Method>)

class lief.OAT.Method(*self*)

Bases: `Object`

OAT Method representation

#### [` dex_method `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Method.dex_method>)

property dex\_method → [lief.DEX.Method](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method> "lief.DEX.Method") | None

Mirrored [`Method`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method> "lief.DEX.Method") associated with the OAT method (or None)

#### [` has_dex_method `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Method.has_dex_method>)

property has\_dex\_method → bool

Check if a [`Method`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.Method> "lief.DEX.Method") is associated with the OAT method

#### [` is_compiled `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Method.is_compiled>)

property is\_compiled → bool

True if the optimization is **native**

#### [` is_dex2dex_optimized `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Method.is_dex2dex_optimized>)

property is\_dex2dex\_optimized → bool

True if the optimization is **DEX**

#### [` name `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Method.name>)

property name → str

Method’s name

#### [` oat_class `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Method.oat_class>)

property oat\_class → [lief.OAT.Class](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class> "lief.OAT.Class") | None

[`Class`](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Class> "lief.OAT.Class") associated with the method (or None)

#### [` quick_code `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Method.quick_code>)

property quick\_code → list[int]

Quick code associated with the method

---

## [Enums](<https://lief.re/doc/latest/formats/android/oat/python.html#enums>)

### [OAT Class types](<https://lief.re/doc/latest/formats/android/oat/python.html#oat-class-types>)

#### [` lief.OAT.OAT_CLASS_TYPES `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_TYPES>)

class lief.OAT.OAT\_CLASS\_TYPES(*\*values*)

Bases: `Enum`

##### [` ALL_COMPILED `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_TYPES.ALL_COMPILED>)

ALL\_COMPILED = 0

##### [` NONE_COMPILED `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_TYPES.NONE_COMPILED>)

NONE\_COMPILED = 2

##### [` SOME_COMPILED `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_TYPES.SOME_COMPILED>)

SOME\_COMPILED = 1

---

### [OAT Class Status](<https://lief.re/doc/latest/formats/android/oat/python.html#oat-class-status>)

#### [` lief.OAT.OAT_CLASS_STATUS `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_STATUS>)

class lief.OAT.OAT\_CLASS\_STATUS(*\*values*)

Bases: `Enum`

##### [` ERROR `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_STATUS.ERROR>)

ERROR = -1

##### [` IDX `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_STATUS.IDX>)

IDX = 1

##### [` INITIALIZED `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_STATUS.INITIALIZED>)

INITIALIZED = 10

##### [` INITIALIZING `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_STATUS.INITIALIZING>)

INITIALIZING = 9

##### [` LOADED `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_STATUS.LOADED>)

LOADED = 2

##### [` NOTREADY `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_STATUS.NOTREADY>)

NOTREADY = 0

##### [` RESOLVED `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_STATUS.RESOLVED>)

RESOLVED = 4

##### [` RESOLVING `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_STATUS.RESOLVING>)

RESOLVING = 3

##### [` RETIRED `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_STATUS.RETIRED>)

RETIRED = -2

##### [` VERIFICATION_AT_RUNTIME `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_STATUS.VERIFICATION_AT_RUNTIME>)

VERIFICATION\_AT\_RUNTIME = 6

##### [` VERIFIED `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_STATUS.VERIFIED>)

VERIFIED = 8

##### [` VERIFYING `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_STATUS.VERIFYING>)

VERIFYING = 5

##### [` VERIFYING_AT_RUNTIME `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.OAT_CLASS_STATUS.VERIFYING_AT_RUNTIME>)

VERIFYING\_AT\_RUNTIME = 7

---

### [Header Keys](<https://lief.re/doc/latest/formats/android/oat/python.html#header-keys>)

#### [` lief.OAT.HEADER_KEYS `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS>)

class lief.OAT.HEADER\_KEYS(*\*values*)

Bases: `Enum`

##### [` BOOT_CLASS_PATH `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS.BOOT_CLASS_PATH>)

BOOT\_CLASS\_PATH = 9

##### [` CLASS_PATH `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS.CLASS_PATH>)

CLASS\_PATH = 8

##### [` COMPILER_FILTER `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS.COMPILER_FILTER>)

COMPILER\_FILTER = 7

##### [` CONCURRENT_COPYING `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS.CONCURRENT_COPYING>)

CONCURRENT\_COPYING = 10

##### [` DEBUGGABLE `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS.DEBUGGABLE>)

DEBUGGABLE = 5

##### [` DEX2OAT_CMD_LINE `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS.DEX2OAT_CMD_LINE>)

DEX2OAT\_CMD\_LINE = 1

##### [` DEX2OAT_HOST `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS.DEX2OAT_HOST>)

DEX2OAT\_HOST = 2

##### [` HAS_PATCH_INFO `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS.HAS_PATCH_INFO>)

HAS\_PATCH\_INFO = 4

##### [` IMAGE_LOCATION `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS.IMAGE_LOCATION>)

IMAGE\_LOCATION = 0

##### [` NATIVE_DEBUGGABLE `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS.NATIVE_DEBUGGABLE>)

NATIVE\_DEBUGGABLE = 6

##### [` PIC `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.HEADER_KEYS.PIC>)

PIC = 3

---

### [Instruction sets](<https://lief.re/doc/latest/formats/android/oat/python.html#instruction-sets>)

#### [` lief.OAT.INSTRUCTION_SETS `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.INSTRUCTION_SETS>)

class lief.OAT.INSTRUCTION\_SETS(*\*values*)

Bases: `Enum`

##### [` ARM `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.INSTRUCTION_SETS.ARM>)

ARM = 1

##### [` ARM_64 `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.INSTRUCTION_SETS.ARM_64>)

ARM\_64 = 2

##### [` MIPS `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.INSTRUCTION_SETS.MIPS>)

MIPS = 6

##### [` MIPS_64 `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.INSTRUCTION_SETS.MIPS_64>)

MIPS\_64 = 7

##### [` NONE `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.INSTRUCTION_SETS.NONE>)

NONE = 0

##### [` THUMB2 `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.INSTRUCTION_SETS.THUMB2>)

THUMB2 = 3

##### [` X86 `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.INSTRUCTION_SETS.X86>)

X86 = 4

##### [` X86_64 `](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.INSTRUCTION_SETS.X86_64>)

X86\_64 = 5
