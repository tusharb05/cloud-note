import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

const AddNote = () => {
    const [shown, setShown] = useState(false)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const id = useSelector(state=>state.loginReducer.details._id)

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
            console.log(data)
        })
    }

    return (
        <div>
            <form action="" id="add-note-form" onSubmit={e=>handleSubmit(e)}>
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
                        onChange={e=>setBody(e.target.value)}/>
                }
                <button>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
