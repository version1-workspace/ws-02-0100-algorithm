import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [[3, 6, 7, 11], 8], expected: 4 },
  { input: [[30, 11, 23, 4, 20], 5], expected: 30 },
  { input: [[30, 11, 23, 4, 20], 6], expected: 23 },
  { input: [[1], 1], expected: 1 },
  { input: [[312884470], 312884469], expected: 2 },
  { input: [[5, 5, 5, 5], 8], expected: 3 },
] as TestCase<[number[], number], number>[];
