import { TestCase } from "@/cli/test/types";

export const testCases = [
  {
    input: [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ],
    expected: [
      [1, 6],
      [8, 10],
      [15, 18],
    ],
  },
  { input: [[1, 4], [4, 5]], expected: [[1, 5]] },
  { input: [], expected: [] },
  { input: [[1, 4], [0, 2], [3, 5]], expected: [[0, 5]] },
  { input: [[1, 2]], expected: [[1, 2]] },
] as TestCase<number[][], number[][]>[];
