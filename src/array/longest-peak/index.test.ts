import * as program from "./index";
import * as chai from "chai";

it("longest peak", function () {
  const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
  const expected = 6;
  chai.expect(program.solution1(array)).to.deep.equal(expected);
});
