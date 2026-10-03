---
documentID: "88121a5f381e7fbef87bbb8127d3dbcd61a1d2e84ba88a9801ccd72dbb538e80"
docname: "extended/pdb/python"
title: "PDB Python API - LIEF Documentation"
description: "PDB Python API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/extended/pdb/python.html"
markdownURL: "https://lief.re/doc/latest/extended/pdb/python.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "8d00b6d69b6a89d80d8ec19e9a9cef74be5861e3bba61b33218c81b76d9edd7c"
---

# [Python](<https://lief.re/doc/latest/extended/pdb/python.html#python>)

## [` lief.pdb.load `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.load>)

lief.pdb.load(*path: str*) → [lief.pdb.DebugInfo](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo> "lief.pdb.DebugInfo") | None

Load the PDB from the given path

## [DebugInfo](<https://lief.re/doc/latest/extended/pdb/python.html#debuginfo>)

### [` lief.pdb.DebugInfo `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo>)

class lief.pdb.DebugInfo

Bases: [`DebugInfo`](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DebugInfo> "lief._lief.DebugInfo")

This class provides an interface for PDB files.

One can instantiate this class using [`lief.pdb.load()`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.load> "lief.pdb.load") or [`lief.pdb.DebugInfo.from_file()`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo.from_file> "lief.pdb.DebugInfo.from_file")

#### [` age `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo.age>)

property age → int

The number of times the PDB file has been written.

#### [` compilation_units `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo.compilation_units>)

property compilation\_units → Iterator[[lief.pdb.CompilationUnit](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.CompilationUnit> "lief.pdb.CompilationUnit") | None]

Iterator over the [`CompilationUnit`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.CompilationUnit> "lief.pdb.CompilationUnit") from the PDB’s DBI stream. CompilationUnit are also named “Module” in the PDB’s official documentation

#### [` find_public_symbol `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo.find_public_symbol>)

find\_public\_symbol(*self*, *name: str*) → [lief.\_lief.pdb.PublicSymbol](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.PublicSymbol> "lief._lief.pdb.PublicSymbol") | None

Try to find the PublicSymbol from the given name (based on the public symbol stream) The function returns `None` if the symbol can’t be found.

```python
debug_info: lief.pdb.DebugInfo = ...
if sym := debug_info.find_public_symbol("MiSyncSystemPdes"):
    print("found")
```

#### [` find_typefind_type `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo.find_type>)

