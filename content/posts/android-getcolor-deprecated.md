---
title: "Android: getColor(int id) deprecated"
date: 2017-12-20 12:27:18
tags: 
  - deprecated 
  - Android
categories: 
  - Android
keywords: 
  - android 
  - deprecated
description:
---
從 Android 6 開始，一個新的 getColor() 方法出現，舊的 Resource.getColor(int id) 則被廢棄。
<!--more-->
新方法：
```java=
context.getColor(id);
```

如果要兼容 Android 6 以下的版本，建議使用 Support Library v4 的方法：

```java=
ContextCompat.getColor(context, R.color.your_color);
```

此方法來自官方 JavaDoc 的描述：

> Returns a color associated with a particular resource ID
>
> Starting in M, the returned color will be styled for the specified Context's theme.

這是 ContextCompat.getColor() 的程式碼：
```java=
public static final int getColor(Context context, @ColorRes int id) {
    if (Build.VERSION.SDK_INT >= 23) {
        return context.getColor(id);
    } else {
        return context.getResources().getColor(id);
    }
}
```

如果不想導入 Support Library v4，可以直接參考上面的寫法。