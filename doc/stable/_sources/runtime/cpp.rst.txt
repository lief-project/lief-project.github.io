:fa:`regular fa-file-code` C++
--------------------------------

:fa:`solid fa-screwdriver-wrench` Utilities
*******************************************

.. doxygenfunction:: LIEF::runtime::is_enabled()

.. doxygenfunction:: LIEF::runtime::platform()

.. doxygenfunction:: LIEF::runtime::arch()

.. doxygenfunction:: LIEF::runtime::modules()

.. doxygenfunction:: LIEF::runtime::assemble(uint64_t, const std::string&, assembly::AssemblerConfig&)

.. doxygenfunction:: LIEF::runtime::disassemble(uintptr_t)

----------

:fa:`solid fa-gears` Process
****************************

.. doxygenclass:: LIEF::runtime::Process

----------

:fa:`solid fa-server` Host
**************************

.. doxygenclass:: LIEF::runtime::Host

----------

:fa:`solid fa-cubes` Module
***************************

.. doxygenclass:: LIEF::runtime::Module

.. doxygenfunction:: LIEF::runtime::module_from_name(const std::string &)

.. doxygenfunction:: LIEF::runtime::module_from_path(const std::string &)

.. doxygenfunction:: LIEF::runtime::module_from_addr(uintptr_t)

----------

:fa:`solid fa-memory` Memory
****************************

.. doxygenclass:: LIEF::runtime::Memory

----------

:fa:`brands fa-linux` Linux
***************************


:fa:`solid fa-cubes` Module
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. doxygenclass:: LIEF::runtime::Linux::Module

.. doxygenfunction:: LIEF::runtime::Linux::dlopen(const std::string &)


----------

:fa:`solid fa-server` Host
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. doxygenclass:: LIEF::runtime::Linux::Host


----------

:fa:`solid fa-gears` Process
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. doxygenclass:: LIEF::runtime::Linux::Process


----------

:fa:`brands fa-android` Android
*******************************


:fa:`solid fa-cubes` Module
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. doxygenclass:: LIEF::runtime::android::Module

.. doxygenfunction:: LIEF::runtime::android::dlopen(const std::string &)


----------

:fa:`solid fa-server` Host
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. doxygenclass:: LIEF::runtime::android::Host


----------

:fa:`solid fa-gears` Process
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. doxygenclass:: LIEF::runtime::android::Process


:fa:`solid fa-tag` Property
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. doxygenclass:: LIEF::runtime::android::Property


----------

:fa:`brands fa-apple` OSX
*************************


:fa:`solid fa-cubes` Module
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. doxygenclass:: LIEF::runtime::osx::Module

.. doxygenfunction:: LIEF::runtime::osx::dlopen(const std::string &)

:fa:`solid fa-server` Host
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. doxygenclass:: LIEF::runtime::osx::Host

:fa:`solid fa-gears` Process
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. doxygenclass:: LIEF::runtime::osx::Process


----------

:fa:`brands fa-windows` Windows
*******************************

:fa:`solid fa-cubes` Module
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. doxygenclass:: LIEF::runtime::windows::Module

.. doxygenfunction:: LIEF::runtime::windows::dlopen(const std::string &)

.. doxygenfunction:: LIEF::runtime::windows::find_module(const std::string &)

:fa:`solid fa-server` Host
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. doxygenclass:: LIEF::runtime::windows::Host

:fa:`solid fa-syringe` Injector
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. doxygenstruct:: LIEF::runtime::windows::injection_context_t

.. doxygenfunction:: LIEF::runtime::windows::inject_spawn(const injection_context_t &)

:fa:`solid fa-gears` Process
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. doxygenclass:: LIEF::runtime::windows::Process

:fa:`solid fa-box` PEB
~~~~~~~~~~~~~~~~~~~~~~~

.. doxygenclass:: LIEF::runtime::windows::PEB

:fa:`solid fa-table-list` LdrDataTableEntry
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. doxygenclass:: LIEF::runtime::windows::LdrDataTableEntry

----------

:fa:`solid fa-microchip` ARCH
*****************************

.. doxygenenum:: LIEF::runtime::ARCH

:fa:`solid fa-desktop` PLATFORMS
********************************

.. doxygenenum:: LIEF::runtime::PLATFORMS
