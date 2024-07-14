class treenode{
    constructor(val){
        this.value = val
        this.children = []
    }
    newchild(child){
        this.children.push(child)
    }
}

let node = new treenode(0)
let node1 = new treenode(1)
let node2 = new treenode(2)
let node21 = new treenode(11)
let node22 = new treenode(22)


node.newchild(node1)
node1.newchild(node2)
node2.newchild(node21)
node21.newchild(node22)

function height(node){
    if(node.children.length === 0){
        return 1
    }

    let h = node.children.map(child => height(child))

    return Math.max(...h) + 1
}

console.log(height(node))