---
documentID: "0c9c18912be25a6405c7b94c0d74ecb4491d3a51311de386ed4a80acbc9986bd"
docname: "formats/android/art/cpp"
title: "ART C++ API - LIEF Documentation"
description: "ART C++ API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/formats/android/art/cpp.html"
markdownURL: "https://lief.re/doc/latest/formats/android/art/cpp.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "a2a7eaff96486e530b8aa263396eb0f1b61d5f383161021cbae9ca06af8a74aa"
---

# [C++](<https://lief.re/doc/latest/formats/android/art/cpp.html#c>)

## [Utilities](<https://lief.re/doc/latest/formats/android/art/cpp.html#utilities>)

### [` LIEF::ART::is_art `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6is_artENSt11string_viewE>)

bool LIEF::ART::is\_art(std::string\_view file)

Check if the given file is an ART one.

### [` LIEF::ART::is_art `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6is_artERKNSt6vectorI7uint8_tEE>)

bool LIEF::ART::is\_art(const std::vector&lt;uint8\_t&gt; &amp;raw)

Check if the given raw data is an ART one.

### [` LIEF::ART::version `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART7versionENSt11string_viewE>)

art\_version\_t LIEF::ART::version(std::string\_view file)

Return the ART version of the given file.

### [` LIEF::ART::version `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART7versionERKNSt6vectorI7uint8_tEE>)

art\_version\_t LIEF::ART::version(const std::vector&lt;uint8\_t&gt; &amp;raw)

Return the ART version of the raw data.

### [` LIEF::ART::android_version `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART15android_versionE13art_version_t>)

