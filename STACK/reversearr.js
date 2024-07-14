class stack{
    constructor(){
        this.items  = []
    }
    push(val){
        this.items.push(val)
    }
    pop(){
        return this.items.pop()
    }
    isempty(){
        return this.items.length == 0
    }
    recursereverse(stack){
        if(stack.isempty()){
            return
        }
        let elem = stack.pop()
        
    }
}