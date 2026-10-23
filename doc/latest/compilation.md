---
documentID: "aae98ef7eba7d7c35725bc1aa4bb954daca08d44231bca326640218c42ee65cd"
docname: "compilation"
title: "Compilation - LIEF Documentation"
description: "Compilation. To compile LIEF, you need at least the following:"
canonical: "https://lief.re/doc/latest/compilation.html"
markdownURL: "https://lief.re/doc/latest/compilation.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "d56bf622ebd71a76e5c68e26004de6c287c3e72f138e916d090311865fe1a5aa"
---

# [Compilation](<https://lief.re/doc/latest/compilation.html#compilation>)

To compile **LIEF**, you need at least the following:

- C++17 compiler (GCC, Clang, MSVC, etc.)
- CMake
- Python &gt;= 3.10 (for the bindings)

> **Note**
> 
> Compiling from scratch with all options enabled can take approximately 20 minutes on a standard laptop.

## [Libraries only (SDK)](<https://lief.re/doc/latest/compilation.html#libraries-only-sdk>)

```console
$ git clone https://github.com/lief-project/LIEF.git
$ cd LIEF
$ mkdir build
$ cd build
$ cmake -DCMAKE_BUILD_TYPE=Release ..
$ cmake --build . --target LIB_LIEF --config Release
```

> **Warning**
> 
> On Windows, you can choose which CRT to use by setting the `CMAKE_MSVC_RUNTIME_LIBRARY` variable:
> 
> ```console
> $ cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_MSVC_RUNTIME_LIBRARY=MultiThreaded ..
> ```
> 
> For Debug, you should set the CRT to **MTd**:
> 
> ```console
> $ cmake -DCMAKE_BUILD_TYPE=Debug -DCMAKE_MSVC_RUNTIME_LIBRARY=MultiThreadedDebug ..
> $ cmake --build . --target LIB_LIEF --config Debug
> ```

## [Python bindings](<https://lief.re/doc/latest/compilation.html#python-bindings>)

