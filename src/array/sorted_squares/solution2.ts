//time nLogN space N
export default function sorted_squares2(nums: number[]) {
  return nums.map((num) => num ** 2).sort((a, b) => a - b);
}
