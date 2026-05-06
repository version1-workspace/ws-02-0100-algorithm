import { TestCase } from "@/cli/test/types";

export const testCases = [
  {
    input: [
      [1, 2, 2, 3, 5],
      [3, 2, 3, 4, 4],
      [2, 4, 5, 3, 1],
      [6, 7, 1, 4, 5],
      [5, 1, 1, 2, 4],
    ],
    expected: [
      [0, 4],
      [1, 3],
      [1, 4],
      [2, 2],
      [3, 0],
      [3, 1],
      [4, 0],
    ],
  },
  {
    input: [[1]],
    expected: [[0, 0]],
  },
  {
    input: [
      [2, 1],
      [1, 2],
    ],
    expected: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
  },
] as TestCase<number[][], number[][]>[];
