export function solution1(nums: number[][]) {
  /**
   * [
   *  c   c   c   c
   *[ 01, 02, 03, 04 ], r
   *[ 05, 06, 07, 08 ], r
   *[ 09, 10, 11, 12 ], r
   *[ 13, 14, 15, 16 ], r
   * ]
   */
  const numR = nums.length - 1;
  const numC = nums[0].length - 1;
  const result = [];
  let isGoingDown = true;

  let r = 0;
  let c = 0;

  while (!isOutOfBounds(r, c, numR, numC)) {
    result.push(nums[r][c]);
    if (isGoingDown) {
      if (
        c == 0 /** if in left bound */ ||
        r === numR /** or in bottom bound */
      ) {
        //if in bottom bound only
        if (r === numR) {
          c++; // go right
          // if in left bound
        } else {
          r++; // go down
        }

        //once hit going down bounds and moved accordingly, set direction /`
        isGoingDown = false;

        //if going down && not in left or bottom bound
      } else {
        r++;
        c--;
      }
      //if going up
    } else {
      if (r === 0 /**if at top bound*/ || c === numC /** or at right bound */) {
        //hit top bound only
        if (c === numC) {
          r++;
        } else {
          c++;
        }

        //once hit going down bounds and moved accordingly, set direction ,/
        isGoingDown = true;

        //not in top or right bound
      } else {
        c++; // go right
        r--; // go up
      }
    }
  }

  return result;
}

function isOutOfBounds(r: number, c: number, numR: number, numC: number) {
  return r < 0 || r > numR || c < 0 || c > numC;
}
