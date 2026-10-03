---
documentID: "01cf8dd1873b0e85aef074f4e924dd6358b738d556322084c63dfea1123eb354"
docname: "plugins/ghidra/dwarf/index"
title: "Ghidra - DWARF Plugin - LIEF Documentation"
description: "Ghidra - DWARF Plugin. This functionality exports Ghidra’s program information into a DWARF file. This exported information includes function names, types…"
canonical: "https://lief.re/doc/latest/plugins/ghidra/dwarf/index.html"
markdownURL: "https://lief.re/doc/latest/plugins/ghidra/dwarf/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "daf42e004e40e15856e6516aa5aa2cb831cad63e81ed563c7547707bc5acf99b"
---

# [Ghidra - DWARF Plugin](<https://lief.re/doc/latest/plugins/ghidra/dwarf/index.html#ghidra-dwarf-plugin>)

## [Export as DWARF](<https://lief.re/doc/latest/plugins/ghidra/dwarf/index.html#export-as-dwarf>)

This functionality exports Ghidra’s program information into a DWARF file. This exported information includes function names, types, stack variables, etc.

You can use this extension in different ways as documented below:

### [Project Manager](<https://lief.re/doc/latest/plugins/ghidra/dwarf/index.html#project-manager>)

This extension provides a DWARF exporter that can be used by right-clicking on the binary to export, then: `Export > Format > DWARF`:

![Ghidra DWARF exporter](https://lief.re/doc/latest/_static/ghidra/project-dwarf-export.webp)

### [CodeBrowser](<https://lief.re/doc/latest/plugins/ghidra/dwarf/index.html#codebrowser>)

From the `CodeBrowser` tool, you can left-click on the LIEF menu and select `Export as DWARF`:

![Ghidra DWARF exporter](https://lief.re/doc/latest/_static/ghidra/codebrowser-export-dwarf.webp)

### [Scripts](<https://lief.re/doc/latest/plugins/ghidra/dwarf/index.html#scripts>)

You can also use the Java API from a (headless) script to export a given Ghidra program:

```java
import lief.ghidra.core.dwarf.export.Manager;
import lief.ghidra.core.NativeBridge;

public class LiefDwarfExportScript extends GhidraScript {
  @Override
  protected void run() throws Exception {
    NativeBridge.init();
    Manager manager = new Manager(currentProgram);
    File output = new File("/home/romain/output.dwarf");
    manager.export(output);
  }
}
```

### [Support &amp; Limitations](<https://lief.re/doc/latest/plugins/ghidra/dwarf/index.html#support-limitations>)

This extension tries to convert as much as possible of Ghidra’s internal binary representation into DWARF structures, but this support is not exhaustive; here is an overview of what is and is not exported.

**ghidra.program.model.listing.Program**

- Function
- Data Variables
- Types
- Comments

**ghidra.program.model.listing.Function**

- Name
- Address range
- Parameters
- Type of parameters
- Return type
- Stack variables
- Types of stack variables
- Comments
- CodeUnits

**ghidra.program.model.listing.Data**

- Name
- Type
- Address
- Comments

**ghidra.program.model.data.DataType**

- `ghidra.program.model.data.VoidDataType`
- `ghidra.program.model.data.AbstractIntegerDataType`
- `ghidra.program.model.data.Array`
- `ghidra.program.model.data.TypeDef`
- `ghidra.program.model.data.Composite`
- `ghidra.program.model.data.Enum`
- `ghidra.program.model.data.FunctionDefinition`
- `ghidra.program.model.data.Pointer`

Any types not mentioned here are not supported.

### [References](<https://lief.re/doc/latest/plugins/ghidra/dwarf/index.html#references>)

[https://github.com/NationalSecurityAgency/ghidra/issues/2687](<https://github.com/NationalSecurityAgency/ghidra/issues/2687>)
