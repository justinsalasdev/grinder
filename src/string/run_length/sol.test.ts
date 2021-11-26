import * as chai from 'chai';
import encode from './solution';

it('run length encoding test', function () {
  const string = 'AAAAAAAAAAAAABBCCCCDD';
  const expected = '9A4A2B4C2D';
  const actual = encode(string);
  chai.expect(actual).to.deep.equal(expected);
});