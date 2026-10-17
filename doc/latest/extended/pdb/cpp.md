---
documentID: "f9ecd9575abf7930cc73d9203870d4426629bb62508511b10066da37ce533cfe"
docname: "extended/pdb/cpp"
title: "PDB C++ API - LIEF Documentation"
description: "PDB C++ API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/extended/pdb/cpp.html"
markdownURL: "https://lief.re/doc/latest/extended/pdb/cpp.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "8058532088c904c8d8fece507ff177433d3a33f9d6ddfdb20af7005287f471fc"
---

# [C++](<https://lief.re/doc/latest/extended/pdb/cpp.html#c>)

> **Note**
> 
> You can also find the Doxygen documentation here: [here](<https://lief.re/doc/latest/doxygen/>)

## [` LIEF::pdb::load `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4loadENSt11string_viewE>)

inline std::unique\_ptr&lt;[DebugInfo](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfoE> "LIEF::pdb::DebugInfo")&gt; LIEF::pdb::load(std::string\_view pdb\_path)

Load the PDB file from the given path.

## [DebugInfo](<https://lief.re/doc/latest/extended/pdb/cpp.html#debuginfo>)

### [` DebugInfo `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfoE>)

class DebugInfo : public LIEF::[DebugInfo](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF9DebugInfoE> "LIEF::DebugInfo")

This class provides an interface for PDB files. One can instantiate this class using [LIEF::pdb::load()](<https://lief.re/doc/latest/extended/pdb/cpp.html#namespaceLIEF_1_1pdb_1a7727ecafe50e89b819f8988014ff9b5f>) or [LIEF::pdb::DebugInfo::from\_file](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1DebugInfo_1a40323bf770f1a03ce31d05efc6c156b0>).

Public Types

#### [` compilation_units_it `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfo20compilation_units_itE>)

using compilation\_units\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[CompilationUnit](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnitE> "LIEF::pdb::CompilationUnit")::[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorE> "LIEF::pdb::CompilationUnit::Iterator")&gt;

Iterator over the [CompilationUnit](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1CompilationUnit>).

#### [` public_symbols_it `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfo17public_symbols_itE>)

using public\_symbols\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[PublicSymbol](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbolE> "LIEF::pdb::PublicSymbol")::[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratorE> "LIEF::pdb::PublicSymbol::Iterator")&gt;

Iterator over the symbols located in the PDB public symbol stream.

#### [` types_it `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfo8types_itE>)

using types\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")::[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratorE> "LIEF::pdb::Type::Iterator")&gt;

Iterator over the PDB’s types.

Public Functions

#### [` format `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb9DebugInfo6formatEv>)

inline virtual FORMAT format() const override

#### [` compilation_units `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb9DebugInfo17compilation_unitsEv>)

[compilation\_units\_it](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfo20compilation_units_itE> "LIEF::pdb::DebugInfo::compilation_units_it") compilation\_units() const

Iterator over the [CompilationUnit](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1CompilationUnit>) from the PDB’s DBI stream. [CompilationUnit](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1CompilationUnit>) are also named “Module” in the PDB’s official documentation.

#### [` public_symbols `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb9DebugInfo14public_symbolsEv>)

[public\_symbols\_it](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfo17public_symbols_itE> "LIEF::pdb::DebugInfo::public_symbols_it") public\_symbols() const

Return an iterator over the public symbol stream.

#### [` types `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb9DebugInfo5typesEv>)

[types\_it](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfo8types_itE> "LIEF::pdb::DebugInfo::types_it") types() const

Return an iterator over the different types registered in this PDB.

#### [` find_type `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb9DebugInfo9find_typeENSt11string_viewE>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")&gt; find\_type(std::string\_view name) const

Find the type with the given name.

#### [` find_type `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb9DebugInfo9find_typeE8uint32_t>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")&gt; find\_type(uint32\_t index) const

Find the type at the given index.

#### [` find_public_symbol `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb9DebugInfo18find_public_symbolENSt11string_viewE>)

std::unique\_ptr&lt;[PublicSymbol](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbolE> "LIEF::pdb::PublicSymbol")&gt; find\_public\_symbol(std::string\_view name) const

Try to find the [PublicSymbol](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1PublicSymbol>) from the given name (based on the public symbol stream).

The function returns a nullptr if the symbol can’t be found

```cpp
const DebugInfo& info = ...;
if (auto found = info.find_public_symbol("MiSyncSystemPdes")) {
  // FOUND!
}
```

#### [` find_function_address `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb9DebugInfo21find_function_addressENSt11string_viewE>)

virtual std::optional&lt;uint64\_t&gt; find\_function\_address(std::string\_view name) const override

Attempt to resolve the address of the function specified by `name`.

#### [` age `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb9DebugInfo3ageEv>)

uint32\_t age() const

The number of times the PDB file has been written.

#### [` guid `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb9DebugInfo4guidEv>)

std::string guid() const

Unique identifier of the PDB file.

#### [` to_string `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb9DebugInfo9to_stringEv>)

std::string to\_string() const

Pretty representation.

#### [` ~DebugInfo `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfoD0Ev>)

virtual ~DebugInfo() override = default

#### [` DebugInfo `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfo9DebugInfoENSt10unique_ptrIN7details9DebugInfoEEE>)

DebugInfo(std::unique\_ptr&lt;details::DebugInfo&gt; impl)

Public Static Functions

#### [` from_file `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfo9from_fileENSt11string_viewE>)

static std::unique\_ptr&lt;[DebugInfo](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfoE> "LIEF::pdb::DebugInfo")&gt; from\_file(std::string\_view pdb\_path)

Instantiate this class from the given PDB file. It returns a nullptr if the PDB can’t be processed.

#### [` classof `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfo7classofEPKN4LIEF9DebugInfoE>)

static inline bool classof(const LIEF::[DebugInfo](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF9DebugInfoE> "LIEF::DebugInfo") \*info)

Friends

#### [` operator<< `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfolsERNSt7ostreamERK9DebugInfo>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [DebugInfo](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb9DebugInfoE> "LIEF::pdb::DebugInfo") &amp;dbg)

---

## [PublicSymbol](<https://lief.re/doc/latest/extended/pdb/cpp.html#publicsymbol>)

### [` PublicSymbol `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbolE>)

class PublicSymbol

This class provides general information (RVA, name) about a symbol from the PDB’s public symbol stream (or Public symbol hash stream).

Public Types

#### [` FLAGS `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol5FLAGSE>)

enum class FLAGS : uint32\_t

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol5FLAGS4NONEE>)

enumerator NONE = 0

##### [` CODE `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol5FLAGS4CODEE>)

enumerator CODE = 1 &lt;&lt; 0

##### [` FUNCTION `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol5FLAGS8FUNCTIONE>)

enumerator FUNCTION = 1 &lt;&lt; 1

##### [` MANAGED `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol5FLAGS7MANAGEDE>)

enumerator MANAGED = 1 &lt;&lt; 2

##### [` MSIL `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol5FLAGS4MSILE>)

enumerator MSIL = 1 &lt;&lt; 3

Public Functions

#### [` PublicSymbol `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol12PublicSymbolENSt10unique_ptrIN7details12PublicSymbolEEE>)

PublicSymbol(std::unique\_ptr&lt;details::PublicSymbol&gt; impl)

#### [` ~PublicSymbol `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbolD0Ev>)

~PublicSymbol()

#### [` name `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb12PublicSymbol4nameEv>)

std::string\_view name() const

Name of the symbol.

#### [` demangled_name `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb12PublicSymbol14demangled_nameEv>)

std::string demangled\_name() const

Demangled representation of the symbol.

#### [` section_name `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb12PublicSymbol12section_nameEv>)

std::string section\_name() const

Name of the section in which this symbol is defined (e.g. `.text`).

This function returns an empty string if the section’s name can’t be found

#### [` RVA `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb12PublicSymbol3RVAEv>)

uint32\_t RVA() const

**Relative** Virtual Address of this symbol.

This function returns 0 if the RVA can’t be computed.

#### [` to_string `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb12PublicSymbol9to_stringEv>)

std::string to\_string() const

Friends

#### [` operator<< `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbollsERNSt7ostreamERK12PublicSymbol>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [PublicSymbol](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbolE> "LIEF::pdb::PublicSymbol") &amp;sym)

#### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratorE> "LIEF::pdb::PublicSymbol::Iterator"), std::forward\_iterator\_tag, [PublicSymbol](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbolE> "LIEF::pdb::PublicSymbol"), std::ptrdiff\_t, const [PublicSymbol](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbolE> "LIEF::pdb::PublicSymbol")\*, const [PublicSymbol](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbolE> "LIEF::pdb::PublicSymbol")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8Iterator14implementationE>)

using implementation = details::PublicSymbolIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8Iterator8IteratorENSt10unique_ptrIN7details14PublicSymbolItEEE>)

