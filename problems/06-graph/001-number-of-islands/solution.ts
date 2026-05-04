export default function numIslands(grid: string[][]): number {
  if (grid.length === 0) {
    return 0;
  }

  const visited = Array.from({ length: grid.length }, () =>
    new Array<boolean>(grid[0].length).fill(false),
  );
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "1" && !visited[row][col]) {
        count++;
        visitIsland(grid, visited, row, col);
      }
    }
  }

  return count;
}

function visitIsland(
  grid: string[][],
  visited: boolean[][],
  startRow: number,
  startCol: number,
) {
  const stack: Array<[number, number]> = [[startRow, startCol]];

  while (stack.length > 0) {
    const [row, col] = stack.pop()!;

    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[row].length ||
      visited[row][col] ||
      grid[row][col] === "0"
    ) {
      continue;
    }

    visited[row][col] = true;
    stack.push([row + 1, col]);
    stack.push([row - 1, col]);
    stack.push([row, col + 1]);
    stack.push([row, col - 1]);
  }
}
