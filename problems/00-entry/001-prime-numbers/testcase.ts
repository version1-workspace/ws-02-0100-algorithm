import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: 2, expected: true },
  { input: 17, expected: true },
  { input: 1, expected: false },
  { input: 0, expected: false },
  { input: -7, expected: false },
  { input: 9, expected: false },
  { input: 100, expected: false },
] as TestCase<number, boolean>[];
