import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [1, 2, 3, 1], expected: 4 },
  { input: [2, 7, 9, 3, 1], expected: 12 },
  { input: [2, 1, 1, 2], expected: 4 },
  { input: [5], expected: 5 },
  { input: [0, 0, 0], expected: 0 },
] as TestCase<number[], number>[];

