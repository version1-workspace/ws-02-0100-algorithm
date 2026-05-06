import { TestCase } from "@/cli/test/types";

export const testCases = [
  {
    input: [
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3],
    ],
    expected: [
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3],
    ],
  },
  {
    input: [[]],
    expected: [[]],
  },
  {
    input: [],
    expected: [],
  },
  {
    input: [[2], [1, 3], [2]],
    expected: [[2], [1, 3], [2]],
  },
] as TestCase<number[][], number[][]>[];
