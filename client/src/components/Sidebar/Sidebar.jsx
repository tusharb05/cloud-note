import React, {useEffect, useCallback, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setNotes } from '../../actions/notes'
import SingleSidebarNote from '../SingleSidebarNote/SingleSidebarNote'
import './Sidebar.css'

const Sidebar = () => {
    const authorID = useSelector(state=>state.loginReducer.details._id)
    const allNotes = useSelector(state=>state.notesReducer)
    // console.log(authorID)
    const dispatch = useDispatch()
    const [updation, setUpdation] = useState(false)

    const fetchNotesTitle = useCallback(()=>{
        fetch(`http://localhost:5000/api/notes/titles/${authorID}`)
        .then(res=>res.json())
        .then(data=>dispatch(setNotes(data.found)))
    }, [authorID, dispatch])

    useEffect(()=>{
        fetchNotesTitle()
        // console.log('hello')
    }, [fetchNotesTitle, updation])

    // console.log(allNotes)
    return (
        <div id="sidebar">
            <div className="heading">
                <h1>Cloud Note</h1>
            </div>
            {
                allNotes?.map((note,index)=>{
                    return <SingleSidebarNote note={note} key={index} updation={updation} setUpdation={setUpdation}/>
                })
            }
        </div>
    )
}

export default Sidebar
