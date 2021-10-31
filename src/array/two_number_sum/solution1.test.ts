import * as chai from "chai";
import twoNumberSum from "./solution1";

it("two_number_sum sol1 test", function () {
  const output = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
  chai.expect(output.length === 2).to.deep.equal(true);
  chai.expect(output.includes(11)).to.deep.equal(true);
  chai.expect(output.includes(-1)).to.deep.equal(true);
});
