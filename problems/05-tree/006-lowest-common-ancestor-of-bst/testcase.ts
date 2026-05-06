import { TestCase } from "@/cli/test/types";
import { TreeNode } from "./answer";

const node0 = new TreeNode(0);
const node3 = new TreeNode(3);
const node5 = new TreeNode(5);
const node9 = new TreeNode(9);
const node7 = new TreeNode(7);
const node8 = new TreeNode(8, node7, node9);
const root6 = new TreeNode(
  6,
  new TreeNode(2, node0, new TreeNode(4, node3, node5)),
  node8,
);

const root2 = root6.left!;
const node4 = root2.right!;

const node1 = new TreeNode(1);
const rootSmall = new TreeNode(2, node1);

export const testCases = [
  { input: [root6, root2, node8], expected: root6 },
  { input: [root6, root2, node4], expected: root2 },
  { input: [root6, node7, node9], expected: node8 },
  { input: [root6, node3, node5], expected: node4 },
  { input: [rootSmall, rootSmall, node1], expected: rootSmall },
] as TestCase<[TreeNode | null, TreeNode, TreeNode], TreeNode | null>[];
