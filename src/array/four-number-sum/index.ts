/**
Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. The function should find all quadruplets in
the array that sum up to the target sum and return a two-dimensional array of
all these quadruplets in no particular order.

If no four numbers sum up to the target sum, the function should return an
empty array.

Sample Input
array = [7, 6, 4, -1, 1, 2]
targetSum = 16

Sample Output
[[7, 6, 4, -1], [7, 6, 1, 2]] // the quadruplets could be ordered differently
 */

type Pair = [number, number];
type Pairs = { [key: number]: Pair[] };

export function solution1(nums: number[], targetSum: number) {
  const pairs: Pairs = {};
  const quadruplets: number[][] = [];

  //start at i = 1, since i = 0 wont yield a value in Pairs
  for (let i = 1; i < nums.length - 1; i++) {
    //values right of i to end
    for (let r = i + 1; r < nums.length; r++) {
      const currSum = nums[i] + nums[r];
      const diff = targetSum - currSum;
      if (diff in pairs) {
        for (const pair of pairs[diff]) {
          quadruplets.push(pair.concat([nums[i], nums[r]]));
        }
      }
    }
    //values left of i
    for (let f = 0; f < i; f++) {
      const currSum = nums[f] + nums[i];
      if (!(currSum in pairs)) {
        pairs[currSum] = [[nums[f], nums[i]]];
      } else {
        pairs[currSum].push([nums[f], nums[i]]);
      }
    }
  }
  return quadruplets;
}
