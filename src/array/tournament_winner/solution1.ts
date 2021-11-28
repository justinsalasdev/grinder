type Tally = { [index: string]: number };
export default function get_winner(
  competitions: string[][],
  results: number[]
) {
  // Write your code here.
  const tally: Tally = competitions.reduce((prev, curr, i) => {
    const [home, away] = curr;
    const winner = results[i] === 1 ? home : away;
    prev[winner] ||= Number.MIN_VALUE;
    prev[winner] &&= prev[winner] + 1;

    return prev;
  }, {} as Tally);

  const winner = { score: 0, name: "" };

  for (let team in tally) {
    if (tally[team] > winner.score) {
      winner.name = team;
      winner.score = tally[team];
    }
  }

  return winner.name;
}
