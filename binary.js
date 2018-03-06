const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];


function ownSort(arr) {
  // Your sorting code
  for (var i = 0; i < arr.length; i++) {
    var min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    var first = arr[i];
    arr[i] = arr[min];
    arr[min] = first;
  }
  return arr;
}
const arrayGenapSorted = ownSort(testArrayGenap);
const arrayGanjilSorted = ownSort(testArrayGanjil);

console.log(ownSort(testArrayGenap));
console.log(ownSort(testArrayGanjil));
