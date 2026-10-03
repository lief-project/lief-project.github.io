---
documentID: "da6eee04e1a735b125dea00ef9639aaeafe6ea2128dc67d67a23cb81f31e6e6d"
docname: "extended/dwarf/python"
title: "DWARF Python API - LIEF Documentation"
description: "DWARF Python API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/extended/dwarf/python.html"
markdownURL: "https://lief.re/doc/latest/extended/dwarf/python.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "d92bed78a78aff39cb5ecae5ae27e344f89ed6ff420b128946c496f4ca6659f1"
---

# [Python](<https://lief.re/doc/latest/extended/dwarf/python.html#python>)

## [` lief.dwarf.load `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.load>)

lief.dwarf.load(*path: str | os.PathLike*) → [lief.dwarf.DebugInfo](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.DebugInfo> "lief.dwarf.DebugInfo") | None

Load the DWARF from the given path

## [DebugInfo](<https://lief.re/doc/latest/extended/dwarf/python.html#debuginfo>)

### [` lief.dwarf.DebugInfo `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.DebugInfo>)

class lief.dwarf.DebugInfo

Bases: [`DebugInfo`](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DebugInfo> "lief._lief.DebugInfo")

This class represents a DWARF debug information. It can embed different compilation units which can be accessed through [`compilation_units`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.DebugInfo.compilation_units> "lief.dwarf.DebugInfo.compilation_units").

This class can be instantiated from [`lief.Binary.debug_info`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.debug_info> "lief.Binary.debug_info") or [`lief.dwarf.load()`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.load> "lief.dwarf.load")

#### [` compilation_units `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.DebugInfo.compilation_units>)

property compilation\_units → Iterator[[lief.dwarf.CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit> "lief.dwarf.CompilationUnit") | None]

Iterator on the CompilationUnit embedded in this dwarf

#### [` find_functionfind_function `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.DebugInfo.find_function>)

find\_function(*self*, *name: str*) → [lief.\_lief.dwarf.Function](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function> "lief._lief.dwarf.Function") | None

**find\_function(*self*, *addr: int*) → [lief.\_lief.dwarf.Function](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function> "lief._lief.dwarf.Function") | None**

Overloaded function.

1. `find_function(self, name: str) -> Optional[lief._lief.dwarf.Function]`

   > Try to find the function with the given name (mangled or not)
   >
   > ```python
   > info: lief.dwarf.DebugInfo = ...
   > if func := info.find_function("_ZNSt6localeD1Ev"):
   >     print("Found")
   > if func := info.find_function("std::locale::~locale()"):
   >     print("Found")
   > ```
2. `find_function(self, addr: int) -> Optional[lief._lief.dwarf.Function]`

   > Try to find the function at the given **virtual** address.

#### [` find_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.DebugInfo.find_type>)

