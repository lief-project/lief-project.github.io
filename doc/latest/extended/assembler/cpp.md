---
documentID: "6b3782f431df89f4fb9b6765277a317fc6f9af94fcad633f927d89ff793de218"
docname: "extended/assembler/cpp"
title: "Assembler C++ API - LIEF Documentation"
description: "Assembler C++ API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/extended/assembler/cpp.html"
markdownURL: "https://lief.re/doc/latest/extended/assembler/cpp.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "d4a622031377eaebfb8bbf122a6e1b9497e988ac25cd7ddf7d57ab8046b2ce3e"
---

# [C++](<https://lief.re/doc/latest/extended/assembler/cpp.html#c>)

- [`LIEF::Binary::assemble()`](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6Binary8assembleE8uint64_tNSt11string_viewERN8assembly15AssemblerConfigE> "LIEF::Binary::assemble")
- [`LIEF::assembly::Engine`](<https://lief.re/doc/latest/extended/disassembler/cpp/index.html#_CPPv4N4LIEF8assembly6EngineE> "LIEF::assembly::Engine")

## [AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#assemblerconfig>)

### [` AssemblerConfig `](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigE>)

class AssemblerConfig

This class exposes the different elements that can be configured to assemble code.

Public Types

#### [` DIALECT `](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig7DIALECTE>)

enum class DIALECT

The different supported dialects.

*Values:*

##### [` DEFAULT_DIALECT `](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig7DIALECT15DEFAULT_DIALECTE>)

enumerator DEFAULT\_DIALECT = 0

##### [` X86_INTEL `](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig7DIALECT9X86_INTELE>)

enumerator X86\_INTEL

Intel syntax.

##### [` X86_ATT `](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig7DIALECT7X86_ATTE>)

enumerator X86\_ATT

AT&amp;T syntax.

Public Functions

#### [` AssemblerConfig `](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig15AssemblerConfigEv>)

AssemblerConfig() = default

#### [` AssemblerConfig `](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig15AssemblerConfigERK15AssemblerConfig>)

AssemblerConfig(const [AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig15AssemblerConfigERK15AssemblerConfig> "LIEF::assembly::AssemblerConfig::AssemblerConfig")&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigaSERK15AssemblerConfig>)

[AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigE> "LIEF::assembly::AssemblerConfig") &amp;operator=(const [AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigE> "LIEF::assembly::AssemblerConfig")&amp;) = default

#### [` AssemblerConfig `](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig15AssemblerConfigERR15AssemblerConfig>)

AssemblerConfig([AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig15AssemblerConfigERR15AssemblerConfig> "LIEF::assembly::AssemblerConfig::AssemblerConfig")&amp;&amp;) = default

#### [` operator= `](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigaSERR15AssemblerConfig>)

[AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigE> "LIEF::assembly::AssemblerConfig") &amp;operator=([AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigE> "LIEF::assembly::AssemblerConfig")&amp;&amp;) = default

#### [` resolve_symbol `](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig14resolve_symbolENSt11string_viewE>)

inline virtual std::optional&lt;uint64\_t&gt; resolve\_symbol(std::string\_view)

This function aims to be overloaded in order to resolve symbols used in the assembly listing.

For instance, given this assembly code:

```text
0x1000: mov rdi, rbx
0x1003: call _my_function
```

The function `_my_function` will remain undefined unless we return its address in `resolve_symbol()`:

```cpp
class MyConfig : public AssemblerConfig {
  public:
  std::optional<uint64_t> resolve_symbol(std::string_view name) override {
    if (name == "_my_function") {
      return 0x4000;
    }
    return std::nullopt; // or AssemblerConfig::resolve_symbol(name)
  }
};
```

#### [` ~AssemblerConfig `](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigD0Ev>)

virtual ~AssemblerConfig() = default

Public Members

#### [` dialect `](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig7dialectE>)

[DIALECT](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig7DIALECTE> "LIEF::assembly::AssemblerConfig::DIALECT") dialect = [DIALECT](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig7DIALECTE> "LIEF::assembly::AssemblerConfig::DIALECT")::[DEFAULT\_DIALECT](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig7DIALECT15DEFAULT_DIALECTE> "LIEF::assembly::AssemblerConfig::DIALECT::DEFAULT_DIALECT")

The dialect of the input assembly code.

Public Static Functions

#### [` default_config `](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfig14default_configEv>)

static inline [AssemblerConfig](<https://lief.re/doc/latest/extended/assembler/cpp.html#_CPPv4N4LIEF8assembly15AssemblerConfigE> "LIEF::assembly::AssemblerConfig") &amp;default\_config()

Default configuration.
