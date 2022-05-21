import * as program from "./index";
import * as chai from "chai";

function sortAndStringify(array: number[]) {
  return array.sort((a, b) => a - b).join(",");
}

it("four number sum", function () {
  const output = program.solution1([7, 6, 4, -1, 1, 2], 16);
  const stringOutput = output.map(sortAndStringify);
  const quadruplets = [
    [7, 6, 4, -1],
    [7, 6, 1, 2],
  ];
  chai.expect(stringOutput.length === 2).to.be.true;
  for (const quadruplet of quadruplets) {
    chai.expect(stringOutput).to.include(sortAndStringify(quadruplet));
  }
});
