const Vertex = require('../graph/graph').Vertex;
const GraphDepth = require('./depth-first');

const graphDepth = new GraphDepth();

const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const ten = new Vertex(10);

graphDepth.addVertex(two);
graphDepth.addVertex(three);
graphDepth.addVertex(six);
graphDepth.addVertex(seven);
graphDepth.addVertex(eight);
graphDepth.addVertex(ten);

graphDepth.addDirectedEdge(two, seven);
graphDepth.addDirectedEdge(three, eight, 7);
graphDepth.addDirectedEdge(six, seven);
graphDepth.addDirectedEdge(six, eight, 2);
graphDepth.addDirectedEdge(eight, seven);
graphDepth.addDirectedEdge(ten, two);
graphDepth.addDirectedEdge(ten, eight, 5);

describe('BFT is functional and working!', ()=> {
  it('The correct traversal array for 2 is returned ', ()=> {
    expect(graphDepth.traversal(two)).toEqual([ 2, 7 ]);
  });

  it('The correct traversal array for 3 is returned ', ()=> {
    expect(graphDepth.traversal(three)).toEqual([ 3, 8, 7 ]);
  });

  it('The correct traversal array for 6 is returned ', ()=> {
    expect(graphDepth.traversal(six)).toEqual([ 6, 8, 7 ]);
  });

  it('The correct traversal array for 7 with no next neighbors is returned ', ()=> {
    expect(graphDepth.traversal(seven)).toEqual([ 7 ]);
  });

  it('The correct traversal array for 8 is returned ', ()=> {
    expect(graphDepth.traversal(eight)).toEqual([ 8, 7 ]);
  });

  it('The correct traversal array for 10 is returned ', ()=> {
    expect(graphDepth.traversal(ten)).toEqual([ 10, 8, 7, 2 ]);
  });
});