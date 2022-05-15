export function solution1(nums: number[][]) {
  const result: number[] = [];
  let startColIdx = 0;
  let endColIdx = nums[0].length - 1;

  let startRowIdx = 0;
  let endRowIdx = nums.length - 1;

  /**
   *
   * perfect square
    [ 1,  2,  3,  4],
    [12, 13, 14,  5],
    [11, 16, 15,  6],
    [10,  9,  8,  7],

    * single row on middle
    [ 1,  2,  3, 4],
    [10, 11, 12, 5],
    [ 9,  8,  7, 6],

    * single col on middle
    [ 1,  2,  3],
    [ 8,  9,  4],
    [ 7,  6,  5],
    [ 7,  6,  5],

   */

  while (startRowIdx <= endRowIdx && startColIdx <= endColIdx) {
    //top side →
    for (let colIdx = startColIdx; colIdx <= endColIdx; colIdx++) {
      result.push(nums[startRowIdx][colIdx]);
    }
    //right side ↓
    for (let rowIdx = startRowIdx + 1; rowIdx <= endRowIdx; rowIdx++) {
      result.push(nums[rowIdx][endColIdx]);
    }

    //bottom side ←
    for (let colIdx = endColIdx - 1; colIdx >= startColIdx; colIdx--) {
      if (startRowIdx === endRowIdx) break;
      result.push(nums[endRowIdx][colIdx]);
    }

    //left side ↑
    for (let rowIdx = endRowIdx - 1; rowIdx > startRowIdx; rowIdx--) {
      if (startColIdx === endColIdx) break;
      result.push(nums[rowIdx][startColIdx]);
    }

    startRowIdx++;
    endRowIdx--;

    startColIdx++;
    endColIdx--;
  }

  return result;
}

export function solution2(nums: number[][]) {
  const result: number[] = [];
  fillPerimeter(nums, 0, nums.length - 1, 0, nums[0].length - 1, result);
  return result;
}

function fillPerimeter(
  nums: number[][],
  startRowIdx: number,
  endRowIdx: number,
  startColIdx: number,
  endColIdx: number,
  result: number[]
) {
  if (startRowIdx > endRowIdx || startColIdx > endColIdx) return;
  for (let colIdx = startColIdx; colIdx <= endColIdx; colIdx++) {
    result.push(nums[startRowIdx][colIdx]);
  }
  //right side ↓
  for (let rowIdx = startRowIdx + 1; rowIdx <= endRowIdx; rowIdx++) {
    result.push(nums[rowIdx][endColIdx]);
  }

  //bottom side ←
  for (let colIdx = endColIdx - 1; colIdx >= startColIdx; colIdx--) {
    if (startRowIdx === endRowIdx) break;
    result.push(nums[endRowIdx][colIdx]);
  }

  //left side ↑
  for (let rowIdx = endRowIdx - 1; rowIdx > startRowIdx; rowIdx--) {
    if (startColIdx === endColIdx) break;
    result.push(nums[rowIdx][startColIdx]);
  }

  fillPerimeter(
    nums,
    startRowIdx + 1,
    endRowIdx - 1,
    startColIdx + 1,
    endColIdx - 1,
    result
  );
}
