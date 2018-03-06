const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  // Your sorting code
  let minIdx = ''
  let sorted = []
  for(let i=0; i<arr.length; i++){
    minIdx = i
    // console.log(minIdx)
    for(let j=i+1; j<arr.length; j++){
        if(arr[j] < arr[minIdx]){
          minIdx = j
          // console.log('=====',minIdx)
        }
    }
    sorted = arr[i]
    arr[i] = arr[minIdx]
    arr[minIdx] = sorted
  }
  console.log(arr)
  return arr;
}


function binarySearch(search, array) {
  // Your searching code
  for(let i=0; i<array.length; i++){
    if(array[i] == search){
      return i
    }
  }
  return 0;
}

const arrayGenapSorted = ownSort(testArrayGenap);
const arrayGanjilSorted = ownSort(testArrayGanjil);

console.log('====SEARCH====')
// Driver code
console.log('index ke : ',binarySearch(8, arrayGenapSorted));
console.log('index ke : ',binarySearch(10, arrayGenapSorted));
console.log(binarySearch(33, arrayGenapSorted));

console.log('index ke : ',binarySearch(53, arrayGanjilSorted));
console.log('index ke : ',binarySearch(3, arrayGanjilSorted));
console.log(binarySearch(2, arrayGanjilSorted));

module.exports = {
  binarySearch
};
