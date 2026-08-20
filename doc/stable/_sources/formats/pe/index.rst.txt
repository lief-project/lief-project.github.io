.. _format-pe:

:fa:`brands fa-windows`  PE
----------------------------

.. toctree::
  :caption: <i class="fa-solid fa-code">&nbsp;</i>API
  :maxdepth: 1

  cpp
  python
  rust

.. toctree::
  :caption: <i class="fa-solid fa-gears">&nbsp;</i>Modifications
  :maxdepth: 1

  modifications/imports
  modifications/resources
  modifications/tls
  modifications/debug
  modifications/exports

----

Introduction
************

PE binaries can be parsed using the |lief-pe-parse| function.

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/pe.py
        :language: python
        :prepend: import lief
        :start-after: lief-doc: parse-start
        :end-before: lief-doc: parse-end
        :dedent:


  .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/pe.cpp
        :language: cpp
        :prepend: #include <LIEF/PE.hpp>
        :start-after: lief-doc: parse-start
        :end-before: lief-doc: parse-end
        :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/pe.rs
        :language: rust
        :start-after: lief-doc: parse-start
        :end-before: lief-doc: parse-end
        :dedent:

.. note::

  In Python, you can also use the generic :py:func:`lief.parse`, which returns a
  :class:`lief.PE.Binary` object.

With the parsed PE binary, you can use the |lief-pe-binary| API to
inspect or modify the binary itself.

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/pe.py
        :language: python
        :start-after: lief-doc: inspect-start
        :end-before: lief-doc: inspect-end
        :dedent:


  .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/pe.cpp
        :language: cpp
        :start-after: lief-doc: inspect-start
        :end-before: lief-doc: inspect-end
        :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/pe.rs
        :language: rust
        :start-after: lief-doc: inspect-start
        :end-before: lief-doc: inspect-end
        :dedent:

After modifying a |lief-pe-binary| object, you can use |lief-pe-binary-write| to
write the changes back to a raw PE file.

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/pe.py
        :language: python
        :start-after: lief-doc: add-section-start
        :end-before: lief-doc: add-section-end
        :dedent:


  .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/pe.cpp
        :language: cpp
        :start-after: lief-doc: add-section-start
        :end-before: lief-doc: add-section-end
        :dedent:


  .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/pe.rs
        :language: rust
        :start-after: lief-doc: add-section-start
        :end-before: lief-doc: add-section-end
        :dedent:

.. seealso::

  :ref:`binary-abstraction`


.. _format-pe-dump:

Dump Analysis
*************

LIEF has the support to process PE memory dump with |lief-pe-parse_from_dump|. This function
translates the file offsets referenced by the PE structures into their location inside
the dump, using the base address passed as the second parameter:

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../code/python/pe.py
      :language: python
      :start-after: lief-doc: dump-start
      :end-before: lief-doc: dump-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../code/cpp/pe.cpp
      :language: cpp
      :start-after: lief-doc: dump-start
      :end-before: lief-doc: dump-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../code/rust/src/pe.rs
      :language: rust
      :start-after: lief-doc: dump-start
      :end-before: lief-doc: dump-end
      :dedent:

.. note::

  The second parameter **must** be the (absolute) virtual address at which the
  dump was mapped. It is used to convert the RVAs found in the PE structures
  back into an offset within the dump.

Producing a dump with the runtime API
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Such a dump can be produced from a live process thanks to the LIEF
:ref:`runtime <runtime-intro>` and, more precisely, the
:ref:`Module API <runtime_modules>`. |lief-runtime-module-dump| captures the
memory of a loaded module (from its imagebase over its virtual size):

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

    .. literalinclude:: ../../../code/python/pe.py
      :language: python
      :start-after: lief-doc: dump-runtime-start
      :end-before: lief-doc: dump-runtime-end
      :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

    .. literalinclude:: ../../../code/cpp/pe.cpp
      :language: cpp
      :start-after: lief-doc: dump-runtime-start
      :end-before: lief-doc: dump-runtime-end
      :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

    .. literalinclude:: ../../../code/rust/src/pe.rs
      :language: rust
      :start-after: lief-doc: dump-runtime-start
      :end-before: lief-doc: dump-runtime-end
      :dedent:


Advanced Parsing/Writing
************************

.. toctree::
  :caption: <i class="fa-solid fa-gears">&nbsp;</i>Modifications
  :maxdepth: 1

  modifications/imports
  modifications/resources
  modifications/tls

|lief-pe-parse| can take an extra |lief-pe-parser-config| parameter to specify
parts of the PE format to ignore during parsing.

.. warning::

   Generally, |lief-pe-binary-write| requires a **complete** initial
   parsing of the PE file.

Similarly, |lief-pe-binary-write| can take an extra |lief-pe-builder-config|
parameter to include or ignore parts of the PE binary during the build
process.

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/pe.py
        :language: python
        :start-after: lief-doc: advanced-start
        :end-before: lief-doc: advanced-end
        :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/pe.cpp
        :language: cpp
        :start-after: lief-doc: advanced-start
        :end-before: lief-doc: advanced-end
        :dedent:


  .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/pe.rs
        :language: rust
        :start-after: lief-doc: advanced-start
        :end-before: lief-doc: advanced-end
        :dedent:

You can also use |lief-pe-binary-write_to_bytes| to get the new PE binary
as a buffer of bytes:

.. note::

   This API can also take an extra |lief-pe-builder-config| parameter.

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/pe.py
        :language: python
        :start-after: lief-doc: write-bytes-start
        :end-before: lief-doc: write-bytes-end
        :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/pe.cpp
        :language: cpp
        :start-after: lief-doc: write-bytes-start
        :end-before: lief-doc: write-bytes-end
        :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/pe.rs
        :language: rust
        :start-after: lief-doc: write-bytes-start
        :end-before: lief-doc: write-bytes-end
        :dedent:

PDB Support
***********

Using :ref:`LIEF Extended <extended-intro>`, you can access PDB debug information
(|lief-pdb-debug-info|) using the |lief-pdb-binary-debug-info| function.

For more details regarding PDB support, please refer to the
:ref:`PDB section <extended-pdb>`.

Authenticode
************

LIEF supports PE Authenticode by providing an API for inspecting and
**verifying** PE executable signatures.

PE Authenticode signatures can be accessed by iterating over
|lief-pe-binary-signatures|. The |lief-pe-binary-verify_signature| function can
be used to verify that a PE binary is correctly signed.

.. note::

   Typically, a signed PE executable contains a single signature, but the
   format allows for multiple signatures. Consequently,
   |lief-pe-binary-signatures| returns an iterator rather than a single
   signature object.

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/pe.py
        :language: python
        :start-after: lief-doc: authenticode-start
        :end-before: lief-doc: authenticode-end
        :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/pe.cpp
        :language: cpp
        :start-after: lief-doc: authenticode-start
        :end-before: lief-doc: authenticode-end
        :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/pe.rs
        :language: rust
        :start-after: lief-doc: authenticode-start
        :end-before: lief-doc: authenticode-end
        :dedent:

You can find additional details about Authenticode support in this tutorial:
:ref:`PE Authenticode <pe-authenticode>`

.. include:: ../../_cross_api.rst
