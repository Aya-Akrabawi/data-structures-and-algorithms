'use strict'

const BinarySearch = require('../array-binary-search')

describe(`Array Binary Search`, () => {
    it('BinarySearch()', () => {
     expect(BinarySearch( [4,8,15,16,23,42] , 15)).toEqual(2)
    });
    it('BinarySearch()', () => {
        expect(BinarySearch( [11,22,33,44,55,66,77], 90)).toEqual(-1)
       });
  });

 