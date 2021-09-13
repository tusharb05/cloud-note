import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addNote } from '../../actions/notes'
import './AddNote.css'
import {useHistory} from 'react-router-dom'

const AddNote = () => {
    const [shown, setShown] = useState(false)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()

    const id = useSelector(state=>state.loginReducer.details._id)
    const loginDetails = useSelector(state=>state.loginReducer.details)
    const history = useHistory()
    
    const handleSubmit = e=>{
        e.preventDefault()
        fetch('http://localhost:5000/api/notes/add', {
            method: 'POST',
            body: JSON.stringify({
                authorID: id,
                title: title,
                body: body
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setShown(false)
            setTitle('')
            setBody('')
            dispatch(addNote(data.note))
            // console.log(data)
        })
    }

    return (
        <div id="addnote-container" style={{display:'flex'}}>
            {
                Object.keys(loginDetails).length!==0 &&
                
                <form action="" id="addnote-form" onSubmit={e=>handleSubmit(e)}>
                {
                    !shown && 
                    <h1 style={{color:'white'}}>Add A Note</h1>
                }
                <input 
                    type="text" 
                    onFocus={()=>setShown(true)} 
                    placeholder={shown ? 'Title':'Add New Note...'}
                    value={title}
                    onChange={e=>setTitle(e.target.value)}/>
                {
                    shown && 
                    <textarea 
                        placeholder="Body"
                        value={body}
                        onChange={e=>setBody(e.target.value)}
                        style={{height:'80%'}}/>
                }
                {
                    shown &&
                    <button>Add Note</button>
                }
                
                </form>
            }
            <div className="utilites-btn" style={{display:'flex',alignItems:'center', height:'100%', width:'70%', justifyContent:'center'}}>
                {
                    Object.keys(loginDetails).length===0 ?

                    <div 
                    style={{
                        display:'flex',
                        flexDirection:'column',
                        padding:'20px 30px 20px 30px',
                        margin:'auto'}}>

                        <button className="asdf" onClick={()=>history.push('/login')}>Sign In</button>

                        <button className="asdf" onClick={()=>history.push('/register')}>Register</button>
                    </div>
                    :
                    <div
                    style={{
                        position:'absolute',
                        right:'10%'
                    }}
                    >
                        <button className="signout-btn" onClick={()=>window.location.reload()}>Sign Out</button>
                    </div>
                    
                }
            </div>
        </div>
    )
}

export default AddNote
