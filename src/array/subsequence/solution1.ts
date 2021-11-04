export default function isValidSubsequence(
  array: number[],
  sequence: number[]
) {
  let adx = 0; //array pointer
  let sdx = 0; //sequence pointer

  while (adx < array.length && sdx < sequence.length) {
    if (array[adx] === sequence[sdx]) {
      sdx++;
    }
    adx++;
  }
  return sdx === sequence.length;
}
