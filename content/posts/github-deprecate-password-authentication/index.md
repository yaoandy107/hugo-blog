---
title: "GitHub 將取消基於密碼的驗證機制"
date: 2020-12-30T19:07:57+08:00
draft: true
toc: false
cover: cover.jpg
useRelativeCover: true
categories:
  - untagged
tags:
  - untagged
---

今天我突然收到來自 GitHub 的警告信，標題為 **[GitHub] Deprecation Notice**，其內容大致上是在建議使用者升級 Git 客戶端的版本，後來查看其中附的連結後發現 GitHub 公佈了一項新政策：
> **GitHub 將在 2021 年 8 月 13 日禁止所有基於帳密的驗證機制，以提升帳密的安全性。**

<!-- more -->

## 有什麼影響？

目前會影響到的只有需要輸入帳號密碼的驗證方式（不包括 OAuth），所以若之前是使用 **SSH 驗證** 或是 **二階段驗證**，則不在影響範圍內。

## GitHub 為什麼要這麼做呢？

這更改是為了提升帳密的安全性，同時改用 token 驗證取代也有以幾項好處：

1. 允許針對 Token 來調整不同的存取的權限
2. 可以任意撤銷發出去的 token，且不影響原本的帳密設定
3. 可以根據不同使用者及需求產生獨一無二的 token，同時也避免帳號密碼留存在電腦中

## 未來該怎麼做呢？

若你是在影響範圍內，只要升級 Git 的版本就沒問題囉！

## 參考

[Token authentication requirements for Git operations - The GitHub Blog](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)

> **若喜歡我的文章，可以點擊下方拍手給予我鼓勵唷～**