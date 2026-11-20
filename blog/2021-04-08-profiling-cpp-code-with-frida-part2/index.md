---
title: "Profiling C++ code with Frida (2nd part)"
description: "A practical follow-up on profiling C++ with Frida, including static-library hooks and the limitations introduced by different C++ ABIs."
canonical_url: "https://lief.re/blog/2021-04-08-profiling-cpp-code-with-frida-part2/"
markdown_url: "https://lief.re/blog/2021-04-08-profiling-cpp-code-with-frida-part2/index.md"
authors: ["Romain Thomas"]
date_published: "2021-04-08T00:00:00Z"
date_modified: "2021-04-08T00:00:00Z"
language: "en-US"
section: "blog"
tags: ["Frida","C++","profiling","ABI","Windows"]
categories: []
---

# Profiling C++ code with Frida (2nd part)

> A practical follow-up on profiling C++ with Frida, including static-library hooks and the limitations introduced by different C++ ABIs.

**Tl;DR**

This blog post is not, strictly speaking, related to LIEF but it aims at completing
the previous blog about profiling code with Frida. In particular, it exposes the limits
of our approach regarding the Microsoft/Itanium ABI.

Long story short, the previous code **does not work** on Linux/OSX for virtual functions.


The previous blog post tried to show a use case of Frida to profile C++ functions.
In particular, it exposed what we called a *trick* to convert a C++ member function into a ``void*``:

```cpp
template<typename Func>
inline void* cast_func(Func f) {
  union {
    Func func;
    void* p;
  };
  func = f;
  return p;
}
```

