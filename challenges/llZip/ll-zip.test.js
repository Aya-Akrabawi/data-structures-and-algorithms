'use strict';

const LinkedList = require('../../linkedList/linked-list')
const Node = require('../../linkedList/node');
const zipLists = require('./ll-zip')

describe('Linked List', () => {
it('function works happily', ()=> {

    let listA = new LinkedList();
    listA.insert('1');
    listA.insert('2');
    listA.insert('3');
    listA.insert('4');
    listA.insert('5');
  
    let listB = new LinkedList();
    listB.insert('A');
    listB.insert('B');
    listB.insert('C');
    listB.insert('D');
    listB.insert('E');
    
    expect(zipLists(listA, listB)).toEqual('{ 1 } -> { A } -> { 2 } -> { B } -> { 3 } -> { C } -> { 4 } -> { D } -> { 5 } -> { E } ->  NULL');
  });
});  