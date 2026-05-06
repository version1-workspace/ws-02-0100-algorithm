export default function findKthLargest(nums: number[], k: number): number {
  const heap = new MinHeap();

  for (const num of nums) {
    heap.push(num);

    if (heap.size() > k) {
      heap.pop();
    }
  }

  return heap.peek()!;
}

class MinHeap {
  private values: number[] = [];

  size(): number {
    return this.values.length;
  }

  peek(): number | undefined {
    return this.values[0];
  }

  push(value: number) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
  }

  pop(): number | undefined {
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
      if (this.values[parentIndex] <= this.values[index]) {
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
        this.values[leftIndex] < this.values[smallestIndex]
      ) {
        smallestIndex = leftIndex;
      }

      if (
        rightIndex < this.values.length &&
        this.values[rightIndex] < this.values[smallestIndex]
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