Iterator(std::unique\_ptr&lt;details::PublicSymbolIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8Iterator8IteratorERK8Iterator> "LIEF::pdb::PublicSymbol::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratorE> "LIEF::pdb::PublicSymbol::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratorE> "LIEF::pdb::PublicSymbol::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8Iterator8IteratorERR8Iterator> "LIEF::pdb::PublicSymbol::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratorE> "LIEF::pdb::PublicSymbol::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratorE> "LIEF::pdb::PublicSymbol::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratorE> "LIEF::pdb::PublicSymbol::Iterator") &amp;operator++()

##### [` operator* `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb12PublicSymbol8IteratormlEv>)

const [PublicSymbol](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbolE> "LIEF::pdb::PublicSymbol") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb12PublicSymbol8IteratorptEv>)

const [PublicSymbol](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbolE> "LIEF::pdb::PublicSymbol") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8Iterator5yieldEv>)

std::unique\_ptr&lt;[PublicSymbol](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbolE> "LIEF::pdb::PublicSymbol")&gt; yield()

Transfer ownership of the public symbol at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratorppEi>)

inline DerivedT operator++(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratorE> "LIEF::pdb::PublicSymbol::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratorE> "LIEF::pdb::PublicSymbol::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratorE> "LIEF::pdb::PublicSymbol::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb12PublicSymbol8IteratorE> "LIEF::pdb::PublicSymbol::Iterator") &amp;RHS)

---

## [CompilationUnit](<https://lief.re/doc/latest/extended/pdb/cpp.html#compilationunit>)

### [` CompilationUnit `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnitE>)

class CompilationUnit

This class represents a [CompilationUnit](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1CompilationUnit>) (or Module) in a PDB file.

Public Types

#### [` sources_iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit16sources_iteratorE>)

using sources\_iterator = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;std::vector&lt;std::string&gt;::const\_iterator&gt;

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1CompilationUnit_1_1Iterator>) over the source files (std::string).

#### [` function_iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit17function_iteratorE>)

using function\_iterator = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Function](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8FunctionE> "LIEF::pdb::Function")::[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratorE> "LIEF::pdb::Function::Iterator")&gt;

Public Functions

#### [` CompilationUnit `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit15CompilationUnitENSt10unique_ptrIN7details15CompilationUnitEEE>)

CompilationUnit(std::unique\_ptr&lt;details::CompilationUnit&gt; impl)

#### [` ~CompilationUnit `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnitD0Ev>)

~CompilationUnit()

#### [` module_name `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb15CompilationUnit11module_nameEv>)

std::string\_view module\_name() const

Name (or path) to the COFF object (`.obj`) associated with this compilation unit (e.g. `e:\obj.amd64fre\minkernel\ntos\hvl\mp\objfre\amd64\hvlp.obj`).

#### [` object_filename `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb15CompilationUnit15object_filenameEv>)

std::string\_view object\_filename() const

Name or path to the original binary object (COFF, Archive) in which the compilation unit was located before being linked. e.g. `e:\obj.amd64fre\minkernel\ntos\hvl\mp\objfre\amd64\hvl.lib`.

#### [` sources `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb15CompilationUnit7sourcesEv>)

[sources\_iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit16sources_iteratorE> "LIEF::pdb::CompilationUnit::sources_iterator") sources() const

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1CompilationUnit_1_1Iterator>) over the sources files that compose this compilation unit. These files also include **headers** (`.h, .hpp`, …).

#### [` functions `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb15CompilationUnit9functionsEv>)

[function\_iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit17function_iteratorE> "LIEF::pdb::CompilationUnit::function_iterator") functions() const

Return an iterator over the function defined in this compilation unit. If the PDB does not contain or has an empty DBI stream, it returns an empty iterator.

#### [` build_metadata `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb15CompilationUnit14build_metadataEv>)

std::unique\_ptr&lt;[BuildMetadata](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadataE> "LIEF::pdb::BuildMetadata")&gt; build\_metadata() const

Return build metadata such as the version of the compiler or the original source language of this compilation unit.

#### [` to_decl `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb15CompilationUnit7to_declERK7DeclOpt>)

std::string to\_decl(const [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;opt = [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt")()) const

Generate a C/C++ definition for the functions defined in this compilation unit.

#### [` to_string `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb15CompilationUnit9to_stringEv>)

std::string to\_string() const

Friends

#### [` operator<< `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnitlsERNSt7ostreamERK15CompilationUnit>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [CompilationUnit](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnitE> "LIEF::pdb::CompilationUnit") &amp;CU)

#### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorE> "LIEF::pdb::CompilationUnit::Iterator"), std::bidirectional\_iterator\_tag, [CompilationUnit](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnitE> "LIEF::pdb::CompilationUnit"), std::ptrdiff\_t, const [CompilationUnit](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnitE> "LIEF::pdb::CompilationUnit")\*, const [CompilationUnit](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnitE> "LIEF::pdb::CompilationUnit")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8Iterator14implementationE>)

using implementation = details::CompilationUnitIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8Iterator8IteratorENSt10unique_ptrIN7details17CompilationUnitItEEE>)

Iterator(std::unique\_ptr&lt;details::CompilationUnitIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8Iterator8IteratorERK8Iterator> "LIEF::pdb::CompilationUnit::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorE> "LIEF::pdb::CompilationUnit::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorE> "LIEF::pdb::CompilationUnit::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8Iterator8IteratorERR8Iterator> "LIEF::pdb::CompilationUnit::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorE> "LIEF::pdb::CompilationUnit::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorE> "LIEF::pdb::CompilationUnit::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorE> "LIEF::pdb::CompilationUnit::Iterator") &amp;operator++()

##### [` operator-- `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratormmEv>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorE> "LIEF::pdb::CompilationUnit::Iterator") &amp;operator--()

##### [` operator* `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb15CompilationUnit8IteratormlEv>)

const [CompilationUnit](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnitE> "LIEF::pdb::CompilationUnit") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb15CompilationUnit8IteratorptEv>)

const [CompilationUnit](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnitE> "LIEF::pdb::CompilationUnit") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8Iterator5yieldEv>)

std::unique\_ptr&lt;[CompilationUnit](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnitE> "LIEF::pdb::CompilationUnit")&gt; yield()

Transfer ownership of the compilation unit at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorppEi>)

inline DerivedT operator++(int)

##### [` operator-- `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratormmEi>)

