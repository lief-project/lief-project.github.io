---
title: "New ELF Builder"
description: "After spending months on refactoring the ELF builder, here are the improvements."
canonical_url: "https://lief.re/blog/2022-01-23-new-elf-builder/"
markdown_url: "https://lief.re/blog/2022-01-23-new-elf-builder/index.md"
authors: ["Romain Thomas"]
date_published: "2022-01-23T00:00:00Z"
date_modified: "2022-01-23T00:00:00Z"
language: "en-US"
section: "blog"
tags: ["ELF","builder","internals","performance"]
categories: []
---

# New ELF Builder

> After spending months on refactoring the ELF builder, here are the improvements.

## LIEF's Modification Process

Let's start with a small recap of the LIEF modification process.

To enable executable file formats modification, LIEF transforms the raw executable formats into an object representation.
This object can be manipulated with an API that is mainly exposed through the following interfaces:

| C++                                                                                        | Python                                                                                      |
|:-------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------|
| [LIEF::ELF::Binary](https://lief-project.github.io/doc/latest/api/cpp/elf.html#binary)     | [lief.ELF.Binary](https://lief-project.github.io/doc/latest/api/python/elf.html#binary)     |
| [LIEF::PE::Binary](https://lief-project.github.io/doc/latest/api/cpp/pe.html#binary)       | [lief.PE.Binary](https://lief-project.github.io/doc/latest/api/python/pe.html#binary)       |
| [LIEF::MachO::Binary](https://lief-project.github.io/doc/latest/api/cpp/macho.html#binary) | [lief.MachO.Binary](https://lief-project.github.io/doc/latest/api/python/macho.html#binary) |

Then, the LIEF's *builders* take the object representation and (*try to*) reconstruct an executable according
to the user's changes.

## Challenges in Modifying ELF Binaries

Compared to the PE and Mach-O formats, the ELF format is far trickier to handle for both parsing and modifying.
First off, there is a strong relationship between the segment's virtual address and the file's offset associated with its content.
This relationship is ruled by the following property:


$$\text{\textcolor{red}{file\_offset}} \equiv \text{\textcolor{blue}{virtual\_address}} \mod{\textcolor{green}{\text{page\_size}}}$$


So basically, **we can't** insert a segment at an arbitrary virtual address.

The second difficulty is about the strings table optimization that is performed on the ``.dynstr`` section.
To understand how this optimization works, let's consider these two functions:

```cpp
int foo() {
  return 1;
}

int call_foo() {
  return foo();
}
```

When these functions are compiled, the compiler generates two symbols for which the names of the symbols are referenced
by the field ``st_name``. Usually, this field points in the ``.dynstr`` section:

```cpp
struct Elf_Sym {
  Elf_Word  st_name; // Offset of the symbol's name in the .dynstr section
  ...
};
```

Naively, we could imagine that the ``.dynstr`` section contains these two symbols names, one next to the other:

```hex
00000130  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
00000140  0d 00 00 00 12 00 01 00  00 00 00 00 00 00 00 00  |................|
00000150  0b 00 00 00 00 00 00 00  0a 00 00 00 12 00 01 00  |................|
00000160  0b 00 00 00 00 00 00 00  0b 00 00 00 00 00 00 00  |................|
00000170  00 74 6f 74 6f 2e 63 70  70 00 66 6f 6f 00 64 6f  |.test.cpp.foo.do|
00000180  5f 66 6f 6f 00 00 00 00  10 00 00 00 00 00 00 00  |_foo............|
00000
```

With such a layout, ``Elf_Sym("foo").st_name`` would point to the offset **0x17A** while
``Elf_Sym("do_foo").st_name`` would point to the offset **0x17E**.

But the real layout of the ``.dynstr`` is a bit smaller:

```hex
00000130  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
00000140  0d 00 00 00 12 00 01 00  00 00 00 00 00 00 00 00  |................|
00000150  0b 00 00 00 00 00 00 00  0a 00 00 00 12 00 01 00  |................|
00000160  0b 00 00 00 00 00 00 00  0b 00 00 00 00 00 00 00  |................|
00000170  00 74 6f 74 6f 2e 63 70  70 00 64 6f 5f 66 6f 6f  |.test.cpp.do_foo|
00000180  00 00 00 00 00 00 00 00  10 00 00 00 00 00 00 00  |................|
00000190  04 00 00 00 03 00 00 00  fc ff ff ff ff ff ff ff  |................|
```

As we can see, it only contains the ``do_foo`` string. Since ``foo`` is **a suffix** of ``do_foo``,
``st_name`` can point to a different offset of the **same string**. In this layout ``Elf_Sym("foo").st_name`` points
to the offset **0x17C** and ``Elf_Sym("foo").st_name`` points to **0x17A**.

Consequently, instead of taking the space of ``len(call_foo) + 1 + len(foo) + 1``, it only takes ``len(call_foo) + 1``
The consequence of this optimization is that we can't naively push back the symbols names in the ``.dynstr`` section.
Instead, we have to sort the symbols names such as this optimization can take place.

In addition to this strings optimization, ELF object files (``.o``) generated by Clang share the same section for
the names of the sections and for the symbols' names.

```bash
$ readelf -hWS ./hello.o

ELF Header:
  Magic:   7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00
  [...]
  Number of section headers:         11
  Section header string table index: 1

Section Headers:
  [Nr] Name       Type    Address          Off    Size   ES Flg Lk Inf Al
  [ 0]            NULL    0000000000000000 000000 000000 00      0   0  0
  [ 1] .strtab    STRTAB  0000000000000000 000199 000078 00      0   0  1
  [..]
  [10] .symtab    SYMTAB  0000000000000000 0000c0 000090 18      1   4  8
```

As we can notice, the *Section header string table index* of the ELF header indexes the ``.strtab``
which is also the section associated with the symbols' names (cf. the *link* attribute of the ``.symtab``).

It results that we have to consider this kind of ELF file differently from regular libraries or executables.

There are other nasty tricks like the management of the ELF constructors between Linux and Android but this
will be covered in another blog post.

## The New ELF Builder

For the historical context, I created LIEF during my internship at [Quarkslab](https://quarkslab.com/)
with the supervision of [Serge-Sans-Paille](http://serge.liyun.free.fr) and [Adrien Guinet](https://aguinet.github.io/)
and the trust/boost from [Fred Raynal](https://quarkslab.com/about/).

Even though I had the chance to get valuable feedback and review from them, I clearly made poor design decisions in LIEF
and the implementation of the ELF builder is one of them.

Basically, the implementation is **recursive** such as in the extreme cases the builder re-computes the same
information several times.

In the new implementation, we added a new stage in the build process that pre-computes the offsets of the new sections
and the data that need to be relocated.
This pre-computation enables to know exactly which parts of the ELF structures need to be relocated according to the
user's changes.
This computation is managed by the [Layout](https://github.com/lief-project/LIEF/blob/2ae5327e86f50fe87733d8641d4e7bc3774e3087/src/ELF/ExeLayout.hpp) class which has two implementations depending on
whether it is an ELF object or a library/executable.

Compared to the previous ELF builder, this new implementation produces smaller files (with fewer ELF segments)
as exposed in the following figure. This figure compares the number of segments between the former and the new implementation:


![Comparison of the number of segments generated](https://lief.re/blog/2022-01-23-new-elf-builder/bench_nb_segments.png)




In addition, it supports larger binaries faster as a consequence of the new linear implementation of the ELF builder :)


![Comparison of the number of segments generated](https://lief.re/blog/2022-01-23-new-elf-builder/bench_time.png)




To perform these benchmarks, we generated ELF binaries with the modifications described in the following script:

```python
import lief

elf: lief.ELF.Binary = lief.parse(file_path.as_posix())

# Force relocating the .dynamic/.dynstr
elf.add_library("a_very_long_name.so")

# For relocating the interpreter
elf.interpreter = "/a/very/longlonglong/interpreter-1.2.3.bin"

# Force relocating .dynsym / .gnu.hash table
for i in range(10):
    elf.add_exported_function(0xdeadc0de + i, f"new_export_{i}")

# Add a segment
segment         = lief.ELF.Segment()
segment.type    = lief.ELF.SEGMENT_TYPES.LOAD
segment.content = [0xcc] * 0x23

elf.add(segment)

elf.write("/tmp/bench.bin")
```

The raw results of the benchmark are also available [here](https://lief.re/blog/2022-01-23-new-elf-builder/benchmark.txt)


## Final Words

These new improvements introduce breaking changes in the ELF binaries generated by LIEF but:

1. The final binary size should be smaller
2. The building time should be much faster

We tried to cover most of the cases in the tests suite but some corner cases with exotic compilers or linkers might
break the final binaries.

Since this improvement aims at being in the next release, feel free to drop an email or to open an issue if
you find a bug with this new implementation.



---






*Since September I continue maintaining LIEF exclusively in my spare so issues and new features are
addressed with more delay.*
