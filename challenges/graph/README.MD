# Graphs
A graph data structure consists of a finite (and possibly mutable) set of vertices (also called nodes or points), together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

## Challenge
<!-- Description of the challenge -->

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API



1- a method called **AddNode()** that:
* Adds a new node to the graph
* Takes in the value of that node
* Returns the added node



2- a method called **AddEdge()** that:
* Adds a new edge between two nodes in the graph
* Include the ability to have a “weight”
* Takes in the two nodes to be connected by the edge
    * Both nodes should already be in the Graph




3- a method called **GetNodes()** that:
* Returns all of the nodes in the graph as a collection (set, list, or similar)



4- a method called **GetNeighbors()** that:
* Returns a collection of edges connected to the given node
* Takes in a given node
* Include the weight of the connection in the returned collection



5- a method called **Size()** that:
* Returns the total number of nodes in the graph