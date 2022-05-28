import * as program from "./index";
import * as chai from "chai";

it("group anagrams", function () {
  const words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
  const expected = [
    ["yo", "oy"],
    ["flop", "olfp"],
    ["act", "tac", "cat"],
    ["foo"],
  ];
  const output = program
    .solution1(words)
    .map((anagramGroup) => anagramGroup.sort());

  compare(expected, output);
});

function compare(expected: string[][], output: string[][]) {
  chai.expect(output.length).to.deep.equal(expected.length);
  for (const group of expected) {
    chai.expect(output).to.deep.include(group.sort());
  }
}
