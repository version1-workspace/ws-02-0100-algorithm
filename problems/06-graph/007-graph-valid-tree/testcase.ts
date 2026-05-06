import { TestCase } from "@/cli/test/types";

export const testCases = [
  {
    input: [5, [[0, 1], [0, 2], [0, 3], [1, 4]]],
    expected: true,
  },
  {
    input: [5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]],
    expected: false,
  },
  {
    input: [4, [[0, 1], [2, 3]]],
    expected: false,
  },
  {
    input: [1, []],
    expected: true,
  },
  {
    input: [3, [[0, 1], [1, 2], [0, 2]]],
    expected: false,
  },
] as TestCase<[number, number[][]], boolean>[];
