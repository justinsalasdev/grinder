import * as chai from "chai";
import BST from "./solution1";

it("bst methods #1", function () {
  const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.left = new BST(13);
  root.right.left.right = new BST(14);
  root.right.right = new BST(22);

  root.insert(12);
  chai.expect(root.right.left.left).to.not.be.null;
  chai.expect(root.right.left.left!.value).to.deep.equal(12);

  root.remove(10);
  chai.expect(root.contains(10)).to.deep.equal(false);
  chai.expect(root.value).to.deep.equal(12);

  chai.expect(root.contains(15)).to.deep.equal(true);
});
