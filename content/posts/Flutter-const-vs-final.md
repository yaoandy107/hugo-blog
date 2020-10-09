---
title: 'Flutter: const vs final'
date: 2020-04-23 00:57:52
tags:
  - Flutter
categories:
  - Flutter
keywords: 
  - flutter
---

## Const

- 需要在創建時就給定值，且會在編譯時期決定好，因此如果是執行時期才知道的值是不能用 const 的。
- const 裡的值也得要是 const，不能是在執行階段才知道或是可改變的值，因此下面的範例會失敗：
  ```dart
  const arr = [1, 2, 3]
  arr[1] = 11 // 執行失敗
  ```

## Final

- 給定值之後就不能再更改，但可以在建構子之中再給。