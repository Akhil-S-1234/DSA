class Graph {
	constructor() {
		this.adList = [];
	}

	addVertex(vertex) {
		if(!this.adList[vertex]) {
			this.adList[vertex] = new Set();
		}
	}

	addEdge(vertex1, vertex2) {
		if(!this.adList[vertex1]) {
			this.addVertex(vertex1);
		}
		if(!this.adList[vertex2]) {
			this.addVertex(vertex2);
		}

		this.adList[vertex1].add(vertex2);
		this.adList[vertex2].add(vertex1);
	}

	display() {
		for(let vertex in this.adList) {
			console.log(vertex + " -> " + [...this.adList[vertex]]);
		}
	}
	
	hasEdge(vertex1, vertex2) {
		return (
			this.adList[vertex1].has(vertex2) &&
			this.adList[vertex2].has(vertex1)
		);
	}

	removeEdge(vertex1, vertex2) {
		this.adList[vertex1].delete(vertex2);
		this.adList[vertex2].delete(vertex1);
	}
	
	removeVertex(vertex) {
		if(!this.adList[vertex]) {
			return;
		}
		for(let adjacentVertex of this.adList[vertex]) {
			this.removeEdge(vertex, adjacentVertex);
		}
	}

    hasCycle(vertex, visited = new Set(), parent = null) {
        visited.add(vertex);
    
        for (let ele of this.adjacencyList.get(vertex)) {
          if (!visited.has(ele)) {
            if (this.hasCycle(ele, visited, vertex)) {
              return true;
            }
          } else if (ele !== parent) {
            return true;
          }
        }
    
        return false;
      }
}