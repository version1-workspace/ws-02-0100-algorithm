import { readdir, stat } from "node:fs/promises";
import path from "node:path";

export interface Problem {
  name: string;
  relativeDir: string;
  absoluteDir: string;
}

const REQUIRED_FILES = ["answer.ts", "question.md", "testcase.ts"] as const;

export async function findProblems(problemsDir: string): Promise<Problem[]> {
  return (await findProblemDirs(problemsDir, problemsDir)).sort((a, b) =>
    a.relativeDir.localeCompare(b.relativeDir),
  );
}

async function findProblemDirs(
  currentDir: string,
  problemsDir: string,
): Promise<Problem[]> {
  const entries = await readdir(currentDir);
  const entryStats = await Promise.all(
    entries.map(async (entry) => {
      const absolutePath = path.join(currentDir, entry);
      return {
        absolutePath,
        stats: await stat(absolutePath),
      };
    }),
  );

  const childDirs = entryStats
    .filter(({ stats }) => stats.isDirectory())
    .map(({ absolutePath }) => absolutePath);

  const currentProblem = hasRequiredFiles(entries)
    ? [toProblem(currentDir, problemsDir)]
    : [];
  const childProblems = await Promise.all(
    childDirs.map((childDir) => findProblemDirs(childDir, problemsDir)),
  );

  return [...currentProblem, ...childProblems.flat()];
}

function hasRequiredFiles(entries: string[]): boolean {
  return REQUIRED_FILES.every((file) => entries.includes(file));
}

function toProblem(absoluteDir: string, problemsDir: string): Problem {
  const relativeDir = path.relative(problemsDir, absoluteDir) || path.basename(absoluteDir);

  return {
    name: relativeDir,
    relativeDir,
    absoluteDir,
  };
}
