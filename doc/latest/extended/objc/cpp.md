---
documentID: "5e66d3f1b9f06f5c521f61daf9e0bbbea2e8ac0a1b7cd0b308d792f08e75c9fb"
docname: "extended/objc/cpp"
title: "Objective-C C++ API - LIEF Documentation"
description: "Objective-C C++ API reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/extended/objc/cpp.html"
markdownURL: "https://lief.re/doc/latest/extended/objc/cpp.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "011917b265dbc8e50837f3d5a34b077c666a09448714d542cf2fbccf8389ba43"
---

# [C++](<https://lief.re/doc/latest/extended/objc/cpp.html#c>)

> **Note**
> 
> You can also find the Doxygen documentation here: [here](<https://lief.re/doc/latest/doxygen/>)

## [Metadata](<https://lief.re/doc/latest/extended/objc/cpp.html#metadata>)

### [` Metadata `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8MetadataE>)

class Metadata

This class is the main interface to inspect Objective-C metadata.

It can be instantiated using the function [LIEF::MachO::Binary::objc\_metadata](<https://lief.re/doc/latest/formats/macho/cpp.html#classLIEF_1_1MachO_1_1Binary_1a611129a76b828147ebb306fe7c11609d>)

Public Types

#### [` classes_it `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Metadata10classes_itE>)

using classes\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Class](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5ClassE> "LIEF::objc::Class")::[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorE> "LIEF::objc::Class::Iterator")&gt;

#### [` protocols_it `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Metadata12protocols_itE>)

using protocols\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Protocol](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8ProtocolE> "LIEF::objc::Protocol")::[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorE> "LIEF::objc::Protocol::Iterator")&gt;

#### [` categories_it `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Metadata13categories_itE>)

using categories\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Category](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8CategoryE> "LIEF::objc::Category")::[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorE> "LIEF::objc::Category::Iterator")&gt;

Public Functions

#### [` Metadata `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Metadata8MetadataENSt10unique_ptrIN7details8MetadataEEE>)

Metadata(std::unique\_ptr&lt;details::Metadata&gt; impl)

#### [` classes `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Metadata7classesEv>)

[classes\_it](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Metadata10classes_itE> "LIEF::objc::Metadata::classes_it") classes() const

Return an iterator over the different Objective-C classes (`@interface`).

#### [` protocols `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Metadata9protocolsEv>)

[protocols\_it](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Metadata12protocols_itE> "LIEF::objc::Metadata::protocols_it") protocols() const

Return an iterator over the Objective-C protocols declared in this binary (`@protocol`).

#### [` categories `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Metadata10categoriesEv>)

[categories\_it](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Metadata13categories_itE> "LIEF::objc::Metadata::categories_it") categories() const

Return an iterator over the Objective-C categories declared in this binary (e.g. `@interface NSString (MyAdditions)`).

#### [` get_class `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Metadata9get_classERKNSt6stringE>)

std::unique\_ptr&lt;[Class](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5ClassE> "LIEF::objc::Class")&gt; get\_class(const std::string &amp;name) const

Try to find the Objective-C class with the given **mangled** name.

#### [` get_protocol `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Metadata12get_protocolERKNSt6stringE>)

std::unique\_ptr&lt;[Protocol](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8ProtocolE> "LIEF::objc::Protocol")&gt; get\_protocol(const std::string &amp;name) const

Try to find the Objective-C protocol with the given **mangled** name.

#### [` to_decl `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Metadata7to_declERK7DeclOpt>)

std::string to\_decl(const [DeclOpt](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc7DeclOptE> "LIEF::objc::DeclOpt") &amp;opt = [DeclOpt](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc7DeclOptE> "LIEF::objc::DeclOpt")()) const

Generate a header-like of all the Objective-C metadata identified in the binary. The generated output can be configured with the [DeclOpt](<https://lief.re/doc/latest/extended/objc/cpp.html#structLIEF_1_1objc_1_1DeclOpt>).

#### [` ~Metadata `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8MetadataD0Ev>)

~Metadata()

---

## [Class](<https://lief.re/doc/latest/extended/objc/cpp.html#class>)

### [` Class `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5ClassE>)

class Class

This class represents an Objective-C class (`@interface`).

Public Types

#### [` methods_t `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class9methods_tE>)

using methods\_t = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Method](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6MethodE> "LIEF::objc::Method")::[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorE> "LIEF::objc::Method::Iterator")&gt;

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Class_1_1Iterator>) for the class’s methods.

