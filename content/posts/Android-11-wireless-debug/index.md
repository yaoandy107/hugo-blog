---
title: "Android 11 新增無線偵錯 (Wireless Debugging)"
date: 2020-10-10T03:57:04+08:00
draft: false
toc: false
cover:
    image: "cover.jpg"
    relative: true
categories:
  - Android
tags:
  - Andriod
  - Debug
---

不久前 Android 11 正式發布，可以看到有許多很酷炫的新功能，其中對身為 Android 開發者的我來說最興奮的應該就是「無線偵錯」了，這樣出門就可以更方便的開發了，因此趁著這段空閑就來試試看！

<!--more-->

## 一、過去

在 Android 11 以前，要安裝 App 到手機上只有兩種方式：

1. **USB 傳輸線**
2. **ADB Over Wireless：** 這方法使用的是 ADB 的 `tcpip` 和 `connect` 指令來連接兩個裝置，但在第一次連接的時候，還是得插上傳輸線，且當中斷後要重新連上時，也還是得再次插上傳輸線。

這些方法都有一些局限性，因此之前一直在期待說未來會不會有更方便的方式呢？

## 二、現在 - Android 11

無線偵錯（Wireless Debugging）是 Android 11 的新功能，可以透過 WiFi 來連結兩裝置，這也是仰賴了新的 ADB 指令 - `pair` 才得以達成。它相較過往的方式有幾項優點：

- 不需要 USB 傳輸線
- 不需要額外安裝任何東西
- 只要開啟「無線偵錯」就可以自動重新連接

## 三、無線偵錯 Wireless Debugging

### 前提條件

- 手機版本 ≥ Android 11
- SDK platform-tools 版本 ≥ 30.0.0
- 手機與電腦連上同一個 WiFi

### 步驟 -  Android 11 手機

1. 點擊 設定 → 開發人員選項 → 允許「無線偵錯」
2. 點擊 無線偵錯 → 使用配對碼配對裝置
   
    ![](https://i.imgur.com/Fcq0AaP.jpg)

3. 紀錄「Wi-Fi 配對碼」及「IP 位址和通訊埠」，後面會用到
   
    ![](https://i.imgur.com/YWVcNsE.jpg)


### 步驟 - 電腦

1. 安裝 ADB
    - 已安裝 Android Studio → 可以在 Android SDK 底下的 platform-tools 資料夾中找到 `adb`
    - 未安裝 Android Studio → 可以在 Google 上找到很多方法，這邊就不贅述了
2. 在 terminal 中執行 `adb pair ipaddr:port` 
    - `ipaddr`：填入上面步驟 3 取得的 IP
    - `port`：填入上面步驟 3 取得的 port
3. 輸入「Wi-Fi 配對碼」。成功後會顯示訊息配對成功的訊息。

    ```bash
    Enter pairing code: 482924
    Successfully paired to 192.168.0.106:37117 [guid=adb-08141JEC216786-neR228]
    ```

4. 若 Android Studio 上還是找不到該裝置，則需要手動執行 `adb connect ipaddr:port` 來連接。**IP 和 port 請使用下方這組，千萬不要用到上面那組喔！！**
   
    ![](https://i.imgur.com/nKO9e2U.jpg)

