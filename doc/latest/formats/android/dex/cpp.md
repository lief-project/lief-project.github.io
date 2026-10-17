---
documentID: "927c7ba0e7bbb2c21da71165301a12d204827fe193e2ad685dcfeffeb63e0599"
docname: "formats/android/dex/cpp"
title: "DEX C++ API - LIEF Documentation"
description: "DEX C++ API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/formats/android/dex/cpp.html"
markdownURL: "https://lief.re/doc/latest/formats/android/dex/cpp.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "d97c8a328018cc60cf286fe21a68d5c86ee099dcfebe008b7b12374ff030945b"
---

# [C++](<https://lief.re/doc/latest/formats/android/dex/cpp.html#c>)

## [Utilities](<https://lief.re/doc/latest/formats/android/dex/cpp.html#utilities>)

### [` LIEF::DEX::is_dex `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6is_dexENSt11string_viewE>)

bool LIEF::DEX::is\_dex(std::string\_view file)

Check if the given file is a DEX.

### [` LIEF::DEX::is_dex `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6is_dexERKNSt6vectorI7uint8_tEE>)

bool LIEF::DEX::is\_dex(const std::vector&lt;uint8\_t&gt; &amp;raw)

Check if the given raw data is a DEX.

### [` LIEF::DEX::version `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7versionENSt11string_viewE>)

dex\_version\_t LIEF::DEX::version(std::string\_view file)

Return the DEX version of the given file.

### [` LIEF::DEX::version `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7versionERKNSt6vectorI7uint8_tEE>)

dex\_version\_t LIEF::DEX::version(const std::vector&lt;uint8\_t&gt; &amp;raw)

Return the DEX version of the raw data.

---

## [Parser](<https://lief.re/doc/latest/formats/android/dex/cpp.html#parser>)

### [` Parser `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6ParserE>)

class Parser

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Class>) which parses a DEX file to produce a [DEX::File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1File>) object.

Public Functions

#### [` operator= `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6ParseraSERK6Parser>)

[Parser](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6ParserE> "LIEF::DEX::Parser") &amp;operator=(const [Parser](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6ParserE> "LIEF::DEX::Parser") &amp;copy) = delete

#### [` Parser `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Parser6ParserERK6Parser>)

Parser(const [Parser](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Parser6ParserERK6Parser> "LIEF::DEX::Parser::Parser") &amp;copy) = delete

Public Static Functions

#### [` parse `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Parser5parseENSt11string_viewE>)

static std::unique\_ptr&lt;[File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileE> "LIEF::DEX::File")&gt; parse(std::string\_view file)

Parse the DEX file from the file path given in parameter.

#### [` PathTparse `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF3DEX6Parser5parseENSt10unique_ptrI4FileEERK5PathT>)

template&lt;class PathT, enable\_if\_path\_t&lt;[PathT](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF3DEX6Parser5parseENSt10unique_ptrI4FileEERK5PathT> "LIEF::DEX::Parser::parse::PathT")&gt; = 0&gt;  
static inline std::unique\_ptr&lt;[File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileE> "LIEF::DEX::File")&gt; parse(const [PathT](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4I0_16enable_if_path_tI5PathTEEN4LIEF3DEX6Parser5parseENSt10unique_ptrI4FileEERK5PathT> "LIEF::DEX::Parser::parse::PathT") &amp;file)

Same as [parse(std::string\_view)](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Parser_1ad2785a6b2118b193a0e9bd4831740eda>) but the file is given as a `std::filesystem::path`.

#### [` parse `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Parser5parseENSt6vectorI7uint8_tEENSt11string_viewE>)

static std::unique\_ptr&lt;[File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileE> "LIEF::DEX::File")&gt; parse(std::vector&lt;uint8\_t&gt; data, std::string\_view name = "")

---

## [File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#file>)

### [` File `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileE>)

class File : public LIEF::Object

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Class>) that represents a DEX file.

Public Types

#### [` classes_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File9classes_tE>)

