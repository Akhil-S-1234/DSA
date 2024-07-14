class stack {
    constructor(){
        this.items = []
    }

    isempty(){
        return this.items.length == 0
    }
    push(val){
         this.items.push(val)
    }

    pop(){
        return this.items.pop()
    }

    print(){
        return this.items
    }

    middlelm(){
        let size = this.items.length

        // if(size%2 !=0){
        //     return 'cannot'
        // }

        const tempstack = []
        let delsize = size/2

        while(delsize-->0){
            tempstack.push(this.pop())
        }

        const middle = this.pop()

        while(tempstack.length){
            this.push(tempstack.pop())
        }

        return middle
    }

}

let s = new stack()

s.push(1)
s.push(2)
s.push(2)

s.push(4)
s.push(5)
console.log(s.middlelm());

console.log(s.print());





// function hasDuplicates(str) {
//     const charMap = {};
//     for (let char of str) {
//         if (charMap[char]) {
//             return true; // Found a duplicate
//         }
//         charMap[char] = true; // Mark the character as encountered
//     }
//     console.log(charMap)
//     return false; // No duplicates found
// }

// // Example usage:
// const string1 = "hello";
// console.log(hasDuplicates(string1)); 




// function reverse(str){
//     let stack = []
//     for(let char of str){
//         stack.push(char)
//     }

//     let reversestr = ''
//     while(stack.length>0){
//         reversestr += stack.pop()
//     }
//     return reversestr
// }


// let a = 'Akhil'
// console.log(reverse(a))