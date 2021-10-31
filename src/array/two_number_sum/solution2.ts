//O(n)T O(n)S
export default function twoNumberSum(input: number[], target: number) {
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
