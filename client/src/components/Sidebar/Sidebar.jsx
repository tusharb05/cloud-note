import React, {useEffect, useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setNotes } from '../../actions/notes'
import SingleSidebarNote from '../SingleSidebarNote/SingleSidebarNote'
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
    }, [authorID, dispatch])

    useEffect(()=>{
        fetchNotesTitle()
        console.log('hello')
        
    }, [fetchNotesTitle])

    console.log(allNotes)
    return (
        <div id="sidebar">
            {
                allNotes?.map((note,index)=>{
                    return <SingleSidebarNote note={note} key={index}/>
                })
            }
        </div>
    )
}

export default Sidebar
