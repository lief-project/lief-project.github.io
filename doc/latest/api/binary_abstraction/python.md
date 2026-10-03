---
documentID: "1c128f7d90e890100e819351b175f8106c10f998539753b85aedc52368f0490d"
docname: "api/binary_abstraction/python"
title: "Binary Abstraction Python API - LIEF Documentation"
description: "Binary Abstraction Python API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/api/binary_abstraction/python.html"
markdownURL: "https://lief.re/doc/latest/api/binary_abstraction/python.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "99ba75fdc034c8aab6fd11ced98729c614cfc367e8d4f4eb45cdd878a708276c"
---

# [Python](<https://lief.re/doc/latest/api/binary_abstraction/python.html#python>)

## [Parser](<https://lief.re/doc/latest/api/binary_abstraction/python.html#parser>)

### [` lief.parse `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.parse>)

lief.parse(*obj: str | io.IOBase | os.PathLike | bytes | list[int]*) → [PE.Binary](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary") | [OAT.Binary](<https://lief.re/doc/latest/formats/android/oat/python.html#lief.OAT.Binary> "lief.OAT.Binary") | [ELF.Binary](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief.ELF.Binary") | [MachO.Binary](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief.MachO.Binary") | [COFF.Binary](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.Binary> "lief.COFF.Binary") | None

Parse a binary supported by LIEF (ELF, PE, Mach-O, …) from the given Python object and return the corresponding [`Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary> "lief.Binary") object.

---

## [Binary](<https://lief.re/doc/latest/api/binary_abstraction/python.html#binary>)

![Inheritance diagram of lief.Binary, lief._lief.PE.Binary, lief._lief.OAT.Binary, lief._lief.Binary, lief._lief.MachO.Binary, lief._lief.ELF.Binary](https://lief.re/doc/latest/_images/inheritance-76008cfd0852ab35f3af67a2df291d1ffc18efb8.png)

### [` lief.Binary `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary>)

class lief.Binary

Bases: `Object`

Generic interface representing a binary executable.

This class provides a unified interface across multiple binary formats such as ELF, PE, Mach-O, and others. It enables users to access binary components like headers, sections, symbols, relocations, and functions in a format-agnostic way.

Subclasses (like [`lief.PE.Binary`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary")) implement format-specific API

#### [` FORMATS `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.FORMATS>)

class FORMATS(*\*values*)

Bases: `Enum`

##### [` ELF `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.FORMATS.ELF>)

ELF = 1

##### [` MACHO `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.FORMATS.MACHO>)

MACHO = 3

##### [` OAT `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.FORMATS.OAT>)

OAT = 4

##### [` PE `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.FORMATS.PE>)

PE = 2

##### [` UNKNOWN `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.FORMATS.UNKNOWN>)

UNKNOWN = 0

#### [` VA_TYPES `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES>)

class VA\_TYPES(*\*values*)

Bases: `Enum`

Enumeration of virtual address types used for patching and memory access.

##### [` AUTO `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES.AUTO>)

AUTO = 0

##### [` RVA `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES.RVA>)

RVA = 1

##### [` VA `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES.VA>)

VA = 2

#### [` abstract `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.abstract>)

property abstract → [lief.Binary](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary> "lief.Binary")

Return the abstract representation of the current binary ([`lief.Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary> "lief.Binary"))

#### [` assemble `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.assemble>)

