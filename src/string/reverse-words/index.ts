export function solution1(string: string) {
  const chars = string.split("").map((char) => char);
  reverseRange(chars, 0, chars.length - 1);

  let w = 0; //start of word index
  while (w < chars.length) {
    let e /**end of word index */ = w;
    while (e < chars.length && chars[e] !== " ") {
      e++;
    }
    reverseRange(chars, w, e - 1 /**overshoots 1 */);
    w = e + 1;
  }

  return chars.join("");
}

function reverseRange(range: string[], start: number, end: number) {
  while (start < end) {
    const temp = range[start];
    range[start] = range[end];
    range[end] = temp;
    start++;
    end--;
  }
}
