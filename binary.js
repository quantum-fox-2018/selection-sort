const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
   for (var i = 0; i < arr.length; i++) {
     for (var j = i; j < arr.length; j++) {
       if (arr[j] < arr[i]) {
         var temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
       }
     }
   }
   return arr
}

function binarySearch(search, array) {
  var min = 0;
  var max = array.length - 1;
  var guess = Math.floor(max / 2);

  while (array[guess] != search) {
    if (search < array[guess]) {
      array.slice(guess, max);
    } else if (search > array[guess]) {
      array.slice(min, guess)
    }
  }
  return array
}


const arrayGenapSorted = ownSort(testArrayGenap);
const arrayGanjilSorted = ownSort(testArrayGanjil);

// Driver code
console.log(binarySearch(8, arrayGenapSorted));
console.log(binarySearch(10, arrayGenapSorted));
console.log(binarySearch(33, arrayGenapSorted));

console.log(binarySearch(53, arrayGanjilSorted));
console.log(binarySearch(3, arrayGanjilSorted));
console.log(binarySearch(2, arrayGanjilSorted));

// module.exports = {
//   binary_search
// };
