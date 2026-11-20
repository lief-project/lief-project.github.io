.. _extended-pdb:

:fa:`brands fa-windows` PDB
----------------------------

.. toctree::
  :caption: <i class="fa-solid fa-code">&nbsp;</i>API
  :maxdepth: 1

  cpp
  python
  rust

----

Introduction
************

Unlike DWARF debug information, PDB debug information is always stored
externally from the original binary. Nevertheless, the original binary keeps
the path of the PDB file in the |lief-pe-codeviewpdb-filename| attribute.

Based on this fact, |lief-pdb-binary-debug-info| tries to instantiate a
|lief-pdb-debug-info| object using this file path. If it fails, it returns
``nullptr`` or ``None``.

You can also instantiate a |lief-pdb-debug-info| object using |lief-pdb-load|:

.. tabs::

    .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/pdb.py
        :language: python
        :start-after: lief-doc: load-start
        :end-before: lief-doc: load-end
        :dedent:

    .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/pdb.cpp
        :language: cpp
        :start-after: lief-doc: load-start
        :end-before: lief-doc: load-end
        :dedent:

    .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/pdb.rs
        :language: rust
        :start-after: lief-doc: load-start
        :end-before: lief-doc: load-end
        :dedent:


At this point, the PDB instance (|lief-pdb-debug-info|) can be used to explore
the PDB debug information:

.. tabs::

    .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/pdb.py
        :language: python
        :start-after: lief-doc: explore-start
        :end-before: lief-doc: explore-end
        :dedent:

    .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/pdb.cpp
        :language: cpp
        :start-after: lief-doc: explore-start
        :end-before: lief-doc: explore-end
        :dedent:


    .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/pdb.rs
        :language: rust
        :start-after: lief-doc: explore-start
        :end-before: lief-doc: explore-end
        :dedent:

.. _extended-pdb-load-ext:

You can also use the |lief-abstract-binary-load_debug_info| function to bind
a PDB file to an existing |lief-abstract-binary|:

.. tabs::

   .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/pdb.py
        :language: python
        :start-after: lief-doc: load-ext-start
        :end-before: lief-doc: load-ext-end
        :dedent:

   .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/pdb.cpp
        :language: cpp
        :start-after: lief-doc: load-ext-start
        :end-before: lief-doc: load-ext-end
        :dedent:

   .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/pdb.rs
        :language: rust
        :start-after: lief-doc: load-ext-start
        :end-before: lief-doc: load-ext-end
        :dedent:

Note that |lief-abstract-binary-load_debug_info| can also attach an external
DWARF file to a PE binary, even though this is not a typical use case.
For instance, the :ref:`BinaryNinja <plugins-binaryninja-dwarf>` and
:ref:`Ghidra <plugins-ghidra-dwarf>` DWARF export plugins can generate
a DWARF file for a PE binary based on analyses performed by these frameworks.

This external loading API is useful for adding debug information that might not
already be present in the binary. For instance, the |lief-disassemble| function
can leverage this additional debug information to disassemble functions
defined in the debug file previously loaded:

.. tabs::

   .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/pdb.py
        :language: python
        :start-after: lief-doc: disassemble-start
        :end-before: lief-doc: disassemble-end
        :dedent:

   .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/pdb.cpp
        :language: cpp
        :start-after: lief-doc: disassemble-start
        :end-before: lief-doc: disassemble-end
        :dedent:

   .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/pdb.rs
        :language: rust
        :start-after: lief-doc: disassemble-start
        :end-before: lief-doc: disassemble-end
        :dedent:

.. _extended-pdb-to-decl:

Generating C/C++ Definitions
****************************

PDB types, functions and compilation units can be turned into C/C++ definitions
using the ``to_decl()`` function:

- |lief-pdb-type-to_decl|
- |lief-pdb-function-to_decl|
- |lief-pdb-cu-to_decl|

The generated output can be configured with a |lief-declopt| structure:

.. tabs::

    .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/pdb.py
        :language: python
        :start-after: lief-doc: to-decl-start
        :end-before: lief-doc: to-decl-end
        :dedent:

    .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/pdb.cpp
        :language: cpp
        :start-after: lief-doc: to-decl-start
        :end-before: lief-doc: to-decl-end
        :dedent:

    .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/pdb.rs
        :language: rust
        :start-after: lief-doc: to-decl-start
        :end-before: lief-doc: to-decl-end
        :dedent:

----

API
****

You can find the documentation of the API for the different languages here:

:fa:`brands fa-python` :doc:`Python API <python>`

:fa:`regular fa-file-code` :doc:`C++ API <cpp>`

:fa:`brands fa-rust` Rust API: :rust:module:`lief::pdb`

.. include:: ../../_cross_api.rst
