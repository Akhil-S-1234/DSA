class Node {
    constructor(value){
        this.value = null
        this.next = null
    }
}

class LinkedList {

    constructor(){
        this.head = null
        this.size = 0
    }

    isempty(){
        return this.size === 0
    }

}

function merge(l1, l2){

    let curr = l1.head
    while(curr.next){
        curr=curr.next
    }
    curr.next = l2
    
    return l1
}

