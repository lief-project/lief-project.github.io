---
documentID: "6924d829b0dd6852baf34b6441ea5606133b947c530c38bd5c3238311b2a5b28"
docname: "api/utilities/index"
title: "Utilities - LIEF Documentation"
description: "Utilities. LIEF exposes a demangling API for the following formats:"
canonical: "https://lief.re/doc/latest/api/utilities/index.html"
markdownURL: "https://lief.re/doc/latest/api/utilities/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "70b78fc27af63d06ef9f4f404a4e9c0cf05b647854f0fcb5476a00f59afe76d1"
---

# [Utilities](<https://lief.re/doc/latest/api/utilities/index.html#utilities>)

## [Demangling](<https://lief.re/doc/latest/api/utilities/index.html#demangling>)

LIEF exposes a demangling API for the following formats:

**MSVC**

**Input**

```python
lief.demangle("?h@@YAXH@Z")
```

**Result**

```text
void __cdecl h(int)
```

**Rust**

**Input**

```python
lief.demangle("_RNvCskwGfYPst2Cb_3foo16example_function")
```

**Result**

```text
foo::example_function
```

**Itanium C++**

**Input**

```python
lief.demangle("_ZTSN3lld13SpecificAllocINS_4coff9TpiSourceEEE")
```

**Result**

```text
typeinfo name for lld::SpecificAlloc<lld::coff::TpiSource>
```

**Swift/Obj-C**

**Input**

```python
lief.demangle("_$s10Foundation4DataV15_RepresentationON")
```

**Result**

```text
type metadata for Foundation.Data._Representation
```

### [` LIEF::demangle `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF8demangleENSt11string_viewE>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;std::string&gt; LIEF::demangle(std::string\_view mangled)

Demangle the given input.

This function only works with the extended version of LIEF

### [` lief.demangle `](<https://lief.re/doc/latest/api/utilities/index.html#lief.demangle>)

lief.demangle(*mangled: str*) → str | None

Demangle the given input.

> **Warning**
> 
> This function only works with the extended version of LIEF

[`lief::demangle`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/fn.demangle.html>)

## [Extended Version](<https://lief.re/doc/latest/api/utilities/index.html#extended-version>)

