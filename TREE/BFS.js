class Treenode{
    constructor(val){
        this.value = val
        this.children = []
    }
    addchild(child){
        this.children.push(child)
    }
}

let root = new Treenode(10)
let parent = new Treenode(20)
let parent1 = new Treenode(30)
let child1 = new Treenode(40)
let child2  = new Treenode(50)

root.addchild(parent)
root.addchild(parent1)

parent.addchild(child1)
parent1.addchild(child2)


function bfs(root){
    let queue = [root]

    while(queue.length > 0){
           let current = queue.shift()
           console.log(current.value)
           current.children.forEach(child => queue.push(child))
    }
}

bfs(root)