'use strict';

const Node = require('../node');
const mergeLists = require('../linked-list');

describe(`Node Class ${Node}`, () => {
  it('constructor()', () => {
    const value = 'some string';
    const node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});
const LinkedList = require('../linked-list');

describe('Linked List', () => {
  it('Constructor()', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it('insert()', () => {
    const list = new LinkedList();
    const initValue = 'some string';
    list.insert(initValue);
    expect(list.head.value).toEqual(initValue);
    const newValue = 'new string value';
    list.insert(newValue);
    expect(list.head.value).toEqual(initValue);
    list.insert('tailValue');
    expect(list.head.value).toEqual(initValue);
    console.log('The list after adding tailValue', list);
   
    let currentNode = list.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    expect(currentNode.next).toBeNull();
  });
  it('includes()', () => {
    let list = new LinkedList();
        list.insert('helloo');
        list.insert('hii');
        list.insert('bye');

        expect(list.includes('hii')).toBeTruthy();
        expect(list.includes('konnichiwa')).toBeFalsy();
  });
  it('toString() ', () => {
    let list = new LinkedList();
    list.insert('helloo');
    list.insert('hii');
    list.insert('bye');

    expect(list.toString()).toEqual( "{ helloo } -> { hii } -> { bye } -> NULL");
});
it('insertBefore(value, newVal) ', () => {
  let list = new LinkedList();
  list.insert('helloo');
  list.insert('hii');
  list.insert('bye');

list.insertBefore('hii', 'konnichiwa')
  expect(list.toString()).toEqual( "{ helloo } -> { konnichiwa } -> { hii } -> { bye } -> NULL");
});
it('insertAfter(value, newVal) ', () => {
  let list = new LinkedList();
  list.insert('helloo');
  list.insert('hii');
  list.insert('bye');

list.insertAfter('hii', 'konnichiwa')
  expect(list.toString()).toEqual( "{ helloo } -> { hii } -> { konnichiwa } -> { bye } -> NULL");
});

it('kthFromEnd(k) ', () => {
  let list = new LinkedList();
  list.insert('helloo');
  list.insert('hii');
  list.insert('bye');

  expect(list.kthFromEnd('helloo')).toEqual(2);
  expect(list.kthFromEnd('hii')).toEqual(1);
  expect(list.kthFromEnd('bye')).toEqual(0);
});
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
  function mergeLists(list1,list2) {
    let cur1 = list1.head;
    let cur2 = list2.head;
    let ll = new LinkedList(new Node(cur1.value));
    cur1 = cur1.next;
    let count = 0;
    while(cur1 || cur2) {
      if(count%2 === 0 && cur2) {
        ll.append(new Node(cur2.value))
        cur2 = cur2.next;
      } 
      if(count%2 === 1 && cur1) {
        ll.append(new Node(cur1.value))
        cur1 = cur1.next;
      }
      count++;
    }
    return ll;
  }
  
  expect(mergeLists(listA, listB)).toEqual('{ 1 } -> { A } -> { 2 } -> { B } -> { 3 } -> { C } -> { 4 } -> { D } -> { 5 } -> { E } ->  NULL');
});
});

