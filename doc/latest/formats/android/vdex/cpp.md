---
documentID: "f2f3ce2eb971b174d3a0d6cb40267b80c0814cc758235b7b4dbcf426178573fc"
docname: "formats/android/vdex/cpp"
title: "VDEX C++ API - LIEF Documentation"
description: "VDEX C++ API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/formats/android/vdex/cpp.html"
markdownURL: "https://lief.re/doc/latest/formats/android/vdex/cpp.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "4a32ea3c4015a20566e2a02b50f880813e8e79afb5ca7baf9947f0d1378aed70"
---

# [C++](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#c>)

## [Utilities](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#utilities>)

### [` LIEF::VDEX::is_vdex `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX7is_vdexENSt11string_viewE>)

bool LIEF::VDEX::is\_vdex(std::string\_view file)

Check if the given file is a VDEX one.

### [` LIEF::VDEX::is_vdex `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX7is_vdexERKNSt6vectorI7uint8_tEE>)

bool LIEF::VDEX::is\_vdex(const std::vector&lt;uint8\_t&gt; &amp;raw)

Check if the given raw data is a VDEX one.

### [` LIEF::VDEX::version `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX7versionENSt11string_viewE>)

vdex\_version\_t LIEF::VDEX::version(std::string\_view file)

Return the VDEX version of the given file.

### [` LIEF::VDEX::version `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX7versionERKNSt6vectorI7uint8_tEE>)

vdex\_version\_t LIEF::VDEX::version(const std::vector&lt;uint8\_t&gt; &amp;raw)

Return the VDEX version of the raw data.

### [` LIEF::VDEX::android_version `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX15android_versionE14vdex_version_t>)

Android::[ANDROID\_VERSIONS](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF7Android16ANDROID_VERSIONSE> "LIEF::Android::ANDROID_VERSIONS") LIEF::VDEX::android\_version(vdex\_version\_t version)

Return the ANDROID\_VERSIONS associated with the given VDEX version.

---

## [Parser](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#parser>)

### [` Parser `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6ParserE>)

class Parser

Class which parses a VDEX file and transforms it into a [VDEX::File](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#classLIEF_1_1VDEX_1_1File>) object.

Public Functions

#### [` operator= `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6ParseraSERK6Parser>)

[Parser](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6ParserE> "LIEF::VDEX::Parser") &amp;operator=(const [Parser](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6ParserE> "LIEF::VDEX::Parser") &amp;copy) = delete

#### [` Parser `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6Parser6ParserERK6Parser>)

Parser(const [Parser](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6Parser6ParserERK6Parser> "LIEF::VDEX::Parser::Parser") &amp;copy) = delete

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6Parser5parseENSt11string_viewE>)

static std::unique\_ptr&lt;[File](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4FileE> "LIEF::VDEX::File")&gt; parse(std::string\_view file)

#### [` PathTparse `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF4VDEX6Parser5parseENSt10unique_ptrI4FileEERK5PathT>)

template&lt;class PathT, enable\_if\_path\_t&lt;[PathT](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF4VDEX6Parser5parseENSt10unique_ptrI4FileEERK5PathT> "LIEF::VDEX::Parser::parse::PathT")&gt; = 0&gt;  
static inline std::unique\_ptr&lt;[File](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4FileE> "LIEF::VDEX::File")&gt; parse(const [PathT](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF4VDEX6Parser5parseENSt10unique_ptrI4FileEERK5PathT> "LIEF::VDEX::Parser::parse::PathT") &amp;file)

