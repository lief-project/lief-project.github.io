---
documentID: "dcb21aea2e98b1d6911a096db20ecfc07520ef1f2b4596ea86a4c337b8492e63"
docname: "runtime/cpp"
title: "Runtime C++ API - LIEF Documentation"
description: "Runtime C++ API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/runtime/cpp.html"
markdownURL: "https://lief.re/doc/latest/runtime/cpp.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "16ac44aa1d3b7c3e9eefdbd1bfdeaa4469538b05e9ad61c9057e87f7056da89b"
---

# [C++](<https://lief.re/doc/latest/runtime/cpp.html#c>)

## [Utilities](<https://lief.re/doc/latest/runtime/cpp.html#utilities>)

### [` LIEF::runtime::is_enabled `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime10is_enabledEv>)

static bool LIEF::runtime::is\_enabled()

Whether the runtime features are enabled.

### [` LIEF::runtime::platform `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime8platformEv>)

static [PLATFORMS](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime9PLATFORMSE> "LIEF::runtime::PLATFORMS") LIEF::runtime::platform()

Platform for which the runtime is compiled.

### [` LIEF::runtime::arch `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime4archEv>)

static [ARCH](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime4ARCHE> "LIEF::runtime::ARCH") LIEF::runtime::arch()

Architecture for which the runtime is compiled.

### [` LIEF::runtime::modules `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7modulesEv>)

modules\_t LIEF::runtime::modules()

Return an iterator over the different modules loaded in the current process.

### [` LIEF::runtime::assemble `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime8assembleE8uint64_tNSt11string_viewERN8assembly15AssemblerConfigE>)

std::vector&lt;uint8\_t&gt; LIEF::runtime::assemble(uint64\_t addr, std::string\_view Asm, assembly::[AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigE> "LIEF::assembly::AssemblerConfig") &amp;config = assembly::[AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigE> "LIEF::assembly::AssemblerConfig")::[default\_config](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig14default_configEv> "LIEF::assembly::AssemblerConfig::default_config")())

Assemble the provided assembly code at the specified (absolute) virtual address.

The function returns the generated assembly bytes.

```cpp
#include <LIEF/runtime.hpp>

auto code = LIEF::runtime::assemble(0x7f0011223344, R"(
  xor rax, rbx;
  mov rcx, rax;
)");
```

If you need to configure the assembly engine or to define addresses for symbols, you can provide your own [assembly::AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#classLIEF_1_1assembly_1_1AssemblerConfig>) instance.

### [` LIEF::runtime::disassemble `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime11disassembleE9uintptr_t>)

instructions\_it LIEF::runtime::disassemble(uintptr\_t addr)

Start disassembling instructions at the given **absolute** virtual address.

```cpp
for (const auto& inst : disassemble(0x7f0011223344)) {
  std::cout << inst.to_string() << '\n';
}
```

---

## [Process](<https://lief.re/doc/latest/runtime/cpp.html#process>)

### [` Process `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7ProcessE>)

class Process

This structure represents the current process and provides functions to query process-level information.

Subclassed by [LIEF::runtime::Linux::Process](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1Linux_1_1Process>), [LIEF::runtime::android::Process](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1android_1_1Process>), [LIEF::runtime::osx::Process](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1osx_1_1Process>), [LIEF::runtime::windows::Process](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1windows_1_1Process>)

Public Static Functions

#### [` pid `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7Process3pidEv>)

static int32\_t pid()

Get the [Process](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1Process>) ID of the current process.

#### [` tid `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7Process3tidEv>)

static uint32\_t tid()

Get the Thread ID of the current thread.

#### [` arch `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7Process4archEv>)

static inline [ARCH](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime4ARCHE> "LIEF::runtime::ARCH") arch()

Return the target architecture of the current process.

#### [` platform `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7Process8platformEv>)

static inline [PLATFORMS](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime9PLATFORMSE> "LIEF::runtime::PLATFORMS") platform()

Return the target platform of the current process.

#### [` page_size `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7Process9page_sizeEv>)

static uint32\_t page\_size()

Return the number of bytes in a memory page.

For instance:

- `0x1000` (4096 bytes) for x86\_64
- `0x4000` (16384 bytes) for ARM64

#### [` get_env `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7Process7get_envERKNSt6stringE>)

static std::optional&lt;std::string&gt; get\_env(const std::string &amp;key)

Return the environment variable associated with the given key.

#### [` get_envs `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7Process8get_envsEv>)

static [EnvVars](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7Process7EnvVarsE> "LIEF::runtime::Process::EnvVars") get\_envs()

Return the environment variables present in the current process.

#### [` default_engine `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7Process14default_engineEv>)

static assembly::[Engine](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6EngineE> "LIEF::assembly::Engine") \*default\_engine()

Return the assembler/disassembler for the current process.

#### [` EnvVars `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7Process7EnvVarsE>)

struct EnvVars

This structure wraps environment variables.

Public Functions

##### [` empty `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7Process7EnvVars5emptyEv>)

inline bool empty() const

Public Members

##### [` vars `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7Process7EnvVars4varsE>)

std::unordered\_map&lt;std::string, std::string&gt; vars

---

## [Host](<https://lief.re/doc/latest/runtime/cpp.html#host>)

### [` Host `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime4HostE>)

class Host

This class represents the current host.

Public Static Functions

#### [` name `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime4Host4nameEv>)

static std::string name()

The machine hostname.

#### [` home_dir `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime4Host8home_dirEv>)

static std::string home\_dir()

The user home dir (e.g. `/home/romain` or `C:\Users\romain`).

#### [` tmp_dir `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime4Host7tmp_dirEv>)

static std::string tmp\_dir()

Temporary directory.

This function looks at the environment variables to determine the suitable temp directory (e.g. `TEMP`, `TMPDIR`)

#### [` config_dir `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime4Host10config_dirEv>)

static std::string config\_dir()

The directory to store user-specific configuration.

#### [` cache_dir `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime4Host9cache_dirEv>)

static std::string cache\_dir()

The directory where software should store their cache files (e.g. `$HOME/.cache`).

---

## [Module](<https://lief.re/doc/latest/runtime/cpp.html#module>)

### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE>)

class Module

This class represents an in-memory module which can be an executable or a library.

Subclassed by [LIEF::runtime::Linux::Module](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1Linux_1_1Module>), [LIEF::runtime::android::Module](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1android_1_1Module>), [LIEF::runtime::osx::Module](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1osx_1_1Module>), [LIEF::runtime::windows::Module](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1windows_1_1Module>)

Public Functions

#### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module6ModuleEv>)

Module() = delete

#### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module6ModuleENSt10unique_ptrIN7details6ModuleEEE>)

Module(std::unique\_ptr&lt;details::Module&gt; impl)

#### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module6ModuleERK6Module>)

Module(const [Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module6ModuleERK6Module> "LIEF::runtime::Module::Module")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleaSERK6Module>)

[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module") &amp;operator=(const [Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")&amp;) = delete

#### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module6ModuleERR6Module>)

Module([Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module6ModuleERR6Module> "LIEF::runtime::Module::Module")&amp;&amp;) noexcept

#### [` operator= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleaSERR6Module>)

[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module") &amp;operator=([Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")&amp;&amp;) noexcept

#### [` clone `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module5cloneEv>)

