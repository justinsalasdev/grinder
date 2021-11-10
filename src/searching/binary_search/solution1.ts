// O(logN) time | O(logN) space
export default function binary_search<T extends number>(nums: T[], target: T) {
  return search(nums, target, 0, nums.length - 1);
}

function search<T extends number>(nums: T[], target: T, lp: T, rp: T) {
  if (lp > rp) return -1;
  const mp = Math.floor((lp + rp) / 2);
  const num = nums[mp];

  if (num == target) {
    return mp;
  } else if (num < target) {
    return search(nums, target, mp + 1, rp);
  } else {
    return search(nums, target, lp, mp - 1);
  }
}
