import { TestCase } from "@/cli/test/types";

export const testCases = [
  {
    input: [5, [[0, 1], [1, 2], [3, 4]]],
    expected: 2,
  },
  {
    input: [5, [[0, 1], [1, 2], [2, 3], [3, 4]]],
    expected: 1,
  },
  {
    input: [4, []],
    expected: 4,
  },
  {
    input: [6, [[0, 1], [2, 3], [4, 5], [3, 4]]],
    expected: 2,
  },
] as TestCase<[number, number[][]], number>[];
