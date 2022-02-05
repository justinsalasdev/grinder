export default function maxSubArraySum(nums: number[]) {
  const [max] = nums.reduce(
    (maxes, num, i) => {
      if (i <= 0) {
        return maxes;
      } else {
        let [max, currMax] = maxes;
        currMax = Math.max(num, num + currMax);
        max = Math.max(currMax, max);
        return [max, currMax];
      }
    },
    [nums[0], nums[0]]
  );
  return max;
}
