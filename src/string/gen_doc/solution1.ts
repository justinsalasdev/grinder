type Tally = { [index: string]: number };
export default function can_generate(characters: string, document: string) {
  const tally: Tally = {};
  //tally requirements
  for (let char of characters) {
    tally[char] ||= Number.MIN_VALUE;
    tally[char] &&= tally[char] + 1;
  }

  //consume requirements
  for (let char of document) {
    if (!(char in tally) || tally[char] === 0) return false;
    tally[char]--;
  }

  return true;
}
