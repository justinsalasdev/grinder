import * as program from "./index";
import * as chai from "chai";

it("sorted sub array", function () {
  chai
    .expect(program.solution1([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]))
    .to.deep.equal([3, 9]);
});
