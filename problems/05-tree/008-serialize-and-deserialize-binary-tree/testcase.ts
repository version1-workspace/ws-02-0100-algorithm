import { TestCase } from "@/cli/test/types";
import { TreeNode } from "./answer";

const tree1 = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(3, new TreeNode(4), new TreeNode(5)),
);
const tree2 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
const tree3 = new TreeNode(-1, new TreeNode(-2), new TreeNode(3));

export const testCases = [
  { input: tree1, expected: tree1 },
  { input: null, expected: null },
  { input: new TreeNode(1), expected: new TreeNode(1) },
  { input: tree2, expected: tree2 },
  { input: tree3, expected: tree3 },
] as TestCase<TreeNode | null, TreeNode | null>[];
