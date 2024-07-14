class queue{
    constructor(val){
        this.item = []
    }
    enqueue(val){
        this.item.push(val)
    }
    dequeue(){
        if(this.item.length==0){
            return 'Underflow'
        } else {
         return this.item.shift()
        }
    }
    display(){
        return this.item
    }
}

let s = new queue()
s.enqueue(5)
s.enqueue(2)
s.enqueue(4)
s.enqueue(1)
console.log(s.display());
console.log(s.dequeue());
console.log(s.display());

