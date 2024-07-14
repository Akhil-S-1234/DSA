// // class Node{
// //     constructor(value){
// //         this.value = value
// //         this.left = null
// //         this.right = null
// //     }
// // }

// // class Tree{
// //     constructor(){
// //         this.root = null
// //     }

// //     isempty(){
// //         return this.root == null
// //     }

// //     insert(value){
// //         let node = new Node(value)
// //         if(this.isempty()){
// //             this.root = node
// //         } else {
// //             this.insertnode(this.root,node)
// //         }
// //     }

// //     insertnode(root,node){
// //         if(node.value < root.value){
// //             if(root.left == null){
// //                 root.left = node
// //             } else {
// //                 this.insertnode(root.left,node)
// //             }
// //         } else {
// //             if(root.right == null){
// //                 root.right = node
// //             } else {
// //                 this.insertnode(root.right,node)
// //             }
// //         }
// //     }

// //     search(root,value){
// //         if(!root){
// //             return false
// //         } else {

// //         if(root.value == value){
// //             return true
// //         } else if (value < root.value ){
// //             return this.search(root.left,value)
// //         } else {
// //             return this.search(root.right,value)
// //         }

// //        }
// //     }
// // }

// // let tree = new Tree()
// // tree.insert(1)
// // tree.insert(2)
// // tree.insert(3)
// // tree.insert(4)
// // tree.insert(5)

// // console.log(tree.search(tree.root,0))


// // class tree{
// //     constructor(val){
// //         this.value = val
// //         this.children = []
// //     }

// //     addchild(child){
// //         this.children.push(child)
// //     }
// // }

// // let root = new tree(1)
// // let child1 = new tree(2)
// // let child2 = new tree(3)
// // let child11 = new tree(4)
// // let child21 = new tree(5)

// // root.addchild(child1)
// // root.addchild(child2)
// // child1.addchild(child11)
// // child2.addchild(child21)

// // function traverse(root){
// //     console.log(root.value)
// //     for(let child of root.children){
// //         traverse(child)
// //     }
// // }

// // traverse(root)


// // class Node{
// //     constructor(val){
// //         this.value = val
// //         this.left = null
// //         this.right = null
// //     }
// // }

// // class bst{
// //     constructor(){
// //         this.root = null
// //     }

// //     isempty(){
// //         return this.root == null
// //     }

// //     insert(val){
// //         let node = new Node(val)
// //         if(this.isempty()){
// //             this.root = node
// //         } else {
// //             this.insertnode(this.root,node)
// //         }
// //     }

// //     insertnode(root,node){
// //         if(node.value < root.value){
// //             if(root.left==null){
// //                root.left = node
// //             } else {
// //                 this.insertnode(root.left,node)
// //             }
// //         } else {
// //             if(root.right == null){
// //                 root.right = node
// //             } else {
// //                 this.insertnode(root.right , node)
// //             }
// //         }
// //     }

// //     search(root,val){
// //           if(!root){
// //             return false
// //           } else {
// //             if(root.value == val){
// //             return true
// //           } else if(val < root.value){
// //                return this.search(root.left,val)
// //             } else {
// //                return this.search(root.right,val)
// //             }
// //         }
          
// //     }
// // }


// class Node{
//     constructor(val){
//         this.value = val
//         this.left = null
//         this.right = null
//     }
// }

// class tree {
//     constructor(){
//         this.root = null
//     }
//     isempty(){
//         return this.isempty() == null
//     }
//     insert(val){
//         let node = new Node(val)
//         if(this.isempty()){
//             this.root = node
//         } else {
//             this.insertnode(this.root,node)
//         }
//     }

//     insertnode(root,node){
//         if(node.value < root.value){
//             if(root.left==null){
//                 root.left =node
//             } else {
//                 this.insertnode(root.left,node)
//             }
//         }
//     }

//     search(root,val){
//         if(!root){
//             return false
//         } else {
//             if(root.value == val){
//                 return true
//             } else if(val < root.value) {
//                 return this.search(root.left,val)
//             } else {
//                 return this.search(root.right,val)
//             }
//         }
//     }
// }


function search(value,root){
    if(!root){
        return false
    }

    if(root.value == value){
        return true
    } else {
        if(value < root.value){
            this.search(value,root.left)
        } else {
            this.search(value,root.right)
        }
    }
}

function bfs(root){
    let queue = []
    queue.push(root)
    while(queue.length){
        let cur = queue.shift()
        console.log(cur)
        if(cur.left){
            queue.push(cur.left)
        }
        if(cur.right){
            queue.push(queue.right)
        }
    }
}