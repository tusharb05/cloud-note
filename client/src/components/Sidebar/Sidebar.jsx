import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import './Sidebar.css'

const Sidebar = () => {
    const authorID = useSelector(state=>state.details._id)

    const fetchNotesTitle = ()=>{
        // console.log('say what')
        fetch(`http://localhost:5000/api/notes/titles/${authorID}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
        // let response = await fetch('http://localhost:5000/api/notes/titles/')
    }

    useEffect(()=>{
        fetchNotesTitle()
        console.log('hello')
    }, [])
    return (
        <div id="sidebar">
            <h3>Hello</h3>
            <h3>Hello</h3>
            <h3>Hello</h3>
            <h3>Hello</h3>
            <h3>Hello</h3>
            <h3>Hello</h3>
        </div>
    )
}

export default Sidebar
