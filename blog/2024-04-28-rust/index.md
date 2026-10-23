---
title: "Rust bindings for LIEF"
description: "An introduction to LIEF's Rust bindings, their idiomatic API design, memory-safety model, cross-compilation support, and engineering tradeoffs."
canonical_url: "https://lief.re/blog/2024-04-28-rust/"
markdown_url: "https://lief.re/blog/2024-04-28-rust/index.md"
authors: ["Romain Thomas"]
date_published: "2024-04-28T00:00:00Z"
date_modified: "2024-04-28T00:00:00Z"
language: "en-US"
section: "blog"
tags: ["Rust","bindings","memory-safety"]
categories: []
---

# Rust bindings for LIEF

> An introduction to LIEF's Rust bindings, their idiomatic API design, memory-safety model, cross-compilation support, and engineering tradeoffs.

LIEF Rust bindings are now available. This blog post introduces these
bindings and the technical challenges behind this journey.

## tl;dr

```toml
[package]
name    = "lief-demo"
version = "0.0.1"
edition = "2021"

[dependencies]
lief = { git = "https://github.com/lief-project/LIEF", branch = "main"}
```

```rust
use lief::Binary;

fn main() {
  let mut file = File::open(path).expect("Can't open the file");

  match Binary::from(&mut file) {
          Some(Binary::ELF(elf)) => {
            for section in elf.sections() {
              println!("{}: 0x{:x}", section.name(), section.virtual_address());
            }
          },
          Some(Binary::PE(pe)) => {
            // ...
          },
          Some(Binary::MachO(macho)) => {
            // ...
          },
          None => {
            // Parsing error
          }
      }
}
```

Nightly documentation is available here: https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/index.html
and the package will be published on https://crates.io/crates/lief for the
`0.15.0` release.

## Introduction

It has been a long journey to have Rust bindings for LIEF, and I'm happy to announce
that these bindings are starting to be ready for public release.

I'll take this blog post as an opportunity to share the different challenges
that led me to the current design of the bindings. I'm not a Rust guru, so feel
free to share your feedback or suggestions!

## Idiomatic bindings

First off, I'm attached to have bindings that are idiomatic in the language
they target. Reaching the current state of the Rust API took me most of the time
during the development. The Rust language introduces new concepts that do not
exactly match what we can find in object-oriented languages. You can get an idea
of the Rust API with these examples.

### Iterate over ELF sections

```rust
use lief::Binary;
use lief::generic::Section; // for the "abstract" traits

let path = std::env::args().last().unwrap();
if let Some(Binary::ELF(elf)) = Binary::parse(path.as_str()) {
    for section in elf.sections() {
        println!("{}", section.name());
    }
}
```

### Get PE PDB path

```rust
use lief::Binary;
use lief::pe::debug::Entries::CodeViewPDB;

if let Some(Binary::PE(pe)) = Binary::parse(path.as_str()) {
    for entry in pe.debug() {
        if let CodeViewPDB(pdb_view) = entry {
            println!("{}", pdb_view.filename());
        }
    }
}
```

### Access Mach-O Dyld Info

```rust
use lief::Binary;
use lief::macho::commands::Commands;
use lief::macho::binding_info::BindingInfo;

if let Some(Binary::MachO(fat)) = Binary::parse(path.as_str()) {
    for macho in fat.iter() {

        // First version, iterate over the commands
        for cmd in macho.commands() {
            // Alternative to `if let` pattern
            match cmd {
                Commands::DyldInfo(dyld_info) => {
                    for binding in dyld_info.bindings() {
                        if let BindingInfo::Chained(chained) = binding {
                            println!("Library: 0x{:x}", chained.address());
                        }
                    }
                }
                _ => {}
            }
        }

        // Second version, using the helper
        if let Some(dyld_info) = macho.dyld_info() {
            for binding in dyld_info.bindings() {
                if let BindingInfo::Chained(chained) = binding {
                    println!("Library: 0x{:x}", chained.address());
                }
            }
        }
    }
}

```

Given this idiomatic goal, there were some challenges in exposing C++ code to Rust.

### Polymorphism & Inheritance

How to idiomatically bind this C++ code in Rust?

```cpp
class Base {
  virtual std::string get_name() {
    return "Base";
  }
};

class Derived : public Base {
  virtual std::string get_name() {
    return "Derived";
  }
};

class OtherDerived : public Base {
  virtual std::string get_name() {
    return "OtherDerived";
  }
};
```

