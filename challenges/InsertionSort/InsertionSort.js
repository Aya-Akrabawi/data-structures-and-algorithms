'use strict';

function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = temp
    }
}

InsertionSort([8, 4, 23, 42, 16, 15])
// InsertionSort([20,18,12,8,5,-2])
// InsertionSort([5,12,7,5,5,7])
// InsertionSort([2,3,5,7,13,11])
