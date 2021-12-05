

import * as chai from 'chai';
import first_non_repeating from './solution';

it('non repeating test', function () {
  const input = 'abcdcaf';
  const expected = 1;
  const actual = first_non_repeating(input);
  chai.expect(actual).to.deep.equal(expected);
});
