---
documentID: "86544ce82684f44ba6e1c8119634564567ff4f85efd32dda021ce908c47c3255"
docname: "installation"
title: "Installation and Integration - LIEF Documentation"
description: "Installation and Integration. For each platform supported by LIEF, the SDK packages contain:"
canonical: "https://lief.re/doc/latest/installation.html"
markdownURL: "https://lief.re/doc/latest/installation.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "b190788e5af25621e1814ba41b6a198a2025e3dd3fc0e358aeeb507a3288f401"
---

# [Installation and Integration](<https://lief.re/doc/latest/installation.html#installation-and-integration>)

## [SDK](<https://lief.re/doc/latest/installation.html#sdk>)

For each platform supported by LIEF, the SDK packages contain:

- static and shared libraries
- headers
- compiled examples

Nightly builds can be downloaded at: [https://lief.s3-website.fr-par.scw.cloud/latest/sdk](<https://lief.s3-website.fr-par.scw.cloud/latest/sdk>), while official releases are available on the GitHub releases page: [https://github.com/lief-project/LIEF/releases](<https://github.com/lief-project/LIEF/releases>).

## [Python](<https://lief.re/doc/latest/installation.html#python>)

Nightly Python wheels are uploaded to an S3 bucket for **each commit** on the main branch. They can be installed using:

```console
$ pip install [--user] --index-url https://lief.s3-website.fr-par.scw.cloud/latest lief
```

For tagged releases, the wheels are uploaded to PyPI and can be installed using:

```console
$ pip install lief
```

You can also compile and install from source as follows:

```console
$ git clone https://github.com/lief-project/LIEF
$ pip install LIEF/api/python
# Or pip+git:
$ pip install git+https://github.com/lief-project/LIEF.git#subdirectory=api/python
```

For more details about the compilation options, see the  [Compilation](<https://lief.re/doc/latest/compilation.html#compilation-ref>) section.

## [Rust](<https://lief.re/doc/latest/installation.html#rust>)

You can add LIEF as a dependency in a Rust project as follows:

```toml
# For nightly build
[dependencies]
lief = { git = "https://github.com/lief-project/LIEF", branch = "main" }

# For a tagged release
[dependencies]
lief = "1.0.0"
```

You can find more details in the [Rust API section](<https://lief.re/doc/latest/api/rust/index.html#lief-rust-bindings>).

## [CMake Integration](<https://lief.re/doc/latest/installation.html#cmake-integration>)

There are several ways to integrate LIEF as a dependency into another project. The following methods are listed in order of preference according to CMake best practices. These snippets show basic examples; please refer to the official CMake documentation for questions related to more complex project setups.

### [find\_package()](<https://lief.re/doc/latest/installation.html#find-package>)

Using [CMake find\_package()](<https://cmake.org/cmake/help/latest/command/find_package.html>):

```cmake
# Use LIEF with 'find_package()'
# ==============================

# Find LIEF. If LIEF was not installed into a default system directory then
# specify the following option during CMake configuration:
# -DLIEF_DIR=<LIEF install prefix>/share/LIEF/cmake
find_package(LIEF REQUIRED COMPONENTS STATIC) # COMPONENTS: <SHARED | STATIC> - Default: STATIC
```

To integrate this within a project:

```cmake
# Add our executable
# ==================
add_executable(HelloLIEF main.cpp)

# Enable C++11
set_property(TARGET HelloLIEF
             PROPERTY CXX_STANDARD           17
             PROPERTY CXX_STANDARD_REQUIRED  ON)

# Link the executable with LIEF
target_link_libraries(HelloLIEF PRIVATE LIEF::LIEF)
```

For the compilation:

```console
$ mkdir build
$ cd build
$ cmake -DLIEF_DIR=<PATH_TO_LIEF_INSTALL_DIR>/lib/cmake/LIEF/ ..
$ make
$ HelloLIEF /bin/ls # or explorer.exe or whatever
```

A *full* example is available in the `examples/cmake/find_package` directory.

### [add\_subdirectory() or FetchContent](<https://lief.re/doc/latest/installation.html#add-subdirectory-or-fetchcontent>)

First, configure the options you want to use as defaults for the LIEF project:

```cmake
# LIEF build config. Set the default options for LIEF's project setup
option(LIEF_DOC "Build LIEF docs" OFF)
option(LIEF_PYTHON_API "Build LIEF Python API" OFF)
option(LIEF_EXAMPLES "Build LIEF examples" OFF)
option(LIEF_TESTS "Build LIEF tests" OFF)

if(MSVC)
  set(CMAKE_MSVC_RUNTIME_LIBRARY "MultiThreaded" CACHE STRING "CRT option")
endif()


# If you have LIEF as a submodule in a directory, then you can add it to this
```

Using [CMake add\_subdirectory()](<https://cmake.org/cmake/help/latest/command/add_subdirectory.html>) to add LIEF as a submodule from a source directory:

```cmake
# NOTE: This submodule does not exist for this example, but it does the same
# thing as FetchContent without the download part
set(vendorLIEF_submodule_dir "${CMAKE_CURRENT_LIST_DIR}/LIEF")
if(EXISTS "${vendorLIEF_submodule_dir}")
  add_subdirectory("${vendorLIEF_submodule_dir}")

# Else, we'll specify how to obtain LIEF another way (downloading)
else()
```

You can also use the [CMake FetchContent module](<https://cmake.org/cmake/help/latest/module/FetchContent.html>) to download or specify a LIEF source directory outside the current directory:

```cmake
  # URL of the LIEF repo (Can be your fork)
  set(LIEF_GIT_URL "https://github.com/lief-project/LIEF.git")

  # LIEF's version to be used (can be 'main')
  set(LIEF_VERSION 1.0.0)

  include(FetchContent)
  FetchContent_Declare(LIEF
    GIT_REPOSITORY  "${LIEF_GIT_URL}"
    GIT_TAG         ${LIEF_VERSION}
    # You may specify an existing LIEF source directory if you don't want to
    # download. Just comment out the above ``GIT_*`` commands and uncoment the
    # following ``SOURCE_DIR`` line
    #SOURCE_DIR      "${CMAKE_CURRENT_LIST_DIR}/../../.."
    )

  if(${CMAKE_VERSION} VERSION_LESS "3.14.0")
    # CMake 3.11 to 3.13 needs more verbose method to make LIEF available
    FetchContent_GetProperties(LIEF)
    if(NOT LIEF_POPULATED)
      FetchContent_Populate(LIEF)
      add_subdirectory(${LIEF_SOURCE_DIR} ${LIEF_BINARY_DIR})
    endif()
  else()
    # CMake 3.14+ has single function to make LIEF available (recommended)
    FetchContent_MakeAvailable(LIEF)
  endif()
endif()
```

To integrate this within a project:

```cmake
add_executable(HelloLIEF main.cpp)

# Enable C++11
set_property(TARGET HelloLIEF
             PROPERTY CXX_STANDARD           17
             PROPERTY CXX_STANDARD_REQUIRED  ON)

# Link the executable with LIEF
target_link_libraries(HelloLIEF PUBLIC LIEF::LIEF)
```

For the compilation:

```console
$ mkdir build
$ cd build
$ cmake ..
$ make
$ HelloLIEF /bin/ls # or explorer.exe or whatever
```

A *full* example is available in the `examples/cmake/add_subdirectory` directory.

### [External Project](<https://lief.re/doc/latest/installation.html#external-project>)

If you don’t want to use LIEF as a submodule, you can use [CMake External Project](<https://cmake.org/cmake/help/latest/module/ExternalProject.html>) to set up your project as a [\*superbuild\*](<https://www.kitware.com/cmake-superbuilds-git-submodules>):

```cmake
cmake_minimum_required(VERSION 3.21)

project(CMakeLIEF LANGUAGES NONE)

include(ExternalProject)

# LIEF integration as an External Project
# ===========================
set(LIEF_PREFIX       "${CMAKE_CURRENT_BINARY_DIR}/LIEF")
set(LIEF_INSTALL_DIR  "${LIEF_PREFIX}/install")

# URL of the LIEF repo (Can be your fork)
set(LIEF_GIT_URL "https://github.com/lief-project/LIEF.git")

# LIEF's version to be used (can be 'main')
set(LIEF_VERSION 0.13.0)

# LIEF compilation config
set(LIEF_CMAKE_ARGS
  -DCMAKE_INSTALL_PREFIX=<INSTALL_DIR>
  -DCMAKE_BUILD_TYPE=RelWithDebInfo
  -DLIEF_DOC=OFF
  -DLIEF_PYTHON_API=OFF
  -DLIEF_EXAMPLES=OFF
  -DLIEF_TESTS=OFF
)

if(MSVC)
  list(APPEND ${LIEF_CMAKE_ARGS} -DCMAKE_MSVC_RUNTIME_LIBRARY=MultiThreaded)
endif()

ExternalProject_Add(LIEF
  PREFIX           "${LIEF_PREFIX}"
  GIT_REPOSITORY   "${LIEF_GIT_URL}"
  GIT_TAG          ${LIEF_VERSION}
  # You may specify an existing LIEF source directory if you don't want to
  # download. Just comment out the above ``GIT_*`` commands and uncoment the
  # following ``SOURCE_DIR`` line
  #SOURCE_DIR       "${CMAKE_CURRENT_LIST_DIR}/../../.."
  INSTALL_DIR      "${LIEF_INSTALL_DIR}"
  CMAKE_ARGS       ${LIEF_CMAKE_ARGS}
```

To integrate this with a main `HelloLIEF` project located in a subdirectory (which looks exactly like the `find_package()` example shown earlier):

```cmake
# User project
# ============
ExternalProject_Add(HelloLIEF
  DEPENDS         LIEF
  SOURCE_DIR      "${CMAKE_CURRENT_LIST_DIR}/HelloLIEF"
  BINARY_DIR      "${CMAKE_CURRENT_BUILD_DIR}"
  INSTALL_COMMAND ""
  CMAKE_ARGS
    "-DLIEF_DIR=${LIEF_INSTALL_DIR}/lib/cmake/LIEF"
    -DCMAKE_BUILD_TYPE=RelWithDebInfo
)
```

For the compilation:

```console
$ mkdir build
$ cd build
$ cmake ..
$ make
$ HelloLIEF /bin/ls # or explorer.exe or what ever
```

A *full* example is available in the `examples/cmake/external_project` directory.

## [Visual Studio Integration](<https://lief.re/doc/latest/installation.html#visual-studio-integration>)

Given a pre-compiled version of the LIEF SDK (e.g., `LIEF-1.0.0-win64.zip`):

```text
.
├── bin
│   ├── pe_reader.exe
│   └── vdex_reader.exe
├── include
│   └── LIEF
├── lib
│   ├── LIEF.dll
│   ├── LIEF.lib
│   └── pkgconfig
└── share
    └── LIEF
```

Add the `include/` directory to the compiler search path: `Configuration Properties > C/C++ > General > Additional Include Directories` and include either `LIEF.lib` or `LIEF.dll` during the linking step:

`Configuration Properties > Linker > Input > Additional Dependencies`

> **Warning**
> 
> `LIEF.dll` is compiled with the `/MD` flag (`MultiThreadedDLL`), while `LIEF.lib` is compiled with the `/MT` flag (`MultiThreaded`).
> 
> If this configuration is not suitable for your project, you can compile LIEF with your required runtime.

## [Xcode Integration](<https://lief.re/doc/latest/installation.html#xcode-integration>)

Similar to Visual Studio, you should configure the Xcode project to include LIEF’s `include/` and `lib/` directories:

- `include/`: `Build Settings > Search Paths > Header Search Paths`
- `lib/`: `Build Settings > Search Paths > Library Search Paths`

Then, you can add `libLIEF.a` or `libLIEF.dylib` to the list of libraries to link against:

`Build Phases > Link Binary With Libraries`
