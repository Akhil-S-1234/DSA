class queue {
    constructor (){
        this.items = []
    }
    enqueue(elem){
        this.items.push(elem)
    }
    display(){
        return this.items
    }
    dequeue(){
        if(this.items.length ==0)
           return 'UNDERFLOW'
        return this.items.shift()
    }
}

let q = new queue

q.enqueue(4)
q.enqueue(2)
q.enqueue(6)

console.log(q.display());
console.log(q.dequeue());