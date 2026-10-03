---
documentID: "baf3482e620831c80bc16a442923dd32905c8a97813042559b3f9b23106b79e0"
docname: "runtime/components/memory"
title: "Memory - Runtime - LIEF Documentation"
description: "Allocate, read, write, and release process memory with LIEF, then explore platform-specific assembly and disassembly examples."
canonical: "https://lief.re/doc/latest/runtime/components/memory.html"
markdownURL: "https://lief.re/doc/latest/runtime/components/memory.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "070aa5bb24defb2b6b518d135a51f410c26a95050290fac0f2d2bdfc9bae528d"
---

# [Memory](<https://lief.re/doc/latest/runtime/components/memory.html#memory>)

The  `lief.runtime.Memory` ( [`lief::runtime::Memory`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/struct.Memory.html>) ;  [`lief.runtime.Memory`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory>) ;  [`LIEF::runtime::Memory`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6MemoryE>) ) interface exposes an API to allocate, inspect and manipulate memory in the current process. It can be used to map anonymous pages, change their protection, and read or write bytes at valid mapped addresses.

## [Allocate, write, and read memory](<https://lief.re/doc/latest/runtime/components/memory.html#allocate-write-and-read-memory>)

Start with a writable allocation and release it when finished. This Python example uses the process’s page size and checks whether allocation succeeded:

```python
import lief
from lief.runtime import Memory, Process

if not lief.runtime.enabled:
    raise RuntimeError("Install or build LIEF with runtime support")

chunk = Memory.mmap(
    Process.page_size,
    Memory.ANONYMOUS | Memory.PRIVATE,
    Memory.READ | Memory.WRITE,
)
if chunk is None:
    raise RuntimeError("Memory allocation failed")

try:
    message = b"LIEF runtime"
    Memory.write(message, chunk.addr)
    print(Memory.read(chunk.addr, len(message)))
finally:
    chunk.deallocate()
```

The allocation is represented by a  `lief.runtime.Memory.Chunk` ( [`lief::runtime::memory::Chunk`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/memory/struct.Chunk.html>) ;  [`lief.runtime.Memory.Chunk`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.Chunk>) ;  [`LIEF::runtime::Memory::Chunk`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5ChunkE>) ).

