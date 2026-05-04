import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [2, [[1, 0]]], expected: true },
  { input: [2, [[1, 0], [0, 1]]], expected: false },
  { input: [1, []], expected: true },
  { input: [4, [[1, 0], [2, 1], [3, 2]]], expected: true },
  { input: [3, [[0, 1], [1, 2], [2, 0]]], expected: false },
] as TestCase<[number, number[][]], boolean>[];
