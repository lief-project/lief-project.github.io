.. _runtime_host:

:fa:`solid fa-server` Host
--------------------------

The |lief-runtime-host| interface exposes an API to query information about
the host on which LIEF is running. It provides a cross-platform API for
common values like the hostname and standard user directories (home, cache, ...).
Platform-specific information is provided within their own namespace/module.

:fa:`solid fa-globe` Cross-platform
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following snippet illustrates how to retrieve the generic host
information that is available on every supported platform:

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../../examples/python/runtime_linux.py
      :language: python
      :start-after: lief-doc: host-start
      :end-before: lief-doc: host-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../../examples/cpp/runtime_linux.cpp
      :language: cpp
      :start-after: lief-doc: host-start
      :end-before: lief-doc: host-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../../examples/rust/runtime_linux.rs
      :language: rust
      :start-after: lief-doc: host-start
      :end-before: lief-doc: host-end
      :dedent:

:fa:`brands fa-linux` Linux
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The |lief-runtime-linux-host| interface exposes Linux-specific host information:

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../../examples/python/runtime_linux.py
      :language: python
      :start-after: lief-doc: host-linux-start
      :end-before: lief-doc: host-linux-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../../examples/cpp/runtime_linux.cpp
      :language: cpp
      :start-after: lief-doc: host-linux-start
      :end-before: lief-doc: host-linux-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../../examples/rust/runtime_linux.rs
      :language: rust
      :start-after: lief-doc: host-linux-start
      :end-before: lief-doc: host-linux-end
      :dedent:

:fa:`brands fa-windows` Windows
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The |lief-runtime-windows-host| interface exposes Windows-specific host
information such as the operating system version
(|lief-runtime-windows-host-version|):

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../../examples/python/runtime_windows.py
      :language: python
      :start-after: lief-doc: host-windows-start
      :end-before: lief-doc: host-windows-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../../examples/cpp/runtime_windows.cpp
      :language: cpp
      :start-after: lief-doc: host-windows-start
      :end-before: lief-doc: host-windows-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../../examples/rust/runtime_windows.rs
      :language: rust
      :start-after: lief-doc: host-windows-start
      :end-before: lief-doc: host-windows-end
      :dedent:

:fa:`brands fa-apple` OSX
~~~~~~~~~~~~~~~~~~~~~~~~~~

The |lief-runtime-osx-host| interface exposes macOS-specific host
information such as whether System Integrity
Protection is enabled (|lief-runtime-osx-host-is-sip-enabled|):

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../../examples/python/runtime_osx.py
      :language: python
      :start-after: lief-doc: host-osx-start
      :end-before: lief-doc: host-osx-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../../examples/cpp/runtime_osx.cpp
      :language: cpp
      :start-after: lief-doc: host-osx-start
      :end-before: lief-doc: host-osx-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../../examples/rust/runtime_osx.rs
      :language: rust
      :start-after: lief-doc: host-osx-start
      :end-before: lief-doc: host-osx-end
      :dedent:

:fa:`brands fa-android` Android
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The |lief-runtime-android-host| interface exposes Android-specific host
information such as the device's SDK/API level
(|lief-runtime-android-host-sdk_version|):

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../../examples/python/runtime_android.py
      :language: python
      :start-after: lief-doc: host-android-start
      :end-before: lief-doc: host-android-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../../examples/cpp/runtime_android.cpp
      :language: cpp
      :start-after: lief-doc: host-android-start
      :end-before: lief-doc: host-android-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../../examples/rust/runtime_android.rs
      :language: rust
      :start-after: lief-doc: host-android-start
      :end-before: lief-doc: host-android-end
      :dedent:

.. include:: ../../_cross_api.rst
