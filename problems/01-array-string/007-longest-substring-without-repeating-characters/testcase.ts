import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: "abcabcbb", expected: 3 },
  { input: "bbbbb", expected: 1 },
  { input: "pwwkew", expected: 3 },
  { input: "", expected: 0 },
  { input: "dvdf", expected: 3 },
] as TestCase<string, number>[];
