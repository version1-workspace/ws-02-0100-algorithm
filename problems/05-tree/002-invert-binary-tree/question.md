---
title: Invert Binary Tree
category: Tree / 再帰
---

# 問題文

二分木の根ノード `root` が与えられます。
左右の子ノードをすべて入れ替えた木を返してください。

各ノードは次の `TreeNode` で表されます。

```ts
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
```

# 条件

- すべてのノードで左部分木と右部分木を入れ替える
- 空の木が与えられた場合は `null` を返す
- 返り値は反転後の根ノードとする

# 例

### 例1

入力: `root = [4, 2, 7, 1, 3, 6, 9]`
出力: `[4, 7, 2, 9, 6, 3, 1]`

### 例2

入力: `root = [2, 1, 3]`
出力: `[2, 3, 1]`

### 例3

入力: `root = []`
出力: `[]`

# 入力制約

- ノード数は `0` 以上 `100` 以下
- `-100 <= Node.val <= 100`