inline DerivedT operator--(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorE> "LIEF::pdb::CompilationUnit::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorE> "LIEF::pdb::CompilationUnit::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorE> "LIEF::pdb::CompilationUnit::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb15CompilationUnit8IteratorE> "LIEF::pdb::CompilationUnit::Iterator") &amp;RHS)

---

## [BuildMetadata](<https://lief.re/doc/latest/extended/pdb/cpp.html#buildmetadata>)

### [` BuildMetadata `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadataE>)

class BuildMetadata

This class wraps build metadata represented by the codeview symbols: `S_COMPILE3, S_COMPILE2, S_BUILDINFO, S_ENVBLOCK`.

Public Types

#### [` LANG `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANGE>)

enum class LANG : uint8\_t

*Values:*

##### [` C `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG1CE>)

enumerator C = 0x00

##### [` CPP `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG3CPPE>)

enumerator CPP = 0x01

##### [` FORTRAN `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG7FORTRANE>)

enumerator FORTRAN = 0x02

##### [` MASM `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG4MASME>)

enumerator MASM = 0x03

##### [` PASCAL_LANG `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG11PASCAL_LANGE>)

enumerator PASCAL\_LANG = 0x04

##### [` BASIC `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG5BASICE>)

enumerator BASIC = 0x05

##### [` COBOL `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG5COBOLE>)

enumerator COBOL = 0x06

##### [` LINK `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG4LINKE>)

enumerator LINK = 0x07

##### [` CVTRES `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG6CVTRESE>)

enumerator CVTRES = 0x08

##### [` CVTPGD `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG6CVTPGDE>)

enumerator CVTPGD = 0x09

##### [` CSHARP `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG6CSHARPE>)

enumerator CSHARP = 0x0a

##### [` VB `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG2VBE>)

enumerator VB = 0x0b

##### [` ILASM `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG5ILASME>)

enumerator ILASM = 0x0c

##### [` JAVA `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG4JAVAE>)

enumerator JAVA = 0x0d

##### [` JSCRIPT `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG7JSCRIPTE>)

enumerator JSCRIPT = 0x0e

##### [` MSIL `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG4MSILE>)

enumerator MSIL = 0x0f

##### [` HLSL `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG4HLSLE>)

enumerator HLSL = 0x10

##### [` OBJC `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG4OBJCE>)

enumerator OBJC = 0x11

##### [` OBJCPP `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG6OBJCPPE>)

enumerator OBJCPP = 0x12

##### [` SWIFT `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG5SWIFTE>)

enumerator SWIFT = 0x13

##### [` ALIASOBJ `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG8ALIASOBJE>)

enumerator ALIASOBJ = 0x14

##### [` RUST `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG4RUSTE>)

enumerator RUST = 0x15

##### [` GO `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG2GOE>)

enumerator GO = 0x16

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANG7UNKNOWNE>)

enumerator UNKNOWN = 0xFF

#### [` CPU `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPUE>)

enum class CPU : uint16\_t

*Values:*

##### [` INTEL_8080 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU10INTEL_8080E>)

enumerator INTEL\_8080 = 0x0

##### [` INTEL_8086 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU10INTEL_8086E>)

enumerator INTEL\_8086 = 0x1

##### [` INTEL_80286 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU11INTEL_80286E>)

enumerator INTEL\_80286 = 0x2

##### [` INTEL_80386 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU11INTEL_80386E>)

enumerator INTEL\_80386 = 0x3

##### [` INTEL_80486 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU11INTEL_80486E>)

enumerator INTEL\_80486 = 0x4

##### [` PENTIUM `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU7PENTIUME>)

enumerator PENTIUM = 0x5

##### [` PENTIUMPRO `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU10PENTIUMPROE>)

enumerator PENTIUMPRO = 0x6

##### [` PENTIUM3 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU8PENTIUM3E>)

enumerator PENTIUM3 = 0x7

##### [` MIPS `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU4MIPSE>)

enumerator MIPS = 0x10

##### [` MIPS16 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6MIPS16E>)

enumerator MIPS16 = 0x11

##### [` MIPS32 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6MIPS32E>)

enumerator MIPS32 = 0x12

##### [` MIPS64 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6MIPS64E>)

enumerator MIPS64 = 0x13

##### [` MIPSI `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU5MIPSIE>)

enumerator MIPSI = 0x14

##### [` MIPSII `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6MIPSIIE>)

enumerator MIPSII = 0x15

##### [` MIPSIII `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU7MIPSIIIE>)

enumerator MIPSIII = 0x16

##### [` MIPSIV `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6MIPSIVE>)

enumerator MIPSIV = 0x17

##### [` MIPSV `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU5MIPSVE>)

enumerator MIPSV = 0x18

##### [` M68000 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6M68000E>)

enumerator M68000 = 0x20

##### [` M68010 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6M68010E>)

enumerator M68010 = 0x21

##### [` M68020 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6M68020E>)

enumerator M68020 = 0x22

##### [` M68030 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6M68030E>)

enumerator M68030 = 0x23

##### [` M68040 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6M68040E>)

enumerator M68040 = 0x24

##### [` ALPHA `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU5ALPHAE>)

enumerator ALPHA = 0x30

##### [` ALPHA_21164 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU11ALPHA_21164E>)

enumerator ALPHA\_21164 = 0x31

##### [` ALPHA_21164A `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU12ALPHA_21164AE>)

enumerator ALPHA\_21164A = 0x32

##### [` ALPHA_21264 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU11ALPHA_21264E>)

enumerator ALPHA\_21264 = 0x33

##### [` ALPHA_21364 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU11ALPHA_21364E>)

enumerator ALPHA\_21364 = 0x34

##### [` PPC601 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6PPC601E>)

enumerator PPC601 = 0x40

##### [` PPC603 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6PPC603E>)

enumerator PPC603 = 0x41

##### [` PPC604 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6PPC604E>)

enumerator PPC604 = 0x42

##### [` PPC620 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6PPC620E>)

enumerator PPC620 = 0x43

##### [` PPCFP `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU5PPCFPE>)

enumerator PPCFP = 0x44

##### [` PPCBE `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU5PPCBEE>)

enumerator PPCBE = 0x45

##### [` SH3 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU3SH3E>)

enumerator SH3 = 0x50

##### [` SH3E `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU4SH3EE>)

enumerator SH3E = 0x51

##### [` SH3DSP `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6SH3DSPE>)

enumerator SH3DSP = 0x52

##### [` SH4 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU3SH4E>)

enumerator SH4 = 0x53

##### [` SHMEDIA `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU7SHMEDIAE>)

enumerator SHMEDIA = 0x54

##### [` ARM3 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU4ARM3E>)

enumerator ARM3 = 0x60

##### [` ARM4 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU4ARM4E>)

enumerator ARM4 = 0x61

##### [` ARM4T `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU5ARM4TE>)

enumerator ARM4T = 0x62

##### [` ARM5 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU4ARM5E>)

enumerator ARM5 = 0x63

##### [` ARM5T `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU5ARM5TE>)

enumerator ARM5T = 0x64

##### [` ARM6 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU4ARM6E>)

enumerator ARM6 = 0x65

##### [` ARM_XMAC `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU8ARM_XMACE>)

enumerator ARM\_XMAC = 0x66

##### [` ARM_WMMX `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU8ARM_WMMXE>)

enumerator ARM\_WMMX = 0x67

##### [` ARM7 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU4ARM7E>)

enumerator ARM7 = 0x68

##### [` OMNI `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU4OMNIE>)

enumerator OMNI = 0x70

##### [` IA64 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU4IA64E>)

enumerator IA64 = 0x80

##### [` IA64_2 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6IA64_2E>)

enumerator IA64\_2 = 0x81

##### [` CEE `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU3CEEE>)

enumerator CEE = 0x90

##### [` AM33 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU4AM33E>)

enumerator AM33 = 0xa0

##### [` M32R `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU4M32RE>)

enumerator M32R = 0xb0

##### [` TRICORE `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU7TRICOREE>)

enumerator TRICORE = 0xc0

##### [` X64 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU3X64E>)

enumerator X64 = 0xd0

##### [` EBC `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU3EBCE>)

enumerator EBC = 0xe0

##### [` THUMB `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU5THUMBE>)

enumerator THUMB = 0xf0

##### [` ARMNT `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU5ARMNTE>)

enumerator ARMNT = 0xf4

##### [` ARM64 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU5ARM64E>)

enumerator ARM64 = 0xf6

##### [` HYBRID_X86ARM64 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU15HYBRID_X86ARM64E>)

enumerator HYBRID\_X86ARM64 = 0xf7

##### [` ARM64EC `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU7ARM64ECE>)

enumerator ARM64EC = 0xf8

##### [` ARM64X `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU6ARM64XE>)

enumerator ARM64X = 0xf9

##### [` D3D11_SHADER `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU12D3D11_SHADERE>)

enumerator D3D11\_SHADER = 0x100

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPU7UNKNOWNE>)

enumerator UNKNOWN = 0xff

Public Functions

#### [` BuildMetadata `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata13BuildMetadataENSt10unique_ptrIN7details13BuildMetadataEEE>)

BuildMetadata(std::unique\_ptr&lt;details::BuildMetadata&gt; impl)

#### [` ~BuildMetadata `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadataD0Ev>)

~BuildMetadata()

#### [` frontend_version `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb13BuildMetadata16frontend_versionEv>)

