:fa:`solid fa-hand-holding-hand` Utilities
--------------------------------------------

Demangling
~~~~~~~~~~~

LIEF exposes a demangling API for the following formats:

.. tabs::

  .. tab:: :fa:`brands fa-windows` MSVC

    **Input**

    .. literalinclude:: ../../../code/python/utilities.py
      :language: python
      :start-after: lief-doc: demangle-msvc-start
      :end-before: lief-doc: demangle-msvc-end
      :dedent:

    **Result**

    .. code-block:: text

      void __cdecl h(int)

  .. tab:: :fa:`brands fa-rust` Rust

    **Input**

    .. literalinclude:: ../../../code/python/utilities.py
      :language: python
      :start-after: lief-doc: demangle-rust-start
      :end-before: lief-doc: demangle-rust-end
      :dedent:

    **Result**

    .. code-block:: text

      foo::example_function

  .. tab:: :fa:`regular fa-file-code` Itanium C++

    **Input**

    .. literalinclude:: ../../../code/python/utilities.py
      :language: python
      :start-after: lief-doc: demangle-itanium-start
      :end-before: lief-doc: demangle-itanium-end
      :dedent:

    **Result**

    .. code-block:: text

      typeinfo name for lld::SpecificAlloc<lld::coff::TpiSource>

  .. tab:: :fa:`brands fa-swift` Swift/Obj-C

    **Input**

    .. literalinclude:: ../../../code/python/utilities.py
      :language: python
      :start-after: lief-doc: demangle-swift-start
      :end-before: lief-doc: demangle-swift-end
      :dedent:

    **Result**

    .. code-block:: text

      type metadata for Foundation.Data._Representation


.. doxygenfunction:: LIEF::demangle

.. autofunction:: lief.demangle

:fa:`brands fa-rust` :rust:func:`lief::demangle`

Extended Version
~~~~~~~~~~~~~~~~

To check if the current build is an :ref:`extended <extended-intro>` version,
you can use:

.. doxygenfunction:: LIEF::is_extended

.. autodata:: lief._lief.__extended__

:rust:func:`lief::is_extended`

In C++, you can also check if ``LIEF_EXTENDED`` is defined:

.. code-block:: cpp

   #include <LIEF/config.hpp>

   #if defined(LIEF_EXTENDED)
   // Extended version
   #else
   // Regular version
   #endif

To get details about the version of the current extended build:

.. doxygenfunction:: LIEF::extended_version_info

Android Platform
~~~~~~~~~~~~~~~~~

.. autofunction:: lief.Android.code_name

.. autofunction:: lief.Android.version_string

.. autoclass:: lief.Android.ANDROID_VERSIONS
  :members:
  :inherited-members:
  :undoc-members:

.. doxygenfunction:: LIEF::Android::code_name

.. doxygenfunction:: LIEF::Android::version_string

.. doxygenenum:: LIEF::Android::ANDROID_VERSIONS

Python Leaks
~~~~~~~~~~~~~

.. autofunction:: lief.disable_leak_warning

Helpers
~~~~~~~

The ``lief.dump()`` utility can be used to pretty-print a buffer.

For example:

.. literalinclude:: ../../../code/python/utilities.py
  :language: python
  :start-after: lief-doc: dump-start
  :end-before: lief-doc: dump-end
  :dedent:

.. autofunction:: lief.dump

.. doxygenfunction:: LIEF::dump(const std::vector<uint8_t> &data, const std::string &title = "", const std::string &prefix = "", size_t limit = 0)

.. doxygenfunction:: LIEF::dump(const uint8_t *buffer, size_t size, const std::string &title = "", const std::string &prefix = "", size_t limit = 0)

.. doxygenfunction:: LIEF::dump(span<const uint8_t> data, const std::string &title = "", const std::string &prefix = "", size_t limit = 0)

- :fa:`brands fa-rust` :rust:func:`lief::dump`
- :fa:`brands fa-rust` :rust:func:`lief::dump_with_limit`

.. include:: ../../_cross_api.rst
