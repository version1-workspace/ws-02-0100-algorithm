import { TestCase } from "@/cli/test/types";
import { TreeNode } from "./answer";

const invalidDeep = new TreeNode(
  5,
  new TreeNode(1),
  new TreeNode(4, new TreeNode(3), new TreeNode(6)),
);
const invalidDuplicate = new TreeNode(2, new TreeNode(2), new TreeNode(3));
const validWithNegative = new TreeNode(0, new TreeNode(-1), new TreeNode(2));

export const testCases = [
  { input: new TreeNode(2, new TreeNode(1), new TreeNode(3)), expected: true },
  { input: invalidDeep, expected: false },
  { input: null, expected: true },
  { input: invalidDuplicate, expected: false },
  { input: validWithNegative, expected: true },
] as TestCase<TreeNode | null, boolean>[];
