import * as program from "./index";
import * as chai from "chai";

it("Test Case #1", function () {
  chai.expect(program.solution1([8, 4, 2, 1, 3, 6, 7, 9, 5])).to.deep.equal(25);
});