LIEF::Android::[ANDROID\_VERSIONS](<https://lief.re/doc/latest/api/utilities/index.html#_CPPv4N4LIEF7Android16ANDROID_VERSIONSE> "LIEF::Android::ANDROID_VERSIONS") LIEF::ART::android\_version(art\_version\_t version)

Return the ANDROID\_VERSIONS associated with the given ART version.

---

## [Parser](<https://lief.re/doc/latest/formats/android/art/cpp.html#parser>)

### [` Parser `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6ParserE>)

class Parser

Class which parses an ART file and transforms it into an [ART::File](<https://lief.re/doc/latest/formats/android/art/cpp.html#classLIEF_1_1ART_1_1File>) object.

Public Functions

#### [` operator= `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6ParseraSERK6Parser>)

[Parser](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6ParserE> "LIEF::ART::Parser") &amp;operator=(const [Parser](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6ParserE> "LIEF::ART::Parser") &amp;copy) = delete

#### [` Parser `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6Parser6ParserERK6Parser>)

Parser(const [Parser](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6Parser6ParserERK6Parser> "LIEF::ART::Parser::Parser") &amp;copy) = delete

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6Parser5parseENSt11string_viewE>)

static std::unique\_ptr&lt;[File](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART4FileE> "LIEF::ART::File")&gt; parse(std::string\_view file)

#### [` PathTparse `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF3ART6Parser5parseENSt10unique_ptrI4FileEERK5PathT>)

template&lt;class PathT, enable\_if\_path\_t&lt;[PathT](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF3ART6Parser5parseENSt10unique_ptrI4FileEERK5PathT> "LIEF::ART::Parser::parse::PathT")&gt; = 0&gt;  
static inline std::unique\_ptr&lt;[File](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART4FileE> "LIEF::ART::File")&gt; parse(const [PathT](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF3ART6Parser5parseENSt10unique_ptrI4FileEERK5PathT> "LIEF::ART::Parser::parse::PathT") &amp;file)

Same as [parse(std::string\_view)](<https://lief.re/doc/latest/formats/android/art/cpp.html#classLIEF_1_1ART_1_1Parser_1a6533f68452685f670d37af8ae01e58e2>) but the file is given as a `std::filesystem::path`.

#### [` parse `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6Parser5parseENSt6vectorI7uint8_tEENSt11string_viewE>)

static std::unique\_ptr&lt;[File](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART4FileE> "LIEF::ART::File")&gt; parse(std::vector&lt;uint8\_t&gt; data, std::string\_view name = "")

---

## [File](<https://lief.re/doc/latest/formats/android/art/cpp.html#file>)

### [` File `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART4FileE>)

class File : public LIEF::Object

Public Functions

#### [` operator= `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART4FileaSERK4File>)

[File](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART4FileE> "LIEF::ART::File") &amp;operator=(const [File](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART4FileE> "LIEF::ART::File") &amp;copy) = delete

#### [` File `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART4File4FileERK4File>)

File(const [File](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART4File4FileERK4File> "LIEF::ART::File::File") &amp;copy) = delete

#### [` header `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART4File6headerEv>)

const [Header](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6HeaderE> "LIEF::ART::Header") &amp;header() const

#### [` header `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART4File6headerEv>)

[Header](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6HeaderE> "LIEF::ART::Header") &amp;header()

#### [` accept `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART4File6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~File `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART4FileD0Ev>)

~File() override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART4FilelsERNSt7ostreamERK4File>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [File](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART4FileE> "LIEF::ART::File") &amp;art\_file)

---

## [Header](<https://lief.re/doc/latest/formats/android/art/cpp.html#header>)

### [` Header `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6HeaderE>)

class Header : public LIEF::Object

Public Types

#### [` magic_t `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6Header7magic_tE>)

using magic\_t = std::array&lt;uint8\_t, 4&gt;

Public Functions

#### [` Header `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6Header6HeaderEv>)

Header()

#### [` THeader `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4I0EN4LIEF3ART6Header6HeaderEPK1T>)

template&lt;class T&gt;  
Header(const [T](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4I0EN4LIEF3ART6Header6HeaderEPK1T> "LIEF::ART::Header::Header::T") \*header)

#### [` Header `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6Header6HeaderERK6Header>)

Header(const [Header](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6Header6HeaderERK6Header> "LIEF::ART::Header::Header")&amp;)

#### [` operator= `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6HeaderaSERK6Header>)

[Header](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6HeaderE> "LIEF::ART::Header") &amp;operator=(const [Header](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6HeaderE> "LIEF::ART::Header")&amp;)

#### [` magic `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header5magicEv>)

[magic\_t](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6Header7magic_tE> "LIEF::ART::Header::magic_t") magic() const

#### [` version `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header7versionEv>)

art\_version\_t version() const

#### [` image_begin `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header11image_beginEv>)

uint32\_t image\_begin() const

#### [` image_size `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header10image_sizeEv>)

uint32\_t image\_size() const

#### [` oat_checksum `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header12oat_checksumEv>)

uint32\_t oat\_checksum() const

#### [` oat_file_begin `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header14oat_file_beginEv>)

uint32\_t oat\_file\_begin() const

#### [` oat_file_end `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header12oat_file_endEv>)

uint32\_t oat\_file\_end() const

#### [` oat_data_begin `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header14oat_data_beginEv>)

uint32\_t oat\_data\_begin() const

#### [` oat_data_end `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header12oat_data_endEv>)

uint32\_t oat\_data\_end() const

#### [` patch_delta `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header11patch_deltaEv>)

int32\_t patch\_delta() const

#### [` image_roots `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header11image_rootsEv>)

uint32\_t image\_roots() const

#### [` pointer_size `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header12pointer_sizeEv>)

uint32\_t pointer\_size() const

#### [` compile_pic `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header11compile_picEv>)

bool compile\_pic() const

#### [` nb_sections `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header11nb_sectionsEv>)

uint32\_t nb\_sections() const

#### [` nb_methods `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header10nb_methodsEv>)

uint32\_t nb\_methods() const

#### [` boot_image_begin `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header16boot_image_beginEv>)

uint32\_t boot\_image\_begin() const

#### [` boot_image_size `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header15boot_image_sizeEv>)

uint32\_t boot\_image\_size() const

#### [` boot_oat_begin `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header14boot_oat_beginEv>)

uint32\_t boot\_oat\_begin() const

#### [` boot_oat_size `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header13boot_oat_sizeEv>)

uint32\_t boot\_oat\_size() const

#### [` storage_mode `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header12storage_modeEv>)

STORAGE\_MODES storage\_mode() const

#### [` data_size `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header9data_sizeEv>)

uint32\_t data\_size() const

#### [` accept `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4NK4LIEF3ART6Header6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~Header `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6HeaderD0Ev>)

~Header() override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6HeaderlsERNSt7ostreamERK6Header>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Header](<https://lief.re/doc/latest/formats/android/art/cpp.html#_CPPv4N4LIEF3ART6HeaderE> "LIEF::ART::Header") &amp;hdr)
