import React from 'react'
import './SingleSidebarNote.css'
import { useDispatch } from 'react-redux'
import { setShowNote } from '../../actions/showNote'

const SingleSidebarNote = (props) => {
    const dispatch = useDispatch()
    return (
        <div style={{cursor:'pointer'}} onClick={()=>dispatch(setShowNote(props.note))}>
            <h2>{props.note.title}</h2>
        </div>
    )
}

export default SingleSidebarNote
