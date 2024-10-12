:fa:`brands fa-python` Python
------------------------------


.. admonition:: Python ``void*``
  :class: warning

  The Python bindings manage opaque ``void*`` pointers as
  `Capsules <https://docs.python.org/3/c-api/capsule.html#capsules>`_.
  Given a Capsule, there is no easy way to convert it into a raw address and vice
  versa.
  To address this limitation, LIEF exposes :py:func:`lief.to_int` and :py:func:`lief.to_ptr`
  to convert back and forth between raw addresses and pointers.

:fa:`solid fa-screwdriver-wrench` Utilities
*******************************************

.. autofunction:: lief.to_int

.. autofunction:: lief.to_ptr

.. autoattribute:: lief.runtime.enabled

.. autoattribute:: lief.runtime.platform

.. autoattribute:: lief.runtime.arch

.. autofunction:: lief.runtime.modules

.. autofunction:: lief.runtime.assemble

.. autofunction:: lief.runtime.disassemble

----------

:fa:`solid fa-server` Host
**************************

.. autoclass:: lief.runtime.Host

----------

:fa:`solid fa-gears` Process
****************************

.. autoclass:: lief.runtime.Process

----------

:fa:`solid fa-cubes` Module
***************************

.. autoclass:: lief.runtime.Module

.. autofunction:: lief.runtime.module_from_name

.. autofunction:: lief.runtime.module_from_path

.. autofunction:: lief.runtime.module_from_addr

----------

:fa:`solid fa-memory` Memory
****************************

.. autoclass:: lief.runtime.Memory

----------

:fa:`brands fa-linux` Linux
***************************


:fa:`solid fa-cubes` Module
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: lief.runtime.linux.Module

.. autofunction:: lief.runtime.linux.dlopen

:fa:`solid fa-server` Host
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: lief.runtime.linux.Host

:fa:`solid fa-gears` Process
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: lief.runtime.linux.Process


----------

:fa:`brands fa-android` Android
*******************************


:fa:`solid fa-cubes` Module
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: lief.runtime.android.Module

.. autofunction:: lief.runtime.android.dlopen

:fa:`solid fa-server` Host
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: lief.runtime.android.Host

:fa:`solid fa-gears` Process
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: lief.runtime.android.Process

:fa:`solid fa-tag` Property
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: lief.runtime.android.Property

----------


:fa:`brands fa-apple` OSX
*************************


:fa:`solid fa-cubes` Module
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: lief.runtime.osx.Module

:fa:`solid fa-server` Host
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: lief.runtime.osx.Host

:fa:`solid fa-gears` Process
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: lief.runtime.osx.Process

----------

:fa:`brands fa-windows` Windows
*******************************


:fa:`solid fa-cubes` Module
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: lief.runtime.windows.Module

.. autofunction:: lief.runtime.windows.dlopen

.. autofunction:: lief.runtime.windows.find_module

:fa:`solid fa-server` Host
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: lief.runtime.windows.Host

:fa:`solid fa-syringe` Injector
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: lief.runtime.windows.injection_context_t

.. autofunction:: lief.runtime.windows.inject_spawn

:fa:`solid fa-gears` Process
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: lief.runtime.windows.Process

:fa:`solid fa-box` PEB
~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: lief.runtime.windows.PEB

:fa:`solid fa-table-list` LdrDataTableEntry
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: lief.runtime.windows.LdrDataTableEntry

----------

:fa:`solid fa-microchip` ARCH
*****************************

.. autoclass:: lief.runtime.ARCH

:fa:`solid fa-desktop` PLATFORMS
********************************

.. autoclass:: lief.runtime.PLATFORMS
