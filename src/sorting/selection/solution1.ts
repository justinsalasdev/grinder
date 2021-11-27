type N = number;
export default function sort(nums: N[]) {
  //c = current index
  for (let c = 0; c < nums.length - 1; c++) {
    let s = c; //s = current smallest index

    //n = next index from s
    for (let n = s + 1; n < nums.length; n++) {
      if (nums[s] > nums[n]) {
        s = n;
      }
    }
    swap(c, s, nums);
  }
  return nums;
}

function swap(i: N, j: N, nums: N[]) {
  [nums[j], nums[i]] = [nums[i], nums[j]];
}
