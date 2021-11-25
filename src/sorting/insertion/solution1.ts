export default function sort(nums: number[]) {
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (j > 0 && nums[j] < nums[j - 1]) {
      swap(j, j-- - 1, nums);
    }
  }
  return nums;
}

function swap(i: number, j: number, nums: number[]) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}
