import * as program from "./index";
import * as chai from "chai";

it("zigzag traverse", function () {
  const test = [
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16],
  ];
  chai
    .expect(program.solution1(test))
    .to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
});
