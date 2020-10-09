---
title: SQL 語法筆記
date: 2018-10-31 00:52:49
tags:
- SQL
- 筆記
categories:
- SQL
keywords:
- sql
description:
---

## 基本語法
### 創建資料表
`CREATE TABLE`
```sql=
CREATE TABLE table_name (
   column_1 data_type, 
   column_2 data_type, 
   column_3 data_type
);
```
```sql=
CREATE TABLE celebs (
    id INTEGER,
    name TEXT, 
    age INTEGER
);
```
```sql=
CREATE TABLE celebs (
   id INTEGER PRIMARY KEY, 
   name TEXT UNIQUE,
   date_of_birth TEXT NOT NULL,
   date_of_death TEXT DEFAULT 'Not Applicable',
);
```
1. `PRIMARY KEY`：可用於資料的唯一識別，不能重複，一個資料只能有一個欄位是 `PRIMARY KEY`。

2. `UNIQUE`：與 `PRIMARY KEY` 很像，不過它可以設置在一個資料的多個欄位

3. `NOT NULL`：強制該欄位一定要給定值

4. `DEFAULT`：如果欄位沒有值，會自動定預設值
<!--more-->


### 刪除資料表
`DROP DATABASE`
```sql=
DROP DATABASE table_name;
```

### 新增資料
`INSERT INTO`

```sql=
INSERT INTO table_name (id, name, age)
VALUES (1, 'Justin Bieber', 21);

SELECT * FROM table_name;
```
### 資料表查詢
`SELECT`

```sql=
SELECT column_name FROM table_name;
```

```sql=
SELECT * FROM table_name;
```

### 更新資料
`UPDATE`
```sql=
UPDATE celebs
SET age = 22
WHERE id = 1;
```
### 改變資料表欄位
`ALTER TABLE`
- 新增欄位
    ```sql=
    ALTER TABLE celebs 
    ADD COLUMN twitter_handle TEXT;
    ```
- 刪除欄位
    ```sql=
    ALTER TABLE celebs
    DROP COLUMN twitter_handle;
    ```
- 修改欄位
    - SQL Server / MS Access
        ```sql=
        ALTER TABLE celebs
        ALTER COLUMN twitter_handle INTEGER;
        ```
    - My SQL / Oracle (prior version 10G)
        ```sql=
        ALTER TABLE celebs
        MODIFY COLUMN twitter_handle INTEGER;
        ```
    - Oracle 10G and later
        ```sql=
        ALTER TABLE celebs
        MODIFY twitter_handle INTEGER;
        ```
### 刪除資料
`DELETE FROM`
```sql=
DELETE FROM celebs
WHERE twitter_handle IS NULL;
```

## 進階查詢語法
### `SELECT`
查詢結果顯示 name, genre, year
```sql=
SELECT name, genre, year
FROM movies;
```
### `AS`
可以改變查詢結果的欄位名稱，但不會改掉資料表裡的欄位
```sql=
SELECT imdb_rating AS 'IMDb' 
FROM movies;
```

### `SELECT DISTINCT`
去掉的重複的查詢結果
- 去掉 year 重複的結果
```sql=
SELECT DISTINCT year
FROM movies;
```
- 去掉 year 和 name 都重複的結果
```sql=
SELECT DISTINCT year, name
FROM movies;
```

### `WHERE`
篩選資料用的
```sql=
SELECT *
FROM movies
WHERE year > 2014;
```

| 運算子 | 作用  |
|-      |-     |
| =  | 等於     |
| != | 不等於   |
| >  | 大於     |
| <  | 小於     |
| >= | 大於等於  |
| <= | 小於等於  |

> 「等於」要特別注意，只有一個等號

### `LIKE`
可以在 `WHERE` 子句中使用 `LIKE` 運算子來進行模糊搜尋

```sql=
SELECT *
FROM movies
WHERE name LIKE 'Se_en';
```

> _ 代表任意字元

```sql=
SELECT * 
FROM movies
WHERE name LIKE 'A%';
```
- `A%` 代表由 A 開頭
- `%A` 代表由 A 結尾
- `%man%` 代表所有含有 man 的字串

### `NULL`
`NULL` 不能拿來用運算子進行比較，因此出現 `IS NULL`、`IS NOT NULL` 來判斷是否是 `NULL`。

- 顯示具有 imdb_rating 的資料
```sql=
SELECT name
FROM movies 
WHERE imdb_rating IS NOT NULL;
```

### `BETWEEN`
可以在 `WHERE` 子句中使用 `BETWEEN` 運算子來篩選出特定範圍區間得值

