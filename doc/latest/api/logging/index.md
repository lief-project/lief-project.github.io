---
documentID: "f650521a704e8a834c98e634f3d3b98668d79902fe83f626ec34ecff083d19dd"
docname: "api/logging/index"
title: "Logging - LIEF Documentation"
description: "This section details the API for interacting with LIEF’s logging engine."
canonical: "https://lief.re/doc/latest/api/logging/index.html"
markdownURL: "https://lief.re/doc/latest/api/logging/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "5a56f6df33e0d2db8e7f1f1ea3f09614cd1ded39fb2590e66370797b07b3c229"
---

# [Logging](<https://lief.re/doc/latest/api/logging/index.html#logging>)

This section details the API for interacting with LIEF’s logging engine.

LIEF uses [spdlog](<https://github.com/gabime/spdlog>) for its logging mechanism, and this API provides an abstraction over that implementation.

## [API](<https://lief.re/doc/latest/api/logging/index.html#api>)

### [C++](<https://lief.re/doc/latest/api/logging/index.html#c>)

#### [` LIEF::logging::disable `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging7disableEv>)

void LIEF::logging::disable()

Globally disable the logging module.

#### [` LIEF::logging::enable `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6enableEv>)

void LIEF::logging::enable()

Globally enable the logging module.

#### [` LIEF::logging::set_level `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging9set_levelE5Level>)

void LIEF::logging::set\_level([Level](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5LevelE> "LIEF::logging::Level") level)

Change the logging level (**hierarchical**).

#### [` LIEF::logging::set_path `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging8set_pathERKNSt6stringE>)

void LIEF::logging::set\_path(const std::string &amp;path)

Change the logger to a file-based logging and set its path.

#### [` ArgsLIEF::logging::log `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4IDpEN4LIEF7logging3logEv5LevelRKNSt6stringEDpRK4Args>)

template&lt;typename ...Args&gt;  
void LIEF::logging::log([Level](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5LevelE> "LIEF::logging::Level") level, const std::string &amp;fmt, const [Args](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4IDpEN4LIEF7logging3logEv5LevelRKNSt6stringEDpRK4Args> "LIEF::logging::log::Args")&amp;... args)

#### [` LIEF::logging::log `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging3logE5LevelRKNSt6stringERKNSt6vectorINSt6stringEEE>)

void LIEF::logging::log([Level](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5LevelE> "LIEF::logging::Level") level, const std::string &amp;fmt, const std::vector&lt;std::string&gt; &amp;args)

#### [` LIEF::logging::log `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging3logE5LevelRKNSt6stringE>)

void LIEF::logging::log([Level](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5LevelE> "LIEF::logging::Level") level, const std::string &amp;msg)

Log a message with the LIEF’s logger.

#### [` LIEF::logging::reset `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5resetEv>)

void LIEF::logging::reset()

#### [` LIEF::logging::Level `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5LevelE>)

enum class LIEF::logging::Level : uint32\_t

**Hierarchical** logging level

From a given level set, all levels below this level are enabled

For example, if [Level::Info](<https://lief.re/doc/latest/api/logging/index.html#namespaceLIEF_1_1logging_1a369a850c6e516441003d6feb1d10ec3ca4059b0251f66a18cb56f544728796875>) is enabled then [Level::Warn](<https://lief.re/doc/latest/api/logging/index.html#namespaceLIEF_1_1logging_1a369a850c6e516441003d6feb1d10ec3ca56525ae64d370c0b448ac0d60710ef17>), [Level::Err](<https://lief.re/doc/latest/api/logging/index.html#namespaceLIEF_1_1logging_1a369a850c6e516441003d6feb1d10ec3cab47f6a6092c5d7e4bffec12dff309c3b>) are also enabled

*Values:*

##### [` Off `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5Level3OffE>)

enumerator Off = 0

##### [` Trace `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5Level5TraceE>)

enumerator Trace

##### [` Debug `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5Level5DebugE>)

enumerator Debug

##### [` Info `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5Level4InfoE>)

enumerator Info

##### [` Warn `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5Level4WarnE>)

enumerator Warn

##### [` Err `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5Level3ErrE>)

enumerator Err

##### [` Critical `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5Level8CriticalE>)

enumerator Critical

#### [` Scoped `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6ScopedE>)

class Scoped

Public Functions

##### [` Scoped `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6Scoped6ScopedERK6Scoped>)

Scoped(const [Scoped](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6Scoped6ScopedERK6Scoped> "LIEF::logging::Scoped::Scoped")&amp;) = delete

##### [` operator= `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6ScopedaSERK6Scoped>)

[Scoped](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6ScopedE> "LIEF::logging::Scoped") &amp;operator=(const [Scoped](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6ScopedE> "LIEF::logging::Scoped")&amp;) = delete

##### [` Scoped `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6Scoped6ScopedERR6Scoped>)

Scoped([Scoped](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6Scoped6ScopedERR6Scoped> "LIEF::logging::Scoped::Scoped")&amp;&amp;) = delete

##### [` operator= `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6ScopedaSERR6Scoped>)

[Scoped](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6ScopedE> "LIEF::logging::Scoped") &amp;operator=([Scoped](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6ScopedE> "LIEF::logging::Scoped")&amp;&amp;) = delete

##### [` Scoped `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6Scoped6ScopedE5Level>)

inline explicit Scoped([Level](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5LevelE> "LIEF::logging::Level") level)

##### [` Scoped `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6Scoped6ScopedE5LevelNSt6stringE>)

inline explicit Scoped([Level](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5LevelE> "LIEF::logging::Level") level, std::string name)

##### [` set_level `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4NK4LIEF7logging6Scoped9set_levelE5Level>)

inline const [Scoped](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6ScopedE> "LIEF::logging::Scoped") &amp;set\_level([Level](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging5LevelE> "LIEF::logging::Level") lvl) const

##### [` reset `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6Scoped5resetEv>)

inline void reset()

##### [` ~Scoped `](<https://lief.re/doc/latest/api/logging/index.html#_CPPv4N4LIEF7logging6ScopedD0Ev>)

inline ~Scoped()

## [Example](<https://lief.re/doc/latest/api/logging/index.html#example>)

```cpp
// Set global level to Err
LIEF::logging::set_level(LIEF::logging::Level::Err);

{
  // Temporarily set global level to Debug (RAII)
  LIEF::logging::Scoped _(LIEF::logging::Level::Debug);
  LIEF::logging::log(LIEF::logging::Level::Debug, "This is a debug message");
}
```

### [Python](<https://lief.re/doc/latest/api/logging/index.html#python>)

#### [` lief.logging.set_level `](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.set_level>)

lief.logging.set\_level(*level: [lief.logging.Level](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.Level> "lief.logging.Level")*) → None

Change logging level

#### [` lief.logging.enable `](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.enable>)

lief.logging.enable() → None

Enable the logger globally

#### [` lief.logging.disable `](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.disable>)

lief.logging.disable() → None

Disable the logger globally

#### [` lief.logging.set_path `](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.set_path>)

lief.logging.set\_path(*path: str | os.PathLike*) → None

Change the logger as a file-base logging and set its path

#### [` lief.logging.log `](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.log>)

lief.logging.log(*level: [lief.logging.Level](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.Level> "lief.logging.Level")*, *msg: str*) → None

Log a message with the LIEF’s logger

#### [` lief.logging.level_scopelief.logging.level_scope `](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.level_scope>)

lief.logging.level\_scope(*name: str*, *lvl: [Level](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.Level> "lief.logging.Level")*) → [Scoped](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.Scoped> "lief.logging.Scoped")

**lief.logging.level\_scope(*name: str*, *lvl: [Level](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.Level> "lief.logging.Level")*) → [Scoped](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.Scoped> "lief.logging.Scoped")**

#### [` lief.logging.Scoped `](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.Scoped>)

class lief.logging.Scoped

Bases: `object`

#### [` lief.logging.Level `](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.Level>)

class lief.logging.Level(*\*values*)

Bases: `Enum`

##### [` Critical `](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.Level.Critical>)

Critical = 6

##### [` Debug `](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.Level.Debug>)

Debug = 2

##### [` Err `](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.Level.Err>)

Err = 5

##### [` Info `](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.Level.Info>)

Info = 3

##### [` Off `](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.Level.Off>)

Off = 0

##### [` Trace `](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.Level.Trace>)

Trace = 1

##### [` Warn `](<https://lief.re/doc/latest/api/logging/index.html#lief.logging.Level.Warn>)

Warn = 4

## [Example](<https://lief.re/doc/latest/api/logging/index.html#id1>)

```python
# Set global level to Err
lief.logging.set_level(lief.logging.Level.Err)

# Temporarily set global level to Debug
with lief.logging.level_scope(lief.logging.Level.Debug):
    lief.logging.log(lief.logging.Level.Debug, "This is a debug message")
```

### [Rust](<https://lief.re/doc/latest/api/logging/index.html#rust>)

- [`lief::logging::disable`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/logging/fn.disable.html>)
- [`lief::logging::enable`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/logging/fn.enable.html>)
- [`lief::logging::set_level`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/logging/fn.set_level.html>)
- [`lief::logging::set_path`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/logging/fn.set_path.html>)
- [`lief::logging::log`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/logging/fn.log.html>)
- [`lief::logging::reset`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/logging/fn.reset.html>)
- [`lief::logging::Level`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/logging/enum.Level.html>)
- [`lief::logging::Scoped`](<https://lief-rs.s3.fr-par.scw.cloud/doc/latest/lief/logging/struct.Scoped.html>)

## [Example](<https://lief.re/doc/latest/api/logging/index.html#id2>)

```rust
// Set global level to Err
lief::logging::set_level(lief::logging::Level::Err);

{
    // Temporarily set global level to Debug (RAII)
    let _scoped = lief::logging::Scoped::new(lief::logging::Level::Debug);
    lief::logging::log(lief::logging::Level::Debug, "This is a debug message");
}
```
