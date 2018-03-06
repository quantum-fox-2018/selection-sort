

function ownSort(arr) {
  // Your sorting code

  var temp;

 for(var i = 0; i < arr.length; i++){
     var min = i;

     for(var j = i + 1; j < arr.length; j++) {
       if(arr[j] < arr[min]) {
         min = j;
       }
     }
     temp = arr[i];
     arr[i] = arr[min];
     arr[min] = temp;
 }
  return arr;
}


console.log(ownSort([40, 18, 22, 32, 90, 10, 10, 22, 8]));
console.log(ownSort([3, 31, 89, 53, 53, 85, 77, 21, 55]));
