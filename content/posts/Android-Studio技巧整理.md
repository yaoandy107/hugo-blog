---
title: Android Studio 技巧整理
date: 2018-01-13 13:13:32
tags:   
- Android Studio
- Android
categories: 
- Android
keywords:   
- android studio
- android 
- 插件
- 小技巧
- 快捷鍵
description:
---
最近開始研究 Android Studio，得知一些可以增加開發速度的小技巧，因此在這邊做一下記錄。
<!--more-->
## Live Templates
`Live Templates`：程式碼快速補全模板

這邊列出一些比較常見的 Live Templates，有興趣的人可以自行深入了解。

* `newInstance` - 在 Fragment 中生成 `newInstance` 方法
* `Toast` - 生成 `Toast.makeText(context, "", Toast.LENGTH_SHORT).show();`
* `fbc` - 生成 findViewById
* `const` - 定義一個 android style int 常數
* `logd` - 生成 `Log.d(TAG, "");`
* `logm` - Log 當前方法名稱和參數
* `logr` - Log 當前方法結果
* `logt` - 當前類生成 log tag
* `psf` - public static final
* `sout` - 印出一個字串到 System.out
* `soutm` - 印出當前類名和方法到 System.out
* `soutp` - 印出方法參數和返回值到 System.out
* `visible` - 設置 view VISIBLE
* `gone` - 設置 view GONE
* `noInstance` - private 構造方法

## Android Studio 的自動生成
可以使用 Android Studio 自動幫你生成一些程式碼
* `<expr>.null` 轉換成 `if(<expr> == null)`
* `<expr>.notnull` 轉換成 `if(<expr> != null)`
* `<expr>.var` 轉換成 `T name = <expr>`
* `<expr>.field` 會自動生成一個全局變數 `field = <expr>`
* `<ArrayExpr>.for` 轉換成 `for(T item : <Arrayexpr>)`
* `<ArrayExpr>.fori` 轉換成 `for(int i = 0; i < <Arrayexpr>.length; i++)`
* `<ArrayExpr>.forr` 轉換成 `for(int i = <Arrayexpr>.length - 1; i > 0 ; i--)`

## 插件
下面列出一些我正在使用的插件
1. **Android Drawable Importer**
為了適應所有 Android 螢幕的大小和密度，每個 Android 項目都會包含 drawable 資料夾。任何具備 Android 開發經驗的開發人員都知道，為了支持所有的螢幕尺寸，你必須給每個螢幕類型導入不同的 Drawalbe。Android Drawable Importer 插件能讓這項工作變得更容易。它可以減少導入縮放圖像到 Android 項目所需的工作量。 Android Drawable Importer 添加了一個在不同分辨率導入 Drawble 或縮放指定圖像到定義分辨率的選項。這個插件加速了開發人員的 Drawable 工作。

1. **Lifecycle Sorter**
可以根據 Activity 或者 fragment 的生命週期對其生命週期方法位置進行先後排序，快捷鍵 Ctrl + alt + K。

1. **.ignore**
我們都知道在 Git 中想要過濾掉一些不想提交的文件，可以把相應的文件添加到 .gitignore 中，而 .gitignore 這個 Android Studio 插件根據不同的語言來選擇模板，就不用自己在費事添加一些文件了，而且還有自動補全功能，過濾文件再也不要復製檔名了。我們做項目的時候，並不是所有文件都是要提交的，比如構建的 build 資料夾，本地配置文件，每個 Module 生成的 iml 文件，但是我們每次 add，commit 都會不小心把它們添加上去，而 gitignore 就是解決這種痛點的，如果你不想提交的檔案，就可以在創建項目的時候將這個檔案中添加即可，將一些通用的東西屏蔽掉。

1. **Android Methods Count**
統計 Android 依賴庫中方法的總個數。 (一個 dex 只能接受的 65K 並不是指方法數超過 65K 而報的錯,而是指引用計數超過 65K)

1. **jetbrains-wakatime**
紀錄在 Android Studio 上的工作時間。

1. **Genymotion**
好用的 Android 模擬器，原生模擬器不堪用。

1. **GsonFormat**
快速將 json 字串轉換成一個 Java Bean，免去我們根據 json 字符串手寫對應 Java Bean 的過程。

1. **LayoutFormatter**
一鍵幫你將你的 XML 文件排版，並調整順序。


## 快捷鍵
[完整的快捷键指南](https://resources.jetbrains.com/storage/products/intellij-idea/docs/IntelliJIDEA_ReferenceCard.pdf)


### 參考資料
- [nisrulz/android-tips-tricks](https://github.com/nisrulz/android-tips-tricks)
- [Android Studio插件整理](https://ydmmocoo.github.io/2016/06/28/Android-Studio插件整理/)