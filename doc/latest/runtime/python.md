---
documentID: "814d8cef7b0f368b469607f5929feeabdd9081b37722c78dc04c6d1d216b0e73"
docname: "runtime/python"
title: "Runtime Python API - LIEF Documentation"
description: "Runtime Python API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/runtime/python.html"
markdownURL: "https://lief.re/doc/latest/runtime/python.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "9fa82d305b90ec7a6c9095bd6c21dc88393c7940839a31deb074887e1650e99d"
---

# [Python](<https://lief.re/doc/latest/runtime/python.html#python>)

> **Python `void*`**
> 
> The Python bindings manage opaque `void*` pointers as [Capsules](<https://docs.python.org/3/c-api/capsule.html#capsules>). Given a Capsule, there is no easy way to convert it into a raw address and vice versa. To address this limitation, LIEF exposes [`lief.to_int()`](<https://lief.re/doc/latest/runtime/python.html#lief.to_int> "lief.to_int") and [`lief.to_ptr()`](<https://lief.re/doc/latest/runtime/python.html#lief.to_ptr> "lief.to_ptr") to convert back and forth between raw addresses and pointers.

## [Utilities](<https://lief.re/doc/latest/runtime/python.html#utilities>)

### [` lief.to_int `](<https://lief.re/doc/latest/runtime/python.html#lief.to_int>)

lief.to\_int(*ptr: typing\_extensions.CapsuleType*) → int

Convert an opaque pointer into an address (int)

### [` lief.to_ptr `](<https://lief.re/doc/latest/runtime/python.html#lief.to_ptr>)

lief.to\_ptr(*ptr: int*) → typing\_extensions.CapsuleType

Convert an integer into an opaque pointer (`void*`)

### [` runtime.enabled `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.enabled>)

runtime.enabled = False

### [` runtime.platform `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.platform>)

runtime.platform = 0

### [` runtime.arch `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.arch>)

runtime.arch = 0

### [` lief.runtime.modules `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.modules>)

lief.runtime.modules() → Iterator[[lief.runtime.Module](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module> "lief.runtime.Module") | None]

Return an iterator over the different modules loaded in the current process

### [` lief.runtime.assemble `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.assemble>)

lief.runtime.assemble(*address: int*, *assembly: str*, *config: [lief.assembly.AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/python.html#lief.assembly.AssemblerConfig> "lief.assembly.AssemblerConfig")*) → bytes

Assemble the provided assembly code at the specified (absolute) virtual address.

The function returns the generated assembly bytes.

```python
from lief import runtime
code = runtime.assemble(0x7f0011223344, """
xor rax, rbx;
mov rcx, rax;
""")
```

If you need to configure the assembly engine or to define addresses for symbols, you can provide your own [`AssemblerConfig`](<https://lief.re/doc/latest/extended/assembler/python.html#lief.assembly.AssemblerConfig> "lief.assembly.AssemblerConfig") instance.

### [` lief.runtime.disassemble `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.disassemble>)

lief.runtime.disassemble(*addr: int*) → Iterator[[lief.assembly.Instruction](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief.assembly.Instruction") | None]

Start disassembling instructions at the given **absolute** virtual address.

```python
from lief import runtime
for inst in runtime.disassemble(0x7f0011223344):
    print(inst)
```

> **See also**
> 
> [`lief.assembly.Instruction`](<https://lief.re/doc/latest/extended/disassembler/python/index.html#lief.assembly.Instruction> "lief.assembly.Instruction")

---

## [Host](<https://lief.re/doc/latest/runtime/python.html#host>)

### [` lief.runtime.Host `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Host>)

class lief.runtime.Host

Bases: `object`

This class represents the current host.

#### [` cache_dir `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Host.cache_dir>)

cache\_dir = ''

#### [` config_dir `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Host.config_dir>)

config\_dir = ''

#### [` home_dir `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Host.home_dir>)

home\_dir = ''

#### [` name `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Host.name>)

name = ''

#### [` tmp_dir `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Host.tmp_dir>)

tmp\_dir = ''

---

## [Process](<https://lief.re/doc/latest/runtime/python.html#process>)

### [` lief.runtime.Process `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Process>)

class lief.runtime.Process

Bases: `object`

This class represents the current process and provides functions to query process-level information.

#### [` EnvVars `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Process.EnvVars>)

class EnvVars

Bases: `object`

This structure wraps environment variables

##### [` vars `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Process.EnvVars.vars>)

property vars → dict[str, str]

#### [` arch `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Process.arch>)

arch = 0

#### [` envs `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Process.envs>)

envs = &lt;lief.\_lief.runtime.Process.EnvVars object&gt;

#### [` get_env `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Process.get_env>)

get\_env(*key: str*) → str | None = &lt;nanobind.nb\_func object&gt;

#### [` page_size `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Process.page_size>)

page\_size = 0

#### [` pid `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Process.pid>)

pid = -1

#### [` platform `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Process.platform>)

platform = 0

#### [` tid `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Process.tid>)

tid = 0

---

## [Module](<https://lief.re/doc/latest/runtime/python.html#module>)

### [` lief.runtime.Module `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module>)

class lief.runtime.Module

Bases: `object`

This class represents an in-memory module which can be an executable or a library

#### [` contains `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module.contains>)

contains(*self*, *addr: int*) → bool

Check if the current module contains the given address

#### [` dumpdump `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module.dump>)

dump(*self*) → bytes

**dump(*self*, *filepath: str*) → bytes**

Overloaded function.

1. `dump(self) -> bytes`

Return the content of the module as it is currently mapped in memory

2. `dump(self, filepath: str) -> bytes`

Same as [`dump()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module.dump> "lief.runtime.Module.dump") but also write the content into the file given in parameter

#### [` end `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module.end>)

property end → int

End address of the module

#### [` imagebase `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module.imagebase>)

property imagebase → int

Imagebase of the module

#### [` name `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module.name>)

property name → str

Name of the module (e.g. `libc.so.6, kernel32.dll, libsystem_c.dylib`)

#### [` path `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module.path>)

property path → str

Path of the module

#### [` size `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module.size>)

property size → int

Virtual size of the current module

### [` lief.runtime.module_from_name `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.module_from_name>)

lief.runtime.module\_from\_name(*name: str*) → [lief.runtime.Module](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module> "lief.runtime.Module") | None

Find the module with the given name

### [` lief.runtime.module_from_path `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.module_from_path>)

lief.runtime.module\_from\_path(*path: str*) → [lief.runtime.Module](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module> "lief.runtime.Module") | None

Find the module with the given path

### [` lief.runtime.module_from_addr `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.module_from_addr>)

lief.runtime.module\_from\_addr(*addr: int*) → [lief.runtime.Module](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module> "lief.runtime.Module") | None

Find the module that encompasses the given virtual address (absolute)

---

## [Memory](<https://lief.re/doc/latest/runtime/python.html#memory>)

### [` lief.runtime.Memory `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory>)

class lief.runtime.Memory

Bases: `object`

This class exposes API to access and manage memory

#### [` ANONYMOUS `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.ANONYMOUS>)

ANONYMOUS = 2

#### [` ChunkChunkChunk `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk>)

class Chunk(*self*, *addr: typing\_extensions.CapsuleType*, *size: int*, *permissions: int*)

**class Chunk(*self*, *addr: typing\_extensions.CapsuleType*, *size: int*)

**class Chunk(*self*, *addr: typing\_extensions.CapsuleType*)****

Bases: `object`

Represents a contiguous chunk of memory allocated or inspected by the runtime.

##### [` addr `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk.addr>)

property addr → int

Returns the start address of the memory chunk

##### [` addr_ptr `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk.addr_ptr>)

property addr\_ptr → typing\_extensions.CapsuleType

Returns the start address of the memory chunk as an opaque pointer

##### [` cache_flush `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk.cache_flush>)

cache\_flush(*self*) → [lief.\_lief.runtime.Memory.Chunk](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk> "lief._lief.runtime.Memory.Chunk")

Flushes the instruction cache for this memory chunk. This should be used when modifying code in memory (e.g., hooking, JIT).

##### [` change_permissions `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk.change_permissions>)

change\_permissions(*self*, *permission: int*) → [lief.\_lief.runtime.Memory.Chunk](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk> "lief._lief.runtime.Memory.Chunk")

Changes the permissions of the memory chunk.

##### [` deallocate `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk.deallocate>)

deallocate(*self*) → [lief.\_lief.ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t> "lief._lief.ok_error_t")

##### [` is_valid `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk.is_valid>)

is\_valid(*self*) → bool

##### [` make_ro `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk.make_ro>)

make\_ro(*self*) → [lief.\_lief.runtime.Memory.Chunk](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk> "lief._lief.runtime.Memory.Chunk")

Sets the permissions to Read Only.

##### [` make_rw `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk.make_rw>)

make\_rw(*self*) → [lief.\_lief.runtime.Memory.Chunk](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk> "lief._lief.runtime.Memory.Chunk")

Sets the permissions to Read and Write.

##### [` make_rwx `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk.make_rwx>)

make\_rwx(*self*) → [lief.\_lief.runtime.Memory.Chunk](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk> "lief._lief.runtime.Memory.Chunk")

Sets the permissions to read/write/exec

##### [` make_rx `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk.make_rx>)

make\_rx(*self*) → [lief.\_lief.runtime.Memory.Chunk](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk> "lief._lief.runtime.Memory.Chunk")

Sets the permissions to Read and Execute.

##### [` make_x `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk.make_x>)

make\_x(*self*) → [lief.\_lief.runtime.Memory.Chunk](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk> "lief._lief.runtime.Memory.Chunk")

Sets the permissions to Execute only.

##### [` page_end `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk.page_end>)

property page\_end → int

Returns the address of the end of the page containing this chunk.

##### [` page_start `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk.page_start>)

property page\_start → int

Returns the address of the start of the page containing this chunk.

##### [` permissions `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk.permissions>)

property permissions → int

Returns the current permissions of the memory chunk.

##### [` size `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk.size>)

property size → int

Returns the size of the memory chunk in bytes.

#### [` EXEC `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.EXEC>)

EXEC = 4

#### [` FIXED `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.FIXED>)

FIXED = 8

#### [` JIT `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.JIT>)

JIT = 16

#### [` MMAP_FLAGS `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.MMAP_FLAGS>)

class MMAP\_FLAGS(*\*values*)

Bases: `IntFlag`

Flags used when creating a memory map (mmap).

##### [` ANONYMOUS `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.MMAP_FLAGS.ANONYMOUS>)

ANONYMOUS = 2

##### [` FIXED `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.MMAP_FLAGS.FIXED>)

FIXED = 8

##### [` JIT `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.MMAP_FLAGS.JIT>)

JIT = 16

##### [` NONE `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.MMAP_FLAGS.NONE>)

NONE = 0

##### [` PRIVATE `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.MMAP_FLAGS.PRIVATE>)

PRIVATE = 1

##### [` SHARED `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.MMAP_FLAGS.SHARED>)

SHARED = 4

#### [` NONE `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.NONE>)

NONE = 0

#### [` PERM `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.PERM>)

class PERM(*\*values*)

Bases: `IntFlag`

##### [` EXEC `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.PERM.EXEC>)

EXEC = 4

##### [` NONE `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.PERM.NONE>)

NONE = 0

##### [` READ `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.PERM.READ>)

READ = 1

##### [` WRITE `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.PERM.WRITE>)

WRITE = 2

#### [` PRIVATE `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.PRIVATE>)

PRIVATE = 1

#### [` READ `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.READ>)

READ = 1

#### [` SHARED `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.SHARED>)

SHARED = 4

#### [` WRITE `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.WRITE>)

WRITE = 2

#### [` mmap `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.mmap>)

mmap(*size: int*, *flags: int*, *permissions: int*) → [lief.runtime.Memory.Chunk](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk> "lief.runtime.Memory.Chunk") | None = &lt;nanobind.nb\_func object&gt;

#### [` mmap_hint `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.mmap_hint>)

mmap\_hint(*hint: int*, *size: int*, *flags: int*, *permissions: int*) → [lief.runtime.Memory.Chunk](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk> "lief.runtime.Memory.Chunk") | None = &lt;nanobind.nb\_func object&gt;

#### [` mprotect `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.mprotect>)

mprotect(*chunk: [lief.runtime.Memory.Chunk](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk> "lief.runtime.Memory.Chunk")*, *flags: int*) → [lief.ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t> "lief.ok_error_t") = &lt;nanobind.nb\_func object&gt;

#### [` munmap `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.munmap>)

munmap(*chunk: [lief.runtime.Memory.Chunk](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk> "lief.runtime.Memory.Chunk")*) → [lief.ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t> "lief.ok_error_t") = &lt;nanobind.nb\_func object&gt;

#### [` perm_str `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.perm_str>)

perm\_str(*flags: int*) → str = &lt;nanobind.nb\_func object&gt;

#### [` read `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.read>)

read(*addr: int*, *out: typing\_extensions.CapsuleType*, *size: int*) → None | bytes = &lt;nanobind.nb\_func object&gt;

#### [` read_i16 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.read_i16>)

read\_i16(*addr: int*) → int = &lt;nanobind.nb\_func object&gt;

#### [` read_i32 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.read_i32>)

read\_i32(*addr: int*) → int = &lt;nanobind.nb\_func object&gt;

#### [` read_i64 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.read_i64>)

read\_i64(*addr: int*) → int = &lt;nanobind.nb\_func object&gt;

#### [` read_i8 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.read_i8>)

read\_i8(*addr: int*) → int = &lt;nanobind.nb\_func object&gt;

#### [` read_u16 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.read_u16>)

read\_u16(*addr: int*) → int = &lt;nanobind.nb\_func object&gt;

#### [` read_u32 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.read_u32>)

read\_u32(*addr: int*) → int = &lt;nanobind.nb\_func object&gt;

#### [` read_u64 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.read_u64>)

read\_u64(*addr: int*) → int = &lt;nanobind.nb\_func object&gt;

#### [` read_u8 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.read_u8>)

read\_u8(*addr: int*) → int = &lt;nanobind.nb\_func object&gt;

#### [` write `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.write>)

write(*buffer: bytes*, *addr: int*) → [lief.ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t> "lief.ok_error_t") = &lt;nanobind.nb\_func object&gt;

#### [` write_i16 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.write_i16>)

write\_i16(*value: int*, *addr: int*) → [lief.ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t> "lief.ok_error_t") = &lt;nanobind.nb\_func object&gt;

#### [` write_i32 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.write_i32>)

write\_i32(*value: int*, *addr: int*) → [lief.ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t> "lief.ok_error_t") = &lt;nanobind.nb\_func object&gt;

#### [` write_i64 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.write_i64>)

write\_i64(*value: int*, *addr: int*) → [lief.ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t> "lief.ok_error_t") = &lt;nanobind.nb\_func object&gt;

#### [` write_i8 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.write_i8>)

write\_i8(*value: int*, *addr: int*) → [lief.ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t> "lief.ok_error_t") = &lt;nanobind.nb\_func object&gt;

#### [` write_u16 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.write_u16>)

write\_u16(*value: int*, *addr: int*) → [lief.ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t> "lief.ok_error_t") = &lt;nanobind.nb\_func object&gt;

#### [` write_u32 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.write_u32>)

write\_u32(*value: int*, *addr: int*) → [lief.ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t> "lief.ok_error_t") = &lt;nanobind.nb\_func object&gt;

#### [` write_u64 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.write_u64>)

write\_u64(*value: int*, *addr: int*) → [lief.ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t> "lief.ok_error_t") = &lt;nanobind.nb\_func object&gt;

#### [` write_u8 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.write_u8>)

write\_u8(*value: int*, *addr: int*) → [lief.ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t> "lief.ok_error_t") = &lt;nanobind.nb\_func object&gt;

---

## [MemoryLayout](<https://lief.re/doc/latest/runtime/python.html#memorylayout>)

### [` lief.runtime.MemoryLayout `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.MemoryLayout>)

class lief.runtime.MemoryLayout

Bases: `object`

This class exposes the memory layout of the current process.

#### [` Region `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.MemoryLayout.Region>)

class Region

Bases: `object`

A contiguous range of memory mapped in the current process.

##### [` addr `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.MemoryLayout.Region.addr>)

property addr → int

Address at which the region starts

##### [` contains `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.MemoryLayout.Region.contains>)

contains(*self*, *addr: int*) → bool

Whether the given address is within this region

##### [` end_addr `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.MemoryLayout.Region.end_addr>)

property end\_addr → int

Address at which the region ends

##### [` name `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.MemoryLayout.Region.name>)

property name → str

Name associated with the region: the name or the path of the module mapped at this address (e.g. `libc.so.6`) or the identifier of a region that is not backed by a file (e.g. `[stack]`, `[heap]`).

It can be empty for anonymous regions.

##### [` size `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.MemoryLayout.Region.size>)

property size → int

Size of the region

### [` lief.runtime.memory_layout `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.memory_layout>)

lief.runtime.memory\_layout() → Iterator[[lief.runtime.MemoryLayout.Region](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.MemoryLayout.Region> "lief.runtime.MemoryLayout.Region") | None]

Return an iterator over the memory layout of the current process

---

## [Linux](<https://lief.re/doc/latest/runtime/python.html#linux>)

### [Module](<https://lief.re/doc/latest/runtime/python.html#id1>)

#### [` lief.runtime.linux.Module `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Module>)

class lief.runtime.linux.Module

Bases: [`Module`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module> "lief._lief.runtime.Module")

This class exposes a Linux-specific API for a module

##### [` dlsym `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Module.dlsym>)

dlsym(*self*, *name: str*) → typing\_extensions.CapsuleType

Resolve the symbol with the given name for the current module

##### [` from_handle `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Module.from_handle>)

from\_handle(*handle: typing\_extensions.CapsuleType*) → [lief.runtime.linux.Module](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Module> "lief.runtime.linux.Module") | None = &lt;nanobind.nb\_func object&gt;

##### [` handle `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Module.handle>)

property handle → typing\_extensions.CapsuleType

Return the `dlopen` handle for this library as an opaque pointer.

Return `None` if the function fails or if the handler can’t be found

##### [` parse_from_memoryparse_from_memory `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Module.parse_from_memory>)

parse\_from\_memory(*self*) → [lief.\_lief.ELF.Binary](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief._lief.ELF.Binary") | None

**parse\_from\_memory(*self*, *config: [lief.\_lief.ELF.ParserConfig](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig> "lief._lief.ELF.ParserConfig")*) → [lief.\_lief.ELF.Binary](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief._lief.ELF.Binary") | None**

Overloaded function.

1. `parse_from_memory(self) -> Optional[lief._lief.ELF.Binary]`

Parse the ELF module from memory

2. `parse_from_memory(self, config: lief._lief.ELF.ParserConfig) -> Optional[lief._lief.ELF.Binary]`

Parse the ELF module from memory with the given configuration

##### [` parse_from_pathparse_from_path `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Module.parse_from_path>)

parse\_from\_path(*self*) → [lief.\_lief.ELF.Binary](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief._lief.ELF.Binary") | None

**parse\_from\_path(*self*, *config: [lief.\_lief.ELF.ParserConfig](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig> "lief._lief.ELF.ParserConfig")*) → [lief.\_lief.ELF.Binary](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief._lief.ELF.Binary") | None**

Overloaded function.

1. `parse_from_path(self) -> Optional[lief._lief.ELF.Binary]`

Parse the ELF module from its path on the filesystem

2. `parse_from_path(self, config: lief._lief.ELF.ParserConfig) -> Optional[lief._lief.ELF.Binary]`

Parse the ELF module from its path on the filesystem and given the parser configuration

#### [` lief.runtime.linux.dlopen `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.dlopen>)

lief.runtime.linux.dlopen(*name: str | os.PathLike*) → [lief.runtime.linux.Module](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Module> "lief.runtime.linux.Module") | None

Load the library with the given path or name.

### [Host](<https://lief.re/doc/latest/runtime/python.html#id2>)

#### [` lief.runtime.linux.Host `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Host>)

class lief.runtime.linux.Host

Bases: `object`

This class exposes Linux-specific host information.

##### [` hardware `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Host.hardware>)

hardware = ''

##### [` sys_name `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Host.sys_name>)

sys\_name = ''

##### [` sys_release `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Host.sys_release>)

sys\_release = ''

##### [` sys_version `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Host.sys_version>)

sys\_version = ''

### [Process](<https://lief.re/doc/latest/runtime/python.html#id3>)

#### [` lief.runtime.linux.Process `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Process>)

class lief.runtime.linux.Process

Bases: [`Process`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Process> "lief._lief.runtime.Process")

This class exposes Linux-specific API for the current process.

##### [` cmdline `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Process.cmdline>)

cmdline = ''

##### [` glibc_version `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Process.glibc_version>)

glibc\_version = ''

---

## [Android](<https://lief.re/doc/latest/runtime/python.html#android>)

### [Module](<https://lief.re/doc/latest/runtime/python.html#id4>)

#### [` lief.runtime.android.Module `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Module>)

class lief.runtime.android.Module

Bases: [`Module`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module> "lief._lief.runtime.Module")

This class exposes an Android-specific API for a module

##### [` dlsym `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Module.dlsym>)

dlsym(*self*, *name: str*) → typing\_extensions.CapsuleType

Resolve the symbol with the given name for the current module

##### [` from_handle `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Module.from_handle>)

from\_handle(*handle: typing\_extensions.CapsuleType*) → [lief.runtime.android.Module](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Module> "lief.runtime.android.Module") | None = &lt;nanobind.nb\_func object&gt;

##### [` handle `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Module.handle>)

property handle → typing\_extensions.CapsuleType

Return the dlopen handle for this library.

Return a nullptr if the function fails or if the handler can’t be found

##### [` parse_from_memoryparse_from_memory `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Module.parse_from_memory>)

parse\_from\_memory(*self*) → [lief.\_lief.ELF.Binary](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief._lief.ELF.Binary") | None

**parse\_from\_memory(*self*, *config: [lief.\_lief.ELF.ParserConfig](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig> "lief._lief.ELF.ParserConfig")*) → [lief.\_lief.ELF.Binary](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief._lief.ELF.Binary") | None**

Overloaded function.

1. `parse_from_memory(self) -> Optional[lief._lief.ELF.Binary]`

Parse the ELF module from memory

2. `parse_from_memory(self, config: lief._lief.ELF.ParserConfig) -> Optional[lief._lief.ELF.Binary]`

Parse the ELF module from memory with the given configuration

##### [` parse_from_pathparse_from_path `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Module.parse_from_path>)

parse\_from\_path(*self*) → [lief.\_lief.ELF.Binary](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief._lief.ELF.Binary") | None

**parse\_from\_path(*self*, *config: [lief.\_lief.ELF.ParserConfig](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.ParserConfig> "lief._lief.ELF.ParserConfig")*) → [lief.\_lief.ELF.Binary](<https://lief.re/doc/latest/formats/elf/python.html#lief.ELF.Binary> "lief._lief.ELF.Binary") | None**

Overloaded function.

1. `parse_from_path(self) -> Optional[lief._lief.ELF.Binary]`

Parse the ELF module from its path on the filesystem

2. `parse_from_path(self, config: lief._lief.ELF.ParserConfig) -> Optional[lief._lief.ELF.Binary]`

Parse the ELF module from its path on the filesystem and given the parser configuration

#### [` lief.runtime.android.dlopen `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.dlopen>)

lief.runtime.android.dlopen(*name: str | os.PathLike*) → [lief.runtime.android.Module](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Module> "lief.runtime.android.Module") | None

Load the library with the given path/name

### [Host](<https://lief.re/doc/latest/runtime/python.html#id5>)

#### [` lief.runtime.android.Host `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Host>)

class lief.runtime.android.Host

Bases: `object`

This class exposes Android-specific host information.

##### [` sdk_version `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Host.sdk_version>)

sdk\_version = None

### [Process](<https://lief.re/doc/latest/runtime/python.html#id6>)

#### [` lief.runtime.android.Process `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Process>)

class lief.runtime.android.Process

Bases: [`Process`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Process> "lief._lief.runtime.Process")

This class exposes Android-specific API for the current process.

##### [` cmdline `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Process.cmdline>)

cmdline = ''

##### [` get_system_property `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Process.get_system_property>)

get\_system\_property(*name: str*) → [lief.runtime.android.Property](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Property> "lief.runtime.android.Property") | None = &lt;nanobind.nb\_func object&gt;

##### [` properties `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Process.properties>)

properties = []

### [Property](<https://lief.re/doc/latest/runtime/python.html#property>)

#### [` lief.runtime.android.Property `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Property>)

class lief.runtime.android.Property

Bases: `object`

This class represents an Android system property such as `ro.boot.hardware`.

##### [` name `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Property.name>)

property name → str

Name of the property (e.g. `ro.boot.hardware`)

##### [` serial `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Property.serial>)

property serial → int

Serial number of the property.

##### [` value `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Property.value>)

property value → str

Value associated with the property

---

## [macOS](<https://lief.re/doc/latest/runtime/python.html#macos>)

### [Module](<https://lief.re/doc/latest/runtime/python.html#id7>)

#### [` lief.runtime.osx.Module `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Module>)

class lief.runtime.osx.Module

Bases: [`Module`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module> "lief._lief.runtime.Module")

This class exposes an OSX-specific API for a module

##### [` dlsym `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Module.dlsym>)

dlsym(*self*, *name: str*) → typing\_extensions.CapsuleType

Resolve the symbol with the given name for the current module

##### [` from_handle `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Module.from_handle>)

from\_handle(*handle: typing\_extensions.CapsuleType*) → [lief.runtime.osx.Module](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Module> "lief.runtime.osx.Module") | None = &lt;nanobind.nb\_func object&gt;

##### [` handle `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Module.handle>)

property handle → typing\_extensions.CapsuleType

Return the `dlopen` handle for this library as an opaque pointer.

Return `None` if the function fails or if the handler can’t be found

##### [` parse_from_memoryparse_from_memory `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Module.parse_from_memory>)

parse\_from\_memory(*self*) → [lief.\_lief.MachO.Binary](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief._lief.MachO.Binary") | None

**parse\_from\_memory(*self*, *config: [lief.\_lief.MachO.ParserConfig](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ParserConfig> "lief._lief.MachO.ParserConfig")*) → [lief.\_lief.MachO.Binary](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief._lief.MachO.Binary") | None**

Overloaded function.

1. `parse_from_memory(self) -> Optional[lief._lief.MachO.Binary]`

Parse the Mach-O module from memory

2. `parse_from_memory(self, config: lief._lief.MachO.ParserConfig) -> Optional[lief._lief.MachO.Binary]`

Parse the Mach-O module from memory with the given configuration

##### [` parse_from_pathparse_from_path `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Module.parse_from_path>)

parse\_from\_path(*self*) → [lief.\_lief.MachO.Binary](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief._lief.MachO.Binary") | None

**parse\_from\_path(*self*, *config: [lief.\_lief.MachO.ParserConfig](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.ParserConfig> "lief._lief.MachO.ParserConfig")*) → [lief.\_lief.MachO.Binary](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary> "lief._lief.MachO.Binary") | None**

Overloaded function.

1. `parse_from_path(self) -> Optional[lief._lief.MachO.Binary]`

Parse the Mach-O module from its path on the filesystem

2. `parse_from_path(self, config: lief._lief.MachO.ParserConfig) -> Optional[lief._lief.MachO.Binary]`

Parse the Mach-O module from its path on the filesystem and given the parser configuration

### [Host](<https://lief.re/doc/latest/runtime/python.html#id8>)

#### [` lief.runtime.osx.Host `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host>)

class lief.runtime.osx.Host

Bases: `object`

This class exposes OSX-specific host information.

##### [` is_sip_enabled `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.is_sip_enabled>)

is\_sip\_enabled = True

##### [` os_version `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.os_version>)

os\_version = &lt;lief.\_lief.runtime.osx.Host.version\_t object&gt;

##### [` os_version_name `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.os_version_name>)

os\_version\_name = ''

##### [` version_t `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.version_t>)

class version\_t(*self*, *major: int*, *minor: int*, *patch: int*)

Bases: `object`

This class represents a macOS version number (major.minor.patch).

###### [` big_sur `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.version_t.big_sur>)

big\_sur → [lief.runtime.osx.Host.version\_t](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.version_t> "lief.runtime.osx.Host.version_t") = &lt;nanobind.nb\_func object&gt;

###### [` major `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.version_t.major>)

property major → int

Major version number

###### [` minor `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.version_t.minor>)

property minor → int

Minor version number

###### [` monterey `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.version_t.monterey>)

monterey → [lief.runtime.osx.Host.version\_t](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.version_t> "lief.runtime.osx.Host.version_t") = &lt;nanobind.nb\_func object&gt;

###### [` patch `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.version_t.patch>)

property patch → int

Patch version number

###### [` sequoia `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.version_t.sequoia>)

sequoia → [lief.runtime.osx.Host.version\_t](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.version_t> "lief.runtime.osx.Host.version_t") = &lt;nanobind.nb\_func object&gt;

###### [` sonoma `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.version_t.sonoma>)

sonoma → [lief.runtime.osx.Host.version\_t](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.version_t> "lief.runtime.osx.Host.version_t") = &lt;nanobind.nb\_func object&gt;

###### [` tahoe `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.version_t.tahoe>)

tahoe → [lief.runtime.osx.Host.version\_t](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.version_t> "lief.runtime.osx.Host.version_t") = &lt;nanobind.nb\_func object&gt;

###### [` ventura `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.version_t.ventura>)

ventura → [lief.runtime.osx.Host.version\_t](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.version_t> "lief.runtime.osx.Host.version_t") = &lt;nanobind.nb\_func object&gt;

### [Process](<https://lief.re/doc/latest/runtime/python.html#id9>)

#### [` lief.runtime.osx.Process `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Process>)

class lief.runtime.osx.Process

Bases: [`Process`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Process> "lief._lief.runtime.Process")

This class exposes OSX-specific API for the current process.

##### [` dyld_version `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Process.dyld_version>)

dyld\_version = ''

---

## [Windows](<https://lief.re/doc/latest/runtime/python.html#windows>)

### [Module](<https://lief.re/doc/latest/runtime/python.html#id10>)

#### [` lief.runtime.windows.Module `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Module>)

class lief.runtime.windows.Module

Bases: [`Module`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Module> "lief._lief.runtime.Module")

This class exposes a Windows-specific API for a module

##### [` dlsym `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Module.dlsym>)

dlsym(*self*, *name: str*) → typing\_extensions.CapsuleType

Resolve the symbol with the given name for the current module

##### [` from_handle `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Module.from_handle>)

from\_handle(*handle: typing\_extensions.CapsuleType*) → [lief.runtime.windows.Module](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Module> "lief.runtime.windows.Module") | None = &lt;nanobind.nb\_func object&gt;

##### [` handle `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Module.handle>)

property handle → typing\_extensions.CapsuleType

Return the `HMODULE` handle as an opaque pointer.

Return `None` if the function fails or if the handler can’t be found

##### [` parse_from_memoryparse_from_memory `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Module.parse_from_memory>)

parse\_from\_memory(*self*) → [lief.\_lief.PE.Binary](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief._lief.PE.Binary") | None

**parse\_from\_memory(*self*, *config: [lief.\_lief.PE.ParserConfig](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig> "lief._lief.PE.ParserConfig")*) → [lief.\_lief.PE.Binary](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief._lief.PE.Binary") | None**

Overloaded function.

1. `parse_from_memory(self) -> Optional[lief._lief.PE.Binary]`

Parse the PE module from memory

2. `parse_from_memory(self, config: lief._lief.PE.ParserConfig) -> Optional[lief._lief.PE.Binary]`

Parse the PE module from memory with the given configuration

##### [` parse_from_pathparse_from_path `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Module.parse_from_path>)

parse\_from\_path(*self*) → [lief.\_lief.PE.Binary](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief._lief.PE.Binary") | None

**parse\_from\_path(*self*, *config: [lief.\_lief.PE.ParserConfig](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ParserConfig> "lief._lief.PE.ParserConfig")*) → [lief.\_lief.PE.Binary](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary> "lief._lief.PE.Binary") | None**

Overloaded function.

1. `parse_from_path(self) -> Optional[lief._lief.PE.Binary]`

Parse the PE module from its path on the filesystem

2. `parse_from_path(self, config: lief._lief.PE.ParserConfig) -> Optional[lief._lief.PE.Binary]`

Parse the PE module from its path on the filesystem and given the parser configuration

#### [` lief.runtime.windows.dlopen `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.dlopen>)

lief.runtime.windows.dlopen(*name: str | os.PathLike*) → [lief.runtime.windows.Module](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Module> "lief.runtime.windows.Module") | None

Load the windows library with the given path or name.

#### [` lief.runtime.windows.find_module `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.find_module>)

lief.runtime.windows.find\_module(*name: str*) → [lief.runtime.windows.Module](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Module> "lief.runtime.windows.Module") | None

Try to get the [`Module`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Module> "lief.runtime.windows.Module") with the given name.

Return `None` if the module is not found.

```python
if ntdll := lief.runtime.windows.find_module("ntdll.dll"):
    print(ntdll.path)
```

> **Note**
> 
> This function relies on the Windows API `GetModuleHandle` which is more efficient than the generic implementation [`lief.runtime.module_from_name()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.module_from_name> "lief.runtime.module_from_name").

### [Host](<https://lief.re/doc/latest/runtime/python.html#id11>)

#### [` lief.runtime.windows.Host `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Host>)

class lief.runtime.windows.Host

Bases: `object`

This class exposes Windows-specific host information.

##### [` version `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Host.version>)

version = &lt;lief.\_lief.runtime.windows.Host.version\_t object&gt;

##### [` version_tversion_t `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Host.version_t>)

class version\_t(*self*)

**class version\_t(*self*, *major: int*, *minor: int*, *build\_number: int*)**

Bases: `object`

This class represents a Windows version number.

###### [` build_number `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Host.version_t.build_number>)

property build\_number → int

Build number

###### [` major `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Host.version_t.major>)

property major → int

Major version number

###### [` minor `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Host.version_t.minor>)

property minor → int

Minor version number

### [Injector](<https://lief.re/doc/latest/runtime/python.html#injector>)

#### [` lief.runtime.windows.injection_context_t `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.injection_context_t>)

class lief.runtime.windows.injection\_context\_t(*self*)

Bases: `object`

Describes how to spawn a new process and inject a library into it.

##### [` args `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.injection_context_t.args>)

property args → str

Command-line arguments passed to the spawned process.

##### [` env `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.injection_context_t.env>)

property env → dict[str, str]

Environment variables to set in the spawned process. If left empty, the current process environment is inherited.

##### [` library `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.injection_context_t.library>)

property library → str

Absolute path to the library (DLL) that should be injected.

##### [` target_path `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.injection_context_t.target_path>)

property target\_path → str

Absolute path to the target executable to spawn.

#### [` lief.runtime.windows.inject_spawn `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.inject_spawn>)

lief.runtime.windows.inject\_spawn(*ctx: [lief.runtime.windows.injection\_context\_t](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.injection_context_t> "lief.runtime.windows.injection_context_t")*) → [lief.ok\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_t> "lief.ok_t") | [lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief.lief_errors")

Spawn the target described by the given injection context and inject the associated library before the main thread starts executing.

### [Process](<https://lief.re/doc/latest/runtime/python.html#id12>)

#### [` lief.runtime.windows.Process `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Process>)

class lief.runtime.windows.Process

Bases: [`Process`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Process> "lief._lief.runtime.Process")

This class exposes Windows-specific API for the current process.

##### [` peb `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Process.peb>)

peb = None

### [PEB](<https://lief.re/doc/latest/runtime/python.html#peb>)

#### [` lief.runtime.windows.PEB `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.PEB>)

class lief.runtime.windows.PEB

Bases: `object`

This class exposes a user-friendly interface over the Process Environment Block (PEB) of the current process.

It can be accessed through [`lief.runtime.windows.Process.peb`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Process.peb> "lief.runtime.windows.Process.peb").

##### [` atl_thunk_slist_ptr `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.PEB.atl_thunk_slist_ptr>)

property atl\_thunk\_slist\_ptr → int

Address of the per-process ATL thunk SList (single-linked list).

##### [` atl_thunk_slist_ptr32 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.PEB.atl_thunk_slist_ptr32>)

property atl\_thunk\_slist\_ptr32 → int

32-bit value of the ATL thunk SList pointer.

##### [` being_debugged `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.PEB.being_debugged>)

property being\_debugged → bool

Whether the current process is being debugged.

##### [` entries `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.PEB.entries>)

property entries → Iterator[[lief.runtime.windows.LdrDataTableEntry](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry> "lief.runtime.windows.LdrDataTableEntry") | None]

Iterate over the modules referenced by the loader data of the PEB, in load order, yielding [`LdrDataTableEntry`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry> "lief.runtime.windows.LdrDataTableEntry") objects.

##### [` ldr `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.PEB.ldr>)

property ldr → int

Address of the loader data structure (`PEB_LDR_DATA`) which holds the list of the modules loaded in the current process.

##### [` post_process_init_routine `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.PEB.post_process_init_routine>)

property post\_process\_init\_routine → int

Address of the routine called once the process completed its initialization (`PostProcessInitRoutine`).

##### [` process_parameters `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.PEB.process_parameters>)

property process\_parameters → int

Address of the process parameters (`RTL_USER_PROCESS_PARAMETERS`) which holds information such as the command line or the current directory.

##### [` session_id `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.PEB.session_id>)

property session\_id → int

Session ID associated with the current process.

### [LdrDataTableEntry](<https://lief.re/doc/latest/runtime/python.html#ldrdatatableentry>)

#### [` lief.runtime.windows.LdrDataTableEntry `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry>)

class lief.runtime.windows.LdrDataTableEntry

Bases: `object`

This class exposes a user-friendly interface over a `LDR_DATA_TABLE_ENTRY`, the structure used by the Windows loader to describe a module loaded in the current process.

These entries can be enumerated through [`lief.runtime.windows.PEB.entries()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.PEB.entries> "lief.runtime.windows.PEB.entries").

##### [` active_patch_image_base `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.active_patch_image_base>)

property active\_patch\_image\_base → int | None

Base address of the active hot-patch image, if any.

> **Note**
> 
> Available on Windows 11 and later.

##### [` base_dll_name `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.base_dll_name>)

property base\_dll\_name → str

Base name of the module (`BaseDllName`), e.g. `ntdll.dll`.

##### [` base_name_hash_value `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.base_name_hash_value>)

property base\_name\_hash\_value → int | None

Hash of the module’s base name used to index the loader tables

> **Note**
> 
> Available on Windows 8 and later.

##### [` check_sum `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.check_sum>)

property check\_sum → int | None

Image checksum cached by the loader

> **Note**
> 
> Available on Windows 10 and later.

##### [` ddag_node `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.ddag_node>)

property ddag\_node → int | None

Address of the dependency-graph node of the module (`DdagNode`).

> **Note**
> 
> Available on Windows 8 and later.

##### [` dependent_load_flags `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.dependent_load_flags>)

property dependent\_load\_flags → int | None

Flags controlling how the statically-linked dependencies of the module are loaded.

> **Note**
> 
> Available on Windows 8 and later.

##### [` dll_base `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.dll_base>)

property dll\_base → int

Base address at which the module is mapped in memory (`DllBase`).

##### [` entry_point `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.entry_point>)

property entry\_point → int

Address of the entry point of the module (`EntryPoint`).

##### [` entry_point_activation_context `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.entry_point_activation_context>)

property entry\_point\_activation\_context → int

Address of the activation context associated with the module’s entry point.

##### [` flags `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.flags>)

property flags → int

Loader flags describing the state of the module (`Flags`).

##### [` full_dll_name `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.full_dll_name>)

property full\_dll\_name → str

Full path of the module (`FullDllName`), e.g. `C:\Windows\System32\ntdll.dll`.

##### [` hot_patch_state `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.hot_patch_state>)

property hot\_patch\_state → int | None

State of the hot-patch engine for this module, as a `LDR_HOT_PATCH_STATE` value.

> **Note**
> 
> Available on Windows 11 and later.

##### [` implicit_path_options `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.implicit_path_options>)

property implicit\_path\_options → int | None

Path-search options implied when the module was resolved

> **Note**
> 
> Available on Windows 8 and later.

##### [` load_context `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.load_context>)

property load\_context → int | None

Address of the loader context used while the module is being snapped

> **Note**
> 
> Available on Windows 8 and later.

##### [` load_reason `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.load_reason>)

property load\_reason → int | None

Reason why the module was loaded, as a `LDR_DLL_LOAD_REASON` value

> **Note**
> 
> Available on Windows 8 and later.

##### [` load_time `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.load_time>)

property load\_time → int | None

Time at which the module was loaded.

> **Note**
> 
> Available on Windows 8 and later.

##### [` lock `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.lock>)

property lock → int

Address of the per-entry loader lock.

##### [` obsolete_load_count `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.obsolete_load_count>)

property obsolete\_load\_count → int

Legacy load count of the module (`ObsoleteLoadCount`). Superseded by [`reference_count`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.reference_count> "lief.runtime.windows.LdrDataTableEntry.reference_count") on Windows 8 and later.

##### [` original_base `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.original_base>)

property original\_base → int | None

Preferred base address recorded in the PE headers

> **Note**
> 
> Available on Windows 8 and later.

##### [` parent_dll_base `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.parent_dll_base>)

property parent\_dll\_base → int | None

Base address of the module that triggered the load of this one.

> **Note**
> 
> Available on Windows 8 and later.

##### [` reference_count `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.reference_count>)

property reference\_count → int | None

Number of references currently held on the module.

> **Note**
> 
> Available on Windows 8 and later.

##### [` signing_level `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.signing_level>)

property signing\_level → int | None

Signing level of the module’s image, as a `SE_SIGNING_LEVEL` value

> **Note**
> 
> Available on Windows 10 and later.

##### [` size_of_image `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.size_of_image>)

property size\_of\_image → int

Size (in bytes) of the module’s image in memory (`SizeOfImage`).

##### [` switch_back_context `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.switch_back_context>)

property switch\_back\_context → int | None

Address of the CHPE switch-back context.

> **Note**
> 
> Available on Windows 8 and later.

##### [` time_date_stamp `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.time_date_stamp>)

property time\_date\_stamp → int

`TimeDateStamp` of the module as cached by the loader.

##### [` tls_index `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry.tls_index>)

property tls\_index → int

TLS slot index assigned to the module, or `0` when it has no TLS (`TlsIndex`).

---

## [ARCH](<https://lief.re/doc/latest/runtime/python.html#arch>)

### [` lief.runtime.ARCH `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.ARCH>)

class lief.runtime.ARCH(*\*values*)

Bases: `Enum`

#### [` ARM64 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.ARCH.ARM64>)

ARM64 = 2

#### [` NONE `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.ARCH.NONE>)

NONE = 0

#### [` RISCV64 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.ARCH.RISCV64>)

RISCV64 = 3

#### [` X86_64 `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.ARCH.X86_64>)

X86\_64 = 1

## [PLATFORMS](<https://lief.re/doc/latest/runtime/python.html#platforms>)

### [` lief.runtime.PLATFORMS `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.PLATFORMS>)

class lief.runtime.PLATFORMS(*\*values*)

Bases: `Enum`

#### [` ANDROID `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.PLATFORMS.ANDROID>)

ANDROID = 3

#### [` IOS `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.PLATFORMS.IOS>)

IOS = 5

#### [` LINUX `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.PLATFORMS.LINUX>)

LINUX = 1

#### [` NONE `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.PLATFORMS.NONE>)

NONE = 0

#### [` OSX `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.PLATFORMS.OSX>)

OSX = 4

#### [` WINDOWS `](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.PLATFORMS.WINDOWS>)

WINDOWS = 2
