import { ListNode } from "./answer";

export default function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode();
  let tail = dummy;
  let current1 = list1;
  let current2 = list2;

  while (current1 !== null && current2 !== null) {
    if (current1.val <= current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  tail.next = current1 ?? current2;

  return dummy.next;
}
