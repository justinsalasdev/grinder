//O(n2) time O(1)space
export default function bubble_sort(nums: number[]): number[] {
  let is_sorted = false;
  let counter = 0;

  while (!is_sorted) {
    is_sorted = true;
    //counter++ since at every pass, rightmost num is the largest
    for (let i = 0; i < nums.length - 1 - counter; i++) {
      if (nums[i] > nums[i + 1]) {
        swap(i, i + 1, nums);
        is_sorted = false;
      }
    }
    counter++;
  }
  return nums;
}

function swap(i: number, j: number, nums: number[]): void {
  const temp = nums[j];
  nums[j] = nums[i];
  nums[i] = temp;
}
