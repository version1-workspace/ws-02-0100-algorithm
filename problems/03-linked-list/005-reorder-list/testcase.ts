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
    input: createList([1, 2, 3, 4]),
    expected: createList([1, 4, 2, 3]),
  },
  {
    input: createList([1, 2, 3, 4, 5]),
    expected: createList([1, 5, 2, 4, 3]),
  },
  {
    input: createList([1]),
    expected: createList([1]),
  },
  {
    input: createList([]),
    expected: createList([]),
  },
  {
    input: createList([10, 20, 30, 40, 50, 60]),
    expected: createList([10, 60, 20, 50, 30, 40]),
  },
] as TestCase<ListNode | null, ListNode | null>[];
