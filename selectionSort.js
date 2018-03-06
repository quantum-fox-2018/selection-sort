// function SelectionSort(arr) {
//   var array = [];
//   while (arr.length !== 0) {
//     var min = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//     }
//     var index = arr.indexOf(min);
//     array.push(min);
//     arr.splice(index, 1);
//   }
//   return array;
// }
//
// console.log(SelectionSort([33, 2, 52, 106, 73])); // [2, 33, 52, 73, 106]
// console.log(SelectionSort([13, 5, 22, 99, 11])); // [5, 11, 13, 22, 99]

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
   return arr;
}


const arrayGenapSorted = ownSort(testArrayGenap);
const arrayGanjilSorted = ownSort(testArrayGanjil);

console.log(ownSort(arrayGenapSorted))
console.log(ownSort(arrayGanjilSorted))

// // Driver code
// console.log(binarySearch(8, arrayGenapSorted));
// console.log(binarySearch(10, arrayGenapSorted));
// console.log(binarySearch(33, arrayGenapSorted));
//
// console.log(binarySearch(53, arrayGanjilSorted));
// console.log(binarySearch(3, arrayGanjilSorted));
// console.log(binarySearch(2, arrayGanjilSorted));

// module.exports = {
//   binary_search
// };
