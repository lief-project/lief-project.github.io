---
documentID: "1dacedc968429ba2ba47e5b9daf0ed1d492bdd2c414696821647ea1c1cb87f32"
docname: "extended/dsc/cpp"
title: "Dyld Shared Cache C++ API - LIEF Documentation"
description: "Dyld Shared Cache C++ API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/extended/dsc/cpp.html"
markdownURL: "https://lief.re/doc/latest/extended/dsc/cpp.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "ea526a360d569fa63b7d9af9cb9022d314617c8401c1feb9c9f8e4305d7d9e43"
---

# [C++](<https://lief.re/doc/latest/extended/dsc/cpp.html#c>)

> **Note**
> 
> You can also find the Doxygen documentation here: [here](<https://lief.re/doc/latest/doxygen/>)

## [` LIEF::dsc::load `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc4loadERKNSt6stringERKNSt6stringE>)

inline std::unique\_ptr&lt;[DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCacheE> "LIEF::dsc::DyldSharedCache")&gt; LIEF::dsc::load(const std::string &amp;path, const std::string &amp;arch = "")

Load a shared cache from a single file or from a directory specified by the `path` parameter.

In the case where multiple architectures are available in the `path` directory, the `arch` parameter can be used to define which architecture should be preferred.

**Example:**

```cpp
// From a directory (split caches)
auto cache = LIEF::dsc::load("vision-pro-2.0/");

// From a single cache file
auto cache = LIEF::dsc::load("ios-14.2/dyld_shared_cache_arm64");

// From a directory with multiple architectures
auto cache = LIEF::dsc::load("macos-12.6/", /*arch=*&zwj;/"x86_64h");
```

## [` LIEF::dsc::load `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc4loadERKNSt6vectorINSt6stringEEE>)

inline std::unique\_ptr&lt;[DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCacheE> "LIEF::dsc::DyldSharedCache")&gt; LIEF::dsc::load(const std::vector&lt;std::string&gt; &amp;files)

Load a shared cache from a list of files.

```cpp
std::vector<std::string> files = {
  "/tmp/dsc/dyld_shared_cache_arm64e",
  "/tmp/dsc/dyld_shared_cache_arm64e.1"
};
auto cache = LIEF::dsc::load(files);
```

## [Cache Processing](<https://lief.re/doc/latest/extended/dsc/cpp.html#cache-processing>)

> **Warning**
> 
> If you aim at extracting several libraries from a dyld shared cache, it is **highly** recommended to enable caching. Otherwise, performances can be impacted.

### [` LIEF::dsc::enable_cache `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc12enable_cacheEv>)

bool LIEF::dsc::enable\_cache()

Enable globally cache/memoization. One can also leverage this function by setting the environment variable `DYLDSC_ENABLE_CACHE` to `1`.

By default, LIEF will use the directory specified by the environment variable `DYLDSC_CACHE_DIR` as its cache-root directory:

```bash
DYLDSC_ENABLE_CACHE=1 DYLDSC_CACHE_DIR=/tmp/my_dir ./my-program
```

Otherwise, if `DYLDSC_CACHE_DIR` is not set, LIEF will use the following directory (in this priority):

1. System or user cache directory

   - macOS: `DARWIN_USER_TEMP_DIR` / `DARWIN_USER_CACHE_DIR` + `/dyld_shared_cache`
   - Linux: `${XDG_CACHE_HOME}/dyld_shared_cache`
   - Windows: `LOCALAPPDATA%\dyld_shared_cache`
2. Home directory

   - macOS/Linux: `$HOME/.dyld_shared_cache`
   - Windows: `USERPROFILE%\.dyld_shared_cache`

> **See also**
> 
> [LIEF::dsc::DyldSharedCache::enable\_caching](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1DyldSharedCache_1a4b2fb390aa8e6fef36b72961425ef8e7>) for a finer granularity

### [` LIEF::dsc::enable_cache `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc12enable_cacheERKNSt6stringE>)

bool LIEF::dsc::enable\_cache(const std::string &amp;dir)

Same behavior as [enable\_cache()](<https://lief.re/doc/latest/extended/dsc/cpp.html#namespaceLIEF_1_1dsc_1a1315e214f5697b1988ff64c0a93b237b>) but with a user-provided cache directory.

## [DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#dyldsharedcache>)

### [` DyldSharedCache `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCacheE>)

class DyldSharedCache

This class represents a dyld shared cache file.

Public Types

#### [` VERSION `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache7VERSIONE>)

enum class VERSION : uint32\_t

This enum wraps the dyld’s git tags for which the structure of dyld shared cache evolved.

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache7VERSION7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` DYLD_95_3 `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache7VERSION9DYLD_95_3E>)

enumerator DYLD\_95\_3

dyld-95.3 (2007-10-30)

##### [` DYLD_195_5 `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache7VERSION10DYLD_195_5E>)

enumerator DYLD\_195\_5

dyld-195.5 (2011-07-13)

##### [` DYLD_239_3 `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache7VERSION10DYLD_239_3E>)

enumerator DYLD\_239\_3

dyld-239.3 (2013-10-29)

##### [` DYLD_360_14 `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache7VERSION11DYLD_360_14E>)

enumerator DYLD\_360\_14

dyld-360.14 (2015-09-04)

##### [` DYLD_421_1 `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache7VERSION10DYLD_421_1E>)

enumerator DYLD\_421\_1

dyld-421.1 (2016-09-22)

##### [` DYLD_832_7_1 `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache7VERSION12DYLD_832_7_1E>)

enumerator DYLD\_832\_7\_1

dyld-832.7.1 (2020-11-19)

##### [` DYLD_940 `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache7VERSION8DYLD_940E>)

enumerator DYLD\_940

dyld-940 (2021-02-09)

##### [` DYLD_1042_1 `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache7VERSION11DYLD_1042_1E>)

enumerator DYLD\_1042\_1

dyld-1042.1 (2022-10-19)

##### [` DYLD_1231_3 `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache7VERSION11DYLD_1231_3E>)

enumerator DYLD\_1231\_3

dyld-1231.3 (2024-09-24)

##### [` DYLD_1284_13 `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache7VERSION12DYLD_1284_13E>)

enumerator DYLD\_1284\_13

dyld-1284.13 (2025-04-25)

##### [` UNRELEASED `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache7VERSION10UNRELEASEDE>)

enumerator UNRELEASED

This value is used for versions of dyld not publicly released or not yet supported by LIEF.

#### [` DYLD_TARGET_PLATFORM `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORME>)

enum class DYLD\_TARGET\_PLATFORM : uint32\_t

Platforms supported by the dyld shared cache.

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORM7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` MACOS `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORM5MACOSE>)

