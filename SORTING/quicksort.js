function quicksort(arr){
    if(arr.length <= 1)
     return arr
    const pivot = arr[Math.floor(arr.length/2)]
    const left = []
    const right = []
    for(let i =0;i<arr.length;i++){
        if(i===Math.floor(arr.length/2))
            continue
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quicksort(left).concat([pivot],quicksort(right))

}

// let a = [3,5,1,7,5,3,8,4,4,2]
const a = ["dsds", "rreds", "qwquhu", "xfef", "asaddw"]

console.log(quicksort(a));