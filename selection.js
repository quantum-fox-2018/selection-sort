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

  var currentNum = 0;
  for(let i = 0; i < arr.length; i++){
      var indexj = 0;
      currentNum = arr[i];
      for(let j = i; j < arr.length; j++){

          if(currentNum > arr[j]){
              currentNum = arr[j];
              indexJ = j;
          }
          //console.log(arr);
      }
      //console.log('Index ke:'+indexJ+' valuenya: '+currentNum);
      //console.log(arr);
      if(currentNum !== arr[i]){
        let temp = arr[i];
        arr[i] = arr[indexJ];
        arr[indexJ] = temp;
      }

  }
  return arr;

}

console.log(selectionSort([33, 2, 52, 76, 1, 72, 12,106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));
