type Lookup = { [index: number]: boolean };

//O(n) time | O(n) space
export function solution1(nums: number[]) {
  let maxRange: [number, number] = [-1, -1];
  let longestLength = 0;

  //generate lookup
  const lookup = nums.reduce((lookup, num) => {
    lookup[num] = false; //(unexplored)
    return lookup;
  }, {} as Lookup);

  for (const num of nums) {
    if (lookup[num]) continue;
    //if not explored,
    lookup[num] = true;
    let currLength = 1;
    let f = num - 1; //check if nums to left of num is in lookup
    let r = num + 1; //check if nums to right of num is in lookup

    while (f in lookup) {
      lookup[f] = true; //set as explored
      currLength++;
      f--;
    }

    while (r in lookup) {
      lookup[r] = true; //set as explored
      currLength++;
      r++;
    }

    if (currLength > longestLength) {
      longestLength = currLength;
      maxRange = [f + 1, r - 1];
    }
  }

  return maxRange;
}
