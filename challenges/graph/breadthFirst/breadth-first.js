const { Graph } = require('../graph/graph');
const Queue = require('./stacks-and-queues').Queue;

class BreadthFirst extends Graph {

  traversal(startVertex) {
    const queue = new Queue();  
    const bfArray = [];
    queue.enqueue(startVertex);
  
    while (queue.peek()) {
      let currentVertex = queue.dequeue();
      console.log('removing vertex', currentVertex);

      if(!bfArray.includes(currentVertex.value)) bfArray.push(currentVertex.value);

      let neighbors = this.getNeighbors(currentVertex);
      console.log('currentNeighboors', neighbors);

      neighbors.forEach(edge => {
        console.log('adding vertex', edge.vertex);
        if(queue.peek() !== edge.vertex) queue.enqueue(edge.vertex);
      });
    }
    return bfArray;
  }
}

module.exports= BreadthFirst;
