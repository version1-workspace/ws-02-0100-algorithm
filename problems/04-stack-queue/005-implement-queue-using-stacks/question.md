# Implement Queue using Stacks

## 問題

2つのスタックだけを使って、FIFO のキューを実装してください。

この問題では、操作列 `operations` と各操作の引数 `values` が与えられます。
各操作を順番に実行し、操作ごとの返り値を配列で返してください。

- `MyQueue`: 空のキューを作成する
- `push`: 値をキューの末尾に追加する
- `pop`: キューの先頭を取り除き、その値を返す
- `peek`: キューの先頭の値を返す
- `empty`: キューが空なら `true`、そうでなければ `false` を返す

`MyQueue`, `push` は `null` を返します。

---

## 条件

- 標準のキュー構造は使わず、スタックとして扱う配列を2つ使って実装してください
- `pop`, `peek` は、キューが空でないときだけ呼ばれます
- 値の順序は FIFO になる必要があります

---

## 例

### 例1

```
入力:
operations = ["MyQueue","push","push","peek","pop","empty"]
values = [[],[1],[2],[],[],[]]

出力: [null,null,null,1,1,false]
```

### 例2

```
入力:
operations = ["MyQueue","push","empty","pop","empty"]
values = [[],[10],[],[],[]]

出力: [null,null,false,10,true]
```

---

## 入力制約

- `1 <= operations.length <= 10^4`
- `operations.length == values.length`
- `operations[0] == "MyQueue"`
- `values[0] == []`
- `1 <= push される値 <= 10^9`
