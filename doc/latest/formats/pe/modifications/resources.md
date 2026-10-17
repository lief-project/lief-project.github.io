---
documentID: "a0971aaf5247b06ebf642a5185d5b0355760c4355c113f5f0215ec0f42e3d7f7"
docname: "formats/pe/modifications/resources"
title: "Resources Modification - PE - LIEF Documentation"
description: "Resources Modification in PE. LIEF allows you to modify (or create) PE resources at different levels:"
canonical: "https://lief.re/doc/latest/formats/pe/modifications/resources.html"
markdownURL: "https://lief.re/doc/latest/formats/pe/modifications/resources.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "88c716cf91ee72635e23e012c2368905b76b463ad33d35818033c9a7010384be"
---

# [Resources Modification](<https://lief.re/doc/latest/formats/pe/modifications/resources.html#resources-modification>)

[![PE Resources Overview](https://lief.re/doc/latest/_images/overview2.webp)](<https://lief.re/doc/latest/_images/overview2.webp>) 

LIEF allows you to modify (or create) PE resources at different levels:

- Directly on the binary tree ( `lief.PE.ResourceNode` ( [`lief::pe::resources::Node`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/resources/enum.Node.html>) ;  [`lief.PE.ResourceNode`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode>) ;  [`LIEF::PE::ResourceNode`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE12ResourceNodeE>) ))
- Using the  `lief.PE.ResourcesManager` ( [`lief::pe::resources::Manager`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/resources/struct.Manager.html>) ;  [`lief.PE.ResourcesManager`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager>) ;  [`LIEF::PE::ResourcesManager`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE16ResourcesManagerE>) ).

## [Binary Tree Modifications](<https://lief.re/doc/latest/formats/pe/modifications/resources.html#binary-tree-modifications>)

The resource root node can be accessed using the  `lief.PE.Binary.resources()` ( [`lief::pe::Binary::resources`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.resources>) ;  [`lief.PE.Binary.resources`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.resources>) ;  [`LIEF::PE::Binary::resources()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Binary9resourcesEv>) ) function:

**Python**

```python
pe: lief.PE.Binary
rsrc = pe.resources

print(rsrc)
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> pe;

LIEF::PE::ResourceNode* rsrc = pe->resources();

std::cout << *rsrc << '\n';
```

**Rust**

```rust
let pe: &lief::pe::Binary = some_pe;

let rsrc = pe.resources().unwrap();

println!("{}", &rsrc as &dyn NodeBase);
```

From this  `lief.PE.ResourceNode` ( [`lief::pe::resources::Node`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/resources/enum.Node.html>) ;  [`lief.PE.ResourceNode`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode>) ;  [`LIEF::PE::ResourceNode`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE12ResourceNodeE>) ) instance, you can use the  `lief.PE.ResourceNode.add_child()` ( [`lief::pe::resources::NodeBase::add_child`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/resources/trait.NodeBase.html#method.add_child>) ;  [`lief.PE.ResourceNode.add_child()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode.add_child>) ;  [`LIEF::PE::ResourceNode::add_child()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE12ResourceNode9add_childENSt10unique_ptrI12ResourceNodeEE>) ) or  `lief.PE.ResourceNode.delete_child()` ( [`lief::pe::resources::NodeBase::delete_child`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/resources/trait.NodeBase.html#method.delete_child>) ;  [`lief.PE.ResourceNode.delete_child()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourceNode.delete_child>) ;  [`LIEF::PE::ResourceNode::delete_child()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE12ResourceNode12delete_childE8uint32_t>) ) functions to add or delete nodes:

**Python**

```python
pe: lief.PE.Binary

rsrc = pe.resources
assert isinstance(rsrc, lief.PE.ResourceNode)

dir_node = lief.PE.ResourceDirectory(100)
data_node = lief.PE.ResourceData([1, 2, 3])

rsrc.add_child(dir_node).add_child(data_node)
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> pe;

LIEF::PE::ResourceNode* root = pe->resources();

LIEF::PE::ResourceDirectory dir_node(/*id=*/100);
LIEF::PE::ResourceData data_node(std::vector<uint8_t>{1, 2, 3});

(*root).add_child(dir_node).add_child(data_node);

pe->write("new.exe");
```

**Rust**

```rust
let pe: &mut lief::pe::Binary = some_pe;

let mut root = pe.resources().unwrap();

let mut dir_node = lief::pe::resources::Directory::with_id(100);
let data_node = lief::pe::resources::Data::with_buffer(&[1, 2, 3]);

dir_node.add_child(&Node::Data(data_node));
root.add_child(&Node::Directory(dir_node));

pe.write("new.exe");
```

This low-level API can be used to modify the tree or change the data of a specific node.

> **Pretty Printing**
> 
> You can also *print* a node to get a formatted representation of the resource tree:
> 
> ```python
> pe: lief.PE.Binary
> 
> tree = pe.resources
> print(tree)
> ```
> 
> ```text
> ├── Directory ID: 0000 (0x0000)
> │  ├── Directory ID: 0016 (0x0010) type: VERSION
> │  │  └── Directory ID: 0001 (0x0001)
> │  │      └── Data ID: 0000 (0x0000) Lang: 0x00 / Sublang: 0x00 length=772 (0x000304), offset: 0x1ca0
> │  │          ├── Hex: 04:03:34:00:00:00:56:00:53:00:5f:00:56:00:45:00:52:00:53:00
> │  │          └── Str: ..4...V.S._.V.E.R.S.
> │  └── Directory ID: 0024 (0x0018) type: MANIFEST
> │      └── Directory ID: 0001 (0x0001)
> │          └── Data ID: 1033 (0x0409) Lang: 0x09 / Sublang: 0x01 length=1900 (0x00076c), offset: 0x1fa4
> │              ├── Hex: 3c:61:73:73:65:6d:62:6c:79:20:78:6d:6c:6e:73:3d:22:75:72:6e
> │              └── Str: <assembly xmlns="urn
> ```

## [Resources Manager](<https://lief.re/doc/latest/formats/pe/modifications/resources.html#resources-manager>)

The  `lief.PE.ResourcesManager` ( [`lief::pe::resources::Manager`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/resources/struct.Manager.html>) ;  [`lief.PE.ResourcesManager`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.ResourcesManager>) ;  [`LIEF::PE::ResourcesManager`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE16ResourcesManagerE>) ) provides a higher-level API for the resource tree. It can also be used to set or change resource elements such as the manifest:

**Python**

```python
pe: lief.PE.Binary

manager = pe.resources_manager
assert isinstance(manager, lief.PE.ResourcesManager)

manager.manifest = """
<?xml version="1.0" standalone="yes"?>
<assembly xmlns="urn:schemas-microsoft-com:asm.v1"
          manifestVersion="1.0">
  <trustInfo>
    <security>
      <requestedPrivileges>
         <requestedExecutionLevel level='asInvoker' uiAccess='false'/>
      </requestedPrivileges>
    </security>
  </trustInfo>
</assembly>
"""

pe.write("new.exe")
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> pe;

result<ResourcesManager> manager = pe->resources_manager();
manager->manifest(R"manifest(
<?xml version="1.0" standalone="yes"?>
<assembly xmlns="urn:schemas-microsoft-com:asm.v1"
          manifestVersion="1.0">
  <trustInfo>
    <security>
      <requestedPrivileges>
         <requestedExecutionLevel level='asInvoker' uiAccess='false'/>
      </requestedPrivileges>
    </security>
  </trustInfo>
</assembly>
)manifest");

pe->write("new.exe");
```

**Rust**

```rust
let pe: &mut lief::pe::Binary = some_pe;

let mut manager = pe.resources_manager().unwrap();

manager.set_manifest(
    r#"
<?xml version="1.0" standalone="yes"?>
<assembly xmlns="urn:schemas-microsoft-com:asm.v1"
          manifestVersion="1.0">
  <trustInfo>
    <security>
      <requestedPrivileges>
         <requestedExecutionLevel level='asInvoker' uiAccess='false'/>
      </requestedPrivileges>
    </security>
  </trustInfo>
</assembly>
"#,
);

pe.write("new.exe");
```

## [Resource Tree Transfer between Binaries](<https://lief.re/doc/latest/formats/pe/modifications/resources.html#resource-tree-transfer-between-binaries>)

LIEF can transfer the resource tree from one binary to another. This operation can be performed using the  `lief.PE.Binary.set_resources()` ( [`lief::pe::Binary::set_resources`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/pe/struct.Binary.html#method.set_resources>) ;  [`lief.PE.Binary.set_resources()`](<https://lief.re/doc/latest/formats/pe/python.html#lief.PE.Binary.set_resources>) ;  [`LIEF::PE::Binary::set_resources()`](<https://lief.re/doc/latest/formats/pe/cpp.html#_CPPv4N4LIEF2PE6Binary13set_resourcesERK12ResourceNode>) ) function:

**Python**

```python
from_pe: lief.PE.Binary
to_pe: lief.PE.Binary

resources = from_pe.resources
assert isinstance(resources, lief.PE.ResourceNode)

to_pe.set_resources(resources)
to_pe.write("new.exe")
```

**C++**

```cpp
std::unique_ptr<LIEF::PE::Binary> from;
std::unique_ptr<LIEF::PE::Binary> to;

to->set_resources(*from->resources());

to->write("new.exe");
```

**Rust**

```rust
to_pe.set_resources(&from_pe.resources().unwrap());
```
