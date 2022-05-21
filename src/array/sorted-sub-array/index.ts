type Range = [number, number];

export function solution1(nums: number[]): Range {
  let minUnsorted = Infinity;
  let maxUnsorted = -Infinity;

  //find max and min unsorted
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (isUnsorted(i, num, nums)) {
      minUnsorted = Math.min(minUnsorted, num);
      maxUnsorted = Math.max(maxUnsorted, num);
    }
  }

  //if extremes are untouched, means nums is sorted
  if (minUnsorted /**or check maxUnsorted */ === Infinity) return [-1, -1];

  let f = 0;
  let r = nums.length - 1;
  //find sorted position of min & max
  while (minUnsorted >= nums[f]) f++;
  while (maxUnsorted <= nums[r]) r--;

  return [f, r];
}

function isUnsorted(i: number, num: number, nums: number[]) {
  //if first
  if (i === 0) return num > nums[i + 1];
  // if last
  if (i === nums.length - 1) return num < nums[i - 1];
  return num > nums[i + 1] || num < nums[i - 1];
}
