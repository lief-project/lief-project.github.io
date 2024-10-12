.. _runtime_modules:

:fa:`solid fa-cubes` Modules
----------------------------

The |lief-runtime-module| interface exposes the different modules
(executables and shared libraries) that are loaded in the current process.
It is a cross-platform API and is extended on each supported platform with
OS-specific helpers (e.g. |lief-runtime-linux-module|,
|lief-runtime-windows-module|, |lief-runtime-osx-module|).

The following snippet shows how to iterate over the modules loaded in the
current process and how to access common attributes such as the imagebase
or the name:

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../../api/python/examples/runtime_linux.py
      :language: python
      :start-after: lief-doc: modules-start
      :end-before: lief-doc: modules-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../../examples/cpp/runtime_linux.cpp
      :language: cpp
      :start-after: lief-doc: modules-start
      :end-before: lief-doc: modules-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../../api/rust/examples/src/bin/runtime_linux.rs
      :language: rust
      :start-after: lief-doc: modules-start
      :end-before: lief-doc: modules-end
      :dedent:


:fa:`brands fa-linux` Linux
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

On Linux, |lief-runtime-linux-module| extends the generic interface with
platform-specific helpers. In particular, it exposes the |lief-runtime-linux-dlopen|
& |lief-runtime-linux-module-dlsym| and can parse the
module directly from its path on disk or from its in-memory representation.
The following snippet demonstrates these operations on the ``libc`` module:

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../../api/python/examples/runtime_linux.py
      :language: python
      :start-after: lief-doc: modules-linux-start
      :end-before: lief-doc: modules-linux-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../../examples/cpp/runtime_linux.cpp
      :language: cpp
      :start-after: lief-doc: modules-linux-start
      :end-before: lief-doc: modules-linux-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../../api/rust/examples/src/bin/runtime_linux.rs
      :language: rust
      :start-after: lief-doc: modules-linux-start
      :end-before: lief-doc: modules-linux-end
      :dedent:

:fa:`brands fa-windows` Windows
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

On Windows, you can perform similar operations such as in-memory parsing, accessing
the ``HMODULE`` handle, and resolving functions through a dlsym-like helper:

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../../api/python/examples/runtime_windows.py
      :language: python
      :start-after: lief-doc: modules-windows-start
      :end-before: lief-doc: modules-windows-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../../examples/cpp/runtime_windows.cpp
      :language: cpp
      :start-after: lief-doc: modules-windows-start
      :end-before: lief-doc: modules-windows-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../../api/rust/examples/src/bin/runtime_windows.rs
      :language: rust
      :start-after: lief-doc: modules-windows-start
      :end-before: lief-doc: modules-windows-end
      :dedent:


:fa:`brands fa-apple` OSX
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../../api/python/examples/runtime_osx.py
      :language: python
      :start-after: lief-doc: modules-osx-start
      :end-before: lief-doc: modules-osx-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../../examples/cpp/runtime_osx.cpp
      :language: cpp
      :start-after: lief-doc: modules-osx-start
      :end-before: lief-doc: modules-osx-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../../api/rust/examples/src/bin/runtime_osx.rs
      :language: rust
      :start-after: lief-doc: modules-osx-start
      :end-before: lief-doc: modules-osx-end
      :dedent:

:fa:`brands fa-android` Android
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

On Android, |lief-runtime-android-module| extends the generic interface with
the same helpers as on Linux: loading a library with
|lief-runtime-android-dlopen|, resolving symbols with
|lief-runtime-android-module-dlsym| and parsing modules from their path on
disk. The following snippet
demonstrates these operations on the Bionic ``libc`` and ``liblog`` modules:

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../../api/python/examples/runtime_android.py
      :language: python
      :start-after: lief-doc: modules-android-start
      :end-before: lief-doc: modules-android-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../../examples/cpp/runtime_android.cpp
      :language: cpp
      :start-after: lief-doc: modules-android-start
      :end-before: lief-doc: modules-android-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../../api/rust/examples/src/bin/runtime_android.rs
      :language: rust
      :start-after: lief-doc: modules-android-start
      :end-before: lief-doc: modules-android-end
      :dedent:

.. include:: ../../_cross_api.rst
