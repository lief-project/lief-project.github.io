---
documentID: "b2e20ca344aa12515d073b90c420faecee7d27d73bddf73463741419d87afd9c"
docname: "extended/dsc/index"
title: "Dyld Shared Cache - LIEF Documentation"
description: "Load Apple Dyld shared caches, inspect and extract libraries as Mach-O files, and configure extraction and caching with LIEF Extended."
canonical: "https://lief.re/doc/latest/extended/dsc/index.html"
markdownURL: "https://lief.re/doc/latest/extended/dsc/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "c9c38604da64cb6db368a7b2531c08c4a62982a627a35aa205bcd58f1c85c30e"
---

# [Dyld Shared Cache](<https://lief.re/doc/latest/extended/dsc/index.html#dyld-shared-cache>)

API

- [C++](<https://lief.re/doc/latest/extended/dsc/cpp.html>)
- [Python](<https://lief.re/doc/latest/extended/dsc/python.html>)
- [Rust](<https://lief.re/doc/latest/extended/dsc/rust.html>)

## [Introduction](<https://lief.re/doc/latest/extended/dsc/index.html#introduction>)

LIEF Extended can inspect Apple’s Dyld shared cache, enumerate its libraries, and extract them as Mach-O binaries.

## [Load a cache and list its libraries](<https://lief.re/doc/latest/extended/dsc/index.html#load-a-cache-and-list-its-libraries>)

One can load a shared cache using the  `lief.dsc.load()` ( [`lief::dsc::load_from_path`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/fn.load_from_path.html>) ;  [`lief::dsc::load_from_files`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/fn.load_from_files.html>) ;  [`lief.dsc.load()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.load>) ;  [`LIEF::dsc::load()`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc4loadERKNSt6stringERKNSt6stringE>) ) function:

**Python**

```python
import lief
dyld_cache: lief.dsc.DyldSharedCache | None = lief.dsc.load("macos-15.0.1/")
```

**C++**

```cpp
#include <LIEF/DyldSharedCache.hpp>
std::unique_ptr<LIEF::dsc::DyldSharedCache> dyld_cache =
    LIEF::dsc::load("macos-15.0.1/");
```

**Rust**

```rust
let dyld_cache = lief::dsc::load_from_path("macos-15.0.1/", "");
```

> **Note**
> 
> Pass a directory to  `lief.dsc.load()` ( [`lief::dsc::load_from_path`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/fn.load_from_path.html>) ;  [`lief::dsc::load_from_files`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/fn.load_from_files.html>) ;  [`lief.dsc.load()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.load>) ;  [`LIEF::dsc::load()`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc4loadERKNSt6stringERKNSt6stringE>) ) to load the whole cache, or an explicit set of files to load a subset. Keep the main cache and its matching subcache files together: an extraction may need data from more than one file.

From this  `lief.dsc.DyldSharedCache` ( [`lief::dsc::DyldSharedCache`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/struct.DyldSharedCache.html>) ;  [`lief.dsc.DyldSharedCache`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache>) ;  [`LIEF::dsc::DyldSharedCache`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc15DyldSharedCacheE>) ) object, we can inspect the embedded  `lief.dsc.Dylib` ( [`lief::dsc::Dylib`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/struct.Dylib.html>) ;  [`lief.dsc.Dylib`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib>) ;  [`LIEF::dsc::Dylib`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibE>) ) as follows:

**Python**

```python
dyld_cache: lief.dsc.DyldSharedCache

for dylib in dyld_cache.libraries:
    print(f"{dylib.address:#016x}: {dylib.path}")
```

**C++**

```cpp
std::unique_ptr<LIEF::dsc::DyldSharedCache> dyld_cache;

for (const LIEF::dsc::Dylib& dylib : dyld_cache->libraries()) {
  std::cout << dylib.address() << ' ' << dylib.path() << '\n';
}
```

**Rust**

```rust
let dyld_cache: &lief::dsc::DyldSharedCache = some_dyld_cache;

for dylib in dyld_cache.libraries() {
    println!("0x{:016x}: {}", dylib.address(), dylib.path());
}
```

## [Extract a library](<https://lief.re/doc/latest/extended/dsc/index.html#extract-a-library>)

Find a  `lief.dsc.Dylib` ( [`lief::dsc::Dylib`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/struct.Dylib.html>) ;  [`lief.dsc.Dylib`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib>) ;  [`LIEF::dsc::Dylib`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibE>) ), then use  `lief.dsc.Dylib.get()` ( [`lief::dsc::Dylib::get`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/struct.Dylib.html#method.get>) ;  [`lief.dsc.Dylib.get()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.get>) ;  [`LIEF::dsc::Dylib::get()`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc5Dylib3getERK13extract_opt_t>) ) to extract a  `lief.MachO.Binary` ( [`lief::macho::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html>) ;  [`lief.MachO.Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary>) ;  [`LIEF::MachO::Binary`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE>) ) for analysis. Check both the library lookup and the extraction result before using the Mach-O object:

**Python**

```python
dyld_cache: lief.dsc.DyldSharedCache

liblockdown = dyld_cache.find_lib_from_name("liblockdown.dylib")

macho = liblockdown.get()

for segment in macho.segments:
    print(segment.name)
```

**C++**

```cpp
std::unique_ptr<LIEF::dsc::DyldSharedCache> dyld_cache;

std::unique_ptr<Dylib> liblockdown =
    dyld_cache->find_lib_from_name("liblockdown.dylib");

std::unique_ptr<LIEF::MachO::Binary> macho = liblockdown->get();
for (const LIEF::MachO::SegmentCommand& segment : macho->segments()) {
  std::cout << segment.name() << '\n';
}
```

**Rust**

```rust
let dyld_cache: &lief::dsc::DyldSharedCache = some_dyld_cache;

let liblockdown = dyld_cache.find_lib_from_name("liblockdown.dylib").unwrap();

let macho = liblockdown.get().unwrap();

for segment in macho.segments() {
    println!("{}", segment.name());
}
```

Use  `lief.MachO.Binary.write()` ( [`lief::macho::Binary::write`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.write>) ;  [`lief::macho::Binary::write_with_config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.write_with_config>) ;  [`lief.MachO.Binary.write()`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.write>) ;  [`LIEF::MachO::Binary::write()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary5writeERKNSt6stringE>) ) to save the extracted object to a file:

**Python**

```python
dyld_cache: lief.dsc.DyldSharedCache

liblockdown = dyld_cache.find_lib_from_name("liblockdown.dylib")

macho = liblockdown.get()
macho.write("on-disk-liblockdown.dylib")
```

**C++**

```cpp
std::unique_ptr<LIEF::dsc::DyldSharedCache> dyld_cache;

std::unique_ptr<Dylib> liblockdown =
    dyld_cache->find_lib_from_name("liblockdown.dylib");

std::unique_ptr<LIEF::MachO::Binary> macho = liblockdown->get();
macho->write("on-disk-liblockdown.dylib");
```

**Rust**

```rust
let dyld_cache: &lief::dsc::DyldSharedCache = some_dyld_cache;

let liblockdown = dyld_cache.find_lib_from_name("liblockdown.dylib").unwrap();
let mut macho = liblockdown.get().unwrap();

macho.write("on-disk-liblockdown.dylib");
```

> **Warning**
> 
> By default, LIEF retains Dyld shared cache optimizations. Review  `lief.dsc.Dylib.extract_opt_t` ( [`lief::dsc::dylib::ExtractOpt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/dylib/struct.ExtractOpt.html>) ;  [`lief.dsc.Dylib.extract_opt_t`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.extract_opt_t>) ;  [`LIEF::dsc::Dylib::extract_opt_t`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib13extract_opt_tE>) ) when the extracted library needs references and other cache-specific structures recovered. Writing a Mach-O file alone does not guarantee it can be loaded independently of the cache.

## [Performance Considerations](<https://lief.re/doc/latest/extended/dsc/index.html#performance-considerations>)

Dyld shared cache files are quite large, meaning they cannot be processed in the same way as standard  `lief.MachO.Binary` ( [`lief::macho::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html>) ;  [`lief.MachO.Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary>) ;  [`LIEF::MachO::Binary`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE>) ) or  `lief.ELF.Binary` ( [`lief::elf::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html>) ;  [`lief.ELF.Binary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary>) ;  [`LIEF::ELF::Binary`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE>) ) binaries.

The Dyld shared cache support in LIEF follows the principle: *don’t pay overhead for what you don’t access*. This is the opposite of the implementation of  `lief.PE.parse()` ( [`lief::pe::Binary::parse`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.parse>) ;  [`lief.PE.parse()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.parse>) ;  [`LIEF::PE::Parser::parse()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Parser5parseENSt11string_viewERK12ParserConfig>) ),  `lief.MachO.parse()` ( [`lief::macho::FatBinary::parse`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.FatBinary.html#method.parse>) ;  [`lief.MachO.parse()`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.parse>) ;  [`LIEF::MachO::Parser::parse()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Parser5parseENSt11string_viewERK12ParserConfig>) ), and  `lief.ELF.parse()` ( [`lief::elf::Binary::parse`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.parse>) ;  [`lief.ELF.parse()`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.parse>) ;  [`LIEF::ELF::Parser::parse()`](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser5parseENSt11string_viewERK12ParserConfig>) ).

> **Note**
> 
> These functions parse all format structures (with decent performance) because:
> 
> 1. Most binary sizes are less than one gigabyte.
> 2. A complete representation is required for modifying binaries.

From a technical perspective, LIEF uses a [`LIEF::FileStream`](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStreamE> "LIEF::FileStream") to access Dyld shared cache structures on demand. Thus, in-memory consumption is limited to the size of the structures being accessed. The drawback of using [`FileStream`](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStreamE> "LIEF::FileStream") is that because it uses file-based access, it takes more time compared to a [`LIEF::VectorStream`](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStreamE> "LIEF::VectorStream").

Additionally, LIEF’s Dyld shared cache implementation **heavily** relies on the iterator pattern to follow the principle: *don’t pay overhead for what you don’t access*.

For instance,  `lief.dsc.DyldSharedCache.libraries()` ( [`lief::dsc::DyldSharedCache::libraries`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/struct.DyldSharedCache.html#method.libraries>) ;  [`lief.dsc.DyldSharedCache.libraries`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.libraries>) ;  [`LIEF::dsc::DyldSharedCache::libraries()`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache9librariesEv>) ) returns an **iterator** over the  `lief.dsc.Dylib` ( [`lief::dsc::Dylib`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/struct.Dylib.html>) ;  [`lief.dsc.Dylib`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib>) ;  [`LIEF::dsc::Dylib`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibE>) ). Therefore, if you don’t iterate, you don’t pay for the access and parsing of the  `lief.dsc.Dylib` ( [`lief::dsc::Dylib`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/struct.Dylib.html>) ;  [`lief.dsc.Dylib`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib>) ;  [`LIEF::dsc::Dylib`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibE>) ) objects.

Where possible, LIEF implements the random access iterator trait [[1]](<https://lief.re/doc/latest/extended/dsc/index.html#footnote-1>) so that we can programmatically do:

**Python**

```python
dyld_cache: lief.dsc.DyldSharedCache

# No cost
libraries = dyld_cache.libraries

# O(1) cost
first_lib = libraries[0]

# O(len(libraries)) cost
for lib in libraries:
    print(lib.path)
```

**C++**

```cpp
std::unique_ptr<LIEF::dsc::DyldSharedCache> dyld_cache;

// No cost
auto libraries = dyld_cache->libraries();

// O(1) cost: the iterator is random access, so an arbitrary library can be
// reached by index without materializing the ones before it.
std::cout << "First library: " << libraries[0]->path() << '\n';

// O(libraries.size()) cost
for (const Dylib& dylib : libraries) {
  std::cout << dylib.path() << '\n';
}
```

When extracting a  `lief.MachO.Binary` ( [`lief::macho::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html>) ;  [`lief.MachO.Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary>) ;  [`LIEF::MachO::Binary`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE>) ) from a  `lief.dsc.Dylib` ( [`lief::dsc::Dylib`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/struct.Dylib.html>) ;  [`lief.dsc.Dylib`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib>) ;  [`LIEF::dsc::Dylib`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5DylibE>) ) object using  `lief.dsc.Dylib.get()` ( [`lief::dsc::Dylib::get`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/struct.Dylib.html#method.get>) ;  [`lief.dsc.Dylib.get()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.get>) ;  [`LIEF::dsc::Dylib::get()`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc5Dylib3getERK13extract_opt_t>) ), **the extraction can take a substantial amount of time**, especially if certain deoptimizations are enabled (c.f.  `lief.dsc.Dylib.extract_opt_t` ( [`lief::dsc::dylib::ExtractOpt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/dylib/struct.ExtractOpt.html>) ;  [`lief.dsc.Dylib.extract_opt_t`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.extract_opt_t>) ;  [`LIEF::dsc::Dylib::extract_opt_t`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib13extract_opt_tE>) )).

For instance,  `lief.dsc.Dylib.extract_opt_t.fix_branches` ( [`lief::dsc::dylib::ExtractOpt::fix_branches`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/dylib/struct.ExtractOpt.html#structfield.fix_branches>) ;  [`lief.dsc.Dylib.extract_opt_t.fix_branches`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.Dylib.extract_opt_t.fix_branches>) ;  [`LIEF::dsc::Dylib::extract_opt_t::fix_branches`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc5Dylib13extract_opt_t12fix_branchesE>) ) may require iterating over the Dyld shared cache’s stub islands several times. To improve overall performance, LIEF provides a cache-based optimization that can be enabled and configured with:

- `lief.dsc.enable_cache()` ( [`lief::dsc::enable_cache`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/fn.enable_cache.html>) ;  [`lief.dsc.enable_cache()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.enable_cache>) ;  [`LIEF::dsc::enable_cache()`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc12enable_cacheEv>) )
- `lief.dsc.DyldSharedCache.enable_caching` ( [`lief::dsc::DyldSharedCache::enable_caching`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/struct.DyldSharedCache.html#method.enable_caching>) ;  [`lief.dsc.DyldSharedCache.enable_caching()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.DyldSharedCache.enable_caching>) ;  [`LIEF::dsc::DyldSharedCache::enable_caching()`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4NK4LIEF3dsc15DyldSharedCache14enable_cachingERKNSt6stringE>) )

> **When should you turn caching on?**
> 
> You can **skip** LIEF’s caching if:
> 
> - You don’t plan to extract libraries from the shared cache.
> - You plan to extract only one library from the shared cache and **only once**
> - You don’t want to have LIEF cache artifacts on your system.
> 
> For all other situations, you should turn on  `lief.dsc.enable_cache()` ( [`lief::dsc::enable_cache`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/fn.enable_cache.html>) ;  [`lief.dsc.enable_cache()`](<https://lief.re/doc/latest/extended/dsc/python.html#lief.dsc.enable_cache>) ;  [`LIEF::dsc::enable_cache()`](<https://lief.re/doc/latest/extended/dsc/cpp.html#_CPPv4N4LIEF3dsc12enable_cacheEv>) ).
> 
> **By default, the cache mechanism is not enabled.**

[[1](<https://lief.re/doc/latest/extended/dsc/index.html#id1>)]

[https://en.cppreference.com/w/cpp/iterator/random\_access\_iterator](<https://en.cppreference.com/w/cpp/iterator/random_access_iterator>)

## [References](<https://lief.re/doc/latest/extended/dsc/index.html#references>)

- [arandomdev/DyldExtractor](<https://github.com/arandomdev/DyldExtractor>)
- [blacktop/ipsw](<https://github.com/blacktop/ipsw>)
- [apple-oss-distributions/dyld](<https://github.com/apple-oss-distributions/dyld>)
- [https://www.romainthomas.fr/post/24-09-apple-lockdown-dbi-lifting/](<https://www.romainthomas.fr/post/24-09-apple-lockdown-dbi-lifting/>)

[Python API](<https://lief.re/doc/latest/extended/dsc/python.html>)

[C++ API](<https://lief.re/doc/latest/extended/dsc/cpp.html>)

Rust API: [`lief::dsc`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dsc/index.html>)
