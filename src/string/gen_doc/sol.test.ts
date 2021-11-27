import * as chai from "chai";
import can_generate from "./solution1";

it("gen doc test", function () {
  const characters = "he drwleHlo ol!Ya!";
  const document = "Hello world! Yeah!";
  const expected = true;
  const actual = can_generate(characters, document);
  chai.expect(actual).to.deep.equal(expected);
});
