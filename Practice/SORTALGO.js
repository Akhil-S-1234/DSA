// function bubble(arr){
//     let n = arr.length
//     for(let i=0;i<n;i++){
//         for(let j=0;j<n-i+1;j++){
//            if(arr[j]>arr[j+1]){
//               [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//            }      
//         }
//     }
//     return arr
// }

// function merge(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)

//     return mergesort(merge(left),merge(right))
// }

// function mergesort(left,right){
//     let result = []

//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             result.push(left.shift())
//         } else {
//             result.push(right.shift())
//         }
//     }
//     return [...result,...left,...right]
// }


// function quick(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     let pivot = arr[Math.floor(arr.length/2)]
//     let left = []
//     let right = []

//     for(let i =0;i<arr.length;i++){
//         if(i == Math.floor(arr.length/2)){
//             continue
//         }

//         if(arr[i]<pivot){
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }

//     }

//     return quick(left).concat([pivot],quick(right))
// }

// function insertion(arr){
//     for(let i = 0 ;i<arr.length;i++){
//         let curr = arr[i]
//         j = i-1
//         while(j>=0 && arr[j]>curr){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = curr
//     }
//     return arr
// }


function selection(arr){
    let n = arr.length
    for(let i =0;i<n;i++){
        let minindex = i
        for(let j = i+1;j<n;j++){
            if(arr[j]<arr[minindex]){
                minindex = j
            }
        }
        if(minindex != i){
            [arr[i],arr[minindex]] = [arr[minindex],arr[i]]
        }
    }
    return arr
}

let a = [3,5,8,1,2,9,4,6,10,7]
console.log(selection(a));
// console.log(bubble(a))
// console.log(insertion(a))
// console.log(quick(a))
// console.log(merge(a))