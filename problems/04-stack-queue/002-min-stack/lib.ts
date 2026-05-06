export type MinStackOperation = "MinStack" | "push" | "pop" | "top" | "getMin";

export type MinStackInput = {
  operations: MinStackOperation[];
  values: number[][];
};

export type MinStackOutput = Array<number | null>;

