const notesReducer = (state=[], action)=>{
    switch(action.type){
        case 'SET_NOTES':
            state = []
            return state = [...action.payload, ...state]
        
        case 'DELETE_NOTE':
            let newList = state.filter(note=>note!==action.payload)
            return newList

        case 'ADD_NOTE':
            return [action.payload, ...state]

        default: 
            return state
    }
}

export default notesReducer