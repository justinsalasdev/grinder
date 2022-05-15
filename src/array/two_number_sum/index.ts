/**
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.
 */

//O(n^2)T & O(1) space
export function solution1(input: number[], target: number) {
  for (let i = 0; i < input.length; i++) {
    const firstNum = input[i];
    for (let j = i + 1; j < input.length; j++) {
      const secondNum = input[j];
      if (firstNum + secondNum === target) {
        return [firstNum, secondNum];
      }
    }
  }
  //return if no pair found
  return [];
}
//O(n)T O(n)S
export function solution2(input: number[], target: number) {
  const nums = {};
  for (let num of input) {
    //target = num + x
    //x = target - num;
    if (target - num in nums) {
      return [target - num, num];
    } else {
      nums[num] = num;
    }
  }
  return [];
}

//O(nlogn)t O(1)s
export function solution3(input: number[], target: number) {
  input.sort((a, b) => a - b); //sort ascending
  let lp = 0;
  let rp = input.length - 1;

  while (lp < rp) {
    const currSum = input[lp] + input[rp];
    if (currSum === target) {
      return [input[lp], input[rp]];
    } else if (currSum < target) {
      lp++;
    } else if (currSum > target) {
      rp--;
    }
  }
  return [];
}
