// function bubble(num){
//     for(let  i=0;i<num.length;i++){

//         for(let j = 0 ;j<num.length-i+1;j++){
//             if(num[j]>num[j+1]){
//                 [num[j],num[j+1]] = [num[j+1],num[j]]
//             }
//         }
//     }
//     return num
// }


// function selection(arr){
//      for(let i=0;i<arr.length;i++){
//         let minindex = i
//         for(let j =i+1; j<arr.length;j++){
//             if(arr[j]<arr[minindex]){
//                 minindex = j
//             }
//         }
//         if(minindex!=i){
//             [arr[i],arr[minindex]]=[arr[minindex],arr[i]]
//         }
//      }
//      return arr
// }

// function quick(arr){
//     if(arr.length <=1){
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
//     return quick(left).concat(pivot,quick(right))
// }

// function merge(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     let mid = Math.floor( arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)

//     return msort(merge(left),merge(right))
// }

// function msort(left,right){
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


function insertion(arr){
    for(let i =0;i<arr.length;i++){
        let curr = arr[i]
        let j =i-1
        while(j>=0 && arr[j]>curr){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = curr   
    }
    return arr
}

let a = [4,35,3,1,6,3]
// console.log(bubble(a))
// console.log(selection(a))
// console.log(quick(a));
// console.log(merge(a));
console.log(insertion(a));