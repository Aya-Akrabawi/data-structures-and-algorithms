'use strict'
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value || currentNode.next.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  toString() {
    let currentNode = this.head;
    let allValues = '';

    while (currentNode) {
      allValues = allValues + `{ ${currentNode.value} } -> `
      currentNode = currentNode.next;
    }
    allValues += 'NULL';
    return allValues;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) { //this.head is null so not null is true so we will get inside the if 
      this.head = node
      return this;
    } // before this if statement it was { head: null } after that it is { head: Node { value: 4, next: null } }


    let currentNode = this.head;
    // updating my iterator:
    // here I am shifting my head to the current node so the value will be added in the last node
    // i say while next:  Node { value: 5, next: null } } from this output>>> head: Node { value: 4, next: Node { value: 5, next: null } }
    while (currentNode.next) { // once .next have a value(which is an object) do the work inside the while but if it is null stop
      currentNode = currentNode.next; //
    }
    currentNode.next = node;
    return this;
  }


  insertBefore(value, newVal) {
    const node = new Node(newVal);
    if (!this.head) {
      this.head = node
      return this;
    }
    let currentNode = this.head;
    node.next = this.head.next
    let prevNode = node
    while (currentNode.next.value !==value) {
      currentNode = currentNode.next;
    }
      currentNode.next = prevNode;
    return this;
  }

  insertAfter(value, newVal){
    const node = new Node(newVal);
    if (!this.head) {
      this.head = node
      return this;
    }
    let currentNode = this.head;
    // node.value = this.head
    node.next = this.head.next.next
    let nextNode = node
    while (currentNode.next.value !==value) {
      currentNode.next = currentNode.next.next;
    }
    currentNode.next = this.head.next
      currentNode.next.next = nextNode;
    return this;
    
  }

}
const ll = new LinkedList();
// console.log('this is my List:', ll);
ll.insert(3);
// console.log('After insert', ll);
ll.insert(4);
ll.insert(5);
// console.log('After insert', ll);
// console.log('After includes', ll.includes(5));

console.log('before insertBefore function: ', ll.toString());
// console.log('insert 3 before 4', ll.insertBefore(5, 2));

console.log('insert 3 before 4', ll.insertAfter(4, 2));
console.log('After includes', ll.toString());

module.exports = LinkedList;