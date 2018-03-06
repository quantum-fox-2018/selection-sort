//Selection Sort

/*Pseudocode
  declare a new epmty array variable
  while array length is not 0
      get min value from array
      push min value to new array variable
      Remove (splice) min value from array
  end while
*/

function selectionSort(arr){

  for(let h = 0; h < arr.length; h++){
      for(let i = h; i < arr.length; i++){
        if(arr[h] > arr[i]){
            let minValue = arr[h];
            arr[h] = arr[i];
            arr[i] = minValue;
        }
      }

  }

  return arr;

}

console.log(selectionSort([33, 2, 52, 76, 1, 72, 12,106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));
