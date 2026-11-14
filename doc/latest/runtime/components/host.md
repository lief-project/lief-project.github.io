---
documentID: "c90d16332011753cba6aa033d11d168f06a93834fe38b200999652c405d286d2"
docname: "runtime/components/host"
title: "Host - Runtime - LIEF Documentation"
description: "Query the hostname, user directories, and platform-specific host information with the LIEF runtime API."
canonical: "https://lief.re/doc/latest/runtime/components/host.html"
markdownURL: "https://lief.re/doc/latest/runtime/components/host.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "f33eac6c41ce365ab1a851ea6f167c54691ce497d05974b420c92cd1bc5ebb73"
---

# [Host](<https://lief.re/doc/latest/runtime/components/host.html#host>)

The  `lief.runtime.Host` ( [`lief::runtime::Host`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/struct.Host.html>) ;  [`lief.runtime.Host`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.Host>) ;  [`LIEF::runtime::Host`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime4HostE>) ) interface exposes an API to query information about the host on which LIEF is running. It provides a cross-platform API for common values like the hostname and user directories for configuration, cache, and temporary files. Use [Process](<https://lief.re/doc/latest/runtime/components/process.html#runtime-process>) for process-specific information such as the PID and page size.

## [Cross-platform](<https://lief.re/doc/latest/runtime/components/host.html#cross-platform>)

The following snippet illustrates how to retrieve the generic host information that is available on every supported platform:

**Python**

```python
print(f"    Hostname:    {lief.runtime.Host.name}")
print(f"    Home:        {lief.runtime.Host.home_dir}")
print(f"    cache:       {lief.runtime.Host.cache_dir}")
print(f"    temp:        {lief.runtime.Host.tmp_dir}")
print(f"    config:      {lief.runtime.Host.config_dir}")
```

**C++**

```cpp
info("    Hostname: {}", LIEF::runtime::Host::name());
info("    Home:     {}", LIEF::runtime::Host::home_dir());
info("    Cache:    {}", LIEF::runtime::Host::cache_dir());
info("    Temp:     {}", LIEF::runtime::Host::tmp_dir());
info("    Config:   {}", LIEF::runtime::Host::config_dir());
```

**Rust**

```rust
println!("    Hostname: {}", runtime::Host::name());
println!("    Home:     {}", runtime::Host::home_dir());
println!("    Cache:    {}", runtime::Host::cache_dir());
println!("    Temp:     {}", runtime::Host::tmp_dir());
println!("    Config:   {}", runtime::Host::config_dir());
```

## [Linux](<https://lief.re/doc/latest/runtime/components/host.html#linux>)

The  `lief.runtime.linux.Host` ( [`lief::runtime::linux::Host`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/linux/struct.Host.html>) ;  [`lief.runtime.linux.Host`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.linux.Host>) ;  [`LIEF::runtime::Linux::Host`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime5Linux4HostE>) ) interface exposes Linux-specific host information:

**Python**

```python
print(f"    sys_name:    {lief.runtime.linux.Host.sys_name}")
print(f"    sys_release: {lief.runtime.linux.Host.sys_release}")
print(f"    sys_version: {lief.runtime.linux.Host.sys_version}")
print(f"    hardware:    {lief.runtime.linux.Host.hardware}")
```

**C++**

```cpp
info("    sys_name:    {}", LIEF::runtime::Linux::Host::sys_name());
info("    sys_release: {}", LIEF::runtime::Linux::Host::sys_release());
info("    sys_version: {}", LIEF::runtime::Linux::Host::sys_version());
info("    hardware:    {}", LIEF::runtime::Linux::Host::hardware());
```

**Rust**

```rust
println!("    sys_name:    {}", runtime::linux::Host::sys_name());
println!("    sys_release: {}", runtime::linux::Host::sys_release());
println!("    sys_version: {}", runtime::linux::Host::sys_version());
println!("    hardware:    {}", runtime::linux::Host::hardware());
```

## [Windows](<https://lief.re/doc/latest/runtime/components/host.html#windows>)

The  `lief.runtime.windows.Host` ( [`lief::runtime::windows::Host`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/windows/struct.Host.html>) ;  [`lief.runtime.windows.Host`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Host>) ;  [`LIEF::runtime::windows::Host`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4HostE>) ) interface exposes Windows-specific host information such as the operating system version ( `lief.runtime.windows.Host.version()` ( [`lief::runtime::windows::Host::version`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/windows/struct.Host.html#method.version>) ;  [`lief.runtime.windows.Host.version`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.windows.Host.version>) ;  [`LIEF::runtime::windows::Host::version()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7windows4Host7versionEv>) )):

**Python**

```python
print(f"    Version:  {lief.runtime.windows.Host.version}")
```

**C++**

```cpp
info("    Version:  {}", LIEF::runtime::windows::Host::version().to_string());
```

**Rust**

```rust
if let Some(version) = runtime::windows::Host::version() {
    println!("    Version:  {}", version);
}
```

## [macOS](<https://lief.re/doc/latest/runtime/components/host.html#macos>)

The  `lief.runtime.osx.Host` ( [`lief::runtime::osx::Host`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/osx/struct.Host.html>) ;  [`lief.runtime.osx.Host`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host>) ;  [`LIEF::runtime::osx::Host`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4HostE>) ) interface exposes macOS-specific host information such as whether System Integrity Protection is enabled ( `lief.runtime.osx.Host.is_sip_enabled` ( [`lief::runtime::osx::Host::is_sip_enabled`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/osx/struct.Host.html#method.is_sip_enabled>) ;  [`lief.runtime.osx.Host.is_sip_enabled`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.osx.Host.is_sip_enabled>) ;  [`LIEF::runtime::osx::Host::is_sip_enabled()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime3osx4Host14is_sip_enabledEv>) )):

**Python**

```python
print(f"    Version:  {lief.runtime.osx.Host.os_version_name}")
sip = "enabled" if lief.runtime.osx.Host.is_sip_enabled else "disabled"
print(f"    SIP:      {sip}")
```

**C++**

```cpp
info("    Version:  {}", LIEF::runtime::osx::Host::os_version_name());
info("    SIP:      {}",
     LIEF::runtime::osx::Host::is_sip_enabled() ? "enabled" : "disabled");
```

**Rust**

```rust
println!("    Version:  {}", runtime::osx::Host::os_version_name());
println!(
    "    SIP:      {}",
    if runtime::osx::Host::is_sip_enabled() {
        "enabled"
    } else {
        "disabled"
    }
);
```

## [Android](<https://lief.re/doc/latest/runtime/components/host.html#android>)

The  `lief.runtime.android.Host` ( [`lief::runtime::android::Host`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/android/struct.Host.html>) ;  [`lief.runtime.android.Host`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Host>) ;  [`LIEF::runtime::android::Host`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android4HostE>) ) interface exposes Android-specific host information such as the device’s SDK/API level ( `lief.runtime.android.Host.sdk_version()` ( [`lief::runtime::android::Host::sdk_version`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/runtime/android/struct.Host.html#method.sdk_version>) ;  [`lief.runtime.android.Host.sdk_version`](<https://lief.re/doc/latest/runtime/python.html#lief.runtime.android.Host.sdk_version>) ;  [`LIEF::runtime::android::Host::sdk_version()`](<https://lief.re/doc/latest/runtime/cpp.html#_CPPv4N4LIEF7runtime7android4Host11sdk_versionEv>) )):

**Python**

```python
if (sdk := lief.runtime.android.Host.sdk_version) is not None:
    print(f"    SDK:         {sdk}")
```

**C++**

```cpp
if (auto sdk = LIEF::runtime::android::Host::sdk_version()) {
  info("    SDK:      {}", std::to_string(*sdk));
}
```

**Rust**

```rust
if let Some(sdk) = runtime::android::Host::sdk_version() {
    println!("    SDK:      {}", sdk);
}
```
