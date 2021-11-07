import * as chai from "chai";
import { BinaryTree } from "../BinaryTree";
import depth1 from "./solution1";
import depth2 from "./solution2";

it("binary tree depth test", function () {
  const root = new BinaryTree(1);
  root.left = new BinaryTree(2);
  root.left.left = new BinaryTree(4);
  root.left.left.left = new BinaryTree(8);
  root.left.left.right = new BinaryTree(9);
  root.left.right = new BinaryTree(5);
  root.right = new BinaryTree(3);
  root.right.left = new BinaryTree(6);
  root.right.right = new BinaryTree(7);
  const actual1 = depth1(root);
  const actual2 = depth2(root);
  chai.expect(actual1).to.deep.equal(16);
  chai.expect(actual2).to.deep.equal(16);
});
