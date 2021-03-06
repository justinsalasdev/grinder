import findClosestValue1 from "./solution1";
import findClosestValue2 from "./solution2";
import * as chai from "chai";

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const solutions = [findClosestValue1, findClosestValue2];

solutions.forEach((solution, i) => {
  it(`find closest value in BST sol ${i + 1}`, function () {
    const root = new BST(10);
    root.left = new BST(5);
    root.left.left = new BST(2);
    root.left.left.left = new BST(1);
    root.left.right = new BST(5);
    root.right = new BST(15);
    root.right.left = new BST(13);
    root.right.left.right = new BST(14);
    root.right.right = new BST(22);
    const expected = 13;
    const actual = solution(root, 12);
    chai.expect(actual).to.deep.equal(expected);
  });
});
