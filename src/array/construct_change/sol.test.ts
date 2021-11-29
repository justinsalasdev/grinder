import * as chai from "chai";
import min_change from "./solution.test";

it("min change test", function () {
  const input = [5, 7, 1, 1, 2, 3, 22];
  const expected = 20;
  const actual = min_change(input);
  chai.expect(actual).to.deep.equal(expected);
});
