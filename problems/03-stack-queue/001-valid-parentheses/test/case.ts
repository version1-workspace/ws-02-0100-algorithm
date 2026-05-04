import { TestCase } from "@/runner/types";

export const testCases = [
  {
    input: "()",
    expected: true,
  },
  {
    input: "()[]{}",
    expected: true,
  },
  {
    input: "(]",
    expected: false,
  },
  {
    input: "([)]",
    expected: false,
  },
  {
    input: "{[]}",
    expected: true,
  },
] as TestCase<string, boolean>[];
