import { TestCase } from "@/cli/test/types";

export const testCases = [
  {
    input: [2, 1, 5, 6, 2, 3],
    expected: 10,
  },
  {
    input: [2, 4],
    expected: 4,
  },
  {
    input: [1, 1, 1],
    expected: 3,
  },
  {
    input: [6, 2, 5, 4, 5, 1, 6],
    expected: 12,
  },
  {
    input: [0, 9],
    expected: 9,
  },
] as TestCase<number[], number>[];

