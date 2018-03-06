function sorting(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		var min = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (min != i) {
			var tmp = arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
		}
	}
  return arr;
}



console.log(sorting([33,2,52,106,73]));
console.log(sorting([13,5,22,99,11]));
