const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  // Your sorting code
  let newArray=[]
  var temp=arr[0]
  var index=0
  while(arr.length>0){
    for (var i = 0; i < arr.length; i++) {
      if(temp>=arr[i]){
        temp=arr[i]
        index=i
      }
    }
    newArray.push(temp)
    arr.splice(index,1)
    temp=arr[0]
  }
   return newArray;
}

function binarySearch(search, array) {
  // Your searching code
  var middle
  var evenMiddle
  var divTwo=array.length/2
  if(array.length%2!==0){
     middle=Math.ceil(divTwo)-1
  }
  else{
    evenMiddle=(divTwo)+((divTwo)-1)
    middle=Math.ceil(evenMiddle)-1
  }

  if(search===array[middle]){
    return middle
  }
  else if(search<array[middle]){
    for (var i = 0; i < middle; i++) {
      if(search===array[i]){
        return i
      }
    }
    return -1
  }
  else{
    for (var i = middle; i < array.length; i++) {
      if(search===array[i]){
        return i
      }
    }
    return -1
  }
}

const arrayGenapSorted = ownSort(testArrayGenap);
const arrayGanjilSorted = ownSort(testArrayGanjil);
console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);

// Driver code
console.log(binarySearch(8, arrayGenapSorted));
console.log(binarySearch(10, arrayGenapSorted));
console.log(binarySearch(33, arrayGenapSorted));

console.log(binarySearch(53, arrayGanjilSorted));
console.log(binarySearch(3, arrayGanjilSorted));
console.log(binarySearch(2, arrayGanjilSorted));

module.exports = {
  // binary_search
};
