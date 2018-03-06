function selectionSort(input){
  // insertion
  // for(let i=1; i<input.length; i++){
  //   for(let j=0; j<=i-1; j++){
  //     let front = input[j];
  //     let back = input[i];
  //     if(input[i]<input[j]){
  //       input[i] = front;
  //       input[j] = back;
  //     }
  //   }
  // }
  // return input;

  //selection
  // for(let i=0; i<input.length; i++){
  //   let lowestNumber = input[i];
  //   for(let j=i+1; j<input.length; j++){
  //     var indexForSwap;
  //     if(input[j]<lowestNumber){
  //       lowestNumber = input[j];
  //       indexForSwap = j;
  //     }
  //   }
  //   if(lowestNumber!==input[i]){
  //     input[indexForSwap] = input[i];
  //     input[i] = lowestNumber;
  //   }
  // }
  // return input;

  //bubble
  var swapped;
  do{
    swapped = false;
    for(let i=0; i<input.length; i++){
      let front = input[i];
      let back = input[i+1];
      if(input[i+1]<input[i]){
        input[i+1] = front;
        input[i] = back;
        swapped = true;
      }
    }
  } while(swapped)
  return input;
}

console.log(selectionSort([33,2,52,106,73,5,16]))
// console.log(selectionSort([13,5,22,99,11]))
