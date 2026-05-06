import { ListNode } from "./answer";

export default function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const heap = new MinHeap<ListNode>((nodeA, nodeB) => nodeA.val - nodeB.val);

  for (const list of lists) {
    if (list !== null) {
      heap.push(list);
    }
  }

  const dummy = new ListNode();
  let tail = dummy;

  while (heap.size() > 0) {
    const node = heap.pop()!;
    const next = node.next;

    tail.next = node;
    tail = node;

    if (next !== null) {
      heap.push(next);
    }
  }

  tail.next = null;

  return dummy.next;
}

class MinHeap<T> {
  private values: T[] = [];
  private compare: (valueA: T, valueB: T) => number;

  constructor(compare: (valueA: T, valueB: T) => number) {
    this.compare = compare;
  }

  size(): number {
    return this.values.length;
  }

  push(value: T) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
  }

  pop(): T | undefined {
    if (this.values.length === 0) {
      return undefined;
    }

    const top = this.values[0];
    const last = this.values.pop()!;

    if (this.values.length > 0) {
      this.values[0] = last;
      this.bubbleDown(0);
    }

    return top;
  }

  private bubbleUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(this.values[parentIndex], this.values[index]) <= 0) {
        break;
      }

      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  private bubbleDown(index: number) {
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let smallestIndex = index;

      if (
        leftIndex < this.values.length &&
        this.compare(this.values[leftIndex], this.values[smallestIndex]) < 0
      ) {
        smallestIndex = leftIndex;
      }

      if (
        rightIndex < this.values.length &&
        this.compare(this.values[rightIndex], this.values[smallestIndex]) < 0
      ) {
        smallestIndex = rightIndex;
      }

      if (smallestIndex === index) {
        break;
      }

      this.swap(index, smallestIndex);
      index = smallestIndex;
    }
  }

  private swap(index1: number, index2: number) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }
}
