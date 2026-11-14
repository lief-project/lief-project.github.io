---
title: "LIEF v0.15.0"
description: "LIEF 0.15.0 introduces official Rust bindings and LIEF Extended, with Objective-C, DWARF, PDB, parser performance, and Python wheel updates."
canonical_url: "https://lief.re/blog/2024-07-21-lief-0.15-0/"
markdown_url: "https://lief.re/blog/2024-07-21-lief-0.15-0/index.md"
authors: ["Romain Thomas"]
date_published: "2024-07-21T00:00:00Z"
date_modified: "2024-07-21T00:00:00Z"
language: "en-US"
section: "blog"
tags: ["release","Rust","LIEF Extended","Objective-C","DWARF","PDB","Python"]
categories: []
---

# LIEF v0.15.0

> LIEF 0.15.0 introduces official Rust bindings and LIEF Extended, with Objective-C, DWARF, PDB, parser performance, and Python wheel updates.

While this new release adds new functionalities and addresses different bugs,
It is worth mentioning that it is the first release to officially expose Rust binding!
In addition, an *extended* version was also released to provide additional functionalities
not strictly related to the executable formats.

##  Rust bindings

As discussed in these blog posts:

1. [LIEF Rust bindings updates](https://lief.re/blog/2024-06-16-rust-update/)
2. [Rust bindings for LIEF](https://lief.re/blog/2024-04-28-rust/)

LIEF is now available in Rust for the following architectures:

- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `x86_64-pc-windows-msvc` (MT/MD runtimes)
- `x86_64-unknown-linux-gnu`
- `aarch64-apple-ios`
- `aarch64-apple-darwin`

I published the release on [crates.io](https://crates.io/crates/lief) so you should
be able to start using LIEF in Rust with:

```rust
[package]
name    = "lief-demo"
version = "0.0.1"
edition = "2021"

[dependencies]
lief = "0.15.0"
```


##  LIEF Extended

LIEF is now providing additional features thanks to an extended version.
Among those features, it provides support for DWARF and PDB debug formats as well
as Objective-C metadata.

## Objective-C

This support is a kind of spin-off of [iCDump](https://www.romainthomas.fr/post/23-01-icdump/)
which is now completely integrated into LIEF.
Compared to the original [iCDump](https://github.com/romainthomas/iCDump) project, it fixes
the issue with the new chained relocations (c.f. [issue#4](https://github.com/romainthomas/iCDump/issues/4))
format and can be used on all the platforms supported by LIEF (including Windows) in C++/Rust/Python:

**Rust:**

```rust
let macho: lief::macho::Binary;

if let Some(metadata) = macho.objc_metadata() {
    println!("Objective-C metadata found");
    for class in metadata.classes() {
        println!("name={}", class.name());
        for method in class.methods() {
            println!("  method.name={}", method.name());
        }
    }
}
```

**Python:**

```python
import lief
macho: lief.MachO.Binary = ...
metadata: lief.objc.Metadata = macho.objc_metadata

if metadata is not None:
    print("Objective-C metadata found")

    for clazz in metadata.classes:
        print(f"name={clazz.name}")
        for meth in clazz.methods:
            print(f"  method.name={meth.name}")

    # Generate a header like "class-dump"
    print(metadata.to_decl())
```

## DWARF & PDB

![DWARF & PDB Hierarchy](https://lief.re/blog/2024-07-21-lief-0.15-0/dwarf-pdb-hierarchy.webp)

Supporting debug formats like DWARF or PDB has been a long-standing discussion
(c.f. [issue #17](https://github.com/lief-project/LIEF/issues/17)). The main reasons
to avoid supporting these formats from scratch were:

1. The maintenance effort
2. There already exists libraries to process these debug formats:
  - [pyelftools](https://github.com/eliben/pyelftools) for DWARF
  - [LLVM](https://llvm.org/) (DWARF & PDB)
  - [gimli](https://docs.rs/gimli/latest/gimli/) (DWARF)

On the other hand, I understand the need to process debug information from a LIEF
binary object when it is present. The existing projects expose powerful low-level
APIs that match the debug format specifications. However, they do not provide[^sense]
an abstraction over the complexity of these specifications.

Developers and reverse engineers work with concepts such as compilation units,
functions, global variables, and stack variables. Before accessing this information
from a DWARF or PDB file, however, you need to understand a PDB DBI stream or know
that a function's address in DWARF can be determined by
either `DW_AT_entry_pc` or `DW_AT_low_pc`.

The idea behind the support of the DWARF and PDB formats in LIEF is to:

1. **bridge concepts that make sense to the developers/reverse engineers with their concrete specifications in DWARF/PDB**
2. Have a (documented) C++ API and bindings for Python/Rust.

This LIEF bridge is **based on LLVM** which did the heavy job of supporting
DWARF & PDB within a single framework.

The DWARF & PDB support in LIEF leverages the LLVM API to abstract concepts as listed above.

For instance, you can iterate through every public symbol in the `ntoskrnl.pdb` PDB
through:

```python
import lief

ntoskrnl: lief.pdb.DebugInfo = lief.pdb.load("./ntoskrnl.pdb")

for sym in ntoskrnl.public_symbols:
    print(f"{sym.demangled_name}: 0x{sym.RVA:06x}")
```

If the PDB embeds extended information about the compilation units we can do (in Rust):

```rust
let pdb = lief::pdb::load("peacecannary.pdb");
for cu in pdb.compilation_units() {
    for func in cu.functions() {
        if func.name().starts_with("peacecannary::CObfuscator") {
            println!("{}: {} (0x{:04x})", cu.module_name(), func.name(), func.rva());
        }
    }
}
```

The API for the DWARF format is pretty similar:

```python
import lief

elf: lief.ELF.Binary = ...
# If the binary embeds DWARF debug info in the ELF:
dwarf: lief.dwarf.DebugInfo = elf.debug_info
# Otherwise:
dwarf: lief.dwarf.DebugInfo = lief.dwarf.load("my_dwarf.dwarf")

for cu in dwarf.compilation_units:
    print(f"Produced by: {cu.producer} in {cu.compilation_dir}")

    for func in cu.functions:
        print(f"0x{func.address:04x}: {func.name} ({func.size} bytes)")

    for var in cu.variables:
        if var.is_constexpr:
            continue
        # Look for global variables only
        if var.address is not None and var.address > 0:
            print(f"0x{var.address:04x}: {var.linkage_name} ({var.size} bytes)")
```

For more details about the API, you can take a look at these dedicated sections:

-  [DWARF](https://lief.re/doc/latest/extended/dwarf/)
-  [PDB](https://lief.re/doc/latest/extended/pdb/)


[^sense]: Which makes sense since this is not the purpose of these projects

## Other Updates

## Mach-O AI

LIEF is now ~powered by AI~ supporting Apple `*.hwx` files which are some kind of Mach-O
file for the Apple Neural Engine (ANE).

These `*.hwx` start with a new magic identifier: `0xbeefface` and embed
custom `LC_` command like the command `0x40`


**LC Command 0x40**

I could be interested in adding the support of this *private* command in LIEF so if anyone
already reversed or has some info about the layout of this command, feel free to reach out.


To support unknown or non-public LC commands in LIEF, I created an artificial
`LIEF::MachO::UnknownCommand` which is a placeholder for any Mach-O commands that
are not recognized by LIEF.

For instance, we can inspect the private `0x40` command as follows:

```python
import lief
target = lief.MachO.parse("personsemantics-u8-v4.H16.espresso.hwx").at(0)
lc_0x40: lief.MachO.UnknownCommand = macho.commands[18].command

print(lc_0x40.original_command) # Outputs 0x40/61
print(bytes(lc_0x40.data)) # Print the raw content of the command
```

These `.hwx` files have been involved in the [Dopamine jailbreak](https://github.com/opa334/Dopamine/blob/43c03c167ccaa23ca51f268213e5abc85a9aee55/Application/Dopamine/Exploits/weightBufs/exploit/exploit.m#L514)
and you can also find a BlackHat presentation about the Apple Neural Engine: [Apple Neural Engine Internal](https://i.blackhat.com/asia-21/Friday-Handouts/as21-Wu-Apple-Neural_Engine.pdf).

## PE Authenticode

LIEF can inspect and verify the PE Authenticode and with this release, we can
even do that in Rust!

```rust
use lief::pe;

let mut file = std::fs::File::open(path).expect("Can't open the file");
if let Some(lief::Binary::PE(pe)) = lief::Binary::from(&mut file) {
    let result = pe.verify_signature(pe::signature::VerificationChecks::DEFAULT);
    if result.is_ok() {
        println!("Valid signature!");
    } else {
        println!("Signature not valid: {}", result);
    }
    return ExitCode::SUCCESS;
}
```

This new release also adds support for the MS-CounterSignature attribute (OID: `1.3.6.1.4.1.311.3.3.1`)
and some other attributes like `Ms-ManifestBinaryID` (OID: `1.3.6.1.4.1.311.10.3.28`)

## ELF

No breaking updates for the ELF format.

LIEF is now able to parse and modify
binaries compiled with the new `DT_RELR` and `DT_ANDROID_REL_` relocations.

![ELF Dynamic Array Relocated](https://lief.re/blog/2024-07-21-lief-0.15-0/elf-relocations.webp)

I also added the helper: `LIEF::ELF::Binary::get_relocated_dynamic_array` which
allows us to get a *relocated* view of the `DT_INIT_ARRAY/DT_FINI_ARRAY`.

This can be useful when -- for instance -- the init array values are null because of relocations:

```python
import lief

elf: lief.ELF.Binary = ...

# Return: [0, 0, 0, 0, ...]
elf.get(lief.ELF.DynamicEntry.TAG.INIT_ARRAY).array

# Return relocated values: [0x96db10, 0x9b9c14, 0xe7f660, 0xe7f70c, ...]
elf.get_relocated_dynamic_array(lief.ELF.DynamicEntry.TAG.INIT_ARRAY)
```

## Enums

Since the beginning of LIEF, all the enums used by the different formats were
located in a **single** header file (e.g. `LIEF/PE/enums.hpp` or `lief.PE.{enums, ...}` in Python).
Some of them were clashing with system headers that were also `#define` some of these enums.

To work around this issue, we had a dirty hack based on `LIEF/{ELF.PE,MachO}/undef.h`
that undefines these values before being included.

In LIEF 0.15.0 the scope of the enums has been redefined so that we should no longer
need the `undef.h`.

For instance the standalone enum `LIEF::ELF::ELF_SECTION_TYPES` (or `lief.ELF.SECTION_TYPES`)
has been re-scoped in the `LIEF::ELF::Section` class:

```cpp
// <LIEF/ELF/Section.hpp>
class LIEF_API Section : public LIEF::Section {
  enum class TYPE : uint64_t {
    SHT_NULL            = 0,  /**< No associated section (inactive entry). */
    PROGBITS            = 1,  /**< Program-defined contents. */
    ...
  };
};
```

This means that instead of using `LIEF::ELF::ELF_SECTION_TYPES::SHT_PROGBITS`
or `lief.ELF.SECTION_TYPES.SHT_PROGBITS` you should now use:

```diff {style=pastie}
- LIEF::ELF::ELF_SECTION_TYPES::SHT_PROGBITS
+ LIEF::ELF::Section::TYPE::PROGBITS

- lief.ELF.SECTION_TYPES.SHT_PROGBITS
+ lief.ELF.Section.TYPE.PROGBITS
```

The list of the enums affected by this change is listed in the [changelog](https://lief.re/doc/latest/changelog.html).

## Performances

### PE Parser

I received some feedback about performance issues in the latest release (`0.14.x`)
compared to former releases. This regression affects Mach-O and PE binaries and
I'm happy to say that this `v0.15.0` release should be faster on ELF, PE, and Mach-O
compared to previous releases.

The PE regression comes from the `LIEF::PE::OptionalHeader::computed_checksum` introduced
in LIEF 0.12.0 and discussed in this issue: [#660](https://github.com/lief-project/LIEF/issues/660).

As of LIEF 0.12.0, this `computed_checksum` was computed during the parsing phase, and on large
binaries, this computation might have a significant impact on the performances.
In LIEF 0.15.0, the OptionalHeader's checksum can be re-computed over the `LIEF::PE::Binary` object:

```python
import lief

pe: lief.PE.Binary = ...
computed_checksum = pe.compute_checksum()
```

Thus, avoiding the computation during the parsing phase and moving to an "*on-demand*" API.

### Mach-O Parser

On the other hand, the Mach-O regression was pretty tricky to identify (c.f. [issue #1069](https://github.com/lief-project/LIEF/issues/1069)).

The root cause of the regression was these lines:

```cpp
// https://github.com/lief-project/LIEF/blob/0.14.1/src/MachO/BinaryParser.cpp#L285-L290
for (LARGE_LOOP) {
  if (!is_printable(name)) {
    ...
  }
}
```

with `is_printable` implemented as follows:

```cpp
bool is_printable(const std::string& str) {
  return std::all_of(std::begin(str), std::end(str),
                     [] (char c) { return std::isprint<char>(c, std::locale("C")); });
}
```

Then, while  processing large Mach-O binaries with LIEF we can observe:

- On Linux: No regression
- On macOS: **REGRESSION**
- On Windows: **REGRESSION**

It turned out that `std::locale("C")` is *cached* by the STL on Linux but not on
macOS & Windows. This means that we were invoking `std::locale("C")`
**for each character of each string** (which has a cost).

One solution is to store `std::locale("C")` in a static variable as it is done
-- under the hood -- in the Linux STL.

```diff {style=pastie}
bool is_printable(const std::string& str) {
  return std::all_of(std::begin(str), std::end(str),
-                     [] (char c) { return std::isprint<char>(c, std::locale("C")); });
+                     [] (char c) {
+                        static std::locale LC("C");
+                        return std::isprint<char>(c, LC);
+                     });
}
```

This actual fix is slightly different though: [7c3f63194](https://github.com/lief-project/LIEF/commit/7c3f631948051c8afe5c00e49635385c7de857ba).

##  Python Wheels

LIEF Python wheels are now available for musl-based systems. This support is
motivated by the fact that Python Docker images tagged with the suffix the `-alpine`
are using Alpine system which is based on musl libc.

Thus, we can now use Docker's python-alpine as image base to install LIEF:

```docker
FROM python:3.13.0b3-alpine

RUN pip install --no-cache-dir lief==0.15.0
```

Note that the LIEF Python wheel for Alpine weighs about 2.5 megabytes compressed and 7 megabytes decompressed.

## Final Words

This new Rust-oriented release is a major milestone for LIEF. While the library
is widely used among Python community with ~16,000 daily downloads on PyPI, I'm eager to see
new use cases or issues brought by the Rust community.

As a reminder, there is a [Discord](https://discord.gg/jGQtyAYChJ) channel
where you can drop your questions, and remarks (that are not [issues](https://github.com/lief-project/LIEF/issues/new/choose) :wink:).

Thank you also to [arttson](https://github.com/arttson) and [lexika979](https://github.com/lexika979), for their sponsorship.
