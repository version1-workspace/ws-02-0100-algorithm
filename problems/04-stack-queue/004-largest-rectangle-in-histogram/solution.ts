export default function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [];
  let maxArea = 0;

  for (let index = 0; index <= heights.length; index += 1) {
    const currentHeight = index === heights.length ? 0 : heights[index];

    while (
      stack.length > 0 &&
      currentHeight < heights[stack[stack.length - 1]]
    ) {
      const height = heights[stack.pop()!];
      const leftBoundary = stack.length === 0 ? -1 : stack[stack.length - 1];
      const width = index - leftBoundary - 1;
      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(index);
  }

  return maxArea;
}

