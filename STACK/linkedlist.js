class Node{
    constructor(val){
        this.value = val
        this.next = null
    }
}

class stack {
    constructor(){
        this.top = null
        this.size = 0
    }


    isempty(){
        return this.size == 0
    }

    push(val){
        let node = new Node(val)
        if(!this.isempty()){
            node.next = this.top
        }
        this.top = node
        this.size++
    }

    pop(){
        let poppeddata = this.top.value
        this.top = this.top.next 
        this.size--
        return poppeddata
    }

    peek(){
        if(this.isempty()){
            return 'NULL'
        }
        return this.top.value
    }

    display(){
        let curr = this.top
        let listvalue=""
        while(curr){
            listvalue += `->${curr.value}`
            console.log(curr.value);
            curr = curr.next
        }
        console.log(listvalue);
    }
}

let s = new stack()
s.push(4)
s.push(4)
s.push(3)
s.push(2)
s.display()
