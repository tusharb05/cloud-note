const notesReducer = (state=[], action)=>{
    switch(action.type){
        case 'SET_NOTES':
            state = []
            return state = [...action.payload, ...state]
        
        case 'DELETE_NOTE':
            let newList = state.filter(note=>note!==action.payload)
            // return state[0].splice(state.indexOf(action.payload), 1)
            return newList

        case 'EDIT_NOTE':
            // let index = state.indexOf(action.payload.prevNote)
            // state.splice(index, 1)
            // state.splice(index,0,action.payload.updatedNote)
            state.map(s=>{
                if(s._id===action.payload._id){
                    s = action.paylaod
                }
            })
            return state
        
        case 'ADD_NOTE':
            return [action.payload, ...state]

        default: 
            return state
    }
}

export default notesReducer