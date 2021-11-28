type Tally = { [index: string]: number };
export default function get_winner(
  competitions: string[][],
  results: number[]
) {
  // Write your code here.
  const tally: Tally = competitions.reduce((prev, curr, i) => {
    const [home, away] = curr;
    if (results[i] === 1) {
      prev[home] ||= Number.MIN_VALUE;
      prev[home] &&= prev[home] + 1;
    } else {
      prev[away] ||= Number.MIN_VALUE;
      prev[away] &&= prev[away] + 1;
    }
    return prev;
  }, {} as Tally);

  console.log(tally);
  const winner = { score: 0, name: "" };

  for (let team in tally) {
    if (tally[team] > winner.score) {
      winner.name = team;
      winner.score = tally[team];
    }
  }

  return winner.name;
}