[version\_t](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata9version_tE> "LIEF::pdb::BuildMetadata::version_t") frontend\_version() const

Version of the frontend (e.g. `19.36.32537`).

#### [` backend_version `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb13BuildMetadata15backend_versionEv>)

[version\_t](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata9version_tE> "LIEF::pdb::BuildMetadata::version_t") backend\_version() const

Version of the backend (e.g. `14.36.32537`).

#### [` version `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb13BuildMetadata7versionEv>)

std::string\_view version() const

Version of the *tool* as a string. For instance, `Microsoft (R) CVTRES`, `Microsoft (R) LINK`.

#### [` language `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb13BuildMetadata8languageEv>)

[LANG](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata4LANGE> "LIEF::pdb::BuildMetadata::LANG") language() const

Source language.

#### [` target_cpu `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb13BuildMetadata10target_cpuEv>)

[CPU](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata3CPUE> "LIEF::pdb::BuildMetadata::CPU") target\_cpu() const

Target [CPU](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1BuildMetadata_1a90719b727e681d248e026a468b6dd202>).

#### [` build_info `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb13BuildMetadata10build_infoEv>)

std::optional&lt;[build\_info\_t](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata12build_info_tE> "LIEF::pdb::BuildMetadata::build_info_t")&gt; build\_info() const

Build information represented by the `S_BUILDINFO` symbol.

#### [` env `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb13BuildMetadata3envEv>)

std::vector&lt;std::string&gt; env() const

Environment information represented by the `S_ENVBLOCK` symbol.

#### [` to_string `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb13BuildMetadata9to_stringEv>)

std::string to\_string() const

Friends

#### [` operator<< `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadatalsERNSt7ostreamERK13BuildMetadata>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [BuildMetadata](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadataE> "LIEF::pdb::BuildMetadata") &amp;meta)

#### [` version_t `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata9version_tE>)

struct version\_t

This structure represents a version for the backend or the frontend.

Public Members

##### [` major `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata9version_t5majorE>)

uint16\_t major = 0

Major version.

##### [` minor `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata9version_t5minorE>)

uint16\_t minor = 0

Minor version.

##### [` build `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata9version_t5buildE>)

uint16\_t build = 0

Build version.

##### [` qfe `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata9version_t3qfeE>)

uint16\_t qfe = 0

Quick Fix Engineering version.

#### [` build_info_t `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata12build_info_tE>)

struct build\_info\_t

This structure represents information wrapped by the `S_BUILDINFO` symbol.

Public Members

##### [` cwd `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata12build_info_t3cwdE>)

std::string cwd

Working directory where the *build tool* was invoked.

##### [` build_tool `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata12build_info_t10build_toolE>)

std::string build\_tool

Path to the build tool (e.g. `C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.36.32532\bin\HostX64\x64\CL.exe`).

##### [` source_file `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata12build_info_t11source_fileE>)

std::string source\_file

Source file consumed by the *build tool*.

##### [` pdb `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata12build_info_t3pdbE>)

std::string pdb

PDB path.

##### [` command_line `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb13BuildMetadata12build_info_t12command_lineE>)

std::string command\_line

Command line arguments used to invoke the *build tool*.

---

## [Function](<https://lief.re/doc/latest/extended/pdb/cpp.html#function>)

### [` Function `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8FunctionE>)

class Function

Public Functions

#### [` Function `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8FunctionENSt10unique_ptrIN7details8FunctionEEE>)

Function(std::unique\_ptr&lt;details::Function&gt; impl)

#### [` ~Function `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8FunctionD0Ev>)

~Function()

#### [` name `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb8Function4nameEv>)

std::string\_view name() const

The name of the function (this name is usually demangled).

#### [` RVA `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb8Function3RVAEv>)

uint32\_t RVA() const

The **Relative** Virtual Address of the function.

#### [` code_size `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb8Function9code_sizeEv>)

uint32\_t code\_size() const

The size of the function.

#### [` section_name `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb8Function12section_nameEv>)

std::string section\_name() const

The name of the section in which this function is defined.

#### [` debug_location `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb8Function14debug_locationEv>)

[debug\_location\_t](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF16debug_location_tE> "LIEF::debug_location_t") debug\_location() const

Original source code location.

#### [` to_decl `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb8Function7to_declERK7DeclOpt>)

std::string to\_decl(const [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;opt = [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt")()) const

Generate a C/C++ definition for this function.

#### [` to_string `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb8Function9to_stringEv>)

std::string to\_string() const

Friends

#### [` operator<< `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8FunctionlsERNSt7ostreamERK8Function>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Function](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8FunctionE> "LIEF::pdb::Function") &amp;F)

#### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratorE> "LIEF::pdb::Function::Iterator"), std::forward\_iterator\_tag, [Function](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8FunctionE> "LIEF::pdb::Function"), std::ptrdiff\_t, const [Function](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8FunctionE> "LIEF::pdb::Function")\*, const [Function](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8FunctionE> "LIEF::pdb::Function")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8Iterator14implementationE>)

using implementation = details::FunctionIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8Iterator8IteratorENSt10unique_ptrIN7details10FunctionItEEE>)

Iterator(std::unique\_ptr&lt;details::FunctionIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8Iterator8IteratorERK8Iterator> "LIEF::pdb::Function::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratorE> "LIEF::pdb::Function::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratorE> "LIEF::pdb::Function::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8Iterator8IteratorERR8Iterator> "LIEF::pdb::Function::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratorE> "LIEF::pdb::Function::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratorE> "LIEF::pdb::Function::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratorE> "LIEF::pdb::Function::Iterator") &amp;operator++()

##### [` operator* `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb8Function8IteratormlEv>)

const [Function](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8FunctionE> "LIEF::pdb::Function") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb8Function8IteratorptEv>)

const [Function](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8FunctionE> "LIEF::pdb::Function") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8Iterator5yieldEv>)

std::unique\_ptr&lt;[Function](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8FunctionE> "LIEF::pdb::Function")&gt; yield()

Transfer ownership of the function at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratorppEi>)

inline DerivedT operator++(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratorE> "LIEF::pdb::Function::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratorE> "LIEF::pdb::Function::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratorE> "LIEF::pdb::Function::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb8Function8IteratorE> "LIEF::pdb::Function::Iterator") &amp;RHS)

---

## [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#type>)

### [` Type `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE>)

class Type

This is the base class for any PDB type.

Subclassed by [LIEF::pdb::types::Array](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Array>), [LIEF::pdb::types::BitField](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1BitField>), [LIEF::pdb::types::ClassLike](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1ClassLike>), [LIEF::pdb::types::Enum](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Enum>), [LIEF::pdb::types::Function](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Function>), [LIEF::pdb::types::Modifier](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Modifier>), [LIEF::pdb::types::Pointer](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Pointer>), [LIEF::pdb::types::Simple](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Simple>)

Public Types

#### [` KIND `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type4KINDE>)

enum class KIND

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type4KIND7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` CLASS `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type4KIND5CLASSE>)

enumerator CLASS

##### [` POINTER `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type4KIND7POINTERE>)

enumerator POINTER

##### [` SIMPLE `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type4KIND6SIMPLEE>)

enumerator SIMPLE

##### [` ENUM `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type4KIND4ENUME>)

enumerator ENUM

##### [` FUNCTION `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type4KIND8FUNCTIONE>)

enumerator FUNCTION

##### [` MODIFIER `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type4KIND8MODIFIERE>)

enumerator MODIFIER

##### [` BITFIELD `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type4KIND8BITFIELDE>)

enumerator BITFIELD

##### [` ARRAY `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type4KIND5ARRAYE>)

enumerator ARRAY

##### [` UNION `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type4KIND5UNIONE>)

enumerator UNION

##### [` STRUCTURE `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type4KIND9STRUCTUREE>)

enumerator STRUCTURE

##### [` INTERFACE `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type4KIND9INTERFACEE>)

enumerator INTERFACE

Public Functions

#### [` Type `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type4TypeENSt10unique_ptrIN7details4TypeEEE>)

Type(std::unique\_ptr&lt;details::Type&gt; impl)

#### [` kind `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb4Type4kindEv>)

