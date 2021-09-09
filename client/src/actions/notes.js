export const setNotes = notes=>{
    return {
        type: 'SET_NOTES',
        payload: notes
    }
}
export const deleteNote = note=>{
    return{
        type: 'DELETE_NOTE',
        payload: note
    }
}
export const editNote = (prevNote, newTitle, newBody)=>{
    return{
        type: 'EDIT_NOTE',
        payload: {...prevNote, title:newTitle, body:newBody}
    }
}
export const addNote = note=>{
    return {
        type: 'ADD_NOTE',
        payload: note
    }
}