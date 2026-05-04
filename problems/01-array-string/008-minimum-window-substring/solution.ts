export default function minWindow(s: string, t: string): string {
  if (t.length > s.length) {
    return "";
  }

  const required = new Map<string, number>();
  for (const char of t) {
    required.set(char, (required.get(char) ?? 0) + 1);
  }

  const window = new Map<string, number>();
  let formed = 0;
  let left = 0;
  let bestStart = 0;
  let bestLength = Infinity;

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];
    window.set(rightChar, (window.get(rightChar) ?? 0) + 1);

    if (window.get(rightChar) === required.get(rightChar)) {
      formed++;
    }

    while (formed === required.size) {
      const length = right - left + 1;
      if (length < bestLength) {
        bestStart = left;
        bestLength = length;
      }

      const leftChar = s[left];
      window.set(leftChar, (window.get(leftChar) ?? 0) - 1);
      if ((window.get(leftChar) ?? 0) < (required.get(leftChar) ?? 0)) {
        formed--;
      }
      left++;
    }
  }

  return bestLength === Infinity ? "" : s.slice(bestStart, bestStart + bestLength);
}
