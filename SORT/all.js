function bubble(arr){
    let n = arr.length
    for(let i = 0;i<n;i++){
        for(let j =0;j<n-i+1;j++){
             if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
             }
        }
    }
    return arr
}

let a = [12,3,2,8,4,1]
console.log(bubble(a))