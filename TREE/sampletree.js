class treenode{
    constructor(val){
        this.value = val
        this.children = []
    }

    newchild(node){
        this.children.push(node)
    }
}
let node = new treenode(0)
let node1 = new treenode(1)
let node2 = new treenode(2)
let node21 = new treenode(11)
let node22 = new treenode(22)
let node23 = new treenode(22)

node.newchild(node1)
node.newchild(node2)
node1.newchild(node21)
node2.newchild(node22)


//DFS

function traverse(n){
    console.log(n.value)
    for(let child of n.children){
        traverse(child)
    }
}


//BFS

function bfs(n){
    let queue = [node]

    while(queue.length > 0){
        let current = queue.shift()
        console.log(current.value)
        current.children.forEach(child => queue.push(child))
    }
}

function treeheight(node){
    if(node.children.length == 0){
        return 1
    }

    let heights = node.children.map(child => treeheight(child))

    return Math.max(...heights) + 1
}

// traverse(node)
// bfs(node)

console.log(treeheight(node))