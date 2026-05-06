import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: [["A", "A", "A", "B", "B", "B"], 2], expected: 8 },
  { input: [["A", "C", "A", "B", "D", "B"], 1], expected: 6 },
  { input: [["A", "A", "A", "B", "B", "B"], 3], expected: 10 },
  { input: [["A", "A", "A", "B", "B", "B"], 0], expected: 6 },
  { input: [["A", "A", "A", "A", "B", "C", "D", "E"], 2], expected: 10 },
] as TestCase<[string[], number], number>[];
