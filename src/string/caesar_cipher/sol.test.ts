import * as chai from "chai";
import encrypt1 from "./solution1";
import encrypt2 from "./solution2";

it(`caesar cipher test`, function () {
  chai.expect(encrypt1("xyz", 2)).to.deep.equal("zab");
  chai.expect(encrypt1("abc", 1)).to.deep.equal("bcd");
  chai.expect(encrypt1("fab", 1)).to.deep.equal("gbc");
  chai.expect(encrypt2("xyz", 2)).to.deep.equal("zab");
  chai.expect(encrypt2("abc", 1)).to.deep.equal("bcd");
  chai.expect(encrypt2("fab", 1)).to.deep.equal("gbc");
});
