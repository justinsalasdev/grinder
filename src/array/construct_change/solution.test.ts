export default function min_change(coins: number[]) {
  coins.sort((a, b) => a - b); //nLogN;
  let curr_change = 0;

  for (let coin of coins) {
    if (coin > curr_change + 1) return curr_change + 1;
    curr_change += coin;
  }
  return curr_change + 1;
}
