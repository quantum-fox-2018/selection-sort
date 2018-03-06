var arr = [3, 5, 2, 4, 1];

function selectionSort(arr) {
  for(var i=0; i<arr.length; i++) { // looping posisi awal

    var min = i;
    for(var j=i+1; j< arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j
      }
    }

    var tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
  }

  return arr;

}
console.log(selectionSort(arr))

// cek posisi 1 < posisi 2
// jika <,
