class hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let  i = 0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key)
        while(this.table[index]!=null && this.table[index][0]!= key){
            index = (index+1) % this.size
        }
        this.table[index] = [key,value]

    }

    get(key){
        let index = this.hash(key)
        while(this.table[index] != null){
            if(this.table[index][0]==key){
                return this.table[index][1]
            }
            index = (index +1 ) % this.size
        }
        return undefined
    }

    remove(key){
        let index = this.hash(key)
        while(this.table[index]!=null){
            if(this.table[index][0] == key){
                this.table[index] = null
            }
            index = (index + 1) % this.size
        }
    }

    display(){
        for(let i = 0 ;i < this.table.length ;i++){
            if(this.table[index]){
                console.log(i,this.table[i])
            }
        }
    }


}