import * as chai from "chai";
import * as sols from "./index";

const solutions = [sols.solution1, sols.solution2, sols.solution3];

solutions.forEach((solution, index) => {
  it(`two_number_sum sol${index + 1} test`, function () {
    const output = solution([3, 5, -4, 8, 11, 1, -1, 6], 10);
    chai.expect(output.length === 2).to.deep.equal(true);
    chai.expect(output.includes(11)).to.deep.equal(true);
    chai.expect(output.includes(-1)).to.deep.equal(true);
  });
});
