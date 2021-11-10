import * as chai from "chai";
import binary_search1 from "./solution1";
import binary_search2 from "./solution2";

it("binary search test", () => {
  chai
    .expect(binary_search1([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
    .to.deep.equal(3);
  chai
    .expect(binary_search1([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 46))
    .to.deep.equal(-1);
  chai
    .expect(binary_search2([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
    .to.deep.equal(3);
  chai
    .expect(binary_search2([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 46))
    .to.deep.equal(-1);
});
