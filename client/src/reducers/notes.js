const notesReducer = (state=[], action)=>{
    switch(action.type){
        case 'SET_NOTES':
            return state = [action.payload, ...state]
        
        default: 
            return state
    }
}

export default notesReducer