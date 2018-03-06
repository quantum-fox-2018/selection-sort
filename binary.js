function minSort(arr) {
  var min = 0;
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      if(arr[i] < arr[j]) {
        min = arr[j];
        arr[j] = arr[i];
        arr[i] = min;
      }
    }
  }
  return arr;
}

console.log(minSort([33, 2, 52, 106, 73]));
console.log(minSort([13, 5, 22, 99, 11]));
