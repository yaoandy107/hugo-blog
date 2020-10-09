---
title: 型態、變數與運算子 - Java
date: 2018-03-05 01:11:35
tags: 
- Java
categories: 
- Java
keywords: 
- java
description:
---

## 資料型態
### 何謂資料型態？
程式儲存資料的型態
<!--more-->

### 認識資料型態
常常聽到別人提到 Java 是物件導向語言，不過 Java 本身並不是純綷的物件導向語言，像是就型態系統而言，Java 就並非每個值都是物件，而是混合了兩個型態系統：**基本型態（Primitive type）**與**物件型態（Object type）**。

### 基本型態（Primitive type）
在 Java 語言中有八種**基本型態( Primitive Type )**，可分作四個大類
- 整數型態：byte、short、int、long
- 浮點數型態：float、double
- 字元型態：char
- 邏輯型態：boolean

### 整數型態
用於儲存整數

| 型態 | 長度 | 範圍 |
| - | - | - |
| byte | 8 bits | −2^7^到2^7^−1 |
| short | 16 bits | −2^15^到2^15^−1 |
| int | 32 bits | −2^31^到2^31^−1 |
| long | 64 bits | −2^63^到2^63^−1 |

### 浮點數型態
用於儲存小數，`double`浮點數使用的記憶體空間比`float`浮點數來得多，可表示的精確度也比較大。想要了解確切的範圍，可以自行Google

| 型態      | 長度     |
| -------- | -------- |
| float     | 32 bits   | 
| double    | 64 bits  |

### 字元型態
`char`型態用來儲存`'A'`、`'B'`、`'林'`等字元符號。每個字元型態佔兩個位元組，中文字元與英文字元在Java中同樣都是用兩個位元組儲存。

### 布林型態
`boolean`型態可儲存`true`與`false`，分別代表邏輯的「真」與「假」。

## 變數
不懂變數概念的可以參考這篇，https://openhome.cc/Gossip/Java/Variable.html
### 變數命名規則
類別以英文大寫字母開頭，若有多個英文單字組成，採取大寫駝峰型 (upper camel case) 
* SampleItem
* MyData
* MySimpleThread
* MainActivity
  
方法或變數（包括參數、屬性等）以英文小寫字母開頭，若有多個英文單字組成，採取小寫駝峰型 (lower camel case)
* setUpNetworking
* getView
* myActivity

## 運算子
### 單元運算子

| 運算子 | 功能 | 範例 |
| --- | --- | --- |
| + | 正 | +a |
| - | 負 | -a |
| ++ | 遞增 | \++a, a++ |
| -\- | 遞減 | \-\-a, a\-\- |
| ! | 反轉 | !a |

```java
boolean a = true;
boolean b = !a;    // b 會等於 false
boolean c = !b;    // c 會等於 true
```
### 一般運算子
下面為一般運算子，皆須結合兩個運算元，可用在`整數`及`浮點數`，計算結果為整數或浮點數

| 運算子 | 功能 | 範例 |
| --- | --- | --- |
| + | 加 | a + b |
| - | 減 | a - b |
| * | 乘 | a * b |
| / | 除 | a / b |
| % | 取餘數 | a % b |

### 關係運算子
下面為關係運算子，計算結果不是`true`就是`false`

| 運算子 | 功能 | 範例 |
| --- | --- | --- |
| == | 相等 | a == b |
| != | 不相等 | a != b |
| > | 大於 | a > b |
| >= | 大於等於 | a >= b |
| < | 小於 | a < b |
| <= | 小於等於 | a <= b |

### 指派運算子

| 運算子 | 功能 | 範例 |
| --- | --- | --- |
| = | 指派 | a = b |
| += | 相加同時指派 | a += b |
| -= | 相減同時指派 | a -= b |
| *= | 相乘同時指派 | a *= b |
| /= | 相除同時指派 | a /= b |
| %= | 取餘數同時指派 | a %= b |