For the inheritance relationship, the idea is to leverage Rust's `enum` structure
in which, all the **leaves** of the inheritance tree are an entry of the enum:

```rust
pub enum Inheritance {
    Derived(Derived),
    OtherDerived(OtherDerived),
}
```

Secondly, all these objects inherit and share the `get_name()` virtual function. To provide
this shared *property* in Rust, we can leverage a Rust `trait` that would make
`get_name` available for the structures that implement this trait:

```rust
pub trait AsBase {
    fn get_name(&self) -> String;
}

impl AsBase for Derived {
    fn get_name(&self) -> String {
        ...
    }
}

impl AsBase for OtherDerived {
    fn get_name(&self) -> String {
        ...
    }
}
```

One can also simplify the definition of the trait such as the derived objects
only have to provide the `FFI` reference to the base class:


```diff {style=pastie}
pub trait AsBase {
-    fn get_name(&self) -> String;
+    fn as_base(&self) -> ffi::BaseImpl;
+
+    fn get_name(&self) -> String {
+        self.as_base().get_name().to_string()
+    }
}

impl AsBase for Derived {
-    fn get_name(&self) -> String {
+    fn as_base(&self) -> ffi::BaseImpl {
        ...
    }
}

impl AsBase for OtherDerived {
    fn get_name(&self) -> String {
        ...
    }
}
```

LIEF's Rust bindings highly rely on these patterns to expose classes with polymorphism
and inheritance properties.

### Lifetime

In C++, we don't have the concept of a lifetime for an object. For instance,
it's perfectly fine to write this code:

```cpp
int main() {
  LIEF::PE::Binary* pe = nullptr;
  {
    std::unique_ptr<LIEF::PE::Binary> pe_unique = LIEF::PE::Parser::parse("...");
    pe = pe_unique.get();
  }
  printf("%s\n", pe->get_section(".text").name()); // Use-after-free
  return 0;
}
```

Nevertheless, the `pe` pointer used in `printf` is no longer valid because of the
scope of the `std::unique_ptr`.

In Python, nanobind and pybind11 provide helpers to define the lifetime of
an object according to its parent or its scope:

```cpp
nb::class<LIEF::PE::Binary>(m, "Binary")
    .def_prop_ro("sections",
        nb::overload_cast<>(&Binary::sections),
        nb::keep_alive<0, 1>())
```

With `nb::keep_alive`, we indicate that the lifetime of the PE section iterator
must be at least as long as the lifetime of the PE Binary instance.

In Rust, we could express this lifetime with something like:

```rust
pub struct Iterator<'a> {
    pub it: ffi::Impl,
}

impl<'a> Iterator<'a> {
    pub fn new(it: ffi::Impl) -> Self {
        Self {
            it,
        }
    }
}


impl Binary {
    pub fn get_iterator(&'a self) {
        Iterator::new(self.get_ffi_impl())
    }
}
```

But this code is not correct since the lifetime `<'a>`
of the `Iterator` structure is not bound to an attribute in the structure.
For technical-ffi reasons, we can't bind this lifetime to `ffi::Impl`.