using classes\_t = std::unordered\_map&lt;std::string, [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class")\*&gt;

#### [` classes_list_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File14classes_list_tE>)

using classes\_list\_t = std::vector&lt;std::unique\_ptr&lt;[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class")&gt;&gt;

#### [` it_classes `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File10it_classesE>)

using it\_classes = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[classes\_list\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File14classes_list_tE> "LIEF::DEX::File::classes_list_t")&amp;, [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class")\*&gt;

#### [` it_const_classes `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File16it_const_classesE>)

using it\_const\_classes = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [classes\_list\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File14classes_list_tE> "LIEF::DEX::File::classes_list_t")&amp;, const [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class")\*&gt;

#### [` methods_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File9methods_tE>)

using methods\_t = std::vector&lt;std::unique\_ptr&lt;[Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodE> "LIEF::DEX::Method")&gt;&gt;

#### [` it_methods `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File10it_methodsE>)

using it\_methods = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[methods\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File9methods_tE> "LIEF::DEX::File::methods_t")&amp;, [Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodE> "LIEF::DEX::Method")\*&gt;

#### [` it_const_methods `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File16it_const_methodsE>)

using it\_const\_methods = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [methods\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File9methods_tE> "LIEF::DEX::File::methods_t")&amp;, const [Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodE> "LIEF::DEX::Method")\*&gt;

#### [` strings_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File9strings_tE>)

using strings\_t = std::vector&lt;std::unique\_ptr&lt;std::string&gt;&gt;

#### [` it_strings `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File10it_stringsE>)

using it\_strings = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[strings\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File9strings_tE> "LIEF::DEX::File::strings_t")&amp;, std::string\*&gt;

#### [` it_const_strings `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File16it_const_stringsE>)

using it\_const\_strings = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [strings\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File9strings_tE> "LIEF::DEX::File::strings_t")&amp;, const std::string\*&gt;

#### [` types_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File7types_tE>)

using types\_t = std::vector&lt;std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4TypeE> "LIEF::DEX::Type")&gt;&gt;

#### [` it_types `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File8it_typesE>)

using it\_types = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[types\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File7types_tE> "LIEF::DEX::File::types_t")&amp;, [Type](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4TypeE> "LIEF::DEX::Type")\*&gt;

#### [` it_const_types `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File14it_const_typesE>)

using it\_const\_types = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [types\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File7types_tE> "LIEF::DEX::File::types_t")&amp;, const [Type](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4TypeE> "LIEF::DEX::Type")\*&gt;

#### [` prototypes_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File12prototypes_tE>)

using prototypes\_t = std::vector&lt;std::unique\_ptr&lt;[Prototype](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9PrototypeE> "LIEF::DEX::Prototype")&gt;&gt;

#### [` it_prototypes `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File13it_prototypesE>)

using it\_prototypes = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[prototypes\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File12prototypes_tE> "LIEF::DEX::File::prototypes_t")&amp;, [Prototype](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9PrototypeE> "LIEF::DEX::Prototype")\*&gt;

#### [` it_const_prototypes `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File19it_const_prototypesE>)

using it\_const\_prototypes = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [prototypes\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File12prototypes_tE> "LIEF::DEX::File::prototypes_t")&amp;, const [Prototype](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9PrototypeE> "LIEF::DEX::Prototype")\*&gt;

#### [` fields_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File8fields_tE>)

using fields\_t = std::vector&lt;std::unique\_ptr&lt;[Field](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5FieldE> "LIEF::DEX::Field")&gt;&gt;

#### [` it_fields `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File9it_fieldsE>)

using it\_fields = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[fields\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File8fields_tE> "LIEF::DEX::File::fields_t")&amp;, [Field](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5FieldE> "LIEF::DEX::Field")\*&gt;

#### [` it_const_fields `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File15it_const_fieldsE>)

using it\_const\_fields = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [fields\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File8fields_tE> "LIEF::DEX::File::fields_t")&amp;, const [Field](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5FieldE> "LIEF::DEX::Field")\*&gt;

Public Functions

#### [` operator= `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileaSERK4File>)

[File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileE> "LIEF::DEX::File") &amp;operator=(const [File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileE> "LIEF::DEX::File") &amp;copy) = delete

#### [` File `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File4FileERK4File>)

File(const [File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File4FileERK4File> "LIEF::DEX::File::File") &amp;copy) = delete

#### [` version `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File7versionEv>)

dex\_version\_t version() const

Version of the current DEX file.

#### [` name `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File4nameEv>)

std::string\_view name() const

Name of this file.

#### [` name `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File4nameERKNSt6stringE>)

void name(const std::string &amp;name)

#### [` location `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File8locationEv>)

std::string\_view location() const

Location of this file.

#### [` location `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File8locationERKNSt6stringE>)

void location(const std::string &amp;location)

#### [` header `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File6headerEv>)

const [Header](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6HeaderE> "LIEF::DEX::Header") &amp;header() const

DEX header.

#### [` header `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File6headerEv>)

[Header](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6HeaderE> "LIEF::DEX::Header") &amp;header()

#### [` classes `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File7classesEv>)

[it\_const\_classes](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File16it_const_classesE> "LIEF::DEX::File::it_const_classes") classes() const

**All** classes used in the DEX file

#### [` classes `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File7classesEv>)

[it\_classes](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File10it_classesE> "LIEF::DEX::File::it_classes") classes()

#### [` has_class `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File9has_classERKNSt6stringE>)

bool has\_class(const std::string &amp;class\_name) const

Check if the given class name exists.

#### [` get_class `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File9get_classERKNSt6stringE>)

const [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") \*get\_class(const std::string &amp;class\_name) const

Return the [DEX::Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Class>) object associated with the given name.

#### [` get_class `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File9get_classERKNSt6stringE>)

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") \*get\_class(const std::string &amp;class\_name)

#### [` get_class `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File9get_classE6size_t>)

const [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") \*get\_class(size\_t index) const

Return the [DEX::Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Class>) object associated with the given index.

#### [` get_class `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File9get_classE6size_t>)

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") \*get\_class(size\_t index)

#### [` dex2dex_info `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File12dex2dex_infoEv>)

dex2dex\_info\_t dex2dex\_info() const

De-optimize information.

#### [` dex2dex_json_info `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File17dex2dex_json_infoEv>)

std::string dex2dex\_json\_info() const

De-optimize information as JSON.

#### [` methods `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File7methodsEv>)

[it\_const\_methods](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File16it_const_methodsE> "LIEF::DEX::File::it_const_methods") methods() const

Return an iterator over **all** the [DEX::Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Method>) used in this DEX file.

#### [` methods `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File7methodsEv>)

[it\_methods](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File10it_methodsE> "LIEF::DEX::File::it_methods") methods()

#### [` fields `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File6fieldsEv>)

[it\_const\_fields](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File15it_const_fieldsE> "LIEF::DEX::File::it_const_fields") fields() const

Return an iterator over **all** the [DEX::Field](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Field>) used in this DEX file.

#### [` fields `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File6fieldsEv>)

[it\_fields](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File9it_fieldsE> "LIEF::DEX::File::it_fields") fields()

#### [` strings `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File7stringsEv>)

[it\_const\_strings](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File16it_const_stringsE> "LIEF::DEX::File::it_const_strings") strings() const

String pool.

#### [` strings `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File7stringsEv>)

[it\_strings](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File10it_stringsE> "LIEF::DEX::File::it_strings") strings()

#### [` types `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File5typesEv>)

[it\_const\_types](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File14it_const_typesE> "LIEF::DEX::File::it_const_types") types() const

[Type](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Type>) pool.

#### [` types `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File5typesEv>)

[it\_types](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File8it_typesE> "LIEF::DEX::File::it_types") types()

#### [` prototypes `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File10prototypesEv>)

[it\_prototypes](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File13it_prototypesE> "LIEF::DEX::File::it_prototypes") prototypes()

[Prototype](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Prototype>) pool.

#### [` prototypes `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File10prototypesEv>)

[it\_const\_prototypes](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File19it_const_prototypesE> "LIEF::DEX::File::it_const_prototypes") prototypes() const

#### [` map `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File3mapEv>)

const [MapList](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapListE> "LIEF::DEX::MapList") &amp;map() const

DEX Map.

#### [` map `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4File3mapEv>)

[MapList](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapListE> "LIEF::DEX::MapList") &amp;map()

#### [` save `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File4saveERKNSt6stringEb>)

std::string save(const std::string &amp;path = "", bool deoptimize = true) const

Extract the current dex file and deoptimize it.

#### [` raw `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File3rawEb>)

std::vector&lt;uint8\_t&gt; raw(bool deoptimize = true) const

#### [` accept `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4File6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~File `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileD0Ev>)

~File() override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FilelsERNSt7ostreamERK4File>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4FileE> "LIEF::DEX::File") &amp;file)

---

## [Header](<https://lief.re/doc/latest/formats/android/dex/cpp.html#header>)

### [` Header `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6HeaderE>)

class Header : public LIEF::Object

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Class>) which represents the DEX header. This is the first structure that begins the DEX format.

The official documentation is provided here: [https://source.android.com/devices/tech/dalvik/dex-format#header-item](<https://source.android.com/devices/tech/dalvik/dex-format#header-item>)

Public Types

#### [` location_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Header10location_tE>)

using location\_t = std::pair&lt;uint32\_t, uint32\_t&gt;

#### [` magic_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Header7magic_tE>)

using magic\_t = std::array&lt;uint8\_t, 8&gt;

#### [` signature_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Header11signature_tE>)

using signature\_t = std::array&lt;uint8\_t, 20&gt;

Public Functions

#### [` Header `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Header6HeaderEv>)

Header()

#### [` Header `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Header6HeaderERK6Header>)

Header(const [Header](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Header6HeaderERK6Header> "LIEF::DEX::Header::Header")&amp;)

#### [` operator= `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6HeaderaSERK6Header>)

[Header](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6HeaderE> "LIEF::DEX::Header") &amp;operator=(const [Header](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6HeaderE> "LIEF::DEX::Header")&amp;)

#### [` THeader `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4I0EN4LIEF3DEX6Header6HeaderERK1T>)

template&lt;class T&gt;  
Header(const [T](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4I0EN4LIEF3DEX6Header6HeaderERK1T> "LIEF::DEX::Header::Header::T") &amp;header)

#### [` magic `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header5magicEv>)

[magic\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Header7magic_tE> "LIEF::DEX::Header::magic_t") magic() const

The DEX magic bytes (`DEX\n` followed by the DEX version).

#### [` checksum `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header8checksumEv>)

uint32\_t checksum() const

The file checksum.

#### [` signature `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header9signatureEv>)

[signature\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Header11signature_tE> "LIEF::DEX::Header::signature_t") signature() const

SHA-1 DEX signature (which is not really used as a signature).

#### [` file_size `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header9file_sizeEv>)

uint32\_t file\_size() const

Size of the entire file (including the current the header).

#### [` header_size `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header11header_sizeEv>)

uint32\_t header\_size() const

Size of this header. It should be 0x70.

#### [` endian_tag `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header10endian_tagEv>)

uint32\_t endian\_tag() const

[File](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1File>) endianness of the file.

#### [` map `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header3mapEv>)

uint32\_t map() const

Offset from the start of the file to the map list (see: [DEX::MapList](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1MapList>)).

#### [` strings `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header7stringsEv>)

[location\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Header10location_tE> "LIEF::DEX::Header::location_t") strings() const

Offset and size of the string pool.

#### [` link `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header4linkEv>)

[location\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Header10location_tE> "LIEF::DEX::Header::location_t") link() const

#### [` types `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header5typesEv>)

[location\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Header10location_tE> "LIEF::DEX::Header::location_t") types() const

#### [` prototypes `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header10prototypesEv>)

[location\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Header10location_tE> "LIEF::DEX::Header::location_t") prototypes() const

#### [` fields `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header6fieldsEv>)

[location\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Header10location_tE> "LIEF::DEX::Header::location_t") fields() const

#### [` methods `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header7methodsEv>)

[location\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Header10location_tE> "LIEF::DEX::Header::location_t") methods() const

#### [` classes `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header7classesEv>)

[location\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Header10location_tE> "LIEF::DEX::Header::location_t") classes() const

#### [` data `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header4dataEv>)

[location\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Header10location_tE> "LIEF::DEX::Header::location_t") data() const

#### [` nb_classes `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header10nb_classesEv>)

uint32\_t nb\_classes() const

#### [` nb_methods `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header10nb_methodsEv>)

uint32\_t nb\_methods() const

#### [` accept `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Header6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~Header `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6HeaderD0Ev>)

~Header() override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6HeaderlsERNSt7ostreamERK6Header>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Header](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6HeaderE> "LIEF::DEX::Header") &amp;hdr)

---

## [Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#method>)

### [` Method `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodE>)

class Method : public LIEF::Object

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Class>) which represents a [DEX::Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Method>).

