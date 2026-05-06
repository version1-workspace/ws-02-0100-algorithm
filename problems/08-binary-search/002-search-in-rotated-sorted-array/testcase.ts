import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [[4, 5, 6, 7, 0, 1, 2], 0], expected: 4 },
  { input: [[4, 5, 6, 7, 0, 1, 2], 3], expected: -1 },
  { input: [[1], 0], expected: -1 },
  { input: [[1], 1], expected: 0 },
  { input: [[5, 1, 3], 3], expected: 2 },
  { input: [[6, 7, 1, 2, 3, 4, 5], 6], expected: 0 },
] as TestCase<[number[], number], number>[];
