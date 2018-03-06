const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];// 8 10 10 18 22 22 32 40 90
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]; //3, 21, 31, 53, 53, 55, 77, 85, 89

function ownSort(arr) {
  // Your sorting code
  for(let i=0; i<arr.length; i++){
    let min = i;
    for(let j=i+1; j<arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    if(i !== min){
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp
    }

  }
  return arr;
}

console.log(ownSort(testArrayGenap));
console.log(ownSort(testArrayGanjil));