Same as [parse(std::string\_view)](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#classLIEF_1_1VDEX_1_1Parser_1a5b6044e69ceab7223c4a74cbf2119bbc>) but the file is given as a `std::filesystem::path`.

#### [` parse `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6Parser5parseERKNSt6vectorI7uint8_tEENSt11string_viewE>)

static std::unique\_ptr&lt;[File](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4FileE> "LIEF::VDEX::File")&gt; parse(const std::vector&lt;uint8\_t&gt; &amp;data, std::string\_view name = "")

---

## [File](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#file>)

### [` File `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4FileE>)

class File : public LIEF::Object

Main class for the VDEX module which represents a VDEX file.

Public Types

#### [` dex_files_t `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4File11dex_files_tE>)

using dex\_files\_t = std::vector&lt;std::unique\_ptr&lt;DEX::[File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileE> "LIEF::DEX::File")&gt;&gt;

#### [` it_dex_files `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4File12it_dex_filesE>)

using it\_dex\_files = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[dex\_files\_t](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4File11dex_files_tE> "LIEF::VDEX::File::dex_files_t")&amp;, DEX::[File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileE> "LIEF::DEX::File")\*&gt;

#### [` it_const_dex_files `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4File18it_const_dex_filesE>)

using it\_const\_dex\_files = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [dex\_files\_t](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4File11dex_files_tE> "LIEF::VDEX::File::dex_files_t")&amp;, const DEX::[File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileE> "LIEF::DEX::File")\*&gt;

Public Functions

#### [` operator= `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4FileaSERK4File>)

[File](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4FileE> "LIEF::VDEX::File") &amp;operator=(const [File](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4FileE> "LIEF::VDEX::File") &amp;copy) = delete

#### [` File `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4File4FileERK4File>)

File(const [File](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4File4FileERK4File> "LIEF::VDEX::File::File") &amp;copy) = delete

#### [` header `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4NK4LIEF4VDEX4File6headerEv>)

const [Header](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6HeaderE> "LIEF::VDEX::Header") &amp;header() const

VDEX [Header](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#classLIEF_1_1VDEX_1_1Header>).

#### [` header `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4File6headerEv>)

[Header](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6HeaderE> "LIEF::VDEX::Header") &amp;header()

#### [` dex_files `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4File9dex_filesEv>)

[it\_dex\_files](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4File12it_dex_filesE> "LIEF::VDEX::File::it_dex_files") dex\_files()

Iterator over LIEF::DEX::Files registered.

#### [` dex_files `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4NK4LIEF4VDEX4File9dex_filesEv>)

[it\_const\_dex\_files](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4File18it_const_dex_filesE> "LIEF::VDEX::File::it_const_dex_files") dex\_files() const

#### [` dex2dex_info `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4NK4LIEF4VDEX4File12dex2dex_infoEv>)

dex2dex\_info\_t dex2dex\_info() const

#### [` dex2dex_json_info `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4File17dex2dex_json_infoEv>)

std::string dex2dex\_json\_info()

#### [` accept `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4NK4LIEF4VDEX4File6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~File `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4FileD0Ev>)

~File() override

Friends

**friend class OAT::Binary**

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4FilelsERNSt7ostreamERK4File>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [File](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX4FileE> "LIEF::VDEX::File") &amp;vdex\_file)

---

## [Header](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#header>)

### [` Header `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6HeaderE>)

class Header : public LIEF::Object

Public Types

#### [` magic_t `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6Header7magic_tE>)

using magic\_t = std::array&lt;uint8\_t, 4&gt;

Public Functions

#### [` Header `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6Header6HeaderEv>)

Header()

#### [` THeader `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4I0EN4LIEF4VDEX6Header6HeaderEPK1T>)

template&lt;class T&gt;  
Header(const [T](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4I0EN4LIEF4VDEX6Header6HeaderEPK1T> "LIEF::VDEX::Header::Header::T") \*header)

#### [` Header `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6Header6HeaderERK6Header>)

Header(const [Header](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6Header6HeaderERK6Header> "LIEF::VDEX::Header::Header")&amp;)

#### [` operator= `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6HeaderaSERK6Header>)

[Header](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6HeaderE> "LIEF::VDEX::Header") &amp;operator=(const [Header](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6HeaderE> "LIEF::VDEX::Header")&amp;)

#### [` magic `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4NK4LIEF4VDEX6Header5magicEv>)

[magic\_t](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6Header7magic_tE> "LIEF::VDEX::Header::magic_t") magic() const

Magic value used to identify VDEX.

#### [` version `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4NK4LIEF4VDEX6Header7versionEv>)

vdex\_version\_t version() const

VDEX version number.

#### [` nb_dex_files `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4NK4LIEF4VDEX6Header12nb_dex_filesEv>)

uint32\_t nb\_dex\_files() const

Number of [LIEF::DEX::File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1File>) files registered.

#### [` dex_size `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4NK4LIEF4VDEX6Header8dex_sizeEv>)

uint32\_t dex\_size() const

Size of **all** [LIEF::DEX::File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1File>).

#### [` verifier_deps_size `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4NK4LIEF4VDEX6Header18verifier_deps_sizeEv>)

uint32\_t verifier\_deps\_size() const

Size of verifier deps section.

#### [` quickening_info_size `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4NK4LIEF4VDEX6Header20quickening_info_sizeEv>)

uint32\_t quickening\_info\_size() const

Size of quickening info section.

#### [` accept `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4NK4LIEF4VDEX6Header6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~Header `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6HeaderD0Ev>)

~Header() override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6HeaderlsERNSt7ostreamERK6Header>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Header](<https://lief.re/doc/latest/formats/android/vdex/cpp.html#_CPPv4N4LIEF4VDEX6HeaderE> "LIEF::VDEX::Header") &amp;header)
