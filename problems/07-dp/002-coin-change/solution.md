# 解説

## 考え方

金額ごとに「その金額を作るために必要な最小枚数」を小さい金額から確定します。
ある金額 `currentAmount` に対して、最後に使う硬貨を `coin` とすると、残りは `currentAmount - coin` です。

## アルゴリズム

1. `dp[x]` を金額 `x` を作る最小枚数として、すべて `Infinity` で初期化する
2. `dp[0] = 0` とする
3. `currentAmount` を 1 から `amount` まで増やす
4. 各 `coin` について、使えるなら `dp[currentAmount - coin] + 1` で更新する
5. `dp[amount]` が `Infinity` のままなら `-1`、そうでなければその値を返す

## 実装のポイント

- `Infinity` は「まだ作れない金額」を表します。
- `amount = 0` の場合は `dp[0] = 0` のまま返せます。
- 各硬貨は何度でも使えるため、金額を小さい順に見ていけば過去の結果を再利用できます。

## 計算量

- 時間計算量: O(amount * coins.length)
- 空間計算量: O(amount)
