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
        <div id="register-container">
            <form onSubmit={e=>handleSubmit(e)} id="register-form">
                <h1>Sign Up</h1>
                <input 
                    type="text"
                    value={username}
                    onChange={e=>setUsername(e.target.value)}
                    placeholder="Username"
                />

                <input 
                    type="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)} 
                    placeholder="Email"
                />

                <input 
                    type="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    placeholder="Password"
                />

                <button>Register</button>
                <Link to="/login" id="link-register">Already have an account?</Link>
            </form>
            
        </div>
    )
}

export default Register
