---
documentID: "8526e79645ff813633df72e443e8ec7b697331f8c7d9511401e5e0d19a9f05eb"
docname: "extended/dsc/python"
title: "Dyld Shared Cache Python API - LIEF Documentation"
description: "Dyld Shared Cache Python API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/extended/dsc/python.html"
markdownURL: "https://lief.re/doc/latest/extended/dsc/python.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "b71d9fc9e9baafbc212b3a6098db2d061c44464e732af83ea5ab337a2ab4c6de"
---

# [Python](<https://lief.re/doc/latest/extended/dsc/python.html#python>)

## [` lief.dsc.loadlief.dsc.load `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.load>)

lief.dsc.load(*\*args*) → [lief.dsc.DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache> "lief.dsc.DyldSharedCache") | None

**lief.dsc.load(*path: str | os.PathLike*, *arch: str = ''*) → [lief.\_lief.dsc.DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache> "lief._lief.dsc.DyldSharedCache") | None**

Overloaded function.

1. `load(files: collections.abc.Sequence[str]) -> Optional[lief._lief.dsc.DyldSharedCache]`

   > Load a shared cache from a list of files.
   >
   > ```python
   > files = [
   >   "/tmp/dsc/dyld_shared_cache_arm64e",
   >   "/tmp/dsc/dyld_shared_cache_arm64e.1"
   > ]
   > cache = lief.dsc.load(files)
   > ```
2. `load(path: Union[str | os.PathLike], arch: str = '') -> Optional[lief._lief.dsc.DyldSharedCache]`

   > Load a shared cache from a single file or from a directory specified by the `path` parameter.
   >
   > In the case where multiple architectures are available in the `path` directory, the `arch` parameter can be used to define which architecture should be preferred.
   >
   > **Example:**
   >
   > ```python
   > # From a directory (split caches)
   > cache = lief.dsc.load("vision-pro-2.0/")
   >
   > # From a single cache file
   > cache = lief.dsc.load("ios-14.2/dyld_shared_cache_arm64")
   >
   > # From a directory with multiple architectures
   > cache = lief.dsc.load("macos-12.6/", "x86_64h")
   > ```

## [Cache Processing](<https://lief.re/doc/latest/extended/dsc/python.html#cache-processing>)

> **Warning**
> 
> If you aim at extracting several libraries from a dyld shared cache, it is **highly** recommended to enable caching. Otherwise, performances can be impacted.

### [` lief.dsc.enable_cachelief.dsc.enable_cache `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.enable_cache>)

lief.dsc.enable\_cache(*\*args*) → bool

**lief.dsc.enable\_cache(*target\_cache\_dir: str | os.PathLike*) → bool**

Overloaded function.

