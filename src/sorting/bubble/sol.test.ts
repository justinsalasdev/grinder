import * as chai from "chai";
import bubble_sort from "./solution1";

it("Test Case #1", function () {
  const input = [8, 5, 2, 9, 5, 6, 3];
  chai.expect(bubble_sort(input)).to.deep.equal([2, 3, 5, 5, 6, 8, 9]);
});
