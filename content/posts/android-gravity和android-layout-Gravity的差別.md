---
title: 'android:gravity 和 android:layout_gravity 的差別'
date: 2018-01-20 15:01:10
tags: 
- Android
categories:
- Android
keywords:
- android
- layout
description:
---
在 Android 介面設計中，常會用到  android:gravity 和 android:layout_gravity 兩種屬性，但卻容易被搞混，因此這邊做簡單的介紹，讓大家釐清差別。
<!--more-->
```android:gravity``` 是作用在 view 裡的內容．比如一個 button 上面的 text。你可以設置該 text 在 view 裡是靠左、靠右等位置。

```android:layout_gravity``` 是用來設置該 view 相對於父 view 的位置。比如一個 button 在 LinearLayout 裡，你想讓該 button 在 LinearLayout 裡是靠左、靠右等位置。