import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [1, 5, 11, 5], expected: true },
  { input: [1, 2, 3, 5], expected: false },
  { input: [2, 2, 1, 1], expected: true },
  { input: [100], expected: false },
  { input: [3, 3, 3, 4, 5], expected: true },
] as TestCase<number[], boolean>[];

