export default function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const counts = new Map<string, number>();

  for (const char of s) {
    counts.set(char, (counts.get(char) ?? 0) + 1);
  }

  for (const char of t) {
    const count = counts.get(char);
    if (count === undefined) {
      return false;
    }

    if (count === 1) {
      counts.delete(char);
      continue;
    }

    counts.set(char, count - 1);
  }

  return counts.size === 0;
}
