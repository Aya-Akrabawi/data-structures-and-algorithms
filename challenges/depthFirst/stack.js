'use strict';

class Node {
  
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;

    return this;
  }

  pop() {
    if(!this.top) {
      return null;
    }
    let popped = this.top.value;
    this.top = this.top.next;

    return popped;
  }

  peek() {
    let string = this.top ? this.top.value : null;
    return string;
  }

 
}

module.exports.Stack = Stack
module.exports.Node = Node