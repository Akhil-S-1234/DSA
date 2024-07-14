class hashtable {
    constructor(){
        this.table = {}
    }

    hash(key){
        let hashvalue = 0
        for(let i =0 ;i<key.length;i++){
            hashvalue += key.charCodeAt(i)
        }
        return hashvalue % 10
    }

    insert(key,value){
      let index = this.hash(key)
      this.table[index] = value
    }

    get(key){
        let index = this.hash(key)
        return this.table[index]
    }

    remove(key){
        let index = this.hash(key)
        if(this.table[index]){
            delete this.table[index]
        }
    }
}

let h = new hashtable()
h.insert('name','akhil')
h.insert('age',3)
h.insert('t','53')
h.insert('f','3')

console.log(h.get('t'));
console.log(h.get('name'));
console.log(h.get('age'));
console.log(h.get('f'));
h.remove('t')
console.log(h.get('t'));
