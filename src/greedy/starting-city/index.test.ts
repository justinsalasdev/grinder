import * as program from "./index";
import * as chai from "chai";

it("valid starting city ", function () {
  const distances = [5, 25, 15, 10, 15];
  const fuel = [1, 2, 1, 0, 3];
  const mpg = 10;
  const expected = 4;
  const actual = program.solution1(distances, fuel, mpg);
  chai.expect(actual).to.deep.equal(expected);
});
