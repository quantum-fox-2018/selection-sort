function selectionSort(input){
  for(let i=1; i<input.length; i++){
    for(let j=0; j<=i-1; j++){
      let front = input[j];
      let back = input[i];
      if(input[i]<input[j]){
        input[i] = front;
        input[j] = back;
      }
    }
  }
  return input;
}

console.log(selectionSort([33,2,52,106,73]))
console.log(selectionSort([13,5,22,99,11]))
