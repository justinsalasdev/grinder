const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const num_alphabets = alphabet.length;
export default function encrypt(input: string, key: number) {
  const chars = [];
  for (let char of input) {
    chars.push(shift(char, key));
  }
  return chars.join("");
}

function shift(char: string, key: number) {
  const wrapped_key = key % 26;
  const new_idx = (alphabet.indexOf(char) + wrapped_key) % num_alphabets;
  return alphabet[new_idx];
}
