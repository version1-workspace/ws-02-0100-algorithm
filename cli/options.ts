export interface CliOptions {
  targetDir: string;
  shouldShowHelp: boolean;
}

export function parseOptions(args: string[]): CliOptions {
  const positionalArgs: string[] = [];
  let shouldShowHelp = false;

  for (const arg of args) {
    if (arg === "--help" || arg === "-h") {
      shouldShowHelp = true;
      continue;
    }

    positionalArgs.push(arg);
  }

  if (positionalArgs.length > 1) {
    throw new Error("CLI accepts at most one target directory");
  }

  return {
    targetDir: positionalArgs[0] ?? "problems",
    shouldShowHelp,
  };
}

export function printHelp() {
  console.log("Usage: npm run cli -- [target-directory]");
  console.log("");
  console.log("Examples:");
  console.log("  npm run cli");
  console.log("  npm run cli -- problems/01-array-string");
  console.log("  npm run cli -- problems/01-array-string/001-two-sum");
}
