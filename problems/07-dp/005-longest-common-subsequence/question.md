---
title: Longest Common Subsequence
category: Dynamic Programming
---

# 問題文

文字列 `text1` と `text2` が与えられます。
両方の文字列に共通して現れる部分列のうち、最長の長さを返してください。

部分列とは、元の文字列からいくつかの文字を削除して、残りの順番を変えずに作れる文字列です。

# 条件

- 文字を選ぶ順番は元の文字列と同じである必要がある
- 文字は連続している必要はない
- 共通部分列が存在しない場合は `0` を返す

# 例

### 例1

入力: `text1 = "abcde", text2 = "ace"`
出力: `3`
説明: `"ace"` が最長共通部分列です。

### 例2

入力: `text1 = "abc", text2 = "abc"`
出力: `3`

### 例3

入力: `text1 = "abc", text2 = "def"`
出力: `0`

# 入力制約

- `1 <= text1.length, text2.length <= 1000`
- `text1` と `text2` は英小文字のみで構成される
