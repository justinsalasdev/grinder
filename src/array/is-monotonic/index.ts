/**
 * 
  Write a function that takes in an array of integers and returns a boolean
  representing whether the array is monotonic.

  An array is said to be monotonic if its elements, from left to right, are
  entirely non-increasing or entirely non-decreasing.

  Non-increasing elements aren't necessarily exclusively decreasing; they simply
  don't increase. Similarly, non-decreasing elements aren't necessarily
  exclusively increasing; they simply don't decrease.

  Note that empty arrays and arrays of one element are monotonic.
 * 
 */

export function isMonotonic(nums: number[]) {
  if (nums.length < 2) return true;
  let isNonDecreasing = true; //not increasing, just not decreasing e.g [1,1,1,1,1]
  let isNonIncreasing = true; //not decreasing, just not increasing e.g [1,1,1,1,1]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) isNonDecreasing = false;
    if (nums[i] > nums[i - 1]) isNonIncreasing = false;
  }

  return isNonDecreasing || isNonIncreasing;
}
