import { BST } from "./sol.test";

export default function findClosestValue(
  node: BST | null,
  target: number,
  closest = Number.MAX_SAFE_INTEGER
) {
  if (node === null) {
    return closest;
  }
  //update closest
  if (Math.abs(target - node.value) < Math.abs(target - closest)) {
    closest = node.value;
  }
  if (node.value < target) {
    return findClosestValue(node.right, target, closest);
  } else if (target < node.value) {
    return findClosestValue(node.left, target, closest);
  } else {
    return closest;
  }
}
