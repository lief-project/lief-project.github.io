---
documentID: "82f4e7d34cddf7c3de706983e32deb4f87f889f0ee3d53e7f094b51d78362aad"
docname: "runtime/components/modules"
title: "Modules - Runtime - LIEF Documentation"
description: "Enumerate loaded modules, resolve symbols, parse files and in-memory images, and interpret live addresses with the LIEF runtime API."
canonical: "https://lief.re/doc/latest/runtime/components/modules.html"
markdownURL: "https://lief.re/doc/latest/runtime/components/modules.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "b3020c5f9e9d259f7cd89666fc4651676d52786eafc0875f70f2ee830b5ef487"
---

# [Modules](<https://lief.re/doc/latest/runtime/components/modules.html#modules>)

The  `lief.runtime.Module` ( [`lief::runtime::module::Module`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/module/trait.Module.html>) ;  [`lief.runtime.Module`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module>) ;  [`LIEF::runtime::Module`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE>) ) interface exposes the different modules (executables and shared libraries) that are loaded in the current process. It is a cross-platform API and is extended on each supported platform with OS-specific helpers (e.g.  `lief.runtime.linux.Module` ( [`lief::runtime::linux::Module`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/linux/struct.Module.html>) ;  [`lief.runtime.linux.Module`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Module>) ;  [`LIEF::runtime::Linux::Module`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux6ModuleE>) ),  `lief.runtime.windows.Module` ( [`lief::runtime::windows::Module`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/windows/struct.Module.html>) ;  [`lief.runtime.windows.Module`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Module>) ;  [`LIEF::runtime::windows::Module`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows6ModuleE>) ),  `lief.runtime.osx.Module` ( [`lief::runtime::osx::Module`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/osx/struct.Module.html>) ;  [`lief.runtime.osx.Module`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Module>) ;  [`LIEF::runtime::osx::Module`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx6ModuleE>) )).

## [Enumerate and locate modules](<https://lief.re/doc/latest/runtime/components/modules.html#enumerate-and-locate-modules>)

The following Linux example enumerates the loaded modules, prints their attributes, and selects `libc` for later inspection. The enumeration API is shared by all supported platforms:

**Python**

```python
for mod in lief.runtime.modules():
    print(mod)
    # Look for the libc
    if mod.name.startswith("libc.so"):
        print(
            f"libc.so found: {mod.path} ([{mod.imagebase:#010x}, {mod.end:#010x}])"
        )
        assert isinstance(mod, lief.runtime.linux.Module)
        libc = mod
```

**C++**

```cpp
for (const LIEF::runtime::Module& mod : LIEF::runtime::modules()) {
  info("{}", mod.to_string());
  // Look for the libc
  if (mod.name().ends_with("libc.so")) {
    info("libc.so found: {} ([{}, {}])", mod.path(), hex(mod.imagebase()),
         hex(mod.end()));
    libc.reset(mod.clone().release()->as<LIEF::runtime::Linux::Module>());
  }
}
```

**Rust**

```rust
for module in runtime::modules() {
    println!(
        "{} ({:#010x} - {:#010x})",
        module.name(),
        module.imagebase(),
        module.end()
    );
    if let runtime::Modules::Linux(linux_mod) = module {
        if linux_mod.name().starts_with("libc.so") {
            println!(
                "libc.so found: {} ([{:#010x}, {:#010x}])",
                linux_mod.path(),
                linux_mod.imagebase(),
                linux_mod.end()
            );
            libc = Some(linux_mod);
        }
    }
}
```

For a direct lookup, use  `lief.runtime.module_from_name()` ( [`lief::runtime::module_from_name`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/fn.module_from_name.html>) ;  [`lief.runtime.module_from_name()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.module_from_name>) ;  [`LIEF::runtime::module_from_name()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime16module_from_nameERKNSt6stringE>) ),  `lief.runtime.module_from_path()` ( [`lief::runtime::module_from_path`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/fn.module_from_path.html>) ;  [`lief.runtime.module_from_path()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.module_from_path>) ;  [`LIEF::runtime::module_from_path()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime16module_from_pathERKNSt6stringE>) ), or  `lief.runtime.module_from_addr()` ( [`lief::runtime::module_from_addr`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/fn.module_from_addr.html>) ;  [`lief.runtime.module_from_addr()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.module_from_addr>) ;  [`LIEF::runtime::module_from_addr()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime16module_from_addrE9uintptr_t>) ). Name and path lookups use exact matches. Address lookup expects an absolute address in the current process.

