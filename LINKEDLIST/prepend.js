class Node{
    constructor(value){
        this.value =  value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        }else{
            node.next = this.head
            // console.log("NODE NXT : ",node.next)
            // console.log("NODE : ",node)
            this.head = node
            // console.log("tHIS HEAD : ",this.head);
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("The list is empty")
        } else {
            let curr = this.head;
            while(curr){
                console.log(curr.value)
                curr = curr.next
            }
        }
    }
}

let list = new LinkedList()
list.print()

list.prepend(9)
list.prepend(10)
list.prepend(15)
// console.log("Is the list Empty :",list.isEmpty());
// console.log("the list size :",list.getSize());
list.print()