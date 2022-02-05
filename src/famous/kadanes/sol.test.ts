import * as chai from "chai";
import maxSubArraySum from "./solution";

it("kadane test", function () {
  chai
    .expect(
      maxSubArraySum([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
    )
    .to.deep.equal(19);
});
