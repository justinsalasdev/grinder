export default function encrypt(input: string, key: number) {
  const chars: string[] = [];
  for (let char of input) {
    chars.push(shift(char, key));
  }
  return chars.join("");
}

function shift(char: string, key: number) {
  const wrapped_key = key % 26; //only 26 letters in alphabeth
  const shifted_code = char.charCodeAt(0) + wrapped_key;
  const wrapped_code =
    //when overflows, start at 96
    shifted_code <= 122 ? shifted_code : 96 + (shifted_code % 122);

  return String.fromCharCode(wrapped_code);
}
