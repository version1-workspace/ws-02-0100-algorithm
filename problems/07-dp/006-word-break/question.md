---
title: Word Break
category: Dynamic Programming
---

# 問題文

文字列 `s` と単語の配列 `wordDict` が与えられます。
`wordDict` に含まれる単語を1回以上つなげて、文字列 `s` 全体を作れるかどうかを返してください。

辞書内の単語は何度でも使えます。

# 条件

- `s` 全体を余りなく分割できる必要がある
- `wordDict` の単語は何度使ってもよい
- 分割に使う単語は `wordDict` に含まれている必要がある

# 例

### 例1

入力: `s = "leetcode", wordDict = ["leet","code"]`
出力: `true`
説明: `"leet" + "code"` で作れます。

### 例2

入力: `s = "applepenapple", wordDict = ["apple","pen"]`
出力: `true`

### 例3

入力: `s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]`
出力: `false`

# 入力制約

- `1 <= s.length <= 300`
- `1 <= wordDict.length <= 1000`
- `1 <= wordDict[i].length <= 20`
- `s` と `wordDict[i]` は英小文字のみで構成される
