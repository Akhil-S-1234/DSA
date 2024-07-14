class Node{
    constructor(key,value){
        this.key = key
        this.value = value
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
    }

    add(key,value){
        if(!this.head){
            this.head = new Node(key,value)
            return
        }
        let current = this.head

        while(current){
            if(current.key==key){
                current.value = value
                return
            }

            if(!current.next){
                current.next = new Node(key,value)
                return
            }
            current = current.next
        }
    }

    get(key){

        let current = this.head

        while(current){
            if(current.key==key){
                return current.value
            }
            current = current.next
        }
        return undefined
    }

    remove(key){
        if(!this.head){
            return
        }
        if(this.head.key == key){
           this.head = this.head.next
           return
        }

        let current = this.head

        while(current.next){
            if(current.next.key==key){
                current.next = current.next.next
                return
            }
            current = current.next
        }
    }
}

class hashtable{
    constructor(size){
        this.size = size
        this.table = Array(size).fill(null).map(()=> new linkedlist())
    }

    hash(key){
        let total = 0
        for(let i =0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        let index = this.hash(key)
        this.table[index].add(key,value)
    }
    get(key){
        let index = this.hash(key)
        return this.table[index].get(key)
    }
    remove(key){
        let index = this.hash(key)
        this.table[index].remove(key)
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i].head !== null) {
                let current = this.table[i].head;
                while (current) {
                    console.log(`Index ${i}: { key: ${current.key}, value: ${current.value} }`);
                    current = current.next;
                }
            }
        }
    }
}

// Sample input and usage

const ht = new hashtable(10);

ht.set("name", "Alice");
ht.set("age", 25);
ht.set("occupation", "Engineer");
ht.set("name", "Bob"); // This will update the value for the key "name"

console.log("Get 'name':", ht.get("name")); // Output: Bob
console.log("Get 'age':", ht.get("age")); // Output: 25
console.log("Get 'occupation':", ht.get("occupation")); // Output: Engineer

ht.remove("age");
console.log("Get 'age' after removal:", ht.get("age")); // Output: undefined

ht.display();