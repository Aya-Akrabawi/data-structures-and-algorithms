'use strict'

function reverseArray(arr){
    let array2 =[]
      for (let i = 0; i <arr.length; i++) {
        array2[i] = arr[arr.length-i-1]
      }    return array2
  }
  let array = [89, 2354, 3546, 23, 10, -923, 823, -12];
  reverseArray(array)