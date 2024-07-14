class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{

    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getsize(){
        return this.size
    }

    print(){
        if(this.isEmpty()){
            console.log("the list is empty");
        } else {
            let l = ""
            let curr = this.head
            while(curr){
                l += `${curr.value}`
                curr = curr.next
            }
            let l2 = l.split('').reverse().join('')
            return l == l2

        }
    }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else {
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    isPalindrome() {
        if (!this.head || !this.head.next) {
          return true;
        }
    
        let slow = this.head;
        let fast = this.head;
    
        while (fast && fast.next) {
          slow = slow.next;
          fast = fast.next.next;
        }

        // console.log(slow)
    
        let reversedSecondHalf = this.reverseLinkedList(slow);
    //     console.log(this.head)
    //    console.log(reversedSecondHalf)
        while (reversedSecondHalf) {
            // console.log(reversedSecondHalf.value)
          if (this.head.value !== reversedSecondHalf.value) {
            return false;
          }
          this.head = this.head.next;
          reversedSecondHalf = reversedSecondHalf.next;
        }
    
        return true;
      }
    
      reverseLinkedList(head) {
        
        let prev = null;
        let current = head;
    
        while (current) {
          const nextNode = current.next;
          current.next = prev;
          prev = current;
          current = nextNode;
        }
    
        return prev;
      }

}

const list = new LinkedList()

list.append(1)

list.append(2)

list.append(3)

list.append(3)

list.append(2)

list.append(1)
console.log(list.print())

// console.log(list.isPalindrome())

list.print()