#### [` protocols_t `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class11protocols_tE>)

using protocols\_t = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Protocol](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8ProtocolE> "LIEF::objc::Protocol")::[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorE> "LIEF::objc::Protocol::Iterator")&gt;

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Class_1_1Iterator>) for the protocols implemented by this class.

#### [` properties_t `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class12properties_tE>)

using properties\_t = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Property](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8PropertyE> "LIEF::objc::Property")::[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorE> "LIEF::objc::Property::Iterator")&gt;

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Class_1_1Iterator>) for the properties declared by this class.

#### [` ivars_t `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class7ivars_tE>)

using ivars\_t = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[IVar](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVarE> "LIEF::objc::IVar")::[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorE> "LIEF::objc::IVar::Iterator")&gt;

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Class_1_1Iterator>) for the instance variables defined by this class.

Public Functions

#### [` Class `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class5ClassENSt10unique_ptrIN7details5ClassEEE>)

Class(std::unique\_ptr&lt;details::Class&gt; impl)

#### [` name `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc5Class4nameEv>)

std::string name() const

Name of the class.

#### [` demangled_name `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc5Class14demangled_nameEv>)

std::string demangled\_name() const

Demangled name of the class.

#### [` super_class `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc5Class11super_classEv>)

std::unique\_ptr&lt;[Class](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5ClassE> "LIEF::objc::Class")&gt; super\_class() const

Parent class in case of inheritance.

This returns the superclass object **only** when it is defined in the same binary. For root classes (e.g. `NSObject`) or superclasses imported from another image, it returns a null pointer even though the name can still be resolved through [super\_name()](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Class_1aa3429f59edab62c214f6c56284da70b4>) / [demangled\_super\_name()](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Class_1a91bd9869bfaf2531da788c50cee02e47>).

#### [` super_name `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc5Class10super_nameEv>)

std::string super\_name() const

(raw) name of the superclass (empty for root classes or when it could not be resolved).

#### [` demangled_super_name `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc5Class20demangled_super_nameEv>)

std::string demangled\_super\_name() const

Demangled name of the superclass.

#### [` is_meta `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc5Class7is_metaEv>)

bool is\_meta() const

#### [` methods `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc5Class7methodsEv>)

[methods\_t](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class9methods_tE> "LIEF::objc::Class::methods_t") methods() const

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Class_1_1Iterator>) over the different methods defined by this class.

#### [` protocols `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc5Class9protocolsEv>)

[protocols\_t](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class11protocols_tE> "LIEF::objc::Class::protocols_t") protocols() const

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Class_1_1Iterator>) over the different protocols implemented by this class.

#### [` properties `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc5Class10propertiesEv>)

[properties\_t](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class12properties_tE> "LIEF::objc::Class::properties_t") properties() const

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Class_1_1Iterator>) over the properties of this class.

#### [` ivars `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc5Class5ivarsEv>)

[ivars\_t](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class7ivars_tE> "LIEF::objc::Class::ivars_t") ivars() const

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Class_1_1Iterator>) over the different instance variables defined in this class.

#### [` to_decl `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc5Class7to_declERK7DeclOpt>)

std::string to\_decl(const [DeclOpt](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc7DeclOptE> "LIEF::objc::DeclOpt") &amp;opt = [DeclOpt](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc7DeclOptE> "LIEF::objc::DeclOpt")()) const

Generate a header-like string for this specific class.

The generated output can be configured with [DeclOpt](<https://lief.re/doc/latest/extended/objc/cpp.html#structLIEF_1_1objc_1_1DeclOpt>)

#### [` ~Class `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5ClassD0Ev>)

~Class()

#### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorE> "LIEF::objc::Class::Iterator"), std::bidirectional\_iterator\_tag, [Class](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5ClassE> "LIEF::objc::Class"), std::ptrdiff\_t, const [Class](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5ClassE> "LIEF::objc::Class")\*, const [Class](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5ClassE> "LIEF::objc::Class")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8Iterator14implementationE>)

using implementation = details::ClassIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8Iterator8IteratorENSt10unique_ptrIN7details7ClassItEEE>)

