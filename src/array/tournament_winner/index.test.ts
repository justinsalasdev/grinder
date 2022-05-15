import * as chai from "chai";
import { solution1 } from "./index";

it("tournament winner test", function () {
  const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
  ];
  const results = [0, 1, 0];
  const expected = "C#";
  const actual = solution1(competitions, results);
  chai.expect(actual).to.deep.equal(expected);
});