find\_type(*self*, *name: str*) → [lief.\_lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type") | None

Try to find the type with the given name.

#### [` find_variablefind_variable `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.DebugInfo.find_variable>)

find\_variable(*self*, *addr: int*) → [lief.\_lief.dwarf.Variable](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable> "lief._lief.dwarf.Variable") | None

**find\_variable(*self*, *name: str*) → [lief.\_lief.dwarf.Variable](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable> "lief._lief.dwarf.Variable") | None**

Overloaded function.

1. `find_variable(self, addr: int) -> Optional[lief._lief.dwarf.Variable]`

   > Try to find the (static) variable at the given virtual address.
2. `find_variable(self, name: str) -> Optional[lief._lief.dwarf.Variable]`

   > Try to find the variable with the given name. This name can be mangled or not.

---

## [CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/python.html#compilationunit>)

### [` lief.dwarf.CompilationUnit `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit>)

class lief.dwarf.CompilationUnit

Bases: `object`

This class represents a DWARF compilation unit

#### [` Language `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language>)

class Language

Bases: `object`

Languages supported by the DWARF (v5) format. See: [https://dwarfstd.org/languages.html](<https://dwarfstd.org/languages.html>)

Some languages (like C++11, C++17, ..) have a version (11, 17, …) which is stored in a dedicated attribute: [`version`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.version> "lief.dwarf.CompilationUnit.Language.version")

##### [` LANG `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.LANG>)

class LANG(*\*values*)

Bases: `Enum`

###### [` C `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.LANG.C>)

C = 1

###### [` COBOL `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.LANG.COBOL>)

COBOL = 10

###### [` CPP `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.LANG.CPP>)

CPP = 2

###### [` D `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.LANG.D>)

D = 8

###### [` DART `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.LANG.DART>)

DART = 4

###### [` FORTRAN `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.LANG.FORTRAN>)

FORTRAN = 6

###### [` JAVA `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.LANG.JAVA>)

JAVA = 9

###### [` MODULA `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.LANG.MODULA>)

MODULA = 5

###### [` RUST `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.LANG.RUST>)

RUST = 3

###### [` SWIFT `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.LANG.SWIFT>)

SWIFT = 7

###### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.LANG.UNKNOWN>)

UNKNOWN = 0

###### [` from_value `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.LANG.from_value>)

from\_value(*arg: int*) → [lief.dwarf.CompilationUnit.Language.LANG](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.LANG> "lief.dwarf.CompilationUnit.Language.LANG") = &lt;nanobind.nb\_func object&gt;

##### [` lang `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.lang>)

property lang → [lief.dwarf.CompilationUnit.Language.LANG](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.LANG> "lief.dwarf.CompilationUnit.Language.LANG")

The language itself

##### [` version `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language.version>)

property version → int

Version of the language (e.g. 17 for C++17)

#### [` compilation_dir `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.compilation_dir>)

property compilation\_dir → str

Return the path to the directory in which the compilation took place for compiling this compilation unit (e.g. `/workdir/build`)

It returns an **empty** string if the entry is not present or can’t be resolved.

This value matches the `DW_AT_comp_dir` attribute.

#### [` find_functionfind_function `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.find_function>)

find\_function(*self*, *name: str*) → [lief.\_lief.dwarf.Function](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function> "lief._lief.dwarf.Function") | None

**find\_function(*self*, *addr: int*) → [lief.\_lief.dwarf.Function](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function> "lief._lief.dwarf.Function") | None**

Overloaded function.

1. `find_function(self, name: str) -> Optional[lief._lief.dwarf.Function]`

   > Try to find the function whose name is given in parameter.
   >
   > The provided name can be demangled.
2. `find_function(self, addr: int) -> Optional[lief._lief.dwarf.Function]`

   > Try to find the function at the given address

#### [` find_variablefind_variable `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.find_variable>)

find\_variable(*self*, *addr: int*) → [lief.\_lief.dwarf.Variable](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable> "lief._lief.dwarf.Variable") | None

**find\_variable(*self*, *name: str*) → [lief.\_lief.dwarf.Variable](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable> "lief._lief.dwarf.Variable") | None**

Overloaded function.

1. `find_variable(self, addr: int) -> Optional[lief._lief.dwarf.Variable]`

   > Try to find the variable at the given address
2. `find_variable(self, name: str) -> Optional[lief._lief.dwarf.Variable]`

   > Try to find the variable with the given name (mangled or not)

#### [` functions `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.functions>)

property functions → Iterator[[lief.dwarf.Function](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function> "lief.dwarf.Function") | None]

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

#### [` high_address `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.high_address>)

property high\_address → int

Return the highest virtual address owned by this compilation unit

#### [` imported_functions `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.imported_functions>)

property imported\_functions → Iterator[[lief.dwarf.Function](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function> "lief.dwarf.Function") | None]

Return an iterator over the functions **imported** in this compilation unit **but not** implemented.

For instance with this code:

```cpp
#include <cstdio>
int main() {
  printf("Hello\n");
  return 0;
}
```

`printf` is imported from the standard libc so the function is returned by the iterator. On the other hand, `main()` is implemented in this compilation unit so it is not returned by [`imported_functions`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.imported_functions> "lief.dwarf.CompilationUnit.imported_functions") but [`functions`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.functions> "lief.dwarf.CompilationUnit.functions").

#### [` language `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.language>)

property language → [lief.dwarf.CompilationUnit.Language](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.Language> "lief.dwarf.CompilationUnit.Language")

Original language of this compilation unit.

This value matches the `DW_AT_language` attribute.

#### [` low_address `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.low_address>)

property low\_address → int

Return the lowest virtual address owned by this compilation unit.

#### [` name `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.name>)

property name → str

Name of the file associated with this compilation unit (e.g. `test.cpp`) Return an **empty** string if the name is not found or can’t be resolved

This value matches the `DW_AT_name` attribute.

#### [` producer `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.producer>)

property producer → str

Information about the program (or library) that generated this compilation unit. For instance, it can output: `Debian clang version 17.0.6`.

It returns an **empty** string if the producer is not present or can’t be resolved.

This value matches the `DW_AT_producer` attribute.

#### [` ranges `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.ranges>)

property ranges → list[lief.range\_t]

Return a list of address ranges owned by this compilation unit.

If the compilation unit owns a contiguous range, it returns **a single** range.

#### [` size `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.size>)

property size → int

Return the size of the compilation unit according to its range of address.

If the compilation is fragmented (i.e. there are some address ranges between the lowest address and the highest that are not owned by the CU), then it returns the sum of **all** the address ranges owned by this CU.

If the compilation unit is **not** fragmented, then it basically returns `high_address - low_address`.

#### [` to_decl `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.to_decl>)

to\_decl(*self*, *opt: [lief.\_lief.DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt> "lief._lief.DeclOpt") | None = None*) → str

Generates a C/C++ definition for the functions defined in this compilation unit

#### [` types `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.types>)

property types → Iterator[[lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None]

Return an iterator over the different types defined in this compilation unit.

#### [` variables `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit.variables>)

property variables → Iterator[[lief.dwarf.Variable](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable> "lief.dwarf.Variable") | None]

Return an iterator over the variables defined in any scope of this compilation unit:

```cpp
static int A = 1; // Returned by the iterator
static const char* B = "Hello"; // Returned by the iterator

int get() {
  static int C = 2; // Returned by the iterator
  return C;
}
```

---

## [Function](<https://lief.re/doc/latest/extended/dwarf/python.html#function>)

### [` lief.dwarf.Function `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function>)

class lief.dwarf.Function

Bases: `object`

This class represents a DWARF function which can be associated with either: `DW_TAG_subprogram` or `DW_TAG_inlined_subroutine`.

#### [` address `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.address>)

property address → int | None

Return the address of the function (`DW_AT_entry_pc` or `DW_AT_low_pc`) or `None` if it’s not available.

#### [` debug_location `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.debug_location>)

property debug\_location → [lief.debug\_location\_t](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.debug_location_t> "lief.debug_location_t")

Original source code location.

#### [` description `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.description>)

property description → str

Description (`DW_AT_description`) of this function or an empty string

#### [` instructions `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.instructions>)

property instructions → Iterator[[lief.assembly.Instruction](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief.assembly.Instruction") | None]

Disassemble the current function by returning an iterator over the [`lief.assembly.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief.assembly.Instruction").

#### [` is_artificial `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.is_artificial>)

property is\_artificial → bool

Whether this function is created by the compiler and not present in the original source code.

#### [` is_external `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.is_external>)

property is\_external → bool

Whether the function is defined **outside** the current compilation unit (`DW_AT_external`).

#### [` lexical_blocks `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.lexical_blocks>)

property lexical\_blocks → Iterator[[lief.dwarf.LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LexicalBlock> "lief.dwarf.LexicalBlock") | None]

Iterator over the [`LexicalBlock`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LexicalBlock> "lief.dwarf.LexicalBlock") owned by this function

#### [` linkage_name `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.linkage_name>)

property linkage\_name → str

The name of the function which is used for linking (DW\_AT\_linkage\_name).

This name differs from [`name`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.name> "lief.dwarf.Function.name") as it is usually mangled. The function returns an empty string if the linkage name is not available.

#### [` name `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.name>)

property name → str

The name of the function (`DW_AT_name`)

#### [` parameters `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.parameters>)

property parameters → list[[lief.dwarf.Parameter](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Parameter> "lief.dwarf.Parameter") | None]

Return the list of parameters used by this function (including template parameters)

#### [` ranges `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.ranges>)

property ranges → list[lief.range\_t]

Ranges of virtual addresses owned by this function.

#### [` scope `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.scope>)

property scope → [lief.dwarf.Scope](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope> "lief.dwarf.Scope") | None

Scope in which this function is defined

#### [` size `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.size>)

property size → int

Return the size taken by this function in the binary.

#### [` thrown_types `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.thrown_types>)

property thrown\_types → list[[lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None]

List of exceptions (types) that can be thrown by the function. For instance, given this Swift code:

```swift
func summarize(_ ratings: [Int]) throws(StatisticsError) {
  // ...
}
```

[`thrown_types`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.thrown_types> "lief.dwarf.Function.thrown_types") returns one element associated with the [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type"): `StatisticsError`.

#### [` to_decl `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.to_decl>)

to\_decl(*self*, *opt: [lief.\_lief.DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt> "lief._lief.DeclOpt") | None = None*) → str

Generates a C/C++ definition for this function

#### [` type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.type>)

property type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

Return the [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") associated with the **return type** of this function

#### [` variables `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function.variables>)

property variables → Iterator[[lief.dwarf.Variable](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable> "lief.dwarf.Variable") | None]

Return an iterator over the variables (`DW_TAG_variable`) defined within the scope of this function. This includes regular stack-based variables as well as static ones.

---

## [Parameter](<https://lief.re/doc/latest/extended/dwarf/python.html#parameter>)

### [` lief.dwarf.Parameter `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Parameter>)

class lief.dwarf.Parameter

Bases: `object`

This class represents a DWARF parameter which can be either: - A regular function parameter (see: [`parameters.Formal`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.parameters.Formal> "lief.dwarf.parameters.Formal")) - A template type parameter (see: [`parameters.TemplateType`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.parameters.TemplateType> "lief.dwarf.parameters.TemplateType")) - A template value parameter (see: [`parameters.TemplateValue`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.parameters.TemplateValue> "lief.dwarf.parameters.TemplateValue"))

#### [` location `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Parameter.location>)

property location → [lief.dwarf.Location](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location> "lief.dwarf.Location") | None

Location of this parameter. For instance it can be a specific register that is not following the calling convention.

#### [` location_at `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Parameter.location_at>)

location\_at(*self*, *pc: int*) → [lief.\_lief.dwarf.Location](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location> "lief._lief.dwarf.Location") | None

Location of this parameter when the program counter is at the given address.

#### [` locations `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Parameter.locations>)

property locations → list[[lief.dwarf.LocationEntry](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LocationEntry> "lief.dwarf.LocationEntry")]

All the location entries of this parameter.

#### [` name `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Parameter.name>)

property name → str

Name of the parameter

#### [` type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Parameter.type>)

property type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

Type of this parameter

---

## [Formal Parameter](<https://lief.re/doc/latest/extended/dwarf/python.html#formal-parameter>)

![Inheritance diagram of lief._lief.dwarf.parameters.Formal](https://lief.re/doc/latest/_images/inheritance-f2e016eb1fc821dd8b3ed0b2ac536c59c0383f58.png)

### [` lief.dwarf.parameters.Formal `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.parameters.Formal>)

class lief.dwarf.parameters.Formal

Bases: [`Parameter`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Parameter> "lief._lief.dwarf.Parameter")

This class represents a regular function parameter.

For instance, given this prototype:

```cpp
int main(int argc, const char** argv);
```

The function `main` has two [`Formal`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.parameters.Formal> "lief.dwarf.parameters.Formal") parameters:

1. **`argc` ([`lief.dwarf.Parameter.name`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Parameter.name> "lief.dwarf.Parameter.name")) typed as `int`**

   ([`Base`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Base> "lief.dwarf.types.Base") from [`lief.dwarf.Parameter.type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Parameter.type> "lief.dwarf.Parameter.type"))
2. **`argv` ([`lief.dwarf.Parameter.name`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Parameter.name> "lief.dwarf.Parameter.name")) typed as `const char**`**

   ([`Const`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Const> "lief.dwarf.types.Const"))

#### [` type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.parameters.Formal.type>)

property type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

---

## [Template Value Parameter](<https://lief.re/doc/latest/extended/dwarf/python.html#template-value-parameter>)

![Inheritance diagram of lief._lief.dwarf.parameters.TemplateValue](https://lief.re/doc/latest/_images/inheritance-554b5ae50cf5fec8695b5288da12d03646ac2044.png)

### [` lief.dwarf.parameters.TemplateValue `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.parameters.TemplateValue>)

class lief.dwarf.parameters.TemplateValue

Bases: [`Parameter`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Parameter> "lief._lief.dwarf.Parameter")

This class represents a template **value** parameter.

For instance, given this prototype:

```cpp
template<int X = 5>
void generic();
```

The function `generic` has one [`TemplateValue`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.parameters.TemplateValue> "lief.dwarf.parameters.TemplateValue") parameter: `X`

---

## [Template Type Parameter](<https://lief.re/doc/latest/extended/dwarf/python.html#template-type-parameter>)

![Inheritance diagram of lief._lief.dwarf.parameters.TemplateType](https://lief.re/doc/latest/_images/inheritance-d671e662130bbccc372641660cb71797cb7ac4de.png)

### [` lief.dwarf.parameters.TemplateType `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.parameters.TemplateType>)

class lief.dwarf.parameters.TemplateType

Bases: [`Parameter`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Parameter> "lief._lief.dwarf.Parameter")

This class represents a template **type** parameter.

For instance, given this prototype:

```cpp
template<class Y>
void generic();
```

The function `generic` has one [`TemplateType`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.parameters.TemplateType> "lief.dwarf.parameters.TemplateType") parameter: `Y`

---

## [Scope](<https://lief.re/doc/latest/extended/dwarf/python.html#scope>)

### [` lief.dwarf.Scope `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope>)

class lief.dwarf.Scope

Bases: `object`

This class materializes a scope in which [`Function`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function> "lief.dwarf.Function"), [`Variable`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable> "lief.dwarf.Variable"), [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type"), … can be defined.

#### [` TYPE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

##### [` CLASS `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope.TYPE.CLASS>)

CLASS = 2

##### [` COMPILATION_UNIT `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope.TYPE.COMPILATION_UNIT>)

COMPILATION\_UNIT = 6

##### [` FUNCTION `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope.TYPE.FUNCTION>)

FUNCTION = 5

##### [` NAMESPACE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope.TYPE.NAMESPACE>)

NAMESPACE = 4

##### [` STRUCT `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope.TYPE.STRUCT>)

STRUCT = 3

##### [` UNION `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope.TYPE.UNION>)

UNION = 1

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope.TYPE.UNKNOWN>)

UNKNOWN = 0

#### [` chained `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope.chained>)

chained(*self*, *sep: str = '::'*) → str

Represent the whole chain of all (parent) scopes using the provided separator. E.g. `ns1::ns2::Class1::Struct2::Type`.

#### [` name `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope.name>)

property name → str

Name of the scope. For instance namespace’s name or function’s name.

#### [` parent `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope.parent>)

property parent → [lief.dwarf.Scope](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope> "lief.dwarf.Scope") | None

Parent scope (if any).

#### [` type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope.type>)

property type → [lief.dwarf.Scope.TYPE](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope.TYPE> "lief.dwarf.Scope.TYPE")

The current scope type.

---

## [Variable](<https://lief.re/doc/latest/extended/dwarf/python.html#variable>)

### [` lief.dwarf.Variable `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable>)

class lief.dwarf.Variable

Bases: `object`

This class represents a DWARF variable which can be owned by a [`Function`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function> "lief.dwarf.Function") or a [`CompilationUnit`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompilationUnit> "lief.dwarf.CompilationUnit").

#### [` address `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.address>)

property address → int | None

Address of the variable.

If the variable is **static**, it returns the **virtual address** where it is defined. If the variable is stack-based, it returns the **relative offset** from the frame-base register.

If the address can’t be resolved, it returns `None`.

#### [` debug_location `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.debug_location>)

property debug\_location → [lief.debug\_location\_t](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.debug_location_t> "lief.debug_location_t")

The original source location where the variable is defined.

#### [` description `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.description>)

property description → str

Description (`DW_AT_description`) of the variable or an empty string.

#### [` is_constexpr `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.is_constexpr>)

property is\_constexpr → bool

Whether it’s a `constexpr` variable.

#### [` is_stack_based `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.is_stack_based>)

property is\_stack\_based → bool

Whether this variable is allocated on the stack

#### [` linkage_name `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.linkage_name>)

property linkage\_name → str

The name of the variable which is used for linking (`DW_AT_linkage_name`).

This name differs from [`name`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.name> "lief.dwarf.Variable.name") as it is usually mangled. The function returns an empty string if the linkage name is not available.

#### [` location `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.location>)

property location → [lief.dwarf.Location](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location> "lief.dwarf.Location") | None

Location of this variable.

#### [` location_at `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.location_at>)

location\_at(*self*, *pc: int*) → [lief.\_lief.dwarf.Location](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location> "lief._lief.dwarf.Location") | None

Location of this variable when PC is at the given address.

#### [` locations `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.locations>)

property locations → list[[lief.dwarf.LocationEntry](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LocationEntry> "lief.dwarf.LocationEntry")]

All the location entries of this variable.

#### [` name `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.name>)

property name → str

Name of the variable (usually demangled)

#### [` scope `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.scope>)

property scope → [lief.dwarf.Scope](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope> "lief.dwarf.Scope") | None

Scope in which this variable is defined

#### [` size `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.size>)

property size → int | None

Return the size of the variable (or a lief\_errors if it can’t be resolved).

This size is defined by the type of the variable.

#### [` to_decl `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.to_decl>)

to\_decl(*self*, *opt: [lief.\_lief.DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt> "lief._lief.DeclOpt") | None = None*) → str

Generates a C/C++ definition for this variable

#### [` type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Variable.type>)

property type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

Return the type of this variable.

---

## [Location](<https://lief.re/doc/latest/extended/dwarf/python.html#location>)

### [` lief.dwarf.Location `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location>)

class lief.dwarf.Location

Bases: `object`

This class represents where the value of a variable or a parameter lives. It interfaces the DWARF location expression (`DW_AT_location`).

#### [` Type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location.Type>)

class Type(*\*values*)

Bases: `Enum`

##### [` ADDRESS `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location.Type.ADDRESS>)

ADDRESS = 2

##### [` COMPOSITE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location.Type.COMPOSITE>)

COMPOSITE = 7

##### [` EXPRESSION `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location.Type.EXPRESSION>)

EXPRESSION = 5

##### [` FRAME_BASE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location.Type.FRAME_BASE>)

FRAME\_BASE = 3

##### [` REGISTER `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location.Type.REGISTER>)

REGISTER = 1

##### [` REGISTER_OFFSET `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location.Type.REGISTER_OFFSET>)

REGISTER\_OFFSET = 4

##### [` UNAVAILABLE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location.Type.UNAVAILABLE>)

UNAVAILABLE = 6

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location.Type.UNKNOWN>)

UNKNOWN = 0

#### [` type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location.type>)

property type → [lief.dwarf.Location.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location.Type> "lief.dwarf.Location.Type")

The kind of location

### [` lief.dwarf.RegisterLoc `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.RegisterLoc>)

class lief.dwarf.RegisterLoc

Bases: [`Location`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location> "lief._lief.dwarf.Location")

The value is associated to a register (e.g. `DW_OP_reg5`)

#### [` id `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.RegisterLoc.id>)

property id → int

DWARF id of the register that must be interpreted according to the target architecture

### [` lief.dwarf.AddressLoc `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.AddressLoc>)

class lief.dwarf.AddressLoc

Bases: [`Location`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location> "lief._lief.dwarf.Location")

The value is located at a fixed memory address (e.g. `DW_OP_addr`)

#### [` address `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.AddressLoc.address>)

property address → int

Memory address where the value is located

### [` lief.dwarf.FrameBaseLoc `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.FrameBaseLoc>)

class lief.dwarf.FrameBaseLoc

Bases: [`Location`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location> "lief._lief.dwarf.Location")

The value is located in memory relative to the (stack) frame base.

#### [` offset `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.FrameBaseLoc.offset>)

property offset → int

Signed byte offset from the frame base

### [` lief.dwarf.RegisterOffsetLoc `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.RegisterOffsetLoc>)

class lief.dwarf.RegisterOffsetLoc

Bases: [`Location`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location> "lief._lief.dwarf.Location")

The value is located in memory at the address stored in a register plus a signed offset (e.g. `DW_OP_breg7 +8`)

#### [` id `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.RegisterOffsetLoc.id>)

property id → int

DWARF id of the register that contains the base address

#### [` offset `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.RegisterOffsetLoc.offset>)

property offset → int

Signed byte offset added to the register’s value

### [` lief.dwarf.ExpressionLoc `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.ExpressionLoc>)

class lief.dwarf.ExpressionLoc

Bases: [`Location`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location> "lief._lief.dwarf.Location")

A DWARF expression that is not evaluated by LIEF: implicit values, computed addresses, entry values, …

#### [` description `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.ExpressionLoc.description>)

property description → str

Textual representation of the expression (e.g. `DW_OP_lit0, DW_OP_stack_value`)

#### [` expression `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.ExpressionLoc.expression>)

property expression → bytes

Raw bytes of the DWARF expression

### [` lief.dwarf.UnavailableLoc `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.UnavailableLoc>)

class lief.dwarf.UnavailableLoc

Bases: [`Location`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location> "lief._lief.dwarf.Location")

The value is not available at this location (e.g. optimized out)

### [` lief.dwarf.CompositeLocation `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompositeLocation>)

class lief.dwarf.CompositeLocation

Bases: [`Location`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location> "lief._lief.dwarf.Location")

The value is split into several pieces (`DW_OP_piece/DW_OP_bit_piece`), each one with its own location.

For instance, a 16-bytes structure passed in the `rdi` and `rsi` registers is described with two 8-bytes pieces.

#### [` Piece `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompositeLocation.Piece>)

class Piece

Bases: `object`

A piece of a [`CompositeLocation`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompositeLocation> "lief.dwarf.CompositeLocation")

##### [` KIND `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompositeLocation.Piece.KIND>)

class KIND(*\*values*)

Bases: `Enum`

###### [` BIT `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompositeLocation.Piece.KIND.BIT>)

BIT = 1

###### [` BYTE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompositeLocation.Piece.KIND.BYTE>)

BYTE = 0

##### [` bit_offset `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompositeLocation.Piece.bit_offset>)

property bit\_offset → int

Offset (in bits) of this piece within the whole value

##### [` bit_size `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompositeLocation.Piece.bit_size>)

property bit\_size → int

Size of this piece in bits

##### [` kind `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompositeLocation.Piece.kind>)

property kind → [lief.dwarf.CompositeLocation.Piece.KIND](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompositeLocation.Piece.KIND> "lief.dwarf.CompositeLocation.Piece.KIND")

Whether this piece comes from `DW_OP_piece` or `DW_OP_bit_piece`

##### [` location `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompositeLocation.Piece.location>)

property location → [lief.dwarf.Location](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location> "lief.dwarf.Location") | None

Location of this piece or `None` if it can’t be decoded

##### [` source_bit_offset `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompositeLocation.Piece.source_bit_offset>)

property source\_bit\_offset → int | None

For a `DW_OP_bit_piece`, the offset (in bits) of this piece within its location (e.g. the register). `None` otherwise.

#### [` pieces `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompositeLocation.pieces>)

property pieces → list[[lief.dwarf.CompositeLocation.Piece](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.CompositeLocation.Piece> "lief.dwarf.CompositeLocation.Piece")]

The pieces of this location, ordered by their bit offset

---

## [Location Entry](<https://lief.re/doc/latest/extended/dwarf/python.html#location-entry>)

### [` lief.dwarf.LocationEntry `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LocationEntry>)

class lief.dwarf.LocationEntry

Bases: `object`

A [`Location`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location> "lief.dwarf.Location") associated with the range of addresses where it is valid.

#### [` location `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LocationEntry.location>)

property location → [lief.dwarf.Location](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location> "lief.dwarf.Location") | None

The location or `None` if the DWARF expression can’t be decoded

#### [` range `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LocationEntry.range>)

property range → lief.range\_t | None

Range of addresses `[low, high)` where the location is valid.

#### [` section_index `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LocationEntry.section_index>)

property section\_index → int | None

Index of the object’s section containing the range (if any)

---

## [LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/python.html#lexicalblock>)

### [` lief.dwarf.LexicalBlock `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LexicalBlock>)

class lief.dwarf.LexicalBlock

Bases: `object`

This class represents a DWARF lexical block (`DW_TAG_lexical_block`)

#### [` addr `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LexicalBlock.addr>)

property addr → int | None

Return the start address of this block

#### [` description `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LexicalBlock.description>)

property description → str

Return the description associated with this lexical block or an empty string

#### [` high_pc `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LexicalBlock.high_pc>)

property high\_pc → int | None

Return the highest virtual address owned by this block.

#### [` low_pc `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LexicalBlock.low_pc>)

property low\_pc → int | None

Return the lowest virtual address owned by this block.

#### [` name `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LexicalBlock.name>)

property name → str

Return the *name* associated with this lexical block or an empty string

#### [` ranges `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LexicalBlock.ranges>)

property ranges → list[lief.range\_t]

Return a list of address ranges owned by this block.

If the lexical block owns a contiguous range, it should return **a single** range.

#### [` size `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LexicalBlock.size>)

property size → int

Return the size of this block as the difference of the highest address and the lowest address.

#### [` sub_blocks `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LexicalBlock.sub_blocks>)

property sub\_blocks → Iterator[[lief.dwarf.LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.LexicalBlock> "lief.dwarf.LexicalBlock") | None]

Return an iterator over the sub-LexicalBlock owned by this block.

---

## [Type](<https://lief.re/doc/latest/extended/dwarf/python.html#type>)

![Inheritance diagram of lief._lief.dwarf.types.Structure, lief._lief.dwarf.types.File, lief._lief.dwarf.types.Packed, lief._lief.dwarf.types.Volatile, lief._lief.dwarf.types.Dynamic, lief._lief.dwarf.types.Thrown, lief._lief.dwarf.types.SetTy, lief._lief.dwarf.types.Class, lief._lief.dwarf.types.Immutable, lief._lief.dwarf.types.Enum, lief._lief.dwarf.types.Union, lief._lief.dwarf.types.Atomic, lief._lief.dwarf.types.Const, lief._lief.dwarf.types.Array, lief._lief.dwarf.types.Reference, lief._lief.dwarf.types.TemplateAlias, lief._lief.dwarf.types.Interface, lief._lief.dwarf.types.ClassLike, lief._lief.dwarf.types.Base, lief._lief.dwarf.types.Pointer, lief._lief.dwarf.types.RValueReference, lief._lief.dwarf.types.Coarray, lief._lief.dwarf.types.Typedef, lief._lief.dwarf.types.Subroutine, lief._lief.dwarf.types.StringTy, lief._lief.dwarf.Type, lief._lief.dwarf.types.Shared, lief._lief.dwarf.types.PointerToMember, lief._lief.dwarf.types.Restrict](https://lief.re/doc/latest/_images/inheritance-8f18972e63d7aefe15d0a97dea056f2ce696db68.png)

### [` lief.dwarf.Type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type>)

class lief.dwarf.Type

Bases: `object`

This class represents a DWARF Type which includes:

- `DW_TAG_array_type`
- `DW_TAG_const_type`
- `DW_TAG_pointer_type`
- `DW_TAG_structure_type`
- `DW_TAG_base_type`
- `DW_TAG_class_type`
- `DW_TAG_enumeration_type`
- `DW_TAG_string_type`
- `DW_TAG_union_type`
- `DW_TAG_volatile_type`
- `DW_TAG_unspecified_type`
- `DW_TAG_typedef`
- `DW_TAG_reference_type`
- `DW_TAG_subroutine_type`
- `DW_TAG_ptr_to_member_type`
- `DW_TAG_set_type`
- `DW_TAG_packed_type`
- `DW_TAG_file_type`
- `DW_TAG_thrown_type`
- `DW_TAG_restrict_type`
- `DW_TAG_interface_type`
- `DW_TAG_shared_type`
- `DW_TAG_rvalue_reference_type`
- `DW_TAG_template_alias`
- `DW_TAG_coarray_type`
- `DW_TAG_dynamic_type`
- `DW_TAG_atomic_type`
- `DW_TAG_immutable_type`

#### [` KIND `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND>)

class KIND(*\*values*)

Bases: `Enum`

##### [` ARRAY `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.ARRAY>)

ARRAY = 5

##### [` ATOMIC `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.ATOMIC>)

ATOMIC = 26

##### [` BASE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.BASE>)

BASE = 2

##### [` CLASS `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.CLASS>)

CLASS = 4

##### [` COARRAY `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.COARRAY>)

COARRAY = 24

##### [` CONST_KIND `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.CONST_KIND>)

CONST\_KIND = 3

##### [` DYNAMIC `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.DYNAMIC>)

DYNAMIC = 25

##### [` ENUM `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.ENUM>)

ENUM = 28

##### [` FILE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.FILE>)

FILE = 16

##### [` IMMUTABLE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.IMMUTABLE>)

IMMUTABLE = 27

##### [` INTERFACE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.INTERFACE>)

INTERFACE = 20

##### [` PACKED `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.PACKED>)

PACKED = 15

##### [` POINTER `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.POINTER>)

POINTER = 6

##### [` POINTER_MEMBER `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.POINTER_MEMBER>)

POINTER\_MEMBER = 14

##### [` REF `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.REF>)

REF = 10

##### [` RESTRICT `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.RESTRICT>)

RESTRICT = 19

##### [` RVALREF `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.RVALREF>)

RVALREF = 22

##### [` SET_TYPE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.SET_TYPE>)

SET\_TYPE = 11

##### [` SHARED `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.SHARED>)

SHARED = 21

##### [` STRING `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.STRING>)

STRING = 12

##### [` STRUCT `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.STRUCT>)

STRUCT = 7

##### [` SUBROUTINE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.SUBROUTINE>)

SUBROUTINE = 13

##### [` TEMPLATE_ALIAS `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.TEMPLATE_ALIAS>)

TEMPLATE\_ALIAS = 23

##### [` THROWN `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.THROWN>)

THROWN = 17

##### [` TYPEDEF `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.TYPEDEF>)

TYPEDEF = 9

##### [` UNION `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.UNION>)

UNION = 8

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.UNKNOWN>)

UNKNOWN = 0

##### [` UNSPECIFIED `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.UNSPECIFIED>)

UNSPECIFIED = 1

##### [` VOLATILE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND.VOLATILE>)

VOLATILE = 18

#### [` is_unspecified `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.is_unspecified>)

property is\_unspecified → bool

Whether this type is a `DW_TAG_unspecified_type`

#### [` kind `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.kind>)

property kind → [lief.dwarf.Type.KIND](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.KIND> "lief.dwarf.Type.KIND")

Discriminator for the type’s subclasses

#### [` location `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.location>)

property location → [lief.debug\_location\_t](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.debug_location_t> "lief.debug_location_t")

Return the debug location where this type is defined.

#### [` name `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.name>)

property name → str | None

Return the type’s name or `None` if it can’t be resolved.

The name is resolved using either `DW_AT_name` or `DW_AT_picture_string`.

#### [` scope `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.scope>)

property scope → [lief.dwarf.Scope](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Scope> "lief.dwarf.Scope") | None

Scope in which this type is defined

#### [` size `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.size>)

property size → int | None

Return the size of the type or `None` if it can’t be computed.

This size should match the equivalent of `sizeof(Type)`.

#### [` to_decl `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type.to_decl>)

to\_decl(*self*, *opt: [lief.\_lief.DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt> "lief._lief.DeclOpt") | None = None*) → str

Generates a C/C++ definition for this type

---

## [Array](<https://lief.re/doc/latest/extended/dwarf/python.html#array>)

![Inheritance diagram of lief._lief.dwarf.types.Array](https://lief.re/doc/latest/_images/inheritance-6ce922b1fe3dff2a7e8e9070b451e76187cd784f.png)

### [` lief.dwarf.types.Array `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Array>)

class lief.dwarf.types.Array

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents a `DW_TAG_array_type`

#### [` size_info `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Array.size_info>)

property size\_info → [lief.dwarf.types.Array.size\_info\_t](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Array.size_info_t> "lief.dwarf.types.Array.size_info_t")

Return information about the size of this array.

This size info is usually embedded in a `DW_TAG_subrange_type` DIE which is represented by the [`Array.size_info_t`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Array.size_info_t> "lief.dwarf.types.Array.size_info_t") class.

#### [` size_info_t `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Array.size_info_t>)

class size\_info\_t

Bases: `object`

Class that wraps information about the dimension of this array

##### [` name `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Array.size_info_t.name>)

property name → str

Name of the index (usually not relevant like `__ARRAY_SIZE_TYPE__`)

##### [` size `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Array.size_info_t.size>)

property size → int

Size of the array. For instance in `uint8_t[3]`, it returns 3.

##### [` type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Array.size_info_t.type>)

property type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

Type of the **index** for this array.

For instance in `uint8_t[3]` the index type could be set to a `size_t`.

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Array.underlying_type>)

property underlying\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The underlying type of this array.

---

## [Base](<https://lief.re/doc/latest/extended/dwarf/python.html#base>)

![Inheritance diagram of lief._lief.dwarf.types.Base](https://lief.re/doc/latest/_images/inheritance-d8ffdbf34eb597bcaa9671ecd7dbcdd3d26003e3.png)

### [` lief.dwarf.types.Base `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Base>)

class lief.dwarf.types.Base

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class wraps the `DW_TAG_base_type` type which can be used – for instance – to represent integers or primitive types.

#### [` ENCODING `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Base.ENCODING>)

class ENCODING(*\*values*)

Bases: `Enum`

##### [` ADDRESS `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Base.ENCODING.ADDRESS>)

ADDRESS = 7

##### [` BOOLEAN `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Base.ENCODING.BOOLEAN>)

BOOLEAN = 6

##### [` FLOAT `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Base.ENCODING.FLOAT>)

FLOAT = 5

##### [` NONE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Base.ENCODING.NONE>)

NONE = 0

##### [` SIGNED `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Base.ENCODING.SIGNED>)

SIGNED = 1

##### [` SIGNED_CHAR `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Base.ENCODING.SIGNED_CHAR>)

SIGNED\_CHAR = 2

##### [` UNSIGNED `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Base.ENCODING.UNSIGNED>)

UNSIGNED = 3

##### [` UNSIGNED_CHAR `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Base.ENCODING.UNSIGNED_CHAR>)

UNSIGNED\_CHAR = 4

#### [` encoding `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Base.encoding>)

property encoding → [lief.dwarf.types.Base.ENCODING](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Base.ENCODING> "lief.dwarf.types.Base.ENCODING")

Describe how the base type is encoded and should be interpreted.

---

## [ClassLike](<https://lief.re/doc/latest/extended/dwarf/python.html#classlike>)

![Inheritance diagram of lief._lief.dwarf.types.Structure, lief._lief.dwarf.types.Packed, lief._lief.dwarf.types.ClassLike, lief._lief.dwarf.types.Class, lief._lief.dwarf.types.Union](https://lief.re/doc/latest/_images/inheritance-6c19793cea5aaae5717e23c2d4a093ca0c307c69.png)

### [` lief.dwarf.types.ClassLike `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike>)

class lief.dwarf.types.ClassLike

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class abstracts a DWARF aggregate (`DW_TAG_structure_type`, `DW_TAG_class_type`, `DW_TAG_union_type`).

#### [` Member `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike.Member>)

class Member

Bases: `object`

This class represents a class/struct/union attribute.

##### [` bit_offset `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike.Member.bit_offset>)

property bit\_offset → int | None

Offset of the current member in **bits** in the current struct/union/class

This function differs from [`offset`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike.Member.offset> "lief.dwarf.types.ClassLike.Member.offset") for aggregates using bit-field declaration:

```cpp
struct S {
  int flag : 4;
  int opt : 1
};
```

Usually, `offset * 8 == bit_offset`

If the offset can’t be resolved it returns None

##### [` bit_size `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike.Member.bit_size>)

property bit\_size → int | None

If the current member is a bit-field, this function returns its size in bits.

##### [` is_declaration `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike.Member.is_declaration>)

property is\_declaration → bool

##### [` is_external `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike.Member.is_external>)

property is\_external → bool

##### [` name `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike.Member.name>)

property name → str

Name of the member

##### [` offset `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike.Member.offset>)

property offset → int | None

Offset of the current member in the struct/union/class

If the offset can’t be resolved it returns None

##### [` type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike.Member.type>)

property type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

Type of the current member

#### [` find_member `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike.find_member>)

find\_member(*self*, *offset: int*) → [lief.\_lief.dwarf.types.ClassLike.Member](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike.Member> "lief._lief.dwarf.types.ClassLike.Member") | None

Try to find the attribute at the given offset

#### [` functions `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike.functions>)

property functions → Iterator[[lief.dwarf.Function](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Function> "lief.dwarf.Function") | None]

Iterator over the functions defined by the class-like.

#### [` members `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike.members>)

property members → list[[lief.dwarf.types.ClassLike.Member](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike.Member> "lief.dwarf.types.ClassLike.Member")]

Return a list of all the members defined in this class-like type.

---

## [Structure](<https://lief.re/doc/latest/extended/dwarf/python.html#structure>)

![Inheritance diagram of lief._lief.dwarf.types.Structure](https://lief.re/doc/latest/_images/inheritance-999c0fffa7219a6e4e48b9dcbc9b54df8f20ba47.png)

### [` lief.dwarf.types.Structure `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Structure>)

class lief.dwarf.types.Structure

Bases: [`ClassLike`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike> "lief._lief.dwarf.types.ClassLike")

This class represents a DWARF `struct` type (`DW_TAG_structure_type`)

---

## [Class](<https://lief.re/doc/latest/extended/dwarf/python.html#class>)

![Inheritance diagram of lief._lief.dwarf.types.Class](https://lief.re/doc/latest/_images/inheritance-41b3c31bd88fba7aeaba6b9486fc804ad3932b7b.png)

### [` lief.dwarf.types.Class `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Class>)

class lief.dwarf.types.Class

Bases: [`ClassLike`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike> "lief._lief.dwarf.types.ClassLike")

This class represents a DWARF `class` type (`DW_TAG_class_type`)

---

## [Union](<https://lief.re/doc/latest/extended/dwarf/python.html#union>)

![Inheritance diagram of lief._lief.dwarf.types.Union](https://lief.re/doc/latest/_images/inheritance-1aa355fea5427ba4b7af7328ca66a1c294dc6002.png)

### [` lief.dwarf.types.Union `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Union>)

class lief.dwarf.types.Union

Bases: [`ClassLike`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike> "lief._lief.dwarf.types.ClassLike")

This class represents a DWARF `union` type (`DW_TAG_union_type`)

---

## [Packed](<https://lief.re/doc/latest/extended/dwarf/python.html#packed>)

![Inheritance diagram of lief._lief.dwarf.types.Packed](https://lief.re/doc/latest/_images/inheritance-27ec89795bb2bd753ba45a94b84fc978574cfd9f.png)

### [` lief.dwarf.types.Packed `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Packed>)

class lief.dwarf.types.Packed

Bases: [`ClassLike`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.ClassLike> "lief._lief.dwarf.types.ClassLike")

This class represents a DWARF `packed` type (`DW_TAG_packed_type`)

---

## [Const](<https://lief.re/doc/latest/extended/dwarf/python.html#const>)

![Inheritance diagram of lief._lief.dwarf.types.Const](https://lief.re/doc/latest/_images/inheritance-cd0a938f02d947de77366d24eb8ef87888c22cec.png)

### [` lief.dwarf.types.Const `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Const>)

class lief.dwarf.types.Const

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents a `DW_TAG_const_type` modifier

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Const.underlying_type>)

property underlying\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The underlying type being const-ed by this type.

---

## [Pointer](<https://lief.re/doc/latest/extended/dwarf/python.html#pointer>)

![Inheritance diagram of lief._lief.dwarf.types.Pointer](https://lief.re/doc/latest/_images/inheritance-1fd3b7512c007f6e93252cb7427326e903b132ea.png)

### [` lief.dwarf.types.Pointer `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Pointer>)

class lief.dwarf.types.Pointer

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents a `DW_TAG_pointer_type` DWARF type.

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Pointer.underlying_type>)

property underlying\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The type pointed by this pointer

---

## [Typedef](<https://lief.re/doc/latest/extended/dwarf/python.html#typedef>)

![Inheritance diagram of lief._lief.dwarf.types.Typedef](https://lief.re/doc/latest/_images/inheritance-9a42caeec18099b5af355aac81e0cc204a80b314.png)

### [` lief.dwarf.types.Typedef `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Typedef>)

class lief.dwarf.types.Typedef

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents a `DW_TAG_typedef` type

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Typedef.underlying_type>)

property underlying\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The type aliased by this typedef

---

## [Atomic](<https://lief.re/doc/latest/extended/dwarf/python.html#atomic>)

![Inheritance diagram of lief._lief.dwarf.types.Atomic](https://lief.re/doc/latest/_images/inheritance-7668e1b8e85b1386f056aa57394047453e7f0f0f.png)

### [` lief.dwarf.types.Atomic `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Atomic>)

class lief.dwarf.types.Atomic

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents the `DW_TAG_atomic_type` type

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Atomic.underlying_type>)

property underlying\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The underlying type being atomized by this type.

---

## [Coarray](<https://lief.re/doc/latest/extended/dwarf/python.html#coarray>)

![Inheritance diagram of lief._lief.dwarf.types.Coarray](https://lief.re/doc/latest/_images/inheritance-269543660c3651e327c68884334be53f8011b799.png)

### [` lief.dwarf.types.Coarray `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Coarray>)

class lief.dwarf.types.Coarray

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents the `DW_TAG_coarray_type` type

---

## [Dynamic](<https://lief.re/doc/latest/extended/dwarf/python.html#dynamic>)

![Inheritance diagram of lief._lief.dwarf.types.Dynamic](https://lief.re/doc/latest/_images/inheritance-7d57654c41fa79a4cfb8d9c06fd8ccb6fd8d8c43.png)

### [` lief.dwarf.types.Dynamic `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Dynamic>)

class lief.dwarf.types.Dynamic

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents the `DW_TAG_dynamic_type` type

---

## [Enum](<https://lief.re/doc/latest/extended/dwarf/python.html#enum>)

![Inheritance diagram of lief._lief.dwarf.types.Enum](https://lief.re/doc/latest/_images/inheritance-aa88704fc5855a26549755e96298c266c831d712.png)

### [` lief.dwarf.types.Enum `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Enum>)

class lief.dwarf.types.Enum

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents the `DW_TAG_enumeration_type` type

#### [` Entry `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Enum.Entry>)

class Entry

Bases: `object`

This class represents an enum entry which is essentially composed of a name and its value (integer).

##### [` name `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Enum.Entry.name>)

property name → str

Enum entry’s name

##### [` value `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Enum.Entry.value>)

property value → int | None

Enum entry’s value

#### [` entries `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Enum.entries>)

property entries → list[[lief.dwarf.types.Enum.Entry](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Enum.Entry> "lief.dwarf.types.Enum.Entry")]

Entries associated with this enum

#### [` find_entry `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Enum.find_entry>)

find\_entry(*self*, *value: int*) → [lief.\_lief.dwarf.types.Enum.Entry](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Enum.Entry> "lief._lief.dwarf.types.Enum.Entry") | None

Try to find the entry matching the given value

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Enum.underlying_type>)

property underlying\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The underlying type that is used to encode this enum

---

## [File](<https://lief.re/doc/latest/extended/dwarf/python.html#file>)

![Inheritance diagram of lief._lief.dwarf.types.File](https://lief.re/doc/latest/_images/inheritance-af2a798dfa780c5d533d14e56cf06f1d0ff25bc7.png)

### [` lief.dwarf.types.File `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.File>)

class lief.dwarf.types.File

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents the `DW_TAG_file_type` type

---

## [Immutable](<https://lief.re/doc/latest/extended/dwarf/python.html#immutable>)

![Inheritance diagram of lief._lief.dwarf.types.Immutable](https://lief.re/doc/latest/_images/inheritance-ff920a83ae3204da861287023bf8c0ae373f047f.png)

### [` lief.dwarf.types.Immutable `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Immutable>)

class lief.dwarf.types.Immutable

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents the `DW_TAG_immutable_type` type

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Immutable.underlying_type>)

property underlying\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The underlying type.

---

## [Interface](<https://lief.re/doc/latest/extended/dwarf/python.html#interface>)

![Inheritance diagram of lief._lief.dwarf.types.Interface](https://lief.re/doc/latest/_images/inheritance-c762b00b8e57002c42592f0d4ab5babe91144ca6.png)

### [` lief.dwarf.types.Interface `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Interface>)

class lief.dwarf.types.Interface

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents the `DW_TAG_interface_type` type

---

## [PointerToMember](<https://lief.re/doc/latest/extended/dwarf/python.html#pointertomember>)

![Inheritance diagram of lief._lief.dwarf.types.PointerToMember](https://lief.re/doc/latest/_images/inheritance-bbf9a1be06d59cba9a90c0721ff1a31f03199884.png)

### [` lief.dwarf.types.PointerToMember `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.PointerToMember>)

class lief.dwarf.types.PointerToMember

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents the `DW_TAG_ptr_to_member_type` type

#### [` containing_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.PointerToMember.containing_type>)

property containing\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The type that embeds this member.

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.PointerToMember.underlying_type>)

property underlying\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The type of the member referenced by this pointer.

---

## [RValueReference](<https://lief.re/doc/latest/extended/dwarf/python.html#rvaluereference>)

![Inheritance diagram of lief._lief.dwarf.types.RValueReference](https://lief.re/doc/latest/_images/inheritance-21da2b079d5e3ebc5d6a097c90bd2bba85faf8a4.png)

### [` lief.dwarf.types.RValueReference `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.RValueReference>)

class lief.dwarf.types.RValueReference

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents the `DW_TAG_rvalue_reference_type` type

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.RValueReference.underlying_type>)

property underlying\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The underlying type referenced by this rvalue-type.

---

## [Reference](<https://lief.re/doc/latest/extended/dwarf/python.html#reference>)

![Inheritance diagram of lief._lief.dwarf.types.Reference](https://lief.re/doc/latest/_images/inheritance-7157d01982f302f46b9dae20d1220c9c71dbb33d.png)

### [` lief.dwarf.types.Reference `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Reference>)

class lief.dwarf.types.Reference

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents the `DW_TAG_reference_type` type

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Reference.underlying_type>)

property underlying\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The underlying type referenced by this ref-type.

---

## [Restrict](<https://lief.re/doc/latest/extended/dwarf/python.html#restrict>)

![Inheritance diagram of lief._lief.dwarf.types.Restrict](https://lief.re/doc/latest/_images/inheritance-7e0ad1f08140f78c942bc7d6cf19b6dc4915941d.png)

### [` lief.dwarf.types.Restrict `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Restrict>)

class lief.dwarf.types.Restrict

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents the `DW_TAG_restrict_type` type

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Restrict.underlying_type>)

property underlying\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The underlying type referenced by this restrict-type.

---

## [SetTy](<https://lief.re/doc/latest/extended/dwarf/python.html#setty>)

![Inheritance diagram of lief._lief.dwarf.types.SetTy](https://lief.re/doc/latest/_images/inheritance-dbf89b14c90b21285de5b22cb8ebf0a19c578dec.png)

### [` lief.dwarf.types.SetTy `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.SetTy>)

class lief.dwarf.types.SetTy

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents the `DW_TAG_set_type` type

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.SetTy.underlying_type>)

property underlying\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The underlying type referenced by this set-type.

---

## [Shared](<https://lief.re/doc/latest/extended/dwarf/python.html#shared>)

![Inheritance diagram of lief._lief.dwarf.types.Shared](https://lief.re/doc/latest/_images/inheritance-01d6ce3c3378ef60b6360547990052b05623fdd8.png)

### [` lief.dwarf.types.Shared `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Shared>)

class lief.dwarf.types.Shared

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents the `DW_TAG_shared_type` type

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Shared.underlying_type>)

property underlying\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The underlying type referenced by this shared-type.

---

## [StringTy](<https://lief.re/doc/latest/extended/dwarf/python.html#stringty>)

![Inheritance diagram of lief._lief.dwarf.types.StringTy](https://lief.re/doc/latest/_images/inheritance-8f6224ba15016ce2d7a480920be6acd8b64752a2.png)

### [` lief.dwarf.types.StringTy `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.StringTy>)

class lief.dwarf.types.StringTy

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents the `DW_TAG_string_type` type

---

## [Subroutine](<https://lief.re/doc/latest/extended/dwarf/python.html#subroutine>)

![Inheritance diagram of lief._lief.dwarf.types.Subroutine](https://lief.re/doc/latest/_images/inheritance-410dbf21b69ec1842f13d80503e6082fe82f39e9.png)

### [` lief.dwarf.types.Subroutine `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Subroutine>)

class lief.dwarf.types.Subroutine

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents the `DW_TAG_subroutine_type` type

#### [` parameters `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Subroutine.parameters>)

property parameters → list[[lief.dwarf.Parameter](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Parameter> "lief.dwarf.Parameter") | None]

Parameters of this subroutine

#### [` return_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Subroutine.return_type>)

property return\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

Return the [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") associated with the **return type** of this function

---

## [TemplateAlias](<https://lief.re/doc/latest/extended/dwarf/python.html#templatealias>)

![Inheritance diagram of lief._lief.dwarf.types.TemplateAlias](https://lief.re/doc/latest/_images/inheritance-bf90b7a9e6da29dfc8b0c2a1277194049c8c9646.png)

### [` lief.dwarf.types.TemplateAlias `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.TemplateAlias>)

class lief.dwarf.types.TemplateAlias

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents the `DW_TAG_template_alias` type

#### [` parameters `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.TemplateAlias.parameters>)

property parameters → list[[lief.dwarf.Parameter](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Parameter> "lief.dwarf.Parameter") | None]

Parameters associated with the underlying template

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.TemplateAlias.underlying_type>)

property underlying\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The underlying type aliased by this type.

---

## [Thrown](<https://lief.re/doc/latest/extended/dwarf/python.html#thrown>)

![Inheritance diagram of lief._lief.dwarf.types.Thrown](https://lief.re/doc/latest/_images/inheritance-9326ac8be9be28084d0a85ea250bbdfa41ea69d6.png)

### [` lief.dwarf.types.Thrown `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Thrown>)

class lief.dwarf.types.Thrown

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents a `DW_TAG_thrown_type`

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Thrown.underlying_type>)

property underlying\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The underlying type being thrown

---

## [Volatile](<https://lief.re/doc/latest/extended/dwarf/python.html#volatile>)

![Inheritance diagram of lief._lief.dwarf.types.Volatile](https://lief.re/doc/latest/_images/inheritance-dfc25b7752375a26e42309275c9a1d87c5e64107.png)

### [` lief.dwarf.types.Volatile `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Volatile>)

class lief.dwarf.types.Volatile

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief._lief.dwarf.Type")

This class represents a `DW_TAG_volatile_type`

#### [` underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.types.Volatile.underlying_type>)

property underlying\_type → [lief.dwarf.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Type> "lief.dwarf.Type") | None

The underlying type.

---

## [Editor](<https://lief.re/doc/latest/extended/dwarf/python.html#editor>)

### [` lief.dwarf.Editor `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor>)

class lief.dwarf.Editor

Bases: `object`

This class exposes the main API to create DWARF information

#### [` ARCH `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.ARCH>)

class ARCH(*\*values*)

Bases: `Enum`

##### [` AARCH64 `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.ARCH.AARCH64>)

AARCH64 = 3

##### [` ARM `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.ARCH.ARM>)

ARM = 4

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.ARCH.UNKNOWN>)

UNKNOWN = 0

##### [` X64 `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.ARCH.X64>)

X64 = 1

##### [` X86 `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.ARCH.X86>)

X86 = 2

#### [` FORMAT `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.FORMAT>)

class FORMAT(*\*values*)

Bases: `Enum`

##### [` ELF `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.FORMAT.ELF>)

ELF = 0

##### [` MACHO `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.FORMAT.MACHO>)

MACHO = 1

##### [` PE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.FORMAT.PE>)

PE = 2

#### [` create `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.create>)

create(*fmt: [lief.dwarf.Editor.FORMAT](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.FORMAT> "lief.dwarf.Editor.FORMAT")*, *arch: [lief.dwarf.Editor.ARCH](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.ARCH> "lief.dwarf.Editor.ARCH")*) → [lief.dwarf.Editor](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor> "lief.dwarf.Editor") | None = &lt;nanobind.nb\_func object&gt;

#### [` create_compilation_unit `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.create_compilation_unit>)

create\_compilation\_unit(*self*) → [lief.\_lief.dwarf.editor.CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit> "lief._lief.dwarf.editor.CompilationUnit") | None

Create a new compilation unit

#### [` from_binary `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.from_binary>)

from\_binary(*bin: [lief.Binary](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary> "lief.Binary")*) → [lief.dwarf.Editor](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor> "lief.dwarf.Editor") | None = &lt;nanobind.nb\_func object&gt;

#### [` write `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Editor.write>)

write(*self*, *output: str | os.PathLike*) → None

Write the DWARF file to the specified output

---

## [Editor - CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/python.html#editor-compilationunit>)

### [` lief.dwarf.editor.CompilationUnit `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit>)

class lief.dwarf.editor.CompilationUnit

Bases: `object`

This class represents an **editable** DWARF compilation unit

#### [` create_array `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit.create_array>)

create\_array(*self*, *name: str*, *ty: [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")*, *count: int*) → [lief.\_lief.dwarf.editor.ArrayType](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.ArrayType> "lief._lief.dwarf.editor.ArrayType") | None

Create an array type with the given name, type and size.

#### [` create_base_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit.create_base_type>)

create\_base\_type(*self*, *name: str*, *size: int*, *encoding: [lief.\_lief.dwarf.editor.BaseType.ENCODING](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.BaseType.ENCODING> "lief._lief.dwarf.editor.BaseType.ENCODING") = ENCODING.NONE*) → [lief.\_lief.dwarf.editor.BaseType](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.BaseType> "lief._lief.dwarf.editor.BaseType") | None

Create a primitive type with the given name and size.

#### [` create_const_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit.create_const_type>)

create\_const\_type(*self*, *ty: [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")*) → [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type") | None

Create a `const`-qualified version of the provided type (`DW_TAG_const_type`).

Qualifying the same type twice returns the same underlying DWARF entry.

#### [` create_enum `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit.create_enum>)

create\_enum(*self*, *name: str*) → [lief.\_lief.dwarf.editor.EnumType](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.EnumType> "lief._lief.dwarf.editor.EnumType") | None

Create an enum type (`DW_TAG_enumeration_type`)

#### [` create_function `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit.create_function>)

create\_function(*self*, *name: str*) → [lief.\_lief.dwarf.editor.Function](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function> "lief._lief.dwarf.editor.Function") | None

Create a new function owned by this compilation unit

#### [` create_function_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit.create_function_type>)

create\_function\_type(*self*, *name: str*) → [lief.\_lief.dwarf.editor.FunctionType](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.FunctionType> "lief._lief.dwarf.editor.FunctionType") | None

Create a function type with the given name.

#### [` create_generic_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit.create_generic_type>)

create\_generic\_type(*self*, *name: str*) → [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type") | None

Create a `DW_TAG_unspecified_type` type with the given name

#### [` create_pointer_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit.create_pointer_type>)

create\_pointer\_type(*self*, *ty: [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")*) → [lief.\_lief.dwarf.editor.PointerType](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.PointerType> "lief._lief.dwarf.editor.PointerType") | None

Create a pointer on the provided type.

#### [` create_structure `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit.create_structure>)

create\_structure(*self*, *name: str*, *kind: [lief.\_lief.dwarf.editor.StructType.TYPE](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.StructType.TYPE> "lief._lief.dwarf.editor.StructType.TYPE") = TYPE.STRUCT*) → [lief.\_lief.dwarf.editor.StructType](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.StructType> "lief._lief.dwarf.editor.StructType") | None

Create a struct-like type (struct, class, union) with the given name

#### [` create_typedef `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit.create_typedef>)

create\_typedef(*self*, *name: str*, *ty: [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")*) → [lief.\_lief.dwarf.editor.TypeDef](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.TypeDef> "lief._lief.dwarf.editor.TypeDef") | None

Create a typedef with the name provided in the first parameter which aliases the type provided in the second parameter

#### [` create_variable `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit.create_variable>)

create\_variable(*self*, *name: str*) → [lief.\_lief.dwarf.editor.Variable](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable> "lief._lief.dwarf.editor.Variable") | None

Create a new **global** variable owned by this compilation unit

#### [` create_void_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit.create_void_type>)

create\_void\_type(*self*) → [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type") | None

Create a `void` type

#### [` create_volatile_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit.create_volatile_type>)

create\_volatile\_type(*self*, *ty: [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")*) → [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type") | None

Create a `volatile`-qualified version of the provided type (`DW_TAG_volatile_type`).

Qualifying the same type twice returns the same underlying DWARF entry.

#### [` set_producer `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit.set_producer>)

set\_producer(*self*, *arg: str*, */*) → [lief.\_lief.dwarf.editor.CompilationUnit](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit> "lief._lief.dwarf.editor.CompilationUnit")

Set the `DW_AT_producer` producer attribute.

This attribute aims to inform about the program that generated this compilation unit (e.g. `LIEF Extended`)

---

## [Editor - Function](<https://lief.re/doc/latest/extended/dwarf/python.html#editor-function>)

### [` lief.dwarf.editor.Function `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function>)

class lief.dwarf.editor.Function

Bases: `object`

This class represents an **editable** DWARF function (`DW_TAG_subprogram`)

#### [` Label `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.Label>)

class Label

Bases: `object`

This class mirrors the `DW_TAG_label` DWARF tag

#### [` LexicalBlock `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.LexicalBlock>)

class LexicalBlock

Bases: `object`

This class mirrors the `DW_TAG_lexical_block` DWARF tag

##### [` add_blockadd_block `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.LexicalBlock.add_block>)

add\_block(*self*, *start: int*, *end: int*) → [lief.\_lief.dwarf.editor.Function.LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.LexicalBlock> "lief._lief.dwarf.editor.Function.LexicalBlock") | None

**add\_block(*self*, *range: collections.abc.Sequence[[lief.\_lief.dwarf.editor.Function.range\_t](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.range_t> "lief._lief.dwarf.editor.Function.range_t")]*) → [lief.\_lief.dwarf.editor.Function.LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.LexicalBlock> "lief._lief.dwarf.editor.Function.LexicalBlock") | None**

Overloaded function.

1. `add_block(self, start: int, end: int) -> Optional[lief._lief.dwarf.editor.Function.LexicalBlock]`

   > Create a sub-block with the given low/high addresses.
   >
   > If the function managed to create the new block, it returns the newly created block, otherwise it returns the current block
2. `add_block(self, range: collections.abc.Sequence[lief._lief.dwarf.editor.Function.range_t]) -> Optional[lief._lief.dwarf.editor.Function.LexicalBlock]`

   > Create a sub-block with the given range of addresses.
   >
   > If the function managed to create the new block, it returns the newly created block, otherwise it returns the current block

##### [` add_description `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.LexicalBlock.add_description>)

add\_description(*self*, *description: str*) → [lief.\_lief.dwarf.editor.Function.LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.LexicalBlock> "lief._lief.dwarf.editor.Function.LexicalBlock")

Create a `DW_AT_description` entry with the description provided in parameter.

##### [` add_name `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.LexicalBlock.add_name>)

add\_name(*self*, *name: str*) → [lief.\_lief.dwarf.editor.Function.LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.LexicalBlock> "lief._lief.dwarf.editor.Function.LexicalBlock")

Create a `DW_AT_name` entry to associate a name to this entry

#### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.Parameter>)

class Parameter

Bases: `object`

This class represents a parameter of the current function (`DW_TAG_formal_parameter`)

##### [` assign_registerassign_register `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.Parameter.assign_register>)

assign\_register(*self*, *arg: str*, */*) → [lief.\_lief.dwarf.editor.Function.Parameter](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.Parameter> "lief._lief.dwarf.editor.Function.Parameter")

**assign\_register(*self*, *arg: int*, */*) → [lief.\_lief.dwarf.editor.Function.Parameter](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.Parameter> "lief._lief.dwarf.editor.Function.Parameter")**

Overloaded function.

1. `assign_register(self, arg: str, /) -> lief._lief.dwarf.editor.Function.Parameter`

Assign this parameter to a specific named register.

2. `assign_register(self, arg: int, /) -> lief._lief.dwarf.editor.Function.Parameter`

Assign this parameter to the given DWARF register id (e.g. `DW_OP_reg0`)

##### [` set_location `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.Parameter.set_location>)

set\_location(*self*, *location: [lief.\_lief.dwarf.Location](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location> "lief._lief.dwarf.Location")*) → [lief.\_lief.dwarf.editor.Function.Parameter](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.Parameter> "lief._lief.dwarf.editor.Function.Parameter")

Set the `DW_AT_location` of this parameter.

#### [` add_description `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.add_description>)

add\_description(*self*, *description: str*) → [lief.\_lief.dwarf.editor.Function](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function> "lief._lief.dwarf.editor.Function")

Create a DW\_AT\_description entry with the description provided in parameter.

#### [` add_label `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.add_label>)

add\_label(*self*, *addr: int*, *label: str*) → [lief.\_lief.dwarf.editor.Function.Label](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.Label> "lief._lief.dwarf.editor.Function.Label") | None

Add a label at the given address

#### [` add_lexical_block `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.add_lexical_block>)

add\_lexical\_block(*self*, *start: int*, *end: int*) → [lief.\_lief.dwarf.editor.Function.LexicalBlock](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.LexicalBlock> "lief._lief.dwarf.editor.Function.LexicalBlock") | None

Add a lexical block with the given range

#### [` add_parameter `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.add_parameter>)

add\_parameter(*self*, *name: str*, *type: [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")*) → [lief.\_lief.dwarf.editor.Function.Parameter](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.Parameter> "lief._lief.dwarf.editor.Function.Parameter") | None

Add a parameter to the current function

#### [` create_stack_variable `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.create_stack_variable>)

create\_stack\_variable(*self*, *name: str*) → [lief.\_lief.dwarf.editor.Variable](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable> "lief._lief.dwarf.editor.Variable") | None

Create a stack-based variable owned by the current function

#### [` range_trange_t `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.range_t>)

class range\_t(*self*)

**class range\_t(*self*, *start: int*, *end: int*)**

Bases: `object`

##### [` end `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.range_t.end>)

property end → int

##### [` start `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.range_t.start>)

property start → int

#### [` set_address `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.set_address>)

set\_address(*self*, *addr: int*) → [lief.\_lief.dwarf.editor.Function](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function> "lief._lief.dwarf.editor.Function")

Set the address of this function by defining `DW_AT_entry_pc`

#### [` set_external `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.set_external>)

set\_external(*self*) → [lief.\_lief.dwarf.editor.Function](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function> "lief._lief.dwarf.editor.Function")

Set the function as external by defining `DW_AT_external` to true. This means that the function is **imported** by the current compilation unit.

#### [` set_low_high `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.set_low_high>)

set\_low\_high(*self*, *low: int*, *high: int*) → [lief.\_lief.dwarf.editor.Function](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function> "lief._lief.dwarf.editor.Function")

Set the upper and lower bound addresses for this function. This assumes that the function is contiguous between `low` and `high`.

Underneath, the function defines `DW_AT_low_pc` and `DW_AT_high_pc`

#### [` set_ranges `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.set_ranges>)

set\_ranges(*self*, *ranges: collections.abc.Sequence[[lief.\_lief.dwarf.editor.Function.range\_t](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.range_t> "lief._lief.dwarf.editor.Function.range_t")]*) → [lief.\_lief.dwarf.editor.Function](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function> "lief._lief.dwarf.editor.Function")

Set the ranges of addresses owned by the implementation of this function by setting the `DW_AT_ranges` attribute.

This setter should be used for non-contiguous functions.

#### [` set_return_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function.set_return_type>)

set\_return\_type(*self*, *type: [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")*) → [lief.\_lief.dwarf.editor.Function](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Function> "lief._lief.dwarf.editor.Function")

Set the return type of this function

---

## [Editor - Variable](<https://lief.re/doc/latest/extended/dwarf/python.html#editor-variable>)

### [` lief.dwarf.editor.Variable `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable>)

class lief.dwarf.editor.Variable

Bases: `object`

This class represents an **editable** DWARF variable which can be scoped by a function or a compilation unit (`DW_TAG_variable`)

#### [` add_description `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable.add_description>)

add\_description(*self*, *description: str*) → [lief.\_lief.dwarf.editor.Variable](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable> "lief._lief.dwarf.editor.Variable")

Create a `DW_AT_description` entry with the description provided in parameter.

#### [` set_addr `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable.set_addr>)

set\_addr(*self*, *addr: int*) → [lief.\_lief.dwarf.editor.Variable](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable> "lief._lief.dwarf.editor.Variable")

Set the global address of this variable. Setting this address is only relevant in the case of a static global variable. For stack variable, you should use [`set_stack_offset()`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable.set_stack_offset> "lief.dwarf.editor.Variable.set_stack_offset").

This function sets the `DW_AT_location` attribute

#### [` set_external `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable.set_external>)

set\_external(*self*) → [lief.\_lief.dwarf.editor.Variable](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable> "lief._lief.dwarf.editor.Variable")

Mark this variable as **imported**

#### [` set_location `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable.set_location>)

set\_location(*self*, *location: [lief.\_lief.dwarf.Location](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.Location> "lief._lief.dwarf.Location")*) → [lief.\_lief.dwarf.editor.Variable](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable> "lief._lief.dwarf.editor.Variable")

Set the `DW_AT_location` of this variable.

#### [` set_stack_offset `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable.set_stack_offset>)

set\_stack\_offset(*self*, *offset: int*) → [lief.\_lief.dwarf.editor.Variable](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable> "lief._lief.dwarf.editor.Variable")

Set the stack offset of this variable.

This function sets the `DW_AT_location` attribute

#### [` set_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable.set_type>)

set\_type(*self*, *type: [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")*) → [lief.\_lief.dwarf.editor.Variable](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Variable> "lief._lief.dwarf.editor.Variable")

Set the type of the current variable

---

## [Editor - Type](<https://lief.re/doc/latest/extended/dwarf/python.html#editor-type>)

![Inheritance diagram of lief._lief.dwarf.editor.Type, lief._lief.dwarf.editor.TypeDef, lief._lief.dwarf.editor.FunctionType, lief._lief.dwarf.editor.ArrayType, lief._lief.dwarf.editor.StructType, lief._lief.dwarf.editor.PointerType, lief._lief.dwarf.editor.BaseType, lief._lief.dwarf.editor.EnumType](https://lief.re/doc/latest/_images/inheritance-0999523f14aa9a6bb1f772f77f6e3c08251a33e0.png)

### [` lief.dwarf.editor.Type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type>)

class lief.dwarf.editor.Type

Bases: `object`

This class is the base class for any types created when editing DWARF debug info.

A type is owned by a [`lief.dwarf.editor.CompilationUnit`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.CompilationUnit> "lief.dwarf.editor.CompilationUnit") and should be created from this class.

#### [` pointer_to `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type.pointer_to>)

pointer\_to(*self*) → [lief.\_lief.dwarf.editor.PointerType](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.PointerType> "lief._lief.dwarf.editor.PointerType") | None

Create a pointer type pointing to this type

---

## [Editor - PointerType](<https://lief.re/doc/latest/extended/dwarf/python.html#editor-pointertype>)

![Inheritance diagram of lief._lief.dwarf.editor.PointerType](https://lief.re/doc/latest/_images/inheritance-ce1dd7b1cb8b04ead5f0ce1bdbd71aa160f8ba9a.png)

### [` lief.dwarf.editor.PointerType `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.PointerType>)

class lief.dwarf.editor.PointerType

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")

This class represents a pointer to another type.

---

## [Editor - EnumType](<https://lief.re/doc/latest/extended/dwarf/python.html#editor-enumtype>)

![Inheritance diagram of lief._lief.dwarf.editor.EnumType](https://lief.re/doc/latest/_images/inheritance-bbb4f7a814cd8cc5c586d22c490afa2fbdd1eae3.png)

### [` lief.dwarf.editor.EnumType `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.EnumType>)

class lief.dwarf.editor.EnumType

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")

This class represents an editable enum type (`DW_TAG_enumeration_type`)

#### [` Value `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.EnumType.Value>)

class Value

Bases: `object`

This class represents an enum value

#### [` add_value `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.EnumType.add_value>)

add\_value(*self*, *name: str*, *value: int*) → [lief.\_lief.dwarf.editor.EnumType.Value](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.EnumType.Value> "lief._lief.dwarf.editor.EnumType.Value") | None

Add an enum value by specifying its name and its integer value.

#### [` set_size `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.EnumType.set_size>)

set\_size(*self*, *size: int*) → [lief.\_lief.dwarf.editor.EnumType](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.EnumType> "lief._lief.dwarf.editor.EnumType")

Define the number of bytes required to hold an instance of the enumeration (`DW_AT_byte_size`).

#### [` set_underlying_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.EnumType.set_underlying_type>)

set\_underlying\_type(*self*, *type: [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")*) → [lief.\_lief.dwarf.editor.EnumType](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.EnumType> "lief._lief.dwarf.editor.EnumType")

Set the underlying type that is used to encode this enum

---

## [Editor - BaseType](<https://lief.re/doc/latest/extended/dwarf/python.html#editor-basetype>)

![Inheritance diagram of lief._lief.dwarf.editor.BaseType](https://lief.re/doc/latest/_images/inheritance-a4e5ad00b431fcf83beda98de36dc078ab146d4e.png)

### [` lief.dwarf.editor.BaseType `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.BaseType>)

class lief.dwarf.editor.BaseType

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")

This class represents a primitive type like `int, char`.

#### [` ENCODING `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.BaseType.ENCODING>)

class ENCODING(*\*values*)

Bases: `Enum`

##### [` ADDRESS `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.BaseType.ENCODING.ADDRESS>)

ADDRESS = 1

##### [` BOOLEAN `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.BaseType.ENCODING.BOOLEAN>)

BOOLEAN = 6

##### [` FLOAT `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.BaseType.ENCODING.FLOAT>)

FLOAT = 7

##### [` NONE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.BaseType.ENCODING.NONE>)

NONE = 0

##### [` SIGNED `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.BaseType.ENCODING.SIGNED>)

SIGNED = 2

##### [` SIGNED_CHAR `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.BaseType.ENCODING.SIGNED_CHAR>)

SIGNED\_CHAR = 3

##### [` UNSIGNED `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.BaseType.ENCODING.UNSIGNED>)

UNSIGNED = 4

##### [` UNSIGNED_CHAR `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.BaseType.ENCODING.UNSIGNED_CHAR>)

UNSIGNED\_CHAR = 5

---

## [Editor - ArrayType](<https://lief.re/doc/latest/extended/dwarf/python.html#editor-arraytype>)

![Inheritance diagram of lief._lief.dwarf.editor.ArrayType](https://lief.re/doc/latest/_images/inheritance-e6359324e7bd09fc52483d91c6477ff4321b8dbd.png)

### [` lief.dwarf.editor.ArrayType `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.ArrayType>)

class lief.dwarf.editor.ArrayType

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")

This class represents an array type.

---

## [Editor - FunctionType](<https://lief.re/doc/latest/extended/dwarf/python.html#editor-functiontype>)

![Inheritance diagram of lief._lief.dwarf.editor.FunctionType](https://lief.re/doc/latest/_images/inheritance-a15d85bb5a4fbf211cf5310c2577804ba283c621.png)

### [` lief.dwarf.editor.FunctionType `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.FunctionType>)

class lief.dwarf.editor.FunctionType

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")

This class represents a function type (`DW_TAG_subroutine_type`)

#### [` Parameter `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.FunctionType.Parameter>)

class Parameter

Bases: `object`

This class represents a function’s parameter

#### [` add_parameter `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.FunctionType.add_parameter>)

add\_parameter(*self*, *type: [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")*) → [lief.\_lief.dwarf.editor.FunctionType.Parameter](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.FunctionType.Parameter> "lief._lief.dwarf.editor.FunctionType.Parameter") | None

Add a parameter

#### [` set_return_type `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.FunctionType.set_return_type>)

set\_return\_type(*self*, *type: [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")*) → [lief.\_lief.dwarf.editor.FunctionType](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.FunctionType> "lief._lief.dwarf.editor.FunctionType")

Set the return type of this function

---

## [Editor - TypeDef](<https://lief.re/doc/latest/extended/dwarf/python.html#editor-typedef>)

![Inheritance diagram of lief._lief.dwarf.editor.TypeDef](https://lief.re/doc/latest/_images/inheritance-eef5b5e73235a44d49efb692d0b1ae2375356611.png)

### [` lief.dwarf.editor.TypeDef `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.TypeDef>)

class lief.dwarf.editor.TypeDef

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")

This class represents a typedef (`DW_TAG_typedef`).

---

## [Editor - StructType](<https://lief.re/doc/latest/extended/dwarf/python.html#editor-structtype>)

![Inheritance diagram of lief._lief.dwarf.editor.StructType](https://lief.re/doc/latest/_images/inheritance-59fd60314e659b417dd38c36382d003b3a9e4478.png)

### [` lief.dwarf.editor.StructType `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.StructType>)

class lief.dwarf.editor.StructType

Bases: [`Type`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")

This class represents a struct-like type which can be:

- `DW_TAG_class_type`
- `DW_TAG_structure_type`
- `DW_TAG_union_type`

#### [` Member `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.StructType.Member>)

class Member

Bases: `object`

This class represents a member of the struct-like

#### [` TYPE `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.StructType.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

##### [` CLASS `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.StructType.TYPE.CLASS>)

CLASS = 0

##### [` STRUCT `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.StructType.TYPE.STRUCT>)

STRUCT = 1

##### [` UNION `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.StructType.TYPE.UNION>)

UNION = 2

#### [` add_bitfield `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.StructType.add_bitfield>)

add\_bitfield(*self*, *name: str*, *type: [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")*, *bitsize: int*, *bitoffset: int = -1*) → [lief.\_lief.dwarf.editor.StructType.Member](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.StructType.Member> "lief._lief.dwarf.editor.StructType.Member") | None

Adds a member to the current struct-like

#### [` add_member `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.StructType.add_member>)

add\_member(*self*, *name: str*, *type: [lief.\_lief.dwarf.editor.Type](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.Type> "lief._lief.dwarf.editor.Type")*, *offset: int = -1*) → [lief.\_lief.dwarf.editor.StructType.Member](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.StructType.Member> "lief._lief.dwarf.editor.StructType.Member") | None

Adds a member to the current struct-like

#### [` set_size `](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.StructType.set_size>)

set\_size(*self*, *size: int*) → [lief.\_lief.dwarf.editor.StructType](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.editor.StructType> "lief._lief.dwarf.editor.StructType")

Define the overall size which is equivalent to the `sizeof` of the current type.

This function defines the `DW_AT_byte_size` attribute
