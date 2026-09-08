class Graph {
  adjacencyList: Record<string, unknown[]>;

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name: string) {
    this.adjacencyList[name] = [];
  }
}
