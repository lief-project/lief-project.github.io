---
title: "LIEF v0.13.0"
description: "LIEF 0.13.0: in-memory Mach-O parsing, framed ELF sections, an exception-free and RTTI-free core, PEP 621 Python packaging, and generated .pyi type stubs."
canonical_url: "https://lief.re/blog/2023-04-09-lief-0-13-0/"
markdown_url: "https://lief.re/blog/2023-04-09-lief-0-13-0/index.md"
authors: ["Romain Thomas"]
date_published: "2023-04-09T00:00:00Z"
date_modified: "2023-04-09T00:00:00Z"
language: "en-US"
section: "blog"
tags: ["release","Mach-O","ELF","Python"]
categories: []
---

# LIEF v0.13.0

> LIEF 0.13.0: in-memory Mach-O parsing, framed ELF sections, an exception-free and RTTI-free core, PEP 621 Python packaging, and generated .pyi type stubs.

LIEF v0.13.0 is eventually out! The full changelog is available [here](https://lief-project.github.io/doc/stable/changelog.html#april-9-2023),
but here is a summary of the main changes.

## Mach-O in Memory Parser

LIEF is now able to parse a Mach-O file from an in-memory pointer:

```cpp
uintptr_t mhdr = ...; // Absolute address to an in-memory Mach-O file
auto macho = LIEF::MachO::Parser::parse_from_memory(mhdr);
```

This feature can be handy on iOS to access the in-memory content of the binary.
Firstly because some parts of the application code are encrypted (thanks to the ``LC_ENCRYPTION_INFO`` commands).
Secondly, it can be used on protected code that fills the ``__data`` segment
with clear (original) strings (c.f. [Gotta Catch 'Em All: Frida & jailbreak detection](https://www.romainthomas.fr/post/21-07-pokemongo-anti-frida-jailbreak-bypass/#what-about-lief)).

This feature could also be used in pair with ``_dyld_get_image_header``, once we are
injected into the targeted process:

```cpp
size_t count = _dyld_image_count();
for (size_t i = 0; i < count; ++i) {
  llvm::StringRef Name = _dyld_get_image_name(i);
  if (Name.contains("MyApp.app/Target")) {
    auto* mhdr = _dyld_get_image_header(i);
    auto macho = MachO::Parser::parse_from_memory((uintptr_t)mhdr);
  }
}
```

It might also work to access the dyld shared cache libraries but this aspect
does not have been heavily tested.

## Framed ELF Sections

The ELF format is -- by far -- the most tricky format especially when it comes
dealing with sections and segments. These ELF structures are two different ways
of *slicing* the binary data:

1. Sections are used by the compiler and the linker
2. Segments are used by the system loader.

LIEF implements a mechanism to deal with this dual representation so that if the user
updates the ``.text`` section, the changes are also committed in the associated segment (if any).

It turns out that in some scenarios[^PST], we might want to NOT *commit* the changes we are doing
on the sections. The ``lief.ELF.Section.as_frame()`` function can be used to make the section "*frame only*".
All the attributes of the section will be committed in the final ELF binary but
LIEF won't consider this section to write the content in the binary.

One can use -- for instance -- this function to corrupt sections attributes:

```python
elf = lief.parse("/bin/ls")
text = elf.get_section(".text").as_frame()
text.offset = 0xffffff
elf.write("ls.modified")
```

As the `.text` section is set as "framed", its `0xffffff` offset is not considered
for changing its content. Thus, this code does not update anything:

```python
text.content = ...
```

Since the ELF loader only relies on segment, this modification does not affect
the execution of the modified binary.

## Internal Changes

As announced in the previous v0.12.0 release, the LIEF codebase is now free
from exceptions and RTTI. This means that the core library can be compiled in
an `-fno-exceptions` context.

The Python build process is now compliant with the [PEP 621](https://peps.python.org/pep-0621/)
``pyproject.toml`` requirement. You can find this file, along with `config-default.toml`,
in the ``api/python`` directory. The `config-default.toml` file can be used to tweak
the compilation of the bindings. This is essentially an interface over the LIEF CMake option.
Lastly, the `setup.py` file used for compiling the binding has moved from the root directory
to `api/python`.

On top of that, the Python bindings also generate stub interfaces (`.pyi`) which are
handy for type checking and code completion (cf. [issues/650](https://github.com/lief-project/LIEF/issues/650)).

## Final Words

Some features like the Rust bindings are not released yet they still require some ongoing work.
I also really do hope to be able to work on enhancing the PE format modification in the next
release but this will be balanced with the spare time I have to work on it :)

Thank you for using LIEF!


[^in-mem]: https://www.romainthomas.fr/post/21-07-pokemongo-anti-frida-jailbreak-bypass/#what-about-lief
[^PST]: https://passthesalt.ubicast.tv/videos/the-poor-mans-obfuscator/
