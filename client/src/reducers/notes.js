const notesReducer = (state=[], action)=>{
    switch(action.type){
        case 'SET_NOTES':
            return state = [...action.payload, ...state]
        
        case 'DELETE_NOTE':
            let newList = state.filter(note=>note!==action.payload)
            // return state[0].splice(state.indexOf(action.payload), 1)
            return newList

        default: 
            return state
    }
}

export default notesReducer