import * as chai from "chai";
import get_winner from "./solution1";

it("tournament winner test", function () {
  const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
  ];
  const results = [0, 1, 0];
  const expected = "C#";
  const actual = get_winner(competitions, results);
  chai.expect(actual).to.deep.equal(expected);
});
