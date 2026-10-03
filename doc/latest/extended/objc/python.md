---
documentID: "9186404652aeb90b8f55ea845e1c5db781e7633ff11a50e72497cdba4700ff4a"
docname: "extended/objc/python"
title: "Objective-C Python API - LIEF Documentation"
description: "Objective-C Python API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/extended/objc/python.html"
markdownURL: "https://lief.re/doc/latest/extended/objc/python.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "cbf003dae7203cc1bfcfde2b1becc0de6139d21dea0aea79d340bbe127da994a"
---

# [Python](<https://lief.re/doc/latest/extended/objc/python.html#python>)

## [Metadata](<https://lief.re/doc/latest/extended/objc/python.html#metadata>)

### [` lief.objc.Metadata `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Metadata>)

class lief.objc.Metadata

Bases: `object`

This class is the main interface to inspect Objective-C metadata

It can be instantiated using the function [`lief.MachO.Binary.objc_metadata`](<https://lief.re/doc/latest/formats/macho/python.html#lief.MachO.Binary.objc_metadata> "lief.MachO.Binary.objc_metadata")

#### [` categories `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Metadata.categories>)

property categories → Iterator[[lief.objc.Category](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Category> "lief.objc.Category") | None]

Return an iterator over the Objective-C categories declared in this binary (e.g. `@interface NSString (MyAdditions)`).

#### [` classes `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Metadata.classes>)

property classes → Iterator[[lief.objc.Class](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class> "lief.objc.Class") | None]

Return an iterator over the different Objective-C classes (`@interface`).

#### [` get_class `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Metadata.get_class>)

get\_class(*self*, *name: str*) → [lief.\_lief.objc.Class](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class> "lief._lief.objc.Class") | None

Try to find the Objective-C class with the given **mangled** name.

#### [` get_protocol `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Metadata.get_protocol>)

get\_protocol(*self*, *name: str*) → [lief.\_lief.objc.Protocol](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Protocol> "lief._lief.objc.Protocol") | None

Try to find the Objective-C protocol with the given **mangled** name.

#### [` protocols `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Metadata.protocols>)

property protocols → Iterator[[lief.objc.Protocol](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Protocol> "lief.objc.Protocol") | None]

Return an iterator over the Objective-C protocols declared in this binary (`@protocol`).

#### [` to_decl `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Metadata.to_decl>)

to\_decl(*self*, *opt: [lief.\_lief.objc.DeclOpt](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.DeclOpt> "lief._lief.objc.DeclOpt") = &lt;lief.\_lief.objc.DeclOpt object at 0x7f360af2db90&gt;*) → str

Generate a header-like of all the Objective-C metadata identified in the binary.

The generated output can be configured with the provided [`DeclOpt`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.DeclOpt> "lief.objc.DeclOpt") parameter.

---

## [Class](<https://lief.re/doc/latest/extended/objc/python.html#class>)

### [` lief.objc.Class `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class>)

class lief.objc.Class

Bases: `object`

This class represents an Objective-C class (`@interface`)

#### [` demangled_name `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class.demangled_name>)

property demangled\_name → str

Demangled name of the class

#### [` demangled_super_name `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class.demangled_super_name>)

property demangled\_super\_name → str

Demangled name of the superclass.

#### [` is_meta `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class.is_meta>)

property is\_meta → bool

#### [` ivars `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class.ivars>)

property ivars → Iterator[[lief.objc.IVar](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.IVar> "lief.objc.IVar") | None]

Iterator over the different instance variables defined in this class.

#### [` methods `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class.methods>)

property methods → Iterator[[lief.objc.Method](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Method> "lief.objc.Method") | None]

Iterator over the different methods defined by this class.

#### [` name `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class.name>)

property name → str

Name of the class

#### [` properties `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class.properties>)

property properties → Iterator[[lief.objc.Property](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Property> "lief.objc.Property") | None]

Iterator over the properties of this class.

#### [` protocols `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class.protocols>)

property protocols → Iterator[[lief.objc.Protocol](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Protocol> "lief.objc.Protocol") | None]

Iterator over the different protocols implemented by this class.

#### [` super_class `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class.super_class>)

property super\_class → [lief.objc.Class](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class> "lief.objc.Class") | None

Parent class in case of inheritance.

This is set **only** when the superclass is defined in the same binary. For root classes (e.g. `NSObject`) or superclasses imported from another image, it is `None` even though [`super_name`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class.super_name> "lief.objc.Class.super_name") / [`demangled_super_name`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class.demangled_super_name> "lief.objc.Class.demangled_super_name") may still be resolved.

#### [` super_name `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class.super_name>)

property super\_name → str

(raw) name of the superclass (empty for root classes or when it could not be resolved).

#### [` to_decl `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Class.to_decl>)

to\_decl(*self*, *opt: [lief.\_lief.objc.DeclOpt](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.DeclOpt> "lief._lief.objc.DeclOpt") = &lt;lief.\_lief.objc.DeclOpt object at 0x7f360af2dbf0&gt;*) → str

Generate a header-like string for this specific class.

The generated output can be configured with the provided [`DeclOpt`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.DeclOpt> "lief.objc.DeclOpt") parameter.

---

## [Category](<https://lief.re/doc/latest/extended/objc/python.html#category>)

### [` lief.objc.Category `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Category>)

class lief.objc.Category

Bases: `object`

This class represents an Objective-C category (e.g. `@interface NSString (MyAdditions)`)

#### [` class_name `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Category.class_name>)

property class\_name → str

(demangled) name of the class extended by this category

#### [` methods `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Category.methods>)

property methods → Iterator[[lief.objc.Method](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Method> "lief.objc.Method") | None]

Iterator over the different methods defined by this category.

#### [` name `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Category.name>)

property name → str

Name of the category

#### [` properties `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Category.properties>)

property properties → Iterator[[lief.objc.Property](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Property> "lief.objc.Property") | None]

Iterator over the properties of this category.

#### [` protocols `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Category.protocols>)

property protocols → Iterator[[lief.objc.Protocol](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Protocol> "lief.objc.Protocol") | None]

Iterator over the different protocols adopted by this category.

#### [` to_decl `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Category.to_decl>)

to\_decl(*self*, *opt: [lief.\_lief.objc.DeclOpt](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.DeclOpt> "lief._lief.objc.DeclOpt") = &lt;lief.\_lief.objc.DeclOpt object at 0x7f360af2dc50&gt;*) → str

Generate a header-like string for this specific category.

The generated output can be configured with the provided [`DeclOpt`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.DeclOpt> "lief.objc.DeclOpt") parameter.

---

## [Protocol](<https://lief.re/doc/latest/extended/objc/python.html#protocol>)

### [` lief.objc.Protocol `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Protocol>)

class lief.objc.Protocol

Bases: `object`

This class represents an Objective-C `@protocol`

#### [` mangled_name `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Protocol.mangled_name>)

property mangled\_name → str

Mangled name of the protocol

#### [` optional_methods `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Protocol.optional_methods>)

property optional\_methods → Iterator[[lief.objc.Method](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Method> "lief.objc.Method") | None]

Iterator over the methods that could be overridden

#### [` properties `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Protocol.properties>)

property properties → Iterator[[lief.objc.Property](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Property> "lief.objc.Property") | None]

Iterator over the properties defined in this protocol

#### [` protocols `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Protocol.protocols>)

property protocols → Iterator[[lief.objc.Protocol](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Protocol> "lief.objc.Protocol") | None]

Iterator over the protocols adopted by this protocol (e.g. the `<Bar, Baz>` in `@protocol Foo <Bar, Baz>`).

#### [` required_methods `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Protocol.required_methods>)

property required\_methods → Iterator[[lief.objc.Method](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Method> "lief.objc.Method") | None]

Iterator over the methods of this protocol that must be implemented

#### [` to_decl `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Protocol.to_decl>)

to\_decl(*self*, *opt: [lief.\_lief.objc.DeclOpt](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.DeclOpt> "lief._lief.objc.DeclOpt") = &lt;lief.\_lief.objc.DeclOpt object at 0x7f360af2dcf0&gt;*) → str

Generate a header-like string for this specific protocol.

The generated output can be configured with the provided [`DeclOpt`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.DeclOpt> "lief.objc.DeclOpt") parameter.

---

## [Method](<https://lief.re/doc/latest/extended/objc/python.html#method>)

### [` lief.objc.Method `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Method>)

class lief.objc.Method

Bases: `object`

This class represents an Objective-C Method.

#### [` address `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Method.address>)

property address → int

Virtual address where this method is implemented in the binary

#### [` is_instance `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Method.is_instance>)

property is\_instance → bool

Whether it’s an instance method or not.

#### [` mangled_type `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Method.mangled_type>)

property mangled\_type → str

Prototype of the method in its mangled representation (e.g. `@16@0:8`)

#### [` name `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Method.name>)

property name → str

Name of the method

---

## [IVar](<https://lief.re/doc/latest/extended/objc/python.html#ivar>)

### [` lief.objc.IVar `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.IVar>)

class lief.objc.IVar

Bases: `object`

This class represents an instance variable (ivar)

#### [` mangled_type `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.IVar.mangled_type>)

property mangled\_type → str

Type of the instance var in its mangled representation (e.g. `[29i]`)

#### [` name `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.IVar.name>)

property name → str

Name of the instance variable

---

## [Property](<https://lief.re/doc/latest/extended/objc/python.html#property>)

### [` lief.objc.Property `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Property>)

class lief.objc.Property

Bases: `object`

This class represents a `@property` in Objective-C

#### [` attribute `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Property.attribute>)

property attribute → str

(raw) property’s attributes (e.g. `T@"NSString",C,D,N`)

#### [` name `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Property.name>)

property name → str

Name of the property

---

## [DeclOpt](<https://lief.re/doc/latest/extended/objc/python.html#declopt>)

### [` lief.objc.DeclOpt `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.DeclOpt>)

class lief.objc.DeclOpt(*self*)

Bases: `object`

This structure wraps options to tweak the generated output of functions like [`lief.objc.Metadata.to_decl()`](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.Metadata.to_decl> "lief.objc.Metadata.to_decl")

#### [` show_annotations `](<https://lief.re/doc/latest/extended/objc/python.html#lief.objc.DeclOpt.show_annotations>)

property show\_annotations → bool

Whether annotations like method’s address should be printed.