One solution consists of using [PhantomData](https://doc.rust-lang.org/std/marker/struct.PhantomData.html)
to provide the lifetime semantic:

```rust
pub struct Iterator<'a> {
    pub it: ffi::Impl,
    _owner: PhantomData<&'a ffi::PE_Binary>,
}
```

## Safety First!

LIEF is developed in what we could say, an "unsafe" language (i.e. C++). On the
other hand, Rust provides strong guarantees about memory, concurrency, ...

Even though LIEF's core can't provide the safety guarantees that Rust is giving,
I tried to provide *some* guarantees about the bindings.

### Coverage

65% of the functions exposed by the Rust binding are covered by the test suite and
you can access the coverage report here: https://lief-rs.s3.fr-par.scw.cloud/coverage/index.html (nightly generated).


**Coverage**

By covered I mean: *"the function that bridges from C++ to Rust **is executed** in the test suite"*.


### ASAN

Regarding memory safety, Rust allows packages to be compiled with ASAN through compiler options:

```
export RUSTFLAGS="-Z sanitizer=address -Clink-args=-fsanitize=address"
export TARGET_CXXFLAGS="-fsanitize=address -fno-omit-frame-pointer -O1"
...
```

Thus, we also leverage this option to compile **both**: LIEF core and the Rust binding
with ASAN.

Given the fact that 65% of the functions and 70% of the lines are test-covered,
running these tests with ASAN gives us some confidence about the fact that the bindings do
not introduce leaks or memory issues.

I don't pretend that the code is free of bugs but at least these mechanisms are
in place in the development cycle of the project.

## Compilation

The bindings rely on [autocxx](https://google.github.io/autocxx/) to automatically
generate rust FFI code from existing C++ include file. Autocxx is powerful but it
can fail to process complex headers like `LIEF/ELF/Binary.hpp`. Thus, I had to create
some kind of wrapper over the existing `LIEF/*.hpp` header files such as autocxx
can process them. These wrappers are available in the directory `api/rust/include/`

![overview](https://lief.re/blog/2024-04-28-rust/design.webp)

The time to generate the Rust FFI code for the different C++ headers
is significant: about ~50s with the current bindings. This generation time can be
problematic for the end user especially if LIEF is indirectly imported from other
dependencies.
On the other hand, for fixed versions of LIEF, cxxgen and, autocxx, the code generated
by cxxgen and autocxx is *always* the same. Thus, we can pregenerate and precompile these
files to save time during the pure-rust compilation step.

## Docker

All the different steps mentioned in the previous parts: pre-compilation, ASAN,
and code coverage are CI-compiled and **fully Dockerized**.

It might also be worth mentioning that the pre-compiled FFI artifacts are also
compiled and **cross-compiled** with Docker. Yes, cross-compiled.

### Cross-Compilation & CI


**Digression**

Feel free to skip this part which is not strictly related to LIEF & Rust.


LIEF uses [GitHub Actions](https://github.com/lief-project/LIEF/tree/main/.github/workflows)
for CI. From my experience, macOS and Windows runners are *less* available
than Linux runners (i.e. you wait more for these runners). In addition,
if you use these runners for a private repository (which is not the case for LIEF),
you have a pool of 2000 minutes for the CI of the private repo. Depending
on the runner you are using, these minutes are counted with a multiplier[^gh-multiplier]:

| Operating system | Minute multiplier |
|------------------|-------------------|
| Linux            | 1                 |
| Windows          | 2                 |
| OSX              | 10                |

**1 minute** spent on a **macOS runner** is equivalent to **10 minutes** spent
on a Linux runner. Hence, if your private project is exclusively using the macOS
runner, you don't have 2000 minutes (~33h) but 200 minutes (~3h).

And then, after this pool of 2000 minutes, 1 minute on a macOS 6 vCPU is priced
at **`0.16$`** while the same minute on a Linux 8 vCPU is priced at **`0.032$`**.

Given those facts, cross-compiling for macOS and Windows can be interesting.
LLVM provides all the facilities to perform this cross-compilation[^ad-hoc] and since
we are only generating static libraries, we don't even need the libraries for
these platforms.

**So yes, LIEF core and the Rust FFI library are cross-compiled for Windows(MT/MD CRT) and OSX(aarch64, x86_64)
with a Docker container running on Linux :)**

The Windows and OSX runners are only used for testing that the cross-compilation worked well
(i.e. `ld64` can `link.exe` can link the cross-compiled libraries) and that the test suite
is also working.

Long story short, we save resources and CI minutes by cross-compiling for Windows
and OSX in a Docker running on a Linux runner. As a side effect, we also get fully
reproducible builds. The whole pipeline (LIEF core compilation, ASAN, coverage, S3 upload) takes
less than 15 minutes (with cache optimizations).

## Other Projects

LIEF Rust bindings might not be suitable for all the projects. Especially,
if you are looking for a pure-safety-rust library or a `#![no_std]` context,
please consider using these alternatives which are the standards libraries
in Rust:

* Goblin: https://github.com/m4b/goblin
* gimli-rs - object: https://github.com/gimli-rs/object

## Acknowledgment

Thank you to Erynian for the initial introduction of autocxx when
I was working at Quarkslab :wink:

[^gh-multiplier]: https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions#minute-multipliers
[^ad-hoc]: Including the generation of an ad-hoc signature for the Apple Silicon binaries (c.f [ld/MachO/SyntheticSections.cpp](https://github.com/llvm/llvm-project/blob/llvmorg-18.1.0-rc4/lld/MachO/SyntheticSections.cpp))
