import { MedianOperation } from "./answer";

export default function findMedianFromDataStream(
  operations: MedianOperation[],
): number[] {
  const medianFinder = new MedianFinder();
  const result: number[] = [];

  for (const operation of operations) {
    if (operation[0] === "addNum") {
      medianFinder.addNum(operation[1]);
    } else {
      result.push(medianFinder.findMedian());
    }
  }

  return result;
}

class MedianFinder {
  private lower = new Heap<number>((valueA, valueB) => valueB - valueA);
  private upper = new Heap<number>((valueA, valueB) => valueA - valueB);

  addNum(num: number) {
    if (this.lower.size() === 0 || num <= this.lower.peek()!) {
      this.lower.push(num);
    } else {
      this.upper.push(num);
    }

    this.rebalance();
  }

  findMedian(): number {
    if (this.lower.size() > this.upper.size()) {
      return this.lower.peek()!;
    }

    return (this.lower.peek()! + this.upper.peek()!) / 2;
  }

  private rebalance() {
    if (this.lower.size() > this.upper.size() + 1) {
      this.upper.push(this.lower.pop()!);
    } else if (this.upper.size() > this.lower.size()) {
      this.lower.push(this.upper.pop()!);
    }
  }
}

class Heap<T> {
  private values: T[] = [];
  private compare: (valueA: T, valueB: T) => number;

  constructor(compare: (valueA: T, valueB: T) => number) {
    this.compare = compare;
  }

  size(): number {
    return this.values.length;
  }

  peek(): T | undefined {
    return this.values[0];
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
      let bestIndex = index;

      if (
        leftIndex < this.values.length &&
        this.compare(this.values[leftIndex], this.values[bestIndex]) < 0
      ) {
        bestIndex = leftIndex;
      }

      if (
        rightIndex < this.values.length &&
        this.compare(this.values[rightIndex], this.values[bestIndex]) < 0
      ) {
        bestIndex = rightIndex;
      }

      if (bestIndex === index) {
        break;
      }

      this.swap(index, bestIndex);
      index = bestIndex;
    }
  }

  private swap(index1: number, index2: number) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }
}
