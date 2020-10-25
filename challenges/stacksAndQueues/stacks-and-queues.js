'use strict';

class Node {
    constructor (value){
        this.value = value;
        this.next = null
    }
}

class Stacks {
    constructor() {
        this.storage=[];
        this.top = null;
    }

    push(value) {
        this.storage.unshift(value);
        this.top = value;
    }

    pop(){
        const item = this.storage.shift();
        this.top = this.storage[0] ? this.storage[0] : null;
        return item;
      }
}

class Queue {
    constructor() {
      this.storage = [];
    }
    enqueue(item){
      this.storage.push(item)
    }
    dequeue(){
      return this.storage.shift()
    }
    peak(){
    return this.storage[0];
    }
    }
    
    
    
    let stck = new Stacks();

    stck.push(2);
    stck.push(4);
    stck.push(8);
    
    
    console.log(stck)
    
module.exports = Queue;
module.exports = Stacks;