import * as chai from "chai";
import get_fib1 from "./solution1";
import get_fib2 from "./solution2";
import get_fib3 from "./solution3";

it("fib test", function () {
  chai.expect(get_fib1(6)).to.deep.equal(5);
  chai.expect(get_fib2(6)).to.deep.equal(5);
  chai.expect(get_fib3(6)).to.deep.equal(5);
});