[KIND](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type4KINDE> "LIEF::pdb::Type::KIND") kind() const

#### [` size `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb4Type4sizeEv>)

std::optional&lt;uint64\_t&gt; size() const

Size of the type. This size should match the value of `sizeof(...)` applied to this type.

#### [` name `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb4Type4nameEv>)

std::optional&lt;std::string&gt; name() const

[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1Type>)’s name (if present).

#### [` to_decl `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb4Type7to_declERK7DeclOpt>)

std::string to\_decl(const [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;opt = [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt")()) const

Generates a C/C++ definition for this type.

#### [` Tas `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4I0ENK4LIEF3pdb4Type2asEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4I0ENK4LIEF3pdb4Type2asEPK1Tv> "LIEF::pdb::Type::as::T") \*as() const

#### [` ~Type `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeD0Ev>)

virtual ~Type()

Public Static Functions

#### [` create `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type6createENSt10unique_ptrIN7details4TypeEEE>)

static std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")&gt; create(std::unique\_ptr&lt;details::Type&gt; impl)

#### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratorE> "LIEF::pdb::Type::Iterator"), std::forward\_iterator\_tag, [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type"), std::ptrdiff\_t, const [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")\*, const [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8Iterator14implementationE>)

using implementation = details::TypeIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8Iterator8IteratorENSt10unique_ptrIN7details6TypeItEEE>)

Iterator(std::unique\_ptr&lt;details::TypeIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8Iterator8IteratorERK8Iterator> "LIEF::pdb::Type::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratorE> "LIEF::pdb::Type::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratorE> "LIEF::pdb::Type::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8Iterator8IteratorERR8Iterator> "LIEF::pdb::Type::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratorE> "LIEF::pdb::Type::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratorE> "LIEF::pdb::Type::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratorE> "LIEF::pdb::Type::Iterator") &amp;operator++()

##### [` operator* `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb4Type8IteratormlEv>)

const [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb4Type8IteratorptEv>)

const [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8Iterator5yieldEv>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")&gt; yield()

Transfer ownership of the type at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratorppEi>)

inline DerivedT operator++(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratorE> "LIEF::pdb::Type::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratorE> "LIEF::pdb::Type::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratorE> "LIEF::pdb::Type::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4Type8IteratorE> "LIEF::pdb::Type::Iterator") &amp;RHS)

---

## [Array](<https://lief.re/doc/latest/extended/pdb/cpp.html#array>)

### [` Array `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types5ArrayE>)

class Array : public LIEF::pdb::[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")

This class represents a `LF_ARRAY` PDB type.

Public Functions

#### [` ArgsArray `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types5Array5ArrayEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type"), [Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types5Array5ArrayEDpRR4Args> "LIEF::pdb::types::Array::Array::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Array([Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types5Array5ArrayEDpRR4Args> "LIEF::pdb::types::Array::Array::Args")&amp;&amp;... args)

#### [` numberof_elements `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types5Array17numberof_elementsEv>)

size\_t numberof\_elements() const

The number of elements in this array.

#### [` element_type `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types5Array12element_typeEv>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")&gt; element\_type() const

[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1Type>) of the elements.

#### [` index_type `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types5Array10index_typeEv>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")&gt; index\_type() const

[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1Type>) of the index.

#### [` ~Array `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types5ArrayD0Ev>)

~Array() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types5Array7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type") \*type)

---

## [Attribute (type)](<https://lief.re/doc/latest/extended/pdb/cpp.html#attribute-type>)

### [` Attribute `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9AttributeE>)

class Attribute

This class represents an attribute (`LF_MEMBER`) in an aggregate (class, struct, union, …).

Public Functions

#### [` Attribute `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute9AttributeENSt10unique_ptrIN7details9AttributeEEE>)

Attribute(std::unique\_ptr&lt;details::Attribute&gt; impl)

#### [` name `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types9Attribute4nameEv>)

std::string\_view name() const

Name of the attribute.

#### [` type `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types9Attribute4typeEv>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")&gt; type() const

[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1Type>) of this attribute.

#### [` field_offset `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types9Attribute12field_offsetEv>)

uint64\_t field\_offset() const

Offset of this attribute in the aggregate.

#### [` ~Attribute `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9AttributeD0Ev>)

~Attribute()

#### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratorE> "LIEF::pdb::types::Attribute::Iterator"), std::forward\_iterator\_tag, [Attribute](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9AttributeE> "LIEF::pdb::types::Attribute"), std::ptrdiff\_t, const [Attribute](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9AttributeE> "LIEF::pdb::types::Attribute")\*, const [Attribute](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9AttributeE> "LIEF::pdb::types::Attribute")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8Iterator14implementationE>)

using implementation = details::AttributeIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8Iterator8IteratorENSt10unique_ptrIN7details11AttributeItEEE>)

Iterator(std::unique\_ptr&lt;details::AttributeIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8Iterator8IteratorERK8Iterator> "LIEF::pdb::types::Attribute::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratorE> "LIEF::pdb::types::Attribute::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratorE> "LIEF::pdb::types::Attribute::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8Iterator8IteratorERR8Iterator> "LIEF::pdb::types::Attribute::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratorE> "LIEF::pdb::types::Attribute::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratorE> "LIEF::pdb::types::Attribute::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratorE> "LIEF::pdb::types::Attribute::Iterator") &amp;operator++()

##### [` operator* `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types9Attribute8IteratormlEv>)

const [Attribute](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9AttributeE> "LIEF::pdb::types::Attribute") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types9Attribute8IteratorptEv>)

const [Attribute](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9AttributeE> "LIEF::pdb::types::Attribute") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8Iterator5yieldEv>)

std::unique\_ptr&lt;[Attribute](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9AttributeE> "LIEF::pdb::types::Attribute")&gt; yield()

Transfer ownership of the attribute at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratorppEi>)

inline DerivedT operator++(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratorE> "LIEF::pdb::types::Attribute::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratorE> "LIEF::pdb::types::Attribute::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratorE> "LIEF::pdb::types::Attribute::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratorE> "LIEF::pdb::types::Attribute::Iterator") &amp;RHS)

---

## [BitField](<https://lief.re/doc/latest/extended/pdb/cpp.html#bitfield>)

### [` BitField `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types8BitFieldE>)

class BitField : public LIEF::pdb::[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")

This class represents a `LF_BITFIELD` PDB type.

Public Functions

#### [` ArgsBitField `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types8BitField8BitFieldEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type"), [Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types8BitField8BitFieldEDpRR4Args> "LIEF::pdb::types::BitField::BitField::Args")&amp;&amp;...&gt;&gt;&gt;  
inline BitField([Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types8BitField8BitFieldEDpRR4Args> "LIEF::pdb::types::BitField::BitField::Args")&amp;&amp;... args)

#### [` ~BitField `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types8BitFieldD0Ev>)

~BitField() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types8BitField7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type") \*type)

---

## [ClassLike](<https://lief.re/doc/latest/extended/pdb/cpp.html#classlike>)

### [` ClassLike `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9ClassLikeE>)

class ClassLike : public LIEF::pdb::[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")

This class abstracts the following PDB types: `LF_STRUCTURE`, `LF_INTERFACE`, `LF_CLASS` or `LF_UNION`.

Subclassed by [LIEF::pdb::types::Class](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Class>), [LIEF::pdb::types::Interface](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Interface>), [LIEF::pdb::types::Structure](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Structure>), [LIEF::pdb::types::Union](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Union>)

Public Types

#### [` attributes_iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9ClassLike19attributes_iteratorE>)

using attributes\_iterator = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Attribute](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9AttributeE> "LIEF::pdb::types::Attribute")::[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Attribute8IteratorE> "LIEF::pdb::types::Attribute::Iterator")&gt;

Attributes iterator.

#### [` methods_iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9ClassLike16methods_iteratorE>)

using methods\_iterator = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Method](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6MethodE> "LIEF::pdb::types::Method")::[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratorE> "LIEF::pdb::types::Method::Iterator")&gt;

Methods iterator.

Public Functions

#### [` ArgsClassLike `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types9ClassLike9ClassLikeEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type"), [Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types9ClassLike9ClassLikeEDpRR4Args> "LIEF::pdb::types::ClassLike::ClassLike::Args")&amp;&amp;...&gt;&gt;&gt;  
inline ClassLike([Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types9ClassLike9ClassLikeEDpRR4Args> "LIEF::pdb::types::ClassLike::ClassLike::Args")&amp;&amp;... args)

#### [` unique_name `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types9ClassLike11unique_nameEv>)

std::string\_view unique\_name() const

Mangled type name.

#### [` attributes `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types9ClassLike10attributesEv>)

[attributes\_iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9ClassLike19attributes_iteratorE> "LIEF::pdb::types::ClassLike::attributes_iterator") attributes() const

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1Type_1_1Iterator>) over the different attributes defined in this class-like type.