The platform-specific module interfaces let you parse an image from its path on disk or from its current mapping:

| Operation | Result |
| --- | --- |
| Parse from the module’s path | The executable file as stored on disk, using its file layout |
| Parse from memory | The loaded image, which may contain relocations and runtime changes |
| `lief.runtime.Module.dump()` ( [`lief::runtime::module::Module::dump`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/module/trait.Module.html#method.dump>) ;  [`lief.runtime.Module.dump()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module.dump>) ;  [`LIEF::runtime::Module::dump()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module4dumpEv>) ) | Raw bytes from the module’s mapped address range |

Parsing produces a LIEF binary object for analysis. Modifying that object does not automatically patch the running module. You should use the [memory API](<https://lief.re/doc/latest/runtime/components/memory.html#runtime-memory>) when you intend to write to the process’s memory.

A raw memory dump is not necessarily a valid on-disk executable. For offline analysis, use the dump-parsing APIs documented for [ELF](<https://lief.re/doc/latest/formats/elf/index.html#format-elf-dump>), [PE](<https://lief.re/doc/latest/formats/pe/index.html#format-pe-dump>), and [Mach-O](<https://lief.re/doc/latest/formats/macho/index.html#format-macho-dump>).

## [Linux](<https://lief.re/doc/latest/runtime/components/modules.html#linux>)

On Linux,  `lief.runtime.linux.Module` ( [`lief::runtime::linux::Module`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/linux/struct.Module.html>) ;  [`lief.runtime.linux.Module`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Module>) ;  [`LIEF::runtime::Linux::Module`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux6ModuleE>) ) extends the generic interface with platform-specific helpers. In particular, it exposes the  `lief.runtime.linux.dlopen()` ( [`lief::runtime::linux::dlopen`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/linux/fn.dlopen.html>) ;  [`lief.runtime.linux.dlopen()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.dlopen>) ;  [`LIEF::runtime::Linux::dlopen()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux6dlopenERKNSt6stringE>) ) &amp;  `lief.runtime.linux.Module.dlsym()` ( [`lief::runtime::linux::Module::dlsym`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/linux/struct.Module.html#method.dlsym>) ;  [`lief.runtime.linux.Module.dlsym()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Module.dlsym>) ;  [`LIEF::runtime::Linux::Module::dlsym()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime5Linux6Module5dlsymERKNSt6stringE>) ) and can parse the module directly from its path on disk or from its in-memory representation. The following snippet demonstrates these operations on the `libc` module:

**Python**

```python
print(f"libc path: {libc.path}")
if __cxa_finalize := libc.dlsym("__cxa_finalize"):
    __cxa_finalize_addr = lief.to_int(__cxa_finalize)
    print(f"{libc.name}!__cxa_finalize: {__cxa_finalize_addr:#010x}")

if malloc := libc.dlsym("malloc"):
    malloc_addr = lief.to_int(malloc)
    # lief.to_int is used to convert an opaque pointer (void*) into a
    # regular Python int
    print(f"{libc.name}!malloc: {malloc_addr:#010x}")

    # With LIEF extended, we can disassemble the function from its
    # absolute memory address:
    if lief.__extended__:
        for inst in islice(lief.runtime.disassemble(malloc_addr), 4):
            print("   ", inst)

# This parses the ELF from its path on the disk
if (elf_on_disk := libc.parse_from_path()) is not None and (
    __cxa_finalize := elf_on_disk.get_symbol("__cxa_finalize")
) is not None:
    print(f"__cxa_finalize: {__cxa_finalize.value:#010x}")

# This code loads 'librt.so' and wrap the dlopen handler in a Module.
if librt := lief.runtime.linux.dlopen("librt.so.1"):
    print(
        f"librt loaded: {librt.path} (dlopen handler={lief.to_int(librt.handle):#010x})"
    )

    # Parse the ELF directly from memory.
    if librt_mem := librt.parse_from_memory():
        # This code looks for the relocation associated with the
        # **imported** symbol `__cxa_finalize` that is defined in the libc.
        # The relocation holds the address where the function is resolved.
        # Therefore, by reading this relocation address we can access the
        # resolved address of `__cxa_finalize`. This address should match
        # the value previously returned by dlsym
        __cxa_finalize_reloc = next(
            (
                reloc
                for reloc in librt_mem.relocations
                if reloc.symbol is not None
                and reloc.symbol.name == "__cxa_finalize"
            ),
            None,
        )
        if __cxa_finalize_reloc is not None:
            abs_reloc_addr = librt.imagebase + __cxa_finalize_reloc.address
            # We assume a 64-bit architecture
            __cxa_finalize_addr = lief.runtime.Memory.read_u64(abs_reloc_addr)
            print(
                f"{librt.name} -> {abs_reloc_addr:#010x} -> {__cxa_finalize_addr:#010x}"
            )
```

**C++**

```cpp
info("libc path: {}", libc->path());
if (void* cxa_finalize = libc->dlsym("__cxa_finalize")) {
  info("{}!__cxa_finalize: {}", libc->name(),
       hex(reinterpret_cast<uintptr_t>(cxa_finalize)));
}

if (void* malloc_fn = libc->dlsym("malloc")) {
  auto malloc_ptr = reinterpret_cast<uintptr_t>(malloc_fn);
  info("{}!malloc: {}", libc->name(),
       hex(reinterpret_cast<uintptr_t>(malloc_fn)));
  auto malloc_instructions = LIEF::runtime::disassemble(malloc_ptr);

  // Dump the first instructions of malloc
  for (const LIEF::assembly::Instruction& inst :
       malloc_instructions | std::views::take(4))
  {
    info("   {}", inst.to_string());
  }
}

// This parses the ELF from its path on the disk
if (std::unique_ptr<LIEF::ELF::Binary> elf_on_disk = libc->parse_from_path()) {
  if (const LIEF::Symbol* sym = elf_on_disk->get_symbol("__cxa_finalize")) {
    info("__cxa_finalize: {}", hex(sym->value()));
  }
}

// This code loads 'librt.so' and wraps the dlopen handle in a Module.
if (std::unique_ptr<LIEF::runtime::Linux::Module> librt =
        LIEF::runtime::Linux::dlopen("librt.so.1"))
{
  info("librt loaded: {} (dlopen handle={})", librt->path(),
       hex(reinterpret_cast<uintptr_t>(librt->handle())));

  // Alternately you could do this:
  {
    void* handle = dlopen("librt.so.1", RTLD_NOW);
    auto librt_alt = LIEF::runtime::Linux::Module::from_handle(handle);
  }

  // Parse the ELF directly from memory.
  if (std::unique_ptr<LIEF::ELF::Binary> librt_mem = librt->parse_from_memory())
  {
    // Look for the relocation associated with the **imported** symbol
    // `__cxa_finalize` that is defined in the libc. The relocation holds
    // the address where the function is resolved. Reading this address
    // gives back the same value previously returned by dlsym.
    for (const auto& reloc : librt_mem->relocations()) {
      const auto* sym = reloc.symbol();
      if (sym == nullptr || sym->name() != "__cxa_finalize") {
        continue;
      }
      uintptr_t abs_reloc_addr = librt->imagebase() + reloc.address();
      auto resolved = LIEF::runtime::Memory::read<uint64_t>(abs_reloc_addr);
      info("{} -> {} -> {}", librt->name(), hex(abs_reloc_addr), hex(resolved));
      break;
    }
  }
}
```

**Rust**

```rust
println!("libc path: {}", libc.path());
let cxa_finalize = libc.dlsym("__cxa_finalize".to_string());
if !cxa_finalize.is_null() {
    println!(
        "{}!__cxa_finalize: {:#010x}",
        libc.name(),
        cxa_finalize as usize
    );
}

let malloc = libc.dlsym("malloc".to_string());
if !malloc.is_null() {
    println!("{}!malloc: {:#010x}", libc.name(), malloc as usize);
}

// Parse the ELF from its path on the disk
if let Some(elf_on_disk) = libc.parse_from_path() {
    for sym in elf_on_disk.dynamic_symbols() {
        if sym.name() == "__cxa_finalize" {
            println!("__cxa_finalize: {:#010x}", sym.value());
            break;
        }
    }
}

// Load 'librt.so' and wrap the dlopen handle in a Module.
if let Some(librt) = runtime::linux::dlopen("librt.so.1") {
    println!(
        "librt loaded: {} (dlopen handle={:#010x})",
        librt.path(),
        librt.handle() as usize
    );

    // Parse the ELF directly from memory.
    if let Some(librt_mem) = librt.parse_from_memory() {
        // Find the relocation for the imported symbol `__cxa_finalize`
        // defined in libc. Reading the relocation address returns the
        // resolved address, which should match what dlsym returned.
        for reloc in librt_mem.relocations() {
            let sym = match reloc.symbol() {
                Some(s) => s,
                None => continue,
            };
            if sym.name() != "__cxa_finalize" {
                continue;
            }
            let abs_reloc_addr = librt.imagebase() + reloc.address();
            // Assume a 64-bit architecture
            let resolved: u64 = unsafe { runtime::Memory::read(abs_reloc_addr) };
            println!(
                "{} -> {:#010x} -> {:#010x}",
                librt.name(),
                abs_reloc_addr,
                resolved
            );
            break;
        }
    }
}
```

## [Windows](<https://lief.re/doc/latest/runtime/components/modules.html#windows>)

On Windows, you can perform similar operations such as in-memory parsing, accessing the `HMODULE` handle, and resolving functions through a dlsym-like helper:

**Python**

```python
print(f"ntdll path: {ntdll.path}")
if nt_query := ntdll.dlsym("NtQueryInformationProcess"):
    # lief.to_int converts an opaque pointer (void*) into a regular Python int
    nt_query_addr = lief.to_int(nt_query)
    print(f"{ntdll.name}!NtQueryInformationProcess: {nt_query_addr:#010x}")

# This parses the PE from its path on the disk
if pe_on_disk := ntdll.parse_from_path():
    print(f"on-disk imagebase: {pe_on_disk.optional_header.imagebase:#010x}")
    if sym := pe_on_disk.get_symbol("NtQueryInformationProcess"):
        print(f"NtQueryInformationProcess: {sym.value:#010x}")

# This parses the PE directly from memory
if pe_memory := ntdll.parse_from_memory():
    imagebase = pe_memory.optional_header.imagebase
    print(f"in-memory imagebase: {imagebase:#010x}")
    if sym := pe_memory.get_symbol("RtlFreeHeap"):
        print(f"RtlFreeHeap: {sym.value:#010x}")

        # With LIEF extended, we can disassemble the function directly from
        # its absolute memory address:
        if lief.__extended__:
            for inst in islice(lief.runtime.disassemble(imagebase + sym.value), 4):
                print("   ", inst)
```

**C++**

```cpp
info("ntdll path: {}", ntdll->path());
if (void* _NtQueryInformationProcess = ntdll->dlsym("NtQueryInformationProcess"))
{
  info("{}!NtQueryInformationProcess: {}", ntdll->name(),
       hex(reinterpret_cast<uintptr_t>(_NtQueryInformationProcess)));
}

if (std::unique_ptr<LIEF::PE::Binary> pe_on_disk = ntdll->parse_from_path()) {
  info("on-disk imagebase: {}", hex(pe_on_disk->optional_header().imagebase()));
  if (const LIEF::Symbol* sym =
          pe_on_disk->get_symbol("NtQueryInformationProcess"))
  {
    info("NtQueryInformationProcess: {}", hex(sym->value()));
  }
}

if (std::unique_ptr<LIEF::PE::Binary> pe_memory = ntdll->parse_from_memory()) {
  const uintptr_t imagebase = pe_memory->optional_header().imagebase();
  info("in-memory imagebase: {}", hex(imagebase));
  if (const LIEF::Symbol* sym = pe_memory->get_symbol("RtlFreeHeap")) {
    info("RtlFreeHeap: {}", hex(sym->value()));

    // Disassemble RtlFreeHeap from memory
    auto instructions = LIEF::runtime::disassemble(imagebase + sym->value());
    auto first_instructions = instructions | std::views::take(4);

    for (const LIEF::assembly::Instruction& inst : first_instructions) {
      info("    {}", inst.to_string());
    }
  }
}
```

**Rust**

```rust
println!("ntdll path: {}", ntdll.path());
let nt_query = ntdll.dlsym("NtQueryInformationProcess".to_string());
if !nt_query.is_null() {
    println!(
        "{}!NtQueryInformationProcess: {:#010x}",
        ntdll.name(),
        nt_query as usize
    );
}

// Parse the PE from its path on the disk
if let Some(pe_on_disk) = ntdll.parse_from_path() {
    println!(
        "on-disk imagebase: {:#010x}",
        pe_on_disk.optional_header().imagebase()
    );
    if let Some(export) = pe_on_disk.export() {
        if let Some(entry) = export.entry_by_name("NtQueryInformationProcess") {
            println!("NtQueryInformationProcess: {:#010x}", entry.address());
        }
    }
}

// Parse the PE directly from memory
if let Some(pe_memory) = ntdll.parse_from_memory() {
    let imagebase = pe_memory.optional_header().imagebase();
    println!("in-memory imagebase: {:#010x}", imagebase);
    if let Some(export) = pe_memory.export() {
        if let Some(entry) = export.entry_by_name("RtlFreeHeap") {
            let rva = entry.address() as u64;
            println!("RtlFreeHeap: {:#010x}", rva);

            // Disassemble the first instructions of RtlFreeHeap from memory
            for inst in runtime::disassemble(imagebase + rva).take(4) {
                println!("    {}", inst.to_string());
            }
        }
    }
}
```

## [macOS](<https://lief.re/doc/latest/runtime/components/modules.html#macos>)

System libraries can be located in the [Dyld shared cache](<https://lief.re/doc/latest/extended/dsc/index.html#extended-dsc>) even when their module paths look like ordinary files. In that case, parsing from the path can fail. The example below parses the mapped library from memory and lists its exported symbols:

**Python**

```python
print(f"libsystem_c path: {libsystem.path}")
if arc4_init := libsystem.dlsym("arc4_init"):
    # lief.to_int converts an opaque pointer (void*) into a regular Python int
    arc4_init_addr = lief.to_int(arc4_init)
    print(f"{libsystem.name}!arc4_init: {arc4_init_addr:#010x}")

    # With LIEF extended, we can disassemble the function directly from its
    # absolute memory address:
    if lief.__extended__:
        for inst in islice(lief.runtime.disassemble(arc4_init_addr), 4):
            print("   ", inst)

# libsystem.path looks like a valid path but libsystem_c.dylib lives in the
# dyld-shared-cache. Therefore, it's pointless to try to parse the library
# from its filepath as the library does not exist on the disk.
macho_on_disk: lief.MachO.Binary | None = None
with lief.logging.level_scope(lief.logging.Level.Off):
    macho_on_disk = libsystem.parse_from_path()

if macho_on_disk is None:
    print(f"As expected, {libsystem.path} is not present in the filesystem")

# But we can parse it from memory:
if macho_memory := libsystem.parse_from_memory():
    print(f"in-memory imagebase: {macho_memory.imagebase:#010x}")
    # List 'exported' symbols
    for sym in macho_memory.exported_symbols:
        print(f"{sym.name:10}: {sym.value:#010x}")
```

**C++**

```cpp
info("libsystem_c path: {}", libsystem->path());
if (void* p_arc4_init = libsystem->dlsym("arc4_init")) {
  info("{}!arc4_init: {}", libsystem->name(),
       hex(reinterpret_cast<uintptr_t>(p_arc4_init)));

  // Disassemble malloc directly from its resolved memory address
  auto instructions =
      LIEF::runtime::disassemble(reinterpret_cast<uintptr_t>(p_arc4_init));
  for (const LIEF::assembly::Instruction& inst :
       instructions | std::views::take(4))
  {
    info("    {}", inst.to_string());
  }
}

// libsystem->path() looks like a valid path but libsystem_c.dylib lives
// in the dyld-shared-cache. Therefore, it's pointless to try to parse the
// library from its filepath as the library does not exist on the disk
std::unique_ptr<LIEF::MachO::Binary> macho_on_disk;
{
  LIEF::logging::Scoped disable_logger(LIEF::logging::Level::Off);
  macho_on_disk = libsystem->parse_from_path();
}
if (macho_on_disk == nullptr) {
  info("As expected, {} is not present in the filesystem", libsystem->path());
}

// But we can parse it from memory:
if (std::unique_ptr<LIEF::MachO::Binary> macho_memory =
        libsystem->parse_from_memory())
{
  info("in-memory imagebase: {}", hex(macho_memory->imagebase()));
  for (const LIEF::MachO::Symbol& S : macho_memory->exported_symbols()) {
    info(std::format("{:10}: {:#010x}", S.name(), S.value()));
  }
}
```

**Rust**

```rust
println!("libsystem_c path: {}", libsystem.path());
let arc4_init = libsystem.dlsym("arc4_init".to_string());
if !arc4_init.is_null() {
    println!(
        "{}!arc4_init: {:#010x}",
        libsystem.name(),
        arc4_init as usize
    );

    // Disassemble arc4_init directly from its resolved memory address
    for inst in runtime::disassemble(arc4_init as u64).take(4) {
        println!("    {}", inst.to_string());
    }
}

// libsystem.path() looks like a valid path but libsystem_c.dylib lives in
// the dyld-shared-cache. Therefore, it's pointless to try to parse the
// library from its filepath as the library does not exist on the disk.
let macho_on_disk = {
    let _scoped = lief::logging::Scoped::new(lief::logging::Level::Off);
    libsystem.parse_from_path()
};
if macho_on_disk.is_none() {
    println!(
        "As expected, {} is not present in the filesystem",
        libsystem.path()
    );
}

// But we can parse it from memory:
if let Some(macho_memory) = libsystem.parse_from_memory() {
    println!("in-memory imagebase: {:#010x}", macho_memory.imagebase());
    // List 'exported' symbols
    for sym in macho_memory.exported_symbols() {
        println!("{:10}: {:#010x}", sym.name(), sym.value());
    }
}
```

## [Android](<https://lief.re/doc/latest/runtime/components/modules.html#android>)

On Android,  `lief.runtime.android.Module` ( [`lief::runtime::android::Module`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/android/struct.Module.html>) ;  [`lief.runtime.android.Module`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Module>) ;  [`LIEF::runtime::android::Module`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android6ModuleE>) ) extends the generic interface with the same helpers as on Linux: loading a library with  `lief.runtime.android.dlopen()` ( [`lief::runtime::android::dlopen`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/android/fn.dlopen.html>) ;  [`lief.runtime.android.dlopen()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.dlopen>) ;  [`LIEF::runtime::android::dlopen()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android6dlopenERKNSt6stringE>) ), resolving symbols with  `lief.runtime.android.Module.dlsym()` ( [`lief::runtime::android::Module::dlsym`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/android/struct.Module.html#method.dlsym>) ;  [`lief.runtime.android.Module.dlsym()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Module.dlsym>) ;  [`LIEF::runtime::android::Module::dlsym()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7android6Module5dlsymERKNSt6stringE>) ) and parsing modules from their path on disk. The following snippet demonstrates these operations on the Bionic `libc` and `liblog` modules:

**Python**

```python
print(f"libc path: {libc.path}")
if __cxa_finalize := libc.dlsym("__cxa_finalize"):
    __cxa_finalize_addr = lief.to_int(__cxa_finalize)
    print(f"{libc.name}!__cxa_finalize: {__cxa_finalize_addr:#010x}")

if malloc := libc.dlsym("malloc"):
    malloc_addr = lief.to_int(malloc)
    print(f"{libc.name}!malloc: {malloc_addr:#010x}")

    # With LIEF extended, we can disassemble the function from its
    # absolute memory address:
    if lief.__extended__:
        for inst in islice(lief.runtime.disassemble(malloc_addr), 4):
            print("   ", inst)

if (elf_on_disk := libc.parse_from_path()) is not None and (
    __cxa_finalize := elf_on_disk.get_symbol("__cxa_finalize")
) is not None:
    print(f"__cxa_finalize: {__cxa_finalize.value:#010x}")

if liblog := lief.runtime.android.dlopen("liblog.so"):
    print(
        f"liblog loaded: {liblog.path} "
        f"(dlopen handler={lief.to_int(liblog.handle):#010x})"
    )

    if log_print := liblog.dlsym("__android_log_print"):
        log_print_addr = lief.to_int(log_print)
        print(f"{liblog.name}!__android_log_print: {log_print_addr:#010x}")
```

**C++**

```cpp
info("libc path: {}", libc->path());
if (void* cxa_finalize = libc->dlsym("__cxa_finalize")) {
  info("{}!__cxa_finalize: {}", libc->name(),
       hex(reinterpret_cast<uintptr_t>(cxa_finalize)));
}

if (void* malloc_fn = libc->dlsym("malloc")) {
  auto malloc_ptr = reinterpret_cast<uintptr_t>(malloc_fn);
  info("{}!malloc: {}", libc->name(), hex(malloc_ptr));

  auto malloc_instructions = LIEF::runtime::disassemble(malloc_ptr);

  // Dump the first instructions of malloc
  for (const LIEF::assembly::Instruction& inst :
       malloc_instructions | std::views::take(4))
  {
    info("   {}", inst.to_string());
  }
}

if (std::unique_ptr<LIEF::ELF::Binary> elf_on_disk = libc->parse_from_path()) {
  if (const LIEF::Symbol* sym = elf_on_disk->get_symbol("__cxa_finalize")) {
    info("__cxa_finalize: {}", hex(sym->value()));
  }
}

if (std::unique_ptr<LIEF::runtime::android::Module> liblog =
        LIEF::runtime::android::dlopen("liblog.so"))
{
  info("liblog loaded: {} (dlopen handle={})", liblog->path(),
       hex(reinterpret_cast<uintptr_t>(liblog->handle())));

  if (void* log_print = liblog->dlsym("__android_log_print")) {
    info("{}!__android_log_print: {}", liblog->name(),
         hex(reinterpret_cast<uintptr_t>(log_print)));
  }
}
```

**Rust**

```rust
println!("libc path: {}", libc.path());
let cxa_finalize = libc.dlsym("__cxa_finalize".to_string());
if !cxa_finalize.is_null() {
    println!(
        "{}!__cxa_finalize: {:#010x}",
        libc.name(),
        cxa_finalize as usize
    );
}

let malloc = libc.dlsym("malloc".to_string());
if !malloc.is_null() {
    println!("{}!malloc: {:#010x}", libc.name(), malloc as usize);
}

// Parse the ELF from its path on the disk
if let Some(elf_on_disk) = libc.parse_from_path() {
    for sym in elf_on_disk.dynamic_symbols() {
        if sym.name() == "__cxa_finalize" {
            println!("__cxa_finalize: {:#010x}", sym.value());
            break;
        }
    }
}

if let Some(liblog) = runtime::android::dlopen("liblog.so") {
    println!(
        "liblog loaded: {} (dlopen handle={:#010x})",
        liblog.path(),
        liblog.handle() as usize
    );

    let log_print = liblog.dlsym("__android_log_print".to_string());
    if !log_print.is_null() {
        println!(
            "{}!__android_log_print: {:#010x}",
            liblog.name(),
            log_print as usize
        );
    }
}
```
