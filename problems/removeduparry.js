let a =[1,5,3,1,3,8,3]

function removedup(arr){
    let map = {}
    let a = []
    for(let i  =0;i<arr.length;i++){
        if(!map[arr[i]]){
            map[arr[i]] = 1
            a.push(arr[i])
        }
    }
    return a
}

console.log(removedup(a))