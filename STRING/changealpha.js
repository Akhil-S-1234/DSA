function replaceAlphabets(str, n) {
    const characters = str.split("");
  
    for (let i = 0; i < characters.length; i++) {
      const char = characters[i];
  
      
      if (/[a-z]/i.test(char)) {
        const baseIndex = char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
        const newIndex = (baseIndex + n) % 26; 
        characters[i] = String.fromCharCode(newIndex + 'a'.charCodeAt(0));
  
       
        characters[i] = char.toUpperCase() === char ? characters[i].toUpperCase() : characters[i];
      }
    }
  
    return characters.join("");
  }

 let a =  replaceAlphabets(' THe WoRld ! ',9)
 console.log(a);