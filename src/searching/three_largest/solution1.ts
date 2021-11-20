

type Trio = (number|null)[]
export default function three_largest(nums:number[]){
  const trio:Trio = [null, null, null]
  for(const num of nums){
    update(trio, num)
  }
  return trio;
}


function update(trio:Trio, num:number){
  if(trio[2] === null || num > trio[2]){
    shift(trio, num, 2)
  } else if (trio[1] === null || num > trio[1]) {
    shift(trio, num, 1)
  } else if (trio[0] === null || num > trio[0]) {
    shift(trio, num, 0)
  }
}


function shift(trio:Trio, num:number, pos:number){
  for(let i = 0; i <= pos; i++){
    if(i === pos){
      trio[i] = num;
    } else {
      trio[i] = trio[i + 1]
    }
  }
}