Iterator(std::unique\_ptr&lt;details::ClassIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8Iterator8IteratorERK8Iterator> "LIEF::objc::Class::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorE> "LIEF::objc::Class::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorE> "LIEF::objc::Class::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8Iterator8IteratorERR8Iterator> "LIEF::objc::Class::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorE> "LIEF::objc::Class::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorE> "LIEF::objc::Class::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorE> "LIEF::objc::Class::Iterator") &amp;operator++()

##### [` operator-- `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratormmEv>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorE> "LIEF::objc::Class::Iterator") &amp;operator--()

##### [` operator* `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc5Class8IteratormlEv>)

const [Class](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5ClassE> "LIEF::objc::Class") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc5Class8IteratorptEv>)

const [Class](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5ClassE> "LIEF::objc::Class") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8Iterator5yieldEv>)

std::unique\_ptr&lt;[Class](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5ClassE> "LIEF::objc::Class")&gt; yield()

Transfer ownership of the class at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorppEi>)

inline DerivedT operator++(int)

##### [` operator-- `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratormmEi>)

inline DerivedT operator--(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorE> "LIEF::objc::Class::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorE> "LIEF::objc::Class::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorE> "LIEF::objc::Class::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc5Class8IteratorE> "LIEF::objc::Class::Iterator") &amp;RHS)

---

## [Category](<https://lief.re/doc/latest/extended/objc/cpp.html#category>)

### [` Category `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8CategoryE>)

class Category

This class represents an Objective-C category (e.g. `@interface NSString (MyAdditions)`).

Public Types

#### [` methods_t `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category9methods_tE>)

using methods\_t = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Method](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6MethodE> "LIEF::objc::Method")::[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorE> "LIEF::objc::Method::Iterator")&gt;

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Category_1_1Iterator>) for the category’s methods.

#### [` protocols_t `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category11protocols_tE>)

using protocols\_t = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Protocol](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8ProtocolE> "LIEF::objc::Protocol")::[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorE> "LIEF::objc::Protocol::Iterator")&gt;

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Category_1_1Iterator>) for the protocols adopted by this category.

#### [` properties_t `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category12properties_tE>)

using properties\_t = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Property](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8PropertyE> "LIEF::objc::Property")::[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorE> "LIEF::objc::Property::Iterator")&gt;

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Category_1_1Iterator>) for the properties declared by this category.

Public Functions

#### [` Category `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8CategoryENSt10unique_ptrIN7details8CategoryEEE>)

Category(std::unique\_ptr&lt;details::Category&gt; impl)

#### [` name `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Category4nameEv>)

std::string name() const

Name of the category.

#### [` class_name `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Category10class_nameEv>)

std::string class\_name() const

(demangled) name of the class extended by this category

#### [` methods `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Category7methodsEv>)

[methods\_t](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category9methods_tE> "LIEF::objc::Category::methods_t") methods() const

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Category_1_1Iterator>) over the different methods defined by this category.

#### [` protocols `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Category9protocolsEv>)

[protocols\_t](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category11protocols_tE> "LIEF::objc::Category::protocols_t") protocols() const

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Category_1_1Iterator>) over the different protocols adopted by this category.

#### [` properties `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Category10propertiesEv>)

[properties\_t](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category12properties_tE> "LIEF::objc::Category::properties_t") properties() const

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Category_1_1Iterator>) over the properties of this category.

#### [` to_decl `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Category7to_declERK7DeclOpt>)

std::string to\_decl(const [DeclOpt](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc7DeclOptE> "LIEF::objc::DeclOpt") &amp;opt = [DeclOpt](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc7DeclOptE> "LIEF::objc::DeclOpt")()) const

Generate a header-like string for this specific category.

