class trienode{
    constructor(){
        this.children = {}
        this.isendofword = false
    }
}

class trie{
    constructor(){
        this.root = new trienode()
    }

    insert(word){
        let curr = this.root
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new trienode()
            }
            curr = curr.children[char]
        }
        curr.isendofword = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isendofword
    }

    printwords(node = this.root,currentword = '',result=[]){
        if(node.isendofword){
            result.push(currentword)
        }

        for(let char in node.children){
            this.printwords(node.children[char],currentword+char,result)
        }
        return result
    }

    autocomplete(word){
        let node  = this.root
        for(let char of word){
            if(!node.children[char]){
                return []
            }
            node = node.children[char]
        }
        let list = []
        this.collectionword(node,word,list)
        return list
    }

    collectionword(node,word,list){
        if(node.isendofword){
            list.push(word)
        }

        for(let char in node.children){
            this.collectionword(node.children[char],word+char,list)
        }
    }
}

let t = new trie()

t.insert('akhil')
t.insert('ray')

console.log(t.search('r'));

console.log(t.printwords())

console.log(t.autocomplete('r'));