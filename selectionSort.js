
function selection(num) {

	for (var i = 0; i < num.length - 1; i++) {
		var min = i;
		for (var j = i + 1; j < num.length; j++) {
			if (num[j] < num[min]) {
				min = j;
			}
		}
		if (min != i) {
			var tmp = num[i];
			num[i] = num[min];
			num[min] = tmp;
		}
	}
  return num
}


console.log(selection([33,2,52,106]));
console.log(selection([13,5,22,99,11]));
