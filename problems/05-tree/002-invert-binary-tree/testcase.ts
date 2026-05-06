import { TestCase } from "@/cli/test/types";
import { TreeNode } from "./answer";

const tree1 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9)),
);
const expected1 = new TreeNode(
  4,
  new TreeNode(7, new TreeNode(9), new TreeNode(6)),
  new TreeNode(2, new TreeNode(3), new TreeNode(1)),
);

const tree2 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
const expected2 = new TreeNode(2, new TreeNode(3), new TreeNode(1));

const tree3 = new TreeNode(1, null, new TreeNode(2));
const expected3 = new TreeNode(1, new TreeNode(2), null);

export const testCases = [
  { input: tree1, expected: expected1 },
  { input: tree2, expected: expected2 },
  { input: null, expected: null },
  { input: new TreeNode(1), expected: new TreeNode(1) },
  { input: tree3, expected: expected3 },
] as TestCase<TreeNode | null, TreeNode | null>[];