篩選出 name 開頭為 'A'、'B'、'C' 的結果
```sql=
SELECT *
FROM movies
WHERE name BETWEEN 'A' AND 'D';
```

篩選出 year 在 1990 ~ 1999 區間的結果
```sql=
SELECT *
FROM movies
WHERE year BETWEEN 1990 AND 1999;
```

> `BETWEEN` 兩個字串，會不包含結尾
> `BETWEEN` 兩個數字，會包含結尾的數字

### `AND`
```sql=
SELECT * 
FROM movies
WHERE year BETWEEN 1990 AND 1999
   AND genre = 'romance';
```
![](https://i.imgur.com/G4B1Tcj.png)

### `OR`
```sql=
SELECT *
FROM movies
WHERE genre = 'romance'
	OR genre = 'comedy';
```
![](https://i.imgur.com/qRNYsa9.png)

### `ORDER BY`
用來排序結果

> 如果 `WHERE` 存在，`ORDER BY` 永遠跟在 `WHERE` 後面

- DESC：從大道小排序
- ASC：從小到大排序（預設）

### `LIMIT`
用來限制查詢結果數量

```sql=
SELECT *
FROM movies
ORDER BY imdb_rating DESC
LIMIT 3;
```

> 永遠放在查詢語法最後面


> 不是所有 RDBMS（關聯式資料庫管理系統） 都有

### `CASE`
SQL 中的判斷式，可以用在顯示結果加上新欄位

> `CASE` 通常在 SELECT 語句中

* `WHEN` 後面接著條件式，如果條件式為真，會返回 `THEN` 後面的字串
* `ELSE` 會在前面條件式都不符合的時候，返回一個字串
* `CASE` 結尾一定要有一個 END
* 可以在 `END` 後面接 AS 來簡稱該條件的欄位名稱

```sql=
SELECT name,
    CASE
        WHEN genre = 'romance' THEN 'Chill'
        WHEN genre = 'comedy' THEN 'Chill'
        ELSE 'Intense'
    END AS 'Mood'
FROM movies;
```

## 計算函式
### `Count`
計算指定欄位非空資料的總數
```sql=
SELECT COUNT(*) 
FROM fake_apps
WHERE price = 0;
```
### `SUM`
加總指定欄位的值

```sql=
SELECT SUM(downloads)
FROM fake_apps;
```

### `MAX` / `MIN`
求指定欄位的最大或最小值
```sql=
SELECT MIN(downloads)
FROM fake_apps;
```

### `AVERAGE`
求指定欄位的平均值
```sql=
SELECT AVG(price)
FROM fake_apps;
```

### `ROUND`
將指定資料四捨五入
```sql=
SELECT ROUND(AVG(price), 2)
FROM fake_apps;
```
## 彙總函式
### `GROUP BY`
用來搭配 SELECT 語句，將指定欄位中，相同資料的放在一組，以便計算函式以組為單位進行計算

> `GROUP BY` 會出現在 `WHERE` 之後，`ORDER BY` 和 `LIMIT` 之前

```sql=
SELECT category, SUM(downloads) 
FROM fake_apps
GROUP BY category;
```

`GROUP BY` 後面的參數可以接數字，從 1 開始，分別代表 SELECT 後面的第幾個值

```sql=
SELECT category, 
   price,
   AVG(downloads)
FROM fake_apps
GROUP BY 1, 2;
```
以上面的例子來說，`GROUP BY` 後面的 1、2 分別指向 category 和 price

### `HAVING`
與 `WHERE` 類似，不過他是針對 Group


> `HAVING` 會出現在 `GROUP BY` 之後，`ORDER BY` 和 `LIMIT` 之前

```sql=
SELECT price, 
   ROUND(AVG(downloads)),
   COUNT(*)
FROM fake_apps
GROUP BY price
HAVING COUNT(*) > 10;
```

## 表格連接
### `JOIN`
使用方法：`JOIN` 表格名稱 `ON` 連接欄位規則
> 連接後會自動補 `NULL`
```sql=
SELECT *
FROM orders
JOIN customers
  ON orders.customer_id = customers.customer_id;

```

### `INNER JOIN`
使用方法：`INNER JOIN` 表格名稱 `ON` 連接欄位規則
> 會自動將不符合連接欄位規則的部分捨棄，如下圖

![](https://s3.amazonaws.com/codecademy-content/courses/learn-sql/multiple-tables/inner-join.gif)

```sql=
SELECT COUNT(*)
FROM newspaper
JOIN online
ON newspaper.id = online.id;
```