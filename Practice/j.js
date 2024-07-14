 

function primeSum(arr){
    let c = 0
    let sum = 0
    let ar = []
    for(let j of arr){
        c = 0
    for(let i = 2; i <=j/2; i++){
        if(j%i == 0){
            c++
        }
    }

    if(j > 1 && c == 0 ){
        sum += j
        ar.push(j)
    }
    
}
console.log(ar)

return sum


}

console.log(primeSum([1,2,3,4,5,6,7,8,9,10,11]))