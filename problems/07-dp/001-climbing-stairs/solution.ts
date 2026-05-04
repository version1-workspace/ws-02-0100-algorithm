export default function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }

  let previous = 1;
  let current = 2;

  for (let step = 3; step <= n; step++) {
    const next = previous + current;
    previous = current;
    current = next;
  }

  return current;
}
