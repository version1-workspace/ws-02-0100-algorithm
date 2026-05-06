export default function dailyTemperatures(temperatures: number[]): number[] {
  const result = new Array<number>(temperatures.length).fill(0);
  const stack: number[] = [];

  for (let day = 0; day < temperatures.length; day += 1) {
    while (
      stack.length > 0 &&
      temperatures[day] > temperatures[stack[stack.length - 1]]
    ) {
      const previousDay = stack.pop()!;
      result[previousDay] = day - previousDay;
    }

    stack.push(day);
  }

  return result;
}

