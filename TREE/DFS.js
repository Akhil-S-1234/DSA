class TreeNode {
    constructor(val){
        this.value = val
        this.children = []
    }
    addchild(child){
        this.children.push(child)
    }
}

let root = new TreeNode(1)
let parent = new TreeNode(2)
let parent2 = new TreeNode(3)
let  child1 = new TreeNode(4)
let  child2 = new TreeNode(5)
let  child3 = new TreeNode(6)
let  child4 = new TreeNode(7)

root.addchild(parent)
root.addchild(parent2)

parent.addchild(child1)
parent.addchild(child3)

parent2.addchild(child2)
parent2.addchild(child4)

function traverse(root){
     console.log(root.value)
     root.children.forEach(root => traverse(root))
}

traverse(root)