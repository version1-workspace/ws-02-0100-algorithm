---
title: Binary Tree Level Order Traversal
category: Tree / BFS
---

# 問題文

二分木の根ノード `root` が与えられます。
ノードの値を上の階層から順に、同じ階層ごとにまとめて返してください。

各ノードは次の `TreeNode` で表されます。

```ts
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
```

# 条件

- 返り値は `number[][]` とする
- 各内側の配列には同じ深さのノードの値を左から右の順に入れる
- 空の木が与えられた場合は空配列 `[]` を返す

# 例

### 例1

入力: `root = [3, 9, 20, null, null, 15, 7]`
出力: `[[3], [9, 20], [15, 7]]`

### 例2

入力: `root = []`
出力: `[]`

### 例3

入力: `root = [1]`
出力: `[[1]]`

# 入力制約

- ノード数は `0` 以上 `2000` 以下
- `-1000 <= Node.val <= 1000`
