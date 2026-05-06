import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [2, 3, -2, 4], expected: 6 },
  { input: [-2, 0, -1], expected: 0 },
  { input: [-2, 3, -4], expected: 24 },
  { input: [0, 2], expected: 2 },
  { input: [-2], expected: -2 },
] as TestCase<number[], number>[];