1. `enable_cache() -> bool`

   > Enable globally cache/memoization. One can also leverage this function by setting the environment variable `DYLDSC_ENABLE_CACHE` to `1`
   >
   > By default, LIEF will use the directory specified by the environment variable `DYLDSC_CACHE_DIR` as its cache-root directory:
   >
   > ```console
   > DYLDSC_ENABLE_CACHE=1 DYLDSC_CACHE_DIR=/tmp/my_dir python ./my-script.py
   > ```
   >
   > Otherwise, if `DYLDSC_CACHE_DIR` is not set, LIEF will use the following directory (in this priority):
   >
   > 1. System or user cache directory
   > > - macOS: `DARWIN_USER_TEMP_DIR` / `DARWIN_USER_CACHE_DIR` + `/dyld_shared_cache`
   > > - Linux: `${XDG_CACHE_HOME}/dyld_shared_cache`
   > > - Windows: `%LOCALAPPDATA%\dyld_shared_cache`
   >
   > 2. Home directory
   > > - macOS/Linux: `$HOME/.dyld_shared_cache`
   > > - Windows: `%USERPROFILE%\.dyld_shared_cache`
   >
   > See [`lief.dsc.DyldSharedCache.enable_caching()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.enable_caching> "lief.dsc.DyldSharedCache.enable_caching") for a finer granularity
2. `enable_cache(target_cache_dir: Union[str | os.PathLike]) -> bool`

   > Same behavior as the other `enable_cache()` function but using a user-provided cache directory instead of an inferred one.

## [DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/python.html#dyldsharedcache>)

### [` lief.dsc.DyldSharedCache `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache>)

class lief.dsc.DyldSharedCache

Bases: `object`

This class represents a dyld shared cache file.

#### [` ARCH `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.ARCH>)

class ARCH(*\*values*)

Bases: `Enum`

Architecture supported by the dyld shared cache

##### [` ARM64 `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.ARCH.ARM64>)

ARM64 = 7

##### [` ARM64E `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.ARCH.ARM64E>)

ARM64E = 8

##### [` ARMV5 `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.ARCH.ARMV5>)

ARMV5 = 4

##### [` ARMV6 `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.ARCH.ARMV6>)

ARMV6 = 5

##### [` ARMV7 `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.ARCH.ARMV7>)

ARMV7 = 6

##### [` I386 `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.ARCH.I386>)

I386 = 1

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.ARCH.UNKNOWN>)

UNKNOWN = 0

##### [` X86_64 `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.ARCH.X86_64>)

X86\_64 = 2

##### [` X86_64H `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.ARCH.X86_64H>)

X86\_64H = 3

#### [` PLATFORM `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM>)

class PLATFORM(*\*values*)

Bases: `Enum`

Platforms supported by the dyld shared cache

##### [` ANY `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM.ANY>)

ANY = 4294967295

##### [` BRIDGEOS `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM.BRIDGEOS>)

BRIDGEOS = 5

##### [` DRIVERKIT `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM.DRIVERKIT>)

DRIVERKIT = 10

##### [` FIRMWARE `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM.FIRMWARE>)

FIRMWARE = 13

##### [` IOS `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM.IOS>)

IOS = 2

##### [` IOSMAC `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM.IOSMAC>)

IOSMAC = 6

##### [` IOS_SIMULATOR `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM.IOS_SIMULATOR>)

IOS\_SIMULATOR = 7

##### [` MACOS `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM.MACOS>)

MACOS = 1

##### [` SEPOS `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM.SEPOS>)

SEPOS = 14

##### [` TVOS `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM.TVOS>)

TVOS = 3

##### [` TVOS_SIMULATOR `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM.TVOS_SIMULATOR>)

TVOS\_SIMULATOR = 8

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM.UNKNOWN>)

UNKNOWN = 0

##### [` VISIONOS `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM.VISIONOS>)

VISIONOS = 11

##### [` VISIONOS_SIMULATOR `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM.VISIONOS_SIMULATOR>)

VISIONOS\_SIMULATOR = 12

##### [` WATCHOS `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM.WATCHOS>)

WATCHOS = 4

##### [` WATCHOS_SIMULATOR `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM.WATCHOS_SIMULATOR>)

WATCHOS\_SIMULATOR = 9

#### [` VERSION `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.VERSION>)

class VERSION(*\*values*)

Bases: `Enum`

##### [` DYLD_1042_1 `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.VERSION.DYLD_1042_1>)

DYLD\_1042\_1 = 8

##### [` DYLD_1231_3 `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.VERSION.DYLD_1231_3>)

DYLD\_1231\_3 = 9

##### [` DYLD_1284_13 `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.VERSION.DYLD_1284_13>)

DYLD\_1284\_13 = 10

##### [` DYLD_195_5 `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.VERSION.DYLD_195_5>)

DYLD\_195\_5 = 2

##### [` DYLD_239_3 `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.VERSION.DYLD_239_3>)

DYLD\_239\_3 = 3

##### [` DYLD_360_14 `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.VERSION.DYLD_360_14>)

DYLD\_360\_14 = 4

##### [` DYLD_421_1 `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.VERSION.DYLD_421_1>)

DYLD\_421\_1 = 5

##### [` DYLD_832_7_1 `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.VERSION.DYLD_832_7_1>)

DYLD\_832\_7\_1 = 6

##### [` DYLD_940 `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.VERSION.DYLD_940>)

DYLD\_940 = 7

##### [` DYLD_95_3 `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.VERSION.DYLD_95_3>)

DYLD\_95\_3 = 1

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.VERSION.UNKNOWN>)

UNKNOWN = 0

##### [` UNRELEASED `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.VERSION.UNRELEASED>)

UNRELEASED = 11

#### [` arch `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.arch>)

property arch → [lief.dsc.DyldSharedCache.ARCH](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.ARCH> "lief.dsc.DyldSharedCache.ARCH")

Architecture targeted by this cache

#### [` arch_name `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.arch_name>)

property arch\_name → str

Name of the architecture targeted by this cache (`x86_64h`)

#### [` cache_for_address `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.cache_for_address>)

cache\_for\_address(*self*, *address: int*) → [lief.\_lief.dsc.DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache> "lief._lief.dsc.DyldSharedCache") | None

Find the sub-DyldSharedCache that wraps the given virtual address

#### [` disassemble `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.disassemble>)

disassemble(*self*, *arg: int*, */*) → Iterator[[lief.\_lief.assembly.Instruction](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief._lief.assembly.Instruction") | None]

Disassemble instructions at the provided virtual address.

This function returns an iterator over [`lief.assembly.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief.assembly.Instruction").

#### [` enable_caching `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.enable_caching>)

enable\_caching(*self*, *target\_dir: str*) → None

When enabled, this function allows to record and to keep in *cache*, dyld shared cache information that are costly to access.

For instance, GOT symbols, rebases information, stub symbols, …

It is **highly** recommended to enable this function when processing a dyld shared cache several times or when extracting a large number of [`lief.dsc.Dylib`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib> "lief.dsc.Dylib") with enhanced extraction options (e.g. [`lief.dsc.Dylib.extract_opt_t.fix_branches`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.extract_opt_t.fix_branches> "lief.dsc.Dylib.extract_opt_t.fix_branches"))

One can enable caching by calling this function:

```python
dyld_cache = lief.dsc.load("macos-15.0.1/");
dyld_cache.enable_caching("~/.cache/lief-dsc");
```

One can also enable this cache optimization **globally** using the function: [`lief.dsc.enable_cache()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.enable_cache> "lief.dsc.enable_cache") or by setting the environment variable `DYLDSC_ENABLE_CACHE` to 1.

#### [` filename `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.filename>)

property filename → str

Filename of the dyld shared file associated with this object.

For instance: `dyld_shared_cache_arm64e, dyld_shared_cache_arm64e.62.dyldlinkedit`

#### [` filepath `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.filepath>)

property filepath → str

Full path to the original dyld shared cache file associated with object (e.g. `/cache/visionos/dyld_shared_cache_arm64e.42`)

#### [` find_lib_from_name `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.find_lib_from_name>)

find\_lib\_from\_name(*self*, *name: str*) → [lief.\_lief.dsc.Dylib](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib> "lief._lief.dsc.Dylib") | None

Find the Dylib whose filename of [`lief.dsc.Dylib.path`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.path> "lief.dsc.Dylib.path") matches the provided name.

If multiple libraries have the same name (but with a different path), the **first one** matching the provided name is returned.

#### [` find_lib_from_path `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.find_lib_from_path>)

find\_lib\_from\_path(*self*, *path: str*) → [lief.\_lief.dsc.Dylib](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib> "lief._lief.dsc.Dylib") | None

Find the Dylib whose [`lief.dsc.Dylib.path`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.path> "lief.dsc.Dylib.path") matches the provided path.

#### [` find_lib_from_va `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.find_lib_from_va>)

find\_lib\_from\_va(*self*, *virtual\_address: int*) → [lief.\_lief.dsc.Dylib](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib> "lief._lief.dsc.Dylib") | None

Find the [`lief.dsc.Dylib`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib> "lief.dsc.Dylib") that encompasses the given virtual address. It returns `None` if a Dylib can’t be found.

#### [` find_subcache `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.find_subcache>)

find\_subcache(*self*, *filename: str*) → [lief.\_lief.dsc.DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache> "lief._lief.dsc.DyldSharedCache") | None

Try to find the DyldSharedCache associated with the filename given in the first parameter.

#### [` flush_cache `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.flush_cache>)

flush\_cache(*self*) → None

Flush internal information into the on-disk cache (see: [`enable_caching()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.enable_caching> "lief.dsc.DyldSharedCache.enable_caching"))

