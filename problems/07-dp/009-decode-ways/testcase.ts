import { TestCase } from "@/cli/test/types";

export const testCases = [
  { input: "12", expected: 2 },
  { input: "226", expected: 3 },
  { input: "06", expected: 0 },
  { input: "10", expected: 1 },
  { input: "11106", expected: 2 },
] as TestCase<string, number>[];

