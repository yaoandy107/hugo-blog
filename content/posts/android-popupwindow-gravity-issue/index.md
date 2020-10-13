---
title: "[Android] PopupWindow 設置 gravity 無效的問題"
date: 2020-10-13T19:51:44+08:00
draft: false
toc: false
cover: cover.jpg
useRelativeCover: true
categories: 
  - Android
tags:
  - Android
  - PopupWindow
  - Error
---

## 前言

今天在寫公司專案的時候遇到部分 Android 7 的手機，PopupWindow 不會理會設置好的 gravity，會直接跑到頂部。

## 原因

在 [Android Code Search](http://cs.android.com) 追了一下原始碼，發現 Android 7 在執行 PopupWindow.update() 的時候，會將 gravity 重設，因此造成 gravity 被重置為 `Gravity.START | Gravity.TOP`。

有興趣的話可以自己看一下 Google 後來修復的 [commit](https://cs.android.com/android/_/android/platform/frameworks/base/+/9c0d523bc0b1ac3ebba92acb7e5d9675aff08aef:core/java/android/widget/PopupWindow.java;l=1592;drc=085160612d9066e23c96a6cac15eb3a51481fdaf;bpv=1;bpt=0;dlc=798fb798660115845ba42df293baa28b3cc26a03)

## 解法

剛好出問題的那段程式看起來沒有必要使用 `update()`，因此拿掉後問題就修復了。當然如果你一定需要使用 `update()` 的話，可以參考這篇 [SlackOverflow](https://stackoverflow.com/questions/41973893/android-nougat-7-1-1-showatlocation-gravity-not-working)，裡面有各種大神給的解法，這邊就不贅述囉！