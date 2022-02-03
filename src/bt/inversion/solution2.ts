class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//O(n) t | O(d) space d = depth
export function invertBinaryTree(tree: BinaryTree | null) {
  // Write your code here.
  if (tree === null) return;
  swap(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

function swap(tree: BinaryTree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}
