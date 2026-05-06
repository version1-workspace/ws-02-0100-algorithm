export default function numDecodings(s: string): number {
  if (s[0] === "0") {
    return 0;
  }

  let twoBack = 1;
  let oneBack = 1;

  for (let index = 1; index < s.length; index++) {
    let current = 0;

    if (s[index] !== "0") {
      current += oneBack;
    }

    const twoDigit = Number(s.slice(index - 1, index + 1));
    if (twoDigit >= 10 && twoDigit <= 26) {
      current += twoBack;
    }

    twoBack = oneBack;
    oneBack = current;
  }

  return oneBack;
}

