'use strict';

class Node {
    constructor (value){
        this.value = value;
        this.next = null
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

  isEmpty() {
    return this.top ? false : true;
  }
}

class Queue {
  
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {

    if(!(this.front && this.back)) {
      this.front = value;
      this.back = value;
      return;
    }
    value.next = this.back;
    this.back = value;
  }

  dequeue() {
    if(!this.front) {
      return 'Empty Queue!';
    }
    let dequeuedNode = this.front;
    this.front = null;
    if (!this.back.next) {
      this.back = null;
    }

    let currentNode = this.back;
    console.log('now queue: ', this);
    if (currentNode) {
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
    }
 
    console.log('front should be: ', currentNode);

    this.front = currentNode;

    return dequeuedNode;
  }

  peek() {
    return this.front ? this.front :  null;
  }

  isEmpty() {
    return this.front ? false : true;
  }
}
    
    
    
    // let stck = new Stack();

    // stck.push(2);
    // stck.push(4);
    // stck.push(8);
    
    
    // console.log(stck)
    
    // let q = new Queue();

    // q.enqueue(2);
    // q.dequeue()
            
    // console.log(q)
    
    module.exports = {Stack,Queue}
    // module.exports.Queue = Queue
    // module.exports.Node = Node