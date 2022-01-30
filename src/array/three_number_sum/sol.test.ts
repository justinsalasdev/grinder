import * as chai from "chai";
import findArrayOfSums from "./solution1";

it("three number sum", function () {
  chai.expect(findArrayOfSums([12, 3, 1, 2, -6, 5, -8, 6], 0)).to.deep.equal([
    [-8, 2, 6],
    [-8, 3, 5],
    [-6, 1, 5],
  ]);
});
