import { TestCase } from "@/cli/test/types";

import type { MinStackInput, MinStackOutput } from "./lib";

export const testCases = [
  {
    input: {
      operations: ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"],
      values: [[], [-2], [0], [-3], [], [], [], []],
    },
    expected: [null, null, null, null, -3, null, 0, -2],
  },
  {
    input: {
      operations: ["MinStack", "push", "push", "getMin", "pop", "getMin"],
      values: [[], [2], [2], [], [], []],
    },
    expected: [null, null, null, 2, null, 2],
  },
  {
    input: {
      operations: ["MinStack", "push", "push", "push", "getMin", "pop", "getMin", "pop", "top"],
      values: [[], [5], [1], [3], [], [], [], [], []],
    },
    expected: [null, null, null, null, 1, null, 1, null, 5],
  },
  {
    input: {
      operations: ["MinStack", "push", "push", "getMin", "top", "pop", "getMin"],
      values: [[], [0], [-1], [], [], [], []],
    },
    expected: [null, null, null, -1, -1, null, 0],
  },
] as TestCase<MinStackInput, MinStackOutput>[];

