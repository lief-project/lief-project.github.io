---
documentID: "33678d82524e3a7e956d6497286b9c4f7228723cbf832139d7e479105006cda3"
docname: "api/binary_abstraction/cpp"
title: "Binary Abstraction C++ API - LIEF Documentation"
description: "Binary Abstraction C++ API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/api/binary_abstraction/cpp.html"
markdownURL: "https://lief.re/doc/latest/api/binary_abstraction/cpp.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "fa10457ce90243fe8a6ad37bfe19db3b71a33b1ee2b000c7e22be585bce2abc5"
---

# [C++](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#c>)

## [Parser](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#parser>)

### [` Parser `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6ParserE>)

class Parser

Main interface to parse an executable regardless of its format.

Subclassed by [LIEF::ELF::Parser](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Parser>), [LIEF::MachO::BinaryParser](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1BinaryParser>), [LIEF::MachO::Parser](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Parser>), [LIEF::PE::Parser](<https://lief.re/doc/latest/formats/pe/cpp.html#classLIEF_1_1PE_1_1Parser>)

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Parser5parseENSt11string_viewE>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")&gt; parse(std::string\_view filename)

Construct an [LIEF::Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Binary>) from the given filename.

> **See also**
> 
> [LIEF::MachO::Parser::parse](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Parser_1a0428b02596087b2f0fa19461c8d9b3b6>)

> **Warning**
> 
> If the target file is a FAT Mach-O, it will return the **last** one

#### [` PathTparse `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF6Parser5parseENSt10unique_ptrI6BinaryEERK5PathT>)

template&lt;class PathT, enable\_if\_path\_t&lt;[PathT](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF6Parser5parseENSt10unique_ptrI6BinaryEERK5PathT> "LIEF::Parser::parse::PathT")&gt; = 0&gt;  
static inline std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")&gt; parse(const [PathT](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF6Parser5parseENSt10unique_ptrI6BinaryEERK5PathT> "LIEF::Parser::parse::PathT") &amp;filename)

Same as [parse(std::string\_view)](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Parser_1a4b77ccf1dc25f20b44a23a010a3e7493>) but the file is given as a `std::filesystem::path`.

#### [` parse `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Parser5parseERKNSt6vectorI7uint8_tEE>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")&gt; parse(const std::vector&lt;uint8\_t&gt; &amp;raw)

Construct an [LIEF::Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Binary>) from the given raw data.

> **See also**
> 
> [LIEF::MachO::Parser::parse](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Parser_1a0428b02596087b2f0fa19461c8d9b3b6>)

> **Warning**
> 
> If the target file is a FAT Mach-O, it will return the **last** one

#### [` parse `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Parser5parseENSt10unique_ptrI12BinaryStreamEE>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")&gt; parse(std::unique\_ptr&lt;[BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream")&gt; stream)

Construct an [LIEF::Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Binary>) from the given stream.

> **See also**
> 
> [LIEF::MachO::Parser::parse](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Parser_1a0428b02596087b2f0fa19461c8d9b3b6>)

> **Warning**
> 
> If the target file is a FAT Mach-O, it will return the **last** one

---

## [Header](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#header>)

### [` Header `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6HeaderE>)

class Header : public LIEF::Object

Public Types

#### [` ARCHITECTURES `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURESE>)

enum class ARCHITECTURES

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURES7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` ARM `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURES3ARME>)

enumerator ARM

##### [` ARM64 `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURES5ARM64E>)

enumerator ARM64

##### [` MIPS `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURES4MIPSE>)

enumerator MIPS

##### [` X86 `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURES3X86E>)

enumerator X86

##### [` X86_64 `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURES6X86_64E>)

enumerator X86\_64

##### [` PPC `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURES3PPCE>)

enumerator PPC

##### [` SPARC `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURES5SPARCE>)

enumerator SPARC

##### [` SYSZ `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURES4SYSZE>)

enumerator SYSZ

##### [` XCORE `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURES5XCOREE>)

enumerator XCORE

##### [` RISCV `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURES5RISCVE>)

enumerator RISCV

##### [` LOONGARCH `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURES9LOONGARCHE>)

enumerator LOONGARCH

##### [` PPC64 `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURES5PPC64E>)

enumerator PPC64

#### [` ENDIANNESS `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header10ENDIANNESSE>)

enum class ENDIANNESS

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header10ENDIANNESS7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` BIG `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header10ENDIANNESS3BIGE>)

enumerator BIG

##### [` LITTLE `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header10ENDIANNESS6LITTLEE>)

enumerator LITTLE

#### [` MODES `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header5MODESE>)

enum MODES

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header5MODES4NONEE>)

enumerator NONE = 0

##### [` BITS_16 `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header5MODES7BITS_16E>)

enumerator BITS\_16 = 1LLU &lt;&lt; 0

##### [` BITS_32 `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header5MODES7BITS_32E>)

enumerator BITS\_32 = 1LLU &lt;&lt; 1

16-bits architecture

##### [` BITS_64 `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header5MODES7BITS_64E>)

enumerator BITS\_64 = 1LLU &lt;&lt; 2

32-bits architecture

##### [` THUMB `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header5MODES5THUMBE>)

enumerator THUMB = 1LLU &lt;&lt; 3

64-bits architecture

##### [` ARM64E `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header5MODES6ARM64EE>)

enumerator ARM64E = 1LLU &lt;&lt; 4

Support ARM Thumb mode.

#### [` OBJECT_TYPES `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header12OBJECT_TYPESE>)

