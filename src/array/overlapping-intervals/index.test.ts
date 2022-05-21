import * as program from "./index";
import * as chai from "chai";

it("merge overlapping intervals", function () {
  const intervals: program.Interval[] = [
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10],
  ];
  const expected = [
    [1, 2],
    [3, 8],
    [9, 10],
  ];
  const actual = program.solution1(intervals);
  chai.expect(actual).to.deep.equal(expected);
});
