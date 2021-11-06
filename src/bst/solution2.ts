import { BST } from "./sol.test";

export default function findClosestValue(
  node: BST | null,
  target: number,
  closest = Number.MAX_SAFE_INTEGER
) {
  if (node === null) {
    return closest;
  }

  let curr = node;

  while (curr !== null) {
    if (Math.abs(target - closest) > Math.abs(target - curr.value)) {
      closest = curr.value;
    }
    if (target > curr.value) {
      curr = curr.right;
    } else if (target < curr.value) {
      curr = curr.left;
    } else {
      break;
    }
  }
  return closest;
}
