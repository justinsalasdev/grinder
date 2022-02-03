import * as chai from "chai";
import { invertBinaryTree as sol1 } from "./solution1";
import { invertBinaryTree as sol2 } from "./solution2";

class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values: number[], i = 0): BinaryTree {
    if (i >= values.length) return this;
    const queue: BinaryTree[] = [this];
    while (queue.length > 0) {
      let current = queue.shift()!;
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }

  invertedInsert(values: number[], i = 0): BinaryTree {
    if (i >= values.length) return this;
    const queue: BinaryTree[] = [this];
    while (queue.length > 0) {
      let current = queue.shift()!;
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
    }
    this.invertedInsert(values, i + 1);
    return this;
  }
}

[sol1, sol2].forEach((sol, i) => {
  it(`bst inversion test${i + 1}`, function () {
    const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9]);
    const invertedTree = new BinaryTree(1).invertedInsert([
      2, 3, 4, 5, 6, 7, 8, 9,
    ]);
    sol(tree);
    chai.expect(tree).to.deep.equal(invertedTree);
  });
});
