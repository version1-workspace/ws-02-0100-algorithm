# 解説

## 考え方

`dp[end]` を「`s` の先頭 `end` 文字を辞書の単語で分割できるか」とします。
最後の単語が `s[start:end]` だと考えると、`dp[start]` が true で、その部分文字列が辞書にあれば `dp[end]` も true です。

## アルゴリズム

1. `wordDict` を `Set` にして単語の存在確認を速くする
2. 辞書内の最大単語長 `maxWordLength` を求める
3. `dp[0] = true` とする
4. `end` を 1 から `s.length` まで進める
5. `start` を `end - 1` から最大単語長の範囲内で戻し、分割できる位置を探す
6. `dp[s.length]` を返す

## 実装のポイント

- `Set` の `has` で単語判定を O(1) 平均で行います。
- `maxWordLength` より長い最後の単語は辞書に存在しないため、探索範囲を絞れます。
- 見つかった時点で `break` し、不要な探索を避けています。

## 計算量

- 時間計算量: O(n * L^2) ただし `n = s.length`、`L = maxWordLength`
- 空間計算量: O(n + wordDict.length)
