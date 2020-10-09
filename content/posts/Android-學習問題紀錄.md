---
title: Android 學習問題紀錄
date: 2018-02-28 14:46:05
tags:
- Android
categories:
- Android
keywords:
- android
description:
---

## 紀錄 1
### 問題
在 OkHttp 的 onResponse 中使用 Toast 會噴錯，但 Retrofit 不會。
<!--more-->

### 原因
OkHttp 不是執行在 UI Thread，但 Retrofit 是。

## 紀錄 2
### 問題
在 OkHttp  的 onResponse 中使用 Toast 會噴錯。

### 原因
OkHttp 不是執行在 UI Thread。

### 解法
```java
// 解法1
Handler handler = new Handler(Looper.getMainLooper());
handler.post(new Runnable() {
    @Override
    public void run() {
        // TODO
    }
});
// 解法2
activity.runOnUiThread(new Runnable() {
    @Override
    public void run() {
        
    }
});
```