export default function validParentheses(s: string): boolean {
  const pairs = new Map<string, string>([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  const stack: string[] = [];

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
      continue;
    }

    if (stack.pop() !== pairs.get(char)) {
      return false;
    }
  }

  return stack.length === 0;
}
