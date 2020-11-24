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
  }
  



function tree_intersection(tree_1, tree_2) {
  const stackA = new Stack();
  const stackB = new Stack();

  if (!tree_1.root || !tree_2.root) {
    return null;
  }

  let nodeA = tree_1.root;
  let nodeB = tree_2.root;
  stackA.push(nodeA);
  stackB.push(nodeB);
  let arr = [];

  while(stackA.top && stackB.top) {
    if(stackA.top.value.value == stackB.top.value.value) {
      // console.log('push new value:', stackA.top.value.value);
      arr[arr.length] = stackA.top.value.value;
    }
    let newA = stackA.pop();
    let newB = stackB.pop();
    // console.log('popped A:', newA.left);
    // console.log('popped B:', newB.left);

    if (newA.left && newB.left) {
      // console.log('Push left  >>>>>>>>>>>>>');
      stackA.push(newA.left);
      stackB.push(newB.left);
    }
    if (newA.right && newB.right) {
      // console.log('Push right  >>>>>>>>>>>>>');
      stackA.push(newA.right);
      stackB.push(newB.right);
    }
  }
  return arr;
};

module.exports = tree_intersection; 