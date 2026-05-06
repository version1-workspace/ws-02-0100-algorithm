export default function leastInterval(tasks: string[], n: number): number {
  const frequencies = new Map<string, number>();

  for (const task of tasks) {
    frequencies.set(task, (frequencies.get(task) ?? 0) + 1);
  }

  let maxFrequency = 0;
  let maxFrequencyCount = 0;

  for (const frequency of frequencies.values()) {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      maxFrequencyCount = 1;
    } else if (frequency === maxFrequency) {
      maxFrequencyCount++;
    }
  }

  const frameLength = (maxFrequency - 1) * (n + 1) + maxFrequencyCount;

  return Math.max(tasks.length, frameLength);
}
