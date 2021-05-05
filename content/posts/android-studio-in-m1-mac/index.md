---
title: "在 M1 Macbook 下開發 Android"
date: 2021-05-05T16:56:45+08:00
draft: false
toc: false
cover: cover.jpg
categories: 
  - Android
tags:
  - Android
  - M1
  - Macbook
---

在購買 Macbook Air M1 後，被它的效能和續航驚艷到了，但同時，還有許多應用沒有很好的支援 M1 晶片。所以身為 Android Developer 的我 ，當然要來嘗試在 M1 晶片下運行 Android Studio 看看啦～
<!--more-->

## Android Studio

Android Studio 終於在 Arctic Fox Canary 15 下，終於初步支援 Ｍac M1 晶片啦！終於不用再使用卡卡的 Android Studio 了！目前雖然只是初步的支援，還有不少問題尚待修正，但我相信距離完整支援已經不遠了。詳細可以參考 Android Studio Arctic Fox Canary 的 [Release Notes](https://androidstudio.googleblog.com/2021/04/android-studio-arctic-fox-canary-15.html)。

## 模擬器（Emulator）

AVD Manager 中，目前也終於有支援 M1 晶片的映像檔啦！但可惜的是，目前只有少數幾個版本支援，其中筆者目前只有成功執行 API Level R 的映像檔，其他都無法執行起來。

自己試用下來感覺還滿流暢的，也沒遇到什麼問題，早期版本會遇到的 Chrome 無法使用的問題也已修正。

另外，看到下面的建議訊息不用理會，**R API Level M1 Android Emulator** 運行起來效能不會輸 **Intel® HAXM**，可以安心選用。

![Screen Shot 2021-05-05 at 3.56.59 PM](https://i.imgur.com/TBB18iO.png)

## Gradle

Gradle 在 7.0 開始也支援 M1 晶片了，想體驗 M1 的超強效能，就馬上更新起來吧！詳細可以參考官方的 [Release Notes](https://docs.gradle.org/7.0/release-notes.html)。

## JVM

Android Studio Canary 裡的 JDK 也支援 M1 晶片囉！

![Screen Shot 2021-05-05 at 4.06.50 PM](/Users/yaoandy107/Library/Application Support/typora-user-images/Screen Shot 2021-05-05 at 4.06.50 PM.png)

如果不是使用 Canary 版本，但想要體驗更快的速度，也可以自行安裝 [Azul Zulu Arm64 Open JDK](https://www.azul.com/downloads/zulu-community/?version=java-8-lts&os=macos&architecture=arm-64-bit&package=jdk)，它有提供 M1 ARM 版本的 JVM 唷！

安裝完後，前往「Build, Execution, Deployment」->「Build Tools」->「Gradle」，可以自行調整想要使用的 JVM 版本喔～

![Screen Shot 2021-05-05 at 4.11.10 PM](https://i.imgur.com/TnmpmMG.png)

## 結論

Android 相關的開發工具目前都逐步開始支援 M1 晶片了。整體使用下來，已經能體會到 M1 強大的效能了！但可惜的是，Android Studio 在 M1 晶片下還有許多問題待解決，因此並不適合當主力開發機，但相信距離完全支援已經不遠了！