// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
export class MinHeap {
  heap: number[];

  constructor(array: number[]) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array: number[]) {
    // Write your code here.
    return array;
  }

  siftDown() {
    // Write your code here.
  }

  siftUp() {
    let currIdx = this.heap.length - 1;
    let parentIdx = Math.floor((currIdx - 1) / 2);

    while (currIdx > 0 && this.heap[currIdx] < this.heap[parentIdx]) {
      this.swap(currIdx, parentIdx);
      currIdx = parentIdx;
      parentIdx = Math.floor((currIdx - 1) / 2);
    }
  }

  peek() {
    // Write your code here.
    return -1;
  }

  remove() {
    // Write your code here.
    return -1;
  }

  insert(value: number) {
    this.heap.push(value);
    this.siftUp();
  }

  swap(i: number, j: number) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}
