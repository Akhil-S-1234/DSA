function swap(s){
    let a = s[0]
    let b = s[s.length-1]
    let middle = s.slice(1,-1)
    
    return b + middle + a
}

let a =swap('apple')
console.log(a);