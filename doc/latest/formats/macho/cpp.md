---
documentID: "9234e6bbacb2f0d3db307e70152f1335b633e161a06198ed452a3a25cb9454b3"
docname: "formats/macho/cpp"
title: "Mach-O C++ API - LIEF Documentation"
description: "Mach-O C++ API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/formats/macho/cpp.html"
markdownURL: "https://lief.re/doc/latest/formats/macho/cpp.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "5c75e9781c7028c0a49dca1f1b95183e23f6e33e8f28483b7dc941bd8bf50ac9"
---

# [C++](<https://lief.re/doc/latest/formats/macho/cpp.html#c>)

## [Parser](<https://lief.re/doc/latest/formats/macho/cpp.html#parser>)

### [` Parser `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6ParserE>)

class Parser : public LIEF::[Parser](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6ParserE> "LIEF::Parser")

The main interface to parse a Mach-O binary.

This class is used to parse both Fat &amp; non-Fat binary. Non-fat binaries are considered as a **fat** with only one architecture. This is why [MachO::Parser::parse](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Parser_1a0428b02596087b2f0fa19461c8d9b3b6>) outputs a [FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FatBinary>) object.

Public Functions

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6ParseraSERK6Parser>)

[Parser](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6ParserE> "LIEF::MachO::Parser") &amp;operator=(const [Parser](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6ParserE> "LIEF::MachO::Parser") &amp;copy) = delete

#### [` Parser `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Parser6ParserERK6Parser>)

Parser(const [Parser](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Parser6ParserERK6Parser> "LIEF::MachO::Parser::Parser") &amp;copy) = delete

#### [` ~Parser `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6ParserD0Ev>)

~Parser()

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Parser5parseENSt11string_viewERK12ParserConfig>)

static std::unique\_ptr&lt;[FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary")&gt; parse(std::string\_view filename, const [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig")::[deep](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig4deepEv> "LIEF::MachO::ParserConfig::deep")())

Parse a Mach-O file from the path provided by the `filename` parameter.

The `conf` parameter can be used to tweak the configuration of the parser

**Parameters:**

- **filename** – **[in]** Path to the Mach-O file
- **conf** – **[in]** [Parser](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Parser>) configuration (Default: [ParserConfig::deep](<https://lief.re/doc/latest/formats/macho/cpp.html#structLIEF_1_1MachO_1_1ParserConfig_1a8008f83841223f9359abe188b4e60b69>))

#### [` PathTparse `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF5MachO6Parser5parseENSt10unique_ptrI9FatBinaryEERK5PathTRK12ParserConfig>)

template&lt;class PathT, enable\_if\_path\_t&lt;[PathT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF5MachO6Parser5parseENSt10unique_ptrI9FatBinaryEERK5PathTRK12ParserConfig> "LIEF::MachO::Parser::parse::PathT")&gt; = 0&gt;  
static inline std::unique\_ptr&lt;[FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary")&gt; parse(const [PathT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF5MachO6Parser5parseENSt10unique_ptrI9FatBinaryEERK5PathTRK12ParserConfig> "LIEF::MachO::Parser::parse::PathT") &amp;filename, const [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig")::[deep](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig4deepEv> "LIEF::MachO::ParserConfig::deep")())

Same as [parse(std::string\_view, const ParserConfig&amp;)](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Parser_1a0428b02596087b2f0fa19461c8d9b3b6>) but the file is given as a `std::filesystem::path`.

#### [` parse `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Parser5parseERKNSt6vectorI7uint8_tEERK12ParserConfig>)

static std::unique\_ptr&lt;[FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary")&gt; parse(const std::vector&lt;uint8\_t&gt; &amp;data, const [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig")::[deep](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig4deepEv> "LIEF::MachO::ParserConfig::deep")())

Parse a Mach-O file from the raw content provided by the `data` parameter.

The `conf` parameter can be used to tweak the configuration of the parser

**Parameters:**

- **data** – **[in]** Mach-O file as a vector of bytes
- **conf** – **[in]** [Parser](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Parser>) configuration (Default: [ParserConfig::deep](<https://lief.re/doc/latest/formats/macho/cpp.html#structLIEF_1_1MachO_1_1ParserConfig_1a8008f83841223f9359abe188b4e60b69>))

#### [` parse `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Parser5parseENSt10unique_ptrI12BinaryStreamEERK12ParserConfig>)

static std::unique\_ptr&lt;[FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary")&gt; parse(std::unique\_ptr&lt;[BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream")&gt; stream, const [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig")::[deep](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig4deepEv> "LIEF::MachO::ParserConfig::deep")())

Parse a Mach-O binary from the provided [BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#classLIEF_1_1BinaryStream>).

#### [` parse_from_memory `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Parser17parse_from_memoryE9uintptr_tRK12ParserConfig>)

static std::unique\_ptr&lt;[FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary")&gt; parse\_from\_memory(uintptr\_t address, const [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig")::[deep](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig4deepEv> "LIEF::MachO::ParserConfig::deep")())

Parse the Mach-O binary from the address given in the first parameter.

#### [` parse_from_memory `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Parser17parse_from_memoryE9uintptr_t6size_tRK12ParserConfig>)

static std::unique\_ptr&lt;[FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary")&gt; parse\_from\_memory(uintptr\_t address, size\_t size, const [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig")::[deep](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig4deepEv> "LIEF::MachO::ParserConfig::deep")())

Parse the Mach-O binary from the address given in the first parameter and the size given in the second parameter.

#### [` parse_from_dump `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Parser15parse_from_dumpENSt11string_viewE8uint64_tRK12ParserConfig>)

static std::unique\_ptr&lt;[FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary")&gt; parse\_from\_dump(std::string\_view filepath, uint64\_t addr, const [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig")::[deep](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig4deepEv> "LIEF::MachO::ParserConfig::deep")())

Parse a Mach-O binary from a memory dump located on disk.

A dump is a raw capture of the process memory that was mapped starting at the virtual address `addr`. This is typically used to parse a Mach-O image that has been dumped from memory (e.g. from a debugger or a runtime hook).

**Parameters:**

- **filepath** – **[in]** Path to the file that contains the memory dump
- **addr** – **[in]** Virtual address at which the dump was mapped
- **conf** – **[in]** Optional configuration for the parser

#### [` PathTparse_from_dump `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF5MachO6Parser15parse_from_dumpENSt10unique_ptrI9FatBinaryEERK5PathT8uint64_tRK12ParserConfig>)

template&lt;class PathT, enable\_if\_path\_t&lt;[PathT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF5MachO6Parser15parse_from_dumpENSt10unique_ptrI9FatBinaryEERK5PathT8uint64_tRK12ParserConfig> "LIEF::MachO::Parser::parse_from_dump::PathT")&gt; = 0&gt;  
static inline std::unique\_ptr&lt;[FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary")&gt; parse\_from\_dump(const [PathT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF5MachO6Parser15parse_from_dumpENSt10unique_ptrI9FatBinaryEERK5PathT8uint64_tRK12ParserConfig> "LIEF::MachO::Parser::parse_from_dump::PathT") &amp;filepath, uint64\_t addr, const [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig")::[deep](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig4deepEv> "LIEF::MachO::ParserConfig::deep")())

Same as [parse\_from\_dump(std::string\_view, uint64\_t, const ParserConfig&amp;)](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Parser_1a4939daa61db61b0a257b9ea8504c004f>) but the dump file is given as a `std::filesystem::path`.

#### [` parse_from_dump `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Parser15parse_from_dumpER12BinaryStream8uint64_tRK12ParserConfig>)

static std::unique\_ptr&lt;[FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary")&gt; parse\_from\_dump([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream, uint64\_t addr, const [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig")::[deep](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig4deepEv> "LIEF::MachO::ParserConfig::deep")())

Same as [parse\_from\_dump(std::string\_view, uint64\_t, const ParserConfig&amp;)](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Parser_1a4939daa61db61b0a257b9ea8504c004f>) but the dump is wrapped in the given **non-owned** stream.

#### [` parse_from_dump `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Parser15parse_from_dumpENSt10unique_ptrI12BinaryStreamEE8uint64_tRK12ParserConfig>)

static std::unique\_ptr&lt;[FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary")&gt; parse\_from\_dump(std::unique\_ptr&lt;[BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream")&gt; stream, uint64\_t addr, const [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig")::[deep](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig4deepEv> "LIEF::MachO::ParserConfig::deep")())

Same as [parse\_from\_dump(std::string\_view, uint64\_t, const ParserConfig&amp;)](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Parser_1a4939daa61db61b0a257b9ea8504c004f>) but the dump is wrapped in the given **owned** stream.

### [` BinaryParser `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BinaryParserE>)

class BinaryParser : public LIEF::[Parser](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6ParserE> "LIEF::Parser")

Class used to parse a **single** binary (i.e. non-FAT).

> **See also**
> 
> [MachO::Parser](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Parser>)

> **Warning**
> 
> This class should not be used directly.

Public Functions

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BinaryParseraSERK12BinaryParser>)

[BinaryParser](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BinaryParserE> "LIEF::MachO::BinaryParser") &amp;operator=(const [BinaryParser](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BinaryParserE> "LIEF::MachO::BinaryParser") &amp;copy) = delete

#### [` BinaryParser `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BinaryParser12BinaryParserERK12BinaryParser>)

BinaryParser(const [BinaryParser](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BinaryParser12BinaryParserERK12BinaryParser> "LIEF::MachO::BinaryParser::BinaryParser") &amp;copy) = delete

#### [` ~BinaryParser `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BinaryParserD0Ev>)

~BinaryParser()

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BinaryParser5parseENSt11string_viewE>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&gt; parse(std::string\_view file)

#### [` parse `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BinaryParser5parseENSt11string_viewERK12ParserConfig>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&gt; parse(std::string\_view file, const [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;conf)

#### [` PathTparse `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF5MachO12BinaryParser5parseENSt10unique_ptrI6BinaryEERK5PathTRK12ParserConfig>)

template&lt;class PathT, enable\_if\_path\_t&lt;[PathT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF5MachO12BinaryParser5parseENSt10unique_ptrI6BinaryEERK5PathTRK12ParserConfig> "LIEF::MachO::BinaryParser::parse::PathT")&gt; = 0&gt;  
static inline std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&gt; parse(const [PathT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF5MachO12BinaryParser5parseENSt10unique_ptrI6BinaryEERK5PathTRK12ParserConfig> "LIEF::MachO::BinaryParser::parse::PathT") &amp;file, const [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig")::[deep](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig4deepEv> "LIEF::MachO::ParserConfig::deep")())

Same as [parse(std::string\_view, const ParserConfig&amp;)](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1BinaryParser_1a885fd87ee10043b39a577144c61a50cd>) but the file is given as a `std::filesystem::path`.

#### [` parse `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BinaryParser5parseERKNSt6vectorI7uint8_tEERK12ParserConfig>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&gt; parse(const std::vector&lt;uint8\_t&gt; &amp;data, const [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig")::[deep](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig4deepEv> "LIEF::MachO::ParserConfig::deep")())

#### [` parse `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BinaryParser5parseERKNSt6vectorI7uint8_tEE8uint64_tRK12ParserConfig>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&gt; parse(const std::vector&lt;uint8\_t&gt; &amp;data, uint64\_t fat\_offset, const [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;conf = [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig")::[deep](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig4deepEv> "LIEF::MachO::ParserConfig::deep")())

#### [` parse `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BinaryParser5parseENSt10unique_ptrI12BinaryStreamEE8uint64_tRK12ParserConfig>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&gt; parse(std::unique\_ptr&lt;[BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream")&gt; stream, uint64\_t fat\_offset, const [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;conf)

Friends

**friend class MachO::Parser**

### [` ParserConfig `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE>)

struct ParserConfig

This structure is used to tweak the MachO [Parser](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Parser>) ([MachO::Parser](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Parser>)).

Public Functions

#### [` full_dyldinfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig13full_dyldinfoEb>)

[ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;full\_dyldinfo(bool flag)

If `flag` is set to `true`, Exports, Bindings and Rebases opcodes are parsed.

> **Warning**
> 
> Enabling this flag can slow down the parsing

Public Members

#### [` parse_dyld_exports `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig18parse_dyld_exportsE>)

bool parse\_dyld\_exports = true

Parse the Dyld export trie.

#### [` parse_dyld_bindings `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig19parse_dyld_bindingsE>)

bool parse\_dyld\_bindings = true

Parse the Dyld binding opcodes.

#### [` parse_dyld_rebases `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig18parse_dyld_rebasesE>)

bool parse\_dyld\_rebases = true

Parse the Dyld rebase opcodes.

#### [` parse_overlay `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig13parse_overlayE>)

bool parse\_overlay = true

Whether the overlay data should be parsed.

#### [` fix_from_memory `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig15fix_from_memoryE>)

bool fix\_from\_memory = false

When parsing Mach-O from memory, this option can be used to *undo* relocations and symbols bindings.

When activated, this option requires parse\_dyld\_bindings and parse\_dyld\_rebases to be enabled.

#### [` from_dyld_shared_cache `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig22from_dyld_shared_cacheE>)

bool from\_dyld\_shared\_cache = false

Whether the binary is coming/extracted from Dyld shared cache.

Public Static Functions

#### [` deep `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig4deepEv>)

static [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") deep()

Return a parser configuration such as all the objects supported by LIEF are parsed.

#### [` quick `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfig5quickEv>)

static [ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") quick()

Return a configuration to parse the most important MachO structures.

---

## [FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#fatbinary>)

### [` FatBinary `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE>)

class FatBinary

Class which represents a Mach-O (fat) binary This object is also used for representing Mach-O binaries that are **NOT FAT**.

Public Types

#### [` binaries_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary10binaries_tE>)

using binaries\_t = std::vector&lt;std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&gt;&gt;

Internal container used to store [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>) objects within a Fat Mach-O.

#### [` it_binaries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary11it_binariesE>)

using it\_binaries = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[binaries\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary10binaries_tE> "LIEF::MachO::FatBinary::binaries_t")&amp;, [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")\*&gt;

Iterator that outputs [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>)&amp;.

#### [` it_const_binaries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary17it_const_binariesE>)

using it\_const\_binaries = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [binaries\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary10binaries_tE> "LIEF::MachO::FatBinary::binaries_t")&amp;, [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")\*&gt;

Iterator that outputs const [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>)&amp;.

Public Functions

#### [` FatBinary `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary9FatBinaryERK9FatBinary>)

FatBinary(const [FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary9FatBinaryERK9FatBinary> "LIEF::MachO::FatBinary::FatBinary")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryaSERK9FatBinary>)

[FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary") &amp;operator=(const [FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary")&amp;) = delete

#### [` ~FatBinary `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryD0Ev>)

virtual ~FatBinary()

#### [` size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO9FatBinary4sizeEv>)

inline size\_t size() const

Number of [MachO::Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>) wrapped by this object.

#### [` empty `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO9FatBinary5emptyEv>)

inline bool empty() const

Checks whether this object contains [MachO::Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>).

#### [` begin `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary5beginEv>)

inline [it\_binaries](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary11it_binariesE> "LIEF::MachO::FatBinary::it_binaries") begin()

#### [` begin `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO9FatBinary5beginEv>)

inline [it\_const\_binaries](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary17it_const_binariesE> "LIEF::MachO::FatBinary::it_const_binaries") begin() const

#### [` end `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary3endEv>)

inline [it\_binaries](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary11it_binariesE> "LIEF::MachO::FatBinary::it_binaries") end()

#### [` end `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO9FatBinary3endEv>)

inline [it\_const\_binaries](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary17it_const_binariesE> "LIEF::MachO::FatBinary::it_const_binaries") end() const

#### [` release_all_binaries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary20release_all_binariesEv>)

inline void release\_all\_binaries()

#### [` pop_back `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary8pop_backEv>)

std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&gt; pop\_back()

Get a pointer to the last [MachO::Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>) object present in this Fat [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>). It returns a nullptr if no binaries are present.

#### [` at `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary2atE6size_t>)

inline [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") \*at(size\_t index)

Get a pointer to the [MachO::Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>) specified by the `index`. It returns a nullptr if the binary does not exist at the given index.

#### [` at `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO9FatBinary2atE6size_t>)

inline const [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") \*at(size\_t index) const

#### [` back `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary4backEv>)

inline [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") \*back()

#### [` back `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO9FatBinary4backEv>)

inline const [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") \*back() const

#### [` front `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary5frontEv>)

inline [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") \*front()

#### [` front `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO9FatBinary5frontEv>)

inline const [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") \*front() const

#### [` operator[] `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryixE6size_t>)

inline [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") \*operator[](size\_t index)

#### [` operator[] `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO9FatBinaryixE6size_t>)

inline const [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") \*operator[](size\_t index) const

#### [` take `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary4takeE6size_t>)

std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&gt; take(size\_t index)

Extract a [MachO::Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>) object. Gives ownership to the caller, and remove it from this [FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FatBinary>) object.

> **Warning**
> 
> This invalidates any previously held iterator!

#### [` take `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary4takeEN6Header8CPU_TYPEE>)

std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&gt; take([Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header")::[CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE> "LIEF::MachO::Header::CPU_TYPE") cpu)

Take the underlying [MachO::Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>) that matches the given architecture If no binary with the architecture can be found, return a nullptr.

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary5writeERKNSt6stringE>)

void write(const std::string &amp;filename)

Reconstruct the Fat binary object and write it in `filename`.

**Parameters:**

**filename** – Path to write the reconstructed binary

#### [` raw `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary3rawEv>)

std::vector&lt;uint8\_t&gt; raw()

Reconstruct the Fat binary object and return its content as bytes.

#### [` get `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary3getEN6Header8CPU_TYPEE>)

inline [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") \*get([Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header")::[CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE> "LIEF::MachO::Header::CPU_TYPE") cpu)

#### [` get `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO9FatBinary3getEN6Header8CPU_TYPEE>)

const [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") \*get([Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header")::[CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE> "LIEF::MachO::Header::CPU_TYPE") cpu) const

Gets a pointer to the [MachO::Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>) that matches the given architecture.

#### [` operator[] `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryixEN6Header8CPU_TYPEE>)

inline [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") \*operator[]([Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header")::[CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE> "LIEF::MachO::Header::CPU_TYPE") cpu)

#### [` operator[] `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO9FatBinaryixEN6Header8CPU_TYPEE>)

inline const [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") \*operator[]([Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header")::[CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE> "LIEF::MachO::Header::CPU_TYPE") cpu) const

Public Static Functions

#### [` create `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary6createE10binaries_t>)

static std::unique\_ptr&lt;[FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary")&gt; create([binaries\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinary10binaries_tE> "LIEF::MachO::FatBinary::binaries_t") binaries)

Create a [FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FatBinary>) object from the provided list of [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>) objects.

The binaries **must** target different architectures (i.e. unique CPU type and subtype). If a duplicate architecture is detected, this function returns a nullptr.

Friends

**friend class LIEF::Parser**

#### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinarylsERNSt7ostreamERK9FatBinary>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary") &amp;fatbinary)

---

## [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#binary>)

### [` Binary `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE>)

class Binary : public LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")

Class which represents a MachO binary.

Public Types

#### [` commands_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary10commands_tE>)

using commands\_t = std::vector&lt;std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt;&gt;

Internal container for storing Mach-O [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand>).

#### [` it_commands `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11it_commandsE>)

using it\_commands = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[commands\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary10commands_tE> "LIEF::MachO::Binary::commands_t")&amp;, [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")\*&gt;

Iterator that outputs [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand>)&amp;.

#### [` it_const_commands `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary17it_const_commandsE>)

using it\_const\_commands = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [commands\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary10commands_tE> "LIEF::MachO::Binary::commands_t")&amp;, [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")\*&gt;

Iterator that outputs const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand>)&amp;.

#### [` symbols_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary9symbols_tE>)

using symbols\_t = std::vector&lt;std::unique\_ptr&lt;[Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol")&gt;&gt;

Internal container for storing Mach-O [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>).

#### [` it_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary10it_symbolsE>)

using it\_symbols = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[symbols\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary9symbols_tE> "LIEF::MachO::Binary::symbols_t")&amp;, [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol")\*&gt;

Iterator that outputs [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>)&amp;.

#### [` it_const_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary16it_const_symbolsE>)

using it\_const\_symbols = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [symbols\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary9symbols_tE> "LIEF::MachO::Binary::symbols_t")&amp;, const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol")\*&gt;

Iterator that outputs const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>)&amp;.

#### [` it_exported_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary19it_exported_symbolsE>)

using it\_exported\_symbols = [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator")&lt;[symbols\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary9symbols_tE> "LIEF::MachO::Binary::symbols_t")&amp;, [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol")\*&gt;

Iterator that outputs exported [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>)&amp;.

#### [` it_const_exported_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary25it_const_exported_symbolsE>)

using it\_const\_exported\_symbols = [const\_filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator")&lt;const [symbols\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary9symbols_tE> "LIEF::MachO::Binary::symbols_t")&amp;, const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol")\*&gt;

Iterator that outputs exported const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>)&amp;.

#### [` it_imported_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary19it_imported_symbolsE>)

using it\_imported\_symbols = [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator")&lt;[symbols\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary9symbols_tE> "LIEF::MachO::Binary::symbols_t")&amp;, [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol")\*&gt;

Iterator that outputs imported [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>)&amp;.

#### [` it_const_imported_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary25it_const_imported_symbolsE>)

using it\_const\_imported\_symbols = [const\_filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator")&lt;const [symbols\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary9symbols_tE> "LIEF::MachO::Binary::symbols_t")&amp;, const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol")\*&gt;

Iterator that outputs imported const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>)&amp;.

#### [` sections_cache_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary16sections_cache_tE>)

using sections\_cache\_t = std::vector&lt;[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section")\*&gt;

Internal container for caching Mach-O [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>).

#### [` it_sections `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11it_sectionsE>)

using it\_sections = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[sections\_cache\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary16sections_cache_tE> "LIEF::MachO::Binary::sections_cache_t")&amp;&gt;

Iterator that outputs [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>)&amp;.

#### [` it_const_sections `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary17it_const_sectionsE>)

using it\_const\_sections = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [sections\_cache\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary16sections_cache_tE> "LIEF::MachO::Binary::sections_cache_t")&amp;&gt;

Iterator that outputs const [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>)&amp;.

#### [` segments_cache_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary16segments_cache_tE>)

using segments\_cache\_t = std::vector&lt;[SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand")\*&gt;

Internal container for storing Mach-O [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>).

#### [` it_segments `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11it_segmentsE>)

using it\_segments = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[segments\_cache\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary16segments_cache_tE> "LIEF::MachO::Binary::segments_cache_t")&amp;&gt;

Iterator that outputs [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>)&amp;.

#### [` it_const_segments `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary17it_const_segmentsE>)

using it\_const\_segments = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [segments\_cache\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary16segments_cache_tE> "LIEF::MachO::Binary::segments_cache_t")&amp;&gt;

Iterator that outputs const [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>)&amp;.

#### [` libraries_cache_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary17libraries_cache_tE>)

using libraries\_cache\_t = std::vector&lt;[DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE> "LIEF::MachO::DylibCommand")\*&gt;

Internal container for storing Mach-O [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DylibCommand>).

#### [` it_libraries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary12it_librariesE>)

using it\_libraries = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[libraries\_cache\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary17libraries_cache_tE> "LIEF::MachO::Binary::libraries_cache_t")&amp;&gt;

Iterator that outputs [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DylibCommand>)&amp;.

#### [` it_const_libraries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary18it_const_librariesE>)

using it\_const\_libraries = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [libraries\_cache\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary17libraries_cache_tE> "LIEF::MachO::Binary::libraries_cache_t")&amp;&gt;

Iterator that outputs const [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DylibCommand>)&amp;.

#### [` lazy_load_dylib_info_cache_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary28lazy_load_dylib_info_cache_tE>)

using lazy\_load\_dylib\_info\_cache\_t = std::vector&lt;[LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfoE> "LIEF::MachO::LazyLoadDylibInfo")\*&gt;

Internal container for storing Mach-O [LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LazyLoadDylibInfo>).

#### [` it_lazy_load_dylib_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary23it_lazy_load_dylib_infoE>)

using it\_lazy\_load\_dylib\_info = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[lazy\_load\_dylib\_info\_cache\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary28lazy_load_dylib_info_cache_tE> "LIEF::MachO::Binary::lazy_load_dylib_info_cache_t")&amp;&gt;

Iterator that outputs [LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LazyLoadDylibInfo>)&amp;.

#### [` it_const_lazy_load_dylib_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary29it_const_lazy_load_dylib_infoE>)

using it\_const\_lazy\_load\_dylib\_info = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [lazy\_load\_dylib\_info\_cache\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary28lazy_load_dylib_info_cache_tE> "LIEF::MachO::Binary::lazy_load_dylib_info_cache_t")&amp;&gt;

Iterator that outputs const [LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LazyLoadDylibInfo>)&amp;.

#### [` fileset_binaries_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary18fileset_binaries_tE>)

using fileset\_binaries\_t = std::vector&lt;std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&gt;&gt;

Internal container for storing Mach-O Fileset [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>).

#### [` it_fileset_binaries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary19it_fileset_binariesE>)

using it\_fileset\_binaries = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[fileset\_binaries\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary18fileset_binaries_tE> "LIEF::MachO::Binary::fileset_binaries_t")&amp;, [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")\*&gt;

Iterator that outputs [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>)&amp;.

#### [` it_const_fileset_binaries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary25it_const_fileset_binariesE>)

using it\_const\_fileset\_binaries = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [fileset\_binaries\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary18fileset_binaries_tE> "LIEF::MachO::Binary::fileset_binaries_t")&amp;, [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")\*&gt;

Iterator that outputs const [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>)&amp;.

#### [` relocations_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary13relocations_tE>)

using relocations\_t = std::set&lt;[Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation")\*, [KeyCmp](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary6KeyCmpE> "LIEF::MachO::Binary::KeyCmp")&gt;

Internal container that store all the relocations found in a Mach-O. The relocations are actually owned by [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) &amp; [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>) and these references are used for convenience.

#### [` it_relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary14it_relocationsE>)

using it\_relocations = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[relocations\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary13relocations_tE> "LIEF::MachO::Binary::relocations_t")&amp;, [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation")\*&gt;

Iterator which outputs [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>)&amp;.

#### [` it_const_relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary20it_const_relocationsE>)

using it\_const\_relocations = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [relocations\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary13relocations_tE> "LIEF::MachO::Binary::relocations_t")&amp;, const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation")\*&gt;

Iterator which outputs const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>)&amp;.

#### [` it_rpaths `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary9it_rpathsE>)

using it\_rpaths = [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator")&lt;[commands\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary10commands_tE> "LIEF::MachO::Binary::commands_t")&amp;, [RPathCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommandE> "LIEF::MachO::RPathCommand")\*&gt;

Iterator which outputs [RPathCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1RPathCommand>)&amp;.

#### [` it_const_rpaths `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary15it_const_rpathsE>)

using it\_const\_rpaths = [const\_filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator")&lt;const [commands\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary10commands_tE> "LIEF::MachO::Binary::commands_t")&amp;, const [RPathCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommandE> "LIEF::MachO::RPathCommand")\*&gt;

Iterator which outputs const [RPathCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1RPathCommand>)&amp;.

#### [` it_sub_clients `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary14it_sub_clientsE>)

using it\_sub\_clients = [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator")&lt;[commands\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary10commands_tE> "LIEF::MachO::Binary::commands_t")&amp;, [SubClient](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9SubClientE> "LIEF::MachO::SubClient")\*&gt;

Iterator which outputs [SubClient](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SubClient>)&amp;.

#### [` it_const_sub_clients `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary20it_const_sub_clientsE>)

using it\_const\_sub\_clients = [const\_filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator")&lt;const [commands\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary10commands_tE> "LIEF::MachO::Binary::commands_t")&amp;, const [SubClient](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9SubClientE> "LIEF::MachO::SubClient")\*&gt;

Iterator which outputs const [SubClient](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SubClient>)&amp;.

#### [` it_bindings `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11it_bindingsE>)

using it\_bindings = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;BindingInfoIterator&gt;

#### [` stub_iterator `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary13stub_iteratorE>)

using stub\_iterator = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Stub](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4StubE> "LIEF::MachO::Stub")::[Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorE> "LIEF::MachO::Stub::Iterator")&gt;

Iterator type for [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>)’s stub.

#### [` it_notes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary8it_notesE>)

using it\_notes = [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator")&lt;[commands\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary10commands_tE> "LIEF::MachO::Binary::commands_t")&amp;, [NoteCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11NoteCommandE> "LIEF::MachO::NoteCommand")\*&gt;

Iterator which outputs [NoteCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1NoteCommand>)&amp;.

#### [` it_const_notes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary14it_const_notesE>)

using it\_const\_notes = [const\_filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator")&lt;const [commands\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary10commands_tE> "LIEF::MachO::Binary::commands_t")&amp;, const [NoteCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11NoteCommandE> "LIEF::MachO::NoteCommand")\*&gt;

Iterator which outputs const [NoteCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1NoteCommand>)&amp;.

Public Functions

#### [` Binary `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary6BinaryERK6Binary>)

Binary(const [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary6BinaryERK6Binary> "LIEF::MachO::Binary::Binary")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryaSERK6Binary>)

[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") &amp;operator=(const [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&amp;) = delete

#### [` header `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary6headerEv>)

inline [Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header") &amp;header()

Return a reference to the [MachO::Header](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Header>).

#### [` header `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary6headerEv>)

inline const [Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header") &amp;header() const

#### [` commands `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary8commandsEv>)

inline [it\_commands](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11it_commandsE> "LIEF::MachO::Binary::it_commands") commands()

Return an iterator over the MachO [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand>) present in the binary.

#### [` commands `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary8commandsEv>)

inline [it\_const\_commands](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary17it_const_commandsE> "LIEF::MachO::Binary::it_const_commands") commands() const

#### [` filesets `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary8filesetsEv>)

inline [it\_fileset\_binaries](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary19it_fileset_binariesE> "LIEF::MachO::Binary::it_fileset_binaries") filesets()

Return an iterator over the [MachO::Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>) associated with the [LoadCommand::TYPE::FILESET\_ENTRY](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand_1ae233a759e54dbc70715dcfb6465637b1abb5507cbd8f714f00428e09c76c72787>) commands.

#### [` filesets `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary8filesetsEv>)

inline [it\_const\_fileset\_binaries](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary25it_const_fileset_binariesE> "LIEF::MachO::Binary::it_const_fileset_binaries") filesets() const

#### [` symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary7symbolsEv>)

inline [it\_symbols](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary10it_symbolsE> "LIEF::MachO::Binary::it_symbols") symbols()

Return binary’s [symbols](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>) .

#### [` symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary7symbolsEv>)

inline [it\_const\_symbols](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary16it_const_symbolsE> "LIEF::MachO::Binary::it_const_symbols") symbols() const

#### [` has_symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary10has_symbolERKNSt6stringE>)

inline bool has\_symbol(const std::string &amp;name) const

Check if a symbol with the given name exists.

#### [` get_symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary10get_symbolERKNSt6stringE>)

const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") \*get\_symbol(const std::string &amp;name) const

Return [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>) from the given name. If the symbol does not exist, it returns a null pointer.

#### [` get_symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary10get_symbolERKNSt6stringE>)

inline [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") \*get\_symbol(const std::string &amp;name)

#### [` exported_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary16exported_symbolsEv>)

inline [it\_exported\_symbols](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary19it_exported_symbolsE> "LIEF::MachO::Binary::it_exported_symbols") exported\_symbols()

Return binary’s exported symbols (iterator over [LIEF::MachO::Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>)).

#### [` exported_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary16exported_symbolsEv>)

inline [it\_const\_exported\_symbols](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary25it_const_exported_symbolsE> "LIEF::MachO::Binary::it_const_exported_symbols") exported\_symbols() const

#### [` imported_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary16imported_symbolsEv>)

inline [it\_imported\_symbols](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary19it_imported_symbolsE> "LIEF::MachO::Binary::it_imported_symbols") imported\_symbols()

Return binary’s imported symbols (iterator over [LIEF::MachO::Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>)).

#### [` imported_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary16imported_symbolsEv>)

inline [it\_const\_imported\_symbols](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary25it_const_imported_symbolsE> "LIEF::MachO::Binary::it_const_imported_symbols") imported\_symbols() const

#### [` libraries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary9librariesEv>)

inline [it\_libraries](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary12it_librariesE> "LIEF::MachO::Binary::it_libraries") libraries()

Return binary imported libraries ([MachO::DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DylibCommand>)).

#### [` libraries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary9librariesEv>)

inline [it\_const\_libraries](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary18it_const_librariesE> "LIEF::MachO::Binary::it_const_libraries") libraries() const

#### [` lazy_load_dylib_infos `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary21lazy_load_dylib_infosEv>)

inline [it\_lazy\_load\_dylib\_info](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary23it_lazy_load_dylib_infoE> "LIEF::MachO::Binary::it_lazy_load_dylib_info") lazy\_load\_dylib\_infos()

Return an iterator over the binary’s [LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LazyLoadDylibInfo>) commands (`LC_LAZY_LOAD_DYLIB_INFO`).

#### [` lazy_load_dylib_infos `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary21lazy_load_dylib_infosEv>)

inline [it\_const\_lazy\_load\_dylib\_info](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary29it_const_lazy_load_dylib_infoE> "LIEF::MachO::Binary::it_const_lazy_load_dylib_info") lazy\_load\_dylib\_infos() const

#### [` segments `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary8segmentsEv>)

inline [it\_segments](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11it_segmentsE> "LIEF::MachO::Binary::it_segments") segments()

Return an iterator over the [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>).

#### [` segments `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary8segmentsEv>)

inline [it\_const\_segments](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary17it_const_segmentsE> "LIEF::MachO::Binary::it_const_segments") segments() const

#### [` sections `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary8sectionsEv>)

inline [it\_sections](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11it_sectionsE> "LIEF::MachO::Binary::it_sections") sections()

Return an iterator over the [MachO::Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>).

#### [` sections `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary8sectionsEv>)

inline [it\_const\_sections](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary17it_const_sectionsE> "LIEF::MachO::Binary::it_const_sections") sections() const

#### [` relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11relocationsEv>)

inline [it\_relocations](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary14it_relocationsE> "LIEF::MachO::Binary::it_relocations") relocations()

Return an iterator over the [MachO::Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>).

#### [` relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary11relocationsEv>)

[it\_const\_relocations](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary20it_const_relocationsE> "LIEF::MachO::Binary::it_const_relocations") relocations() const

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary5writeERKNSt6stringE>)

void write(const std::string &amp;filename)

Reconstruct the binary object and write the result in the given `filename`.

**Parameters:**

**filename** – Path to write the reconstructed binary

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary5writeERKNSt6stringEN7Builder8config_tE>)

void write(const std::string &amp;filename, [Builder](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7BuilderE> "LIEF::MachO::Builder")::[config\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder8config_tE> "LIEF::MachO::Builder::config_t") config)

Reconstruct the binary object and write the result in the given `filename`.

The second `config` parameter is used to tweak the building process

**Parameters:**

- **filename** – Path to write the reconstructed binary
- **config** – [Builder](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Builder>) configuration

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary5writeERNSt7ostreamE>)

void write(std::ostream &amp;os)

Reconstruct the binary object and write the result in the given `os` stream.

**Parameters:**

**os** – Output stream to write the reconstructed binary

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary5writeERNSt7ostreamEN7Builder8config_tE>)

void write(std::ostream &amp;os, [Builder](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7BuilderE> "LIEF::MachO::Builder")::[config\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder8config_tE> "LIEF::MachO::Builder::config_t") config)

Reconstruct the binary object and write the result in the given `os` stream for the given configuration.

**Parameters:**

- **os** – Output stream to write the reconstructed binary
- **config** – [Builder](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Builder>) configuration

#### [` raw `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary3rawEv>)

std::vector&lt;uint8\_t&gt; raw()

Reconstruct the binary object and return its content as bytes.

#### [` has `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary3hasEN11LoadCommand4TYPEE>)

bool has([LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")::[TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPEE> "LIEF::MachO::LoadCommand::TYPE") type) const

Check if the current binary has the given [MachO::LoadCommand::TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand_1ae233a759e54dbc70715dcfb6465637b1>).

#### [` get `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary3getEN11LoadCommand4TYPEE>)

const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*get([LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")::[TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPEE> "LIEF::MachO::LoadCommand::TYPE") type) const

Return the [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand>) associated with the given [LoadCommand::TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand_1ae233a759e54dbc70715dcfb6465637b1>) or a nullptr if the command can’t be found.

#### [` get `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary3getEN11LoadCommand4TYPEE>)

inline [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*get([LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")::[TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPEE> "LIEF::MachO::LoadCommand::TYPE") type)

#### [` add `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary3addENSt10unique_ptrI11LoadCommandEE>)

[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*add(std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; command)

#### [` add `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary3addERK11LoadCommand>)

inline [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*add(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") &amp;command)

Insert a new [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand>).

#### [` add `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary3addERK11LoadCommand6size_t>)

[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*add(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") &amp;command, size\_t index)

Insert a new [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand>) at the specified `index`.

#### [` add `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary3addERK12DylibCommand>)

[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*add(const [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE> "LIEF::MachO::DylibCommand") &amp;library)

Insert the given [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DylibCommand>).

#### [` add `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary3addERK14SegmentCommand>)

[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*add(const [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") &amp;segment)

Add a new LC\_SEGMENT command from the given [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>).

#### [` add_library `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11add_libraryERKNSt6stringE>)

[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*add\_library(const std::string &amp;name)

Insert a new shared library through a `LC_LOAD_DYLIB` command.

#### [` add_section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11add_sectionERK7Section>)

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") \*add\_section(const [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") &amp;section)

Add a new [MachO::Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) in the \_\_TEXT segment.

#### [` find_library `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary12find_libraryERKNSt6stringE>)

const [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE> "LIEF::MachO::DylibCommand") \*find\_library(const std::string &amp;name) const

Try to find the library with the given library name.

This function tries to match the fullpath of the [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DylibCommand>) or the library name suffix.

#### [` find_library `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary12find_libraryERKNSt6stringE>)

inline [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE> "LIEF::MachO::DylibCommand") \*find\_library(const std::string &amp;name)

#### [` add_section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11add_sectionERK14SegmentCommandRK7Section>)

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") \*add\_section(const [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") &amp;segment, const [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") &amp;section)

Add a section in the given [MachO::SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>).

> **Warning**
> 
> This method may corrupt the file if the segment is not the first one nor the last one

#### [` remove_section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary14remove_sectionERKNSt6stringEb>)

virtual void remove\_section(const std::string &amp;name, bool clear = false) override

Remove the section with the name provided in the first parameter.

**Parameters:**

- **name** – Name of the [MachO::Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) to remove
- **clear** – If `true` clear the content of the section before removing

#### [` remove_section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary14remove_sectionERKNSt6stringERKNSt6stringEb>)

void remove\_section(const std::string &amp;segname, const std::string &amp;secname, bool clear = false)

Remove the section from the segment with the name given in the first parameter and with the section’s name provided in the second parameter.

**Parameters:**

- **segname** – Name of the MachO::Segment
- **secname** – Name of the [MachO::Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) to remove
- **clear** – If `true` clear the content of the section before removing

#### [` remove `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary6removeERK11LoadCommand>)

bool remove(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") &amp;command)

Remove the given [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand>).

#### [` remove `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary6removeEN11LoadCommand4TYPEE>)

bool remove([LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")::[TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPEE> "LIEF::MachO::LoadCommand::TYPE") type)

Remove **all** [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand>) with the given type ([MachO::LoadCommand::TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand_1ae233a759e54dbc70715dcfb6465637b1>)).

#### [` remove_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary14remove_commandE6size_t>)

bool remove\_command(size\_t index)

Remove the Load Command at the provided `index`.

#### [` remove_signature `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary16remove_signatureEv>)

bool remove\_signature()

Remove the LC\_SIGNATURE command.

#### [` extend `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary6extendERK11LoadCommand8uint64_t>)

bool extend(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") &amp;command, uint64\_t size)

Extend the **size** of the given [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand>).

#### [` extend_segment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary14extend_segmentERK14SegmentCommand6size_t>)

bool extend\_segment(const [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") &amp;segment, size\_t size)

Extend the **content** of the given [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>).

#### [` extend_section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary14extend_sectionER7Section6size_t>)

bool extend\_section([Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") &amp;section, size\_t size)

Extend the **content** of the given [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>).

> **Note**
> 
> This method may extend the section more than `size` preventing creation a gap between the current section and the next one. This may happen trying to satisfy alignment requirement of sections.

> **Note**
> 
> This method works only with sections that belong to the first segment.

#### [` disable_pie `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11disable_pieEv>)

bool disable\_pie()

Remove the `PIE` flag.

#### [` imagebase `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary9imagebaseEv>)

virtual uint64\_t imagebase() const override

Return the binary’s imagebase. `0` if not relevant.

#### [` virtual_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary12virtual_sizeEv>)

inline virtual uint64\_t virtual\_size() const override

Size of the binary in memory when mapped by the loader (`dyld`).

#### [` loader `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary6loaderEv>)

std::string\_view loader() const

Return the binary’s loader (e.g. `/usr/lib/dyld`) or an empty string if the binary does not use a loader/linker.

#### [` has_section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary11has_sectionERKNSt6stringE>)

inline bool has\_section(const std::string &amp;name) const

Check if a section with the given name exists.

#### [` get_section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11get_sectionERKNSt6stringE>)

inline [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") \*get\_section(const std::string &amp;name)

Return the section from the given name or a nullptr if the section can’t be found.

#### [` get_section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary11get_sectionERKNSt6stringE>)

const [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") \*get\_section(const std::string &amp;name) const

Return the section from the given name or a nullptr if the section can’t be found.

#### [` get_section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11get_sectionERKNSt6stringERKNSt6stringE>)

inline [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") \*get\_section(const std::string &amp;segname, const std::string &amp;secname)

Return the section from the segment with the name given in the first parameter and with the section’s name provided in the second parameter. If the section cannot be found, it returns a nullptr.

#### [` get_section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary11get_sectionERKNSt6stringERKNSt6stringE>)

const [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") \*get\_section(const std::string &amp;segname, const std::string &amp;secname) const

#### [` has_segment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary11has_segmentERKNSt6stringE>)

inline bool has\_segment(const std::string &amp;name) const

Check if a segment with the given name exists.

#### [` get_segment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary11get_segmentERKNSt6stringE>)

const [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") \*get\_segment(const std::string &amp;name) const

Return the segment from the given name.

#### [` get_segment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11get_segmentERKNSt6stringE>)

inline [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") \*get\_segment(const std::string &amp;name)

Return the segment from the given name.

#### [` remove_symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary13remove_symbolERKNSt6stringE>)

bool remove\_symbol(const std::string &amp;name)

Remove the symbol with the given name.

#### [` remove `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary6removeERK6Symbol>)

bool remove(const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") &amp;sym)

Remove the given symbol.

#### [` can_remove `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary10can_removeERK6Symbol>)

bool can\_remove(const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") &amp;sym) const

Check if the given symbol can be safely removed.

#### [` can_remove_symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary17can_remove_symbolERKNSt6stringE>)

bool can\_remove\_symbol(const std::string &amp;name) const

Check if the [MachO::Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>) with the given name can be safely removed.

#### [` unexport `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary8unexportERKNSt6stringE>)

bool unexport(const std::string &amp;name)

Remove the given [MachO::Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>) with the given name from the export table.

#### [` unexport `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary8unexportERK6Symbol>)

bool unexport(const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") &amp;sym)

Remove the given symbol from the export table.

#### [` section_from_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary19section_from_offsetE8uint64_t>)

inline [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") \*section\_from\_offset(uint64\_t offset)

Return the [MachO::Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) that encompasses the provided offset. If a section can’t be found, it returns a null pointer (`nullptr`).

#### [` section_from_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary19section_from_offsetE8uint64_t>)

const [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") \*section\_from\_offset(uint64\_t offset) const

#### [` section_from_virtual_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary28section_from_virtual_addressE8uint64_t>)

inline [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") \*section\_from\_virtual\_address(uint64\_t virtual\_address)

Return the [MachO::Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) that encompasses the provided virtual address. If a section can’t be found, it returns a null pointer (`nullptr`).

#### [` section_from_virtual_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary28section_from_virtual_addressE8uint64_t>)

const [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") \*section\_from\_virtual\_address(uint64\_t virtual\_address) const

#### [` virtual_address_to_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary25virtual_address_to_offsetE8uint64_t>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; virtual\_address\_to\_offset(uint64\_t virtual\_address) const

Convert a virtual address to an offset in the file.

#### [` offset_to_virtual_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary25offset_to_virtual_addressE8uint64_t8uint64_t>)

virtual [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; offset\_to\_virtual\_address(uint64\_t offset, uint64\_t slide = 0) const override

Convert the given offset into a virtual address.

**Parameters:**

- **offset** – **[in]** The offset to convert.
- **slide** – **[in]** If not 0, it will replace the default base address (if any)

#### [` segment_from_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary19segment_from_offsetE8uint64_t>)

inline [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") \*segment\_from\_offset(uint64\_t offset)

Return the binary’s [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>) that encompasses the provided offset.

If a [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>) can’t be found it returns a null pointer (`nullptr`).

#### [` segment_from_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary19segment_from_offsetE8uint64_t>)

const [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") \*segment\_from\_offset(uint64\_t offset) const

#### [` segment_index `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary13segment_indexERK14SegmentCommand>)

size\_t segment\_index(const [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") &amp;segment) const

Return the index of the given [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>).

#### [` fat_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary10fat_offsetEv>)

inline uint64\_t fat\_offset() const

Return binary’s *fat offset*. `0` if not relevant.

#### [` segment_from_virtual_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary28segment_from_virtual_addressE8uint64_t>)

inline [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") \*segment\_from\_virtual\_address(uint64\_t virtual\_address)

Return the binary’s [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>) which encompasses the given virtual address or a nullptr if not found.

#### [` segment_from_virtual_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary28segment_from_virtual_addressE8uint64_t>)

const [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") \*segment\_from\_virtual\_address(uint64\_t virtual\_address) const

#### [` va_ranges `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary9va_rangesEv>)

[range\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary7range_tE> "LIEF::MachO::Binary::range_t") va\_ranges() const

Return the range of virtual addresses.

#### [` off_ranges `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary10off_rangesEv>)

[range\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary7range_tE> "LIEF::MachO::Binary::range_t") off\_ranges() const

Return the range of offsets.

#### [` tlv_initial_content_range `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary25tlv_initial_content_rangeEv>)

[range\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary7range_tE> "LIEF::MachO::Binary::range_t") tlv\_initial\_content\_range() const

Return the TLV initial content range.

#### [` is_valid_addr `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary13is_valid_addrE8uint64_t>)

inline bool is\_valid\_addr(uint64\_t address) const

Check if the given address is encompassed in the binary’s virtual addresses range.

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary6acceptERN4LIEF7VisitorE>)

virtual void accept(LIEF::Visitor &amp;visitor) const override

Method so that the `visitor` can visit us.

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` patch_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary13patch_addressE8uint64_tRKNSt6vectorI7uint8_tEEN4LIEF6Binary8VA_TYPESE>)

virtual void patch\_address(uint64\_t address, const std::vector&lt;uint8\_t&gt; &amp;patch\_value, LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")::[VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE> "LIEF::Binary::VA_TYPES") addr\_type = LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")::[VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE> "LIEF::Binary::VA_TYPES")::[AUTO](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPES4AUTOE> "LIEF::Binary::VA_TYPES::AUTO")) override

Patch the content at virtual address `address` with `patch_value`.

**Parameters:**

- **address** – **[in]** Address to patch
- **patch\_value** – **[in]** Patch to apply
- **addr\_type** – **[in]** Specify if the address should be used as an absolute virtual address or an RVA

#### [` patch_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary13patch_addressE8uint64_t8uint64_t6size_tN4LIEF6Binary8VA_TYPESE>)

virtual void patch\_address(uint64\_t address, uint64\_t patch\_value, size\_t size = sizeof(uint64\_t), LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")::[VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE> "LIEF::Binary::VA_TYPES") addr\_type = LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")::[VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPESE> "LIEF::Binary::VA_TYPES")::[AUTO](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8VA_TYPES4AUTOE> "LIEF::Binary::VA_TYPES::AUTO")) override

Patch the address with the given value.

**Parameters:**

- **address** – **[in]** Address to patch
- **patch\_value** – **[in]** Patch to apply
- **size** – **[in]** Size of the value in **bytes** (1, 2, … 8)
- **addr\_type** – **[in]** Specify if the address should be used as an absolute virtual address or an RVA

#### [` get_content_from_virtual_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary32get_content_from_virtual_addressE8uint64_t8uint64_tN6Binary8VA_TYPESE>)

virtual span&lt;const uint8\_t&gt; get\_content\_from\_virtual\_address(uint64\_t virtual\_address, uint64\_t size, [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")::VA\_TYPES addr\_type = [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")::VA\_TYPES::AUTO) const override

Return the content located at virtual address.

#### [` entrypoint `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary10entrypointEv>)

virtual uint64\_t entrypoint() const override

The binary entrypoint.

#### [` is_pie `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary6is_pieEv>)

inline virtual bool is\_pie() const override

Check if the binary is position independent.

#### [` has_nx `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary6has_nxEv>)

inline virtual bool has\_nx() const override

Check if the binary uses `NX` protection.

#### [` has_nx_stack `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary12has_nx_stackEv>)

inline bool has\_nx\_stack() const

Return True if the **stack** is flagged as non-executable. False otherwise.

#### [` has_nx_heap `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary11has_nx_heapEv>)

inline bool has\_nx\_heap() const

Return True if the **heap** is flagged as non-executable. False otherwise.

#### [` has_entrypoint `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary14has_entrypointEv>)

inline bool has\_entrypoint() const

`true` if the binary has an entrypoint.

Basically for libraries it will return `false`

#### [` has_uuid `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary8has_uuidEv>)

inline bool has\_uuid() const

`true` if the binary has a [MachO::UUIDCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1UUIDCommand>) command.

#### [` uuid `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary4uuidEv>)

[UUIDCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11UUIDCommandE> "LIEF::MachO::UUIDCommand") \*uuid()

Return the [MachO::UUIDCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1UUIDCommand>) if present, a nullptr otherwise.

#### [` uuid `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary4uuidEv>)

const [UUIDCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11UUIDCommandE> "LIEF::MachO::UUIDCommand") \*uuid() const

#### [` has_main_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary16has_main_commandEv>)

inline bool has\_main\_command() const

`true` if the binary has a [MachO::MainCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1MainCommand>) command.

#### [` main_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary12main_commandEv>)

[MainCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MainCommandE> "LIEF::MachO::MainCommand") \*main\_command()

Return the [MachO::MainCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1MainCommand>) if present, a nullptr otherwise.

#### [` main_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary12main_commandEv>)

const [MainCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MainCommandE> "LIEF::MachO::MainCommand") \*main\_command() const

#### [` has_dylinker `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary12has_dylinkerEv>)

inline bool has\_dylinker() const

`true` if the binary has a [MachO::DylinkerCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DylinkerCommand>).

#### [` dylinker `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary8dylinkerEv>)

[DylinkerCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DylinkerCommandE> "LIEF::MachO::DylinkerCommand") \*dylinker()

Return the [MachO::DylinkerCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DylinkerCommand>) if present, a nullptr otherwise.

#### [` dylinker `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary8dylinkerEv>)

const [DylinkerCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DylinkerCommandE> "LIEF::MachO::DylinkerCommand") \*dylinker() const

#### [` has_dyld_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary13has_dyld_infoEv>)

inline bool has\_dyld\_info() const

`true` if the binary has a [MachO::DyldInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldInfo>) command.

#### [` dyld_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary9dyld_infoEv>)

[DyldInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfoE> "LIEF::MachO::DyldInfo") \*dyld\_info()

Return the MachO::Dyld command if present, a nullptr otherwise.

#### [` dyld_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary9dyld_infoEv>)

const [DyldInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfoE> "LIEF::MachO::DyldInfo") \*dyld\_info() const

#### [` has_function_starts `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary19has_function_startsEv>)

inline bool has\_function\_starts() const

`true` if the binary has a [MachO::FunctionStarts](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionStarts>) command.

#### [` function_starts `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary15function_startsEv>)

[FunctionStarts](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStartsE> "LIEF::MachO::FunctionStarts") \*function\_starts()

Return the [MachO::FunctionStarts](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionStarts>) command if present, a nullptr otherwise.

#### [` function_starts `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary15function_startsEv>)

const [FunctionStarts](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStartsE> "LIEF::MachO::FunctionStarts") \*function\_starts() const

#### [` has_source_version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary18has_source_versionEv>)

inline bool has\_source\_version() const

`true` if the binary has a [MachO::SourceVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SourceVersion>) command.

#### [` source_version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary14source_versionEv>)

[SourceVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SourceVersionE> "LIEF::MachO::SourceVersion") \*source\_version()

Return the [MachO::SourceVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SourceVersion>) command if present, a nullptr otherwise.

#### [` source_version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary14source_versionEv>)

const [SourceVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SourceVersionE> "LIEF::MachO::SourceVersion") \*source\_version() const

#### [` has_version_min `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary15has_version_minEv>)

inline bool has\_version\_min() const

`true` if the binary has a [MachO::VersionMin](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1VersionMin>) command.

#### [` version_min `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11version_minEv>)

[VersionMin](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMinE> "LIEF::MachO::VersionMin") \*version\_min()

Return the [MachO::VersionMin](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1VersionMin>) command if present, a nullptr otherwise.

#### [` version_min `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary11version_minEv>)

const [VersionMin](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMinE> "LIEF::MachO::VersionMin") \*version\_min() const

#### [` has_thread_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary18has_thread_commandEv>)

inline bool has\_thread\_command() const

`true` if the binary has a [MachO::ThreadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ThreadCommand>) command.

#### [` thread_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary14thread_commandEv>)

[ThreadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommandE> "LIEF::MachO::ThreadCommand") \*thread\_command()

Return the [MachO::ThreadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ThreadCommand>) command if present, a nullptr otherwise.

#### [` thread_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary14thread_commandEv>)

const [ThreadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommandE> "LIEF::MachO::ThreadCommand") \*thread\_command() const

#### [` has_routine_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary19has_routine_commandEv>)

inline bool has\_routine\_command() const

`true` if the binary has a [MachO::Routine](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Routine>) command.

#### [` routine_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary15routine_commandEv>)

[Routine](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7RoutineE> "LIEF::MachO::Routine") \*routine\_command()

Return the [MachO::Routine](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Routine>) command if present, a nullptr otherwise.

#### [` routine_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary15routine_commandEv>)

const [Routine](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7RoutineE> "LIEF::MachO::Routine") \*routine\_command() const

#### [` has_rpath `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary9has_rpathEv>)

inline bool has\_rpath() const

`true` if the binary has a [MachO::RPathCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1RPathCommand>) command.

#### [` rpath `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary5rpathEv>)

[RPathCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommandE> "LIEF::MachO::RPathCommand") \*rpath()

Return the [MachO::RPathCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1RPathCommand>) command if present, a nullptr otherwise.

#### [` rpath `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary5rpathEv>)

const [RPathCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommandE> "LIEF::MachO::RPathCommand") \*rpath() const

#### [` rpaths `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary6rpathsEv>)

[it\_rpaths](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary9it_rpathsE> "LIEF::MachO::Binary::it_rpaths") rpaths()

Iterator over **all** the [MachO::RPathCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1RPathCommand>) commands.

#### [` rpaths `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary6rpathsEv>)

[it\_const\_rpaths](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary15it_const_rpathsE> "LIEF::MachO::Binary::it_const_rpaths") rpaths() const

#### [` has_symbol_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary18has_symbol_commandEv>)

inline bool has\_symbol\_command() const

`true` if the binary has a [MachO::SymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SymbolCommand>) command.

#### [` symbol_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary14symbol_commandEv>)

[SymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommandE> "LIEF::MachO::SymbolCommand") \*symbol\_command()

Return the [MachO::SymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SymbolCommand>) if present, a nullptr otherwise.

#### [` symbol_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary14symbol_commandEv>)

const [SymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommandE> "LIEF::MachO::SymbolCommand") \*symbol\_command() const

#### [` has_dynamic_symbol_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary26has_dynamic_symbol_commandEv>)

inline bool has\_dynamic\_symbol\_command() const

`true` if the binary has a [MachO::DynamicSymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DynamicSymbolCommand>) command.

#### [` dynamic_symbol_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary22dynamic_symbol_commandEv>)

[DynamicSymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommandE> "LIEF::MachO::DynamicSymbolCommand") \*dynamic\_symbol\_command()

Return the [MachO::SymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SymbolCommand>) if present, a nullptr otherwise.

#### [` dynamic_symbol_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary22dynamic_symbol_commandEv>)

const [DynamicSymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommandE> "LIEF::MachO::DynamicSymbolCommand") \*dynamic\_symbol\_command() const

#### [` has_code_signature `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary18has_code_signatureEv>)

inline bool has\_code\_signature() const

`true` if the binary is signed with `LC_CODE_SIGNATURE` command

#### [` code_signature `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary14code_signatureEv>)

inline [CodeSignature](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13CodeSignatureE> "LIEF::MachO::CodeSignature") \*code\_signature()

Return the [MachO::CodeSignature](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1CodeSignature>) if present, a nullptr otherwise.

#### [` code_signature `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary14code_signatureEv>)

const [CodeSignature](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13CodeSignatureE> "LIEF::MachO::CodeSignature") \*code\_signature() const

#### [` has_code_signature_dir `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary22has_code_signature_dirEv>)

inline bool has\_code\_signature\_dir() const

`true` if the binary is signed with the command `DYLIB_CODE_SIGN_DRS`

#### [` code_signature_dir `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary18code_signature_dirEv>)

inline [CodeSignatureDir](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16CodeSignatureDirE> "LIEF::MachO::CodeSignatureDir") \*code\_signature\_dir()

Return the [MachO::CodeSignatureDir](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1CodeSignatureDir>) if present, a nullptr otherwise.

#### [` code_signature_dir `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary18code_signature_dirEv>)

const [CodeSignatureDir](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16CodeSignatureDirE> "LIEF::MachO::CodeSignatureDir") \*code\_signature\_dir() const

#### [` has_data_in_code `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary16has_data_in_codeEv>)

inline bool has\_data\_in\_code() const

`true` if the binary has a [MachO::DataInCode](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DataInCode>) command.

#### [` data_in_code `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary12data_in_codeEv>)

[DataInCode](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCodeE> "LIEF::MachO::DataInCode") \*data\_in\_code()

Return the [MachO::DataInCode](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DataInCode>) if present, a nullptr otherwise.

#### [` data_in_code `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary12data_in_codeEv>)

const [DataInCode](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCodeE> "LIEF::MachO::DataInCode") \*data\_in\_code() const

#### [` has_segment_split_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary22has_segment_split_infoEv>)

inline bool has\_segment\_split\_info() const

`true` if the binary has segment split info.

#### [` segment_split_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary18segment_split_infoEv>)

[SegmentSplitInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16SegmentSplitInfoE> "LIEF::MachO::SegmentSplitInfo") \*segment\_split\_info()

Return the [MachO::SegmentSplitInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentSplitInfo>) if present, a nullptr otherwise.

#### [` segment_split_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary18segment_split_infoEv>)

const [SegmentSplitInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16SegmentSplitInfoE> "LIEF::MachO::SegmentSplitInfo") \*segment\_split\_info() const

#### [` has_sub_framework `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary17has_sub_frameworkEv>)

inline bool has\_sub\_framework() const

`true` if the binary has a sub framework command.

#### [` has_encryption_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary19has_encryption_infoEv>)

inline bool has\_encryption\_info() const

`true` if the binary has Encryption Info.

#### [` encryption_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary15encryption_infoEv>)

[EncryptionInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14EncryptionInfoE> "LIEF::MachO::EncryptionInfo") \*encryption\_info()

Return the [MachO::EncryptionInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1EncryptionInfo>) if present, a nullptr otherwise.

#### [` encryption_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary15encryption_infoEv>)

const [EncryptionInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14EncryptionInfoE> "LIEF::MachO::EncryptionInfo") \*encryption\_info() const

#### [` sub_framework `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary13sub_frameworkEv>)

[SubFramework](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12SubFrameworkE> "LIEF::MachO::SubFramework") \*sub\_framework()

Return the [MachO::SubFramework](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SubFramework>) if present, a nullptr otherwise.

#### [` sub_framework `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary13sub_frameworkEv>)

const [SubFramework](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12SubFrameworkE> "LIEF::MachO::SubFramework") \*sub\_framework() const

#### [` subclients `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary10subclientsEv>)

[it\_sub\_clients](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary14it_sub_clientsE> "LIEF::MachO::Binary::it_sub_clients") subclients()

Iterator over **all** the [MachO::SubClient](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SubClient>) commands.

#### [` subclients `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary10subclientsEv>)

[it\_const\_sub\_clients](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary20it_const_sub_clientsE> "LIEF::MachO::Binary::it_const_sub_clients") subclients() const

#### [` has_subclients `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary14has_subclientsEv>)

bool has\_subclients() const

#### [` has_dyld_environment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary20has_dyld_environmentEv>)

inline bool has\_dyld\_environment() const

`true` if the binary has Dyld environment variables.

#### [` dyld_environment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary16dyld_environmentEv>)

[DyldEnvironment](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldEnvironmentE> "LIEF::MachO::DyldEnvironment") \*dyld\_environment()

Return the [MachO::DyldEnvironment](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldEnvironment>) if present, a nullptr otherwise.

#### [` dyld_environment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary16dyld_environmentEv>)

const [DyldEnvironment](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldEnvironmentE> "LIEF::MachO::DyldEnvironment") \*dyld\_environment() const

#### [` has_build_version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary17has_build_versionEv>)

inline bool has\_build\_version() const

`true` if the binary has the [BuildVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1BuildVersion>) command.

#### [` build_version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary13build_versionEv>)

[BuildVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersionE> "LIEF::MachO::BuildVersion") \*build\_version()

Return the [MachO::BuildVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1BuildVersion>) if present, a nullptr otherwise.

#### [` build_version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary13build_versionEv>)

const [BuildVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersionE> "LIEF::MachO::BuildVersion") \*build\_version() const

#### [` platform `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary8platformEv>)

inline [BuildVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersionE> "LIEF::MachO::BuildVersion")::[PLATFORMS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMSE> "LIEF::MachO::BuildVersion::PLATFORMS") platform() const

Return the platform for which this Mach-O has been compiled for.

#### [` is_ios `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary6is_iosEv>)

inline bool is\_ios() const

True if this binary targets iOS.

#### [` is_macos `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary8is_macosEv>)

inline bool is\_macos() const

True if this binary targets macOS.

#### [` has_dyld_chained_fixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary23has_dyld_chained_fixupsEv>)

inline bool has\_dyld\_chained\_fixups() const

`true` if the binary has the command LC\_DYLD\_CHAINED\_FIXUPS.

#### [` dyld_chained_fixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary19dyld_chained_fixupsEv>)

[DyldChainedFixups](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixupsE> "LIEF::MachO::DyldChainedFixups") \*dyld\_chained\_fixups()

Return the [MachO::DyldChainedFixups](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldChainedFixups>) if present, a nullptr otherwise.

#### [` dyld_chained_fixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary19dyld_chained_fixupsEv>)

const [DyldChainedFixups](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixupsE> "LIEF::MachO::DyldChainedFixups") \*dyld\_chained\_fixups() const

#### [` has_dyld_exports_trie `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary21has_dyld_exports_trieEv>)

inline bool has\_dyld\_exports\_trie() const

`true` if the binary has the command LC\_DYLD\_EXPORTS\_TRIE.

#### [` dyld_exports_trie `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary17dyld_exports_trieEv>)

[DyldExportsTrie](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrieE> "LIEF::MachO::DyldExportsTrie") \*dyld\_exports\_trie()

Return the [MachO::DyldExportsTrie](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldExportsTrie>) if present, a nullptr otherwise.

#### [` dyld_exports_trie `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary17dyld_exports_trieEv>)

const [DyldExportsTrie](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrieE> "LIEF::MachO::DyldExportsTrie") \*dyld\_exports\_trie() const

#### [` has_two_level_hints `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary19has_two_level_hintsEv>)

inline bool has\_two\_level\_hints() const

`true` if the binary has the command LC\_TWO\_LEVEL\_HINTS.

#### [` two_level_hints `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary15two_level_hintsEv>)

inline [TwoLevelHints](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHintsE> "LIEF::MachO::TwoLevelHints") \*two\_level\_hints()

Return the [MachO::TwoLevelHints](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1TwoLevelHints>) if present, a nullptr otherwise.

#### [` two_level_hints `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary15two_level_hintsEv>)

const [TwoLevelHints](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHintsE> "LIEF::MachO::TwoLevelHints") \*two\_level\_hints() const

#### [` has_linker_opt_hint `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary19has_linker_opt_hintEv>)

inline bool has\_linker\_opt\_hint() const

`true` if the binary has the command LC\_LINKER\_OPTIMIZATION\_HINT.

#### [` linker_opt_hint `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary15linker_opt_hintEv>)

inline [LinkerOptHint](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13LinkerOptHintE> "LIEF::MachO::LinkerOptHint") \*linker\_opt\_hint()

Return the [MachO::LinkerOptHint](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LinkerOptHint>) if present, a nullptr otherwise.

#### [` linker_opt_hint `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary15linker_opt_hintEv>)

const [LinkerOptHint](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13LinkerOptHintE> "LIEF::MachO::LinkerOptHint") \*linker\_opt\_hint() const

#### [` add_exported_function `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary21add_exported_functionE8uint64_tRKNSt6stringE>)

[ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo") \*add\_exported\_function(uint64\_t address, const std::string &amp;name)

Add a symbol in the export trie of the current binary.

#### [` add_local_symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary16add_local_symbolE8uint64_tRKNSt6stringE>)

[Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") \*add\_local\_symbol(uint64\_t address, const std::string &amp;name)

Add a symbol in LC\_SYMTAB command of the current binary.

#### [` objc_metadata `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary13objc_metadataEv>)

std::unique\_ptr&lt;objc::[Metadata](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8MetadataE> "LIEF::objc::Metadata")&gt; objc\_metadata() const

Return Objective-C metadata if present.

#### [` symbol_stubs `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary12symbol_stubsEv>)

[stub\_iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary13stub_iteratorE> "LIEF::MachO::Binary::stub_iterator") symbol\_stubs() const

Return an iterator over the symbol stubs.

These stubs are involved when calling an **imported** function and are similar to the ELF’s plt/got mechanism.

There are located in sections like: `__stubs,__auth_stubs,__symbol_stub,__picsymbolstub4`

#### [` has_atom_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary13has_atom_infoEv>)

inline bool has\_atom\_info() const

`true` if the binary has the command LC\_ATOM\_INFO.

#### [` atom_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary9atom_infoEv>)

inline AtomInfo \*atom\_info()

Return the MachO::AtomInfo if present, a nullptr otherwise.

#### [` atom_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary9atom_infoEv>)

const AtomInfo \*atom\_info() const

#### [` notes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary5notesEv>)

[it\_notes](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary8it_notesE> "LIEF::MachO::Binary::it_notes") notes()

Iterator over the different `LC_NOTE` commands.

#### [` notes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary5notesEv>)

[it\_const\_notes](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary14it_const_notesE> "LIEF::MachO::Binary::it_const_notes") notes() const

#### [` has_notes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary9has_notesEv>)

inline bool has\_notes() const

True if the binary contains `LC_NOTE` command(s).

#### [` has_function_variants `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary21has_function_variantsEv>)

inline bool has\_function\_variants() const

`true` if the binary has the command `LC_FUNCTION_VARIANTS`.

#### [` function_variants `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary17function_variantsEv>)

inline [FunctionVariants](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariantsE> "LIEF::MachO::FunctionVariants") \*function\_variants()

Return the [FunctionVariants](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants>) if present, a nullptr otherwise.

#### [` function_variants `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary17function_variantsEv>)

const [FunctionVariants](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariantsE> "LIEF::MachO::FunctionVariants") \*function\_variants() const

#### [` has_function_variant_fixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary27has_function_variant_fixupsEv>)

inline bool has\_function\_variant\_fixups() const

`true` if the binary has the command `LC_FUNCTION_VARIANT_FIXUPS`.

#### [` function_variant_fixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary23function_variant_fixupsEv>)

inline [FunctionVariantFixups](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixupsE> "LIEF::MachO::FunctionVariantFixups") \*function\_variant\_fixups()

Return the [FunctionVariantFixups](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariantFixups>) if present, a nullptr otherwise.

#### [` function_variant_fixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary23function_variant_fixupsEv>)

const [FunctionVariantFixups](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixupsE> "LIEF::MachO::FunctionVariantFixups") \*function\_variant\_fixups() const

#### [` Thas_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0ENK4LIEF5MachO6Binary11has_commandEbv>)

template&lt;class T&gt;  
bool has\_command() const

#### [` Tcommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0EN4LIEF5MachO6Binary7commandEP1Tv>)

template&lt;class T&gt;  
[T](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0EN4LIEF5MachO6Binary7commandEP1Tv> "LIEF::MachO::Binary::command::T") \*command()

#### [` Tcommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0ENK4LIEF5MachO6Binary7commandEPK1Tv>)

template&lt;class T&gt;  
const [T](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0ENK4LIEF5MachO6Binary7commandEPK1Tv> "LIEF::MachO::Binary::command::T") \*command() const

#### [` Tcount_commands `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0ENK4LIEF5MachO6Binary14count_commandsE6size_tv>)

template&lt;class T&gt;  
size\_t count\_commands() const

#### [` CMDFuncfor_commands `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I00EN4LIEF5MachO6Binary12for_commandsER6Binary4Func>)

template&lt;class CMD, class Func&gt;  
[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") &amp;for\_commands([Func](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I00EN4LIEF5MachO6Binary12for_commandsER6Binary4Func> "LIEF::MachO::Binary::for_commands::Func") f)

#### [` operator[] `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryixEN11LoadCommand4TYPEE>)

inline [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*operator[]([LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")::[TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPEE> "LIEF::MachO::LoadCommand::TYPE") type)

#### [` operator[] `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6BinaryixEN11LoadCommand4TYPEE>)

inline const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*operator[]([LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")::[TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPEE> "LIEF::MachO::LoadCommand::TYPE") type) const

#### [` ctor_functions `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary14ctor_functionsEv>)

virtual LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")::[functions\_t](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary11functions_tE> "LIEF::Binary::functions_t") ctor\_functions() const override

Return the list of the MachO’s constructors.

#### [` functions `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary9functionsEv>)

LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")::[functions\_t](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary11functions_tE> "LIEF::Binary::functions_t") functions() const

Return all the functions found in this MachO.

#### [` unwind_functions `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary16unwind_functionsEv>)

LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")::[functions\_t](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary11functions_tE> "LIEF::Binary::functions_t") unwind\_functions() const

Return the functions found in the `__unwind_info` section.

#### [` has_filesets `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary12has_filesetsEv>)

inline bool has\_filesets() const

`true` if the binary has a [LoadCommand::TYPE::FILESET\_ENTRY](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand_1ae233a759e54dbc70715dcfb6465637b1abb5507cbd8f714f00428e09c76c72787>) command

#### [` fileset_name `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary12fileset_nameEv>)

inline std::string\_view fileset\_name() const

Name associated with the `LC_FILESET_ENTRY` for this MachO. For instance: `com.apple.kec.corecrypto`.

#### [` fileset_addr `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary12fileset_addrEv>)

inline uint64\_t fileset\_addr() const

Original address associated with the `LC_FILESET_ENTRY` for this MachO.

#### [` add `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary3addERK6Symbol>)

[Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") &amp;add(const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") &amp;symbol)

Add a symbol to this binary.

#### [` ~Binary `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryD0Ev>)

~Binary() override

#### [` shift `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary5shiftE6size_t>)

[ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") shift(size\_t value)

Shift the content located right after the Load commands table. This operation can be used to add a new command.

#### [` shift_linkedit `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary14shift_linkeditE6size_t>)

[ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") shift\_linkedit(size\_t width)

Shift the position on the \_\_LINKEDIT data by `width`.

#### [` memory_base_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary19memory_base_addressEv>)

inline uint64\_t memory\_base\_address() const

If this Mach-O binary has been parsed from memory, it returns the in-memory base address of this binary.

Otherwise, it returns 0

#### [` support_arm64_ptr_auth `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary22support_arm64_ptr_authEv>)

inline bool support\_arm64\_ptr\_auth() const

Check if the binary is supporting ARM64 pointer authentication (arm64e).

#### [` bindings `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary8bindingsEv>)

[it\_bindings](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11it_bindingsE> "LIEF::MachO::Binary::it_bindings") bindings() const

Return an iterator over the binding info which can come from either [DyldInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldInfo>) or [DyldChainedFixups](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldChainedFixups>) commands.

#### [` get_function_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary20get_function_addressERKNSt6stringE>)

virtual [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; get\_function\_address(const std::string &amp;name) const override

Try to get the address for the function’s name given in parameter.

#### [` overlay `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary7overlayEv>)

inline span&lt;const uint8\_t&gt; overlay() const

#### [` sort_segments `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary13sort_segmentsEv>)

void sort\_segments()

#### [` refresh_seg_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary18refresh_seg_offsetEv>)

void refresh\_seg\_offset()

Public Static Functions

#### [` is_exported `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11is_exportedERK6Symbol>)

static bool is\_exported(const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") &amp;symbol)

Check if the given symbol is exported.

#### [` is_imported `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary11is_importedERK6Symbol>)

static bool is\_imported(const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") &amp;symbol)

Check if the given symbol is an imported one.

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary7classofEPKN4LIEF6BinaryE>)

static inline bool classof(const LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary") \*bin)

#### [` can_cache_segment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary17can_cache_segmentERK14SegmentCommand>)

static bool can\_cache\_segment(const [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") &amp;segment)

Check if the given segment can go in the offset\_seg\_ cache.

#### [` range_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary7range_tE>)

struct range\_t

Public Functions

##### [` size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary7range_t4sizeEv>)

inline uint64\_t size() const

##### [` empty `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary7range_t5emptyEv>)

inline bool empty() const

Public Members

##### [` start `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary7range_t5startE>)

uint64\_t start = 0

##### [` end `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary7range_t3endE>)

uint64\_t end = 0

#### [` KeyCmp `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Binary6KeyCmpE>)

struct KeyCmp

Public Functions

##### [` operator() `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary6KeyCmpclEPK10RelocationPK10Relocation>)

bool operator()(const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation") \*lhs, const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation") \*rhs) const

---

## [Header](<https://lief.re/doc/latest/formats/macho/cpp.html#header>)

### [` Header `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE>)

class Header : public LIEF::Object

Class that represents the Mach-O header.

Public Types

#### [` FILE_TYPE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPEE>)

enum class FILE\_TYPE : uint32\_t

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPE7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` OBJECT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPE6OBJECTE>)

enumerator OBJECT = 0x1u

##### [` EXECUTE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPE7EXECUTEE>)

enumerator EXECUTE = 0x2u

##### [` FVMLIB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPE6FVMLIBE>)

enumerator FVMLIB = 0x3u

##### [` CORE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPE4COREE>)

enumerator CORE = 0x4u

##### [` PRELOAD `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPE7PRELOADE>)

enumerator PRELOAD = 0x5u

##### [` DYLIB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPE5DYLIBE>)

enumerator DYLIB = 0x6u

##### [` DYLINKER `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPE8DYLINKERE>)

enumerator DYLINKER = 0x7u

##### [` BUNDLE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPE6BUNDLEE>)

enumerator BUNDLE = 0x8u

##### [` DYLIB_STUB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPE10DYLIB_STUBE>)

enumerator DYLIB\_STUB = 0x9u

##### [` DSYM `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPE4DSYME>)

enumerator DSYM = 0xAu

##### [` KEXT_BUNDLE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPE11KEXT_BUNDLEE>)

enumerator KEXT\_BUNDLE = 0xBu

##### [` FILESET `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPE7FILESETE>)

enumerator FILESET = 0xCu

##### [` GPU_EXECUTE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPE11GPU_EXECUTEE>)

enumerator GPU\_EXECUTE = 0xDu

##### [` GPU_DYLIB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPE9GPU_DYLIBE>)

enumerator GPU\_DYLIB = 0xEu

#### [` FLAGS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGSE>)

enum class FLAGS : uint32\_t

*Values:*

##### [` NOUNDEFS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS8NOUNDEFSE>)

enumerator NOUNDEFS = 0x00000001u

##### [` INCRLINK `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS8INCRLINKE>)

enumerator INCRLINK = 0x00000002u

##### [` DYLDLINK `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS8DYLDLINKE>)

enumerator DYLDLINK = 0x00000004u

##### [` BINDATLOAD `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS10BINDATLOADE>)

enumerator BINDATLOAD = 0x00000008u

##### [` PREBOUND `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS8PREBOUNDE>)

enumerator PREBOUND = 0x00000010u

##### [` SPLIT_SEGS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS10SPLIT_SEGSE>)

enumerator SPLIT\_SEGS = 0x00000020u

##### [` LAZY_INIT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS9LAZY_INITE>)

enumerator LAZY\_INIT = 0x00000040u

##### [` TWOLEVEL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS8TWOLEVELE>)

enumerator TWOLEVEL = 0x00000080u

##### [` FORCE_FLAT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS10FORCE_FLATE>)

enumerator FORCE\_FLAT = 0x00000100u

##### [` NOMULTIDEFS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS11NOMULTIDEFSE>)

enumerator NOMULTIDEFS = 0x00000200u

##### [` NOFIXPREBINDING `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS15NOFIXPREBINDINGE>)

enumerator NOFIXPREBINDING = 0x00000400u

##### [` PREBINDABLE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS11PREBINDABLEE>)

enumerator PREBINDABLE = 0x00000800u

##### [` ALLMODSBOUND `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS12ALLMODSBOUNDE>)

enumerator ALLMODSBOUND = 0x00001000u

##### [` SUBSECTIONS_VIA_SYMBOLS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS23SUBSECTIONS_VIA_SYMBOLSE>)

enumerator SUBSECTIONS\_VIA\_SYMBOLS = 0x00002000u

##### [` CANONICAL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS9CANONICALE>)

enumerator CANONICAL = 0x00004000u

##### [` WEAK_DEFINES `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS12WEAK_DEFINESE>)

enumerator WEAK\_DEFINES = 0x00008000u

##### [` BINDS_TO_WEAK `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS13BINDS_TO_WEAKE>)

enumerator BINDS\_TO\_WEAK = 0x00010000u

##### [` ALLOW_STACK_EXECUTION `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS21ALLOW_STACK_EXECUTIONE>)

enumerator ALLOW\_STACK\_EXECUTION = 0x00020000u

##### [` ROOT_SAFE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS9ROOT_SAFEE>)

enumerator ROOT\_SAFE = 0x00040000u

##### [` SETUID_SAFE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS11SETUID_SAFEE>)

enumerator SETUID\_SAFE = 0x00080000u

##### [` NO_REEXPORTED_DYLIBS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS20NO_REEXPORTED_DYLIBSE>)

enumerator NO\_REEXPORTED\_DYLIBS = 0x00100000u

##### [` PIE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS3PIEE>)

enumerator PIE = 0x00200000u

##### [` DEAD_STRIPPABLE_DYLIB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS21DEAD_STRIPPABLE_DYLIBE>)

enumerator DEAD\_STRIPPABLE\_DYLIB = 0x00400000u

##### [` HAS_TLV_DESCRIPTORS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS19HAS_TLV_DESCRIPTORSE>)

enumerator HAS\_TLV\_DESCRIPTORS = 0x00800000u

##### [` NO_HEAP_EXECUTION `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS17NO_HEAP_EXECUTIONE>)

enumerator NO\_HEAP\_EXECUTION = 0x01000000u

##### [` APP_EXTENSION_SAFE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS18APP_EXTENSION_SAFEE>)

enumerator APP\_EXTENSION\_SAFE = 0x02000000u

##### [` NLIST_OUTOFSYNC_WITH_DYLDINFO `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS29NLIST_OUTOFSYNC_WITH_DYLDINFOE>)

enumerator NLIST\_OUTOFSYNC\_WITH\_DYLDINFO = 0x04000000u

##### [` SIM_SUPPORT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS11SIM_SUPPORTE>)

enumerator SIM\_SUPPORT = 0x08000000u

##### [` IMPLICIT_PAGEZERO `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS17IMPLICIT_PAGEZEROE>)

enumerator IMPLICIT\_PAGEZERO = 0x10000000u

##### [` DYLIB_IN_CACHE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGS14DYLIB_IN_CACHEE>)

enumerator DYLIB\_IN\_CACHE = 0x80000000u

#### [` CPU_TYPE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE>)

enum class CPU\_TYPE : int32\_t

*Values:*

##### [` ANY `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE3ANYE>)

enumerator ANY = -1

##### [` X86 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE3X86E>)

enumerator X86 = 7

##### [` X86_64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE6X86_64E>)

enumerator X86\_64 = 7 | [ABI64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5ABI64E> "LIEF::MachO::Header::ABI64")

##### [` MIPS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE4MIPSE>)

enumerator MIPS = 8

##### [` MC98000 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE7MC98000E>)

enumerator MC98000 = 10

##### [` HPPA `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE4HPPAE>)

enumerator HPPA = 11

##### [` ARM `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE3ARME>)

enumerator ARM = 12

##### [` ARM64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE5ARM64E>)

enumerator ARM64 = 12 | [ABI64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5ABI64E> "LIEF::MachO::Header::ABI64")

##### [` MC88000 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE7MC88000E>)

enumerator MC88000 = 13

##### [` SPARC `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE5SPARCE>)

enumerator SPARC = 14

##### [` I860 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE4I860E>)

enumerator I860 = 15

##### [` ALPHA `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE5ALPHAE>)

enumerator ALPHA = 16

##### [` POWERPC `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE7POWERPCE>)

enumerator POWERPC = 18

##### [` POWERPC64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE9POWERPC64E>)

enumerator POWERPC64 = 18 | [ABI64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5ABI64E> "LIEF::MachO::Header::ABI64")

##### [` APPLE_GPU `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE9APPLE_GPUE>)

enumerator APPLE\_GPU = 19 | [ABI64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5ABI64E> "LIEF::MachO::Header::ABI64")

##### [` AMD_GPU `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE7AMD_GPUE>)

enumerator AMD\_GPU = 20 | [ABI64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5ABI64E> "LIEF::MachO::Header::ABI64")

##### [` INTEL_GPU `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE9INTEL_GPUE>)

enumerator INTEL\_GPU = 21 | [ABI64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5ABI64E> "LIEF::MachO::Header::ABI64")

##### [` AIR64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE5AIR64E>)

enumerator AIR64 = 23 | [ABI64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5ABI64E> "LIEF::MachO::Header::ABI64")

Public Functions

#### [` Header `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header6HeaderEv>)

Header() = default

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderaSERK6Header>)

[Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header") &amp;operator=(const [Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header") &amp;copy) = default

#### [` Header `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header6HeaderERK6Header>)

Header(const [Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header6HeaderERK6Header> "LIEF::MachO::Header::Header") &amp;copy) = default

#### [` ~Header `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderD0Ev>)

~Header() override = default

#### [` magic `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Header5magicEv>)

inline [MACHO\_TYPES](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MACHO_TYPESE> "LIEF::MachO::MACHO_TYPES") magic() const

The Mach-O magic bytes. These bytes determine whether it is a 32 bits Mach-O, a 64 bits Mach-O files etc.

#### [` cpu_type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Header8cpu_typeEv>)

inline [CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE> "LIEF::MachO::Header::CPU_TYPE") cpu\_type() const

The CPU architecture targeted by this binary.

#### [` cpu_subtype `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Header11cpu_subtypeEv>)

inline uint32\_t cpu\_subtype() const

Return the CPU subtype supported by the Mach-O binary. For ARM architectures, this value could represent the minimum version for which the Mach-O binary has been compiled for.

#### [` file_type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Header9file_typeEv>)

inline [FILE\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPEE> "LIEF::MachO::Header::FILE_TYPE") file\_type() const

Return the type of the Mach-O file (executable, object, shared library, …).

#### [` flags_list `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Header10flags_listEv>)

std::vector&lt;[FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGSE> "LIEF::MachO::Header::FLAGS")&gt; flags\_list() const

Return the [FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Header_1a2c24a862254e0c4b030c72ad03a98478>) as a list.

#### [` has `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Header3hasE5FLAGS>)

bool has([FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGSE> "LIEF::MachO::Header::FLAGS") flag) const

Check if the given HEADER\_FLAGS is present in the header’s flags.

#### [` nb_cmds `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Header7nb_cmdsEv>)

inline uint32\_t nb\_cmds() const

Number of [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand>) present in the Mach-O binary.

#### [` sizeof_cmds `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Header11sizeof_cmdsEv>)

inline uint32\_t sizeof\_cmds() const

The size of **all** the [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand>).

#### [` flags `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Header5flagsEv>)

inline uint32\_t flags() const

[Header](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Header>) flags (cf. HEADER\_FLAGS).

> **See also**
> 
> [flags\_list](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Header_1a33bc077806b612b5eacce2f6ed86ece3>)

#### [` reserved `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Header8reservedEv>)

inline uint32\_t reserved() const

According to the official documentation, a reserved value.

#### [` add `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header3addE5FLAGS>)

void add([FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGSE> "LIEF::MachO::Header::FLAGS") flag)

#### [` magic `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5magicE11MACHO_TYPES>)

inline void magic([MACHO\_TYPES](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MACHO_TYPESE> "LIEF::MachO::MACHO_TYPES") magic)

#### [` cpu_type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8cpu_typeE8CPU_TYPE>)

inline void cpu\_type([CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE> "LIEF::MachO::Header::CPU_TYPE") type)

#### [` cpu_subtype `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header11cpu_subtypeE8uint32_t>)

inline void cpu\_subtype(uint32\_t cpusubtype)

#### [` file_type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9file_typeE9FILE_TYPE>)

inline void file\_type([FILE\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header9FILE_TYPEE> "LIEF::MachO::Header::FILE_TYPE") filetype)

#### [` nb_cmds `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header7nb_cmdsE8uint32_t>)

inline void nb\_cmds(uint32\_t ncmds)

#### [` sizeof_cmds `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header11sizeof_cmdsE8uint32_t>)

inline void sizeof\_cmds(uint32\_t sizeofcmds)

#### [` flags `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5flagsE8uint32_t>)

inline void flags(uint32\_t flags)

#### [` is_32bit `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Header8is_32bitEv>)

inline bool is\_32bit() const

True if the binary is 32-bit.

#### [` is_64bit `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Header8is_64bitEv>)

inline bool is\_64bit() const

True if the binary is 64-bit.

#### [` remove `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header6removeE5FLAGS>)

void remove([FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGSE> "LIEF::MachO::Header::FLAGS") flag)

#### [` reserved `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8reservedE8uint32_t>)

inline void reserved(uint32\_t reserved)

#### [` operator+= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderpLE5FLAGS>)

inline [Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header") &amp;operator+=([FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGSE> "LIEF::MachO::Header::FLAGS") c)

#### [` operator-= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeadermIE5FLAGS>)

inline [Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header") &amp;operator-=([FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5FLAGSE> "LIEF::MachO::Header::FLAGS") c)

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Header6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Attributes

#### [` ABI64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header5ABI64E>)

static int ABI64 = 0x01000000

#### [` SUBTYPE_MASK `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header12SUBTYPE_MASKE>)

static uint32\_t SUBTYPE\_MASK = 0xff000000

#### [` SUBTYPE_LIB64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header13SUBTYPE_LIB64E>)

static uint32\_t SUBTYPE\_LIB64 = 0x80000000

#### [` CPU_SUBTYPE_ARM64_ARM64E `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header24CPU_SUBTYPE_ARM64_ARM64EE>)

static auto CPU\_SUBTYPE\_ARM64\_ARM64E = 2

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderlsERNSt7ostreamERK6Header>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header") &amp;hdr)

---

## [Builder](<https://lief.re/doc/latest/formats/macho/cpp.html#builder>)

### [` Builder `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7BuilderE>)

class Builder

Class used to rebuild a Mach-O file.

Public Functions

#### [` Builder `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder7BuilderEv>)

Builder() = delete

#### [` ~Builder `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7BuilderD0Ev>)

~Builder()

Public Static Functions

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder5writeER6BinaryRKNSt6stringE>)

static [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") write([Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") &amp;binary, const std::string &amp;filename)

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder5writeER6BinaryRKNSt6stringE8config_t>)

static [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") write([Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") &amp;binary, const std::string &amp;filename, [config\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder8config_tE> "LIEF::MachO::Builder::config_t") config)

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder5writeER6BinaryRNSt6vectorI7uint8_tEE>)

static [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") write([Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") &amp;binary, std::vector&lt;uint8\_t&gt; &amp;out)

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder5writeER6BinaryRNSt6vectorI7uint8_tEE8config_t>)

static [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") write([Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") &amp;binary, std::vector&lt;uint8\_t&gt; &amp;out, [config\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder8config_tE> "LIEF::MachO::Builder::config_t") config)

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder5writeER6BinaryRNSt7ostreamE>)

static [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") write([Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") &amp;binary, std::ostream &amp;out)

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder5writeER6BinaryRNSt7ostreamE8config_t>)

static [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") write([Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") &amp;binary, std::ostream &amp;out, [config\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder8config_tE> "LIEF::MachO::Builder::config_t") config)

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder5writeER9FatBinaryRKNSt6stringE>)

static [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") write([FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary") &amp;fat, const std::string &amp;filename)

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder5writeER9FatBinaryRKNSt6stringE8config_t>)

static [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") write([FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary") &amp;fat, const std::string &amp;filename, [config\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder8config_tE> "LIEF::MachO::Builder::config_t") config)

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder5writeER9FatBinaryRNSt6vectorI7uint8_tEE>)

static [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") write([FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary") &amp;fat, std::vector&lt;uint8\_t&gt; &amp;out)

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder5writeER9FatBinaryRNSt6vectorI7uint8_tEE8config_t>)

static [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") write([FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary") &amp;fat, std::vector&lt;uint8\_t&gt; &amp;out, [config\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder8config_tE> "LIEF::MachO::Builder::config_t") config)

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder5writeER9FatBinaryRNSt7ostreamE>)

static [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") write([FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary") &amp;fat, std::ostream &amp;out)

#### [` write `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder5writeER9FatBinaryRNSt7ostreamE8config_t>)

static [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") write([FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary") &amp;fat, std::ostream &amp;out, [config\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder8config_tE> "LIEF::MachO::Builder::config_t") config)

#### [` config_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder8config_tE>)

struct config\_t

Options to tweak the building process.

Public Members

##### [` linkedit `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Builder8config_t8linkeditE>)

bool linkedit = true

---

## [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#dylibcommand>)

### [` DylibCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE>)

class DylibCommand : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class which represents a library dependency.

Public Types

#### [` version_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand9version_tE>)

using version\_t = std::array&lt;uint16\_t, 3&gt;

Public Functions

#### [` DylibCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand12DylibCommandEv>)

DylibCommand() = default

#### [` DylibCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand12DylibCommandERKN7details13dylib_commandE>)

DylibCommand(const details::dylib\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandaSERK12DylibCommand>)

[DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE> "LIEF::MachO::DylibCommand") &amp;operator=(const [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE> "LIEF::MachO::DylibCommand") &amp;copy) = default

#### [` DylibCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand12DylibCommandERK12DylibCommand>)

DylibCommand(const [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand12DylibCommandERK12DylibCommand> "LIEF::MachO::DylibCommand::DylibCommand") &amp;copy) = default

#### [` ~DylibCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandD0Ev>)

~DylibCommand() override = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12DylibCommand5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` name `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12DylibCommand4nameEv>)

inline std::string\_view name() const

Library name.

#### [` name_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12DylibCommand11name_offsetEv>)

inline uint32\_t name\_offset() const

Original string offset of the name.

#### [` timestamp `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12DylibCommand9timestampEv>)

inline uint32\_t timestamp() const

Date and Time when the shared library was built.

#### [` current_version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12DylibCommand15current_versionEv>)

inline [version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand9version_tE> "LIEF::MachO::DylibCommand::version_t") current\_version() const

Current version of the shared library.

#### [` compatibility_version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12DylibCommand21compatibility_versionEv>)

inline [version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand9version_tE> "LIEF::MachO::DylibCommand::version_t") compatibility\_version() const

Compatibility version of the shared library.

#### [` name `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand4nameENSt6stringE>)

inline void name(std::string name)

#### [` timestamp `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand9timestampE8uint32_t>)

inline void timestamp(uint32\_t timestamp)

#### [` current_version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand15current_versionE9version_t>)

inline void current\_version([version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand9version_tE> "LIEF::MachO::DylibCommand::version_t") version)

#### [` compatibility_version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand21compatibility_versionE9version_t>)

inline void compatibility\_version([version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand9version_tE> "LIEF::MachO::DylibCommand::version_t") version)

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12DylibCommand5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12DylibCommand6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Functions

#### [` int2version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand11int2versionE8uint32_t>)

static inline [version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand9version_tE> "LIEF::MachO::DylibCommand::version_t") int2version(uint32\_t version)

Helper to convert an integer into a version array.

#### [` version2int `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand11version2intE9version_t>)

static inline uint32\_t version2int([version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand9version_tE> "LIEF::MachO::DylibCommand::version_t") version)

Helper to convert a version array into an integer.

#### [` weak_dylib `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand10weak_dylibERKNSt6stringE8uint32_t8uint32_t8uint32_t>)

static [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE> "LIEF::MachO::DylibCommand") weak\_dylib(const std::string &amp;name, uint32\_t timestamp = 0, uint32\_t current\_version = 0, uint32\_t compat\_version = 0)

Factory function to generate a LC\_LOAD\_WEAK\_DYLIB library.

#### [` id_dylib `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand8id_dylibERKNSt6stringE8uint32_t8uint32_t8uint32_t>)

static [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE> "LIEF::MachO::DylibCommand") id\_dylib(const std::string &amp;name, uint32\_t timestamp = 0, uint32\_t current\_version = 0, uint32\_t compat\_version = 0)

Factory function to generate a LC\_ID\_DYLIB library.

#### [` load_dylib `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand10load_dylibERKNSt6stringE8uint32_t8uint32_t8uint32_t>)

static [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE> "LIEF::MachO::DylibCommand") load\_dylib(const std::string &amp;name, uint32\_t timestamp = 2, uint32\_t current\_version = 0, uint32\_t compat\_version = 0)

Factory function to generate a LC\_LOAD\_DYLIB library.

#### [` reexport_dylib `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand14reexport_dylibERKNSt6stringE8uint32_t8uint32_t8uint32_t>)

static [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE> "LIEF::MachO::DylibCommand") reexport\_dylib(const std::string &amp;name, uint32\_t timestamp = 0, uint32\_t current\_version = 0, uint32\_t compat\_version = 0)

Factory function to generate a LC\_REEXPORT\_DYLIB library.

#### [` load_upward_dylib `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand17load_upward_dylibERKNSt6stringE8uint32_t8uint32_t8uint32_t>)

static [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE> "LIEF::MachO::DylibCommand") load\_upward\_dylib(const std::string &amp;name, uint32\_t timestamp = 0, uint32\_t current\_version = 0, uint32\_t compat\_version = 0)

Factory function to generate a LC\_LOAD\_UPWARD\_DYLIB library.

#### [` lazy_load_dylib `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand15lazy_load_dylibERKNSt6stringE8uint32_t8uint32_t8uint32_t>)

static [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE> "LIEF::MachO::DylibCommand") lazy\_load\_dylib(const std::string &amp;name, uint32\_t timestamp = 0, uint32\_t current\_version = 0, uint32\_t compat\_version = 0)

Factory function to generate a LC\_LAZY\_LOAD\_DYLIB library.

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommand7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [DylinkerCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#dylinkercommand>)

### [` DylinkerCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DylinkerCommandE>)

class DylinkerCommand : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the Mach-O linker, also named loader. Most of the time, [DylinkerCommand::name()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DylinkerCommand_1aa00c0fc00af067a5ceee524e4a46864a>) should return `/usr/lib/dyld`.

Public Functions

#### [` DylinkerCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DylinkerCommand15DylinkerCommandEv>)

DylinkerCommand() = default

#### [` DylinkerCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DylinkerCommand15DylinkerCommandERKN7details16dylinker_commandE>)

DylinkerCommand(const details::dylinker\_command &amp;cmd)

#### [` DylinkerCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DylinkerCommand15DylinkerCommandENSt6stringE>)

DylinkerCommand(std::string name)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DylinkerCommandaSERK15DylinkerCommand>)

[DylinkerCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DylinkerCommandE> "LIEF::MachO::DylinkerCommand") &amp;operator=(const [DylinkerCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DylinkerCommandE> "LIEF::MachO::DylinkerCommand") &amp;copy) = default

#### [` DylinkerCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DylinkerCommand15DylinkerCommandERK15DylinkerCommand>)

DylinkerCommand(const [DylinkerCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DylinkerCommand15DylinkerCommandERK15DylinkerCommand> "LIEF::MachO::DylinkerCommand::DylinkerCommand") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DylinkerCommand5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` ~DylinkerCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DylinkerCommandD0Ev>)

~DylinkerCommand() override = default

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DylinkerCommand5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` name `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DylinkerCommand4nameEv>)

inline std::string\_view name() const

Path to the linker (or loader).

#### [` name `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DylinkerCommand4nameENSt6stringE>)

inline void name(std::string name)

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DylinkerCommand6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DylinkerCommand7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [DynamicSymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#dynamicsymbolcommand>)

### [` DynamicSymbolCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommandE>)

class DynamicSymbolCommand : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the LC\_DYSYMTAB command.

This command completes the LC\_SYMTAB ([SymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SymbolCommand>)) to provide a better granularity over the symbols layout.

Public Types

#### [` indirect_symbols_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand18indirect_symbols_tE>)

using indirect\_symbols\_t = std::vector&lt;[Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol")\*&gt;

Container for the indirect symbols references (owned by [MachO::Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>)).

#### [` it_indirect_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand19it_indirect_symbolsE>)

using it\_indirect\_symbols = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[indirect\_symbols\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand18indirect_symbols_tE> "LIEF::MachO::DynamicSymbolCommand::indirect_symbols_t")&amp;&gt;

Iterator for the indirect symbols referenced by this command.

#### [` it_const_indirect_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand25it_const_indirect_symbolsE>)

using it\_const\_indirect\_symbols = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [indirect\_symbols\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand18indirect_symbols_tE> "LIEF::MachO::DynamicSymbolCommand::indirect_symbols_t")&amp;&gt;

Public Functions

#### [` DynamicSymbolCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand20DynamicSymbolCommandEv>)

DynamicSymbolCommand()

#### [` DynamicSymbolCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand20DynamicSymbolCommandERKN7details16dysymtab_commandE>)

DynamicSymbolCommand(const details::dysymtab\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommandaSERK20DynamicSymbolCommand>)

[DynamicSymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommandE> "LIEF::MachO::DynamicSymbolCommand") &amp;operator=(const [DynamicSymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommandE> "LIEF::MachO::DynamicSymbolCommand") &amp;copy) = default

#### [` DynamicSymbolCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand20DynamicSymbolCommandERK20DynamicSymbolCommand>)

DynamicSymbolCommand(const [DynamicSymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand20DynamicSymbolCommandERK20DynamicSymbolCommand> "LIEF::MachO::DynamicSymbolCommand::DynamicSymbolCommand") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` ~DynamicSymbolCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommandD0Ev>)

~DynamicSymbolCommand() override = default

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` idx_local_symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand16idx_local_symbolEv>)

inline uint32\_t idx\_local\_symbol() const

Index of the first symbol in the group of local symbols.

#### [` nb_local_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand16nb_local_symbolsEv>)

inline uint32\_t nb\_local\_symbols() const

Number of symbols in the group of local symbols.

#### [` idx_external_define_symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand26idx_external_define_symbolEv>)

inline uint32\_t idx\_external\_define\_symbol() const

Index of the first symbol in the group of defined external symbols.

#### [` nb_external_define_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand26nb_external_define_symbolsEv>)

inline uint32\_t nb\_external\_define\_symbols() const

Number of symbols in the group of defined external symbols.

#### [` idx_undefined_symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand20idx_undefined_symbolEv>)

inline uint32\_t idx\_undefined\_symbol() const

Index of the first symbol in the group of undefined external symbols.

#### [` nb_undefined_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand20nb_undefined_symbolsEv>)

inline uint32\_t nb\_undefined\_symbols() const

Number of symbols in the group of undefined external symbols.

#### [` toc_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand10toc_offsetEv>)

inline uint32\_t toc\_offset() const

Byte offset from the start of the file to the table of contents data.

Table of content is used by legacy Mach-O loader and this field should be set to 0

#### [` nb_toc `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand6nb_tocEv>)

inline uint32\_t nb\_toc() const

Number of entries in the table of contents.

Should be set to 0 on recent Mach-O

#### [` module_table_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand19module_table_offsetEv>)

inline uint32\_t module\_table\_offset() const

Byte offset from the start of the file to the module table data.

This field seems unused by recent Mach-O loader and should be set to 0

#### [` nb_module_table `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand15nb_module_tableEv>)

inline uint32\_t nb\_module\_table() const

Number of entries in the module table.

This field seems unused by recent Mach-O loader and should be set to 0

#### [` external_reference_symbol_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand32external_reference_symbol_offsetEv>)

inline uint32\_t external\_reference\_symbol\_offset() const

Byte offset from the start of the file to the external reference table data.

This field seems unused by recent Mach-O loader and should be set to 0

#### [` nb_external_reference_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand29nb_external_reference_symbolsEv>)

inline uint32\_t nb\_external\_reference\_symbols() const

Number of entries in the external reference table.

This field seems unused by recent Mach-O loader and should be set to 0

#### [` indirect_symbol_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand22indirect_symbol_offsetEv>)

inline uint32\_t indirect\_symbol\_offset() const

Byte offset from the start of the file to the indirect symbol table data.

Indirect symbol table is used by the loader to speed-up symbol resolution during the *lazy binding* process

References:

- dyld-519.2.1/src/ImageLoaderMachOCompressed.cpp
- dyld-519.2.1/src/ImageLoaderMachOClassic.cpp

#### [` nb_indirect_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand19nb_indirect_symbolsEv>)

inline uint32\_t nb\_indirect\_symbols() const

Number of entries in the indirect symbol table.

> **See also**
> 
> [indirect\_symbol\_offset](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DynamicSymbolCommand_1aab7c9ffa2ff35b718261c2ee5fda0d06>)

#### [` external_relocation_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand26external_relocation_offsetEv>)

inline uint32\_t external\_relocation\_offset() const

Byte offset from the start of the file to the external relocation table data.

This field seems unused by recent Mach-O loader and should be set to 0

#### [` nb_external_relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand23nb_external_relocationsEv>)

inline uint32\_t nb\_external\_relocations() const

Number of entries in the external relocation table.

This field seems unused by recent Mach-O loader and should be set to 0

#### [` local_relocation_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand23local_relocation_offsetEv>)

inline uint32\_t local\_relocation\_offset() const

Byte offset from the start of the file to the local relocation table data.

This field seems unused by recent Mach-O loader and should be set to 0

#### [` nb_local_relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand20nb_local_relocationsEv>)

inline uint32\_t nb\_local\_relocations() const

Number of entries in the local relocation table.

This field seems unused by recent Mach-O loader and should be set to 0

#### [` idx_local_symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand16idx_local_symbolE8uint32_t>)

inline void idx\_local\_symbol(uint32\_t value)

#### [` nb_local_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand16nb_local_symbolsE8uint32_t>)

inline void nb\_local\_symbols(uint32\_t value)

#### [` idx_external_define_symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand26idx_external_define_symbolE8uint32_t>)

inline void idx\_external\_define\_symbol(uint32\_t value)

#### [` nb_external_define_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand26nb_external_define_symbolsE8uint32_t>)

inline void nb\_external\_define\_symbols(uint32\_t value)

#### [` idx_undefined_symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand20idx_undefined_symbolE8uint32_t>)

inline void idx\_undefined\_symbol(uint32\_t value)

#### [` nb_undefined_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand20nb_undefined_symbolsE8uint32_t>)

inline void nb\_undefined\_symbols(uint32\_t value)

#### [` toc_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand10toc_offsetE8uint32_t>)

inline void toc\_offset(uint32\_t value)

#### [` nb_toc `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand6nb_tocE8uint32_t>)

inline void nb\_toc(uint32\_t value)

#### [` module_table_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand19module_table_offsetE8uint32_t>)

inline void module\_table\_offset(uint32\_t value)

#### [` nb_module_table `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand15nb_module_tableE8uint32_t>)

inline void nb\_module\_table(uint32\_t value)

#### [` external_reference_symbol_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand32external_reference_symbol_offsetE8uint32_t>)

inline void external\_reference\_symbol\_offset(uint32\_t value)

#### [` nb_external_reference_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand29nb_external_reference_symbolsE8uint32_t>)

inline void nb\_external\_reference\_symbols(uint32\_t value)

#### [` indirect_symbol_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand22indirect_symbol_offsetE8uint32_t>)

inline void indirect\_symbol\_offset(uint32\_t value)

#### [` nb_indirect_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand19nb_indirect_symbolsE8uint32_t>)

inline void nb\_indirect\_symbols(uint32\_t value)

#### [` external_relocation_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand26external_relocation_offsetE8uint32_t>)

inline void external\_relocation\_offset(uint32\_t value)

#### [` nb_external_relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand23nb_external_relocationsE8uint32_t>)

inline void nb\_external\_relocations(uint32\_t value)

#### [` local_relocation_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand23local_relocation_offsetE8uint32_t>)

inline void local\_relocation\_offset(uint32\_t value)

#### [` nb_local_relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand20nb_local_relocationsE8uint32_t>)

inline void nb\_local\_relocations(uint32\_t value)

#### [` indirect_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand16indirect_symbolsEv>)

inline [it\_indirect\_symbols](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand19it_indirect_symbolsE> "LIEF::MachO::DynamicSymbolCommand::it_indirect_symbols") indirect\_symbols()

Iterator over the indirect symbols indexed by this command.

#### [` indirect_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20DynamicSymbolCommand16indirect_symbolsEv>)

inline [it\_const\_indirect\_symbols](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand25it_const_indirect_symbolsE> "LIEF::MachO::DynamicSymbolCommand::it_const_indirect_symbols") indirect\_symbols() const

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20DynamicSymbolCommand7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#loadcommand>)

### [` LoadCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE>)

class LoadCommand : public LIEF::Object

Base class for the Mach-O load commands.

Subclassed by LIEF::MachO::AtomInfo, [LIEF::MachO::BuildVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1BuildVersion>), [LIEF::MachO::CodeSignature](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1CodeSignature>), [LIEF::MachO::CodeSignatureDir](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1CodeSignatureDir>), [LIEF::MachO::DataInCode](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DataInCode>), [LIEF::MachO::DyldChainedFixups](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldChainedFixups>), [LIEF::MachO::DyldEnvironment](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldEnvironment>), [LIEF::MachO::DyldExportsTrie](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldExportsTrie>), [LIEF::MachO::DyldInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldInfo>), [LIEF::MachO::DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DylibCommand>), [LIEF::MachO::DylinkerCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DylinkerCommand>), [LIEF::MachO::DynamicSymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DynamicSymbolCommand>), [LIEF::MachO::EncryptionInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1EncryptionInfo>), [LIEF::MachO::FilesetCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FilesetCommand>), [LIEF::MachO::FunctionStarts](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionStarts>), [LIEF::MachO::FunctionVariantFixups](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariantFixups>), [LIEF::MachO::FunctionVariants](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants>), [LIEF::MachO::LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LazyLoadDylibInfo>), [LIEF::MachO::LinkerOptHint](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LinkerOptHint>), [LIEF::MachO::MainCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1MainCommand>), [LIEF::MachO::NoteCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1NoteCommand>), [LIEF::MachO::RPathCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1RPathCommand>), [LIEF::MachO::Routine](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Routine>), [LIEF::MachO::SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>), [LIEF::MachO::SegmentSplitInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentSplitInfo>), [LIEF::MachO::SourceVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SourceVersion>), [LIEF::MachO::SubClient](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SubClient>), [LIEF::MachO::SubFramework](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SubFramework>), [LIEF::MachO::SymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SymbolCommand>), [LIEF::MachO::ThreadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ThreadCommand>), [LIEF::MachO::TwoLevelHints](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1TwoLevelHints>), [LIEF::MachO::UUIDCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1UUIDCommand>), [LIEF::MachO::UnknownCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1UnknownCommand>), [LIEF::MachO::VersionMin](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1VersionMin>)

Public Types

#### [` TYPE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPEE>)

enum class TYPE : uint64\_t

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` SEGMENT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE7SEGMENTE>)

enumerator SEGMENT = 0x00000001u

##### [` SYMTAB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE6SYMTABE>)

enumerator SYMTAB = 0x00000002u

##### [` SYMSEG `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE6SYMSEGE>)

enumerator SYMSEG = 0x00000003u

##### [` THREAD `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE6THREADE>)

enumerator THREAD = 0x00000004u

##### [` UNIXTHREAD `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE10UNIXTHREADE>)

enumerator UNIXTHREAD = 0x00000005u

##### [` LOADFVMLIB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE10LOADFVMLIBE>)

enumerator LOADFVMLIB = 0x00000006u

##### [` IDFVMLIB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE8IDFVMLIBE>)

enumerator IDFVMLIB = 0x00000007u

##### [` IDENT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE5IDENTE>)

enumerator IDENT = 0x00000008u

##### [` FVMFILE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE7FVMFILEE>)

enumerator FVMFILE = 0x00000009u

##### [` PREPAGE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE7PREPAGEE>)

enumerator PREPAGE = 0x0000000Au

##### [` DYSYMTAB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE8DYSYMTABE>)

enumerator DYSYMTAB = 0x0000000Bu

##### [` LOAD_DYLIB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE10LOAD_DYLIBE>)

enumerator LOAD\_DYLIB = 0x0000000Cu

##### [` ID_DYLIB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE8ID_DYLIBE>)

enumerator ID\_DYLIB = 0x0000000Du

##### [` LOAD_DYLINKER `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE13LOAD_DYLINKERE>)

enumerator LOAD\_DYLINKER = 0x0000000Eu

##### [` ID_DYLINKER `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE11ID_DYLINKERE>)

enumerator ID\_DYLINKER = 0x0000000Fu

##### [` PREBOUND_DYLIB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE14PREBOUND_DYLIBE>)

enumerator PREBOUND\_DYLIB = 0x00000010u

##### [` ROUTINES `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE8ROUTINESE>)

enumerator ROUTINES = 0x00000011u

##### [` SUB_FRAMEWORK `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE13SUB_FRAMEWORKE>)

enumerator SUB\_FRAMEWORK = 0x00000012u

##### [` SUB_UMBRELLA `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE12SUB_UMBRELLAE>)

enumerator SUB\_UMBRELLA = 0x00000013u

##### [` SUB_CLIENT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE10SUB_CLIENTE>)

enumerator SUB\_CLIENT = 0x00000014u

##### [` SUB_LIBRARY `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE11SUB_LIBRARYE>)

enumerator SUB\_LIBRARY = 0x00000015u

##### [` TWOLEVEL_HINTS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE14TWOLEVEL_HINTSE>)

enumerator TWOLEVEL\_HINTS = 0x00000016u

##### [` PREBIND_CKSUM `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE13PREBIND_CKSUME>)

enumerator PREBIND\_CKSUM = 0x00000017u

##### [` LOAD_WEAK_DYLIB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE15LOAD_WEAK_DYLIBE>)

enumerator LOAD\_WEAK\_DYLIB = 0x80000018u

##### [` SEGMENT_64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE10SEGMENT_64E>)

enumerator SEGMENT\_64 = 0x00000019u

##### [` ROUTINES_64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE11ROUTINES_64E>)

enumerator ROUTINES\_64 = 0x0000001Au

##### [` UUID `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE4UUIDE>)

enumerator UUID = 0x0000001Bu

##### [` RPATH `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE5RPATHE>)

enumerator RPATH = 0x8000001Cu

##### [` CODE_SIGNATURE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE14CODE_SIGNATUREE>)

enumerator CODE\_SIGNATURE = 0x0000001Du

##### [` SEGMENT_SPLIT_INFO `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE18SEGMENT_SPLIT_INFOE>)

enumerator SEGMENT\_SPLIT\_INFO = 0x0000001Eu

##### [` REEXPORT_DYLIB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE14REEXPORT_DYLIBE>)

enumerator REEXPORT\_DYLIB = 0x8000001Fu

##### [` LAZY_LOAD_DYLIB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE15LAZY_LOAD_DYLIBE>)

enumerator LAZY\_LOAD\_DYLIB = 0x00000020u

##### [` ENCRYPTION_INFO `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE15ENCRYPTION_INFOE>)

enumerator ENCRYPTION\_INFO = 0x00000021u

##### [` DYLD_INFO `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE9DYLD_INFOE>)

enumerator DYLD\_INFO = 0x00000022u

##### [` DYLD_INFO_ONLY `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE14DYLD_INFO_ONLYE>)

enumerator DYLD\_INFO\_ONLY = 0x80000022u

##### [` LOAD_UPWARD_DYLIB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE17LOAD_UPWARD_DYLIBE>)

enumerator LOAD\_UPWARD\_DYLIB = 0x80000023u

##### [` VERSION_MIN_MACOSX `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE18VERSION_MIN_MACOSXE>)

enumerator VERSION\_MIN\_MACOSX = 0x00000024u

##### [` VERSION_MIN_IPHONEOS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE20VERSION_MIN_IPHONEOSE>)

enumerator VERSION\_MIN\_IPHONEOS = 0x00000025u

##### [` FUNCTION_STARTS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE15FUNCTION_STARTSE>)

enumerator FUNCTION\_STARTS = 0x00000026u

##### [` DYLD_ENVIRONMENT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE16DYLD_ENVIRONMENTE>)

enumerator DYLD\_ENVIRONMENT = 0x00000027u

##### [` MAIN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE4MAINE>)

enumerator MAIN = 0x80000028u

##### [` DATA_IN_CODE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE12DATA_IN_CODEE>)

enumerator DATA\_IN\_CODE = 0x00000029u

##### [` SOURCE_VERSION `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE14SOURCE_VERSIONE>)

enumerator SOURCE\_VERSION = 0x0000002Au

##### [` DYLIB_CODE_SIGN_DRS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE19DYLIB_CODE_SIGN_DRSE>)

enumerator DYLIB\_CODE\_SIGN\_DRS = 0x0000002Bu

##### [` ENCRYPTION_INFO_64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE18ENCRYPTION_INFO_64E>)

enumerator ENCRYPTION\_INFO\_64 = 0x0000002Cu

##### [` LINKER_OPTION `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE13LINKER_OPTIONE>)

enumerator LINKER\_OPTION = 0x0000002Du

##### [` LINKER_OPTIMIZATION_HINT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE24LINKER_OPTIMIZATION_HINTE>)

enumerator LINKER\_OPTIMIZATION\_HINT = 0x0000002Eu

##### [` VERSION_MIN_TVOS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE16VERSION_MIN_TVOSE>)

enumerator VERSION\_MIN\_TVOS = 0x0000002Fu

##### [` VERSION_MIN_WATCHOS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE19VERSION_MIN_WATCHOSE>)

enumerator VERSION\_MIN\_WATCHOS = 0x00000030u

##### [` NOTE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE4NOTEE>)

enumerator NOTE = 0x00000031u

##### [` BUILD_VERSION `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE13BUILD_VERSIONE>)

enumerator BUILD\_VERSION = 0x00000032u

##### [` DYLD_EXPORTS_TRIE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE17DYLD_EXPORTS_TRIEE>)

enumerator DYLD\_EXPORTS\_TRIE = 0x80000033u

##### [` DYLD_CHAINED_FIXUPS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE19DYLD_CHAINED_FIXUPSE>)

enumerator DYLD\_CHAINED\_FIXUPS = 0x80000034u

##### [` FILESET_ENTRY `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE13FILESET_ENTRYE>)

enumerator FILESET\_ENTRY = 0x80000035u

##### [` ATOM_INFO `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE9ATOM_INFOE>)

enumerator ATOM\_INFO = 0x00000036u

##### [` FUNCTION_VARIANTS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE17FUNCTION_VARIANTSE>)

enumerator FUNCTION\_VARIANTS = 0x00000037u

##### [` FUNCTION_VARIANT_FIXUPS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE23FUNCTION_VARIANT_FIXUPSE>)

enumerator FUNCTION\_VARIANT\_FIXUPS = 0x00000038u

##### [` TARGET_TRIPLE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE13TARGET_TRIPLEE>)

enumerator TARGET\_TRIPLE = 0x00000039u

##### [` LAZY_LOAD_DYLIB_INFO `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE20LAZY_LOAD_DYLIB_INFOE>)

enumerator LAZY\_LOAD\_DYLIB\_INFO = 0x0000003Au

##### [` LIEF_UNKNOWN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPE12LIEF_UNKNOWNE>)

enumerator LIEF\_UNKNOWN = 0xffee0001u

#### [` raw_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand5raw_tE>)

using raw\_t = std::vector&lt;uint8\_t&gt;

Public Functions

#### [` LoadCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand11LoadCommandEv>)

LoadCommand() = default

#### [` LoadCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand11LoadCommandERKN7details12load_commandE>)

LoadCommand(const details::load\_command &amp;command)

#### [` LoadCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand11LoadCommandEN11LoadCommand4TYPEE8uint32_t>)

inline LoadCommand([LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand11LoadCommandEN11LoadCommand4TYPEE8uint32_t> "LIEF::MachO::LoadCommand::LoadCommand")::TYPE type, uint32\_t size)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandaSERK11LoadCommand>)

[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") &amp;operator=(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") &amp;copy) = default

#### [` LoadCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand11LoadCommandERK11LoadCommand>)

LoadCommand(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand11LoadCommandERK11LoadCommand> "LIEF::MachO::LoadCommand::LoadCommand") &amp;copy) = default

#### [` swap `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4swapER11LoadCommand>)

void swap([LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") &amp;other) noexcept

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11LoadCommand5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const

#### [` ~LoadCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandD0Ev>)

~LoadCommand() override = default

#### [` command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11LoadCommand7commandEv>)

inline [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")::[TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPEE> "LIEF::MachO::LoadCommand::TYPE") command() const

Command type.

#### [` size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11LoadCommand4sizeEv>)

inline uint32\_t size() const

Size of the command (should be greater than `sizeof(load_command)`).

#### [` data `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11LoadCommand4dataEv>)

inline span&lt;const uint8\_t&gt; data() const

Raw command.

#### [` command_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11LoadCommand14command_offsetEv>)

inline uint64\_t command\_offset() const

Offset of the command within the *Load Command Table*.

#### [` data `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4dataE5raw_t>)

inline void data([raw\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand5raw_tE> "LIEF::MachO::LoadCommand::raw_t") data)

#### [` command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand7commandEN11LoadCommand4TYPEE>)

inline void command([LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")::[TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4TYPEE> "LIEF::MachO::LoadCommand::TYPE") command)

#### [` size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand4sizeE8uint32_t>)

inline void size(uint32\_t size)

#### [` command_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand14command_offsetE8uint64_t>)

inline void command\_offset(uint64\_t offset)

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11LoadCommand5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11LoadCommand6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` Tcast `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0ENK4LIEF5MachO11LoadCommand4castEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0ENK4LIEF5MachO11LoadCommand4castEPK1Tv> "LIEF::MachO::LoadCommand::cast::T") \*cast() const

#### [` Tcast `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0EN4LIEF5MachO11LoadCommand4castEP1Tv>)

template&lt;class T&gt;  
inline [T](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0EN4LIEF5MachO11LoadCommand4castEP1Tv> "LIEF::MachO::LoadCommand::cast::T") \*cast()

Public Static Functions

#### [` is_linkedit_data `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommand16is_linkedit_dataERK11LoadCommand>)

static bool is\_linkedit\_data(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") &amp;cmd)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandlsERNSt7ostreamERK11LoadCommand>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") &amp;cmd)

---

## [MainCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#maincommand>)

### [` MainCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MainCommandE>)

class MainCommand : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the LC\_MAIN command. This kind of command can be used to determine the entrypoint of an executable.

Public Functions

#### [` MainCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MainCommand11MainCommandEv>)

MainCommand() = default

#### [` MainCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MainCommand11MainCommandERKN7details19entry_point_commandE>)

MainCommand(const details::entry\_point\_command &amp;cmd)

#### [` MainCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MainCommand11MainCommandE8uint64_t8uint64_t>)

MainCommand(uint64\_t entrypoint, uint64\_t stacksize)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MainCommandaSERK11MainCommand>)

[MainCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MainCommandE> "LIEF::MachO::MainCommand") &amp;operator=(const [MainCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MainCommandE> "LIEF::MachO::MainCommand") &amp;copy) = default

#### [` MainCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MainCommand11MainCommandERK11MainCommand>)

MainCommand(const [MainCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MainCommand11MainCommandERK11MainCommand> "LIEF::MachO::MainCommand::MainCommand") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11MainCommand5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` ~MainCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MainCommandD0Ev>)

~MainCommand() override = default

#### [` entrypoint `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11MainCommand10entrypointEv>)

inline uint64\_t entrypoint() const

Offset of the *main* function relative to the `__TEXT` segment.

#### [` stack_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11MainCommand10stack_sizeEv>)

inline uint64\_t stack\_size() const

The initial stack size.

#### [` entrypoint `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MainCommand10entrypointE8uint64_t>)

inline void entrypoint(uint64\_t entrypoint)

#### [` stack_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MainCommand10stack_sizeE8uint64_t>)

inline void stack\_size(uint64\_t stacksize)

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11MainCommand5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11MainCommand6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MainCommand7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [NoteCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#notecommand>)

### [` NoteCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11NoteCommandE>)

class NoteCommand : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the `LC_NOTE` command.

This command is used to include arbitrary notes or metadata within a binary.

Public Functions

#### [` NoteCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11NoteCommand11NoteCommandEv>)

NoteCommand() = default

#### [` NoteCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11NoteCommand11NoteCommandERKN7details12note_commandE>)

NoteCommand(const details::note\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11NoteCommandaSERK11NoteCommand>)

[NoteCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11NoteCommandE> "LIEF::MachO::NoteCommand") &amp;operator=(const [NoteCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11NoteCommandE> "LIEF::MachO::NoteCommand") &amp;copy) = default

#### [` NoteCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11NoteCommand11NoteCommandERK11NoteCommand>)

NoteCommand(const [NoteCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11NoteCommand11NoteCommandERK11NoteCommand> "LIEF::MachO::NoteCommand::NoteCommand") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11NoteCommand5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` note_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11NoteCommand11note_offsetEv>)

inline uint64\_t note\_offset() const

Offset of the data associated with this note.

#### [` note_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11NoteCommand9note_sizeEv>)

inline uint64\_t note\_size() const

Size of the data referenced by the note\_offset.

#### [` owner `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11NoteCommand5ownerEv>)

inline span&lt;const char&gt; owner() const

Owner of the note (e.g. `AIR_METALLIB`).

#### [` owner `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11NoteCommand5ownerEv>)

inline span&lt;char&gt; owner()

#### [` owner_str `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11NoteCommand9owner_strEv>)

inline std::string owner\_str() const

Owner as a zero-terminated string.

#### [` note_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11NoteCommand11note_offsetE8uint64_t>)

inline void note\_offset(uint64\_t offset)

#### [` note_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11NoteCommand9note_sizeE8uint64_t>)

inline void note\_size(uint64\_t size)

#### [` ~NoteCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11NoteCommandD0Ev>)

~NoteCommand() override = default

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11NoteCommand5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11NoteCommand6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11NoteCommand7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#section>)

### [` Section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE>)

class Section : public LIEF::[Section](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7SectionE> "LIEF::Section")

Class that represents a Mach-O section.

Subclassed by [LIEF::MachO::ThreadLocalVariables](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ThreadLocalVariables>)

Public Types

#### [` TYPE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPEE>)

enum class TYPE : uint64\_t

*Values:*

##### [` REGULAR `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE7REGULARE>)

enumerator REGULAR = 0x00u

Regular section.

##### [` ZEROFILL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE8ZEROFILLE>)

enumerator ZEROFILL = 0x01u

Zero fill on demand section.

##### [` CSTRING_LITERALS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE16CSTRING_LITERALSE>)

enumerator CSTRING\_LITERALS = 0x02u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) with literal C strings.

##### [` IS_4BYTE_LITERALS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE17IS_4BYTE_LITERALSE>)

enumerator IS\_4BYTE\_LITERALS = 0x03u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) with 4 byte literals.

##### [` IS_8BYTE_LITERALS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE17IS_8BYTE_LITERALSE>)

enumerator IS\_8BYTE\_LITERALS = 0x04u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) with 8 byte literals.

##### [` LITERAL_POINTERS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE16LITERAL_POINTERSE>)

enumerator LITERAL\_POINTERS = 0x05u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) with pointers to literals.

##### [` NON_LAZY_SYMBOL_POINTERS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE24NON_LAZY_SYMBOL_POINTERSE>)

enumerator NON\_LAZY\_SYMBOL\_POINTERS = 0x06u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) with non-lazy symbol pointers.

##### [` LAZY_SYMBOL_POINTERS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE20LAZY_SYMBOL_POINTERSE>)

enumerator LAZY\_SYMBOL\_POINTERS = 0x07u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) with lazy symbol pointers.

##### [` SYMBOL_STUBS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE12SYMBOL_STUBSE>)

enumerator SYMBOL\_STUBS = 0x08u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) with symbol stubs, byte size of stub in the Reserved2 field.

##### [` MOD_INIT_FUNC_POINTERS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE22MOD_INIT_FUNC_POINTERSE>)

enumerator MOD\_INIT\_FUNC\_POINTERS = 0x09u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) with only function pointers for initialization.

##### [` MOD_TERM_FUNC_POINTERS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE22MOD_TERM_FUNC_POINTERSE>)

enumerator MOD\_TERM\_FUNC\_POINTERS = 0x0au

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) with only function pointers for termination.

##### [` COALESCED `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE9COALESCEDE>)

enumerator COALESCED = 0x0bu

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) contains symbols that are to be coalesced.

##### [` GB_ZEROFILL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE11GB_ZEROFILLE>)

enumerator GB\_ZEROFILL = 0x0cu

Zero fill on demand section (that can be larger than 4 gigabytes).

##### [` INTERPOSING `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE11INTERPOSINGE>)

enumerator INTERPOSING = 0x0du

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) with only pairs of function pointers for interposing.

##### [` IS_16BYTE_LITERALS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE18IS_16BYTE_LITERALSE>)

enumerator IS\_16BYTE\_LITERALS = 0x0eu

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) with only 16 byte literals.

##### [` DTRACE_DOF `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE10DTRACE_DOFE>)

enumerator DTRACE\_DOF = 0x0fu

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) contains DTrace Object Format.

##### [` LAZY_DYLIB_SYMBOL_POINTERS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE26LAZY_DYLIB_SYMBOL_POINTERSE>)

enumerator LAZY\_DYLIB\_SYMBOL\_POINTERS = 0x10u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) with lazy symbol pointers to lazy loaded dylibs.

##### [` THREAD_LOCAL_REGULAR `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE20THREAD_LOCAL_REGULARE>)

enumerator THREAD\_LOCAL\_REGULAR = 0x11u

Thread local data section.

##### [` THREAD_LOCAL_ZEROFILL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE21THREAD_LOCAL_ZEROFILLE>)

enumerator THREAD\_LOCAL\_ZEROFILL = 0x12u

Thread local zerofill section.

##### [` THREAD_LOCAL_VARIABLES `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE22THREAD_LOCAL_VARIABLESE>)

enumerator THREAD\_LOCAL\_VARIABLES = 0x13u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) with thread local variable structure data.

##### [` THREAD_LOCAL_VARIABLE_POINTERS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE30THREAD_LOCAL_VARIABLE_POINTERSE>)

enumerator THREAD\_LOCAL\_VARIABLE\_POINTERS = 0x14u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) with pointers to thread local structures.

##### [` THREAD_LOCAL_INIT_FUNCTION_POINTERS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE35THREAD_LOCAL_INIT_FUNCTION_POINTERSE>)

enumerator THREAD\_LOCAL\_INIT\_FUNCTION\_POINTERS = 0x15u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) with thread local variable initialization pointers to functions.

##### [` INIT_FUNC_OFFSETS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE17INIT_FUNC_OFFSETSE>)

enumerator INIT\_FUNC\_OFFSETS = 0x16u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) with 32-bit offsets to initializer functions.

#### [` FLAGS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGSE>)

enum class FLAGS : uint64\_t

*Values:*

##### [` PURE_INSTRUCTIONS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGS17PURE_INSTRUCTIONSE>)

enumerator PURE\_INSTRUCTIONS = 0x80000000u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) contains only true machine instructions.

##### [` NO_TOC `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGS6NO_TOCE>)

enumerator NO\_TOC = 0x40000000u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) contains coalesced symbols that are not to be in a ranlib table of contents.

##### [` STRIP_STATIC_SYMS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGS17STRIP_STATIC_SYMSE>)

enumerator STRIP\_STATIC\_SYMS = 0x20000000u

Okay to strip static symbols in this section in files with the MY\_DYLDLINK flag.

##### [` NO_DEAD_STRIP `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGS13NO_DEAD_STRIPE>)

enumerator NO\_DEAD\_STRIP = 0x10000000u

No dead stripping.

##### [` LIVE_SUPPORT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGS12LIVE_SUPPORTE>)

enumerator LIVE\_SUPPORT = 0x08000000u

Blocks are live if they reference live blocks.

##### [` SELF_MODIFYING_CODE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGS19SELF_MODIFYING_CODEE>)

enumerator SELF\_MODIFYING\_CODE = 0x04000000u

Used with i386 code stubs written on by dyld.

##### [` DEBUG_INFO `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGS10DEBUG_INFOE>)

enumerator DEBUG\_INFO = 0x02000000u

A debug section.

##### [` SOME_INSTRUCTIONS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGS17SOME_INSTRUCTIONSE>)

enumerator SOME\_INSTRUCTIONS = 0x00000400u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) contains some machine instructions.

##### [` EXT_RELOC `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGS9EXT_RELOCE>)

enumerator EXT\_RELOC = 0x00000200u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) has external relocation entries.

##### [` LOC_RELOC `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGS9LOC_RELOCE>)

enumerator LOC\_RELOC = 0x00000100u

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) has local relocation entries.

#### [` content_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section9content_tE>)

using content\_t = std::vector&lt;uint8\_t&gt;

#### [` relocations_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section13relocations_tE>)

using relocations\_t = std::vector&lt;std::unique\_ptr&lt;[Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation")&gt;&gt;

Internal container for storing Mach-O [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>).

#### [` it_relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section14it_relocationsE>)

using it\_relocations = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[relocations\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section13relocations_tE> "LIEF::MachO::Section::relocations_t")&amp;, [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation")\*&gt;

Iterator which outputs [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>)&amp;.

#### [` it_const_relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section20it_const_relocationsE>)

using it\_const\_relocations = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [relocations\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section13relocations_tE> "LIEF::MachO::Section::relocations_t")&amp;, const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation")\*&gt;

Iterator which outputs const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>)&amp;.

Public Functions

#### [` Section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section7SectionERKN7details10section_32E>)

Section(const details::section\_32 &amp;sec)

#### [` Section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section7SectionERKN7details10section_64E>)

Section(const details::section\_64 &amp;sec)

#### [` Section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section7SectionERR7Section>)

Section([Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section7SectionERR7Section> "LIEF::MachO::Section::Section")&amp;&amp;)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionaSERR7Section>)

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") &amp;operator=([Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section")&amp;&amp;)

#### [` ~Section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionD0Ev>)

~Section() override

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section5cloneEv>)

inline virtual std::unique\_ptr&lt;[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section")&gt; clone() const

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section7contentEv>)

virtual span&lt;const uint8\_t&gt; content() const override

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>)’s content.

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section7contentEv>)

inline span&lt;uint8\_t&gt; content()

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section7contentERK9content_t>)

virtual void content(const [content\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section9content_tE> "LIEF::MachO::Section::content_t") &amp;data) override

Update the content of the section.

#### [` segment_name `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section12segment_nameEv>)

std::string\_view segment\_name() const

Return the name of the segment linked to this section.

#### [` address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section7addressEv>)

inline uint64\_t address() const

Virtual base address of the section.

#### [` alignment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section9alignmentEv>)

inline uint32\_t alignment() const

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) alignment as a power of 2.

#### [` relocation_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section17relocation_offsetEv>)

inline uint32\_t relocation\_offset() const

Offset of the relocation table. This value should be 0 for executable and libraries as the relocations are managed by the [DyldInfo::rebase](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldInfo_1a56337f08fb80be5cb6c636a30fb134ed>).

On the other hand, for object files (`.o`) this value should not be 0

> **See also**
> 
> [numberof\_relocations](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section_1ac3c696247e4aa63640f4a48d8ad96052>)

> **See also**
> 
> [relocations](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section_1ab406eb635b5667d890ea4798c455bf3c>)

#### [` numberof_relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section20numberof_relocationsEv>)

inline uint32\_t numberof\_relocations() const

Number of relocations associated with this section.

#### [` flags `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section5flagsEv>)

inline [FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGSE> "LIEF::MachO::Section::FLAGS") flags() const

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>)’s flags masked with SECTION\_FLAGS\_MASK (see: [Section::FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section_1aa38bb45cc5f893c97bdf65aa6acd95c1>)).

> **See also**
> 
> [flags](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section_1afdbea2af4e8cbc4f144649cbad3cedd0>)

#### [` type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section4typeEv>)

inline [TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPEE> "LIEF::MachO::Section::TYPE") type() const

Type of the section. This value can help to determine the purpose of the section (e.g. [TYPE::INTERPOSING](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section_1acab865f363d8ce9cd5444d2098510325aa42bbb9ad90bbc111b71c4473c72a526>)).

#### [` reserved1 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section9reserved1Ev>)

inline uint32\_t reserved1() const

According to the official `loader.h` file, this value is reserved for *offset* or *index*.

#### [` reserved2 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section9reserved2Ev>)

inline uint32\_t reserved2() const

According to the official `loader.h` file, this value is reserved for *count* or *sizeof*.

#### [` reserved3 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section9reserved3Ev>)

inline uint32\_t reserved3() const

This value is only present for 64 bits Mach-O files. In that case, the value is *reserved*.

#### [` flags_list `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section10flags_listEv>)

std::vector&lt;[FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGSE> "LIEF::MachO::Section::FLAGS")&gt; flags\_list() const

Return the [Section::flags](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section_1afdbea2af4e8cbc4f144649cbad3cedd0>) as a list of [Section::FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section_1aa38bb45cc5f893c97bdf65aa6acd95c1>).

> **See also**
> 
> [flags](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section_1afdbea2af4e8cbc4f144649cbad3cedd0>)

#### [` raw_flags `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section9raw_flagsEv>)

inline uint32\_t raw\_flags() const

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) flags without applying the SECTION\_FLAGS\_MASK mask.

#### [` has_segment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section11has_segmentEv>)

inline bool has\_segment() const

Check if this section is correctly linked with a [MachO::SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>).

#### [` segment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section7segmentEv>)

inline [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") \*segment()

The segment associated with this section or a nullptr if not present.

#### [` segment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section7segmentEv>)

inline const [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") \*segment() const

#### [` stream `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section6streamEv>)

std::unique\_ptr&lt;[SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream")&gt; stream() const

Return a stream over the content of this section.

#### [` clear `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5clearE7uint8_t>)

inline void clear(uint8\_t v)

Clear the content of this section by filling its values with the byte provided in parameter.

#### [` relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section11relocationsEv>)

inline [it\_relocations](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section14it_relocationsE> "LIEF::MachO::Section::it_relocations") relocations()

Return an iterator over the [MachO::Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>) associated with this section.

This iterator is likely to be empty for executables and libraries while it should not be for object files (`.o`)

#### [` relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section11relocationsEv>)

inline [it\_const\_relocations](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section20it_const_relocationsE> "LIEF::MachO::Section::it_const_relocations") relocations() const

#### [` segment_name `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section12segment_nameERKNSt6stringE>)

void segment\_name(const std::string &amp;name)

#### [` address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section7addressE8uint64_t>)

inline void address(uint64\_t address)

#### [` alignment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section9alignmentE8uint32_t>)

inline void alignment(uint32\_t align)

#### [` relocation_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section17relocation_offsetE8uint32_t>)

inline void relocation\_offset(uint32\_t offset)

#### [` numberof_relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section20numberof_relocationsE8uint32_t>)

inline void numberof\_relocations(uint32\_t nb\_reloc)

#### [` flags `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5flagsE8uint32_t>)

inline void flags(uint32\_t flags)

#### [` flags `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5flagsENSt6vectorI5FLAGSEE>)

void flags(std::vector&lt;[FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGSE> "LIEF::MachO::Section::FLAGS")&gt; flags)

#### [` type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4typeE4TYPE>)

inline void type([TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPEE> "LIEF::MachO::Section::TYPE") type)

#### [` reserved1 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section9reserved1E8uint32_t>)

inline void reserved1(uint32\_t reserved1)

#### [` reserved2 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section9reserved2E8uint32_t>)

inline void reserved2(uint32\_t reserved2)

#### [` reserved3 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section9reserved3E8uint32_t>)

inline void reserved3(uint32\_t reserved3)

#### [` has `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section3hasE5FLAGS>)

bool has([FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGSE> "LIEF::MachO::Section::FLAGS") flag) const

Check if the section has the given [Section::FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section_1aa38bb45cc5f893c97bdf65aa6acd95c1>) flag.

#### [` add `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section3addE5FLAGS>)

void add([FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGSE> "LIEF::MachO::Section::FLAGS") flag)

Append a [Section::FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section_1aa38bb45cc5f893c97bdf65aa6acd95c1>) to the current section.

#### [` remove `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section6removeE5FLAGS>)

void remove([FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGSE> "LIEF::MachO::Section::FLAGS") flag)

Remove a [Section::FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section_1aa38bb45cc5f893c97bdf65aa6acd95c1>) to the current section.

#### [` operator+= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionpLE5FLAGS>)

inline [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") &amp;operator+=([FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGSE> "LIEF::MachO::Section::FLAGS") flag)

#### [` operator-= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionmIE5FLAGS>)

inline [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") &amp;operator-=([FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section5FLAGSE> "LIEF::MachO::Section::FLAGS") flag)

#### [` Tcast `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0ENK4LIEF5MachO7Section4castEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0ENK4LIEF5MachO7Section4castEPK1Tv> "LIEF::MachO::Section::cast::T") \*cast() const

#### [` Tcast `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0EN4LIEF5MachO7Section4castEP1Tv>)

template&lt;class T&gt;  
inline [T](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0EN4LIEF5MachO7Section4castEP1Tv> "LIEF::MachO::Section::cast::T") \*cast()

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Section6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Functions

#### [` create `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section6createERKN7details10section_32E>)

static std::unique\_ptr&lt;[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section")&gt; create(const details::section\_32 &amp;sec)

#### [` create `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section6createERKN7details10section_64E>)

static std::unique\_ptr&lt;[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section")&gt; create(const details::section\_64 &amp;sec)

#### [` create `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section6createENSt6stringERK9content_t4TYPE>)

static std::unique\_ptr&lt;[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section")&gt; create(std::string name, const [content\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section9content_tE> "LIEF::MachO::Section::content_t") &amp;content, [TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPEE> "LIEF::MachO::Section::TYPE") type = [TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPEE> "LIEF::MachO::Section::TYPE")::[REGULAR](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE7REGULARE> "LIEF::MachO::Section::TYPE::REGULAR"))

#### [` create `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section6createENSt6stringE4TYPE>)

static inline std::unique\_ptr&lt;[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section")&gt; create(std::string name, [TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPEE> "LIEF::MachO::Section::TYPE") type = [TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPEE> "LIEF::MachO::Section::TYPE")::[REGULAR](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section4TYPE7REGULARE> "LIEF::MachO::Section::TYPE::REGULAR"))

Public Static Attributes

#### [` FLAGS_MASK `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section10FLAGS_MASKE>)

static auto FLAGS\_MASK = uint32\_t(0xffffff00u)

#### [` TYPE_MASK `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Section9TYPE_MASKE>)

static auto TYPE\_MASK = uint32\_t(0xff)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionlsERNSt7ostreamERK7Section>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") &amp;section)

---

## [ThreadLocalVariables](<https://lief.re/doc/latest/formats/macho/cpp.html#threadlocalvariables>)

### [` ThreadLocalVariables `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariablesE>)

class ThreadLocalVariables : public LIEF::MachO::[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section")

This class represents a MachO section with type [Section::TYPE::THREAD\_LOCAL\_VARIABLES](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section_1acab865f363d8ce9cd5444d2098510325a06d21f2ebb842455355c719b4e94af63>) (`S_THREAD_LOCAL_VARIABLES`).

Such a section contains an array of thread-local variable descriptors ([Thunk](<https://lief.re/doc/latest/formats/macho/cpp.html#structLIEF_1_1MachO_1_1ThreadLocalVariables_1_1Thunk>)) that the dynamic linker (dyld) uses to lazily initialize thread-local storage (TLS) on first access.

Each descriptor holds a pointer to the initializer function, a TLS key, and the offset of the variable in the TLS block.

Public Types

#### [` thunks_it `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables9thunks_itE>)

using thunks\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorE> "LIEF::MachO::ThreadLocalVariables::Iterator")&gt;

Public Functions

#### [` ThreadLocalVariables `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables20ThreadLocalVariablesEv>)

ThreadLocalVariables()

#### [` ThreadLocalVariables `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables20ThreadLocalVariablesERK20ThreadLocalVariables>)

ThreadLocalVariables(const [ThreadLocalVariables](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables20ThreadLocalVariablesERK20ThreadLocalVariables> "LIEF::MachO::ThreadLocalVariables::ThreadLocalVariables")&amp;) = default

#### [` ThreadLocalVariables `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables20ThreadLocalVariablesERR20ThreadLocalVariables>)

ThreadLocalVariables([ThreadLocalVariables](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables20ThreadLocalVariablesERR20ThreadLocalVariables> "LIEF::MachO::ThreadLocalVariables::ThreadLocalVariables")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariablesaSERK20ThreadLocalVariables>)

[ThreadLocalVariables](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariablesE> "LIEF::MachO::ThreadLocalVariables") &amp;operator=(const [ThreadLocalVariables](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariablesE> "LIEF::MachO::ThreadLocalVariables")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariablesaSERR20ThreadLocalVariables>)

[ThreadLocalVariables](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariablesE> "LIEF::MachO::ThreadLocalVariables") &amp;operator=([ThreadLocalVariables](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariablesE> "LIEF::MachO::ThreadLocalVariables")&amp;&amp;) noexcept = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20ThreadLocalVariables5cloneEv>)

inline virtual std::unique\_ptr&lt;[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables7SectionERKN7details10section_32E> "LIEF::MachO::ThreadLocalVariables::Section")&gt; clone() const override

#### [` thunks `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20ThreadLocalVariables6thunksEv>)

inline [thunks\_it](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables9thunks_itE> "LIEF::MachO::ThreadLocalVariables::thunks_it") thunks() const

Return an iterator range over the [Thunk](<https://lief.re/doc/latest/formats/macho/cpp.html#structLIEF_1_1MachO_1_1ThreadLocalVariables_1_1Thunk>) descriptors stored in this section.

#### [` nb_thunks `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20ThreadLocalVariables9nb_thunksEv>)

size\_t nb\_thunks() const

Number of [Thunk](<https://lief.re/doc/latest/formats/macho/cpp.html#structLIEF_1_1MachO_1_1ThreadLocalVariables_1_1Thunk>) descriptors in this section.

#### [` get `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20ThreadLocalVariables3getE6size_t>)

std::optional&lt;[Thunk](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables5ThunkE> "LIEF::MachO::ThreadLocalVariables::Thunk")&gt; get(size\_t idx) const

Access the [Thunk](<https://lief.re/doc/latest/formats/macho/cpp.html#structLIEF_1_1MachO_1_1ThreadLocalVariables_1_1Thunk>) at the given `idx`, or return an empty optional if the index is out of range.

#### [` set `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables3setE6size_tRK5Thunk>)

void set(size\_t idx, const [Thunk](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables5ThunkE> "LIEF::MachO::ThreadLocalVariables::Thunk") &amp;thunk)

Change the [Thunk](<https://lief.re/doc/latest/formats/macho/cpp.html#structLIEF_1_1MachO_1_1ThreadLocalVariables_1_1Thunk>) at the given `idx`.

#### [` operator[] `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20ThreadLocalVariablesixE6size_t>)

inline std::optional&lt;[Thunk](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables5ThunkE> "LIEF::MachO::ThreadLocalVariables::Thunk")&gt; operator[](size\_t idx) const

Access the [Thunk](<https://lief.re/doc/latest/formats/macho/cpp.html#structLIEF_1_1MachO_1_1ThreadLocalVariables_1_1Thunk>) at the given `idx`.

#### [` ~ThreadLocalVariables `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariablesD0Ev>)

~ThreadLocalVariables() override = default

#### [` Section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables7SectionERKN7details10section_32E>)

Section(const details::section\_32 &amp;sec)

#### [` Section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables7SectionERKN7details10section_64E>)

Section(const details::section\_64 &amp;sec)

#### [` Section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables7SectionERR7Section>)

Section([Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables7SectionERR7Section> "LIEF::MachO::ThreadLocalVariables::Section")&amp;&amp;)

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables7classofEPK7Section>)

static inline bool classof(const [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables7SectionERKN7details10section_32E> "LIEF::MachO::ThreadLocalVariables::Section") \*section)

Friends

**friend class Section**

#### [` Thunk `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables5ThunkE>)

struct Thunk

Descriptor for a single thread-local variable.

The layout mirrors the `tlv_descriptor` structure defined in `<mach-o/loader.h>` (see also `libdyld/ThreadLocalVariables.h` in dyld).

Public Functions

##### [` to_string `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20ThreadLocalVariables5Thunk9to_stringEv>)

std::string to\_string() const

Public Members

##### [` func `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables5Thunk4funcE>)

uint64\_t func = 0

Address of the initializer function (`tlv_thunk`).

##### [` key `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables5Thunk3keyE>)

uint64\_t key = 0

`pthread_key_t` key used by the runtime

##### [` offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables5Thunk6offsetE>)

uint64\_t offset = 0

Offset of the variable in the TLS block.

Friends

##### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables5ThunklsERNSt7ostreamERK5Thunk>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Thunk](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables5ThunkE> "LIEF::MachO::ThreadLocalVariables::Thunk") &amp;thunk)

#### [` Iterator `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorE> "LIEF::MachO::ThreadLocalVariables::Iterator"), std::random\_access\_iterator\_tag, const [Thunk](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables5ThunkE> "LIEF::MachO::ThreadLocalVariables::Thunk")&gt;

Random-access iterator that materializes [Thunk](<https://lief.re/doc/latest/formats/macho/cpp.html#structLIEF_1_1MachO_1_1ThreadLocalVariables_1_1Thunk>) values on the fly from the raw section content.

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8Iterator8IteratorEv>)

Iterator() = default

##### [` Iterator `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8Iterator8IteratorERK20ThreadLocalVariables6size_t>)

inline Iterator(const [ThreadLocalVariables](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariablesE> "LIEF::MachO::ThreadLocalVariables") &amp;parent, size\_t pos)

##### [` Iterator `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8Iterator8IteratorERK8Iterator> "LIEF::MachO::ThreadLocalVariables::Iterator::Iterator")&amp;) = default

##### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorE> "LIEF::MachO::ThreadLocalVariables::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorE> "LIEF::MachO::ThreadLocalVariables::Iterator")&amp;) = default

##### [` Iterator `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8Iterator8IteratorERR8Iterator> "LIEF::MachO::ThreadLocalVariables::Iterator::Iterator")&amp;&amp;) noexcept = default

##### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorE> "LIEF::MachO::ThreadLocalVariables::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorE> "LIEF::MachO::ThreadLocalVariables::Iterator")&amp;&amp;) noexcept = default

##### [` ~Iterator `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorD0Ev>)

~Iterator() = default

##### [` operator< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20ThreadLocalVariables8IteratorltERK8Iterator>)

inline bool operator&lt;(const [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorE> "LIEF::MachO::ThreadLocalVariables::Iterator") &amp;rhs) const

##### [` operator- `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20ThreadLocalVariables8IteratormiERK8Iterator>)

inline std::ptrdiff\_t operator-(const [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorE> "LIEF::MachO::ThreadLocalVariables::Iterator") &amp;R) const

##### [` operator+= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorpLENSt9ptrdiff_tE>)

inline [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorE> "LIEF::MachO::ThreadLocalVariables::Iterator") &amp;operator+=(std::ptrdiff\_t n)

##### [` operator-= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratormIENSt9ptrdiff_tE>)

inline [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorE> "LIEF::MachO::ThreadLocalVariables::Iterator") &amp;operator-=(std::ptrdiff\_t n)

##### [` operator* `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO20ThreadLocalVariables8IteratormlEv>)

inline [Thunk](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables5ThunkE> "LIEF::MachO::ThreadLocalVariables::Thunk") operator\*() const

Friends

##### [` operator== `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratoreqERK8IteratorRK8Iterator>)

inline friend bool operator==(const [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorE> "LIEF::MachO::ThreadLocalVariables::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorE> "LIEF::MachO::ThreadLocalVariables::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorE> "LIEF::MachO::ThreadLocalVariables::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO20ThreadLocalVariables8IteratorE> "LIEF::MachO::ThreadLocalVariables::Iterator") &amp;RHS)

---

## [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#segmentcommand>)

### [` SegmentCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE>)

class SegmentCommand : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class which represents a [LoadCommand::TYPE::SEGMENT](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand_1ae233a759e54dbc70715dcfb6465637b1a49f1f9beb48e7b006a35b2377403bea8>) / [LoadCommand::TYPE::SEGMENT\_64](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand_1ae233a759e54dbc70715dcfb6465637b1a1f010e62350ffaee51589983c115c8be>) command.

Subclassed by LIEF::MachO::LinkEdit

Public Types

#### [` FLAGS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand5FLAGSE>)

enum class FLAGS : uint64\_t

*Values:*

##### [` HIGHVM `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand5FLAGS6HIGHVME>)

enumerator HIGHVM = 0x1u

The file contents for this segment are for the high part of the virtual memory space; the low part is zero filled (for stacks in core files).

##### [` FVMLIB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand5FLAGS6FVMLIBE>)

enumerator FVMLIB = 0x2u

This segment is the VM that is allocated by a fixed VM library, for overlap checking in the link editor.

##### [` NORELOC `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand5FLAGS7NORELOCE>)

enumerator NORELOC = 0x4u

This segment has nothing that was relocated in it and nothing relocated to it. It may be safely replaced without relocation.

##### [` PROTECTED_VERSION_1 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand5FLAGS19PROTECTED_VERSION_1E>)

enumerator PROTECTED\_VERSION\_1 = 0x8u

##### [` READ_ONLY `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand5FLAGS9READ_ONLYE>)

enumerator READ\_ONLY = 0x10u

#### [` VM_PROTECTIONS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand14VM_PROTECTIONSE>)

enum class VM\_PROTECTIONS

Values for segment\_command.initprot. From &lt;mach/vm\_prot.h&gt;.

*Values:*

##### [` READ `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand14VM_PROTECTIONS4READE>)

enumerator READ = 0x1

Reading data within the segment is allowed.

##### [` WRITE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand14VM_PROTECTIONS5WRITEE>)

enumerator WRITE = 0x2

Writing data within the segment is allowed.

##### [` EXECUTE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand14VM_PROTECTIONS7EXECUTEE>)

enumerator EXECUTE = 0x4

Executing data within the segment is allowed.

#### [` content_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand9content_tE>)

using content\_t = std::vector&lt;uint8\_t&gt;

#### [` sections_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand10sections_tE>)

using sections\_t = std::vector&lt;std::unique\_ptr&lt;[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section")&gt;&gt;

Internal container for storing Mach-O [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>).

#### [` it_sections `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand11it_sectionsE>)

using it\_sections = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[sections\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand10sections_tE> "LIEF::MachO::SegmentCommand::sections_t")&amp;, [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section")\*&gt;

Iterator which outputs [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>)&amp;.

#### [` it_const_sections `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand17it_const_sectionsE>)

using it\_const\_sections = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [sections\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand10sections_tE> "LIEF::MachO::SegmentCommand::sections_t")&amp;, const [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section")\*&gt;

Iterator which outputs const [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>)&amp;.

#### [` relocations_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand13relocations_tE>)

using relocations\_t = std::vector&lt;std::unique\_ptr&lt;[Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation")&gt;&gt;

Internal container for storing Mach-O [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>).

#### [` it_relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand14it_relocationsE>)

using it\_relocations = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[relocations\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand13relocations_tE> "LIEF::MachO::SegmentCommand::relocations_t")&amp;, [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation")\*&gt;

Iterator which outputs [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>)&amp;.

#### [` it_const_relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand20it_const_relocationsE>)

using it\_const\_relocations = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [relocations\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand13relocations_tE> "LIEF::MachO::SegmentCommand::relocations_t")&amp;, const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation")\*&gt;

Iterator which outputs const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>)&amp;.

Public Functions

#### [` SegmentCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand14SegmentCommandEv>)

SegmentCommand()

#### [` SegmentCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand14SegmentCommandERKN7details18segment_command_32E>)

SegmentCommand(const details::segment\_command\_32 &amp;cmd)

#### [` SegmentCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand14SegmentCommandERKN7details18segment_command_64E>)

SegmentCommand(const details::segment\_command\_64 &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandaSE14SegmentCommand>)

[SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") &amp;operator=([SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") other)

#### [` SegmentCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand14SegmentCommandERK14SegmentCommand>)

SegmentCommand(const [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand14SegmentCommandERK14SegmentCommand> "LIEF::MachO::SegmentCommand::SegmentCommand") &amp;copy)

#### [` SegmentCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand14SegmentCommandENSt6stringE9content_t>)

SegmentCommand(std::string name, [content\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand9content_tE> "LIEF::MachO::SegmentCommand::content_t") content)

#### [` SegmentCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand14SegmentCommandENSt6stringE>)

SegmentCommand(std::string name)

#### [` swap `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand4swapER14SegmentCommand>)

void swap([SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") &amp;other) noexcept

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` ~SegmentCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandD0Ev>)

~SegmentCommand() override

#### [` name `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand4nameEv>)

inline std::string\_view name() const

Name of the segment (e.g. `__TEXT`).

#### [` virtual_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand15virtual_addressEv>)

inline uint64\_t virtual\_address() const

Absolute virtual base address of the segment.

#### [` virtual_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand12virtual_sizeEv>)

inline uint64\_t virtual\_size() const

Virtual size of the segment.

#### [` file_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand9file_sizeEv>)

inline uint64\_t file\_size() const

Size of this segment in the binary file.

#### [` file_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand11file_offsetEv>)

inline uint64\_t file\_offset() const

Offset of the data of this segment in the file.

#### [` max_protection `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand14max_protectionEv>)

inline uint32\_t max\_protection() const

The maximum of protections for this segment (cf. [VM\_PROTECTIONS](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand_1a7e67b23821e8516801981eb147995419>)).

#### [` init_protection `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand15init_protectionEv>)

inline uint32\_t init\_protection() const

The initial protections of this segment (cf. [VM\_PROTECTIONS](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand_1a7e67b23821e8516801981eb147995419>)).

#### [` numberof_sections `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand17numberof_sectionsEv>)

inline uint32\_t numberof\_sections() const

The number of sections associated with this segment.

#### [` flags `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand5flagsEv>)

inline uint32\_t flags() const

Flags associated with this segment (cf. [SegmentCommand::FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand_1a5e3d770abcad19149f7a30046e6634fa>)).

#### [` sections `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand8sectionsEv>)

inline [it\_sections](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand11it_sectionsE> "LIEF::MachO::SegmentCommand::it_sections") sections()

Return an iterator over the [MachO::Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) linked to this segment.

#### [` sections `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand8sectionsEv>)

inline [it\_const\_sections](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand17it_const_sectionsE> "LIEF::MachO::SegmentCommand::it_const_sections") sections() const

#### [` relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand11relocationsEv>)

inline [it\_relocations](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand14it_relocationsE> "LIEF::MachO::SegmentCommand::it_relocations") relocations()

Return an iterator over the [MachO::Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>) linked to this segment.

For Mach-O executable or library this iterator should be empty as the relocations are managed by the Dyld::rebase\_opcodes. On the other hand, for object files (`.o`) this iterator should not be empty

#### [` relocations `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand11relocationsEv>)

inline [it\_const\_relocations](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand20it_const_relocationsE> "LIEF::MachO::SegmentCommand::it_const_relocations") relocations() const

#### [` get_section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand11get_sectionERKNSt6stringE>)

const [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") \*get\_section(const std::string &amp;name) const

Get the section with the given name.

#### [` get_section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand11get_sectionERKNSt6stringE>)

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") \*get\_section(const std::string &amp;name)

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand7contentEv>)

inline span&lt;const uint8\_t&gt; content() const

The raw content of this segment.

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand7contentEv>)

inline span&lt;uint8\_t&gt; content()

#### [` stream `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand6streamEv>)

std::unique\_ptr&lt;[SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream")&gt; stream() const

Return a stream over the content of this segment.

#### [` index `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand5indexEv>)

inline int8\_t index() const

The original index of this segment or -1 if not defined.

#### [` name `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand4nameENSt6stringE>)

inline void name(std::string name)

#### [` virtual_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand15virtual_addressE8uint64_t>)

inline void virtual\_address(uint64\_t virtual\_address)

#### [` virtual_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand12virtual_sizeE8uint64_t>)

inline void virtual\_size(uint64\_t virtual\_size)

#### [` file_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand11file_offsetE8uint64_t>)

inline void file\_offset(uint64\_t file\_offset)

#### [` file_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand9file_sizeE8uint64_t>)

inline void file\_size(uint64\_t file\_size)

#### [` max_protection `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand14max_protectionE8uint32_t>)

inline void max\_protection(uint32\_t max\_protection)

#### [` init_protection `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand15init_protectionE8uint32_t>)

inline void init\_protection(uint32\_t init\_protection)

#### [` numberof_sections `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand17numberof_sectionsE8uint32_t>)

inline void numberof\_sections(uint32\_t nb\_section)

#### [` flags `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand5flagsE8uint32_t>)

inline void flags(uint32\_t flags)

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand7contentE9content_t>)

void content([content\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand9content_tE> "LIEF::MachO::SegmentCommand::content_t") data)

#### [` add_section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand11add_sectionERK7Section>)

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") &amp;add\_section(const [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") &amp;section)

Add a new section in this segment.

#### [` remove_all_sections `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand19remove_all_sectionsEv>)

void remove\_all\_sections()

Remove all the sections linked to this segment.

#### [` has `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand3hasERK7Section>)

bool has(const [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") &amp;section) const

Check if the current segment embeds the given section.

#### [` has_section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand11has_sectionERKNSt6stringE>)

bool has\_section(const std::string &amp;section\_name) const

Check if the current segment embeds the given section name.

#### [` is `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand2isE14VM_PROTECTIONS>)

inline bool is([VM\_PROTECTIONS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand14VM_PROTECTIONSE> "LIEF::MachO::SegmentCommand::VM_PROTECTIONS") prot) const

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14SegmentCommand6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommand7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#symbol>)

### [` Symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE>)

class Symbol : public LIEF::[Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolE> "LIEF::Symbol")

Class that represents a [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>) in a Mach-O file.

A Mach-O symbol can come from:

1. The symbols command (LC\_SYMTAB / [SymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SymbolCommand>))
2. The Dyld Export trie
3. The Dyld [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>) bindings

Public Types

#### [` CATEGORY `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol8CATEGORYE>)

enum class CATEGORY : uint32\_t

Category of the symbol when the symbol comes from the `LC_SYMTAB` command. The category is defined according to the `LC_DYSYMTAB` ([DynamicSymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DynamicSymbolCommand>)) command.

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol8CATEGORY4NONEE>)

enumerator NONE = 0

##### [` LOCAL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol8CATEGORY5LOCALE>)

enumerator LOCAL

##### [` EXTERNAL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol8CATEGORY8EXTERNALE>)

enumerator EXTERNAL

##### [` UNDEFINED `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol8CATEGORY9UNDEFINEDE>)

enumerator UNDEFINED

##### [` INDIRECT_ABS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol8CATEGORY12INDIRECT_ABSE>)

enumerator INDIRECT\_ABS

##### [` INDIRECT_LOCAL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol8CATEGORY14INDIRECT_LOCALE>)

enumerator INDIRECT\_LOCAL

##### [` INDIRECT_ABS_LOCAL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol8CATEGORY18INDIRECT_ABS_LOCALE>)

enumerator INDIRECT\_ABS\_LOCAL

#### [` ORIGIN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol6ORIGINE>)

enum class ORIGIN : uint32\_t

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol6ORIGIN7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` DYLD_EXPORT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol6ORIGIN11DYLD_EXPORTE>)

enumerator DYLD\_EXPORT = 1

##### [` DYLD_BIND `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol6ORIGIN9DYLD_BINDE>)

enumerator DYLD\_BIND = 2

The symbol comes from the binding opcodes.

##### [` SYMTAB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol6ORIGIN6SYMTABE>)

enumerator SYMTAB = 3

The symbol comes from the LC\_SYMTAB command.

#### [` TYPE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol4TYPEE>)

enum class TYPE : uint32\_t

*Values:*

##### [` UNDEFINED `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol4TYPE9UNDEFINEDE>)

enumerator UNDEFINED = 0x0u

The symbol is undefined. It is referenced in a different module.

##### [` ABSOLUTE_SYM `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol4TYPE12ABSOLUTE_SYME>)

enumerator ABSOLUTE\_SYM = 0x2u

The symbol is absolute. The linker doesn’t update its value.

##### [` SECTION `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol4TYPE7SECTIONE>)

enumerator SECTION = 0xeu

The symbol is defined in the section number given in nlist\_base.n\_sect.

##### [` PREBOUND `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol4TYPE8PREBOUNDE>)

enumerator PREBOUND = 0xcu

The symbol is undefined and the image is using a prebound value for the symbol. Set the n\_sect field to NO\_SECT.

##### [` INDIRECT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol4TYPE8INDIRECTE>)

enumerator INDIRECT = 0xau

The symbol is defined to be the same as another symbol. The n\_value field is an index into the string table specifying the name of the other symbol. When that symbol is linked, both this and the other symbol point to the same defined type and value.

Public Functions

#### [` Symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol6SymbolEv>)

Symbol() = default

#### [` Symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol6SymbolERKN7details8nlist_32E>)

Symbol(const details::nlist\_32 &amp;cmd)

#### [` Symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol6SymbolERKN7details8nlist_64E>)

Symbol(const details::nlist\_64 &amp;cmd)

#### [` Symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol6SymbolE7uint8_t7uint8_t7uint8_t8uint64_t>)

inline Symbol(uint8\_t n\_type, uint8\_t n\_sect, uint8\_t n\_desc, uint64\_t value)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolaSE6Symbol>)

[Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") &amp;operator=([Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") other)

#### [` Symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol6SymbolERK6Symbol>)

Symbol(const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol6SymbolERK6Symbol> "LIEF::MachO::Symbol::Symbol") &amp;other)

#### [` swap `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol4swapER6Symbol>)

void swap([Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") &amp;other) noexcept

#### [` ~Symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolD0Ev>)

~Symbol() override = default

#### [` library_ordinal `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Symbol15library_ordinalEv>)

inline int library\_ordinal() const

#### [` raw_type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Symbol8raw_typeEv>)

inline uint8\_t raw\_type() const

Raw value of `nlist_xx.n_type`.

#### [` type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Symbol4typeEv>)

inline [TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol4TYPEE> "LIEF::MachO::Symbol::TYPE") type() const

Type as defined by `nlist_xx.n_type & N_TYPE`.

#### [` numberof_sections `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Symbol17numberof_sectionsEv>)

inline uint8\_t numberof\_sections() const

It returns the number of sections in which this symbol can be found. If the symbol can’t be found in any section, it returns 0 (NO\_SECT).

#### [` description `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Symbol11descriptionEv>)

inline uint16\_t description() const

Return information about the symbol (SYMBOL\_DESCRIPTIONS).

#### [` has_export_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Symbol15has_export_infoEv>)

inline bool has\_export\_info() const

True if the symbol is associated with an [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ExportInfo>) This value is set when the symbol comes from the Dyld Export trie.

#### [` export_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Symbol11export_infoEv>)

inline const [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo") \*export\_info() const

Return the [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ExportInfo>) associated with this symbol (or nullptr if not present).

> **See also**
> 
> [has\_export\_info](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol_1a854ff99706835f81ccbbd46d24bfaf79>)

#### [` export_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol11export_infoEv>)

inline [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo") \*export\_info()

#### [` has_binding_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Symbol16has_binding_infoEv>)

inline bool has\_binding\_info() const

True if the symbol is associated with a BindingInfo This value is set when the symbol comes from the Dyld symbol bindings.

#### [` binding_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Symbol12binding_infoEv>)

inline const BindingInfo \*binding\_info() const

Return the BindingInfo associated with this symbol (or nullptr if not present).

> **See also**
> 
> [has\_binding\_info](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol_1ae1cc2d59904884a6cf31f49b4d472196>)

#### [` binding_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol12binding_infoEv>)

inline BindingInfo \*binding\_info()

#### [` demangled_name `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Symbol14demangled_nameEv>)

std::string demangled\_name() const

Try to demangle the symbol or return an empty string if it is not possible.

#### [` is_external `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Symbol11is_externalEv>)

inline bool is\_external() const

True if the symbol is defined as an external symbol.

#### [` library `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Symbol7libraryEv>)

inline const [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE> "LIEF::MachO::DylibCommand") \*library() const

Return the library in which the symbol is defined. It returns a null pointer if the library can’t be resolved.

#### [` library `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol7libraryEv>)

inline [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE> "LIEF::MachO::DylibCommand") \*library()

#### [` origin `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Symbol6originEv>)

inline [ORIGIN](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol6ORIGINE> "LIEF::MachO::Symbol::ORIGIN") origin() const

Return the origin of the symbol: from LC\_SYMTAB command or from the Dyld information.

#### [` category `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Symbol8categoryEv>)

inline [CATEGORY](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol8CATEGORYE> "LIEF::MachO::Symbol::CATEGORY") category() const

Category of the symbol according to the `LC_DYSYMTAB` command.

#### [` raw_type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol8raw_typeE7uint8_t>)

inline void raw\_type(uint8\_t type)

#### [` numberof_sections `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol17numberof_sectionsE7uint8_t>)

inline void numberof\_sections(uint8\_t nbsections)

#### [` description `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol11descriptionE8uint16_t>)

inline void description(uint16\_t desc)

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Symbol6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Functions

#### [` is_valid_index_ordinal `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol22is_valid_index_ordinalEi>)

static inline bool is\_valid\_index\_ordinal(int idx)

#### [` indirect_abs `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol12indirect_absEv>)

static const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") &amp;indirect\_abs()

#### [` indirect_local `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol14indirect_localEv>)

static const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") &amp;indirect\_local()

#### [` indirect_abs_local `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol18indirect_abs_localEv>)

static const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") &amp;indirect\_abs\_local()

Public Static Attributes

#### [` SELF_LIBRARY_ORD `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol16SELF_LIBRARY_ORDE>)

static int SELF\_LIBRARY\_ORD = 0x0

#### [` MAIN_EXECUTABLE_ORD `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol19MAIN_EXECUTABLE_ORDE>)

static int MAIN\_EXECUTABLE\_ORD = 0xff

#### [` DYNAMIC_LOOKUP_ORD `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol18DYNAMIC_LOOKUP_ORDE>)

static int DYNAMIC\_LOOKUP\_ORD = 0xfe

#### [` TYPE_MASK `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Symbol9TYPE_MASKE>)

static uint32\_t TYPE\_MASK = 0x0e

Same as N\_TYPE.

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbollsERNSt7ostreamERK6Symbol>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") &amp;symbol)

---

## [SymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#symbolcommand>)

### [` SymbolCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommandE>)

class SymbolCommand : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the LC\_SYMTAB command.

Public Functions

#### [` SymbolCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommand13SymbolCommandEv>)

SymbolCommand() = default

#### [` SymbolCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommand13SymbolCommandERKN7details14symtab_commandE>)

SymbolCommand(const details::symtab\_command &amp;command)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommandaSERK13SymbolCommand>)

[SymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommandE> "LIEF::MachO::SymbolCommand") &amp;operator=(const [SymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommandE> "LIEF::MachO::SymbolCommand") &amp;copy) = default

#### [` SymbolCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommand13SymbolCommandERK13SymbolCommand>)

SymbolCommand(const [SymbolCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommand13SymbolCommandERK13SymbolCommand> "LIEF::MachO::SymbolCommand::SymbolCommand") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13SymbolCommand5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` ~SymbolCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommandD0Ev>)

~SymbolCommand() override = default

#### [` symbol_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13SymbolCommand13symbol_offsetEv>)

inline uint32\_t symbol\_offset() const

Offset from the start of the file to the n\_list associated with the command.

#### [` numberof_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13SymbolCommand16numberof_symbolsEv>)

inline uint32\_t numberof\_symbols() const

Number of symbols registered.

#### [` strings_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13SymbolCommand14strings_offsetEv>)

inline uint32\_t strings\_offset() const

Offset from the start of the file to the string table.

#### [` strings_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13SymbolCommand12strings_sizeEv>)

inline uint32\_t strings\_size() const

Size of the string table.

#### [` symbol_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommand13symbol_offsetE8uint32_t>)

inline void symbol\_offset(uint32\_t offset)

#### [` numberof_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommand16numberof_symbolsE8uint32_t>)

inline void numberof\_symbols(uint32\_t nb)

#### [` strings_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommand14strings_offsetE8uint32_t>)

inline void strings\_offset(uint32\_t offset)

#### [` strings_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommand12strings_sizeE8uint32_t>)

inline void strings\_size(uint32\_t size)

#### [` symbol_table `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13SymbolCommand12symbol_tableEv>)

inline span&lt;const uint8\_t&gt; symbol\_table() const

#### [` symbol_table `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommand12symbol_tableEv>)

inline span&lt;uint8\_t&gt; symbol\_table()

#### [` string_table `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13SymbolCommand12string_tableEv>)

inline span&lt;const uint8\_t&gt; string\_table() const

#### [` string_table `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommand12string_tableEv>)

inline span&lt;uint8\_t&gt; string\_table()

#### [` original_str_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13SymbolCommand17original_str_sizeEv>)

inline uint32\_t original\_str\_size() const

#### [` original_nb_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13SymbolCommand19original_nb_symbolsEv>)

inline uint32\_t original\_nb\_symbols() const

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13SymbolCommand5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13SymbolCommand6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SymbolCommand7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [UUIDCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#uuidcommand>)

### [` UUIDCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11UUIDCommandE>)

class UUIDCommand : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the UUID command.

Public Functions

#### [` UUIDCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11UUIDCommand11UUIDCommandEv>)

UUIDCommand() = default

#### [` UUIDCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11UUIDCommand11UUIDCommandERKN7details12uuid_commandE>)

UUIDCommand(const details::uuid\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11UUIDCommandaSERK11UUIDCommand>)

[UUIDCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11UUIDCommandE> "LIEF::MachO::UUIDCommand") &amp;operator=(const [UUIDCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11UUIDCommandE> "LIEF::MachO::UUIDCommand") &amp;copy) = default

#### [` UUIDCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11UUIDCommand11UUIDCommandERK11UUIDCommand>)

UUIDCommand(const [UUIDCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11UUIDCommand11UUIDCommandERK11UUIDCommand> "LIEF::MachO::UUIDCommand::UUIDCommand") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11UUIDCommand5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` ~UUIDCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11UUIDCommandD0Ev>)

~UUIDCommand() override = default

#### [` uuid `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11UUIDCommand4uuidEv>)

inline const uuid\_t &amp;uuid() const

The UUID as a 16-bytes array.

#### [` uuid `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11UUIDCommand4uuidERK6uuid_t>)

inline void uuid(const uuid\_t &amp;uuid)

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11UUIDCommand6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO11UUIDCommand5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11UUIDCommand7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Dyld Info](<https://lief.re/doc/latest/formats/macho/cpp.html#dyld-info>)

### [` DyldInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfoE>)

class DyldInfo : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the LC\_DYLD\_INFO and LC\_DYLD\_INFO\_ONLY commands.

Public Types

#### [` BINDING_ENCODING_VERSION `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo24BINDING_ENCODING_VERSIONE>)

enum class BINDING\_ENCODING\_VERSION

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo24BINDING_ENCODING_VERSION7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` V1 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo24BINDING_ENCODING_VERSION2V1E>)

enumerator V1

##### [` V2 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo24BINDING_ENCODING_VERSION2V2E>)

enumerator V2

#### [` REBASE_TYPE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo11REBASE_TYPEE>)

enum class REBASE\_TYPE : uint64\_t

*Values:*

##### [` POINTER `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo11REBASE_TYPE7POINTERE>)

enumerator POINTER = 1u

##### [` TEXT_ABSOLUTE32 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo11REBASE_TYPE15TEXT_ABSOLUTE32E>)

enumerator TEXT\_ABSOLUTE32 = 2u

##### [` TEXT_PCREL32 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo11REBASE_TYPE12TEXT_PCREL32E>)

enumerator TEXT\_PCREL32 = 3u

##### [` THREADED `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo11REBASE_TYPE8THREADEDE>)

enumerator THREADED = 102u

#### [` REBASE_OPCODES `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14REBASE_OPCODESE>)

enum class REBASE\_OPCODES : uint8\_t

*Values:*

##### [` DONE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14REBASE_OPCODES4DONEE>)

enumerator DONE = 0x00u

It’s finished.

##### [` SET_TYPE_IMM `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14REBASE_OPCODES12SET_TYPE_IMME>)

enumerator SET\_TYPE\_IMM = 0x10u

Set type to immediate (lower 4-bits). Used for ordinal numbers from 0-15.

##### [` SET_SEGMENT_AND_OFFSET_ULEB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14REBASE_OPCODES27SET_SEGMENT_AND_OFFSET_ULEBE>)

enumerator SET\_SEGMENT\_AND\_OFFSET\_ULEB = 0x20u

Set segment’s index to immediate (lower 4-bits) and segment’s offset to following ULEB128 encoding.

##### [` ADD_ADDR_ULEB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14REBASE_OPCODES13ADD_ADDR_ULEBE>)

enumerator ADD\_ADDR\_ULEB = 0x30u

Add segment’s offset with the following ULEB128 encoding.

##### [` ADD_ADDR_IMM_SCALED `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14REBASE_OPCODES19ADD_ADDR_IMM_SCALEDE>)

enumerator ADD\_ADDR\_IMM\_SCALED = 0x40u

Add segment’s offset with immediate scaling.

##### [` DO_REBASE_IMM_TIMES `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14REBASE_OPCODES19DO_REBASE_IMM_TIMESE>)

enumerator DO\_REBASE\_IMM\_TIMES = 0x50u

Rebase in the range of `[segment's offset; segment's offset + immediate * sizeof(ptr)]`.

##### [` DO_REBASE_ULEB_TIMES `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14REBASE_OPCODES20DO_REBASE_ULEB_TIMESE>)

enumerator DO\_REBASE\_ULEB\_TIMES = 0x60u

Same as REBASE\_OPCODE\_DO\_REBASE\_IMM\_TIMES but *immediate* is replaced with ULEB128 value.

##### [` DO_REBASE_ADD_ADDR_ULEB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14REBASE_OPCODES23DO_REBASE_ADD_ADDR_ULEBE>)

enumerator DO\_REBASE\_ADD\_ADDR\_ULEB = 0x70u

Rebase and increment segment’s offset with following ULEB128 encoding + pointer’s size.

##### [` DO_REBASE_ULEB_TIMES_SKIPPING_ULEB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14REBASE_OPCODES34DO_REBASE_ULEB_TIMES_SKIPPING_ULEBE>)

enumerator DO\_REBASE\_ULEB\_TIMES\_SKIPPING\_ULEB = 0x80u

Rebase and skip several bytes.

#### [` BIND_OPCODES `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODESE>)

enum class BIND\_OPCODES : uint8\_t

Opcodes used by Dyld info to bind symbols.

*Values:*

##### [` DONE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODES4DONEE>)

enumerator DONE = 0x00u

It’s finished.

##### [` SET_DYLIB_ORDINAL_IMM `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODES21SET_DYLIB_ORDINAL_IMME>)

enumerator SET\_DYLIB\_ORDINAL\_IMM = 0x10u

Set ordinal to immediate (lower 4-bits). Used for ordinal numbers from 0-15.

##### [` SET_DYLIB_ORDINAL_ULEB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODES22SET_DYLIB_ORDINAL_ULEBE>)

enumerator SET\_DYLIB\_ORDINAL\_ULEB = 0x20u

Set ordinal to following ULEB128 encoding. Used for ordinal numbers from 16+.

##### [` SET_DYLIB_SPECIAL_IMM `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODES21SET_DYLIB_SPECIAL_IMME>)

enumerator SET\_DYLIB\_SPECIAL\_IMM = 0x30u

Set ordinal, with 0 or negative number as immediate. The value is sign extended.

##### [` SET_SYMBOL_TRAILING_FLAGS_IMM `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODES29SET_SYMBOL_TRAILING_FLAGS_IMME>)

enumerator SET\_SYMBOL\_TRAILING\_FLAGS\_IMM = 0x40u

Set the following symbol (NULL-terminated char\*).

##### [` SET_TYPE_IMM `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODES12SET_TYPE_IMME>)

enumerator SET\_TYPE\_IMM = 0x50u

Set the type to immediate (lower 4-bits). See BIND\_TYPES.

##### [` SET_ADDEND_SLEB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODES15SET_ADDEND_SLEBE>)

enumerator SET\_ADDEND\_SLEB = 0x60u

Set the addend field to the following SLEB128 encoding.

##### [` SET_SEGMENT_AND_OFFSET_ULEB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODES27SET_SEGMENT_AND_OFFSET_ULEBE>)

enumerator SET\_SEGMENT\_AND\_OFFSET\_ULEB = 0x70u

Set Segment to immediate value, and address to the following SLEB128 encoding.

##### [` ADD_ADDR_ULEB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODES13ADD_ADDR_ULEBE>)

enumerator ADD\_ADDR\_ULEB = 0x80u

Set the address field to the following SLEB128 encoding.

##### [` DO_BIND `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODES7DO_BINDE>)

enumerator DO\_BIND = 0x90u

Perform binding of current table row.

##### [` DO_BIND_ADD_ADDR_ULEB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODES21DO_BIND_ADD_ADDR_ULEBE>)

enumerator DO\_BIND\_ADD\_ADDR\_ULEB = 0xA0u

Perform binding, also add following ULEB128 as address.

##### [` DO_BIND_ADD_ADDR_IMM_SCALED `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODES27DO_BIND_ADD_ADDR_IMM_SCALEDE>)

enumerator DO\_BIND\_ADD\_ADDR\_IMM\_SCALED = 0xB0u

Perform binding, also add immediate (lower 4-bits) using scaling.

##### [` DO_BIND_ULEB_TIMES_SKIPPING_ULEB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODES32DO_BIND_ULEB_TIMES_SKIPPING_ULEBE>)

enumerator DO\_BIND\_ULEB\_TIMES\_SKIPPING\_ULEB = 0xC0u

Perform binding for several symbols (as following ULEB128), and skip several bytes.

##### [` THREADED `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODES8THREADEDE>)

enumerator THREADED = 0xD0u

##### [` THREADED_APPLY `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODES14THREADED_APPLYE>)

enumerator THREADED\_APPLY = 0xD0u | 0x01u

##### [` THREADED_SET_BIND_ORDINAL_TABLE_SIZE_ULEB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12BIND_OPCODES41THREADED_SET_BIND_ORDINAL_TABLE_SIZE_ULEBE>)

enumerator THREADED\_SET\_BIND\_ORDINAL\_TABLE\_SIZE\_ULEB = 0xD0u | 0x00u

#### [` BIND_SUBOPCODE_THREADED `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo23BIND_SUBOPCODE_THREADEDE>)

enum class BIND\_SUBOPCODE\_THREADED : uint8\_t

*Values:*

##### [` SET_BIND_ORDINAL_TABLE_SIZE_ULEB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo23BIND_SUBOPCODE_THREADED32SET_BIND_ORDINAL_TABLE_SIZE_ULEBE>)

enumerator SET\_BIND\_ORDINAL\_TABLE\_SIZE\_ULEB = 0x00u

##### [` APPLY `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo23BIND_SUBOPCODE_THREADED5APPLYE>)

enumerator APPLY = 0x01u

#### [` BIND_SYMBOL_FLAGS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo17BIND_SYMBOL_FLAGSE>)

enum BIND\_SYMBOL\_FLAGS

*Values:*

##### [` WEAK_IMPORT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo17BIND_SYMBOL_FLAGS11WEAK_IMPORTE>)

enumerator WEAK\_IMPORT = 0x1u

##### [` NON_WEAK_DEFINITION `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo17BIND_SYMBOL_FLAGS19NON_WEAK_DEFINITIONE>)

enumerator NON\_WEAK\_DEFINITION = 0x8u

#### [` info_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo6info_tE>)

using info\_t = std::pair&lt;uint32\_t, uint32\_t&gt;

Tuple of `offset` and `size`.

#### [` binding_info_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14binding_info_tE>)

using binding\_info\_t = std::vector&lt;std::unique\_ptr&lt;[DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfoE> "LIEF::MachO::DyldBindingInfo")&gt;&gt;

Internal container for storing [DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldBindingInfo>).

#### [` it_binding_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo15it_binding_infoE>)

using it\_binding\_info = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[binding\_info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14binding_info_tE> "LIEF::MachO::DyldInfo::binding_info_t")&amp;, [DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfoE> "LIEF::MachO::DyldBindingInfo")\*&gt;

Iterator which outputs [DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldBindingInfo>)&amp;.

#### [` it_const_binding_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo21it_const_binding_infoE>)

using it\_const\_binding\_info = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [binding\_info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14binding_info_tE> "LIEF::MachO::DyldInfo::binding_info_t")&amp;, [DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfoE> "LIEF::MachO::DyldBindingInfo")\*&gt;

Iterator which outputs const [DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldBindingInfo>)&amp;.

#### [` export_info_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo13export_info_tE>)

using export\_info\_t = std::vector&lt;std::unique\_ptr&lt;[ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo")&gt;&gt;

Internal container for storing [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ExportInfo>).

#### [` it_export_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14it_export_infoE>)

using it\_export\_info = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[export\_info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo13export_info_tE> "LIEF::MachO::DyldInfo::export_info_t")&amp;, [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo")\*&gt;

Iterator which outputs const [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ExportInfo>)&amp;.

#### [` it_const_export_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo20it_const_export_infoE>)

using it\_const\_export\_info = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [export\_info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo13export_info_tE> "LIEF::MachO::DyldInfo::export_info_t")&amp;, [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo")\*&gt;

Iterator which outputs const [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ExportInfo>)&amp;.

Public Functions

#### [` DyldInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo8DyldInfoEv>)

DyldInfo()

#### [` DyldInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo8DyldInfoERKN7details17dyld_info_commandE>)

DyldInfo(const details::dyld\_info\_command &amp;dyld\_info\_cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfoaSE8DyldInfo>)

[DyldInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfoE> "LIEF::MachO::DyldInfo") &amp;operator=([DyldInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfoE> "LIEF::MachO::DyldInfo") other)

#### [` DyldInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo8DyldInfoERK8DyldInfo>)

DyldInfo(const [DyldInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo8DyldInfoERK8DyldInfo> "LIEF::MachO::DyldInfo::DyldInfo") &amp;copy)

#### [` swap `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo4swapER8DyldInfo>)

void swap([DyldInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfoE> "LIEF::MachO::DyldInfo") &amp;other) noexcept

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` ~DyldInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfoD0Ev>)

~DyldInfo() override

#### [` rebase `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo6rebaseEv>)

inline const [info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo6info_tE> "LIEF::MachO::DyldInfo::info_t") &amp;rebase() const

*Rebase* information

Dyld rebases an image whenever dyld loads it at an address different from its preferred address. The rebase information is a stream of byte sized opcodes for which symbolic names start with REBASE\_OPCODE\_. Conceptually the rebase information is a table of tuples: &lt;seg-index, seg-offset, type&gt; The opcodes are a compressed way to encode the table by only encoding when a column changes. In addition simple patterns like “every nth offset for m times” can be encoded in a few bytes.

> **See also**
> 
> `/usr/include/mach-o/loader.h`

#### [` rebase_opcodes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo14rebase_opcodesEv>)

inline span&lt;const uint8\_t&gt; rebase\_opcodes() const

Return Rebase’s opcodes as raw data.

#### [` rebase_opcodes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14rebase_opcodesEv>)

inline span&lt;uint8\_t&gt; rebase\_opcodes()

#### [` rebase_opcodes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14rebase_opcodesE8buffer_t>)

void rebase\_opcodes(buffer\_t raw)

Set new opcodes.

#### [` show_rebases_opcodes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo20show_rebases_opcodesEv>)

std::string show\_rebases\_opcodes() const

Return the rebase opcodes in a human-readable way.

#### [` bind `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo4bindEv>)

inline const [info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo6info_tE> "LIEF::MachO::DyldInfo::info_t") &amp;bind() const

*Bind* information

Dyld binds an image during the loading process, if the image requires any pointers to be initialized to symbols in other images. The rebase information is a stream of byte sized opcodes for which symbolic names start with BIND\_OPCODE\_. Conceptually the bind information is a table of tuples: &lt;seg-index, seg-offset, type, symbol-library-ordinal, symbol-name, addend&gt; The opcodes are a compressed way to encode the table by only encoding when a column changes. In addition simple patterns like for runs of pointers initialized to the same value can be encoded in a few bytes.

> **See also**
> 
> `/usr/include/mach-o/loader.h`

#### [` bind_opcodes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo12bind_opcodesEv>)

inline span&lt;const uint8\_t&gt; bind\_opcodes() const

Return Binding’s opcodes as raw data.

#### [` bind_opcodes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12bind_opcodesEv>)

inline span&lt;uint8\_t&gt; bind\_opcodes()

#### [` bind_opcodes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo12bind_opcodesE8buffer_t>)

void bind\_opcodes(buffer\_t raw)

Set new opcodes.

#### [` show_bind_opcodes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo17show_bind_opcodesEv>)

std::string show\_bind\_opcodes() const

Return the bind opcodes in a human-readable way.

#### [` weak_bind `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo9weak_bindEv>)

inline const [info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo6info_tE> "LIEF::MachO::DyldInfo::info_t") &amp;weak\_bind() const

*Weak Bind* information

Some C++ programs require dyld to unique symbols so that all images in the process use the same copy of some code/data. This step is done after binding. The content of the weak\_bind info is an opcode stream like the bind\_info. But it is sorted alphabetically by symbol name. This enables dyld to walk all images with weak binding information in order and look for collisions. If there are no collisions, dyld does no updating. That means that some fixups are also encoded in the bind\_info. For instance, all calls to “operator new” are first bound to libstdc++.dylib using the information in bind\_info. Then if some image overrides operator new that is detected when the weak\_bind information is processed and the call to operator new is then rebound.

> **See also**
> 
> `/usr/include/mach-o/loader.h`

#### [` weak_bind_opcodes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo17weak_bind_opcodesEv>)

inline span&lt;const uint8\_t&gt; weak\_bind\_opcodes() const

Return **Weak** Binding’s opcodes as raw data.

#### [` weak_bind_opcodes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo17weak_bind_opcodesEv>)

inline span&lt;uint8\_t&gt; weak\_bind\_opcodes()

#### [` weak_bind_opcodes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo17weak_bind_opcodesE8buffer_t>)

void weak\_bind\_opcodes(buffer\_t raw)

Set new opcodes.

#### [` show_weak_bind_opcodes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo22show_weak_bind_opcodesEv>)

std::string show\_weak\_bind\_opcodes() const

Return the bind opcodes in a human-readable way.

#### [` lazy_bind `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo9lazy_bindEv>)

inline const [info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo6info_tE> "LIEF::MachO::DyldInfo::info_t") &amp;lazy\_bind() const

*Lazy Bind* information

Some uses of external symbols do not need to be bound immediately. Instead, they can be lazily bound on first use. The lazy\_bind area contains a stream of BIND opcodes to bind all lazy symbols. Normal use is that dyld ignores the lazy\_bind section when loading an image. Instead, the static linker arranged for the lazy pointer to initially point to a helper function which pushes the offset into the lazy\_bind area for the symbol needing to be bound, then jumps to dyld which simply adds the offset to lazy\_bind\_off to get the information on what to bind.

> **See also**
> 
> `/usr/include/mach-o/loader.h`

#### [` lazy_bind_opcodes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo17lazy_bind_opcodesEv>)

inline span&lt;const uint8\_t&gt; lazy\_bind\_opcodes() const

Return **Lazy** Binding’s opcodes as raw data.

#### [` lazy_bind_opcodes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo17lazy_bind_opcodesEv>)

inline span&lt;uint8\_t&gt; lazy\_bind\_opcodes()

#### [` lazy_bind_opcodes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo17lazy_bind_opcodesE8buffer_t>)

void lazy\_bind\_opcodes(buffer\_t raw)

Set new opcodes.

#### [` show_lazy_bind_opcodes `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo22show_lazy_bind_opcodesEv>)

std::string show\_lazy\_bind\_opcodes() const

Return the lazy opcodes in a human-readable way.

#### [` bindings `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo8bindingsEv>)

inline [it\_binding\_info](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo15it_binding_infoE> "LIEF::MachO::DyldInfo::it_binding_info") bindings()

Iterator over BindingInfo entries.

#### [` bindings `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo8bindingsEv>)

inline [it\_const\_binding\_info](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo21it_const_binding_infoE> "LIEF::MachO::DyldInfo::it_const_binding_info") bindings() const

#### [` export_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo11export_infoEv>)

inline const [info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo6info_tE> "LIEF::MachO::DyldInfo::info_t") &amp;export\_info() const

*Export* information

The symbols exported by a dylib are encoded in a trie. This is a compact representation that factors out common prefixes. It also reduces LINKEDIT pages in RAM because it encodes all information (name, address, flags) in one small, contiguous range. The export area is a stream of nodes. The first node sequentially is the start node for the trie.

Nodes for a symbol start with a byte that is the length of the exported symbol information for the string so far. If there is no exported symbol, the byte is zero. If there is exported info, it follows the length byte. The exported info normally consists of a flags and offset both encoded in uleb128. The offset is location of the content named by the symbol. It is the offset from the mach\_header for the image.

After the initial byte and optional exported symbol information is a byte of how many edges (0-255) that this node has leaving it, followed by each edge. Each edge is a zero terminated cstring of the addition chars in the symbol, followed by a uleb128 offset for the node that edge points to.

> **See also**
> 
> `/usr/include/mach-o/loader.h`

#### [` exports `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo7exportsEv>)

inline [it\_export\_info](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14it_export_infoE> "LIEF::MachO::DyldInfo::it_export_info") exports()

Iterator over [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ExportInfo>) entries.

#### [` exports `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo7exportsEv>)

inline [it\_const\_export\_info](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo20it_const_export_infoE> "LIEF::MachO::DyldInfo::it_const_export_info") exports() const

#### [` export_trie `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo11export_trieEv>)

inline span&lt;const uint8\_t&gt; export\_trie() const

Return Export’s trie as raw data.

#### [` export_trie `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo11export_trieEv>)

inline span&lt;uint8\_t&gt; export\_trie()

#### [` export_trie `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo11export_trieE8buffer_t>)

void export\_trie(buffer\_t raw)

Set new trie.

#### [` show_export_trie `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo16show_export_trieEv>)

std::string show\_export\_trie() const

Return the export trie in a human-readable way.

#### [` rebase `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo6rebaseERK6info_t>)

inline void rebase(const [info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo6info_tE> "LIEF::MachO::DyldInfo::info_t") &amp;info)

#### [` bind `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo4bindERK6info_t>)

inline void bind(const [info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo6info_tE> "LIEF::MachO::DyldInfo::info_t") &amp;info)

#### [` weak_bind `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo9weak_bindERK6info_t>)

inline void weak\_bind(const [info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo6info_tE> "LIEF::MachO::DyldInfo::info_t") &amp;info)

#### [` lazy_bind `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo9lazy_bindERK6info_t>)

inline void lazy\_bind(const [info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo6info_tE> "LIEF::MachO::DyldInfo::info_t") &amp;info)

#### [` export_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo11export_infoERK6info_t>)

inline void export\_info(const [info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo6info_tE> "LIEF::MachO::DyldInfo::info_t") &amp;info)

#### [` set_rebase_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo17set_rebase_offsetE8uint32_t>)

inline void set\_rebase\_offset(uint32\_t offset)

#### [` set_rebase_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo15set_rebase_sizeE8uint32_t>)

inline void set\_rebase\_size(uint32\_t size)

#### [` set_bind_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo15set_bind_offsetE8uint32_t>)

inline void set\_bind\_offset(uint32\_t offset)

#### [` set_bind_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo13set_bind_sizeE8uint32_t>)

inline void set\_bind\_size(uint32\_t size)

#### [` set_weak_bind_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo20set_weak_bind_offsetE8uint32_t>)

inline void set\_weak\_bind\_offset(uint32\_t offset)

#### [` set_weak_bind_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo18set_weak_bind_sizeE8uint32_t>)

inline void set\_weak\_bind\_size(uint32\_t size)

#### [` set_lazy_bind_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo20set_lazy_bind_offsetE8uint32_t>)

inline void set\_lazy\_bind\_offset(uint32\_t offset)

#### [` set_lazy_bind_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo18set_lazy_bind_sizeE8uint32_t>)

inline void set\_lazy\_bind\_size(uint32\_t size)

#### [` set_export_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo17set_export_offsetE8uint32_t>)

inline void set\_export\_offset(uint32\_t offset)

#### [` set_export_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo15set_export_sizeE8uint32_t>)

inline void set\_export\_size(uint32\_t size)

#### [` add `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo3addENSt10unique_ptrI10ExportInfoEE>)

[ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo") \*add(std::unique\_ptr&lt;[ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo")&gt; info)

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO8DyldInfo5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

Public Static Attributes

#### [` OPCODE_MASK `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo11OPCODE_MASKE>)

static auto OPCODE\_MASK = uint32\_t(0xF0)

#### [` IMMEDIATE_MASK `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8DyldInfo14IMMEDIATE_MASKE>)

static auto IMMEDIATE\_MASK = uint32\_t(0x0F)

---

## [Function starts](<https://lief.re/doc/latest/formats/macho/cpp.html#function-starts>)

### [` FunctionStarts `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStartsE>)

class FunctionStarts : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class which represents the LC\_FUNCTION\_STARTS command.

This command is an array of ULEB128 encoded values

Public Functions

#### [` FunctionStarts `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStarts14FunctionStartsEv>)

FunctionStarts() = default

#### [` FunctionStarts `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStarts14FunctionStartsERKN7details21linkedit_data_commandE>)

FunctionStarts(const details::linkedit\_data\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStartsaSERK14FunctionStarts>)

[FunctionStarts](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStartsE> "LIEF::MachO::FunctionStarts") &amp;operator=(const [FunctionStarts](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStartsE> "LIEF::MachO::FunctionStarts") &amp;copy) = default

#### [` FunctionStarts `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStarts14FunctionStartsERK14FunctionStarts>)

FunctionStarts(const [FunctionStarts](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStarts14FunctionStartsERK14FunctionStarts> "LIEF::MachO::FunctionStarts::FunctionStarts") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14FunctionStarts5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14FunctionStarts11data_offsetEv>)

inline uint32\_t data\_offset() const

Offset in the `__LINKEDIT` [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>) where *start functions* are located.

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14FunctionStarts9data_sizeEv>)

inline uint32\_t data\_size() const

Size of the functions list in the binary.

#### [` functions `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14FunctionStarts9functionsEv>)

inline const std::vector&lt;uint64\_t&gt; &amp;functions() const

Addresses of every function entry point in the executable.

This allows functions to exist for which there are no entries in the symbol table.

> **Warning**
> 
> The address is relative to the `__TEXT` segment

#### [` functions `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStarts9functionsEv>)

inline std::vector&lt;uint64\_t&gt; &amp;functions()

#### [` add_function `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStarts12add_functionE8uint64_t>)

inline void add\_function(uint64\_t address)

Add a new function.

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStarts11data_offsetE8uint32_t>)

inline void data\_offset(uint32\_t offset)

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStarts9data_sizeE8uint32_t>)

inline void data\_size(uint32\_t size)

#### [` functions `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStarts9functionsENSt6vectorI8uint64_tEE>)

inline void functions(std::vector&lt;uint64\_t&gt; funcs)

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14FunctionStarts7contentEv>)

inline span&lt;const uint8\_t&gt; content() const

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStarts7contentEv>)

inline span&lt;uint8\_t&gt; content()

#### [` ~FunctionStarts `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStartsD0Ev>)

~FunctionStarts() override = default

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14FunctionStarts6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14FunctionStarts5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FunctionStarts7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Function Variants](<https://lief.re/doc/latest/formats/macho/cpp.html#function-variants>)

### [` FunctionVariants `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariantsE>)

class FunctionVariants : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class representing the `LC_FUNCTION_VARIANTS` load command.

Introduced publicly in `dyld-1284.13` (April 2025), this command supports **function multiversioning**, the ability to associate multiple implementations of the same function, each optimized for a specific platform, architecture, or runtime context.

At runtime, the system dispatches the most appropriate variant based on hardware capabilities or execution environment.

For example:

```cpp
FUNCTION_VARIANT_TABLE(my_function,
  { (void*)my_function$Rosetta,  "rosetta" }, // Rosetta translation
  { (void*)my_function$Haswell,  "haswell" }, // Haswell-optimized
  { (void*)my_function$Base,     "default" }  // Default fallback
);
```

Public Types

#### [` runtime_table_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants15runtime_table_tE>)

using runtime\_table\_t = std::vector&lt;[RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTableE> "LIEF::MachO::FunctionVariants::RuntimeTable")&gt;

#### [` it_runtime_table `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants16it_runtime_tableE>)

using it\_runtime\_table = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[runtime\_table\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants15runtime_table_tE> "LIEF::MachO::FunctionVariants::runtime_table_t")&amp;&gt;

Iterator that outputs [RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants_1_1RuntimeTable>)&amp;.

#### [` it_const_runtime_table `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants22it_const_runtime_tableE>)

using it\_const\_runtime\_table = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [runtime\_table\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants15runtime_table_tE> "LIEF::MachO::FunctionVariants::runtime_table_t")&amp;&gt;

Iterator that outputs const [RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants_1_1RuntimeTable>)&amp;.

Public Functions

#### [` FunctionVariants `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants16FunctionVariantsEv>)

FunctionVariants() = default

#### [` FunctionVariants `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants16FunctionVariantsERKN7details21linkedit_data_commandE>)

FunctionVariants(const details::linkedit\_data\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariantsaSERK16FunctionVariants>)

[FunctionVariants](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariantsE> "LIEF::MachO::FunctionVariants") &amp;operator=(const [FunctionVariants](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariantsE> "LIEF::MachO::FunctionVariants") &amp;copy) = default

#### [` FunctionVariants `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants16FunctionVariantsERK16FunctionVariants>)

FunctionVariants(const [FunctionVariants](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants16FunctionVariantsERK16FunctionVariants> "LIEF::MachO::FunctionVariants::FunctionVariants") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16FunctionVariants5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16FunctionVariants11data_offsetEv>)

inline uint32\_t data\_offset() const

Offset in the `__LINKEDIT` [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>) where the payload starts.

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16FunctionVariants9data_sizeEv>)

inline uint32\_t data\_size() const

Size of the payload.

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants11data_offsetE8uint32_t>)

inline void data\_offset(uint32\_t offset)

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants9data_sizeE8uint32_t>)

inline void data\_size(uint32\_t size)

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16FunctionVariants7contentEv>)

inline span&lt;const uint8\_t&gt; content() const

Return the data slice in the `__LINKEDIT` segment referenced by data\_offset and data\_size;.

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants7contentEv>)

inline span&lt;uint8\_t&gt; content()

#### [` runtime_table `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants13runtime_tableEv>)

inline [it\_runtime\_table](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants16it_runtime_tableE> "LIEF::MachO::FunctionVariants::it_runtime_table") runtime\_table()

Iterator over the different [RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants_1_1RuntimeTable>) entries located in the content of this `__LINKEDIT` command.

#### [` runtime_table `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16FunctionVariants13runtime_tableEv>)

inline [it\_const\_runtime\_table](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants22it_const_runtime_tableE> "LIEF::MachO::FunctionVariants::it_const_runtime_table") runtime\_table() const

#### [` add `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants3addE12RuntimeTable>)

inline [RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTableE> "LIEF::MachO::FunctionVariants::RuntimeTable") &amp;add([RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTableE> "LIEF::MachO::FunctionVariants::RuntimeTable") table)

Append a new [RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants_1_1RuntimeTable>) and return a reference to the inserted table.

#### [` ~FunctionVariants `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariantsD0Ev>)

~FunctionVariants() override = default

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16FunctionVariants5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

#### [` parse_payload `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants13parse_payloadER10SpanStream>)

static std::vector&lt;[RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTableE> "LIEF::MachO::FunctionVariants::RuntimeTable")&gt; parse\_payload([SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream") &amp;stream)

#### [` parse_entry `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants11parse_entryER12BinaryStream8uint64_t>)

static [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTableE> "LIEF::MachO::FunctionVariants::RuntimeTable")&gt; parse\_entry([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream, uint64\_t max\_entries)

#### [` RuntimeTableEntry `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntryE>)

class RuntimeTableEntry

This class exposes information about a given implementation.

Public Types

##### [` FLAGS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGSE>)

enum class FLAGS : uint32\_t

Flags describing the target platform, environment, or architecture for a given function implementation.

These are encoded as a `uint32_t`, where high bits determine the namespace (`KIND`), and the lower bits encode the specific capability.

*Values:*

###### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS7UNKNOWNE>)

enumerator UNKNOWN = 0

###### [` ARM64_DEFAULT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS13ARM64_DEFAULTE>)

enumerator ARM64\_DEFAULT = (0 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_FLAGM `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS11ARM64_FLAGME>)

enumerator ARM64\_FLAGM = (1 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_FLAGM2 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS12ARM64_FLAGM2E>)

enumerator ARM64\_FLAGM2 = (2 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_FHM `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS9ARM64_FHME>)

enumerator ARM64\_FHM = (3 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_DOTPROD `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS13ARM64_DOTPRODE>)

enumerator ARM64\_DOTPROD = (4 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SHA3 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS10ARM64_SHA3E>)

enumerator ARM64\_SHA3 = (5 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_RDM `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS9ARM64_RDME>)

enumerator ARM64\_RDM = (6 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_LSE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS9ARM64_LSEE>)

enumerator ARM64\_LSE = (7 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SHA256 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS12ARM64_SHA256E>)

enumerator ARM64\_SHA256 = (8 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SHA512 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS12ARM64_SHA512E>)

enumerator ARM64\_SHA512 = (9 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SHA1 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS10ARM64_SHA1E>)

enumerator ARM64\_SHA1 = (10 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_AES `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS9ARM64_AESE>)

enumerator ARM64\_AES = (11 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_PMULL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS11ARM64_PMULLE>)

enumerator ARM64\_PMULL = (12 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SPECRES `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS13ARM64_SPECRESE>)

enumerator ARM64\_SPECRES = (13 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS8ARM64_SBE>)

enumerator ARM64\_SB = (14 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_FRINTTS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS13ARM64_FRINTTSE>)

enumerator ARM64\_FRINTTS = (15 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_LRCPC `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS11ARM64_LRCPCE>)

enumerator ARM64\_LRCPC = (16 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_LRCPC2 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS12ARM64_LRCPC2E>)

enumerator ARM64\_LRCPC2 = (17 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_FCMA `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS10ARM64_FCMAE>)

enumerator ARM64\_FCMA = (18 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_JSCVT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS11ARM64_JSCVTE>)

enumerator ARM64\_JSCVT = (19 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_PAUTH `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS11ARM64_PAUTHE>)

enumerator ARM64\_PAUTH = (20 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_PAUTH2 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS12ARM64_PAUTH2E>)

enumerator ARM64\_PAUTH2 = (21 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_FPAC `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS10ARM64_FPACE>)

enumerator ARM64\_FPAC = (22 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_DPB `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS9ARM64_DPBE>)

enumerator ARM64\_DPB = (23 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_DPB2 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS10ARM64_DPB2E>)

enumerator ARM64\_DPB2 = (24 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_BF16 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS10ARM64_BF16E>)

enumerator ARM64\_BF16 = (25 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_I8MM `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS10ARM64_I8MME>)

enumerator ARM64\_I8MM = (26 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_WFXT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS10ARM64_WFXTE>)

enumerator ARM64\_WFXT = (27 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_RPRES `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS11ARM64_RPRESE>)

enumerator ARM64\_RPRES = (28 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_ECV `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS9ARM64_ECVE>)

enumerator ARM64\_ECV = (29 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_AFP `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS9ARM64_AFPE>)

enumerator ARM64\_AFP = (30 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_LSE2 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS10ARM64_LSE2E>)

enumerator ARM64\_LSE2 = (31 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_CSV2 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS10ARM64_CSV2E>)

enumerator ARM64\_CSV2 = (32 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_CVS3 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS10ARM64_CVS3E>)

enumerator ARM64\_CVS3 = (33 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_DIT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS9ARM64_DITE>)

enumerator ARM64\_DIT = (34 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_FP16 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS10ARM64_FP16E>)

enumerator ARM64\_FP16 = (35 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SSBS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS10ARM64_SSBSE>)

enumerator ARM64\_SSBS = (36 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_BTI `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS9ARM64_BTIE>)

enumerator ARM64\_BTI = (37 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SME `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS9ARM64_SMEE>)

enumerator ARM64\_SME = (44 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SME2 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS10ARM64_SME2E>)

enumerator ARM64\_SME2 = (45 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SMEF64F64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS15ARM64_SMEF64F64E>)

enumerator ARM64\_SMEF64F64 = (46 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SMEI16I64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS15ARM64_SMEI16I64E>)

enumerator ARM64\_SMEI16I64 = (47 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SMEF32F32 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS15ARM64_SMEF32F32E>)

enumerator ARM64\_SMEF32F32 = (48 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SMEBI32I32 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS16ARM64_SMEBI32I32E>)

enumerator ARM64\_SMEBI32I32 = (49 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SMEB16F32 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS15ARM64_SMEB16F32E>)

enumerator ARM64\_SMEB16F32 = (50 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SMEF16F32 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS15ARM64_SMEF16F32E>)

enumerator ARM64\_SMEF16F32 = (51 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SMEI8I32 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS14ARM64_SMEI8I32E>)

enumerator ARM64\_SMEI8I32 = (52 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_SMEI16I32 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS15ARM64_SMEI16I32E>)

enumerator ARM64\_SMEI16I32 = (53 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_ADVSIMD `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS13ARM64_ADVSIMDE>)

enumerator ARM64\_ADVSIMD = (54 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_ADVSIMDHPFP `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS17ARM64_ADVSIMDHPFPE>)

enumerator ARM64\_ADVSIMDHPFP = (55 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` ARM64_CRC32 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS11ARM64_CRC32E>)

enumerator ARM64\_CRC32 = (56 | [F\_ARM64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_ARM64"))

###### [` X86_64_DEFAULT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS14X86_64_DEFAULTE>)

enumerator X86\_64\_DEFAULT = (0 | [F\_X86\_64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry8F_X86_64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_X86_64"))

###### [` X86_64_SSE41 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS12X86_64_SSE41E>)

enumerator X86\_64\_SSE41 = (1 | [F\_X86\_64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry8F_X86_64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_X86_64"))

###### [` X86_64_FMA `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS10X86_64_FMAE>)

enumerator X86\_64\_FMA = (2 | [F\_X86\_64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry8F_X86_64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_X86_64"))

###### [` X86_64_AVX `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS10X86_64_AVXE>)

enumerator X86\_64\_AVX = (3 | [F\_X86\_64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry8F_X86_64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_X86_64"))

###### [` X86_64_AVX2 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS11X86_64_AVX2E>)

enumerator X86\_64\_AVX2 = (4 | [F\_X86\_64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry8F_X86_64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_X86_64"))

###### [` X86_64_AVX512F `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS14X86_64_AVX512FE>)

enumerator X86\_64\_AVX512F = (5 | [F\_X86\_64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry8F_X86_64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_X86_64"))

###### [` X86_64_AVX512BW `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS15X86_64_AVX512BWE>)

enumerator X86\_64\_AVX512BW = (6 | [F\_X86\_64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry8F_X86_64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_X86_64"))

###### [` X86_64_BMI1 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS11X86_64_BMI1E>)

enumerator X86\_64\_BMI1 = (7 | [F\_X86\_64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry8F_X86_64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_X86_64"))

###### [` X86_64_ROSETTA `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS14X86_64_ROSETTAE>)

enumerator X86\_64\_ROSETTA = (8 | [F\_X86\_64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry8F_X86_64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_X86_64"))

###### [` X86_64_HASWELL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS14X86_64_HASWELLE>)

enumerator X86\_64\_HASWELL = (9 | [F\_X86\_64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry8F_X86_64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_X86_64"))

###### [` X86_64_IVYBRIDGE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS16X86_64_IVYBRIDGEE>)

enumerator X86\_64\_IVYBRIDGE = (10 | [F\_X86\_64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry8F_X86_64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_X86_64"))

###### [` X86_64_NEHALEM `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS14X86_64_NEHALEME>)

enumerator X86\_64\_NEHALEM = (11 | [F\_X86\_64](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry8F_X86_64E> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_X86_64"))

###### [` SYSTEM_WIDE_DEFAULT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS19SYSTEM_WIDE_DEFAULTE>)

enumerator SYSTEM\_WIDE\_DEFAULT = (0 | [F\_SYSTEM\_WIDE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry13F_SYSTEM_WIDEE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_SYSTEM_WIDE"))

###### [` SYSTEM_WIDE_INTERNAL_INSTALL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS28SYSTEM_WIDE_INTERNAL_INSTALLE>)

enumerator SYSTEM\_WIDE\_INTERNAL\_INSTALL = (1 | [F\_SYSTEM\_WIDE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry13F_SYSTEM_WIDEE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_SYSTEM_WIDE"))

###### [` SYSTEM_WIDE_CUSTOMER_INSTALL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS28SYSTEM_WIDE_CUSTOMER_INSTALLE>)

enumerator SYSTEM\_WIDE\_CUSTOMER\_INSTALL = (2 | [F\_SYSTEM\_WIDE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry13F_SYSTEM_WIDEE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_SYSTEM_WIDE"))

###### [` SYSTEM_WIDE_LOCKDOWN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS20SYSTEM_WIDE_LOCKDOWNE>)

enumerator SYSTEM\_WIDE\_LOCKDOWN = (3 | [F\_SYSTEM\_WIDE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry13F_SYSTEM_WIDEE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_SYSTEM_WIDE"))

###### [` PER_PROCESS_DEFAULT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS19PER_PROCESS_DEFAULTE>)

enumerator PER\_PROCESS\_DEFAULT = (0 | [F\_PER\_PROCESS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry13F_PER_PROCESSE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_PER_PROCESS"))

###### [` PER_PROCESS_TRANSLATED `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS22PER_PROCESS_TRANSLATEDE>)

enumerator PER\_PROCESS\_TRANSLATED = (1 | [F\_PER\_PROCESS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry13F_PER_PROCESSE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_PER_PROCESS"))

###### [` PER_PROCESS_MTE_ENABLED `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS23PER_PROCESS_MTE_ENABLEDE>)

enumerator PER\_PROCESS\_MTE\_ENABLED = (2 | [F\_PER\_PROCESS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry13F_PER_PROCESSE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_PER_PROCESS"))

###### [` PER_PROCESS_NO_OVERREAD `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGS23PER_PROCESS_NO_OVERREADE>)

enumerator PER\_PROCESS\_NO\_OVERREAD = (3 | [F\_PER\_PROCESS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry13F_PER_PROCESSE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_PER_PROCESS"))

Public Functions

##### [` RuntimeTableEntry `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry17RuntimeTableEntryEv>)

RuntimeTableEntry() = default

##### [` RuntimeTableEntry `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry17RuntimeTableEntryERKN7details21runtime_table_entry_tE>)

RuntimeTableEntry(const details::runtime\_table\_entry\_t &amp;entry)

##### [` RuntimeTableEntry `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry17RuntimeTableEntryERK17RuntimeTableEntry>)

RuntimeTableEntry(const [RuntimeTableEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry17RuntimeTableEntryERK17RuntimeTableEntry> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::RuntimeTableEntry")&amp;) = default

##### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntryaSERK17RuntimeTableEntry>)

[RuntimeTableEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntryE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry") &amp;operator=(const [RuntimeTableEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntryE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry")&amp;) = default

##### [` RuntimeTableEntry `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry17RuntimeTableEntryERR17RuntimeTableEntry>)

RuntimeTableEntry([RuntimeTableEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry17RuntimeTableEntryERR17RuntimeTableEntry> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::RuntimeTableEntry")&amp;&amp;) noexcept = default

##### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntryaSERR17RuntimeTableEntry>)

[RuntimeTableEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntryE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry") &amp;operator=([RuntimeTableEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntryE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry")&amp;&amp;) noexcept = default

##### [` ~RuntimeTableEntry `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntryD0Ev>)

~RuntimeTableEntry() = default

##### [` impl `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16FunctionVariants17RuntimeTableEntry4implEv>)

inline uint32\_t impl() const

The relative address of the implementation or an index if [another\_table()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants_1_1RuntimeTableEntry_1aac79e722b4395424025c3a93d3aa3c62>) is set.

##### [` impl `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry4implE8uint32_t>)

inline void impl(uint32\_t value)

Set the relative address of the implementation (or the index of the target entry when [another\_table()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants_1_1RuntimeTableEntry_1aac79e722b4395424025c3a93d3aa3c62>) is set).

> **Note**
> 
> The value is stored on 31 bits, so the most significant bit is silently dropped.

##### [` another_table `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16FunctionVariants17RuntimeTableEntry13another_tableEv>)

inline bool another\_table() const

Indicates whether [impl()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants_1_1RuntimeTableEntry_1adce4ff2ce829792564c2191d2e3b45cb>) refers to an entry in another runtime table, rather than a direct function implementation address.

##### [` another_table `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry13another_tableEb>)

inline void another\_table(bool value)

Set whether [impl()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants_1_1RuntimeTableEntry_1adce4ff2ce829792564c2191d2e3b45cb>) refers to an entry in another runtime table.

##### [` flag_bit_nums `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16FunctionVariants17RuntimeTableEntry13flag_bit_numsEv>)

inline span&lt;const uint8\_t&gt; flag\_bit\_nums() const

The `flagBitNums` value as a slice of bytes.

##### [` flags `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16FunctionVariants17RuntimeTableEntry5flagsEv>)

inline const std::vector&lt;[FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGSE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::FLAGS")&gt; &amp;flags() const

Return the **interpreted** [flag\_bit\_nums()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants_1_1RuntimeTableEntry_1a29dd6d56cdf929bebb6c436ffa53b9a5>).

##### [` to_string `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16FunctionVariants17RuntimeTableEntry9to_stringEv>)

std::string to\_string() const

Public Static Functions

##### [` get_raw `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7get_rawE5FLAGS>)

static inline uint8\_t get\_raw([FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5FLAGSE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::FLAGS") f)

Public Static Attributes

##### [` MAX_IMPL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry8MAX_IMPLE>)

static uint32\_t MAX\_IMPL = (uint32\_t(1) &lt;&lt; 31) - 1

The implementation address/index is encoded on 31 bits.

##### [` F_BIT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5F_BITE>)

static uint32\_t F\_BIT = 20

##### [` F_MASK `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry6F_MASKE>)

static uint32\_t F\_MASK = (uint32\_t(1) &lt;&lt; [F\_BIT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5F_BITE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_BIT")) - 1

##### [` F_PER_PROCESS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry13F_PER_PROCESSE>)

static uint32\_t F\_PER\_PROCESS = uint32\_t(1) &lt;&lt; [F\_BIT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5F_BITE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_BIT")

##### [` F_SYSTEM_WIDE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry13F_SYSTEM_WIDEE>)

static uint32\_t F\_SYSTEM\_WIDE = uint32\_t(2) &lt;&lt; [F\_BIT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5F_BITE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_BIT")

##### [` F_ARM64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry7F_ARM64E>)

static uint32\_t F\_ARM64 = uint32\_t(3) &lt;&lt; [F\_BIT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5F_BITE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_BIT")

##### [` F_X86_64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry8F_X86_64E>)

static uint32\_t F\_X86\_64 = uint32\_t(4) &lt;&lt; [F\_BIT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntry5F_BITE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry::F_BIT")

Friends

##### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntrylsERNSt7ostreamERK17RuntimeTableEntry>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [RuntimeTableEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntryE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry") &amp;entry)

#### [` RuntimeTable `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTableE>)

class RuntimeTable

Represents a runtime table of function variants sharing a common namespace (referred to internally as `FunctionVariantsRuntimeTable` in `dyld`).

Each table holds multiple [RuntimeTableEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants_1_1RuntimeTableEntry>) instances that map to function implementations optimized for a given [KIND](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants_1_1RuntimeTable_1a8b82720cfaf25ce17acb1f55ff94984b>).

Public Types

##### [` KIND `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable4KINDE>)

enum class KIND : uint32\_t

Enumeration describing the namespace or category of a function variant.

Each [FunctionVariants::RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants_1_1RuntimeTable>) is associated with one [KIND](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants_1_1RuntimeTable_1a8b82720cfaf25ce17acb1f55ff94984b>), which indicates the domain or context under which its variant entries should be considered valid or applicable.

These categories map to the runtime dispatch logic used by `dyld` when selecting the optimal function variant.

*Values:*

###### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable4KIND7UNKNOWNE>)

enumerator UNKNOWN = 0

Fallback/default kind when the category is not recognized.

###### [` PER_PROCESS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable4KIND11PER_PROCESSE>)

enumerator PER\_PROCESS = 1

Variants that apply on a per-process basis.

###### [` SYSTEM_WIDE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable4KIND11SYSTEM_WIDEE>)

enumerator SYSTEM\_WIDE = 2

Variants that are selected based on system-wide capabilities or configurations.

###### [` ARM64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable4KIND5ARM64E>)

enumerator ARM64 = 3

Variants optimized for the ARM64 architecture.

###### [` X86_64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable4KIND6X86_64E>)

enumerator X86\_64 = 4

Variants optimized for the x86-64 architecture.

##### [` entries_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable9entries_tE>)

using entries\_t = std::vector&lt;[RuntimeTableEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntryE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry")&gt;

##### [` it_entries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable10it_entriesE>)

using it\_entries = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[entries\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable9entries_tE> "LIEF::MachO::FunctionVariants::RuntimeTable::entries_t")&amp;&gt;

Iterator that outputs [RuntimeTableEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants_1_1RuntimeTableEntry>)&amp;.

##### [` it_const_entries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable16it_const_entriesE>)

using it\_const\_entries = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [entries\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable9entries_tE> "LIEF::MachO::FunctionVariants::RuntimeTable::entries_t")&amp;&gt;

Iterator that outputs const [RuntimeTableEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants_1_1RuntimeTableEntry>)&amp;.

Public Functions

##### [` RuntimeTable `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable12RuntimeTableEv>)

RuntimeTable() = default

##### [` RuntimeTable `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable12RuntimeTableE4KIND8uint32_t>)

inline RuntimeTable([KIND](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable4KINDE> "LIEF::MachO::FunctionVariants::RuntimeTable::KIND") kind, uint32\_t offset)

##### [` RuntimeTable `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable12RuntimeTableERK12RuntimeTable>)

RuntimeTable(const [RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable12RuntimeTableERK12RuntimeTable> "LIEF::MachO::FunctionVariants::RuntimeTable::RuntimeTable")&amp;) = default

##### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTableaSERK12RuntimeTable>)

[RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTableE> "LIEF::MachO::FunctionVariants::RuntimeTable") &amp;operator=(const [RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTableE> "LIEF::MachO::FunctionVariants::RuntimeTable")&amp;) = default

##### [` RuntimeTable `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable12RuntimeTableERR12RuntimeTable>)

RuntimeTable([RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable12RuntimeTableERR12RuntimeTable> "LIEF::MachO::FunctionVariants::RuntimeTable::RuntimeTable")&amp;&amp;) noexcept = default

##### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTableaSERR12RuntimeTable>)

[RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTableE> "LIEF::MachO::FunctionVariants::RuntimeTable") &amp;operator=([RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTableE> "LIEF::MachO::FunctionVariants::RuntimeTable")&amp;&amp;) noexcept = default

##### [` ~RuntimeTable `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTableD0Ev>)

~RuntimeTable() = default

##### [` kind `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16FunctionVariants12RuntimeTable4kindEv>)

inline [KIND](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable4KINDE> "LIEF::MachO::FunctionVariants::RuntimeTable::KIND") kind() const

Kind of this runtime table.

##### [` offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16FunctionVariants12RuntimeTable6offsetEv>)

inline uint32\_t offset() const

Original offset in the payload.

##### [` entries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable7entriesEv>)

inline [it\_entries](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable10it_entriesE> "LIEF::MachO::FunctionVariants::RuntimeTable::it_entries") entries()

Iterator over the different [RuntimeTableEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants_1_1RuntimeTableEntry>) entries.

##### [` entries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16FunctionVariants12RuntimeTable7entriesEv>)

inline [it\_const\_entries](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable16it_const_entriesE> "LIEF::MachO::FunctionVariants::RuntimeTable::it_const_entries") entries() const

##### [` add `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTable3addE17RuntimeTableEntry>)

inline void add([RuntimeTableEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants17RuntimeTableEntryE> "LIEF::MachO::FunctionVariants::RuntimeTableEntry") entry)

##### [` to_string `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16FunctionVariants12RuntimeTable9to_stringEv>)

std::string to\_string() const

Friends

##### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTablelsERNSt7ostreamERK12RuntimeTable>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [RuntimeTable](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16FunctionVariants12RuntimeTableE> "LIEF::MachO::FunctionVariants::RuntimeTable") &amp;table)

---

## [Function Variant Fixups](<https://lief.re/doc/latest/formats/macho/cpp.html#function-variant-fixups>)

### [` FunctionVariantFixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixupsE>)

class FunctionVariantFixups : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class which represents the `LC_FUNCTION_VARIANT_FIXUPS` command.

This command contains the relocations that must be applied to the GOT-like slots associated with a [FunctionVariants](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants>) table. At runtime, `dyld` resolves each slot to the best implementation and (re-)signs it according to the pointer-authentication information.

Public Types

#### [` fixups_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups8fixups_tE>)

using fixups\_t = std::vector&lt;[Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5FixupE> "LIEF::MachO::FunctionVariantFixups::Fixup")&gt;

#### [` it_fixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups9it_fixupsE>)

using it\_fixups = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[fixups\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups8fixups_tE> "LIEF::MachO::FunctionVariantFixups::fixups_t")&amp;&gt;

Iterator that outputs [Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariantFixups_1_1Fixup>)&amp;.

#### [` it_const_fixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups15it_const_fixupsE>)

using it\_const\_fixups = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [fixups\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups8fixups_tE> "LIEF::MachO::FunctionVariantFixups::fixups_t")&amp;&gt;

Iterator that outputs const [Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariantFixups_1_1Fixup>)&amp;.

Public Functions

#### [` FunctionVariantFixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups21FunctionVariantFixupsEv>)

FunctionVariantFixups() = default

#### [` FunctionVariantFixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups21FunctionVariantFixupsERR21FunctionVariantFixups>)

FunctionVariantFixups([FunctionVariantFixups](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups21FunctionVariantFixupsERR21FunctionVariantFixups> "LIEF::MachO::FunctionVariantFixups::FunctionVariantFixups")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixupsaSERR21FunctionVariantFixups>)

[FunctionVariantFixups](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixupsE> "LIEF::MachO::FunctionVariantFixups") &amp;operator=([FunctionVariantFixups](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixupsE> "LIEF::MachO::FunctionVariantFixups")&amp;&amp;) noexcept = default

#### [` FunctionVariantFixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups21FunctionVariantFixupsERKN7details21linkedit_data_commandE>)

FunctionVariantFixups(const details::linkedit\_data\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixupsaSERK21FunctionVariantFixups>)

[FunctionVariantFixups](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixupsE> "LIEF::MachO::FunctionVariantFixups") &amp;operator=(const [FunctionVariantFixups](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixupsE> "LIEF::MachO::FunctionVariantFixups") &amp;copy) = default

#### [` FunctionVariantFixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups21FunctionVariantFixupsERK21FunctionVariantFixups>)

FunctionVariantFixups(const [FunctionVariantFixups](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups21FunctionVariantFixupsERK21FunctionVariantFixups> "LIEF::MachO::FunctionVariantFixups::FunctionVariantFixups") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO21FunctionVariantFixups5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO21FunctionVariantFixups11data_offsetEv>)

inline uint32\_t data\_offset() const

Offset in the `__LINKEDIT` [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>) where the payload starts.

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO21FunctionVariantFixups9data_sizeEv>)

inline uint32\_t data\_size() const

Size of the payload.

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups11data_offsetE8uint32_t>)

inline void data\_offset(uint32\_t offset)

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups9data_sizeE8uint32_t>)

inline void data\_size(uint32\_t size)

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO21FunctionVariantFixups7contentEv>)

inline span&lt;const uint8\_t&gt; content() const

Return the data slice in the `__LINKEDIT` segment referenced by data\_offset and data\_size.

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups7contentEv>)

inline span&lt;uint8\_t&gt; content()

#### [` fixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups6fixupsEv>)

inline [it\_fixups](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups9it_fixupsE> "LIEF::MachO::FunctionVariantFixups::it_fixups") fixups()

Iterator over the different [Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariantFixups_1_1Fixup>) entries.

#### [` fixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO21FunctionVariantFixups6fixupsEv>)

inline [it\_const\_fixups](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups15it_const_fixupsE> "LIEF::MachO::FunctionVariantFixups::it_const_fixups") fixups() const

#### [` add `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups3addE5Fixup>)

inline [FunctionVariantFixups](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixupsE> "LIEF::MachO::FunctionVariantFixups") &amp;add([Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5FixupE> "LIEF::MachO::FunctionVariantFixups::Fixup") fixup)

Append a new [Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariantFixups_1_1Fixup>).

#### [` ~FunctionVariantFixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixupsD0Ev>)

~FunctionVariantFixups() override = default

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO21FunctionVariantFixups5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

#### [` parse_payload `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups13parse_payloadER10SpanStream>)

static std::vector&lt;[Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5FixupE> "LIEF::MachO::FunctionVariantFixups::Fixup")&gt; parse\_payload([SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream") &amp;stream)

#### [` Fixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5FixupE>)

class Fixup

A single relocation associated with a function-variant. It mirrors the `FunctionVariantFixups::InternalFixup` structure used by `dyld` and describes a slot that must be fixed up to point to the variant referenced by [variant\_index()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariantFixups_1_1Fixup_1a02465bcc59bd402a56dbaf21d1c6e3cc>).

Public Functions

##### [` Fixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5Fixup5FixupEv>)

Fixup() = default

##### [` Fixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5Fixup5FixupE8uint32_t8uint32_t8uint32_tbb7uint8_t8uint16_t>)

inline Fixup(uint32\_t seg\_offset, uint32\_t seg\_index, uint32\_t variant\_index, bool pac\_auth, bool pac\_address, uint8\_t pac\_key, uint16\_t pac\_diversity)

##### [` Fixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5Fixup5FixupERKN7details24function_variant_fixup_tE>)

Fixup(const details::function\_variant\_fixup\_t &amp;raw)

##### [` Fixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5Fixup5FixupERK5Fixup>)

Fixup(const [Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5Fixup5FixupERK5Fixup> "LIEF::MachO::FunctionVariantFixups::Fixup::Fixup")&amp;) = default

##### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5FixupaSERK5Fixup>)

[Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5FixupE> "LIEF::MachO::FunctionVariantFixups::Fixup") &amp;operator=(const [Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5FixupE> "LIEF::MachO::FunctionVariantFixups::Fixup")&amp;) = default

##### [` Fixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5Fixup5FixupERR5Fixup>)

Fixup([Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5Fixup5FixupERR5Fixup> "LIEF::MachO::FunctionVariantFixups::Fixup::Fixup")&amp;&amp;) noexcept = default

##### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5FixupaSERR5Fixup>)

[Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5FixupE> "LIEF::MachO::FunctionVariantFixups::Fixup") &amp;operator=([Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5FixupE> "LIEF::MachO::FunctionVariantFixups::Fixup")&amp;&amp;) noexcept = default

##### [` ~Fixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5FixupD0Ev>)

~Fixup() = default

##### [` seg_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO21FunctionVariantFixups5Fixup10seg_offsetEv>)

inline uint32\_t seg\_offset() const

Offset of the slot to fix up, relative to the segment designated by [seg\_index()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariantFixups_1_1Fixup_1aa96aafb6b04d692d97c0889ab0d1927d>).

##### [` seg_index `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO21FunctionVariantFixups5Fixup9seg_indexEv>)

inline uint32\_t seg\_index() const

Index of the segment that owns the slot to fix up.

##### [` variant_index `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO21FunctionVariantFixups5Fixup13variant_indexEv>)

inline uint32\_t variant\_index() const

Index of the [FunctionVariants](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariants>) runtime table used to resolve the slot.

##### [` pac_auth `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO21FunctionVariantFixups5Fixup8pac_authEv>)

inline bool pac\_auth() const

Whether the slot is signed with pointer authentication (arm64e).

##### [` pac_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO21FunctionVariantFixups5Fixup11pac_addressEv>)

inline bool pac\_address() const

Whether the pointer-authentication signature mixes the storage address (address diversity).

##### [` pac_key `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO21FunctionVariantFixups5Fixup7pac_keyEv>)

inline uint8\_t pac\_key() const

Pointer-authentication key used to sign the slot.

##### [` pac_diversity `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO21FunctionVariantFixups5Fixup13pac_diversityEv>)

inline uint16\_t pac\_diversity() const

Pointer-authentication diversity (discriminator) of the slot.

##### [` segment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5Fixup7segmentEv>)

inline [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") \*segment()

[SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>) referenced by [seg\_index()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1FunctionVariantFixups_1_1Fixup_1aa96aafb6b04d692d97c0889ab0d1927d>) if it could be resolved.

##### [` segment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO21FunctionVariantFixups5Fixup7segmentEv>)

inline const [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") \*segment() const

##### [` seg_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5Fixup10seg_offsetE8uint32_t>)

inline void seg\_offset(uint32\_t value)

##### [` seg_index `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5Fixup9seg_indexE8uint32_t>)

inline void seg\_index(uint32\_t value)

##### [` variant_index `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5Fixup13variant_indexE8uint32_t>)

inline void variant\_index(uint32\_t value)

##### [` pac_auth `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5Fixup8pac_authEb>)

inline void pac\_auth(bool value)

##### [` pac_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5Fixup11pac_addressEb>)

inline void pac\_address(bool value)

##### [` pac_key `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5Fixup7pac_keyE7uint8_t>)

inline void pac\_key(uint8\_t value)

##### [` pac_diversity `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5Fixup13pac_diversityE8uint16_t>)

inline void pac\_diversity(uint16\_t value)

##### [` segment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5Fixup7segmentER14SegmentCommand>)

inline void segment([SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") &amp;seg)

##### [` to_string `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO21FunctionVariantFixups5Fixup9to_stringEv>)

std::string to\_string() const

Friends

##### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5FixuplsERNSt7ostreamERK5Fixup>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO21FunctionVariantFixups5FixupE> "LIEF::MachO::FunctionVariantFixups::Fixup") &amp;fixup)

---

## [Lazy Load Dylib Info](<https://lief.re/doc/latest/formats/macho/cpp.html#lazy-load-dylib-info>)

### [` LazyLoadDylibInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfoE>)

class LazyLoadDylibInfo : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class representing the `LC_LAZY_LOAD_DYLIB_INFO` load command.

This command describes how to **lazily load a dylib**: instead of binding the library and its symbols at launch time, `dyld` keeps the information required to resolve the dylib on the first use of one of its symbols.

Public Types

#### [` fixups_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo8fixups_tE>)

using fixups\_t = std::vector&lt;[Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5FixupE> "LIEF::MachO::LazyLoadDylibInfo::Fixup")&gt;

#### [` it_fixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo9it_fixupsE>)

using it\_fixups = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[fixups\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo8fixups_tE> "LIEF::MachO::LazyLoadDylibInfo::fixups_t")&amp;&gt;

Iterator that outputs [Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LazyLoadDylibInfo_1_1Fixup>)&amp;.

#### [` it_const_fixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo15it_const_fixupsE>)

using it\_const\_fixups = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [fixups\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo8fixups_tE> "LIEF::MachO::LazyLoadDylibInfo::fixups_t")&amp;&gt;

Iterator that outputs const [Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LazyLoadDylibInfo_1_1Fixup>)&amp;.

Public Functions

#### [` LazyLoadDylibInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo17LazyLoadDylibInfoEv>)

LazyLoadDylibInfo()

#### [` LazyLoadDylibInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo17LazyLoadDylibInfoERKN7details21linkedit_data_commandE>)

LazyLoadDylibInfo(const details::linkedit\_data\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfoaSERK17LazyLoadDylibInfo>)

[LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfoE> "LIEF::MachO::LazyLoadDylibInfo") &amp;operator=(const [LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfoE> "LIEF::MachO::LazyLoadDylibInfo") &amp;copy) = default

#### [` LazyLoadDylibInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo17LazyLoadDylibInfoERK17LazyLoadDylibInfo>)

LazyLoadDylibInfo(const [LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo17LazyLoadDylibInfoERK17LazyLoadDylibInfo> "LIEF::MachO::LazyLoadDylibInfo::LazyLoadDylibInfo") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo11data_offsetEv>)

inline uint32\_t data\_offset() const

Offset in the `__LINKEDIT` segment where the payload starts.

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo9data_sizeEv>)

inline uint32\_t data\_size() const

Size of the payload.

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo11data_offsetE8uint32_t>)

inline void data\_offset(uint32\_t offset)

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo9data_sizeE8uint32_t>)

inline void data\_size(uint32\_t size)

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo7contentEv>)

inline span&lt;const uint8\_t&gt; content() const

Return the data slice in the `__LINKEDIT` segment referenced by data\_offset and data\_size.

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo7contentEv>)

inline span&lt;uint8\_t&gt; content()

#### [` load_path `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo9load_pathEv>)

inline std::string\_view load\_path() const

Load path of the dylib to bind lazily.

#### [` load_path `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo9load_pathENSt6stringE>)

inline [LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfoE> "LIEF::MachO::LazyLoadDylibInfo") &amp;load\_path(std::string value)

Change the load path of the dylib to bind lazily.

#### [` flag_image_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo17flag_image_offsetEv>)

inline uint32\_t flag\_image\_offset() const

Image offset of the global flag that is set once the dylib has been loaded by dyld.

#### [` flag_image_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo17flag_image_offsetE8uint32_t>)

inline [LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfoE> "LIEF::MachO::LazyLoadDylibInfo") &amp;flag\_image\_offset(uint32\_t value)

#### [` flags `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo5flagsEv>)

inline uint16\_t flags() const

Raw flags associated with this command.

#### [` flags `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5flagsE8uint16_t>)

inline [LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfoE> "LIEF::MachO::LazyLoadDylibInfo") &amp;flags(uint16\_t value)

#### [` may_be_missing `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo14may_be_missingEv>)

inline bool may\_be\_missing() const

Whether the dylib is allowed to be missing at runtime (i.e. “weak

linked”).

#### [` may_be_missing `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo14may_be_missingEb>)

inline [LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfoE> "LIEF::MachO::LazyLoadDylibInfo") &amp;may\_be\_missing(bool value)

Set or clear the “may be missing” (weak linked) bit of [flags()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LazyLoadDylibInfo_1a3be3b32136bb651358a4519acffec26f>).

#### [` pointer_format `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo14pointer_formatEv>)

inline uint16\_t pointer\_format() const

Chained-fixups pointer format used by the binding chain (e.g. `DYLD_CHAINED_PTR_ARM64E_USERLAND`).

#### [` pointer_format `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo14pointer_formatE8uint16_t>)

inline [LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfoE> "LIEF::MachO::LazyLoadDylibInfo") &amp;pointer\_format(uint16\_t value)

#### [` chain_start_image_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo24chain_start_image_offsetEv>)

inline uint32\_t chain\_start\_image\_offset() const

Image offset of the fixup chain start used to bind the dylib’s symbols.

#### [` chain_start_image_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo24chain_start_image_offsetE8uint32_t>)

inline [LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfoE> "LIEF::MachO::LazyLoadDylibInfo") &amp;chain\_start\_image\_offset(uint32\_t value)

#### [` symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo7symbolsEv>)

inline const std::vector&lt;std::string&gt; &amp;symbols() const

List of the symbol names to bind lazily for this dylib.

#### [` symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo7symbolsENSt6vectorINSt6stringEEE>)

inline [LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfoE> "LIEF::MachO::LazyLoadDylibInfo") &amp;symbols(std::vector&lt;std::string&gt; value)

Replace the list of the symbol names to bind lazily for this dylib.

#### [` add_symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo10add_symbolENSt6stringE>)

inline [LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfoE> "LIEF::MachO::LazyLoadDylibInfo") &amp;add\_symbol(std::string value)

Append a symbol name to the list of symbols to bind lazily.

#### [` clear_symbols `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo13clear_symbolsEv>)

inline [LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfoE> "LIEF::MachO::LazyLoadDylibInfo") &amp;clear\_symbols()

Remove all the symbol names to bind lazily.

#### [` fixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo6fixupsEv>)

inline [it\_fixups](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo9it_fixupsE> "LIEF::MachO::LazyLoadDylibInfo::it_fixups") fixups()

Iterator over the lazy-binding [Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LazyLoadDylibInfo_1_1Fixup>) entries.

#### [` fixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo6fixupsEv>)

inline [it\_const\_fixups](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo15it_const_fixupsE> "LIEF::MachO::LazyLoadDylibInfo::it_const_fixups") fixups() const

#### [` ~LazyLoadDylibInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfoD0Ev>)

~LazyLoadDylibInfo() override = default

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

Public Static Attributes

#### [` MAYBE_MISSING_FLAG `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo18MAYBE_MISSING_FLAGE>)

static auto MAYBE\_MISSING\_FLAG = 1

#### [` Fixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5FixupE>)

class Fixup

A single lazy-binding fixup decoded from the chain referenced by chain\_start\_image\_offset and decoded according to pointer\_format.

Public Functions

##### [` Fixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5Fixup5FixupEv>)

Fixup() = default

##### [` Fixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5Fixup5FixupE8uint64_t8uint32_tNSt6stringEb>)

inline Fixup(uint64\_t address, uint32\_t ordinal, std::string symbol, bool is\_auth)

##### [` Fixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5Fixup5FixupERK5Fixup>)

Fixup(const [Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5Fixup5FixupERK5Fixup> "LIEF::MachO::LazyLoadDylibInfo::Fixup::Fixup")&amp;) = default

##### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5FixupaSERK5Fixup>)

[Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5FixupE> "LIEF::MachO::LazyLoadDylibInfo::Fixup") &amp;operator=(const [Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5FixupE> "LIEF::MachO::LazyLoadDylibInfo::Fixup")&amp;) = default

##### [` Fixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5Fixup5FixupERR5Fixup>)

Fixup([Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5Fixup5FixupERR5Fixup> "LIEF::MachO::LazyLoadDylibInfo::Fixup::Fixup")&amp;&amp;) noexcept = default

##### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5FixupaSERR5Fixup>)

[Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5FixupE> "LIEF::MachO::LazyLoadDylibInfo::Fixup") &amp;operator=([Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5FixupE> "LIEF::MachO::LazyLoadDylibInfo::Fixup")&amp;&amp;) noexcept = default

##### [` ~Fixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5FixupD0Ev>)

~Fixup() = default

##### [` address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo5Fixup7addressEv>)

inline uint64\_t address() const

Virtual address of the slot bound by this fixup.

##### [` address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5Fixup7addressE8uint64_t>)

inline void address(uint64\_t value)

##### [` ordinal `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo5Fixup7ordinalEv>)

inline uint32\_t ordinal() const

Index of the bound symbol in the symbols table of [LazyLoadDylibInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LazyLoadDylibInfo>).

##### [` symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo5Fixup6symbolEv>)

inline std::string\_view symbol() const

Name of the bound symbol, resolved from [ordinal()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LazyLoadDylibInfo_1_1Fixup_1a2c43f1791545d4cd6d25011134a3f468>) (empty if the ordinal is out of the [symbols()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LazyLoadDylibInfo_1a2486eaa1554777aed8b2212906854ef6>) range).

##### [` is_auth `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo5Fixup7is_authEv>)

inline bool is\_auth() const

Whether the bound pointer is authenticated (`arm64e` PAC).

##### [` to_string `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17LazyLoadDylibInfo5Fixup9to_stringEv>)

std::string to\_string() const

Friends

##### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5FixuplsERNSt7ostreamERK5Fixup>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17LazyLoadDylibInfo5FixupE> "LIEF::MachO::LazyLoadDylibInfo::Fixup") &amp;fixup)

---

## [Source Version](<https://lief.re/doc/latest/formats/macho/cpp.html#source-version>)

### [` SourceVersion `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SourceVersionE>)

class SourceVersion : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the MachO [LoadCommand::TYPE::SOURCE\_VERSION](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand_1ae233a759e54dbc70715dcfb6465637b1a2179907aa7fdb919ac99c0839ffa895e>) This command is used to provide the *version* of the sources used to build the binary.

Public Types

#### [` version_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SourceVersion9version_tE>)

using version\_t = std::array&lt;uint32\_t, 5&gt;

Version is an array of **5** integers.

Public Functions

#### [` SourceVersion `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SourceVersion13SourceVersionEv>)

SourceVersion() = default

#### [` SourceVersion `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SourceVersion13SourceVersionERKN7details22source_version_commandE>)

SourceVersion(const details::source\_version\_command &amp;version\_cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SourceVersionaSERK13SourceVersion>)

[SourceVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SourceVersionE> "LIEF::MachO::SourceVersion") &amp;operator=(const [SourceVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SourceVersionE> "LIEF::MachO::SourceVersion") &amp;copy) = default

#### [` SourceVersion `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SourceVersion13SourceVersionERK13SourceVersion>)

SourceVersion(const [SourceVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SourceVersion13SourceVersionERK13SourceVersion> "LIEF::MachO::SourceVersion::SourceVersion") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13SourceVersion5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` ~SourceVersion `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SourceVersionD0Ev>)

~SourceVersion() override = default

#### [` version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13SourceVersion7versionEv>)

inline const [version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SourceVersion9version_tE> "LIEF::MachO::SourceVersion::version_t") &amp;version() const

Return the version as an array.

#### [` version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SourceVersion7versionERK9version_t>)

inline void version(const [version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SourceVersion9version_tE> "LIEF::MachO::SourceVersion::version_t") &amp;version)

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13SourceVersion6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13SourceVersion5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13SourceVersion7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Version Min](<https://lief.re/doc/latest/formats/macho/cpp.html#version-min>)

### [` VersionMin `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMinE>)

class VersionMin : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that wraps the LC\_VERSION\_MIN\_MACOSX, LC\_VERSION\_MIN\_IPHONEOS, … commands.

Public Types

#### [` version_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMin9version_tE>)

using version\_t = std::array&lt;uint32\_t, 3&gt;

Version is an array of **3** integers.

Public Functions

#### [` VersionMin `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMin10VersionMinEv>)

VersionMin() = default

#### [` VersionMin `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMin10VersionMinERKN7details19version_min_commandE>)

VersionMin(const details::version\_min\_command &amp;version\_cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMinaSERK10VersionMin>)

[VersionMin](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMinE> "LIEF::MachO::VersionMin") &amp;operator=(const [VersionMin](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMinE> "LIEF::MachO::VersionMin") &amp;copy) = default

#### [` VersionMin `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMin10VersionMinERK10VersionMin>)

VersionMin(const [VersionMin](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMin10VersionMinERK10VersionMin> "LIEF::MachO::VersionMin::VersionMin") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10VersionMin5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` ~VersionMin `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMinD0Ev>)

~VersionMin() override = default

#### [` version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10VersionMin7versionEv>)

inline const [version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMin9version_tE> "LIEF::MachO::VersionMin::version_t") &amp;version() const

Return the version as an array.

#### [` version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMin7versionERK9version_t>)

inline void version(const [version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMin9version_tE> "LIEF::MachO::VersionMin::version_t") &amp;version)

#### [` sdk `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10VersionMin3sdkEv>)

inline const [version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMin9version_tE> "LIEF::MachO::VersionMin::version_t") &amp;sdk() const

Return the sdk version as an array.

#### [` sdk `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMin3sdkERK9version_t>)

inline void sdk(const [version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMin9version_tE> "LIEF::MachO::VersionMin::version_t") &amp;sdk)

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10VersionMin6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10VersionMin5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10VersionMin7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Routine](<https://lief.re/doc/latest/formats/macho/cpp.html#routine>)

### [` Routine `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7RoutineE>)

class Routine : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the `LC_ROUTINE/LC_ROUTINE64` commands. According to the Mach-O `loader.h` documentation:

> The routines command contains the address of the dynamic shared library initialization routine and an index into the module table for the module that defines the routine. Before any modules are used from the library the dynamic linker fully binds the module that defines the initialization routine and then calls it. This gets called before any module initialization routines (used for C++ static constructors) in the library.

Public Functions

#### [` Routine `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Routine7RoutineEv>)

Routine() = default

#### [` TRoutine `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0EN4LIEF5MachO7Routine7RoutineERK1T>)

template&lt;class T&gt;  
Routine(const [T](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0EN4LIEF5MachO7Routine7RoutineERK1T> "LIEF::MachO::Routine::Routine::T") &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7RoutineaSERK7Routine>)

[Routine](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7RoutineE> "LIEF::MachO::Routine") &amp;operator=(const [Routine](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7RoutineE> "LIEF::MachO::Routine") &amp;copy) = default

#### [` Routine `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Routine7RoutineERK7Routine>)

Routine(const [Routine](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Routine7RoutineERK7Routine> "LIEF::MachO::Routine::Routine") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Routine5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` init_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Routine12init_addressEv>)

inline uint64\_t init\_address() const

address of initialization routine

#### [` init_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Routine12init_addressE8uint64_t>)

inline void init\_address(uint64\_t addr)

#### [` init_module `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Routine11init_moduleEv>)

inline uint64\_t init\_module() const

Index into the module table that the init routine is defined in.

#### [` init_module `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Routine11init_moduleE8uint64_t>)

inline void init\_module(uint64\_t mod)

#### [` reserved1 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Routine9reserved1Ev>)

inline uint64\_t reserved1() const

#### [` reserved1 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Routine9reserved1E8uint64_t>)

inline void reserved1(uint64\_t value)

#### [` reserved2 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Routine9reserved2Ev>)

inline uint64\_t reserved2() const

#### [` reserved2 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Routine9reserved2E8uint64_t>)

inline void reserved2(uint64\_t value)

#### [` reserved3 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Routine9reserved3Ev>)

inline uint64\_t reserved3() const

#### [` reserved3 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Routine9reserved3E8uint64_t>)

inline void reserved3(uint64\_t value)

#### [` reserved4 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Routine9reserved4Ev>)

inline uint64\_t reserved4() const

#### [` reserved4 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Routine9reserved4E8uint64_t>)

inline void reserved4(uint64\_t value)

#### [` reserved5 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Routine9reserved5Ev>)

inline uint64\_t reserved5() const

#### [` reserved5 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Routine9reserved5E8uint64_t>)

inline void reserved5(uint64\_t value)

#### [` reserved6 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Routine9reserved6Ev>)

inline uint64\_t reserved6() const

#### [` reserved6 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Routine9reserved6E8uint64_t>)

inline void reserved6(uint64\_t value)

#### [` ~Routine `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7RoutineD0Ev>)

~Routine() override = default

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Routine6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO7Routine5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7Routine7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#relocation>)

### [` Relocation `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE>)

class Relocation : public LIEF::[Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10RelocationE> "LIEF::Relocation")

Class that represents a Mach-O relocation.

> **See also**
> 
> - [MachO::RelocationObject](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1RelocationObject>)
> - [MachO::RelocationDyld](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1RelocationDyld>)
> - [MachO::RelocationFixup](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1RelocationFixup>)

Subclassed by [LIEF::MachO::RelocationDyld](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1RelocationDyld>), [LIEF::MachO::RelocationFixup](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1RelocationFixup>), [LIEF::MachO::RelocationObject](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1RelocationObject>)

Public Types

#### [` ORIGIN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation6ORIGINE>)

enum class ORIGIN

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation6ORIGIN7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` DYLDINFO `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation6ORIGIN8DYLDINFOE>)

enumerator DYLDINFO = 1

##### [` RELOC_TABLE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation6ORIGIN11RELOC_TABLEE>)

enumerator RELOC\_TABLE = 2

##### [` CHAINED_FIXUPS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation6ORIGIN14CHAINED_FIXUPSE>)

enumerator CHAINED\_FIXUPS = 3

Public Functions

#### [` Relocation `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation10RelocationEv>)

Relocation() = default

#### [` Relocation `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation10RelocationE8uint64_t7uint8_t>)

Relocation(uint64\_t address, uint8\_t type)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationaSERK10Relocation>)

[Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation") &amp;operator=(const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation") &amp;other)

#### [` Relocation `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation10RelocationERK10Relocation>)

Relocation(const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation10RelocationERK10Relocation> "LIEF::MachO::Relocation::Relocation") &amp;other)

#### [` swap `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation4swapER10Relocation>)

void swap([Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation") &amp;other) noexcept

#### [` ~Relocation `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationD0Ev>)

~Relocation() override = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10Relocation5cloneEv>)

virtual std::unique\_ptr&lt;[Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation")&gt; clone() const = 0

#### [` is_pc_relative `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10Relocation14is_pc_relativeEv>)

virtual bool is\_pc\_relative() const = 0

Indicates whether the item containing the address to be relocated is part of a CPU instruction that uses PC-relative addressing.

For addresses contained in PC-relative instructions, the CPU adds the address of the instruction to the address contained in the instruction.

#### [` type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10Relocation4typeEv>)

inline virtual uint8\_t type() const

Type of the relocation according to the [Relocation::architecture](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation_1a0042fa3cf5cfc3672c527428c695b6ae>) and/or the [Relocation::origin](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation_1a6967145559ec198904ddd8e478f65016>).

See:

- [MachO::X86\_RELOCATION](<https://lief.re/doc/latest/formats/macho/cpp.html#namespaceLIEF_1_1MachO_1a3c9b248d938a4910794ac4261e109f62>)
- [MachO::X86\_64\_RELOCATION](<https://lief.re/doc/latest/formats/macho/cpp.html#namespaceLIEF_1_1MachO_1a1431532c7948d761033d4e39d1cf8175>)
- [MachO::PPC\_RELOCATION](<https://lief.re/doc/latest/formats/macho/cpp.html#namespaceLIEF_1_1MachO_1a78b489c559b35c6e43f97e8c0cbef75c>)
- [MachO::ARM\_RELOCATION](<https://lief.re/doc/latest/formats/macho/cpp.html#namespaceLIEF_1_1MachO_1a0d949b1c320c38787d6a8dfea0907e9d>)
- [MachO::ARM64\_RELOCATION](<https://lief.re/doc/latest/formats/macho/cpp.html#namespaceLIEF_1_1MachO_1a07b1f370e9f3cbed3e8c646c8738e044>)
- MachO::REBASE\_TYPES

#### [` architecture `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10Relocation12architectureEv>)

inline [Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header")::[CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE> "LIEF::MachO::Header::CPU_TYPE") architecture() const

Architecture targeted by this relocation.

#### [` origin `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10Relocation6originEv>)

virtual [ORIGIN](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation6ORIGINE> "LIEF::MachO::Relocation::ORIGIN") origin() const = 0

Origin of the relocation.

#### [` has_symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10Relocation10has_symbolEv>)

inline bool has\_symbol() const

`true` if the relocation has a symbol associated with

#### [` symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation6symbolEv>)

inline [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") \*symbol()

[Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>) associated with the relocation, if any, otherwise a nullptr.

#### [` symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10Relocation6symbolEv>)

inline const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") \*symbol() const

#### [` has_section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10Relocation11has_sectionEv>)

inline bool has\_section() const

`true` if the relocation has a section associated with

#### [` section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation7sectionEv>)

inline [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") \*section()

[Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>) associated with the relocation, if any, otherwise a nullptr.

#### [` section `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10Relocation7sectionEv>)

inline const [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section") \*section() const

#### [` has_segment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10Relocation11has_segmentEv>)

inline bool has\_segment() const

`true` if the relocation has a [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>) associated with

#### [` segment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation7segmentEv>)

inline [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") \*segment()

[SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>) associated with the relocation, if any, otherwise a nullptr.

#### [` segment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10Relocation7segmentEv>)

inline const [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") \*segment() const

#### [` Tcast `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0ENK4LIEF5MachO10Relocation4castEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0ENK4LIEF5MachO10Relocation4castEPK1Tv> "LIEF::MachO::Relocation::cast::T") \*cast() const

#### [` Tcast `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0EN4LIEF5MachO10Relocation4castEP1Tv>)

template&lt;class T&gt;  
inline [T](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4I0EN4LIEF5MachO10Relocation4castEP1Tv> "LIEF::MachO::Relocation::cast::T") \*cast()

#### [` pc_relative `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation11pc_relativeEb>)

virtual void pc\_relative(bool val) = 0

#### [` type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation4typeE7uint8_t>)

virtual void type(uint8\_t type)

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10Relocation6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10Relocation5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const

#### [` address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10Relocation7addressEv>)

inline virtual uint64\_t address() const

[Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>)’s address.

#### [` address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation7addressE8uint64_t>)

inline virtual void address(uint64\_t address)

#### [` size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10Relocation4sizeEv>)

inline virtual size\_t size() const

[Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>) size in **bits**.

#### [` size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation4sizeE6size_t>)

inline virtual void size(size\_t size)

Public Static Attributes

#### [` R_SCATTERED `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation11R_SCATTEREDE>)

static auto R\_SCATTERED = uint32\_t(0x80000000)

#### [` R_ABS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10Relocation5R_ABSE>)

static auto R\_ABS = uint32\_t(0)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationlsERNSt7ostreamERK10Relocation>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation") &amp;relocation)

---

## [Relocation Object](<https://lief.re/doc/latest/formats/macho/cpp.html#relocation-object>)

### [` RelocationObject `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObjectE>)

class RelocationObject : public LIEF::MachO::[Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation")

Class that represents a relocation present in the MachO object file (`.o`). Usually, this kind of relocation is found in the [MachO::Section](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Section>).

> **See also**
> 
> [RelocationDyld](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1RelocationDyld>)

Public Functions

#### [` RelocationObject `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObject16RelocationObjectEv>)

RelocationObject() = default

#### [` RelocationObject `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObject16RelocationObjectERKN7details15relocation_infoE>)

RelocationObject(const details::relocation\_info &amp;relocinfo)

#### [` RelocationObject `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObject16RelocationObjectERKN7details25scattered_relocation_infoE>)

RelocationObject(const details::scattered\_relocation\_info &amp;scattered\_relocinfo)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObjectaSERK16RelocationObject>)

[RelocationObject](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObjectE> "LIEF::MachO::RelocationObject") &amp;operator=(const [RelocationObject](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObjectE> "LIEF::MachO::RelocationObject") &amp;other) = default

#### [` RelocationObject `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObject16RelocationObjectERK16RelocationObject>)

RelocationObject(const [RelocationObject](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObject16RelocationObjectERK16RelocationObject> "LIEF::MachO::RelocationObject::RelocationObject") &amp;other) = default

#### [` swap `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObject4swapER16RelocationObject>)

void swap([RelocationObject](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObjectE> "LIEF::MachO::RelocationObject") &amp;other) noexcept

#### [` ~RelocationObject `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObjectD0Ev>)

~RelocationObject() override = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16RelocationObject5cloneEv>)

inline virtual std::unique\_ptr&lt;[Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObject10RelocationEv> "LIEF::MachO::RelocationObject::Relocation")&gt; clone() const override

#### [` is_pc_relative `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16RelocationObject14is_pc_relativeEv>)

inline virtual bool is\_pc\_relative() const override

Whether the relocation is PC relative.

#### [` size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16RelocationObject4sizeEv>)

virtual size\_t size() const override

Size of the relocation.

#### [` address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16RelocationObject7addressEv>)

virtual uint64\_t address() const override

Address where the relocation is applied This address is relative to the start of the section where the relocation takes place.

#### [` is_scattered `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16RelocationObject12is_scatteredEv>)

inline bool is\_scattered() const

`true` if the relocation is a scattered one

#### [` value `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16RelocationObject5valueEv>)

int32\_t value() const

For **scattered** relocations: The address of the relocatable expression for the item in the file that needs to be updated if the address is changed.

For relocatable expressions with the difference of two section addresses, the address from which to subtract (in mathematical terms, the minuend) is contained in the first relocation entry and the address to subtract (the subtrahend) is contained in the second relocation entry.

#### [` origin `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16RelocationObject6originEv>)

inline virtual ORIGIN origin() const override

Origin of the relocation. For this object it should be [Relocation::ORIGIN::RELOC\_TABLE](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation_1a71104e89164d18fa01afd11fd53aff71a2b343b521482fcda0b050fc9b5022439>)).

#### [` pc_relative `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObject11pc_relativeEb>)

inline virtual void pc\_relative(bool val) override

#### [` size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObject4sizeE6size_t>)

virtual void size(size\_t size) override

#### [` value `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObject5valueE7int32_t>)

void value(int32\_t value)

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16RelocationObject6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16RelocationObject5printERNSt7ostreamE>)

inline virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` Relocation `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObject10RelocationEv>)

Relocation() = default

#### [` Relocation `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObject10RelocationE8uint64_t7uint8_t>)

Relocation(uint64\_t address, uint8\_t type)

#### [` Relocation `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObject10RelocationERK10Relocation>)

Relocation(const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObject10RelocationERK10Relocation> "LIEF::MachO::RelocationObject::Relocation") &amp;other)

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObject7classofERK10Relocation>)

static inline bool classof(const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16RelocationObject10RelocationEv> "LIEF::MachO::RelocationObject::Relocation") &amp;r)

---

## [Relocation Dyld](<https://lief.re/doc/latest/formats/macho/cpp.html#relocation-dyld>)

### [` RelocationDyld `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyldE>)

class RelocationDyld : public LIEF::MachO::[Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation")

Class that represents a relocation found in the [DyldInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldInfo>) structure.

While this class does not have an associated structure in the Mach-O format specification, it provides a convenient interface for the Dyld::rebase

Public Functions

#### [` RelocationDyld `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyld14RelocationDyldEv>)

RelocationDyld() = default

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyldaSERK14RelocationDyld>)

[RelocationDyld](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyldE> "LIEF::MachO::RelocationDyld") &amp;operator=(const [RelocationDyld](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyldE> "LIEF::MachO::RelocationDyld")&amp;) = default

#### [` RelocationDyld `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyld14RelocationDyldERK14RelocationDyld>)

RelocationDyld(const [RelocationDyld](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyld14RelocationDyldERK14RelocationDyld> "LIEF::MachO::RelocationDyld::RelocationDyld")&amp;) = default

#### [` ~RelocationDyld `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyldD0Ev>)

~RelocationDyld() override = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14RelocationDyld5cloneEv>)

inline virtual std::unique\_ptr&lt;[Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyld10RelocationEv> "LIEF::MachO::RelocationDyld::Relocation")&gt; clone() const override

#### [` is_pc_relative `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14RelocationDyld14is_pc_relativeEv>)

virtual bool is\_pc\_relative() const override

Indicates whether the item containing the address to be relocated is part of a CPU instruction that uses PC-relative addressing.

For addresses contained in PC-relative instructions, the CPU adds the address of the instruction to the address contained in the instruction.

#### [` origin `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14RelocationDyld6originEv>)

inline virtual ORIGIN origin() const override

Origin of the relocation. For this concrete object, it should be [Relocation::ORIGIN::DYLDINFO](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation_1a71104e89164d18fa01afd11fd53aff71aeecc195342dfb4193cb8e73552e9957c>).

#### [` pc_relative `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyld11pc_relativeEb>)

virtual void pc\_relative(bool val) override

#### [` operator< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14RelocationDyldltERK14RelocationDyld>)

bool operator&lt;(const [RelocationDyld](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyldE> "LIEF::MachO::RelocationDyld") &amp;rhs) const

#### [` operator>= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14RelocationDyldgeERK14RelocationDyld>)

inline bool operator&gt;=(const [RelocationDyld](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyldE> "LIEF::MachO::RelocationDyld") &amp;rhs) const

#### [` operator> `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14RelocationDyldgtERK14RelocationDyld>)

bool operator&gt;(const [RelocationDyld](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyldE> "LIEF::MachO::RelocationDyld") &amp;rhs) const

#### [` operator<= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14RelocationDyldleERK14RelocationDyld>)

inline bool operator&lt;=(const [RelocationDyld](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyldE> "LIEF::MachO::RelocationDyld") &amp;rhs) const

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14RelocationDyld6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14RelocationDyld5printERNSt7ostreamE>)

inline virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` Relocation `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyld10RelocationEv>)

Relocation() = default

#### [` Relocation `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyld10RelocationE8uint64_t7uint8_t>)

Relocation(uint64\_t address, uint8\_t type)

#### [` Relocation `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyld10RelocationERK10Relocation>)

Relocation(const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyld10RelocationERK10Relocation> "LIEF::MachO::RelocationDyld::Relocation") &amp;other)

#### [` operator< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14RelocationDyldltERK10Relocation>)

inline virtual bool operator&lt;(const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyld10RelocationEv> "LIEF::MachO::RelocationDyld::Relocation") &amp;rhs) const

Comparison based on the [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>)’s **address**.

#### [` operator<= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14RelocationDyldleERK10Relocation>)

inline virtual bool operator&lt;=(const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyld10RelocationEv> "LIEF::MachO::RelocationDyld::Relocation") &amp;rhs) const

Comparison based on the [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>)’s **address**.

#### [` operator> `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14RelocationDyldgtERK10Relocation>)

inline virtual bool operator&gt;(const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyld10RelocationEv> "LIEF::MachO::RelocationDyld::Relocation") &amp;rhs) const

Comparison based on the [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>)’s **address**.

#### [` operator>= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14RelocationDyldgeERK10Relocation>)

inline virtual bool operator&gt;=(const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyld10RelocationEv> "LIEF::MachO::RelocationDyld::Relocation") &amp;rhs) const

Comparison based on the [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation>)’s **address**.

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyld7classofERK10Relocation>)

static inline bool classof(const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14RelocationDyld10RelocationEv> "LIEF::MachO::RelocationDyld::Relocation") &amp;r)

---

## [Relocation Fixup](<https://lief.re/doc/latest/formats/macho/cpp.html#relocation-fixup>)

### [` RelocationFixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixupE>)

class RelocationFixup : public LIEF::MachO::[Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation")

Class that represents a rebase relocation found in the `LC_DYLD_CHAINED_FIXUPS` command.

This class extends [LIEF::Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Relocation>) in which [LIEF::Relocation::address](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Relocation_1adb19daf2d0483530bd4ae6c24323e584>) is set to the absolute virtual address where the relocation must take place (e.g. `0x10000d270`).

On the other hand, [RelocationFixup::target](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1RelocationFixup_1a62de980ac78763e311e8fac2d5358343>) contains the value that should be set at [LIEF::Relocation::address](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Relocation_1adb19daf2d0483530bd4ae6c24323e584>) if the imagebase is [LIEF::Binary::imagebase](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Binary_1ab8ccb2b1f4a40e5c0c244b866245574d>) (e.g. `0x1000073a8`).

If the Mach-O loader chooses another base address (like 0x7ff100000), it must set `0x10000d270` to `0x7ff1073a8`.

Public Functions

#### [` RelocationFixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixup15RelocationFixupEv>)

RelocationFixup() = delete

#### [` RelocationFixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixup15RelocationFixupE23DYLD_CHAINED_PTR_FORMAT8uint64_t>)

RelocationFixup([DYLD\_CHAINED\_PTR\_FORMAT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMATE> "LIEF::MachO::DYLD_CHAINED_PTR_FORMAT") fmt, uint64\_t imagebase)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixupaSERK15RelocationFixup>)

[RelocationFixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixupE> "LIEF::MachO::RelocationFixup") &amp;operator=(const [RelocationFixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixupE> "LIEF::MachO::RelocationFixup")&amp;)

#### [` RelocationFixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixup15RelocationFixupERK15RelocationFixup>)

RelocationFixup(const [RelocationFixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixup15RelocationFixupERK15RelocationFixup> "LIEF::MachO::RelocationFixup::RelocationFixup")&amp;)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixupaSERR15RelocationFixup>)

[RelocationFixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixupE> "LIEF::MachO::RelocationFixup") &amp;operator=([RelocationFixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixupE> "LIEF::MachO::RelocationFixup")&amp;&amp;) noexcept = default

#### [` RelocationFixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixup15RelocationFixupERR15RelocationFixup>)

RelocationFixup([RelocationFixup](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixup15RelocationFixupERR15RelocationFixup> "LIEF::MachO::RelocationFixup::RelocationFixup")&amp;&amp;) noexcept = default

#### [` ~RelocationFixup `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixupD0Ev>)

~RelocationFixup() override

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15RelocationFixup5cloneEv>)

inline virtual std::unique\_ptr&lt;[Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation")&gt; clone() const override

#### [` is_pc_relative `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15RelocationFixup14is_pc_relativeEv>)

inline virtual bool is\_pc\_relative() const override

Not relevant for this kind of relocation.

#### [` origin `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15RelocationFixup6originEv>)

inline virtual ORIGIN origin() const override

Origin of the relocation. For this concrete object, it should be [Relocation::ORIGIN::CHAINED\_FIXUPS](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation_1a71104e89164d18fa01afd11fd53aff71a4f35958c8adec205e436a37ca0a588ad>).

#### [` ptr_format `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15RelocationFixup10ptr_formatEv>)

inline [DYLD\_CHAINED\_PTR\_FORMAT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMATE> "LIEF::MachO::DYLD_CHAINED_PTR_FORMAT") ptr\_format() const

#### [` target `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15RelocationFixup6targetEv>)

uint64\_t target() const

The value that should be set at the address pointed by [LIEF::Relocation::address](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Relocation_1adb19daf2d0483530bd4ae6c24323e584>) if the imagebase chosen by the loader is [LIEF::Binary::imagebase](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Binary_1ab8ccb2b1f4a40e5c0c244b866245574d>). Otherwise: [target()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1RelocationFixup_1a62de980ac78763e311e8fac2d5358343>) - [LIEF::Binary::imagebase()](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Binary_1ab8ccb2b1f4a40e5c0c244b866245574d>) + new\_imagebase.

#### [` target `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixup6targetE8uint64_t>)

void target(uint64\_t target)

#### [` pc_relative `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixup11pc_relativeEb>)

inline virtual void pc\_relative(bool) override

Not relevant for this kind of relocation.

#### [` offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15RelocationFixup6offsetEv>)

inline uint32\_t offset() const

#### [` offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixup6offsetE8uint32_t>)

inline void offset(uint32\_t offset)

#### [` address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15RelocationFixup7addressEv>)

inline virtual uint64\_t address() const override

The address of this relocation is bound to its offset.

#### [` address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixup7addressE8uint64_t>)

inline virtual void address(uint64\_t address) override

Changing the address means changing the offset.

#### [` next `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15RelocationFixup4nextEv>)

uint32\_t next() const

Return the (unscaled) next offset in the chain.

#### [` next `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixup4nextE8uint32_t>)

void next(uint32\_t value)

Change next offset of the current element.

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15RelocationFixup6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15RelocationFixup5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15RelocationFixup7classofERK10Relocation>)

static inline bool classof(const [Relocation](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10RelocationE> "LIEF::MachO::Relocation") &amp;r)

---

## [Dyld Binding Info](<https://lief.re/doc/latest/formats/macho/cpp.html#dyld-binding-info>)

### [` DyldBindingInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfoE>)

class DyldBindingInfo : public LIEF::MachO::BindingInfo

This class represents a symbol binding operation associated with the LC\_DYLD\_INFO bytecode.

It does not represent a structure that exists in the Mach-O format specifications but it provides a *view* on an entry of the Dyld binding opcodes.

> **See also**
> 
> BindingInfo

Public Types

#### [` CLASS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo5CLASSE>)

enum class CLASS : uint64\_t

*Values:*

##### [` WEAK `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo5CLASS4WEAKE>)

enumerator WEAK = 1u

##### [` LAZY `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo5CLASS4LAZYE>)

enumerator LAZY = 2u

##### [` STANDARD `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo5CLASS8STANDARDE>)

enumerator STANDARD = 3u

##### [` THREADED `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo5CLASS8THREADEDE>)

enumerator THREADED = 100u

#### [` TYPE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo4TYPEE>)

enum class TYPE : uint64\_t

*Values:*

##### [` POINTER `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo4TYPE7POINTERE>)

enumerator POINTER = 1u

##### [` TEXT_ABSOLUTE32 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo4TYPE15TEXT_ABSOLUTE32E>)

enumerator TEXT\_ABSOLUTE32 = 2u

##### [` TEXT_PCREL32 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo4TYPE12TEXT_PCREL32E>)

enumerator TEXT\_PCREL32 = 3u

Public Functions

#### [` DyldBindingInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo15DyldBindingInfoEv>)

DyldBindingInfo() = default

#### [` DyldBindingInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo15DyldBindingInfoE5CLASS4TYPE8uint64_t7int64_t7int32_tbb8uint64_t>)

DyldBindingInfo([CLASS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo5CLASSE> "LIEF::MachO::DyldBindingInfo::CLASS") cls, [TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo4TYPEE> "LIEF::MachO::DyldBindingInfo::TYPE") type, uint64\_t address, int64\_t addend = 0, int32\_t oridnal = 0, bool is\_weak = false, bool is\_non\_weak\_definition = false, uint64\_t offset = 0)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfoaSERK15DyldBindingInfo>)

[DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfoE> "LIEF::MachO::DyldBindingInfo") &amp;operator=(const [DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfoE> "LIEF::MachO::DyldBindingInfo") &amp;other) = default

#### [` DyldBindingInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo15DyldBindingInfoERK15DyldBindingInfo>)

DyldBindingInfo(const [DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo15DyldBindingInfoERK15DyldBindingInfo> "LIEF::MachO::DyldBindingInfo::DyldBindingInfo") &amp;other) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfoaSERR15DyldBindingInfo>)

[DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfoE> "LIEF::MachO::DyldBindingInfo") &amp;operator=([DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfoE> "LIEF::MachO::DyldBindingInfo")&amp;&amp;) noexcept = default

#### [` DyldBindingInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo15DyldBindingInfoERR15DyldBindingInfo>)

DyldBindingInfo([DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo15DyldBindingInfoERR15DyldBindingInfo> "LIEF::MachO::DyldBindingInfo::DyldBindingInfo")&amp;&amp;) noexcept = default

#### [` swap `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo4swapER15DyldBindingInfo>)

void swap([DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfoE> "LIEF::MachO::DyldBindingInfo") &amp;other) noexcept

#### [` binding_class `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldBindingInfo13binding_classEv>)

inline [CLASS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo5CLASSE> "LIEF::MachO::DyldBindingInfo::CLASS") binding\_class() const

Class of the binding (weak, lazy, …).

#### [` binding_class `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo13binding_classE5CLASS>)

inline void binding\_class([CLASS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo5CLASSE> "LIEF::MachO::DyldBindingInfo::CLASS") bind\_class)

#### [` binding_type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldBindingInfo12binding_typeEv>)

inline [TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo4TYPEE> "LIEF::MachO::DyldBindingInfo::TYPE") binding\_type() const

Type of the binding. Most of the time it’s [TYPE::POINTER](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldBindingInfo_1a98265f912f5229d0e02f6d9bdaf476f0aa5f41c79d3f86121f0f658eba49128d5>).

#### [` binding_type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo12binding_typeE4TYPE>)

inline void binding\_type([TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo4TYPEE> "LIEF::MachO::DyldBindingInfo::TYPE") type)

#### [` is_non_weak_definition `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldBindingInfo22is_non_weak_definitionEv>)

inline bool is\_non\_weak\_definition() const

#### [` set_non_weak_definition `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo23set_non_weak_definitionEb>)

inline void set\_non\_weak\_definition(bool val)

#### [` original_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldBindingInfo15original_offsetEv>)

inline uint64\_t original\_offset() const

Original relative offset of the binding opcodes.

#### [` type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldBindingInfo4typeEv>)

inline virtual BindingInfo::TYPES type() const override

The type of the binding. This type provides the origin of the binding (LC\_DYLD\_INFO or LC\_DYLD\_CHAINED\_FIXUPS).

#### [` ~DyldBindingInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfoD0Ev>)

~DyldBindingInfo() override = default

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldBindingInfo6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfo7classofEPK11BindingInfo>)

static inline bool classof(const BindingInfo \*info)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfolsERNSt7ostreamERK15DyldBindingInfo>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldBindingInfoE> "LIEF::MachO::DyldBindingInfo") &amp;info)

---

## [Chained Binding Info](<https://lief.re/doc/latest/formats/macho/cpp.html#chained-binding-info>)

### [` ChainedBindingInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfoE>)

class ChainedBindingInfo : public LIEF::MachO::BindingInfo

This class represents a symbol binding operation associated with the LC\_DYLD\_CHAINED\_FIXUPS command.

This class does not represent a structure that exists in the Mach-O format specifications but it provides a *view* on an entry.

> **See also**
> 
> BindingInfo

Public Functions

#### [` ChainedBindingInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfo18ChainedBindingInfoEv>)

ChainedBindingInfo() = delete

#### [` ChainedBindingInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfo18ChainedBindingInfoE19DYLD_CHAINED_FORMATb>)

explicit ChainedBindingInfo([DYLD\_CHAINED\_FORMAT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO19DYLD_CHAINED_FORMATE> "LIEF::MachO::DYLD_CHAINED_FORMAT") fmt, bool is\_weak)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfoaSERK18ChainedBindingInfo>)

[ChainedBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfoE> "LIEF::MachO::ChainedBindingInfo") &amp;operator=(const [ChainedBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfoE> "LIEF::MachO::ChainedBindingInfo") &amp;other)

#### [` ChainedBindingInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfo18ChainedBindingInfoERK18ChainedBindingInfo>)

ChainedBindingInfo(const [ChainedBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfo18ChainedBindingInfoERK18ChainedBindingInfo> "LIEF::MachO::ChainedBindingInfo::ChainedBindingInfo") &amp;other)

#### [` ChainedBindingInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfo18ChainedBindingInfoERR18ChainedBindingInfo>)

ChainedBindingInfo([ChainedBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfo18ChainedBindingInfoERR18ChainedBindingInfo> "LIEF::MachO::ChainedBindingInfo::ChainedBindingInfo")&amp;&amp;) noexcept

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfoaSERR18ChainedBindingInfo>)

[ChainedBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfoE> "LIEF::MachO::ChainedBindingInfo") &amp;operator=([ChainedBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfoE> "LIEF::MachO::ChainedBindingInfo")&amp;&amp;) noexcept

#### [` format `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO18ChainedBindingInfo6formatEv>)

inline [DYLD\_CHAINED\_FORMAT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO19DYLD_CHAINED_FORMATE> "LIEF::MachO::DYLD_CHAINED_FORMAT") format() const

Format of the imports.

#### [` ptr_format `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO18ChainedBindingInfo10ptr_formatEv>)

inline [DYLD\_CHAINED\_PTR\_FORMAT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMATE> "LIEF::MachO::DYLD_CHAINED_PTR_FORMAT") ptr\_format() const

Format of the pointer.

#### [` offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO18ChainedBindingInfo6offsetEv>)

inline uint32\_t offset() const

Original offset in the chain of this binding.

#### [` offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfo6offsetE8uint32_t>)

inline void offset(uint32\_t offset)

#### [` address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO18ChainedBindingInfo7addressEv>)

inline virtual uint64\_t address() const override

Address of the binding.

#### [` address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfo7addressE8uint64_t>)

inline virtual void address(uint64\_t address) override

#### [` sign_extended_addend `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO18ChainedBindingInfo20sign_extended_addendEv>)

uint64\_t sign\_extended\_addend() const

#### [` type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO18ChainedBindingInfo4typeEv>)

inline virtual TYPES type() const override

The type of the binding. This type provides the origin of the binding (LC\_DYLD\_INFO or LC\_DYLD\_CHAINED\_FIXUPS).

#### [` ~ChainedBindingInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfoD0Ev>)

~ChainedBindingInfo() override

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO18ChainedBindingInfo6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfo7classofEPK11BindingInfo>)

static inline bool classof(const BindingInfo \*info)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfolsERNSt7ostreamERK18ChainedBindingInfo>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [ChainedBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfoE> "LIEF::MachO::ChainedBindingInfo") &amp;info)

---

## [Export Info](<https://lief.re/doc/latest/formats/macho/cpp.html#export-info>)

### [` ExportInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE>)

class ExportInfo : public LIEF::Object

Class that provides an interface over the Dyld export info.

This class does not represent a structure that exists in the Mach-O format specification but provides a *view* on an entry of the Dyld export trie.

Public Types

#### [` KIND `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo4KINDE>)

enum class KIND : uint64\_t

*Values:*

##### [` REGULAR `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo4KIND7REGULARE>)

enumerator REGULAR = 0x00u

##### [` THREAD_LOCAL_KIND `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo4KIND17THREAD_LOCAL_KINDE>)

enumerator THREAD\_LOCAL\_KIND = 0x01u

##### [` ABSOLUTE_KIND `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo4KIND13ABSOLUTE_KINDE>)

enumerator ABSOLUTE\_KIND = 0x02u

#### [` FLAGS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo5FLAGSE>)

enum class FLAGS : uint64\_t

*Values:*

##### [` WEAK_DEFINITION `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo5FLAGS15WEAK_DEFINITIONE>)

enumerator WEAK\_DEFINITION = 0x04u

##### [` REEXPORT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo5FLAGS8REEXPORTE>)

enumerator REEXPORT = 0x08u

##### [` STUB_AND_RESOLVER `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo5FLAGS17STUB_AND_RESOLVERE>)

enumerator STUB\_AND\_RESOLVER = 0x10u

##### [` STATIC_RESOLVER `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo5FLAGS15STATIC_RESOLVERE>)

enumerator STATIC\_RESOLVER = 0x20u

#### [` flag_list_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo11flag_list_tE>)

using flag\_list\_t = std::vector&lt;[FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo5FLAGSE> "LIEF::MachO::ExportInfo::FLAGS")&gt;

Public Functions

#### [` ExportInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo10ExportInfoEv>)

ExportInfo() = default

#### [` ExportInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo10ExportInfoE8uint64_t8uint64_t8uint64_t>)

inline ExportInfo(uint64\_t address, uint64\_t flags, uint64\_t offset = 0)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoaSE10ExportInfo>)

[ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo") &amp;operator=([ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo") copy)

#### [` ExportInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo10ExportInfoERK10ExportInfo>)

ExportInfo(const [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo10ExportInfoERK10ExportInfo> "LIEF::MachO::ExportInfo::ExportInfo") &amp;copy)

#### [` swap `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo4swapER10ExportInfo>)

void swap([ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo") &amp;other) noexcept

#### [` node_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10ExportInfo11node_offsetEv>)

inline uint64\_t node\_offset() const

Original offset in the export Trie.

#### [` flags `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10ExportInfo5flagsEv>)

inline uint64\_t flags() const

Some information ([ExportInfo::FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ExportInfo_1a1ba4c2b94c5cd281b5ac511447d4512c>)) about the export. (like weak export, reexport, …).

#### [` flags `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo5flagsE8uint64_t>)

inline void flags(uint64\_t flags)

#### [` flags_list `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10ExportInfo10flags_listEv>)

[flag\_list\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo11flag_list_tE> "LIEF::MachO::ExportInfo::flag_list_t") flags\_list() const

The export [flags()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ExportInfo_1a75d244c141ddb99aec15c9a05d51313c>) as a list.

#### [` has `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10ExportInfo3hasE5FLAGS>)

bool has([FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo5FLAGSE> "LIEF::MachO::ExportInfo::FLAGS") flag) const

Check if the current entry contains the provided [ExportInfo::FLAGS](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ExportInfo_1a1ba4c2b94c5cd281b5ac511447d4512c>).

#### [` kind `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10ExportInfo4kindEv>)

inline [KIND](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo4KINDE> "LIEF::MachO::ExportInfo::KIND") kind() const

The export’s kind (regular, thread local, absolute, …).

#### [` other `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10ExportInfo5otherEv>)

inline uint64\_t other() const

#### [` address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10ExportInfo7addressEv>)

inline uint64\_t address() const

The address of the export.

#### [` address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo7addressE8uint64_t>)

inline void address(uint64\_t addr)

#### [` has_symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10ExportInfo10has_symbolEv>)

inline bool has\_symbol() const

Check if a symbol is associated with this export.

#### [` symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10ExportInfo6symbolEv>)

inline const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") \*symbol() const

[MachO::Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>) associated with this export or a nullptr if no symbol.

#### [` symbol `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo6symbolEv>)

inline [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") \*symbol()

#### [` alias `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo5aliasEv>)

inline [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") \*alias()

If the export is a [ExportInfo::FLAGS::REEXPORT](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ExportInfo_1a1ba4c2b94c5cd281b5ac511447d4512cadacbc094b0738e436566cee9ebbf8cce>), this returns the (optional) [MachO::Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Symbol>).

#### [` alias `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10ExportInfo5aliasEv>)

inline const [Symbol](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6SymbolE> "LIEF::MachO::Symbol") \*alias() const

#### [` alias_library `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfo13alias_libraryEv>)

inline [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE> "LIEF::MachO::DylibCommand") \*alias\_library()

If the export is a [ExportInfo::FLAGS::REEXPORT](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ExportInfo_1a1ba4c2b94c5cd281b5ac511447d4512cadacbc094b0738e436566cee9ebbf8cce>), this returns the (optional) library ([MachO::DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DylibCommand>)).

#### [` alias_library `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10ExportInfo13alias_libraryEv>)

inline const [DylibCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12DylibCommandE> "LIEF::MachO::DylibCommand") \*alias\_library() const

#### [` ~ExportInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoD0Ev>)

~ExportInfo() override = default

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10ExportInfo6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfolsERNSt7ostreamERK10ExportInfo>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo") &amp;export\_info)

---

## [Thread Command](<https://lief.re/doc/latest/formats/macho/cpp.html#thread-command>)

### [` ThreadCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommandE>)

class ThreadCommand : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the LC\_THREAD / LC\_UNIXTHREAD commands and that can be used to get the binary entrypoint when the LC\_MAIN ([MainCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1MainCommand>)) is not present.

Generally speaking, this command aims at defining the original state of the main thread which includes the registers’ values

Public Functions

#### [` ThreadCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommand13ThreadCommandEv>)

ThreadCommand() = default

#### [` ThreadCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommand13ThreadCommandERKN7details14thread_commandEN6Header8CPU_TYPEE>)

ThreadCommand(const details::thread\_command &amp;cmd, [Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header")::[CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE> "LIEF::MachO::Header::CPU_TYPE") arch = [Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header")::[CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE> "LIEF::MachO::Header::CPU_TYPE")::[ANY](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE3ANYE> "LIEF::MachO::Header::CPU_TYPE::ANY"))

#### [` ThreadCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommand13ThreadCommandE8uint32_t8uint32_tN6Header8CPU_TYPEE>)

ThreadCommand(uint32\_t flavor, uint32\_t count, [Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header")::[CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE> "LIEF::MachO::Header::CPU_TYPE") arch = [Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header")::[CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE> "LIEF::MachO::Header::CPU_TYPE")::[ANY](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE3ANYE> "LIEF::MachO::Header::CPU_TYPE::ANY"))

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommandaSERK13ThreadCommand>)

[ThreadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommandE> "LIEF::MachO::ThreadCommand") &amp;operator=(const [ThreadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommandE> "LIEF::MachO::ThreadCommand") &amp;copy) = default

#### [` ThreadCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommand13ThreadCommandERK13ThreadCommand>)

ThreadCommand(const [ThreadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommand13ThreadCommandERK13ThreadCommand> "LIEF::MachO::ThreadCommand::ThreadCommand") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13ThreadCommand5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` ~ThreadCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommandD0Ev>)

~ThreadCommand() override = default

#### [` flavor `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13ThreadCommand6flavorEv>)

inline uint32\_t flavor() const

Integer that defines a special *flavor* for the thread.

The meaning of this value depends on the [architecture()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ThreadCommand_1ac2bdad029beeef9e5c8d173730db77e0>). The list of the values can be found in the XNU kernel files:

- xnu/osfmk/mach/arm/thread\_status.h for the ARM/AArch64 architectures
- xnu/osfmk/mach/i386/thread\_status.h for the x86/x86-64 architectures

#### [` count `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13ThreadCommand5countEv>)

inline uint32\_t count() const

Size of the thread state data with 32-bits alignment.

This value should match [state()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ThreadCommand_1ab8442dde943093c720670e9d2a210404>).[size()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand_1a35292200a06917f2e6f29f61a0a02eef>)

#### [` architecture `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13ThreadCommand12architectureEv>)

inline [Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header")::[CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE> "LIEF::MachO::Header::CPU_TYPE") architecture() const

The CPU architecture that is targeted by this [ThreadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ThreadCommand>).

#### [` state `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13ThreadCommand5stateEv>)

inline span&lt;const uint8\_t&gt; state() const

The actual thread state as a vector of bytes. Depending on the [architecture()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ThreadCommand_1ac2bdad029beeef9e5c8d173730db77e0>), these data can be cast into x86\_thread\_state\_t, x86\_thread\_state64\_t, …

#### [` state `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommand5stateEv>)

inline span&lt;uint8\_t&gt; state()

#### [` pc `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13ThreadCommand2pcEv>)

uint64\_t pc() const

Return the initial Program Counter regardless of the underlying architecture. This value, when non null, can be used to determine the binary’s entrypoint.

Underneath, it works by looking for the PC register value in the [state()](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ThreadCommand_1ab8442dde943093c720670e9d2a210404>) data

#### [` state `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommand5stateENSt6vectorI7uint8_tEE>)

inline void state(std::vector&lt;uint8\_t&gt; state)

#### [` flavor `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommand6flavorE8uint32_t>)

inline void flavor(uint32\_t flavor)

#### [` count `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommand5countE8uint32_t>)

inline void count(uint32\_t count)

#### [` architecture `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommand12architectureEN6Header8CPU_TYPEE>)

inline void architecture([Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header")::[CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE> "LIEF::MachO::Header::CPU_TYPE") arch)

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13ThreadCommand6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13ThreadCommand5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13ThreadCommand7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [RPath Command](<https://lief.re/doc/latest/formats/macho/cpp.html#rpath-command>)

### [` RPathCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommandE>)

class RPathCommand : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the `LC_RPATH` command.

This command is used to add path for searching libraries associated with the `@rpath` prefix.

Public Functions

#### [` RPathCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommand12RPathCommandEv>)

RPathCommand() = default

#### [` RPathCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommand12RPathCommandENSt6stringE>)

RPathCommand(std::string path)

#### [` RPathCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommand12RPathCommandERKN7details13rpath_commandE>)

RPathCommand(const details::rpath\_command &amp;rpathCmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommandaSERK12RPathCommand>)

[RPathCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommandE> "LIEF::MachO::RPathCommand") &amp;operator=(const [RPathCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommandE> "LIEF::MachO::RPathCommand") &amp;copy) = default

#### [` RPathCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommand12RPathCommandERK12RPathCommand>)

RPathCommand(const [RPathCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommand12RPathCommandERK12RPathCommand> "LIEF::MachO::RPathCommand::RPathCommand") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12RPathCommand5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` ~RPathCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommandD0Ev>)

~RPathCommand() override = default

#### [` path `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12RPathCommand4pathEv>)

inline std::string\_view path() const

The rpath value as a string.

#### [` path_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12RPathCommand11path_offsetEv>)

inline uint32\_t path\_offset() const

Original string offset of the path.

#### [` path `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommand4pathENSt6stringE>)

inline void path(std::string path)

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12RPathCommand6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12RPathCommand5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` create `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommand6createENSt6stringE>)

static inline std::unique\_ptr&lt;[RPathCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommandE> "LIEF::MachO::RPathCommand")&gt; create(std::string path)

Create a new RPath command for the provided `path`.

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12RPathCommand7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Code Signature](<https://lief.re/doc/latest/formats/macho/cpp.html#code-signature>)

### [` CodeSignature `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13CodeSignatureE>)

class CodeSignature : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Public Functions

#### [` CodeSignature `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13CodeSignature13CodeSignatureEv>)

CodeSignature() = default

#### [` CodeSignature `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13CodeSignature13CodeSignatureERKN7details21linkedit_data_commandE>)

CodeSignature(const details::linkedit\_data\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13CodeSignatureaSERK13CodeSignature>)

[CodeSignature](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13CodeSignatureE> "LIEF::MachO::CodeSignature") &amp;operator=(const [CodeSignature](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13CodeSignatureE> "LIEF::MachO::CodeSignature") &amp;copy) = default

#### [` CodeSignature `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13CodeSignature13CodeSignatureERK13CodeSignature>)

CodeSignature(const [CodeSignature](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13CodeSignature13CodeSignatureERK13CodeSignature> "LIEF::MachO::CodeSignature::CodeSignature") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13CodeSignature5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13CodeSignature11data_offsetEv>)

inline uint32\_t data\_offset() const

Offset in the binary where the signature starts.

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13CodeSignature9data_sizeEv>)

inline uint32\_t data\_size() const

Size of the raw signature.

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13CodeSignature11data_offsetE8uint32_t>)

inline void data\_offset(uint32\_t offset)

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13CodeSignature9data_sizeE8uint32_t>)

inline void data\_size(uint32\_t size)

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13CodeSignature7contentEv>)

inline span&lt;uint8\_t&gt; content()

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13CodeSignature7contentEv>)

inline span&lt;const uint8\_t&gt; content() const

#### [` ~CodeSignature `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13CodeSignatureD0Ev>)

~CodeSignature() override = default

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13CodeSignature6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13CodeSignature5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13CodeSignature7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Data In Code](<https://lief.re/doc/latest/formats/macho/cpp.html#data-in-code>)

### [` DataInCode `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCodeE>)

class DataInCode : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Interface of the LC\_DATA\_IN\_CODE command This command is used to list slices of code sections that contain data. The *slices* information are stored as an array of [DataCodeEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DataCodeEntry>).

> **See also**
> 
> [DataCodeEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DataCodeEntry>)

Public Types

#### [` entries_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode9entries_tE>)

using entries\_t = std::vector&lt;[DataCodeEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntryE> "LIEF::MachO::DataCodeEntry")&gt;

#### [` it_const_entries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode16it_const_entriesE>)

using it\_const\_entries = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [entries\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode9entries_tE> "LIEF::MachO::DataInCode::entries_t")&amp;&gt;

#### [` it_entries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode10it_entriesE>)

using it\_entries = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[entries\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode9entries_tE> "LIEF::MachO::DataInCode::entries_t")&amp;&gt;

Public Functions

#### [` DataInCode `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode10DataInCodeEv>)

DataInCode() = default

#### [` DataInCode `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode10DataInCodeERKN7details21linkedit_data_commandE>)

DataInCode(const details::linkedit\_data\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCodeaSERK10DataInCode>)

[DataInCode](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCodeE> "LIEF::MachO::DataInCode") &amp;operator=(const [DataInCode](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCodeE> "LIEF::MachO::DataInCode")&amp;) = default

#### [` DataInCode `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode10DataInCodeERK10DataInCode>)

DataInCode(const [DataInCode](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode10DataInCodeERK10DataInCode> "LIEF::MachO::DataInCode::DataInCode")&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10DataInCode5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10DataInCode11data_offsetEv>)

inline uint32\_t data\_offset() const

Start of the array of the [DataCodeEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DataCodeEntry>) entries.

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10DataInCode9data_sizeEv>)

inline uint32\_t data\_size() const

Size of the raw array (`size = sizeof(DataCodeEntry) * nb_elements`).

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode11data_offsetE8uint32_t>)

inline void data\_offset(uint32\_t offset)

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode9data_sizeE8uint32_t>)

inline void data\_size(uint32\_t size)

#### [` add `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode3addE13DataCodeEntry>)

inline [DataInCode](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCodeE> "LIEF::MachO::DataInCode") &amp;add([DataCodeEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntryE> "LIEF::MachO::DataCodeEntry") entry)

Add a new entry.

#### [` entries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10DataInCode7entriesEv>)

inline [it\_const\_entries](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode16it_const_entriesE> "LIEF::MachO::DataInCode::it_const_entries") entries() const

Iterator over the [DataCodeEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DataCodeEntry>).

#### [` entries `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode7entriesEv>)

inline [it\_entries](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode10it_entriesE> "LIEF::MachO::DataInCode::it_entries") entries()

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode7contentEv>)

inline span&lt;uint8\_t&gt; content()

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10DataInCode7contentEv>)

inline span&lt;const uint8\_t&gt; content() const

#### [` ~DataInCode `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCodeD0Ev>)

~DataInCode() override = default

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10DataInCode6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO10DataInCode5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10DataInCode7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Data Code Entry](<https://lief.re/doc/latest/formats/macho/cpp.html#data-code-entry>)

### [` DataCodeEntry `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntryE>)

class DataCodeEntry : public LIEF::Object

Interface over an entry in the [DataInCode](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DataInCode>) command.

Public Types

#### [` TYPES `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry5TYPESE>)

enum class TYPES

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry5TYPES7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` DATA `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry5TYPES4DATAE>)

enumerator DATA = 1

##### [` JUMP_TABLE_8 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry5TYPES12JUMP_TABLE_8E>)

enumerator JUMP\_TABLE\_8 = 2

##### [` JUMP_TABLE_16 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry5TYPES13JUMP_TABLE_16E>)

enumerator JUMP\_TABLE\_16 = 3

##### [` JUMP_TABLE_32 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry5TYPES13JUMP_TABLE_32E>)

enumerator JUMP\_TABLE\_32 = 4

##### [` ABS_JUMP_TABLE_32 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry5TYPES17ABS_JUMP_TABLE_32E>)

enumerator ABS\_JUMP\_TABLE\_32 = 5

Public Functions

#### [` DataCodeEntry `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry13DataCodeEntryEv>)

DataCodeEntry() = default

#### [` DataCodeEntry `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry13DataCodeEntryE8uint32_t8uint16_t5TYPES>)

inline DataCodeEntry(uint32\_t off, uint16\_t length, [TYPES](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry5TYPESE> "LIEF::MachO::DataCodeEntry::TYPES") type)

#### [` DataCodeEntry `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry13DataCodeEntryERKN7details18data_in_code_entryE>)

DataCodeEntry(const details::data\_in\_code\_entry &amp;entry)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntryaSERK13DataCodeEntry>)

[DataCodeEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntryE> "LIEF::MachO::DataCodeEntry") &amp;operator=(const [DataCodeEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntryE> "LIEF::MachO::DataCodeEntry")&amp;) = default

#### [` DataCodeEntry `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry13DataCodeEntryERK13DataCodeEntry>)

DataCodeEntry(const [DataCodeEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry13DataCodeEntryERK13DataCodeEntry> "LIEF::MachO::DataCodeEntry::DataCodeEntry")&amp;) = default

#### [` offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13DataCodeEntry6offsetEv>)

inline uint32\_t offset() const

Offset of the data.

#### [` length `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13DataCodeEntry6lengthEv>)

inline uint16\_t length() const

Length of the data.

#### [` type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13DataCodeEntry4typeEv>)

inline [TYPES](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry5TYPESE> "LIEF::MachO::DataCodeEntry::TYPES") type() const

#### [` offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry6offsetE8uint32_t>)

inline void offset(uint32\_t off)

#### [` length `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry6lengthE8uint16_t>)

inline void length(uint16\_t length)

#### [` type `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry4typeE5TYPES>)

inline void type([TYPES](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntry5TYPESE> "LIEF::MachO::DataCodeEntry::TYPES") type)

#### [` ~DataCodeEntry `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntryD0Ev>)

~DataCodeEntry() override = default

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13DataCodeEntry6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntrylsERNSt7ostreamERK13DataCodeEntry>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [DataCodeEntry](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13DataCodeEntryE> "LIEF::MachO::DataCodeEntry") &amp;entry)

---

## [Segment Split Info](<https://lief.re/doc/latest/formats/macho/cpp.html#segment-split-info>)

### [` SegmentSplitInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16SegmentSplitInfoE>)

class SegmentSplitInfo : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the [LoadCommand::TYPE::SEGMENT\_SPLIT\_INFO](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1LoadCommand_1ae233a759e54dbc70715dcfb6465637b1a84c898771e61b21ef298d83bb8e6722f>) command.

Public Functions

#### [` SegmentSplitInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16SegmentSplitInfo16SegmentSplitInfoEv>)

SegmentSplitInfo() = default

#### [` SegmentSplitInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16SegmentSplitInfo16SegmentSplitInfoERKN7details21linkedit_data_commandE>)

SegmentSplitInfo(const details::linkedit\_data\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16SegmentSplitInfoaSERK16SegmentSplitInfo>)

[SegmentSplitInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16SegmentSplitInfoE> "LIEF::MachO::SegmentSplitInfo") &amp;operator=(const [SegmentSplitInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16SegmentSplitInfoE> "LIEF::MachO::SegmentSplitInfo") &amp;copy) = default

#### [` SegmentSplitInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16SegmentSplitInfo16SegmentSplitInfoERK16SegmentSplitInfo>)

SegmentSplitInfo(const [SegmentSplitInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16SegmentSplitInfo16SegmentSplitInfoERK16SegmentSplitInfo> "LIEF::MachO::SegmentSplitInfo::SegmentSplitInfo") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16SegmentSplitInfo5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16SegmentSplitInfo11data_offsetEv>)

inline uint32\_t data\_offset() const

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16SegmentSplitInfo9data_sizeEv>)

inline uint32\_t data\_size() const

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16SegmentSplitInfo11data_offsetE8uint32_t>)

inline void data\_offset(uint32\_t offset)

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16SegmentSplitInfo9data_sizeE8uint32_t>)

inline void data\_size(uint32\_t size)

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16SegmentSplitInfo7contentEv>)

inline span&lt;uint8\_t&gt; content()

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16SegmentSplitInfo7contentEv>)

inline span&lt;const uint8\_t&gt; content() const

#### [` ~SegmentSplitInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16SegmentSplitInfoD0Ev>)

~SegmentSplitInfo() override = default

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16SegmentSplitInfo6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16SegmentSplitInfo5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16SegmentSplitInfo7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Sub-Framework](<https://lief.re/doc/latest/formats/macho/cpp.html#sub-framework>)

### [` SubFramework `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12SubFrameworkE>)

class SubFramework : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the [SubFramework](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SubFramework>) command. According to the Mach-O `loader.h` documentation:

> A dynamically linked shared library may be a subframework of an umbrella framework. If so it will be linked with “-umbrella umbrella\_name” where Where “umbrella\_name” is the name of the umbrella framework. A subframework can only be linked against by its umbrella framework or other subframeworks that are part of the same umbrella framework. Otherwise the static link editor produces an error and states to link against the umbrella framework. The name of the umbrella framework for subframeworks is recorded in the following structure.

Public Functions

#### [` SubFramework `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12SubFramework12SubFrameworkEv>)

SubFramework() = default

#### [` SubFramework `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12SubFramework12SubFrameworkERKN7details21sub_framework_commandE>)

SubFramework(const details::sub\_framework\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12SubFrameworkaSERK12SubFramework>)

[SubFramework](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12SubFrameworkE> "LIEF::MachO::SubFramework") &amp;operator=(const [SubFramework](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12SubFrameworkE> "LIEF::MachO::SubFramework") &amp;copy) = default

#### [` SubFramework `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12SubFramework12SubFrameworkERK12SubFramework>)

SubFramework(const [SubFramework](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12SubFramework12SubFrameworkERK12SubFramework> "LIEF::MachO::SubFramework::SubFramework") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12SubFramework5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` umbrella `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12SubFramework8umbrellaEv>)

inline std::string\_view umbrella() const

Name of the umbrella framework.

#### [` umbrella `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12SubFramework8umbrellaENSt6stringE>)

inline void umbrella(std::string u)

#### [` ~SubFramework `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12SubFrameworkD0Ev>)

~SubFramework() override = default

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12SubFramework6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12SubFramework5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12SubFramework7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Sub-Client](<https://lief.re/doc/latest/formats/macho/cpp.html#sub-client>)

### [` SubClient `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9SubClientE>)

class SubClient : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the [SubClient](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SubClient>) command. According to the Mach-O `loader.h` documentation:

> For dynamically linked shared libraries that are subframework of an umbrella framework they can allow clients other than the umbrella framework or other subframeworks in the same umbrella framework. To do this the subframework is built with “-allowable\_client client\_name” and an LC\_SUB\_CLIENT load command is created for each -allowable\_client flag. The client\_name is usually a framework name. It can also be a name used for bundles clients where the bundle is built with “-client\_name client\_name”.

Public Functions

#### [` SubClient `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9SubClient9SubClientEv>)

SubClient() = default

#### [` SubClient `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9SubClient9SubClientERKN7details18sub_client_commandE>)

SubClient(const details::sub\_client\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9SubClientaSERK9SubClient>)

[SubClient](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9SubClientE> "LIEF::MachO::SubClient") &amp;operator=(const [SubClient](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9SubClientE> "LIEF::MachO::SubClient") &amp;copy) = default

#### [` SubClient `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9SubClient9SubClientERK9SubClient>)

SubClient(const [SubClient](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9SubClient9SubClientERK9SubClient> "LIEF::MachO::SubClient::SubClient") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO9SubClient5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` client `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO9SubClient6clientEv>)

inline std::string\_view client() const

Name of the client.

#### [` client `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9SubClient6clientENSt6stringE>)

inline void client(std::string u)

#### [` ~SubClient `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9SubClientD0Ev>)

~SubClient() override = default

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO9SubClient6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO9SubClient5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9SubClient7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Dyld Environment](<https://lief.re/doc/latest/formats/macho/cpp.html#dyld-environment>)

### [` DyldEnvironment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldEnvironmentE>)

class DyldEnvironment : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents a `LC_DYLD_ENVIRONMENT` command which is used by the Mach-O linker/loader to initialize an environment variable.

Public Functions

#### [` DyldEnvironment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldEnvironment15DyldEnvironmentEv>)

DyldEnvironment() = default

#### [` DyldEnvironment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldEnvironment15DyldEnvironmentERKN7details16dylinker_commandE>)

DyldEnvironment(const details::dylinker\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldEnvironmentaSERK15DyldEnvironment>)

[DyldEnvironment](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldEnvironmentE> "LIEF::MachO::DyldEnvironment") &amp;operator=(const [DyldEnvironment](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldEnvironmentE> "LIEF::MachO::DyldEnvironment") &amp;copy) = default

#### [` DyldEnvironment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldEnvironment15DyldEnvironmentERK15DyldEnvironment>)

DyldEnvironment(const [DyldEnvironment](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldEnvironment15DyldEnvironmentERK15DyldEnvironment> "LIEF::MachO::DyldEnvironment::DyldEnvironment") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldEnvironment5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` ~DyldEnvironment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldEnvironmentD0Ev>)

~DyldEnvironment() override = default

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldEnvironment5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

#### [` value `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldEnvironment5valueEv>)

inline std::string\_view value() const

The actual environment variable.

#### [` value `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldEnvironment5valueENSt6stringE>)

inline void value(std::string value)

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldEnvironment6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldEnvironment7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Encryption Info](<https://lief.re/doc/latest/formats/macho/cpp.html#encryption-info>)

### [` EncryptionInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14EncryptionInfoE>)

class EncryptionInfo : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the LC\_ENCRYPTION\_INFO / LC\_ENCRYPTION\_INFO\_64 commands.

The encryption info is usually present in Mach-O executables that target iOS to encrypt some sections of the binary

Public Functions

#### [` EncryptionInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14EncryptionInfo14EncryptionInfoEv>)

EncryptionInfo() = default

#### [` EncryptionInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14EncryptionInfo14EncryptionInfoERKN7details23encryption_info_commandE>)

EncryptionInfo(const details::encryption\_info\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14EncryptionInfoaSERK14EncryptionInfo>)

[EncryptionInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14EncryptionInfoE> "LIEF::MachO::EncryptionInfo") &amp;operator=(const [EncryptionInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14EncryptionInfoE> "LIEF::MachO::EncryptionInfo") &amp;copy) = default

#### [` EncryptionInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14EncryptionInfo14EncryptionInfoERK14EncryptionInfo>)

EncryptionInfo(const [EncryptionInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14EncryptionInfo14EncryptionInfoERK14EncryptionInfo> "LIEF::MachO::EncryptionInfo::EncryptionInfo") &amp;copy) = default

#### [` ~EncryptionInfo `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14EncryptionInfoD0Ev>)

~EncryptionInfo() override = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14EncryptionInfo5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` crypt_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14EncryptionInfo12crypt_offsetEv>)

inline uint32\_t crypt\_offset() const

The beginning of the encrypted area.

#### [` crypt_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14EncryptionInfo10crypt_sizeEv>)

inline uint32\_t crypt\_size() const

The size of the encrypted area.

#### [` crypt_id `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14EncryptionInfo8crypt_idEv>)

inline uint32\_t crypt\_id() const

The encryption system. 0 means not encrypted.

#### [` crypt_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14EncryptionInfo12crypt_offsetE8uint32_t>)

inline void crypt\_offset(uint32\_t offset)

#### [` crypt_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14EncryptionInfo10crypt_sizeE8uint32_t>)

inline void crypt\_size(uint32\_t size)

#### [` crypt_id `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14EncryptionInfo8crypt_idE8uint32_t>)

inline void crypt\_id(uint32\_t id)

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14EncryptionInfo6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14EncryptionInfo5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14EncryptionInfo7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Build Version](<https://lief.re/doc/latest/formats/macho/cpp.html#build-version>)

### [` BuildVersion `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersionE>)

class BuildVersion : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Public Types

#### [` PLATFORMS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMSE>)

enum class PLATFORMS : uint32\_t

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` MACOS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS5MACOSE>)

enumerator MACOS = 1

##### [` IOS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS3IOSE>)

enumerator IOS = 2

##### [` TVOS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS4TVOSE>)

enumerator TVOS = 3

##### [` WATCHOS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS7WATCHOSE>)

enumerator WATCHOS = 4

##### [` BRIDGEOS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS8BRIDGEOSE>)

enumerator BRIDGEOS = 5

##### [` MAC_CATALYST `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS12MAC_CATALYSTE>)

enumerator MAC\_CATALYST = 6

##### [` IOS_SIMULATOR `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS13IOS_SIMULATORE>)

enumerator IOS\_SIMULATOR = 7

##### [` TVOS_SIMULATOR `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS14TVOS_SIMULATORE>)

enumerator TVOS\_SIMULATOR = 8

##### [` WATCHOS_SIMULATOR `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS17WATCHOS_SIMULATORE>)

enumerator WATCHOS\_SIMULATOR = 9

##### [` DRIVERKIT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS9DRIVERKITE>)

enumerator DRIVERKIT = 10

##### [` VISIONOS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS8VISIONOSE>)

enumerator VISIONOS = 11

##### [` VISIONOS_SIMULATOR `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS18VISIONOS_SIMULATORE>)

enumerator VISIONOS\_SIMULATOR = 12

##### [` FIRMWARE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS8FIRMWAREE>)

enumerator FIRMWARE = 13

##### [` SEPOS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS5SEPOSE>)

enumerator SEPOS = 14

##### [` MACOS_EXCLAVE_CORE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS18MACOS_EXCLAVE_COREE>)

enumerator MACOS\_EXCLAVE\_CORE = 15

##### [` MACOS_EXCLAVE_KIT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS17MACOS_EXCLAVE_KITE>)

enumerator MACOS\_EXCLAVE\_KIT = 16

##### [` IOS_EXCLAVE_CORE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS16IOS_EXCLAVE_COREE>)

enumerator IOS\_EXCLAVE\_CORE = 17

##### [` IOS_EXCLAVE_KIT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS15IOS_EXCLAVE_KITE>)

enumerator IOS\_EXCLAVE\_KIT = 18

##### [` TVOS_EXCLAVE_CORE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS17TVOS_EXCLAVE_COREE>)

enumerator TVOS\_EXCLAVE\_CORE = 19

##### [` TVOS_EXCLAVE_KIT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS16TVOS_EXCLAVE_KITE>)

enumerator TVOS\_EXCLAVE\_KIT = 20

##### [` WATCHOS_EXCLAVE_CORE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS20WATCHOS_EXCLAVE_COREE>)

enumerator WATCHOS\_EXCLAVE\_CORE = 21

##### [` WATCHOS_EXCLAVE_KIT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS19WATCHOS_EXCLAVE_KITE>)

enumerator WATCHOS\_EXCLAVE\_KIT = 22

##### [` VISIONOS_EXCLAVE_CORE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS21VISIONOS_EXCLAVE_COREE>)

enumerator VISIONOS\_EXCLAVE\_CORE = 23

##### [` VISIONOS_EXCLAVE_KIT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS20VISIONOS_EXCLAVE_KITE>)

enumerator VISIONOS\_EXCLAVE\_KIT = 24

##### [` ANY `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMS3ANYE>)

enumerator ANY = 0xFFFFFFFF

#### [` version_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9version_tE>)

using version\_t = std::array&lt;uint32\_t, 3&gt;

Version is an array of **3** integers.

#### [` tools_list_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion12tools_list_tE>)

using tools\_list\_t = std::vector&lt;[BuildToolVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersionE> "LIEF::MachO::BuildToolVersion")&gt;

Public Functions

#### [` BuildVersion `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion12BuildVersionEv>)

BuildVersion() = default

#### [` BuildVersion `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion12BuildVersionERKN7details21build_version_commandE>)

BuildVersion(const details::build\_version\_command &amp;version\_cmd)

#### [` BuildVersion `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion12BuildVersionEK9PLATFORMSRK9version_tRK9version_tRK12tools_list_t>)

BuildVersion(const [PLATFORMS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMSE> "LIEF::MachO::BuildVersion::PLATFORMS") platform, const [version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9version_tE> "LIEF::MachO::BuildVersion::version_t") &amp;minos, const [version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9version_tE> "LIEF::MachO::BuildVersion::version_t") &amp;sdk, const [tools\_list\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion12tools_list_tE> "LIEF::MachO::BuildVersion::tools_list_t") &amp;tools)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersionaSERK12BuildVersion>)

[BuildVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersionE> "LIEF::MachO::BuildVersion") &amp;operator=(const [BuildVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersionE> "LIEF::MachO::BuildVersion") &amp;copy) = default

#### [` BuildVersion `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion12BuildVersionERK12BuildVersion>)

BuildVersion(const [BuildVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion12BuildVersionERK12BuildVersion> "LIEF::MachO::BuildVersion::BuildVersion") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12BuildVersion5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` minos `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12BuildVersion5minosEv>)

inline [version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9version_tE> "LIEF::MachO::BuildVersion::version_t") minos() const

#### [` minos `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion5minosE9version_t>)

inline void minos([version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9version_tE> "LIEF::MachO::BuildVersion::version_t") version)

#### [` sdk `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12BuildVersion3sdkEv>)

inline [version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9version_tE> "LIEF::MachO::BuildVersion::version_t") sdk() const

#### [` sdk `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion3sdkE9version_t>)

inline void sdk([version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9version_tE> "LIEF::MachO::BuildVersion::version_t") version)

#### [` platform `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12BuildVersion8platformEv>)

inline [PLATFORMS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMSE> "LIEF::MachO::BuildVersion::PLATFORMS") platform() const

#### [` platform `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion8platformE9PLATFORMS>)

inline void platform([PLATFORMS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion9PLATFORMSE> "LIEF::MachO::BuildVersion::PLATFORMS") plat)

#### [` tools `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12BuildVersion5toolsEv>)

inline const [tools\_list\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion12tools_list_tE> "LIEF::MachO::BuildVersion::tools_list_t") &amp;tools() const

#### [` ~BuildVersion `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersionD0Ev>)

~BuildVersion() override = default

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12BuildVersion6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO12BuildVersion5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12BuildVersion7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Build Tool Version](<https://lief.re/doc/latest/formats/macho/cpp.html#build-tool-version>)

### [` BuildToolVersion `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersionE>)

class BuildToolVersion : public LIEF::Object

Class that represents a tool’s version that was involved in the build of the binary.

Public Types

#### [` TOOLS `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion5TOOLSE>)

enum class TOOLS

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion5TOOLS7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` CLANG `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion5TOOLS5CLANGE>)

enumerator CLANG = 1

##### [` SWIFT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion5TOOLS5SWIFTE>)

enumerator SWIFT = 2

##### [` LD `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion5TOOLS2LDE>)

enumerator LD = 3

##### [` LLD `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion5TOOLS3LLDE>)

enumerator LLD = 4

##### [` METAL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion5TOOLS5METALE>)

enumerator METAL = 1024

##### [` AIRLLD `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion5TOOLS6AIRLLDE>)

enumerator AIRLLD = 1025

##### [` AIRNT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion5TOOLS5AIRNTE>)

enumerator AIRNT = 1026

##### [` AIRNT_PLUGIN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion5TOOLS12AIRNT_PLUGINE>)

enumerator AIRNT\_PLUGIN = 1027

##### [` AIRPACK `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion5TOOLS7AIRPACKE>)

enumerator AIRPACK = 1028

##### [` GPUARCHIVER `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion5TOOLS11GPUARCHIVERE>)

enumerator GPUARCHIVER = 1031

##### [` METAL_FRAMEWORK `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion5TOOLS15METAL_FRAMEWORKE>)

enumerator METAL\_FRAMEWORK = 1032

#### [` version_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion9version_tE>)

using version\_t = std::array&lt;uint32\_t, 3&gt;

A version is an array of **3** integers.

Public Functions

#### [` BuildToolVersion `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion16BuildToolVersionEv>)

BuildToolVersion() = default

#### [` BuildToolVersion `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion16BuildToolVersionERKN7details18build_tool_versionE>)

BuildToolVersion(const details::build\_tool\_version &amp;tool)

#### [` tool `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16BuildToolVersion4toolEv>)

inline [TOOLS](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion5TOOLSE> "LIEF::MachO::BuildToolVersion::TOOLS") tool() const

The tools used.

#### [` version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16BuildToolVersion7versionEv>)

inline [version\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersion9version_tE> "LIEF::MachO::BuildToolVersion::version_t") version() const

Version associated with the tool.

#### [` ~BuildToolVersion `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersionD0Ev>)

~BuildToolVersion() override = default

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16BuildToolVersion6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersionlsERNSt7ostreamERK16BuildToolVersion>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [BuildToolVersion](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16BuildToolVersionE> "LIEF::MachO::BuildToolVersion") &amp;tool)

---

## [Fileset Command](<https://lief.re/doc/latest/formats/macho/cpp.html#fileset-command>)

### [` FilesetCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommandE>)

class FilesetCommand : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class associated with the LC\_FILESET\_ENTRY commands.

Public Types

#### [` content_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommand9content_tE>)

using content\_t = std::vector&lt;uint8\_t&gt;

Public Functions

#### [` FilesetCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommand14FilesetCommandEv>)

FilesetCommand() = default

#### [` FilesetCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommand14FilesetCommandERKN7details21fileset_entry_commandE>)

FilesetCommand(const details::fileset\_entry\_command &amp;command)

#### [` FilesetCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommand14FilesetCommandENSt6stringE>)

inline FilesetCommand(std::string name)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommandaSE14FilesetCommand>)

[FilesetCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommandE> "LIEF::MachO::FilesetCommand") &amp;operator=([FilesetCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommandE> "LIEF::MachO::FilesetCommand") copy)

#### [` FilesetCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommand14FilesetCommandERK14FilesetCommand>)

FilesetCommand(const [FilesetCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommand14FilesetCommandERK14FilesetCommand> "LIEF::MachO::FilesetCommand::FilesetCommand") &amp;copy)

#### [` swap `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommand4swapER14FilesetCommand>)

void swap([FilesetCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommandE> "LIEF::MachO::FilesetCommand") &amp;other) noexcept

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14FilesetCommand5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` ~FilesetCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommandD0Ev>)

~FilesetCommand() override = default

#### [` name `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14FilesetCommand4nameEv>)

inline std::string\_view name() const

Name of the underlying MachO binary (e.g. `com.apple.security.quarantine`).

#### [` virtual_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14FilesetCommand15virtual_addressEv>)

inline uint64\_t virtual\_address() const

Memory address where the MachO file should be mapped.

#### [` file_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14FilesetCommand11file_offsetEv>)

inline uint64\_t file\_offset() const

Original offset in the kernel cache.

#### [` binary `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14FilesetCommand6binaryEv>)

inline const [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") \*binary() const

Return a pointer on the [LIEF::MachO::Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary>) associated with this entry.

#### [` binary `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommand6binaryEv>)

inline [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") \*binary()

#### [` name `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommand4nameENSt6stringE>)

inline void name(std::string name)

#### [` virtual_address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommand15virtual_addressE8uint64_t>)

inline void virtual\_address(uint64\_t virtual\_address)

#### [` file_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommand11file_offsetE8uint64_t>)

inline void file\_offset(uint64\_t file\_offset)

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14FilesetCommand5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14FilesetCommand7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

Friends

**friend class BinaryParser**

---

## [DyldChainedFixups Command](<https://lief.re/doc/latest/formats/macho/cpp.html#dyldchainedfixups-command>)

### [` DyldChainedFixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixupsE>)

class DyldChainedFixups : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the LC\_DYLD\_CHAINED\_FIXUPS command.

This command aims at providing rebase and binding information like the [DyldInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldInfo>)’s bytecode. Compared to the [DyldInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldInfo>) bytecode, these chained fixups are taking less space.

Public Types

#### [` chained_starts_in_segments_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups28chained_starts_in_segments_tE>)

using chained\_starts\_in\_segments\_t = std::vector&lt;[chained\_starts\_in\_segment](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segmentE> "LIEF::MachO::DyldChainedFixups::chained_starts_in_segment")&gt;

Internal container for storing [chained\_starts\_in\_segment](<https://lief.re/doc/latest/formats/macho/cpp.html#structLIEF_1_1MachO_1_1DyldChainedFixups_1_1chained__starts__in__segment>).

#### [` it_chained_starts_in_segments_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups31it_chained_starts_in_segments_tE>)

using it\_chained\_starts\_in\_segments\_t = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[chained\_starts\_in\_segments\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups28chained_starts_in_segments_tE> "LIEF::MachO::DyldChainedFixups::chained_starts_in_segments_t")&amp;&gt;

Iterator that outputs [chained\_starts\_in\_segment](<https://lief.re/doc/latest/formats/macho/cpp.html#structLIEF_1_1MachO_1_1DyldChainedFixups_1_1chained__starts__in__segment>)&amp;.

#### [` it_const_chained_starts_in_segments_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups37it_const_chained_starts_in_segments_tE>)

using it\_const\_chained\_starts\_in\_segments\_t = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [chained\_starts\_in\_segments\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups28chained_starts_in_segments_tE> "LIEF::MachO::DyldChainedFixups::chained_starts_in_segments_t")&amp;&gt;

Iterator that outputs const [chained\_starts\_in\_segment](<https://lief.re/doc/latest/formats/macho/cpp.html#structLIEF_1_1MachO_1_1DyldChainedFixups_1_1chained__starts__in__segment>)&amp;.

#### [` binding_info_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups14binding_info_tE>)

using binding\_info\_t = std::vector&lt;std::unique\_ptr&lt;[ChainedBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfoE> "LIEF::MachO::ChainedBindingInfo")&gt;&gt;

Internal container for storing [DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldBindingInfo>).

#### [` it_binding_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups15it_binding_infoE>)

using it\_binding\_info = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[binding\_info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups14binding_info_tE> "LIEF::MachO::DyldChainedFixups::binding_info_t")&amp;, [ChainedBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfoE> "LIEF::MachO::ChainedBindingInfo")\*&gt;

Iterator which outputs [DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldBindingInfo>)&amp;.

#### [` it_const_binding_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups21it_const_binding_infoE>)

using it\_const\_binding\_info = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [binding\_info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups14binding_info_tE> "LIEF::MachO::DyldChainedFixups::binding_info_t")&amp;, [ChainedBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO18ChainedBindingInfoE> "LIEF::MachO::ChainedBindingInfo")\*&gt;

Iterator which outputs const [DyldBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldBindingInfo>)&amp;.

Public Functions

#### [` DyldChainedFixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups17DyldChainedFixupsEv>)

DyldChainedFixups()

#### [` DyldChainedFixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups17DyldChainedFixupsERKN7details21linkedit_data_commandE>)

DyldChainedFixups(const details::linkedit\_data\_command &amp;cmd)

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17DyldChainedFixups5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` ~DyldChainedFixups `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixupsD0Ev>)

~DyldChainedFixups() override

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17DyldChainedFixups11data_offsetEv>)

inline uint32\_t data\_offset() const

Offset of the LC\_DYLD\_CHAINED\_FIXUPS chained payload. This offset should point in the \_\_LINKEDIT segment.

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17DyldChainedFixups9data_sizeEv>)

inline uint32\_t data\_size() const

Size of the LC\_DYLD\_CHAINED\_FIXUPS payload.

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups11data_offsetE8uint32_t>)

inline void data\_offset(uint32\_t offset)

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups9data_sizeE8uint32_t>)

inline void data\_size(uint32\_t size)

#### [` payload `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17DyldChainedFixups7payloadEv>)

inline span&lt;const uint8\_t&gt; payload() const

Return the raw content of the command.

#### [` bindings `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups8bindingsEv>)

inline [it\_binding\_info](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups15it_binding_infoE> "LIEF::MachO::DyldChainedFixups::it_binding_info") bindings()

Iterator over the bindings ([ChainedBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ChainedBindingInfo>)) associated with this command.

#### [` bindings `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17DyldChainedFixups8bindingsEv>)

inline [it\_const\_binding\_info](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups21it_const_binding_infoE> "LIEF::MachO::DyldChainedFixups::it_const_binding_info") bindings() const

Iterator over the bindings ([ChainedBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ChainedBindingInfo>)) associated with this command.

#### [` chained_starts_in_segments `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups26chained_starts_in_segmentsEv>)

inline [it\_chained\_starts\_in\_segments\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups31it_chained_starts_in_segments_tE> "LIEF::MachO::DyldChainedFixups::it_chained_starts_in_segments_t") chained\_starts\_in\_segments()

Iterator over the chained fixup metadata.

#### [` chained_starts_in_segments `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17DyldChainedFixups26chained_starts_in_segmentsEv>)

inline [it\_const\_chained\_starts\_in\_segments\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups37it_const_chained_starts_in_segments_tE> "LIEF::MachO::DyldChainedFixups::it_const_chained_starts_in_segments_t") chained\_starts\_in\_segments() const

#### [` fixups_version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17DyldChainedFixups14fixups_versionEv>)

inline uint32\_t fixups\_version() const

Chained fixups version. The loader (dyld v852.2) checks that this value is set to 0.

#### [` fixups_version `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups14fixups_versionE8uint32_t>)

inline void fixups\_version(uint32\_t version)

#### [` starts_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17DyldChainedFixups13starts_offsetEv>)

inline uint32\_t starts\_offset() const

offset of dyld\_chained\_starts\_in\_image in chain\_data

#### [` starts_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups13starts_offsetE8uint32_t>)

inline void starts\_offset(uint32\_t offset)

#### [` imports_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17DyldChainedFixups14imports_offsetEv>)

inline uint32\_t imports\_offset() const

Offset of imports table in chain data.

#### [` imports_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups14imports_offsetE8uint32_t>)

inline void imports\_offset(uint32\_t offset)

#### [` symbols_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17DyldChainedFixups14symbols_offsetEv>)

inline uint32\_t symbols\_offset() const

Offset of symbol strings in chain data.

#### [` symbols_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups14symbols_offsetE8uint32_t>)

inline void symbols\_offset(uint32\_t offset)

#### [` imports_count `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17DyldChainedFixups13imports_countEv>)

inline uint32\_t imports\_count() const

Number of imported symbol names.

#### [` imports_count `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups13imports_countE8uint32_t>)

inline void imports\_count(uint32\_t cnt)

#### [` symbols_format `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17DyldChainedFixups14symbols_formatEv>)

inline uint32\_t symbols\_format() const

The compression algorithm (if any) used to store the symbols 0 means uncompressed while 1 means zlib compressed.

As far of the version v852.2 of dyld loader, it only supports **uncompressed** format

#### [` symbols_format `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups14symbols_formatE8uint32_t>)

inline void symbols\_format(uint32\_t fmt)

#### [` imports_format `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17DyldChainedFixups14imports_formatEv>)

inline [DYLD\_CHAINED\_FORMAT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO19DYLD_CHAINED_FORMATE> "LIEF::MachO::DYLD_CHAINED_FORMAT") imports\_format() const

The format of the imports ([ChainedBindingInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ChainedBindingInfo>)).

#### [` imports_format `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups14imports_formatE19DYLD_CHAINED_FORMAT>)

inline void imports\_format([DYLD\_CHAINED\_FORMAT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO19DYLD_CHAINED_FORMATE> "LIEF::MachO::DYLD_CHAINED_FORMAT") fmt)

#### [` add `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups3addE25chained_starts_in_segment>)

inline [chained\_starts\_in\_segment](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segmentE> "LIEF::MachO::DyldChainedFixups::chained_starts_in_segment") &amp;add([chained\_starts\_in\_segment](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segmentE> "LIEF::MachO::DyldChainedFixups::chained_starts_in_segment") start\_info)

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17DyldChainedFixups6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17DyldChainedFixups5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

#### [` chained_starts_in_segment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segmentE>)

struct chained\_starts\_in\_segment

Structure that mirrors the raw dyld\_chained\_starts\_in\_segment which aims at providing information about the chained rebase/bind fixups.

The relocations provided by this structure can be accessed through [SegmentCommand::relocations](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand_1a35fbc7ff0c585cb07b1a3c8061fd373e>)

Public Functions

##### [` page_count `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO17DyldChainedFixups25chained_starts_in_segment10page_countEv>)

inline size\_t page\_count() const

How many pages are in the page\_start array.

Public Members

##### [` offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segment6offsetE>)

uint32\_t offset = 0

Original offset of the structure, relative to [DyldChainedFixups::starts\_offset](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldChainedFixups_1af880d9da083951d718d84ebb17d81e7d>).

##### [` size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segment4sizeE>)

uint32\_t size = 0

sizeof(size) + sizeof(page\_size) + … + sizeof(pointer\_format)

##### [` page_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segment9page_sizeE>)

uint16\_t page\_size = 0

Likely 0x1000 for x86/x86\_64 architectures and 0x4000 for ARM64 architecture.

##### [` segment_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segment14segment_offsetE>)

uint64\_t segment\_offset = 0

Offset of the segment’s data from the beginning of the file (it should match [SegmentCommand::file\_offset](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand_1adc4437601d70a9f74fbcbc5d75899eac>)).

##### [` max_valid_pointer `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segment17max_valid_pointerE>)

uint32\_t max\_valid\_pointer = 0

for 32-bit OS, any value beyond this is not a pointer

##### [` pointer_format `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segment14pointer_formatE>)

[DYLD\_CHAINED\_PTR\_FORMAT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMATE> "LIEF::MachO::DYLD_CHAINED_PTR_FORMAT") pointer\_format = [DYLD\_CHAINED\_PTR\_FORMAT](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMATE> "LIEF::MachO::DYLD_CHAINED_PTR_FORMAT")::[NONE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT4NONEE> "LIEF::MachO::DYLD_CHAINED_PTR_FORMAT::NONE")

How pointers are encoded.

##### [` page_start `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segment10page_startE>)

std::vector&lt;uint16\_t&gt; page\_start

Offset in the [SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1SegmentCommand>) of the first element of the chain.

##### [` chain_starts `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segment12chain_startsE>)

std::vector&lt;uint16\_t&gt; chain\_starts

Currently not supported.

##### [` segment `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segment7segmentE>)

[SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") &amp;segment

Segment in which the rebase/bind fixups take place.

Public Static Functions

##### [` create_empty_chained `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segment20create_empty_chainedER14SegmentCommand>)

static inline [chained\_starts\_in\_segment](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segmentE> "LIEF::MachO::DyldChainedFixups::chained_starts_in_segment") create\_empty\_chained([SegmentCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14SegmentCommandE> "LIEF::MachO::SegmentCommand") &amp;segment)

Friends

##### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segmentlsERNSt7ostreamERK25chained_starts_in_segment>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [chained\_starts\_in\_segment](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17DyldChainedFixups25chained_starts_in_segmentE> "LIEF::MachO::DyldChainedFixups::chained_starts_in_segment") &amp;info)

---

## [DyldExportsTrie Command](<https://lief.re/doc/latest/formats/macho/cpp.html#dyldexportstrie-command>)

### [` DyldExportsTrie `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrieE>)

class DyldExportsTrie : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class that represents the LC\_DYLD\_EXPORTS\_TRIE command.

In recent Mach-O binaries, this command replaces the [DyldInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1DyldInfo>) export trie buffer

Public Types

#### [` export_info_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrie13export_info_tE>)

using export\_info\_t = std::vector&lt;std::unique\_ptr&lt;[ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo")&gt;&gt;

Internal container for storing [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ExportInfo>).

#### [` it_export_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrie14it_export_infoE>)

using it\_export\_info = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[export\_info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrie13export_info_tE> "LIEF::MachO::DyldExportsTrie::export_info_t")&amp;, [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo")\*&gt;

Iterator which outputs const [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ExportInfo>)&amp;.

#### [` it_const_export_info `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrie20it_const_export_infoE>)

using it\_const\_export\_info = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [export\_info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrie13export_info_tE> "LIEF::MachO::DyldExportsTrie::export_info_t")&amp;, [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo")\*&gt;

Iterator which outputs const [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ExportInfo>)&amp;.

Public Functions

#### [` DyldExportsTrie `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrie15DyldExportsTrieEv>)

DyldExportsTrie()

#### [` DyldExportsTrie `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrie15DyldExportsTrieERKN7details21linkedit_data_commandE>)

DyldExportsTrie(const details::linkedit\_data\_command &amp;cmd)

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldExportsTrie5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` swap `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrie4swapER15DyldExportsTrie>)

void swap([DyldExportsTrie](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrieE> "LIEF::MachO::DyldExportsTrie") &amp;other) noexcept

#### [` ~DyldExportsTrie `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrieD0Ev>)

~DyldExportsTrie() override

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldExportsTrie11data_offsetEv>)

inline uint32\_t data\_offset() const

Offset of the LC\_DYLD\_EXPORTS\_TRIE. This offset should point in the \_\_LINKEDIT segment.

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldExportsTrie9data_sizeEv>)

inline uint32\_t data\_size() const

Size of the LC\_DYLD\_EXPORTS\_TRIE payload.

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrie11data_offsetE8uint32_t>)

inline void data\_offset(uint32\_t offset)

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrie9data_sizeE8uint32_t>)

inline void data\_size(uint32\_t size)

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldExportsTrie7contentEv>)

inline span&lt;const uint8\_t&gt; content() const

#### [` exports `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrie7exportsEv>)

inline [it\_export\_info](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrie14it_export_infoE> "LIEF::MachO::DyldExportsTrie::it_export_info") exports()

Iterator over the [ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1ExportInfo>) entries.

#### [` exports `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldExportsTrie7exportsEv>)

inline [it\_const\_export\_info](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrie20it_const_export_infoE> "LIEF::MachO::DyldExportsTrie::it_const_export_info") exports() const

#### [` show_export_trie `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldExportsTrie16show_export_trieEv>)

std::string show\_export\_trie() const

Print the exports trie in a human-readable way.

#### [` add `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrie3addENSt10unique_ptrI10ExportInfoEE>)

[ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo") \*add(std::unique\_ptr&lt;[ExportInfo](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO10ExportInfoE> "LIEF::MachO::ExportInfo")&gt; info)

Add an entry in the current trie. See also: [LIEF::MachO::Binary::add\_exported\_function](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary_1ae075be3e10497d15a403047a4e093fff>).

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldExportsTrie6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO15DyldExportsTrie5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO15DyldExportsTrie7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Code Signature Dir Command](<https://lief.re/doc/latest/formats/macho/cpp.html#code-signature-dir-command>)

### [` CodeSignatureDir `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16CodeSignatureDirE>)

class CodeSignatureDir : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Public Functions

#### [` CodeSignatureDir `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16CodeSignatureDir16CodeSignatureDirEv>)

CodeSignatureDir() = default

#### [` CodeSignatureDir `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16CodeSignatureDir16CodeSignatureDirERKN7details21linkedit_data_commandE>)

CodeSignatureDir(const details::linkedit\_data\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16CodeSignatureDiraSERK16CodeSignatureDir>)

[CodeSignatureDir](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16CodeSignatureDirE> "LIEF::MachO::CodeSignatureDir") &amp;operator=(const [CodeSignatureDir](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16CodeSignatureDirE> "LIEF::MachO::CodeSignatureDir") &amp;copy) = default

#### [` CodeSignatureDir `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16CodeSignatureDir16CodeSignatureDirERK16CodeSignatureDir>)

CodeSignatureDir(const [CodeSignatureDir](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16CodeSignatureDir16CodeSignatureDirERK16CodeSignatureDir> "LIEF::MachO::CodeSignatureDir::CodeSignatureDir") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16CodeSignatureDir5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16CodeSignatureDir11data_offsetEv>)

inline uint32\_t data\_offset() const

Offset in the binary where the signature starts.

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16CodeSignatureDir9data_sizeEv>)

inline uint32\_t data\_size() const

Size of the raw signature.

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16CodeSignatureDir11data_offsetE8uint32_t>)

inline void data\_offset(uint32\_t offset)

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16CodeSignatureDir9data_sizeE8uint32_t>)

inline void data\_size(uint32\_t size)

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16CodeSignatureDir7contentEv>)

inline span&lt;const uint8\_t&gt; content() const

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16CodeSignatureDir7contentEv>)

inline span&lt;uint8\_t&gt; content()

#### [` ~CodeSignatureDir `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16CodeSignatureDirD0Ev>)

~CodeSignatureDir() override = default

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16CodeSignatureDir6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO16CodeSignatureDir5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16CodeSignatureDir7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Linker Optimization Hint Command](<https://lief.re/doc/latest/formats/macho/cpp.html#linker-optimization-hint-command>)

### [` LinkerOptHint `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13LinkerOptHintE>)

class LinkerOptHint : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class which represents the `LC_LINKER_OPTIMIZATION_HINT` command.

Public Functions

#### [` LinkerOptHint `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13LinkerOptHint13LinkerOptHintEv>)

LinkerOptHint() = default

#### [` LinkerOptHint `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13LinkerOptHint13LinkerOptHintERKN7details21linkedit_data_commandE>)

LinkerOptHint(const details::linkedit\_data\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13LinkerOptHintaSERK13LinkerOptHint>)

[LinkerOptHint](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13LinkerOptHintE> "LIEF::MachO::LinkerOptHint") &amp;operator=(const [LinkerOptHint](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13LinkerOptHintE> "LIEF::MachO::LinkerOptHint") &amp;copy) = default

#### [` LinkerOptHint `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13LinkerOptHint13LinkerOptHintERK13LinkerOptHint>)

LinkerOptHint(const [LinkerOptHint](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13LinkerOptHint13LinkerOptHintERK13LinkerOptHint> "LIEF::MachO::LinkerOptHint::LinkerOptHint") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13LinkerOptHint5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13LinkerOptHint11data_offsetEv>)

inline uint32\_t data\_offset() const

Offset in the binary where the *hint* starts.

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13LinkerOptHint9data_sizeEv>)

inline uint32\_t data\_size() const

Size of the payload.

#### [` data_offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13LinkerOptHint11data_offsetE8uint32_t>)

inline void data\_offset(uint32\_t offset)

#### [` data_size `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13LinkerOptHint9data_sizeE8uint32_t>)

inline void data\_size(uint32\_t size)

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13LinkerOptHint7contentEv>)

inline span&lt;const uint8\_t&gt; content() const

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13LinkerOptHint7contentEv>)

inline span&lt;uint8\_t&gt; content()

#### [` ~LinkerOptHint `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13LinkerOptHintD0Ev>)

~LinkerOptHint() override = default

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13LinkerOptHint6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13LinkerOptHint5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13LinkerOptHint7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Two Level Hints Command](<https://lief.re/doc/latest/formats/macho/cpp.html#two-level-hints-command>)

### [` TwoLevelHints `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHintsE>)

class TwoLevelHints : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Class which represents the `LC_TWOLEVEL_HINTS` command.

Public Types

#### [` hints_list_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHints12hints_list_tE>)

using hints\_list\_t = std::vector&lt;uint32\_t&gt;

#### [` it_hints_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHints10it_hints_tE>)

using it\_hints\_t = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[hints\_list\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHints12hints_list_tE> "LIEF::MachO::TwoLevelHints::hints_list_t")&amp;&gt;

#### [` it_const_hints_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHints16it_const_hints_tE>)

using it\_const\_hints\_t = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [hints\_list\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHints12hints_list_tE> "LIEF::MachO::TwoLevelHints::hints_list_t")&amp;&gt;

Public Functions

#### [` TwoLevelHints `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHints13TwoLevelHintsEv>)

TwoLevelHints() = default

#### [` TwoLevelHints `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHints13TwoLevelHintsERKN7details22twolevel_hints_commandE>)

TwoLevelHints(const details::twolevel\_hints\_command &amp;cmd)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHintsaSERK13TwoLevelHints>)

[TwoLevelHints](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHintsE> "LIEF::MachO::TwoLevelHints") &amp;operator=(const [TwoLevelHints](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHintsE> "LIEF::MachO::TwoLevelHints") &amp;copy) = default

#### [` TwoLevelHints `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHints13TwoLevelHintsERK13TwoLevelHints>)

TwoLevelHints(const [TwoLevelHints](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHints13TwoLevelHintsERK13TwoLevelHints> "LIEF::MachO::TwoLevelHints::TwoLevelHints") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13TwoLevelHints5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13TwoLevelHints7contentEv>)

inline span&lt;const uint8\_t&gt; content() const

Original payload of the command.

#### [` content `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHints7contentEv>)

inline span&lt;uint8\_t&gt; content()

#### [` hints `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHints5hintsEv>)

inline [it\_hints\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHints10it_hints_tE> "LIEF::MachO::TwoLevelHints::it_hints_t") hints()

Iterator over the hints (`uint32_t` integers).

#### [` hints `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13TwoLevelHints5hintsEv>)

inline [it\_const\_hints\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHints16it_const_hints_tE> "LIEF::MachO::TwoLevelHints::it_const_hints_t") hints() const

#### [` offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13TwoLevelHints6offsetEv>)

inline uint32\_t offset() const

Original offset of the command. It should point in the `__LINKEDIT` segment.

#### [` offset `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHints6offsetE8uint32_t>)

inline void offset(uint32\_t offset)

#### [` original_nb_hints `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13TwoLevelHints17original_nb_hintsEv>)

inline uint32\_t original\_nb\_hints() const

#### [` ~TwoLevelHints `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHintsD0Ev>)

~TwoLevelHints() override = default

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13TwoLevelHints6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO13TwoLevelHints5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO13TwoLevelHints7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Unknown Command](<https://lief.re/doc/latest/formats/macho/cpp.html#unknown-command>)

### [` UnknownCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14UnknownCommandE>)

class UnknownCommand : public LIEF::MachO::[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")

Generic class when the command is not recognized by LIEF.

Public Functions

#### [` UnknownCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14UnknownCommand14UnknownCommandEv>)

UnknownCommand() = delete

#### [` UnknownCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14UnknownCommand14UnknownCommandERKN7details12load_commandE>)

inline UnknownCommand(const details::load\_command &amp;command)

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14UnknownCommandaSERK14UnknownCommand>)

[UnknownCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14UnknownCommandE> "LIEF::MachO::UnknownCommand") &amp;operator=(const [UnknownCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14UnknownCommandE> "LIEF::MachO::UnknownCommand") &amp;copy) = default

#### [` UnknownCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14UnknownCommand14UnknownCommandERK14UnknownCommand>)

UnknownCommand(const [UnknownCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14UnknownCommand14UnknownCommandERK14UnknownCommand> "LIEF::MachO::UnknownCommand::UnknownCommand") &amp;copy) = default

#### [` clone `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14UnknownCommand5cloneEv>)

inline virtual std::unique\_ptr&lt;[LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand")&gt; clone() const override

#### [` ~UnknownCommand `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14UnknownCommandD0Ev>)

~UnknownCommand() override = default

#### [` original_command `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14UnknownCommand16original_commandEv>)

inline uint64\_t original\_command() const

The original `LC_` int that is not supported by LIEF.

#### [` accept `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14UnknownCommand6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` print `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO14UnknownCommand5printERNSt7ostreamE>)

virtual std::ostream &amp;print(std::ostream &amp;os) const override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14UnknownCommand7classofEPK11LoadCommand>)

static inline bool classof(const [LoadCommand](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11LoadCommandE> "LIEF::MachO::LoadCommand") \*cmd)

---

## [Stub](<https://lief.re/doc/latest/formats/macho/cpp.html#stub>)

### [` Stub `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4StubE>)

class Stub

This class represents a stub entry in sections like `__stubs,__auth_stubs`.

It wraps assembly instructions which are used to access the *got* where the address of the symbol is resolved.

Example:

```text
0000000236a3c1bc: ___memcpy_chk
  adrp            x17, #0x241513aa8
  add             x17, x17, #0x241513aa8
  ldr             x16, [x17]
  braa            x16, x17
```

Public Functions

#### [` Stub `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub4StubEv>)

Stub() = delete

#### [` Stub `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub4StubERK4Stub>)

Stub(const [Stub](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub4StubERK4Stub> "LIEF::MachO::Stub::Stub")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4StubaSERK4Stub>)

[Stub](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4StubE> "LIEF::MachO::Stub") &amp;operator=(const [Stub](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4StubE> "LIEF::MachO::Stub")&amp;) = default

#### [` Stub `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub4StubERR4Stub>)

Stub([Stub](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub4StubERR4Stub> "LIEF::MachO::Stub::Stub")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4StubaSERR4Stub>)

[Stub](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4StubE> "LIEF::MachO::Stub") &amp;operator=([Stub](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4StubE> "LIEF::MachO::Stub")&amp;&amp;) noexcept = default

#### [` ~Stub `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4StubD0Ev>)

~Stub() = default

#### [` Stub `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub4StubE13target_info_t8uint64_tNSt6vectorI7uint8_tEE>)

inline Stub([target\_info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub13target_info_tE> "LIEF::MachO::Stub::target_info_t") target\_info, uint64\_t addr, std::vector&lt;uint8\_t&gt; raw)

#### [` raw `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO4Stub3rawEv>)

inline span&lt;const uint8\_t&gt; raw() const

The (raw) instructions of this entry as a slice of bytes.

#### [` address `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO4Stub7addressEv>)

inline uint64\_t address() const

The virtual address where the stub is located.

#### [` target `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO4Stub6targetEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; target() const

The address resolved by this stub.

For instance, given this stub:

```text
0x3eec: adrp    x16, #4096
0x3ef0: ldr     x16, [x16, #24]
0x3ef4: br      x16
```

The function returns: `0x4018`.

> **Warning**
> 
> This function is only available with LIEF’s extended version

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4StublsERNSt7ostreamERK4Stub>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Stub](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4StubE> "LIEF::MachO::Stub") &amp;stub)

#### [` target_info_t `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub13target_info_tE>)

struct target\_info\_t

Public Members

##### [` arch `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub13target_info_t4archE>)

[Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header")::[CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE> "LIEF::MachO::Header::CPU_TYPE") arch = [Header](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6HeaderE> "LIEF::MachO::Header")::[CPU\_TYPE](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPEE> "LIEF::MachO::Header::CPU_TYPE")::[ANY](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6Header8CPU_TYPE3ANYE> "LIEF::MachO::Header::CPU_TYPE::ANY")

##### [` subtype `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub13target_info_t7subtypeE>)

uint32\_t subtype = 0

Friends

##### [` operator== `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub13target_info_teqEN4Stub13target_info_tEN4Stub13target_info_tE>)

inline friend bool operator==([Stub](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4StubE> "LIEF::MachO::Stub")::[target\_info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub13target_info_tE> "LIEF::MachO::Stub::target_info_t") lhs, [Stub](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4StubE> "LIEF::MachO::Stub")::[target\_info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub13target_info_tE> "LIEF::MachO::Stub::target_info_t") rhs)

#### [` Iterator `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorE> "LIEF::MachO::Stub::Iterator"), std::random\_access\_iterator\_tag, const [Stub](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4StubE> "LIEF::MachO::Stub")&gt;

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8Iterator8IteratorEv>)

Iterator() = default

##### [` Iterator `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8Iterator8IteratorE13target_info_tNSt6vectorIPK7SectionEE6size_t>)

inline Iterator([target\_info\_t](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub13target_info_tE> "LIEF::MachO::Stub::target_info_t") target\_info, std::vector&lt;const [Section](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO7SectionE> "LIEF::MachO::Section")\*&gt; sections, size\_t pos)

##### [` Iterator `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8Iterator8IteratorERK8Iterator> "LIEF::MachO::Stub::Iterator::Iterator")&amp;) = default

##### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorE> "LIEF::MachO::Stub::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorE> "LIEF::MachO::Stub::Iterator")&amp;) = default

##### [` Iterator `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8Iterator8IteratorERR8Iterator> "LIEF::MachO::Stub::Iterator::Iterator")&amp;&amp;) noexcept = default

##### [` operator= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorE> "LIEF::MachO::Stub::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorE> "LIEF::MachO::Stub::Iterator")&amp;&amp;) noexcept = default

##### [` ~Iterator `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorD0Ev>)

~Iterator() = default

##### [` operator< `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO4Stub8IteratorltERK8Iterator>)

inline bool operator&lt;(const [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorE> "LIEF::MachO::Stub::Iterator") &amp;rhs) const

##### [` operator- `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO4Stub8IteratormiERK8Iterator>)

inline std::ptrdiff\_t operator-(const [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorE> "LIEF::MachO::Stub::Iterator") &amp;R) const

##### [` operator+= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorpLENSt9ptrdiff_tE>)

inline [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorE> "LIEF::MachO::Stub::Iterator") &amp;operator+=(std::ptrdiff\_t n)

##### [` operator-= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratormIENSt9ptrdiff_tE>)

inline [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorE> "LIEF::MachO::Stub::Iterator") &amp;operator-=(std::ptrdiff\_t n)

##### [` operator* `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO4Stub8IteratormlEv>)

[Stub](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4StubE> "LIEF::MachO::Stub") operator\*() const

Friends

##### [` operator== `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratoreqERK8IteratorRK8Iterator>)

inline friend bool operator==(const [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorE> "LIEF::MachO::Stub::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorE> "LIEF::MachO::Stub::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorE> "LIEF::MachO::Stub::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO4Stub8IteratorE> "LIEF::MachO::Stub::Iterator") &amp;RHS)

---

## [Utilities](<https://lief.re/doc/latest/formats/macho/cpp.html#utilities>)

### [` LIEF::MachO::check_layout `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12check_layoutERK6BinaryPNSt6stringE>)

bool LIEF::MachO::check\_layout(const [Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary") &amp;binary, std::string \*error = nullptr)

Check the layout of the given Mach-O binary. It checks if it can be signed according to cctools-921/libstuff/checkout.c.

### [` LIEF::MachO::check_layout `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12check_layoutERK9FatBinaryPNSt6stringE>)

bool LIEF::MachO::check\_layout(const [FatBinary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO9FatBinaryE> "LIEF::MachO::FatBinary") &amp;binary, std::string \*error = nullptr)

Check the layout of the given FAT Mach-O by checking individually the layout of the binaries embedded in the FAT.

### [` LIEF::MachO::is_macho `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8is_machoENSt11string_viewE>)

bool LIEF::MachO::is\_macho(std::string\_view file)

Check if the given file is a Mach-O binary.

### [` LIEF::MachO::is_macho `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO8is_machoERKNSt6vectorI7uint8_tEE>)

bool LIEF::MachO::is\_macho(const std::vector&lt;uint8\_t&gt; &amp;raw)

Check if the given raw data is a Mach-O binary.

### [` LIEF::MachO::is_fat `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6is_fatENSt11string_viewE>)

bool LIEF::MachO::is\_fat(std::string\_view file)

Check if the given file is a FAT Mach-O.

### [` LIEF::MachO::is_64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO5is_64ENSt11string_viewE>)

bool LIEF::MachO::is\_64(std::string\_view file)

Check if the given Mach-O is 64-bits.

---

## [Enums](<https://lief.re/doc/latest/formats/macho/cpp.html#enums>)

### [` LIEF::MachO::MACHO_TYPES `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MACHO_TYPESE>)

enum class LIEF::MachO::MACHO\_TYPES : uint32\_t

*Values:*

#### [` UNKNOWN `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MACHO_TYPES7UNKNOWNE>)

enumerator UNKNOWN = 0

#### [` MAGIC `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MACHO_TYPES5MAGICE>)

enumerator MAGIC = 0xFEEDFACEu

32-bit big-endian magic

#### [` CIGAM `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MACHO_TYPES5CIGAME>)

enumerator CIGAM = 0xCEFAEDFEu

32-bit little-endian magic

#### [` MAGIC_64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MACHO_TYPES8MAGIC_64E>)

enumerator MAGIC\_64 = 0xFEEDFACFu

64-bit big-endian magic

#### [` CIGAM_64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MACHO_TYPES8CIGAM_64E>)

enumerator CIGAM\_64 = 0xCFFAEDFEu

64-bit little-endian magic

#### [` MAGIC_FAT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MACHO_TYPES9MAGIC_FATE>)

enumerator MAGIC\_FAT = 0xCAFEBABEu

big-endian fat magic

#### [` CIGAM_FAT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MACHO_TYPES9CIGAM_FATE>)

enumerator CIGAM\_FAT = 0xBEBAFECAu

little-endian fat magic

#### [` NEURAL_MODEL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO11MACHO_TYPES12NEURAL_MODELE>)

enumerator NEURAL\_MODEL = 0xbeeffaceu

### [` LIEF::MachO::X86_RELOCATION `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14X86_RELOCATIONE>)

enum class LIEF::MachO::X86\_RELOCATION

*Values:*

#### [` GENERIC_RELOC_VANILLA `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14X86_RELOCATION21GENERIC_RELOC_VANILLAE>)

enumerator GENERIC\_RELOC\_VANILLA = 0

A generic relocation entry for both addresses contained in data and addresses contained in CPU instructions.

#### [` GENERIC_RELOC_PAIR `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14X86_RELOCATION18GENERIC_RELOC_PAIRE>)

enumerator GENERIC\_RELOC\_PAIR = 1

The second relocation entry of a pair.

#### [` GENERIC_RELOC_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14X86_RELOCATION22GENERIC_RELOC_SECTDIFFE>)

enumerator GENERIC\_RELOC\_SECTDIFF = 2

A relocation entry for an item that contains the difference of two section addresses. This is generally used for position-independent code generation.

#### [` GENERIC_RELOC_PB_LA_PTR `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14X86_RELOCATION23GENERIC_RELOC_PB_LA_PTRE>)

enumerator GENERIC\_RELOC\_PB\_LA\_PTR = 3

contains the address from which to subtract; it must be followed by a [X86\_RELOCATION::GENERIC\_RELOC\_PAIR](<https://lief.re/doc/latest/formats/macho/cpp.html#namespaceLIEF_1_1MachO_1a3c9b248d938a4910794ac4261e109f62a64af927fb59890d2ba7039d79533efbb>) containing the address to subtract.

#### [` GENERIC_RELOC_LOCAL_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14X86_RELOCATION28GENERIC_RELOC_LOCAL_SECTDIFFE>)

enumerator GENERIC\_RELOC\_LOCAL\_SECTDIFF = 4

Similar to [X86\_RELOCATION::GENERIC\_RELOC\_SECTDIFF](<https://lief.re/doc/latest/formats/macho/cpp.html#namespaceLIEF_1_1MachO_1a3c9b248d938a4910794ac4261e109f62a10edafaf57d38d78a037e728a69b2aef>) except that this entry refers specifically to the address in this item. If the address is that of a globally visible coalesced symbol, this relocation entry does not change if the symbol is overridden. This is used to associate stack unwinding information with the object code this relocation entry describes.

#### [` GENERIC_RELOC_TLV `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14X86_RELOCATION17GENERIC_RELOC_TLVE>)

enumerator GENERIC\_RELOC\_TLV = 5

A relocation entry for a prebound lazy pointer. This is always a scattered relocation entry. The MachO::Relocation::value field contains the non-prebound value of the lazy pointer.

### [` LIEF::MachO::X86_64_RELOCATION `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17X86_64_RELOCATIONE>)

enum class LIEF::MachO::X86\_64\_RELOCATION

*Values:*

#### [` X86_64_RELOC_UNSIGNED `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17X86_64_RELOCATION21X86_64_RELOC_UNSIGNEDE>)

enumerator X86\_64\_RELOC\_UNSIGNED = 0

A CALL/JMP instruction with 32-bit displacement.

#### [` X86_64_RELOC_SIGNED `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17X86_64_RELOCATION19X86_64_RELOC_SIGNEDE>)

enumerator X86\_64\_RELOC\_SIGNED = 1

A MOVQ load of a GOT entry.

#### [` X86_64_RELOC_BRANCH `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17X86_64_RELOCATION19X86_64_RELOC_BRANCHE>)

enumerator X86\_64\_RELOC\_BRANCH = 2

Other GOT references.

#### [` X86_64_RELOC_GOT_LOAD `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17X86_64_RELOCATION21X86_64_RELOC_GOT_LOADE>)

enumerator X86\_64\_RELOC\_GOT\_LOAD = 3

Signed 32-bit displacement.

#### [` X86_64_RELOC_GOT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17X86_64_RELOCATION16X86_64_RELOC_GOTE>)

enumerator X86\_64\_RELOC\_GOT = 4

Absolute address.

#### [` X86_64_RELOC_SUBTRACTOR `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17X86_64_RELOCATION23X86_64_RELOC_SUBTRACTORE>)

enumerator X86\_64\_RELOC\_SUBTRACTOR = 5

Must be followed by a [X86\_64\_RELOCATION::X86\_64\_RELOC\_UNSIGNED](<https://lief.re/doc/latest/formats/macho/cpp.html#namespaceLIEF_1_1MachO_1a1431532c7948d761033d4e39d1cf8175ad9102a896a5edef8c156692f77fe142d>) relocation.

#### [` X86_64_RELOC_SIGNED_1 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17X86_64_RELOCATION21X86_64_RELOC_SIGNED_1E>)

enumerator X86\_64\_RELOC\_SIGNED\_1 = 6

#### [` X86_64_RELOC_SIGNED_2 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17X86_64_RELOCATION21X86_64_RELOC_SIGNED_2E>)

enumerator X86\_64\_RELOC\_SIGNED\_2 = 7

#### [` X86_64_RELOC_SIGNED_4 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17X86_64_RELOCATION21X86_64_RELOC_SIGNED_4E>)

enumerator X86\_64\_RELOC\_SIGNED\_4 = 8

#### [` X86_64_RELOC_TLV `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO17X86_64_RELOCATION16X86_64_RELOC_TLVE>)

enumerator X86\_64\_RELOC\_TLV = 9

### [` LIEF::MachO::PPC_RELOCATION `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATIONE>)

enum class LIEF::MachO::PPC\_RELOCATION

*Values:*

#### [` PPC_RELOC_VANILLA `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATION17PPC_RELOC_VANILLAE>)

enumerator PPC\_RELOC\_VANILLA = 0

#### [` PPC_RELOC_PAIR `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATION14PPC_RELOC_PAIRE>)

enumerator PPC\_RELOC\_PAIR = 1

#### [` PPC_RELOC_BR14 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATION14PPC_RELOC_BR14E>)

enumerator PPC\_RELOC\_BR14 = 2

#### [` PPC_RELOC_BR24 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATION14PPC_RELOC_BR24E>)

enumerator PPC\_RELOC\_BR24 = 3

#### [` PPC_RELOC_HI16 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATION14PPC_RELOC_HI16E>)

enumerator PPC\_RELOC\_HI16 = 4

#### [` PPC_RELOC_LO16 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATION14PPC_RELOC_LO16E>)

enumerator PPC\_RELOC\_LO16 = 5

#### [` PPC_RELOC_HA16 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATION14PPC_RELOC_HA16E>)

enumerator PPC\_RELOC\_HA16 = 6

#### [` PPC_RELOC_LO14 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATION14PPC_RELOC_LO14E>)

enumerator PPC\_RELOC\_LO14 = 7

#### [` PPC_RELOC_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATION18PPC_RELOC_SECTDIFFE>)

enumerator PPC\_RELOC\_SECTDIFF = 8

#### [` PPC_RELOC_PB_LA_PTR `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATION19PPC_RELOC_PB_LA_PTRE>)

enumerator PPC\_RELOC\_PB\_LA\_PTR = 9

#### [` PPC_RELOC_HI16_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATION23PPC_RELOC_HI16_SECTDIFFE>)

enumerator PPC\_RELOC\_HI16\_SECTDIFF = 10

#### [` PPC_RELOC_LO16_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATION23PPC_RELOC_LO16_SECTDIFFE>)

enumerator PPC\_RELOC\_LO16\_SECTDIFF = 11

#### [` PPC_RELOC_HA16_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATION23PPC_RELOC_HA16_SECTDIFFE>)

enumerator PPC\_RELOC\_HA16\_SECTDIFF = 12

#### [` PPC_RELOC_JBSR `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATION14PPC_RELOC_JBSRE>)

enumerator PPC\_RELOC\_JBSR = 13

#### [` PPC_RELOC_LO14_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATION23PPC_RELOC_LO14_SECTDIFFE>)

enumerator PPC\_RELOC\_LO14\_SECTDIFF = 14

#### [` PPC_RELOC_LOCAL_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14PPC_RELOCATION24PPC_RELOC_LOCAL_SECTDIFFE>)

enumerator PPC\_RELOC\_LOCAL\_SECTDIFF = 15

### [` LIEF::MachO::ARM_RELOCATION `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14ARM_RELOCATIONE>)

enum class LIEF::MachO::ARM\_RELOCATION

*Values:*

#### [` ARM_RELOC_VANILLA `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14ARM_RELOCATION17ARM_RELOC_VANILLAE>)

enumerator ARM\_RELOC\_VANILLA = 0

#### [` ARM_RELOC_PAIR `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14ARM_RELOCATION14ARM_RELOC_PAIRE>)

enumerator ARM\_RELOC\_PAIR = 1

#### [` ARM_RELOC_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14ARM_RELOCATION18ARM_RELOC_SECTDIFFE>)

enumerator ARM\_RELOC\_SECTDIFF = 2

#### [` ARM_RELOC_LOCAL_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14ARM_RELOCATION24ARM_RELOC_LOCAL_SECTDIFFE>)

enumerator ARM\_RELOC\_LOCAL\_SECTDIFF = 3

#### [` ARM_RELOC_PB_LA_PTR `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14ARM_RELOCATION19ARM_RELOC_PB_LA_PTRE>)

enumerator ARM\_RELOC\_PB\_LA\_PTR = 4

#### [` ARM_RELOC_BR24 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14ARM_RELOCATION14ARM_RELOC_BR24E>)

enumerator ARM\_RELOC\_BR24 = 5

#### [` ARM_THUMB_RELOC_BR22 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14ARM_RELOCATION20ARM_THUMB_RELOC_BR22E>)

enumerator ARM\_THUMB\_RELOC\_BR22 = 6

#### [` ARM_THUMB_32BIT_BRANCH `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14ARM_RELOCATION22ARM_THUMB_32BIT_BRANCHE>)

enumerator ARM\_THUMB\_32BIT\_BRANCH = 7

#### [` ARM_RELOC_HALF `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14ARM_RELOCATION14ARM_RELOC_HALFE>)

enumerator ARM\_RELOC\_HALF = 8

#### [` ARM_RELOC_HALF_SECTDIFF `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO14ARM_RELOCATION23ARM_RELOC_HALF_SECTDIFFE>)

enumerator ARM\_RELOC\_HALF\_SECTDIFF = 9

### [` LIEF::MachO::ARM64_RELOCATION `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16ARM64_RELOCATIONE>)

enum class LIEF::MachO::ARM64\_RELOCATION

*Values:*

#### [` ARM64_RELOC_UNSIGNED `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16ARM64_RELOCATION20ARM64_RELOC_UNSIGNEDE>)

enumerator ARM64\_RELOC\_UNSIGNED = 0

For pointers.

#### [` ARM64_RELOC_SUBTRACTOR `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16ARM64_RELOCATION22ARM64_RELOC_SUBTRACTORE>)

enumerator ARM64\_RELOC\_SUBTRACTOR = 1

Must be followed by an [ARM64\_RELOCATION::ARM64\_RELOC\_UNSIGNED](<https://lief.re/doc/latest/formats/macho/cpp.html#namespaceLIEF_1_1MachO_1a07b1f370e9f3cbed3e8c646c8738e044a42d4fc193e6240c9971860b102f71687>).

#### [` ARM64_RELOC_BRANCH26 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16ARM64_RELOCATION20ARM64_RELOC_BRANCH26E>)

enumerator ARM64\_RELOC\_BRANCH26 = 2

A B/BL instruction with 26-bit displacement.

#### [` ARM64_RELOC_PAGE21 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16ARM64_RELOCATION18ARM64_RELOC_PAGE21E>)

enumerator ARM64\_RELOC\_PAGE21 = 3

PC-rel distance to page of target.

#### [` ARM64_RELOC_PAGEOFF12 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16ARM64_RELOCATION21ARM64_RELOC_PAGEOFF12E>)

enumerator ARM64\_RELOC\_PAGEOFF12 = 4

Offset within page, scaled by [MachO::Relocation::size](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation_1ab0947e1a02c0ee7043e8b732ba3a45bc>).

#### [` ARM64_RELOC_GOT_LOAD_PAGE21 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16ARM64_RELOCATION27ARM64_RELOC_GOT_LOAD_PAGE21E>)

enumerator ARM64\_RELOC\_GOT\_LOAD\_PAGE21 = 5

PC-rel distance to page of GOT slot.

#### [` ARM64_RELOC_GOT_LOAD_PAGEOFF12 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16ARM64_RELOCATION30ARM64_RELOC_GOT_LOAD_PAGEOFF12E>)

enumerator ARM64\_RELOC\_GOT\_LOAD\_PAGEOFF12 = 6

Offset within page of GOT slot, scaled by [MachO::Relocation::size](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation_1ab0947e1a02c0ee7043e8b732ba3a45bc>).

#### [` ARM64_RELOC_POINTER_TO_GOT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16ARM64_RELOCATION26ARM64_RELOC_POINTER_TO_GOTE>)

enumerator ARM64\_RELOC\_POINTER\_TO\_GOT = 7

For pointers to GOT slots.

#### [` ARM64_RELOC_TLVP_LOAD_PAGE21 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16ARM64_RELOCATION28ARM64_RELOC_TLVP_LOAD_PAGE21E>)

enumerator ARM64\_RELOC\_TLVP\_LOAD\_PAGE21 = 8

PC-rel distance to page of TLVP slot.

#### [` ARM64_RELOC_TLVP_LOAD_PAGEOFF12 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16ARM64_RELOCATION31ARM64_RELOC_TLVP_LOAD_PAGEOFF12E>)

enumerator ARM64\_RELOC\_TLVP\_LOAD\_PAGEOFF12 = 9

Offset within page of TLVP slot, scaled by [MachO::Relocation::size](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Relocation_1ab0947e1a02c0ee7043e8b732ba3a45bc>).

#### [` ARM64_RELOC_ADDEND `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO16ARM64_RELOCATION18ARM64_RELOC_ADDENDE>)

enumerator ARM64\_RELOC\_ADDEND = 10

Must be followed by [ARM64\_RELOCATION::ARM64\_RELOC\_PAGE21](<https://lief.re/doc/latest/formats/macho/cpp.html#namespaceLIEF_1_1MachO_1a07b1f370e9f3cbed3e8c646c8738e044a9a93fa8a51c4e4f69eebe4766659fee1>) or [ARM64\_RELOCATION::ARM64\_RELOC\_PAGEOFF12](<https://lief.re/doc/latest/formats/macho/cpp.html#namespaceLIEF_1_1MachO_1a07b1f370e9f3cbed3e8c646c8738e044a25b6279c6eb8e98ac00cc93a931c11cf>).

### [` LIEF::MachO::DYLD_CHAINED_FORMAT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO19DYLD_CHAINED_FORMATE>)

enum class LIEF::MachO::DYLD\_CHAINED\_FORMAT

*Values:*

#### [` IMPORT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO19DYLD_CHAINED_FORMAT6IMPORTE>)

enumerator IMPORT = 1

Originally: DYLD\_CHAINED\_IMPORT.

#### [` IMPORT_ADDEND `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO19DYLD_CHAINED_FORMAT13IMPORT_ADDENDE>)

enumerator IMPORT\_ADDEND = 2

Originally: DYLD\_CHAINED\_IMPORT\_ADDEND.

#### [` IMPORT_ADDEND64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO19DYLD_CHAINED_FORMAT15IMPORT_ADDEND64E>)

enumerator IMPORT\_ADDEND64 = 3

Originally: DYLD\_CHAINED\_IMPORT\_ADDEND64.

### [` LIEF::MachO::DYLD_CHAINED_PTR_FORMAT `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMATE>)

enum class LIEF::MachO::DYLD\_CHAINED\_PTR\_FORMAT

*Values:*

#### [` NONE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT4NONEE>)

enumerator NONE = 0

#### [` PTR_ARM64E `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT10PTR_ARM64EE>)

enumerator PTR\_ARM64E = 1

#### [` PTR_64 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT6PTR_64E>)

enumerator PTR\_64 = 2

#### [` PTR_32 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT6PTR_32E>)

enumerator PTR\_32 = 3

#### [` PTR_32_CACHE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT12PTR_32_CACHEE>)

enumerator PTR\_32\_CACHE = 4

#### [` PTR_32_FIRMWARE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT15PTR_32_FIRMWAREE>)

enumerator PTR\_32\_FIRMWARE = 5

#### [` PTR_64_OFFSET `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT13PTR_64_OFFSETE>)

enumerator PTR\_64\_OFFSET = 6

#### [` PTR_ARM64E_OFFSET `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT17PTR_ARM64E_OFFSETE>)

enumerator PTR\_ARM64E\_OFFSET = 7

#### [` PTR_ARM64E_KERNEL `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT17PTR_ARM64E_KERNELE>)

enumerator PTR\_ARM64E\_KERNEL = 7

#### [` PTR_64_KERNEL_CACHE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT19PTR_64_KERNEL_CACHEE>)

enumerator PTR\_64\_KERNEL\_CACHE = 8

#### [` PTR_ARM64E_USERLAND `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT19PTR_ARM64E_USERLANDE>)

enumerator PTR\_ARM64E\_USERLAND = 9

#### [` PTR_ARM64E_FIRMWARE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT19PTR_ARM64E_FIRMWAREE>)

enumerator PTR\_ARM64E\_FIRMWARE = 10

#### [` PTR_X86_64_KERNEL_CACHE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT23PTR_X86_64_KERNEL_CACHEE>)

enumerator PTR\_X86\_64\_KERNEL\_CACHE = 11

#### [` PTR_ARM64E_USERLAND24 `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT21PTR_ARM64E_USERLAND24E>)

enumerator PTR\_ARM64E\_USERLAND24 = 12

#### [` PTR_ARM64E_SHARED_CACHE `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT23PTR_ARM64E_SHARED_CACHEE>)

enumerator PTR\_ARM64E\_SHARED\_CACHE = 13

#### [` PTR_ARM64E_SEGMENTED `](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO23DYLD_CHAINED_PTR_FORMAT20PTR_ARM64E_SEGMENTEDE>)

enumerator PTR\_ARM64E\_SEGMENTED = 14
