
export default function encode(input:string){
    const encoded:string[] = [];
    let run_length = 1;
    
    for(let i = 1; i < input.length; i++){
      const curr = input[i]
      const prev = input[i - 1]
      if(prev !== curr || run_length === 9){
        encoded.push(run_length.toString())
        encoded.push(prev);
        run_length = 0;
      }
      run_length++
    }

    encoded.push(run_length.toString())
    encoded.push(input[input.length - 1])

    return encoded.join('')

}