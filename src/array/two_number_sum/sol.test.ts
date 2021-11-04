import * as chai from "chai";
import twoNumberSum1 from "./solution1";
import twoNumberSum2 from "./solution2";
import twoNumberSum3 from "./solution3";

const solutions = [twoNumberSum1, twoNumberSum2, twoNumberSum3];

solutions.forEach((solution, index) => {
  it(`two_number_sum sol${index + 1} test`, function () {
    const output = solution([3, 5, -4, 8, 11, 1, -1, 6], 10);
    chai.expect(output.length === 2).to.deep.equal(true);
    chai.expect(output.includes(11)).to.deep.equal(true);
    chai.expect(output.includes(-1)).to.deep.equal(true);
  });
});
