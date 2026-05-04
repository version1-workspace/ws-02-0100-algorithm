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
│   ├── 07-binary-search/
│   └── 08-heap/
├── runner/
│   ├── index.ts
│   ├── types.ts
│   └── test/
│       └── index.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 各ディレクトリの役割

- `problems/`: アルゴリズム問題をカテゴリ別に配置する
- `problems/{category}/{problem}/answer.ts`: 解答実装を置く
- `problems/{category}/{problem}/question.md`: 問題文を置く
- `problems/{category}/{problem}/test/`: テストケースや検証用コードを置く
- `runner/`: 解答とテストケースを読み込んで実行する仕組みを置く
- `runner/test/index.ts`: テスト結果の保持と出力を担当する `Test` クラスを置く
- `runner/types.ts`: テストケースなど runner 共通の型を置く

## ドキュメント

- [設問ディレクトリの配置ルール](docs/problems/design.md)

## 実行

```bash
npm start
```

TypeScript の import は `@/` でリポジトリルートから指定できます。
