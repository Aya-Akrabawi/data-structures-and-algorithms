"use strict";

const Stack = require('../').Stack;

class PseudoQueue {
  constructor() {
    this.Stack_1 = new Stack();
    this.Stack_2 = new Stack();
  }

  enqueue(value) {
    this.Stack_1.push(value);
  }

  dequeue() {
    if (!this.Stack_2.top) {
      if (!this.Stack_1.top) {
        return ('Empty Stack!');
      }

      while(this.Stack_1.top) {
        this.Stack_2.push(this.Stack_1.top.value);
        this.Stack_1.pop();  
      }
    }

    let extract = this.Stack_2.top.value;
    this.Stack_2.pop();
    return extract;
  }
}

module.exports = PseudoQueue;