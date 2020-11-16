'use strict';

function Mergesort(arr){
    let n = arr.length

    if (n>1){
        let mid = n/2;
        let left = arr
        left.length = mid
        let right = arr - left
        console.log(right);

    }
}

Mergesort([8,4,23,42,16,15])