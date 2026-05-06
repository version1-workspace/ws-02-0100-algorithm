export default function wordBreak(s: string, wordDict: string[]): boolean {
  const words = new Set(wordDict);
  const maxWordLength = Math.max(...wordDict.map((word) => word.length));
  const dp = new Array<boolean>(s.length + 1).fill(false);
  dp[0] = true;

  for (let end = 1; end <= s.length; end++) {
    const startLimit = Math.max(0, end - maxWordLength);

    for (let start = end - 1; start >= startLimit; start--) {
      if (dp[start] && words.has(s.slice(start, end))) {
        dp[end] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

