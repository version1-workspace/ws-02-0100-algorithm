import { TestCase } from "../types";

const color = {
  blue: (value: string) => `\x1b[34m${value}\x1b[0m`,
  green: (value: string) => `\x1b[32m${value}\x1b[0m`,
  red: (value: string) => `\x1b[31m${value}\x1b[0m`,
  yellow: (value: string) => `\x1b[33m${value}\x1b[0m`,
};

interface TestResult<I, O> {
  index: number;
  input: I;
  expected: O;
  result: O;
  isPassed: boolean;
}

export class Test<I, O> {
  name: string;
  testCases: TestCase<I, O>[];
  testFunction: (args: I) => O;
  results: TestResult<I, O>[];

  constructor(
    name: string,
    testCases: TestCase<I, O>[],
    testFunction: (args: I) => O,
  ) {
    this.name = name;
    this.testCases = testCases;
    this.testFunction = testFunction;
    this.results = [];
  }

  run() {
    this.results = this.testCases.map(({ input, expected }, index) => {
      const result = this.testFunction(input);
      const isPassed = JSON.stringify(result) === JSON.stringify(expected);

      return {
        index,
        input,
        expected,
        result,
        isPassed,
      };
    });
  }

  printResults() {
    console.log(color.blue(`Problem: ${this.name}`));

    this.results.forEach(({ index, input, expected, result, isPassed }) => {
      const testCaseLine = `Test case ${index + 1}: ${isPassed ? "Passed" : "Failed"}`;
      console.log(
        isPassed ? color.green(testCaseLine) : color.red(testCaseLine),
      );
      if (!isPassed) {
        console.log(`  ${color.yellow("Input")}: ${JSON.stringify(input)}`);
        console.log(
          `  ${color.yellow("Expected")}: ${JSON.stringify(expected)}`,
        );
        console.log(`  ${color.yellow("Got")}: ${JSON.stringify(result)}`);
      }
    });

    const totalCount = this.testCases.length;
    const passedCount = this.results.filter(({ isPassed }) => isPassed).length;
    const failedCount = totalCount - passedCount;
    const isSummaryPassed = failedCount === 0;
    const summaryLine = `${this.name} Summary: ${isSummaryPassed ? "Passed" : "Failed"}`;

    console.log("");
    console.log(
      isSummaryPassed ? color.green(summaryLine) : color.red(summaryLine),
    );
    console.log(color.blue(`  Total: ${totalCount}`));
    console.log(color.green(`  Passed: ${passedCount}`));
    console.log(
      isSummaryPassed
        ? color.green(`  Failed: ${failedCount}`)
        : color.red(`  Failed: ${failedCount}`),
    );
  }
}
