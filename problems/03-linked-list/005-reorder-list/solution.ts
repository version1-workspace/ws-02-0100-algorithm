import { ListNode } from "./answer";

export default function reorderList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  const secondHalf = splitSecondHalf(head);
  const reversedSecondHalf = reverseList(secondHalf);
  mergeAlternately(head, reversedSecondHalf);

  return head;
}

function splitSecondHalf(head: ListNode): ListNode | null {
  let slow: ListNode = head;
  let fast: ListNode | null = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  const secondHalf = slow.next;
  slow.next = null;

  return secondHalf;
}

function reverseList(head: ListNode | null): ListNode | null {
  let previous: ListNode | null = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}

function mergeAlternately(
  first: ListNode | null,
  second: ListNode | null,
): void {
  let current1 = first;
  let current2 = second;

  while (current1 !== null && current2 !== null) {
    const next1 = current1.next;
    const next2 = current2.next;

    current1.next = current2;
    current2.next = next1;

    current1 = next1;
    current2 = next2;
  }
}
