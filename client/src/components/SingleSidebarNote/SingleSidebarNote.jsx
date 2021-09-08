import React from 'react'
import './SingleSidebarNote.css'
import { useDispatch } from 'react-redux'
import { setShowNote } from '../../actions/showNote'
import {FaPen, FaTrash} from 'react-icons/fa'

const SingleSidebarNote = (props) => {
    const dispatch = useDispatch()

    const deleteFunction = ()=>{
        console.log(props)
        //delete from redux
        //delete from database
    }

    return (
        <div style={{cursor:'pointer'}} onClick={()=>dispatch(setShowNote(props.note))}>
            <h2>
            {props.note.title.length>14 ? 
            props.note.title.substring(0,14) + '..'
            :
            props.note.title}
            </h2>

            <button className="edit-icon">
                <FaPen color="#50CB93"/>
            </button>

            <button onClick={deleteFunction} className="delete-icon">
                <FaTrash color="#CD113B"/>
            </button>
        </div>
    )
}

export default SingleSidebarNote
