import { TestCase } from "@/cli/test/types";
import { ListNode } from "./answer";

function createList(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  for (const value of values) {
    const node = new ListNode(value);
    if (head === null) {
      head = node;
      tail = node;
      continue;
    }

    tail!.next = node;
    tail = node;
  }

  return head;
}

export const testCases = [
  {
    input: [createList([1, 2, 3, 4, 5]), 2],
    expected: createList([1, 2, 3, 5]),
  },
  {
    input: [createList([1]), 1],
    expected: createList([]),
  },
  {
    input: [createList([1, 2]), 1],
    expected: createList([1]),
  },
  {
    input: [createList([1, 2]), 2],
    expected: createList([2]),
  },
  {
    input: [createList([9, 8, 7, 6]), 4],
    expected: createList([8, 7, 6]),
  },
] as TestCase<[ListNode | null, number], ListNode | null>[];
