'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  length() {
    return this.size;
  }
  
  print() {
    let currentNode = this.head;
    let output = '';

    while(currentNode) {
      output += `{ ${JSON.stringify(currentNode.value)} } -> `
      currentNode = currentNode.next;
    }
    output += 'NULL';
    return output;
  }

  append(value) {
    const node = new Node(value);
    this.size++;

    if (!this.head) {
      this.head = node;
    } else {   
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
  }

  appendLL(linkedList) {
    this.size += linkedList.size;
    if (!this.head) {
      this.head = linkedList.head;
    } else {   
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = linkedList.head;
    }
  } 
}
class HashTable {
    
    constructor(size) {
      this.size = size;
      this.entries = new Array(size); 
    }
   
    hash(key) {
      let charArr = key.split('');
      return charArr.reduce((p, n )=> {
        return p + n.charCodeAt(0);
      }, 0) * 599 % this.size;
    }
    
    add(key, value) {
      let hashIndex = this.hash(key);
      if(!this.entries[hashIndex]) {
        this.entries[hashIndex] = new LinkedList();
      }
  
      let entry = { [key]: value };
      this.entries[hashIndex].append(entry); // LinkedList append method
    }
  }
module.exports = HashTable;