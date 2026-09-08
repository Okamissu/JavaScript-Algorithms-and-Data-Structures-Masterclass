class Graph {
  adjacencyList: Record<string, unknown[]>;

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}
