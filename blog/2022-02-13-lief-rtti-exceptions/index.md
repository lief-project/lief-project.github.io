---
title: "LIEF RTTI \u0026 Exceptions"
description: "Why LIEF is removing C++ exceptions and RTTI: error-handling costs, the has_/get_ pattern, and the move to result-based APIs and LLVM-style RTTI."
canonical_url: "https://lief.re/blog/2022-02-13-lief-rtti-exceptions/"
markdown_url: "https://lief.re/blog/2022-02-13-lief-rtti-exceptions/index.md"
authors: ["Romain Thomas"]
date_published: "2022-02-13T00:00:00Z"
date_modified: "2022-02-13T00:00:00Z"
language: "en-US"
section: "blog"
tags: ["C++","internals","error-handling"]
categories: []
---

# LIEF RTTI & Exceptions

> Why LIEF is removing C++ exceptions and RTTI: error-handling costs, the has_/get_ pattern, and the move to result-based APIs and LLVM-style RTTI.

## try { {#try}
When we started to develop LIEF, we choose to manage errors through the C++ exceptions as it is widely
spread in Java.

However, with a little hindsight it was not the best choice in the design of LIEF.

First off, LIEF is a **library** and the API functions that throw exceptions are not compatible
with library's users that are not using exceptions (e.g with the ``-fno-exceptions`` flag). It is also considered
as a bad practice quoting from C++ Coding Standards:


**C++ Coding Standards: Item 62**

*“Don't throw stones into your neighbor's garden: There is no ubiquitous binary standard for C++ exception
handling.”*


For instance, the function ``LIEF::ELF::Binary::get_section(const std::string& name)``
threw an exception if the section were not found.
To avoid raising the exception, the API exposes helpers that can be used to check
-- beforehand -- that it will not take the *exception path*:

```cpp
if (bin.has_section(".toto")) {
  auto& sec = bin.get_section(".toto"); // Ok no exception
}

// With exception:
try {
  bin.get_section(".toto");
} catch (const std::exception&) {
  // .toto does not exist :(
}
```

Actually, the `has_<element>` / `get_<element>` pattern hides another issue: **the performances**.

Basically, `has_section(...)` iterates over the list of the sections to check if a section
with the given name exists and ``get_section()`` iterates **again** on this list to access the section.
**The code performs twice the same iteration**. This is not a big deal for the ELF sections as they
are quite small but it can be problematic for large sequences like the symbols table.

In LIEF v0.12.0 we changed the API of these functions to return **a pointer** on these objects instead of
**a reference**. If the item can't be found, it returns a `nullptr`.


**The API contract of these functions is changing from raising an exception into returning a `nullptr`.
The documentation has been updated accordingly and the list of the functions which have changed are listed
[here](https://gist.github.com/romainthomas/37da45b043c5f8b8db6be2767611f625)**


As a result, the previous code can be re-written as follows:

```cpp
if (bin.has_section(".toto")) {
  auto* sec = bin.get_section(".toto"); // Non nullptr instead of a reference
}

// Or:
if (auto* sec = bin.get_section(".toto")) {
  // ...
}
```

This kind of API change is doable and meaningful for functions that aim at returning an **optional object**
but it is less meaningful to transform a function like:

```cpp
uint64_t Binary::virtual_address_to_offset(...) { ... }
```

that returns an integer (while still potentially raising an exception).

In LIEF 0.12.0, this kind of function still raises an exception but in the next version (LIEF v0.13.0) the returned
value will be wrapped by [**Boost's Leaf**](https://github.com/boostorg/leaf)[^leaf_note] such as the returned
type will become:

```cpp
// Future returned type
result<uint64_t> Binary::virtual_address_to_offset(...) { ... }

// To use it:
auto res = bin.virtual_address_to_offset();
if (!res) {
  // Error
} else {
  uint64_t val = res.value(); // or val = *res
}
```

In LIEF v0.12.0 **only internal/private functions associated with the Parser/Builder module** are using
this mechanism and we plan to move to this mechanism in the public API[^cpp_11] in LIEF v0.13.0.


**Warning**

Boost LEAF is required in the **public headers** of LIEF. If you find conflicts, compilation issues,
integration issues, or you think that it is a bad idea, **please let us know** before it becomes the default
interface to manage errors.


### The RTTI

LIEF also relies on the RTTI information which includes calling functions like `typeid()` or `dynamic_cast<>()`.
For instance, to check if a Mach-O's LoadCommand exists, the main `MachO::Binary` class calls at some point
this helper:

```cpp
template<class T>
bool Binary::has_command() const {
  static_assert(std::is_base_of<LoadCommand, T>::value,
                "Require inheritance from 'LoadCommand'");

  const auto it_cmd = std::find_if(
      std::begin(commands_), std::end(commands_),
      [] (const LoadCommand* command) {
        return typeid(T) == typeid(*command);
      });

  return it_cmd != std::end(commands_);
}
```

This code generates extra data for the RTTI information of the LoadCommand objects which can be perfectly fine.
Actually, this RTTI information is redundant as the type of a Mach-O's LoadCommand is already stored in the class
itself:

```cpp
class LoadCommand {
  ...
  private:
  LOAD_COMMAND_TYPES command_;
};
```

So instead of having this redundant RTTI information, we implemented an LLVM-like RTTI[^llvm_rtti] based on `classof()`
and that uses the already present `command_` attribute.
In the end, the previous `has_command()` can be updated as follows:

```cpp
template<class T>
bool Binary::has_command() const {
  static_assert(std::is_base_of<LoadCommand, T>::value,
                "Require inheritance from 'LoadCommand'");
  const auto it_cmd = std::find_if(
      std::begin(commands_), std::end(commands_),
      [] (const LoadCommand* command) {
        return T::classof(command);
      });
  return it_cmd != std::end(commands_);
}
```

We applied this pattern for the LIEF's object where ``typeid`` was present and as a result,
we managed to completely remove this function as it was redundant with an existing attribute.

## } catch (const std::length_error&) { {#catch}




We welcome feedback on these changes -- whether positive or negative -- as it impacts the public API.

Thank you for reading!

## } {#end}

[^leaf_note]: See the section [Error Handling](https://lief-project.github.io/doc/latest/error_handling.html)
              of the documentation for more details.
[^cpp_11]: It still keeps the public headers compliant with C++11
[^llvm_rtti]: https://llvm.org/docs/HowToSetUpLLVMStyleRTTI.html
