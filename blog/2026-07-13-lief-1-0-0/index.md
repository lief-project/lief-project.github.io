---
title: "LIEF v1.0.0"
description: "LIEF 1.0.0: a new cross-platform Runtime API, faster Rust bindings, stable-ABI and free-threaded Python wheels"
canonical_url: "https://lief.re/blog/2026-07-13-lief-1-0-0/"
markdown_url: "https://lief.re/blog/2026-07-13-lief-1-0-0/index.md"
authors: ["Romain Thomas"]
date_published: "2026-07-13T00:00:00Z"
date_modified: "2026-07-13T00:00:00Z"
language: "en-US"
section: "blog"
tags: ["release","Runtime API","Rust","Python","LIEF Extended","DWARF","PDB"]
categories: []
---

# LIEF v1.0.0

> LIEF 1.0.0: a new cross-platform Runtime API, faster Rust bindings, stable-ABI and free-threaded Python wheels

I'm really happy to announce the release of **LIEF 1.0.0**. Compared to previous versions,
this release represents an important milestones for this project: stability, usability, and security.

LIEF started almost ten years ago. While the journey was driven by adding new
features, it also involved correcting a handful of early design decisions that
turned out to be wrong and have been corrected, release after release. I won't pretend this
version is bug-free or that it does not need further improvements, but it now rests on
solid foundations, and the project has been adopted across a range of industries with
positive feedback.