Public Types

#### [` access_flags_list_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Method19access_flags_list_tE>)

using access\_flags\_list\_t = std::vector&lt;ACCESS\_FLAGS&gt;

#### [` bytecode_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Method10bytecode_tE>)

using bytecode\_t = std::vector&lt;uint8\_t&gt;

Public Functions

#### [` Method `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Method6MethodEv>)

Method()

#### [` Method `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Method6MethodENSt6stringEP5Class>)

Method(std::string name, [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") \*parent = nullptr)

#### [` Method `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Method6MethodERK6Method>)

Method(const [Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Method6MethodERK6Method> "LIEF::DEX::Method::Method")&amp;)

#### [` operator= `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodaSERK6Method>)

[Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodE> "LIEF::DEX::Method") &amp;operator=(const [Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodE> "LIEF::DEX::Method")&amp;)

#### [` name `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Method4nameEv>)

std::string\_view name() const

Name of the [Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Method>).

#### [` has_class `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Method9has_classEv>)

bool has\_class() const

True if a class is associated with this method.

#### [` cls `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Method3clsEv>)

const [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") \*cls() const

[DEX::Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Class>) associated with this [Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Method>) or a nullptr if not resolved.

#### [` cls `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Method3clsEv>)

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") \*cls()

#### [` code_offset `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Method11code_offsetEv>)

uint64\_t code\_offset() const

Offset to the Dalvik Bytecode.

#### [` bytecode `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Method8bytecodeEv>)

const [bytecode\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Method10bytecode_tE> "LIEF::DEX::Method::bytecode_t") &amp;bytecode() const

Dalvik Bytecode as bytes.

#### [` index `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Method5indexEv>)

size\_t index() const

Index in the DEX Methods pool.

#### [` is_virtual `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Method10is_virtualEv>)

bool is\_virtual() const

True if this method is a virtual one. i.e. not **static**, **private**, **final** or constructor.

#### [` prototype `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Method9prototypeEv>)

const [Prototype](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9PrototypeE> "LIEF::DEX::Prototype") \*prototype() const

[Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Method>)’s prototype or a nullptr if it is not resolved.

#### [` prototype `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Method9prototypeEv>)

[Prototype](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9PrototypeE> "LIEF::DEX::Prototype") \*prototype()

#### [` insert_dex2dex_info `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Method19insert_dex2dex_infoE8uint32_t8uint32_t>)

void insert\_dex2dex\_info(uint32\_t pc, uint32\_t index)

#### [` accept `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Method6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` dex2dex_info `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Method12dex2dex_infoEv>)

const dex2dex\_method\_info\_t &amp;dex2dex\_info() const

#### [` has `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Method3hasE12ACCESS_FLAGS>)

bool has(ACCESS\_FLAGS f) const

Check if the current method has the given ACCESS\_FLAGS.

#### [` access_flags `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Method12access_flagsEv>)

[access\_flags\_list\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6Method19access_flags_list_tE> "LIEF::DEX::Method::access_flags_list_t") access\_flags() const

ACCESS\_FLAGS as an std::set.

#### [` code_info `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX6Method9code_infoEv>)

const [CodeInfo](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX8CodeInfoE> "LIEF::DEX::CodeInfo") &amp;code\_info() const

#### [` ~Method `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodD0Ev>)

~Method() override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodlsERNSt7ostreamERK6Method>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodE> "LIEF::DEX::Method") &amp;mtd)

---

## [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#class>)

### [` Class `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE>)

class Class : public LIEF::Object

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Class>) which represents a DEX [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Class>) (i.e. a Java/Kotlin class).

