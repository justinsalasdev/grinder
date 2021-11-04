export default function isValidSubsequence(
  array: number[],
  sequence: number[]
) {
  let sdx = 0;
  for (let num of array) {
    if (sdx === sequence.length) break;
    if (sequence[sdx] === num) sdx++;
  }
  return sdx === sequence.length;
}
