---
title: "[Android] Error：Fragment already added"
date: 2017-12-19 21:46:44
tags:
  - Android
  - Fragment
  - Error
categories:
  - Android
keywords:
  - android
  - fragment
  - error
description:
---
## 遇到狀況
    java.lang.IllegalStateException: Fragment already added
<!--more-->
## 原因
Fragment 在一些狀況不會正常移除

## 原本程式碼
```java=
FragmentTransaction transaction = getFragmentManager().beginTransaction();
transaction.replace(R.id.fragment_container, newFragment);
transaction.addToBackStack(null);
transaction.commit();
```

## 解決辦法
因為replace有時會出現問題，因此在使用之前先確認Fragment是否被Added。
```java=
if(mFragment.isAdded())
{
     return; //or return false/true, based on where you are calling from
}
```

## 後來程式碼
```java=
FragmentTransaction transaction = getFragmentManager().beginTransaction();
if (newFragment.isAdded()) {
    return;
}
transaction.replace(R.id.fragment_container, newFragment);
transaction.addToBackStack(null);
transaction.commit();
```