function mergeSort(arr){
    let n = arr.length
    if(n <=1){
        return arr
    }

    let mid = Math.floor(n/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    let sortedleft = mergeSort(left)
    let sortedright = mergeSort(right)

    return merge(sortedleft,sortedright)
}

function merge(left,right){

    let result = []
    let li = 0
    let ri = 0

    while(li<left.length && ri<right.length){
        if(left[li]<right[ri]){
            result.push(left[li])
            li++
        } else {
            result.push(right[ri])
            ri++
        }
    }
    return result.concat(left.slice(li),right.slice(ri))
}

let a = [8,45,422,1,3,5,9,5,1,2,3]

console.log(mergeSort(a))