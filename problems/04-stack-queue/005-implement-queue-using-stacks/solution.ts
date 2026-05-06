import type { QueueInput, QueueOutput } from "./lib";

class MyQueue {
  private inputStack: number[] = [];
  private outputStack: number[] = [];

  push(value: number): void {
    this.inputStack.push(value);
  }

  pop(): number {
    this.moveValuesIfNeeded();
    return this.outputStack.pop()!;
  }

  peek(): number {
    this.moveValuesIfNeeded();
    return this.outputStack[this.outputStack.length - 1];
  }

  empty(): boolean {
    return this.inputStack.length === 0 && this.outputStack.length === 0;
  }

  private moveValuesIfNeeded(): void {
    if (this.outputStack.length > 0) {
      return;
    }

    while (this.inputStack.length > 0) {
      this.outputStack.push(this.inputStack.pop()!);
    }
  }
}

export default function implementQueueUsingStacks({
  operations,
  values,
}: QueueInput): QueueOutput {
  let queue = new MyQueue();

  return operations.map((operation, index) => {
    if (operation === "MyQueue") {
      queue = new MyQueue();
      return null;
    }

    if (operation === "push") {
      queue.push(values[index][0]);
      return null;
    }

    if (operation === "pop") {
      return queue.pop();
    }

    if (operation === "peek") {
      return queue.peek();
    }

    return queue.empty();
  });
}

