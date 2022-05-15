import * as program from "./index";
import * as chai from "chai";

it("spiral traverse", function () {
  const matrix = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ];
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  chai.expect(program.solution1(matrix)).to.deep.equal(expected);
  chai.expect(program.solution2(matrix)).to.deep.equal(expected);
});
