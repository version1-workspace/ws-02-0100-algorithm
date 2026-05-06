---
title: Word Ladder
category: Graph / BFS
---

# 問題文

開始単語 `beginWord`、終了単語 `endWord`、単語一覧 `wordList` が与えられます。
1回の操作で1文字だけ変更でき、変更後の単語は `wordList` に含まれている必要があります。

`beginWord` から `endWord` へ変換する最短変換列の単語数を返してください。
変換できない場合は `0` を返してください。

# 条件

- 各単語の長さはすべて同じ
- `beginWord` は `wordList` に含まれていなくてもよい
- `endWord` が `wordList` に含まれていない場合は変換できない
- BFS を使うと最短変換列の長さを求められる

# 例

### 例1

入力: `beginWord = "hit"`, `endWord = "cog"`, `wordList = ["hot", "dot", "dog", "lot", "log", "cog"]`
出力: `5`

説明: `"hit" -> "hot" -> "dot" -> "dog" -> "cog"` の5単語です。

### 例2

入力: `beginWord = "hit"`, `endWord = "cog"`, `wordList = ["hot", "dot", "dog", "lot", "log"]`
出力: `0`

# 入力制約

- `1 <= beginWord.length <= 10`
- `endWord.length = beginWord.length`
- `1 <= wordList.length <= 5000`
- `wordList[i].length = beginWord.length`
- 単語は小文字英字のみで構成される
