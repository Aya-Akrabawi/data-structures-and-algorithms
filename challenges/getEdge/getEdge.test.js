'use strict';

const { Vertex } = require('../graph/graph');
const { Graph } = require('../graph/graph');

const getEdge = require('./getEdge');

const graph = new Graph();
const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const ten = new Vertex(10);

graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(eight);
graph.addVertex(ten);

graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(three, eight, 7);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight, 2);
graph.addDirectedEdge(eight, seven);
graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, eight, 5);

describe('getEdge is functional and working!', ()=> {
  it('return a true for valid connections ', ()=> {
    let neighbors = graph.getNeighbors(two);
    console.log(neighbors);
    expect(getEdge(graph, [two, seven])).toEqual([ true, 0 ]);
  });

  it('return a true for valid connections along with total weight ', ()=> {
    expect(getEdge(graph, [six, eight, seven])).toEqual([ true, 2 ]);
  });

  it('return a false for invalid connections ', ()=> {
    expect(getEdge(graph, [ten, seven])).toEqual([ false ]);
  });
});