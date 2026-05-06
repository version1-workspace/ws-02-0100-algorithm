export default function pacificAtlantic(heights: number[][]): number[][] {
  const rowCount = heights.length;
  const colCount = heights[0].length;
  const pacific = createVisited(rowCount, colCount);
  const atlantic = createVisited(rowCount, colCount);

  for (let row = 0; row < rowCount; row++) {
    visit(heights, pacific, row, 0);
    visit(heights, atlantic, row, colCount - 1);
  }

  for (let col = 0; col < colCount; col++) {
    visit(heights, pacific, 0, col);
    visit(heights, atlantic, rowCount - 1, col);
  }

  const result: number[][] = [];
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (pacific[row][col] && atlantic[row][col]) {
        result.push([row, col]);
      }
    }
  }

  return result;
}

function createVisited(rowCount: number, colCount: number): boolean[][] {
  return Array.from({ length: rowCount }, () =>
    new Array<boolean>(colCount).fill(false),
  );
}

function visit(
  heights: number[][],
  visited: boolean[][],
  startRow: number,
  startCol: number,
) {
  const stack: Array<[number, number]> = [[startRow, startCol]];

  while (stack.length > 0) {
    const [row, col] = stack.pop()!;
    if (visited[row][col]) {
      continue;
    }

    visited[row][col] = true;

    for (const [nextRow, nextCol] of neighbors(row, col)) {
      if (
        nextRow < 0 ||
        nextRow >= heights.length ||
        nextCol < 0 ||
        nextCol >= heights[0].length ||
        visited[nextRow][nextCol] ||
        heights[nextRow][nextCol] < heights[row][col]
      ) {
        continue;
      }

      stack.push([nextRow, nextCol]);
    }
  }
}

function neighbors(row: number, col: number): Array<[number, number]> {
  return [
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1],
  ];
}
