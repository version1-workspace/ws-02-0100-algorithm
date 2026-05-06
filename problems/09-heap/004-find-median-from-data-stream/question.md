---
title: Find Median from Data Stream
category: Heap / 2 Heap
---

# 問題文

データストリームに整数を追加しながら、現在までに追加された整数の中央値を求めます。

通常は `MedianFinder` クラスとして `addNum(num)` と `findMedian()` を実装します。
このリポジトリの runner で検証できるよう、この問題では操作列 `operations` を入力として受け取り、各 `findMedian` の結果だけを配列で返してください。

操作は次の形式です。

- `["addNum", num]`: `num` を追加する
- `["findMedian"]`: 現在の中央値を結果配列に追加する

# 条件

- 要素数が奇数の場合、中央値は中央の値
- 要素数が偶数の場合、中央値は中央2値の平均
- 小さい側を管理する Max Heap と、大きい側を管理する Min Heap を使うと効率よく処理できる

# 例

### 例1

入力: `operations = [["addNum", 1], ["addNum", 2], ["findMedian"], ["addNum", 3], ["findMedian"]]`
出力: `[1.5, 2]`

### 例2

入力: `operations = [["addNum", -1], ["findMedian"], ["addNum", -2], ["findMedian"]]`
出力: `[-1, -1.5]`

# 入力制約

- `1 <= operations.length <= 5 * 10^4`
- `-10^5 <= num <= 10^5`
- `findMedian` は少なくとも1つの値が追加された後に呼ばれる
