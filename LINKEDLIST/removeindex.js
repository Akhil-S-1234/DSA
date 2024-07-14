class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
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

    append(value){

        let node = new Node(value)
        if(this.isempty()){
            this.head = node
        } else {
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    prepend(value){
        let node = new Node(value)
        if(!this.isempty()){
            node.next = this.head
        }
        this.head = node
        this.size++
    }

    print(){
        if(this.isempty()){
            console.log("list is empty");
        } else {
            let curr = this.head
            while(curr){
                console.log(curr.value);
                curr = curr.next
            }
        }
    }

    insert(value,index){
        if(index < 0 || index > this.size){
            return
        }

        if(index === 0){
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i < index - 1 ; i++ ){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }


    deletenode(index){
        if(index < 0 || index >= this.size){
            return null
        }

        let removenode 
        if(index === 0){
            this.head = this.head.next
        } else {
            let prev = this.head
            for(let i = 0 ; i< index - 1 ; i++){
                prev = prev.next
            }
            removenode = prev.next
            prev.next = removenode.next
        }
        this.size--
        return removenode.value

    }

    deletevalue(value){
        if(this.head.value == value){
            this.head = this.head.next
        } else {
            let curr = this.head
            let deleteno
            while(curr.next){
                if(curr.next.value == value){
                    deleteno = curr.next ;
                    break
                }
                curr = curr.next
            }
            curr.next = deleteno.next
        } 
        this.size--      
    }   
}

let l1 = new LinkedList()

l1.prepend(19)
l1.append(10)
l1.prepend(19)
l1.prepend(19)
l1.prepend(19)
l1.insert(10,2)
// list.append(19)
// list.append(19)
// list.append(19)
let l2 = new LinkedList()

l2.append(10)
l2.prepend(19)
l2.prepend(19)

l2.prepend(19)
l2.insert(10,2)

l1.print()
console.log('ewkffefeon');
l2.print()

function merge(l1, l2){

    let curr = l1.head
    while(curr){
        curr=curr.next
    }
    curr = l2
    
    return l1
}

let bv = merge(l1,l2)

console.log(bv);