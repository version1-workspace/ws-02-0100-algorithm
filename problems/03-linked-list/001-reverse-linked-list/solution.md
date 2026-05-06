# 解説

## 考え方

連結リストを反転するには、各ノードの `next` を前のノードへ向け直します。処理中に次のノードを失わないよう、`next` を一時的に保存してからリンクを変更します。

## アルゴリズム

1. `previous` を `null`、`current` を `head` にする
2. `current` が `null` になるまで繰り返す
3. `current.next` を `next` に保存する
4. `current.next` を `previous` に向ける
5. `previous` と `current` を 1 つ進める
6. 最後に新しい先頭である `previous` を返す

## 実装のポイント

- `previous` は反転済み部分の先頭を表す
- `current` はこれから向きを変えるノードを表す
- `next` を保存してから `current.next` を書き換えることで、未処理部分への参照を失わない
- 空リストではループに入らず `null` を返す

## 計算量

- 時間計算量: O(n)
- 空間計算量: O(1)
