const notesReducer = (state=[], action)=>{
    switch(action.type){
        case 'SET_NOTES':
            return state = action.payload
        
        default: 
            return state
    }
}

export default notesReducer