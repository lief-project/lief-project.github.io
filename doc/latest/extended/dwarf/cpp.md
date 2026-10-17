---
documentID: "97df546bf02b908886d651fe6e934050dbee923b4228827a1a017f2af1b18117"
docname: "extended/dwarf/cpp"
title: "DWARF C++ API - LIEF Documentation"
description: "DWARF C++ API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/extended/dwarf/cpp.html"
markdownURL: "https://lief.re/doc/latest/extended/dwarf/cpp.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "e43d9f29de2618c7082c74a54a0e30a6569fc0bc2d12d769aef168cc43e2bfa8"
---

# [C++](<https://lief.re/doc/latest/extended/dwarf/cpp.html#c>)

> **Note**
> 
> You can also find the Doxygen documentation here: [here](<https://lief.re/doc/latest/doxygen/>)

## [` LIEF::dwarf::load `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4loadENSt11string_viewE>)

inline std::unique\_ptr&lt;[DebugInfo](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9DebugInfoE> "LIEF::dwarf::DebugInfo")&gt; LIEF::dwarf::load(std::string\_view dwarf\_path)

Load DWARF file from the given path.

## [DebugInfo](<https://lief.re/doc/latest/extended/dwarf/cpp.html#debuginfo>)

### [` DebugInfo `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9DebugInfoE>)

class DebugInfo : public LIEF::[DebugInfo](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF9DebugInfoE> "LIEF::DebugInfo")

This class represents a DWARF debug information. It can embed different compilation units which can be accessed through [compilation\_units()](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1DebugInfo_1a39c656093867fa1db790efb88b4a132c>) .

This class can be instantiated from [LIEF::Binary::debug\_info()](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#classLIEF_1_1Binary_1ac5568087eb278ec952fb3ac7b8021ab5>) or [load()](<https://lief.re/doc/latest/extended/dwarf/cpp.html#namespaceLIEF_1_1dwarf_1ad7c22f1bf8ac111a0f45c6a4184c20a9>)

Public Types

#### [` compilation_units_it `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9DebugInfo20compilation_units_itE>)

using compilation\_units\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnitE> "LIEF::dwarf::CompilationUnit")::[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorE> "LIEF::dwarf::CompilationUnit::Iterator")&gt;

Iterator over the [CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1CompilationUnit>).

Public Functions

#### [` find_function `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf9DebugInfo13find_functionENSt11string_viewE>)

std::unique\_ptr&lt;[Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8FunctionE> "LIEF::dwarf::Function")&gt; find\_function(std::string\_view name) const

Try to find the function with the given name (mangled or not).

```cpp
const DebugInfo& info = ...;
if (auto func = info.find_function("_ZNSt6localeD1Ev")) {
  // Found
}
if (auto func = info.find_function("std::locale::~locale()")) {
  // Found
}
```

#### [` find_function `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf9DebugInfo13find_functionE8uint64_t>)

std::unique\_ptr&lt;[Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8FunctionE> "LIEF::dwarf::Function")&gt; find\_function(uint64\_t addr) const

Try to find the function at the given **virtual** address.

#### [` find_variable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf9DebugInfo13find_variableENSt11string_viewE>)

std::unique\_ptr&lt;[Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8VariableE> "LIEF::dwarf::Variable")&gt; find\_variable(std::string\_view name) const

Try to find the variable with the given name. This name can be mangled or not.

#### [` find_variable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf9DebugInfo13find_variableE8uint64_t>)

std::unique\_ptr&lt;[Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8VariableE> "LIEF::dwarf::Variable")&gt; find\_variable(uint64\_t addr) const

Try to find the variable at the given **virtual** address.

#### [` find_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf9DebugInfo9find_typeENSt11string_viewE>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")&gt; find\_type(std::string\_view name) const

Try to find the type with the given name.

#### [` compilation_units `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf9DebugInfo17compilation_unitsEv>)

[compilation\_units\_it](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9DebugInfo20compilation_units_itE> "LIEF::dwarf::DebugInfo::compilation_units_it") compilation\_units() const

Iterator on the [CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1CompilationUnit>) embedded in this dwarf.

#### [` find_function_address `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf9DebugInfo21find_function_addressENSt11string_viewE>)

virtual std::optional&lt;uint64\_t&gt; find\_function\_address(std::string\_view name) const override

Attempt to resolve the address of the function specified by `name`.

#### [` format `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf9DebugInfo6formatEv>)

inline virtual FORMAT format() const override

#### [` ~DebugInfo `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9DebugInfoD0Ev>)

virtual ~DebugInfo() override = default

#### [` DebugInfo `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9DebugInfo9DebugInfoENSt10unique_ptrIN7details9DebugInfoEEE>)

DebugInfo(std::unique\_ptr&lt;details::DebugInfo&gt; impl)

Public Static Functions

#### [` from_file `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9DebugInfo9from_fileENSt11string_viewE>)

static std::unique\_ptr&lt;[DebugInfo](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9DebugInfoE> "LIEF::dwarf::DebugInfo")&gt; from\_file(std::string\_view path)

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9DebugInfo7classofEPKN4LIEF9DebugInfoE>)

static inline bool classof(const LIEF::[DebugInfo](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF9DebugInfoE> "LIEF::DebugInfo") \*info)

---

## [CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/cpp.html#compilationunit>)

### [` CompilationUnit `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnitE>)

class CompilationUnit

This class represents a DWARF compilation unit.

Public Types

#### [` functions_it `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit12functions_itE>)

using functions\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8FunctionE> "LIEF::dwarf::Function")::[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorE> "LIEF::dwarf::Function::Iterator")&gt;

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1CompilationUnit_1_1Iterator>) over the [dwarf::Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Function>).

#### [` types_it `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8types_itE>)

using types\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")::[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorE> "LIEF::dwarf::Type::Iterator")&gt;

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1CompilationUnit_1_1Iterator>) over the [dwarf::Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Type>).

#### [` vars_it `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit7vars_itE>)

using vars\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8VariableE> "LIEF::dwarf::Variable")::[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorE> "LIEF::dwarf::Variable::Iterator")&gt;

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1CompilationUnit_1_1Iterator>) over the [CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1CompilationUnit>)’s variables.

Public Functions

#### [` CompilationUnit `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit15CompilationUnitENSt10unique_ptrIN7details15CompilationUnitEEE>)

CompilationUnit(std::unique\_ptr&lt;details::CompilationUnit&gt; impl)

#### [` ~CompilationUnit `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnitD0Ev>)

~CompilationUnit()

#### [` name `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit4nameEv>)

std::string\_view name() const

Name of the file associated with this compilation unit (e.g. `test.cpp`) Return an **empty** string if the name is not found or can’t be resolved.

This value matches the `DW_AT_name` attribute

#### [` producer `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit8producerEv>)

std::string\_view producer() const

Information about the program (or library) that generated this compilation unit. For instance, it can output: `Debian clang version 17.0.6`.

It returns an **empty** string if the producer is not present or can’t be resolved

This value matches the `DW_AT_producer` attribute

#### [` compilation_dir `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit15compilation_dirEv>)

std::string\_view compilation\_dir() const

Return the path to the directory in which the compilation took place for compiling this compilation unit (e.g. `/workdir/build`).

It returns an **empty** string if the entry is not present or can’t be resolved

This value matches the `DW_AT_comp_dir` attribute

#### [` language `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit8languageEv>)

[Language](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8LanguageE> "LIEF::dwarf::CompilationUnit::Language") language() const

Original language of this compilation unit.

This value matches the `DW_AT_language` attribute.

#### [` low_address `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit11low_addressEv>)

uint64\_t low\_address() const

Return the lowest virtual address owned by this compilation unit.

#### [` high_address `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit12high_addressEv>)

uint64\_t high\_address() const

Return the highest virtual address owned by this compilation unit.

#### [` size `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit4sizeEv>)

uint64\_t size() const

Return the size of the compilation unit according to its range of address.

If the compilation is fragmented (i.e. there are some address ranges between the lowest address and the highest that are not owned by the CU), then it returns the sum of **all** the address ranges owned by this CU.

If the compilation unit is **not** fragmented, then it basically returns `high_address - low_address`.

#### [` ranges `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit6rangesEv>)

std::vector&lt;range\_t&gt; ranges() const

Return a list of address ranges owned by this compilation unit.

If the compilation unit owns a contiguous range, it should return **a single** range.

#### [` find_function `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit13find_functionENSt11string_viewE>)

std::unique\_ptr&lt;[Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8FunctionE> "LIEF::dwarf::Function")&gt; find\_function(std::string\_view name) const

Try to find the function whose name is given in parameter.

The provided name can be demangled

#### [` find_function `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit13find_functionE8uint64_t>)

std::unique\_ptr&lt;[Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8FunctionE> "LIEF::dwarf::Function")&gt; find\_function(uint64\_t addr) const

Try to find the function at the given address.

#### [` find_variable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit13find_variableE8uint64_t>)

std::unique\_ptr&lt;[Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8VariableE> "LIEF::dwarf::Variable")&gt; find\_variable(uint64\_t addr) const

Try to find the [Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Variable>) at the given address.

#### [` find_variable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit13find_variableENSt11string_viewE>)

std::unique\_ptr&lt;[Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8VariableE> "LIEF::dwarf::Variable")&gt; find\_variable(std::string\_view name) const

Try to find the [Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Variable>) with the given name.

#### [` functions `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit9functionsEv>)

[functions\_it](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit12functions_itE> "LIEF::dwarf::CompilationUnit::functions_it") functions() const

Return an iterator over the functions implemented in this compilation unit.

Note that this iterator only iterates over the functions that have a **concrete** implementation in the compilation unit.

For instance with this code:

```cpp
inline const char* get_secret_env() {
  return getenv("MY_SECRET_ENV");
}

int main() {
  printf("%s", get_secret_env());
  return 0;
}
```

The iterator will only return **one function** for `main` since `get_secret_env` is inlined and thus, its implementation is located in `main`.

#### [` imported_functions `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit18imported_functionsEv>)

[functions\_it](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit12functions_itE> "LIEF::dwarf::CompilationUnit::functions_it") imported\_functions() const

Return an iterator over the functions **imported** in this compilation unit **but not** implemented.

For instance with this code:

```cpp
#include <cstdio>
int main() {
  printf("Hello\n");
  return 0;
}
```

`printf` is imported from the standard libc so the function is returned by the iterator. On the other hand, `main()` is implemented in this compilation unit so it is not returned by imported\_function() but [functions()](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1CompilationUnit_1abd2a370315d269756562edc57c4f33f8>).

#### [` types `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit5typesEv>)

[types\_it](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8types_itE> "LIEF::dwarf::CompilationUnit::types_it") types() const

Return an iterator over the different types defined in this compilation unit.

#### [` variables `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit9variablesEv>)

[vars\_it](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit7vars_itE> "LIEF::dwarf::CompilationUnit::vars_it") variables() const

Return an iterator over all the variables defined in this compilation unit:

```cpp
static int A = 1; // Returned by the iterator
static const char* B = "Hello"; // Returned by the iterator

int get() {
  static int C = 2; // Returned by the iterator
  return C;
}
```

#### [` to_decl `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit7to_declERK7DeclOpt>)

std::string to\_decl(const [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;opt = [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt")()) const

Generate a C/C++ definition for the functions defined in this compilation unit.

#### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorE> "LIEF::dwarf::CompilationUnit::Iterator"), std::bidirectional\_iterator\_tag, [CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnitE> "LIEF::dwarf::CompilationUnit"), std::ptrdiff\_t, const [CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnitE> "LIEF::dwarf::CompilationUnit")\*, const [CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnitE> "LIEF::dwarf::CompilationUnit")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Iterator14implementationE>)

using implementation = details::CompilationUnitIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Iterator8IteratorENSt10unique_ptrIN7details17CompilationUnitItEEE>)

Iterator(std::unique\_ptr&lt;details::CompilationUnitIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Iterator8IteratorERK8Iterator> "LIEF::dwarf::CompilationUnit::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorE> "LIEF::dwarf::CompilationUnit::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorE> "LIEF::dwarf::CompilationUnit::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Iterator8IteratorERR8Iterator> "LIEF::dwarf::CompilationUnit::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorE> "LIEF::dwarf::CompilationUnit::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorE> "LIEF::dwarf::CompilationUnit::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorE> "LIEF::dwarf::CompilationUnit::Iterator") &amp;operator++()

##### [` operator-- `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratormmEv>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorE> "LIEF::dwarf::CompilationUnit::Iterator") &amp;operator--()

##### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit8IteratormlEv>)

const [CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnitE> "LIEF::dwarf::CompilationUnit") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf15CompilationUnit8IteratorptEv>)

const [CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnitE> "LIEF::dwarf::CompilationUnit") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Iterator5yieldEv>)

std::unique\_ptr&lt;[CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnitE> "LIEF::dwarf::CompilationUnit")&gt; yield()

Transfer ownership of the compilation unit at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorppEi>)

inline DerivedT operator++(int)

##### [` operator-- `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratormmEi>)

inline DerivedT operator--(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorE> "LIEF::dwarf::CompilationUnit::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorE> "LIEF::dwarf::CompilationUnit::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorE> "LIEF::dwarf::CompilationUnit::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8IteratorE> "LIEF::dwarf::CompilationUnit::Iterator") &amp;RHS)

#### [` Language `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8LanguageE>)

class Language

Languages supported by the DWARF (v5) format. See: [https://dwarfstd.org/languages.html](<https://dwarfstd.org/languages.html>).

Some languages (like C++11, C++17, ..) have a version (11, 17, …) which is stored in a dedicated attribute: [version](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1CompilationUnit_1_1Language_1aabfee1669221d0a8fa55ed61c6455321>)

Public Types

##### [` LANG `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4LANGE>)

enum LANG

*Values:*

###### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4LANG7UNKNOWNE>)

enumerator UNKNOWN = 0

###### [` C `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4LANG1CE>)

enumerator C

###### [` CPP `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4LANG3CPPE>)

enumerator CPP

###### [` RUST `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4LANG4RUSTE>)

enumerator RUST

###### [` DART `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4LANG4DARTE>)

enumerator DART

###### [` MODULA `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4LANG6MODULAE>)

enumerator MODULA

###### [` FORTRAN `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4LANG7FORTRANE>)

enumerator FORTRAN

###### [` SWIFT `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4LANG5SWIFTE>)

enumerator SWIFT

###### [` D `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4LANG1DE>)

enumerator D

###### [` JAVA `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4LANG4JAVAE>)

enumerator JAVA

###### [` COBOL `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4LANG5COBOLE>)

enumerator COBOL

Public Functions

##### [` Language `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language8LanguageEv>)

Language() = default

##### [` Language `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language8LanguageE4LANG8uint32_t>)

inline Language([LANG](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4LANGE> "LIEF::dwarf::CompilationUnit::Language::LANG") lang, uint32\_t version)

##### [` Language `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language8LanguageE4LANG>)

inline Language([LANG](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4LANGE> "LIEF::dwarf::CompilationUnit::Language::LANG") lang)

##### [` Language `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language8LanguageERK8Language>)

Language(const [Language](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language8LanguageERK8Language> "LIEF::dwarf::CompilationUnit::Language::Language")&amp;) = default

##### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8LanguageaSERK8Language>)

[Language](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8LanguageE> "LIEF::dwarf::CompilationUnit::Language") &amp;operator=(const [Language](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8LanguageE> "LIEF::dwarf::CompilationUnit::Language")&amp;) = default

##### [` Language `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language8LanguageERR8Language>)

Language([Language](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language8LanguageERR8Language> "LIEF::dwarf::CompilationUnit::Language::Language")&amp;&amp;) = default

##### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8LanguageaSERR8Language>)

[Language](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8LanguageE> "LIEF::dwarf::CompilationUnit::Language") &amp;operator=([Language](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8LanguageE> "LIEF::dwarf::CompilationUnit::Language")&amp;&amp;) = default

##### [` ~Language `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8LanguageD0Ev>)

~Language() = default

Public Members

##### [` lang `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4langE>)

[LANG](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4LANGE> "LIEF::dwarf::CompilationUnit::Language::LANG") lang = [UNKNOWN](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language4LANG7UNKNOWNE> "LIEF::dwarf::CompilationUnit::Language::UNKNOWN")

The language itself.

##### [` version `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf15CompilationUnit8Language7versionE>)

uint32\_t version = 0

Version of the language (e.g. 17 for C++17).

---

## [Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#function>)

### [` Function `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8FunctionE>)

class Function

This class represents a DWARF function which can be associated with either: `DW_TAG_subprogram` or `DW_TAG_inlined_subroutine`.

Public Types

#### [` vars_it `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function7vars_itE>)

using vars\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8VariableE> "LIEF::dwarf::Variable")::[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorE> "LIEF::dwarf::Variable::Iterator")&gt;

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Function_1_1Iterator>) over the variables defined in the scope of this function.

#### [` parameters_t `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function12parameters_tE>)

using parameters\_t = std::vector&lt;std::unique\_ptr&lt;[Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9ParameterE> "LIEF::dwarf::Parameter")&gt;&gt;

#### [` thrown_types_t `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function14thrown_types_tE>)

using thrown\_types\_t = std::vector&lt;std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")&gt;&gt;

#### [` lexical_blocks_it `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function17lexical_blocks_itE>)

using lexical\_blocks\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlockE> "LIEF::dwarf::LexicalBlock")::[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorE> "LIEF::dwarf::LexicalBlock::Iterator")&gt;

#### [` instructions_it `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function15instructions_itE>)

using instructions\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;assembly::[Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11InstructionE> "LIEF::assembly::Instruction")::[Iterator](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly11Instruction8IteratorE> "LIEF::assembly::Instruction::Iterator")&gt;

Public Functions

#### [` Function `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8FunctionENSt10unique_ptrIN7details8FunctionEEE>)

Function(std::unique\_ptr&lt;details::Function&gt; impl)

#### [` name `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function4nameEv>)

std::string\_view name() const

The name of the function (`DW_AT_name`).

#### [` linkage_name `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function12linkage_nameEv>)

std::string\_view linkage\_name() const

The name of the function which is used for linking (`DW_AT_linkage_name`).

This name differs from [name()](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Function_1ad434782298da0c5381e5b2e30df81ad9>) as it is usually mangled. The function returns an empty string if the linkage name is not available.

#### [` address `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function7addressEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; address() const

Return the address of the function (`DW_AT_entry_pc` or `DW_AT_low_pc`).

#### [` variables `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function9variablesEv>)

[vars\_it](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function7vars_itE> "LIEF::dwarf::Function::vars_it") variables() const

Return an iterator of variables (`DW_TAG_variable`) defined within the scope of this function. This includes regular stack-based variables as well as static ones.

#### [` is_artificial `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function13is_artificialEv>)

bool is\_artificial() const

Whether this function is created by the compiler and not present in the original source code.

#### [` is_external `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function11is_externalEv>)

bool is\_external() const

Whether the function is defined **outside** the current compilation unit (`DW_AT_external`).

