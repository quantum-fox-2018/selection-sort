const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function selectionSort(arr) {
  // Your searching code
  for(let i = 0; i < arr.length; i++) {
    let tmp = i;
    for(let j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[tmp]) {
        tmp = j;
      }
    }
    //[arr[tmp], arr[i]] = [arr[i], arr[tmp]];
    let tmp1 = arr[i];
    arr[i] = arr[tmp];
    arr[tmp] = tmp1;
  }

  return arr;
}

// Driver code
console.log(selectionSort(testArrayGenap));
console.log(selectionSort(testArrayGanjil));

// module.exports = {
//   binary_search
// };
