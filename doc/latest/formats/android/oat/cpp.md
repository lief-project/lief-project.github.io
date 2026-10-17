---
documentID: "014463d46dac604d0d15d4b84e40268f42129871b21722dfcf3d703e81ee736a"
docname: "formats/android/oat/cpp"
title: "OAT C++ API - LIEF Documentation"
description: "OAT C++ API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/formats/android/oat/cpp.html"
markdownURL: "https://lief.re/doc/latest/formats/android/oat/cpp.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "8e5d5fb053af47139582956764d6493c33f41327574ca003189aac94d536b6da"
---

# [C++](<https://lief.re/doc/latest/formats/android/oat/cpp.html#c>)

## [Utilities](<https://lief.re/doc/latest/formats/android/oat/cpp.html#utilities>)

### [` LIEF::OAT::is_oat `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6is_oatERKN4LIEF3ELF6BinaryE>)

bool LIEF::OAT::is\_oat(const LIEF::ELF::[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary") &amp;elf\_binary)

Check if the given [LIEF::ELF::Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary>) is an OAT one.

### [` LIEF::OAT::is_oat `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6is_oatENSt11string_viewE>)

bool LIEF::OAT::is\_oat(std::string\_view file)

Check if the given file is an OAT one.

### [` LIEF::OAT::is_oat `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6is_oatERKNSt6vectorI7uint8_tEE>)

bool LIEF::OAT::is\_oat(const std::vector&lt;uint8\_t&gt; &amp;raw)

Check if the given raw data is an OAT one.

### [` LIEF::OAT::version `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7versionERKN4LIEF3ELF6BinaryE>)

oat\_version\_t LIEF::OAT::version(const LIEF::ELF::[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary") &amp;elf\_binary)

Return the OAT version of the given [LIEF::ELF::Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#classLIEF_1_1ELF_1_1Binary>).

### [` LIEF::OAT::version `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7versionENSt11string_viewE>)

oat\_version\_t LIEF::OAT::version(std::string\_view file)

Return the OAT version of the given file.

### [` LIEF::OAT::version `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7versionERKNSt6vectorI7uint8_tEE>)

oat\_version\_t LIEF::OAT::version(const std::vector&lt;uint8\_t&gt; &amp;raw)

Return the OAT version of the raw data.

### [` LIEF::OAT::android_version `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT15android_versionE13oat_version_t>)

LIEF::Android::[ANDROID\_VERSIONS](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF7Android16ANDROID_VERSIONSE> "LIEF::Android::ANDROID_VERSIONS") LIEF::OAT::android\_version(oat\_version\_t version)

Return the ANDROID\_VERSIONS associated with the given OAT version.

---

## [Parser](<https://lief.re/doc/latest/formats/android/oat/cpp.html#parser>)

### [` Parser `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6ParserE>)

class Parser : public LIEF::ELF::[Parser](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6ParserE> "LIEF::ELF::Parser")

[Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1Class>) to parse an OAT file to produce an [OAT::Binary](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1Binary>).

Public Functions

#### [` operator= `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6ParseraSERK6Parser>)

[Parser](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6ParserE> "LIEF::OAT::Parser") &amp;operator=(const [Parser](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6ParserE> "LIEF::OAT::Parser") &amp;copy) = delete

#### [` Parser `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Parser6ParserERK6Parser>)

Parser(const [Parser](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Parser6ParserERK6Parser> "LIEF::OAT::Parser::Parser") &amp;copy) = delete

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Parser5parseENSt11string_viewE>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6BinaryE> "LIEF::OAT::Binary")&gt; parse(std::string\_view oat\_file)

Parse an OAT file.

#### [` parse `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Parser5parseENSt11string_viewENSt11string_viewE>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6BinaryE> "LIEF::OAT::Binary")&gt; parse(std::string\_view oat\_file, std::string\_view vdex\_file)

#### [` PathTparse `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF3OAT6Parser5parseENSt10unique_ptrI6BinaryEERK5PathT>)

template&lt;class PathT, enable\_if\_path\_t&lt;[PathT](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF3OAT6Parser5parseENSt10unique_ptrI6BinaryEERK5PathT> "LIEF::OAT::Parser::parse::PathT")&gt; = 0&gt;  
static inline std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6BinaryE> "LIEF::OAT::Binary")&gt; parse(const [PathT](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF3OAT6Parser5parseENSt10unique_ptrI6BinaryEERK5PathT> "LIEF::OAT::Parser::parse::PathT") &amp;oat\_file)

Same as [parse(std::string\_view)](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1Parser_1a135cc1b91eb7825d1e899c117319bc8e>) but the file is given as a `std::filesystem::path`.

#### [` OatTVdexTparse `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4I00_16enable_if_path_tI4OatT5VdexTEEN4LIEF3OAT6Parser5parseENSt10unique_ptrI6BinaryEERK4OatTRK5VdexT>)

template&lt;class OatT, class VdexT, enable\_if\_path\_t&lt;[OatT](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4I00_16enable_if_path_tI4OatT5VdexTEEN4LIEF3OAT6Parser5parseENSt10unique_ptrI6BinaryEERK4OatTRK5VdexT> "LIEF::OAT::Parser::parse::OatT"), [VdexT](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4I00_16enable_if_path_tI4OatT5VdexTEEN4LIEF3OAT6Parser5parseENSt10unique_ptrI6BinaryEERK4OatTRK5VdexT> "LIEF::OAT::Parser::parse::VdexT")&gt; = 0&gt;  
static inline std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6BinaryE> "LIEF::OAT::Binary")&gt; parse(const [OatT](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4I00_16enable_if_path_tI4OatT5VdexTEEN4LIEF3OAT6Parser5parseENSt10unique_ptrI6BinaryEERK4OatTRK5VdexT> "LIEF::OAT::Parser::parse::OatT") &amp;oat\_file, const [VdexT](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4I00_16enable_if_path_tI4OatT5VdexTEEN4LIEF3OAT6Parser5parseENSt10unique_ptrI6BinaryEERK4OatTRK5VdexT> "LIEF::OAT::Parser::parse::VdexT") &amp;vdex\_file)

Same as [parse(std::string\_view, std::string\_view)](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1Parser_1ac49a0de3df0ddd28661a6631ba6cc50f>) but at least one of the files is given as a `std::filesystem::path`.

#### [` parse `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Parser5parseENSt6vectorI7uint8_tEE>)

static std::unique\_ptr&lt;[Binary](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6BinaryE> "LIEF::OAT::Binary")&gt; parse(std::vector&lt;uint8\_t&gt; data)

---

## [Binary](<https://lief.re/doc/latest/formats/android/oat/cpp.html#binary>)

### [` Binary `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6BinaryE>)

class Binary : public LIEF::ELF::[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")

Public Types

#### [` dex_files_t `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary11dex_files_tE>)

using dex\_files\_t = std::vector&lt;std::unique\_ptr&lt;DEX::[File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileE> "LIEF::DEX::File")&gt;&gt;

#### [` it_dex_files `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary12it_dex_filesE>)

using it\_dex\_files = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[dex\_files\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary11dex_files_tE> "LIEF::OAT::Binary::dex_files_t")&amp;, DEX::[File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileE> "LIEF::DEX::File")\*&gt;

#### [` it_const_dex_files `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary18it_const_dex_filesE>)

using it\_const\_dex\_files = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [dex\_files\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary11dex_files_tE> "LIEF::OAT::Binary::dex_files_t")&amp;, const DEX::[File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileE> "LIEF::DEX::File")\*&gt;

#### [` classes_t `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary9classes_tE>)

using classes\_t = std::unordered\_map&lt;std::string, [Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassE> "LIEF::OAT::Class")\*&gt;

#### [` classes_list_t `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary14classes_list_tE>)

using classes\_list\_t = std::vector&lt;std::unique\_ptr&lt;[Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassE> "LIEF::OAT::Class")&gt;&gt;

#### [` it_classes `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary10it_classesE>)

using it\_classes = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[classes\_list\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary14classes_list_tE> "LIEF::OAT::Binary::classes_list_t")&amp;, [Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassE> "LIEF::OAT::Class")\*&gt;

#### [` it_const_classes `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary16it_const_classesE>)

using it\_const\_classes = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [classes\_list\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary14classes_list_tE> "LIEF::OAT::Binary::classes_list_t")&amp;, const [Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassE> "LIEF::OAT::Class")\*&gt;

#### [` oat_dex_files_t `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary15oat_dex_files_tE>)

using oat\_dex\_files\_t = std::vector&lt;std::unique\_ptr&lt;[DexFile](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFileE> "LIEF::OAT::DexFile")&gt;&gt;

#### [` it_oat_dex_files `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary16it_oat_dex_filesE>)

using it\_oat\_dex\_files = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[oat\_dex\_files\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary15oat_dex_files_tE> "LIEF::OAT::Binary::oat_dex_files_t")&amp;, [DexFile](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFileE> "LIEF::OAT::DexFile")\*&gt;

#### [` it_const_oat_dex_files `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary22it_const_oat_dex_filesE>)

using it\_const\_oat\_dex\_files = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [oat\_dex\_files\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary15oat_dex_files_tE> "LIEF::OAT::Binary::oat_dex_files_t")&amp;, const [DexFile](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFileE> "LIEF::OAT::DexFile")\*&gt;

#### [` methods_t `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary9methods_tE>)

using methods\_t = std::vector&lt;std::unique\_ptr&lt;[Method](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6MethodE> "LIEF::OAT::Method")&gt;&gt;

#### [` it_methods `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary10it_methodsE>)

using it\_methods = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[methods\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary9methods_tE> "LIEF::OAT::Binary::methods_t")&amp;, [Method](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6MethodE> "LIEF::OAT::Method")\*&gt;

#### [` it_const_methods `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary16it_const_methodsE>)

using it\_const\_methods = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [methods\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary9methods_tE> "LIEF::OAT::Binary::methods_t")&amp;, const [Method](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6MethodE> "LIEF::OAT::Method")\*&gt;

#### [` dex2dex_info_t `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary14dex2dex_info_tE>)

using dex2dex\_info\_t = std::unordered\_map&lt;const DEX::[File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileE> "LIEF::DEX::File")\*, DEX::dex2dex\_info\_t&gt;

Public Functions

#### [` operator= `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6BinaryaSERK6Binary>)

[Binary](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6BinaryE> "LIEF::OAT::Binary") &amp;operator=(const [Binary](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6BinaryE> "LIEF::OAT::Binary") &amp;copy) = delete

#### [` Binary `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary6BinaryERK6Binary>)

Binary(const [Binary](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary6BinaryERK6Binary> "LIEF::OAT::Binary::Binary") &amp;copy) = delete

#### [` header `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Binary6headerEv>)

const [Header](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6HeaderE> "LIEF::OAT::Header") &amp;header() const

OAT [Header](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1Header>).

#### [` header `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary6headerEv>)

[Header](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6HeaderE> "LIEF::OAT::Header") &amp;header()

#### [` dex_files `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary9dex_filesEv>)

[it\_dex\_files](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary12it_dex_filesE> "LIEF::OAT::Binary::it_dex_files") dex\_files()

Iterator over [LIEF::DEX::File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1File>).

#### [` dex_files `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Binary9dex_filesEv>)

[it\_const\_dex\_files](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary18it_const_dex_filesE> "LIEF::OAT::Binary::it_const_dex_files") dex\_files() const

#### [` oat_dex_files `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary13oat_dex_filesEv>)

[it\_oat\_dex\_files](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary16it_oat_dex_filesE> "LIEF::OAT::Binary::it_oat_dex_files") oat\_dex\_files()

Iterator over [LIEF::OAT::DexFile](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1DexFile>).

#### [` oat_dex_files `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Binary13oat_dex_filesEv>)

[it\_const\_oat\_dex\_files](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary22it_const_oat_dex_filesE> "LIEF::OAT::Binary::it_const_oat_dex_files") oat\_dex\_files() const

#### [` classes `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Binary7classesEv>)

[it\_const\_classes](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary16it_const_classesE> "LIEF::OAT::Binary::it_const_classes") classes() const

Iterator over [LIEF::OAT::Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1Class>).

#### [` classes `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary7classesEv>)

[it\_classes](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary10it_classesE> "LIEF::OAT::Binary::it_classes") classes()

#### [` has_class `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Binary9has_classERKNSt6stringE>)

bool has\_class(const std::string &amp;class\_name) const

Check if the current OAT has the given class.

#### [` get_class `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Binary9get_classERKNSt6stringE>)

const [Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassE> "LIEF::OAT::Class") \*get\_class(const std::string &amp;class\_name) const

Return the [LIEF::OAT::Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1Class>) with the given name or a nullptr if the class can’t be found.

#### [` get_class `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary9get_classERKNSt6stringE>)

[Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassE> "LIEF::OAT::Class") \*get\_class(const std::string &amp;class\_name)

#### [` get_class `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Binary9get_classE6size_t>)

const [Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassE> "LIEF::OAT::Class") \*get\_class(size\_t index) const

Return the [LIEF::OAT::Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1Class>) at the given index or a nullptr if it does not exist.

#### [` get_class `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary9get_classE6size_t>)

[Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassE> "LIEF::OAT::Class") \*get\_class(size\_t index)

#### [` methods `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Binary7methodsEv>)

[it\_const\_methods](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary16it_const_methodsE> "LIEF::OAT::Binary::it_const_methods") methods() const

Iterator over [LIEF::OAT::Method](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1Method>).

#### [` methods `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary7methodsEv>)

[it\_methods](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary10it_methodsE> "LIEF::OAT::Binary::it_methods") methods()

#### [` dex2dex_info `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Binary12dex2dex_infoEv>)

[dex2dex\_info\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary14dex2dex_info_tE> "LIEF::OAT::Binary::dex2dex_info_t") dex2dex\_info() const

#### [` dex2dex_json_info `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary17dex2dex_json_infoEv>)

std::string dex2dex\_json\_info()

#### [` has_vdex `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Binary8has_vdexEv>)

inline bool has\_vdex() const

#### [` accept `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Binary6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

[Method](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1Method>) associated with the visitor pattern.

#### [` ~Binary `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6BinaryD0Ev>)

~Binary() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Binary7classofEPKN4LIEF6BinaryE>)

static inline bool classof(const LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary") \*bin)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6BinarylsERNSt7ostreamERK6Binary>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Binary](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6BinaryE> "LIEF::OAT::Binary") &amp;binary)

---

## [Header](<https://lief.re/doc/latest/formats/android/oat/cpp.html#header>)

### [` Header `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6HeaderE>)

class Header : public LIEF::Object

Public Types

#### [` magic_t `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header7magic_tE>)

using magic\_t = std::array&lt;uint8\_t, 4&gt;

#### [` key_values_t `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header12key_values_tE>)

using key\_values\_t = std::map&lt;[HEADER\_KEYS](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYSE> "LIEF::OAT::HEADER_KEYS"), std::string&gt;

#### [` it_key_values_t `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header15it_key_values_tE>)

using it\_key\_values\_t = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;std::vector&lt;[element\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header9element_tE> "LIEF::OAT::Header::element_t")&gt;&gt;

#### [` it_const_key_values_t `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header21it_const_key_values_tE>)

using it\_const\_key\_values\_t = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;std::vector&lt;[element\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header9element_tE> "LIEF::OAT::Header::element_t")&gt;&gt;

#### [` keys_t `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header6keys_tE>)

using keys\_t = std::vector&lt;[HEADER\_KEYS](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYSE> "LIEF::OAT::HEADER_KEYS")&gt;

Iterator type over.

#### [` values_t `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header8values_tE>)

using values\_t = std::vector&lt;std::string&gt;

Public Functions

#### [` Header `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header6HeaderEv>)

Header()

#### [` Header `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header6HeaderERK6Header>)

Header(const [Header](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header6HeaderERK6Header> "LIEF::OAT::Header::Header")&amp;)

#### [` operator= `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6HeaderaSERK6Header>)

[Header](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6HeaderE> "LIEF::OAT::Header") &amp;operator=(const [Header](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6HeaderE> "LIEF::OAT::Header")&amp;)

#### [` THeader `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4I0EN4LIEF3OAT6Header6HeaderEPK1T>)

template&lt;class T&gt;  
Header(const [T](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4I0EN4LIEF3OAT6Header6HeaderEPK1T> "LIEF::OAT::Header::Header::T") \*header)

#### [` magic `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header5magicEv>)

[Header](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6HeaderE> "LIEF::OAT::Header")::[magic\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header7magic_tE> "LIEF::OAT::Header::magic_t") magic() const

Magic value: `oat`.

#### [` version `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header7versionEv>)

oat\_version\_t version() const

OAT version.

#### [` checksum `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header8checksumEv>)

uint32\_t checksum() const

#### [` instruction_set `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header15instruction_setEv>)

[INSTRUCTION\_SETS](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16INSTRUCTION_SETSE> "LIEF::OAT::INSTRUCTION_SETS") instruction\_set() const

#### [` nb_dex_files `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header12nb_dex_filesEv>)

uint32\_t nb\_dex\_files() const

#### [` oat_dex_files_offset `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header20oat_dex_files_offsetEv>)

uint32\_t oat\_dex\_files\_offset() const

#### [` executable_offset `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header17executable_offsetEv>)

uint32\_t executable\_offset() const

#### [` i2i_bridge_offset `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header17i2i_bridge_offsetEv>)

uint32\_t i2i\_bridge\_offset() const

#### [` i2c_code_bridge_offset `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header22i2c_code_bridge_offsetEv>)

uint32\_t i2c\_code\_bridge\_offset() const

#### [` jni_dlsym_lookup_offset `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header23jni_dlsym_lookup_offsetEv>)

uint32\_t jni\_dlsym\_lookup\_offset() const

#### [` quick_generic_jni_trampoline_offset `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header35quick_generic_jni_trampoline_offsetEv>)

uint32\_t quick\_generic\_jni\_trampoline\_offset() const

#### [` quick_imt_conflict_trampoline_offset `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header36quick_imt_conflict_trampoline_offsetEv>)

uint32\_t quick\_imt\_conflict\_trampoline\_offset() const

#### [` quick_resolution_trampoline_offset `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header34quick_resolution_trampoline_offsetEv>)

uint32\_t quick\_resolution\_trampoline\_offset() const

#### [` quick_to_interpreter_bridge_offset `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header34quick_to_interpreter_bridge_offsetEv>)

uint32\_t quick\_to\_interpreter\_bridge\_offset() const

#### [` image_patch_delta `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header17image_patch_deltaEv>)

int32\_t image\_patch\_delta() const

#### [` image_file_location_oat_checksum `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header32image_file_location_oat_checksumEv>)

uint32\_t image\_file\_location\_oat\_checksum() const

#### [` image_file_location_oat_data_begin `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header34image_file_location_oat_data_beginEv>)

uint32\_t image\_file\_location\_oat\_data\_begin() const

#### [` key_value_size `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header14key_value_sizeEv>)

uint32\_t key\_value\_size() const

#### [` key_values `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header10key_valuesEv>)

[it\_key\_values\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header15it_key_values_tE> "LIEF::OAT::Header::it_key_values_t") key\_values()

#### [` key_values `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header10key_valuesEv>)

[it\_const\_key\_values\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header21it_const_key_values_tE> "LIEF::OAT::Header::it_const_key_values_t") key\_values() const

#### [` keys `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header4keysEv>)

[keys\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header6keys_tE> "LIEF::OAT::Header::keys_t") keys() const

#### [` values `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header6valuesEv>)

[values\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header8values_tE> "LIEF::OAT::Header::values_t") values() const

#### [` get `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header3getE11HEADER_KEYS>)

const std::string \*get([HEADER\_KEYS](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYSE> "LIEF::OAT::HEADER_KEYS") key) const

#### [` get `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header3getE11HEADER_KEYS>)

std::string \*get([HEADER\_KEYS](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYSE> "LIEF::OAT::HEADER_KEYS") key)

#### [` set `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header3setE11HEADER_KEYSRKNSt6stringE>)

[Header](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6HeaderE> "LIEF::OAT::Header") &amp;set([HEADER\_KEYS](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYSE> "LIEF::OAT::HEADER_KEYS") key, const std::string &amp;value)

#### [` operator[] `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6HeaderixE11HEADER_KEYS>)

const std::string \*operator[]([HEADER\_KEYS](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYSE> "LIEF::OAT::HEADER_KEYS") key) const

#### [` operator[] `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6HeaderixE11HEADER_KEYS>)

std::string \*operator[]([HEADER\_KEYS](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYSE> "LIEF::OAT::HEADER_KEYS") key)

#### [` magic `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header5magicERK7magic_t>)

void magic(const [magic\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header7magic_tE> "LIEF::OAT::Header::magic_t") &amp;magic)

#### [` accept `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Header6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

Public Static Functions

#### [` key_to_string `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header13key_to_stringE11HEADER_KEYS>)

static std::string key\_to\_string([HEADER\_KEYS](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYSE> "LIEF::OAT::HEADER_KEYS") key)

Return the string value associated with the given key.

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6HeaderlsERNSt7ostreamERK6Header>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Header](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6HeaderE> "LIEF::OAT::Header") &amp;hdr)

#### [` element_t `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header9element_tE>)

struct element\_t

Public Functions

##### [` element_t `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header9element_t9element_tE11HEADER_KEYSRKNSt6stringE>)

inline element\_t([HEADER\_KEYS](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYSE> "LIEF::OAT::HEADER_KEYS") key, const std::string &amp;value)

Public Members

##### [` key `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header9element_t3keyE>)

[HEADER\_KEYS](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYSE> "LIEF::OAT::HEADER_KEYS") key

##### [` value `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Header9element_t5valueE>)

std::string \*value = nullptr

---

## [DexFile](<https://lief.re/doc/latest/formats/android/oat/cpp.html#dexfile>)

### [` DexFile `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFileE>)

class DexFile : public LIEF::Object

Public Functions

#### [` DexFile `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFile7DexFileEv>)

DexFile()

#### [` DexFile `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFile7DexFileERK7DexFile>)

DexFile(const [DexFile](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFile7DexFileERK7DexFile> "LIEF::OAT::DexFile::DexFile")&amp;)

#### [` operator= `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFileaSERK7DexFile>)

[DexFile](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFileE> "LIEF::OAT::DexFile") &amp;operator=(const [DexFile](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFileE> "LIEF::OAT::DexFile")&amp;)

#### [` location `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT7DexFile8locationEv>)

std::string\_view location() const

#### [` checksum `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT7DexFile8checksumEv>)

uint32\_t checksum() const

#### [` dex_offset `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT7DexFile10dex_offsetEv>)

uint32\_t dex\_offset() const

#### [` has_dex_file `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT7DexFile12has_dex_fileEv>)

bool has\_dex\_file() const

#### [` dex_file `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT7DexFile8dex_fileEv>)

const DEX::[File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileE> "LIEF::DEX::File") \*dex\_file() const

#### [` dex_file `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFile8dex_fileEv>)

DEX::[File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileE> "LIEF::DEX::File") \*dex\_file()

#### [` location `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFile8locationERKNSt6stringE>)

void location(const std::string &amp;location)

#### [` checksum `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFile8checksumE8uint32_t>)

void checksum(uint32\_t checksum)

#### [` dex_offset `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFile10dex_offsetE8uint32_t>)

void dex\_offset(uint32\_t dex\_offset)

#### [` classes_offsets `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT7DexFile15classes_offsetsEv>)

const std::vector&lt;uint32\_t&gt; &amp;classes\_offsets() const

#### [` lookup_table_offset `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT7DexFile19lookup_table_offsetEv>)

uint32\_t lookup\_table\_offset() const

#### [` class_offsets_offset `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFile20class_offsets_offsetE8uint32_t>)

void class\_offsets\_offset(uint32\_t offset)

#### [` lookup_table_offset `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFile19lookup_table_offsetE8uint32_t>)

void lookup\_table\_offset(uint32\_t offset)

#### [` accept `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT7DexFile6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~DexFile `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFileD0Ev>)

~DexFile() override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFilelsERNSt7ostreamERK7DexFile>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [DexFile](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT7DexFileE> "LIEF::OAT::DexFile") &amp;dex\_file)

