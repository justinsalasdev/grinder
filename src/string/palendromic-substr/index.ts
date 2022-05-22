type Bound = [number, number];

export function solution1(string: string) {
  let longestBound: Bound = [0, 0]; //a single letter is palindromic

  for (
    let i = 1 /** expanding from 0 to left is out of bounds already */;
    i < string.length;
    i++
  ) {
    const oddBound = getBound(string, i - 1, i + 1); //[a,x,a] - expand form x
    const evenBound = getBound(string, i - 1, i); // [a,b,b,a] - expand from 'b's
    longestBound = getLongerBound(
      getLongerBound(oddBound, evenBound),
      longestBound
    );
  }

  return string.slice(longestBound[0], longestBound[1] + 1);
}

function getLongerBound<T extends Bound>(bound1: T, bound2: T): T {
  return getBoundDist(bound1) > getBoundDist(bound2) ? bound1 : bound2;
}

function getBoundDist(bound: Bound): number {
  return bound[1] - bound[0];
}

function getBound(string: string, f: number, r: number): Bound {
  while (f >= 0 && r < string.length) {
    if (string[f] !== string[r]) break;
    f--;
    r++;
  }
  return [f + 1, r - 1]; // f & r overshoots by 1 to break loop
}

solution1("abaxyzzyxf");
