'use strict';

const Node = require('../node');

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
});

