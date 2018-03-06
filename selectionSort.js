const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function selectionSort(arr) {
    // Your sorting code
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                var numMin = arr[i];
                arr[i] = arr[j];
                arr[j] = numMin;
            }
        }
    }

    return arr;
}

// Driver code
console.log(selectionSort(testArrayGenap));
console.log(selectionSort(testArrayGanjil));