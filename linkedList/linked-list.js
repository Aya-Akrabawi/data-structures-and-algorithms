'use strict'
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    // this.head = new Node (value,this.head)
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
      if (currentNode.value === value) {
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
    const node = new Node(newVal); //node >> {99,null}
    if (!this.head) {
      this.head = node
      return this;
    }
    let currentNode = this.head; 
    console.log('this.head',this.head) // value: 3,    next: Node { value: 4, next: Node { value: 5, next: null } }
    while (currentNode.value !==value) { //currentVode = { value: 4, next: Node { value: 5, next: null } }
      currentNode = currentNode.next;
    }
    // {2,{3,{4,{undifind}}}}
    let exactNode = new Node(value); //{2,undifind}
    exactNode.next = currentNode.next; // {3,{4,{undefind}}}}}
    currentNode.value = node.value; // {1,99{3,{4,{undefind}}}}}}
    // console.log('newNode in the after ', newNode);
    currentNode.next = exactNode;

    /*//currentNode  { value: 4, next: Node { value: 5, next: null } 
    console.log('currentNode',currentNode);
    node.next = currentNode.next // node =  {99,{ value: 4, next: Node { value: 5, next: null } }}
    console.log('node',node);
    console.log('currentNode',currentNode);
    console.log('currentNode',currentNode);
    currentNode.value = node.value
    currentNode.next = currentNode*/
      return this;
  }

  insertAfter(value, newVal){
    const node = new Node(newVal); //node >> {99,null}
    if (!this.head) {
      this.head = node
      return this;
    }
    let currentNode = this.head; 
    console.log('this.head',this.head) // value: 3,    next: Node { value: 4, next: Node { value: 5, next: null } }
    while (currentNode.value !==value) {
      currentNode = currentNode.next;
    }
    node.next = currentNode.next // { value: 5, next: null }
      currentNode.next = node;
    return this;
  }


  kthFromEnd(k) {
    let currentNodeCounter = this.head;
    let currentNode = this.head
    let counter=0;
    let positionCounter = 0;
    let posArray = []
    let valArray = []
    let exactValue;
    
    if (!this.head) {
      this.head = node
      return this;
    }
    while (currentNodeCounter.next) {
      posArray.push(counter)
      valArray.push(currentNodeCounter.value)
      counter ++;
      currentNodeCounter = currentNodeCounter.next;
    }
    posArray.push(counter)
    valArray.push(currentNodeCounter.value)

    posArray.reverse();
    valArray.reverse();

    for (let i = 0; i < posArray.length; i++) {
      valArray[i]
      if (posArray[i] !== k) { //currentVode = { value: 4, next: Node { value: 5, next: null } }
        currentNode = currentNode.next;
      } else if (posArray[i] === k){
        return exactValue = valArray[posArray[i]]
      }
            
    }



console.log('counter',counter);
console.log('posArray',posArray);

console.log('valArray',valArray);
console.log('posArray[positionCounter]',posArray[positionCounter]);
console.log('valArray[positionCounter]',valArray[positionCounter]);
console.log('currentNode',currentNode);
console.log("Position",positionCounter);
    return exactValue;
  }
 

}


const ll = new LinkedList();
// console.log('this is my List:', ll);
ll.insert(3);
// console.log('After insert', ll);
ll.insert(4);
ll.insert(5);
ll.insert(6);
// console.log('ll.kthFromEnd(4)',ll.kthFromEnd(3));

// console.log('After insert', ll);
// console.log('After includes', ll.includes(50));

console.log('before insertBefore function: ', ll.toString());
// console.log('insert 99 before 4', ll.insertBefore(5, 99));

// console.log('insert  4', ll.insertAfter(4, 99));
console.log('toString ', ll.toString());
module.exports = LinkedList;