---

## [Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#class>)

### [` Class `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassE>)

class Class : public LIEF::Object

Public Types

#### [` methods_t `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5Class9methods_tE>)

using methods\_t = std::vector&lt;[Method](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6MethodE> "LIEF::OAT::Method")\*&gt;

#### [` it_methods `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5Class10it_methodsE>)

using it\_methods = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[methods\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5Class9methods_tE> "LIEF::OAT::Class::methods_t")&amp;&gt;

#### [` it_const_methods `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5Class16it_const_methodsE>)

using it\_const\_methods = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [methods\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5Class9methods_tE> "LIEF::OAT::Class::methods_t")&amp;&gt;

Public Functions

#### [` Class `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5Class5ClassEv>)

Class()

#### [` Class `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5Class5ClassE16OAT_CLASS_STATUS15OAT_CLASS_TYPESPN3DEX5ClassENSt6vectorI8uint32_tEE>)

Class([OAT\_CLASS\_STATUS](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16OAT_CLASS_STATUSE> "LIEF::OAT::OAT_CLASS_STATUS") status, [OAT\_CLASS\_TYPES](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT15OAT_CLASS_TYPESE> "LIEF::OAT::OAT_CLASS_TYPES") type, DEX::[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") \*dex\_class, std::vector&lt;uint32\_t&gt; bitmap = {})

#### [` Class `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5Class5ClassERK5Class>)

Class(const [Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5Class5ClassERK5Class> "LIEF::OAT::Class::Class")&amp;)

#### [` operator= `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassaSERK5Class>)

[Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassE> "LIEF::OAT::Class") &amp;operator=(const [Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassE> "LIEF::OAT::Class")&amp;)

#### [` has_dex_class `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT5Class13has_dex_classEv>)

bool has\_dex\_class() const

#### [` dex_class `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT5Class9dex_classEv>)

const DEX::[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") \*dex\_class() const

#### [` dex_class `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5Class9dex_classEv>)

DEX::[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") \*dex\_class()

#### [` status `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT5Class6statusEv>)

[OAT\_CLASS\_STATUS](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16OAT_CLASS_STATUSE> "LIEF::OAT::OAT_CLASS_STATUS") status() const

#### [` type `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT5Class4typeEv>)

[OAT\_CLASS\_TYPES](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT15OAT_CLASS_TYPESE> "LIEF::OAT::OAT_CLASS_TYPES") type() const

#### [` fullname `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT5Class8fullnameEv>)

std::string\_view fullname() const

#### [` index `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT5Class5indexEv>)

size\_t index() const

#### [` methods `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5Class7methodsEv>)

[it\_methods](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5Class10it_methodsE> "LIEF::OAT::Class::it_methods") methods()

#### [` methods `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT5Class7methodsEv>)

[it\_const\_methods](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5Class16it_const_methodsE> "LIEF::OAT::Class::it_const_methods") methods() const

#### [` bitmap `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT5Class6bitmapEv>)

const std::vector&lt;uint32\_t&gt; &amp;bitmap() const

#### [` is_quickened `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT5Class12is_quickenedERKN3DEX6MethodE>)

bool is\_quickened(const DEX::[Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodE> "LIEF::DEX::Method") &amp;m) const

#### [` is_quickened `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT5Class12is_quickenedE8uint32_t>)

bool is\_quickened(uint32\_t relative\_index) const

#### [` method_offsets_index `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT5Class20method_offsets_indexERKN3DEX6MethodE>)

uint32\_t method\_offsets\_index(const DEX::[Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodE> "LIEF::DEX::Method") &amp;m) const

#### [` method_offsets_index `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT5Class20method_offsets_indexE8uint32_t>)

uint32\_t method\_offsets\_index(uint32\_t relative\_index) const

#### [` relative_index `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT5Class14relative_indexERKN3DEX6MethodE>)

uint32\_t relative\_index(const DEX::[Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodE> "LIEF::DEX::Method") &amp;m) const

#### [` relative_index `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT5Class14relative_indexE8uint32_t>)

uint32\_t relative\_index(uint32\_t method\_absolute\_index) const

#### [` dex2dex_info `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT5Class12dex2dex_infoEv>)

DEX::dex2dex\_class\_info\_t dex2dex\_info() const

#### [` accept `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT5Class6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~Class `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassD0Ev>)

~Class() override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClasslsERNSt7ostreamERK5Class>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassE> "LIEF::OAT::Class") &amp;cls)

---

## [Method](<https://lief.re/doc/latest/formats/android/oat/cpp.html#method>)

### [` Method `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6MethodE>)

class Method : public LIEF::Object

Public Types

#### [` quick_code_t `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Method12quick_code_tE>)

using quick\_code\_t = std::vector&lt;uint8\_t&gt;

Container for the Quick Code.

Public Functions

#### [` Method `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Method6MethodEv>)

Method()

#### [` Method `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Method6MethodEPN3DEX6MethodEP5ClassNSt6vectorI7uint8_tEE>)

Method(DEX::[Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodE> "LIEF::DEX::Method") \*method, [Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassE> "LIEF::OAT::Class") \*oat\_class, std::vector&lt;uint8\_t&gt; code = {})

#### [` Method `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Method6MethodERK6Method>)

Method(const [Method](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Method6MethodERK6Method> "LIEF::OAT::Method::Method")&amp;)

#### [` operator= `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6MethodaSERK6Method>)

[Method](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6MethodE> "LIEF::OAT::Method") &amp;operator=(const [Method](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6MethodE> "LIEF::OAT::Method")&amp;)

#### [` name `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Method4nameEv>)

std::string name() const

[Method](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1Method>)’s name.

#### [` oat_class `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Method9oat_classEv>)

const [Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassE> "LIEF::OAT::Class") \*oat\_class() const

OAT [Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1Class>) associated with this [Method](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1Method>).

#### [` oat_class `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Method9oat_classEv>)

[Class](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT5ClassE> "LIEF::OAT::Class") \*oat\_class()

#### [` has_dex_method `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Method14has_dex_methodEv>)

bool has\_dex\_method() const

Check if a [LIEF::DEX::Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Method>) is associated with this [Method](<https://lief.re/doc/latest/formats/android/oat/cpp.html#classLIEF_1_1OAT_1_1Method>).

#### [` dex_method `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Method10dex_methodEv>)

const DEX::[Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodE> "LIEF::DEX::Method") \*dex\_method() const

[LIEF::DEX::Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Method>) associated (if any).

#### [` dex_method `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Method10dex_methodEv>)

DEX::[Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodE> "LIEF::DEX::Method") \*dex\_method()

#### [` is_dex2dex_optimized `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Method20is_dex2dex_optimizedEv>)

bool is\_dex2dex\_optimized() const

True if the optimization is DEX.

#### [` is_compiled `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Method11is_compiledEv>)

bool is\_compiled() const

#### [` dex2dex_info `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Method12dex2dex_infoEv>)

const DEX::dex2dex\_method\_info\_t &amp;dex2dex\_info() const

#### [` quick_code `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Method10quick_codeEv>)

const [quick\_code\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Method12quick_code_tE> "LIEF::OAT::Method::quick_code_t") &amp;quick\_code() const

Quick code associated with the method.

#### [` quick_code `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Method10quick_codeERK12quick_code_t>)

void quick\_code(const [quick\_code\_t](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6Method12quick_code_tE> "LIEF::OAT::Method::quick_code_t") &amp;code)

#### [` accept `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4NK4LIEF3OAT6Method6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~Method `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6MethodD0Ev>)

~Method() override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6MethodlsERNSt7ostreamERK6Method>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Method](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT6MethodE> "LIEF::OAT::Method") &amp;meth)

---

## [Enums](<https://lief.re/doc/latest/formats/android/oat/cpp.html#enums>)

### [OAT Class types](<https://lief.re/doc/latest/formats/android/oat/cpp.html#oat-class-types>)

#### [` LIEF::OAT::OAT_CLASS_TYPES `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT15OAT_CLASS_TYPESE>)

enum LIEF::OAT::OAT\_CLASS\_TYPES

*Values:*

##### [` OAT_CLASS_ALL_COMPILED `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT15OAT_CLASS_TYPES22OAT_CLASS_ALL_COMPILEDE>)

enumerator OAT\_CLASS\_ALL\_COMPILED = 0

##### [` OAT_CLASS_SOME_COMPILED `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT15OAT_CLASS_TYPES23OAT_CLASS_SOME_COMPILEDE>)

enumerator OAT\_CLASS\_SOME\_COMPILED = 1

OatClass is followed by an OatMethodOffsets for each method.

##### [` OAT_CLASS_NONE_COMPILED `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT15OAT_CLASS_TYPES23OAT_CLASS_NONE_COMPILEDE>)

enumerator OAT\_CLASS\_NONE\_COMPILED = 2

A bitmap of which OatMethodOffsets are present follows the OatClass.

---

### [OAT Class Status](<https://lief.re/doc/latest/formats/android/oat/cpp.html#oat-class-status>)

#### [` LIEF::OAT::OAT_CLASS_STATUS `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16OAT_CLASS_STATUSE>)

enum LIEF::OAT::OAT\_CLASS\_STATUS

*Values:*

##### [` STATUS_RETIRED `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16OAT_CLASS_STATUS14STATUS_RETIREDE>)

enumerator STATUS\_RETIRED = -2

##### [` STATUS_ERROR `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16OAT_CLASS_STATUS12STATUS_ERRORE>)

enumerator STATUS\_ERROR = -1

##### [` STATUS_NOTREADY `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16OAT_CLASS_STATUS15STATUS_NOTREADYE>)

enumerator STATUS\_NOTREADY = 0

##### [` STATUS_IDX `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16OAT_CLASS_STATUS10STATUS_IDXE>)

enumerator STATUS\_IDX = 1

##### [` STATUS_LOADED `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16OAT_CLASS_STATUS13STATUS_LOADEDE>)

enumerator STATUS\_LOADED = 2

##### [` STATUS_RESOLVING `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16OAT_CLASS_STATUS16STATUS_RESOLVINGE>)

enumerator STATUS\_RESOLVING = 3

##### [` STATUS_RESOLVED `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16OAT_CLASS_STATUS15STATUS_RESOLVEDE>)

enumerator STATUS\_RESOLVED = 4

##### [` STATUS_VERIFYING `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16OAT_CLASS_STATUS16STATUS_VERIFYINGE>)

enumerator STATUS\_VERIFYING = 5

##### [` STATUS_RETRY_VERIFICATION_AT_RUNTIME `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16OAT_CLASS_STATUS36STATUS_RETRY_VERIFICATION_AT_RUNTIMEE>)

enumerator STATUS\_RETRY\_VERIFICATION\_AT\_RUNTIME = 6

##### [` STATUS_VERIFYING_AT_RUNTIME `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16OAT_CLASS_STATUS27STATUS_VERIFYING_AT_RUNTIMEE>)

enumerator STATUS\_VERIFYING\_AT\_RUNTIME = 7

##### [` STATUS_VERIFIED `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16OAT_CLASS_STATUS15STATUS_VERIFIEDE>)

enumerator STATUS\_VERIFIED = 8

##### [` STATUS_INITIALIZING `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16OAT_CLASS_STATUS19STATUS_INITIALIZINGE>)

enumerator STATUS\_INITIALIZING = 9

##### [` STATUS_INITIALIZED `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16OAT_CLASS_STATUS18STATUS_INITIALIZEDE>)

enumerator STATUS\_INITIALIZED = 10

---

### [Header Keys](<https://lief.re/doc/latest/formats/android/oat/cpp.html#header-keys>)

#### [` LIEF::OAT::HEADER_KEYS `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYSE>)

enum LIEF::OAT::HEADER\_KEYS

*Values:*

##### [` KEY_IMAGE_LOCATION `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYS18KEY_IMAGE_LOCATIONE>)

enumerator KEY\_IMAGE\_LOCATION = 0

##### [` KEY_DEX2OAT_CMD_LINE `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYS20KEY_DEX2OAT_CMD_LINEE>)

enumerator KEY\_DEX2OAT\_CMD\_LINE = 1

##### [` KEY_DEX2OAT_HOST `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYS16KEY_DEX2OAT_HOSTE>)

enumerator KEY\_DEX2OAT\_HOST = 2

##### [` KEY_PIC `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYS7KEY_PICE>)

enumerator KEY\_PIC = 3

##### [` KEY_HAS_PATCH_INFO `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYS18KEY_HAS_PATCH_INFOE>)

enumerator KEY\_HAS\_PATCH\_INFO = 4

##### [` KEY_DEBUGGABLE `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYS14KEY_DEBUGGABLEE>)

enumerator KEY\_DEBUGGABLE = 5

##### [` KEY_NATIVE_DEBUGGABLE `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYS21KEY_NATIVE_DEBUGGABLEE>)

enumerator KEY\_NATIVE\_DEBUGGABLE = 6

##### [` KEY_COMPILER_FILTER `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYS19KEY_COMPILER_FILTERE>)

enumerator KEY\_COMPILER\_FILTER = 7

##### [` KEY_CLASS_PATH `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYS14KEY_CLASS_PATHE>)

enumerator KEY\_CLASS\_PATH = 8

##### [` KEY_BOOT_CLASS_PATH `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYS19KEY_BOOT_CLASS_PATHE>)

enumerator KEY\_BOOT\_CLASS\_PATH = 9

##### [` KEY_CONCURRENT_COPYING `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYS22KEY_CONCURRENT_COPYINGE>)

enumerator KEY\_CONCURRENT\_COPYING = 10

##### [` KE_COMPILATION_REASON `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT11HEADER_KEYS21KE_COMPILATION_REASONE>)

enumerator KE\_COMPILATION\_REASON = 11

---

### [Instruction sets](<https://lief.re/doc/latest/formats/android/oat/cpp.html#instruction-sets>)

#### [` LIEF::OAT::INSTRUCTION_SETS `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16INSTRUCTION_SETSE>)

enum LIEF::OAT::INSTRUCTION\_SETS

*Values:*

##### [` INST_SET_NONE `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16INSTRUCTION_SETS13INST_SET_NONEE>)

enumerator INST\_SET\_NONE = 0

##### [` INST_SET_ARM `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16INSTRUCTION_SETS12INST_SET_ARME>)

enumerator INST\_SET\_ARM = 1

##### [` INST_SET_ARM_64 `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16INSTRUCTION_SETS15INST_SET_ARM_64E>)

enumerator INST\_SET\_ARM\_64 = 2

##### [` INST_SET_THUMB2 `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16INSTRUCTION_SETS15INST_SET_THUMB2E>)

enumerator INST\_SET\_THUMB2 = 3

##### [` INST_SET_X86 `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16INSTRUCTION_SETS12INST_SET_X86E>)

enumerator INST\_SET\_X86 = 4

##### [` INST_SET_X86_64 `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16INSTRUCTION_SETS15INST_SET_X86_64E>)

enumerator INST\_SET\_X86\_64 = 5

##### [` INST_SET_MIPS `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16INSTRUCTION_SETS13INST_SET_MIPSE>)

enumerator INST\_SET\_MIPS = 6

##### [` INST_SET_MIPS_64 `](<https://lief.re/doc/latest/formats/android/oat/cpp.html#_CPPv4N4LIEF3OAT16INSTRUCTION_SETS16INST_SET_MIPS_64E>)

enumerator INST\_SET\_MIPS\_64 = 7
