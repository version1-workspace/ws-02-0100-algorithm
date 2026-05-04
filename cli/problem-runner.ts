import path from "node:path";
import { pathToFileURL } from "node:url";

import { Test } from "@/cli/test";
import type { TestCase } from "@/cli/test/types";

import type { Problem } from "./problem";

type AnswerFunction = (...args: unknown[]) => unknown;

export interface RunProblemOptions {
  shouldUseSolution: boolean;
}

export async function runProblem(
  problem: Problem,
  options: RunProblemOptions,
): Promise<boolean> {
  const { answer, testCases } = await importProblem(problem, options);
  const test = new Test<unknown, unknown>(problem.name, testCases, (input) =>
    callAnswer(answer, input),
  );

  test.run();
  test.printResults();

  return test.results.every(({ isPassed }) => isPassed);
}

async function importProblem(
  problem: Problem,
  options: RunProblemOptions,
): Promise<{
  answer: AnswerFunction;
  testCases: TestCase<unknown, unknown>[];
}> {
  const answerFileName = options.shouldUseSolution ? "solution.ts" : "answer.ts";
  const answerModule = await importFile(
    path.join(problem.absoluteDir, answerFileName),
  );
  const testcaseModule = await importFile(
    path.join(problem.absoluteDir, "testcase.ts"),
  );

  if (typeof answerModule.default !== "function") {
    throw new Error(`${answerFileName} must export a default function`);
  }

  if (!Array.isArray(testcaseModule.testCases)) {
    throw new Error("testcase.ts must export testCases");
  }

  return {
    answer: answerModule.default,
    testCases: testcaseModule.testCases,
  };
}

async function importFile(filePath: string): Promise<Record<string, unknown>> {
  return import(pathToFileURL(filePath).href);
}

function callAnswer(answer: AnswerFunction, input: unknown): unknown {
  if (Array.isArray(input) && answer.length !== 1) {
    return answer(...input);
  }

  return answer(input);
}
