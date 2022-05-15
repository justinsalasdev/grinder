export function moveElementToEnd(nums: number[], numToMove: number) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    while (i < j /* dont dec j when j passes i **/ && nums[j] === numToMove)
      j--;
    if (nums[i] === numToMove) swap(i, j, nums);
    i++;
  }
  return nums;
}

function swap(i: number, j: number, nums: number[]) {
  const temp = nums[j];
  nums[j] = nums[i];
  nums[i] = temp;
}
