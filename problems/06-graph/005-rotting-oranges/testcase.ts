import { TestCase } from "@/cli/test/types";

export const testCases = [
  {
    input: [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ],
    expected: 4,
  },
  {
    input: [
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1],
    ],
    expected: -1,
  },
  {
    input: [[0, 2]],
    expected: 0,
  },
  {
    input: [[1]],
    expected: -1,
  },
  {
    input: [
      [2, 2],
      [1, 1],
    ],
    expected: 1,
  },
] as TestCase<number[][], number>[];
