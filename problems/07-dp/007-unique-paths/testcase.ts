import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [3, 7], expected: 28 },
  { input: [3, 2], expected: 3 },
  { input: [1, 1], expected: 1 },
  { input: [1, 10], expected: 1 },
  { input: [7, 3], expected: 28 },
] as TestCase<[number, number], number>[];

