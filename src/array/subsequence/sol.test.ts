// import * as program from "./program";
import isValidSubsequence1 from "./solution1";
import isValidSubsequence2 from "./solution2";
import * as chai from "chai";

const solutions = [isValidSubsequence1, isValidSubsequence2];

solutions.forEach((solution, i) => {
  it(`subsequence sol${i} test`, function () {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    let sequence = [1, 6, -1, 10];
    chai.expect(solution(array, sequence)).to.deep.equal(true);
    sequence = [1, 6, 8, 10];
    chai.expect(solution(array, sequence)).to.deep.equal(true);
    sequence = [1, 6, 8, 11];
    chai.expect(solution(array, sequence)).to.deep.equal(false);
  });
});
