class Node {
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

        let node  = new Node(value)
        if(!this.isempty()){
            node.next = this.head
        }
        this.head = node
        this.size++
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

    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value);
            curr = curr.next
        }
    }

    insert(value,index){
        if(index<0 || index>this.getsize()){
            console.log("Enter the valid index");
            return
        }
        if(index === 0 ){
            this.prepend(value)
        } else {
            let node = new Node(value)
            let prev = this.head
            for(let i=0 ; i< index -1 ; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    deletenode(index){
        if(index<0 && index > this.size){
            return
        }
        
        if(index === 0){
            this.head = this.head.next
        } else {
            let prev = this.head
            for(let i=0;i<index -1;i++){
                prev = prev.next
            }
            let removenode = prev.next
            prev.next = removenode.next

        }
        this.size--
    }
    deletevalue(value){
        if(this.head.value == value){
            this.head = this.head.next
        } else {
            let curr = this.head
            let deleteno 
            while(curr.next){
                if(curr.next.value == value){
                    deleteno = curr.next
                    break
                }
                curr = curr.next
            }
            curr.next = deleteno.next
        }
        this.size--
    }
}

function arrtolink(arr){
    if(!arr || arr.length == 0){
        return null
    }

    let node = new Node(arr[0])
    let curr = head

    for(let i = 1;i < arr.lenght;i++){
         curr.next = new Node(arr[i])
         curr = curr.next
    }
    return head
}

let l1 = new LinkedList()

l1.prepend(4)
l1.prepend(23)
l1.prepend(132)
l1.append(8)
l1.append(2)
l1.insert(111,3)
l1.print()
console.log("....................");
l1.deletenode(3)
l1.deletevalue(4)
l1.print()