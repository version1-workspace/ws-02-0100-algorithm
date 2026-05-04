---
title: Course Schedule
category: Graph / Topological Sort
---

# 問題文

受講する必要がある科目数 `numCourses` と、前提科目の一覧 `prerequisites` が与えられます。
科目は `0` から `numCourses - 1` までの番号で表されます。

`prerequisites[i] = [a, b]` は、科目 `a` を受講するには先に科目 `b` を修了している必要があることを表します。
すべての科目を修了できる場合は `true`、できない場合は `false` を返してください。

# 条件

- 前提関係に循環がある場合、すべての科目を修了することはできない
- 前提科目がない科目はいつでも受講できる
- 同じ科目を複数回受講する必要はない

# 例

### 例1

入力: `numCourses = 2`, `prerequisites = [[1, 0]]`
出力: `true`
説明: 科目 `0` を修了してから科目 `1` を受講できます。

### 例2

入力: `numCourses = 2`, `prerequisites = [[1, 0], [0, 1]]`
出力: `false`
説明: 科目 `0` と `1` が互いに前提になっているため修了できません。

# 入力制約

- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= 5000`
- `prerequisites[i].length = 2`
- `0 <= prerequisites[i][0], prerequisites[i][1] < numCourses`
