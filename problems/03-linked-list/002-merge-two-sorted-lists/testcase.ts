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
    input: [createList([1, 2, 4]), createList([1, 3, 4])],
    expected: createList([1, 1, 2, 3, 4, 4]),
  },
  {
    input: [createList([]), createList([])],
    expected: createList([]),
  },
  {
    input: [createList([]), createList([0])],
    expected: createList([0]),
  },
  {
    input: [createList([-10, -3, 4]), createList([-9, -3, 5])],
    expected: createList([-10, -9, -3, -3, 4, 5]),
  },
  {
    input: [createList([1, 1, 2]), createList([1, 3])],
    expected: createList([1, 1, 1, 2, 3]),
  },
] as TestCase<[ListNode | null, ListNode | null], ListNode | null>[];
