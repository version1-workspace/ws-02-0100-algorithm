import twoSum from "@/problems/01-array-string/001-two-sum/answer";
import { testCases as twoSumTestCases } from "@/problems/01-array-string/001-two-sum/test/case";
import validParentheses from "@/problems/04-stack-queue/001-valid-parentheses/answer";
import { testCases as validParenthesesTestCases } from "@/problems/04-stack-queue/001-valid-parentheses/test/case";
import { Test } from "./test";

function main() {
  const twoSumTest = new Test<[number[], number], number[]>(
    "Two Sum",
    twoSumTestCases,
    (args) => twoSum(...args),
  );
  const validParenthesesTest = new Test<string, boolean>(
    "Valid Parentheses",
    validParenthesesTestCases,
    (args) => validParentheses(args),
  );

  const tests = [twoSumTest, validParenthesesTest];
  tests.forEach((test) => {
    test.run();
    test.printResults();
  });
}

main();
