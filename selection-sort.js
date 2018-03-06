function selectionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    var indexMin = i;

    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }

    if (indexMin !== i) {
      var temp = arr[i];
      arr[i] = arr[indexMin];
      arr[indexMin] = temp;

    }
  }

  return arr;
}

console.log(selectionSort([40, 18, 22, 32, 90, 10, 10, 22, 8]));
console.log(selectionSort([3, 31, 89, 53, 53, 85, 77, 21, 55]));
