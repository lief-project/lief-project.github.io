---
documentID: "048c732da6998b2fa773a35f776bc0d68f8a1af302351f8eeffad529e2f0c94f"
docname: "formats/pe/modifications/tls"
title: "TLS Modification - PE - LIEF Documentation"
description: "TLS Modification in PE. LIEF can be used to modify, create, or remove Thread Local Storage (TLS) information."
canonical: "https://lief.re/doc/latest/formats/pe/modifications/tls.html"
markdownURL: "https://lief.re/doc/latest/formats/pe/modifications/tls.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "c7f97062a240e011360ed0bf34ebbf407932463c1df22d965a2f3f85ba82e50c"
---

# [TLS Modification](<https://lief.re/doc/latest/formats/pe/modifications/tls.html#tls-modification>)

[![PE TLS Overview](https://lief.re/doc/latest/_images/tls.webp)](<https://lief.re/doc/latest/_images/tls.webp>) 

LIEF can be used to **modify**, **create**, or **remove** Thread Local Storage (TLS) information.

## [TLS Modifications](<https://lief.re/doc/latest/formats/pe/modifications/tls.html#tls-modifications>)

All attributes of the  `lief.PE.TLS` ( [`lief::pe::TLS`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.TLS.html>) ;  [`lief.PE.TLS`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.TLS>) ;  [`LIEF::PE::TLS`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE3TLSE>) ) interface can be modified as long as the changes are consistent with the layout of the PE binary. For instance, you can adjust the TLS callbacks by removing, reordering, or adding addresses:

**Python**

```python
pe: lief.PE.Binary

tls = pe.tls
assert isinstance(tls, lief.PE.TLS)

callbacks: list[int] = tls.callbacks

# Remove the last entry
callbacks.pop()

# Add an address
callbacks.append(0x140001010)

tls.callbacks = callbacks

pe.write("tls_modified.exe")
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> pe;

TLS* tls = pe->tls();

std::vector<uint64_t> callbacks = tls->callbacks();

// Remove the last entry
callbacks.pop_back();

// Add an address
callbacks.push_back(0x140001010);

tls->callbacks(std::move(callbacks));

pe->write("tls_modified.exe");
```

**Rust**

```rust
let pe: &mut lief::pe::Binary = some_pe;

let mut tls = pe.tls().unwrap();

let mut callbacks: Vec<u64> = tls.callbacks();

// Remove the last entry
callbacks.pop();

// Add an address
callbacks.push(0x140001010);

tls.set_callbacks(&callbacks);

pe.write("tls_modified.exe");
```

> **Relocations**
> 
> Note that LIEF **automatically** manages the relocations that must be created or removed when modifying the TLS callbacks.

## [TLS Creation](<https://lief.re/doc/latest/formats/pe/modifications/tls.html#tls-creation>)

If a PE binary does not contain TLS metadata, LIEF can be used to create this structure.

First, we can create and initialize a TLS instance:

**Python**

```python
tls = lief.PE.TLS()

tls.callbacks = [
    0x140001000,
    0x140001010,
]
```

**C++**

```cpp
LIEF::PE::TLS tls;

tls.callbacks(std::vector<uint64_t>{
    0x140001000,
    0x140001010,
});
```

**Rust**

```rust
let mut tls = lief::pe::TLS::new();

tls.set_callbacks(&[0x140001000, 0x140001010]);
```

And then, we can add this instance to a  `lief.PE.Binary` ( [`lief::pe::Binary`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html>) ;  [`lief.PE.Binary`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary>) ;  [`LIEF::PE::Binary`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6BinaryE>) ):

**Python**

```python
pe.tls = tls  # `tls` defined previously

pe.write("tls_demo.exe")
```

**C++**

```cpp
pe->tls(tls); // `tls` defined previously

pe->write("tls_demo.exe");
```

**Rust**

```rust
pe.set_tls(&tls); // `tls` defined previously

pe.write("tls_demo.exe");
```

> **Relocations**
> 
> Similar to TLS callback modifications, LIEF **automatically** manages relocations. In addition, it automatically initializes (if not set by the user) `AddressOfIndex`, which is required when setting up TLS metadata.
