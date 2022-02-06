export default function hasSingleCycle(nums: number[]) {
  let numVisits = 0;
  let cdx = 0; //current index

  while (numVisits < nums.length) {
    //haven't visited all but somehow returned to starting
    if (numVisits > 0 && cdx === 0) {
      return false;
    }
    numVisits++;
    cdx = getNextIdx(cdx, nums);
  }

  return cdx === 0;
}

function getNextIdx(cdx: number, nums: number[]) {
  const numJumps = nums[cdx];
  const nextIdx = (cdx + numJumps) % nums.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + nums.length;
}
