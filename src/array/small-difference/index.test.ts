// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from "./index";
import * as chai from "chai";

it("smallest difference", function () {
  chai
    .expect(program.solution1([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]))
    .to.deep.equal([28, 26]);
});
