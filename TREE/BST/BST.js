class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    isempty(){
        return this.root == null
    }

    insert(value){
        let node = new Node(value)
        if(this.isempty()){
            this.root = node
        } else {
            this.insertnode(this.root,node)
        }
    }

    insertnode(root,newnode){
        if(newnode.value < root.value){
            if(root.left == null){
                root.left = newnode
            } else {
                this.insertnode(root.left,newnode)
            }
        } else {
            if(root.right == null){
                root.right = newnode
            } else {
                this.insertnode(root.right,newnode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        } else {
            if(root.value == value){
                return true
            } else if(value < root.value) {
                return this.search(root.left,value)
            } else {
                return this.search(root.right,value)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    height(root){
        
    }

    delete(val){
         this.root =  this.deletenode(this.root,val)
    }

    deletenode(root,val){
        if(root == null){
            return root
        } 
        if(val < root.value){
             root.left = this.deletenode(root.left,val)
        } else if(val > root.value){
             root.right = this.deletenode(root.right,val)
        } else {
            if(!root.left && !root.right){
                return null
            }

            if(!root.left){
                return root.right
            } else if (!root.right){
                return root.left
            }

            root.value = this.min(root.right)
            root.right = this.deletenode(root.right,root.value)
        }

        return root
    }

    // preorder(){
    //     let data = []
    //     let current = this.root
    //     function traverse(root){
    //         data.push(root.value)
    //         if(root.left)  traverse(root.left)
    //         if(root.right)  traverse(root.right)
    //     }
    //     traverse(current)
    //     return data
    // }

    preorder(root){
        if(root){
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }

    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let  curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            } 
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    isbst(){
        return this.isbstrecursively(this.root,-Infinity,Infinity)
    }

    isbstrecursively(node,min,max){
        if(node==null){
            return true
        }
        if(node.value<min||node.value>max) return false
        return (this.isbstrecursively(node.left,min,node.value-1)&&this.isbstrecursively(node.right,node.value+1,max))
    }


    findclosest(target){
        return this.findclosesthelper(this.root,target,this.root.value)
    }

    findclosesthelper(node,target,closest){
           if(node==null){
              return closest
           }

           if(Math.abs(target-closest) > Math.abs(target - node.value)){
            closest = node.value
           }

           if(target < node.value){
            return this.findclosesthelper(node.left,target,closest)
           } else if (target > node.value){
            return this.findclosesthelper(node.right,target,closest)
           } else {
             return closest
           }
    }
}




let tree = new Tree()

tree.insert(3)
tree.insert(2)
tree.insert(1)
tree.insert(4)
tree.insert(5)


tree.delete(4)

console.log('Preoreder',tree.preorder(tree.root))
console.log('postoreder',tree.postorder(tree.root))
console.log('inorder',tree.inorder(tree.root))

tree.levelOrder()

console.log(tree.search(tree.root,4))


function checkidentical(root1,root2){
    if(!root1 && !root2){
        return true 
    }
    if(!root1 || !root2){
        return false
    }

    if(root1.value !== root2.value){
        return false
    }

    return (this.checkidentical(root1.left,root2.left) && this.checkidentical(root1.right,root2.right))
}