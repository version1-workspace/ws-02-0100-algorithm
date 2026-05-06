import { TreeNode } from "./answer";

export class Codec {
  serialize(root: TreeNode | null): string {
    const values: string[] = [];

    function dfs(node: TreeNode | null): void {
      if (node === null) {
        values.push("null");
        return;
      }

      values.push(String(node.val));
      dfs(node.left);
      dfs(node.right);
    }

    dfs(root);
    return values.join(",");
  }

  deserialize(data: string): TreeNode | null {
    const values = data.split(",");
    let index = 0;

    function dfs(): TreeNode | null {
      const value = values[index++];
      if (value === "null") {
        return null;
      }

      const node = new TreeNode(Number(value));
      node.left = dfs();
      node.right = dfs();
      return node;
    }

    return dfs();
  }
}

export default function serializeAndDeserialize(
  root: TreeNode | null,
): TreeNode | null {
  const codec = new Codec();
  return codec.deserialize(codec.serialize(root));
}
