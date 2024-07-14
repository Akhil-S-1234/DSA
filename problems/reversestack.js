function reverse(str){
    let stack = []
    for(let i =0;i<str.length;i++){
        stack.push(str[i])
    }

    let reversestr = ''

    while(stack.length){
        reversestr += stack.pop()
    }
    return reversestr
}

let a ='abcdefgh'
console.log(reverse(a))