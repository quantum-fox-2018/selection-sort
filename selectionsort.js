// SWAP METHOD
function selectionsort(arrInput) {
    for (let j = 0; j < arrInput.length; j++) {
        // console.log(j,arrInput[j])
        let IndexMin = 0;
        let Min = arrInput[j];
        for (let i = j+1; i < arrInput.length; i++) {
            // console.log(Min, arrInput[i]);
            if (arrInput[i] < Min) {
                Min = arrInput[i];
                IndexMin = i;
            }
        }
        // console.log(j,'Min',Min);
        // console.log(j,'Index',IndexMin);
        // console.log(arrInput[j])
        
        if(Min != arrInput[j]){
            arrInput[IndexMin] = arrInput[j];
            arrInput[j] = Min;
        }
        // console.log(arrInput);   
    }
    return arrInput;
}

let test1 = [33,2,52,106,73];
let test2 = [13,5,22,99,11];

console.log(selectionsort(test1));
console.log(selectionsort(test2));