find\_type(*self*, *name: str*) → [lief.\_lief.pdb.Type](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief._lief.pdb.Type") | None

**find\_type(*self*, *index: int*) → [lief.\_lief.pdb.Type](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief._lief.pdb.Type") | None**

Overloaded function.

1. `find_type(self, name: str) -> Optional[lief._lief.pdb.Type]`

Find the type with the given name

2. `find_type(self, index: int) -> Optional[lief._lief.pdb.Type]`

Find type at the given index

#### [` from_file `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo.from_file>)

from\_file(*filepath: str | os.PathLike*) → [lief.pdb.DebugInfo](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo> "lief.pdb.DebugInfo") | None = &lt;nanobind.nb\_func object&gt;

#### [` guid `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo.guid>)

property guid → str

Unique identifier of the PDB file.

#### [` public_symbols `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo.public_symbols>)

property public\_symbols → Iterator[[lief.pdb.PublicSymbol](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.PublicSymbol> "lief.pdb.PublicSymbol") | None]

Return an iterator over the public symbol stream.

#### [` types `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo.types>)

property types → Iterator[[lief.pdb.Type](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief.pdb.Type") | None]

Return an iterator over the different types registered in this PDB file

---

## [CompilationUnit](<https://lief.re/doc/latest/extended/pdb/python.html#compilationunit>)

### [` lief.pdb.CompilationUnit `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.CompilationUnit>)

class lief.pdb.CompilationUnit

Bases: `object`

This class represents a Compilation Unit (or Module) in a PDB file

#### [` build_metadata `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.CompilationUnit.build_metadata>)

property build\_metadata → [lief.pdb.BuildMetadata](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata> "lief.pdb.BuildMetadata") | None

#### [` functions `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.CompilationUnit.functions>)

property functions → Iterator[[lief.pdb.Function](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Function> "lief.pdb.Function") | None]

Return an iterator over the functions defined in this compilation unit. If the PDB does not contain or has an empty DBI stream, it returns an empty iterator.

#### [` module_name `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.CompilationUnit.module_name>)

property module\_name → str

Name (or path) to the COFF object (`.obj`) associated with this compilation unit (e.g. `e:\obj.amd64fre\minkernel\ntos\hvl\mp\objfre\amd64\hvlp.obj`)

#### [` object_filename `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.CompilationUnit.object_filename>)

property object\_filename → str

Name of path to the original binary object (COFF, Archive) in which the compilation unit was located before being linked. e.g. `e:\obj.amd64fre\minkernel\ntos\hvl\mp\objfre\amd64\hvl.lib`

#### [` sources `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.CompilationUnit.sources>)

property sources → Iterator[str]

Iterator over the sources files that compose this compilation unit. These files include **headers** (`.h, .hpp`, …).

#### [` to_decl `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.CompilationUnit.to_decl>)

to\_decl(*self*, *opt: [lief.\_lief.DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt> "lief._lief.DeclOpt") | None = None*) → str

Generates a C/C++ definition for the functions defined in this compilation unit

---

## [BuildMetadata](<https://lief.re/doc/latest/extended/pdb/python.html#buildmetadata>)

### [` lief.pdb.BuildMetadata `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata>)

class lief.pdb.BuildMetadata

Bases: `object`

This class wraps build metadata represented by the codeview symbols: `S_COMPILE3, S_COMPILE2, S_BUILDINFO`

#### [` CPU `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU>)

class CPU(*\*values*)

Bases: `Enum`

##### [` ALPHA `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ALPHA>)

ALPHA = 48

##### [` ALPHA_21164 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ALPHA_21164>)

ALPHA\_21164 = 49

##### [` ALPHA_21164A `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ALPHA_21164A>)

ALPHA\_21164A = 50

##### [` ALPHA_21264 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ALPHA_21264>)

ALPHA\_21264 = 51

##### [` ALPHA_21364 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ALPHA_21364>)

ALPHA\_21364 = 52

##### [` AM33 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.AM33>)

AM33 = 160

##### [` ARM3 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ARM3>)

ARM3 = 96

##### [` ARM4 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ARM4>)

ARM4 = 97

##### [` ARM4T `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ARM4T>)

ARM4T = 98

##### [` ARM5 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ARM5>)

ARM5 = 99

##### [` ARM5T `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ARM5T>)

ARM5T = 100

##### [` ARM6 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ARM6>)

ARM6 = 101

##### [` ARM64 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ARM64>)

ARM64 = 246

##### [` ARM64EC `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ARM64EC>)

ARM64EC = 248

##### [` ARM64X `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ARM64X>)

ARM64X = 249

##### [` ARM7 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ARM7>)

ARM7 = 104

##### [` ARMNT `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ARMNT>)

ARMNT = 244

##### [` ARM_WMMX `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ARM_WMMX>)

ARM\_WMMX = 103

##### [` ARM_XMAC `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.ARM_XMAC>)

ARM\_XMAC = 102

##### [` CEE `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.CEE>)

CEE = 144

##### [` D3D11_SHADER `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.D3D11_SHADER>)

D3D11\_SHADER = 256

##### [` EBC `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.EBC>)

EBC = 224

##### [` HYBRID_X86ARM64 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.HYBRID_X86ARM64>)

HYBRID\_X86ARM64 = 247

##### [` IA64 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.IA64>)

IA64 = 128

##### [` IA64_2 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.IA64_2>)

IA64\_2 = 129

##### [` INTEL_80286 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.INTEL_80286>)

INTEL\_80286 = 2

##### [` INTEL_80386 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.INTEL_80386>)

INTEL\_80386 = 3

##### [` INTEL_80486 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.INTEL_80486>)

INTEL\_80486 = 4

##### [` INTEL_8080 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.INTEL_8080>)

INTEL\_8080 = 0

##### [` INTEL_8086 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.INTEL_8086>)

INTEL\_8086 = 1

##### [` M32R `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.M32R>)

M32R = 176

##### [` M68000 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.M68000>)

M68000 = 32

##### [` M68010 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.M68010>)

M68010 = 33

##### [` M68020 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.M68020>)

M68020 = 34

##### [` M68030 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.M68030>)

M68030 = 35

##### [` M68040 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.M68040>)

M68040 = 36

##### [` MIPS `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.MIPS>)

MIPS = 16

##### [` MIPS16 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.MIPS16>)

MIPS16 = 17

##### [` MIPS32 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.MIPS32>)

MIPS32 = 18

##### [` MIPS64 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.MIPS64>)

MIPS64 = 19

##### [` MIPSI `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.MIPSI>)

MIPSI = 20

##### [` MIPSII `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.MIPSII>)

MIPSII = 21

##### [` MIPSIII `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.MIPSIII>)

MIPSIII = 22

##### [` MIPSIV `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.MIPSIV>)

MIPSIV = 23

##### [` MIPSV `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.MIPSV>)

MIPSV = 24

##### [` OMNI `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.OMNI>)

OMNI = 112

##### [` PENTIUM `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.PENTIUM>)

PENTIUM = 5

##### [` PENTIUM3 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.PENTIUM3>)

PENTIUM3 = 7

##### [` PENTIUMPRO `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.PENTIUMPRO>)

PENTIUMPRO = 6

##### [` PPC601 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.PPC601>)

PPC601 = 64

##### [` PPC603 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.PPC603>)

PPC603 = 65

##### [` PPC604 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.PPC604>)

PPC604 = 66

##### [` PPC620 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.PPC620>)

PPC620 = 67

##### [` PPCBE `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.PPCBE>)

PPCBE = 69

##### [` PPCFP `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.PPCFP>)

PPCFP = 68

##### [` SH3 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.SH3>)

SH3 = 80

##### [` SH3DSP `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.SH3DSP>)

SH3DSP = 82

##### [` SH3E `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.SH3E>)

SH3E = 81

##### [` SH4 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.SH4>)

SH4 = 83

##### [` SHMEDIA `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.SHMEDIA>)

SHMEDIA = 84

##### [` THUMB `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.THUMB>)

THUMB = 240

##### [` TRICORE `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.TRICORE>)

TRICORE = 192

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.UNKNOWN>)

UNKNOWN = 255

##### [` X64 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU.X64>)

X64 = 208

#### [` LANG `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG>)

class LANG(*\*values*)

Bases: `Enum`

##### [` ALIASOBJ `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.ALIASOBJ>)

ALIASOBJ = 20

##### [` BASIC `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.BASIC>)

BASIC = 5

##### [` C `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.C>)

C = 0

##### [` COBOL `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.COBOL>)

COBOL = 6

##### [` CPP `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.CPP>)

CPP = 1

##### [` CSHARP `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.CSHARP>)

CSHARP = 10

##### [` CVTPGD `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.CVTPGD>)

CVTPGD = 9

##### [` CVTRES `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.CVTRES>)

CVTRES = 8

##### [` FORTRAN `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.FORTRAN>)

FORTRAN = 2

##### [` GO `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.GO>)

GO = 22

##### [` HLSL `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.HLSL>)

HLSL = 16

##### [` ILASM `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.ILASM>)

ILASM = 12

##### [` JAVA `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.JAVA>)

JAVA = 13

##### [` JSCRIPT `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.JSCRIPT>)

JSCRIPT = 14

##### [` LINK `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.LINK>)

LINK = 7

##### [` MASM `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.MASM>)

MASM = 3

##### [` MSIL `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.MSIL>)

MSIL = 15

##### [` OBJC `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.OBJC>)

OBJC = 17

##### [` OBJCPP `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.OBJCPP>)

OBJCPP = 18

##### [` PASCAL_LANG `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.PASCAL_LANG>)

PASCAL\_LANG = 4

##### [` RUST `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.RUST>)

RUST = 21

##### [` SWIFT `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.SWIFT>)

SWIFT = 19

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.UNKNOWN>)

UNKNOWN = 255

##### [` VB `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG.VB>)

VB = 11

#### [` backend_version `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.backend_version>)

property backend\_version → [lief.pdb.BuildMetadata.version\_t](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.version_t> "lief.pdb.BuildMetadata.version_t")

Version of the backend (e.g. `14.36.32537`)

#### [` build_info `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.build_info>)

property build\_info → [lief.pdb.BuildMetadata.build\_info\_t](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.build_info_t> "lief.pdb.BuildMetadata.build_info_t") | None

Build information represented by the `S_BUILDINFO` symbol

#### [` build_info_t `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.build_info_t>)

class build\_info\_t

Bases: `object`

Build information represented by the `S_BUILDINFO` symbol

##### [` build_tool `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.build_info_t.build_tool>)

property build\_tool → str

Path to the build tool (e.g. `C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.36.32532\bin\HostX64\x64\CL.exe`

##### [` command_line `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.build_info_t.command_line>)

property command\_line → str

Command line arguments used to invoke the *build tool*

##### [` cwd `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.build_info_t.cwd>)

property cwd → str

Working directory where the *build tool* was invoked

##### [` pdb `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.build_info_t.pdb>)

property pdb → str

PDB path

##### [` source_file `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.build_info_t.source_file>)

property source\_file → str

Source file consumed by the *build tool*

#### [` env `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.env>)

property env → list[str]

Environment information represented by the `S_ENVBLOCK` symbol

#### [` frontend_version `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.frontend_version>)

property frontend\_version → [lief.pdb.BuildMetadata.version\_t](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.version_t> "lief.pdb.BuildMetadata.version_t")

Version of the frontend (e.g. `19.36.32537`)

#### [` language `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.language>)

property language → [lief.pdb.BuildMetadata.LANG](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.LANG> "lief.pdb.BuildMetadata.LANG")

Source language

#### [` target_cpu `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.target_cpu>)

property target\_cpu → [lief.pdb.BuildMetadata.CPU](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.CPU> "lief.pdb.BuildMetadata.CPU")

Target CPU

#### [` version `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.version>)

property version → str

Version of the *tool* as a string. For instance, `Microsoft (R) CVTRES`, `Microsoft (R) LINK`.

#### [` version_t `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.version_t>)

class version\_t

Bases: `object`

This structure represents a version for the backend or the frontend

##### [` build `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.version_t.build>)

property build → int

Build version

##### [` major `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.version_t.major>)

property major → int

Major version

##### [` minor `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.version_t.minor>)

property minor → int

Minor version

##### [` qfe `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.BuildMetadata.version_t.qfe>)

property qfe → int

Quick Fix Engineering version

---

## [PublicSymbol](<https://lief.re/doc/latest/extended/pdb/python.html#publicsymbol>)

### [` lief.pdb.PublicSymbol `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.PublicSymbol>)

class lief.pdb.PublicSymbol

Bases: `object`

This class provides general information (RVA, name) about a symbol from the PDB’s public symbol stream (or Public symbol hash stream)

#### [` RVA `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.PublicSymbol.RVA>)

property RVA → int

**Relative** Virtual Address of this symbol.

This function returns 0 if the RVA can’t be computed.

#### [` demangled_name `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.PublicSymbol.demangled_name>)

property demangled\_name → str

Demangled representation of the symbol

#### [` name `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.PublicSymbol.name>)

property name → str

Name of the symbol

#### [` section_name `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.PublicSymbol.section_name>)

property section\_name → str

Name of the section in which this symbol is defined (e.g. `.text`). This function returns an empty string if the section’s name can’t be found

---

## [Function](<https://lief.re/doc/latest/extended/pdb/python.html#function>)

### [` lief.pdb.Function `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Function>)

class lief.pdb.Function

Bases: `object`

#### [` RVA `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Function.RVA>)

property RVA → int

The **Relative** Virtual Address of the function

#### [` code_size `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Function.code_size>)

property code\_size → int

The size of the function

#### [` debug_location `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Function.debug_location>)

property debug\_location → [lief.debug\_location\_t](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.debug_location_t> "lief.debug_location_t")

Original source code location.

#### [` name `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Function.name>)

property name → str

Name of the function

#### [` section_name `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Function.section_name>)

property section\_name → str

The name of the section in which this function is defined

#### [` to_decl `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Function.to_decl>)

to\_decl(*self*, *opt: [lief.\_lief.DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt> "lief._lief.DeclOpt") | None = None*) → str

Generates a C/C++ definition for this function

---

## [Type](<https://lief.re/doc/latest/extended/pdb/python.html#type>)

![Inheritance diagram of lief._lief.pdb.types.BitField, lief._lief.pdb.types.Interface, lief._lief.pdb.types.Union, lief._lief.pdb.types.Array, lief._lief.pdb.types.Enum, lief._lief.pdb.types.Structure, lief._lief.pdb.Type, lief._lief.pdb.types.Modifier, lief._lief.pdb.types.Simple, lief._lief.pdb.types.ClassLike, lief._lief.pdb.types.Class, lief._lief.pdb.types.Function, lief._lief.pdb.types.Pointer](https://lief.re/doc/latest/_images/inheritance-f020d15fca958052487624e7f6a00d334dc6f2e9.png)

### [` lief.pdb.Type `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type>)

class lief.pdb.Type

Bases: `object`

#### [` KIND `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.KIND>)

class KIND(*\*values*)

Bases: `Enum`

##### [` ARRAY `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.KIND.ARRAY>)

ARRAY = 8

##### [` BITFIELD `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.KIND.BITFIELD>)

BITFIELD = 7

##### [` CLASS `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.KIND.CLASS>)

CLASS = 1

##### [` ENUM `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.KIND.ENUM>)

ENUM = 4

##### [` FUNCTION `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.KIND.FUNCTION>)

FUNCTION = 5

##### [` INTERFACE `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.KIND.INTERFACE>)

INTERFACE = 11

##### [` MODIFIER `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.KIND.MODIFIER>)

MODIFIER = 6

##### [` POINTER `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.KIND.POINTER>)

POINTER = 2

##### [` SIMPLE `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.KIND.SIMPLE>)

SIMPLE = 3

##### [` STRUCTURE `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.KIND.STRUCTURE>)

STRUCTURE = 10

##### [` UNION `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.KIND.UNION>)

UNION = 9

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.KIND.UNKNOWN>)

UNKNOWN = 0

#### [` kind `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.kind>)

property kind → [lief.pdb.Type.KIND](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.KIND> "lief.pdb.Type.KIND")

Discriminator for the type’s subclasses

#### [` name `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.name>)

property name → str | None

Type’s name (if present)

#### [` size `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.size>)

property size → int | None

Size of the type. This size should match the value of `sizeof(...)` applied to this type.

#### [` to_decl `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type.to_decl>)

to\_decl(*self*, *opt: [lief.\_lief.DeclOpt](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DeclOpt> "lief._lief.DeclOpt") | None = None*) → str

Generates a C/C++ definition for this type

---

## [Array](<https://lief.re/doc/latest/extended/pdb/python.html#array>)

![Inheritance diagram of lief._lief.pdb.types.Array](https://lief.re/doc/latest/_images/inheritance-f28b4e63a5cc76efa09eb7a07662c4040aa4f599.png)

### [` lief.pdb.types.Array `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Array>)

class lief.pdb.types.Array

Bases: [`Type`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief._lief.pdb.Type")

This class represents a `LF_ARRAY` PDB type.

#### [` element_type `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Array.element_type>)

property element\_type → [lief.pdb.Type](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief.pdb.Type") | None

Type of the elements

#### [` index_type `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Array.index_type>)

property index\_type → [lief.pdb.Type](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief.pdb.Type") | None

Type of the index

#### [` numberof_elements `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Array.numberof_elements>)

property numberof\_elements → int

Number of elements in this array

---

## [Attribute (type)](<https://lief.re/doc/latest/extended/pdb/python.html#attribute-type>)

![Inheritance diagram of lief._lief.pdb.types.Attribute](https://lief.re/doc/latest/_images/inheritance-18ad895604bc4d1f2a96839805427a4727c8431d.png)

### [` lief.pdb.types.Attribute `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Attribute>)

class lief.pdb.types.Attribute

Bases: `object`

This class represents an attribute (`LF_MEMBER`) in an aggregate (class, struct, union, …)

#### [` field_offset `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Attribute.field_offset>)

property field\_offset → int

Offset of this attribute in the aggregate

#### [` name `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Attribute.name>)

property name → str

Name of this attribute.

#### [` type `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Attribute.type>)

property type → [lief.pdb.Type](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief.pdb.Type") | None

Type of this attribute

---

## [BitField](<https://lief.re/doc/latest/extended/pdb/python.html#bitfield>)

![Inheritance diagram of lief._lief.pdb.types.BitField](https://lief.re/doc/latest/_images/inheritance-9423dff1cb3550ecb3d8ee0bda40c8e3c9c36387.png)

### [` lief.pdb.types.BitField `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.BitField>)

class lief.pdb.types.BitField

Bases: [`Type`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief._lief.pdb.Type")

This class represents a `LF_BITFIELD` PDB type

---

## [ClassLike](<https://lief.re/doc/latest/extended/pdb/python.html#classlike>)

![Inheritance diagram of lief._lief.pdb.types.Interface, lief._lief.pdb.types.Union, lief._lief.pdb.types.Structure, lief._lief.pdb.types.ClassLike, lief._lief.pdb.types.Class](https://lief.re/doc/latest/_images/inheritance-a1bbd81c335fd8eb8f0ea06791699d6a0861e48d.png)

### [` lief.pdb.types.ClassLike `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.ClassLike>)

class lief.pdb.types.ClassLike

Bases: [`Type`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief._lief.pdb.Type")

This class abstracts the following PDB types: `LF_STRUCTURE`, `LF_INTERFACE`, `LF_CLASS` or `LF_UNION`.

#### [` attributes `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.ClassLike.attributes>)

property attributes → Iterator[[lief.pdb.types.Attribute](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Attribute> "lief.pdb.types.Attribute") | None]

Return an iterator over the different attributes defined in this class-like type

#### [` methods `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.ClassLike.methods>)

property methods → Iterator[[lief.pdb.types.Method](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method> "lief.pdb.types.Method") | None]

Return an iterator over the different methods implemented in this class-like type

#### [` unique_name `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.ClassLike.unique_name>)

property unique\_name → str

Mangled type name.

---

## [Structure](<https://lief.re/doc/latest/extended/pdb/python.html#structure>)

![Inheritance diagram of lief._lief.pdb.types.Structure](https://lief.re/doc/latest/_images/inheritance-a55383dbcbe04781941ab91864294d2a19da711c.png)

### [` lief.pdb.types.Structure `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Structure>)

class lief.pdb.types.Structure

Bases: [`ClassLike`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.ClassLike> "lief._lief.pdb.types.ClassLike")

Interface for the `LF_STRUCTURE` PDB type

---

## [Class](<https://lief.re/doc/latest/extended/pdb/python.html#class>)

![Inheritance diagram of lief._lief.pdb.types.Class](https://lief.re/doc/latest/_images/inheritance-36d5c26476207384120f5440567745912dbc095b.png)

### [` lief.pdb.types.Class `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Class>)

class lief.pdb.types.Class

Bases: [`ClassLike`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.ClassLike> "lief._lief.pdb.types.ClassLike")

Interface for the `LF_CLASS` PDB type

---

## [Interface](<https://lief.re/doc/latest/extended/pdb/python.html#interface>)

![Inheritance diagram of lief._lief.pdb.types.Interface](https://lief.re/doc/latest/_images/inheritance-df00a7ddc3983d22da9ed8ee3573169d8fce81fc.png)

### [` lief.pdb.types.Interface `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Interface>)

class lief.pdb.types.Interface

Bases: [`ClassLike`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.ClassLike> "lief._lief.pdb.types.ClassLike")

Interface for the `LF_INTERFACE` PDB type

---

## [Enum](<https://lief.re/doc/latest/extended/pdb/python.html#enum>)

![Inheritance diagram of lief._lief.pdb.types.Enum](https://lief.re/doc/latest/_images/inheritance-37663d898db687270e874e20a112296b59beaeb8.png)

### [` lief.pdb.types.Enum `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Enum>)

class lief.pdb.types.Enum

Bases: [`Type`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief._lief.pdb.Type")

This class represents a `LF_ENUM` PDB type

#### [` Entry `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Enum.Entry>)

class Entry

Bases: `object`

This class represents an enum entry which is essentially composed of a name and its value (integer).

##### [` name `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Enum.Entry.name>)

property name → str

Enum entry’s name

##### [` value `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Enum.Entry.value>)

property value → int

Enum entry’s value (if any)

#### [` entries `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Enum.entries>)

property entries → list[[lief.pdb.types.Enum.Entry](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Enum.Entry> "lief.pdb.types.Enum.Entry")]

Return the different entries associated with this enum

#### [` find_entry `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Enum.find_entry>)

find\_entry(*self*, *value: int*) → [lief.\_lief.pdb.types.Enum.Entry](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Enum.Entry> "lief._lief.pdb.types.Enum.Entry") | None

Try to find the enum matching the given value

#### [` underlying_type `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Enum.underlying_type>)

property underlying\_type → [lief.pdb.Type](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief.pdb.Type") | None

The underlying type that is used to encode this enum

#### [` unique_name `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Enum.unique_name>)

property unique\_name → str

Enum’s mangled name

---

## [Function (type)](<https://lief.re/doc/latest/extended/pdb/python.html#function-type>)

![Inheritance diagram of lief._lief.pdb.types.Function](https://lief.re/doc/latest/_images/inheritance-8b2f0995ae649d99cd7c17491db3b63f136c2b1f.png)

### [` lief.pdb.types.Function `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Function>)

class lief.pdb.types.Function

Bases: [`Type`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief._lief.pdb.Type")

This class represents a `LF_PROCEDURE` PDB type

#### [` parameters `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Function.parameters>)

property parameters → list[[lief.pdb.Type](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief.pdb.Type") | None]

Types of the function’s parameters

#### [` return_type `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Function.return_type>)

property return\_type → [lief.pdb.Type](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief.pdb.Type") | None

Type returned by this function

---

## [Method (type)](<https://lief.re/doc/latest/extended/pdb/python.html#method-type>)

![Inheritance diagram of lief._lief.pdb.types.Method](https://lief.re/doc/latest/_images/inheritance-ad5e28f993a95276d902f69f13f26e23717b0569.png)

### [` lief.pdb.types.Method `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method>)

class lief.pdb.types.Method

Bases: `object`

This class represents a Method (`LF_ONEMETHOD`) that can be defined in ClassLike PDB type

#### [` ACCESS `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.ACCESS>)

class ACCESS(*\*values*)

Bases: `Enum`

##### [` NONE `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.ACCESS.NONE>)

NONE = 0

##### [` PRIVATE `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.ACCESS.PRIVATE>)

PRIVATE = 1

##### [` PROTECTED `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.ACCESS.PROTECTED>)

PROTECTED = 2

##### [` PUBLIC `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.ACCESS.PUBLIC>)

PUBLIC = 3

#### [` TYPE `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

##### [` FRIEND `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.TYPE.FRIEND>)

FRIEND = 3

##### [` INTRODUCING_VIRTUAL `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.TYPE.INTRODUCING_VIRTUAL>)

INTRODUCING\_VIRTUAL = 4

##### [` PURE_INTRODUCING_VIRTUAL `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.TYPE.PURE_INTRODUCING_VIRTUAL>)

PURE\_INTRODUCING\_VIRTUAL = 6

##### [` PURE_VIRTUAL `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.TYPE.PURE_VIRTUAL>)

PURE\_VIRTUAL = 5

##### [` STATIC `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.TYPE.STATIC>)

STATIC = 2

##### [` VANILLA `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.TYPE.VANILLA>)

VANILLA = 0

##### [` VIRTUAL `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.TYPE.VIRTUAL>)

VIRTUAL = 1

#### [` access `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.access>)

property access → [lief.pdb.types.Method.ACCESS](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.ACCESS> "lief.pdb.types.Method.ACCESS")

Visibility access (public, private, …)

#### [` name `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.name>)

property name → str

Name of the method

#### [` type `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.type>)

property type → [lief.pdb.types.Method.TYPE](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Method.TYPE> "lief.pdb.types.Method.TYPE")

Type/Properties of the method (virtual, static, etc.)

---

## [Modifier](<https://lief.re/doc/latest/extended/pdb/python.html#modifier>)

![Inheritance diagram of lief._lief.pdb.types.Modifier](https://lief.re/doc/latest/_images/inheritance-2a89d31d739249b115cc5185f7ff09e90a9123ab.png)

### [` lief.pdb.types.Modifier `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Modifier>)

class lief.pdb.types.Modifier

Bases: [`Type`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief._lief.pdb.Type")

This class represents a `LF_MODIFIER` PDB type

#### [` underlying_type `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Modifier.underlying_type>)

property underlying\_type → [lief.pdb.Type](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief.pdb.Type") | None

Underlying type targeted by this modifier

---

## [Pointer](<https://lief.re/doc/latest/extended/pdb/python.html#pointer>)

![Inheritance diagram of lief._lief.pdb.types.Pointer](https://lief.re/doc/latest/_images/inheritance-7d5ea3a7eb75fb6ed4804d594b4e97d638bfbb6a.png)

### [` lief.pdb.types.Pointer `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Pointer>)

class lief.pdb.types.Pointer

Bases: [`Type`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief._lief.pdb.Type")

This class represents a `LF_POINTER` PDB type

#### [` underlying_type `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Pointer.underlying_type>)

property underlying\_type → [lief.pdb.Type](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief.pdb.Type") | None

The underlying type pointed to by this pointer

---

## [Simple](<https://lief.re/doc/latest/extended/pdb/python.html#simple>)

![Inheritance diagram of lief._lief.pdb.types.Simple](https://lief.re/doc/latest/_images/inheritance-1eb91166d02bffb1db870e7ec6e0607b6b085367.png)

### [` lief.pdb.types.Simple `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple>)

class lief.pdb.types.Simple

Bases: [`Type`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.Type> "lief._lief.pdb.Type")

This class represents primitive types (int, float, …) which are also named *simple* types in the PDB format.

#### [` MODES `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.MODES>)

class MODES(*\*values*)

Bases: `Enum`

##### [` DIRECT `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.MODES.DIRECT>)

DIRECT = 0

##### [` FAR_POINTER `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.MODES.FAR_POINTER>)

FAR\_POINTER = 512

##### [` FAR_POINTER32 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.MODES.FAR_POINTER32>)

FAR\_POINTER32 = 1280

##### [` HUGE_POINTER `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.MODES.HUGE_POINTER>)

HUGE\_POINTER = 768

##### [` NEAR_POINTER128 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.MODES.NEAR_POINTER128>)

NEAR\_POINTER128 = 1792

##### [` NEAR_POINTER32 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.MODES.NEAR_POINTER32>)

NEAR\_POINTER32 = 1024

##### [` NEAR_POINTER64 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.MODES.NEAR_POINTER64>)

NEAR\_POINTER64 = 1536

#### [` TYPES `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES>)

class TYPES(*\*values*)

Bases: `Enum`

##### [` BOOL128 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.BOOL128>)

BOOL128 = 52

##### [` BOOL16 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.BOOL16>)

BOOL16 = 49

##### [` BOOL32 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.BOOL32>)

BOOL32 = 50

##### [` BOOL64 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.BOOL64>)

BOOL64 = 51

##### [` BOOL8 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.BOOL8>)

BOOL8 = 48

##### [` CHAR16 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.CHAR16>)

CHAR16 = 122

##### [` CHAR32 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.CHAR32>)

CHAR32 = 123

##### [` CHAR8 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.CHAR8>)

CHAR8 = 124

##### [` COMPLEX128 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.COMPLEX128>)

COMPLEX128 = 83

##### [` COMPLEX16 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.COMPLEX16>)

COMPLEX16 = 86

##### [` COMPLEX32 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.COMPLEX32>)

COMPLEX32 = 80

##### [` COMPLEX32_PARTIAL_PRECISION `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.COMPLEX32_PARTIAL_PRECISION>)

COMPLEX32\_PARTIAL\_PRECISION = 85

##### [` COMPLEX48 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.COMPLEX48>)

COMPLEX48 = 84

##### [` COMPLEX64 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.COMPLEX64>)

COMPLEX64 = 81

##### [` COMPLEX80 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.COMPLEX80>)

COMPLEX80 = 82

##### [` FLOAT128 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.FLOAT128>)

FLOAT128 = 67

##### [` FLOAT16 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.FLOAT16>)

FLOAT16 = 70

##### [` FLOAT32 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.FLOAT32>)

FLOAT32 = 64

##### [` FLOAT32_PARTIAL_PRECISION `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.FLOAT32_PARTIAL_PRECISION>)

FLOAT32\_PARTIAL\_PRECISION = 69

##### [` FLOAT48 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.FLOAT48>)

FLOAT48 = 68

##### [` FLOAT64 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.FLOAT64>)

FLOAT64 = 65

##### [` FLOAT80 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.FLOAT80>)

FLOAT80 = 66

##### [` RCHAR `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.RCHAR>)

RCHAR = 112

##### [` SBYTE `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.SBYTE>)

SBYTE = 104

##### [` SCHAR `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.SCHAR>)

SCHAR = 16

##### [` SINT128 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.SINT128>)

SINT128 = 120

##### [` SINT16 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.SINT16>)

SINT16 = 114

##### [` SINT32 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.SINT32>)

SINT32 = 116

##### [` SINT64 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.SINT64>)

SINT64 = 118

##### [` SLONG `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.SLONG>)

SLONG = 18

##### [` SOCTA `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.SOCTA>)

SOCTA = 20

##### [` SQUAD `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.SQUAD>)

SQUAD = 19

##### [` SSHORT `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.SSHORT>)

SSHORT = 17

##### [` UBYTE `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.UBYTE>)

UBYTE = 105

##### [` UCHAR `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.UCHAR>)

UCHAR = 32

##### [` UINT128 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.UINT128>)

UINT128 = 121

##### [` UINT16 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.UINT16>)

UINT16 = 115

##### [` UINT32 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.UINT32>)

UINT32 = 117

##### [` UINT64 `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.UINT64>)

UINT64 = 119

##### [` ULONG `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.ULONG>)

ULONG = 34

##### [` UNKNOWN `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.UNKNOWN>)

UNKNOWN = 0

##### [` UOCTA `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.UOCTA>)

UOCTA = 36

##### [` UQUAD `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.UQUAD>)

UQUAD = 35

##### [` USHORT `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.USHORT>)

USHORT = 33

##### [` VOID `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.VOID>)

VOID = 3

##### [` WCHAR `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES.WCHAR>)

WCHAR = 113

#### [` is_pointer `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.is_pointer>)

property is\_pointer → bool

Check if this simple type is a pointer.

#### [` is_signed `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.is_signed>)

property is\_signed → bool

Check if the underlying type is signed.

#### [` modes `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.modes>)

property modes → [lief.pdb.types.Simple.MODES](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.MODES> "lief.pdb.types.Simple.MODES")

Returns the mode (pointer type) of this Simple type.

#### [` type `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.type>)

property type → [lief.pdb.types.Simple.TYPES](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Simple.TYPES> "lief.pdb.types.Simple.TYPES")

Returns the underlying primitive type.

---

## [Union](<https://lief.re/doc/latest/extended/pdb/python.html#union>)

![Inheritance diagram of lief._lief.pdb.types.Union](https://lief.re/doc/latest/_images/inheritance-e59b025963759e65a0c034cf06decd200411719e.png)

### [` lief.pdb.types.Union `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.Union>)

class lief.pdb.types.Union

Bases: [`ClassLike`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.types.ClassLike> "lief._lief.pdb.types.ClassLike")

This class represents a `LF_UNION` PDB type

---

## [Utilities](<https://lief.re/doc/latest/extended/pdb/python.html#utilities>)

### [` lief.is_pdb `](<https://lief.re/doc/latest/extended/pdb/python.html#lief.is_pdb>)

lief.is\_pdb(*file: str | os.PathLike*) → bool

Check if the given file is a `PDB`
