import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import './Register.css'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:5000/api/user/register', {
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
        .then(data=>{
            if(data.status==='success'){
                history.push('/login')
            }else if(data.status==='email exists'){
                alert('Account Exists With That Email!')
            }else if(data.status==='error'){
                alert('An Error Occured!')
            }
        })
        
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
            <Link to="/login">Already have an account?</Link>
        </div>
    )
}

export default Register