If placement matters,  `lief.runtime.Memory.mmap_hint()` ( [`lief::runtime::Memory::mmap_hint`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/struct.Memory.html#method.mmap_hint>) ;  [`lief.runtime.Memory.mmap_hint()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Memory.mmap_hint>) ;  [`LIEF::runtime::Memory::mmap_hint()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory9mmap_hintE8uint64_t6size_t8uint32_t8uint32_t>) ) accepts a preferred address. Always use the address in the returned chunk: a hint does not guarantee the requested location.

## [Generate and inspect code](<https://lief.re/doc/latest/runtime/components/memory.html#generate-and-inspect-code>)

Combined with  `lief.runtime.assemble()` ( [`lief::runtime::assemble`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/fn.assemble.html>) ;  [`lief::runtime::assemble_with_config`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/fn.assemble_with_config.html>) ;  [`lief.runtime.assemble()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.assemble>) ;  [`LIEF::runtime::assemble()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime8assembleE8uint64_tNSt11string_viewERN8assembly15AssemblerConfigE>) ), it enables lightweight JIT code generation directly from LIEF, while  `lief.runtime.disassemble()` ( [`lief::runtime::disassemble`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/fn.disassemble.html>) ;  [`lief.runtime.disassemble()`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.disassemble>) ;  [`LIEF::runtime::disassemble()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime11disassembleE9uintptr_t>) ) can be used to disassemble code directly from memory.

### [Linux x86-64](<https://lief.re/doc/latest/runtime/components/memory.html#linux-x86-64>)

The following snippet allocates a writable and executable page, assembles a small x86-64 stub inside it that prints `LIEF Runtime Extended Demo`, calls the resulting function, and rewrites part of the buffer before invoking it again:

**Python**

```python
chunk = lief.runtime.Memory.mmap(
    lief.runtime.Process.page_size,
    lief.runtime.Memory.ANONYMOUS | lief.runtime.Memory.PRIVATE,
    lief.runtime.Memory.READ | lief.runtime.Memory.WRITE | lief.runtime.Memory.EXEC,
)

raw_inst = lief.runtime.assemble(
    chunk.addr,
    r"""
    .global _start

    .text
    _start:
        push 1
        pop  rax
        mov  edi, eax
        lea  rsi, [rip + msg]
        mov  rdx, 28
        syscall
        ret

    msg:
        .ascii "LIEF Runtime Extended Demo\n"
    """,
)

# Ensure the assembly is correctly JITed at the beginning of the allocated
# memory
for inst in islice(lief.runtime.disassemble(chunk.addr), 7):
    print(inst)

# Dump as raw bytes
raw_bytes = lief.runtime.Memory.read(chunk.addr, len(raw_inst))
print(raw_bytes.hex(":"))

# Change the permission to R-X
chunk.make_rx()

VoidVoidFunc = ctypes.CFUNCTYPE(None)  # void(*)()
hello_jit = VoidVoidFunc(chunk.addr)
hello_jit()

# Change the message
pos = raw_bytes.find(b"LIEF Runtime")
chunk.make_rw()
lief.runtime.Memory.write(b"Hello Python ctypes World!\n", chunk.addr + pos)
chunk.make_rx()

# Print again
hello_jit()

# Don't miss good practices!
chunk.deallocate()
```

**C++**

```cpp
using Mem = LIEF::runtime::Memory;
auto chunk = Mem::mmap(LIEF::runtime::Process::page_size(),
                       Mem::MP_ANONYMOUS | Mem::MP_PRIVATE,
                       Mem::P_READ | Mem::P_WRITE | Mem::P_EXEC);

if (!chunk) {
  return;
}

std::vector<uint8_t> raw_inst = LIEF::runtime::assemble(chunk->addr(), R"asm(
  .global _start

  .text
  _start:
      push 1
      pop  rax
      mov  edi, eax
      lea  rsi, [rip + msg]
      mov  rdx, 28
      syscall
      ret

  msg:
      .ascii "LIEF Runtime Extended Demo\n"
)asm");

// Change the permission to R-X and invoke the JITed function
chunk->make_rx();

using shellcode_t = void (*)();
auto hello_jit = reinterpret_cast<shellcode_t>(chunk->addr());
hello_jit();

const char new_msg[] = "Hello C++ runtime World!\n\0";
std::string_view view_inst(reinterpret_cast<const char*>(raw_inst.data()),
                           raw_inst.size());
size_t pos = view_inst.find("LIEF Runtime Extended");
assert(pos != std::string_view::npos);
chunk->make_rw();
Mem::write(reinterpret_cast<const uint8_t*>(new_msg), sizeof(new_msg) - 1,
           chunk->addr() + pos);
chunk->make_rx();

hello_jit();

// Don't miss good practices!
(void)chunk->deallocate();
```

**Rust**

```rust
let mut chunk = match runtime::Memory::mmap(
    runtime::Process::page_size() as u64,
    MmapFlags::ANONYMOUS | MmapFlags::PRIVATE,
    Perm::READ | Perm::WRITE | Perm::EXEC,
) {
    Some(c) => c,
    None => return,
};

let raw_inst = runtime::assemble(
    chunk.addr(),
    r#"
    .global _start

    .text
    _start:
        push 1
        pop  rax
        mov  edi, eax
        lea  rsi, [rip + msg]
        mov  rdx, 28
        syscall
        ret

    msg:
        .ascii "LIEF Runtime Extended Demo\n"
    "#,
);

// Dump the generated instruction bytes
println!(
    "{} bytes assembled at {:#010x}",
    raw_inst.len(),
    chunk.addr()
);

// Change the permission to R-X and invoke the JITed function
chunk.make_rx();

let hello_jit: unsafe extern "C" fn() = unsafe { std::mem::transmute(chunk.addr() as usize) };
unsafe { hello_jit() };

// Locate the message in the generated bytes and rewrite it.
let needle = b"LIEF Runtime";
if let Some(msg_off) = raw_inst.windows(needle.len()).position(|w| w == needle) {
    let new_msg = b"Hello Rust runtime World!\n\0";
    chunk.make_rw();
    unsafe {
        let dst = (chunk.addr() as usize + msg_off) as *mut u8;
        std::ptr::copy_nonoverlapping(new_msg.as_ptr(), dst, new_msg.len() - 1);
    }
    chunk.make_rx();
    unsafe { hello_jit() };
}

// Don't miss good practices!
let _ = chunk.deallocate();
```

### [Windows ARM64](<https://lief.re/doc/latest/runtime/components/memory.html#windows-arm64>)

> **x86-64**
> 
> This part focuses on the ARM64 architecture but it works in the exact same way for Windows x86-64.

Similarly, we can JIT a `Hello World` shellcode on Windows ARM64 with the following snippet:

**Python**

```python
chunk = lief.runtime.Memory.mmap(
    lief.runtime.Process.page_size,
    lief.runtime.Memory.ANONYMOUS | lief.runtime.Memory.PRIVATE,
    lief.runtime.Memory.READ | lief.runtime.Memory.WRITE | lief.runtime.Memory.EXEC,
)

# The message printed by the shellcode. It must stay alive while the JITed
# function runs, so we keep a reference for the whole function.
MSG = b"Hello World\n"
msg = ctypes.create_string_buffer(MSG)

# The assembler resolves the symbols referenced by the shellcode through
# this config, mirroring the C++ ``AssemblerConfig::resolve_symbol`` override.
class Config(lief.assembly.AssemblerConfig):
    def resolve_symbol(self, name: str) -> int | None:
        kernel32 = lief.runtime.windows.dlopen("kernel32.dll")
        if kernel32 is None:
            print("Failed to dlopen kernel32.dll", file=sys.stderr)
            return None

        # Resolve the symbols that are used by the shellcode
        if name == "GetStdHandle":
            return lief.to_int(kernel32.dlsym("GetStdHandle"))
        if name == "WriteFile":
            return lief.to_int(kernel32.dlsym("WriteFile"))
        if name == "var_msg":
            return ctypes.addressof(msg)
        if name == "var_msg_len":
            return len(MSG)
        return None

config = Config()

# Shellcode dynamically compiled and whose referenced symbols are resolved
# at runtime by the provided config
lief.runtime.assemble(
    chunk.addr,
    r"""
    .text
        .global main
        .align 2

    main:
        stp     x29, x30, [sp, -64]!
        mov     x29, sp
        stp     x19, x20, [sp, 16]
        stp     x21, x22, [sp, 32]

        // Here we use symbols that are **dynamically** resolved by the
        // AssemblerConfig
        ldr     x19, =GetStdHandle
        ldr     x20, =WriteFile
        ldr     x21, =var_msg
        ldr     w22, =var_msg_len

        // Call GetStdHandle(STD_OUTPUT_HANDLE)
        // STD_OUTPUT_HANDLE = -11
        // GetStdHandle is stored in x19
        mov     w0, -11
        blr     x19

        // Call ---> bool WriteFile(
        //   HANDLE  hConsoleOutput,        // x0: from GetStdHandle (already set)
        //   const VOID *lpBuffer,          // x1: pointer to string
        //   DWORD   nNumberOfCharsToWrite, // w2: length of string
        //   LPDWORD lpNumberOfCharsWritten,// x3: pointer to written count
        //   LPVOID  lpReserved             // x4: NULL
        // );
        mov     x1, x21
        mov     w2, w22
        add     x3, sp, 48
        mov     x4, xzr
        blr     x20

        mov     x0, xzr
        ldp     x21, x22, [sp, 32]
        ldp     x19, x20, [sp, 16]
        ldp     x29, x30, [sp], 64
        ret
    """,
    config,
)

# Flush the instruction cache
chunk.cache_flush()

# Change the permission to R-X and invoke the JITed function
chunk.make_rx()

void_void_func = ctypes.CFUNCTYPE(None)  # void(*)()
hello_jit = void_void_func(chunk.addr)

# This call prints the message "Hello World" on the console
hello_jit()

# Don't miss good practices!
chunk.deallocate()
```

**C++**

```cpp
using Mem = LIEF::runtime::Memory;
auto chunk = Mem::mmap(LIEF::runtime::Process::page_size(),
                       Mem::MP_ANONYMOUS | Mem::MP_PRIVATE,
                       Mem::P_READ | Mem::P_WRITE | Mem::P_EXEC);

if (!chunk) {
  return;
}

class Config : public LIEF::assembly::AssemblerConfig {
  public:
  std::optional<uint64_t> resolve_symbol(std::string_view name) override {
    // The message to print
    static constexpr char HELLO[] = "Hello World\n";
    static constexpr uint32_t HELLO_LEN = sizeof(HELLO) - 1;

    static auto kernel32 = LIEF::runtime::windows::dlopen("kernel32.dll");

    if (kernel32 == nullptr) {
      err("Failed to dlopen kernel32.dll");
      return std::nullopt;
    }

    // Resolve the symbols that are used by the shellcode
    if (name == "GetStdHandle") {
      return reinterpret_cast<uint64_t>(kernel32->dlsym("GetStdHandle"));
    }

    if (name == "WriteFile") {
      return reinterpret_cast<uint64_t>(kernel32->dlsym("WriteFile"));
    }

    if (name == "var_msg") {
      return reinterpret_cast<uint64_t>(HELLO);
    }

    if (name == "var_msg_len") {
      return HELLO_LEN;
    }

    return std::nullopt;
  }
};

Config config;

// clang-format off

// Shellcode dynamically compiled and whose referenced symbols are resolved
// at runtime by the provided Config
std::vector<uint8_t> raw_inst = LIEF::runtime::assemble(chunk->addr(), R"asm(
  .text
      .global main
      .align 2

  main:
      stp     x29, x30, [sp, -64]!
      mov     x29, sp
      stp     x19, x20, [sp, 16]
      stp     x21, x22, [sp, 32]

      // Here we use symbols that are **dynamically** resolved by the
      // AssemblerConfig
      ldr     x19, =GetStdHandle
      ldr     x20, =WriteFile
      ldr     x21, =var_msg
      ldr     w22, =var_msg_len

      // Call GetStdHandle(STD_OUTPUT_HANDLE)
      // STD_OUTPUT_HANDLE = -11
      // GetStdHandle is stored in x19
      mov     w0, -11
      blr     x19

      // Call ---> bool WriteFile(
      //   HANDLE  hConsoleOutput,        // x0: from GetStdHandle (already set)
      //   const VOID *lpBuffer,          // x1: pointer to string
      //   DWORD   nNumberOfCharsToWrite, // w2: length of string
      //   LPDWORD lpNumberOfCharsWritten,// x3: pointer to written count
      //   LPVOID  lpReserved             // x4: NULL
      // );
      mov     x1, x21
      mov     w2, w22
      add     x3, sp, 48
      mov     x4, xzr
      blr     x20

      mov     x0, xzr
      ldp     x21, x22, [sp, 32]
      ldp     x19, x20, [sp, 16]
      ldp     x29, x30, [sp], 64
      ret
)asm", config);
// clang-format on

// Flush the instruction cache
chunk->cache_flush();

// Change the permission to R-X and invoke the JITed function.
chunk->make_rx();

using shellcode_t = void (*)();
auto hello_jit = reinterpret_cast<shellcode_t>(chunk->addr());

// This call prints the message "Hello World" on the console
hello_jit();

// Don't miss good practices!
(void)chunk->deallocate();
```

**Rust**

```rust
let mut chunk = match runtime::Memory::mmap(
    runtime::Process::page_size() as u64,
    MmapFlags::ANONYMOUS | MmapFlags::PRIVATE,
    Perm::READ | Perm::WRITE | Perm::EXEC,
) {
    Some(c) => c,
    None => return,
};

// Resolve kernel32 (loaded in every Windows process)
let kernel32 = match runtime::windows::dlopen("kernel32.dll") {
    Some(m) => m,
    None => {
        eprintln!("Failed to dlopen kernel32.dll");
        let _ = chunk.deallocate();
        return;
    }
};

let p_get_std_handle = kernel32.dlsym("GetStdHandle".to_string());
let p_write_file = kernel32.dlsym("WriteFile".to_string());
if p_get_std_handle.is_null() || p_write_file.is_null() {
    eprintln!("Failed to resolve kernel32 symbols");
    let _ = chunk.deallocate();
    return;
}
let p_get_std_handle = p_get_std_handle as u64;
let p_write_file = p_write_file as u64;

// The message printed by the shellcode.
const HELLO: &[u8] = b"Hello World\n";
let msg_ptr = HELLO.as_ptr() as u64;
let msg_len = HELLO.len() as u64;

let mut config = AssemblerConfig::default();
config.symbol_resolver = Some(Arc::new(move |name: &str| -> Option<u64> {
    match name {
        "GetStdHandle" => Some(p_get_std_handle),
        "WriteFile" => Some(p_write_file),
        "var_msg" => Some(msg_ptr),
        "var_msg_len" => Some(msg_len),
        _ => None,
    }
}));

// Shellcode dynamically compiled and whose referenced symbols are resolved
// at runtime by the provided config
let raw_inst = runtime::assemble_with_config(
    chunk.addr(),
    r#"
    .text
        .global main
        .align 2

    main:
        stp     x29, x30, [sp, -64]!
        mov     x29, sp
        stp     x19, x20, [sp, 16]
        stp     x21, x22, [sp, 32]

        // Here we use symbols that are **dynamically** resolved by the
        // AssemblerConfig
        ldr     x19, =GetStdHandle
        ldr     x20, =WriteFile
        ldr     x21, =var_msg
        ldr     w22, =var_msg_len

        // Call GetStdHandle(STD_OUTPUT_HANDLE)
        // STD_OUTPUT_HANDLE = -11
        // GetStdHandle is stored in x19
        mov     w0, -11
        blr     x19

        // Call ---> bool WriteFile(
        //   HANDLE  hConsoleOutput,        // x0: from GetStdHandle (already set)
        //   const VOID *lpBuffer,          // x1: pointer to string
        //   DWORD   nNumberOfCharsToWrite, // w2: length of string
        //   LPDWORD lpNumberOfCharsWritten,// x3: pointer to written count
        //   LPVOID  lpReserved             // x4: NULL
        // );
        mov     x1, x21
        mov     w2, w22
        add     x3, sp, 48
        mov     x4, xzr
        blr     x20

        mov     x0, xzr
        ldp     x21, x22, [sp, 32]
        ldp     x19, x20, [sp, 16]
        ldp     x29, x30, [sp], 64
        ret
    "#,
    &config,
);

println!(
    "{} bytes assembled at {:#010x}",
    raw_inst.len(),
    chunk.addr()
);

// Flush the instruction cache
chunk.cache_flush();

// Change the permission to R-X and invoke the JITed function
chunk.make_rx();

let hello_jit: unsafe extern "C" fn() = unsafe { std::mem::transmute(chunk.addr() as usize) };

// This call prints the message "Hello World" on the console
unsafe { hello_jit() };

// Don't miss good practices!
let _ = chunk.deallocate();
```

Note that this shellcode uses the external functions `GetStdHandle` and `WriteFile` that are **dynamically** resolved and injected into the shellcode **at runtime**. The shellcode is thus generated with dynamic information that would otherwise have been tedious to resolve at the assembly level.

### [macOS ARM64](<https://lief.re/doc/latest/runtime/components/memory.html#macos-arm64>)

> **SIP**
> 
> Allocating and executing JIT memory on macOS requires System Integrity Protection (SIP) to be disabled. The snippet below therefore only runs the JIT part when  `lief.runtime.osx.Host.is_sip_enabled` ( [`lief::runtime::osx::Host::is_sip_enabled`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/osx/struct.Host.html#method.is_sip_enabled>) ;  [`lief.runtime.osx.Host.is_sip_enabled`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.is_sip_enabled>) ;  [`LIEF::runtime::osx::Host::is_sip_enabled()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host14is_sip_enabledEv>) ) reports that SIP is disabled.

Similarly, we can JIT a `Hello World` shellcode on macOS ARM64. The shellcode calls `write`, which is **dynamically** resolved from `libSystem` at runtime:

**Python**

```python
# The JIT below allocates and executes RWX memory. On macOS this is only
# permitted when SIP is disabled, so we check it before.
if lief.runtime.osx.Host.is_sip_enabled:
    print("SIP is enabled: skipping the JIT memory example", file=sys.stderr)
    return

# Note the `JIT` flag here that is used to switch the allocated chunk into
# R-X once the shellcode is committed.
chunk = lief.runtime.Memory.mmap(
    lief.runtime.Process.page_size,
    lief.runtime.Memory.ANONYMOUS
    | lief.runtime.Memory.PRIVATE
    | lief.runtime.Memory.JIT,
    lief.runtime.Memory.READ | lief.runtime.Memory.WRITE,
)

# The message printed by the shellcode. It must stay alive while the JITed
# function runs, so we keep a reference for the whole function.
MSG = b"Hello World\n"
msg = ctypes.create_string_buffer(MSG)

# libSystem re-exports the libc symbols (write, ...)
libsystem = lief.runtime.osx.dlopen("libSystem.B.dylib")

# The assembler resolves the symbols referenced by the shellcode through
# this config, mirroring the C++ ``AssemblerConfig::resolve_symbol`` override.
class Config(lief.assembly.AssemblerConfig):
    def resolve_symbol(self, name: str) -> int | None:
        if libsystem is None:
            print("Failed to dlopen libSystem.B.dylib", file=sys.stderr)
            return None

        # Resolve the symbols that are used by the shellcode
        if name == "write":
            return lief.to_int(libsystem.dlsym("write"))
        if name == "var_msg":
            return ctypes.addressof(msg)
        if name == "var_msg_len":
            return len(MSG)
        return None

config = Config()

# Shellcode dynamically compiled and whose referenced symbols are resolved
# at runtime by the provided config
lief.runtime.assemble(
    chunk.addr,
    r"""
    .text
        .global main
        .align 2

    main:
        stp     x29, x30, [sp, -16]!
        mov     x29, sp

        // Here we use symbols that are **dynamically** resolved by the
        // AssemblerConfig
        ldr     x8, =write          // write(2) libc wrapper
        ldr     x1, =var_msg        // buffer
        ldr     w2, =var_msg_len    // length

        // write(STDOUT_FILENO, msg, len)
        mov     x0, 1
        blr     x8

        mov     x0, xzr
        ldp     x29, x30, [sp], 16
        ret
    """,
    config,
)

# Flush the instruction cache
chunk.cache_flush()

# Change the permission to R-X and invoke the JITed function
chunk.make_rx()

void_void_func = ctypes.CFUNCTYPE(None)  # void(*)()
hello_jit = void_void_func(chunk.addr)

# This call prints the message "Hello World" on the console
hello_jit()

# Don't miss good practices!
chunk.deallocate()
```

**C++**

```cpp
// The JIT below allocates and executes RWX memory. On macOS this is only
// permitted when SIP is disabled.
if (LIEF::runtime::osx::Host::is_sip_enabled()) {
  warn("SIP is enabled: skipping the JIT memory example");
  return;
}

using Mem = LIEF::runtime::Memory;
// Note the `MP_JIT` here that is used to switch the allocated chunk into R-X
// once the shellcode is committed.
auto chunk = Mem::mmap(LIEF::runtime::Process::page_size(),
                       Mem::MP_ANONYMOUS | Mem::MP_PRIVATE | Mem::MP_JIT,
                       Mem::P_READ | Mem::P_WRITE);

if (!chunk) {
  return;
}

class Config : public LIEF::assembly::AssemblerConfig {
  public:
  std::optional<uint64_t> resolve_symbol(std::string_view name) override {
    // The message to print
    static constexpr char HELLO[] = "Hello World\n";
    static constexpr uint32_t HELLO_LEN = sizeof(HELLO) - 1;

    // libSystem re-exports the libc symbols (write, ...)
    static auto libsystem = LIEF::runtime::osx::dlopen("libSystem.B.dylib");

    if (libsystem == nullptr) {
      err("Failed to dlopen libSystem.B.dylib");
      return std::nullopt;
    }

    // Resolve the symbols that are used by the shellcode
    if (name == "write") {
      return reinterpret_cast<uint64_t>(libsystem->dlsym("write"));
    }

    if (name == "var_msg") {
      return reinterpret_cast<uint64_t>(HELLO);
    }

    if (name == "var_msg_len") {
      return HELLO_LEN;
    }

    return std::nullopt;
  }
};

Config config;

// clang-format off

// Shellcode dynamically compiled and whose referenced symbols are resolved
// at runtime by the provided Config
std::vector<uint8_t> raw_inst = LIEF::runtime::assemble(chunk->addr(), R"asm(
  .text
      .global main
      .align 2

  main:
      stp     x29, x30, [sp, -16]!
      mov     x29, sp

      // Here we use symbols that are **dynamically** resolved by the
      // AssemblerConfig
      ldr     x8, =write          // write(2) libc wrapper
      ldr     x1, =var_msg        // buffer
      ldr     w2, =var_msg_len    // length

      // write(STDOUT_FILENO, msg, len)
      mov     x0, 1
      blr     x8

      mov     x0, xzr
      ldp     x29, x30, [sp], 16
      ret
)asm", config);
// clang-format on

// Flush the instruction cache
chunk->cache_flush();

// Change the permission to R-X and invoke the JITed function.
chunk->make_rx();

using shellcode_t = void (*)();
auto hello_jit = reinterpret_cast<shellcode_t>(chunk->addr());

// This call prints the message "Hello World" on the console
hello_jit();

// Don't miss good practices!
(void)chunk->deallocate();
```

**Rust**

```rust
// The JIT below allocates and executes RWX memory. On macOS this is only
// permitted when System Integrity Protection (SIP) is disabled, so gate the
// example on it.
if runtime::osx::Host::is_sip_enabled() {
    eprintln!("SIP is enabled: skipping the JIT memory example");
    return;
}

// Note the `JIT` flag here that is used to switch the allocated chunk into
// R-X once the shellcode is committed.
let mut chunk = match runtime::Memory::mmap(
    runtime::Process::page_size() as u64,
    MmapFlags::ANONYMOUS | MmapFlags::PRIVATE | MmapFlags::JIT,
    Perm::READ | Perm::WRITE,
) {
    Some(c) => c,
    None => return,
};

// libSystem re-exports the libc symbols (write, ...)
let libsystem = match runtime::osx::dlopen("libSystem.B.dylib") {
    Some(m) => m,
    None => {
        eprintln!("Failed to dlopen libSystem.B.dylib");
        let _ = chunk.deallocate();
        return;
    }
};

let p_write = libsystem.dlsym("write".to_string());
if p_write.is_null() {
    eprintln!("Failed to resolve write");
    let _ = chunk.deallocate();
    return;
}
let p_write = p_write as u64;

// The message printed by the shellcode.
const HELLO: &[u8] = b"Hello World\n";
let msg_ptr = HELLO.as_ptr() as u64;
let msg_len = HELLO.len() as u64;

let mut config = AssemblerConfig::default();
config.symbol_resolver = Some(Arc::new(move |name: &str| -> Option<u64> {
    match name {
        "write" => Some(p_write),
        "var_msg" => Some(msg_ptr),
        "var_msg_len" => Some(msg_len),
        _ => None,
    }
}));

// Shellcode dynamically compiled and whose referenced symbols are resolved
// at runtime by the provided config
let raw_inst = runtime::assemble_with_config(
    chunk.addr(),
    r#"
    .text
        .global main
        .align 2

    main:
        stp     x29, x30, [sp, -16]!
        mov     x29, sp

        // Here we use symbols that are **dynamically** resolved by the
        // AssemblerConfig
        ldr     x8, =write          // write(2) libc wrapper
        ldr     x1, =var_msg        // buffer
        ldr     w2, =var_msg_len    // length

        // write(STDOUT_FILENO, msg, len)
        mov     x0, 1
        blr     x8

        mov     x0, xzr
        ldp     x29, x30, [sp], 16
        ret
    "#,
    &config,
);

println!(
    "{} bytes assembled at {:#010x}",
    raw_inst.len(),
    chunk.addr()
);

// Flush the instruction cache
chunk.cache_flush();

// Change the permission to R-X and invoke the JITed function
chunk.make_rx();

let hello_jit: unsafe extern "C" fn() = unsafe { std::mem::transmute(chunk.addr() as usize) };

// This call prints the message "Hello World" on the console
unsafe { hello_jit() };

// Don't miss good practices!
let _ = chunk.deallocate();
```

### [Android ARM64](<https://lief.re/doc/latest/runtime/components/memory.html#android-arm64>)

Similarly, we can JIT a small AArch64 stub on Android to print `LIEF Runtime Extended Demo`. The Python tab calls `write`, which is **dynamically** resolved from Bionic `libc` at runtime:

**Python**

```python
chunk = lief.runtime.Memory.mmap(
    lief.runtime.Process.page_size,
    lief.runtime.Memory.ANONYMOUS | lief.runtime.Memory.PRIVATE,
    lief.runtime.Memory.READ | lief.runtime.Memory.WRITE | lief.runtime.Memory.EXEC,
)

class Config(lief.assembly.AssemblerConfig):
    def resolve_symbol(self, name: str) -> int | None:
        libc = lief.runtime.android.dlopen("libc.so")
        if libc is None:
            print("Failed to dlopen libc.so", file=sys.stderr)
            return None

        if name == "write":
            return lief.to_int(libc.dlsym("write"))
        return None

config = Config()

raw_inst = lief.runtime.assemble(
    chunk.addr,
    r"""
    .text
        .global main
        .align 2

    main:
        stp     x29, x30, [sp, -16]!
        mov     x29, sp

        ldr     x8, =write

        mov     x0, 1    // STDOUT_FILENO
        adr     x1, msg  // buf = &msg
        mov     x2, 27   // len = len("LIEF Runtime Extended Demo\n")
        blr     x8       // write(STDOUT_FILENO, msg, 27)

        ldp     x29, x30, [sp], 16
        ret

    msg:
        .ascii "LIEF Runtime Extended Demo\n"
    """,
    config,
)

# Disassemble the JITed stub from memory
for inst in islice(lief.runtime.disassemble(chunk.addr), 9):
    print(inst)

# Dump as raw bytes
raw_bytes = lief.runtime.Memory.read(chunk.addr, len(raw_inst))
print(raw_bytes.hex(":"))

# Flush the instruction cache before executing the freshly written code
# (this is required on AArch64).
chunk.cache_flush()

# Change the permission to R-X
chunk.make_rx()

VoidVoidFunc = ctypes.CFUNCTYPE(None)  # void(*)()
hello_jit = VoidVoidFunc(chunk.addr)
hello_jit()

# Change the message
pos = raw_bytes.find(b"LIEF Runtime")
chunk.make_rw()
lief.runtime.Memory.write(b"Hello Python ctypes World!\n", chunk.addr + pos)
chunk.make_rx()
chunk.cache_flush()

# Print again
hello_jit()

# Don't miss good practices!
chunk.deallocate()
```

**C++**

```cpp
using Mem = LIEF::runtime::Memory;
auto chunk = Mem::mmap(LIEF::runtime::Process::page_size(),
                       Mem::MP_ANONYMOUS | Mem::MP_PRIVATE,
                       Mem::P_READ | Mem::P_WRITE | Mem::P_EXEC);

if (!chunk) {
  return;
}

struct Config : LIEF::assembly::AssemblerConfig {
  std::optional<uint64_t> resolve_symbol(std::string_view name) override {
    std::unique_ptr<LIEF::runtime::android::Module> libc =
        LIEF::runtime::android::dlopen("libc.so");
    if (libc == nullptr) {
      err("Failed to dlopen libc.so");
      return std::nullopt;
    }

    if (name == "write") {
      return reinterpret_cast<uintptr_t>(libc->dlsym("write"));
    }
    return std::nullopt;
  }
} config;

std::vector<uint8_t> raw_inst = LIEF::runtime::assemble(chunk->addr(), R"asm(
.text
    .global main
    .align 2

main:
    stp     x29, x30, [sp, -16]!
    mov     x29, sp

    ldr     x8, =write

    mov     x0, 1    // STDOUT_FILENO
    adr     x1, msg  // buf = &msg
    mov     x2, 27   // len("LIEF Runtime Extended Demo\n")
    blr     x8       // write(STDOUT_FILENO, msg, 27)

    ldp     x29, x30, [sp], 16
    ret

msg:
    .ascii "LIEF Runtime Extended Demo\n"
)asm",
                                                        config);

// Disassemble the JITed stub from memory
auto instructions = LIEF::runtime::disassemble(chunk->addr());
for (const LIEF::assembly::Instruction& inst :
     instructions | std::views::take(9))
{
  info("{}", inst.to_string());
}

// Dump as raw bytes
std::vector<uint8_t> raw_bytes;
Mem::read(chunk->addr(), raw_bytes, raw_inst.size());
std::string hex_bytes;
for (uint8_t byte : raw_bytes) {
  if (!hex_bytes.empty()) {
    hex_bytes += ':';
  }
  hex_bytes += std::format("{:02x}", static_cast<unsigned>(byte));
}
info("{}", hex_bytes);

// Flush the instruction cache before executing the freshly written code.
// This is required on AArch64.
chunk->cache_flush();

// Change the permission to R-X and invoke the JITed function
chunk->make_rx();

using shellcode_t = void (*)();
auto hello_jit = reinterpret_cast<shellcode_t>(chunk->addr());
hello_jit();

// Change the message
const char new_msg[] = "Hello C++ runtime World!\n";
std::string_view view_inst(reinterpret_cast<const char*>(raw_inst.data()),
                           raw_inst.size());
size_t pos = view_inst.find("LIEF Runtime");
assert(pos != std::string_view::npos);
chunk->make_rw();
Mem::write(reinterpret_cast<const uint8_t*>(new_msg), sizeof(new_msg) - 1,
           chunk->addr() + pos);
chunk->make_rx();
chunk->cache_flush();

hello_jit();

// Don't miss good practices!
(void)chunk->deallocate();
```

**Rust**

```rust
let mut chunk = match runtime::Memory::mmap(
    runtime::Process::page_size() as u64,
    MmapFlags::ANONYMOUS | MmapFlags::PRIVATE,
    Perm::READ | Perm::WRITE | Perm::EXEC,
) {
    Some(c) => c,
    None => return,
};

let mut config = AssemblerConfig::default();
config.symbol_resolver = Some(Arc::new(|name: &str| -> Option<u64> {
    let libc = match runtime::android::dlopen("libc.so") {
        Some(lib) => lib,
        None => {
            eprintln!("Failed to dlopen libc.so");
            return None;
        }
    };

    if name == "write" {
        return Some(libc.dlsym("write".to_string()) as usize as u64);
    }
    None
}));

let raw_inst = runtime::assemble_with_config(
    chunk.addr(),
    r#"
    .text
        .global main
        .align 2

    main:
        stp     x29, x30, [sp, -16]!
        mov     x29, sp

        ldr     x8, =write

        mov     x0, 1    // STDOUT_FILENO
        adr     x1, msg  // buf = &msg
        mov     x2, 27   // len("LIEF Runtime Extended Demo\n")
        blr     x8       // write(STDOUT_FILENO, msg, 27)

        ldp     x29, x30, [sp], 16
        ret

    msg:
        .ascii "LIEF Runtime Extended Demo\n"
    "#,
    &config,
);

// Disassemble the JITed stub from memory
for inst in runtime::disassemble(chunk.addr()).take(9) {
    println!("{}", inst);
}

// Dump the JITed stub as raw bytes
let hex_bytes: Vec<String> = raw_inst.iter().map(|&b| format!("{:02x}", b)).collect();
println!("{}", hex_bytes.join(":"));

// Flush the instruction cache before executing the freshly written code
// (this is required on AArch64).
chunk.cache_flush();

// Change the permission to R-X and invoke the JITed function
chunk.make_rx();

let hello_jit: unsafe extern "C" fn() = unsafe { std::mem::transmute(chunk.addr() as usize) };
unsafe { hello_jit() };

// Change the message: locate it in the generated bytes and rewrite it.
let needle = b"LIEF Runtime";
if let Some(msg_off) = raw_inst.windows(needle.len()).position(|w| w == needle) {
    let new_msg = b"Hello Rust runtime World!\n";
    chunk.make_rw();
    unsafe {
        let dst = (chunk.addr() as usize + msg_off) as *mut u8;
        std::ptr::copy_nonoverlapping(new_msg.as_ptr(), dst, new_msg.len());
    }
    chunk.make_rx();
    chunk.cache_flush();
    unsafe { hello_jit() };
}

// Don't miss good practices!
let _ = chunk.deallocate();
```
