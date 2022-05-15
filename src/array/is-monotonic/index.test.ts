import * as program from "./index";
import * as chai from "chai";

it("is monotonic", function () {
  const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
  const expected = true;
  const actual = program.isMonotonic(array);
  chai.expect(actual).to.deep.equal(expected);
});
