import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: ["abcde", "ace"], expected: 3 },
  { input: ["abc", "abc"], expected: 3 },
  { input: ["abc", "def"], expected: 0 },
  { input: ["bsbininm", "jmjkbkjkv"], expected: 1 },
  { input: ["ezupkr", "ubmrapg"], expected: 2 },
] as TestCase<[string, string], number>[];