#### [` size `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function4sizeEv>)

uint64\_t size() const

Return the size taken by this function in the binary.

#### [` ranges `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function6rangesEv>)

std::vector&lt;range\_t&gt; ranges() const

Ranges of virtual addresses owned by this function.

#### [` debug_location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function14debug_locationEv>)

[debug\_location\_t](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF16debug_location_tE> "LIEF::debug_location_t") debug\_location() const

Original source code location.

#### [` type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function4typeEv>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")&gt; type() const

Return the [dwarf::Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Type>) associated with the **return type** of this function.

#### [` parameters `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function10parametersEv>)

[parameters\_t](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function12parameters_tE> "LIEF::dwarf::Function::parameters_t") parameters() const

Return the function’s parameters (including any template parameter).

#### [` thrown_types `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function12thrown_typesEv>)

[thrown\_types\_t](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function14thrown_types_tE> "LIEF::dwarf::Function::thrown_types_t") thrown\_types() const

List of exceptions (types) that can be thrown by the function.

For instance, given this Swift code:

```swift
func summarize(_ ratings: [Int]) throws(StatisticsError) {
  // ...
}
```

[thrown\_types()](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Function_1a2b4e486fb98e51490c08b99628d2865f>) returns one element associated with the [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Type>): `StatisticsError`.

#### [` scope `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function5scopeEv>)

std::unique\_ptr&lt;[Scope](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5ScopeE> "LIEF::dwarf::Scope")&gt; scope() const

Return the scope in which this function is defined.

#### [` instructions `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function12instructionsEv>)

[instructions\_it](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function15instructions_itE> "LIEF::dwarf::Function::instructions_it") instructions() const

Disassemble the current function by returning an iterator over the [assembly::Instruction](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#classLIEF_1_1assembly_1_1Instruction>).

#### [` lexical_blocks `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function14lexical_blocksEv>)

[lexical\_blocks\_it](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function17lexical_blocks_itE> "LIEF::dwarf::Function::lexical_blocks_it") lexical\_blocks() const

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Function_1_1Iterator>) over the [LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1LexicalBlock>) owned by this function.

#### [` description `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function11descriptionEv>)

std::string\_view description() const

Description (`DW_AT_description`) of this function or an empty string.

#### [` to_decl `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function7to_declERK7DeclOpt>)

std::string to\_decl(const [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;opt = [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt")()) const

Generates a C/C++ definition for this function.

#### [` ~Function `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8FunctionD0Ev>)

~Function()

#### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorE> "LIEF::dwarf::Function::Iterator"), std::bidirectional\_iterator\_tag, [Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8FunctionE> "LIEF::dwarf::Function"), std::ptrdiff\_t, const [Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8FunctionE> "LIEF::dwarf::Function")\*, const [Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8FunctionE> "LIEF::dwarf::Function")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8Iterator14implementationE>)

using implementation = details::FunctionIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8Iterator8IteratorENSt10unique_ptrIN7details10FunctionItEEE>)

Iterator(std::unique\_ptr&lt;details::FunctionIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8Iterator8IteratorERK8Iterator> "LIEF::dwarf::Function::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorE> "LIEF::dwarf::Function::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorE> "LIEF::dwarf::Function::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8Iterator8IteratorERR8Iterator> "LIEF::dwarf::Function::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorE> "LIEF::dwarf::Function::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorE> "LIEF::dwarf::Function::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorE> "LIEF::dwarf::Function::Iterator") &amp;operator++()

##### [` operator-- `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratormmEv>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorE> "LIEF::dwarf::Function::Iterator") &amp;operator--()

##### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function8IteratormlEv>)

const [Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8FunctionE> "LIEF::dwarf::Function") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Function8IteratorptEv>)

const [Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8FunctionE> "LIEF::dwarf::Function") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8Iterator5yieldEv>)

std::unique\_ptr&lt;[Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8FunctionE> "LIEF::dwarf::Function")&gt; yield()

Transfer ownership of the function at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorppEi>)

inline DerivedT operator++(int)

##### [` operator-- `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratormmEi>)

inline DerivedT operator--(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorE> "LIEF::dwarf::Function::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorE> "LIEF::dwarf::Function::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorE> "LIEF::dwarf::Function::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorE> "LIEF::dwarf::Function::Iterator") &amp;RHS)

---

## [Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#parameter>)

### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9ParameterE>)

class Parameter

This class represents a DWARF parameter which can be either:

- A regular function parameter (see: [parameters::Formal](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1parameters_1_1Formal>))
- A template type parameter (see: [parameters::TemplateType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1parameters_1_1TemplateType>))
- A template value parameter (see: [parameters::TemplateValue](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1parameters_1_1TemplateValue>))

Subclassed by [LIEF::dwarf::parameters::Formal](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1parameters_1_1Formal>), [LIEF::dwarf::parameters::TemplateType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1parameters_1_1TemplateType>), [LIEF::dwarf::parameters::TemplateValue](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1parameters_1_1TemplateValue>)

Public Types

#### [` KIND `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter4KINDE>)

enum class KIND

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter4KIND7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` TEMPLATE_TYPE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter4KIND13TEMPLATE_TYPEE>)

enumerator TEMPLATE\_TYPE

DW\_TAG\_template\_type\_parameter.

##### [` TEMPLATE_VALUE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter4KIND14TEMPLATE_VALUEE>)

enumerator TEMPLATE\_VALUE

DW\_TAG\_template\_value\_parameter.

##### [` FORMAL `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter4KIND6FORMALE>)

enumerator FORMAL

DW\_TAG\_formal\_parameter.

#### [` Location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter8LocationE>)

using Location = dwarf::[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location")

[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Location>) of a parameter (see: [dwarf::Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Location>)).

#### [` RegisterLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter11RegisterLocE>)

using RegisterLoc = dwarf::[RegisterLoc](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf11RegisterLocE> "LIEF::dwarf::RegisterLoc")

Register location of a parameter (see: [dwarf::RegisterLoc](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1RegisterLoc>)).

#### [` CompositeLocation `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter17CompositeLocationE>)

using CompositeLocation = dwarf::[CompositeLocation](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocationE> "LIEF::dwarf::CompositeLocation")

[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Location>) of a parameter split across several pieces (see: [dwarf::CompositeLocation](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1CompositeLocation>)).

Public Functions

#### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter9ParameterEv>)

Parameter() = delete

#### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter9ParameterERR9Parameter>)

Parameter([Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter9ParameterERR9Parameter> "LIEF::dwarf::Parameter::Parameter") &amp;&amp;other) noexcept

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9ParameteraSERR9Parameter>)

[Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9ParameterE> "LIEF::dwarf::Parameter") &amp;operator=([Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9ParameterE> "LIEF::dwarf::Parameter") &amp;&amp;other) noexcept

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9ParameteraSERK9Parameter>)

[Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9ParameterE> "LIEF::dwarf::Parameter") &amp;operator=(const [Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9ParameterE> "LIEF::dwarf::Parameter")&amp;) = delete

#### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter9ParameterERK9Parameter>)

Parameter(const [Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter9ParameterERK9Parameter> "LIEF::dwarf::Parameter::Parameter")&amp;) = delete

#### [` kind `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf9Parameter4kindEv>)

[KIND](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter4KINDE> "LIEF::dwarf::Parameter::KIND") kind() const

#### [` name `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf9Parameter4nameEv>)

std::string\_view name() const

Name of the parameter.

#### [` type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf9Parameter4typeEv>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")&gt; type() const

[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Type>) of this parameter.

#### [` location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf9Parameter8locationEv>)

std::unique\_ptr&lt;[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter8LocationE> "LIEF::dwarf::Parameter::Location")&gt; location() const

[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Location>) of this parameter. For instance it can be a specific register that is not following the calling convention.

#### [` location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf9Parameter8locationE8uint64_t>)

std::unique\_ptr&lt;[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter8LocationE> "LIEF::dwarf::Parameter::Location")&gt; location(uint64\_t pc) const

[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Location>) of this parameter when the program counter is at the given address.

#### [` locations `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf9Parameter9locationsEv>)

std::vector&lt;[LocationEntry](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf13LocationEntryE> "LIEF::dwarf::LocationEntry")&gt; locations() const

All the location entries of this parameter.

#### [` Tas `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4I0ENK4LIEF5dwarf9Parameter2asEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4I0ENK4LIEF5dwarf9Parameter2asEPK1Tv> "LIEF::dwarf::Parameter::as::T") \*as() const

#### [` ~Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9ParameterD0Ev>)

virtual ~Parameter()

Public Static Functions

#### [` create `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9Parameter6createENSt10unique_ptrIN7details9ParameterEEE>)

static std::unique\_ptr&lt;[Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9ParameterE> "LIEF::dwarf::Parameter")&gt; create(std::unique\_ptr&lt;details::Parameter&gt; impl)

---

## [Formal Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#formal-parameter>)

### [` Formal `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters6FormalE>)

class Formal : public LIEF::dwarf::[Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9ParameterE> "LIEF::dwarf::Parameter")

This class represents a regular function parameter.

For instance, given this prototype:

```cpp
int main(int argc, const char** argv);
```

The function `main` has two [parameters::Formal](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1parameters_1_1Formal>) parameters:

1. `argc` ([Parameter::name](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Parameter_1ac6bae6f20b56ca919861f2e0415f05f8>)) typed as `int` ([types::Base](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Base>) from [Parameter::type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Parameter_1a9ba0c5f5f8cb35018ca5422bd6095ce5>))
2. `argv` ([Parameter::name](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Parameter_1ac6bae6f20b56ca919861f2e0415f05f8>)) typed as `const char**` ([types::Const](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Const>) from [Parameter::type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Parameter_1a9ba0c5f5f8cb35018ca5422bd6095ce5>))

Public Functions

#### [` ~Formal `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters6FormalD0Ev>)

~Formal() override = default

#### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters6Formal9ParameterEv>)

Parameter() = delete

#### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters6Formal9ParameterERR9Parameter>)

Parameter([Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters6Formal9ParameterERR9Parameter> "LIEF::dwarf::parameters::Formal::Parameter") &amp;&amp;other) noexcept

#### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters6Formal9ParameterERK9Parameter>)

Parameter(const [Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters6Formal9ParameterERK9Parameter> "LIEF::dwarf::parameters::Formal::Parameter")&amp;) = delete

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters6Formal7classofEPK9Parameter>)

static inline bool classof(const [Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters6Formal9ParameterEv> "LIEF::dwarf::parameters::Formal::Parameter") \*P)

---

## [Template Value Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#template-value-parameter>)

### [` TemplateValue `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters13TemplateValueE>)

class TemplateValue : public LIEF::dwarf::[Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9ParameterE> "LIEF::dwarf::Parameter")

This class represents a template **value** parameter.

For instance, given this prototype:

```cpp
template<int X = 5>
void generic();
```

The function `generic` has one [parameters::TemplateValue](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1parameters_1_1TemplateValue>) parameter: `X`.

Public Functions

#### [` ~TemplateValue `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters13TemplateValueD0Ev>)

~TemplateValue() override = default

#### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters13TemplateValue9ParameterEv>)

Parameter() = delete

#### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters13TemplateValue9ParameterERR9Parameter>)

Parameter([Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters13TemplateValue9ParameterERR9Parameter> "LIEF::dwarf::parameters::TemplateValue::Parameter") &amp;&amp;other) noexcept

#### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters13TemplateValue9ParameterERK9Parameter>)

Parameter(const [Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters13TemplateValue9ParameterERK9Parameter> "LIEF::dwarf::parameters::TemplateValue::Parameter")&amp;) = delete

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters13TemplateValue7classofEPK9Parameter>)

static inline bool classof(const [Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters13TemplateValue9ParameterEv> "LIEF::dwarf::parameters::TemplateValue::Parameter") \*P)

---

## [Template Type Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#template-type-parameter>)

### [` TemplateType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters12TemplateTypeE>)

class TemplateType : public LIEF::dwarf::[Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9ParameterE> "LIEF::dwarf::Parameter")

This class represents a template **type** parameter.

For instance, given this prototype:

```cpp
template<class Y>
void generic();
```

The function `generic` has one [parameters::TemplateType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1parameters_1_1TemplateType>) parameter: `Y`.

Public Functions

#### [` ~TemplateType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters12TemplateTypeD0Ev>)

~TemplateType() override = default

#### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters12TemplateType9ParameterEv>)

Parameter() = delete

#### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters12TemplateType9ParameterERR9Parameter>)

Parameter([Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters12TemplateType9ParameterERR9Parameter> "LIEF::dwarf::parameters::TemplateType::Parameter") &amp;&amp;other) noexcept

#### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters12TemplateType9ParameterERK9Parameter>)

Parameter(const [Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters12TemplateType9ParameterERK9Parameter> "LIEF::dwarf::parameters::TemplateType::Parameter")&amp;) = delete

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters12TemplateType7classofEPK9Parameter>)

static inline bool classof(const [Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10parameters12TemplateType9ParameterEv> "LIEF::dwarf::parameters::TemplateType::Parameter") \*P)

---

## [Scope](<https://lief.re/doc/latest/extended/dwarf/cpp.html#scope>)

### [` Scope `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5ScopeE>)

class Scope

This class materializes a scope in which [Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Function>), [Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Variable>), [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Type>), … can be defined.

Public Types

#### [` TYPE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5Scope4TYPEE>)

enum class TYPE : uint32\_t

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5Scope4TYPE7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` UNION `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5Scope4TYPE5UNIONE>)

enumerator UNION

##### [` CLASS `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5Scope4TYPE5CLASSE>)

enumerator CLASS

##### [` STRUCT `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5Scope4TYPE6STRUCTE>)

enumerator STRUCT

##### [` NAMESPACE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5Scope4TYPE9NAMESPACEE>)

enumerator NAMESPACE

##### [` FUNCTION `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5Scope4TYPE8FUNCTIONE>)

enumerator FUNCTION

##### [` COMPILATION_UNIT `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5Scope4TYPE16COMPILATION_UNITE>)

enumerator COMPILATION\_UNIT

Public Functions

#### [` Scope `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5Scope5ScopeENSt10unique_ptrIN7details5ScopeEEE>)

Scope(std::unique\_ptr&lt;details::Scope&gt; impl)

#### [` name `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5Scope4nameEv>)

std::string\_view name() const

Name of the scope. For instance namespace’s name or function’s name.

#### [` parent `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5Scope6parentEv>)

std::unique\_ptr&lt;[Scope](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5ScopeE> "LIEF::dwarf::Scope")&gt; parent() const

Parent scope (if any).

#### [` type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5Scope4typeEv>)

[TYPE](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5Scope4TYPEE> "LIEF::dwarf::Scope::TYPE") type() const

The current scope type.

#### [` chained `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5Scope7chainedENSt11string_viewE>)

std::string chained(std::string\_view sep = "::") const

Represent the whole chain of all (parent) scopes using the provided separator. E.g. `ns1::ns2::Class1::Struct2::Type`.

#### [` ~Scope `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5ScopeD0Ev>)

~Scope()

---

## [Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#variable>)

### [` Variable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8VariableE>)

class Variable

This class represents a DWARF variable which can be owned by a [dwarf::Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Function>) or a [dwarf::CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1CompilationUnit>).

Public Functions

#### [` Variable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8VariableENSt10unique_ptrIN7details8VariableEEE>)

Variable(std::unique\_ptr&lt;details::Variable&gt; impl)

#### [` name `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable4nameEv>)

std::string\_view name() const

Name of the variable (usually demangled).

#### [` linkage_name `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable12linkage_nameEv>)

std::string\_view linkage\_name() const

The name of the variable which is used for linking (`DW_AT_linkage_name`).

This name differs from [name()](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Variable_1ade4acaa1eecace1b7aafea13649da2b6>) as it is usually mangled. The function returns an empty string if the linkage name is not available.

#### [` address `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable7addressEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;int64\_t&gt; address() const

Address of the variable.

If the variable is **static**, it returns the **virtual address** where it is defined. If the variable is stack-based, it returns the **relative offset** from the frame based register.

