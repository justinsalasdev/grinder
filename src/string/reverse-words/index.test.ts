import * as program from "./index";
import * as chai from "chai";

it("reverse words", function () {
  const input = "AlgoExpert is the best!";
  const expected = "best! the is AlgoExpert";
  const actual = program.solution1(input);
  chai.expect(actual).to.deep.equal(expected);
});
