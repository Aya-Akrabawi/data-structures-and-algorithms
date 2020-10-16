'use strict'
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }
    insert(value) {
        const node = new Node (value);
        if (!this.head){
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

    includes(value){
        let currentNode = this.head;
        while(currentNode.next) {
          if (currentNode.value === value || currentNode.next.value === value ) {
            return true;
          }
          currentNode = currentNode.next;
        }
    
        return false;
    }

    toString() {
        let currentNode = this.head;
        let allValues = '';
    
        while(currentNode) {
          allValues = allValues + `{ ${currentNode.value} } -> `
          currentNode = currentNode.next;
        }
        allValues += 'NULL';
        return allValues;
      }
    
}
const ll = new LinkedList();
console.log('this is my List:', ll);
ll.insert(4);
console.log('After insert', ll);
ll.insert(5);
console.log('After insert', ll);

console.log('After includes', ll.includes(5));
console.log('After includes', ll.toString());
module.exports = LinkedList;