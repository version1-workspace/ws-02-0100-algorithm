import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [[1, 1, 1, 2, 2, 3], 2], expected: [1, 2] },
  { input: [[1], 1], expected: [1] },
  { input: [[4, 4, 6, 6, 6, 7, 7, 8], 3], expected: [6, 4, 7] },
  { input: [[-1, -1, -2, -2, -2, 3], 2], expected: [-2, -1] },
] as TestCase<[number[], number], number[]>[];
