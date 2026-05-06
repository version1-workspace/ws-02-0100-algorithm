export default function rob(nums: number[]): number {
  let skipPrevious = 0;
  let takePrevious = 0;

  for (const amount of nums) {
    const nextTake = skipPrevious + amount;
    const nextSkip = Math.max(skipPrevious, takePrevious);
    takePrevious = nextTake;
    skipPrevious = nextSkip;
  }

  return Math.max(skipPrevious, takePrevious);
}

