import { TestCase } from "@/runner/types";
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
    input: createList([1, 2, 3, 4, 5]),
    expected: createList([5, 4, 3, 2, 1]),
  },
  {
    input: createList([1, 2]),
    expected: createList([2, 1]),
  },
  {
    input: createList([7]),
    expected: createList([7]),
  },
  {
    input: createList([]),
    expected: createList([]),
  },
  {
    input: createList([-3, 0, 9, 9]),
    expected: createList([9, 9, 0, -3]),
  },
] as TestCase<ListNode | null, ListNode | null>[];
