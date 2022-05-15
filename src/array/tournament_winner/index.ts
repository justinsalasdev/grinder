/**
 * 
 * 
  There's an algorithms tournament taking place in which teams of programmers
  compete against each other to solve algorithmic problems as fast as possible.
  Teams compete in a round robin, where each team faces off against all other
  teams. Only two teams compete against each other at a time, and for each
  competition, one team is designated the home team, while the other team is the
  away team. In each competition there's always one winner and one loser; there
  are no ties. A team receives 3 points if it wins and 0 points if it loses. The
  winner of the tournament is the team that receives the most amount of points.
 */

type Tally = { [index: string]: number };
export function solution1(competitions: string[][], results: number[]) {
  // Write your code here.
  const tally = competitions.reduce((prev, [home, away], i) => {
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
