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