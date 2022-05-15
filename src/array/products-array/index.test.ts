import * as program from "./index";
import * as chai from "chai";

it("product array", function () {
  const array = [5, 1, 4, 2];
  const expected = [8, 40, 10, 20];
  const actual = program.solution1(array);
  chai.expect(actual).to.deep.equal(expected);
});
