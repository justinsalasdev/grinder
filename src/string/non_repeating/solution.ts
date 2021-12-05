

type Tally = {[index:string]:number}
export default function first_non_repeating(input:string){
  const tally:Tally = {}
  for(const char of input){
    tally[char] ||= Number.MIN_VALUE;
    tally[char] &&= tally[char] + 1;
  }

  for(const char in tally){
    if(tally[char] === 1){
      return input.indexOf(char)
    }
  }

  return -1
}