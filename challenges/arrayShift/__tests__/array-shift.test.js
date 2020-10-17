'use strict'

const insertShiftArray = require('../array-shift')

'use strict';

describe('Array Shift ', () => {
    it('(even case)pass array and value and add the value at the middle of the array', () => {
        expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    });

    it('(odd case)pass array and value and add the value at the middle of the array', () => {
        expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
    });
});