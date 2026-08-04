.. _extended-assembler:

:fa:`solid fa-user-secret` Assembler
-------------------------------------

.. toctree::
  :caption: <i class="fa-solid fa-code">&nbsp;</i>API
  :maxdepth: 1

  cpp
  python
  rust

----

Introduction
************

In addition to standard file format modifications, it may be necessary to patch
code with custom assembly. This functionality is available through the
|lief-assemble| function:

.. tabs::

   .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/assembler.py
        :language: python
        :start-after: lief-doc: disassemble-assemble-start
        :end-before: lief-doc: disassemble-assemble-end
        :dedent:

   .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/assembler.cpp
        :language: cpp
        :start-after: lief-doc: disassemble-assemble-start
        :end-before: lief-doc: disassemble-assemble-end
        :dedent:

   .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/assembler.rs
        :language: rust
        :start-after: lief-doc: disassemble-assemble-start
        :end-before: lief-doc: disassemble-assemble-end
        :dedent:

.. warning::

  The assembler works well for ``AArch64/ARM64E``, ``x86/x86-64``, and ``RISC-V``
  but support for other architectures is currently limited.

Technical Details
*****************

Similar to the :ref:`disassembler <extended-disassembler>`, this assembler is
based on the LLVM MC layer.

The assembly text is consumed by the ``llvm::MCAsmParser`` object, and we
*intercept* the raw generated assembly bytes from the ``llvm::MCObjectWriter``.

We also resolve ``llvm::MCFixup`` for a vast majority of the generated fixups.
An important feature introduced in LIEF 0.17.0 is support for resolving symbols
or labels **on the fly**.

.. _extended-assembler-contextual-patching:

Contextual Assembly Patching
****************************

Given assembly code and a target address, we might want to use a **context**
to resolve symbols referenced in the assembly listing.

For example, consider the following patch:

.. tabs::

   .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/assembler.py
        :language: python
        :start-after: lief-doc: context-error-start
        :end-before: lief-doc: context-error-end
        :dedent:

   .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/assembler.cpp
        :language: cpp
        :start-after: lief-doc: context-error-start
        :end-before: lief-doc: context-error-end
        :dedent:

   .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/assembler.rs
        :language: rust
        :start-after: lief-doc: context-error-start
        :end-before: lief-doc: context-error-end
        :dedent:

In this example, ``a_custom_function`` is undefined, so the assembler engine
cannot resolve it and raises the following error:

.. code-block:: text

    warning: Fixup not resolved:
        call a_custom_function

LIEF exposes a |lief-asm-AssemblerConfig| interface that can be used to
configure the engine and to **dynamically** resolve symbols used in the assembly
listing:

.. tabs::

   .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/assembler.py
        :language: python
        :emphasize-lines: 1-9,19
        :start-after: lief-doc: config-resolver-start
        :end-before: lief-doc: config-resolver-end
        :dedent:

   .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/assembler.cpp
        :language: cpp
        :emphasize-lines: 1-9,11,19
        :start-after: lief-doc: config-resolver-start
        :end-before: lief-doc: config-resolver-end
        :dedent:

   .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/assembler.rs
        :language: rust
        :emphasize-lines: 3-12,20
        :start-after: lief-doc: config-resolver-start
        :end-before: lief-doc: config-resolver-end
        :dedent:

This interface can be used to wrap a context, such as a generic
|lief-abstract-binary|:

.. tabs::

   .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/assembler.py
        :language: python
        :prepend: import lief
        :emphasize-lines: 6,10-13,16
        :start-after: lief-doc: config-target-start
        :end-before: lief-doc: config-target-end
        :dedent:

   .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/assembler.cpp
        :language: cpp
        :emphasize-lines: 4-6,9-12,22
        :start-after: lief-doc: config-target-start
        :end-before: lief-doc: config-target-end
        :dedent:

The Rust bindings do not offer the same flexibility to capture the
|lief-abstract-binary|. Nevertheless, the closure associated with the
:rust:member:`lief::assembly::AssemblerConfig::symbol_resolver [struct]`
can capture most of its context:

.. tabs::

   .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/assembler.rs
        :language: rust
        :emphasize-lines: 5-12
        :start-after: lief-doc: config-target-start
        :end-before: lief-doc: config-target-end
        :dedent:


Use Cases
*********

Patching code with the assembler is a fast alternative to editing raw bytes by
hand: it is useful for bypassing a check while reverse engineering,
hot-patching a bug in a shipped executable, or inserting instrumentation.


Disabling an Instruction
~~~~~~~~~~~~~~~~~~~~~~~~~

To strip a single instruction like a call to a telemetry or anti-debugging
routine *without* shifting the rest of the
function we can overwrite it with as many ``nop`` bytes as it occupied. Pairing the
:ref:`disassembler <extended-disassembler>` with |lief-assemble| lets you
do this:

.. tabs::

   .. tab:: :fa:`brands fa-python` Python

      .. literalinclude:: ../../../code/python/assembler.py
        :language: python
        :start-after: lief-doc: nop-out-start
        :end-before: lief-doc: nop-out-end
        :dedent:

   .. tab:: :fa:`regular fa-file-code` C++

      .. literalinclude:: ../../../code/cpp/assembler.cpp
        :language: cpp
        :start-after: lief-doc: nop-out-start
        :end-before: lief-doc: nop-out-end
        :dedent:

   .. tab:: :fa:`brands fa-rust` Rust

      .. literalinclude:: ../../../code/rust/src/assembler.rs
        :language: rust
        :start-after: lief-doc: nop-out-start
        :end-before: lief-doc: nop-out-end
        :dedent:

.. note::

  The snippets above assume ``x86/x86-64``, where a ``nop`` is a single byte,
  so ``inst.size`` of them fill the slot exactly. On fixed-width instruction set such as
  ``AArch64`` every instruction is 4 bytes, so we would emit ``inst.size / 4`` instead.


In-Memory Assembler
*******************

In addition to patching binaries on disk or within standard file formats, the
assembly engine is also available for JIT compilation and in-memory operations.
This is exposed through the runtime API |lief-runtime-assemble|, as detailed in the
:ref:`Runtime Memory <runtime_memory>` documentation.

:fa:`brands fa-python` :doc:`Python API <python>`

:fa:`regular fa-file-code` :doc:`C++ API <cpp>`

:fa:`brands fa-rust` :doc:`Rust API <rust>`

.. include:: ../../_cross_api.rst
