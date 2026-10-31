---
documentID: "2143a597977c7c2186fed2f4ea4444ef4d333c9504d1a90a46c10a9e56d8b7c9"
docname: "formats/android/art/python"
title: "ART Python API - LIEF Documentation"
description: "ART Python API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/formats/android/art/python.html"
markdownURL: "https://lief.re/doc/latest/formats/android/art/python.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "68037f5852582fefea05bcb9a7f599285c6c7923de4bbb8f74e25f8576d0c2e2"
---

# [Python](<https://lief.re/doc/latest/formats/android/art/python.html#python>)

## [Utilities](<https://lief.re/doc/latest/formats/android/art/python.html#utilities>)

### [` lief.is_artlief.is_art `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.is_art>)

lief.is\_art(*\*args*) → bool

**lief.is\_art(*raw: collections.abc.Sequence[int]*) → bool**

Overloaded function.

1. `is_art(path: str) -> bool`

Check if the **file** given in parameter is an ART

2. `is_art(raw: collections.abc.Sequence[int]) -> bool`

Check if the **raw data** given in parameter is an ART

### [` lief.ART.versionlief.ART.version `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.version>)

lief.ART.version(*\*args*) → int

**lief.ART.version(*raw: collections.abc.Sequence[int]*) → int**

Overloaded function.

1. `version(file: str) -> int`

Return the ART version of the **file** given in parameter

2. `version(raw: collections.abc.Sequence[int]) -> int`

Return the ART version of the **raw data** given in parameter

### [` lief.ART.android_version `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.android_version>)

lief.ART.android\_version(*art\_version: int*) → [lief.Android.ANDROID\_VERSIONS](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS> "lief.Android.ANDROID_VERSIONS")

Return the [`ANDROID_VERSIONS`](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS> "lief.Android.ANDROID_VERSIONS") associated with the given ART version

---

## [Parser](<https://lief.re/doc/latest/formats/android/art/python.html#parser>)

### [` lief.ART.parselief.ART.parselief.ART.parse `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.parse>)

lief.ART.parse(*\*args*) → [lief.ART.File](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.File> "lief.ART.File") | None

**lief.ART.parse(*raw: collections.abc.Sequence[int]*, *name: str = ''*) → [lief.\_lief.ART.File](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.File> "lief._lief.ART.File") | None

**lief.ART.parse(*obj: str | io.IOBase | os.PathLike | bytes | list[int]*, *name: str = ''*) → [lief.\_lief.ART.File](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.File> "lief._lief.ART.File") | None****

Overloaded function.

1. `parse(filename: str) -> Optional[lief._lief.ART.File]`

Parse the given filename and return an [`File`](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.File> "lief.ART.File") object

2. `parse(raw: collections.abc.Sequence[int], name: str = '') -> Optional[lief._lief.ART.File]`

Parse the given raw data and return an [`File`](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.File> "lief.ART.File") object

3. `parse(obj: Union[str | io.IOBase | os.PathLike | bytes | list[int]], name: str = '') -> Optional[lief._lief.ART.File]`

---

## [File](<https://lief.re/doc/latest/formats/android/art/python.html#file>)

### [` lief.ART.File `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.File>)

class lief.ART.File

Bases: `Object`

ART File representation

#### [` header `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.File.header>)

property header → [lief.ART.Header](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header> "lief.ART.Header")

Return the ART [`Header`](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header> "lief.ART.Header")

---

## [Header](<https://lief.re/doc/latest/formats/android/art/python.html#header>)

### [` lief.ART.Header `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header>)

class lief.ART.Header

Bases: `Object`

ART Header representation

#### [` boot_image_begin `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.boot_image_begin>)

property boot\_image\_begin → int

#### [` boot_image_size `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.boot_image_size>)

property boot\_image\_size → int

#### [` boot_oat_begin `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.boot_oat_begin>)

property boot\_oat\_begin → int

#### [` boot_oat_size `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.boot_oat_size>)

property boot\_oat\_size → int

#### [` compile_pic `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.compile_pic>)

property compile\_pic → bool

#### [` data_size `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.data_size>)

property data\_size → int

#### [` image_begin `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.image_begin>)

property image\_begin → int

#### [` image_roots `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.image_roots>)

property image\_roots → int

#### [` image_size `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.image_size>)

property image\_size → int

#### [` magic `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.magic>)

property magic → list[int]

#### [` nb_methods `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.nb_methods>)

property nb\_methods → int

#### [` nb_sections `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.nb_sections>)

property nb\_sections → int

#### [` oat_checksum `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.oat_checksum>)

property oat\_checksum → int

#### [` oat_data_end `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.oat_data_end>)

property oat\_data\_end → int

#### [` oat_file_begin `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.oat_file_begin>)

property oat\_file\_begin → int

#### [` oat_file_end `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.oat_file_end>)

property oat\_file\_end → int

#### [` patch_delta `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.patch_delta>)

property patch\_delta → int

#### [` pointer_size `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.pointer_size>)

property pointer\_size → int

#### [` storage_mode `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.storage_mode>)

property storage\_mode → lief.ART.STORAGE\_MODES

#### [` version `](<https://lief.re/doc/latest/formats/android/art/python.html#lief.ART.Header.version>)

property version → int
