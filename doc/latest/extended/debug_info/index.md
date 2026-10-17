---
documentID: "56fb1685892b85202d6c176a1e22d939201f0c0a79f93e53993ff05aeeb82c35"
docname: "extended/debug_info/index"
title: "Debug Information - LIEF Documentation"
description: "Load DWARF and PDB debug information, attach matching debug files to binaries, and navigate the shared Python, C++, and Rust APIs."
canonical: "https://lief.re/doc/latest/extended/debug_info/index.html"
markdownURL: "https://lief.re/doc/latest/extended/debug_info/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "70a43133789fa55c66553acc04e121ac4ec97b40578f00db65752ce08c29ddc5"
---

# [Debug Information](<https://lief.re/doc/latest/extended/debug_info/index.html#debug-information>)

Debug information connects machine code with source-level names, types, functions, variables, and locations. [LIEF Extended](<https://lief.re/doc/latest/extended/intro.html#extended-intro>) reads [DWARF](<https://lief.re/doc/latest/extended/dwarf/index.html#extended-dwarf>) and [PDB](<https://lief.re/doc/latest/extended/pdb/index.html#extended-pdb>) through format-specific APIs and the common interfaces documented below.

## [Choose how to load debug information](<https://lief.re/doc/latest/extended/debug_info/index.html#choose-how-to-load-debug-information>)

| Input | Starting point |
| --- | --- |
| A binary containing DWARF sections | Parse the binary and access  `lief.Binary.debug_info()` ( [`lief::elf::Binary::debug_info`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/elf/struct.Binary.html#method.debug_info>) ;  [`lief.Binary.debug_info`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.debug_info>) ;  [`LIEF::Binary::debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary10debug_infoEv>) ) |
| A separate DWARF file or a Mach-O debug companion | Load it with  `lief.dwarf.load()` ( [`lief::dwarf::load`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/dwarf/fn.load.html>) ;  [`lief.dwarf.load()`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.load>) ;  [`LIEF::dwarf::load()`](<https://lief.re/doc/latest/extended/dwarf/cpp.html#_CPPv4N4LIEF5dwarf4loadENSt11string_viewE>) ) |
| A PDB file | Load it with  `lief.pdb.load()` ( [`lief::pdb::load`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pdb/fn.load.html>) ;  [`lief.pdb.load()`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.load>) ;  [`LIEF::pdb::load()`](<https://lief.re/doc/latest/extended/pdb/cpp.html#_CPPv4N4LIEF3pdb4loadENSt11string_viewE>) ) |
| A parsed binary and its matching external debug file | Attach the file with  `lief.abstract.Binary.load_debug_info()` ( [`lief::generic::Binary::load_debug_info`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.load_debug_info>) ;  [`lief.Binary.load_debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.load_debug_info>) ;  [`LIEF::Binary::load_debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary15load_debug_infoERKNSt6stringE>) ) |

Attaching an external file makes its information available to the parsed binary. The  `lief.Binary.disassemble()` ( [`lief::generic::Binary::disassemble`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble>) ;  [`lief::generic::Binary::disassemble_symbol`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble_symbol>) ;  [`lief::generic::Binary::disassemble_address`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble_address>) ;  [`lief::generic::Binary::disassemble_slice`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.disassemble_slice>) ;  [`LIEF::Binary::disassemble()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4NK4LIEF6Binary11disassembleE8uint64_t6size_t>) ;  [`lief.Binary.disassemble()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.disassemble>) ;  [`lief.Binary.disassemble_from_bytes()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.disassemble_from_bytes>) ) API can then disassemble functions by name. Attaching the file does not embed it into the executable. Use the debug file from the same build:  `lief.abstract.Binary.load_debug_info()` ( [`lief::generic::Binary::load_debug_info`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.Binary.html#method.load_debug_info>) ;  [`lief.Binary.load_debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.load_debug_info>) ;  [`LIEF::Binary::load_debug_info()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary15load_debug_infoERKNSt6stringE>) ) does not verify build IDs or PDB identifiers for you.

The [DWARF](<https://lief.re/doc/latest/extended/dwarf/index.html#extended-dwarf>) and [PDB](<https://lief.re/doc/latest/extended/pdb/index.html#extended-pdb>) guides show how to iterate over compilation units, find functions and types, and generate C/C++ declarations.

## [Shared API reference](<https://lief.re/doc/latest/extended/debug_info/index.html#shared-api-reference>)

### [C++](<https://lief.re/doc/latest/extended/debug_info/index.html#c>)

#### [DebugInfo](<https://lief.re/doc/latest/extended/debug_info/index.html#debuginfo>)

##### [` DebugInfo `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF9DebugInfoE>)

class DebugInfo

This class provides a generic interface for accessing debug information from different formats such as DWARF and PDB.

Users can use this interface to access high-level debug features like resolving function addresses.

> **See also**
> 
> [LIEF::pdb::DebugInfo](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1DebugInfo>), [LIEF::dwarf::DebugInfo](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1DebugInfo>)

Subclassed by [LIEF::dwarf::DebugInfo](<https://lief.re/doc/latest/extended/dwarf/cpp.html#classLIEF_1_1dwarf_1_1DebugInfo>), [LIEF::pdb::DebugInfo](<https://lief.re/doc/latest/extended/pdb/cpp.html#classLIEF_1_1pdb_1_1DebugInfo>)

Public Types

###### [` FORMAT `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF9DebugInfo6FORMATE>)

enum class FORMAT

*Values:*

###### [` UNKNOWN `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF9DebugInfo6FORMAT7UNKNOWNE>)

enumerator UNKNOWN = 0

###### [` DWARF `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF9DebugInfo6FORMAT5DWARFE>)

enumerator DWARF

###### [` PDB `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF9DebugInfo6FORMAT3PDBE>)

enumerator PDB

Public Functions

###### [` DebugInfo `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF9DebugInfo9DebugInfoENSt10unique_ptrIN7details9DebugInfoEEE>)

DebugInfo(std::unique\_ptr&lt;details::DebugInfo&gt; impl)

###### [` ~DebugInfo `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF9DebugInfoD0Ev>)

virtual ~DebugInfo()

###### [` format `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4NK4LIEF9DebugInfo6formatEv>)

inline virtual [FORMAT](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF9DebugInfo6FORMATE> "LIEF::DebugInfo::FORMAT") format() const

###### [` Tas `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4I0ENK4LIEF9DebugInfo2asEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4I0ENK4LIEF9DebugInfo2asEPK1Tv> "LIEF::DebugInfo::as::T") \*as() const

This function can be used to **down cast** a [DebugInfo](<https://lief.re/doc/latest/extended/debug_info/index.html#classLIEF_1_1DebugInfo>) instance:

```cpp
std::unique_ptr<LIEF::Instruction> dbg = bin->debug_info();
if (const auto* dwarf = inst->as<LIEF::dwarf::DebugInfo>()) {
  dwarf->find_function("main");
}
```

###### [` find_function_address `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4NK4LIEF9DebugInfo21find_function_addressENSt11string_viewE>)

virtual std::optional&lt;uint64\_t&gt; find\_function\_address(std::string\_view name) const = 0

Attempt to resolve the address of the function specified by `name`.

Friends

**friend class Binary**

#### [debug\_location\_t](<https://lief.re/doc/latest/extended/debug_info/index.html#debug-location-t>)

##### [` debug_location_t `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF16debug_location_tE>)

struct debug\_location\_t

This structure holds a debug location (source filename &amp; line).

Public Members

###### [` file `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF16debug_location_t4fileE>)

std::string file

###### [` line `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF16debug_location_t4lineE>)

uint64\_t line = 0

#### [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#declopt>)

##### [` DeclOpt `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE>)

class DeclOpt

Configuration options for generated code from debug info.

This structure configures how the debug information (DWARF/PDB) translated into an AST is generated. You can use it to configure the indentation, and the information to generate when translating DWARF/PDB into C++-like definitions

Public Types

###### [` type_aliases_t `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt14type_aliases_tE>)

using type\_aliases\_t = std::unordered\_map&lt;std::string, std::string&gt;

Mapping between a type name and a user-friendly aliases. (e.g. `std::basic_string<char,std::char_traits<char>,std::allocator<char>>` -&gt; `std::string`).

Public Functions

###### [` DeclOpt `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt7DeclOptEv>)

DeclOpt()

###### [` DeclOpt `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt7DeclOptERK7DeclOpt>)

DeclOpt(const [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt7DeclOptERK7DeclOpt> "LIEF::DeclOpt::DeclOpt") &amp;other)

###### [` operator= `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptaSERK7DeclOpt>)

[DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;operator=(const [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;other)

###### [` DeclOpt `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt7DeclOptERR7DeclOpt>)

DeclOpt([DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt7DeclOptERR7DeclOpt> "LIEF::DeclOpt::DeclOpt") &amp;&amp;other) noexcept

###### [` operator= `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptaSERR7DeclOpt>)

[DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;operator=([DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;&amp;other) noexcept

###### [` ~DeclOpt `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptD0Ev>)

~DeclOpt()

###### [` indentation `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4NK4LIEF7DeclOpt11indentationEv>)

uint32\_t indentation() const

The number of spaces for indentation.

###### [` indentation `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt11indentationE8uint32_t>)

[DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;indentation(uint32\_t value)

###### [` is_cpp `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4NK4LIEF7DeclOpt6is_cppEv>)

bool is\_cpp() const

Prefer C++ syntax over C syntax.

If true, the output will use C++ features (e.g. `bool` keyword)

###### [` is_cpp `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt6is_cppEb>)

[DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;is\_cpp(bool value)

###### [` show_extended_annotations `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4NK4LIEF7DeclOpt25show_extended_annotationsEv>)

bool show\_extended\_annotations() const

Enable extended comments and annotations.

If true, the generated code will include comments containing low-level details such as memory addresses, offsets, type sizes, and original source locations.

###### [` show_extended_annotations `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt25show_extended_annotationsEb>)

[DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;show\_extended\_annotations(bool value)

###### [` include_types `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4NK4LIEF7DeclOpt13include_typesEv>)

bool include\_types() const

Include full type definitions.

If true, the output will contain the full definition of types (structs, enums, unions).

###### [` include_types `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt13include_typesEb>)

[DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;include\_types(bool value)

###### [` include_locals `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4NK4LIEF7DeclOpt14include_localsEv>)

bool include\_locals() const

Emit a function body listing its local / stack variables.

###### [` include_locals `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt14include_localsEb>)

[DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;include\_locals(bool value)

###### [` desugar `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4NK4LIEF7DeclOpt7desugarEv>)

bool desugar() const

Resolve type aliases (sugar).

If true, typedef and type aliases are replaced by their underlying canonical types (e.g., `uint32_t` might become `unsigned int`).

###### [` desugar `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt7desugarEb>)

[DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;desugar(bool value)

###### [` show_field_offsets `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4NK4LIEF7DeclOpt18show_field_offsetsEv>)

bool show\_field\_offsets() const

Show the relative offset of each field/attribute in structures.

If true, every member of a structure is prefixed with its byte offset,

```cpp
struct Foo {
  /* 0x00 *&zwj;/ int A;
  /* 0x04 *&zwj;/ int B;
};
```

###### [` show_field_offsets `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt18show_field_offsetsEb>)

[DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;show\_field\_offsets(bool value)

###### [` type_aliases `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4NK4LIEF7DeclOpt12type_aliasesEv>)

const [type\_aliases\_t](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt14type_aliases_tE> "LIEF::DeclOpt::type_aliases_t") &amp;type\_aliases() const

Mapping of type names to user-friendly aliases.

###### [` type_aliases `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt12type_aliasesE14type_aliases_t>)

[DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;type\_aliases([type\_aliases\_t](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt14type_aliases_tE> "LIEF::DeclOpt::type_aliases_t") aliases)

###### [` add_type_alias `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt14add_type_aliasENSt6stringENSt6stringE>)

[DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;add\_type\_alias(std::string name, std::string alias)

Register a single type alias.

###### [` target_triple `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4NK4LIEF7DeclOpt13target_tripleEv>)

std::string\_view target\_triple() const

The LLVM target (e.g. `aarch64-unknown-linux-gnu`) used to build the AST from which the definitions are generated.

The target defines the size of the builtin types (e.g. `long`) and the register names used in the annotations. If empty (default), the target is inferred from the binary associated with the debug info.

###### [` target_triple `](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOpt13target_tripleENSt6stringE>)

[DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#_CPPv4N4LIEF7DeclOptE> "LIEF::DeclOpt") &amp;target\_triple(std::string triple)

---

### [Python](<https://lief.re/doc/latest/extended/debug_info/index.html#python>)

#### [DebugInfo](<https://lief.re/doc/latest/extended/debug_info/index.html#id1>)

##### [` lief.DebugInfo `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DebugInfo>)

class lief.DebugInfo

Bases: `object`

This class provides a generic interface for accessing debug information from different formats such as DWARF and PDB.

Users can use this interface to access high-level debug features like resolving function addresses.

See: [`DebugInfo`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo> "lief.pdb.DebugInfo"), [`lief.dwarf.DebugInfo`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.DebugInfo> "lief.dwarf.DebugInfo")

###### [` FORMAT `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DebugInfo.FORMAT>)

class FORMAT(*\*values*)

Bases: `Enum`

###### [` DWARF `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DebugInfo.FORMAT.DWARF>)

DWARF = 1

###### [` PDB `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DebugInfo.FORMAT.PDB>)

PDB = 2

###### [` UNKNOWN `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DebugInfo.FORMAT.UNKNOWN>)

UNKNOWN = 0

###### [` from_value `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DebugInfo.FORMAT.from_value>)

from\_value(*arg: int*) → [lief.DebugInfo.FORMAT](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DebugInfo.FORMAT> "lief.DebugInfo.FORMAT") = &lt;nanobind.nb\_func object&gt;

###### [` find_function_address `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DebugInfo.find_function_address>)

find\_function\_address(*self*, *name: str*) → int | None

Attempt to resolve the address of the function specified by `name`.

###### [` format `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DebugInfo.format>)

property format → [lief.DebugInfo.FORMAT](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DebugInfo.FORMAT> "lief.DebugInfo.FORMAT")

The actual debug format (PDB/DWARF)

#### [debug\_location\_t](<https://lief.re/doc/latest/extended/debug_info/index.html#id2>)

##### [` lief.debug_location_t `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.debug_location_t>)

class lief.debug\_location\_t

Bases: `object`

###### [` file `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.debug_location_t.file>)

property file → str

###### [` line `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.debug_location_t.line>)

property line → int

#### [DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#id3>)

##### [` lief.DeclOpt `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt>)

class lief.DeclOpt(*self*)

Bases: `object`

Configuration options for generated code from debug info.

This structure configures how the debug information (DWARF/PDB) translated into an AST is generated. You can use it to configure the indentation, and the information to generate when translating DWARF/PDB into C++-like definitions

###### [` add_type_alias `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt.add_type_alias>)

add\_type\_alias(*self*, *name: str*, *alias: str*) → [lief.\_lief.DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt> "lief._lief.DeclOpt")

Register a single type alias (see [`type_aliases`](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt.type_aliases> "lief.DeclOpt.type_aliases")).

###### [` desugar `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt.desugar>)

property desugar → bool

Resolve type aliases (sugar).

If true, typedef and type aliases are replaced by their underlying canonical types (e.g., `uint32_t` might become `unsigned int`).

###### [` include_locals `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt.include_locals>)

property include\_locals → bool

Emit a function body listing its local / stack variables.

###### [` include_types `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt.include_types>)

property include\_types → bool

Include full type definitions.

If true, the output will contain the full definition of types (structs, enums, unions).

###### [` indentation `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt.indentation>)

property indentation → int

The number of spaces for indentation.

###### [` is_cpp `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt.is_cpp>)

property is\_cpp → bool

Prefer C++ syntax over C syntax.

If true, the output will use C++ features (e.g., `bool` keyword)

###### [` show_extended_annotations `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt.show_extended_annotations>)

property show\_extended\_annotations → bool

Enable extended comments and annotations.

If true, the generated code will include comments containing low-level details such as memory addresses, offsets, type sizes, and original source locations.

###### [` show_field_offsets `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt.show_field_offsets>)

property show\_field\_offsets → bool

Show the relative offset of each field/attribute in structures.

If true, every member of a structure is prefixed with its byte offset (e.g. `/* 0x04 */`).

###### [` target_triple `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt.target_triple>)

property target\_triple → str

The LLVM target (e.g. `aarch64-unknown-linux-gnu`) used to build the AST from which the definitions are generated.

The target defines the size of the builtin types (e.g. `long`) and the register names used in the annotations. If empty (default), the target is inferred from the binary associated with the debug info.

###### [` type_aliases `](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt.type_aliases>)

property type\_aliases → dict[str, str]

Mapping of type names to user-friendly aliases used while rendering types (e.g. `std::basic_string<char, ...>` -&gt; `std::string`).

---

### [Rust](<https://lief.re/doc/latest/extended/debug_info/index.html#rust>)

- [`lief::generic::DebugInfo`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/generic/trait.DebugInfo.html>)
- [`lief::DebugLocation`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/struct.DebugLocation.html>)
- [`lief::DeclOpt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/struct.DeclOpt.html>)
