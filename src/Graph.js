class Graph {
  constructor() {
    /**
     * There are many representations of Graph.
     * We can store Graph in many ways.
     * One way is by using Adjacency List.
     */
    this.nodes = {}; // Adjacency List
  }

  addNode(node) {
    this.nodes[node] = [];
  }
  removeNode(node) {
    this.nodes[node].forEach((edge) => {
      const index = this.nodes[edge].indexOf(node);
      this.nodes[edge].splice(index, 1);
    });
    delete this.nodes[node];
  }
  addEdge(first, second) {
    if (
      this.nodes[first] &&
      this.nodes[second] &&
      !this.nodes[first].includes(second) &&
      !this.nodes[second].includes(first)
    ) {
      this.nodes[first].push(second);
      this.nodes[second].push(first);
    } else {
      return "Invalid node value";
    }
  }
  contains(val) {
    return this.nodes[val] ? true : false;
  }
  removeEdge(first, second) {
    let indexF = this.nodes[first].indexOf(second);
    let indexS = this.nodes[second].indexOf(first);
    this.nodes[first].splice(indexF, 1);
    this.nodes[second].splice(indexS, 1);
  }
  hasEdge(first, second) {
    return (
      this.nodes[first].includes(second) && this.nodes[second].includes(first)
    );
  }
}
module.exports = Graph;
/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
