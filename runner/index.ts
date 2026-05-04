import twoSum from "@/problems/01-array-string/001-two-sum/answer";
import { testCases as twoSumTestCases } from "@/problems/01-array-string/001-two-sum/testcase";
import validParentheses from "@/problems/04-stack-queue/001-valid-parentheses/answer";
import { testCases as validParenthesesTestCases } from "@/problems/04-stack-queue/001-valid-parentheses/testcase";
import reverseList, {
  ListNode,
} from "@/problems/03-linked-list/001-reverse-linked-list/answer";
import { testCases as reverseLinkedListTestCases } from "@/problems/03-linked-list/001-reverse-linked-list/testcase";
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
  const reverseLinkedListTest = new Test<ListNode | null, ListNode | null>(
    "Reverse Linked List",
    reverseLinkedListTestCases,
    (args) => reverseList(args),
  );

  const tests = [twoSumTest, validParenthesesTest, reverseLinkedListTest];
  tests.forEach((test) => {
    test.run();
    test.printResults();
  });
}

main();
