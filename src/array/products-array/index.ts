/**
 * 
 Write a function that takes in a non-empty array of integers and returns an
  array of the same length, where each element in the output array is equal to
  the product of every other number in the input array.

  In other words, the value at output[i] is equal to the product of
  every number in the input array other than input[i].

Note that you're expected to solve this problem without using division.
Sample Input
array = [5, 1, 4, 2]

Sample Output
[8, 40, 10, 20]
// 8 is equal to 1 x 4 x 2
// 40 is equal to 5 x 4 x 2
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4
 */
export function solution1(nums: number[]) {
  const products: number[] = new Array(nums.length).fill(1);

  let leftRunningProduct = 1;
  //[x, y, z,[x * y * z]] // get product of members left of "f"
  for (let f = 0; f < nums.length; f++) {
    products[f] = leftRunningProduct;
    leftRunningProduct *= nums[f];
  }

  let rightRunningProduct = 1;
  //[[x * y * z], x, y, z] // get product of members right of "r", and multiply to products
  //filled with "f"
  for (let r = nums.length - 1; r >= 0; r--) {
    products[r] *= rightRunningProduct;
    rightRunningProduct *= nums[r];
  }

  return products;
}
