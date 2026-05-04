---
title: Product of Array Except Self
category: Array / Prefix Product
---

# 問題文

整数配列 `nums` が与えられます。
各位置 `i` について、`nums[i]` 以外のすべての要素の積を格納した配列を返してください。

# 条件

- 返す配列の長さは `nums` と同じにする
- `answer[i]` は `nums[0] * ... * nums[i - 1] * nums[i + 1] * ... * nums[n - 1]` とする
- 割り算を使わずに解くことを目標とする
- 入力には `0` が含まれる場合がある

# 例

### 例1

入力: `nums = [1, 2, 3, 4]`
出力: `[24, 12, 8, 6]`

### 例2

入力: `nums = [-1, 1, 0, -3, 3]`
出力: `[0, 0, 9, 0, 0]`

# 入力制約

- `2 <= nums.length <= 10^5`
- `-30 <= nums[i] <= 30`
- 各 `answer[i]` は 32 bit 整数の範囲に収まる
