var testArrayGenap = [40, 18, 22, 32, 90, 100, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

// Selection Sort
function ownSort(arr) {
  var idxMin;
  for(let i=0; i<arr.length; i++){
    let minValue = arr[i];
    for(let j=i+1; j<arr.length; j++){
      if(arr[j] < minValue){
        idxMin = j;
        minValue = arr[j];
      }
    }
    if(arr[i] !== minValue){
      arr[idxMin] = arr[i]
      arr[i] = minValue;

    }
  }
  console.log(arr)
  // return arr;
}



// function binarySearch(search, array) {
//   // Your searching code
//   return 0;
// }

const arrayGenapSorted = ownSort(testArrayGenap);
const arrayGanjilSorted = ownSort(testArrayGanjil);

// Driver code
// console.log(binarySearch(8, arrayGenapSorted));
// console.log(binarySearch(10, arrayGenapSorted));
// console.log(binarySearch(33, arrayGenapSorted));

// console.log(binarySearch(53, arrayGanjilSorted));
// console.log(binarySearch(3, arrayGanjilSorted));
// console.log(binarySearch(2, arrayGanjilSorted));

module.exports = {
  // binary_search
};
