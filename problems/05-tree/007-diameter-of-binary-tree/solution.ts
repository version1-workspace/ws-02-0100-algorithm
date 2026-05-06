import { TreeNode } from "./answer";

export default function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  function height(node: TreeNode | null): number {
    if (node === null) {
      return 0;
    }

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    diameter = Math.max(diameter, leftHeight + rightHeight);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  height(root);
  return diameter;
}
