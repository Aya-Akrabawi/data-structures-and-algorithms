class Vertex {
    constructor(value) {
      this.value = value;
    }
  }
  
  class Edge {
    constructor(vertex, weight = 0) {
      this.vertex = vertex;
      this.weight = weight;
    }
  }
  
  class Graph {
    constructor() {
      this.adjacencyList = new Map();
      this.size = 0;
    }
    /**
     * adds a vertex to the graph
     * @param {Vertex} vertex 
     */
    addVertex(vertex) {
      this.adjacencyList.set(vertex, []);
      this.size++;
    }
    /**
     * Connects two vertices with a directed edge from start to finish.
     * @param {Vertex} startVertex 
     * @param {Vertex} endVertex 
     * @param {Integer} weight 
     */
    addDirectedEdge(startVertex, endVertex, weight) {
      if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      } else {
        const adjacencies = this.adjacencyList.get(startVertex);
        adjacencies.push(new Edge(endVertex, weight));
      }
  
    }
    /**
     * returns all direct connections with the input vertex
     * @param {Vertex} vertex 
     */
    getNeighbors(vertex) {
      if (!this.adjacencyList.has(vertex) ) {
        return null;
      } else {
        return this.adjacencyList.get(vertex);
      }
    }
    /**
     * gets all vertices as an adjacency list for the graph.
     */
    getNodes() {
      let collection =this.adjacencyList.entries();
      var output = Array.from(collection).reduce(function(results, [vertex, edges], index) {
        let edge = '';
        edges.forEach(element => {
          edge += `${element.vertex.value},${element.weight} --> `;
        });
  
        edge = edge.substring(0, edge.length - 6);
        if(edge) {
          results.push(`[${vertex.value}] ---> ${edge} `);
        } else {
          results.push(`[${vertex.value}] ---> null`);
        }
        return results;
      }, []);
  
      return output;
    }
    /**
     * returns the size of the graph as a number of vertices
     */
    getSize() {
      return this.size;
    }
  
    // bfs() 
    // dfs() 
    // pathTo() 
  }
  
  module.exports.Vertex = Vertex;
  module.exports.Graph = Graph;