enum class OBJECT\_TYPES

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header12OBJECT_TYPES7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` EXECUTABLE `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header12OBJECT_TYPES10EXECUTABLEE>)

enumerator EXECUTABLE

##### [` LIBRARY `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header12OBJECT_TYPES7LIBRARYE>)

enumerator LIBRARY

##### [` OBJECT `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header12OBJECT_TYPES6OBJECTE>)

enumerator OBJECT

Public Functions

#### [` Header `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header6HeaderEv>)

Header() = default

#### [` Header `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header6HeaderERK6Header>)

Header(const [Header](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header6HeaderERK6Header> "LIEF::Header::Header")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6HeaderaSERK6Header>)

[Header](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6HeaderE> "LIEF::Header") &amp;operator=(const [Header](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6HeaderE> "LIEF::Header")&amp;) = default

#### [` ~Header `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6HeaderD0Ev>)

~Header() override = default

#### [` architecture `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Header12architectureEv>)

inline [ARCHITECTURES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header13ARCHITECTURESE> "LIEF::Header::ARCHITECTURES") architecture() const

Target architecture.

#### [` modes `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Header5modesEv>)

inline [MODES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header5MODESE> "LIEF::Header::MODES") modes() const

Optional features for the given architecture.

#### [` modes_list `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Header10modes_listEv>)

std::vector&lt;[MODES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header5MODESE> "LIEF::Header::MODES")&gt; modes\_list() const

[MODES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Header_1ac67c05d4958013a1554ae94b6fd75b4c>) as a vector.

#### [` is `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Header2isE5MODES>)

inline bool is([MODES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header5MODESE> "LIEF::Header::MODES") m) const

#### [` object_type `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Header11object_typeEv>)

inline [OBJECT\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header12OBJECT_TYPESE> "LIEF::Header::OBJECT_TYPES") object\_type() const

#### [` entrypoint `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Header10entrypointEv>)

inline uint64\_t entrypoint() const

#### [` endianness `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Header10endiannessEv>)

inline [ENDIANNESS](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header10ENDIANNESSE> "LIEF::Header::ENDIANNESS") endianness() const

#### [` is_32 `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Header5is_32Ev>)

inline bool is\_32() const

#### [` is_64 `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Header5is_64Ev>)

inline bool is\_64() const

#### [` accept `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Header6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Functions

#### [` from `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header4fromERKN4LIEF3ELF6BinaryE>)

