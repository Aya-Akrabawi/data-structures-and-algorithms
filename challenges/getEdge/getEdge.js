'use strict';
const { Queue } = require('./queue');

function getEdge(graph, arr) {
  let totalWeight = 0;
  const queue = new Queue();
  queue.enqueue(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    let currentVertex = queue.dequeue();
    let neighbors = graph.getNeighbors(currentVertex);

    neighbors.forEach(edge => {
      if(edge.vertex === arr[i]) {
        console.log('found next vertex', arr[i], edge.weight);
        queue.enqueue(arr[i]);
        totalWeight += edge.weight;
      }
    });
    
    if (!queue.peek()) {
      return [false];
    }
  }
  return [true, totalWeight];
}

module.exports = getEdge;