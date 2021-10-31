//O(n^2)T & O(1) space
export default function twoNumberSum(input: number[], target: number) {
  for (let i = 0; i < input.length; i++) {
    const firstNum = input[i];
    for (let j = i + 1; j < input.length; j++) {
      const secondNum = input[j];
      if (firstNum + secondNum === target) {
        return [firstNum, secondNum];
      }
    }
  }
  //return if no pair found
  return [];
}
