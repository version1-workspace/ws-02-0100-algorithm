# Min Stack

## 問題

整数を保持するスタックを実装してください。
このスタックは通常の `push`, `pop`, `top` に加えて、現在の最小値を返す `getMin` をすべて効率よく扱える必要があります。

この問題では、操作列 `operations` と各操作の引数 `values` が与えられます。
各操作を順番に実行し、操作ごとの返り値を配列で返してください。

- `MinStack`: 空のスタックを作成する
- `push`: 値をスタックに追加する
- `pop`: スタックの先頭を取り除く
- `top`: スタックの先頭の値を返す
- `getMin`: スタック内の最小値を返す

`MinStack`, `push`, `pop` は `null` を返します。

---

## 条件

- `pop`, `top`, `getMin` は、スタックが空でないときだけ呼ばれます
- `push`, `pop`, `top`, `getMin` はそれぞれ `O(1)` で動作するようにしてください
- 同じ値が複数回入ることがあります

---

## 例

### 例1

```
入力:
operations = ["MinStack","push","push","push","getMin","pop","top","getMin"]
values = [[],[-2],[0],[-3],[],[],[],[]]

出力: [null,null,null,null,-3,null,0,-2]
```

説明:

- `push(-2)`, `push(0)`, `push(-3)` のあと、最小値は `-3`
- `pop()` で `-3` を取り除く
- `top()` は `0`
- 現在の最小値は `-2`

### 例2

```
入力:
operations = ["MinStack","push","push","getMin","pop","getMin"]
values = [[],[2],[2],[],[],[]]

出力: [null,null,null,2,null,2]
```

---

## 入力制約

- `1 <= operations.length <= 10^4`
- `operations.length == values.length`
- `operations[0] == "MinStack"`
- `values[0] == []`
- `-10^9 <= push される値 <= 10^9`
