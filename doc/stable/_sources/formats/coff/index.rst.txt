.. _format-coff:

:fa:`brands fa-windows`  COFF
-----------------------------

.. toctree::
  :caption: <i class="fa-solid fa-code">&nbsp;</i>API
  :maxdepth: 1

  cpp
  python
  rust

----

Introduction
************

COFF object files can be parsed using |lief-coff-parse| or the generic
|lief-parse| function:

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/coff.py
        :language: python
        :prepend: import lief
        :start-after: lief-doc: parse-start
        :end-before: lief-doc: parse-end
        :dedent:


  .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/coff.cpp
        :language: cpp
        :prepend: #include <LIEF/COFF.hpp>
        :start-after: lief-doc: parse-start
        :end-before: lief-doc: parse-end
        :dedent:


  .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/coff.rs
        :language: rust
        :start-after: lief-doc: parse-start
        :end-before: lief-doc: parse-end
        :dedent:

These functions return a |lief-coff-Binary| instance that exposes the main API
for processing and accessing COFF information:

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/coff.py
        :language: python
        :start-after: lief-doc: sections-start
        :end-before: lief-doc: sections-end
        :dedent:


  .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/coff.cpp
        :language: cpp
        :start-after: lief-doc: sections-start
        :end-before: lief-doc: sections-end
        :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/coff.rs
        :language: rust
        :start-after: lief-doc: sections-start
        :end-before: lief-doc: sections-end
        :dedent:

.. _format-coff-disassembler:

Disassembler
************

The |lief-coff-Binary| object exposes a disassembler API for iterating over
the instructions of a COFF binary. One can disassemble a function using
|lief-coff-binary-disassemble|:

.. tabs::

  .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/coff.py
        :language: python
        :start-after: lief-doc: disassemble-start
        :end-before: lief-doc: disassemble-end
        :dedent:

  .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/coff.cpp
        :language: cpp
        :start-after: lief-doc: disassemble-start
        :end-before: lief-doc: disassemble-end
        :dedent:

  .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/coff.rs
        :language: rust
        :start-after: lief-doc: disassemble-start
        :end-before: lief-doc: disassemble-end
        :dedent:

For more details about the disassembler and the |lief-asm-instruction| API,
please refer to the :ref:`Disassembler section <extended-disassembler>`.

.. include:: ../../_cross_api.rst
