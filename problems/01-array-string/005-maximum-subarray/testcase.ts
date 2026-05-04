import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 },
  { input: [1], expected: 1 },
  { input: [5, 4, -1, 7, 8], expected: 23 },
  { input: [-3, -2, -5], expected: -2 },
  { input: [0, 0, 0], expected: 0 },
] as TestCase<number[], number>[];
