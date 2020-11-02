const {LinkedList} = require('./linked-lists')
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
      this.top = this.top.next;
  
      return this;
    }
  
    peek() {
      let string = this.top ? this.top.value :  'Empty';
      return string;
    }
  }

//Queue class
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
  

module.exports = PseudoQueue
