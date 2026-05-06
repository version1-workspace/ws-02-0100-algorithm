import { TestCase } from "@/cli/test/types";

import type { QueueInput, QueueOutput } from "./lib";

export const testCases = [
  {
    input: {
      operations: ["MyQueue", "push", "push", "peek", "pop", "empty"],
      values: [[], [1], [2], [], [], []],
    },
    expected: [null, null, null, 1, 1, false],
  },
  {
    input: {
      operations: ["MyQueue", "push", "empty", "pop", "empty"],
      values: [[], [10], [], [], []],
    },
    expected: [null, null, false, 10, true],
  },
  {
    input: {
      operations: ["MyQueue", "push", "push", "pop", "push", "peek", "pop", "pop", "empty"],
      values: [[], [1], [2], [], [3], [], [], [], []],
    },
    expected: [null, null, null, 1, null, 2, 2, 3, true],
  },
  {
    input: {
      operations: ["MyQueue", "empty", "push", "push", "peek", "empty"],
      values: [[], [], [5], [6], [], []],
    },
    expected: [null, true, null, null, 5, false],
  },
] as TestCase<QueueInput, QueueOutput>[];

