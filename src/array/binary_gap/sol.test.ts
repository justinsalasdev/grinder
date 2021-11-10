import binary_gap from "./solution1";
import * as chai from "chai";

it("binary gap test", function () {
  chai.expect(binary_gap(1)).to.deep.equal(0);
  chai.expect(binary_gap(5)).to.deep.equal(1);
  chai.expect(binary_gap(1000)).to.deep.equal(1);
  chai.expect(binary_gap(51272)).to.deep.equal(4);
  chai.expect(binary_gap(529)).to.deep.equal(4);
});
