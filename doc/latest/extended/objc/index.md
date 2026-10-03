---
documentID: "f89a23b58e22d1d6c1677fdf240bdafb678c8242dbc5981ad12d512bab4a9b02"
docname: "extended/objc/index"
title: "Objective-C - LIEF Documentation"
description: "Inspect Objective-C classes, methods, properties, and protocols in Mach-O files and generate header-like declarations with LIEF Extended."
canonical: "https://lief.re/doc/latest/extended/objc/index.html"
markdownURL: "https://lief.re/doc/latest/extended/objc/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "ecaaea19b7ab1f22f0889cddc0e98977c2a9718b9cb7047ea10cd92b9cca25e4"
---

# [Objective-C](<https://lief.re/doc/latest/extended/objc/index.html#objective-c>)

API

- [C++](<https://lief.re/doc/latest/extended/objc/cpp.html>)
  - [Metadata](<https://lief.re/doc/latest/extended/objc/cpp.html#metadata>)
  - [Class](<https://lief.re/doc/latest/extended/objc/cpp.html#class>)
  - [Category](<https://lief.re/doc/latest/extended/objc/cpp.html#category>)
  - [Protocol](<https://lief.re/doc/latest/extended/objc/cpp.html#protocol>)
  - [Instance Variable (IVar)](<https://lief.re/doc/latest/extended/objc/cpp.html#instance-variable-ivar>)
  - [Method](<https://lief.re/doc/latest/extended/objc/cpp.html#method>)
  - [Property](<https://lief.re/doc/latest/extended/objc/cpp.html#property>)
  - [DeclOpt](<https://lief.re/doc/latest/extended/objc/cpp.html#declopt>)
- [Python](<https://lief.re/doc/latest/extended/objc/python.html>)
  - [Metadata](<https://lief.re/doc/latest/extended/objc/python.html#metadata>)
  - [Class](<https://lief.re/doc/latest/extended/objc/python.html#class>)
  - [Category](<https://lief.re/doc/latest/extended/objc/python.html#category>)
  - [Protocol](<https://lief.re/doc/latest/extended/objc/python.html#protocol>)
  - [Method](<https://lief.re/doc/latest/extended/objc/python.html#method>)
  - [IVar](<https://lief.re/doc/latest/extended/objc/python.html#ivar>)
  - [Property](<https://lief.re/doc/latest/extended/objc/python.html#property>)
  - [DeclOpt](<https://lief.re/doc/latest/extended/objc/python.html#declopt>)
- [Rust](<https://lief.re/doc/latest/extended/objc/rust.html>)

## [Introduction](<https://lief.re/doc/latest/extended/objc/index.html#introduction>)

LIEF Extended reads Objective-C classes, methods, properties, and protocols from Mach-O metadata. It can also generate header-like declarations.

This information comes from Objective-C runtime metadata in the file, so it can be present even when source-level debug information is unavailable.

## [Inspect metadata](<https://lief.re/doc/latest/extended/objc/index.html#inspect-metadata>)

If a Mach-O binary embeds Objective-C metadata, it can be accessed through  `lief.MachO.Binary.objc_metadata` ( [`lief::macho::Binary::objc_metadata`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/macho/struct.Binary.html#method.objc_metadata>) ;  [`lief.MachO.Binary.objc_metadata`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.objc_metadata>) ;  [`LIEF::MachO::Binary::objc_metadata()`](<https://lief.re/doc/latest/formats/macho/cpp.html#_CPPv4NK4LIEF5MachO6Binary13objc_metadataEv>) ):

**Python**

```python
macho: lief.MachO.Binary

metadata = macho.objc_metadata
if metadata is not None:
    print("Objective-C metadata found")
```

**C++**

```cpp
std::unique_ptr<LIEF::MachO::Binary> macho;

std::unique_ptr<LIEF::objc::Metadata> metadata = macho->objc_metadata();

if (metadata != nullptr) {
  std::cout << "Objective metadata found\n";
}
```

**Rust**

```rust
let macho: &lief::macho::Binary = some_macho;

if let Some(metadata) = macho.objc_metadata() {
    println!("Objective-C metadata found");
}
```

When metadata is present, use  `lief.ObjC.Metadata` ( [`lief::objc::Metadata`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/objc/struct.Metadata.html>) ;  [`lief.objc.Metadata`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Metadata>) ;  [`LIEF::objc::Metadata`](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8MetadataE>) ) to inspect it. In particular, the  `lief.ObjC.Metadata.to_decl()` ( [`lief::objc::Metadata::to_decl`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/objc/struct.Metadata.html#method.to_decl>) ;  [`lief.objc.Metadata.to_decl()`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Metadata.to_decl>) ;  [`LIEF::objc::Metadata::to_decl()`](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Metadata7to_declERK7DeclOpt>) ) function can be used to generate a header-like output of all the Objective-C metadata found in the binary.

**Python**

```python
macho: lief.MachO.Binary

metadata = macho.objc_metadata
for clazz in metadata.classes:
    print(f"name={clazz.name}")
    for meth in clazz.methods:
        print(f"  method.name={meth.name}")
print(metadata.to_decl())
```

**C++**

```cpp
std::unique_ptr<LIEF::MachO::Binary> bin;

std::unique_ptr<LIEF::objc::Metadata> metadata = bin->objc_metadata();

for (const LIEF::objc::Class& clazz : metadata->classes()) {
  std::cout << "name=" << clazz.name() << '\n';
  for (const LIEF::objc::Method& meth : clazz.methods()) {
    std::cout << "  method.name=" << meth.name() << '\n';
  }
}

std::cout << metadata->to_decl();
```

**Rust**

```rust
let macho: &lief::macho::Binary = some_macho;

let Some(metadata) = macho.objc_metadata() else {
    process::exit(1);
};

for class in metadata.classes() {
    println!("name={}", class.name());
    for method in class.methods() {
        println!("  method.name={}", method.name());
    }
}
println!("{}", metadata.to_decl());
```

## [Class Dump](<https://lief.re/doc/latest/extended/objc/index.html#class-dump>)

Generate header-like declarations to review the classes and protocols found in the binary. The output describes the recorded metadata, including method signatures. It does not recover method implementations or the original headers.

![Objective-C class dump based on LIEF & LLVM](https://lief.re/doc/latest/_images/objc-class-dump.webp)

LIEF provides a way to generate this header-like information at various levels:

- `lief.ObjC.Metadata.to_decl()` ( [`lief::objc::Metadata::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/objc/struct.Metadata.html#method.to_decl_with_opt>) ;  [`lief.objc.Metadata.to_decl()`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Metadata.to_decl>) ;  [`LIEF::objc::Metadata::to_decl()`](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Metadata7to_declERK7DeclOpt>) )
- `lief.ObjC.Class.to_decl()` ( [`lief::objc::Class::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/objc/struct.Class.html#method.to_decl_with_opt>) ;  [`lief.objc.Class.to_decl()`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class.to_decl>) ;  [`LIEF::objc::Class::to_decl()`](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc5Class7to_declERK7DeclOpt>) )
- `lief.ObjC.Protocol.to_decl()` ( [`lief::objc::Protocol::to_decl_with_opt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/objc/struct.Protocol.html#method.to_decl_with_opt>) ;  [`lief.objc.Protocol.to_decl()`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Protocol.to_decl>) ;  [`LIEF::objc::Protocol::to_decl()`](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Protocol7to_declERK7DeclOpt>) )

Technically, this output is created by generating a Clang AST and applying the LLVM printer visitor to it.

**Code**

```rust
fn classdump(macho: &lief::macho::Binary) {
    let metadata = macho.objc_metadata().expect("Missing Objective-C info");
    for class in metadata.classes() {
        println!("{}", class.to_decl());
    }
}
```

**Result**

```objc
@interface APMEventFilter<APMAudienceFilter> {
    bool _sessionScoped;
    bool _dynamic;
    bool _sequence;
    int _audienceID;
    int _filterID;
    NSString * _eventName;
    NSData * _data;
}
// Address: 0x0101859ee0
- (NSObject *)initWithAudienceID:(APMEventFilter *)self filterID:(SEL)id eventName:(int)arg2 data:(int)arg3 sessionScoped:(NSObject *)arg4 dynamic:(NSObject *)arg5 sequence:(bool)arg6 :(bool)arg7 :(bool)arg8;
// Address: 0x0101682590
- (int)audienceID:(APMEventFilter *)self :(SEL)id;
// Address: 0x01017b6d98
- (int)filterID:(APMEventFilter *)self :(SEL)id;
// Address: 0x01018a4a6c
- (bool)isSessionScoped:(APMEventFilter *)self :(SEL)id;
// Address: 0x01017630d4
- (bool)isDynamic:(APMEventFilter *)self :(SEL)id;
// Address: 0x01016adbb4
- (bool)isSequence:(APMEventFilter *)self :(SEL)id;
// Address: 0x010187a5f8
- (NSObject *)eventName:(APMEventFilter *)self :(SEL)id;
// Address: 0x0101581bfc
- (NSObject *)data:(APMEventFilter *)self :(SEL)id;
// Address: 0x01018e1f3c
- (void).cxx_destruct:(APMEventFilter *)self :(SEL)id;
@property void eventName;
@property void data;
@property void audienceID;
@property void filterID;
@property void sessionScoped;
@property void dynamic;
@property void sequence;
@property void hash;
@property void superclass;
@property void description;
@property void debugDescription;
@end
```

The  `lief.ObjC.DeclOpt` ( [`lief::objc::DeclOpt`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/objc/struct.DeclOpt.html>) ;  [`lief.objc.DeclOpt`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.DeclOpt>) ;  [`LIEF::objc::DeclOpt`](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc7DeclOptE>) ) can be used to customize the generated output. For example, we can remove the commented addresses associated with Objective-C methods using this option:

```python
def print_without_address(macho: lief.MachO.Binary):

    metadata = macho.objc_metadata

    config = lief.objc.DeclOpt()
    config.show_annotations = False

    for cls in metadata.classes:
        print(cls.to_decl(config))
```

## [References](<https://lief.re/doc/latest/extended/objc/index.html#references>)

- [romainthomas/iCDump](<https://github.com/romainthomas/iCDump>)
- [nygard/class-dump](<https://github.com/nygard/class-dump>)
- [https://www.romainthomas.fr/post/23-01-icdump/](<https://www.romainthomas.fr/post/23-01-icdump/>)

## [API](<https://lief.re/doc/latest/extended/objc/index.html#api>)

You can find the documentation of the API for the different languages here:

[Python API](<https://lief.re/doc/latest/extended/objc/python.html>)

[C++ API](<https://lief.re/doc/latest/extended/objc/cpp.html>)

Rust API: [`lief::objc`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/objc/index.html>)