#### [` methods `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types9ClassLike7methodsEv>)

[methods\_iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9ClassLike16methods_iteratorE> "LIEF::pdb::types::ClassLike::methods_iterator") methods() const

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1Type_1_1Iterator>) over the different methods implemented in this class-type type.

#### [` ~ClassLike `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9ClassLikeD0Ev>)

~ClassLike() override

Public Static Functions

#### [` Tclassof `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4I0EN4LIEF3pdb5types9ClassLike7classofEbPK1TPNSt11enable_if_tINSt12is_base_of_vI9ClassLike1TEEEE>)

template&lt;class T&gt;  
static inline bool classof(const [T](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4I0EN4LIEF3pdb5types9ClassLike7classofEbPK1TPNSt11enable_if_tINSt12is_base_of_vI9ClassLike1TEEEE> "LIEF::pdb::types::ClassLike::classof::T")\*, std::enable\_if\_t&lt;std::is\_base\_of\_v&lt;[ClassLike](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9ClassLikeE> "LIEF::pdb::types::ClassLike"), [T](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4I0EN4LIEF3pdb5types9ClassLike7classofEbPK1TPNSt11enable_if_tINSt12is_base_of_vI9ClassLike1TEEEE> "LIEF::pdb::types::ClassLike::classof::T")&gt;&gt;\* = 0)

---

## [Structure](<https://lief.re/doc/latest/extended/pdb/cpp.html#structure>)

### [` Structure `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9StructureE>)

class Structure : public LIEF::pdb::types::[ClassLike](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9ClassLikeE> "LIEF::pdb::types::ClassLike")

[Interface](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Interface>) for the `LF_STRUCTURE` PDB type.

Public Functions

#### [` ArgsStructure `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types9Structure9StructureEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[ClassLike](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9ClassLikeE> "LIEF::pdb::types::ClassLike"), [Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types9Structure9StructureEDpRR4Args> "LIEF::pdb::types::Structure::Structure::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Structure([Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types9Structure9StructureEDpRR4Args> "LIEF::pdb::types::Structure::Structure::Args")&amp;&amp;... args)

#### [` ~Structure `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9StructureD0Ev>)

~Structure() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Structure7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type") \*type)

---

## [Class](<https://lief.re/doc/latest/extended/pdb/cpp.html#class>)

### [` Class `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types5ClassE>)

class Class : public LIEF::pdb::types::[ClassLike](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9ClassLikeE> "LIEF::pdb::types::ClassLike")

[Interface](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Interface>) for the `LF_CLASS` PDB type.

Public Functions

#### [` ArgsClass `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types5Class5ClassEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[ClassLike](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9ClassLikeE> "LIEF::pdb::types::ClassLike"), [Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types5Class5ClassEDpRR4Args> "LIEF::pdb::types::Class::Class::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Class([Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types5Class5ClassEDpRR4Args> "LIEF::pdb::types::Class::Class::Args")&amp;&amp;... args)

#### [` ~Class `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types5ClassD0Ev>)

~Class() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types5Class7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type") \*type)

---

## [Interface](<https://lief.re/doc/latest/extended/pdb/cpp.html#interface>)

### [` Interface `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9InterfaceE>)

class Interface : public LIEF::pdb::types::[ClassLike](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9ClassLikeE> "LIEF::pdb::types::ClassLike")

[Interface](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Interface>) for the `LF_INTERFACE` PDB type.

Public Functions

#### [` ArgsInterface `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types9Interface9InterfaceEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[ClassLike](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9ClassLikeE> "LIEF::pdb::types::ClassLike"), [Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types9Interface9InterfaceEDpRR4Args> "LIEF::pdb::types::Interface::Interface::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Interface([Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types9Interface9InterfaceEDpRR4Args> "LIEF::pdb::types::Interface::Interface::Args")&amp;&amp;... args)

#### [` ~Interface `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9InterfaceD0Ev>)

~Interface() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9Interface7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type") \*type)

---

## [Enum](<https://lief.re/doc/latest/extended/pdb/cpp.html#enum>)

### [` Enum `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types4EnumE>)

class Enum : public LIEF::pdb::[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")

This class represents a `LF_ENUM` PDB type.

Public Functions

#### [` ArgsEnum `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types4Enum4EnumEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type"), [Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types4Enum4EnumEDpRR4Args> "LIEF::pdb::types::Enum::Enum::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Enum([Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types4Enum4EnumEDpRR4Args> "LIEF::pdb::types::Enum::Enum::Args")&amp;&amp;... args)

#### [` unique_name `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types4Enum11unique_nameEv>)

std::string\_view unique\_name() const

[Enum](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Enum>)’s mangled name.

#### [` entries `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types4Enum7entriesEv>)

std::vector&lt;[Entry](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types4Enum5EntryE> "LIEF::pdb::types::Enum::Entry")&gt; entries() const

Return the different entries associated with this enum.

#### [` underlying_type `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types4Enum15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type") \*underlying\_type() const

The underlying type that is used to encode this enum.

#### [` find_entry `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types4Enum10find_entryE7int64_t>)

std::optional&lt;[Entry](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types4Enum5EntryE> "LIEF::pdb::types::Enum::Entry")&gt; find\_entry(int64\_t value) const

Try to find the enum matching the given value.

#### [` ~Enum `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types4EnumD0Ev>)

~Enum() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types4Enum7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type") \*type)

#### [` Entry `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types4Enum5EntryE>)

class Entry

This class represents an enum entry which is essentially composed of a name and its value (integer).

Public Functions

##### [` Entry `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types4Enum5Entry5EntryENSt10unique_ptrIN7details9EnumEntryEEE>)

Entry(std::unique\_ptr&lt;details::EnumEntry&gt; impl)

##### [` Entry `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types4Enum5Entry5EntryERR5Entry>)

Entry([Entry](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types4Enum5Entry5EntryERR5Entry> "LIEF::pdb::types::Enum::Entry::Entry") &amp;&amp;other) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types4Enum5EntryaSERR5Entry>)

[Entry](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types4Enum5EntryE> "LIEF::pdb::types::Enum::Entry") &amp;operator=([Entry](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types4Enum5EntryE> "LIEF::pdb::types::Enum::Entry") &amp;&amp;other) noexcept

##### [` name `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types4Enum5Entry4nameEv>)

std::string\_view name() const

[Enum](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Enum>) entry’s name.

##### [` value `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types4Enum5Entry5valueEv>)

int64\_t value() const

[Enum](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Enum>) entry’s value (if any).

##### [` ~Entry `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types4Enum5EntryD0Ev>)

~Entry()

---

## [Function (type)](<https://lief.re/doc/latest/extended/pdb/cpp.html#function-type>)

### [` Function `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types8FunctionE>)

