
function hash(key){
    let total = 0
    for(let i = 0;i<key.length;i++){
        total += key.charCodeAt(i)
    }
    return total % 10
}

let k = 'akhil s'
let h = 'akhil'
console.log(hash(k))
console.log(hash(h))