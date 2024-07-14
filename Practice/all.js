// function bubble(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i+1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }

// function insertion(arr){
//     for(let  i= 1 ;i<arr.length;i++) {
//         let curr = arr[i]
//         let j =  i-1
//         while(j>=0&&arr[j]>curr){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = curr
//     }
//     return arr
// }

// function selection(arr){
//     let n = arr.length
//     for(let i=0;i<n;i++){
//         let minindex = i
//         for(let j = i ;j<n;j++){
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


// function quick(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     let pivot = arr[Math.floor(arr.length/2)]
//     let left = []
//     let right = []

//     for(let i =0;i<arr.length;i++){
//         if(i== Math.floor(arr.length/2)){
//             continue
//         }
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     return quick(left).concat([pivot],quick(right))
// }


// function merge(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)

//     return mergesort(merge(left),merge(right))
// }

// function mergesort(left,right){
//     let result =[]
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             result.push(left.shift())
//         } else {
//             result.push(right.shift())
//         }
//     }

//     return [...result,...left,...right]
// }

// let a = [4,32,6,2,1,8,3,7]

// console.log(merge(a))

// class Node{
//     constructor(val){
//         this.value = val
//         this.next = null
//     }
// }

// class stack{
//     constructor(){
//         this.top = null
//         this.size = 0
//     }

//     isempty(){
//         return this.size == 0
//     }

//     push(val){
//         let node = new Node(val)
//         if(!this.isempty()){
//             node.next = this.top
//         }
//         this.top = node
//         this.size++
//     }

//     pop(){
//         if(this.isempty()){
//             return 'Underflow'
//         }
//         let popnode = this.top
//         this.top = this.top.next
//         this.size--
//         return popnode
//     }

//     peek(){
//         return this.top.value
//     }

//     display(){
//         let curr = this.top
//         while(curr){
//             console.log(curr.value)
//             curr = curr.next
//         }
//     }
// }

// let s = new stack()

// s.push(1)
// s.push(2)
// s.push(3)
// s.push(4)
// s.push(5)
// s.push(6)

// console.log(s.peek())
// s.display()

// class Node{
//     constructor(val){
//         this.value = val
//         this.next = null
//     }
// }


// class Queue{
//     constructor(){
//         this.front = null
//         this.back = null
//         this.size = 0
//     }

//     isempty(){
//         return this.size == 0
//     }

//     enqueue(val){
//         let node = new Node(val)
//         if(this.isempty()){
//             this.front = node
//         } else {
//             this.back.next = node
//         }
//         this.back = node
//         this.size++
//     }

//     dequeue(){
//         if(this.isempty()){
//             return 'Underflow'
//         }
//         let deqdata = this.front
//         this.front = this.front.next
//         if(this.front == null){
//             this.back = null
//         }
//         this.size--
//         return deqdata.value
//     }

//     peek(){
//         return this.front.value
//     }

//     display(){
//         let curr = this.front
//         while(curr){
//             console.log(curr.value)
//             curr = curr.next 
//         }
//     }

//     reverse(){
//         let prev = null
//         let curr = this.front 
//         while(curr){
//             let next = curr.next 
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.front = prev
//         this.back = this.isempty() ? null : this.front
//     }
// }

// let q = new Queue()

// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// q.enqueue(4)
// q.enqueue(5)


// q.dequeue()
// q.display()

// class hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total  = 0
//         for(let i =0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         } else {
//             let samekeyitem = bucket.find(item => item[0] == key)
//             if(samekeyitem){
//                 samekeyitem[1] = value
//             } else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let samekeyitem = bucket.find(item => item[0] == key)
//             if(samekeyitem){
//                 return samekeyitem[1]
//             }
//         }
//         return undefined
//     }

//     remove(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let samekeyitem  =  bucket.find(item => item[0] == key )
//             if(samekeyitem){
//                 bucket.splice(bucket.indexOf(samekeyitem),1)
//             }
//         }
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// let t = new hashtable(20)
// t.set('as',34)
// t.set('s',4)
// t.set('a',3)
// t.set('af',3)

// t.display()

// class hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total = 0
//         for(let i = 0;i< key.length;i++){
//             total += key.charCodeAt(i)
//         }

//         return total % this.size
//     }

//     set(key,value){
//         let index = this.hash(key)
//         while(this.table[index]!=null && this.table[index][0] != key){
//             index = (index + 1) % this.size
//         }
//         this.table[index] = [key,value]
//     }

//     get(key){
//         let index = this.hash(key)
//         while(this.table[index]!=null){
//             if(this.table[index][0] == key){
//                 return this.table[index][1]
//             }
//             index = (index +1 ) % this.size
//         }
//         return undefined
//     }

//     remove(key){
//         let index = this.hash(key)
//         while(this.table[index]!=null){
//             if(this.table[index][0] == key){
//                 this.table[index] = null
//             }
//             index = (index +1) % this.size
//         }
//     }

//     display(){
//         for(let i =0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// let   t = new hashtable(10)

// t.set('asd',32)
// t.set('as',32)
// t.set('ad',32)
// t.set('ad',2)
// console.log(t.get('as'))
// t.remove('asd')


// t.display()

// ////////////////////Flat///

// function flattenarray(arr){
//     let result = []
//     arr.forEach(val =>{
//         if(Array.isArray(val)){
//             result = result.concat(flattenarray(val))
//         } else {
//             result.push(val)
//         }
//     })
//     return result
// }

// let a =[1,[4,6,5],4,2,6,[4,8,[2,1,[7,5]],9]]

// console.log(flattenarray(a))

// ///////split////

// let str = 'hfgabckiyabcjgabgacbab'

// function split(str,separator){
//     let result = []
//     let startindex = 0
//     let matchindex

//     if(separator ==''){
//         for(let i =0;i<str.length;i++){
//             result.push(str.charAt(i))
//         }
//         return result
//     }

//     console.log( str.indexOf(separator,startindex))

//     while((matchindex = str.indexOf(separator,startindex))!=-1){
//           result.push(str.slice(startindex,matchindex))
//           startindex = matchindex + separator.length
//     }
//     result.push(str.slice(startindex))

//     return result
// }

// console.log(split(str,'abc'))

// //////find the count of  substr/////////////////////////////////////////////////


// let str = 'hfgabckiyabcjgabgacbab'

// function count(str,substr){
//        let c = 0
//        let position = 0

//        while(( position = str.indexOf(substr,position)) != -1 ){
//         c++
//         position += substr.length
//        }

//        return c
// }

// console.log(count(str,'ab'));


// //////////////////////marks////////////////

//  let    students = [
//     {
//       "name": "Alice",
//       "marks": {
//         "math": 85,
//         "science": 90,
//         "history": 95
//       }
//     },
//     {
//       "name": "Bob",
//       "marks": {
//         "math": 80,
//         "science": 92,
//         "history": 88
//       }
//     },
//     {
//       "name": "Charlie",
//       "marks": {
//         "math": 95,
//         "science": 88,
//         "history": 82
//       }
//     }
//   ]

//   function topmarks(data){
//     let top = {
//         science : {name : '',mark : -1},
//         math : {name : '',mark : -1},
//         history : {name : '',mark : -1}
//     }

//     data.forEach(student => {
//         for(let [subject,mark] of Object.entries(student.marks)){
//             if(mark > top[subject].mark ){
//                 top[subject] = {name : student.name,mark : mark}
//             }
//         }
//     });

//     return top

//   }

//   console.log(topmarks(students))