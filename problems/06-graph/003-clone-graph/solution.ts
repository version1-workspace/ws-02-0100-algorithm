class GraphNode {
  val: number;
  neighbors: GraphNode[];

  constructor(val: number) {
    this.val = val;
    this.neighbors = [];
  }
}

export default function cloneGraph(adjList: number[][]): number[][] {
  const start = buildGraph(adjList);
  const clonedStart = cloneNode(start);

  return toAdjacencyList(clonedStart, adjList.length);
}

function buildGraph(adjList: number[][]): GraphNode | null {
  if (adjList.length === 0) {
    return null;
  }

  const nodes = Array.from(
    { length: adjList.length },
    (_, index) => new GraphNode(index + 1),
  );

  for (let index = 0; index < adjList.length; index++) {
    nodes[index].neighbors = adjList[index].map((value) => nodes[value - 1]);
  }

  return nodes[0];
}

function cloneNode(node: GraphNode | null): GraphNode | null {
  if (node === null) {
    return null;
  }

  const clones = new Map<GraphNode, GraphNode>();
  const stack = [node];
  clones.set(node, new GraphNode(node.val));

  while (stack.length > 0) {
    const current = stack.pop()!;
    const currentClone = clones.get(current)!;

    for (const neighbor of current.neighbors) {
      if (!clones.has(neighbor)) {
        clones.set(neighbor, new GraphNode(neighbor.val));
        stack.push(neighbor);
      }

      currentClone.neighbors.push(clones.get(neighbor)!);
    }
  }

  return clones.get(node)!;
}

function toAdjacencyList(node: GraphNode | null, nodeCount: number): number[][] {
  const result = Array.from({ length: nodeCount }, () => [] as number[]);
  if (node === null) {
    return result;
  }

  const visited = new Set<GraphNode>();
  const stack = [node];

  while (stack.length > 0) {
    const current = stack.pop()!;
    if (visited.has(current)) {
      continue;
    }

    visited.add(current);
    result[current.val - 1] = current.neighbors.map(({ val }) => val);

    for (const neighbor of current.neighbors) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }

  return result;
}
