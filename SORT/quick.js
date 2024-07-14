function quick(arr){
    if(arr.length<=1){
        return arr
    }
    let pivot = arr[Math.floor(arr.length/2)]
    
    let left = []
    let right = []
    for(let i = 0;i<arr.length;i++){
        if(i==Math.floor(arr.length/2)){
            continue
        }
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    console.log(left);
    // console.log(left);
    return quick(left).concat([pivot],quick(right))
}
let arr = [3,5,6,2,1,0]
console.log(quick(arr))