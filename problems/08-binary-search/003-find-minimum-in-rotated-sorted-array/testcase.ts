import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [3, 4, 5, 1, 2], expected: 1 },
  { input: [4, 5, 6, 7, 0, 1, 2], expected: 0 },
  { input: [11, 13, 15, 17], expected: 11 },
  { input: [1], expected: 1 },
  { input: [2, 1], expected: 1 },
  { input: [5, 6, 7, 1, 2, 3, 4], expected: 1 },
] as TestCase<number[], number>[];
