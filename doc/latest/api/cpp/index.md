---
documentID: "e1bf9750dd3d1fce566257b8893bb4844f89677b8d9bf4e0e73697b33407eb83"
docname: "api/cpp/index"
title: "C++ - LIEF Documentation"
description: "C++ reference documentation for LIEF, including APIs and examples for parsing, inspecting, modifying, and writing executable formats."
canonical: "https://lief.re/doc/latest/api/cpp/index.html"
markdownURL: "https://lief.re/doc/latest/api/cpp/index.md"
documentationVersion: "2.0.0"
documentationChannel: "latest"
language: "en"
contentHash: "23ea3e162d56acb62d24513e45e84d4e2853cd69db43c727d517d1aa01277c27"
---

# [C++](<https://lief.re/doc/latest/api/cpp/index.html#c>)

> **Note**
> 
> You can also find the Doxygen documentation [here](<https://lief.re/doc/latest/doxygen/>)

## [Iterators](<https://lief.re/doc/latest/api/cpp/index.html#iterators>)

### [` TUITERATOR_Tref_iterator `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE>)

template&lt;class T, typename U = typename decay\_t&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator::T")&gt;::value\_type, class ITERATOR\_T = typename decay\_t&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator::T")&gt;::iterator&gt;  
class ref\_iterator

Iterator which returns reference on container’s values.

Public Types

#### [` iterator_category `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator17iterator_categoryE>)

using iterator\_category = std::bidirectional\_iterator\_tag

#### [` value_type `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator10value_typeE>)