The generated output can be configured with [DeclOpt](<https://lief.re/doc/latest/extended/objc/cpp.html#structLIEF_1_1objc_1_1DeclOpt>)

#### [` ~Category `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8CategoryD0Ev>)

~Category()

#### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorE> "LIEF::objc::Category::Iterator"), std::bidirectional\_iterator\_tag, [Category](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8CategoryE> "LIEF::objc::Category"), std::ptrdiff\_t, const [Category](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8CategoryE> "LIEF::objc::Category")\*, const [Category](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8CategoryE> "LIEF::objc::Category")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8Iterator14implementationE>)

using implementation = details::CategoryIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8Iterator8IteratorENSt10unique_ptrIN7details10CategoryItEEE>)

Iterator(std::unique\_ptr&lt;details::CategoryIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8Iterator8IteratorERK8Iterator> "LIEF::objc::Category::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorE> "LIEF::objc::Category::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorE> "LIEF::objc::Category::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8Iterator8IteratorERR8Iterator> "LIEF::objc::Category::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorE> "LIEF::objc::Category::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorE> "LIEF::objc::Category::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorE> "LIEF::objc::Category::Iterator") &amp;operator++()

##### [` operator-- `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratormmEv>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorE> "LIEF::objc::Category::Iterator") &amp;operator--()

##### [` operator* `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Category8IteratormlEv>)

const [Category](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8CategoryE> "LIEF::objc::Category") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Category8IteratorptEv>)

const [Category](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8CategoryE> "LIEF::objc::Category") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8Iterator5yieldEv>)

std::unique\_ptr&lt;[Category](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8CategoryE> "LIEF::objc::Category")&gt; yield()

Transfer ownership of the category at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorppEi>)

inline DerivedT operator++(int)

##### [` operator-- `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratormmEi>)

inline DerivedT operator--(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorE> "LIEF::objc::Category::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorE> "LIEF::objc::Category::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorE> "LIEF::objc::Category::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Category8IteratorE> "LIEF::objc::Category::Iterator") &amp;RHS)

---

## [Protocol](<https://lief.re/doc/latest/extended/objc/cpp.html#protocol>)

### [` Protocol `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8ProtocolE>)

class Protocol

This class represents an Objective-C `@protocol`.

Public Types

#### [` methods_it `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol10methods_itE>)

using methods\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Method](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6MethodE> "LIEF::objc::Method")::[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorE> "LIEF::objc::Method::Iterator")&gt;

#### [` properties_it `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol13properties_itE>)

using properties\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Property](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8PropertyE> "LIEF::objc::Property")::[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorE> "LIEF::objc::Property::Iterator")&gt;

#### [` protocols_it `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol12protocols_itE>)

using protocols\_it = [iterator\_range](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range")&lt;[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorE> "LIEF::objc::Protocol::Iterator")&gt;

Public Functions

#### [` Protocol `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8ProtocolENSt10unique_ptrIN7details8ProtocolEEE>)

Protocol(std::unique\_ptr&lt;details::Protocol&gt; impl)

#### [` mangled_name `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Protocol12mangled_nameEv>)

std::string mangled\_name() const

Mangled name of the protocol.

#### [` protocols `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Protocol9protocolsEv>)

[protocols\_it](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol12protocols_itE> "LIEF::objc::Protocol::protocols_it") protocols() const

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Protocol_1_1Iterator>) over the protocols adopted by this protocol (e.g. the `<Bar, Baz>` in `@protocol Foo <Bar, Baz>`).

#### [` optional_methods `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Protocol16optional_methodsEv>)

[methods\_it](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol10methods_itE> "LIEF::objc::Protocol::methods_it") optional\_methods() const

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Protocol_1_1Iterator>) over the methods that could be overridden.

#### [` required_methods `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Protocol16required_methodsEv>)

[methods\_it](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol10methods_itE> "LIEF::objc::Protocol::methods_it") required\_methods() const

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Protocol_1_1Iterator>) over the methods of this protocol that must be implemented.

#### [` properties `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Protocol10propertiesEv>)

[properties\_it](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol13properties_itE> "LIEF::objc::Protocol::properties_it") properties() const

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Protocol_1_1Iterator>) over the properties defined in this protocol.

