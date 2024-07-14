function recursesum(arr,index =0){
    if(index == arr.length){
        return 0
    }

    return arr[index] + recursesum(arr,index+1)
}

let a =[1,2,3,4]

console.log(recursesum(a))