static [Header](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6HeaderE> "LIEF::Header") from(const LIEF::ELF::[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary") &amp;elf)

#### [` from `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header4fromERKN4LIEF2PE6BinaryE>)

static [Header](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6HeaderE> "LIEF::Header") from(const LIEF::PE::[Binary](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6BinaryE> "LIEF::PE::Binary") &amp;pe)

#### [` from `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Header4fromERKN4LIEF5MachO6BinaryE>)

static [Header](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6HeaderE> "LIEF::Header") from(const LIEF::MachO::[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") &amp;macho)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6HeaderlsERNSt7ostreamERK6Header>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Header](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6HeaderE> "LIEF::Header") &amp;hdr)

---

## [Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#binary>)

### [` Binary `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE>)

class Binary : public LIEF::Object

Generic interface representing a binary executable.

This class provides a unified interface across multiple binary formats such as ELF, PE, Mach-O, and others. It enables users to access binary components like headers, sections, symbols, relocations, and functions in a format-agnostic way.

Subclasses like [LIEF::PE::Binary](<https://lief.re/doc/latest/formats/pe/cpp.html#classLIEF_1_1PE_1_1Binary>) implement format-specific API

Subclassed by [LIEF::ELF::Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary>), [LIEF::MachO::Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>), [LIEF::PE::Binary](<https://lief.re/doc/latest/formats/pe/cpp.html#classLIEF_1_1PE_1_1Binary>)

Public Types

#### [` VA_TYPES `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE>)

enum class VA\_TYPES

Enumeration of virtual address types used for patching and memory access.

*Values:*

##### [` AUTO `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPES4AUTOE>)

enumerator AUTO = 0

Automatically determine if the address is absolute or relative (default behavior).

##### [` RVA `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPES3RVAE>)

enumerator RVA = 1

Relative Virtual Address (RVA), offset from image base.

##### [` VA `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPES2VAE>)

enumerator VA = 2

Absolute Virtual Address.

#### [` FORMATS `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary7FORMATSE>)

enum FORMATS

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary7FORMATS7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` ELF `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary7FORMATS3ELFE>)

enumerator ELF

##### [` PE `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary7FORMATS2PEE>)

enumerator PE

##### [` MACHO `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary7FORMATS5MACHOE>)

enumerator MACHO

##### [` OAT `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary7FORMATS3OATE>)

enumerator OAT

#### [` functions_t `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary11functions_tE>)

using functions\_t = std::vector&lt;[Function](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8FunctionE> "LIEF::Function")&gt;

#### [` sections_t `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary10sections_tE>)

using sections\_t = std::vector&lt;[Section](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7SectionE> "LIEF::Section")\*&gt;

Internal container.

#### [` it_sections `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary11it_sectionsE>)

using it\_sections = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[sections\_t](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary10sections_tE> "LIEF::Binary::sections_t")&gt;

Iterator that outputs [LIEF::Section](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Section>)&amp;.

#### [` it_const_sections `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary17it_const_sectionsE>)

using it\_const\_sections = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;[sections\_t](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary10sections_tE> "LIEF::Binary::sections_t")&gt;

Iterator that outputs const [LIEF::Section](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Section>)&amp;.

#### [` symbols_t `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary9symbols_tE>)

using symbols\_t = std::vector&lt;[Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolE> "LIEF::Symbol")\*&gt;

Internal container.

#### [` it_symbols `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary10it_symbolsE>)

using it\_symbols = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[symbols\_t](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary9symbols_tE> "LIEF::Binary::symbols_t")&gt;

Iterator that outputs [LIEF::Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Symbol>)&amp;.

#### [` it_const_symbols `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary16it_const_symbolsE>)

using it\_const\_symbols = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;[symbols\_t](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary9symbols_tE> "LIEF::Binary::symbols_t")&gt;

Iterator that outputs const [LIEF::Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Symbol>)&amp;.

#### [` relocations_t `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary13relocations_tE>)

using relocations\_t = std::vector&lt;[Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10RelocationE> "LIEF::Relocation")\*&gt;

Internal container.

#### [` it_relocations `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary14it_relocationsE>)

using it\_relocations = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[relocations\_t](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary13relocations_tE> "LIEF::Binary::relocations_t")&gt;

Iterator that outputs [LIEF::Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Relocation>)&amp;.

#### [` it_const_relocations `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary20it_const_relocationsE>)

using it\_const\_relocations = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;[relocations\_t](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary13relocations_tE> "LIEF::Binary::relocations_t")&gt;

Iterator that outputs const [LIEF::Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Relocation>)&amp;.

#### [` instructions_it `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary15instructions_itE>)

using instructions\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;assembly::[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction")::[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorE> "LIEF::assembly::Instruction::Iterator")&gt;

Instruction iterator.

Public Functions

#### [` Binary `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary6BinaryEv>)

Binary()

#### [` Binary `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary6BinaryE7FORMATS>)

Binary([FORMATS](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary7FORMATSE> "LIEF::Binary::FORMATS") fmt)

#### [` ~Binary `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryD0Ev>)

~Binary() override

#### [` operator= `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryaSERK6Binary>)

[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary") &amp;operator=(const [Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")&amp;) = delete

#### [` Binary `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary6BinaryERK6Binary>)

Binary(const [Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary6BinaryERK6Binary> "LIEF::Binary::Binary")&amp;) = delete

#### [` format `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary6formatEv>)

inline [FORMATS](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary7FORMATSE> "LIEF::Binary::FORMATS") format() const

Executable format (ELF, PE, Mach-O) of the underlying binary.

#### [` header `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary6headerEv>)

inline [Header](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6HeaderE> "LIEF::Header") header() const

Return the abstract header of the binary.

#### [` symbols `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary7symbolsEv>)

inline [it\_symbols](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary10it_symbolsE> "LIEF::Binary::it_symbols") symbols()

Return an iterator over the abstracted symbols in which the elements **can** be modified.

#### [` symbols `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary7symbolsEv>)

inline [it\_const\_symbols](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary16it_const_symbolsE> "LIEF::Binary::it_const_symbols") symbols() const

Return an iterator over the abstracted symbols in which the elements **can’t** be modified.

#### [` has_symbol `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary10has_symbolERKNSt6stringE>)

inline bool has\_symbol(const std::string &amp;name) const

Check if a [Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Symbol>) with the given name exists.

#### [` get_symbol `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary10get_symbolERKNSt6stringE>)

const [Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolE> "LIEF::Symbol") \*get\_symbol(const std::string &amp;name) const

Return the [Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Symbol>) with the given name If the symbol does not exist, return a nullptr.

#### [` get_symbol `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary10get_symbolERKNSt6stringE>)

inline [Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolE> "LIEF::Symbol") \*get\_symbol(const std::string &amp;name)

#### [` sections `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8sectionsEv>)

inline [it\_sections](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary11it_sectionsE> "LIEF::Binary::it_sections") sections()

Return an iterator over the binary’s sections ([LIEF::Section](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Section>)).

#### [` sections `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary8sectionsEv>)

inline [it\_const\_sections](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary17it_const_sectionsE> "LIEF::Binary::it_const_sections") sections() const

#### [` remove_section `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary14remove_sectionERKNSt6stringEb>)

virtual void remove\_section(const std::string &amp;name, bool clear = false) = 0

Remove **all** the sections in the underlying binary.

#### [` relocations `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary11relocationsEv>)

inline [it\_relocations](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary14it_relocationsE> "LIEF::Binary::it_relocations") relocations()

Return an iterator over the binary relocations ([LIEF::Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Relocation>)).

#### [` relocations `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary11relocationsEv>)

inline [it\_const\_relocations](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary20it_const_relocationsE> "LIEF::Binary::it_const_relocations") relocations() const

#### [` entrypoint `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary10entrypointEv>)

virtual uint64\_t entrypoint() const = 0

[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Binary>)’s entrypoint (if any).

#### [` original_size `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary13original_sizeEv>)

inline uint64\_t original\_size() const

[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Binary>)’s original size.

#### [` exported_functions `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary18exported_functionsEv>)

inline [functions\_t](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary11functions_tE> "LIEF::Binary::functions_t") exported\_functions() const

Return the functions exported by the binary.

#### [` imported_libraries `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary18imported_librariesEv>)

inline std::vector&lt;std::string&gt; imported\_libraries() const

Return libraries which are imported by the binary.

#### [` imported_functions `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary18imported_functionsEv>)

inline [functions\_t](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary11functions_tE> "LIEF::Binary::functions_t") imported\_functions() const

Return functions imported by the binary.

#### [` get_function_address `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary20get_function_addressERKNSt6stringE>)

virtual [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; get\_function\_address(const std::string &amp;func\_name) const

Return the address of the given function name.

#### [` accept `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Method so that a `visitor` can visit us.

#### [` xref `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary4xrefE8uint64_t>)

std::vector&lt;uint64\_t&gt; xref(uint64\_t address) const

#### [` patch_address `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary13patch_addressE8uint64_tRKNSt6vectorI7uint8_tEE8VA_TYPES>)

virtual void patch\_address(uint64\_t address, const std::vector&lt;uint8\_t&gt; &amp;patch\_value, [VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE> "LIEF::Binary::VA_TYPES") addr\_type = [VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE> "LIEF::Binary::VA_TYPES")::[AUTO](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPES4AUTOE> "LIEF::Binary::VA_TYPES::AUTO")) = 0

Patch the content at virtual address `address` with `patch_value`.

**Parameters:**

- **address** – **[in]** Address to patch
- **patch\_value** – **[in]** Patch to apply
- **addr\_type** – **[in]** Specify if the address should be used as an absolute virtual address or a RVA

#### [` patch_address `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary13patch_addressE8uint64_t8uint64_t6size_t8VA_TYPES>)

virtual void patch\_address(uint64\_t address, uint64\_t patch\_value, size\_t size = sizeof(uint64\_t), [VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE> "LIEF::Binary::VA_TYPES") addr\_type = [VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE> "LIEF::Binary::VA_TYPES")::[AUTO](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPES4AUTOE> "LIEF::Binary::VA_TYPES::AUTO")) = 0

Patch the address with the given value.

**Parameters:**

- **address** – **[in]** Address to patch
- **patch\_value** – **[in]** Patch to apply
- **size** – **[in]** Size of the value in **bytes** (1, 2, … 8)
- **addr\_type** – **[in]** Specify if the address should be used as an absolute virtual address or an RVA

#### [` get_content_from_virtual_address `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary32get_content_from_virtual_addressE8uint64_t8uint64_t8VA_TYPES>)

virtual span&lt;const uint8\_t&gt; get\_content\_from\_virtual\_address(uint64\_t virtual\_address, uint64\_t size, [VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE> "LIEF::Binary::VA_TYPES") addr\_type = [VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE> "LIEF::Binary::VA_TYPES")::[AUTO](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPES4AUTOE> "LIEF::Binary::VA_TYPES::AUTO")) const = 0

Return the content located at the given virtual address.

#### [` Tget_int_from_virtual_address `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4I0ENK4LIEF6Binary28get_int_from_virtual_addressEN4LIEF6resultI1TEE8uint64_t8VA_TYPES>)

template&lt;class T&gt;  
inline LIEF::[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[T](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4I0ENK4LIEF6Binary28get_int_from_virtual_addressEN4LIEF6resultI1TEE8uint64_t8VA_TYPES> "LIEF::Binary::get_int_from_virtual_address::T")&gt; get\_int\_from\_virtual\_address(uint64\_t va, [VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE> "LIEF::Binary::VA_TYPES") addr\_type = [VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE> "LIEF::Binary::VA_TYPES")::[AUTO](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPES4AUTOE> "LIEF::Binary::VA_TYPES::AUTO")) const

Get the integer value at the given virtual address.

#### [` original_size `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary13original_sizeE8uint64_t>)

inline void original\_size(uint64\_t size)

Change binary’s original size.

> **Warning**
> 
> This function should be used carefully as some optimizations can be performed with this value

#### [` is_pie `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary6is_pieEv>)

virtual bool is\_pie() const = 0

Check if the binary is position independent.

#### [` has_nx `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary6has_nxEv>)

virtual bool has\_nx() const = 0

Check if the binary uses `NX` protection.

#### [` imagebase `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary9imagebaseEv>)

virtual uint64\_t imagebase() const = 0

Default image base address if the ASLR is not enabled.

#### [` ctor_functions `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary14ctor_functionsEv>)

virtual [functions\_t](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary11functions_tE> "LIEF::Binary::functions_t") ctor\_functions() const = 0

Constructor functions that are called prior any other functions.

#### [` offset_to_virtual_address `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary25offset_to_virtual_addressE8uint64_t8uint64_t>)

virtual [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; offset\_to\_virtual\_address(uint64\_t offset, uint64\_t slide = 0) const = 0

Convert the given offset into a virtual address.

**Parameters:**

- **offset** – **[in]** The offset to convert.
- **slide** – **[in]** If not 0, it will replace the default base address (if any)

#### [` print `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary5printERNSt7ostreamE>)

inline virtual std::ostream &amp;print(std::ostream &amp;os) const

#### [` debug_info `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary10debug_infoEv>)

[DebugInfo](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF9DebugInfoE> "LIEF::DebugInfo") \*debug\_info() const

Return the debug info if present. It can be either a [LIEF::dwarf::DebugInfo](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1DebugInfo>) or a [LIEF::pdb::DebugInfo](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1DebugInfo>).

For ELF and Mach-O binaries, it returns the given [DebugInfo](<https://lief.re/doc/latest/extended/debug_info/index.html#classLIEF_1_1DebugInfo>) object **only** if the binary embeds the DWARF debug info in the binary itself.

For PE file, this function tries to find the **external** PDB using the [LIEF::PE::CodeViewPDB::filename()](<https://lief.re/doc/latest/formats/pe/cpp.html#classLIEF_1_1PE_1_1CodeViewPDB_1a25eff5bf8cc465fdfdb2d7de196ac4d2>) output (if present). One can also use [LIEF::pdb::load()](<https://lief.re/doc/latest/extended/pdb/cpp.html#namespaceLIEF_1_1pdb_1a7727ecafe50e89b819f8988014ff9b5f>) or [LIEF::pdb::DebugInfo::from\_file()](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1DebugInfo_1a40323bf770f1a03ce31d05efc6c156b0>) to get PDB debug info.

> **Warning**
> 
> This function requires LIEF’s extended version otherwise it **always** returns a nullptr

#### [` disassemble `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary11disassembleE8uint64_t6size_t>)

[instructions\_it](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary15instructions_itE> "LIEF::Binary::instructions_it") disassemble(uint64\_t address, size\_t size) const

Disassemble code starting at the given virtual address and with the given size.

```cpp
auto insts = binary->disassemble(0xacde, 100);
for (std::unique_ptr<assembly::Instruction> inst : insts) {
  std::cout << inst->to_string() << '\n';
}
```

> **See also**
> 
> [LIEF::assembly::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction>)

#### [` disassemble `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary11disassembleE8uint64_t>)

[instructions\_it](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary15instructions_itE> "LIEF::Binary::instructions_it") disassemble(uint64\_t address) const

Disassemble code starting at the given virtual address.

```cpp
auto insts = binary->disassemble(0xacde);
for (std::unique_ptr<assembly::Instruction> inst : insts) {
  std::cout << inst->to_string() << '\n';
}
```

> **See also**
> 
> [LIEF::assembly::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction>)

#### [` disassemble `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary11disassembleERKNSt6stringE>)

[instructions\_it](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary15instructions_itE> "LIEF::Binary::instructions_it") disassemble(const std::string &amp;function) const

Disassemble code for the given symbol name.

```cpp
auto insts = binary->disassemble("__libc_start_main");
for (std::unique_ptr<assembly::Instruction> inst : insts) {
  std::cout << inst->to_string() << '\n';
}
```

> **See also**
> 
> [LIEF::assembly::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction>)

#### [` disassemble `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary11disassembleEPK7uint8_t6size_t8uint64_t>)

[instructions\_it](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary15instructions_itE> "LIEF::Binary::instructions_it") disassemble(const uint8\_t \*buffer, size\_t size, uint64\_t address = 0) const

Disassemble code provided by the given buffer at the specified `address` parameter.

The binary and the buffer must outlive the returned iterator.

> **See also**
> 
> [LIEF::assembly::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction>)

#### [` disassemble `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary11disassembleERKNSt6vectorI7uint8_tEE8uint64_t>)

inline [instructions\_it](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary15instructions_itE> "LIEF::Binary::instructions_it") disassemble(const std::vector&lt;uint8\_t&gt; &amp;buffer, uint64\_t address = 0) const

Disassemble code provided by the given vector of bytes at the specified `address` parameter.

> **See also**
> 
> [LIEF::assembly::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction>)

#### [` disassemble `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary11disassembleEN4LIEF4spanIK7uint8_tEE8uint64_t>)

inline [instructions\_it](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary15instructions_itE> "LIEF::Binary::instructions_it") disassemble(LIEF::span&lt;const uint8\_t&gt; buffer, uint64\_t address = 0) const

#### [` disassemble `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary11disassembleEN4LIEF4spanI7uint8_tEE8uint64_t>)

inline [instructions\_it](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary15instructions_itE> "LIEF::Binary::instructions_it") disassemble(LIEF::span&lt;uint8\_t&gt; buffer, uint64\_t address = 0) const

#### [` assemble `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8assembleE8uint64_tNSt11string_viewERN8assembly15AssemblerConfigE>)

std::vector&lt;uint8\_t&gt; assemble(uint64\_t address, std::string\_view Asm, assembly::[AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigE> "LIEF::assembly::AssemblerConfig") &amp;config = assembly::[AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigE> "LIEF::assembly::AssemblerConfig")::[default\_config](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig14default_configEv> "LIEF::assembly::AssemblerConfig::default_config")())

Assemble **and patch** the provided assembly code at the specified address.

The function returns the generated assembly bytes

```cpp
bin->assemble(0x12000440, R"asm(
  xor rax, rbx;
  mov rcx, rax;
)asm");
```

If you need to configure the assembly engine or to define addresses for symbols, you can provide your own [assembly::AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#classLIEF_1_1assembly_1_1AssemblerConfig>).

#### [` assemble `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8assembleE8uint64_tRKN4llvm6MCInstE>)

std::vector&lt;uint8\_t&gt; assemble(uint64\_t address, const llvm::MCInst &amp;inst)

Assemble **and patch** the address with the given LLVM MCInst.

> **Warning**
> 
> Because of ABI compatibility, this MCInst can **only be used** with the **same** version of LLVM used by LIEF (see documentation)

#### [` assemble `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8assembleE8uint64_tRKNSt6vectorIN4llvm6MCInstEEE>)

std::vector&lt;uint8\_t&gt; assemble(uint64\_t address, const std::vector&lt;llvm::MCInst&gt; &amp;insts)

Assemble **and patch** the address with the given LLVM MCInst.

> **Warning**
> 
> Because of ABI compatibility, this MCInst can **only be used** with the **same** version of LLVM used by LIEF (see documentation)

#### [` page_size `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary9page_sizeEv>)

virtual uint64\_t page\_size() const

Get the default memory page size according to the architecture and the format of the current binary.

#### [` load_debug_info `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary15load_debug_infoERKNSt6stringE>)

[DebugInfo](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF9DebugInfoE> "LIEF::DebugInfo") \*load\_debug\_info(const std::string &amp;path)

Load and associate an external debug file (e.g., DWARF or PDB) with this binary.

This method attempts to load the debug information from the file located at the given path, and binds it to the current binary instance. If successful, it returns a pointer to the loaded [DebugInfo](<https://lief.re/doc/latest/extended/debug_info/index.html#classLIEF_1_1DebugInfo>) object.

> **Note**
> 
> This function does not verify that the debug file matches the binary’s unique identifier (e.g., build ID, GUID).

> **Warning**
> 
> It is the caller’s responsibility to ensure that the debug file is compatible with the binary. Incorrect associations may lead to inconsistent or invalid results.

**Parameters:**

**path** – Path to the external debug file (e.g., `.dwarf`, `.pdb`)

**Returns:**

Pointer to the loaded [DebugInfo](<https://lief.re/doc/latest/extended/debug_info/index.html#classLIEF_1_1DebugInfo>) object on success, or `nullptr` on failure.

#### [` virtual_size `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary12virtual_sizeEv>)

inline virtual uint64\_t virtual\_size() const

Size of the binary when mapped in memory.

#### [` Tcast `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4I0ENK4LIEF6Binary4castEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4I0ENK4LIEF6Binary4castEPK1Tv> "LIEF::Binary::cast::T") \*cast() const

This function can be used to **down cast** a [Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Binary>):

```cpp
std::unique_ptr<LIEF::Binary> bin = parse();
if (const auto* elf = bin->cast<LIEF::ELF::Binary>()) {
  const LIEF::ELF::Header& hdr = elf->header();
}
```

#### [` Tcast `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4I0EN4LIEF6Binary4castEP1Tv>)

template&lt;class T&gt;  
inline [T](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4I0EN4LIEF6Binary4castEP1Tv> "LIEF::Binary::cast::T") \*cast()

Friends

#### [` operator<< `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinarylsERNSt7ostreamERK6Binary>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary") &amp;binary)

---

## [Section](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#section>)

### [` Section `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7SectionE>)

class Section : public LIEF::Object

Class which represents an abstracted section.

Subclassed by [LIEF::COFF::Section](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Section>), [LIEF::ELF::Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>), [LIEF::MachO::Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>), [LIEF::PE::Section](<https://lief.re/doc/latest/formats/pe/cpp.html#classLIEF_1_1PE_1_1Section>)

Public Functions

#### [` Section `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7Section7SectionEv>)

Section() = default

#### [` Section `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7Section7SectionENSt6stringE>)

inline Section(std::string name)

#### [` ~Section `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7SectionD0Ev>)

~Section() override = default

#### [` operator= `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7SectionaSERK7Section>)

[Section](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7SectionE> "LIEF::Section") &amp;operator=(const [Section](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7SectionE> "LIEF::Section")&amp;) = default

#### [` Section `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7Section7SectionERK7Section>)

Section(const [Section](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7Section7SectionERK7Section> "LIEF::Section::Section")&amp;) = default

#### [` name `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF7Section4nameEv>)

inline virtual std::string\_view name() const

[Section](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Section>)’s name.

#### [` fullname `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF7Section8fullnameEv>)

inline virtual std::string\_view fullname() const

Return the **complete** section’s name which might include trailing (`0`) bytes.

#### [` content `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF7Section7contentEv>)

inline virtual span&lt;const uint8\_t&gt; content() const

[Section](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Section>)’s content.

#### [` size `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7Section4sizeE8uint64_t>)

inline virtual void size(uint64\_t size)

Change the section size.

#### [` size `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF7Section4sizeEv>)

inline virtual uint64\_t size() const

[Section](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Section>)’s size (size in the binary, not the virtual size).

#### [` offset `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF7Section6offsetEv>)

inline virtual uint64\_t offset() const

Offset in the binary.

#### [` virtual_address `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF7Section15virtual_addressEv>)

inline virtual uint64\_t virtual\_address() const

Address where the section should be mapped.

#### [` virtual_address `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7Section15virtual_addressE8uint64_t>)

inline virtual void virtual\_address(uint64\_t virtual\_address)

#### [` name `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7Section4nameENSt6stringE>)

inline virtual void name(std::string name)

Change the section’s name.

#### [` content `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7Section7contentERKNSt6vectorI7uint8_tEE>)

inline virtual void content(const std::vector&lt;uint8\_t&gt;&amp;)

Change section content.

#### [` offset `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7Section6offsetE8uint64_t>)

inline virtual void offset(uint64\_t offset)

#### [` entropy `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF7Section7entropyEv>)

double entropy() const

[Section](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Section>)’s entropy.

#### [` search `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF7Section6searchE8uint64_t6size_t6size_t>)

size\_t search(uint64\_t integer, size\_t pos, size\_t size) const

#### [` search `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF7Section6searchERKNSt6vectorI7uint8_tEE6size_t>)

size\_t search(const std::vector&lt;uint8\_t&gt; &amp;pattern, size\_t pos = 0) const

#### [` search `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF7Section6searchERKNSt6stringE6size_t>)

size\_t search(const std::string &amp;pattern, size\_t pos = 0) const

#### [` search `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF7Section6searchE8uint64_t6size_t>)

size\_t search(uint64\_t integer, size\_t pos = 0) const

#### [` search_all `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF7Section10search_allE8uint64_t6size_t>)

std::vector&lt;size\_t&gt; search\_all(uint64\_t v, size\_t size) const

#### [` search_all `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF7Section10search_allE8uint64_t>)

std::vector&lt;size\_t&gt; search\_all(uint64\_t v) const

#### [` search_all `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF7Section10search_allERKNSt6stringE>)

std::vector&lt;size\_t&gt; search\_all(const std::string &amp;v) const

#### [` accept `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF7Section6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Method so that the `visitor` can visit us.

Public Static Attributes

#### [` npos `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7Section4nposE>)

static size\_t npos = -1

Friends

#### [` operator<< `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7SectionlsERNSt7ostreamERK7Section>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Section](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7SectionE> "LIEF::Section") &amp;entry)

---

## [Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#symbol>)

### [` Symbol `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolE>)

class Symbol : public LIEF::Object

This class represents a symbol in an executable format.

Subclassed by [LIEF::COFF::Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Symbol>), [LIEF::ELF::Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>), [LIEF::Function](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Function>), [LIEF::MachO::Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>), [LIEF::PE::DelayImportEntry](<https://lief.re/doc/latest/formats/pe/cpp.html#classLIEF_1_1PE_1_1DelayImportEntry>), [LIEF::PE::ExportEntry](<https://lief.re/doc/latest/formats/pe/cpp.html#classLIEF_1_1PE_1_1ExportEntry>), [LIEF::PE::ImportEntry](<https://lief.re/doc/latest/formats/pe/cpp.html#classLIEF_1_1PE_1_1ImportEntry>)

Public Functions

#### [` Symbol `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Symbol6SymbolEv>)

Symbol() = default

#### [` Symbol `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Symbol6SymbolENSt6stringE>)

inline Symbol(std::string name)

#### [` Symbol `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Symbol6SymbolENSt6stringE8uint64_t>)

inline Symbol(std::string name, uint64\_t value)

#### [` Symbol `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Symbol6SymbolENSt6stringE8uint64_t8uint64_t>)

inline Symbol(std::string name, uint64\_t value, uint64\_t size)

#### [` Symbol `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Symbol6SymbolERK6Symbol>)

Symbol(const [Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Symbol6SymbolERK6Symbol> "LIEF::Symbol::Symbol")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolaSERK6Symbol>)

[Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolE> "LIEF::Symbol") &amp;operator=(const [Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolE> "LIEF::Symbol")&amp;) = default

#### [` Symbol `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Symbol6SymbolERR6Symbol>)

Symbol([Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Symbol6SymbolERR6Symbol> "LIEF::Symbol::Symbol")&amp;&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolaSERR6Symbol>)

[Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolE> "LIEF::Symbol") &amp;operator=([Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolE> "LIEF::Symbol")&amp;&amp;) = default

#### [` ~Symbol `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolD0Ev>)

~Symbol() override = default

#### [` swap `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Symbol4swapER6Symbol>)

void swap([Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolE> "LIEF::Symbol") &amp;other) noexcept

#### [` name `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Symbol4nameEv>)

inline virtual std::string\_view name() const

Return the symbol’s name.

#### [` name `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Symbol4nameEv>)

inline virtual std::string &amp;name()

#### [` name `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Symbol4nameENSt6stringE>)

inline virtual void name(std::string name)

Set symbol name.

#### [` value `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Symbol5valueEv>)

inline virtual uint64\_t value() const

[Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Symbol>)’s value which is usually the **address** of the symbol.

#### [` value `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Symbol5valueE8uint64_t>)

inline virtual void value(uint64\_t value)

#### [` size `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Symbol4sizeEv>)

inline virtual uint64\_t size() const

The size of the symbol (when applicable).

#### [` size `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Symbol4sizeE8uint64_t>)

inline virtual void size(uint64\_t value)

#### [` accept `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Symbol6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Method so that the `visitor` can visit us.

Friends

#### [` operator<< `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbollsERNSt7ostreamERK6Symbol>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolE> "LIEF::Symbol") &amp;entry)

---

## [Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#relocation>)

### [` Relocation `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10RelocationE>)

class Relocation : public LIEF::Object

Class which represents an abstracted [Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Relocation>).

Subclassed by [LIEF::COFF::Relocation](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Relocation>), [LIEF::ELF::Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation>), [LIEF::MachO::Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>), [LIEF::PE::RelocationEntry](<https://lief.re/doc/latest/formats/pe/cpp.html#classLIEF_1_1PE_1_1RelocationEntry>)

Public Functions

#### [` Relocation `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10Relocation10RelocationEv>)

Relocation() = default

#### [` Relocation `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10Relocation10RelocationE8uint64_t7uint8_t>)

inline Relocation(uint64\_t address, uint8\_t size)

Constructor from a relocation’s address and size.

#### [` ~Relocation `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10RelocationD0Ev>)

~Relocation() override = default

#### [` operator= `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10RelocationaSERK10Relocation>)

[Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10RelocationE> "LIEF::Relocation") &amp;operator=(const [Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10RelocationE> "LIEF::Relocation")&amp;) = default

#### [` Relocation `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10Relocation10RelocationERK10Relocation>)

Relocation(const [Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10Relocation10RelocationERK10Relocation> "LIEF::Relocation::Relocation")&amp;) = default

#### [` swap `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10Relocation4swapER10Relocation>)

inline void swap([Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10RelocationE> "LIEF::Relocation") &amp;other)

#### [` address `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF10Relocation7addressEv>)

inline virtual uint64\_t address() const

[Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Relocation>)’s address.

#### [` size `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF10Relocation4sizeEv>)

inline virtual size\_t size() const

[Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Relocation>) size in **bits**.

#### [` address `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10Relocation7addressE8uint64_t>)

inline virtual void address(uint64\_t address)

#### [` size `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10Relocation4sizeE6size_t>)

inline virtual void size(size\_t size)

#### [` accept `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF10Relocation6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Method so that the `visitor` can visit us.

#### [` operator< `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF10RelocationltERK10Relocation>)

inline virtual bool operator&lt;(const [Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10RelocationE> "LIEF::Relocation") &amp;rhs) const

Comparison based on the [Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Relocation>)’s **address**.

#### [` operator<= `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF10RelocationleERK10Relocation>)

inline virtual bool operator&lt;=(const [Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10RelocationE> "LIEF::Relocation") &amp;rhs) const

Comparison based on the [Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Relocation>)’s **address**.

#### [` operator> `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF10RelocationgtERK10Relocation>)

inline virtual bool operator&gt;(const [Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10RelocationE> "LIEF::Relocation") &amp;rhs) const

Comparison based on the [Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Relocation>)’s **address**.

#### [` operator>= `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF10RelocationgeERK10Relocation>)

inline virtual bool operator&gt;=(const [Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10RelocationE> "LIEF::Relocation") &amp;rhs) const

Comparison based on the [Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Relocation>)’s **address**.

Friends

#### [` operator<< `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10RelocationlsERNSt7ostreamERK10Relocation>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10RelocationE> "LIEF::Relocation") &amp;entry)

---

## [Function](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#function>)

### [` Function `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8FunctionE>)

class Function : public LIEF::[Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolE> "LIEF::Symbol")

Class that represents a function in the binary.

Public Types

#### [` FLAGS `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function5FLAGSE>)

enum class FLAGS : uint32\_t

Flags used to characterize the semantics of the function.

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function5FLAGS4NONEE>)

enumerator NONE = 0

##### [` CONSTRUCTOR `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function5FLAGS11CONSTRUCTORE>)

enumerator CONSTRUCTOR = 1 &lt;&lt; 0

The function acts as a constructor.

Usually this flag is associated with functions that are located in the `.init_array`, `__mod_init_func` or `.tls` sections

##### [` DESTRUCTOR `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function5FLAGS10DESTRUCTORE>)

enumerator DESTRUCTOR = 1 &lt;&lt; 1

The function acts as a destructor.

Usually this flag is associated with functions that are located in the `.fini_array` or `__mod_term_func` sections

##### [` DEBUG_INFO `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function5FLAGS10DEBUG_INFOE>)

enumerator DEBUG\_INFO = 1 &lt;&lt; 2

The function is associated with Debug information.

##### [` EXPORTED `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function5FLAGS8EXPORTEDE>)

enumerator EXPORTED = 1 &lt;&lt; 3

The function is exported by the binary and the [address()](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Function_1ae8052f13a117216f5fe7a4935de03876>) method returns its virtual address in the binary.

##### [` IMPORTED `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function5FLAGS8IMPORTEDE>)

enumerator IMPORTED = 1 &lt;&lt; 4

The function is **imported** by the binary and the [address()](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Function_1ae8052f13a117216f5fe7a4935de03876>) should return 0.

Public Functions

#### [` Function `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function8FunctionEv>)

Function() = default

#### [` Function `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function8FunctionERKNSt6stringE>)

inline Function(const std::string &amp;name)

#### [` Function `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function8FunctionE8uint64_t>)

inline Function(uint64\_t address)

#### [` Function `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function8FunctionERKNSt6stringE8uint64_t>)

inline Function(const std::string &amp;name, uint64\_t address)

#### [` Function `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function8FunctionERKNSt6stringE8uint64_t5FLAGS>)

inline Function(const std::string &amp;name, uint64\_t address, [FLAGS](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function5FLAGSE> "LIEF::Function::FLAGS") flags)

#### [` Function `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function8FunctionERK8Function>)

Function(const [Function](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function8FunctionERK8Function> "LIEF::Function::Function")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8FunctionaSERK8Function>)

[Function](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8FunctionE> "LIEF::Function") &amp;operator=(const [Function](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8FunctionE> "LIEF::Function")&amp;) = default

#### [` ~Function `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8FunctionD0Ev>)

~Function() override = default

#### [` flags_list `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF8Function10flags_listEv>)

std::vector&lt;[FLAGS](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function5FLAGSE> "LIEF::Function::FLAGS")&gt; flags\_list() const

List of [FLAGS](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Function_1a8a2306e2bd815cc2e65a1caf80db8a9b>).

#### [` flags `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF8Function5flagsEv>)

inline [FLAGS](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function5FLAGSE> "LIEF::Function::FLAGS") flags() const

#### [` add `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function3addE5FLAGS>)

inline [Function](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8FunctionE> "LIEF::Function") &amp;add([FLAGS](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function5FLAGSE> "LIEF::Function::FLAGS") f)

Add a flag to the current function.

#### [` has `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF8Function3hasE5FLAGS>)

inline bool has([FLAGS](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function5FLAGSE> "LIEF::Function::FLAGS") f) const

Check if the function has the given flag.

#### [` address `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF8Function7addressEv>)

inline uint64\_t address() const

Address of the current function. For functions that are set with the [FLAGS::IMPORTED](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Function_1a8a2306e2bd815cc2e65a1caf80db8a9baddd8b20de29f8e61cc02fe0399d80d2f>) flag, this value is likely 0.

#### [` address `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8Function7addressE8uint64_t>)

inline void address(uint64\_t address)

#### [` accept `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF8Function6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8FunctionlsERNSt7ostreamERK8Function>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Function](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF8FunctionE> "LIEF::Function") &amp;entry)
