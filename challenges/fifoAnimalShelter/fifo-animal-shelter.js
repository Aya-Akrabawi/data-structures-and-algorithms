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
  
    isEmpty() {
      return this.top ? false : true;
    }
  }

  
 class fifoAnimalShelter {
  constructor() {
    this.input = new Stack();
    this.dogs = new Stack();
    this.cats = new Stack();
    this.order = [];
  }

  enqueue(value) {
    this.input.push(value);
    if(value == 'dog') {
      this.order.push(1);
    }
    if(value == 'cat') {
      this.order.push(2);
    }
    return this.input.peek();
  }

  dequeue(type) {
    let top = this.input.peek();

    if (!(this.dogs.peek() && this.cats.peek())) {
      if(!top) {
        return null;
      }

      while(top) {
        if(top == 'dog') {
          this.dogs.push(top);
        }
        if(top == 'cat') {
          this.cats.push(top);
        }
        this.input.pop();  
        top = this.input.peek();
      }

    }

    switch (type) {
      case 'dog':
        for (let i = 0; i < this.order.length; i++) {
          if (this.order[i] == 1) {
            this.order.splice(i, 1);
            break;
          }
        }
        return this.dogs.pop();
      case 'cat':
        for (let i = 0; i < this.order.length; i++) {
          if (this.order[i] == 2) {
            this.order.splice(i, 1);
            break;
          }
        }
        return this.cats.pop();
      default :
        if(this.order[0] == 1) {
          this.order.shift();

          return this.dogs.pop();
        } else if (this.order[0] == 2) {
          this.order.shift();

          return this.cats.pop();
        }
    }
  }
}

module.exports = fifoAnimalShelter