# ws-02-0100-algorithm

アルゴリズム問題を TypeScript で解き、CLI からテストケースを実行するためのリポジトリです。

## 使い方

依存関係をインストールします。

```bash
npm install
```

すべての問題を実行します。

```bash
npm start
```

`npm run cli` からも同じ CLI を実行できます。

```bash
npm run cli
```

## 対象指定

第一引数にディレクトリを指定すると、実行対象を絞れます。

```bash
npm start -- problems/01-array-string
npm start -- problems/01-array-string/001-two-sum
```

指定したディレクトリ配下に複数の問題ディレクトリがある場合は、再帰的に検出して実行します。

## 模範解答の実行

`--solution` を指定すると、`answer.ts` の代わりに `solution.ts` を実行します。

```bash
npm start -- --solution problems/01-array-string
npm run start:solution -- problems/01-array-string/001-two-sum
```

## 関連ドキュメント

- [CLI の使い方](cli/README.md)
- [プロジェクト設計](docs/design.md)
- [設問ディレクトリの配置ルール](docs/problems/design.md)
