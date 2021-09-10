import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { setLoginTrue, setLoginDetails } from '../../actions/login'
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    const dispatch = useDispatch()

    const handleLogin = async (e)=>{
        e.preventDefault()
        fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers:{
                'Content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.status === 'last step left!'){
                dispatch(setLoginTrue())
                dispatch(setLoginDetails({...data._doc}))
                history.push('/')
            }
        })
    }

    return (
        <div id="login-container">
            <form onSubmit={e=>handleLogin(e)} id="login-form">
                <h1>Login</h1>
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

                <button>Add</button>
                <Link to="/register" id="link-login">Haven't registered yet?</Link>
            </form>
            
        </div>
    )
}

export default Login
