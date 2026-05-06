import type { MinStackInput, MinStackOutput } from "./lib";

class MinStack {
  private values: number[] = [];
  private minimums: number[] = [];

  push(value: number): void {
    this.values.push(value);

    const currentMin = this.minimums[this.minimums.length - 1];
    this.minimums.push(currentMin === undefined ? value : Math.min(value, currentMin));
  }

  pop(): void {
    this.values.pop();
    this.minimums.pop();
  }

  top(): number {
    return this.values[this.values.length - 1];
  }

  getMin(): number {
    return this.minimums[this.minimums.length - 1];
  }
}

export default function minStack({ operations, values }: MinStackInput): MinStackOutput {
  let stack = new MinStack();

  return operations.map((operation, index) => {
    if (operation === "MinStack") {
      stack = new MinStack();
      return null;
    }

    if (operation === "push") {
      stack.push(values[index][0]);
      return null;
    }

    if (operation === "pop") {
      stack.pop();
      return null;
    }

    if (operation === "top") {
      return stack.top();
    }

    return stack.getMin();
  });
}

