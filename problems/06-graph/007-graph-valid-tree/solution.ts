export default function validTree(n: number, edges: number[][]): boolean {
  if (edges.length !== n - 1) {
    return false;
  }

  const unionFind = new UnionFind(n);

  for (const [node1, node2] of edges) {
    if (!unionFind.union(node1, node2)) {
      return false;
    }
  }

  return true;
}

class UnionFind {
  private parents: number[];
  private ranks: number[];

  constructor(size: number) {
    this.parents = Array.from({ length: size }, (_, index) => index);
    this.ranks = new Array<number>(size).fill(0);
  }

  union(node1: number, node2: number): boolean {
    const root1 = this.find(node1);
    const root2 = this.find(node2);

    if (root1 === root2) {
      return false;
    }

    if (this.ranks[root1] < this.ranks[root2]) {
      this.parents[root1] = root2;
    } else if (this.ranks[root1] > this.ranks[root2]) {
      this.parents[root2] = root1;
    } else {
      this.parents[root2] = root1;
      this.ranks[root1]++;
    }

    return true;
  }

  private find(node: number): number {
    if (this.parents[node] !== node) {
      this.parents[node] = this.find(this.parents[node]);
    }

    return this.parents[node];
  }
}
