'use strict'
let array = [4,8,15,23,42]
let value = 16
let array1 = [2,4,6,8]
let value1 = 5
let newArr = []
let x
function insertShiftArray (arr,val){
    for (let i = 0; i < arr.length/2; i++) {
      if (arr.length%2===0){
               x = (arr.length/2)
      } else{
       x = (arr.length/2)+0.5
      }
       newArr[i] = arr[i]
       newArr[x] = val
    }  
    for (let i = x+1; i <= arr.length; i++) {
      let y = i-1
     newArr[i] = arr[y]
    }
    return newArr
}
// insertShiftArray(array,value)
// console.log(newArr)
insertShiftArray(array1,value1)
console.log(newArr)
module.exports =insertShiftArray;
