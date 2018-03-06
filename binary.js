const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  // Your sorting code

  for (var i = 0; i < arr.length; i++) {
    var position = -1;
    var lowest = arr[i];

    for (var j = i; j < arr.length; j++) {
      if (lowest > arr[j]) {
        lowest = arr[j];
        position = j;
      }
    }

    if(position > -1){
      var temp = arr[i];
      arr[i] = arr[position];
      arr[position] = temp;
    }
  }

  return arr;
}

console.log(ownSort(testArrayGenap));
console.log(ownSort(testArrayGanjil));
