function unmatch(arr1,arr2){
    let d = []
    let mid =Math.floor(arr1.length/2) 
    console.log(mid)
    for(let i =0;i<arr1.length;i++){
        if(!arr1.includes(arr2[i])){
            d.push(arr2[i])
        }
        if(!arr2.includes(arr1[i])){
            d.push(arr1[i])
        }
    }
    return d
}

const arr1 = ["dsds", "rreds", "qwquhu", "xfef", "asaddw"]
const arr2 = ["skjlll", "rreds", "qwquhu", "plknas", "asaddw"]
console.log(unmatch(arr1,arr2))

