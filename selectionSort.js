const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  // Your sorting code
  for(var i=0;i<arr.length;i++){
    var angkaTerkecil = arr[i];
    for(var j=i+1;j<arr.length;j++){
      if(arr[j] < angkaTerkecil){
        arr[i] = arr[j];
        arr[j] = angkaTerkecil;
        angkaTerkecil = arr[i];
      }
    }
  } 
  return arr;
}
/*
function binarySearch(search, array) {
  // Your searching code

  if(array.length>1){


    if(array[Math.round(array.length/2)-1] < search ){
      if(binarySearch(search,array.slice(Math.round(array.length/2),array.length)) == -1){
        return -1;
      }else{
        return binarySearch(search,array.slice(Math.round(array.length/2),array.length)) + Math.round(array.length/2);
      }
    }

    else if(array[Math.round(array.length/2)-1] >= search){
      return binarySearch(search,array.slice(0,Math.round(array.length/2)));
    }
  }
  else{

    if(array[Math.round(array.length/2)-1] == search){
        return Math.round(array.length/2)-1;
    }
  }

  return -1;
}
*/
const arrayGenapSorted = ownSort(testArrayGenap);
const arrayGanjilSorted = ownSort(testArrayGanjil);

console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);

// Driver code
/*console.log(binarySearch(90, arrayGenapSorted));
console.log(binarySearch(10, arrayGenapSorted));
console.log(binarySearch(33, arrayGenapSorted));

console.log(binarySearch(53, arrayGanjilSorted));
console.log(binarySearch(3, arrayGanjilSorted));
console.log(binarySearch(2, arrayGanjilSorted));
*/
/*module.exports = {
  binary_search
};*/