virtual std::unique\_ptr&lt;[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")&gt; clone() const

#### [` imagebase `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module9imagebaseEv>)

uint64\_t imagebase() const

Base address where the module is loaded in memory.

#### [` size `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module4sizeEv>)

uint64\_t size() const

Virtual size of the current module.

#### [` end `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module3endEv>)

inline uint64\_t end() const

End address of the module.

#### [` name `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module4nameEv>)

std::string name() const

Name of the module (e.g. `libc.so.6, kernel32.dll, libsystem_c.dylib`).

#### [` path `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module4pathEv>)

std::string path() const

Path of the module.

#### [` contains `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module8containsE9uintptr_t>)

inline bool contains(uintptr\_t addr) const

Check if the current module contains the given address.

#### [` dump `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module4dumpEv>)

inline std::vector&lt;uint8\_t&gt; dump() const

Return the content of the module as it is currently mapped in memory.

The returned buffer spans [imagebase()](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1Module_1a0c6c17cb501a0128a30527478eb6193a>) over [size()](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1Module_1ad550507b72baeb17c94ea01f50ce2738>) bytes. An empty buffer is returned if the imagebase or the size is null.

#### [` dump `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module4dumpERKNSt6stringE>)

inline std::vector&lt;uint8\_t&gt; dump(const std::string &amp;filepath) const

Same as [dump()](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1Module_1a6ece4a12eebd5cdd9c8c9190b2264b6a>) but also writes the content into the file located at `filepath`.

#### [` dump `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module4dumpERNSt7ostreamE>)

inline std::vector&lt;uint8\_t&gt; dump(std::ostream &amp;os) const

Same as [dump()](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1Module_1a6ece4a12eebd5cdd9c8c9190b2264b6a>) but also writes the content into the given output stream.

#### [` to_string `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module9to_stringEv>)

std::string to\_string() const

#### [` Tas `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4I0ENK4LIEF7runtime6Module2asEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4I0ENK4LIEF7runtime6Module2asEPK1Tv> "LIEF::runtime::Module::as::T") \*as() const

This function can be used to **downcast** a [Module](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1Module>) instance.

#### [` Tas `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4I0EN4LIEF7runtime6Module2asEP1Tv>)

template&lt;class T&gt;  
inline [T](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4I0EN4LIEF7runtime6Module2asEP1Tv> "LIEF::runtime::Module::as::T") \*as()

#### [` ~Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleD0Ev>)

virtual ~Module()

Friends

#### [` operator<< `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModulelsERNSt7ostreamERK6Module>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module") &amp;M)

#### [` Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratorE> "LIEF::runtime::Module::Iterator"), std::forward\_iterator\_tag, [Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module"), std::ptrdiff\_t, const [Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")\*, const [Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8Iterator14implementationE>)

using implementation = details::ModuleIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8Iterator8IteratorERK8Iterator> "LIEF::runtime::Module::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratorE> "LIEF::runtime::Module::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratorE> "LIEF::runtime::Module::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8Iterator8IteratorERR8Iterator> "LIEF::runtime::Module::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratorE> "LIEF::runtime::Module::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratorE> "LIEF::runtime::Module::Iterator")&amp;&amp;) noexcept

##### [` Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8Iterator8IteratorENSt10unique_ptrIN7details8ModuleItEEE>)

Iterator(std::unique\_ptr&lt;details::ModuleIt&gt; impl)

##### [` ~Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratorE> "LIEF::runtime::Module::Iterator") &amp;operator++()

##### [` operator* `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module8IteratormlEv>)

const [Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Module8IteratorptEv>)

const [Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8Iterator5yieldEv>)

std::unique\_ptr&lt;[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")&gt; yield()

Transfer ownership of the module at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratorppEi>)

inline DerivedT operator++(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratorE> "LIEF::runtime::Module::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratorE> "LIEF::runtime::Module::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratorE> "LIEF::runtime::Module::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Module8IteratorE> "LIEF::runtime::Module::Iterator") &amp;RHS)

### [` LIEF::runtime::module_from_name `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime16module_from_nameERKNSt6stringE>)

inline std::unique\_ptr&lt;[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")&gt; LIEF::runtime::module\_from\_name(const std::string &amp;name)

Find the module with the given name.

### [` LIEF::runtime::module_from_path `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime16module_from_pathERKNSt6stringE>)

inline std::unique\_ptr&lt;[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")&gt; LIEF::runtime::module\_from\_path(const std::string &amp;path)

Find the module with the given path.

### [` LIEF::runtime::module_from_addr `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime16module_from_addrE9uintptr_t>)

inline std::unique\_ptr&lt;[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")&gt; LIEF::runtime::module\_from\_addr(uintptr\_t addr)

Find the module that encompasses the given virtual address (absolute).

---

## [Memory](<https://lief.re/doc/latest/runtime/cpp.html#memory>)

### [` Memory `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6MemoryE>)

class Memory

This class exposes API to access and manage memory.

Public Types

#### [` MMAP_FLAGS `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory10MMAP_FLAGSE>)

enum MMAP\_FLAGS

Flags used when creating a memory map (mmap).

*Values:*

##### [` MP_NONE `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory10MMAP_FLAGS7MP_NONEE>)

enumerator MP\_NONE = 0

##### [` MP_PRIVATE `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory10MMAP_FLAGS10MP_PRIVATEE>)

enumerator MP\_PRIVATE = 1 &lt;&lt; 0

Changes are private to this process (copy-on-write).

##### [` MP_ANONYMOUS `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory10MMAP_FLAGS12MP_ANONYMOUSE>)

enumerator MP\_ANONYMOUS = 1 &lt;&lt; 1

The mapping is not backed by any file.

##### [` MP_SHARED `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory10MMAP_FLAGS9MP_SHAREDE>)

enumerator MP\_SHARED = 1 &lt;&lt; 2

Changes are shared.

##### [` MP_FIXED `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory10MMAP_FLAGS8MP_FIXEDE>)

enumerator MP\_FIXED = 1 &lt;&lt; 3

Interpret the address as a fixed requirement.

##### [` MP_JIT `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory10MMAP_FLAGS6MP_JITE>)

enumerator MP\_JIT = 1 &lt;&lt; 4

Map for Just-In-Time code generation.

#### [` PERM `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory4PERME>)

enum PERM

*Values:*

##### [` P_NONE `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory4PERM6P_NONEE>)

enumerator P\_NONE = 0

##### [` P_READ `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory4PERM6P_READE>)

enumerator P\_READ = 1 &lt;&lt; 0

##### [` P_WRITE `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory4PERM7P_WRITEE>)

enumerator P\_WRITE = 1 &lt;&lt; 1

##### [` P_EXEC `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory4PERM6P_EXECE>)

enumerator P\_EXEC = 1 &lt;&lt; 2

Public Static Functions

#### [` mmap `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory4mmapE6size_t8uint32_t8uint32_t>)

static std::optional&lt;[Chunk](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5ChunkE> "LIEF::runtime::Memory::Chunk")&gt; mmap(size\_t size, uint32\_t flags, uint32\_t permissions = [P\_NONE](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory4PERM6P_NONEE> "LIEF::runtime::Memory::P_NONE"))

Allocate a memory chunk through mmap-like function.

#### [` mmap_hint `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory9mmap_hintE8uint64_t6size_t8uint32_t8uint32_t>)

static std::optional&lt;[Chunk](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5ChunkE> "LIEF::runtime::Memory::Chunk")&gt; mmap\_hint(uint64\_t hint, size\_t size, uint32\_t flags, uint32\_t permissions = [P\_NONE](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory4PERM6P_NONEE> "LIEF::runtime::Memory::P_NONE"))

Allocate a memory chunk through mmap-like function and place the allocation at or near the address given in the first parameter.

This address is a **hint**: it is rounded up to the next page boundary (next allocation granularity on Windows) and the system remains free to return a chunk located somewhere else.

#### [` munmap `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory6munmapER5Chunk>)

static [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") munmap([Chunk](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5ChunkE> "LIEF::runtime::Memory::Chunk") &amp;C)

Deallocate a mmaped memory chunk.

#### [` mprotect `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory8mprotectER5Chunk8uint32_t>)

static [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") mprotect([Chunk](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5ChunkE> "LIEF::runtime::Memory::Chunk") &amp;C, uint32\_t flags)

Sets the permission of the given memory chunk.

#### [` write `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5writeEPK7uint8_t6size_t9uintptr_t>)

static inline [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") write(const uint8\_t \*buffer, size\_t size, uintptr\_t addr)

Write the buffer at the address given in the third parameter.

This function assumes that the memory pointed by `addr` has the correct permission to write this buffer.

#### [` write `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5writeERKNSt6vectorI7uint8_tEE9uintptr_t>)

static inline [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") write(const std::vector&lt;uint8\_t&gt; &amp;buffer, uintptr\_t addr)

Write the buffer at the address given in the third parameter.

This function assumes that the memory pointed by `addr` has the correct permission to write this buffer.

#### [` Twrite `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4I00EN4LIEF7runtime6Memory5writeE10ok_error_tRK1T9uintptr_t>)

template&lt;class T, typename = std::enable\_if\_t&lt;std::is\_standard\_layout\_v&lt;[T](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4I00EN4LIEF7runtime6Memory5writeE10ok_error_tRK1T9uintptr_t> "LIEF::runtime::Memory::write::T")&gt; &amp;&amp; std::is\_trivial\_v&lt;[T](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4I00EN4LIEF7runtime6Memory5writeE10ok_error_tRK1T9uintptr_t> "LIEF::runtime::Memory::write::T")&gt;&gt;&gt;  
static inline [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") write(const [T](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4I00EN4LIEF7runtime6Memory5writeE10ok_error_tRK1T9uintptr_t> "LIEF::runtime::Memory::write::T") &amp;value, uintptr\_t addr)

Generic function to write a typed value.

#### [` Tread `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4I0EN4LIEF7runtime6Memory4readE1T9uintptr_t>)

template&lt;class T&gt;  
static inline [T](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4I0EN4LIEF7runtime6Memory4readE1T9uintptr_t> "LIEF::runtime::Memory::read::T") read(uintptr\_t addr)

Generic function to read a typed value.

#### [` read `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory4readE9uintptr_tRNSt6vectorI7uint8_tEE6size_t>)

static inline void read(uintptr\_t addr, std::vector&lt;uint8\_t&gt; &amp;out, size\_t size)

Read the content at the address pointed by the first parameter and write the result in the `std::vector` provided in the second parameter.

#### [` read `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory4readE9uintptr_tP7uint8_t6size_t>)

static inline void read(uintptr\_t addr, uint8\_t \*out, size\_t size)

Read the content at the address pointed by the first parameter and write the result in the buffer provided in the second parameter.

This function assumes that the buffer in the second parameter is large enough to contain the data being read.

#### [` perm_str `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory8perm_strE8uint32_t>)

static std::string perm\_str(uint32\_t flags)

#### [` support_rwx `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory11support_rwxEv>)

static inline bool support\_rwx()

#### [` Chunk `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5ChunkE>)

class Chunk

Represents a contiguous chunk of memory allocated or inspected by the runtime.

Public Functions

##### [` Chunk `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5Chunk5ChunkEPv6size_t8uint32_t>)

inline Chunk(void \*addr, size\_t size, uint32\_t permissions)

##### [` Chunk `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5Chunk5ChunkEPv6size_t>)

inline Chunk(void \*addr, size\_t size)

##### [` Chunk `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5Chunk5ChunkEPv>)

inline Chunk(void \*addr)

##### [` addr_ptr `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5Chunk8addr_ptrEv>)

inline void \*addr\_ptr()

Returns the start address of the memory chunk as an opaque pointer.

##### [` addr_ptr `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Memory5Chunk8addr_ptrEv>)

inline const void \*addr\_ptr() const

##### [` addr `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Memory5Chunk4addrEv>)

inline uintptr\_t addr() const

Returns the start address of the memory chunk.

##### [` size `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Memory5Chunk4sizeEv>)

inline size\_t size() const

Returns the size of the memory chunk in bytes.

##### [` permissions `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Memory5Chunk11permissionsEv>)

inline uint32\_t permissions() const

Returns the current permissions of the memory chunk.

##### [` page_start `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Memory5Chunk10page_startEv>)

uintptr\_t page\_start() const

Returns the address of the start of the page containing this chunk.

##### [` page_end `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Memory5Chunk8page_endEv>)

uintptr\_t page\_end() const

Returns the address of the end of the page containing this chunk.

##### [` change_permissions `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5Chunk18change_permissionsE8uint32_t>)

inline [Chunk](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5ChunkE> "LIEF::runtime::Memory::Chunk") &amp;change\_permissions(uint32\_t p)

Changes the permissions of the memory chunk.

##### [` make_x `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5Chunk6make_xEv>)

inline [Chunk](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5ChunkE> "LIEF::runtime::Memory::Chunk") &amp;make\_x()

Sets the permissions to Execute only.

##### [` make_rw `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5Chunk7make_rwEv>)

inline [Chunk](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5ChunkE> "LIEF::runtime::Memory::Chunk") &amp;make\_rw()

Sets the permissions to Read and Write.

##### [` make_rx `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5Chunk7make_rxEv>)

inline [Chunk](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5ChunkE> "LIEF::runtime::Memory::Chunk") &amp;make\_rx()

Sets the permissions to Read and Execute.

##### [` make_rwx `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5Chunk8make_rwxEv>)

inline [Chunk](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5ChunkE> "LIEF::runtime::Memory::Chunk") &amp;make\_rwx()

Sets the permissions to Read, Write, and Execute.

##### [` make_ro `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5Chunk7make_roEv>)

inline [Chunk](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5ChunkE> "LIEF::runtime::Memory::Chunk") &amp;make\_ro()

Sets the permissions to Read Only.

##### [` cache_flush `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5Chunk11cache_flushEv>)

[Chunk](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5ChunkE> "LIEF::runtime::Memory::Chunk") &amp;cache\_flush()

Flushes the instruction cache for this memory chunk. This should be used when modifying code in memory (e.g., hooking, JIT).

##### [` is_valid `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Memory5Chunk8is_validEv>)

inline bool is\_valid() const

Check if this chunk is valid.

##### [` operator bool `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Memory5ChunkcvbEv>)

inline operator bool() const

##### [` deallocate `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5Chunk10deallocateEv>)

inline [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") deallocate()

##### [` to_string `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime6Memory5Chunk9to_stringEv>)

std::string to\_string() const

Friends

**friend class Memory**

##### [` operator<< `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5ChunklsERNSt7ostreamERK5Chunk>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Chunk](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5ChunkE> "LIEF::runtime::Memory::Chunk") &amp;C)

#### [` ScopedPermissions `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory17ScopedPermissionsE>)

class ScopedPermissions

RAII interface to change the permission within a determined scope.

Public Functions

##### [` ScopedPermissions `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory17ScopedPermissions17ScopedPermissionsER5Chunk8uint32_t>)

inline explicit ScopedPermissions([Chunk](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory5ChunkE> "LIEF::runtime::Memory::Chunk") &amp;chunk, uint32\_t perms)

##### [` ~ScopedPermissions `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6Memory17ScopedPermissionsD0Ev>)

inline ~ScopedPermissions()

---

## [MemoryLayout](<https://lief.re/doc/latest/runtime/cpp.html#memorylayout>)

### [` MemoryLayout `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayoutE>)

class MemoryLayout

This class exposes the memory layout of the current process.

#### [` Region `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionE>)

class Region

A contiguous range of memory mapped in the current process.

Public Functions

##### [` Region `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6Region6RegionEv>)

Region() = default

##### [` Region `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6Region6RegionENSt6stringE8uint64_t8uint64_t>)

inline Region(std::string name, uint64\_t addr, uint64\_t size)

##### [` Region `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6Region6RegionERK6Region>)

Region(const [Region](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6Region6RegionERK6Region> "LIEF::runtime::MemoryLayout::Region::Region")&amp;) = default

##### [` operator= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionaSERK6Region>)

[Region](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionE> "LIEF::runtime::MemoryLayout::Region") &amp;operator=(const [Region](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionE> "LIEF::runtime::MemoryLayout::Region")&amp;) = default

##### [` Region `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6Region6RegionERR6Region>)

Region([Region](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6Region6RegionERR6Region> "LIEF::runtime::MemoryLayout::Region::Region")&amp;&amp;) noexcept = default

##### [` operator= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionaSERR6Region>)

[Region](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionE> "LIEF::runtime::MemoryLayout::Region") &amp;operator=([Region](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionE> "LIEF::runtime::MemoryLayout::Region")&amp;&amp;) noexcept = default

##### [` ~Region `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionD0Ev>)

~Region() = default

##### [` name `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime12MemoryLayout6Region4nameEv>)

inline std::string\_view name() const

Name associated with the region: name/path of the module mapped at this address (e.g. `libc.so.6`) or the identifier of a region that is not backed by a file (e.g. `[stack]`, `[heap]`).

It can be empty for anonymous regions.

##### [` addr `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime12MemoryLayout6Region4addrEv>)

inline uint64\_t addr() const

Address at which the region starts.

##### [` size `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime12MemoryLayout6Region4sizeEv>)

inline uint64\_t size() const

Size of the region.

##### [` end_addr `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime12MemoryLayout6Region8end_addrEv>)

inline uint64\_t end\_addr() const

Address at which the region ends.

##### [` contains `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime12MemoryLayout6Region8containsE8uint64_t>)

inline bool contains(uint64\_t addr) const

Whether the given address is within this region.

##### [` to_string `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime12MemoryLayout6Region9to_stringEv>)

std::string to\_string() const

Friends

##### [` operator<< `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionlsERNSt7ostreamERK6Region>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Region](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionE> "LIEF::runtime::MemoryLayout::Region") &amp;region)

#### [` Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratorE> "LIEF::runtime::MemoryLayout::Iterator"), std::forward\_iterator\_tag, [Region](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionE> "LIEF::runtime::MemoryLayout::Region"), std::ptrdiff\_t, const [Region](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionE> "LIEF::runtime::MemoryLayout::Region")\*, const [Region](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionE> "LIEF::runtime::MemoryLayout::Region")&amp;&gt;

Forward iterator over the regions of the memory layout.

Public Types

##### [` implementation `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8Iterator14implementationE>)

using implementation = details::MemoryLayoutIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8Iterator8IteratorERK8Iterator> "LIEF::runtime::MemoryLayout::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratorE> "LIEF::runtime::MemoryLayout::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratorE> "LIEF::runtime::MemoryLayout::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8Iterator8IteratorERR8Iterator> "LIEF::runtime::MemoryLayout::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratorE> "LIEF::runtime::MemoryLayout::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratorE> "LIEF::runtime::MemoryLayout::Iterator")&amp;&amp;) noexcept

##### [` Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8Iterator8IteratorENSt10unique_ptrIN7details14MemoryLayoutItEEE>)

Iterator(std::unique\_ptr&lt;details::MemoryLayoutIt&gt; impl)

##### [` ~Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratorE> "LIEF::runtime::MemoryLayout::Iterator") &amp;operator++()

##### [` operator* `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime12MemoryLayout8IteratormlEv>)

const [Region](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionE> "LIEF::runtime::MemoryLayout::Region") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime12MemoryLayout8IteratorptEv>)

const [Region](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionE> "LIEF::runtime::MemoryLayout::Region") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8Iterator5yieldEv>)

std::unique\_ptr&lt;[Region](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout6RegionE> "LIEF::runtime::MemoryLayout::Region")&gt; yield()

Transfer ownership of the region at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratorppEi>)

inline DerivedT operator++(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratorE> "LIEF::runtime::MemoryLayout::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratorE> "LIEF::runtime::MemoryLayout::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratorE> "LIEF::runtime::MemoryLayout::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime12MemoryLayout8IteratorE> "LIEF::runtime::MemoryLayout::Iterator") &amp;RHS)

### [` LIEF::runtime::memory_layout `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime13memory_layoutEv>)

memory\_layout\_it LIEF::runtime::memory\_layout()

Return an iterator over the memory layout of the current process.

---

## [Linux](<https://lief.re/doc/latest/runtime/cpp.html#linux>)

### [Module](<https://lief.re/doc/latest/runtime/cpp.html#id1>)

#### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux6ModuleE>)

class Module : public LIEF::runtime::[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")

This class exposes a Linux-specific API for a module.

Public Functions

##### [` handle `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime5Linux6Module6handleEv>)

void \*handle() const

Return the dlopen handle for this library.

Return a nullptr if the function fails or if the handler can’t be found

##### [` dlsym `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime5Linux6Module5dlsymERKNSt6stringE>)

void \*dlsym(const std::string &amp;name) const

Resolve the symbol with the given name for the current module.

##### [` parse_from_path `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime5Linux6Module15parse_from_pathEv>)

std::unique\_ptr&lt;ELF::[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse\_from\_path() const

Parse the ELF module from its path on the filesystem.

##### [` parse_from_path `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime5Linux6Module15parse_from_pathERKN3ELF12ParserConfigE>)

std::unique\_ptr&lt;ELF::[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse\_from\_path(const ELF::[ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig") &amp;config) const

Parse the ELF module from its path on the filesystem and given the parser configuration.

##### [` parse_from_memory `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime5Linux6Module17parse_from_memoryERKN3ELF12ParserConfigE>)

std::unique\_ptr&lt;ELF::[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse\_from\_memory(const ELF::[ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig") &amp;config) const

Parse the ELF module from memory with the given configuration.

##### [` parse_from_memory `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime5Linux6Module17parse_from_memoryEv>)

std::unique\_ptr&lt;ELF::[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse\_from\_memory() const

Parse the ELF module from memory.

##### [` ~Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux6ModuleD0Ev>)

virtual ~Module() override = default

##### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux6Module6ModuleEv>)

Module() = delete

##### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux6Module6ModuleENSt10unique_ptrIN7details6ModuleEEE>)

Module(std::unique\_ptr&lt;details::Module&gt; impl)

##### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux6Module6ModuleERK6Module>)

Module(const [Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux6Module6ModuleERK6Module> "LIEF::runtime::Linux::Module::Module")&amp;) = delete

##### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux6Module6ModuleERR6Module>)

Module([Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux6Module6ModuleERR6Module> "LIEF::runtime::Linux::Module::Module")&amp;&amp;) noexcept

Public Static Functions

##### [` from_handle `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux6Module11from_handleEPv>)

static std::unique\_ptr&lt;[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux6ModuleE> "LIEF::runtime::Linux::Module")&gt; from\_handle(void \*H)

Instantiate a [Module](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1Linux_1_1Module>) from the given `dlopen` handle.

##### [` classof `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux6Module7classofEPKN7runtime6ModuleE>)

static inline bool classof(const runtime::[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")\*)

#### [` LIEF::runtime::Linux::dlopen `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux6dlopenERKNSt6stringE>)

std::unique\_ptr&lt;[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux6ModuleE> "LIEF::runtime::Linux::Module")&gt; LIEF::runtime::Linux::dlopen(const std::string &amp;name)

Load the library with the given path/name.

---

### [Host](<https://lief.re/doc/latest/runtime/cpp.html#id2>)

#### [` Host `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux4HostE>)

class Host

This class exposes Linux-specific host information.

Public Static Functions

##### [` sys_name `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux4Host8sys_nameEv>)

static std::string sys\_name()

Operating system name (e.g., `Linux`).

##### [` sys_release `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux4Host11sys_releaseEv>)

static std::string sys\_release()

Operating system release (e.g., `2.6.28`).

##### [` sys_version `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux4Host11sys_versionEv>)

static std::string sys\_version()

Operating system version.

##### [` hardware `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux4Host8hardwareEv>)

static std::string hardware()

Hardware type identifier (e.g., `x86_64`).

---

### [Process](<https://lief.re/doc/latest/runtime/cpp.html#id3>)

#### [` Process `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux7ProcessE>)

class Process : public LIEF::runtime::[Process](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7ProcessE> "LIEF::runtime::Process")

This class exposes Linux-specific API for the current process.

Public Static Functions

##### [` cmdline `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux7Process7cmdlineEv>)

static std::string cmdline()

Return the content of `/proc/cmdline`.

##### [` glibc_version `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux7Process13glibc_versionEv>)

static std::string glibc\_version()

Return the version of the GNU C Library (glibc) loaded in the current process (e.g. `2.39`).

Return an empty string if the version cannot be determined.

##### [` classof `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux7Process7classofEPKN7runtime7ProcessE>)

static inline bool classof(const runtime::[Process](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7ProcessE> "LIEF::runtime::Process")\*)

---

## [Android](<https://lief.re/doc/latest/runtime/cpp.html#android>)

### [Module](<https://lief.re/doc/latest/runtime/cpp.html#id4>)

#### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android6ModuleE>)

class Module : public LIEF::runtime::[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")

This class exposes Android-specific API for a module.

Public Functions

##### [` handle `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7android6Module6handleEv>)

void \*handle() const

Return the dlopen handle for this library.

Return a nullptr if the function fails or if the handler can’t be found

##### [` dlsym `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7android6Module5dlsymERKNSt6stringE>)

void \*dlsym(const std::string &amp;name) const

Resolve the symbol from with the given name for the current module.

##### [` parse_from_path `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7android6Module15parse_from_pathEv>)

std::unique\_ptr&lt;ELF::[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse\_from\_path() const

Parse the ELF module from its path on the filesystem.

##### [` parse_from_path `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7android6Module15parse_from_pathERKN3ELF12ParserConfigE>)

std::unique\_ptr&lt;ELF::[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse\_from\_path(const ELF::[ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig") &amp;config) const

Parse the ELF module from its path on the filesystem and given the parser configuration.

##### [` parse_from_memory `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7android6Module17parse_from_memoryERKN3ELF12ParserConfigE>)

std::unique\_ptr&lt;ELF::[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse\_from\_memory(const ELF::[ParserConfig](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF12ParserConfigE> "LIEF::ELF::ParserConfig") &amp;config) const

Parse the ELF module from memory with the given configuration.

##### [` parse_from_memory `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7android6Module17parse_from_memoryEv>)

std::unique\_ptr&lt;ELF::[Binary](<https://lief.re/doc/latest/formats/elf/cpp.html#_CPPv4N4LIEF3ELF6BinaryE> "LIEF::ELF::Binary")&gt; parse\_from\_memory() const

Parse the ELF module from memory.

##### [` ~Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android6ModuleD0Ev>)

virtual ~Module() override = default

##### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android6Module6ModuleEv>)

Module() = delete

##### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android6Module6ModuleENSt10unique_ptrIN7details6ModuleEEE>)

Module(std::unique\_ptr&lt;details::Module&gt; impl)

##### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android6Module6ModuleERK6Module>)

Module(const [Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android6Module6ModuleERK6Module> "LIEF::runtime::android::Module::Module")&amp;) = delete

##### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android6Module6ModuleERR6Module>)

Module([Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android6Module6ModuleERR6Module> "LIEF::runtime::android::Module::Module")&amp;&amp;) noexcept

Public Static Functions

##### [` from_handle `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android6Module11from_handleEPv>)

static std::unique\_ptr&lt;[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android6ModuleE> "LIEF::runtime::android::Module")&gt; from\_handle(void \*H)

Instantiate a [Module](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1android_1_1Module>) from the given `dlopen` handle.

##### [` classof `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android6Module7classofEPKN7runtime6ModuleE>)

static inline bool classof(const runtime::[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")\*)

#### [` LIEF::runtime::android::dlopen `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android6dlopenERKNSt6stringE>)

std::unique\_ptr&lt;[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android6ModuleE> "LIEF::runtime::android::Module")&gt; LIEF::runtime::android::dlopen(const std::string &amp;name)

Load the library with the given path/name.

---

### [Host](<https://lief.re/doc/latest/runtime/cpp.html#id5>)

#### [` Host `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android4HostE>)

class Host

This class exposes Android-specific host information.

Public Static Functions

##### [` sdk_version `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android4Host11sdk_versionEv>)

static std::optional&lt;uint32\_t&gt; sdk\_version()

Return the Android SDK/API level of the device (e.g. `34` for Android 14).

---

### [Process](<https://lief.re/doc/latest/runtime/cpp.html#id6>)

#### [` Process `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android7ProcessE>)

class Process : public LIEF::runtime::[Process](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7ProcessE> "LIEF::runtime::Process")

This class exposes Android-specific API for the current process.

Public Types

##### [` properties_t `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android7Process12properties_tE>)

using properties\_t = std::vector&lt;[Property](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8PropertyE> "LIEF::runtime::android::Property")&gt;

Public Static Functions

##### [` cmdline `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android7Process7cmdlineEv>)

static std::string cmdline()

Return the content of `/proc/cmdline`.

##### [` get_system_property `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android7Process19get_system_propertyERKNSt6stringE>)

static std::optional&lt;[Property](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8PropertyE> "LIEF::runtime::android::Property")&gt; get\_system\_property(const std::string &amp;name)

Return the value of the Android system property with the given `name` (e.g. `ro.build.version.sdk`).

##### [` properties `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android7Process10propertiesEv>)

static [properties\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android7Process12properties_tE> "LIEF::runtime::android::Process::properties_t") properties()

Get all the system properties.

##### [` classof `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android7Process7classofEPKN7runtime7ProcessE>)

static inline bool classof(const runtime::[Process](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7ProcessE> "LIEF::runtime::Process")\*)

### [Property](<https://lief.re/doc/latest/runtime/cpp.html#property>)

#### [` Property `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8PropertyE>)

class Property

This class represents an Android property such as `ro.boot.hardware`.

Public Functions

##### [` Property `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8Property8PropertyEv>)

Property() = default

##### [` Property `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8Property8PropertyENSt6stringENSt6stringE8uint32_t>)

inline Property(std::string name, std::string value, uint32\_t serial)

##### [` Property `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8Property8PropertyERK8Property>)

Property(const [Property](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8Property8PropertyERK8Property> "LIEF::runtime::android::Property::Property")&amp;) = default

##### [` operator= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8PropertyaSERK8Property>)

[Property](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8PropertyE> "LIEF::runtime::android::Property") &amp;operator=(const [Property](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8PropertyE> "LIEF::runtime::android::Property")&amp;) = default

##### [` Property `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8Property8PropertyERR8Property>)

Property([Property](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8Property8PropertyERR8Property> "LIEF::runtime::android::Property::Property")&amp;&amp;) noexcept = default

##### [` operator= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8PropertyaSERR8Property>)

[Property](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8PropertyE> "LIEF::runtime::android::Property") &amp;operator=([Property](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8PropertyE> "LIEF::runtime::android::Property")&amp;&amp;) noexcept = default

##### [` ~Property `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8PropertyD0Ev>)

~Property() = default

##### [` name `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7android8Property4nameEv>)

inline std::string\_view name() const

Name of the property (e.g. `ro.boot.hardware`).

##### [` value `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7android8Property5valueEv>)

inline std::string\_view value() const

Value associated with the property.

##### [` serial `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7android8Property6serialEv>)

inline uint32\_t serial() const

Serial number of the property.

It is incremented each time the property is updated and can therefore be used to detect changes.

##### [` to_string `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7android8Property9to_stringEv>)

std::string to\_string() const

Pretty representation of the property.

Public Static Functions

##### [` create_from `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8Property11create_fromERK9prop_info>)

static [Property](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8PropertyE> "LIEF::runtime::android::Property") create\_from(const prop\_info &amp;pi)

Friends

##### [` operator<< `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8PropertylsERNSt7ostreamERK8Property>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [Property](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android8PropertyE> "LIEF::runtime::android::Property") &amp;prop)

---

## [macOS](<https://lief.re/doc/latest/runtime/cpp.html#macos>)

### [Module](<https://lief.re/doc/latest/runtime/cpp.html#id7>)

#### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx6ModuleE>)

class Module : public LIEF::runtime::[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")

This class exposes an OSX-specific API for a module.

Public Functions

##### [` handle `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime3osx6Module6handleEv>)

void \*handle() const

Return the `dlopen` handle for this library.

Return a nullptr if the function fails or if the handler can’t be found

##### [` dlsym `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime3osx6Module5dlsymERKNSt6stringE>)

void \*dlsym(const std::string &amp;name) const

Resolve the symbol with the given name for the current module.

##### [` parse_from_path `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime3osx6Module15parse_from_pathEv>)

std::unique\_ptr&lt;MachO::[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&gt; parse\_from\_path() const

Parse the Mach-O module from its path on the filesystem.

##### [` parse_from_path `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime3osx6Module15parse_from_pathERKN5MachO12ParserConfigE>)

std::unique\_ptr&lt;MachO::[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&gt; parse\_from\_path(const MachO::[ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;config) const

Parse the Mach-O module from its path on the filesystem with the given parser configuration.

##### [` parse_from_memory `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime3osx6Module17parse_from_memoryEv>)

std::unique\_ptr&lt;MachO::[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&gt; parse\_from\_memory() const

Parse the Mach-O module from memory.

##### [` parse_from_memory `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime3osx6Module17parse_from_memoryERKN5MachO12ParserConfigE>)

std::unique\_ptr&lt;MachO::[Binary](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO6BinaryE> "LIEF::MachO::Binary")&gt; parse\_from\_memory(const MachO::[ParserConfig](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4N4LIEF5MachO12ParserConfigE> "LIEF::MachO::ParserConfig") &amp;config) const

Parse the Mach-O module from memory with the given configuration.

##### [` ~Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx6ModuleD0Ev>)

virtual ~Module() override = default

##### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx6Module6ModuleEv>)

Module() = delete

##### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx6Module6ModuleENSt10unique_ptrIN7details6ModuleEEE>)

Module(std::unique\_ptr&lt;details::Module&gt; impl)

##### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx6Module6ModuleERK6Module>)

Module(const [Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx6Module6ModuleERK6Module> "LIEF::runtime::osx::Module::Module")&amp;) = delete

##### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx6Module6ModuleERR6Module>)

Module([Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx6Module6ModuleERR6Module> "LIEF::runtime::osx::Module::Module")&amp;&amp;) noexcept

Public Static Functions

##### [` from_handle `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx6Module11from_handleEPv>)

static std::unique\_ptr&lt;[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx6ModuleE> "LIEF::runtime::osx::Module")&gt; from\_handle(void \*handle)

Instantiate a [Module](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1osx_1_1Module>) from the given `dlopen` handle.

##### [` classof `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx6Module7classofEPKN7runtime6ModuleE>)

static inline bool classof(const runtime::[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")\*)

#### [` LIEF::runtime::osx::dlopen `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx6dlopenERKNSt6stringE>)

std::unique\_ptr&lt;[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx6ModuleE> "LIEF::runtime::osx::Module")&gt; LIEF::runtime::osx::dlopen(const std::string &amp;name)

Load the library with the given path or name.

### [Host](<https://lief.re/doc/latest/runtime/cpp.html#id8>)

#### [` Host `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4HostE>)

class Host

Public Static Functions

##### [` os_version_name `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host15os_version_nameEv>)

static std::string os\_version\_name()

The OS version string (e.g. `Version 26.2 (Build 25C56)`).

##### [` os_version `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host10os_versionEv>)

static [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_tE> "LIEF::runtime::osx::Host::version_t") os\_version()

The OS version (e.g. `13.0.0`).

##### [` is_sip_enabled `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host14is_sip_enabledEv>)

static bool is\_sip\_enabled()

Whether System Integrity Protection (SIP) is enabled on this host.

This conservatively returns `true` when the status can’t be determined (including on a non-macOS build).

##### [` version_t `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_tE>)

struct version\_t

Public Functions

###### [` version_t `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_t9version_tE8uint32_t8uint32_t8uint32_t>)

inline version\_t(uint32\_t major, uint32\_t minor, uint32\_t patch)

###### [` operator<= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime3osx4Host9version_tleERK9version_t>)

bool operator&lt;=(const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_tE> "LIEF::runtime::osx::Host::version_t") &amp;rhs) const

###### [` operator> `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime3osx4Host9version_tgtERK9version_t>)

inline bool operator&gt;(const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_tE> "LIEF::runtime::osx::Host::version_t") &amp;rhs) const

###### [` operator>= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime3osx4Host9version_tgeERK9version_t>)

bool operator&gt;=(const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_tE> "LIEF::runtime::osx::Host::version_t") &amp;rhs) const

###### [` operator< `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime3osx4Host9version_tltERK9version_t>)

inline bool operator&lt;(const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_tE> "LIEF::runtime::osx::Host::version_t") &amp;rhs) const

###### [` operator== `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime3osx4Host9version_teqERK9version_t>)

bool operator==(const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_tE> "LIEF::runtime::osx::Host::version_t") &amp;other) const

###### [` operator!= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime3osx4Host9version_tneERK9version_t>)

inline bool operator!=(const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_tE> "LIEF::runtime::osx::Host::version_t") &amp;other) const

###### [` to_string `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime3osx4Host9version_t9to_stringEv>)

std::string to\_string() const

Public Members

###### [` major `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_t5majorE>)

uint32\_t major = 0

###### [` minor `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_t5minorE>)

uint32\_t minor = 0

###### [` patch `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_t5patchE>)

uint32\_t patch = 0

Public Static Functions

###### [` BigSur `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_t6BigSurEv>)

static const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_tE> "LIEF::runtime::osx::Host::version_t") &amp;BigSur()

###### [` Monterey `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_t8MontereyEv>)

static const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_tE> "LIEF::runtime::osx::Host::version_t") &amp;Monterey()

###### [` Ventura `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_t7VenturaEv>)

static const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_tE> "LIEF::runtime::osx::Host::version_t") &amp;Ventura()

###### [` Sonoma `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_t6SonomaEv>)

static const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_tE> "LIEF::runtime::osx::Host::version_t") &amp;Sonoma()

###### [` Sequoia `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_t7SequoiaEv>)

static const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_tE> "LIEF::runtime::osx::Host::version_t") &amp;Sequoia()

###### [` Tahoe `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_t5TahoeEv>)

static const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_tE> "LIEF::runtime::osx::Host::version_t") &amp;Tahoe()

Friends

###### [` operator<< `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_tlsERNSt7ostreamEK9version_t>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host9version_tE> "LIEF::runtime::osx::Host::version_t") version)

### [Process](<https://lief.re/doc/latest/runtime/cpp.html#id9>)

#### [` Process `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx7ProcessE>)

class Process : public LIEF::runtime::[Process](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7ProcessE> "LIEF::runtime::Process")

This class exposes OSX-specific API for the current process.

Public Static Functions

##### [` dyld_version `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx7Process12dyld_versionEv>)

static std::string dyld\_version()

Return the version of dyld for the current process.

##### [` classof `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx7Process7classofEPKN7runtime7ProcessE>)

static inline bool classof(const runtime::[Process](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7ProcessE> "LIEF::runtime::Process")\*)

---

## [Windows](<https://lief.re/doc/latest/runtime/cpp.html#windows>)

### [Module](<https://lief.re/doc/latest/runtime/cpp.html#id10>)

#### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows6ModuleE>)

class Module : public LIEF::runtime::[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")

This class exposes a Windows-specific API for a module.

Public Functions

##### [` handle `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows6Module6handleEv>)

void \*handle() const

Return the `HMODULE` handle as an opaque pointer.

Return a nullptr if the function fails or if the handler can’t be found

##### [` dlsym `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows6Module5dlsymERKNSt6stringE>)

void \*dlsym(const std::string &amp;name) const

Resolve the symbol with the given name for the current module.

##### [` parse_from_path `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows6Module15parse_from_pathEv>)

std::unique\_ptr&lt;PE::[Binary](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6BinaryE> "LIEF::PE::Binary")&gt; parse\_from\_path() const

Parse the PE module from its path on the filesystem.

##### [` parse_from_path `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows6Module15parse_from_pathERKN2PE12ParserConfigE>)

std::unique\_ptr&lt;PE::[Binary](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6BinaryE> "LIEF::PE::Binary")&gt; parse\_from\_path(const PE::[ParserConfig](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE12ParserConfigE> "LIEF::PE::ParserConfig") &amp;config) const

Parse the PE module from its path on the filesystem and given the parser configuration.

##### [` parse_from_memory `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows6Module17parse_from_memoryERKN2PE12ParserConfigE>)

std::unique\_ptr&lt;PE::[Binary](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6BinaryE> "LIEF::PE::Binary")&gt; parse\_from\_memory(const PE::[ParserConfig](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE12ParserConfigE> "LIEF::PE::ParserConfig") &amp;config) const

Parse the PE module from memory with the given configuration.

##### [` parse_from_memory `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows6Module17parse_from_memoryEv>)

std::unique\_ptr&lt;PE::[Binary](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6BinaryE> "LIEF::PE::Binary")&gt; parse\_from\_memory() const

Parse the PE module from memory.

##### [` ~Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows6ModuleD0Ev>)

virtual ~Module() override = default

##### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows6Module6ModuleEv>)

Module() = delete

##### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows6Module6ModuleENSt10unique_ptrIN7details6ModuleEEE>)

Module(std::unique\_ptr&lt;details::Module&gt; impl)

##### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows6Module6ModuleERK6Module>)

Module(const [Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows6Module6ModuleERK6Module> "LIEF::runtime::windows::Module::Module")&amp;) = delete

##### [` Module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows6Module6ModuleERR6Module>)

Module([Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows6Module6ModuleERR6Module> "LIEF::runtime::windows::Module::Module")&amp;&amp;) noexcept

Public Static Functions

##### [` from_handle `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows6Module11from_handleEPv>)

static std::unique\_ptr&lt;[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows6ModuleE> "LIEF::runtime::windows::Module")&gt; from\_handle(void \*H)

##### [` classof `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows6Module7classofEPKN7runtime6ModuleE>)

static inline bool classof(const runtime::[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime6ModuleE> "LIEF::runtime::Module")\*)

#### [` LIEF::runtime::windows::dlopen `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows6dlopenERKNSt6stringE>)

std::unique\_ptr&lt;[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows6ModuleE> "LIEF::runtime::windows::Module")&gt; LIEF::runtime::windows::dlopen(const std::string &amp;name)

Load the windows library with the given path or name.

#### [` LIEF::runtime::windows::find_module `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows11find_moduleERKNSt6stringE>)

std::unique\_ptr&lt;[Module](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows6ModuleE> "LIEF::runtime::windows::Module")&gt; LIEF::runtime::windows::find\_module(const std::string &amp;name)

Try to get the [Module](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1windows_1_1Module>) with the given name.

Return a nullptr if the module is not found

```cpp
if (auto ntdll = find_module("ntdll.dll")) {
  std::cout << ntdll->path() << '\n';
}
```

> **Note**
> 
> This function relies on the Windows API `GetModuleHandle` which is more efficient than the generic implementation [LIEF::runtime::module\_from\_name](<https://lief.re/doc/latest/runtime/cpp.html#namespaceLIEF_1_1runtime_1a017332eaecb32631e830efd9378d374c>)

### [Host](<https://lief.re/doc/latest/runtime/cpp.html#id11>)

#### [` Host `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4HostE>)

class Host

This class exposes Windows-specific host information.

Public Static Functions

##### [` version `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host7versionEv>)

static [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host9version_tE> "LIEF::runtime::windows::Host::version_t") version()

Return the Windows version (e.g., `10.0.26200`).

##### [` version_t `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host9version_tE>)

struct version\_t

Public Functions

###### [` version_t `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host9version_t9version_tEv>)

version\_t() = default

###### [` version_t `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host9version_t9version_tE8uint32_t8uint32_t8uint32_t>)

inline version\_t(uint32\_t major, uint32\_t minor, uint32\_t build\_number)

###### [` operator<= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows4Host9version_tleERK9version_t>)

bool operator&lt;=(const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host9version_tE> "LIEF::runtime::windows::Host::version_t") &amp;rhs) const

###### [` operator> `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows4Host9version_tgtERK9version_t>)

inline bool operator&gt;(const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host9version_tE> "LIEF::runtime::windows::Host::version_t") &amp;rhs) const

###### [` operator>= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows4Host9version_tgeERK9version_t>)

bool operator&gt;=(const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host9version_tE> "LIEF::runtime::windows::Host::version_t") &amp;rhs) const

###### [` operator< `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows4Host9version_tltERK9version_t>)

inline bool operator&lt;(const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host9version_tE> "LIEF::runtime::windows::Host::version_t") &amp;rhs) const

###### [` operator== `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows4Host9version_teqERK9version_t>)

bool operator==(const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host9version_tE> "LIEF::runtime::windows::Host::version_t") &amp;other) const

###### [` operator!= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows4Host9version_tneERK9version_t>)

inline bool operator!=(const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host9version_tE> "LIEF::runtime::windows::Host::version_t") &amp;other) const

###### [` to_string `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows4Host9version_t9to_stringEv>)

std::string to\_string() const

Public Members

###### [` major `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host9version_t5majorE>)

uint32\_t major = 0

###### [` minor `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host9version_t5minorE>)

uint32\_t minor = 0

###### [` build_number `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host9version_t12build_numberE>)

uint32\_t build\_number = 0

Friends

###### [` operator<< `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host9version_tlsERNSt7ostreamERK9version_t>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [version\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host9version_tE> "LIEF::runtime::windows::Host::version_t") &amp;version)

### [Injector](<https://lief.re/doc/latest/runtime/cpp.html#injector>)

#### [` injection_context_t `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows19injection_context_tE>)

struct injection\_context\_t

Describes how to spawn a new process and inject a library into it.

Public Functions

##### [` validate `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows19injection_context_t8validateEv>)

bool validate() const

Check whether the context is consistent (required paths filled-in and readable).

##### [` operator bool `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows19injection_context_tcvbEv>)

inline operator bool() const

##### [` to_string `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows19injection_context_t9to_stringEv>)

std::string to\_string() const

Public Members

##### [` target_path `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows19injection_context_t11target_pathE>)

std::string target\_path

Absolute path to the target executable to spawn.

##### [` args `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows19injection_context_t4argsE>)

std::string args

Command-line arguments passed to the spawned process.

##### [` library `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows19injection_context_t7libraryE>)

std::string library

Absolute path to the library (DLL) that should be injected.

##### [` env `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows19injection_context_t3envE>)

std::unordered\_map&lt;std::string, std::string&gt; env

Environment variables to set in the spawned process. If left empty, the current process environment is inherited.

Friends

##### [` operator<< `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows19injection_context_tlsERNSt7ostreamERK19injection_context_t>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [injection\_context\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows19injection_context_tE> "LIEF::runtime::windows::injection_context_t") &amp;ctx)

#### [` LIEF::runtime::windows::inject_spawn `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows12inject_spawnERK19injection_context_t>)

[ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") LIEF::runtime::windows::inject\_spawn(const [injection\_context\_t](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows19injection_context_tE> "LIEF::runtime::windows::injection_context_t") &amp;ctx)

Spawn the target described by the given injection context and inject the associated library before the main thread starts executing.

This is the Windows equivalent of a “create suspended + remote LoadLibrary” approach.

### [Process](<https://lief.re/doc/latest/runtime/cpp.html#id12>)

#### [` Process `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows7ProcessE>)

class Process : public LIEF::runtime::[Process](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7ProcessE> "LIEF::runtime::Process")

This class exposes Windows-specific API for the current process.

Public Static Functions

##### [` peb `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows7Process3pebEv>)

static std::unique\_ptr&lt;[PEB](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEBE> "LIEF::runtime::windows::PEB")&gt; peb()

Return an interface over the internal [Process](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1windows_1_1Process>) Environment Block ([PEB](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1windows_1_1PEB>)).

##### [` classof `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows7Process7classofEPKN7runtime7ProcessE>)

static inline bool classof(const runtime::[Process](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7ProcessE> "LIEF::runtime::Process")\*)

### [PEB](<https://lief.re/doc/latest/runtime/cpp.html#peb>)

#### [` PEB `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEBE>)

class PEB

This class exposes a user-friendly interface over the [Process](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1windows_1_1Process>) Environment Block ([PEB](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1windows_1_1PEB>)) of the current process.

An instance can be created through [LIEF::runtime::windows::Process::peb()](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1windows_1_1Process_1acfbd944ade31b68b928efde03be8b064>).

```cpp
if (auto peb = LIEF::runtime::windows::Process::peb()) {
  if (peb->being_debugged()) {
    // A debugger is attached to the current process
  }
}
```

Public Types

##### [` entries_it `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEB10entries_itE>)

using entries\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryE> "LIEF::runtime::windows::LdrDataTableEntry")::[Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorE> "LIEF::runtime::windows::LdrDataTableEntry::Iterator")&gt;

Iterator over the [LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1windows_1_1LdrDataTableEntry>) referenced by the loader data.

Public Functions

##### [` PEB `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEB3PEBEv>)

PEB() = delete

##### [` PEB `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEB3PEBERK3PEB>)

PEB(const [PEB](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEB3PEBERK3PEB> "LIEF::runtime::windows::PEB::PEB")&amp;) = delete

##### [` operator= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEBaSERK3PEB>)

[PEB](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEBE> "LIEF::runtime::windows::PEB") &amp;operator=(const [PEB](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEBE> "LIEF::runtime::windows::PEB")&amp;) = delete

##### [` PEB `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEB3PEBERR3PEB>)

PEB([PEB](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEB3PEBERR3PEB> "LIEF::runtime::windows::PEB::PEB")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEBaSERR3PEB>)

[PEB](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEBE> "LIEF::runtime::windows::PEB") &amp;operator=([PEB](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEBE> "LIEF::runtime::windows::PEB")&amp;&amp;) noexcept

##### [` being_debugged `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows3PEB14being_debuggedEv>)

bool being\_debugged() const

Whether the current process is being debugged.

##### [` ldr `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows3PEB3ldrEv>)

uintptr\_t ldr() const

Address of the loader data structure (`PEB_LDR_DATA`).

##### [` process_parameters `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows3PEB18process_parametersEv>)

uintptr\_t process\_parameters() const

Address of the process parameters (`RTL_USER_PROCESS_PARAMETERS`).

##### [` atl_thunk_slist_ptr `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows3PEB19atl_thunk_slist_ptrEv>)

uintptr\_t atl\_thunk\_slist\_ptr() const

Address of the per-process ATL thunk SList (single-linked list).

##### [` atl_thunk_slist_ptr32 `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows3PEB21atl_thunk_slist_ptr32Ev>)

uint32\_t atl\_thunk\_slist\_ptr32() const

32-bit value of the ATL thunk SList pointer.

##### [` post_process_init_routine `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows3PEB25post_process_init_routineEv>)

uintptr\_t post\_process\_init\_routine() const

Address of the routine called once the process completed its initialization (`PostProcessInitRoutine`).

##### [` session_id `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows3PEB10session_idEv>)

uint32\_t session\_id() const

Session ID associated with the current process.

##### [` entries `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows3PEB7entriesEv>)

[entries\_it](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEB10entries_itE> "LIEF::runtime::windows::PEB::entries_it") entries() const

Return a bidirectional iterator over the modules referenced by the loader data (`Ldr`).

```cpp
if (auto peb = LIEF::runtime::windows::Process::peb()) {
  for (const LdrDataTableEntry& entry : peb->entries()) {
    // entry.base_dll_name(), entry.dll_base(), ...
  }
}
```

##### [` ~PEB `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEBD0Ev>)

~PEB()

Friends

**friend class Process**

### [LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#ldrdatatableentry>)

#### [` LdrDataTableEntry `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryE>)

class LdrDataTableEntry

This class exposes a user-friendly interface over a `LDR_DATA_TABLE_ENTRY`, the structure used by the Windows loader to describe a module loaded in the current process.

Public Functions

##### [` LdrDataTableEntry `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry17LdrDataTableEntryEv>)

LdrDataTableEntry() = delete

##### [` LdrDataTableEntry `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry17LdrDataTableEntryENSt10unique_ptrIN7details9ldr_entryEEE>)

LdrDataTableEntry(std::unique\_ptr&lt;details::ldr\_entry&gt; impl)

##### [` LdrDataTableEntry `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry17LdrDataTableEntryERK17LdrDataTableEntry>)

LdrDataTableEntry(const [LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry17LdrDataTableEntryERK17LdrDataTableEntry> "LIEF::runtime::windows::LdrDataTableEntry::LdrDataTableEntry")&amp;) = delete

##### [` operator= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryaSERK17LdrDataTableEntry>)

[LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryE> "LIEF::runtime::windows::LdrDataTableEntry") &amp;operator=(const [LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryE> "LIEF::runtime::windows::LdrDataTableEntry")&amp;) = delete

##### [` LdrDataTableEntry `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry17LdrDataTableEntryERR17LdrDataTableEntry>)

LdrDataTableEntry([LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry17LdrDataTableEntryERR17LdrDataTableEntry> "LIEF::runtime::windows::LdrDataTableEntry::LdrDataTableEntry")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryaSERR17LdrDataTableEntry>)

[LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryE> "LIEF::runtime::windows::LdrDataTableEntry") &amp;operator=([LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryE> "LIEF::runtime::windows::LdrDataTableEntry")&amp;&amp;) noexcept

##### [` dll_base `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry8dll_baseEv>)

uintptr\_t dll\_base() const

Base address at which the module is mapped in memory (`DllBase`).

##### [` entry_point `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry11entry_pointEv>)

uintptr\_t entry\_point() const

Address of the entry point of the module (`EntryPoint`).

##### [` size_of_image `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry13size_of_imageEv>)

uint32\_t size\_of\_image() const

Size (in bytes) of the module’s image in memory (`SizeOfImage`).

##### [` full_dll_name `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry13full_dll_nameEv>)

std::string full\_dll\_name() const

Full path of the module (`FullDllName`), e.g. `C:\Windows\System32\ntdll.dll`.

##### [` base_dll_name `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry13base_dll_nameEv>)

std::string base\_dll\_name() const

Base name of the module (`BaseDllName`), e.g. `ntdll.dll`.

##### [` flags `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry5flagsEv>)

uint32\_t flags() const

Loader flags describing the state of the module (`Flags`).

##### [` obsolete_load_count `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry19obsolete_load_countEv>)

uint16\_t obsolete\_load\_count() const

Legacy load count of the module (`ObsoleteLoadCount`). Superseded by `reference_count()` on Windows 8 and later.

##### [` tls_index `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry9tls_indexEv>)

uint16\_t tls\_index() const

TLS slot index assigned to the module, or `0` when it has no TLS (`TlsIndex`).

##### [` time_date_stamp `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry15time_date_stampEv>)

uint32\_t time\_date\_stamp() const

`TimeDateStamp` of the module as cached by the loader.

##### [` entry_point_activation_context `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry30entry_point_activation_contextEv>)

uintptr\_t entry\_point\_activation\_context() const

Address of the activation context associated with the module’s entry point.

##### [` lock `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry4lockEv>)

uintptr\_t lock() const

Address of the per-entry loader lock.

##### [` ddag_node `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry9ddag_nodeEv>)

std::optional&lt;uintptr\_t&gt; ddag\_node() const

Address of the dependency-graph node of the module (`DdagNode`).

> **Note**
> 
> Available on Windows 8 and later.

##### [` load_context `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry12load_contextEv>)

std::optional&lt;uintptr\_t&gt; load\_context() const

Address of the loader context used while the module is being snapped.

> **Note**
> 
> Available on Windows 8 and later.

##### [` parent_dll_base `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry15parent_dll_baseEv>)

std::optional&lt;uintptr\_t&gt; parent\_dll\_base() const

Base address of the module that triggered the load of this one.

> **Note**
> 
> Available on Windows 8 and later.

##### [` switch_back_context `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry19switch_back_contextEv>)

std::optional&lt;uintptr\_t&gt; switch\_back\_context() const

Address of the CHPE switch-back context.

> **Note**
> 
> Available on Windows 8 and later.

##### [` original_base `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry13original_baseEv>)

std::optional&lt;uintptr\_t&gt; original\_base() const

Preferred base address recorded in the PE headers.

> **Note**
> 
> Available on Windows 8 and later.

##### [` load_time `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry9load_timeEv>)

std::optional&lt;int64\_t&gt; load\_time() const

Time at which the module was loaded.

> **Note**
> 
> Available on Windows 8 and later.

##### [` base_name_hash_value `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry20base_name_hash_valueEv>)

std::optional&lt;uint32\_t&gt; base\_name\_hash\_value() const

Hash of the module’s base name used to index the loader tables.

> **Note**
> 
> Available on Windows 8 and later.

##### [` load_reason `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry11load_reasonEv>)

std::optional&lt;int32\_t&gt; load\_reason() const

Reason why the module was loaded, as a `LDR_DLL_LOAD_REASON` value.

> **Note**
> 
> Available on Windows 8 and later.

##### [` implicit_path_options `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry21implicit_path_optionsEv>)

std::optional&lt;uint32\_t&gt; implicit\_path\_options() const

Path-search options implied when the module was resolved.

> **Note**
> 
> Available on Windows 8 and later.

##### [` reference_count `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry15reference_countEv>)

std::optional&lt;uint32\_t&gt; reference\_count() const

Number of references currently held on the module.

> **Note**
> 
> Available on Windows 8 and later.

##### [` dependent_load_flags `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry20dependent_load_flagsEv>)

std::optional&lt;uint32\_t&gt; dependent\_load\_flags() const

Flags controlling how the statically-linked dependencies of the module are loaded.

> **Note**
> 
> Available on Windows 8 and later.

##### [` signing_level `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry13signing_levelEv>)

std::optional&lt;uint8\_t&gt; signing\_level() const

Signing level of the module’s image, as a `SE_SIGNING_LEVEL` value.

> **Note**
> 
> Available on Windows 10 and later.

##### [` check_sum `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry9check_sumEv>)

std::optional&lt;uint32\_t&gt; check\_sum() const

Image checksum cached by the loader.

> **Note**
> 
> Available on Windows 10 and later.

##### [` active_patch_image_base `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry23active_patch_image_baseEv>)

std::optional&lt;uintptr\_t&gt; active\_patch\_image\_base() const

Base address of the active hot-patch image, if any.

> **Note**
> 
> Available on Windows 11 and later.

##### [` hot_patch_state `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry15hot_patch_stateEv>)

std::optional&lt;uint32\_t&gt; hot\_patch\_state() const

State of the hot-patch engine for this module, as a `LDR_HOT_PATCH_STATE` value.

> **Note**
> 
> Available on Windows 11 and later.

##### [` to_string `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry9to_stringEv>)

std::string to\_string() const

Pretty-printed representation of this entry.

##### [` ~LdrDataTableEntry `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryD0Ev>)

~LdrDataTableEntry()

Friends

##### [` operator<< `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntrylsERNSt7ostreamERK17LdrDataTableEntry>)

inline friend std::ostream &amp;operator&lt;&lt;(std::ostream &amp;os, const [LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryE> "LIEF::runtime::windows::LdrDataTableEntry") &amp;entry)

##### [` Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorE> "LIEF::runtime::windows::LdrDataTableEntry::Iterator"), std::bidirectional\_iterator\_tag, [LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryE> "LIEF::runtime::windows::LdrDataTableEntry"), std::ptrdiff\_t, const [LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryE> "LIEF::runtime::windows::LdrDataTableEntry")\*, const [LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryE> "LIEF::runtime::windows::LdrDataTableEntry")&amp;&gt;

Bidirectional iterator over the [LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#classLIEF_1_1runtime_1_1windows_1_1LdrDataTableEntry>) mirroring the doubly-linked list used by Windows.

Public Types

###### [` implementation `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8Iterator14implementationE>)

using implementation = details::ldr\_entry\_it

Public Functions

###### [` Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8Iterator8IteratorEv>)

Iterator()

###### [` Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8Iterator8IteratorENSt10unique_ptrIN7details12ldr_entry_itEEE>)

Iterator(std::unique\_ptr&lt;details::ldr\_entry\_it&gt; impl)

###### [` Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8Iterator8IteratorERK8Iterator> "LIEF::runtime::windows::LdrDataTableEntry::Iterator::Iterator")&amp;)

###### [` operator= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorE> "LIEF::runtime::windows::LdrDataTableEntry::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorE> "LIEF::runtime::windows::LdrDataTableEntry::Iterator")&amp;)

###### [` Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8Iterator8IteratorERR8Iterator> "LIEF::runtime::windows::LdrDataTableEntry::Iterator::Iterator")&amp;&amp;) noexcept

###### [` operator= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorE> "LIEF::runtime::windows::LdrDataTableEntry::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorE> "LIEF::runtime::windows::LdrDataTableEntry::Iterator")&amp;&amp;) noexcept

###### [` ~Iterator `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorD0Ev>)

~Iterator()

###### [` operator++ `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorE> "LIEF::runtime::windows::LdrDataTableEntry::Iterator") &amp;operator++()

###### [` operator-- `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratormmEv>)

[Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorE> "LIEF::runtime::windows::LdrDataTableEntry::Iterator") &amp;operator--()

###### [` operator* `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry8IteratormlEv>)

const [LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryE> "LIEF::runtime::windows::LdrDataTableEntry") &amp;operator\*() const

###### [` operator-> `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows17LdrDataTableEntry8IteratorptEv>)

const [LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryE> "LIEF::runtime::windows::LdrDataTableEntry") \*operator-&gt;() const

###### [` yield `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8Iterator5yieldEv>)

std::unique\_ptr&lt;[LdrDataTableEntry](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryE> "LIEF::runtime::windows::LdrDataTableEntry")&gt; yield()

Transfer ownership of the entry at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

###### [` operator++ `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorppEi>)

inline DerivedT operator++(int)

###### [` operator-- `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratormmEi>)

inline DerivedT operator--(int)

Friends

###### [` operator== `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorE> "LIEF::runtime::windows::LdrDataTableEntry::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorE> "LIEF::runtime::windows::LdrDataTableEntry::Iterator") &amp;RHS)

###### [` operator!= `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorE> "LIEF::runtime::windows::LdrDataTableEntry::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntry8IteratorE> "LIEF::runtime::windows::LdrDataTableEntry::Iterator") &amp;RHS)

---

## [ARCH](<https://lief.re/doc/latest/runtime/cpp.html#arch>)

### [` LIEF::runtime::ARCH `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime4ARCHE>)

enum class LIEF::runtime::ARCH : uint32\_t

*Values:*

#### [` NONE `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime4ARCH4NONEE>)

enumerator NONE

#### [` X86_64 `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime4ARCH6X86_64E>)

enumerator X86\_64

#### [` ARM64 `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime4ARCH5ARM64E>)

enumerator ARM64

#### [` RISCV64 `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime4ARCH7RISCV64E>)

enumerator RISCV64

## [PLATFORMS](<https://lief.re/doc/latest/runtime/cpp.html#platforms>)

### [` LIEF::runtime::PLATFORMS `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime9PLATFORMSE>)

enum class LIEF::runtime::PLATFORMS : uint32\_t

*Values:*

#### [` NONE `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime9PLATFORMS4NONEE>)

enumerator NONE = 0

#### [` LINUX `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime9PLATFORMS5LINUXE>)

enumerator LINUX

#### [` WINDOWS `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime9PLATFORMS7WINDOWSE>)

enumerator WINDOWS

#### [` ANDROID_ `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime9PLATFORMS8ANDROID_E>)

enumerator ANDROID\_

#### [` OSX `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime9PLATFORMS3OSXE>)

enumerator OSX

#### [` IOS `](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime9PLATFORMS3IOSE>)

enumerator IOS