#### [` to_decl `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Protocol7to_declERK7DeclOpt>)

std::string to\_decl(const [DeclOpt](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc7DeclOptE> "LIEF::objc::DeclOpt") &amp;opt = [DeclOpt](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc7DeclOptE> "LIEF::objc::DeclOpt")()) const

Generate a header-like string for this specific protocol.

The generated output can be configured with [DeclOpt](<https://lief.re/doc/latest/extended/objc/cpp.html#structLIEF_1_1objc_1_1DeclOpt>)

#### [` ~Protocol `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8ProtocolD0Ev>)

~Protocol()

#### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorE> "LIEF::objc::Protocol::Iterator"), std::bidirectional\_iterator\_tag, [Protocol](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8ProtocolE> "LIEF::objc::Protocol"), std::ptrdiff\_t, const [Protocol](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8ProtocolE> "LIEF::objc::Protocol")\*, const [Protocol](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8ProtocolE> "LIEF::objc::Protocol")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8Iterator14implementationE>)

using implementation = details::ProtocolIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8Iterator8IteratorENSt10unique_ptrIN7details10ProtocolItEEE>)

Iterator(std::unique\_ptr&lt;details::ProtocolIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8Iterator8IteratorERK8Iterator> "LIEF::objc::Protocol::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorE> "LIEF::objc::Protocol::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorE> "LIEF::objc::Protocol::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8Iterator8IteratorERR8Iterator> "LIEF::objc::Protocol::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorE> "LIEF::objc::Protocol::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorE> "LIEF::objc::Protocol::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorE> "LIEF::objc::Protocol::Iterator") &amp;operator++()

##### [` operator-- `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratormmEv>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorE> "LIEF::objc::Protocol::Iterator") &amp;operator--()

##### [` operator* `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Protocol8IteratormlEv>)

const [Protocol](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8ProtocolE> "LIEF::objc::Protocol") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Protocol8IteratorptEv>)

const [Protocol](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8ProtocolE> "LIEF::objc::Protocol") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8Iterator5yieldEv>)

std::unique\_ptr&lt;[Protocol](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8ProtocolE> "LIEF::objc::Protocol")&gt; yield()

Transfer ownership of the protocol at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorppEi>)

inline DerivedT operator++(int)

##### [` operator-- `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratormmEi>)

inline DerivedT operator--(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorE> "LIEF::objc::Protocol::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorE> "LIEF::objc::Protocol::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorE> "LIEF::objc::Protocol::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Protocol8IteratorE> "LIEF::objc::Protocol::Iterator") &amp;RHS)

---

## [Instance Variable (IVar)](<https://lief.re/doc/latest/extended/objc/cpp.html#instance-variable-ivar>)

### [` IVar `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVarE>)

class IVar

This class represents an instance variable (ivar).

Public Functions

#### [` IVar `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar4IVarENSt10unique_ptrIN7details4IVarEEE>)

IVar(std::unique\_ptr&lt;details::IVar&gt; impl)

#### [` name `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc4IVar4nameEv>)

std::string name() const

Name of the instance variable.

#### [` mangled_type `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc4IVar12mangled_typeEv>)

std::string mangled\_type() const

Type of the instance var in its mangled representation (`[29i]`).

#### [` ~IVar `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVarD0Ev>)

~IVar()

#### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorE> "LIEF::objc::IVar::Iterator"), std::bidirectional\_iterator\_tag, [IVar](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVarE> "LIEF::objc::IVar"), std::ptrdiff\_t, const [IVar](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVarE> "LIEF::objc::IVar")\*, const [IVar](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVarE> "LIEF::objc::IVar")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8Iterator14implementationE>)

using implementation = details::IVarIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8Iterator8IteratorENSt10unique_ptrIN7details6IVarItEEE>)

Iterator(std::unique\_ptr&lt;details::IVarIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8Iterator8IteratorERK8Iterator> "LIEF::objc::IVar::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorE> "LIEF::objc::IVar::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorE> "LIEF::objc::IVar::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8Iterator8IteratorERR8Iterator> "LIEF::objc::IVar::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorE> "LIEF::objc::IVar::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorE> "LIEF::objc::IVar::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorE> "LIEF::objc::IVar::Iterator") &amp;operator++()

