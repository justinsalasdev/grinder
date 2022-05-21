import * as program from "./index";
import * as chai from "chai";

it("largest range", function () {
  chai
    .expect(program.solution1([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]))
    .to.deep.equal([0, 7]);
});
