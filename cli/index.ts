import path from "node:path";

import { parseOptions, printHelp } from "./options";
import { findProblems } from "./problem";
import { runProblem } from "./problem-runner";

async function main() {
  const options = parseOptions(process.argv.slice(2));

  if (options.shouldShowHelp) {
    printHelp();
    return;
  }

  const problems = await findProblems(path.resolve(options.targetDir));

  if (problems.length === 0) {
    console.error("No problem directories found.");
    process.exitCode = 1;
    return;
  }

  let hasFailure = false;

  for (const problem of problems) {
    try {
      const isPassed = await runProblem(problem);
      hasFailure = hasFailure || !isPassed;
    } catch (error) {
      hasFailure = true;
      console.error(`Problem: ${problem.name}`);
      console.error(error instanceof Error ? error.message : error);
    }
  }

  process.exitCode = hasFailure ? 1 : 0;
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
