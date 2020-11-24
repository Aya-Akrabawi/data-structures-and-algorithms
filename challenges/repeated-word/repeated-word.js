'use strict'

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
      this.entries = new Array(size); // bucket
    }
    hash(key) {
      // return hash Index
      let charArr = key.split('');
      return charArr.reduce((p, n )=> {
        return p + n.charCodeAt(0);
      }, 0) * 599 % this.size;
    }
    add(key, value) {
      // Linked List to represent the value for each key in the bucket
      let hashIndex = this.hash(key);
      if(!this.entries[hashIndex]) {
        // create a new one
        this.entries[hashIndex] = new LinkedList();
      }
  
      let entry = { [key]: value };
      this.entries[hashIndex].append(entry); // LinkedList append method
    }
    get(key) {
      if (key) {
        let hashIndex = this.hash(key);
  
        if(this.entries[hashIndex]) {
          return [this.entries[hashIndex].print(), this.entries[hashIndex].length(), this.entries[hashIndex]];
        } else {
          return null;
        }
      } else {
        return this.entries;
      }
    }
    contains(key) {
      let hashIndex = this.hash(key);
      if(this.entries[hashIndex]) {
        return true;
      } else {
        return false;
      }
    }
  }


class Repeats {
  constructor() {

  }

  firstRepeated(str) {
    let hashTable = new HashTable(1024);
    let charArr = str.split(/\W+/);
    
    for (let i = 0; i < charArr.length; i++) {
      if (hashTable.contains(charArr[i].toLowerCase())) {
        return charArr[i];
      }
      hashTable.add(charArr[i].toLowerCase());
    }

    return null;
  }

}

module.exports = Repeats;