export function solution1(nums1: number[], nums2: number[]) {
  nums1.sort((a, b) => a - b); //nlog(n)
  nums2.sort((a, b) => a - b); //nlog(n)
  let idx1 = 0;
  let idx2 = 0;
  let smallest = Number.MAX_VALUE;
  let current = Number.MAX_VALUE;

  let smallestPair: [number, number] = [-1, -1];

  //O(n)
  while (idx1 < nums1.length && idx2 < nums2.length) {
    let num1 = nums1[idx1];
    let num2 = nums2[idx2];

    if (num1 < num2) {
      current = num2 - num1;
      idx1++;
    } else if (num2 < num1) {
      current = num1 - num2;
      idx2++;
    } else {
      return [num1, num2];
    }
    if (current < smallest) {
      smallest = current;
      smallestPair = [num1, num2];
    }
  }
  return smallestPair;
}
