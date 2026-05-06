---
title: Serialize and Deserialize Binary Tree
category: Tree / 木の表現
---

# 問題文

二分木を文字列に変換する `serialize` と、文字列から元の二分木を復元する `deserialize` を実装してください。

各ノードは次の `TreeNode` で表されます。

```ts
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
```

# テスト用インターフェース

この問題では `Codec` クラスを実装しつつ、runner で検証できるように default export の関数も用意します。

default export の関数は `root` を1つ受け取り、次の処理を行った結果を返してください。

```ts
const codec = new Codec();
return codec.deserialize(codec.serialize(root));
```

返り値は復元後の `TreeNode | null` とし、入力の木と同じ構造・同じ値を持つ必要があります。

# 条件

- `serialize` の文字列形式は自由に決めてよい
- 空の木も正しく変換・復元できること
- ノードの値が負数でも正しく扱えること
- 復元した木は元の木と同じ構造と値を持つこと

# 例

### 例1

入力: `root = [1, 2, 3, null, null, 4, 5]`
出力: `[1, 2, 3, null, null, 4, 5]`

### 例2

入力: `root = []`
出力: `[]`

### 例3

入力: `root = [1]`
出力: `[1]`

# 入力制約

- ノード数は `0` 以上 `10^4` 以下
- `-1000 <= Node.val <= 1000`
