---
documentID: "320f29aa44638993d5c4981ca7c8e9414475e7571248480b0cb32e03563c1c10"
docname: "formats/coff/cpp"
title: "COFF C++ API - LIEF Documentation"
description: "COFF C++ API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/formats/coff/cpp.html"
markdownURL: "https://lief.re/doc/latest/formats/coff/cpp.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "cb37de9453bdbae5f3f15a0e76315c600ece6d9fde833fd7c2ff6b5d862f4a43"
---

# [C++](<https://lief.re/doc/latest/formats/coff/cpp.html#c>)

## [Parser](<https://lief.re/doc/latest/formats/coff/cpp.html#parser>)

### [` Parser `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6ParserE>)

class Parser

Public Types

#### [` SymSecMap `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Parser9SymSecMapE>)

using SymSecMap = std::vector&lt;SymSec&gt;

&lt;=&gt; std::unordered\_multimap&lt;section index, Symbol\*&gt;

Public Functions

#### [` ~Parser `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6ParserD0Ev>)

~Parser()

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Parser5parseENSt10unique_ptrI12BinaryStreamEERK12ParserConfig>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6BinaryE> "LIEF::COFF::Binary")&gt; parse(std::unique\_ptr&lt;[BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream")&gt; stream, const [ParserConfig](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12ParserConfigE> "LIEF::COFF::ParserConfig") &amp;config = [ParserConfig](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12ParserConfigE> "LIEF::COFF::ParserConfig")::[default\_conf](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12ParserConfig12default_confEv> "LIEF::COFF::ParserConfig::default_conf")())

Parse the COFF binary referenced by the `stream` argument with the given config.

#### [` parse `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Parser5parseENSt11string_viewERK12ParserConfig>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6BinaryE> "LIEF::COFF::Binary")&gt; parse(std::string\_view file, const [ParserConfig](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12ParserConfigE> "LIEF::COFF::ParserConfig") &amp;config = [ParserConfig](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12ParserConfigE> "LIEF::COFF::ParserConfig")::[default\_conf](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12ParserConfig12default_confEv> "LIEF::COFF::ParserConfig::default_conf")())

Parse the COFF binary pointed by the `file` argument with the given config.

#### [` PathTparse `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF4COFF6Parser5parseENSt10unique_ptrI6BinaryEERK5PathTRK12ParserConfig>)

template&lt;class PathT, enable\_if\_path\_t&lt;[PathT](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF4COFF6Parser5parseENSt10unique_ptrI6BinaryEERK5PathTRK12ParserConfig> "LIEF::COFF::Parser::parse::PathT")&gt; = 0&gt;  
static inline std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6BinaryE> "LIEF::COFF::Binary")&gt; parse(const [PathT](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF4COFF6Parser5parseENSt10unique_ptrI6BinaryEERK5PathTRK12ParserConfig> "LIEF::COFF::Parser::parse::PathT") &amp;file, const [ParserConfig](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12ParserConfigE> "LIEF::COFF::ParserConfig") &amp;config = [ParserConfig](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12ParserConfigE> "LIEF::COFF::ParserConfig")::[default\_conf](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12ParserConfig12default_confEv> "LIEF::COFF::ParserConfig::default_conf")())

Same as [parse(std::string\_view, const ParserConfig&amp;)](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Parser_1ab8d702cbf21f59cca37c2d4a19bf55ed>) but the file is given as a `std::filesystem::path`.

Public Static Attributes

#### [` MAX_NB_SECTIONS `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Parser15MAX_NB_SECTIONSE>)

static size\_t MAX\_NB\_SECTIONS = 1 &lt;&lt; 20

### [` ParserConfig `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12ParserConfigE>)

class ParserConfig

Class used to configure the COFF parser.

Public Static Functions

#### [` default_conf `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12ParserConfig12default_confEv>)

static inline const [ParserConfig](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12ParserConfigE> "LIEF::COFF::ParserConfig") &amp;default\_conf()

#### [` all `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12ParserConfig3allEv>)

static inline const [ParserConfig](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12ParserConfigE> "LIEF::COFF::ParserConfig") &amp;all()

---

## [Binary](<https://lief.re/doc/latest/formats/coff/cpp.html#binary>)

### [` Binary `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6BinaryE>)

class Binary

Class that represents a COFF [Binary](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Binary>).

Public Types

#### [` sections_t `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary10sections_tE>)

using sections\_t = std::vector&lt;std::unique\_ptr&lt;[Section](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7SectionE> "LIEF::COFF::Section")&gt;&gt;

Internal container used to store COFF’s section.

#### [` it_sections `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary11it_sectionsE>)

using it\_sections = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[sections\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary10sections_tE> "LIEF::COFF::Binary::sections_t")&amp;, [Section](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7SectionE> "LIEF::COFF::Section")\*&gt;

Iterator that outputs [Section](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Section>)&amp; object.

#### [` it_const_sections `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary17it_const_sectionsE>)

using it\_const\_sections = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [sections\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary10sections_tE> "LIEF::COFF::Binary::sections_t")&amp;, const [Section](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7SectionE> "LIEF::COFF::Section")\*&gt;

Iterator that outputs const [Section](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Section>)&amp; object.

#### [` relocations_t `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary13relocations_tE>)

using relocations\_t = std::vector&lt;std::unique\_ptr&lt;[Relocation](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10RelocationE> "LIEF::COFF::Relocation")&gt;&gt;

Internal container used to store COFF’s relocations.

#### [` it_relocations `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary14it_relocationsE>)

using it\_relocations = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[relocations\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary13relocations_tE> "LIEF::COFF::Binary::relocations_t")&amp;, [Relocation](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10RelocationE> "LIEF::COFF::Relocation")\*&gt;

Iterator that outputs [Relocation](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Relocation>)&amp; object.

#### [` it_const_relocations `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary20it_const_relocationsE>)

using it\_const\_relocations = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [relocations\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary13relocations_tE> "LIEF::COFF::Binary::relocations_t")&amp;, const [Relocation](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10RelocationE> "LIEF::COFF::Relocation")\*&gt;

Iterator that outputs const [Relocation](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Relocation>)&amp; object.

#### [` strings_table_t `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary15strings_table_tE>)

using strings\_table\_t = std::vector&lt;[String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringE> "LIEF::COFF::String")&gt;

Internal container used to store COFF’s strings.

#### [` it_strings_table `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary16it_strings_tableE>)

using it\_strings\_table = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[strings\_table\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary15strings_table_tE> "LIEF::COFF::Binary::strings_table_t")&amp;&gt;

Iterator that outputs [String](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1String>)&amp; object.

#### [` it_const_strings_table `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary22it_const_strings_tableE>)

using it\_const\_strings\_table = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [strings\_table\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary15strings_table_tE> "LIEF::COFF::Binary::strings_table_t")&amp;&gt;

Iterator that outputs const [String](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1String>)&amp; object.

#### [` symbols_t `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary9symbols_tE>)

using symbols\_t = std::vector&lt;std::unique\_ptr&lt;[Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol")&gt;&gt;

Internal container used to store COFF’s symbols.

#### [` it_symbols `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary10it_symbolsE>)

using it\_symbols = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[symbols\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary9symbols_tE> "LIEF::COFF::Binary::symbols_t")&amp;, [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol")\*&gt;

Iterator that outputs [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Symbol>)&amp; object.

#### [` it_const_symbols `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary16it_const_symbolsE>)

using it\_const\_symbols = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [symbols\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary9symbols_tE> "LIEF::COFF::Binary::symbols_t")&amp;, const [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol")\*&gt;

Iterator that outputs [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Symbol>)&amp; object.

#### [` instructions_it `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary15instructions_itE>)

using instructions\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;assembly::[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction")::[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorE> "LIEF::assembly::Instruction::Iterator")&gt;

Instruction iterator.

#### [` it_functions `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary12it_functionsE>)

using it\_functions = [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator")&lt;[symbols\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary9symbols_tE> "LIEF::COFF::Binary::symbols_t")&amp;, [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol")\*&gt;

Iterator which outputs COFF symbols representing functions.

#### [` it_const_function `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary17it_const_functionE>)

using it\_const\_function = [const\_filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator")&lt;const [symbols\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary9symbols_tE> "LIEF::COFF::Binary::symbols_t")&amp;, const [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol")\*&gt;

Iterator which outputs COFF symbols representing functions.

Public Functions

#### [` header `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary6headerEv>)

inline const [Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header") &amp;header() const

The COFF header.

#### [` header `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary6headerEv>)

inline [Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header") &amp;header()

#### [` sections `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary8sectionsEv>)

inline [it\_sections](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary11it_sectionsE> "LIEF::COFF::Binary::it_sections") sections()

Iterator over the different sections located in this COFF binary.

#### [` sections `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary8sectionsEv>)

inline [it\_const\_sections](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary17it_const_sectionsE> "LIEF::COFF::Binary::it_const_sections") sections() const

#### [` relocations `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary11relocationsEv>)

inline [it\_relocations](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary14it_relocationsE> "LIEF::COFF::Binary::it_relocations") relocations()

Iterator over **all** the relocations used by this COFF binary.

#### [` relocations `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary11relocationsEv>)

inline [it\_const\_relocations](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary20it_const_relocationsE> "LIEF::COFF::Binary::it_const_relocations") relocations() const

#### [` symbols `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary7symbolsEv>)

inline [it\_symbols](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary10it_symbolsE> "LIEF::COFF::Binary::it_symbols") symbols()

Iterator over the COFF’s symbols.

#### [` symbols `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary7symbolsEv>)

inline [it\_const\_symbols](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary16it_const_symbolsE> "LIEF::COFF::Binary::it_const_symbols") symbols() const

#### [` string_table `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary12string_tableEv>)

inline [it\_const\_strings\_table](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary22it_const_strings_tableE> "LIEF::COFF::Binary::it_const_strings_table") string\_table() const

Iterator over the COFF’s strings.

#### [` string_table `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary12string_tableEv>)

inline [it\_strings\_table](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary16it_strings_tableE> "LIEF::COFF::Binary::it_strings_table") string\_table()

#### [` find_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary11find_stringE8uint32_t>)

inline [String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringE> "LIEF::COFF::String") \*find\_string(uint32\_t offset)

Try to find the COFF string at the given offset in the COFF string table.

> **Warning**
> 
> This offset must include the first 4 bytes holding the size of the table. Hence, the first string starts a the offset 4.

#### [` find_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary11find_stringE8uint32_t>)

inline const [String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringE> "LIEF::COFF::String") \*find\_string(uint32\_t offset) const

#### [` functions `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary9functionsEv>)

[it\_const\_function](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary17it_const_functionE> "LIEF::COFF::Binary::it_const_function") functions() const

Iterator over the functions implemented in this COFF.

#### [` functions `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary9functionsEv>)

[it\_functions](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary12it_functionsE> "LIEF::COFF::Binary::it_functions") functions()

#### [` find_function `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary13find_functionERKNSt6stringE>)

const [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") \*find\_function(const std::string &amp;name) const

Try to find the function (symbol) with the given name.

#### [` find_function `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary13find_functionERKNSt6stringE>)

inline [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") \*find\_function(const std::string &amp;name)

#### [` find_demangled_function `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary23find_demangled_functionERKNSt6stringE>)

const [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") \*find\_demangled\_function(const std::string &amp;name) const

Try to find the function (symbol) with the given **demangled** name.

#### [` find_demangled_function `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary23find_demangled_functionERKNSt6stringE>)

inline [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") \*find\_demangled\_function(const std::string &amp;name)

#### [` disassemble `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary11disassembleERK6Symbol>)

[instructions\_it](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary15instructions_itE> "LIEF::COFF::Binary::instructions_it") disassemble(const [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") &amp;symbol) const

Disassemble code for the given symbol.

```cpp
const Symbol* func = binary->find_demangled_function("int __cdecl
my_function(int, int)"); auto insts = binary->disassemble(*func); for
(std::unique_ptr<assembly::Instruction> inst : insts) {
  std::cout << inst->to_string() << '\n';
}
```

> **See also**
> 
> [LIEF::assembly::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction>)

#### [` disassemble `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary11disassembleERKNSt6stringE>)

[instructions\_it](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary15instructions_itE> "LIEF::COFF::Binary::instructions_it") disassemble(const std::string &amp;symbol) const

Disassemble code for the given symbol name.

```cpp
auto insts = binary->disassemble("main");
for (std::unique_ptr<assembly::Instruction> inst : insts) {
  std::cout << inst->to_string() << '\n';
}
```

> **See also**
> 
> [LIEF::assembly::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction>)

#### [` disassemble `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary11disassembleEPK7uint8_t6size_t8uint64_t>)

[instructions\_it](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary15instructions_itE> "LIEF::COFF::Binary::instructions_it") disassemble(const uint8\_t \*buffer, size\_t size, uint64\_t address = 0) const

Disassemble code provided by the given buffer at the specified `address` parameter.

The binary and the buffer must outlive the returned iterator.

> **See also**
> 
> [LIEF::assembly::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction>)

#### [` disassemble `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary11disassembleERKNSt6vectorI7uint8_tEE8uint64_t>)

inline [instructions\_it](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary15instructions_itE> "LIEF::COFF::Binary::instructions_it") disassemble(const std::vector&lt;uint8\_t&gt; &amp;buffer, uint64\_t address = 0) const

Disassemble code provided by the given vector of bytes at the specified `address` parameter.

> **See also**
> 
> [LIEF::assembly::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction>)

#### [` disassemble `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary11disassembleEN4LIEF4spanIK7uint8_tEE8uint64_t>)

inline [instructions\_it](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary15instructions_itE> "LIEF::COFF::Binary::instructions_it") disassemble(LIEF::span&lt;const uint8\_t&gt; buffer, uint64\_t address = 0) const

#### [` disassemble `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary11disassembleEN4LIEF4spanI7uint8_tEE8uint64_t>)

inline [instructions\_it](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary15instructions_itE> "LIEF::COFF::Binary::instructions_it") disassemble(LIEF::span&lt;uint8\_t&gt; buffer, uint64\_t address = 0) const

#### [` get_section `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Binary11get_sectionENSt11string_viewE>)

inline [Section](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7SectionE> "LIEF::COFF::Section") \*get\_section(std::string\_view name)

Return the section matching the given name or a nullptr if it can’t be found.

[Section](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Section>) names that do not fit in the 8 bytes allocated by the COFF format are stored in the COFF string table while the section itself only holds a `/<offset>` placeholder. This function transparently resolves both forms, so a long name can be looked up with its **regular** value:

```cpp
const Section* sec = binary->get_section(".debug_rnglists");
sec->name();                 // "/18"
sec->coff_string()->str();   // ".debug_rnglists"
```

**Parameters:**

**name** – **[in]** Name of the section

#### [` get_section `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary11get_sectionENSt11string_viewE>)

const [Section](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7SectionE> "LIEF::COFF::Section") \*get\_section(std::string\_view name) const

#### [` to_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Binary9to_stringEv>)

std::string to\_string() const

#### [` ~Binary `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6BinaryD0Ev>)

~Binary()

Friends

**friend class Parser**

#### [` operator<< `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6BinarylsERNSt7ostreamERK6Binary>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Binary](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6BinaryE> "LIEF::COFF::Binary") &amp;bin)

---

## [Header](<https://lief.re/doc/latest/formats/coff/cpp.html#header>)

### [` Header `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE>)

class Header

Class that represents the COFF header. It is subclassed by [LIEF::COFF::RegularHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1RegularHeader>) and [LIEF::COFF::BigObjHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1BigObjHeader>) for normal vs `/bigobj` files.

Subclassed by [LIEF::COFF::BigObjHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1BigObjHeader>), [LIEF::COFF::RegularHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1RegularHeader>)

Public Types

#### [` KIND `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header4KINDE>)

enum class KIND

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header4KIND7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` REGULAR `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header4KIND7REGULARE>)

enumerator REGULAR

##### [` BIGOBJ `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header4KIND6BIGOBJE>)

enumerator BIGOBJ

#### [` MACHINE_TYPES `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header13MACHINE_TYPESE>)

using MACHINE\_TYPES = LIEF::PE::[Header](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6HeaderE> "LIEF::PE::Header")::[MACHINE\_TYPES](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Header13MACHINE_TYPESE> "LIEF::PE::Header::MACHINE_TYPES")

The different architectures (mirrored from PE).

Public Functions

#### [` Header `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header6HeaderEv>)

Header() = default

#### [` Header `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header6HeaderE4KIND>)

inline Header([KIND](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header4KINDE> "LIEF::COFF::Header::KIND") kind)

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderaSERK6Header>)

[Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header") &amp;operator=(const [Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header")&amp;) = default

#### [` Header `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header6HeaderERK6Header>)

Header(const [Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header6HeaderERK6Header> "LIEF::COFF::Header::Header")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderaSERR6Header>)

[Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header") &amp;operator=([Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header")&amp;&amp;) = default

#### [` Header `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header6HeaderERR6Header>)

Header([Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header6HeaderERR6Header> "LIEF::COFF::Header::Header")&amp;&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Header5cloneEv>)

virtual std::unique\_ptr&lt;[Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header")&gt; clone() const = 0

#### [` kind `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Header4kindEv>)

inline [KIND](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header4KINDE> "LIEF::COFF::Header::KIND") kind() const

The type of this header: whether it is regular or using the `/bigobj` format.

#### [` machine `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Header7machineEv>)

inline [MACHINE\_TYPES](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header13MACHINE_TYPESE> "LIEF::COFF::Header::MACHINE_TYPES") machine() const

The machine type targeted by this COFF.

#### [` nb_sections `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Header11nb_sectionsEv>)

inline uint32\_t nb\_sections() const

The number of sections.

#### [` pointerto_symbol_table `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Header22pointerto_symbol_tableEv>)

inline uint32\_t pointerto\_symbol\_table() const

Offset of the symbols table.

#### [` nb_symbols `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Header10nb_symbolsEv>)

inline uint32\_t nb\_symbols() const

Number of symbols (including auxiliary symbols).

#### [` timedatestamp `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Header13timedatestampEv>)

inline uint32\_t timedatestamp() const

Timestamp when the COFF has been generated.

#### [` machine `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header7machineE13MACHINE_TYPES>)

inline void machine([MACHINE\_TYPES](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header13MACHINE_TYPESE> "LIEF::COFF::Header::MACHINE_TYPES") machine)

#### [` nb_sections `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header11nb_sectionsE8uint32_t>)

inline void nb\_sections(uint32\_t value)

#### [` pointerto_symbol_table `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header22pointerto_symbol_tableE8uint32_t>)

inline void pointerto\_symbol\_table(uint32\_t value)

#### [` nb_symbols `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header10nb_symbolsE8uint32_t>)

inline void nb\_symbols(uint32\_t value)

#### [` timedatestamp `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header13timedatestampE8uint32_t>)

inline void timedatestamp(uint32\_t value)

#### [` to_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Header9to_stringEv>)

virtual std::string to\_string() const

#### [` Tas `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4I0ENK4LIEF4COFF6Header2asEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4I0ENK4LIEF4COFF6Header2asEPK1Tv> "LIEF::COFF::Header::as::T") \*as() const

#### [` ~Header `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderD0Ev>)

virtual ~Header() = default

Public Static Functions

#### [` create `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header6createER12BinaryStream>)

static std::unique\_ptr&lt;[Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header")&gt; create([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

Create a header from the given stream.

#### [` create `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header6createER12BinaryStream4KIND>)

static std::unique\_ptr&lt;[Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header")&gt; create([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream, [KIND](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header4KINDE> "LIEF::COFF::Header::KIND") kind)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderlsERNSt7ostreamERK6Header>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header") &amp;hdr)

---

## [Regular Header](<https://lief.re/doc/latest/formats/coff/cpp.html#regular-header>)

### [` RegularHeader `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeaderE>)

class RegularHeader : public LIEF::COFF::[Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header")

This class represents the COFF header for non-bigobj.

Public Functions

#### [` RegularHeader `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeader13RegularHeaderEv>)

inline RegularHeader()

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeaderaSERK13RegularHeader>)

[RegularHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeaderE> "LIEF::COFF::RegularHeader") &amp;operator=(const [RegularHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeaderE> "LIEF::COFF::RegularHeader")&amp;) = default

#### [` RegularHeader `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeader13RegularHeaderERK13RegularHeader>)

RegularHeader(const [RegularHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeader13RegularHeaderERK13RegularHeader> "LIEF::COFF::RegularHeader::RegularHeader")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeaderaSERR13RegularHeader>)

[RegularHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeaderE> "LIEF::COFF::RegularHeader") &amp;operator=([RegularHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeaderE> "LIEF::COFF::RegularHeader")&amp;&amp;) = default

#### [` RegularHeader `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeader13RegularHeaderERR13RegularHeader>)

RegularHeader([RegularHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeader13RegularHeaderERR13RegularHeader> "LIEF::COFF::RegularHeader::RegularHeader")&amp;&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF13RegularHeader5cloneEv>)

inline virtual std::unique\_ptr&lt;[Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header")&gt; clone() const override

#### [` sizeof_optionalheader `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF13RegularHeader21sizeof_optionalheaderEv>)

inline uint16\_t sizeof\_optionalheader() const

The size of the optional header which follows this header (should be 0).

#### [` characteristics `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF13RegularHeader15characteristicsEv>)

inline uint16\_t characteristics() const

Characteristics.

#### [` sizeof_optionalheader `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeader21sizeof_optionalheaderE8uint16_t>)

inline void sizeof\_optionalheader(uint16\_t value)

#### [` characteristics `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeader15characteristicsE8uint16_t>)

inline void characteristics(uint16\_t value)

#### [` ~RegularHeader `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeaderD0Ev>)

~RegularHeader() override = default

#### [` to_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF13RegularHeader9to_stringEv>)

virtual std::string to\_string() const override

Public Static Functions

#### [` create `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeader6createER12BinaryStream>)

static std::unique\_ptr&lt;[RegularHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeaderE> "LIEF::COFF::RegularHeader")&gt; create([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

Create a [RegularHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1RegularHeader>) from the given stream.

#### [` classof `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13RegularHeader7classofEPK6Header>)

static inline bool classof(const [Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header") \*header)

---

## [BigObj Header](<https://lief.re/doc/latest/formats/coff/cpp.html#bigobj-header>)

### [` BigObjHeader `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeaderE>)

class BigObjHeader : public LIEF::COFF::[Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header")

This class represents the header for a COFF object compiled with `/bigobj` support (i.e. the number of sections can exceed 65536).

The raw definition of the bigobj header is located in `winnt.h` and named `ANON_OBJECT_HEADER_BIGOBJ`

Public Functions

#### [` BigObjHeader `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeader12BigObjHeaderEv>)

inline BigObjHeader()

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeaderaSERK12BigObjHeader>)

[BigObjHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeaderE> "LIEF::COFF::BigObjHeader") &amp;operator=(const [BigObjHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeaderE> "LIEF::COFF::BigObjHeader")&amp;) = default

#### [` BigObjHeader `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeader12BigObjHeaderERK12BigObjHeader>)

BigObjHeader(const [BigObjHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeader12BigObjHeaderERK12BigObjHeader> "LIEF::COFF::BigObjHeader::BigObjHeader")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeaderaSERR12BigObjHeader>)

[BigObjHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeaderE> "LIEF::COFF::BigObjHeader") &amp;operator=([BigObjHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeaderE> "LIEF::COFF::BigObjHeader")&amp;&amp;) = default

#### [` BigObjHeader `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeader12BigObjHeaderERR12BigObjHeader>)

BigObjHeader([BigObjHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeader12BigObjHeaderERR12BigObjHeader> "LIEF::COFF::BigObjHeader::BigObjHeader")&amp;&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF12BigObjHeader5cloneEv>)

inline virtual std::unique\_ptr&lt;[Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header")&gt; clone() const override

#### [` version `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF12BigObjHeader7versionEv>)

inline uint16\_t version() const

The version of this header which must be &gt;= 2.

#### [` uuid `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF12BigObjHeader4uuidEv>)

inline span&lt;const uint8\_t&gt; uuid() const

Originally named `ClassID`, this uuid should match: `{D1BAA1C7-BAEE-4ba9-AF20-FAF66AA4DCB8}`.

#### [` sizeof_data `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF12BigObjHeader11sizeof_dataEv>)

inline uint32\_t sizeof\_data() const

Size of data that follows the header.

#### [` flags `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF12BigObjHeader5flagsEv>)

inline uint32\_t flags() const

1 means that it contains metadata

#### [` metadata_size `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF12BigObjHeader13metadata_sizeEv>)

inline uint32\_t metadata\_size() const

Size of CLR metadata.

#### [` metadata_offset `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF12BigObjHeader15metadata_offsetEv>)

inline uint32\_t metadata\_offset() const

Offset of CLR metadata.

#### [` version `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeader7versionE8uint16_t>)

inline void version(uint16\_t value)

#### [` sizeof_data `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeader11sizeof_dataE8uint32_t>)

inline void sizeof\_data(uint32\_t value)

#### [` flags `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeader5flagsE8uint32_t>)

inline void flags(uint32\_t value)

#### [` metadata_size `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeader13metadata_sizeE8uint32_t>)

inline void metadata\_size(uint32\_t value)

#### [` metadata_offset `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeader15metadata_offsetE8uint32_t>)

inline void metadata\_offset(uint32\_t value)

#### [` ~BigObjHeader `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeaderD0Ev>)

~BigObjHeader() override = default

#### [` to_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF12BigObjHeader9to_stringEv>)

virtual std::string to\_string() const override

Public Static Functions

#### [` create `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeader6createER12BinaryStream>)

static std::unique\_ptr&lt;[BigObjHeader](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeaderE> "LIEF::COFF::BigObjHeader")&gt; create([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

#### [` classof `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeader7classofEPK6Header>)

static inline bool classof(const [Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header") \*header)

Public Static Attributes

#### [` UUID_SZ `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF12BigObjHeader7UUID_SZE>)

static auto UUID\_SZ = 16

---

## [Section](<https://lief.re/doc/latest/formats/coff/cpp.html#section>)

### [` Section `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7SectionE>)

class Section : public LIEF::[Section](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF7SectionE> "LIEF::Section")

This class represents a COFF section.

Public Types

#### [` COMDAT_SELECTION `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section16COMDAT_SELECTIONE>)

using COMDAT\_SELECTION = [AuxiliarySectionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinitionE> "LIEF::COFF::AuxiliarySectionDefinition")::[COMDAT\_SELECTION](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition16COMDAT_SELECTIONE> "LIEF::COFF::AuxiliarySectionDefinition::COMDAT_SELECTION")

#### [` CHARACTERISTICS `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section15CHARACTERISTICSE>)

using CHARACTERISTICS = LIEF::PE::[Section](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE7SectionE> "LIEF::PE::Section")::[CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE7Section15CHARACTERISTICSE> "LIEF::PE::Section::CHARACTERISTICS")

Mirror Characteristics from PE.

#### [` relocations_t `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section13relocations_tE>)

using relocations\_t = std::vector&lt;[Relocation](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10RelocationE> "LIEF::COFF::Relocation")\*&gt;

Container for the relocations in this section (owned by the [Binary](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Binary>) object).

#### [` it_relocations `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section14it_relocationsE>)

using it\_relocations = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[relocations\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section13relocations_tE> "LIEF::COFF::Section::relocations_t")&amp;, [Relocation](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10RelocationE> "LIEF::COFF::Relocation")\*&gt;

Iterator that outputs [Relocation](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Relocation>)&amp;.

#### [` it_const_relocations `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section20it_const_relocationsE>)

using it\_const\_relocations = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [relocations\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section13relocations_tE> "LIEF::COFF::Section::relocations_t")&amp;, const [Relocation](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10RelocationE> "LIEF::COFF::Relocation")\*&gt;

Iterator that outputs const [Relocation](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Relocation>)&amp;.

#### [` symbols_t `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section9symbols_tE>)

using symbols\_t = std::vector&lt;[Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol")\*&gt;

Container for the symbols associated with this section (owned by the [Binary](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Binary>) object).

#### [` it_symbols `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section10it_symbolsE>)

using it\_symbols = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[symbols\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section9symbols_tE> "LIEF::COFF::Section::symbols_t")&amp;, [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol")\*&gt;

Iterator that outputs [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Symbol>)&amp;.

#### [` it_const_symbols `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section16it_const_symbolsE>)

using it\_const\_symbols = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [symbols\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section9symbols_tE> "LIEF::COFF::Section::symbols_t")&amp;, const [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol")\*&gt;

Iterator that outputs const [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Symbol>)&amp;.

Public Functions

#### [` sizeof_raw_data `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section15sizeof_raw_dataEv>)

inline uint32\_t sizeof\_raw\_data() const

Return the size of the data in the section.

#### [` virtual_size `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section12virtual_sizeEv>)

inline uint32\_t virtual\_size() const

Virtual size of the section (should be 0).

#### [` content `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section7contentEv>)

inline virtual span&lt;const uint8\_t&gt; content() const override

Content wrapped by this section.

#### [` pointerto_raw_data `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section18pointerto_raw_dataEv>)

inline uint32\_t pointerto\_raw\_data() const

Offset to the section’s content.

#### [` pointerto_relocation `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section20pointerto_relocationEv>)

inline uint32\_t pointerto\_relocation() const

Offset to the relocation table.

#### [` pointerto_line_numbers `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section22pointerto_line_numbersEv>)

inline uint32\_t pointerto\_line\_numbers() const

The file pointer to the beginning of line-number entries for the section.

This is set to zero if there are no COFF line numbers. This value should be zero for an image because COFF debugging information is deprecated and modern debug information relies on the PDB files.

#### [` numberof_relocations `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section20numberof_relocationsEv>)

inline uint16\_t numberof\_relocations() const

Number of relocations.

> **Warning**
> 
> If the number of relocations is greater than 0xFFFF (maximum value for 16-bits integer), then the number of relocations is stored in the virtual address of the **first** relocation.

#### [` numberof_line_numbers `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section21numberof_line_numbersEv>)

inline uint16\_t numberof\_line\_numbers() const

Number of line number entries (if any).

#### [` characteristics `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section15characteristicsEv>)

inline uint32\_t characteristics() const

Characteristics of the section: it provides information about the permissions of the section when mapped. It can also provide information about the *purpose* of the section (contain code, BSS-like, …).

#### [` has_characteristic `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section18has_characteristicE15CHARACTERISTICS>)

inline bool has\_characteristic([CHARACTERISTICS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section15CHARACTERISTICSE> "LIEF::COFF::Section::CHARACTERISTICS") c) const

Check if the section has the given [CHARACTERISTICS](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Section_1ad95cd72d2e0abebbb4ae611aac4d969b>).

#### [` characteristics_list `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section20characteristics_listEv>)

inline std::vector&lt;[CHARACTERISTICS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section15CHARACTERISTICSE> "LIEF::COFF::Section::CHARACTERISTICS")&gt; characteristics\_list() const

List of the section characteristics.

#### [` is_discardable `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section14is_discardableEv>)

inline bool is\_discardable() const

True if the section can be discarded as needed.

This is typically the case for debug-related sections

#### [` clear `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section5clearE7uint8_t>)

inline void clear(uint8\_t c)

#### [` relocations `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section11relocationsEv>)

inline [it\_relocations](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section14it_relocationsE> "LIEF::COFF::Section::it_relocations") relocations()

Iterator over the relocations associated with this section.

#### [` relocations `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section11relocationsEv>)

inline [it\_const\_relocations](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section20it_const_relocationsE> "LIEF::COFF::Section::it_const_relocations") relocations() const

#### [` symbols `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section7symbolsEv>)

inline [it\_symbols](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section10it_symbolsE> "LIEF::COFF::Section::it_symbols") symbols()

Iterator over the symbols associated with this section.

#### [` symbols `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section7symbolsEv>)

inline [it\_const\_symbols](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section16it_const_symbolsE> "LIEF::COFF::Section::it_const_symbols") symbols() const

#### [` comdat_info `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section11comdat_infoEv>)

std::optional&lt;[ComdatInfo](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section10ComdatInfoE> "LIEF::COFF::Section::ComdatInfo")&gt; comdat\_info() const

Return comdat information (only if the section has the CHARACTERISTICS::LNK\_COMDAT characteristic).

#### [` has_extended_relocations `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section24has_extended_relocationsEv>)

inline bool has\_extended\_relocations() const

Whether there is a large number of relocations whose number need to be stored in the virtual address attribute.

#### [` content `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section7contentERKNSt6vectorI7uint8_tEE>)

inline virtual void content(const std::vector&lt;uint8\_t&gt; &amp;data) override

Change section content.

#### [` name `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section4nameENSt6stringE>)

virtual void name(std::string name) override

Change the section’s name.

#### [` virtual_size `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section12virtual_sizeE8uint32_t>)

inline void virtual\_size(uint32\_t virtual\_sz)

#### [` pointerto_raw_data `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section18pointerto_raw_dataE8uint32_t>)

inline void pointerto\_raw\_data(uint32\_t ptr)

#### [` pointerto_relocation `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section20pointerto_relocationE8uint32_t>)

inline void pointerto\_relocation(uint32\_t ptr)

#### [` pointerto_line_numbers `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section22pointerto_line_numbersE8uint32_t>)

inline void pointerto\_line\_numbers(uint32\_t ptr)

#### [` numberof_relocations `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section20numberof_relocationsE8uint16_t>)

inline void numberof\_relocations(uint16\_t nb)

#### [` numberof_line_numbers `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section21numberof_line_numbersE8uint16_t>)

inline void numberof\_line\_numbers(uint16\_t nb)

#### [` sizeof_raw_data `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section15sizeof_raw_dataE8uint32_t>)

inline void sizeof\_raw\_data(uint32\_t size)

#### [` characteristics `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section15characteristicsE8uint32_t>)

inline void characteristics(uint32\_t characteristics)

#### [` coff_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section11coff_stringEv>)

inline [String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringE> "LIEF::COFF::String") \*coff\_string()

Return the COFF string associated with the section’s name (or a nullptr).

This coff string is usually present for long section names whose length does not fit in the 8 bytes allocated by the COFF format.

#### [` coff_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section11coff_stringEv>)

inline const [String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringE> "LIEF::COFF::String") \*coff\_string() const

#### [` to_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section9to_stringEv>)

std::string to\_string() const

#### [` ~Section `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7SectionD0Ev>)

~Section() override = default

#### [` name `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF7Section4nameEv>)

inline virtual std::string\_view name() const

[Section](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Section>)’s name.

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section5parseER12BinaryStream>)

static std::unique\_ptr&lt;[Section](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7SectionE> "LIEF::COFF::Section")&gt; parse([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

Parse a section from the given stream.

Friends

**friend class Parser**

#### [` operator<< `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7SectionlsERNSt7ostreamERK7Section>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Section](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7SectionE> "LIEF::COFF::Section") &amp;sec)

#### [` ComdatInfo `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section10ComdatInfoE>)

struct ComdatInfo

This structure wraps comdat information which is composed of the symbol associated with the comdat section and its selection flag.

Public Members

##### [` symbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section10ComdatInfo6symbolE>)

[Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") \*symbol = nullptr

##### [` kind `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section10ComdatInfo4kindE>)

[COMDAT\_SELECTION](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section16COMDAT_SELECTIONE> "LIEF::COFF::Section::COMDAT_SELECTION") kind = [COMDAT\_SELECTION](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7Section16COMDAT_SELECTIONE> "LIEF::COFF::Section::COMDAT_SELECTION")::NONE

---

## [Relocation](<https://lief.re/doc/latest/formats/coff/cpp.html#relocation>)

### [` Relocation `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10RelocationE>)

class Relocation : public LIEF::[Relocation](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF10RelocationE> "LIEF::Relocation")

This class represents a COFF relocation.

Public Types

#### [` TYPE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPEE>)

enum class TYPE : uint32\_t

The different relocation types.

Please note that the original type is encoded on 16 bits but we encode the type on 32-bits by adding a discriminator from the 17th bit

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE7UNKNOWNE>)

enumerator UNKNOWN = uint32\_t(-1)

##### [` I386_ABSOLUTE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE13I386_ABSOLUTEE>)

enumerator I386\_ABSOLUTE = [I386](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4I386E> "LIEF::COFF::Relocation::I386") + 0x0000

##### [` I386_DIR16 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE10I386_DIR16E>)

enumerator I386\_DIR16 = [I386](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4I386E> "LIEF::COFF::Relocation::I386") + 0x0001

##### [` I386_REL16 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE10I386_REL16E>)

enumerator I386\_REL16 = [I386](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4I386E> "LIEF::COFF::Relocation::I386") + 0x0002

##### [` I386_DIR32 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE10I386_DIR32E>)

enumerator I386\_DIR32 = [I386](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4I386E> "LIEF::COFF::Relocation::I386") + 0x0006

##### [` I386_DIR32NB `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12I386_DIR32NBE>)

enumerator I386\_DIR32NB = [I386](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4I386E> "LIEF::COFF::Relocation::I386") + 0x0007

##### [` I386_SEG12 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE10I386_SEG12E>)

enumerator I386\_SEG12 = [I386](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4I386E> "LIEF::COFF::Relocation::I386") + 0x0009

##### [` I386_SECTION `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12I386_SECTIONE>)

enumerator I386\_SECTION = [I386](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4I386E> "LIEF::COFF::Relocation::I386") + 0x000A

##### [` I386_SECREL `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE11I386_SECRELE>)

enumerator I386\_SECREL = [I386](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4I386E> "LIEF::COFF::Relocation::I386") + 0x000B

##### [` I386_TOKEN `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE10I386_TOKENE>)

enumerator I386\_TOKEN = [I386](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4I386E> "LIEF::COFF::Relocation::I386") + 0x000C

##### [` I386_SECREL7 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12I386_SECREL7E>)

enumerator I386\_SECREL7 = [I386](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4I386E> "LIEF::COFF::Relocation::I386") + 0x000D

##### [` I386_REL32 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE10I386_REL32E>)

enumerator I386\_REL32 = [I386](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4I386E> "LIEF::COFF::Relocation::I386") + 0x0014

##### [` AMD64_ABSOLUTE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE14AMD64_ABSOLUTEE>)

enumerator AMD64\_ABSOLUTE = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x0000

##### [` AMD64_ADDR64 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12AMD64_ADDR64E>)

enumerator AMD64\_ADDR64 = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x0001

##### [` AMD64_ADDR32 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12AMD64_ADDR32E>)

enumerator AMD64\_ADDR32 = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x0002

##### [` AMD64_ADDR32NB `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE14AMD64_ADDR32NBE>)

enumerator AMD64\_ADDR32NB = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x0003

##### [` AMD64_REL32 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE11AMD64_REL32E>)

enumerator AMD64\_REL32 = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x0004

##### [` AMD64_REL32_1 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE13AMD64_REL32_1E>)

enumerator AMD64\_REL32\_1 = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x0005

##### [` AMD64_REL32_2 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE13AMD64_REL32_2E>)

enumerator AMD64\_REL32\_2 = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x0006

##### [` AMD64_REL32_3 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE13AMD64_REL32_3E>)

enumerator AMD64\_REL32\_3 = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x0007

##### [` AMD64_REL32_4 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE13AMD64_REL32_4E>)

enumerator AMD64\_REL32\_4 = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x0008

##### [` AMD64_REL32_5 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE13AMD64_REL32_5E>)

enumerator AMD64\_REL32\_5 = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x0009

##### [` AMD64_SECTION `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE13AMD64_SECTIONE>)

enumerator AMD64\_SECTION = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x000A

##### [` AMD64_SECREL `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12AMD64_SECRELE>)

enumerator AMD64\_SECREL = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x000B

##### [` AMD64_SECREL7 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE13AMD64_SECREL7E>)

enumerator AMD64\_SECREL7 = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x000C

##### [` AMD64_TOKEN `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE11AMD64_TOKENE>)

enumerator AMD64\_TOKEN = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x000D

##### [` AMD64_SREL32 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12AMD64_SREL32E>)

enumerator AMD64\_SREL32 = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x000E

##### [` AMD64_PAIR `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE10AMD64_PAIRE>)

enumerator AMD64\_PAIR = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x000F

##### [` AMD64_SSPAN32 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE13AMD64_SSPAN32E>)

enumerator AMD64\_SSPAN32 = [X64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E> "LIEF::COFF::Relocation::X64") + 0x0010

##### [` ARM_ABSOLUTE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12ARM_ABSOLUTEE>)

enumerator ARM\_ABSOLUTE = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x0000

##### [` ARM_ADDR32 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE10ARM_ADDR32E>)

enumerator ARM\_ADDR32 = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x0001

##### [` ARM_ADDR32NB `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12ARM_ADDR32NBE>)

enumerator ARM\_ADDR32NB = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x0002

##### [` ARM_BRANCH24 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12ARM_BRANCH24E>)

enumerator ARM\_BRANCH24 = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x0003

##### [` ARM_BRANCH11 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12ARM_BRANCH11E>)

enumerator ARM\_BRANCH11 = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x0004

##### [` ARM_TOKEN `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE9ARM_TOKENE>)

enumerator ARM\_TOKEN = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x0005

##### [` ARM_BLX24 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE9ARM_BLX24E>)

enumerator ARM\_BLX24 = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x0008

##### [` ARM_BLX11 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE9ARM_BLX11E>)

enumerator ARM\_BLX11 = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x0009

##### [` ARM_REL32 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE9ARM_REL32E>)

enumerator ARM\_REL32 = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x000A

##### [` ARM_SECTION `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE11ARM_SECTIONE>)

enumerator ARM\_SECTION = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x000E

##### [` ARM_SECREL `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE10ARM_SECRELE>)

enumerator ARM\_SECREL = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x000F

##### [` ARM_MOV32A `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE10ARM_MOV32AE>)

enumerator ARM\_MOV32A = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x0010

##### [` ARM_MOV32T `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE10ARM_MOV32TE>)

enumerator ARM\_MOV32T = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x0011

##### [` ARM_BRANCH20T `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE13ARM_BRANCH20TE>)

enumerator ARM\_BRANCH20T = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x0012

##### [` ARM_BRANCH24T `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE13ARM_BRANCH24TE>)

enumerator ARM\_BRANCH24T = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x0014

##### [` ARM_BLX23T `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE10ARM_BLX23TE>)

enumerator ARM\_BLX23T = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x0015

##### [` ARM_PAIR `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE8ARM_PAIRE>)

enumerator ARM\_PAIR = [ARM](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME> "LIEF::COFF::Relocation::ARM") + 0x0016

##### [` ARM64_ABSOLUTE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE14ARM64_ABSOLUTEE>)

enumerator ARM64\_ABSOLUTE = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x0000

##### [` ARM64_ADDR32 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12ARM64_ADDR32E>)

enumerator ARM64\_ADDR32 = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x0001

##### [` ARM64_ADDR32NB `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE14ARM64_ADDR32NBE>)

enumerator ARM64\_ADDR32NB = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x0002

##### [` ARM64_BRANCH26 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE14ARM64_BRANCH26E>)

enumerator ARM64\_BRANCH26 = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x0003

##### [` ARM64_PAGEBASE_REL21 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE20ARM64_PAGEBASE_REL21E>)

enumerator ARM64\_PAGEBASE\_REL21 = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x0004

##### [` ARM64_REL21 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE11ARM64_REL21E>)

enumerator ARM64\_REL21 = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x0005

##### [` ARM64_PAGEOFFSET_12A `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE20ARM64_PAGEOFFSET_12AE>)

enumerator ARM64\_PAGEOFFSET\_12A = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x0006

##### [` ARM64_PAGEOFFSET_12L `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE20ARM64_PAGEOFFSET_12LE>)

enumerator ARM64\_PAGEOFFSET\_12L = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x0007

##### [` ARM64_SECREL `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12ARM64_SECRELE>)

enumerator ARM64\_SECREL = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x0008

##### [` ARM64_SECREL_LOW12A `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE19ARM64_SECREL_LOW12AE>)

enumerator ARM64\_SECREL\_LOW12A = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x0009

##### [` ARM64_SECREL_HIGH12A `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE20ARM64_SECREL_HIGH12AE>)

enumerator ARM64\_SECREL\_HIGH12A = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x000A

##### [` ARM64_SECREL_LOW12L `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE19ARM64_SECREL_LOW12LE>)

enumerator ARM64\_SECREL\_LOW12L = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x000B

##### [` ARM64_TOKEN `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE11ARM64_TOKENE>)

enumerator ARM64\_TOKEN = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x000C

##### [` ARM64_SECTION `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE13ARM64_SECTIONE>)

enumerator ARM64\_SECTION = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x000D

##### [` ARM64_ADDR64 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12ARM64_ADDR64E>)

enumerator ARM64\_ADDR64 = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x000E

##### [` ARM64_BRANCH19 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE14ARM64_BRANCH19E>)

enumerator ARM64\_BRANCH19 = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x000F

##### [` ARM64_BRANCH14 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE14ARM64_BRANCH14E>)

enumerator ARM64\_BRANCH14 = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x0010

##### [` ARM64_REL32 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE11ARM64_REL32E>)

enumerator ARM64\_REL32 = [ARM64](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E> "LIEF::COFF::Relocation::ARM64") + 0x0011

##### [` MIPS_ABSOLUTE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE13MIPS_ABSOLUTEE>)

enumerator MIPS\_ABSOLUTE = [MIPS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4MIPSE> "LIEF::COFF::Relocation::MIPS") + 0x0000

##### [` MIPS_REFHALF `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12MIPS_REFHALFE>)

enumerator MIPS\_REFHALF = [MIPS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4MIPSE> "LIEF::COFF::Relocation::MIPS") + 0x0001

##### [` MIPS_REFWORD `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12MIPS_REFWORDE>)

enumerator MIPS\_REFWORD = [MIPS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4MIPSE> "LIEF::COFF::Relocation::MIPS") + 0x0002

##### [` MIPS_JMPADDR `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12MIPS_JMPADDRE>)

enumerator MIPS\_JMPADDR = [MIPS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4MIPSE> "LIEF::COFF::Relocation::MIPS") + 0x0003

##### [` MIPS_REFHI `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE10MIPS_REFHIE>)

enumerator MIPS\_REFHI = [MIPS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4MIPSE> "LIEF::COFF::Relocation::MIPS") + 0x0004

##### [` MIPS_REFLO `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE10MIPS_REFLOE>)

enumerator MIPS\_REFLO = [MIPS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4MIPSE> "LIEF::COFF::Relocation::MIPS") + 0x0005

##### [` MIPS_GPREL `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE10MIPS_GPRELE>)

enumerator MIPS\_GPREL = [MIPS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4MIPSE> "LIEF::COFF::Relocation::MIPS") + 0x0006

##### [` MIPS_LITERAL `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12MIPS_LITERALE>)

enumerator MIPS\_LITERAL = [MIPS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4MIPSE> "LIEF::COFF::Relocation::MIPS") + 0x0007

##### [` MIPS_SECTION `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE12MIPS_SECTIONE>)

enumerator MIPS\_SECTION = [MIPS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4MIPSE> "LIEF::COFF::Relocation::MIPS") + 0x000A

##### [` MIPS_SECREL `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE11MIPS_SECRELE>)

enumerator MIPS\_SECREL = [MIPS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4MIPSE> "LIEF::COFF::Relocation::MIPS") + 0x000B

##### [` MIPS_SECRELLO `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE13MIPS_SECRELLOE>)

enumerator MIPS\_SECRELLO = [MIPS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4MIPSE> "LIEF::COFF::Relocation::MIPS") + 0x000C

##### [` MIPS_SECRELHI `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE13MIPS_SECRELHIE>)

enumerator MIPS\_SECRELHI = [MIPS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4MIPSE> "LIEF::COFF::Relocation::MIPS") + 0x000D

##### [` MIPS_JMPADDR16 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE14MIPS_JMPADDR16E>)

enumerator MIPS\_JMPADDR16 = [MIPS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4MIPSE> "LIEF::COFF::Relocation::MIPS") + 0x0010

##### [` MIPS_REFWORDNB `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE14MIPS_REFWORDNBE>)

enumerator MIPS\_REFWORDNB = [MIPS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4MIPSE> "LIEF::COFF::Relocation::MIPS") + 0x0022

##### [` MIPS_PAIR `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPE9MIPS_PAIRE>)

enumerator MIPS\_PAIR = [MIPS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4MIPSE> "LIEF::COFF::Relocation::MIPS") + 0x0025

Public Functions

#### [` symbol_idx `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF10Relocation10symbol_idxEv>)

inline uint32\_t symbol\_idx() const

[Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Symbol>) index associated with this relocation.

#### [` symbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation6symbolEv>)

inline [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") \*symbol()

[Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Symbol>) associated with the relocation (if any).

#### [` symbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF10Relocation6symbolEv>)

inline const [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") \*symbol() const

#### [` type `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF10Relocation4typeEv>)

inline [TYPE](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPEE> "LIEF::COFF::Relocation::TYPE") type() const

Type of the relocation.

#### [` section `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation7sectionEv>)

inline [Section](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7SectionE> "LIEF::COFF::Section") \*section()

[Section](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Section>) in which the relocation takes place.

#### [` section `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF10Relocation7sectionEv>)

inline const [Section](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7SectionE> "LIEF::COFF::Section") \*section() const

#### [` to_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF10Relocation9to_stringEv>)

std::string to\_string() const

#### [` ~Relocation `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10RelocationD0Ev>)

~Relocation() override = default

Public Static Functions

#### [` to_value `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation8to_valueE4TYPE>)

static inline uint16\_t to\_value([TYPE](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPEE> "LIEF::COFF::Relocation::TYPE") rtype)

Convert a relocation enum type into a 16-bits value.

#### [` from_value `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation10from_valueE8uint16_tN6Header13MACHINE_TYPESE>)

static inline [TYPE](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4TYPEE> "LIEF::COFF::Relocation::TYPE") from\_value(uint16\_t value, [Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header")::[MACHINE\_TYPES](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header13MACHINE_TYPESE> "LIEF::COFF::Header::MACHINE_TYPES") arch)

Create a relocation type from its raw value and the architecture.

#### [` parse `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5parseER12BinaryStreamN6Header13MACHINE_TYPESE>)

static std::unique\_ptr&lt;[Relocation](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10RelocationE> "LIEF::COFF::Relocation")&gt; parse([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream, [Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header")::[MACHINE\_TYPES](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header13MACHINE_TYPESE> "LIEF::COFF::Header::MACHINE_TYPES") arch)

Create a relocation from the given stream.

Public Static Attributes

#### [` I386 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4I386E>)

static uint32\_t I386 = 1 &lt;&lt; 17

#### [` X64 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3X64E>)

static uint32\_t X64 = 1 &lt;&lt; 18

#### [` ARM `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation3ARME>)

static uint32\_t ARM = 1 &lt;&lt; 19

#### [` ARM64 `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation5ARM64E>)

static uint32\_t ARM64 = 1 &lt;&lt; 20

#### [` MIPS `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10Relocation4MIPSE>)

static uint32\_t MIPS = 1 &lt;&lt; 21

Friends

**friend class Parser**

#### [` operator<< `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10RelocationlsERNSt7ostreamERK10Relocation>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Relocation](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10RelocationE> "LIEF::COFF::Relocation") &amp;R)

---

## [String](<https://lief.re/doc/latest/formats/coff/cpp.html#string>)

### [` String `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringE>)

class String

This class represents a string located in the COFF string table.

Some of these strings can be used for section names that are greater than 8 bytes. See: [LIEF::PE::Section::coff\_string()](<https://lief.re/doc/latest/formats/pe/cpp.html#classLIEF_1_1PE_1_1Section_1ae65ecf17cbe7654775735088f7d6eb6f>)

Reference: [https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#coff-string-table](<https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#coff-string-table>)

Public Functions

#### [` String `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6String6StringEv>)

String() = default

#### [` String `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6String6StringE8uint32_tNSt6stringE>)

inline String(uint32\_t offset, std::string str)

#### [` String `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6String6StringERK6String>)

String(const [String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6String6StringERK6String> "LIEF::COFF::String::String")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringaSERK6String>)

[String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringE> "LIEF::COFF::String") &amp;operator=(const [String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringE> "LIEF::COFF::String")&amp;) = default

#### [` String `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6String6StringERR6String>)

String([String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6String6StringERR6String> "LIEF::COFF::String::String")&amp;&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringaSERR6String>)

[String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringE> "LIEF::COFF::String") &amp;operator=([String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringE> "LIEF::COFF::String")&amp;&amp;) = default

#### [` ~String `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringD0Ev>)

~String() = default

#### [` str `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6String3strEv>)

inline std::string\_view str() const

The actual string.

#### [` str `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6String3strEv>)

inline std::string &amp;str()

Mutable access to the underlying string storage.

#### [` offset `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6String6offsetEv>)

inline uint32\_t offset() const

The offset of this string the in the COFF string table. This offset includes the first 4-bytes that holds the table size.

#### [` str `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6String3strENSt6stringE>)

inline [String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringE> "LIEF::COFF::String") &amp;str(std::string str)

#### [` offset `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6String6offsetE8uint32_t>)

inline [String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringE> "LIEF::COFF::String") &amp;offset(uint32\_t value)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringlsERNSt7ostreamERK6String>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringE> "LIEF::COFF::String") &amp;str)

---

## [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#symbol>)

### [` Symbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE>)

class Symbol : public LIEF::[Symbol](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6SymbolE> "LIEF::Symbol")

This class represents a COFF symbol.

Public Types

#### [` STORAGE_CLASS `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASSE>)

enum class STORAGE\_CLASS : int32\_t

Reference: [https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#storage-class](<https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#storage-class>).

*Values:*

##### [` INVALID `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS7INVALIDE>)

enumerator INVALID = 0xFF

##### [` END_OF_FUNCTION `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS15END_OF_FUNCTIONE>)

enumerator END\_OF\_FUNCTION = -1

Physical end of function.

##### [` NONE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS4NONEE>)

enumerator NONE = 0

No symbol.

##### [` AUTOMATIC `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS9AUTOMATICE>)

enumerator AUTOMATIC = 1

Stack variable.

##### [` EXTERNAL `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS8EXTERNALE>)

enumerator EXTERNAL = 2

External symbol.

##### [` STATIC `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS6STATICE>)

enumerator STATIC = 3

Static.

##### [` REGISTER `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS8REGISTERE>)

enumerator REGISTER = 4

Register variable.

##### [` EXTERNAL_DEF `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS12EXTERNAL_DEFE>)

enumerator EXTERNAL\_DEF = 5

External definition.

##### [` LABEL `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS5LABELE>)

enumerator LABEL = 6

Label.

##### [` UNDEFINED_LABEL `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS15UNDEFINED_LABELE>)

enumerator UNDEFINED\_LABEL = 7

Undefined label.

##### [` MEMBER_OF_STRUCT `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS16MEMBER_OF_STRUCTE>)

enumerator MEMBER\_OF\_STRUCT = 8

Member of structure.

##### [` ARGUMENT `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS8ARGUMENTE>)

enumerator ARGUMENT = 9

[Function](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Function>) argument.

##### [` STRUCT_TAG `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS10STRUCT_TAGE>)

enumerator STRUCT\_TAG = 10

Structure tag.

##### [` MEMBER_OF_UNION `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS15MEMBER_OF_UNIONE>)

enumerator MEMBER\_OF\_UNION = 11

Member of union.

##### [` UNION_TAG `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS9UNION_TAGE>)

enumerator UNION\_TAG = 12

Union tag.

##### [` TYPE_DEFINITION `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS15TYPE_DEFINITIONE>)

enumerator TYPE\_DEFINITION = 13

Type definition.

##### [` UNDEFINED_STATIC `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS16UNDEFINED_STATICE>)

enumerator UNDEFINED\_STATIC = 14

Undefined static.

##### [` ENUM_TAG `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS8ENUM_TAGE>)

enumerator ENUM\_TAG = 15

Enumeration tag.

##### [` MEMBER_OF_ENUM `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS14MEMBER_OF_ENUME>)

enumerator MEMBER\_OF\_ENUM = 16

Member of enumeration.

##### [` REGISTER_PARAM `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS14REGISTER_PARAME>)

enumerator REGISTER\_PARAM = 17

Register parameter.

##### [` BIT_FIELD `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS9BIT_FIELDE>)

enumerator BIT\_FIELD = 18

Bit field.

##### [` BLOCK `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS5BLOCKE>)

enumerator BLOCK = 100

##### [` FUNCTION `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS8FUNCTIONE>)

enumerator FUNCTION = 101

##### [` END_OF_STRUCT `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS13END_OF_STRUCTE>)

enumerator END\_OF\_STRUCT = 102

End of structure.

##### [` FILE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS4FILEE>)

enumerator FILE = 103

File name.

##### [` SECTION `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS7SECTIONE>)

enumerator SECTION = 104

##### [` WEAK_EXTERNAL `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS13WEAK_EXTERNALE>)

enumerator WEAK\_EXTERNAL = 105

Duplicate tag.

##### [` CLR_TOKEN `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASS9CLR_TOKENE>)

enumerator CLR\_TOKEN = 107

#### [` BASE_TYPE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPEE>)

enum class BASE\_TYPE : uint32\_t

*Values:*

##### [` TY_NULL `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPE7TY_NULLE>)

enumerator TY\_NULL = 0

No type information or unknown base type.

##### [` TY_VOID `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPE7TY_VOIDE>)

enumerator TY\_VOID = 1

Used with void pointers and functions.

##### [` TY_CHAR `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPE7TY_CHARE>)

enumerator TY\_CHAR = 2

A character (signed byte).

##### [` TY_SHORT `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPE8TY_SHORTE>)

enumerator TY\_SHORT = 3

A 2-byte signed integer.

##### [` TY_INT `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPE6TY_INTE>)

enumerator TY\_INT = 4

A natural integer type on the target.

##### [` TY_LONG `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPE7TY_LONGE>)

enumerator TY\_LONG = 5

A 4-byte signed integer.

##### [` TY_FLOAT `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPE8TY_FLOATE>)

enumerator TY\_FLOAT = 6

A 4-byte floating-point number.

##### [` TY_DOUBLE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPE9TY_DOUBLEE>)

enumerator TY\_DOUBLE = 7

An 8-byte floating-point number.

##### [` TY_STRUCT `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPE9TY_STRUCTE>)

enumerator TY\_STRUCT = 8

A structure.

##### [` TY_UNION `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPE8TY_UNIONE>)

enumerator TY\_UNION = 9

A union.

##### [` TY_ENUM `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPE7TY_ENUME>)

enumerator TY\_ENUM = 10

An enumerated type.

##### [` TY_MOE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPE6TY_MOEE>)

enumerator TY\_MOE = 11

A member of enumeration (a specific value).

##### [` TY_BYTE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPE7TY_BYTEE>)

enumerator TY\_BYTE = 12

A byte; unsigned 1-byte integer.

##### [` TY_WORD `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPE7TY_WORDE>)

enumerator TY\_WORD = 13

A word; unsigned 2-byte integer.

##### [` TY_UINT `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPE7TY_UINTE>)

enumerator TY\_UINT = 14

An unsigned integer of natural size.

##### [` TY_DWORD `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPE8TY_DWORDE>)

enumerator TY\_DWORD = 15

An unsigned 4-byte integer.

#### [` COMPLEX_TYPE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol12COMPLEX_TYPEE>)

enum class COMPLEX\_TYPE : uint32\_t

*Values:*

##### [` TY_NULL `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol12COMPLEX_TYPE7TY_NULLE>)

enumerator TY\_NULL = 0

No complex type; simple scalar variable.

##### [` TY_POINTER `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol12COMPLEX_TYPE10TY_POINTERE>)

enumerator TY\_POINTER = 1

A pointer to base type.

##### [` TY_FUNCTION `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol12COMPLEX_TYPE11TY_FUNCTIONE>)

enumerator TY\_FUNCTION = 2

A function that returns a base type.

##### [` TY_ARRAY `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol12COMPLEX_TYPE8TY_ARRAYE>)

enumerator TY\_ARRAY = 3

An array of base type.

#### [` auxiliary_symbols_t `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol19auxiliary_symbols_tE>)

using auxiliary\_symbols\_t = std::vector&lt;std::unique\_ptr&lt;[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")&gt;&gt;

#### [` it_auxiliary_symbols_t `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol22it_auxiliary_symbols_tE>)

using it\_auxiliary\_symbols\_t = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[auxiliary\_symbols\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol19auxiliary_symbols_tE> "LIEF::COFF::Symbol::auxiliary_symbols_t")&amp;, [AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")\*&gt;

#### [` it_const_auxiliary_symbols_t `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol28it_const_auxiliary_symbols_tE>)

using it\_const\_auxiliary\_symbols\_t = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [auxiliary\_symbols\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol19auxiliary_symbols_tE> "LIEF::COFF::Symbol::auxiliary_symbols_t")&amp;, [AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")\*&gt;

Public Functions

#### [` Symbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol6SymbolEv>)

Symbol()

#### [` Symbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol6SymbolERK6Symbol>)

Symbol(const [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol6SymbolERK6Symbol> "LIEF::COFF::Symbol::Symbol")&amp;)

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolaSERK6Symbol>)

[Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") &amp;operator=(const [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol")&amp;)

#### [` Symbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol6SymbolERR6Symbol>)

Symbol([Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol6SymbolERR6Symbol> "LIEF::COFF::Symbol::Symbol")&amp;&amp;) noexcept

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolaSERR6Symbol>)

[Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") &amp;operator=([Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol")&amp;&amp;) noexcept

#### [` type `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol4typeEv>)

inline uint16\_t type() const

The symbol type. The first byte represents the base type (see: [base\_type()](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Symbol_1a4d513722400be65ac15a62e5da2478db>)) while the upper byte represents the complex type, if any (see: [complex\_type()](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Symbol_1a3c6b59bcc60461eeab983ffd1ef17563>)).

#### [` storage_class `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol13storage_classEv>)

inline [STORAGE\_CLASS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13STORAGE_CLASSE> "LIEF::COFF::Symbol::STORAGE_CLASS") storage\_class() const

Storage class of the symbol which indicates what kind of definition a symbol represents.

#### [` base_type `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol9base_typeEv>)

inline [BASE\_TYPE](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9BASE_TYPEE> "LIEF::COFF::Symbol::BASE_TYPE") base\_type() const

The simple (base) data type.

#### [` complex_type `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol12complex_typeEv>)

inline [COMPLEX\_TYPE](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol12COMPLEX_TYPEE> "LIEF::COFF::Symbol::COMPLEX_TYPE") complex\_type() const

The complex type (if any).

#### [` section_idx `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol11section_idxEv>)

inline int16\_t section\_idx() const

The signed integer that identifies the section, using a one-based index into the section table. Some values have special meaning:

- 0: The symbol record is not yet assigned a section. A value of zero indicates that a reference to an external symbol is defined elsewhere. A value of non-zero is a common symbol with a size that is specified by the value.
- -1: The symbol has an absolute (non-relocatable) value and is not an address.
- -2: The symbol provides general type or debugging information but does not correspond to a section. Microsoft tools use this setting along with `.file` records

#### [` section `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol7sectionEv>)

inline [Section](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7SectionE> "LIEF::COFF::Section") \*section()

[Section](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Section>) associated with this symbol (if any).

#### [` section `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol7sectionEv>)

inline const [Section](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7SectionE> "LIEF::COFF::Section") \*section() const

#### [` is_external `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol11is_externalEv>)

inline bool is\_external() const

#### [` is_weak_external `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol16is_weak_externalEv>)

inline bool is\_weak\_external() const

#### [` is_absolute `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol11is_absoluteEv>)

inline bool is\_absolute() const

#### [` is_undefined `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol12is_undefinedEv>)

inline bool is\_undefined() const

#### [` is_function_line_info `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol21is_function_line_infoEv>)

inline bool is\_function\_line\_info() const

#### [` is_function `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol11is_functionEv>)

inline bool is\_function() const

#### [` is_file_record `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol14is_file_recordEv>)

inline bool is\_file\_record() const

#### [` auxiliary_symbols `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol17auxiliary_symbolsEv>)

inline [it\_auxiliary\_symbols\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol22it_auxiliary_symbols_tE> "LIEF::COFF::Symbol::it_auxiliary_symbols_t") auxiliary\_symbols()

Auxiliary symbols associated with this symbol.

#### [` auxiliary_symbols `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol17auxiliary_symbolsEv>)

inline [it\_const\_auxiliary\_symbols\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol28it_const_auxiliary_symbols_tE> "LIEF::COFF::Symbol::it_const_auxiliary_symbols_t") auxiliary\_symbols() const

#### [` name `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol4nameEv>)

virtual std::string\_view name() const override

Name of the symbol. If the symbol does not use a short name, it returns the string pointed by the COFF string offset.

#### [` name `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol4nameEv>)

virtual std::string &amp;name() override

#### [` coff_name `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol9coff_nameEv>)

inline const [String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringE> "LIEF::COFF::String") \*coff\_name() const

COFF string used to represent the (long) symbol name.

#### [` coff_name `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol9coff_nameEv>)

inline [String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringE> "LIEF::COFF::String") \*coff\_name()

#### [` demangled_name `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol14demangled_nameEv>)

std::string demangled\_name() const

Demangled representation of the symbol or an empty string if it can’t be demangled.

#### [` type `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol4typeE8uint16_t>)

inline [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") &amp;type(uint16\_t ty)

#### [` storage_class `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol13storage_classE7uint8_t>)

inline [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") &amp;storage\_class(uint8\_t value)

#### [` section_idx `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol11section_idxE7int16_t>)

inline [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") &amp;section\_idx(int16\_t idx)

#### [` add_aux `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol7add_auxENSt10unique_ptrI15AuxiliarySymbolEE>)

[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol") &amp;add\_aux(std::unique\_ptr&lt;[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")&gt; sym)

Add a new auxiliary record.

#### [` to_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF6Symbol9to_stringEv>)

std::string to\_string() const

#### [` ~Symbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolD0Ev>)

~Symbol() override

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol5parseER17parsing_context_tR12BinaryStreamP6size_t>)

static std::unique\_ptr&lt;[Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol")&gt; parse([parsing\_context\_t](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol17parsing_context_tE> "LIEF::COFF::Symbol::parsing_context_t") &amp;ctx, [BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream, size\_t \*idx)

#### [` is_reversed_sec_idx `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol19is_reversed_sec_idxE7int16_t>)

static inline bool is\_reversed\_sec\_idx(int16\_t idx)

Check if the given section index is a reserved value.

Public Static Attributes

#### [` SYM_SEC_IDX_DEBUG `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol17SYM_SEC_IDX_DEBUGE>)

static auto SYM\_SEC\_IDX\_DEBUG = -2

The symbol provides general type or debugging information but does not correspond to a section. Microsoft tools use this setting along with `.file` records.

#### [` SYM_SEC_IDX_ABS `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol15SYM_SEC_IDX_ABSE>)

static auto SYM\_SEC\_IDX\_ABS = -1

The symbol has an absolute (non-relocatable) value and is not an address.

#### [` SYM_SEC_IDX_UNDEF `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol17SYM_SEC_IDX_UNDEFE>)

static auto SYM\_SEC\_IDX\_UNDEF = 0

The symbol record is not yet assigned a section. A value of zero indicates that a reference to an external symbol is defined elsewhere. A value of non-zero is a common symbol with a size that is specified by the value.

#### [` SYM_COMPLEX_TYPE_SHIFT `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol22SYM_COMPLEX_TYPE_SHIFTE>)

static auto SYM\_COMPLEX\_TYPE\_SHIFT = 4

Friends

**friend class Parser**

#### [` operator<< `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbollsERNSt7ostreamERK6Symbol>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") &amp;entry)

#### [` parsing_context_t `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol17parsing_context_tE>)

struct parsing\_context\_t

Public Members

##### [` find_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol17parsing_context_t11find_stringE>)

std::function&lt;[String](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6StringE> "LIEF::COFF::String")\*(uint32\_t)&gt; find\_string

##### [` is_bigobj `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Symbol17parsing_context_t9is_bigobjE>)

bool is\_bigobj

---

## [AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#auxiliarysymbol>)

### [` AuxiliarySymbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE>)

class AuxiliarySymbol

Class that represents an auxiliary symbol.

An auxiliary symbol has the same size as a regular LIEF::PE::Symbol (18 bytes) but its content depends on the parent symbol.

Subclassed by [LIEF::COFF::AuxiliaryCLRToken](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1AuxiliaryCLRToken>), [LIEF::COFF::AuxiliaryFile](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1AuxiliaryFile>), [LIEF::COFF::AuxiliaryFunctionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1AuxiliaryFunctionDefinition>), [LIEF::COFF::AuxiliarySectionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1AuxiliarySectionDefinition>), [LIEF::COFF::AuxiliaryWeakExternal](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1AuxiliaryWeakExternal>), [LIEF::COFF::AuxiliarybfAndefSymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1AuxiliarybfAndefSymbol>)

Public Types

#### [` TYPE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol4TYPEE>)

enum class TYPE

Type discriminator for the subclasses.

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol4TYPE7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` CLR_TOKEN `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol4TYPE9CLR_TOKENE>)

enumerator CLR\_TOKEN

##### [` FUNC_DEF `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol4TYPE8FUNC_DEFE>)

enumerator FUNC\_DEF

Auxiliary Format 1 from the PE-COFF documentation.

##### [` BF_AND_EF `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol4TYPE9BF_AND_EFE>)

enumerator BF\_AND\_EF

Auxiliary Format 2: .bf and .ef Symbols from the PE-COFF documentation.

##### [` WEAK_EXTERNAL `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol4TYPE13WEAK_EXTERNALE>)

enumerator WEAK\_EXTERNAL

Auxiliary Format 3: Weak Externals from the PE-COFF documentation.

##### [` FILE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol4TYPE4FILEE>)

enumerator FILE

Auxiliary Format 4: Files from the PE-COFF documentation.

##### [` SEC_DEF `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol4TYPE7SEC_DEFE>)

enumerator SEC\_DEF

Auxiliary Format 5: [Section](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Section>) Definitions from the PE-COFF documentation.

Public Functions

#### [` AuxiliarySymbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol15AuxiliarySymbolEv>)

AuxiliarySymbol() = default

#### [` AuxiliarySymbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol15AuxiliarySymbolENSt6vectorI7uint8_tEE>)

inline AuxiliarySymbol(std::vector&lt;uint8\_t&gt; payload)

#### [` AuxiliarySymbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol15AuxiliarySymbolERK15AuxiliarySymbol>)

AuxiliarySymbol(const [AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol15AuxiliarySymbolERK15AuxiliarySymbol> "LIEF::COFF::AuxiliarySymbol::AuxiliarySymbol")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolaSERK15AuxiliarySymbol>)

[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol") &amp;operator=(const [AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")&amp;) = default

#### [` AuxiliarySymbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol15AuxiliarySymbolERR15AuxiliarySymbol>)

AuxiliarySymbol([AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol15AuxiliarySymbolERR15AuxiliarySymbol> "LIEF::COFF::AuxiliarySymbol::AuxiliarySymbol")&amp;&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolaSERR15AuxiliarySymbol>)

[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol") &amp;operator=([AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")&amp;&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF15AuxiliarySymbol5cloneEv>)

inline virtual std::unique\_ptr&lt;[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")&gt; clone() const

#### [` AuxiliarySymbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol15AuxiliarySymbolE4TYPE>)

inline AuxiliarySymbol([TYPE](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol4TYPEE> "LIEF::COFF::AuxiliarySymbol::TYPE") ty)

#### [` type `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF15AuxiliarySymbol4typeEv>)

inline [TYPE](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol4TYPEE> "LIEF::COFF::AuxiliarySymbol::TYPE") type() const

#### [` payload `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF15AuxiliarySymbol7payloadEv>)

inline span&lt;const uint8\_t&gt; payload() const

For unknown type **only**, return the raw representation of this symbol.

#### [` payload `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol7payloadEv>)

inline span&lt;uint8\_t&gt; payload()

#### [` to_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF15AuxiliarySymbol9to_stringEv>)

virtual std::string to\_string() const

#### [` ~AuxiliarySymbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolD0Ev>)

virtual ~AuxiliarySymbol() = default

#### [` Tas `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4I0ENK4LIEF4COFF15AuxiliarySymbol2asEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4I0ENK4LIEF4COFF15AuxiliarySymbol2asEPK1Tv> "LIEF::COFF::AuxiliarySymbol::as::T") \*as() const

Helper to **downcast** an [AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1AuxiliarySymbol>) into a concrete implementation.

#### [` Tas `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4I0EN4LIEF4COFF15AuxiliarySymbol2asEP1Tv>)

template&lt;class T&gt;  
inline [T](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4I0EN4LIEF4COFF15AuxiliarySymbol2asEP1Tv> "LIEF::COFF::AuxiliarySymbol::as::T") \*as()

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol5parseER6SymbolNSt6vectorI7uint8_tEE>)

static std::unique\_ptr&lt;[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")&gt; parse([Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") &amp;sym, std::vector&lt;uint8\_t&gt; payload)

#### [` get_aux_type `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol12get_aux_typeERK6Symbol>)

static [TYPE](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbol4TYPEE> "LIEF::COFF::AuxiliarySymbol::TYPE") get\_aux\_type(const [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") &amp;sym)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbollsERNSt7ostreamERK15AuxiliarySymbol>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol") &amp;aux)

---

## [AuxiliaryCLRToken](<https://lief.re/doc/latest/formats/coff/cpp.html#auxiliaryclrtoken>)

### [` AuxiliaryCLRToken `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRTokenE>)

class AuxiliaryCLRToken : public LIEF::COFF::[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")

Auxiliary symbol associated with the `CLR_TOKEN` storage class.

Public Functions

#### [` AuxiliaryCLRToken `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRToken17AuxiliaryCLRTokenEv>)

inline AuxiliaryCLRToken()

#### [` AuxiliaryCLRToken `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRToken17AuxiliaryCLRTokenE7uint8_t7uint8_t8uint32_tNSt6vectorI7uint8_tEE>)

inline AuxiliaryCLRToken(uint8\_t aux\_type, uint8\_t reserved, uint32\_t symbol\_idx, std::vector&lt;uint8\_t&gt; rgb\_reserved)

#### [` AuxiliaryCLRToken `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRToken17AuxiliaryCLRTokenERK17AuxiliaryCLRToken>)

AuxiliaryCLRToken(const [AuxiliaryCLRToken](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRToken17AuxiliaryCLRTokenERK17AuxiliaryCLRToken> "LIEF::COFF::AuxiliaryCLRToken::AuxiliaryCLRToken")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRTokenaSERK17AuxiliaryCLRToken>)

[AuxiliaryCLRToken](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRTokenE> "LIEF::COFF::AuxiliaryCLRToken") &amp;operator=(const [AuxiliaryCLRToken](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRTokenE> "LIEF::COFF::AuxiliaryCLRToken")&amp;) = default

#### [` AuxiliaryCLRToken `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRToken17AuxiliaryCLRTokenERR17AuxiliaryCLRToken>)

AuxiliaryCLRToken([AuxiliaryCLRToken](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRToken17AuxiliaryCLRTokenERR17AuxiliaryCLRToken> "LIEF::COFF::AuxiliaryCLRToken::AuxiliaryCLRToken")&amp;&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRTokenaSERR17AuxiliaryCLRToken>)

[AuxiliaryCLRToken](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRTokenE> "LIEF::COFF::AuxiliaryCLRToken") &amp;operator=([AuxiliaryCLRToken](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRTokenE> "LIEF::COFF::AuxiliaryCLRToken")&amp;&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF17AuxiliaryCLRToken5cloneEv>)

inline virtual std::unique\_ptr&lt;[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")&gt; clone() const override

#### [` aux_type `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF17AuxiliaryCLRToken8aux_typeEv>)

inline uint8\_t aux\_type() const

`IMAGE_AUX_SYMBOL_TYPE` which should be `IMAGE_AUX_SYMBOL_TYPE_TOKEN_DEF` (1)

#### [` reserved `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF17AuxiliaryCLRToken8reservedEv>)

inline uint8\_t reserved() const

Reserved value (should be 0).

#### [` symbol_idx `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF17AuxiliaryCLRToken10symbol_idxEv>)

inline uint32\_t symbol\_idx() const

Index in the symbol table.

#### [` symbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF17AuxiliaryCLRToken6symbolEv>)

inline const [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") \*symbol() const

[Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Symbol>) referenced by [symbol\_idx()](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1AuxiliaryCLRToken_1a975fc7f371c377f9590f88cfc535f55e>) (if resolved).

#### [` symbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRToken6symbolEv>)

inline [Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") \*symbol()

#### [` rgb_reserved `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF17AuxiliaryCLRToken12rgb_reservedEv>)

inline span&lt;const uint8\_t&gt; rgb\_reserved() const

Reserved (padding) values. Should be 0.

#### [` to_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF17AuxiliaryCLRToken9to_stringEv>)

virtual std::string to\_string() const override

#### [` ~AuxiliaryCLRToken `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRTokenD0Ev>)

~AuxiliaryCLRToken() override = default

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRToken5parseERKNSt6vectorI7uint8_tEE>)

static std::unique\_ptr&lt;[AuxiliaryCLRToken](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRTokenE> "LIEF::COFF::AuxiliaryCLRToken")&gt; parse(const std::vector&lt;uint8\_t&gt; &amp;payload)

#### [` classof `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF17AuxiliaryCLRToken7classofEPK15AuxiliarySymbol>)

static inline bool classof(const [AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol") \*sym)

Friends

**friend class Parser**

---

## [AuxiliaryFunctionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#auxiliaryfunctiondefinition>)

### [` AuxiliaryFunctionDefinition `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinitionE>)

class AuxiliaryFunctionDefinition : public LIEF::COFF::[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")

This auxiliary symbols marks the beginning of a function definition.

Reference: [https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#auxiliary-format-1-function-definitions](<https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#auxiliary-format-1-function-definitions>)

Public Functions

#### [` AuxiliaryFunctionDefinition `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinition27AuxiliaryFunctionDefinitionEv>)

inline AuxiliaryFunctionDefinition()

#### [` AuxiliaryFunctionDefinition `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinition27AuxiliaryFunctionDefinitionE8uint32_t8uint32_t8uint32_t8uint32_t8uint16_t>)

inline AuxiliaryFunctionDefinition(uint32\_t tagidx, uint32\_t totalsz, uint32\_t ptr\_line, uint32\_t ptr\_next\_func, uint16\_t padding)

#### [` AuxiliaryFunctionDefinition `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinition27AuxiliaryFunctionDefinitionERK27AuxiliaryFunctionDefinition>)

AuxiliaryFunctionDefinition(const [AuxiliaryFunctionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinition27AuxiliaryFunctionDefinitionERK27AuxiliaryFunctionDefinition> "LIEF::COFF::AuxiliaryFunctionDefinition::AuxiliaryFunctionDefinition")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinitionaSERK27AuxiliaryFunctionDefinition>)

[AuxiliaryFunctionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinitionE> "LIEF::COFF::AuxiliaryFunctionDefinition") &amp;operator=(const [AuxiliaryFunctionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinitionE> "LIEF::COFF::AuxiliaryFunctionDefinition")&amp;) = default

#### [` AuxiliaryFunctionDefinition `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinition27AuxiliaryFunctionDefinitionERR27AuxiliaryFunctionDefinition>)

AuxiliaryFunctionDefinition([AuxiliaryFunctionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinition27AuxiliaryFunctionDefinitionERR27AuxiliaryFunctionDefinition> "LIEF::COFF::AuxiliaryFunctionDefinition::AuxiliaryFunctionDefinition")&amp;&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinitionaSERR27AuxiliaryFunctionDefinition>)

[AuxiliaryFunctionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinitionE> "LIEF::COFF::AuxiliaryFunctionDefinition") &amp;operator=([AuxiliaryFunctionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinitionE> "LIEF::COFF::AuxiliaryFunctionDefinition")&amp;&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF27AuxiliaryFunctionDefinition5cloneEv>)

inline virtual std::unique\_ptr&lt;[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")&gt; clone() const override

#### [` tag_index `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF27AuxiliaryFunctionDefinition9tag_indexEv>)

inline uint32\_t tag\_index() const

The symbol-table index of the corresponding `.bf` (begin function) symbol record.

#### [` total_size `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF27AuxiliaryFunctionDefinition10total_sizeEv>)

inline uint32\_t total\_size() const

The size of the executable code for the function itself.

If the function is in its own section, the `SizeOfRawData` in the section header is greater or equal to this field, depending on alignment considerations.

#### [` ptr_to_line_number `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF27AuxiliaryFunctionDefinition18ptr_to_line_numberEv>)

inline uint32\_t ptr\_to\_line\_number() const

The file offset of the first COFF line-number entry for the function, or zero if none exists (deprecated).

#### [` ptr_to_next_func `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF27AuxiliaryFunctionDefinition16ptr_to_next_funcEv>)

inline uint32\_t ptr\_to\_next\_func() const

The symbol-table index of the record for the next function. If the function is the last in the symbol table, this field is set to zero.

#### [` padding `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF27AuxiliaryFunctionDefinition7paddingEv>)

inline uint16\_t padding() const

Padding value (should be 0).

#### [` to_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF27AuxiliaryFunctionDefinition9to_stringEv>)

virtual std::string to\_string() const override

#### [` ~AuxiliaryFunctionDefinition `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinitionD0Ev>)

~AuxiliaryFunctionDefinition() override = default

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinition5parseERKNSt6vectorI7uint8_tEE>)

static std::unique\_ptr&lt;[AuxiliaryFunctionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinitionE> "LIEF::COFF::AuxiliaryFunctionDefinition")&gt; parse(const std::vector&lt;uint8\_t&gt; &amp;payload)

#### [` classof `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF27AuxiliaryFunctionDefinition7classofEPK15AuxiliarySymbol>)

static inline bool classof(const [AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol") \*sym)

---

## [AuxiliaryWeakExternal](<https://lief.re/doc/latest/formats/coff/cpp.html#auxiliaryweakexternal>)

### [` AuxiliaryWeakExternal `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternalE>)

class AuxiliaryWeakExternal : public LIEF::COFF::[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")

“Weak externals” are a mechanism for object files that allows flexibility at link time. A module can contain an unresolved external symbol (`sym1`), but it can also include an auxiliary record that indicates that if `sym1` is not present at link time, another external symbol (`sym2`) is used to resolve references instead.

If a definition of `sym1` is linked, then an external reference to the symbol is resolved normally. If a definition of `sym1` is not linked, then all references to the weak external for `sym1` refer to `sym2` instead. The external symbol, `sym2`, must always be linked; typically, it is defined in the module that contains the weak reference to `sym1`.

Reference: [https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#auxiliary-format-3-weak-externals](<https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#auxiliary-format-3-weak-externals>)

Public Types

#### [` CHARACTERISTICS `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternal15CHARACTERISTICSE>)

enum class CHARACTERISTICS : uint32\_t

*Values:*

##### [` SEARCH_NOLIBRARY `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternal15CHARACTERISTICS16SEARCH_NOLIBRARYE>)

enumerator SEARCH\_NOLIBRARY = 1

No library search for `sym1` should be performed.

##### [` SEARCH_LIBRARY `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternal15CHARACTERISTICS14SEARCH_LIBRARYE>)

enumerator SEARCH\_LIBRARY = 2

A library search for `sym1` should be performed.

##### [` SEARCH_ALIAS `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternal15CHARACTERISTICS12SEARCH_ALIASE>)

enumerator SEARCH\_ALIAS = 3

`sym1` is an alias for sym2

##### [` ANTI_DEPENDENCY `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternal15CHARACTERISTICS15ANTI_DEPENDENCYE>)

enumerator ANTI\_DEPENDENCY = 4

Public Functions

#### [` AuxiliaryWeakExternal `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternal21AuxiliaryWeakExternalEv>)

inline AuxiliaryWeakExternal()

#### [` AuxiliaryWeakExternal `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternal21AuxiliaryWeakExternalE8uint32_t8uint32_tNSt6vectorI7uint8_tEE>)

inline AuxiliaryWeakExternal(uint32\_t sym\_idx, uint32\_t characteristics, std::vector&lt;uint8\_t&gt; padding)

#### [` AuxiliaryWeakExternal `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternal21AuxiliaryWeakExternalERK21AuxiliaryWeakExternal>)

AuxiliaryWeakExternal(const [AuxiliaryWeakExternal](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternal21AuxiliaryWeakExternalERK21AuxiliaryWeakExternal> "LIEF::COFF::AuxiliaryWeakExternal::AuxiliaryWeakExternal")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternalaSERK21AuxiliaryWeakExternal>)

[AuxiliaryWeakExternal](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternalE> "LIEF::COFF::AuxiliaryWeakExternal") &amp;operator=(const [AuxiliaryWeakExternal](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternalE> "LIEF::COFF::AuxiliaryWeakExternal")&amp;) = default

#### [` AuxiliaryWeakExternal `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternal21AuxiliaryWeakExternalERR21AuxiliaryWeakExternal>)

AuxiliaryWeakExternal([AuxiliaryWeakExternal](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternal21AuxiliaryWeakExternalERR21AuxiliaryWeakExternal> "LIEF::COFF::AuxiliaryWeakExternal::AuxiliaryWeakExternal")&amp;&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternalaSERR21AuxiliaryWeakExternal>)

[AuxiliaryWeakExternal](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternalE> "LIEF::COFF::AuxiliaryWeakExternal") &amp;operator=([AuxiliaryWeakExternal](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternalE> "LIEF::COFF::AuxiliaryWeakExternal")&amp;&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF21AuxiliaryWeakExternal5cloneEv>)

inline virtual std::unique\_ptr&lt;[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")&gt; clone() const override

#### [` sym_idx `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF21AuxiliaryWeakExternal7sym_idxEv>)

inline uint32\_t sym\_idx() const

The symbol-table index of `sym2`, the symbol to be linked if `sym1` is not found.

#### [` characteristics `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF21AuxiliaryWeakExternal15characteristicsEv>)

inline [CHARACTERISTICS](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternal15CHARACTERISTICSE> "LIEF::COFF::AuxiliaryWeakExternal::CHARACTERISTICS") characteristics() const

#### [` padding `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF21AuxiliaryWeakExternal7paddingEv>)

inline span&lt;const uint8\_t&gt; padding() const

#### [` to_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF21AuxiliaryWeakExternal9to_stringEv>)

virtual std::string to\_string() const override

#### [` ~AuxiliaryWeakExternal `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternalD0Ev>)

~AuxiliaryWeakExternal() override = default

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternal5parseERKNSt6vectorI7uint8_tEE>)

static std::unique\_ptr&lt;[AuxiliaryWeakExternal](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternalE> "LIEF::COFF::AuxiliaryWeakExternal")&gt; parse(const std::vector&lt;uint8\_t&gt; &amp;payload)

#### [` classof `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF21AuxiliaryWeakExternal7classofEPK15AuxiliarySymbol>)

static inline bool classof(const [AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol") \*sym)

---

## [AuxiliarybfAndefSymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#auxiliarybfandefsymbol>)

### [` AuxiliarybfAndefSymbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF22AuxiliarybfAndefSymbolE>)

class AuxiliarybfAndefSymbol : public LIEF::COFF::[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")

Public Functions

#### [` AuxiliarybfAndefSymbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF22AuxiliarybfAndefSymbol22AuxiliarybfAndefSymbolEv>)

inline AuxiliarybfAndefSymbol()

#### [` AuxiliarybfAndefSymbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF22AuxiliarybfAndefSymbol22AuxiliarybfAndefSymbolERK22AuxiliarybfAndefSymbol>)

AuxiliarybfAndefSymbol(const [AuxiliarybfAndefSymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF22AuxiliarybfAndefSymbol22AuxiliarybfAndefSymbolERK22AuxiliarybfAndefSymbol> "LIEF::COFF::AuxiliarybfAndefSymbol::AuxiliarybfAndefSymbol")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF22AuxiliarybfAndefSymbolaSERK22AuxiliarybfAndefSymbol>)

[AuxiliarybfAndefSymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF22AuxiliarybfAndefSymbolE> "LIEF::COFF::AuxiliarybfAndefSymbol") &amp;operator=(const [AuxiliarybfAndefSymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF22AuxiliarybfAndefSymbolE> "LIEF::COFF::AuxiliarybfAndefSymbol")&amp;) = default

#### [` AuxiliarybfAndefSymbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF22AuxiliarybfAndefSymbol22AuxiliarybfAndefSymbolERR22AuxiliarybfAndefSymbol>)

AuxiliarybfAndefSymbol([AuxiliarybfAndefSymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF22AuxiliarybfAndefSymbol22AuxiliarybfAndefSymbolERR22AuxiliarybfAndefSymbol> "LIEF::COFF::AuxiliarybfAndefSymbol::AuxiliarybfAndefSymbol")&amp;&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF22AuxiliarybfAndefSymbolaSERR22AuxiliarybfAndefSymbol>)

[AuxiliarybfAndefSymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF22AuxiliarybfAndefSymbolE> "LIEF::COFF::AuxiliarybfAndefSymbol") &amp;operator=([AuxiliarybfAndefSymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF22AuxiliarybfAndefSymbolE> "LIEF::COFF::AuxiliarybfAndefSymbol")&amp;&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF22AuxiliarybfAndefSymbol5cloneEv>)

inline virtual std::unique\_ptr&lt;[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")&gt; clone() const override

#### [` to_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF22AuxiliarybfAndefSymbol9to_stringEv>)

inline virtual std::string to\_string() const override

#### [` ~AuxiliarybfAndefSymbol `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF22AuxiliarybfAndefSymbolD0Ev>)

~AuxiliarybfAndefSymbol() override = default

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF22AuxiliarybfAndefSymbol5parseER6SymbolRKNSt6vectorI7uint8_tEE>)

static std::unique\_ptr&lt;[AuxiliarybfAndefSymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF22AuxiliarybfAndefSymbolE> "LIEF::COFF::AuxiliarybfAndefSymbol")&gt; parse([Symbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6SymbolE> "LIEF::COFF::Symbol") &amp;sym, const std::vector&lt;uint8\_t&gt; &amp;payload)

#### [` classof `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF22AuxiliarybfAndefSymbol7classofEPK15AuxiliarySymbol>)

static inline bool classof(const [AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol") \*sym)

---

## [AuxiliarySectionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#auxiliarysectiondefinition>)

### [` AuxiliarySectionDefinition `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinitionE>)

class AuxiliarySectionDefinition : public LIEF::COFF::[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")

This auxiliary symbol exposes information about the associated section.

It **duplicates** some information that are provided in the section header

Public Types

#### [` COMDAT_SELECTION `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition16COMDAT_SELECTIONE>)

enum class COMDAT\_SELECTION : uint8\_t

Values for the [AuxiliarySectionDefinition::selection](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1AuxiliarySectionDefinition_1a8fe951f3d0a33434389504741878d2f9>) attribute.

See: [https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#comdat-sections-object-only](<https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#comdat-sections-object-only>)

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition16COMDAT_SELECTION4NONEE>)

enumerator NONE = 0

##### [` NODUPLICATES `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition16COMDAT_SELECTION12NODUPLICATESE>)

enumerator NODUPLICATES = 1

If this symbol is already defined, the linker issues a `multiply defined symbol` error.

##### [` ANY `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition16COMDAT_SELECTION3ANYE>)

enumerator ANY

Any section that defines the same COMDAT symbol can be linked; the rest are removed.

##### [` SAME_SIZE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition16COMDAT_SELECTION9SAME_SIZEE>)

enumerator SAME\_SIZE

The linker chooses an arbitrary section among the definitions for this symbol. If all definitions are not the same size, a `multiply defined symbol` error is issued.

##### [` EXACT_MATCH `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition16COMDAT_SELECTION11EXACT_MATCHE>)

enumerator EXACT\_MATCH

The linker chooses an arbitrary section among the definitions for this symbol. If all definitions do not match exactly, a `multiply defined symbol` error is issued.

##### [` ASSOCIATIVE `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition16COMDAT_SELECTION11ASSOCIATIVEE>)

enumerator ASSOCIATIVE

The section is linked if a certain other COMDAT section is linked. This other section is indicated by the Number field of the auxiliary symbol record for the section definition. This setting is useful for definitions that have components in multiple sections (for example, code in one and data in another), but where all must be linked or discarded as a set. The other section this section is associated with must be a COMDAT section, which can be another associative COMDAT section. An associative COMDAT section’s section association chain can’t form a loop. The section association chain must eventually come to a COMDAT section that doesn’t have [COMDAT\_SELECTION::ASSOCIATIVE](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1AuxiliarySectionDefinition_1a4de60a460b377563d2f06caa528e5708afef776080fb905a27b79c05fdfd528ae>) set.

##### [` LARGEST `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition16COMDAT_SELECTION7LARGESTE>)

enumerator LARGEST

The linker chooses the largest definition from among all the definitions for this symbol. If multiple definitions have this size, the choice between them is arbitrary.

Public Functions

#### [` AuxiliarySectionDefinition `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition26AuxiliarySectionDefinitionEv>)

inline AuxiliarySectionDefinition()

#### [` AuxiliarySectionDefinition `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition26AuxiliarySectionDefinitionE8uint32_t8uint16_t8uint16_t8uint32_t8uint32_t7uint8_t7uint8_t>)

inline AuxiliarySectionDefinition(uint32\_t length, uint16\_t nb\_relocs, uint16\_t nb\_lines, uint32\_t checksum, uint32\_t sec\_idx, uint8\_t selection, uint8\_t reserved)

#### [` AuxiliarySectionDefinition `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition26AuxiliarySectionDefinitionERK26AuxiliarySectionDefinition>)

AuxiliarySectionDefinition(const [AuxiliarySectionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition26AuxiliarySectionDefinitionERK26AuxiliarySectionDefinition> "LIEF::COFF::AuxiliarySectionDefinition::AuxiliarySectionDefinition")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinitionaSERK26AuxiliarySectionDefinition>)

[AuxiliarySectionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinitionE> "LIEF::COFF::AuxiliarySectionDefinition") &amp;operator=(const [AuxiliarySectionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinitionE> "LIEF::COFF::AuxiliarySectionDefinition")&amp;) = default

#### [` AuxiliarySectionDefinition `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition26AuxiliarySectionDefinitionERR26AuxiliarySectionDefinition>)

AuxiliarySectionDefinition([AuxiliarySectionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition26AuxiliarySectionDefinitionERR26AuxiliarySectionDefinition> "LIEF::COFF::AuxiliarySectionDefinition::AuxiliarySectionDefinition")&amp;&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinitionaSERR26AuxiliarySectionDefinition>)

[AuxiliarySectionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinitionE> "LIEF::COFF::AuxiliarySectionDefinition") &amp;operator=([AuxiliarySectionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinitionE> "LIEF::COFF::AuxiliarySectionDefinition")&amp;&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF26AuxiliarySectionDefinition5cloneEv>)

inline virtual std::unique\_ptr&lt;[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")&gt; clone() const override

#### [` length `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF26AuxiliarySectionDefinition6lengthEv>)

inline uint32\_t length() const

The size of section data. The same as `SizeOfRawData` in the section header.

#### [` nb_relocs `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF26AuxiliarySectionDefinition9nb_relocsEv>)

inline uint16\_t nb\_relocs() const

The number of relocation entries for the section.

#### [` nb_line_numbers `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF26AuxiliarySectionDefinition15nb_line_numbersEv>)

inline uint16\_t nb\_line\_numbers() const

The number of line-number entries for the section.

#### [` checksum `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF26AuxiliarySectionDefinition8checksumEv>)

inline uint32\_t checksum() const

The checksum for communal data. It is applicable if the `IMAGE_SCN_LNK_COMDAT` flag is set in the section header.

#### [` section_idx `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF26AuxiliarySectionDefinition11section_idxEv>)

inline uint32\_t section\_idx() const

One-based index into the section table for the associated section. This is used when the COMDAT selection setting is 5.

#### [` selection `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF26AuxiliarySectionDefinition9selectionEv>)

inline [COMDAT\_SELECTION](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition16COMDAT_SELECTIONE> "LIEF::COFF::AuxiliarySectionDefinition::COMDAT_SELECTION") selection() const

The COMDAT selection number. This is applicable if the section is a COMDAT section.

#### [` reserved `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF26AuxiliarySectionDefinition8reservedEv>)

inline uint8\_t reserved() const

Reserved value (should be 0).

#### [` to_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF26AuxiliarySectionDefinition9to_stringEv>)

virtual std::string to\_string() const override

#### [` ~AuxiliarySectionDefinition `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinitionD0Ev>)

~AuxiliarySectionDefinition() override = default

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition5parseERKNSt6vectorI7uint8_tEE>)

static std::unique\_ptr&lt;[AuxiliarySectionDefinition](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinitionE> "LIEF::COFF::AuxiliarySectionDefinition")&gt; parse(const std::vector&lt;uint8\_t&gt; &amp;payload)

#### [` classof `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF26AuxiliarySectionDefinition7classofEPK15AuxiliarySymbol>)

static inline bool classof(const [AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol") \*sym)

---

## [AuxiliaryFile](<https://lief.re/doc/latest/formats/coff/cpp.html#auxiliaryfile>)

### [` AuxiliaryFile `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFileE>)

class AuxiliaryFile : public LIEF::COFF::[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")

This auxiliary symbol represents a filename (auxiliary format 4).

The [Symbol::name](<https://lief.re/doc/latest/formats/coff/cpp.html#classLIEF_1_1COFF_1_1Symbol_1a63ffd95985b2056f37efebba560ed568>) itself should start with `.file`, and this auxiliary record gives the name of a source-code file.

Reference: [https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#auxiliary-format-4-files](<https://learn.microsoft.com/en-us/windows/win32/debug/pe-format#auxiliary-format-4-files>)

Public Functions

#### [` AuxiliaryFile `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFile13AuxiliaryFileEv>)

inline AuxiliaryFile()

#### [` AuxiliaryFile `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFile13AuxiliaryFileENSt6stringE>)

inline AuxiliaryFile(std::string file)

#### [` AuxiliaryFile `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFile13AuxiliaryFileERK13AuxiliaryFile>)

AuxiliaryFile(const [AuxiliaryFile](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFile13AuxiliaryFileERK13AuxiliaryFile> "LIEF::COFF::AuxiliaryFile::AuxiliaryFile")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFileaSERK13AuxiliaryFile>)

[AuxiliaryFile](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFileE> "LIEF::COFF::AuxiliaryFile") &amp;operator=(const [AuxiliaryFile](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFileE> "LIEF::COFF::AuxiliaryFile")&amp;) = default

#### [` AuxiliaryFile `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFile13AuxiliaryFileERR13AuxiliaryFile>)

AuxiliaryFile([AuxiliaryFile](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFile13AuxiliaryFileERR13AuxiliaryFile> "LIEF::COFF::AuxiliaryFile::AuxiliaryFile")&amp;&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFileaSERR13AuxiliaryFile>)

[AuxiliaryFile](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFileE> "LIEF::COFF::AuxiliaryFile") &amp;operator=([AuxiliaryFile](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFileE> "LIEF::COFF::AuxiliaryFile")&amp;&amp;) = default

#### [` clone `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF13AuxiliaryFile5cloneEv>)

inline virtual std::unique\_ptr&lt;[AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol")&gt; clone() const override

#### [` filename `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF13AuxiliaryFile8filenameEv>)

inline std::string\_view filename() const

The associated filename.

#### [` filename `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFile8filenameENSt6stringE>)

inline [AuxiliaryFile](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFileE> "LIEF::COFF::AuxiliaryFile") &amp;filename(std::string file)

#### [` to_string `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4NK4LIEF4COFF13AuxiliaryFile9to_stringEv>)

inline virtual std::string to\_string() const override

#### [` ~AuxiliaryFile `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFileD0Ev>)

~AuxiliaryFile() override = default

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFile5parseERKNSt6vectorI7uint8_tEE>)

static std::unique\_ptr&lt;[AuxiliaryFile](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFileE> "LIEF::COFF::AuxiliaryFile")&gt; parse(const std::vector&lt;uint8\_t&gt; &amp;payload)

#### [` classof `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF13AuxiliaryFile7classofEPK15AuxiliarySymbol>)

static inline bool classof(const [AuxiliarySymbol](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF15AuxiliarySymbolE> "LIEF::COFF::AuxiliarySymbol") \*sym)

---

## [Utilities](<https://lief.re/doc/latest/formats/coff/cpp.html#utilities>)

### [` LIEF::COFF::get_kind `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF8get_kindER12BinaryStream>)

[Header](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6HeaderE> "LIEF::COFF::Header")::[KIND](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF6Header4KINDE> "LIEF::COFF::Header::KIND") LIEF::COFF::get\_kind([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

This function determines if the given stream wraps a COFF binary and if so, whether it’s a regular or bigobj COFF.

### [` LIEF::COFF::is_coff `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7is_coffER12BinaryStream>)

inline bool LIEF::COFF::is\_coff([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

Check if the given stream wraps a COFF file.

### [` LIEF::COFF::is_coff `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7is_coffENSt11string_viewE>)

bool LIEF::COFF::is\_coff(std::string\_view file)

Check if the `file` is a COFF.

### [` LIEF::COFF::is_coff `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7is_coffERKNSt6vectorI7uint8_tEE>)

inline bool LIEF::COFF::is\_coff(const std::vector&lt;uint8\_t&gt; &amp;buffer)

Check if the given buffer points to a COFF file.

### [` LIEF::COFF::is_coff `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF7is_coffEPK7uint8_t6size_t>)

inline bool LIEF::COFF::is\_coff(const uint8\_t \*buffer, size\_t size)

Check if the given buffer points to a COFF file.

### [` LIEF::COFF::is_bigobj `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF9is_bigobjER12BinaryStream>)

inline bool LIEF::COFF::is\_bigobj([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

Check if the COFF file wrapped by the given stream is a `bigobj`.

### [` LIEF::COFF::is_regular `](<https://lief.re/doc/latest/formats/coff/cpp.html#_CPPv4N4LIEF4COFF10is_regularER12BinaryStream>)

inline bool LIEF::COFF::is\_regular([BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

Check if the COFF file wrapped by the given stream is regular (i.e. not a bigobj).
