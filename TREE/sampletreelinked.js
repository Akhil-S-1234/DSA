class tree{
    constructor(val){
        this.value = val
        this.child = null
        this.next = null
    }
}

let root = new tree('root')
let child = new tree('child')
let child2 = new tree('child 2')
let grandchild = new tree('GRand child')
let grandchild2 = new tree('GRand child 2')


root.child = child
child.child = grandchild
root.next = child2
child2.child = grandchild2

function traverse(root){
    let curr = root
    while(curr!= null){
        console.log(curr.value)
        if(curr.child!=null){
            traverse(curr.child)
        }
        curr = curr.next
    }
}

traverse(root)