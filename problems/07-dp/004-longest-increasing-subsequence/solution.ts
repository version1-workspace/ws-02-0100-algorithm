export default function lengthOfLIS(nums: number[]): number {
  const dp = new Array<number>(nums.length).fill(1);
  let longest = 1;

  for (let right = 1; right < nums.length; right++) {
    for (let left = 0; left < right; left++) {
      if (nums[left] < nums[right]) {
        dp[right] = Math.max(dp[right], dp[left] + 1);
      }
    }

    longest = Math.max(longest, dp[right]);
  }

  return longest;
}

