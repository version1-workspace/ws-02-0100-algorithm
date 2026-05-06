import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: ["leetcode", ["leet", "code"]], expected: true },
  { input: ["applepenapple", ["apple", "pen"]], expected: true },
  {
    input: ["catsandog", ["cats", "dog", "sand", "and", "cat"]],
    expected: false,
  },
  { input: ["aaaaaaa", ["aaaa", "aaa"]], expected: true },
  { input: ["cars", ["car", "ca", "rs"]], expected: true },
] as TestCase<[string, string[]], boolean>[];

