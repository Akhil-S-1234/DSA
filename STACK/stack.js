class stack {
    constructor(){
        this.items = []
    }

    pop(){
        return this.items.pop()
    }
    push(elm){
        return this.items.push(elm)
    }
    display(){
        return this.items
    }
}

let s = new stack

s.push(4)
s.push(4)
s.push(4)
console.log(s.display());

s.pop(4)
console.log(s.display());