A special thanks goes to [Quansight](https://quansight.com), which generously
sponsored this project. Many thanks as well to [Holepunch](https://holepunch.to/)
for their feature-based sponsorship, and to [Calif](https://calif.io/) for
reviewing LIEF against frontier models (aka Mythos & GPT‑5‑Cyber).

## Bindings: Rust & Python

The LIEF Python wheels are now built against the **stable ABI** and now offer a
**free-threaded** variant. Building against the stable ABI lets a single wheel
serve multiple interpreter versions, while the free-threaded variant lets you use LIEF with the GIL disabled.
This variant is available for Python 3.14 and 3.15 onward.
The C++ core is now thread-safe with respect to its few static variables, so
it behaves correctly under free-threading.

On the Rust side, I refactored the bindings to drop the unmaintained `autocxx`
dependency. They are now built directly on top of `cxx`, without
any extra wrapper. This change dramatically reduces compilation and iteration
time. The crates also moved from `api/rust/cargo/` to `api/rust/crates/`, and the
minimum supported Rust version is now `1.85.0`.

## Clang Lifetime Annotations

I[^ai-annotations] have started annotating the LIEF API with Clang lifetime
annotations `[[clang::lifetimebound]]` to strengthen the compile-time verification of the
codebase.

These annotations enable the compiler to catch issues like this one:

```cpp
std::string lifetime_examples() {
  Section* text = nullptr;
  {
    std::unique_ptr<Binary> elf = Parser::parse("/bin/ls");
    text = elf->get_section(".text");
  }
  return text->name();
}
```

When compiled under strict lifetime-analysis flags, Clang raises the following
error:

```
  example.cpp:50:12: error: local variable 'elf' does not live long enough [clang-diagnostic-lifetime-safety-use-after-scope]
     50 |     text = elf->get_section(".text");
        |            ^~~
  example.cpp:51:3: note: local variable 'elf' is destroyed here
     51 |   }
        |   ^
  example.cpp:50:12: note: expression aliases the storage of local variable 'elf'
     50 |     text = elf->get_section(".text");
        |            ^~~~~
  example.cpp:50:12: note: result of call to 'get_section' aliases the storage of local variable 'elf'
     50 |     text = elf->get_section(".text");
        |            ^~~~~~~~~~~~~~~~~~~~~~~~~
  example.cpp:52:10: note: later used here
     52 |   return text->name();
        |          ^~~~
```

## Executable File Format Improvements

Mach-O support has been extended to include load commands
introduced in recent versions of dyld: `LC_LAZY_LOAD_DYLIB_INFO`,
`LC_FUNCTION_VARIANTS`, and `LC_FUNCTION_VARIANT_FIXUPS`. LIEF can now also
**create a FAT (universal) binary** from several thin Mach-O binaries, select a
specific architecture out of an existing FAT binary, and write **big-endian**
Mach-O files.

The ELF rewriter has been reworked to reduce
the memory footprint of modified binaries: a rewritten ELF is now smaller than in
previous releases, and LIEF can safely modify a binary it has *already* modified.

Finally, thanks thanks to a security review by Calif, the various parsers are now safer and keep
tighter control over how much memory they allocate when facing malformed inputs.

## Supported Platforms

This release introduces pre-compiled packages for several new architectures and platforms:

- Python wheels are now available for Linux RISC-V 64-bit (including musl-based libc)
- SDK and Rust pre-compiled packages are provided for:
  - Android `x86-64`, `ARM64` & `arm-v7a`
  - Linux `riscv64gc` (musl), `riscv64a23` (glibc)

## Runtime API

One of the most exciting additions in this release is the new **Runtime API**.
The motivation came from a recurring need: parsing ELF, Mach-O and PE binaries
directly from memory. LIEF already had everything required to parse a binary from
a raw pointer thanks to its `BinaryStream` abstraction, but it lacked a
friendly, high-level bridge to reach it. The Runtime API is that bridge:

```python
import lief

for module in lief.runtime.modules():
    print(module)
    binary = module.parse_from_memory()
```

These runtime features go well beyond parsing an executable from memory. They
provide cross-platform, cross-language access to inspect and manipulate the
process in which LIEF is loaded.

To make this concrete, here is a Python example that JIT-compiles and executes a Windows ARM64
"Hello World" using the new Runtime API.

First, we allocate a chunk of memory to hold the assembled code:

```python
import lief

chunk = lief.runtime.Memory.mmap(
    lief.runtime.Process.page_size,
    lief.runtime.Memory.ANONYMOUS | lief.runtime.Memory.PRIVATE,
    lief.runtime.Memory.READ | lief.runtime.Memory.WRITE | lief.runtime.Memory.EXEC,
)
```

Then, we assemble our code straight into the _chunk_ with `assemble(...)`. This function is backed by
LIEF's [assembly engine](https://lief.re/doc/latest/extended/assembler/index.html):

```python
lief.runtime.assemble(
    chunk.addr,
    r"""
    .text
        .global win_arm64_hello
        .align 2

    win_arm64_hello:
        stp     x29, x30, [sp, -64]!
        mov     x29, sp
        stp     x19, x20, [sp, 16]
        stp     x21, x22, [sp, 32]
        // -------------------------------
        // Hello World code goes here
        // -------------------------------
        mov     x0, xzr
        ldp     x21, x22, [sp, 32]
        ldp     x19, x20, [sp, 16]
        ldp     x29, x30, [sp], 64
        ret
    """,
)
```

While we could implement the "Hello World" as pure, low-level shellcode issuing raw syscalls, we
can also leverage the
[Contextual Assembly Patching](https://lief.re/doc/latest/extended/assembler/index.html#contextual-assembly-patching)
feature to resolve symbols like `GetStdHandle` and `WriteFile` **on the fly**:

```python {linenos=inline hl_lines=[27,28,"5-8"]}
class Config(lief.assembly.AssemblerConfig):
    def resolve_symbol(self, name: str) -> int | None:
        kernel32 = lief.runtime.windows.dlopen("kernel32.dll")
        match name:
            case "GetStdHandle":
                return lief.to_int(kernel32.dlsym("GetStdHandle"))
            case "WriteFile":
                return lief.to_int(kernel32.dlsym("WriteFile"))
            case _:
                return None

config = Config()

lief.runtime.assemble(
    chunk.addr,
    r"""
    .text
        .global win_arm64_hello
        .align 2

    win_arm64_hello:
        stp     x29, x30, [sp, -64]!
        mov     x29, sp
        stp     x19, x20, [sp, 16]
        stp     x21, x22, [sp, 32]
        // -------------------------------
        ldr     x19, =GetStdHandle
        ldr     x20, =WriteFile
        // -------------------------------
        mov     x0, xzr
        ldp     x21, x22, [sp, 32]
        ldp     x19, x20, [sp, 16]
        ldp     x29, x30, [sp], 64
        ret
    """, config,
)
```

The same mechanism can also resolve **data** symbols. Let's expose our message
buffer and its length through the configuration, then actually call the two functions to
print the string:

```python {linenos=inline hl_lines=[1,2,"12-15",36,37,"39-48"]}
msg = b"Hello World\n"
ctype_msg = ctypes.create_string_buffer(msg)

class Config(lief.assembly.AssemblerConfig):
    def resolve_symbol(self, name: str) -> int | None:
        kernel32 = lief.runtime.windows.dlopen("kernel32.dll")
        match name:
            case "GetStdHandle":
                return lief.to_int(kernel32.dlsym("GetStdHandle"))
            case "WriteFile":
                return lief.to_int(kernel32.dlsym("WriteFile"))
            case "var_msg":
                return ctypes.addressof(ctype_msg)
            case "var_msg_len":
                return len(msg)
            case _:
                return None

config = Config()

lief.runtime.assemble(
    chunk.addr,
    r"""
    .text
        .global win_arm64_hello
        .align 2

    win_arm64_hello:
        stp     x29, x30, [sp, -64]!
        mov     x29, sp
        stp     x19, x20, [sp, 16]
        stp     x21, x22, [sp, 32]
        // -------------------------------
        ldr     x19, =GetStdHandle
        ldr     x20, =WriteFile
        ldr     x21, =var_msg
        ldr     w22, =var_msg_len

        // GetStdHandle(STD_OUTPUT_HANDLE=-11) -> x0
        mov     w0, -11
        blr     x19

        // WriteFile(x0, msg, len, &written, NULL)
        mov     x1, x21
        mov     w2, w22
        add     x3, sp, 48
        mov     x4, xzr
        blr     x20
        // -------------------------------
        mov     x0, xzr
        ldp     x21, x22, [sp, 32]
        ldp     x19, x20, [sp, 16]
        ldp     x29, x30, [sp], 64
        ret
    """, config,
)
```

Once the code is assembled in memory, we flush the instruction cache, flip the
region to read-execute, and call it like a regular function:

```python
lief.runtime.assemble(chunk.addr, "...", config)

chunk.cache_flush()
chunk.make_rx()

void_void_func = ctypes.CFUNCTYPE(None)  # void(*)()
hello_jit = void_void_func(chunk.addr)

hello_jit()  # prints "Hello World"
```

The same example is available for the Rust bindings and the C++ API, and you'll
find the Linux, Android, and macOS equivalents in the
[runtime documentation](https://lief.re/doc/latest/runtime/intro.html).

The Runtime API also works the other way around: you can disassemble live code
directly from memory. Here is a Rust example that disassembles a function and
flags every instruction that touches the RISC-V stack pointer (`x2`):

```rust
use lief::assembly::{Instructions, riscv::{Operands, Reg}};

fn say_hello() {
  println!("Hello World");
}

fn main() {
    for inst in lief::runtime::disassemble((say_hello as usize).try_into().unwrap()) {
        println!("{inst}");

        let Instructions::RiscV(riscv) = &inst else {
            continue;
        };

        let uses_sp = riscv
            .operands()
            .any(|op| matches!(op, Operands::Mem(mem) if mem.base() == Reg::X2));

        if uses_sp {
            println!("{inst} is a memory operation that uses x2 (sp)");
        }
    }
}
```


**Runtime API**


You can explore the rest of the Runtime API in the
[runtime documentation](https://lief.re/doc/latest/runtime/intro.html).
Because these features go beyond executable formats, they are only activated in the
[extended](https://lief.re/doc/latest/extended/intro.html) version of LIEF.
However, you can also compile LIEF from source with the Runtime API enabled.



## LIEF Extended


**C++ Standard**


[LIEF Extended](https://extended.lief.re) and its components are now built
using **C++23**. The supported platforms are:


-  Linux: Ubuntu 24.04, Fedora 40, RHEL 10 / CentOS 10, Debian 13: `ARM64, x86-64` (`RISC-V` soon)
-  macOS 15.0+ (Sequoia): `ARM64 & x86-64`
-  Windows 11+: `ARM64 & x86-64`
-  Android API 30+: `ARM64 & x86-64` (including Python wheels)


This change **does not** affect the LIEF core library, which remains compatible with C++11 and only
requires a C++17 compiler to build.



### DWARF & PDB `->` C/C++

LIEF Extended can now generate C/C++ declarations from DWARF and PDB debug
information.

For example, consider this
[libdexprotector.so](https://www.romainthomas.fr/post/26-01-dexprotector/)
binary, enriched with DWARF debug info recovered via reverse engineering.

In Binary Ninja, it looks like this:

![Technical diagram](https://lief.re/blog/2026-07-13-lief-1-0-0/bn-1.svg)






Calling `to_decl()` on a DWARF function, variable, or type generates its C/C++
declaration:

```python
import lief

elf = lief.ELF.parse("libdexprotector.so.dwarf")
dwarf = elf.debug_info

linker64_r_debug = dwarf.find_variable("linker64_r_debug")
print(linker64_r_debug.to_decl())
```

Which outputs:

```cpp
/*
 * pointer to the r_debug structure defined in the linker(64)
 * Addr: 0xabc8
 * size: 0x0008
 */
static struct r_debug_t *linker64_r_debug;
```


**C/C++ Declaration**


Note that the Binary Ninja comment, the address, and the `sizeof` of
the variable are also generated. You can control the output format using the
configuration options accepted by `to_decl`.



`to_decl` also works with types:

```python {linenos=inline hl_lines=["9-10"]}
import lief

elf = lief.ELF.parse("libdexprotector.so.dwarf")
dwarf = elf.debug_info

linker64_r_debug = dwarf.find_variable("linker64_r_debug")
print(linker64_r_debug.to_decl())

ptr_type: lief.dwarf.types.Pointer = linker64_r_debug.type
print(ptr_type.underlying_type.to_decl())
```

Which outputs:

```cpp
struct r_debug_t {
    int r_version;
    char __padding1__[4];
    struct link_map *r_map;
    Elf64_Addr r_brk;
    enum {
        RT_CONSISTENT = 0U,
        RT_ADD = 1U,
        RT_DELETE = 2U
    } r_state;
    char __padding4__[4];
    Elf64_Addr r_ldbase;
}
```

You can also configure the output to include field offsets:

```diff {linenos=inline style=pastie}
import lief

elf = lief.ELF.parse("libdexprotector.so.dwarf")
dwarf = elf.debug_info

linker64_r_debug = dwarf.find_variable("linker64_r_debug")
print(linker64_r_debug.to_decl())

ptr_type: lief.dwarf.types.Pointer = linker64_r_debug.type
- print(ptr_type.underlying_type.to_decl())
+ opt = lief.DeclOpt()
+ opt.show_field_offsets = True
+ print(ptr_type.underlying_type.to_decl(opt))
```

```cpp
struct r_debug_t {
    /* 0x00 */ int r_version;
    /* 0x04 */ char __padding1__[4];
    /* 0x08 */ struct link_map *r_map;
    /* 0x10 */ Elf64_Addr r_brk;
    /* 0x18 */ enum {
        RT_CONSISTENT = 0U,
        RT_ADD = 1U,
        RT_DELETE = 2U
    } r_state;
    /* 0x1c */ char __padding4__[4];
    /* 0x20 */ Elf64_Addr r_ldbase;
}
```

A function containing basic block comments like this:

[![BinaryNinja - dp_derive_key](https://lief.re/blog/2026-07-13-lief-1-0-0/bn_screenshot.webp)](https://lief.re/blog/2026-07-13-lief-1-0-0/bn_screenshot.webp)

is translated as follows:

```cpp
/*
 * Address: 0x063c
 */
r_debug_t *dp_derive_key(key_t *key) {
    /*
     * Stack addr: -0x00d0
     * size: 0x0080
     */
    struct_4 var_d0;
    /* Start: 0x000988 */ {
        /* Start: 0x00098c */ {
          //This block derives the key based on the assembly of r_debug.r_brk.
          //
          //Frida hooks this function such as the regular "ret" is transformed by a trampoline
        } /* End: 0x000990 */
    } /* End: 0x0009a4 */
}
```

The same feature works with PDB files:

```python
pdb = lief.pdb.load("ntdll.pdb/6192BFDB9F04442995FFCB0BE95172E14/ntdll.pdb")
peb = pdb.find_type("_PEB")
opt = lief.DeclOpt()
opt.show_field_offsets = True
print(peb.to_decl(opt))
```

```cpp

struct _PEB {
    /* 0x00 */ unsigned char InheritedAddressSpace;
    /* 0x01 */ unsigned char ReadImageFileExecOptions;
    /* 0x02 */ unsigned char BeingDebugged;
    /* 0x03 */ unsigned char BitField;
    /* 0x03 */ unsigned char ImageUsesLargePages : 1;
    /* 0x03 */ unsigned char IsProtectedProcess : 1;
    /* 0x03 */ unsigned char IsLegacyProcess : 1;
    /* 0x03 */ unsigned char IsImageDynamicallyRelocated : 1;
    /* 0x03 */ unsigned char SkipPatchingUser32Forwarders : 1;
    /* 0x03 */ unsigned char SpareBits : 3;
    /* 0x08 */ void Mutant;
    /* 0x10 */ void ImageBaseAddress;
    /* 0x18 */ struct _PEB_LDR_DATA *Ldr;
    /* 0x20 */ struct _RTL_USER_PROCESS_PARAMETERS *ProcessParameters;
    /* 0x28 */ void SubSystemData;
    /* 0x30 */ void ProcessHeap;
    [...]
    /* 0x378 */ unsigned long TracingFlags;
    /* 0x378 */ unsigned long HeapTracingEnabled : 1;
    /* 0x378 */ unsigned long CritSecTracingEnabled : 1;
    /* 0x378 */ unsigned long SpareTracingBits : 30;
}
```

### RISC-V, MIPS, eBPF & PowerPC

The disassembler can now expose the high-level semantics of instruction operands
for `RISC-V`, `MIPS`, `eBPF` and `PowerPC`. Each operand is surfaced as a `Register`,
`Immediate`, `Memory` or `PCRelative` object:

```python
import lief

elf = lief.parse("hello.bpf.o")

section = elf.get_section("tp/syscalls/sys_enter_write")
instructions = list(elf.disassemble_from_bytes(bytes(section.content)))

for inst in instructions:
    print(inst)
    for idx, op in enumerate(inst.operands):
        match op:
            case lief.assembly.ebpf.operands.Register(value=reg):
                print(f"  op[{idx}]: Register  -> {reg}")

            case lief.assembly.ebpf.operands.Immediate(value=imm):
                print(f"  op[{idx}]: Immediate -> {imm}")

            case lief.assembly.ebpf.operands.Memory():
                print(f"  op[{idx}]: Memory    -> {op}")

            case lief.assembly.ebpf.operands.PCRelative(value=target):
                print(f"  op[{idx}]: PCRelative -> {target}")
```

## Last Word

The first internal version of LIEF was released in July 2016. Ten years later, the
project is still alive and keeps growing, supported by a large and active
community of users and contributors.

Thank you to everyone who has been a part of this journey.

The detailed changelog is available here: [Changelog](https://lief.re/doc/latest/changelog.html)



[
![Quansight](https://lief.re/blog/2026-07-13-lief-1-0-0/quansight.webp)
](https://quansight.com/)



[^ai-annotations]: The initial pass over the codebase to add these annotations
was bootstrapped with the help of AI, then reviewed and adjusted by hand.
