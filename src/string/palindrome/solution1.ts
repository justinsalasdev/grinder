export default function isPalindrome(input: string) {
  return input === input.split("").reverse().join("");
}
