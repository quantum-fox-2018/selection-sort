function selectionSort (num) {

var temp ;

    for (var i = 0; i < num.length; i++) {
        
        var min = i

        for (var j = i+1; j < num.length; j++) {
            
            if (num[j] < num[min]) {

                min = j;
            }
        }

        temp = num[i]
        num[i] = num[min]
        num[min] = temp
    }

    return num
}

console.log(selectionSort([33,2,52,106,73]))
// console.log(selectionSort([13,5,22,99,11]))
