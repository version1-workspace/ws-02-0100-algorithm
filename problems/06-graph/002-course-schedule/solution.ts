export default function canFinish(
  numCourses: number,
  prerequisites: number[][],
): boolean {
  const graph = Array.from({ length: numCourses }, () => [] as number[]);
  const indegrees = new Array<number>(numCourses).fill(0);

  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
    indegrees[course]++;
  }

  const queue: number[] = [];
  for (let course = 0; course < numCourses; course++) {
    if (indegrees[course] === 0) {
      queue.push(course);
    }
  }

  let completed = 0;
  for (let index = 0; index < queue.length; index++) {
    const course = queue[index];
    completed++;

    for (const nextCourse of graph[course]) {
      indegrees[nextCourse]--;
      if (indegrees[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  return completed === numCourses;
}
