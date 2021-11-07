import * as chai from "chai";
import { BinaryTree } from "../BinaryTree";
import branchSums from "./solution1";

it("branch sums sol1 test", function () {
  const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  chai.expect(branchSums(tree!)).to.deep.equal([15, 16, 18, 10, 11]);
});
