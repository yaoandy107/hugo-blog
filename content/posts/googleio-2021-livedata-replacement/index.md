---
title: "Google I/O 2021：LiveData 即將被取代？"
date: 2021-10-02T22:34:24+08:00
cover:
  image: cover.jpg
  relative: true
categories: 
  - Android
tags:
  - Android
  - LiveData
  - Flow
---

在 Google I/O 2021 的 Q&A 中，有一個有趣的問題被提起：Is LiveData going to be deprecated? 翻譯成中文的意思就是，LiveData 會被棄用嗎？

應該有一些人看到這問題被嚇到，想說 LiveData 不是近幾年才出現的嗎？怎麼沒多久就要面臨這問題（囧。

這問題其來有因，讓我們從 LiveData 的出現開始說起吧！

## LiveData 的出現


LiveData 在 2017 隨著 Google 推行的 MVVM 架構一同出現，其目的是為了協助使用者實作 MVVM 中 ViewModel 的雙向綁定。LiveData 實做方式是用觀察者模式，這讓很多人聯想到 RxJava，甚至常被拿來與 RxJava 做比較。這邊篇幅有限，因此不會贅述其差異，有興趣的可以自行去了解。
> 備註：雖然 RxJava 和 LiveData 都是使用觀察者模式，但其目的和應用場境都有些差異，因此放在一起比較誰好誰壞沒有意義。


## LiveData 的特色


因為 LiveData 簡單易用的特性，使它很適合用來處理資料與介面之間的綁定。當資料更新時，它可以自動去更新介面。同時，它結合了另一個 Jetpack 套件 — Lifecycle，讓它只會在介面處於 STARTED 或 RESUMED 的時候，才會觸發更新，避免許多生命週期的問題。

或許有人會覺得 RxJava 不就可以做到一樣的事情了嗎？確實，上面提到的需求 RxJava 都可以實現，但 RxJava 使用起來遠比 LiveData 複雜，因此在簡單的場景，LiveData 更能勝任，所以常會看到一些文章或專案將 LiveData 與 RxJava 互相搭配使用。

## Kotlin Flows 的出現


今年隨著 Kotlin 的 Flows 逐漸完善，以及 Kotlin 本身越來越普及。因此開始看到越來越多文章建議使用 Flows 來取代 RxJava 和 LiveData。

## LiveData 真的會被棄用嗎？


在 Google I/O 2021 的回答是：LiveData 不會被棄用，因為兩個原因：  
1. Flows 是 Kotlin Coroutine 的一部分，因此在 Java 中還是需要它  
2. LiveData 上手起來比較簡單

總而言之，LiveData 大概還能活一段時間，但隨著越來越多專案開始全面使用 Kotlin，其使用機會可能會越來低，而未來 Flows 也將取代 RxJava 和 LiveData 成為主流，因此最終我還是要加緊腳步來學習 Kotlin Flows 啦！

## 結論

- 如果你是以下幾種狀況，推薦使用 LiveData
	- 初學者，並且在尋求簡單好上手的做法
	- 專案中使用到 Java
- 其餘情況都推薦使用 Flow 來代替 LiveData
