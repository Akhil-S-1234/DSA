function longrep(str){
    let charmap = new Map()
    longchar = ''
    longcount  = 0
    for(let  char of str){
        charmap.set(char , (charmap.get(char) || 0) +1)
        if(charmap.get(char)>longcount){
            longcount = charmap.get(char)
            longchar = char
        }
    }
    console.log(charmap);
    return [longchar,longcount]
}


function dup(str){
    let map = {}
    let dup = new Set()
    for(let char of str){
        if(map[char]){
            dup.add(char)
        } else {
             map[char] = true
        }
    }
    return [...dup]
}

let  a ='gaanjjjj'

console.log(dup(a))