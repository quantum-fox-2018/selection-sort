let testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
let testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function selectionSort (arr) {
  for (var i = 0; i < arr.length; i++) {
    var min = arr[i];
    var temp = arr[i];
    var indexSwap = i;
    for (var x = i; x < arr.length; x++) {
      if (min > arr[x]) {
        min = arr[x];
        indexSwap = x;
      }
    }
    arr[i] = min;
    arr[indexSwap] = temp;
  }
  return arr;
}

console.log(selectionSort(testArrayGenap));
console.log(selectionSort(testArrayGanjil));
