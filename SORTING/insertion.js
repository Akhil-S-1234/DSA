// function insertion(arr){
//     for(let i=0;i<arr.length;i++){
//         let current = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j]> current){
//             arr[j+1]= arr[j]
//             j--
//         }
//         arr[j+1] = current
//     }
//     return arr
// }

// let a = [2,4,52,1,2,3,0]
// console.log(insertion(a));

let  a = 'food'

let  b = a.split('')

b.splice(0,7)

console.log(b);