enumerator MACOS = 1

##### [` IOS `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORM3IOSE>)

enumerator IOS = 2

##### [` TVOS `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORM4TVOSE>)

enumerator TVOS = 3

##### [` WATCHOS `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORM7WATCHOSE>)

enumerator WATCHOS = 4

##### [` BRIDGEOS `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORM8BRIDGEOSE>)

enumerator BRIDGEOS = 5

##### [` IOSMAC `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORM6IOSMACE>)

enumerator IOSMAC = 6

##### [` IOS_SIMULATOR `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORM13IOS_SIMULATORE>)

enumerator IOS\_SIMULATOR = 7

##### [` TVOS_SIMULATOR `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORM14TVOS_SIMULATORE>)

enumerator TVOS\_SIMULATOR = 8

##### [` WATCHOS_SIMULATOR `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORM17WATCHOS_SIMULATORE>)

enumerator WATCHOS\_SIMULATOR = 9

##### [` DRIVERKIT `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORM9DRIVERKITE>)

enumerator DRIVERKIT = 10

##### [` VISIONOS `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORM8VISIONOSE>)

enumerator VISIONOS = 11

##### [` VISIONOS_SIMULATOR `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORM18VISIONOS_SIMULATORE>)

enumerator VISIONOS\_SIMULATOR = 12

##### [` FIRMWARE `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORM8FIRMWAREE>)

enumerator FIRMWARE = 13

##### [` SEPOS `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORM5SEPOSE>)

enumerator SEPOS = 14

##### [` ANY `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORM3ANYE>)

enumerator ANY = 0xFFFFFFFF

#### [` DYLD_TARGET_ARCH `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache16DYLD_TARGET_ARCHE>)

enum class DYLD\_TARGET\_ARCH

Architecture supported by the dyld shared cache.

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache16DYLD_TARGET_ARCH7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` I386 `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache16DYLD_TARGET_ARCH4I386E>)

enumerator I386

##### [` X86_64 `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache16DYLD_TARGET_ARCH6X86_64E>)

enumerator X86\_64

##### [` X86_64H `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache16DYLD_TARGET_ARCH7X86_64HE>)

enumerator X86\_64H

##### [` ARMV5 `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache16DYLD_TARGET_ARCH5ARMV5E>)

enumerator ARMV5

##### [` ARMV6 `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache16DYLD_TARGET_ARCH5ARMV6E>)

enumerator ARMV6

##### [` ARMV7 `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache16DYLD_TARGET_ARCH5ARMV7E>)

enumerator ARMV7

##### [` ARM64 `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache16DYLD_TARGET_ARCH5ARM64E>)

enumerator ARM64

##### [` ARM64E `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache16DYLD_TARGET_ARCH6ARM64EE>)

enumerator ARM64E

