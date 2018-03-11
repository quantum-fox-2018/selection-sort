const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  // Your sorting code
  var tmp;
  for(var i=0; i<arr.length;i++){
    var min = i
    for(var j = i+1; j<arr.length;j++){
      if(arr[j]<arr[min]){
        min = j
      }
    }
    tmp = arr[i]
    arr[i] = arr[min]
    arr[min] = tmp
  }
  return arr
}

function binarySearch(search, array) {
  // Your searching code
  console.log(search, array)
  var min = 0
  var max = array.length-1
  while (min <= max) {
    var middle = Math.floor((min + max)/2)
    if (array[middle] === search) {
      return middle
    }
    if (array[middle] < search) {
      min = middle + 1
    } else {
      max = middle - 1
    }
  }
  return -1
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

module.exports = {
  binarySearch
};
