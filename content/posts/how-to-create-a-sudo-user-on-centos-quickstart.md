---
title: 如何在 Centos 7 創建一個 Sudo user
date: 2017-12-31 00:20:47
tags: 
- CentOS 
- Linux 
- 教學
categories: 
- Linux
keywords: 
- CentOS 
- Linux 
- 教學
description:
---

1. 以 root 身份登錄到你的伺服器。
    ```shell=
    ssh root@server_ip_address
    ```
<!--more-->
2. 使用 adduser 指令將新用戶添加到你的系統

    將 username 替換為你要創建的用戶
    ```shell=
    adduser username
    ```
    - 使用 passwd 指令更新 user 密碼
    ```shell=
    passwd username
    ```
    - 設置 user 的密碼的顯示訊息
    ```shell=
    Set password prompts:
    Changing password for user username.
    New password:
    Retype new password:
    passwd: all authentication tokens updated successfully.
    ```
3. 使用 usermod 指令將用戶添加到 wheel 中。
    ```shell=
    usermod -aG wheel username
    ```
    默認情況下，在 CentOS 上，wheel 的成員具有 sudo 權限。
    
4. 在 user 上測試 sudo 訪問權限
    - 使用該 su 命令切換到新的 user 。
    ```shell=
    su - username
    ```
    - 作為 user ，請通過將“sudo”添加到要以超級用戶權限運行的命令來驗證是否可以使用 sudo。
    
    例如，您可以列出根目錄的內容，/ 通常只能由 root 用戶訪問。
    ```shell=
    sudo ls -la /
    ```
    - 第一次使用 sudo 時，系統會提示你輸入 user 的密碼。輸入密碼以繼續。
    ```shell=
    Output:
    [sudo] password for username:
    ```
    如果您前面操作正確，則使用 sudo 來執行的指令會以 root 權限執行。