#### [` from_files `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.from_files>)

from\_files(*files: collections.abc.Sequence[str]*) → [lief.dsc.DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache> "lief.dsc.DyldSharedCache") | None = &lt;nanobind.nb\_func object&gt;

#### [` from_path `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.from_path>)

from\_path(*path: str*, *arch: str*) → [lief.dsc.DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache> "lief.dsc.DyldSharedCache") | None = &lt;nanobind.nb\_func object&gt;

#### [` get_content_from_va `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.get_content_from_va>)

get\_content\_from\_va(*self*, *addr: int*, *size: int*) → bytes

Return the content at the specified virtual address

#### [` has_subcaches `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.has_subcaches>)

property has\_subcaches → bool

True if the subcaches are associated with this cache

#### [` libraries `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.libraries>)

property libraries → collections.abc.Sequence[[lief.dsc.Dylib](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib> "lief.dsc.Dylib") | None]

Return a list-like of the [`Dylib`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib> "lief.dsc.Dylib") embedded in this dyld shared cache

#### [` load_address `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.load_address>)

property load\_address → int

Base address of this cache

#### [` main_cache `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.main_cache>)

property main\_cache → [lief.dsc.DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache> "lief.dsc.DyldSharedCache") | None

Return the principal dyld shared cache in the case of multiple subcaches

