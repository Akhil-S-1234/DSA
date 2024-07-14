class undoredostack{
    constructor(){
        this.undostack = []
        this.redostack = []
    }

    doaction(act){
        this.undostack.push(act)
        this.redostack = []
    }

    undo(){
        if(this.undostack.length == 0){
            console.log('Nothing to undo'); 
            return
        }

        let lastact = this.undostack.pop()
        this.redostack.push(lastact)
        console.log('Undo',lastact)
    }

    redo(){
        if(this.redostack.length == 0){
            console.log('Nothing to redo'); 
            return
        }

        let lastact = this.redostack.pop()
        this.undostack.push(lastact)
        console.log('Redo',lastact);
    }
}

let act = new undoredostack()

act.doaction('action 1')
act.doaction('action 2')
act.doaction('action 3')

act.undo()
act.undo()
act.undo()
act.undo()

act.redo()
act.redo()
act.redo()
