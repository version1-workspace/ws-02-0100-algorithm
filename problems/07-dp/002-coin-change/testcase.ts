import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [[1, 2, 5], 11], expected: 3 },
  { input: [[2], 3], expected: -1 },
  { input: [[1], 0], expected: 0 },
  { input: [[1], 2], expected: 2 },
  { input: [[2, 5, 10, 1], 27], expected: 4 },
] as TestCase<[number[], number], number>[];
