export default function tandem_speed(
  reds: number[],
  blues: number[],
  isMax: boolean
) {
  reds.sort((a, b) => a - b);
  blues.sort((a, b) => a - b);
  if (isMax) {
    blues.reverse();
  }

  return reds.reduce((prev, curr, i) => prev + Math.max(curr, blues[i]), 0);
}
