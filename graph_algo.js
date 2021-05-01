class Graph {
  constructor() {
    this.node = {};
  }

  addNode(ele) {
    this.node[ele] = [];
  }

  addEdge(source, dest) {
    if (!this.node[source] && !this.node[dest]) {
      return false;
    }
    if (!this.node[source].includes(dest)) {
      this.node[source].push(dest);
    }
  }

  showNode() {
    return this.node;
  }

  bfs(source, destination) {
    if (!this.node[source]) {
      return false;
    }

    let queue = [source],
      visited = {};
    while (queue.length) {
      let ele = queue.shift();
      if (visited[ele]) {
        continue;
      }
      if (ele === destination) {
        return true;
      }
      visited[ele] = true;
      let neighbour = this.node[ele];
      if (neighbour && neighbour.length) {
        queue.push(...neighbour);
      }
    }
    return false;
  }

  dfs(source, destination, visited) {
    if (visited[source]) {
      return false;
    }
    if (source === destination) {
      return true;
    }
    visited[source] = true;
    let neighbour = this.node[source];
    if (neighbour && neighbour.length) {
      for (let i = 0; i < neighbour.length; i++) {
        if (this.dfs(neighbour[i], destination, visited)) {
          return true;
        }
      }
    }
    return false;
  }
}

var eachNode = new Graph();
eachNode.addNode("a");
eachNode.addNode("b");
eachNode.addNode("c");
eachNode.addNode("d");
eachNode.addNode("e");
eachNode.addNode("f");

eachNode.addEdge("a", "b");
eachNode.addEdge("b", "c");
eachNode.addEdge("c", "d");
eachNode.addEdge("a", "e");
eachNode.addEdge("a", "f");
console.log(eachNode.showNode());

console.log(eachNode.bfs("a", "e"));
console.log(eachNode.dfs("a", "b", {}));
