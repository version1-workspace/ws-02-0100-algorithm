export type QueueOperation = "MyQueue" | "push" | "pop" | "peek" | "empty";

export type QueueInput = {
  operations: QueueOperation[];
  values: number[][];
};

export type QueueOutput = Array<number | boolean | null>;

