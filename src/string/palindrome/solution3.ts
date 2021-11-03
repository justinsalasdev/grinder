//O(n)T / O(n)S
export default function isPalindrome(input: string) {
  let ldx = 0;
  let rdx = input.length - 1;
  while (ldx < rdx) {
    if (input[ldx++] !== input[rdx--]) return false;
  }
  return true;
}
