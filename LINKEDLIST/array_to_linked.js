class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

function arraytolinkedlist(arr){

    if(!arr || arr.length == 0){
        return null
    }
    let head = new Node(arr[0])
    let curr = head

    for(let i = 1; i < arr.length ; i++){
        curr.next = new Node(arr[i])
        curr = curr.next
    }
    return head
}
function print (val){
    let curr = val
    while(curr){
        console.log(curr.value);
        curr = curr.next
    }
}

let arr = [1,23,4,56,6]
const linkedlist = arraytolinkedlist(arr)
print(linkedlist);