Public Types

#### [` access_flags_list_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class19access_flags_list_tE>)

using access\_flags\_list\_t = std::vector&lt;ACCESS\_FLAGS&gt;

#### [` methods_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class9methods_tE>)

using methods\_t = std::vector&lt;[Method](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX6MethodE> "LIEF::DEX::Method")\*&gt;

#### [` it_methods `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class10it_methodsE>)

using it\_methods = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[methods\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class9methods_tE> "LIEF::DEX::Class::methods_t")&amp;&gt;

#### [` it_const_methods `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class16it_const_methodsE>)

using it\_const\_methods = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [methods\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class9methods_tE> "LIEF::DEX::Class::methods_t")&amp;&gt;

#### [` fields_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class8fields_tE>)

using fields\_t = std::vector&lt;[Field](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5FieldE> "LIEF::DEX::Field")\*&gt;

#### [` it_fields `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class9it_fieldsE>)

using it\_fields = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[fields\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class8fields_tE> "LIEF::DEX::Class::fields_t")&amp;&gt;

#### [` it_const_fields `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class15it_const_fieldsE>)

using it\_const\_fields = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [fields\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class8fields_tE> "LIEF::DEX::Class::fields_t")&amp;&gt;

#### [` it_named_methods `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class16it_named_methodsE>)

