import React, {useState} from 'react'
import './SingleSidebarNote.css'
import { useDispatch } from 'react-redux'
import { setShowNote } from '../../actions/showNote'
import { deleteNote } from '../../actions/notes'
import {FaPen, FaTrash} from 'react-icons/fa'
import Popup from 'reactjs-popup'

const SingleSidebarNote = (props) => {
    const [edittedTitle, setEdittedTitle] = useState(props.note.title)
    const [edittedBody, setEdittedBody] = useState(props.note.body)

    const dispatch = useDispatch()

    const deleteFunction = ()=>{
        dispatch(deleteNote(props.note))
        fetch('http://localhost:5000/api/notes/delete', {
            method: 'POST',
            body: JSON.stringify(props.note),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{dispatch(setShowNote(''))})
    }

    const updateFunction = e=>{
        e.preventDefault()
        
        fetch(`http://localhost:5000/api/notes/update/${props.note._id}`, {
            method:'POST',
            body: JSON.stringify({
                newTitle: edittedTitle,
                newBody: edittedBody
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            dispatch(setShowNote(''))
            props.setUpdation(!props.updation)
        })
    }

    return (
        <div id="single-note" style={{cursor:'pointer'}}>
            <div className="title" style={{maxWidth:'90%', width:'90%',wordBreak:'break-word'}}>
                <h2 style={{marginTop:'13px',marginBottom:'0'}} onClick={()=>dispatch(setShowNote(props.note))}>
                {props.note.title.length>24 ? 
                props.note.title.substring(0,44) + '...'
                :
                props.note.title
                }
                </h2>
            </div>
            
            <Popup 
                trigger={<button className="edit-icon">
                            <FaPen color="#50CB93"/>
                        </button>} position="right">

                <div id="popup">
                    
                    <form action="" onSubmit={e=>updateFunction(e)} >
                        <h2>Edit The Note</h2>
                        <label htmlFor="">Title</label>
                        <input 
                            type="text" 
                            required
                            value={edittedTitle} 
                            onChange={e=>setEdittedTitle(e.target.value)}/>

                        <label htmlFor="">Body</label>
                        <textarea 
                            value={edittedBody} required id="" cols="30" rows="5"
                            onChange={e=>setEdittedBody(e.target.value)}>
                        </textarea>
                        <button id="edit-submit-btn">Update Note</button>

                    </form>
                </div>

            </Popup>

            <button onClick={deleteFunction} className="delete-icon">
                <FaTrash color="#CD113B"/>
            </button>
        </div>
    )
}

export default SingleSidebarNote
