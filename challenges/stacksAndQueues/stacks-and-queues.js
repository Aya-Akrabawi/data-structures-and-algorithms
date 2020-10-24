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
}


let stck = new Stacks();

stck.push(2);
stck.push(4);
stck.push(8);


console.log(stck)