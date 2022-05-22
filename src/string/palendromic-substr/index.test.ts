import * as program from "./index";
import * as chai from "chai";

it("longest palendromic substr", function () {
  chai.expect(program.solution1("abaxyzzyxf")).to.deep.equal("xyzzyx");
});
