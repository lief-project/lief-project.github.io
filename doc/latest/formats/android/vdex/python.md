---
documentID: "1d84ffc4a58e840bb9c603fac05854a7e375bbbf90079bccf5eeaeef294fb56e"
docname: "formats/android/vdex/python"
title: "VDEX Python API - LIEF Documentation"
description: "VDEX Python API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/formats/android/vdex/python.html"
markdownURL: "https://lief.re/doc/latest/formats/android/vdex/python.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "eb7d3600c3d88944bb973ef2fa4dc028c335b83e73fcbcee9c7a9eabf44c7a3d"
---

# [Python](<https://lief.re/doc/latest/formats/android/vdex/python.html#python>)

## [Utilities](<https://lief.re/doc/latest/formats/android/vdex/python.html#utilities>)

### [` lief.is_vdexlief.is_vdex `](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.is_vdex>)

lief.is\_vdex(*\*args*) → bool

**lief.is\_vdex(*raw: collections.abc.Sequence[int]*) → bool**

Overloaded function.

1. `is_vdex(path: str) -> bool`

Check if the **file** given in parameter is a VDEX

2. `is_vdex(raw: collections.abc.Sequence[int]) -> bool`

Check if the **raw data** given in parameter is a VDEX

### [` lief.VDEX.versionlief.VDEX.version `](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.version>)

lief.VDEX.version(*\*args*) → int

**lief.VDEX.version(*raw: collections.abc.Sequence[int]*) → int**

Overloaded function.

1. `version(file: str) -> int`

Return the VDEX version of the **file** given in parameter

2. `version(raw: collections.abc.Sequence[int]) -> int`

Return the VDEX version of the **raw data** given in parameter

### [` lief.VDEX.android_version `](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.android_version>)

lief.VDEX.android\_version(*vdex\_version: int*) → [lief.Android.ANDROID\_VERSIONS](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS> "lief.Android.ANDROID_VERSIONS")

Return the [`ANDROID_VERSIONS`](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS> "lief.Android.ANDROID_VERSIONS") associated with the given VDEX version

---

## [Parser](<https://lief.re/doc/latest/formats/android/vdex/python.html#parser>)

### [` lief.VDEX.parselief.VDEX.parse `](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.parse>)

lief.VDEX.parse(*\*args*) → [lief.VDEX.File](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.File> "lief.VDEX.File") | None

**lief.VDEX.parse(*obj: str | io.IOBase | os.PathLike | bytes | list[int]*, *name: str = ''*) → [lief.\_lief.VDEX.File](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.File> "lief._lief.VDEX.File") | None**

Overloaded function.

1. `parse(filename: str) -> Optional[lief._lief.VDEX.File]`

Parse the given filename and return a [`File`](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.File> "lief.VDEX.File") object

2. `parse(obj: Union[str | io.IOBase | os.PathLike | bytes | list[int]], name: str = '') -> Optional[lief._lief.VDEX.File]`

---

## [File](<https://lief.re/doc/latest/formats/android/vdex/python.html#file>)

### [` lief.VDEX.File `](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.File>)

class lief.VDEX.File

Bases: `Object`

VDEX File representation

#### [` dex2dex_json_info `](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.File.dex2dex_json_info>)

property dex2dex\_json\_info → str

#### [` dex_files `](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.File.dex_files>)

property dex\_files → lief.OAT.Binary.it\_dex\_files

Return an iterator over [`File`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File> "lief.DEX.File")

#### [` header `](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.File.header>)

property header → [lief.VDEX.Header](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.Header> "lief.VDEX.Header")

Return the VDEX [`Header`](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.Header> "lief.VDEX.Header")

---

## [Header](<https://lief.re/doc/latest/formats/android/vdex/python.html#header>)

### [` lief.VDEX.Header `](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.Header>)

class lief.VDEX.Header

Bases: `Object`

VDEX Header representation

#### [` dex_size `](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.Header.dex_size>)

property dex\_size → int

Size of **all** [`File`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File> "lief.DEX.File")

#### [` magic `](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.Header.magic>)

property magic → list[int]

Magic value used to identify VDEX

#### [` nb_dex_files `](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.Header.nb_dex_files>)

property nb\_dex\_files → int

Number of [`File`](<https://lief.re/doc/latest/formats/android/dex/python.html#lief.DEX.File> "lief.DEX.File") files registered

#### [` quickening_info_size `](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.Header.quickening_info_size>)

property quickening\_info\_size → int

Size of quickening info section

#### [` verifier_deps_size `](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.Header.verifier_deps_size>)

property verifier\_deps\_size → int

Size of verifier deps section

#### [` version `](<https://lief.re/doc/latest/formats/android/vdex/python.html#lief.VDEX.Header.version>)

property version → int

VDEX version number
