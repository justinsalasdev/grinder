type n = number;
type triplet = [n, n, n];
export default function findArrayOfSums(input: n[], target: n): triplet[] {
  //O(nlogn) T
  input.sort((prev, curr) => prev - curr); //sort ascending
  //O(n) S
  const arrayOfSums: triplet[] = [];
  const _rdx = input.length - 1;
  //O(n^2) T
  for (let i = 0; i < input.length - 2; i++) {
    //loop before rdx only
    let ldx = i + 1;
    let rdx = _rdx;
    while (ldx < rdx) {
      const sum = input[i] + input[rdx] + input[ldx];
      if (sum === target) {
        arrayOfSums.push([input[i], input[ldx], input[rdx]]);
        rdx--;
        ldx++;
      } else if (sum > target) {
        rdx--;
      } else if (sum < target) {
        ldx++;
      }
    }
  }

  return arrayOfSums;
}
