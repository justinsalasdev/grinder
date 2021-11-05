import { BST } from "./sol.test";

export default function findClosestValue(root: BST, target: number) {
  return exploreNode(root, target, root.value);
}

function exploreNode(
  node: BST | null,
  target: number,
  closest: number
): number {
  console.log("current", node?.value, closest);
  //nothing to explore further
  if (node === null) {
    return closest;
  }
  //update closest
  if (Math.abs(target - node.value) < Math.abs(target - closest)) {
    closest = node.value;
  }
  if (node.value < target) {
    return exploreNode(node.right, target, closest);
  } else if (target < node.value) {
    return exploreNode(node.left, target, closest);
  } else {
    return closest;
  }
}
