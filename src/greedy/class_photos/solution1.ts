

export default function class_photo(red_heights:number[], blue_heights:number[]){
  //sort input arrays in descending order | O(nLogN)
  red_heights.sort((a,b) => b - a); 
  blue_heights.sort((a,b) => b - a);

  const is_red_first = red_heights[0] < blue_heights[0];

  for(let j in red_heights){
    const i = j as unknown as number;
    const [red_h, blue_h] = [red_heights[i], blue_heights[i]];
    if(is_red_first){
      if(red_h > blue_h){
        return false
      }
    } else {
      if(blue_h > red_h){
        return false
      }
    }
  }
  
  return true;

}