using it\_named\_methods = [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator")&lt;[methods\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class9methods_tE> "LIEF::DEX::Class::methods_t")&amp;&gt;

#### [` it_const_named_methods `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class22it_const_named_methodsE>)

using it\_const\_named\_methods = [const\_filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator")&lt;const [methods\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class9methods_tE> "LIEF::DEX::Class::methods_t")&amp;&gt;

#### [` it_named_fields `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class15it_named_fieldsE>)

using it\_named\_fields = [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator")&lt;[fields\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class8fields_tE> "LIEF::DEX::Class::fields_t")&amp;&gt;

#### [` it_const_named_fields `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class21it_const_named_fieldsE>)

using it\_const\_named\_fields = [const\_filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator")&lt;const [fields\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class8fields_tE> "LIEF::DEX::Class::fields_t")&amp;&gt;

Public Functions

#### [` Class `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class5ClassEv>)

Class()

#### [` Class `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class5ClassERK5Class>)

Class(const [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class5ClassERK5Class> "LIEF::DEX::Class::Class")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassaSERK5Class>)

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") &amp;operator=(const [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class")&amp;) = delete

#### [` Class `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class5ClassENSt6stringE8uint32_tP5ClassNSt6stringE>)

Class(std::string fullname, uint32\_t access\_flags = ACCESS\_FLAGS::ACC\_UNKNOWN, [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class5ClassENSt6stringE8uint32_tP5ClassNSt6stringE> "LIEF::DEX::Class::Class") \*parent = nullptr, std::string source\_filename = "")

#### [` fullname `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Class8fullnameEv>)

std::string\_view fullname() const

Mangled class name (e.g. `Lcom/example/android/MyActivity;`).

#### [` package_name `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Class12package_nameEv>)

std::string package\_name() const

Package Name.

#### [` name `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Class4nameEv>)

std::string name() const

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Class>) name.

#### [` pretty_name `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Class11pretty_nameEv>)

std::string pretty\_name() const

Demangled class name.

#### [` has `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Class3hasE12ACCESS_FLAGS>)

bool has(ACCESS\_FLAGS f) const

Check if the class has the given access flag.

#### [` access_flags `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Class12access_flagsEv>)

[access\_flags\_list\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class19access_flags_list_tE> "LIEF::DEX::Class::access_flags_list_t") access\_flags() const

Access flags used by this class.

#### [` source_filename `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Class15source_filenameEv>)

std::string\_view source\_filename() const

Filename associated with this class (if any).

#### [` has_parent `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Class10has_parentEv>)

bool has\_parent() const

True if the current class extends another one.

#### [` parent `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Class6parentEv>)

const [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") \*parent() const

Parent class.

#### [` parent `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class6parentEv>)

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") \*parent()

#### [` methods `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Class7methodsEv>)

[it\_const\_methods](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class16it_const_methodsE> "LIEF::DEX::Class::it_const_methods") methods() const

Methods implemented in this class.

#### [` methods `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class7methodsEv>)

[it\_methods](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class10it_methodsE> "LIEF::DEX::Class::it_methods") methods()

#### [` methods `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class7methodsERKNSt6stringE>)

[it\_named\_methods](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class16it_named_methodsE> "LIEF::DEX::Class::it_named_methods") methods(const std::string &amp;name)

Return Methods having the given name.

#### [` methods `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Class7methodsERKNSt6stringE>)

[it\_const\_named\_methods](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class22it_const_named_methodsE> "LIEF::DEX::Class::it_const_named_methods") methods(const std::string &amp;name) const

#### [` fields `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Class6fieldsEv>)

[it\_const\_fields](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class15it_const_fieldsE> "LIEF::DEX::Class::it_const_fields") fields() const

Fields implemented in this class.

#### [` fields `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class6fieldsEv>)

[it\_fields](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class9it_fieldsE> "LIEF::DEX::Class::it_fields") fields()

#### [` fields `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class6fieldsERKNSt6stringE>)

[it\_named\_fields](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class15it_named_fieldsE> "LIEF::DEX::Class::it_named_fields") fields(const std::string &amp;name)

Return Fields having the given name.

#### [` fields `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Class6fieldsERKNSt6stringE>)

[it\_const\_named\_fields](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class21it_const_named_fieldsE> "LIEF::DEX::Class::it_const_named_fields") fields(const std::string &amp;name) const

#### [` dex2dex_info `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Class12dex2dex_infoEv>)

dex2dex\_class\_info\_t dex2dex\_info() const

De-optimize information.

#### [` index `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Class5indexEv>)

size\_t index() const

Original index in the DEX class pool.

#### [` accept `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Class6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~Class `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassD0Ev>)

~Class() override

Public Static Functions

#### [` package_normalized `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class18package_normalizedERKNSt6stringE>)

static std::string package\_normalized(const std::string &amp;pkg\_name)

#### [` fullname_normalized `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class19fullname_normalizedERKNSt6stringE>)

static std::string fullname\_normalized(const std::string &amp;pkg\_cls)

#### [` fullname_normalized `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Class19fullname_normalizedERKNSt6stringERKNSt6stringE>)

static std::string fullname\_normalized(const std::string &amp;pkg, const std::string &amp;cls\_name)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClasslsERNSt7ostreamERK5Class>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") &amp;cls)

---

## [Field](<https://lief.re/doc/latest/formats/android/dex/cpp.html#field>)

### [` Field `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5FieldE>)

class Field : public LIEF::Object

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Class>) which represents a DEX [Field](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Field>).

Public Types

#### [` access_flags_list_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Field19access_flags_list_tE>)

using access\_flags\_list\_t = std::vector&lt;ACCESS\_FLAGS&gt;

Public Functions

#### [` Field `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Field5FieldEv>)

Field()

#### [` Field `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Field5FieldENSt6stringEP5Class>)

Field(std::string name, [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") \*parent = nullptr)

#### [` Field `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Field5FieldERK5Field>)

Field(const [Field](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Field5FieldERK5Field> "LIEF::DEX::Field::Field")&amp;)

#### [` operator= `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5FieldaSERK5Field>)

[Field](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5FieldE> "LIEF::DEX::Field") &amp;operator=(const [Field](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5FieldE> "LIEF::DEX::Field")&amp;)

#### [` name `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Field4nameEv>)

std::string\_view name() const

Name of the [Field](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Field>).

#### [` has_class `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Field9has_classEv>)

bool has\_class() const

True if a class is associated with this field (which should be the case).

#### [` cls `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Field3clsEv>)

const [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") \*cls() const

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Class>) associated with this [Field](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Field>).

#### [` cls `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Field3clsEv>)

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") \*cls()

#### [` index `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Field5indexEv>)

size\_t index() const

Index in the DEX Fields pool.

#### [` is_static `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Field9is_staticEv>)

bool is\_static() const

True if this field is a static one.

#### [` type `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Field4typeEv>)

const [Type](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4TypeE> "LIEF::DEX::Type") \*type() const

[Field](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Field>)’s prototype.

#### [` type `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Field4typeEv>)

[Type](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4TypeE> "LIEF::DEX::Type") \*type()

#### [` accept `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Field6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` has `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Field3hasE12ACCESS_FLAGS>)

bool has(ACCESS\_FLAGS f) const

Check if the field has the given ACCESS\_FLAGS.

#### [` access_flags `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX5Field12access_flagsEv>)

[access\_flags\_list\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5Field19access_flags_list_tE> "LIEF::DEX::Field::access_flags_list_t") access\_flags() const

ACCESS\_FLAGS as a list.

#### [` ~Field `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5FieldD0Ev>)

~Field() override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5FieldlsERNSt7ostreamERK5Field>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Field](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5FieldE> "LIEF::DEX::Field") &amp;mtd)

---

## [Code Info](<https://lief.re/doc/latest/formats/android/dex/cpp.html#code-info>)

### [` CodeInfo `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX8CodeInfoE>)

class CodeInfo : public LIEF::Object

Public Functions

#### [` CodeInfo `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX8CodeInfo8CodeInfoEv>)

CodeInfo()

#### [` CodeInfo `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX8CodeInfo8CodeInfoERKN7details9code_itemE>)

CodeInfo(const details::code\_item &amp;codeitem)

#### [` CodeInfo `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX8CodeInfo8CodeInfoERK8CodeInfo>)

CodeInfo(const [CodeInfo](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX8CodeInfo8CodeInfoERK8CodeInfo> "LIEF::DEX::CodeInfo::CodeInfo")&amp;)

#### [` operator= `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX8CodeInfoaSERK8CodeInfo>)

[CodeInfo](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX8CodeInfoE> "LIEF::DEX::CodeInfo") &amp;operator=(const [CodeInfo](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX8CodeInfoE> "LIEF::DEX::CodeInfo")&amp;)

#### [` accept `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX8CodeInfo6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` nb_registers `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX8CodeInfo12nb_registersEv>)

uint16\_t nb\_registers() const

#### [` ~CodeInfo `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX8CodeInfoD0Ev>)

~CodeInfo() override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX8CodeInfolsERNSt7ostreamERK8CodeInfo>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [CodeInfo](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX8CodeInfoE> "LIEF::DEX::CodeInfo") &amp;cinfo)

