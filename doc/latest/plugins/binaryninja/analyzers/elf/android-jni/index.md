---
documentID: "35ca88fafa538d0586b9ca425fa8483fba5658293083920b4bcab7be43e166b2"
docname: "plugins/binaryninja/analyzers/elf/android-jni/index"
title: "Android JNI - ELF Analyzers - LIEF Documentation"
description: "Android JNI in ELF Analyzers. This analyzer improves support for JNI functions in Android native libraries. It works by providing a BinaryNinja type library…"
canonical: "https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/android-jni/index.html"
markdownURL: "https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/android-jni/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "9fe7885d5b3cb992c2084a0709a228be4d89149e22552bc1f28c979e12c3811a"
---

# [Android JNI](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/android-jni/index.html#android-jni>)

This analyzer improves support for JNI functions in Android native libraries. It works by providing a BinaryNinja type library `android-jni.bntl`, which is placed next to the plugin’s shared library:

```text
.
├── lief-analysis-plugin-linux-x86_64.so
├── lief-dwarf-plugin-linux-x86_64.so
└── typelib
    └── aarch64
        └── android-jni.bntl
```

This type library should be installed in one of the following locations:

- **Linux:** `~/.binaryninja/typelib/aarch64/android-jni.bntl`
- **Windows:** `C:\Users\romain\AppData\Roaming\Binary Ninja\typelib\aarch64\android-jni.bntl`
- **macOS:** `~/Library/Application Support/Binary Ninja/typelib/aarch64/android-jni.bntl`

After installation, select `Plugins > LIEF > Enhance Analysis`. The plugin will then import all types related to Android JNI.

In addition, it will automatically define the type for the `JNI_OnLoad` function:

uint64\_t JNI\_OnLoad(int64\_t\* arg1)00401270  uint64\_t x21 = \_ReadMSR(tpidr\_el0)00401284  int64\_t var\_48 = \*(x21 + 0x28)0040129c  int64\_t\* var\_2d80040129c  uint64\_t result0040129c  bool cond:10040129c  0040129c  if ((\*(\*arg1 + 0x30))(arg1, &amp;var\_2d8, 0x10004) == 0)004012a8      int64\_t\* x19\_1 = var\_2d8004012c0      void var\_e0004012c0      sub\_401138(&amp;data\_400b5c, &amp;var\_e0, 0x41)004012d4      void\* var\_90 = &amp;var\_e00040129c  else004012a0      result = 0xffffe0c0004012a0

jint JNI\_OnLoad(JavaVM\* vm, void\* reserved)00401270  uint64\_t x21 = \_ReadMSR(tpidr\_el0)00401284  int64\_t var\_48 = \*(x21 + 0x28)0040129c  JNIEnv\* env0040129c  int32\_t result0040129c  bool cond:10040129c  0040129c  if ((\*vm)-&gt;GetEnv(vm, &amp;env, 0x10004) == 0)004012a8      JNIEnv\* env\_1 = env004012c0      void var\_e0004012c0      sub\_401138(&amp;data\_400b5c, &amp;var\_e0, 0x41)004012d4      JNINativeMethod var\_900040129c  else004012a0      result = -0x1f40004012a0

Functions tagged [[1]](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/android-jni/index.html#f1>) with `"LIEF - Android JNI Function"` are also updated to expose the correct type in the first two arguments:

int64\_t Java\_com\_bytedance\_sdk\_component\_embedapplog\_PangleEncryptUtils\_ttEncrypt(int64\_t\* arg1,     int64\_t arg2, int64\_t arg3, int32\_t arg4)0000108c  uint64\_t x26 = \_ReadMSR(tpidr\_el0)00001090  int64\_t x8 = \*(x26 + 0x28)00001094  int64\_t result = 000001094  000010a8  if (arg3 != 0 &amp;&amp; arg4 s&gt;= 1)000010b0      int128\_t v0 = \*"UK\*@3oKpFlVVnads"000010d4      \_\_builtin\_strncpy(&amp;data\_9830, "UK\*@3oKpFlVVnadsTfdA", 0x14)000010d8      int32\_t x0\_1 = ss\_encrypted\_size(zx.q(arg4), v0)000010e4      int64\_t x0\_3 = malloc(zx.q(arg4))000010f0      int64\_t x0\_5 = malloc(sx.q(x0\_1))00001114      (\*(\*arg1 + 0x640))(arg1, arg3, 0, zx.q(arg4), x0\_3)  {"ed\_size"}00001114      00001138      if ((ss\_encrypt(x0\_3, zx.q(arg4), &amp;data\_9830, strlen(&amp;data\_9830), x0\_5) &amp; 0x80000000)00001138              != 0)00001190          result = 000001138      else00001154          result = (\*(\*arg1 + 0x580))(arg1, zx.q(x0\_1))00001170          (\*(\*arg1 + 0x680))(arg1, result, 0, zx.q(x0\_1), x0\_5)  {"ptUtils\_ttDecrypt"}00001170          00001174          if (x0\_3 != 0)0000117c              free(x0\_3)0000117c          00001180          if (x0\_5 != 0)00001188              free(x0\_5)00001188  000011a0  if (\*(x26 + 0x28) == x8)000011c0      return result000011c0  000011c4  \_\_stack\_chk\_fail()000011c4  noreturn

jbyteArray Java\_com\_bytedance\_sdk\_component\_embedapplog\_PangleEncryptUtils\_ttEncrypt(JNIEnv\* env,     jobject thiz, jbyteArray arg3, jsize arg4)0000108c  uint64\_t x26 = \_ReadMSR(tpidr\_el0)00001090  int64\_t x8 = \*(x26 + 0x28)00001094  jbyteArray result = nullptr00001094  000010a8  if (arg3 != 0 &amp;&amp; arg4 s&gt;= 1)000010b0      int128\_t v0 = \*"UK\*@3oKpFlVVnads"000010d4      \_\_builtin\_strncpy(&amp;data\_9830, "UK\*@3oKpFlVVnadsTfdA", 0x14)000010d8      jsize x0\_1 = ss\_encrypted\_size(zx.q(arg4), v0)000010e4      jbyte\* x0\_3 = malloc(zx.q(arg4))000010f0      jbyte\* x0\_5 = malloc(sx.q(x0\_1))00001114      (\*env)-&gt;GetByteArrayRegion(env, arg3, 0, arg4, x0\_3)00001114      00001138      if ((ss\_encrypt(x0\_3, zx.q(arg4), &amp;data\_9830, strlen(&amp;data\_9830), x0\_5) &amp; 0x80000000)00001138              != 0)00001190          result = nullptr00001138      else00001154          result = (\*env)-&gt;NewByteArray(env, x0\_1)00001170          (\*env)-&gt;SetByteArrayRegion(env, result, 0, x0\_1, x0\_5)00001170          00001174          if (x0\_3 != 0)0000117c              free(x0\_3)0000117c          00001180          if (x0\_5 != 0)00001188              free(x0\_5)00001188  000011a0  if (\*(x26 + 0x28) == x8)000011c0      return result000011c0  000011c4  \_\_stack\_chk\_fail()000011c4  noreturn

[[1](<https://lief.re/doc/latest/plugins/binaryninja/analyzers/elf/android-jni/index.html#id1>)]

On a given function, right-click: `Tags and Bookmarks > Add Tag ... > LIEF - Android JNI Function`
