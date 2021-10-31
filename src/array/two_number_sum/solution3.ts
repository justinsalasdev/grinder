//O(nlogn)T O(1)S
export default function twoNumberSum(input: number[], target: number) {
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
