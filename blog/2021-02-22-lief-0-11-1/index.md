---
title: "LIEF - Release 0.11.1"
description: "LIEF 0.11.1 fixes PE Authentihash computation: section name handling, data directory coverage, and the return value of verify_signature()."
canonical_url: "https://lief.re/blog/2021-02-22-lief-0-11-1/"
markdown_url: "https://lief.re/blog/2021-02-22-lief-0-11-1/index.md"
authors: ["Romain Thomas"]
date_published: "2021-02-22T00:00:00Z"
date_modified: "2021-02-22T00:00:00Z"
language: "en-US"
section: "blog"
tags: ["release","PE","Authenticode"]
categories: []
---

# LIEF - Release 0.11.1

> LIEF 0.11.1 fixes PE Authentihash computation: section name handling, data directory coverage, and the return value of verify_signature().

**Tl;DR**

LIEF v0.11.1 fixes some issues related to PE Authentihash computation. The new packages are available on PyPI and
the SDKs can be downloaded on the official [website](https://lief.quarkslab.com/download/).

Enjoy!


LIEF 0.11.0 missed handling some cases in the processing of the PE Authentihash. This new release addresses
these issues and the following blog post explains the cases we did not handle.

## Section name

PE section's names are stored in a **fixed** char array (8 bytes) which means that a section's name can
contain trailing bytes after the null char:

```cpp
struct pe_section {
  char     name[8];
  uint32_t RVA;
  // ...
};
```

Before v0.11.1, LIEF didn't take into account the trailing bytes and stopped to read the section's name
on the first null char:

```cpp
this->name_ = std::string(header->name, sizeof(header->name)).c_str();
```

This implementation has two drawbacks. First, we lose information since we don't store the extra trailing bytes.
Regular binaries have zero trailing bytes after the first null char but some of them might use this spot to
hide data.

![Section name with trailing bytes](https://lief.re/blog/2021-02-22-lief-0-11-1/section_table_e.png)

Secondly, the **full** section name (i.e the whole 8 bytes) is used to compute the Authentihash.
Therefore, if the first null char is followed by trailing bytes different from zero, the computed hash
is inconsistent.

## Data directory

According to the PE specifications [^1] the last entry of the data directory table must
contain a null entry (i.e. an entry with an RVA and size set to 0).


![PE specifications require a last zero entry](https://lief.re/blog/2021-02-22-lief-0-11-1/pe_doc_e.png)


It turns out that this requirement is
not enforced by the loader. In the case of the binary ([bc203f2b6a...](https://www.virustotal.com/gui/file/bc203f2b6a928f1457e9ca99456747bcb7adbbfff789d1c47e9479aac11598af/detection))
the last entry is set to ``0x02b7bc68/0x01a7a0`` (used for watermarking?).

![Last data directory with non-zero entry](https://lief.re/blog/2021-02-22-lief-0-11-1/data_directory_e.png)

In the previous versions of LIEF we assumed that the last entry of the data directory table
was always zero. Since the last entry is used to compute the Authentihash value, it led to a bad signature
while it was effectively correct.

This issue has been addressed in the commit [3c65ffe](https://github.com/lief-project/LIEF/commit/3c65ffe2d65f0c6fe63e683e6deef41de2f395b1)

## Return value of ``verify_signature()``

As noticed by [Cedric Halbronn](https://twitter.com/saidelike) in the issue [issues/532](https://github.com/lief-project/LIEF/issues/532),
the return value of [LIEF::PE::Binary::verify_signature](https://github.com/lief-project/LIEF/blob/f58605f94c365b5aedf75081ae9b0aebafd5cece/include/LIEF/PE/Binary.hpp#L147-L167)
lacks information when the verification failed. The return value was either
``VERIFICATION_FLAGS.OK`` or ``VERIFICATION_FLAGS.BAD_SIGNATURE`` because of a *fail-fast* implementation
of the verification flag.

The function now returns flags as follows:

```
VERIFICATION_FLAGS.BAD_DIGEST | VERIFICATION_FLAGS.BAD_SIGNATURE | VERIFICATION_FLAGS.CERT_EXPIRED
```

## Other issues

One of the critical issues raised by [imidoriya](https://github.com/imidoriya) and fixed in the new version is
the processing of the overlay data when the "data directory signature" is located in this area (c.f. [463bb0ec3...](https://www.virustotal.com/gui/file/463bb0ec399af716b9ec984dbc96590e180921af073df414b85a2a3b7c27516a/detection)).
This kind of layout triggers a memory error on this part of the
processing [Binary.cpp#L1174-L1187](https://github.com/lief-project/LIEF/blob/f58605f94c365b5aedf75081ae9b0aebafd5cece/src/PE/Binary.cpp#L1174-L1187).
It has been addressed in the commit [05103f5](https://github.com/lief-project/LIEF/commit/05103f55a6cb993cb20735da3c7a6333e4f600e3)

## Acknowledgment

Thanks to [Andrew Williams](https://twitter.com/SmugYeti) for providing the different samples that raised some of these
errors! Thank you also to [Cedric Halbronn]() and the [CERT Gouvernemental of Luxembourg](https://www.govcert.lu/en/)
for their feedback about the API.

[^1]: https://docs.microsoft.com/en-us/windows/win32/debug/pe-format#optional-header-data-directories-image-only
