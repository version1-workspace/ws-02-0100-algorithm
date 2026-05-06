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
    input: [createList([1, 4, 5]), createList([1, 3, 4]), createList([2, 6])],
    expected: createList([1, 1, 2, 3, 4, 4, 5, 6]),
  },
  {
    input: [],
    expected: createList([]),
  },
  {
    input: [createList([])],
    expected: createList([]),
  },
  {
    input: [createList([-3, 2]), createList([-2, -1, 4]), createList([0])],
    expected: createList([-3, -2, -1, 0, 2, 4]),
  },
] as TestCase<Array<ListNode | null>, ListNode | null>[];