assemble(*self*, *address: int*, *assembly: str*, *config: [lief.\_lief.assembly.AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/python.html#lief.assembly.AssemblerConfig> "lief._lief.assembly.AssemblerConfig") = &lt;lief.\_lief.assembly.AssemblerConfig object at 0x7f360aeff540&gt;*) → bytes

Assemble **and patch** the provided assembly code at the specified address.

The function returns the generated assembly bytes.

Example:

```python
bin.assemble(0x12000440, """
xor rax, rbx;
mov rcx, rax;
""")
```

If you need to configure the assembly engine or to define addresses for symbols, you can provide your own [`AssemblerConfig`](<https://lief.re/doc/latest/extended/assembler/python.html#lief.assembly.AssemblerConfig> "lief.assembly.AssemblerConfig") instance.

#### [` concrete `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.concrete>)

property concrete → [lief.ELF.Binary](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief.ELF.Binary") | [lief.PE.Binary](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary") | [lief.MachO.Binary](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief.MachO.Binary")

The *concrete* representation of the binary. Basically, this property casts a [`lief.Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary> "lief.Binary") into a [`lief.PE.Binary`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary"), [`lief.ELF.Binary`](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief.ELF.Binary") or [`lief.MachO.Binary`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief.MachO.Binary").

See also: [`lief.Binary.abstract`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.abstract> "lief.Binary.abstract")

#### [` ctor_functions `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.ctor_functions>)

property ctor\_functions → list[[lief.Function](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function> "lief.Function")]

Constructor functions that are called prior to any other functions

#### [` debug_info `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.debug_info>)

property debug\_info → [lief.DebugInfo](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DebugInfo> "lief.DebugInfo") | None

Return debug info if present. It can be either a [`lief.dwarf.DebugInfo`](<https://lief.re/doc/latest/extended/dwarf/python.html#lief.dwarf.DebugInfo> "lief.dwarf.DebugInfo") or a [`lief.pdb.DebugInfo`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.DebugInfo> "lief.pdb.DebugInfo")

For ELF and Mach-O binaries, it returns the given DebugInfo object **only** if the binary embeds the DWARF debug info in the binary itself.

For PE file, this function tries to find the **external** PDB using the [`lief.PE.CodeViewPDB.filename`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeViewPDB.filename> "lief.PE.CodeViewPDB.filename") output (if present). One can also use [`lief.pdb.load()`](<https://lief.re/doc/latest/extended/pdb/python.html#lief.pdb.load> "lief.pdb.load") to manually load a PDB.

> **Warning**
> 
> This function requires LIEF’s extended version otherwise it **always** returns `None`

#### [` disassembledisassembledisassemble `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.disassemble>)

disassemble(*self*, *address: int*) → Iterator[[lief.\_lief.assembly.Instruction](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief._lief.assembly.Instruction") | None]

**disassemble(*self*, *address: int*, *size: int*) → Iterator[[lief.\_lief.assembly.Instruction](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief._lief.assembly.Instruction") | None]

**disassemble(*self*, *function\_name: str*) → Iterator[[lief.\_lief.assembly.Instruction](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief._lief.assembly.Instruction") | None]****

Overloaded function.

1. `disassemble(self, address: int) -> Iterator[Optional[lief._lief.assembly.Instruction]]`

   > Disassemble code starting at the given virtual address.
   >
   > ```python
   > insts = binary.disassemble(0xacde, 100);
   > for inst in insts:
   >     print(inst)
   > ```
   >
   > > **See also**
   > > 
   > > [`lief.assembly.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief.assembly.Instruction")
2. `disassemble(self, address: int, size: int) -> Iterator[Optional[lief._lief.assembly.Instruction]]`

   > Disassemble code starting at the given virtual address and with the given size.
   >
   > ```python
   > insts = binary.disassemble(0xacde, 100);
   > for inst in insts:
   >     print(inst)
   > ```
   >
   > > **See also**
   > > 
   > > [`lief.assembly.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief.assembly.Instruction")
3. `disassemble(self, function_name: str) -> Iterator[Optional[lief._lief.assembly.Instruction]]`

   > Disassemble code for the given symbol name
   >
   > ```python
   > insts = binary.disassemble("__libc_start_main");
   > for inst in insts:
   >     print(inst)
   > ```
   >
   > > **See also**
   > > 
   > > [`lief.assembly.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief.assembly.Instruction")

#### [` disassemble_from_bytes `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.disassemble_from_bytes>)

disassemble\_from\_bytes(*self*, *buffer: bytes*, *address: int = 0*) → Iterator[[lief.\_lief.assembly.Instruction](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief._lief.assembly.Instruction") | None]

Disassemble code from the provided bytes

```python
raw = bytes(binary.get_section(".text").content)
insts = binary.disassemble_from_bytes(raw);
for inst in insts:
    print(inst)
```

> **See also**
> 
> [`lief.assembly.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief.assembly.Instruction")

#### [` entrypoint `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.entrypoint>)

property entrypoint → int

Binary’s entrypoint

#### [` exported_functions `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.exported_functions>)

property exported\_functions → list[[lief.Function](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function> "lief.Function")]

Return the binary’s exported [`Function`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function> "lief.Function")

#### [` format `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.format>)

property format → [lief.Binary.FORMATS](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.FORMATS> "lief.Binary.FORMATS")

File format ([`FORMATS`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.FORMATS> "lief.Binary.FORMATS")) of the underlying binary.

#### [` get_content_from_virtual_address `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.get_content_from_virtual_address>)

get\_content\_from\_virtual\_address(*self*, *virtual\_address: int*, *size: int*, *va\_type: [lief.\_lief.Binary.VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES> "lief._lief.Binary.VA_TYPES") = VA\_TYPES.AUTO*) → memoryview

Return the content located at the provided virtual address. The virtual address is specified in the first argument and size to read (in bytes) in the second.

If the underlying binary is a PE, one can specify if the virtual address is a [`RVA`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES.RVA> "lief.Binary.VA_TYPES.RVA") or a [`VA`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES.VA> "lief.Binary.VA_TYPES.VA"). By default, it is set to [`AUTO`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES.AUTO> "lief.Binary.VA_TYPES.AUTO").

#### [` get_function_address `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.get_function_address>)

get\_function\_address(*self*, *function\_name: str*) → int | [lief.\_lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief._lief.lief_errors")

Return the address of the given function name

#### [` get_int_from_virtual_address `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.get_int_from_virtual_address>)

get\_int\_from\_virtual\_address(*self*, *address: int*, *interger\_size: int*, *type: [lief.\_lief.Binary.VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES> "lief._lief.Binary.VA_TYPES") = VA\_TYPES.AUTO*) → int | None

Get an integer representation of the data at the given address

#### [` get_symbol `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.get_symbol>)

get\_symbol(*self*, *symbol\_name: str*) → [lief.\_lief.Symbol](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol> "lief._lief.Symbol") | None

Return the [`Symbol`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol> "lief.Symbol") from the given `name`.

If the symbol can’t be found, it returns None.

#### [` has_nx `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.has_nx>)

property has\_nx → bool

Check if the binary has `NX` protection (non executable stack)

#### [` has_symbol `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.has_symbol>)

has\_symbol(*self*, *symbol\_name: str*) → bool

Check if a [`Symbol`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol> "lief.Symbol") with the given name exists

#### [` header `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.header>)

property header → [lief.Header](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header> "lief.Header")

Binary’s abstract header ([`Header`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header> "lief.Header"))

#### [` imagebase `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.imagebase>)

property imagebase → int

Default image base (i.e. if the ASLR is not enabled)

#### [` imported_functions `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.imported_functions>)

property imported\_functions → list[[lief.Function](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function> "lief.Function")]

Return the binary’s imported [`Function`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function> "lief.Function") (name)

#### [` is_pie `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.is_pie>)

property is\_pie → bool

Check if the binary is position independent

#### [` libraries `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.libraries>)

property libraries → list[str | bytes]

Return binary’s imported libraries (name)

#### [` load_debug_info `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.load_debug_info>)

load\_debug\_info(*self*, *path: str | os.PathLike*) → [lief.\_lief.DebugInfo](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DebugInfo> "lief._lief.DebugInfo") | None

Load and associate an external debug file (e.g., DWARF or PDB) with this binary.

This method attempts to load the debug information from the file located at the given path, and binds it to the current binary instance. If successful, it returns the loaded [`DebugInfo`](<https://lief.re/doc/latest/extended/debug_info/index.html#lief.DebugInfo> "lief.DebugInfo") object.

> **Warning**
> 
> It is the caller’s responsibility to ensure that the debug file is compatible with the binary. Incorrect associations may lead to inconsistent or invalid results.

> **Note**
> 
> This function does not verify that the debug file matches the binary’s unique identifier (e.g., build ID, GUID).

#### [` offset_to_virtual_address `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.offset_to_virtual_address>)

offset\_to\_virtual\_address(*self*, *offset: int*, *slide: int = 0*) → int | [lief.\_lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief._lief.lief_errors")

Convert an offset into a virtual address.

#### [` original_size `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.original_size>)

property original\_size → int

Original size of the binary

#### [` page_size `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.page_size>)

property page\_size → int

Get the default memory page size according to the architecture and the format of the current binary

#### [` patch_addresspatch_address `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.patch_address>)

patch\_address(*self*, *address: int*, *patch\_value: collections.abc.Sequence[int]*, *va\_type: [lief.\_lief.Binary.VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES> "lief._lief.Binary.VA_TYPES") = VA\_TYPES.AUTO*) → None

**patch\_address(*self*, *address: int*, *patch\_value: int*, *size: int = 8*, *va\_type: [lief.\_lief.Binary.VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES> "lief._lief.Binary.VA_TYPES") = VA\_TYPES.AUTO*) → None**

Overloaded function.

1. `patch_address(self, address: int, patch_value: collections.abc.Sequence[int], va_type: lief._lief.Binary.VA_TYPES = VA_TYPES.AUTO) -> None`

   > Patch the address with the given list of bytes. The virtual address is specified in the first argument and the content in the second (as a list of bytes).
   >
   > If the underlying binary is a PE, one can specify if the virtual address is a [`RVA`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES.RVA> "lief.Binary.VA_TYPES.RVA") or a [`VA`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES.VA> "lief.Binary.VA_TYPES.VA"). By default, it is set to [`AUTO`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES.AUTO> "lief.Binary.VA_TYPES.AUTO").
2. `patch_address(self, address: int, patch_value: int, size: int = 8, va_type: lief._lief.Binary.VA_TYPES = VA_TYPES.AUTO) -> None`

   > Patch the address with the given integer value. The virtual address is specified in the first argument, the integer in the second and the integer’s size in the third one.
   >
   > If the underlying binary is a PE, one can specify if the virtual address is a [`RVA`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES.RVA> "lief.Binary.VA_TYPES.RVA") or a [`VA`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES.VA> "lief.Binary.VA_TYPES.VA"). By default, it is set to [`AUTO`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES.AUTO> "lief.Binary.VA_TYPES.AUTO").

#### [` relocations `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.relocations>)

property relocations → lief.Binary.it\_relocations

Return an iterator over abstract [`Relocation`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Relocation> "lief.Relocation")

#### [` remove_section `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.remove_section>)

remove\_section(*self*, *name: str*, *clear: bool = False*) → None

Remove the section with the given name

#### [` sections `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.sections>)

property sections → lief.Binary.it\_sections

Return an iterator over the binary’s abstract sections ([`Section`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section> "lief.Section"))

#### [` symbols `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.symbols>)

property symbols → lief.Binary.it\_symbols

Return an iterator over the binary’s abstract [`Symbol`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol> "lief.Symbol")

#### [` virtual_size `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.virtual_size>)

property virtual\_size → int

#### [` xref `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.xref>)

xref(*self*, *virtual\_address: int*) → list[int]

Return all **virtual addresses** that *use* the `address` given in parameter

---

## [Header](<https://lief.re/doc/latest/api/binary_abstraction/python.html#header>)

### [` lief.Header `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header>)

class lief.Header

Bases: `Object`

Class which represents an abstracted Header

#### [` ARCHITECTURES `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES>)

class ARCHITECTURES(*\*values*)

Bases: `Enum`

##### [` ARM `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES.ARM>)

ARM = 1

##### [` ARM64 `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES.ARM64>)

ARM64 = 2

##### [` LOONGARCH `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES.LOONGARCH>)

LOONGARCH = 11

##### [` MIPS `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES.MIPS>)

MIPS = 3

##### [` PPC `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES.PPC>)

PPC = 6

##### [` PPC64 `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES.PPC64>)

PPC64 = 12

##### [` RISCV `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES.RISCV>)

RISCV = 10

##### [` SPARC `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES.SPARC>)

SPARC = 7

##### [` SYSZ `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES.SYSZ>)

SYSZ = 8

##### [` UNKNOWN `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES.UNKNOWN>)

UNKNOWN = 0

##### [` X86 `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES.X86>)

X86 = 4

##### [` X86_64 `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES.X86_64>)

X86\_64 = 5

##### [` XCORE `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES.XCORE>)

XCORE = 9

##### [` from_value `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES.from_value>)

from\_value(*arg: int*) → [lief.Header.ARCHITECTURES](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES> "lief.Header.ARCHITECTURES") = &lt;nanobind.nb\_func object&gt;

#### [` ENDIANNESS `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ENDIANNESS>)

class ENDIANNESS(*\*values*)

Bases: `Enum`

##### [` BIG `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ENDIANNESS.BIG>)

BIG = 1

##### [` LITTLE `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ENDIANNESS.LITTLE>)

LITTLE = 2

##### [` UNKNOWN `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ENDIANNESS.UNKNOWN>)

UNKNOWN = 0

##### [` from_value `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ENDIANNESS.from_value>)

from\_value(*arg: int*) → [lief.Header.ENDIANNESS](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ENDIANNESS> "lief.Header.ENDIANNESS") = &lt;nanobind.nb\_func object&gt;

#### [` MODES `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.MODES>)

class MODES(*\*values*)

Bases: `Enum`

##### [` ARM64E `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.MODES.ARM64E>)

ARM64E = 16

##### [` BITS_16 `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.MODES.BITS_16>)

BITS\_16 = 1

##### [` BITS_32 `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.MODES.BITS_32>)

BITS\_32 = 2

##### [` BITS_64 `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.MODES.BITS_64>)

BITS\_64 = 4

##### [` NONE `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.MODES.NONE>)

NONE = 0

##### [` THUMB `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.MODES.THUMB>)

THUMB = 8

##### [` from_value `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.MODES.from_value>)

from\_value(*arg: int*) → [lief.Header.MODES](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.MODES> "lief.Header.MODES") = &lt;nanobind.nb\_func object&gt;

#### [` OBJECT_TYPES `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.OBJECT_TYPES>)

class OBJECT\_TYPES(*\*values*)

Bases: `Enum`

##### [` EXECUTABLE `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.OBJECT_TYPES.EXECUTABLE>)

EXECUTABLE = 1

##### [` LIBRARY `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.OBJECT_TYPES.LIBRARY>)

LIBRARY = 2

##### [` OBJECT `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.OBJECT_TYPES.OBJECT>)

OBJECT = 3

##### [` UNKNOWN `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.OBJECT_TYPES.UNKNOWN>)

UNKNOWN = 0

##### [` from_value `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.OBJECT_TYPES.from_value>)

from\_value(*arg: int*) → [lief.Header.OBJECT\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.OBJECT_TYPES> "lief.Header.OBJECT_TYPES") = &lt;nanobind.nb\_func object&gt;

#### [` architecture `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.architecture>)

property architecture → [lief.Header.ARCHITECTURES](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ARCHITECTURES> "lief.Header.ARCHITECTURES")

Target architecture

#### [` endianness `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.endianness>)

property endianness → [lief.Header.ENDIANNESS](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.ENDIANNESS> "lief.Header.ENDIANNESS")

Binary endianness

#### [` entrypoint `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.entrypoint>)

property entrypoint → int

Binary entrypoint

#### [` is_32 `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.is_32>)

property is\_32 → bool

`True` if the binary targets a `32-bits` architecture

#### [` is_64 `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.is_64>)

property is\_64 → bool

`True` if the binary targets a `64-bits` architecture

#### [` modes `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.modes>)

property modes → [lief.Header.MODES](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.MODES> "lief.Header.MODES")

Architecture details

#### [` modes_list `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.modes_list>)

property modes\_list → list[[lief.Header.MODES](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.MODES> "lief.Header.MODES")]

*Modes* as a list

#### [` object_type `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.object_type>)

property object\_type → [lief.Header.OBJECT\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Header.OBJECT_TYPES> "lief.Header.OBJECT_TYPES")

Type of the binary (executable, library…)

---

## [Section](<https://lief.re/doc/latest/api/binary_abstraction/python.html#section>)

![Inheritance diagram of lief._lief.PE.Section, lief._lief.ELF.Section, lief._lief.MachO.Section, lief._lief.Section, lief.Section, lief._lief.COFF.Section, lief._lief.MachO.ThreadLocalVariables](https://lief.re/doc/latest/_images/inheritance-1fa14a364676d8773156d2ef01a96ae5e40ad57d.png)

### [` lief.Section `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section>)

class lief.Section

Bases: `Object`

Class which represents an abstracted section

#### [` content `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section.content>)

property content → memoryview

Section’s content

#### [` entropy `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section.entropy>)

property entropy → float

Section’s entropy

#### [` fullname `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section.fullname>)

property fullname → bytes

Return the **fullname** of the section including the trailing bytes

#### [` name `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section.name>)

property name → str | bytes

Section’s name

#### [` offset `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section.offset>)

property offset → int

Section’s file offset

#### [` searchsearchsearch `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section.search>)

search(*self*, *number: int*, *pos: int = 0*, *size: int = 0*) → int | None

**search(*self*, *str: str*, *pos: int = 0*) → int | None

**search(*self*, *bytes: bytes*, *pos: int = 0*) → int | None****

Overloaded function.

1. `search(self, number: int, pos: int = 0, size: int = 0) -> Optional[int]`

Look for **integer** within the current section

2. `search(self, str: str, pos: int = 0) -> Optional[int]`

Look for **string** within the current section

3. `search(self, bytes: bytes, pos: int = 0) -> Optional[int]`

Look for the given bytes within the current section

#### [` search_allsearch_all `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section.search_all>)

search\_all(*self*, *number: int*, *size: int = 0*) → list[int]

**search\_all(*self*, *str: str*) → list[int]**

Overloaded function.

1. `search_all(self, number: int, size: int = 0) -> list[int]`

Look for **all** integers within the current section

2. `search_all(self, str: str) -> list[int]`

Look for all **strings** within the current section

#### [` size `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section.size>)

property size → int

Section’s size

#### [` virtual_address `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section.virtual_address>)

property virtual\_address → int

Section’s virtual address

---

## [Symbol](<https://lief.re/doc/latest/api/binary_abstraction/python.html#symbol>)

![Inheritance diagram of lief._lief.ELF.Symbol, lief._lief.Symbol, lief._lief.Function, lief.Symbol, lief._lief.COFF.Symbol, lief.Function, lief._lief.PE.DelayImportEntry, lief._lief.PE.ImportEntry, lief._lief.PE.ExportEntry, lief._lief.MachO.Symbol](https://lief.re/doc/latest/_images/inheritance-d095333d5c188fae58909ac27b95307d8e772312.png)

### [` lief.Symbol `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol>)

class lief.Symbol

Bases: `Object`

This class represents a symbol in an executable format.

#### [` name `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol.name>)

property name → str | bytes

Symbol’s name

#### [` size `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol.size>)

property size → int

Symbol’s size

#### [` value `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol.value>)

property value → int

Symbol’s value

---

## [Relocation](<https://lief.re/doc/latest/api/binary_abstraction/python.html#relocation>)

![Inheritance diagram of lief._lief.MachO.RelocationFixup, lief._lief.MachO.Relocation, lief._lief.ELF.Relocation, lief._lief.MachO.RelocationObject, lief._lief.Relocation, lief.Relocation, lief._lief.COFF.Relocation, lief._lief.PE.RelocationEntry, lief._lief.MachO.RelocationDyld](https://lief.re/doc/latest/_images/inheritance-6b07f77499757e0ba935bb719a89a18c495eaf13.png)

### [` lief.Relocation `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Relocation>)

class lief.Relocation

Bases: `Object`

Class which represents an abstracted Relocation

#### [` address `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Relocation.address>)

property address → int

Relocation’s address

#### [` size `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Relocation.size>)

property size → int

Relocation’s size (in **bits**)

---

## [Function](<https://lief.re/doc/latest/api/binary_abstraction/python.html#function>)

### [` lief.Functionlief.Functionlief.Functionlief.Function `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function>)

class lief.Function(*self*)

**class lief.Function(*self*, *arg: str*, */*)

**class lief.Function(*self*, *arg: int*, */*)

**class lief.Function(*self*, *arg0: str*, *arg1: int*, */*)******

Bases: [`Symbol`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol> "lief._lief.Symbol")

Class which represents a Function in an executable file format.

#### [` FLAGS `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.FLAGS>)

class FLAGS(*\*values*)

Bases: `Flag`

##### [` CONSTRUCTOR `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.FLAGS.CONSTRUCTOR>)

CONSTRUCTOR = 1

##### [` DEBUG_INFO `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.FLAGS.DEBUG_INFO>)

DEBUG\_INFO = 4

##### [` DESTRUCTOR `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.FLAGS.DESTRUCTOR>)

DESTRUCTOR = 2

##### [` EXPORTED `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.FLAGS.EXPORTED>)

EXPORTED = 8

##### [` IMPORTED `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.FLAGS.IMPORTED>)

IMPORTED = 16

##### [` NONE `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.FLAGS.NONE>)

NONE = 0

##### [` from_value `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.FLAGS.from_value>)

from\_value(*arg: int*) → [lief.Function.FLAGS](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.FLAGS> "lief.Function.FLAGS") = &lt;nanobind.nb\_func object&gt;

#### [` add `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.add>)

add(*self*, *flag: [lief.\_lief.Function.FLAGS](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.FLAGS> "lief._lief.Function.FLAGS")*) → [lief.\_lief.Function](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function> "lief._lief.Function")

Add the given [`FLAGS`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.FLAGS> "lief.Function.FLAGS")

#### [` address `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.address>)

property address → int

Function’s address

#### [` flags `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.flags>)

property flags → [lief.Function.FLAGS](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.FLAGS> "lief.Function.FLAGS")

Function flags

#### [` flags_list `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.flags_list>)

property flags\_list → list[[lief.Function.FLAGS](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.FLAGS> "lief.Function.FLAGS")]

Function flags as a list of [`FLAGS`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.FLAGS> "lief.Function.FLAGS")

#### [` has `](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.has>)

has(*self*, *flag: [lief.\_lief.Function.FLAGS](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function.FLAGS> "lief._lief.Function.FLAGS")*) → bool

Check if the function has the given flag
