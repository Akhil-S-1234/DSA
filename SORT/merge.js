// function merge(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)

//     let sortedleft = merge(left)
//     let sortedright = merge(right)

//     return sort(sortedleft,sortedright)
// }

// function sort(left,right){
//     let result = []
//     let leftindex = 0
//     let rightindex = 0
//     while(leftindex<left.length && rightindex < right.length){
//         if(left[leftindex]<right[rightindex]){
//             result.push(left[leftindex])
//             leftindex++
//         } else {
//             result.push(right[rightindex])
//             rightindex++
//         }
//     }
//     return result.concat(left.slice(leftindex),right.slice(rightindex))
// }

let a = [5,2,7,2,4,6,9,366483,3,1,7,4,0]


console.log(merge(a));


function merge(arr){
    if(arr.length<=1){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
   

    return sort(merge(left),merge(right))
}

function sort(left,right) {
    let result = []
    while(left.length && right.length){
        if(left[0]<right[0]){
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return [...result,...left,...right]
}