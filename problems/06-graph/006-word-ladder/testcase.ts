import { TestCase } from "@/cli/test/types";

export const testCases = [
  {
    input: ["hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]],
    expected: 5,
  },
  {
    input: ["hit", "cog", ["hot", "dot", "dog", "lot", "log"]],
    expected: 0,
  },
  {
    input: ["a", "c", ["a", "b", "c"]],
    expected: 2,
  },
  {
    input: ["lost", "cost", ["most", "fist", "lost", "cost", "fish"]],
    expected: 2,
  },
] as TestCase<[string, string, string[]], number>[];
