# Problems Design

## 設問ディレクトリの配置ルール

設問は `problems/{category}/{problem}/` に配置します。

```text
problems/
└── NN-category-name/
    └── MMM-problem-name/
        ├── answer.ts
        ├── question.md
        └── test/
            ├── answer.ts
            └── case.ts
```

- カテゴリディレクトリは `NN-category-name` 形式にする
- `NN` は2桁のカテゴリ番号にする
- 問題ディレクトリは `MMM-problem-name` 形式にする
- `MMM` はカテゴリ内で連番の3桁の問題番号にする
- ディレクトリ名は小文字の kebab-case にする
- `answer.ts` には解答関数のスケルトンまたは実装を置く
- `question.md` には問題名または問題文を置く
- `test/answer.ts` には模範回答を置く
- `test/case.ts` には `TestCase` 型のテストケースを置く
