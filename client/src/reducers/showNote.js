const showNoteReducer = (state={},action)=>{
    switch(action.type){
        case 'SET_SHOW_NOTE':
            return state=action.payload
        default:
            return state
    }
}
export default showNoteReducer