---
title: "[Android] 在 static method  中取得 String Resource"
date: 2017-12-21 19:29:30
tags: 
  - Android
categories:
  - Android
keywords:
  - android
  - static
  - string resource 
---
## 遇到問題
最近在寫一個 Singleton 的類別時，遇到需要透過 Resource id 取得 string 的需求，原本想用 context.getString(int resId) 的方式取得，但發現 Context 不適合被 static 成員或類別引用，會導致內存泄露。
<!--more-->
	static 成員生命週期會隨著 app 開始到結束。
	如果引用到 Context、Activity，會導致 Context、Activity 也跟著無法被回收，導致內存泄露。

## 解決辦法
使用 Resources.getSystem().getString(int resId) 來取得 String。

## 參考資料
https://segmentfault.com/q/1010000008131979
https://stackoverflow.com/questions/3822732/android-getstringr-string-in-static-method