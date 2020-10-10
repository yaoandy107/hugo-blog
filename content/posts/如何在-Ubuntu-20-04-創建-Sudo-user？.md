---
title: 如何在 Ubuntu 20.04 創建 Sudo user？
date: 2020-05-07 17:33:02
tags:
- Linux
- Ubuntu
categories:
- Linux
keywords:
- sudo
- Ubuntu
- 20.04
---

創建 server 後，我們通常都會先在其中創建我們自己的 user 方便操作，同時也會需要有 root 權限才能操作更多指令。

> 每個 Linux 發行版對於創建 sudo 使用者的操作都是大同小異，但可能會有一些差別，因此這邊紀錄了 Ubuntu 20.04 的 sudo 使用者創建方式。

1. 以 root 身份登錄到你的伺服器。

   > 將下面 server_ip_address 替換為你伺服器的 ip

   ```shell=
   ssh root@server_ip_address
   ```

   <!--more-->

2. 使用 `adduser` 指令將新用戶添加到你的系統

   > 將下面 username 替換為你要創建的用戶

   ```shell=
   adduser your_username
   ```

3. 設置 user 的密碼和資訊

   > 第 3 點的資料可以隨便填或留空

   ![截圖 2020-05-07 下午5.37.08拷貝](https://i.loli.net/2020/05/07/WGrwZdnsYP7LpIV.png)

4. 使用 usermod 指令將用戶添加到 wheel 中。

   ```shell
   usermod -aG sudo your_username
   ```

   默認情況下，在 Ubuntu 上，sudo 群組裡的成員具有 sudo 權限。

5. 在 user 上測試 sudo 訪問權限

   - 使用該 su 命令切換到新的 user 。

      ```shell=
      su - your_username
      ```

   - 測試是否擁有 root 權限

      ```shell=
      sudo ls -la /
      ```

   - 第一次使用 sudo 時，系統會提示你輸入 user 的密碼。輸入密碼以繼續，如果您前面操作正確，則會以 root 權限來執行。

      ```shell=
      Output:
      [sudo] password for username:
      ```

   

