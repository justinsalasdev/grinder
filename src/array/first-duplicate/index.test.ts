// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from "./index";
import * as chai from "chai";

it("first duplicate", function () {
  const input = [2, 1, 5, 2, 3, 3, 4];
  const expected = 2;
  const actual1 = program.solution1(input);
  chai.expect(actual1).to.deep.equal(expected);
  const actual2 = program.solution2(input);
  chai.expect(actual2).to.deep.equal(expected);
});
