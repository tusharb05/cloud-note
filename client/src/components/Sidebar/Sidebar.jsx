import React, {useEffect, useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setNotes } from '../../actions/notes'
import './Sidebar.css'

const Sidebar = () => {
    const authorID = useSelector(state=>state.loginReducer.details._id)
    const allNotes = useSelector(state=>state.notesReducer)
    // console.log(authorID)
    const dispatch = useDispatch()

    const fetchNotesTitle = useCallback(()=>{
        fetch(`http://localhost:5000/api/notes/titles/${authorID}`)
        .then(res=>res.json())
        .then(data=>dispatch(setNotes(data.found)))
    }, [authorID])

    useEffect(()=>{
        fetchNotesTitle()
        console.log('hello')
        
    }, [fetchNotesTitle])

    return (
        <div id="sidebar">
            {
                allNotes.map((note,index)=>{
                    return <h1>{note.title}</h1>
                })
            }
        </div>
    )
}

export default Sidebar