using value\_type = decay\_t&lt;[U](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator::U")&gt;

#### [` difference_type `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator15difference_typeE>)

using difference\_type = ptrdiff\_t

#### [` pointer `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator7pointerE>)

using pointer = std::remove\_pointer\_t&lt;[U](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator::U")&gt;\*

#### [` reference `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator9referenceE>)

using reference = std::remove\_pointer\_t&lt;[U](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator::U")&gt;&amp;

#### [` container_type `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator14container_typeE>)

using container\_type = [T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator::T")

#### [` DT_VAL `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator6DT_VALE>)

using DT\_VAL = [U](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator::U")

#### [` DT `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator2DTE>)

using DT = decay\_t&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator::T")&gt;

#### [` ref_t `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator5ref_tE>)

using ref\_t = typename [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")::[reference](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator9referenceE> "LIEF::ref_iterator::reference")

#### [` pointer_t `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator9pointer_tE>)

using pointer\_t = typename [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")::[pointer](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator7pointerE> "LIEF::ref_iterator::pointer")

Public Functions

#### [` ref_iterator `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator12ref_iteratorERR12ref_iterator>)

inline ref\_iterator([ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator12ref_iteratorERR12ref_iterator> "LIEF::ref_iterator::ref_iterator") &amp;&amp;other) noexcept

#### [` operator= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iteratoraSERR12ref_iterator>)

inline [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") &amp;operator=([ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") &amp;&amp;other) noexcept

#### [` T2U2IT2ref_iterator `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERK12ref_iteratorI2T22U23IT2E>)

template&lt;class T2, typename U2, class IT2, typename = std::enable\_if\_t&lt;!std::is\_same\_v&lt;[ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERK12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator"), [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERK12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator")&lt;[T2](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERK12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator::T2"), [U2](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERK12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator::U2"), [IT2](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERK12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator::IT2")&gt;&gt; &amp;&amp; std::is\_same\_v&lt;decay\_t&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator::T")&gt;, decay\_t&lt;[T2](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERK12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator::T2")&gt;&gt;&gt;&gt;  
inline ref\_iterator(const [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERK12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator")&lt;[T2](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERK12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator::T2"), [U2](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERK12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator::U2"), [IT2](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERK12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator::IT2")&gt; &amp;other)

#### [` T2U2IT2ref_iterator `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERR12ref_iteratorI2T22U23IT2E>)

template&lt;class T2, typename U2, class IT2, typename = std::enable\_if\_t&lt;!std::is\_same\_v&lt;[ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERR12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator"), [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERR12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator")&lt;[T2](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERR12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator::T2"), [U2](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERR12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator::U2"), [IT2](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERR12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator::IT2")&gt;&gt; &amp;&amp; std::is\_same\_v&lt;decay\_t&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator::T")&gt;, decay\_t&lt;[T2](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERR12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator::T2")&gt;&gt;&gt;&gt;  
inline ref\_iterator([ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERR12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator")&lt;[T2](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERR12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator::T2"), [U2](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERR12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator::U2"), [IT2](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0000EN4LIEF12ref_iterator12ref_iteratorERR12ref_iteratorI2T22U23IT2E> "LIEF::ref_iterator::ref_iterator::IT2")&gt; &amp;&amp;other) noexcept

#### [` ~ref_iterator `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iteratorD0Ev>)

~ref\_iterator() = default

#### [` ref_iterator `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator12ref_iteratorE1T>)

inline ref\_iterator([T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator::T") container)

#### [` ref_iterator `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator12ref_iteratorERK12ref_iterator>)

inline ref\_iterator(const [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator12ref_iteratorERK12ref_iterator> "LIEF::ref_iterator::ref_iterator") &amp;copy)

#### [` operator= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iteratoraSE12ref_iterator>)

inline [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") &amp;operator=([ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") other)

#### [` swap `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator4swapER12ref_iterator>)

inline void swap([ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") &amp;other) noexcept

#### [` operator++ `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iteratorppEv>)

inline [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") &amp;operator++()

#### [` operator++ `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iteratorppEi>)

inline [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") operator++(int)

#### [` operator-- `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iteratormmEv>)

inline [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") &amp;operator--()

#### [` operator-- `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iteratormmEi>)

inline [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") operator--(int)

#### [` operator+= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iteratorpLERKN12ref_iterator15difference_typeE>)

inline [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") &amp;operator+=(const typename [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")::[difference\_type](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator15difference_typeE> "LIEF::ref_iterator::difference_type") &amp;movement)

#### [` operator-= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iteratormIERKN12ref_iterator15difference_typeE>)

inline [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") &amp;operator-=(const typename [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")::[difference\_type](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator15difference_typeE> "LIEF::ref_iterator::difference_type") &amp;movement)

#### [` operator[] `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iteratorixE6size_t>)

inline std::enable\_if\_t&lt;!std::is\_const\_v&lt;[ref\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator5ref_tE> "LIEF::ref_iterator::ref_t")&gt;, remove\_const\_t&lt;[ref\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator5ref_tE> "LIEF::ref_iterator::ref_t")&gt;&gt; operator[](size\_t n)

#### [` operator[] `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iteratorixE6size_t>)

inline add\_const\_t&lt;[ref\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator5ref_tE> "LIEF::ref_iterator::ref_t")&gt; operator[](size\_t n) const

#### [` operator+ `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iteratorplEN12ref_iterator15difference_typeE>)

inline [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") operator+(typename [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")::[difference\_type](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator15difference_typeE> "LIEF::ref_iterator::difference_type") n) const

#### [` operator- `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iteratormiEN12ref_iterator15difference_typeE>)

inline [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") operator-(typename [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")::[difference\_type](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator15difference_typeE> "LIEF::ref_iterator::difference_type") n) const

#### [` operator- `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iteratormiERK12ref_iterator>)

inline [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")::[difference\_type](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator15difference_typeE> "LIEF::ref_iterator::difference_type") operator-(const [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") &amp;rhs) const

#### [` operator< `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iteratorltERK12ref_iterator>)

inline bool operator&lt;(const [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") &amp;rhs) const

#### [` operator> `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iteratorgtERK12ref_iterator>)

inline bool operator&gt;(const [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") &amp;rhs) const

#### [` operator>= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iteratorgeERK12ref_iterator>)

inline bool operator&gt;=(const [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") &amp;rhs) const

#### [` operator<= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iteratorleERK12ref_iterator>)

inline bool operator&lt;=(const [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") &amp;rhs) const

#### [` begin `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iterator5beginEv>)

inline [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") begin() const

#### [` cbegin `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iterator6cbeginEv>)

inline [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") cbegin() const

#### [` end `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iterator3endEv>)

inline [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") end() const

#### [` cend `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iterator4cendEv>)

inline [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") cend() const

#### [` operator== `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iteratoreqERK12ref_iterator>)

inline bool operator==(const [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") &amp;other) const

#### [` operator!= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iteratorneERK12ref_iterator>)

inline bool operator!=(const [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator") &amp;other) const

#### [` size `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iterator4sizeEv>)

inline size\_t size() const

#### [` empty `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iterator5emptyEv>)

inline bool empty() const

#### [` operator* `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iteratormlEv>)

inline std::enable\_if\_t&lt;!std::is\_const\_v&lt;[ref\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator5ref_tE> "LIEF::ref_iterator::ref_t")&gt;, remove\_const\_t&lt;[ref\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator5ref_tE> "LIEF::ref_iterator::ref_t")&gt;&gt; operator\*()

#### [` Voperator* `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12ref_iteratormlENSt11enable_if_tINSt12is_pointer_vI1VEE11add_const_tI5ref_tEEEv>)

template&lt;typename V = [DT\_VAL](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator6DT_VALE> "LIEF::ref_iterator::DT_VAL")&gt;  
inline std::enable\_if\_t&lt;std::is\_pointer\_v&lt;[V](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12ref_iteratormlENSt11enable_if_tINSt12is_pointer_vI1VEE11add_const_tI5ref_tEEEv> "LIEF::ref_iterator::operator*::V")&gt;, add\_const\_t&lt;[ref\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator5ref_tE> "LIEF::ref_iterator::ref_t")&gt;&gt; operator\*() const

#### [` Voperator* `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12ref_iteratormlENSt11enable_if_tIXntNSt12is_pointer_vI1VEEE11add_const_tI5ref_tEEEv>)

template&lt;typename V = [DT\_VAL](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator6DT_VALE> "LIEF::ref_iterator::DT_VAL")&gt;  
inline std::enable\_if\_t&lt;!std::is\_pointer\_v&lt;[V](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12ref_iteratormlENSt11enable_if_tIXntNSt12is_pointer_vI1VEEE11add_const_tI5ref_tEEEv> "LIEF::ref_iterator::operator*::V")&gt;, add\_const\_t&lt;[ref\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator5ref_tE> "LIEF::ref_iterator::ref_t")&gt;&gt; operator\*() const

#### [` operator-> `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iteratorptEv>)

inline std::enable\_if\_t&lt;!std::is\_const\_v&lt;[pointer\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator9pointer_tE> "LIEF::ref_iterator::pointer_t")&gt;, [pointer\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator9pointer_tE> "LIEF::ref_iterator::pointer_t")&gt; operator-&gt;()

#### [` operator-> `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12ref_iteratorptEv>)

inline add\_const\_t&lt;[pointer\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12ref_iterator9pointer_tE> "LIEF::ref_iterator::pointer_t")&gt; operator-&gt;() const

### [` TUCTLIEF::const_ref_iterator `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE>)

template&lt;class T, typename U = typename decay\_t&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator::T")&gt;::value\_type, class CT = std::add\_const\_t&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator::T")&gt;&gt;  
using LIEF::const\_ref\_iterator = [ref\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF12ref_iteratorE> "LIEF::ref_iterator")&lt;[CT](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator::CT"), [U](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator::U"), typename decay\_t&lt;[CT](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF18const_ref_iteratorE> "LIEF::const_ref_iterator::CT")&gt;::const\_iterator&gt;

Iterator which returns a const ref on container’s values.

### [` TUITERATOR_Tfilter_iterator `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE>)

template&lt;class T, typename U = typename decay\_t&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator::T")&gt;::value\_type, class ITERATOR\_T = typename decay\_t&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator::T")&gt;::iterator&gt;  
class filter\_iterator

Iterator which returns a ref on container’s values given predicates.

Public Types

#### [` iterator_category `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator17iterator_categoryE>)

using iterator\_category = std::forward\_iterator\_tag

#### [` value_type `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator10value_typeE>)

using value\_type = decay\_t&lt;[U](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator::U")&gt;

#### [` difference_type `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator15difference_typeE>)

using difference\_type = ptrdiff\_t

#### [` pointer `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator7pointerE>)

using pointer = std::remove\_pointer\_t&lt;[U](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator::U")&gt;\*

#### [` reference `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator9referenceE>)

using reference = std::remove\_pointer\_t&lt;[U](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator::U")&gt;&amp;

#### [` container_type `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator14container_typeE>)

using container\_type = [T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator::T")

#### [` DT_VAL `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator6DT_VALE>)

using DT\_VAL = [U](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator::U")

#### [` DT `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator2DTE>)

using DT = decay\_t&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator::T")&gt;

#### [` ref_t `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator5ref_tE>)

using ref\_t = typename [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator")::[reference](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator9referenceE> "LIEF::filter_iterator::reference")

#### [` pointer_t `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator9pointer_tE>)

using pointer\_t = typename [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator")::[pointer](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator7pointerE> "LIEF::filter_iterator::pointer")

#### [` filter_t `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator8filter_tE>)

using filter\_t = std::function&lt;bool(const typename [DT](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator2DTE> "LIEF::filter_iterator::DT")::value\_type&amp;)&gt;

Public Functions

#### [` filter_iterator `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator15filter_iteratorERR15filter_iterator>)

inline filter\_iterator([filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator15filter_iteratorERR15filter_iterator> "LIEF::filter_iterator::filter_iterator") &amp;&amp;other) noexcept

#### [` operator= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iteratoraSERR15filter_iterator>)

inline [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator") &amp;operator=([filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator") &amp;&amp;other) noexcept

#### [` ~filter_iterator `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iteratorD0Ev>)

~filter\_iterator() = default

#### [` filter_iterator `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator15filter_iteratorE1T8filter_t>)

inline filter\_iterator([T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator::T") container, [filter\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator8filter_tE> "LIEF::filter_iterator::filter_t") filter)

#### [` filter_iterator `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator15filter_iteratorE1TRKNSt6vectorI8filter_tEE>)

inline filter\_iterator([T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator::T") container, const std::vector&lt;[filter\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator8filter_tE> "LIEF::filter_iterator::filter_t")&gt; &amp;filters)

#### [` filter_iterator `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator15filter_iteratorE1T>)

inline filter\_iterator([T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator::T") container)

#### [` filter_iterator `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator15filter_iteratorERK15filter_iterator>)

inline filter\_iterator(const [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator15filter_iteratorERK15filter_iterator> "LIEF::filter_iterator::filter_iterator") &amp;copy)

#### [` operator= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iteratoraSE15filter_iterator>)

inline [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator") &amp;operator=([filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator") other)

#### [` swap `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator4swapER15filter_iterator>)

inline void swap([filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator") &amp;other) noexcept

#### [` def `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator3defE8filter_t>)

inline [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator") &amp;def([filter\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator8filter_tE> "LIEF::filter_iterator::filter_t") func)

#### [` operator++ `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iteratorppEv>)

inline [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator") &amp;operator++()

#### [` operator++ `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iteratorppEi>)

inline [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator") operator++(int)

#### [` begin `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF15filter_iterator5beginEv>)

inline [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator") begin() const

#### [` cbegin `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF15filter_iterator6cbeginEv>)

inline [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator") cbegin() const

#### [` end `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF15filter_iterator3endEv>)

inline [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator") end() const

#### [` cend `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF15filter_iterator4cendEv>)

inline [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator") cend() const

#### [` operator* `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iteratormlEv>)

inline std::enable\_if\_t&lt;!std::is\_const\_v&lt;[ref\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator5ref_tE> "LIEF::filter_iterator::ref_t")&gt;, remove\_const\_t&lt;[ref\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator5ref_tE> "LIEF::filter_iterator::ref_t")&gt;&gt; operator\*()

#### [` Voperator* `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF15filter_iteratormlENSt11enable_if_tINSt12is_pointer_vI1VEE11add_const_tI5ref_tEEEv>)

template&lt;typename V = [DT\_VAL](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator6DT_VALE> "LIEF::filter_iterator::DT_VAL")&gt;  
inline std::enable\_if\_t&lt;std::is\_pointer\_v&lt;[V](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF15filter_iteratormlENSt11enable_if_tINSt12is_pointer_vI1VEE11add_const_tI5ref_tEEEv> "LIEF::filter_iterator::operator*::V")&gt;, add\_const\_t&lt;[ref\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator5ref_tE> "LIEF::filter_iterator::ref_t")&gt;&gt; operator\*() const

#### [` Voperator* `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF15filter_iteratormlENSt11enable_if_tIXntNSt12is_pointer_vI1VEEE11add_const_tI5ref_tEEEv>)

template&lt;typename V = [DT\_VAL](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator6DT_VALE> "LIEF::filter_iterator::DT_VAL")&gt;  
inline std::enable\_if\_t&lt;!std::is\_pointer\_v&lt;[V](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF15filter_iteratormlENSt11enable_if_tIXntNSt12is_pointer_vI1VEEE11add_const_tI5ref_tEEEv> "LIEF::filter_iterator::operator*::V")&gt;, add\_const\_t&lt;[ref\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator5ref_tE> "LIEF::filter_iterator::ref_t")&gt;&gt; operator\*() const

#### [` operator[] `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iteratorixE6size_t>)

inline std::enable\_if\_t&lt;!std::is\_const\_v&lt;[ref\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator5ref_tE> "LIEF::filter_iterator::ref_t")&gt;, remove\_const\_t&lt;[ref\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator5ref_tE> "LIEF::filter_iterator::ref_t")&gt;&gt; operator[](size\_t n)

#### [` operator[] `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF15filter_iteratorixE6size_t>)

inline add\_const\_t&lt;[ref\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator5ref_tE> "LIEF::filter_iterator::ref_t")&gt; operator[](size\_t n) const

#### [` operator-> `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iteratorptEv>)

inline std::enable\_if\_t&lt;!std::is\_const\_v&lt;[pointer\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator9pointer_tE> "LIEF::filter_iterator::pointer_t")&gt;, [pointer\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator9pointer_tE> "LIEF::filter_iterator::pointer_t")&gt; operator-&gt;()

#### [` operator-> `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF15filter_iteratorptEv>)

inline add\_const\_t&lt;[pointer\_t](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF15filter_iterator9pointer_tE> "LIEF::filter_iterator::pointer_t")&gt; operator-&gt;() const

#### [` size `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF15filter_iterator4sizeEv>)

inline size\_t size() const

#### [` empty `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF15filter_iterator5emptyEv>)

inline bool empty() const

#### [` operator== `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF15filter_iteratoreqERK15filter_iterator>)

inline bool operator==(const [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator") &amp;other) const

#### [` operator!= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF15filter_iteratorneERK15filter_iterator>)

inline bool operator!=(const [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator") &amp;other) const

### [` TUCTLIEF::const_filter_iterator `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE>)

template&lt;class T, typename U = typename decay\_t&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator::T")&gt;::value\_type, class CT = std::add\_const\_t&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator::T")&gt;&gt;  
using LIEF::const\_filter\_iterator = [filter\_iterator](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF15filter_iteratorE> "LIEF::filter_iterator")&lt;[CT](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator::CT"), [U](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator::U"), typename decay\_t&lt;[CT](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I000EN4LIEF21const_filter_iteratorE> "LIEF::const_filter_iterator::CT")&gt;::const\_iterator&gt;

Iterator which returns a const ref on container’s values given predicates.

### [` IteratorTiterator_range `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE>)

template&lt;typename IteratorT&gt;  
class iterator\_range

Public Types

#### [` IteratorTy `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF14iterator_range10IteratorTyE>)

using IteratorTy = [IteratorT](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range::IteratorT")

#### [` IteratorDecayTy `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF14iterator_range15IteratorDecayTyE>)

using IteratorDecayTy = std::decay\_t&lt;[IteratorT](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range::IteratorT")&gt;

Public Functions

#### [` Titerator_range `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_range14iterator_rangeERR1TRR1T>)

template&lt;class T&gt;  
inline iterator\_range([T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_range14iterator_rangeERR1TRR1T> "LIEF::iterator_range::iterator_range::T") &amp;&amp;it\_begin, [T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_range14iterator_rangeERR1TRR1T> "LIEF::iterator_range::iterator_range::T") &amp;&amp;it\_end)

#### [` begin `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF14iterator_range5beginEv>)

inline [IteratorT](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range::IteratorT") begin() const

#### [` end `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF14iterator_range3endEv>)

inline [IteratorT](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF14iterator_rangeE> "LIEF::iterator_range::IteratorT") end() const

#### [` empty `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF14iterator_range5emptyEv>)

inline bool empty() const

#### [` at `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF14iterator_range2atEN15IteratorDecayTy15difference_typeE>)

inline [ReferenceProxy](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF14iterator_range14ReferenceProxyE> "LIEF::iterator_range::ReferenceProxy") at(typename [IteratorDecayTy](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF14iterator_range15IteratorDecayTyE> "LIEF::iterator_range::IteratorDecayTy")::difference\_type pos) const

#### [` operator[] `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF14iterator_rangeixEN15IteratorDecayTy15difference_typeE>)

inline [ReferenceProxy](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF14iterator_range14ReferenceProxyE> "LIEF::iterator_range::ReferenceProxy") operator[](typename [IteratorDecayTy](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF14iterator_range15IteratorDecayTyE> "LIEF::iterator_range::IteratorDecayTy")::difference\_type pos) const

#### [` size `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF14iterator_range4sizeEv>)

inline std::ptrdiff\_t size() const

#### [` ReferenceProxy `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF14iterator_range14ReferenceProxyE>)

class ReferenceProxy

Public Types

##### [` reference `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF14iterator_range14ReferenceProxy9referenceE>)

using reference = decltype(\*std::declval&lt;const [IteratorDecayTy](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF14iterator_range15IteratorDecayTyE> "LIEF::iterator_range::IteratorDecayTy")&amp;&gt;())

Public Functions

##### [` operator reference `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF14iterator_range14ReferenceProxycv9referenceEv>)

inline operator [reference](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF14iterator_range14ReferenceProxy9referenceE> "LIEF::iterator_range::ReferenceProxy::reference")() const

##### [` Itoperator-> `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF14iterator_range14ReferenceProxyptEDTaddeclNSt7declvalIRK2ItEEEEv>)

template&lt;class It = [IteratorDecayTy](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF14iterator_range15IteratorDecayTyE> "LIEF::iterator_range::IteratorDecayTy")&gt;  
inline decltype(&amp;\*std::declval&lt;const [It](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF14iterator_range14ReferenceProxyptEDTaddeclNSt7declvalIRK2ItEEEEv> "LIEF::iterator_range::ReferenceProxy::operator->::It")&amp;&gt;()) operator-&gt;() const

## [BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#binarystream>)

### [` BinaryStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE>)

class BinaryStream

Class that is used to a read stream of data from different sources.

Subclassed by LIEF::DumpStream, [LIEF::FileStream](<https://lief.re/doc/latest/api/cpp/index.html#classLIEF_1_1FileStream>), [LIEF::MemoryStream](<https://lief.re/doc/latest/api/cpp/index.html#classLIEF_1_1MemoryStream>), [LIEF::SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#classLIEF_1_1SpanStream>), [LIEF::VectorStream](<https://lief.re/doc/latest/api/cpp/index.html#classLIEF_1_1VectorStream>)

Public Types

#### [` STREAM_TYPE `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream11STREAM_TYPEE>)

enum class STREAM\_TYPE

*Values:*

##### [` UNKNOWN `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream11STREAM_TYPE7UNKNOWNE>)

enumerator UNKNOWN = 0

##### [` VECTOR `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream11STREAM_TYPE6VECTORE>)

enumerator VECTOR

##### [` MEMORY `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream11STREAM_TYPE6MEMORYE>)

enumerator MEMORY

##### [` SPAN `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream11STREAM_TYPE4SPANE>)

enumerator SPAN

##### [` FILE `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream11STREAM_TYPE4FILEE>)

enumerator FILE

##### [` DUMP `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream11STREAM_TYPE4DUMPE>)

enumerator DUMP

##### [` ELF_DATA_HANDLER `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream11STREAM_TYPE16ELF_DATA_HANDLERE>)

enumerator ELF\_DATA\_HANDLER

Public Functions

#### [` BinaryStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream12BinaryStreamE11STREAM_TYPE>)

inline BinaryStream([STREAM\_TYPE](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream11STREAM_TYPEE> "LIEF::BinaryStream::STREAM_TYPE") type)

#### [` ~BinaryStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamD0Ev>)

virtual ~BinaryStream() = default

#### [` size `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream4sizeEv>)

virtual uint64\_t size() const = 0

#### [` type `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream4typeEv>)

inline [STREAM\_TYPE](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream11STREAM_TYPEE> "LIEF::BinaryStream::STREAM_TYPE") type() const

#### [` is_memory_stream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream16is_memory_streamEv>)

inline bool is\_memory\_stream() const

#### [` is_dump_stream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream14is_dump_streamEv>)

inline bool is\_dump\_stream() const

#### [` is_memory_view `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream14is_memory_viewEv>)

inline bool is\_memory\_view() const

#### [` skip_uleb128 `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream12skip_uleb128Ev>)

inline const [BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;skip\_uleb128() const

#### [` skip_sleb128 `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream12skip_sleb128Ev>)

inline const [BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;skip\_sleb128() const

#### [` read_uleb128 `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream12read_uleb128EP6size_t>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; read\_uleb128(size\_t \*size = nullptr) const

#### [` read_sleb128 `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream12read_sleb128EP6size_t>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;uint64\_t&gt; read\_sleb128(size\_t \*size = nullptr) const

#### [` read_dwarf_encoded `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream18read_dwarf_encodedE7uint8_t>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;int64\_t&gt; read\_dwarf\_encoded(uint8\_t encoding) const

#### [` read_string `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream11read_stringE6size_t>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;std::string&gt; read\_string(size\_t maxsize = ~size\_t{0}) const

#### [` peek_string `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream11peek_stringE6size_t>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;std::string&gt; peek\_string(size\_t maxsize = ~size\_t{0}) const

#### [` peek_string_at `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream14peek_string_atE6size_t6size_t>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;std::string&gt; peek\_string\_at(size\_t offset, size\_t maxsize = ~size\_t{0}) const

#### [` read_u16string `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream14read_u16stringEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;std::u16string&gt; read\_u16string() const

#### [` peek_u16string `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream14peek_u16stringEv>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;std::u16string&gt; peek\_u16string() const

#### [` read_mutf8 `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream10read_mutf8E6size_t>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;std::string&gt; read\_mutf8(size\_t maxsize = ~size\_t{0}) const

#### [` read_u16string `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream14read_u16stringE6size_t>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;std::u16string&gt; read\_u16string(size\_t length) const

#### [` peek_u16string `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream14peek_u16stringE6size_t>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;std::u16string&gt; peek\_u16string(size\_t length) const

#### [` peek_u16string_at `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream17peek_u16string_atE6size_t6size_t>)

[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;std::u16string&gt; peek\_u16string\_at(size\_t offset, size\_t length) const

#### [` peek_data `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream9peek_dataERNSt6vectorI7uint8_tEE8uint64_t8uint64_t8uint64_t>)

inline virtual [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") peek\_data(std::vector&lt;uint8\_t&gt; &amp;container, uint64\_t offset, uint64\_t size, uint64\_t virtual\_address = 0)

#### [` read_data `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream9read_dataERNSt6vectorI7uint8_tEE8uint64_t>)

inline virtual [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") read\_data(std::vector&lt;uint8\_t&gt; &amp;container, uint64\_t size)

#### [` read_data `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream9read_dataERNSt6vectorI7uint8_tEE>)

inline [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") read\_data(std::vector&lt;uint8\_t&gt; &amp;container)

#### [` Tread_objects `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF12BinaryStream12read_objectsE10ok_error_tRNSt6vectorI1TEE8uint64_t>)

template&lt;class T&gt;  
inline [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") read\_objects(std::vector&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF12BinaryStream12read_objectsE10ok_error_tRNSt6vectorI1TEE8uint64_t> "LIEF::BinaryStream::read_objects::T")&gt; &amp;container, uint64\_t count)

#### [` Tpeek_objects `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF12BinaryStream12peek_objectsE10ok_error_tRNSt6vectorI1TEE8uint64_t>)

template&lt;class T&gt;  
inline [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") peek\_objects(std::vector&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF12BinaryStream12peek_objectsE10ok_error_tRNSt6vectorI1TEE8uint64_t> "LIEF::BinaryStream::peek_objects::T")&gt; &amp;container, uint64\_t count)

#### [` Tpeek_objects_at `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF12BinaryStream15peek_objects_atE10ok_error_t8uint64_tRNSt6vectorI1TEE8uint64_t>)

template&lt;class T&gt;  
inline [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") peek\_objects\_at(uint64\_t offset, std::vector&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF12BinaryStream15peek_objects_atE10ok_error_t8uint64_tRNSt6vectorI1TEE8uint64_t> "LIEF::BinaryStream::peek_objects_at::T")&gt; &amp;container, uint64\_t count)

#### [` setpos `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream6setposE6size_t>)

inline void setpos(size\_t pos) const

#### [` increment_pos `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream13increment_posE6size_t>)

inline const [BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;increment\_pos(size\_t value) const

#### [` decrement_pos `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream13decrement_posE6size_t>)

inline void decrement\_pos(size\_t value) const

#### [` pos `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream3posEv>)

inline size\_t pos() const

#### [` is_valid `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream8is_validEv>)

inline bool is\_valid() const

#### [` operator bool `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStreamcvbEv>)

inline operator bool() const

#### [` Tread_array `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream10read_arrayEPK1T6size_t>)

template&lt;class T&gt;  
const [T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream10read_arrayEPK1T6size_t> "LIEF::BinaryStream::read_array::T") \*read\_array(size\_t size) const

#### [` TNpeek_array `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0_6size_tENK4LIEF12BinaryStream10peek_arrayE10ok_error_tRNSt5arrayI1T1NEE>)

template&lt;class T, size\_t N&gt;  
inline [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") peek\_array(std::array&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0_6size_tENK4LIEF12BinaryStream10peek_arrayE10ok_error_tRNSt5arrayI1T1NEE> "LIEF::BinaryStream::peek_array::T"), [N](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0_6size_tENK4LIEF12BinaryStream10peek_arrayE10ok_error_tRNSt5arrayI1T1NEE> "LIEF::BinaryStream::peek_array::N")&gt; &amp;dst) const

#### [` TNread_array `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0_6size_tENK4LIEF12BinaryStream10read_arrayE10ok_error_tRNSt5arrayI1T1NEE>)

template&lt;class T, size\_t N&gt;  
inline [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") read\_array(std::array&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0_6size_tENK4LIEF12BinaryStream10read_arrayE10ok_error_tRNSt5arrayI1T1NEE> "LIEF::BinaryStream::read_array::T"), [N](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0_6size_tENK4LIEF12BinaryStream10read_arrayE10ok_error_tRNSt5arrayI1T1NEE> "LIEF::BinaryStream::read_array::N")&gt; &amp;dst) const

#### [` Tpeek `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream4peekE6resultI1TEv>)

template&lt;class T&gt;  
[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream4peekE6resultI1TEv> "LIEF::BinaryStream::peek::T")&gt; peek() const

#### [` Tpeek `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream4peekE6resultI1TE6size_t>)

template&lt;class T&gt;  
[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream4peekE6resultI1TE6size_t> "LIEF::BinaryStream::peek::T")&gt; peek(size\_t offset) const

#### [` Tpeek_array `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream10peek_arrayEPK1T6size_t>)

template&lt;class T&gt;  
const [T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream10peek_arrayEPK1T6size_t> "LIEF::BinaryStream::peek_array::T") \*peek\_array(size\_t size) const

#### [` Tpeek_array `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream10peek_arrayEPK1T6size_t6size_t>)

template&lt;class T&gt;  
const [T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream10peek_arrayEPK1T6size_t6size_t> "LIEF::BinaryStream::peek_array::T") \*peek\_array(size\_t offset, size\_t size) const

#### [` Tread `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream4readE6resultI1TEv>)

template&lt;class T&gt;  
[result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream4readE6resultI1TEv> "LIEF::BinaryStream::read::T")&gt; read() const

#### [` Tskip `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream4skipERK12BinaryStreamv>)

template&lt;class T&gt;  
inline const [BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;skip() const

#### [` Tcan_read `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream8can_readEbv>)

template&lt;typename T&gt;  
bool can\_read() const

#### [` Tcan_read `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream8can_readEb6size_t>)

template&lt;typename T&gt;  
bool can\_read(size\_t offset) const

#### [` can_read `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream8can_readE7int64_t7int64_t>)

inline bool can\_read(int64\_t offset, int64\_t size) const

#### [` align `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream5alignE6size_t>)

size\_t align(size\_t align\_on) const

#### [` set_endian_swap `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream15set_endian_swapEb>)

inline void set\_endian\_swap(bool swap)

#### [` should_swap `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream11should_swapEv>)

inline bool should\_swap() const

#### [` p `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream1pEv>)

inline virtual const uint8\_t \*p() const

#### [` start `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream5startEv>)

inline virtual uint8\_t \*start()

#### [` p `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream1pEv>)

inline virtual uint8\_t \*p()

#### [` end `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream3endEv>)

inline virtual uint8\_t \*end()

#### [` start `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream5startEv>)

inline virtual const uint8\_t \*start() const

#### [` end `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream3endEv>)

inline virtual const uint8\_t \*end() const

#### [` read_at `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream7read_atE8uint64_t8uint64_t8uint64_t>)

virtual [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;const void\*&gt; read\_at(uint64\_t offset, uint64\_t size, uint64\_t virtual\_address = 0) const = 0

#### [` peek_in `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12BinaryStream7peek_inEPv8uint64_t8uint64_t8uint64_t>)

inline virtual [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") peek\_in(void \*dst, uint64\_t offset, uint64\_t size, uint64\_t virtual\_address = 0) const

#### [` Tcast `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream4castEPK1Tv>)

template&lt;class T&gt;  
inline const [T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0ENK4LIEF12BinaryStream4castEPK1Tv> "LIEF::BinaryStream::cast::T") \*cast() const

#### [` Tcast `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF12BinaryStream4castEP1Tv>)

template&lt;class T&gt;  
inline [T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF12BinaryStream4castEP1Tv> "LIEF::BinaryStream::cast::T") \*cast()

#### [` bind_binary `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStream11bind_binaryER6Binary>)

inline virtual bool bind\_binary([Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary")&amp;)

Public Static Functions

#### [` Tis_all_zero `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF12BinaryStream11is_all_zeroEbRK1T>)

template&lt;class T&gt;  
static inline bool is\_all\_zero(const [T](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I0EN4LIEF12BinaryStream11is_all_zeroEbRK1T> "LIEF::BinaryStream::is_all_zero::T") &amp;buffer)

Friends

**friend class ASN1Reader**

### [` FileStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStreamE>)

class FileStream : public LIEF::[BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream")

Stream interface over a `std::ifstream`.

Public Functions

#### [` FileStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStream10FileStreamENSt8ifstreamE8uint64_t>)

inline FileStream(std::ifstream fs, uint64\_t size)

#### [` FileStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStream10FileStreamEv>)

FileStream() = delete

#### [` FileStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStream10FileStreamERK10FileStream>)

FileStream(const [FileStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStream10FileStreamERK10FileStream> "LIEF::FileStream::FileStream")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStreamaSERK10FileStream>)

[FileStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStreamE> "LIEF::FileStream") &amp;operator=(const [FileStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStreamE> "LIEF::FileStream")&amp;) = delete

#### [` FileStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStream10FileStreamERR10FileStream>)

FileStream([FileStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStream10FileStreamERR10FileStream> "LIEF::FileStream::FileStream") &amp;&amp;other) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStreamaSERR10FileStream>)

[FileStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStreamE> "LIEF::FileStream") &amp;operator=([FileStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStreamE> "LIEF::FileStream") &amp;&amp;other) noexcept = default

#### [` size `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF10FileStream4sizeEv>)

inline virtual uint64\_t size() const override

#### [` content `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF10FileStream7contentEv>)

std::vector&lt;uint8\_t&gt; content() const

#### [` ~FileStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStreamD0Ev>)

~FileStream() override = default

#### [` peek_in `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF10FileStream7peek_inEPv8uint64_t8uint64_t8uint64_t>)

inline virtual [ok\_error\_t](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4N4LIEF10ok_error_tE> "LIEF::ok_error_t") peek\_in(void \*dst, uint64\_t offset, uint64\_t size, uint64\_t = 0) const override

#### [` read_at `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF10FileStream7read_atE8uint64_t8uint64_t8uint64_t>)

inline virtual [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;const void\*&gt; read\_at(uint64\_t, uint64\_t, uint64\_t) const override

Public Static Functions

#### [` from_file `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStream9from_fileENSt11string_viewE>)

static [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[FileStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStreamE> "LIEF::FileStream")&gt; from\_file(std::string\_view file)

#### [` classof `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10FileStream7classofERK12BinaryStream>)

static inline bool classof(const [BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

### [` SpanStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE>)

class SpanStream : public LIEF::[BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream")

Public Functions

#### [` SpanStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStream10SpanStreamE4spanIK7uint8_tE>)

inline SpanStream(span&lt;const uint8\_t&gt; data)

#### [` SpanStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStream10SpanStreamE4spanI7uint8_tE>)

inline SpanStream(span&lt;uint8\_t&gt; data)

#### [` SpanStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStream10SpanStreamEPK7uint8_t6size_t>)

inline SpanStream(const uint8\_t \*p, size\_t size)

#### [` SpanStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStream10SpanStreamERKNSt6vectorI7uint8_tEE>)

inline SpanStream(const std::vector&lt;uint8\_t&gt; &amp;data)

#### [` clone `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF10SpanStream5cloneEv>)

inline std::unique\_ptr&lt;[SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream")&gt; clone() const

#### [` SpanStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStream10SpanStreamEv>)

SpanStream() = delete

#### [` SpanStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStream10SpanStreamERK10SpanStream>)

SpanStream(const [SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStream10SpanStreamERK10SpanStream> "LIEF::SpanStream::SpanStream") &amp;other) = default

#### [` operator= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamaSERK10SpanStream>)

[SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream") &amp;operator=(const [SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream") &amp;other) = default

#### [` SpanStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStream10SpanStreamERR10SpanStream>)

SpanStream([SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStream10SpanStreamERR10SpanStream> "LIEF::SpanStream::SpanStream") &amp;&amp;other) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamaSERR10SpanStream>)

[SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream") &amp;operator=([SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream") &amp;&amp;other) noexcept = default

#### [` size `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF10SpanStream4sizeEv>)

inline virtual uint64\_t size() const override

#### [` p `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF10SpanStream1pEv>)

inline virtual const uint8\_t \*p() const override

#### [` start `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF10SpanStream5startEv>)

inline virtual const uint8\_t \*start() const override

#### [` end `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF10SpanStream3endEv>)

inline virtual const uint8\_t \*end() const override

#### [` content `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF10SpanStream7contentEv>)

inline std::vector&lt;uint8\_t&gt; content() const

#### [` slice `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF10SpanStream5sliceE6size_t6size_t>)

inline [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream")&gt; slice(size\_t offset, size\_t size) const

#### [` slice `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF10SpanStream5sliceE6size_t>)

inline [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream")&gt; slice(size\_t offset) const

#### [` to_vector `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF10SpanStream9to_vectorEv>)

std::unique\_ptr&lt;[VectorStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStreamE> "LIEF::VectorStream")&gt; to\_vector() const

#### [` ~SpanStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamD0Ev>)

~SpanStream() override = default

#### [` end `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStream3endEv>)

inline virtual uint8\_t \*end()

#### [` p `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStream1pEv>)

inline virtual uint8\_t \*p()

#### [` start `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStream5startEv>)

inline virtual uint8\_t \*start()

Public Static Functions

#### [` from_vector `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStream11from_vectorERKNSt6vectorI7uint8_tEE>)

static inline [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream")&gt; from\_vector(const std::vector&lt;uint8\_t&gt; &amp;data)

#### [` Nfrom_array `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I_6size_tEN4LIEF10SpanStream10from_arrayE6resultI10SpanStreamERKNSt5arrayI7uint8_t1NEE>)

template&lt;size\_t N&gt;  
static inline [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream")&gt; from\_array(const std::array&lt;uint8\_t, [N](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4I_6size_tEN4LIEF10SpanStream10from_arrayE6resultI10SpanStreamERKNSt5arrayI7uint8_t1NEE> "LIEF::SpanStream::from_array::N")&gt; &amp;data)

#### [` classof `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStream7classofERK12BinaryStream>)

static inline bool classof(const [BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

### [` VectorStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStreamE>)

class VectorStream : public LIEF::[BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream")

Public Functions

#### [` VectorStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStream12VectorStreamENSt6vectorI7uint8_tEE>)

inline VectorStream(std::vector&lt;uint8\_t&gt; data)

#### [` VectorStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStream12VectorStreamEv>)

VectorStream() = delete

#### [` VectorStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStream12VectorStreamERK12VectorStream>)

VectorStream(const [VectorStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStream12VectorStreamERK12VectorStream> "LIEF::VectorStream::VectorStream")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStreamaSERK12VectorStream>)

[VectorStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStreamE> "LIEF::VectorStream") &amp;operator=(const [VectorStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStreamE> "LIEF::VectorStream")&amp;) = delete

#### [` VectorStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStream12VectorStreamERR12VectorStream>)

VectorStream([VectorStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStream12VectorStreamERR12VectorStream> "LIEF::VectorStream::VectorStream") &amp;&amp;other) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStreamaSERR12VectorStream>)

[VectorStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStreamE> "LIEF::VectorStream") &amp;operator=([VectorStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStreamE> "LIEF::VectorStream") &amp;&amp;other) noexcept = default

#### [` size `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12VectorStream4sizeEv>)

inline virtual uint64\_t size() const override

#### [` content `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12VectorStream7contentEv>)

inline const std::vector&lt;uint8\_t&gt; &amp;content() const

#### [` move_content `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStream12move_contentEv>)

inline std::vector&lt;uint8\_t&gt; &amp;&amp;move\_content()

#### [` p `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12VectorStream1pEv>)

inline virtual const uint8\_t \*p() const override

#### [` start `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12VectorStream5startEv>)

inline virtual const uint8\_t \*start() const override

#### [` end `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12VectorStream3endEv>)

inline virtual const uint8\_t \*end() const override

#### [` slice `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12VectorStream5sliceE8uint32_t6size_t>)

std::unique\_ptr&lt;[SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream")&gt; slice(uint32\_t offset, size\_t size) const

#### [` slice `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12VectorStream5sliceE8uint32_t>)

std::unique\_ptr&lt;[SpanStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF10SpanStreamE> "LIEF::SpanStream")&gt; slice(uint32\_t offset) const

#### [` end `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStream3endEv>)

inline virtual uint8\_t \*end()

#### [` p `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStream1pEv>)

inline virtual uint8\_t \*p()

#### [` start `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStream5startEv>)

inline virtual uint8\_t \*start()

Public Static Functions

#### [` from_file `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStream9from_fileENSt11string_viewE>)

static [result](<https://lief.re/doc/latest/api/error_handling/index.html#_CPPv4I0EN4LIEF6resultE> "LIEF::result")&lt;[VectorStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStreamE> "LIEF::VectorStream")&gt; from\_file(std::string\_view file)

#### [` classof `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12VectorStream7classofERK12BinaryStream>)

static inline bool classof(const [BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)

### [` MemoryStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStreamE>)

class MemoryStream : public LIEF::[BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream")

Public Functions

#### [` MemoryStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStream12MemoryStreamEv>)

MemoryStream() = delete

#### [` MemoryStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStream12MemoryStreamE9uintptr_t>)

MemoryStream(uintptr\_t base\_address)

#### [` MemoryStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStream12MemoryStreamE9uintptr_t8uint64_t>)

inline MemoryStream(uintptr\_t base\_address, uint64\_t size)

#### [` MemoryStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStream12MemoryStreamERK12MemoryStream>)

MemoryStream(const [MemoryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStream12MemoryStreamERK12MemoryStream> "LIEF::MemoryStream::MemoryStream")&amp;) = delete

#### [` operator= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStreamaSERK12MemoryStream>)

[MemoryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStreamE> "LIEF::MemoryStream") &amp;operator=(const [MemoryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStreamE> "LIEF::MemoryStream")&amp;) = delete

#### [` MemoryStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStream12MemoryStreamERR12MemoryStream>)

MemoryStream([MemoryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStream12MemoryStreamERR12MemoryStream> "LIEF::MemoryStream::MemoryStream")&amp;&amp;) noexcept = default

#### [` operator= `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStreamaSERR12MemoryStream>)

[MemoryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStreamE> "LIEF::MemoryStream") &amp;operator=([MemoryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStreamE> "LIEF::MemoryStream")&amp;&amp;) noexcept = default

#### [` base_address `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12MemoryStream12base_addressEv>)

inline uintptr\_t base\_address() const

#### [` p `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12MemoryStream1pEv>)

inline virtual const uint8\_t \*p() const override

#### [` start `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12MemoryStream5startEv>)

inline virtual const uint8\_t \*start() const override

#### [` end `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12MemoryStream3endEv>)

inline virtual const uint8\_t \*end() const override

#### [` binary `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStream6binaryEv>)

inline [Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary") \*binary()

#### [` size `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4NK4LIEF12MemoryStream4sizeEv>)

inline virtual uint64\_t size() const override

#### [` bind_binary `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStream11bind_binaryER6Binary>)

inline virtual bool bind\_binary([Binary](<https://lief.re/doc/latest/api/binary_abstraction/cpp.html#_CPPv4N4LIEF6BinaryE> "LIEF::Binary") &amp;bin) override

#### [` ~MemoryStream `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStreamD0Ev>)

~MemoryStream() override = default

#### [` end `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStream3endEv>)

inline virtual uint8\_t \*end()

#### [` p `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStream1pEv>)

inline virtual uint8\_t \*p()

#### [` start `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStream5startEv>)

inline virtual uint8\_t \*start()

Public Static Functions

#### [` classof `](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12MemoryStream7classofERK12BinaryStream>)

static inline bool classof(const [BinaryStream](<https://lief.re/doc/latest/api/cpp/index.html#_CPPv4N4LIEF12BinaryStreamE> "LIEF::BinaryStream") &amp;stream)
