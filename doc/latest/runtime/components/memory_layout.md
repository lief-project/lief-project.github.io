---
documentID: "02781b3390637c965f23066c46cc3d594310c30a032d12e92f3ec9ff8231c345"
docname: "runtime/components/memory_layout"
title: "Memory Layout - Runtime - LIEF Documentation"
description: "Inspect mapped memory regions with LIEF Extended, calculate virtual address-space usage, and locate mappings by address or name."
canonical: "https://lief.re/doc/latest/runtime/components/memory_layout.html"
markdownURL: "https://lief.re/doc/latest/runtime/components/memory_layout.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "9f997e108bad908f7c500a3ca6121a4185c04ec7cd325a01fa360c48ac3ff602"
---

# [Memory Layout](<https://lief.re/doc/latest/runtime/components/memory_layout.html#memory-layout>)

The  `lief.runtime.MemoryLayout` ( [`lief.runtime.MemoryLayout`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.MemoryLayout>) ;  [`LIEF::runtime::MemoryLayout`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayoutE>) ) interface exposes the memory layout of the **current** process: the regions that are mapped in its address space. It is available in LIEF Extended on Linux, Android, macOS, and Windows.

## [Enumerate mapped regions](<https://lief.re/doc/latest/runtime/components/memory_layout.html#enumerate-mapped-regions>)

`lief.runtime.memory_layout()` ( [`lief::runtime::memory_layout`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/fn.memory_layout.html>) ;  [`lief.runtime.memory_layout()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.memory_layout>) ;  [`LIEF::runtime::memory_layout()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime13memory_layoutEv>) ) returns an iterator over these regions, ordered by address:

**Python**

```python
for region in lief.runtime.memory_layout():
    print(f"{region.addr:#014x}-{region.end_addr:#014x} {region.name}")
```

**C++**

```cpp
for (const LIEF::runtime::MemoryLayout::Region& region :
     LIEF::runtime::memory_layout())
{
  std::cout << region.addr() << '-' << region.end_addr() << ' ' << region.name()
            << '\n';
}
```

**Rust**

```rust
for region in lief::runtime::memory_layout() {
    println!(
        "{:#014x}-{:#014x} {}",
        region.addr(),
        region.end_addr(),
        region.name()
    );
}
```

For illustration, a Linux process running `/usr/bin/cat` could have this layout:

```text
0x563668f9d000-0x563668f9f000 /usr/bin/cat
0x563668f9f000-0x563668fa6000 /usr/bin/cat
0x563668fa6000-0x563668fa9000 /usr/bin/cat
0x563668fa9000-0x563668faa000 /usr/bin/cat
0x563668faa000-0x563668fab000 /usr/bin/cat
0x56367cb52000-0x56367cb73000 [heap]
0x7f2d28e00000-0x7f2d29196000 /usr/lib/locale/locale-archive
0x7f2d291be000-0x7f2d29200000
0x7f2d29200000-0x7f2d29224000 /usr/lib/libc.so.6
[...]
0x7f2d29478000-0x7f2d2947a000 [vdso]
0x7f2d2947a000-0x7f2d2947b000 /lib64/ld-linux-x86-64.so.2
[...]
0x7ffd162f1000-0x7ffd16312000 [stack]
0xffffffffff600000-0xffffffffff601000 [vsyscall]
```

A  `lief.runtime.MemoryLayout.Region` ( [`lief::runtime::Region`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/struct.Region.html>) ;  [`lief.runtime.MemoryLayout.Region`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.MemoryLayout.Region>) ;  [`LIEF::runtime::MemoryLayout::Region`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionE>) ) describes a half-open address range: the start address is included, and the end address is excluded. Its name can be:

- the name or the path of the module mapped at this address (e.g. `/usr/lib/libc.so.6`);
- the identifier of a region that is not backed by a file (e.g. `[stack]`, `[heap]`, `[vdso]`);
- **empty**, for anonymous regions.

As shown in the output above, a module is not mapped as a single region: it usually gets one region per set of permissions.

Names and mappings depend on the operating system and can change as the process allocates memory or loads libraries. A region describes a mapping: it does not own the mapped memory.

## [Inspecting the layout](<https://lief.re/doc/latest/runtime/components/memory_layout.html#inspecting-the-layout>)

The following snippet iterates over the memory layout to:

- Compute the total mapped size
- Group that size by region name
- Locate the region containing a given address

These totals measure virtual address space. They are not resident-memory (RSS) measurements, and grouping anonymous regions combines unrelated allocations.

**Python**

```python
address: int

count = 0
mapped = 0
footprint: defaultdict[str, int] = defaultdict(int)
enclosing: lief.runtime.MemoryLayout.Region | None = None

for region in lief.runtime.memory_layout():
    count += 1
    mapped += region.size

    name = region.name if region.name else "<anonymous>"
    footprint[name] += region.size

    if region.contains(address):
        enclosing = region

print(f"{count} regions, {mapped // 1024} KB mapped")

for name, size in footprint.items():
    print(f"{size:#010x} {name}")

if enclosing is not None:
    print(f"{address:#x}: {enclosing.name}+{address - enclosing.addr:#x}")
```

**C++**

