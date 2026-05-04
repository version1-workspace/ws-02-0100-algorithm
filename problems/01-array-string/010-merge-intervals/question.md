---
title: Merge Intervals
category: Array / Sorting
---

# 問題文

区間の配列 `intervals` が与えられます。
各区間は `[start, end]` で表され、`start <= end` です。

重なっている区間をすべて統合し、重なりのない区間の配列を返してください。

# 条件

- 2 つの区間 `[a, b]` と `[c, d]` は、`c <= b` のとき重なっているとみなす
- 統合後の区間は `[minStart, maxEnd]` とする
- 返す区間の順序は開始位置の昇順にする

# 例

### 例1

入力: `intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]`
出力: `[[1, 6], [8, 10], [15, 18]]`

### 例2

入力: `intervals = [[1, 4], [4, 5]]`
出力: `[[1, 5]]`

# 入力制約

- `0 <= intervals.length <= 10^4`
- `intervals[i].length = 2`
- `0 <= start <= end <= 10^5`
