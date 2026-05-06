export default function topKFrequent(nums: number[], k: number): number[] {
  const frequencies = new Map<number, number>();

  for (const num of nums) {
    frequencies.set(num, (frequencies.get(num) ?? 0) + 1);
  }

  return [...frequencies.entries()]
    .sort(([numA, countA], [numB, countB]) => countB - countA || numA - numB)
    .slice(0, k)
    .map(([num]) => num);
}