##### [` operator-- `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratormmEv>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorE> "LIEF::objc::IVar::Iterator") &amp;operator--()

##### [` operator* `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc4IVar8IteratormlEv>)

const [IVar](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVarE> "LIEF::objc::IVar") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc4IVar8IteratorptEv>)

const [IVar](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVarE> "LIEF::objc::IVar") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8Iterator5yieldEv>)

std::unique\_ptr&lt;[IVar](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVarE> "LIEF::objc::IVar")&gt; yield()

Transfer ownership of the ivar at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorppEi>)

inline DerivedT operator++(int)

##### [` operator-- `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratormmEi>)

inline DerivedT operator--(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorE> "LIEF::objc::IVar::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorE> "LIEF::objc::IVar::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorE> "LIEF::objc::IVar::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc4IVar8IteratorE> "LIEF::objc::IVar::Iterator") &amp;RHS)

---

## [Method](<https://lief.re/doc/latest/extended/objc/cpp.html#method>)

### [` Method `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6MethodE>)

class Method

This class represents an Objective-C [Method](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Method>).

Public Functions

#### [` Method `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method6MethodENSt10unique_ptrIN7details6MethodEEE>)

Method(std::unique\_ptr&lt;details::Method&gt; impl)

#### [` name `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc6Method4nameEv>)

std::string name() const

Name of the method.

#### [` mangled_type `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc6Method12mangled_typeEv>)

std::string mangled\_type() const

Prototype of the method in its mangled representation (e.g. `@16@0:8`).

#### [` address `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc6Method7addressEv>)

uintptr\_t address() const

Virtual address where this method is implemented in the binary.

#### [` is_instance `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc6Method11is_instanceEv>)

bool is\_instance() const

Whether it’s an instance method.

#### [` ~Method `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6MethodD0Ev>)

~Method()

#### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorE> "LIEF::objc::Method::Iterator"), std::bidirectional\_iterator\_tag, [Method](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6MethodE> "LIEF::objc::Method"), std::ptrdiff\_t, const [Method](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6MethodE> "LIEF::objc::Method")\*, const [Method](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6MethodE> "LIEF::objc::Method")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8Iterator14implementationE>)

using implementation = details::MethodIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8Iterator8IteratorENSt10unique_ptrIN7details8MethodItEEE>)

Iterator(std::unique\_ptr&lt;details::MethodIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8Iterator8IteratorERK8Iterator> "LIEF::objc::Method::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorE> "LIEF::objc::Method::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorE> "LIEF::objc::Method::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8Iterator8IteratorERR8Iterator> "LIEF::objc::Method::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorE> "LIEF::objc::Method::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorE> "LIEF::objc::Method::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorE> "LIEF::objc::Method::Iterator") &amp;operator++()

##### [` operator-- `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratormmEv>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorE> "LIEF::objc::Method::Iterator") &amp;operator--()

##### [` operator* `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc6Method8IteratormlEv>)

const [Method](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6MethodE> "LIEF::objc::Method") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc6Method8IteratorptEv>)

const [Method](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6MethodE> "LIEF::objc::Method") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8Iterator5yieldEv>)

std::unique\_ptr&lt;[Method](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6MethodE> "LIEF::objc::Method")&gt; yield()

Transfer ownership of the method at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorppEi>)

inline DerivedT operator++(int)

##### [` operator-- `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratormmEi>)

