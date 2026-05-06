export default function canPartition(nums: number[]): boolean {
  const total = nums.reduce((sum, value) => sum + value, 0);

  if (total % 2 !== 0) {
    return false;
  }

  const target = total / 2;
  const dp = new Array<boolean>(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let sum = target; sum >= num; sum--) {
      dp[sum] = dp[sum] || dp[sum - num];
    }
  }

  return dp[target];
}