If the address can’t be resolved, it returns a [lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#errors_8hpp_1a5ff5508856d306cf99479195f4f7ddd8>).

#### [` size `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable4sizeEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; size() const

Return the size of the variable (or a [lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#errors_8hpp_1a5ff5508856d306cf99479195f4f7ddd8>) if it can’t be resolved).

This size is defined by its type.

#### [` is_constexpr `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable12is_constexprEv>)

bool is\_constexpr() const

Whether it’s a `constexpr` variable.

#### [` is_stack_based `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable14is_stack_basedEv>)

bool is\_stack\_based() const

Whether this variable is allocated on the stack.

#### [` location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable8locationEv>)

std::unique\_ptr&lt;[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location")&gt; location() const

[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Location>) of this variable.

#### [` location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable8locationE8uint64_t>)

std::unique\_ptr&lt;[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location")&gt; location(uint64\_t pc) const

[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Location>) of this variable when PC is at the given address.

#### [` locations `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable9locationsEv>)

std::vector&lt;[LocationEntry](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf13LocationEntryE> "LIEF::dwarf::LocationEntry")&gt; locations() const

All the location entries of this variable.

#### [` debug_location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable14debug_locationEv>)

[debug\_location\_t](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF16debug_location_tE> "LIEF::debug_location_t") debug\_location() const

The original source location where the variable is defined.

#### [` type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable4typeEv>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")&gt; type() const

Return the type of this variable.

#### [` scope `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable5scopeEv>)

std::unique\_ptr&lt;[Scope](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5ScopeE> "LIEF::dwarf::Scope")&gt; scope() const

Return the scope in which this variable is defined.

#### [` description `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable11descriptionEv>)

std::string\_view description() const

Description (`DW_AT_description`) of the variable or an empty string.

#### [` to_decl `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable7to_declERK7DeclOpt>)

std::string to\_decl(const [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;opt = [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt")()) const

Generates a C/C++ definition for this variable.

#### [` ~Variable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8VariableD0Ev>)

~Variable()

#### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorE> "LIEF::dwarf::Variable::Iterator"), std::bidirectional\_iterator\_tag, [Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8VariableE> "LIEF::dwarf::Variable"), std::ptrdiff\_t, const [Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8VariableE> "LIEF::dwarf::Variable")\*, const [Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8VariableE> "LIEF::dwarf::Variable")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8Iterator14implementationE>)

using implementation = details::VariableIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8Iterator8IteratorENSt10unique_ptrIN7details10VariableItEEE>)

Iterator(std::unique\_ptr&lt;details::VariableIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8Iterator8IteratorERK8Iterator> "LIEF::dwarf::Variable::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorE> "LIEF::dwarf::Variable::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorE> "LIEF::dwarf::Variable::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8Iterator8IteratorERR8Iterator> "LIEF::dwarf::Variable::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorE> "LIEF::dwarf::Variable::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorE> "LIEF::dwarf::Variable::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorE> "LIEF::dwarf::Variable::Iterator") &amp;operator++()

##### [` operator-- `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratormmEv>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorE> "LIEF::dwarf::Variable::Iterator") &amp;operator--()

##### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable8IteratormlEv>)

const [Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8VariableE> "LIEF::dwarf::Variable") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Variable8IteratorptEv>)

const [Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8VariableE> "LIEF::dwarf::Variable") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8Iterator5yieldEv>)

std::unique\_ptr&lt;[Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8VariableE> "LIEF::dwarf::Variable")&gt; yield()

Transfer ownership of the variable at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorppEi>)

inline DerivedT operator++(int)

##### [` operator-- `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratormmEi>)

inline DerivedT operator--(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorE> "LIEF::dwarf::Variable::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorE> "LIEF::dwarf::Variable::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorE> "LIEF::dwarf::Variable::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Variable8IteratorE> "LIEF::dwarf::Variable::Iterator") &amp;RHS)

---

## [Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#location>)

### [` Location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE>)

class Location

This class represents where the value of a variable or a parameter lives. It interfaces the DWARF location expression (`DW_AT_location`).

Subclassed by [LIEF::dwarf::AddressLoc](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1AddressLoc>), [LIEF::dwarf::CompositeLocation](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1CompositeLocation>), [LIEF::dwarf::ExpressionLoc](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1ExpressionLoc>), [LIEF::dwarf::FrameBaseLoc](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1FrameBaseLoc>), [LIEF::dwarf::RegisterLoc](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1RegisterLoc>), [LIEF::dwarf::RegisterOffsetLoc](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1RegisterOffsetLoc>), [LIEF::dwarf::UnavailableLoc](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1UnavailableLoc>)

Public Types

#### [` Type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location4TypeE>)

enum class Type : uint8\_t

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location4Type7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` REG `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location4Type3REGE>)

enumerator REG

The value is associated to a register.

##### [` ADDRESS `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location4Type7ADDRESSE>)

enumerator ADDRESS

The value is at a fixed memory address.

##### [` FRAME_BASE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location4Type10FRAME_BASEE>)

enumerator FRAME\_BASE

The value is at an offset of the frame base.

##### [` REGISTER_OFFSET `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location4Type15REGISTER_OFFSETE>)

enumerator REGISTER\_OFFSET

The value is at an offset of a register.

##### [` EXPRESSION `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location4Type10EXPRESSIONE>)

enumerator EXPRESSION

An unevaluated DWARF expression.

##### [` UNAVAILABLE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location4Type11UNAVAILABLEE>)

enumerator UNAVAILABLE

The value is not available.

##### [` COMPOSITE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location4Type9COMPOSITEE>)

enumerator COMPOSITE

The value is split in several pieces.

Public Functions

#### [` Location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location8LocationE4Type>)

inline explicit Location([Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location4TypeE> "LIEF::dwarf::Location::Type") ty)

#### [` Location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location8LocationERK8Location>)

Location(const [Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location8LocationERK8Location> "LIEF::dwarf::Location::Location")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationaSERK8Location>)

[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location") &amp;operator=(const [Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location")&amp;) = default

#### [` Location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location8LocationERR8Location>)

Location([Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location8LocationERR8Location> "LIEF::dwarf::Location::Location")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationaSERR8Location>)

[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location") &amp;operator=([Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location")&amp;&amp;) noexcept = default

#### [` ~Location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationD0Ev>)

virtual ~Location()

#### [` Tas `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4I0ENK4LIEF5dwarf8Location2asEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4I0ENK4LIEF5dwarf8Location2asEPK1Tv> "LIEF::dwarf::Location::as::T") \*as() const

#### [` to_string `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf8Location9to_stringEv>)

std::string to\_string() const

Human-readable description of this location.

Public Members

#### [` type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location4typeE>)

[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location4TypeE> "LIEF::dwarf::Location::Type") type = [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location4TypeE> "LIEF::dwarf::Location::Type")::[UNKNOWN](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Location4Type7UNKNOWNE> "LIEF::dwarf::Location::Type::UNKNOWN")

Friends

#### [` operator<< `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationlsERNSt7ostreamERK8Location>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location") &amp;loc)

### [` RegisterLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf11RegisterLocE>)

class RegisterLoc : public LIEF::dwarf::[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location")

The value is associated to a register (e.g. `DW_OP_reg5`).

Public Functions

#### [` RegisterLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf11RegisterLoc11RegisterLocE8uint64_t>)

inline explicit RegisterLoc(uint64\_t reg\_id)

#### [` ~RegisterLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf11RegisterLocD0Ev>)

~RegisterLoc() override

Public Members

#### [` id `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf11RegisterLoc2idE>)

uint64\_t id = 0

DWARF id of the register that must be interpreted according to the target architecture.

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf11RegisterLoc7classofEPK8Location>)

static inline bool classof(const [Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location") \*loc)

### [` AddressLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10AddressLocE>)

class AddressLoc : public LIEF::dwarf::[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location")

The value is located at a fixed memory address (e.g. `DW_OP_addr`).

Public Functions

#### [` AddressLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10AddressLoc10AddressLocE8uint64_t>)

inline explicit AddressLoc(uint64\_t value)

#### [` ~AddressLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10AddressLocD0Ev>)

~AddressLoc() override

Public Members

#### [` address `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10AddressLoc7addressE>)

uint64\_t address = 0

Memory address where the value is located.

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf10AddressLoc7classofEPK8Location>)

static inline bool classof(const [Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location") \*loc)

### [` FrameBaseLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12FrameBaseLocE>)

class FrameBaseLoc : public LIEF::dwarf::[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location")

The value is located in memory relative to the (stack) frame base.

Public Functions

#### [` FrameBaseLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12FrameBaseLoc12FrameBaseLocE7int64_t>)

inline explicit FrameBaseLoc(int64\_t value)

#### [` ~FrameBaseLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12FrameBaseLocD0Ev>)

~FrameBaseLoc() override

Public Members

#### [` offset `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12FrameBaseLoc6offsetE>)

int64\_t offset = 0

Signed byte offset from the frame base.

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12FrameBaseLoc7classofEPK8Location>)

static inline bool classof(const [Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location") \*loc)

### [` RegisterOffsetLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17RegisterOffsetLocE>)

class RegisterOffsetLoc : public LIEF::dwarf::[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location")

The value is located in memory at the address stored in a register plus a signed offset (e.g. `DW_OP_breg7 +8`).

Public Functions

#### [` RegisterOffsetLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17RegisterOffsetLoc17RegisterOffsetLocE8uint64_t7int64_t>)

inline RegisterOffsetLoc(uint64\_t reg\_id, int64\_t value)

#### [` ~RegisterOffsetLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17RegisterOffsetLocD0Ev>)

~RegisterOffsetLoc() override

Public Members

#### [` id `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17RegisterOffsetLoc2idE>)

uint64\_t id = 0

DWARF id of the register that contains the base address.

#### [` offset `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17RegisterOffsetLoc6offsetE>)

int64\_t offset = 0

Signed byte offset added to the register’s value.

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17RegisterOffsetLoc7classofEPK8Location>)

static inline bool classof(const [Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location") \*loc)

### [` ExpressionLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf13ExpressionLocE>)

class ExpressionLoc : public LIEF::dwarf::[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location")

A DWARF expression that is not evaluated by LIEF: implicit values, computed addresses, entry values, …

Public Functions

#### [` ExpressionLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf13ExpressionLoc13ExpressionLocENSt6vectorI7uint8_tEENSt6stringE>)

inline ExpressionLoc(std::vector&lt;uint8\_t&gt; bytes, std::string text)

#### [` ~ExpressionLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf13ExpressionLocD0Ev>)

~ExpressionLoc() override

Public Members

#### [` expression `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf13ExpressionLoc10expressionE>)

std::vector&lt;uint8\_t&gt; expression

Raw bytes of the DWARF expression.

#### [` description `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf13ExpressionLoc11descriptionE>)

std::string description

Textual representation of the expression (e.g. `DW_OP_lit0, DW_OP_stack_value`).

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf13ExpressionLoc7classofEPK8Location>)

static inline bool classof(const [Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location") \*loc)

### [` UnavailableLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf14UnavailableLocE>)

class UnavailableLoc : public LIEF::dwarf::[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location")

The value is not available at this location (e.g. optimized out).

Public Functions

#### [` UnavailableLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf14UnavailableLoc14UnavailableLocEv>)

inline UnavailableLoc()

#### [` ~UnavailableLoc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf14UnavailableLocD0Ev>)

~UnavailableLoc() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf14UnavailableLoc7classofEPK8Location>)

static inline bool classof(const [Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location") \*loc)

### [` CompositeLocation `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocationE>)

class CompositeLocation : public LIEF::dwarf::[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location")

The value is split into several pieces (`DW_OP_piece/DW_OP_bit_piece`), each one with its own location.

For instance, a 16-bytes structure passed in the `rdi` and `rsi` registers is described with two 8-bytes pieces.

Public Functions

#### [` CompositeLocation `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation17CompositeLocationEv>)

inline CompositeLocation()

#### [` CompositeLocation `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation17CompositeLocationERK17CompositeLocation>)

CompositeLocation(const [CompositeLocation](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation17CompositeLocationERK17CompositeLocation> "LIEF::dwarf::CompositeLocation::CompositeLocation")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocationaSERK17CompositeLocation>)

[CompositeLocation](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocationE> "LIEF::dwarf::CompositeLocation") &amp;operator=(const [CompositeLocation](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocationE> "LIEF::dwarf::CompositeLocation")&amp;) = delete

#### [` CompositeLocation `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation17CompositeLocationERR17CompositeLocation>)

CompositeLocation([CompositeLocation](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation17CompositeLocationERR17CompositeLocation> "LIEF::dwarf::CompositeLocation::CompositeLocation")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocationaSERR17CompositeLocation>)

[CompositeLocation](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocationE> "LIEF::dwarf::CompositeLocation") &amp;operator=([CompositeLocation](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocationE> "LIEF::dwarf::CompositeLocation")&amp;&amp;) noexcept = default

#### [` ~CompositeLocation `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocationD0Ev>)

~CompositeLocation() override

Public Members

#### [` pieces `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation6piecesE>)

std::vector&lt;[Piece](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation5PieceE> "LIEF::dwarf::CompositeLocation::Piece")&gt; pieces

The pieces of this location, ordered by their bit offset.

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation7classofEPK8Location>)

static inline bool classof(const [Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location") \*loc)

#### [` Piece `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation5PieceE>)

struct Piece

A piece of a composite location.

Public Types

##### [` KIND `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation5Piece4KINDE>)

enum class KIND : uint8\_t

*Values:*

###### [` BYTE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation5Piece4KIND4BYTEE>)

enumerator BYTE = 0

`DW_OP_piece`

###### [` BIT `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation5Piece4KIND3BITE>)

enumerator BIT

`DW_OP_bit_piece`

Public Members

##### [` kind `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation5Piece4kindE>)

[KIND](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation5Piece4KINDE> "LIEF::dwarf::CompositeLocation::Piece::KIND") kind = [KIND](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation5Piece4KINDE> "LIEF::dwarf::CompositeLocation::Piece::KIND")::[BYTE](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation5Piece4KIND4BYTEE> "LIEF::dwarf::CompositeLocation::Piece::KIND::BYTE")

Whether this piece comes from `DW_OP_piece` or `DW_OP_bit_piece`.

##### [` bit_size `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation5Piece8bit_sizeE>)

uint64\_t bit\_size = 0

Size of this piece in bits.

##### [` bit_offset `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation5Piece10bit_offsetE>)

uint64\_t bit\_offset = 0

Offset (in bits) of this piece within the whole value.

##### [` source_bit_offset `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation5Piece17source_bit_offsetE>)

std::optional&lt;uint64\_t&gt; source\_bit\_offset

For a `DW_OP_bit_piece`, the offset (in bits) of this piece within its location (e.g. the register).

##### [` location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf17CompositeLocation5Piece8locationE>)

std::unique\_ptr&lt;[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location")&gt; location

[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Location>) of this piece or a nullptr if it can’t be decoded.

---

## [Location Entry](<https://lief.re/doc/latest/extended/dwarf/cpp.html#location-entry>)

### [` LocationEntry `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf13LocationEntryE>)

struct LocationEntry

[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Location>) associated with the range of addresses where it is valid.

Public Functions

#### [` to_string `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf13LocationEntry9to_stringEv>)

std::string to\_string() const

Human-readable description of this entry (e.g. `[0x1130, 0x1136): register 5`).

Public Members

#### [` range `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf13LocationEntry5rangeE>)

std::optional&lt;range\_t&gt; range

Range of addresses `[low, high)` where the location is valid.

#### [` section_index `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf13LocationEntry13section_indexE>)

std::optional&lt;uint64\_t&gt; section\_index

Index of the object’s section containing the range (if any).

#### [` location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf13LocationEntry8locationE>)

std::unique\_ptr&lt;[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location")&gt; location

The location or a nullptr if the DWARF expression can’t be decoded.

Friends

#### [` operator<< `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf13LocationEntrylsERNSt7ostreamERK13LocationEntry>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [LocationEntry](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf13LocationEntryE> "LIEF::dwarf::LocationEntry") &amp;entry)

---

## [LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#lexicalblock>)

### [` LexicalBlock `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlockE>)

class LexicalBlock

This class represents a DWARF lexical block (`DW_TAG_lexical_block`).

Public Types

#### [` sub_blocks_it `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock13sub_blocks_itE>)

using sub\_blocks\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorE> "LIEF::dwarf::LexicalBlock::Iterator")&gt;

Public Functions

#### [` LexicalBlock `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock12LexicalBlockENSt10unique_ptrIN7details12LexicalBlockEEE>)

LexicalBlock(std::unique\_ptr&lt;details::LexicalBlock&gt; impl)

#### [` LexicalBlock `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock12LexicalBlockEv>)

LexicalBlock() = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlockaSERK12LexicalBlock>)

[LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlockE> "LIEF::dwarf::LexicalBlock") &amp;operator=(const [LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlockE> "LIEF::dwarf::LexicalBlock")&amp;) = delete

#### [` LexicalBlock `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock12LexicalBlockERK12LexicalBlock>)

LexicalBlock(const [LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock12LexicalBlockERK12LexicalBlock> "LIEF::dwarf::LexicalBlock::LexicalBlock")&amp;) = delete

#### [` name `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf12LexicalBlock4nameEv>)

std::string\_view name() const

Return the *name* associated with this lexical block or an empty string.

#### [` description `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf12LexicalBlock11descriptionEv>)

std::string\_view description() const

Return the description associated with this lexical block or an empty string.

#### [` sub_blocks `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf12LexicalBlock10sub_blocksEv>)

[sub\_blocks\_it](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock13sub_blocks_itE> "LIEF::dwarf::LexicalBlock::sub_blocks_it") sub\_blocks() const

Return an iterator over the sub-LexicalBlock owned by this block.

#### [` addr `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf12LexicalBlock4addrEv>)

std::optional&lt;uint64\_t&gt; addr() const

Return the start address of this block.

#### [` size `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf12LexicalBlock4sizeEv>)

uint64\_t size() const

Return the size of this block as the difference of the highest address and the lowest address.

#### [` low_pc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf12LexicalBlock6low_pcEv>)

std::optional&lt;uint64\_t&gt; low\_pc() const

Return the lowest virtual address owned by this block.

#### [` high_pc `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf12LexicalBlock7high_pcEv>)

std::optional&lt;uint64\_t&gt; high\_pc() const

Return the highest virtual address owned by this block.

#### [` ranges `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf12LexicalBlock6rangesEv>)

std::vector&lt;range\_t&gt; ranges() const

Return a list of address ranges owned by this block.

If the lexical block owns a contiguous range, it should return **a single** range.

#### [` ~LexicalBlock `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlockD0Ev>)

~LexicalBlock()

Public Static Functions

#### [` create `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock6createENSt10unique_ptrIN7details12LexicalBlockEEE>)

static std::unique\_ptr&lt;[LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlockE> "LIEF::dwarf::LexicalBlock")&gt; create(std::unique\_ptr&lt;details::LexicalBlock&gt; impl)

#### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorE> "LIEF::dwarf::LexicalBlock::Iterator"), std::bidirectional\_iterator\_tag, [LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlockE> "LIEF::dwarf::LexicalBlock"), std::ptrdiff\_t, const [LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlockE> "LIEF::dwarf::LexicalBlock")\*, const [LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlockE> "LIEF::dwarf::LexicalBlock")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8Iterator14implementationE>)

using implementation = details::LexicalBlockIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8Iterator8IteratorENSt10unique_ptrIN7details14LexicalBlockItEEE>)

Iterator(std::unique\_ptr&lt;details::LexicalBlockIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8Iterator8IteratorERK8Iterator> "LIEF::dwarf::LexicalBlock::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorE> "LIEF::dwarf::LexicalBlock::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorE> "LIEF::dwarf::LexicalBlock::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8Iterator8IteratorERR8Iterator> "LIEF::dwarf::LexicalBlock::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorE> "LIEF::dwarf::LexicalBlock::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorE> "LIEF::dwarf::LexicalBlock::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorE> "LIEF::dwarf::LexicalBlock::Iterator") &amp;operator++()

##### [` operator-- `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratormmEv>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorE> "LIEF::dwarf::LexicalBlock::Iterator") &amp;operator--()

##### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf12LexicalBlock8IteratormlEv>)

const [LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlockE> "LIEF::dwarf::LexicalBlock") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf12LexicalBlock8IteratorptEv>)

const [LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlockE> "LIEF::dwarf::LexicalBlock") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8Iterator5yieldEv>)

std::unique\_ptr&lt;[LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlockE> "LIEF::dwarf::LexicalBlock")&gt; yield()

Transfer ownership of the lexical block at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorppEi>)

inline DerivedT operator++(int)

##### [` operator-- `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratormmEi>)

inline DerivedT operator--(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorE> "LIEF::dwarf::LexicalBlock::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorE> "LIEF::dwarf::LexicalBlock::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorE> "LIEF::dwarf::LexicalBlock::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf12LexicalBlock8IteratorE> "LIEF::dwarf::LexicalBlock::Iterator") &amp;RHS)

---

## [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#type>)

### [` Type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE>)

class Type

This class represents a DWARF [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Type>) which includes:

- `DW_TAG_array_type`
- `DW_TAG_atomic_type`
- `DW_TAG_base_type`
- `DW_TAG_class_type`
- `DW_TAG_coarray_type`
- `DW_TAG_const_type`
- `DW_TAG_dynamic_type`
- `DW_TAG_enumeration_type`
- `DW_TAG_file_type`
- `DW_TAG_immutable_type`
- `DW_TAG_interface_type`
- `DW_TAG_packed_type`
- `DW_TAG_pointer_type`
- `DW_TAG_ptr_to_member_type`
- `DW_TAG_reference_type`
- `DW_TAG_restrict_type`
- `DW_TAG_rvalue_reference_type`
- `DW_TAG_set_type`
- `DW_TAG_shared_type`
- `DW_TAG_string_type`
- `DW_TAG_structure_type`
- `DW_TAG_subroutine_type`
- `DW_TAG_template_alias`
- `DW_TAG_thrown_type`
- `DW_TAG_typedef`
- `DW_TAG_union_type`
- `DW_TAG_unspecified_type`
- `DW_TAG_volatile_type`

Subclassed by [LIEF::dwarf::types::Array](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Array>), [LIEF::dwarf::types::Atomic](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Atomic>), [LIEF::dwarf::types::Base](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Base>), [LIEF::dwarf::types::ClassLike](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1ClassLike>), [LIEF::dwarf::types::Coarray](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Coarray>), [LIEF::dwarf::types::Const](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Const>), [LIEF::dwarf::types::Dynamic](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Dynamic>), [LIEF::dwarf::types::Enum](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Enum>), [LIEF::dwarf::types::File](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1File>), [LIEF::dwarf::types::Immutable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Immutable>), [LIEF::dwarf::types::Interface](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Interface>), [LIEF::dwarf::types::Pointer](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Pointer>), [LIEF::dwarf::types::PointerToMember](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1PointerToMember>), [LIEF::dwarf::types::RValueReference](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1RValueReference>), [LIEF::dwarf::types::Reference](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Reference>), [LIEF::dwarf::types::Restrict](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Restrict>), [LIEF::dwarf::types::SetTy](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1SetTy>), [LIEF::dwarf::types::Shared](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Shared>), [LIEF::dwarf::types::StringTy](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1StringTy>), [LIEF::dwarf::types::Subroutine](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Subroutine>), [LIEF::dwarf::types::TemplateAlias](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1TemplateAlias>), [LIEF::dwarf::types::Thrown](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Thrown>), [LIEF::dwarf::types::Typedef](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Typedef>), [LIEF::dwarf::types::Volatile](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Volatile>)

Public Types

#### [` KIND `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KINDE>)

enum class KIND

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` UNSPECIFIED `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND11UNSPECIFIEDE>)

enumerator UNSPECIFIED

##### [` BASE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND4BASEE>)

enumerator BASE

##### [` CONST_KIND `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND10CONST_KINDE>)

enumerator CONST\_KIND

##### [` CLASS `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND5CLASSE>)

enumerator CLASS

##### [` ARRAY `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND5ARRAYE>)

enumerator ARRAY

##### [` POINTER `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND7POINTERE>)

enumerator POINTER

##### [` STRUCT `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND6STRUCTE>)

enumerator STRUCT

##### [` UNION `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND5UNIONE>)

enumerator UNION

##### [` TYPEDEF `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND7TYPEDEFE>)

enumerator TYPEDEF

##### [` REF `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND3REFE>)

enumerator REF

##### [` SET_TYPE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND8SET_TYPEE>)

enumerator SET\_TYPE

##### [` STRING `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND6STRINGE>)

enumerator STRING

##### [` SUBROUTINE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND10SUBROUTINEE>)

enumerator SUBROUTINE

##### [` POINTER_MEMBER `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND14POINTER_MEMBERE>)

enumerator POINTER\_MEMBER

##### [` PACKED `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND6PACKEDE>)

enumerator PACKED

##### [` FILE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND4FILEE>)

enumerator FILE

##### [` THROWN `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND6THROWNE>)

enumerator THROWN

##### [` VOLATILE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND8VOLATILEE>)

enumerator VOLATILE

##### [` RESTRICT `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND8RESTRICTE>)

enumerator RESTRICT

##### [` INTERFACE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND9INTERFACEE>)

enumerator INTERFACE

##### [` SHARED `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND6SHAREDE>)

enumerator SHARED

##### [` RVALREF `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND7RVALREFE>)

enumerator RVALREF

##### [` TEMPLATE_ALIAS `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND14TEMPLATE_ALIASE>)

enumerator TEMPLATE\_ALIAS

##### [` COARRAY `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND7COARRAYE>)

enumerator COARRAY

##### [` DYNAMIC `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND7DYNAMICE>)

enumerator DYNAMIC

##### [` ATOMIC `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND6ATOMICE>)

enumerator ATOMIC

##### [` IMMUTABLE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND9IMMUTABLEE>)

enumerator IMMUTABLE

##### [` ENUM `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KIND4ENUME>)

enumerator ENUM

Public Functions

#### [` Type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4TypeENSt10unique_ptrIN7details4TypeEEE>)

Type(std::unique\_ptr&lt;details::Type&gt; impl)

#### [` Type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4TypeERN7details4TypeE>)

Type(details::Type &amp;impl)

#### [` Type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4TypeERK4Type>)

Type(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4TypeERK4Type> "LIEF::dwarf::Type::Type")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeaSERK4Type>)

[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") &amp;operator=(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")&amp;) = delete

#### [` Type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4TypeERR4Type>)

Type([Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4TypeERR4Type> "LIEF::dwarf::Type::Type")&amp;&amp;) noexcept

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeaSERR4Type>)

[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") &amp;operator=([Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")&amp;&amp;) noexcept

#### [` ~Type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeD0Ev>)

virtual ~Type()

#### [` kind `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf4Type4kindEv>)

[KIND](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type4KINDE> "LIEF::dwarf::Type::KIND") kind() const

#### [` is_unspecified `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf4Type14is_unspecifiedEv>)

inline bool is\_unspecified() const

Whether this type is a `DW_TAG_unspecified_type`.

#### [` name `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf4Type4nameEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;std::string\_view&gt; name() const

Return the type’s name using either `DW_AT_name` or `DW_AT_picture_string` (if any).

#### [` size `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf4Type4sizeEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; size() const

Return the size of the type or an error if it can’t be computed.

This size should match the equivalent of `sizeof(Type)`.

#### [` location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf4Type8locationEv>)

[debug\_location\_t](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF16debug_location_tE> "LIEF::debug_location_t") location() const

Return the debug location where this type is defined.

#### [` scope `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf4Type5scopeEv>)

std::unique\_ptr&lt;[Scope](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5ScopeE> "LIEF::dwarf::Scope")&gt; scope() const

Return the scope in which this type is defined.

#### [` to_decl `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf4Type7to_declERK7DeclOpt>)

std::string to\_decl(const [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;opt = [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt")()) const

Generates a C/C++ definition for this type.

#### [` Tas `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4I0ENK4LIEF5dwarf4Type2asEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4I0ENK4LIEF5dwarf4Type2asEPK1Tv> "LIEF::dwarf::Type::as::T") \*as() const

Public Static Functions

#### [` create `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type6createENSt10unique_ptrIN7details4TypeEEE>)

static std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")&gt; create(std::unique\_ptr&lt;details::Type&gt; impl)

#### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorE> "LIEF::dwarf::Type::Iterator"), std::bidirectional\_iterator\_tag, [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), std::ptrdiff\_t, const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")\*, const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8Iterator14implementationE>)

using implementation = details::TypeIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8Iterator8IteratorENSt10unique_ptrIN7details6TypeItEEE>)

Iterator(std::unique\_ptr&lt;details::TypeIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8Iterator8IteratorERK8Iterator> "LIEF::dwarf::Type::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorE> "LIEF::dwarf::Type::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorE> "LIEF::dwarf::Type::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8Iterator8IteratorERR8Iterator> "LIEF::dwarf::Type::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorE> "LIEF::dwarf::Type::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorE> "LIEF::dwarf::Type::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorE> "LIEF::dwarf::Type::Iterator") &amp;operator++()

##### [` operator-- `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratormmEv>)

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorE> "LIEF::dwarf::Type::Iterator") &amp;operator--()

##### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf4Type8IteratormlEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf4Type8IteratorptEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8Iterator5yieldEv>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")&gt; yield()

Transfer ownership of the type at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorppEi>)

inline DerivedT operator++(int)

##### [` operator-- `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratormmEi>)

inline DerivedT operator--(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorE> "LIEF::dwarf::Type::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorE> "LIEF::dwarf::Type::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorE> "LIEF::dwarf::Type::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4Type8IteratorE> "LIEF::dwarf::Type::Iterator") &amp;RHS)

---

## [Array](<https://lief.re/doc/latest/extended/dwarf/cpp.html#array>)

### [` Array `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ArrayE>)

class Array : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_array_type`.

Public Functions

#### [` ArgsArray `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types5Array5ArrayEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types5Array5ArrayEDpRR4Args> "LIEF::dwarf::types::Array::Array::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Array([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types5Array5ArrayEDpRR4Args> "LIEF::dwarf::types::Array::Array::Args")&amp;&amp;... args)

#### [` Array `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Array5ArrayERK5Array>)

Array(const [Array](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Array5ArrayERK5Array> "LIEF::dwarf::types::Array::Array")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ArrayaSERK5Array>)

[Array](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ArrayE> "LIEF::dwarf::types::Array") &amp;operator=(const [Array](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ArrayE> "LIEF::dwarf::types::Array")&amp;) = delete

#### [` Array `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Array5ArrayERR5Array>)

Array([Array](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Array5ArrayERR5Array> "LIEF::dwarf::types::Array::Array")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ArrayaSERR5Array>)

[Array](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ArrayE> "LIEF::dwarf::types::Array") &amp;operator=([Array](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ArrayE> "LIEF::dwarf::types::Array")&amp;&amp;) noexcept = default

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types5Array15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*underlying\_type() const

The underlying type of this array.

#### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types5ArrayptEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator-&gt;() const

#### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types5ArraymlEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") &amp;operator\*() const

#### [` size_info `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types5Array9size_infoEv>)

[size\_info\_t](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Array11size_info_tE> "LIEF::dwarf::types::Array::size_info_t") size\_info() const

Return information about the size of this array.

This size info is usually embedded in a `DW_TAG_subrange_type` DIE which is represented by the [size\_info\_t](<https://lief.re/doc/latest/extended/dwarf/cpp.html#structLIEF_1_1dwarf_1_1types_1_1Array_1_1size__info__t>) structure.

#### [` ~Array `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ArrayD0Ev>)

~Array() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Array7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

#### [` size_info_t `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Array11size_info_tE>)

struct size\_info\_t

[Structure](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Structure>) that wraps information about the dimension of this array.

Public Functions

##### [` operator bool `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types5Array11size_info_tcvbEv>)

inline operator bool() const

Public Members

##### [` type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Array11size_info_t4typeE>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")&gt; type = nullptr

[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Type>) of the **index** for this array.

For instance in `uint8_t[3]` the index type could be set to a `size_t`.

##### [` name `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Array11size_info_t4nameE>)

std::string name

Name of the index (usually not relevant like `__ARRAY_SIZE_TYPE__`).

##### [` size `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Array11size_info_t4sizeE>)

size\_t size = 0

Size of the array. For instance in `uint8_t[3]`, it returns 3.

---

## [Base](<https://lief.re/doc/latest/extended/dwarf/cpp.html#base>)

### [` Base `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4BaseE>)

class Base : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class wraps the `DW_TAG_base_type` type which can be used &amp;#8212; for instance &amp;#8212; to represent integers or primitive types.

Public Types

#### [` ENCODING `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Base8ENCODINGE>)

enum class ENCODING

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Base8ENCODING4NONEE>)

enumerator NONE = 0

##### [` SIGNED `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Base8ENCODING6SIGNEDE>)

enumerator SIGNED

Mirror `DW_ATE_signed`.

##### [` SIGNED_CHAR `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Base8ENCODING11SIGNED_CHARE>)

enumerator SIGNED\_CHAR

Mirror `DW_ATE_signed_char`.

##### [` UNSIGNED `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Base8ENCODING8UNSIGNEDE>)

enumerator UNSIGNED

Mirror `DW_ATE_unsigned`.

##### [` UNSIGNED_CHAR `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Base8ENCODING13UNSIGNED_CHARE>)

enumerator UNSIGNED\_CHAR

Mirror `DW_ATE_unsigned_char`.

##### [` FLOAT `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Base8ENCODING5FLOATE>)

enumerator FLOAT

Mirror `DW_ATE_float`.

##### [` BOOLEAN `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Base8ENCODING7BOOLEANE>)

enumerator BOOLEAN

Mirror `DW_ATE_boolean`.

##### [` ADDRESS `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Base8ENCODING7ADDRESSE>)

enumerator ADDRESS

Mirror `DW_ATE_address`.

Public Functions

#### [` ArgsBase `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types4Base4BaseEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types4Base4BaseEDpRR4Args> "LIEF::dwarf::types::Base::Base::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Base([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types4Base4BaseEDpRR4Args> "LIEF::dwarf::types::Base::Base::Args")&amp;&amp;... args)

#### [` Base `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Base4BaseERK4Base>)

Base(const [Base](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Base4BaseERK4Base> "LIEF::dwarf::types::Base::Base")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4BaseaSERK4Base>)

[Base](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4BaseE> "LIEF::dwarf::types::Base") &amp;operator=(const [Base](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4BaseE> "LIEF::dwarf::types::Base")&amp;) = delete

#### [` Base `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Base4BaseERR4Base>)

Base([Base](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Base4BaseERR4Base> "LIEF::dwarf::types::Base::Base")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4BaseaSERR4Base>)

[Base](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4BaseE> "LIEF::dwarf::types::Base") &amp;operator=([Base](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4BaseE> "LIEF::dwarf::types::Base")&amp;&amp;) noexcept = default

#### [` encoding `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types4Base8encodingEv>)

[ENCODING](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Base8ENCODINGE> "LIEF::dwarf::types::Base::ENCODING") encoding() const

Describe how the base type is encoded and should be interpreted.

#### [` ~Base `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4BaseD0Ev>)

~Base() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Base7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [ClassLike](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classlike>)

### [` ClassLike `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLikeE>)

class ClassLike : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class abstracts a DWARF aggregate: `DW_TAG_structure_type`, `DW_TAG_class_type`, `DW_TAG_union_type`.

Subclassed by [LIEF::dwarf::types::Class](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Class>), [LIEF::dwarf::types::Packed](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Packed>), [LIEF::dwarf::types::Structure](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Structure>), [LIEF::dwarf::types::Union](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Union>)

Public Types

#### [` functions_it `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike12functions_itE>)

using functions\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8FunctionE> "LIEF::dwarf::Function")::[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8Function8IteratorE> "LIEF::dwarf::Function::Iterator")&gt;

Public Functions

#### [` ArgsClassLike `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types9ClassLike9ClassLikeEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types9ClassLike9ClassLikeEDpRR4Args> "LIEF::dwarf::types::ClassLike::ClassLike::Args")&amp;&amp;...&gt;&gt;&gt;  
inline ClassLike([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types9ClassLike9ClassLikeEDpRR4Args> "LIEF::dwarf::types::ClassLike::ClassLike::Args")&amp;&amp;... args)

#### [` ClassLike `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike9ClassLikeERK9ClassLike>)

ClassLike(const [ClassLike](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike9ClassLikeERK9ClassLike> "LIEF::dwarf::types::ClassLike::ClassLike")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLikeaSERK9ClassLike>)

[ClassLike](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLikeE> "LIEF::dwarf::types::ClassLike") &amp;operator=(const [ClassLike](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLikeE> "LIEF::dwarf::types::ClassLike")&amp;) = delete

#### [` ClassLike `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike9ClassLikeERR9ClassLike>)

ClassLike([ClassLike](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike9ClassLikeERR9ClassLike> "LIEF::dwarf::types::ClassLike::ClassLike")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLikeaSERR9ClassLike>)

[ClassLike](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLikeE> "LIEF::dwarf::types::ClassLike") &amp;operator=([ClassLike](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLikeE> "LIEF::dwarf::types::ClassLike")&amp;&amp;) noexcept = default

#### [` members `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types9ClassLike7membersEv>)

std::vector&lt;[Member](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike6MemberE> "LIEF::dwarf::types::ClassLike::Member")&gt; members() const

Return the list of all the attributes defined in this class-like type.

#### [` find_member `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types9ClassLike11find_memberE8uint64_t>)

std::unique\_ptr&lt;[Member](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike6MemberE> "LIEF::dwarf::types::ClassLike::Member")&gt; find\_member(uint64\_t offset) const

Try to find the attribute at the given offset.

#### [` functions `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types9ClassLike9functionsEv>)

[functions\_it](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike12functions_itE> "LIEF::dwarf::types::ClassLike::functions_it") functions() const

[Iterator](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Type_1_1Iterator>) over the functions defined by the class-like.

#### [` ~ClassLike `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLikeD0Ev>)

~ClassLike() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

#### [` Member `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike6MemberE>)

class Member

This represents a class/struct/union attribute.

Public Functions

##### [` Member `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike6Member6MemberENSt10unique_ptrIN7details6MemberEEE>)

Member(std::unique\_ptr&lt;details::Member&gt; impl)

##### [` Member `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike6Member6MemberERR6Member>)

Member([Member](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike6Member6MemberERR6Member> "LIEF::dwarf::types::ClassLike::Member::Member") &amp;&amp;other) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike6MemberaSERR6Member>)

[Member](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike6MemberE> "LIEF::dwarf::types::ClassLike::Member") &amp;operator=([Member](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike6MemberE> "LIEF::dwarf::types::ClassLike::Member") &amp;&amp;other) noexcept

##### [` Member `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike6Member6MemberERK6Member>)

Member(const [Member](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike6Member6MemberERK6Member> "LIEF::dwarf::types::ClassLike::Member::Member")&amp;) = delete

##### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike6MemberaSERK6Member>)

[Member](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike6MemberE> "LIEF::dwarf::types::ClassLike::Member") &amp;operator=(const [Member](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike6MemberE> "LIEF::dwarf::types::ClassLike::Member")&amp;) = delete

##### [` name `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types9ClassLike6Member4nameEv>)

std::string\_view name() const

Name of the member.

##### [` offset `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types9ClassLike6Member6offsetEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; offset() const

Offset of the current member in the struct/union/class.

If the offset can’t be resolved it returns a [lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#errors_8hpp_1a5ff5508856d306cf99479195f4f7ddd8>)

##### [` bit_offset `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types9ClassLike6Member10bit_offsetEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; bit\_offset() const

Offset of the current member in **bits** in the struct/union/class.

This function differs from [offset()](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1ClassLike_1_1Member_1aa4c191a49f66789cc612f8cf451931b4>) for aggregates using bit-field declaration:

```cpp
struct S {
  int flag : 4;
  int opt : 1
};
```

Usually, `offset() * 8 == bit_offset()`

If the offset can’t be resolved it returns a [lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#errors_8hpp_1a5ff5508856d306cf99479195f4f7ddd8>)

##### [` bit_size `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types9ClassLike6Member8bit_sizeEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; bit\_size() const

If the current member is a bit-field, this function returns its size in bits.

##### [` type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types9ClassLike6Member4typeEv>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")&gt; type() const

[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Type>) of the current member.

##### [` is_external `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types9ClassLike6Member11is_externalEv>)

bool is\_external() const

##### [` is_declaration `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types9ClassLike6Member14is_declarationEv>)

bool is\_declaration() const

##### [` ~Member `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLike6MemberD0Ev>)

~Member()

---

## [Structure](<https://lief.re/doc/latest/extended/dwarf/cpp.html#structure>)

### [` Structure `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9StructureE>)

class Structure : public LIEF::dwarf::types::[ClassLike](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLikeE> "LIEF::dwarf::types::ClassLike")

This class represents a DWARF `struct` type (`DW_TAG_structure_type`).

Public Functions

#### [` ArgsStructure `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types9Structure9StructureEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[ClassLike](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLikeE> "LIEF::dwarf::types::ClassLike"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types9Structure9StructureEDpRR4Args> "LIEF::dwarf::types::Structure::Structure::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Structure([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types9Structure9StructureEDpRR4Args> "LIEF::dwarf::types::Structure::Structure::Args")&amp;&amp;... args)

#### [` Structure `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Structure9StructureERK9Structure>)

Structure(const [Structure](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Structure9StructureERK9Structure> "LIEF::dwarf::types::Structure::Structure")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9StructureaSERK9Structure>)

[Structure](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9StructureE> "LIEF::dwarf::types::Structure") &amp;operator=(const [Structure](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9StructureE> "LIEF::dwarf::types::Structure")&amp;) = delete

#### [` Structure `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Structure9StructureERR9Structure>)

Structure([Structure](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Structure9StructureERR9Structure> "LIEF::dwarf::types::Structure::Structure")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9StructureaSERR9Structure>)

[Structure](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9StructureE> "LIEF::dwarf::types::Structure") &amp;operator=([Structure](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9StructureE> "LIEF::dwarf::types::Structure")&amp;&amp;) noexcept = default

#### [` ~Structure `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9StructureD0Ev>)

~Structure() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Structure7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Class](<https://lief.re/doc/latest/extended/dwarf/cpp.html#class>)

### [` Class `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ClassE>)

class Class : public LIEF::dwarf::types::[ClassLike](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLikeE> "LIEF::dwarf::types::ClassLike")

This class represents a DWARF `class` type (`DW_TAG_class_type`).

Public Functions

#### [` ArgsClass `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types5Class5ClassEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[ClassLike](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLikeE> "LIEF::dwarf::types::ClassLike"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types5Class5ClassEDpRR4Args> "LIEF::dwarf::types::Class::Class::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Class([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types5Class5ClassEDpRR4Args> "LIEF::dwarf::types::Class::Class::Args")&amp;&amp;... args)

#### [` Class `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Class5ClassERK5Class>)

Class(const [Class](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Class5ClassERK5Class> "LIEF::dwarf::types::Class::Class")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ClassaSERK5Class>)

[Class](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ClassE> "LIEF::dwarf::types::Class") &amp;operator=(const [Class](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ClassE> "LIEF::dwarf::types::Class")&amp;) = delete

#### [` Class `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Class5ClassERR5Class>)

Class([Class](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Class5ClassERR5Class> "LIEF::dwarf::types::Class::Class")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ClassaSERR5Class>)

[Class](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ClassE> "LIEF::dwarf::types::Class") &amp;operator=([Class](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ClassE> "LIEF::dwarf::types::Class")&amp;&amp;) noexcept = default

#### [` ~Class `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ClassD0Ev>)

~Class() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Class7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Union](<https://lief.re/doc/latest/extended/dwarf/cpp.html#union>)

### [` Union `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5UnionE>)

class Union : public LIEF::dwarf::types::[ClassLike](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLikeE> "LIEF::dwarf::types::ClassLike")

This class represents a DWARF `union` type (`DW_TAG_union_type`).

Public Functions

#### [` ArgsUnion `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types5Union5UnionEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[ClassLike](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLikeE> "LIEF::dwarf::types::ClassLike"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types5Union5UnionEDpRR4Args> "LIEF::dwarf::types::Union::Union::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Union([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types5Union5UnionEDpRR4Args> "LIEF::dwarf::types::Union::Union::Args")&amp;&amp;... args)

#### [` Union `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Union5UnionERK5Union>)

Union(const [Union](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Union5UnionERK5Union> "LIEF::dwarf::types::Union::Union")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5UnionaSERK5Union>)

[Union](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5UnionE> "LIEF::dwarf::types::Union") &amp;operator=(const [Union](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5UnionE> "LIEF::dwarf::types::Union")&amp;) = delete

#### [` Union `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Union5UnionERR5Union>)

Union([Union](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Union5UnionERR5Union> "LIEF::dwarf::types::Union::Union")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5UnionaSERR5Union>)

[Union](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5UnionE> "LIEF::dwarf::types::Union") &amp;operator=([Union](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5UnionE> "LIEF::dwarf::types::Union")&amp;&amp;) noexcept = default

#### [` ~Union `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5UnionD0Ev>)

~Union() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Union7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Packed](<https://lief.re/doc/latest/extended/dwarf/cpp.html#packed>)

### [` Packed `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6PackedE>)

class Packed : public LIEF::dwarf::types::[ClassLike](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLikeE> "LIEF::dwarf::types::ClassLike")

This class represents a DWARF `packed` type (`DW_TAG_packed_type`).

Public Functions

#### [` ArgsPacked `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types6Packed6PackedEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[ClassLike](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ClassLikeE> "LIEF::dwarf::types::ClassLike"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types6Packed6PackedEDpRR4Args> "LIEF::dwarf::types::Packed::Packed::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Packed([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types6Packed6PackedEDpRR4Args> "LIEF::dwarf::types::Packed::Packed::Args")&amp;&amp;... args)

#### [` Packed `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Packed6PackedERK6Packed>)

Packed(const [Packed](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Packed6PackedERK6Packed> "LIEF::dwarf::types::Packed::Packed")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6PackedaSERK6Packed>)

[Packed](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6PackedE> "LIEF::dwarf::types::Packed") &amp;operator=(const [Packed](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6PackedE> "LIEF::dwarf::types::Packed")&amp;) = delete

#### [` Packed `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Packed6PackedERR6Packed>)

Packed([Packed](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Packed6PackedERR6Packed> "LIEF::dwarf::types::Packed::Packed")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6PackedaSERR6Packed>)

[Packed](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6PackedE> "LIEF::dwarf::types::Packed") &amp;operator=([Packed](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6PackedE> "LIEF::dwarf::types::Packed")&amp;&amp;) noexcept = default

#### [` ~Packed `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6PackedD0Ev>)

~Packed() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Packed7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Const](<https://lief.re/doc/latest/extended/dwarf/cpp.html#const>)

### [` Const `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ConstE>)

class Const : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_const_type`.

Public Functions

#### [` ArgsConst `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types5Const5ConstEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types5Const5ConstEDpRR4Args> "LIEF::dwarf::types::Const::Const::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Const([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types5Const5ConstEDpRR4Args> "LIEF::dwarf::types::Const::Const::Args")&amp;&amp;... args)

#### [` Const `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Const5ConstERK5Const>)

Const(const [Const](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Const5ConstERK5Const> "LIEF::dwarf::types::Const::Const")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ConstaSERK5Const>)

[Const](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ConstE> "LIEF::dwarf::types::Const") &amp;operator=(const [Const](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ConstE> "LIEF::dwarf::types::Const")&amp;) = delete

#### [` Const `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Const5ConstERR5Const>)

Const([Const](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Const5ConstERR5Const> "LIEF::dwarf::types::Const::Const")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ConstaSERR5Const>)

[Const](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ConstE> "LIEF::dwarf::types::Const") &amp;operator=([Const](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ConstE> "LIEF::dwarf::types::Const")&amp;&amp;) noexcept = default

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types5Const15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*underlying\_type() const

The underlying type being const-ed.

#### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types5ConstptEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator-&gt;() const

#### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types5ConstmlEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") &amp;operator\*() const

#### [` ~Const `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5ConstD0Ev>)

~Const() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5Const7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Pointer](<https://lief.re/doc/latest/extended/dwarf/cpp.html#pointer>)

### [` Pointer `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7PointerE>)

class Pointer : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_pointer_type` DWARF type.

Public Functions

#### [` ArgsPointer `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types7Pointer7PointerEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types7Pointer7PointerEDpRR4Args> "LIEF::dwarf::types::Pointer::Pointer::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Pointer([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types7Pointer7PointerEDpRR4Args> "LIEF::dwarf::types::Pointer::Pointer::Args")&amp;&amp;... args)

#### [` Pointer `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Pointer7PointerERK7Pointer>)

Pointer(const [Pointer](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Pointer7PointerERK7Pointer> "LIEF::dwarf::types::Pointer::Pointer")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7PointeraSERK7Pointer>)

[Pointer](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7PointerE> "LIEF::dwarf::types::Pointer") &amp;operator=(const [Pointer](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7PointerE> "LIEF::dwarf::types::Pointer")&amp;) = delete

#### [` Pointer `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Pointer7PointerERR7Pointer>)

Pointer([Pointer](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Pointer7PointerERR7Pointer> "LIEF::dwarf::types::Pointer::Pointer")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7PointeraSERR7Pointer>)

[Pointer](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7PointerE> "LIEF::dwarf::types::Pointer") &amp;operator=([Pointer](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7PointerE> "LIEF::dwarf::types::Pointer")&amp;&amp;) noexcept = default

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types7Pointer15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*underlying\_type() const

The type pointed by this pointer.

#### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types7PointerptEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator-&gt;() const

#### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types7PointermlEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") &amp;operator\*() const

#### [` ~Pointer `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7PointerD0Ev>)

~Pointer() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Pointer7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Typedef](<https://lief.re/doc/latest/extended/dwarf/cpp.html#typedef>)

### [` Typedef `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7TypedefE>)

class Typedef : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_typedef` type.

Public Functions

#### [` ArgsTypedef `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types7Typedef7TypedefEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types7Typedef7TypedefEDpRR4Args> "LIEF::dwarf::types::Typedef::Typedef::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Typedef([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types7Typedef7TypedefEDpRR4Args> "LIEF::dwarf::types::Typedef::Typedef::Args")&amp;&amp;... args)

#### [` Typedef `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Typedef7TypedefERK7Typedef>)

Typedef(const [Typedef](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Typedef7TypedefERK7Typedef> "LIEF::dwarf::types::Typedef::Typedef")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7TypedefaSERK7Typedef>)

[Typedef](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7TypedefE> "LIEF::dwarf::types::Typedef") &amp;operator=(const [Typedef](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7TypedefE> "LIEF::dwarf::types::Typedef")&amp;) = delete

#### [` Typedef `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Typedef7TypedefERR7Typedef>)

Typedef([Typedef](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Typedef7TypedefERR7Typedef> "LIEF::dwarf::types::Typedef::Typedef")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7TypedefaSERR7Typedef>)

[Typedef](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7TypedefE> "LIEF::dwarf::types::Typedef") &amp;operator=([Typedef](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7TypedefE> "LIEF::dwarf::types::Typedef")&amp;&amp;) noexcept = default

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types7Typedef15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*underlying\_type() const

The type aliased by this typedef.

#### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types7TypedefptEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator-&gt;() const

#### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types7TypedefmlEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") &amp;operator\*() const

#### [` ~Typedef `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7TypedefD0Ev>)

~Typedef() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Typedef7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Atomic](<https://lief.re/doc/latest/extended/dwarf/cpp.html#atomic>)

### [` Atomic `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6AtomicE>)

class Atomic : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_atomic_type`.

Public Functions

#### [` ArgsAtomic `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types6Atomic6AtomicEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types6Atomic6AtomicEDpRR4Args> "LIEF::dwarf::types::Atomic::Atomic::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Atomic([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types6Atomic6AtomicEDpRR4Args> "LIEF::dwarf::types::Atomic::Atomic::Args")&amp;&amp;... args)

#### [` Atomic `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Atomic6AtomicERK6Atomic>)

Atomic(const [Atomic](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Atomic6AtomicERK6Atomic> "LIEF::dwarf::types::Atomic::Atomic")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6AtomicaSERK6Atomic>)

[Atomic](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6AtomicE> "LIEF::dwarf::types::Atomic") &amp;operator=(const [Atomic](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6AtomicE> "LIEF::dwarf::types::Atomic")&amp;) = delete

#### [` Atomic `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Atomic6AtomicERR6Atomic>)

Atomic([Atomic](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Atomic6AtomicERR6Atomic> "LIEF::dwarf::types::Atomic::Atomic")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6AtomicaSERR6Atomic>)

[Atomic](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6AtomicE> "LIEF::dwarf::types::Atomic") &amp;operator=([Atomic](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6AtomicE> "LIEF::dwarf::types::Atomic")&amp;&amp;) noexcept = default

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types6Atomic15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*underlying\_type() const

The underlying type being atomic.

#### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types6AtomicptEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator-&gt;() const

#### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types6AtomicmlEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") &amp;operator\*() const

#### [` ~Atomic `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6AtomicD0Ev>)

~Atomic() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Atomic7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Coarray](<https://lief.re/doc/latest/extended/dwarf/cpp.html#coarray>)

### [` Coarray `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7CoarrayE>)

class Coarray : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_coarray_type`.

Public Functions

#### [` ArgsCoarray `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types7Coarray7CoarrayEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types7Coarray7CoarrayEDpRR4Args> "LIEF::dwarf::types::Coarray::Coarray::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Coarray([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types7Coarray7CoarrayEDpRR4Args> "LIEF::dwarf::types::Coarray::Coarray::Args")&amp;&amp;... args)

#### [` Coarray `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Coarray7CoarrayERK7Coarray>)

Coarray(const [Coarray](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Coarray7CoarrayERK7Coarray> "LIEF::dwarf::types::Coarray::Coarray")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7CoarrayaSERK7Coarray>)

[Coarray](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7CoarrayE> "LIEF::dwarf::types::Coarray") &amp;operator=(const [Coarray](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7CoarrayE> "LIEF::dwarf::types::Coarray")&amp;) = delete

#### [` Coarray `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Coarray7CoarrayERR7Coarray>)

Coarray([Coarray](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Coarray7CoarrayERR7Coarray> "LIEF::dwarf::types::Coarray::Coarray")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7CoarrayaSERR7Coarray>)

[Coarray](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7CoarrayE> "LIEF::dwarf::types::Coarray") &amp;operator=([Coarray](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7CoarrayE> "LIEF::dwarf::types::Coarray")&amp;&amp;) noexcept = default

#### [` ~Coarray `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7CoarrayD0Ev>)

~Coarray() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Coarray7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Dynamic](<https://lief.re/doc/latest/extended/dwarf/cpp.html#dynamic>)

### [` Dynamic `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7DynamicE>)

class Dynamic : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_dynamic_type`.

Public Functions

#### [` ArgsDynamic `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types7Dynamic7DynamicEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types7Dynamic7DynamicEDpRR4Args> "LIEF::dwarf::types::Dynamic::Dynamic::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Dynamic([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types7Dynamic7DynamicEDpRR4Args> "LIEF::dwarf::types::Dynamic::Dynamic::Args")&amp;&amp;... args)

#### [` Dynamic `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Dynamic7DynamicERK7Dynamic>)

Dynamic(const [Dynamic](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Dynamic7DynamicERK7Dynamic> "LIEF::dwarf::types::Dynamic::Dynamic")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7DynamicaSERK7Dynamic>)

[Dynamic](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7DynamicE> "LIEF::dwarf::types::Dynamic") &amp;operator=(const [Dynamic](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7DynamicE> "LIEF::dwarf::types::Dynamic")&amp;) = delete

#### [` Dynamic `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Dynamic7DynamicERR7Dynamic>)

Dynamic([Dynamic](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Dynamic7DynamicERR7Dynamic> "LIEF::dwarf::types::Dynamic::Dynamic")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7DynamicaSERR7Dynamic>)

[Dynamic](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7DynamicE> "LIEF::dwarf::types::Dynamic") &amp;operator=([Dynamic](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7DynamicE> "LIEF::dwarf::types::Dynamic")&amp;&amp;) noexcept = default

#### [` ~Dynamic `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7DynamicD0Ev>)

~Dynamic() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types7Dynamic7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Enum](<https://lief.re/doc/latest/extended/dwarf/cpp.html#enum>)

### [` Enum `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4EnumE>)

class Enum : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_enumeration_type`.

Public Functions

#### [` ArgsEnum `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types4Enum4EnumEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types4Enum4EnumEDpRR4Args> "LIEF::dwarf::types::Enum::Enum::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Enum([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types4Enum4EnumEDpRR4Args> "LIEF::dwarf::types::Enum::Enum::Args")&amp;&amp;... args)

#### [` Enum `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum4EnumERK4Enum>)

Enum(const [Enum](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum4EnumERK4Enum> "LIEF::dwarf::types::Enum::Enum")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4EnumaSERK4Enum>)

[Enum](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4EnumE> "LIEF::dwarf::types::Enum") &amp;operator=(const [Enum](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4EnumE> "LIEF::dwarf::types::Enum")&amp;) = delete

#### [` Enum `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum4EnumERR4Enum>)

Enum([Enum](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum4EnumERR4Enum> "LIEF::dwarf::types::Enum::Enum")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4EnumaSERR4Enum>)

[Enum](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4EnumE> "LIEF::dwarf::types::Enum") &amp;operator=([Enum](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4EnumE> "LIEF::dwarf::types::Enum")&amp;&amp;) noexcept = default

#### [` entries `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types4Enum7entriesEv>)

std::vector&lt;[Entry](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum5EntryE> "LIEF::dwarf::types::Enum::Entry")&gt; entries() const

Return the different entries associated with this enum.

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types4Enum15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*underlying\_type() const

The underlying type that is used to encode this enum.

#### [` find_entry `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types4Enum10find_entryE7int64_t>)

std::optional&lt;[Entry](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum5EntryE> "LIEF::dwarf::types::Enum::Entry")&gt; find\_entry(int64\_t value) const

Try to find the enum matching the given value.

#### [` ~Enum `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4EnumD0Ev>)

~Enum() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

#### [` Entry `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum5EntryE>)

class Entry

This class represents an enum entry which is essentially composed of a name and its value (integer).

Public Functions

##### [` Entry `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum5Entry5EntryENSt10unique_ptrIN7details9EnumEntryEEE>)

Entry(std::unique\_ptr&lt;details::EnumEntry&gt; impl)

##### [` Entry `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum5Entry5EntryERR5Entry>)

Entry([Entry](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum5Entry5EntryERR5Entry> "LIEF::dwarf::types::Enum::Entry::Entry") &amp;&amp;other) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum5EntryaSERR5Entry>)

[Entry](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum5EntryE> "LIEF::dwarf::types::Enum::Entry") &amp;operator=([Entry](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum5EntryE> "LIEF::dwarf::types::Enum::Entry") &amp;&amp;other) noexcept

##### [` Entry `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum5Entry5EntryERK5Entry>)

Entry(const [Entry](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum5Entry5EntryERK5Entry> "LIEF::dwarf::types::Enum::Entry::Entry")&amp;) = delete

##### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum5EntryaSERK5Entry>)

[Entry](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum5EntryE> "LIEF::dwarf::types::Enum::Entry") &amp;operator=(const [Entry](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum5EntryE> "LIEF::dwarf::types::Enum::Entry")&amp;) = delete

##### [` name `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types4Enum5Entry4nameEv>)

std::string\_view name() const

[Enum](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Enum>) entry’s name.

##### [` value `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types4Enum5Entry5valueEv>)

std::optional&lt;int64\_t&gt; value() const

[Enum](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1types_1_1Enum>) entry’s value (if any).

##### [` ~Entry `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4Enum5EntryD0Ev>)

~Entry()

---

## [File](<https://lief.re/doc/latest/extended/dwarf/cpp.html#file>)

### [` File `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4FileE>)

class File : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_file_type`.

Public Functions

#### [` ArgsFile `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types4File4FileEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types4File4FileEDpRR4Args> "LIEF::dwarf::types::File::File::Args")&amp;&amp;...&gt;&gt;&gt;  
inline File([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types4File4FileEDpRR4Args> "LIEF::dwarf::types::File::File::Args")&amp;&amp;... args)

#### [` File `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4File4FileERK4File>)

File(const [File](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4File4FileERK4File> "LIEF::dwarf::types::File::File")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4FileaSERK4File>)

[File](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4FileE> "LIEF::dwarf::types::File") &amp;operator=(const [File](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4FileE> "LIEF::dwarf::types::File")&amp;) = delete

#### [` File `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4File4FileERR4File>)

File([File](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4File4FileERR4File> "LIEF::dwarf::types::File::File")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4FileaSERR4File>)

[File](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4FileE> "LIEF::dwarf::types::File") &amp;operator=([File](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4FileE> "LIEF::dwarf::types::File")&amp;&amp;) noexcept = default

#### [` ~File `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4FileD0Ev>)

~File() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types4File7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Immutable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#immutable>)

### [` Immutable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ImmutableE>)

class Immutable : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_immutable_type`.

Public Functions

#### [` ArgsImmutable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types9Immutable9ImmutableEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types9Immutable9ImmutableEDpRR4Args> "LIEF::dwarf::types::Immutable::Immutable::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Immutable([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types9Immutable9ImmutableEDpRR4Args> "LIEF::dwarf::types::Immutable::Immutable::Args")&amp;&amp;... args)

#### [` Immutable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Immutable9ImmutableERK9Immutable>)

Immutable(const [Immutable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Immutable9ImmutableERK9Immutable> "LIEF::dwarf::types::Immutable::Immutable")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ImmutableaSERK9Immutable>)

[Immutable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ImmutableE> "LIEF::dwarf::types::Immutable") &amp;operator=(const [Immutable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ImmutableE> "LIEF::dwarf::types::Immutable")&amp;) = delete

#### [` Immutable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Immutable9ImmutableERR9Immutable>)

Immutable([Immutable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Immutable9ImmutableERR9Immutable> "LIEF::dwarf::types::Immutable::Immutable")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ImmutableaSERR9Immutable>)

[Immutable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ImmutableE> "LIEF::dwarf::types::Immutable") &amp;operator=([Immutable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ImmutableE> "LIEF::dwarf::types::Immutable")&amp;&amp;) noexcept = default

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types9Immutable15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*underlying\_type() const

The underlying type.

#### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types9ImmutableptEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator-&gt;() const

#### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types9ImmutablemlEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") &amp;operator\*() const

#### [` ~Immutable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ImmutableD0Ev>)

~Immutable() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Immutable7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Interface](<https://lief.re/doc/latest/extended/dwarf/cpp.html#interface>)

### [` Interface `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9InterfaceE>)

class Interface : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_interface_type`.

Public Functions

#### [` ArgsInterface `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types9Interface9InterfaceEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types9Interface9InterfaceEDpRR4Args> "LIEF::dwarf::types::Interface::Interface::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Interface([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types9Interface9InterfaceEDpRR4Args> "LIEF::dwarf::types::Interface::Interface::Args")&amp;&amp;... args)

#### [` Interface `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Interface9InterfaceERK9Interface>)

Interface(const [Interface](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Interface9InterfaceERK9Interface> "LIEF::dwarf::types::Interface::Interface")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9InterfaceaSERK9Interface>)

[Interface](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9InterfaceE> "LIEF::dwarf::types::Interface") &amp;operator=(const [Interface](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9InterfaceE> "LIEF::dwarf::types::Interface")&amp;) = delete

#### [` Interface `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Interface9InterfaceERR9Interface>)

Interface([Interface](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Interface9InterfaceERR9Interface> "LIEF::dwarf::types::Interface::Interface")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9InterfaceaSERR9Interface>)

[Interface](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9InterfaceE> "LIEF::dwarf::types::Interface") &amp;operator=([Interface](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9InterfaceE> "LIEF::dwarf::types::Interface")&amp;&amp;) noexcept = default

#### [` ~Interface `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9InterfaceD0Ev>)

~Interface() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Interface7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [PointerToMember](<https://lief.re/doc/latest/extended/dwarf/cpp.html#pointertomember>)

### [` PointerToMember `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15PointerToMemberE>)

class PointerToMember : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_ptr_to_member_type`.

Public Functions

#### [` ArgsPointerToMember `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types15PointerToMember15PointerToMemberEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types15PointerToMember15PointerToMemberEDpRR4Args> "LIEF::dwarf::types::PointerToMember::PointerToMember::Args")&amp;&amp;...&gt;&gt;&gt;  
inline PointerToMember([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types15PointerToMember15PointerToMemberEDpRR4Args> "LIEF::dwarf::types::PointerToMember::PointerToMember::Args")&amp;&amp;... args)

#### [` PointerToMember `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15PointerToMember15PointerToMemberERK15PointerToMember>)

PointerToMember(const [PointerToMember](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15PointerToMember15PointerToMemberERK15PointerToMember> "LIEF::dwarf::types::PointerToMember::PointerToMember")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15PointerToMemberaSERK15PointerToMember>)

[PointerToMember](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15PointerToMemberE> "LIEF::dwarf::types::PointerToMember") &amp;operator=(const [PointerToMember](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15PointerToMemberE> "LIEF::dwarf::types::PointerToMember")&amp;) = delete

#### [` PointerToMember `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15PointerToMember15PointerToMemberERR15PointerToMember>)

PointerToMember([PointerToMember](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15PointerToMember15PointerToMemberERR15PointerToMember> "LIEF::dwarf::types::PointerToMember::PointerToMember")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15PointerToMemberaSERR15PointerToMember>)

[PointerToMember](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15PointerToMemberE> "LIEF::dwarf::types::PointerToMember") &amp;operator=([PointerToMember](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15PointerToMemberE> "LIEF::dwarf::types::PointerToMember")&amp;&amp;) noexcept = default

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types15PointerToMember15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*underlying\_type() const

The type of the member referenced by this pointer.

#### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types15PointerToMemberptEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator-&gt;() const

#### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types15PointerToMembermlEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator\*() const

#### [` containing_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types15PointerToMember15containing_typeEv>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")&gt; containing\_type() const

The type that embeds this member.

#### [` ~PointerToMember `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15PointerToMemberD0Ev>)

~PointerToMember() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15PointerToMember7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [RValueReference](<https://lief.re/doc/latest/extended/dwarf/cpp.html#rvaluereference>)

### [` RValueReference `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15RValueReferenceE>)

class RValueReference : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_rvalue_reference_type`.

Public Functions

#### [` ArgsRValueReference `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types15RValueReference15RValueReferenceEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types15RValueReference15RValueReferenceEDpRR4Args> "LIEF::dwarf::types::RValueReference::RValueReference::Args")&amp;&amp;...&gt;&gt;&gt;  
inline RValueReference([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types15RValueReference15RValueReferenceEDpRR4Args> "LIEF::dwarf::types::RValueReference::RValueReference::Args")&amp;&amp;... args)

#### [` RValueReference `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15RValueReference15RValueReferenceERK15RValueReference>)

RValueReference(const [RValueReference](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15RValueReference15RValueReferenceERK15RValueReference> "LIEF::dwarf::types::RValueReference::RValueReference")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15RValueReferenceaSERK15RValueReference>)

[RValueReference](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15RValueReferenceE> "LIEF::dwarf::types::RValueReference") &amp;operator=(const [RValueReference](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15RValueReferenceE> "LIEF::dwarf::types::RValueReference")&amp;) = delete

#### [` RValueReference `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15RValueReference15RValueReferenceERR15RValueReference>)

RValueReference([RValueReference](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15RValueReference15RValueReferenceERR15RValueReference> "LIEF::dwarf::types::RValueReference::RValueReference")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15RValueReferenceaSERR15RValueReference>)

[RValueReference](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15RValueReferenceE> "LIEF::dwarf::types::RValueReference") &amp;operator=([RValueReference](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15RValueReferenceE> "LIEF::dwarf::types::RValueReference")&amp;&amp;) noexcept = default

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types15RValueReference15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*underlying\_type() const

The underlying type referenced by this rvalue-type.

#### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types15RValueReferenceptEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator-&gt;() const

#### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types15RValueReferencemlEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator\*() const

#### [` ~RValueReference `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15RValueReferenceD0Ev>)

~RValueReference() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types15RValueReference7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Reference](<https://lief.re/doc/latest/extended/dwarf/cpp.html#reference>)

### [` Reference `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ReferenceE>)

class Reference : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_reference_type`.

Public Functions

#### [` ArgsReference `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types9Reference9ReferenceEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types9Reference9ReferenceEDpRR4Args> "LIEF::dwarf::types::Reference::Reference::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Reference([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types9Reference9ReferenceEDpRR4Args> "LIEF::dwarf::types::Reference::Reference::Args")&amp;&amp;... args)

#### [` Reference `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Reference9ReferenceERK9Reference>)

Reference(const [Reference](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Reference9ReferenceERK9Reference> "LIEF::dwarf::types::Reference::Reference")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ReferenceaSERK9Reference>)

[Reference](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ReferenceE> "LIEF::dwarf::types::Reference") &amp;operator=(const [Reference](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ReferenceE> "LIEF::dwarf::types::Reference")&amp;) = delete

#### [` Reference `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Reference9ReferenceERR9Reference>)

Reference([Reference](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Reference9ReferenceERR9Reference> "LIEF::dwarf::types::Reference::Reference")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ReferenceaSERR9Reference>)

[Reference](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ReferenceE> "LIEF::dwarf::types::Reference") &amp;operator=([Reference](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ReferenceE> "LIEF::dwarf::types::Reference")&amp;&amp;) noexcept = default

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types9Reference15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*underlying\_type() const

The underlying type referenced by this ref-type.

#### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types9ReferenceptEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator-&gt;() const

#### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types9ReferencemlEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator\*() const

#### [` ~Reference `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9ReferenceD0Ev>)

~Reference() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types9Reference7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Restrict](<https://lief.re/doc/latest/extended/dwarf/cpp.html#restrict>)

### [` Restrict `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8RestrictE>)

class Restrict : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_restrict_type`.

Public Functions

#### [` ArgsRestrict `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types8Restrict8RestrictEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types8Restrict8RestrictEDpRR4Args> "LIEF::dwarf::types::Restrict::Restrict::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Restrict([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types8Restrict8RestrictEDpRR4Args> "LIEF::dwarf::types::Restrict::Restrict::Args")&amp;&amp;... args)

#### [` Restrict `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8Restrict8RestrictERK8Restrict>)

Restrict(const [Restrict](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8Restrict8RestrictERK8Restrict> "LIEF::dwarf::types::Restrict::Restrict")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8RestrictaSERK8Restrict>)

[Restrict](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8RestrictE> "LIEF::dwarf::types::Restrict") &amp;operator=(const [Restrict](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8RestrictE> "LIEF::dwarf::types::Restrict")&amp;) = delete

#### [` Restrict `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8Restrict8RestrictERR8Restrict>)

Restrict([Restrict](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8Restrict8RestrictERR8Restrict> "LIEF::dwarf::types::Restrict::Restrict")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8RestrictaSERR8Restrict>)

[Restrict](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8RestrictE> "LIEF::dwarf::types::Restrict") &amp;operator=([Restrict](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8RestrictE> "LIEF::dwarf::types::Restrict")&amp;&amp;) noexcept = default

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types8Restrict15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*underlying\_type() const

The underlying type referenced by this restrict-type.

#### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types8RestrictptEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator-&gt;() const

#### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types8RestrictmlEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator\*() const

#### [` ~Restrict `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8RestrictD0Ev>)

~Restrict() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8Restrict7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [SetTy](<https://lief.re/doc/latest/extended/dwarf/cpp.html#setty>)

### [` SetTy `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5SetTyE>)

class SetTy : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_set_type`.

Public Functions

#### [` ArgsSetTy `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types5SetTy5SetTyEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types5SetTy5SetTyEDpRR4Args> "LIEF::dwarf::types::SetTy::SetTy::Args")&amp;&amp;...&gt;&gt;&gt;  
inline SetTy([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types5SetTy5SetTyEDpRR4Args> "LIEF::dwarf::types::SetTy::SetTy::Args")&amp;&amp;... args)

#### [` SetTy `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5SetTy5SetTyERK5SetTy>)

SetTy(const [SetTy](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5SetTy5SetTyERK5SetTy> "LIEF::dwarf::types::SetTy::SetTy")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5SetTyaSERK5SetTy>)

[SetTy](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5SetTyE> "LIEF::dwarf::types::SetTy") &amp;operator=(const [SetTy](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5SetTyE> "LIEF::dwarf::types::SetTy")&amp;) = delete

#### [` SetTy `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5SetTy5SetTyERR5SetTy>)

SetTy([SetTy](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5SetTy5SetTyERR5SetTy> "LIEF::dwarf::types::SetTy::SetTy")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5SetTyaSERR5SetTy>)

[SetTy](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5SetTyE> "LIEF::dwarf::types::SetTy") &amp;operator=([SetTy](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5SetTyE> "LIEF::dwarf::types::SetTy")&amp;&amp;) noexcept = default

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types5SetTy15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*underlying\_type() const

The underlying type referenced by this set-type.

#### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types5SetTyptEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator-&gt;() const

#### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types5SetTymlEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator\*() const

#### [` ~SetTy `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5SetTyD0Ev>)

~SetTy() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types5SetTy7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Shared](<https://lief.re/doc/latest/extended/dwarf/cpp.html#shared>)

### [` Shared `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6SharedE>)

class Shared : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_shared_type`.

Public Functions

#### [` ArgsShared `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types6Shared6SharedEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types6Shared6SharedEDpRR4Args> "LIEF::dwarf::types::Shared::Shared::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Shared([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types6Shared6SharedEDpRR4Args> "LIEF::dwarf::types::Shared::Shared::Args")&amp;&amp;... args)

#### [` Shared `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Shared6SharedERK6Shared>)

Shared(const [Shared](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Shared6SharedERK6Shared> "LIEF::dwarf::types::Shared::Shared")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6SharedaSERK6Shared>)

[Shared](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6SharedE> "LIEF::dwarf::types::Shared") &amp;operator=(const [Shared](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6SharedE> "LIEF::dwarf::types::Shared")&amp;) = delete

#### [` Shared `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Shared6SharedERR6Shared>)

Shared([Shared](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Shared6SharedERR6Shared> "LIEF::dwarf::types::Shared::Shared")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6SharedaSERR6Shared>)

[Shared](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6SharedE> "LIEF::dwarf::types::Shared") &amp;operator=([Shared](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6SharedE> "LIEF::dwarf::types::Shared")&amp;&amp;) noexcept = default

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types6Shared15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*underlying\_type() const

The underlying type referenced by this shared-type.

#### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types6SharedptEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator-&gt;() const

#### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types6SharedmlEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator\*() const

#### [` ~Shared `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6SharedD0Ev>)

~Shared() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Shared7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [StringTy](<https://lief.re/doc/latest/extended/dwarf/cpp.html#stringty>)

### [` StringTy `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8StringTyE>)

class StringTy : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_string_type`.

Public Functions

#### [` ArgsStringTy `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types8StringTy8StringTyEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types8StringTy8StringTyEDpRR4Args> "LIEF::dwarf::types::StringTy::StringTy::Args")&amp;&amp;...&gt;&gt;&gt;  
inline StringTy([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types8StringTy8StringTyEDpRR4Args> "LIEF::dwarf::types::StringTy::StringTy::Args")&amp;&amp;... args)

#### [` StringTy `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8StringTy8StringTyERK8StringTy>)

StringTy(const [StringTy](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8StringTy8StringTyERK8StringTy> "LIEF::dwarf::types::StringTy::StringTy")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8StringTyaSERK8StringTy>)

[StringTy](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8StringTyE> "LIEF::dwarf::types::StringTy") &amp;operator=(const [StringTy](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8StringTyE> "LIEF::dwarf::types::StringTy")&amp;) = delete

#### [` StringTy `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8StringTy8StringTyERR8StringTy>)

StringTy([StringTy](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8StringTy8StringTyERR8StringTy> "LIEF::dwarf::types::StringTy::StringTy")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8StringTyaSERR8StringTy>)

[StringTy](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8StringTyE> "LIEF::dwarf::types::StringTy") &amp;operator=([StringTy](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8StringTyE> "LIEF::dwarf::types::StringTy")&amp;&amp;) noexcept = default

#### [` ~StringTy `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8StringTyD0Ev>)

~StringTy() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8StringTy7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Subroutine](<https://lief.re/doc/latest/extended/dwarf/cpp.html#subroutine>)

### [` Subroutine `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types10SubroutineE>)

class Subroutine : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_subroutine_type`.

Public Types

#### [` parameters_t `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types10Subroutine12parameters_tE>)

using parameters\_t = std::vector&lt;std::unique\_ptr&lt;[Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9ParameterE> "LIEF::dwarf::Parameter")&gt;&gt;

Public Functions

#### [` ArgsSubroutine `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types10Subroutine10SubroutineEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types10Subroutine10SubroutineEDpRR4Args> "LIEF::dwarf::types::Subroutine::Subroutine::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Subroutine([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types10Subroutine10SubroutineEDpRR4Args> "LIEF::dwarf::types::Subroutine::Subroutine::Args")&amp;&amp;... args)

#### [` Subroutine `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types10Subroutine10SubroutineERK10Subroutine>)

Subroutine(const [Subroutine](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types10Subroutine10SubroutineERK10Subroutine> "LIEF::dwarf::types::Subroutine::Subroutine")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types10SubroutineaSERK10Subroutine>)

[Subroutine](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types10SubroutineE> "LIEF::dwarf::types::Subroutine") &amp;operator=(const [Subroutine](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types10SubroutineE> "LIEF::dwarf::types::Subroutine")&amp;) = delete

#### [` Subroutine `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types10Subroutine10SubroutineERR10Subroutine>)

Subroutine([Subroutine](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types10Subroutine10SubroutineERR10Subroutine> "LIEF::dwarf::types::Subroutine::Subroutine")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types10SubroutineaSERR10Subroutine>)

[Subroutine](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types10SubroutineE> "LIEF::dwarf::types::Subroutine") &amp;operator=([Subroutine](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types10SubroutineE> "LIEF::dwarf::types::Subroutine")&amp;&amp;) noexcept = default

#### [` return_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types10Subroutine11return_typeEv>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")&gt; return\_type() const

Return the [dwarf::Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1Type>) associated with the **return type** of this function.

#### [` parameters `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types10Subroutine10parametersEv>)

[parameters\_t](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types10Subroutine12parameters_tE> "LIEF::dwarf::types::Subroutine::parameters_t") parameters() const

Parameters of this subroutine.

#### [` ~Subroutine `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types10SubroutineD0Ev>)

~Subroutine() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types10Subroutine7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [TemplateAlias](<https://lief.re/doc/latest/extended/dwarf/cpp.html#templatealias>)

### [` TemplateAlias `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types13TemplateAliasE>)

class TemplateAlias : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_template_alias`.

Public Types

#### [` parameters_t `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types13TemplateAlias12parameters_tE>)

using parameters\_t = std::vector&lt;std::unique\_ptr&lt;[Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf9ParameterE> "LIEF::dwarf::Parameter")&gt;&gt;

Public Functions

#### [` ArgsTemplateAlias `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types13TemplateAlias13TemplateAliasEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types13TemplateAlias13TemplateAliasEDpRR4Args> "LIEF::dwarf::types::TemplateAlias::TemplateAlias::Args")&amp;&amp;...&gt;&gt;&gt;  
inline TemplateAlias([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types13TemplateAlias13TemplateAliasEDpRR4Args> "LIEF::dwarf::types::TemplateAlias::TemplateAlias::Args")&amp;&amp;... args)

#### [` TemplateAlias `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types13TemplateAlias13TemplateAliasERK13TemplateAlias>)

TemplateAlias(const [TemplateAlias](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types13TemplateAlias13TemplateAliasERK13TemplateAlias> "LIEF::dwarf::types::TemplateAlias::TemplateAlias")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types13TemplateAliasaSERK13TemplateAlias>)

[TemplateAlias](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types13TemplateAliasE> "LIEF::dwarf::types::TemplateAlias") &amp;operator=(const [TemplateAlias](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types13TemplateAliasE> "LIEF::dwarf::types::TemplateAlias")&amp;) = delete

#### [` TemplateAlias `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types13TemplateAlias13TemplateAliasERR13TemplateAlias>)

TemplateAlias([TemplateAlias](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types13TemplateAlias13TemplateAliasERR13TemplateAlias> "LIEF::dwarf::types::TemplateAlias::TemplateAlias")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types13TemplateAliasaSERR13TemplateAlias>)

[TemplateAlias](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types13TemplateAliasE> "LIEF::dwarf::types::TemplateAlias") &amp;operator=([TemplateAlias](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types13TemplateAliasE> "LIEF::dwarf::types::TemplateAlias")&amp;&amp;) noexcept = default

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types13TemplateAlias15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*underlying\_type() const

The underlying type aliased by this type.

#### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types13TemplateAliasptEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator-&gt;() const

#### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types13TemplateAliasmlEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") &amp;operator\*() const

#### [` parameters `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types13TemplateAlias10parametersEv>)

[parameters\_t](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types13TemplateAlias12parameters_tE> "LIEF::dwarf::types::TemplateAlias::parameters_t") parameters() const

Parameters associated with the underlying template.

#### [` ~TemplateAlias `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types13TemplateAliasD0Ev>)

~TemplateAlias() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types13TemplateAlias7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Thrown](<https://lief.re/doc/latest/extended/dwarf/cpp.html#thrown>)

### [` Thrown `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6ThrownE>)

class Thrown : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_thrown_type`.

Public Functions

#### [` ArgsThrown `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types6Thrown6ThrownEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types6Thrown6ThrownEDpRR4Args> "LIEF::dwarf::types::Thrown::Thrown::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Thrown([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types6Thrown6ThrownEDpRR4Args> "LIEF::dwarf::types::Thrown::Thrown::Args")&amp;&amp;... args)

#### [` Thrown `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Thrown6ThrownERK6Thrown>)

Thrown(const [Thrown](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Thrown6ThrownERK6Thrown> "LIEF::dwarf::types::Thrown::Thrown")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6ThrownaSERK6Thrown>)

[Thrown](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6ThrownE> "LIEF::dwarf::types::Thrown") &amp;operator=(const [Thrown](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6ThrownE> "LIEF::dwarf::types::Thrown")&amp;) = delete

#### [` Thrown `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Thrown6ThrownERR6Thrown>)

Thrown([Thrown](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Thrown6ThrownERR6Thrown> "LIEF::dwarf::types::Thrown::Thrown")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6ThrownaSERR6Thrown>)

[Thrown](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6ThrownE> "LIEF::dwarf::types::Thrown") &amp;operator=([Thrown](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6ThrownE> "LIEF::dwarf::types::Thrown")&amp;&amp;) noexcept = default

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types6Thrown15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*underlying\_type() const

The underlying type being thrown.

#### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types6ThrownptEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator-&gt;() const

#### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types6ThrownmlEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") &amp;operator\*() const

#### [` ~Thrown `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6ThrownD0Ev>)

~Thrown() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types6Thrown7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Volatile](<https://lief.re/doc/latest/extended/dwarf/cpp.html#volatile>)

### [` Volatile `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8VolatileE>)

class Volatile : public LIEF::dwarf::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type")

This class represents a `DW_TAG_volatile_type`.

Public Functions

#### [` ArgsVolatile `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types8Volatile8VolatileEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types8Volatile8VolatileEDpRR4Args> "LIEF::dwarf::types::Volatile::Volatile::Args")&amp;&amp;...&gt;&gt;&gt;  
inline Volatile([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf5types8Volatile8VolatileEDpRR4Args> "LIEF::dwarf::types::Volatile::Volatile::Args")&amp;&amp;... args)

#### [` Volatile `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8Volatile8VolatileERK8Volatile>)

Volatile(const [Volatile](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8Volatile8VolatileERK8Volatile> "LIEF::dwarf::types::Volatile::Volatile")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8VolatileaSERK8Volatile>)

[Volatile](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8VolatileE> "LIEF::dwarf::types::Volatile") &amp;operator=(const [Volatile](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8VolatileE> "LIEF::dwarf::types::Volatile")&amp;) = delete

#### [` Volatile `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8Volatile8VolatileERR8Volatile>)

Volatile([Volatile](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8Volatile8VolatileERR8Volatile> "LIEF::dwarf::types::Volatile::Volatile")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8VolatileaSERR8Volatile>)

[Volatile](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8VolatileE> "LIEF::dwarf::types::Volatile") &amp;operator=([Volatile](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8VolatileE> "LIEF::dwarf::types::Volatile")&amp;&amp;) noexcept = default

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types8Volatile15underlying_typeEv>)

const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*underlying\_type() const

The underlying type.

#### [` operator-> `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types8VolatileptEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*operator-&gt;() const

#### [` operator* `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf5types8VolatilemlEv>)

inline const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") &amp;operator\*() const

#### [` ~Volatile `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8VolatileD0Ev>)

~Volatile() override

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf5types8Volatile7classofEPK4Type>)

static inline bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4TypeE> "LIEF::dwarf::Type") \*type)

---

## [Editor](<https://lief.re/doc/latest/extended/dwarf/cpp.html#editor>)

### [` Editor `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6EditorE>)

class Editor

This class exposes the main API to create DWARF information.

Public Types

#### [` FORMAT `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor6FORMATE>)

enum class FORMAT : uint32\_t

*Values:*

##### [` ELF `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor6FORMAT3ELFE>)

enumerator ELF

##### [` MACHO `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor6FORMAT5MACHOE>)

enumerator MACHO

##### [` PE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor6FORMAT2PEE>)

enumerator PE

#### [` ARCH `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor4ARCHE>)

enum class ARCH : uint32\_t

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor4ARCH7UNKNOWNE>)

enumerator UNKNOWN

##### [` X64 `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor4ARCH3X64E>)

enumerator X64

##### [` X86 `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor4ARCH3X86E>)

enumerator X86

##### [` AARCH64 `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor4ARCH7AARCH64E>)

enumerator AARCH64

##### [` ARM `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor4ARCH3ARME>)

enumerator ARM

Public Functions

#### [` Editor `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor6EditorEv>)

Editor() = delete

#### [` Editor `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor6EditorENSt10unique_ptrIN7details6EditorEEE>)

Editor(std::unique\_ptr&lt;details::Editor&gt; impl)

#### [` create_compilation_unit `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor23create_compilation_unitEv>)

std::unique\_ptr&lt;editor::[CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnitE> "LIEF::dwarf::editor::CompilationUnit")&gt; create\_compilation\_unit()

Create a new compilation unit.

#### [` write `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor5writeENSt11string_viewE>)

void write(std::string\_view output)

Write the DWARF file to the specified output.

#### [` ~Editor `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6EditorD0Ev>)

~Editor()

Public Static Functions

#### [` from_binary `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor11from_binaryERN4LIEF6BinaryE>)

static std::unique\_ptr&lt;[Editor](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6EditorE> "LIEF::dwarf::Editor")&gt; from\_binary(LIEF::[Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary") &amp;bin)

Instantiate an editor for the given binary object.

#### [` create `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor6createE6FORMAT4ARCH>)

static std::unique\_ptr&lt;[Editor](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6EditorE> "LIEF::dwarf::Editor")&gt; create([FORMAT](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor6FORMATE> "LIEF::dwarf::Editor::FORMAT") fmt, [ARCH](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6Editor4ARCHE> "LIEF::dwarf::Editor::ARCH") arch)

Instantiate an editor for the given format and arch.

---

## [Editor - CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/cpp.html#editor-compilationunit>)

### [` CompilationUnit `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnitE>)

class CompilationUnit

This class represents an **editable** DWARF compilation unit.

Public Functions

#### [` CompilationUnit `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnit15CompilationUnitEv>)

CompilationUnit() = delete

#### [` CompilationUnit `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnit15CompilationUnitENSt10unique_ptrIN7details15CompilationUnitEEE>)

CompilationUnit(std::unique\_ptr&lt;details::CompilationUnit&gt; impl)

#### [` set_producer `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnit12set_producerENSt11string_viewE>)

[CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnitE> "LIEF::dwarf::editor::CompilationUnit") &amp;set\_producer(std::string\_view producer)

Set the `DW_AT_producer` producer attribute.

This attribute aims to inform about the program that generated this compilation unit (e.g. `LIEF Extended`)

#### [` create_function `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnit15create_functionENSt11string_viewE>)

std::unique\_ptr&lt;[Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8FunctionE> "LIEF::dwarf::editor::Function")&gt; create\_function(std::string\_view name)

Create a new function owned by this compilation unit.

#### [` create_variable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnit15create_variableENSt11string_viewE>)

std::unique\_ptr&lt;[Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8VariableE> "LIEF::dwarf::editor::Variable")&gt; create\_variable(std::string\_view name)

Create a new **global** variable owned by this compilation unit.

#### [` create_generic_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnit19create_generic_typeENSt11string_viewE>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type")&gt; create\_generic\_type(std::string\_view name)

Create a `DW_TAG_unspecified_type` type with the given name.

#### [` create_enum `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnit11create_enumENSt11string_viewE>)

std::unique\_ptr&lt;[EnumType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8EnumTypeE> "LIEF::dwarf::editor::EnumType")&gt; create\_enum(std::string\_view name)

Create an enum type (`DW_TAG_enumeration_type`).

#### [` create_typedef `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnit14create_typedefENSt11string_viewERK4Type>)

std::unique\_ptr&lt;[TypeDef](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor7TypeDefE> "LIEF::dwarf::editor::TypeDef")&gt; create\_typedef(std::string\_view name, const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") &amp;type)

Create a typedef with the name provided in the first parameter which aliases the type provided in the second parameter.

#### [` create_structure `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnit16create_structureENSt11string_viewEN10StructType4TYPEE>)

std::unique\_ptr&lt;[StructType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructTypeE> "LIEF::dwarf::editor::StructType")&gt; create\_structure(std::string\_view name, [StructType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructTypeE> "LIEF::dwarf::editor::StructType")::[TYPE](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType4TYPEE> "LIEF::dwarf::editor::StructType::TYPE") kind = [StructType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructTypeE> "LIEF::dwarf::editor::StructType")::[TYPE](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType4TYPEE> "LIEF::dwarf::editor::StructType::TYPE")::[STRUCT](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType4TYPE6STRUCTE> "LIEF::dwarf::editor::StructType::TYPE::STRUCT"))

Create a struct-like type (struct, class, union) with the given name.

#### [` create_base_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnit16create_base_typeENSt11string_viewE6size_tN8BaseType8ENCODINGE>)

std::unique\_ptr&lt;[BaseType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseTypeE> "LIEF::dwarf::editor::BaseType")&gt; create\_base\_type(std::string\_view name, size\_t size, [BaseType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseTypeE> "LIEF::dwarf::editor::BaseType")::[ENCODING](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseType8ENCODINGE> "LIEF::dwarf::editor::BaseType::ENCODING") encoding = [BaseType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseTypeE> "LIEF::dwarf::editor::BaseType")::[ENCODING](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseType8ENCODINGE> "LIEF::dwarf::editor::BaseType::ENCODING")::[NONE](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseType8ENCODING4NONEE> "LIEF::dwarf::editor::BaseType::ENCODING::NONE"))

Create a primitive type with the given name and size.

#### [` create_function_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnit20create_function_typeENSt11string_viewE>)

std::unique\_ptr&lt;[FunctionType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor12FunctionTypeE> "LIEF::dwarf::editor::FunctionType")&gt; create\_function\_type(std::string\_view name)

Create a function type with the given name.

#### [` create_pointer_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnit19create_pointer_typeERK4Type>)

inline std::unique\_ptr&lt;[PointerType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor11PointerTypeE> "LIEF::dwarf::editor::PointerType")&gt; create\_pointer\_type(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") &amp;ty)

Create a pointer on the provided type.

#### [` create_const_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnit17create_const_typeERK4Type>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type")&gt; create\_const\_type(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") &amp;ty)

Create a `const`-qualified version of the provided type (`DW_TAG_const_type`).

Qualifying the same type twice returns the same underlying DWARF entry.

#### [` create_volatile_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnit20create_volatile_typeERK4Type>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type")&gt; create\_volatile\_type(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") &amp;ty)

Create a `volatile`-qualified version of the provided type (`DW_TAG_volatile_type`).

Qualifying the same type twice returns the same underlying DWARF entry.

#### [` create_void_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnit16create_void_typeEv>)

std::unique\_ptr&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type")&gt; create\_void\_type()

Create a `void` type.

#### [` create_array `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnit12create_arrayENSt11string_viewERK4Type6size_t>)

std::unique\_ptr&lt;[ArrayType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor9ArrayTypeE> "LIEF::dwarf::editor::ArrayType")&gt; create\_array(std::string\_view name, const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") &amp;type, size\_t count)

Create an array type with the given name, type and size.

#### [` ~CompilationUnit `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor15CompilationUnitD0Ev>)

~CompilationUnit()

---

## [Editor - Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#editor-function>)

### [` Function `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8FunctionE>)

class Function

This class represents an **editable** DWARF function (`DW_TAG_subprogram`).

Public Functions

#### [` Function `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function8FunctionEv>)

Function() = delete

#### [` Function `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function8FunctionENSt10unique_ptrIN7details8FunctionEEE>)

Function(std::unique\_ptr&lt;details::Function&gt; impl)

#### [` set_address `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function11set_addressE8uint64_t>)

[Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8FunctionE> "LIEF::dwarf::editor::Function") &amp;set\_address(uint64\_t addr)

Set the address of this function by defining `DW_AT_entry_pc`.

#### [` set_low_high `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function12set_low_highE8uint64_t8uint64_t>)

[Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8FunctionE> "LIEF::dwarf::editor::Function") &amp;set\_low\_high(uint64\_t low, uint64\_t high)

Set the upper and lower bound addresses for this function. This assumes that the function is contiguous between `low` and `high`.

Underneath, the function defines `DW_AT_low_pc` and `DW_AT_high_pc`

#### [` set_ranges `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function10set_rangesERKNSt6vectorI7range_tEE>)

[Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8FunctionE> "LIEF::dwarf::editor::Function") &amp;set\_ranges(const std::vector&lt;[range\_t](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function7range_tE> "LIEF::dwarf::editor::Function::range_t")&gt; &amp;ranges)

Set the ranges of addresses owned by the implementation of this function by setting the `DW_AT_ranges` attribute.

This setter should be used for non-contiguous functions.

#### [` set_external `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function12set_externalEv>)

[Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8FunctionE> "LIEF::dwarf::editor::Function") &amp;set\_external()

Set the function as external by defining `DW_AT_external` to true. This means that the function is **imported** by the current compilation unit.

#### [` set_return_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function15set_return_typeERK4Type>)

[Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8FunctionE> "LIEF::dwarf::editor::Function") &amp;set\_return\_type(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") &amp;type)

Set the return type of this function.

#### [` add_parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function13add_parameterENSt11string_viewERK4Type>)

std::unique\_ptr&lt;[Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function9ParameterE> "LIEF::dwarf::editor::Function::Parameter")&gt; add\_parameter(std::string\_view name, const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") &amp;type)

Add a parameter to the current function.

#### [` create_stack_variable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function21create_stack_variableENSt11string_viewE>)

std::unique\_ptr&lt;[Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8VariableE> "LIEF::dwarf::editor::Variable")&gt; create\_stack\_variable(std::string\_view name)

Create a stack-based variable owned by the current function.

#### [` add_lexical_block `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function17add_lexical_blockE8uint64_t8uint64_t>)

std::unique\_ptr&lt;[LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function12LexicalBlockE> "LIEF::dwarf::editor::Function::LexicalBlock")&gt; add\_lexical\_block(uint64\_t start, uint64\_t end)

Add a lexical block with the given range.

#### [` add_label `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function9add_labelE8uint64_tNSt11string_viewE>)

std::unique\_ptr&lt;[Label](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function5LabelE> "LIEF::dwarf::editor::Function::Label")&gt; add\_label(uint64\_t addr, std::string\_view label)

Add a label at the given address.

#### [` add_description `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function15add_descriptionENSt11string_viewE>)

[Function](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8FunctionE> "LIEF::dwarf::editor::Function") &amp;add\_description(std::string\_view description)

Create a `DW_AT_description` entry with the description provided in parameter.

#### [` ~Function `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8FunctionD0Ev>)

~Function()

#### [` range_t `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function7range_tE>)

struct range\_t

Public Functions

##### [` range_t `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function7range_t7range_tEv>)

range\_t() = default

##### [` range_t `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function7range_t7range_tE8uint64_t8uint64_t>)

inline range\_t(uint64\_t start, uint64\_t end)

Public Members

##### [` start `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function7range_t5startE>)

uint64\_t start = 0

##### [` end `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function7range_t3endE>)

uint64\_t end = 0

#### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function9ParameterE>)

class Parameter

This class represents a parameter of the current function (`DW_TAG_formal_parameter`).

Public Functions

##### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function9Parameter9ParameterEv>)

Parameter() = delete

##### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function9Parameter9ParameterENSt10unique_ptrIN7details17FunctionParameterEEE>)

Parameter(std::unique\_ptr&lt;details::FunctionParameter&gt; impl)

##### [` ~Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function9ParameterD0Ev>)

~Parameter()

##### [` set_location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function9Parameter12set_locationERKN5dwarf8LocationE>)

[Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function9ParameterE> "LIEF::dwarf::editor::Function::Parameter") &amp;set\_location(const dwarf::[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location") &amp;location)

Set the `DW_AT_location` of this parameter.

##### [` assign_register `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function9Parameter15assign_registerENSt11string_viewE>)

[Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function9ParameterE> "LIEF::dwarf::editor::Function::Parameter") &amp;assign\_register(std::string\_view name)

Assign this parameter to a specific named register.

##### [` assign_register `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function9Parameter15assign_registerE8uint64_t>)

[Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function9ParameterE> "LIEF::dwarf::editor::Function::Parameter") &amp;assign\_register(uint64\_t reg)

Assign this parameter to the given DWARF register id (e.g. `DW_OP_reg0`).

#### [` LexicalBlock `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function12LexicalBlockE>)

class LexicalBlock

This class mirrors the `DW_TAG_lexical_block` DWARF tag.

Public Functions

##### [` LexicalBlock `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function12LexicalBlock12LexicalBlockEv>)

LexicalBlock() = delete

##### [` LexicalBlock `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function12LexicalBlock12LexicalBlockENSt10unique_ptrIN7details20FunctionLexicalBlockEEE>)

LexicalBlock(std::unique\_ptr&lt;details::FunctionLexicalBlock&gt; impl)

##### [` add_block `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function12LexicalBlock9add_blockE8uint64_t8uint64_t>)

std::unique\_ptr&lt;[LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function12LexicalBlockE> "LIEF::dwarf::editor::Function::LexicalBlock")&gt; add\_block(uint64\_t start, uint64\_t end)

Create a sub-block with the given low/high addresses.

##### [` add_block `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function12LexicalBlock9add_blockERKNSt6vectorI7range_tEE>)

std::unique\_ptr&lt;[LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function12LexicalBlockE> "LIEF::dwarf::editor::Function::LexicalBlock")&gt; add\_block(const std::vector&lt;[range\_t](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function7range_tE> "LIEF::dwarf::editor::Function::range_t")&gt; &amp;range)

Create a sub-block with the given range of addresses.

##### [` add_description `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function12LexicalBlock15add_descriptionENSt11string_viewE>)

[LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function12LexicalBlockE> "LIEF::dwarf::editor::Function::LexicalBlock") &amp;add\_description(std::string\_view description)

Create a `DW_AT_description` entry with the description provided in parameter.

##### [` add_name `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function12LexicalBlock8add_nameENSt11string_viewE>)

[LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function12LexicalBlockE> "LIEF::dwarf::editor::Function::LexicalBlock") &amp;add\_name(std::string\_view name)

Create a `DW_AT_name` entry to associate a name to this entry.

##### [` ~LexicalBlock `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function12LexicalBlockD0Ev>)

~LexicalBlock()

#### [` Label `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function5LabelE>)

class Label

This class mirrors the `DW_TAG_label` DWARF tag.

Public Functions

##### [` Label `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function5Label5LabelEv>)

Label() = delete

##### [` Label `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function5Label5LabelENSt10unique_ptrIN7details13FunctionLabelEEE>)

Label(std::unique\_ptr&lt;details::FunctionLabel&gt; impl)

##### [` ~Label `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Function5LabelD0Ev>)

~Label()

---

## [Editor - Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#editor-variable>)

### [` Variable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8VariableE>)

class Variable

This class represents an **editable** DWARF variable which can be scoped by a function or a compilation unit (`DW_TAG_variable`).

Public Functions

#### [` Variable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Variable8VariableEv>)

Variable() = delete

#### [` Variable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Variable8VariableENSt10unique_ptrIN7details8VariableEEE>)

Variable(std::unique\_ptr&lt;details::Variable&gt; impl)

#### [` set_location `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Variable12set_locationERKN5dwarf8LocationE>)

[Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8VariableE> "LIEF::dwarf::editor::Variable") &amp;set\_location(const dwarf::[Location](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf8LocationE> "LIEF::dwarf::Location") &amp;location)

Set the `DW_AT_location` of this variable.

#### [` set_addr `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Variable8set_addrE8uint64_t>)

[Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8VariableE> "LIEF::dwarf::editor::Variable") &amp;set\_addr(uint64\_t address)

Set the global address of this variable. Setting this address is only relevant in the case of a static global variable. For stack variable, you should use set\_stack\_offset.

This function sets the `DW_AT_location` attribute

#### [` set_stack_offset `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Variable16set_stack_offsetE8uint64_t>)

[Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8VariableE> "LIEF::dwarf::editor::Variable") &amp;set\_stack\_offset(uint64\_t offset)

Set the stack offset of this variable.

This function sets the `DW_AT_location` attribute

#### [` set_external `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Variable12set_externalEv>)

[Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8VariableE> "LIEF::dwarf::editor::Variable") &amp;set\_external()

Mark this variable as **imported**.

#### [` set_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Variable8set_typeERK4Type>)

[Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8VariableE> "LIEF::dwarf::editor::Variable") &amp;set\_type(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") &amp;type)

Set the type of the current variable.

#### [` add_description `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8Variable15add_descriptionENSt11string_viewE>)

[Variable](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8VariableE> "LIEF::dwarf::editor::Variable") &amp;add\_description(std::string\_view description)

Create a `DW_AT_description` entry with the description provided in parameter.

#### [` ~Variable `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8VariableD0Ev>)

~Variable()

---

## [Editor - Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#editor-type>)

### [` Type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE>)

class Type

This class is the base class for any types created when editing DWARF debug info.

A type is owned by a [LIEF::dwarf::editor::CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1editor_1_1CompilationUnit>) and should be created from this class.

Subclassed by [LIEF::dwarf::editor::ArrayType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1editor_1_1ArrayType>), [LIEF::dwarf::editor::BaseType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1editor_1_1BaseType>), [LIEF::dwarf::editor::EnumType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1editor_1_1EnumType>), [LIEF::dwarf::editor::FunctionType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1editor_1_1FunctionType>), [LIEF::dwarf::editor::PointerType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1editor_1_1PointerType>), [LIEF::dwarf::editor::StructType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1editor_1_1StructType>), [LIEF::dwarf::editor::TypeDef](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1editor_1_1TypeDef>)

Public Functions

#### [` Type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4Type4TypeEv>)

Type() = delete

#### [` Type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4Type4TypeENSt10unique_ptrIN7details4TypeEEE>)

Type(std::unique\_ptr&lt;details::Type&gt; impl)

#### [` pointer_to `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf6editor4Type10pointer_toEv>)

std::unique\_ptr&lt;[PointerType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor11PointerTypeE> "LIEF::dwarf::editor::PointerType")&gt; pointer\_to() const

Create a pointer type pointing to this type.

#### [` ~Type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeD0Ev>)

virtual ~Type()

#### [` impl `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4NK4LIEF5dwarf6editor4Type4implEv>)

inline const details::Type &amp;impl() const

---

## [Editor - PointerType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#editor-pointertype>)

### [` PointerType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor11PointerTypeE>)

class PointerType : public LIEF::dwarf::editor::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type")

This class represents a pointer to another type.

Public Functions

#### [` ArgsPointerType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor11PointerType11PointerTypeEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor11PointerType11PointerTypeEDpRR4Args> "LIEF::dwarf::editor::PointerType::PointerType::Args")&amp;&amp;...&gt;&gt;&gt;  
inline PointerType([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor11PointerType11PointerTypeEDpRR4Args> "LIEF::dwarf::editor::PointerType::PointerType::Args")&amp;&amp;... args)

#### [` ~PointerType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor11PointerTypeD0Ev>)

~PointerType() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor11PointerType7classofEPK4Type>)

static bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") \*type)

---

## [Editor - EnumType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#editor-enumtype>)

### [` EnumType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8EnumTypeE>)

class EnumType : public LIEF::dwarf::editor::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type")

This class represents an editable enum type (`DW_TAG_enumeration_type`).

Public Functions

#### [` ArgsEnumType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor8EnumType8EnumTypeEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor8EnumType8EnumTypeEDpRR4Args> "LIEF::dwarf::editor::EnumType::EnumType::Args")&amp;&amp;...&gt;&gt;&gt;  
inline EnumType([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor8EnumType8EnumTypeEDpRR4Args> "LIEF::dwarf::editor::EnumType::EnumType::Args")&amp;&amp;... args)

#### [` set_size `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8EnumType8set_sizeE8uint64_t>)

[EnumType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8EnumTypeE> "LIEF::dwarf::editor::EnumType") &amp;set\_size(uint64\_t size)

Define the number of bytes required to hold an instance of the enumeration (`DW_AT_byte_size`).

#### [` set_underlying_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8EnumType19set_underlying_typeERK4Type>)

[EnumType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8EnumTypeE> "LIEF::dwarf::editor::EnumType") &amp;set\_underlying\_type(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") &amp;type)

Set the underlying type that is used to encode this enum.

#### [` add_value `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8EnumType9add_valueENSt11string_viewE7int64_t>)

std::unique\_ptr&lt;[Value](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8EnumType5ValueE> "LIEF::dwarf::editor::EnumType::Value")&gt; add\_value(std::string\_view name, int64\_t value)

Add an enum value by specifying its name and its integer value.

#### [` ~EnumType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8EnumTypeD0Ev>)

~EnumType() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8EnumType7classofEPK4Type>)

static bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") \*type)

#### [` Value `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8EnumType5ValueE>)

class Value

This class represents an enum value.

Public Functions

##### [` Value `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8EnumType5Value5ValueEv>)

Value() = delete

##### [` Value `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8EnumType5Value5ValueENSt10unique_ptrIN7details9EnumValueEEE>)

Value(std::unique\_ptr&lt;details::EnumValue&gt; impl)

##### [` ~Value `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8EnumType5ValueD0Ev>)

~Value()

---

## [Editor - BaseType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#editor-basetype>)

### [` BaseType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseTypeE>)

class BaseType : public LIEF::dwarf::editor::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type")

This class represents a primitive type like `int, char`.

Public Types

#### [` ENCODING `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseType8ENCODINGE>)

enum class ENCODING : uint32\_t

*Values:*

##### [` NONE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseType8ENCODING4NONEE>)

enumerator NONE = 0

##### [` ADDRESS `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseType8ENCODING7ADDRESSE>)

enumerator ADDRESS

##### [` SIGNED `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseType8ENCODING6SIGNEDE>)

enumerator SIGNED

##### [` SIGNED_CHAR `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseType8ENCODING11SIGNED_CHARE>)

enumerator SIGNED\_CHAR

##### [` UNSIGNED `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseType8ENCODING8UNSIGNEDE>)

enumerator UNSIGNED

##### [` UNSIGNED_CHAR `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseType8ENCODING13UNSIGNED_CHARE>)

enumerator UNSIGNED\_CHAR

##### [` BOOLEAN `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseType8ENCODING7BOOLEANE>)

enumerator BOOLEAN

##### [` FLOAT `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseType8ENCODING5FLOATE>)

enumerator FLOAT

Public Functions

#### [` ArgsBaseType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor8BaseType8BaseTypeEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor8BaseType8BaseTypeEDpRR4Args> "LIEF::dwarf::editor::BaseType::BaseType::Args")&amp;&amp;...&gt;&gt;&gt;  
inline BaseType([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor8BaseType8BaseTypeEDpRR4Args> "LIEF::dwarf::editor::BaseType::BaseType::Args")&amp;&amp;... args)

#### [` ~BaseType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseTypeD0Ev>)

~BaseType() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor8BaseType7classofEPK4Type>)

static bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") \*type)

---

## [Editor - ArrayType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#editor-arraytype>)

### [` ArrayType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor9ArrayTypeE>)

class ArrayType : public LIEF::dwarf::editor::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type")

This class represents an array type (`DW_TAG_array_type`).

Public Functions

#### [` ArgsArrayType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor9ArrayType9ArrayTypeEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor9ArrayType9ArrayTypeEDpRR4Args> "LIEF::dwarf::editor::ArrayType::ArrayType::Args")&amp;&amp;...&gt;&gt;&gt;  
inline ArrayType([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor9ArrayType9ArrayTypeEDpRR4Args> "LIEF::dwarf::editor::ArrayType::ArrayType::Args")&amp;&amp;... args)

#### [` ~ArrayType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor9ArrayTypeD0Ev>)

~ArrayType() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor9ArrayType7classofEPK4Type>)

static bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") \*type)

---

## [Editor - FunctionType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#editor-functiontype>)

### [` FunctionType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor12FunctionTypeE>)

class FunctionType : public LIEF::dwarf::editor::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type")

This class represents a function type (`DW_TAG_subroutine_type`).

Public Functions

#### [` ArgsFunctionType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor12FunctionType12FunctionTypeEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor12FunctionType12FunctionTypeEDpRR4Args> "LIEF::dwarf::editor::FunctionType::FunctionType::Args")&amp;&amp;...&gt;&gt;&gt;  
inline FunctionType([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor12FunctionType12FunctionTypeEDpRR4Args> "LIEF::dwarf::editor::FunctionType::FunctionType::Args")&amp;&amp;... args)

#### [` set_return_type `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor12FunctionType15set_return_typeERK4Type>)

[FunctionType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor12FunctionTypeE> "LIEF::dwarf::editor::FunctionType") &amp;set\_return\_type(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") &amp;type)

Set the return type of this function.

#### [` add_parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor12FunctionType13add_parameterERK4Type>)

std::unique\_ptr&lt;[Parameter](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor12FunctionType9ParameterE> "LIEF::dwarf::editor::FunctionType::Parameter")&gt; add\_parameter(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") &amp;type)

Add a parameter.

#### [` ~FunctionType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor12FunctionTypeD0Ev>)

~FunctionType() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor12FunctionType7classofEPK4Type>)

static bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") \*type)

#### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor12FunctionType9ParameterE>)

class Parameter

This class represents a function’s parameter.

Public Functions

##### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor12FunctionType9Parameter9ParameterEv>)

Parameter() = delete

##### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor12FunctionType9Parameter9ParameterENSt10unique_ptrIN7details19FunctionTyParameterEEE>)

Parameter(std::unique\_ptr&lt;details::FunctionTyParameter&gt; impl)

##### [` ~Parameter `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor12FunctionType9ParameterD0Ev>)

~Parameter()

---

## [Editor - TypeDef](<https://lief.re/doc/latest/extended/dwarf/cpp.html#editor-typedef>)

### [` TypeDef `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor7TypeDefE>)

class TypeDef : public LIEF::dwarf::editor::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type")

This class represents a typedef (`DW_TAG_typedef`).

Public Functions

#### [` ArgsTypeDef `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor7TypeDef7TypeDefEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor7TypeDef7TypeDefEDpRR4Args> "LIEF::dwarf::editor::TypeDef::TypeDef::Args")&amp;&amp;...&gt;&gt;&gt;  
inline TypeDef([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor7TypeDef7TypeDefEDpRR4Args> "LIEF::dwarf::editor::TypeDef::TypeDef::Args")&amp;&amp;... args)

#### [` ~TypeDef `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor7TypeDefD0Ev>)

~TypeDef() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor7TypeDef7classofEPK4Type>)

static bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") \*type)

---

## [Editor - StructType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#editor-structtype>)

### [` StructType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructTypeE>)

class StructType : public LIEF::dwarf::editor::[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type")

This class represents a struct-like type which can be:

- `DW_TAG_class_type`
- `DW_TAG_structure_type`
- `DW_TAG_union_type`

Public Types

#### [` TYPE `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType4TYPEE>)

enum class TYPE : uint32\_t

*Values:*

##### [` CLASS `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType4TYPE5CLASSE>)

enumerator CLASS

##### [` STRUCT `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType4TYPE6STRUCTE>)

enumerator STRUCT

Discriminant for `DW_TAG_class_type`.

##### [` UNION `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType4TYPE5UNIONE>)

enumerator UNION

Discriminant for `DW_TAG_structure_type`.

Public Functions

#### [` ArgsStructType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor10StructType10StructTypeEDpRR4Args>)

template&lt;typename ...Args, typename = std::enable\_if\_t&lt;std::is\_constructible\_v&lt;[Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type"), [Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor10StructType10StructTypeEDpRR4Args> "LIEF::dwarf::editor::StructType::StructType::Args")&amp;&amp;...&gt;&gt;&gt;  
inline StructType([Args](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4IDp0EN4LIEF5dwarf6editor10StructType10StructTypeEDpRR4Args> "LIEF::dwarf::editor::StructType::StructType::Args")&amp;&amp;... args)

#### [` set_size `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType8set_sizeE8uint64_t>)

[StructType](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructTypeE> "LIEF::dwarf::editor::StructType") &amp;set\_size(uint64\_t size)

Define the overall size which is equivalent to the `sizeof` of the current type.

This function defines the `DW_AT_byte_size` attribute

#### [` add_member `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType10add_memberENSt11string_viewERK4Type7int64_t>)

std::unique\_ptr&lt;[Member](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType6MemberE> "LIEF::dwarf::editor::StructType::Member")&gt; add\_member(std::string\_view name, const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") &amp;type, int64\_t offset = -1)

Adds a member to the current struct-like.

#### [` add_bitfield `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType12add_bitfieldENSt11string_viewERK4Type8uint64_t7int64_t>)

std::unique\_ptr&lt;[Member](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType6MemberE> "LIEF::dwarf::editor::StructType::Member")&gt; add\_bitfield(std::string\_view name, const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") &amp;type, uint64\_t bitsize, int64\_t bitoffset = -1)

Adds a bitfield member to the current structure.

#### [` ~StructType `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructTypeD0Ev>)

~StructType() override = default

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType7classofEPK4Type>)

static bool classof(const [Type](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor4TypeE> "LIEF::dwarf::editor::Type") \*type)

#### [` Member `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType6MemberE>)

class Member

This class represents a member of the struct-like.

Public Functions

##### [` Member `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType6Member6MemberEv>)

Member() = delete

##### [` Member `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType6Member6MemberENSt10unique_ptrIN7details12StructMemberEEE>)

Member(std::unique\_ptr&lt;details::StructMember&gt; impl)

##### [` ~Member `](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf6editor10StructType6MemberD0Ev>)

~Member()
