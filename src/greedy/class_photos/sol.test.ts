import class_photo from "./solution1";
import * as chai from 'chai'

it('class photo test', function () {
  const redShirtHeights = [5, 8, 1, 3, 4];
  const blueShirtHeights = [6, 9, 2, 4, 5];
  const expected = true;
  const actual = class_photo(redShirtHeights, blueShirtHeights);
  chai.expect(actual).to.deep.equal(expected);
});