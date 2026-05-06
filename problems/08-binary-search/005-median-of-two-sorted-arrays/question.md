---
title: Median of Two Sorted Arrays
category: Binary Search / 難問枠
---

# 問題文

昇順にソートされた2つの整数配列 `nums1` と `nums2` が与えられます。
2つの配列を合わせた全体の中央値を返してください。

全体の要素数が奇数なら中央の値を返します。
偶数なら中央の2つの値の平均を返します。

# 条件

- `nums1` と `nums2` はどちらも昇順にソートされている
- 2つの配列の少なくとも片方は空ではない
- 返り値は `number` とする
- 計算量 `O(log (m + n))` を目標とする

# 例

### 例1

入力: `nums1 = [1, 3]`, `nums2 = [2]`
出力: `2`

### 例2

入力: `nums1 = [1, 2]`, `nums2 = [3, 4]`
出力: `2.5`

### 例3

入力: `nums1 = []`, `nums2 = [1]`
出力: `1`

# 入力制約

- `0 <= nums1.length, nums2.length <= 1000`
- `1 <= nums1.length + nums2.length <= 2000`
- `-10^6 <= nums1[i], nums2[i] <= 10^6`
