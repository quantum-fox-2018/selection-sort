function selectionSort(arr) {

	for (var i = 0; i < arr.length - 1; i++) {
		var min = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (min != i) {
			var temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
	}
  return arr;
}

console.log(selectionSort([33,2,52,106,73]));
//[2,33,52,73,106]
console.log(selectionSort([13,5,22,99,11]));
//[5,11,13,22,99]
