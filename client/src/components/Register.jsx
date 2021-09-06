import React, {useState} from 'react'
import './Register.css'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        fetch('/user/register', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        
    }
    return (
        <div>
            <form onSubmit={e=>handleSubmit(e)}>
                <label htmlFor="">Username</label>
                <input 
                    type="text"
                    value={username}
                    onChange={e=>setUsername(e.target.value)}
                />

                <label htmlFor="">Email</label>
                <input 
                    type="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)} 
                />

                <label htmlFor="">Password</label>
                <input 
                    type="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}/>

                <button>Add</button>
            </form>
        </div>
    )
}

export default Register
