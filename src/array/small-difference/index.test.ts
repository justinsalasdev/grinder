import * as program from "./index";
import * as chai from "chai";

it("smallest difference", function () {
  chai
    .expect(program.solution1([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]))
    .to.deep.equal([28, 26]);
});
