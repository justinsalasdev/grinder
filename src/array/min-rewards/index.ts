export function solution1(scores: number[]) {
  const rewards = scores.map(() => 1);
  for (let i = 1 /**start at 2nd */; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) {
      //if curr > prev then, rewardCurr > rewardPrev + 1
      rewards[i] = rewards[i - 1] + 1;
    }
  }

  for (let i = scores.length - 2 /**start at 2nd to last */; i >= 0; i--) {
    if (scores[i] > scores[i + 1]) {
      //if si is greater than s(i+1), set reward to max(si, s(i+1))
      rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
    }
  }

  return rewards.reduce((total, reward) => total + reward);
}
