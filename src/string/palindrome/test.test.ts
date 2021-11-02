import * as chai from "chai";
import isPalindrome1 from "./solution1";
import isPalindrome2 from "./solution2";

const solutions = [isPalindrome1, isPalindrome2];

solutions.forEach((solution, index) => {
  it(`palindrome sol${index + 1} test`, function () {
    chai.expect(solution("abcdcba")).to.deep.equal(true);
  });
});
