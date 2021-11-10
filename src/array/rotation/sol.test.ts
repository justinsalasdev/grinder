import * as chai from "chai";
import rotate from "./solution1";

it(`array rotation test`, function () {
  chai.expect(rotate([1, 2, 3, 4], 2)).to.deep.equal([3, 4, 1, 2]);
  chai.expect(rotate([1, 2, 3, 4], 1)).to.deep.equal([4, 1, 2, 3]);
});
