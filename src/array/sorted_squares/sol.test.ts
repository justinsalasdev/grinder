import * as chai from "chai";
import sorted_squares from "./solution1";
import sorted_squares2 from "./solution2";

it("sorted squares test", function () {
  const input = [1, 2, 3, 5, 6, 8, 9];
  const expected = [1, 4, 9, 25, 36, 64, 81];
  chai.expect(sorted_squares(input)).to.deep.equal(expected);
  chai.expect(sorted_squares2(input)).to.deep.equal(expected);
});
