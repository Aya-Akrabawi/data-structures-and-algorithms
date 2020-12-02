'use strict'

const { Graph } = require('../graph/graph');
const Stack = require('./stack').Stack;

class BreadthFirst extends Graph {

  traversal(startVertex) {
    const stack = new Stack();  
    const bfArray = [];
    stack.push(startVertex);
  
    while (stack.peek()) {
      let currentVertex = stack.pop();
      console.log('removing vertex', currentVertex);

      if(!bfArray.includes(currentVertex.value)) bfArray.push(currentVertex.value);

      let neighbors = this.getNeighbors(currentVertex);
      console.log('currentNeighboors', neighbors);

      neighbors.forEach(edge => {
        console.log('adding vertex', edge.vertex);
        if(stack.peek() !== edge.vertex) stack.push(edge.vertex);
      });
    }
    return bfArray;
  }
}

module.exports= BreadthFirst;
