//O(n)T / O(n)S
export default function isPalindrome(input: string, left = 0) {
  const right = input.length - 1 - left;
  return (
    left >= right ||
    (input[left] === input[right] && isPalindrome(input, left + 1))
  );
}
