---
documentID: "c10f09fce52a0c164dd8375d680a57107c5be62156543e7de81185ba40013ec7"
docname: "api/error_handling/index"
title: "Error Handling - LIEF Documentation"
description: "Error Handling reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/api/error_handling/index.html"
markdownURL: "https://lief.re/doc/latest/api/error_handling/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "24e460caaee932038c92deb9e36615861780167d32d8b64c07a1bb95f8bc34f3"
---

# [Error Handling](<https://lief.re/doc/latest/api/error_handling/index.html#error-handling>)

## [Introduction](<https://lief.re/doc/latest/api/error_handling/index.html#introduction>)

LIEF manages errors using:

1. Exceptions (deprecated and removed since LIEF 0.13.0)
2. [std::expected (tl::expected)](<https://github.com/TartanLlama/expected>)

It turns out that using C++ exceptions (and RTTI) was not the best design choice, as LIEF, as a library, can be used in a `-fno-exceptions` context. Consequently, we moved to a mechanism based on the `ResultOrError` idiom. This idiom is similar to those found in LLVM with [llvm::ErrorOr](<https://llvm.org/doxygen/classllvm_1_1ErrorOr.html>) and in Rust with [std::result](<https://doc.rust-lang.org/std/result/>). LIEF uses a std::expected-like interface to handle errors. Since this interface is only available in C++23, we rely on [TartanLlama/expected](<https://github.com/TartanLlama/expected>), which provides this interface for C++11/C++17.

Functions using this idiom return a [`LIEF::result`](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result"), which wraps either the successful result or an error.

The user can process this result as follows:

```cpp
result<PE_TYPE> pe_type = PE::get_type("/tmp/NotPE.elf");
if (pe_type) {
  PE_TYPE effective_type = pe_type.value();
} else {
  lief_errors err = as_lief_err(pe_type);
}
```

In the case of Python, we leverage the *dynamic* features of the language to return either the expected value or an error if the function fails. For instance, in previous versions of [`lief.PE.get_type()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.get_type> "lief.PE.get_type"), the implementation raised an exception to inform the user:

```python
try:
    pe_type = lief.PE.get_type("/tmp/NotPE.elf")
    # If it does not fail, pe_type handles a lief.PE.PE_TYPE object
except Exception as e:
    print(f"Error: {e}")
```

With the new implementation that relies on the `ResultOrError` idiom, the function returns the [`lief.PE.PE_TYPE`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.PE_TYPE> "lief.PE.PE_TYPE") value if everything is correct, and returns a [`lief.lief_errors`](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief.lief_errors") in case of a processing error.

The user can handle this new interface by using the `isinstance()` function or by comparing the value with a [`lief.lief_errors`](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief.lief_errors") attribute:

```python
pe_type = lief.PE.get_type("/tmp/NotPE.elf")

if pe_type == lief.lief_errors.file_error:
    print("File error")
elif isinstance(pe_type, lief.lief_errors):
    print("Another kind of error")
else:
    print(f"No error, type is: {pe_type}")
```

## [API](<https://lief.re/doc/latest/api/error_handling/index.html#api>)

### [C++](<https://lief.re/doc/latest/api/error_handling/index.html#c>)

#### [` Tresult `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE>)

template&lt;typename T&gt;  
class result : public tl::expected&lt;[T](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result::T"), [lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv411lief_errors> "lief_errors")&gt;

Wrapper that contains an Object (`T`) or an error.

The tl/expected implementation exposes the method `value()` to access the underlying object (if no error)

Typical usage is:

```cpp
result<int> intval = my_function();
if (intval) {
 int val = intval.value();
} else { // There is an error
 std::cout << get_error(intval).message() << "\n";
}
```

See [https://tl.tartanllama.xyz/en/latest/api/expected.html](<https://tl.tartanllama.xyz/en/latest/api/expected.html>) for more details

Public Types

##### [` ExpectedType `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF6result12ExpectedTypeE>)

using ExpectedType = [T](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result::T")

Public Functions

##### [` result `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF6result6resultEN2tl8expectedI1T11lief_errorsEE>)

inline result(tl::expected&lt;[T](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result::T"), [lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv411lief_errors> "lief_errors")&gt; e)

#### [` TLIEF::as_lief_err `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF11as_lief_errE11lief_errorsR6resultI1TE>)

template&lt;class T&gt;  
[lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv411lief_errors> "lief_errors") LIEF::as\_lief\_err([result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[T](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF11as_lief_errE11lief_errorsR6resultI1TE> "LIEF::as_lief_err::T")&gt; &amp;err)

Return the [lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#errors_8hpp_1a5ff5508856d306cf99479195f4f7ddd8>) when the provided `result<T>` is an error.

#### [` lief_errors `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv411lief_errors>)

enum class lief\_errors : uint32\_t

LIEF error codes definition.

*Values:*

##### [` read_error `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N11lief_errors10read_errorE>)

enumerator read\_error = 1

##### [` not_found `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N11lief_errors9not_foundE>)

enumerator not\_found

##### [` not_implemented `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N11lief_errors15not_implementedE>)

enumerator not\_implemented

##### [` not_supported `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N11lief_errors13not_supportedE>)

enumerator not\_supported

##### [` corrupted `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N11lief_errors9corruptedE>)

enumerator corrupted

##### [` conversion_error `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N11lief_errors16conversion_errorE>)

enumerator conversion\_error

##### [` read_out_of_bound `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N11lief_errors17read_out_of_boundE>)

enumerator read\_out\_of\_bound

##### [` asn1_bad_tag `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N11lief_errors12asn1_bad_tagE>)

enumerator asn1\_bad\_tag

##### [` file_error `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N11lief_errors10file_errorE>)

enumerator file\_error

##### [` file_format_error `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N11lief_errors17file_format_errorE>)

enumerator file\_format\_error

##### [` parsing_error `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N11lief_errors13parsing_errorE>)

enumerator parsing\_error

##### [` build_error `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N11lief_errors11build_errorE>)

enumerator build\_error

##### [` data_too_large `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N11lief_errors14data_too_largeE>)

enumerator data\_too\_large

##### [` require_extended_version `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N11lief_errors24require_extended_versionE>)

enumerator require\_extended\_version

##### [` inconsistent `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N11lief_errors12inconsistentE>)

enumerator inconsistent

##### [` runtime_error `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N11lief_errors13runtime_errorE>)

enumerator runtime\_error

#### [` ok_error_t `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE>)

class ok\_error\_t : public LIEF::[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[ok\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF4ok_tE> "LIEF::ok_t")&gt;

Opaque structure that is used by LIEF to avoid writing `result<void> f(...)`. Instead, it makes the output explicit such as:

```cpp
ok_error_t process() {
  if (fail) {
    return make_error_code(...);
  }
  return ok();
}
```

#### [` LIEF::ok `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF2okEv>)

inline [ok\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF4ok_tE> "LIEF::ok_t") LIEF::ok()

Return success for function with return type [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#classLIEF_1_1ok__error__t>).

#### [` ok_t `](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF4ok_tE>)

struct ok\_t

Opaque structure used by [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#classLIEF_1_1ok__error__t>).

### [Python](<https://lief.re/doc/latest/api/error_handling/index.html#python>)

#### [` lief.lief_errors `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors>)

class lief.lief\_errors(*\*values*)

Bases: `Enum`

Enum class which represents an error generated by LIEF’s functions

##### [` asn1_bad_tag `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.asn1_bad_tag>)

asn1\_bad\_tag = 8

##### [` build_error `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.build_error>)

build\_error = 12

##### [` conversion_error `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.conversion_error>)

conversion\_error = 6

##### [` corrupted `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.corrupted>)

corrupted = 5

##### [` data_too_large `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.data_too_large>)

data\_too\_large = 13

##### [` file_error `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.file_error>)

file\_error = 9

##### [` file_format_error `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.file_format_error>)

file\_format\_error = 10

##### [` inconsistent `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.inconsistent>)

inconsistent = 15

##### [` not_found `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.not_found>)

not\_found = 2

##### [` not_implemented `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.not_implemented>)

not\_implemented = 3

##### [` not_supported `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.not_supported>)

not\_supported = 4

##### [` parsing_error `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.parsing_error>)

parsing\_error = 11

##### [` read_error `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.read_error>)

read\_error = 1

##### [` read_out_of_bound `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.read_out_of_bound>)

read\_out\_of\_bound = 7

##### [` require_extended_version `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.require_extended_version>)

require\_extended\_version = 14

##### [` runtime_error `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors.runtime_error>)

runtime\_error = 16

#### [` lief.ok_t `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_t>)

class lief.ok\_t

Bases: `object`

Opaque value returned when a **void** function is executed successfully.

#### [` lief.ok_error_t `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t>)

class lief.ok\_error\_t

Bases: `object`

Return either: [`ok_t`](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_t> "lief.ok_t") (success) or [`lief_errors`](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief.lief_errors") (error)

##### [` error `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t.error>)

property error → [lief.lief\_errors](<https://lief.re/doc/latest/api/error_handling/index.html#lief.lief_errors> "lief.lief_errors")

##### [` is_error `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t.is_error>)

property is\_error → bool

##### [` is_value `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t.is_value>)

property is\_value → bool

##### [` value `](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_error_t.value>)

property value → [lief.ok\_t](<https://lief.re/doc/latest/api/error_handling/index.html#lief.ok_t> "lief.ok_t")
