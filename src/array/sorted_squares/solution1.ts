//time N space N
export default function sorted_squares(nums: number[]) {
  const new_nums = new Array(nums.length).fill(0);

  let lp = 0; //left pointer
  let rp = nums.length - 1; //right pointer

  for (let i = nums.length - 1; i >= 0; i--) {
    const [l_num, r_num] = [Math.abs(nums[lp]), Math.abs(nums[rp])];
    if (l_num > r_num) {
      new_nums[i] = l_num ** 2;
      lp++;
    } else {
      new_nums[i] = r_num ** 2;
      rp--;
    }
  }
  return new_nums;
}
