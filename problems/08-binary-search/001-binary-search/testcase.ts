import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [[-1, 0, 3, 5, 9, 12], 9], expected: 4 },
  { input: [[-1, 0, 3, 5, 9, 12], 2], expected: -1 },
  { input: [[], 1], expected: -1 },
  { input: [[5], 5], expected: 0 },
  { input: [[1, 3, 5, 7], 1], expected: 0 },
  { input: [[1, 3, 5, 7], 7], expected: 3 },
] as TestCase<[number[], number], number>[];
