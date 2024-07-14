class hashtable {
    
    constructor(size){
        this.table = new Array(size)
        this.size  = size
    }

    hash(key){
        let total = 0
        for(let i = 0; i < key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index]

        if(!bucket){
            this.table[index] = [[key,value]]
        } else {
            let samekeyitem = bucket.find(item => item[0] == key)
            if(samekeyitem){
                samekeyitem[1] = value
            } else {
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]

        if(bucket){
            let samekeyitem = bucket.find(item => item[0] == key)
            if(samekeyitem){
                return samekeyitem[1]
            }
        }

        return undefined
    }

    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]

        if(bucket){
            let samekeyitem = bucket.find(item => item[0] == key)
            if(samekeyitem){
                bucket.splice(bucket.indexOf(samekeyitem),1)
            }
        }
    }

    display(){
        for(let i =0 ;i < this.table.length ;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

let q  = new hashtable(30)

q.set('az','akhil')
q.set('b','sih')
q.set('c','ss')
q.set('e','hghg')
q.set('d','123')

q.remove('c')
// console.log(q.get('b'))

q.display()