The Python bindings are built from the `api/python` directory, which uses a [PEP 517](<https://peps.python.org/pep-0517/>) build backend based on [scikit-build-core](<https://scikit-build-core.readthedocs.io/>):

```console
$ git clone https://github.com/lief-project/LIEF.git
$ cd LIEF/api/python
$ pip install [-e] [--user] .
# Or
$ pip install [-e] api/python
```

> **Note**
> 
> You can speed up the compilation by installing [ccache](<https://ccache.dev/>) or [sccache](<https://github.com/mozilla/sccache>).

You can customize the compilation by setting the `PYLIEF_CONF` environment variable to the path of a TOML configuration file. By default, the Python bindings use `config-default.toml` in the Python binding directory:

```toml
[lief.build]
type          = "Release"
cache         = true
ninja         = true
parallel-jobs = 0

[lief.formats]
elf     = true
pe      = false
macho   = true
...
```

```console
$ PYLIEF_CONF=/tmp/my-custom.toml pip install .
```

### [Free-threaded Python](<https://lief.re/doc/latest/compilation.html#free-threaded-python>)

Since LIEF 1.0.0, the Python bindings can be compiled against the free-threaded Python builds. This is controlled through the `free-threaded` flag of the `[lief.build]` section of the configuration:

```toml
[lief.build]
type          = "Release"
free-threaded = true
```

> **Warning**
> 
> When MbedTLS is resolved externally (`LIEF_OPT_MBEDTLS_EXTERNAL=ON`), you must make sure that the provided build enables threading support. LIEF cannot tweak the threading configuration in that case.

At runtime, you can check whether the currently loaded extension was compiled with free-threading support through `lief.__free_threaded__`.

## [Runtime features](<https://lief.re/doc/latest/compilation.html#runtime-features>)

The [runtime features](<https://lief.re/doc/latest/runtime/intro.html#runtime-intro>) are **not** enabled by default and must be explicitly turned on. See  [Runtime](<https://lief.re/doc/latest/runtime/intro.html#runtime-intro>) for the CMake options and TOML configuration used to enable the runtime module.

## [Debugging](<https://lief.re/doc/latest/compilation.html#debugging>)

By default, LIEF is compiled with `CMAKE_BUILD_TYPE` set to `Release`. You can change this behavior by setting it to either `RelWithDebInfo` or `Debug` during CMake’s configuration step:

```console
$ cmake -DCMAKE_BUILD_TYPE=RelWithDebInfo [...] ..
```

Alternatively, the Python bindings can also be compiled with debug information by changing the `type` in the `[lief.build]` section of `config-default.toml`:

```toml
[lief.build]
type = "RelWithDebInfo"
```

> **Note**
> 
> When developing LIEF, you can use:
> 
> ```console
> $ PYLIEF_CONF=~/lief-debug.toml pip install [-e] api/python
> ```
> 
> With `lief-debug.toml` set to:
> 
> ```toml
> [lief.build]
> type = "RelWithDebInfo"
> ...
> 
> [lief.logging]
> enabled = true
> debug   = true
> ```

## [Third Party](<https://lief.re/doc/latest/compilation.html#third-party>)

LIEF relies on several external projects, and we aim to limit dependencies in the public headers as much as possible. The following table summarizes these dependencies and their scopes. `internal` means that it is required to compile LIEF but not to use it. `external` means that it is required for both.

| Dependency | Scope | Purpose |
| --- | --- | --- |
| [tcbrindle/span](<https://github.com/tcbrindle/span>) | `external` | C++11 span interface |
| [TartanLlama/expected](<https://github.com/TartanLlama/expected>) | `external` | Error handling (see:  [Error Handling](<https://lief.re/doc/latest/api/error_handling/index.html#err-handling>) ) |
| [gabime/spdlog](<https://github.com/gabime/spdlog>) | `internal` | Logging |
| [Mbed-TLS/mbedtls](<https://github.com/Mbed-TLS/mbedtls>) | `internal` | ASN.1 parser / Hash functions |
| [nemtrif/utfcpp](<https://github.com/nemtrif/utfcpp>) | `internal` | Unicode support (for PE and DEX files) |
| [nlohmann/json](<https://github.com/nlohmann/json>) | `internal` | Serialize LIEF objects into JSON |
| [wjakob/nanobind](<https://github.com/wjakob/nanobind>) | `internal` | Python bindings |
| [serge-sans-paille/frozen](<https://github.com/serge-sans-paille/frozen>) | `internal` | `constexpr` containers |
| [IOActive/Melkor\_ELF\_Fuzzer](<https://github.com/IOActive/Melkor_ELF_Fuzzer>) | `internal` | ELF Fuzzing |
| [catchorg/Catch2](<https://github.com/catchorg/Catch2>) | `internal` | Unit Testing |

With the exception of MbedTLS, all of these dependencies are header-only. By default, they are embedded and managed by LIEF to simplify compilation and integration.

Nevertheless, package managers often require linking against system libraries rather than using vendored dependencies [[1]](<https://lief.re/doc/latest/compilation.html#ref-issue>) [[2]](<https://lief.re/doc/latest/compilation.html#ref-vcpk>).

To address this requirement, you can control the integration of LIEF’s dependencies using the following CMake options:

> - `LIEF_OPT_NLOHMANN_JSON_EXTERNAL`
> - `LIEF_OPT_UTFCPP_EXTERNAL`
> - `LIEF_OPT_MBEDTLS_EXTERNAL`
> - `LIEF_EXTERNAL_SPDLOG`
> - `LIEF_OPT_FROZEN_EXTERNAL`
> - `LIEF_OPT_EXTERNAL_SPAN/LIEF_EXTERNAL_SPAN_DIR`
> - `LIEF_OPT_EXTERNAL_EXPECTED`
> - `LIEF_OPT_NANOBIND_EXTERNAL`

By setting these flags, LIEF will resolve dependencies using CMake’s `find_package(...)`, which relies on `<DEPS>_DIR` to locate the package.

For example, LIEF can be compiled using the following configuration:

```console
$ cmake .. -GNinja                                                                    \
           -DLIEF_OPT_NLOHMANN_JSON_EXTERNAL=ON                                       \
           -Dnlohmann_json_DIR=/lief-third-party/json/install/lib/cmake/nlohmann_json \
           -DLIEF_OPT_MBEDTLS_EXTERNAL=on                                             \
           -DMbedTLS_DIR=/lief-third-party/mbedtls/install/cmake
```

> **Warning**
> 
> As mentioned previously, MbedTLS is not header-only. This means that if it is *externalized*, the static version of LIEF will not include the MbedTLS object files, and the end user will have to manually link `LIEF.a` with a provided version of MbedTLS.

[[1](<https://lief.re/doc/latest/compilation.html#id1>)]

[https://github.com/lief-project/LIEF/issues/605](<https://github.com/lief-project/LIEF/issues/605>)

[[2](<https://lief.re/doc/latest/compilation.html#id2>)]

[https://learn.microsoft.com/en-us/vcpkg/contributing/maintainer-guide#do-not-use-vendored-dependencies](<https://learn.microsoft.com/en-us/vcpkg/contributing/maintainer-guide#do-not-use-vendored-dependencies>)

## [Continuous Integration](<https://lief.re/doc/latest/compilation.html#continuous-integration>)

LIEF uses GitHub Actions to test and release nightly builds. The configuration of this CI can also be a good source of information for the compilation process. In particular, [scripts/docker/linux-sdk-x64](<https://github.com/lief-project/LIEF/blob/main/scripts/docker/linux-sdk-x64>) contains the build process to generate the **Linux x86-64 SDK**.

On Windows, the SDK is built with the following Python script: [scripts/windows/package\_sdk.py](<https://github.com/lief-project/LIEF/blob/main/scripts/windows/package_sdk.py>)

For **OSX**, refer to the CI config [.github/workflows/osx.yml](<https://github.com/lief-project/LIEF/blob/main/.github/workflows/osx.yml>), and for **iOS**, see the [scripts/osx/package\_ios.sh](<https://github.com/lief-project/LIEF/blob/main/scripts/osx/package_ios.sh>) script, to see how LIEF is compiled (and cross-compiled) for these platforms.

## [CMake Options](<https://lief.re/doc/latest/compilation.html#cmake-options>)

```default
include_guard(GLOBAL)
include(CMakeDependentOption)

option(LIEF_TESTS                      "Enable tests"                               OFF)
option(LIEF_PYTHON_API                 "Enable Python Bindings"                     OFF)
option(LIEF_EXAMPLES                   "Build LIEF C++ examples"                    ON)
option(LIEF_FORCE32                    "Force build LIEF 32 bits version"           OFF)
option(LIEF_USE_CCACHE                 "Use ccache to speed up compilation"         ON)
option(LIEF_EXTRA_WARNINGS             "Enable extra warning from the compiler"     OFF)
option(LIEF_LOGGING                    "Enable logging"                             ON)
option(LIEF_LOGGING_DEBUG              "Enable debug logging"                       ON)
option(LIEF_ENABLE_JSON                "Enable JSON-related APIs"                   ON)
option(LIEF_OPT_NLOHMANN_JSON_EXTERNAL "Use nlohmann/json externally"               OFF)
option(LIEF_FORCE_API_EXPORTS          "Force exports of API symbols"               OFF)
option(LIEF_PY_LIEF_EXT                "Use a pre-installed version of LIEF for the bindings" OFF)
option(LIEF_PRECOMPILED                "Use a pre-compiled version of LIEF" OFF)
option(LIEF_RUST_API                   "Generate the C++ bridge for Rust's cxx" OFF)
option(LIEF_DISABLE_EXCEPTIONS         "Disable C++ exceptions on the core library" ON)
option(LIEF_SO_VERSION                 "Embed versioning for LIEF shared library target" OFF)
option(LIEF_COMPILE_DOC_EXAMPLES       "Compile C++ examples in doc/code/" OFF)

option(LIEF_DISABLE_FROZEN "Disable Frozen even if it is supported"     OFF)
option(LIEF_RUNTIME        "Enable runtime features" OFF)

option(LIEF_ELF            "Build LIEF with ELF module"                 ON)
option(LIEF_PE             "Build LIEF with PE module"                  ON)
option(LIEF_COFF           "Build LIEF with COFF module"                ON)
option(LIEF_MACHO          "Build LIEF with MachO module"               ON)

option(LIEF_DEX            "Build LIEF with DEX module"                 ON)
option(LIEF_ART            "Build LIEF with ART module"                 ON)

# Extended features
option(LIEF_DEBUG_INFO        "Build LIEF with DWARF/PDB support"              OFF)
option(LIEF_OBJC              "Build LIEF with ObjC metadata support"          OFF)
option(LIEF_DYLD_SHARED_CACHE "Build LIEF with Dyld shared cache support"      OFF)
option(LIEF_ASM               "Build LIEF with assembler/disassembler support" OFF)
option(LIEF_RUNTIME_EXTENDED  "Build LIEF with assembler/disassembler support" OFF)

if (LIEF_COFF AND NOT LIEF_PE)
  message(FATAL_ERROR "COFF module requires LIEF_PE enabled")
endif()

if (LIEF_PE AND NOT LIEF_COFF)
  message(FATAL_ERROR "PE module requires LIEF_COFF enabled")
endif()

if (LIEF_PY_LIEF_EXT)
  set(LIEF_PRECOMPILED ON)
endif()

cmake_dependent_option(LIEF_PYTHON_EDITABLE "Make an editable build " OFF
                       "LIEF_PYTHON_API" OFF)

cmake_dependent_option(LIEF_PY_LIEF_EXT_SHARED
                      "Use a 'SHARED' version of LIEF instead of a static one" OFF
                       "LIEF_PY_LIEF_EXT" OFF)

cmake_dependent_option(LIEF_PYTHON_STATIC "Internal usage" OFF
                       "LIEF_PYTHON_API" OFF)

cmake_dependent_option(LIEF_PYTHON_STABLE_ABI "Compile LIEF Python bindings with the stable ABI" OFF
                       "LIEF_PYTHON_API" OFF)

cmake_dependent_option(LIEF_PYTHON_FREE_THREADED "Compile LIEF Python bindings with free-threading enabled" OFF
                       "LIEF_PYTHON_API" OFF)

# OAT support relies on the ELF and DEX format.
# Therefore, these options must be enabled to support this format
cmake_dependent_option(LIEF_OAT "Build LIEF with OAT module" ON
                       "LIEF_ELF;LIEF_DEX" OFF)

# VDEX format depends on the DEX module
cmake_dependent_option(LIEF_VDEX "Build LIEF with VDEX module" ON
                       "LIEF_DEX" OFF)

# Sanitizer
option(LIEF_ASAN "Enable Address sanitizer"   OFF)
option(LIEF_LSAN "Enable Leak sanitizer"      OFF)
option(LIEF_TSAN "Enable Thread sanitizer"    OFF)
option(LIEF_USAN "Enable undefined sanitizer" OFF)

# Fuzzer
option(LIEF_FUZZING "Fuzz LIEF" OFF)

# Profiling
option(LIEF_PROFILING "Enable performance profiling" OFF)

# QA / Linters
option(LIEF_CLANG_TIDY "Enable clang-tidy checks" OFF)
cmake_dependent_option(LIEF_CLANG_TIDY_WARN_ERR
  "Enable WarningsAsErrors when running clang-tidy" OFF "LIEF_CLANG_TIDY" OFF)

# Install options
cmake_dependent_option(LIEF_INSTALL_COMPILED_EXAMPLES "Install LIEF Compiled examples" OFF
                       "LIEF_EXAMPLES" OFF)

# Use a user-provided version of spdlog
# It can be useful to reduce compile time
option(LIEF_EXTERNAL_SPDLOG OFF)

# This option enables to provide an external
# version of TartanLlama/expected (e.g. present on the system)
option(LIEF_OPT_EXTERNAL_EXPECTED OFF)

# This option enables to provide an external version of utf8cpp
option(LIEF_OPT_UTFCPP_EXTERNAL OFF)

# This option enables to provide an external version of MbedTLS
option(LIEF_OPT_MBEDTLS_EXTERNAL OFF)

# This option enables to provide an external version of nanobind
option(LIEF_OPT_NANOBIND_EXTERNAL OFF)

# This option enables to provide an external
# version of https://github.com/tcbrindle/span (e.g. present on the system)
option(LIEF_OPT_EXTERNAL_SPAN OFF)
set(LIEF_EXTERNAL_SPAN_DIR )

# This option enables to provide an external version of Frozen
set(_LIEF_USE_FROZEN ON)
if(LIEF_DISABLE_FROZEN)
  set(_LIEF_USE_FROZEN OFF)
endif()

cmake_dependent_option(LIEF_OPT_FROZEN_EXTERNAL "Use an external provided version of Frozen" OFF
                       "_LIEF_USE_FROZEN" OFF)

option(LIEF_USE_MELKOR "Build Melkor for testing" ON)

# This option enables the install target in the cmake
option(LIEF_INSTALL "Generate the install target." ON)
set(LIEF_RUNTIME_SUPPORT 0)

set(LIEF_ELF_SUPPORT 0)
set(LIEF_PE_SUPPORT 0)
set(LIEF_MACHO_SUPPORT 0)

set(LIEF_COFF_SUPPORT 0)
set(LIEF_OAT_SUPPORT 0)
set(LIEF_DEX_SUPPORT 0)
set(LIEF_VDEX_SUPPORT 0)
set(LIEF_ART_SUPPORT 0)

set(LIEF_JSON_SUPPORT 0)
set(LIEF_NLOHMANN_JSON_EXTERNAL 0)
set(LIEF_LOGGING_SUPPORT 0)
set(LIEF_LOGGING_DEBUG_SUPPORT 0)
set(LIEF_FROZEN_ENABLED 0)
set(LIEF_EXTERNAL_FROZEN 0)

set(LIEF_EXTERNAL_EXPECTED 0)
set(LIEF_EXTERNAL_UTF8CPP 0)
set(LIEF_EXTERNAL_MBEDTLS 0)
set(LIEF_EXTERNAL_SPAN 0)

set(LIEF_DEBUG_INFO_SUPPORT 0)
set(LIEF_OBJC_SUPPORT 0)
set(LIEF_DYLD_SHARED_CACHE_SUPPORT 0)
set(LIEF_ASM_SUPPORT 0)
set(LIEF_EXTENDED 0)

if(LIEF_RUNTIME)
  set(LIEF_RUNTIME_SUPPORT 1)
endif()

if(LIEF_ELF)
  set(LIEF_ELF_SUPPORT 1)
endif()

if(LIEF_PE)
  set(LIEF_PE_SUPPORT 1)
endif()

if(LIEF_MACHO)
  set(LIEF_MACHO_SUPPORT 1)
endif()

if(LIEF_COFF)
  set(LIEF_COFF_SUPPORT 1)
endif()

if(LIEF_OAT)
  set(LIEF_OAT_SUPPORT 1)
endif()

if(LIEF_DEX)
  set(LIEF_DEX_SUPPORT 1)
endif()

if(LIEF_VDEX)
  set(LIEF_VDEX_SUPPORT 1)
endif()

if(LIEF_ART)
  set(LIEF_ART_SUPPORT 1)
endif()

if(LIEF_ENABLE_JSON)
  set(LIEF_JSON_SUPPORT 1)
  if(LIEF_OPT_NLOHMANN_JSON_EXTERNAL)
    set(LIEF_NLOHMANN_JSON_EXTERNAL 1)
  endif()
endif()

if(LIEF_LOGGING)
  set(LIEF_LOGGING_SUPPORT 1)
  if(LIEF_LOGGING_DEBUG)
    set(LIEF_LOGGING_DEBUG_SUPPORT 1)
  else()
    set(LIEF_LOGGING_DEBUG_SUPPORT 0)
  endif()
endif()

if(NOT LIEF_DISABLE_FROZEN)
  set(LIEF_FROZEN_ENABLED 1)
  if(LIEF_OPT_FROZEN_EXTERNAL)
    set(LIEF_EXTERNAL_FROZEN 1)
  endif()
endif()

if(LIEF_OPT_EXTERNAL_EXPECTED)
  set(LIEF_EXTERNAL_EXPECTED 1)
endif()

if(LIEF_OPT_UTFCPP_EXTERNAL)
  set(LIEF_EXTERNAL_UTF8CPP 1)
endif()

if(LIEF_OPT_MBEDTLS_EXTERNAL)
  set(LIEF_EXTERNAL_MBEDTLS 1)
endif()

if(LIEF_OPT_EXTERNAL_SPAN)
  set(LIEF_EXTERNAL_SPAN 1)
endif()

if(LIEF_PYTHON_API)
  if(LIEF_OPT_NANOBIND_EXTERNAL)
    set(LIEF_EXTERNAL_NANOBIND 1)
  endif()
endif()

# ------------------------------------------------------------------------------
# Extended features
# ------------------------------------------------------------------------------
if (LIEF_DEBUG_INFO)
  set(LIEF_DEBUG_INFO_SUPPORT 1)
endif()

if (LIEF_OBJC)
  set(LIEF_OBJC_SUPPORT 1)
endif()

if (LIEF_DYLD_SHARED_CACHE)
  set(LIEF_DYLD_SHARED_CACHE_SUPPORT 1)
endif()

if (LIEF_ASM)
  set(LIEF_ASM_SUPPORT 1)
endif()

if (LIEF_RUNTIME_EXTENDED)
  set(LIEF_RUNTIME_EXTENDED_SUPPORT 1)
endif()

if (LIEF_DEBUG_INFO        OR
    LIEF_OBJC              OR
    LIEF_DYLD_SHARED_CACHE OR
    LIEF_ASM               OR
    LIEF_RUNTIME_EXTENDED) # or any other extended feature
  set(LIEF_EXTENDED 1)
endif()

if (LIEF_RUNTIME)
  include(LIEFRuntime)
endif()
```

## [Docker](<https://lief.re/doc/latest/compilation.html#docker>)

See [liefproject](<https://hub.docker.com/u/liefproject>) on Docker Hub
