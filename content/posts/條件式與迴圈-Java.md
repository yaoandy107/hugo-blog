---
title: 條件式與迴圈 - Java
date: 2018-03-14 02:04:41
tags: 
- Java
categories:
- Java
keywords:
- java
description:
---
為了告訴電腦特定條件下該做什麼動作，要使用各種條件式來定義程式執行的流程。
## 條件式
「如果OOO成立，就要…」，Java提供了 `if...else` 條件式，語法如下：
<!--more-->

### if...else
```java
if (條件式一) {
    陳述句;  
} else if (條件式二) {
    陳述句;
} else {
    陳述句;
}
```
條件式運算結果為 `true` 會執行 `if` 的 `{` 與 `}` 中的陳述句，否則執行下一個條件式，如果所有條件是都不符合，則執行 `else` 的 `{` 與 `}` 中的陳述句，如果條件式不成立時並不想作任何事，則 `else` 可以省略。

### switch
```java
switch (變數或運算式) {   
    case 整數、字元、字串:   
        陳述句;   
        break;   
    case 整數、字元、字串:   
        陳述句;   
        break;   
    default:   
        陳述句;   
}
```
首先看看 `switch` 的括號，當中置放要取得值的變數或運算式，值必須是整數、字元、字串，取得值後會開始與 `case` 中設定的整數、字元、字串比對，如果符合就執行之後的陳述句，直到遇到 `break`，則離開 `switch` 區塊，如果沒有符合的整數、字元、字串，則會執行 `default` 後的陳述句，`default` 不一定需要，如果沒有預設要處理的動作，可以省略 `default`。

## 迴圈
在 Java 中如果要進行重複性指令執行，可以使用 for 迴圈式或 while 迴圈
### for
```java
for (初始式; 執行結果必須是boolean的重複式; 重複式) {  
    陳述句;   
}
```
### while
```java
while (條件式) {  
    陳述句;   
}
```
### do...while
```java
do {   
    陳述句;   
} while (條件式);
```
### break
跳出迴圈
### continue
進行下一次迴圈