---

## [Prototype](<https://lief.re/doc/latest/formats/android/dex/cpp.html#prototype>)

### [` Prototype `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9PrototypeE>)

class Prototype : public LIEF::Object

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Class>) which represents a DEX method prototype.

Public Types

#### [` parameters_type_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9Prototype17parameters_type_tE>)

using parameters\_type\_t = std::vector&lt;[Type](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4TypeE> "LIEF::DEX::Type")\*&gt;

#### [` it_params `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9Prototype9it_paramsE>)

using it\_params = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[parameters\_type\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9Prototype17parameters_type_tE> "LIEF::DEX::Prototype::parameters_type_t")&gt;

#### [` it_const_params `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9Prototype15it_const_paramsE>)

using it\_const\_params = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;const [parameters\_type\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9Prototype17parameters_type_tE> "LIEF::DEX::Prototype::parameters_type_t")&gt;

Public Functions

#### [` Prototype `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9Prototype9PrototypeEv>)

Prototype()

#### [` Prototype `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9Prototype9PrototypeERK9Prototype>)

Prototype(const [Prototype](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9Prototype9PrototypeERK9Prototype> "LIEF::DEX::Prototype::Prototype") &amp;other)

#### [` return_type `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX9Prototype11return_typeEv>)

const [Type](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4TypeE> "LIEF::DEX::Type") \*return\_type() const

[Type](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Type>) returned or a nullptr if not resolved.

#### [` return_type `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9Prototype11return_typeEv>)

[Type](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4TypeE> "LIEF::DEX::Type") \*return\_type()

#### [` parameters_type `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX9Prototype15parameters_typeEv>)

[it\_const\_params](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9Prototype15it_const_paramsE> "LIEF::DEX::Prototype::it_const_params") parameters\_type() const

Types of the parameters.

#### [` parameters_type `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9Prototype15parameters_typeEv>)

[it\_params](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9Prototype9it_paramsE> "LIEF::DEX::Prototype::it_params") parameters\_type()

#### [` accept `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX9Prototype6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~Prototype `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9PrototypeD0Ev>)

~Prototype() override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9PrototypelsERNSt7ostreamERK9Prototype>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Prototype](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX9PrototypeE> "LIEF::DEX::Prototype") &amp;type)

---

## [Type](<https://lief.re/doc/latest/formats/android/dex/cpp.html#type>)

### [` Type `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4TypeE>)

class Type : public LIEF::Object

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Class>) which represents a DEX type as described in the format specifications: [https://source.android.com/devices/tech/dalvik/dex-format#typedescriptor](<https://source.android.com/devices/tech/dalvik/dex-format#typedescriptor>).

Public Types

#### [` TYPES `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type5TYPESE>)

enum class TYPES

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type5TYPES7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` PRIMITIVE `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type5TYPES9PRIMITIVEE>)

enumerator PRIMITIVE = 1

##### [` CLASS `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type5TYPES5CLASSE>)

enumerator CLASS = 2

##### [` ARRAY `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type5TYPES5ARRAYE>)

enumerator ARRAY = 3

#### [` PRIMITIVES `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type10PRIMITIVESE>)

enum class PRIMITIVES

*Values:*

##### [` VOID_T `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type10PRIMITIVES6VOID_TE>)

enumerator VOID\_T = 0x01

##### [` BOOLEAN `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type10PRIMITIVES7BOOLEANE>)

enumerator BOOLEAN = 0x02

##### [` BYTE `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type10PRIMITIVES4BYTEE>)

enumerator BYTE = 0x03

##### [` SHORT `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type10PRIMITIVES5SHORTE>)

enumerator SHORT = 0x04

##### [` CHAR `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type10PRIMITIVES4CHARE>)

enumerator CHAR = 0x05

##### [` INT `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type10PRIMITIVES3INTE>)

enumerator INT = 0x06

##### [` LONG `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type10PRIMITIVES4LONGE>)

enumerator LONG = 0x07

##### [` FLOAT `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type10PRIMITIVES5FLOATE>)

enumerator FLOAT = 0x08

##### [` DOUBLE `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type10PRIMITIVES6DOUBLEE>)

enumerator DOUBLE = 0x09

#### [` array_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type7array_tE>)

using array\_t = std::vector&lt;[Type](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4TypeE> "LIEF::DEX::Type")&gt;

Public Functions

#### [` Type `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type4TypeEv>)

Type()

#### [` Type `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type4TypeERKNSt6stringE>)

Type(const std::string &amp;mangled)

#### [` Type `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type4TypeERK4Type>)

