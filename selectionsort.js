function selectionsort(arrInput) {
    // console.log(arrInput[0]);
    let arrSortResult = [];

    while (arrInput.length > 0) {
        let index = findIndexMin(arrInput); // 1
        arrSortResult.push(arrInput[index]);
        arrInput.splice(index,1);
    }

    return arrSortResult;

    function findIndexMin(arrInput) {
        let Min = arrInput[0];
        let IndexMin = 0;
        for (let i = 0; i < arrInput.length; i++) {
            if (arrInput[i] < Min) {
                Min = arrInput[i];
                IndexMin = i;
            }
        }
        return IndexMin;
    } 
    // console.log(findIndexMin(arrInput)); // index:1,min:2

}

let test1 = [33,2,52,106,73];
let test2 = [13,5,22,99,11];

console.log(selectionsort(test1));
console.log(selectionsort(test2));