To check if the current build is an [extended](<https://lief.re/doc/latest/extended/intro.html#extended-intro>) version, you can use:

### [` LIEF::is_extended `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF11is_extendedEv>)

bool LIEF::is\_extended()

Whether this version of LIEF includes extended features.

### [` lief._lief.__extended__ `](<https://lief.re/doc/latest/api/utilities/index.html#lief._lief.__extended__>)

lief.\_lief.\_\_extended\_\_ = False

Returns True when the argument is true, False otherwise. The builtins True and False are the only two instances of the class bool. The class bool is a subclass of the class int, and cannot be subclassed.

[`lief::is_extended`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/fn.is_extended.html>)

In C++, you can also check if `LIEF_EXTENDED` is defined:

```cpp
#include <LIEF/config.hpp>

#if defined(LIEF_EXTENDED)
// Extended version
#else
// Regular version
#endif
```

To get details about the version of the current extended build:

### [` LIEF::extended_version_info `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF21extended_version_infoEv>)

std::string LIEF::extended\_version\_info()

Details about the extended version.

## [Android Platform](<https://lief.re/doc/latest/api/utilities/index.html#android-platform>)

### [` lief.Android.code_name `](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.code_name>)

lief.Android.code\_name(*version: [lief.Android.ANDROID\_VERSIONS](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS> "lief.Android.ANDROID_VERSIONS")*) → str

Return the Android code associated with a [`ANDROID_VERSIONS`](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS> "lief.Android.ANDROID_VERSIONS").

For example: `Nougat`

### [` lief.Android.version_string `](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.version_string>)

lief.Android.version\_string(*version: [lief.Android.ANDROID\_VERSIONS](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS> "lief.Android.ANDROID_VERSIONS")*) → str

Return the [`ANDROID_VERSIONS`](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS> "lief.Android.ANDROID_VERSIONS") as a string.

For example: `7.0.1`

### [` lief.Android.ANDROID_VERSIONS `](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS>)

class lief.Android.ANDROID\_VERSIONS(*\*values*)

Bases: `Enum`

#### [` UNKNOWN `](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS.UNKNOWN>)

UNKNOWN = 0

#### [` VERSION_601 `](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS.VERSION_601>)

VERSION\_601 = 1

#### [` VERSION_700 `](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS.VERSION_700>)

VERSION\_700 = 2

#### [` VERSION_710 `](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS.VERSION_710>)

VERSION\_710 = 3

#### [` VERSION_712 `](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS.VERSION_712>)

VERSION\_712 = 4

#### [` VERSION_800 `](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS.VERSION_800>)

VERSION\_800 = 5

#### [` VERSION_810 `](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS.VERSION_810>)

VERSION\_810 = 6

#### [` VERSION_900 `](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS.VERSION_900>)

VERSION\_900 = 7

#### [` from_value `](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS.from_value>)

from\_value(*arg: int*) → [lief.Android.ANDROID\_VERSIONS](<https://lief.re/doc/latest/api/utilities/index.html#lief.Android.ANDROID_VERSIONS> "lief.Android.ANDROID_VERSIONS") = &lt;nanobind.nb\_func object&gt;

### [` LIEF::Android::code_name `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF7Android9code_nameE16ANDROID_VERSIONS>)

const char \*LIEF::Android::code\_name([ANDROID\_VERSIONS](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF7Android16ANDROID_VERSIONSE> "LIEF::Android::ANDROID_VERSIONS") version)

### [` LIEF::Android::version_string `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF7Android14version_stringE16ANDROID_VERSIONS>)

const char \*LIEF::Android::version\_string([ANDROID\_VERSIONS](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF7Android16ANDROID_VERSIONSE> "LIEF::Android::ANDROID_VERSIONS") version)

### [` LIEF::Android::ANDROID_VERSIONS `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF7Android16ANDROID_VERSIONSE>)

enum class LIEF::Android::ANDROID\_VERSIONS

*Values:*

#### [` VERSION_UNKNOWN `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF7Android16ANDROID_VERSIONS15VERSION_UNKNOWNE>)

enumerator VERSION\_UNKNOWN = 0

#### [` VERSION_601 `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF7Android16ANDROID_VERSIONS11VERSION_601E>)

enumerator VERSION\_601 = 1

#### [` VERSION_700 `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF7Android16ANDROID_VERSIONS11VERSION_700E>)

enumerator VERSION\_700 = 2

#### [` VERSION_710 `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF7Android16ANDROID_VERSIONS11VERSION_710E>)

enumerator VERSION\_710 = 3

#### [` VERSION_712 `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF7Android16ANDROID_VERSIONS11VERSION_712E>)

enumerator VERSION\_712 = 4

#### [` VERSION_800 `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF7Android16ANDROID_VERSIONS11VERSION_800E>)

enumerator VERSION\_800 = 5

#### [` VERSION_810 `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF7Android16ANDROID_VERSIONS11VERSION_810E>)

enumerator VERSION\_810 = 6

#### [` VERSION_900 `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF7Android16ANDROID_VERSIONS11VERSION_900E>)

enumerator VERSION\_900 = 7

## [Python Leaks](<https://lief.re/doc/latest/api/utilities/index.html#python-leaks>)

### [` lief.disable_leak_warning `](<https://lief.re/doc/latest/api/utilities/index.html#lief.disable_leak_warning>)

lief.disable\_leak\_warning() → None

Disable nanobind warnings about leaked objects. For instance:

```text
nanobind: leaked 45 instances!
nanobind: leaked 25 types!
 - leaked type "lief._lief.FORMATS"
 - ... skipped remainder
nanobind: leaked 201 functions!
 - leaked function ""
 - leaked function "export_symbol"
 - ... skipped remainder
nanobind: this is likely caused by a reference counting issue in the binding code.
```

## [Helpers](<https://lief.re/doc/latest/api/utilities/index.html#helpers>)

The `lief.dump()` utility can be used to pretty-print a buffer.

For example:

```python
pe = lief.PE.parse("some.exe")
assert isinstance(pe, lief.PE.Binary)

text = pe.get_section(".text")
assert isinstance(pe, lief.PE.Section)

print(lief.dump(text.content))
```

### [` lief.dumplief.dump `](<https://lief.re/doc/latest/api/utilities/index.html#lief.dump>)

lief.dump(*\*args*) → str

**lief.dump(*buffer: bytes*, *title: str = ''*, *prefix: str = ''*, *limit: int = 0*) → str**

Hexdump the provided buffer:

```text
+---------------------------------------------------------------------+
| 88 56 05 00 00 00 00 00 00 00 00 00 22 58 05 00  | .V.........."X.. |
| 10 71 02 00 78 55 05 00 00 00 00 00 00 00 00 00  | .q..xU.......... |
| 68 5c 05 00 00 70 02 00 00 00 00 00 00 00 00 00  | h\...p.......... |
| 00 00 00 00 00 00 00 00 00 00 00 00              | ............     |
+---------------------------------------------------------------------+
```

### [` LIEF::dump `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF4dumpERKNSt6vectorI7uint8_tEERKNSt6stringERKNSt6stringE6size_t>)

inline std::string LIEF::dump(const std::vector&lt;uint8\_t&gt; &amp;data, const std::string &amp;title = "", const std::string &amp;prefix = "", size\_t limit = 0)

### [` LIEF::dump `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF4dumpEPK7uint8_t6size_tRKNSt6stringERKNSt6stringE6size_t>)

std::string LIEF::dump(const uint8\_t \*buffer, size\_t size, const std::string &amp;title = "", const std::string &amp;prefix = "", size\_t limit = 0)

Hexdump the provided buffer.

For instance:

```text
+---------------------------------------------------------------------+
| 88 56 05 00 00 00 00 00 00 00 00 00 22 58 05 00  | .V.........."X.. |
| 10 71 02 00 78 55 05 00 00 00 00 00 00 00 00 00  | .q..xU.......... |
| 68 5c 05 00 00 70 02 00 00 00 00 00 00 00 00 00  | h\...p.......... |
| 00 00 00 00 00 00 00 00 00 00 00 00              | ............     |
+---------------------------------------------------------------------+
```

### [` LIEF::dump `](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF4dumpE4spanIK7uint8_tERKNSt6stringERKNSt6stringE6size_t>)

inline std::string LIEF::dump(span&lt;const uint8\_t&gt; data, const std::string &amp;title = "", const std::string &amp;prefix = "", size\_t limit = 0)

- [`lief::dump`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/fn.dump.html>)
- [`lief::dump_with_limit`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/fn.dump_with_limit.html>)
