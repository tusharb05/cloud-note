import React from 'react'
import {useSelector} from 'react-redux'
import './MainSection.css'

const MainSection = () => {
    const note = useSelector(state=>state.showNoteReducer)
    // console.log(note)
    return (
        <div id="main-section-container">
            <h1>Hello</h1>
            <h1>{note?.title}</h1>        
            <h3>{note?.body}</h3>
        </div>
    )
}

export default MainSection
