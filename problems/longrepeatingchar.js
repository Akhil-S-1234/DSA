let a = "gaamjjjj"

function longrepeatingchar(str){
      let map = {}
      let charcount = 0
      let maxchar 

      for(let char of str){
        if(map[char]){
            map[char]++
            if(map[char]>charcount){
                charcount = map[char]
                maxchar = char
            }
        }  else {
            map[char] = 1
        }
      }

      return [charcount,maxchar]
      

}

console.log(longrepeatingchar(a))