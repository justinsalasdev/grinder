/**
 * 
Write a function that takes in an array of integers and returns the length of
the longest peak in the array.

A peak is defined as adjacent integers in the array that are strictly
increasing until they reach a tip (the highest value in the peak), at which
point they become strictly decreasing. At least three integers are required to
form a peak.

For example, the integers 1, 4, 10, 2 form a peak, but the
integers 4, 0, 10 don't and neither do the integers
1, 2, 2, 0. Similarly, the integers 1, 2, 3 don't
form a peak because there aren't any strictly decreasing integers after the
3.

Sample Input
array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

Sample Output
6 // 0, 10, 6, 5, -1, -3
 */
export function solution1(nums: number[]) {
  let longestPeakLength = 0;
  let i = 1; //start at 2nd since a peak must have adjacent points
  while (i < nums.length - 1) {
    //nums[i] must be greater than adjacent nums for it to be a peak
    const isPeak = nums[i - 1] < nums[i] && nums[i + 1] < nums[i];

    if (!isPeak) {
      i++;
      continue;
    }

    let f = i - 2; // i - 1 is known to be less than i, start with i - 2
    while (f >= 0 && nums[f] < nums[f + 1]) f--;
    let r = i + 2; // i + 1 is known to be less than i, start with i + 2
    while (r < nums.length && nums[r] < nums[r - 1]) r++;

    const currPeakLength = r - f - 1;
    longestPeakLength = Math.max(currPeakLength, longestPeakLength);

    //r must be peak, skip to it, and check its length
    i = r;
  }

  return longestPeakLength;
}
