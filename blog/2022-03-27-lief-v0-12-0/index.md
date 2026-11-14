---
title: "LIEF v0.12.0"
description: "LIEF 0.12.0: PE rich header and checksum recomputation, span-based section content with memoryview in Python, and the start of the exception-free refactoring."
canonical_url: "https://lief.re/blog/2022-03-27-lief-v0-12-0/"
markdown_url: "https://lief.re/blog/2022-03-27-lief-v0-12-0/index.md"
authors: ["Romain Thomas"]
date_published: "2022-03-27T00:00:00Z"
date_modified: "2022-03-27T00:00:00Z"
language: "en-US"
section: "blog"
tags: ["release","PE","Python","C++"]
categories: []
---

# LIEF v0.12.0

> LIEF 0.12.0: PE rich header and checksum recomputation, span-based section content with memoryview in Python, and the start of the exception-free refactoring.

We are thrilled to announce that LIEF v0.12.0 is released!
You can find the complete changelog [here](https://lief-project.github.io/doc/stable/changelog.html#march-25-2022).

## LIEF v0.12.0: What's New?

LIEF v0.12.0 is a balanced mix of new features, internal refactoring, and performance improvement.

### New Features

Regarding the new features, we added support for recomputing the PE's rich header and the PE's checksum.
The PE's rich header is a well-known-hidden[^rheader] feature that can be helpful to fingerprint a PE binary.

LIEF enables -- since the version `v0.7.0` -- to access this part of the PE file with the following API:

```python
import lief
pe_file = lief.parse("hello.exe")

rich_header = pe_file.rich_header
print(f"XOR Key: {rich_header.key}")
for e in rich_header.entries:
  print(f"{e.id}: {e.build_id} {e.count}")
```

In LIEF `v0.12.0`, we added two functions:

  1. `LIEF::PE::RichHeader::raw`:  To generate the rich header blob with or without an XOR key.
  2. `LIEF::PE::RichHeader::hash`: To generate the MD5/SHA-1/SHA-256/(...) of the rich header blob.

For those who are looking for PE's markers or tracking PE binaries, these two functions could be used to
generate a characteristic of the binary, regardless of the xor-key:

```python
# [...]
rich_header = pe_file.rich_header

marker = bytes(rich_header.hash(lief.PE.ALGORITHMS.SHA_1)).hex()
```

Still about the PE format, we added `LIEF::PE::OptionalHeader::computed_checksum()` which returns
the recomputed value of the PE's checksum (`LIEF::PE::OptionalHeader::checksum()`).

For regular binaries, the verification of the OptionalHeader's checksum is not enforced by Windows
and the integrity checks are usually deferred to the PE's Authenticode.
Nonetheless, verifying the `checksum()` value with the output of `computed_checksum()` could help
identify binaries that would have been modified after the compilation.

Finally, we added the support for the PE's delayed imports in LIEF and Luca Moro added the support of the
`LC_FILESET_ENTRY` command in the Mach-O format.

### Refactoring & Performance Improvement

We also refactored and enhanced LIEF's internal codebase. Among those changes,
we started to get rid of the C++ exceptions as described in this blog post: [LIEF RTTI & Exceptions](https://lief.re/blog/2022-02-13-lief-rtti-exceptions/)

We also introduced a ``std::span`` like interface (based on [tcbrindle/span](https://github.com/tcbrindle/span))
to avoid returning and potentially copying ``std::vector<uint8_t>``. For instance, [LIEF::Section::content](https://github.com/lief-project/LIEF/blob/57294452a1470f2e1432112d1649068a8cd8047e/include/LIEF/Abstract/Section.hpp#L50)
now uses the span interface. In the Python API, functions and properties that bind a span-returning function
now return a ``py::memoryview`` instead of the *list of bytes*. The original
*list of bytes* can be recovered as follows:

```python
bin = lief.parse("/bin/ls")
section = bin.get_section(".text")

if section is not None:
  memory_view = section.content
  list_of_bytes = list(memory_view)
```

About the performances, we did a global refactoring of the ELF builder as described in this blog post:
[New ELF Builder](https://lief-project.github.io/blog/2022-01-23-new-elf-builder). We also reduced the memory footprint of the ELF parser.
For instance, in LIEF v0.11.5 a binary of 1.5G takes 3G or RAM[^oups] while in LIEF v0.12.0,
it takes quite the same memory as the file size.

![Memory profiling](https://lief.re/blog/2022-03-27-lief-v0-12-0/memory_profile.png)

[Eric Kilmer](https://github.com/ekilmer) also did a nice and complete cleaning of the [LIEF CMake integration](https://github.com/lief-project/LIEF/pull/674)


In February 2022, [tmp.0ut v2](https://tmpout.sh/2/) has been released and [@netspooky](https://twitter.com/netspooky)
presented interesting tricks on the ELF format [^elf_parser] [^elf_endianness]. We fixed the ELF parser
to make sure we handle these tricks.

## What's Next?

We started to implement Rust bindings for LIEF thanks to [cxx](https://cxx.rs/) and [google/autocxx](https://github.com/google/autocxx).
These bindings are in their early stages and we can't confirm they will be present in the next release.
In the current development stage, the API looks like this:

```rust
let mut path: String = "/bin/ls";

match Binary::parse(&path) {
    Binary::ELF(elf) => {
        println!("ELF binary");
        for segment in elf.segments() {
            println!("Address: {:x}", segment.virtual_address);
        }
    },
    Binary::PE(pe) => {
        println!("PE binary");
        let text_section = pe.get_section(".text");
        text_section.name        = ".foo";
        text_section.file_offset = 0x123;

        text_section.commit(); // Commit the changes
    },
    Binary::MachO(macho) => {
        println!("MachO binary");
        for command in macho.commands() {
          match command {
            Commands::Dylib(dylib) => {
              ...
            },
            Commands::Main(main_cmd) => {
              ...
            },
          }
        }

    },
    Binary::Unknown(x) => {
        println!("Unknown");
    },
}
```

We will also merge the (still private) branch that enables to parse Mach-O from memory as well as
the global improvement of the Mach-O's builder.

Regarding LIEF's experimentations and work in progress, here is a list of topics on which we are working
or we would like to work:

| Topic                                                                           | Status                              |
|---------------------------------------------------------------------------------|:------------------------------------|
| Parsing ELF files from memory                                                   | Not started yet                     |
| Parsing DART/Flutter snapshots                                                  | PoC                                 |
| Creating an ELF from scratch                                                    | PoC                                 |
| Parsing PE's private Authenticode: MS Counter Signature                         | Not started yet                     |
| Refactoring the PE's builder                                                    | Not started yet, priority undefined |
| Supporting the Mach-O's commands: LC_DYLD_CHAINED_FIXUPS / LC_DYLD_EXPORTS_TRIE | Done, under testing                 |
| Supporting the archive format (AR)                                              | Early stage                         |

If you are interested in supporting some of these topics, feel free to reach out.


Enjoy!

[^rheader]: https://www.virusbulletin.com/virusbulletin/2020/01/vb2019-paper-rich-headers-leveraging-mysterious-artifact-pe-format/
[^elf_parser]: https://tmpout.sh/2/3.html
[^elf_endianness]: https://tmpout.sh/2/14.html
[^oups]: More generally, we have a factor 2 in memory compared to the file size.
