---
title: Hexo+GitHub，新手也可以快速建立部落格
tags:
  - Hexo
  - NexT
  - 教學
categories:
  - Hexo
keywords:
  - 部落格
  - hexo
  - next
  - github
  - SEO
  - sitemap
  - 教學
date: 2017-12-19 16:43:39
description:

---
之前使用過 Wordpress 一段時間，但發現了 Hexo 更方便，所以這邊來紀錄一下使用過程。
<!--more-->
## Hexo 優點
1. 因為建立於本地端，所以可以更方便離線進行編輯
2. 可以不需要一台伺服器
3. 文章編輯使用 Markdown 語法，更方便、通用、容易上手
4. 部署於 GitHub 上，完全零成本
5. 中文兼容性高
6. 可快速搭建優質的部落格

## 開始之前
建議先了解，cmd 或是 bash 指令
之後所有指令以 '$' 開頭，皆為 bash 指令
​    
    有任何問題，都歡迎留言詢問唷～

## 建制步驟
### 安裝 Node.js
去 [Node.js](https://nodejs.org/en/) 官網下載安裝

### 安裝 Hexo Git
```shell=
$ npm install hexo-deployer-git --save
```

### 安裝 Hexo
使用 npm 來安裝 hexo (須先安裝 Node.js)
```shell=
$ npm install hexo-cli -g
```
安裝成功後，輸入以下指令可查看版本
```shell=
$ hexo version
```
接下來即可初始化我們的部落格了
```shell=
$ hexo init blog       # 初始化 blog
$ cd blog              # 移動到剛創建的 blog 資料夾裡
$ npm install		# 安裝相關套件
```

### 將 Hexo 配置到 GitHub
去 [GitHub](https://github.com/) 官網登入。
新增一個倉庫(Repositories)

![](https://i.imgur.com/hC3eCNY.png)

倉庫名稱為 yourname.github.io

> 上面的 yourname 請替換成你 GitHub 的帳號名稱

![](https://i.imgur.com/72ZXHCJ.png)

看到這頁代表即可退出

![](https://i.imgur.com/tLiMyDf.png)

再來到 blog 資料夾下找一個 _config.yml 的檔案，這是 Hexo 的全域配置文件
![](https://i.imgur.com/OjTrXMX.png)

開啟之後，拉到檔案最底部，可以看到
```shell=
deploy:
  type: 
```

將以下資訊對應輸入
```shell=
deploy:
  type: git
  repository: http://github.com/yourname/yourname.github.io.git
  branch: master
```
> 設定中的 ":" 後一定要有一個空格
> 將上面的 yourname 改成妳的 GitHub 帳號名稱

產生靜態文件後，部署上 GitHub
```shell=
$ hexo d -g
```

再來就可以上 https://yourname.github.io/ 查看是否部署成功
成功之後，就可以開始做一些優化和寫文章啦。

> 將上面的 yourname 替換成你 GitHub 的帳號名稱

## Hexo 配置檔介紹
_config.yml 是 hexo 的預設設定黨，其設定是用 yaml 格式編寫。

**yaml 檔裡，":"後一定要有一個空格**
下面是 hexo 的預設配置，可以自修改。
```yaml=
# Site
title: /標題(會顯示在網頁標題與頁首)/
subtitle: /子標題(顯示在頁首)/
description: /內容描述(給搜尋引擎看的)/
author: /作者(顯示在頁尾)/
language: /網站預設語言(台灣:zh-tw)/
timezone: /時區(預設使用你電腦的時區)/

# URL
url: /網站的網域位址/
root: /網站根目錄/
permalink: /文章目錄(預設使用 YYYY\MM\DD\文章名稱)/

# Extensions
theme: /網站的佈景主題/
       (可以到"https://hexo.io/themes/"下載喜歡的佈景放置到 theme 目錄裡)

# Deployment
deploy:
    type: /發佈型態/ 例如(git、heroku、rsync、openshift、ftpsync)
    repository: /部署位置/ 例如(git@github.com:帳號/REPO名.git)
    branch: /分支/ 例如(master、gh-pages)
    message: /部署訊息/
```

## 使用 NexT 主題
本站使用主題為 NexT.Pisces 主題。
如何使用，可以參考 [官方教學文件](http://theme-next.iissnan.com/getting-started.html)，上面寫的很詳細，而且是中文的教學！

## 發布文章
創建文章
```shell=
$ hexo new [postName]
```
*備註：將 [postName] 換成你的文章名稱 (以英文尤佳)*

前往 source / _post 資料夾中，打開 [postName].md 文件，在最下面新增 [Markdown](https://wastemobile.gitbooks.io/gitbook-chinese/content/format/markdown.html) 語法的內容。

修改完後，執行以下指令，就可以將新的變更發佈到部落格上囉！

```shell=
$ hexo d -g    # d = 部署, g = 生成
```
等一段時間，就可以看到你剛剛打的文章囉！

如果你要先在本地端看看效果，也可以改成以下指令
```shell=
$ hexo server
```

**不熟悉 Markdown 的人**，可以去看看這篇 [Markdown 語法教學](https://wastemobile.gitbooks.io/gitbook-chinese/content/format/markdown.html)

如果想**嘗試編寫 Markdown**，或是想**找一個好用的Markdown 編輯器**，可以嘗試使用 [HackMD](https://hackmd.io/recent)。

## 刪除文章
首先進入到 source / _post 資料夾中，找到 helloworld.md 文件，在本地直接執行刪除。
![](https://i.imgur.com/QSV6q2a.png)

執行以下指令
```shell=
$ hexo clean    # 清除快取檔案和已產生的靜態檔案。
$ hexo d -g     # d = deploy, g = generate
```
等一段時間，就會發現那篇文章已經消失囉！

## 使用第三方擴充服務
本站有使用以下第三方服務，有興趣可以去看看。
1. [DISQUS](http://theme-next.iissnan.com/third-party-services.html#disqus)：評論系統
2. [Local Search](http://theme-next.iissnan.com/third-party-services.html#local-search)：搜尋系統
3. [文章摘要顯示使用](https://skylake.tw/2017/09/29/hexo-buildup/#wen-zhang-zhai-yao-xian-shi-shi-yong)：優化主頁文章摘要
4. [不蒜子统计](http://theme-next.iissnan.com/third-party-services.html#analytics-busuanzi)：瀏覽量統計

## 客製化設定
本站參考了以下幾篇文章，修改了一些顯示效果，有興趣可以看看。
1. [修改文章底部的那个带#号的标签](http://shenzekun.cn/hexo%E7%9A%84next%E4%B8%BB%E9%A2%98%E4%B8%AA%E6%80%A7%E5%8C%96%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B.html#6-%E4%BF%AE%E6%94%B9%E6%96%87%E7%AB%A0%E5%BA%95%E9%83%A8%E7%9A%84%E9%82%A3%E4%B8%AA%E5%B8%A6-%E5%8F%B7%E7%9A%84%E6%A0%87%E7%AD%BE)
2. [動態背景](https://reuixiy.github.io/technology/computer/computer-aided-art/2017/06/09/hexo-next-optimization.html#动态背景)

## 登錄搜尋引擎
如果只支援 Google 可以參考這篇 [Next+Google Webmaster tools](http://theme-next.iissnan.com/third-party-services.html#google-webmaster-tools)，
如果也想支援百度，可以參考這篇 [Hexo+Next主题博客提交百度谷歌收录](http://www.helloshawn.cn/2016/Hexo-Next%E4%B8%BB%E9%A2%98%E5%8D%9A%E5%AE%A2%E6%8F%90%E4%BA%A4%E7%99%BE%E5%BA%A6%E8%B0%B7%E6%AD%8C%E6%94%B6%E5%BD%95.html#%E9%AA%8C%E8%AF%81%E7%BD%91%E7%AB%99)。

    GitHub 會擋百度爬蟲。如果你建在 GitHub 上，百度會搜尋不到

## SEO 優化
可以參考這篇，[基于Hexo中Next主题的SEO优化指南](http://blog.mobing.net/content/hexo/hexo-next-seo.html)。

## 強化 Markdown renderer
執行以下指令，將原生 Markdown 改為 Markdown-it
```shell=
$ npm un hexo-renderer-marked --save    # 刪除原生 Markdown
$ npm i hexo-renderer-markdown-it --save    # 安裝 Markdown-it
```

## 新增標籤頁
可以參考 NexT 官網的這篇教學 [添加「标签」页面](http://theme-next.iissnan.com/theme-settings.html#tags-page)。

## 新增分類頁
可以參考 NexT 官網的這篇教學 [添加「分类」页面](http://theme-next.iissnan.com/theme-settings.html#categories-page)。

## 新增關於頁
可以參考 NexT 官網的這篇教學 [Hexo about页面怎么写 Next关于页面怎么设置](http://www.5isjyx.com/coding/201704/hexonextabout.html)。

## 性能優化
性能優化最主要的就是壓縮網頁大小，一開始有試過使用大多數人推的 `hexo-neat`，但結果一直失敗QwQ
因此決定改用 gulp 來做壓縮。

可以參考這篇：
[Hexo使用Gulp压缩静态资源](https://www.voidking.com/dev-hexo-gulp/)


## 參考資料
[Hexo部落格建立筆記 | SkyLake's Blog](https://skylake.tw/2017/09/29/hexo-buildup/#rang-nex-t-zhu-ti-de-list-bu-zhi-you-yuan-xing)
[Hexo 官方網站](https://hexo.io/zh-tw/index.html)
[NexT 官方網站](http://theme-next.iissnan.com/)