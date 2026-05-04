---
title: Binary Search
category: Binary Search
---

# 問題文

昇順にソートされた整数配列 `nums` と整数 `target` が与えられます。
`target` が `nums` に含まれている場合はそのインデックスを返してください。
含まれていない場合は `-1` を返してください。

# 条件

- `nums` は昇順にソートされている
- `nums` 内の値は重複しない
- 計算量 `O(log n)` を目標とする

# 例

### 例1

入力: `nums = [-1, 0, 3, 5, 9, 12]`, `target = 9`
出力: `4`

### 例2

入力: `nums = [-1, 0, 3, 5, 9, 12]`, `target = 2`
出力: `-1`

# 入力制約

- `0 <= nums.length <= 10^4`
- `-10^4 <= nums[i], target <= 10^4`
