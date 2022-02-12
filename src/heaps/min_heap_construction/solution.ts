export class MinHeap {
  heap: number[];

  constructor(nums: number[]) {
    this.heap = this.buildHeap(nums);
  }

  /**helpers */
  getLastIdx(heap: number[]) {
    return heap.length - 1;
  }

  getChildIdx(currIdx: number, which: "1st" | "2nd") {
    return currIdx * 2 + (which === "1st" ? 1 : 2);
  }

  getParentIdx(currIdx: number) {
    return Math.floor((currIdx - 1) / 2);
  }

  swap(i: number, j: number, nums: number[]) {
    const temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
  }

  /**helpers */

  buildHeap(nums: number[]) {
    const lastNumIdx = nums.length - 1;
    const firstParentIdx = Math.floor((lastNumIdx - 1) / 2);
    for (let currIdx = firstParentIdx; currIdx >= 0; currIdx--) {
      this.siftDown(currIdx, lastNumIdx, nums);
    }
    // Write your code here.
    return nums;
  }

  // O(log(n)) t | O(1) s
  siftDown(currIdx: number, endIdx: number, nums: number[]) {
    let childOneIdx = this.getChildIdx(currIdx, "1st");
    let childTwoIdx = this.getChildIdx(currIdx, "2nd");

    //complete tree have it's last level not entirely filled up
    //and filled from left to right --> may not have right child
    while (childOneIdx <= endIdx) {
      //this.heap[childTwoIdx] might be out of arr length and be undefined
      //therefore, just set to max, so child one will always be selected
      const childOneVal = nums[childOneIdx];
      const childTwoVal =
        nums[childTwoIdx] === undefined
          ? Number.MAX_SAFE_INTEGER
          : nums[childTwoIdx];

      let idxToSwap = childOneVal < childTwoVal ? childOneIdx : childTwoIdx;

      if (nums[idxToSwap] < nums[currIdx]) {
        this.swap(currIdx, idxToSwap, nums);
        currIdx = idxToSwap;
        childOneIdx = this.getChildIdx(currIdx, "1st");
        childTwoIdx = this.getChildIdx(currIdx, "2nd");
      } else {
        return;
      }
    }
  }

  // O(log(n)) t | O(1) s
  siftUp(currIdx: number, nums: number[]) {
    let parentIdx = this.getParentIdx(currIdx);
    while (currIdx > 0 && nums[currIdx] < nums[parentIdx]) {
      this.swap(currIdx, parentIdx, nums);
      currIdx = parentIdx;
      parentIdx = this.getParentIdx(currIdx);
    }
    // Write your code here.
  }

  //O(1) t | O(1) s
  peek() {
    return this.heap[0];
  }

  //O(log(n)) t | O(1) space
  remove() {
    this.swap(0, this.getLastIdx(this.heap), this.heap);
    const valToRemove = this.heap.pop();
    this.siftDown(0, this.getLastIdx(this.heap), this.heap);
    return valToRemove;
  }

  // O(log(n)) t | O(1) space
  insert(value: number) {
    this.heap.push(value);
    this.siftUp(this.getLastIdx(this.heap), this.heap);
  }
}
