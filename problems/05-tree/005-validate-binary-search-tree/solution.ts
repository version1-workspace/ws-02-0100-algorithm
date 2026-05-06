import { TreeNode } from "./answer";

export default function isValidBST(root: TreeNode | null): boolean {
  return isValid(root, -Infinity, Infinity);
}

function isValid(
  node: TreeNode | null,
  lowerBound: number,
  upperBound: number,
): boolean {
  if (node === null) {
    return true;
  }
  if (node.val <= lowerBound || node.val >= upperBound) {
    return false;
  }

  return (
    isValid(node.left, lowerBound, node.val) &&
    isValid(node.right, node.val, upperBound)
  );
}
