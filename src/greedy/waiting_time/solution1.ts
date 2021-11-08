export default function waitingTime(queries: number[]) {
  //sort in place - O(nlogn) O(1) space
  queries.sort((a, b) => a - b);
  let totalWaitingTime = 0;
  queries.forEach((time, i) => {
    const queriesLeft = queries.length - i - 1;
    totalWaitingTime += time * queriesLeft;
  });
  return totalWaitingTime;
}
