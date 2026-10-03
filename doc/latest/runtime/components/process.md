---
documentID: "10c31e2eb505c3421202aea5ddcf9e2667feeafc79f9dcbca1db39e6728b0e6e"
docname: "runtime/components/process"
title: "Process - Runtime - LIEF Documentation"
description: "Inspect the current process and thread IDs, page size, environment variables, and platform-specific loader information with LIEF."
canonical: "https://lief.re/doc/latest/runtime/components/process.html"
markdownURL: "https://lief.re/doc/latest/runtime/components/process.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "5558dd53e3de444cff6c9a5610d5c3b4184e496158788c736dbba9712a71a6d8"
---

# [Process](<https://lief.re/doc/latest/runtime/components/process.html#process>)

The  `lief.runtime.Process` ( [`lief::runtime::Process`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/struct.Process.html>) ;  [`lief.runtime.Process`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Process>) ;  [`LIEF::runtime::Process`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7ProcessE>) ) interface exposes an API to query information about the current process. It provides cross-platform API and is extended on each platform with additional OS-specific helpers.

## [Query the current process](<https://lief.re/doc/latest/runtime/components/process.html#query-the-current-process>)

**Python**

```python
print(f"    PID:       {lief.runtime.Process.pid}")
print(f"    TID:       {lief.runtime.Process.tid}")
print(f"    Page size: {lief.runtime.Process.page_size:#06x}")
print(f"    Arch:      {lief.runtime.Process.arch}")
print(f"    Platform:  {lief.runtime.Process.platform}")
print(f"    TERM:      {lief.runtime.Process.get_env('TERM')}")
```

**C++**

```cpp
info("    PID:       {}", std::to_string(LIEF::runtime::Process::pid()));
info("    TID:       {}", std::to_string(LIEF::runtime::Process::tid()));
info("    Page size: {}", hex(LIEF::runtime::Process::page_size()));
info("    Arch:      {}",
     std::to_string((uint32_t)LIEF::runtime::Process::arch()));
info("    Platform:  {}",
     std::to_string((uint32_t)LIEF::runtime::Process::platform()));
if (auto term = LIEF::runtime::Process::get_env("TERM")) {
  info("    TERM:      {}", *term);
}
```

**Rust**

```rust
println!("    PID:       {}", runtime::Process::pid());
println!("    TID:       {}", runtime::Process::tid());
println!("    Page size: {:#06x}", runtime::Process::page_size());
println!("    Arch:      {:?}", runtime::Process::arch());
println!("    Platform:  {:?}", runtime::Process::platform());
```

## [Linux](<https://lief.re/doc/latest/runtime/components/process.html#linux>)

