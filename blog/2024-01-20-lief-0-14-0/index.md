---
title: "LIEF v0.14.0"
description: "LIEF 0.14.0 release highlights: faster Python bindings, updates to ELF and PE, and ongoing work on Rust, DWARF, and PDB support."
canonical_url: "https://lief.re/blog/2024-01-20-lief-0-14-0/"
markdown_url: "https://lief.re/blog/2024-01-20-lief-0-14-0/index.md"
authors: ["Romain Thomas"]
date_published: "2024-01-21T00:00:00Z"
date_modified: "2024-01-21T00:00:00Z"
language: "en-US"
section: "blog"
tags: ["release","Python","ELF","PE","Rust","DWARF","PDB"]
categories: []
---

# LIEF v0.14.0

> LIEF 0.14.0 release highlights: faster Python bindings, updates to ELF and PE, and ongoing work on Rust, DWARF, and PDB support.

LIEF v0.14.0 is out, here is an overview of the main changes!

## What's new?

### Python Bindings

LIEF v0.14.0 comes with some internal enhancements for the bindings.

First, LIEF now uses [nanobind](https://nanobind.readthedocs.io/en/latest/) instead of Pybind11. This change is motivated
by the fact that `nanobind` reduces the compilation time while also improving
the overall performances of the bindings[^nanobind-why].

The typing stubs (`.pyi`) are almost complete. This means that almost all the
functions and classes have accurate typing information that is not `object` or `Any`.

Finally, `setuptools` has been replaced by [scikit-build-core](https://github.com/scikit-build/scikit-build-core)
as it provides a cleaner API to generate native wheels.

### ELF

LIEF's ELF module now supports the GNU properties notes and exposes a friendly
API to access the underlying properties information. For instance, one can
check if AArch64's PAC is used by an ELF binary using the following API:

```python
import lief

elf = lief.ELF.parse("aarch64-binary.elf")
prop: lief.ELF.NoteGnuProperty = elf.get(lief.ELF.Note.TYPE.GNU_PROPERTY_TYPE_0)
aarch64_feat: lief.ELF.AArch64Feature = prop.find(lief.ELF.NoteGnuProperty.Property.TYPE.AARCH64_FEATURES)

if lief.ELF.AArch64Feature.FEATURE.PAC in aarch64_feat.features:
    print("PAC is supported!")
```

In addition, the ELF parser can be tweaked to disable parsing some specific parts
of an ELF file. For instance, one can skip parsing the relocations as follows:

```python
import lief
config = lief.ELF.ParserConfig()
config.parse_relocations = False

# ELF object without relocations information
elf = lief.ELF.parse("some-binary.elf", config)
```

### PE

As of now, one of the major design issues in LIEF is the enum API. Indeed, when I
started to develop LIEF, I wanted to have class and enum names as close to their
names mentioned in official documentation.

But it turned out that those names are -- sometimes -- already `#define` in system headers. It means
that including a system header which already defines one of these names causes a compilation error:

```cpp
#include <um/winnt.h>        // #define IMAGE_FILE_MACHINE_AM33 0x01d3
#include <LIEF/PE/enums.hpp> // /!\ Compilation error on IMAGE_FILE_MACHINE_AM33
```

The current (hacky) workaround for this issue is a `undef.h` file which `#undef`
the names that create conflict between system definition and LIEF (c.f. `LIEF/PE/undef.h`).

Yes, it's a hack and the current ongoing work to address this issue is a complete
refactoring of the enums API which starts with a re-scoping. Currently, **all** the
enums are defined in a **single** header file and some of them are used by only one class.

For instance, the enum [`LIEF::PE::SIG_ATTRIBUTE_TYPES`](https://github.com/lief-project/LIEF/blob/2d9855fc7f9d4ce6325245f8b75c98eb7663db60/include/LIEF/PE/enums.hpp#L1315-L1330),
has been re-scoped in the `LIEF::PE::Attribute`:

```cpp
// Before (v0.13.x): LIEF/PE/enums.hpp
enum class SIG_ATTRIBUTE_TYPES {
  UNKNOWN = 0,
  CONTENT_TYPE,
  ...
};

// Now (v0.14.0): LIEF/PE/signature/Attribute.hpp
class LIEF_API Attribute : public Object {
  public:
  enum class TYPE {
    UNKNOWN = 0,
    CONTENT_TYPE,
    ...
  };
}
```

As of LIEF `v0.14.0`, the PE format is mostly impacted by this refactoring and
the other formats should be progressively updated accordingly.

## On Going Work

***As a reminder, LIEF is exclusively developed on my spare time, so some
functionalities might take time to be completed and integrated***

### Rust Bindings

This is still ongoing and the bindings are almost completed for ELF, PE, and Mach-O.

I still need to create the bindings for the enums and figure out a way to
reduce the compilation time but it keeps moving!

### DWARF & PDB

LIEF will welcome DWARF and PDB debug information support through an **external** extension.
This module will provide a comprehensive API to iterate over DWARF & PDB information.

## Final Word

Since LIEF 0.13.2, this new version introduces **274** new commits,
with **35 292** additions and **39 392** deletions thanks to **15** contributors!

The [complete changelog](https://lief-project.github.io/doc/stable/changelog.html#january-20-2024) is also available.

Thank you also to F., [antipatico](https://github.com/antipatico), and [MobSF](https://github.com/MobSF)
for their sponsoring.

[^nanobind-why]: https://nanobind.readthedocs.io/en/latest/why.html
