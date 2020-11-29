'use strict';

class Node {
  
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {
  
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {                              // initializes front to be always the first ever entered node 

    if(!(this.front && this.back)) {
      this.front = value;
      this.back = value;
      return;
    }
    value.next = this.back;
    this.back = value;
  }

  dequeue() {                                   // removes front then moves from back to new front that is the oldest node
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

  
}

module.exports.Queue = Queue
module.exports.Node = Node