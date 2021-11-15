import * as chai from "chai";
import product_sum, { Nums } from "./solution1";

it("product sum test", function () {
  const test: Nums = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
  chai.expect(product_sum(test)).to.deep.equal(12);
});
