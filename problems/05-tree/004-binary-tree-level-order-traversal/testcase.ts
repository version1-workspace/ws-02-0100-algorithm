import { TestCase } from "@/cli/test/types";
import { TreeNode } from "./answer";

const tree1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);
const tree2 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
const tree3 = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4)));

export const testCases = [
  { input: tree1, expected: [[3], [9, 20], [15, 7]] },
  { input: null, expected: [] },
  { input: new TreeNode(1), expected: [[1]] },
  { input: tree2, expected: [[1], [2], [3]] },
  { input: tree3, expected: [[1], [2, 3], [4]] },
] as TestCase<TreeNode | null, number[][]>[];
