export default function isPrime(n: number): boolean {
  if (n <= 1) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  if (n % 2 === 0) {
    return false;
  }

  for (let divisor = 3; divisor * divisor <= n; divisor += 2) {
    if (n % divisor === 0) {
      return false;
    }
  }

  return true;
}
