class Node {
    constructor(val){
        this.value = val
        this.next = null
    }
}

class queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0

    }

    isempty(){
        return this.size == 0
    }

    enqueue(val){
        let node = new Node(val)
        if(this.isempty()){
            this.front = node
        } else {
            this.rear.next  = node   
        }
        this.rear = node 
        this.size++
    } 

    dequeue(){
        if(this.isempty()){
            return 'UNDERFLOW'
        } 
        let dequeuenode = this.front
        this.front = this.front.next
        if(this.front == null){
            this.rear = null
        }
        this.size--
        return dequeuenode.value
    }

    peek(){
        return this.front ? this.front.value : null
    }

    display(){
        let curr = this.front
        
        while(curr){
            console.log(curr.value);
            curr = curr.next
        }
    }

    //  Recursive function to reverse the queue using a linked list
    // reverseQueueRecursive(node, prev = null) {
    //     if (node === null) {
    //       return prev; // Base case: return the previous node (which is the new front of the reversed queue)
    //     }
      
    //     const nextNode = node.next; // Save the reference to the next node before changing it
      
    //     node.next = prev; // Reverse the link
      
    //     // Recursively reverse the remaining list, passing the current node as the previous node
    //     return this.reverseQueueRecursive(nextNode, node);
    //   }
      
  
    //   reverse() {
    //     this.front = this.reverseQueueRecursive(this.front);
    //     this.back = null; // Back becomes null as elements are appended at the end
    //   }
    reverse(){
        let prev = null
        let curr = this.front
        while(curr!=null){
            const next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.front = prev
        this.rear = this.isempty() ? null : this.front
    }
}

let a = new queue()

a.enqueue(4)
a.enqueue(3)
a.enqueue(2)
a.display()
a.reverse()
// console.log(a);
a.display()
