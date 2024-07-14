
// function deletemiddle(arr){
//     let stack = []
//     let mid = Math.floor(arr.length/2)

//     while(mid-- > 0){
//         stack.push(arr.pop())
//     }

//     let midpop = arr.pop()

//     while(stack.length){
//         arr.push(stack.pop())
//     }

//     return [midpop,arr]
// }

// let a = [1,2,3,4,5,6,7,8]

// console.log(deletemiddle(a))


class stack {
    constructor(){
        this.items = []
    }

    push(val){
         this.items.push(val)
    }

    pop(){
        return this.items.pop()
    }

    isempty(){
        return this.items.length ==0
    }

    peek(){
        return this.items[0]
    }

    display(){
        return this.items
    }
     
    deletemid(){
        let tempstack = []
        let mid = Math.floor(this.items.length/2)

        while(mid-->0){
            tempstack.push(this.pop())
        }

        let popmid = this.pop()

        while(tempstack.length){
            this.push(tempstack.pop())
        }

        return popmid
    }
}

let s = new stack()

s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)

console.log(s.deletemid());

console.log(s.display())