class Function : public LIEF::pdb::[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")

This class represents a `LF_PROCEDURE` PDB type.

Public Types

#### [` parameters_t `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types8Function12parameters_tE>)

using parameters\_t = std::vector&lt;std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")&gt;&gt;

Public Functions

#### [` ArgsFunction `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types8Function8FunctionEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type"), [Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types8Function8FunctionEDpRR4Args> "LIEF::pdb::types::Function::Function::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Function([Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types8Function8FunctionEDpRR4Args> "LIEF::pdb::types::Function::Function::Args")&amp;&amp;... args)

#### [` return_type `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types8Function11return_typeEv>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")&gt; return\_type() const

[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1Type>) returned by the function.

#### [` parameters `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types8Function10parametersEv>)

[parameters\_t](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types8Function12parameters_tE> "LIEF::pdb::types::Function::parameters_t") parameters() const

Types of the function’s parameters.

#### [` ~Function `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types8FunctionD0Ev>)

~Function() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types8Function7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type") \*type)

---

## [Method (type)](<https://lief.re/doc/latest/extended/pdb/cpp.html#method-type>)

### [` Method `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6MethodE>)

class Method

This class represents a [Method](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Method>) (`LF_ONEMETHOD`) that can be defined in a [ClassLike](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1ClassLike>) PDB type ([Class](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Class>), [Structure](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Structure>), [Union](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Union>), [Interface](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Interface>)).

Public Types

#### [` TYPE `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method4TYPEE>)

enum class TYPE

The type (or property) of the method.

*Values:*

##### [` VANILLA `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method4TYPE7VANILLAE>)

enumerator VANILLA = 0x00

Regular instance method.

##### [` VIRTUAL `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method4TYPE7VIRTUALE>)

enumerator VIRTUAL = 0x01

Virtual method.

##### [` STATIC `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method4TYPE6STATICE>)

enumerator STATIC = 0x02

Static method.

##### [` FRIEND `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method4TYPE6FRIENDE>)

enumerator FRIEND = 0x03

Friend method.

##### [` INTRODUCING_VIRTUAL `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method4TYPE19INTRODUCING_VIRTUALE>)

enumerator INTRODUCING\_VIRTUAL = 0x04

Virtual method that introduces a new vtable slot.

##### [` PURE_VIRTUAL `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method4TYPE12PURE_VIRTUALE>)

enumerator PURE\_VIRTUAL = 0x05

Pure virtual method (abstract).

##### [` PURE_INTRODUCING_VIRTUAL `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method4TYPE24PURE_INTRODUCING_VIRTUALE>)

enumerator PURE\_INTRODUCING\_VIRTUAL = 0x06

Pure virtual method that introduces a new vtable slot.

#### [` ACCESS `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method6ACCESSE>)

enum class ACCESS : uint8\_t

Visibility access for the method.

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method6ACCESS4NONEE>)

enumerator NONE = 0

##### [` PRIVATE `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method6ACCESS7PRIVATEE>)

enumerator PRIVATE = 1

No access specifier (or unknown).

##### [` PROTECTED `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method6ACCESS9PROTECTEDE>)

enumerator PROTECTED = 2

Private access.

##### [` PUBLIC `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method6ACCESS6PUBLICE>)

enumerator PUBLIC = 3

Protected access.

Public Functions

#### [` Method `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method6MethodENSt10unique_ptrIN7details6MethodEEE>)

Method(std::unique\_ptr&lt;details::Method&gt; impl)

#### [` name `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types6Method4nameEv>)

std::string\_view name() const

Name of the method.

#### [` type `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types6Method4typeEv>)

[TYPE](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method4TYPEE> "LIEF::pdb::types::Method::TYPE") type() const

Type/Properties of the method (virtual, static, etc.).

#### [` access `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types6Method6accessEv>)

[ACCESS](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method6ACCESSE> "LIEF::pdb::types::Method::ACCESS") access() const

Visibility access (public, private, …).

#### [` ~Method `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6MethodD0Ev>)

~Method()

#### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratorE> "LIEF::pdb::types::Method::Iterator"), std::forward\_iterator\_tag, [Method](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6MethodE> "LIEF::pdb::types::Method"), std::ptrdiff\_t, const [Method](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6MethodE> "LIEF::pdb::types::Method")\*, const [Method](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6MethodE> "LIEF::pdb::types::Method")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8Iterator14implementationE>)

using implementation = details::MethodIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8Iterator8IteratorENSt10unique_ptrIN7details8MethodItEEE>)

Iterator(std::unique\_ptr&lt;details::MethodIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8Iterator8IteratorERK8Iterator> "LIEF::pdb::types::Method::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratorE> "LIEF::pdb::types::Method::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratorE> "LIEF::pdb::types::Method::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8Iterator8IteratorERR8Iterator> "LIEF::pdb::types::Method::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratorE> "LIEF::pdb::types::Method::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratorE> "LIEF::pdb::types::Method::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratorE> "LIEF::pdb::types::Method::Iterator") &amp;operator++()

##### [` operator* `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types6Method8IteratormlEv>)

const [Method](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6MethodE> "LIEF::pdb::types::Method") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types6Method8IteratorptEv>)

const [Method](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6MethodE> "LIEF::pdb::types::Method") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8Iterator5yieldEv>)

std::unique\_ptr&lt;[Method](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6MethodE> "LIEF::pdb::types::Method")&gt; yield()

Transfer ownership of the method at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratorppEi>)

