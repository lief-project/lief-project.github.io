---
documentID: "f5ee3f490aed9a938733d2e80f209a0ab905430aaf59a382cabd61a646248a41"
docname: "formats/pe/python"
title: "PE Python API - LIEF Documentation"
description: "PE Python API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/formats/pe/python.html"
markdownURL: "https://lief.re/doc/latest/formats/pe/python.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "efc76f2acf54cca2fb49472ea173e821091cdd0d079c33c08b8c41b4b499d18b"
---

# [Python](<https://lief.re/doc/latest/formats/pe/python.html#python>)

## [Parser](<https://lief.re/doc/latest/formats/pe/python.html#parser>)

### [` lief.PE.parse `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.parse>)

lief.PE.parse(*obj: str | io.IOBase | os.PathLike | bytes | list[int]*, *config: [lief.PE.ParserConfig](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig> "lief.PE.ParserConfig")*) → [lief.PE.Binary](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary") | None

Parse the PE binary from the given parameter and return a [`lief.PE.Binary`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary") object

### [` lief.PE.ParserConfig `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig>)

class lief.PE.ParserConfig(*self*)

Bases: `object`

This class is used to configure the behavior of the PE Parser ([`lief.PE.parse()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.parse> "lief.PE.parse"))

#### [` all `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig.all>)

all = &lt;lief.\_lief.PE.ParserConfig object&gt;

#### [` default_conf `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig.default_conf>)

default\_conf = &lt;lief.\_lief.PE.ParserConfig object&gt;

#### [` parse_arm64x_binary `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig.parse_arm64x_binary>)

property parse\_arm64x\_binary → bool

Whether to parse nested ARM64X binaries.

This option is disabled by default because it can introduce significant parsing overhead.

#### [` parse_exceptions `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig.parse_exceptions>)

property parse\_exceptions → bool

Whether to parse in-depth exception metadata.

This option is disabled by default because it can introduce significant parsing overhead.

#### [` parse_exports `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig.parse_exports>)

property parse\_exports → bool

Whether to parse the PE Export Directory.

#### [` parse_imports `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig.parse_imports>)

property parse\_imports → bool

Whether to parse the PE Import Directory.

#### [` parse_reloc `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig.parse_reloc>)

property parse\_reloc → bool

Whether to parse PE relocations.

#### [` parse_rsrc `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig.parse_rsrc>)

property parse\_rsrc → bool

Whether to parse the PE resources tree.

#### [` parse_signature `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig.parse_signature>)

property parse\_signature → bool

Whether to parse the PE Authenticode signature.

#### [` rebase `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig.rebase>)

property rebase → int | None

If set, this value holds the original image base from which the binary should be rebased. This is used to *undo* relocations and IAT bindings when parsing a PE loaded in memory.

## [Binary](<https://lief.re/doc/latest/formats/pe/python.html#binary>)

### [` lief.PE.Binary `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary>)

class lief.PE.Binary

Bases: [`Binary`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary> "lief._lief.Binary")

Class which represents a PE binary which is the main interface to manage and modify a PE executable.

This object can be instantiated through [`lief.parse()`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.parse> "lief.parse") or [`lief.PE.parse()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.parse> "lief.PE.parse") while the constructor of this object can be used to craft a binary from scratch (see: [02 - Create a PE from scratch (Deprecated)](<https://lief.re/doc/latest/tutorials/02_pe_from_scratch.html#pe-from-scratch>))

#### [` add_debug_info `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.add_debug_info>)

add\_debug\_info(*self*, *entry: [lief.\_lief.PE.Debug](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug> "lief._lief.PE.Debug")*) → [lief.\_lief.PE.Debug](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug> "lief._lief.PE.Debug") | None

Add a new debug entry

#### [` add_import `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.add_import>)

add\_import(*self*, *import\_name: str*, *pos: int = -1*) → [lief.\_lief.PE.Import](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import> "lief._lief.PE.Import")

Add an imported library (i.e. `DLL`) to the binary.

The second parameter `pos` defines where to insert the import. If negative (default), the import is appended to the end of the list.

#### [` add_relocation `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.add_relocation>)

add\_relocation(*self*, *relocation: [lief.\_lief.PE.Relocation](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Relocation> "lief._lief.PE.Relocation")*) → [lief.\_lief.PE.Relocation](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Relocation> "lief._lief.PE.Relocation")

Add a [`Relocation`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Relocation> "lief.PE.Relocation") to the binary

#### [` add_section `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.add_section>)

add\_section(*self*, *section: [lief.\_lief.PE.Section](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief._lief.PE.Section")*) → [lief.\_lief.PE.Section](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief._lief.PE.Section") | None

Add a [`Section`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief.PE.Section") to the binary.

#### [` authentihash `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.authentihash>)

authentihash(*self*, *algorithm: [lief.\_lief.PE.ALGORITHMS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS> "lief._lief.PE.ALGORITHMS")*) → bytes

Compute the authentihash according to the [`ALGORITHMS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS> "lief.PE.ALGORITHMS") given in the first parameter

#### [` authentihash_md5 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.authentihash_md5>)

property authentihash\_md5 → bytes

Authentihash **MD5** value

#### [` authentihash_sha1 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.authentihash_sha1>)

property authentihash\_sha1 → bytes

Authentihash **SHA1** value

#### [` authentihash_sha256 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.authentihash_sha256>)

property authentihash\_sha256 → bytes

Authentihash **SHA-256** value

#### [` authentihash_sha512 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.authentihash_sha512>)

property authentihash\_sha512 → bytes

Authentihash **SHA-512** value

#### [` cert_dir `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.cert_dir>)

property cert\_dir → [lief.PE.DataDirectory](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") | None

Return the data directory associated with the certificate table (authenticode).

#### [` clear_debug `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.clear_debug>)

clear\_debug(*self*) → bool

Remove all debug info from the binary

#### [` codeview_pdb `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.codeview_pdb>)

property codeview\_pdb → [lief.PE.CodeViewPDB](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeViewPDB> "lief.PE.CodeViewPDB") | None

Return the [`CodeViewPDB`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeViewPDB> "lief.PE.CodeViewPDB") if present

#### [` coff_string_table `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.coff_string_table>)

property coff\_string\_table → lief.PE.Binary.it\_strings\_table

Iterator over the strings located in the COFF string table

#### [` compute_checksum `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.compute_checksum>)

compute\_checksum(*self*) → int

Re-compute the value of [`checksum`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.checksum> "lief.PE.OptionalHeader.checksum"). If both values do not match, it could mean that the binary has been modified after the compilation.

This value is computed by LIEF for the current binary object.

#### [` data_directories `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.data_directories>)

property data\_directories → lief.PE.Binary.it\_data\_directories

Return an iterator over the [`DataDirectory`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory")

#### [` data_directory `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.data_directory>)

data\_directory(*self*, *type: [lief.\_lief.PE.DataDirectory.TYPES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES> "lief._lief.PE.DataDirectory.TYPES")*) → [lief.\_lief.PE.DataDirectory](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief._lief.PE.DataDirectory") | None

Return the [`DataDirectory`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") object from the given [`TYPES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES> "lief.PE.DataDirectory.TYPES") type

#### [` debug `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.debug>)

property debug → lief.PE.Binary.it\_debug

Return the [`Debug`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug> "lief.PE.Debug")

#### [` debug_dir `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.debug_dir>)

property debug\_dir → [lief.PE.DataDirectory](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") | None

Return the data directory associated with the debug table

#### [` delay_dir `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.delay_dir>)

property delay\_dir → [lief.PE.DataDirectory](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") | None

Return the data directory associated with delayed imports

#### [` delay_imports `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.delay_imports>)

property delay\_imports → lief.PE.Binary.it\_delay\_imports

Return an iterator over the [`DelayImport`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport> "lief.PE.DelayImport")

#### [` dos_header `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.dos_header>)

property dos\_header → [lief.PE.DosHeader](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader> "lief.PE.DosHeader")

Return the [`DosHeader`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader> "lief.PE.DosHeader")

#### [` dos_stub `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.dos_stub>)

property dos\_stub → memoryview

DOS stub content as a `list` of bytes

#### [` exception_functions `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.exception_functions>)

property exception\_functions → list[[lief.Function](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function> "lief.Function")]

[`Function`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function> "lief.Function") found in the Exception directory

#### [` exceptions `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.exceptions>)

property exceptions → lief.PE.Binary.it\_exceptions

Iterator over the exception (`_RUNTIME_FUNCTION`) functions.

> **Warning**
> 
> This property requires that the option [`lief.PE.ParserConfig.parse_exceptions`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig.parse_exceptions> "lief.PE.ParserConfig.parse_exceptions") was turned on (default is `False`) when parsing the binary.

#### [` exceptions_dir `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.exceptions_dir>)

property exceptions\_dir → [lief.PE.DataDirectory](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") | None

Return the data directory associated with the exceptions

#### [` export_dir `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.export_dir>)

property export\_dir → [lief.PE.DataDirectory](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") | None

Return the data directory associated with the export table

#### [` fill_address `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.fill_address>)

fill\_address(*self*, *address: int*, *size: int*, *value: int = 0*, *addr\_type: [lief.\_lief.Binary.VA\_TYPES](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Binary.VA_TYPES> "lief._lief.Binary.VA_TYPES") = VA\_TYPES.AUTO*) → None

Fill the content at the provided address with a fixed value

#### [` find_coff_string `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.find_coff_string>)

find\_coff\_string(*self*, *offset: int*) → [lief.\_lief.COFF.String](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.String> "lief._lief.COFF.String") | None

Try to find the COFF string at the given offset in the COFF string table.

> **Warning**
> 
> This offset must include the first 4 bytes holding the size of the table. Hence, the first string starts a the offset 4.

#### [` find_exception_at `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.find_exception_at>)

find\_exception\_at(*self*, *rva: int*) → [lief.\_lief.PE.ExceptionInfo](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExceptionInfo> "lief._lief.PE.ExceptionInfo") | None

Try to find the exception info at the given RVA.

> **Warning**
> 
> This property requires that the option [`lief.PE.ParserConfig.parse_exceptions`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig.parse_exceptions> "lief.PE.ParserConfig.parse_exceptions") was turned on (default is `False`) when parsing the binary.

#### [` functions `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.functions>)

property functions → list[[lief.Function](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function> "lief.Function")]

**All** [`Function`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Function> "lief.Function") found in the binary

#### [` get_delay_import `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.get_delay_import>)

get\_delay\_import(*self*, *import\_name: str*) → [lief.\_lief.PE.DelayImport](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport> "lief._lief.PE.DelayImport") | None

Return the [`DelayImport`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport> "lief.PE.DelayImport") from the given name or None if not found

#### [` get_export `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.get_export>)

get\_export(*self*) → [lief.\_lief.PE.Export](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export> "lief._lief.PE.Export") | None

Return the [`Export`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export> "lief.PE.Export") object

#### [` get_import `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.get_import>)

get\_import(*self*, *import\_name: str*) → [lief.\_lief.PE.Import](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import> "lief._lief.PE.Import") | None

Return the [`Import`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import> "lief.PE.Import") from the given name or None if it can’t be found

#### [` get_section `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.get_section>)

get\_section(*self*, *section\_name: str*) → [lief.\_lief.PE.Section](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief._lief.PE.Section") | None

Return the [`Section`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief.PE.Section") object from the given name or None if not found

#### [` has_configuration `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.has_configuration>)

property has\_configuration → bool

`True` if the current binary has [`LoadConfiguration`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration> "lief.PE.LoadConfiguration")

#### [` has_debug `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.has_debug>)

property has\_debug → bool

`True` if the current binary has a [`Debug`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug> "lief.PE.Debug") object

#### [` has_delay_import `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.has_delay_import>)

has\_delay\_import(*self*, *import\_name: str*) → bool

`True` if the binary imports the given library name

#### [` has_delay_imports `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.has_delay_imports>)

property has\_delay\_imports → bool

`True` if the current binary has delay imports ([`DelayImport`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport> "lief.PE.DelayImport"))

#### [` has_exceptions `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.has_exceptions>)

property has\_exceptions → bool

`True` if the current binary uses `Exceptions`

#### [` has_exports `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.has_exports>)

property has\_exports → bool

`True` if the current binary has a [`Export`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export> "lief.PE.Export") object

#### [` has_import `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.has_import>)

has\_import(*self*, *import\_name: str*) → bool

`True` if the binary imports the given library name

#### [` has_imports `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.has_imports>)

property has\_imports → bool

`True` if the current binary has imports ([`Import`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import> "lief.PE.Import"))

#### [` has_relocations `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.has_relocations>)

property has\_relocations → bool

`True` if the current binary uses [`Relocation`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Relocation> "lief.PE.Relocation")

#### [` has_resources `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.has_resources>)

property has\_resources → bool

`True` if the current binary has a `Resources` object

#### [` has_rich_header `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.has_rich_header>)

property has\_rich\_header → bool

`True` if the current binary has a [`RichHeader`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichHeader> "lief.PE.RichHeader") object

#### [` has_signatures `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.has_signatures>)

property has\_signatures → bool

`True` if the binary is signed with the PE authenticode ([`Signature`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature> "lief.PE.Signature"))

#### [` has_tls `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.has_tls>)

property has\_tls → bool

`True` if the current binary has a [`TLS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS> "lief.PE.TLS") object

#### [` header `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.header>)

property header → [lief.PE.Header](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header> "lief.PE.Header")

Return the [`Header`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header> "lief.PE.Header")

#### [` iat_dir `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.iat_dir>)

property iat\_dir → [lief.PE.DataDirectory](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") | None

Return the data directory associated with the IAT

#### [` import_dir `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.import_dir>)

property import\_dir → [lief.PE.DataDirectory](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") | None

Return the data directory associated with the import table

#### [` imports `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.imports>)

property imports → lief.PE.Binary.it\_imports

Return an iterator over the [`Import`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import> "lief.PE.Import") libraries

#### [` is_arm64ec `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.is_arm64ec>)

property is\_arm64ec → bool

True if this binary is compiled in ARM64EC mode (emulation compatible)

#### [` is_arm64x `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.is_arm64x>)

property is\_arm64x → bool

True if this binary is compiled in ARM64X mode (contains both ARM64 and ARM64EC

#### [` is_reproducible_build `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.is_reproducible_build>)

property is\_reproducible\_build → bool

`True` if the binary was compiled with a reproducible build directive ([`Debug`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug> "lief.PE.Debug"))

#### [` load_config_dir `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.load_config_dir>)

property load\_config\_dir → [lief.PE.DataDirectory](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") | None

Return the data directory associated with the load config

#### [` load_configuration `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.load_configuration>)

property load\_configuration → [lief.PE.LoadConfiguration](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration> "lief.PE.LoadConfiguration") | None

Return the [`LoadConfiguration`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration> "lief.PE.LoadConfiguration") object or None if not present

#### [` nested_pe_binary `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.nested_pe_binary>)

property nested\_pe\_binary → [lief.PE.Binary](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary") | None

If the current binary contains dynamic relocations (e.g. [`lief.PE.DynamicFixupARM64X`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64X> "lief.PE.DynamicFixupARM64X")), this function returns the **relocated** view of the current PE.

This can be used to get the alternative PE binary, targeting a different architecture.

> **Warning**
> 
> This property requires that the option [`lief.PE.ParserConfig.parse_arm64x_binary`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig.parse_arm64x_binary> "lief.PE.ParserConfig.parse_arm64x_binary") was turned on (default is `False`) when parsing the binary.

#### [` offset_to_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.offset_to_rva>)

offset\_to\_rva(*self*, *offset: int*) → int

Convert the given offset into a relative virtual address (RVA).

#### [` optional_header `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.optional_header>)

property optional\_header → [lief.PE.OptionalHeader](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader> "lief.PE.OptionalHeader")

Header that follows the [`header`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.header> "lief.PE.Binary.header"). It is named optional from the COFF specifications but it is mandatory in a PE file.

#### [` overlay `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.overlay>)

property overlay → memoryview

Return the overlay content as a `list` of bytes

#### [` overlay_offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.overlay_offset>)

property overlay\_offset → int

Return the original overlay offset

#### [` relocation_dir `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.relocation_dir>)

property relocation\_dir → [lief.PE.DataDirectory](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") | None

Return the data directory associated with the relocation table

#### [` relocations `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.relocations>)

property relocations → lief.PE.DynamicFixupGeneric.it\_relocations

Return an iterator over the [`Relocation`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Relocation> "lief.PE.Relocation")

#### [` remove `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.remove>)

remove(*self*, *section: [lief.\_lief.PE.Section](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief._lief.PE.Section")*, *clear: bool = False*) → None

Remove the [`Section`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief.PE.Section") given in first parameter

#### [` remove_all_imports `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.remove_all_imports>)

remove\_all\_imports(*self*) → None

Remove all imported libraries

#### [` remove_all_relocations `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.remove_all_relocations>)

remove\_all\_relocations(*self*) → None

#### [` remove_debug `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.remove_debug>)

remove\_debug(*self*, *entry: [lief.\_lief.PE.Debug](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug> "lief._lief.PE.Debug")*) → bool

Remove a specific debug entry

#### [` remove_import `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.remove_import>)

remove\_import(*self*, *name: str*) → bool

Remove the imported library with the given name

#### [` remove_tls `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.remove_tls>)

remove\_tls(*self*) → None

Remove the TLS from the binary

#### [` resources `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.resources>)

property resources → [lief.PE.ResourceNode](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief.PE.ResourceNode") | None

Return the [`ResourceNode`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief.PE.ResourceNode") tree or None if not present

#### [` resources_manager `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.resources_manager>)

property resources\_manager → [lief.PE.ResourcesManager](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager> "lief.PE.ResourcesManager") | [lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief.lief_errors")

Return the [`ResourcesManager`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager> "lief.PE.ResourcesManager") to manage resources

#### [` rich_header `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.rich_header>)

property rich\_header → [lief.PE.RichHeader](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichHeader> "lief.PE.RichHeader") | None

[`RichHeader`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichHeader> "lief.PE.RichHeader") object (if present)

#### [` rsrc_dir `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.rsrc_dir>)

property rsrc\_dir → [lief.PE.DataDirectory](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") | None

Return the data directory associated with the resources tree

#### [` rva_to_offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.rva_to_offset>)

rva\_to\_offset(*self*, *rva\_address: int*) → int

Convert a relative virtual address to an offset

The conversion is performed by looking for the section that encompasses the provided RVA.

#### [` section_from_offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.section_from_offset>)

section\_from\_offset(*self*, *offset: int*) → [lief.\_lief.PE.Section](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief._lief.PE.Section") | None

Return the [`Section`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief.PE.Section") which encompasses the provided offset. It returns None if a section can’t be found.

#### [` section_from_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.section_from_rva>)

section\_from\_rva(*self*, *rva: int*) → [lief.\_lief.PE.Section](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief._lief.PE.Section") | None

Return the [`Section`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief.PE.Section") which encompasses the provided **relative** virtual address. If a section can’t be found, it returns None.

#### [` sections `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.sections>)

property sections → lief.PE.Binary.it\_section

Return an iterator over the PE’s [`Section`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief.PE.Section")

#### [` set_export `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.set_export>)

set\_export(*self*, *arg: [lief.\_lief.PE.Export](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export> "lief._lief.PE.Export")*, */*) → [lief.\_lief.PE.Export](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export> "lief._lief.PE.Export")

Add or replace the export table

#### [` set_resources `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.set_resources>)

set\_resources(*self*, *new\_tree: [lief.\_lief.PE.ResourceNode](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief._lief.PE.ResourceNode")*) → [lief.\_lief.PE.ResourceNode](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief._lief.PE.ResourceNode") | None

Change or set the current resource tree with the new one provided in parameter.

#### [` signatures `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.signatures>)

property signatures → lief.PE.Binary.it\_const\_signatures

Return an iterator over the [`Signature`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature> "lief.PE.Signature") objects

#### [` sizeof_headers `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.sizeof_headers>)

property sizeof\_headers → int

Size of all the PE headers

#### [` symbols `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.symbols>)

property symbols → lief.PE.Binary.it\_symbols

Return binary’s `Symbol`

#### [` tls `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.tls>)

property tls → [lief.PE.TLS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS> "lief.PE.TLS") | None

[`TLS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS> "lief.PE.TLS") object (if present)

#### [` tls_dir `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.tls_dir>)

property tls\_dir → [lief.PE.DataDirectory](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") | None

Return the data directory associated with TLS

#### [` va_to_offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.va_to_offset>)

va\_to\_offset(*self*, *va\_address: int*) → int

Convert an **absolute** virtual address into an offset

See: [`rva_to_offset()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.rva_to_offset> "lief.PE.Binary.rva_to_offset")

#### [` verify_signatureverify_signature `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.verify_signature>)

verify\_signature(*self*, *checks: [lief.\_lief.PE.Signature.VERIFICATION\_CHECKS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_CHECKS> "lief._lief.PE.Signature.VERIFICATION_CHECKS") = VERIFICATION\_CHECKS.DEFAULT*) → [lief.\_lief.PE.Signature.VERIFICATION\_FLAGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS> "lief._lief.PE.Signature.VERIFICATION_FLAGS")

**verify\_signature(*self*, *signature: [lief.\_lief.PE.Signature](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature> "lief._lief.PE.Signature")*, *checks: [lief.\_lief.PE.Signature.VERIFICATION\_CHECKS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_CHECKS> "lief._lief.PE.Signature.VERIFICATION_CHECKS") = VERIFICATION\_CHECKS.DEFAULT*) → [lief.\_lief.PE.Signature.VERIFICATION\_FLAGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS> "lief._lief.PE.Signature.VERIFICATION_FLAGS")**

Overloaded function.

1. `verify_signature(self, checks: lief._lief.PE.Signature.VERIFICATION_CHECKS = VERIFICATION_CHECKS.DEFAULT) -> lief._lief.PE.Signature.VERIFICATION_FLAGS`

   > Verify the binary against the embedded signature(s) (if any)
   >
   > First off, it checks that the embedded signatures are correct (c.f. [`lief.PE.Signature.check()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.check> "lief.PE.Signature.check")) and then it checks that the authentihash matches [`lief.PE.ContentInfo.digest`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.digest> "lief.PE.ContentInfo.digest")
   >
   > One can tweak the verification process with the [`lief.PE.Signature.VERIFICATION_CHECKS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_CHECKS> "lief.PE.Signature.VERIFICATION_CHECKS") flags
   >
   > > **See also**
   > > 
   > > [`lief.PE.Signature.check()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.check> "lief.PE.Signature.check")
2. `verify_signature(self, signature: lief._lief.PE.Signature, checks: lief._lief.PE.Signature.VERIFICATION_CHECKS = VERIFICATION_CHECKS.DEFAULT) -> lief._lief.PE.Signature.VERIFICATION_FLAGS`

   > Verify the binary with the Signature object provided in the first parameter It can be used to verify a detached signature:
   >
   > ```python
   > detached = lief.PE.Signature.parse("sig.pkcs7")
   > binary.verify_signature(detached)
   > ```

#### [` virtual_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.virtual_size>)

property virtual\_size → int

Return the binary’s virtual size.

This value should match [`sizeof_image`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.sizeof_image> "lief.PE.OptionalHeader.sizeof_image")

#### [` writewrite `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.write>)

write(*self*, *output\_path: str | os.PathLike*) → None

**write(*self*, *output\_path: str | os.PathLike*, *config: [lief.\_lief.PE.Builder.config\_t](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t> "lief._lief.PE.Builder.config_t")*) → None**

Overloaded function.

1. `write(self, output_path: Union[str | os.PathLike]) -> None`

Build the binary and write the result in the given `output` file

2. `write(self, output_path: Union[str | os.PathLike], config: lief._lief.PE.Builder.config_t) -> None`

Build the binary with the given config and write the result in the given `output` file

#### [` write_to_byteswrite_to_bytes `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.write_to_bytes>)

write\_to\_bytes(*self*, *config: [lief.\_lief.PE.Builder.config\_t](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t> "lief._lief.PE.Builder.config_t")*) → bytes

**write\_to\_bytes(*self*) → bytes**

---

## [Dos Header](<https://lief.re/doc/latest/formats/pe/python.html#dos-header>)

### [` lief.PE.DosHeader `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader>)

class lief.PE.DosHeader

Bases: `Object`

Class which represents the DosHeader, the **first** structure present at the beginning of a PE file.

Most of the attributes of this structures are not relevant, except [`addressof_new_exeheader`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.addressof_new_exeheader> "lief.PE.DosHeader.addressof_new_exeheader")

#### [` addressof_new_exeheader `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.addressof_new_exeheader>)

property addressof\_new\_exeheader → int

#### [` addressof_relocation_table `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.addressof_relocation_table>)

property addressof\_relocation\_table → int

#### [` checksum `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.checksum>)

property checksum → int

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.copy>)

copy(*self*) → [lief.\_lief.PE.DosHeader](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader> "lief._lief.PE.DosHeader")

Duplicate the current instance of this object

#### [` create `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.create>)

create(*arg: [lief.PE.PE\_TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PE_TYPE> "lief.PE.PE_TYPE")*) → [lief.PE.DosHeader](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader> "lief.PE.DosHeader") = &lt;nanobind.nb\_func object&gt;

#### [` file_size_in_pages `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.file_size_in_pages>)

property file\_size\_in\_pages → int

#### [` header_size_in_paragraphs `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.header_size_in_paragraphs>)

property header\_size\_in\_paragraphs → int

#### [` initial_ip `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.initial_ip>)

property initial\_ip → int

#### [` initial_relative_cs `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.initial_relative_cs>)

property initial\_relative\_cs → int

#### [` initial_relative_ss `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.initial_relative_ss>)

property initial\_relative\_ss → int

#### [` initial_sp `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.initial_sp>)

property initial\_sp → int

#### [` magic `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.magic>)

property magic → int

#### [` maximum_extra_paragraphs `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.maximum_extra_paragraphs>)

property maximum\_extra\_paragraphs → int

#### [` minimum_extra_paragraphs `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.minimum_extra_paragraphs>)

property minimum\_extra\_paragraphs → int

#### [` numberof_relocation `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.numberof_relocation>)

property numberof\_relocation → int

#### [` oem_id `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.oem_id>)

property oem\_id → int

#### [` oem_info `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.oem_info>)

property oem\_info → int

#### [` overlay_number `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.overlay_number>)

property overlay\_number → int

#### [` used_bytes_in_last_page `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader.used_bytes_in_last_page>)

property used\_bytes\_in\_last\_page → int

---

## [Header](<https://lief.re/doc/latest/formats/pe/python.html#header>)

### [` lief.PE.Header `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header>)

class lief.PE.Header

Bases: `Object`

Class that represents the PE header (which follows the [`lief.PE.DosHeader`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DosHeader> "lief.PE.DosHeader"))

#### [` CHARACTERISTICS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS>)

class CHARACTERISTICS(*\*values*)

Bases: `Flag`

##### [` AGGRESSIVE_WS_TRIM `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS.AGGRESSIVE_WS_TRIM>)

AGGRESSIVE\_WS\_TRIM = 16

##### [` BYTES_REVERSED_HI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS.BYTES_REVERSED_HI>)

BYTES\_REVERSED\_HI = 32768

##### [` BYTES_REVERSED_LO `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS.BYTES_REVERSED_LO>)

BYTES\_REVERSED\_LO = 128

##### [` DEBUG_STRIPPED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS.DEBUG_STRIPPED>)

DEBUG\_STRIPPED = 512

##### [` DLL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS.DLL>)

DLL = 8192

##### [` EXECUTABLE_IMAGE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS.EXECUTABLE_IMAGE>)

EXECUTABLE\_IMAGE = 2

##### [` LARGE_ADDRESS_AWARE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS.LARGE_ADDRESS_AWARE>)

LARGE\_ADDRESS\_AWARE = 32

##### [` LINE_NUMS_STRIPPED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS.LINE_NUMS_STRIPPED>)

LINE\_NUMS\_STRIPPED = 4

##### [` LOCAL_SYMS_STRIPPED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS.LOCAL_SYMS_STRIPPED>)

LOCAL\_SYMS\_STRIPPED = 8

##### [` NEED_32BIT_MACHINE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS.NEED_32BIT_MACHINE>)

NEED\_32BIT\_MACHINE = 256

##### [` NET_RUN_FROM_SWAP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS.NET_RUN_FROM_SWAP>)

NET\_RUN\_FROM\_SWAP = 2048

##### [` RELOCS_STRIPPED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS.RELOCS_STRIPPED>)

RELOCS\_STRIPPED = 1

##### [` REMOVABLE_RUN_FROM_SWAP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS.REMOVABLE_RUN_FROM_SWAP>)

REMOVABLE\_RUN\_FROM\_SWAP = 1024

##### [` SYSTEM `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS.SYSTEM>)

SYSTEM = 4096

##### [` UP_SYSTEM_ONLY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS.UP_SYSTEM_ONLY>)

UP\_SYSTEM\_ONLY = 16384

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS.from_value>)

from\_value(*arg: int*) → [lief.PE.Header.CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS> "lief.PE.Header.CHARACTERISTICS") = &lt;nanobind.nb\_func object&gt;

#### [` MACHINE_TYPES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES>)

class MACHINE\_TYPES(*\*values*)

Bases: `Enum`

##### [` ALPHA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.ALPHA>)

ALPHA = 388

##### [` ALPHA64 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.ALPHA64>)

ALPHA64 = 644

##### [` AM33 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.AM33>)

AM33 = 467

##### [` AMD64 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.AMD64>)

AMD64 = 34404

##### [` ARM `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.ARM>)

ARM = 448

##### [` ARM64 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.ARM64>)

ARM64 = 43620

##### [` ARM64EC `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.ARM64EC>)

ARM64EC = 42561

##### [` ARM64X `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.ARM64X>)

ARM64X = 42574

##### [` ARMNT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.ARMNT>)

ARMNT = 452

##### [` CHPE_X86 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.CHPE_X86>)

CHPE\_X86 = 14948

##### [` EBC `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.EBC>)

EBC = 3772

##### [` I386 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.I386>)

I386 = 332

##### [` IA64 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.IA64>)

IA64 = 512

##### [` LOONGARCH32 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.LOONGARCH32>)

LOONGARCH32 = 25138

##### [` LOONGARCH64 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.LOONGARCH64>)

LOONGARCH64 = 25188

##### [` M32R `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.M32R>)

M32R = 36929

##### [` MIPS16 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.MIPS16>)

MIPS16 = 614

##### [` MIPSFPU `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.MIPSFPU>)

MIPSFPU = 870

##### [` MIPSFPU16 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.MIPSFPU16>)

MIPSFPU16 = 1126

##### [` POWERPC `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.POWERPC>)

POWERPC = 496

##### [` POWERPCBE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.POWERPCBE>)

POWERPCBE = 498

##### [` POWERPCFP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.POWERPCFP>)

POWERPCFP = 497

##### [` R4000 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.R4000>)

R4000 = 358

##### [` SH3 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.SH3>)

SH3 = 418

##### [` SH3DSP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.SH3DSP>)

SH3DSP = 419

##### [` SH4 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.SH4>)

SH4 = 422

##### [` SH5 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.SH5>)

SH5 = 424

##### [` THUMB `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.THUMB>)

THUMB = 450

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.UNKNOWN>)

UNKNOWN = 0

##### [` WCEMIPSV2 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.WCEMIPSV2>)

WCEMIPSV2 = 361

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES.from_value>)

from\_value(*arg: int*) → [lief.PE.Header.MACHINE\_TYPES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES> "lief.PE.Header.MACHINE_TYPES") = &lt;nanobind.nb\_func object&gt;

#### [` add_characteristic `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.add_characteristic>)

add\_characteristic(*self*, *characteristic: [lief.\_lief.PE.Header.CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS> "lief._lief.PE.Header.CHARACTERISTICS")*) → None

Add the given [`CHARACTERISTICS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS> "lief.PE.Header.CHARACTERISTICS") to the header

#### [` characteristics `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.characteristics>)

property characteristics → int

The [`CHARACTERISTICS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS> "lief.PE.Header.CHARACTERISTICS") that indicate the attributes of the file.

#### [` characteristics_list `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.characteristics_list>)

property characteristics\_list → list[[lief.PE.Header.CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS> "lief.PE.Header.CHARACTERISTICS")]

Return the [`CHARACTERISTICS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS> "lief.PE.Header.CHARACTERISTICS") as a `list`

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.copy>)

copy(*self*) → [lief.\_lief.PE.Header](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header> "lief._lief.PE.Header")

Duplicate the current instance of this object

#### [` create `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.create>)

create(*type: [lief.PE.PE\_TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PE_TYPE> "lief.PE.PE_TYPE")*) → [lief.PE.Header](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header> "lief.PE.Header") = &lt;nanobind.nb\_func object&gt;

#### [` has_characteristic `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.has_characteristic>)

has\_characteristic(*self*, *characteristic: [lief.\_lief.PE.Header.CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS> "lief._lief.PE.Header.CHARACTERISTICS")*) → bool

`True` if the header has the given [`CHARACTERISTICS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS> "lief.PE.Header.CHARACTERISTICS")

#### [` machine `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.machine>)

property machine → [lief.PE.Header.MACHINE\_TYPES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES> "lief.PE.Header.MACHINE_TYPES")

The target machine architecture ([`MACHINE_TYPES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.MACHINE_TYPES> "lief.PE.Header.MACHINE_TYPES"))

#### [` numberof_sections `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.numberof_sections>)

property numberof\_sections → int

Number of sections in the binary

#### [` numberof_symbols `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.numberof_symbols>)

property numberof\_symbols → int

The number of entries in the symbol table. This data can be used to locate the string table which immediately follows the symbol table.

This value should be zero for an image because COFF debugging information is deprecated.

#### [` pointerto_symbol_table `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.pointerto_symbol_table>)

property pointerto\_symbol\_table → int

The file offset of the COFF symbol table, or zero if no COFF symbol table is present.

This value should be zero for an image because COFF debugging information is deprecated.

#### [` remove_characteristic `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.remove_characteristic>)

remove\_characteristic(*self*, *characteristic: [lief.\_lief.PE.Header.CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS> "lief._lief.PE.Header.CHARACTERISTICS")*) → None

Remove the given [`CHARACTERISTICS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.CHARACTERISTICS> "lief.PE.Header.CHARACTERISTICS") from the header

#### [` signature `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.signature>)

property signature → list[int]

Signature (or magic byte) of the header. It must be: `PE\0\0`

#### [` sizeof_optional_header `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.sizeof_optional_header>)

property sizeof\_optional\_header → int

Size of the [`OptionalHeader`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader> "lief.PE.OptionalHeader") **AND** the data directories which follows this header.

This value is equivalent to: `sizeof(pe_optional_header) + NB_DATA_DIR * sizeof(data_directory)`

This size **should** be either:

> - 0xE0 (224) for a PE32 (32 bits)
> - 0xF0 (240) for a PE32+ (64 bits)

#### [` time_date_stamps `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Header.time_date_stamps>)

property time\_date\_stamps → int

The low 32 bits of the number of seconds since 00:00 January 1, 1970 that indicates when the file was created.

---

## [Optional Header](<https://lief.re/doc/latest/formats/pe/python.html#optional-header>)

### [` lief.PE.OptionalHeader `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader>)

class lief.PE.OptionalHeader

Bases: `Object`

Class which represents the PE OptionalHeader structure.

#### [` DLL_CHARACTERISTICS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS>)

class DLL\_CHARACTERISTICS(*\*values*)

Bases: `IntFlag`

##### [` APPCONTAINER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS.APPCONTAINER>)

APPCONTAINER = 4096

##### [` DYNAMIC_BASE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS.DYNAMIC_BASE>)

DYNAMIC\_BASE = 64

##### [` FORCE_INTEGRITY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS.FORCE_INTEGRITY>)

FORCE\_INTEGRITY = 128

##### [` GUARD_CF `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS.GUARD_CF>)

GUARD\_CF = 16384

##### [` HIGH_ENTROPY_VA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS.HIGH_ENTROPY_VA>)

HIGH\_ENTROPY\_VA = 32

##### [` NO_BIND `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS.NO_BIND>)

NO\_BIND = 2048

##### [` NO_ISOLATION `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS.NO_ISOLATION>)

NO\_ISOLATION = 512

##### [` NO_SEH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS.NO_SEH>)

NO\_SEH = 1024

##### [` NX_COMPAT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS.NX_COMPAT>)

NX\_COMPAT = 256

##### [` TERMINAL_SERVER_AWARE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS.TERMINAL_SERVER_AWARE>)

TERMINAL\_SERVER\_AWARE = 32768

##### [` WDM_DRIVER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS.WDM_DRIVER>)

WDM\_DRIVER = 8192

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS.from_value>)

from\_value(*arg: int*) → [lief.PE.OptionalHeader.DLL\_CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS> "lief.PE.OptionalHeader.DLL_CHARACTERISTICS") = &lt;nanobind.nb\_func object&gt;

#### [` SUBSYSTEM `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM>)

class SUBSYSTEM(*\*values*)

Bases: `Enum`

##### [` EFI_APPLICATION `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM.EFI_APPLICATION>)

EFI\_APPLICATION = 10

##### [` EFI_BOOT_SERVICE_DRIVER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM.EFI_BOOT_SERVICE_DRIVER>)

EFI\_BOOT\_SERVICE\_DRIVER = 11

##### [` EFI_ROM `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM.EFI_ROM>)

EFI\_ROM = 13

##### [` EFI_RUNTIME_DRIVER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM.EFI_RUNTIME_DRIVER>)

EFI\_RUNTIME\_DRIVER = 12

##### [` NATIVE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM.NATIVE>)

NATIVE = 1

##### [` NATIVE_WINDOWS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM.NATIVE_WINDOWS>)

NATIVE\_WINDOWS = 8

##### [` OS2_CUI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM.OS2_CUI>)

OS2\_CUI = 5

##### [` POSIX_CUI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM.POSIX_CUI>)

POSIX\_CUI = 7

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM.UNKNOWN>)

UNKNOWN = 0

##### [` WINDOWS_BOOT_APPLICATION `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM.WINDOWS_BOOT_APPLICATION>)

WINDOWS\_BOOT\_APPLICATION = 16

##### [` WINDOWS_CE_GUI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM.WINDOWS_CE_GUI>)

WINDOWS\_CE\_GUI = 9

##### [` WINDOWS_CUI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM.WINDOWS_CUI>)

WINDOWS\_CUI = 3

##### [` WINDOWS_GUI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM.WINDOWS_GUI>)

WINDOWS\_GUI = 2

##### [` XBOX `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM.XBOX>)

XBOX = 14

##### [` XBOX_CODE_CATALOG `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM.XBOX_CODE_CATALOG>)

XBOX\_CODE\_CATALOG = 17

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM.from_value>)

from\_value(*arg: int*) → [lief.PE.OptionalHeader.SUBSYSTEM](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM> "lief.PE.OptionalHeader.SUBSYSTEM") = &lt;nanobind.nb\_func object&gt;

#### [` add `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.add>)

add(*self*, *characteristic: [lief.\_lief.PE.OptionalHeader.DLL\_CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS> "lief._lief.PE.OptionalHeader.DLL_CHARACTERISTICS")*) → None

Add the given [`DLL_CHARACTERISTICS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS> "lief.PE.OptionalHeader.DLL_CHARACTERISTICS")

#### [` addressof_entrypoint `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.addressof_entrypoint>)

property addressof\_entrypoint → int

The address of the entry point relative to the image base when the executable file is loaded into memory. For program images, this is the starting address. For device drivers, this is the address of the initialization function.

An entry point is optional for DLLs. When no entry point is present, this field must be zero.

#### [` baseof_code `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.baseof_code>)

property baseof\_code → int

Address relative to the imagebase where the binary’s code starts

#### [` baseof_data `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.baseof_data>)

property baseof\_data → int

Address relative to the imagebase where the binary’s data starts.

> **Warning**
> 
> This value is not present for `PE64` files

#### [` checksum `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.checksum>)

property checksum → int

The image file checksum. The algorithm for computing the checksum is incorporated into `IMAGHELP.DLL`. The following are checked for validation at load time all **drivers**, any **DLL loaded at boot** time, and any **DLL** that is loaded into a **critical** Windows process.

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.copy>)

copy(*self*) → [lief.\_lief.PE.OptionalHeader](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader> "lief._lief.PE.OptionalHeader")

Duplicate the current instance of this object

#### [` create `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.create>)

create(*type: [lief.PE.PE\_TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PE_TYPE> "lief.PE.PE_TYPE")*) → [lief.PE.OptionalHeader](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader> "lief.PE.OptionalHeader") = &lt;nanobind.nb\_func object&gt;

#### [` dll_characteristics `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.dll_characteristics>)

property dll\_characteristics → int

Some characteristics ([`DLL_CHARACTERISTICS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS> "lief.PE.OptionalHeader.DLL_CHARACTERISTICS")) of the underlying binary like the support of the PIE.

The prefix `dll` comes from the official PE specifications but these characteristics are also used for **executables**

#### [` dll_characteristics_lists `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.dll_characteristics_lists>)

property dll\_characteristics\_lists → list[[lief.PE.OptionalHeader.DLL\_CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS> "lief.PE.OptionalHeader.DLL_CHARACTERISTICS")]

[`dll_characteristics`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.dll_characteristics> "lief.PE.OptionalHeader.dll_characteristics") as a list of [`DLL_CHARACTERISTICS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS> "lief.PE.OptionalHeader.DLL_CHARACTERISTICS")

#### [` file_alignment `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.file_alignment>)

property file\_alignment → int

The alignment factor (in bytes) that is used to align the raw data of sections in the image file. The value should be a **power of 2** between 512 and 64K, inclusive. The default value is 512. If the [`section_alignment`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.section_alignment> "lief.PE.OptionalHeader.section_alignment") is less than the architecture’s page size, then [`file_alignment`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.file_alignment> "lief.PE.OptionalHeader.file_alignment") must match [`section_alignment`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.section_alignment> "lief.PE.OptionalHeader.section_alignment").

#### [` has `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.has>)

has(*self*, *characteristics: [lief.\_lief.PE.OptionalHeader.DLL\_CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS> "lief._lief.PE.OptionalHeader.DLL_CHARACTERISTICS")*) → bool

`True` if the given [`DLL_CHARACTERISTICS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS> "lief.PE.OptionalHeader.DLL_CHARACTERISTICS") is in the [`dll_characteristics`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.dll_characteristics> "lief.PE.OptionalHeader.dll_characteristics")

#### [` imagebase `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.imagebase>)

property imagebase → int

The preferred base address when mapping the binary in memory

#### [` loader_flags `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.loader_flags>)

property loader\_flags → int

According to the PE specifications, this value is *reserved* and **should** be 0.

#### [` magic `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.magic>)

property magic → [lief.PE.PE\_TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PE_TYPE> "lief.PE.PE_TYPE")

Magic value ([`PE_TYPE`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PE_TYPE> "lief.PE.PE_TYPE")) that identifies a `PE32` from a `PE64`

#### [` major_image_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.major_image_version>)

property major\_image\_version → int

The major version number of the image.

#### [` major_linker_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.major_linker_version>)

property major\_linker\_version → int

The linker major version number

#### [` major_operating_system_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.major_operating_system_version>)

property major\_operating\_system\_version → int

The major version number of the required operating system.

#### [` major_subsystem_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.major_subsystem_version>)

property major\_subsystem\_version → int

The major version number of the subsystem.

#### [` minor_image_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.minor_image_version>)

property minor\_image\_version → int

The minor version number of the image.

#### [` minor_linker_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.minor_linker_version>)

property minor\_linker\_version → int

The linker minor version number

#### [` minor_operating_system_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.minor_operating_system_version>)

property minor\_operating\_system\_version → int

The minor version number of the required operating system.

#### [` minor_subsystem_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.minor_subsystem_version>)

property minor\_subsystem\_version → int

The minor version number of the subsystem

#### [` numberof_rva_and_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.numberof_rva_and_size>)

property numberof\_rva\_and\_size → int

The number of [`DataDirectory`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") that follow this header

#### [` remove `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.remove>)

remove(*self*, *characteristic: [lief.\_lief.PE.OptionalHeader.DLL\_CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS> "lief._lief.PE.OptionalHeader.DLL_CHARACTERISTICS")*) → None

Remove the given [`DLL_CHARACTERISTICS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.DLL_CHARACTERISTICS> "lief.PE.OptionalHeader.DLL_CHARACTERISTICS")

#### [` section_alignment `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.section_alignment>)

property section\_alignment → int

The alignment (in bytes) of sections when they are loaded into memory. It must be greater than or equal to [`file_alignment`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.file_alignment> "lief.PE.OptionalHeader.file_alignment") and the default is the page size for the architecture.

#### [` sizeof_code `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.sizeof_code>)

property sizeof\_code → int

The size of the code `.text` section or the sum of all the sections that contain code (ie. [`Section`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief.PE.Section") with the flag [`CNT_CODE`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.CNT_CODE> "lief.PE.Section.CHARACTERISTICS.CNT_CODE"))

#### [` sizeof_headers `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.sizeof_headers>)

property sizeof\_headers → int

The combined size of an MS-DOS stub, PE header, and section headers rounded up to a multiple of [`file_alignment`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.file_alignment> "lief.PE.OptionalHeader.file_alignment").

#### [` sizeof_heap_commit `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.sizeof_heap_commit>)

property sizeof\_heap\_commit → int

The size of the local heap space to commit.

#### [` sizeof_heap_reserve `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.sizeof_heap_reserve>)

property sizeof\_heap\_reserve → int

The size of the local heap space to reserve.

Only [`sizeof_heap_commit`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.sizeof_heap_commit> "lief.PE.OptionalHeader.sizeof_heap_commit") is available one page at a time until the reserve size is reached.

#### [` sizeof_image `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.sizeof_image>)

property sizeof\_image → int

The size (in bytes) of the image, including all headers, as the image is loaded in memory. It must be a multiple of [`section_alignment`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.section_alignment> "lief.PE.OptionalHeader.section_alignment") and should match [`virtual_size`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.virtual_size> "lief.PE.Binary.virtual_size").

#### [` sizeof_initialized_data `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.sizeof_initialized_data>)

property sizeof\_initialized\_data → int

The size of the initialized data which are usually located in the `.data` section. If the initialized data are split across multiple sections, it is the sum of the sections.

The sections associated with the initialized data are usually identified with the flag [`CNT_INITIALIZED_DATA`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.CNT_INITIALIZED_DATA> "lief.PE.Section.CHARACTERISTICS.CNT_INITIALIZED_DATA")

#### [` sizeof_stack_commit `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.sizeof_stack_commit>)

property sizeof\_stack\_commit → int

The size of the stack to commit.

#### [` sizeof_stack_reserve `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.sizeof_stack_reserve>)

property sizeof\_stack\_reserve → int

The size of the stack to reserve.

Only [`sizeof_stack_commit`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.sizeof_stack_commit> "lief.PE.OptionalHeader.sizeof_stack_commit") is committed, the rest is made available one page at a time until the reserve size is reached.

#### [` sizeof_uninitialized_data `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.sizeof_uninitialized_data>)

property sizeof\_uninitialized\_data → int

The size of the uninitialized data which are usually located in the `.bss` section. If the uninitialized data are split across multiple sections, it is the sum of the sections.

The sections associated with the uninitialized data are usually identified with the flag [`CNT_UNINITIALIZED_DATA`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.CNT_UNINITIALIZED_DATA> "lief.PE.Section.CHARACTERISTICS.CNT_UNINITIALIZED_DATA")

#### [` subsystem `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.subsystem>)

property subsystem → [lief.PE.OptionalHeader.SUBSYSTEM](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM> "lief.PE.OptionalHeader.SUBSYSTEM")

Target subsystem ([`SUBSYSTEM`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.SUBSYSTEM> "lief.PE.OptionalHeader.SUBSYSTEM")) like Driver, XBox, Windows GUI, ..

#### [` win32_version_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.OptionalHeader.win32_version_value>)

property win32\_version\_value → int

Reserved, must be zero.

---

## [Data Directory](<https://lief.re/doc/latest/formats/pe/python.html#data-directory>)

### [` lief.PE.DataDirectory `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory>)

class lief.PE.DataDirectory(*self*)

Bases: `Object`

Class that represents a PE data directory entry

#### [` TYPES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES>)

class TYPES(*\*values*)

Bases: `Enum`

##### [` ARCHITECTURE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.ARCHITECTURE>)

ARCHITECTURE = 7

##### [` BASE_RELOCATION_TABLE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.BASE_RELOCATION_TABLE>)

BASE\_RELOCATION\_TABLE = 5

##### [` BOUND_IMPORT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.BOUND_IMPORT>)

BOUND\_IMPORT = 11

##### [` CERTIFICATE_TABLE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.CERTIFICATE_TABLE>)

CERTIFICATE\_TABLE = 4

##### [` CLR_RUNTIME_HEADER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.CLR_RUNTIME_HEADER>)

CLR\_RUNTIME\_HEADER = 14

##### [` DEBUG_DIR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.DEBUG_DIR>)

DEBUG\_DIR = 6

##### [` DELAY_IMPORT_DESCRIPTOR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.DELAY_IMPORT_DESCRIPTOR>)

DELAY\_IMPORT\_DESCRIPTOR = 13

##### [` EXCEPTION_TABLE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.EXCEPTION_TABLE>)

EXCEPTION\_TABLE = 3

##### [` EXPORT_TABLE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.EXPORT_TABLE>)

EXPORT\_TABLE = 0

##### [` GLOBAL_PTR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.GLOBAL_PTR>)

GLOBAL\_PTR = 8

##### [` IAT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.IAT>)

IAT = 12

##### [` IMPORT_TABLE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.IMPORT_TABLE>)

IMPORT\_TABLE = 1

##### [` LOAD_CONFIG_TABLE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.LOAD_CONFIG_TABLE>)

LOAD\_CONFIG\_TABLE = 10

##### [` RESERVED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.RESERVED>)

RESERVED = 15

##### [` RESOURCE_TABLE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.RESOURCE_TABLE>)

RESOURCE\_TABLE = 2

##### [` TLS_TABLE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.TLS_TABLE>)

TLS\_TABLE = 9

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.UNKNOWN>)

UNKNOWN = 16

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.from_value>)

from\_value(*arg: int*) → [lief.PE.DataDirectory.TYPES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES> "lief.PE.DataDirectory.TYPES") = &lt;nanobind.nb\_func object&gt;

#### [` content `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.content>)

property content → memoryview

Raw content (bytes) referenced by this data directory

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.copy>)

copy(*self*) → [lief.\_lief.PE.DataDirectory](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief._lief.PE.DataDirectory")

Duplicate the current instance of this object

#### [` has_section `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.has_section>)

property has\_section → bool

`True` if the current data directory is tied to a [`Section`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief.PE.Section")

#### [` rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.rva>)

property rva → int

**Relative** virtual address of the content associated with the current data directory

#### [` section `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.section>)

property section → [lief.PE.Section](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief.PE.Section") | None

[`Section`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief.PE.Section") associated with the current data directory or None if not linked

#### [` size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.size>)

property size → int

Size in bytes of the content associated with the current data directory

#### [` type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.type>)

property type → [lief.PE.DataDirectory.TYPES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES> "lief.PE.DataDirectory.TYPES")

Type ([`TYPES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES> "lief.PE.DataDirectory.TYPES")) of the current data directory

---

## [Section](<https://lief.re/doc/latest/formats/pe/python.html#section>)

![Inheritance diagram of lief._lief.PE.Section](https://lief.re/doc/latest/_images/inheritance-4ec5847f99e6746fb5ba5ed346b3612401634fa6.png)

### [` lief.PE.Sectionlief.PE.Sectionlief.PE.Section `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section>)

class lief.PE.Section(*self*)

**class lief.PE.Section(*self*, *name: str*, *content: collections.abc.Sequence[int]*)

**class lief.PE.Section(*self*, *name: str*)****

Bases: [`Section`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section> "lief._lief.Section")

Class which represents a PE section.

It extends the base class [`lief.Section`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Section> "lief.Section")

#### [` CHARACTERISTICS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS>)

class CHARACTERISTICS(*\*values*)

Bases: `Flag`

##### [` ALIGN_1024BYTES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.ALIGN_1024BYTES>)

ALIGN\_1024BYTES = 11534336

##### [` ALIGN_128BYTES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.ALIGN_128BYTES>)

ALIGN\_128BYTES = 8388608

##### [` ALIGN_16BYTES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.ALIGN_16BYTES>)

ALIGN\_16BYTES = 5242880

##### [` ALIGN_1BYTES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.ALIGN_1BYTES>)

ALIGN\_1BYTES = 1048576

##### [` ALIGN_2048BYTES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.ALIGN_2048BYTES>)

ALIGN\_2048BYTES = 12582912

##### [` ALIGN_256BYTES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.ALIGN_256BYTES>)

ALIGN\_256BYTES = 9437184

##### [` ALIGN_2BYTES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.ALIGN_2BYTES>)

ALIGN\_2BYTES = 2097152

##### [` ALIGN_32BYTES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.ALIGN_32BYTES>)

ALIGN\_32BYTES = 6291456

##### [` ALIGN_4096BYTES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.ALIGN_4096BYTES>)

ALIGN\_4096BYTES = 13631488

##### [` ALIGN_4BYTES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.ALIGN_4BYTES>)

ALIGN\_4BYTES = 3145728

##### [` ALIGN_512BYTES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.ALIGN_512BYTES>)

ALIGN\_512BYTES = 10485760

##### [` ALIGN_64BYTES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.ALIGN_64BYTES>)

ALIGN\_64BYTES = 7340032

##### [` ALIGN_8192BYTES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.ALIGN_8192BYTES>)

ALIGN\_8192BYTES = 14680064

##### [` ALIGN_8BYTES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.ALIGN_8BYTES>)

ALIGN\_8BYTES = 4194304

##### [` CNT_CODE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.CNT_CODE>)

CNT\_CODE = 32

##### [` CNT_INITIALIZED_DATA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.CNT_INITIALIZED_DATA>)

CNT\_INITIALIZED\_DATA = 64

##### [` CNT_UNINITIALIZED_DATA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.CNT_UNINITIALIZED_DATA>)

CNT\_UNINITIALIZED\_DATA = 128

##### [` GPREL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.GPREL>)

GPREL = 32768

##### [` LNK_COMDAT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.LNK_COMDAT>)

LNK\_COMDAT = 4096

##### [` LNK_INFO `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.LNK_INFO>)

LNK\_INFO = 512

##### [` LNK_NRELOC_OVFL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.LNK_NRELOC_OVFL>)

LNK\_NRELOC\_OVFL = 16777216

##### [` LNK_OTHER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.LNK_OTHER>)

LNK\_OTHER = 256

##### [` LNK_REMOVE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.LNK_REMOVE>)

LNK\_REMOVE = 2048

##### [` MEM_16BIT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.MEM_16BIT>)

MEM\_16BIT = 131072

##### [` MEM_DISCARDABLE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.MEM_DISCARDABLE>)

MEM\_DISCARDABLE = 33554432

##### [` MEM_EXECUTE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.MEM_EXECUTE>)

MEM\_EXECUTE = 536870912

##### [` MEM_LOCKED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.MEM_LOCKED>)

MEM\_LOCKED = 262144

##### [` MEM_NOT_CACHED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.MEM_NOT_CACHED>)

MEM\_NOT\_CACHED = 67108864

##### [` MEM_NOT_PAGED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.MEM_NOT_PAGED>)

MEM\_NOT\_PAGED = 134217728

##### [` MEM_PRELOAD `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.MEM_PRELOAD>)

MEM\_PRELOAD = 524288

##### [` MEM_PURGEABLE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.MEM_PURGEABLE>)

MEM\_PURGEABLE = 65536

##### [` MEM_READ `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.MEM_READ>)

MEM\_READ = 1073741824

##### [` MEM_SHARED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.MEM_SHARED>)

MEM\_SHARED = 268435456

##### [` MEM_WRITE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.MEM_WRITE>)

MEM\_WRITE = 2147483648

##### [` TYPE_NO_PAD `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.TYPE_NO_PAD>)

TYPE\_NO\_PAD = 8

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS.from_value>)

from\_value(*arg: int*) → [lief.PE.Section.CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS> "lief.PE.Section.CHARACTERISTICS") = &lt;nanobind.nb\_func object&gt;

#### [` characteristics `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.characteristics>)

property characteristics → int

The [`CHARACTERISTICS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS> "lief.PE.Section.CHARACTERISTICS") that describe the characteristics of the section

#### [` characteristics_lists `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.characteristics_lists>)

property characteristics\_lists → list[[lief.PE.Section.CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS> "lief.PE.Section.CHARACTERISTICS")]

[`characteristics`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.characteristics> "lief.PE.Section.characteristics") as a `list`

#### [` coff_string `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.coff_string>)

property coff\_string → [lief.COFF.String](<https://lief.re/doc/latest/formats/coff/python.html#lief.COFF.String> "lief.COFF.String") | None

Return the COFF string associated with the section’s name (or None)

This coff string is usually present for long section names whose length does not fit in the 8 bytes allocated by the PE format.

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.copy>)

copy(*self*) → [lief.\_lief.PE.Section](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief._lief.PE.Section")

Duplicate the current instance of this object

#### [` has_characteristic `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.has_characteristic>)

has\_characteristic(*self*, *characteristic: [lief.\_lief.PE.Section.CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS> "lief._lief.PE.Section.CHARACTERISTICS")*) → bool

`True` if the section has the given [`CHARACTERISTICS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.CHARACTERISTICS> "lief.PE.Section.CHARACTERISTICS")

#### [` is_discardable `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.is_discardable>)

property is\_discardable → bool

True if the section can be discarded as needed.

This is typically the case for debug-related sections.

#### [` numberof_line_numbers `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.numberof_line_numbers>)

property numberof\_line\_numbers → int

The number of line-number entries for the section. This value should be zero for an image because COFF debugging information is deprecated.

See: [`pointerto_line_numbers`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.pointerto_line_numbers> "lief.PE.Section.pointerto_line_numbers")

#### [` numberof_relocations `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.numberof_relocations>)

property numberof\_relocations → int

The number of relocation entries for the section.

See: [`pointerto_relocation`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.pointerto_relocation> "lief.PE.Section.pointerto_relocation")

#### [` padding `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.padding>)

property padding → bytes

Section padding content as bytes

#### [` pointerto_line_numbers `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.pointerto_line_numbers>)

property pointerto\_line\_numbers → int

The file pointer to the beginning of line-number entries for the section. This is set to zero if there are no COFF line numbers. This value should be zero for an image because COFF debugging information is deprecated and modern debug information relies on the PDB files.

#### [` pointerto_raw_data `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.pointerto_raw_data>)

property pointerto\_raw\_data → int

The offset of the section data in the PE file. Alias of `offset`

#### [` pointerto_relocation `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.pointerto_relocation>)

property pointerto\_relocation → int

The file pointer to the beginning of the COFF relocation entries for the section. This is set to zero for executable images or if there are no relocations.

For modern PE binaries, this value is usually set to 0 as the relocations are managed by [`Relocation`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Relocation> "lief.PE.Relocation").

#### [` sizeof_raw_data `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.sizeof_raw_data>)

property sizeof\_raw\_data → int

Alias of `size` (size of the data in the section)

#### [` virtual_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.virtual_size>)

property virtual\_size → int

The total size of the section when loaded into memory.

If this value is greater than [`sizeof_raw_data`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section.sizeof_raw_data> "lief.PE.Section.sizeof_raw_data"), the section is zero-padded.

---

## [Import](<https://lief.re/doc/latest/formats/pe/python.html#import>)

### [` lief.PE.Importlief.PE.Import `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import>)

class lief.PE.Import(*self*)

**class lief.PE.Import(*self*, *library\_name: str*)**

Bases: `Object`

Class that represents a PE import

Overloaded function.

1. `__init__(self) -> None`

Default constructor

2. `__init__(self, library_name: str) -> None`

Constructor from a library name

#### [` add_entryadd_entry `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import.add_entry>)

add\_entry(*self*, *entry: [lief.\_lief.PE.ImportEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry> "lief._lief.PE.ImportEntry")*) → [lief.\_lief.PE.ImportEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry> "lief._lief.PE.ImportEntry")

**add\_entry(*self*, *function\_name: str*) → [lief.\_lief.PE.ImportEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry> "lief._lief.PE.ImportEntry")**

Add an [`ImportEntry`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry> "lief.PE.ImportEntry") (function) to the current import

#### [` directory `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import.directory>)

property directory → [lief.PE.DataDirectory](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") | None

Return the [`DataDirectory`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") associated with this import.

It should be the one at index [`lief.PE.DataDirectory.TYPES.IMPORT_TABLE`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.IMPORT_TABLE> "lief.PE.DataDirectory.TYPES.IMPORT_TABLE"). It can return None if the Import directory can’t be resolved.

#### [` entries `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import.entries>)

property entries → lief.PE.Import.it\_entries

Iterator over the [`ImportEntry`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry> "lief.PE.ImportEntry") (functions)

#### [` forwarder_chain `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import.forwarder_chain>)

property forwarder\_chain → int

The index of the first forwarder reference

#### [` get_entry `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import.get_entry>)

get\_entry(*self*, *function\_name: str*) → [lief.\_lief.PE.ImportEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry> "lief._lief.PE.ImportEntry") | None

Return the [`ImportEntry`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry> "lief.PE.ImportEntry") with the given name or None if not found

#### [` get_function_rva_from_iat `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import.get_function_rva_from_iat>)

get\_function\_rva\_from\_iat(*self*, *function\_name: str*) → int | [lief.\_lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief._lief.lief_errors")

Return the relative virtual address of the given function within the *Import Address Table*

#### [` iat_directory `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import.iat_directory>)

property iat\_directory → [lief.PE.DataDirectory](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") | None

Return the [`DataDirectory`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") associated with the `IAT` table.

It should be the one at index [`lief.PE.DataDirectory.TYPES.IAT`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory.TYPES.IAT> "lief.PE.DataDirectory.TYPES.IAT"). It can return None if the IAT directory can’t be resolved.

#### [` import_address_table_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import.import_address_table_rva>)

property import\_address\_table\_rva → int

The RVA of the import address table (`IAT`). The content of this table is **identical** to the content of the Import Lookup Table (`ILT`) until the image is bound.

> **Warning**
> 
> This address could change when re-building the binary

#### [` import_lookup_table_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import.import_lookup_table_rva>)

property import\_lookup\_table\_rva → int

The RVA of the import lookup table. This table contains the [`name`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.name> "lief.PE.ImportEntry.name") or the [`ordinal`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.ordinal> "lief.PE.ImportEntry.ordinal") for all the imports.

#### [` name `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import.name>)

property name → str | bytes

Library name (e.g. `kernel32.dll`)

#### [` name_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import.name_rva>)

property name\_rva → int

The original name rva

#### [` remove_entryremove_entry `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import.remove_entry>)

remove\_entry(*self*, *name: str*) → bool

**remove\_entry(*self*, *ord: int*) → bool**

Overloaded function.

1. `remove_entry(self, name: str) -> bool`

   > Remove the import entry with the given name.
   >
   > Return True if the deletion succeeds, False otherwise
2. `remove_entry(self, ord: int) -> bool`

   > Remove the import entry with the given ordinal number
   >
   > Return True if the deletion succeeds, False otherwise

#### [` timedatestamp `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import.timedatestamp>)

property timedatestamp → int

The stamp that is set to zero until the image is bound.

After the image is bound, this field is set to the time/data stamp of the DLL

---

## [Import Entry](<https://lief.re/doc/latest/formats/pe/python.html#import-entry>)

![Inheritance diagram of lief._lief.PE.ImportEntry](https://lief.re/doc/latest/_images/inheritance-0d8847179a2a8791a1abb018ab960e38abe26ede.png)

### [` lief.PE.ImportEntrylief.PE.ImportEntrylief.PE.ImportEntry `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry>)

class lief.PE.ImportEntry(*self*)

**class lief.PE.ImportEntry(*self*, *import\_name: str*)

**class lief.PE.ImportEntry(*self*, *data: int*, *type: [lief.\_lief.PE.PE\_TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PE_TYPE> "lief._lief.PE.PE_TYPE")*)****

Bases: [`Symbol`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol> "lief._lief.Symbol")

Class that represents an entry (i.e. an import) in the import table ([`Import`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import> "lief.PE.Import")).

It extends the [`lief.Symbol`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol> "lief.Symbol") generic class that provides the [`lief.Symbol.name`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol.name> "lief.Symbol.name") and [`lief.Symbol.value`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol.value> "lief.Symbol.value")

Overloaded function.

1. `__init__(self) -> None`
2. `__init__(self, import_name: str) -> None`

Constructor from a [`name`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.name> "lief.PE.ImportEntry.name")

3. `__init__(self, data: int, type: lief._lief.PE.PE_TYPE) -> None`

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.copy>)

copy(*self*) → [lief.\_lief.PE.ImportEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry> "lief._lief.PE.ImportEntry")

Duplicate the current instance of this object

#### [` data `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.data>)

property data → int

Raw value

#### [` demangled_name `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.demangled_name>)

property demangled\_name → str

Demangled representation of the symbol or an empty string if it can’t be demangled.

#### [` hint `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.hint>)

property hint → int

Index into the [`lief.PE.Export.entries`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.entries> "lief.PE.Export.entries") that is used to speed-up the symbol resolution

#### [` iat_address `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.iat_address>)

property iat\_address → int

**Original** address of the entry in the Import Address Table

#### [` iat_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.iat_value>)

property iat\_value → int

Value of the current entry in the Import Address Table. It should match the lookup table value.

#### [` ilt_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.ilt_value>)

property ilt\_value → int

Original value in the import lookup table.

This value should match the [`iat_value`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.iat_value> "lief.PE.ImportEntry.iat_value")

#### [` is_ordinal `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.is_ordinal>)

property is\_ordinal → bool

`True` if it is an import by ordinal

#### [` name `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.name>)

property name → str | bytes

Import name if not ordinal

#### [` ordinal `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.ordinal>)

property ordinal → int

Ordinal value (if any). See: [`is_ordinal`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry.is_ordinal> "lief.PE.ImportEntry.is_ordinal")

---

## [Delay Import](<https://lief.re/doc/latest/formats/pe/python.html#delay-import>)

### [` lief.PE.DelayImport `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport>)

class lief.PE.DelayImport(*self*, *library\_name: str*)

Bases: `Object`

Class that represents a PE delay import

Constructor from a library name

#### [` attribute `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport.attribute>)

property attribute → int

Reserved and **should** be zero according to the PE specifications

#### [` biat `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport.biat>)

property biat → int

RVA of the **bound** delay-load import address table or 0 if the table does not exist.

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport.copy>)

copy(*self*) → [lief.\_lief.PE.DelayImport](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport> "lief._lief.PE.DelayImport")

Duplicate the current instance of this object

#### [` entries `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport.entries>)

property entries → lief.PE.DelayImport.it\_entries

Iterator over the [`DelayImportEntry`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImportEntry> "lief.PE.DelayImportEntry") (functions)

#### [` handle `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport.handle>)

property handle → int

The RVA of the module handle (in the `.data` section) It is used for storage by the routine that is supplied to manage delay-loading.

#### [` iat `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport.iat>)

property iat → int

RVA of the delay-load import address table.

#### [` name `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport.name>)

property name → str | bytes

Library name (e.g. `kernel32.dll`)

#### [` names_table `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport.names_table>)

property names\_table → int

RVA of the delay-load import names table. The content of this table has the same layout as the Import lookup table

#### [` timestamp `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport.timestamp>)

property timestamp → int

The timestamp of the DLL to which this image has been bound.

#### [` uiat `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport.uiat>)

property uiat → int

RVA of the **unload** delay-load import address table or 0 if the table does not exist.

According to the PE specifications, this table is an exact copy of the delay import address table that can be used to restore the original IAT in the case of unloading.

---

## [Delay Import Entry](<https://lief.re/doc/latest/formats/pe/python.html#delay-import-entry>)

![Inheritance diagram of lief._lief.PE.DelayImportEntry](https://lief.re/doc/latest/_images/inheritance-eb3b10b9aa120286296559dc2f4cc31831aae3ba.png)

### [` lief.PE.DelayImportEntry `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImportEntry>)

class lief.PE.DelayImportEntry(*self*)

Bases: [`Symbol`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol> "lief._lief.Symbol")

Class that represents an entry (i.e. a delay import) in the delay import table ([`DelayImport`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImport> "lief.PE.DelayImport")).

It extends the [`lief.Symbol`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol> "lief.Symbol") generic class that provides the [`lief.Symbol.name`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol.name> "lief.Symbol.name") and [`lief.Symbol.value`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol.value> "lief.Symbol.value")

The meaning of [`lief.Symbol.value`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol.value> "lief.Symbol.value") for this PE object is the address (as an RVA) in the IAT where the resolution should take place

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImportEntry.copy>)

copy(*self*) → [lief.\_lief.PE.DelayImportEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImportEntry> "lief._lief.PE.DelayImportEntry")

Duplicate the current instance of this object

#### [` data `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImportEntry.data>)

property data → int

Raw value

#### [` demangled_name `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImportEntry.demangled_name>)

property demangled\_name → str

Demangled representation of the symbol or an empty string if it can’t be demangled.

#### [` hint `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImportEntry.hint>)

property hint → int

Index into the [`lief.PE.Export.entries`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.entries> "lief.PE.Export.entries") that is used to speed-up the symbol resolution

#### [` iat_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImportEntry.iat_value>)

property iat\_value → int

Value of the current entry in the delay-loaded import address table. See: `iat`

#### [` is_ordinal `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImportEntry.is_ordinal>)

property is\_ordinal → bool

`True` if it is an import by ordinal

#### [` name `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImportEntry.name>)

property name → str | bytes

Delay import name if not ordinal

#### [` ordinal `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImportEntry.ordinal>)

property ordinal → int

Ordinal value (if any). See: [`is_ordinal`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DelayImportEntry.is_ordinal> "lief.PE.DelayImportEntry.is_ordinal")

---

## [TLS](<https://lief.re/doc/latest/formats/pe/python.html#tls>)

### [` lief.PE.TLS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS>)

class lief.PE.TLS(*self*)

Bases: `Object`

Class which represents the PE Thread Local Storage. This PE structure is also used to implement binary/library constructors.

Default constructor

#### [` add_callback `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.add_callback>)

add\_callback(*self*, *addr: int*) → [lief.\_lief.PE.TLS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS> "lief._lief.PE.TLS")

Add a new TLS callback

#### [` addressof_callbacks `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.addressof_callbacks>)

property addressof\_callbacks → int

Pointer to an array of TLS callback functions.

The array is null-terminated, so if there is no callback, this field points to 4 bytes set to zero.

See: [`callbacks`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.callbacks> "lief.PE.TLS.callbacks")

#### [` addressof_index `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.addressof_index>)

property addressof\_index → int

The location to receive the TLS index assigned by the loader. This location should be located in a writable section like `.data`.

#### [` addressof_raw_data `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.addressof_raw_data>)

property addressof\_raw\_data → tuple[int, int]

Tuple `(start address, end address)` of the TLS template. The template is a block of data that is used to initialize TLS data. The system copies all of this data each time a thread is created, so it must not be corrupted.

> **Note**
> 
> These addresses are not RVA. It is addresses for which there should be a base relocation in the `.reloc` section.

#### [` callbacks `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.callbacks>)

property callbacks → list[int]

List of the callbacks associated with the current TLS.

These functions are called before any other functions.

#### [` characteristics `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.characteristics>)

property characteristics → int

The four bits [23:20] describe alignment info. Possible values are those defined as `IMAGE_SCN_ALIGN_*`, which are also used to describe alignment of section in object files. The other 28 bits are reserved for future use.

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.copy>)

copy(*self*) → [lief.\_lief.PE.TLS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS> "lief._lief.PE.TLS")

Duplicate the current instance of this object

#### [` data_template `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.data_template>)

property data\_template → memoryview

The initial content used to initialize TLS data.

#### [` directory `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.directory>)

property directory → [lief.PE.DataDirectory](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") | None

[`DataDirectory`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") associated with the TLS object (or None if not linked)

#### [` has_data_directory `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.has_data_directory>)

property has\_data\_directory → bool

`True` if there is a [`DataDirectory`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DataDirectory> "lief.PE.DataDirectory") associated with the TLS object

#### [` has_section `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.has_section>)

property has\_section → bool

`True` if there is a [`Section`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief.PE.Section") associated with the TLS object

#### [` section `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.section>)

property section → [lief.PE.Section](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief.PE.Section") | None

[`Section`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief.PE.Section") associated with the TLS object (or None if not linked)

#### [` sizeof_zero_fill `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.sizeof_zero_fill>)

property sizeof\_zero\_fill → int

Size in bytes of the zeros to be *padded* after the data specified by [`data_template`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS.data_template> "lief.PE.TLS.data_template").

---

## [Relocation](<https://lief.re/doc/latest/formats/pe/python.html#relocation>)

### [` lief.PE.Relocation `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Relocation>)

class lief.PE.Relocation(*self*)

Bases: `Object`

Class which represents the *Base Relocation Block* Usually, we find this structure in the `.reloc` section

#### [` add_entry `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Relocation.add_entry>)

add\_entry(*self*, *new\_entry: [lief.\_lief.PE.RelocationEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry> "lief._lief.PE.RelocationEntry")*) → [lief.\_lief.PE.RelocationEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry> "lief._lief.PE.RelocationEntry")

Add a new [`RelocationEntry`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry> "lief.PE.RelocationEntry")

#### [` block_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Relocation.block_size>)

property block\_size → int

The total number of bytes in the base relocation block. `block_size = sizeof(BaseRelocationBlock) + nb_of_relocs * sizeof(uint16_t = RelocationEntry)`

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Relocation.copy>)

copy(*self*) → [lief.\_lief.PE.Relocation](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Relocation> "lief._lief.PE.Relocation")

Duplicate the current instance of this object

#### [` entries `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Relocation.entries>)

property entries → lief.PE.Relocation.it\_entries

Iterator over the [`RelocationEntry`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry> "lief.PE.RelocationEntry")

#### [` virtual_address `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Relocation.virtual_address>)

property virtual\_address → int

The RVA for which the offset of the relocation entries (RelocationEntry) is added

---

## [Relocation Entry](<https://lief.re/doc/latest/formats/pe/python.html#relocation-entry>)

![Inheritance diagram of lief._lief.PE.RelocationEntry](https://lief.re/doc/latest/_images/inheritance-95557131fc2837858595d2a195361e582d395a11.png)

### [` lief.PE.RelocationEntrylief.PE.RelocationEntry `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry>)

class lief.PE.RelocationEntry(*self*)

**class lief.PE.RelocationEntry(*self*, *arg0: int*, *arg1: [lief.\_lief.PE.RelocationEntry.BASE\_TYPES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES> "lief._lief.PE.RelocationEntry.BASE_TYPES")*, */*)**

Bases: [`Relocation`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Relocation> "lief._lief.Relocation")

Class which represents an entry of the PE relocation table.

It extends the [`lief.Relocation`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Relocation> "lief.Relocation") object to provide an uniform API across the file formats.

#### [` BASE_TYPES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES>)

class BASE\_TYPES(*\*values*)

Bases: `Enum`

##### [` ABS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.ABS>)

ABS = 0

##### [` ARM_MOV32 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.ARM_MOV32>)

ARM\_MOV32 = 517

##### [` DIR64 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.DIR64>)

DIR64 = 10

##### [` HIGH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.HIGH>)

HIGH = 1

##### [` HIGH3ADJ `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.HIGH3ADJ>)

HIGH3ADJ = 11

##### [` HIGHADJ `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.HIGHADJ>)

HIGHADJ = 4

##### [` HIGHLOW `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.HIGHLOW>)

HIGHLOW = 3

##### [` LOW `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.LOW>)

LOW = 2

##### [` MIPS_JMPADDR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.MIPS_JMPADDR>)

MIPS\_JMPADDR = 261

##### [` MIPS_JMPADDR16 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.MIPS_JMPADDR16>)

MIPS\_JMPADDR16 = 9

##### [` RISCV_HI20 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.RISCV_HI20>)

RISCV\_HI20 = 1029

##### [` RISCV_LOW12I `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.RISCV_LOW12I>)

RISCV\_LOW12I = 4103

##### [` RISCV_LOW12S `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.RISCV_LOW12S>)

RISCV\_LOW12S = 8200

##### [` SECTION `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.SECTION>)

SECTION = 6

##### [` THUMB_MOV32 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.THUMB_MOV32>)

THUMB\_MOV32 = 2055

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.UNKNOWN>)

UNKNOWN = -1

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES.from_value>)

from\_value(*arg: int*) → [lief.PE.RelocationEntry.BASE\_TYPES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES> "lief.PE.RelocationEntry.BASE_TYPES") = &lt;nanobind.nb\_func object&gt;

#### [` data `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.data>)

property data → int

Raw data of the relocation:

- The **high** 4 bits store the relocation [`type`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.type> "lief.PE.RelocationEntry.type")
- The **low** 12 bits store the relocation offset ([`position`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.position> "lief.PE.RelocationEntry.position"))

#### [` position `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.position>)

property position → int

Offset - relative to [`virtual_address`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Relocation.virtual_address> "lief.PE.Relocation.virtual_address") - where the relocation occurs

#### [` type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.type>)

property type → [lief.PE.RelocationEntry.BASE\_TYPES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RelocationEntry.BASE_TYPES> "lief.PE.RelocationEntry.BASE_TYPES")

Type of the relocation

---

## [Export](<https://lief.re/doc/latest/formats/pe/python.html#export>)

### [` lief.PE.Exportlief.PE.Export `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export>)

class lief.PE.Export(*self*)

**class lief.PE.Export(*self*, *name: str*, *entries: collections.abc.Sequence[[lief.\_lief.PE.ExportEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry> "lief._lief.PE.ExportEntry")]*)**

Bases: `Object`

Class which represents a PE Export

Overloaded function.

1. `__init__(self) -> None`

Default constructor

2. `__init__(self, name: str, entries: collections.abc.Sequence[lief._lief.PE.ExportEntry]) -> None`

Constructor from DLL name and its exports

#### [` add_entryadd_entry `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.add_entry>)

add\_entry(*self*, *exp: [lief.\_lief.PE.ExportEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry> "lief._lief.PE.ExportEntry")*) → [lief.\_lief.PE.ExportEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry> "lief._lief.PE.ExportEntry")

**add\_entry(*self*, *name: str*, *addr: int*) → [lief.\_lief.PE.ExportEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry> "lief._lief.PE.ExportEntry")**

Add the given export and return the newly created and added entry

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.copy>)

copy(*self*) → [lief.\_lief.PE.Export](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export> "lief._lief.PE.Export")

Duplicate the current instance of this object

#### [` entries `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.entries>)

property entries → lief.PE.Export.it\_entries

Iterator over the [`ExportEntry`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry> "lief.PE.ExportEntry")

#### [` export_addr_table_cnt `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.export_addr_table_cnt>)

property export\_addr\_table\_cnt → int

Number of entries in the export address table

#### [` export_addr_table_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.export_addr_table_rva>)

property export\_addr\_table\_rva → int

RVA of the export address table

#### [` export_flags `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.export_flags>)

property export\_flags → int

According to the PE specifications this value is reserved and should be set to 0

#### [` find_entryfind_entry `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.find_entry>)

find\_entry(*self*, *name: str*) → [lief.\_lief.PE.ExportEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry> "lief._lief.PE.ExportEntry") | None

**find\_entry(*self*, *ordinal: int*) → [lief.\_lief.PE.ExportEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry> "lief._lief.PE.ExportEntry") | None**

Overloaded function.

1. `find_entry(self, name: str) -> lief._lief.PE.ExportEntry | None`

Find the export with the given name

2. `find_entry(self, ordinal: int) -> lief._lief.PE.ExportEntry | None`

Find the export entry with the given ordinal number

#### [` find_entry_at `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.find_entry_at>)

find\_entry\_at(*self*, *rva\_addr: int*) → [lief.\_lief.PE.ExportEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry> "lief._lief.PE.ExportEntry") | None

Find the export entry at the provided RVA

#### [` major_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.major_version>)

property major\_version → int

The major version number (can be user-defined)

#### [` minor_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.minor_version>)

property minor\_version → int

The minor version number (can be user-defined)

#### [` name `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.name>)

property name → str | bytes

The name of the library exported (e.g. `KERNEL32.dll`)

#### [` name_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.name_rva>)

property name\_rva → int

Address of the ASCII DLL’s name (RVA)

#### [` names_addr_table_cnt `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.names_addr_table_cnt>)

property names\_addr\_table\_cnt → int

Number of exports by name

#### [` names_addr_table_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.names_addr_table_rva>)

property names\_addr\_table\_rva → int

RVA to the list of exported names

#### [` ord_addr_table_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.ord_addr_table_rva>)

property ord\_addr\_table\_rva → int

RVA to the list of exported ordinals

#### [` ordinal_base `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.ordinal_base>)

property ordinal\_base → int

The starting number for the exports. Usually this value is set to 1

#### [` remove_entryremove_entryremove_entry `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.remove_entry>)

remove\_entry(*self*, *entry: [lief.\_lief.PE.ExportEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry> "lief._lief.PE.ExportEntry")*) → bool

**remove\_entry(*self*, *name: str*) → bool

**remove\_entry(*self*, *rva: int*) → bool****

Overloaded function.

1. `remove_entry(self, entry: lief._lief.PE.ExportEntry) -> bool`

Remove the given export entry

2. `remove_entry(self, name: str) -> bool`

Remove the export entry with the given name

3. `remove_entry(self, rva: int) -> bool`

Remove the export entry with the given RVA

#### [` timestamp `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export.timestamp>)

property timestamp → int

The time and date that the export data was created

---

## [Export Entry](<https://lief.re/doc/latest/formats/pe/python.html#export-entry>)

![Inheritance diagram of lief._lief.PE.ExportEntry](https://lief.re/doc/latest/_images/inheritance-f7265a6267bcab14ecabc92c7abd26727b8d91dd.png)

### [` lief.PE.ExportEntrylief.PE.ExportEntry `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry>)

class lief.PE.ExportEntry(*self*)

**class lief.PE.ExportEntry(*self*, *name: str*, *addr: int*)**

Bases: [`Symbol`](<https://lief.re/doc/latest/api/binary_abstraction/python.html#lief.Symbol> "lief._lief.Symbol")

Class which represents a PE Export entry (cf. [`lief.PE.Export`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Export> "lief.PE.Export"))

Overloaded function.

1. `__init__(self) -> None`

Default constructor

2. `__init__(self, name: str, addr: int) -> None`

Constructor with export name and address

#### [` address `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry.address>)

property address → int

#### [` demangled_name `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry.demangled_name>)

property demangled\_name → str

Demangled representation of the symbol or an empty string if it can’t be demangled.

#### [` forward_information `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry.forward_information>)

property forward\_information → [lief.PE.ExportEntry.forward\_information\_t](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry.forward_information_t> "lief.PE.ExportEntry.forward_information_t")

#### [` forward_information_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry.forward_information_t>)

class forward\_information\_t

Bases: `object`

##### [` function `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry.forward_information_t.function>)

property function → str

##### [` library `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry.forward_information_t.library>)

property library → str

#### [` function_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry.function_rva>)

property function\_rva → int

#### [` is_extern `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry.is_extern>)

property is\_extern → bool

#### [` is_forwarded `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry.is_forwarded>)

property is\_forwarded → bool

#### [` name `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry.name>)

property name → str | bytes

#### [` ordinal `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry.ordinal>)

property ordinal → int

#### [` set_forward_info `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExportEntry.set_forward_info>)

set\_forward\_info(*self*, *lib: str*, *function: str*) → None

---

## [Signature](<https://lief.re/doc/latest/formats/pe/python.html#signature>)

### [` lief.PE.Signature `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature>)

class lief.PE.Signature

Bases: `Object`

#### [` VERIFICATION_CHECKS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_CHECKS>)

class VERIFICATION\_CHECKS(*\*values*)

Bases: `Flag`

Flags to tweak the verification process of the signature See [`lief.PE.Signature.check()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.check> "lief.PE.Signature.check") and [`lief.PE.Binary.verify_signature()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.verify_signature> "lief.PE.Binary.verify_signature")

##### [` DEFAULT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_CHECKS.DEFAULT>)

DEFAULT = 1

##### [` HASH_ONLY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_CHECKS.HASH_ONLY>)

HASH\_ONLY = 2

##### [` LIFETIME_SIGNING `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_CHECKS.LIFETIME_SIGNING>)

LIFETIME\_SIGNING = 4

##### [` SKIP_CERT_TIME `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_CHECKS.SKIP_CERT_TIME>)

SKIP\_CERT\_TIME = 8

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_CHECKS.from_value>)

from\_value(*arg: int*) → [lief.PE.Signature.VERIFICATION\_CHECKS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_CHECKS> "lief.PE.Signature.VERIFICATION_CHECKS") = &lt;nanobind.nb\_func object&gt;

#### [` VERIFICATION_FLAGS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS>)

class VERIFICATION\_FLAGS(*\*values*)

Bases: `Flag`

##### [` BAD_DIGEST `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS.BAD_DIGEST>)

BAD\_DIGEST = 128

##### [` BAD_SIGNATURE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS.BAD_SIGNATURE>)

BAD\_SIGNATURE = 256

##### [` CERT_EXPIRED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS.CERT_EXPIRED>)

CERT\_EXPIRED = 1024

##### [` CERT_FUTURE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS.CERT_FUTURE>)

CERT\_FUTURE = 2048

##### [` CERT_NOT_FOUND `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS.CERT_NOT_FOUND>)

CERT\_NOT\_FOUND = 8

##### [` CORRUPTED_AUTH_DATA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS.CORRUPTED_AUTH_DATA>)

CORRUPTED\_AUTH\_DATA = 32

##### [` CORRUPTED_CONTENT_INFO `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS.CORRUPTED_CONTENT_INFO>)

CORRUPTED\_CONTENT\_INFO = 16

##### [` INCONSISTENT_DIGEST_ALGORITHM `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS.INCONSISTENT_DIGEST_ALGORITHM>)

INCONSISTENT\_DIGEST\_ALGORITHM = 4

##### [` INVALID_SIGNER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS.INVALID_SIGNER>)

INVALID\_SIGNER = 1

##### [` MISSING_PKCS9_MESSAGE_DIGEST `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS.MISSING_PKCS9_MESSAGE_DIGEST>)

MISSING\_PKCS9\_MESSAGE\_DIGEST = 64

##### [` NO_SIGNATURE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS.NO_SIGNATURE>)

NO\_SIGNATURE = 512

##### [` OK `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS.OK>)

OK = 0

##### [` UNSUPPORTED_ALGORITHM `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS.UNSUPPORTED_ALGORITHM>)

UNSUPPORTED\_ALGORITHM = 2

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS.from_value>)

from\_value(*arg: int*) → [lief.PE.Signature.VERIFICATION\_FLAGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS> "lief.PE.Signature.VERIFICATION_FLAGS") = &lt;nanobind.nb\_func object&gt;

#### [` certificates `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.certificates>)

property certificates → lief.PE.Signature.it\_const\_crt

Return an iterator over [`x509`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief.PE.x509") certificates

#### [` check `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.check>)

check(*self*, *checks: [lief.\_lief.PE.Signature.VERIFICATION\_CHECKS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_CHECKS> "lief._lief.PE.Signature.VERIFICATION_CHECKS") = VERIFICATION\_CHECKS.DEFAULT*) → [lief.\_lief.PE.Signature.VERIFICATION\_FLAGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS> "lief._lief.PE.Signature.VERIFICATION_FLAGS")

Check the integrity of the signature and return a [`lief.PE.Signature.VERIFICATION_FLAGS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_FLAGS> "lief.PE.Signature.VERIFICATION_FLAGS")

By default, it performs the following verifications:

1. It must contain only **one** signer info ([`signers`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.signers> "lief.PE.Signature.signers"))
2. [`lief.PE.Signature.digest_algorithm`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.digest_algorithm> "lief.PE.Signature.digest_algorithm") must match:

   - [`lief.PE.ContentInfo.digest_algorithm`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.digest_algorithm> "lief.PE.ContentInfo.digest_algorithm")
   - [`lief.PE.SignerInfo.digest_algorithm`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.digest_algorithm> "lief.PE.SignerInfo.digest_algorithm")
3. The x509 certificate specified by [`lief.PE.SignerInfo.serial_number`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.serial_number> "lief.PE.SignerInfo.serial_number") **and** [`lief.PE.SignerInfo.issuer`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.issuer> "lief.PE.SignerInfo.issuer") must exist within [`lief.PE.Signature.certificates`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.certificates> "lief.PE.Signature.certificates")
4. Given the x509 certificate, compare [`lief.PE.SignerInfo.encrypted_digest`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.encrypted_digest> "lief.PE.SignerInfo.encrypted_digest") against either:

   - hash of authenticated attributes ([`authenticated_attributes`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.authenticated_attributes> "lief.PE.SignerInfo.authenticated_attributes")) if present
   - hash of ContentInfo
5. If they are Authenticated attributes, check that a PKCS9\_MESSAGE\_DIGEST ([`lief.PE.PKCS9MessageDigest`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PKCS9MessageDigest> "lief.PE.PKCS9MessageDigest")) attribute exists and that its value matches hash of ContentInfo
6. Check the validity of the PKCS #9 counter signature if present
7. If the signature doesn’t embed a signing-time in the counter signature, check the certificate validity. (See [`lief.PE.Signature.VERIFICATION_CHECKS.LIFETIME_SIGNING`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_CHECKS.LIFETIME_SIGNING> "lief.PE.Signature.VERIFICATION_CHECKS.LIFETIME_SIGNING") and [`lief.PE.Signature.VERIFICATION_CHECKS.SKIP_CERT_TIME`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_CHECKS.SKIP_CERT_TIME> "lief.PE.Signature.VERIFICATION_CHECKS.SKIP_CERT_TIME"))

See: [`lief.PE.Signature.VERIFICATION_CHECKS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.VERIFICATION_CHECKS> "lief.PE.Signature.VERIFICATION_CHECKS") to tweak the behavior

#### [` content_info `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.content_info>)

property content\_info → [lief.PE.ContentInfo](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo> "lief.PE.ContentInfo")

Return the [`ContentInfo`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo> "lief.PE.ContentInfo")

#### [` digest_algorithm `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.digest_algorithm>)

property digest\_algorithm → [lief.PE.ALGORITHMS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS> "lief.PE.ALGORITHMS")

Return the algorithm ([`ALGORITHMS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS> "lief.PE.ALGORITHMS")) used to sign the content of [`ContentInfo`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo> "lief.PE.ContentInfo")

#### [` find_crt `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.find_crt>)

find\_crt(*self*, *serialno: collections.abc.Sequence[int]*) → [lief.\_lief.PE.x509](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief._lief.PE.x509") | None

Find the [`x509`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief.PE.x509") certificate according to its serial number

#### [` find_crt_issuerfind_crt_issuer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.find_crt_issuer>)

find\_crt\_issuer(*self*, *issuer: str*) → [lief.\_lief.PE.x509](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief._lief.PE.x509") | None

**find\_crt\_issuer(*self*, *issuer: str*, *serialno: collections.abc.Sequence[int]*) → [lief.\_lief.PE.x509](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief._lief.PE.x509") | None**

Overloaded function.

1. `find_crt_issuer(self, issuer: str) -> lief._lief.PE.x509 | None`

Find the [`x509`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief.PE.x509") certificate according to its issuer

2. `find_crt_issuer(self, issuer: str, serialno: collections.abc.Sequence[int]) -> lief._lief.PE.x509 | None`

Find the [`x509`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief.PE.x509") certificate according to its issuer **AND** its serial number

#### [` find_crt_subjectfind_crt_subject `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.find_crt_subject>)

find\_crt\_subject(*self*, *subject: str*) → [lief.\_lief.PE.x509](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief._lief.PE.x509") | None

**find\_crt\_subject(*self*, *subject: str*, *serialno: collections.abc.Sequence[int]*) → [lief.\_lief.PE.x509](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief._lief.PE.x509") | None**

Overloaded function.

1. `find_crt_subject(self, subject: str) -> lief._lief.PE.x509 | None`

Find the [`x509`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief.PE.x509") certificate according to its subject

2. `find_crt_subject(self, subject: str, serialno: collections.abc.Sequence[int]) -> lief._lief.PE.x509 | None`

Find the [`x509`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief.PE.x509") certificate according to its subject **AND** its serial number

#### [` parse `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.parse>)

parse(*\*args*) → [lief.PE.Signature](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature> "lief.PE.Signature") | None = &lt;nanobind.nb\_func object&gt;

#### [` raw_der `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.raw_der>)

property raw\_der → memoryview

Return the raw original signature as a byte object

#### [` signers `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.signers>)

property signers → lief.PE.Signature.it\_const\_signers\_t

Return an iterator over the signers ([`SignerInfo`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo> "lief.PE.SignerInfo"))

#### [` version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.version>)

property version → int

Version of the signature. It should be 1

---

## [Signature Attribute](<https://lief.re/doc/latest/formats/pe/python.html#signature-attribute>)

![Inheritance diagram of lief._lief.PE.MsCounterSign, lief._lief.PE.GenericType, lief._lief.PE.SigningCertificateV2, lief._lief.PE.SpcRelaxedPeMarkerCheck, lief._lief.PE.MsSpcStatementType, lief._lief.PE.PKCS9AtSequenceNumber, lief._lief.PE.ContentType, lief._lief.PE.MsSpcNestedSignature, lief._lief.PE.PKCS9MessageDigest, lief._lief.PE.Attribute, lief._lief.PE.MsManifestBinaryID, lief._lief.PE.PKCS9SigningTime, lief._lief.PE.PKCS9CounterSignature, lief._lief.PE.SpcSpOpusInfo](https://lief.re/doc/latest/_images/inheritance-ae80fd644ccc06784cdc0520e7453d771369de9e.png)

### [` lief.PE.Attribute `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute>)

class lief.PE.Attribute

Bases: `Object`

Interface over PKCS #7 attribute

#### [` TYPE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

##### [` CONTENT_TYPE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE.CONTENT_TYPE>)

CONTENT\_TYPE = 1

##### [` GENERIC_TYPE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE.GENERIC_TYPE>)

GENERIC\_TYPE = 2

##### [` MS_COUNTER_SIGN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE.MS_COUNTER_SIGN>)

MS\_COUNTER\_SIGN = 6

##### [` MS_PLATFORM_MANIFEST_BINARY_ID `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE.MS_PLATFORM_MANIFEST_BINARY_ID>)

MS\_PLATFORM\_MANIFEST\_BINARY\_ID = 9

##### [` MS_SPC_NESTED_SIGN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE.MS_SPC_NESTED_SIGN>)

MS\_SPC\_NESTED\_SIGN = 7

##### [` MS_SPC_STATEMENT_TYPE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE.MS_SPC_STATEMENT_TYPE>)

MS\_SPC\_STATEMENT\_TYPE = 8

##### [` PKCS9_AT_SEQUENCE_NUMBER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE.PKCS9_AT_SEQUENCE_NUMBER>)

PKCS9\_AT\_SEQUENCE\_NUMBER = 10

##### [` PKCS9_COUNTER_SIGNATURE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE.PKCS9_COUNTER_SIGNATURE>)

PKCS9\_COUNTER\_SIGNATURE = 11

##### [` PKCS9_MESSAGE_DIGEST `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE.PKCS9_MESSAGE_DIGEST>)

PKCS9\_MESSAGE\_DIGEST = 12

##### [` PKCS9_SIGNING_TIME `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE.PKCS9_SIGNING_TIME>)

PKCS9\_SIGNING\_TIME = 13

##### [` SIGNING_CERTIFICATE_V2 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE.SIGNING_CERTIFICATE_V2>)

SIGNING\_CERTIFICATE\_V2 = 3

##### [` SPC_RELAXED_PE_MARKER_CHECK `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE.SPC_RELAXED_PE_MARKER_CHECK>)

SPC\_RELAXED\_PE\_MARKER\_CHECK = 5

##### [` SPC_SP_OPUS_INFO `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE.SPC_SP_OPUS_INFO>)

SPC\_SP\_OPUS\_INFO = 4

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE.UNKNOWN>)

UNKNOWN = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE.from_value>)

from\_value(*arg: int*) → [lief.PE.Attribute.TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE> "lief.PE.Attribute.TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.type>)

property type → [lief.PE.Attribute.TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE> "lief.PE.Attribute.TYPE")

Concrete type of the attribute

---

## [Signature ContentType](<https://lief.re/doc/latest/formats/pe/python.html#signature-contenttype>)

![Inheritance diagram of lief._lief.PE.ContentType](https://lief.re/doc/latest/_images/inheritance-68ea2eed31ab0290254f41e5c925d99b28995375.png)

### [` lief.PE.ContentType `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentType>)

class lief.PE.ContentType

Bases: [`Attribute`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief._lief.PE.Attribute")

Interface over the structure described by the OID `1.2.840.113549.1.9.3` (PKCS #9) The internal structure is described in the: [RFC #2985: PKCS #9 - Selected Object Classes and Attribute Types Version 2.0](<https://tools.ietf.org/html/rfc2985>)

```text
ContentType ::= OBJECT IDENTIFIER
```

#### [` oid `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentType.oid>)

property oid → str

OID as described in RFC #2985 (string object)

---

## [Signature GenericType](<https://lief.re/doc/latest/formats/pe/python.html#signature-generictype>)

![Inheritance diagram of lief._lief.PE.GenericType](https://lief.re/doc/latest/_images/inheritance-6072a4c4cb1f8467d8b3bd789137016f89966b4b.png)

### [` lief.PE.GenericType `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.GenericType>)

class lief.PE.GenericType

Bases: [`Attribute`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief._lief.PE.Attribute")

Interface over an attribute for which the internal structure is not supported by LIEF

#### [` oid `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.GenericType.oid>)

property oid → str

OID of the original attribute

#### [` raw_content `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.GenericType.raw_content>)

property raw\_content → memoryview

Original DER blob of the attribute

---

## [Signature MsSpcNestedSignature](<https://lief.re/doc/latest/formats/pe/python.html#signature-msspcnestedsignature>)

![Inheritance diagram of lief._lief.PE.MsSpcNestedSignature](https://lief.re/doc/latest/_images/inheritance-c583655be46254480df30f51fe698addaef7ecf0.png)

### [` lief.PE.MsSpcNestedSignature `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.MsSpcNestedSignature>)

class lief.PE.MsSpcNestedSignature

Bases: [`Attribute`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief._lief.PE.Attribute")

Interface over the structure described by the OID `1.3.6.1.4.1.311.2.4.1`

The internal structure is not documented but we can infer the following structure:

```text
MsSpcNestedSignature ::= SET OF SignedData
```

With `SignedData`, the structure described in PKCS #7 RFC (See: [`lief.PE.Signature`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature> "lief.PE.Signature"))

#### [` signature `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.MsSpcNestedSignature.signature>)

property signature → [lief.PE.Signature](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature> "lief.PE.Signature")

Underlying [`Signature`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature> "lief.PE.Signature") object

---

## [Signature MsSpcStatementType](<https://lief.re/doc/latest/formats/pe/python.html#signature-msspcstatementtype>)

![Inheritance diagram of lief._lief.PE.MsSpcStatementType](https://lief.re/doc/latest/_images/inheritance-a99d0cdd8d0b2066ff4126281fe75e12c38726df.png)

### [` lief.PE.MsSpcStatementType `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.MsSpcStatementType>)

class lief.PE.MsSpcStatementType

Bases: [`Attribute`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief._lief.PE.Attribute")

Interface over the structure described by the OID `1.3.6.1.4.1.311.2.1.11`

The internal structure is described in the official document: [Windows Authenticode Portable Executable Signature Format](<http://download.microsoft.com/download/9/c/5/9c5b2167-8017-4bae-9fde-d599bac8184a/Authenticode_PE.docx>)

```text
SpcStatementType ::= SEQUENCE of OBJECT IDENTIFIER
```

#### [` oid `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.MsSpcStatementType.oid>)

property oid → str

According to the documentation:

```default
The SpcStatementType MUST contain one Object Identifier with either
the value ``1.3.6.1.4.1.311.2.1.21 (SPC_INDIVIDUAL_SP_KEY_PURPOSE_OBJID)`` or
``1.3.6.1.4.1.311.2.1.22 (SPC_COMMERCIAL_SP_KEY_PURPOSE_OBJID)``.
```

---

## [Signature PKCS9AtSequenceNumber](<https://lief.re/doc/latest/formats/pe/python.html#signature-pkcs9atsequencenumber>)

![Inheritance diagram of lief._lief.PE.PKCS9AtSequenceNumber](https://lief.re/doc/latest/_images/inheritance-c566c72b742bfc686faeba12a40fd9de7ebb3eee.png)

### [` lief.PE.PKCS9AtSequenceNumber `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PKCS9AtSequenceNumber>)

class lief.PE.PKCS9AtSequenceNumber

Bases: [`Attribute`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief._lief.PE.Attribute")

Interface over the structure described by the OID `1.2.840.113549.1.9.25.4` (PKCS #9)

The internal structure is described in the [RFC #2985: PKCS #9 - Selected Object Classes and Attribute Types Version 2.0](<https://tools.ietf.org/html/rfc2985>)

```text
sequenceNumber ATTRIBUTE ::= {
  WITH SYNTAX SequenceNumber
  EQUALITY MATCHING RULE integerMat
  SINGLE VALUE TRUE
  ID pkcs-9-at-sequenceNumber
}

SequenceNumber ::= INTEGER (1..MAX)
```

#### [` number `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PKCS9AtSequenceNumber.number>)

property number → int

Number as described in the RFC

---

## [Signature PKCS9CounterSignature](<https://lief.re/doc/latest/formats/pe/python.html#signature-pkcs9countersignature>)

![Inheritance diagram of lief._lief.PE.PKCS9CounterSignature](https://lief.re/doc/latest/_images/inheritance-aec95366d78a3cd0fe415bb41938bde6d7ee3ae9.png)

### [` lief.PE.PKCS9CounterSignature `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PKCS9CounterSignature>)

class lief.PE.PKCS9CounterSignature

Bases: [`Attribute`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief._lief.PE.Attribute")

Interface over the structure described by the OID `1.2.840.113549.1.9.6` (PKCS #9)

The internal structure is described in the [RFC #2985: PKCS #9 - Selected Object Classes and Attribute Types Version 2.0](<https://tools.ietf.org/html/rfc2985>)

```text
counterSignature ATTRIBUTE ::= {
  WITH SYNTAX SignerInfo
  ID pkcs-9-at-counterSignature
}
```

#### [` signer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PKCS9CounterSignature.signer>)

property signer → [lief.PE.SignerInfo](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo> "lief.PE.SignerInfo")

Return the [`SignerInfo`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo> "lief.PE.SignerInfo") as described in the RFC #2985

---

## [Signature PKCS9MessageDigest](<https://lief.re/doc/latest/formats/pe/python.html#signature-pkcs9messagedigest>)

![Inheritance diagram of lief._lief.PE.PKCS9MessageDigest](https://lief.re/doc/latest/_images/inheritance-44cb689b680e830bcf5ed055db8aba6bfbec9ff8.png)

### [` lief.PE.PKCS9MessageDigest `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PKCS9MessageDigest>)

class lief.PE.PKCS9MessageDigest

Bases: [`Attribute`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief._lief.PE.Attribute")

Interface over the structure described by the OID `1.2.840.113549.1.9.4` (PKCS #9)

The internal structure is described in the [RFC #2985: PKCS #9 - Selected Object Classes and Attribute Types Version 2.0](<https://tools.ietf.org/html/rfc2985>)

```text
messageDigest ATTRIBUTE ::= {
  WITH SYNTAX MessageDigest
  EQUALITY MATCHING RULE octet
  SINGLE VALUE TRUE
  ID pkcs-9-at-messageDigest
}

MessageDigest ::= OCTET STRING
```

#### [` digest `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PKCS9MessageDigest.digest>)

property digest → bytes

Message digest as a blob of bytes as described in the RFC

---

## [Signature PKCS9SigningTime](<https://lief.re/doc/latest/formats/pe/python.html#signature-pkcs9signingtime>)

![Inheritance diagram of lief._lief.PE.PKCS9SigningTime](https://lief.re/doc/latest/_images/inheritance-63d71d38b0452b44085c9b0424f9908b81750f2a.png)

### [` lief.PE.PKCS9SigningTime `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PKCS9SigningTime>)

class lief.PE.PKCS9SigningTime

Bases: [`Attribute`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief._lief.PE.Attribute")

Interface over the structure described by the OID `1.2.840.113549.1.9.5` (PKCS #9)

The internal structure is described in the [RFC #2985: PKCS #9 - Selected Object Classes and Attribute Types Version 2.0](<https://tools.ietf.org/html/rfc2985>)

```text
signingTime ATTRIBUTE ::= {
        WITH SYNTAX SigningTime
        EQUALITY MATCHING RULE signingTimeMatch
        SINGLE VALUE TRUE
        ID pkcs-9-at-signingTime
}

SigningTime ::= Time -- imported from ISO/IEC 9594-8
```

#### [` time `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PKCS9SigningTime.time>)

property time → list[int]

Time as a list [year, month, day, hour, min, sec]

---

## [Signature SpcSpOpusInfo](<https://lief.re/doc/latest/formats/pe/python.html#signature-spcspopusinfo>)

![Inheritance diagram of lief._lief.PE.SpcSpOpusInfo](https://lief.re/doc/latest/_images/inheritance-93dd785fdff90ccf7d2b3c2c253963b4ea15d799.png)

### [` lief.PE.SpcSpOpusInfo `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SpcSpOpusInfo>)

class lief.PE.SpcSpOpusInfo

Bases: [`Attribute`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief._lief.PE.Attribute")

Interface over the structure described by the OID `1.3.6.1.4.1.311.2.1.12` The internal structure is described in the official document: [Windows Authenticode Portable Executable Signature Format](<http://download.microsoft.com/download/9/c/5/9c5b2167-8017-4bae-9fde-d599bac8184a/Authenticode_PE.docx>)

```text
SpcSpOpusInfo ::= SEQUENCE {
    programName  [0] EXPLICIT SpcString OPTIONAL,
    moreInfo     [1] EXPLICIT SpcLink OPTIONAL
}
```

#### [` more_info `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SpcSpOpusInfo.more_info>)

property more\_info → str | bytes

Other information such as an URL

#### [` program_name `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SpcSpOpusInfo.program_name>)

property program\_name → str | bytes

Program description provided by the publisher

---

## [Signature SpcIndirectData](<https://lief.re/doc/latest/formats/pe/python.html#signature-spcindirectdata>)

![Inheritance diagram of lief._lief.PE.SpcIndirectData](https://lief.re/doc/latest/_images/inheritance-74d8c1344ad990b674d2729a43782875d2d3b408.png)

### [` lief.PE.SpcIndirectData `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SpcIndirectData>)

class lief.PE.SpcIndirectData

Bases: [`Content`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.Content> "lief._lief.PE.ContentInfo.Content")

#### [` digest `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SpcIndirectData.digest>)

property digest → memoryview

#### [` digest_algorithm `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SpcIndirectData.digest_algorithm>)

property digest\_algorithm → [lief.PE.ALGORITHMS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS> "lief.PE.ALGORITHMS")

Digest used to hash the file. This should match [`digest_algorithm`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.digest_algorithm> "lief.PE.SignerInfo.digest_algorithm")

#### [` file `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SpcIndirectData.file>)

property file → str

#### [` url `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SpcIndirectData.url>)

property url → str

---

## [GenericContent](<https://lief.re/doc/latest/formats/pe/python.html#genericcontent>)

![Inheritance diagram of lief._lief.PE.GenericContent](https://lief.re/doc/latest/_images/inheritance-ac9d59568814b05fc4fcd19223b35675ee727938.png)

### [` lief.PE.GenericContent `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.GenericContent>)

class lief.PE.GenericContent

Bases: [`Content`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.Content> "lief._lief.PE.ContentInfo.Content")

---

## [RsaInfo](<https://lief.re/doc/latest/formats/pe/python.html#rsainfo>)

### [` lief.PE.RsaInfo `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RsaInfo>)

class lief.PE.RsaInfo

Bases: `object`

Object representing a RSA key

#### [` D `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RsaInfo.D>)

property D → bytes

RSA private exponent (in bytes)

#### [` E `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RsaInfo.E>)

property E → bytes

RSA public exponent (in bytes)

#### [` N `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RsaInfo.N>)

property N → bytes

RSA public modulus (in bytes)

#### [` P `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RsaInfo.P>)

property P → bytes

First prime factor (in bytes)

#### [` Q `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RsaInfo.Q>)

property Q → bytes

Second prime factor (in bytes)

#### [` has_private_key `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RsaInfo.has_private_key>)

property has\_private\_key → bool

True if it embeds a private key

#### [` has_public_key `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RsaInfo.has_public_key>)

property has\_public\_key → bool

True if it embeds a public key

#### [` key_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RsaInfo.key_size>)

property key\_size → int

Size of the public modulus in bits

---

## [x509](<https://lief.re/doc/latest/formats/pe/python.html#x509>)

### [` lief.PE.x509 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509>)

class lief.PE.x509

Bases: `Object`

Interface over a x509 certificate

#### [` KEY_TYPES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_TYPES>)

class KEY\_TYPES(*\*values*)

Bases: `Enum`

Public key scheme used by the x509 certificate

##### [` ECDSA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_TYPES.ECDSA>)

ECDSA = 4

##### [` ECKEY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_TYPES.ECKEY>)

ECKEY = 2

##### [` ECKEY_DH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_TYPES.ECKEY_DH>)

ECKEY\_DH = 3

##### [` NONE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_TYPES.NONE>)

NONE = 0

##### [` RSA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_TYPES.RSA>)

RSA = 1

##### [` RSASSA_PSS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_TYPES.RSASSA_PSS>)

RSASSA\_PSS = 6

##### [` RSA_ALT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_TYPES.RSA_ALT>)

RSA\_ALT = 5

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_TYPES.from_value>)

from\_value(*arg: int*) → [lief.PE.x509.KEY\_TYPES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_TYPES> "lief.PE.x509.KEY_TYPES") = &lt;nanobind.nb\_func object&gt;

#### [` KEY_USAGE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_USAGE>)

class KEY\_USAGE(*\*values*)

Bases: `Enum`

Key usage as defined in [RFC #5280 - section-4.2.1.3](<https://tools.ietf.org/html/rfc5280#section-4.2.1.3>)

##### [` CRL_SIGN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_USAGE.CRL_SIGN>)

CRL\_SIGN = 6

##### [` DATA_ENCIPHERMENT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_USAGE.DATA_ENCIPHERMENT>)

DATA\_ENCIPHERMENT = 3

##### [` DECIPHER_ONLY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_USAGE.DECIPHER_ONLY>)

DECIPHER\_ONLY = 8

##### [` DIGITAL_SIGNATURE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_USAGE.DIGITAL_SIGNATURE>)

DIGITAL\_SIGNATURE = 0

##### [` ENCIPHER_ONLY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_USAGE.ENCIPHER_ONLY>)

ENCIPHER\_ONLY = 7

##### [` KEY_AGREEMENT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_USAGE.KEY_AGREEMENT>)

KEY\_AGREEMENT = 4

##### [` KEY_CERT_SIGN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_USAGE.KEY_CERT_SIGN>)

KEY\_CERT\_SIGN = 5

##### [` KEY_ENCIPHERMENT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_USAGE.KEY_ENCIPHERMENT>)

KEY\_ENCIPHERMENT = 2

##### [` NON_REPUDIATION `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_USAGE.NON_REPUDIATION>)

NON\_REPUDIATION = 1

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_USAGE.from_value>)

from\_value(*arg: int*) → [lief.PE.x509.KEY\_USAGE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_USAGE> "lief.PE.x509.KEY_USAGE") = &lt;nanobind.nb\_func object&gt;

#### [` VERIFICATION_FLAGS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS>)

class VERIFICATION\_FLAGS(*\*values*)

Bases: `Flag`

Verification flags associated with [`verify`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.verify> "lief.PE.x509.verify")

##### [` BADCERT_BAD_KEY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCERT_BAD_KEY>)

BADCERT\_BAD\_KEY = 65536

##### [` BADCERT_BAD_MD `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCERT_BAD_MD>)

BADCERT\_BAD\_MD = 16384

##### [` BADCERT_BAD_PK `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCERT_BAD_PK>)

BADCERT\_BAD\_PK = 32768

##### [` BADCERT_CN_MISMATCH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCERT_CN_MISMATCH>)

BADCERT\_CN\_MISMATCH = 4

##### [` BADCERT_EXPIRED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCERT_EXPIRED>)

BADCERT\_EXPIRED = 1

##### [` BADCERT_EXT_KEY_USAGE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCERT_EXT_KEY_USAGE>)

BADCERT\_EXT\_KEY\_USAGE = 4096

##### [` BADCERT_FUTURE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCERT_FUTURE>)

BADCERT\_FUTURE = 512

##### [` BADCERT_KEY_USAGE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCERT_KEY_USAGE>)

BADCERT\_KEY\_USAGE = 2048

##### [` BADCERT_MISSING `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCERT_MISSING>)

BADCERT\_MISSING = 64

##### [` BADCERT_NOT_TRUSTED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCERT_NOT_TRUSTED>)

BADCERT\_NOT\_TRUSTED = 8

##### [` BADCERT_NS_CERT_TYPE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCERT_NS_CERT_TYPE>)

BADCERT\_NS\_CERT\_TYPE = 8192

##### [` BADCERT_OTHERNATURE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCERT_OTHERNATURE>)

BADCERT\_OTHERNATURE = 256

##### [` BADCERT_REVOKED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCERT_REVOKED>)

BADCERT\_REVOKED = 2

##### [` BADCERT_SKIP_VERIFY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCERT_SKIP_VERIFY>)

BADCERT\_SKIP\_VERIFY = 128

##### [` BADCRL_BAD_KEY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCRL_BAD_KEY>)

BADCRL\_BAD\_KEY = 524288

##### [` BADCRL_BAD_MD `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCRL_BAD_MD>)

BADCRL\_BAD\_MD = 131072

##### [` BADCRL_BAD_PK `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCRL_BAD_PK>)

BADCRL\_BAD\_PK = 262144

##### [` BADCRL_EXPIRED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCRL_EXPIRED>)

BADCRL\_EXPIRED = 32

##### [` BADCRL_FUTURE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCRL_FUTURE>)

BADCRL\_FUTURE = 1024

##### [` BADCRL_NOT_TRUSTED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.BADCRL_NOT_TRUSTED>)

BADCRL\_NOT\_TRUSTED = 16

##### [` OK `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.OK>)

OK = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS.from_value>)

from\_value(*arg: int*) → [lief.PE.x509.VERIFICATION\_FLAGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS> "lief.PE.x509.VERIFICATION_FLAGS") = &lt;nanobind.nb\_func object&gt;

#### [` certificate_policies `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.certificate_policies>)

property certificate\_policies → list[str]

Policy information terms as list of OID (see RFC #5280)

#### [` ext_key_usage `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.ext_key_usage>)

property ext\_key\_usage → list[str]

Indicates one or more purposes for which the certified public key may be used (list of OID)

#### [` is_ca `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.is_ca>)

property is\_ca → bool

#### [` is_trusted_by `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.is_trusted_by>)

is\_trusted\_by(*self*, *ca\_list: collections.abc.Sequence[[lief.\_lief.PE.x509](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief._lief.PE.x509")]*) → [lief.\_lief.PE.x509.VERIFICATION\_FLAGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS> "lief._lief.PE.x509.VERIFICATION_FLAGS")

Verify this certificate against a list of root CA (list of [`x509`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief.PE.x509") objects) It returns a set of flags defined by [`VERIFICATION_FLAGS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS> "lief.PE.x509.VERIFICATION_FLAGS")

**Example:**

```python
signer = binary.signatures[0].signers[0]
microsoft_ca_bundle = lief.PE.x509.parse("bundle.pem")
print(signer.cert.is_trusted_by(microsoft_ca_bundle))
```

#### [` issuer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.issuer>)

property issuer → str | bytes

Issuer of the certificate

#### [` key_type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.key_type>)

property key\_type → [lief.PE.x509.KEY\_TYPES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_TYPES> "lief.PE.x509.KEY_TYPES")

Return the underlying public-key scheme ([`KEY_TYPES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_TYPES> "lief.PE.x509.KEY_TYPES"))

#### [` key_usage `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.key_usage>)

property key\_usage → list[[lief.PE.x509.KEY\_USAGE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_USAGE> "lief.PE.x509.KEY_USAGE")]

Purpose of the key contained in the certificate (see [`KEY_USAGE`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.KEY_USAGE> "lief.PE.x509.KEY_USAGE"))

#### [` parse `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.parse>)

parse(*\*args*) → list[[lief.PE.x509](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief.PE.x509")] = &lt;nanobind.nb\_func object&gt;

#### [` raw `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.raw>)

property raw → bytes

The raw bytes associated with this x509 cert (DER encoded)

#### [` rsa_info `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.rsa_info>)

property rsa\_info → [lief.PE.RsaInfo](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RsaInfo> "lief.PE.RsaInfo") | None

If the underlying public-key scheme is RSA, return the [`RsaInfo`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RsaInfo> "lief.PE.RsaInfo") associated with this certificate. Otherwise, return None

#### [` serial_number `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.serial_number>)

property serial\_number → bytes

Unique id for certificate issued by a specific CA.

#### [` signature `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.signature>)

property signature → bytes

The signature of the certificate

#### [` signature_algorithm `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.signature_algorithm>)

property signature\_algorithm → str

Signature algorithm (OID)

#### [` subject `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.subject>)

property subject → str | bytes

Subject of the certificate

#### [` valid_from `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.valid_from>)

property valid\_from → list[int]

Start time of certificate validity

#### [` valid_to `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.valid_to>)

property valid\_to → list[int]

End time of certificate validity

#### [` verify `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.verify>)

verify(*self*, *ca: [lief.\_lief.PE.x509](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief._lief.PE.x509")*) → [lief.\_lief.PE.x509.VERIFICATION\_FLAGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS> "lief._lief.PE.x509.VERIFICATION_FLAGS")

Verify that this certificate has been used **to trust** the given [`x509`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief.PE.x509") certificate

It returns a set of flags defined by [`VERIFICATION_FLAGS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.VERIFICATION_FLAGS> "lief.PE.x509.VERIFICATION_FLAGS")

**Example:**

```python
ca     = lief.PE.x509.parse("ca.crt")[0]
signer = lief.PE.x509.parse("signer.crt")[0]
print(ca.verify(signer))  # lief.PE.x509.VERIFICATION_FLAGS.OK
```

#### [` version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.version>)

property version → int

X.509 version. (1=v1, 2=v2, 3=v3)

---

## [ContentInfo](<https://lief.re/doc/latest/formats/pe/python.html#contentinfo>)

![Inheritance diagram of lief._lief.PE.SpcIndirectData, lief._lief.PE.PKCS9TSTInfo, lief._lief.PE.GenericContent](https://lief.re/doc/latest/_images/inheritance-03c8c403bf43ca56cde18875be8ce8b539ed5aa1.png)

### [` lief.PE.ContentInfo `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo>)

class lief.PE.ContentInfo

Bases: `Object`

ContentInfo as described in the [RFC 2315](<https://tools.ietf.org/html/rfc2315#section-7>)

```text
ContentInfo ::= SEQUENCE {
  contentType ContentType,
  content     [0] EXPLICIT ANY DEFINED BY contentType OPTIONAL
}

ContentType ::= OBJECT IDENTIFIER
```

In the case of PE signature, ContentType **must** be set to SPC\_INDIRECT\_DATA\_OBJID OID: `1.3.6.1.4.1.311.2.1.4` and content is defined by the structure: `SpcIndirectDataContent`

```text
SpcIndirectDataContent ::= SEQUENCE {
 data          SpcAttributeTypeAndOptionalValue,
 messageDigest DigestInfo
}

SpcAttributeTypeAndOptionalValue ::= SEQUENCE {
 type  ObjectID,
 value [0] EXPLICIT ANY OPTIONAL
}
```

For PE signature, `SpcAttributeTypeAndOptionalValue.type` is set to `SPC_PE_IMAGE_DATAOBJ` (OID: `1.3.6.1.4.1.311.2.1.15`) and the value is defined by `SpcPeImageData`

```text
DigestInfo ::= SEQUENCE {
 digestAlgorithm  AlgorithmIdentifier,
 digest           OCTETSTRING
}

AlgorithmIdentifier ::= SEQUENCE {
 algorithm  ObjectID,
 parameters [0] EXPLICIT ANY OPTIONAL
}
```

#### [` Content `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.Content>)

class Content

Bases: `Object`

##### [` content_type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.Content.content_type>)

property content\_type → str

OID of the content type. This value should match `SPC_INDIRECT_DATA_OBJID`

##### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.Content.copy>)

copy(*self*) → [lief.\_lief.PE.ContentInfo.Content](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.Content> "lief._lief.PE.ContentInfo.Content") | None

Duplicate the current instance of this object

#### [` content_type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.content_type>)

property content\_type → str

An alias for [`content_type`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.content_type> "lief.PE.ContentInfo.content_type")

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.copy>)

copy(*self*) → [lief.\_lief.PE.ContentInfo](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo> "lief._lief.PE.ContentInfo")

Duplicate the current instance of this object

#### [` digest `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.digest>)

property digest → bytes

Return the digest (authentihash) if the underlying content type is `SPC_INDIRECT_DATA_OBJID`. Return empty bytes otherwise.

#### [` digest_algorithm `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.digest_algorithm>)

property digest\_algorithm → [lief.PE.ALGORITHMS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS> "lief.PE.ALGORITHMS")

Return the hash algorithm used to generate the [`digest`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.digest> "lief.PE.ContentInfo.digest")

#### [` value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.value>)

property value → [lief.PE.ContentInfo.Content](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.Content> "lief.PE.ContentInfo.Content")

---

## [SignerInfo](<https://lief.re/doc/latest/formats/pe/python.html#signerinfo>)

### [` lief.PE.SignerInfo `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo>)

class lief.PE.SignerInfo

Bases: `Object`

SignerInfo as described in the [RFC 2315 #Section 9.2](<https://tools.ietf.org/html/rfc2315#section-9.2>)

```text
SignerInfo ::= SEQUENCE {
 version                   Version,
 issuerAndSerialNumber     IssuerAndSerialNumber,
 digestAlgorithm           DigestAlgorithmIdentifier,
 authenticatedAttributes   [0] IMPLICIT Attributes OPTIONAL,
 digestEncryptionAlgorithm DigestEncryptionAlgorithmIdentifier,
 encryptedDigest           EncryptedDigest,
 unauthenticatedAttributes [1] IMPLICIT Attributes OPTIONAL
}

EncryptedDigest ::= OCTET STRING
```

#### [` authenticated_attributes `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.authenticated_attributes>)

property authenticated\_attributes → lief.PE.SignerInfo.it\_const\_attributes\_t

Return an iterator over the authenticated attributes ([`Attribute`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief.PE.Attribute"))

#### [` cert `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.cert>)

property cert → [lief.PE.x509](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief.PE.x509") | None

[`x509`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief.PE.x509") certificate used by this signer. If it can’t be found, it returns None

#### [` digest_algorithm `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.digest_algorithm>)

property digest\_algorithm → [lief.PE.ALGORITHMS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS> "lief.PE.ALGORITHMS")

Algorithm ([`ALGORITHMS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS> "lief.PE.ALGORITHMS")) used to hash the file. This value should match [`ContentInfo.digest_algorithm`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.digest_algorithm> "lief.PE.ContentInfo.digest_algorithm") and [`Signature.digest_algorithm`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Signature.digest_algorithm> "lief.PE.Signature.digest_algorithm")

#### [` encrypted_digest `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.encrypted_digest>)

property encrypted\_digest → bytes

Return the signature created by the signing certificate’s private key

#### [` encryption_algorithm `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.encryption_algorithm>)

property encryption\_algorithm → [lief.PE.ALGORITHMS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS> "lief.PE.ALGORITHMS")

Return algorithm ([`ALGORITHMS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS> "lief.PE.ALGORITHMS")) used to encrypt the digest

#### [` get_attribute `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.get_attribute>)

get\_attribute(*self*, *type: [lief.\_lief.PE.Attribute.TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE> "lief._lief.PE.Attribute.TYPE")*) → [lief.\_lief.PE.Attribute](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief._lief.PE.Attribute") | None

Return the authenticated or un-authenticated attribute matching the given `lief.PE.SIG_ATTRIBUTE_TYPES` It returns **the first** entry that matches the given type. If it can’t be found, it returns None

#### [` get_auth_attribute `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.get_auth_attribute>)

get\_auth\_attribute(*self*, *type: [lief.\_lief.PE.Attribute.TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE> "lief._lief.PE.Attribute.TYPE")*) → [lief.\_lief.PE.Attribute](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief._lief.PE.Attribute") | None

Return the authenticated attribute matching the given `lief.PE.SIG_ATTRIBUTE_TYPES` It returns **the first** entry that matches the given type. If it can’t be found, it returns None

#### [` get_unauth_attribute `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.get_unauth_attribute>)

get\_unauth\_attribute(*self*, *type: [lief.\_lief.PE.Attribute.TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute.TYPE> "lief._lief.PE.Attribute.TYPE")*) → [lief.\_lief.PE.Attribute](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief._lief.PE.Attribute") | None

Return the un-authenticated attribute matching the given `lief.PE.SIG_ATTRIBUTE_TYPES` It returns **the first** entry that matches the given type. If it can’t be found, it returns None

#### [` issuer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.issuer>)

property issuer → str | bytes

The X509 issuer used to sign the signed-data (see: [`lief.PE.x509.issuer`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.issuer> "lief.PE.x509.issuer"))

#### [` serial_number `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.serial_number>)

property serial\_number → bytes

The X509 serial number used to sign the signed-data (see: [`lief.PE.x509.serial_number`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509.serial_number> "lief.PE.x509.serial_number"))

#### [` unauthenticated_attributes `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.unauthenticated_attributes>)

property unauthenticated\_attributes → lief.PE.SignerInfo.it\_const\_attributes\_t

Return an iterator over the unauthenticated attributes ([`Attribute`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief.PE.Attribute"))

#### [` version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo.version>)

property version → int

Should be 1

---

## [MsCounterSign](<https://lief.re/doc/latest/formats/pe/python.html#mscountersign>)

### [` lief.PE.MsCounterSign `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.MsCounterSign>)

class lief.PE.MsCounterSign

Bases: [`Attribute`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief._lief.PE.Attribute")

This class exposes the ms-counter-signature.

#### [` certificates `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.MsCounterSign.certificates>)

property certificates → lief.PE.MsCounterSign.it\_const\_crt

Return an iterator over [`x509`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.x509> "lief.PE.x509") certificates

#### [` content_info `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.MsCounterSign.content_info>)

property content\_info → [lief.PE.ContentInfo](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo> "lief.PE.ContentInfo")

#### [` digest_algorithm `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.MsCounterSign.digest_algorithm>)

property digest\_algorithm → [lief.PE.ALGORITHMS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS> "lief.PE.ALGORITHMS")

#### [` signers `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.MsCounterSign.signers>)

property signers → lief.PE.MsCounterSign.it\_const\_signers\_t

Return an iterator over the signers ([`SignerInfo`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SignerInfo> "lief.PE.SignerInfo"))

#### [` version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.MsCounterSign.version>)

property version → int

---

## [PKCS9TSTInfo](<https://lief.re/doc/latest/formats/pe/python.html#pkcs9tstinfo>)

### [` lief.PE.PKCS9TSTInfo `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PKCS9TSTInfo>)

class lief.PE.PKCS9TSTInfo

Bases: [`Content`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ContentInfo.Content> "lief._lief.PE.ContentInfo.Content")

Interface over the structure described by the OID `1.2.840.113549.1.9.16.1.4` (PKCS #9)

The internal structure is described in the [RFC #3161](<https://tools.ietf.org/html/rfc3161>)

```text
TSTInfo ::= SEQUENCE  {
 version        INTEGER  { v1(1) },
 policy         TSAPolicyId,
 messageImprint MessageImprint,
 serialNumber   INTEGER,
 genTime        GeneralizedTime,
 accuracy       Accuracy                OPTIONAL,
 ordering       BOOLEAN                 DEFAULT FALSE,
 nonce          INTEGER                 OPTIONAL,
 tsa            [0] GeneralName         OPTIONAL,
 extensions     [1] IMPLICIT Extensions OPTIONAL
}

TSAPolicyId    ::= OBJECT IDENTIFIER
MessageImprint ::= SEQUENCE {
  hashAlgorithm  AlgorithmIdentifier,
  hashedMessage  OCTET STRING
}

Accuracy ::= SEQUENCE {
  seconds        INTEGER           OPTIONAL,
  millis     [0] INTEGER  (1..999) OPTIONAL,
  micros     [1] INTEGER  (1..999) OPTIONAL
}
```

---

## [MsManifestBinaryID](<https://lief.re/doc/latest/formats/pe/python.html#msmanifestbinaryid>)

### [` lief.PE.MsManifestBinaryID `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.MsManifestBinaryID>)

class lief.PE.MsManifestBinaryID

Bases: [`Attribute`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief._lief.PE.Attribute")

Interface over the structure described by the OID `1.3.6.1.4.1.311.10.3.28` (`szOID_PLATFORM_MANIFEST_BINARY_ID`)

The internal structure is not documented but we can infer the following structure:

```text
szOID_PLATFORM_MANIFEST_BINARY_ID ::= SET OF BinaryID

BinaryID ::= UTF8STRING
```

#### [` manifest_id `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.MsManifestBinaryID.manifest_id>)

property manifest\_id → str

The manifest id

---

## [SpcRelaxedPeMarkerCheck](<https://lief.re/doc/latest/formats/pe/python.html#spcrelaxedpemarkercheck>)

### [` lief.PE.SpcRelaxedPeMarkerCheck `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SpcRelaxedPeMarkerCheck>)

class lief.PE.SpcRelaxedPeMarkerCheck

Bases: [`Attribute`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief._lief.PE.Attribute")

#### [` value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SpcRelaxedPeMarkerCheck.value>)

property value → int

---

## [SigningCertificateV2](<https://lief.re/doc/latest/formats/pe/python.html#signingcertificatev2>)

### [` lief.PE.SigningCertificateV2 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.SigningCertificateV2>)

class lief.PE.SigningCertificateV2

Bases: [`Attribute`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Attribute> "lief._lief.PE.Attribute")

```text
SigningCertificateV2 ::= SEQUENCE {
  certs    SEQUENCE OF ESSCertIDv2,
  policies SEQUENCE OF PolicyInformation OPTIONAL
}

ESSCertIDv2 ::= SEQUENCE {
  hashAlgorithm AlgorithmIdentifier DEFAULT {algorithm id-sha256},
  certHash      OCTET STRING,
  issuerSerial  IssuerSerial OPTIONAL
}

IssuerSerial ::= SEQUENCE {
  issuer       GeneralNames,
  serialNumber CertificateSerialNumber
}

PolicyInformation ::= SEQUENCE {
  policyIdentifier   OBJECT IDENTIFIER,
  policyQualifiers   SEQUENCE SIZE (1..MAX) OF PolicyQualifierInfo OPTIONAL
}
```

---

## [Builder](<https://lief.re/doc/latest/formats/pe/python.html#builder>)

### [` lief.PE.Builder `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder>)

class lief.PE.Builder(*self*, *binary: [lief.\_lief.PE.Binary](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief._lief.PE.Binary")*, *config: [lief.\_lief.PE.Builder.config\_t](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t> "lief._lief.PE.Builder.config_t")*)

Bases: `object`

#### [` build `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.build>)

build(*self*) → [lief.\_lief.ok\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_t> "lief._lief.ok_t") | [lief.\_lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief._lief.lief_errors")

Perform the build process

#### [` config_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t>)

class config\_t(*self*)

Bases: `object`

This structure is used to configure the build operation.

The default value of these attributes is set to `False` if the operation modifies the binary layout even though nothing changed. For instance, building the import table **always** requires relocating the table to another place. Thus, the default value is false and must be explicitly set to true.

##### [` debug `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.debug>)

property debug → bool

Whether the builder should regenerate debug entries

##### [` debug_section `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.debug_section>)

property debug\_section → str

Section that holds the debug entries

##### [` dos_stub `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.dos_stub>)

property dos\_stub → bool

Whether the builder should write back dos stub (including the rich header)

##### [` export_section `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.export_section>)

property export\_section → str

Section that holds the export table

##### [` exports `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.exports>)

property exports → bool

Whether the builder should reconstruct the export table This option should be turned on if you modify exports.

Please check LIEF website for more details

##### [` force_relocating `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.force_relocating>)

property force\_relocating → bool

##### [` idata_section `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.idata_section>)

property idata\_section → str

Section that holds the relocated import table (IAT/ILT)

##### [` imports `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.imports>)

property imports → bool

Whether the builder should reconstruct the imports table. This option should be turned on if you modify imports.

Please check LIEF website for more details

##### [` load_configuration `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.load_configuration>)

property load\_configuration → bool

Whether the builder should regenerate the load configuration

##### [` overlay `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.overlay>)

property overlay → bool

Whether the builder should write back any overlay data

##### [` reloc_section `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.reloc_section>)

property reloc\_section → str

Section that holds the relocated relocations

##### [` relocations `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.relocations>)

property relocations → bool

Whether the builder should regenerate relocations

##### [` resolved_iat_cbk `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.resolved_iat_cbk>)

property resolved\_iat\_cbk → collections.abc.Callable[[[lief.PE.Binary](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary"), [lief.PE.Import](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import> "lief.PE.Import"), [lief.PE.ImportEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ImportEntry> "lief.PE.ImportEntry"), int], None]

##### [` resources `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.resources>)

property resources → bool

Whether the builder should regenerate the resources tree

##### [` rsrc_section `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.rsrc_section>)

property rsrc\_section → str

If the resources tree needs to be relocated, this attribute defines the name of the new section that contains the relocated tree.

##### [` tls `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.tls>)

property tls → bool

Whether the builder should regenerate the TLS info

##### [` tls_section `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.config_t.tls_section>)

property tls\_section → str

Section that holds the relocated TLS info

#### [` raw_bytes `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.raw_bytes>)

raw\_bytes(*self*) → bytes

#### [` rsrc_data `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.rsrc_data>)

property rsrc\_data → memoryview

#### [` write `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Builder.write>)

write(*self*, *output: str*) → None

Write the build result into the `output` file

---

## [Resource Node](<https://lief.re/doc/latest/formats/pe/python.html#resource-node>)

![Inheritance diagram of lief._lief.PE.ResourceData, lief._lief.PE.ResourceDirectory, lief._lief.PE.ResourceNode](https://lief.re/doc/latest/_images/inheritance-60af73ee885092d06763012b658c382a2f202457.png)

### [` lief.PE.ResourceNode `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode>)

class lief.PE.ResourceNode

Bases: `Object`

Class which represents a Node in the resource tree.

It is extended by [`lief.PE.ResourceData`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceData> "lief.PE.ResourceData") and [`lief.PE.ResourceDirectory`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDirectory> "lief.PE.ResourceDirectory")

#### [` add_child `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode.add_child>)

add\_child(*self*, *node: [lief.\_lief.PE.ResourceNode](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief._lief.PE.ResourceNode")*) → [lief.\_lief.PE.ResourceNode](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief._lief.PE.ResourceNode")

Add a new child to the current node

#### [` childs `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode.childs>)

property childs → lief.PE.ResourceNode.it\_childs

Node’s children

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode.copy>)

copy(*self*) → [lief.\_lief.PE.ResourceNode](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief._lief.PE.ResourceNode") | None

Duplicate the current instance of this object

#### [` delete_childdelete_child `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode.delete_child>)

delete\_child(*self*, *node: [lief.\_lief.PE.ResourceNode](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief._lief.PE.ResourceNode")*) → None

**delete\_child(*self*, *id: int*) → None**

Overloaded function.

1. `delete_child(self, node: lief._lief.PE.ResourceNode) -> None`

Delete the given [`ResourceNode`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief.PE.ResourceNode") from the current children

2. `delete_child(self, id: int) -> None`

   > Delete the [`ResourceNode`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief.PE.ResourceNode") with the given [`id`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode.id> "lief.PE.ResourceNode.id") from the current children

#### [` depth `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode.depth>)

property depth → int

Current depth of the node in the resource tree

#### [` has_name `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode.has_name>)

property has\_name → bool

`True` if the current node uses a name

#### [` id `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode.id>)

property id → int

Integer that identifies the Type, Name, or Language ID entry.

#### [` is_data `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode.is_data>)

property is\_data → bool

`True` if the current node is a [`ResourceData`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceData> "lief.PE.ResourceData")

#### [` is_directory `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode.is_directory>)

property is\_directory → bool

`True` if the current node is a [`ResourceDirectory`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDirectory> "lief.PE.ResourceDirectory")

#### [` name `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode.name>)

property name → str

Resource’s name

#### [` parse `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode.parse>)

parse(*bytes: bytes*, *rva: int*) → [lief.PE.ResourceNode](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief.PE.ResourceNode") | None = &lt;nanobind.nb\_func object&gt;

---

## [Resource Directory](<https://lief.re/doc/latest/formats/pe/python.html#resource-directory>)

![Inheritance diagram of lief._lief.PE.ResourceDirectory](https://lief.re/doc/latest/_images/inheritance-8328839eac0f516c1cd5ade72642bc6a04518e81.png)

### [` lief.PE.ResourceDirectorylief.PE.ResourceDirectory `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDirectory>)

class lief.PE.ResourceDirectory(*self*)

**class lief.PE.ResourceDirectory(*self*, *arg: int*, */*)**

Bases: [`ResourceNode`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief._lief.PE.ResourceNode")

Overloaded function.

1. `__init__(self) -> None`

Default constructor

2. `__init__(self, arg: int, /) -> None`

Constructor from an ID

#### [` characteristics `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDirectory.characteristics>)

property characteristics → int

Resource characteristics. This field is reserved for future use. It is currently set to zero.

#### [` major_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDirectory.major_version>)

property major\_version → int

The major version number, set by the user.

#### [` minor_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDirectory.minor_version>)

property minor\_version → int

The minor version number, set by the user.

#### [` numberof_id_entries `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDirectory.numberof_id_entries>)

property numberof\_id\_entries → int

The number of directory entries immediately following the Name entries that use numeric IDs for Type, Name, or Language entries.

#### [` numberof_name_entries `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDirectory.numberof_name_entries>)

property numberof\_name\_entries → int

The number of directory entries immediately following the table that use strings to identify Type, Name, or Language entries (depending on the level of the table

#### [` time_date_stamp `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDirectory.time_date_stamp>)

property time\_date\_stamp → int

The time that the resource data was created by the resource compiler.

---

## [Resource Data](<https://lief.re/doc/latest/formats/pe/python.html#resource-data>)

![Inheritance diagram of lief._lief.PE.ResourceData](https://lief.re/doc/latest/_images/inheritance-55e48956f9b2cf7d9c131a300a29764795c01291.png)

### [` lief.PE.ResourceDatalief.PE.ResourceData `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceData>)

class lief.PE.ResourceData(*self*)

**class lief.PE.ResourceData(*self*, *content: collections.abc.Sequence[int]*, *code\_page: int = 0*)**

Bases: [`ResourceNode`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief._lief.PE.ResourceNode")

Class which represents a Data Node in the PE resources tree

Overloaded function.

1. `__init__(self) -> None`

Default constructor

2. `__init__(self, content: collections.abc.Sequence[int], code_page: int = 0) -> None`

#### [` code_page `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceData.code_page>)

property code\_page → int

Return the code page that is used to decode code point values within the resource data. Typically, the code page is the Unicode code page.

#### [` content `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceData.content>)

property content → memoryview

Resource content

#### [` offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceData.offset>)

property offset → int

Offset of the content within the resource

> **Warning**
> 
> This value can change when re-building the resource table

#### [` reserved `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceData.reserved>)

property reserved → int

Reserved value. Should be `0`

---

## [Resources Manager](<https://lief.re/doc/latest/formats/pe/python.html#resources-manager>)

### [` lief.PE.ResourcesManager `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager>)

class lief.PE.ResourcesManager(*self*, *node: [lief.\_lief.PE.ResourceNode](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief._lief.PE.ResourceNode")*)

Bases: `Object`

The Resource Manager provides an enhanced API to manipulate the resource tree

#### [` TYPE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

##### [` ACCELERATOR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.ACCELERATOR>)

ACCELERATOR = 9

##### [` ANICURSOR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.ANICURSOR>)

ANICURSOR = 21

##### [` ANIICON `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.ANIICON>)

ANIICON = 22

##### [` BITMAP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.BITMAP>)

BITMAP = 2

##### [` CURSOR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.CURSOR>)

CURSOR = 1

##### [` DIALOG `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.DIALOG>)

DIALOG = 5

##### [` DLGINCLUDE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.DLGINCLUDE>)

DLGINCLUDE = 17

##### [` FONT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.FONT>)

FONT = 8

##### [` FONTDIR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.FONTDIR>)

FONTDIR = 7

##### [` GROUP_CURSOR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.GROUP_CURSOR>)

GROUP\_CURSOR = 12

##### [` GROUP_ICON `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.GROUP_ICON>)

GROUP\_ICON = 14

##### [` HTML `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.HTML>)

HTML = 23

##### [` ICON `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.ICON>)

ICON = 3

##### [` MANIFEST `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.MANIFEST>)

MANIFEST = 24

##### [` MENU `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.MENU>)

MENU = 4

##### [` MESSAGETABLE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.MESSAGETABLE>)

MESSAGETABLE = 11

##### [` PLUGPLAY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.PLUGPLAY>)

PLUGPLAY = 19

##### [` RCDATA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.RCDATA>)

RCDATA = 10

##### [` STRING `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.STRING>)

STRING = 6

##### [` VERSION `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.VERSION>)

VERSION = 16

##### [` VXD `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.VXD>)

VXD = 20

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE.from_value>)

from\_value(*arg: int*) → [lief.PE.ResourcesManager.TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE> "lief.PE.ResourcesManager.TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` accelerator `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.accelerator>)

property accelerator → lief.PE.ResourcesManager.it\_const\_accelerators

Return list of [`ResourceAccelerator`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator> "lief.PE.ResourceAccelerator") present in the resource

#### [` add_icon `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.add_icon>)

add\_icon(*self*, *icon: [lief.\_lief.PE.ResourceIcon](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon> "lief._lief.PE.ResourceIcon")*) → None

Add an icon to the resources

#### [` change_icon `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.change_icon>)

change\_icon(*self*, *old\_one: [lief.\_lief.PE.ResourceIcon](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon> "lief._lief.PE.ResourceIcon")*, *new\_one: [lief.\_lief.PE.ResourceIcon](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon> "lief._lief.PE.ResourceIcon")*) → None

Switch the given icons

#### [` dialogs `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.dialogs>)

property dialogs → lief.PE.ResourcesManager.it\_const\_dialogs

Return the list of the [`ResourceDialog`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog> "lief.PE.ResourceDialog") present in the resource

#### [` get_node_type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.get_node_type>)

get\_node\_type(*self*, *type: [lief.\_lief.PE.ResourcesManager.TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE> "lief._lief.PE.ResourcesManager.TYPE")*) → [lief.\_lief.PE.ResourceNode](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief._lief.PE.ResourceNode") | None

Return [`ResourceNode`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode> "lief.PE.ResourceNode") with the given [`TYPE`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE> "lief.PE.ResourcesManager.TYPE") or None if not found.

#### [` has_accelerator `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.has_accelerator>)

property has\_accelerator → bool

`True` if resources contain [`ResourceAccelerator`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator> "lief.PE.ResourceAccelerator")

#### [` has_dialogs `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.has_dialogs>)

property has\_dialogs → bool

`True` if the resources contain [`ResourceDialog`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog> "lief.PE.ResourceDialog")

#### [` has_html `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.has_html>)

property has\_html → bool

`True` if resources contain HTML resource

#### [` has_icons `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.has_icons>)

property has\_icons → bool

`True` if the resources contain [`ResourceIcon`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon> "lief.PE.ResourceIcon")

#### [` has_manifest `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.has_manifest>)

property has\_manifest → bool

`True` if the resources contain a Manifest element

#### [` has_string_table `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.has_string_table>)

property has\_string\_table → bool

`True` if resources contain [`ResourceStringTable`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceStringTable> "lief.PE.ResourceStringTable")

#### [` has_type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.has_type>)

has\_type(*self*, *type: [lief.\_lief.PE.ResourcesManager.TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE> "lief._lief.PE.ResourcesManager.TYPE")*) → bool

`True` if the resource has the given [`TYPE`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE> "lief.PE.ResourcesManager.TYPE")

#### [` has_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.has_version>)

property has\_version → bool

`True` if the resources contain a [`ResourceVersion`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion> "lief.PE.ResourceVersion")

#### [` html `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.html>)

property html → list[str]

HTML resource as the list of `string`

#### [` icons `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.icons>)

property icons → lief.PE.ResourcesManager.it\_const\_icons

Return the list of the [`ResourceIcon`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon> "lief.PE.ResourceIcon") present in the resource

#### [` manifest `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.manifest>)

property manifest → str | bytes

Manifest as a `string`

#### [` print `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.print>)

print(*self*, *max\_depth: int = 0*) → str

Print the current resource tree

#### [` string_entry_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.string_entry_t>)

class string\_entry\_t

Bases: `object`

##### [` id `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.string_entry_t.id>)

property id → int

##### [` string `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.string_entry_t.string>)

property string → str

#### [` string_table `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.string_table>)

property string\_table → list[[lief.PE.ResourcesManager.string\_entry\_t](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.string_entry_t> "lief.PE.ResourcesManager.string_entry_t")]

Return the list of the strings embedded in the string table (`RT_STRING`)

#### [` types `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.types>)

property types → list[[lief.PE.ResourcesManager.TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE> "lief.PE.ResourcesManager.TYPE")]

Return list of [`TYPE`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.TYPE> "lief.PE.ResourcesManager.TYPE") present in the resources

#### [` version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager.version>)

property version → list[[lief.PE.ResourceVersion](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion> "lief.PE.ResourceVersion")]

Return a list of version info (`VS_VERSIONINFO`).

---

## [Resource Icon](<https://lief.re/doc/latest/formats/pe/python.html#resource-icon>)

### [` lief.PE.ResourceIcon `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon>)

class lief.PE.ResourceIcon

Bases: `Object`

#### [` bit_count `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon.bit_count>)

property bit\_count → int

Bits per pixel

#### [` color_count `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon.color_count>)

property color\_count → int

Number of colors in image (0 if &gt;=8bpp)

#### [` from_serialization `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon.from_serialization>)

from\_serialization(*arg: bytes*) → [lief.PE.ResourceIcon](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon> "lief.PE.ResourceIcon") | [lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief.lief_errors") = &lt;nanobind.nb\_func object&gt;

#### [` height `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon.height>)

property height → int

Height in pixels of the image

#### [` id `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon.id>)

property id → int

Id associated with the icon

#### [` lang `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon.lang>)

property lang → int

Language associated with the icon

#### [` pixels `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon.pixels>)

property pixels → memoryview

#### [` planes `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon.planes>)

property planes → int

Color Planes

#### [` reserved `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon.reserved>)

property reserved → int

Reserved (must be 0)

#### [` save `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon.save>)

save(*self*, *filepath: str*) → None

Save the icon to the given filepath

#### [` serialize `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon.serialize>)

serialize(*self*) → bytes

Serialize the current icon into bytes

#### [` sublang `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon.sublang>)

property sublang → int

Sublanguage associated with the icon

#### [` width `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceIcon.width>)

property width → int

Width in pixels of the image

---

## [Resource Dialog](<https://lief.re/doc/latest/formats/pe/python.html#resource-dialog>)

![Inheritance diagram of lief._lief.PE.ResourceDialogExtended, lief._lief.PE.ResourceDialog, lief._lief.PE.ResourceDialogRegular](https://lief.re/doc/latest/_images/inheritance-f5b31af510272551ba58c9ca753c484a8ed21077.png)

### [` lief.PE.ResourceDialog `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog>)

class lief.PE.ResourceDialog

Bases: `Object`

This class is the base class for either a regular (legacy) Dialog or an extended Dialog. These different kinds of Dialogs are documented by MS at the following addresses:

- [https://learn.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-dlgtemplate](<https://learn.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-dlgtemplate>)
- [https://learn.microsoft.com/fr-fr/windows/win32/dlgbox/dlgitemtemplateex](<https://learn.microsoft.com/fr-fr/windows/win32/dlgbox/dlgitemtemplateex>)

#### [` CONTROL_STYLES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES>)

class CONTROL\_STYLES(*\*values*)

Bases: `Flag`

From: [https://learn.microsoft.com/en-us/windows/win32/controls/common-control-styles](<https://learn.microsoft.com/en-us/windows/win32/controls/common-control-styles>)

##### [` ADJUSTABLE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES.ADJUSTABLE>)

ADJUSTABLE = 32

##### [` BOTTOM `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES.BOTTOM>)

BOTTOM = 3

##### [` LEFT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES.LEFT>)

LEFT = 129

##### [` NODIVIDER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES.NODIVIDER>)

NODIVIDER = 64

##### [` NOMOVEX `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES.NOMOVEX>)

NOMOVEX = 130

##### [` NOMOVEY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES.NOMOVEY>)

NOMOVEY = 2

##### [` NOPARENTALIGN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES.NOPARENTALIGN>)

NOPARENTALIGN = 8

##### [` NORESIZE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES.NORESIZE>)

NORESIZE = 4

##### [` RIGHT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES.RIGHT>)

RIGHT = 131

##### [` TOP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES.TOP>)

TOP = 1

##### [` VERT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES.VERT>)

VERT = 128

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES.from_value>)

from\_value(*arg: int*) → [lief.PE.ResourceDialog.CONTROL\_STYLES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES> "lief.PE.ResourceDialog.CONTROL_STYLES") = &lt;nanobind.nb\_func object&gt;

#### [` DIALOG_STYLES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES>)

class DIALOG\_STYLES(*\*values*)

Bases: `Flag`

From: [https://learn.microsoft.com/en-us/windows/win32/dlgbox/dialog-box-styles](<https://learn.microsoft.com/en-us/windows/win32/dlgbox/dialog-box-styles>)

##### [` ABSALIGN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.ABSALIGN>)

ABSALIGN = 1

##### [` CENTER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.CENTER>)

CENTER = 2048

##### [` CENTERMOUSE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.CENTERMOUSE>)

CENTERMOUSE = 4096

##### [` CONTEXTHELP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.CONTEXTHELP>)

CONTEXTHELP = 8192

##### [` CONTROL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.CONTROL>)

CONTROL = 1024

##### [` FIXEDSYS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.FIXEDSYS>)

FIXEDSYS = 8

##### [` LOCALEDIT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.LOCALEDIT>)

LOCALEDIT = 32

##### [` MODALFRAME `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.MODALFRAME>)

MODALFRAME = 128

##### [` NOFAILCREATE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.NOFAILCREATE>)

NOFAILCREATE = 16

##### [` NOIDLEMSG `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.NOIDLEMSG>)

NOIDLEMSG = 256

##### [` S3DLOOK `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.S3DLOOK>)

S3DLOOK = 4

##### [` SETFONT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.SETFONT>)

SETFONT = 64

##### [` SETFOREGROUND `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.SETFOREGROUND>)

SETFOREGROUND = 512

##### [` SHELLFONT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.SHELLFONT>)

SHELLFONT = 72

##### [` SYSMODAL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.SYSMODAL>)

SYSMODAL = 2

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.from_value>)

from\_value(*arg: int*) → [lief.PE.ResourceDialog.DIALOG\_STYLES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES> "lief.PE.ResourceDialog.DIALOG_STYLES") = &lt;nanobind.nb\_func object&gt;

#### [` Item `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.Item>)

class Item

Bases: `object`

##### [` clazz `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.Item.clazz>)

property clazz → int | str | None

Window class of the control. This can be either: a string that specifies the name of a registered window class or an ordinal value of a predefined system class.

##### [` control_styles `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.Item.control_styles>)

property control\_styles → list[[lief.PE.ResourceDialog.CONTROL\_STYLES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES> "lief.PE.ResourceDialog.CONTROL_STYLES")]

List of [`CONTROL_STYLES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES> "lief.PE.ResourceDialog.CONTROL_STYLES") used by this item

##### [` creation_data `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.Item.creation_data>)

property creation\_data → memoryview

Creation data that is passed to the control’s window procedure

##### [` cx `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.Item.cx>)

property cx → int

The width, in dialog box units, of the control.

##### [` cy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.Item.cy>)

property cy → int

The height, in dialog box units, of the control.

##### [` extended_style `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.Item.extended_style>)

property extended\_style → int

The extended styles for a window. This member is not used to create controls in dialog boxes, but applications that use dialog box templates can use it to create other types of windows.

It can take a combination of [`WINDOW_EXTENDED_STYLES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES> "lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES")

##### [` hashas `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.Item.has>)

has(*self*, *style: [lief.\_lief.PE.ResourceDialog.WINDOW\_STYLES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES> "lief._lief.PE.ResourceDialog.WINDOW_STYLES")*) → bool

**has(*self*, *style: [lief.\_lief.PE.ResourceDialog.CONTROL\_STYLES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES> "lief._lief.PE.ResourceDialog.CONTROL_STYLES")*) → bool**

Overloaded function.

1. `has(self, style: lief._lief.PE.ResourceDialog.WINDOW_STYLES) -> bool`

Check if this item has the given [`WINDOW_STYLES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES> "lief.PE.ResourceDialog.WINDOW_STYLES")

2. `has(self, style: lief._lief.PE.ResourceDialog.CONTROL_STYLES) -> bool`

Check if this item has the given [`CONTROL_STYLES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES> "lief.PE.ResourceDialog.CONTROL_STYLES")

##### [` id `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.Item.id>)

property id → int

The control identifier.

##### [` style `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.Item.style>)

property style → int

The style of the control. This can be a combination of [`WINDOW_STYLES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES> "lief.PE.ResourceDialog.WINDOW_STYLES") or [`CONTROL_STYLES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.CONTROL_STYLES> "lief.PE.ResourceDialog.CONTROL_STYLES").

##### [` title `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.Item.title>)

property title → int | str | None

Title of the item which can be either: a string that specifies the initial text or an ordinal value of a resource, such as an icon, in an executable file

##### [` window_styles `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.Item.window_styles>)

property window\_styles → list[[lief.PE.ResourceDialog.WINDOW\_STYLES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES> "lief.PE.ResourceDialog.WINDOW_STYLES")]

List of [`WINDOW_STYLES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES> "lief.PE.ResourceDialog.WINDOW_STYLES") used by this item

##### [` x `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.Item.x>)

property x → int

The x-coordinate, in dialog box units, of the upper-left corner of the control. This coordinate is always relative to the upper-left corner of the dialog box’s client area.

##### [` y `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.Item.y>)

property y → int

The y-coordinate, in dialog box units, of the upper-left corner of the control. This coordinate is always relative to the upper-left corner of the dialog box’s client area.

#### [` TYPE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

Enum for discriminating the kind of the Dialog (regular vs extended)

##### [` EXTENDED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.TYPE.EXTENDED>)

EXTENDED = 2

##### [` REGULAR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.TYPE.REGULAR>)

REGULAR = 1

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.TYPE.UNKNOWN>)

UNKNOWN = 0

#### [` WINDOW_EXTENDED_STYLES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES>)

class WINDOW\_EXTENDED\_STYLES(*\*values*)

Bases: `Flag`

From: [https://docs.microsoft.com/en-us/windows/win32/winmsg/extended-window-styles](<https://docs.microsoft.com/en-us/windows/win32/winmsg/extended-window-styles>)

##### [` ACCEPTFILES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.ACCEPTFILES>)

ACCEPTFILES = 16

##### [` APPWINDOW `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.APPWINDOW>)

APPWINDOW = 262144

##### [` CLIENTEDGE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.CLIENTEDGE>)

CLIENTEDGE = 512

##### [` CONTEXTHELP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.CONTEXTHELP>)

CONTEXTHELP = 1024

##### [` CONTROLPARENT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.CONTROLPARENT>)

CONTROLPARENT = 65536

##### [` DLGMODALFRAME `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.DLGMODALFRAME>)

DLGMODALFRAME = 1

##### [` LEFT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.LEFT>)

LEFT = 0

##### [` LEFTSCROLLBAR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.LEFTSCROLLBAR>)

LEFTSCROLLBAR = 16384

##### [` MDICHILD `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.MDICHILD>)

MDICHILD = 64

##### [` NOPARENTNOTIFY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.NOPARENTNOTIFY>)

NOPARENTNOTIFY = 4

##### [` RIGHT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.RIGHT>)

RIGHT = 4096

##### [` RTLREADING `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.RTLREADING>)

RTLREADING = 8192

##### [` STATICEDGE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.STATICEDGE>)

STATICEDGE = 131072

##### [` TOOLWINDOW `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.TOOLWINDOW>)

TOOLWINDOW = 128

##### [` TOPMOST `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.TOPMOST>)

TOPMOST = 8

##### [` TRANSPARENT_STY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.TRANSPARENT_STY>)

TRANSPARENT\_STY = 32

##### [` WINDOWEDGE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.WINDOWEDGE>)

WINDOWEDGE = 256

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES.from_value>)

from\_value(*arg: int*) → [lief.PE.ResourceDialog.WINDOW\_EXTENDED\_STYLES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES> "lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES") = &lt;nanobind.nb\_func object&gt;

#### [` WINDOW_STYLES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES>)

class WINDOW\_STYLES(*\*values*)

Bases: `Flag`

From: [https://docs.microsoft.com/en-us/windows/win32/winmsg/window-styles](<https://docs.microsoft.com/en-us/windows/win32/winmsg/window-styles>)

##### [` BORDER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.BORDER>)

BORDER = 8388608

##### [` CAPTION `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.CAPTION>)

CAPTION = 12582912

##### [` CHILD `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.CHILD>)

CHILD = 1073741824

##### [` CLIPCHILDREN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.CLIPCHILDREN>)

CLIPCHILDREN = 33554432

##### [` CLIPSIBLINGS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.CLIPSIBLINGS>)

CLIPSIBLINGS = 67108864

##### [` DISABLED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.DISABLED>)

DISABLED = 134217728

##### [` DLGFRAME `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.DLGFRAME>)

DLGFRAME = 4194304

##### [` GROUP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.GROUP>)

GROUP = 131072

##### [` HSCROLL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.HSCROLL>)

HSCROLL = 1048576

##### [` MAXIMIZE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.MAXIMIZE>)

MAXIMIZE = 16777216

##### [` MINIMIZE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.MINIMIZE>)

MINIMIZE = 536870912

##### [` OVERLAPPED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.OVERLAPPED>)

OVERLAPPED = 0

##### [` POPUP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.POPUP>)

POPUP = 2147483648

##### [` SYSMENU `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.SYSMENU>)

SYSMENU = 524288

##### [` TABSTOP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.TABSTOP>)

TABSTOP = 65536

##### [` THICKFRAME `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.THICKFRAME>)

THICKFRAME = 262144

##### [` VISIBLE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.VISIBLE>)

VISIBLE = 268435456

##### [` VSCROLL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.VSCROLL>)

VSCROLL = 2097152

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.from_value>)

from\_value(*arg: int*) → [lief.PE.ResourceDialog.WINDOW\_STYLES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES> "lief.PE.ResourceDialog.WINDOW_STYLES") = &lt;nanobind.nb\_func object&gt;

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.copy>)

copy(*self*) → [lief.\_lief.PE.ResourceDialog](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog> "lief._lief.PE.ResourceDialog") | None

Duplicate the current instance of this object

#### [` cx `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.cx>)

property cx → int

The width, in dialog box units, of the dialog box.

#### [` cy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.cy>)

property cy → int

The height, in dialog box units, of the dialog box

#### [` extended_style `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.extended_style>)

property extended\_style → int

The extended styles for a window. This member is not used to create dialog boxes, but applications that use dialog box templates can use it to create other types of windows. For a list of values, see [`WINDOW_EXTENDED_STYLES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES> "lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES")

#### [` hashashas `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.has>)

has(*self*, *arg: [lief.\_lief.PE.ResourceDialog.DIALOG\_STYLES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES> "lief._lief.PE.ResourceDialog.DIALOG_STYLES")*, */*) → bool

**has(*self*, *arg: [lief.\_lief.PE.ResourceDialog.WINDOW\_STYLES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES> "lief._lief.PE.ResourceDialog.WINDOW_STYLES")*, */*) → bool

**has(*self*, *arg: [lief.\_lief.PE.ResourceDialog.WINDOW\_EXTENDED\_STYLES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES> "lief._lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES")*, */*) → bool****

Overloaded function.

1. `has(self, arg: lief._lief.PE.ResourceDialog.DIALOG_STYLES, /) -> bool`

Check if the dialog uses the given dialog style

2. `has(self, arg: lief._lief.PE.ResourceDialog.WINDOW_STYLES, /) -> bool`

Check if the dialog uses the given window style

3. `has(self, arg: lief._lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES, /) -> bool`

Check if the dialog uses the given extended window style

#### [` menu `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.menu>)

property menu → int | str | None

ordinal or name value of a menu resource

#### [` style `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.style>)

property style → int

The style of the dialog box. This member can be a combination of window style values (such as [`CAPTION`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.CAPTION> "lief.PE.ResourceDialog.WINDOW_STYLES.CAPTION") and [`SYSMENU`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES.SYSMENU> "lief.PE.ResourceDialog.WINDOW_STYLES.SYSMENU")) and dialog box style values (such as [`CENTER`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES.CENTER> "lief.PE.ResourceDialog.DIALOG_STYLES.CENTER")).

#### [` styles_list `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.styles_list>)

property styles\_list → list[[lief.PE.ResourceDialog.DIALOG\_STYLES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES> "lief.PE.ResourceDialog.DIALOG_STYLES")]

List of [`DIALOG_STYLES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.DIALOG_STYLES> "lief.PE.ResourceDialog.DIALOG_STYLES") used by this dialog

#### [` title `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.title>)

property title → str

title of the dialog box

#### [` type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.type>)

property type → [lief.PE.ResourceDialog.TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.TYPE> "lief.PE.ResourceDialog.TYPE")

#### [` window_class `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.window_class>)

property window\_class → int | str | None

ordinal of a predefined system window class or name of a registered window class

#### [` windows_ext_styles_list `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.windows_ext_styles_list>)

property windows\_ext\_styles\_list → list[[lief.PE.ResourceDialog.WINDOW\_EXTENDED\_STYLES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES> "lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES")]

List of [`WINDOW_EXTENDED_STYLES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES> "lief.PE.ResourceDialog.WINDOW_EXTENDED_STYLES") used by this dialog

#### [` windows_styles_list `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.windows_styles_list>)

property windows\_styles\_list → list[[lief.PE.ResourceDialog.WINDOW\_STYLES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES> "lief.PE.ResourceDialog.WINDOW_STYLES")]

List of [`WINDOW_STYLES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.WINDOW_STYLES> "lief.PE.ResourceDialog.WINDOW_STYLES") used by this dialog

#### [` x `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.x>)

property x → int

The x-coordinate, in dialog box units, of the upper-left corner of the dialog box.

#### [` y `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.y>)

property y → int

The y-coordinate, in dialog box units, of the upper-left corner of the dialog box.

---

## [Resource Dialog – Regular](<https://lief.re/doc/latest/formats/pe/python.html#resource-dialog-regular>)

![Inheritance diagram of lief._lief.PE.ResourceDialogRegular](https://lief.re/doc/latest/_images/inheritance-2b9c806f92793b04be85796f6188ca18a6b07e0c.png)

### [` lief.PE.ResourceDialogRegular `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogRegular>)

class lief.PE.ResourceDialogRegular(*self*)

Bases: [`ResourceDialog`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog> "lief._lief.PE.ResourceDialog")

Implementation for a regular/legacy dialog box.

See: [https://learn.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-dlgtemplate](<https://learn.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-dlgtemplate>)

#### [` Item `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogRegular.Item>)

class Item(*self*)

Bases: [`Item`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.Item> "lief._lief.PE.ResourceDialog.Item")

This class represents a `DLGTEMPLATE` item (`DLGITEMTEMPLATE`) See: [https://learn.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-dlgitemtemplate](<https://learn.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-dlgitemtemplate>)

#### [` add_item `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogRegular.add_item>)

add\_item(*self*, *item: [lief.\_lief.PE.ResourceDialogRegular.Item](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogRegular.Item> "lief._lief.PE.ResourceDialogRegular.Item")*) → None

Add a new control item to the dialog

#### [` font `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogRegular.font>)

property font → [lief.PE.ResourceDialogRegular.font\_t](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogRegular.font_t> "lief.PE.ResourceDialogRegular.font_t")

Additional font information

#### [` font_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogRegular.font_t>)

class font\_t

Bases: `object`

This structure represents additional font information that might be embedded at the end of the DLGTEMPLATE stream

##### [` name `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogRegular.font_t.name>)

property name → str

##### [` point_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogRegular.font_t.point_size>)

property point\_size → int

#### [` items `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogRegular.items>)

property items → lief.PE.ResourceDialogRegular.it\_items

Iterator over the different control items

#### [` nb_items `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogRegular.nb_items>)

property nb\_items → int

Number of control items

---

## [Resource Dialog – Extended](<https://lief.re/doc/latest/formats/pe/python.html#resource-dialog-extended>)

![Inheritance diagram of lief._lief.PE.ResourceDialogExtended](https://lief.re/doc/latest/_images/inheritance-a63e6bbdd6a5981d2f0ab5c6629aaaf03139aed7.png)

### [` lief.PE.ResourceDialogExtended `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended>)

class lief.PE.ResourceDialogExtended(*self*)

Bases: [`ResourceDialog`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog> "lief._lief.PE.ResourceDialog")

Implementation for the new extended dialogbox format.

See: [https://learn.microsoft.com/en-us/windows/win32/dlgbox/dlgtemplateex](<https://learn.microsoft.com/en-us/windows/win32/dlgbox/dlgtemplateex>)

#### [` Item `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended.Item>)

class Item(*self*)

Bases: [`Item`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialog.Item> "lief._lief.PE.ResourceDialog.Item")

This class represents a `DLGTEMPLATEEX` item (`DLGITEMTEMPLATEEX`).

See: [https://learn.microsoft.com/en-us/windows/win32/dlgbox/dlgitemtemplateex](<https://learn.microsoft.com/en-us/windows/win32/dlgbox/dlgitemtemplateex>)

##### [` help_id `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended.Item.help_id>)

property help\_id → int

The help context identifier for the control. When the system sends a `WM_HELP` message, it passes the `helpID` value in the `dwContextId` member of the `HELPINFO` structure.

#### [` add_item `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended.add_item>)

add\_item(*self*, *item: [lief.\_lief.PE.ResourceDialogExtended.Item](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended.Item> "lief._lief.PE.ResourceDialogExtended.Item")*) → None

Add a new control item to the dialog

#### [` font `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended.font>)

property font → [lief.PE.ResourceDialogExtended.font\_t](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended.font_t> "lief.PE.ResourceDialogExtended.font_t")

Additional font information

#### [` font_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended.font_t>)

class font\_t

Bases: `object`

Font information for the font to use for the text in the dialog box and its controls

##### [` charset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended.font_t.charset>)

property charset → int

The character set to be used

##### [` italic `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended.font_t.italic>)

property italic → bool

Indicates whether the font is italic

##### [` point_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended.font_t.point_size>)

property point\_size → int

The point size of the font

##### [` typeface `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended.font_t.typeface>)

property typeface → str

The name of the typeface for the font.

##### [` weight `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended.font_t.weight>)

property weight → int

The weight of the font

#### [` help_id `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended.help_id>)

property help\_id → int

The help context identifier for the dialog box window. When the system sends a `WM_HELP` message, it passes the `helpID` value in the `dwContextId` member of the `HELPINFO` structure.

#### [` items `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended.items>)

property items → lief.PE.ResourceDialogExtended.it\_items

Iterator over the different control items

#### [` signature `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended.signature>)

property signature → int

Indicates whether a template is an extended dialog box template. If signature is 0xFFFF, this is an extended dialog box template. In this case, the dlgVer member specifies the template version number.

#### [` version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceDialogExtended.version>)

property version → int

The version number of the extended dialog box template. This member must be set to 1.

---

## [Resource Version](<https://lief.re/doc/latest/formats/pe/python.html#resource-version>)

### [` lief.PE.ResourceVersion `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion>)

class lief.PE.ResourceVersion

Bases: `Object`

Class that represents the data associated with the `RT_VERSION` entry

See: VS\_VERSIONINFO – [https://docs.microsoft.com/en-us/windows/win32/menurc/vs-versioninfo](<https://docs.microsoft.com/en-us/windows/win32/menurc/vs-versioninfo>)

#### [` file_info `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.file_info>)

property file\_info → [lief.PE.ResourceVersion.fixed\_file\_info\_t](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t> "lief.PE.ResourceVersion.fixed_file_info_t")

Return the fixed file info (`VS_FIXEDFILEINFO`)

#### [` fixed_file_info_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t>)

class fixed\_file\_info\_t

Bases: `object`

This structure represents the `VS_FIXEDFILEINFO` structure defined in `verrsrc.h`.

##### [` FILE_FLAGS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_FLAGS>)

class FILE\_FLAGS(*\*values*)

Bases: `Enum`

###### [` DEBUG `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_FLAGS.DEBUG>)

DEBUG = 1

###### [` INFO_INFERRED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_FLAGS.INFO_INFERRED>)

INFO\_INFERRED = 16

###### [` PATCHED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_FLAGS.PATCHED>)

PATCHED = 4

###### [` PRERELEASE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_FLAGS.PRERELEASE>)

PRERELEASE = 2

###### [` PRIVATEBUILD `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_FLAGS.PRIVATEBUILD>)

PRIVATEBUILD = 8

###### [` SPECIALBUILD `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_FLAGS.SPECIALBUILD>)

SPECIALBUILD = 32

##### [` FILE_TYPE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE>)

class FILE\_TYPE(*\*values*)

Bases: `Enum`

###### [` APP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE.APP>)

APP = 1

###### [` DLL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE.DLL>)

DLL = 2

###### [` DRV `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE.DRV>)

DRV = 3

###### [` FONT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE.FONT>)

FONT = 4

###### [` STATIC_LIB `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE.STATIC_LIB>)

STATIC\_LIB = 7

###### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE.UNKNOWN>)

UNKNOWN = 0

###### [` VXD `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE.VXD>)

VXD = 5

##### [` FILE_TYPE_DETAILS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS>)

class FILE\_TYPE\_DETAILS(*\*values*)

Bases: `Enum`

###### [` DRV_COMM `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS.DRV_COMM>)

DRV\_COMM = 8589934602

###### [` DRV_DISPLAY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS.DRV_DISPLAY>)

DRV\_DISPLAY = 8589934596

###### [` DRV_INPUTMETHOD `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS.DRV_INPUTMETHOD>)

DRV\_INPUTMETHOD = 8589934603

###### [` DRV_INSTALLABLE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS.DRV_INSTALLABLE>)

DRV\_INSTALLABLE = 8589934600

###### [` DRV_KEYBOARD `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS.DRV_KEYBOARD>)

DRV\_KEYBOARD = 8589934594

###### [` DRV_LANGUAGE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS.DRV_LANGUAGE>)

DRV\_LANGUAGE = 8589934595

###### [` DRV_MOUSE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS.DRV_MOUSE>)

DRV\_MOUSE = 8589934597

###### [` DRV_NETWORK `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS.DRV_NETWORK>)

DRV\_NETWORK = 8589934598

###### [` DRV_PRINTER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS.DRV_PRINTER>)

DRV\_PRINTER = 8589934593

###### [` DRV_SOUND `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS.DRV_SOUND>)

DRV\_SOUND = 8589934601

###### [` DRV_SYSTEM `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS.DRV_SYSTEM>)

DRV\_SYSTEM = 8589934599

###### [` DRV_VERSIONED_PRINTER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS.DRV_VERSIONED_PRINTER>)

DRV\_VERSIONED\_PRINTER = 12

###### [` FONT_RASTER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS.FONT_RASTER>)

FONT\_RASTER = 17179869185

###### [` FONT_TRUETYPE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS.FONT_TRUETYPE>)

FONT\_TRUETYPE = 17179869187

###### [` FONT_VECTOR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS.FONT_VECTOR>)

FONT\_VECTOR = 17179869186

###### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS.UNKNOWN>)

UNKNOWN = 0

##### [` VERSION_OS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS>)

class VERSION\_OS(*\*values*)

Bases: `Enum`

###### [` DOS_WINDOWS16 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS.DOS_WINDOWS16>)

DOS\_WINDOWS16 = 65537

###### [` DOS_WINDOWS32 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS.DOS_WINDOWS32>)

DOS\_WINDOWS32 = 65540

###### [` NT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS.NT>)

NT = 262144

###### [` NT_WINDOWS32 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS.NT_WINDOWS32>)

NT\_WINDOWS32 = 262148

###### [` OS216 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS.OS216>)

OS216 = 131072

###### [` OS216_PM16 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS.OS216_PM16>)

OS216\_PM16 = 131074

###### [` OS232 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS.OS232>)

OS232 = 196608

###### [` OS232_PM32 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS.OS232_PM32>)

OS232\_PM32 = 196611

###### [` PM16 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS.PM16>)

PM16 = 2

###### [` PM32 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS.PM32>)

PM32 = 3

###### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS.UNKNOWN>)

UNKNOWN = 0

###### [` WINCE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS.WINCE>)

WINCE = 327680

###### [` WINDOWS16 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS.WINDOWS16>)

WINDOWS16 = 1

###### [` WINDOWS32 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS.WINDOWS32>)

WINDOWS32 = 4

##### [` file_date_ls `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.file_date_ls>)

property file\_date\_ls → int

The least significant 32 bits of the file’s 64-bit binary creation date and time stamp.

##### [` file_date_ms `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.file_date_ms>)

property file\_date\_ms → int

The most significant 32 bits of the file’s 64-bit binary creation date and time stamp.

##### [` file_flags `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.file_flags>)

property file\_flags → int

Contains a bitmask that specifies the Boolean attributes of the file. This member can include one or more of the values specified in [`FILE_FLAGS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_FLAGS> "lief.PE.ResourceVersion.fixed_file_info_t.FILE_FLAGS").

##### [` file_flags_mask `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.file_flags_mask>)

property file\_flags\_mask → int

Contains a bitmask that specifies the valid bits in file\_flags. A bit is valid only if it was defined when the file was created.

##### [` file_os `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.file_os>)

property file\_os → int

The operating system for which this file was designed. This member can be one of the values specified in [`VERSION_OS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS> "lief.PE.ResourceVersion.fixed_file_info_t.VERSION_OS").

##### [` file_subtype `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.file_subtype>)

property file\_subtype → int

The function of the file. The possible values depend on the value of file\_type.

##### [` file_type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.file_type>)

property file\_type → int

The general type of file. This member can be one of the values specified in [`FILE_TYPE`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE> "lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE"). All other values are reserved.

##### [` file_type_details `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.file_type_details>)

property file\_type\_details → [lief.PE.ResourceVersion.fixed\_file\_info\_t.FILE\_TYPE\_DETAILS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS> "lief.PE.ResourceVersion.fixed_file_info_t.FILE_TYPE_DETAILS")

##### [` file_version_ls `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.file_version_ls>)

property file\_version\_ls → int

The least significant 32 bits of the file’s binary version number. This member is used with [`file_version_ms`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.file_version_ms> "lief.PE.ResourceVersion.fixed_file_info_t.file_version_ms") to form a 64-bit value used for numeric comparisons.

##### [` file_version_ms `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.file_version_ms>)

property file\_version\_ms → int

The most significant 32 bits of the file’s binary version number. This member is used with [`file_version_ls`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.file_version_ls> "lief.PE.ResourceVersion.fixed_file_info_t.file_version_ls") to form a 64-bit value used for numeric comparisons.

##### [` flags `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.flags>)

property flags → list[[lief.PE.ResourceVersion.fixed\_file\_info\_t.FILE\_FLAGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_FLAGS> "lief.PE.ResourceVersion.fixed_file_info_t.FILE_FLAGS")]

List of flags

##### [` has `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.has>)

has(*self*, *flag: [lief.\_lief.PE.ResourceVersion.fixed\_file\_info\_t.FILE\_FLAGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.FILE_FLAGS> "lief._lief.PE.ResourceVersion.fixed_file_info_t.FILE_FLAGS")*) → bool

Check if the given flag is present

##### [` product_version_ls `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.product_version_ls>)

property product\_version\_ls → int

The least significant 32 bits of the binary version number of the product with which this file was distributed. This member is used with [`product_version_ms`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.product_version_ms> "lief.PE.ResourceVersion.fixed_file_info_t.product_version_ms") to form a 64-bit value used for numeric comparisons.

##### [` product_version_ms `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.product_version_ms>)

property product\_version\_ms → int

The most significant 32 bits of the binary version number of the product with which this file was distributed. This member is used with [`product_version_ls`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.product_version_ls> "lief.PE.ResourceVersion.fixed_file_info_t.product_version_ls") to form a 64-bit value used for numeric comparisons.

##### [` signature `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.signature>)

property signature → int

Contains the value `0xFEEF04BD`. This is used with the `szKey` member of the `VS_VERSIONINFO` structure when searching a file for the `VS_FIXEDFILEINFO` structure.

##### [` struct_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.fixed_file_info_t.struct_version>)

property struct\_version → int

The binary version number of this structure. The high-order word of this member contains the major version number, and the low-order word contains the minor version number.

#### [` key `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.key>)

property key → str

The Unicode string L”VS\_VERSION\_INFO””

#### [` string_file_info `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.string_file_info>)

property string\_file\_info → [lief.PE.ResourceStringFileInfo](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceStringFileInfo> "lief.PE.ResourceStringFileInfo") | None

Return the `StringFileInfo` element

#### [` type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.type>)

property type → int

The type of data in the version resource: \* `1` if it contains text data \* `0` if it contains binary data

#### [` var_file_info `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVersion.var_file_info>)

property var\_file\_info → [lief.PE.ResourceVarFileInfo](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVarFileInfo> "lief.PE.ResourceVarFileInfo") | None

Return the `VarFileInfo` element

---

## [Resource Var File Info](<https://lief.re/doc/latest/formats/pe/python.html#resource-var-file-info>)

### [` lief.PE.ResourceVarFileInfo `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVarFileInfo>)

class lief.PE.ResourceVarFileInfo

Bases: `Object`

Representation of the `VarFileInfo` structure

This structure represents the organization of data in a file-version resource. It contains version information not dependent on a particular language and code page combination.

See: [https://learn.microsoft.com/en-us/windows/win32/menurc/varfileinfo](<https://learn.microsoft.com/en-us/windows/win32/menurc/varfileinfo>)

#### [` key `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVarFileInfo.key>)

property key → str

Signature of the structure. Must be the unicode string “VarFileInfo”

#### [` type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVarFileInfo.type>)

property type → int

The type of data in the version resource: \* `1` if it contains text data \* `0` if it contains binary data

#### [` vars `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVarFileInfo.vars>)

property vars → lief.PE.ResourceVarFileInfo.it\_vars

Iterator over the embedded variables associated to the structure

---

## [Resource String File Info](<https://lief.re/doc/latest/formats/pe/python.html#resource-string-file-info>)

### [` lief.PE.ResourceStringFileInfo `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceStringFileInfo>)

class lief.PE.ResourceStringFileInfo

Bases: `Object`

Representation of the `StringFileInfo` structure

See: [https://docs.microsoft.com/en-us/windows/win32/menurc/stringfileinfo](<https://docs.microsoft.com/en-us/windows/win32/menurc/stringfileinfo>)

#### [` children `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceStringFileInfo.children>)

property children → lief.PE.ResourceStringFileInfo.it\_elements

Iterator over the children values

#### [` key `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceStringFileInfo.key>)

property key → str

Signature of the structure. Must be the unicode string “StringFileInfo”

#### [` type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceStringFileInfo.type>)

property type → int

The type of data in the version resource: \* `1` if it contains text data \* `0` if it contains binary data

---

## [Resource Var](<https://lief.re/doc/latest/formats/pe/python.html#resource-var>)

### [` lief.PE.ResourceVar `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVar>)

class lief.PE.ResourceVar

Bases: `object`

This class represents an element of the [`ResourceVarFileInfo`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVarFileInfo> "lief.PE.ResourceVarFileInfo") structure It typically contains a list of language and code page identifier pairs that the version of the application or DLL supports.

See: [https://learn.microsoft.com/en-us/windows/win32/menurc/var-str](<https://learn.microsoft.com/en-us/windows/win32/menurc/var-str>)

#### [` key `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVar.key>)

property key → str

Signature of the structure. Must be the unicode string “Translation”

#### [` type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVar.type>)

property type → int

The type of data in the version resource: \* `1` if it contains text data \* `0` if it contains binary data

#### [` values `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceVar.values>)

property values → list[int]

Return the translation values.

The low-order word of each uint32\_t must contain a Microsoft language identifier, and the high-order word must contain the IBM code page number. Either high-order or low-order word can be zero, indicating that the file is language or code page independent

---

## [Resource String Table](<https://lief.re/doc/latest/formats/pe/python.html#resource-string-table>)

### [` lief.PE.ResourceStringTable `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceStringTable>)

class lief.PE.ResourceStringTable

Bases: `Object`

This class represents the `StringTable` structure. This structure can be seen as a dictionary of key, values with key and values defined as utf-16 strings.

#### [` entries `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceStringTable.entries>)

property entries → lief.PE.ResourceStringTable.it\_entries

Iterator over the different [`entry_t`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceStringTable.entry_t> "lief.PE.ResourceStringTable.entry_t") in this table

#### [` entry_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceStringTable.entry_t>)

class entry\_t

Bases: `object`

An entry in this table which is composed of an UTF-16 key and an UTF-16 value.

##### [` key `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceStringTable.entry_t.key>)

property key → str

##### [` value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceStringTable.entry_t.value>)

property value → str

#### [` get `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceStringTable.get>)

get(*self*, *key: str*) → str | None

#### [` key `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceStringTable.key>)

property key → str

An 8-digit hexadecimal number stored as a Unicode string. The four most significant digits represent the language identifier. The four least significant digits represent the code page for which the data is formatted. Each Microsoft Standard Language identifier contains two parts: the low-order 10 bits specify the major language, and the high-order 6 bits specify the sublanguage.

#### [` type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceStringTable.type>)

property type → int

The type of data in the version resource: \* `1` if it contains text data \* `0` if it contains binary data

---

## [Resource Accelerator](<https://lief.re/doc/latest/formats/pe/python.html#resource-accelerator>)

### [` lief.PE.ResourceAccelerator `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator>)

class lief.PE.ResourceAccelerator

Bases: `Object`

#### [` FLAGS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.FLAGS>)

class FLAGS(*\*values*)

Bases: `Flag`

From: [https://docs.microsoft.com/en-us/windows/win32/menurc/acceltableentry](<https://docs.microsoft.com/en-us/windows/win32/menurc/acceltableentry>)

##### [` ALT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.FLAGS.ALT>)

ALT = 16

##### [` CONTROL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.FLAGS.CONTROL>)

CONTROL = 8

##### [` END `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.FLAGS.END>)

END = 128

##### [` NOINVERT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.FLAGS.NOINVERT>)

NOINVERT = 2

##### [` SHIFT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.FLAGS.SHIFT>)

SHIFT = 4

##### [` VIRTKEY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.FLAGS.VIRTKEY>)

VIRTKEY = 1

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.FLAGS.from_value>)

from\_value(*arg: int*) → [lief.PE.ResourceAccelerator.FLAGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.FLAGS> "lief.PE.ResourceAccelerator.FLAGS") = &lt;nanobind.nb\_func object&gt;

#### [` add `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.add>)

add(*self*, *arg: [lief.\_lief.PE.ResourceAccelerator.FLAGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.FLAGS> "lief._lief.PE.ResourceAccelerator.FLAGS")*, */*) → [lief.\_lief.PE.ResourceAccelerator](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator> "lief._lief.PE.ResourceAccelerator")

Append the given flag

#### [` ansi `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.ansi>)

property ansi → int

An ANSI character value or a virtual-key code that identifies the accelerator key.

#### [` ansi_str `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.ansi_str>)

property ansi\_str → str

#### [` flags `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.flags>)

property flags → int

Describe the keyboard accelerator characteristics.

#### [` has `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.has>)

has(*self*, *arg: [lief.\_lief.PE.ResourceAccelerator.FLAGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.FLAGS> "lief._lief.PE.ResourceAccelerator.FLAGS")*, */*) → bool

Whether the entry has the given flag

#### [` id `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.id>)

property id → int

An identifier for the keyboard accelerator.

#### [` padding `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.padding>)

property padding → int

The number of bytes inserted to ensure that the structure is aligned on a DWORD boundary.

#### [` remove `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.remove>)

remove(*self*, *arg: [lief.\_lief.PE.ResourceAccelerator.FLAGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator.FLAGS> "lief._lief.PE.ResourceAccelerator.FLAGS")*, */*) → [lief.\_lief.PE.ResourceAccelerator](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceAccelerator> "lief._lief.PE.ResourceAccelerator")

Remove the given flag

---

## [Rich Header](<https://lief.re/doc/latest/formats/pe/python.html#rich-header>)

### [` lief.PE.RichHeader `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichHeader>)

class lief.PE.RichHeader(*self*)

Bases: `Object`

Class which represents the not-so-documented rich header

This structure is usually located at the end of the [`dos_stub`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.dos_stub> "lief.PE.Binary.dos_stub") and contains information about the build environment.

It is generated by the Microsoft linker link.exe and there are no options to disable or remove this information.

#### [` add_entryadd_entry `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichHeader.add_entry>)

add\_entry(*self*, *entry: [lief.\_lief.PE.RichEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry> "lief._lief.PE.RichEntry")*) → None

**add\_entry(*self*, *id: int*, *build\_id: int*, *count: int*) → None**

Overloaded function.

1. `add_entry(self, entry: lief._lief.PE.RichEntry) -> None`

Add a new [`RichEntry`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry> "lief.PE.RichEntry")

2. `add_entry(self, id: int, build_id: int, count: int) -> None`

Add a new [`RichEntry`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry> "lief.PE.RichEntry") given its [`id`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry.id> "lief.PE.RichEntry.id"), [`build_id`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry.build_id> "lief.PE.RichEntry.build_id"), [`count`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry.count> "lief.PE.RichEntry.count")

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichHeader.copy>)

copy(*self*) → [lief.\_lief.PE.RichHeader](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichHeader> "lief._lief.PE.RichHeader")

Duplicate the current instance of this object

#### [` entries `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichHeader.entries>)

property entries → lief.PE.RichHeader.it\_entries

Return an iterator over the [`RichEntry`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry> "lief.PE.RichEntry") within the header

#### [` hashhash `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichHeader.hash>)

hash(*self*, *algo: [lief.\_lief.PE.ALGORITHMS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS> "lief._lief.PE.ALGORITHMS")*) → list[int]

**hash(*self*, *algo: [lief.\_lief.PE.ALGORITHMS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS> "lief._lief.PE.ALGORITHMS")*, *xor\_key: int*) → list[int]**

Overloaded function.

1. `hash(self, algo: lief._lief.PE.ALGORITHMS) -> list[int]`

   > Compute the hash of the decoded rich header structure with the given hash [`ALGORITHMS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS> "lief.PE.ALGORITHMS")
2. `hash(self, algo: lief._lief.PE.ALGORITHMS, xor_key: int) -> list[int]`

   > Compute the hash of the rich header structure encoded with the provided key and the given hash [`ALGORITHMS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS> "lief.PE.ALGORITHMS")

#### [` key `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichHeader.key>)

property key → int

Key used to encode the header (xor operation)

#### [` rawraw `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichHeader.raw>)

raw(*self*) → list[int]

**raw(*self*, *xor\_key: int*) → list[int]**

Overloaded function.

1. `raw(self) -> list[int]`

   > The raw structure of the Rich header without xor-encoding.
   >
   > This function is equivalent as calling the other raw function with a xor\_key set to 0
2. `raw(self, xor_key: int) -> list[int]`

   > Given this rich header, this function re-computes the raw bytes of the structure with the provided xor-key.
   >
   > You can access the decoded data’s structure with the xor\_key set to 0

---

## [Rich Entry](<https://lief.re/doc/latest/formats/pe/python.html#rich-entry>)

### [` lief.PE.RichEntrylief.PE.RichEntry `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry>)

class lief.PE.RichEntry(*self*)

**class lief.PE.RichEntry(*self*, *id: int*, *build\_id: int*, *count: int*)**

Bases: `Object`

Class which represents an entry associated to the RichHeader

Overloaded function.

1. `__init__(self) -> None`
2. `__init__(self, id: int, build_id: int, count: int) -> None`

Constructor from [`id`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry.id> "lief.PE.RichEntry.id"), [`build_id`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry.build_id> "lief.PE.RichEntry.build_id") and [`count`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry.count> "lief.PE.RichEntry.count")

#### [` build_id `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry.build_id>)

property build\_id → int

Builder number of the tool (if any)

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry.copy>)

copy(*self*) → [lief.\_lief.PE.RichEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry> "lief._lief.PE.RichEntry")

Duplicate the current instance of this object

#### [` count `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry.count>)

property count → int

*Occurrence* count

#### [` id `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RichEntry.id>)

property id → int

Type of the entry

---

## [Debug](<https://lief.re/doc/latest/formats/pe/python.html#debug>)

![Inheritance diagram of lief._lief.PE.VCFeature, lief._lief.PE.CodeViewPDB, lief._lief.PE.PDBChecksum, lief._lief.PE.ExDllCharacteristics, lief._lief.PE.Pogo, lief._lief.PE.Debug, lief._lief.PE.Repro, lief._lief.PE.FPO, lief._lief.PE.CodeView](https://lief.re/doc/latest/_images/inheritance-fbc6d165f830ee4bd5459f22609669c258df5636.png)

### [` lief.PE.Debug `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug>)

class lief.PE.Debug(*self*)

Bases: `Object`

This class represents a generic entry in the debug data directory. For known types, this class is extended to provide a dedicated API (see: [`CodeView`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView> "lief.PE.CodeView"))

#### [` TYPES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES>)

class TYPES(*\*values*)

Bases: `Enum`

The entry types

##### [` BORLAND `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.BORLAND>)

BORLAND = 9

##### [` CLSID `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.CLSID>)

CLSID = 11

##### [` CODEVIEW `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.CODEVIEW>)

CODEVIEW = 2

##### [` COFF `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.COFF>)

COFF = 1

##### [` EXCEPTION `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.EXCEPTION>)

EXCEPTION = 5

##### [` EX_DLLCHARACTERISTICS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.EX_DLLCHARACTERISTICS>)

EX\_DLLCHARACTERISTICS = 20

##### [` FIXUP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.FIXUP>)

FIXUP = 6

##### [` FPO `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.FPO>)

FPO = 3

##### [` ILTCG `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.ILTCG>)

ILTCG = 14

##### [` MISC `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.MISC>)

MISC = 4

##### [` MPX `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.MPX>)

MPX = 15

##### [` OMAP_FROM_SRC `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.OMAP_FROM_SRC>)

OMAP\_FROM\_SRC = 8

##### [` OMAP_TO_SRC `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.OMAP_TO_SRC>)

OMAP\_TO\_SRC = 7

##### [` PDBCHECKSUM `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.PDBCHECKSUM>)

PDBCHECKSUM = 19

##### [` POGO `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.POGO>)

POGO = 13

##### [` REPRO `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.REPRO>)

REPRO = 16

##### [` RESERVED10 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.RESERVED10>)

RESERVED10 = 10

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.UNKNOWN>)

UNKNOWN = 0

##### [` VC_FEATURE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.VC_FEATURE>)

VC\_FEATURE = 12

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES.from_value>)

from\_value(*arg: int*) → [lief.PE.Debug.TYPES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES> "lief.PE.Debug.TYPES") = &lt;nanobind.nb\_func object&gt;

#### [` addressof_rawdata `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.addressof_rawdata>)

property addressof\_rawdata → int

Address of the debug data relative to the image base

#### [` characteristics `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.characteristics>)

property characteristics → int

Reserved should be 0

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.copy>)

copy(*self*) → [lief.\_lief.PE.Debug](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug> "lief._lief.PE.Debug") | None

Duplicate the current instance of this object

#### [` major_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.major_version>)

property major\_version → int

The major version number of the debug data format.

#### [` minor_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.minor_version>)

property minor\_version → int

The minor version number of the debug data format.

#### [` payload `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.payload>)

property payload → memoryview

Debug data associated with this entry

#### [` pointerto_rawdata `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.pointerto_rawdata>)

property pointerto\_rawdata → int

File offset of the debug data

#### [` section `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.section>)

property section → [lief.PE.Section](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Section> "lief.PE.Section") | None

The section where debug data is located

#### [` sizeof_data `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.sizeof_data>)

property sizeof\_data → int

Size of the debug data

#### [` timestamp `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.timestamp>)

property timestamp → int

The time and date when the debug data was created.

#### [` type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.type>)

property type → [lief.PE.Debug.TYPES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES> "lief.PE.Debug.TYPES")

The format ([`TYPES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug.TYPES> "lief.PE.Debug.TYPES")) of the debugging information

---

## [Code View](<https://lief.re/doc/latest/formats/pe/python.html#code-view>)

![Inheritance diagram of lief._lief.PE.CodeView, lief._lief.PE.CodeViewPDB](https://lief.re/doc/latest/_images/inheritance-e9f8a7d74456f46b65866cd68f7564de313cd2a8.png)

### [` lief.PE.CodeViewlief.PE.CodeView `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView>)

class lief.PE.CodeView(*self*)

**class lief.PE.CodeView(*self*, *arg: [lief.\_lief.PE.CodeView.SIGNATURES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView.SIGNATURES> "lief._lief.PE.CodeView.SIGNATURES")*, */*)**

Bases: [`Debug`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug> "lief._lief.PE.Debug")

#### [` SIGNATURES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView.SIGNATURES>)

class SIGNATURES(*\*values*)

Bases: `Enum`

##### [` CV_41 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView.SIGNATURES.CV_41>)

CV\_41 = 959464014

##### [` CV_50 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView.SIGNATURES.CV_50>)

CV\_50 = 825311822

##### [` PDB_20 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView.SIGNATURES.PDB_20>)

PDB\_20 = 808534606

##### [` PDB_70 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView.SIGNATURES.PDB_70>)

PDB\_70 = 1396986706

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView.SIGNATURES.UNKNOWN>)

UNKNOWN = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView.SIGNATURES.from_value>)

from\_value(*arg: int*) → [lief.PE.CodeView.SIGNATURES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView.SIGNATURES> "lief.PE.CodeView.SIGNATURES") = &lt;nanobind.nb\_func object&gt;

#### [` cv_signature `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView.cv_signature>)

property cv\_signature → [lief.PE.CodeView.SIGNATURES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView.SIGNATURES> "lief.PE.CodeView.SIGNATURES")

Type of the code view ([`SIGNATURES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView.SIGNATURES> "lief.PE.CodeView.SIGNATURES"))

---

## [Code View PDB](<https://lief.re/doc/latest/formats/pe/python.html#code-view-pdb>)

![Inheritance diagram of lief._lief.PE.CodeViewPDB](https://lief.re/doc/latest/_images/inheritance-0ce9d372a40e1ccad005610ebcd1b1ff1383dfe4.png)

### [` lief.PE.CodeViewPDBlief.PE.CodeViewPDB `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeViewPDB>)

class lief.PE.CodeViewPDB(*self*)

**class lief.PE.CodeViewPDB(*self*, *filename: str*)**

Bases: [`CodeView`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView> "lief._lief.PE.CodeView")

CodeView PDB specialization

Overloaded function.

1. `__init__(self) -> None`

Default constructor

2. `__init__(self, filename: str) -> None`

Filename-based constructor

#### [` age `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeViewPDB.age>)

property age → int

Age value to verify. The age does not necessarily correspond to any known time value, it is used to determine if a .pdb file is out of sync with a corresponding .exe file.

#### [` filename `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeViewPDB.filename>)

property filename → str | bytes

The path to the `.pdb` file

#### [` guid `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeViewPDB.guid>)

property guid → str

The GUID signature to verify against the .pdb file signature.

This attribute might be used to lookup remote PDB file on a symbol server

#### [` parent `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeViewPDB.parent>)

property parent → [lief.PE.CodeView](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView> "lief.PE.CodeView")

Return a reference to the parent [`lief.PE.CodeView`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeView> "lief.PE.CodeView")

#### [` signature `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeViewPDB.signature>)

property signature → list[int]

The 32-bit signature to verify against the .pdb file signature.

---

## [Code Integrity](<https://lief.re/doc/latest/formats/pe/python.html#code-integrity>)

### [` lief.PE.CodeIntegrity `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeIntegrity>)

class lief.PE.CodeIntegrity(*self*)

Bases: `Object`

#### [` catalog `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeIntegrity.catalog>)

property catalog → int

`0xFFFF` means not available

#### [` catalog_offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeIntegrity.catalog_offset>)

property catalog\_offset → int

#### [` flags `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeIntegrity.flags>)

property flags → int

Flags to indicate if CI information is available, etc.

#### [` reserved `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeIntegrity.reserved>)

property reserved → int

Additional bitmask to be defined later

---

## [Pogo](<https://lief.re/doc/latest/formats/pe/python.html#pogo>)

![Inheritance diagram of lief._lief.PE.Pogo](https://lief.re/doc/latest/_images/inheritance-dd30c158f5f4a77263dd1bdb9d538cef832100c9.png)

### [` lief.PE.Pogo `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Pogo>)

class lief.PE.Pogo(*self*)

Bases: [`Debug`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug> "lief._lief.PE.Debug")

#### [` SIGNATURES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Pogo.SIGNATURES>)

class SIGNATURES(*\*values*)

Bases: `Enum`

##### [` LCTG `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Pogo.SIGNATURES.LCTG>)

LCTG = 1280590663

##### [` PGI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Pogo.SIGNATURES.PGI>)

PGI = 1346849024

##### [` PGO `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Pogo.SIGNATURES.PGO>)

PGO = 1346850560

##### [` PGU `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Pogo.SIGNATURES.PGU>)

PGU = 1346852096

##### [` SPGO `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Pogo.SIGNATURES.SPGO>)

SPGO = 1397770063

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Pogo.SIGNATURES.UNKNOWN>)

UNKNOWN = 268435455

##### [` ZERO `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Pogo.SIGNATURES.ZERO>)

ZERO = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Pogo.SIGNATURES.from_value>)

from\_value(*arg: int*) → [lief.PE.Pogo.SIGNATURES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Pogo.SIGNATURES> "lief.PE.Pogo.SIGNATURES") = &lt;nanobind.nb\_func object&gt;

#### [` entries `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Pogo.entries>)

property entries → lief.PE.Pogo.it\_entries

#### [` signature `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Pogo.signature>)

property signature → [lief.PE.Pogo.SIGNATURES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Pogo.SIGNATURES> "lief.PE.Pogo.SIGNATURES")

Type of the pogo ([`SIGNATURES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Pogo.SIGNATURES> "lief.PE.Pogo.SIGNATURES"))

---

## [Pogo Entry](<https://lief.re/doc/latest/formats/pe/python.html#pogo-entry>)

### [` lief.PE.PogoEntry `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PogoEntry>)

class lief.PE.PogoEntry(*self*)

Bases: `Object`

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PogoEntry.copy>)

copy(*self*) → [lief.\_lief.PE.PogoEntry](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PogoEntry> "lief._lief.PE.PogoEntry")

Duplicate the current instance of this object

#### [` name `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PogoEntry.name>)

property name → str | bytes

#### [` size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PogoEntry.size>)

property size → int

#### [` start_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PogoEntry.start_rva>)

property start\_rva → int

---

## [Repro](<https://lief.re/doc/latest/formats/pe/python.html#repro>)

![Inheritance diagram of lief._lief.PE.Repro](https://lief.re/doc/latest/_images/inheritance-a4618a37c1668ee05ba4dc75bbc1b0ac8e950ead.png)

### [` lief.PE.Repro `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Repro>)

class lief.PE.Repro

Bases: [`Debug`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug> "lief._lief.PE.Debug")

This class represents a reproducible build entry from the debug directory. (`IMAGE_DEBUG_TYPE_REPRO`). This entry is usually generated with the undocumented /Brepro linker flag.

See: [https://nikhilism.com/post/2020/windows-deterministic-builds/](<https://nikhilism.com/post/2020/windows-deterministic-builds/>)

#### [` hash `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Repro.hash>)

property hash → memoryview

The hash associated with the reproducible build

---

## [PDBChecksum](<https://lief.re/doc/latest/formats/pe/python.html#pdbchecksum>)

![Inheritance diagram of lief._lief.PE.PDBChecksum](https://lief.re/doc/latest/_images/inheritance-956f427dab66275c2cca7bcf26c9d2cb1b152d6b.png)

### [` lief.PE.PDBChecksum `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PDBChecksum>)

class lief.PE.PDBChecksum(*self*, *algo: [lief.\_lief.PE.PDBChecksum.HASH\_ALGO](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PDBChecksum.HASH_ALGO> "lief._lief.PE.PDBChecksum.HASH_ALGO")*, *hash: collections.abc.Sequence[int]*)

Bases: [`Debug`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug> "lief._lief.PE.Debug")

This class represents the PDB Checksum debug entry which is essentially an array of bytes representing the checksum of the PDB content.

#### [` HASH_ALGO `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PDBChecksum.HASH_ALGO>)

class HASH\_ALGO(*\*values*)

Bases: `Enum`

##### [` SHA256 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PDBChecksum.HASH_ALGO.SHA256>)

SHA256 = 1

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PDBChecksum.HASH_ALGO.UNKNOWN>)

UNKNOWN = 0

#### [` algorithm `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PDBChecksum.algorithm>)

property algorithm → [lief.PE.PDBChecksum.HASH\_ALGO](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PDBChecksum.HASH_ALGO> "lief.PE.PDBChecksum.HASH_ALGO")

Algorithm used for hashing the PDB content

#### [` hash `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PDBChecksum.hash>)

property hash → memoryview

Hash of the PDB content

---

## [VCFeature](<https://lief.re/doc/latest/formats/pe/python.html#vcfeature>)

![Inheritance diagram of lief._lief.PE.VCFeature](https://lief.re/doc/latest/_images/inheritance-35e0913f46335201c76afeabd5ef7dcd694f10a8.png)

### [` lief.PE.VCFeature `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VCFeature>)

class lief.PE.VCFeature

Bases: [`Debug`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug> "lief._lief.PE.Debug")

This class represents the `IMAGE_DEBUG_TYPE_VC_FEATURE` debug entry

#### [` c_cpp `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VCFeature.c_cpp>)

property c\_cpp → int

Count for `C/C++`

#### [` gs `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VCFeature.gs>)

property gs → int

Count for `/GS` (number of guard stack)

#### [` guards `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VCFeature.guards>)

property guards → int

Count for `/guardN`

#### [` pre_vcpp `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VCFeature.pre_vcpp>)

property pre\_vcpp → int

Count for `Pre-VC++ 11.00`

#### [` sdl `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VCFeature.sdl>)

property sdl → int

Whether `/sdl` was enabled for this binary.

`sdl` stands for Security Development Lifecycle and provides enhanced security features like changing security-relevant warnings into errors or enforcing guard stack.

---

## [ExDllCharacteristics](<https://lief.re/doc/latest/formats/pe/python.html#exdllcharacteristics>)

![Inheritance diagram of lief._lief.PE.ExDllCharacteristics](https://lief.re/doc/latest/_images/inheritance-c590e5f217242ec7542cab43163b5b04a96c047b.png)

### [` lief.PE.ExDllCharacteristics `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics>)

class lief.PE.ExDllCharacteristics

Bases: [`Debug`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug> "lief._lief.PE.Debug")

This class represents the `IMAGE_DEBUG_TYPE_EX_DLLCHARACTERISTICS` debug entry

#### [` CHARACTERISTICS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.CHARACTERISTICS>)

class CHARACTERISTICS(*\*values*)

Bases: `Flag`

Extended DLL Characteristics

##### [` CET_COMPAT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.CHARACTERISTICS.CET_COMPAT>)

CET\_COMPAT = 1

##### [` CET_COMPAT_STRICT_MODE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.CHARACTERISTICS.CET_COMPAT_STRICT_MODE>)

CET\_COMPAT\_STRICT\_MODE = 2

##### [` CET_DYNAMIC_APIS_ALLOW_IN_PROC `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.CHARACTERISTICS.CET_DYNAMIC_APIS_ALLOW_IN_PROC>)

CET\_DYNAMIC\_APIS\_ALLOW\_IN\_PROC = 8

##### [` CET_RESERVED_1 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.CHARACTERISTICS.CET_RESERVED_1>)

CET\_RESERVED\_1 = 16

##### [` CET_RESERVED_2 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.CHARACTERISTICS.CET_RESERVED_2>)

CET\_RESERVED\_2 = 32

##### [` CET_SET_CONTEXT_IP_VALIDATION_RELAXED_MODE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.CHARACTERISTICS.CET_SET_CONTEXT_IP_VALIDATION_RELAXED_MODE>)

CET\_SET\_CONTEXT\_IP\_VALIDATION\_RELAXED\_MODE = 4

##### [` FORWARD_CFI_COMPAT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.CHARACTERISTICS.FORWARD_CFI_COMPAT>)

FORWARD\_CFI\_COMPAT = 64

##### [` HOTPATCH_COMPATIBLE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.CHARACTERISTICS.HOTPATCH_COMPATIBLE>)

HOTPATCH\_COMPATIBLE = 128

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.CHARACTERISTICS.from_value>)

from\_value(*arg: int*) → [lief.PE.ExDllCharacteristics.CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.CHARACTERISTICS> "lief.PE.ExDllCharacteristics.CHARACTERISTICS") = &lt;nanobind.nb\_func object&gt;

#### [` ex_characteristics `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.ex_characteristics>)

property ex\_characteristics → [lief.PE.ExDllCharacteristics.CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.CHARACTERISTICS> "lief.PE.ExDllCharacteristics.CHARACTERISTICS")

The extended characteristics

#### [` ex_characteristics_list `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.ex_characteristics_list>)

property ex\_characteristics\_list → list[[lief.PE.ExDllCharacteristics.CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.CHARACTERISTICS> "lief.PE.ExDllCharacteristics.CHARACTERISTICS")]

Characteristics as a vector

#### [` has `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.has>)

has(*self*, *characteristic: [lief.\_lief.PE.ExDllCharacteristics.CHARACTERISTICS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExDllCharacteristics.CHARACTERISTICS> "lief._lief.PE.ExDllCharacteristics.CHARACTERISTICS")*) → bool

Check if the given CHARACTERISTICS is used

---

## [Frame Pointer Omission (FPO)](<https://lief.re/doc/latest/formats/pe/python.html#frame-pointer-omission-fpo>)

![Inheritance diagram of lief._lief.PE.FPO](https://lief.re/doc/latest/_images/inheritance-2ca251243b9682efb5f61542367a4014e25083d2.png)

### [` lief.PE.FPO `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO>)

class lief.PE.FPO

Bases: [`Debug`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Debug> "lief._lief.PE.Debug")

This class represents the `IMAGE_DEBUG_TYPE_FPO` debug entry

#### [` FRAME_TYPE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.FRAME_TYPE>)

class FRAME\_TYPE(*\*values*)

Bases: `Enum`

##### [` FPO_ `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.FRAME_TYPE.FPO_>)

FPO\_ = 0

##### [` NON_FPO `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.FRAME_TYPE.NON_FPO>)

NON\_FPO = 3

##### [` TRAP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.FRAME_TYPE.TRAP>)

TRAP = 1

##### [` TSS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.FRAME_TYPE.TSS>)

TSS = 2

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.FRAME_TYPE.from_value>)

from\_value(*arg: int*) → [lief.PE.FPO.FRAME\_TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.FRAME_TYPE> "lief.PE.FPO.FRAME_TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` entries `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.entries>)

property entries → lief.PE.FPO.it\_entries

Iterator over the different FPO entries

#### [` entry_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.entry_t>)

class entry\_t

Bases: `object`

Represents the stack frame layout for a x86 function when frame pointer omission (FPO) optimization is used.

##### [` nb_locals `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.entry_t.nb_locals>)

property nb\_locals → int

The number of local variables.

##### [` nb_saved_regs `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.entry_t.nb_saved_regs>)

property nb\_saved\_regs → int

Number of registers saved.

##### [` parameters_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.entry_t.parameters_size>)

property parameters\_size → int

The size of the parameters.

##### [` proc_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.entry_t.proc_size>)

property proc\_size → int

The number of bytes in the function.

##### [` prolog_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.entry_t.prolog_size>)

property prolog\_size → int

The number of bytes in the function prolog code.

##### [` reserved `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.entry_t.reserved>)

property reserved → int

reserved for future use

##### [` rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.entry_t.rva>)

property rva → int

The function RVA

##### [` type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.entry_t.type>)

property type → [lief.PE.FPO.FRAME\_TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.FRAME_TYPE> "lief.PE.FPO.FRAME_TYPE")

Variable that indicates the frame type.

##### [` use_bp `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.entry_t.use_bp>)

property use\_bp → bool

Whether the EBP register has been allocated.

##### [` use_seh `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FPO.entry_t.use_seh>)

property use\_seh → bool

Whether the function uses structured exception handling.

---

## [Exception Info](<https://lief.re/doc/latest/formats/pe/python.html#exception-info>)

![Inheritance diagram of lief._lief.PE.unwind_aarch64.PackedFunction, lief._lief.PE.RuntimeFunctionX64, lief._lief.PE.unwind_aarch64.UnpackedFunction, lief._lief.PE.RuntimeFunctionAArch64, lief._lief.PE.ExceptionInfo](https://lief.re/doc/latest/_images/inheritance-5de3a479e65f991cebe23563893d9bf6def94f55.png)

### [` lief.PE.ExceptionInfo `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExceptionInfo>)

class lief.PE.ExceptionInfo

Bases: `object`

This class is the base class for any exception or runtime function entry

#### [` ARCH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExceptionInfo.ARCH>)

class ARCH(*\*values*)

Bases: `Enum`

Arch discriminator for the subclasses

##### [` ARM64 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExceptionInfo.ARCH.ARM64>)

ARM64 = 1

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExceptionInfo.ARCH.UNKNOWN>)

UNKNOWN = 0

##### [` X86_64 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExceptionInfo.ARCH.X86_64>)

X86\_64 = 2

#### [` arch `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExceptionInfo.arch>)

property arch → [lief.PE.ExceptionInfo.ARCH](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExceptionInfo.ARCH> "lief.PE.ExceptionInfo.ARCH")

Target architecture of this exception

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExceptionInfo.copy>)

copy(*self*) → [lief.\_lief.PE.ExceptionInfo](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExceptionInfo> "lief._lief.PE.ExceptionInfo") | None

Duplicate the current instance of this object

#### [` offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExceptionInfo.offset>)

property offset → int

Offset in the binary where the raw exception information associated with this entry is defined

#### [` rva_start `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExceptionInfo.rva_start>)

property rva\_start → int

Function start address

---

## [RuntimeFunctionX64](<https://lief.re/doc/latest/formats/pe/python.html#runtimefunctionx64>)

![Inheritance diagram of lief._lief.PE.RuntimeFunctionX64](https://lief.re/doc/latest/_images/inheritance-a67b8160b956027a2d597bab5b2df2305c43cc1b.png)

### [` lief.PE.RuntimeFunctionX64 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64>)

class lief.PE.RuntimeFunctionX64

Bases: [`ExceptionInfo`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExceptionInfo> "lief._lief.PE.ExceptionInfo")

This class represents an entry in the exception table (`.pdata` section) for the x86-64 architecture.

Reference: [https://learn.microsoft.com/en-us/cpp/build/exception-handling-x64](<https://learn.microsoft.com/en-us/cpp/build/exception-handling-x64>)

#### [` UNWIND_FLAGS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_FLAGS>)

class UNWIND\_FLAGS(*\*values*)

Bases: `Flag`

##### [` CHAIN_INFO `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_FLAGS.CHAIN_INFO>)

CHAIN\_INFO = 4

##### [` EXCEPTION_HANDLER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_FLAGS.EXCEPTION_HANDLER>)

EXCEPTION\_HANDLER = 1

##### [` TERMINATE_HANDLER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_FLAGS.TERMINATE_HANDLER>)

TERMINATE\_HANDLER = 2

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_FLAGS.from_value>)

from\_value(*arg: int*) → [lief.PE.RuntimeFunctionX64.UNWIND\_FLAGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_FLAGS> "lief.PE.RuntimeFunctionX64.UNWIND_FLAGS") = &lt;nanobind.nb\_func object&gt;

#### [` UNWIND_OPCODES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES>)

class UNWIND\_OPCODES(*\*values*)

Bases: `Enum`

##### [` ALLOC_LARGE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.ALLOC_LARGE>)

ALLOC\_LARGE = 1

##### [` ALLOC_SMALL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.ALLOC_SMALL>)

ALLOC\_SMALL = 2

##### [` EPILOG `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.EPILOG>)

EPILOG = 6

##### [` PUSH_MACHFRAME `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.PUSH_MACHFRAME>)

PUSH\_MACHFRAME = 10

##### [` PUSH_NONVOL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.PUSH_NONVOL>)

PUSH\_NONVOL = 0

##### [` SAVE_NONVOL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.SAVE_NONVOL>)

SAVE\_NONVOL = 4

##### [` SAVE_NONVOL_FAR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.SAVE_NONVOL_FAR>)

SAVE\_NONVOL\_FAR = 5

##### [` SAVE_XMM128 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.SAVE_XMM128>)

SAVE\_XMM128 = 8

##### [` SAVE_XMM128_FAR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.SAVE_XMM128_FAR>)

SAVE\_XMM128\_FAR = 9

##### [` SET_FPREG `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.SET_FPREG>)

SET\_FPREG = 3

##### [` SPARE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.SPARE>)

SPARE = 7

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.from_value>)

from\_value(*arg: int*) → [lief.PE.RuntimeFunctionX64.UNWIND\_OPCODES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES> "lief.PE.RuntimeFunctionX64.UNWIND_OPCODES") = &lt;nanobind.nb\_func object&gt;

#### [` UNWIND_REG `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG>)

class UNWIND\_REG(*\*values*)

Bases: `Enum`

##### [` R10 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.R10>)

R10 = 10

##### [` R11 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.R11>)

R11 = 11

##### [` R12 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.R12>)

R12 = 12

##### [` R13 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.R13>)

R13 = 13

##### [` R14 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.R14>)

R14 = 14

##### [` R15 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.R15>)

R15 = 15

##### [` R8 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.R8>)

R8 = 8

##### [` R9 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.R9>)

R9 = 9

##### [` RAX `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.RAX>)

RAX = 0

##### [` RBP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.RBP>)

RBP = 5

##### [` RBX `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.RBX>)

RBX = 3

##### [` RCX `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.RCX>)

RCX = 1

##### [` RDI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.RDI>)

RDI = 7

##### [` RDX `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.RDX>)

RDX = 2

##### [` RSI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.RSI>)

RSI = 6

##### [` RSP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.RSP>)

RSP = 4

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG.from_value>)

from\_value(*arg: int*) → [lief.PE.RuntimeFunctionX64.UNWIND\_REG](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG> "lief.PE.RuntimeFunctionX64.UNWIND_REG") = &lt;nanobind.nb\_func object&gt;

#### [` rva_end `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.rva_end>)

property rva\_end → int

Function end address

#### [` size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.size>)

property size → int

Size of the function (in bytes)

#### [` unwind_info `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.unwind_info>)

property unwind\_info → [lief.PE.RuntimeFunctionX64.unwind\_info\_t](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.unwind_info_t> "lief.PE.RuntimeFunctionX64.unwind_info_t") | None

Detailed unwind information

#### [` unwind_info_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.unwind_info_t>)

class unwind\_info\_t

Bases: `object`

##### [` chained `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.unwind_info_t.chained>)

property chained → [lief.PE.RuntimeFunctionX64](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64> "lief.PE.RuntimeFunctionX64")

If [`lief.PE.RuntimeFunctionX64.UNWIND_FLAGS.CHAIN_INFO`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_FLAGS.CHAIN_INFO> "lief.PE.RuntimeFunctionX64.UNWIND_FLAGS.CHAIN_INFO") is set, this attribute references the chained runtime function.

##### [` count_opcodes `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.unwind_info_t.count_opcodes>)

property count\_opcodes → int

The number of slots in the unwind codes array. Some unwind codes, for example, [`lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.SAVE_NONVOL`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.SAVE_NONVOL> "lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.SAVE_NONVOL"), require more than one slot in the array.

##### [` flags `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.unwind_info_t.flags>)

property flags → int

See: [`lief.PE.RuntimeFunctionX64.UNWIND_FLAGS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_FLAGS> "lief.PE.RuntimeFunctionX64.UNWIND_FLAGS")

##### [` frame_reg `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.unwind_info_t.frame_reg>)

property frame\_reg → int

If nonzero, then the function uses a frame pointer (FP), and this field is the number of the nonvolatile register used as the frame pointer, using the same encoding for the operation info field of [`UNWIND_OPCODES`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES> "lief.PE.RuntimeFunctionX64.UNWIND_OPCODES") node

##### [` frame_reg_offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.unwind_info_t.frame_reg_offset>)

property frame\_reg\_offset → int

If the frame register field is nonzero, this field is the scaled offset from RSP that is applied to the FP register when it’s established

##### [` handler `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.unwind_info_t.handler>)

property handler → int | None

An image-relative pointer to either the function’s language-specific exception or termination handler. This value is set if one of these flags is set: [`lief.PE.RuntimeFunctionX64.UNWIND_FLAGS.EXCEPTION_HANDLER`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_FLAGS.EXCEPTION_HANDLER> "lief.PE.RuntimeFunctionX64.UNWIND_FLAGS.EXCEPTION_HANDLER"), [`lief.PE.RuntimeFunctionX64.UNWIND_FLAGS.TERMINATE_HANDLER`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_FLAGS.TERMINATE_HANDLER> "lief.PE.RuntimeFunctionX64.UNWIND_FLAGS.TERMINATE_HANDLER").

##### [` has `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.unwind_info_t.has>)

has(*self*, *arg: [lief.\_lief.PE.RuntimeFunctionX64.UNWIND\_FLAGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_FLAGS> "lief._lief.PE.RuntimeFunctionX64.UNWIND_FLAGS")*, */*) → bool

Check if the given flag is used

##### [` opcodes `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.unwind_info_t.opcodes>)

property opcodes → list[[lief.PE.unwind\_x64.Code](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Code> "lief.PE.unwind_x64.Code") | None]

Enhanced representation of the unwind code

##### [` raw_opcodes `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.unwind_info_t.raw_opcodes>)

property raw\_opcodes → list[int]

An array of items that explains the effect of the prolog on the nonvolatile registers and RSP

##### [` sizeof_prologue `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.unwind_info_t.sizeof_prologue>)

property sizeof\_prologue → int

Length of the function prolog in bytes.

##### [` version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.unwind_info_t.version>)

property version → int

Version number of the unwind data, currently 1 or 2.

#### [` unwind_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.unwind_rva>)

property unwind\_rva → int

Unwind info address

---

## [unwind\_x64 - Code](<https://lief.re/doc/latest/formats/pe/python.html#unwind-x64-code>)

![Inheritance diagram of lief._lief.PE.unwind_x64.PushMachFrame, lief._lief.PE.unwind_x64.Epilog, lief._lief.PE.unwind_x64.SetFPReg, lief._lief.PE.unwind_x64.SaveXMM128, lief._lief.PE.unwind_x64.Spare, lief._lief.PE.unwind_x64.PushNonVol, lief._lief.PE.unwind_x64.SaveNonVolatile, lief._lief.PE.unwind_x64.Code, lief._lief.PE.unwind_x64.Alloc](https://lief.re/doc/latest/_images/inheritance-2423e109d6163ebd2fbc9a32f1047d837f9224fb.png)

### [` lief.PE.unwind_x64.Code `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Code>)

class lief.PE.unwind\_x64.Code

Bases: `object`

Base class for all unwind operations

#### [` opcode `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Code.opcode>)

property opcode → [lief.PE.RuntimeFunctionX64.UNWIND\_OPCODES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES> "lief.PE.RuntimeFunctionX64.UNWIND_OPCODES")

The original opcode

#### [` position `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Code.position>)

property position → int

Offset in the prolog

---

## [unwind\_x64 - Alloc](<https://lief.re/doc/latest/formats/pe/python.html#unwind-x64-alloc>)

![Inheritance diagram of lief._lief.PE.unwind_x64.Alloc](https://lief.re/doc/latest/_images/inheritance-7932a760e824ebd8327192d9407686191ba0c101.png)

### [` lief.PE.unwind_x64.Alloc `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Alloc>)

class lief.PE.unwind\_x64.Alloc

Bases: [`Code`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Code> "lief._lief.PE.unwind_x64.Code")

This class represents a stack-allocation operation ([`lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.ALLOC_SMALL`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.ALLOC_SMALL> "lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.ALLOC_SMALL"), [`lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.ALLOC_LARGE`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.ALLOC_LARGE> "lief.PE.RuntimeFunctionX64.UNWIND_OPCODES.ALLOC_LARGE"))

#### [` size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Alloc.size>)

property size → int

The size allocated

---

## [unwind\_x64 - PushNonVol](<https://lief.re/doc/latest/formats/pe/python.html#unwind-x64-pushnonvol>)

![Inheritance diagram of lief._lief.PE.unwind_x64.PushNonVol](https://lief.re/doc/latest/_images/inheritance-5eac9f87597251388a440f3a60d481db96fe2564.png)

### [` lief.PE.unwind_x64.PushNonVol `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.PushNonVol>)

class lief.PE.unwind\_x64.PushNonVol

Bases: [`Code`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Code> "lief._lief.PE.unwind_x64.Code")

Push a nonvolatile integer register, decrementing RSP by 8

#### [` reg `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.PushNonVol.reg>)

property reg → [lief.PE.RuntimeFunctionX64.UNWIND\_REG](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG> "lief.PE.RuntimeFunctionX64.UNWIND_REG")

The register pushed

---

## [unwind\_x64 - PushMachFrame](<https://lief.re/doc/latest/formats/pe/python.html#unwind-x64-pushmachframe>)

![Inheritance diagram of lief._lief.PE.unwind_x64.PushMachFrame](https://lief.re/doc/latest/_images/inheritance-83f06da173147608509db8e636e283220441f4ec.png)

### [` lief.PE.unwind_x64.PushMachFrame `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.PushMachFrame>)

class lief.PE.unwind\_x64.PushMachFrame

Bases: [`Code`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Code> "lief._lief.PE.unwind_x64.Code")

Push a machine frame

#### [` value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.PushMachFrame.value>)

property value → int

0 or 1

---

## [unwind\_x64 - SetFPReg](<https://lief.re/doc/latest/formats/pe/python.html#unwind-x64-setfpreg>)

![Inheritance diagram of lief._lief.PE.unwind_x64.SetFPReg](https://lief.re/doc/latest/_images/inheritance-f4fd7774f8d5969331cb79842a09b6b1506851d5.png)

### [` lief.PE.unwind_x64.SetFPReg `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.SetFPReg>)

class lief.PE.unwind\_x64.SetFPReg

Bases: [`Code`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Code> "lief._lief.PE.unwind_x64.Code")

Establish the frame pointer register by setting the register to some offset of the current RSP

#### [` reg `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.SetFPReg.reg>)

property reg → [lief.PE.RuntimeFunctionX64.UNWIND\_REG](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG> "lief.PE.RuntimeFunctionX64.UNWIND_REG")

Frame pointer register

---

## [unwind\_x64 - SaveNonVolatile](<https://lief.re/doc/latest/formats/pe/python.html#unwind-x64-savenonvolatile>)

![Inheritance diagram of lief._lief.PE.unwind_x64.SaveNonVolatile](https://lief.re/doc/latest/_images/inheritance-14dd76e7d856869346e54e3568e2a502f80710ba.png)

### [` lief.PE.unwind_x64.SaveNonVolatile `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.SaveNonVolatile>)

class lief.PE.unwind\_x64.SaveNonVolatile

Bases: [`Code`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Code> "lief._lief.PE.unwind_x64.Code")

Save a nonvolatile integer register on the stack using a MOV instead of a PUSH.

#### [` offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.SaveNonVolatile.offset>)

property offset → int

The offset where to save the register

#### [` reg `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.SaveNonVolatile.reg>)

property reg → [lief.PE.RuntimeFunctionX64.UNWIND\_REG](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionX64.UNWIND_REG> "lief.PE.RuntimeFunctionX64.UNWIND_REG")

The register to save

---

## [unwind\_x64 - SaveXMM128](<https://lief.re/doc/latest/formats/pe/python.html#unwind-x64-savexmm128>)

![Inheritance diagram of lief._lief.PE.unwind_x64.SaveXMM128](https://lief.re/doc/latest/_images/inheritance-17a1bf8e61c218b96e60c63ac497b6e22c11b166.png)

### [` lief.PE.unwind_x64.SaveXMM128 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.SaveXMM128>)

class lief.PE.unwind\_x64.SaveXMM128

Bases: [`Code`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Code> "lief._lief.PE.unwind_x64.Code")

Save all 128 bits of a nonvolatile XMM register on the stack

#### [` num `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.SaveXMM128.num>)

property num → int

XMM register number

#### [` offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.SaveXMM128.offset>)

property offset → int

The offset where to save the register

---

## [unwind\_x64 - Epilog](<https://lief.re/doc/latest/formats/pe/python.html#unwind-x64-epilog>)

![Inheritance diagram of lief._lief.PE.unwind_x64.Epilog](https://lief.re/doc/latest/_images/inheritance-437397e8ee9ee6de699dc8140357066f7458375c.png)

### [` lief.PE.unwind_x64.Epilog `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Epilog>)

class lief.PE.unwind\_x64.Epilog

Bases: [`Code`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Code> "lief._lief.PE.unwind_x64.Code")

Describes the function’s epilog

#### [` flags `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Epilog.flags>)

property flags → int

#### [` size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Epilog.size>)

property size → int

Size of the epilog

---

## [unwind\_x64 - Spare](<https://lief.re/doc/latest/formats/pe/python.html#unwind-x64-spare>)

![Inheritance diagram of lief._lief.PE.unwind_x64.Spare](https://lief.re/doc/latest/_images/inheritance-e73f005757aa71a7c1c1dd2b7c860591b9abc76f.png)

### [` lief.PE.unwind_x64.Spare `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Spare>)

class lief.PE.unwind\_x64.Spare

Bases: [`Code`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_x64.Code> "lief._lief.PE.unwind_x64.Code")

---

## [RuntimeFunctionAArch64](<https://lief.re/doc/latest/formats/pe/python.html#runtimefunctionaarch64>)

![Inheritance diagram of lief._lief.PE.unwind_aarch64.UnpackedFunction, lief._lief.PE.RuntimeFunctionAArch64, lief._lief.PE.unwind_aarch64.PackedFunction](https://lief.re/doc/latest/_images/inheritance-8c2e084ff297ede8b2084e665de7e6a265e9dcf6.png)

### [` lief.PE.RuntimeFunctionAArch64 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionAArch64>)

class lief.PE.RuntimeFunctionAArch64

Bases: [`ExceptionInfo`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ExceptionInfo> "lief._lief.PE.ExceptionInfo")

This class represents an entry in the exception table (`.pdata` section) for the AArch64 architecture.

Since the ARM64 unwinding info can be encoded in a *packed* and *unpacked* format, this class is inherited by [`lief.PE.unwind_aarch64.PackedFunction`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.PackedFunction> "lief.PE.unwind_aarch64.PackedFunction") and [`lief.PE.unwind_aarch64.UnpackedFunction`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction> "lief.PE.unwind_aarch64.UnpackedFunction")

Reference: [https://learn.microsoft.com/en-us/cpp/build/arm64-exception-handling#arm64-exception-handling-information](<https://learn.microsoft.com/en-us/cpp/build/arm64-exception-handling#arm64-exception-handling-information>)

#### [` PACKED_FLAGS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionAArch64.PACKED_FLAGS>)

class PACKED\_FLAGS(*\*values*)

Bases: `Enum`

##### [` PACKED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionAArch64.PACKED_FLAGS.PACKED>)

PACKED = 1

##### [` PACKED_FRAGMENT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionAArch64.PACKED_FLAGS.PACKED_FRAGMENT>)

PACKED\_FRAGMENT = 2

##### [` RESERVED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionAArch64.PACKED_FLAGS.RESERVED>)

RESERVED = 3

##### [` UNPACKED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionAArch64.PACKED_FLAGS.UNPACKED>)

UNPACKED = 0

#### [` flag `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionAArch64.flag>)

property flag → [lief.PE.RuntimeFunctionAArch64.PACKED\_FLAGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionAArch64.PACKED_FLAGS> "lief.PE.RuntimeFunctionAArch64.PACKED_FLAGS")

Flag describing the format the unwind data

#### [` length `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionAArch64.length>)

property length → int

Length of the function in bytes

#### [` rva_end `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionAArch64.rva_end>)

property rva\_end → int

Function end address

## [Runtime AArch64 (Packed) Function](<https://lief.re/doc/latest/formats/pe/python.html#runtime-aarch64-packed-function>)

![Inheritance diagram of lief._lief.PE.unwind_aarch64.PackedFunction](https://lief.re/doc/latest/_images/inheritance-f28464486f1fd687abc93c5686a0ec0397a0f65d.png)

### [` lief.PE.unwind_aarch64.PackedFunction `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.PackedFunction>)

class lief.PE.unwind\_aarch64.PackedFunction

Bases: [`RuntimeFunctionAArch64`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionAArch64> "lief._lief.PE.RuntimeFunctionAArch64")

This class represents a packed AArch64 exception entry.

An exception entry can be packed if the unwind data fit in 30 bits

Reference: [https://learn.microsoft.com/en-us/cpp/build/arm64-exception-handling?view=msvc-170#packed-unwind-data](<https://learn.microsoft.com/en-us/cpp/build/arm64-exception-handling?view=msvc-170#packed-unwind-data>)

#### [` CR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.PackedFunction.CR>)

property CR → int

Flag indicating whether the function includes extra instructions to set up a frame chain and return link.

#### [` H `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.PackedFunction.H>)

property H → int

1-bit flag indicating whether the function homes the integer parameter registers (x0-x7) by storing them at the very start of the function. (0 = doesn’t home registers, 1 = homes registers).

#### [` frame_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.PackedFunction.frame_size>)

property frame\_size → int

Size of the allocated stack

#### [` reg_F `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.PackedFunction.reg_F>)

property reg\_F → int

Number of non-volatile FP registers (d8-d15) saved in the canonical stack location

#### [` reg_I `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.PackedFunction.reg_I>)

property reg\_I → int

Number of non-volatile INT registers (x19-x28) saved in the canonical stack location.

## [Runtime AArch64 (UnpackedFunction) Function](<https://lief.re/doc/latest/formats/pe/python.html#runtime-aarch64-unpackedfunction-function>)

![Inheritance diagram of lief._lief.PE.unwind_aarch64.UnpackedFunction](https://lief.re/doc/latest/_images/inheritance-bb38985a5022477862bb99d31f385669f31b4248.png)

### [` lief.PE.unwind_aarch64.UnpackedFunction `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction>)

class lief.PE.unwind\_aarch64.UnpackedFunction

Bases: [`RuntimeFunctionAArch64`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RuntimeFunctionAArch64> "lief._lief.PE.RuntimeFunctionAArch64")

This class represents an unpacked AArch64 exception entry

Reference: [https://learn.microsoft.com/en-us/cpp/build/arm64-exception-handling?view=msvc-170#xdata-records](<https://learn.microsoft.com/en-us/cpp/build/arm64-exception-handling?view=msvc-170#xdata-records>)

#### [` E `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction.E>)

property E → int

1-bit field that indicates that information describing a single epilog is packed into the header (1) rather than requiring more scope words later (0).

#### [` X `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction.X>)

property X → int

1-bit field that indicates the presence (1) or absence (0) of exception data.

#### [` code_words `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction.code_words>)

property code\_words → int

Number of 32-bit words needed to contain all of the unwind codes

#### [` epilog_count `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction.epilog_count>)

property epilog\_count → int

**If E == 0**, specifies the count of the total number of epilog scopes. Otherwise, return 0.

#### [` epilog_offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction.epilog_offset>)

property epilog\_offset → int

**If E() == 1**, index of the first unwind code that describes the one and only epilog.

#### [` epilog_scope_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction.epilog_scope_t>)

class epilog\_scope\_t

Bases: `object`

This structure describes an epilog scope.

##### [` reserved `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction.epilog_scope_t.reserved>)

property reserved → int

Reserved for future expansion. Should be 0.

##### [` start_index `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction.epilog_scope_t.start_index>)

property start\_index → int

Byte index of the first unwind code that describes this epilog

##### [` start_offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction.epilog_scope_t.start_offset>)

property start\_offset → int

Offset of the epilog relative to the start of the function

#### [` epilog_scopes `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction.epilog_scopes>)

property epilog\_scopes → lief.PE.unwind\_aarch64.UnpackedFunction.it\_epilog\_scopes

Iterator over the epilog scopes

#### [` exception_handler `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction.exception_handler>)

property exception\_handler → int

Exception handler RVA (if any)

#### [` is_extended `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction.is_extended>)

property is\_extended → bool

Whether it uses 2-words encoding

#### [` unwind_code `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction.unwind_code>)

property unwind\_code → memoryview

Bytes that contain unwind codes

#### [` version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction.version>)

property version → int

Describes the version of the remaining `.xdata`.

Currently (2025-01-04), only version 0 is defined, so values of 1-3 aren’t permitted.

#### [` xdata_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.unwind_aarch64.UnpackedFunction.xdata_rva>)

property xdata\_rva → int

RVA where this unpacked data is located (usually pointing in `.xdata`)

---

## [Load Configuration](<https://lief.re/doc/latest/formats/pe/python.html#load-configuration>)

### [` lief.PE.LoadConfiguration `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration>)

class lief.PE.LoadConfiguration

Bases: `Object`

This class represents the load configuration data associated with the `IMAGE_LOAD_CONFIG_DIRECTORY`.

This structure is frequently updated by Microsoft to add new metadata.

Reference: [https://github.com/MicrosoftDocs/sdk-api/blob/cbeab4d371e8bc7e352c4d3a4c5819caa08c6a1c/sdk-api-src/content/winnt/ns-winnt-image\_load\_config\_directory64.md#L2](<https://github.com/MicrosoftDocs/sdk-api/blob/cbeab4d371e8bc7e352c4d3a4c5819caa08c6a1c/sdk-api-src/content/winnt/ns-winnt-image_load_config_directory64.md#L2>)

#### [` IMAGE_GUARD `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD>)

class IMAGE\_GUARD(*\*values*)

Bases: `Flag`

##### [` CASTGUARD_PRESENT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.CASTGUARD_PRESENT>)

CASTGUARD\_PRESENT = 16777216

##### [` CFW_INSTRUMENTED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.CFW_INSTRUMENTED>)

CFW\_INSTRUMENTED = 512

##### [` CF_ENABLE_EXPORT_SUPPRESSION `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.CF_ENABLE_EXPORT_SUPPRESSION>)

CF\_ENABLE\_EXPORT\_SUPPRESSION = 32768

##### [` CF_EXPORT_SUPPRESSION_INFO_PRESENT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.CF_EXPORT_SUPPRESSION_INFO_PRESENT>)

CF\_EXPORT\_SUPPRESSION\_INFO\_PRESENT = 16384

##### [` CF_FUNCTION_TABLE_PRESENT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.CF_FUNCTION_TABLE_PRESENT>)

CF\_FUNCTION\_TABLE\_PRESENT = 1024

##### [` CF_INSTRUMENTED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.CF_INSTRUMENTED>)

CF\_INSTRUMENTED = 256

##### [` CF_LONGJUMP_TABLE_PRESENT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.CF_LONGJUMP_TABLE_PRESENT>)

CF\_LONGJUMP\_TABLE\_PRESENT = 65536

##### [` DELAYLOAD_IAT_IN_ITS_OWN_SECTION `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.DELAYLOAD_IAT_IN_ITS_OWN_SECTION>)

DELAYLOAD\_IAT\_IN\_ITS\_OWN\_SECTION = 8192

##### [` EH_CONTINUATION_TABLE_PRESENT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.EH_CONTINUATION_TABLE_PRESENT>)

EH\_CONTINUATION\_TABLE\_PRESENT = 4194304

##### [` MEMCPY_PRESENT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.MEMCPY_PRESENT>)

MEMCPY\_PRESENT = 33554432

##### [` NONE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.NONE>)

NONE = 0

##### [` PROTECT_DELAYLOAD_IAT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.PROTECT_DELAYLOAD_IAT>)

PROTECT\_DELAYLOAD\_IAT = 4096

##### [` RETPOLINE_PRESENT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.RETPOLINE_PRESENT>)

RETPOLINE\_PRESENT = 1048576

##### [` RF_ENABLE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.RF_ENABLE>)

RF\_ENABLE = 262144

##### [` RF_INSTRUMENTED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.RF_INSTRUMENTED>)

RF\_INSTRUMENTED = 131072

##### [` RF_STRICT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.RF_STRICT>)

RF\_STRICT = 524288

##### [` SECURITY_COOKIE_UNUSED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.SECURITY_COOKIE_UNUSED>)

SECURITY\_COOKIE\_UNUSED = 2048

##### [` XFG_ENABLED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.XFG_ENABLED>)

XFG\_ENABLED = 8388608

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD.from_value>)

from\_value(*arg: int*) → [lief.PE.LoadConfiguration.IMAGE\_GUARD](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD> "lief.PE.LoadConfiguration.IMAGE_GUARD") = &lt;nanobind.nb\_func object&gt;

#### [` cast_guard_os_determined_failure_mode `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.cast_guard_os_determined_failure_mode>)

property cast\_guard\_os\_determined\_failure\_mode → int | None

#### [` characteristics `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.characteristics>)

property characteristics → int

Characteristics of the structure which is defined by its size

#### [` chpe_metadata `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.chpe_metadata>)

property chpe\_metadata → [lief.PE.CHPEMetadata](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadata> "lief.PE.CHPEMetadata") | None

Compiled Hybrid Portable Executable (CHPE) metadata (if any)

#### [` chpe_metadata_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.chpe_metadata_pointer>)

property chpe\_metadata\_pointer → int | None

VA to the extra Compiled Hybrid Portable Executable (CHPE) metadata.

#### [` code_integrity `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.code_integrity>)

property code\_integrity → [lief.PE.CodeIntegrity](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CodeIntegrity> "lief.PE.CodeIntegrity") | None

Code integrity information.

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.copy>)

copy(*self*) → [lief.\_lief.PE.LoadConfiguration](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration> "lief._lief.PE.LoadConfiguration")

Duplicate the current instance of this object

#### [` critical_section_default_timeout `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.critical_section_default_timeout>)

property critical\_section\_default\_timeout → int

The critical section default time-out value.

#### [` csd_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.csd_version>)

property csd\_version → int

The service pack version.

#### [` decommit_free_block_threshold `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.decommit_free_block_threshold>)

property decommit\_free\_block\_threshold → int

The size of the minimum block that must be freed before it is freed (de-committed), in bytes. This value is advisory.

#### [` decommit_total_free_threshold `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.decommit_total_free_threshold>)

property decommit\_total\_free\_threshold → int

The size of the minimum total memory that must be freed in the process heap before it is freed (de-committed), in bytes. This value is advisory.

#### [` dependent_load_flags `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.dependent_load_flags>)

property dependent\_load\_flags → int

Alias for [`reserved1`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.reserved1> "lief.PE.LoadConfiguration.reserved1").

The default load flags used when the operating system resolves the statically linked imports of a module. For more information, see `LoadLibraryEx`.

#### [` dynamic_relocations `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.dynamic_relocations>)

property dynamic\_relocations → lief.PE.LoadConfiguration.it\_dynamic\_relocations\_t

#### [` dynamic_value_reloc_table `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.dynamic_value_reloc_table>)

property dynamic\_value\_reloc\_table → int | None

VA pointing to a `IMAGE_DYNAMIC_RELOCATION_TABLE`

#### [` dynamic_value_reloctable_offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.dynamic_value_reloctable_offset>)

property dynamic\_value\_reloctable\_offset → int | None

Offset of dynamic relocation table relative to the relocation table

#### [` dynamic_value_reloctable_section `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.dynamic_value_reloctable_section>)

property dynamic\_value\_reloctable\_section → int | None

The section index of the dynamic value relocation table

#### [` editlist `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.editlist>)

property editlist → int

Reserved for use by the system.

#### [` enclave_config `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.enclave_config>)

property enclave\_config → [lief.PE.EnclaveConfiguration](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration> "lief.PE.EnclaveConfiguration") | None

#### [` enclave_configuration_ptr `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.enclave_configuration_ptr>)

property enclave\_configuration\_ptr → int | None

#### [` global_flags_clear `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.global_flags_clear>)

property global\_flags\_clear → int

The global flags that control system behavior. For more information, see `Gflags.exe`.

#### [` global_flags_set `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.global_flags_set>)

property global\_flags\_set → int

The global flags that control system behavior. For more information, see `Gflags.exe`.

#### [` guard_address_taken_iat_entries `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_address_taken_iat_entries>)

property guard\_address\_taken\_iat\_entries → lief.PE.LoadConfiguration.it\_guard\_functions

List of RVA pointed by [`guard_address_taken_iat_entry_table`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_address_taken_iat_entry_table> "lief.PE.LoadConfiguration.guard_address_taken_iat_entry_table")

#### [` guard_address_taken_iat_entry_count `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_address_taken_iat_entry_count>)

property guard\_address\_taken\_iat\_entry\_count → int | None

The count of unique RVAs in the table pointed by [`guard_address_taken_iat_entry_table`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_address_taken_iat_entry_table> "lief.PE.LoadConfiguration.guard_address_taken_iat_entry_table").

#### [` guard_address_taken_iat_entry_table `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_address_taken_iat_entry_table>)

property guard\_address\_taken\_iat\_entry\_table → int | None

The VA where Control Flow Guard address taken IAT table is stored.

#### [` guard_cf_check_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_cf_check_function_pointer>)

property guard\_cf\_check\_function\_pointer → int | None

The VA where Control Flow Guard check-function pointer is stored.

#### [` guard_cf_dispatch_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_cf_dispatch_function_pointer>)

property guard\_cf\_dispatch\_function\_pointer → int | None

The VA where Control Flow Guard dispatch-function pointer is stored.

#### [` guard_cf_flags_list `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_cf_flags_list>)

property guard\_cf\_flags\_list → list[[lief.PE.LoadConfiguration.IMAGE\_GUARD](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD> "lief.PE.LoadConfiguration.IMAGE_GUARD")]

List of flags

#### [` guard_cf_function_count `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_cf_function_count>)

property guard\_cf\_function\_count → int | None

The count of unique RVAs in the [`guard_cf_function_table`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_cf_function_table> "lief.PE.LoadConfiguration.guard_cf_function_table") table.

#### [` guard_cf_function_table `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_cf_function_table>)

property guard\_cf\_function\_table → int | None

The VA of the sorted table of RVAs of each Control Flow Guard function in the image.

#### [` guard_cf_functions `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_cf_functions>)

property guard\_cf\_functions → lief.PE.LoadConfiguration.it\_guard\_functions

Iterator over the Control Flow Guard functions referenced by [`guard_cf_function_table`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_cf_function_table> "lief.PE.LoadConfiguration.guard_cf_function_table")

#### [` guard_eh_continuation_count `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_eh_continuation_count>)

property guard\_eh\_continuation\_count → int | None

#### [` guard_eh_continuation_functions `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_eh_continuation_functions>)

property guard\_eh\_continuation\_functions → lief.PE.LoadConfiguration.it\_guard\_functions

List of RVA pointed by [`guard_eh_continuation_table`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_eh_continuation_table> "lief.PE.LoadConfiguration.guard_eh_continuation_table")

#### [` guard_eh_continuation_table `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_eh_continuation_table>)

property guard\_eh\_continuation\_table → int | None

#### [` guard_flags `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_flags>)

property guard\_flags → int | None

Control Flow Guard related flags.

#### [` guard_function_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_function_t>)

class guard\_function\_t

Bases: `object`

##### [` extra `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_function_t.extra>)

property extra → int

##### [` rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_function_t.rva>)

property rva → int

#### [` guard_long_jump_target_count `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_long_jump_target_count>)

property guard\_long\_jump\_target\_count → int | None

The count of unique RVAs in the table pointed by [`guard_long_jump_target_table`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_long_jump_target_table> "lief.PE.LoadConfiguration.guard_long_jump_target_table").

#### [` guard_long_jump_target_table `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_long_jump_target_table>)

property guard\_long\_jump\_target\_table → int | None

The VA where Control Flow Guard long jump target table is stored.

#### [` guard_long_jump_targets `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_long_jump_targets>)

property guard\_long\_jump\_targets → lief.PE.LoadConfiguration.it\_guard\_functions

List of RVA pointed by [`guard_long_jump_target_table`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_long_jump_target_table> "lief.PE.LoadConfiguration.guard_long_jump_target_table")

#### [` guard_memcpy_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_memcpy_function_pointer>)

property guard\_memcpy\_function\_pointer → int | None

#### [` guard_rf_failure_routine `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_rf_failure_routine>)

property guard\_rf\_failure\_routine → int | None

VA of the failure routine

#### [` guard_rf_failure_routine_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_rf_failure_routine_function_pointer>)

property guard\_rf\_failure\_routine\_function\_pointer → int | None

VA of the failure routine `fptr`.

#### [` guard_rf_verify_stackpointer_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_rf_verify_stackpointer_function_pointer>)

property guard\_rf\_verify\_stackpointer\_function\_pointer → int | None

VA of the Function verifying the stack pointer

#### [` guard_xfg_check_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_xfg_check_function_pointer>)

property guard\_xfg\_check\_function\_pointer → int | None

#### [` guard_xfg_dispatch_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_xfg_dispatch_function_pointer>)

property guard\_xfg\_dispatch\_function\_pointer → int | None

#### [` guard_xfg_table_dispatch_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.guard_xfg_table_dispatch_function_pointer>)

property guard\_xfg\_table\_dispatch\_function\_pointer → int | None

#### [` has `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.has>)

has(*self*, *arg: [lief.\_lief.PE.LoadConfiguration.IMAGE\_GUARD](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.IMAGE_GUARD> "lief._lief.PE.LoadConfiguration.IMAGE_GUARD")*, */*) → bool

Check if the given flag is present

#### [` hotpatch_table_offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.hotpatch_table_offset>)

property hotpatch\_table\_offset → int | None

Offset to the *hotpatch* table

#### [` hybrid_metadata_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.hybrid_metadata_pointer>)

property hybrid\_metadata\_pointer → int | None

Alias for [`chpe_metadata_pointer`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.chpe_metadata_pointer> "lief.PE.LoadConfiguration.chpe_metadata_pointer").

#### [` lock_prefix_table `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.lock_prefix_table>)

property lock\_prefix\_table → int

The VA of a list of addresses where the `LOCK` prefix is used. These will be replaced by `NOP` on single-processor systems. This member is available only for `x86`.

#### [` major_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.major_version>)

property major\_version → int

Major version

#### [` maximum_allocation_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.maximum_allocation_size>)

property maximum\_allocation\_size → int

The maximum allocation size, in bytes. This member is obsolete and is used only for debugging purposes.

#### [` minor_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.minor_version>)

property minor\_version → int

Minor version

#### [` process_affinity_mask `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.process_affinity_mask>)

property process\_affinity\_mask → int

The process affinity mask. For more information, see `GetProcessAffinityMask`. This member is available only for `.exe` files.

#### [` process_heap_flags `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.process_heap_flags>)

property process\_heap\_flags → int

The process heap flags. For more information, see `HeapCreate`.

#### [` reserved1 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.reserved1>)

property reserved1 → int

See: [`dependent_load_flags`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.dependent_load_flags> "lief.PE.LoadConfiguration.dependent_load_flags")

#### [` reserved2 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.reserved2>)

property reserved2 → int | None

Must be 0

#### [` reserved3 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.reserved3>)

property reserved3 → int | None

#### [` se_handler_count `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.se_handler_count>)

property se\_handler\_count → int | None

The count of unique handlers in the table. This member is available only for x86.

#### [` se_handler_table `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.se_handler_table>)

property se\_handler\_table → int | None

The VA of the sorted table of RVAs of each valid, unique handler in the image. This member is available only for x86.

#### [` security_cookie `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.security_cookie>)

property security\_cookie → int

A pointer to a cookie that is used by Visual C++ or GS implementation.

#### [` seh_functions `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.seh_functions>)

property seh\_functions → list[int]

Return the list of the function RVA in the SEH table (if any)

#### [` size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.size>)

property size → int

Size of the current structure

#### [` timedatestamp `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.timedatestamp>)

property timedatestamp → int

The date and time stamp value

#### [` uma_function_pointers `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.uma_function_pointers>)

property uma\_function\_pointers → int | None

#### [` virtual_memory_threshold `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.virtual_memory_threshold>)

property virtual\_memory\_threshold → int

The maximum block size that can be allocated from heap segments, in bytes.

#### [` volatile_metadata `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.volatile_metadata>)

property volatile\_metadata → [lief.PE.VolatileMetadata](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VolatileMetadata> "lief.PE.VolatileMetadata") | None

#### [` volatile_metadata_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.LoadConfiguration.volatile_metadata_pointer>)

property volatile\_metadata\_pointer → int | None

---

## [CHPEMetadata](<https://lief.re/doc/latest/formats/pe/python.html#chpemetadata>)

![Inheritance diagram of lief._lief.PE.CHPEMetadata, lief._lief.PE.CHPEMetadataX86, lief._lief.PE.CHPEMetadataARM64](https://lief.re/doc/latest/_images/inheritance-7dbd6ebcce071b8fbb0282a4bb3cbd6d97573f8e.png)

### [` lief.PE.CHPEMetadata `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadata>)

class lief.PE.CHPEMetadata

Bases: `object`

Base class for any Compiled Hybrid Portable Executable (CHPE) metadata.

This class is inherited by architecture-specific implementation.

#### [` KIND `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadata.KIND>)

class KIND(*\*values*)

Bases: `Enum`

Discriminator for the subclasses

##### [` ARM64 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadata.KIND.ARM64>)

ARM64 = 1

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadata.KIND.UNKNOWN>)

UNKNOWN = 0

##### [` X86 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadata.KIND.X86>)

X86 = 2

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadata.copy>)

copy(*self*) → [lief.\_lief.PE.CHPEMetadata](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadata> "lief._lief.PE.CHPEMetadata") | None

Duplicate the current instance of this object

#### [` kind `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadata.kind>)

property kind → [lief.PE.CHPEMetadata.KIND](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadata.KIND> "lief.PE.CHPEMetadata.KIND")

Determine the type of the concrete implementation

#### [` version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadata.version>)

property version → int

Version of the structure

---

## [CHPEMetadata (ARM64)](<https://lief.re/doc/latest/formats/pe/python.html#chpemetadata-arm64>)

![Inheritance diagram of lief._lief.PE.CHPEMetadataARM64](https://lief.re/doc/latest/_images/inheritance-e619027d09ee0cfabf2613b44f245186d5b2cfb1.png)

### [` lief.PE.CHPEMetadataARM64 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64>)

class lief.PE.CHPEMetadataARM64

Bases: [`CHPEMetadata`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadata> "lief._lief.PE.CHPEMetadata")

This class represents ARM64-specific metadata used in CHPE (Compatible Hybrid PE) binaries, particularly for hybrid architectures like ARM64EC and ARM64X.

It extends the [`CHPEMetadata`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadata> "lief.PE.CHPEMetadata") base class and provides access to metadata describing code ranges, redirections, entry points, and other hybrid-specific information relevant for binary analysis.

#### [` alternate_entry_point `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.alternate_entry_point>)

property alternate\_entry\_point → int

#### [` auxiliary_delay_import `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.auxiliary_delay_import>)

property auxiliary\_delay\_import → int

#### [` auxiliary_delay_import_copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.auxiliary_delay_import_copy>)

property auxiliary\_delay\_import\_copy → int

#### [` auxiliary_iat `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.auxiliary_iat>)

property auxiliary\_iat → int

#### [` auxiliary_iat_copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.auxiliary_iat_copy>)

property auxiliary\_iat\_copy → int

#### [` bitfield_info `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.bitfield_info>)

property bitfield\_info → int

#### [` code_map `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.code_map>)

property code\_map → int

#### [` code_map_count `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.code_map_count>)

property code\_map\_count → int

#### [` code_range_entry_point `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.code_range_entry_point>)

property code\_range\_entry\_point → lief.PE.CHPEMetadataARM64.it\_code\_range\_entry\_point

#### [` code_range_entry_point_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.code_range_entry_point_t>)

class code\_range\_entry\_point\_t

Bases: `object`

Mirror of IMAGE\_ARM64EC\_CODE\_RANGE\_ENTRY\_POINT: Represents a mapping between code range and its entry point.

##### [` end_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.code_range_entry_point_t.end_rva>)

property end\_rva → int

End of the code range (RVA).

##### [` entrypoint `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.code_range_entry_point_t.entrypoint>)

property entrypoint → int

RVA of the entry point for this range.

##### [` start_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.code_range_entry_point_t.start_rva>)

property start\_rva → int

Start of the code range.

#### [` code_ranges `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.code_ranges>)

property code\_ranges → lief.PE.CHPEMetadataARM64.it\_range\_entries

#### [` code_ranges_to_entry_points_count `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.code_ranges_to_entry_points_count>)

property code\_ranges\_to\_entry\_points\_count → int

#### [` code_ranges_to_entrypoints `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.code_ranges_to_entrypoints>)

property code\_ranges\_to\_entrypoints → int

#### [` extra_rfe_table `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.extra_rfe_table>)

property extra\_rfe\_table → int

#### [` extra_rfe_table_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.extra_rfe_table_size>)

property extra\_rfe\_table\_size → int

#### [` get_x64_information_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.get_x64_information_function_pointer>)

property get\_x64\_information\_function\_pointer → int

#### [` os_arm64x_dispatch_call `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.os_arm64x_dispatch_call>)

property os\_arm64x\_dispatch\_call → int

#### [` os_arm64x_dispatch_call_no_redirect `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.os_arm64x_dispatch_call_no_redirect>)

property os\_arm64x\_dispatch\_call\_no\_redirect → int

#### [` os_arm64x_dispatch_fptr `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.os_arm64x_dispatch_fptr>)

property os\_arm64x\_dispatch\_fptr → int

#### [` os_arm64x_dispatch_icall `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.os_arm64x_dispatch_icall>)

property os\_arm64x\_dispatch\_icall → int

#### [` os_arm64x_dispatch_icall_cfg `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.os_arm64x_dispatch_icall_cfg>)

property os\_arm64x\_dispatch\_icall\_cfg → int

#### [` os_arm64x_dispatch_ret `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.os_arm64x_dispatch_ret>)

property os\_arm64x\_dispatch\_ret → int

#### [` range_entry_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.range_entry_t>)

class range\_entry\_t

Bases: `object`

Structure that describes architecture-specific ranges

##### [` TYPE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.range_entry_t.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

###### [` AMD64 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.range_entry_t.TYPE.AMD64>)

AMD64 = 2

###### [` ARM64 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.range_entry_t.TYPE.ARM64>)

ARM64 = 0

###### [` ARM64EC `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.range_entry_t.TYPE.ARM64EC>)

ARM64EC = 1

##### [` end `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.range_entry_t.end>)

property end → int

End of the range (RVA)

##### [` length `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.range_entry_t.length>)

property length → int

Range’s length

##### [` start `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.range_entry_t.start>)

property start → int

Start of the range (RVA)

##### [` start_offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.range_entry_t.start_offset>)

property start\_offset → int

Raw data (includes start RVA and type)

##### [` type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.range_entry_t.type>)

property type → [lief.PE.CHPEMetadataARM64.range\_entry\_t.TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.range_entry_t.TYPE> "lief.PE.CHPEMetadataARM64.range_entry_t.TYPE")

Architecture for this range

#### [` redirection_entry_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.redirection_entry_t>)

class redirection\_entry\_t

Bases: `object`

Structure that describes a redirection

##### [` dst `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.redirection_entry_t.dst>)

property dst → int

##### [` src `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.redirection_entry_t.src>)

property src → int

#### [` redirection_metadata `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.redirection_metadata>)

property redirection\_metadata → int

#### [` redirection_metadata_count `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.redirection_metadata_count>)

property redirection\_metadata\_count → int

#### [` redirections `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.redirections>)

property redirections → lief.PE.CHPEMetadataARM64.it\_redirection\_entries

#### [` set_x64_information_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataARM64.set_x64_information_function_pointer>)

property set\_x64\_information\_function\_pointer → int

## [CHPEMetadata (X86)](<https://lief.re/doc/latest/formats/pe/python.html#chpemetadata-x86>)

![Inheritance diagram of lief._lief.PE.CHPEMetadataX86](https://lief.re/doc/latest/_images/inheritance-69c5c94a06f64ba854c16000b7e606af5b99537b.png)

### [` lief.PE.CHPEMetadataX86 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataX86>)

class lief.PE.CHPEMetadataX86

Bases: [`CHPEMetadata`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadata> "lief._lief.PE.CHPEMetadata")

This class represents hybrid metadata for X86.

#### [` chpe_code_address_range_count `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataX86.chpe_code_address_range_count>)

property chpe\_code\_address\_range\_count → int

#### [` chpe_code_address_range_offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataX86.chpe_code_address_range_offset>)

property chpe\_code\_address\_range\_offset → int

#### [` compiler_iat_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataX86.compiler_iat_pointer>)

property compiler\_iat\_pointer → int | None

#### [` wowa64_dispatch_call_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataX86.wowa64_dispatch_call_function_pointer>)

property wowa64\_dispatch\_call\_function\_pointer → int

#### [` wowa64_dispatch_indirect_call_cfg_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataX86.wowa64_dispatch_indirect_call_cfg_function_pointer>)

property wowa64\_dispatch\_indirect\_call\_cfg\_function\_pointer → int

#### [` wowa64_dispatch_indirect_call_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataX86.wowa64_dispatch_indirect_call_function_pointer>)

property wowa64\_dispatch\_indirect\_call\_function\_pointer → int

#### [` wowa64_dispatch_jump_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataX86.wowa64_dispatch_jump_function_pointer>)

property wowa64\_dispatch\_jump\_function\_pointer → int

#### [` wowa64_dispatch_ret_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataX86.wowa64_dispatch_ret_function_pointer>)

property wowa64\_dispatch\_ret\_function\_pointer → int

#### [` wowa64_dispatch_ret_leaf_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataX86.wowa64_dispatch_ret_leaf_function_pointer>)

property wowa64\_dispatch\_ret\_leaf\_function\_pointer → int

#### [` wowa64_exception_handler_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataX86.wowa64_exception_handler_function_pointer>)

property wowa64\_exception\_handler\_function\_pointer → int

#### [` wowa64_rdtsc_function_pointer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.CHPEMetadataX86.wowa64_rdtsc_function_pointer>)

property wowa64\_rdtsc\_function\_pointer → int | None

---

## [DynamicRelocation](<https://lief.re/doc/latest/formats/pe/python.html#dynamicrelocation>)

![Inheritance diagram of lief._lief.PE.DynamicRelocationV2, lief._lief.PE.DynamicRelocationV1, lief._lief.PE.DynamicRelocation](https://lief.re/doc/latest/_images/inheritance-0e048bc974d53d842e96332b2e20f3e24b126f83.png)

### [` lief.PE.DynamicRelocation `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation>)

class lief.PE.DynamicRelocation

Bases: `object`

This is the base class for any `IMAGE_DYNAMIC_RELOCATION32`, `IMAGE_DYNAMIC_RELOCATION32_V2`, `IMAGE_DYNAMIC_RELOCATION64`, `IMAGE_DYNAMIC_RELOCATION64_V2` dynamic relocations.

#### [` IMAGE_DYNAMIC_RELOCATION `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation.IMAGE_DYNAMIC_RELOCATION>)

class IMAGE\_DYNAMIC\_RELOCATION(*\*values*)

Bases: `Enum`

Special symbol values as defined in `link.exe - GetDVRTSpecialSymbolName`

##### [` RELOCATION_ARM64X `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation.IMAGE_DYNAMIC_RELOCATION.RELOCATION_ARM64X>)

RELOCATION\_ARM64X = 6

##### [` RELOCATION_ARM64_KERNEL_IMPORT_CALL_TRANSFER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation.IMAGE_DYNAMIC_RELOCATION.RELOCATION_ARM64_KERNEL_IMPORT_CALL_TRANSFER>)

RELOCATION\_ARM64\_KERNEL\_IMPORT\_CALL\_TRANSFER = 8

##### [` RELOCATION_FUNCTION_OVERRIDE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation.IMAGE_DYNAMIC_RELOCATION.RELOCATION_FUNCTION_OVERRIDE>)

RELOCATION\_FUNCTION\_OVERRIDE = 7

##### [` RELOCATION_GUARD_IMPORT_CONTROL_TRANSFER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation.IMAGE_DYNAMIC_RELOCATION.RELOCATION_GUARD_IMPORT_CONTROL_TRANSFER>)

RELOCATION\_GUARD\_IMPORT\_CONTROL\_TRANSFER = 3

##### [` RELOCATION_GUARD_INDIR_CONTROL_TRANSFER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation.IMAGE_DYNAMIC_RELOCATION.RELOCATION_GUARD_INDIR_CONTROL_TRANSFER>)

RELOCATION\_GUARD\_INDIR\_CONTROL\_TRANSFER = 4

##### [` RELOCATION_GUARD_RF_EPILOGUE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation.IMAGE_DYNAMIC_RELOCATION.RELOCATION_GUARD_RF_EPILOGUE>)

RELOCATION\_GUARD\_RF\_EPILOGUE = 2

##### [` RELOCATION_GUARD_RF_PROLOGUE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation.IMAGE_DYNAMIC_RELOCATION.RELOCATION_GUARD_RF_PROLOGUE>)

RELOCATION\_GUARD\_RF\_PROLOGUE = 1

##### [` RELOCATION_GUARD_SWITCHTABLE_BRANCH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation.IMAGE_DYNAMIC_RELOCATION.RELOCATION_GUARD_SWITCHTABLE_BRANCH>)

RELOCATION\_GUARD\_SWITCHTABLE\_BRANCH = 5

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation.IMAGE_DYNAMIC_RELOCATION.from_value>)

from\_value(*arg: int*) → [lief.PE.DynamicRelocation.IMAGE\_DYNAMIC\_RELOCATION](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation.IMAGE_DYNAMIC_RELOCATION> "lief.PE.DynamicRelocation.IMAGE_DYNAMIC_RELOCATION") = &lt;nanobind.nb\_func object&gt;

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation.copy>)

copy(*self*) → [lief.\_lief.PE.DynamicRelocation](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation> "lief._lief.PE.DynamicRelocation") | None

Duplicate the current instance of this object

#### [` fixups `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation.fixups>)

property fixups → [lief.PE.DynamicFixup](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup> "lief.PE.DynamicFixup") | None

Return fixups information, where the interpretation may depend on the symbol’s value

#### [` symbol `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation.symbol>)

property symbol → int

Symbol address. Some values have a special meaning (c.f. [`IMAGE_DYNAMIC_RELOCATION`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation.IMAGE_DYNAMIC_RELOCATION> "lief.PE.DynamicRelocation.IMAGE_DYNAMIC_RELOCATION")) and define how fixups are encoded.

#### [` version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation.version>)

property version → int

Version of the structure

## [DynamicRelocationV1](<https://lief.re/doc/latest/formats/pe/python.html#dynamicrelocationv1>)

![Inheritance diagram of lief._lief.PE.DynamicRelocationV1](https://lief.re/doc/latest/_images/inheritance-89cbcc8c24de64d687cb2754c13ee518ef489792.png)

### [` lief.PE.DynamicRelocationV1 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocationV1>)

class lief.PE.DynamicRelocationV1

Bases: [`DynamicRelocation`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation> "lief._lief.PE.DynamicRelocation")

This class represents a dynamic relocation (`IMAGE_DYNAMIC_RELOCATION32` or `IMAGE_DYNAMIC_RELOCATION64`).

## [DynamicRelocationV2](<https://lief.re/doc/latest/formats/pe/python.html#dynamicrelocationv2>)

![Inheritance diagram of lief._lief.PE.DynamicRelocationV2](https://lief.re/doc/latest/_images/inheritance-d1b5fa919e7330d2079d457d92ea5b012e5632ed.png)

### [` lief.PE.DynamicRelocationV2 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocationV2>)

class lief.PE.DynamicRelocationV2

Bases: [`DynamicRelocation`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation> "lief._lief.PE.DynamicRelocation")

This class represents a dynamic relocation (`IMAGE_DYNAMIC_RELOCATION64_V2` or `IMAGE_DYNAMIC_RELOCATION32_V2`)

---

## [DynamicFixup](<https://lief.re/doc/latest/formats/pe/python.html#dynamicfixup>)

![Inheritance diagram of lief._lief.PE.DynamicFixupControlTransfer, lief._lief.PE.DynamicFixupARM64X, lief._lief.PE.DynamicFixup, lief._lief.PE.DynamicFixupGeneric, lief._lief.PE.DynamicFixupUnknown, lief._lief.PE.FunctionOverride, lief._lief.PE.DynamicFixupARM64Kernel](https://lief.re/doc/latest/_images/inheritance-5d279329dc6ec5e8c739fcbd832551d72c1138f5.png)

### [` lief.PE.DynamicFixup `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup>)

class lief.PE.DynamicFixup

Bases: `object`

This is the base class for any fixups located in [`DynamicRelocation`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicRelocation> "lief.PE.DynamicRelocation")

#### [` KIND `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup.KIND>)

class KIND(*\*values*)

Bases: `Enum`

##### [` ARM64X `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup.KIND.ARM64X>)

ARM64X = 2

##### [` ARM64_KERNEL_IMPORT_CALL_TRANSFER `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup.KIND.ARM64_KERNEL_IMPORT_CALL_TRANSFER>)

ARM64\_KERNEL\_IMPORT\_CALL\_TRANSFER = 4

##### [` FUNCTION_OVERRIDE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup.KIND.FUNCTION_OVERRIDE>)

FUNCTION\_OVERRIDE = 3

##### [` GENERIC `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup.KIND.GENERIC>)

GENERIC = 1

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup.KIND.UNKNOWN>)

UNKNOWN = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup.KIND.from_value>)

from\_value(*arg: int*) → [lief.PE.DynamicFixup.KIND](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup.KIND> "lief.PE.DynamicFixup.KIND") = &lt;nanobind.nb\_func object&gt;

#### [` copy `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup.copy>)

copy(*self*) → [lief.\_lief.PE.DynamicFixup](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup> "lief._lief.PE.DynamicFixup") | None

Duplicate the current instance of this object

#### [` kind `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup.kind>)

property kind → [lief.PE.DynamicFixup.KIND](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup.KIND> "lief.PE.DynamicFixup.KIND")

Encoding of the fixups

## [DynamicFixupControlTransfer](<https://lief.re/doc/latest/formats/pe/python.html#dynamicfixupcontroltransfer>)

![Inheritance diagram of lief._lief.PE.DynamicFixupControlTransfer](https://lief.re/doc/latest/_images/inheritance-a19386df3dd4ce210dc0298114798cf0678e8cbb.png)

### [` lief.PE.DynamicFixupControlTransfer `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupControlTransfer>)

class lief.PE.DynamicFixupControlTransfer

Bases: [`DynamicFixup`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup> "lief._lief.PE.DynamicFixup")

This class wraps fixups associated with the (special) symbol value: `IMAGE_DYNAMIC_RELOCATION_GUARD_IMPORT_CONTROL_TRANSFER (3)`.

#### [` NO_IAT_INDEX `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupControlTransfer.NO_IAT_INDEX>)

NO\_IAT\_INDEX = 32767

#### [` reloc_entry_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupControlTransfer.reloc_entry_t>)

class reloc\_entry\_t

Bases: `object`

Mirror IMAGE\_IMPORT\_CONTROL\_TRANSFER\_DYNAMIC\_RELOCATION

##### [` iat_index `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupControlTransfer.reloc_entry_t.iat_index>)

property iat\_index → int

IAT index of the corresponding import. `0x7FFF` is a special value indicating no index.

##### [` is_call `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupControlTransfer.reloc_entry_t.is_call>)

property is\_call → bool

True if target instruction is a `call`, false otherwise

##### [` rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupControlTransfer.reloc_entry_t.rva>)

property rva → int

RVA to the instruction

#### [` relocations `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupControlTransfer.relocations>)

property relocations → lief.PE.DynamicFixupControlTransfer.it\_relocations

Iterator over the relocations

## [DynamicFixupARM64Kernel](<https://lief.re/doc/latest/formats/pe/python.html#dynamicfixuparm64kernel>)

![Inheritance diagram of lief._lief.PE.DynamicFixupARM64Kernel](https://lief.re/doc/latest/_images/inheritance-19a4c466231f4f7b8fc2005617c508e59cf6aa08.png)

### [` lief.PE.DynamicFixupARM64Kernel `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64Kernel>)

class lief.PE.DynamicFixupARM64Kernel

Bases: [`DynamicFixup`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup> "lief._lief.PE.DynamicFixup")

This class wraps fixups associated with the (special) symbol value: `IMAGE_DYNAMIC_RELOCATION_ARM64_KERNEL_IMPORT_CALL_TRANSFER (8)`.

#### [` IMPORT_TYPE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64Kernel.IMPORT_TYPE>)

class IMPORT\_TYPE(*\*values*)

Bases: `Enum`

##### [` DELAYED `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64Kernel.IMPORT_TYPE.DELAYED>)

DELAYED = 1

##### [` STATIC `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64Kernel.IMPORT_TYPE.STATIC>)

STATIC = 0

#### [` NO_IAT_INDEX `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64Kernel.NO_IAT_INDEX>)

NO\_IAT\_INDEX = 32767

#### [` reloc_entry_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64Kernel.reloc_entry_t>)

class reloc\_entry\_t

Bases: `object`

Mirror `IMAGE_IMPORT_CONTROL_TRANSFER_ARM64_RELOCATION`

##### [` iat_index `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64Kernel.reloc_entry_t.iat_index>)

property iat\_index → int

IAT index of the corresponding import. `0x7FFF` is a special value indicating no index.

##### [` import_type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64Kernel.reloc_entry_t.import_type>)

property import\_type → [lief.PE.DynamicFixupARM64Kernel.IMPORT\_TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64Kernel.IMPORT_TYPE> "lief.PE.DynamicFixupARM64Kernel.IMPORT_TYPE")

See: [`IMPORT_TYPE`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64Kernel.IMPORT_TYPE> "lief.PE.DynamicFixupARM64Kernel.IMPORT_TYPE")

##### [` indirect_call `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64Kernel.reloc_entry_t.indirect_call>)

property indirect\_call → bool

True if target instruction is a `blr`, false if it’s a `br`.

##### [` register_index `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64Kernel.reloc_entry_t.register_index>)

property register\_index → int

Register index used for the indirect call/jump. For instance, if the instruction is `br x3`, this index is set to `3`

##### [` rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64Kernel.reloc_entry_t.rva>)

property rva → int

RVA to the call instruction

#### [` relocations `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64Kernel.relocations>)

property relocations → lief.PE.DynamicFixupARM64Kernel.it\_relocations

Iterator over the relocations

## [DynamicFixupARM64X](<https://lief.re/doc/latest/formats/pe/python.html#dynamicfixuparm64x>)

![Inheritance diagram of lief._lief.PE.DynamicFixupARM64X](https://lief.re/doc/latest/_images/inheritance-925804b9f9696ad6f5aecd59645a406a5aa9525c.png)

### [` lief.PE.DynamicFixupARM64X `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64X>)

class lief.PE.DynamicFixupARM64X

Bases: [`DynamicFixup`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup> "lief._lief.PE.DynamicFixup")

This class represents `IMAGE_DYNAMIC_RELOCATION_ARM64X`

#### [` FIXUP_TYPE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64X.FIXUP_TYPE>)

class FIXUP\_TYPE(*\*values*)

Bases: `Enum`

##### [` DELTA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64X.FIXUP_TYPE.DELTA>)

DELTA = 2

##### [` VALUE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64X.FIXUP_TYPE.VALUE>)

VALUE = 1

##### [` ZEROFILL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64X.FIXUP_TYPE.ZEROFILL>)

ZEROFILL = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64X.FIXUP_TYPE.from_value>)

from\_value(*arg: int*) → [lief.PE.DynamicFixupARM64X.FIXUP\_TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64X.FIXUP_TYPE> "lief.PE.DynamicFixupARM64X.FIXUP_TYPE") = &lt;nanobind.nb\_func object&gt;

#### [` reloc_entry_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64X.reloc_entry_t>)

class reloc\_entry\_t

Bases: `object`

##### [` raw_bytes `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64X.reloc_entry_t.raw_bytes>)

property raw\_bytes → list[int]

If the type is class:~.FIXUP\_TYPE.VALUE, the bytes associated with the fixup.

##### [` rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64X.reloc_entry_t.rva>)

property rva → int

RVA where the fixup takes place

##### [` size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64X.reloc_entry_t.size>)

property size → int

Size of the value to patch

##### [` type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64X.reloc_entry_t.type>)

property type → [lief.PE.DynamicFixupARM64X.FIXUP\_TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64X.FIXUP_TYPE> "lief.PE.DynamicFixupARM64X.FIXUP_TYPE")

Fixup’s kind

##### [` value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64X.reloc_entry_t.value>)

property value → int

If the type is class:~.FIXUP\_TYPE.DELTA, the (signed) value

#### [` relocations `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupARM64X.relocations>)

property relocations → lief.PE.DynamicFixupARM64X.it\_relocations

Iterator over the different fixup entries

## [DynamicFixupGeneric](<https://lief.re/doc/latest/formats/pe/python.html#dynamicfixupgeneric>)

![Inheritance diagram of lief._lief.PE.DynamicFixupGeneric](https://lief.re/doc/latest/_images/inheritance-5ddb4ff0999a1991c7671b8337a429fcdaf51bf6.png)

### [` lief.PE.DynamicFixupGeneric `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupGeneric>)

class lief.PE.DynamicFixupGeneric

Bases: [`DynamicFixup`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup> "lief._lief.PE.DynamicFixup")

This class represents a generic entry where the fixups are regular relocations ([`lief.PE.Relocation`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Relocation> "lief.PE.Relocation"))

#### [` relocations `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupGeneric.relocations>)

property relocations → lief.PE.DynamicFixupGeneric.it\_relocations

Iterator over the relocations

## [DynamicFixupUnknown](<https://lief.re/doc/latest/formats/pe/python.html#dynamicfixupunknown>)

![Inheritance diagram of lief._lief.PE.DynamicFixupUnknown](https://lief.re/doc/latest/_images/inheritance-c4a4895ab753ab3b8e742bc708b347ae062811bd.png)

### [` lief.PE.DynamicFixupUnknown `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupUnknown>)

class lief.PE.DynamicFixupUnknown

Bases: [`DynamicFixup`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup> "lief._lief.PE.DynamicFixup")

This class represents a special dynamic relocation where the format of the fixups is not supported by LIEF.

#### [` payload `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixupUnknown.payload>)

property payload → memoryview

Raw fixups

## [FunctionOverride](<https://lief.re/doc/latest/formats/pe/python.html#functionoverride>)

![Inheritance diagram of lief._lief.PE.FunctionOverride](https://lief.re/doc/latest/_images/inheritance-d2bb6cf821159f887d14e027f3de02c16ee3b962.png)

### [` lief.PE.FunctionOverride `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride>)

class lief.PE.FunctionOverride

Bases: [`DynamicFixup`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.DynamicFixup> "lief._lief.PE.DynamicFixup")

This class represents `IMAGE_DYNAMIC_RELOCATION_FUNCTION_OVERRIDE`

#### [` bdd_info `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride.bdd_info>)

property bdd\_info → lief.PE.FunctionOverride.it\_bdd\_info

Iterator over the BDD info

#### [` find_bdd_infofind_bdd_info `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride.find_bdd_info>)

find\_bdd\_info(*self*, *arg: int*, */*) → [lief.\_lief.PE.FunctionOverride.image\_bdd\_info\_t](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride.image_bdd_info_t> "lief._lief.PE.FunctionOverride.image_bdd_info_t") | None

**find\_bdd\_info(*self*, *arg: [lief.\_lief.PE.FunctionOverrideInfo](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverrideInfo> "lief._lief.PE.FunctionOverrideInfo")*, */*) → [lief.\_lief.PE.FunctionOverride.image\_bdd\_info\_t](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride.image_bdd_info_t> "lief._lief.PE.FunctionOverride.image_bdd_info_t") | None**

Overloaded function.

1. `find_bdd_info(self, arg: int, /) -> lief._lief.PE.FunctionOverride.image_bdd_info_t | None`

Find the `IMAGE_BDD_INFO` at the given offset

2. `find_bdd_info(self, arg: lief._lief.PE.FunctionOverrideInfo, /) -> lief._lief.PE.FunctionOverride.image_bdd_info_t | None`

Find the `IMAGE_BDD_INFO` associated with the given function override info

#### [` func_overriding_info `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride.func_overriding_info>)

property func\_overriding\_info → lief.PE.FunctionOverride.it\_func\_overriding\_info

Iterator over the overriding info

#### [` image_bdd_dynamic_relocation_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride.image_bdd_dynamic_relocation_t>)

class image\_bdd\_dynamic\_relocation\_t

Bases: `object`

Mirror `IMAGE_BDD_DYNAMIC_RELOCATION`

##### [` left `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride.image_bdd_dynamic_relocation_t.left>)

property left → int

##### [` right `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride.image_bdd_dynamic_relocation_t.right>)

property right → int

##### [` value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride.image_bdd_dynamic_relocation_t.value>)

property value → int

#### [` image_bdd_info_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride.image_bdd_info_t>)

class image\_bdd\_info\_t

Bases: `object`

Mirror `IMAGE_BDD_INFO`

##### [` original_offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride.image_bdd_info_t.original_offset>)

property original\_offset → int

##### [` original_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride.image_bdd_info_t.original_size>)

property original\_size → int

##### [` payload `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride.image_bdd_info_t.payload>)

property payload → list[int]

##### [` relocations `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride.image_bdd_info_t.relocations>)

property relocations → list[[lief.PE.FunctionOverride.image\_bdd\_dynamic\_relocation\_t](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride.image_bdd_dynamic_relocation_t> "lief.PE.FunctionOverride.image_bdd_dynamic_relocation_t")]

##### [` version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverride.image_bdd_info_t.version>)

property version → int

## [FunctionOverrideInfo](<https://lief.re/doc/latest/formats/pe/python.html#functionoverrideinfo>)

### [` lief.PE.FunctionOverrideInfo `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverrideInfo>)

class lief.PE.FunctionOverrideInfo

Bases: `object`

#### [` base_reloc_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverrideInfo.base_reloc_size>)

property base\_reloc\_size → int

Size in bytes taken by BaseRelocs

#### [` bdd_offset `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverrideInfo.bdd_offset>)

property bdd\_offset → int

Offset into the BDD region

#### [` functions_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverrideInfo.functions_rva>)

property functions\_rva → list[int]

#### [` original_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverrideInfo.original_rva>)

property original\_rva → int

RVA of original function

#### [` relocations `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverrideInfo.relocations>)

property relocations → lief.PE.DynamicFixupGeneric.it\_relocations

#### [` rva_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.FunctionOverrideInfo.rva_size>)

property rva\_size → int

Size in bytes taken by RVAs

---

## [EnclaveConfiguration](<https://lief.re/doc/latest/formats/pe/python.html#enclaveconfiguration>)

### [` lief.PE.EnclaveConfiguration `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration>)

class lief.PE.EnclaveConfiguration

Bases: `object`

This class represents the enclave configuration

#### [` enclave_flags `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.enclave_flags>)

property enclave\_flags → int

A flag that indicates whether the image is suitable for use as the primary image in the enclave.

#### [` enclave_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.enclave_size>)

property enclave\_size → int

The expected virtual size of the private address range for the enclave, in bytes.

#### [` family_id `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.family_id>)

property family\_id → list[int]

The family identifier that the author of the enclave assigned to the enclave.

#### [` image_id `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.image_id>)

property image\_id → list[int]

The image identifier that the author of the enclave assigned to the enclave.

#### [` image_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.image_version>)

property image\_version → int

The version number that the author of the enclave assigned to the enclave.

#### [` import_entry_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.import_entry_size>)

property import\_entry\_size → int

The size of each image in the array of images that the [`import_list_rva`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.import_list_rva> "lief.PE.EnclaveConfiguration.import_list_rva") member points to.

#### [` import_list_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.import_list_rva>)

property import\_list\_rva → int

The RVA of the array of images that the enclave image may import, with identity information for each image.

#### [` imports `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.imports>)

property imports → lief.PE.EnclaveConfiguration.it\_imports

Iterator over the enclave’s imports

#### [` is_debuggable `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.is_debuggable>)

property is\_debuggable → bool

Whether this enclave can be debugged

#### [` min_required_config_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.min_required_config_size>)

property min\_required\_config\_size → int

The minimum size of the `IMAGE_ENCLAVE_CONFIG(32,64)` structure that the image loader must be able to process in order for the enclave to be usable.

This member allows an enclave to inform an earlier version of the image loader that the image loader can safely load the enclave and ignore optional members added to `IMAGE_ENCLAVE_CONFIG(32,64)` for later versions of the enclave. If the size of `IMAGE_ENCLAVE_CONFIG(32,64)` that the image loader can process is less than `MinimumRequiredConfigSize`, the enclave cannot be run securely.

If `MinimumRequiredConfigSize` is zero, the minimum size of the `IMAGE_ENCLAVE_CONFIG(32,64)` structure that the image loader must be able to process in order for the enclave to be usable is assumed to be the size of the structure through and including the `MinimumRequiredConfigSize` member.

#### [` nb_imports `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.nb_imports>)

property nb\_imports → int

The number of images in the array of images that the [`import_list_rva`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.import_list_rva> "lief.PE.EnclaveConfiguration.import_list_rva") member points to.

#### [` nb_threads `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.nb_threads>)

property nb\_threads → int

The maximum number of threads that can be created within the enclave.

#### [` policy_flags `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.policy_flags>)

property policy\_flags → int

A flag that indicates whether the enclave permits debugging.

#### [` security_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.security_version>)

property security\_version → int

The security version number that the author of the enclave assigned to the enclave.

#### [` size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveConfiguration.size>)

property size → int

The size of the `IMAGE_ENCLAVE_CONFIG64/IMAGE_ENCLAVE_CONFIG32` structure, in bytes.

---

## [EnclaveImport](<https://lief.re/doc/latest/formats/pe/python.html#enclaveimport>)

### [` lief.PE.EnclaveImport `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport>)

class lief.PE.EnclaveImport

Bases: `object`

Defines an entry in the array of images that an enclave can import.

#### [` TYPE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.TYPE>)

class TYPE(*\*values*)

Bases: `Enum`

##### [` AUTHOR_ID `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.TYPE.AUTHOR_ID>)

AUTHOR\_ID = 2

##### [` FAMILY_ID `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.TYPE.FAMILY_ID>)

FAMILY\_ID = 3

##### [` IMAGE_ID `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.TYPE.IMAGE_ID>)

IMAGE\_ID = 4

##### [` NONE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.TYPE.NONE>)

NONE = 0

##### [` UNIQUE_ID `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.TYPE.UNIQUE_ID>)

UNIQUE\_ID = 1

#### [` family_id `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.family_id>)

property family\_id → list[int]

The family identifier of the primary module for the enclave.

#### [` id `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.id>)

property id → list[int]

The unique identifier of the primary module for the enclave, if the [`type`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.type> "lief.PE.EnclaveImport.type") is [`UNIQUE_ID`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.TYPE.UNIQUE_ID> "lief.PE.EnclaveImport.TYPE.UNIQUE_ID"). Otherwise, the author identifier of the primary module for the enclave.

#### [` image_id `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.image_id>)

property image\_id → list[int]

The image identifier of the primary module for the enclave.

#### [` import_name `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.import_name>)

property import\_name → str

Resolved import name

#### [` import_name_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.import_name_rva>)

property import\_name\_rva → int

The relative virtual address of a NULL-terminated string that contains the same value found in the import directory for the image.

#### [` min_security_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.min_security_version>)

property min\_security\_version → int

The minimum enclave security version that each image must have for the image to be imported successfully. The image is rejected unless its enclave security version is equal to or greater than the minimum value in the import record. Set the value in the import record to zero to turn off the security version check.

#### [` reserved `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.reserved>)

property reserved → int

Reserved. Should be 0

#### [` type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.type>)

property type → [lief.PE.EnclaveImport.TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.EnclaveImport.TYPE> "lief.PE.EnclaveImport.TYPE")

The type of identifier of the image that must match the value in the import record.

---

## [Volatile Metadata](<https://lief.re/doc/latest/formats/pe/python.html#volatile-metadata>)

### [` lief.PE.VolatileMetadata `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VolatileMetadata>)

class lief.PE.VolatileMetadata

Bases: `object`

This class represents volatile metadata which can be enabled at link time with `/volatileMetadata`.

This metadata aims to improve performances when running x64 code on ARM64.

#### [` access_table `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VolatileMetadata.access_table>)

property access\_table → list[int]

#### [` access_table_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VolatileMetadata.access_table_rva>)

property access\_table\_rva → int

#### [` access_table_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VolatileMetadata.access_table_size>)

property access\_table\_size → int

#### [` info_range_rva `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VolatileMetadata.info_range_rva>)

property info\_range\_rva → int

#### [` info_ranges `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VolatileMetadata.info_ranges>)

property info\_ranges → lief.PE.VolatileMetadata.it\_info\_ranges\_t

#### [` info_ranges_size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VolatileMetadata.info_ranges_size>)

property info\_ranges\_size → int

#### [` max_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VolatileMetadata.max_version>)

property max\_version → int

#### [` min_version `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VolatileMetadata.min_version>)

property min\_version → int

#### [` range_t `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VolatileMetadata.range_t>)

class range\_t

Bases: `object`

##### [` end `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VolatileMetadata.range_t.end>)

property end → int

##### [` size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VolatileMetadata.range_t.size>)

property size → int

##### [` start `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VolatileMetadata.range_t.start>)

property start → int

#### [` size `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.VolatileMetadata.size>)

property size → int

---

## [Utilities](<https://lief.re/doc/latest/formats/pe/python.html#utilities>)

### [` lief.PE.check_layout `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.check_layout>)

lief.PE.check\_layout(*binary: [lief.PE.Binary](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary")*) → tuple[bool, str]

Check that the layout of the given binary is correct from the Windows loader perspective.

### [` lief.is_pelief.is_pe `](<https://lief.re/doc/latest/formats/pe/python.html#lief.is_pe>)

lief.is\_pe(*\*args*) → bool

**lief.is\_pe(*raw: collections.abc.Sequence[int]*) → bool**

Overloaded function.

1. `is_pe(file: Union[str | os.PathLike]) -> bool`

Check if the given file is a `PE`

2. `is_pe(raw: collections.abc.Sequence[int]) -> bool`

Check if the given raw data is a `PE`

### [` lief.PE.get_typelief.PE.get_type `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.get_type>)

lief.PE.get\_type(*\*args*) → [lief.PE.PE\_TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PE_TYPE> "lief.PE.PE_TYPE") | [lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief.lief_errors")

**lief.PE.get\_type(*raw: collections.abc.Sequence[int]*) → [lief.\_lief.PE.PE\_TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PE_TYPE> "lief._lief.PE.PE_TYPE") | [lief.\_lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief._lief.lief_errors")**

Overloaded function.

1. `get_type(file: Union[str | os.PathLike]) -> Union[lief._lief.PE.PE_TYPE, lief._lief.lief_errors]`

   > If the input file is a valid `PE`, return the [`PE_TYPE`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PE_TYPE> "lief.PE.PE_TYPE"). Otherwise, return a [`lief.lief_errors`](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief.lief_errors").
2. `get_type(raw: collections.abc.Sequence[int]) -> Union[lief._lief.PE.PE_TYPE, lief._lief.lief_errors]`

### [` lief.PE.get_imphash `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.get_imphash>)

lief.PE.get\_imphash(*binary: [lief.PE.Binary](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief.PE.Binary")*, *mode: [lief.PE.IMPHASH\_MODE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.IMPHASH_MODE> "lief.PE.IMPHASH_MODE")*) → str

Compute the hash of imported functions

Properties of the hash generated:

> - Order agnostic
> - Case agnostic
> - Ordinal (**in some extent**) agnostic

If one needs the same output as Virus Total (i.e. pefile), you can use [`PEFILE`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.IMPHASH_MODE.PEFILE> "lief.PE.IMPHASH_MODE.PEFILE") as second parameter.

> **Warning**
> 
> The algorithm used to compute the *imphash* value has some variations compared to Yara, pefile, VT implementation

> **See also**
> 
> [https://www.fireeye.com/blog/threat-research/2014/01/tracking-malware-import-hashing.html](<https://www.fireeye.com/blog/threat-research/2014/01/tracking-malware-import-hashing.html>)

### [` lief.PE.IMPHASH_MODE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.IMPHASH_MODE>)

class lief.PE.IMPHASH\_MODE(*\*values*)

Bases: `Enum`

Enum to define the behavior of [`get_imphash()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.get_imphash> "lief.PE.get_imphash")

#### [` DEFAULT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.IMPHASH_MODE.DEFAULT>)

DEFAULT = 0

#### [` LIEF `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.IMPHASH_MODE.LIEF>)

LIEF = 0

#### [` PEFILE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.IMPHASH_MODE.PEFILE>)

PEFILE = 1

#### [` VT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.IMPHASH_MODE.VT>)

VT = 1

### [` lief.PE.resolve_ordinals `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.resolve_ordinals>)

lief.PE.resolve\_ordinals(*imp: [lief.PE.Import](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import> "lief.PE.Import")*, *strict: bool*, *use\_std: bool*) → [lief.PE.Import](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import> "lief.PE.Import") | [lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief.lief_errors")

Take a [`Import`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Import> "lief.PE.Import") as input and try to resolve its ordinal imports.

If the `strict` boolean parameter is set, a [`lief.lief_errors.not_found`](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.not_found> "lief.lief_errors.not_found") error is returned upon the first non-resolvable ordinal.

---

## [Enums](<https://lief.re/doc/latest/formats/pe/python.html#enums>)

### [PE\_TYPE](<https://lief.re/doc/latest/formats/pe/python.html#pe-type>)

#### [` lief.PE.PE_TYPE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PE_TYPE>)

class lief.PE.PE\_TYPE(*\*values*)

Bases: `Enum`

##### [` PE32 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PE_TYPE.PE32>)

PE32 = 267

##### [` PE32_PLUS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PE_TYPE.PE32_PLUS>)

PE32\_PLUS = 523

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PE_TYPE.from_value>)

from\_value(*arg: int*) → [lief.PE.PE\_TYPE](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PE_TYPE> "lief.PE.PE_TYPE") = &lt;nanobind.nb\_func object&gt;

---

### [RESOURCE\_LANGS](<https://lief.re/doc/latest/formats/pe/python.html#resource-langs>)

#### [` lief.PE.RESOURCE_LANGS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS>)

class lief.PE.RESOURCE\_LANGS(*\*values*)

Bases: `Enum`

##### [` AFRIKAANS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.AFRIKAANS>)

AFRIKAANS = 54

##### [` ALBANIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.ALBANIAN>)

ALBANIAN = 28

##### [` ARABIC `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.ARABIC>)

ARABIC = 1

##### [` ARMENIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.ARMENIAN>)

ARMENIAN = 43

##### [` ASSAMESE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.ASSAMESE>)

ASSAMESE = 77

##### [` AZERI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.AZERI>)

AZERI = 44

##### [` BANGLA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.BANGLA>)

BANGLA = 69

##### [` BASQUE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.BASQUE>)

BASQUE = 45

##### [` BELARUSIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.BELARUSIAN>)

BELARUSIAN = 35

##### [` BOSNIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.BOSNIAN>)

BOSNIAN = 26

##### [` BRETON `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.BRETON>)

BRETON = 147

##### [` BULGARIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.BULGARIAN>)

BULGARIAN = 2

##### [` CATALAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.CATALAN>)

CATALAN = 3

##### [` CHINESE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.CHINESE>)

CHINESE = 4

##### [` CORNISH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.CORNISH>)

CORNISH = 145

##### [` CROATIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.CROATIAN>)

CROATIAN = 26

##### [` CZECH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.CZECH>)

CZECH = 5

##### [` DANISH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.DANISH>)

DANISH = 6

##### [` DIVEHI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.DIVEHI>)

DIVEHI = 101

##### [` DUTCH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.DUTCH>)

DUTCH = 19

##### [` ENGLISH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.ENGLISH>)

ENGLISH = 9

##### [` ESPERANTO `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.ESPERANTO>)

ESPERANTO = 143

##### [` ESTONIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.ESTONIAN>)

ESTONIAN = 37

##### [` FAEROESE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.FAEROESE>)

FAEROESE = 56

##### [` FARSI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.FARSI>)

FARSI = 41

##### [` FINNISH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.FINNISH>)

FINNISH = 11

##### [` FRENCH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.FRENCH>)

FRENCH = 12

##### [` GAELIC `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.GAELIC>)

GAELIC = 60

##### [` GALICIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.GALICIAN>)

GALICIAN = 86

##### [` GEORGIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.GEORGIAN>)

GEORGIAN = 55

##### [` GERMAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.GERMAN>)

GERMAN = 7

##### [` GREEK `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.GREEK>)

GREEK = 8

##### [` GUJARATI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.GUJARATI>)

GUJARATI = 71

##### [` HEBREW `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.HEBREW>)

HEBREW = 13

##### [` HINDI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.HINDI>)

HINDI = 57

##### [` HUNGARIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.HUNGARIAN>)

HUNGARIAN = 14

##### [` ICELANDIC `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.ICELANDIC>)

ICELANDIC = 15

##### [` INDONESIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.INDONESIAN>)

INDONESIAN = 33

##### [` INUKTITUT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.INUKTITUT>)

INUKTITUT = 93

##### [` INVARIANT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.INVARIANT>)

INVARIANT = 127

##### [` IRISH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.IRISH>)

IRISH = 60

##### [` ITALIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.ITALIAN>)

ITALIAN = 16

##### [` JAPANESE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.JAPANESE>)

JAPANESE = 17

##### [` KANNADA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.KANNADA>)

KANNADA = 75

##### [` KASHMIRI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.KASHMIRI>)

KASHMIRI = 96

##### [` KAZAK `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.KAZAK>)

KAZAK = 63

##### [` KONKANI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.KONKANI>)

KONKANI = 87

##### [` KOREAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.KOREAN>)

KOREAN = 18

##### [` KYRGYZ `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.KYRGYZ>)

KYRGYZ = 64

##### [` LATVIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.LATVIAN>)

LATVIAN = 38

##### [` LITHUANIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.LITHUANIAN>)

LITHUANIAN = 39

##### [` LOWER_SORBIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.LOWER_SORBIAN>)

LOWER\_SORBIAN = 46

##### [` MACEDONIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.MACEDONIAN>)

MACEDONIAN = 47

##### [` MALAY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.MALAY>)

MALAY = 62

##### [` MALAYALAM `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.MALAYALAM>)

MALAYALAM = 76

##### [` MALTESE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.MALTESE>)

MALTESE = 58

##### [` MANIPURI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.MANIPURI>)

MANIPURI = 88

##### [` MAORI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.MAORI>)

MAORI = 40

##### [` MARATHI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.MARATHI>)

MARATHI = 78

##### [` MONGOLIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.MONGOLIAN>)

MONGOLIAN = 80

##### [` NEPALI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.NEPALI>)

NEPALI = 97

##### [` NEUTRAL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.NEUTRAL>)

NEUTRAL = 0

##### [` NORWEGIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.NORWEGIAN>)

NORWEGIAN = 20

##### [` ORIYA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.ORIYA>)

ORIYA = 72

##### [` POLISH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.POLISH>)

POLISH = 21

##### [` PORTUGUESE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.PORTUGUESE>)

PORTUGUESE = 22

##### [` PULAR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.PULAR>)

PULAR = 103

##### [` PUNJABI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.PUNJABI>)

PUNJABI = 70

##### [` QUECHUA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.QUECHUA>)

QUECHUA = 107

##### [` RHAETO_ROMANCE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.RHAETO_ROMANCE>)

RHAETO\_ROMANCE = 23

##### [` ROMANIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.ROMANIAN>)

ROMANIAN = 24

##### [` RUSSIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.RUSSIAN>)

RUSSIAN = 25

##### [` SAMI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.SAMI>)

SAMI = 59

##### [` SANSKRIT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.SANSKRIT>)

SANSKRIT = 79

##### [` SERBIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.SERBIAN>)

SERBIAN = 26

##### [` SINDHI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.SINDHI>)

SINDHI = 89

##### [` SLOVAK `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.SLOVAK>)

SLOVAK = 27

##### [` SLOVENIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.SLOVENIAN>)

SLOVENIAN = 36

##### [` SORBIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.SORBIAN>)

SORBIAN = 46

##### [` SPANISH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.SPANISH>)

SPANISH = 10

##### [` SUTU `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.SUTU>)

SUTU = 48

##### [` SWAHILI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.SWAHILI>)

SWAHILI = 65

##### [` SWEDISH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.SWEDISH>)

SWEDISH = 29

##### [` SYRIAC `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.SYRIAC>)

SYRIAC = 90

##### [` TAMAZIGHT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.TAMAZIGHT>)

TAMAZIGHT = 95

##### [` TAMIL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.TAMIL>)

TAMIL = 73

##### [` TATAR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.TATAR>)

TATAR = 68

##### [` TELUGU `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.TELUGU>)

TELUGU = 74

##### [` THAI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.THAI>)

THAI = 30

##### [` TIGRINYA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.TIGRINYA>)

TIGRINYA = 115

##### [` TSONGA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.TSONGA>)

TSONGA = 49

##### [` TSWANA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.TSWANA>)

TSWANA = 50

##### [` TURKISH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.TURKISH>)

TURKISH = 31

##### [` UKRAINIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.UKRAINIAN>)

UKRAINIAN = 34

##### [` URDU `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.URDU>)

URDU = 32

##### [` UZBEK `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.UZBEK>)

UZBEK = 67

##### [` VALENCIAN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.VALENCIAN>)

VALENCIAN = 3

##### [` VENDA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.VENDA>)

VENDA = 51

##### [` VIETNAMESE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.VIETNAMESE>)

VIETNAMESE = 42

##### [` WALON `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.WALON>)

WALON = 144

##### [` WELSH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.WELSH>)

WELSH = 146

##### [` XHOSA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.XHOSA>)

XHOSA = 52

##### [` ZULU `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.ZULU>)

ZULU = 53

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS.from_value>)

from\_value(*arg: int*) → [lief.PE.RESOURCE\_LANGS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.RESOURCE_LANGS> "lief.PE.RESOURCE_LANGS") = &lt;nanobind.nb\_func object&gt;

### [ACCELERATOR\_CODES](<https://lief.re/doc/latest/formats/pe/python.html#accelerator-codes>)

#### [` lief.PE.ACCELERATOR_CODES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES>)

class lief.PE.ACCELERATOR\_CODES(*\*values*)

Bases: `Enum`

##### [` A `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.A>)

A = 65

##### [` ACCEPT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.ACCEPT>)

ACCEPT = 30

##### [` ADD `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.ADD>)

ADD = 107

##### [` APPS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.APPS>)

APPS = 93

##### [` ATTN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.ATTN>)

ATTN = 246

##### [` B `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.B>)

B = 66

##### [` BACK `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.BACK>)

BACK = 8

##### [` BROWSER_BACK `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.BROWSER_BACK>)

BROWSER\_BACK = 166

##### [` BROWSER_FAVORITES `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.BROWSER_FAVORITES>)

BROWSER\_FAVORITES = 171

##### [` BROWSER_FORWARD `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.BROWSER_FORWARD>)

BROWSER\_FORWARD = 167

##### [` BROWSER_HOME `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.BROWSER_HOME>)

BROWSER\_HOME = 172

##### [` BROWSER_REFRESH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.BROWSER_REFRESH>)

BROWSER\_REFRESH = 168

##### [` BROWSER_SEARCH `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.BROWSER_SEARCH>)

BROWSER\_SEARCH = 170

##### [` BROWSER_STOP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.BROWSER_STOP>)

BROWSER\_STOP = 169

##### [` C `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.C>)

C = 67

##### [` CANCEL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.CANCEL>)

CANCEL = 3

##### [` CAPITAL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.CAPITAL>)

CAPITAL = 20

##### [` CLEAR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.CLEAR>)

CLEAR = 12

##### [` CONTROL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.CONTROL>)

CONTROL = 17

##### [` CONVERT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.CONVERT>)

CONVERT = 28

##### [` CRSEL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.CRSEL>)

CRSEL = 247

##### [` D `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.D>)

D = 68

##### [` DECIMAL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.DECIMAL>)

DECIMAL = 110

##### [` DELETE_K `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.DELETE_K>)

DELETE\_K = 46

##### [` DIVIDE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.DIVIDE>)

DIVIDE = 111

##### [` DOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.DOWN>)

DOWN = 40

##### [` E `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.E>)

E = 69

##### [` END `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.END>)

END = 35

##### [` EREOF `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.EREOF>)

EREOF = 249

##### [` ESCAPE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.ESCAPE>)

ESCAPE = 27

##### [` EXECUTE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.EXECUTE>)

EXECUTE = 43

##### [` EXSEL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.EXSEL>)

EXSEL = 248

##### [` F `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F>)

F = 70

##### [` F1 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F1>)

F1 = 112

##### [` F10 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F10>)

F10 = 121

##### [` F11 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F11>)

F11 = 122

##### [` F12 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F12>)

F12 = 123

##### [` F13 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F13>)

F13 = 124

##### [` F14 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F14>)

F14 = 125

##### [` F15 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F15>)

F15 = 126

##### [` F16 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F16>)

F16 = 127

##### [` F17 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F17>)

F17 = 128

##### [` F18 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F18>)

F18 = 129

##### [` F19 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F19>)

F19 = 130

##### [` F2 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F2>)

F2 = 113

##### [` F20 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F20>)

F20 = 131

##### [` F21 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F21>)

F21 = 132

##### [` F22 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F22>)

F22 = 133

##### [` F23 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F23>)

F23 = 134

##### [` F24 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F24>)

F24 = 135

##### [` F3 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F3>)

F3 = 114

##### [` F4 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F4>)

F4 = 115

##### [` F5 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F5>)

F5 = 116

##### [` F6 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F6>)

F6 = 117

##### [` F7 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F7>)

F7 = 118

##### [` F8 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F8>)

F8 = 119

##### [` F9 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.F9>)

F9 = 120

##### [` FINAL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.FINAL>)

FINAL = 24

##### [` G `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.G>)

G = 71

##### [` H `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.H>)

H = 72

##### [` HELP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.HELP>)

HELP = 47

##### [` HOME `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.HOME>)

HOME = 36

##### [` I `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.I>)

I = 73

##### [` IME_OFF `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.IME_OFF>)

IME\_OFF = 26

##### [` IME_ON `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.IME_ON>)

IME\_ON = 22

##### [` INSERT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.INSERT>)

INSERT = 45

##### [` J `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.J>)

J = 74

##### [` JUNJA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.JUNJA>)

JUNJA = 23

##### [` K `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.K>)

K = 75

##### [` KANA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.KANA>)

KANA = 21

##### [` KANJI `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.KANJI>)

KANJI = 25

##### [` L `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.L>)

L = 76

##### [` LAUNCH_APP1 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.LAUNCH_APP1>)

LAUNCH\_APP1 = 182

##### [` LAUNCH_APP2 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.LAUNCH_APP2>)

LAUNCH\_APP2 = 183

##### [` LAUNCH_MAIL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.LAUNCH_MAIL>)

LAUNCH\_MAIL = 180

##### [` LAUNCH_MEDIA_SELECT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.LAUNCH_MEDIA_SELECT>)

LAUNCH\_MEDIA\_SELECT = 181

##### [` LBUTTON `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.LBUTTON>)

LBUTTON = 1

##### [` LCONTROL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.LCONTROL>)

LCONTROL = 162

##### [` LEFT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.LEFT>)

LEFT = 37

##### [` LMENU `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.LMENU>)

LMENU = 164

##### [` LSHIFT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.LSHIFT>)

LSHIFT = 160

##### [` LWIN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.LWIN>)

LWIN = 91

##### [` M `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.M>)

M = 77

##### [` MBUTTON `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.MBUTTON>)

MBUTTON = 4

##### [` MEDIA_NEXT_TRACK `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.MEDIA_NEXT_TRACK>)

MEDIA\_NEXT\_TRACK = 176

##### [` MEDIA_PLAY_PAUSE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.MEDIA_PLAY_PAUSE>)

MEDIA\_PLAY\_PAUSE = 179

##### [` MEDIA_PREV_TRACK `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.MEDIA_PREV_TRACK>)

MEDIA\_PREV\_TRACK = 177

##### [` MEDIA_STOP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.MEDIA_STOP>)

MEDIA\_STOP = 178

##### [` MENU `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.MENU>)

MENU = 18

##### [` MODECHANGE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.MODECHANGE>)

MODECHANGE = 31

##### [` MULTIPLY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.MULTIPLY>)

MULTIPLY = 106

##### [` N `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.N>)

N = 78

##### [` NEXT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NEXT>)

NEXT = 34

##### [` NONAME `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NONAME>)

NONAME = 252

##### [` NONCONVERT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NONCONVERT>)

NONCONVERT = 29

##### [` NUMLOCK `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUMLOCK>)

NUMLOCK = 144

##### [` NUMPAD0 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUMPAD0>)

NUMPAD0 = 96

##### [` NUMPAD1 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUMPAD1>)

NUMPAD1 = 97

##### [` NUMPAD2 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUMPAD2>)

NUMPAD2 = 98

##### [` NUMPAD3 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUMPAD3>)

NUMPAD3 = 99

##### [` NUMPAD4 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUMPAD4>)

NUMPAD4 = 100

##### [` NUMPAD5 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUMPAD5>)

NUMPAD5 = 101

##### [` NUMPAD6 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUMPAD6>)

NUMPAD6 = 102

##### [` NUMPAD7 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUMPAD7>)

NUMPAD7 = 103

##### [` NUMPAD8 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUMPAD8>)

NUMPAD8 = 104

##### [` NUMPAD9 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUMPAD9>)

NUMPAD9 = 105

##### [` NUM_0 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUM_0>)

NUM\_0 = 48

##### [` NUM_1 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUM_1>)

NUM\_1 = 49

##### [` NUM_2 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUM_2>)

NUM\_2 = 50

##### [` NUM_3 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUM_3>)

NUM\_3 = 51

##### [` NUM_4 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUM_4>)

NUM\_4 = 52

##### [` NUM_5 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUM_5>)

NUM\_5 = 53

##### [` NUM_6 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUM_6>)

NUM\_6 = 54

##### [` NUM_7 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUM_7>)

NUM\_7 = 55

##### [` NUM_8 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUM_8>)

NUM\_8 = 56

##### [` NUM_9 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.NUM_9>)

NUM\_9 = 57

##### [` O `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.O>)

O = 79

##### [` OEM_1 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.OEM_1>)

OEM\_1 = 186

##### [` OEM_102 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.OEM_102>)

OEM\_102 = 226

##### [` OEM_2 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.OEM_2>)

OEM\_2 = 191

##### [` OEM_4 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.OEM_4>)

OEM\_4 = 219

##### [` OEM_5 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.OEM_5>)

OEM\_5 = 220

##### [` OEM_6 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.OEM_6>)

OEM\_6 = 221

##### [` OEM_7 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.OEM_7>)

OEM\_7 = 222

##### [` OEM_8 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.OEM_8>)

OEM\_8 = 223

##### [` OEM_CLEAR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.OEM_CLEAR>)

OEM\_CLEAR = 254

##### [` OEM_COMMA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.OEM_COMMA>)

OEM\_COMMA = 188

##### [` OEM_MINUS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.OEM_MINUS>)

OEM\_MINUS = 189

##### [` OEM_PERIOD `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.OEM_PERIOD>)

OEM\_PERIOD = 190

##### [` OEM_PLUS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.OEM_PLUS>)

OEM\_PLUS = 187

##### [` P `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.P>)

P = 80

##### [` PA1 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.PA1>)

PA1 = 253

##### [` PACKET `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.PACKET>)

PACKET = 231

##### [` PAUSE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.PAUSE>)

PAUSE = 19

##### [` PLAY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.PLAY>)

PLAY = 250

##### [` PRINT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.PRINT>)

PRINT = 42

##### [` PRIOR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.PRIOR>)

PRIOR = 33

##### [` PROCESSKEY `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.PROCESSKEY>)

PROCESSKEY = 229

##### [` Q `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.Q>)

Q = 81

##### [` R `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.R>)

R = 82

##### [` RBUTTON `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.RBUTTON>)

RBUTTON = 2

##### [` RCONTROL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.RCONTROL>)

RCONTROL = 163

##### [` RETURN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.RETURN>)

RETURN = 13

##### [` RIGHT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.RIGHT>)

RIGHT = 39

##### [` RMENU `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.RMENU>)

RMENU = 165

##### [` RSHIFT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.RSHIFT>)

RSHIFT = 161

##### [` RWIN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.RWIN>)

RWIN = 92

##### [` S `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.S>)

S = 83

##### [` SCROLL `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.SCROLL>)

SCROLL = 145

##### [` SELECT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.SELECT>)

SELECT = 41

##### [` SEPARATOR `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.SEPARATOR>)

SEPARATOR = 108

##### [` SHIFT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.SHIFT>)

SHIFT = 16

##### [` SLEEP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.SLEEP>)

SLEEP = 95

##### [` SNAPSHOT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.SNAPSHOT>)

SNAPSHOT = 44

##### [` SPACE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.SPACE>)

SPACE = 32

##### [` SUBTRACT `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.SUBTRACT>)

SUBTRACT = 109

##### [` T `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.T>)

T = 84

##### [` TAB `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.TAB>)

TAB = 9

##### [` U `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.U>)

U = 85

##### [` UP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.UP>)

UP = 38

##### [` V `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.V>)

V = 86

##### [` VOLUME_DOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.VOLUME_DOWN>)

VOLUME\_DOWN = 174

##### [` VOLUME_MUTE `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.VOLUME_MUTE>)

VOLUME\_MUTE = 173

##### [` VOLUME_UP `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.VOLUME_UP>)

VOLUME\_UP = 175

##### [` W `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.W>)

W = 87

##### [` X `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.X>)

X = 88

##### [` XBUTTON1_K `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.XBUTTON1_K>)

XBUTTON1\_K = 5

##### [` XBUTTON2_K `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.XBUTTON2_K>)

XBUTTON2\_K = 6

##### [` Y `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.Y>)

Y = 89

##### [` Z `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.Z>)

Z = 90

##### [` ZOOM `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.ZOOM>)

ZOOM = 251

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES.from_value>)

from\_value(*arg: int*) → [lief.PE.ACCELERATOR\_CODES](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ACCELERATOR_CODES> "lief.PE.ACCELERATOR_CODES") = &lt;nanobind.nb\_func object&gt;

---

### [ALGORITHMS](<https://lief.re/doc/latest/formats/pe/python.html#algorithms>)

#### [` lief.PE.ALGORITHMS `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS>)

class lief.PE.ALGORITHMS(*\*values*)

Bases: `Enum`

##### [` EC `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.EC>)

EC = 9

##### [` MD2 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.MD2>)

MD2 = 7

##### [` MD4 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.MD4>)

MD4 = 6

##### [` MD5 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.MD5>)

MD5 = 5

##### [` MD5_RSA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.MD5_RSA>)

MD5\_RSA = 10

##### [` RSA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.RSA>)

RSA = 8

##### [` SHA1_DSA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.SHA1_DSA>)

SHA1\_DSA = 11

##### [` SHA1_ECDSA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.SHA1_ECDSA>)

SHA1\_ECDSA = 16

##### [` SHA1_RSA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.SHA1_RSA>)

SHA1\_RSA = 12

##### [` SHA_1 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.SHA_1>)

SHA\_1 = 4

##### [` SHA_256 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.SHA_256>)

SHA\_256 = 3

##### [` SHA_256_ECDSA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.SHA_256_ECDSA>)

SHA\_256\_ECDSA = 17

##### [` SHA_256_RSA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.SHA_256_RSA>)

SHA\_256\_RSA = 13

##### [` SHA_384 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.SHA_384>)

SHA\_384 = 2

##### [` SHA_384_ECDSA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.SHA_384_ECDSA>)

SHA\_384\_ECDSA = 18

##### [` SHA_384_RSA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.SHA_384_RSA>)

SHA\_384\_RSA = 14

##### [` SHA_512 `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.SHA_512>)

SHA\_512 = 1

##### [` SHA_512_ECDSA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.SHA_512_ECDSA>)

SHA\_512\_ECDSA = 19

##### [` SHA_512_RSA `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.SHA_512_RSA>)

SHA\_512\_RSA = 15

##### [` UNKNOWN `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.UNKNOWN>)

UNKNOWN = 0

##### [` from_value `](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS.from_value>)

from\_value(*arg: int*) → [lief.PE.ALGORITHMS](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ALGORITHMS> "lief.PE.ALGORITHMS") = &lt;nanobind.nb\_func object&gt;
