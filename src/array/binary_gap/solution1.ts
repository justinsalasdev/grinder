export default function binary_gap(num: number) {
  const digits = num.toString(2).split("");
  return get_gap(digits, []);
}

function get_gap(digits: string[], gaps: number[]): number | void {
  console.log(gaps);
  //find the first "1"
  const first = digits.indexOf("1");

  if (first > -1) {
    const next = digits.slice(first + 1);
    const second = next.indexOf("1");

    if (second > 0) {
      gaps.push(second);
    }

    return get_gap(next.slice(second + 1), gaps);
  }

  return gaps.length > 0 ? Math.max.apply(Math, gaps) : 0;
}