First, and as noticed by Julien Jorge, writing a union's field and accessing another field of this union is
[undefined behavior](https://en.cppreference.com/w/cpp/language/union#Explanation):

> It's undefined behavior to read from the member of the union that wasn't most recently written.
> Many compilers implement, as a non-standard language extension, the ability to read inactive members of a union.

Thanks also to the feedback from Julien Jorge, there is another issue when converting a C++ member function
into a raw pointer.

Basically, a member function pointer is not the same kind of pointer as a regular C function.
While the regular size of a C function pointer is the same as ``sizeof(void*)``, the size of a
member function pointer is usually greater:

```cpp
struct Foo {
  void bar() {}
};

int main() {
  printf("sizeof(&Foo::bar): %d\n", sizeof(&Foo::bar));
  return 0;
}
```

```bash
$ clang++ sizeof_member.cpp -o sizof_member
$ ./sizeof_member
sizeof(&Foo::bar): 16
```

The layout of a member function pointer is ABI specific but according to LLVM's source code
we can distinguish two ABI that describe this layout:

1. [Itanium CXX ABI](https://itanium-cxx-abi.github.io/cxx-abi/) which is used on Linux, iOS, OSX, Android, ...
2. Microsoft

## Itanium ABI

For the Itanium CXX ABI and according to the official documentation, **non-virtual** functions have the following structure:

```cpp
struct {
  uintptr_t ptr;
  ptrdiff_t adj;
};
```

Where, ``ptr`` is the address of the function and ``adj`` is an offset applied on ``this`` in the case
of multi-inheritance.

So in our *bad-coded* casting function ``cast_func()``, it works as expected for non-virtual functions since we access
the first field ``ptr`` which is the function pointer.
We can observe these two fields with the following piece of code [^1]:

```cpp
template<typename Func>
void print(Func f) {
  union {
    Func fcn;
    struct {
      uintptr_t ptr;
      ptrdiff_t adj;
    };
  };
  fcn = f;
  printf("%016lx | %016lx\n", ptr, adj);
}
```

This outputs values such as:

```cpp
struct Foo {
  void bar() {}
};

int main() {
  print(&Foo::bar);
  return 0;
}
```

```
$ ./show_fields
00005568e19021e0 | 0000000000000000
```

If ``bar()`` were a **virtual function**, the meaning of the ``ptr`` field
would be different. Still according to the Itanium CXX ABI, the value of ``ptr`` in the case of
a virtual function is 1 plus the offset of the function within the v-table.
In particular, we can't access the address of the function without ``this`` since
the vtable is embedded in the layout of the object. [^2]


![Itanium CXX ABI](https://lief.re/blog/2021-04-08-profiling-cpp-code-with-frida-part2/cxxabi.png)

## Microsoft ABI

Regarding the Microsoft ABI, there is not as much documentation compared to the "Linux/OSX" ABI.
LLVM supports this ABI as described in [clang/lib/CodeGen/MicrosoftCXXABI.cpp](https://github.com/llvm/llvm-project/blob/a59665930b87d7510002dcf1f292b290673a47d3/clang/lib/CodeGen/MicrosoftCXXABI.cpp)
but I was still curious to know how (without LLVM) the layout of a function member pointer looks like.
One could look at ``c1xx.dll/c2.dll`` located in the Visual Studio directory but these libraries
are not straightforward to reverse.

Alternately, we can try to infer the layout from the assembly code output.
First of all, the result of ``sizeof()`` applied to a function member pointer is 16.
16 being twice a pointer's size on an 64-bits architecture,
we can start following the Itanium ABI and confirm or infirm our choices:

```cpp
struct FuncMemPtr {
  uintptr_t unknown1;
  uintptr_t unknown2;
};
```

Then we can *unpack* the fields of the function member pointer with the union trick:

```cpp
struct Base1 {
  virtual void f() { }
};

struct Base2 {
  virtual void g() {}
};

struct Derived2 : Base2, Base1 {
  virtual void f() {}
  virtual void g() {}
  virtual h() {}
};

template<typename Func>
void info(Func f) {
  union {
    Func fcn;
    struct {
      uintptr_t unknown1;
      uintptr_t unknown2;
    };
  };
  fcn = f;
}

int main() {
  info(&Derived2::h);
  info(&Derived2::f);
  return 0;
}
```

The layout of the non-virtual function ``Derived2::h()`` seems to follow the same layout as the Itanium ABI
where we find the function pointer in the first field.

![Non virtual function layout](https://lief.re/blog/2021-04-08-profiling-cpp-code-with-frida-part2/msvc_non_virtual.png)

For the **virtual function** ``Derived2::f``,
we can notice a first memory write that fills the first field with a pointer to a thunk [^3] function
while the second field contains a constant which matches the value of *this adjustor*.
For the second field (*this adjustor*), we can switch from ``&Derived2::f`` to ``&Derived2::g``
to confirm that it changes accordingly to the output of ``/d1reportAllClassLayout``

![Virtual function layout](https://lief.re/blog/2021-04-08-profiling-cpp-code-with-frida-part2/msvc_virtual.png)

This leads to the following guessing:

```cpp
struct MsvcCXXFuncMember {
  uintptr_t fnc_ptr; // That can be a thunk for virtual function
  int adjustor; // int because of mov DWORD and not mov QWORD in this assembly output
};
```

These two fields follow the [LLVM implementation](https://github.com/llvm/llvm-project/blob/4708a05da03038271a1a2c1cbdfe78aebfaa7afc/clang/lib/AST/MicrosoftCXXABI.cpp#L223-L234):

```cpp
struct {
  // A pointer to the member function to call.  If the member function is
  // virtual, this will be a thunk that forwards to the appropriate vftable
  // slot.
  void *FunctionPointerOrVirtualThunk;

  // An offset to add to the address of the vbtable pointer after
  // (possibly) selecting the virtual base but before resolving and calling
  // the function.
  // Only needed if the class has any virtual bases or bases at a non-zero
  // offset.
  int NonVirtualBaseAdjustment;

  // The offset of the vb-table pointer within the object. Only needed for
  // incomplete types.
  int VBPtrOffset;

  // An offset within the vb-table that selects the virtual base containing
  // the member.  Loading from this offset produces a new offset that is
  // added to the address of the vb-table pointer to produce the base.
  int VirtualBaseAdjustmentOffset;
};
```

From LLVM, we also learn that the full layout can contain up to *four fields*. We can trigger the third field with
the following change:

```diff {style=pastie}
@@ -11,3 +11,3 @@
-struct Derived2 : Base2, Base1 {
+struct Derived2 : Base2, virtual Base1 {
   virtual void f() {}
@@ -32 +32,2 @@
 }
```

![VBPtrOffset](https://lief.re/blog/2021-04-08-profiling-cpp-code-with-frida-part2/msvc_third_field.png)

The fourth field is a bit more tricky to trigger and the following code comes from the [LLVM test suite](https://github.com/llvm/llvm-project/blob/4fffbc150cca1638051b8ad2a20f4b8240df0869/clang/test/CodeGenCXX/microsoft-abi-member-pointers.cpp)
[^4]

```cpp
struct B1 {
  void foo();
  int b;
};
struct B2 {
  int b2;
  int v;
  void foo();
};

struct UnspecWithVBPtr;
int UnspecWithVBPtr::*forceUnspecWithVBPtr;
struct UnspecWithVBPtr : B1, virtual B2 {
  int u;
  void foo();
};
```

![VBPtrOffset](https://lief.re/blog/2021-04-08-profiling-cpp-code-with-frida-part2/msvc_fourth_field_e.png)

We can notice that the result of ``sizeof()`` applied to ``UnspecWithVBPtr::foo`` is **24**:
``sizeof(uintptr_t) + 3 * sizeof(int) + padding``


## Conclusion

The profiler described in the first blog post works as expected for **non-virtual** but
does not work with virtual functions that follow the Itanium ABI. To work with virtual functions, we would need
to pass an extra parameter to the object that implements the virtual functions. By assuming that the vtable is
placed at the beginning of the object's layout, we can support such functions with the following modifications:

```diff {style=pastie}
diff --git a/main.cpp b/main.cpp
index d30a0c1..65d18eb 100644
--- a/main.cpp
+++ b/main.cpp

+struct Foo {
+  virtual void bar() {
+    std::cout << "In bar" << std::endl;
+  }
+  uint8_t x = 1;
+};
+

@@ -88,9 +95,10 @@ struct Profiler {

-  void setup() {
-    PROFILE(LIEF::ELF::Parser::init);
-    PROFILE(LIEF::ELF::Parser::parse_segments<LIEF::ELF::ELF64>);
+  template<class T>
+  void setup(const T& obj) {
+    const uintptr_t vtable = *reinterpret_cast<const uintptr_t*>(&obj);
+    profile_func(&Foo::bar, "Foo:bar", vtable);
   }

@@ -98,8 +106,13 @@ struct Profiler {
   template<typename Func>
-  void profile_func(Func func, std::string name) {
+  void profile_func(Func func, std::string name, uintptr_t vtable = 0) {
     void* addr = cast_func(func);
+
+    if (vtable > 0) {
+      const uintptr_t voff = reinterpret_cast<uintptr_t>(addr) - 1;
+      addr = *reinterpret_cast<void**>(vtable + voff);
+    }
     funcs[reinterpret_cast<uintptr_t>(addr)] = std::move(name);
     gum_interceptor_begin_transaction (ctx_->interceptor);
     gum_interceptor_attach (ctx_->interceptor,
@@ -130,8 +143,9 @@ int main(int argc, const char** argv) {
     return 1;
   }

+  Foo f;
   Profiler& prof = Profiler::get();
-  prof.setup();
-  LIEF::ELF::Parser::parse(argv[1]);
+  prof.setup(f);
+  f.bar();
   return 0;
 }
```

The Microsoft C++ ABI is poorly documented but the LLVM project is a good reference for that.
One might also be interested in this presentation ([Bringing Clang and LLVM to Visual C++ users](https://llvm.org/devmtg/2013-11/slides/Kleckner-ClangVisualC++.pdf))
that outlines the challenges for LLVM developers to support this ABI.

## Acknowledgment

Thanks to Julien Jorge for proofreading this post and his valuable feedback.

[^1]: Which is still UB
[^2]: ARM is an exception. In the 32-bit ARM representation, the `this` adjustment stored in `adj` is left-shifted by one.
      > The low bit of `adj` indicates whether `ptr` is a function pointer (including null) or the offset of a v-table entry.
      > A virtual member function pointer sets `ptr` to the v-table entry offset as if by ``reinterpret_cast<fnptr_t>(uintfnptr_t(offset))``.
      > A null member function pointer sets `ptr` to a null function pointer and must ensure that the low bit of `adj` is clear;
      > the upper bits of `adj` remain unspecified.
[^3]: A thunk function is generated by the compiler as a *trampoline* to the right virtual function. This
      trampoline can also be used to fix ``this`` pointer with the given adjustor.
[^4]: The layout of this code goes beyond my understanding