Type(const [Type](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type4TypeERK4Type> "LIEF::DEX::Type::Type") &amp;other)

#### [` type `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4Type4typeEv>)

[TYPES](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type5TYPESE> "LIEF::DEX::Type::TYPES") type() const

Whether it is a primitive type, a class, …

#### [` cls `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4Type3clsEv>)

const [Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") &amp;cls() const

#### [` array `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4Type5arrayEv>)

const [array\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type7array_tE> "LIEF::DEX::Type::array_t") &amp;array() const

#### [` primitive `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4Type9primitiveEv>)

const [PRIMITIVES](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type10PRIMITIVESE> "LIEF::DEX::Type::PRIMITIVES") &amp;primitive() const

#### [` cls `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type3clsEv>)

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX5ClassE> "LIEF::DEX::Class") &amp;cls()

**IF** the current type is a [TYPES::CLASS](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Type_1ae4fe3cf276b8f8171973fdc031941962ac18e8f1f430ea227dbd63d0d9a2bc5fb>), return the associated DEX::CLASS. Otherwise, the returned value is **undefined**.

#### [` array `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type5arrayEv>)

[array\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type7array_tE> "LIEF::DEX::Type::array_t") &amp;array()

**IF** the current type is a [TYPES::ARRAY](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Type_1ae4fe3cf276b8f8171973fdc031941962acb4fb1757fb37c43cded35d3eb857c43>), return the associated array. Otherwise, the returned value is **undefined**.

#### [` primitive `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type9primitiveEv>)

[PRIMITIVES](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type10PRIMITIVESE> "LIEF::DEX::Type::PRIMITIVES") &amp;primitive()

**IF** the current type is a [TYPES::PRIMITIVE](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Type_1ae4fe3cf276b8f8171973fdc031941962a9a309e28bf2bba93d9a684d5f5abe257>), return the associated [PRIMITIVES](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Type_1a22d167e5b4ee1f74444408a2ce2c3a88>). Otherwise, the returned value is **undefined**.

#### [` dim `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4Type3dimEv>)

size\_t dim() const

Return the array dimension if the current type is an array. Otherwise, it returns 0.

#### [` underlying_array_type `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4Type21underlying_array_typeEv>)

const [Type](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4TypeE> "LIEF::DEX::Type") &amp;underlying\_array\_type() const

In the case of a [TYPES::ARRAY](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Type_1ae4fe3cf276b8f8171973fdc031941962acb4fb1757fb37c43cded35d3eb857c43>), return the array’s type.

#### [` underlying_array_type `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type21underlying_array_typeEv>)

[Type](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4TypeE> "LIEF::DEX::Type") &amp;underlying\_array\_type()

#### [` accept `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX4Type6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~Type `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4TypeD0Ev>)

~Type() override

Public Static Functions

#### [` pretty_name `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type11pretty_nameE10PRIMITIVES>)

static std::string pretty\_name([PRIMITIVES](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4Type10PRIMITIVESE> "LIEF::DEX::Type::PRIMITIVES") p)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4TypelsERNSt7ostreamERK4Type>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Type](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX4TypeE> "LIEF::DEX::Type") &amp;type)

---

## [MapList](<https://lief.re/doc/latest/formats/android/dex/cpp.html#maplist>)

### [` MapList `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapListE>)

class MapList : public LIEF::Object

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Class>) which represents the `map_list` structure that follows the main DEX header.

