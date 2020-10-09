---
title: Mac 下使用 Shadowsocks 翻牆
date: 2018-01-20 15:45:09
tags:
- MacOS
- Shadowsocks
- 翻牆
categories:
- Shadowsocks
keywords:
- MacOS
- Shadowsocks
- 翻牆
- ShadowsocksX-NG
- SS
- 科學上網
description:
---
這邊教大家如何使用 ShadowsocksX-NG 來進行 Shadowsocks 代理，以達到 **翻牆** 效果。
<!-- more -->
## 下載 ShadowsocksX-NG
GitHub 載點：https://github.com/shadowsocks/ShadowsocksX-NG/releases/

![](https://imgur.com/rputoJL.png)

## 編輯代理伺服器
點擊「紙飛機」選擇「Server」，然後點擊【Server Preferences...】選項：

![](https://i.imgur.com/PjwfSrC.png)

新增 Shadowsocks 服務配置：

![](https://i.imgur.com/BQM68VU.png)

## 更改代理模式
預設模式為 ```Proxy Auto Configure Mode```，這邊我們將它改為 ```Global Mode```，使所有對外連線都使用 ```Shadowsocks```，且無需特別設定。

如要使用 ```Proxy Auto Configure Mode```，會需要額外設定，這邊就不多做敘述。

![](https://i.imgur.com/FnjA0Up.png)

## 測試是否成功
訪問 ```orange.tw``` 來查看自己的 IP 是否有變更。

![](https://i.imgur.com/5q9MBsg.png)

## 關閉 Shadowsocks
點擊【Turn Shadowsocks Off】來關閉 Shadowsocks。

![](https://imgur.com/k4WvIRT.png)