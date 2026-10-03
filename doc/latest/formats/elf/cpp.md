---
documentID: "642673de815b64d38a0a1a7280e50b797af4f9dd6e295635511d53b418a4af3f"
docname: "formats/elf/cpp"
title: "ELF C++ API - LIEF Documentation"
description: "ELF C++ API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/formats/elf/cpp.html"
markdownURL: "https://lief.re/doc/latest/formats/elf/cpp.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "e238936b242eb7d662b44d8d5b6ac093a2508b01846f018e2f49ad52945be015"
---

# [C++](<https://lief.re/doc/latest/formats/elf/cpp.html#c>)

## [Parser](<https://lief.re/doc/latest/formats/elf/cpp.html#parser>)

### [` Parser `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6ParserE>)

class Parser : public LIEF::[Parser](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6ParserE> "LIEF::Parser")

Class which parses and transforms an ELF file into a [ELF::Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary>) object.

Subclassed by [LIEF::OAT::Parser](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1Parser>)

Public Types

#### [` ELF_TYPE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser8ELF_TYPEE>)

enum ELF\_TYPE

*Values:*

##### [` ELF_UNKNOWN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser8ELF_TYPE11ELF_UNKNOWNE>)

enumerator ELF\_UNKNOWN

##### [` ELF32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser8ELF_TYPE5ELF32E>)

enumerator ELF32

##### [` ELF64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser8ELF_TYPE5ELF64E>)

enumerator ELF64

Public Functions

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6ParseraSERK6Parser>)

[Parser](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6ParserE> "LIEF::ELF::Parser") &amp;operator=(const [Parser](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6ParserE> "LIEF::ELF::Parser")&amp;) = delete

#### [` Parser `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser6ParserERK6Parser>)

Parser(const [Parser](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser6ParserERK6Parser> "LIEF::ELF::Parser::Parser")&amp;) = delete

#### [` ~Parser `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6ParserD0Ev>)

~Parser()

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser5parseENSt11string_viewERK12ParserConfig>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse(std::string\_view file, const [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig")::[all](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig3allEv> "LIEF::ELF::ParserConfig::all")())

Parse an ELF file and return a [LIEF::ELF::Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary>) object.

For weird binaries (e.g. sectionless) you can choose which method to use for counting dynamic symbols

**Parameters:**

- **file** – **[in]** Path to the ELF binary
- **conf** – **[in]** Optional configuration for the parser

**Returns:**

[LIEF::ELF::Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary>) as a `unique_ptr`

#### [` PathTparse `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF3ELF6Parser5parseENSt10unique_ptrI6BinaryEERK5PathTRK12ParserConfig>)

template&lt;class PathT, enable\_if\_path\_t&lt;[PathT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF3ELF6Parser5parseENSt10unique_ptrI6BinaryEERK5PathTRK12ParserConfig> "LIEF::ELF::Parser::parse::PathT")&gt; = 0&gt;  
static inline std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse(const [PathT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF3ELF6Parser5parseENSt10unique_ptrI6BinaryEERK5PathTRK12ParserConfig> "LIEF::ELF::Parser::parse::PathT") &amp;file, const [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig")::[all](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig3allEv> "LIEF::ELF::ParserConfig::all")())

Same as [parse(std::string\_view, const ParserConfig&amp;)](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Parser_1a156c6a26865cb80101a1e8997720be5b>) but the file is given as a `std::filesystem::path`.

#### [` parse `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser5parseERKNSt6vectorI7uint8_tEERK12ParserConfig>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse(const std::vector&lt;uint8\_t&gt; &amp;data, const [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig")::[all](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig3allEv> "LIEF::ELF::ParserConfig::all")())

Parse the given raw data as an ELF binary and return a [LIEF::ELF::Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary>) object.

For weird binaries (e.g. sectionless) you can choose which method to use to count dynamic symbols

**Parameters:**

- **data** – **[in]** Raw ELF as a std::vector of uint8\_t
- **conf** – **[in]** Optional configuration for the parser

**Returns:**

[LIEF::ELF::Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary>)

#### [` parse `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser5parseENSt10unique_ptrI12BinaryStreamEERK12ParserConfig>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse(std::unique\_ptr&lt;[BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream")&gt; stream, const [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig")::[all](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig3allEv> "LIEF::ELF::ParserConfig::all")())

Parse the ELF binary from the given stream and return a [LIEF::ELF::Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary>) object.

For weird binaries (e.g. sectionless) you can choose which method to use to count dynamic symbols

**Parameters:**

- **stream** – **[in]** The stream which wraps the ELF binary
- **conf** – **[in]** Optional configuration for the parser

**Returns:**

[LIEF::ELF::Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary>)

#### [` parse_from_memory `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser17parse_from_memoryE9uintptr_tRK12ParserConfig>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse\_from\_memory(uintptr\_t address, const [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig")::[all](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig3allEv> "LIEF::ELF::ParserConfig::all")())

Parse the ELF binary from the given memory address.

**Parameters:**

- **address** – **[in]** Base address of the ELF binary in memory
- **conf** – **[in]** Optional configuration for the parser

**Returns:**

[LIEF::ELF::Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary>)

#### [` parse_from_memory `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser17parse_from_memoryE9uintptr_t6size_tRK12ParserConfig>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse\_from\_memory(uintptr\_t address, size\_t size, const [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig")::[all](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig3allEv> "LIEF::ELF::ParserConfig::all")())

Parse the ELF binary from the given memory address with the given size.

**Parameters:**

- **address** – **[in]** Base address of the ELF binary in memory
- **size** – **[in]** Size of the memory region
- **conf** – **[in]** Optional configuration for the parser

**Returns:**

[LIEF::ELF::Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary>)

#### [` parse_from_dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser15parse_from_dumpENSt11string_viewE8uint64_tRK12ParserConfig>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse\_from\_dump(std::string\_view filepath, uint64\_t addr, const [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig")::[all](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig3allEv> "LIEF::ELF::ParserConfig::all")())

Parse an ELF binary from a memory dump located on disk.

A dump is a raw capture of the process memory that was mapped starting at the virtual address `addr`. This is typically used to parse an ELF image that has been dumped from memory (e.g. from a debugger or a runtime hook).

**Parameters:**

- **filepath** – **[in]** Path to the file that contains the memory dump
- **addr** – **[in]** Virtual address at which the dump was mapped
- **conf** – **[in]** Optional configuration for the parser

#### [` PathTparse_from_dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF3ELF6Parser15parse_from_dumpENSt10unique_ptrI6BinaryEERK5PathT8uint64_tRK12ParserConfig>)

template&lt;class PathT, enable\_if\_path\_t&lt;[PathT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF3ELF6Parser15parse_from_dumpENSt10unique_ptrI6BinaryEERK5PathT8uint64_tRK12ParserConfig> "LIEF::ELF::Parser::parse_from_dump::PathT")&gt; = 0&gt;  
static inline std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse\_from\_dump(const [PathT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF3ELF6Parser15parse_from_dumpENSt10unique_ptrI6BinaryEERK5PathT8uint64_tRK12ParserConfig> "LIEF::ELF::Parser::parse_from_dump::PathT") &amp;filepath, uint64\_t addr, const [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig")::[all](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig3allEv> "LIEF::ELF::ParserConfig::all")())

Same as [parse\_from\_dump(std::string\_view, uint64\_t, const ParserConfig&amp;)](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Parser_1a0d09451198a249a249f05f372c311c8e>) but the dump file is given as a `std::filesystem::path`.

#### [` parse_from_dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser15parse_from_dumpER12BinaryStream8uint64_tRK12ParserConfig>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse\_from\_dump([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream, uint64\_t addr, const [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig")::[all](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig3allEv> "LIEF::ELF::ParserConfig::all")())

Same as [parse\_from\_dump(std::string\_view, uint64\_t, const ParserConfig&amp;)](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Parser_1a0d09451198a249a249f05f372c311c8e>) but the dump is wrapped in the given **non-owned** stream.

#### [` parse_from_dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser15parse_from_dumpENSt10unique_ptrI12BinaryStreamEE8uint64_tRK12ParserConfig>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse\_from\_dump(std::unique\_ptr&lt;[BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream")&gt; stream, uint64\_t addr, const [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig")::[all](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig3allEv> "LIEF::ELF::ParserConfig::all")())

Same as [parse\_from\_dump(std::string\_view, uint64\_t, const ParserConfig&amp;)](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Parser_1a0d09451198a249a249f05f372c311c8e>) but the dump is wrapped in the given **owned** stream.

Public Static Attributes

#### [` NB_MAX_SYMBOLS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser14NB_MAX_SYMBOLSE>)

static uint32\_t NB\_MAX\_SYMBOLS = 1000000

#### [` DELTA_NB_SYMBOLS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser16DELTA_NB_SYMBOLSE>)

static uint32\_t DELTA\_NB\_SYMBOLS = 3000

#### [` NB_MAX_BUCKETS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser14NB_MAX_BUCKETSE>)

static uint32\_t NB\_MAX\_BUCKETS = [NB\_MAX\_SYMBOLS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser14NB_MAX_SYMBOLSE> "LIEF::ELF::Parser::NB_MAX_SYMBOLS")

#### [` NB_MAX_CHAINS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser13NB_MAX_CHAINSE>)

static uint32\_t NB\_MAX\_CHAINS = 1000000

#### [` NB_MAX_SEGMENTS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser15NB_MAX_SEGMENTSE>)

static uint32\_t NB\_MAX\_SEGMENTS = 10000

#### [` NB_MAX_RELOCATIONS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser18NB_MAX_RELOCATIONSE>)

static uint32\_t NB\_MAX\_RELOCATIONS = 3000000

#### [` NB_MAX_DYNAMIC_ENTRIES `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser22NB_MAX_DYNAMIC_ENTRIESE>)

static uint32\_t NB\_MAX\_DYNAMIC\_ENTRIES = 1000

#### [` MAX_SEGMENT_SIZE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Parser16MAX_SEGMENT_SIZEE>)

static uint32\_t MAX\_SEGMENT\_SIZE = 3\_GB

Friends

**friend class OAT::Parser**

### [` ParserConfig `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE>)

struct ParserConfig

This structure is used to tweak the ELF [Parser](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Parser>) ([ELF::Parser](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Parser>)).

Public Types

#### [` DYNSYM_COUNT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig12DYNSYM_COUNTE>)

enum class DYNSYM\_COUNT

Methods that can be used by the [LIEF::ELF::Parser](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Parser>) to count the number of dynamic symbols.

*Values:*

##### [` AUTO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig12DYNSYM_COUNT4AUTOE>)

enumerator AUTO = 0

Automatic detection.

##### [` SECTION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig12DYNSYM_COUNT7SECTIONE>)

enumerator SECTION

Count based on sections (not very reliable).

##### [` HASH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig12DYNSYM_COUNT4HASHE>)

enumerator HASH

Count based on hash table (reliable).

##### [` RELOCATIONS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig12DYNSYM_COUNT11RELOCATIONSE>)

enumerator RELOCATIONS

Count based on PLT/GOT relocations (very reliable but not accurate).

Public Members

#### [` parse_relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig17parse_relocationsE>)

bool parse\_relocations = true

Whether relocations (including plt-like relocations) should be parsed.

#### [` parse_dyn_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig17parse_dyn_symbolsE>)

bool parse\_dyn\_symbols = true

Whether dynamic symbols (those from `.dynsym`) should be parsed.

#### [` parse_symtab_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig20parse_symtab_symbolsE>)

bool parse\_symtab\_symbols = true

Whether debug symbols (those from `.symtab`) should be parsed.

#### [` parse_symbol_versions `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig21parse_symbol_versionsE>)

bool parse\_symbol\_versions = true

Whether versioning symbols should be parsed.

#### [` parse_notes `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig11parse_notesE>)

bool parse\_notes = true

Whether ELF notes information should be parsed.

#### [` parse_overlay `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig13parse_overlayE>)

bool parse\_overlay = true

Whether the overlay data should be parsed.

#### [` count_mtd `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig9count_mtdE>)

[DYNSYM\_COUNT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig12DYNSYM_COUNTE> "LIEF::ELF::ParserConfig::DYNSYM_COUNT") count\_mtd = [DYNSYM\_COUNT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig12DYNSYM_COUNTE> "LIEF::ELF::ParserConfig::DYNSYM_COUNT")::[AUTO](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig12DYNSYM_COUNT4AUTOE> "LIEF::ELF::ParserConfig::DYNSYM_COUNT::AUTO")

The method used to count the number of dynamic symbols.

#### [` page_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig9page_sizeE>)

uint64\_t page\_size = 0

Memory page size if the binary uses a non-standard value.

For instance, SPARCV9 binary can use page size from 0x2000 to 0x100000.

Public Static Functions

#### [` all `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfig3allEv>)

static inline [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig") all()

This returns a [ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#structLIEF_1_1ELF_1_1ParserConfig>) object configured to process all the ELF elements.

---

## [Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#binary>)

### [` Binary `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE>)

class Binary : public LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")

Class which represents an ELF binary.

Subclassed by [LIEF::OAT::Binary](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1Binary>)

Public Types

#### [` PHDR_RELOC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary10PHDR_RELOCE>)

enum PHDR\_RELOC

This enum describes the different ways to relocate the segments table.

*Values:*

##### [` AUTO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary10PHDR_RELOC4AUTOE>)

enumerator AUTO = 0

Defer the choice of the layout to LIEF.

##### [` PIE_SHIFT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary10PHDR_RELOC9PIE_SHIFTE>)

enumerator PIE\_SHIFT

The content of the binary right after the segments table is shifted and the relocations are updated accordingly. This kind of shift only works with PIE binaries.

##### [` BSS_END `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary10PHDR_RELOC7BSS_ENDE>)

enumerator BSS\_END

The new segments table is relocated right after the first bss-like segment.

##### [` BINARY_END `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary10PHDR_RELOC10BINARY_ENDE>)

enumerator BINARY\_END

The new segments table is relocated at the end of the binary.

##### [` SEGMENT_GAP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary10PHDR_RELOC11SEGMENT_GAPE>)

enumerator SEGMENT\_GAP

The new segments table is relocated between two LOAD segments. This kind of relocation is only doable when there is an alignment enforcement.

#### [` SEC_INSERT_POS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14SEC_INSERT_POSE>)

enum class SEC\_INSERT\_POS

This enum defines where the content of a newly added section should be inserted.

*Values:*

##### [` AUTO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14SEC_INSERT_POS4AUTOE>)

enumerator AUTO = 0

Defer the choice to LIEF.

##### [` POST_SEGMENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14SEC_INSERT_POS12POST_SEGMENTE>)

enumerator POST\_SEGMENT

Insert the section after the last valid offset in the **segments** table.

With this choice, the section is inserted after the loaded content but before any debug information.

##### [` POST_SECTION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14SEC_INSERT_POS12POST_SECTIONE>)

enumerator POST\_SECTION

Insert the section after the last valid offset in the **section** table.

With this choice, the section is inserted at the very end of the binary.

#### [` string_list_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary13string_list_tE>)

using string\_list\_t = std::vector&lt;std::string&gt;

#### [` notes_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary7notes_tE>)

using notes\_t = std::vector&lt;std::unique\_ptr&lt;[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")&gt;&gt;

Internal container for storing notes.

#### [` it_notes `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary8it_notesE>)

using it\_notes = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[notes\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary7notes_tE> "LIEF::ELF::Binary::notes_t")&amp;, [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")\*&gt;

Iterator which outputs [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Note>)&amp; object.

#### [` it_const_notes `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14it_const_notesE>)

using it\_const\_notes = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [notes\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary7notes_tE> "LIEF::ELF::Binary::notes_t")&amp;, const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")\*&gt;

Iterator which outputs const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Note>)&amp; object.

#### [` symbols_version_requirement_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary29symbols_version_requirement_tE>)

using symbols\_version\_requirement\_t = std::vector&lt;std::unique\_ptr&lt;[SymbolVersionRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirementE> "LIEF::ELF::SymbolVersionRequirement")&gt;&gt;

Internal container for storing [SymbolVersionRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionRequirement>).

#### [` it_symbols_version_requirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary30it_symbols_version_requirementE>)

using it\_symbols\_version\_requirement = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[symbols\_version\_requirement\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary29symbols_version_requirement_tE> "LIEF::ELF::Binary::symbols_version_requirement_t")&amp;, [SymbolVersionRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirementE> "LIEF::ELF::SymbolVersionRequirement")\*&gt;

Iterator which outputs [SymbolVersionRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionRequirement>)&amp; object.

#### [` it_const_symbols_version_requirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary36it_const_symbols_version_requirementE>)

using it\_const\_symbols\_version\_requirement = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [symbols\_version\_requirement\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary29symbols_version_requirement_tE> "LIEF::ELF::Binary::symbols_version_requirement_t")&amp;, const [SymbolVersionRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirementE> "LIEF::ELF::SymbolVersionRequirement")\*&gt;

Iterator which outputs const [SymbolVersionRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionRequirement>)&amp; object.

#### [` symbols_version_definition_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary28symbols_version_definition_tE>)

using symbols\_version\_definition\_t = std::vector&lt;std::unique\_ptr&lt;[SymbolVersionDefinition](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinitionE> "LIEF::ELF::SymbolVersionDefinition")&gt;&gt;

Internal container for storing [SymbolVersionDefinition](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionDefinition>).

#### [` it_symbols_version_definition `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary29it_symbols_version_definitionE>)

using it\_symbols\_version\_definition = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[symbols\_version\_definition\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary28symbols_version_definition_tE> "LIEF::ELF::Binary::symbols_version_definition_t")&amp;, [SymbolVersionDefinition](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinitionE> "LIEF::ELF::SymbolVersionDefinition")\*&gt;

Iterator which outputs [SymbolVersionDefinition](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionDefinition>)&amp; object.

#### [` it_const_symbols_version_definition `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary35it_const_symbols_version_definitionE>)

using it\_const\_symbols\_version\_definition = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [symbols\_version\_definition\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary28symbols_version_definition_tE> "LIEF::ELF::Binary::symbols_version_definition_t")&amp;, const [SymbolVersionDefinition](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinitionE> "LIEF::ELF::SymbolVersionDefinition")\*&gt;

Iterator which outputs const [SymbolVersionDefinition](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionDefinition>)&amp; object.

#### [` segments_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary10segments_tE>)

using segments\_t = std::vector&lt;std::unique\_ptr&lt;[Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment")&gt;&gt;

Internal container for storing ELF’s [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Segment>).

#### [` it_segments `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary11it_segmentsE>)

using it\_segments = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[segments\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary10segments_tE> "LIEF::ELF::Binary::segments_t")&amp;, [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment")\*&gt;

Iterator which outputs [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Segment>)&amp; object.

#### [` it_const_segments `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary17it_const_segmentsE>)

using it\_const\_segments = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [segments\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary10segments_tE> "LIEF::ELF::Binary::segments_t")&amp;, const [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment")\*&gt;

Iterator which outputs const [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Segment>)&amp; object.

#### [` dynamic_entries_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary17dynamic_entries_tE>)

using dynamic\_entries\_t = std::vector&lt;std::unique\_ptr&lt;[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")&gt;&gt;

Internal container for storing ELF’s [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntry>).

#### [` it_dynamic_entries `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary18it_dynamic_entriesE>)

using it\_dynamic\_entries = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[dynamic\_entries\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary17dynamic_entries_tE> "LIEF::ELF::Binary::dynamic_entries_t")&amp;, [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")\*&gt;

Iterator which outputs [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntry>)&amp; object.

#### [` it_const_dynamic_entries `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary24it_const_dynamic_entriesE>)

using it\_const\_dynamic\_entries = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [dynamic\_entries\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary17dynamic_entries_tE> "LIEF::ELF::Binary::dynamic_entries_t")&amp;, const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")\*&gt;

Iterator which outputs const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntry>)&amp; object.

#### [` symbols_version_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary17symbols_version_tE>)

using symbols\_version\_t = std::vector&lt;std::unique\_ptr&lt;[SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersionE> "LIEF::ELF::SymbolVersion")&gt;&gt;

Internal container for storing ELF’s [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion>).

#### [` it_symbols_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary18it_symbols_versionE>)

using it\_symbols\_version = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[symbols\_version\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary17symbols_version_tE> "LIEF::ELF::Binary::symbols_version_t")&amp;, [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersionE> "LIEF::ELF::SymbolVersion")\*&gt;

Iterator which outputs [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion>)&amp; object.

#### [` it_const_symbols_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary24it_const_symbols_versionE>)

using it\_const\_symbols\_version = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [symbols\_version\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary17symbols_version_tE> "LIEF::ELF::Binary::symbols_version_t")&amp;, const [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersionE> "LIEF::ELF::SymbolVersion")\*&gt;

Iterator which outputs const [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion>)&amp; object.

#### [` relocations_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary13relocations_tE>)

using relocations\_t = std::vector&lt;std::unique\_ptr&lt;[Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation")&gt;&gt;

Internal container for storing ELF’s [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation>).

#### [` it_pltgot_relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary21it_pltgot_relocationsE>)

using it\_pltgot\_relocations = [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator")&lt;[relocations\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary13relocations_tE> "LIEF::ELF::Binary::relocations_t")&amp;, [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation")\*&gt;

Iterator which outputs plt/got [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation>)&amp; object.

#### [` it_const_pltgot_relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary27it_const_pltgot_relocationsE>)

using it\_const\_pltgot\_relocations = [const\_filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator")&lt;const [relocations\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary13relocations_tE> "LIEF::ELF::Binary::relocations_t")&amp;, const [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation")\*&gt;

Iterator which outputs plt/got const [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation>)&amp; object.

#### [` it_dynamic_relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary22it_dynamic_relocationsE>)

using it\_dynamic\_relocations = [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator")&lt;[relocations\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary13relocations_tE> "LIEF::ELF::Binary::relocations_t")&amp;, [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation")\*&gt;

Iterator which outputs dynamic [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation>)&amp; object (not related to the PLT/GOT mechanism).

#### [` it_const_dynamic_relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary28it_const_dynamic_relocationsE>)

using it\_const\_dynamic\_relocations = [const\_filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator")&lt;const [relocations\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary13relocations_tE> "LIEF::ELF::Binary::relocations_t")&amp;, const [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation")\*&gt;

Iterator which outputs dynamic const [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation>)&amp; object (not related to the PLT/GOT mechanism).

#### [` it_object_relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary21it_object_relocationsE>)

using it\_object\_relocations = [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator")&lt;[relocations\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary13relocations_tE> "LIEF::ELF::Binary::relocations_t")&amp;, [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation")\*&gt;

Iterator which outputs [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation>)&amp; object found in object files (.o).

#### [` it_const_object_relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary27it_const_object_relocationsE>)

using it\_const\_object\_relocations = [const\_filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator")&lt;const [relocations\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary13relocations_tE> "LIEF::ELF::Binary::relocations_t")&amp;, const [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation")\*&gt;

Iterator which outputs const [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation>)&amp; object found in object files (.o).

#### [` it_relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14it_relocationsE>)

using it\_relocations = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[relocations\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary13relocations_tE> "LIEF::ELF::Binary::relocations_t")&amp;, [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation")\*&gt;

Iterator which outputs [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation>)&amp; object.

#### [` it_const_relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary20it_const_relocationsE>)

using it\_const\_relocations = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [relocations\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary13relocations_tE> "LIEF::ELF::Binary::relocations_t")&amp;, const [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation")\*&gt;

Iterator which outputs const [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation>)&amp; object.

#### [` symbols_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary9symbols_tE>)

using symbols\_t = std::vector&lt;std::unique\_ptr&lt;[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol")&gt;&gt;

Internal container for storing ELF’s [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>).

#### [` it_dynamic_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary18it_dynamic_symbolsE>)

using it\_dynamic\_symbols = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[symbols\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary9symbols_tE> "LIEF::ELF::Binary::symbols_t")&amp;, [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol")\*&gt;

Iterator which outputs the Dynamic [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>)&amp; object.

#### [` it_const_dynamic_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary24it_const_dynamic_symbolsE>)

using it\_const\_dynamic\_symbols = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [symbols\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary9symbols_tE> "LIEF::ELF::Binary::symbols_t")&amp;, const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol")\*&gt;

Iterator which outputs the Dynamic const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>)&amp; object.

#### [` it_symtab_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary17it_symtab_symbolsE>)

using it\_symtab\_symbols = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[symbols\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary9symbols_tE> "LIEF::ELF::Binary::symbols_t")&amp;, [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol")\*&gt;

Iterator which outputs the static/debug [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>)&amp; object.

#### [` it_const_symtab_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary23it_const_symtab_symbolsE>)

using it\_const\_symtab\_symbols = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [symbols\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary9symbols_tE> "LIEF::ELF::Binary::symbols_t")&amp;, const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol")\*&gt;

Iterator which outputs the static/debug const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>)&amp; object.

#### [` it_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary10it_symbolsE>)

using it\_symbols = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;std::vector&lt;[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol")\*&gt;&gt;

Iterator which outputs static and dynamic [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>)&amp; object.

#### [` it_const_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary16it_const_symbolsE>)

using it\_const\_symbols = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;std::vector&lt;[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol")\*&gt;&gt;

Iterator which outputs static and dynamic const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>)&amp; object.

#### [` it_exported_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary19it_exported_symbolsE>)

using it\_exported\_symbols = [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator")&lt;std::vector&lt;[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol")\*&gt;&gt;

Iterator which outputs exported [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>)&amp; object.

#### [` it_const_exported_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary25it_const_exported_symbolsE>)

using it\_const\_exported\_symbols = [const\_filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator")&lt;std::vector&lt;[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol")\*&gt;&gt;

Iterator which outputs exported const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>)&amp; object.

#### [` it_imported_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary19it_imported_symbolsE>)

using it\_imported\_symbols = [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator")&lt;std::vector&lt;[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol")\*&gt;&gt;

Iterator which outputs imported [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>)&amp; object.

#### [` it_const_imported_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary25it_const_imported_symbolsE>)

using it\_const\_imported\_symbols = [const\_filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator")&lt;std::vector&lt;[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol")\*&gt;&gt;

Iterator which outputs imported const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>)&amp; object.

#### [` sections_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary10sections_tE>)

using sections\_t = std::vector&lt;std::unique\_ptr&lt;[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section")&gt;&gt;

Internal container for storing ELF’s [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>).

#### [` it_sections `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary11it_sectionsE>)

using it\_sections = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[sections\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary10sections_tE> "LIEF::ELF::Binary::sections_t")&amp;, [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section")\*&gt;

Iterator which outputs [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>)&amp; object.

#### [` it_const_sections `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary17it_const_sectionsE>)

using it\_const\_sections = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [sections\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary10sections_tE> "LIEF::ELF::Binary::sections_t")&amp;, const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section")\*&gt;

Iterator which outputs const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>)&amp; object.

Public Functions

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryaSERK6Binary>)

[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary") &amp;operator=(const [Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&amp;) = delete

#### [` Binary `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary6BinaryERK6Binary>)

Binary(const [Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary6BinaryERK6Binary> "LIEF::ELF::Binary::Binary") &amp;copy) = delete

#### [` type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary4typeEv>)

inline [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[CLASS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASSE> "LIEF::ELF::Header::CLASS") type() const

Return binary’s class (ELF32 or ELF64).

#### [` header `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary6headerEv>)

inline [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header") &amp;header()

Return [Elf header](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Header>) .

#### [` header `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary6headerEv>)

inline const [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header") &amp;header() const

#### [` last_offset_section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary19last_offset_sectionEv>)

uint64\_t last\_offset\_section() const

Return the last offset used in binary according to sections table.

#### [` last_offset_segment `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary19last_offset_segmentEv>)

uint64\_t last\_offset\_segment() const

Return the last offset used in binary according to segments table.

#### [` next_virtual_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary20next_virtual_addressEv>)

uint64\_t next\_virtual\_address() const

Return the next virtual address available.

#### [` sections `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary8sectionsEv>)

inline [it\_sections](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary11it_sectionsE> "LIEF::ELF::Binary::it_sections") sections()

Return an iterator over the binary’s sections.

#### [` sections `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary8sectionsEv>)

inline [it\_const\_sections](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary17it_const_sectionsE> "LIEF::ELF::Binary::it_const_sections") sections() const

#### [` entrypoint `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary10entrypointEv>)

inline virtual uint64\_t entrypoint() const override

Return the binary’s entrypoint.

#### [` segments `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary8segmentsEv>)

inline [it\_segments](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary11it_segmentsE> "LIEF::ELF::Binary::it_segments") segments()

Return binary’s segments.

#### [` segments `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary8segmentsEv>)

inline [it\_const\_segments](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary17it_const_segmentsE> "LIEF::ELF::Binary::it_const_segments") segments() const

#### [` dynamic_entries `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary15dynamic_entriesEv>)

inline [it\_dynamic\_entries](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary18it_dynamic_entriesE> "LIEF::ELF::Binary::it_dynamic_entries") dynamic\_entries()

Return binary’s dynamic entries.

#### [` dynamic_entries `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary15dynamic_entriesEv>)

inline [it\_const\_dynamic\_entries](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary24it_const_dynamic_entriesE> "LIEF::ELF::Binary::it_const_dynamic_entries") dynamic\_entries() const

#### [` add `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary3addERK12DynamicEntry>)

[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry") &amp;add(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry") &amp;entry)

Add the given dynamic entry and return the new entry.

#### [` add `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary3addERK4Note>)

[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") &amp;add(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") &amp;note)

Add the given note and return the created entry.

#### [` remove `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary6removeERK12DynamicEntry>)

void remove(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry") &amp;entry)

Remove the given dynamic entry.

#### [` remove `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary6removeEN12DynamicEntry3TAGE>)

void remove([DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")::[TAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAGE> "LIEF::ELF::DynamicEntry::TAG") tag)

Remove **all** dynamic entries with the given tag.

#### [` remove `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary6removeERK7Sectionb>)

void remove(const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") &amp;section, bool clear = false)

Remove the given section. The `clear` parameter can be used to zeroize the original content beforehand.

**Parameters:**

- **section** – **[in]** The section to remove
- **clear** – **[in]** Whether zeroize the original content

#### [` remove `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary6removeERK4Note>)

void remove(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") &amp;note)

Remove the given note.

#### [` remove `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary6removeEN4Note4TYPEE>)

void remove([Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPEE> "LIEF::ELF::Note::TYPE") type)

Remove **all** notes with the given type.

#### [` remove `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary6removeERK7Segmentb>)

void remove(const [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") &amp;seg, bool clear = false)

Remove the given segment. If `clear` is set, the original content of the segment will be filled with zeros before removal.

#### [` remove `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary6removeEN7Segment4TYPEEb>)

void remove([Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPEE> "LIEF::ELF::Segment::TYPE") type, bool clear = false)

Remove all segments associated with the given type.

If `clear` is set, the original content of the segment will be filled with zeros before removal.

#### [` dynamic_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary15dynamic_symbolsEv>)

inline [it\_dynamic\_symbols](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary18it_dynamic_symbolsE> "LIEF::ELF::Binary::it_dynamic_symbols") dynamic\_symbols()

Return an iterator over the binary’s dynamic symbols The dynamic symbols are those located in the `.dynsym` section.

#### [` dynamic_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary15dynamic_symbolsEv>)

inline [it\_const\_dynamic\_symbols](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary24it_const_dynamic_symbolsE> "LIEF::ELF::Binary::it_const_dynamic_symbols") dynamic\_symbols() const

#### [` exported_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary16exported_symbolsEv>)

[it\_exported\_symbols](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary19it_exported_symbolsE> "LIEF::ELF::Binary::it_exported_symbols") exported\_symbols()

Return symbols which are exported by the binary.

#### [` exported_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary16exported_symbolsEv>)

[it\_const\_exported\_symbols](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary25it_const_exported_symbolsE> "LIEF::ELF::Binary::it_const_exported_symbols") exported\_symbols() const

#### [` imported_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary16imported_symbolsEv>)

[it\_imported\_symbols](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary19it_imported_symbolsE> "LIEF::ELF::Binary::it_imported_symbols") imported\_symbols()

Return symbols which are imported by the binary.

#### [` imported_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary16imported_symbolsEv>)

[it\_const\_imported\_symbols](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary25it_const_imported_symbolsE> "LIEF::ELF::Binary::it_const_imported_symbols") imported\_symbols() const

#### [` symtab_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14symtab_symbolsEv>)

inline [it\_symtab\_symbols](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary17it_symtab_symbolsE> "LIEF::ELF::Binary::it_symtab_symbols") symtab\_symbols()

Return the debug symbols from the `.symtab` section.

#### [` symtab_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary14symtab_symbolsEv>)

inline [it\_const\_symtab\_symbols](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary23it_const_symtab_symbolsE> "LIEF::ELF::Binary::it_const_symtab_symbols") symtab\_symbols() const

#### [` symbols_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary15symbols_versionEv>)

inline [it\_symbols\_version](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary18it_symbols_versionE> "LIEF::ELF::Binary::it_symbols_version") symbols\_version()

Return the symbol versions.

#### [` symbols_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary15symbols_versionEv>)

inline [it\_const\_symbols\_version](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary24it_const_symbols_versionE> "LIEF::ELF::Binary::it_const_symbols_version") symbols\_version() const

#### [` symbols_version_definition `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary26symbols_version_definitionEv>)

inline [it\_symbols\_version\_definition](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary29it_symbols_version_definitionE> "LIEF::ELF::Binary::it_symbols_version_definition") symbols\_version\_definition()

Return symbols version definition.

#### [` symbols_version_definition `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary26symbols_version_definitionEv>)

inline [it\_const\_symbols\_version\_definition](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary35it_const_symbols_version_definitionE> "LIEF::ELF::Binary::it_const_symbols_version_definition") symbols\_version\_definition() const

#### [` symbols_version_requirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary27symbols_version_requirementEv>)

inline [it\_symbols\_version\_requirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary30it_symbols_version_requirementE> "LIEF::ELF::Binary::it_symbols_version_requirement") symbols\_version\_requirement()

Return [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>) version requirement.

#### [` symbols_version_requirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary27symbols_version_requirementEv>)

inline [it\_const\_symbols\_version\_requirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary36it_const_symbols_version_requirementE> "LIEF::ELF::Binary::it_const_symbols_version_requirement") symbols\_version\_requirement() const

#### [` dynamic_relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary19dynamic_relocationsEv>)

[it\_dynamic\_relocations](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary22it_dynamic_relocationsE> "LIEF::ELF::Binary::it_dynamic_relocations") dynamic\_relocations()

Return dynamic relocations.

#### [` dynamic_relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary19dynamic_relocationsEv>)

[it\_const\_dynamic\_relocations](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary28it_const_dynamic_relocationsE> "LIEF::ELF::Binary::it_const_dynamic_relocations") dynamic\_relocations() const

#### [` add_dynamic_relocation `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary22add_dynamic_relocationERK10Relocation>)

[Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation") &amp;add\_dynamic\_relocation(const [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation") &amp;relocation)

Add a new *dynamic* relocation.

We consider a dynamic relocation as a relocation which is not plt-related

See: add\_pltgot\_relocation

#### [` add_pltgot_relocation `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary21add_pltgot_relocationERK10Relocation>)

[Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation") &amp;add\_pltgot\_relocation(const [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation") &amp;relocation)

Add a .plt.got relocation. This kind of relocation is usually associated with a PLT stub that aims at resolving the underlying symbol.

See also: add\_dynamic\_relocation

#### [` add_object_relocation `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary21add_object_relocationERK10RelocationRK7Section>)

[Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation") \*add\_object\_relocation(const [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation") &amp;relocation, const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") &amp;section)

Add relocation for object file (.o).

The first parameter is the section to add while the second parameter is the [LIEF::ELF::Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>) associated with the relocation.

If there is an error, this function returns a `nullptr`. Otherwise, it returns the relocation added.

#### [` pltgot_relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary18pltgot_relocationsEv>)

[it\_pltgot\_relocations](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary21it_pltgot_relocationsE> "LIEF::ELF::Binary::it_pltgot_relocations") pltgot\_relocations()

Return `plt.got` relocations.

#### [` pltgot_relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary18pltgot_relocationsEv>)

[it\_const\_pltgot\_relocations](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary27it_const_pltgot_relocationsE> "LIEF::ELF::Binary::it_const_pltgot_relocations") pltgot\_relocations() const

#### [` object_relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary18object_relocationsEv>)

[it\_object\_relocations](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary21it_object_relocationsE> "LIEF::ELF::Binary::it_object_relocations") object\_relocations()

Return relocations used in an object file (`*.o`).

#### [` object_relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary18object_relocationsEv>)

[it\_const\_object\_relocations](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary27it_const_object_relocationsE> "LIEF::ELF::Binary::it_const_object_relocations") object\_relocations() const

#### [` relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary11relocationsEv>)

inline [it\_relocations](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14it_relocationsE> "LIEF::ELF::Binary::it_relocations") relocations()

Return **all** relocations present in the binary.

#### [` relocations `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary11relocationsEv>)

inline [it\_const\_relocations](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary20it_const_relocationsE> "LIEF::ELF::Binary::it_const_relocations") relocations() const

#### [` get_relocation `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary14get_relocationE8uint64_t>)

const [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation") \*get\_relocation(uint64\_t address) const

Return relocation associated with the given address. It returns a `nullptr` if it is not found.

#### [` get_relocation `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14get_relocationE8uint64_t>)

inline [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation") \*get\_relocation(uint64\_t address)

#### [` get_relocation `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary14get_relocationERK6Symbol>)

const [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation") \*get\_relocation(const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") &amp;symbol) const

Return relocation associated with the given [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>) It returns a `nullptr` if it is not found.

#### [` get_relocation `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14get_relocationERK6Symbol>)

inline [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation") \*get\_relocation(const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") &amp;symbol)

#### [` get_relocation `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary14get_relocationERKNSt6stringE>)

const [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation") \*get\_relocation(const std::string &amp;symbol\_name) const

Return relocation associated with the given [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>) name It returns a `nullptr` if it is not found.

#### [` get_relocation `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14get_relocationERKNSt6stringE>)

inline [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation") \*get\_relocation(const std::string &amp;symbol\_name)

#### [` use_gnu_hash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary12use_gnu_hashEv>)

inline bool use\_gnu\_hash() const

`true` if GNU hash is used

> **See also**
> 
> [gnu\_hash](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary_1af22476c785ed75e04f6e0ab9645b6d03>) and [use\_sysv\_hash](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary_1ac7e76fae1dabdd2e8745357a7e8b1167>)

#### [` gnu_hash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary8gnu_hashEv>)

inline const [GnuHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHashE> "LIEF::ELF::GnuHash") \*gnu\_hash() const

Return the [GnuHash](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1GnuHash>) object in **readonly** If the ELF binary does not use the GNU hash table, return a nullptr.

#### [` use_sysv_hash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary13use_sysv_hashEv>)

inline bool use\_sysv\_hash() const

`true` if SYSV hash is used

> **See also**
> 
> [sysv\_hash](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary_1aba917e2f335a3ffb061fd6b1147c4f17>) and [use\_gnu\_hash](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary_1a0899aa1671ad8a1d506b80c99b75b83e>)

#### [` sysv_hash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary9sysv_hashEv>)

inline const [SysvHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHashE> "LIEF::ELF::SysvHash") \*sysv\_hash() const

Return the [SysvHash](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SysvHash>) object as a **read-only** object If the ELF binary does not use the legacy sysv hash table, return a nullptr.

#### [` has_section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary11has_sectionERKNSt6stringE>)

inline bool has\_section(const std::string &amp;name) const

Check if a section with the given name exists in the binary.

#### [` has_section_with_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary23has_section_with_offsetE8uint64_t>)

bool has\_section\_with\_offset(uint64\_t offset) const

Check if a section that handles the given offset exists.

#### [` has_section_with_va `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary19has_section_with_vaE8uint64_t>)

bool has\_section\_with\_va(uint64\_t va) const

Check if a section that handles the given virtual address exists.

#### [` get_section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary11get_sectionENSt11string_viewE>)

inline [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*get\_section(std::string\_view name)

Return [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>) with the given `name`. If the section can’t be found, it returns a nullptr.

#### [` get_section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary11get_sectionENSt11string_viewE>)

const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*get\_section(std::string\_view name) const

#### [` text_section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary12text_sectionEv>)

inline [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*text\_section()

Return the `.text` section. If the section can’t be found, it returns a nullptr.

#### [` dynamic_section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary15dynamic_sectionEv>)

[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*dynamic\_section()

Return the `.dynamic` section. If the section can’t be found, it returns a nullptr.

#### [` hash_section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary12hash_sectionEv>)

[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*hash\_section()

Return the hash section. If the section can’t be found, it returns a nullptr.

#### [` symtab_symbols_section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary22symtab_symbols_sectionEv>)

[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*symtab\_symbols\_section()

Return section which holds the symtab symbols. If the section can’t be found, it returns a nullptr.

#### [` imagebase `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary9imagebaseEv>)

virtual uint64\_t imagebase() const override

Return program image base. For instance `0x40000`.

To compute the image base, we look for the PT\_PHDR segment header (phdr), and we return `phdr->p_vaddr - phdr->p_offset`

#### [` virtual_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary12virtual_sizeEv>)

virtual uint64\_t virtual\_size() const override

Return the size of the mapped binary.

#### [` has_interpreter `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary15has_interpreterEv>)

bool has\_interpreter() const

Check if the binary uses a loader (also named linker or interpreter).

> **See also**
> 
> [interpreter](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary_1a808232d2872b66bbe7562dd4a8d157d2>)

#### [` interpreter `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary11interpreterEv>)

inline std::string\_view interpreter() const

Return the ELF interpreter if any. (e.g. `/lib64/ld-linux-x86-64.so.2`) If the binary does not have an interpreter, it returns an empty string.

> **See also**
> 
> [has\_interpreter](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary_1acb6e06672f3cecf85215857c8bc05a9b>)

#### [` interpreter `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary11interpreterERKNSt6stringE>)

inline void interpreter(const std::string &amp;interpreter)

Change the interpreter.

#### [` symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary7symbolsEv>)

inline [it\_symbols](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary10it_symbolsE> "LIEF::ELF::Binary::it_symbols") symbols()

Return an iterator on both static and dynamic symbols.

#### [` symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary7symbolsEv>)

inline [it\_const\_symbols](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary16it_const_symbolsE> "LIEF::ELF::Binary::it_const_symbols") symbols() const

#### [` export_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary13export_symbolERK6Symbol>)

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") &amp;export\_symbol(const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") &amp;symbol)

Export the given symbol and create it if it doesn’t exist.

#### [` export_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary13export_symbolERKNSt6stringE8uint64_t>)

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") &amp;export\_symbol(const std::string &amp;symbol\_name, uint64\_t value = 0)

Export the symbol with the given name and create it if it doesn’t exist.

#### [` has_dynamic_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary18has_dynamic_symbolERKNSt6stringE>)

inline bool has\_dynamic\_symbol(const std::string &amp;name) const

Check if the symbol with the given `name` exists in the dynamic symbols table.

#### [` get_dynamic_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary18get_dynamic_symbolERKNSt6stringE>)

const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") \*get\_dynamic\_symbol(const std::string &amp;name) const

Get the dynamic symbol from the given name. Return a nullptr if it can’t be found.

#### [` get_dynamic_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary18get_dynamic_symbolERKNSt6stringE>)

inline [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") \*get\_dynamic\_symbol(const std::string &amp;name)

#### [` has_symtab_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary17has_symtab_symbolERKNSt6stringE>)

inline bool has\_symtab\_symbol(const std::string &amp;name) const

Check if the symbol with the given `name` exists in the symtab symbol table.

#### [` get_symtab_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary17get_symtab_symbolERKNSt6stringE>)

const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") \*get\_symtab\_symbol(const std::string &amp;name) const

Get the symtab symbol from the given name Return a nullptr if it can’t be found.

#### [` get_symtab_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary17get_symtab_symbolERKNSt6stringE>)

inline [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") \*get\_symtab\_symbol(const std::string &amp;name)

#### [` strings `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary7stringsE6size_t>)

[string\_list\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary13string_list_tE> "LIEF::ELF::Binary::string_list_t") strings(size\_t min\_size = 5) const

Return list of the strings used by the ELF binary.

Basically, this function looks for strings in the `.rodata` section

#### [` remove_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary13remove_symbolERKNSt6stringE>)

void remove\_symbol(const std::string &amp;name)

Remove symbols with the given name in both:

- dynamic symbols
- symtab symbols

> **See also**
> 
> [remove\_symtab\_symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary_1aa527d4ece7f1a915702f163bd03c9fc1>), [remove\_dynamic\_symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary_1a356928ac709054180f1745ca355ecff3>)

#### [` remove_symtab_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary20remove_symtab_symbolERKNSt6stringE>)

void remove\_symtab\_symbol(const std::string &amp;name)

Remove symtab symbols with the given name.

#### [` remove_symtab_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary20remove_symtab_symbolEP6Symbol>)

void remove\_symtab\_symbol([Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") \*symbol)

#### [` remove_dynamic_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary21remove_dynamic_symbolERKNSt6stringE>)

void remove\_dynamic\_symbol(const std::string &amp;name)

Remove dynamic symbols with the given name.

#### [` remove_dynamic_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary21remove_dynamic_symbolEP6Symbol>)

void remove\_dynamic\_symbol([Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") \*symbol)

Remove the given symbol from the dynamic symbols table.

As a side effect, it will remove any [ELF::Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation>) that refers to this symbol and the [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion>) (if any) associated with this symbol

#### [` get_function_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary20get_function_addressERKNSt6stringE>)

virtual [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; get\_function\_address(const std::string &amp;func\_name) const override

Return the address of the given function name.

#### [` get_function_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary20get_function_addressERKNSt6stringEb>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; get\_function\_address(const std::string &amp;func\_name, bool demangled) const

Return the address of the given function name.

**Parameters:**

- **func\_name** – **[in]** The function’s name target
- **demangled** – **[in]** Use the demangled name

#### [` add `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary3addERK7Sectionb14SEC_INSERT_POS>)

[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*add(const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") &amp;section, bool loaded = true, [SEC\_INSERT\_POS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14SEC_INSERT_POSE> "LIEF::ELF::Binary::SEC_INSERT_POS") pos = [SEC\_INSERT\_POS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14SEC_INSERT_POSE> "LIEF::ELF::Binary::SEC_INSERT_POS")::[AUTO](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14SEC_INSERT_POS4AUTOE> "LIEF::ELF::Binary::SEC_INSERT_POS::AUTO"))

Add a new section in the binary.

This function requires a well-formed ELF binary

**Parameters:**

- **section** – **[in]** The section object to insert
- **loaded** – **[in]** Boolean value to indicate that section’s data must be loaded by a PT\_LOAD segment
- **pos** – **[in]** Position where to insert the data in the sections table

**Returns:**

The section added. The `size` and the `virtual address` might change.

#### [` extend `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary6extendERK7Section8uint64_t>)

[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*extend(const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") &amp;section, uint64\_t size)

#### [` add_symtab_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary17add_symtab_symbolERK6Symbol>)

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") &amp;add\_symtab\_symbol(const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") &amp;symbol)

Add a symtab symbol.

#### [` add_dynamic_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary18add_dynamic_symbolERK6SymbolPK13SymbolVersion>)

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") &amp;add\_dynamic\_symbol(const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") &amp;symbol, const [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersionE> "LIEF::ELF::SymbolVersion") \*version = nullptr)

Add a dynamic symbol with the associated [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion>).

#### [` add_exported_function `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary21add_exported_functionE8uint64_tRKNSt6stringE>)

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") &amp;add\_exported\_function(uint64\_t address, const std::string &amp;name = "")

Create a symbol for the function at the given address and export it.

#### [` add_library `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary11add_libraryERKNSt6stringE>)

[DynamicEntryLibrary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibraryE> "LIEF::ELF::DynamicEntryLibrary") &amp;add\_library(const std::string &amp;library\_name)

Add a library as dependency.

#### [` remove_library `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14remove_libraryERKNSt6stringE>)

void remove\_library(const std::string &amp;library\_name)

Remove the given library from the dependencies.

#### [` get_library `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary11get_libraryERKNSt6stringE>)

inline [DynamicEntryLibrary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibraryE> "LIEF::ELF::DynamicEntryLibrary") \*get\_library(const std::string &amp;library\_name)

Get the library object ([DynamicEntryLibrary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntryLibrary>)) from the given name If the library can’t be found, it returns a nullptr.

#### [` get_library `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary11get_libraryERKNSt6stringE>)

const [DynamicEntryLibrary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibraryE> "LIEF::ELF::DynamicEntryLibrary") \*get\_library(const std::string &amp;library\_name) const

Get the library object ([DynamicEntryLibrary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntryLibrary>)) from the given name If the library can’t be found, it returns a nullptr.

#### [` has_library `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary11has_libraryERKNSt6stringE>)

inline bool has\_library(const std::string &amp;name) const

Check if the given library name exists in the current binary.

#### [` add `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary3addERK7Segment8uint64_t>)

[Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") \*add(const [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") &amp;segment, uint64\_t base = 0)

Add a new segment in the binary.

The segment is inserted at the end

This function requires a well-formed ELF binary

**Returns:**

The segment added. `Virtual address` and `File Offset` might change.

#### [` replace `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary7replaceERK7SegmentRK7Segment8uint64_t>)

[Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") \*replace(const [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") &amp;new\_segment, const [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") &amp;original\_segment, uint64\_t base = 0)

Replace the segment given in 2nd parameter with the segment given in the first one and return the updated segment.

> **Warning**
> 
> The `original_segment` is no longer valid after this function

#### [` extend `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary6extendERK7Segment8uint64_t>)

[Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") \*extend(const [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") &amp;segment, uint64\_t size)

#### [` patch_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary13patch_addressE8uint64_tRKNSt6vectorI7uint8_tEEN4LIEF6Binary8VA_TYPESE>)

virtual void patch\_address(uint64\_t address, const std::vector&lt;uint8\_t&gt; &amp;patch\_value, LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")::[VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE> "LIEF::Binary::VA_TYPES") addr\_type = LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")::[VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE> "LIEF::Binary::VA_TYPES")::[AUTO](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPES4AUTOE> "LIEF::Binary::VA_TYPES::AUTO")) override

Patch the content at virtual address `address` with `patch_value`.

**Parameters:**

- **address** – **[in]** Address to patch
- **patch\_value** – **[in]** Patch to apply
- **addr\_type** – **[in]** Specify if the address should be used as an absolute virtual address or an RVA

#### [` patch_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary13patch_addressE8uint64_t8uint64_t6size_tN4LIEF6Binary8VA_TYPESE>)

virtual void patch\_address(uint64\_t address, uint64\_t patch\_value, size\_t size = sizeof(uint64\_t), LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")::[VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE> "LIEF::Binary::VA_TYPES") addr\_type = LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")::[VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE> "LIEF::Binary::VA_TYPES")::[AUTO](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPES4AUTOE> "LIEF::Binary::VA_TYPES::AUTO")) override

Patch the address with the given value.

**Parameters:**

- **address** – **[in]** Address to patch
- **patch\_value** – **[in]** Patch to apply
- **size** – **[in]** Size of the value in **bytes** (1, 2, … 8)
- **addr\_type** – **[in]** Specify if the address should be used as an absolute virtual address or an RVA

#### [` patch_pltgot `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary12patch_pltgotERK6Symbol8uint64_t>)

void patch\_pltgot(const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") &amp;symbol, uint64\_t address)

Patch the imported symbol with the `address`.

**Parameters:**

- **symbol** – **[in]** Imported symbol to patch
- **address** – **[in]** New address

#### [` patch_pltgot `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary12patch_pltgotERKNSt6stringE8uint64_t>)

void patch\_pltgot(const std::string &amp;symbol\_name, uint64\_t address)

Patch the imported symbol’s name with the `address`.

**Parameters:**

- **symbol\_name** – **[in]** Imported symbol’s name to patch
- **address** – **[in]** New address

#### [` strip `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary5stripEv>)

void strip()

Strip the binary by removing symtab symbols.

#### [` remove_section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14remove_sectionERKNSt6stringEb>)

virtual void remove\_section(const std::string &amp;name, bool clear = false) override

Remove a binary’s section.

**Parameters:**

- **name** – **[in]** The name of the section to remove
- **clear** – **[in]** Whether zeroize the original content

#### [` write `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary5writeERKNSt6stringE>)

inline void write(const std::string &amp;filename)

Reconstruct the binary object and write it in `filename`.

This function assumes that the layout of the current ELF binary is correct (i.e. the binary can run).

**Parameters:**

**filename** – Path for the written ELF binary

#### [` write `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary5writeERKNSt6stringERKN7Builder8config_tE>)

void write(const std::string &amp;filename, const [Builder](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7BuilderE> "LIEF::ELF::Builder")::[config\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_tE> "LIEF::ELF::Builder::config_t") &amp;config)

Reconstruct the binary object with the given config and write it in `filename`.

This function assumes that the layout of the current ELF binary is correct (i.e. the binary can run).

**Parameters:**

- **filename** – Path for the written ELF binary
- **config** – [Builder](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Builder>) configuration

#### [` write `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary5writeERNSt7ostreamE>)

inline void write(std::ostream &amp;os)

Reconstruct the binary object and write it in `os` stream.

This function assumes that the layout of the current ELF binary is correct (i.e. the binary can run).

**Parameters:**

**os** – Output stream for the written ELF binary

#### [` write `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary5writeERNSt7ostreamERKN7Builder8config_tE>)

void write(std::ostream &amp;os, const [Builder](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7BuilderE> "LIEF::ELF::Builder")::[config\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_tE> "LIEF::ELF::Builder::config_t") &amp;config)

Reconstruct the binary object with the given config and write it in `os` stream.

**Parameters:**

- **os** – Output stream for the written ELF binary
- **config** – [Builder](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Builder>) configuration

#### [` raw `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary3rawEv>)

std::vector&lt;uint8\_t&gt; raw()

Reconstruct the binary object and return its content as a byte vector.

#### [` virtual_address_to_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary25virtual_address_to_offsetE8uint64_t>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; virtual\_address\_to\_offset(uint64\_t virtual\_address) const

Convert a virtual address to a file offset.

#### [` offset_to_virtual_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary25offset_to_virtual_addressE8uint64_t8uint64_t>)

virtual [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; offset\_to\_virtual\_address(uint64\_t offset, uint64\_t slide = 0) const override

Convert the given offset into a virtual address.

**Parameters:**

- **offset** – **[in]** The offset to convert.
- **slide** – **[in]** If not 0, it will replace the default base address (if any)

#### [` is_pie `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary6is_pieEv>)

virtual bool is\_pie() const override

Check if the binary has been compiled with `-fpie -pie` flags.

To do so we check if there is a `PT_INTERP` segment and if the binary type is `ET_DYN` (Shared object)

#### [` has_nx `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary6has_nxEv>)

virtual bool has\_nx() const override

Check if the binary uses the `NX` protection (Non executable stack).

#### [` dynsym_idx `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary10dynsym_idxERKNSt6stringE>)

int64\_t dynsym\_idx(const std::string &amp;name) const

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>) index in the dynamic symbol table or -1 if the symbol does not exist.

#### [` dynsym_idx `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary10dynsym_idxERK6Symbol>)

int64\_t dynsym\_idx(const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") &amp;sym) const

#### [` symtab_idx `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary10symtab_idxERKNSt6stringE>)

int64\_t symtab\_idx(const std::string &amp;name) const

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>) index from the `.symtab` section or -1 if the symbol is not present.

#### [` symtab_idx `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary10symtab_idxERK6Symbol>)

int64\_t symtab\_idx(const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") &amp;sym) const

#### [` section_from_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary19section_from_offsetE8uint64_tb>)

const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*section\_from\_offset(uint64\_t offset, bool skip\_nobits = true) const

Return the [ELF::Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>) from the given `offset`. Return a nullptr if a section can’t be found.

If `skip_nobits` is set (which is the case by default), this function won’t consider section for which the type is `SHT_NOBITS` (like `.bss, .tbss, ...`)

#### [` section_from_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary19section_from_offsetE8uint64_tb>)

inline [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*section\_from\_offset(uint64\_t offset, bool skip\_nobits = true)

#### [` section_from_virtual_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary28section_from_virtual_addressE8uint64_tb>)

const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*section\_from\_virtual\_address(uint64\_t address, bool skip\_nobits = true) const

Return the [ELF::Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>) from the given `address`. Return a nullptr if a section can’t be found.

If `skip_nobits` is set (which is the case by default), this function won’t consider section for which type is `SHT_NOBITS` (like `.bss, .tbss, ...`)

#### [` section_from_virtual_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary28section_from_virtual_addressE8uint64_tb>)

inline [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*section\_from\_virtual\_address(uint64\_t address, bool skip\_nobits = true)

#### [` segment_from_virtual_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary28segment_from_virtual_addressE8uint64_t>)

const [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") \*segment\_from\_virtual\_address(uint64\_t address) const

Return the [ELF::Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Segment>) from the given `address`. Return a nullptr if a segment can’t be found.

#### [` segment_from_virtual_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary28segment_from_virtual_addressE8uint64_t>)

inline [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") \*segment\_from\_virtual\_address(uint64\_t address)

#### [` segment_from_virtual_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary28segment_from_virtual_addressEN7Segment4TYPEE8uint64_t>)

const [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") \*segment\_from\_virtual\_address([Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPEE> "LIEF::ELF::Segment::TYPE") type, uint64\_t address) const

#### [` segment_from_virtual_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary28segment_from_virtual_addressEN7Segment4TYPEE8uint64_t>)

inline [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") \*segment\_from\_virtual\_address([Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPEE> "LIEF::ELF::Segment::TYPE") type, uint64\_t address)

#### [` segment_from_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary19segment_from_offsetE8uint64_t>)

const [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") \*segment\_from\_offset(uint64\_t offset) const

Return the [ELF::Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Segment>) from the `offset`. Return a nullptr if a segment can’t be found.

#### [` segment_from_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary19segment_from_offsetE8uint64_t>)

inline [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") \*segment\_from\_offset(uint64\_t offset)

#### [` get `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary3getEN12DynamicEntry3TAGE>)

const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry") \*get([DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")::[TAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAGE> "LIEF::ELF::DynamicEntry::TAG") tag) const

Return the **first** [ELF::DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntry>) associated with the given tag If the tag can’t be found, it returns a nullptr.

#### [` get `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary3getEN12DynamicEntry3TAGE>)

inline [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry") \*get([DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")::[TAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAGE> "LIEF::ELF::DynamicEntry::TAG") tag)

#### [` get `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary3getEN7Segment4TYPEE>)

const [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") \*get([Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPEE> "LIEF::ELF::Segment::TYPE") type) const

Return the **first** [ELF::Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Segment>) associated with the given type. If a segment can’t be found, it returns a nullptr.

#### [` get `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary3getEN7Segment4TYPEE>)

inline [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") \*get([Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPEE> "LIEF::ELF::Segment::TYPE") type)

#### [` get `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary3getEN4Note4TYPEE>)

const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") \*get([Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPEE> "LIEF::ELF::Note::TYPE") type) const

Return the **first** [ELF::Note](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Note>) associated with the given type If a note can’t be found, it returns a nullptr.

#### [` get `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary3getEN4Note4TYPEE>)

inline [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") \*get([Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPEE> "LIEF::ELF::Note::TYPE") type)

#### [` get `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary3getEN7Section4TYPEE>)

const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*get([Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPEE> "LIEF::ELF::Section::TYPE") type) const

Return the **first** [ELF::Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>) associated with the given type If a section can’t be found, it returns a nullptr.

#### [` get `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary3getEN7Section4TYPEE>)

inline [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*get([Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPEE> "LIEF::ELF::Section::TYPE") type)

#### [` has `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary3hasEN12DynamicEntry3TAGE>)

inline bool has([DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")::[TAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAGE> "LIEF::ELF::DynamicEntry::TAG") tag) const

Check if an [ELF::DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntry>) associated with the given tag exists.

#### [` has `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary3hasEN7Segment4TYPEE>)

inline bool has([Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPEE> "LIEF::ELF::Segment::TYPE") type) const

Check if [ELF::Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Segment>) associated with the given type exists.

#### [` has `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary3hasEN4Note4TYPEE>)

inline bool has([Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPEE> "LIEF::ELF::Note::TYPE") type) const

Check if a [ELF::Note](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Note>) associated with the given type exists.

#### [` has `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary3hasEN7Section4TYPEE>)

inline bool has([Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPEE> "LIEF::ELF::Section::TYPE") type) const

Check if a [ELF::Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>) associated with the given type exists.

#### [` get_content_from_virtual_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary32get_content_from_virtual_addressE8uint64_t8uint64_tN6Binary8VA_TYPESE>)

virtual span&lt;const uint8\_t&gt; get\_content\_from\_virtual\_address(uint64\_t virtual\_address, uint64\_t size, [Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")::VA\_TYPES addr\_type = [Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")::VA\_TYPES::AUTO) const override

Return the content located at virtual address.

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary6acceptERN4LIEF7VisitorE>)

virtual void accept(LIEF::Visitor &amp;visitor) const override

Method associated with the visitor pattern.

#### [` permute_dynamic_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary23permute_dynamic_symbolsERKNSt6vectorI6size_tEE>)

void permute\_dynamic\_symbols(const std::vector&lt;size\_t&gt; &amp;permutation)

Apply the given permutation on the dynamic symbols table.

#### [` ctor_functions `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary14ctor_functionsEv>)

virtual LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")::[functions\_t](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary11functions_tE> "LIEF::Binary::functions_t") ctor\_functions() const override

List of binary constructors (typically, the functions located in the `.init_array`).

#### [` dtor_functions `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary14dtor_functionsEv>)

LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")::[functions\_t](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary11functions_tE> "LIEF::Binary::functions_t") dtor\_functions() const

List of the binary destructors (typically, the functions located in the `.fini_array`).

#### [` functions `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary9functionsEv>)

LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")::[functions\_t](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary11functions_tE> "LIEF::Binary::functions_t") functions() const

List of the functions found in the binary.

#### [` has_notes `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary9has_notesEv>)

bool has\_notes() const

`true` if the binary embeds notes

#### [` notes `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary5notesEv>)

inline [it\_const\_notes](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary14it_const_notesE> "LIEF::ELF::Binary::it_const_notes") notes() const

Return an iterator over the ELF’s [LIEF::ELF::Note](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Note>).

> **See also**
> 
> has\_note

#### [` notes `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary5notesEv>)

inline [it\_notes](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary8it_notesE> "LIEF::ELF::Binary::it_notes") notes()

#### [` eof_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary10eof_offsetEv>)

uint64\_t eof\_offset() const

Return the last offset used by the ELF binary according to both: the sections table and the segments table.

#### [` has_overlay `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary11has_overlayEv>)

inline bool has\_overlay() const

True if data are present at the end of the binary.

#### [` overlay `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary7overlayEv>)

inline span&lt;const uint8\_t&gt; overlay() const

Overlay data (if any).

#### [` overlay `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary7overlayENSt6vectorI7uint8_tEE>)

inline void overlay(std::vector&lt;uint8\_t&gt; overlay)

[Function](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Function>) to set the overlay.

#### [` relocate_phdr_table `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary19relocate_phdr_tableE10PHDR_RELOC>)

uint64\_t relocate\_phdr\_table([PHDR\_RELOC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary10PHDR_RELOCE> "LIEF::ELF::Binary::PHDR_RELOC") type)

Force relocating the segments table in a specific way.

This function can be used to enforce a specific relocation of the segments table.

**Parameters:**

**type** – **[in]** The relocation type to apply

**Returns:**

The offset of the new segments table or 0 if it fails with the given method.

#### [` get_relocated_dynamic_array `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary27get_relocated_dynamic_arrayEN12DynamicEntry3TAGE>)

std::vector&lt;uint64\_t&gt; get\_relocated\_dynamic\_array([DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")::[TAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAGE> "LIEF::ELF::DynamicEntry::TAG") tag) const

Return the array defined by the given tag (e.g. [DynamicEntry::TAG::INIT\_ARRAY](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntry_1a24bed30c51ea8b4ef9d31c18160961dea8c11d1b1290b76379bf90434c0e83f4a>)) with relocations applied (if any).

#### [` is_targeting_android `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary20is_targeting_androidEv>)

bool is\_targeting\_android() const

True if the current ELF is targeting Android.

#### [` get_section_idx `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary15get_section_idxERK7Section>)

inline [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;size\_t&gt; get\_section\_idx(const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") &amp;section) const

Find the index of the section given in the first parameter.

#### [` get_section_idx `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary15get_section_idxERKNSt6stringE>)

inline [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;size\_t&gt; get\_section\_idx(const std::string &amp;name) const

Find the index of the section with the name given in the first parameter.

#### [` find_version_requirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary24find_version_requirementERKNSt6stringE>)

const [SymbolVersionRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirementE> "LIEF::ELF::SymbolVersionRequirement") \*find\_version\_requirement(const std::string &amp;libname) const

Try to find the [SymbolVersionRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionRequirement>) associated with the given library name (e.g. `libc.so.6`).

#### [` find_version_requirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary24find_version_requirementERKNSt6stringE>)

inline [SymbolVersionRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirementE> "LIEF::ELF::SymbolVersionRequirement") \*find\_version\_requirement(const std::string &amp;name)

#### [` remove_version_requirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary26remove_version_requirementERKNSt6stringE>)

bool remove\_version\_requirement(const std::string &amp;libname)

Deletes all required symbol versions linked to the specified library name. The function returns true if the operation succeed, false otherwise.

> **Warning**
> 
> To maintain consistency, this function also removes versions associated with dynamic symbols that are linked to the specified library name.

#### [` ptr_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary8ptr_sizeEv>)

inline uint8\_t ptr\_size() const

#### [` page_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary9page_sizeEv>)

virtual uint64\_t page\_size() const override

Get the default memory page size according to the architecture and the format of the current binary.

#### [` layout_pagesize `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary15layout_pagesizeEv>)

uint64\_t layout\_pagesize() const

#### [` hash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary4hashERKNSt6stringE>)

size\_t hash(const std::string &amp;name)

#### [` ~Binary `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryD0Ev>)

~Binary() override

#### [` print `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` operator+= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinarypLERK12DynamicEntry>)

inline [Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary") &amp;operator+=(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry") &amp;entry)

#### [` operator+= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinarypLERK7Section>)

inline [Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary") &amp;operator+=(const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") &amp;section)

#### [` operator+= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinarypLERK7Segment>)

inline [Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary") &amp;operator+=(const [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") &amp;segment)

#### [` operator+= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinarypLERK4Note>)

inline [Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary") &amp;operator+=(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") &amp;note)

#### [` operator-= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinarymIERK12DynamicEntry>)

inline [Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary") &amp;operator-=(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry") &amp;entry)

#### [` operator-= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinarymIEN12DynamicEntry3TAGE>)

inline [Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary") &amp;operator-=([DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")::[TAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAGE> "LIEF::ELF::DynamicEntry::TAG") tag)

#### [` operator-= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinarymIERK4Note>)

inline [Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary") &amp;operator-=(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") &amp;note)

#### [` operator-= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinarymIEN4Note4TYPEE>)

inline [Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary") &amp;operator-=([Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPEE> "LIEF::ELF::Note::TYPE") type)

#### [` operator[] `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryixEN7Segment4TYPEE>)

inline [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") \*operator[]([Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPEE> "LIEF::ELF::Segment::TYPE") type)

#### [` operator[] `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6BinaryixEN7Segment4TYPEE>)

inline const [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") \*operator[]([Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPEE> "LIEF::ELF::Segment::TYPE") type) const

#### [` operator[] `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryixEN12DynamicEntry3TAGE>)

inline [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry") \*operator[]([DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")::[TAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAGE> "LIEF::ELF::DynamicEntry::TAG") tag)

#### [` operator[] `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6BinaryixEN12DynamicEntry3TAGE>)

inline const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry") \*operator[]([DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")::[TAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAGE> "LIEF::ELF::DynamicEntry::TAG") tag) const

#### [` operator[] `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryixEN4Note4TYPEE>)

inline [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") \*operator[]([Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPEE> "LIEF::ELF::Note::TYPE") type)

#### [` operator[] `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6BinaryixEN4Note4TYPEE>)

inline const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") \*operator[]([Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPEE> "LIEF::ELF::Note::TYPE") type) const

#### [` operator[] `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryixEN7Section4TYPEE>)

inline [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*operator[]([Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPEE> "LIEF::ELF::Section::TYPE") type)

#### [` operator[] `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6BinaryixEN7Section4TYPEE>)

inline const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*operator[]([Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPEE> "LIEF::ELF::Section::TYPE") type) const

#### [` should_swap `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Binary11should_swapEv>)

inline bool should\_swap() const

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Binary7classofEPKN4LIEF6BinaryE>)

static inline bool classof(const LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary") \*bin)

---

## [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#header>)

### [` Header `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE>)

class Header : public LIEF::Object

Class which represents the ELF’s header. This class mirrors the raw ELF `Elfxx_Ehdr` structure.

Public Types

#### [` ELF_INDENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10ELF_INDENTE>)

enum ELF\_INDENT

e\_ident size and indices.

*Values:*

##### [` ELI_MAG0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10ELF_INDENT8ELI_MAG0E>)

enumerator ELI\_MAG0 = 0

File identification index.

##### [` ELI_MAG1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10ELF_INDENT8ELI_MAG1E>)

enumerator ELI\_MAG1 = 1

File identification index.

##### [` ELI_MAG2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10ELF_INDENT8ELI_MAG2E>)

enumerator ELI\_MAG2 = 2

File identification index.

##### [` ELI_MAG3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10ELF_INDENT8ELI_MAG3E>)

enumerator ELI\_MAG3 = 3

File identification index.

##### [` ELI_CLASS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10ELF_INDENT9ELI_CLASSE>)

enumerator ELI\_CLASS = 4

File class.

##### [` ELI_DATA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10ELF_INDENT8ELI_DATAE>)

enumerator ELI\_DATA = 5

Data encoding.

##### [` ELI_VERSION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10ELF_INDENT11ELI_VERSIONE>)

enumerator ELI\_VERSION = 6

File version.

##### [` ELI_OSABI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10ELF_INDENT9ELI_OSABIE>)

enumerator ELI\_OSABI = 7

OS/ABI identification.

##### [` ELI_ABIVERSION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10ELF_INDENT14ELI_ABIVERSIONE>)

enumerator ELI\_ABIVERSION = 8

ABI version.

##### [` ELI_PAD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10ELF_INDENT7ELI_PADE>)

enumerator ELI\_PAD = 9

Start of padding bytes.

##### [` ELI_NIDENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10ELF_INDENT10ELI_NIDENTE>)

enumerator ELI\_NIDENT = 16

Number of bytes in e\_ident.

#### [` FILE_TYPE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header9FILE_TYPEE>)

enum class FILE\_TYPE

The type of the underlying ELF file. This enum matches the semantic of `ET_NONE`, `ET_REL`, …

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header9FILE_TYPE4NONEE>)

enumerator NONE = 0

Can’t be determined.

##### [` REL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header9FILE_TYPE3RELE>)

enumerator REL = 1

Relocatable file (or object file).

##### [` EXEC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header9FILE_TYPE4EXECE>)

enumerator EXEC = 2

non-pie executable

##### [` DYN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header9FILE_TYPE3DYNE>)

enumerator DYN = 3

Shared library **or** a pie-executable.

##### [` CORE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header9FILE_TYPE4COREE>)

enumerator CORE = 4

Core dump file.

#### [` VERSION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header7VERSIONE>)

enum class VERSION

Match the result of `Elfxx_Ehdr.e_version`.

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header7VERSION4NONEE>)

enumerator NONE = 0

Invalid ELF version.

##### [` CURRENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header7VERSION7CURRENTE>)

enumerator CURRENT = 1

Current version (default).

#### [` CLASS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASSE>)

enum class CLASS

Match the result of `Elfxx_Ehdr.e_ident[EI_CLASS]`.

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASS4NONEE>)

enumerator NONE = 0

Invalid class.

##### [` ELF32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASS5ELF32E>)

enumerator ELF32

32-bit objects

##### [` ELF64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASS5ELF64E>)

enumerator ELF64

64-bit objects

#### [` OS_ABI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABIE>)

enum class OS\_ABI

Match the result `Elfxx_Ehdr.e_ident[EI_OSABI]`.

*Values:*

##### [` SYSTEMV `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI7SYSTEMVE>)

enumerator SYSTEMV = 0

UNIX System V ABI.

##### [` HPUX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI4HPUXE>)

enumerator HPUX = 1

HP-UX operating system.

##### [` NETBSD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI6NETBSDE>)

enumerator NETBSD = 2

NetBSD.

##### [` GNU `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI3GNUE>)

enumerator GNU = 3

GNU/Linux.

##### [` LINUX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI5LINUXE>)

enumerator LINUX = 3

Historical alias for ELFOSABI\_GNU.

##### [` HURD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI4HURDE>)

enumerator HURD = 4

GNU/Hurd.

##### [` SOLARIS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI7SOLARISE>)

enumerator SOLARIS = 6

Solaris.

##### [` AIX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI3AIXE>)

enumerator AIX = 7

AIX.

##### [` IRIX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI4IRIXE>)

enumerator IRIX = 8

IRIX.

##### [` FREEBSD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI7FREEBSDE>)

enumerator FREEBSD = 9

FreeBSD.

##### [` TRU64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI5TRU64E>)

enumerator TRU64 = 10

TRU64 UNIX.

##### [` MODESTO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI7MODESTOE>)

enumerator MODESTO = 11

Novell Modesto.

##### [` OPENBSD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI7OPENBSDE>)

enumerator OPENBSD = 12

OpenBSD.

##### [` OPENVMS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI7OPENVMSE>)

enumerator OPENVMS = 13

OpenVMS.

##### [` NSK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI3NSKE>)

enumerator NSK = 14

Hewlett-Packard Non-Stop Kernel.

##### [` AROS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI4AROSE>)

enumerator AROS = 15

AROS.

##### [` FENIXOS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI7FENIXOSE>)

enumerator FENIXOS = 16

FenixOS.

##### [` CLOUDABI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI8CLOUDABIE>)

enumerator CLOUDABI = 17

Nuxi CloudABI.

##### [` C6000_ELFABI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI12C6000_ELFABIE>)

enumerator C6000\_ELFABI = 64

Bare-metal TMS320C6000.

##### [` AMDGPU_HSA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI10AMDGPU_HSAE>)

enumerator AMDGPU\_HSA = 64

AMD HSA runtime.

##### [` C6000_LINUX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI11C6000_LINUXE>)

enumerator C6000\_LINUX = 65

Linux TMS320C6000.

##### [` ARM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI3ARME>)

enumerator ARM = 97

ARM.

##### [` STANDALONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABI10STANDALONEE>)

enumerator STANDALONE = 255

Standalone (embedded) application.

#### [` ELF_DATA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header8ELF_DATAE>)

enum class ELF\_DATA

Match the result `Elfxx_Ehdr.e_ident[EI_DATA]`.

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header8ELF_DATA4NONEE>)

enumerator NONE = 0

Invalid data encoding.

##### [` LSB `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header8ELF_DATA3LSBE>)

enumerator LSB = 1

2’s complement, little endian

##### [` MSB `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header8ELF_DATA3MSBE>)

enumerator MSB = 2

2’s complement, big endian

#### [` identity_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10identity_tE>)

using identity\_t = std::array&lt;uint8\_t, 16&gt;

Public Functions

#### [` Header `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6HeaderEv>)

Header() = default

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderaSERK6Header>)

[Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header") &amp;operator=(const [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")&amp;) = default

#### [` Header `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6HeaderERK6Header>)

Header(const [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6HeaderERK6Header> "LIEF::ELF::Header::Header")&amp;) = default

#### [` ~Header `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderD0Ev>)

~Header() override = default

#### [` file_type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header9file_typeEv>)

inline [FILE\_TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header9FILE_TYPEE> "LIEF::ELF::Header::FILE_TYPE") file\_type() const

Define the object file type. (e.g. executable, library…).

#### [` machine_type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header12machine_typeEv>)

inline [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") machine\_type() const

Target architecture.

#### [` object_file_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header19object_file_versionEv>)

inline [VERSION](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header7VERSIONE> "LIEF::ELF::Header::VERSION") object\_file\_version() const

Version of the object file format.

#### [` entrypoint `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header10entrypointEv>)

inline uint64\_t entrypoint() const

Executable entrypoint.

#### [` program_headers_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header22program_headers_offsetEv>)

inline uint64\_t program\_headers\_offset() const

Offset of the programs table (also known as segments table).

#### [` section_headers_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header22section_headers_offsetEv>)

inline uint64\_t section\_headers\_offset() const

Offset of the sections table.

#### [` processor_flag `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header14processor_flagEv>)

inline uint32\_t processor\_flag() const

Processor-specific flags.

#### [` header_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header11header_sizeEv>)

inline uint32\_t header\_size() const

Size of the current header (i.e. `sizeof(Elfxx_Ehdr)`) This size should be 64 for an `ELF64` binary and 52 for an `ELF32`.

#### [` program_header_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header19program_header_sizeEv>)

inline uint32\_t program\_header\_size() const

Return the size of a program header (i.e. `sizeof(Elfxx_Phdr)`) This size should be 56 for an `ELF64` binary and 32 for an `ELF32`.

#### [` numberof_segments `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header17numberof_segmentsEv>)

inline uint32\_t numberof\_segments() const

Return the number of segments.

#### [` section_header_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header19section_header_sizeEv>)

inline uint32\_t section\_header\_size() const

Return the size of a section header (i.e. `sizeof(Elfxx_Shdr)`) This size should be 64 for a `ELF64` binary and 40 for an `ELF32`.

#### [` numberof_sections `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header17numberof_sectionsEv>)

inline uint32\_t numberof\_sections() const

Return the number of sections.

> **Warning**
> 
> This value could differ from the real number of sections present in the binary. It must be taken as an *indication*

#### [` section_name_table_idx `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header22section_name_table_idxEv>)

inline uint32\_t section\_name\_table\_idx() const

Return the section’s index which contains sections’ names.

#### [` identity `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header8identityEv>)

inline [identity\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10identity_tE> "LIEF::ELF::Header::identity_t") &amp;identity()

Return the ELF identity as an `std::array`.

#### [` identity `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header8identityEv>)

inline const [identity\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10identity_tE> "LIEF::ELF::Header::identity_t") &amp;identity() const

#### [` identity_class `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header14identity_classEv>)

inline [CLASS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASSE> "LIEF::ELF::Header::CLASS") identity\_class() const

Return the object’s class. `ELF64` or `ELF32`.

#### [` identity_data `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header13identity_dataEv>)

inline [ELF\_DATA](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header8ELF_DATAE> "LIEF::ELF::Header::ELF_DATA") identity\_data() const

Specify the data encoding.

#### [` identity_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header16identity_versionEv>)

inline [VERSION](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header7VERSIONE> "LIEF::ELF::Header::VERSION") identity\_version() const

> **See also**
> 
> [object\_file\_version](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Header_1aea7b046cbf98c272f33427488518759a>)

#### [` identity_os_abi `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header15identity_os_abiEv>)

inline [OS\_ABI](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABIE> "LIEF::ELF::Header::OS_ABI") identity\_os\_abi() const

Identifies the version of the ABI for which the object is prepared.

#### [` identity_abi_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header20identity_abi_versionEv>)

inline uint32\_t identity\_abi\_version() const

ABI Version.

#### [` is_mips_n64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header11is_mips_n64Ev>)

inline bool is\_mips\_n64() const

Check whether this header identifies a 64-bit MIPS ELF file whose relocations use the MIPS-specific n64 encoding.

#### [` has `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header3hasE15PROCESSOR_FLAGS>)

bool has([PROCESSOR\_FLAGS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGSE> "LIEF::ELF::PROCESSOR_FLAGS") flag) const

#### [` flags_list `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header10flags_listEv>)

std::vector&lt;[PROCESSOR\_FLAGS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGSE> "LIEF::ELF::PROCESSOR_FLAGS")&gt; flags\_list() const

#### [` file_type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header9file_typeE9FILE_TYPE>)

inline void file\_type([FILE\_TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header9FILE_TYPEE> "LIEF::ELF::Header::FILE_TYPE") type)

#### [` machine_type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header12machine_typeE4ARCH>)

inline void machine\_type([ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` object_file_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header19object_file_versionE7VERSION>)

inline void object\_file\_version([VERSION](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header7VERSIONE> "LIEF::ELF::Header::VERSION") version)

#### [` entrypoint `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10entrypointE8uint64_t>)

inline void entrypoint(uint64\_t entry)

#### [` program_headers_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header22program_headers_offsetE8uint64_t>)

inline void program\_headers\_offset(uint64\_t offset)

#### [` section_headers_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header22section_headers_offsetE8uint64_t>)

inline void section\_headers\_offset(uint64\_t offset)

#### [` processor_flag `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header14processor_flagE8uint32_t>)

inline void processor\_flag(uint32\_t flags)

#### [` header_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header11header_sizeE8uint32_t>)

inline void header\_size(uint32\_t size)

#### [` program_header_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header19program_header_sizeE8uint32_t>)

inline void program\_header\_size(uint32\_t size)

#### [` numberof_segments `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header17numberof_segmentsE8uint32_t>)

inline void numberof\_segments(uint32\_t n)

#### [` section_header_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header19section_header_sizeE8uint32_t>)

inline void section\_header\_size(uint32\_t size)

#### [` numberof_sections `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header17numberof_sectionsE8uint32_t>)

inline void numberof\_sections(uint32\_t n)

#### [` section_name_table_idx `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header22section_name_table_idxE8uint32_t>)

inline void section\_name\_table\_idx(uint32\_t idx)

#### [` identity `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header8identityERKNSt6stringE>)

void identity(const std::string &amp;identity)

#### [` identity `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header8identityERK10identity_t>)

void identity(const [identity\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header10identity_tE> "LIEF::ELF::Header::identity_t") &amp;identity)

#### [` identity_class `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header14identity_classE5CLASS>)

inline void identity\_class([CLASS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASSE> "LIEF::ELF::Header::CLASS") cls)

#### [` identity_data `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header13identity_dataE8ELF_DATA>)

inline void identity\_data([ELF\_DATA](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header8ELF_DATAE> "LIEF::ELF::Header::ELF_DATA") data)

#### [` identity_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header16identity_versionE7VERSION>)

inline void identity\_version([VERSION](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header7VERSIONE> "LIEF::ELF::Header::VERSION") version)

#### [` identity_os_abi `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header15identity_os_abiE6OS_ABI>)

inline void identity\_os\_abi([OS\_ABI](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABIE> "LIEF::ELF::Header::OS_ABI") osabi)

#### [` identity_abi_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header20identity_abi_versionE7uint8_t>)

inline void identity\_abi\_version(uint8\_t version)

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Header6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderlsERNSt7ostreamERK6Header>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header") &amp;hdr)

---

## [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#section>)

### [` Section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE>)

class Section : public LIEF::[Section](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7SectionE> "LIEF::Section")

Class which represents an ELF [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>).

Public Types

#### [` TYPE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPEE>)

enum class TYPE : uint64\_t

*Values:*

##### [` SHT_NULL_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9SHT_NULL_E>)

enumerator SHT\_NULL\_ = 0

No associated section (inactive entry).

##### [` PROGBITS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE8PROGBITSE>)

enumerator PROGBITS = 1

Program-defined contents.

##### [` SYMTAB `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE6SYMTABE>)

enumerator SYMTAB = 2

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>) table.

##### [` STRTAB `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE6STRTABE>)

enumerator STRTAB = 3

String table.

##### [` RELA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE4RELAE>)

enumerator RELA = 4

[Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation>) entries; explicit addends.

##### [` HASH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE4HASHE>)

enumerator HASH = 5

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>) hash table.

##### [` DYNAMIC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE7DYNAMICE>)

enumerator DYNAMIC = 6

Information for dynamic linking.

##### [` NOTE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE4NOTEE>)

enumerator NOTE = 7

Information about the file.

##### [` NOBITS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE6NOBITSE>)

enumerator NOBITS = 8

Data occupies no space in the file.

##### [` REL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE3RELE>)

enumerator REL = 9

[Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation>) entries; no explicit addends.

##### [` SHLIB `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE5SHLIBE>)

enumerator SHLIB = 10

Reserved.

##### [` DYNSYM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE6DYNSYME>)

enumerator DYNSYM = 11

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>) table.

##### [` INIT_ARRAY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10INIT_ARRAYE>)

enumerator INIT\_ARRAY = 14

Pointers to initialization functions.

##### [` FINI_ARRAY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10FINI_ARRAYE>)

enumerator FINI\_ARRAY = 15

Pointers to termination functions.

##### [` PREINIT_ARRAY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE13PREINIT_ARRAYE>)

enumerator PREINIT\_ARRAY = 16

Pointers to pre-init functions.

##### [` GROUP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE5GROUPE>)

enumerator GROUP = 17

[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>) group.

##### [` SYMTAB_SHNDX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE12SYMTAB_SHNDXE>)

enumerator SYMTAB\_SHNDX = 18

Indices for SHN\_XINDEX entries.

##### [` RELR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE4RELRE>)

enumerator RELR = 19

[Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation>) entries; only offsets.

##### [` ANDROID_REL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE11ANDROID_RELE>)

enumerator ANDROID\_REL = 0x60000001

Packed relocations (Android specific).

##### [` ANDROID_RELA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE12ANDROID_RELAE>)

enumerator ANDROID\_RELA = 0x60000002

Packed relocations (Android specific).

##### [` LLVM_ADDRSIG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE12LLVM_ADDRSIGE>)

enumerator LLVM\_ADDRSIG = 0x6fff4c03

This section is used to mark symbols as address-significant.

##### [` ANDROID_RELR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE12ANDROID_RELRE>)

enumerator ANDROID\_RELR = 0x6fffff00

New relr relocations (Android specific).

##### [` GNU_ATTRIBUTES `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE14GNU_ATTRIBUTESE>)

enumerator GNU\_ATTRIBUTES = 0x6ffffff5

Object attributes.

##### [` GNU_HASH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE8GNU_HASHE>)

enumerator GNU\_HASH = 0x6ffffff6

GNU-style hash table.

##### [` GNU_VERDEF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10GNU_VERDEFE>)

enumerator GNU\_VERDEF = 0x6ffffffd

GNU version definitions.

##### [` GNU_VERNEED `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE11GNU_VERNEEDE>)

enumerator GNU\_VERNEED = 0x6ffffffe

GNU version references.

##### [` GNU_VERSYM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10GNU_VERSYME>)

enumerator GNU\_VERSYM = 0x6fffffff

GNU symbol versions table.

##### [` _ID_SHIFT_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E>)

enumerator \_ID\_SHIFT\_ = 32

##### [` _ARM_ID_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE8_ARM_ID_E>)

enumerator \_ARM\_ID\_ = 1LLU

##### [` _HEX_ID_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE8_HEX_ID_E>)

enumerator \_HEX\_ID\_ = 2LLU

##### [` _X86_64_ID_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE11_X86_64_ID_E>)

enumerator \_X86\_64\_ID\_ = 2LLU

##### [` _MIPS_ID_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E>)

enumerator \_MIPS\_ID\_ = 3LLU

##### [` _RISCV_ID_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_RISCV_ID_E>)

enumerator \_RISCV\_ID\_ = 4LLU

##### [` _AARCH64_ID_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE12_AARCH64_ID_E>)

enumerator \_AARCH64\_ID\_ = 5LLU

##### [` ARM_EXIDX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9ARM_EXIDXE>)

enumerator ARM\_EXIDX = 0x70000001U + ([\_ARM\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE8_ARM_ID_E> "LIEF::ELF::Section::TYPE::_ARM_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

Exception Index table

##### [` ARM_PREEMPTMAP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE14ARM_PREEMPTMAPE>)

enumerator ARM\_PREEMPTMAP = 0x70000002U + ([\_ARM\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE8_ARM_ID_E> "LIEF::ELF::Section::TYPE::_ARM_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

BPABI DLL dynamic linking preemption map

##### [` ARM_ATTRIBUTES `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE14ARM_ATTRIBUTESE>)

enumerator ARM\_ATTRIBUTES = 0x70000003U + ([\_ARM\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE8_ARM_ID_E> "LIEF::ELF::Section::TYPE::_ARM_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

Object file compatibility attributes

##### [` ARM_DEBUGOVERLAY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE16ARM_DEBUGOVERLAYE>)

enumerator ARM\_DEBUGOVERLAY = 0x70000004U + ([\_ARM\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE8_ARM_ID_E> "LIEF::ELF::Section::TYPE::_ARM_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` ARM_OVERLAYSECTION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE18ARM_OVERLAYSECTIONE>)

enumerator ARM\_OVERLAYSECTION = 0x70000005U + ([\_ARM\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE8_ARM_ID_E> "LIEF::ELF::Section::TYPE::_ARM_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` HEX_ORDERED `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE11HEX_ORDEREDE>)

enumerator HEX\_ORDERED = 0x70000000 + ([\_HEX\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE8_HEX_ID_E> "LIEF::ELF::Section::TYPE::_HEX_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

Link editor is to sort the entries in this section based on their sizes

##### [` X86_64_UNWIND `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE13X86_64_UNWINDE>)

enumerator X86\_64\_UNWIND = 0x70000001 + ([\_X86\_64\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE11_X86_64_ID_E> "LIEF::ELF::Section::TYPE::_X86_64_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

Unwind information

##### [` MIPS_LIBLIST `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE12MIPS_LIBLISTE>)

enumerator MIPS\_LIBLIST = 0x70000000 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_MSYM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9MIPS_MSYME>)

enumerator MIPS\_MSYM = 0x70000001 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_CONFLICT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE13MIPS_CONFLICTE>)

enumerator MIPS\_CONFLICT = 0x70000002 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_GPTAB `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10MIPS_GPTABE>)

enumerator MIPS\_GPTAB = 0x70000003 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_UCODE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10MIPS_UCODEE>)

enumerator MIPS\_UCODE = 0x70000004 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_DEBUG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10MIPS_DEBUGE>)

enumerator MIPS\_DEBUG = 0x70000005 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_REGINFO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE12MIPS_REGINFOE>)

enumerator MIPS\_REGINFO = 0x70000006 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_PACKAGE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE12MIPS_PACKAGEE>)

enumerator MIPS\_PACKAGE = 0x70000007 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_PACKSYM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE12MIPS_PACKSYME>)

enumerator MIPS\_PACKSYM = 0x70000008 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_RELD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9MIPS_RELDE>)

enumerator MIPS\_RELD = 0x70000009 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_IFACE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10MIPS_IFACEE>)

enumerator MIPS\_IFACE = 0x7000000b + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_CONTENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE12MIPS_CONTENTE>)

enumerator MIPS\_CONTENT = 0x7000000c + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_OPTIONS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE12MIPS_OPTIONSE>)

enumerator MIPS\_OPTIONS = 0x7000000d + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_SHDR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9MIPS_SHDRE>)

enumerator MIPS\_SHDR = 0x70000010 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_FDESC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10MIPS_FDESCE>)

enumerator MIPS\_FDESC = 0x70000011 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_EXTSYM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE11MIPS_EXTSYME>)

enumerator MIPS\_EXTSYM = 0x70000012 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_DENSE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10MIPS_DENSEE>)

enumerator MIPS\_DENSE = 0x70000013 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_PDESC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10MIPS_PDESCE>)

enumerator MIPS\_PDESC = 0x70000014 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_LOCSYM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE11MIPS_LOCSYME>)

enumerator MIPS\_LOCSYM = 0x70000015 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_AUXSYM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE11MIPS_AUXSYME>)

enumerator MIPS\_AUXSYM = 0x70000016 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_OPTSYM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE11MIPS_OPTSYME>)

enumerator MIPS\_OPTSYM = 0x70000017 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_LOCSTR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE11MIPS_LOCSTRE>)

enumerator MIPS\_LOCSTR = 0x70000018 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_LINE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9MIPS_LINEE>)

enumerator MIPS\_LINE = 0x70000019 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_RFDESC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE11MIPS_RFDESCE>)

enumerator MIPS\_RFDESC = 0x7000001a + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_DELTASYM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE13MIPS_DELTASYME>)

enumerator MIPS\_DELTASYM = 0x7000001b + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_DELTAINST `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE14MIPS_DELTAINSTE>)

enumerator MIPS\_DELTAINST = 0x7000001c + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_DELTACLASS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE15MIPS_DELTACLASSE>)

enumerator MIPS\_DELTACLASS = 0x7000001d + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_DWARF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10MIPS_DWARFE>)

enumerator MIPS\_DWARF = 0x7000001e + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_DELTADECL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE14MIPS_DELTADECLE>)

enumerator MIPS\_DELTADECL = 0x7000001f + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_SYMBOL_LIB `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE15MIPS_SYMBOL_LIBE>)

enumerator MIPS\_SYMBOL\_LIB = 0x70000020 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_EVENTS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE11MIPS_EVENTSE>)

enumerator MIPS\_EVENTS = 0x70000021 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_TRANSLATE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE14MIPS_TRANSLATEE>)

enumerator MIPS\_TRANSLATE = 0x70000022 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_PIXIE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10MIPS_PIXIEE>)

enumerator MIPS\_PIXIE = 0x70000023 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_XLATE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10MIPS_XLATEE>)

enumerator MIPS\_XLATE = 0x70000024 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_XLATE_DEBUG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE16MIPS_XLATE_DEBUGE>)

enumerator MIPS\_XLATE\_DEBUG = 0x70000025 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_WHIRL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10MIPS_WHIRLE>)

enumerator MIPS\_WHIRL = 0x70000026 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_EH_REGION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE14MIPS_EH_REGIONE>)

enumerator MIPS\_EH\_REGION = 0x70000027 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_XLATE_OLD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE14MIPS_XLATE_OLDE>)

enumerator MIPS\_XLATE\_OLD = 0x70000028 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_PDR_EXCEPTION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE18MIPS_PDR_EXCEPTIONE>)

enumerator MIPS\_PDR\_EXCEPTION = 0x70000029 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_ABIFLAGS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE13MIPS_ABIFLAGSE>)

enumerator MIPS\_ABIFLAGS = 0x7000002a + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` MIPS_XHASH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10MIPS_XHASHE>)

enumerator MIPS\_XHASH = 0x7000002b + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE9_MIPS_ID_E> "LIEF::ELF::Section::TYPE::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` RISCV_ATTRIBUTES `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE16RISCV_ATTRIBUTESE>)

enumerator RISCV\_ATTRIBUTES = 0x70000003 + ([\_RISCV\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_RISCV_ID_E> "LIEF::ELF::Section::TYPE::_RISCV_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` AARCH64_ATTRIBUTES `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE18AARCH64_ATTRIBUTESE>)

enumerator AARCH64\_ATTRIBUTES = 0x70000003 + ([\_AARCH64\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE12_AARCH64_ID_E> "LIEF::ELF::Section::TYPE::_AARCH64_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` AARCH64_AUTH_RELR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE17AARCH64_AUTH_RELRE>)

enumerator AARCH64\_AUTH\_RELR = 0x70000004 + ([\_AARCH64\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE12_AARCH64_ID_E> "LIEF::ELF::Section::TYPE::_AARCH64_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` AARCH64_MEMTAG_GLOBALS_STATIC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE29AARCH64_MEMTAG_GLOBALS_STATICE>)

enumerator AARCH64\_MEMTAG\_GLOBALS\_STATIC = 0x70000007 + ([\_AARCH64\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE12_AARCH64_ID_E> "LIEF::ELF::Section::TYPE::_AARCH64_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

##### [` AARCH64_MEMTAG_GLOBALS_DYNAMIC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE30AARCH64_MEMTAG_GLOBALS_DYNAMICE>)

enumerator AARCH64\_MEMTAG\_GLOBALS\_DYNAMIC = 0x70000008 + ([\_AARCH64\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE12_AARCH64_ID_E> "LIEF::ELF::Section::TYPE::_AARCH64_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))

#### [` FLAGS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGSE>)

enum class FLAGS : uint64\_t

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS4NONEE>)

enumerator NONE = 0x000000000

##### [` WRITE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS5WRITEE>)

enumerator WRITE = 0x000000001

[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>) data should be writable during execution.

##### [` ALLOC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS5ALLOCE>)

enumerator ALLOC = 0x000000002

[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>) occupies memory during program execution.

##### [` EXECINSTR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS9EXECINSTRE>)

enumerator EXECINSTR = 0x000000004

[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>) contains executable machine instructions.

##### [` MERGE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS5MERGEE>)

enumerator MERGE = 0x000000010

The data in this section may be merged.

##### [` STRINGS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS7STRINGSE>)

enumerator STRINGS = 0x000000020

The data in this section is null-terminated strings.

##### [` INFO_LINK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS9INFO_LINKE>)

enumerator INFO\_LINK = 0x000000040

A field in this section holds a section header table index.

##### [` LINK_ORDER `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10LINK_ORDERE>)

enumerator LINK\_ORDER = 0x000000080

Adds special ordering requirements for link editors.

##### [` OS_NONCONFORMING `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS16OS_NONCONFORMINGE>)

enumerator OS\_NONCONFORMING = 0x000000100

This section requires special OS-specific processing to avoid incorrect behavior

##### [` GROUP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS5GROUPE>)

enumerator GROUP = 0x000000200

This section is a member of a section group.

##### [` TLS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS3TLSE>)

enumerator TLS = 0x000000400

This section holds Thread-Local Storage.

##### [` COMPRESSED `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10COMPRESSEDE>)

enumerator COMPRESSED = 0x000000800

##### [` GNU_RETAIN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10GNU_RETAINE>)

enumerator GNU\_RETAIN = 0x000200000

##### [` EXCLUDE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS7EXCLUDEE>)

enumerator EXCLUDE = 0x080000000

##### [` _ID_SHIFT_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_ID_SHIFT_E>)

enumerator \_ID\_SHIFT\_ = 32

##### [` _XCORE_ID_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_XCORE_ID_E>)

enumerator \_XCORE\_ID\_ = 1LLU

##### [` _HEX_ID_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS8_HEX_ID_E>)

enumerator \_HEX\_ID\_ = 3LLU

##### [` _X86_64_ID_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS11_X86_64_ID_E>)

enumerator \_X86\_64\_ID\_ = 2LLU

##### [` _MIPS_ID_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS9_MIPS_ID_E>)

enumerator \_MIPS\_ID\_ = 4LLU

##### [` _ARM_ID_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS8_ARM_ID_E>)

enumerator \_ARM\_ID\_ = 5LLU

##### [` _AARCH64_ID_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS12_AARCH64_ID_E>)

enumerator \_AARCH64\_ID\_ = 6LLU

##### [` XCORE_SHF_DP_SECTION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS20XCORE_SHF_DP_SECTIONE>)

enumerator XCORE\_SHF\_DP\_SECTION = 0x010000000 + ([\_XCORE\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_XCORE_ID_E> "LIEF::ELF::Section::FLAGS::_XCORE_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_ID_SHIFT_E> "LIEF::ELF::Section::FLAGS::_ID_SHIFT_"))

##### [` XCORE_SHF_CP_SECTION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS20XCORE_SHF_CP_SECTIONE>)

enumerator XCORE\_SHF\_CP\_SECTION = 0x020000000 + ([\_XCORE\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_XCORE_ID_E> "LIEF::ELF::Section::FLAGS::_XCORE_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_ID_SHIFT_E> "LIEF::ELF::Section::FLAGS::_ID_SHIFT_"))

##### [` X86_64_LARGE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS12X86_64_LARGEE>)

enumerator X86\_64\_LARGE = 0x010000000 + ([\_X86\_64\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS11_X86_64_ID_E> "LIEF::ELF::Section::FLAGS::_X86_64_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_ID_SHIFT_E> "LIEF::ELF::Section::FLAGS::_ID_SHIFT_"))

##### [` HEX_GPREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS9HEX_GPRELE>)

enumerator HEX\_GPREL = 0x010000000 + ([\_HEX\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS8_HEX_ID_E> "LIEF::ELF::Section::FLAGS::_HEX_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_ID_SHIFT_E> "LIEF::ELF::Section::FLAGS::_ID_SHIFT_"))

##### [` MIPS_NODUPES `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS12MIPS_NODUPESE>)

enumerator MIPS\_NODUPES = 0x001000000 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS9_MIPS_ID_E> "LIEF::ELF::Section::FLAGS::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_ID_SHIFT_E> "LIEF::ELF::Section::FLAGS::_ID_SHIFT_"))

##### [` MIPS_NAMES `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10MIPS_NAMESE>)

enumerator MIPS\_NAMES = 0x002000000 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS9_MIPS_ID_E> "LIEF::ELF::Section::FLAGS::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_ID_SHIFT_E> "LIEF::ELF::Section::FLAGS::_ID_SHIFT_"))

##### [` MIPS_LOCAL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10MIPS_LOCALE>)

enumerator MIPS\_LOCAL = 0x004000000 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS9_MIPS_ID_E> "LIEF::ELF::Section::FLAGS::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_ID_SHIFT_E> "LIEF::ELF::Section::FLAGS::_ID_SHIFT_"))

##### [` MIPS_NOSTRIP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS12MIPS_NOSTRIPE>)

enumerator MIPS\_NOSTRIP = 0x008000000 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS9_MIPS_ID_E> "LIEF::ELF::Section::FLAGS::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_ID_SHIFT_E> "LIEF::ELF::Section::FLAGS::_ID_SHIFT_"))

##### [` MIPS_GPREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10MIPS_GPRELE>)

enumerator MIPS\_GPREL = 0x010000000 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS9_MIPS_ID_E> "LIEF::ELF::Section::FLAGS::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_ID_SHIFT_E> "LIEF::ELF::Section::FLAGS::_ID_SHIFT_"))

##### [` MIPS_MERGE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10MIPS_MERGEE>)

enumerator MIPS\_MERGE = 0x020000000 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS9_MIPS_ID_E> "LIEF::ELF::Section::FLAGS::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_ID_SHIFT_E> "LIEF::ELF::Section::FLAGS::_ID_SHIFT_"))

##### [` MIPS_ADDR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS9MIPS_ADDRE>)

enumerator MIPS\_ADDR = 0x040000000 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS9_MIPS_ID_E> "LIEF::ELF::Section::FLAGS::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_ID_SHIFT_E> "LIEF::ELF::Section::FLAGS::_ID_SHIFT_"))

##### [` MIPS_STRING `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS11MIPS_STRINGE>)

enumerator MIPS\_STRING = 0x080000000 + ([\_MIPS\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS9_MIPS_ID_E> "LIEF::ELF::Section::FLAGS::_MIPS_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_ID_SHIFT_E> "LIEF::ELF::Section::FLAGS::_ID_SHIFT_"))

##### [` ARM_PURECODE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS12ARM_PURECODEE>)

enumerator ARM\_PURECODE = 0x020000000 + ([\_ARM\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS8_ARM_ID_E> "LIEF::ELF::Section::FLAGS::_ARM_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_ID_SHIFT_E> "LIEF::ELF::Section::FLAGS::_ID_SHIFT_"))

##### [` AARCH64_PURECODE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS16AARCH64_PURECODEE>)

enumerator AARCH64\_PURECODE = 0x020000000 + ([\_AARCH64\_ID\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS12_AARCH64_ID_E> "LIEF::ELF::Section::FLAGS::_AARCH64_ID_") &lt;&lt; [\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_ID_SHIFT_E> "LIEF::ELF::Section::FLAGS::_ID_SHIFT_"))

#### [` segments_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section10segments_tE>)

using segments\_t = std::vector&lt;[Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment")\*&gt;

#### [` it_segments `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section11it_segmentsE>)

using it\_segments = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[segments\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section10segments_tE> "LIEF::ELF::Section::segments_t")&amp;&gt;

#### [` it_const_segments `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section17it_const_segmentsE>)

using it\_const\_segments = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [segments\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section10segments_tE> "LIEF::ELF::Section::segments_t")&amp;&gt;

Public Functions

#### [` Section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section7SectionERKNSt6stringE4TYPE>)

inline Section(const std::string &amp;name, [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPEE> "LIEF::ELF::Section::TYPE") type = [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPEE> "LIEF::ELF::Section::TYPE")::[PROGBITS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE8PROGBITSE> "LIEF::ELF::Section::TYPE::PROGBITS"))

#### [` Section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section7SectionEv>)

Section() = default

#### [` ~Section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionD0Ev>)

~Section() override = default

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionaSE7Section>)

inline [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") &amp;operator=([Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") other)

#### [` Section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section7SectionERK7Section>)

Section(const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section7SectionERK7Section> "LIEF::ELF::Section::Section") &amp;other)

#### [` swap `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4swapER7Section>)

void swap([Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") &amp;other) noexcept

#### [` type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section4typeEv>)

inline [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPEE> "LIEF::ELF::Section::TYPE") type() const

#### [` content `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section7contentEv>)

virtual span&lt;const uint8\_t&gt; content() const override

[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>)’s content.

#### [` content `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section7contentERKNSt6vectorI7uint8_tEE>)

virtual void content(const std::vector&lt;uint8\_t&gt; &amp;data) override

Set section content.

#### [` content `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section7contentERRNSt6vectorI7uint8_tEE>)

void content(std::vector&lt;uint8\_t&gt; &amp;&amp;data)

#### [` flags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section5flagsEv>)

inline uint64\_t flags() const

[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>) flags.

#### [` has `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section3hasE5FLAGS>)

bool has([FLAGS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGSE> "LIEF::ELF::Section::FLAGS") flag) const

`True` if the section has the given flag

#### [` has `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section3hasERK7Segment>)

bool has(const [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") &amp;segment) const

`True` if the section is wrapped by the given [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Segment>)

#### [` flags_list `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section10flags_listEv>)

std::vector&lt;[FLAGS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGSE> "LIEF::ELF::Section::FLAGS")&gt; flags\_list() const

Return section flags as a `std::set`.

#### [` size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section4sizeEv>)

inline virtual uint64\_t size() const override

[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>)’s size (size in the binary, not the virtual size).

#### [` size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4sizeE8uint64_t>)

virtual void size(uint64\_t size) override

Change the section size.

#### [` offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section6offsetE8uint64_t>)

virtual void offset(uint64\_t offset) override

#### [` offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section6offsetEv>)

inline virtual uint64\_t offset() const override

Offset in the binary.

#### [` file_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section11file_offsetEv>)

inline uint64\_t file\_offset() const

> **See also**
> 
> [offset](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section_1a44a762eb5461b11877cf9f0e3bfc2213>)

#### [` original_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section13original_sizeEv>)

inline uint64\_t original\_size() const

Original size of the section’s data.

This value is used by the [ELF::Builder](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Builder>) to determine if it needs to be relocated to avoid an override of the data

#### [` alignment `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section9alignmentEv>)

inline uint64\_t alignment() const

[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>) file alignment.

#### [` information `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section11informationEv>)

inline uint64\_t information() const

[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>) information. The meaning of this value depends on the section’s type.

#### [` entry_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section10entry_sizeEv>)

inline uint64\_t entry\_size() const

This function returns the size of an element in the case of a section that contains an array.

For instance, the `.dynamic` section contains an array of [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntry>). As the size of the raw C structure of this entry is 0x10 (`sizeof(Elf64_Dyn)`) in an ELF64, the `entry_size` is set to this value.

#### [` link `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section4linkEv>)

inline uint32\_t link() const

Index to another section.

#### [` clear `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5clearE7uint8_t>)

[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") &amp;clear(uint8\_t value = 0)

Clear the content of the section with the given `value`.

#### [` add `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section3addE5FLAGS>)

void add([FLAGS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGSE> "LIEF::ELF::Section::FLAGS") flag)

Add the given ELF\_SECTION\_FLAGS.

#### [` remove `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section6removeE5FLAGS>)

void remove([FLAGS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGSE> "LIEF::ELF::Section::FLAGS") flag)

Remove the given ELF\_SECTION\_FLAGS.

#### [` type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4typeE4TYPE>)

inline void type([TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPEE> "LIEF::ELF::Section::TYPE") type)

#### [` flags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5flagsE8uint64_t>)

inline void flags(uint64\_t flags)

#### [` clear_flags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section11clear_flagsEv>)

inline void clear\_flags()

#### [` file_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section11file_offsetE8uint64_t>)

inline void file\_offset(uint64\_t offset)

#### [` link `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4linkE8uint32_t>)

inline void link(uint32\_t link)

#### [` information `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section11informationE8uint32_t>)

inline void information(uint32\_t info)

#### [` alignment `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section9alignmentE8uint64_t>)

inline void alignment(uint64\_t alignment)

#### [` entry_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section10entry_sizeE8uint64_t>)

inline void entry\_size(uint64\_t entry\_size)

#### [` segments `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section8segmentsEv>)

inline [it\_segments](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section11it_segmentsE> "LIEF::ELF::Section::it_segments") segments()

#### [` segments `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section8segmentsEv>)

inline [it\_const\_segments](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section17it_const_segmentsE> "LIEF::ELF::Section::it_const_segments") segments() const

#### [` as_frame `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section8as_frameEv>)

inline [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") &amp;as\_frame()

#### [` is_frame `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section8is_frameEv>)

inline bool is\_frame() const

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` operator+= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionpLE5FLAGS>)

inline [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") &amp;operator+=([FLAGS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGSE> "LIEF::ELF::Section::FLAGS") c)

#### [` operator-= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionmIE5FLAGS>)

inline [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") &amp;operator-=([FLAGS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGSE> "LIEF::ELF::Section::FLAGS") c)

#### [` stream `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Section6streamEv>)

std::unique\_ptr&lt;[SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream")&gt; stream() const

Return a stream over the content of this section.

Public Static Functions

#### [` type_from `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section9type_fromE8uint32_t4ARCH>)

static [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPEE> "LIEF::ELF::Section::TYPE") type\_from(uint32\_t value, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` to_value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section8to_valueE4TYPE>)

static inline uint32\_t to\_value([TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPEE> "LIEF::ELF::Section::TYPE") type)

Public Static Attributes

#### [` MAX_SECTION_SIZE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section16MAX_SECTION_SIZEE>)

static uint32\_t MAX\_SECTION\_SIZE = 2\_GB

#### [` FLAG_MASK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section9FLAG_MASKE>)

static uint64\_t FLAG\_MASK = (uint64\_t(1) &lt;&lt; uint8\_t([FLAGS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGSE> "LIEF::ELF::Section::FLAGS")::[\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section5FLAGS10_ID_SHIFT_E> "LIEF::ELF::Section::FLAGS::_ID_SHIFT_"))) - 1

#### [` TYPE_MASK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section9TYPE_MASKE>)

static uint64\_t TYPE\_MASK = (uint64\_t(1) &lt;&lt; uint8\_t([TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPEE> "LIEF::ELF::Section::TYPE")::[\_ID\_SHIFT\_](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Section4TYPE10_ID_SHIFT_E> "LIEF::ELF::Section::TYPE::_ID_SHIFT_"))) - 1

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionlsERNSt7ostreamERK7Section>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") &amp;section)

---

## [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#segment>)

### [` Segment `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE>)

class Segment : public LIEF::Object

Class which represents the ELF segments.

Public Types

#### [` TYPE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPEE>)

enum class TYPE : uint64\_t

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE7UNKNOWNE>)

enumerator UNKNOWN = uint64\_t(-1)

##### [` PT_NULL_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE8PT_NULL_E>)

enumerator PT\_NULL\_ = 0

Unused segment.

##### [` LOAD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE4LOADE>)

enumerator LOAD = 1

Loadable segment.

##### [` DYNAMIC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE7DYNAMICE>)

enumerator DYNAMIC = 2

Dynamic linking information.

##### [` INTERP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE6INTERPE>)

enumerator INTERP = 3

Interpreter pathname.

##### [` NOTE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE4NOTEE>)

enumerator NOTE = 4

Auxiliary information.

##### [` SHLIB `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE5SHLIBE>)

enumerator SHLIB = 5

Reserved.

##### [` PHDR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE4PHDRE>)

enumerator PHDR = 6

The program header table itself.

##### [` TLS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE3TLSE>)

enumerator TLS = 7

The thread-local storage template.

##### [` GNU_EH_FRAME `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE12GNU_EH_FRAMEE>)

enumerator GNU\_EH\_FRAME = 0x6474e550

##### [` GNU_STACK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE9GNU_STACKE>)

enumerator GNU\_STACK = 0x6474e551

Indicates stack executability.

##### [` GNU_PROPERTY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE12GNU_PROPERTYE>)

enumerator GNU\_PROPERTY = 0x6474e553

GNU property

##### [` GNU_RELRO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE9GNU_RELROE>)

enumerator GNU\_RELRO = 0x6474e552

Read-only after relocation.

##### [` PAX_FLAGS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE9PAX_FLAGSE>)

enumerator PAX\_FLAGS = 0x65041580

##### [` ARM_ARCHEXT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE11ARM_ARCHEXTE>)

enumerator ARM\_ARCHEXT = 0x70000000 | [PT\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment6PT_ARME> "LIEF::ELF::Segment::PT_ARM")

Platform architecture compatibility info

##### [` ARM_EXIDX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE9ARM_EXIDXE>)

enumerator ARM\_EXIDX = 0x70000001 | [PT\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment6PT_ARME> "LIEF::ELF::Segment::PT_ARM")

##### [` AARCH64_MEMTAG_MTE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE18AARCH64_MEMTAG_MTEE>)

enumerator AARCH64\_MEMTAG\_MTE = 0x70000002 | [PT\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment10PT_AARCH64E> "LIEF::ELF::Segment::PT_AARCH64")

##### [` MIPS_REGINFO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE12MIPS_REGINFOE>)

enumerator MIPS\_REGINFO = 0x70000000 | [PT\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_MIPSE> "LIEF::ELF::Segment::PT_MIPS")

Register usage information.

##### [` MIPS_RTPROC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE11MIPS_RTPROCE>)

enumerator MIPS\_RTPROC = 0x70000001 | [PT\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_MIPSE> "LIEF::ELF::Segment::PT_MIPS")

Runtime procedure table.

##### [` MIPS_OPTIONS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE12MIPS_OPTIONSE>)

enumerator MIPS\_OPTIONS = 0x70000002 | [PT\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_MIPSE> "LIEF::ELF::Segment::PT_MIPS")

Options segment.

##### [` MIPS_ABIFLAGS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE13MIPS_ABIFLAGSE>)

enumerator MIPS\_ABIFLAGS = 0x70000003 | [PT\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_MIPSE> "LIEF::ELF::Segment::PT_MIPS")

Abiflags segment.

##### [` RISCV_ATTRIBUTES `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE16RISCV_ATTRIBUTESE>)

enumerator RISCV\_ATTRIBUTES = 0x70000003 | [PT\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment8PT_RISCVE> "LIEF::ELF::Segment::PT_RISCV")

##### [` IA_64_EXT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE9IA_64_EXTE>)

enumerator IA\_64\_EXT = (0x70000000 + 0x0) | [PT\_IA\_64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment8PT_IA_64E> "LIEF::ELF::Segment::PT_IA_64")

##### [` IA_64_UNWIND `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE12IA_64_UNWINDE>)

enumerator IA\_64\_UNWIND = (0x70000000 + 0x1) | [PT\_IA\_64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment8PT_IA_64E> "LIEF::ELF::Segment::PT_IA_64")

##### [` HP_TLS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE6HP_TLSE>)

enumerator HP\_TLS = (0x60000000 + 0x00) | [PT\_HPUX](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE> "LIEF::ELF::Segment::PT_HPUX")

##### [` HP_CORE_NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE12HP_CORE_NONEE>)

enumerator HP\_CORE\_NONE = (0x60000000 + 0x01) | [PT\_HPUX](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE> "LIEF::ELF::Segment::PT_HPUX")

##### [` HP_CORE_VERSION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE15HP_CORE_VERSIONE>)

enumerator HP\_CORE\_VERSION = (0x60000000 + 0x02) | [PT\_HPUX](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE> "LIEF::ELF::Segment::PT_HPUX")

##### [` HP_CORE_KERNEL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE14HP_CORE_KERNELE>)

enumerator HP\_CORE\_KERNEL = (0x60000000 + 0x03) | [PT\_HPUX](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE> "LIEF::ELF::Segment::PT_HPUX")

##### [` HP_CORE_COMM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE12HP_CORE_COMME>)

enumerator HP\_CORE\_COMM = (0x60000000 + 0x04) | [PT\_HPUX](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE> "LIEF::ELF::Segment::PT_HPUX")

##### [` HP_CORE_PROC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE12HP_CORE_PROCE>)

enumerator HP\_CORE\_PROC = (0x60000000 + 0x05) | [PT\_HPUX](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE> "LIEF::ELF::Segment::PT_HPUX")

##### [` HP_CORE_LOADABLE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE16HP_CORE_LOADABLEE>)

enumerator HP\_CORE\_LOADABLE = (0x60000000 + 0x06) | [PT\_HPUX](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE> "LIEF::ELF::Segment::PT_HPUX")

##### [` HP_CORE_STACK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE13HP_CORE_STACKE>)

enumerator HP\_CORE\_STACK = (0x60000000 + 0x07) | [PT\_HPUX](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE> "LIEF::ELF::Segment::PT_HPUX")

##### [` HP_CORE_SHM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE11HP_CORE_SHME>)

enumerator HP\_CORE\_SHM = (0x60000000 + 0x08) | [PT\_HPUX](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE> "LIEF::ELF::Segment::PT_HPUX")

##### [` HP_CORE_MMF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE11HP_CORE_MMFE>)

enumerator HP\_CORE\_MMF = (0x60000000 + 0x09) | [PT\_HPUX](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE> "LIEF::ELF::Segment::PT_HPUX")

##### [` HP_PARALLEL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE11HP_PARALLELE>)

enumerator HP\_PARALLEL = (0x60000000 + 0x10) | [PT\_HPUX](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE> "LIEF::ELF::Segment::PT_HPUX")

##### [` HP_FASTBIND `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE11HP_FASTBINDE>)

enumerator HP\_FASTBIND = (0x60000000 + 0x11) | [PT\_HPUX](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE> "LIEF::ELF::Segment::PT_HPUX")

##### [` HP_OPT_ANNOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE12HP_OPT_ANNOTE>)

enumerator HP\_OPT\_ANNOT = (0x60000000 + 0x12) | [PT\_HPUX](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE> "LIEF::ELF::Segment::PT_HPUX")

##### [` HP_HSL_ANNOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE12HP_HSL_ANNOTE>)

enumerator HP\_HSL\_ANNOT = (0x60000000 + 0x13) | [PT\_HPUX](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE> "LIEF::ELF::Segment::PT_HPUX")

##### [` HP_STACK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE8HP_STACKE>)

enumerator HP\_STACK = (0x60000000 + 0x14) | [PT\_HPUX](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE> "LIEF::ELF::Segment::PT_HPUX")

##### [` HP_CORE_UTSNAME `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPE15HP_CORE_UTSNAMEE>)

enumerator HP\_CORE\_UTSNAME = (0x60000000 + 0x15) | [PT\_HPUX](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE> "LIEF::ELF::Segment::PT_HPUX")

#### [` FLAGS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment5FLAGSE>)

enum class FLAGS

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment5FLAGS4NONEE>)

enumerator NONE = 0

##### [` X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment5FLAGS1XE>)

enumerator X = 1

##### [` W `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment5FLAGS1WE>)

enumerator W = 2

##### [` R `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment5FLAGS1RE>)

enumerator R = 4

#### [` sections_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment10sections_tE>)

using sections\_t = std::vector&lt;[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section")\*&gt;

#### [` it_sections `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment11it_sectionsE>)

using it\_sections = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[sections\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment10sections_tE> "LIEF::ELF::Segment::sections_t")&amp;&gt;

#### [` it_const_sections `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment17it_const_sectionsE>)

using it\_const\_sections = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [sections\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment10sections_tE> "LIEF::ELF::Segment::sections_t")&amp;&gt;

Public Functions

#### [` Segment `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7SegmentEv>)

Segment() = default

#### [` ~Segment `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentD0Ev>)

~Segment() override = default

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentaSE7Segment>)

[Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") &amp;operator=([Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") other)

#### [` Segment `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7SegmentERK7Segment>)

Segment(const [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7SegmentERK7Segment> "LIEF::ELF::Segment::Segment") &amp;other)

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentaSERR7Segment>)

[Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") &amp;operator=([Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment")&amp;&amp;) = default

#### [` Segment `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7SegmentERR7Segment>)

Segment([Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7SegmentERR7Segment> "LIEF::ELF::Segment::Segment")&amp;&amp;) = default

#### [` swap `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4swapER7Segment>)

void swap([Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") &amp;other)

#### [` is_load `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment7is_loadEv>)

inline bool is\_load() const

#### [` is_interpreter `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment14is_interpreterEv>)

inline bool is\_interpreter() const

#### [` is_phdr `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment7is_phdrEv>)

inline bool is\_phdr() const

#### [` type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment4typeEv>)

inline [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPEE> "LIEF::ELF::Segment::TYPE") type() const

The segment’s type (LOAD, DYNAMIC, …).

#### [` flags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment5flagsEv>)

inline [FLAGS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment5FLAGSE> "LIEF::ELF::Segment::FLAGS") flags() const

The flag permissions associated with this segment.

#### [` file_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment11file_offsetEv>)

inline uint64\_t file\_offset() const

The file offset of the data associated with this segment.

#### [` virtual_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment15virtual_addressEv>)

inline uint64\_t virtual\_address() const

The virtual address of the segment.

#### [` physical_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment16physical_addressEv>)

inline uint64\_t physical\_address() const

The physical address of the segment. This value is not really relevant on systems like Linux or Android. On the other hand, Qualcomm trustlets might use this value.

Usually this value matches virtual\_address

#### [` physical_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment13physical_sizeEv>)

inline uint64\_t physical\_size() const

The **file** size of the data associated with this segment.

#### [` virtual_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment12virtual_sizeEv>)

inline uint64\_t virtual\_size() const

The in-memory size of this segment. Usually, if the `.bss` segment is wrapped by this segment then, virtual\_size is larger than physical\_size.

#### [` alignment `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment9alignmentEv>)

inline uint64\_t alignment() const

The offset alignment of the segment.

#### [` content `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment7contentEv>)

span&lt;const uint8\_t&gt; content() const

The raw data associated with this segment.

#### [` has `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment3hasE5FLAGS>)

inline bool has([FLAGS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment5FLAGSE> "LIEF::ELF::Segment::FLAGS") flag) const

Check if the current segment has the given flag.

#### [` has `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment3hasERK7Section>)

bool has(const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") &amp;section) const

Check if the current segment wraps the given [ELF::Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>).

#### [` has `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment3hasERKNSt6stringE>)

bool has(const std::string &amp;section\_name) const

Check if the current segment wraps the given section’s name.

#### [` add `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment3addE5FLAGS>)

void add([FLAGS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment5FLAGSE> "LIEF::ELF::Segment::FLAGS") flag)

Append the given ELF\_SEGMENT\_FLAGS.

#### [` remove `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment6removeE5FLAGS>)

void remove([FLAGS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment5FLAGSE> "LIEF::ELF::Segment::FLAGS") flag)

Remove the given ELF\_SEGMENT\_FLAGS.

#### [` type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4typeE4TYPE>)

inline void type([TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPEE> "LIEF::ELF::Segment::TYPE") type)

#### [` flags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment5flagsE5FLAGS>)

inline void flags([FLAGS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment5FLAGSE> "LIEF::ELF::Segment::FLAGS") flags)

#### [` flags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment5flagsE8uint32_t>)

inline void flags(uint32\_t flags)

#### [` clear_flags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment11clear_flagsEv>)

inline void clear\_flags()

#### [` file_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment11file_offsetE8uint64_t>)

void file\_offset(uint64\_t file\_offset)

#### [` virtual_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment15virtual_addressE8uint64_t>)

inline void virtual\_address(uint64\_t virtual\_address)

#### [` physical_address `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment16physical_addressE8uint64_t>)

inline void physical\_address(uint64\_t physical\_address)

#### [` physical_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment13physical_sizeE8uint64_t>)

void physical\_size(uint64\_t physical\_size)

#### [` virtual_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment12virtual_sizeE8uint64_t>)

inline void virtual\_size(uint64\_t virtual\_size)

#### [` alignment `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment9alignmentE8uint64_t>)

inline void alignment(uint64\_t alignment)

#### [` content `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7contentENSt6vectorI7uint8_tEE>)

void content(std::vector&lt;uint8\_t&gt; content)

#### [` fill `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4fillEc>)

inline void fill(char c)

Fill the content of this segment with the value provided in parameter.

#### [` clear `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment5clearEv>)

inline void clear()

Clear the content of this segment.

#### [` Tget_content_value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0ENK4LIEF3ELF7Segment17get_content_valueE1T6size_t>)

template&lt;typename T&gt;  
[T](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0ENK4LIEF3ELF7Segment17get_content_valueE1T6size_t> "LIEF::ELF::Segment::get_content_value::T") get\_content\_value(size\_t offset) const

#### [` Tset_content_value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0EN4LIEF3ELF7Segment17set_content_valueEv6size_t1T>)

template&lt;typename T&gt;  
void set\_content\_value(size\_t offset, [T](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0EN4LIEF3ELF7Segment17set_content_valueEv6size_t1T> "LIEF::ELF::Segment::set_content_value::T") value)

#### [` get_content_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment16get_content_sizeEv>)

size\_t get\_content\_size() const

#### [` sections `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment8sectionsEv>)

inline [it\_sections](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment11it_sectionsE> "LIEF::ELF::Segment::it_sections") sections()

Iterator over the sections wrapped by this segment.

#### [` sections `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment8sectionsEv>)

inline [it\_const\_sections](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment17it_const_sectionsE> "LIEF::ELF::Segment::it_const_sections") sections() const

#### [` stream `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment6streamEv>)

std::unique\_ptr&lt;[SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream")&gt; stream() const

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Segment6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` operator+= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentpLE5FLAGS>)

inline [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") &amp;operator+=([FLAGS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment5FLAGSE> "LIEF::ELF::Segment::FLAGS") flag)

#### [` operator-= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentmIE5FLAGS>)

inline [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") &amp;operator-=([FLAGS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment5FLAGSE> "LIEF::ELF::Segment::FLAGS") flag)

Public Static Functions

#### [` type_from `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment9type_fromE8uint64_t4ARCHN6Header6OS_ABIE>)

static [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPEE> "LIEF::ELF::Segment::TYPE") type\_from(uint64\_t value, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch, [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[OS\_ABI](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header6OS_ABIE> "LIEF::ELF::Header::OS_ABI") os)

#### [` to_value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment8to_valueE4TYPE>)

static inline uint64\_t to\_value([TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment4TYPEE> "LIEF::ELF::Segment::TYPE") type)

#### [` from_raw `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment8from_rawEPK7uint8_t6size_t>)

static [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment")&gt; from\_raw(const uint8\_t \*ptr, size\_t size)

#### [` from_raw `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment8from_rawERKNSt6vectorI7uint8_tEE>)

static inline [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment")&gt; from\_raw(const std::vector&lt;uint8\_t&gt; &amp;raw)

Public Static Attributes

#### [` PT_BIT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment6PT_BITE>)

static uint64\_t PT\_BIT = 33

#### [` PT_OS_BIT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment9PT_OS_BITE>)

static uint64\_t PT\_OS\_BIT = 53

#### [` PT_MASK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_MASKE>)

static uint64\_t PT\_MASK = (uint64\_t(1) &lt;&lt; [PT\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment6PT_BITE> "LIEF::ELF::Segment::PT_BIT")) - 1

#### [` PT_ARM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment6PT_ARME>)

static uint64\_t PT\_ARM = uint64\_t(1) &lt;&lt; [PT\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment6PT_BITE> "LIEF::ELF::Segment::PT_BIT")

#### [` PT_AARCH64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment10PT_AARCH64E>)

static uint64\_t PT\_AARCH64 = uint64\_t(2) &lt;&lt; [PT\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment6PT_BITE> "LIEF::ELF::Segment::PT_BIT")

#### [` PT_MIPS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_MIPSE>)

static uint64\_t PT\_MIPS = uint64\_t(3) &lt;&lt; [PT\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment6PT_BITE> "LIEF::ELF::Segment::PT_BIT")

#### [` PT_RISCV `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment8PT_RISCVE>)

static uint64\_t PT\_RISCV = uint64\_t(4) &lt;&lt; [PT\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment6PT_BITE> "LIEF::ELF::Segment::PT_BIT")

#### [` PT_IA_64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment8PT_IA_64E>)

static uint64\_t PT\_IA\_64 = uint64\_t(5) &lt;&lt; [PT\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment6PT_BITE> "LIEF::ELF::Segment::PT_BIT")

#### [` PT_HPUX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment7PT_HPUXE>)

static uint64\_t PT\_HPUX = uint64\_t(1) &lt;&lt; [PT\_OS\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Segment9PT_OS_BITE> "LIEF::ELF::Segment::PT_OS_BIT")

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentlsERNSt7ostreamERK7Segment>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Segment](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SegmentE> "LIEF::ELF::Segment") &amp;segment)

---

## [Dynamic Entry](<https://lief.re/doc/latest/formats/elf/cpp.html#dynamic-entry>)

### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE>)

class DynamicEntry : public LIEF::Object

Class which represents an entry in the dynamic table These entries are located in the `.dynamic` section or the `PT_DYNAMIC` segment.

Subclassed by [LIEF::ELF::DynamicEntryArray](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntryArray>), [LIEF::ELF::DynamicEntryAuxiliary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntryAuxiliary>), [LIEF::ELF::DynamicEntryFilter](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntryFilter>), [LIEF::ELF::DynamicEntryFlags](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntryFlags>), [LIEF::ELF::DynamicEntryLibrary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntryLibrary>), [LIEF::ELF::DynamicEntryRpath](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntryRpath>), [LIEF::ELF::DynamicEntryRunPath](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntryRunPath>), [LIEF::ELF::DynamicSharedObject](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicSharedObject>)

Public Types

#### [` TAG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAGE>)

enum class TAG : uint64\_t

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG7UNKNOWNE>)

enumerator UNKNOWN = uint64\_t(-1)

##### [` DT_NULL_ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG8DT_NULL_E>)

enumerator DT\_NULL\_ = 0

Marks end of dynamic array.

##### [` NEEDED `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG6NEEDEDE>)

enumerator NEEDED = 1

String table offset of needed library.

##### [` PLTRELSZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG8PLTRELSZE>)

enumerator PLTRELSZ = 2

Size of relocation entries in PLT.

##### [` PLTGOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG6PLTGOTE>)

enumerator PLTGOT = 3

Address associated with linkage table.

##### [` HASH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG4HASHE>)

enumerator HASH = 4

Address of symbolic hash table.

##### [` STRTAB `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG6STRTABE>)

enumerator STRTAB = 5

Address of dynamic string table.

##### [` SYMTAB `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG6SYMTABE>)

enumerator SYMTAB = 6

Address of dynamic symbol table.

##### [` RELA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG4RELAE>)

enumerator RELA = 7

Address of relocation table (Rela entries).

##### [` RELASZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG6RELASZE>)

enumerator RELASZ = 8

Size of Rela relocation table.

##### [` RELAENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG7RELAENTE>)

enumerator RELAENT = 9

Size of a Rela relocation entry.

##### [` STRSZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG5STRSZE>)

enumerator STRSZ = 10

Total size of the string table.

##### [` SYMENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG6SYMENTE>)

enumerator SYMENT = 11

Size of a symbol table entry.

##### [` INIT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG4INITE>)

enumerator INIT = 12

Address of initialization function.

##### [` FINI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG4FINIE>)

enumerator FINI = 13

Address of termination function.

##### [` SONAME `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG6SONAMEE>)

enumerator SONAME = 14

String table offset of a shared objects name.

##### [` RPATH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG5RPATHE>)

enumerator RPATH = 15

String table offset of library search path.

##### [` SYMBOLIC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG8SYMBOLICE>)

enumerator SYMBOLIC = 16

Changes symbol resolution algorithm.

##### [` REL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG3RELE>)

enumerator REL = 17

Address of relocation table (Rel entries).

##### [` RELSZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG5RELSZE>)

enumerator RELSZ = 18

Size of Rel relocation table.

##### [` RELENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG6RELENTE>)

enumerator RELENT = 19

Size of a Rel relocation entry.

##### [` PLTREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG6PLTRELE>)

enumerator PLTREL = 20

Type of relocation entry used for linking.

##### [` DEBUG_TAG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG9DEBUG_TAGE>)

enumerator DEBUG\_TAG = 21

Reserved for debugger.

##### [` TEXTREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG7TEXTRELE>)

enumerator TEXTREL = 22

Relocations exist for non-writable segments.

##### [` JMPREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG6JMPRELE>)

enumerator JMPREL = 23

Address of relocations associated with PLT.

##### [` BIND_NOW `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG8BIND_NOWE>)

enumerator BIND\_NOW = 24

Process all relocations before execution.

##### [` INIT_ARRAY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG10INIT_ARRAYE>)

enumerator INIT\_ARRAY = 25

Pointer to array of initialization functions.

##### [` FINI_ARRAY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG10FINI_ARRAYE>)

enumerator FINI\_ARRAY = 26

Pointer to array of termination functions.

##### [` INIT_ARRAYSZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG12INIT_ARRAYSZE>)

enumerator INIT\_ARRAYSZ = 27

Size of DT\_INIT\_ARRAY.

##### [` FINI_ARRAYSZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG12FINI_ARRAYSZE>)

enumerator FINI\_ARRAYSZ = 28

Size of DT\_FINI\_ARRAY.

##### [` RUNPATH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG7RUNPATHE>)

enumerator RUNPATH = 29

String table offset of lib search path.

##### [` FLAGS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG5FLAGSE>)

enumerator FLAGS = 30

Flags.

##### [` PREINIT_ARRAY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG13PREINIT_ARRAYE>)

enumerator PREINIT\_ARRAY = 32

Pointer to array of preinit functions.

##### [` PREINIT_ARRAYSZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG15PREINIT_ARRAYSZE>)

enumerator PREINIT\_ARRAYSZ = 33

Size of the DT\_PREINIT\_ARRAY array.

##### [` SYMTAB_SHNDX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG12SYMTAB_SHNDXE>)

enumerator SYMTAB\_SHNDX = 34

Address of SYMTAB\_SHNDX section

##### [` RELRSZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG6RELRSZE>)

enumerator RELRSZ = 35

Total size of RELR relative relocations

##### [` RELR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG4RELRE>)

enumerator RELR = 36

Address of RELR relative relocations

##### [` RELRENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG7RELRENTE>)

enumerator RELRENT = 37

Size of one RELR relative relocation

##### [` GNU_HASH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG8GNU_HASHE>)

enumerator GNU\_HASH = 0x6FFFFEF5

Reference to the GNU hash table.

##### [` TLSDESC_PLT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG11TLSDESC_PLTE>)

enumerator TLSDESC\_PLT = 0x6FFFFEF6

Location of PLT entry for TLS descriptor resolver calls.

##### [` TLSDESC_GOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG11TLSDESC_GOTE>)

enumerator TLSDESC\_GOT = 0x6FFFFEF7

Location of GOT entry for TLS descriptor resolver PLT entry.

##### [` RELACOUNT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG9RELACOUNTE>)

enumerator RELACOUNT = 0x6FFFFFF9

ELF32\_Rela count.

##### [` RELCOUNT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG8RELCOUNTE>)

enumerator RELCOUNT = 0x6FFFFFFA

ELF32\_Rel count.

##### [` FLAGS_1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG7FLAGS_1E>)

enumerator FLAGS\_1 = 0x6FFFFFFB

Flags\_1.

##### [` VERSYM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG6VERSYME>)

enumerator VERSYM = 0x6FFFFFF0

The address of .gnu.version section.

##### [` VERDEF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG6VERDEFE>)

enumerator VERDEF = 0x6FFFFFFC

The address of the version definition table.

##### [` VERDEFNUM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG9VERDEFNUME>)

enumerator VERDEFNUM = 0x6FFFFFFD

The number of entries in DT\_VERDEF.

##### [` VERNEED `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG7VERNEEDE>)

enumerator VERNEED = 0x6FFFFFFE

The address of the version Dependency table.

##### [` VERNEEDNUM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG10VERNEEDNUME>)

enumerator VERNEEDNUM = 0x6FFFFFFF

The number of entries in DT\_VERNEED.

##### [` AUXILIARY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG9AUXILIARYE>)

enumerator AUXILIARY = 0x7ffffffd

Shared object to load before self

##### [` FILTER `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG6FILTERE>)

enumerator FILTER = 0x7fffffff

Shared object to filter from

##### [` ANDROID_REL_OFFSET `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG18ANDROID_REL_OFFSETE>)

enumerator ANDROID\_REL\_OFFSET = 0x6000000D

The offset of packed relocation data (older version &lt; M) (Android specific).

##### [` ANDROID_REL_SIZE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG16ANDROID_REL_SIZEE>)

enumerator ANDROID\_REL\_SIZE = 0x6000000E

The size of packed relocation data in bytes (older version &lt; M) (Android specific).

##### [` ANDROID_REL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG11ANDROID_RELE>)

enumerator ANDROID\_REL = 0x6000000F

The offset of packed relocation data (Android specific).

##### [` ANDROID_RELSZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG13ANDROID_RELSZE>)

enumerator ANDROID\_RELSZ = 0x60000010

The size of packed relocation data in bytes (Android specific).

##### [` ANDROID_RELA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG12ANDROID_RELAE>)

enumerator ANDROID\_RELA = 0x60000011

The offset of packed relocation data (Android specific).

##### [` ANDROID_RELASZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG14ANDROID_RELASZE>)

enumerator ANDROID\_RELASZ = 0x60000012

The size of packed relocation data in bytes (Android specific).

##### [` ANDROID_RELR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG12ANDROID_RELRE>)

enumerator ANDROID\_RELR = 0x6FFFE000

The offset of new relr relocation data (Android specific).

##### [` ANDROID_RELRSZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG14ANDROID_RELRSZE>)

enumerator ANDROID\_RELRSZ = 0x6FFFE001

The size of new relr relocation data in bytes (Android specific).

##### [` ANDROID_RELRENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG15ANDROID_RELRENTE>)

enumerator ANDROID\_RELRENT = 0x6FFFE003

The size of a new relr relocation entry (Android specific).

##### [` ANDROID_RELRCOUNT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG17ANDROID_RELRCOUNTE>)

enumerator ANDROID\_RELRCOUNT = 0x6FFFE005

Specifies the relative count of new relr relocation entries (Android specific).

##### [` MIPS_RLD_VERSION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG16MIPS_RLD_VERSIONE>)

enumerator MIPS\_RLD\_VERSION = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000001

32 bit version number for runtime linker interface.

##### [` MIPS_TIME_STAMP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG15MIPS_TIME_STAMPE>)

enumerator MIPS\_TIME\_STAMP = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000002

Time stamp.

##### [` MIPS_ICHECKSUM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG14MIPS_ICHECKSUME>)

enumerator MIPS\_ICHECKSUM = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000003

Checksum of external strings and common sizes.

##### [` MIPS_IVERSION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG13MIPS_IVERSIONE>)

enumerator MIPS\_IVERSION = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000004

Index of version string in string table.

##### [` MIPS_FLAGS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG10MIPS_FLAGSE>)

enumerator MIPS\_FLAGS = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000005

32 bits of flags.

##### [` MIPS_BASE_ADDRESS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG17MIPS_BASE_ADDRESSE>)

enumerator MIPS\_BASE\_ADDRESS = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000006

Base address of the segment.

##### [` MIPS_MSYM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG9MIPS_MSYME>)

enumerator MIPS\_MSYM = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000007

Address of .msym section.

##### [` MIPS_CONFLICT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG13MIPS_CONFLICTE>)

enumerator MIPS\_CONFLICT = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000008

Address of .conflict section.

##### [` MIPS_LIBLIST `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG12MIPS_LIBLISTE>)

enumerator MIPS\_LIBLIST = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000009

Address of .liblist section.

##### [` MIPS_LOCAL_GOTNO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG16MIPS_LOCAL_GOTNOE>)

enumerator MIPS\_LOCAL\_GOTNO = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x7000000a

Number of local global offset table entries.

##### [` MIPS_CONFLICTNO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG15MIPS_CONFLICTNOE>)

enumerator MIPS\_CONFLICTNO = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x7000000b

Number of entries in the .conflict section.

##### [` MIPS_LIBLISTNO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG14MIPS_LIBLISTNOE>)

enumerator MIPS\_LIBLISTNO = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000010

Number of entries in the .liblist section.

##### [` MIPS_SYMTABNO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG13MIPS_SYMTABNOE>)

enumerator MIPS\_SYMTABNO = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000011

Number of entries in the .dynsym section.

##### [` MIPS_UNREFEXTNO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG15MIPS_UNREFEXTNOE>)

enumerator MIPS\_UNREFEXTNO = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000012

Index of first external dynamic symbol not referenced locally.

##### [` MIPS_GOTSYM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG11MIPS_GOTSYME>)

enumerator MIPS\_GOTSYM = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000013

Index of first dynamic symbol in global offset table.

##### [` MIPS_HIPAGENO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG13MIPS_HIPAGENOE>)

enumerator MIPS\_HIPAGENO = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000014

Number of page table entries in global offset table.

##### [` MIPS_RLD_MAP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG12MIPS_RLD_MAPE>)

enumerator MIPS\_RLD\_MAP = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000016

Address of run time loader map, used for debugging.

##### [` MIPS_DELTA_CLASS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG16MIPS_DELTA_CLASSE>)

enumerator MIPS\_DELTA\_CLASS = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000017

Delta C++ class definition.

##### [` MIPS_DELTA_CLASS_NO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG19MIPS_DELTA_CLASS_NOE>)

enumerator MIPS\_DELTA\_CLASS\_NO = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000018

Number of entries in DT\_MIPS\_DELTA\_CLASS.

##### [` MIPS_DELTA_INSTANCE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG19MIPS_DELTA_INSTANCEE>)

enumerator MIPS\_DELTA\_INSTANCE = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000019

Delta C++ class instances.

##### [` MIPS_DELTA_INSTANCE_NO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG22MIPS_DELTA_INSTANCE_NOE>)

enumerator MIPS\_DELTA\_INSTANCE\_NO = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x7000001A

Number of entries in DT\_MIPS\_DELTA\_INSTANCE.

##### [` MIPS_DELTA_RELOC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG16MIPS_DELTA_RELOCE>)

enumerator MIPS\_DELTA\_RELOC = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x7000001B

Delta relocations.

##### [` MIPS_DELTA_RELOC_NO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG19MIPS_DELTA_RELOC_NOE>)

enumerator MIPS\_DELTA\_RELOC\_NO = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x7000001C

Number of entries in DT\_MIPS\_DELTA\_RELOC.

##### [` MIPS_DELTA_SYM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG14MIPS_DELTA_SYME>)

enumerator MIPS\_DELTA\_SYM = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x7000001D

Delta symbols that Delta relocations refer to.

##### [` MIPS_DELTA_SYM_NO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG17MIPS_DELTA_SYM_NOE>)

enumerator MIPS\_DELTA\_SYM\_NO = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x7000001E

Number of entries in DT\_MIPS\_DELTA\_SYM.

##### [` MIPS_DELTA_CLASSSYM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG19MIPS_DELTA_CLASSSYME>)

enumerator MIPS\_DELTA\_CLASSSYM = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000020

Delta symbols that hold class declarations.

##### [` MIPS_DELTA_CLASSSYM_NO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG22MIPS_DELTA_CLASSSYM_NOE>)

enumerator MIPS\_DELTA\_CLASSSYM\_NO = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000021

Number of entries in DT\_MIPS\_DELTA\_CLASSSYM.

##### [` MIPS_CXX_FLAGS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG14MIPS_CXX_FLAGSE>)

enumerator MIPS\_CXX\_FLAGS = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000022

Flags indicating information about C++ flavor.

##### [` MIPS_PIXIE_INIT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG15MIPS_PIXIE_INITE>)

enumerator MIPS\_PIXIE\_INIT = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000023

Pixie information.

##### [` MIPS_SYMBOL_LIB `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG15MIPS_SYMBOL_LIBE>)

enumerator MIPS\_SYMBOL\_LIB = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000024

Address of .MIPS.symlib

##### [` MIPS_LOCALPAGE_GOTIDX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG21MIPS_LOCALPAGE_GOTIDXE>)

enumerator MIPS\_LOCALPAGE\_GOTIDX = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000025

The GOT index of the first PTE for a segment

##### [` MIPS_LOCAL_GOTIDX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG17MIPS_LOCAL_GOTIDXE>)

enumerator MIPS\_LOCAL\_GOTIDX = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000026

The GOT index of the first PTE for a local symbol

##### [` MIPS_HIDDEN_GOTIDX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG18MIPS_HIDDEN_GOTIDXE>)

enumerator MIPS\_HIDDEN\_GOTIDX = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000027

The GOT index of the first PTE for a hidden symbol

##### [` MIPS_PROTECTED_GOTIDX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG21MIPS_PROTECTED_GOTIDXE>)

enumerator MIPS\_PROTECTED\_GOTIDX = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000028

The GOT index of the first PTE for a protected symbol

##### [` MIPS_OPTIONS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG12MIPS_OPTIONSE>)

enumerator MIPS\_OPTIONS = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000029

Address of `.MIPS.options`.

##### [` MIPS_INTERFACE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG14MIPS_INTERFACEE>)

enumerator MIPS\_INTERFACE = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x7000002A

Address of `.interface`.

##### [` MIPS_DYNSTR_ALIGN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG17MIPS_DYNSTR_ALIGNE>)

enumerator MIPS\_DYNSTR\_ALIGN = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x7000002B

Unknown.

##### [` MIPS_INTERFACE_SIZE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG19MIPS_INTERFACE_SIZEE>)

enumerator MIPS\_INTERFACE\_SIZE = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x7000002C

Size of the .interface section.

##### [` MIPS_RLD_TEXT_RESOLVE_ADDR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG26MIPS_RLD_TEXT_RESOLVE_ADDRE>)

enumerator MIPS\_RLD\_TEXT\_RESOLVE\_ADDR = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x7000002D

Size of rld\_text\_resolve function stored in the GOT.

##### [` MIPS_PERF_SUFFIX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG16MIPS_PERF_SUFFIXE>)

enumerator MIPS\_PERF\_SUFFIX = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x7000002E

Default suffix of DSO to be added by rld on dlopen() calls.

##### [` MIPS_COMPACT_SIZE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG17MIPS_COMPACT_SIZEE>)

enumerator MIPS\_COMPACT\_SIZE = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x7000002F

Size of compact relocation section (O32).

##### [` MIPS_GP_VALUE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG13MIPS_GP_VALUEE>)

enumerator MIPS\_GP\_VALUE = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000030

GP value for auxiliary GOTs.

##### [` MIPS_AUX_DYNAMIC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG16MIPS_AUX_DYNAMICE>)

enumerator MIPS\_AUX\_DYNAMIC = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000031

Address of auxiliary .dynamic.

##### [` MIPS_PLTGOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG11MIPS_PLTGOTE>)

enumerator MIPS\_PLTGOT = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000032

Address of the base of the PLTGOT.

##### [` MIPS_RWPLT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG10MIPS_RWPLTE>)

enumerator MIPS\_RWPLT = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000034

##### [` MIPS_RLD_MAP_REL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG16MIPS_RLD_MAP_RELE>)

enumerator MIPS\_RLD\_MAP\_REL = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000035

##### [` MIPS_XHASH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG10MIPS_XHASHE>)

enumerator MIPS\_XHASH = [MIPS\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE> "LIEF::ELF::DynamicEntry::MIPS_DISC") + 0x70000036

##### [` AARCH64_BTI_PLT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG15AARCH64_BTI_PLTE>)

enumerator AARCH64\_BTI\_PLT = [AARCH64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12AARCH64_DISCE> "LIEF::ELF::DynamicEntry::AARCH64_DISC") + 0x70000001

##### [` AARCH64_PAC_PLT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG15AARCH64_PAC_PLTE>)

enumerator AARCH64\_PAC\_PLT = [AARCH64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12AARCH64_DISCE> "LIEF::ELF::DynamicEntry::AARCH64_DISC") + 0x70000003

##### [` AARCH64_VARIANT_PCS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG19AARCH64_VARIANT_PCSE>)

enumerator AARCH64\_VARIANT\_PCS = [AARCH64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12AARCH64_DISCE> "LIEF::ELF::DynamicEntry::AARCH64_DISC") + 0x70000005

##### [` AARCH64_MEMTAG_MODE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG19AARCH64_MEMTAG_MODEE>)

enumerator AARCH64\_MEMTAG\_MODE = [AARCH64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12AARCH64_DISCE> "LIEF::ELF::DynamicEntry::AARCH64_DISC") + 0x70000009

##### [` AARCH64_MEMTAG_HEAP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG19AARCH64_MEMTAG_HEAPE>)

enumerator AARCH64\_MEMTAG\_HEAP = [AARCH64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12AARCH64_DISCE> "LIEF::ELF::DynamicEntry::AARCH64_DISC") + 0x7000000b

##### [` AARCH64_MEMTAG_STACK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG20AARCH64_MEMTAG_STACKE>)

enumerator AARCH64\_MEMTAG\_STACK = [AARCH64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12AARCH64_DISCE> "LIEF::ELF::DynamicEntry::AARCH64_DISC") + 0x7000000c

##### [` AARCH64_MEMTAG_GLOBALS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG22AARCH64_MEMTAG_GLOBALSE>)

enumerator AARCH64\_MEMTAG\_GLOBALS = [AARCH64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12AARCH64_DISCE> "LIEF::ELF::DynamicEntry::AARCH64_DISC") + 0x7000000d

##### [` AARCH64_MEMTAG_GLOBALSSZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG24AARCH64_MEMTAG_GLOBALSSZE>)

enumerator AARCH64\_MEMTAG\_GLOBALSSZ = [AARCH64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12AARCH64_DISCE> "LIEF::ELF::DynamicEntry::AARCH64_DISC") + 0x7000000f

##### [` HEXAGON_SYMSZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG13HEXAGON_SYMSZE>)

enumerator HEXAGON\_SYMSZ = [HEXAGON\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12HEXAGON_DISCE> "LIEF::ELF::DynamicEntry::HEXAGON_DISC") + 0x70000000

##### [` HEXAGON_VER `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG11HEXAGON_VERE>)

enumerator HEXAGON\_VER = [HEXAGON\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12HEXAGON_DISCE> "LIEF::ELF::DynamicEntry::HEXAGON_DISC") + 0x70000001

##### [` HEXAGON_PLT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG11HEXAGON_PLTE>)

enumerator HEXAGON\_PLT = [HEXAGON\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12HEXAGON_DISCE> "LIEF::ELF::DynamicEntry::HEXAGON_DISC") + 0x70000002

##### [` PPC_GOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG7PPC_GOTE>)

enumerator PPC\_GOT = [PPC\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry8PPC_DISCE> "LIEF::ELF::DynamicEntry::PPC_DISC") + 0x70000000

##### [` PPC_OPT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG7PPC_OPTE>)

enumerator PPC\_OPT = [PPC\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry8PPC_DISCE> "LIEF::ELF::DynamicEntry::PPC_DISC") + 0x70000001

##### [` PPC64_GLINK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG11PPC64_GLINKE>)

enumerator PPC64\_GLINK = [PPC64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10PPC64_DISCE> "LIEF::ELF::DynamicEntry::PPC64_DISC") + 0x70000000

##### [` PPC64_OPT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG9PPC64_OPTE>)

enumerator PPC64\_OPT = [PPC64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10PPC64_DISCE> "LIEF::ELF::DynamicEntry::PPC64_DISC") + 0x70000003

##### [` RISCV_VARIANT_CC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG16RISCV_VARIANT_CCE>)

enumerator RISCV\_VARIANT\_CC = [RISCV\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10RISCV_DISCE> "LIEF::ELF::DynamicEntry::RISCV_DISC") + 0x70000003

##### [` X86_64_PLT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG10X86_64_PLTE>)

enumerator X86\_64\_PLT = [X86\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry11X86_64_DISCE> "LIEF::ELF::DynamicEntry::X86_64_DISC") + 0x70000000

##### [` X86_64_PLTSZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG12X86_64_PLTSZE>)

enumerator X86\_64\_PLTSZ = [X86\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry11X86_64_DISCE> "LIEF::ELF::DynamicEntry::X86_64_DISC") + 0x70000001

##### [` X86_64_PLTENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG13X86_64_PLTENTE>)

enumerator X86\_64\_PLTENT = [X86\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry11X86_64_DISCE> "LIEF::ELF::DynamicEntry::X86_64_DISC") + 0x70000003

##### [` IA_64_PLT_RESERVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG17IA_64_PLT_RESERVEE>)

enumerator IA\_64\_PLT\_RESERVE = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x70000000 + 0)

##### [` IA_64_VMS_SUBTYPE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG17IA_64_VMS_SUBTYPEE>)

enumerator IA\_64\_VMS\_SUBTYPE = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 0)

##### [` IA_64_VMS_IMGIOCNT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG18IA_64_VMS_IMGIOCNTE>)

enumerator IA\_64\_VMS\_IMGIOCNT = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 2)

##### [` IA_64_VMS_LNKFLAGS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG18IA_64_VMS_LNKFLAGSE>)

enumerator IA\_64\_VMS\_LNKFLAGS = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 8)

##### [` IA_64_VMS_VIR_MEM_BLK_SIZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG25IA_64_VMS_VIR_MEM_BLK_SIZE>)

enumerator IA\_64\_VMS\_VIR\_MEM\_BLK\_SIZ = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 10)

##### [` IA_64_VMS_IDENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG15IA_64_VMS_IDENTE>)

enumerator IA\_64\_VMS\_IDENT = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 12)

##### [` IA_64_VMS_NEEDED_IDENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG22IA_64_VMS_NEEDED_IDENTE>)

enumerator IA\_64\_VMS\_NEEDED\_IDENT = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 16)

##### [` IA_64_VMS_IMG_RELA_CNT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG22IA_64_VMS_IMG_RELA_CNTE>)

enumerator IA\_64\_VMS\_IMG\_RELA\_CNT = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 18)

##### [` IA_64_VMS_SEG_RELA_CNT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG22IA_64_VMS_SEG_RELA_CNTE>)

enumerator IA\_64\_VMS\_SEG\_RELA\_CNT = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 20)

##### [` IA_64_VMS_FIXUP_RELA_CNT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG24IA_64_VMS_FIXUP_RELA_CNTE>)

enumerator IA\_64\_VMS\_FIXUP\_RELA\_CNT = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 22)

##### [` IA_64_VMS_FIXUP_NEEDED `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG22IA_64_VMS_FIXUP_NEEDEDE>)

enumerator IA\_64\_VMS\_FIXUP\_NEEDED = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 24)

##### [` IA_64_VMS_SYMVEC_CNT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG20IA_64_VMS_SYMVEC_CNTE>)

enumerator IA\_64\_VMS\_SYMVEC\_CNT = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 26)

##### [` IA_64_VMS_XLATED `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG16IA_64_VMS_XLATEDE>)

enumerator IA\_64\_VMS\_XLATED = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 30)

##### [` IA_64_VMS_STACKSIZE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG19IA_64_VMS_STACKSIZEE>)

enumerator IA\_64\_VMS\_STACKSIZE = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 32)

##### [` IA_64_VMS_UNWINDSZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG18IA_64_VMS_UNWINDSZE>)

enumerator IA\_64\_VMS\_UNWINDSZ = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 34)

##### [` IA_64_VMS_UNWIND_CODSEG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG23IA_64_VMS_UNWIND_CODSEGE>)

enumerator IA\_64\_VMS\_UNWIND\_CODSEG = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 36)

##### [` IA_64_VMS_UNWIND_INFOSEG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG24IA_64_VMS_UNWIND_INFOSEGE>)

enumerator IA\_64\_VMS\_UNWIND\_INFOSEG = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 38)

##### [` IA_64_VMS_LINKTIME `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG18IA_64_VMS_LINKTIMEE>)

enumerator IA\_64\_VMS\_LINKTIME = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 40)

##### [` IA_64_VMS_SEG_NO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG16IA_64_VMS_SEG_NOE>)

enumerator IA\_64\_VMS\_SEG\_NO = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 42)

##### [` IA_64_VMS_SYMVEC_OFFSET `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG23IA_64_VMS_SYMVEC_OFFSETE>)

enumerator IA\_64\_VMS\_SYMVEC\_OFFSET = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 44)

##### [` IA_64_VMS_SYMVEC_SEG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG20IA_64_VMS_SYMVEC_SEGE>)

enumerator IA\_64\_VMS\_SYMVEC\_SEG = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 46)

##### [` IA_64_VMS_UNWIND_OFFSET `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG23IA_64_VMS_UNWIND_OFFSETE>)

enumerator IA\_64\_VMS\_UNWIND\_OFFSET = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 48)

##### [` IA_64_VMS_UNWIND_SEG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG20IA_64_VMS_UNWIND_SEGE>)

enumerator IA\_64\_VMS\_UNWIND\_SEG = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 50)

##### [` IA_64_VMS_STRTAB_OFFSET `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG23IA_64_VMS_STRTAB_OFFSETE>)

enumerator IA\_64\_VMS\_STRTAB\_OFFSET = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 52)

##### [` IA_64_VMS_SYSVER_OFFSET `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG23IA_64_VMS_SYSVER_OFFSETE>)

enumerator IA\_64\_VMS\_SYSVER\_OFFSET = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 54)

##### [` IA_64_VMS_IMG_RELA_OFF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG22IA_64_VMS_IMG_RELA_OFFE>)

enumerator IA\_64\_VMS\_IMG\_RELA\_OFF = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 56)

##### [` IA_64_VMS_SEG_RELA_OFF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG22IA_64_VMS_SEG_RELA_OFFE>)

enumerator IA\_64\_VMS\_SEG\_RELA\_OFF = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 58)

##### [` IA_64_VMS_FIXUP_RELA_OFF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG24IA_64_VMS_FIXUP_RELA_OFFE>)

enumerator IA\_64\_VMS\_FIXUP\_RELA\_OFF = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 60)

##### [` IA_64_VMS_PLTGOT_OFFSET `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG23IA_64_VMS_PLTGOT_OFFSETE>)

enumerator IA\_64\_VMS\_PLTGOT\_OFFSET = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 62)

##### [` IA_64_VMS_PLTGOT_SEG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG20IA_64_VMS_PLTGOT_SEGE>)

enumerator IA\_64\_VMS\_PLTGOT\_SEG = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 64)

##### [` IA_64_VMS_FPMODE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAG16IA_64_VMS_FPMODEE>)

enumerator IA\_64\_VMS\_FPMODE = [IA\_64\_DISC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE> "LIEF::ELF::DynamicEntry::IA_64_DISC") + (0x60000000 + 66)

Public Functions

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12DynamicEntryEv>)

DynamicEntry() = default

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12DynamicEntryERKN7details9Elf64_DynE4ARCH>)

DynamicEntry(const details::Elf64\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12DynamicEntryERKN7details9Elf32_DynE4ARCH>)

DynamicEntry(const details::Elf32\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12DynamicEntryE3TAG8uint64_t>)

inline DynamicEntry([TAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAGE> "LIEF::ELF::DynamicEntry::TAG") tag, uint64\_t value)

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryaSERK12DynamicEntry>)

[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry") &amp;operator=(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")&amp;) = default

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12DynamicEntryERK12DynamicEntry>)

DynamicEntry(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12DynamicEntryERK12DynamicEntry> "LIEF::ELF::DynamicEntry::DynamicEntry")&amp;) = default

#### [` ~DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryD0Ev>)

~DynamicEntry() override = default

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12DynamicEntry5cloneEv>)

inline virtual std::unique\_ptr&lt;[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")&gt; clone() const

#### [` tag `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12DynamicEntry3tagEv>)

inline [TAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAGE> "LIEF::ELF::DynamicEntry::TAG") tag() const

Tag of the current entry. The most common tags are: DT\_NEEDED, DT\_INIT, …

#### [` value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12DynamicEntry5valueEv>)

inline uint64\_t value() const

Return the entry’s value.

The meaning of the value strongly depends on the tag. It can be an offset, an index, a flag, …

#### [` tag `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3tagE3TAG>)

inline void tag([TAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAGE> "LIEF::ELF::DynamicEntry::TAG") tag)

#### [` value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry5valueE8uint64_t>)

inline void value(uint64\_t value)

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12DynamicEntry6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12DynamicEntry5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const

#### [` to_string `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12DynamicEntry9to_stringEv>)

std::string to\_string() const

#### [` Tcast `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0ENK4LIEF3ELF12DynamicEntry4castEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0ENK4LIEF3ELF12DynamicEntry4castEPK1Tv> "LIEF::ELF::DynamicEntry::cast::T") \*cast() const

#### [` Tcast `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0EN4LIEF3ELF12DynamicEntry4castEP1Tv>)

template&lt;class T&gt;  
inline [T](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0EN4LIEF3ELF12DynamicEntry4castEP1Tv> "LIEF::ELF::DynamicEntry::cast::T") \*cast()

Public Static Functions

#### [` from_value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10from_valueE8uint64_t4ARCH>)

static [TAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAGE> "LIEF::ELF::DynamicEntry::TAG") from\_value(uint64\_t value, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` to_value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry8to_valueE3TAG>)

static uint64\_t to\_value([TAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAGE> "LIEF::ELF::DynamicEntry::TAG") tag)

#### [` create `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry6createE3TAG8uint64_t>)

static std::unique\_ptr&lt;[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")&gt; create([TAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAGE> "LIEF::ELF::DynamicEntry::TAG") tag, uint64\_t value)

#### [` create `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry6createE3TAG>)

static inline std::unique\_ptr&lt;[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")&gt; create([TAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry3TAGE> "LIEF::ELF::DynamicEntry::TAG") tag)

Public Static Attributes

#### [` MIPS_DISC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry9MIPS_DISCE>)

static uint64\_t MIPS\_DISC = 0x100000000

#### [` AARCH64_DISC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12AARCH64_DISCE>)

static uint64\_t AARCH64\_DISC = 0x200000000

#### [` HEXAGON_DISC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry12HEXAGON_DISCE>)

static uint64\_t HEXAGON\_DISC = 0x300000000

#### [` PPC_DISC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry8PPC_DISCE>)

static uint64\_t PPC\_DISC = 0x400000000

#### [` PPC64_DISC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10PPC64_DISCE>)

static uint64\_t PPC64\_DISC = 0x500000000

#### [` RISCV_DISC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10RISCV_DISCE>)

static uint64\_t RISCV\_DISC = 0x600000000

#### [` X86_64_DISC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry11X86_64_DISCE>)

static uint64\_t X86\_64\_DISC = 0x700000000

#### [` IA_64_DISC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntry10IA_64_DISCE>)

static uint64\_t IA\_64\_DISC = 0x800000000

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntrylsERNSt7ostreamERK12DynamicEntry>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry") &amp;entry)

---

## [Dynamic Entry Library](<https://lief.re/doc/latest/formats/elf/cpp.html#dynamic-entry-library>)

### [` DynamicEntryLibrary `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibraryE>)

class DynamicEntryLibrary : public LIEF::ELF::[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")

Class which represents a `DT_NEEDED` entry in the dynamic table.

This kind of entry is usually used to create library dependency.

Public Functions

#### [` DynamicEntryLibrary `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibrary19DynamicEntryLibraryEv>)

inline DynamicEntryLibrary()

#### [` DynamicEntryLibrary `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibrary19DynamicEntryLibraryENSt6stringE>)

inline DynamicEntryLibrary(std::string name)

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibraryaSERK19DynamicEntryLibrary>)

[DynamicEntryLibrary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibraryE> "LIEF::ELF::DynamicEntryLibrary") &amp;operator=(const [DynamicEntryLibrary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibraryE> "LIEF::ELF::DynamicEntryLibrary")&amp;) = default

#### [` DynamicEntryLibrary `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibrary19DynamicEntryLibraryERK19DynamicEntryLibrary>)

DynamicEntryLibrary(const [DynamicEntryLibrary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibrary19DynamicEntryLibraryERK19DynamicEntryLibrary> "LIEF::ELF::DynamicEntryLibrary::DynamicEntryLibrary")&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF19DynamicEntryLibrary5cloneEv>)

inline virtual std::unique\_ptr&lt;[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibrary12DynamicEntryEv> "LIEF::ELF::DynamicEntryLibrary::DynamicEntry")&gt; clone() const override

#### [` name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF19DynamicEntryLibrary4nameEv>)

inline std::string\_view name() const

Return the library associated with this entry (e.g. `libc.so.6`).

#### [` name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibrary4nameENSt6stringE>)

inline void name(std::string name)

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF19DynamicEntryLibrary6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF19DynamicEntryLibrary5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibrary12DynamicEntryEv>)

DynamicEntry() = default

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibrary12DynamicEntryERKN7details9Elf64_DynE4ARCH>)

DynamicEntry(const details::Elf64\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibrary12DynamicEntryERKN7details9Elf32_DynE4ARCH>)

DynamicEntry(const details::Elf32\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibrary12DynamicEntryE3TAG8uint64_t>)

inline DynamicEntry(TAG tag, uint64\_t value)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibrary12DynamicEntryERK12DynamicEntry>)

DynamicEntry(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibrary12DynamicEntryERK12DynamicEntry> "LIEF::ELF::DynamicEntryLibrary::DynamicEntry")&amp;) = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibrary7classofEPK12DynamicEntry>)

static inline bool classof(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryLibrary12DynamicEntryEv> "LIEF::ELF::DynamicEntryLibrary::DynamicEntry") \*entry)

---

## [Dynamic Shared Object](<https://lief.re/doc/latest/formats/elf/cpp.html#dynamic-shared-object>)

### [` DynamicSharedObject `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObjectE>)

class DynamicSharedObject : public LIEF::ELF::[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")

Class which represents a `DT_SONAME` entry in the dynamic table This kind of entry is usually used to name the original library.

This entry is not present for executables.

Public Functions

#### [` DynamicSharedObject `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObject19DynamicSharedObjectEv>)

inline DynamicSharedObject()

#### [` DynamicSharedObject `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObject19DynamicSharedObjectENSt6stringE>)

inline DynamicSharedObject(std::string name)

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObjectaSERK19DynamicSharedObject>)

[DynamicSharedObject](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObjectE> "LIEF::ELF::DynamicSharedObject") &amp;operator=(const [DynamicSharedObject](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObjectE> "LIEF::ELF::DynamicSharedObject")&amp;) = default

#### [` DynamicSharedObject `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObject19DynamicSharedObjectERK19DynamicSharedObject>)

DynamicSharedObject(const [DynamicSharedObject](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObject19DynamicSharedObjectERK19DynamicSharedObject> "LIEF::ELF::DynamicSharedObject::DynamicSharedObject")&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF19DynamicSharedObject5cloneEv>)

inline virtual std::unique\_ptr&lt;[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObject12DynamicEntryEv> "LIEF::ELF::DynamicSharedObject::DynamicEntry")&gt; clone() const override

#### [` name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF19DynamicSharedObject4nameEv>)

inline std::string\_view name() const

The actual name (e.g. `libMyLib.so`).

#### [` name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObject4nameENSt6stringE>)

inline void name(std::string name)

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF19DynamicSharedObject6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF19DynamicSharedObject5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` ~DynamicSharedObject `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObjectD0Ev>)

~DynamicSharedObject() override = default

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObject12DynamicEntryEv>)

DynamicEntry() = default

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObject12DynamicEntryERKN7details9Elf64_DynE4ARCH>)

DynamicEntry(const details::Elf64\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObject12DynamicEntryERKN7details9Elf32_DynE4ARCH>)

DynamicEntry(const details::Elf32\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObject12DynamicEntryE3TAG8uint64_t>)

inline DynamicEntry(TAG tag, uint64\_t value)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObject12DynamicEntryERK12DynamicEntry>)

DynamicEntry(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObject12DynamicEntryERK12DynamicEntry> "LIEF::ELF::DynamicSharedObject::DynamicEntry")&amp;) = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObject7classofEPK12DynamicEntry>)

static inline bool classof(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicSharedObject12DynamicEntryEv> "LIEF::ELF::DynamicSharedObject::DynamicEntry") \*entry)

---

## [Dynamic Entry Run Path](<https://lief.re/doc/latest/formats/elf/cpp.html#dynamic-entry-run-path>)

### [` DynamicEntryRunPath `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPathE>)

class DynamicEntryRunPath : public LIEF::ELF::[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")

Class that represents a `DT_RUNPATH` which is used by the loader to resolve libraries ([DynamicEntryLibrary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntryLibrary>)).

Public Functions

#### [` DynamicEntryRunPath `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath19DynamicEntryRunPathEv>)

inline DynamicEntryRunPath()

#### [` DynamicEntryRunPath `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath19DynamicEntryRunPathENSt6stringE>)

inline DynamicEntryRunPath(std::string runpath)

Constructor from (run)path.

#### [` DynamicEntryRunPath `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath19DynamicEntryRunPathERKNSt6vectorINSt6stringEEE>)

inline DynamicEntryRunPath(const std::vector&lt;std::string&gt; &amp;paths)

Constructor from a list of paths.

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPathaSERK19DynamicEntryRunPath>)

[DynamicEntryRunPath](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPathE> "LIEF::ELF::DynamicEntryRunPath") &amp;operator=(const [DynamicEntryRunPath](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPathE> "LIEF::ELF::DynamicEntryRunPath")&amp;) = default

#### [` DynamicEntryRunPath `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath19DynamicEntryRunPathERK19DynamicEntryRunPath>)

DynamicEntryRunPath(const [DynamicEntryRunPath](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath19DynamicEntryRunPathERK19DynamicEntryRunPath> "LIEF::ELF::DynamicEntryRunPath::DynamicEntryRunPath")&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF19DynamicEntryRunPath5cloneEv>)

inline virtual std::unique\_ptr&lt;[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath12DynamicEntryEv> "LIEF::ELF::DynamicEntryRunPath::DynamicEntry")&gt; clone() const override

#### [` runpath `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF19DynamicEntryRunPath7runpathEv>)

inline std::string\_view runpath() const

Runpath raw value.

#### [` runpath `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath7runpathENSt6stringE>)

inline void runpath(std::string runpath)

#### [` paths `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF19DynamicEntryRunPath5pathsEv>)

std::vector&lt;std::string&gt; paths() const

Paths as a list.

#### [` paths `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath5pathsERKNSt6vectorINSt6stringEEE>)

void paths(const std::vector&lt;std::string&gt; &amp;paths)

#### [` insert `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath6insertE6size_tRKNSt6stringE>)

[DynamicEntryRunPath](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPathE> "LIEF::ELF::DynamicEntryRunPath") &amp;insert(size\_t pos, const std::string &amp;path)

Insert a `path` at the given `position`.

#### [` append `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath6appendERKNSt6stringE>)

[DynamicEntryRunPath](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPathE> "LIEF::ELF::DynamicEntryRunPath") &amp;append(const std::string &amp;path)

Append the given `path`.

#### [` remove `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath6removeERKNSt6stringE>)

[DynamicEntryRunPath](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPathE> "LIEF::ELF::DynamicEntryRunPath") &amp;remove(const std::string &amp;path)

Remove the given `path`.

#### [` operator+= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPathpLERKNSt6stringE>)

inline [DynamicEntryRunPath](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPathE> "LIEF::ELF::DynamicEntryRunPath") &amp;operator+=(const std::string &amp;path)

#### [` operator-= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPathmIERKNSt6stringE>)

inline [DynamicEntryRunPath](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPathE> "LIEF::ELF::DynamicEntryRunPath") &amp;operator-=(const std::string &amp;path)

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF19DynamicEntryRunPath6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF19DynamicEntryRunPath5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` ~DynamicEntryRunPath `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPathD0Ev>)

~DynamicEntryRunPath() override = default

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath12DynamicEntryEv>)

DynamicEntry() = default

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath12DynamicEntryERKN7details9Elf64_DynE4ARCH>)

DynamicEntry(const details::Elf64\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath12DynamicEntryERKN7details9Elf32_DynE4ARCH>)

DynamicEntry(const details::Elf32\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath12DynamicEntryE3TAG8uint64_t>)

inline DynamicEntry(TAG tag, uint64\_t value)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath12DynamicEntryERK12DynamicEntry>)

DynamicEntry(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath12DynamicEntryERK12DynamicEntry> "LIEF::ELF::DynamicEntryRunPath::DynamicEntry")&amp;) = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath7classofEPK12DynamicEntry>)

static inline bool classof(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath12DynamicEntryEv> "LIEF::ELF::DynamicEntryRunPath::DynamicEntry") \*entry)

Public Static Attributes

#### [` delimiter `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF19DynamicEntryRunPath9delimiterE>)

static char delimiter = ':'

---

## [Dynamic Entry RPath](<https://lief.re/doc/latest/formats/elf/cpp.html#dynamic-entry-rpath>)

### [` DynamicEntryRpath `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpathE>)

class DynamicEntryRpath : public LIEF::ELF::[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")

Class which represents a `DT_RPATH` entry. This attribute is deprecated (cf. `man ld`) in favor of `DT_RUNPATH` (See [DynamicEntryRunPath](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntryRunPath>)).

Public Functions

#### [` DynamicEntryRpath `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath17DynamicEntryRpathEv>)

inline DynamicEntryRpath()

#### [` DynamicEntryRpath `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath17DynamicEntryRpathENSt6stringE>)

inline DynamicEntryRpath(std::string rpath)

#### [` DynamicEntryRpath `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath17DynamicEntryRpathERKNSt6vectorINSt6stringEEE>)

inline DynamicEntryRpath(const std::vector&lt;std::string&gt; &amp;paths)

Constructor from a list of paths.

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpathaSERK17DynamicEntryRpath>)

[DynamicEntryRpath](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpathE> "LIEF::ELF::DynamicEntryRpath") &amp;operator=(const [DynamicEntryRpath](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpathE> "LIEF::ELF::DynamicEntryRpath")&amp;) = default

#### [` DynamicEntryRpath `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath17DynamicEntryRpathERK17DynamicEntryRpath>)

DynamicEntryRpath(const [DynamicEntryRpath](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath17DynamicEntryRpathERK17DynamicEntryRpath> "LIEF::ELF::DynamicEntryRpath::DynamicEntryRpath")&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryRpath5cloneEv>)

inline virtual std::unique\_ptr&lt;[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath12DynamicEntryEv> "LIEF::ELF::DynamicEntryRpath::DynamicEntry")&gt; clone() const override

#### [` rpath `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryRpath5rpathEv>)

inline std::string\_view rpath() const

The actual rpath as a string.

#### [` rpath `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath5rpathENSt6stringE>)

inline void rpath(std::string name)

#### [` paths `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryRpath5pathsEv>)

std::vector&lt;std::string&gt; paths() const

Paths as a list.

#### [` paths `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath5pathsERKNSt6vectorINSt6stringEEE>)

void paths(const std::vector&lt;std::string&gt; &amp;paths)

#### [` insert `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath6insertE6size_tRKNSt6stringE>)

[DynamicEntryRpath](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpathE> "LIEF::ELF::DynamicEntryRpath") &amp;insert(size\_t pos, const std::string &amp;path)

Insert a `path` at the given `position`.

#### [` append `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath6appendENSt6stringE>)

[DynamicEntryRpath](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpathE> "LIEF::ELF::DynamicEntryRpath") &amp;append(std::string path)

Append the given `path`.

#### [` remove `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath6removeERKNSt6stringE>)

[DynamicEntryRpath](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpathE> "LIEF::ELF::DynamicEntryRpath") &amp;remove(const std::string &amp;path)

Remove the given `path`.

#### [` operator+= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpathpLENSt6stringE>)

inline [DynamicEntryRpath](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpathE> "LIEF::ELF::DynamicEntryRpath") &amp;operator+=(std::string path)

#### [` operator-= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpathmIERKNSt6stringE>)

inline [DynamicEntryRpath](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpathE> "LIEF::ELF::DynamicEntryRpath") &amp;operator-=(const std::string &amp;path)

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryRpath6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryRpath5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` ~DynamicEntryRpath `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpathD0Ev>)

~DynamicEntryRpath() override = default

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath12DynamicEntryEv>)

DynamicEntry() = default

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath12DynamicEntryERKN7details9Elf64_DynE4ARCH>)

DynamicEntry(const details::Elf64\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath12DynamicEntryERKN7details9Elf32_DynE4ARCH>)

DynamicEntry(const details::Elf32\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath12DynamicEntryE3TAG8uint64_t>)

inline DynamicEntry(TAG tag, uint64\_t value)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath12DynamicEntryERK12DynamicEntry>)

DynamicEntry(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath12DynamicEntryERK12DynamicEntry> "LIEF::ELF::DynamicEntryRpath::DynamicEntry")&amp;) = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath7classofEPK12DynamicEntry>)

static inline bool classof(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath12DynamicEntryEv> "LIEF::ELF::DynamicEntryRpath::DynamicEntry") \*entry)

Public Static Attributes

#### [` delimiter `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryRpath9delimiterE>)

static char delimiter = ':'

---

## [Dynamic Entry Array](<https://lief.re/doc/latest/formats/elf/cpp.html#dynamic-entry-array>)

### [` DynamicEntryArray `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArrayE>)

class DynamicEntryArray : public LIEF::ELF::[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")

Class that represent an Array in the dynamic table. This entry is associated with constructors:

- `DT_PREINIT_ARRAY`
- `DT_INIT_ARRAY`
- `DT_FINI_ARRAY`

The underlying values are 64-bits integers to cover both: ELF32 and ELF64 binaries.

Public Types

#### [` array_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray7array_tE>)

using array\_t = std::vector&lt;uint64\_t&gt;

Public Functions

#### [` DynamicEntryArray `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray17DynamicEntryArrayEv>)

DynamicEntryArray() = delete

#### [` DynamicEntryArray `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray17DynamicEntryArrayEN12DynamicEntry3TAGE7array_t>)

inline DynamicEntryArray([DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray12DynamicEntryEv> "LIEF::ELF::DynamicEntryArray::DynamicEntry")::TAG tag, [array\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray7array_tE> "LIEF::ELF::DynamicEntryArray::array_t") array)

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArrayaSERK17DynamicEntryArray>)

[DynamicEntryArray](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArrayE> "LIEF::ELF::DynamicEntryArray") &amp;operator=(const [DynamicEntryArray](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArrayE> "LIEF::ELF::DynamicEntryArray")&amp;) = default

#### [` DynamicEntryArray `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray17DynamicEntryArrayERK17DynamicEntryArray>)

DynamicEntryArray(const [DynamicEntryArray](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray17DynamicEntryArrayERK17DynamicEntryArray> "LIEF::ELF::DynamicEntryArray::DynamicEntryArray")&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryArray5cloneEv>)

inline virtual std::unique\_ptr&lt;[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray12DynamicEntryEv> "LIEF::ELF::DynamicEntryArray::DynamicEntry")&gt; clone() const override

#### [` array `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray5arrayEv>)

inline [array\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray7array_tE> "LIEF::ELF::DynamicEntryArray::array_t") &amp;array()

Return the array values (list of pointers).

#### [` array `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryArray5arrayEv>)

inline const [array\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray7array_tE> "LIEF::ELF::DynamicEntryArray::array_t") &amp;array() const

#### [` array `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray5arrayERK7array_t>)

inline void array(const [array\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray7array_tE> "LIEF::ELF::DynamicEntryArray::array_t") &amp;array)

#### [` insert `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray6insertE6size_t8uint64_t>)

[DynamicEntryArray](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArrayE> "LIEF::ELF::DynamicEntryArray") &amp;insert(size\_t pos, uint64\_t function)

Insert the given function at `pos`.

#### [` append `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray6appendE8uint64_t>)

inline [DynamicEntryArray](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArrayE> "LIEF::ELF::DynamicEntryArray") &amp;append(uint64\_t function)

Append the given function.

#### [` remove `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray6removeE8uint64_t>)

[DynamicEntryArray](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArrayE> "LIEF::ELF::DynamicEntryArray") &amp;remove(uint64\_t function)

Remove the given function.

#### [` size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryArray4sizeEv>)

inline size\_t size() const

Number of functions registered in this array.

#### [` operator+= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArraypLE8uint64_t>)

inline [DynamicEntryArray](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArrayE> "LIEF::ELF::DynamicEntryArray") &amp;operator+=(uint64\_t value)

#### [` operator-= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArraymIE8uint64_t>)

inline [DynamicEntryArray](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArrayE> "LIEF::ELF::DynamicEntryArray") &amp;operator-=(uint64\_t value)

#### [` operator[] `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryArrayixE6size_t>)

const uint64\_t &amp;operator[](size\_t idx) const

#### [` operator[] `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArrayixE6size_t>)

uint64\_t &amp;operator[](size\_t idx)

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryArray6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryArray5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` ~DynamicEntryArray `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArrayD0Ev>)

~DynamicEntryArray() override = default

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray12DynamicEntryEv>)

DynamicEntry() = default

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray12DynamicEntryERKN7details9Elf64_DynE4ARCH>)

DynamicEntry(const details::Elf64\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray12DynamicEntryERKN7details9Elf32_DynE4ARCH>)

DynamicEntry(const details::Elf32\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray12DynamicEntryE3TAG8uint64_t>)

inline DynamicEntry(TAG tag, uint64\_t value)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray12DynamicEntryERK12DynamicEntry>)

DynamicEntry(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray12DynamicEntryERK12DynamicEntry> "LIEF::ELF::DynamicEntryArray::DynamicEntry")&amp;) = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray7classofEPK12DynamicEntry>)

static inline bool classof(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryArray12DynamicEntryEv> "LIEF::ELF::DynamicEntryArray::DynamicEntry") \*entry)

---

## [Dynamic Entry Flags](<https://lief.re/doc/latest/formats/elf/cpp.html#dynamic-entry-flags>)

### [` DynamicEntryFlags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlagsE>)

class DynamicEntryFlags : public LIEF::ELF::[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")

Public Types

#### [` FLAG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAGE>)

enum class FLAG : uint64\_t

*Values:*

##### [` ORIGIN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG6ORIGINE>)

enumerator ORIGIN = 0x00000001

The object may reference $ORIGIN.

##### [` SYMBOLIC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG8SYMBOLICE>)

enumerator SYMBOLIC = 0x00000002

Search the shared lib before searching the exe.

##### [` TEXTREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG7TEXTRELE>)

enumerator TEXTREL = 0x00000004

Relocations may modify a non-writable segment.

##### [` BIND_NOW `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG8BIND_NOWE>)

enumerator BIND\_NOW = 0x00000008

Process all relocations on load.

##### [` STATIC_TLS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG10STATIC_TLSE>)

enumerator STATIC\_TLS = 0x00000010

Reject attempts to load dynamically.

##### [` NOW `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG3NOWE>)

enumerator NOW = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000000001

Set RTLD\_NOW for this object.

##### [` GLOBAL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG6GLOBALE>)

enumerator GLOBAL = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000000002

Set RTLD\_GLOBAL for this object.

##### [` GROUP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG5GROUPE>)

enumerator GROUP = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000000004

Set RTLD\_GROUP for this object.

##### [` NODELETE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG8NODELETEE>)

enumerator NODELETE = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000000008

Set RTLD\_NODELETE for this object.

##### [` LOADFLTR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG8LOADFLTRE>)

enumerator LOADFLTR = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000000010

Trigger filtee loading at runtime.

##### [` INITFIRST `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG9INITFIRSTE>)

enumerator INITFIRST = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000000020

Set RTLD\_INITFIRST for this object.

##### [` NOOPEN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG6NOOPENE>)

enumerator NOOPEN = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000000040

Set RTLD\_NOOPEN for this object.

##### [` HANDLE_ORIGIN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG13HANDLE_ORIGINE>)

enumerator HANDLE\_ORIGIN = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000000080

$ORIGIN must be handled.

##### [` DIRECT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG6DIRECTE>)

enumerator DIRECT = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000000100

Direct binding enabled.

##### [` TRANS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG5TRANSE>)

enumerator TRANS = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000000200

##### [` INTERPOSE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG9INTERPOSEE>)

enumerator INTERPOSE = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000000400

Object is used to interpose.

##### [` NODEFLIB `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG8NODEFLIBE>)

enumerator NODEFLIB = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000000800

Ignore default lib search path.

##### [` NODUMP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG6NODUMPE>)

enumerator NODUMP = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000001000

Object can’t be dumped with dldump().

##### [` CONFALT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG7CONFALTE>)

enumerator CONFALT = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000002000

Configuration alternative created.

##### [` ENDFILTEE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG9ENDFILTEEE>)

enumerator ENDFILTEE = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000004000

Filtee terminates filters search.

##### [` DISPRELDNE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG10DISPRELDNEE>)

enumerator DISPRELDNE = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000008000

Disp reloc applied at build time.

##### [` DISPRELPND `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG10DISPRELPNDE>)

enumerator DISPRELPND = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000010000

Disp reloc applied at run-time.

##### [` NODIRECT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG8NODIRECTE>)

enumerator NODIRECT = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000020000

Object has no-direct binding.

##### [` IGNMULDEF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG9IGNMULDEFE>)

enumerator IGNMULDEF = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000040000

##### [` NOKSYMS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG7NOKSYMSE>)

enumerator NOKSYMS = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000080000

##### [` NOHDR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG5NOHDRE>)

enumerator NOHDR = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000100000

##### [` EDITED `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG6EDITEDE>)

enumerator EDITED = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000200000

Object is modified after built.

##### [` NORELOC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG7NORELOCE>)

enumerator NORELOC = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000400000

##### [` SYMINTPOSE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG10SYMINTPOSEE>)

enumerator SYMINTPOSE = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x000800000

Object has individual interposers.

##### [` GLOBAUDIT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG9GLOBAUDITE>)

enumerator GLOBAUDIT = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x001000000

Global auditing required.

##### [` SINGLETON `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG9SINGLETONE>)

enumerator SINGLETON = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x002000000

Singleton symbols are used.

##### [` PIE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG3PIEE>)

enumerator PIE = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x008000000

Singleton symbols are used.

##### [` KMOD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG4KMODE>)

enumerator KMOD = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x010000000

##### [` WEAKFILTER `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG10WEAKFILTERE>)

enumerator WEAKFILTER = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x020000000

##### [` NOCOMMON `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAG8NOCOMMONE>)

enumerator NOCOMMON = [BASE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE> "LIEF::ELF::DynamicEntryFlags::BASE") + 0x040000000

#### [` flags_list_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags12flags_list_tE>)

using flags\_list\_t = std::vector&lt;[FLAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAGE> "LIEF::ELF::DynamicEntryFlags::FLAG")&gt;

Public Functions

#### [` DynamicEntryFlags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags17DynamicEntryFlagsEv>)

DynamicEntryFlags() = delete

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlagsaSERK17DynamicEntryFlags>)

[DynamicEntryFlags](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlagsE> "LIEF::ELF::DynamicEntryFlags") &amp;operator=(const [DynamicEntryFlags](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlagsE> "LIEF::ELF::DynamicEntryFlags")&amp;) = default

#### [` DynamicEntryFlags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags17DynamicEntryFlagsERK17DynamicEntryFlags>)

DynamicEntryFlags(const [DynamicEntryFlags](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags17DynamicEntryFlagsERK17DynamicEntryFlags> "LIEF::ELF::DynamicEntryFlags::DynamicEntryFlags")&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryFlags5cloneEv>)

inline virtual std::unique\_ptr&lt;[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags12DynamicEntryEv> "LIEF::ELF::DynamicEntryFlags::DynamicEntry")&gt; clone() const override

#### [` has `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryFlags3hasE4FLAG>)

bool has([FLAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAGE> "LIEF::ELF::DynamicEntryFlags::FLAG") f) const

If the current entry has the given [FLAG](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntryFlags_1a0e2862ed5a6e37716192fd60b7356e0d>).

#### [` flags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryFlags5flagsEv>)

[flags\_list\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags12flags_list_tE> "LIEF::ELF::DynamicEntryFlags::flags_list_t") flags() const

Return flags as a list of integers.

#### [` raw_flags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryFlags9raw_flagsEv>)

inline uint64\_t raw\_flags() const

#### [` add `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags3addE4FLAG>)

void add([FLAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAGE> "LIEF::ELF::DynamicEntryFlags::FLAG") f)

Add the given [FLAG](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntryFlags_1a0e2862ed5a6e37716192fd60b7356e0d>).

#### [` remove `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags6removeE4FLAG>)

void remove([FLAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAGE> "LIEF::ELF::DynamicEntryFlags::FLAG") f)

Remove the given [FLAG](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1DynamicEntryFlags_1a0e2862ed5a6e37716192fd60b7356e0d>).

#### [` operator+= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlagspLE4FLAG>)

inline [DynamicEntryFlags](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlagsE> "LIEF::ELF::DynamicEntryFlags") &amp;operator+=([FLAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAGE> "LIEF::ELF::DynamicEntryFlags::FLAG") f)

#### [` operator-= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlagsmIE4FLAG>)

inline [DynamicEntryFlags](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlagsE> "LIEF::ELF::DynamicEntryFlags") &amp;operator-=([FLAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4FLAGE> "LIEF::ELF::DynamicEntryFlags::FLAG") f)

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryFlags6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~DynamicEntryFlags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlagsD0Ev>)

~DynamicEntryFlags() override = default

#### [` print `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF17DynamicEntryFlags5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags12DynamicEntryEv>)

DynamicEntry() = default

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags12DynamicEntryERKN7details9Elf64_DynE4ARCH>)

DynamicEntry(const details::Elf64\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags12DynamicEntryERKN7details9Elf32_DynE4ARCH>)

DynamicEntry(const details::Elf32\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags12DynamicEntryE3TAG8uint64_t>)

inline DynamicEntry(TAG tag, uint64\_t value)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags12DynamicEntryERK12DynamicEntry>)

DynamicEntry(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags12DynamicEntryERK12DynamicEntry> "LIEF::ELF::DynamicEntryFlags::DynamicEntry")&amp;) = default

Public Static Functions

#### [` create_dt_flag `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags14create_dt_flagE8uint64_t>)

static inline [DynamicEntryFlags](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlagsE> "LIEF::ELF::DynamicEntryFlags") create\_dt\_flag(uint64\_t value)

#### [` create_dt_flag_1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags16create_dt_flag_1E8uint64_t>)

static inline [DynamicEntryFlags](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlagsE> "LIEF::ELF::DynamicEntryFlags") create\_dt\_flag\_1(uint64\_t value)

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags7classofEPK12DynamicEntry>)

static inline bool classof(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags12DynamicEntryEv> "LIEF::ELF::DynamicEntryFlags::DynamicEntry") \*entry)

Public Static Attributes

#### [` BASE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF17DynamicEntryFlags4BASEE>)

static uint64\_t BASE = 0x100000000

---

## [Dynamic Entry Auxiliary](<https://lief.re/doc/latest/formats/elf/cpp.html#dynamic-entry-auxiliary>)

### [` DynamicEntryAuxiliary `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliaryE>)

class DynamicEntryAuxiliary : public LIEF::ELF::[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")

Class which represents a `DT_AUXILIARY` entry in the dynamic table This kind of entry is used to specify a shared object that should be loaded before the current one.

Public Functions

#### [` DynamicEntryAuxiliary `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliary21DynamicEntryAuxiliaryEv>)

inline DynamicEntryAuxiliary()

#### [` DynamicEntryAuxiliary `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliary21DynamicEntryAuxiliaryENSt6stringE>)

inline DynamicEntryAuxiliary(std::string name)

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliaryaSERK21DynamicEntryAuxiliary>)

[DynamicEntryAuxiliary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliaryE> "LIEF::ELF::DynamicEntryAuxiliary") &amp;operator=(const [DynamicEntryAuxiliary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliaryE> "LIEF::ELF::DynamicEntryAuxiliary")&amp;) = default

#### [` DynamicEntryAuxiliary `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliary21DynamicEntryAuxiliaryERK21DynamicEntryAuxiliary>)

DynamicEntryAuxiliary(const [DynamicEntryAuxiliary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliary21DynamicEntryAuxiliaryERK21DynamicEntryAuxiliary> "LIEF::ELF::DynamicEntryAuxiliary::DynamicEntryAuxiliary")&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF21DynamicEntryAuxiliary5cloneEv>)

inline virtual std::unique\_ptr&lt;[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliary12DynamicEntryEv> "LIEF::ELF::DynamicEntryAuxiliary::DynamicEntry")&gt; clone() const override

#### [` name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF21DynamicEntryAuxiliary4nameEv>)

inline std::string\_view name() const

The actual name (e.g. `libaux.so`).

#### [` name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliary4nameENSt6stringE>)

inline void name(std::string name)

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF21DynamicEntryAuxiliary6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF21DynamicEntryAuxiliary5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` ~DynamicEntryAuxiliary `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliaryD0Ev>)

~DynamicEntryAuxiliary() override = default

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliary12DynamicEntryEv>)

DynamicEntry() = default

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliary12DynamicEntryERKN7details9Elf64_DynE4ARCH>)

DynamicEntry(const details::Elf64\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliary12DynamicEntryERKN7details9Elf32_DynE4ARCH>)

DynamicEntry(const details::Elf32\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliary12DynamicEntryE3TAG8uint64_t>)

inline DynamicEntry(TAG tag, uint64\_t value)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliary12DynamicEntryERK12DynamicEntry>)

DynamicEntry(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliary12DynamicEntryERK12DynamicEntry> "LIEF::ELF::DynamicEntryAuxiliary::DynamicEntry")&amp;) = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliary7classofEPK12DynamicEntry>)

static inline bool classof(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21DynamicEntryAuxiliary12DynamicEntryEv> "LIEF::ELF::DynamicEntryAuxiliary::DynamicEntry") \*entry)

---

## [Dynamic Entry Filter](<https://lief.re/doc/latest/formats/elf/cpp.html#dynamic-entry-filter>)

### [` DynamicEntryFilter `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilterE>)

class DynamicEntryFilter : public LIEF::ELF::[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12DynamicEntryE> "LIEF::ELF::DynamicEntry")

Class which represents a `DT_FILTER` entry in the dynamic table This kind of entry is used to specify a shared object for which the current one is a filter.

Public Functions

#### [` DynamicEntryFilter `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilter18DynamicEntryFilterEv>)

inline DynamicEntryFilter()

#### [` DynamicEntryFilter `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilter18DynamicEntryFilterENSt6stringE>)

inline DynamicEntryFilter(std::string name)

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilteraSERK18DynamicEntryFilter>)

[DynamicEntryFilter](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilterE> "LIEF::ELF::DynamicEntryFilter") &amp;operator=(const [DynamicEntryFilter](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilterE> "LIEF::ELF::DynamicEntryFilter")&amp;) = default

#### [` DynamicEntryFilter `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilter18DynamicEntryFilterERK18DynamicEntryFilter>)

DynamicEntryFilter(const [DynamicEntryFilter](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilter18DynamicEntryFilterERK18DynamicEntryFilter> "LIEF::ELF::DynamicEntryFilter::DynamicEntryFilter")&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF18DynamicEntryFilter5cloneEv>)

inline virtual std::unique\_ptr&lt;[DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilter12DynamicEntryEv> "LIEF::ELF::DynamicEntryFilter::DynamicEntry")&gt; clone() const override

#### [` name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF18DynamicEntryFilter4nameEv>)

inline std::string\_view name() const

The actual name (e.g. `libfilter.so`).

#### [` name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilter4nameENSt6stringE>)

inline void name(std::string name)

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF18DynamicEntryFilter6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF18DynamicEntryFilter5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` ~DynamicEntryFilter `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilterD0Ev>)

~DynamicEntryFilter() override = default

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilter12DynamicEntryEv>)

DynamicEntry() = default

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilter12DynamicEntryERKN7details9Elf64_DynE4ARCH>)

DynamicEntry(const details::Elf64\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilter12DynamicEntryERKN7details9Elf32_DynE4ARCH>)

DynamicEntry(const details::Elf32\_Dyn &amp;header, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilter12DynamicEntryE3TAG8uint64_t>)

inline DynamicEntry(TAG tag, uint64\_t value)

#### [` DynamicEntry `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilter12DynamicEntryERK12DynamicEntry>)

DynamicEntry(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilter12DynamicEntryERK12DynamicEntry> "LIEF::ELF::DynamicEntryFilter::DynamicEntry")&amp;) = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilter7classofEPK12DynamicEntry>)

static inline bool classof(const [DynamicEntry](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF18DynamicEntryFilter12DynamicEntryEv> "LIEF::ELF::DynamicEntryFilter::DynamicEntry") \*entry)

---

## [Relocations](<https://lief.re/doc/latest/formats/elf/cpp.html#relocations>)

### [` Relocation `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE>)

class Relocation : public LIEF::[Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10RelocationE> "LIEF::Relocation")

Class that represents an ELF relocation.

Public Types

#### [` PURPOSE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7PURPOSEE>)

enum class PURPOSE

The *purpose* of a relocation defines how this relocation is used by the loader.

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7PURPOSE4NONEE>)

enumerator NONE = 0

##### [` PLTGOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7PURPOSE6PLTGOTE>)

enumerator PLTGOT

The relocation is associated with the PLT/GOT resolution.

##### [` DYNAMIC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7PURPOSE7DYNAMICE>)

enumerator DYNAMIC

The relocation is used for regular data/code relocation.

##### [` OBJECT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7PURPOSE6OBJECTE>)

enumerator OBJECT

The relocation is used in an object file.

#### [` ENCODING `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation8ENCODINGE>)

enum class ENCODING

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation8ENCODING7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` REL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation8ENCODING3RELE>)

enumerator REL

The relocation is using the regular Elf\_Rel structure.

##### [` RELA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation8ENCODING4RELAE>)

enumerator RELA

The relocation is using the regular Elf\_Rela structure.

##### [` RELR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation8ENCODING4RELRE>)

enumerator RELR

The relocation is using the relative relocation format.

##### [` ANDROID_SLEB `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation8ENCODING12ANDROID_SLEBE>)

enumerator ANDROID\_SLEB

The relocation is using the packed Android-SLEB128 format.

#### [` TYPE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPEE>)

enum class TYPE : uint32\_t

The different types of the relocation.

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7UNKNOWNE>)

enumerator UNKNOWN = uint32\_t(-1)

##### [` X86_64_NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11X86_64_NONEE>)

enumerator X86\_64\_NONE = (0 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9X86_64_64E>)

enumerator X86\_64\_64 = (1 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_PC32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11X86_64_PC32E>)

enumerator X86\_64\_PC32 = (2 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_GOT32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12X86_64_GOT32E>)

enumerator X86\_64\_GOT32 = (3 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_PLT32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12X86_64_PLT32E>)

enumerator X86\_64\_PLT32 = (4 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_COPY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11X86_64_COPYE>)

enumerator X86\_64\_COPY = (5 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15X86_64_GLOB_DATE>)

enumerator X86\_64\_GLOB\_DAT = (6 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_JUMP_SLOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16X86_64_JUMP_SLOTE>)

enumerator X86\_64\_JUMP\_SLOT = (7 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_RELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15X86_64_RELATIVEE>)

enumerator X86\_64\_RELATIVE = (8 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_GOTPCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15X86_64_GOTPCRELE>)

enumerator X86\_64\_GOTPCREL = (9 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9X86_64_32E>)

enumerator X86\_64\_32 = (10 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_32S `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10X86_64_32SE>)

enumerator X86\_64\_32S = (11 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9X86_64_16E>)

enumerator X86\_64\_16 = (12 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_PC16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11X86_64_PC16E>)

enumerator X86\_64\_PC16 = (13 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8X86_64_8E>)

enumerator X86\_64\_8 = (14 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_PC8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10X86_64_PC8E>)

enumerator X86\_64\_PC8 = (15 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_DTPMOD64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15X86_64_DTPMOD64E>)

enumerator X86\_64\_DTPMOD64 = (16 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_DTPOFF64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15X86_64_DTPOFF64E>)

enumerator X86\_64\_DTPOFF64 = (17 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_TPOFF64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14X86_64_TPOFF64E>)

enumerator X86\_64\_TPOFF64 = (18 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_TLSGD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12X86_64_TLSGDE>)

enumerator X86\_64\_TLSGD = (19 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_TLSLD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12X86_64_TLSLDE>)

enumerator X86\_64\_TLSLD = (20 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_DTPOFF32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15X86_64_DTPOFF32E>)

enumerator X86\_64\_DTPOFF32 = (21 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_GOTTPOFF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15X86_64_GOTTPOFFE>)

enumerator X86\_64\_GOTTPOFF = (22 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_TPOFF32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14X86_64_TPOFF32E>)

enumerator X86\_64\_TPOFF32 = (23 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_PC64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11X86_64_PC64E>)

enumerator X86\_64\_PC64 = (24 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_GOTOFF64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15X86_64_GOTOFF64E>)

enumerator X86\_64\_GOTOFF64 = (25 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_GOTPC32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14X86_64_GOTPC32E>)

enumerator X86\_64\_GOTPC32 = (26 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_GOT64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12X86_64_GOT64E>)

enumerator X86\_64\_GOT64 = (27 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_GOTPCREL64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17X86_64_GOTPCREL64E>)

enumerator X86\_64\_GOTPCREL64 = (28 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_GOTPC64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14X86_64_GOTPC64E>)

enumerator X86\_64\_GOTPC64 = (29 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_GOTPLT64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15X86_64_GOTPLT64E>)

enumerator X86\_64\_GOTPLT64 = (30 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_PLTOFF64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15X86_64_PLTOFF64E>)

enumerator X86\_64\_PLTOFF64 = (31 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_SIZE32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13X86_64_SIZE32E>)

enumerator X86\_64\_SIZE32 = (32 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_SIZE64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13X86_64_SIZE64E>)

enumerator X86\_64\_SIZE64 = (33 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_GOTPC32_TLSDESC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22X86_64_GOTPC32_TLSDESCE>)

enumerator X86\_64\_GOTPC32\_TLSDESC = (34 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_TLSDESC_CALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19X86_64_TLSDESC_CALLE>)

enumerator X86\_64\_TLSDESC\_CALL = (35 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_TLSDESC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14X86_64_TLSDESCE>)

enumerator X86\_64\_TLSDESC = (36 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_IRELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16X86_64_IRELATIVEE>)

enumerator X86\_64\_IRELATIVE = (37 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_RELATIVE64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17X86_64_RELATIVE64E>)

enumerator X86\_64\_RELATIVE64 = (38 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_PC32_BND `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15X86_64_PC32_BNDE>)

enumerator X86\_64\_PC32\_BND = (39 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_PLT32_BND `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16X86_64_PLT32_BNDE>)

enumerator X86\_64\_PLT32\_BND = (40 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_GOTPCRELX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16X86_64_GOTPCRELXE>)

enumerator X86\_64\_GOTPCRELX = (41 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` X86_64_REX_GOTPCRELX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20X86_64_REX_GOTPCRELXE>)

enumerator X86\_64\_REX\_GOTPCRELX = (42 | [R\_X64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E> "LIEF::ELF::Relocation::R_X64"))

##### [` AARCH64_NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12AARCH64_NONEE>)

enumerator AARCH64\_NONE = (0 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_ABS64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13AARCH64_ABS64E>)

enumerator AARCH64\_ABS64 = (0x101 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_ABS32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13AARCH64_ABS32E>)

enumerator AARCH64\_ABS32 = (0x102 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_ABS16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13AARCH64_ABS16E>)

enumerator AARCH64\_ABS16 = (0x103 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_PREL64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14AARCH64_PREL64E>)

enumerator AARCH64\_PREL64 = (0x104 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_PREL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14AARCH64_PREL32E>)

enumerator AARCH64\_PREL32 = (0x105 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_PREL16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14AARCH64_PREL16E>)

enumerator AARCH64\_PREL16 = (0x106 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_UABS_G0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20AARCH64_MOVW_UABS_G0E>)

enumerator AARCH64\_MOVW\_UABS\_G0 = (0x107 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_UABS_G0_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE23AARCH64_MOVW_UABS_G0_NCE>)

enumerator AARCH64\_MOVW\_UABS\_G0\_NC = (0x108 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_UABS_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20AARCH64_MOVW_UABS_G1E>)

enumerator AARCH64\_MOVW\_UABS\_G1 = (0x109 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_UABS_G1_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE23AARCH64_MOVW_UABS_G1_NCE>)

enumerator AARCH64\_MOVW\_UABS\_G1\_NC = (0x10a | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_UABS_G2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20AARCH64_MOVW_UABS_G2E>)

enumerator AARCH64\_MOVW\_UABS\_G2 = (0x10b | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_UABS_G2_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE23AARCH64_MOVW_UABS_G2_NCE>)

enumerator AARCH64\_MOVW\_UABS\_G2\_NC = (0x10c | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_UABS_G3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20AARCH64_MOVW_UABS_G3E>)

enumerator AARCH64\_MOVW\_UABS\_G3 = (0x10d | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_SABS_G0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20AARCH64_MOVW_SABS_G0E>)

enumerator AARCH64\_MOVW\_SABS\_G0 = (0x10e | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_SABS_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20AARCH64_MOVW_SABS_G1E>)

enumerator AARCH64\_MOVW\_SABS\_G1 = (0x10f | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_SABS_G2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20AARCH64_MOVW_SABS_G2E>)

enumerator AARCH64\_MOVW\_SABS\_G2 = (0x110 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_LD_PREL_LO19 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20AARCH64_LD_PREL_LO19E>)

enumerator AARCH64\_LD\_PREL\_LO19 = (0x111 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_ADR_PREL_LO21 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21AARCH64_ADR_PREL_LO21E>)

enumerator AARCH64\_ADR\_PREL\_LO21 = (0x112 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_ADR_PREL_PG_HI21 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24AARCH64_ADR_PREL_PG_HI21E>)

enumerator AARCH64\_ADR\_PREL\_PG\_HI21 = (0x113 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_ADR_PREL_PG_HI21_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE27AARCH64_ADR_PREL_PG_HI21_NCE>)

enumerator AARCH64\_ADR\_PREL\_PG\_HI21\_NC = (0x114 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_ADD_ABS_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE23AARCH64_ADD_ABS_LO12_NCE>)

enumerator AARCH64\_ADD\_ABS\_LO12\_NC = (0x115 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_LDST8_ABS_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE25AARCH64_LDST8_ABS_LO12_NCE>)

enumerator AARCH64\_LDST8\_ABS\_LO12\_NC = (0x116 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TSTBR14 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15AARCH64_TSTBR14E>)

enumerator AARCH64\_TSTBR14 = (0x117 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_CONDBR19 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16AARCH64_CONDBR19E>)

enumerator AARCH64\_CONDBR19 = (0x118 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_JUMP26 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14AARCH64_JUMP26E>)

enumerator AARCH64\_JUMP26 = (0x11a | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_CALL26 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14AARCH64_CALL26E>)

enumerator AARCH64\_CALL26 = (0x11b | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_LDST16_ABS_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE26AARCH64_LDST16_ABS_LO12_NCE>)

enumerator AARCH64\_LDST16\_ABS\_LO12\_NC = (0x11c | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_LDST32_ABS_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE26AARCH64_LDST32_ABS_LO12_NCE>)

enumerator AARCH64\_LDST32\_ABS\_LO12\_NC = (0x11d | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_LDST64_ABS_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE26AARCH64_LDST64_ABS_LO12_NCE>)

enumerator AARCH64\_LDST64\_ABS\_LO12\_NC = (0x11e | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_PREL_G0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20AARCH64_MOVW_PREL_G0E>)

enumerator AARCH64\_MOVW\_PREL\_G0 = (0x11f | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_PREL_G0_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE23AARCH64_MOVW_PREL_G0_NCE>)

enumerator AARCH64\_MOVW\_PREL\_G0\_NC = (0x120 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_PREL_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20AARCH64_MOVW_PREL_G1E>)

enumerator AARCH64\_MOVW\_PREL\_G1 = (0x121 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_PREL_G1_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE23AARCH64_MOVW_PREL_G1_NCE>)

enumerator AARCH64\_MOVW\_PREL\_G1\_NC = (0x122 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_PREL_G2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20AARCH64_MOVW_PREL_G2E>)

enumerator AARCH64\_MOVW\_PREL\_G2 = (0x123 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_PREL_G2_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE23AARCH64_MOVW_PREL_G2_NCE>)

enumerator AARCH64\_MOVW\_PREL\_G2\_NC = (0x124 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_PREL_G3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20AARCH64_MOVW_PREL_G3E>)

enumerator AARCH64\_MOVW\_PREL\_G3 = (0x125 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_LDST128_ABS_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE27AARCH64_LDST128_ABS_LO12_NCE>)

enumerator AARCH64\_LDST128\_ABS\_LO12\_NC = (0x12b | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_GOTOFF_G0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22AARCH64_MOVW_GOTOFF_G0E>)

enumerator AARCH64\_MOVW\_GOTOFF\_G0 = (0x12c | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_GOTOFF_G0_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE25AARCH64_MOVW_GOTOFF_G0_NCE>)

enumerator AARCH64\_MOVW\_GOTOFF\_G0\_NC = (0x12d | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_GOTOFF_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22AARCH64_MOVW_GOTOFF_G1E>)

enumerator AARCH64\_MOVW\_GOTOFF\_G1 = (0x12e | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_GOTOFF_G1_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE25AARCH64_MOVW_GOTOFF_G1_NCE>)

enumerator AARCH64\_MOVW\_GOTOFF\_G1\_NC = (0x12f | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_GOTOFF_G2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22AARCH64_MOVW_GOTOFF_G2E>)

enumerator AARCH64\_MOVW\_GOTOFF\_G2 = (0x130 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_GOTOFF_G2_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE25AARCH64_MOVW_GOTOFF_G2_NCE>)

enumerator AARCH64\_MOVW\_GOTOFF\_G2\_NC = (0x131 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_MOVW_GOTOFF_G3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22AARCH64_MOVW_GOTOFF_G3E>)

enumerator AARCH64\_MOVW\_GOTOFF\_G3 = (0x132 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_GOTREL64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16AARCH64_GOTREL64E>)

enumerator AARCH64\_GOTREL64 = (0x133 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_GOTREL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16AARCH64_GOTREL32E>)

enumerator AARCH64\_GOTREL32 = (0x134 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_GOT_LD_PREL19 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21AARCH64_GOT_LD_PREL19E>)

enumerator AARCH64\_GOT\_LD\_PREL19 = (0x135 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_LD64_GOTOFF_LO15 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24AARCH64_LD64_GOTOFF_LO15E>)

enumerator AARCH64\_LD64\_GOTOFF\_LO15 = (0x136 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_ADR_GOT_PAGE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20AARCH64_ADR_GOT_PAGEE>)

enumerator AARCH64\_ADR\_GOT\_PAGE = (0x137 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_LD64_GOT_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24AARCH64_LD64_GOT_LO12_NCE>)

enumerator AARCH64\_LD64\_GOT\_LO12\_NC = (0x138 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_LD64_GOTPAGE_LO15 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE25AARCH64_LD64_GOTPAGE_LO15E>)

enumerator AARCH64\_LD64\_GOTPAGE\_LO15 = (0x139 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSGD_ADR_PREL21 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24AARCH64_TLSGD_ADR_PREL21E>)

enumerator AARCH64\_TLSGD\_ADR\_PREL21 = (0x200 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSGD_ADR_PAGE21 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24AARCH64_TLSGD_ADR_PAGE21E>)

enumerator AARCH64\_TLSGD\_ADR\_PAGE21 = (0x201 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSGD_ADD_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE25AARCH64_TLSGD_ADD_LO12_NCE>)

enumerator AARCH64\_TLSGD\_ADD\_LO12\_NC = (0x202 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSGD_MOVW_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21AARCH64_TLSGD_MOVW_G1E>)

enumerator AARCH64\_TLSGD\_MOVW\_G1 = (0x203 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSGD_MOVW_G0_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24AARCH64_TLSGD_MOVW_G0_NCE>)

enumerator AARCH64\_TLSGD\_MOVW\_G0\_NC = (0x204 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_ADR_PREL21 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24AARCH64_TLSLD_ADR_PREL21E>)

enumerator AARCH64\_TLSLD\_ADR\_PREL21 = (0x205 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_ADR_PAGE21 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24AARCH64_TLSLD_ADR_PAGE21E>)

enumerator AARCH64\_TLSLD\_ADR\_PAGE21 = (0x206 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_ADD_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE25AARCH64_TLSLD_ADD_LO12_NCE>)

enumerator AARCH64\_TLSLD\_ADD\_LO12\_NC = (0x207 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_MOVW_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21AARCH64_TLSLD_MOVW_G1E>)

enumerator AARCH64\_TLSLD\_MOVW\_G1 = (0x208 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_MOVW_G0_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24AARCH64_TLSLD_MOVW_G0_NCE>)

enumerator AARCH64\_TLSLD\_MOVW\_G0\_NC = (0x209 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_LD_PREL19 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE23AARCH64_TLSLD_LD_PREL19E>)

enumerator AARCH64\_TLSLD\_LD\_PREL19 = (0x20a | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_MOVW_DTPREL_G2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE28AARCH64_TLSLD_MOVW_DTPREL_G2E>)

enumerator AARCH64\_TLSLD\_MOVW\_DTPREL\_G2 = (0x20b | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_MOVW_DTPREL_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE28AARCH64_TLSLD_MOVW_DTPREL_G1E>)

enumerator AARCH64\_TLSLD\_MOVW\_DTPREL\_G1 = (0x20c | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_MOVW_DTPREL_G1_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE31AARCH64_TLSLD_MOVW_DTPREL_G1_NCE>)

enumerator AARCH64\_TLSLD\_MOVW\_DTPREL\_G1\_NC = (0x20d | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_MOVW_DTPREL_G0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE28AARCH64_TLSLD_MOVW_DTPREL_G0E>)

enumerator AARCH64\_TLSLD\_MOVW\_DTPREL\_G0 = (0x20e | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_MOVW_DTPREL_G0_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE31AARCH64_TLSLD_MOVW_DTPREL_G0_NCE>)

enumerator AARCH64\_TLSLD\_MOVW\_DTPREL\_G0\_NC = (0x20f | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_ADD_DTPREL_HI12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE29AARCH64_TLSLD_ADD_DTPREL_HI12E>)

enumerator AARCH64\_TLSLD\_ADD\_DTPREL\_HI12 = (0x210 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_ADD_DTPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE29AARCH64_TLSLD_ADD_DTPREL_LO12E>)

enumerator AARCH64\_TLSLD\_ADD\_DTPREL\_LO12 = (0x211 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_ADD_DTPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE32AARCH64_TLSLD_ADD_DTPREL_LO12_NCE>)

enumerator AARCH64\_TLSLD\_ADD\_DTPREL\_LO12\_NC = (0x212 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_LDST8_DTPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE31AARCH64_TLSLD_LDST8_DTPREL_LO12E>)

enumerator AARCH64\_TLSLD\_LDST8\_DTPREL\_LO12 = (0x213 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_LDST8_DTPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE34AARCH64_TLSLD_LDST8_DTPREL_LO12_NCE>)

enumerator AARCH64\_TLSLD\_LDST8\_DTPREL\_LO12\_NC = (0x214 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_LDST16_DTPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE32AARCH64_TLSLD_LDST16_DTPREL_LO12E>)

enumerator AARCH64\_TLSLD\_LDST16\_DTPREL\_LO12 = (0x215 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_LDST16_DTPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE35AARCH64_TLSLD_LDST16_DTPREL_LO12_NCE>)

enumerator AARCH64\_TLSLD\_LDST16\_DTPREL\_LO12\_NC = (0x216 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_LDST32_DTPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE32AARCH64_TLSLD_LDST32_DTPREL_LO12E>)

enumerator AARCH64\_TLSLD\_LDST32\_DTPREL\_LO12 = (0x217 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_LDST32_DTPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE35AARCH64_TLSLD_LDST32_DTPREL_LO12_NCE>)

enumerator AARCH64\_TLSLD\_LDST32\_DTPREL\_LO12\_NC = (0x218 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_LDST64_DTPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE32AARCH64_TLSLD_LDST64_DTPREL_LO12E>)

enumerator AARCH64\_TLSLD\_LDST64\_DTPREL\_LO12 = (0x219 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_LDST64_DTPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE35AARCH64_TLSLD_LDST64_DTPREL_LO12_NCE>)

enumerator AARCH64\_TLSLD\_LDST64\_DTPREL\_LO12\_NC = (0x21a | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSIE_MOVW_GOTTPREL_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE30AARCH64_TLSIE_MOVW_GOTTPREL_G1E>)

enumerator AARCH64\_TLSIE\_MOVW\_GOTTPREL\_G1 = (0x21b | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSIE_MOVW_GOTTPREL_G0_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE33AARCH64_TLSIE_MOVW_GOTTPREL_G0_NCE>)

enumerator AARCH64\_TLSIE\_MOVW\_GOTTPREL\_G0\_NC = (0x21c | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSIE_ADR_GOTTPREL_PAGE21 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE33AARCH64_TLSIE_ADR_GOTTPREL_PAGE21E>)

enumerator AARCH64\_TLSIE\_ADR\_GOTTPREL\_PAGE21 = (0x21d | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSIE_LD64_GOTTPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE35AARCH64_TLSIE_LD64_GOTTPREL_LO12_NCE>)

enumerator AARCH64\_TLSIE\_LD64\_GOTTPREL\_LO12\_NC = (0x21e | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSIE_LD_GOTTPREL_PREL19 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE32AARCH64_TLSIE_LD_GOTTPREL_PREL19E>)

enumerator AARCH64\_TLSIE\_LD\_GOTTPREL\_PREL19 = (0x21f | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_MOVW_TPREL_G2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE27AARCH64_TLSLE_MOVW_TPREL_G2E>)

enumerator AARCH64\_TLSLE\_MOVW\_TPREL\_G2 = (0x220 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_MOVW_TPREL_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE27AARCH64_TLSLE_MOVW_TPREL_G1E>)

enumerator AARCH64\_TLSLE\_MOVW\_TPREL\_G1 = (0x221 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_MOVW_TPREL_G1_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE30AARCH64_TLSLE_MOVW_TPREL_G1_NCE>)

enumerator AARCH64\_TLSLE\_MOVW\_TPREL\_G1\_NC = (0x222 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_MOVW_TPREL_G0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE27AARCH64_TLSLE_MOVW_TPREL_G0E>)

enumerator AARCH64\_TLSLE\_MOVW\_TPREL\_G0 = (0x223 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_MOVW_TPREL_G0_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE30AARCH64_TLSLE_MOVW_TPREL_G0_NCE>)

enumerator AARCH64\_TLSLE\_MOVW\_TPREL\_G0\_NC = (0x224 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_ADD_TPREL_HI12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE28AARCH64_TLSLE_ADD_TPREL_HI12E>)

enumerator AARCH64\_TLSLE\_ADD\_TPREL\_HI12 = (0x225 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_ADD_TPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE28AARCH64_TLSLE_ADD_TPREL_LO12E>)

enumerator AARCH64\_TLSLE\_ADD\_TPREL\_LO12 = (0x226 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_ADD_TPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE31AARCH64_TLSLE_ADD_TPREL_LO12_NCE>)

enumerator AARCH64\_TLSLE\_ADD\_TPREL\_LO12\_NC = (0x227 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_LDST8_TPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE30AARCH64_TLSLE_LDST8_TPREL_LO12E>)

enumerator AARCH64\_TLSLE\_LDST8\_TPREL\_LO12 = (0x228 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_LDST8_TPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE33AARCH64_TLSLE_LDST8_TPREL_LO12_NCE>)

enumerator AARCH64\_TLSLE\_LDST8\_TPREL\_LO12\_NC = (0x229 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_LDST16_TPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE31AARCH64_TLSLE_LDST16_TPREL_LO12E>)

enumerator AARCH64\_TLSLE\_LDST16\_TPREL\_LO12 = (0x22a | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_LDST16_TPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE34AARCH64_TLSLE_LDST16_TPREL_LO12_NCE>)

enumerator AARCH64\_TLSLE\_LDST16\_TPREL\_LO12\_NC = (0x22b | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_LDST32_TPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE31AARCH64_TLSLE_LDST32_TPREL_LO12E>)

enumerator AARCH64\_TLSLE\_LDST32\_TPREL\_LO12 = (0x22c | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_LDST32_TPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE34AARCH64_TLSLE_LDST32_TPREL_LO12_NCE>)

enumerator AARCH64\_TLSLE\_LDST32\_TPREL\_LO12\_NC = (0x22d | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_LDST64_TPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE31AARCH64_TLSLE_LDST64_TPREL_LO12E>)

enumerator AARCH64\_TLSLE\_LDST64\_TPREL\_LO12 = (0x22e | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_LDST64_TPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE34AARCH64_TLSLE_LDST64_TPREL_LO12_NCE>)

enumerator AARCH64\_TLSLE\_LDST64\_TPREL\_LO12\_NC = (0x22f | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSDESC_LD_PREL19 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE25AARCH64_TLSDESC_LD_PREL19E>)

enumerator AARCH64\_TLSDESC\_LD\_PREL19 = (0x230 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSDESC_ADR_PREL21 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE26AARCH64_TLSDESC_ADR_PREL21E>)

enumerator AARCH64\_TLSDESC\_ADR\_PREL21 = (0x231 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSDESC_ADR_PAGE21 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE26AARCH64_TLSDESC_ADR_PAGE21E>)

enumerator AARCH64\_TLSDESC\_ADR\_PAGE21 = (0x232 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSDESC_LD64_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE28AARCH64_TLSDESC_LD64_LO12_NCE>)

enumerator AARCH64\_TLSDESC\_LD64\_LO12\_NC = (0x233 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSDESC_ADD_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE27AARCH64_TLSDESC_ADD_LO12_NCE>)

enumerator AARCH64\_TLSDESC\_ADD\_LO12\_NC = (0x234 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSDESC_OFF_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22AARCH64_TLSDESC_OFF_G1E>)

enumerator AARCH64\_TLSDESC\_OFF\_G1 = (0x235 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSDESC_OFF_G0_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE25AARCH64_TLSDESC_OFF_G0_NCE>)

enumerator AARCH64\_TLSDESC\_OFF\_G0\_NC = (0x236 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSDESC_LDR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19AARCH64_TLSDESC_LDRE>)

enumerator AARCH64\_TLSDESC\_LDR = (0x237 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSDESC_ADD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19AARCH64_TLSDESC_ADDE>)

enumerator AARCH64\_TLSDESC\_ADD = (0x238 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSDESC_CALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20AARCH64_TLSDESC_CALLE>)

enumerator AARCH64\_TLSDESC\_CALL = (0x239 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_LDST128_TPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE32AARCH64_TLSLE_LDST128_TPREL_LO12E>)

enumerator AARCH64\_TLSLE\_LDST128\_TPREL\_LO12 = (0x23a | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLE_LDST128_TPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE35AARCH64_TLSLE_LDST128_TPREL_LO12_NCE>)

enumerator AARCH64\_TLSLE\_LDST128\_TPREL\_LO12\_NC = (0x23b | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_LDST128_DTPREL_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE33AARCH64_TLSLD_LDST128_DTPREL_LO12E>)

enumerator AARCH64\_TLSLD\_LDST128\_DTPREL\_LO12 = (0x23c | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSLD_LDST128_DTPREL_LO12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE36AARCH64_TLSLD_LDST128_DTPREL_LO12_NCE>)

enumerator AARCH64\_TLSLD\_LDST128\_DTPREL\_LO12\_NC = (0x23d | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_COPY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12AARCH64_COPYE>)

enumerator AARCH64\_COPY = (0x400 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16AARCH64_GLOB_DATE>)

enumerator AARCH64\_GLOB\_DAT = (0x401 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_JUMP_SLOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17AARCH64_JUMP_SLOTE>)

enumerator AARCH64\_JUMP\_SLOT = (0x402 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_RELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16AARCH64_RELATIVEE>)

enumerator AARCH64\_RELATIVE = (0x403 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLS_DTPREL64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20AARCH64_TLS_DTPREL64E>)

enumerator AARCH64\_TLS\_DTPREL64 = (0x404 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLS_DTPMOD64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20AARCH64_TLS_DTPMOD64E>)

enumerator AARCH64\_TLS\_DTPMOD64 = (0x405 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLS_TPREL64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19AARCH64_TLS_TPREL64E>)

enumerator AARCH64\_TLS\_TPREL64 = (0x406 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_TLSDESC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15AARCH64_TLSDESCE>)

enumerator AARCH64\_TLSDESC = (0x407 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` AARCH64_IRELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17AARCH64_IRELATIVEE>)

enumerator AARCH64\_IRELATIVE = (0x408 | [R\_AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E> "LIEF::ELF::Relocation::R_AARCH64"))

##### [` ARM_NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8ARM_NONEE>)

enumerator ARM\_NONE = (0x00 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PC24 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8ARM_PC24E>)

enumerator ARM\_PC24 = (0x01 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ABS32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9ARM_ABS32E>)

enumerator ARM\_ABS32 = (0x02 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_REL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9ARM_REL32E>)

enumerator ARM\_REL32 = (0x03 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDR_PC_G0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_LDR_PC_G0E>)

enumerator ARM\_LDR\_PC\_G0 = (0x04 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ABS16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9ARM_ABS16E>)

enumerator ARM\_ABS16 = (0x05 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ABS12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9ARM_ABS12E>)

enumerator ARM\_ABS12 = (0x06 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_ABS5 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_THM_ABS5E>)

enumerator ARM\_THM\_ABS5 = (0x07 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ABS8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8ARM_ABS8E>)

enumerator ARM\_ABS8 = (0x08 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_SBREL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11ARM_SBREL32E>)

enumerator ARM\_SBREL32 = (0x09 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_CALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_THM_CALLE>)

enumerator ARM\_THM\_CALL = (0x0a | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_PC8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11ARM_THM_PC8E>)

enumerator ARM\_THM\_PC8 = (0x0b | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_BREL_ADJ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_BREL_ADJE>)

enumerator ARM\_BREL\_ADJ = (0x0c | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TLS_DESC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_TLS_DESCE>)

enumerator ARM\_TLS\_DESC = (0x0d | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_SWI8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_THM_SWI8E>)

enumerator ARM\_THM\_SWI8 = (0x0e | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_XPC25 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9ARM_XPC25E>)

enumerator ARM\_XPC25 = (0x0f | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_XPC22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_THM_XPC22E>)

enumerator ARM\_THM\_XPC22 = (0x10 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TLS_DTPMOD32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16ARM_TLS_DTPMOD32E>)

enumerator ARM\_TLS\_DTPMOD32 = (0x11 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TLS_DTPOFF32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16ARM_TLS_DTPOFF32E>)

enumerator ARM\_TLS\_DTPOFF32 = (0x12 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TLS_TPOFF32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15ARM_TLS_TPOFF32E>)

enumerator ARM\_TLS\_TPOFF32 = (0x13 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_COPY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8ARM_COPYE>)

enumerator ARM\_COPY = (0x14 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_GLOB_DATE>)

enumerator ARM\_GLOB\_DAT = (0x15 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_JUMP_SLOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_JUMP_SLOTE>)

enumerator ARM\_JUMP\_SLOT = (0x16 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_RELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_RELATIVEE>)

enumerator ARM\_RELATIVE = (0x17 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_GOTOFF32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_GOTOFF32E>)

enumerator ARM\_GOTOFF32 = (0x18 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_BASE_PREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_BASE_PRELE>)

enumerator ARM\_BASE\_PREL = (0x19 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_GOT_BREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_GOT_BRELE>)

enumerator ARM\_GOT\_BREL = (0x1a | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PLT32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9ARM_PLT32E>)

enumerator ARM\_PLT32 = (0x1b | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_CALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8ARM_CALLE>)

enumerator ARM\_CALL = (0x1c | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_JUMP24 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10ARM_JUMP24E>)

enumerator ARM\_JUMP24 = (0x1d | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_JUMP24 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_THM_JUMP24E>)

enumerator ARM\_THM\_JUMP24 = (0x1e | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_BASE_ABS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_BASE_ABSE>)

enumerator ARM\_BASE\_ABS = (0x1f | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ALU_PCREL_7_0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17ARM_ALU_PCREL_7_0E>)

enumerator ARM\_ALU\_PCREL\_7\_0 = (0x20 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ALU_PCREL_15_8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18ARM_ALU_PCREL_15_8E>)

enumerator ARM\_ALU\_PCREL\_15\_8 = (0x21 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ALU_PCREL_23_15 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19ARM_ALU_PCREL_23_15E>)

enumerator ARM\_ALU\_PCREL\_23\_15 = (0x22 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDR_SBREL_11_0_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21ARM_LDR_SBREL_11_0_NCE>)

enumerator ARM\_LDR\_SBREL\_11\_0\_NC = (0x23 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ALU_SBREL_19_12_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22ARM_ALU_SBREL_19_12_NCE>)

enumerator ARM\_ALU\_SBREL\_19\_12\_NC = (0x24 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ALU_SBREL_27_20_CK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22ARM_ALU_SBREL_27_20_CKE>)

enumerator ARM\_ALU\_SBREL\_27\_20\_CK = (0x25 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TARGET1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11ARM_TARGET1E>)

enumerator ARM\_TARGET1 = (0x26 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_SBREL31 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11ARM_SBREL31E>)

enumerator ARM\_SBREL31 = (0x27 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_V4BX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8ARM_V4BXE>)

enumerator ARM\_V4BX = (0x28 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TARGET2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11ARM_TARGET2E>)

enumerator ARM\_TARGET2 = (0x29 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PREL31 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10ARM_PREL31E>)

enumerator ARM\_PREL31 = (0x2a | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_MOVW_ABS_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15ARM_MOVW_ABS_NCE>)

enumerator ARM\_MOVW\_ABS\_NC = (0x2b | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_MOVT_ABS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_MOVT_ABSE>)

enumerator ARM\_MOVT\_ABS = (0x2c | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_MOVW_PREL_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16ARM_MOVW_PREL_NCE>)

enumerator ARM\_MOVW\_PREL\_NC = (0x2d | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_MOVT_PREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_MOVT_PRELE>)

enumerator ARM\_MOVT\_PREL = (0x2e | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_MOVW_ABS_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19ARM_THM_MOVW_ABS_NCE>)

enumerator ARM\_THM\_MOVW\_ABS\_NC = (0x2f | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_MOVT_ABS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16ARM_THM_MOVT_ABSE>)

enumerator ARM\_THM\_MOVT\_ABS = (0x30 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_MOVW_PREL_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20ARM_THM_MOVW_PREL_NCE>)

enumerator ARM\_THM\_MOVW\_PREL\_NC = (0x31 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_MOVT_PREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17ARM_THM_MOVT_PRELE>)

enumerator ARM\_THM\_MOVT\_PREL = (0x32 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_JUMP19 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_THM_JUMP19E>)

enumerator ARM\_THM\_JUMP19 = (0x33 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_JUMP6 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_THM_JUMP6E>)

enumerator ARM\_THM\_JUMP6 = (0x34 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_ALU_PREL_11_0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21ARM_THM_ALU_PREL_11_0E>)

enumerator ARM\_THM\_ALU\_PREL\_11\_0 = (0x35 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_PC12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_THM_PC12E>)

enumerator ARM\_THM\_PC12 = (0x36 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ABS32_NOI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_ABS32_NOIE>)

enumerator ARM\_ABS32\_NOI = (0x37 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_REL32_NOI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_REL32_NOIE>)

enumerator ARM\_REL32\_NOI = (0x38 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ALU_PC_G0_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16ARM_ALU_PC_G0_NCE>)

enumerator ARM\_ALU\_PC\_G0\_NC = (0x39 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ALU_PC_G0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_ALU_PC_G0E>)

enumerator ARM\_ALU\_PC\_G0 = (0x3a | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ALU_PC_G1_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16ARM_ALU_PC_G1_NCE>)

enumerator ARM\_ALU\_PC\_G1\_NC = (0x3b | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ALU_PC_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_ALU_PC_G1E>)

enumerator ARM\_ALU\_PC\_G1 = (0x3c | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ALU_PC_G2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_ALU_PC_G2E>)

enumerator ARM\_ALU\_PC\_G2 = (0x3d | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDR_PC_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_LDR_PC_G1E>)

enumerator ARM\_LDR\_PC\_G1 = (0x3e | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDR_PC_G2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_LDR_PC_G2E>)

enumerator ARM\_LDR\_PC\_G2 = (0x3f | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDRS_PC_G0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_LDRS_PC_G0E>)

enumerator ARM\_LDRS\_PC\_G0 = (0x40 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDRS_PC_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_LDRS_PC_G1E>)

enumerator ARM\_LDRS\_PC\_G1 = (0x41 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDRS_PC_G2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_LDRS_PC_G2E>)

enumerator ARM\_LDRS\_PC\_G2 = (0x42 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDC_PC_G0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_LDC_PC_G0E>)

enumerator ARM\_LDC\_PC\_G0 = (0x43 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDC_PC_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_LDC_PC_G1E>)

enumerator ARM\_LDC\_PC\_G1 = (0x44 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDC_PC_G2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_LDC_PC_G2E>)

enumerator ARM\_LDC\_PC\_G2 = (0x45 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ALU_SB_G0_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16ARM_ALU_SB_G0_NCE>)

enumerator ARM\_ALU\_SB\_G0\_NC = (0x46 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ALU_SB_G0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_ALU_SB_G0E>)

enumerator ARM\_ALU\_SB\_G0 = (0x47 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ALU_SB_G1_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16ARM_ALU_SB_G1_NCE>)

enumerator ARM\_ALU\_SB\_G1\_NC = (0x48 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ALU_SB_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_ALU_SB_G1E>)

enumerator ARM\_ALU\_SB\_G1 = (0x49 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ALU_SB_G2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_ALU_SB_G2E>)

enumerator ARM\_ALU\_SB\_G2 = (0x4a | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDR_SB_G0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_LDR_SB_G0E>)

enumerator ARM\_LDR\_SB\_G0 = (0x4b | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDR_SB_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_LDR_SB_G1E>)

enumerator ARM\_LDR\_SB\_G1 = (0x4c | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDR_SB_G2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_LDR_SB_G2E>)

enumerator ARM\_LDR\_SB\_G2 = (0x4d | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDRS_SB_G0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_LDRS_SB_G0E>)

enumerator ARM\_LDRS\_SB\_G0 = (0x4e | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDRS_SB_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_LDRS_SB_G1E>)

enumerator ARM\_LDRS\_SB\_G1 = (0x4f | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDRS_SB_G2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_LDRS_SB_G2E>)

enumerator ARM\_LDRS\_SB\_G2 = (0x50 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDC_SB_G0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_LDC_SB_G0E>)

enumerator ARM\_LDC\_SB\_G0 = (0x51 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDC_SB_G1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_LDC_SB_G1E>)

enumerator ARM\_LDC\_SB\_G1 = (0x52 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_LDC_SB_G2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_LDC_SB_G2E>)

enumerator ARM\_LDC\_SB\_G2 = (0x53 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_MOVW_BREL_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16ARM_MOVW_BREL_NCE>)

enumerator ARM\_MOVW\_BREL\_NC = (0x54 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_MOVT_BREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_MOVT_BRELE>)

enumerator ARM\_MOVT\_BREL = (0x55 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_MOVW_BREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_MOVW_BRELE>)

enumerator ARM\_MOVW\_BREL = (0x56 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_MOVW_BREL_NC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20ARM_THM_MOVW_BREL_NCE>)

enumerator ARM\_THM\_MOVW\_BREL\_NC = (0x57 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_MOVT_BREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17ARM_THM_MOVT_BRELE>)

enumerator ARM\_THM\_MOVT\_BREL = (0x58 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_MOVW_BREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17ARM_THM_MOVW_BRELE>)

enumerator ARM\_THM\_MOVW\_BREL = (0x59 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TLS_GOTDESC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15ARM_TLS_GOTDESCE>)

enumerator ARM\_TLS\_GOTDESC = (0x5a | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TLS_CALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_TLS_CALLE>)

enumerator ARM\_TLS\_CALL = (0x5b | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TLS_DESCSEQ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15ARM_TLS_DESCSEQE>)

enumerator ARM\_TLS\_DESCSEQ = (0x5c | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_TLS_CALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16ARM_THM_TLS_CALLE>)

enumerator ARM\_THM\_TLS\_CALL = (0x5d | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PLT32_ABS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_PLT32_ABSE>)

enumerator ARM\_PLT32\_ABS = (0x5e | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_GOT_ABS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11ARM_GOT_ABSE>)

enumerator ARM\_GOT\_ABS = (0x5f | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_GOT_PREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_GOT_PRELE>)

enumerator ARM\_GOT\_PREL = (0x60 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_GOT_BREL12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_GOT_BREL12E>)

enumerator ARM\_GOT\_BREL12 = (0x61 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_GOTOFF12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_GOTOFF12E>)

enumerator ARM\_GOTOFF12 = (0x62 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_GOTRELAX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_GOTRELAXE>)

enumerator ARM\_GOTRELAX = (0x63 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_GNU_VTENTRY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15ARM_GNU_VTENTRYE>)

enumerator ARM\_GNU\_VTENTRY = (0x64 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_GNU_VTINHERIT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17ARM_GNU_VTINHERITE>)

enumerator ARM\_GNU\_VTINHERIT = (0x65 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_JUMP11 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_THM_JUMP11E>)

enumerator ARM\_THM\_JUMP11 = (0x66 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_JUMP8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_THM_JUMP8E>)

enumerator ARM\_THM\_JUMP8 = (0x67 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TLS_GD32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_TLS_GD32E>)

enumerator ARM\_TLS\_GD32 = (0x68 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TLS_LDM32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_TLS_LDM32E>)

enumerator ARM\_TLS\_LDM32 = (0x69 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TLS_LDO32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_TLS_LDO32E>)

enumerator ARM\_TLS\_LDO32 = (0x6a | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TLS_IE32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_TLS_IE32E>)

enumerator ARM\_TLS\_IE32 = (0x6b | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TLS_LE32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_TLS_LE32E>)

enumerator ARM\_TLS\_LE32 = (0x6c | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TLS_LDO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_TLS_LDO12E>)

enumerator ARM\_TLS\_LDO12 = (0x6d | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TLS_LE12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_TLS_LE12E>)

enumerator ARM\_TLS\_LE12 = (0x6e | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_TLS_IE12GP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_TLS_IE12GPE>)

enumerator ARM\_TLS\_IE12GP = (0x6f | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PRIVATE_0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_PRIVATE_0E>)

enumerator ARM\_PRIVATE\_0 = (0x70 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PRIVATE_1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_PRIVATE_1E>)

enumerator ARM\_PRIVATE\_1 = (0x71 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PRIVATE_2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_PRIVATE_2E>)

enumerator ARM\_PRIVATE\_2 = (0x72 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PRIVATE_3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_PRIVATE_3E>)

enumerator ARM\_PRIVATE\_3 = (0x73 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PRIVATE_4 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_PRIVATE_4E>)

enumerator ARM\_PRIVATE\_4 = (0x74 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PRIVATE_5 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_PRIVATE_5E>)

enumerator ARM\_PRIVATE\_5 = (0x75 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PRIVATE_6 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_PRIVATE_6E>)

enumerator ARM\_PRIVATE\_6 = (0x76 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PRIVATE_7 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_PRIVATE_7E>)

enumerator ARM\_PRIVATE\_7 = (0x77 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PRIVATE_8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_PRIVATE_8E>)

enumerator ARM\_PRIVATE\_8 = (0x78 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PRIVATE_9 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_PRIVATE_9E>)

enumerator ARM\_PRIVATE\_9 = (0x79 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PRIVATE_10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_PRIVATE_10E>)

enumerator ARM\_PRIVATE\_10 = (0x7a | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PRIVATE_11 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_PRIVATE_11E>)

enumerator ARM\_PRIVATE\_11 = (0x7b | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PRIVATE_12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_PRIVATE_12E>)

enumerator ARM\_PRIVATE\_12 = (0x7c | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PRIVATE_13 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_PRIVATE_13E>)

enumerator ARM\_PRIVATE\_13 = (0x7d | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PRIVATE_14 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_PRIVATE_14E>)

enumerator ARM\_PRIVATE\_14 = (0x7e | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_PRIVATE_15 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14ARM_PRIVATE_15E>)

enumerator ARM\_PRIVATE\_15 = (0x7f | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_ME_TOO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10ARM_ME_TOOE>)

enumerator ARM\_ME\_TOO = (0x80 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_TLS_DESCSEQ16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21ARM_THM_TLS_DESCSEQ16E>)

enumerator ARM\_THM\_TLS\_DESCSEQ16 = (0x81 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_TLS_DESCSEQ32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21ARM_THM_TLS_DESCSEQ32E>)

enumerator ARM\_THM\_TLS\_DESCSEQ32 = (0x82 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_IRELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_IRELATIVEE>)

enumerator ARM\_IRELATIVE = (0xa0 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_RXPC25 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10ARM_RXPC25E>)

enumerator ARM\_RXPC25 = (0xF9 | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_RSBREL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12ARM_RSBREL32E>)

enumerator ARM\_RSBREL32 = (0xFA | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_THM_RPC22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13ARM_THM_RPC22E>)

enumerator ARM\_THM\_RPC22 = (0xFB | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_RREL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10ARM_RREL32E>)

enumerator ARM\_RREL32 = (0xFC | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_RPC24 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9ARM_RPC24E>)

enumerator ARM\_RPC24 = (0xFD | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` ARM_RBASE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9ARM_RBASEE>)

enumerator ARM\_RBASE = (0xFE | [R\_ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME> "LIEF::ELF::Relocation::R_ARM"))

##### [` HEX_NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8HEX_NONEE>)

enumerator HEX\_NONE = (0 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_B22_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_B22_PCRELE>)

enumerator HEX\_B22\_PCREL = (1 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_B15_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_B15_PCRELE>)

enumerator HEX\_B15\_PCREL = (2 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_B7_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12HEX_B7_PCRELE>)

enumerator HEX\_B7\_PCREL = (3 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8HEX_LO16E>)

enumerator HEX\_LO16 = (4 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8HEX_HI16E>)

enumerator HEX\_HI16 = (5 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE6HEX_32E>)

enumerator HEX\_32 = (6 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE6HEX_16E>)

enumerator HEX\_16 = (7 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE5HEX_8E>)

enumerator HEX\_8 = (8 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GPREL16_0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_GPREL16_0E>)

enumerator HEX\_GPREL16\_0 = (9 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GPREL16_1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_GPREL16_1E>)

enumerator HEX\_GPREL16\_1 = (10 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GPREL16_2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_GPREL16_2E>)

enumerator HEX\_GPREL16\_2 = (11 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GPREL16_3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_GPREL16_3E>)

enumerator HEX\_GPREL16\_3 = (12 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_HL16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8HEX_HL16E>)

enumerator HEX\_HL16 = (13 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_B13_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_B13_PCRELE>)

enumerator HEX\_B13\_PCREL = (14 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_B9_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12HEX_B9_PCRELE>)

enumerator HEX\_B9\_PCREL = (15 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_B32_PCREL_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_B32_PCREL_XE>)

enumerator HEX\_B32\_PCREL\_X = (16 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_32_6_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10HEX_32_6_XE>)

enumerator HEX\_32\_6\_X = (17 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_B22_PCREL_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_B22_PCREL_XE>)

enumerator HEX\_B22\_PCREL\_X = (18 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_B15_PCREL_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_B15_PCREL_XE>)

enumerator HEX\_B15\_PCREL\_X = (19 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_B13_PCREL_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_B13_PCREL_XE>)

enumerator HEX\_B13\_PCREL\_X = (20 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_B9_PCREL_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14HEX_B9_PCREL_XE>)

enumerator HEX\_B9\_PCREL\_X = (21 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_B7_PCREL_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14HEX_B7_PCREL_XE>)

enumerator HEX\_B7\_PCREL\_X = (22 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_16_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8HEX_16_XE>)

enumerator HEX\_16\_X = (23 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_12_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8HEX_12_XE>)

enumerator HEX\_12\_X = (24 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_11_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8HEX_11_XE>)

enumerator HEX\_11\_X = (25 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_10_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8HEX_10_XE>)

enumerator HEX\_10\_X = (26 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_9_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7HEX_9_XE>)

enumerator HEX\_9\_X = (27 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_8_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7HEX_8_XE>)

enumerator HEX\_8\_X = (28 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_7_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7HEX_7_XE>)

enumerator HEX\_7\_X = (29 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_6_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7HEX_6_XE>)

enumerator HEX\_6\_X = (30 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_32_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12HEX_32_PCRELE>)

enumerator HEX\_32\_PCREL = (31 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_COPY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8HEX_COPYE>)

enumerator HEX\_COPY = (32 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12HEX_GLOB_DATE>)

enumerator HEX\_GLOB\_DAT = (33 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_JMP_SLOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12HEX_JMP_SLOTE>)

enumerator HEX\_JMP\_SLOT = (34 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_RELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12HEX_RELATIVEE>)

enumerator HEX\_RELATIVE = (35 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_PLT_B22_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17HEX_PLT_B22_PCRELE>)

enumerator HEX\_PLT\_B22\_PCREL = (36 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GOTREL_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_GOTREL_LO16E>)

enumerator HEX\_GOTREL\_LO16 = (37 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GOTREL_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_GOTREL_HI16E>)

enumerator HEX\_GOTREL\_HI16 = (38 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GOTREL_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_GOTREL_32E>)

enumerator HEX\_GOTREL\_32 = (39 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GOT_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12HEX_GOT_LO16E>)

enumerator HEX\_GOT\_LO16 = (40 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GOT_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12HEX_GOT_HI16E>)

enumerator HEX\_GOT\_HI16 = (41 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GOT_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10HEX_GOT_32E>)

enumerator HEX\_GOT\_32 = (42 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GOT_16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10HEX_GOT_16E>)

enumerator HEX\_GOT\_16 = (43 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_DTPMOD_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_DTPMOD_32E>)

enumerator HEX\_DTPMOD\_32 = (44 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_DTPREL_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_DTPREL_LO16E>)

enumerator HEX\_DTPREL\_LO16 = (45 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_DTPREL_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_DTPREL_HI16E>)

enumerator HEX\_DTPREL\_HI16 = (46 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_DTPREL_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_DTPREL_32E>)

enumerator HEX\_DTPREL\_32 = (47 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_DTPREL_16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_DTPREL_16E>)

enumerator HEX\_DTPREL\_16 = (48 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GD_PLT_B22_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20HEX_GD_PLT_B22_PCRELE>)

enumerator HEX\_GD\_PLT\_B22\_PCREL = (49 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GD_GOT_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_GD_GOT_LO16E>)

enumerator HEX\_GD\_GOT\_LO16 = (50 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GD_GOT_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_GD_GOT_HI16E>)

enumerator HEX\_GD\_GOT\_HI16 = (51 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GD_GOT_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_GD_GOT_32E>)

enumerator HEX\_GD\_GOT\_32 = (52 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GD_GOT_16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_GD_GOT_16E>)

enumerator HEX\_GD\_GOT\_16 = (53 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_IE_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11HEX_IE_LO16E>)

enumerator HEX\_IE\_LO16 = (54 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_IE_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11HEX_IE_HI16E>)

enumerator HEX\_IE\_HI16 = (55 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_IE_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9HEX_IE_32E>)

enumerator HEX\_IE\_32 = (56 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_IE_GOT_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_IE_GOT_LO16E>)

enumerator HEX\_IE\_GOT\_LO16 = (57 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_IE_GOT_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_IE_GOT_HI16E>)

enumerator HEX\_IE\_GOT\_HI16 = (58 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_IE_GOT_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_IE_GOT_32E>)

enumerator HEX\_IE\_GOT\_32 = (59 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_IE_GOT_16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_IE_GOT_16E>)

enumerator HEX\_IE\_GOT\_16 = (60 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_TPREL_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14HEX_TPREL_LO16E>)

enumerator HEX\_TPREL\_LO16 = (61 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_TPREL_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14HEX_TPREL_HI16E>)

enumerator HEX\_TPREL\_HI16 = (62 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_TPREL_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12HEX_TPREL_32E>)

enumerator HEX\_TPREL\_32 = (63 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_TPREL_16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12HEX_TPREL_16E>)

enumerator HEX\_TPREL\_16 = (64 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_6_PCREL_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_6_PCREL_XE>)

enumerator HEX\_6\_PCREL\_X = (65 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GOTREL_32_6_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17HEX_GOTREL_32_6_XE>)

enumerator HEX\_GOTREL\_32\_6\_X = (66 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GOTREL_16_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_GOTREL_16_XE>)

enumerator HEX\_GOTREL\_16\_X = (67 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GOTREL_11_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_GOTREL_11_XE>)

enumerator HEX\_GOTREL\_11\_X = (68 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GOT_32_6_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14HEX_GOT_32_6_XE>)

enumerator HEX\_GOT\_32\_6\_X = (69 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GOT_16_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12HEX_GOT_16_XE>)

enumerator HEX\_GOT\_16\_X = (70 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GOT_11_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12HEX_GOT_11_XE>)

enumerator HEX\_GOT\_11\_X = (71 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_DTPREL_32_6_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17HEX_DTPREL_32_6_XE>)

enumerator HEX\_DTPREL\_32\_6\_X = (72 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_DTPREL_16_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_DTPREL_16_XE>)

enumerator HEX\_DTPREL\_16\_X = (73 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_DTPREL_11_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_DTPREL_11_XE>)

enumerator HEX\_DTPREL\_11\_X = (74 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GD_GOT_32_6_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17HEX_GD_GOT_32_6_XE>)

enumerator HEX\_GD\_GOT\_32\_6\_X = (75 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GD_GOT_16_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_GD_GOT_16_XE>)

enumerator HEX\_GD\_GOT\_16\_X = (76 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_GD_GOT_11_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_GD_GOT_11_XE>)

enumerator HEX\_GD\_GOT\_11\_X = (77 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_IE_32_6_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_IE_32_6_XE>)

enumerator HEX\_IE\_32\_6\_X = (78 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_IE_16_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11HEX_IE_16_XE>)

enumerator HEX\_IE\_16\_X = (79 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_IE_GOT_32_6_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17HEX_IE_GOT_32_6_XE>)

enumerator HEX\_IE\_GOT\_32\_6\_X = (80 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_IE_GOT_16_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_IE_GOT_16_XE>)

enumerator HEX\_IE\_GOT\_16\_X = (81 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_IE_GOT_11_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_IE_GOT_11_XE>)

enumerator HEX\_IE\_GOT\_11\_X = (82 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_TPREL_32_6_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16HEX_TPREL_32_6_XE>)

enumerator HEX\_TPREL\_32\_6\_X = (83 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_TPREL_16_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14HEX_TPREL_16_XE>)

enumerator HEX\_TPREL\_16\_X = (84 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_TPREL_11_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14HEX_TPREL_11_XE>)

enumerator HEX\_TPREL\_11\_X = (85 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_LD_PLT_B22_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20HEX_LD_PLT_B22_PCRELE>)

enumerator HEX\_LD\_PLT\_B22\_PCREL = (86 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_LD_GOT_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_LD_GOT_LO16E>)

enumerator HEX\_LD\_GOT\_LO16 = (87 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_LD_GOT_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_LD_GOT_HI16E>)

enumerator HEX\_LD\_GOT\_HI16 = (88 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_LD_GOT_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_LD_GOT_32E>)

enumerator HEX\_LD\_GOT\_32 = (89 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_LD_GOT_16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13HEX_LD_GOT_16E>)

enumerator HEX\_LD\_GOT\_16 = (90 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_LD_GOT_32_6_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17HEX_LD_GOT_32_6_XE>)

enumerator HEX\_LD\_GOT\_32\_6\_X = (91 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_LD_GOT_16_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_LD_GOT_16_XE>)

enumerator HEX\_LD\_GOT\_16\_X = (92 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` HEX_LD_GOT_11_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15HEX_LD_GOT_11_XE>)

enumerator HEX\_LD\_GOT\_11\_X = (93 | [R\_HEXAGON](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE> "LIEF::ELF::Relocation::R_HEXAGON"))

##### [` X86_NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8X86_NONEE>)

enumerator X86\_NONE = (0 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE6X86_32E>)

enumerator X86\_32 = (1 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_PC32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8X86_PC32E>)

enumerator X86\_PC32 = (2 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_GOT32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9X86_GOT32E>)

enumerator X86\_GOT32 = (3 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_PLT32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9X86_PLT32E>)

enumerator X86\_PLT32 = (4 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_COPY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8X86_COPYE>)

enumerator X86\_COPY = (5 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12X86_GLOB_DATE>)

enumerator X86\_GLOB\_DAT = (6 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_JUMP_SLOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13X86_JUMP_SLOTE>)

enumerator X86\_JUMP\_SLOT = (7 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_RELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12X86_RELATIVEE>)

enumerator X86\_RELATIVE = (8 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_GOTOFF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10X86_GOTOFFE>)

enumerator X86\_GOTOFF = (9 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_GOTPC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9X86_GOTPCE>)

enumerator X86\_GOTPC = (10 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_32PLT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9X86_32PLTE>)

enumerator X86\_32PLT = (11 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_TPOFF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13X86_TLS_TPOFFE>)

enumerator X86\_TLS\_TPOFF = (14 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_IE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10X86_TLS_IEE>)

enumerator X86\_TLS\_IE = (15 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_GOTIE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13X86_TLS_GOTIEE>)

enumerator X86\_TLS\_GOTIE = (16 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_LE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10X86_TLS_LEE>)

enumerator X86\_TLS\_LE = (17 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_GD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10X86_TLS_GDE>)

enumerator X86\_TLS\_GD = (18 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_LDM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11X86_TLS_LDME>)

enumerator X86\_TLS\_LDM = (19 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE6X86_16E>)

enumerator X86\_16 = (20 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_PC16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8X86_PC16E>)

enumerator X86\_PC16 = (21 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE5X86_8E>)

enumerator X86\_8 = (22 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_PC8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7X86_PC8E>)

enumerator X86\_PC8 = (23 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_GD_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13X86_TLS_GD_32E>)

enumerator X86\_TLS\_GD\_32 = (24 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_GD_PUSH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15X86_TLS_GD_PUSHE>)

enumerator X86\_TLS\_GD\_PUSH = (25 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_GD_CALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15X86_TLS_GD_CALLE>)

enumerator X86\_TLS\_GD\_CALL = (26 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_GD_POP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14X86_TLS_GD_POPE>)

enumerator X86\_TLS\_GD\_POP = (27 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_LDM_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14X86_TLS_LDM_32E>)

enumerator X86\_TLS\_LDM\_32 = (28 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_LDM_PUSH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16X86_TLS_LDM_PUSHE>)

enumerator X86\_TLS\_LDM\_PUSH = (29 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_LDM_CALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16X86_TLS_LDM_CALLE>)

enumerator X86\_TLS\_LDM\_CALL = (30 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_LDM_POP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15X86_TLS_LDM_POPE>)

enumerator X86\_TLS\_LDM\_POP = (31 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_LDO_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14X86_TLS_LDO_32E>)

enumerator X86\_TLS\_LDO\_32 = (32 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_IE_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13X86_TLS_IE_32E>)

enumerator X86\_TLS\_IE\_32 = (33 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_LE_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13X86_TLS_LE_32E>)

enumerator X86\_TLS\_LE\_32 = (34 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_DTPMOD32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16X86_TLS_DTPMOD32E>)

enumerator X86\_TLS\_DTPMOD32 = (35 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_DTPOFF32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16X86_TLS_DTPOFF32E>)

enumerator X86\_TLS\_DTPOFF32 = (36 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_TPOFF32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15X86_TLS_TPOFF32E>)

enumerator X86\_TLS\_TPOFF32 = (37 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_GOTDESC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15X86_TLS_GOTDESCE>)

enumerator X86\_TLS\_GOTDESC = (39 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_DESC_CALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17X86_TLS_DESC_CALLE>)

enumerator X86\_TLS\_DESC\_CALL = (40 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_TLS_DESC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12X86_TLS_DESCE>)

enumerator X86\_TLS\_DESC = (41 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` X86_IRELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13X86_IRELATIVEE>)

enumerator X86\_IRELATIVE = (42 | [R\_X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E> "LIEF::ELF::Relocation::R_X86"))

##### [` LARCH_NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10LARCH_NONEE>)

enumerator LARCH\_NONE = (0 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8LARCH_32E>)

enumerator LARCH\_32 = (1 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8LARCH_64E>)

enumerator LARCH\_64 = (2 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_RELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14LARCH_RELATIVEE>)

enumerator LARCH\_RELATIVE = (3 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_COPY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10LARCH_COPYE>)

enumerator LARCH\_COPY = (4 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_JUMP_SLOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15LARCH_JUMP_SLOTE>)

enumerator LARCH\_JUMP\_SLOT = (5 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DTPMOD32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18LARCH_TLS_DTPMOD32E>)

enumerator LARCH\_TLS\_DTPMOD32 = (6 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DTPMOD64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18LARCH_TLS_DTPMOD64E>)

enumerator LARCH\_TLS\_DTPMOD64 = (7 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DTPREL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18LARCH_TLS_DTPREL32E>)

enumerator LARCH\_TLS\_DTPREL32 = (8 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DTPREL64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18LARCH_TLS_DTPREL64E>)

enumerator LARCH\_TLS\_DTPREL64 = (9 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_TPREL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17LARCH_TLS_TPREL32E>)

enumerator LARCH\_TLS\_TPREL32 = (10 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_TPREL64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17LARCH_TLS_TPREL64E>)

enumerator LARCH\_TLS\_TPREL64 = (11 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_IRELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15LARCH_IRELATIVEE>)

enumerator LARCH\_IRELATIVE = (12 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_MARK_LA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13LARCH_MARK_LAE>)

enumerator LARCH\_MARK\_LA = (20 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_MARK_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16LARCH_MARK_PCRELE>)

enumerator LARCH\_MARK\_PCREL = (21 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_PUSH_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20LARCH_SOP_PUSH_PCRELE>)

enumerator LARCH\_SOP\_PUSH\_PCREL = (22 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_PUSH_ABSOLUTE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE23LARCH_SOP_PUSH_ABSOLUTEE>)

enumerator LARCH\_SOP\_PUSH\_ABSOLUTE = (23 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_PUSH_DUP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18LARCH_SOP_PUSH_DUPE>)

enumerator LARCH\_SOP\_PUSH\_DUP = (24 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_PUSH_GPREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20LARCH_SOP_PUSH_GPRELE>)

enumerator LARCH\_SOP\_PUSH\_GPREL = (25 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_PUSH_TLS_TPREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24LARCH_SOP_PUSH_TLS_TPRELE>)

enumerator LARCH\_SOP\_PUSH\_TLS\_TPREL = (26 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_PUSH_TLS_GOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22LARCH_SOP_PUSH_TLS_GOTE>)

enumerator LARCH\_SOP\_PUSH\_TLS\_GOT = (27 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_PUSH_TLS_GD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21LARCH_SOP_PUSH_TLS_GDE>)

enumerator LARCH\_SOP\_PUSH\_TLS\_GD = (28 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_PUSH_PLT_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24LARCH_SOP_PUSH_PLT_PCRELE>)

enumerator LARCH\_SOP\_PUSH\_PLT\_PCREL = (29 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_ASSERT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16LARCH_SOP_ASSERTE>)

enumerator LARCH\_SOP\_ASSERT = (30 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_NOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13LARCH_SOP_NOTE>)

enumerator LARCH\_SOP\_NOT = (31 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_SUB `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13LARCH_SOP_SUBE>)

enumerator LARCH\_SOP\_SUB = (32 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_SL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12LARCH_SOP_SLE>)

enumerator LARCH\_SOP\_SL = (33 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_SR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12LARCH_SOP_SRE>)

enumerator LARCH\_SOP\_SR = (34 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_ADD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13LARCH_SOP_ADDE>)

enumerator LARCH\_SOP\_ADD = (35 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_AND `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13LARCH_SOP_ANDE>)

enumerator LARCH\_SOP\_AND = (36 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_IF_ELSE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17LARCH_SOP_IF_ELSEE>)

enumerator LARCH\_SOP\_IF\_ELSE = (37 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_POP_32_S_10_5 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE23LARCH_SOP_POP_32_S_10_5E>)

enumerator LARCH\_SOP\_POP\_32\_S\_10\_5 = (38 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_POP_32_U_10_12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24LARCH_SOP_POP_32_U_10_12E>)

enumerator LARCH\_SOP\_POP\_32\_U\_10\_12 = (39 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_POP_32_S_10_12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24LARCH_SOP_POP_32_S_10_12E>)

enumerator LARCH\_SOP\_POP\_32\_S\_10\_12 = (40 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_POP_32_S_10_16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24LARCH_SOP_POP_32_S_10_16E>)

enumerator LARCH\_SOP\_POP\_32\_S\_10\_16 = (41 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_POP_32_S_10_16_S2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE27LARCH_SOP_POP_32_S_10_16_S2E>)

enumerator LARCH\_SOP\_POP\_32\_S\_10\_16\_S2 = (42 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_POP_32_S_5_20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE23LARCH_SOP_POP_32_S_5_20E>)

enumerator LARCH\_SOP\_POP\_32\_S\_5\_20 = (43 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_POP_32_S_0_5_10_16_S2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE31LARCH_SOP_POP_32_S_0_5_10_16_S2E>)

enumerator LARCH\_SOP\_POP\_32\_S\_0\_5\_10\_16\_S2 = (44 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_POP_32_S_0_10_10_16_S2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE32LARCH_SOP_POP_32_S_0_10_10_16_S2E>)

enumerator LARCH\_SOP\_POP\_32\_S\_0\_10\_10\_16\_S2 = (45 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SOP_POP_32_U `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18LARCH_SOP_POP_32_UE>)

enumerator LARCH\_SOP\_POP\_32\_U = (46 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_ADD8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10LARCH_ADD8E>)

enumerator LARCH\_ADD8 = (47 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_ADD16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11LARCH_ADD16E>)

enumerator LARCH\_ADD16 = (48 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_ADD24 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11LARCH_ADD24E>)

enumerator LARCH\_ADD24 = (49 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_ADD32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11LARCH_ADD32E>)

enumerator LARCH\_ADD32 = (50 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_ADD64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11LARCH_ADD64E>)

enumerator LARCH\_ADD64 = (51 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SUB8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10LARCH_SUB8E>)

enumerator LARCH\_SUB8 = (52 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SUB16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11LARCH_SUB16E>)

enumerator LARCH\_SUB16 = (53 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SUB24 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11LARCH_SUB24E>)

enumerator LARCH\_SUB24 = (54 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SUB32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11LARCH_SUB32E>)

enumerator LARCH\_SUB32 = (55 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SUB64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11LARCH_SUB64E>)

enumerator LARCH\_SUB64 = (56 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_GNU_VTINHERIT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19LARCH_GNU_VTINHERITE>)

enumerator LARCH\_GNU\_VTINHERIT = (57 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_GNU_VTENTRY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17LARCH_GNU_VTENTRYE>)

enumerator LARCH\_GNU\_VTENTRY = (58 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_B16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9LARCH_B16E>)

enumerator LARCH\_B16 = (64 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_B21 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9LARCH_B21E>)

enumerator LARCH\_B21 = (65 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_B26 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9LARCH_B26E>)

enumerator LARCH\_B26 = (66 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_ABS_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14LARCH_ABS_HI20E>)

enumerator LARCH\_ABS\_HI20 = (67 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_ABS_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14LARCH_ABS_LO12E>)

enumerator LARCH\_ABS\_LO12 = (68 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_ABS64_LO20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16LARCH_ABS64_LO20E>)

enumerator LARCH\_ABS64\_LO20 = (69 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_ABS64_HI12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16LARCH_ABS64_HI12E>)

enumerator LARCH\_ABS64\_HI12 = (70 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_PCALA_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16LARCH_PCALA_HI20E>)

enumerator LARCH\_PCALA\_HI20 = (71 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_PCALA_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16LARCH_PCALA_LO12E>)

enumerator LARCH\_PCALA\_LO12 = (72 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_PCALA64_LO20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18LARCH_PCALA64_LO20E>)

enumerator LARCH\_PCALA64\_LO20 = (73 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_PCALA64_HI12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18LARCH_PCALA64_HI12E>)

enumerator LARCH\_PCALA64\_HI12 = (74 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_GOT_PC_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17LARCH_GOT_PC_HI20E>)

enumerator LARCH\_GOT\_PC\_HI20 = (75 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_GOT_PC_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17LARCH_GOT_PC_LO12E>)

enumerator LARCH\_GOT\_PC\_LO12 = (76 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_GOT64_PC_LO20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19LARCH_GOT64_PC_LO20E>)

enumerator LARCH\_GOT64\_PC\_LO20 = (77 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_GOT64_PC_HI12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19LARCH_GOT64_PC_HI12E>)

enumerator LARCH\_GOT64\_PC\_HI12 = (78 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_GOT_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14LARCH_GOT_HI20E>)

enumerator LARCH\_GOT\_HI20 = (79 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_GOT_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14LARCH_GOT_LO12E>)

enumerator LARCH\_GOT\_LO12 = (80 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_GOT64_LO20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16LARCH_GOT64_LO20E>)

enumerator LARCH\_GOT64\_LO20 = (81 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_GOT64_HI12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16LARCH_GOT64_HI12E>)

enumerator LARCH\_GOT64\_HI12 = (82 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_LE_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17LARCH_TLS_LE_HI20E>)

enumerator LARCH\_TLS\_LE\_HI20 = (83 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_LE_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17LARCH_TLS_LE_LO12E>)

enumerator LARCH\_TLS\_LE\_LO12 = (84 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_LE64_LO20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19LARCH_TLS_LE64_LO20E>)

enumerator LARCH\_TLS\_LE64\_LO20 = (85 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_LE64_HI12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19LARCH_TLS_LE64_HI12E>)

enumerator LARCH\_TLS\_LE64\_HI12 = (86 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_IE_PC_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20LARCH_TLS_IE_PC_HI20E>)

enumerator LARCH\_TLS\_IE\_PC\_HI20 = (87 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_IE_PC_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20LARCH_TLS_IE_PC_LO12E>)

enumerator LARCH\_TLS\_IE\_PC\_LO12 = (88 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_IE64_PC_LO20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22LARCH_TLS_IE64_PC_LO20E>)

enumerator LARCH\_TLS\_IE64\_PC\_LO20 = (89 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_IE64_PC_HI12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22LARCH_TLS_IE64_PC_HI12E>)

enumerator LARCH\_TLS\_IE64\_PC\_HI12 = (90 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_IE_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17LARCH_TLS_IE_HI20E>)

enumerator LARCH\_TLS\_IE\_HI20 = (91 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_IE_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17LARCH_TLS_IE_LO12E>)

enumerator LARCH\_TLS\_IE\_LO12 = (92 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_IE64_LO20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19LARCH_TLS_IE64_LO20E>)

enumerator LARCH\_TLS\_IE64\_LO20 = (93 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_IE64_HI12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19LARCH_TLS_IE64_HI12E>)

enumerator LARCH\_TLS\_IE64\_HI12 = (94 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_LD_PC_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20LARCH_TLS_LD_PC_HI20E>)

enumerator LARCH\_TLS\_LD\_PC\_HI20 = (95 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_LD_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17LARCH_TLS_LD_HI20E>)

enumerator LARCH\_TLS\_LD\_HI20 = (96 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_GD_PC_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20LARCH_TLS_GD_PC_HI20E>)

enumerator LARCH\_TLS\_GD\_PC\_HI20 = (97 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_GD_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17LARCH_TLS_GD_HI20E>)

enumerator LARCH\_TLS\_GD\_HI20 = (98 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_32_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14LARCH_32_PCRELE>)

enumerator LARCH\_32\_PCREL = (99 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_RELAX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11LARCH_RELAXE>)

enumerator LARCH\_RELAX = (100 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_ALIGN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11LARCH_ALIGNE>)

enumerator LARCH\_ALIGN = (102 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_PCREL20_S2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16LARCH_PCREL20_S2E>)

enumerator LARCH\_PCREL20\_S2 = (103 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_ADD6 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10LARCH_ADD6E>)

enumerator LARCH\_ADD6 = (105 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SUB6 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10LARCH_SUB6E>)

enumerator LARCH\_SUB6 = (106 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_ADD_ULEB128 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17LARCH_ADD_ULEB128E>)

enumerator LARCH\_ADD\_ULEB128 = (107 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_SUB_ULEB128 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17LARCH_SUB_ULEB128E>)

enumerator LARCH\_SUB\_ULEB128 = (108 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_64_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14LARCH_64_PCRELE>)

enumerator LARCH\_64\_PCREL = (109 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_CALL36 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12LARCH_CALL36E>)

enumerator LARCH\_CALL36 = (110 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DESC32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16LARCH_TLS_DESC32E>)

enumerator LARCH\_TLS\_DESC32 = (13 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DESC64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16LARCH_TLS_DESC64E>)

enumerator LARCH\_TLS\_DESC64 = (14 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DESC_PC_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22LARCH_TLS_DESC_PC_HI20E>)

enumerator LARCH\_TLS\_DESC\_PC\_HI20 = (111 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DESC_PC_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22LARCH_TLS_DESC_PC_LO12E>)

enumerator LARCH\_TLS\_DESC\_PC\_LO12 = (112 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DESC64_PC_LO20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24LARCH_TLS_DESC64_PC_LO20E>)

enumerator LARCH\_TLS\_DESC64\_PC\_LO20 = (113 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DESC64_PC_HI12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24LARCH_TLS_DESC64_PC_HI12E>)

enumerator LARCH\_TLS\_DESC64\_PC\_HI12 = (114 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DESC_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19LARCH_TLS_DESC_HI20E>)

enumerator LARCH\_TLS\_DESC\_HI20 = (115 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DESC_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19LARCH_TLS_DESC_LO12E>)

enumerator LARCH\_TLS\_DESC\_LO12 = (116 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DESC64_LO20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21LARCH_TLS_DESC64_LO20E>)

enumerator LARCH\_TLS\_DESC64\_LO20 = (117 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DESC64_HI12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21LARCH_TLS_DESC64_HI12E>)

enumerator LARCH\_TLS\_DESC64\_HI12 = (118 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DESC_LD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17LARCH_TLS_DESC_LDE>)

enumerator LARCH\_TLS\_DESC\_LD = (119 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DESC_CALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19LARCH_TLS_DESC_CALLE>)

enumerator LARCH\_TLS\_DESC\_CALL = (120 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_LE_HI20_R `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19LARCH_TLS_LE_HI20_RE>)

enumerator LARCH\_TLS\_LE\_HI20\_R = (121 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_LE_ADD_R `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18LARCH_TLS_LE_ADD_RE>)

enumerator LARCH\_TLS\_LE\_ADD\_R = (122 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_LE_LO12_R `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19LARCH_TLS_LE_LO12_RE>)

enumerator LARCH\_TLS\_LE\_LO12\_R = (123 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_LD_PCREL20_S2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE23LARCH_TLS_LD_PCREL20_S2E>)

enumerator LARCH\_TLS\_LD\_PCREL20\_S2 = (124 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_GD_PCREL20_S2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE23LARCH_TLS_GD_PCREL20_S2E>)

enumerator LARCH\_TLS\_GD\_PCREL20\_S2 = (125 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` LARCH_TLS_DESC_PCREL20_S2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE25LARCH_TLS_DESC_PCREL20_S2E>)

enumerator LARCH\_TLS\_DESC\_PCREL20\_S2 = (126 | [R\_LARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE> "LIEF::ELF::Relocation::R_LARCH"))

##### [` MIPS_NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9MIPS_NONEE>)

enumerator MIPS\_NONE = (0 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7MIPS_16E>)

enumerator MIPS\_16 = (1 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7MIPS_32E>)

enumerator MIPS\_32 = (2 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_REL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10MIPS_REL32E>)

enumerator MIPS\_REL32 = (3 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_26 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7MIPS_26E>)

enumerator MIPS\_26 = (4 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9MIPS_HI16E>)

enumerator MIPS\_HI16 = (5 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9MIPS_LO16E>)

enumerator MIPS\_LO16 = (6 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_GPREL16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12MIPS_GPREL16E>)

enumerator MIPS\_GPREL16 = (7 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_LITERAL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12MIPS_LITERALE>)

enumerator MIPS\_LITERAL = (8 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_GOT16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10MIPS_GOT16E>)

enumerator MIPS\_GOT16 = (9 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_PC16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9MIPS_PC16E>)

enumerator MIPS\_PC16 = (10 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_CALL16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11MIPS_CALL16E>)

enumerator MIPS\_CALL16 = (11 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_GPREL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12MIPS_GPREL32E>)

enumerator MIPS\_GPREL32 = (12 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_UNUSED1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12MIPS_UNUSED1E>)

enumerator MIPS\_UNUSED1 = (13 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_UNUSED2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12MIPS_UNUSED2E>)

enumerator MIPS\_UNUSED2 = (14 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_UNUSED3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12MIPS_UNUSED3E>)

enumerator MIPS\_UNUSED3 = (15 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_SHIFT5 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11MIPS_SHIFT5E>)

enumerator MIPS\_SHIFT5 = (16 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_SHIFT6 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11MIPS_SHIFT6E>)

enumerator MIPS\_SHIFT6 = (17 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7MIPS_64E>)

enumerator MIPS\_64 = (18 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_GOT_DISP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13MIPS_GOT_DISPE>)

enumerator MIPS\_GOT\_DISP = (19 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_GOT_PAGE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13MIPS_GOT_PAGEE>)

enumerator MIPS\_GOT\_PAGE = (20 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_GOT_OFST `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13MIPS_GOT_OFSTE>)

enumerator MIPS\_GOT\_OFST = (21 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_GOT_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13MIPS_GOT_HI16E>)

enumerator MIPS\_GOT\_HI16 = (22 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_GOT_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13MIPS_GOT_LO16E>)

enumerator MIPS\_GOT\_LO16 = (23 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_SUB `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8MIPS_SUBE>)

enumerator MIPS\_SUB = (24 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_INSERT_A `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13MIPS_INSERT_AE>)

enumerator MIPS\_INSERT\_A = (25 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_INSERT_B `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13MIPS_INSERT_BE>)

enumerator MIPS\_INSERT\_B = (26 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_DELETE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11MIPS_DELETEE>)

enumerator MIPS\_DELETE = (27 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_HIGHER `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11MIPS_HIGHERE>)

enumerator MIPS\_HIGHER = (28 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_HIGHEST `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12MIPS_HIGHESTE>)

enumerator MIPS\_HIGHEST = (29 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_CALL_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14MIPS_CALL_HI16E>)

enumerator MIPS\_CALL\_HI16 = (30 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_CALL_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14MIPS_CALL_LO16E>)

enumerator MIPS\_CALL\_LO16 = (31 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_SCN_DISP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13MIPS_SCN_DISPE>)

enumerator MIPS\_SCN\_DISP = (32 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_REL16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10MIPS_REL16E>)

enumerator MIPS\_REL16 = (33 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_ADD_IMMEDIATE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18MIPS_ADD_IMMEDIATEE>)

enumerator MIPS\_ADD\_IMMEDIATE = (34 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_PJUMP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10MIPS_PJUMPE>)

enumerator MIPS\_PJUMP = (35 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_RELGOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11MIPS_RELGOTE>)

enumerator MIPS\_RELGOT = (36 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_JALR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9MIPS_JALRE>)

enumerator MIPS\_JALR = (37 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_TLS_DTPMOD32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17MIPS_TLS_DTPMOD32E>)

enumerator MIPS\_TLS\_DTPMOD32 = (38 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_TLS_DTPREL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17MIPS_TLS_DTPREL32E>)

enumerator MIPS\_TLS\_DTPREL32 = (39 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_TLS_DTPMOD64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17MIPS_TLS_DTPMOD64E>)

enumerator MIPS\_TLS\_DTPMOD64 = (40 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_TLS_DTPREL64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17MIPS_TLS_DTPREL64E>)

enumerator MIPS\_TLS\_DTPREL64 = (41 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_TLS_GD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11MIPS_TLS_GDE>)

enumerator MIPS\_TLS\_GD = (42 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_TLS_LDM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12MIPS_TLS_LDME>)

enumerator MIPS\_TLS\_LDM = (43 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_TLS_DTPREL_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20MIPS_TLS_DTPREL_HI16E>)

enumerator MIPS\_TLS\_DTPREL\_HI16 = (44 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_TLS_DTPREL_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20MIPS_TLS_DTPREL_LO16E>)

enumerator MIPS\_TLS\_DTPREL\_LO16 = (45 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_TLS_GOTTPREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17MIPS_TLS_GOTTPRELE>)

enumerator MIPS\_TLS\_GOTTPREL = (46 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_TLS_TPREL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16MIPS_TLS_TPREL32E>)

enumerator MIPS\_TLS\_TPREL32 = (47 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_TLS_TPREL64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16MIPS_TLS_TPREL64E>)

enumerator MIPS\_TLS\_TPREL64 = (48 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_TLS_TPREL_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19MIPS_TLS_TPREL_HI16E>)

enumerator MIPS\_TLS\_TPREL\_HI16 = (49 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_TLS_TPREL_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19MIPS_TLS_TPREL_LO16E>)

enumerator MIPS\_TLS\_TPREL\_LO16 = (50 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13MIPS_GLOB_DATE>)

enumerator MIPS\_GLOB\_DAT = (51 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_PC21_S2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12MIPS_PC21_S2E>)

enumerator MIPS\_PC21\_S2 = (60 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_PC26_S2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12MIPS_PC26_S2E>)

enumerator MIPS\_PC26\_S2 = (61 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_PC18_S3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12MIPS_PC18_S3E>)

enumerator MIPS\_PC18\_S3 = (62 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_PC19_S2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12MIPS_PC19_S2E>)

enumerator MIPS\_PC19\_S2 = (63 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_PCHI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11MIPS_PCHI16E>)

enumerator MIPS\_PCHI16 = (64 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_PCLO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11MIPS_PCLO16E>)

enumerator MIPS\_PCLO16 = (65 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS16_26 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9MIPS16_26E>)

enumerator MIPS16\_26 = (100 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS16_GPREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12MIPS16_GPRELE>)

enumerator MIPS16\_GPREL = (101 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS16_GOT16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12MIPS16_GOT16E>)

enumerator MIPS16\_GOT16 = (102 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS16_CALL16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13MIPS16_CALL16E>)

enumerator MIPS16\_CALL16 = (103 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS16_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11MIPS16_HI16E>)

enumerator MIPS16\_HI16 = (104 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS16_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11MIPS16_LO16E>)

enumerator MIPS16\_LO16 = (105 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS16_TLS_GD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13MIPS16_TLS_GDE>)

enumerator MIPS16\_TLS\_GD = (106 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS16_TLS_LDM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14MIPS16_TLS_LDME>)

enumerator MIPS16\_TLS\_LDM = (107 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS16_TLS_DTPREL_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22MIPS16_TLS_DTPREL_HI16E>)

enumerator MIPS16\_TLS\_DTPREL\_HI16 = (108 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS16_TLS_DTPREL_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22MIPS16_TLS_DTPREL_LO16E>)

enumerator MIPS16\_TLS\_DTPREL\_LO16 = (109 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS16_TLS_GOTTPREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19MIPS16_TLS_GOTTPRELE>)

enumerator MIPS16\_TLS\_GOTTPREL = (110 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS16_TLS_TPREL_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21MIPS16_TLS_TPREL_HI16E>)

enumerator MIPS16\_TLS\_TPREL\_HI16 = (111 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS16_TLS_TPREL_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21MIPS16_TLS_TPREL_LO16E>)

enumerator MIPS16\_TLS\_TPREL\_LO16 = (112 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_COPY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9MIPS_COPYE>)

enumerator MIPS\_COPY = (126 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_JUMP_SLOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14MIPS_JUMP_SLOTE>)

enumerator MIPS\_JUMP\_SLOT = (127 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_26_S1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15MICROMIPS_26_S1E>)

enumerator MICROMIPS\_26\_S1 = (133 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14MICROMIPS_HI16E>)

enumerator MICROMIPS\_HI16 = (134 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14MICROMIPS_LO16E>)

enumerator MICROMIPS\_LO16 = (135 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_GPREL16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17MICROMIPS_GPREL16E>)

enumerator MICROMIPS\_GPREL16 = (136 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_LITERAL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17MICROMIPS_LITERALE>)

enumerator MICROMIPS\_LITERAL = (137 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_GOT16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15MICROMIPS_GOT16E>)

enumerator MICROMIPS\_GOT16 = (138 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_PC7_S1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16MICROMIPS_PC7_S1E>)

enumerator MICROMIPS\_PC7\_S1 = (139 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_PC10_S1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17MICROMIPS_PC10_S1E>)

enumerator MICROMIPS\_PC10\_S1 = (140 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_PC16_S1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17MICROMIPS_PC16_S1E>)

enumerator MICROMIPS\_PC16\_S1 = (141 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_CALL16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16MICROMIPS_CALL16E>)

enumerator MICROMIPS\_CALL16 = (142 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_GOT_DISP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18MICROMIPS_GOT_DISPE>)

enumerator MICROMIPS\_GOT\_DISP = (145 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_GOT_PAGE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18MICROMIPS_GOT_PAGEE>)

enumerator MICROMIPS\_GOT\_PAGE = (146 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_GOT_OFST `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18MICROMIPS_GOT_OFSTE>)

enumerator MICROMIPS\_GOT\_OFST = (147 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_GOT_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18MICROMIPS_GOT_HI16E>)

enumerator MICROMIPS\_GOT\_HI16 = (148 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_GOT_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18MICROMIPS_GOT_LO16E>)

enumerator MICROMIPS\_GOT\_LO16 = (149 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_SUB `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13MICROMIPS_SUBE>)

enumerator MICROMIPS\_SUB = (150 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_HIGHER `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16MICROMIPS_HIGHERE>)

enumerator MICROMIPS\_HIGHER = (151 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_HIGHEST `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17MICROMIPS_HIGHESTE>)

enumerator MICROMIPS\_HIGHEST = (152 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_CALL_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19MICROMIPS_CALL_HI16E>)

enumerator MICROMIPS\_CALL\_HI16 = (153 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_CALL_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19MICROMIPS_CALL_LO16E>)

enumerator MICROMIPS\_CALL\_LO16 = (154 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_SCN_DISP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18MICROMIPS_SCN_DISPE>)

enumerator MICROMIPS\_SCN\_DISP = (155 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_JALR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14MICROMIPS_JALRE>)

enumerator MICROMIPS\_JALR = (156 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_HI0_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18MICROMIPS_HI0_LO16E>)

enumerator MICROMIPS\_HI0\_LO16 = (157 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_TLS_GD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16MICROMIPS_TLS_GDE>)

enumerator MICROMIPS\_TLS\_GD = (162 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_TLS_LDM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17MICROMIPS_TLS_LDME>)

enumerator MICROMIPS\_TLS\_LDM = (163 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_TLS_DTPREL_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE25MICROMIPS_TLS_DTPREL_HI16E>)

enumerator MICROMIPS\_TLS\_DTPREL\_HI16 = (164 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_TLS_DTPREL_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE25MICROMIPS_TLS_DTPREL_LO16E>)

enumerator MICROMIPS\_TLS\_DTPREL\_LO16 = (165 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_TLS_GOTTPREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22MICROMIPS_TLS_GOTTPRELE>)

enumerator MICROMIPS\_TLS\_GOTTPREL = (166 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_TLS_TPREL_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24MICROMIPS_TLS_TPREL_HI16E>)

enumerator MICROMIPS\_TLS\_TPREL\_HI16 = (169 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_TLS_TPREL_LO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24MICROMIPS_TLS_TPREL_LO16E>)

enumerator MICROMIPS\_TLS\_TPREL\_LO16 = (170 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_GPREL7_S2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19MICROMIPS_GPREL7_S2E>)

enumerator MICROMIPS\_GPREL7\_S2 = (172 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_PC23_S2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17MICROMIPS_PC23_S2E>)

enumerator MICROMIPS\_PC23\_S2 = (173 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_PC21_S2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17MICROMIPS_PC21_S2E>)

enumerator MICROMIPS\_PC21\_S2 = (174 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_PC26_S2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17MICROMIPS_PC26_S2E>)

enumerator MICROMIPS\_PC26\_S2 = (175 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_PC18_S3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17MICROMIPS_PC18_S3E>)

enumerator MICROMIPS\_PC18\_S3 = (176 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MICROMIPS_PC19_S2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17MICROMIPS_PC19_S2E>)

enumerator MICROMIPS\_PC19\_S2 = (177 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_NUM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8MIPS_NUME>)

enumerator MIPS\_NUM = (218 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_PC32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9MIPS_PC32E>)

enumerator MIPS\_PC32 = (248 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` MIPS_EH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7MIPS_EHE>)

enumerator MIPS\_EH = (249 | [R\_MIPS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE> "LIEF::ELF::Relocation::R_MIPS"))

##### [` PPC_NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8PPC_NONEE>)

enumerator PPC\_NONE = (0 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_ADDR32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10PPC_ADDR32E>)

enumerator PPC\_ADDR32 = (1 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_ADDR24 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10PPC_ADDR24E>)

enumerator PPC\_ADDR24 = (2 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_ADDR16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10PPC_ADDR16E>)

enumerator PPC\_ADDR16 = (3 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_ADDR16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13PPC_ADDR16_LOE>)

enumerator PPC\_ADDR16\_LO = (4 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_ADDR16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13PPC_ADDR16_HIE>)

enumerator PPC\_ADDR16\_HI = (5 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_ADDR16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13PPC_ADDR16_HAE>)

enumerator PPC\_ADDR16\_HA = (6 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_ADDR14 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10PPC_ADDR14E>)

enumerator PPC\_ADDR14 = (7 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_ADDR14_BRTAKEN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18PPC_ADDR14_BRTAKENE>)

enumerator PPC\_ADDR14\_BRTAKEN = (8 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_ADDR14_BRNTAKEN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19PPC_ADDR14_BRNTAKENE>)

enumerator PPC\_ADDR14\_BRNTAKEN = (9 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_REL24 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9PPC_REL24E>)

enumerator PPC\_REL24 = (10 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_REL14 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9PPC_REL14E>)

enumerator PPC\_REL14 = (11 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_REL14_BRTAKEN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17PPC_REL14_BRTAKENE>)

enumerator PPC\_REL14\_BRTAKEN = (12 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_REL14_BRNTAKEN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18PPC_REL14_BRNTAKENE>)

enumerator PPC\_REL14\_BRNTAKEN = (13 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9PPC_GOT16E>)

enumerator PPC\_GOT16 = (14 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC_GOT16_LOE>)

enumerator PPC\_GOT16\_LO = (15 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC_GOT16_HIE>)

enumerator PPC\_GOT16\_HI = (16 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC_GOT16_HAE>)

enumerator PPC\_GOT16\_HA = (17 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_PLTREL24 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC_PLTREL24E>)

enumerator PPC\_PLTREL24 = (18 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_JMP_SLOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC_JMP_SLOTE>)

enumerator PPC\_JMP\_SLOT = (21 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_RELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC_RELATIVEE>)

enumerator PPC\_RELATIVE = (22 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_LOCAL24PC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13PPC_LOCAL24PCE>)

enumerator PPC\_LOCAL24PC = (23 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_REL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9PPC_REL32E>)

enumerator PPC\_REL32 = (26 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_TLS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7PPC_TLSE>)

enumerator PPC\_TLS = (67 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_DTPMOD32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC_DTPMOD32E>)

enumerator PPC\_DTPMOD32 = (68 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_TPREL16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11PPC_TPREL16E>)

enumerator PPC\_TPREL16 = (69 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_TPREL16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC_TPREL16_LOE>)

enumerator PPC\_TPREL16\_LO = (70 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_TPREL16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC_TPREL16_HIE>)

enumerator PPC\_TPREL16\_HI = (71 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_TPREL16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC_TPREL16_HAE>)

enumerator PPC\_TPREL16\_HA = (72 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_TPREL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11PPC_TPREL32E>)

enumerator PPC\_TPREL32 = (73 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_DTPREL16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC_DTPREL16E>)

enumerator PPC\_DTPREL16 = (74 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_DTPREL16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15PPC_DTPREL16_LOE>)

enumerator PPC\_DTPREL16\_LO = (75 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_DTPREL16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15PPC_DTPREL16_HIE>)

enumerator PPC\_DTPREL16\_HI = (76 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_DTPREL16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15PPC_DTPREL16_HAE>)

enumerator PPC\_DTPREL16\_HA = (77 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_DTPREL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC_DTPREL32E>)

enumerator PPC\_DTPREL32 = (78 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT_TLSGD16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15PPC_GOT_TLSGD16E>)

enumerator PPC\_GOT\_TLSGD16 = (79 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT_TLSGD16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18PPC_GOT_TLSGD16_LOE>)

enumerator PPC\_GOT\_TLSGD16\_LO = (80 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT_TLSGD16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18PPC_GOT_TLSGD16_HIE>)

enumerator PPC\_GOT\_TLSGD16\_HI = (81 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT_TLSGD16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18PPC_GOT_TLSGD16_HAE>)

enumerator PPC\_GOT\_TLSGD16\_HA = (82 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT_TLSLD16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15PPC_GOT_TLSLD16E>)

enumerator PPC\_GOT\_TLSLD16 = (83 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT_TLSLD16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18PPC_GOT_TLSLD16_LOE>)

enumerator PPC\_GOT\_TLSLD16\_LO = (84 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT_TLSLD16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18PPC_GOT_TLSLD16_HIE>)

enumerator PPC\_GOT\_TLSLD16\_HI = (85 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT_TLSLD16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18PPC_GOT_TLSLD16_HAE>)

enumerator PPC\_GOT\_TLSLD16\_HA = (86 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT_TPREL16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15PPC_GOT_TPREL16E>)

enumerator PPC\_GOT\_TPREL16 = (87 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT_TPREL16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18PPC_GOT_TPREL16_LOE>)

enumerator PPC\_GOT\_TPREL16\_LO = (88 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT_TPREL16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18PPC_GOT_TPREL16_HIE>)

enumerator PPC\_GOT\_TPREL16\_HI = (89 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT_TPREL16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18PPC_GOT_TPREL16_HAE>)

enumerator PPC\_GOT\_TPREL16\_HA = (90 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT_DTPREL16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16PPC_GOT_DTPREL16E>)

enumerator PPC\_GOT\_DTPREL16 = (91 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT_DTPREL16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19PPC_GOT_DTPREL16_LOE>)

enumerator PPC\_GOT\_DTPREL16\_LO = (92 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT_DTPREL16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19PPC_GOT_DTPREL16_HIE>)

enumerator PPC\_GOT\_DTPREL16\_HI = (93 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_GOT_DTPREL16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19PPC_GOT_DTPREL16_HAE>)

enumerator PPC\_GOT\_DTPREL16\_HA = (94 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_TLSGD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9PPC_TLSGDE>)

enumerator PPC\_TLSGD = (95 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_TLSLD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9PPC_TLSLDE>)

enumerator PPC\_TLSLD = (96 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_REL16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9PPC_REL16E>)

enumerator PPC\_REL16 = (249 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_REL16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC_REL16_LOE>)

enumerator PPC\_REL16\_LO = (250 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_REL16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC_REL16_HIE>)

enumerator PPC\_REL16\_HI = (251 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC_REL16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC_REL16_HAE>)

enumerator PPC\_REL16\_HA = (252 | [R\_PPC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE> "LIEF::ELF::Relocation::R_PPC"))

##### [` PPC64_NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10PPC64_NONEE>)

enumerator PPC64\_NONE = (0 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_ADDR32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC64_ADDR32E>)

enumerator PPC64\_ADDR32 = (1 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_ADDR24 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC64_ADDR24E>)

enumerator PPC64\_ADDR24 = (2 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_ADDR16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC64_ADDR16E>)

enumerator PPC64\_ADDR16 = (3 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_ADDR16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15PPC64_ADDR16_LOE>)

enumerator PPC64\_ADDR16\_LO = (4 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_ADDR16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15PPC64_ADDR16_HIE>)

enumerator PPC64\_ADDR16\_HI = (5 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_ADDR16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15PPC64_ADDR16_HAE>)

enumerator PPC64\_ADDR16\_HA = (6 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_ADDR14 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC64_ADDR14E>)

enumerator PPC64\_ADDR14 = (7 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_ADDR14_BRTAKEN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20PPC64_ADDR14_BRTAKENE>)

enumerator PPC64\_ADDR14\_BRTAKEN = (8 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_ADDR14_BRNTAKEN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21PPC64_ADDR14_BRNTAKENE>)

enumerator PPC64\_ADDR14\_BRNTAKEN = (9 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_REL24 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11PPC64_REL24E>)

enumerator PPC64\_REL24 = (10 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_REL14 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11PPC64_REL14E>)

enumerator PPC64\_REL14 = (11 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_REL14_BRTAKEN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19PPC64_REL14_BRTAKENE>)

enumerator PPC64\_REL14\_BRTAKEN = (12 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_REL14_BRNTAKEN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20PPC64_REL14_BRNTAKENE>)

enumerator PPC64\_REL14\_BRNTAKEN = (13 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11PPC64_GOT16E>)

enumerator PPC64\_GOT16 = (14 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC64_GOT16_LOE>)

enumerator PPC64\_GOT16\_LO = (15 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC64_GOT16_HIE>)

enumerator PPC64\_GOT16\_HI = (16 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC64_GOT16_HAE>)

enumerator PPC64\_GOT16\_HA = (17 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_JMP_SLOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC64_JMP_SLOTE>)

enumerator PPC64\_JMP\_SLOT = (21 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_RELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC64_RELATIVEE>)

enumerator PPC64\_RELATIVE = (22 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_REL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11PPC64_REL32E>)

enumerator PPC64\_REL32 = (26 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_ADDR64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12PPC64_ADDR64E>)

enumerator PPC64\_ADDR64 = (38 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_ADDR16_HIGHER `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19PPC64_ADDR16_HIGHERE>)

enumerator PPC64\_ADDR16\_HIGHER = (39 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_ADDR16_HIGHERA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20PPC64_ADDR16_HIGHERAE>)

enumerator PPC64\_ADDR16\_HIGHERA = (40 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_ADDR16_HIGHEST `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20PPC64_ADDR16_HIGHESTE>)

enumerator PPC64\_ADDR16\_HIGHEST = (41 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_ADDR16_HIGHESTA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21PPC64_ADDR16_HIGHESTAE>)

enumerator PPC64\_ADDR16\_HIGHESTA = (42 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_REL64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11PPC64_REL64E>)

enumerator PPC64\_REL64 = (44 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TOC16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11PPC64_TOC16E>)

enumerator PPC64\_TOC16 = (47 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TOC16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC64_TOC16_LOE>)

enumerator PPC64\_TOC16\_LO = (48 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TOC16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC64_TOC16_HIE>)

enumerator PPC64\_TOC16\_HI = (49 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TOC16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC64_TOC16_HAE>)

enumerator PPC64\_TOC16\_HA = (50 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TOC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9PPC64_TOCE>)

enumerator PPC64\_TOC = (51 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_ADDR16_DS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15PPC64_ADDR16_DSE>)

enumerator PPC64\_ADDR16\_DS = (56 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_ADDR16_LO_DS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18PPC64_ADDR16_LO_DSE>)

enumerator PPC64\_ADDR16\_LO\_DS = (57 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT16_DS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC64_GOT16_DSE>)

enumerator PPC64\_GOT16\_DS = (58 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT16_LO_DS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17PPC64_GOT16_LO_DSE>)

enumerator PPC64\_GOT16\_LO\_DS = (59 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TOC16_DS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC64_TOC16_DSE>)

enumerator PPC64\_TOC16\_DS = (63 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TOC16_LO_DS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17PPC64_TOC16_LO_DSE>)

enumerator PPC64\_TOC16\_LO\_DS = (64 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TLS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9PPC64_TLSE>)

enumerator PPC64\_TLS = (67 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_DTPMOD64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC64_DTPMOD64E>)

enumerator PPC64\_DTPMOD64 = (68 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TPREL16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13PPC64_TPREL16E>)

enumerator PPC64\_TPREL16 = (69 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TPREL16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16PPC64_TPREL16_LOE>)

enumerator PPC64\_TPREL16\_LO = (70 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TPREL16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16PPC64_TPREL16_HIE>)

enumerator PPC64\_TPREL16\_HI = (71 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TPREL16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16PPC64_TPREL16_HAE>)

enumerator PPC64\_TPREL16\_HA = (72 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TPREL64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13PPC64_TPREL64E>)

enumerator PPC64\_TPREL64 = (73 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_DTPREL16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC64_DTPREL16E>)

enumerator PPC64\_DTPREL16 = (74 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_DTPREL16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17PPC64_DTPREL16_LOE>)

enumerator PPC64\_DTPREL16\_LO = (75 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_DTPREL16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17PPC64_DTPREL16_HIE>)

enumerator PPC64\_DTPREL16\_HI = (76 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_DTPREL16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17PPC64_DTPREL16_HAE>)

enumerator PPC64\_DTPREL16\_HA = (77 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_DTPREL64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC64_DTPREL64E>)

enumerator PPC64\_DTPREL64 = (78 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT_TLSGD16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17PPC64_GOT_TLSGD16E>)

enumerator PPC64\_GOT\_TLSGD16 = (79 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT_TLSGD16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20PPC64_GOT_TLSGD16_LOE>)

enumerator PPC64\_GOT\_TLSGD16\_LO = (80 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT_TLSGD16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20PPC64_GOT_TLSGD16_HIE>)

enumerator PPC64\_GOT\_TLSGD16\_HI = (81 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT_TLSGD16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20PPC64_GOT_TLSGD16_HAE>)

enumerator PPC64\_GOT\_TLSGD16\_HA = (82 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT_TLSLD16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17PPC64_GOT_TLSLD16E>)

enumerator PPC64\_GOT\_TLSLD16 = (83 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT_TLSLD16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20PPC64_GOT_TLSLD16_LOE>)

enumerator PPC64\_GOT\_TLSLD16\_LO = (84 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT_TLSLD16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20PPC64_GOT_TLSLD16_HIE>)

enumerator PPC64\_GOT\_TLSLD16\_HI = (85 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT_TLSLD16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20PPC64_GOT_TLSLD16_HAE>)

enumerator PPC64\_GOT\_TLSLD16\_HA = (86 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT_TPREL16_DS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20PPC64_GOT_TPREL16_DSE>)

enumerator PPC64\_GOT\_TPREL16\_DS = (87 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT_TPREL16_LO_DS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE23PPC64_GOT_TPREL16_LO_DSE>)

enumerator PPC64\_GOT\_TPREL16\_LO\_DS = (88 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT_TPREL16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20PPC64_GOT_TPREL16_HIE>)

enumerator PPC64\_GOT\_TPREL16\_HI = (89 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT_TPREL16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20PPC64_GOT_TPREL16_HAE>)

enumerator PPC64\_GOT\_TPREL16\_HA = (90 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT_DTPREL16_DS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21PPC64_GOT_DTPREL16_DSE>)

enumerator PPC64\_GOT\_DTPREL16\_DS = (91 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT_DTPREL16_LO_DS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE24PPC64_GOT_DTPREL16_LO_DSE>)

enumerator PPC64\_GOT\_DTPREL16\_LO\_DS = (92 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT_DTPREL16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21PPC64_GOT_DTPREL16_HIE>)

enumerator PPC64\_GOT\_DTPREL16\_HI = (93 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_GOT_DTPREL16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21PPC64_GOT_DTPREL16_HAE>)

enumerator PPC64\_GOT\_DTPREL16\_HA = (94 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TPREL16_DS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16PPC64_TPREL16_DSE>)

enumerator PPC64\_TPREL16\_DS = (95 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TPREL16_LO_DS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19PPC64_TPREL16_LO_DSE>)

enumerator PPC64\_TPREL16\_LO\_DS = (96 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TPREL16_HIGHER `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20PPC64_TPREL16_HIGHERE>)

enumerator PPC64\_TPREL16\_HIGHER = (97 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TPREL16_HIGHERA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21PPC64_TPREL16_HIGHERAE>)

enumerator PPC64\_TPREL16\_HIGHERA = (98 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TPREL16_HIGHEST `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21PPC64_TPREL16_HIGHESTE>)

enumerator PPC64\_TPREL16\_HIGHEST = (99 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TPREL16_HIGHESTA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22PPC64_TPREL16_HIGHESTAE>)

enumerator PPC64\_TPREL16\_HIGHESTA = (100 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_DTPREL16_DS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17PPC64_DTPREL16_DSE>)

enumerator PPC64\_DTPREL16\_DS = (101 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_DTPREL16_LO_DS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20PPC64_DTPREL16_LO_DSE>)

enumerator PPC64\_DTPREL16\_LO\_DS = (102 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_DTPREL16_HIGHER `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21PPC64_DTPREL16_HIGHERE>)

enumerator PPC64\_DTPREL16\_HIGHER = (103 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_DTPREL16_HIGHERA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22PPC64_DTPREL16_HIGHERAE>)

enumerator PPC64\_DTPREL16\_HIGHERA = (104 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_DTPREL16_HIGHEST `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22PPC64_DTPREL16_HIGHESTE>)

enumerator PPC64\_DTPREL16\_HIGHEST = (105 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_DTPREL16_HIGHESTA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE23PPC64_DTPREL16_HIGHESTAE>)

enumerator PPC64\_DTPREL16\_HIGHESTA = (106 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TLSGD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11PPC64_TLSGDE>)

enumerator PPC64\_TLSGD = (107 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_TLSLD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11PPC64_TLSLDE>)

enumerator PPC64\_TLSLD = (108 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_REL16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11PPC64_REL16E>)

enumerator PPC64\_REL16 = (249 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_REL16_LO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC64_REL16_LOE>)

enumerator PPC64\_REL16\_LO = (250 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_REL16_HI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC64_REL16_HIE>)

enumerator PPC64\_REL16\_HI = (251 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` PPC64_REL16_HA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14PPC64_REL16_HAE>)

enumerator PPC64\_REL16\_HA = (252 | [R\_PPC64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E> "LIEF::ELF::Relocation::R_PPC64"))

##### [` SPARC_NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SPARC_NONEE>)

enumerator SPARC\_NONE = (0 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SPARC_8E>)

enumerator SPARC\_8 = (1 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SPARC_16E>)

enumerator SPARC\_16 = (2 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SPARC_32E>)

enumerator SPARC\_32 = (3 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_DISP8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SPARC_DISP8E>)

enumerator SPARC\_DISP8 = (4 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_DISP16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12SPARC_DISP16E>)

enumerator SPARC\_DISP16 = (5 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_DISP32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12SPARC_DISP32E>)

enumerator SPARC\_DISP32 = (6 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_WDISP30 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SPARC_WDISP30E>)

enumerator SPARC\_WDISP30 = (7 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_WDISP22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SPARC_WDISP22E>)

enumerator SPARC\_WDISP22 = (8 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_HI22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SPARC_HI22E>)

enumerator SPARC\_HI22 = (9 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SPARC_22E>)

enumerator SPARC\_22 = (10 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_13 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SPARC_13E>)

enumerator SPARC\_13 = (11 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_LO10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SPARC_LO10E>)

enumerator SPARC\_LO10 = (12 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_GOT10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SPARC_GOT10E>)

enumerator SPARC\_GOT10 = (13 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_GOT13 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SPARC_GOT13E>)

enumerator SPARC\_GOT13 = (14 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_GOT22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SPARC_GOT22E>)

enumerator SPARC\_GOT22 = (15 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_PC10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SPARC_PC10E>)

enumerator SPARC\_PC10 = (16 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_PC22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SPARC_PC22E>)

enumerator SPARC\_PC22 = (17 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_WPLT30 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12SPARC_WPLT30E>)

enumerator SPARC\_WPLT30 = (18 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_COPY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SPARC_COPYE>)

enumerator SPARC\_COPY = (19 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SPARC_GLOB_DATE>)

enumerator SPARC\_GLOB\_DAT = (20 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_JMP_SLOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SPARC_JMP_SLOTE>)

enumerator SPARC\_JMP\_SLOT = (21 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_RELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SPARC_RELATIVEE>)

enumerator SPARC\_RELATIVE = (22 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_UA32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SPARC_UA32E>)

enumerator SPARC\_UA32 = (23 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_PLT32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SPARC_PLT32E>)

enumerator SPARC\_PLT32 = (24 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_HIPLT22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SPARC_HIPLT22E>)

enumerator SPARC\_HIPLT22 = (25 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_LOPLT10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SPARC_LOPLT10E>)

enumerator SPARC\_LOPLT10 = (26 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_PCPLT32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SPARC_PCPLT32E>)

enumerator SPARC\_PCPLT32 = (27 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_PCPLT22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SPARC_PCPLT22E>)

enumerator SPARC\_PCPLT22 = (28 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_PCPLT10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SPARC_PCPLT10E>)

enumerator SPARC\_PCPLT10 = (29 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SPARC_10E>)

enumerator SPARC\_10 = (30 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_11 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SPARC_11E>)

enumerator SPARC\_11 = (31 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SPARC_64E>)

enumerator SPARC\_64 = (32 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_OLO10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SPARC_OLO10E>)

enumerator SPARC\_OLO10 = (33 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_HH22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SPARC_HH22E>)

enumerator SPARC\_HH22 = (34 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_HM10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SPARC_HM10E>)

enumerator SPARC\_HM10 = (35 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_LM22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SPARC_LM22E>)

enumerator SPARC\_LM22 = (36 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_PC_HH22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SPARC_PC_HH22E>)

enumerator SPARC\_PC\_HH22 = (37 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_PC_HM10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SPARC_PC_HM10E>)

enumerator SPARC\_PC\_HM10 = (38 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_PC_LM22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SPARC_PC_LM22E>)

enumerator SPARC\_PC\_LM22 = (39 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_WDISP16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SPARC_WDISP16E>)

enumerator SPARC\_WDISP16 = (40 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_WDISP19 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SPARC_WDISP19E>)

enumerator SPARC\_WDISP19 = (41 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_7 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SPARC_7E>)

enumerator SPARC\_7 = (43 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_5 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SPARC_5E>)

enumerator SPARC\_5 = (44 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_6 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SPARC_6E>)

enumerator SPARC\_6 = (45 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_DISP64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12SPARC_DISP64E>)

enumerator SPARC\_DISP64 = (46 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_PLT64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SPARC_PLT64E>)

enumerator SPARC\_PLT64 = (47 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_HIX22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SPARC_HIX22E>)

enumerator SPARC\_HIX22 = (48 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_LOX10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SPARC_LOX10E>)

enumerator SPARC\_LOX10 = (49 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_H44 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SPARC_H44E>)

enumerator SPARC\_H44 = (50 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_M44 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SPARC_M44E>)

enumerator SPARC\_M44 = (51 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_L44 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SPARC_L44E>)

enumerator SPARC\_L44 = (52 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_REGISTER `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SPARC_REGISTERE>)

enumerator SPARC\_REGISTER = (53 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_UA64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SPARC_UA64E>)

enumerator SPARC\_UA64 = (54 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_UA16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SPARC_UA16E>)

enumerator SPARC\_UA16 = (55 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_GD_HI22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17SPARC_TLS_GD_HI22E>)

enumerator SPARC\_TLS\_GD\_HI22 = (56 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_GD_LO10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17SPARC_TLS_GD_LO10E>)

enumerator SPARC\_TLS\_GD\_LO10 = (57 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_GD_ADD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16SPARC_TLS_GD_ADDE>)

enumerator SPARC\_TLS\_GD\_ADD = (58 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_GD_CALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17SPARC_TLS_GD_CALLE>)

enumerator SPARC\_TLS\_GD\_CALL = (59 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_LDM_HI22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18SPARC_TLS_LDM_HI22E>)

enumerator SPARC\_TLS\_LDM\_HI22 = (60 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_LDM_LO10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18SPARC_TLS_LDM_LO10E>)

enumerator SPARC\_TLS\_LDM\_LO10 = (61 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_LDM_ADD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17SPARC_TLS_LDM_ADDE>)

enumerator SPARC\_TLS\_LDM\_ADD = (62 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_LDM_CALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18SPARC_TLS_LDM_CALLE>)

enumerator SPARC\_TLS\_LDM\_CALL = (63 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_LDO_HIX22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19SPARC_TLS_LDO_HIX22E>)

enumerator SPARC\_TLS\_LDO\_HIX22 = (64 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_LDO_LOX10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19SPARC_TLS_LDO_LOX10E>)

enumerator SPARC\_TLS\_LDO\_LOX10 = (65 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_LDO_ADD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17SPARC_TLS_LDO_ADDE>)

enumerator SPARC\_TLS\_LDO\_ADD = (66 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_IE_HI22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17SPARC_TLS_IE_HI22E>)

enumerator SPARC\_TLS\_IE\_HI22 = (67 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_IE_LO10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17SPARC_TLS_IE_LO10E>)

enumerator SPARC\_TLS\_IE\_LO10 = (68 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_IE_LD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15SPARC_TLS_IE_LDE>)

enumerator SPARC\_TLS\_IE\_LD = (69 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_IE_LDX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16SPARC_TLS_IE_LDXE>)

enumerator SPARC\_TLS\_IE\_LDX = (70 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_IE_ADD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16SPARC_TLS_IE_ADDE>)

enumerator SPARC\_TLS\_IE\_ADD = (71 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_LE_HIX22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18SPARC_TLS_LE_HIX22E>)

enumerator SPARC\_TLS\_LE\_HIX22 = (72 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_LE_LOX10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18SPARC_TLS_LE_LOX10E>)

enumerator SPARC\_TLS\_LE\_LOX10 = (73 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_DTPMOD32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18SPARC_TLS_DTPMOD32E>)

enumerator SPARC\_TLS\_DTPMOD32 = (74 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_DTPMOD64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18SPARC_TLS_DTPMOD64E>)

enumerator SPARC\_TLS\_DTPMOD64 = (75 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_DTPOFF32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18SPARC_TLS_DTPOFF32E>)

enumerator SPARC\_TLS\_DTPOFF32 = (76 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_DTPOFF64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18SPARC_TLS_DTPOFF64E>)

enumerator SPARC\_TLS\_DTPOFF64 = (77 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_TPOFF32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17SPARC_TLS_TPOFF32E>)

enumerator SPARC\_TLS\_TPOFF32 = (78 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_TLS_TPOFF64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17SPARC_TLS_TPOFF64E>)

enumerator SPARC\_TLS\_TPOFF64 = (79 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_GOTDATA_HIX22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19SPARC_GOTDATA_HIX22E>)

enumerator SPARC\_GOTDATA\_HIX22 = (80 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_GOTDATA_LOX10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19SPARC_GOTDATA_LOX10E>)

enumerator SPARC\_GOTDATA\_LOX10 = (81 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_GOTDATA_OP_HIX22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22SPARC_GOTDATA_OP_HIX22E>)

enumerator SPARC\_GOTDATA\_OP\_HIX22 = (82 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_GOTDATA_OP_LOX10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22SPARC_GOTDATA_OP_LOX10E>)

enumerator SPARC\_GOTDATA\_OP\_LOX10 = (83 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SPARC_GOTDATA_OP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16SPARC_GOTDATA_OPE>)

enumerator SPARC\_GOTDATA\_OP = (84 | [R\_SPARC](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE> "LIEF::ELF::Relocation::R_SPARC"))

##### [` SYSZ_NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SYSZ_NONEE>)

enumerator SYSZ\_NONE = (0 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE6SYSZ_8E>)

enumerator SYSZ\_8 = (1 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SYSZ_12E>)

enumerator SYSZ\_12 = (2 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SYSZ_16E>)

enumerator SYSZ\_16 = (3 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SYSZ_32E>)

enumerator SYSZ\_32 = (4 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_PC32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SYSZ_PC32E>)

enumerator SYSZ\_PC32 = (5 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOT12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SYSZ_GOT12E>)

enumerator SYSZ\_GOT12 = (6 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOT32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SYSZ_GOT32E>)

enumerator SYSZ\_GOT32 = (7 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_PLT32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SYSZ_PLT32E>)

enumerator SYSZ\_PLT32 = (8 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_COPY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SYSZ_COPYE>)

enumerator SYSZ\_COPY = (9 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_GLOB_DATE>)

enumerator SYSZ\_GLOB\_DAT = (10 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_JMP_SLOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_JMP_SLOTE>)

enumerator SYSZ\_JMP\_SLOT = (11 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_RELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_RELATIVEE>)

enumerator SYSZ\_RELATIVE = (12 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOTOFF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SYSZ_GOTOFFE>)

enumerator SYSZ\_GOTOFF = (13 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOTPC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SYSZ_GOTPCE>)

enumerator SYSZ\_GOTPC = (14 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOT16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SYSZ_GOT16E>)

enumerator SYSZ\_GOT16 = (15 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_PC16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SYSZ_PC16E>)

enumerator SYSZ\_PC16 = (16 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_PC16DBL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12SYSZ_PC16DBLE>)

enumerator SYSZ\_PC16DBL = (17 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_PLT16DBL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_PLT16DBLE>)

enumerator SYSZ\_PLT16DBL = (18 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_PC32DBL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12SYSZ_PC32DBLE>)

enumerator SYSZ\_PC32DBL = (19 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_PLT32DBL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_PLT32DBLE>)

enumerator SYSZ\_PLT32DBL = (20 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOTPCDBL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_GOTPCDBLE>)

enumerator SYSZ\_GOTPCDBL = (21 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SYSZ_64E>)

enumerator SYSZ\_64 = (22 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_PC64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SYSZ_PC64E>)

enumerator SYSZ\_PC64 = (23 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOT64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SYSZ_GOT64E>)

enumerator SYSZ\_GOT64 = (24 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_PLT64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SYSZ_PLT64E>)

enumerator SYSZ\_PLT64 = (25 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOTENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SYSZ_GOTENTE>)

enumerator SYSZ\_GOTENT = (26 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOTOFF16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_GOTOFF16E>)

enumerator SYSZ\_GOTOFF16 = (27 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOTOFF64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_GOTOFF64E>)

enumerator SYSZ\_GOTOFF64 = (28 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOTPLT12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_GOTPLT12E>)

enumerator SYSZ\_GOTPLT12 = (29 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOTPLT16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_GOTPLT16E>)

enumerator SYSZ\_GOTPLT16 = (30 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOTPLT32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_GOTPLT32E>)

enumerator SYSZ\_GOTPLT32 = (31 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOTPLT64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_GOTPLT64E>)

enumerator SYSZ\_GOTPLT64 = (32 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOTPLTENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SYSZ_GOTPLTENTE>)

enumerator SYSZ\_GOTPLTENT = (33 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_PLTOFF16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_PLTOFF16E>)

enumerator SYSZ\_PLTOFF16 = (34 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_PLTOFF32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_PLTOFF32E>)

enumerator SYSZ\_PLTOFF32 = (35 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_PLTOFF64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_PLTOFF64E>)

enumerator SYSZ\_PLTOFF64 = (36 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_LOAD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_TLS_LOADE>)

enumerator SYSZ\_TLS\_LOAD = (37 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_GDCALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15SYSZ_TLS_GDCALLE>)

enumerator SYSZ\_TLS\_GDCALL = (38 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_LDCALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15SYSZ_TLS_LDCALLE>)

enumerator SYSZ\_TLS\_LDCALL = (39 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_GD32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_TLS_GD32E>)

enumerator SYSZ\_TLS\_GD32 = (40 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_GD64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_TLS_GD64E>)

enumerator SYSZ\_TLS\_GD64 = (41 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_GOTIE12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16SYSZ_TLS_GOTIE12E>)

enumerator SYSZ\_TLS\_GOTIE12 = (42 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_GOTIE32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16SYSZ_TLS_GOTIE32E>)

enumerator SYSZ\_TLS\_GOTIE32 = (43 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_GOTIE64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16SYSZ_TLS_GOTIE64E>)

enumerator SYSZ\_TLS\_GOTIE64 = (44 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_LDM32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SYSZ_TLS_LDM32E>)

enumerator SYSZ\_TLS\_LDM32 = (45 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_LDM64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SYSZ_TLS_LDM64E>)

enumerator SYSZ\_TLS\_LDM64 = (46 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_IE32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_TLS_IE32E>)

enumerator SYSZ\_TLS\_IE32 = (47 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_IE64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_TLS_IE64E>)

enumerator SYSZ\_TLS\_IE64 = (48 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_IEENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SYSZ_TLS_IEENTE>)

enumerator SYSZ\_TLS\_IEENT = (49 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_LE32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_TLS_LE32E>)

enumerator SYSZ\_TLS\_LE32 = (50 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_LE64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_TLS_LE64E>)

enumerator SYSZ\_TLS\_LE64 = (51 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_LDO32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SYSZ_TLS_LDO32E>)

enumerator SYSZ\_TLS\_LDO32 = (52 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_LDO64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SYSZ_TLS_LDO64E>)

enumerator SYSZ\_TLS\_LDO64 = (53 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_DTPMOD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15SYSZ_TLS_DTPMODE>)

enumerator SYSZ\_TLS\_DTPMOD = (54 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_DTPOFF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15SYSZ_TLS_DTPOFFE>)

enumerator SYSZ\_TLS\_DTPOFF = (55 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_TPOFF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SYSZ_TLS_TPOFFE>)

enumerator SYSZ\_TLS\_TPOFF = (56 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SYSZ_20E>)

enumerator SYSZ\_20 = (57 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOT20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SYSZ_GOT20E>)

enumerator SYSZ\_GOT20 = (58 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_GOTPLT20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_GOTPLT20E>)

enumerator SYSZ\_GOTPLT20 = (59 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_TLS_GOTIE20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16SYSZ_TLS_GOTIE20E>)

enumerator SYSZ\_TLS\_GOTIE20 = (60 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_IRELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SYSZ_IRELATIVEE>)

enumerator SYSZ\_IRELATIVE = (61 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_PC12DBL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12SYSZ_PC12DBLE>)

enumerator SYSZ\_PC12DBL = (62 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_PLT12DBL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_PLT12DBLE>)

enumerator SYSZ\_PLT12DBL = (63 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_PC24DBL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12SYSZ_PC24DBLE>)

enumerator SYSZ\_PC24DBL = (64 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` SYSZ_PLT24DBL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SYSZ_PLT24DBLE>)

enumerator SYSZ\_PLT24DBL = (65 | [R\_SYSZ](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE> "LIEF::ELF::Relocation::R_SYSZ"))

##### [` RISCV_NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10RISCV_NONEE>)

enumerator RISCV\_NONE = (0 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8RISCV_32E>)

enumerator RISCV\_32 = (1 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8RISCV_64E>)

enumerator RISCV\_64 = (2 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_RELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14RISCV_RELATIVEE>)

enumerator RISCV\_RELATIVE = (3 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_COPY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10RISCV_COPYE>)

enumerator RISCV\_COPY = (4 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_JUMP_SLOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15RISCV_JUMP_SLOTE>)

enumerator RISCV\_JUMP\_SLOT = (5 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TLS_DTPMOD32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18RISCV_TLS_DTPMOD32E>)

enumerator RISCV\_TLS\_DTPMOD32 = (6 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TLS_DTPMOD64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18RISCV_TLS_DTPMOD64E>)

enumerator RISCV\_TLS\_DTPMOD64 = (7 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TLS_DTPREL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18RISCV_TLS_DTPREL32E>)

enumerator RISCV\_TLS\_DTPREL32 = (8 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TLS_DTPREL64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18RISCV_TLS_DTPREL64E>)

enumerator RISCV\_TLS\_DTPREL64 = (9 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TLS_TPREL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17RISCV_TLS_TPREL32E>)

enumerator RISCV\_TLS\_TPREL32 = (10 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TLS_TPREL64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17RISCV_TLS_TPREL64E>)

enumerator RISCV\_TLS\_TPREL64 = (11 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TLSDESC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13RISCV_TLSDESCE>)

enumerator RISCV\_TLSDESC = (12 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_BRANCH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12RISCV_BRANCHE>)

enumerator RISCV\_BRANCH = (16 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_JAL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9RISCV_JALE>)

enumerator RISCV\_JAL = (17 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_CALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10RISCV_CALLE>)

enumerator RISCV\_CALL = (18 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_CALL_PLT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14RISCV_CALL_PLTE>)

enumerator RISCV\_CALL\_PLT = (19 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_GOT_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14RISCV_GOT_HI20E>)

enumerator RISCV\_GOT\_HI20 = (20 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TLS_GOT_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18RISCV_TLS_GOT_HI20E>)

enumerator RISCV\_TLS\_GOT\_HI20 = (21 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TLS_GD_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17RISCV_TLS_GD_HI20E>)

enumerator RISCV\_TLS\_GD\_HI20 = (22 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_PCREL_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16RISCV_PCREL_HI20E>)

enumerator RISCV\_PCREL\_HI20 = (23 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_PCREL_LO12_I `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18RISCV_PCREL_LO12_IE>)

enumerator RISCV\_PCREL\_LO12\_I = (24 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_PCREL_LO12_S `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18RISCV_PCREL_LO12_SE>)

enumerator RISCV\_PCREL\_LO12\_S = (25 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10RISCV_HI20E>)

enumerator RISCV\_HI20 = (26 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_LO12_I `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12RISCV_LO12_IE>)

enumerator RISCV\_LO12\_I = (27 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_LO12_S `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12RISCV_LO12_SE>)

enumerator RISCV\_LO12\_S = (28 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TPREL_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16RISCV_TPREL_HI20E>)

enumerator RISCV\_TPREL\_HI20 = (29 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TPREL_LO12_I `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18RISCV_TPREL_LO12_IE>)

enumerator RISCV\_TPREL\_LO12\_I = (30 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TPREL_LO12_S `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18RISCV_TPREL_LO12_SE>)

enumerator RISCV\_TPREL\_LO12\_S = (31 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TPREL_ADD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15RISCV_TPREL_ADDE>)

enumerator RISCV\_TPREL\_ADD = (32 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_ADD8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10RISCV_ADD8E>)

enumerator RISCV\_ADD8 = (33 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_ADD16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11RISCV_ADD16E>)

enumerator RISCV\_ADD16 = (34 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_ADD32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11RISCV_ADD32E>)

enumerator RISCV\_ADD32 = (35 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_ADD64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11RISCV_ADD64E>)

enumerator RISCV\_ADD64 = (36 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_SUB8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10RISCV_SUB8E>)

enumerator RISCV\_SUB8 = (37 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_SUB16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11RISCV_SUB16E>)

enumerator RISCV\_SUB16 = (38 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_SUB32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11RISCV_SUB32E>)

enumerator RISCV\_SUB32 = (39 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_SUB64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11RISCV_SUB64E>)

enumerator RISCV\_SUB64 = (40 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_GOT32_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17RISCV_GOT32_PCRELE>)

enumerator RISCV\_GOT32\_PCREL = (41 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_ALIGN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11RISCV_ALIGNE>)

enumerator RISCV\_ALIGN = (43 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_RVC_BRANCH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16RISCV_RVC_BRANCHE>)

enumerator RISCV\_RVC\_BRANCH = (44 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_RVC_JUMP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14RISCV_RVC_JUMPE>)

enumerator RISCV\_RVC\_JUMP = (45 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_RVC_LUI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13RISCV_RVC_LUIE>)

enumerator RISCV\_RVC\_LUI = (46 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_RELAX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11RISCV_RELAXE>)

enumerator RISCV\_RELAX = (51 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_SUB6 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10RISCV_SUB6E>)

enumerator RISCV\_SUB6 = (52 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_SET6 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10RISCV_SET6E>)

enumerator RISCV\_SET6 = (53 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_SET8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10RISCV_SET8E>)

enumerator RISCV\_SET8 = (54 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_SET16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11RISCV_SET16E>)

enumerator RISCV\_SET16 = (55 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_SET32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11RISCV_SET32E>)

enumerator RISCV\_SET32 = (56 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_32_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14RISCV_32_PCRELE>)

enumerator RISCV\_32\_PCREL = (57 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_IRELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15RISCV_IRELATIVEE>)

enumerator RISCV\_IRELATIVE = (58 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_PLT32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11RISCV_PLT32E>)

enumerator RISCV\_PLT32 = (59 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_SET_ULEB128 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17RISCV_SET_ULEB128E>)

enumerator RISCV\_SET\_ULEB128 = (60 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_SUB_ULEB128 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17RISCV_SUB_ULEB128E>)

enumerator RISCV\_SUB\_ULEB128 = (61 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TLSDESC_HI20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18RISCV_TLSDESC_HI20E>)

enumerator RISCV\_TLSDESC\_HI20 = (62 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TLSDESC_LOAD_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE23RISCV_TLSDESC_LOAD_LO12E>)

enumerator RISCV\_TLSDESC\_LOAD\_LO12 = (63 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TLSDESC_ADD_LO12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE22RISCV_TLSDESC_ADD_LO12E>)

enumerator RISCV\_TLSDESC\_ADD\_LO12 = (64 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` RISCV_TLSDESC_CALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18RISCV_TLSDESC_CALLE>)

enumerator RISCV\_TLSDESC\_CALL = (65 | [R\_RISCV](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE> "LIEF::ELF::Relocation::R_RISCV"))

##### [` BPF_NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8BPF_NONEE>)

enumerator BPF\_NONE = (0 | [R\_BPF](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BPFE> "LIEF::ELF::Relocation::R_BPF"))

##### [` BPF_64_64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9BPF_64_64E>)

enumerator BPF\_64\_64 = (1 | [R\_BPF](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BPFE> "LIEF::ELF::Relocation::R_BPF"))

##### [` BPF_64_ABS64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12BPF_64_ABS64E>)

enumerator BPF\_64\_ABS64 = (2 | [R\_BPF](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BPFE> "LIEF::ELF::Relocation::R_BPF"))

##### [` BPF_64_ABS32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12BPF_64_ABS32E>)

enumerator BPF\_64\_ABS32 = (3 | [R\_BPF](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BPFE> "LIEF::ELF::Relocation::R_BPF"))

##### [` BPF_64_NODYLD32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15BPF_64_NODYLD32E>)

enumerator BPF\_64\_NODYLD32 = (4 | [R\_BPF](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BPFE> "LIEF::ELF::Relocation::R_BPF"))

##### [` BPF_64_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9BPF_64_32E>)

enumerator BPF\_64\_32 = (10 | [R\_BPF](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BPFE> "LIEF::ELF::Relocation::R_BPF"))

##### [` SH_NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SH_NONEE>)

enumerator SH\_NONE = (0 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_DIR32E>)

enumerator SH\_DIR32 = (1 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_REL32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_REL32E>)

enumerator SH\_REL32 = (2 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR8WPN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SH_DIR8WPNE>)

enumerator SH\_DIR8WPN = (3 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_IND12W `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SH_IND12WE>)

enumerator SH\_IND12W = (4 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR8WPL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SH_DIR8WPLE>)

enumerator SH\_DIR8WPL = (5 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR8WPZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SH_DIR8WPZE>)

enumerator SH\_DIR8WPZ = (6 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR8BP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SH_DIR8BPE>)

enumerator SH\_DIR8BP = (7 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR8W `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_DIR8WE>)

enumerator SH\_DIR8W = (8 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR8L `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_DIR8LE>)

enumerator SH\_DIR8L = (9 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_LOOP_START `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SH_LOOP_STARTE>)

enumerator SH\_LOOP\_START = (10 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_LOOP_END `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SH_LOOP_ENDE>)

enumerator SH\_LOOP\_END = (11 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GNU_VTINHERIT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16SH_GNU_VTINHERITE>)

enumerator SH\_GNU\_VTINHERIT = (22 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GNU_VTENTRY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SH_GNU_VTENTRYE>)

enumerator SH\_GNU\_VTENTRY = (23 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_SWITCH8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SH_SWITCH8E>)

enumerator SH\_SWITCH8 = (24 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_SWITCH16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SH_SWITCH16E>)

enumerator SH\_SWITCH16 = (25 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_SWITCH32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SH_SWITCH32E>)

enumerator SH\_SWITCH32 = (26 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_USES `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SH_USESE>)

enumerator SH\_USES = (27 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_COUNT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_COUNTE>)

enumerator SH\_COUNT = (28 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_ALIGN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_ALIGNE>)

enumerator SH\_ALIGN = (29 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_CODE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SH_CODEE>)

enumerator SH\_CODE = (30 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DATA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SH_DATAE>)

enumerator SH\_DATA = (31 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_LABEL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_LABELE>)

enumerator SH\_LABEL = (32 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_DIR16E>)

enumerator SH\_DIR16 = (33 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SH_DIR8E>)

enumerator SH\_DIR8 = (34 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR8UL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SH_DIR8ULE>)

enumerator SH\_DIR8UL = (35 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR8UW `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SH_DIR8UWE>)

enumerator SH\_DIR8UW = (36 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR8U `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_DIR8UE>)

enumerator SH\_DIR8U = (37 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR8SW `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SH_DIR8SWE>)

enumerator SH\_DIR8SW = (38 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR8S `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_DIR8SE>)

enumerator SH\_DIR8S = (39 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR4UL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SH_DIR4ULE>)

enumerator SH\_DIR4UL = (40 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR4UW `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SH_DIR4UWE>)

enumerator SH\_DIR4UW = (41 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR4U `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_DIR4UE>)

enumerator SH\_DIR4U = (42 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_PSHA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SH_PSHAE>)

enumerator SH\_PSHA = (43 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_PSHL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SH_PSHLE>)

enumerator SH\_PSHL = (44 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR5U `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_DIR5UE>)

enumerator SH\_DIR5U = (45 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR6U `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_DIR6UE>)

enumerator SH\_DIR6U = (46 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR6S `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_DIR6SE>)

enumerator SH\_DIR6S = (47 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR10S `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SH_DIR10SE>)

enumerator SH\_DIR10S = (48 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR10SW `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SH_DIR10SWE>)

enumerator SH\_DIR10SW = (49 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR10SL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SH_DIR10SLE>)

enumerator SH\_DIR10SL = (50 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR10SQ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE10SH_DIR10SQE>)

enumerator SH\_DIR10SQ = (51 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_DIR16S `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SH_DIR16SE>)

enumerator SH\_DIR16S = (53 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_TLS_GD_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12SH_TLS_GD_32E>)

enumerator SH\_TLS\_GD\_32 = (144 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_TLS_LD_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12SH_TLS_LD_32E>)

enumerator SH\_TLS\_LD\_32 = (145 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_TLS_LDO_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SH_TLS_LDO_32E>)

enumerator SH\_TLS\_LDO\_32 = (146 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_TLS_IE_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12SH_TLS_IE_32E>)

enumerator SH\_TLS\_IE\_32 = (147 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_TLS_LE_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12SH_TLS_LE_32E>)

enumerator SH\_TLS\_LE\_32 = (148 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_TLS_DTPMOD32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15SH_TLS_DTPMOD32E>)

enumerator SH\_TLS\_DTPMOD32 = (149 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_TLS_DTPOFF32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15SH_TLS_DTPOFF32E>)

enumerator SH\_TLS\_DTPOFF32 = (150 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_TLS_TPOFF32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SH_TLS_TPOFF32E>)

enumerator SH\_TLS\_TPOFF32 = (151 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOT32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_GOT32E>)

enumerator SH\_GOT32 = (160 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_PLT32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_PLT32E>)

enumerator SH\_PLT32 = (161 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_COPY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE7SH_COPYE>)

enumerator SH\_COPY = (162 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GLOB_DAT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SH_GLOB_DATE>)

enumerator SH\_GLOB\_DAT = (163 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_JMP_SLOT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SH_JMP_SLOTE>)

enumerator SH\_JMP\_SLOT = (164 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_RELATIVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SH_RELATIVEE>)

enumerator SH\_RELATIVE = (165 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTOFF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SH_GOTOFFE>)

enumerator SH\_GOTOFF = (166 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTPC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_GOTPCE>)

enumerator SH\_GOTPC = (167 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTPLT32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SH_GOTPLT32E>)

enumerator SH\_GOTPLT32 = (168 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOT_LOW16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12SH_GOT_LOW16E>)

enumerator SH\_GOT\_LOW16 = (169 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOT_MEDLOW16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15SH_GOT_MEDLOW16E>)

enumerator SH\_GOT\_MEDLOW16 = (170 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOT_MEDHI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SH_GOT_MEDHI16E>)

enumerator SH\_GOT\_MEDHI16 = (171 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOT_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SH_GOT_HI16E>)

enumerator SH\_GOT\_HI16 = (172 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTPLT_LOW16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15SH_GOTPLT_LOW16E>)

enumerator SH\_GOTPLT\_LOW16 = (173 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTPLT_MEDLOW16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18SH_GOTPLT_MEDLOW16E>)

enumerator SH\_GOTPLT\_MEDLOW16 = (174 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTPLT_MEDHI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17SH_GOTPLT_MEDHI16E>)

enumerator SH\_GOTPLT\_MEDHI16 = (175 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTPLT_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SH_GOTPLT_HI16E>)

enumerator SH\_GOTPLT\_HI16 = (176 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_PLT_LOW16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12SH_PLT_LOW16E>)

enumerator SH\_PLT\_LOW16 = (177 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_PLT_MEDLOW16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15SH_PLT_MEDLOW16E>)

enumerator SH\_PLT\_MEDLOW16 = (178 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_PLT_MEDHI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SH_PLT_MEDHI16E>)

enumerator SH\_PLT\_MEDHI16 = (179 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_PLT_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SH_PLT_HI16E>)

enumerator SH\_PLT\_HI16 = (180 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTOFF_LOW16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15SH_GOTOFF_LOW16E>)

enumerator SH\_GOTOFF\_LOW16 = (181 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTOFF_MEDLOW16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18SH_GOTOFF_MEDLOW16E>)

enumerator SH\_GOTOFF\_MEDLOW16 = (182 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTOFF_MEDHI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17SH_GOTOFF_MEDHI16E>)

enumerator SH\_GOTOFF\_MEDHI16 = (183 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTOFF_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SH_GOTOFF_HI16E>)

enumerator SH\_GOTOFF\_HI16 = (184 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTPC_LOW16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SH_GOTPC_LOW16E>)

enumerator SH\_GOTPC\_LOW16 = (185 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTPC_MEDLOW16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17SH_GOTPC_MEDLOW16E>)

enumerator SH\_GOTPC\_MEDLOW16 = (186 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTPC_MEDHI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16SH_GOTPC_MEDHI16E>)

enumerator SH\_GOTPC\_MEDHI16 = (187 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTPC_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SH_GOTPC_HI16E>)

enumerator SH\_GOTPC\_HI16 = (188 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOT10BY4 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SH_GOT10BY4E>)

enumerator SH\_GOT10BY4 = (189 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTPLT10BY4 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SH_GOTPLT10BY4E>)

enumerator SH\_GOTPLT10BY4 = (190 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOT10BY8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SH_GOT10BY8E>)

enumerator SH\_GOT10BY8 = (191 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTPLT10BY8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SH_GOTPLT10BY8E>)

enumerator SH\_GOTPLT10BY8 = (192 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_COPY64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SH_COPY64E>)

enumerator SH\_COPY64 = (193 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GLOB_DAT64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SH_GLOB_DAT64E>)

enumerator SH\_GLOB\_DAT64 = (194 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_JMP_SLOT64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SH_JMP_SLOT64E>)

enumerator SH\_JMP\_SLOT64 = (195 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_RELATIVE64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE13SH_RELATIVE64E>)

enumerator SH\_RELATIVE64 = (196 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOT20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_GOT20E>)

enumerator SH\_GOT20 = (201 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTOFF20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SH_GOTOFF20E>)

enumerator SH\_GOTOFF20 = (202 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTFUNCDESC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SH_GOTFUNCDESCE>)

enumerator SH\_GOTFUNCDESC = (203 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTFUNCDESC20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE16SH_GOTFUNCDESC20E>)

enumerator SH\_GOTFUNCDESC20 = (204 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTOFFFUNCDESC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17SH_GOTOFFFUNCDESCE>)

enumerator SH\_GOTOFFFUNCDESC = (205 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_GOTOFFFUNCDESC20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE19SH_GOTOFFFUNCDESC20E>)

enumerator SH\_GOTOFFFUNCDESC20 = (206 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_FUNCDESC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SH_FUNCDESCE>)

enumerator SH\_FUNCDESC = (207 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_FUNCDESC_VALUE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17SH_FUNCDESC_VALUEE>)

enumerator SH\_FUNCDESC\_VALUE = (208 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_SHMEDIA_CODE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15SH_SHMEDIA_CODEE>)

enumerator SH\_SHMEDIA\_CODE = (242 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_PT_16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE8SH_PT_16E>)

enumerator SH\_PT\_16 = (243 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_IMMS16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SH_IMMS16E>)

enumerator SH\_IMMS16 = (244 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_IMMU16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE9SH_IMMU16E>)

enumerator SH\_IMMU16 = (245 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_IMM_LOW16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE12SH_IMM_LOW16E>)

enumerator SH\_IMM\_LOW16 = (246 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_IMM_LOW16_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE18SH_IMM_LOW16_PCRELE>)

enumerator SH\_IMM\_LOW16\_PCREL = (247 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_IMM_MEDLOW16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE15SH_IMM_MEDLOW16E>)

enumerator SH\_IMM\_MEDLOW16 = (248 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_IMM_MEDLOW16_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE21SH_IMM_MEDLOW16_PCRELE>)

enumerator SH\_IMM\_MEDLOW16\_PCREL = (249 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_IMM_MEDHI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE14SH_IMM_MEDHI16E>)

enumerator SH\_IMM\_MEDHI16 = (250 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_IMM_MEDHI16_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE20SH_IMM_MEDHI16_PCRELE>)

enumerator SH\_IMM\_MEDHI16\_PCREL = (251 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_IMM_HI16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SH_IMM_HI16E>)

enumerator SH\_IMM\_HI16 = (252 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_IMM_HI16_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE17SH_IMM_HI16_PCRELE>)

enumerator SH\_IMM\_HI16\_PCREL = (253 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE5SH_64E>)

enumerator SH\_64 = (254 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

##### [` SH_64_PCREL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPE11SH_64_PCRELE>)

enumerator SH\_64\_PCREL = (255 | [R\_SH4](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E> "LIEF::ELF::Relocation::R_SH4"))

Public Functions

#### [` Relocation `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation10RelocationE8uint64_t4TYPE8ENCODING>)

Relocation(uint64\_t address, [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPEE> "LIEF::ELF::Relocation::TYPE") type, [ENCODING](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation8ENCODINGE> "LIEF::ELF::Relocation::ENCODING") enc)

#### [` Relocation `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation10RelocationEv>)

Relocation() = default

#### [` Relocation `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation10RelocationE4ARCH>)

inline Relocation([ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` ~Relocation `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationD0Ev>)

~Relocation() override = default

#### [` Relocation `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation10RelocationERK10Relocation>)

inline Relocation(const [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation10RelocationERK10Relocation> "LIEF::ELF::Relocation::Relocation") &amp;other)

Copy constructor.

> **Warning**
> 
> When this constructor is invoked, referenced sections or symbols are discarded. This means that on the copied [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation>), [Relocation::section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation_1ac5c35ed3191d7af64e2633ad2870f322>), [Relocation::symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation_1a283aaefc63a3e711e630568600c5caf5>) and [Relocation::symbol\_table](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation_1a2849b1941e15da8a0d01bb446a6a3b04>) are set to a nullptr.

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationaSE10Relocation>)

inline [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation") &amp;operator=([Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation") other)

Copy assignment operator.

Please read the notice of the copy constructor

#### [` swap `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4swapER10Relocation>)

inline void swap([Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation") &amp;other)

#### [` addend `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation6addendEv>)

inline int64\_t addend() const

Additional value that can be involved in the relocation processing.

#### [` type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation4typeEv>)

inline [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPEE> "LIEF::ELF::Relocation::TYPE") type() const

Type of the relocation.

#### [` is_rela `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation7is_relaEv>)

inline bool is\_rela() const

Check if the relocation uses the explicit [addend()](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation_1a549a43b9e6bdaecc1c3ac2fb9f57052e>) field (this is usually the case for 64 bits binaries).

#### [` is_rel `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation6is_relEv>)

inline bool is\_rel() const

Check if the relocation uses the implicit addend (i.e. not present in the ELF structure).

#### [` is_relatively_encoded `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation21is_relatively_encodedEv>)

inline bool is\_relatively\_encoded() const

True if the relocation is using the relative encoding.

#### [` is_android_packed `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation17is_android_packedEv>)

inline bool is\_android\_packed() const

True if the relocation is using the Android packed relocation format.

#### [` info `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation4infoEv>)

inline uint32\_t info() const

[Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Relocation>) info which contains, for instance, the symbol index.

#### [` r_info `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation6r_infoEN6Header5CLASSEN6Header8ELF_DATAE>)

inline uint64\_t r\_info([Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[CLASS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASSE> "LIEF::ELF::Header::CLASS") clazz, [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[ELF\_DATA](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header8ELF_DATAE> "LIEF::ELF::Header::ELF_DATA") data) const

(re)Compute the *raw* `r_info` attribute based on the given ELF class and endianness.

#### [` r_info `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation6r_infoERK6Header>)

inline uint64\_t r\_info(const [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header") &amp;hdr) const

(re)Compute the raw `r_info` attribute from the given ELF header.

#### [` architecture `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation12architectureEv>)

inline [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") architecture() const

Target architecture for this relocation.

#### [` purpose `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation7purposeEv>)

inline [PURPOSE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7PURPOSEE> "LIEF::ELF::Relocation::PURPOSE") purpose() const

#### [` encoding `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation8encodingEv>)

inline [ENCODING](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation8ENCODINGE> "LIEF::ELF::Relocation::ENCODING") encoding() const

The encoding of the relocation.

#### [` is_relative `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation11is_relativeEv>)

inline bool is\_relative() const

True if the semantic of the relocation is `<ARCH>_RELATIVE`.

#### [` size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation4sizeEv>)

virtual size\_t size() const override

Return the size (in **bits**) of the value associated with this relocation Return -1 if the size can’t be determined.

#### [` has_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation10has_symbolEv>)

inline bool has\_symbol() const

True if the current relocation is associated with a symbol.

#### [` symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6symbolEv>)

inline [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") \*symbol()

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>) associated with the relocation (or a nullptr).

#### [` symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation6symbolEv>)

inline const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") \*symbol() const

#### [` has_section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation11has_sectionEv>)

inline bool has\_section() const

True if the relocation has an associated section.

#### [` section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7sectionEv>)

inline [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*section()

The section in which the relocation is applied (or a nullptr).

#### [` section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation7sectionEv>)

inline const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*section() const

#### [` symbol_table `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation12symbol_tableEv>)

inline [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*symbol\_table()

The associated symbol table (or a nullptr).

#### [` symbol_table `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation12symbol_tableEv>)

inline const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*symbol\_table() const

#### [` addend `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6addendE7int64_t>)

inline void addend(int64\_t addend)

#### [` type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4typeE4TYPE>)

inline void type([TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPEE> "LIEF::ELF::Relocation::TYPE") type)

#### [` purpose `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7purposeE7PURPOSE>)

inline void purpose([PURPOSE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7PURPOSEE> "LIEF::ELF::Relocation::PURPOSE") purpose)

#### [` info `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4infoE8uint32_t>)

inline void info(uint32\_t v)

#### [` symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6symbolEP6Symbol>)

inline void symbol([Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") \*symbol)

#### [` section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7sectionEP7Section>)

inline void section([Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*section)

#### [` symbol_table `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation12symbol_tableEP7Section>)

inline void symbol\_table([Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*section)

#### [` resolve `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation7resolveE8uint64_t>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; resolve(uint64\_t base\_address = 0) const

Try to resolve the value of the relocation such as `*address() = resolve()`.

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF10Relocation6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Functions

#### [` decode_mips_n64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation15decode_mips_n64E8uint64_tN6Header8ELF_DATAE>)

static inline [DecodedMipsN64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation14DecodedMipsN64E> "LIEF::ELF::Relocation::DecodedMipsN64") decode\_mips\_n64(uint64\_t r\_info, [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[ELF\_DATA](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header8ELF_DATAE> "LIEF::ELF::Header::ELF_DATA") data)

Decode `r_info` for MIPS n64.

#### [` encode_mips_n64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation15encode_mips_n64E14DecodedMipsN64N6Header8ELF_DATAE>)

static inline uint64\_t encode\_mips\_n64([DecodedMipsN64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation14DecodedMipsN64E> "LIEF::ELF::Relocation::DecodedMipsN64") decoded, [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[ELF\_DATA](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header8ELF_DATAE> "LIEF::ELF::Header::ELF_DATA") data)

Encode all the fields of a MIPS n64 relocation into a `r_info` value.

#### [` encode_mips_n64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation15encode_mips_n64E8uint32_t8uint32_tN6Header8ELF_DATAE>)

static inline uint64\_t encode\_mips\_n64(uint32\_t type\_value, uint32\_t sym\_idx, [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[ELF\_DATA](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header8ELF_DATAE> "LIEF::ELF::Header::ELF_DATA") data)

#### [` type_from `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9type_fromE8uint32_t4ARCH>)

static [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPEE> "LIEF::ELF::Relocation::TYPE") type\_from(uint32\_t value, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch)

#### [` to_value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation8to_valueE4TYPE>)

static inline uint32\_t to\_value([TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation4TYPEE> "LIEF::ELF::Relocation::TYPE") type)

#### [` Tcreate `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0EN4LIEF3ELF10Relocation6createENSt10unique_ptrI10RelocationEERK1T7PURPOSE8ENCODINGRK6Header>)

template&lt;class T&gt;  
static std::unique\_ptr&lt;[Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation")&gt; create(const [T](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0EN4LIEF3ELF10Relocation6createENSt10unique_ptrI10RelocationEERK1T7PURPOSE8ENCODINGRK6Header> "LIEF::ELF::Relocation::create::T") &amp;header, [PURPOSE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7PURPOSEE> "LIEF::ELF::Relocation::PURPOSE") purpose, [ENCODING](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation8ENCODINGE> "LIEF::ELF::Relocation::ENCODING") enc, const [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header") &amp;elf\_hdr)

Public Static Attributes

#### [` R_BIT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BITE>)

static uint64\_t R\_BIT = 27

#### [` R_MASK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MASKE>)

static uint64\_t R\_MASK = (uint64\_t(1) &lt;&lt; [R\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BITE> "LIEF::ELF::Relocation::R_BIT")) - 1

#### [` R_X64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X64E>)

static uint64\_t R\_X64 = uint64\_t(1) &lt;&lt; [R\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BITE> "LIEF::ELF::Relocation::R_BIT")

#### [` R_AARCH64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_AARCH64E>)

static uint64\_t R\_AARCH64 = uint64\_t(2) &lt;&lt; [R\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BITE> "LIEF::ELF::Relocation::R_BIT")

#### [` R_ARM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_ARME>)

static uint64\_t R\_ARM = uint64\_t(3) &lt;&lt; [R\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BITE> "LIEF::ELF::Relocation::R_BIT")

#### [` R_HEXAGON `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation9R_HEXAGONE>)

static uint64\_t R\_HEXAGON = uint64\_t(4) &lt;&lt; [R\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BITE> "LIEF::ELF::Relocation::R_BIT")

#### [` R_X86 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_X86E>)

static uint64\_t R\_X86 = uint64\_t(5) &lt;&lt; [R\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BITE> "LIEF::ELF::Relocation::R_BIT")

#### [` R_LARCH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_LARCHE>)

static uint64\_t R\_LARCH = uint64\_t(6) &lt;&lt; [R\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BITE> "LIEF::ELF::Relocation::R_BIT")

#### [` R_MIPS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_MIPSE>)

static uint64\_t R\_MIPS = uint64\_t(7) &lt;&lt; [R\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BITE> "LIEF::ELF::Relocation::R_BIT")

#### [` R_PPC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_PPCE>)

static uint64\_t R\_PPC = uint64\_t(8) &lt;&lt; [R\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BITE> "LIEF::ELF::Relocation::R_BIT")

#### [` R_PPC64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_PPC64E>)

static uint64\_t R\_PPC64 = uint64\_t(9) &lt;&lt; [R\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BITE> "LIEF::ELF::Relocation::R_BIT")

#### [` R_SPARC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_SPARCE>)

static uint64\_t R\_SPARC = uint64\_t(10) &lt;&lt; [R\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BITE> "LIEF::ELF::Relocation::R_BIT")

#### [` R_SYSZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation6R_SYSZE>)

static uint64\_t R\_SYSZ = uint64\_t(11) &lt;&lt; [R\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BITE> "LIEF::ELF::Relocation::R_BIT")

#### [` R_RISCV `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation7R_RISCVE>)

static uint64\_t R\_RISCV = uint64\_t(12) &lt;&lt; [R\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BITE> "LIEF::ELF::Relocation::R_BIT")

#### [` R_BPF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BPFE>)

static uint64\_t R\_BPF = uint64\_t(13) &lt;&lt; [R\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BITE> "LIEF::ELF::Relocation::R_BIT")

#### [` R_SH4 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_SH4E>)

static uint64\_t R\_SH4 = uint64\_t(14) &lt;&lt; [R\_BIT](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation5R_BITE> "LIEF::ELF::Relocation::R_BIT")

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationlsERNSt7ostreamERK10Relocation>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Relocation](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10RelocationE> "LIEF::ELF::Relocation") &amp;entry)

#### [` DecodedMipsN64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation14DecodedMipsN64E>)

struct DecodedMipsN64

Fields decoded from the MIPS-specific n64 `r_info` layout.

Public Members

##### [` type_value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation14DecodedMipsN6410type_valueE>)

uint32\_t type\_value = 0

Primary relocation type.

##### [` sym_idx `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation14DecodedMipsN647sym_idxE>)

uint32\_t sym\_idx = 0

Index of the symbol associated with the relocation.

##### [` special_symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation14DecodedMipsN6414special_symbolE>)

uint8\_t special\_symbol = 0

Special symbol used by the second relocation operation.

##### [` type2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation14DecodedMipsN645type2E>)

uint8\_t type2 = 0

Second relocation type.

##### [` type3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF10Relocation14DecodedMipsN645type3E>)

uint8\_t type3 = 0

Third relocation type.

---

## [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#symbol>)

### [` Symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE>)

class Symbol : public LIEF::[Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolE> "LIEF::Symbol")

Class which represents an ELF symbol.

Public Types

#### [` BINDING `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol7BINDINGE>)

enum class BINDING

*Values:*

##### [` LOCAL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol7BINDING5LOCALE>)

enumerator LOCAL = 0

Local symbol.

##### [` GLOBAL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol7BINDING6GLOBALE>)

enumerator GLOBAL

Global symbol.

##### [` WEAK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol7BINDING4WEAKE>)

enumerator WEAK

Weak symbol.

##### [` GNU_UNIQUE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol7BINDING10GNU_UNIQUEE>)

enumerator GNU\_UNIQUE = 10

Unique symbol.

#### [` TYPE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol4TYPEE>)

enum class TYPE

Type of the symbol. This enum matches the `STT_xxx` values of the ELF specs.

*Values:*

##### [` NOTYPE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol4TYPE6NOTYPEE>)

enumerator NOTYPE = 0

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>)’s type is not specified.

##### [` OBJECT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol4TYPE6OBJECTE>)

enumerator OBJECT

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>) is a data object (variable, array, etc.).

##### [` FUNC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol4TYPE4FUNCE>)

enumerator FUNC

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>) is executable code (function, etc.).

##### [` SECTION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol4TYPE7SECTIONE>)

enumerator SECTION

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>) refers to a section.

##### [` FILE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol4TYPE4FILEE>)

enumerator FILE

Local, absolute symbol that refers to a file.

##### [` COMMON `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol4TYPE6COMMONE>)

enumerator COMMON

An uninitialized common block.

##### [` TLS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol4TYPE3TLSE>)

enumerator TLS

Thread local data object.

##### [` GNU_IFUNC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol4TYPE9GNU_IFUNCE>)

enumerator GNU\_IFUNC = 10

GNU indirect function.

#### [` VISIBILITY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol10VISIBILITYE>)

enum class VISIBILITY

Visibility of the symbol. This enum matches the `STV_xxx` values of the official ELF specs.

*Values:*

##### [` DEFAULT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol10VISIBILITY7DEFAULTE>)

enumerator DEFAULT = 0

Visibility is specified by binding type.

##### [` INTERNAL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol10VISIBILITY8INTERNALE>)

enumerator INTERNAL

Defined by processor supplements.

##### [` HIDDEN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol10VISIBILITY6HIDDENE>)

enumerator HIDDEN

Not visible to other components.

##### [` PROTECTED `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol10VISIBILITY9PROTECTEDE>)

enumerator PROTECTED

Visible in other components but not preemptable.

#### [` SECTION_INDEX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol13SECTION_INDEXE>)

enum SECTION\_INDEX

Special section indices.

*Values:*

##### [` UNDEF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol13SECTION_INDEX5UNDEFE>)

enumerator UNDEF = 0

Undefined section.

##### [` ABS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol13SECTION_INDEX3ABSE>)

enumerator ABS = 0xfff1

Associated symbol is absolute.

##### [` COMMON `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol13SECTION_INDEX6COMMONE>)

enumerator COMMON = 0xfff2

Associated symbol is common.

Public Functions

#### [` Symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol6SymbolENSt6stringE>)

inline Symbol(std::string name)

#### [` Symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol6SymbolEv>)

Symbol() = default

#### [` ~Symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolD0Ev>)

~Symbol() override = default

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolaSE6Symbol>)

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") &amp;operator=([Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") other)

#### [` Symbol `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol6SymbolERK6Symbol>)

Symbol(const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol6SymbolERK6Symbol> "LIEF::ELF::Symbol::Symbol") &amp;other)

#### [` swap `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol4swapER6Symbol>)

void swap([Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") &amp;other)

#### [` type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol4typeEv>)

inline [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol4TYPEE> "LIEF::ELF::Symbol::TYPE") type() const

The symbol’s type provides a general classification for the associated entity.

#### [` binding `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol7bindingEv>)

inline [BINDING](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol7BINDINGE> "LIEF::ELF::Symbol::BINDING") binding() const

The symbol’s binding determines the linkage visibility and behavior.

#### [` information `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol11informationEv>)

uint8\_t information() const

This member specifies the symbol’s type and binding attributes.

#### [` other `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol5otherEv>)

inline uint8\_t other() const

Alias for [visibility()](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol_1adfff8bdd7e947960f37d855363846759>).

#### [` section_idx `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol11section_idxEv>)

inline uint16\_t section\_idx() const

[ELF::Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>) index associated with the symbol.

#### [` visibility `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol10visibilityEv>)

inline [VISIBILITY](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol10VISIBILITYE> "LIEF::ELF::Symbol::VISIBILITY") visibility() const

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>) visibility.

#### [` section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol7sectionEv>)

inline [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*section()

[Section](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Section>) associated with the symbol or a nullptr if it does not exist.

#### [` section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol7sectionEv>)

inline const [Section](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7SectionE> "LIEF::ELF::Section") \*section() const

#### [` value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol5valueEv>)

inline virtual uint64\_t value() const override

This member has slightly different interpretations:

- In relocatable files, `value` holds alignment constraints for a symbol for which section index is SHN\_COMMON
- In relocatable files, `value` holds a section offset for a defined symbol. That is, `value` is an offset from the beginning of the section associated with this symbol.
- In executable and shared object files, `value` holds a virtual address. To make these files’ symbols more useful for the dynamic linker, the section offset (file interpretation) gives way to a virtual address (memory interpretation) for which the section number is irrelevant.

#### [` size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol4sizeEv>)

inline virtual uint64\_t size() const override

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>) size.

Many symbols have associated sizes. For example, a data object’s size is the number of bytes contained in the object. This member holds `0` if the symbol has no size or an unknown size.

#### [` shndx `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol5shndxEv>)

inline uint16\_t shndx() const

> **See also**
> 
> [Symbol::section\_idx](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol_1abf9b68c9bdcb167d49609622fbae826e>)

#### [` has_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol11has_versionEv>)

inline bool has\_version() const

Check if this symbols has a [symbol version](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion>) .

#### [` symbol_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol14symbol_versionEv>)

inline [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersionE> "LIEF::ELF::SymbolVersion") \*symbol\_version()

Return the [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion>) associated with this symbol. If there is no symbol version, return a nullptr.

#### [` symbol_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol14symbol_versionEv>)

inline const [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersionE> "LIEF::ELF::SymbolVersion") \*symbol\_version() const

#### [` is_local `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol8is_localEv>)

inline bool is\_local() const

#### [` is_global `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol9is_globalEv>)

inline bool is\_global() const

#### [` is_weak `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol7is_weakEv>)

inline bool is\_weak() const

#### [` demangled_name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol14demangled_nameEv>)

std::string demangled\_name() const

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>)’s unmangled name. If not available, it returns an empty string.

#### [` type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol4typeE4TYPE>)

inline void type([TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol4TYPEE> "LIEF::ELF::Symbol::TYPE") type)

#### [` binding `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol7bindingE7BINDING>)

inline void binding([BINDING](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol7BINDINGE> "LIEF::ELF::Symbol::BINDING") binding)

#### [` other `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol5otherE7uint8_t>)

inline void other(uint8\_t other)

#### [` visibility `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol10visibilityE10VISIBILITY>)

inline void visibility([VISIBILITY](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol10VISIBILITYE> "LIEF::ELF::Symbol::VISIBILITY") visibility)

#### [` information `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol11informationE7uint8_t>)

void information(uint8\_t info)

#### [` shndx `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol5shndxE8uint16_t>)

inline void shndx(uint16\_t idx)

#### [` value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol5valueE8uint64_t>)

inline virtual void value(uint64\_t value) override

#### [` size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol4sizeE8uint64_t>)

inline virtual void size(uint64\_t size) override

#### [` is_exported `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol11is_exportedEv>)

bool is\_exported() const

Check if the current symbol is exported.

#### [` set_exported `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol12set_exportedEb>)

void set\_exported(bool flag = true)

Set whether or not the symbol is exported.

#### [` is_imported `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol11is_importedEv>)

bool is\_imported() const

Check if the current symbol is imported.

#### [` set_imported `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol12set_importedEb>)

void set\_imported(bool flag = true)

Set whether or not the symbol is imported.

#### [` is_static `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol9is_staticEv>)

inline bool is\_static() const

True if the symbol is a static one.

#### [` is_function `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol11is_functionEv>)

inline bool is\_function() const

True if the symbol represents a function.

#### [` is_variable `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol11is_variableEv>)

inline bool is\_variable() const

True if the symbol represents a variable.

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Symbol6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Functions

#### [` binding_from `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol12binding_fromE8uint32_t4ARCH>)

static inline [BINDING](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol7BINDINGE> "LIEF::ELF::Symbol::BINDING") binding\_from(uint32\_t value, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH"))

#### [` type_from `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol9type_fromE8uint32_t4ARCH>)

static inline [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol4TYPEE> "LIEF::ELF::Symbol::TYPE") type\_from(uint32\_t value, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH"))

#### [` to_value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol8to_valueE7BINDING>)

static inline uint8\_t to\_value([BINDING](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol7BINDINGE> "LIEF::ELF::Symbol::BINDING") binding)

#### [` to_value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol8to_valueE4TYPE>)

static inline uint8\_t to\_value([TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Symbol4TYPEE> "LIEF::ELF::Symbol::TYPE") type)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbollsERNSt7ostreamERK6Symbol>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6SymbolE> "LIEF::ELF::Symbol") &amp;entry)

---

## [Symbol Version](<https://lief.re/doc/latest/formats/elf/cpp.html#symbol-version>)

### [` SymbolVersion `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersionE>)

class SymbolVersion : public LIEF::Object

Class which represents an entry defined in the `DT_VERSYM` dynamic entry.

Public Functions

#### [` SymbolVersion `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion13SymbolVersionE8uint16_t>)

inline SymbolVersion(uint16\_t value)

#### [` SymbolVersion `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion13SymbolVersionEv>)

SymbolVersion() = default

#### [` ~SymbolVersion `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersionD0Ev>)

~SymbolVersion() override = default

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersionaSERK13SymbolVersion>)

[SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersionE> "LIEF::ELF::SymbolVersion") &amp;operator=(const [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersionE> "LIEF::ELF::SymbolVersion")&amp;) = default

#### [` SymbolVersion `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion13SymbolVersionERK13SymbolVersion>)

SymbolVersion(const [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion13SymbolVersionERK13SymbolVersion> "LIEF::ELF::SymbolVersion::SymbolVersion")&amp;) = default

#### [` value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF13SymbolVersion5valueEv>)

inline uint16\_t value() const

Value associated with the symbol.

If the given [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion>) hasn’t Auxiliary version:

- `0` means **Local**
- `1` means **Global**

#### [` version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF13SymbolVersion7versionEv>)

inline uint16\_t version() const

Version index without the GNU `VERSYM_HIDDEN` bit.

#### [` is_local `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF13SymbolVersion8is_localEv>)

inline bool is\_local() const

Whether this symbol version is local (`VER_NDX_LOCAL`).

#### [` is_global `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF13SymbolVersion9is_globalEv>)

inline bool is\_global() const

Whether this symbol version is global (`VER_NDX_GLOBAL`).

`VERSYM_BASE` has the same value as `VER_NDX_GLOBAL`, so this also identifies the base version.

#### [` is_hidden `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF13SymbolVersion9is_hiddenEv>)

inline bool is\_hidden() const

Whether the GNU `VERSYM_HIDDEN` bit is set.

A hidden version is only available when explicitly referenced by its version name.

#### [` set_hidden `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion10set_hiddenEb>)

inline void set\_hidden(bool value = true)

Set or clear the GNU `VERSYM_HIDDEN` bit while preserving the version index.

#### [` has_auxiliary_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF13SymbolVersion21has_auxiliary_versionEv>)

inline bool has\_auxiliary\_version() const

Whether the current [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion>) has an auxiliary one.

#### [` symbol_version_auxiliary `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion24symbol_version_auxiliaryEv>)

inline [SymbolVersionAux](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAuxE> "LIEF::ELF::SymbolVersionAux") \*symbol\_version\_auxiliary()

[SymbolVersionAux](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionAux>) associated with the current Version if any, or a nullptr.

#### [` symbol_version_auxiliary `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF13SymbolVersion24symbol_version_auxiliaryEv>)

inline const [SymbolVersionAux](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAuxE> "LIEF::ELF::SymbolVersionAux") \*symbol\_version\_auxiliary() const

#### [` symbol_version_auxiliary `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion24symbol_version_auxiliaryER27SymbolVersionAuxRequirement>)

void symbol\_version\_auxiliary([SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirementE> "LIEF::ELF::SymbolVersionAuxRequirement") &amp;svauxr)

Set the version’s auxiliary requirement The given [SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionAuxRequirement>) must be an existing reference in the [ELF::Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary>).

On can add a new [SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionAuxRequirement>) by using [SymbolVersionRequirement::add\_aux\_requirement](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionRequirement_1adeea1338232d81d9e857d422f19d2371>)

#### [` drop_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion12drop_versionE8uint16_t>)

inline void drop\_version(uint16\_t value)

Drop the versioning requirement and replace the value (local/global).

#### [` as_global `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion9as_globalEv>)

inline void as\_global()

Redefine this version as global by dropping its auxiliary version.

> **See also**
> 
> [as\_local()](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion_1acff109df95ac0ba2f8a446241adbc014>) [drop\_version()](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion_1a50b7ce4ac8e7dea122188c21d2fce344>)

#### [` as_local `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion8as_localEv>)

inline void as\_local()

Redefine this version as local by dropping its auxiliary version.

> **See also**
> 
> [as\_global()](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion_1ad221e40cb5dadab538be4832c3fda879>) [drop\_version()](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion_1a50b7ce4ac8e7dea122188c21d2fce344>)

#### [` value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion5valueE8uint16_t>)

inline void value(uint16\_t v)

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF13SymbolVersion6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Functions

#### [` local `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion5localEv>)

static inline [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersionE> "LIEF::ELF::SymbolVersion") local()

Generate a *local* [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion>).

#### [` global `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion6globalEv>)

static inline [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersionE> "LIEF::ELF::SymbolVersion") global()

Generate a *global* [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion>).

Public Static Attributes

#### [` LOCAL_VERSION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion13LOCAL_VERSIONE>)

static uint16\_t LOCAL\_VERSION = 0

#### [` GLOBAL_VERSION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion14GLOBAL_VERSIONE>)

static uint16\_t GLOBAL\_VERSION = 1

#### [` HIDDEN_MASK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion11HIDDEN_MASKE>)

static uint16\_t HIDDEN\_MASK = 0x8000

Mask for the GNU `VERSYM_HIDDEN` bit.

#### [` VERSION_MASK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersion12VERSION_MASKE>)

static uint16\_t VERSION\_MASK = 0x7fff

Mask for the version index (`VERSYM_VERSION` in the GNU implementation).

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersionlsERNSt7ostreamERK13SymbolVersion>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF13SymbolVersionE> "LIEF::ELF::SymbolVersion") &amp;symv)

---

## [Symbol Version Auxiliary](<https://lief.re/doc/latest/formats/elf/cpp.html#symbol-version-auxiliary>)

### [` SymbolVersionAux `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAuxE>)

class SymbolVersionAux : public LIEF::Object

Class which represents an Auxiliary [Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>) version.

Subclassed by [LIEF::ELF::SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionAuxRequirement>)

Public Functions

#### [` SymbolVersionAux `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAux16SymbolVersionAuxENSt6stringE>)

inline SymbolVersionAux(std::string name)

#### [` SymbolVersionAux `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAux16SymbolVersionAuxEv>)

SymbolVersionAux() = default

#### [` ~SymbolVersionAux `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAuxD0Ev>)

~SymbolVersionAux() override = default

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAuxaSERK16SymbolVersionAux>)

[SymbolVersionAux](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAuxE> "LIEF::ELF::SymbolVersionAux") &amp;operator=(const [SymbolVersionAux](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAuxE> "LIEF::ELF::SymbolVersionAux")&amp;) = default

#### [` SymbolVersionAux `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAux16SymbolVersionAuxERK16SymbolVersionAux>)

SymbolVersionAux(const [SymbolVersionAux](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAux16SymbolVersionAuxERK16SymbolVersionAux> "LIEF::ELF::SymbolVersionAux::SymbolVersionAux")&amp;) = default

#### [` name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF16SymbolVersionAux4nameEv>)

inline std::string\_view name() const

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>)’s aux name (e.g. `GLIBC_2.2.5`).

#### [` name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAux4nameENSt6stringE>)

inline void name(std::string name)

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF16SymbolVersionAux6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAuxlsERNSt7ostreamERK16SymbolVersionAux>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [SymbolVersionAux](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAuxE> "LIEF::ELF::SymbolVersionAux") &amp;aux)

---

## [Symbol Version Definition](<https://lief.re/doc/latest/formats/elf/cpp.html#symbol-version-definition>)

### [` SymbolVersionDefinition `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinitionE>)

class SymbolVersionDefinition : public LIEF::Object

Class which represents an entry defined in `DT_VERDEF` or `.gnu.version_d`.

Public Types

#### [` version_aux_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition13version_aux_tE>)

using version\_aux\_t = std::vector&lt;std::unique\_ptr&lt;[SymbolVersionAux](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAuxE> "LIEF::ELF::SymbolVersionAux")&gt;&gt;

#### [` it_version_aux `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition14it_version_auxE>)

using it\_version\_aux = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[version\_aux\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition13version_aux_tE> "LIEF::ELF::SymbolVersionDefinition::version_aux_t")&amp;, [SymbolVersionAux](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAuxE> "LIEF::ELF::SymbolVersionAux")\*&gt;

#### [` it_const_version_aux `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition20it_const_version_auxE>)

using it\_const\_version\_aux = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [version\_aux\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition13version_aux_tE> "LIEF::ELF::SymbolVersionDefinition::version_aux_t")&amp;, const [SymbolVersionAux](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAuxE> "LIEF::ELF::SymbolVersionAux")\*&gt;

Public Functions

#### [` SymbolVersionDefinition `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition23SymbolVersionDefinitionEv>)

SymbolVersionDefinition() = default

#### [` SymbolVersionDefinition `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition23SymbolVersionDefinitionERKN7details12Elf64_VerdefE>)

SymbolVersionDefinition(const details::Elf64\_Verdef &amp;header)

#### [` SymbolVersionDefinition `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition23SymbolVersionDefinitionERKN7details12Elf32_VerdefE>)

SymbolVersionDefinition(const details::Elf32\_Verdef &amp;header)

#### [` ~SymbolVersionDefinition `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinitionD0Ev>)

~SymbolVersionDefinition() override

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinitionaSE23SymbolVersionDefinition>)

[SymbolVersionDefinition](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinitionE> "LIEF::ELF::SymbolVersionDefinition") &amp;operator=([SymbolVersionDefinition](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinitionE> "LIEF::ELF::SymbolVersionDefinition") other)

#### [` SymbolVersionDefinition `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition23SymbolVersionDefinitionERK23SymbolVersionDefinition>)

SymbolVersionDefinition(const [SymbolVersionDefinition](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition23SymbolVersionDefinitionERK23SymbolVersionDefinition> "LIEF::ELF::SymbolVersionDefinition::SymbolVersionDefinition") &amp;other)

#### [` swap `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition4swapER23SymbolVersionDefinition>)

void swap([SymbolVersionDefinition](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinitionE> "LIEF::ELF::SymbolVersionDefinition") &amp;other)

#### [` version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF23SymbolVersionDefinition7versionEv>)

inline uint16\_t version() const

Version revision.

This field should always have the value `1`. It will be changed if the versioning implementation has to be changed in an incompatible way.

#### [` flags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF23SymbolVersionDefinition5flagsEv>)

inline uint16\_t flags() const

Version information.

#### [` ndx `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF23SymbolVersionDefinition3ndxEv>)

inline uint16\_t ndx() const

Version index.

Numeric value used as an index in the [LIEF::ELF::SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion>) table

#### [` hash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF23SymbolVersionDefinition4hashEv>)

inline uint32\_t hash() const

Hash value of the symbol’s name (using ELF hash function).

#### [` symbols_aux `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition11symbols_auxEv>)

inline [it\_version\_aux](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition14it_version_auxE> "LIEF::ELF::SymbolVersionDefinition::it_version_aux") symbols\_aux()

[SymbolVersionAux](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionAux>) entries.

#### [` symbols_aux `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF23SymbolVersionDefinition11symbols_auxEv>)

inline [it\_const\_version\_aux](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition20it_const_version_auxE> "LIEF::ELF::SymbolVersionDefinition::it_const_version_aux") symbols\_aux() const

#### [` version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition7versionE8uint16_t>)

inline void version(uint16\_t version)

#### [` flags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition5flagsE8uint16_t>)

inline void flags(uint16\_t flags)

#### [` hash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinition4hashE8uint32_t>)

inline void hash(uint32\_t hash)

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF23SymbolVersionDefinition6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinitionlsERNSt7ostreamERK23SymbolVersionDefinition>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [SymbolVersionDefinition](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF23SymbolVersionDefinitionE> "LIEF::ELF::SymbolVersionDefinition") &amp;sym)

---

## [Symbol Version Requirement](<https://lief.re/doc/latest/formats/elf/cpp.html#symbol-version-requirement>)

### [` SymbolVersionRequirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirementE>)

class SymbolVersionRequirement : public LIEF::Object

Class which represents an entry in the `DT_VERNEED` or `.gnu.version_r` table.

Public Types

#### [` aux_requirement_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement17aux_requirement_tE>)

using aux\_requirement\_t = std::vector&lt;std::unique\_ptr&lt;[SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirementE> "LIEF::ELF::SymbolVersionAuxRequirement")&gt;&gt;

#### [` it_aux_requirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement18it_aux_requirementE>)

using it\_aux\_requirement = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[aux\_requirement\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement17aux_requirement_tE> "LIEF::ELF::SymbolVersionRequirement::aux_requirement_t")&amp;, [SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirementE> "LIEF::ELF::SymbolVersionAuxRequirement")\*&gt;

#### [` it_const_aux_requirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement24it_const_aux_requirementE>)

using it\_const\_aux\_requirement = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [aux\_requirement\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement17aux_requirement_tE> "LIEF::ELF::SymbolVersionRequirement::aux_requirement_t")&amp;, const [SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirementE> "LIEF::ELF::SymbolVersionAuxRequirement")\*&gt;

Public Functions

#### [` SymbolVersionRequirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement24SymbolVersionRequirementEv>)

SymbolVersionRequirement() = default

#### [` SymbolVersionRequirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement24SymbolVersionRequirementERKN7details13Elf64_VerneedE>)

SymbolVersionRequirement(const details::Elf64\_Verneed &amp;header)

#### [` SymbolVersionRequirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement24SymbolVersionRequirementERKN7details13Elf32_VerneedE>)

SymbolVersionRequirement(const details::Elf32\_Verneed &amp;header)

#### [` ~SymbolVersionRequirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirementD0Ev>)

~SymbolVersionRequirement() override = default

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirementaSE24SymbolVersionRequirement>)

[SymbolVersionRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirementE> "LIEF::ELF::SymbolVersionRequirement") &amp;operator=([SymbolVersionRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirementE> "LIEF::ELF::SymbolVersionRequirement") other)

#### [` SymbolVersionRequirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement24SymbolVersionRequirementERK24SymbolVersionRequirement>)

SymbolVersionRequirement(const [SymbolVersionRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement24SymbolVersionRequirementERK24SymbolVersionRequirement> "LIEF::ELF::SymbolVersionRequirement::SymbolVersionRequirement") &amp;other)

#### [` swap `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement4swapER24SymbolVersionRequirement>)

void swap([SymbolVersionRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirementE> "LIEF::ELF::SymbolVersionRequirement") &amp;other)

#### [` version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF24SymbolVersionRequirement7versionEv>)

inline uint16\_t version() const

Version revision.

This field should always have the value `1`. It will be changed if the versioning implementation has to be changed in an incompatible way.

#### [` cnt `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF24SymbolVersionRequirement3cntEv>)

inline size\_t cnt() const

Number of auxiliary entries.

#### [` auxiliary_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement17auxiliary_symbolsEv>)

inline [it\_aux\_requirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement18it_aux_requirementE> "LIEF::ELF::SymbolVersionRequirement::it_aux_requirement") auxiliary\_symbols()

Auxiliary entries as an iterator over [SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionAuxRequirement>).

#### [` auxiliary_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF24SymbolVersionRequirement17auxiliary_symbolsEv>)

inline [it\_const\_aux\_requirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement24it_const_aux_requirementE> "LIEF::ELF::SymbolVersionRequirement::it_const_aux_requirement") auxiliary\_symbols() const

#### [` name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF24SymbolVersionRequirement4nameEv>)

inline std::string\_view name() const

Return the library name associated with this requirement (e.g. `libc.so.6`).

#### [` version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement7versionE8uint16_t>)

inline void version(uint16\_t version)

#### [` name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement4nameERKNSt6stringE>)

inline void name(const std::string &amp;name)

#### [` add_aux_requirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement19add_aux_requirementERK27SymbolVersionAuxRequirement>)

[SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirementE> "LIEF::ELF::SymbolVersionAuxRequirement") &amp;add\_aux\_requirement(const [SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirementE> "LIEF::ELF::SymbolVersionAuxRequirement") &amp;aux\_requirement)

Add a version auxiliary requirement to the existing list.

#### [` find_aux `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF24SymbolVersionRequirement8find_auxERKNSt6stringE>)

const [SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirementE> "LIEF::ELF::SymbolVersionAuxRequirement") \*find\_aux(const std::string &amp;name) const

Try to find the [SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionAuxRequirement>) with the given name (e.g. `GLIBC_2.27`).

#### [` find_aux `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement8find_auxERKNSt6stringE>)

inline [SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirementE> "LIEF::ELF::SymbolVersionAuxRequirement") \*find\_aux(const std::string &amp;name)

#### [` remove_aux_requirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement22remove_aux_requirementERKNSt6stringE>)

inline bool remove\_aux\_requirement(const std::string &amp;name)

Try to remove the auxiliary requirement symbol with the given name. The function returns true if the operation succeed, false otherwise.

> **Warning**
> 
> this function invalidates all the references (pointers) of [SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionAuxRequirement>). Therefore, the user is responsible to ensure that the auxiliary requirement is no longer used in the ELF binary (e.g. in [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion>))

#### [` remove_aux_requirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirement22remove_aux_requirementER27SymbolVersionAuxRequirement>)

bool remove\_aux\_requirement([SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirementE> "LIEF::ELF::SymbolVersionAuxRequirement") &amp;aux)

Try to remove the given auxiliary requirement symbol. The function returns true if the operation succeed, false otherwise.

> **Warning**
> 
> this function invalidates all the references (pointers) of [SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersionAuxRequirement>). Therefore, the user is responsible to ensure that the auxiliary requirement is no longer used in the ELF binary (e.g. in [SymbolVersion](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1SymbolVersion>))

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF24SymbolVersionRequirement6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirementlsERNSt7ostreamERK24SymbolVersionRequirement>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [SymbolVersionRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF24SymbolVersionRequirementE> "LIEF::ELF::SymbolVersionRequirement") &amp;symr)

---

## [Symbol Version Auxiliary Requirement](<https://lief.re/doc/latest/formats/elf/cpp.html#symbol-version-auxiliary-requirement>)

### [` SymbolVersionAuxRequirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirementE>)

class SymbolVersionAuxRequirement : public LIEF::ELF::[SymbolVersionAux](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF16SymbolVersionAuxE> "LIEF::ELF::SymbolVersionAux")

Public Functions

#### [` SymbolVersionAuxRequirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirement27SymbolVersionAuxRequirementERKN7details13Elf64_VernauxE>)

SymbolVersionAuxRequirement(const details::Elf64\_Vernaux &amp;header)

#### [` SymbolVersionAuxRequirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirement27SymbolVersionAuxRequirementERKN7details13Elf32_VernauxE>)

SymbolVersionAuxRequirement(const details::Elf32\_Vernaux &amp;header)

#### [` SymbolVersionAuxRequirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirement27SymbolVersionAuxRequirementEv>)

SymbolVersionAuxRequirement() = default

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirementaSERK27SymbolVersionAuxRequirement>)

[SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirementE> "LIEF::ELF::SymbolVersionAuxRequirement") &amp;operator=(const [SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirementE> "LIEF::ELF::SymbolVersionAuxRequirement")&amp;) = default

#### [` SymbolVersionAuxRequirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirement27SymbolVersionAuxRequirementERK27SymbolVersionAuxRequirement>)

SymbolVersionAuxRequirement(const [SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirement27SymbolVersionAuxRequirementERK27SymbolVersionAuxRequirement> "LIEF::ELF::SymbolVersionAuxRequirement::SymbolVersionAuxRequirement")&amp;) = default

#### [` ~SymbolVersionAuxRequirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirementD0Ev>)

~SymbolVersionAuxRequirement() override = default

#### [` hash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF27SymbolVersionAuxRequirement4hashEv>)

inline uint32\_t hash() const

Hash value of the dependency name (use ELF hashing function).

#### [` flags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF27SymbolVersionAuxRequirement5flagsEv>)

inline uint16\_t flags() const

Bitmask of flags.

#### [` other `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF27SymbolVersionAuxRequirement5otherEv>)

inline uint16\_t other() const

It returns the unique version index for the file which is used in the version symbol table. If the highest bit (bit 15) is set this is a hidden symbol which cannot be referenced from outside the object.

#### [` hash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirement4hashE8uint32_t>)

inline void hash(uint32\_t hash)

#### [` flags `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirement5flagsE8uint16_t>)

inline void flags(uint16\_t flags)

#### [` other `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirement5otherE8uint16_t>)

inline void other(uint16\_t other)

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF27SymbolVersionAuxRequirement6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF27SymbolVersionAuxRequirement4nameEv>)

inline std::string\_view name() const

[Symbol](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Symbol>)’s aux name (e.g. `GLIBC_2.2.5`).

#### [` name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirement4nameENSt6stringE>)

inline void name(std::string name)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirementlsERNSt7ostreamERK27SymbolVersionAuxRequirement>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [SymbolVersionAuxRequirement](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF27SymbolVersionAuxRequirementE> "LIEF::ELF::SymbolVersionAuxRequirement") &amp;aux)

---

## [GNU Hash table](<https://lief.re/doc/latest/formats/elf/cpp.html#gnu-hash-table>)

### [` GnuHash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHashE>)

class GnuHash : public LIEF::Object

Class which provides a view over the GNU Hash implementation. Most of the fields are read-only since the values are re-computed by the [LIEF::ELF::Builder](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Builder>).

Public Functions

#### [` GnuHash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHash7GnuHashEv>)

GnuHash() = default

#### [` GnuHash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHash7GnuHashE8uint32_t8uint32_tNSt6vectorI8uint64_tEENSt6vectorI8uint32_tEENSt6vectorI8uint32_tEE>)

inline GnuHash(uint32\_t symbol\_idx, uint32\_t shift2, std::vector&lt;uint64\_t&gt; bloom\_filters, std::vector&lt;uint32\_t&gt; buckets, std::vector&lt;uint32\_t&gt; hash\_values = {})

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHashaSERK7GnuHash>)

[GnuHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHashE> "LIEF::ELF::GnuHash") &amp;operator=(const [GnuHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHashE> "LIEF::ELF::GnuHash") &amp;copy) = default

#### [` GnuHash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHash7GnuHashERK7GnuHash>)

GnuHash(const [GnuHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHash7GnuHashERK7GnuHash> "LIEF::ELF::GnuHash::GnuHash") &amp;copy) = default

#### [` GnuHash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHash7GnuHashERR7GnuHash>)

GnuHash([GnuHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHash7GnuHashERR7GnuHash> "LIEF::ELF::GnuHash::GnuHash")&amp;&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHashaSERR7GnuHash>)

[GnuHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHashE> "LIEF::ELF::GnuHash") &amp;operator=([GnuHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHashE> "LIEF::ELF::GnuHash")&amp;&amp;) = default

#### [` ~GnuHash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHashD0Ev>)

~GnuHash() override = default

#### [` nb_buckets `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7GnuHash10nb_bucketsEv>)

inline uint32\_t nb\_buckets() const

Return the number of buckets.

> **See also**
> 
> [GnuHash::buckets](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1GnuHash_1ae5e9de01275f335ee87655c02c48ce3f>)

#### [` symbol_index `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7GnuHash12symbol_indexEv>)

inline uint32\_t symbol\_index() const

Index of the first symbol in the dynamic symbols table which is accessible with the hash table.

#### [` shift2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7GnuHash6shift2Ev>)

inline uint32\_t shift2() const

Shift count used in the bloom filter.

#### [` maskwords `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7GnuHash9maskwordsEv>)

inline uint32\_t maskwords() const

Number of bloom filters used. It must be a power of 2.

#### [` bloom_filters `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7GnuHash13bloom_filtersEv>)

inline const std::vector&lt;uint64\_t&gt; &amp;bloom\_filters() const

Bloom filters.

#### [` buckets `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7GnuHash7bucketsEv>)

inline const std::vector&lt;uint32\_t&gt; &amp;buckets() const

Hash buckets.

#### [` hash_values `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7GnuHash11hash_valuesEv>)

inline const std::vector&lt;uint32\_t&gt; &amp;hash\_values() const

Hash values.

#### [` check_bloom_filter `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7GnuHash18check_bloom_filterE8uint32_t>)

bool check\_bloom\_filter(uint32\_t hash) const

Check if the given hash passes the bloom filter.

#### [` check_bucket `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7GnuHash12check_bucketE8uint32_t>)

inline bool check\_bucket(uint32\_t hash) const

Check if the given hash passes the bucket filter.

#### [` check `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7GnuHash5checkERKNSt6stringE>)

bool check(const std::string &amp;symbol\_name) const

Check if the symbol *probably* exists. If the returned value is `false` you can assume at `100%` that the symbol with the given name doesn’t exist. If `true`, you can’t do any assumption.

#### [` check `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7GnuHash5checkE8uint32_t>)

bool check(uint32\_t hash) const

Check if the symbol associated with the given hash *probably* exists. If the returned value is `false` you can assume at `100%` that the symbol doesn’t exist. If `true` you can’t do any assumption.

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7GnuHash6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` original_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7GnuHash13original_sizeEv>)

inline uint64\_t original\_size() const

Public Static Functions

#### [` ELF_Tparse `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0EN4LIEF3ELF7GnuHash5parseENSt10unique_ptrI7GnuHashEER10SpanStream8uint64_t>)

template&lt;class ELF\_T&gt;  
static std::unique\_ptr&lt;[GnuHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHashE> "LIEF::ELF::GnuHash")&gt; parse([SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream") &amp;strm, uint64\_t dynsymcount)

#### [` ELF_Tnb_symbols `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0EN4LIEF3ELF7GnuHash10nb_symbolsE6resultI8uint32_tER10SpanStream>)

template&lt;class ELF\_T&gt;  
static [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint32\_t&gt; nb\_symbols([SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream") &amp;strm)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHashlsERNSt7ostreamERK7GnuHash>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [GnuHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GnuHashE> "LIEF::ELF::GnuHash") &amp;gnuhash)

---

## [SYSV Hash table](<https://lief.re/doc/latest/formats/elf/cpp.html#sysv-hash-table>)

### [` SysvHash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHashE>)

class SysvHash : public LIEF::Object

Class which represents the SYSV hash for the symbols resolution.

References:

- [http://www.linker-aliens.org/blogs/ali/entry/gnu\_hash\_elf\_sections/](<http://www.linker-aliens.org/blogs/ali/entry/gnu_hash_elf_sections/>)
- [https://docs.oracle.com/cd/E23824\_01/html/819-0690/chapter6-48031.html](<https://docs.oracle.com/cd/E23824_01/html/819-0690/chapter6-48031.html>)

Public Functions

#### [` SysvHash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHash8SysvHashEv>)

SysvHash() = default

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHashaSERK8SysvHash>)

[SysvHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHashE> "LIEF::ELF::SysvHash") &amp;operator=(const [SysvHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHashE> "LIEF::ELF::SysvHash") &amp;copy) = default

#### [` SysvHash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHash8SysvHashERK8SysvHash>)

SysvHash(const [SysvHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHash8SysvHashERK8SysvHash> "LIEF::ELF::SysvHash::SysvHash") &amp;copy) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHashaSERR8SysvHash>)

[SysvHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHashE> "LIEF::ELF::SysvHash") &amp;operator=([SysvHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHashE> "LIEF::ELF::SysvHash")&amp;&amp;) = default

#### [` SysvHash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHash8SysvHashERR8SysvHash>)

SysvHash([SysvHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHash8SysvHashERR8SysvHash> "LIEF::ELF::SysvHash::SysvHash")&amp;&amp;) = default

#### [` ~SysvHash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHashD0Ev>)

~SysvHash() override = default

#### [` nbucket `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8SysvHash7nbucketEv>)

inline uint32\_t nbucket() const

Return the number of buckets used.

#### [` nchain `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8SysvHash6nchainEv>)

inline uint32\_t nchain() const

Return the number of chain used.

#### [` buckets `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8SysvHash7bucketsEv>)

inline const std::vector&lt;uint32\_t&gt; &amp;buckets() const

Buckets values.

#### [` chains `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8SysvHash6chainsEv>)

inline const std::vector&lt;uint32\_t&gt; &amp;chains() const

Chains values.

#### [` nchain `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHash6nchainE8uint32_t>)

inline void nchain(uint32\_t nb)

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8SysvHash6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHashlsERNSt7ostreamERK8SysvHash>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [SysvHash](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8SysvHashE> "LIEF::ELF::SysvHash") &amp;sysvhash)

---

## [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#note>)

### [` Note `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE>)

class Note : public LIEF::Object

Class which represents an ELF note. This class can be instantiated using the static [Note::create](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Note_1a5f8d5caa46eafed1b5abd005261384eb>) functions.

Subclassed by [LIEF::ELF::AndroidIdent](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1AndroidIdent>), [LIEF::ELF::CoreAuxv](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1CoreAuxv>), [LIEF::ELF::CoreFile](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1CoreFile>), [LIEF::ELF::CorePrPsInfo](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1CorePrPsInfo>), [LIEF::ELF::CorePrStatus](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1CorePrStatus>), [LIEF::ELF::CoreSigInfo](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1CoreSigInfo>), [LIEF::ELF::NoteAbi](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1NoteAbi>), [LIEF::ELF::NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1NoteGnuProperty>), [LIEF::ELF::QNXStack](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1QNXStack>)

Public Types

#### [` TYPE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPEE>)

enum class TYPE

LIEF representation of the ELF `NT_` values.

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` GNU_ABI_TAG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE11GNU_ABI_TAGE>)

enumerator GNU\_ABI\_TAG

Match `NT_GNU_ABI_TAG`: Operating system (OS) ABI information.

See: [NoteAbi](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1NoteAbi>)

##### [` GNU_HWCAP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE9GNU_HWCAPE>)

enumerator GNU\_HWCAP

Match `NT_HWCAP`: Synthetic hardware capabilities information.

##### [` GNU_BUILD_ID `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE12GNU_BUILD_IDE>)

enumerator GNU\_BUILD\_ID

Match `NT_GNU_BUILD_ID`: Unique build ID as generated by the GNU ld.

##### [` GNU_GOLD_VERSION `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE16GNU_GOLD_VERSIONE>)

enumerator GNU\_GOLD\_VERSION

Match `NT_GNU_GOLD_VERSION`: The version of gold used to link.

##### [` GNU_PROPERTY_TYPE_0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE19GNU_PROPERTY_TYPE_0E>)

enumerator GNU\_PROPERTY\_TYPE\_0

Match `NT_GNU_PROPERTY_TYPE_0`: Program property note, as described in “Linux Extensions to the gABI”.

##### [` GNU_BUILD_ATTRIBUTE_OPEN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE24GNU_BUILD_ATTRIBUTE_OPENE>)

enumerator GNU\_BUILD\_ATTRIBUTE\_OPEN

##### [` GNU_BUILD_ATTRIBUTE_FUNC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE24GNU_BUILD_ATTRIBUTE_FUNCE>)

enumerator GNU\_BUILD\_ATTRIBUTE\_FUNC

##### [` CRASHPAD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE8CRASHPADE>)

enumerator CRASHPAD

Crashpad note used by the Chromium project.

##### [` CORE_PRSTATUS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE13CORE_PRSTATUSE>)

enumerator CORE\_PRSTATUS

Coredump that wraps the `elf_prstatus` structure.

##### [` CORE_FPREGSET `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE13CORE_FPREGSETE>)

enumerator CORE\_FPREGSET

##### [` CORE_PRPSINFO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE13CORE_PRPSINFOE>)

enumerator CORE\_PRPSINFO

Coredump that wraps the `elf_prpsinfo` structure.

See: [CorePrPsInfo](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1CorePrPsInfo>)

##### [` CORE_TASKSTRUCT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE15CORE_TASKSTRUCTE>)

enumerator CORE\_TASKSTRUCT

##### [` CORE_AUXV `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE9CORE_AUXVE>)

enumerator CORE\_AUXV

Coredump that contains a copy of all the auxiliary vectors (auxv).

See: [CoreAuxv](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1CoreAuxv>)

##### [` CORE_PSTATUS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE12CORE_PSTATUSE>)

enumerator CORE\_PSTATUS

##### [` CORE_FPREGS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE11CORE_FPREGSE>)

enumerator CORE\_FPREGS

Coredump that wraps the `fpregset` structure.

##### [` CORE_PSINFO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE11CORE_PSINFOE>)

enumerator CORE\_PSINFO

Coredump that wraps the `psinfo` structure.

##### [` CORE_LWPSTATUS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE14CORE_LWPSTATUSE>)

enumerator CORE\_LWPSTATUS

##### [` CORE_LWPSINFO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE13CORE_LWPSINFOE>)

enumerator CORE\_LWPSINFO

##### [` CORE_WIN32PSTATUS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE17CORE_WIN32PSTATUSE>)

enumerator CORE\_WIN32PSTATUS

##### [` CORE_FILE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE9CORE_FILEE>)

enumerator CORE\_FILE

##### [` CORE_PRXFPREG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE13CORE_PRXFPREGE>)

enumerator CORE\_PRXFPREG

##### [` CORE_SIGINFO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE12CORE_SIGINFOE>)

enumerator CORE\_SIGINFO

##### [` CORE_ARM_VFP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE12CORE_ARM_VFPE>)

enumerator CORE\_ARM\_VFP

##### [` CORE_ARM_TLS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE12CORE_ARM_TLSE>)

enumerator CORE\_ARM\_TLS

##### [` CORE_ARM_HW_BREAK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE17CORE_ARM_HW_BREAKE>)

enumerator CORE\_ARM\_HW\_BREAK

##### [` CORE_ARM_HW_WATCH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE17CORE_ARM_HW_WATCHE>)

enumerator CORE\_ARM\_HW\_WATCH

##### [` CORE_ARM_SYSTEM_CALL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE20CORE_ARM_SYSTEM_CALLE>)

enumerator CORE\_ARM\_SYSTEM\_CALL

##### [` CORE_ARM_SVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE12CORE_ARM_SVEE>)

enumerator CORE\_ARM\_SVE

##### [` CORE_ARM_PAC_MASK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE17CORE_ARM_PAC_MASKE>)

enumerator CORE\_ARM\_PAC\_MASK

##### [` CORE_ARM_PACA_KEYS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE18CORE_ARM_PACA_KEYSE>)

enumerator CORE\_ARM\_PACA\_KEYS

##### [` CORE_ARM_PACG_KEYS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE18CORE_ARM_PACG_KEYSE>)

enumerator CORE\_ARM\_PACG\_KEYS

##### [` CORE_TAGGED_ADDR_CTRL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE21CORE_TAGGED_ADDR_CTRLE>)

enumerator CORE\_TAGGED\_ADDR\_CTRL

##### [` CORE_PAC_ENABLED_KEYS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE21CORE_PAC_ENABLED_KEYSE>)

enumerator CORE\_PAC\_ENABLED\_KEYS

##### [` CORE_X86_TLS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE12CORE_X86_TLSE>)

enumerator CORE\_X86\_TLS

##### [` CORE_X86_IOPERM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE15CORE_X86_IOPERME>)

enumerator CORE\_X86\_IOPERM

##### [` CORE_X86_XSTATE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE15CORE_X86_XSTATEE>)

enumerator CORE\_X86\_XSTATE

##### [` CORE_X86_CET `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE12CORE_X86_CETE>)

enumerator CORE\_X86\_CET

##### [` ANDROID_IDENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE13ANDROID_IDENTE>)

enumerator ANDROID\_IDENT

[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Note>) that is specific to Android and that describes information such as the NDK version or the SDK build number.

See [AndroidIdent](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1AndroidIdent>)

##### [` ANDROID_MEMTAG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE14ANDROID_MEMTAGE>)

enumerator ANDROID\_MEMTAG

##### [` ANDROID_KUSER `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE13ANDROID_KUSERE>)

enumerator ANDROID\_KUSER

##### [` GO_BUILDID `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE10GO_BUILDIDE>)

enumerator GO\_BUILDID

[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Note>) specific to Go binaries.

##### [` STAPSDT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE7STAPSDTE>)

enumerator STAPSDT

[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Note>) for SystemTap probes.

##### [` QNX_STACK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPE9QNX_STACKE>)

enumerator QNX\_STACK

QNX [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Note>).

#### [` description_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note13description_tE>)

using description\_t = std::vector&lt;uint8\_t&gt;

Container used to handle the description data.

Public Functions

#### [` operator= `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteaSERK4Note>)

[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") &amp;operator=(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") &amp;copy) = default

#### [` Note `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4NoteERK4Note>)

Note(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4NoteERK4Note> "LIEF::ELF::Note::Note") &amp;copy) = default

#### [` ~Note `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteD0Ev>)

~Note() override = default

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF4Note5cloneEv>)

inline virtual std::unique\_ptr&lt;[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")&gt; clone() const

Clone the current note and keep its polymorphic type.

#### [` name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF4Note4nameEv>)

inline std::string\_view name() const

Return the *name* of the note (also known as ‘owner’ ).

#### [` section_name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF4Note12section_nameEv>)

inline std::string\_view section\_name() const

Return the section name in which the note is or should be stored.

#### [` type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF4Note4typeEv>)

inline [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPEE> "LIEF::ELF::Note::TYPE") type() const

Return the type of the note. This type does not match the `NT_` type value. For accessing the original `NT_` value, check [original\_type()](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Note_1a60333b14718d774e8c3f21f5f48165ea>).

#### [` original_type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF4Note13original_typeEv>)

inline uint32\_t original\_type() const

The original `NT_xxx` integer value. The meaning of this value likely depends on the owner of the note.

#### [` description `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF4Note11descriptionEv>)

inline span&lt;const uint8\_t&gt; description() const

Return the description associated with the note.

#### [` description `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note11descriptionEv>)

inline span&lt;uint8\_t&gt; description()

#### [` name `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4nameENSt6stringE>)

inline void name(std::string name)

#### [` description `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note11descriptionE13description_t>)

inline void description([description\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note13description_tE> "LIEF::ELF::Note::description_t") description)

Change the description of the note.

#### [` size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF4Note4sizeEv>)

uint64\_t size() const

Size of the **raw** note which includes padding.

#### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF4Note4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF4Note6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` Tcast `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0ENK4LIEF3ELF4Note4castEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0ENK4LIEF3ELF4Note4castEPK1Tv> "LIEF::ELF::Note::cast::T") \*cast() const

#### [` Tcast `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0EN4LIEF3ELF4Note4castEP1Tv>)

template&lt;class T&gt;  
inline [T](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4I0EN4LIEF3ELF4Note4castEP1Tv> "LIEF::ELF::Note::cast::T") \*cast()

Public Static Functions

#### [` convert_type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note12convert_typeEN6Header9FILE_TYPEE8uint32_tRKNSt6stringE>)

static [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPEE> "LIEF::ELF::Note::TYPE")&gt; convert\_type([Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[FILE\_TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header9FILE_TYPEE> "LIEF::ELF::Header::FILE_TYPE") ftype, uint32\_t type, const std::string &amp;name)

Convert the raw integer note type into a [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Note_1a36b63d97ec0d6bdcbc853bede75f828d>) according to the owner.

#### [` type_to_section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note15type_to_sectionE4TYPE>)

static [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;const char\*&gt; type\_to\_section([TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPEE> "LIEF::ELF::Note::TYPE") type)

Try to determine the ELF section name associated with the [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Note_1a36b63d97ec0d6bdcbc853bede75f828d>) provided in parameter.

#### [` note_to_section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note15note_to_sectionERK4Note>)

static inline [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;std::string&gt; note\_to\_section(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") &amp;note)

#### [` type_owner `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note10type_ownerE4TYPE>)

static [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;const char\*&gt; type\_owner([TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPEE> "LIEF::ELF::Note::TYPE") type)

Try to determine the owner’s name of the [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Note_1a36b63d97ec0d6bdcbc853bede75f828d>) provided in parameter.

#### [` create `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note6createERKNSt6stringE8uint32_t13description_tNSt6stringEN6Header9FILE_TYPEE4ARCHN6Header5CLASSE>)

static std::unique\_ptr&lt;[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")&gt; create(const std::string &amp;name, uint32\_t type, [description\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note13description_tE> "LIEF::ELF::Note::description_t") description, std::string section\_name, [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[FILE\_TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header9FILE_TYPEE> "LIEF::ELF::Header::FILE_TYPE") ftype = [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[FILE\_TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header9FILE_TYPEE> "LIEF::ELF::Header::FILE_TYPE")::[NONE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header9FILE_TYPE4NONEE> "LIEF::ELF::Header::FILE_TYPE::NONE"), [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch = [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH")::[NONE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4NONEE> "LIEF::ELF::ARCH::NONE"), [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[CLASS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASSE> "LIEF::ELF::Header::CLASS") cls = [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[CLASS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASSE> "LIEF::ELF::Header::CLASS")::[NONE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASS4NONEE> "LIEF::ELF::Header::CLASS::NONE"))

Create a new note from the given parameters. Additional information such as the architecture or the ELF class could be required for creating notes like Coredump notes.

#### [` create `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note6createERKNSt6stringE4TYPE13description_tNSt6stringE4ARCHN6Header5CLASSE>)

static std::unique\_ptr&lt;[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")&gt; create(const std::string &amp;name, [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note4TYPEE> "LIEF::ELF::Note::TYPE") type, [description\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note13description_tE> "LIEF::ELF::Note::description_t") description, std::string section\_name, [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch = [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH")::[NONE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4NONEE> "LIEF::ELF::ARCH::NONE"), [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[CLASS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASSE> "LIEF::ELF::Header::CLASS") cls = [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[CLASS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASSE> "LIEF::ELF::Header::CLASS")::[NONE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASS4NONEE> "LIEF::ELF::Header::CLASS::NONE"))

Create a new note from the given parameters. Additional information such as the architecture or the ELF class could be required for creating notes like Coredump notes.

#### [` create `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note6createER12BinaryStreamNSt6stringEN6Header9FILE_TYPEE4ARCHN6Header5CLASSE>)

static std::unique\_ptr&lt;[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")&gt; create([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream, std::string section\_name, [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[FILE\_TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header9FILE_TYPEE> "LIEF::ELF::Header::FILE_TYPE") ftype = [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[FILE\_TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header9FILE_TYPEE> "LIEF::ELF::Header::FILE_TYPE")::[NONE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header9FILE_TYPE4NONEE> "LIEF::ELF::Header::FILE_TYPE::NONE"), [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch = [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH")::[NONE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4NONEE> "LIEF::ELF::ARCH::NONE"), [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[CLASS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASSE> "LIEF::ELF::Header::CLASS") cls = [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[CLASS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASSE> "LIEF::ELF::Header::CLASS")::[NONE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASS4NONEE> "LIEF::ELF::Header::CLASS::NONE"))

Create a new note from the given stream. Additional information such as the architecture or the ELF class could be required for creating notes like Coredump notes.

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NotelsERNSt7ostreamERK4Note>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") &amp;note)

---

## [Core PrPsInfo](<https://lief.re/doc/latest/formats/elf/cpp.html#core-prpsinfo>)

### [` CorePrPsInfo `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfoE>)

class CorePrPsInfo : public LIEF::ELF::[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")

Class representing the NT\_PRPSINFO core note. This kind of note represents general information about the process.

Public Functions

#### [` CorePrPsInfo `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo12CorePrPsInfoE4ARCHN6Header5CLASSENSt6stringE8uint32_t13description_t>)

inline CorePrPsInfo([ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch, [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[CLASS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASSE> "LIEF::ELF::Header::CLASS") cls, std::string name, uint32\_t type, description\_t description)

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrPsInfo5cloneEv>)

inline virtual std::unique\_ptr&lt;[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")&gt; clone() const override

Clone the current note and keep its polymorphic type.

#### [` info `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrPsInfo4infoEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[info\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo6info_tE> "LIEF::ELF::CorePrPsInfo::info_t")&gt; info() const

Return a `elf_prpsinfo`-like structure or an error if it can’t be parsed.

#### [` info `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo4infoERK6info_t>)

void info(const [info\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo6info_tE> "LIEF::ELF::CorePrPsInfo::info_t") &amp;info)

#### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrPsInfo4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const override

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrPsInfo6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~CorePrPsInfo `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfoD0Ev>)

~CorePrPsInfo() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo7classofEPK4Note>)

static inline bool classof(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") \*note)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfolsERNSt7ostreamERK12CorePrPsInfo>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [CorePrPsInfo](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfoE> "LIEF::ELF::CorePrPsInfo") &amp;note)

#### [` info_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo6info_tE>)

struct info\_t

Public Functions

##### [` filename_stripped `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrPsInfo6info_t17filename_strippedEv>)

inline std::string filename\_stripped() const

Return the filename without the ending `\x00`.

##### [` args_stripped `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrPsInfo6info_t13args_strippedEv>)

inline std::string args\_stripped() const

Return the args without the ending `\x00`.

Public Members

##### [` state `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo6info_t5stateE>)

uint8\_t state = 0

Numeric process state.

##### [` sname `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo6info_t5snameE>)

char sname = ' '

Printable character representing state.

##### [` zombie `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo6info_t6zombieE>)

bool zombie = false

Whether the process is a zombie.

##### [` nice `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo6info_t4niceE>)

uint8\_t nice = 0

Nice value.

##### [` flag `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo6info_t4flagE>)

uint64\_t flag = 0

Process flag.

##### [` uid `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo6info_t3uidE>)

uint32\_t uid = 0

Process user ID.

##### [` gid `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo6info_t3gidE>)

uint32\_t gid = 0

Process group ID.

##### [` pid `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo6info_t3pidE>)

uint32\_t pid = 0

Process ID.

##### [` ppid `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo6info_t4ppidE>)

uint32\_t ppid = 0

Process parent ID.

##### [` pgrp `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo6info_t4pgrpE>)

uint32\_t pgrp = 0

Process group.

##### [` sid `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo6info_t3sidE>)

uint32\_t sid = 0

Process session ID.

##### [` filename `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo6info_t8filenameE>)

std::string filename

Filename of the executable.

##### [` args `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrPsInfo6info_t4argsE>)

std::string args

Initial part of the arguments.

---

## [Core File](<https://lief.re/doc/latest/formats/elf/cpp.html#core-file>)

### [` CoreFile `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFileE>)

class CoreFile : public LIEF::ELF::[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")

Class representing a core `NT_FILE` which describes the mapped files of the process.

Public Types

#### [` files_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile7files_tE>)

using files\_t = std::vector&lt;[entry\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile7entry_tE> "LIEF::ELF::CoreFile::entry_t")&gt;

#### [` iterator `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile8iteratorE>)

using iterator = [files\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile7files_tE> "LIEF::ELF::CoreFile::files_t")::iterator

#### [` const_iterator `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile14const_iteratorE>)

using const\_iterator = [files\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile7files_tE> "LIEF::ELF::CoreFile::files_t")::const\_iterator

Public Functions

#### [` CoreFile `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile8CoreFileE4ARCHN6Header5CLASSENSt6stringE8uint32_tN4Note13description_tE>)

CoreFile([ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch, [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[CLASS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASSE> "LIEF::ELF::Header::CLASS") cls, std::string name, uint32\_t type, [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")::[description\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4Note13description_tE> "LIEF::ELF::Note::description_t") description)

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8CoreFile5cloneEv>)

inline virtual std::unique\_ptr&lt;[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")&gt; clone() const override

Clone the current note and keep its polymorphic type.

#### [` count `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8CoreFile5countEv>)

inline uint64\_t count() const

Number of coredump file entries.

#### [` files `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8CoreFile5filesEv>)

inline const [files\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile7files_tE> "LIEF::ELF::CoreFile::files_t") &amp;files() const

Coredump file entries.

#### [` begin `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile5beginEv>)

inline [iterator](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile8iteratorE> "LIEF::ELF::CoreFile::iterator") begin()

#### [` end `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile3endEv>)

inline [iterator](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile8iteratorE> "LIEF::ELF::CoreFile::iterator") end()

#### [` begin `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8CoreFile5beginEv>)

inline [const\_iterator](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile14const_iteratorE> "LIEF::ELF::CoreFile::const_iterator") begin() const

#### [` end `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8CoreFile3endEv>)

inline [const\_iterator](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile14const_iteratorE> "LIEF::ELF::CoreFile::const_iterator") end() const

#### [` files `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile5filesERK7files_t>)

void files(const [files\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile7files_tE> "LIEF::ELF::CoreFile::files_t") &amp;file)

#### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8CoreFile4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const override

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8CoreFile6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~CoreFile `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFileD0Ev>)

~CoreFile() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile7classofEPK4Note>)

static inline bool classof(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") \*note)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFilelsERNSt7ostreamERK8CoreFile>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [CoreFile](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFileE> "LIEF::ELF::CoreFile") &amp;note)

#### [` entry_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile7entry_tE>)

struct entry\_t

Core file entry.

Public Members

##### [` start `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile7entry_t5startE>)

uint64\_t start = 0

Start address of mapped file.

##### [` end `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile7entry_t3endE>)

uint64\_t end = 0

End address of mapped file.

##### [` file_ofs `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile7entry_t8file_ofsE>)

uint64\_t file\_ofs = 0

Offset (in core) of mapped file.

##### [` path `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile7entry_t4pathE>)

std::string path

Path of mapped file.

Friends

##### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile7entry_tlsERNSt7ostreamERK7entry_t>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [entry\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreFile7entry_tE> "LIEF::ELF::CoreFile::entry_t") &amp;entry)

---

## [Core PrStatus](<https://lief.re/doc/latest/formats/elf/cpp.html#core-prstatus>)

### [` CorePrStatus `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatusE>)

class CorePrStatus : public LIEF::ELF::[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")

Class representing core PrPsInfo object.

Public Functions

#### [` CorePrStatus `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus12CorePrStatusE4ARCHN6Header5CLASSENSt6stringE8uint32_t13description_t>)

inline CorePrStatus([ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch, [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[CLASS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASSE> "LIEF::ELF::Header::CLASS") cls, std::string name, uint32\_t type, description\_t description)

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatus5cloneEv>)

inline virtual std::unique\_ptr&lt;[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")&gt; clone() const override

Clone the current note and keep its polymorphic type.

#### [` status `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatus6statusEv>)

[pr\_status\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus11pr_status_tE> "LIEF::ELF::CorePrStatus::pr_status_t") status() const

Return the [pr\_status\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#structLIEF_1_1ELF_1_1CorePrStatus_1_1pr__status__t>) structure.

#### [` status `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus6statusERK11pr_status_t>)

void status(const [pr\_status\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus11pr_status_tE> "LIEF::ELF::CorePrStatus::pr_status_t") &amp;status)

#### [` architecture `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatus12architectureEv>)

inline [ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") architecture() const

#### [` pc `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatus2pcEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; pc() const

The program counter or an error if not found.

#### [` sp `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatus2spEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; sp() const

The stack pointer or an error if not found.

#### [` return_value `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatus12return_valueEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; return\_value() const

The value of the register that holds the return value according to the calling convention.

#### [` get `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatus3getEN9Registers3X86E>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; get([Registers](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9RegistersE> "LIEF::ELF::CorePrStatus::Registers")::[X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X86E> "LIEF::ELF::CorePrStatus::Registers::X86") reg) const

Get the value for the given X86 register or return an error.

#### [` get `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatus3getEN9Registers6X86_64E>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; get([Registers](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9RegistersE> "LIEF::ELF::CorePrStatus::Registers")::[X86\_64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_64E> "LIEF::ELF::CorePrStatus::Registers::X86_64") reg) const

Get the value for the given X86\_64 register or return an error.

#### [` get `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatus3getEN9Registers3ARME>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; get([Registers](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9RegistersE> "LIEF::ELF::CorePrStatus::Registers")::[ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARME> "LIEF::ELF::CorePrStatus::Registers::ARM") reg) const

Get the value for the given ARM register or return an error.

#### [` get `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatus3getEN9Registers7AARCH64E>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; get([Registers](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9RegistersE> "LIEF::ELF::CorePrStatus::Registers")::[AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH64E> "LIEF::ELF::CorePrStatus::Registers::AARCH64") reg) const

Get the value for the given AARCH64 register or return an error.

#### [` set `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus3setEN9Registers3X86E8uint64_t>)

[ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") set([Registers](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9RegistersE> "LIEF::ELF::CorePrStatus::Registers")::[X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X86E> "LIEF::ELF::CorePrStatus::Registers::X86") reg, uint64\_t value)

#### [` set `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus3setEN9Registers6X86_64E8uint64_t>)

[ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") set([Registers](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9RegistersE> "LIEF::ELF::CorePrStatus::Registers")::[X86\_64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_64E> "LIEF::ELF::CorePrStatus::Registers::X86_64") reg, uint64\_t value)

#### [` set `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus3setEN9Registers3ARME8uint64_t>)

[ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") set([Registers](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9RegistersE> "LIEF::ELF::CorePrStatus::Registers")::[ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARME> "LIEF::ELF::CorePrStatus::Registers::ARM") reg, uint64\_t value)

#### [` set `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus3setEN9Registers7AARCH64E8uint64_t>)

[ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") set([Registers](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9RegistersE> "LIEF::ELF::CorePrStatus::Registers")::[AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH64E> "LIEF::ELF::CorePrStatus::Registers::AARCH64") reg, uint64\_t value)

#### [` register_values `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatus15register_valuesEv>)

std::vector&lt;uint64\_t&gt; register\_values() const

A list of the register values. This list is **guarantee** to be as long as the [Registers::ARM::\_COUNT](<https://lief.re/doc/latest/formats/elf/cpp.html#structLIEF_1_1ELF_1_1CorePrStatus_1_1Registers_1a267beea8b681ce98734f4a3b3967407daf3351ee60ccc810690817d90739bf103>) or empty if it can’t be resolved. Thus, one can access a specific register with:

```cpp
if (architecture() == ARCH::AARCH64) {
  auto reg_vals = register_values()
  if (!reg_vals.empty()) {
    auto x20 = reg_vals[static_cast<size_t>(Register::AARCH64::X20)]
  }
}
```

#### [` operator[] `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatusixEN9Registers3X86E>)

inline [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; operator[]([Registers](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9RegistersE> "LIEF::ELF::CorePrStatus::Registers")::[X86](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X86E> "LIEF::ELF::CorePrStatus::Registers::X86") reg) const

#### [` operator[] `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatusixEN9Registers6X86_64E>)

inline [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; operator[]([Registers](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9RegistersE> "LIEF::ELF::CorePrStatus::Registers")::[X86\_64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_64E> "LIEF::ELF::CorePrStatus::Registers::X86_64") reg) const

#### [` operator[] `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatusixEN9Registers3ARME>)

inline [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; operator[]([Registers](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9RegistersE> "LIEF::ELF::CorePrStatus::Registers")::[ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARME> "LIEF::ELF::CorePrStatus::Registers::ARM") reg) const

#### [` operator[] `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatusixEN9Registers7AARCH64E>)

inline [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; operator[]([Registers](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9RegistersE> "LIEF::ELF::CorePrStatus::Registers")::[AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH64E> "LIEF::ELF::CorePrStatus::Registers::AARCH64") reg) const

#### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatus4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const override

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12CorePrStatus6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~CorePrStatus `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatusD0Ev>)

~CorePrStatus() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus7classofEPK4Note>)

static inline bool classof(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") \*note)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatuslsERNSt7ostreamERK12CorePrStatus>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [CorePrStatus](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatusE> "LIEF::ELF::CorePrStatus") &amp;note)

#### [` siginfo_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9siginfo_tE>)

struct siginfo\_t

Public Members

##### [` signo `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9siginfo_t5signoE>)

int32\_t signo = 0

##### [` code `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9siginfo_t4codeE>)

int32\_t code = 0

##### [` err `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9siginfo_t3errE>)

int32\_t err = 0

#### [` timeval_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9timeval_tE>)

struct timeval\_t

Public Members

##### [` sec `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9timeval_t3secE>)

uint64\_t sec = 0

##### [` usec `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9timeval_t4usecE>)

uint64\_t usec = 0

#### [` pr_status_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus11pr_status_tE>)

struct pr\_status\_t

Status information from a core dump.

This structure mirrors the kernel’s `prstatus` data embedded in `NT_PRSTATUS` core-dump notes and exposes signal state, process identifiers, and CPU-time accounting.

Public Members

##### [` info `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus11pr_status_t4infoE>)

[siginfo\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9siginfo_tE> "LIEF::ELF::CorePrStatus::siginfo_t") info

##### [` cursig `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus11pr_status_t6cursigE>)

uint16\_t cursig = 0

##### [` reserved `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus11pr_status_t8reservedE>)

uint16\_t reserved = 0

##### [` sigpend `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus11pr_status_t7sigpendE>)

uint64\_t sigpend = 0

##### [` sighold `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus11pr_status_t7sigholdE>)

uint64\_t sighold = 0

##### [` pid `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus11pr_status_t3pidE>)

int32\_t pid = 0

##### [` ppid `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus11pr_status_t4ppidE>)

int32\_t ppid = 0

##### [` pgrp `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus11pr_status_t4pgrpE>)

int32\_t pgrp = 0

##### [` sid `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus11pr_status_t3sidE>)

int32\_t sid = 0

##### [` utime `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus11pr_status_t5utimeE>)

[timeval\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9timeval_tE> "LIEF::ELF::CorePrStatus::timeval_t") utime

##### [` stime `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus11pr_status_t5stimeE>)

[timeval\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9timeval_tE> "LIEF::ELF::CorePrStatus::timeval_t") stime

##### [` cutime `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus11pr_status_t6cutimeE>)

[timeval\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9timeval_tE> "LIEF::ELF::CorePrStatus::timeval_t") cutime

##### [` cstime `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus11pr_status_t6cstimeE>)

[timeval\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9timeval_tE> "LIEF::ELF::CorePrStatus::timeval_t") cstime

#### [` Registers `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9RegistersE>)

struct Registers

Public Types

##### [` X86 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X86E>)

enum class X86

Register for the x86 architecture ([ARCH::I386](<https://lief.re/doc/latest/formats/elf/cpp.html#namespaceLIEF_1_1ELF_1a18ce0fe195ef4b5628f9f5e88f948f2ead8b3e50d7c8ecaef026c0ebffd9b5e85>)).

*Values:*

###### [` EBX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X863EBXE>)

enumerator EBX = 0

###### [` ECX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X863ECXE>)

enumerator ECX

###### [` EDX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X863EDXE>)

enumerator EDX

###### [` ESI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X863ESIE>)

enumerator ESI

###### [` EDI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X863EDIE>)

enumerator EDI

###### [` EBP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X863EBPE>)

enumerator EBP

###### [` EAX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X863EAXE>)

enumerator EAX

###### [` DS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X862DSE>)

enumerator DS

###### [` ES `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X862ESE>)

enumerator ES

###### [` FS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X862FSE>)

enumerator FS

###### [` GS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X862GSE>)

enumerator GS

###### [` ORIG_EAX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X868ORIG_EAXE>)

enumerator ORIG\_EAX

###### [` EIP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X863EIPE>)

enumerator EIP

###### [` CS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X862CSE>)

enumerator CS

###### [` EFLAGS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X866EFLAGSE>)

enumerator EFLAGS

###### [` ESP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X863ESPE>)

enumerator ESP

###### [` SS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X862SSE>)

enumerator SS

###### [` _COUNT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3X866_COUNTE>)

enumerator \_COUNT

##### [` X86_64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_64E>)

enum class X86\_64

Register for the x86-64 architecture ([ARCH::X86\_64](<https://lief.re/doc/latest/formats/elf/cpp.html#namespaceLIEF_1_1ELF_1a18ce0fe195ef4b5628f9f5e88f948f2ea840030b2e70cfe0155e29ee926dbd8ae>)).

*Values:*

###### [` R15 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_643R15E>)

enumerator R15 = 0

###### [` R14 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_643R14E>)

enumerator R14

###### [` R13 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_643R13E>)

enumerator R13

###### [` R12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_643R12E>)

enumerator R12

###### [` RBP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_643RBPE>)

enumerator RBP

###### [` RBX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_643RBXE>)

enumerator RBX

###### [` R11 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_643R11E>)

enumerator R11

###### [` R10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_643R10E>)

enumerator R10

###### [` R9 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_642R9E>)

enumerator R9

###### [` R8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_642R8E>)

enumerator R8

###### [` RAX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_643RAXE>)

enumerator RAX

###### [` RCX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_643RCXE>)

enumerator RCX

###### [` RDX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_643RDXE>)

enumerator RDX

###### [` RSI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_643RSIE>)

enumerator RSI

###### [` RDI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_643RDIE>)

enumerator RDI

###### [` ORIG_RAX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_648ORIG_RAXE>)

enumerator ORIG\_RAX

###### [` RIP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_643RIPE>)

enumerator RIP

###### [` CS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_642CSE>)

enumerator CS

###### [` EFLAGS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_646EFLAGSE>)

enumerator EFLAGS

###### [` RSP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_643RSPE>)

enumerator RSP

###### [` SS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_642SSE>)

enumerator SS

###### [` FS_BASE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_647FS_BASEE>)

enumerator FS\_BASE

###### [` GS_BASE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_647GS_BASEE>)

enumerator GS\_BASE

###### [` DS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_642DSE>)

enumerator DS

###### [` ES `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_642ESE>)

enumerator ES

###### [` _COUNT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers6X86_646_COUNTE>)

enumerator \_COUNT

##### [` ARM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARME>)

enum class ARM

Register for the [ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#structLIEF_1_1ELF_1_1CorePrStatus_1_1Registers_1a267beea8b681ce98734f4a3b3967407d>) architecture ([ARCH::ARM](<https://lief.re/doc/latest/formats/elf/cpp.html#namespaceLIEF_1_1ELF_1a18ce0fe195ef4b5628f9f5e88f948f2ea47f45e65244c17ec9fa8771a5c6d60e1>)).

*Values:*

###### [` R0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM2R0E>)

enumerator R0 = 0

###### [` R1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM2R1E>)

enumerator R1

###### [` R2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM2R2E>)

enumerator R2

###### [` R3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM2R3E>)

enumerator R3

###### [` R4 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM2R4E>)

enumerator R4

###### [` R5 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM2R5E>)

enumerator R5

###### [` R6 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM2R6E>)

enumerator R6

###### [` R7 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM2R7E>)

enumerator R7

###### [` R8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM2R8E>)

enumerator R8

###### [` R9 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM2R9E>)

enumerator R9

###### [` R10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM3R10E>)

enumerator R10

###### [` R11 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM3R11E>)

enumerator R11

###### [` R12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM3R12E>)

enumerator R12

###### [` R13 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM3R13E>)

enumerator R13

###### [` R14 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM3R14E>)

enumerator R14

###### [` R15 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM3R15E>)

enumerator R15

###### [` CPSR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM4CPSRE>)

enumerator CPSR

###### [` _COUNT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers3ARM6_COUNTE>)

enumerator \_COUNT

##### [` AARCH64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH64E>)

enum class AARCH64

Register for the [AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#structLIEF_1_1ELF_1_1CorePrStatus_1_1Registers_1a8a3c5e122e728f4ae6060081e6fa1808>) architecture ([ARCH::AARCH64](<https://lief.re/doc/latest/formats/elf/cpp.html#namespaceLIEF_1_1ELF_1a18ce0fe195ef4b5628f9f5e88f948f2ea036a8f756db6f6db7e1ed8f22a9f641e>)).

*Values:*

###### [` X0 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH642X0E>)

enumerator X0 = 0

###### [` X1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH642X1E>)

enumerator X1

###### [` X2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH642X2E>)

enumerator X2

###### [` X3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH642X3E>)

enumerator X3

###### [` X4 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH642X4E>)

enumerator X4

###### [` X5 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH642X5E>)

enumerator X5

###### [` X6 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH642X6E>)

enumerator X6

###### [` X7 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH642X7E>)

enumerator X7

###### [` X8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH642X8E>)

enumerator X8

###### [` X9 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH642X9E>)

enumerator X9

###### [` X10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X10E>)

enumerator X10

###### [` X11 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X11E>)

enumerator X11

###### [` X12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X12E>)

enumerator X12

###### [` X13 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X13E>)

enumerator X13

###### [` X14 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X14E>)

enumerator X14

###### [` X15 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X15E>)

enumerator X15

###### [` X16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X16E>)

enumerator X16

###### [` X17 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X17E>)

enumerator X17

###### [` X18 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X18E>)

enumerator X18

###### [` X19 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X19E>)

enumerator X19

###### [` X20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X20E>)

enumerator X20

###### [` X21 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X21E>)

enumerator X21

###### [` X22 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X22E>)

enumerator X22

###### [` X23 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X23E>)

enumerator X23

###### [` X24 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X24E>)

enumerator X24

###### [` X25 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X25E>)

enumerator X25

###### [` X26 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X26E>)

enumerator X26

###### [` X27 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X27E>)

enumerator X27

###### [` X28 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X28E>)

enumerator X28

###### [` X29 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X29E>)

enumerator X29

###### [` X30 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X30E>)

enumerator X30

###### [` X31 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH643X31E>)

enumerator X31

###### [` PC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH642PCE>)

enumerator PC

###### [` PSTATE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH646PSTATEE>)

enumerator PSTATE

###### [` _COUNT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12CorePrStatus9Registers7AARCH646_COUNTE>)

enumerator \_COUNT

---

## [Core Siginfo](<https://lief.re/doc/latest/formats/elf/cpp.html#core-siginfo>)

### [` CoreSigInfo `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11CoreSigInfoE>)

class CoreSigInfo : public LIEF::ELF::[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")

Class representing a core siginfo object.

Public Functions

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF11CoreSigInfo5cloneEv>)

inline virtual std::unique\_ptr&lt;[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")&gt; clone() const override

Clone the current note and keep its polymorphic type.

#### [` signo `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF11CoreSigInfo5signoEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;int32\_t&gt; signo() const

Signal number or an error if it can’t be resolved.

#### [` sigcode `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF11CoreSigInfo7sigcodeEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;int32\_t&gt; sigcode() const

Signal code or an error if it can’t be resolved.

#### [` sigerrno `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF11CoreSigInfo8sigerrnoEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;int32\_t&gt; sigerrno() const

Signal error number or an error if it can’t be resolved.

#### [` signo `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11CoreSigInfo5signoE8uint32_t>)

void signo(uint32\_t value)

#### [` sigcode `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11CoreSigInfo7sigcodeE8uint32_t>)

void sigcode(uint32\_t value)

#### [` sigerrno `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11CoreSigInfo8sigerrnoE8uint32_t>)

void sigerrno(uint32\_t value)

#### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF11CoreSigInfo4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const override

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF11CoreSigInfo6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~CoreSigInfo `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11CoreSigInfoD0Ev>)

~CoreSigInfo() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11CoreSigInfo7classofEPK4Note>)

static inline bool classof(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") \*note)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11CoreSigInfolsERNSt7ostreamERK11CoreSigInfo>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [CoreSigInfo](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11CoreSigInfoE> "LIEF::ELF::CoreSigInfo") &amp;note)

---

## [Core Auxiliary Vector](<https://lief.re/doc/latest/formats/elf/cpp.html#core-auxiliary-vector>)

### [` CoreAuxv `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxvE>)

class CoreAuxv : public LIEF::ELF::[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")

Class representing core auxv object.

Public Types

#### [` TYPE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPEE>)

enum class TYPE

*Values:*

##### [` END `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE3ENDE>)

enumerator END = 0

End of vector

##### [` IGNORE_TY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE9IGNORE_TYE>)

enumerator IGNORE\_TY

Entry should be ignored

##### [` EXECFD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE6EXECFDE>)

enumerator EXECFD

File descriptor of program

##### [` PHDR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE4PHDRE>)

enumerator PHDR

Program headers for program

##### [` PHENT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE5PHENTE>)

enumerator PHENT

Size of program header entry

##### [` PHNUM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE5PHNUME>)

enumerator PHNUM

Number of program headers

##### [` PAGESZ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE6PAGESZE>)

enumerator PAGESZ

System page size

##### [` BASE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE4BASEE>)

enumerator BASE

Base address of interpreter

##### [` FLAGS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE5FLAGSE>)

enumerator FLAGS

Flags

##### [` ENTRY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE5ENTRYE>)

enumerator ENTRY

Entry point of program

##### [` NOTELF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE6NOTELFE>)

enumerator NOTELF

Program is not ELF

##### [` UID `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE3UIDE>)

enumerator UID

Real uid

##### [` EUID `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE4EUIDE>)

enumerator EUID

Effective uid

##### [` GID `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE3GIDE>)

enumerator GID

Real gid

##### [` EGID `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE4EGIDE>)

enumerator EGID

Effective gid

##### [` TGT_PLATFORM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE12TGT_PLATFORME>)

enumerator TGT\_PLATFORM

String identifying platform.

##### [` HWCAP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE5HWCAPE>)

enumerator HWCAP

Machine dependent hints about processor capabilities.

##### [` CLKTCK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE6CLKTCKE>)

enumerator CLKTCK

Frequency of times()

##### [` FPUCW `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE5FPUCWE>)

enumerator FPUCW

Used FPU control word.

##### [` DCACHEBSIZE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE11DCACHEBSIZEE>)

enumerator DCACHEBSIZE

Data cache block size.

##### [` ICACHEBSIZE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE11ICACHEBSIZEE>)

enumerator ICACHEBSIZE

Instruction cache block size.

##### [` UCACHEBSIZE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE11UCACHEBSIZEE>)

enumerator UCACHEBSIZE

Unified cache block size.

##### [` IGNOREPPC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE9IGNOREPPCE>)

enumerator IGNOREPPC

Entry should be ignored.

##### [` SECURE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE6SECUREE>)

enumerator SECURE

Boolean, was exec setuid-like?.

##### [` BASE_PLATFORM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE13BASE_PLATFORME>)

enumerator BASE\_PLATFORM

String identifying real platform

##### [` RANDOM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE6RANDOME>)

enumerator RANDOM

Address of 16 random bytes

##### [` HWCAP2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE6HWCAP2E>)

enumerator HWCAP2

Extension of AT\_HWCAP

##### [` EXECFN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE6EXECFNE>)

enumerator EXECFN = 31

Filename of executable

##### [` SYSINFO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE7SYSINFOE>)

enumerator SYSINFO

Filename of executable

##### [` SYSINFO_EHDR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPE12SYSINFO_EHDRE>)

enumerator SYSINFO\_EHDR

Pointer to ELF header of system-supplied DSO.

Public Functions

#### [` CoreAuxv `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv8CoreAuxvE4ARCHN6Header5CLASSENSt6stringE8uint32_t13description_t>)

inline CoreAuxv([ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch, [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[CLASS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASSE> "LIEF::ELF::Header::CLASS") cls, std::string name, uint32\_t type, description\_t description)

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8CoreAuxv5cloneEv>)

inline virtual std::unique\_ptr&lt;[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")&gt; clone() const override

Clone the current note and keep its polymorphic type.

#### [` values `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8CoreAuxv6valuesEv>)

std::map&lt;[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPEE> "LIEF::ELF::CoreAuxv::TYPE"), uint64\_t&gt; values() const

A map of [CoreAuxv::TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1CoreAuxv_1a1c71b5e7ee70d33080211c55b2f7211b>) and the value.

#### [` get `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8CoreAuxv3getE4TYPE>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; get([TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPEE> "LIEF::ELF::CoreAuxv::TYPE") type) const

Return the value associated with the provided [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1CoreAuxv_1a1c71b5e7ee70d33080211c55b2f7211b>) or a [lief\_errors::not\_found](<https://lief.re/doc/latest/api/error_handling/index.html#errors_8hpp_1a5ff5508856d306cf99479195f4f7ddd8a7500611bf7030bc99d25c354e7b64714>) if the type is not present.

#### [` operator[] `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8CoreAuxvixE4TYPE>)

inline [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; operator[]([TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPEE> "LIEF::ELF::CoreAuxv::TYPE") type) const

#### [` set `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv3setE4TYPE8uint64_t>)

bool set([TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPEE> "LIEF::ELF::CoreAuxv::TYPE") type, uint64\_t value)

#### [` set `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv3setERKNSt3mapI4TYPE8uint64_tEE>)

bool set(const std::map&lt;[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv4TYPEE> "LIEF::ELF::CoreAuxv::TYPE"), uint64\_t&gt; &amp;values)

#### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8CoreAuxv4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const override

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8CoreAuxv6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~CoreAuxv `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxvD0Ev>)

~CoreAuxv() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxv7classofEPK4Note>)

static inline bool classof(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") \*note)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxvlsERNSt7ostreamERK8CoreAuxv>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [CoreAuxv](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8CoreAuxvE> "LIEF::ELF::CoreAuxv") &amp;note)

---

## [Android Identity](<https://lief.re/doc/latest/formats/elf/cpp.html#android-identity>)

### [` AndroidIdent `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AndroidIdentE>)

class AndroidIdent : public LIEF::ELF::[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")

Class representing the “.note.android.ident” section.

> **See also**
> 
> [https://android.googlesource.com/platform/ndk/+/ndk-release-r16/sources/crt/crtbrand.S#39](<https://android.googlesource.com/platform/ndk/+/ndk-release-r16/sources/crt/crtbrand.S#39>)

Public Functions

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12AndroidIdent5cloneEv>)

inline virtual std::unique\_ptr&lt;[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")&gt; clone() const override

Clone the current note and keep its polymorphic type.

#### [` sdk_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12AndroidIdent11sdk_versionEv>)

uint32\_t sdk\_version() const

Target SDK version (or 0 if it can’t be resolved).

#### [` ndk_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12AndroidIdent11ndk_versionEv>)

std::string ndk\_version() const

NDK version used (or an empty string if it can’t be parsed).

#### [` ndk_build_number `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12AndroidIdent16ndk_build_numberEv>)

std::string ndk\_build\_number() const

NDK build number (or an empty string if it can’t be parsed).

#### [` sdk_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AndroidIdent11sdk_versionE8uint32_t>)

void sdk\_version(uint32\_t version)

#### [` ndk_version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AndroidIdent11ndk_versionERKNSt6stringE>)

void ndk\_version(const std::string &amp;ndk\_version)

#### [` ndk_build_number `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AndroidIdent16ndk_build_numberERKNSt6stringE>)

void ndk\_build\_number(const std::string &amp;ndk\_build\_number)

#### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12AndroidIdent4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const override

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12AndroidIdent6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~AndroidIdent `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AndroidIdentD0Ev>)

~AndroidIdent() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AndroidIdent7classofEPK4Note>)

static inline bool classof(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") \*note)

#### [` description_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AndroidIdent16description_sizeEv>)

static inline size\_t description\_size()

Public Static Attributes

#### [` sdk_version_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AndroidIdent16sdk_version_sizeE>)

static size\_t sdk\_version\_size = sizeof(uint32\_t)

#### [` ndk_version_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AndroidIdent16ndk_version_sizeE>)

static size\_t ndk\_version\_size = 64 \* sizeof(char)

#### [` ndk_build_number_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AndroidIdent21ndk_build_number_sizeE>)

static size\_t ndk\_build\_number\_size = 64 \* sizeof(char)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AndroidIdentlsERNSt7ostreamERK12AndroidIdent>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [AndroidIdent](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AndroidIdentE> "LIEF::ELF::AndroidIdent") &amp;note)

---

## [QNX Stack](<https://lief.re/doc/latest/formats/elf/cpp.html#qnx-stack>)

### [` QNXStack `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8QNXStackE>)

class QNXStack : public LIEF::ELF::[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")

Class representing the QNX `QNT_STACK` note.

Public Functions

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8QNXStack5cloneEv>)

inline virtual std::unique\_ptr&lt;[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")&gt; clone() const override

Clone the current note and keep its polymorphic type.

#### [` stack_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8QNXStack10stack_sizeEv>)

uint32\_t stack\_size() const

Size of the stack.

#### [` stack_allocated `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8QNXStack15stack_allocatedEv>)

uint32\_t stack\_allocated() const

Size of the stack pre-allocated (upfront).

#### [` is_executable `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8QNXStack13is_executableEv>)

bool is\_executable() const

Whether the stack is executable.

#### [` stack_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8QNXStack10stack_sizeE8uint32_t>)

void stack\_size(uint32\_t value)

#### [` stack_allocated `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8QNXStack15stack_allocatedE8uint32_t>)

void stack\_allocated(uint32\_t value)

#### [` set_is_executable `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8QNXStack17set_is_executableEb>)

void set\_is\_executable(bool value)

#### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8QNXStack4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const override

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF8QNXStack6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~QNXStack `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8QNXStackD0Ev>)

~QNXStack() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8QNXStack7classofEPK4Note>)

static inline bool classof(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") \*note)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8QNXStacklsERNSt7ostreamERK8QNXStack>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [QNXStack](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF8QNXStackE> "LIEF::ELF::QNXStack") &amp;note)

---

## [Note ABI](<https://lief.re/doc/latest/formats/elf/cpp.html#note-abi>)

### [` NoteAbi `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbiE>)

class NoteAbi : public LIEF::ELF::[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")

Class that wraps the `NT_GNU_ABI_TAG` note.

Public Types

#### [` ABI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi3ABIE>)

enum class ABI

[ABI](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1NoteAbi_1ac51936c70afeb31dcc1bde6702c09df6>) recognized by this note.

*Values:*

##### [` LINUX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi3ABI5LINUXE>)

enumerator LINUX = 0

##### [` GNU `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi3ABI3GNUE>)

enumerator GNU

##### [` SOLARIS2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi3ABI8SOLARIS2E>)

enumerator SOLARIS2

##### [` FREEBSD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi3ABI7FREEBSDE>)

enumerator FREEBSD

##### [` NETBSD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi3ABI6NETBSDE>)

enumerator NETBSD

##### [` SYLLABLE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi3ABI8SYLLABLEE>)

enumerator SYLLABLE

##### [` NACL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi3ABI4NACLE>)

enumerator NACL

#### [` version_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi9version_tE>)

using version\_t = std::array&lt;uint32\_t, 3&gt;

Version type: (Major, Minor, Patch).

Public Functions

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7NoteAbi5cloneEv>)

inline virtual std::unique\_ptr&lt;[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi4NoteERK4Note> "LIEF::ELF::NoteAbi::Note")&gt; clone() const override

Clone the current note and keep its polymorphic type.

#### [` version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7NoteAbi7versionEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[version\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi9version_tE> "LIEF::ELF::NoteAbi::version_t")&gt; version() const

Return the version or an error if it can’t be parsed.

#### [` abi `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7NoteAbi3abiEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[ABI](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi3ABIE> "LIEF::ELF::NoteAbi::ABI")&gt; abi() const

Return the [ABI](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1NoteAbi_1ac51936c70afeb31dcc1bde6702c09df6>) or an error if it can’t be parsed.

#### [` version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi7versionERK9version_t>)

void version(const [version\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi9version_tE> "LIEF::ELF::NoteAbi::version_t") &amp;version)

#### [` version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi7versionE3ABI>)

void version([ABI](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi3ABIE> "LIEF::ELF::NoteAbi::ABI") abi)

#### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7NoteAbi4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const override

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7NoteAbi6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~NoteAbi `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbiD0Ev>)

~NoteAbi() override = default

#### [` Note `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi4NoteERK4Note>)

Note(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi4NoteERK4Note> "LIEF::ELF::NoteAbi::Note") &amp;copy) = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi7classofEPK4Note>)

static inline bool classof(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi4NoteERK4Note> "LIEF::ELF::NoteAbi::Note") \*note)

#### [` description_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi16description_sizeEv>)

static inline uint8\_t description\_size()

Size of the description content.

Public Static Attributes

#### [` abi_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi10abi_offsetE>)

static size\_t abi\_offset = 0

#### [` abi_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi8abi_sizeE>)

static size\_t abi\_size = sizeof(uint32\_t)

#### [` version_offset `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi14version_offsetE>)

static size\_t version\_offset = [abi\_size](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi8abi_sizeE> "LIEF::ELF::NoteAbi::abi_size")

#### [` version_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbi12version_sizeE>)

static size\_t version\_size = 3 \* sizeof(uint32\_t)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbilsERNSt7ostreamERK7NoteAbi>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [NoteAbi](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7NoteAbiE> "LIEF::ELF::NoteAbi") &amp;note)

---

## [Note Gnu Property](<https://lief.re/doc/latest/formats/elf/cpp.html#note-gnu-property>)

### [` NoteGnuProperty `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE>)

class NoteGnuProperty : public LIEF::ELF::[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")

Class that wraps the `NT_GNU_PROPERTY_TYPE_0` note.

Public Types

#### [` properties_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty12properties_tE>)

using properties\_t = std::vector&lt;std::unique\_ptr&lt;[NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property")&gt;&gt;

Public Functions

#### [` NoteGnuProperty `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty15NoteGnuPropertyE4ARCHN6Header5CLASSENSt6stringE8uint32_t13description_tNSt6stringE>)

inline NoteGnuProperty([ARCH](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE> "LIEF::ELF::ARCH") arch, [Header](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6HeaderE> "LIEF::ELF::Header")::[CLASS](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Header5CLASSE> "LIEF::ELF::Header::CLASS") cls, std::string name, uint32\_t type, description\_t description, std::string secname)

#### [` clone `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF15NoteGnuProperty5cloneEv>)

inline virtual std::unique\_ptr&lt;[Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note")&gt; clone() const override

Clone the current note and keep its polymorphic type.

#### [` find `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF15NoteGnuProperty4findEN8Property4TYPEE>)

std::unique\_ptr&lt;[NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property")&gt; find([Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property")::[TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8Property4TYPEE> "LIEF::ELF::NoteGnuProperty::Property::TYPE") type) const

Find the property with the given type or return a `nullptr`.

#### [` properties `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF15NoteGnuProperty10propertiesEv>)

[properties\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty12properties_tE> "LIEF::ELF::NoteGnuProperty::properties_t") properties() const

Return the properties as a list of [Property](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1NoteGnuProperty_1_1Property>).

#### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF15NoteGnuProperty4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const override

#### [` accept `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF15NoteGnuProperty6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~NoteGnuProperty `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyD0Ev>)

~NoteGnuProperty() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty7classofEPK4Note>)

static inline bool classof(const [Note](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4NoteE> "LIEF::ELF::Note") \*note)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertylsERNSt7ostreamERK15NoteGnuProperty>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty") &amp;note)

#### [` Property `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE>)

class Property

This class wraps the different properties that can be used in a `NT_GNU_PROPERTY_TYPE_0` note.

Subclassed by [LIEF::ELF::AArch64Feature](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1AArch64Feature>), [LIEF::ELF::AArch64PAuth](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1AArch64PAuth>), [LIEF::ELF::Generic](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Generic>), [LIEF::ELF::Needed](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Needed>), [LIEF::ELF::NoteNoCopyOnProtected](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1NoteNoCopyOnProtected>), [LIEF::ELF::StackSize](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1StackSize>), [LIEF::ELF::X86Features](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1X86Features>), [LIEF::ELF::X86ISA](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1X86ISA>)

Public Types

##### [` TYPE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8Property4TYPEE>)

enum class TYPE

LIEF’s mirror types of the original `GNU_PROPERTY_` values.

*Values:*

###### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8Property4TYPE7UNKNOWNE>)

enumerator UNKNOWN = 0

###### [` GENERIC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8Property4TYPE7GENERICE>)

enumerator GENERIC

[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1NoteGnuProperty_1_1Property>) that doesn’t have a special implementation.

###### [` AARCH64_FEATURES `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8Property4TYPE16AARCH64_FEATURESE>)

enumerator AARCH64\_FEATURES

Mirror of `GNU_PROPERTY_AARCH64_FEATURE_1_AND`.

###### [` AARCH64_PAUTH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8Property4TYPE13AARCH64_PAUTHE>)

enumerator AARCH64\_PAUTH

Mirror of `GNU_PROPERTY_AARCH64_FEATURE_PAUTH`.

###### [` STACK_SIZE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8Property4TYPE10STACK_SIZEE>)

enumerator STACK\_SIZE

Mirror of `GNU_PROPERTY_STACK_SIZE`.

###### [` NO_COPY_ON_PROTECTED `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8Property4TYPE20NO_COPY_ON_PROTECTEDE>)

enumerator NO\_COPY\_ON\_PROTECTED

Mirror of `GNU_PROPERTY_NO_COPY_ON_PROTECTED`.

###### [` X86_ISA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8Property4TYPE7X86_ISAE>)

enumerator X86\_ISA

Mirror of `GNU_PROPERTY_X86_ISA_1_*` and `GNU_PROPERTY_X86_COMPAT_*`.

Mirror of `GNU_PROPERTY_X86_FEATURE_*`

###### [` X86_FEATURE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8Property4TYPE11X86_FEATUREE>)

enumerator X86\_FEATURE

###### [` NEEDED `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8Property4TYPE6NEEDEDE>)

enumerator NEEDED

Public Functions

##### [` Property `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8Property8PropertyEv>)

Property() = delete

##### [` type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF15NoteGnuProperty8Property4typeEv>)

inline [TYPE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8Property4TYPEE> "LIEF::ELF::NoteGnuProperty::Property::TYPE") type() const

Return the LIEF’s mirror type of the note.

##### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF15NoteGnuProperty8Property4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const

##### [` ~Property `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyD0Ev>)

virtual ~Property() = default

Friends

##### [` operator<< `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertylsERNSt7ostreamERK8Property>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property") &amp;prop)

---

## [Generic](<https://lief.re/doc/latest/formats/elf/cpp.html#generic>)

### [` Generic `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GenericE>)

class Generic : public LIEF::ELF::[NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property")

This class represents a property which doesn’t have a concrete LIEF implementation.

Public Functions

#### [` type `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Generic4typeEv>)

inline uint32\_t type() const

The original raw type as an integer. This value might depends on the architecture and/or the file type.

#### [` ~Generic `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GenericD0Ev>)

~Generic() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Generic7classofEPKN15NoteGnuProperty8PropertyE>)

static inline bool classof(const [NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property") \*prop)

#### [` create `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Generic6createE8uint32_t>)

static inline std::unique\_ptr&lt;[Generic](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7GenericE> "LIEF::ELF::Generic")&gt; create(uint32\_t raw\_type)

---

## [AArch64 Feature](<https://lief.re/doc/latest/formats/elf/cpp.html#aarch64-feature>)

### [` AArch64Feature `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF14AArch64FeatureE>)

class AArch64Feature : public LIEF::ELF::[NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property")

This class represents the `GNU_PROPERTY_AARCH64_FEATURE_1_AND` property.

Public Types

#### [` FEATURE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF14AArch64Feature7FEATUREE>)

enum class FEATURE

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF14AArch64Feature7FEATURE7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` BTI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF14AArch64Feature7FEATURE3BTIE>)

enumerator BTI

Support Branch Target Identification (BTI).

##### [` PAC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF14AArch64Feature7FEATURE3PACE>)

enumerator PAC

Support Pointer authentication (PAC).

##### [` GCS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF14AArch64Feature7FEATURE3GCSE>)

enumerator GCS

Guarded Control Stack.

Public Functions

#### [` features `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF14AArch64Feature8featuresEv>)

inline const std::vector&lt;[FEATURE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF14AArch64Feature7FEATUREE> "LIEF::ELF::AArch64Feature::FEATURE")&gt; &amp;features() const

Return the list of the supported features.

#### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF14AArch64Feature4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const override

#### [` ~AArch64Feature `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF14AArch64FeatureD0Ev>)

~AArch64Feature() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF14AArch64Feature7classofEPKN15NoteGnuProperty8PropertyE>)

static inline bool classof(const [NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property") \*prop)

#### [` create `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF14AArch64Feature6createER12BinaryStream>)

static std::unique\_ptr&lt;[AArch64Feature](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF14AArch64FeatureE> "LIEF::ELF::AArch64Feature")&gt; create([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

---

## [AArch64 PAuth](<https://lief.re/doc/latest/formats/elf/cpp.html#aarch64-pauth>)

### [` AArch64PAuth `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AArch64PAuthE>)

class AArch64PAuth : public LIEF::ELF::[NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property")

This class represents the `GNU_PROPERTY_AARCH64_FEATURE_PAUTH` property.

> **Note**
> 
> If both [AArch64PAuth::platform](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1AArch64PAuth_1a96634801e1e559b5c71fb2e84429a82b>) and [AArch64PAuth::version](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1AArch64PAuth_1a0cae6a33508fa155c7c8c1842a8c03fa>) are set to 0, this means that the binary is incompatible with PAuth ABI extension.

Public Functions

#### [` platform `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12AArch64PAuth8platformEv>)

inline uint64\_t platform() const

64-bit value that specifies the platform vendor.

A `0` value is associated with an *invalid* platform while the value `1` is associated with a baremetal platform.

#### [` version `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12AArch64PAuth7versionEv>)

inline uint64\_t version() const

64-bit value that identifies the signing schema used by the ELF file.

#### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF12AArch64PAuth4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const override

#### [` ~AArch64PAuth `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AArch64PAuthD0Ev>)

~AArch64PAuth() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AArch64PAuth7classofEPKN15NoteGnuProperty8PropertyE>)

static inline bool classof(const [NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property") \*prop)

#### [` create `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AArch64PAuth6createER12BinaryStream>)

static std::unique\_ptr&lt;[AArch64PAuth](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12AArch64PAuthE> "LIEF::ELF::AArch64PAuth")&gt; create([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

---

## [Needed](<https://lief.re/doc/latest/formats/elf/cpp.html#needed>)

### [` Needed `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6NeededE>)

class Needed : public LIEF::ELF::[NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property")

This class represents the `GNU_PROPERTY_1_NEEDED` note property.

This property provides information about additional features that the object file needs at runtime (e.g. indirect external access).

Public Types

#### [` NEED `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Needed4NEEDE>)

enum class NEED

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Needed4NEED7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` INDIRECT_EXTERN_ACCESS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Needed4NEED22INDIRECT_EXTERN_ACCESSE>)

enumerator INDIRECT\_EXTERN\_ACCESS

The object needs indirect external access.

Public Functions

#### [` needs `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Needed5needsEv>)

inline const std::vector&lt;[NEED](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Needed4NEEDE> "LIEF::ELF::Needed::NEED")&gt; &amp;needs() const

Return the list of needed features.

#### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6Needed4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const override

#### [` ~Needed `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6NeededD0Ev>)

~Needed() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Needed7classofEPKN15NoteGnuProperty8PropertyE>)

static inline bool classof(const [NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property") \*prop)

#### [` create `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6Needed6createER12BinaryStream>)

static std::unique\_ptr&lt;[Needed](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6NeededE> "LIEF::ELF::Needed")&gt; create([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

---

## [No Copy on Protected](<https://lief.re/doc/latest/formats/elf/cpp.html#no-copy-on-protected>)

### [` NoteNoCopyOnProtected `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21NoteNoCopyOnProtectedE>)

class NoteNoCopyOnProtected : public LIEF::ELF::[NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property")

This class provides an interface over the `GNU_PROPERTY_NO_COPY_ON_PROTECTED` property. This property indicates that the linker shouldn’t copy relocations against protected symbols.

Public Functions

#### [` ~NoteNoCopyOnProtected `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21NoteNoCopyOnProtectedD0Ev>)

~NoteNoCopyOnProtected() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21NoteNoCopyOnProtected7classofEPKN15NoteGnuProperty8PropertyE>)

static inline bool classof(const [NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property") \*prop)

#### [` create `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21NoteNoCopyOnProtected6createEv>)

static inline std::unique\_ptr&lt;[NoteNoCopyOnProtected](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF21NoteNoCopyOnProtectedE> "LIEF::ELF::NoteNoCopyOnProtected")&gt; create()

---

## [Stack Size](<https://lief.re/doc/latest/formats/elf/cpp.html#stack-size>)

### [` StackSize `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF9StackSizeE>)

class StackSize : public LIEF::ELF::[NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property")

This class provides an interface over the `GNU_PROPERTY_STACK_SIZE` property.

This property can be used by the loader to raise the stack limit.

Public Functions

#### [` stack_size `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF9StackSize10stack_sizeEv>)

inline uint64\_t stack\_size() const

The indicated stack size.

#### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF9StackSize4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const override

#### [` ~StackSize `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF9StackSizeD0Ev>)

~StackSize() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF9StackSize7classofEPKN15NoteGnuProperty8PropertyE>)

static inline bool classof(const [NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property") \*prop)

#### [` create `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF9StackSize6createE8uint64_t>)

static inline std::unique\_ptr&lt;[StackSize](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF9StackSizeE> "LIEF::ELF::StackSize")&gt; create(uint64\_t stack\_size)

---

## [X86 Feature](<https://lief.re/doc/latest/formats/elf/cpp.html#x86-feature>)

### [` X86Features `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86FeaturesE>)

class X86Features : public LIEF::ELF::[NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property")

This class interfaces the different `GNU_PROPERTY_X86_FEATURE_*` properties which includes:

- `GNU_PROPERTY_X86_FEATURE_1_AND`
- `GNU_PROPERTY_X86_FEATURE_2_USED`
- `GNU_PROPERTY_X86_FEATURE_2_NEEDED`

Public Types

#### [` FLAG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features4FLAGE>)

enum class FLAG

Flag according to the `_AND`, `_USED` or `_NEEDED` suffixes.

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features4FLAG4NONEE>)

enumerator NONE = 0

For the original `GNU_PROPERTY_X86_FEATURE_1_AND` property.

##### [` USED `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features4FLAG4USEDE>)

enumerator USED

For the original `GNU_PROPERTY_X86_FEATURE_2_USED` property.

##### [` NEEDED `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features4FLAG6NEEDEDE>)

enumerator NEEDED

For the original `GNU_PROPERTY_X86_FEATURE_2_NEEDED` property.

#### [` FEATURE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATUREE>)

enum class FEATURE

Features provided by these different properties.

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` IBT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE3IBTE>)

enumerator IBT

##### [` SHSTK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE5SHSTKE>)

enumerator SHSTK

##### [` LAM_U48 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE7LAM_U48E>)

enumerator LAM\_U48

##### [` LAM_U57 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE7LAM_U57E>)

enumerator LAM\_U57

##### [` X86 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE3X86E>)

enumerator X86

##### [` X87 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE3X87E>)

enumerator X87

##### [` MMX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE3MMXE>)

enumerator MMX

##### [` XMM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE3XMME>)

enumerator XMM

##### [` YMM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE3YMME>)

enumerator YMM

##### [` ZMM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE3ZMME>)

enumerator ZMM

##### [` FXSR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE4FXSRE>)

enumerator FXSR

##### [` XSAVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE5XSAVEE>)

enumerator XSAVE

##### [` XSAVEOPT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE8XSAVEOPTE>)

enumerator XSAVEOPT

##### [` XSAVEC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE6XSAVECE>)

enumerator XSAVEC

##### [` TMM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE3TMME>)

enumerator TMM

##### [` MASK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATURE4MASKE>)

enumerator MASK

#### [` features_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features10features_tE>)

using features\_t = std::vector&lt;std::pair&lt;[FLAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features4FLAGE> "LIEF::ELF::X86Features::FLAG"), [FEATURE](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7FEATUREE> "LIEF::ELF::X86Features::FEATURE")&gt;&gt;

List of the features as a pair of [FLAG](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1X86Features_1a69a85c04efe3307f5f1e2e6a5c368801>), [FEATURE](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1X86Features_1aab7307e07beae29c7f7f9a800f5a1380>).

For instance, if the raw property is `GNU_PROPERTY_X86_FEATURE_2_USED` with a bitmask set to `GNU_PROPERTY_X86_FEATURE_2_XSAVE`, it generates the pair: [FLAG::USED](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1X86Features_1a69a85c04efe3307f5f1e2e6a5c368801ad725ec4321dfa3a30ec3b096511be30e>), [FEATURE::XSAVE](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1X86Features_1aab7307e07beae29c7f7f9a800f5a1380a367c5d2642c63edb641f8a2228414526>)

Public Functions

#### [` features `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF11X86Features8featuresEv>)

inline const [features\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features10features_tE> "LIEF::ELF::X86Features::features_t") &amp;features() const

List of the features.

#### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF11X86Features4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const override

#### [` ~X86Features `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86FeaturesD0Ev>)

~X86Features() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features7classofEPKN15NoteGnuProperty8PropertyE>)

static inline bool classof(const [NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property") \*prop)

#### [` create `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86Features6createE8uint32_tR12BinaryStream>)

static std::unique\_ptr&lt;[X86Features](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF11X86FeaturesE> "LIEF::ELF::X86Features")&gt; create(uint32\_t type, [BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

---

## [X86 ISA](<https://lief.re/doc/latest/formats/elf/cpp.html#x86-isa>)

### [` X86ISA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISAE>)

class X86ISA : public LIEF::ELF::[NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property")

This class interfaces the different `GNU_PROPERTY_X86_ISA_*` properties which includes:

- `GNU_PROPERTY_X86_ISA_1_USED`
- `GNU_PROPERTY_X86_ISA_1_NEEDED`
- `GNU_PROPERTY_X86_COMPAT_ISA_1_USED`
- `GNU_PROPERTY_X86_COMPAT_ISA_1_NEEDED`
- `GNU_PROPERTY_X86_COMPAT_2_ISA_1_USED`
- `GNU_PROPERTY_X86_COMPAT_2_ISA_1_NEEDED`

Public Types

#### [` FLAG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA4FLAGE>)

enum class FLAG

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA4FLAG4NONEE>)

enumerator NONE = 0

##### [` USED `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA4FLAG4USEDE>)

enumerator USED

##### [` NEEDED `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA4FLAG6NEEDEDE>)

enumerator NEEDED

#### [` ISA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISAE>)

enum class ISA

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` BASELINE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA8BASELINEE>)

enumerator BASELINE

##### [` V2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA2V2E>)

enumerator V2

##### [` V3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA2V3E>)

enumerator V3

##### [` V4 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA2V4E>)

enumerator V4

##### [` CMOV `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA4CMOVE>)

enumerator CMOV

##### [` FMA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA3FMAE>)

enumerator FMA

##### [` I486 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA4I486E>)

enumerator I486

##### [` I586 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA4I586E>)

enumerator I586

##### [` I686 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA4I686E>)

enumerator I686

##### [` SSE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA3SSEE>)

enumerator SSE

##### [` SSE2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA4SSE2E>)

enumerator SSE2

##### [` SSE3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA4SSE3E>)

enumerator SSE3

##### [` SSSE3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA5SSSE3E>)

enumerator SSSE3

##### [` SSE4_1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA6SSE4_1E>)

enumerator SSE4\_1

##### [` SSE4_2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA6SSE4_2E>)

enumerator SSE4\_2

##### [` AVX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA3AVXE>)

enumerator AVX

##### [` AVX2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA4AVX2E>)

enumerator AVX2

##### [` AVX512F `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA7AVX512FE>)

enumerator AVX512F

##### [` AVX512CD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA8AVX512CDE>)

enumerator AVX512CD

##### [` AVX512ER `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA8AVX512ERE>)

enumerator AVX512ER

##### [` AVX512PF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA8AVX512PFE>)

enumerator AVX512PF

##### [` AVX512VL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA8AVX512VLE>)

enumerator AVX512VL

##### [` AVX512DQ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA8AVX512DQE>)

enumerator AVX512DQ

##### [` AVX512BW `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA8AVX512BWE>)

enumerator AVX512BW

##### [` AVX512_4FMAPS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA13AVX512_4FMAPSE>)

enumerator AVX512\_4FMAPS

##### [` AVX512_4VNNIW `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA13AVX512_4VNNIWE>)

enumerator AVX512\_4VNNIW

##### [` AVX512_BITALG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA13AVX512_BITALGE>)

enumerator AVX512\_BITALG

##### [` AVX512_IFMA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA11AVX512_IFMAE>)

enumerator AVX512\_IFMA

##### [` AVX512_VBMI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA11AVX512_VBMIE>)

enumerator AVX512\_VBMI

##### [` AVX512_VBMI2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA12AVX512_VBMI2E>)

enumerator AVX512\_VBMI2

##### [` AVX512_VNNI `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA11AVX512_VNNIE>)

enumerator AVX512\_VNNI

##### [` AVX512_BF16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISA11AVX512_BF16E>)

enumerator AVX512\_BF16

#### [` values_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA8values_tE>)

using values\_t = std::vector&lt;std::pair&lt;[FLAG](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA4FLAGE> "LIEF::ELF::X86ISA::FLAG"), [ISA](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA3ISAE> "LIEF::ELF::X86ISA::ISA")&gt;&gt;

Public Functions

#### [` values `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6X86ISA6valuesEv>)

inline const [values\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA8values_tE> "LIEF::ELF::X86ISA::values_t") &amp;values() const

List of the [ISA](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1X86ISA_1a4219592ffd7054e1d5d9f0d7a67b6af9>) values in this property.

#### [` ~X86ISA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISAD0Ev>)

~X86ISA() override = default

#### [` dump `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF6X86ISA4dumpERNSt7ostreamE>)

virtual void dump(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA7classofEPKN15NoteGnuProperty8PropertyE>)

static inline bool classof(const [NoteGnuProperty](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuPropertyE> "LIEF::ELF::NoteGnuProperty")::[Property](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15NoteGnuProperty8PropertyE> "LIEF::ELF::NoteGnuProperty::Property") \*prop)

#### [` create `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISA6createE8uint32_tR12BinaryStream>)

static std::unique\_ptr&lt;[X86ISA](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6X86ISAE> "LIEF::ELF::X86ISA")&gt; create(uint32\_t type, [BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

---

## [Builder](<https://lief.re/doc/latest/formats/elf/cpp.html#builder>)

### [` Builder `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7BuilderE>)

class Builder

Class which takes an [ELF::Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary>) object and reconstructs a valid binary.

This interface assumes that the layout of input ELF binary is correct (i.e. the binary can run).

Public Functions

#### [` Builder `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder7BuilderER6BinaryRK8config_t>)

Builder([Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary") &amp;binary, const [config\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_tE> "LIEF::ELF::Builder::config_t") &amp;config)

#### [` Builder `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder7BuilderER6Binary>)

inline Builder([Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary") &amp;binary)

#### [` Builder `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder7BuilderEv>)

Builder() = delete

#### [` ~Builder `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7BuilderD0Ev>)

~Builder()

#### [` build `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder5buildEv>)

void build()

Perform the build of the provided ELF binary.

#### [` config `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder6configEv>)

inline [config\_t](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_tE> "LIEF::ELF::Builder::config_t") &amp;config()

#### [` get_build `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder9get_buildEv>)

const std::vector&lt;uint8\_t&gt; &amp;get\_build()

Return the built ELF binary as a byte vector.

#### [` write `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Builder5writeERKNSt6stringE>)

void write(const std::string &amp;filename) const

Write the built ELF binary in the `filename` given in parameter.

#### [` write `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4NK4LIEF3ELF7Builder5writeERNSt7ostreamE>)

void write(std::ostream &amp;os) const

Write the built ELF binary in the stream `os` given in parameter.

#### [` config_t `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_tE>)

struct config\_t

Configuration options to tweak the building process.

Public Members

##### [` dt_hash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t7dt_hashE>)

bool dt\_hash = true

Rebuild DT\_HASH.

##### [` dyn_str `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t7dyn_strE>)

bool dyn\_str = true

Rebuild DT\_STRTAB.

##### [` dynamic_section `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t15dynamic_sectionE>)

bool dynamic\_section = true

Rebuild PT\_DYNAMIC segment.

##### [` fini_array `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t10fini_arrayE>)

bool fini\_array = true

Rebuild DT\_FINI\_ARRAY.

##### [` gnu_hash `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t8gnu_hashE>)

bool gnu\_hash = true

Rebuild DT\_GNU\_HASH.

##### [` init_array `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t10init_arrayE>)

bool init\_array = true

Rebuild DT\_INIT\_ARRAY.

##### [` interpreter `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t11interpreterE>)

bool interpreter = true

Rebuild PT\_INTERPRETER.

##### [` jmprel `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t6jmprelE>)

bool jmprel = true

Rebuild DT\_JMPREL.

##### [` notes `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t5notesE>)

bool notes = false

Disable note building since it can break the default layout.

##### [` preinit_array `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t13preinit_arrayE>)

bool preinit\_array = true

Rebuild DT\_PREINIT\_ARRAY.

##### [` relr `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t4relrE>)

bool relr = true

Rebuild DT\_RELR.

##### [` android_rela `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t12android_relaE>)

bool android\_rela = true

Rebuild DT\_ANDROID\_REL[A].

##### [` rela `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t4relaE>)

bool rela = true

Rebuild DT\_REL[A].

##### [` static_symtab `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t13static_symtabE>)

bool static\_symtab = true

Rebuild `.symtab`.

##### [` sym_verdef `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t10sym_verdefE>)

bool sym\_verdef = true

Rebuild DT\_VERDEF.

##### [` sym_verneed `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t11sym_verneedE>)

bool sym\_verneed = true

Rebuild DT\_VERNEED.

##### [` sym_versym `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t10sym_versymE>)

bool sym\_versym = true

Rebuild DT\_VERSYM.

##### [` symtab `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t6symtabE>)

bool symtab = true

Rebuild DT\_SYMTAB.

##### [` coredump_notes `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t14coredump_notesE>)

bool coredump\_notes = true

Rebuild the Coredump notes.

##### [` force_relocate `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t14force_relocateE>)

bool force\_relocate = false

Force to relocating all the ELF structures that are supported by LIEF (mostly for testing).

##### [` skip_dynamic `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t12skip_dynamicE>)

bool skip\_dynamic = false

Skip relocating the PT\_DYNAMIC segment (only relevant if force\_relocate is set.

##### [` keep_empty_version_requirement `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF7Builder8config_t30keep_empty_version_requirementE>)

bool keep\_empty\_version\_requirement = false

Remove entries in `.gnu.version_r` if they are not associated with at least one version.

---

## [Utilities](<https://lief.re/doc/latest/formats/elf/cpp.html#utilities>)

### [` LIEF::ELF::check_layout `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12check_layoutERK6BinaryPNSt6stringE>)

bool LIEF::ELF::check\_layout(const [Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary") &amp;bin, std::string \*error\_info = nullptr)

Check that the layout of the given [Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary>) is correct.

### [` LIEF::ELF::is_elf `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6is_elfENSt11string_viewE>)

bool LIEF::ELF::is\_elf(std::string\_view file)

Check if the given file is an ELF one.

### [` LIEF::ELF::is_elf `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6is_elfERKNSt6vectorI7uint8_tEE>)

bool LIEF::ELF::is\_elf(const std::vector&lt;uint8\_t&gt; &amp;raw)

Check if the raw data is an ELF file.

---

## [Enums](<https://lief.re/doc/latest/formats/elf/cpp.html#enums>)

### [Architectures](<https://lief.re/doc/latest/formats/elf/cpp.html#architectures>)

#### [` LIEF::ELF::ARCH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCHE>)

enum class LIEF::ELF::ARCH

Machine architectures See current registered ELF machine architectures at: [http://www.sco.com/developers/gabi/latest/ch4.eheader.html](<http://www.sco.com/developers/gabi/latest/ch4.eheader.html>)

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4NONEE>)

enumerator NONE = 0

No machine

##### [` M32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3M32E>)

enumerator M32 = 1

AT&amp;T WE 32100

##### [` SPARC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5SPARCE>)

enumerator SPARC = 2

SPARC

##### [` I386 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4I386E>)

enumerator I386 = 3

Intel 386

##### [` M68K `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4M68KE>)

enumerator M68K = 4

Motorola 68000

##### [` M88K `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4M88KE>)

enumerator M88K = 5

Motorola 88000

##### [` IAMCU `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5IAMCUE>)

enumerator IAMCU = 6

Intel MCU

##### [` I860 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4I860E>)

enumerator I860 = 7

Intel 80860

##### [` MIPS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4MIPSE>)

enumerator MIPS = 8

MIPS R3000

##### [` S370 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4S370E>)

enumerator S370 = 9

IBM System/370

##### [` MIPS_RS3_LE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH11MIPS_RS3_LEE>)

enumerator MIPS\_RS3\_LE = 10

MIPS RS3000 Little-endian

##### [` PARISC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6PARISCE>)

enumerator PARISC = 15

Hewlett-Packard PA-RISC

##### [` VPP500 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6VPP500E>)

enumerator VPP500 = 17

Fujitsu VPP500

##### [` SPARC32PLUS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH11SPARC32PLUSE>)

enumerator SPARC32PLUS = 18

Enhanced instruction set SPARC

##### [` I60 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3I60E>)

enumerator I60 = 19

Intel 80960

##### [` PPC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3PPCE>)

enumerator PPC = 20

PowerPC

##### [` PPC64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5PPC64E>)

enumerator PPC64 = 21

PowerPC64

##### [` S390 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4S390E>)

enumerator S390 = 22

IBM System/390

##### [` SPU `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3SPUE>)

enumerator SPU = 23

IBM SPU/SPC

##### [` V800 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4V800E>)

enumerator V800 = 36

NEC V800

##### [` FR20 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4FR20E>)

enumerator FR20 = 37

Fujitsu FR20

##### [` RH32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4RH32E>)

enumerator RH32 = 38

TRW RH-32

##### [` RCE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3RCEE>)

enumerator RCE = 39

Motorola RCE

##### [` ARM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3ARME>)

enumerator ARM = 40

ARM

##### [` ALPHA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5ALPHAE>)

enumerator ALPHA = 41

DEC Alpha

##### [` SH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH2SHE>)

enumerator SH = 42

Hitachi SH

##### [` SPARCV9 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7SPARCV9E>)

enumerator SPARCV9 = 43

SPARC V9

##### [` TRICORE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7TRICOREE>)

enumerator TRICORE = 44

Siemens TriCore

##### [` ARC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3ARCE>)

enumerator ARC = 45

Argonaut RISC Core

##### [` H8_300 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6H8_300E>)

enumerator H8\_300 = 46

Hitachi H8/300

##### [` H8_300H `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7H8_300HE>)

enumerator H8\_300H = 47

Hitachi H8/300H

##### [` H8S `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3H8SE>)

enumerator H8S = 48

Hitachi H8S

##### [` H8_500 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6H8_500E>)

enumerator H8\_500 = 49

Hitachi H8/500

##### [` IA_64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5IA_64E>)

enumerator IA\_64 = 50

Intel IA-64 processor architecture

##### [` MIPS_X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6MIPS_XE>)

enumerator MIPS\_X = 51

Stanford MIPS-X

##### [` COLDFIRE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8COLDFIREE>)

enumerator COLDFIRE = 52

Motorola ColdFire

##### [` M68HC12 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7M68HC12E>)

enumerator M68HC12 = 53

Motorola M68HC12

##### [` MMA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3MMAE>)

enumerator MMA = 54

Fujitsu MMA Multimedia Accelerator

##### [` PCP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3PCPE>)

enumerator PCP = 55

Siemens PCP

##### [` NCPU `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4NCPUE>)

enumerator NCPU = 56

Sony nCPU embedded RISC processor

##### [` NDR1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4NDR1E>)

enumerator NDR1 = 57

Denso NDR1 microprocessor

##### [` STARCORE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8STARCOREE>)

enumerator STARCORE = 58

Motorola Star\*Core processor

##### [` ME16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4ME16E>)

enumerator ME16 = 59

Toyota ME16 processor

##### [` ST100 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5ST100E>)

enumerator ST100 = 60

STMicroelectronics ST100 processor

##### [` TINYJ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5TINYJE>)

enumerator TINYJ = 61

Advanced Logic Corp. TinyJ embedded processor family

##### [` X86_64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6X86_64E>)

enumerator X86\_64 = 62

AMD x86-64 architecture

##### [` PDSP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4PDSPE>)

enumerator PDSP = 63

Sony DSP Processor

##### [` PDP10 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5PDP10E>)

enumerator PDP10 = 64

Digital Equipment Corp. PDP-10

##### [` PDP11 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5PDP11E>)

enumerator PDP11 = 65

Digital Equipment Corp. PDP-11

##### [` FX66 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4FX66E>)

enumerator FX66 = 66

Siemens FX66 microcontroller

##### [` ST9PLUS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7ST9PLUSE>)

enumerator ST9PLUS = 67

STMicroelectronics ST9+ 8/16 bit microcontroller

##### [` ST7 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3ST7E>)

enumerator ST7 = 68

STMicroelectronics ST7 8-bit microcontroller

##### [` M68HC16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7M68HC16E>)

enumerator M68HC16 = 69

Motorola MC68HC16 Microcontroller

##### [` M68HC11 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7M68HC11E>)

enumerator M68HC11 = 70

Motorola MC68HC11 Microcontroller

##### [` M68HC08 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7M68HC08E>)

enumerator M68HC08 = 71

Motorola MC68HC08 Microcontroller

##### [` M68HC05 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7M68HC05E>)

enumerator M68HC05 = 72

Motorola MC68HC05 Microcontroller

##### [` SVX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3SVXE>)

enumerator SVX = 73

Silicon Graphics SVx

##### [` ST19 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4ST19E>)

enumerator ST19 = 74

STMicroelectronics ST19 8-bit microcontroller

##### [` VAX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3VAXE>)

enumerator VAX = 75

Digital VAX

##### [` CRIS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4CRISE>)

enumerator CRIS = 76

Axis Communications 32-bit embedded processor

##### [` JAVELIN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7JAVELINE>)

enumerator JAVELIN = 77

Infineon Technologies 32-bit embedded processor

##### [` FIREPATH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8FIREPATHE>)

enumerator FIREPATH = 78

Element 14 64-bit DSP Processor

##### [` ZSP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3ZSPE>)

enumerator ZSP = 79

LSI Logic 16-bit DSP Processor

##### [` MMIX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4MMIXE>)

enumerator MMIX = 80

Donald Knuth’s educational 64-bit processor

##### [` HUANY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5HUANYE>)

enumerator HUANY = 81

Harvard University machine-independent object files

##### [` PRISM `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5PRISME>)

enumerator PRISM = 82

SiTera Prism

##### [` AVR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3AVRE>)

enumerator AVR = 83

Atmel AVR 8-bit microcontroller

##### [` FR30 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4FR30E>)

enumerator FR30 = 84

Fujitsu FR30

##### [` D10V `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4D10VE>)

enumerator D10V = 85

Mitsubishi D10V

##### [` D30V `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4D30VE>)

enumerator D30V = 86

Mitsubishi D30V

##### [` V850 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4V850E>)

enumerator V850 = 87

NEC v850

##### [` M32R `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4M32RE>)

enumerator M32R = 88

Mitsubishi M32R

##### [` MN10300 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7MN10300E>)

enumerator MN10300 = 89

Matsushita MN10300

##### [` MN10200 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7MN10200E>)

enumerator MN10200 = 90

Matsushita MN10200

##### [` PJ `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH2PJE>)

enumerator PJ = 91

picoJava

##### [` OPENRISC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8OPENRISCE>)

enumerator OPENRISC = 92

OpenRISC 32-bit embedded processor

##### [` ARC_COMPACT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH11ARC_COMPACTE>)

enumerator ARC\_COMPACT = 93

ARC International ARCompact processor (old spelling/synonym: EM\_ARC\_A5)

##### [` XTENSA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6XTENSAE>)

enumerator XTENSA = 94

Tensilica Xtensa Architecture

##### [` VIDEOCORE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH9VIDEOCOREE>)

enumerator VIDEOCORE = 95

Alphamosaic VideoCore processor

##### [` TMM_GPP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7TMM_GPPE>)

enumerator TMM\_GPP = 96

Thompson Multimedia General Purpose Processor

##### [` NS32K `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5NS32KE>)

enumerator NS32K = 97

National Semiconductor 32000 series

##### [` TPC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3TPCE>)

enumerator TPC = 98

Tenor Network TPC processor

##### [` SNP1K `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5SNP1KE>)

enumerator SNP1K = 99

Trebia SNP 1000 processor

##### [` ST200 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5ST200E>)

enumerator ST200 = 100

STMicroelectronics (www.st.com) ST200

##### [` IP2K `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4IP2KE>)

enumerator IP2K = 101

Ubicom IP2xxx microcontroller family

##### [` MAX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3MAXE>)

enumerator MAX = 102

MAX Processor

##### [` CR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH2CRE>)

enumerator CR = 103

National Semiconductor CompactRISC microprocessor

##### [` F2MC16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6F2MC16E>)

enumerator F2MC16 = 104

Fujitsu F2MC16

##### [` MSP430 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6MSP430E>)

enumerator MSP430 = 105

Texas Instruments embedded microcontroller msp430

##### [` BLACKFIN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8BLACKFINE>)

enumerator BLACKFIN = 106

Analog Devices Blackfin (DSP) processor

##### [` SE_C33 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6SE_C33E>)

enumerator SE\_C33 = 107

S1C33 Family of Seiko Epson processors

##### [` SEP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3SEPE>)

enumerator SEP = 108

Sharp embedded microprocessor

##### [` ARCA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4ARCAE>)

enumerator ARCA = 109

Arca RISC Microprocessor

##### [` UNICORE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7UNICOREE>)

enumerator UNICORE = 110

Microprocessor series from PKU-Unity Ltd. and MPRC of Peking University

##### [` EXCESS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6EXCESSE>)

enumerator EXCESS = 111

eXcess: 16/32/64-bit configurable embedded CPU

##### [` DXP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3DXPE>)

enumerator DXP = 112

Icera Semiconductor Inc. Deep Execution Processor

##### [` ALTERA_NIOS2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH12ALTERA_NIOS2E>)

enumerator ALTERA\_NIOS2 = 113

Altera Nios II soft-core processor

##### [` CRX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3CRXE>)

enumerator CRX = 114

National Semiconductor CompactRISC CRX

##### [` XGATE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5XGATEE>)

enumerator XGATE = 115

Motorola XGATE embedded processor

##### [` C166 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4C166E>)

enumerator C166 = 116

Infineon C16x/XC16x processor

##### [` M16C `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4M16CE>)

enumerator M16C = 117

Renesas M16C series microprocessors

##### [` DSPIC30F `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8DSPIC30FE>)

enumerator DSPIC30F = 118

Microchip Technology dsPIC30F Digital Signal

##### [` CE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH2CEE>)

enumerator CE = 119

Freescale Communication Engine RISC core

##### [` M32C `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4M32CE>)

enumerator M32C = 120

Renesas M32C series microprocessors

##### [` TSK3000 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7TSK3000E>)

enumerator TSK3000 = 131

Altium TSK3000 core

##### [` RS08 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4RS08E>)

enumerator RS08 = 132

Freescale RS08 embedded processor

##### [` SHARC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5SHARCE>)

enumerator SHARC = 133

Analog Devices SHARC family of 32-bit DSP

##### [` ECOG2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5ECOG2E>)

enumerator ECOG2 = 134

Cyan Technology eCOG2 microprocessor

##### [` SCORE7 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6SCORE7E>)

enumerator SCORE7 = 135

Sunplus S+core7 RISC processor

##### [` DSP24 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5DSP24E>)

enumerator DSP24 = 136

New Japan Radio (NJR) 24-bit DSP Processor

##### [` VIDEOCORE3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH10VIDEOCORE3E>)

enumerator VIDEOCORE3 = 137

Broadcom VideoCore III processor

##### [` LATTICEMICO32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH13LATTICEMICO32E>)

enumerator LATTICEMICO32 = 138

RISC processor for Lattice FPGA architecture

##### [` SE_C17 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6SE_C17E>)

enumerator SE\_C17 = 139

Seiko Epson C17 family

##### [` TI_C6000 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8TI_C6000E>)

enumerator TI\_C6000 = 140

The Texas Instruments TMS320C6000 DSP family

##### [` TI_C2000 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8TI_C2000E>)

enumerator TI\_C2000 = 141

The Texas Instruments TMS320C2000 DSP family

##### [` TI_C5500 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8TI_C5500E>)

enumerator TI\_C5500 = 142

The Texas Instruments TMS320C55x DSP family

##### [` MMDSP_PLUS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH10MMDSP_PLUSE>)

enumerator MMDSP\_PLUS = 160

STMicroelectronics 64bit VLIW Data Signal Processor

##### [` CYPRESS_M8C `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH11CYPRESS_M8CE>)

enumerator CYPRESS\_M8C = 161

Cypress M8C microprocessor

##### [` R32C `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4R32CE>)

enumerator R32C = 162

Renesas R32C series microprocessors

##### [` TRIMEDIA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8TRIMEDIAE>)

enumerator TRIMEDIA = 163

NXP Semiconductors TriMedia architecture family

##### [` HEXAGON `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7HEXAGONE>)

enumerator HEXAGON = 164

Qualcomm Hexagon processor

##### [` M8051 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5M8051E>)

enumerator M8051 = 165

Intel 8051 and variants

##### [` STXP7X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6STXP7XE>)

enumerator STXP7X = 166

STMicroelectronics STxP7x family of configurable

##### [` NDS32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5NDS32E>)

enumerator NDS32 = 167

##### [` ECOG1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5ECOG1E>)

enumerator ECOG1 = 168

Cyan Technology eCOG1X family

##### [` ECOG1X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6ECOG1XE>)

enumerator ECOG1X = 168

Cyan Technology eCOG1X family

##### [` MAXQ30 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6MAXQ30E>)

enumerator MAXQ30 = 169

Dallas Semiconductor MAXQ30 Core Micro-controllers

##### [` XIMO16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6XIMO16E>)

enumerator XIMO16 = 170

New Japan Radio (NJR) 16-bit DSP Processor

##### [` MANIK `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5MANIKE>)

enumerator MANIK = 171

M2000 Reconfigurable RISC Microprocessor

##### [` CRAYNV2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7CRAYNV2E>)

enumerator CRAYNV2 = 172

Cray Inc. NV2 vector architecture

##### [` RX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH2RXE>)

enumerator RX = 173

Renesas RX family

##### [` METAG `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5METAGE>)

enumerator METAG = 174

Imagination Technologies META processor

##### [` MCST_ELBRUS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH11MCST_ELBRUSE>)

enumerator MCST\_ELBRUS = 175

MCST Elbrus general purpose hardware architecture

##### [` ECOG16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6ECOG16E>)

enumerator ECOG16 = 176

Cyan Technology eCOG16 family

##### [` CR16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4CR16E>)

enumerator CR16 = 177

National Semiconductor CompactRISC CR16 16-bit

##### [` ETPU `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4ETPUE>)

enumerator ETPU = 178

Freescale Extended Time Processing Unit

##### [` SLE9X `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5SLE9XE>)

enumerator SLE9X = 179

Infineon Technologies SLE9X core

##### [` L10M `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4L10ME>)

enumerator L10M = 180

Intel L10M

##### [` K10M `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4K10ME>)

enumerator K10M = 181

Intel K10M

##### [` AARCH64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7AARCH64E>)

enumerator AARCH64 = 183

ARM AArch64

##### [` AVR32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5AVR32E>)

enumerator AVR32 = 185

Atmel Corporation 32-bit microprocessor family

##### [` STM8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4STM8E>)

enumerator STM8 = 186

STMicroeletronics STM8 8-bit microcontroller

##### [` TILE64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6TILE64E>)

enumerator TILE64 = 187

Tilera TILE64 multicore architecture family

##### [` TILEPRO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH7TILEPROE>)

enumerator TILEPRO = 188

Tilera TILEPro multicore architecture family

##### [` CUDA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4CUDAE>)

enumerator CUDA = 190

NVIDIA CUDA architecture

##### [` TILEGX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6TILEGXE>)

enumerator TILEGX = 191

Tilera TILE-Gx multicore architecture family

##### [` CLOUDSHIELD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH11CLOUDSHIELDE>)

enumerator CLOUDSHIELD = 192

CloudShield architecture family

##### [` COREA_1ST `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH9COREA_1STE>)

enumerator COREA\_1ST = 193

KIPO-KAIST Core-A 1st generation processor family

##### [` COREA_2ND `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH9COREA_2NDE>)

enumerator COREA\_2ND = 194

KIPO-KAIST Core-A 2nd generation processor family

##### [` ARC_COMPACT2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH12ARC_COMPACT2E>)

enumerator ARC\_COMPACT2 = 195

Synopsys ARCompact V2

##### [` OPEN8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5OPEN8E>)

enumerator OPEN8 = 196

Open8 8-bit RISC soft processor core

##### [` RL78 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4RL78E>)

enumerator RL78 = 197

Renesas RL78 family

##### [` VIDEOCORE5 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH10VIDEOCORE5E>)

enumerator VIDEOCORE5 = 198

Broadcom VideoCore V processor

##### [` M78KOR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6M78KORE>)

enumerator M78KOR = 199

Renesas 78KOR family

##### [` M56800EX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8M56800EXE>)

enumerator M56800EX = 200

Freescale 56800EX Digital Signal Controller (DSC)

##### [` BA1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3BA1E>)

enumerator BA1 = 201

Beyond BA1 CPU architecture

##### [` BA2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3BA2E>)

enumerator BA2 = 202

Beyond BA2 CPU architecture

##### [` XCORE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5XCOREE>)

enumerator XCORE = 203

XMOS xCORE processor family

##### [` MCHP_PIC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8MCHP_PICE>)

enumerator MCHP\_PIC = 204

Microchip 8-bit PIC(r) family

##### [` INTEL205 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8INTEL205E>)

enumerator INTEL205 = 205

Reserved by Intel

##### [` INTEL206 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8INTEL206E>)

enumerator INTEL206 = 206

Reserved by Intel

##### [` INTEL207 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8INTEL207E>)

enumerator INTEL207 = 207

Reserved by Intel

##### [` INTEL208 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8INTEL208E>)

enumerator INTEL208 = 208

Reserved by Intel

##### [` INTEL209 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH8INTEL209E>)

enumerator INTEL209 = 209

Reserved by Intel

##### [` KM32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4KM32E>)

enumerator KM32 = 210

KM211 KM32 32-bit processor

##### [` KMX32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5KMX32E>)

enumerator KMX32 = 211

KM211 KMX32 32-bit processor

##### [` KMX16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5KMX16E>)

enumerator KMX16 = 212

KM211 KMX16 16-bit processor

##### [` KMX8 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4KMX8E>)

enumerator KMX8 = 213

KM211 KMX8 8-bit processor

##### [` KVARC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5KVARCE>)

enumerator KVARC = 214

KM211 KVARC processor

##### [` CDP `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3CDPE>)

enumerator CDP = 215

Paneve CDP architecture family

##### [` COGE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4COGEE>)

enumerator COGE = 216

Cognitive Smart Memory Processor

##### [` COOL `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4COOLE>)

enumerator COOL = 217

iCelero CoolEngine

##### [` NORC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4NORCE>)

enumerator NORC = 218

Nanoradio Optimized RISC

##### [` CSR_KALIMBA `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH11CSR_KALIMBAE>)

enumerator CSR\_KALIMBA = 219

CSR Kalimba architecture family

##### [` AMDGPU `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH6AMDGPUE>)

enumerator AMDGPU = 224

AMD GPU architecture

##### [` RISCV `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH5RISCVE>)

enumerator RISCV = 243

RISC-V

##### [` BPF `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH3BPFE>)

enumerator BPF = 247

eBPF Filter

##### [` CSKY `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH4CSKYE>)

enumerator CSKY = 252

C-SKY

##### [` LOONGARCH `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH9LOONGARCHE>)

enumerator LOONGARCH = 258

LoongArch

##### [` ALPHA_ALT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF4ARCH9ALPHA_ALTE>)

enumerator ALPHA\_ALT = 0x9026

### [Processor Flags](<https://lief.re/doc/latest/formats/elf/cpp.html#processor-flags>)

#### [` LIEF::ELF::PROCESSOR_FLAGS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGSE>)

enum class LIEF::ELF::PROCESSOR\_FLAGS : uint64\_t

*Values:*

##### [` ARM_EABI_UNKNOWN `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS16ARM_EABI_UNKNOWNE>)

enumerator ARM\_EABI\_UNKNOWN = 0x00000000 | (PF\_ARM\_ID &lt;&lt; PFLAGS\_BIT)

##### [` ARM_SOFT_FLOAT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14ARM_SOFT_FLOATE>)

enumerator ARM\_SOFT\_FLOAT = 0x00000200 | (PF\_ARM\_ID &lt;&lt; PFLAGS\_BIT)

##### [` ARM_VFP_FLOAT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS13ARM_VFP_FLOATE>)

enumerator ARM\_VFP\_FLOAT = 0x00000400 | (PF\_ARM\_ID &lt;&lt; PFLAGS\_BIT)

##### [` ARM_EABI_VER1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS13ARM_EABI_VER1E>)

enumerator ARM\_EABI\_VER1 = 0x01000000 | (PF\_ARM\_ID &lt;&lt; PFLAGS\_BIT)

##### [` ARM_EABI_VER2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS13ARM_EABI_VER2E>)

enumerator ARM\_EABI\_VER2 = 0x02000000 | (PF\_ARM\_ID &lt;&lt; PFLAGS\_BIT)

##### [` ARM_EABI_VER3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS13ARM_EABI_VER3E>)

enumerator ARM\_EABI\_VER3 = 0x03000000 | (PF\_ARM\_ID &lt;&lt; PFLAGS\_BIT)

##### [` ARM_EABI_VER4 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS13ARM_EABI_VER4E>)

enumerator ARM\_EABI\_VER4 = 0x04000000 | (PF\_ARM\_ID &lt;&lt; PFLAGS\_BIT)

##### [` ARM_EABI_VER5 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS13ARM_EABI_VER5E>)

enumerator ARM\_EABI\_VER5 = 0x05000000 | (PF\_ARM\_ID &lt;&lt; PFLAGS\_BIT)

##### [` HEXAGON_MACH_V2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS15HEXAGON_MACH_V2E>)

enumerator HEXAGON\_MACH\_V2 = 0x00000001 | (PF\_HEX\_ID &lt;&lt; PFLAGS\_BIT)

##### [` HEXAGON_MACH_V3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS15HEXAGON_MACH_V3E>)

enumerator HEXAGON\_MACH\_V3 = 0x00000002 | (PF\_HEX\_ID &lt;&lt; PFLAGS\_BIT)

##### [` HEXAGON_MACH_V4 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS15HEXAGON_MACH_V4E>)

enumerator HEXAGON\_MACH\_V4 = 0x00000003 | (PF\_HEX\_ID &lt;&lt; PFLAGS\_BIT)

##### [` HEXAGON_MACH_V5 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS15HEXAGON_MACH_V5E>)

enumerator HEXAGON\_MACH\_V5 = 0x00000004 | (PF\_HEX\_ID &lt;&lt; PFLAGS\_BIT)

##### [` HEXAGON_ISA_V2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14HEXAGON_ISA_V2E>)

enumerator HEXAGON\_ISA\_V2 = 0x00000010 | (PF\_HEX\_ID &lt;&lt; PFLAGS\_BIT)

##### [` HEXAGON_ISA_V3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14HEXAGON_ISA_V3E>)

enumerator HEXAGON\_ISA\_V3 = 0x00000020 | (PF\_HEX\_ID &lt;&lt; PFLAGS\_BIT)

##### [` HEXAGON_ISA_V4 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14HEXAGON_ISA_V4E>)

enumerator HEXAGON\_ISA\_V4 = 0x00000030 | (PF\_HEX\_ID &lt;&lt; PFLAGS\_BIT)

##### [` HEXAGON_ISA_V5 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14HEXAGON_ISA_V5E>)

enumerator HEXAGON\_ISA\_V5 = 0x00000040 | (PF\_HEX\_ID &lt;&lt; PFLAGS\_BIT)

##### [` LOONGARCH_ABI_SOFT_FLOAT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS24LOONGARCH_ABI_SOFT_FLOATE>)

enumerator LOONGARCH\_ABI\_SOFT\_FLOAT = 0x1 | (PF\_LOONGARCH\_ID &lt;&lt; PFLAGS\_BIT)

##### [` LOONGARCH_ABI_SINGLE_FLOAT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS26LOONGARCH_ABI_SINGLE_FLOATE>)

enumerator LOONGARCH\_ABI\_SINGLE\_FLOAT = 0x2 | (PF\_LOONGARCH\_ID &lt;&lt; PFLAGS\_BIT)

##### [` LOONGARCH_ABI_DOUBLE_FLOAT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS26LOONGARCH_ABI_DOUBLE_FLOATE>)

enumerator LOONGARCH\_ABI\_DOUBLE\_FLOAT = 0x3 | (PF\_LOONGARCH\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_NOREORDER `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_NOREORDERE>)

enumerator MIPS\_NOREORDER = 0x00000001 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_PIC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS8MIPS_PICE>)

enumerator MIPS\_PIC = 0x00000002 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_CPIC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS9MIPS_CPICE>)

enumerator MIPS\_CPIC = 0x00000004 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ABI2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS9MIPS_ABI2E>)

enumerator MIPS\_ABI2 = 0x00000020 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_32BITMODE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_32BITMODEE>)

enumerator MIPS\_32BITMODE = 0x00000100 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_FP64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS9MIPS_FP64E>)

enumerator MIPS\_FP64 = 0x00000200 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_NAN2008 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS12MIPS_NAN2008E>)

enumerator MIPS\_NAN2008 = 0x00000400 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ABI_O32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS12MIPS_ABI_O32E>)

enumerator MIPS\_ABI\_O32 = 0x00001000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ABI_O64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS12MIPS_ABI_O64E>)

enumerator MIPS\_ABI\_O64 = 0x00002000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ABI_EABI32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS15MIPS_ABI_EABI32E>)

enumerator MIPS\_ABI\_EABI32 = 0x00003000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ABI_EABI64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS15MIPS_ABI_EABI64E>)

enumerator MIPS\_ABI\_EABI64 = 0x00004000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_3900 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_MACH_3900E>)

enumerator MIPS\_MACH\_3900 = 0x00810000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_4010 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_MACH_4010E>)

enumerator MIPS\_MACH\_4010 = 0x00820000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_4100 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_MACH_4100E>)

enumerator MIPS\_MACH\_4100 = 0x00830000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_4650 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_MACH_4650E>)

enumerator MIPS\_MACH\_4650 = 0x00850000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_4120 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_MACH_4120E>)

enumerator MIPS\_MACH\_4120 = 0x00870000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_4111 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_MACH_4111E>)

enumerator MIPS\_MACH\_4111 = 0x00880000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_SB1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS13MIPS_MACH_SB1E>)

enumerator MIPS\_MACH\_SB1 = 0x008a0000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_OCTEON `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS16MIPS_MACH_OCTEONE>)

enumerator MIPS\_MACH\_OCTEON = 0x008b0000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_XLR `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS13MIPS_MACH_XLRE>)

enumerator MIPS\_MACH\_XLR = 0x008c0000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_OCTEON2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS17MIPS_MACH_OCTEON2E>)

enumerator MIPS\_MACH\_OCTEON2 = 0x008d0000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_OCTEON3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS17MIPS_MACH_OCTEON3E>)

enumerator MIPS\_MACH\_OCTEON3 = 0x008e0000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_5400 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_MACH_5400E>)

enumerator MIPS\_MACH\_5400 = 0x00910000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_5900 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_MACH_5900E>)

enumerator MIPS\_MACH\_5900 = 0x00920000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_5500 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_MACH_5500E>)

enumerator MIPS\_MACH\_5500 = 0x00980000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_9000 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_MACH_9000E>)

enumerator MIPS\_MACH\_9000 = 0x00990000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_LS2E `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_MACH_LS2EE>)

enumerator MIPS\_MACH\_LS2E = 0x00a00000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_LS2F `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_MACH_LS2FE>)

enumerator MIPS\_MACH\_LS2F = 0x00a10000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MACH_LS3A `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_MACH_LS3AE>)

enumerator MIPS\_MACH\_LS3A = 0x00a20000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_MICROMIPS `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_MICROMIPSE>)

enumerator MIPS\_MICROMIPS = 0x02000000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ARCH_ASE_M16 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS17MIPS_ARCH_ASE_M16E>)

enumerator MIPS\_ARCH\_ASE\_M16 = 0x04000000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ARCH_ASE_MDMX `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS18MIPS_ARCH_ASE_MDMXE>)

enumerator MIPS\_ARCH\_ASE\_MDMX = 0x08000000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ARCH_1 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS11MIPS_ARCH_1E>)

enumerator MIPS\_ARCH\_1 = 0x00000000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ARCH_2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS11MIPS_ARCH_2E>)

enumerator MIPS\_ARCH\_2 = 0x10000000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ARCH_3 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS11MIPS_ARCH_3E>)

enumerator MIPS\_ARCH\_3 = 0x20000000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ARCH_4 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS11MIPS_ARCH_4E>)

enumerator MIPS\_ARCH\_4 = 0x30000000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ARCH_5 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS11MIPS_ARCH_5E>)

enumerator MIPS\_ARCH\_5 = 0x40000000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ARCH_32 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS12MIPS_ARCH_32E>)

enumerator MIPS\_ARCH\_32 = 0x50000000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ARCH_64 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS12MIPS_ARCH_64E>)

enumerator MIPS\_ARCH\_64 = 0x60000000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ARCH_32R2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_ARCH_32R2E>)

enumerator MIPS\_ARCH\_32R2 = 0x70000000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ARCH_64R2 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_ARCH_64R2E>)

enumerator MIPS\_ARCH\_64R2 = 0x80000000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ARCH_32R6 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_ARCH_32R6E>)

enumerator MIPS\_ARCH\_32R6 = 0x90000000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` MIPS_ARCH_64R6 `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS14MIPS_ARCH_64R6E>)

enumerator MIPS\_ARCH\_64R6 = 0xa0000000 | (PF\_MIPS\_ID &lt;&lt; PFLAGS\_BIT)

##### [` RISCV_RVC `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS9RISCV_RVCE>)

enumerator RISCV\_RVC = 0x00000001 | (PF\_RISCV\_ID &lt;&lt; PFLAGS\_BIT)

##### [` RISCV_FLOAT_ABI_SOFT `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS20RISCV_FLOAT_ABI_SOFTE>)

enumerator RISCV\_FLOAT\_ABI\_SOFT = 0x00000000 | (PF\_RISCV\_ID &lt;&lt; PFLAGS\_BIT)

##### [` RISCV_FLOAT_ABI_SINGLE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS22RISCV_FLOAT_ABI_SINGLEE>)

enumerator RISCV\_FLOAT\_ABI\_SINGLE = 0x00000002 | (PF\_RISCV\_ID &lt;&lt; PFLAGS\_BIT)

##### [` RISCV_FLOAT_ABI_DOUBLE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS22RISCV_FLOAT_ABI_DOUBLEE>)

enumerator RISCV\_FLOAT\_ABI\_DOUBLE = 0x00000004 | (PF\_RISCV\_ID &lt;&lt; PFLAGS\_BIT)

##### [` RISCV_FLOAT_ABI_QUAD `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS20RISCV_FLOAT_ABI_QUADE>)

enumerator RISCV\_FLOAT\_ABI\_QUAD = 0x00000006 | (PF\_RISCV\_ID &lt;&lt; PFLAGS\_BIT)

##### [` RISCV_FLOAT_ABI_RVE `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS19RISCV_FLOAT_ABI_RVEE>)

enumerator RISCV\_FLOAT\_ABI\_RVE = 0x00000008 | (PF\_RISCV\_ID &lt;&lt; PFLAGS\_BIT)

##### [` RISCV_FLOAT_ABI_TSO `](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF15PROCESSOR_FLAGS19RISCV_FLOAT_ABI_TSOE>)

enumerator RISCV\_FLOAT\_ABI\_TSO = 0x00000010 | (PF\_RISCV\_ID &lt;&lt; PFLAGS\_BIT)