inline DerivedT operator--(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorE> "LIEF::objc::Method::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorE> "LIEF::objc::Method::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorE> "LIEF::objc::Method::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc6Method8IteratorE> "LIEF::objc::Method::Iterator") &amp;RHS)

---

## [Property](<https://lief.re/doc/latest/extended/objc/cpp.html#property>)

### [` Property `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8PropertyE>)

class Property

This class represents a `@property` in Objective-C.

Public Functions

#### [` Property `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8PropertyENSt10unique_ptrIN7details8PropertyEEE>)

Property(std::unique\_ptr&lt;details::Property&gt; impl)

#### [` name `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Property4nameEv>)

std::string name() const

Name of the property.

#### [` attribute `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Property9attributeEv>)

std::string attribute() const

(raw) property’s attributes (e.g. `T@"NSString",C,D,N`)

#### [` ~Property `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8PropertyD0Ev>)

~Property()

#### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorE>)

class Iterator : public LIEF::iterator\_facade\_base&lt;[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorE> "LIEF::objc::Property::Iterator"), std::bidirectional\_iterator\_tag, [Property](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8PropertyE> "LIEF::objc::Property"), std::ptrdiff\_t, const [Property](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8PropertyE> "LIEF::objc::Property")\*, const [Property](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8PropertyE> "LIEF::objc::Property")&amp;&gt;

Public Types

##### [` implementation `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8Iterator14implementationE>)

using implementation = details::PropertyIt

Public Functions

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8Iterator8IteratorEv>)

Iterator()

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8Iterator8IteratorENSt10unique_ptrIN7details10PropertyItEEE>)

Iterator(std::unique\_ptr&lt;details::PropertyIt&gt; impl)

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8Iterator8IteratorERK8Iterator>)

Iterator(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8Iterator8IteratorERK8Iterator> "LIEF::objc::Property::Iterator::Iterator")&amp;)

##### [` operator= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratoraSERK8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorE> "LIEF::objc::Property::Iterator") &amp;operator=(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorE> "LIEF::objc::Property::Iterator")&amp;)

##### [` Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8Iterator8IteratorERR8Iterator>)

Iterator([Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8Iterator8IteratorERR8Iterator> "LIEF::objc::Property::Iterator::Iterator")&amp;&amp;) noexcept

##### [` operator= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratoraSERR8Iterator>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorE> "LIEF::objc::Property::Iterator") &amp;operator=([Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorE> "LIEF::objc::Property::Iterator")&amp;&amp;) noexcept

##### [` ~Iterator `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorD0Ev>)

~Iterator()

##### [` operator++ `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorppEv>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorE> "LIEF::objc::Property::Iterator") &amp;operator++()

##### [` operator-- `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratormmEv>)

[Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorE> "LIEF::objc::Property::Iterator") &amp;operator--()

##### [` operator* `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Property8IteratormlEv>)

const [Property](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8PropertyE> "LIEF::objc::Property") &amp;operator\*() const

##### [` operator-> `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4NK4LIEF4objc8Property8IteratorptEv>)

const [Property](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8PropertyE> "LIEF::objc::Property") \*operator-&gt;() const

##### [` yield `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8Iterator5yieldEv>)

std::unique\_ptr&lt;[Property](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8PropertyE> "LIEF::objc::Property")&gt; yield()

Transfer ownership of the property at the current position to the caller. Returns `nullptr` if the iterator is past-the-end.

##### [` operator++ `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorppEi>)

inline DerivedT operator++(int)

##### [` operator-- `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratormmEi>)

inline DerivedT operator--(int)

Friends

##### [` operator== `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratoreqERK8IteratorRK8Iterator>)

friend bool operator==(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorE> "LIEF::objc::Property::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorE> "LIEF::objc::Property::Iterator") &amp;RHS)

##### [` operator!= `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorneERK8IteratorRK8Iterator>)

inline friend bool operator!=(const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorE> "LIEF::objc::Property::Iterator") &amp;LHS, const [Iterator](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc8Property8IteratorE> "LIEF::objc::Property::Iterator") &amp;RHS)

---

## [DeclOpt](<https://lief.re/doc/latest/extended/objc/cpp.html#declopt>)

### [` DeclOpt `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc7DeclOptE>)

struct DeclOpt

This structure wraps options to tweak the generated output of functions like [LIEF::objc::Metadata::to\_decl](<https://lief.re/doc/latest/extended/objc/cpp.html#classLIEF_1_1objc_1_1Metadata_1a5200afe3b080b9cebb7fabd9d4197471>).

Public Members

#### [` show_annotations `](<https://lief.re/doc/latest/extended/objc/cpp.html#_CPPv4N4LIEF4objc7DeclOpt16show_annotationsE>)

bool show\_annotations = true

Whether annotations like method’s address should be printed.
