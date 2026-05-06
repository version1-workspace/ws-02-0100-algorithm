import { TestCase } from "@/cli/test/types";

export const testCases = [
  {
    input: [73, 74, 75, 71, 69, 72, 76, 73],
    expected: [1, 1, 4, 2, 1, 1, 0, 0],
  },
  {
    input: [30, 40, 50, 60],
    expected: [1, 1, 1, 0],
  },
  {
    input: [30, 60, 90],
    expected: [1, 1, 0],
  },
  {
    input: [90, 80, 70],
    expected: [0, 0, 0],
  },
  {
    input: [70, 70, 71],
    expected: [2, 1, 0],
  },
] as TestCase<number[], number[]>[];

