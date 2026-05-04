export default function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) {
    return [];
  }

  const sorted = intervals.map((interval) => [...interval]).sort((a, b) => a[0] - b[0]);
  const merged: number[][] = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    const last = merged[merged.length - 1];

    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
      continue;
    }

    merged.push(current);
  }

  return merged;
}
