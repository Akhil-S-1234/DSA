function vowelcount(str){
    let vowel = 'aeiouAEIOU'
    let c = 0
    for(let char of str){
        if(vowel.includes(char)){
            c++
        }
    }
    return c
}

let count = vowelcount('akhil')
console.log(count);