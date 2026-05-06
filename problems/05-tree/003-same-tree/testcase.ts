import { TestCase } from "@/cli/test/types";
import { TreeNode } from "./answer";

export const testCases = [
  {
    input: [
      new TreeNode(1, new TreeNode(2), new TreeNode(3)),
      new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    ],
    expected: true,
  },
  {
    input: [new TreeNode(1, new TreeNode(2)), new TreeNode(1, null, new TreeNode(2))],
    expected: false,
  },
  {
    input: [
      new TreeNode(1, new TreeNode(2), new TreeNode(1)),
      new TreeNode(1, new TreeNode(1), new TreeNode(2)),
    ],
    expected: false,
  },
  { input: [null, null], expected: true },
  { input: [new TreeNode(1), null], expected: false },
] as TestCase<[TreeNode | null, TreeNode | null], boolean>[];
