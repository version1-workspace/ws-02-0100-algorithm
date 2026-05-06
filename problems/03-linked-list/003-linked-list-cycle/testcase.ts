import { TestCase } from "@/cli/test/types";
import { ListNode } from "./answer";

function createList(values: number[], cycleIndex = -1): ListNode | null {
  const nodes = values.map((value) => new ListNode(value));

  for (let i = 0; i < nodes.length - 1; i += 1) {
    nodes[i].next = nodes[i + 1];
  }

  if (cycleIndex >= 0 && nodes.length > 0) {
    nodes[nodes.length - 1].next = nodes[cycleIndex];
  }

  return nodes[0] ?? null;
}

export const testCases = [
  {
    input: createList([3, 2, 0, -4], 1),
    expected: true,
  },
  {
    input: createList([1, 2], 0),
    expected: true,
  },
  {
    input: createList([1], -1),
    expected: false,
  },
  {
    input: createList([], -1),
    expected: false,
  },
  {
    input: createList([1, 2, 3, 4, 5], -1),
    expected: false,
  },
  {
    input: createList([7], 0),
    expected: true,
  },
] as TestCase<ListNode | null, boolean>[];
