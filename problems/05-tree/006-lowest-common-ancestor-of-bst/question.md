---
title: Lowest Common Ancestor of BST
category: Tree / BST性質
---

# 問題文

二分探索木の根ノード `root` と、木に含まれる2つのノード `p`, `q` が与えられます。
`p` と `q` の最も低い共通祖先ノードを返してください。

共通祖先とは、あるノードが `p` と `q` の両方を子孫として持つことを指します。
ノード自身も自分の子孫として扱います。

各ノードは次の `TreeNode` で表されます。

```ts
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
```

# テスト用インターフェース

default export の関数は `lowestCommonAncestor(root, p, q)` の3引数を受け取り、共通祖先の `TreeNode` を返してください。
runner は `input` が配列で、default 関数の引数数が1以外の場合に配列を展開して呼び出します。

# 条件

- `p` と `q` は必ず `root` を根とする木に含まれる
- すべてのノードの値は一意である
- `p` または `q` 自身が共通祖先になる場合がある
- 入力の木は有効な二分探索木である

# 例

### 例1

入力: `root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 8`
出力: `6`

### 例2

入力: `root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 4`
出力: `2`

### 例3

入力: `root = [2, 1], p = 2, q = 1`
出力: `2`

# 入力制約

- ノード数は `2` 以上 `10^5` 以下
- `-10^9 <= Node.val <= 10^9`
- `p !== q`
