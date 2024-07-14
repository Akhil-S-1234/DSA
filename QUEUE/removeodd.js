class queue {
    constructor(){
        this.items = []
        this.size = 0
    }

    enqueue(val){
        this.items.push(val)
    }

    dequeue(){
       return this.items.shift() //O(n) is a problem
    }

    peek(){
        return this.items[0]
    }

    isempty(){
        return this.items.length === 0
    }

    print(){
        if(this.isempty()){
            return 'Empty'
        } else {
            console.log(this.items)
        }
    }
    removeodd(){
        let evenqueue = new queue()
        while(!this.isempty()){
            let elm = this.dequeue()
            if(elm%2 == 0){
                evenqueue.enqueue(elm)
                
            }
        }
        return evenqueue
    }
    
}

let q = new queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.enqueue(6)


q.print()
console.log(q.removeodd())

