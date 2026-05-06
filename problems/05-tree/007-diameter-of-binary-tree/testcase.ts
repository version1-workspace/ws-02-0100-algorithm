import { TestCase } from "@/cli/test/types";
import { TreeNode } from "./answer";

const tree1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3),
);
const tree2 = new TreeNode(1, new TreeNode(2));
const tree3 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4, new TreeNode(6)), new TreeNode(5)),
  new TreeNode(3),
);
const tree4 = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4))));

export const testCases = [
  { input: tree1, expected: 3 },
  { input: tree2, expected: 1 },
  { input: null, expected: 0 },
  { input: tree3, expected: 4 },
  { input: tree4, expected: 3 },
] as TestCase<TreeNode | null, number>[];
