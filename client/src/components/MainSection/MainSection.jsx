import React from 'react'
import {useSelector} from 'react-redux'
import './MainSection.css'
import AddNote from '../AddNote/AddNote'

const MainSection = () => {
    const note = useSelector(state=>state.showNoteReducer)
    // console.log(note)
    return (
        <div id="main-section-container">
            {/* <h1>Hello</h1> */}
            {/* <p>Title</p> */}
            <h1 style={{margin:0}}>{note?.title}</h1>        
            {/* <p>Body</p> */}
            <h3 style={{margin:0}}>{note?.body}</h3>
            <AddNote/>
        </div>
    )
}

export default MainSection
