---
title: "Google OAuth 登入新帳戶失敗（12502）"
date: 2021-09-02T09:27:22+08:00
cover:
  image: cover.jpg
  relative: true
categories: 
  - Android
tags:
  - Android
---

今天在開發的時候遇到 GoogleSignIn 在 `onActivityResult()` 時回復 status code 12502，需要再一次登入才會成功。查了官方文件，對照的 Constant 是 SIGN_IN_CURRENTLY_IN_PROGRESS，它意思是「登入程序正在進行中，因此無法繼續」。網路上有人提到說如果在 manifest 或是 Intent flag 中將 noHistory 設為 true 也會遇到這問題，但我自己沒設為 true 也遇到（囧

## 重現方式

使用 Google OAuth 登入，點擊「新增其他帳戶」，然後使用剛新增的帳戶來登入，則會遇到 SIGN_IN_CURRENTLY_IN_PROGRESS (12502)，之後再重新點擊同個帳號登入則可以成功。

## 解決方法

在 [googlesamples/google-services](https://github.com/googlesamples/google-services) 上看到有人發類似的 [issue](https://github.com/googlesamples/google-services/issues/345)，但這問題一直 open。下面有人提出 workaround 可以暫時解決這問題：

```kotlin
if (e.getStatusCode() == SIGN_IN_CURRENTLY_IN_PROGRESS) {
    /*
    * https://github.com/googlesamples/google-services/issues/345
    */
    GoogleSignInAccount accountOld = GoogleSignIn.getLastSignedInAccount(activity.getApplicationContext());
    if (accountOld != null) {
        LOG.info("Got cached sign-in");
        handleSignedInAccount(accountOld);
    }   
}
```

不過這解法也不是到很理想，還是期待官方能解決這問題，或至少更詳細的說明發生的原因，不然單純看到 SIGN_IN_CURRENTLY_IN_PROGRESS 會滿問號的（囧

> 如果有人知道更好的解法也歡迎留言讓我知道～

## 參考資料

- [Google new sign in, onActivityResult() not called](https://stackoverflow.com/questions/48726091/google-new-sign-in-onactivityresult-not-called)

- [SignIn Dialog from GoogleSignInClient.getSignInIntent() not returning correct result after rotation](https://github.com/googlesamples/google-services/issues/345)
