---
title: 解決 Android Studio 卡頓的問題
date: 2018-01-20 13:01:25
tags: 
- Android Studio
categories:
- Android Studio
keywords:
- android studio
- 卡頓
- 當當的
description:
---
## 問題描述
在使用 Macbook Pro 13 2017 開發案子，發現 Android Studio 會常常出現卡頓。
<!-- more -->
## 解決辦法
上網查了一下，發現不少人都有這種狀況。問題好像是出在 Android Studio 的啟動參數限制了 JVM 獲得足夠的記憶體，導致了運行時只能頻繁的與磁盤交換。
因此我們要修改一下 Android Studio 的 JVM 參數文件，他的問位置在：
```
/Applications/Android\ Studio.app/Contents/bin/studio.vmoptions
```
在我的電腦上，參數預設是：
```
-Xms256m
-Xmx1280m
-XX:ReservedCodeCacheSize=240m
-XX:+UseCompressedOops
```
在修改重要設定檔之前，建議先做備份：
```
cd /Applications/Android\ Studio.app/Contents/bin/
cp studio.vmoptions studio.vmoptions.bak
```
以上為 bash 指令，請打開 terminal 輸入。

第一句是移動到存放 studio.vmoptions 的資料夾底下
第二句是將 studio.vmoptions 複製一份備份，並將其命名為 studio.vmoptions.bak

然後修改 studio.vmoptions 成這樣：
```
-Xms512m
-Xmx2048m
-XX:ReservedCodeCacheSize=768m
-XX:+UseCompressedOops
```
如果覺得你記憶體足夠大，可以將 ```-Xmx``` 後面的數字改更大。我的電腦為記憶體為 8G，因此我設 2048m。