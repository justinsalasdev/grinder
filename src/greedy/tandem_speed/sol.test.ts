import * as chai from "chai";
import tandem_speed from "./solution1";

it("tandem speed test", function () {
  const redShirtSpeeds = [5, 5, 3, 9, 2];
  const blueShirtSpeeds = [3, 6, 7, 2, 1];
  const fastest = true;
  const expected = 32;
  const actual = tandem_speed(redShirtSpeeds, blueShirtSpeeds, fastest);
  chai.expect(actual).to.deep.equal(expected);
});
