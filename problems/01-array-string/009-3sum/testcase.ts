import { TestCase } from "@/cli/test/types";

export const testCases = [
  {
    input: [-1, 0, 1, 2, -1, -4],
    expected: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  { input: [0, 1, 1], expected: [] },
  { input: [0, 0, 0], expected: [[0, 0, 0]] },
  { input: [], expected: [] },
  {
    input: [-2, 0, 0, 2, 2],
    expected: [[-2, 0, 2]],
  },
] as TestCase<number[], number[][]>[];
