let a = [1,3,5,7,9]
let b = [0,2,4,6,8]

function merge(a,b){
    let result = []
    while(a.length&&b.length){
        if(a[0]<b[0]){
            result.push(a.shift())
        } else {
            result.push(b.shift())
        }
    }

    return [...result,...a,...b]
}

console.log(merge(a,b))