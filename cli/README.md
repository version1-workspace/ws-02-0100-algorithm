# CLI

`problems/` 配下の設問を検出し、各 `answer.ts` または `solution.ts` を `testcase.ts` の内容で実行するための CLI です。

## 使い方

```sh
npm run cli
```

`npm start` からも同じ CLI を実行できます。

```sh
npm start
```

引数を省略した場合は `problems/` を再帰的に探索します。

対象ディレクトリを絞る場合は、第一引数に探索したいディレクトリを指定します。

```sh
npm run cli -- problems/01-array-string
npm run cli -- problems/01-array-string/001-two-sum
npm start -- problems/01-array-string
```

模範解答を実行する場合は `--solution` を指定します。

```sh
npm run cli -- --solution problems/01-array-string
npm start -- --solution problems/01-array-string/001-two-sum
```

ヘルプを表示する場合:

```sh
npm run cli -- --help
```

## 問題ディレクトリの条件

次の3ファイルが同じディレクトリにある場合、そのディレクトリを問題ディレクトリとして扱います。

- `answer.ts`
- `question.md`
- `testcase.ts`

指定したディレクトリ配下に複数の問題ディレクトリがある場合は、再帰的に検出して順番に実行します。

## 実行内容

- `answer.ts` の default export を解答関数として読み込みます
- `--solution` 指定時は `answer.ts` の代わりに `solution.ts` の default export を読み込みます
- `testcase.ts` の `testCases` export をテストケースとして読み込みます
- 既存の `Test` クラスで実行結果を表示します

## 終了コード

- `0`: すべてのテストが成功
- `1`: テスト失敗、読み込みエラー、または問題ディレクトリが見つからない
