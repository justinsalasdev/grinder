export function assignTask(k: number, durations: number[]) {
  const sortedDurations = durations
    .map((duration, i) => [duration, i])
    .sort(([prevDur], [currDur]) => prevDur - currDur);
  // Write your code here.
  //durations would always be even
  //k = 1, durations = 2
  const secondHalf = sortedDurations.slice(k);
  return secondHalf.reverse().map((el, i) => [el[1], sortedDurations[i][1]]);
}