This [MapList](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1MapList>) aims at referencing the location of other DEX structures as described in [https://source.android.com/devices/tech/dalvik/dex-format#map-item](<https://source.android.com/devices/tech/dalvik/dex-format#map-item>)

Public Types

#### [` items_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapList7items_tE>)

using items\_t = std::map&lt;[MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE> "LIEF::DEX::MapItem")::[TYPES](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPESE> "LIEF::DEX::MapItem::TYPES"), [MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE> "LIEF::DEX::MapItem")&gt;

#### [` it_items_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapList10it_items_tE>)

using it\_items\_t = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;std::vector&lt;[MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE> "LIEF::DEX::MapItem")\*&gt;&gt;

#### [` it_const_items_t `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapList16it_const_items_tE>)

using it\_const\_items\_t = [const\_ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator")&lt;std::vector&lt;[MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE> "LIEF::DEX::MapItem")\*&gt;&gt;

Public Functions

#### [` MapList `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapList7MapListEv>)

MapList()

#### [` MapList `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapList7MapListERK7MapList>)

MapList(const [MapList](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapList7MapListERK7MapList> "LIEF::DEX::MapList::MapList")&amp;)

#### [` operator= `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapListaSERK7MapList>)

[MapList](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapListE> "LIEF::DEX::MapList") &amp;operator=(const [MapList](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapListE> "LIEF::DEX::MapList")&amp;)

#### [` items `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapList5itemsEv>)

[it\_items\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapList10it_items_tE> "LIEF::DEX::MapList::it_items_t") items()

Iterator over [LIEF::DEX::MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1MapItem>).

#### [` items `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX7MapList5itemsEv>)

[it\_const\_items\_t](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapList16it_const_items_tE> "LIEF::DEX::MapList::it_const_items_t") items() const

#### [` has `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX7MapList3hasEN7MapItem5TYPESE>)

bool has([MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE> "LIEF::DEX::MapItem")::[TYPES](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPESE> "LIEF::DEX::MapItem::TYPES") type) const

Check if the given type exists.

#### [` get `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX7MapList3getEN7MapItem5TYPESE>)

const [MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE> "LIEF::DEX::MapItem") &amp;get([MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE> "LIEF::DEX::MapItem")::[TYPES](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPESE> "LIEF::DEX::MapItem::TYPES") type) const

Return the [LIEF::DEX::MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1MapItem>) associated with the given type.

#### [` get `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapList3getEN7MapItem5TYPESE>)

[MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE> "LIEF::DEX::MapItem") &amp;get([MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE> "LIEF::DEX::MapItem")::[TYPES](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPESE> "LIEF::DEX::MapItem::TYPES") type)

Return the [LIEF::DEX::MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1MapItem>) associated with the given type.

#### [` operator[] `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX7MapListixEN7MapItem5TYPESE>)

const [MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE> "LIEF::DEX::MapItem") &amp;operator[]([MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE> "LIEF::DEX::MapItem")::[TYPES](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPESE> "LIEF::DEX::MapItem::TYPES") type) const

Return the [LIEF::DEX::MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1MapItem>) associated with the given type.

#### [` operator[] `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapListixEN7MapItem5TYPESE>)

[MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE> "LIEF::DEX::MapItem") &amp;operator[]([MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE> "LIEF::DEX::MapItem")::[TYPES](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPESE> "LIEF::DEX::MapItem::TYPES") type)

Return the [LIEF::DEX::MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1MapItem>) associated with the given type.

#### [` accept `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX7MapList6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~MapList `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapListD0Ev>)

~MapList() override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapListlsERNSt7ostreamERK7MapList>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [MapList](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapListE> "LIEF::DEX::MapList") &amp;mtd)

---

## [MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#mapitem>)

### [` MapItem `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE>)

class MapItem : public LIEF::Object

[Class](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1Class>) which represents an element of the [MapList](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1MapList>) object.

Public Types

#### [` TYPES `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPESE>)

enum class TYPES : uint16\_t

*Values:*

##### [` HEADER `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES6HEADERE>)

enumerator HEADER = 0x0000

##### [` STRING_ID `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES9STRING_IDE>)

enumerator STRING\_ID = 0x0001

##### [` TYPE_ID `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES7TYPE_IDE>)

enumerator TYPE\_ID = 0x0002

##### [` PROTO_ID `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES8PROTO_IDE>)

enumerator PROTO\_ID = 0x0003

##### [` FIELD_ID `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES8FIELD_IDE>)

enumerator FIELD\_ID = 0x0004

##### [` METHOD_ID `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES9METHOD_IDE>)

enumerator METHOD\_ID = 0x0005

##### [` CLASS_DEF `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES9CLASS_DEFE>)

enumerator CLASS\_DEF = 0x0006

##### [` CALL_SITE_ID `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES12CALL_SITE_IDE>)

enumerator CALL\_SITE\_ID = 0x0007

##### [` METHOD_HANDLE `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES13METHOD_HANDLEE>)

enumerator METHOD\_HANDLE = 0x0008

##### [` MAP_LIST `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES8MAP_LISTE>)

enumerator MAP\_LIST = 0x1000

##### [` TYPE_LIST `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES9TYPE_LISTE>)

enumerator TYPE\_LIST = 0x1001

##### [` ANNOTATION_SET_REF_LIST `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES23ANNOTATION_SET_REF_LISTE>)

enumerator ANNOTATION\_SET\_REF\_LIST = 0x1002

##### [` ANNOTATION_SET `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES14ANNOTATION_SETE>)

enumerator ANNOTATION\_SET = 0x1003

##### [` CLASS_DATA `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES10CLASS_DATAE>)

enumerator CLASS\_DATA = 0x2000

##### [` CODE `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES4CODEE>)

enumerator CODE = 0x2001

##### [` STRING_DATA `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES11STRING_DATAE>)

enumerator STRING\_DATA = 0x2002

##### [` DEBUG_INFO `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES10DEBUG_INFOE>)

enumerator DEBUG\_INFO = 0x2003

##### [` ANNOTATION `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES10ANNOTATIONE>)

enumerator ANNOTATION = 0x2004

##### [` ENCODED_ARRAY `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES13ENCODED_ARRAYE>)

enumerator ENCODED\_ARRAY = 0x2005

##### [` ANNOTATIONS_DIRECTORY `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPES21ANNOTATIONS_DIRECTORYE>)

enumerator ANNOTATIONS\_DIRECTORY = 0x2006

Public Functions

#### [` MapItem `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem7MapItemEv>)

MapItem()

#### [` MapItem `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem7MapItemE5TYPES8uint32_t8uint32_t8uint16_t>)

MapItem([TYPES](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPESE> "LIEF::DEX::MapItem::TYPES") type, uint32\_t offset, uint32\_t size, uint16\_t reserved = 0)

#### [` MapItem `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem7MapItemERK7MapItem>)

MapItem(const [MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem7MapItemERK7MapItem> "LIEF::DEX::MapItem::MapItem")&amp;)

#### [` operator= `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemaSERK7MapItem>)

[MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE> "LIEF::DEX::MapItem") &amp;operator=(const [MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE> "LIEF::DEX::MapItem")&amp;)

#### [` type `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX7MapItem4typeEv>)

[TYPES](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItem5TYPESE> "LIEF::DEX::MapItem::TYPES") type() const

The type of the item.

#### [` reserved `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX7MapItem8reservedEv>)

uint16\_t reserved() const

Reserved value (likely for alignment purpose).

#### [` size `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX7MapItem4sizeEv>)

uint32\_t size() const

The number of elements (the real meaning depends on the type).

#### [` offset `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX7MapItem6offsetEv>)

uint32\_t offset() const

Offset from the start of the DEX file to the items associated with the underlying [TYPES](<https://lief.re/doc/latest/formats/android/dex/cpp.html#classLIEF_1_1DEX_1_1MapItem_1ad64aa4c8f9654075f53a9940a957f538>).

#### [` accept `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4NK4LIEF3DEX7MapItem6acceptER7Visitor>)

virtual void accept(Visitor &amp;visitor) const override

#### [` ~MapItem `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemD0Ev>)

~MapItem() override

Friends

#### [` operator<< `](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemlsERNSt7ostreamERK7MapItem>)

friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [MapItem](<https://lief.re/doc/latest/formats/android/dex/cpp.html#_CPPv4N4LIEF3DEX7MapItemE> "LIEF::DEX::MapItem") &amp;item)
