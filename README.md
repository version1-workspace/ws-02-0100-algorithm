# ws-02-0100-algorithm

## ディレクトリ構造

```text
.
├── problems/
│   ├── 00-entry/
│   ├── 01-array-string/
│   ├── 02-data-transform/
│   ├── 03-linked-list/
│   ├── 04-stack-queue/
│   ├── 05-tree/
│   ├── 06-graph/
│   ├── 07-dp/
│   ├── 08-binary-search/
│   └── 09-heap/
├── cli/
│   ├── index.ts
│   ├── test/
│   │   ├── index.ts
│   │   └── types.ts
│   └── README.md
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 各ディレクトリの役割

- `problems/`: アルゴリズム問題をカテゴリ別に配置する
- `problems/{category}/{problem}/answer.ts`: 解答実装を置く
- `problems/{category}/{problem}/question.md`: 問題文を置く
- `problems/{category}/{problem}/testcase.ts`: テストケースを置く
- `cli/`: 問題ディレクトリを検出して解答を実行する CLI を置く
- `cli/test/index.ts`: テスト結果の保持と出力を担当する `Test` クラスを置く
- `cli/test/types.ts`: テストケースなど CLI 共通の型を置く

## ドキュメント

- [設問ディレクトリの配置ルール](docs/problems/design.md)

## 実行

```bash
npm start
```

対象ディレクトリを指定する場合:

```bash
npm start -- problems/01-array-string
```

詳細は [CLI の使い方](cli/README.md) を参照してください。

TypeScript の import は `@/` でリポジトリルートから指定できます。