On Linux,  `lief.runtime.linux.Process` ( [`lief::runtime::linux::Process`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/linux/struct.Process.html>) ;  [`lief.runtime.linux.Process`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Process>) ;  [`LIEF::runtime::Linux::Process`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux7ProcessE>) ) extends the generic interface with platform-specific helpers. For instance,  `lief.runtime.linux.Process.glibc_version()` ( [`lief::runtime::linux::Process::glibc_version`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/linux/struct.Process.html#method.glibc_version>) ;  [`lief.runtime.linux.Process.glibc_version`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Process.glibc_version>) ;  [`LIEF::runtime::Linux::Process::glibc_version()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux7Process13glibc_versionEv>) ) returns the version of the GNU C Library loaded in the current process:

**Python**

```python
print(f"    glibc:     {lief.runtime.linux.Process.glibc_version}")
```

**C++**

```cpp
info("    glibc:     {}", LIEF::runtime::Linux::Process::glibc_version());
```

**Rust**

```rust
if let Some(version) = runtime::linux::Process::glibc_version() {
    println!("    glibc:    {}", version);
}
```

## [Windows](<https://lief.re/doc/latest/runtime/components/process.html#windows>)

On Windows, the process interface is extended with  `lief.runtime.windows.Process` ( [`lief::runtime::windows::Process`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/windows/struct.Process.html>) ;  [`lief.runtime.windows.Process`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Process>) ;  [`LIEF::runtime::windows::Process`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows7ProcessE>) ) which exposes the Process Environment Block (PEB) of the current process. The returned  `lief.runtime.windows.PEB` ( [`lief::runtime::windows::PEB`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/windows/struct.PEB.html>) ;  [`lief.runtime.windows.PEB`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.PEB>) ;  [`LIEF::runtime::windows::PEB`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows3PEBE>) ) object provides access to some fields of the structure (whether the process is being debugged, the loader data, the process parameters, …):

**Python**

```python
if (peb := lief.runtime.windows.Process.peb) is not None:
    print(f"    PEB.BeingDebugged:          {peb.being_debugged}")
    print(f"    PEB.Ldr:                    {peb.ldr:#06x}")
    print(f"    PEB.ProcessParameters:      {peb.process_parameters:#06x}")
    print(f"    PEB.AtlThunkSListPtr:       {peb.atl_thunk_slist_ptr:#06x}")
    print(f"    PEB.AtlThunkSListPtr32:     {peb.atl_thunk_slist_ptr32:#06x}")
    print(f"    PEB.PostProcessInitRoutine: {peb.post_process_init_routine:#06x}")
    print(f"    PEB.SessionId:              {peb.session_id:#06x}")
```

**C++**

```cpp
if (auto peb = LIEF::runtime::windows::Process::peb()) {
  info("    PEB.BeingDebugged:          {}",
       peb->being_debugged() ? "true" : "false");
  info("    PEB.Ldr:                    {}", hex(peb->ldr()));
  info("    PEB.ProcessParameters:      {}", hex(peb->process_parameters()));
  info("    PEB.AtlThunkSListPtr:       {}", hex(peb->atl_thunk_slist_ptr()));
  info("    PEB.AtlThunkSListPtr32:     {}", hex(peb->atl_thunk_slist_ptr32()));
  info("    PEB.PostProcessInitRoutine: {}",
       hex(peb->post_process_init_routine()));
  info("    PEB.SessionId:              {}", hex(peb->session_id()));
}
```

**Rust**

```rust
if let Some(peb) = runtime::windows::Process::peb() {
    println!("    PEB.BeingDebugged:          {}", peb.being_debugged());
    println!("    PEB.Ldr:                    {:#06x}", peb.ldr());
    println!(
        "    PEB.ProcessParameters:      {:#06x}",
        peb.process_parameters()
    );
    println!(
        "    PEB.AtlThunkSListPtr:       {:#06x}",
        peb.atl_thunk_slist_ptr()
    );
    println!(
        "    PEB.AtlThunkSListPtr32:     {:#06x}",
        peb.atl_thunk_slist_ptr32()
    );
    println!(
        "    PEB.PostProcessInitRoutine: {:#06x}",
        peb.post_process_init_routine()
    );
    println!("    PEB.SessionId:              {:#06x}", peb.session_id());
}
```

The loader’s module list is exposed through  `lief.runtime.windows.PEB.entries` ( [`lief::runtime::windows::PEB::entries`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/windows/struct.PEB.html#method.entries>) ;  [`lief.runtime.windows.PEB.entries`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.PEB.entries>) ;  [`LIEF::runtime::windows::PEB::entries()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4NK4LIEF7runtime7windows3PEB7entriesEv>) ), which yields  `lief.runtime.windows.LdrDataTableEntry` ( [`lief::runtime::windows::LdrDataTableEntry`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/windows/struct.LdrDataTableEntry.html>) ;  [`lief.runtime.windows.LdrDataTableEntry`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.LdrDataTableEntry>) ;  [`LIEF::runtime::windows::LdrDataTableEntry`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows17LdrDataTableEntryE>) ) objects. In addition to the base name and image base, each entry exposes the extended `LDR_DATA_TABLE_ENTRY` fields.

**Python**

```python
if (peb := lief.runtime.windows.Process.peb) is not None:
    first = next(iter(peb.entries), None)
    if first is not None:
        print(f"    {first.base_dll_name} extended LDR_DATA_TABLE_ENTRY fields:")
        # Always available across the supported Windows versions:
        print(f"      Flags:             {first.flags:#06x}")
        print(f"      ObsoleteLoadCount: {first.obsolete_load_count}")
        print(f"      TlsIndex:          {first.tls_index:#06x}")
        print(f"      TimeDateStamp:     {first.time_date_stamp:#06x}")
        # Attributes that are available only from certain version:
        if (v := first.ddag_node) is not None:  # Windows 8+
            print(f"      DdagNode:          {v:#06x}")
        if (v := first.original_base) is not None:  # Windows 8+
            print(f"      OriginalBase:      {v:#06x}")
        if (v := first.load_reason) is not None:  # Windows 8+
            print(f"      LoadReason:        {v}")
        if (v := first.signing_level) is not None:  # Windows 10+
            print(f"      SigningLevel:      {v}")
        if (v := first.check_sum) is not None:  # Windows 10+
            print(f"      CheckSum:          {v:#06x}")
        if (v := first.hot_patch_state) is not None:  # Windows 11+
            print(f"      HotPatchState:     {v}")
```

**C++**

```cpp
if (auto peb = LIEF::runtime::windows::Process::peb()) {
  auto entries = peb->entries();
  auto it = entries.begin();
  if (it != entries.end()) {
    info("    {} extended LDR_DATA_TABLE_ENTRY fields:", it->base_dll_name());

    // Always available across the supported Windows versions:
    info("      Flags:             {}", hex(it->flags()));
    info("      ObsoleteLoadCount: {}",
         std::to_string(it->obsolete_load_count()));
    info("      TlsIndex:          {}", hex(it->tls_index()));
    info("      TimeDateStamp:     {}", hex(it->time_date_stamp()));

    // Version-gated fields: each optional is empty when the host kernel
    // predates the field, so the OS version drives what gets printed.
    if (auto v = it->ddag_node()) { // Windows 8+
      info("      DdagNode:          {}", hex(*v));
    }
    if (auto v = it->original_base()) { // Windows 8+
      info("      OriginalBase:      {}", hex(*v));
    }
    if (auto v = it->load_reason()) { // Windows 8+
      info("      LoadReason:        {}", std::to_string(*v));
    }
    if (auto v = it->signing_level()) { // Windows 10+
      info("      SigningLevel:      {}", std::to_string((uint32_t)*v));
    }
    if (auto v = it->check_sum()) { // Windows 10+
      info("      CheckSum:          {}", hex(*v));
    }
    if (auto v = it->hot_patch_state()) { // Windows 11+
      info("      HotPatchState:     {}", std::to_string(*v));
    }
  }
}
```

**Rust**

```rust
if let Some(peb) = runtime::windows::Process::peb() {
    if let Some(first) = peb.entries().next() {
        println!(
            "    {} extended LDR_DATA_TABLE_ENTRY fields:",
            first.base_dll_name()
        );
        // Always available across the supported Windows versions:
        println!("      Flags:             {:#06x}", first.flags());
        println!("      ObsoleteLoadCount: {}", first.obsolete_load_count());
        println!("      TlsIndex:          {:#06x}", first.tls_index());
        println!("      TimeDateStamp:     {:#06x}", first.time_date_stamp());
        // Version-gated fields are None when the host kernel predates them:
        if let Some(v) = first.ddag_node() {
            println!("      DdagNode:          {:#06x}", v); // Windows 8+
        }
        if let Some(v) = first.original_base() {
            println!("      OriginalBase:      {:#06x}", v); // Windows 8+
        }
        if let Some(v) = first.load_reason() {
            println!("      LoadReason:        {}", v); // Windows 8+
        }
        if let Some(v) = first.signing_level() {
            println!("      SigningLevel:      {}", v); // Windows 10+
        }
        if let Some(v) = first.check_sum() {
            println!("      CheckSum:          {:#06x}", v); // Windows 10+
        }
        if let Some(v) = first.hot_patch_state() {
            println!("      HotPatchState:     {}", v); // Windows 11+
        }
    }
}
```

## [macOS](<https://lief.re/doc/latest/runtime/components/process.html#macos>)

On macOS,  `lief.runtime.osx.Process` ( [`lief::runtime::osx::Process`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/osx/struct.Process.html>) ;  [`lief.runtime.osx.Process`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Process>) ;  [`LIEF::runtime::osx::Process`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx7ProcessE>) ) extends the generic interface with platform-specific helpers. For instance,  `lief.runtime.osx.Process.dyld_version()` ( [`lief::runtime::osx::Process::dyld_version`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/osx/struct.Process.html#method.dyld_version>) ;  [`lief.runtime.osx.Process.dyld_version`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Process.dyld_version>) ;  [`LIEF::runtime::osx::Process::dyld_version()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx7Process12dyld_versionEv>) ) returns the version of `dyld` (the dynamic loader) in the current process:

**Python**

```python
print(f"    dyld:      {lief.runtime.osx.Process.dyld_version}")
```

**C++**

```cpp
info("    dyld:      {}", LIEF::runtime::osx::Process::dyld_version());
```

**Rust**

```rust
println!("    dyld:      {}", runtime::osx::Process::dyld_version());
```

## [Android](<https://lief.re/doc/latest/runtime/components/process.html#android>)

On Android,  `lief.runtime.android.Process` ( [`lief::runtime::android::Process`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/android/struct.Process.html>) ;  [`lief.runtime.android.Process`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Process>) ;  [`LIEF::runtime::android::Process`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android7ProcessE>) ) extends the generic interface. Here are some examples of the API:

**Python**

```python
# Access a named property
sdk = lief.runtime.android.Process.get_system_property("ro.build.version.sdk")
if sdk is not None:
    print(f"    {sdk.name}: {sdk.value} (serial: {sdk.serial})")

# Iterate over all properties
for prop in lief.runtime.android.Process.properties:
    print(f"    {prop.name}: {prop.value} (serial: {prop.serial})")
```

**C++**

```cpp
if (auto prop = LIEF::runtime::android::Process::get_system_property(
        "ro.build.version.sdk"
    ))
{
  info("    {}: {} (serial: {})", prop->name(), prop->value(),
       std::to_string(prop->serial()));
}

for (const auto& prop : LIEF::runtime::android::Process::properties()) {
  info("    {}: {} (serial: {})", prop.name(), prop.value(),
       std::to_string(prop.serial()));
}
```

**Rust**

```rust
// Query a single system property by name
if let Some(prop) = runtime::android::Process::get_system_property("ro.build.version.sdk") {
    println!(
        "    {}: {} (serial: {})",
        prop.name(),
        prop.value(),
        prop.serial()
    );
}

// Iterate over all properties
for prop in runtime::android::Process::properties() {
    println!(
        "    {}: {} (serial: {})",
        prop.name(),
        prop.value(),
        prop.serial()
    );
}
```
