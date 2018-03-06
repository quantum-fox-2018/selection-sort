function selectionSort(arr){
    for(let counter = 0; counter<arr.length; counter++){
        let temp = arr[counter]
        let indx = 0;
        for(let counter2 = counter; counter2<arr.length; counter2++){
            if(temp > arr[counter2]){
                temp = arr[counter2];
                indx = counter2;
            }

        }
        if(temp !== arr[counter]){
            let temp2 = arr[counter];
            arr[counter] = arr[indx];
            arr[indx] = temp2;
        }

    }
    
    return arr;
}


console.log(selectionSort([8,5,7,1,9,3]));
console.log(selectionSort([33,2,52,106,73]));
console.log(selectionSort([13,5,22,99,11]));