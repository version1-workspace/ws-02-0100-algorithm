# 解説

## 考え方

スタックは LIFO、キューは FIFO です。2つのスタックを使い、追加用の `inputStack` と取り出し用の `outputStack` に役割を分けます。

`inputStack` から `outputStack` にまとめて移すと順序が反転するため、最初に追加された値が `outputStack` の末尾に来ます。これにより `pop` と `peek` でキューの先頭を扱えます。

## アルゴリズム

1. `push(value)` では `inputStack` に値を積む
2. `pop()` や `peek()` の前に `moveValuesIfNeeded()` を呼ぶ
3. `outputStack` が空なら、`inputStack` の値をすべて取り出して `outputStack` に積み直す
4. `pop()` は `outputStack.pop()` を返す
5. `peek()` は `outputStack` の末尾を返す
6. `empty()` は両方のスタックが空かどうかを見る

## 実装のポイント

- `moveValuesIfNeeded()` は `outputStack` が空のときだけ移動します。まだ取り出すべき古い値が残っている間は、順序を保つために移動しません。
- 各値は `inputStack` に1回入り、必要になったら `outputStack` に1回移るだけです。
- 問題条件により、`pop` と `peek` はキューが空でないときだけ呼ばれます。

## 計算量

- 時間計算量: O(m)
- 空間計算量: O(m)

ただし `m` は操作数です。1回の `pop` や `peek` でまとめて移動することはありますが、ならし計算量は O(1) です。
