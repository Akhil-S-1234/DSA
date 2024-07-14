class queue{
    constructor(){
        this.items = []
    }

    isempty(){
        return this.items.length == 0
    }
    enqueue(val){
        this.items.push(val)
    }
    dequeue(){
        return this.items.shift()
    }
    print(){
        return this.items
    }


    recursionreverse(queue){
        if(queue.isempty()){
            return
        }
        let element = queue.dequeue()
        this.recursionreverse(queue)
        queue.enqueue(element)
    }
    reverse(){
        return this.recursionreverse(this)
    }
}

let q = new queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.reverse()
console.log(q.print())