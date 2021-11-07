import { BinaryTree } from "./sol.test";

export default function branchSums(
  node: BinaryTree | null,
  running = 0,
  sums: number[] = []
): number[] | void {
  if (node === null) {
    return;
  }

  running += node.value;

  if (node.left === null && node.right === null) {
    sums.push(running);
    //for edge case input, node = leaf right away
    return [node.value];
  }

  branchSums(node.left, running, sums);
  branchSums(node.right, running, sums);

  return sums;
}
