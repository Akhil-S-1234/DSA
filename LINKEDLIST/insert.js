class Node{
    constructor(value){
        this.value = value
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

    getsize(){
        return this.size
    }

    prepend(value){
        let node = new Node(value)
        if(this.isempty()){
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print(){
        if(this.isempty()){
            console.log('this list is empty');
        } else {
            let curr = this.head
            let l = ""
            while(curr){
                l += `${curr.value} -> `
                curr = curr.next
            }
            console.log(l);
        }
    }

    insert(value,index){
        if(index<0 || index > this.getsize()){
            return
        }

        if(index===0){
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i< index -1 ; i++){
                prev = prev.next 
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
}


let list = new LinkedList()
list.insert(2,0)
list.print()

list.insert(7,0)
list.print()

list.insert(290,1)
list.print()

list.insert(90,2)
list.print()