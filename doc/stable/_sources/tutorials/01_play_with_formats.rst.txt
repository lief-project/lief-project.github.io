01 - Parse and manipulate formats
---------------------------------

The objective of this tutorial is to provide an overview of LIEF's API for
parsing and manipulating formats.

-----

ELF
~~~

We'll start with the ``ELF`` format. To create an :class:`.ELF.Binary` from a
file, simply pass its path to the |lief-abstract-parse| or |lief-elf-parse|
functions.

.. note::

  With the Python API, these functions exhibit the same behavior, but in C++,
  |lief-abstract-parse| will return a pointer to a
  |lief-abstract-binary| object, whereas |lief-elf-parse|
  will return a |lief-elf-binary| object.

.. literalinclude:: ../../code/python/tuto_play_formats.py
  :language: python
  :prepend: import lief
  :start-after: lief-doc: elf-parse-start
  :end-before: lief-doc: elf-parse-end
  :dedent:

Once the ELF file has been parsed, we can access its :class:`~lief.ELF.Header`:

.. literalinclude:: ../../code/python/tuto_play_formats.py
  :language: python
  :start-after: lief-doc: elf-header-start
  :end-before: lief-doc: elf-header-end
  :dedent:

To change the entry point and the target architecture (:class:`~lief.ELF.ARCH`):

.. literalinclude:: ../../code/python/tuto_play_formats.py
  :language: python
  :start-after: lief-doc: elf-change-header-start
  :end-before: lief-doc: elf-change-header-end
  :dedent:

Then, write these changes to a new ELF binary:

.. literalinclude:: ../../code/python/tuto_play_formats.py
  :language: python
  :start-after: lief-doc: elf-write-start
  :end-before: lief-doc: elf-write-end
  :dedent:

We can also iterate over the :class:`~lief.ELF.Section` entries as follows:

.. literalinclude:: ../../code/python/tuto_play_formats.py
  :language: python
  :start-after: lief-doc: elf-sections-start
  :end-before: lief-doc: elf-sections-end
  :dedent:


To modify the content of the ``.text`` section:

.. literalinclude:: ../../code/python/tuto_play_formats.py
  :language: python
  :start-after: lief-doc: elf-text-start
  :end-before: lief-doc: elf-text-end
  :dedent:


PE
~~~

As with the ``ELF`` section, you can use the |lief-abstract-parse| or
|lief-pe-parse| functions to create a :class:`.PE.Binary`


.. literalinclude:: ../../code/python/tuto_play_formats.py
  :language: python
  :prepend: import lief
  :start-after: lief-doc: pe-parse-start
  :end-before: lief-doc: pe-parse-end
  :dedent:


To access the various PE headers (:class:`~lief.PE.DosHeader`,
:class:`~lief.PE.Header`, and :class:`~lief.PE.OptionalHeader`):

.. literalinclude:: ../../code/python/tuto_play_formats.py
  :language: python
  :start-after: lief-doc: pe-headers-start
  :end-before: lief-doc: pe-headers-end
  :dedent:

You can also access imported functions in two ways:

1. Using the *abstract* layer
2. Using the PE definition

.. literalinclude:: ../../code/python/tuto_play_formats.py
  :language: python
  :start-after: lief-doc: pe-imports-start
  :end-before: lief-doc: pe-imports-end
  :dedent:

For finer granularity regarding the location of imported functions in libraries,
or to access other fields of the PE imports, we can process the imports as
follows:

.. literalinclude:: ../../code/python/tuto_play_formats.py
  :language: python
  :start-after: lief-doc: pe-imports-detailed-start
  :end-before: lief-doc: pe-imports-detailed-end
  :dedent:

.. include:: ../_cross_api.rst
