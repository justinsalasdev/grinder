import * as chai from "chai";
import { solutions } from "./solution";

solutions.forEach((solution, i) => {
  it(`max non adjacent sum test ${i + 1}`, function () {
    chai.expect(solution([75, 105, 120, 75, 90, 135])).to.deep.equal(330);
  });
});
