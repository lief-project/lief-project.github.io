---
title: "LIEF - Release 0.11.0"
description: "LIEF 0.11.0: refactored PE Authenticode parsing with signature verification, pefile-compatible imphash, a faster ELF builder, and Ninja-based Windows CI."
canonical_url: "https://lief.re/blog/2021-01-19-lief-0-11-0/"
markdown_url: "https://lief.re/blog/2021-01-19-lief-0-11-0/index.md"
authors: ["Romain Thomas"]
date_published: "2021-01-19T00:00:00Z"
date_modified: "2021-01-19T00:00:00Z"
language: "en-US"
section: "blog"
tags: ["release","PE","Authenticode","ELF","Windows"]
categories: []
---

# LIEF - Release 0.11.0

> LIEF 0.11.0: refactored PE Authenticode parsing with signature verification, pefile-compatible imphash, a faster ELF builder, and Ninja-based Windows CI.

**Tl;DR**

LIEF v0.11.0 is out. The main changelog is available [here](https://lief.quarkslab.com/doc/stable/changelog.html#v0.11.0)
and packages can be downloaded on the [official website](https://lief.quarkslab.com/download).



## Installation

As for the previous versions, release packages are available on the [GitHub release page](https://github.com/lief-project/LIEF/releases/tag/0.11.0)
and Python packages can be installed from PyPI:

```bash
$ pip install [--user] lief==0.11.0
```

## Release Highlight

It has spent more than one year since the release of the version [0.10.1](https://lief.quarkslab.com/doc/latest/changelog.html#november-29-2019)
but we are glad to announce that **LIEF v0.11.0** is finally out!

This new version does not introduce a lot of new features but rather small improvements in the different
formats. One of the main changes in terms of new functionalities is the refactoring of the PE Authenticode.
We fixed parsing issues and we implemented verification functions so that we can now verify a PE signed binary through:

```python
import lief
pe = lief.parse("signed.exe")
assert pe.verify_signature() == lief.PE.Signature.VERIFICATION_FLAGS.OK
```

We also improved the computation of *imphash* so that it can generate the same value as [pefile](https://github.com/erocarrera/pefile) (and therefore,
Virus Total)

```python
pe = lief.parse("example.exe")
vt_imphash = lief.PE.get_imphash(pe, lief.PE.IMPHASH_MODE.PEFILE)
lief_imphash = lief.PE.get_imphash(pe, lief.PE.IMPHASH_MODE.DEFAULT)
```

Regarding the contributions, [Janusz Lisiecki](https://github.com/JanuszL) fixed a performance issue in the **ELF
builder** that moved from `N²` computations to `N log(N)`. His contribution raised a major weakness in LIEF:
performances issue when re-building objects. We started to refactor the whole ELF builder to avoid recursive
calls.

[Adrien Guinet](https://github.com/aguinet) updated the [bin2lib tutorial](https://lief.quarkslab.com/doc/latest/tutorials/08_elf_bin2lib.html#warning-for-glibc-2-29-users)
to support recent versions of glibc, which introduced the [`DF_1_PIE`](https://lief.quarkslab.com/doc/latest/api/python/elf.html#lief.ELF.DYNAMIC_FLAGS_1.PIE) flag.

[kohnakagawa](https://github.com/kohnakagawa) and [Clcanny](https://github.com/Clcanny) also fixed various issues related to the ELF & PE formats.

## Ninja on Windows & CI

We improved AppVeyor Windows CI to be more efficient on the compiler cache. It results in a decrease of 1-hour compilation time
to ~20 minutes thanks to [sccache](https://github.com/mozilla/sccache) and Ninja.

If Ninja is installed on Windows, one can now use the ``--ninja`` flag when calling ``setup.py``:

```text
$ python.exe .\setup.py --ninja build install [--user]
```

Using Ninja on Windows requires to invoke the ``vcvarsall.bat`` script beforehand. This script can be tricky to
locate depending on the MSVC versions. Thankfully, setuptools provides the [msvc.msvc14_get_vc_env()](https://github.com/pypa/setuptools/blob/6ad2fb0b78d11e22672f56ef9d65d13ebd3475a9/setuptools/msvc.py#L293)
helper to get the environment variables that need to populate the calling script. We use it in LIEF's ``setup.py``
as follows:

```python
...
env = os.environ
if platform.system() == "Windows":
    from setuptools import msvc
    if build_with_ninja:
        arch = 'x64' if is64 else 'x86'
        ninja_env = msvc.msvc14_get_vc_env(arch)
        env.update(ninja_env)
    else:
      ...
...
```

Regarding the CI, we added Android and iOS SDK packages as well as Python wheels for Linux AArch64
(``manylinux2014`` compliant).

The nightly builds are available on the [gh-pages](https://github.com/lief-project/packages/tree/gh-pages) branch of
the repository [lief-project/packages](https://github.com/lief-project/packages):

- The [**sdk**](https://github.com/lief-project/packages/tree/gh-pages/sdk) directory contains a shared and a static version of LIEF library for iOS, macOS, Android,
  Windows, Linux, ...
- The [**lief**](https://github.com/lief-project/packages/tree/gh-pages/lief) directory contains the Python wheels for the supported platforms


## What's next

We have a few ideas of what would like to improve and introduce in the next releases of LIEF which includes:

- Refactoring the ELF builder to address performances issues (see also [#482](https://github.com/lief-project/LIEF/issues/482))
- Supporting OAT/VDEX/CDEX for Android 9, 10 and 11
- Supporting Mach-O signature (as for PE Authenticode)
- Supporting Android packed relocations (in the parser and in the builder)
- Improving the C API to ease Rust bindings
- Supporting DART snapshot formats to ease reverse-engineering of Flutter applications.

  *Spoiler: we can process all the clusters of a snapshot for a fixed version of the DART runtime.*

- `+=` Fixing issues

Although LIEF's plans mostly follow Quarkslab's needs, the R&D time we have, and the topics we enjoy working on,
we are open to the development of private or public features as it has been done for improving PE Authenticode.



## Acknowledgment

Thank you to [CERT Gouvernemental of Luxembourg](https://www.govcert.lu/en/) that sponsored new functionalities in this release.
Thanks also to [Quarkslab](https://www.quarkslab.com) for the time allocated to make this release.





[
![Logo Quarkslab](https://lief.re/blog/2021-01-19-lief-0-11-0/logo-quarkslab.png)
](https://www.quarkslab.com)
[
![Logo CERT Gouvernemental Luxembourg](https://lief.re/blog/2021-01-19-lief-0-11-0/logo-govcert-lu.png)
](https://www.govcert.lu/en/)
