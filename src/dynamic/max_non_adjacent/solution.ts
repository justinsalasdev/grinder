export function maxNonAdjacentSum1(nums: number[]) {
  if (nums.length <= 0) return 0;
  if (nums.length === 1) return nums[0];

  const maxSums = nums.slice();
  maxSums[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + nums[i]);
  }

  return maxSums.pop();
}

export function maxNonAdjacentSum2(nums: number[]) {
  if (nums.length <= 0) return 0;
  if (nums.length === 1) return nums[0];
  let prev = nums[0];
  let curr = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const next = Math.max(curr, prev + nums[i]);
    prev = curr;
    curr = next;
  }

  return curr;
}

export const solutions = [maxNonAdjacentSum1, maxNonAdjacentSum2];