inline DerivedT operator++(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratorE> "LIEF::pdb::types::Method::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratorE> "LIEF::pdb::types::Method::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratorE> "LIEF::pdb::types::Method::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Method8IteratorE> "LIEF::pdb::types::Method::Iterator") &amp;RHS)

---

## [Modifier](<https://lief.re/doc/latest/extended/pdb/cpp.html#modifier>)

### [` Modifier `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types8ModifierE>)

class Modifier : public LIEF::pdb::[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")

This class represents a `LF_MODIFIER` PDB type.

Public Functions

#### [` ArgsModifier `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types8Modifier8ModifierEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type"), [Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types8Modifier8ModifierEDpRR4Args> "LIEF::pdb::types::Modifier::Modifier::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Modifier([Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types8Modifier8ModifierEDpRR4Args> "LIEF::pdb::types::Modifier::Modifier::Args")&amp;&amp;... args)

#### [` underlying_type `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types8Modifier15underlying_typeEv>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")&gt; underlying\_type() const

Underlying type targeted by this modifier.

#### [` ~Modifier `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types8ModifierD0Ev>)

~Modifier() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types8Modifier7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type") \*type)

---

## [Pointer](<https://lief.re/doc/latest/extended/pdb/cpp.html#pointer>)

### [` Pointer `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types7PointerE>)

class Pointer : public LIEF::pdb::[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")

This class represents a `LF_POINTER` PDB type.

Public Functions

#### [` ArgsPointer `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types7Pointer7PointerEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type"), [Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types7Pointer7PointerEDpRR4Args> "LIEF::pdb::types::Pointer::Pointer::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Pointer([Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types7Pointer7PointerEDpRR4Args> "LIEF::pdb::types::Pointer::Pointer::Args")&amp;&amp;... args)

#### [` underlying_type `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types7Pointer15underlying_typeEv>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")&gt; underlying\_type() const

The underlying type pointed by this pointer.

#### [` ~Pointer `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types7PointerD0Ev>)

~Pointer() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types7Pointer7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type") \*type)

---

## [Simple](<https://lief.re/doc/latest/extended/pdb/cpp.html#simple>)

### [` Simple `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6SimpleE>)

class Simple : public LIEF::pdb::[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type")

This class represents primitive types (int, float, …) which are also named *simple* types in the PDB format.

Public Types

#### [` TYPES `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPESE>)

enum class TYPES

Identifier of the primitive type.

These values correspond to the low bits of the CodeView [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1Type>) Index.

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` VOID_ `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES5VOID_E>)

enumerator VOID\_ = 0x0003

##### [` SCHAR `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES5SCHARE>)

enumerator SCHAR = 0x0010

Signed Character.

##### [` UCHAR `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES5UCHARE>)

enumerator UCHAR = 0x0020

Unsigned Character.

##### [` RCHAR `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES5RCHARE>)

enumerator RCHAR = 0x0070

“Real” Character (char)

##### [` WCHAR `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES5WCHARE>)

enumerator WCHAR = 0x0071

Wide Character (wchar\_t).

##### [` CHAR16 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES6CHAR16E>)

enumerator CHAR16 = 0x007a

16-bit Character (char16\_t)

##### [` CHAR32 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES6CHAR32E>)

enumerator CHAR32 = 0x007b

32-bit Character (char32\_t)

##### [` CHAR8 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES5CHAR8E>)

enumerator CHAR8 = 0x007c

8-bit Character (char8\_t)

##### [` SBYTE `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES5SBYTEE>)

enumerator SBYTE = 0x0068

Signed Byte.

##### [` UBYTE `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES5UBYTEE>)

enumerator UBYTE = 0x0069

Unsigned Byte.

##### [` SSHORT `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES6SSHORTE>)

enumerator SSHORT = 0x0011

Signed Short.

##### [` USHORT `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES6USHORTE>)

enumerator USHORT = 0x0021

Unsigned Short.

##### [` SINT16 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES6SINT16E>)

enumerator SINT16 = 0x0072

Explicit Signed 16-bit Integer.

##### [` UINT16 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES6UINT16E>)

enumerator UINT16 = 0x0073

Explicit Unsigned 16-bit Integer.

##### [` SLONG `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES5SLONGE>)

enumerator SLONG = 0x0012

Signed Long.

##### [` ULONG `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES5ULONGE>)

enumerator ULONG = 0x0022

Unsigned Long.

##### [` SINT32 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES6SINT32E>)

enumerator SINT32 = 0x0074

Explicit Signed 32-bit Integer.

##### [` UINT32 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES6UINT32E>)

enumerator UINT32 = 0x0075

Explicit Unsigned 32-bit Integer.

##### [` SQUAD `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES5SQUADE>)

enumerator SQUAD = 0x0013

Signed Quadword.

##### [` UQUAD `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES5UQUADE>)

enumerator UQUAD = 0x0023

Unsigned Quadword.

##### [` SINT64 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES6SINT64E>)

enumerator SINT64 = 0x0076

Explicit Signed 64-bit Integer.

##### [` UINT64 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES6UINT64E>)

enumerator UINT64 = 0x0077

Explicit Unsigned 64-bit Integer.

##### [` SOCTA `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES5SOCTAE>)

enumerator SOCTA = 0x0014

Signed Octaword.

##### [` UOCTA `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES5UOCTAE>)

enumerator UOCTA = 0x0024

Unsigned Octaword.

##### [` SINT128 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES7SINT128E>)

enumerator SINT128 = 0x0078

Explicit Signed 128-bit Integer.

##### [` UINT128 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES7UINT128E>)

enumerator UINT128 = 0x0079

Explicit Unsigned 128-bit Integer.

##### [` FLOAT16 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES7FLOAT16E>)

enumerator FLOAT16 = 0x0046

16-bit Floating point

##### [` FLOAT32 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES7FLOAT32E>)

enumerator FLOAT32 = 0x0040

32-bit Floating point (float)

##### [` FLOAT32_PARTIAL_PRECISION `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES25FLOAT32_PARTIAL_PRECISIONE>)

enumerator FLOAT32\_PARTIAL\_PRECISION = 0x45

##### [` FLOAT48 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES7FLOAT48E>)

enumerator FLOAT48 = 0x0044

48-bit Floating point

##### [` FLOAT64 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES7FLOAT64E>)

enumerator FLOAT64 = 0x0041

64-bit Floating point (double)

##### [` FLOAT80 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES7FLOAT80E>)

enumerator FLOAT80 = 0x0042

80-bit Floating point

##### [` FLOAT128 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES8FLOAT128E>)

enumerator FLOAT128 = 0x0043

128-bit Floating point

##### [` COMPLEX16 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES9COMPLEX16E>)

enumerator COMPLEX16 = 0x0056

##### [` COMPLEX32 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES9COMPLEX32E>)

enumerator COMPLEX32 = 0x0050

##### [` COMPLEX32_PARTIAL_PRECISION `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES27COMPLEX32_PARTIAL_PRECISIONE>)

enumerator COMPLEX32\_PARTIAL\_PRECISION = 0x0055

##### [` COMPLEX48 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES9COMPLEX48E>)

enumerator COMPLEX48 = 0x0054

##### [` COMPLEX64 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES9COMPLEX64E>)

enumerator COMPLEX64 = 0x0051

##### [` COMPLEX80 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES9COMPLEX80E>)

enumerator COMPLEX80 = 0x0052

##### [` COMPLEX128 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES10COMPLEX128E>)

enumerator COMPLEX128 = 0x0053

##### [` BOOL8 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES5BOOL8E>)

enumerator BOOL8 = 0x0030

8-bit Boolean

##### [` BOOL16 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES6BOOL16E>)

enumerator BOOL16 = 0x0031

16-bit Boolean

##### [` BOOL32 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES6BOOL32E>)

enumerator BOOL32 = 0x0032

32-bit Boolean

##### [` BOOL64 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES6BOOL64E>)

enumerator BOOL64 = 0x0033

64-bit Boolean

##### [` BOOL128 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPES7BOOL128E>)

enumerator BOOL128 = 0x0034

128-bit Boolean

#### [` MODES `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5MODESE>)

enum class MODES : uint32\_t

[Modifier](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Modifier>) applied to the underlying type.

In the PDB [Simple](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Simple>) [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1Type>) encoding, these represent pointer attributes.

*Values:*

##### [` DIRECT `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5MODES6DIRECTE>)

enumerator DIRECT = 0x00000000

Not a pointer (direct access).

##### [` FAR_POINTER `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5MODES11FAR_POINTERE>)

enumerator FAR\_POINTER = 0x00000200

Far pointer.

##### [` HUGE_POINTER `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5MODES12HUGE_POINTERE>)

enumerator HUGE\_POINTER = 0x00000300

Huge pointer.

##### [` NEAR_POINTER32 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5MODES14NEAR_POINTER32E>)

enumerator NEAR\_POINTER32 = 0x00000400

32-bit Near pointer

##### [` FAR_POINTER32 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5MODES13FAR_POINTER32E>)

enumerator FAR\_POINTER32 = 0x00000500

32-bit Far pointer

##### [` NEAR_POINTER64 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5MODES14NEAR_POINTER64E>)

enumerator NEAR\_POINTER64 = 0x00000600

64-bit Near pointer

##### [` NEAR_POINTER128 `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5MODES15NEAR_POINTER128E>)

enumerator NEAR\_POINTER128 = 0x00000700

128-bit Near pointer

Public Functions

#### [` ArgsSimple `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types6Simple6SimpleEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type"), [Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types6Simple6SimpleEDpRR4Args> "LIEF::pdb::types::Simple::Simple::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Simple([Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types6Simple6SimpleEDpRR4Args> "LIEF::pdb::types::Simple::Simple::Args")&amp;&amp;... args)

#### [` type `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types6Simple4typeEv>)

[TYPES](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5TYPESE> "LIEF::pdb::types::Simple::TYPES") type() const

Returns the underlying primitive type.

#### [` modes `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types6Simple5modesEv>)

[MODES](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple5MODESE> "LIEF::pdb::types::Simple::MODES") modes() const

Returns the mode (pointer type) of this [Simple](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1types_1_1Simple>) type.

#### [` is_pointer `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types6Simple10is_pointerEv>)

inline bool is\_pointer() const

Check if this simple type is a pointer.

#### [` is_signed `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4NK4LIEF3pdb5types6Simple9is_signedEv>)

inline bool is\_signed() const

Check if the underlying type is signed.

#### [` ~Simple `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6SimpleD0Ev>)

~Simple() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types6Simple7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type") \*type)

---

## [Union](<https://lief.re/doc/latest/extended/pdb/cpp.html#union>)

### [` Union `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types5UnionE>)

class Union : public LIEF::pdb::types::[ClassLike](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9ClassLikeE> "LIEF::pdb::types::ClassLike")

This class represents a `LF_UNION` PDB type.

Public Functions

#### [` ArgsUnion `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types5Union5UnionEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[ClassLike](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types9ClassLikeE> "LIEF::pdb::types::ClassLike"), [Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types5Union5UnionEDpRR4Args> "LIEF::pdb::types::Union::Union::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Union([Args](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4IDp0EN4LIEF3pdb5types5Union5UnionEDpRR4Args> "LIEF::pdb::types::Union::Union::Args")&amp;&amp;... args)

#### [` ~Union `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types5UnionD0Ev>)

~Union() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb5types5Union7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4TypeE> "LIEF::pdb::Type") \*type)

## [Utilities](<https://lief.re/doc/latest/extended/pdb/cpp.html#utilities>)

### [` LIEF::pdb::is_pdb `](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb6is_pdbENSt11string_viewE>)

bool LIEF::pdb::is\_pdb(std::string\_view pdb\_path)

Check if the file given in parameter points to a PDB file.
