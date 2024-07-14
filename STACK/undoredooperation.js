class undoredo {
    constructor(){
        this.undostack = []
        this.redostack = []
    }

    Doaction(act){
        this.undostack.push(act)
        this.redostack = []
    }

    undo(){
        if(this.undostack.length == 0){
            console.log('Nothing to undo')
            return
        }
        let lastaction = this.undostack.pop()
        this.redostack.push(lastaction)
        console.log('Undo', lastaction)
    }

    redo(){
        if(this.redostack.length == 0){
            console.log('Nothing to redo')
            return
        }
        let lastUndoneaction = this.redostack.pop()
        this.undostack.push(lastUndoneaction)
        console.log('Redo' , lastUndoneaction)
    }
}

let act = new undoredo()

act.Doaction('action 1')
act.Doaction('action 2')
act.Doaction('action 3')
 
act.undo()
act.undo()
act.undo()
act.undo()
act.redo()
act.redo()
act.redo()
act.redo()