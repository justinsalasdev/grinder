import * as chai from "chai";
import waitingTime from "./solution1";

it("waiting time test", function () {
  const queries = [3, 2, 1, 2, 6];
  const expected = 17;
  const actual = waitingTime(queries);
  chai.expect(actual).to.deep.equal(expected);
});
