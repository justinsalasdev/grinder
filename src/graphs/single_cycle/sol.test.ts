import * as chai from "chai";
import hasSingleCycle from "./solution";

it("single cycle test", function () {
  chai.expect(hasSingleCycle([2, 3, 1, -4, -4, 2])).to.deep.equal(true);
});
