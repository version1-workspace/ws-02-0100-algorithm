export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    val = 0,
    left: TreeNode | null = null,
    right: TreeNode | null = null,
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export class Codec {
  serialize(root: TreeNode | null): string {
    return "";
  }

  deserialize(data: string): TreeNode | null {
    return null;
  }
}

export default function serializeAndDeserialize(
  root: TreeNode | null,
): TreeNode | null {
  const codec = new Codec();
  return codec.deserialize(codec.serialize(root));
}
