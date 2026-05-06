import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [[1, 3], [2]], expected: 2 },
  { input: [[1, 2], [3, 4]], expected: 2.5 },
  { input: [[], [1]], expected: 1 },
  { input: [[2], []], expected: 2 },
  { input: [[0, 0], [0, 0]], expected: 0 },
  { input: [[1, 2, 3, 4], [5, 6, 7]], expected: 4 },
] as TestCase<[number[], number[]], number>[];
