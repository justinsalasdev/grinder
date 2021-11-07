import { BinaryTree } from "../BinaryTree";

//O(n) time | O(s) space --> s is length of stack
type Item = { node: BinaryTree; depth: number };
type Stack = Item[];
export default function depth(node: BinaryTree) {
  let sum_depth = 0;
  let stack: Stack = [{ node, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (node === null) continue;
    sum_depth += depth;

    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sum_depth;
}
