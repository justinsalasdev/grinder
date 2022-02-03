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

//O(n)t || O(n)s
export function invertBinaryTree(tree: BinaryTree | null) {
  const queue: Array<BinaryTree | null> = [tree];
  while (queue.length > 0) {
    const current = queue.shift()!;
    if (current === null) continue;
    swap(current);
    queue.push(current.left);
    queue.push(current.right);
  }
  // Write your code here.
}

function swap(tree: BinaryTree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}
