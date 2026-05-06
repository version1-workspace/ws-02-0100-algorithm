export default function orangesRotting(grid: number[][]): number {
  const queue: Array<[number, number, number]> = [];
  let freshCount = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        freshCount++;
      } else if (grid[row][col] === 2) {
        queue.push([row, col, 0]);
      }
    }
  }

  let minutes = 0;
  for (let index = 0; index < queue.length; index++) {
    const [row, col, currentMinute] = queue[index];
    minutes = Math.max(minutes, currentMinute);

    for (const [nextRow, nextCol] of neighbors(row, col)) {
      if (
        nextRow < 0 ||
        nextRow >= grid.length ||
        nextCol < 0 ||
        nextCol >= grid[0].length ||
        grid[nextRow][nextCol] !== 1
      ) {
        continue;
      }

      grid[nextRow][nextCol] = 2;
      freshCount--;
      queue.push([nextRow, nextCol, currentMinute + 1]);
    }
  }

  return freshCount === 0 ? minutes : -1;
}

function neighbors(row: number, col: number): Array<[number, number]> {
  return [
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1],
  ];
}
