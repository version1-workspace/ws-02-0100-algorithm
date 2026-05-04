import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
  { input: [-1, 1, 0, -3, 3], expected: [0, 0, 9, 0, 0] },
  { input: [0, 0], expected: [0, 0] },
  { input: [2, 3], expected: [3, 2] },
  { input: [-1, -2, -3, -4], expected: [-24, -12, -8, -6] },
] as TestCase<number[], number[]>[];
