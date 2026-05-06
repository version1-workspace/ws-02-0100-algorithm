import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [10, 9, 2, 5, 3, 7, 101, 18], expected: 4 },
  { input: [0, 1, 0, 3, 2, 3], expected: 4 },
  { input: [7, 7, 7, 7, 7], expected: 1 },
  { input: [1, 2, 3, 4], expected: 4 },
  { input: [4, 3, 2, 1], expected: 1 },
] as TestCase<number[], number>[];

