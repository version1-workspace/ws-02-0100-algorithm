import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [1, 2, 3, 1], expected: true },
  { input: [1, 2, 3, 4], expected: false },
  { input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], expected: true },
  { input: [], expected: false },
  { input: [-1, -2, -3, -1], expected: true },
] as TestCase<number[], boolean>[];
