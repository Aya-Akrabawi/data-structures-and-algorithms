const Vertex = require('../../graph/graph').Vertex;
const Graph = require('../../graph/graph').Graph;

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
graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, eight, 5);
graph.addDirectedEdge(eight, seven);

describe('Graphs are working!', ()=> {
  it('An empty graph properly returns null', ()=> {
    const graphTest = new Graph();

    expect(graphTest.getNodes()).toBeNull;
  });

  it('Node can be successfully added to the graph', ()=> {
    const graphTest = new Graph();
    graphTest.addVertex(two);

    expect(graphTest.getSize()).toEqual(1);
  });

  it('A graph with only one node and edge cannot be properly returned', ()=> {
    const graphTest = new Graph();
    graphTest.addVertex(two);

    expect(graphTest.getNodes(two)).toBeNull;
  });

  it('An edge can be added to the graph', ()=> {
    const graphTest = new Graph();
    graphTest.addVertex(two);
    graphTest.addVertex(three);
    graphTest.addDirectedEdge(two, three);

    expect(graphTest.getNeighbors(two).length).toEqual(1);
  });



  it('All appropriate neighbors can be retrieved from the graph', ()=> {
    const graphTest = new Graph();
    graphTest.addVertex(two);
    graphTest.addVertex(three);
    graphTest.addDirectedEdge(two, three);

    expect(graphTest.getNeighbors(two)).toEqual([{'vertex': {'value': 3}, 'weight': 0}]);
  });

  it('Neighbors are returned with the weight between nodes included', ()=> {
    const graphTest = new Graph();
    graphTest.addVertex(two);
    graphTest.addVertex(three);
    graphTest.addDirectedEdge(two, three, 10);

    expect(graphTest.getNeighbors(two)).toEqual([{'vertex': {'value': 3}, 'weight': 10}]);
  });

  it('The proper size is returned, representing the number of nodes in the graph', ()=> {

    expect(graph.getSize()).toEqual(6);
  });
});