#### [` dylib_iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache14dylib_iteratorE>)

using dylib\_iterator = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibE> "LIEF::dsc::Dylib")::[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorE> "LIEF::dsc::Dylib::Iterator")&gt;

Iterator over the libraries in the shared cache.

#### [` mapping_info_iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache21mapping_info_iteratorE>)

using mapping\_info\_iterator = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[MappingInfo](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfoE> "LIEF::dsc::MappingInfo")::[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorE> "LIEF::dsc::MappingInfo::Iterator")&gt;

Iterator over the mapping info in the shared cache.

#### [` subcache_iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache17subcache_iteratorE>)

using subcache\_iterator = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[SubCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCacheE> "LIEF::dsc::SubCache")::[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorE> "LIEF::dsc::SubCache::Iterator")&gt;

Iterator over the split/sub-cache in this **main** shared cache.

#### [` instructions_iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache21instructions_iteratorE>)

using instructions\_iterator = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;assembly::[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction")::[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorE> "LIEF::assembly::Instruction::Iterator")&gt;

Public Functions

#### [` DyldSharedCache `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache15DyldSharedCacheENSt10unique_ptrIN7details15DyldSharedCacheEEE>)

DyldSharedCache(std::unique\_ptr&lt;details::DyldSharedCache&gt; impl)

#### [` ~DyldSharedCache `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCacheD0Ev>)

~DyldSharedCache()

#### [` filename `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache8filenameEv>)

std::string filename() const

Filename of the dyld shared file associated with this object.

For instance: `dyld_shared_cache_arm64e, dyld_shared_cache_arm64e.62.dyldlinkedit`

#### [` version `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache7versionEv>)

[VERSION](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache7VERSIONE> "LIEF::dsc::DyldSharedCache::VERSION") version() const

Version of dyld used by this cache.

#### [` filepath `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache8filepathEv>)

std::string filepath() const

Full path to the original dyld shared cache file associated with object (e.g. `/home/lief/downloads/visionos/dyld_shared_cache_arm64e.42`).

#### [` load_address `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache12load_addressEv>)

uint64\_t load\_address() const

Based address of this cache.

#### [` arch_name `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache9arch_nameEv>)

std::string arch\_name() const

Name of the architecture targeted by this cache (`x86_64h`).

#### [` platform `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache8platformEv>)

[DYLD\_TARGET\_PLATFORM](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache20DYLD_TARGET_PLATFORME> "LIEF::dsc::DyldSharedCache::DYLD_TARGET_PLATFORM") platform() const

Platform targeted by this cache (e.g. visionOS).

#### [` arch `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache4archEv>)

[DYLD\_TARGET\_ARCH](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache16DYLD_TARGET_ARCHE> "LIEF::dsc::DyldSharedCache::DYLD_TARGET_ARCH") arch() const

Architecture targeted by this cache.

#### [` find_lib_from_va `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache16find_lib_from_vaE8uint64_t>)

std::unique\_ptr&lt;[Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibE> "LIEF::dsc::Dylib")&gt; find\_lib\_from\_va(uint64\_t va) const

Find the [Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1Dylib>) that encompasses the given virtual address. It returns a nullptr if a [Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1Dylib>) can’t be found.

#### [` find_lib_from_path `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache18find_lib_from_pathERKNSt6stringE>)

std::unique\_ptr&lt;[Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibE> "LIEF::dsc::Dylib")&gt; find\_lib\_from\_path(const std::string &amp;path) const

Find the [Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1Dylib>) whose [Dylib::path](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1Dylib_1a08ce763248345ff48158c2d543d7b0b5>) matches the provided path.

#### [` find_lib_from_name `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache18find_lib_from_nameERKNSt6stringE>)

std::unique\_ptr&lt;[Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibE> "LIEF::dsc::Dylib")&gt; find\_lib\_from\_name(const std::string &amp;name) const

Find the [Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1Dylib>) whose filename of [Dylib::path](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1Dylib_1a08ce763248345ff48158c2d543d7b0b5>) matches the provided name.

If multiple libraries have the same name (but with a different path), the **first one** matching the provided name is returned.

#### [` has_subcaches `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache13has_subcachesEv>)

bool has\_subcaches() const

True if the subcaches are associated with this cache.

#### [` libraries `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache9librariesEv>)

[dylib\_iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache14dylib_iteratorE> "LIEF::dsc::DyldSharedCache::dylib_iterator") libraries() const

Return an iterator over the libraries embedded in this dyld shared cache.

This iterator implements the *random access* trait. Thus, one can use [iterator\_range::size](<https://lief.re/doc/latest/api/cpp/index.html#classLIEF_1_1iterator__range_1ae957e92b2c6969d8419ad3fd0390aee2>), [iterator\_range::at](<https://lief.re/doc/latest/api/cpp/index.html#classLIEF_1_1iterator__range_1a2d611c0868da82f6d8afc868bbc96440>), [iterator\_range::operator[]](<https://lief.re/doc/latest/api/cpp/index.html#classLIEF_1_1iterator__range_1a84e92a5896177d699058f3afd7b15bc9>) to access [Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1Dylib>) at an arbitrary index:

```cpp
auto libraries = cache.libaries();
for (size_t i = 0; i < libraries.size(); ++i) {
  std::string path = libaries[i]->path();
}
```

#### [` mapping_info `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache12mapping_infoEv>)

[mapping\_info\_iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache21mapping_info_iteratorE> "LIEF::dsc::DyldSharedCache::mapping_info_iterator") mapping\_info() const

Return an iterator over the mapping information of this dyld shared cache.

This iterator implements the *random access* trait. Thus, one can use [iterator\_range::size](<https://lief.re/doc/latest/api/cpp/index.html#classLIEF_1_1iterator__range_1ae957e92b2c6969d8419ad3fd0390aee2>), [iterator\_range::at](<https://lief.re/doc/latest/api/cpp/index.html#classLIEF_1_1iterator__range_1a2d611c0868da82f6d8afc868bbc96440>), [iterator\_range::operator[]](<https://lief.re/doc/latest/api/cpp/index.html#classLIEF_1_1iterator__range_1a84e92a5896177d699058f3afd7b15bc9>) to access a [MappingInfo](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1MappingInfo>) at an arbitrary index:

```cpp
auto mapping = cache.mapping_info();
for (size_t i = 0; i < mapping.size(); ++i) {
  const uint64_t addr = mapping[i]->address();
}
```

#### [` subcaches `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache9subcachesEv>)

[subcache\_iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache17subcache_iteratorE> "LIEF::dsc::DyldSharedCache::subcache_iterator") subcaches() const

Return an iterator over the subcaches associated with this (main) dyld shared cache.

This iterator implements the *random access* trait. Thus, one can use [iterator\_range::size](<https://lief.re/doc/latest/api/cpp/index.html#classLIEF_1_1iterator__range_1ae957e92b2c6969d8419ad3fd0390aee2>), [iterator\_range::at](<https://lief.re/doc/latest/api/cpp/index.html#classLIEF_1_1iterator__range_1a2d611c0868da82f6d8afc868bbc96440>), [iterator\_range::operator[]](<https://lief.re/doc/latest/api/cpp/index.html#classLIEF_1_1iterator__range_1a84e92a5896177d699058f3afd7b15bc9>) to access a [SubCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1SubCache>) at an arbitrary index:

```cpp
auto subcaches = cache.subcaches();
for (size_t i = 0; i < subcaches.size(); ++i) {
  std::unique_ptr<DyldSharedCache> impl = subcaches[i]->cache();
}
```

#### [` disassemble `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache11disassembleE8uint64_t>)

[instructions\_iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache21instructions_iteratorE> "LIEF::dsc::DyldSharedCache::instructions_iterator") disassemble(uint64\_t va) const

Disassemble instructions at the provided virtual address. This function returns an iterator over [assembly::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction>).

#### [` get_content_from_va `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache19get_content_from_vaE8uint64_t8uint64_t>)

std::vector&lt;uint8\_t&gt; get\_content\_from\_va(uint64\_t va, uint64\_t size) const

Return the content at the specified virtual address.

#### [` cache_for_address `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache17cache_for_addressE8uint64_t>)

std::unique\_ptr&lt;[DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCacheE> "LIEF::dsc::DyldSharedCache")&gt; cache\_for\_address(uint64\_t va) const

Find the sub-DyldSharedCache that wraps the given virtual address.

#### [` main_cache `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache10main_cacheEv>)

std::unique\_ptr&lt;[DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCacheE> "LIEF::dsc::DyldSharedCache")&gt; main\_cache() const

Return the principal dyld shared cache in the case of multiple subcaches.

#### [` find_subcache `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache13find_subcacheERKNSt6stringE>)

std::unique\_ptr&lt;[DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCacheE> "LIEF::dsc::DyldSharedCache")&gt; find\_subcache(const std::string &amp;filename) const

Try to find the [DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1DyldSharedCache>) associated with the filename given in the first parameter.

#### [` va_to_offset `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache12va_to_offsetE8uint64_t>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; va\_to\_offset(uint64\_t va) const

Convert the given virtual address into an offset.

> **Warning**
> 
> If the shared cache contains multiple subcaches, this function needs to be called on the targeted subcache. See [cache\_for\_address()](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1DyldSharedCache_1acfbac55519c26e5f4af3651025ebd7bb>) to find the associated subcache.

#### [` stream `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache6streamEv>)

[FileStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStreamE> "LIEF::FileStream") &amp;stream() const

Return the stream associated with this dyld shared cache.

#### [` stream `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache6streamEv>)

[FileStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStreamE> "LIEF::FileStream") &amp;stream()

Return the stream associated with this dyld shared cache.

#### [` enable_caching `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache14enable_cachingERKNSt6stringE>)

void enable\_caching(const std::string &amp;target\_cache\_dir) const

When enabled, this function records and keeps in *cache* the dyld shared cache information that is costly to access.

For instance, GOT symbols, rebases information, stub symbols, …

It is **highly** recommended to enable this function when processing a dyld shared cache several times or when extracting a large number of [LIEF::dsc::Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1Dylib>) with enhanced extraction options (e.g. [Dylib::extract\_opt\_t::fix\_branches](<https://lief.re/doc/latest/extended/dsc/cpp.html#structLIEF_1_1dsc_1_1Dylib_1_1extract__opt__t_1a970eb41edc4838635ac40aa8487000f5>))

One can enable caching by calling this function:

```cpp
auto dyld_cache = LIEF::dsc::load("macos-15.0.1/");
dyld_cache->enable_caching("/home/user/.cache/lief-dsc");
```

One can also enable this cache optimization **globally** using the function: [LIEF::dsc::enable\_cache](<https://lief.re/doc/latest/extended/dsc/cpp.html#namespaceLIEF_1_1dsc_1a1315e214f5697b1988ff64c0a93b237b>) or by setting the environment variable `DYLDSC_ENABLE_CACHE` to 1.

#### [` flush_cache `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache11flush_cacheEv>)

void flush\_cache() const

Flush internal information into the on-disk cache (see: enable\_caching).

Public Static Functions

#### [` from_path `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache9from_pathERKNSt6stringERKNSt6stringE>)

static std::unique\_ptr&lt;[DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCacheE> "LIEF::dsc::DyldSharedCache")&gt; from\_path(const std::string &amp;path, const std::string &amp;arch = "")

See the [load](<https://lief.re/doc/latest/extended/dsc/cpp.html#namespaceLIEF_1_1dsc_1aed80f6f2025bd9212805063bdc4dc3d6>) functions for the details.

#### [` from_files `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCache10from_filesERKNSt6vectorINSt6stringEEE>)

static std::unique\_ptr&lt;[DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCacheE> "LIEF::dsc::DyldSharedCache")&gt; from\_files(const std::vector&lt;std::string&gt; &amp;path)

See the [load](<https://lief.re/doc/latest/extended/dsc/cpp.html#namespaceLIEF_1_1dsc_1aed80f6f2025bd9212805063bdc4dc3d6>) functions for the details.

## [Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#dylib>)

### [` Dylib `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibE>)

class Dylib

This class represents a library embedded in a dyld shared cache. It mirrors the original `dyld_cache_image_info` structure.

Public Functions

#### [` Dylib `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib5DylibENSt10unique_ptrIN7details5DylibEEE>)

Dylib(std::unique\_ptr&lt;details::Dylib&gt; impl)

#### [` ~Dylib `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibD0Ev>)

~Dylib()

#### [` path `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc5Dylib4pathEv>)

std::string path() const

Original path of the library (e.g. `/usr/lib/libcryptex.dylib`).

#### [` address `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc5Dylib7addressEv>)

uint64\_t address() const

In-memory address of the library.

#### [` modtime `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc5Dylib7modtimeEv>)

uint64\_t modtime() const

Modification time of the library matching `stat.st_mtime`, or 0.

#### [` inode `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc5Dylib5inodeEv>)

uint64\_t inode() const

File serial number matching `stat.st_ino` or 0.

Note that for shared cache targeting iOS, this value can hold a hash of the path (if modtime is set to 0)

#### [` padding `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc5Dylib7paddingEv>)

uint64\_t padding() const

Padding alignment value (should be 0).

#### [` get `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc5Dylib3getERK13extract_opt_t>)

std::unique\_ptr&lt;LIEF::MachO::[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&gt; get(const [extract\_opt\_t](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib13extract_opt_tE> "LIEF::dsc::Dylib::extract_opt_t") &amp;opt = [extract\_opt\_t](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib13extract_opt_tE> "LIEF::dsc::Dylib::extract_opt_t")()) const

Get a [MachO::Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>) representation for this [Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1Dylib>).

One can use this function to write back the Mach-O binary on the disk:

```cpp
dyld_cache->libraries()[12]->get()->write("liblockdown.dylib");
```

#### [` Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorE> "LIEF::dsc::Dylib::Iterator"), std::random\_access\_iterator\_tag, [Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibE> "LIEF::dsc::Dylib"), std::ptrdiff\_t, const [Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibE> "LIEF::dsc::Dylib")\*, const [Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibE> "LIEF::dsc::Dylib")&amp;&gt;

[Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1Dylib>) [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1Dylib_1_1Iterator>).

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8Iterator14implementationE>)

using implementation = details::DylibIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8Iterator8IteratorENSt10unique_ptrIN7details7DylibItEEE>)

Iterator(std::unique\_ptr&lt;details::DylibIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8Iterator8IteratorERK8Iterator> "LIEF::dsc::Dylib::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorE> "LIEF::dsc::Dylib::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorE> "LIEF::dsc::Dylib::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8Iterator8IteratorERR8Iterator> "LIEF::dsc::Dylib::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorE> "LIEF::dsc::Dylib::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorE> "LIEF::dsc::Dylib::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorD0Ev>)

~Iterator()

##### [` operator< `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc5Dylib8IteratorltERK8Iterator>)

bool operator&lt;(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorE> "LIEF::dsc::Dylib::Iterator") &amp;rhs) const

##### [` operator- `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc5Dylib8IteratormiERK8Iterator>)

std::ptrdiff\_t operator-(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorE> "LIEF::dsc::Dylib::Iterator") &amp;R) const

##### [` operator+= `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorpLENSt9ptrdiff_tE>)

[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorE> "LIEF::dsc::Dylib::Iterator") &amp;operator+=(std::ptrdiff\_t n)

##### [` operator-= `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratormIENSt9ptrdiff_tE>)

[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorE> "LIEF::dsc::Dylib::Iterator") &amp;operator-=(std::ptrdiff\_t n)

##### [` operator* `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc5Dylib8IteratormlEv>)

const [Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibE> "LIEF::dsc::Dylib") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc5Dylib8IteratorptEv>)

const [Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibE> "LIEF::dsc::Dylib") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8Iterator5yieldEv>)

std::unique\_ptr&lt;[Dylib](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibE> "LIEF::dsc::Dylib")&gt; yield()

Transfer ownership of the dylib at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorE> "LIEF::dsc::Dylib::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorE> "LIEF::dsc::Dylib::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorE> "LIEF::dsc::Dylib::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib8IteratorE> "LIEF::dsc::Dylib::Iterator") &amp;RHS)

#### [` extract_opt_t `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib13extract_opt_tE>)

struct extract\_opt\_t

This structure is used to tweak the extraction process while calling [Dylib::get](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1Dylib_1a27ad9ee88635a243570486f436839374>). These options allow deoptimizing the dylib to get an accurate representation of the origin Mach-O binary.

Public Functions

##### [` extract_opt_t `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib13extract_opt_t13extract_opt_tEv>)

extract\_opt\_t()

Public Members

##### [` pack `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib13extract_opt_t4packE>)

bool pack = true

Whether the segment’s offsets should be packed to avoid an in-memory size while writing back the binary.

> **Note**
> 
> This option does not have an impact on the performances

##### [` fix_branches `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib13extract_opt_t12fix_branchesE>)

bool fix\_branches = false

Fix call instructions that target addresses outside the current dylib virtual space.

> **Warning**
> 
> Enabling this option can have a significant impact on the performances. Make sure to enable the internal cache mechanism: [LIEF::dsc::enable\_cache](<https://lief.re/doc/latest/extended/dsc/cpp.html#namespaceLIEF_1_1dsc_1a1315e214f5697b1988ff64c0a93b237b>) or [LIEF::dsc::DyldSharedCache::enable\_caching](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1DyldSharedCache_1a4b2fb390aa8e6fef36b72961425ef8e7>)

##### [` fix_memory `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib13extract_opt_t10fix_memoryE>)

bool fix\_memory = false

Fix memory accesses performed outside the dylib’s virtual space.

> **Warning**
> 
> Enabling this option can have a significant impact on the performances. Make sure to enable the internal cache mechanism: [LIEF::dsc::enable\_cache](<https://lief.re/doc/latest/extended/dsc/cpp.html#namespaceLIEF_1_1dsc_1a1315e214f5697b1988ff64c0a93b237b>) or [LIEF::dsc::DyldSharedCache::enable\_caching](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1DyldSharedCache_1a4b2fb390aa8e6fef36b72961425ef8e7>)

##### [` fix_relocations `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib13extract_opt_t15fix_relocationsE>)

bool fix\_relocations = false

Recover and fix relocations.

> **Warning**
> 
> Enabling this option can have a significant impact on the performances. Make sure to enable the internal cache mechanism: [LIEF::dsc::enable\_cache](<https://lief.re/doc/latest/extended/dsc/cpp.html#namespaceLIEF_1_1dsc_1a1315e214f5697b1988ff64c0a93b237b>) or [LIEF::dsc::DyldSharedCache::enable\_caching](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1DyldSharedCache_1a4b2fb390aa8e6fef36b72961425ef8e7>)

##### [` fix_objc `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib13extract_opt_t8fix_objcE>)

bool fix\_objc = false

Fix Objective-C information.

##### [` create_dyld_chained_fixup_cmd `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib13extract_opt_t29create_dyld_chained_fixup_cmdE>)

LIEF::[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;bool&gt; create\_dyld\_chained\_fixup\_cmd

Whether the `LC_DYLD_CHAINED_FIXUPS` command should be (re)created.

If this value is not set, LIEF will add the command only if it’s meaningful regarding the other options

## [MappingInfo](<https://lief.re/doc/latest/extended/dsc/cpp.html#mappinginfo>)

### [` MappingInfo `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfoE>)

class MappingInfo

This class represents a `dyld_cache_mapping_info` entry.

It provides information about the relationship between on-disk shared cache and in-memory shared cache.

Public Functions

#### [` MappingInfo `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo11MappingInfoENSt10unique_ptrIN7details11MappingInfoEEE>)

MappingInfo(std::unique\_ptr&lt;details::MappingInfo&gt; impl)

#### [` ~MappingInfo `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfoD0Ev>)

~MappingInfo()

#### [` address `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc11MappingInfo7addressEv>)

uint64\_t address() const

The in-memory address where this dyld shared cache region is mapped.

#### [` size `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc11MappingInfo4sizeEv>)

uint64\_t size() const

Size of the region being mapped.

#### [` end_address `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc11MappingInfo11end_addressEv>)

inline uint64\_t end\_address() const

End virtual address of the region.

#### [` file_offset `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc11MappingInfo11file_offsetEv>)

uint64\_t file\_offset() const

On-disk file offset.

#### [` max_prot `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc11MappingInfo8max_protEv>)

uint32\_t max\_prot() const

Max memory protection.

#### [` init_prot `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc11MappingInfo9init_protEv>)

uint32\_t init\_prot() const

Initial memory protection.

#### [` Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorE> "LIEF::dsc::MappingInfo::Iterator"), std::random\_access\_iterator\_tag, [MappingInfo](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfoE> "LIEF::dsc::MappingInfo"), std::ptrdiff\_t, const [MappingInfo](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfoE> "LIEF::dsc::MappingInfo")\*, const [MappingInfo](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfoE> "LIEF::dsc::MappingInfo")&amp;&gt;

[MappingInfo](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1MappingInfo>) [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1MappingInfo_1_1Iterator>).

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8Iterator14implementationE>)

using implementation = details::MappingInfoIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8Iterator8IteratorENSt10unique_ptrIN7details13MappingInfoItEEE>)

Iterator(std::unique\_ptr&lt;details::MappingInfoIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8Iterator8IteratorERK8Iterator> "LIEF::dsc::MappingInfo::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorE> "LIEF::dsc::MappingInfo::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorE> "LIEF::dsc::MappingInfo::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8Iterator8IteratorERR8Iterator> "LIEF::dsc::MappingInfo::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorE> "LIEF::dsc::MappingInfo::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorE> "LIEF::dsc::MappingInfo::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorD0Ev>)

~Iterator()

##### [` operator< `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc11MappingInfo8IteratorltERK8Iterator>)

bool operator&lt;(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorE> "LIEF::dsc::MappingInfo::Iterator") &amp;rhs) const

##### [` operator- `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc11MappingInfo8IteratormiERK8Iterator>)

std::ptrdiff\_t operator-(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorE> "LIEF::dsc::MappingInfo::Iterator") &amp;R) const

##### [` operator+= `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorpLENSt9ptrdiff_tE>)

[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorE> "LIEF::dsc::MappingInfo::Iterator") &amp;operator+=(std::ptrdiff\_t n)

##### [` operator-= `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratormIENSt9ptrdiff_tE>)

[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorE> "LIEF::dsc::MappingInfo::Iterator") &amp;operator-=(std::ptrdiff\_t n)

##### [` operator* `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc11MappingInfo8IteratormlEv>)

const [MappingInfo](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfoE> "LIEF::dsc::MappingInfo") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc11MappingInfo8IteratorptEv>)

const [MappingInfo](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfoE> "LIEF::dsc::MappingInfo") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8Iterator5yieldEv>)

std::unique\_ptr&lt;[MappingInfo](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfoE> "LIEF::dsc::MappingInfo")&gt; yield()

Transfer ownership of the mapping info at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorE> "LIEF::dsc::MappingInfo::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorE> "LIEF::dsc::MappingInfo::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorE> "LIEF::dsc::MappingInfo::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc11MappingInfo8IteratorE> "LIEF::dsc::MappingInfo::Iterator") &amp;RHS)

## [SubCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#subcache>)

### [` SubCache `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCacheE>)

class SubCache

This class represents a subcache in the case of large/split dyld shared cache.

It mirrors (and abstracts) the original `dyld_subcache_entry` / `dyld_subcache_entry_v1`

Public Functions

#### [` SubCache `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8SubCacheENSt10unique_ptrIN7details8SubCacheEEE>)

SubCache(std::unique\_ptr&lt;details::SubCache&gt; impl)

#### [` ~SubCache `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCacheD0Ev>)

~SubCache()

#### [` uuid `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc8SubCache4uuidEv>)

sc\_uuid\_t uuid() const

The uuid of the subcache file.

#### [` vm_offset `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc8SubCache9vm_offsetEv>)

uint64\_t vm\_offset() const

The offset of this subcache from the main cache base address.

#### [` suffix `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc8SubCache6suffixEv>)

std::string suffix() const

The file name suffix of the subCache file (e.g. `.25.data`, `.03.development`).

#### [` cache `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc8SubCache5cacheEv>)

std::unique\_ptr&lt;const [DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCacheE> "LIEF::dsc::DyldSharedCache")&gt; cache() const

The associated [DyldSharedCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1DyldSharedCache>) object for this subcache.

Friends

#### [` operator<< `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCachelsERNSt7ostreamERK8SubCache>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [SubCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCacheE> "LIEF::dsc::SubCache") &amp;subcache)

#### [` Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorE> "LIEF::dsc::SubCache::Iterator"), std::random\_access\_iterator\_tag, [SubCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCacheE> "LIEF::dsc::SubCache"), std::ptrdiff\_t, const [SubCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCacheE> "LIEF::dsc::SubCache")\*, const [SubCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCacheE> "LIEF::dsc::SubCache")&amp;&gt;

[SubCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1SubCache>) [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#classLIEF_1_1dsc_1_1SubCache_1_1Iterator>).

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8Iterator14implementationE>)

using implementation = details::SubCacheIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8Iterator8IteratorENSt10unique_ptrIN7details10SubCacheItEEE>)

Iterator(std::unique\_ptr&lt;details::SubCacheIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8Iterator8IteratorERK8Iterator> "LIEF::dsc::SubCache::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorE> "LIEF::dsc::SubCache::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorE> "LIEF::dsc::SubCache::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8Iterator8IteratorERR8Iterator> "LIEF::dsc::SubCache::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorE> "LIEF::dsc::SubCache::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorE> "LIEF::dsc::SubCache::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorD0Ev>)

~Iterator()

##### [` operator< `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc8SubCache8IteratorltERK8Iterator>)

bool operator&lt;(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorE> "LIEF::dsc::SubCache::Iterator") &amp;rhs) const

