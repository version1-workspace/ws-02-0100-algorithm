import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: ["ADOBECODEBANC", "ABC"], expected: "BANC" },
  { input: ["a", "a"], expected: "a" },
  { input: ["a", "aa"], expected: "" },
  { input: ["aa", "aa"], expected: "aa" },
  { input: ["ab", "b"], expected: "b" },
] as TestCase<[string, string], string>[];
