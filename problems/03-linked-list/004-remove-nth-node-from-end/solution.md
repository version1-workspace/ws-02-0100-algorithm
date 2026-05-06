# 解説

## 考え方

末尾から `n` 番目を削除するには、その直前のノードを見つける必要があります。ダミーノードから `fast` を `n + 1` 歩先に進めてから `slow` と一緒に進めると、`fast` が末尾を越えたとき `slow` は削除対象の直前にいます。

## アルゴリズム

1. `dummy` を作り、`dummy.next` を `head` にする
2. `fast` と `slow` を `dummy` に置く
3. `fast` を `n + 1` 回進める
4. `fast` が `null` になるまで、`fast` と `slow` を同時に進める
5. `slow.next` を `slow.next?.next` につなぎ替えて削除する
6. `dummy.next` を返す

## 実装のポイント

- `dummy` により、先頭ノードを削除する場合も同じ処理で扱える
- `for (let i = 0; i <= n; i += 1)` は、`fast` を `n + 1` 歩進める実装
- 問題条件で `n` は有効なので、`fast!` と `slow!` の非 null 断言が成り立つ
- `slow!.next = slow!.next?.next ?? null` で削除対象を飛ばして接続する

## 計算量

- 時間計算量: O(n)
- 空間計算量: O(1)
