.. _runtime_process:

:fa:`solid fa-gears` Process
----------------------------

The |lief-runtime-process| interface exposes an API to query information
about the current process. It provides cross-platform API and is extended
on each platform with additional OS-specific helpers.

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../../examples/python/runtime_linux.py
      :language: python
      :start-after: lief-doc: process-start
      :end-before: lief-doc: process-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../../examples/cpp/runtime_linux.cpp
      :language: cpp
      :start-after: lief-doc: process-start
      :end-before: lief-doc: process-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../../examples/rust/runtime_linux.rs
      :language: rust
      :start-after: lief-doc: process-start
      :end-before: lief-doc: process-end
      :dedent:

:fa:`brands fa-linux` Linux
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

On Linux, |lief-runtime-linux-process| extends the generic interface with
platform-specific helpers. For instance,
|lief-runtime-linux-process-glibc_version| returns the version of the GNU
C Library loaded in the current process:

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../../examples/python/runtime_linux.py
      :language: python
      :start-after: lief-doc: process-linux-start
      :end-before: lief-doc: process-linux-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../../examples/cpp/runtime_linux.cpp
      :language: cpp
      :start-after: lief-doc: process-linux-start
      :end-before: lief-doc: process-linux-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../../examples/rust/runtime_linux.rs
      :language: rust
      :start-after: lief-doc: process-linux-start
      :end-before: lief-doc: process-linux-end
      :dedent:


:fa:`brands fa-windows` Windows
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

On Windows, the process interface is extended with
|lief-runtime-windows-process| which exposes the Process Environment
Block (PEB) of the current process. The returned |lief-runtime-windows-peb|
object provides access to some fields of the structure (whether the
process is being debugged, the loader data, the process parameters, ...):

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../../examples/python/runtime_windows.py
      :language: python
      :start-after: lief-doc: process-windows-start
      :end-before: lief-doc: process-windows-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../../examples/cpp/runtime_windows.cpp
      :language: cpp
      :start-after: lief-doc: process-windows-start
      :end-before: lief-doc: process-windows-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../../examples/rust/runtime_windows.rs
      :language: rust
      :start-after: lief-doc: process-windows-start
      :end-before: lief-doc: process-windows-end
      :dedent:


The loader's module list is exposed through |lief-runtime-windows-peb-entries|,
which yields |lief-runtime-windows-ldr| objects. In addition to
the base name and image base, each entry exposes the extended
``LDR_DATA_TABLE_ENTRY`` fields.

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../../examples/python/runtime_windows.py
      :language: python
      :start-after: lief-doc: peb-module-details-start
      :end-before: lief-doc: peb-module-details-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../../examples/cpp/runtime_windows.cpp
      :language: cpp
      :start-after: lief-doc: peb-module-details-start
      :end-before: lief-doc: peb-module-details-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../../examples/rust/runtime_windows.rs
      :language: rust
      :start-after: lief-doc: peb-module-details-start
      :end-before: lief-doc: peb-module-details-end
      :dedent:


:fa:`brands fa-apple` OSX
~~~~~~~~~~~~~~~~~~~~~~~~~~

On macOS, |lief-runtime-osx-process| extends the generic interface with
platform-specific helpers. For instance, |lief-runtime-osx-process-dyld_version|
returns the version of ``dyld`` (the dynamic loader) in the current process:

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../../examples/python/runtime_osx.py
      :language: python
      :start-after: lief-doc: process-osx-start
      :end-before: lief-doc: process-osx-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../../examples/cpp/runtime_osx.cpp
      :language: cpp
      :start-after: lief-doc: process-osx-start
      :end-before: lief-doc: process-osx-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../../examples/rust/runtime_osx.rs
      :language: rust
      :start-after: lief-doc: process-osx-start
      :end-before: lief-doc: process-osx-end
      :dedent:


:fa:`brands fa-android` Android
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

On Android, |lief-runtime-android-process| extends the generic interface. Here are
some examples of the API:

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../../examples/python/runtime_android.py
      :language: python
      :start-after: lief-doc: process-android-start
      :end-before: lief-doc: process-android-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../../examples/cpp/runtime_android.cpp
      :language: cpp
      :start-after: lief-doc: process-android-start
      :end-before: lief-doc: process-android-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../../examples/rust/runtime_android.rs
      :language: rust
      :start-after: lief-doc: process-android-start
      :end-before: lief-doc: process-android-end
      :dedent:


.. include:: ../../_cross_api.rst