```cpp
size_t count = 0;
uint64_t mapped = 0;
std::unordered_map<std::string, uint64_t> footprint;
LIEF::runtime::MemoryLayout::Region enclosing;

for (const LIEF::runtime::MemoryLayout::Region& region :
     LIEF::runtime::memory_layout())
{
  ++count;
  mapped += region.size();

  std::string name =
      region.name().empty() ? "<anonymous>" : std::string(region.name());

  footprint[name] += region.size();

  if (region.contains(address)) {
    enclosing = region;
  }
}

std::cout << count << " regions, " << (mapped / 1024) << " KB mapped\n";

for (const auto& [name, size] : footprint) {
  std::cout << size << ' ' << name << '\n';
}

if (enclosing.size() > 0) {
  std::cout << address << ": " << enclosing.name() << '+'
            << (address - enclosing.addr()) << '\n';
}
```

**Rust**

```rust
let mut count = 0usize;
let mut mapped = 0u64;
let mut footprint: BTreeMap<String, u64> = BTreeMap::new();
let mut enclosing: Option<lief::runtime::Region> = None;

for region in lief::runtime::memory_layout() {
    count += 1;
    mapped += region.size();

    let mut name = region.name();
    if name.is_empty() {
        name = String::from("<anonymous>");
    }

    *footprint.entry(name).or_insert(0) += region.size();

    if region.contains(address) {
        enclosing = Some(region);
    }
}

println!("{count} regions, {} KB mapped", mapped / 1024);

for (name, size) in &footprint {
    println!("{size:#010x} {name}");
}

if let Some(region) = enclosing {
    println!(
        "{address:#x}: {}+{:#x}",
        region.name(),
        address - region.addr()
    );
}
```

## [Linux / Android](<https://lief.re/doc/latest/runtime/components/memory_layout.html#linux-android>)

On Linux and Android, named mappings such as `[stack]` and `[heap]` can be located when present. They do not account for every thread stack or allocator-managed allocation:

**Python**

```python
for region in lief.runtime.memory_layout():
    # On Linux and Android, the kernel names the regions that back the
    # stack and the heap of the process.
    if region.name in ("[stack]", "[heap]"):
        print(f"{region.name}: {region.addr:#014x}-{region.end_addr:#014x}")
```

**C++**

```cpp
for (const LIEF::runtime::MemoryLayout::Region& region :
     LIEF::runtime::memory_layout())
{
  // On Linux and Android, the kernel names the regions that back the stack
  // and the heap of the process.
  if (region.name() == "[stack]" || region.name() == "[heap]") {
    std::cout << region.name() << ": " << region.addr() << '-'
              << region.end_addr() << '\n';
  }
}
```

**Rust**

```rust
for region in lief::runtime::memory_layout() {
    // On Linux and Android, the kernel names the regions that back the
    // stack and the heap of the process.
    let name = region.name();
    if name == "[stack]" || name == "[heap]" {
        println!(
            "{name}: {:#014x}-{:#014x}",
            region.addr(),
            region.end_addr()
        );
    }
}
```

```text
[heap]: 0x56367cb52000-0x56367cb73000
[stack]: 0x7ffd162f1000-0x7ffd16312000
```

## [macOS](<https://lief.re/doc/latest/runtime/components/memory_layout.html#macos>)

On macOS, the layout includes the individual regions within nested memory maps, including the dyld shared cache. LIEF tries to provide meaningful names for *anonymous* regions associated with the dyld shared cache, the stack, …:

```text
[0000000111e9c000, 0000000111f28000]: /private/tmp/LIEF/main/lief/_lief_extended.so:__DATA
[0000000111f28000, 0000000112020000]: /private/tmp/LIEF/main/lief/_lief_extended.so
[000000014f600000, 000000014f604000]: [heap]
[000000016ed08000, 000000016ed0c000]: [stack]
[000000016ed0c000, 000000016fd0c000]: [stack]
[0000000180000000, 000000018ed58000]: <anonymous>
[000000018ed58000, 000000018ede0000]: [dyld shared cache: __TEXT]
[000000018ede0000, 00000001f4000000]: [dyld shared cache: __TEXT]
[00000001f4000000, 00000001f45d8000]: [dyld shared cache: __TEXT]
[00000001f45d8000, 00000001f45dc000]: [dyld shared cache: __TEXT]
[00000001f45dc000, 00000001f6900000]: [dyld shared cache: __DATA_CONST]
[00000001f6900000, 00000001f8000000]: <anonymous>
[00000001f8000000, 00000001f8900000]: <anonymous>
```

## [Windows](<https://lief.re/doc/latest/runtime/components/memory_layout.html#windows>)

On Windows, the layout includes committed pages and reserved address ranges, including stack, TEB/PEB regions:

```text
[0000000000127000, 0000000000182000]: <anonymous>
[0000000000190000, 0000000000193000]: C:\Windows\System32\l_intl.nls
[00000000001a0000, 00000000001b1000]: C:\Windows\System32\C_1252.NLS
[00000000001c0000, 00000000001d1000]: C:\Windows\System32\C_850.NLS
[00000000001e0000, 00000000001e3000]: [pagefile]
[00000000001f0000, 00000000001f4000]: <anonymous>
[0000000000200000, 000000000037f000]: <anonymous>
[000000000037f000, 0000000000388000]: [peb/teb]
[0000000000388000, 0000000000400000]: <anonymous>
[0000000000400000, 0000000000639000]: [stack]
[000000007ffe0000, 000000007ffe1000]: [shared-user-data]
[00007ff6ae6d0000, 00007ff6ae6d1000]: C:\Python314\python.exe
[00007ff6ae6d1000, 00007ff6ae6d2000]: C:\Python314\python.exe
[00007ff6ae6d2000, 00007ff6ae6d3000]: C:\Python314\python.exe
[00007ff6ae6d3000, 00007ff6ae6d4000]: C:\Python314\python.exe
```
