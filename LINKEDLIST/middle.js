class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isempty() {
        return this.size === 0;
    }

    getsize() {
        return this.size;
    }

    append(value) {
        let node = new Node(value);
        if (!this.isempty()) {
            node.next = this.head;
        }
        this.head = node;
        this.size++;
    }

    middledelete() {
        if (this.isempty()) return;

        let slow = this.head;
        let fast = this.head;
        let prev = null;

        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        // If there's only one node, simply remove it
        if (prev === null) {
            this.head = null;
        } else {
            prev.next = slow.next;
        }
        this.size--;
    }

    print() {
        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

let l = new LinkedList();
l.append(3);
l.append(1);
l.append(2);
l.append(5);
l.append(7);
console.log("Original list:");
l.print();
l.middledelete();
console.log("After deleting the middle node:");
l.print();

function middledelete(head){
    let slow = head
    let fast = head
    let curr = null
    while(fast && fast.next){
        curr = slow
        slow = slow.next 
        fast = fast.next.next
    }
    if(curr){
        slow.next = curr.next
    }else{
        
    }
    return head
}