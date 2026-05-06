export default function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  const words = new Set(wordList);
  if (!words.has(endWord)) {
    return 0;
  }

  const queue: Array<[string, number]> = [[beginWord, 1]];
  const visited = new Set<string>([beginWord]);

  for (let index = 0; index < queue.length; index++) {
    const [word, distance] = queue[index];
    if (word === endWord) {
      return distance;
    }

    for (const nextWord of createNextWords(word)) {
      if (!words.has(nextWord) || visited.has(nextWord)) {
        continue;
      }

      visited.add(nextWord);
      queue.push([nextWord, distance + 1]);
    }
  }

  return 0;
}

function createNextWords(word: string): string[] {
  const result: string[] = [];
  const chars = word.split("");

  for (let index = 0; index < chars.length; index++) {
    const original = chars[index];

    for (let code = 97; code <= 122; code++) {
      const char = String.fromCharCode(code);
      if (char === original) {
        continue;
      }

      chars[index] = char;
      result.push(chars.join(""));
    }

    chars[index] = original;
  }

  return result;
}
