export default function binary_search<T extends number>(nums: T[], target: T) {
  let lp = 0;
  let rp = nums.length - 1;

  while (lp <= rp) {
    const mp = Math.floor((lp + rp) / 2);
    const num = nums[mp];

    if (num === target) {
      return mp;
    } else if (num < target) {
      lp = mp + 1;
    } else {
      rp = mp - 1;
    }
  }
  return -1;
}
