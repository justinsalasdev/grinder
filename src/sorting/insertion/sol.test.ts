import * as chai from "chai";
import sort from "./solution1";

it("insertion sort test", function () {
  const input = [8, 5, 2, 9, 5, 6, 3];
  chai.expect(sort(input)).to.deep.equal([2, 3, 5, 5, 6, 8, 9]);
});
