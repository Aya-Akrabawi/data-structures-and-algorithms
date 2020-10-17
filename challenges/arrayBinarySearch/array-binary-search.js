'use strict'

let array =  [11,22,33,44,55,66,77, 88, 90]
let value = 90
function BinarySearch(arr, value) {
  let currently = arr.length - 1;
  let exist = false;

  for (let i = 0; i <= arr.length; i+= currently) {
    currently = Math.abs(currently);
    if (arr[i] != value && exist) {  
      break;
    }
    if (currently == 1) {exist = true}; 
    if (arr[i] < value) {
      currently = Math.ceil(currently/2);
    }
    if (arr[i] == value) {
      return i;
    }
    if (arr[i] > value) {
      currently = Math.ceil(currently/-2);
    }
  }
  return -1;
}

BinarySearch(array, value);
module.exports = BinarySearch;