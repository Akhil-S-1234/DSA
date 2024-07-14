function insertion(arr){
    for(let i = 0;i<arr.length;i++){
        let curr = arr[i]
        let j = i-1
        while(j>= 0&&arr[j]>curr){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1] =curr
    }
    return arr
}
let arr = [7,34,52,1,9]
console.log(insertion(arr))