#### [` mapping_info `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.mapping_info>)

property mapping\_info → collections.abc.Sequence[[lief.dsc.MappingInfo](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.MappingInfo> "lief.dsc.MappingInfo") | None]

Return a list-like of the [`MappingInfo`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.MappingInfo> "lief.dsc.MappingInfo") embedded in this dyld shared cache

#### [` platform `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.platform>)

property platform → [lief.dsc.DyldSharedCache.PLATFORM](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.PLATFORM> "lief.dsc.DyldSharedCache.PLATFORM")

Platform targeted by this cache (e.g. vision-os)

#### [` subcaches `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.subcaches>)

property subcaches → collections.abc.Sequence[[lief.dsc.SubCache](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.SubCache> "lief.dsc.SubCache") | None]

Return a list-like of [`SubCache`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.SubCache> "lief.dsc.SubCache") embedded in this (main) dyld shared cache

#### [` va_to_offset `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.va_to_offset>)

va\_to\_offset(*self*, *virtual\_address: int*) → int | [lief.\_lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief._lief.lief_errors")

Convert the given virtual address into an offset.

> **Warning**
> 
> If the shared cache contains multiple subcaches, this function needs to be called on the targeted subcache. See `cache_for_address()` to find the associated subcache.

#### [` version `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.version>)

property version → [lief.dsc.DyldSharedCache.VERSION](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.VERSION> "lief.dsc.DyldSharedCache.VERSION")

Version of dyld used by this cache

## [Dylib](<https://lief.re/doc/latest/extended/dsc/python.html#dylib>)

### [` lief.dsc.Dylib `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib>)

class lief.dsc.Dylib

Bases: `object`

This class represents a library embedded in a dyld shared cache. It mirrors the original `dyld_cache_image_info` structure.

#### [` address `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.address>)

property address → int

In-memory address of the library

#### [` extract_opt_t `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.extract_opt_t>)

class extract\_opt\_t(*self*)

Bases: `object`

This structure is used to tweak the extraction process while calling [`lief.dsc.Dylib.get()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.get> "lief.dsc.Dylib.get"). These options allow to deoptimize the dylib and get an accurate representation of the original Mach-O binary.

##### [` create_dyld_chained_fixup_cmd `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.extract_opt_t.create_dyld_chained_fixup_cmd>)

property create\_dyld\_chained\_fixup\_cmd → bool

Whether the `LC_DYLD_CHAINED_FIXUPS` command should be (re)created.

If this value is not set, LIEF will add the command only if it’s meaningful regarding the other options

##### [` fix_branches `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.extract_opt_t.fix_branches>)

property fix\_branches → bool

Fix call instructions that target addresses outside the current dylib virtual space.

> **Warning**
> 
> Enabling this option can have a significant impact on the performances. Make sure to enable the internal cache mechanism: [`lief.dsc.enable_cache()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.enable_cache> "lief.dsc.enable_cache") or [`lief.dsc.DyldSharedCache.enable_caching()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.enable_caching> "lief.dsc.DyldSharedCache.enable_caching")

##### [` fix_memory `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.extract_opt_t.fix_memory>)

property fix\_memory → bool

Fix memory accesses performed outside the dylib’s virtual space

> **Warning**
> 
> Enabling this option can have a significant impact on the performances. Make sure to enable the internal cache mechanism: [`lief.dsc.enable_cache()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.enable_cache> "lief.dsc.enable_cache") or [`lief.dsc.DyldSharedCache.enable_caching()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.enable_caching> "lief.dsc.DyldSharedCache.enable_caching")

##### [` fix_objc `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.extract_opt_t.fix_objc>)

property fix\_objc → bool

Fix Objective-C information

> **Warning**
> 
> Enabling this option can have a significant impact on the performances. Make sure to enable the internal cache mechanism: [`lief.dsc.enable_cache()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.enable_cache> "lief.dsc.enable_cache") or [`lief.dsc.DyldSharedCache.enable_caching()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.enable_caching> "lief.dsc.DyldSharedCache.enable_caching")

##### [` fix_relocations `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.extract_opt_t.fix_relocations>)

property fix\_relocations → bool

Recover and fix relocations

> **Warning**
> 
> Enabling this option can have a significant impact on the performances. Make sure to enable the internal cache mechanism: [`lief.dsc.enable_cache()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.enable_cache> "lief.dsc.enable_cache") or [`lief.dsc.DyldSharedCache.enable_caching()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.enable_caching> "lief.dsc.DyldSharedCache.enable_caching")

##### [` pack `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.extract_opt_t.pack>)

property pack → bool

Whether the segment’s offsets should be packed to avoid an in-memory size while writing back the binary.

> **Note**
> 
> This option does not have an impact on the performances

#### [` get `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.get>)

get(*self*, *opt: [lief.\_lief.dsc.Dylib.extract\_opt\_t](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.extract_opt_t> "lief._lief.dsc.Dylib.extract_opt_t") = &lt;lief.\_lief.dsc.Dylib.extract\_opt\_t object at 0x7f360af7d350&gt;*) → [lief.\_lief.MachO.Binary](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief._lief.MachO.Binary") | None

Get a [`lief.MachO.Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief.MachO.Binary") representation for this Dylib.

One can use this function to write back the Mach-O binary on the disk:

```python
dyld_cache: lief.dsc.DyldSharedCache = ...
dyld_cache.libraries[10].get().write("libsystem.dylib")
```

#### [` inode `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.inode>)

property inode → int

File serial number matching `stat.st_ino` or 0

Note that for shared cache targeting iOS, this value can hold a hash of the path (if modtime is set to 0)

#### [` modtime `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.modtime>)

property modtime → int

Modification time of the library matching `stat.st_mtime`, or 0

#### [` padding `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.padding>)

property padding → int

Padding alignment value (should be 0)

#### [` path `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.path>)

property path → str

Original path of the library (e.g. `/usr/lib/libcryptex.dylib`)

## [MappingInfo](<https://lief.re/doc/latest/extended/dsc/python.html#mappinginfo>)

### [` lief.dsc.MappingInfo `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.MappingInfo>)

class lief.dsc.MappingInfo

Bases: `object`

This class represents a `dyld_cache_mapping_info` entry.

It provides information about the relationship between on-disk shared cache and in-memory shared cache.

#### [` address `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.MappingInfo.address>)

property address → int

The in-memory address where this dyld shared cache region is mapped

#### [` end_address `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.MappingInfo.end_address>)

property end\_address → int

End virtual address of the region

#### [` file_offset `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.MappingInfo.file_offset>)

property file\_offset → int

On-disk file offset

#### [` init_prot `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.MappingInfo.init_prot>)

property init\_prot → int

Initial memory protection

#### [` max_prot `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.MappingInfo.max_prot>)

property max\_prot → int

Max memory protection

#### [` size `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.MappingInfo.size>)

property size → int

Size of the region being mapped

## [SubCache](<https://lief.re/doc/latest/extended/dsc/python.html#subcache>)

### [` lief.dsc.SubCache `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.SubCache>)

class lief.dsc.SubCache

Bases: `object`

This class represents a subcache in the case of large/split dyld shared cache.

It mirror (and abstracts) the original `dyld_subcache_entry` / `dyld_subcache_entry_v1`

#### [` cache `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.SubCache.cache>)

property cache → [lief.dsc.DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache> "lief.dsc.DyldSharedCache") | None

The associated [`DyldSharedCache`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache> "lief.dsc.DyldSharedCache") object for this subcache

#### [` suffix `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.SubCache.suffix>)

property suffix → str

The file name suffix of the subCache file (e.g. `.25.data`, `.03.development`)

#### [` uuid `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.SubCache.uuid>)

property uuid → list[int]

The uuid of the subcache file

#### [` vm_offset `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.SubCache.vm_offset>)

property vm\_offset → int

The offset of this subcache from the main cache base address

## [Utilities](<https://lief.re/doc/latest/extended/dsc/python.html#utilities>)

### [` lief.is_shared_cache `](<https://lief.re/doc/latest/extended/dsc/python.html#lief.is_shared_cache>)

lief.is\_shared\_cache(*file: str | os.PathLike*) → bool

Check if the given file is a dyld shared cache
