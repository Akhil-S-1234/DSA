

class stack {
    constructor(){
        this.items = []
    }
    pop(){
        return this.items.pop()
    }
    display(){
        return this.items
    }
    push(elm){
        this.items.push(elm)
    }
}
let s = new stack

s.push(3)
s.push(1)
s.push(4)

console.log(s.display());
console.log(s.pop());
console.log(s.display());

// class node {
//     constructor(value) {
//         this.value = value
//         this.size = 0
//     }
// }

// class linkedlist {
//     constructor (){
//         this.head = null
//         this.next = null
//     }

//     isempty(){

//         return this.size == 0
//     }

//     prepend(value){
//         let node = new node(value)
//         if(this.isempty()){
//             this.head = node
//             this.size++
//         } else {
//             let curr = this.head
//             for(let i =0 ;i< this.size ; i++){
//                 while(curr<)
//             }
//         }
        
//     }

// }