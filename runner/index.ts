import twoSum from "@/problems/01-array-string/001-two-sum/test/answer";
import { testCases as twoSumTestCases } from "@/problems/01-array-string/001-two-sum/test/case";
import { Test } from "./test";

function main() {
  const twoSumTest = new Test<[number[], number], number[]>(
    "Two Sum",
    twoSumTestCases,
    (args) => twoSum(...args),
  );
  twoSumTest.run();
  twoSumTest.printResults();
}

main();
