import { BinaryTree } from "../BinaryTree";

//O(n) time | O(depth / height) space
export default function depth(node: BinaryTree, sum_depth = 0): number {
  //base case
  if (node === null) {
    return 0;
  }
  return (
    sum_depth +
    depth(node.left, sum_depth + 1) +
    depth(node.right, sum_depth + 1)
  );
}
