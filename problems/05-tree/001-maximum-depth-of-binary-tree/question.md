---
title: Maximum Depth of Binary Tree
category: Tree / DFS・BFS
---

# 問題文

二分木の根ノード `root` が与えられます。
この二分木の最大深さを返してください。

最大深さとは、根ノードから最も遠い葉ノードまでの経路に含まれるノード数です。

各ノードは次の `TreeNode` で表されます。

```ts
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
```

# 条件

- 空の木が与えられた場合は `0` を返す
- 根ノードだけの木の深さは `1` とする
- 葉ノードとは左右の子を持たないノードである

# 例

### 例1

入力: `root = [3, 9, 20, null, null, 15, 7]`
出力: `3`

### 例2

入力: `root = [1, null, 2]`
出力: `2`

### 例3

入力: `root = []`
出力: `0`

# 入力制約

- ノード数は `0` 以上 `10^4` 以下
- `-100 <= Node.val <= 100`
