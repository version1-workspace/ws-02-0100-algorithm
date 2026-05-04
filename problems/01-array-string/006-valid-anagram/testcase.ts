import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: ["anagram", "nagaram"], expected: true },
  { input: ["rat", "car"], expected: false },
  { input: ["", ""], expected: true },
  { input: ["a", "ab"], expected: false },
  { input: ["aacc", "ccac"], expected: false },
] as TestCase<[string, string], boolean>[];