##### [` operator- `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc8SubCache8IteratormiERK8Iterator>)

std::ptrdiff\_t operator-(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorE> "LIEF::dsc::SubCache::Iterator") &amp;R) const

##### [` operator+= `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorpLENSt9ptrdiff_tE>)

[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorE> "LIEF::dsc::SubCache::Iterator") &amp;operator+=(std::ptrdiff\_t n)

##### [` operator-= `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratormIENSt9ptrdiff_tE>)

[Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorE> "LIEF::dsc::SubCache::Iterator") &amp;operator-=(std::ptrdiff\_t n)

##### [` operator* `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc8SubCache8IteratormlEv>)

const [SubCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCacheE> "LIEF::dsc::SubCache") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc8SubCache8IteratorptEv>)

const [SubCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCacheE> "LIEF::dsc::SubCache") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8Iterator5yieldEv>)

std::unique\_ptr&lt;[SubCache](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCacheE> "LIEF::dsc::SubCache")&gt; yield()

Transfer ownership of the subcache at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorE> "LIEF::dsc::SubCache::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorE> "LIEF::dsc::SubCache::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorE> "LIEF::dsc::SubCache::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc8SubCache8IteratorE> "LIEF::dsc::SubCache::Iterator") &amp;RHS)

## [Utilities](<https://lief.re/doc/latest/extended/dsc/cpp.html#utilities>)

### [` LIEF::dsc::is_shared_cache `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15is_shared_cacheER12BinaryStream>)

bool LIEF::dsc::is\_shared\_cache([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

Check if the given stream wraps a Dyld Shared Cache.

### [` LIEF::dsc::is_shared_cache `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15is_shared_cacheERKNSt6vectorI7uint8_tEE>)

inline bool LIEF::dsc::is\_shared\_cache(const std::vector&lt;uint8\_t&gt; &amp;buffer)

Check if the given buffer points to a dyld shared cache file.

### [` LIEF::dsc::is_shared_cache `](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15is_shared_cacheEPK7uint8_t6size_t>)

inline bool LIEF::dsc::is\_shared\_cache(const uint8\_t \*buffer, size\_t size)

Check if the given buffer points to a dyld shared cache file.
