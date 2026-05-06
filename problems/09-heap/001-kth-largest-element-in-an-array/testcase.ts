import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [[3, 2, 1, 5, 6, 4], 2], expected: 5 },
  { input: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], expected: 4 },
  { input: [[1], 1], expected: 1 },
  { input: [[-1, -1, -2, -3], 2], expected: -1 },
  { input: [[7, 6, 5, 4, 3, 2, 1], 5], expected: 3 },
] as TestCase<[number[], number], number>[];
