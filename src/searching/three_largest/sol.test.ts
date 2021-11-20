import * as chai from 'chai';
import three_largest from './solution1';

it('three largest test', function () {
  chai
    .expect(three_largest([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))
    .to.deep.equal([18, 141, 541]);
});
