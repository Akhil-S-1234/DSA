// function selection(arr){
//     for(let i =0;i<arr.length;i++){
//         let minindex = i
//         for(let j = i ;j<arr.length;j++){
//             if(arr[j]<arr[minindex]){
//                 minindex = j
//             }
//         }
//         if(minindex!=i){
//             [arr[minindex],arr[i]] = [arr[i],arr[minindex]]
//         }
//     }
//     return arr
// }

// function quicksort(arr){
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

//     return quicksort(left).concat([pivot],quicksort(right))
// }


// let a =[2,5,79,5,2,1]

// console.log(quicksort(a))



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