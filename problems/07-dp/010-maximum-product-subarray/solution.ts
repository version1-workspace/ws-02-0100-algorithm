export default function maxProduct(nums: number[]): number {
  let maxEndingHere = nums[0];
  let minEndingHere = nums[0];
  let best = nums[0];

  for (let index = 1; index < nums.length; index++) {
    const value = nums[index];

    if (value < 0) {
      const previousMax = maxEndingHere;
      maxEndingHere = minEndingHere;
      minEndingHere = previousMax;
    }

    maxEndingHere = Math.max(value, maxEndingHere * value);
    minEndingHere = Math.min(value, minEndingHere * value);
    best = Math.max(best, maxEndingHere);
  }

  return best;
}

